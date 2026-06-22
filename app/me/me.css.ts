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

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing.sm,
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
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
