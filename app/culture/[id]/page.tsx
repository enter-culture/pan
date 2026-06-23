import { notFound } from 'next/navigation'

import pool from '@/lib/db'
import { CultureMapSection } from '@/components/culture/CultureMapSection'

import { CultureHeader } from './CultureHeader'
import { body, description, locationBadge, locationRow, mapSection, pageWrapper, sectionTitle, titleText } from './culture.css'

interface VideoRow {
  title: string
  description: string | null
  region: string | null
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

interface PageProps {
  params: Promise<{ id: string }>
}

const CONTENT_TYPE_LABEL: Record<string, string> = {
  '종목': '무형유산 종목',
  '공방': '공방/전수관',
  '공연': '공연',
}

export default async function CulturePage({ params }: PageProps) {
  const { id } = await params

  const { rows: videoRows } = await pool.query<VideoRow>(
    'SELECT title, description, region FROM videos WHERE id = $1',
    [Number(id)],
  )
  if (!videoRows[0]) {
    notFound()
  }

  const { title, description: videoDesc, region } = videoRows[0]

  const { rows: heritageItems } = await pool.query<HeritageRow>(
    `SELECT name, content_type, region, address, latitude, longitude, description
     FROM heritage
     WHERE name ILIKE $1
       AND latitude IS NOT NULL
       AND latitude != 0
     ORDER BY content_type`,
    [`%${title}%`],
  )

  return (
    <main className={pageWrapper}>
      <CultureHeader />
      <div className={body}>
        <h1 className={titleText}>{title}</h1>
        {region && (
          <div className={locationRow}>
            <span className={locationBadge}>📍 {region}</span>
          </div>
        )}
        {videoDesc && <p className={description}>{videoDesc}</p>}

        <div className={mapSection}>
          <h2 className={sectionTitle}>관련 장소</h2>
          <CultureMapSection items={heritageItems} title={title} />
          {heritageItems.length > 0 && (
            <ul style={{ marginTop: 12, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {heritageItems.map((item, idx) => (
                <li key={idx} style={{ fontSize: 13, color: '#555', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF4D00', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {CONTENT_TYPE_LABEL[item.content_type] ?? item.content_type}
                  </span>
                  <span>{item.name}{item.region ? ` · ${item.region}` : ''}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  )
}
