'use client'

import { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/navigation'

import type { Short } from '@/types'

import { useShortHistory } from '@/hooks/useShortHistory'

import { ShortInfoSheet } from './ShortInfoSheet'
import {
  backButton,
  bottomArea,
  container,
  descriptionText,
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? '#FF4D00' : 'none'} stroke={filled ? '#FF4D00' : '#fff'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

export function ShortSwipeFeed({ currentId, allShorts }: ShortSwipeFeedProps) {
  const router = useRouter()
  const { addRecent, toggleLike, isLiked } = useShortHistory()
  const [sheetShort, setSheetShort] = useState<Short | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
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

  // 현재 슬라이드 감지 + 재생/정지
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
            const idx = feed.findIndex((s) => s.id === id)
            setActiveIndex(idx)
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
    nextSlide?.scrollIntoView({ behavior: 'smooth' })
  }

  // 현재 ± 1 슬라이드만 src 설정 (나머지는 lazy)
  const getSrc = (index: number, videoUrl: string | undefined) => {
    if (!videoUrl) return undefined
    return Math.abs(index - activeIndex) <= 1 ? videoUrl : undefined
  }

  // 다음 슬라이드는 metadata preload로 API presigned URL을 미리 warm-up
  const getPreload = (index: number): 'auto' | 'metadata' | 'none' => {
    if (index === activeIndex) return 'auto'
    if (index === activeIndex + 1) return 'metadata'
    return 'none'
  }

  return (
    <>
      <div ref={$container} className={container}>
        {feed.map((short, index) => (
          <div key={short.id} className={slide} data-short-id={short.id}>
            <video
              ref={setVideoRef(short.id)}
              src={getSrc(index, short.videoUrl)}
              className={heroVideo}
              muted
              playsInline
              loop={false}
              preload={getPreload(index)}
              onEnded={() => handleEnded(index)}
            />

            <div className={topBar}>
              <button className={backButton} onClick={() => router.back()}>
                ←
              </button>
            </div>

            <div className={bottomArea}>
              <p className={titleText}>{short.title}</p>
              {short.description && (
                <p
                  className={descriptionText}
                  onClick={() => setSheetShort(short)}
                >
                  {short.description}
                </p>
              )}
            </div>

            <button
              className={isLiked(short.id) ? likeButtonActive : likeButton}
              onClick={() => toggleLike(short.id)}
              aria-label={isLiked(short.id) ? '좋아요 취소' : '좋아요'}
            >
              <HeartIcon filled={isLiked(short.id)} />
            </button>
          </div>
        ))}
      </div>

      {sheetShort && (
        <ShortInfoSheet short={sheetShort} onClose={() => setSheetShort(null)} />
      )}
    </>
  )
}
