import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const wrapper = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '16/9',
  backgroundColor: vars.color.surface,
  overflow: 'hidden',
})

export const track = style({
  display: 'flex',
  height: '100%',
  transition: 'transform 0.3s ease',
})

export const slide = style({
  flexShrink: 0,
  width: '100%',
  height: '100%',
  position: 'relative',
})

export const slideImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const indicator = style({
  position: 'absolute',
  bottom: vars.spacing.sm,
  right: vars.spacing.md,
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: vars.color.white,
  fontSize: vars.fontSize.xs,
  padding: `2px ${vars.spacing.sm}`,
  borderRadius: vars.borderRadius.full,
})

export const wrapperClickable = style({
  cursor: 'pointer',
})

export const wrapperDefault = style({
  cursor: 'default',
})
