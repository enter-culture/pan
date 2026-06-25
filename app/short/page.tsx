import { notFound } from 'next/navigation'

import { ShortSwipeFeed } from '@/components/short/ShortSwipeFeed'
import { getShorts } from '@/services/shorts'

export const dynamic = 'force-dynamic'

export default async function ShortPage() {
  const shorts = await getShorts()
  if (!shorts.length) notFound()
  return <ShortSwipeFeed currentId={shorts[0].id} allShorts={shorts} />
}
