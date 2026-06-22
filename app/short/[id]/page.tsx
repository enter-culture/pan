import { notFound } from 'next/navigation'

import { ShortSwipeFeed } from '@/components/short/ShortSwipeFeed'
import { getShortById, getShorts } from '@/services/shorts'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ShortPage({ params }: PageProps) {
  const { id } = await params

  try {
    const [, allShorts] = await Promise.all([getShortById(id), getShorts()])
    return <ShortSwipeFeed currentId={id} allShorts={allShorts} />
  } catch {
    notFound()
  }
}
