import { NextRequest, NextResponse } from 'next/server'

import pool from '@/lib/db'
import { getPresignedUrl } from '@/lib/r2'

// presigned URL 메모리 캐시 (TTL: 50분, 만료 전 재발급)
const cache = new Map<string, { url: string; expiresAt: number }>()
const TTL_MS = 50 * 60 * 1000

interface VideoRow {
  r2key: string
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const cached = cache.get(id)
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.redirect(cached.url)
  }

  const { rows } = await pool.query<VideoRow>('SELECT r2key FROM videos WHERE id = $1', [Number(id)])
  if (!rows[0]) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const url = await getPresignedUrl(rows[0].r2key)
  cache.set(id, { url, expiresAt: Date.now() + TTL_MS })

  return NextResponse.redirect(url)
}
