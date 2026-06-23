'use client'

import Link from 'next/link'

import type { Short } from '@/types'

import {
  backdrop,
  body,
  cultureButton,
  description,
  handle,
  handleBar,
  hashtag,
  hashtags,
  sheet,
  title,
  touristButton,
} from './ShortInfoSheet.css'

interface ShortInfoSheetProps {
  short: Short
  onClose: () => void
}

export function ShortInfoSheet({ short, onClose }: ShortInfoSheetProps) {
  return (
    <>
      <div className={backdrop} onClick={onClose} />
      <div className={sheet}>
        <div className={handle}>
          <div className={handleBar} />
        </div>
        <div className={body}>
          <h2 className={title}>{short.title}</h2>
          <p className={description}>{short.description}</p>
          <div className={hashtags}>
            {short.hashtags.map((tag) => (
              <span key={tag} className={hashtag}>{tag}</span>
            ))}
          </div>
          <Link href={`/culture/${short.id}`} className={cultureButton}>
            관련 체험/축제 보기
          </Link>
          <Link href="/tourist" className={touristButton}>
            관광지 추천
          </Link>
        </div>
      </div>
    </>
  )
}
