import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let startTime = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Satisfied Clients', sub: 'businesses supported' },
  { value: 15, suffix: ' yrs', label: 'Experience', sub: 'customs expertise' },
  { value: 98, suffix: '%', label: 'Compliance Rate', sub: 'files approved' },
  { value: 24, suffix: 'h', label: 'Average Turnaround', sub: 'file processing time' },
]

export default function Stats() {
  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#2E5B7A',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot pattern */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05, pointerEvents: 'none' }}>
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Gold horizontal lines */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px', background: 'linear-gradient(90deg, transparent, rgba(197,164,109,0.4), transparent)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '1px', background: 'linear-gradient(90deg, transparent, rgba(197,164,109,0.4), transparent)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '48px',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '11px',
                color: '#C5A46D',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '4px',
              }}>
                {stat.label}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.65)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
