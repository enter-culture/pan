'use client'

import Lottie from 'lottie-react'

import { lottieWrap } from './PanDraw.css'
import animationData from './pan-intro.json'

export function PanDraw() {
  return (
    <div className={lottieWrap}>
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay
      />
    </div>
  )
}
