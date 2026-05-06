export function Hero() {
  return (
    <section style={{
      paddingTop: '88px',
      paddingBottom: '52px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* large ghost 影 — seen before understood */}
      <span
        aria-hidden="true"
        lang="ja"
        style={{
          position: 'absolute',
          top: '-16px',
          right: '-16px',
          fontSize: 'clamp(9rem, 24vw, 17rem)',
          fontWeight: 400,
          lineHeight: 1,
          color: 'var(--accent)',
          opacity: 0.13,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        影
      </span>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontSize: 'clamp(3.2rem, 7vw, 5.6rem)',
          fontWeight: 600,
          lineHeight: 1.04,
          letterSpacing: '-0.02em',
          color: 'var(--fg)',
          marginBottom: '28px',
        }}>
          Kiarad
        </h1>
        <p style={{
          color: 'var(--muted)',
          lineHeight: 1.72,
          fontSize: '15px',
          maxWidth: '400px',
        }}>
          Mathematical Physics, University of Waterloo.
          <br />
          Systems programming, machine learning, low-level development.
        </p>
      </div>
    </section>
  )
}
