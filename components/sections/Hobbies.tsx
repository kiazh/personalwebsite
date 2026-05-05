'use client'

import { useState } from 'react'
import { SectionLabel } from './About'

type Tab = 'anime' | 'physics' | 'games' | 'books'

const interests: Record<Tab, { label: string; body: string }> = {
  anime: {
    label: 'Anime',
    body: 'The shows that stay with you—Evangelion, Steins;Gate, Made in Abyss, Sonny Boy. Not because they\'re entertaining, but because they force you to sit with uncomfortable questions about meaning, escapism, and what it means to return to reality.',
  },
  physics: {
    label: 'Physics',
    body: 'What draws me in isn\'t the equations—it\'s that physics describes reality without asking for permission. Studying the mathematical framework that underpins everything, even when the math fights back.',
  },
  games: {
    label: 'Games',
    body: 'Destiny 2. Something about the loop—grinding, improving, the quiet satisfaction of mechanics that work. It\'s not about the story; it\'s about showing up and getting better at something that doesn\'t matter.',
  },
  books: {
    label: 'Manga',
    body: 'Vagabond, Berserk, Blame!, Kokou no Hito. Stories that treat existence as something to be endured, not celebrated. The art of suffering, the beauty of persistence, where the point isn\'t winning but continuing.',
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
