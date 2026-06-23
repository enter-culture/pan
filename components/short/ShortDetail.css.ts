import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
  position: 'relative',
  width: '100%',
  minHeight: 'calc(100dvh - 64px)',
  backgroundColor: '#000',
  display: 'flex',
  flexDirection: 'column',
})

export const heroWrapper = style({
  position: 'relative',
  flex: 1,
  width: '100%',
  aspectRatio: '9/16',
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 768px)': {
      aspectRatio: '4/5',
    },
  },
})

export const heroImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const heroVideo = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
})

export const playPauseIndicator = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  zIndex: 10,
  transition: 'opacity 0.2s',
})

export const backButton = style({
  position: 'absolute',
  top: vars.spacing.md,
  left: vars.spacing.md,
  width: '36px',
  height: '36px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: 'rgba(0,0,0,0.4)',
  color: vars.color.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '18px',
  zIndex: 10,
  cursor: 'pointer',
  border: 'none',
})

export const titleOverlay = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: `${vars.spacing.xl} ${vars.spacing.md} ${vars.spacing.md}`,
  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
  zIndex: 10,
})

export const shortTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.white,
  lineHeight: '1.4',
})

export const bottomBar = style({
  padding: vars.spacing.md,
  backgroundColor: vars.color.white,
  display: 'flex',
  gap: vars.spacing.sm,
  alignItems: 'center',
})

export const likeButton = style({
  flexShrink: 0,
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.md,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.white,
  cursor: 'pointer',
  transition: 'border-color 0.15s',
  ':hover': {
    borderColor: vars.color.accent,
  },
})

export const likeButtonActive = style({
  flexShrink: 0,
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.md,
  border: `1px solid ${vars.color.accent}`,
  backgroundColor: '#FFF1ED',
  cursor: 'pointer',
})

export const detailButton = style({
  flex: 1,
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
