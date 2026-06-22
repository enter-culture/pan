import { notFound } from 'next/navigation'
import { getShortById } from '@/services/shorts'
import { ShortDetail } from '@/components/short/ShortDetail'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ShortPage({ params }: PageProps) {
  const { id } = await params

  try {
    const short = await getShortById(id)
    return <ShortDetail short={short} />
  } catch {
    notFound()
  }
}
