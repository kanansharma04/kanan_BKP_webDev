import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import VolunteerForm from './components/VolunteerForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light'
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const initialTheme = savedTheme === 'auto' ? (prefersDark ? 'dark' : 'light') : savedTheme
    
    setDarkMode(initialTheme === 'dark')
    applyTheme(initialTheme === 'dark')
  }, [])

  const applyTheme = (isDark) => {
    const html = document.documentElement
    const body = document.body
    
    if (isDark) {
      html.setAttribute('data-bs-theme', 'dark')
      body.classList.add('bg-dark', 'text-light')
      body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
    } else {
      html.setAttribute('data-bs-theme', 'light')
      body.classList.remove('bg-dark', 'text-light')
      body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }
  }

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    applyTheme(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navigation 
        scrollToSection={scrollToSection} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <VolunteerForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
