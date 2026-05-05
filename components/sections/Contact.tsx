'use client'

import { SectionLabel } from './About'

const links = [
  { label: 'email', href: 'mailto:kia.zheidari@gmail.com' },
  { label: 'github', href: 'https://github.com/kiazh' },
  { label: 'mal', href: 'https://myanimelist.net/profile/ki_shadow' },
]

export function Contact() {
  return (
    <section id="contact" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
      <SectionLabel>Contact</SectionLabel>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            style={{
              color: 'var(--muted)',
              fontSize: '15px',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationColor: 'transparent',
              transition: 'color 0.15s ease, text-decoration-color 0.15s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = 'var(--fg)'
              el.style.textDecorationColor = 'var(--fg)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = 'var(--muted)'
              el.style.textDecorationColor = 'transparent'
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
