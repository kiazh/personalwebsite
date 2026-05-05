export function About() {
  return (
    <section id="about" className="py-16">
      <p className="text-sm font-medium mb-6" style={{ color: 'var(--muted)', fontFamily: 'var(--font-archivo), sans-serif' }}>
        About
      </p>
      <div className="max-w-lg space-y-4 leading-relaxed" style={{ color: 'var(--fg)' }}>
        <p>
          Write something real here. Not a resume summary — something a person would actually say.
          What you care about, what you&apos;re trying to do.
        </p>
        <p>
          Second thought. Could be where you went to school, what you were obsessed with growing up,
          or what you&apos;re figuring out right now.
        </p>
      </div>
    </section>
  )
}
