import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Our Approach', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#founder' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s ease',
        backgroundColor: scrolled ? '#0F2742' : 'transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        paddingTop: scrolled ? '12px' : '20px',
        paddingBottom: scrolled ? '12px' : '20px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="Clearance Baran"
            onError={e => { e.target.src = '/logo.svg' }}
            style={{
              height: '60px',
              width: 'auto',
              display: 'block',
              filter: 'brightness(0) invert(1)',
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                fontSize: '12px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.target.style.color = '#C5A46D'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden-mobile"
          style={{
            backgroundColor: '#C5A46D',
            color: 'white',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '12px 24px',
            textDecoration: 'none',
            transition: 'background-color 0.2s ease',
            cursor: 'pointer',
            display: 'inline-block',
          }}
          onMouseEnter={e => e.target.style.backgroundColor = '#b8935c'}
          onMouseLeave={e => e.target.style.backgroundColor = '#C5A46D'}
        >
          Free Quote
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '8px',
          }}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: '#0F2742',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  backgroundColor: '#C5A46D',
                  color: 'white',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '14px 24px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) { .show-mobile { display: none !important; } }
        @media (max-width: 1023px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </header>
  )
}
