'use client'

import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      paddingTop: '48px',
      paddingBottom: '0',
    }}>
      <span style={{ color: 'var(--fg)', fontSize: '15px', fontWeight: 500 }}>
        Kiarad
      </span>
      <nav style={{ display: 'flex', alignItems: 'baseline', gap: '24px' }}>
        <NavLink href="https://github.com/kiazh" external>github</NavLink>
        <NavLink href="https://www.linkedin.com/in/kiazh" external>linkedin</NavLink>
        <NavLink href="mailto:kia.zheidari@gmail.com">email</NavLink>
        <ThemeToggle />
      </nav>
    </header>
  )
}

function NavLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        color: 'var(--muted)',
        fontSize: '14px',
        textDecoration: 'none',
        transition: 'color 0.15s ease',
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)')}
      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)')}
    >
      {children}
    </a>
  )
}
