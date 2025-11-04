// ============================================
// FILE: src/App.jsx
// ============================================
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (type, e) => {
    e.preventDefault()
    setActiveModal(type)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal')) {
        closeModal()
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Hero openModal={openModal} />
      <CustomerSection />
      <SustainabilitySection />
      <StatsSection />
      <MerchantSection />
      <FooterCTA openModal={openModal} />
      
      <Modal 
        isOpen={activeModal === 'customer'} 
        onClose={closeModal}
        type="customer"
        icon="🛍️"
        title="Coming Soon!"
        message="We're crafting an amazing shopping experience just for you. Get ready to discover the best local fashion at your fingertips."
        tagline="✨ You're Just One Gate Away From Style ✨"
      />
      <Modal 
        isOpen={activeModal === 'merchant'} 
        onClose={closeModal}
        type="merchant"
        icon="🚀"
        title="Coming Soon!"
        message="We're building powerful tools to help your business thrive. Get ready to reach thousands of customers who love shopping local."
        tagline="✨ You're Just One Gate Away From Growth ✨"
      />
      <Modal 
        isOpen={activeModal === 'general'} 
        onClose={closeModal}
        type="general"
        icon="🌟"
        title="Exciting Things Coming!"
        message="OneGate is launching soon. Be part of the sustainable fashion revolution that's changing how we shop and support local businesses."
        tagline="✨ You're Just One Gate Away From The Future ✨"
      />
    </div>
  )
}

// Navigation Component
function Navigation() {
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">OneGate</div>
        <div className="nav-links">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#customer" onClick={(e) => scrollToSection(e, 'customer')}>For Customers</a>
          <a href="#merchant" onClick={(e) => scrollToSection(e, 'merchant')}>For Merchants</a>
        </div>
      </div>
    </nav>
  )
}

// Hero Component
function Hero({ openModal }) {
  return (
    <section className="hero" id="home">
      <div className="leaves">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="leaf">🍃</div>
        ))}
      </div>
      <div className="hero-content">
        <div className="sustainability-badge">
          <span>🌱</span>
          <span>Shop Sustainable • Support Local</span>
        </div>
        <h1>OneGate</h1>
        <p className="tagline">You're Just One Gate Away From Fashion Forward</p>
        <p>Discover unique styles from neighborhood boutiques while reducing your carbon footprint</p>
        <div className="cta-buttons">
          <a href="#" className="btn btn-primary" onClick={(e) => openModal('customer', e)}>
            Start Shopping
          </a>
          <a href="#" className="btn btn-secondary" onClick={(e) => openModal('merchant', e)}>
            Join as Merchant
          </a>
        </div>
      </div>
    </section>
  )
}

// Customer Section Component
function CustomerSection() {
  const features = [
    {
      icon: '🎨',
      title: 'Unique Finds',
      description: 'Discover one-of-a-kind pieces from local boutiques. Support small businesses and reduce mass production waste while staying stylish.'
    },
    {
      icon: '🚴',
      title: 'Eco-Friendly Delivery',
      description: 'Local deliveries mean shorter distances and lower emissions. Get your items fast while keeping our planet green.'
    },
    {
      icon: '♻️',
      title: 'Circular Fashion',
      description: 'Quality over quantity. Shop from stores that value craftsmanship and longevity, reducing fashion\'s environmental impact.'
    }
  ]

  return (
    <section className="section customer-section" id="customer">
      <h2 className="section-title">Shop Local, Shop Consciously</h2>
      <p className="section-subtitle">One Gate to endless sustainable style possibilities</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

// Sustainability Section Component
function SustainabilitySection() {
  const impacts = [
    { icon: '🌍', title: '80% Less Emissions', description: 'Compared to traditional online shopping' },
    { icon: '🏪', title: 'Local First', description: 'Strengthen community economies' },
    { icon: '📦', title: 'Minimal Packaging', description: 'Reduce waste with local pickup' },
    { icon: '🌱', title: 'Ethical Choices', description: 'Curated sustainable brands' }
  ]

  return (
    <section className="sustainability-section">
      <h2 className="section-title">Our Impact Together</h2>
      <p className="section-subtitle">Every purchase makes a difference</p>
      <div className="impact-grid">
        {impacts.map((impact, index) => (
          <ImpactCard key={index} {...impact} />
        ))}
      </div>
    </section>
  )
}

// Stats Section Component
function StatsSection() {
  const stats = [
    { number: '500+', label: 'Local Stores' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '2hrs', label: 'Avg Delivery Time' }
  ]

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Merchant Section Component
function MerchantSection() {
  const features = [
    {
      icon: '📈',
      title: 'Expand Your Reach',
      description: 'Connect with customers who value local, sustainable shopping. Showcase your inventory to an engaged, purpose-driven audience.'
    },
    {
      icon: '🌿',
      title: 'Zero Extra Footprint',
      description: 'No additional stores or warehouses needed. Grow your business while maintaining your environmental commitments.'
    },
    {
      icon: '💰',
      title: 'Boost Revenue',
      description: 'Increase sales with zero overhead. Keep your profit margins while we handle the platform, marketing, and customer acquisition.'
    }
  ]

  return (
    <section className="section merchant-section" id="merchant">
      <h2 className="section-title">Grow Your Business Sustainably</h2>
      <p className="section-subtitle">You're just One Gate away from success</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

// Footer CTA Component
function FooterCTA({ openModal }) {
  return (
    <section className="footer-cta">
      <h2>Join the Sustainable Fashion Movement</h2>
      <p className="section-subtitle">Step through OneGate to a greener future</p>
      <div className="cta-buttons">
        <a href="#" className="btn btn-primary" onClick={(e) => openModal('general', e)}>
          Get Started Today
        </a>
      </div>
    </section>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <span className="feature-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Impact Card Component
function ImpactCard({ icon, title, description }) {
  return (
    <div className="impact-card">
      <div className="impact-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Modal Component
function Modal({ isOpen, onClose, type, icon, title, message, tagline }) {
  if (!isOpen) return null

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-icon">{icon}</div>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="gate-tagline">{tagline}</div>
      </div>
    </div>
  )
}

export default App