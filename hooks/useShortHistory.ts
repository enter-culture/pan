'use client'

import { useCallback, useEffect, useState } from 'react'

const RECENT_KEY = 'pan_recent_shorts'
const LIKED_KEY = 'pan_liked_shorts'
const RECENT_MAX = 20

function readIds(key: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '[]')
  } catch {
    return []
  }
}

function writeIds(key: string, ids: string[]): void {
  localStorage.setItem(key, JSON.stringify(ids))
}

export function useShortHistory() {
  const [recentIds, setRecentIds] = useState<string[]>([])
  const [likedIds, setLikedIds] = useState<string[]>([])

  useEffect(() => {
    setRecentIds(readIds(RECENT_KEY))
    setLikedIds(readIds(LIKED_KEY))
  }, [])

  const addRecent = useCallback((id: string) => {
    setRecentIds((prev) => {
      const next = [id, ...prev.filter((v) => v !== id)].slice(0, RECENT_MAX)
      writeIds(RECENT_KEY, next)
      return next
    })
  }, [])

  const toggleLike = useCallback((id: string) => {
    setLikedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((v) => v !== id) : [id, ...prev]
      writeIds(LIKED_KEY, next)
      return next
    })
  }, [])

  const isLiked = useCallback((id: string) => likedIds.includes(id), [likedIds])

  return { recentIds, likedIds, addRecent, toggleLike, isLiked }
}
