'use client'

import { useState } from 'react'
import { SectionLabel } from './About'

type Tab = 'reading' | 'anime' | 'physics' | 'games'

const interests: Record<Tab, { label: string; items: { title: string; note: string; href?: string }[] }> = {
  reading: {
    label: 'Reading',
    items: [
      { title: 'Vagabond', note: 'Add what you actually think about it.' },
      { title: 'Berserk', note: 'Add what you actually think about it.' },
      { title: 'Blame!', note: 'Add what you actually think about it.' },
      { title: 'Kokou no Hito', note: 'Add what you actually think about it.' },
    ],
  },
  anime: {
    label: 'Anime',
    items: [
      { title: 'Evangelion', note: 'Add what you actually think about it.' },
      { title: 'Steins;Gate', note: 'Add what you actually think about it.' },
      { title: 'Made in Abyss', note: 'Add what you actually think about it.' },
      { title: 'MAL', note: 'ki_shadow', href: 'https://myanimelist.net/profile/ki_shadow' },
    ],
  },
  physics: {
    label: 'Physics',
    items: [
      { title: 'Add topic', note: 'What are you studying? What draws you to it?' },
    ],
  },
  games: {
    label: 'Games',
    items: [
      { title: 'Destiny 2', note: 'Add your take. What draws you to it.' },
    ],
  },
}

const tabs: Tab[] = ['reading', 'anime', 'physics', 'games']

export function Hobbies() {
  const [active, setActive] = useState<Tab>('reading')
  const current = interests[active]

  return (
    <section id="interests" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <SectionLabel>Interests</SectionLabel>

      <div style={{ display: 'flex', gap: '24px', marginBottom: '36px' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: active === tab ? '1px solid var(--muted)' : '1px solid transparent',
              padding: '0 0 3px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '15px',
              color: active === tab ? 'var(--fg)' : 'var(--muted)',
              fontWeight: active === tab ? 500 : 400,
              transition: 'color 0.15s ease',
            }}
          >
            {interests[tab].label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '480px' }}>
        {current.items.map((item) => (
          <div key={item.title} style={{ display: 'flex', gap: '32px' }}>
            <span style={{
              color: 'var(--fg)',
              fontSize: '15px',
              minWidth: '100px',
              flexShrink: 0,
              fontWeight: 500,
              paddingTop: '1px',
            }}>
              {item.title}
            </span>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--muted)',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  textDecorationColor: 'transparent',
                  transition: 'text-decoration-color 0.15s ease',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'var(--muted)')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'transparent')}
              >
                {item.note}
              </a>
            ) : (
              <span style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7 }}>
                {item.note}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
