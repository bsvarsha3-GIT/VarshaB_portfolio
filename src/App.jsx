import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Achievements from './sections/Achievements'
import Education from './sections/Education'

function App() {
  return (
    <main id="top" className="bg-[#050816] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
