import { notFound } from 'next/navigation'

import { FestivalMap } from '@/components/festival/FestivalMap'
import { getFestivalById } from '@/services/festival'

import { BackHeader } from '../BackHeader'
import {
  badge,
  body,
  description,
  externalLink,
  hero,
  heroPlaceholder,
  infoBlock,
  infoLabel,
  infoRow,
  infoValue,
  name,
  pageWrapper,
} from './detail.css'

export const dynamic = 'force-dynamic'

const CONTENT_TYPE_LABEL: Record<string, string> = {
  종목: '무형유산',
  공방: '공방·체험',
  공연: '공연·축제',
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function FestivalDetailPage({ params }: PageProps) {
  const { id } = await params

  const festival = await getFestivalById(id)
  if (!festival) {
    notFound()
  }

  const period = festival.startDate
    ? festival.endDate && festival.endDate !== festival.startDate
      ? `${festival.startDate} ~ ${festival.endDate}`
      : festival.startDate
    : null

  return (
    <main className={pageWrapper}>
      <BackHeader title="체험·축제" />

      {festival.imageUrl ? (
        <img src={festival.imageUrl} alt={festival.name} className={hero} />
      ) : (
        <div className={heroPlaceholder}>이미지 준비 중</div>
      )}

      <div className={body}>
        <span className={badge}>
          {CONTENT_TYPE_LABEL[festival.contentType] ?? festival.contentType}
        </span>
        <h1 className={name}>{festival.name}</h1>

        <div className={infoBlock}>
          {festival.region && (
            <div className={infoRow}>
              <span className={infoLabel}>지역</span>
              <span className={infoValue}>{festival.region}</span>
            </div>
          )}
          {festival.address && (
            <div className={infoRow}>
              <span className={infoLabel}>주소</span>
              <span className={infoValue}>{festival.address}</span>
            </div>
          )}
          {period && (
            <div className={infoRow}>
              <span className={infoLabel}>기간</span>
              <span className={infoValue}>{period}</span>
            </div>
          )}
          {festival.businessHours && (
            <div className={infoRow}>
              <span className={infoLabel}>운영시간</span>
              <span className={infoValue}>{festival.businessHours}</span>
            </div>
          )}
          {festival.phone && (
            <div className={infoRow}>
              <span className={infoLabel}>전화</span>
              <span className={infoValue}>{festival.phone}</span>
            </div>
          )}
        </div>

        {festival.description && <p className={description}>{festival.description}</p>}

        {festival.latitude && festival.longitude && (
          <FestivalMap
            latitude={festival.latitude}
            longitude={festival.longitude}
            name={festival.name}
          />
        )}

        {festival.detailUrl && (
          <a href={festival.detailUrl} target="_blank" rel="noopener noreferrer" className={externalLink}>
            원문 보기 →
          </a>
        )}
      </div>
    </main>
  )
}
