'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { filterRow, filterTab, filterTabActive } from './tourist.css'

const TYPES = ['전체', '공방', '종목', '공연']

export function FilterTabs() {
  const searchParams = useSearchParams()
  const current = searchParams.get('type') ?? '전체'

  return (
    <div className={filterRow}>
      {TYPES.map((type) => (
        <Link
          key={type}
          href={type === '전체' ? '/tourist' : `/tourist?type=${type}`}
          className={current === type ? filterTabActive : filterTab}
        >
          {type}
        </Link>
      ))}
    </div>
  )
}
