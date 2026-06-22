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

export const title = style({
  padding: `${vars.spacing.sm} ${vars.spacing.xs}`,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.primary,
  lineHeight: '1.4',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})
