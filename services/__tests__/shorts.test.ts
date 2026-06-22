import { describe, it, expect } from 'vitest'

import { getShorts, getShortById } from '../shorts'

describe('getShorts', () => {
  it('전체 카테고리일 때 모든 숏폼을 반환한다', async () => {
    const result = await getShorts()
    expect(result.length).toBeGreaterThan(0)
  })

  it('카테고리 필터가 적용된다', async () => {
    const result = await getShorts('음악')
    result.forEach((s) => expect(s.category).toBe('음악'))
  })

  it('전체 카테고리 필터는 모든 항목을 반환한다', async () => {
    const all = await getShorts('전체')
    const none = await getShorts()
    expect(all.length).toBe(none.length)
  })
})

describe('getShortById', () => {
  it('존재하는 id로 숏폼을 반환한다', async () => {
    const result = await getShortById('short-1')
    expect(result.id).toBe('short-1')
  })

  it('존재하지 않는 id는 에러를 던진다', async () => {
    await expect(getShortById('not-found')).rejects.toThrow('Short not found')
  })
})
