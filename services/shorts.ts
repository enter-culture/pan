import type { Category, Short } from '@/types'

import pool from '@/lib/db'

interface VideoRow {
  id: number
  title: string
  description: string | null
  category: string
  sub_category: string | null
  region: string | null
  r2key: string
  heritage_id: string | null
  created_at: string
}

const CATEGORY_MAP: Record<string, Exclude<Category, '전체'>> = {
  '강강술래': '춤',
  '하회별신굿탈놀이': '춤',
  '판소리': '음악',
  '아리랑': '음악',
  '줄타기': '축제',
}

const R2_BASE_URL = process.env.R2_BASE_URL!

function toShort(row: VideoRow): Short {
  const category: Exclude<Category, '전체'> = CATEGORY_MAP[row.title] ?? '전통'
  return {
    id: String(row.id),
    title: row.title,
    thumbnail: '',
    videoUrl: `${R2_BASE_URL}/${row.r2key}`,
    category,
    description: row.description ?? '',
    hashtags: [row.title, row.region, row.category].filter(Boolean) as string[],
    relatedCultureId: row.heritage_id ?? '',
    createdAt: new Date(row.created_at).toISOString().slice(0, 10),
  }
}

export async function getShorts(category?: Category): Promise<Short[]> {
  const { rows } = await pool.query<VideoRow>('SELECT * FROM videos ORDER BY id')
  const shorts = rows.map(toShort)
  if (!category || category === '전체') return shorts
  return shorts.filter((s) => s.category === category)
}

export async function getShortById(id: string): Promise<Short> {
  const { rows } = await pool.query<VideoRow>('SELECT * FROM videos WHERE id = $1', [Number(id)])
  if (!rows[0]) {
    throw new Error('Short not found')
  }
  return toShort(rows[0])
}

export async function searchShorts(query: string): Promise<Short[]> {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const { rows } = await pool.query<VideoRow>(
    `SELECT * FROM videos
     WHERE LOWER(title) LIKE $1
        OR LOWER(description) LIKE $1
        OR LOWER(region) LIKE $1
     ORDER BY id`,
    [`%${q}%`],
  )
  return rows.map(toShort)
}
