'use client'

const projects = [
  {
    name: 'Project One',
    description: 'What it does and why you built it.',
    github: 'https://github.com/yourusername/project-one',
    year: '2025',
  },
  {
    name: 'Project Two',
    description: 'What it does and why you built it.',
    github: 'https://github.com/yourusername/project-two',
    year: '2025',
  },
  {
    name: 'Project Three',
    description: 'What it does and why you built it.',
    github: 'https://github.com/yourusername/project-three',
    year: '2024',
  },
]

export function Work() {
  return (
    <section id="work" className="py-16">
      <p className="text-sm font-medium mb-6" style={{ color: 'var(--muted)', fontFamily: 'var(--font-archivo), sans-serif' }}>
        Work
      </p>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.name} className="group">
            <div className="flex items-baseline gap-3 mb-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors duration-150 cursor-pointer"
                style={{
                  color: 'var(--fg)',
                  fontFamily: 'var(--font-archivo), sans-serif',
                  textDecorationLine: 'underline',
                  textUnderlineOffset: '4px',
                  textDecorationColor: 'transparent',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'var(--fg)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'transparent'
                }}
              >
                {project.name}
              </a>
              <span className="text-xs" style={{ color: 'var(--muted)' }}>{project.year}</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
