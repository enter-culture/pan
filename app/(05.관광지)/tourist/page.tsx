import { Suspense } from 'react'

import Link from 'next/link'

import pool from '@/lib/db'

export const dynamic = 'force-dynamic'

import { BackButton } from './BackButton'
import { FilterTabs } from './FilterTabs'
import { card, cardMeta, cardName, emptyState, list, pageTitle, pageWrapper, regionText, topBar, typeBadge } from './tourist.css'

interface HeritageRow {
  id: string
  name: string
  content_type: string
  region: string | null
  address: string | null
}

interface PageProps {
  searchParams: Promise<{ type?: string; q?: string }>
}

const CONTENT_TYPE_LABEL: Record<string, string> = {
  종목: '무형유산',
  공방: '공방/전수관',
  공연: '공연',
}

export default async function TouristPage({ searchParams }: PageProps) {
  const { type, q } = await searchParams

  const { rows } = await pool.query<HeritageRow>(
    `SELECT id, name, content_type, region, address
     FROM heritage
     WHERE ($1::text IS NULL OR content_type = $1)
       AND ($2::text IS NULL OR name ILIKE '%' || $2 || '%')
     ORDER BY content_type, name
     LIMIT 100`,
    [type ?? null, q ?? null],
  )

  return (
    <div className={pageWrapper}>
      <div className={topBar}>
        <BackButton />
        <h1 className={pageTitle}>
          {q ? `'${q}' 관련 관광지` : '관광지 추천'}
        </h1>
      </div>

      {!q && (
        <Suspense>
          <FilterTabs />
        </Suspense>
      )}

      <div className={list}>
        {rows.length === 0 ? (
          <p className={emptyState}>해당하는 관광지가 없어요</p>
        ) : (
          rows.map((item) => (
            <Link key={item.id} href={`/tourist/${item.id}`} className={card}>
              <span className={cardName}>{item.name}</span>
              <div className={cardMeta}>
                <span className={typeBadge}>
                  {CONTENT_TYPE_LABEL[item.content_type] ?? item.content_type}
                </span>
                {item.region && <span className={regionText}>{item.region}</span>}
              </div>
              {item.address && (
                <span className={regionText}>{item.address}</span>
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
