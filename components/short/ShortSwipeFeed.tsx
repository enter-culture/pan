'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import type { Short } from '@/types'

import { useShortHistory } from '@/hooks/useShortHistory'

import { ShortInfoSheet } from './ShortInfoSheet'
import {
  actionRow,
  backButton,
  bottomArea,
  container,
  detailButton,
  heroImage,
  likeButton,
  likeButtonActive,
  slide,
  titleText,
  topBar,
} from './ShortSwipeFeed.css'

interface ShortSwipeFeedProps {
  currentId: string
  allShorts: Short[]
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? '#FF4D00' : 'none'} stroke={filled ? '#FF4D00' : '#fff'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

export function ShortSwipeFeed({ currentId, allShorts }: ShortSwipeFeedProps) {
  const router = useRouter()
  const { addRecent, toggleLike, isLiked } = useShortHistory()
  const [sheetShort, setSheetShort] = useState<Short | null>(null)
  const $container = useRef<HTMLDivElement>(null)

  const feed = useMemo(() => {
    const current = allShorts.find((s) => s.id === currentId)
    const rest = allShorts
      .filter((s) => s.id !== currentId)
      .sort(() => Math.random() - 0.5)
    return current ? [current, ...rest] : rest
  }, [currentId, allShorts])

  // record first short as viewed on mount
  useEffect(() => {
    if (feed[0]) {
      addRecent(feed[0].id)
    }
  }, [feed, addRecent])

  // record view as user scrolls to each new slide
  useEffect(() => {
    const el = $container.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.shortId
            if (id) addRecent(id)
          }
        })
      },
      { root: el, threshold: 0.6 },
    )

    el.querySelectorAll('[data-short-id]').forEach((slide) => observer.observe(slide))
    return () => observer.disconnect()
  }, [feed, addRecent])

  return (
    <>
      <div ref={$container} className={container}>
        {feed.map((short) => (
          <div key={short.id} className={slide} data-short-id={short.id}>
            <Image
              src={short.thumbnail}
              alt={short.title}
              fill
              className={heroImage}
              sizes="100vw"
            />

            <div className={topBar}>
              <button className={backButton} onClick={() => router.back()}>
                ←
              </button>
            </div>

            <div className={bottomArea}>
              <p className={titleText}>{short.title}</p>
              <div className={actionRow}>
                <button
                  className={isLiked(short.id) ? likeButtonActive : likeButton}
                  onClick={() => toggleLike(short.id)}
                  aria-label={isLiked(short.id) ? '좋아요 취소' : '좋아요'}
                >
                  <HeartIcon filled={isLiked(short.id)} />
                </button>
                <button className={detailButton} onClick={() => setSheetShort(short)}>
                  상세보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sheetShort && (
        <ShortInfoSheet short={sheetShort} onClose={() => setSheetShort(null)} />
      )}
    </>
  )
}
