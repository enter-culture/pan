import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const pageWrapper = style({
  width: '100%',
  maxWidth: '430px',
  margin: '0 auto',
  minHeight: '100dvh',
  backgroundColor: vars.color.background,
})

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  padding: `${vars.spacing.md} ${vars.spacing.md} ${vars.spacing.sm}`,
})

export const headerTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  padding: `0 ${vars.spacing.md} ${vars.spacing.xxl}`,
})

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: vars.borderRadius.md,
  overflow: 'hidden',
  backgroundColor: vars.color.white,
  boxShadow: vars.shadow.sm,
  transition: 'transform 0.15s',
  ':hover': {
    transform: 'translateY(-2px)',
  },
})

export const cardImage = style({
  width: '100%',
  aspectRatio: '16/9',
  objectFit: 'cover',
  backgroundColor: vars.color.surface,
})

export const cardPlaceholder = style({
  width: '100%',
  aspectRatio: '16/9',
  backgroundColor: vars.color.surface,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.fontSize.sm,
  color: vars.color.muted,
})

export const cardBody = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  padding: vars.spacing.md,
})

export const cardBadge = style({
  alignSelf: 'flex-start',
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.accent,
  backgroundColor: '#FFF1ED',
  padding: `2px ${vars.spacing.sm}`,
  borderRadius: vars.borderRadius.full,
})

export const cardName = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
  lineHeight: '1.4',
})

export const cardMeta = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.muted,
})

export const cardPeriod = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.accent,
  fontWeight: vars.fontWeight.medium,
})

export const emptyState = style({
  padding: `${vars.spacing.xxl} ${vars.spacing.md}`,
  textAlign: 'center',
  fontSize: vars.fontSize.sm,
  color: vars.color.muted,
})
