'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { nav, navIcon, navItem, navLabel } from './BottomNav.css'

const NAV_ITEMS = [
  { href: '/feed', label: '홈', icon: '🏠' },
  { href: '/social', label: '소셜', icon: '👥' },
  { href: '/search', label: '검색', icon: '🔍' },
  { href: '/me', label: '미미', icon: '👤' },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className={nav}>
      {NAV_ITEMS.map(({ href, label, icon }) => {
        const isActive = pathname.startsWith(href)
        const variant = isActive ? 'active' : 'inactive'
        return (
          <Link key={href} href={href} className={navItem}>
            <span className={navIcon[variant]}>{icon}</span>
            <span className={navLabel[variant]}>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
