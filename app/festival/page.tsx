import Link from 'next/link'

import { getCultures } from '@/services/culture'

import { BackHeader } from './BackHeader'
import {
  card,
  cardBody,
  cardImage,
  cardMeta,
  cardName,
  cardPeriod,
  cardSub,
  list,
  pageWrapper,
} from './festival.css'

export default async function FestivalPage() {
  const cultures = await getCultures()

  return (
    <main className={pageWrapper}>
      <BackHeader title="체험·축제" />
      <div className={list}>
        {cultures.map((culture) => (
          <Link key={culture.id} href={`/festival/${culture.id}`} className={card}>
            <img src={culture.images[0]} alt={culture.name} className={cardImage} />
            <div className={cardBody}>
              <h3 className={cardName}>{culture.name}</h3>
              <p className={cardSub}>{culture.subtitle}</p>
              <p className={cardMeta}>📍 {culture.location}</p>
              <p className={cardPeriod}>
                🗓 {culture.period.start} ~ {culture.period.end}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
