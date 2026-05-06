'use client'

import { SectionLabel } from './About'

const projects = [
  {
    name: 'Facial Recognition',
    description: 'A face verification system built on a Siamese network. It learns to compare faces rather than memorize them, so adding someone new never requires retraining. Includes a document scanner built alongside it while getting familiar with TensorFlow and OpenCV.',
    github: 'https://github.com/kiazh/OpenCVProj',
    year: '2026',
    status: null,
  },
  {
    name: 'MLscratch',
    description: "Machine learning in C, no libraries, just linear algbera and Calculus. Didn't want to just call torch.nn. Wanted to know what was actually happening. One of my favourite projects so far.",
    github: 'https://github.com/kiazh/MLscratch',
    year: '2026',
    status: null,
  },
  {
    name: 'AES-128',
    description: 'AES-128 in Go from the FIPS 197 spec. S-box is a hardcoded table; MixColumns computes GF(2⁸) field arithmetic at runtime through gmul instead of looking it up. Passes the test vector. C port coming soon.',
    github: 'https://github.com/kiazh/AES-128',
    year: '2026',
    status: null,
  },
  {
    name: 'Esp32Network',
    description: 'Runs a scikit-learn decision tree directly on an ESP32 to classify NRF24 wireless link quality as normal, weak, or interference. The model compiles down to a single C header with zero runtime dependencies.',
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
