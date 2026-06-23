'use client'

import { useRouter } from 'next/navigation'

import { backButton } from './tourist.css'

export function BackButton() {
  const router = useRouter()
  return (
    <button className={backButton} onClick={() => router.back()}>
      ←
    </button>
  )
}
