'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import type { Short } from '@/types'

import { useShortHistory } from '@/hooks/useShortHistory'

import { ShortInfoSheet } from './ShortInfoSheet'
import {
  backButton,
  bottomBar,
  container,
  detailButton,
  heroImage,
  heroWrapper,
  likeButton,
  likeButtonActive,
  shortTitle,
  titleOverlay,
} from './ShortDetail.css'

interface ShortDetailProps {
  short: Short
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? '#FF4D00' : 'none'} stroke={filled ? '#FF4D00' : '#555'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

export function ShortDetail({ short }: ShortDetailProps) {
  const router = useRouter()
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const { addRecent, toggleLike, isLiked } = useShortHistory()

  useEffect(() => {
    addRecent(short.id)
  }, [short.id, addRecent])

  const liked = isLiked(short.id)

  return (
    <div className={container}>
      <div className={heroWrapper}>
        <button className={backButton} onClick={() => router.back()}>
          ←
        </button>
        <Image
          src={short.thumbnail}
          alt={short.title}
          fill
          className={heroImage}
          sizes="100vw"
          priority
        />
        <div className={titleOverlay}>
          <h1 className={shortTitle}>{short.title}</h1>
        </div>
      </div>

      <div className={bottomBar}>
        <button
          className={liked ? likeButtonActive : likeButton}
          onClick={() => toggleLike(short.id)}
          aria-label={liked ? '좋아요 취소' : '좋아요'}
        >
          <HeartIcon filled={liked} />
        </button>
        <button className={detailButton} onClick={() => setIsSheetOpen(true)}>
          상세보기
        </button>
      </div>

      {isSheetOpen && (
        <ShortInfoSheet short={short} onClose={() => setIsSheetOpen(false)} />
      )}
    </div>
  )
}
