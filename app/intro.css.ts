import { keyframes, style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(16px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const container = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '430px',
  boxSizing: 'border-box',
  backgroundImage:
    'linear-gradient(180deg, rgba(4, 18, 28, 0.18) 0%, rgba(4, 18, 28, 0.04) 42%, rgba(18, 10, 4, 0.4) 100%), url("/intro-heritage.jpg")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: vars.spacing.lg,
  padding: 'clamp(132px, 23svh, 220px) 24px 48px',
  zIndex: 200,
  '@media': {
    '(max-height: 600px)': {
      paddingTop: '64px',
    },
  },
})

export const tagline = style({
  fontSize: vars.fontSize.lg,
  color: 'rgba(255,255,255,0.85)',
  textAlign: 'center',
  lineHeight: '1.6',
  textShadow: '0 2px 12px rgba(0, 0, 0, 0.56)',
  animation: `${fadeIn} 0.6s ease 1s forwards`,
  opacity: 0,
})
