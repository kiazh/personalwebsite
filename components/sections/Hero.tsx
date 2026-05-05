export function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted)] font-medium tracking-wide uppercase">
          Available for work
        </p>
        <h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--foreground)] leading-[1.15]"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          Your Name
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-md leading-relaxed">
          Software engineer building things on the web. Based in [City].
        </p>
      </div>
    </section>
  )
}
