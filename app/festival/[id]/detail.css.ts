import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const pageWrapper = style({
  width: '100%',
  maxWidth: '430px',
  margin: '0 auto',
  minHeight: '100dvh',
  backgroundColor: vars.color.background,
})

export const gallery = style({
  display: 'flex',
  gap: vars.spacing.sm,
  overflowX: 'auto',
  padding: `0 ${vars.spacing.md}`,
  scrollbarWidth: 'none',
  selectors: {
    '&::-webkit-scrollbar': { display: 'none' },
  },
})

export const galleryImage = style({
  width: '280px',
  aspectRatio: '16/10',
  objectFit: 'cover',
  borderRadius: vars.borderRadius.md,
  backgroundColor: vars.color.surface,
  flexShrink: 0,
})

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
  padding: `${vars.spacing.lg} ${vars.spacing.md} ${vars.spacing.xxl}`,
})

export const titleBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
})

export const name = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
  lineHeight: '1.4',
})

export const subtitle = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
  lineHeight: '1.5',
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

export const infoRow = style({
  display: 'flex',
  gap: vars.spacing.sm,
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
  lineHeight: '1.6',
})

export const infoLabel = style({
  flexShrink: 0,
  width: '64px',
  color: vars.color.muted,
})

export const bullet = style({
  display: 'flex',
  gap: vars.spacing.sm,
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
  lineHeight: '1.6',
  selectors: {
    '&::before': {
      content: '"•"',
      color: vars.color.accent,
    },
  },
})
