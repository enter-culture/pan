import type { Category, Short } from '@/types'

import { mockShorts } from '@/data/shorts'

export async function getShorts(category?: Category): Promise<Short[]> {
  if (!category || category === '전체') {
    return mockShorts
  }
  return mockShorts.filter((s) => s.category === category)
}

export async function getShortById(id: string): Promise<Short> {
  const short = mockShorts.find((s) => s.id === id)
  if (!short) {
    throw new Error('Short not found')
  }
  return short
}
