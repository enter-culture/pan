import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const mapContainer = style({
  width: '100%',
  height: '320px',
  borderRadius: vars.borderRadius.md,
  overflow: 'hidden',
  zIndex: 0,
})

export const popup = style({
  minWidth: '160px',
})

export const markerTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
  margin: '0 0 4px',
})

export const markerRegion = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.accent,
  margin: '0 0 4px',
})

export const markerDescription = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.secondary,
  margin: 0,
  lineHeight: '1.5',
})
