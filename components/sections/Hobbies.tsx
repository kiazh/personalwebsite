const hobbies = [
  {
    name: 'Hobby One',
    description: 'Add your description here.',
  },
  {
    name: 'Hobby Two',
    description: 'Add your description here.',
  },
  {
    name: 'Hobby Three',
    description: 'Add your description here.',
  },
  {
    name: 'Hobby Four',
    description: 'Add your description here.',
  },
]

export function Hobbies() {
  return (
    <section id="hobbies" className="py-16 border-t border-[var(--border)]">
      <h2
        className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-8"
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        Hobbies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {hobbies.map((hobby) => (
          <div key={hobby.name} className="space-y-1.5">
            <h3
              className="font-medium text-[var(--foreground)] text-sm"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {hobby.name}
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
