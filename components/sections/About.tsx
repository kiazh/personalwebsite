export function About() {
  return (
    <section id="about" style={{ paddingTop: '44px', paddingBottom: '56px' }}>
      <SectionLabel>About</SectionLabel>
      <div style={{ lineHeight: 1.85 }}>
        <p style={{ color: 'var(--fg)', marginBottom: '0px' }}>
          I'm Kiarad Zafar Heidari, an 18-year-old Mathematical Physics student at the University of Waterloo. I don't separate physics from development.
           I just want to know how things work, and that takes me everywhere: low-level systems, machine learning, general relativity, philosophy.
        </p>
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      color: 'var(--muted)',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: '20px',
    }}>
      {children}
    </p>
  )
}
