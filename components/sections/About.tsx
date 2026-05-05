export function About() {
  return (
    <section id="about" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <SectionLabel>About</SectionLabel>
      <div style={{ maxWidth: '480px', lineHeight: 1.8 }}>
        <p style={{ color: 'var(--fg)', marginBottom: '20px' }}>
          Write something real here. Not a resume summary. Something a person would actually say.
        </p>
        <p style={{ color: 'var(--fg)', marginBottom: '48px' }}>
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
          Interests
        </p>

        <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.75, marginBottom: '24px' }}>
          Write something about what draws you in. Manga, physics, embedded systems, Destiny 2.
          Not a list — what actually makes you stop and think.
        </p>

        {/* Drop an image into /public/about.jpg to show it here */}
        <img
          src="/about.jpg"
          alt=""
          style={{
            width: '100%',
            height: '280px',
            objectFit: 'cover',
            display: 'block',
            filter: 'grayscale(20%)',
          }}
        />
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
