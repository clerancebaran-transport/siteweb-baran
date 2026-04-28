import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, CheckCircle } from 'lucide-react'

const credentials = [
  'HEC — Fundamentals of Customs & Excise Legislation',
  'Licensed Customs Broker, Belgium',
  'Specialist in China–Belgium import operations',
  'Expert in e-commerce cross-border logistics',
]

export default function Founder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="founder"
      style={{
        padding: '96px 0',
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background accent */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '40%', height: '100%',
        background: 'linear-gradient(to left, #F8FAFC, transparent)',
        pointerEvents: 'none',
      }} />

      <div ref={ref} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}
        >
          <span style={{ width: '32px', height: '1px', backgroundColor: '#C5A46D' }} />
          <span style={{
            color: '#C5A46D', fontSize: '11px', fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase',
          }}>
            About the Founder
          </span>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}>

          {/* Left — avatar + name */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px' }}
          >
            {/* Avatar */}
            <div style={{
              width: '120px', height: '120px',
              backgroundColor: '#0F2742',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: '2.2rem',
                color: '#C5A46D',
                letterSpacing: '-0.02em',
              }}>
                BC
              </span>
              {/* Gold corner accent */}
              <div style={{
                position: 'absolute',
                bottom: '-6px', right: '-6px',
                width: '24px', height: '24px',
                backgroundColor: '#C5A46D',
              }} />
            </div>

            {/* Name & title */}
            <div>
              <h3 style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: '1.6rem',
                color: '#0F2742',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                marginBottom: '6px',
              }}>
                Baran Çiçek
              </h3>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                color: '#C5A46D',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              }}>
                Managing Director — Licensed Customs Broker
              </p>
            </div>

            {/* Diploma badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 20px',
              backgroundColor: '#0F2742',
              borderLeft: '3px solid #C5A46D',
            }}>
              <GraduationCap size={20} style={{ color: '#C5A46D', flexShrink: 0 }} />
              <div>
                <div style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '10px',
                  color: '#C5A46D',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: '3px',
                }}>HEC Certified</div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.75)',
                }}>
                  Fundamentals of Customs & Excise Legislation
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — bio + credentials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h2 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: '#0F2742',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '20px',
            }}>
              A Personal,<br />
              <span style={{ color: '#C5A46D' }}>Expert Service</span>
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: 'rgba(43,49,55,0.75)',
              lineHeight: 1.9,
              marginBottom: '16px',
              maxWidth: '480px',
            }}>
              Clearance Baran is a solo operation run personally by Baran Çiçek.
              When you contact us, you deal directly with a qualified expert —
              no middlemen, no call centres.
            </p>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: 'rgba(43,49,55,0.75)',
              lineHeight: 1.9,
              marginBottom: '36px',
              maxWidth: '480px',
            }}>
              With formal training from HEC and hands-on experience in
              Belgian customs procedures, Baran brings rigour and accountability
              to every customs file — whether it's a single e-commerce parcel
              or a large container from China.
            </p>

            {/* Credentials list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {credentials.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle size={16} style={{ color: '#C5A46D', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(43,49,55,0.8)',
                    lineHeight: 1.6,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Office location */}
            <div style={{
              marginTop: '36px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              paddingTop: '24px',
              borderTop: '1px solid #DCEAF4',
            }}>
              <Briefcase size={15} style={{ color: '#2E5B7A', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(43,49,55,0.6)',
              }}>
                Rue Delvaux 21, 4340 Awans, Belgium
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
