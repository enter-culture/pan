import { describe, it, expect } from 'vitest'

import { getCultureById } from '../culture'

describe('getCultureById', () => {
  it('존재하는 id로 문화체험을 반환한다', async () => {
    const result = await getCultureById('culture-1')
    expect(result.id).toBe('culture-1')
    expect(result.name).toBe('천하장사 씨름 대축제')
  })

  it('존재하지 않는 id는 에러를 던진다', async () => {
    await expect(getCultureById('not-found')).rejects.toThrow('Culture not found')
  })
})
