import { getShorts } from '@/services/shorts'

import { FeedClient } from './FeedClient'
import { header } from './feed.css'

export default async function FeedPage() {
  const shorts = await getShorts()

  return (
    <main>
      <h1 className={header}>판(PAN)</h1>
      <FeedClient initialShorts={shorts} />
    </main>
  )
}
