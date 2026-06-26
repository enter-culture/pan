'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import type { Short } from '@/types'

import { useShortHistory } from '@/hooks/useShortHistory'

import { ShortInfoSheet } from './ShortInfoSheet'
import {
  bottomArea,
  container,
  descriptionText,
  heroVideo,
  likeButton,
  likeButtonActive,
  muteButton,
  pauseOverlay,
  sideActions,
  slide,
  titleText,
  topBar,
} from './ShortSwipeFeed.css'

interface ShortSwipeFeedProps {
  currentId: string
  allShorts: Short[]
}

function SoundOnIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 010 14.14" />
      <path d="M15.54 8.46a5 5 0 010 7.07" />
    </svg>
  )
}

function SoundOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? '#FF4D00' : 'none'} stroke={filled ? '#FF4D00' : '#fff'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

export function ShortSwipeFeed({ currentId, allShorts }: ShortSwipeFeedProps) {
  const { addRecent, toggleLike, isLiked } = useShortHistory()
  const [sheetShort, setSheetShort] = useState<Short | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const $container = useRef<HTMLDivElement>(null)
  const $videos = useRef<Map<string, HTMLVideoElement>>(new Map())

  const feed = useMemo(() => {
    const current = allShorts.find((s) => s.id === currentId)
    const rest = allShorts.filter((s) => s.id !== currentId)
    return current ? [current, ...rest] : rest
  }, [allShorts, currentId])

  const setVideoRef = (id: string) => (el: HTMLVideoElement | null) => {
    if (el) {
      $videos.current.set(id, el)
    } else {
      $videos.current.delete(id)
    }
  }

  // activeIndex가 바뀔 때 재생/정지
  useEffect(() => {
    setIsPaused(false)
    $videos.current.forEach((video, id) => {
      if (feed[activeIndex]?.id === id) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [activeIndex, feed])

  const handleVideoTap = () => {
    const video = $videos.current.get(feed[activeIndex]?.id)
    if (!video) return
    if (video.paused) {
      video.play().catch(() => {})
      setIsPaused(false)
    } else {
      video.pause()
      setIsPaused(true)
    }
  }

  // isMuted가 바뀔 때 전체 비디오에 반영
  useEffect(() => {
    $videos.current.forEach((video) => {
      video.muted = isMuted
    })
  }, [isMuted])

  // IntersectionObserver: 어떤 슬라이드가 보이는지만 감지
  useEffect(() => {
    const containerEl = $container.current
    if (!containerEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = (entry.target as HTMLElement).dataset.shortId
          if (!id) return
          const idx = feed.findIndex((s) => s.id === id)
          if (idx !== -1) {
            setActiveIndex(idx)
            addRecent(id)
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

  const getSrc = (index: number, videoUrl: string | undefined) => {
    if (!videoUrl) return undefined
    return Math.abs(index - activeIndex) <= 1 ? videoUrl : undefined
  }

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
              onClick={index === activeIndex ? handleVideoTap : undefined}
            />

            {index === activeIndex && isPaused && (
              <div className={pauseOverlay}>
                <svg width="52" height="52" viewBox="0 0 24 24" fill="rgba(255,255,255,0.9)">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              </div>
            )}

            <div className={topBar} />

            <button
              className={muteButton}
              onClick={() => setIsMuted((prev) => !prev)}
              aria-label={isMuted ? '소리 켜기' : '소리 끄기'}
            >
              {isMuted ? <SoundOffIcon /> : <SoundOnIcon />}
            </button>

            <div className={sideActions}>
              <button
                className={isLiked(short.id) ? likeButtonActive : likeButton}
                onClick={() => toggleLike(short.id)}
                aria-label={isLiked(short.id) ? '좋아요 취소' : '좋아요'}
              >
                <HeartIcon filled={isLiked(short.id)} />
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

          </div>
        ))}
      </div>

      {sheetShort && (
        <ShortInfoSheet short={sheetShort} onClose={() => setSheetShort(null)} />
      )}
    </>
  )
}
