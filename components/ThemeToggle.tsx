'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-8 h-5" />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="text-sm transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:underline"
      style={{ color: 'var(--muted)' }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
