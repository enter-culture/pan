import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const shell = style({
  maxWidth: '1280px',
  margin: '0 auto',
  minHeight: '100dvh',
  position: 'relative',
  backgroundColor: vars.color.background,
  paddingBottom: '64px',
})
