export function About() {
  return (
    <section id="about" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <SectionLabel>About</SectionLabel>
      <div style={{ lineHeight: 1.8 }}>
        <p style={{ color: 'var(--fg)', marginBottom: '20px' }}>
          I've spent the last few years trying to understand what matters. Started with nihilism, moved through absurdism, landed somewhere between the two: building things because the act of making is more honest than the alternative.
        </p>
        <p style={{ color: 'var(--fg)' }}>
          Mathematical Physics @ uWaterloo. Systems Programming, Machine Learning, Low-Level Development. 
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
