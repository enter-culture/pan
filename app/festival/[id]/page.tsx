import { notFound } from 'next/navigation'

import type { Culture } from '@/types'

import { getCultureById } from '@/services/culture'

import { BackHeader } from '../BackHeader'
import {
  body,
  bullet,
  gallery,
  galleryImage,
  infoLabel,
  infoRow,
  name,
  pageWrapper,
  section,
  sectionTitle,
  subtitle,
  titleBlock,
} from './detail.css'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function FestivalDetailPage({ params }: PageProps) {
  const { id } = await params

  let culture: Culture
  try {
    culture = await getCultureById(id)
  } catch {
    notFound()
  }

  return (
    <main className={pageWrapper}>
      <BackHeader title="체험·축제" />

      <div className={gallery}>
        {culture.images.map((src, i) => (
          <img key={i} src={src} alt={`${culture.name} ${i + 1}`} className={galleryImage} />
        ))}
      </div>

      <div className={body}>
        <div className={titleBlock}>
          <h1 className={name}>{culture.name}</h1>
          <p className={subtitle}>{culture.subtitle}</p>
        </div>

        <div className={section}>
          <div className={infoRow}>
            <span className={infoLabel}>장소</span>
            <span>{culture.location}</span>
          </div>
          <div className={infoRow}>
            <span className={infoLabel}>기간</span>
            <span>
              {culture.period.start} ~ {culture.period.end}
            </span>
          </div>
        </div>

        <div className={section}>
          <h2 className={sectionTitle}>운영 안내</h2>
          {culture.operatingHours.map((line, i) => (
            <p key={i} className={bullet}>
              {line}
            </p>
          ))}
        </div>

        <div className={section}>
          <h2 className={sectionTitle}>이용 요금</h2>
          {culture.ticketInfo.map((line, i) => (
            <p key={i} className={bullet}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}
