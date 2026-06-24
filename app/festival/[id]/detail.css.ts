import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const pageWrapper = style({
  width: '100%',
  maxWidth: '430px',
  margin: '0 auto',
  minHeight: '100dvh',
  backgroundColor: vars.color.background,
})

export const hero = style({
  width: '100%',
  aspectRatio: '16/10',
  objectFit: 'cover',
  backgroundColor: vars.color.surface,
})

export const heroPlaceholder = style({
  width: '100%',
  aspectRatio: '16/10',
  backgroundColor: vars.color.surface,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.fontSize.sm,
  color: vars.color.muted,
})

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
  padding: `${vars.spacing.lg} ${vars.spacing.md} ${vars.spacing.xxl}`,
})

export const badge = style({
  alignSelf: 'flex-start',
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.accent,
  backgroundColor: '#FFF1ED',
  padding: `2px ${vars.spacing.sm}`,
  borderRadius: vars.borderRadius.full,
})

export const name = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
  lineHeight: '1.4',
})

export const infoBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
})

export const infoRow = style({
  display: 'flex',
  gap: vars.spacing.sm,
  fontSize: vars.fontSize.sm,
  lineHeight: '1.6',
})

export const infoLabel = style({
  flexShrink: 0,
  width: '64px',
  color: vars.color.muted,
})

export const infoValue = style({
  color: vars.color.secondary,
})

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
  lineHeight: '1.8',
  whiteSpace: 'pre-line',
})

export const externalLink = style({
  alignSelf: 'flex-start',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.accent,
})
