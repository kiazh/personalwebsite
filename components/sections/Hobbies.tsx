'use client'

import { useState } from 'react'
import { SectionLabel } from './About'

type Tab = 'anime' | 'physics' | 'games' | 'books'

const interests: Record<Tab, { label: string; body: string }> = {
  anime: {
    label: 'Anime',
    body: 'Evangelion, Steins;Gate, Made in Abyss. The kind that stays with you. Add your take.',
  },
  physics: {
    label: 'Physics',
    body: 'Add what draws you in. What are you studying, what keeps pulling you back.',
  },
  games: {
    label: 'Games',
    body: 'Destiny 2. Add what draws you to it.',
  },
  books: {
    label: 'Books',
    body: 'Vagabond, Berserk, Blame!, Kokou no Hito. Add what you actually think about them.',
  },
}

const tabs: Tab[] = ['anime', 'physics', 'games', 'books']

export function Hobbies() {
  const [active, setActive] = useState<Tab>('anime')

  return (
    <section id="interests" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <SectionLabel>Interests</SectionLabel>

      <div style={{ display: 'flex', gap: '24px', marginBottom: '28px' }}>
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

      <p style={{
        color: 'var(--muted)',
        fontSize: '15px',
        lineHeight: 1.75,
        maxWidth: '480px',
      }}>
        {interests[active].body}
      </p>
    </section>
  )
}
