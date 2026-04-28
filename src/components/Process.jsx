import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Document Collection',
    desc: 'Collection and verification of all commercial documents: invoices, packing lists, bills of lading, certificates of origin.',
  },
  {
    num: '02',
    title: 'Tariff Classification',
    desc: 'Precise determination of customs codes (HS/CN8), calculation of applicable duties and taxes in line with current trade agreements.',
  },
  {
    num: '03',
    title: 'Customs Declaration',
    desc: 'Preparation and submission of the customs declaration to the competent authorities. Real-time tracking at every stage of processing.',
  },
  {
    num: '04',
    title: 'Clearance & Release',
    desc: 'Obtaining release authorisation after customs approval. Management of physical and documentary checks. Payment of duties and taxes.',
  },
  {
    num: '05',
    title: 'Coordinated Delivery',
    desc: 'Coordination with carriers for final delivery. Full file archiving and detailed client reporting upon completion.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" style={{ padding: '96px 0', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '72px' }}>
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
              Our Method
            </span>
            <span style={{ width: '32px', height: '1px', backgroundColor: '#C5A46D' }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0F2742',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Clearance Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '15px',
              color: 'rgba(43,49,55,0.6)',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            A structured 5-step approach to guarantee compliance
            and speed for all your customs operations.
          </motion.p>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'flex-start',
                marginBottom: i < steps.length - 1 ? '0' : '0',
                padding: '32px 0',
                borderBottom: i < steps.length - 1 ? '1px solid #DCEAF4' : 'none',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              }}
            >
              {/* Number */}
              <div style={{
                flexShrink: 0,
                width: '72px',
                height: '72px',
                backgroundColor: '#0F2742',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  fontSize: '14px',
                  color: '#C5A46D',
                  letterSpacing: '0.05em',
                }}>
                  {step.num}
                </span>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-32px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1px',
                    height: '32px',
                    backgroundColor: '#DCEAF4',
                  }} />
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingTop: '16px' }}>
                <h3 style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  fontSize: '14px',
                  color: '#0F2742',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '10px',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(43,49,55,0.6)',
                  lineHeight: 1.8,
                  maxWidth: '520px',
                }}>
                  {step.desc}
                </p>
              </div>

              {/* Spacer for alternating layout on desktop */}
              <div style={{ flex: 1 }} className="process-spacer" />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .process-spacer { display: none; }
        }
      `}</style>
    </section>
  )
}
