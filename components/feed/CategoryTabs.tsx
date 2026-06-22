'use client'

import type { Category } from '@/types'

import { wrapper, chipVariants } from './CategoryTabs.css'

const CATEGORIES: Category[] = ['전체', '춤', '음악', '음식', '축제', '전통']

interface CategoryTabsProps {
  activeCategory: Category
  onSelect: (category: Category) => void
}

export function CategoryTabs({ activeCategory, onSelect }: CategoryTabsProps) {
  return (
    <div className={wrapper}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={chipVariants[activeCategory === cat ? 'active' : 'inactive']}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
