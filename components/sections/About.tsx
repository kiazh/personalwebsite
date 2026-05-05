export function About() {
  const wants = [
    'Build a CPU from scratch — not simulate one.',
    'Understand quantum field theory well enough to be embarrassed by what I don\'t know.',
    'Write something worth reading.',
    'Contribute to a project that outlasts me.',
    'Learn Japanese.',
  ]

  return (
    <section id="about" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <SectionLabel>About</SectionLabel>
      <div style={{ maxWidth: '480px', lineHeight: 1.8 }}>
        <p style={{ color: 'var(--fg)', marginBottom: '20px' }}>
          Write something real here. Not a resume summary. Something a person would actually say.
        </p>
        <p style={{ color: 'var(--fg)', marginBottom: '44px' }}>
          What you care about. What you&apos;re figuring out. Where you&apos;re from.
        </p>

        <p style={{
          color: 'var(--muted)',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          Want to
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {wants.map((goal) => (
            <li key={goal} style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6 }}>
              {goal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      color: 'var(--muted)',
      fontSize: '13px',
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      marginBottom: '28px',
    }}>
      {children}
    </p>
  )
}
