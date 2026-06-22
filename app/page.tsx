'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { container, logo, tagline } from './intro.css'

export default function IntroPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/feed')
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className={container}>
      <h1 className={logo}>판(PAN)</h1>
      <p className={tagline}>
        당신의 취향을
        <br />
        판에서 찾아보세요!
      </p>
    </div>
  )
}
