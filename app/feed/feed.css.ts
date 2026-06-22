import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const header = style({
  padding: `${vars.spacing.lg} ${vars.spacing.md} ${vars.spacing.sm}`,
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing.md,
  padding: `0 ${vars.spacing.md} ${vars.spacing.xl}`,
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
})
