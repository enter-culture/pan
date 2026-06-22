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
