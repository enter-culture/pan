import type { Short } from '@/types'

import Link from 'next/link'

import { card, image, imageWrapper, playIcon, title } from './ShortCard.css'

interface ShortCardProps {
  short: Short
}

export function ShortCard({ short }: ShortCardProps) {
  return (
    <Link href={`/short/${short.id}`} className={card}>
      <div className={imageWrapper}>
        {short.videoUrl ? (
          <video
            src={short.videoUrl}
            className={image}
            preload="none"
            muted
            playsInline
          />
        ) : null}
      </div>
      <p className={title}>{short.title}</p>
    </Link>
  )
}
