'use client'

import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-sm border-b border-[var(--border)]">
      <nav className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold text-sm tracking-tight text-[var(--foreground)] hover:opacity-70 transition-opacity duration-150 cursor-pointer"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          Your Name
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
