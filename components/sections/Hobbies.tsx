import { SectionLabel } from './About'

const interests = [
  {
    title: 'Reading',
    body: 'Vagabond, Berserk, Blame!, Kokou no Hito. Add what you actually think about them — not the titles, the feeling.',
  },
  {
    title: 'Anime',
    body: 'Evangelion, Steins;Gate, Made in Abyss. The kind that stays with you. Add your take.',
  },
  {
    title: 'Physics',
    body: 'Add what draws you in. What are you studying, what keeps pulling you back.',
  },
  {
    title: 'Games',
    body: 'Destiny 2. Add what draws you to it.',
  },
]

export function Hobbies() {
  return (
    <section id="interests" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <SectionLabel>Interests</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '480px' }}>
        {interests.map((item) => (
          <div key={item.title}>
            <p style={{
              color: 'var(--fg)',
              fontSize: '15px',
              fontWeight: 500,
              marginBottom: '8px',
            }}>
              {item.title}
            </p>
            <p style={{
              color: 'var(--muted)',
              fontSize: '15px',
              lineHeight: 1.75,
            }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
