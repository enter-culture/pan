'use client'

import { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/navigation'

import type { Short } from '@/types'

import { useShortHistory } from '@/hooks/useShortHistory'

import { ShortInfoSheet } from './ShortInfoSheet'
import {
  backButton,
  bottomBar,
  container,
  detailButton,
  heroVideo,
  heroWrapper,
  likeButton,
  likeButtonActive,
  playPauseIndicator,
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
  const $videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showIndicator, setShowIndicator] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const { addRecent, toggleLike, isLiked } = useShortHistory()

  useEffect(() => {
    addRecent(short.id)
  }, [short.id, addRecent])

  const liked = isLiked(short.id)

  const handleVideoClick = () => {
    const video = $videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }

    setShowIndicator(true)
    setTimeout(() => setShowIndicator(false), 800)
  }

  return (
    <div className={container}>
      <div className={heroWrapper}>
        <button className={backButton} onClick={() => router.back()}>
          ←
        </button>

        {short.videoUrl ? (
          <video
            ref={$videoRef}
            src={short.videoUrl}
            className={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            onClick={handleVideoClick}
          />
        ) : null}

        {showIndicator && (
          <div className={playPauseIndicator}>
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
            )}
          </div>
        )}

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
