import { style } from '@vanilla-extract/css'

export const svgWrap = style({
  width: 'clamp(160px, 48vw, 220px)',
  height: 'auto',
  overflow: 'visible',
  filter: 'drop-shadow(0 2px 14px rgba(0,0,0,0.42))',
})
