'use client'

import { useState } from 'react'

import type { Category, Short } from '@/types'

import { CategoryTabs } from '@/components/feed/CategoryTabs'
import { ShortCard } from '@/components/feed/ShortCard'

import { grid } from './feed.css'

interface FeedClientProps {
  initialShorts: Short[]
}

export function FeedClient({ initialShorts }: FeedClientProps) {
  const [category, setCategory] = useState<Category>('전체')

  const filtered =
    category === '전체'
      ? initialShorts
      : initialShorts.filter((s) => s.category === category)

  return (
    <>
      <CategoryTabs activeCategory={category} onSelect={setCategory} />
      <div className={grid}>
        {filtered.map((short) => (
          <ShortCard key={short.id} short={short} />
        ))}
      </div>
    </>
  )
}
