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
  selectors: {
    '&::-webkit-scrollbar': { display: 'none' },
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

export const pauseOverlay = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 5,
  pointerEvents: 'none',
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


export const bottomArea = style({
  position: 'absolute',
  bottom: '64px',
  left: 0,
  right: 0,
  paddingTop: vars.spacing.xl,
  paddingRight: '76px',
  paddingBottom: vars.spacing.md,
  paddingLeft: vars.spacing.md,
  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
})

export const titleText = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.white,
  lineHeight: '1.4',
})

export const descriptionText = style({
  fontSize: vars.fontSize.sm,
  color: 'rgba(255,255,255,0.8)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
  lineHeight: '1.4',
})

export const muteButton = style({
  position: 'absolute',
  top: vars.spacing.md,
  right: vars.spacing.md,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: 'rgba(0,0,0,0.45)',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',
  zIndex: 10,
})

export const sideActions = style({
  position: 'absolute',
  right: vars.spacing.md,
  bottom: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.sm,
  zIndex: 10,
})

export const likeButton = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  width: '44px',
  height: '44px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: 'rgba(0,0,0,0.45)',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',
})

export const likeButtonActive = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  width: '44px',
  height: '44px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: 'rgba(255,77,0,0.25)',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',
})
