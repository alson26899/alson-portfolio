import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <main
      className="
        min-h-screen
        overflow-x-hidden
        bg-slate-200
        dark:bg-slate-950
        transition-colors duration-300
      "
    >

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Sections */}
      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Contact />

    </main>
  )
}