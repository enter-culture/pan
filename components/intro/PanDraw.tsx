import Image from 'next/image'

import { lottieWrap } from './PanDraw.css'

export function PanDraw() {
  return (
    <div className={lottieWrap}>
      <Image
        src='/intro/pan-signature-joseon.png'
        alt='pan'
        width={2024}
        height={685}
        preload
        draggable={false}
      />
    </div>
  )
}
