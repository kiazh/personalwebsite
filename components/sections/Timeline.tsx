import { SectionLabel } from './About'

const events = [
  {
    year: '2026',
    title: 'C-compiler',
    description: 'Writing a compiler. Learning what lives between source code and silicon.',
    ongoing: true,
  },
  {
    year: '2025',
    title: 'Waterloo',
    description: 'Started Mathematical Physics. Picked the degree that doesn\'t let you skip the hard parts.',
    ongoing: false,
  },
  {
    year: '2025',
    title: 'MLscratch',
    description: 'Machine learning library in C. More about understanding than shipping.',
    ongoing: false,
  },
  {
    year: '2025',
    title: 'AES-128',
    description: 'Implemented AES from the spec in Go. Then started a C port because once wasn\'t enough.',
    ongoing: false,
  },
  {
    year: '2024',
    title: 'Esp32Network',
    description: 'Embedded ML for NRF24 link quality classification on an ESP32.',
    ongoing: false,
  },
]

export function Timeline() {
  return (
    <section id="timeline" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <SectionLabel>Timeline</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {events.map((event, i) => (
          <div key={i} style={{ display: 'flex', gap: '32px' }}>
            <span style={{
              color: 'var(--muted)',
              fontSize: '13px',
              minWidth: '36px',
              flexShrink: 0,
              paddingTop: '2px',
              fontVariantNumeric: 'tabular-nums',
            }}>
              {event.year}
            </span>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '5px' }}>
                <span style={{ color: 'var(--fg)', fontSize: '15px', fontWeight: 500 }}>
                  {event.title}
                </span>
                {event.ongoing && (
                  <span style={{ color: 'var(--muted)', fontSize: '12px', fontStyle: 'italic' }}>
                    ongoing
                  </span>
                )}
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7, maxWidth: '420px' }}>
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
