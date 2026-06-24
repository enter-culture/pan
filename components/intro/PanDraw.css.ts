import { globalStyle, keyframes, style } from '@vanilla-extract/css'

const writeSignature = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(10px) scale(0.98)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
})

export const lottieWrap = style({
  width: 'clamp(250px, 68vw, 340px)',
  opacity: 0,
  animation: `${writeSignature} 0.8s cubic-bezier(0.16, 0.82, 0.28, 1) 80ms forwards`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
      opacity: 1,
      transform: 'none',
    },
  },
})

globalStyle(`${lottieWrap} img`, {
  display: 'block',
  width: '100%',
  height: 'auto',
})
