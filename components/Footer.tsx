'use client'

const footerLinks = [
  { href: 'https://github.com/kiazh', label: 'github', external: true },
  { href: 'mailto:kia.zheidari@gmail.com', label: 'email', external: false },
  { href: 'https://discord.com/users/431549003449237505', label: 'discord', external: true },
  { href: 'https://myanimelist.net/profile/ki_shadow', label: 'mal', external: true },
]

export function Footer() {
  return (
    <footer style={{
      paddingBottom: '64px',
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
            style={{
              color: 'var(--muted)',
              fontSize: '12px',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
