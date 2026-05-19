import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer style={{ backgroundColor: '#0A1E36', color: 'white' }}>
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, #C5A46D 50%, transparent 100%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 24px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
        }}>

          <div style={{ gridColumn: 'span 1' }}>
            <img
              src="/logo.png"
              alt="Clearance Baran"
              onError={e => { e.target.src = '/logo.svg' }}
              style={{
                height: '160px',
                width: 'auto',
                display: 'block',
                marginBottom: '24px',
                filter: 'brightness(0) invert(1)',
              }}
            />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.9,
              maxWidth: '260px',
              marginBottom: '24px',
            }}>
              {t.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C5A46D' }} />
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '10px',
                color: '#C5A46D',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              }}>
                {t.badge}
              </span>
            </div>
          </div>

          {Object.entries(t.categories).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                fontSize: '10px',
                color: '#C5A46D',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                marginBottom: '20px',
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => {
                  const label = typeof link === 'string' ? link : link.label
                  const href = typeof link === 'string' ? '#' : link.href
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          color: 'rgba(255,255,255,0.65)',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => e.target.style.color = 'white'}
                        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
                      >
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.25)',
          }}>
            © {new Date().getFullYear()} Clearance Baran. {t.copyright}
          </p>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '10px',
            color: 'rgba(255,255,255,0.15)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            {t.bottomBadge}
          </p>
        </div>
      </div>
    </footer>
  )
}
