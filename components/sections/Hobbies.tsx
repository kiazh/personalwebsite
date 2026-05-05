const hobbies = [
  { name: 'Hobby One', description: 'Your description here.' },
  { name: 'Hobby Two', description: 'Your description here.' },
  { name: 'Hobby Three', description: 'Your description here.' },
  { name: 'Hobby Four', description: 'Your description here.' },
]

export function Hobbies() {
  return (
    <section id="hobbies" className="py-16">
      <p className="text-sm font-medium mb-6" style={{ color: 'var(--muted)', fontFamily: 'var(--font-archivo), sans-serif' }}>
        Outside work
      </p>
      <div className="space-y-5 max-w-lg">
        {hobbies.map((h) => (
          <div key={h.name} className="flex gap-6">
            <span
              className="text-sm shrink-0 pt-px"
              style={{ color: 'var(--fg)', fontFamily: 'var(--font-archivo), sans-serif', minWidth: '110px' }}
            >
              {h.name}
            </span>
            <span className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {h.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
