import { SectionLabel } from './About'

const items = [
  {
    label: 'Reading',
    text: 'Vagabond, Berserk, Blame!, Kokou no Hito. Add what you actually think about them.',
  },
  {
    label: 'Anime',
    text: 'Evangelion, Steins;Gate, Made in Abyss. The kind that stays with you.',
  },
  {
    label: 'Physics',
    text: 'Add what you find interesting here. What are you studying?',
  },
  {
    label: 'Destiny 2',
    text: 'Add your take. What draws you to it.',
  },
]

export function Hobbies() {
  return (
    <section id="hobbies" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <SectionLabel>Outside work</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '480px' }}>
        {items.map((item) => (
          <div key={item.label} style={{ display: 'flex', gap: '32px' }}>
            <span style={{
              color: 'var(--fg)',
              fontSize: '15px',
              minWidth: '80px',
              flexShrink: 0,
              fontWeight: 500,
              paddingTop: '1px',
            }}>
              {item.label}
            </span>
            <span style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7 }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
