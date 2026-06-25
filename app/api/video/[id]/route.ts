import { NextRequest, NextResponse } from 'next/server'

import pool from '@/lib/db'

interface VideoRow {
  r2key: string
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const { rows } = await pool.query<VideoRow>('SELECT r2key FROM videos WHERE id = $1', [Number(id)])
  if (!rows[0]) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const url = `${process.env.R2_BASE_URL}/${rows[0].r2key}`
  return NextResponse.redirect(url)
}
