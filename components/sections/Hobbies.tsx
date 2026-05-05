'use client'

import { useState } from 'react'
import { SectionLabel } from './About'

type Tab = 'anime' | 'physics' | 'games' | 'goals'

type TabItem = {
  title: string
  note: string
}

type TabContent = {
  label: string
  body: string
  items?: TabItem[]
}

const interests: Record<Tab, TabContent> = {
  anime: {
    label: 'Anime/Manga',
    body: 'As much as people like to clown on anime and manga, it has helped me at my lowest. The best I can describe the feeling through these is catharsis.',
    items: [
      { title: '- Firepunch', note: 'Genuinely a masterpiece, highly underrated, better than chainsaw man imo'},
      {title: '- Vagabond', note: 'Beautiful book, I love Taoism/Daoism '},
    ],
  },
  physics: {
    label: 'Physics',
    body: "What draws me in isn't the equations—it's that physics describes reality without asking for permission. Studying the mathematical framework that underpins everything, even when the math fights back.",
  },
  games: {
    label: 'Games',
    body: "Destiny 2. Something about the loop—grinding, improving, the quiet satisfaction of mechanics that work. It's not about the story; it's about showing up and getting better at something that doesn't matter.",
  },
  goals: {
    label: 'Goals',
    body: 'I like burgers',
  },
}

const tabs: Tab[] = ['anime', 'physics', 'games', 'goals']

export function Hobbies() {
  const [active, setActive] = useState<Tab>('anime')
  const current = interests[active]

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

      <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.75 }}>
        {current.body}
      </p>

      {current.items && current.items.length > 0 && (
        <ul style={{ marginTop: '16px', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {current.items.map((item) => (
            <li key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ color: 'var(--fg)', fontSize: '14px', fontWeight: 500 }}>
                {item.title}
              </span>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>
                {item.note}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}