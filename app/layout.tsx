import type { Metadata } from 'next'

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
        <AppShell>
          {children}
          <BottomNav />
        </AppShell>
      </body>
    </html>
  )
}
