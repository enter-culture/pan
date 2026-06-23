import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const topBar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.spacing.md} ${vars.spacing.md}`,
})

export const iconButton = style({
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  borderRadius: vars.borderRadius.full,
  ':hover': {
    backgroundColor: vars.color.surface,
  },
})

export const rightButtons = style({
  display: 'flex',
  gap: vars.spacing.xs,
})

export const pageWrapper = style({
  maxWidth: '430px',
  margin: '0 auto',
  minHeight: '100vh',
  backgroundColor: vars.color.background,
})

export const body = style({
  padding: `0 ${vars.spacing.md} ${vars.spacing.xxl}`,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
})

export const titleText = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
  margin: 0,
  lineHeight: '1.4',
})

export const locationRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
})

export const locationBadge = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.accent,
  fontWeight: vars.fontWeight.medium,
})

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
  lineHeight: '1.8',
  margin: 0,
  whiteSpace: 'pre-line',
})

export const mapSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
})

export const sectionTitle = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.primary,
  margin: 0,
})
