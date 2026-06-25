import type { Metadata } from 'next'
import Script from 'next/script'

import { AppShell } from '@/components/layout/AppShell'
import { BottomNav } from '@/components/layout/BottomNav'
import '@/styles/global.css'

export const metadata: Metadata = {
  title: '판(PAN) - 당신의 취향을 판에서 찾아보세요!',
  description: '한국 전통문화 콘텐츠 탐색 서비스',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
          strategy='beforeInteractive'
        />
        <AppShell>
          {children}
          <BottomNav />
        </AppShell>
      </body>
    </html>
  )
}
