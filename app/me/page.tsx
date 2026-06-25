'use client'

import { useEffect, useMemo, useState } from 'react'

import type { Short } from '@/types'

import { ShortCard } from '@/components/feed/ShortCard'
import { useShortHistory } from '@/hooks/useShortHistory'

import { emptyState, grid, page, recentCardItem, recentRow, section, sectionCount, sectionHeader, sectionTitle } from './me.css'

function toShorts(ids: string[], allShorts: Short[]): Short[] {
  return ids.flatMap((id) => {
    const s = allShorts.find((m) => m.id === id)
    return s ? [s] : []
  })
}

export default function MePage() {
  const { recentIds, likedIds } = useShortHistory()
  const [allShorts, setAllShorts] = useState<Short[]>([])

  useEffect(() => {
    fetch('/api/shorts')
      .then((res) => res.json())
      .then(setAllShorts)
      .catch((err) => console.error('[MePage] /api/shorts 실패:', err))
  }, [])

  const recentShorts = useMemo(() => toShorts(recentIds, allShorts), [recentIds, allShorts])
  const likedShorts = useMemo(() => toShorts(likedIds, allShorts), [likedIds, allShorts])

  return (
    <div className={page}>
      <div className={section}>
        <div className={sectionHeader}>
          <h2 className={sectionTitle}>최근 본 숏폼</h2>
          {recentShorts.length > 0 && (
            <span className={sectionCount}>{recentShorts.length}개</span>
          )}
        </div>
        {recentShorts.length === 0 ? (
          <p className={emptyState}>아직 본 숏폼이 없어요<br />피드에서 숏폼을 감상해보세요</p>
        ) : (
          <div className={recentRow}>
            {recentShorts.map((short) => (
              <div key={short.id} className={recentCardItem}>
                <ShortCard short={short} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={section}>
        <div className={sectionHeader}>
          <h2 className={sectionTitle}>좋아요한 숏폼</h2>
          {likedShorts.length > 0 && (
            <span className={sectionCount}>{likedShorts.length}개</span>
          )}
        </div>
        {likedShorts.length === 0 ? (
          <p className={emptyState}>좋아요한 숏폼이 없어요<br />마음에 드는 숏폼에 좋아요를 눌러보세요</p>
        ) : (
          <div className={grid}>
            {likedShorts.map((short) => (
              <ShortCard key={short.id} short={short} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
