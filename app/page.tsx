import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { SpotifyNowPlaying } from '@/components/SpotifyNowPlaying'
import { About } from '@/components/sections/About'
import { Work } from '@/components/sections/Work'
import { Timeline } from '@/components/sections/Timeline'
import { Hobbies } from '@/components/sections/Hobbies'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <SpotifyNowPlaying />
      <About />
      <Work />
      <Timeline />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  )
}
