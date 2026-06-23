import { NextRequest, NextResponse } from 'next/server'

import pool from '@/lib/db'

interface VideoRow {
  id: number
  title: string
}

interface HeritageRow {
  name: string
  content_type: string
  region: string | null
  address: string | null
  latitude: number
  longitude: number
  description: string | null
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const { rows: videoRows } = await pool.query<VideoRow>(
    'SELECT id, title FROM videos WHERE id = $1',
    [Number(id)],
  )
  if (!videoRows[0]) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const { title } = videoRows[0]

  const { rows: heritageRows } = await pool.query<HeritageRow>(
    `SELECT name, content_type, region, address, latitude, longitude, description
     FROM heritage
     WHERE name ILIKE $1
       AND latitude IS NOT NULL
       AND latitude != 0
     ORDER BY content_type`,
    [`%${title}%`],
  )

  return NextResponse.json({ title, heritage: heritageRows })
}
