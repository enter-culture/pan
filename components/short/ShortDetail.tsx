'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Short } from '@/types'
import {
  container,
  heroWrapper,
  heroImage,
  backButton,
  body,
  title,
  description,
  hashtags,
  hashtag,
  cultureButton,
} from './ShortDetail.css'

interface ShortDetailProps {
  short: Short
}

export function ShortDetail({ short }: ShortDetailProps) {
  const router = useRouter()

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
      </div>
      <div className={body}>
        <h1 className={title}>{short.title}</h1>
        <p className={description}>{short.description}</p>
        <div className={hashtags}>
          {short.hashtags.map((tag) => (
            <span key={tag} className={hashtag}>{tag}</span>
          ))}
        </div>
        <Link href={`/culture/${short.relatedCultureId}`} className={cultureButton}>
          관련 체험/축제 보기
        </Link>
      </div>
    </div>
  )
}
