import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Email', href: 'mailto:you@email.com', display: 'you@email.com' },
  { label: 'GitHub', href: 'https://github.com/yourusername', display: 'github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', display: 'linkedin.com/in/yourusername' },
  { label: 'Twitter', href: 'https://twitter.com/yourusername', display: '@yourusername' },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-[var(--border)]">
      <h2
        className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-8"
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        Contact
      </h2>
      <p className="text-[var(--muted)] mb-8 max-w-sm leading-relaxed text-sm">
        Feel free to reach out — always happy to chat about projects, ideas, or opportunities.
      </p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-[var(--foreground)] hover:text-[var(--muted)] transition-colors duration-150 cursor-pointer"
            >
              <span className="w-16 shrink-0 text-[var(--muted)] text-xs">{link.label}</span>
              <span className="hover:underline underline-offset-4">{link.display}</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
