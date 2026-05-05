export function Hero() {
  return (
    <section style={{ paddingTop: '80px', paddingBottom: '64px' }}>
      <h1 style={{
        fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
        fontWeight: 500,
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
        color: 'var(--fg)',
        marginBottom: '24px',
      }}>
        Kiarad{' '}
        <span
          lang="ja"
          aria-hidden="true"
          style={{
            fontSize: '0.48em',
            color: 'var(--muted)',
            fontWeight: 400,
            letterSpacing: 0,
            verticalAlign: '0.12em',
          }}
        >
          影
        </span>
      </h1>
      <p style={{
        color: 'var(--muted)',
        lineHeight: 1.7,
        fontSize: '17px',
      }}>
        Mathematical Physics, Waterloo. I build things from scratch{' '}
        because abstractions feel like lying to myself.
      </p>
    </section>
  )
}
