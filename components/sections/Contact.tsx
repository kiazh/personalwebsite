'use client'

const links = [
  { label: 'Email', href: 'mailto:you@email.com' },
  { label: 'GitHub', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Twitter', href: 'https://twitter.com/yourusername' },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 pb-24">
      <p className="text-sm font-medium mb-6" style={{ color: 'var(--muted)', fontFamily: 'var(--font-archivo), sans-serif' }}>
        Contact
      </p>
      <p className="text-sm max-w-sm mb-8 leading-relaxed" style={{ color: 'var(--muted)' }}>
        Always open to interesting conversations.
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-150 cursor-pointer"
            style={{
              color: 'var(--fg)',
              textDecorationLine: 'underline',
              textUnderlineOffset: '4px',
              textDecorationColor: 'transparent',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'var(--fg)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'transparent'
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
