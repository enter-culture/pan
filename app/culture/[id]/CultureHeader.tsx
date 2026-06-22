'use client'

import { useRouter } from 'next/navigation'

import { iconButton, rightButtons, topBar } from './culture.css'

export function CultureHeader() {
  const router = useRouter()

  return (
    <div className={topBar}>
      <button className={iconButton} onClick={() => router.back()}>
        ←
      </button>
      <div className={rightButtons}>
        <button className={iconButton}>🏠</button>
        <button className={iconButton}>♡</button>
      </div>
    </div>
  )
}
