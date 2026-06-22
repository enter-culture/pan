import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const wrapper = style({
  display: 'flex',
  gap: vars.spacing.sm,
  padding: `${vars.spacing.md} ${vars.spacing.md}`,
  overflowX: 'auto',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': { display: 'none' },
})

export const chip = style({
  flexShrink: 0,
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  cursor: 'pointer',
  transition: 'background 0.15s, color 0.15s',
  border: 'none',
  whiteSpace: 'nowrap',
})

export const chipVariants = styleVariants({
  active: [
    chip,
    {
      backgroundColor: vars.color.primary,
      color: vars.color.white,
    },
  ],
  inactive: [
    chip,
    {
      backgroundColor: vars.color.surface,
      color: vars.color.secondary,
    },
  ],
})
