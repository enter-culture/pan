'use client'

import { useRouter } from 'next/navigation'

import { backButton } from './detail.css'

export function DetailBackButton() {
  const router = useRouter()
  return (
    <button className={backButton} onClick={() => router.back()}>
      ←
    </button>
  )
}
