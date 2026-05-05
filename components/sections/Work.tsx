'use client'

import { SectionLabel } from './About'

const projects = [
  {
    name: 'MLscratch',
    description: 'Machine learning library written in C, from scratch. No abstractions, just math and memory.',
    github: 'https://github.com/kiazh/MLscratch',
    year: '2025',
    status: null,
  },
  {
    name: 'AES-128',
    description: 'AES encryption implemented from first principles in Go. C port in progress.',
    github: 'https://github.com/kiazh/AES-128',
    year: '2025',
    status: null,
  },
  {
    name: 'Esp32Network',
    description: 'Embedded ML pipeline for NRF24 link quality classification on an ESP32, built with AEL.',
    github: 'https://github.com/kiazh/Esp32Network',
    year: '2024',
    status: null,
  },
  {
    name: 'C-compiler',
    description: 'Writing a C compiler to understand what happens between source code and machine instructions.',
    github: 'https://github.com/kiazh/C-compiler',
    year: '2026',
    status: 'ongoing',
  },
]

export function Work() {
  return (
    <section id="work" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <SectionLabel>Work</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        {projects.map((p) => (
          <div key={p.name}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--fg)',
                  fontWeight: 500,
                  fontSize: '17px',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  textDecorationColor: 'transparent',
                  transition: 'text-decoration-color 0.15s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'var(--muted)')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'transparent')}
              >
                {p.name}
              </a>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>{p.year}</span>
              {p.status && (
                <span style={{ color: 'var(--muted)', fontSize: '12px', fontStyle: 'italic' }}>
                  {p.status}
                </span>
              )}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7, maxWidth: '460px' }}>
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
