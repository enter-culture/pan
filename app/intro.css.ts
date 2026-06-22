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
  inset: 0,
  background: 'linear-gradient(160deg, #1a0a00 0%, #3d1a00 40%, #6b2d0b 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.lg,
  zIndex: 200,
})

export const logo = style({
  fontSize: '56px',
  fontWeight: vars.fontWeight.bold,
  color: vars.color.white,
  letterSpacing: '-1px',
  animation: `${fadeIn} 0.6s ease forwards`,
})

export const tagline = style({
  fontSize: vars.fontSize.lg,
  color: 'rgba(255,255,255,0.85)',
  textAlign: 'center',
  lineHeight: '1.6',
  animation: `${fadeIn} 0.6s ease 0.2s forwards`,
  opacity: 0,
})
