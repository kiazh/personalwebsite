export function Hero() {
  return (
    <section style={{ paddingTop: '80px', paddingBottom: '56px' }}>
      <h1 style={{
        fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
        fontWeight: 500,
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
        color: 'var(--fg)',
        marginBottom: '28px',
      }}>
        Kiarad{' '}
        <span
          lang="ja"
          aria-hidden="true"
          style={{
            fontSize: '0.62em',
            color: 'var(--muted)',
            fontWeight: 400,
            letterSpacing: 0,
            verticalAlign: '0.1em',
          }}
        >
          影
        </span>
      </h1>
      <p style={{
        color: 'var(--muted)',
        lineHeight: 1.7,
        fontSize: '16px',
        maxWidth: '440px',
      }}>
        Mathematical Physics, University of Waterloo.
        <br />
        Systems programming, machine learning, low-level development.
      </p>
    </section>
  )
}
