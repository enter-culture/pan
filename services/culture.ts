import type { Culture } from '@/types'

import { mockCultures } from '@/data/culture'

export async function getCultures(): Promise<Culture[]> {
  return mockCultures
}

export async function getCultureById(id: string): Promise<Culture> {
  const culture = mockCultures.find((c) => c.id === id)
  if (!culture) {
    throw new Error('Culture not found')
  }
  return culture
}
