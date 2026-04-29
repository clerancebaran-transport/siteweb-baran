import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

const contactInfo = [
  { Icon: MapPin, label: 'Address', value: 'Rue Delvaux 21, 4340 Awans, Belgium' },
  { Icon: Phone, label: 'Phone', value: '+32 488 08 01 14' },
  { Icon: Mail, label: 'Email', value: 'clerancebaran@gmail.com' },
  { Icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 8:00 AM – 6:00 PM' },
]

const inputStyle = {
  width: '100%',
  border: '1px solid #DCEAF4',
  backgroundColor: 'white',
  padding: '14px 16px',
  fontSize: '13px',
  fontFamily: 'Inter, sans-serif',
  color: '#2B3137',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontSize: '11px',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: '#0F2742',
  marginBottom: '8px',
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ nom: '', email: '', tel: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '93d1d333-1ff2-451c-88a8-ffe83d54dbde',
          subject: 'New Contact Request — Clearance Baran',
          from_name: form.nom,
          email: form.email,
          phone: form.tel,
          message: form.message,
        }),
      })
      const data = await response.json()
      if (data.success) {
        setSent(true)
        setForm({ nom: '', email: '', tel: '', message: '' })
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" style={{ padding: 'clamp(48px, 8vw, 96px) 0', backgroundColor: '#F8FAFC' }}>
      <div ref={ref} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
              Get In Touch
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
            Let's Talk About Your Shipment
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '15px',
              color: 'rgba(43,49,55,0.6)',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            Describe your need and our customs expert will get back to you within 24 business hours.
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
          gap: '48px',
        }}>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {sent ? (
              <div style={{
                backgroundColor: '#0F2742',
                padding: '64px 48px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '400px',
              }}>
                <CheckCircle size={48} style={{ color: '#C5A46D', marginBottom: '24px' }} />
                <h3 style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  fontSize: '16px',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}>
                  Message Sent
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}>
                  Thank you for your message.<br />We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '20px' }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.nom}
                      onChange={e => setForm({ ...form, nom: e.target.value })}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#2E5B7A'}
                      onBlur={e => e.target.style.borderColor = '#DCEAF4'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      placeholder="+32 XXX XX XX XX"
                      value={form.tel}
                      onChange={e => setForm({ ...form, tel: e.target.value })}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#2E5B7A'}
                      onBlur={e => e.target.style.borderColor = '#DCEAF4'}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Business Email</label>
                  <input
                    type="email"
                    required
                    placeholder="contact@your-company.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#2E5B7A'}
                    onBlur={e => e.target.style.borderColor = '#DCEAF4'}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Your Request</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your customs operation, type of goods, volume, origin..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#2E5B7A'}
                    onBlur={e => e.target.style.borderColor = '#DCEAF4'}
                  />
                </div>

                {error && (
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: '#c0392b',
                    textAlign: 'center',
                  }}>
                    Something went wrong. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    backgroundColor: sending ? '#2E5B7A' : '#0F2742',
                    color: 'white',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '18px 32px',
                    border: 'none',
                    cursor: sending ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.3s ease',
                    width: '100%',
                    opacity: sending ? 0.8 : 1,
                  }}
                  onMouseEnter={e => { if (!sending) e.target.style.backgroundColor = '#2E5B7A' }}
                  onMouseLeave={e => { if (!sending) e.target.style.backgroundColor = '#0F2742' }}
                >
                  {sending ? 'Sending...' : 'Send My Request'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {contactInfo.map(({ Icon, label, value }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '24px',
                  backgroundColor: 'white',
                  border: '1px solid #DCEAF4',
                }}
              >
                <div style={{
                  width: '40px', height: '40px',
                  backgroundColor: '#DCEAF4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={17} style={{ color: '#2E5B7A' }} />
                </div>
                <div>
                  <div style={{
                    fontSize: '10px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'rgba(43,49,55,0.4)',
                    marginBottom: '4px',
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    color: '#0F2742',
                  }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}

            {/* Engagement card */}
            <div style={{
              backgroundColor: '#0F2742',
              padding: '28px',
              marginTop: '8px',
            }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '10px',
                color: '#C5A46D',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '12px',
              }}>
                Our Commitment
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.9,
                fontStyle: 'italic',
              }}>
                "We handle every file with the precision of an expert
                and the responsiveness of a committed partner."
              </p>
              <div style={{
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '36px', height: '36px',
                  backgroundColor: 'rgba(197,164,109,0.15)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    color: '#C5A46D',
                  }}>CB</span>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '12px',
                    color: 'white',
                  }}>Clearance Baran</div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.35)',
                  }}>Licensed Customs Broker</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
