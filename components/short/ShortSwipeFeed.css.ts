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

const likeButtonBase = style({
  position: 'absolute',
  bottom: vars.spacing.md,
  right: vars.spacing.md,
  width: '48px',
  height: '48px',
  borderRadius: vars.borderRadius.full,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 10,
  backdropFilter: 'blur(4px)',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
})

export const likeButton = style([
  likeButtonBase,
  {
    backgroundColor: 'rgba(0,0,0,0.4)',
    border: '1px solid rgba(255,255,255,0.35)',
  },
])

export const likeButtonActive = style([
  likeButtonBase,
  {
    backgroundColor: 'rgba(255,77,0,0.25)',
    border: `1px solid ${vars.color.accent}`,
  },
])
