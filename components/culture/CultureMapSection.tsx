'use client'

import dynamic from 'next/dynamic'

interface HeritageItem {
  name: string
  content_type: string
  region: string | null
  address: string | null
  latitude: number
  longitude: number
  description: string | null
}

interface CultureMapSectionProps {
  items: HeritageItem[]
  title: string
}

const HeritageMap = dynamic(
  () => import('./HeritageMap').then((m) => m.HeritageMap),
  { ssr: false, loading: () => <div style={{ height: 320, background: '#f5f5f5', borderRadius: 12 }} /> },
)

export function CultureMapSection({ items, title }: CultureMapSectionProps) {
  return <HeritageMap items={items} title={title} />
}
