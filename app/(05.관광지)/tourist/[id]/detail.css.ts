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

export const body = style({
  padding: `${vars.spacing.sm} ${vars.spacing.md} ${vars.spacing.xl}`,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
})

export const typeBadge = style({
  display: 'inline-block',
  padding: `4px ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.full,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  backgroundColor: '#FFF0EB',
  color: vars.color.accent,
  alignSelf: 'flex-start',
})

export const titleText = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
  lineHeight: '1.4',
  margin: 0,
})

export const infoBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
  backgroundColor: vars.color.surface,
  borderRadius: vars.borderRadius.md,
})

export const infoRow = style({
  display: 'flex',
  gap: vars.spacing.sm,
  alignItems: 'flex-start',
})

export const infoLabel = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.muted,
  fontWeight: vars.fontWeight.medium,
  minWidth: '52px',
  flexShrink: 0,
})

export const infoValue = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.primary,
  lineHeight: '1.6',
})

export const descriptionText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
  lineHeight: '1.8',
  whiteSpace: 'pre-line',
  margin: 0,
})

export const mapSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
})

export const sectionTitle = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.primary,
  margin: 0,
})

export const externalLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  width: '100%',
  padding: vars.spacing.md,
  border: `1.5px solid ${vars.color.primary}`,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.primary,
  backgroundColor: vars.color.background,
  textDecoration: 'none',
  transition: 'all 0.15s',
  ':hover': {
    backgroundColor: vars.color.primary,
    color: vars.color.white,
  },
})
