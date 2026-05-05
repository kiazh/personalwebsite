export function About() {
  return (
    <section id="about" className="py-16 border-t border-[var(--border)]">
      <h2
        className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-8"
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        About
      </h2>
      <div className="space-y-4 text-[var(--foreground)] leading-relaxed max-w-xl">
        <p>
          Add your bio here. Talk about what you do, what you&apos;re interested in,
          and what drives you.
        </p>
        <p>
          Second paragraph — background, experience, or anything else you want
          people to know.
        </p>
      </div>
    </section>
  )
}
