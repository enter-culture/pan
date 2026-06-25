export const dynamic = 'force-dynamic'

import { Dancing_Script } from 'next/font/google'

import { getShorts } from '@/services/shorts'

import { FeedClient } from './FeedClient'
import { header } from './feed.css'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
})

export default async function FeedPage() {
  const shorts = await getShorts()

  return (
    <main>
      <h1 className={`${header} ${dancingScript.className}`}>pan</h1>
      <FeedClient initialShorts={shorts} />
    </main>
  )
}
