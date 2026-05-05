'use client'

import { SectionLabel } from './About'

const projects = [
  {
    name: 'OpenCVProj',
    description: 'Computer vision and TensorFlow projects. Object detection, image processing, and neural networks applied to real problems.',
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
            <div className="work-card">
              {/* Image placeholder */}
              <div className="work-image" style={{ background: p.color }}>
                {/* Simple geometric pattern based on project type */}
                <div className="work-pattern" style={{
                  background: (() => {
                    if (p.name === 'OpenCVProj') {
                      return 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                    }
                    if (p.name === 'MLscratch') {
                      return 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)'
                    }
                    if (p.name === 'AES-128') {
                      return 'linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%)'
                    }
                    return 'repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 16px)'
                  })(),
                }} />
                <span className="work-letter">
                  {p.name.charAt(0)}
                </span>
              </div>

              {/* Content */}
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
                <p className="work-description">
                  {p.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
