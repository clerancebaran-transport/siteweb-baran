import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Ship, Plane, Truck, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

const icons = [Ship, Truck, Plane, Globe]

function ServiceCard({ service, index, Icon }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{
        background: 'white',
        border: '1px solid #DCEAF4',
        padding: '36px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#C5A46D'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(15,39,66,0.12)'
        e.currentTarget.querySelector('.card-bar').style.transform = 'scaleX(1)'
        e.currentTarget.querySelector('.card-icon-bg').style.backgroundColor = '#0F2742'
        e.currentTarget.querySelector('.card-icon').style.color = '#C5A46D'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#DCEAF4'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.querySelector('.card-bar').style.transform = 'scaleX(0)'
        e.currentTarget.querySelector('.card-icon-bg').style.backgroundColor = '#DCEAF4'
        e.currentTarget.querySelector('.card-icon').style.color = '#2E5B7A'
      }}
    >
      <div
        className="card-bar"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          backgroundColor: '#C5A46D',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.3s ease',
        }}
      />

      <div style={{ marginBottom: '24px' }}>
        <div
          className="card-icon-bg"
          style={{
            width: '48px', height: '48px',
            backgroundColor: '#DCEAF4',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background-color 0.3s ease',
          }}
        >
          <Icon
            className="card-icon"
            size={20}
            style={{ color: '#2E5B7A', transition: 'color 0.3s ease' }}
          />
        </div>
      </div>

      <h3 style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 800,
        fontSize: '13px',
        color: '#0F2742',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        marginBottom: '12px',
      }}>
        {service.title}
      </h3>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        color: 'rgba(43,49,55,0.65)',
        lineHeight: 1.8,
        marginBottom: '20px',
      }}>
        {service.desc}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {service.items.map((item) => (
          <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '16px', height: '1px', backgroundColor: '#C5A46D', flexShrink: 0 }} />
            <span style={{ fontSize: '12px', color: 'rgba(43,49,55,0.55)', fontFamily: 'Inter, sans-serif' }}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const { lang } = useLanguage()
  const t = translations[lang].services

  return (
    <section id="services" style={{ padding: 'clamp(48px, 8vw, 96px) 0', backgroundColor: '#F8FAFC' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        <div ref={ref} style={{ textAlign: 'center', marginBottom: '64px' }}>
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
              {t.label}
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
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '16px', color: 'rgba(43,49,55,0.6)',
              fontFamily: 'Inter, sans-serif', maxWidth: '500px', margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(480px, 100%), 1fr))',
          gap: '24px',
        }}>
          {t.items.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} Icon={icons[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
