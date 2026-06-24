import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const nav = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '430px',
  height: '64px',
  backgroundColor: vars.color.white,
  borderTop: `1px solid ${vars.color.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  zIndex: 120,
})

export const navItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.xs,
  flex: 1,
  padding: `${vars.spacing.xs} 0`,
  cursor: 'pointer',
})

export const navLabel = styleVariants({
  active: {
    fontSize: vars.fontSize.xs,
    fontWeight: vars.fontWeight.semibold,
    color: vars.color.navActive,
  },
  inactive: {
    fontSize: vars.fontSize.xs,
    fontWeight: vars.fontWeight.regular,
    color: vars.color.navInactive,
  },
})

export const navIcon = styleVariants({
  active: {
    color: vars.color.navActive,
  },
  inactive: {
    color: vars.color.navInactive,
  },
})
