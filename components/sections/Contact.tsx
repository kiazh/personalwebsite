'use client'

import { SectionLabel } from './About'

const links = [
  { label: 'email', value: 'kia.zheidari@gmail.com', href: 'mailto:kia.zheidari@gmail.com' },
  { label: 'github', value: 'kiazh', href: 'https://github.com/kiazh' },
  { label: 'linkedin', value: 'kiazh', href: 'https://www.linkedin.com/in/kiazh' },
]

export function Contact() {
  return (
    <section id="contact" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
      <SectionLabel>Contact</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {links.map((link) => (
          <div key={link.label} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
            <span style={{
              color: 'var(--muted)',
              fontSize: '14px',
              minWidth: '64px',
              flexShrink: 0,
            }}>
              {link.label}
            </span>
            <a
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                color: 'var(--fg)',
                fontSize: '15px',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: 'transparent',
                transition: 'text-decoration-color 0.15s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'var(--muted)')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'transparent')}
            >
              {link.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
