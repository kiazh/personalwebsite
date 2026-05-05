export function About() {
  return (
    <section id="about" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <SectionLabel>About</SectionLabel>
      <div style={{ maxWidth: '480px', color: 'var(--fg)', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '20px' }}>
          Write something real here. Not a resume summary. Something a person would actually say.
        </p>
        <p>
          What you care about. What you&apos;re figuring out. Where you&apos;re from.
        </p>
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
