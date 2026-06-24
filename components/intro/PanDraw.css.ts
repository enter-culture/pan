import { keyframes, style } from '@vanilla-extract/css'

const writeSignature = keyframes({
  '0%': {
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0.7,
  },
  '12%': {
    clipPath: 'inset(0 92% 0 0)',
    opacity: 1,
  },
  '100%': {
    clipPath: 'inset(0 0 0 0)',
    opacity: 1,
  },
})

export const lottieWrap = style({
  width: 'clamp(250px, 68vw, 340px)',
  clipPath: 'inset(0 100% 0 0)',
  filter: 'drop-shadow(0 4px 18px rgba(0,0,0,0.5))',
  animation: `${writeSignature} 1.9s cubic-bezier(0.16, 0.82, 0.28, 1) 80ms forwards`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
      clipPath: 'none',
      opacity: 1,
    },
  },
})
