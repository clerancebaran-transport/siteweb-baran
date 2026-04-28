const footerLinks = {
  Services: [
    'Customs Clearance',
    'Freight & Transport',
    'Express Delivery',
    'E-commerce Logistics',
    'Customs Consulting',
  ],
  Information: [
    'Our Approach',
    'Clearance Process',
    'Certifications',
    'Partners',
  ],
  Legal: [
    'Legal Notice',
    'Privacy Policy',
    'Terms & Conditions',
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A1E36', color: 'white' }}>
      {/* Gold top accent */}
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

          {/* Brand column */}
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
              Licensed customs broker based in Awans, Belgium.
              Your trusted partner for all customs and freight operations — e-commerce, China trade & beyond.
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
                Licensed Customs Broker — Belgium
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
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
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
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
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
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
            © {new Date().getFullYear()} Clearance Baran. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '10px',
            color: 'rgba(255,255,255,0.15)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Licensed Customs Broker — Awans, Belgium
          </p>
        </div>
      </div>
    </footer>
  )
}
