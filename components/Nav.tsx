'use client'

import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  return (
    <header className="flex items-center justify-between pt-10 pb-0">
      <span
        className="text-sm font-medium"
        style={{ color: 'var(--fg)', fontFamily: 'var(--font-archivo), sans-serif' }}
      >
        Your Name
      </span>
      <nav className="flex items-center gap-6">
        <a
          href="mailto:you@email.com"
          className="text-sm transition-colors duration-150"
          style={{ color: 'var(--muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          Email
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-colors duration-150"
          style={{ color: 'var(--muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          GitHub
        </a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
