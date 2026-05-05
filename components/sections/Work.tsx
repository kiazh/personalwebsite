'use client'

import { SectionLabel } from './About'

const projects = [
  {
    name: 'OpenCV',
    description: 'A collection of computer vision projects built with OpenCV and TensorFlow. The highlight is a Siamese neural network for one-shot face verification. It compares image pairs to confirm identity without ever needing to retrain when new people are added. Also includes a text scanner.',
    github: 'https://github.com/kiazh/OpenCVProj',
    year: '2026',
    status: null,
  },
  {
    name: 'MLscratch',
    description: 'Wanted to understand machine learning beyond the usual frameworks, so I built a neural network library from scratch in C — easily one of my favourite projects.',
    github: 'https://github.com/kiazh/MLscratch',
    year: '2026',
    status: null,
  },
  {
    name: 'AES-128',
    description: 'AES-128 implemented from scratch in Go without external libraries — including GF(2⁸) field arithmetic via the Russian Peasant algorithm, runtime MixColumns, full 10-round key schedule, and both encrypt/decrypt paths. Passes the FIPS 197 Appendix B test vector. C port in progress.',
    github: 'https://github.com/kiazh/AES-128',
    year: '2026',
    status: null,
  },
  {
    name: 'Esp32Network',
    description: 'ESP32 pipeline that reads NRF24L01 packets, extracts link features over a sliding window, and classifies the connection as normal, weak, or interference using a decision tree exported as a C header — no runtime dependencies on device.',
    github: 'https://github.com/kiazh/Esp32Network',
    year: '2024',
    status: null,
  },
]

export function Work() {
  return (
    <div id="work">
      <div className="work-bleed">
        <div className="work-section-inner">
          <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Work</SectionLabel>
          </div>
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
      </div>
    </div>
  )
}
