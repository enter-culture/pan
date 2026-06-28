import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: vars.borderRadius.md,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.15s',
  ':hover': {
    transform: 'translateY(-2px)',
  },
})

export const imageWrapper = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '4/5',
  backgroundColor: vars.color.surface,
  overflow: 'hidden',
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const playIcon = style({
  position: 'absolute',
  bottom: vars.spacing.sm,
  right: vars.spacing.sm,
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0,0,0,0.55)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
})

export const infoOverlay = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: `${vars.spacing.xl} ${vars.spacing.sm} ${vars.spacing.sm}`,
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
  pointerEvents: 'none',
})

export const title = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.white,
  lineHeight: '1.4',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})

export const description = style({
  fontSize: vars.fontSize.xs,
  color: 'rgba(255,255,255,0.7)',
  lineHeight: '1.4',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})
