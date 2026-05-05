'use client'

import { SectionLabel } from './About'

const MAX_DESCRIPTION_LENGTH = 120

function truncate(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength - 1) + '…'
}

const projects = [
  {
    name: 'OpenCV',
    description: 'A collection of computer vision projects built with OpenCV and TensorFlow. The highlight is a Siamese neural network for one-shot face verification . It compares image pairs to confirm identity without ever needing to retrain when new people are added. Also includes a text scanner  ',
    github: 'https://github.com/kiazh/OpenCVProj',
    year: '2026',
    status: 'ongoing',
    color: '#2E7D32', // Green for vision/processing
  },
  {
    name: 'MLscratch',
    description: 'Machine learning library written in C, from scratch. No abstractions, just math and memory.',
    github: 'https://github.com/kiazh/MLscratch',
    year: '2025',
    status: null,
    color: '#1565C0', // Blue for ML/math
  },
  {
    name: 'AES-128',
    description: 'AES encryption implemented from first principles in Go. C port in progress.',
    github: 'https://github.com/kiazh/AES-128',
    year: '2025',
    status: null,
    color: '#6B21A8', // Purple for encryption/security
  },
  {
    name: 'Esp32Network',
    description: 'Embedded ML pipeline for NRF24 link quality classification on an ESP32, built with AEL.',
    github: 'https://github.com/kiazh/Esp32Network',
    year: '2024',
    status: null,
    color: '#D97706', // Orange for embedded/hardware
  },
]

export function Work() {
  return (

    <section id="work" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <SectionLabel>Work</SectionLabel>
      <div className="work-grid">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              display: 'block',
            }}
          >
            <div className="work-card" style={{ padding: '48px' }}>
              <div className="work-content">
                <div className="work-header">
                  <span className="work-name">
                    {p.name}
                  </span>
                  <span className="work-year">{p.year}</span>
                  {p.status && (
                    <span className="work-status">
                      {p.status}
                    </span>
                  )}
                </div>

                <p className="work-description" style={{ fontSize: '17px', lineHeight: 1.8 }}>
                  {truncate(p.description, MAX_DESCRIPTION_LENGTH)}
                </p>

              </div>
            </div>
          </a>
        ))}
      </div>
    </section>

  )
}
