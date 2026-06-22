import type { Culture } from '@/types'

import {
  bulletItem,
  bulletList,
  container,
  divider,
  header,
  infoLabel,
  infoRow,
  name,
  section,
  sectionSubTitle,
  sectionTitle,
  subtitle,
} from './CultureInfo.css'

interface CultureInfoProps {
  culture: Culture
}

export function CultureInfo({ culture }: CultureInfoProps) {
  return (
    <div className={container}>
      <div className={header}>
        <h1 className={name}>{culture.name}</h1>
        <p className={subtitle}>{culture.subtitle}</p>
      </div>

      <div className={divider} />

      <div className={section}>
        <div className={infoRow}>
          <span className={infoLabel}>장소</span>
          <span>{culture.location}</span>
        </div>
        <div className={infoRow}>
          <span className={infoLabel}>기간</span>
          <span>{culture.period.start} ~ {culture.period.end}</span>
        </div>
      </div>

      <div className={divider} />

      <div className={section}>
        <h2 className={sectionTitle}>이용 안내</h2>
        <h3 className={sectionSubTitle}>운영 시간</h3>
        <ul className={bulletList}>
          {culture.operatingHours.map((item) => (
            <li key={item} className={bulletItem}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={divider} />

      <div className={section}>
        <h3 className={sectionSubTitle}>배송 티켓 안내</h3>
        <ul className={bulletList}>
          {culture.ticketInfo.map((item) => (
            <li key={item} className={bulletItem}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
