'use client'

import dynamic from 'next/dynamic'

import panAnimation from './pan-cursive.json'
import { lottieWrap } from './PanDraw.css'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export function PanDraw() {
  return (
    <div className={lottieWrap}>
      <Lottie
        animationData={panAnimation}
        loop={false}
        autoplay={true}
      />
    </div>
  )
}
