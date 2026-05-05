'use client'

const footerLinks = [
  { href: 'https://github.com/kiazh', label: 'GitHub', external: true },
  { href: 'mailto:kia.zheidari@gmail.com', label: 'Email', external: false },
  { href: 'https://myanimelist.net/profile/ki_shadow', label: 'MyAnimeList', external: true },
]

export function Footer() {
  return (
    <footer style={{
      paddingBottom: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
        {new Date().getFullYear()}
      </p>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            style={{
              color: 'var(--muted)',
              fontSize: '12px',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)')}
          >
            {link.label.toLowerCase()}
          </a>
        ))}
      </div>
    </footer>
  )
}
