import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
})

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
})

export const name = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
})

export const subtitle = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
})

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
})

export const sectionTitle = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.primary,
})

export const sectionSubTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.primary,
})

export const infoRow = style({
  display: 'flex',
  gap: vars.spacing.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
})

export const infoLabel = style({
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.primary,
  minWidth: '40px',
  flexShrink: 0,
})

export const bulletList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  paddingLeft: vars.spacing.md,
})

export const bulletItem = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
  lineHeight: '1.6',
  listStyle: 'disc',
})

export const divider = style({
  height: '1px',
  backgroundColor: vars.color.border,
})
