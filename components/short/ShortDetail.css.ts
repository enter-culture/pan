import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
})

export const heroWrapper = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '4/5',
  backgroundColor: vars.color.surface,
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 768px)': {
      aspectRatio: '16/9',
    },
  },
})

export const heroImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
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

export const body = style({
  padding: vars.spacing.md,
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
  marginTop: vars.spacing.sm,
  cursor: 'pointer',
  border: 'none',
  transition: 'opacity 0.15s',
  ':hover': {
    opacity: 0.85,
  },
})
