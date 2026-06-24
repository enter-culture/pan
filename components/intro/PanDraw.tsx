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
      viewBox="0 0 178 72"
      aria-label="pan"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* p: 줄기(아래→위) + 오른쪽 볼 */}
      <path
        ref={$p}
        d="M14,68 L14,6 C14,-6 54,-6 54,24 C54,54 14,54 14,40"
        fill="none"
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="400"
        strokeDashoffset="400"
      />
      {/* a: 원 + 오른쪽 줄기 */}
      <path
        ref={$a}
        d="M116,12 C116,0 104,2 92,2 C70,2 66,16 66,28 C66,52 78,56 92,56 C108,56 116,46 116,34 L116,56"
        fill="none"
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="400"
        strokeDashoffset="400"
      />
      {/* n: 왼쪽 줄기 + 아치 + 오른쪽 줄기 */}
      <path
        ref={$n}
        d="M126,56 L126,14 C126,-2 170,-2 170,14 L170,56"
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
