export function Hero() {
  return (
    <section className="pt-24 pb-16">
      <h1
        className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.1] mb-6"
        style={{ fontFamily: 'var(--font-archivo), sans-serif', color: 'var(--fg)' }}
      >
        Your Name
      </h1>
      <p className="text-lg max-w-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
        I build software. Based in [City].{' '}
        Currently working on [what you&apos;re doing now].
      </p>
    </section>
  )
}
