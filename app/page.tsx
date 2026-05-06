import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Work } from '@/components/sections/Work'
import { Hobbies } from '@/components/sections/Hobbies'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Hobbies />
      <Footer />
    </main>
  )
}
