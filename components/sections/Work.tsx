'use client'

import { SectionLabel } from './About'

const projects = [
  {
    name: 'OpenCV',
    description: 'Wanted to work with cameras and learn TensorFlow. Built a face verifier on a Siamese network; it compares embeddings instead of memorizing faces, so you never retrain when someone new shows up. Also a document scanner.',
    github: 'https://github.com/kiazh/OpenCVProj',
    year: '2026',
    status: null,
  },
  {
    name: 'MLscratch',
    description: "Machine learning in C, no libraries. Didn't want to just call torch.nn. Wanted to know what was actually happening. One of my favourite things I've built.",
    github: 'https://github.com/kiazh/MLscratch',
    year: '2026',
    status: null,
  },
  {
    name: 'AES-128',
    description: 'AES-128 in Go from the FIPS 197 spec. No lookup tables; all the field arithmetic runs through GF(2⁸) multiplication at runtime. Passes the test vector. C port coming.',
    github: 'https://github.com/kiazh/AES-128',
    year: '2026',
    status: null,
  },
  {
    name: 'Esp32Network',
    description: 'Embedded ML on an ESP32. Classifies NRF24 link quality — normal, weak, or interference — using a decision tree compiled into a C header. No runtime dependencies, just the model living in the firmware.',
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
