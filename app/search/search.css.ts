import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const page = style({
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
})

export const searchBar = style({
  display: 'flex',
  gap: vars.spacing.sm,
})

export const input = style({
  flex: 1,
  height: '44px',
  padding: `0 ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.full,
  border: `1px solid ${vars.color.border}`,
  fontSize: vars.fontSize.md,
  color: vars.color.primary,
  backgroundColor: vars.color.surface,
  outline: 'none',
  ':focus': {
    borderColor: vars.color.primary,
    backgroundColor: vars.color.white,
  },
})

export const searchButton = style({
  flexShrink: 0,
  height: '44px',
  padding: `0 ${vars.spacing.lg}`,
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.15s',
  ':hover': {
    opacity: 0.85,
  },
})

export const resultHeader = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.muted,
  fontWeight: vars.fontWeight.medium,
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing.sm,
})

export const emptyState = style({
  paddingTop: vars.spacing.xxl,
  textAlign: 'center',
  color: vars.color.muted,
  fontSize: vars.fontSize.sm,
  lineHeight: '1.7',
})
