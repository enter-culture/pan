'use client'

import type { Short } from '@/types'

import Link from 'next/link'

import { useShortHistory } from '@/hooks/useShortHistory'

import { card, image, imageWrapper, likeButton, title } from './ShortCard.css'

interface ShortCardProps {
  short: Short
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? '#FF4D00' : 'none'} stroke={filled ? '#FF4D00' : '#fff'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

export function ShortCard({ short }: ShortCardProps) {
  const { toggleLike, isLiked } = useShortHistory()
  const liked = isLiked(short.id)

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
        <button
          className={likeButton}
          aria-label={liked ? '좋아요 취소' : '좋아요'}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleLike(short.id)
          }}
        >
          <HeartIcon filled={liked} />
        </button>
      </div>
      <p className={title}>{short.title}</p>
    </Link>
  )
}
