'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { PanDraw } from '@/components/intro/PanDraw'

import { container, tagline } from './intro.css'

export default function IntroPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/feed')
    }, 3200)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className={container}>
      <PanDraw />
      <p className={tagline}>
        당신의 취향을
        <br />
        판에서 찾아보세요!
      </p>
    </div>
  )
}
