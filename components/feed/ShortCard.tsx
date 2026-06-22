import type { Short } from '@/types'

import Image from 'next/image'
import Link from 'next/link'

import { card, image, imageWrapper, title } from './ShortCard.css'

interface ShortCardProps {
  short: Short
}

export function ShortCard({ short }: ShortCardProps) {
  return (
    <Link href={`/short/${short.id}`} className={card}>
      <div className={imageWrapper}>
        <Image
          src={short.thumbnail}
          alt={short.title}
          fill
          className={image}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <p className={title}>{short.title}</p>
    </Link>
  )
}
