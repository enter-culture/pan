import { notFound } from 'next/navigation'

import pool from '@/lib/db'

export const dynamic = 'force-dynamic'
import { CultureMapSection } from '@/components/culture/CultureMapSection'

import { DetailBackButton } from './DetailBackButton'
import {
  body,
  descriptionText,
  externalLink,
  infoBlock,
  infoLabel,
  infoRow,
  infoValue,
  mapSection,
  pageWrapper,
  sectionTitle,
  titleText,
  topBar,
  typeBadge,
} from './detail.css'

interface HeritageRow {
  id: string
  name: string
  content_type: string
  region: string | null
  address: string | null
  description: string | null
  image_url: string | null
  detail_url: string | null
  phone: string | null
  business_hours: string | null
  start_date: string | null
  end_date: string | null
  latitude: number | null
  longitude: number | null
}

interface PageProps {
  params: Promise<{ id: string }>
}

const CONTENT_TYPE_LABEL: Record<string, string> = {
  종목: '무형유산',
  공방: '공방/전수관',
  공연: '공연',
}

function formatDate(dateStr: string | null): string | null {
  if (!dateStr) return null
  return dateStr.slice(0, 10)
}

export default async function TouristDetailPage({ params }: PageProps) {
  const { id } = await params

  const { rows } = await pool.query<HeritageRow>(
    `SELECT id, name, content_type, region, address, description,
            image_url, detail_url, phone, business_hours,
            start_date, end_date, latitude, longitude
     FROM heritage
     WHERE id = $1`,
    [id],
  )

  if (!rows[0]) {
    notFound()
  }

  const item = rows[0]

  const hasMap =
    item.latitude !== null &&
    item.longitude !== null &&
    item.latitude !== 0 &&
    item.longitude !== 0

  const mapItems = hasMap
    ? [
        {
          name: item.name,
          content_type: item.content_type,
          region: item.region,
          address: item.address,
          latitude: item.latitude as number,
          longitude: item.longitude as number,
          description: item.description,
        },
      ]
    : []

  const startDate = formatDate(item.start_date)
  const endDate = formatDate(item.end_date)
  const dateRange = startDate
    ? endDate && endDate !== startDate
      ? `${startDate} ~ ${endDate}`
      : startDate
    : null

  return (
    <div className={pageWrapper}>
      <div className={topBar}>
        <DetailBackButton />
      </div>

      <div className={body}>
        <span className={typeBadge}>
          {CONTENT_TYPE_LABEL[item.content_type] ?? item.content_type}
        </span>

        <h1 className={titleText}>{item.name}</h1>

        <div className={infoBlock}>
          {item.region && (
            <div className={infoRow}>
              <span className={infoLabel}>지역</span>
              <span className={infoValue}>{item.region}</span>
            </div>
          )}
          {item.address && (
            <div className={infoRow}>
              <span className={infoLabel}>주소</span>
              <span className={infoValue}>{item.address}</span>
            </div>
          )}
          {item.phone && (
            <div className={infoRow}>
              <span className={infoLabel}>전화</span>
              <span className={infoValue}>{item.phone}</span>
            </div>
          )}
          {item.business_hours && (
            <div className={infoRow}>
              <span className={infoLabel}>운영시간</span>
              <span className={infoValue}>{item.business_hours}</span>
            </div>
          )}
          {dateRange && (
            <div className={infoRow}>
              <span className={infoLabel}>기간</span>
              <span className={infoValue}>{dateRange}</span>
            </div>
          )}
        </div>

        {item.description && (
          <p className={descriptionText}>{item.description}</p>
        )}

        {hasMap && (
          <div className={mapSection}>
            <h2 className={sectionTitle}>위치</h2>
            <CultureMapSection items={mapItems} title={item.name} />
          </div>
        )}

        {item.detail_url && (
          <a href={item.detail_url} target="_blank" rel="noopener noreferrer" className={externalLink}>
            원문 보기 →
          </a>
        )}
      </div>
    </div>
  )
}
