import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useState } from 'react'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (id) => {
    const el = document.getElementById('section-' + id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(id)
  }

  return (
    <div className="bg-navy-950 min-h-screen text-snow overflow-x-hidden">
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}
