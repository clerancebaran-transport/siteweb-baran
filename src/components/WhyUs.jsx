import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Shield, Zap, Users } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

const icons = [Award, Shield, Zap, Users]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = translations[lang].whyUs

  return (
    <section
      id="why-us"
      style={{
        padding: 'clamp(48px, 8vw, 96px) 0',
        backgroundColor: '#0F2742',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', right: 0, top: 0,
        width: '400px', height: '400px',
        background: 'radial-gradient(circle at top right, rgba(46,91,122,0.3), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: 0, bottom: 0,
        width: '300px', height: '300px',
        background: 'radial-gradient(circle at bottom left, rgba(197,164,109,0.05), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03, pointerEvents: 'none' }}>
        <defs>
          <pattern id="wgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wgrid)" />
      </svg>

      <div ref={ref} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ width: '32px', height: '1px', backgroundColor: '#C5A46D' }} />
              <span style={{
                color: '#C5A46D', fontSize: '11px', fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase',
              }}>
                {t.label}
              </span>
            </div>

            <h2 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              {t.h2a}<br />
              <span style={{ color: '#C5A46D' }}>{t.h2b}</span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '15px',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.9,
              marginBottom: '40px',
              maxWidth: '440px',
            }}>
              {t.text}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255,255,255,0.08)' }} />
              <span style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '10px',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>
                {t.certified}
              </span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255,255,255,0.08)' }} />
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '16px' }}>
            {t.features.map((feat, i) => {
              const Icon = icons[i]
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '28px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(197,164,109,0.35)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                >
                  <div style={{
                    width: '40px', height: '40px',
                    backgroundColor: 'rgba(197,164,109,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                    <Icon size={18} style={{ color: '#C5A46D' }} />
                  </div>
                  <h3 style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 800,
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}>
                    {feat.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.8,
                  }}>
                    {feat.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
