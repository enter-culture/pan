import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const pageWrapper = style({
  maxWidth: '430px',
  margin: '0 auto',
  minHeight: '100vh',
  backgroundColor: vars.color.background,
  paddingBottom: 'calc(env(safe-area-inset-bottom) + 80px)',
})

export const topBar = style({
  display: 'flex',
  alignItems: 'center',
  padding: `${vars.spacing.md} ${vars.spacing.md}`,
  gap: vars.spacing.sm,
})

export const backButton = style({
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

export const pageTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
})

export const filterRow = style({
  display: 'flex',
  gap: vars.spacing.sm,
  padding: `0 ${vars.spacing.md} ${vars.spacing.md}`,
  overflowX: 'auto',
  scrollbarWidth: 'none',
  selectors: {
    '&::-webkit-scrollbar': { display: 'none' },
  },
})

export const filterTab = style({
  flexShrink: 0,
  padding: `6px ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  cursor: 'pointer',
  border: `1.5px solid ${vars.color.border}`,
  backgroundColor: vars.color.background,
  color: vars.color.secondary,
  transition: 'all 0.15s',
  ':hover': {
    borderColor: vars.color.primary,
    color: vars.color.primary,
  },
})

export const filterTabActive = style({
  flexShrink: 0,
  padding: `6px ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  cursor: 'pointer',
  border: `1.5px solid ${vars.color.primary}`,
  backgroundColor: vars.color.primary,
  color: vars.color.white,
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  paddingTop: vars.spacing.xs,
})

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  padding: `${vars.spacing.md} ${vars.spacing.md}`,
  backgroundColor: vars.color.background,
  borderBottom: `1px solid ${vars.color.border}`,
  cursor: 'pointer',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: vars.color.surface,
  },
})

export const cardName = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.primary,
  lineHeight: '1.4',
})

export const cardMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
})

export const typeBadge = style({
  display: 'inline-block',
  padding: `2px ${vars.spacing.sm}`,
  borderRadius: vars.borderRadius.full,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  backgroundColor: '#FFF0EB',
  color: vars.color.accent,
})

export const regionText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
})

export const emptyState = style({
  textAlign: 'center',
  padding: `${vars.spacing.xxl} ${vars.spacing.md}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.muted,
})
