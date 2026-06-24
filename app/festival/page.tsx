import Link from 'next/link'

import { getFestivals } from '@/services/festival'

import { BackHeader } from './BackHeader'
import {
  card,
  cardBadge,
  cardBody,
  cardImage,
  cardMeta,
  cardName,
  cardPeriod,
  cardPlaceholder,
  emptyState,
  list,
  pageWrapper,
} from './festival.css'

export const dynamic = 'force-dynamic'

const CONTENT_TYPE_LABEL: Record<string, string> = {
  종목: '무형유산',
  공방: '공방·체험',
  공연: '공연·축제',
}

export default async function FestivalPage() {
  const festivals = await getFestivals()

  return (
    <main className={pageWrapper}>
      <BackHeader title="체험·축제" />
      {festivals.length === 0 ? (
        <p className={emptyState}>등록된 체험·축제가 없어요</p>
      ) : (
        <div className={list}>
          {festivals.map((festival) => {
            const period = festival.startDate
              ? festival.endDate && festival.endDate !== festival.startDate
                ? `${festival.startDate} ~ ${festival.endDate}`
                : festival.startDate
              : null

            return (
              <Link key={festival.id} href={`/festival/${festival.id}`} className={card}>
                {festival.imageUrl ? (
                  <img src={festival.imageUrl} alt={festival.name} className={cardImage} />
                ) : (
                  <div className={cardPlaceholder}>이미지 준비 중</div>
                )}
                <div className={cardBody}>
                  <span className={cardBadge}>
                    {CONTENT_TYPE_LABEL[festival.contentType] ?? festival.contentType}
                  </span>
                  <h3 className={cardName}>{festival.name}</h3>
                  {(festival.region || festival.address) && (
                    <p className={cardMeta}>📍 {festival.address ?? festival.region}</p>
                  )}
                  {period && <p className={cardPeriod}>🗓 {period}</p>}
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </main>
  )
}
