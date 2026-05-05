'use client'

import { SectionLabel } from './About'

const projects = [
  {
    name: 'OpenCV',
    description: 'A collection of computer vision projects built with OpenCV and TensorFlow. The highlight is a Siamese neural network for one-shot face verification. It compares image pairs to confirm identity without ever needing to retrain when new people are added. Also includes a text scanner.',
    github: 'https://github.com/kiazh/OpenCVProj',
    year: '2026',
    status: 'ongoing',
  },
  {
    name: 'MLscratch',
    description: 'Machine learning library written in C, from scratch. No abstractions, just math and memory.',
    github: 'https://github.com/kiazh/MLscratch',
    year: '2025',
    status: null,
  },
  {
    name: 'AES-128',
    description: 'AES encryption implemented from first principles in Go. C port in progress.',
    github: 'https://github.com/kiazh/AES-128',
    year: '2025',
    status: null,
  },
  {
    name: 'Esp32Network',
    description: 'Embedded ML pipeline for NRF24 link quality classification on an ESP32, built with AEL.',
    github: 'https://github.com/kiazh/Esp32Network',
    year: '2024',
    status: null,
  },
]

export function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-label-wrapper">
        <SectionLabel>Work</SectionLabel>
      </div>
      <div className="work-section-inner">
        <div className="work-grid">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="work-link"
            >
              <div className="work-card">
                <div className="work-header">
                  <span className="work-name">{p.name}</span>
                  <span className="work-year">{p.year}</span>
                  {p.status && (
                    <span className="work-status">{p.status}</span>
                  )}
                </div>
                <p className="work-description">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
