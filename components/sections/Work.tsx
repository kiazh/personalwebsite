import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Project One',
    description: 'Add your project description here. What it does, what problem it solves, what stack you used.',
    github: 'https://github.com/yourusername/project-one',
    tags: ['React', 'TypeScript'],
  },
  {
    name: 'Project Two',
    description: 'Add your project description here. What it does, what problem it solves, what stack you used.',
    github: 'https://github.com/yourusername/project-two',
    tags: ['Python', 'FastAPI'],
  },
  {
    name: 'Project Three',
    description: 'Add your project description here. What it does, what problem it solves, what stack you used.',
    github: 'https://github.com/yourusername/project-three',
    tags: ['Next.js', 'Tailwind'],
  },
]

export function Work() {
  return (
    <section id="work" className="py-16 border-t border-[var(--border)]">
      <h2
        className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-8"
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        Work
      </h2>
      <div className="space-y-px">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-5 border-b border-[var(--border)] hover:bg-[var(--card)] -mx-4 px-4 rounded-lg transition-colors duration-150 cursor-pointer"
          >
            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="flex items-center gap-2">
                <span
                  className="font-medium text-[var(--foreground)] group-hover:underline underline-offset-4"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  {project.name}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0"
                />
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-[var(--border)] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
