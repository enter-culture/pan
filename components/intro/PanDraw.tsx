'use client'

import { useEffect, useRef } from 'react'

import { svgWrap } from './PanDraw.css'

type PathEntry = [React.RefObject<SVGPathElement | null>, number]

export function PanDraw() {
  const $p = useRef<SVGPathElement>(null)
  const $a = useRef<SVGPathElement>(null)
  const $n = useRef<SVGPathElement>(null)

  useEffect(() => {
    const entries: PathEntry[] = [
      [$p, 0],
      [$a, 320],
      [$n, 620],
    ]

    entries.forEach(([ref, delay]) => {
      const path = ref.current
      if (!path) return

      const len = path.getTotalLength()
      path.style.strokeDasharray = `${len}`
      path.style.strokeDashoffset = `${len}`

      setTimeout(() => {
        requestAnimationFrame(() => {
          path.style.transition = 'stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1)'
          path.style.strokeDashoffset = '0'
        })
      }, delay)
    })
  }, [])

  return (
    <svg
      className={svgWrap}
      viewBox="0 0 174 72"
      aria-label="pan"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* p: 입력획 → 내림획(descender) → 올라오며 볼 그리기 */}
      <path
        ref={$p}
        d="M16,58 L16,72 C14,78 22,80 24,72 L24,12 C24,2 36,-4 46,2 C58,8 56,30 46,42 C38,52 24,52 24,40"
        fill="none"
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="400"
        strokeDashoffset="400"
      />
      {/* a: 상단 오른쪽에서 반시계 방향 타원 → 오른쪽 줄기 */}
      <path
        ref={$a}
        d="M110,14 C110,2 90,-4 80,4 C66,12 66,40 80,52 C94,62 112,54 112,38 L112,60"
        fill="none"
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="400"
        strokeDashoffset="400"
      />
      {/* n: 왼쪽 줄기 → 비대칭 아치 → 오른쪽 줄기 */}
      <path
        ref={$n}
        d="M124,60 L124,16 C126,-2 158,0 164,14 L164,60"
        fill="none"
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="400"
        strokeDashoffset="400"
      />
    </svg>
  )
}
