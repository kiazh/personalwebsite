export function Hero() {
  return (
    <section style={{ paddingTop: '80px', paddingBottom: '64px' }}>
      <h1 style={{
        fontSize: 'clamp(2.6rem, 6vw, 4rem)',
        fontWeight: 500,
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
        color: 'var(--fg)',
        marginBottom: '24px',
      }}>
        Kiarad
      </h1>
      <p style={{
        color: 'var(--muted)',
        maxWidth: '440px',
        lineHeight: 1.7,
        fontSize: '17px',
      }}>
        Mathematical Physics, Waterloo. I build things from scratch{' '}
        and try to understand why they work.
      </p>
    </section>
  )
}
