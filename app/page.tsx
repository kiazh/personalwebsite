import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Work } from '@/components/sections/Work'
import { Hobbies } from '@/components/sections/Hobbies'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6">
        <Hero />
        <About />
        <Work />
        <Hobbies />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
