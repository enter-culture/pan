import { globalFontFace, globalStyle } from '@vanilla-extract/css'

globalFontFace('Pretendard Variable', {
  src: 'url("/fonts/PretendardVariable.woff2") format("woff2")',
  fontWeight: '100 900',
  fontStyle: 'normal',
  fontDisplay: 'swap',
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
})

globalStyle('html, body', {
  fontFamily:
    "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Segoe UI', sans-serif",
  backgroundColor: '#FFFFFF',
  color: '#1A1A1A',
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
})

globalStyle('img', {
  maxWidth: '100%',
  display: 'block',
})
