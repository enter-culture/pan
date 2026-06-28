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
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 200,
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
