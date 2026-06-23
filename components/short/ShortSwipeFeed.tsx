'use client'

import { useEffect, useRef, useState } from 'react'

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
  heroVideo,
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
  const $videos = useRef<Map<string, HTMLVideoElement>>(new Map())

  const current = allShorts.find((s) => s.id === currentId)
  const rest = allShorts.filter((s) => s.id !== currentId)
  const feed = current ? [current, ...rest] : rest

  const setVideoRef = (id: string) => (el: HTMLVideoElement | null) => {
    if (el) {
      $videos.current.set(id, el)
    } else {
      $videos.current.delete(id)
    }
  }

  useEffect(() => {
    const containerEl = $container.current
    if (!containerEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.shortId
          if (!id) return
          const video = $videos.current.get(id)
          if (!video) return

          if (entry.isIntersecting) {
            video.currentTime = 0
            video.play().catch(() => {})
            addRecent(id)
          } else {
            video.pause()
          }
        })
      },
      { root: containerEl, threshold: 0.8 },
    )

    containerEl.querySelectorAll('[data-short-id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [feed, addRecent])

  const handleEnded = (index: number) => {
    const containerEl = $container.current
    if (!containerEl) return
    const nextSlide = containerEl.children[index + 1] as HTMLElement | undefined
    if (nextSlide) {
      nextSlide.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div ref={$container} className={container}>
        {feed.map((short, index) => (
          <div key={short.id} className={slide} data-short-id={short.id}>
            {short.videoUrl && (
              <video
                ref={setVideoRef(short.id)}
                src={short.videoUrl}
                className={heroVideo}
                muted
                playsInline
                loop={false}
                onEnded={() => handleEnded(index)}
              />
            )}

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
