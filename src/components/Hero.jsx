import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

function MaritimeGrid() {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08, pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="smallgrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
        <pattern id="biggrid" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect width="200" height="200" fill="url(#smallgrid)" />
          <path d="M 200 0 L 0 0 0 200" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#biggrid)" />
    </svg>
  )
}

function GlowOrbs() {
  return (
    <>
      <div style={{
        position: 'absolute', top: '15%', left: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(46,91,122,0.35) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(197,164,109,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
    </>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: [
          'linear-gradient(to bottom, rgba(8,20,38,0.78) 0%, rgba(15,39,66,0.72) 50%, rgba(10,25,48,0.85) 100%)',
          "url('/cargo.jpg')",
        ].join(', '),
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0F2742',
      }}
    >
      <MaritimeGrid />
      <GlowOrbs />

      {/* Rotating decorative rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', bottom: '-130px', right: '-130px',
          width: '550px', height: '550px', borderRadius: '50%',
          border: '1px solid rgba(197,164,109,0.07)', pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', bottom: '-70px', right: '-70px',
          width: '380px', height: '380px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: '900px', margin: '0 auto',
        padding: '100px 24px 60px',
        textAlign: 'center',
      }}>

        {/* Badge */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}
        >
          <span style={{ width: '32px', height: '1px', backgroundColor: '#C5A46D' }} />
          <span style={{
            color: '#C5A46D', fontSize: '11px',
            fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
            letterSpacing: '0.35em', textTransform: 'uppercase',
          }}>
            Licensed Customs Broker — Belgium
          </span>
          <span style={{ width: '32px', height: '1px', backgroundColor: '#C5A46D' }} />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
          style={{
            fontFamily: 'Montserrat, sans-serif', fontWeight: 900,
            fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em', lineHeight: 1,
            marginBottom: '24px',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}
        >
          Your Expert in
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #C5A46D, #e8c98e)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Customs Clearance
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 400,
            lineHeight: 1.8, maxWidth: '600px',
            margin: '0 auto 48px',
            textShadow: '0 1px 8px rgba(0,0,0,0.4)',
          }}
        >
          Clearance Baran handles your import/export operations with precision,
          compliance and speed. E-commerce, China–Belgium trade, sea, air & road —
          end-to-end customs expertise at your service.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.8}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#C5A46D', color: 'white',
              fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
              fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '16px 32px', textDecoration: 'none',
              transition: 'background-color 0.3s ease', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(197,164,109,0.35)',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935c'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C5A46D'}
          >
            Get a Free Quote <ArrowRight size={14} />
          </a>
          <a
            href="#services"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              border: '1px solid rgba(255,255,255,0.4)',
              color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
              fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '16px 32px', textDecoration: 'none',
              transition: 'all 0.3s ease', cursor: 'pointer',
              backdropFilter: 'blur(4px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Our Services
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            marginTop: '72px',
            display: 'flex', justifyContent: 'center',
            gap: '0', flexWrap: 'wrap',
          }}
        >
          {[
            { num: '500+', label: 'Clients' },
            { num: '15 yrs', label: 'Experience' },
            { num: '98%', label: 'Compliance' },
          ].map((s, i) => (
            <div key={s.label} style={{
              textAlign: 'center', padding: '0 32px',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none',
            }}>
              <div style={{
                fontSize: '1.7rem', fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900, color: 'white', lineHeight: 1,
                marginBottom: '6px', textShadow: '0 2px 10px rgba(0,0,0,0.4)',
              }}>{s.num}</div>
              <div style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase', letterSpacing: '0.2em',
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '28px',
          left: '50%', transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  )
}
