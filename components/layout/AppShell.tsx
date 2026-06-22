import { shell } from './AppShell.css'

interface AppShellProps {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return <div className={shell}>{children}</div>
}
