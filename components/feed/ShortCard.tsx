'use client'

import type { Short } from '@/types'

import Link from 'next/link'

import { card, description, image, imageWrapper, infoOverlay, title } from './ShortCard.css'

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
            preload="metadata"
            muted
            playsInline
            onLoadedMetadata={(e) => {
              e.currentTarget.currentTime = 0.1
            }}
          />
        ) : null}
        <div className={infoOverlay}>
          <p className={title}>{short.title}</p>
          {short.description && <p className={description}>{short.description}</p>}
        </div>
      </div>
    </Link>
  )
}
