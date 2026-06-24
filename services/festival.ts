import pool from '@/lib/db'

export interface Festival {
  id: string
  name: string
  contentType: string
  region: string | null
  address: string | null
  imageUrl: string | null
  description: string | null
  detailUrl: string | null
  phone: string | null
  businessHours: string | null
  startDate: string | null
  endDate: string | null
}

interface HeritageRow {
  id: string
  name: string
  content_type: string
  region: string | null
  address: string | null
  image_url: string | null
  description: string | null
  detail_url: string | null
  phone: string | null
  business_hours: string | null
  start_date: string | Date | null
  end_date: string | Date | null
}

// DB가 DATE 컬럼을 문자열 또는 Date 객체로 반환할 수 있어 둘 다 안전하게 처리
function formatDate(value: string | Date | null): string | null {
  if (!value) return null
  if (value instanceof Date) {
    const y = value.getFullYear()
    const m = String(value.getMonth() + 1).padStart(2, '0')
    const d = String(value.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }
  return value.slice(0, 10)
}

// 체험·축제로 노출할 무형유산 content_type (공연/공방 = 공연·체험)
const FESTIVAL_TYPES = ['공연', '공방']

const SELECT_COLUMNS = `id, name, content_type, region, address, image_url,
            description, detail_url, phone, business_hours, start_date, end_date`

function toFestival(row: HeritageRow): Festival {
  return {
    id: String(row.id),
    name: row.name,
    contentType: row.content_type,
    region: row.region,
    address: row.address,
    imageUrl: row.image_url,
    description: row.description,
    detailUrl: row.detail_url,
    phone: row.phone,
    businessHours: row.business_hours,
    startDate: formatDate(row.start_date),
    endDate: formatDate(row.end_date),
  }
}

export async function getFestivals(): Promise<Festival[]> {
  const { rows } = await pool.query<HeritageRow>(
    `SELECT ${SELECT_COLUMNS}
     FROM heritage
     WHERE content_type = ANY($1)
     ORDER BY (image_url IS NULL), content_type, name
     LIMIT 100`,
    [FESTIVAL_TYPES],
  )
  return rows.map(toFestival)
}

export async function getFestivalById(id: string): Promise<Festival | null> {
  const { rows } = await pool.query<HeritageRow>(
    `SELECT ${SELECT_COLUMNS}
     FROM heritage
     WHERE id = $1`,
    [id],
  )
  return rows[0] ? toFestival(rows[0]) : null
}
