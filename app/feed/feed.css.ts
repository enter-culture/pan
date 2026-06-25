import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const header = style({
  padding: `${vars.spacing.lg} ${vars.spacing.md} ${vars.spacing.sm}`,
  fontSize: '36px',
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing.md,
  padding: `0 ${vars.spacing.md} ${vars.spacing.xl}`,
})
