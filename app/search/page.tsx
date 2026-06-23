'use client'

import { useState } from 'react'

import type { Short } from '@/types'

import { ShortCard } from '@/components/feed/ShortCard'

import { emptyState, grid, input, page, resultHeader, searchBar, searchButton } from './search.css'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Short[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return
    setIsLoading(true)
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
    const data: Short[] = await res.json()
    setResults(data)
    setIsLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={page}>
      <div className={searchBar}>
        <input
          className={input}
          type="text"
          placeholder="제목, 카테고리, 해시태그 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={searchButton} onClick={handleSearch}>
          검색
        </button>
      </div>

      {!isLoading && results === null && (
        <p className={emptyState}>검색어를 입력하고<br />검색 버튼을 눌러보세요</p>
      )}

      {!isLoading && results !== null && results.length === 0 && (
        <p className={emptyState}>'{query}'에 대한 검색 결과가 없어요</p>
      )}

      {!isLoading && results !== null && results.length > 0 && (
        <>
          <p className={resultHeader}>{results.length}개의 숏폼</p>
          <div className={grid}>
            {results.map((short) => (
              <ShortCard key={short.id} short={short} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
