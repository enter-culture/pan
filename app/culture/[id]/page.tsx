import { notFound } from 'next/navigation'

import { getCultureById } from '@/services/culture'
import { ImageCarousel } from '@/components/culture/ImageCarousel'
import { CultureInfo } from '@/components/culture/CultureInfo'

import { CultureHeader } from './CultureHeader'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function CulturePage({ params }: PageProps) {
  const { id } = await params

  try {
    const culture = await getCultureById(id)
    return (
      <main>
        <CultureHeader />
        <ImageCarousel images={culture.images} alt={culture.name} />
        <CultureInfo culture={culture} />
      </main>
    )
  } catch {
    notFound()
  }
}
