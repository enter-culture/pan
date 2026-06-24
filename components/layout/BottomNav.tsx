'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { nav, navIcon, navItem, navLabel } from './BottomNav.css'

interface IconProps {
  className: string
}

const HomeIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
)

const ShortIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="4" ry="4" />
    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
  </svg>
)

const SearchIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const MyIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

interface NavItem {
  href: string
  label: string
  Icon: React.FC<IconProps>
}

const NAV_ITEMS: NavItem[] = [
  { href: '/feed', label: '홈', Icon: HomeIcon },
  { href: '/short', label: '숏폼', Icon: ShortIcon },
  { href: '/search', label: '검색', Icon: SearchIcon },
  { href: '/me', label: '마이', Icon: MyIcon },
]

export function BottomNav() {
  const pathname = usePathname()

  if (pathname === '/' || pathname.startsWith('/short/')) return null

  return (
    <nav className={nav}>
      {NAV_ITEMS.map(({ href, label, Icon }) => {
        const isActive = pathname === href || pathname.startsWith(href + '/')
        const variant = isActive ? 'active' : 'inactive'
        return (
          <Link key={href} href={href} className={navItem}>
            <Icon className={navIcon[variant]} />
            <span className={navLabel[variant]}>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
