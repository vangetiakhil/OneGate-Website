import { useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Hero from './components/Sections/Hero'
import Services from './components/Sections/Services'
import About from './components/Sections/About'
import Contact from './components/Sections/Contact'
import Modal from './components/UI/Modal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero onCtaClick={() => setIsModalOpen(true)} />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Started"
      >
        <p>Thank you for your interest! We are currently accepting orders via email.</p>
        <p>Please send your design files and requirements to <strong>business@onegate.in</strong></p>
        <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
          <button
            className="btn btn-primary"
            onClick={() => window.location.href = 'mailto:business@onegate.in'}
          >
            Send Email
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default App