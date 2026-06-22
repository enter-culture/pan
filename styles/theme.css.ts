import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#1A1A1A',
    secondary: '#555555',
    muted: '#999999',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    border: '#E8E8E8',
    accent: '#FF4D00',
    white: '#FFFFFF',
    navActive: '#1A1A1A',
    navInactive: '#AAAAAA',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  fontSize: {
    xs: '11px',
    sm: '13px',
    md: '15px',
    lg: '17px',
    xl: '22px',
    xxl: '28px',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 4px rgba(0,0,0,0.08)',
    md: '0 4px 16px rgba(0,0,0,0.12)',
  },
  breakpoint: {
    tablet: '768px',
    desktop: '1024px',
  },
})
