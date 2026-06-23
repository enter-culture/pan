import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '430px',
  zIndex: 110,
  overflowY: 'scroll',
  scrollSnapType: 'y mandatory',
  backgroundColor: '#000',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
})

export const slide = style({
  position: 'relative',
  width: '100%',
  height: '100dvh',
  scrollSnapAlign: 'start',
  flexShrink: 0,
  overflow: 'hidden',
})

export const heroVideo = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
})

export const topBar = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  padding: vars.spacing.md,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)',
  zIndex: 10,
})

export const backButton = style({
  width: '36px',
  height: '36px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: 'rgba(0,0,0,0.4)',
  color: vars.color.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '18px',
  border: 'none',
  cursor: 'pointer',
})

export const bottomArea = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: `${vars.spacing.xl} ${vars.spacing.md} ${vars.spacing.md}`,
  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
})

export const titleText = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.white,
  lineHeight: '1.4',
})

export const actionRow = style({
  display: 'flex',
  gap: vars.spacing.sm,
  alignItems: 'center',
})

export const likeButton = style({
  width: '44px',
  height: '44px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.md,
  border: '1px solid rgba(255,255,255,0.4)',
  backgroundColor: 'rgba(0,0,0,0.3)',
  cursor: 'pointer',
})

export const likeButtonActive = style({
  width: '44px',
  height: '44px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.md,
  border: `1px solid ${vars.color.accent}`,
  backgroundColor: 'rgba(255,77,0,0.2)',
  cursor: 'pointer',
})

export const detailButton = style({
  flex: 1,
  height: '44px',
  borderRadius: vars.borderRadius.md,
  backgroundColor: 'rgba(255,255,255,0.2)',
  border: '1px solid rgba(255,255,255,0.4)',
  color: vars.color.white,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  cursor: 'pointer',
  backdropFilter: 'blur(4px)',
})
