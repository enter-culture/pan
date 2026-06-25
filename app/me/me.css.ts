import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const page = style({
  padding: `${vars.spacing.lg} ${vars.spacing.md}`,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
})

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
})

export const sectionHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
})

export const sectionTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
})

export const sectionCount = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.muted,
  fontWeight: vars.fontWeight.regular,
})

export const scrollRow = style({
  display: 'flex',
  gap: vars.spacing.sm,
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
})

export const scrollCardItem = style({
  flex: '0 0 calc((100% - 8px) / 2)',
  scrollSnapAlign: 'start',
})

export const emptyState = style({
  padding: `${vars.spacing.xl} 0`,
  textAlign: 'center',
  color: vars.color.muted,
  fontSize: vars.fontSize.sm,
  lineHeight: '1.7',
  backgroundColor: vars.color.surface,
  borderRadius: vars.borderRadius.md,
})
