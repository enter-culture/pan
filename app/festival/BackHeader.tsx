'use client'

import { useRouter } from 'next/navigation'

import { iconButton } from '@/app/culture/[id]/culture.css'

import { header, headerTitle } from './festival.css'

interface BackHeaderProps {
  title: string
}

export function BackHeader({ title }: BackHeaderProps) {
  const router = useRouter()

  return (
    <div className={header}>
      <button className={iconButton} onClick={() => router.back()} aria-label="뒤로">
        ←
      </button>
      <span className={headerTitle}>{title}</span>
    </div>
  )
}
