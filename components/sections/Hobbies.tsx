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
    body: 'As much as people like to clown on anime and manga, it has helped me at my lowest. The best I can describe whats felt through these shows is catharsis.',
    items: [
      { title: 'Firepunch', note: 'Genuinely a masterpiece, highly underrated, better than chainsaw man imo' },
      { title: 'Vagabond', note: 'Beautiful book, I love Taoism/Daoism' },
      { title: 'Sonny Boy', note: 'It has a very similar message to NGE, stop running away' },
      { title: 'Neon Genesis Evangelion', note: 'This anime was with me at my lowest. One I will never forget' },
    ],
  },
  physics: {
    label: 'Physics',
    body: 'I\'ve loved physics for a very long time, even before I knew what the subject was. Physics is what allows fiction to be a possibility; concepts like time travel, aliens, and teleportation are things that physics offers hope for and lays the groundwork for mankind\'s next steps.',
  },
  games: {
    label: 'Games',
    body: '',
    items: [
      { title: 'Destiny 2', note: 'Peaked top 500 global in speedrank on raid.report' },
      { title: 'Elden Ring', note: 'ng+7, best game ever made' },
      { title: 'Fortnite', note: 'I know... but I competed and hit Unreal, also Champ League when it was in the game' },
      { title: 'Lego Marvel Super Heroes', note: 'My childhood. Played almost all the Lego games, this one is the best' },
      { title: 'Plants vs Zombies Garden Warfare 2', note: 'Used to play this with my childhood bestfriend whenever he came over' },
    ],
  },
  goals: {
    label: 'Goals',
    body: '',
    items: [
      { title: '- Make a time machine before I die', note: '' },
      { title: '- Make a plane', note: '' },
      { title: '- Make a discovery in Physics', note: '' },
      { title: '- Get a PhD in Physics', note: '' },
    ],
  },
}

const tabs: Tab[] = ['anime', 'physics', 'games', 'goals']

export function Hobbies() {
  const [active, setActive] = useState<Tab>('anime')
  const current = interests[active]

  return (
    <section id="interests" style={{ paddingTop: '60px', paddingBottom: '88px' }}>
      <SectionLabel>Interests</SectionLabel>

      <div role="tablist" aria-label="Interests" style={{ display: 'flex', gap: '28px', marginBottom: '36px' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            aria-controls={`tabpanel-${tab}`}
            id={`tab-${tab}`}
            onClick={() => setActive(tab)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: active === tab ? '1px solid var(--muted)' : '1px solid transparent',
              padding: '0 0 3px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '16px',
              color: active === tab ? 'var(--fg)' : 'var(--muted)',
              fontWeight: active === tab ? 500 : 400,
              transition: 'color 0.15s ease',
            }}
          >
            {interests[tab].label}
          </button>
        ))}
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`tabpanel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="interests-content"
      >
        {current.body && (
          <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.85 }}>
            {current.body}
          </p>
        )}

        {current.items && current.items.length > 0 && (
          <ul style={{ marginTop: current.body ? '24px' : '0', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {current.items.map((item) => (
              <li key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ color: 'var(--fg)', fontSize: '15px', fontWeight: 500 }}>
                  {item.title}
                </span>
                {item.note && (
                  <span style={{ color: 'var(--muted)', fontSize: '14px' }}>
                    {item.note}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
