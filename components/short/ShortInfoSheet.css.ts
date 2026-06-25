import { keyframes, style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const slideUp = keyframes({
  from: { transform: 'translateX(-50%) translateY(100%)' },
  to: { transform: 'translateX(-50%) translateY(0)' },
})

export const backdrop = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '430px',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 150,
})

export const sheet = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '430px',
  maxHeight: '75vh',
  backgroundColor: vars.color.white,
  borderRadius: `${vars.borderRadius.lg} ${vars.borderRadius.lg} 0 0`,
  overflowY: 'auto',
  zIndex: 160,
  animation: `${slideUp} 0.28s ease-out`,
  paddingBottom: 'env(safe-area-inset-bottom)',
})

export const handle = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: vars.spacing.sm,
  paddingBottom: vars.spacing.xs,
})

export const handleBar = style({
  width: '36px',
  height: '4px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.color.border,
})

export const body = style({
  padding: `0 ${vars.spacing.md} ${vars.spacing.xl}`,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
})

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
  lineHeight: '1.4',
})

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
  lineHeight: '1.7',
})

export const hashtags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.xs,
})

export const hashtag = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.accent,
  fontWeight: vars.fontWeight.medium,
})

export const cultureButton = style({
  display: 'block',
  width: '100%',
  padding: vars.spacing.md,
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  textAlign: 'center',
  cursor: 'pointer',
  border: 'none',
  transition: 'opacity 0.15s',
  ':hover': {
    opacity: 0.85,
  },
})

