import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const section = (title, children) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 800,
      fontSize: '15px',
      color: '#0F2742',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '12px',
      paddingBottom: '8px',
      borderBottom: '2px solid #C5A46D',
      display: 'inline-block',
    }}>{title}</h2>
    <div style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: 'rgba(43,49,55,0.8)',
      lineHeight: 1.9,
    }}>
      {children}
    </div>
  </div>
)

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{
        backgroundColor: '#0F2742',
        padding: '80px 24px 48px',
        textAlign: 'center',
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '1px', backgroundColor: '#C5A46D' }} />
          <span style={{
            color: '#C5A46D', fontSize: '11px', fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase',
          }}>Legal</span>
          <span style={{ width: '32px', height: '1px', backgroundColor: '#C5A46D' }} />
        </div>
        <h1 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          color: 'white',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          marginBottom: '16px',
        }}>Privacy Policy</h1>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.5)',
        }}>Last updated: April 2026</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px' }}>

        {/* Intro */}
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #DCEAF4',
          borderLeft: '4px solid #C5A46D',
          padding: '24px 28px',
          marginBottom: '48px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: 'rgba(43,49,55,0.8)',
          lineHeight: 1.9,
        }}>
          <strong style={{ color: '#0F2742' }}>Clearance Baran</strong>, registered at Rue Delvaux 21, 4340 Awans, Belgium — hereinafter referred to as <strong style={{ color: '#0F2742' }}>"Clearance Baran"</strong>
          <br /><br />
          📞 +32 488 08 01 14 &nbsp;|&nbsp; ✉️ contact@clearance-baran.com
          <br /><br />
          Clearance Baran respects your privacy and ensures that the personal information you provide to us remains confidential. This privacy policy explains what data we collect when you use our services, why we collect it, and how we use it. It also sets out your rights, who has access to your data and how long we retain it.
          <br /><br />
          If you have any questions after reading this policy, please contact us at <strong>contact@clearance-baran.com</strong>.
        </div>

        {section('1. Purpose of Processing & Retention Period',
          <>
            <p>Clearance Baran collects and processes data about you for the purposes described below. We use both data you provide to us and data we collect ourselves (e.g. information about your visit to our website). We retain personal data for as long as necessary for the stated purposes or for the period required by law.</p>
            <br />
            <p><strong style={{ color: '#0F2742' }}>Handling your enquiry</strong><br />
            When you contact us via our contact form, we collect your name, email address, phone number and message. This information is used solely to respond to your customs enquiry. We retain this data for a maximum of 3 years.</p>
            <br />
            <p><strong style={{ color: '#0F2742' }}>Processing your customs file</strong><br />
            To process your import/export customs file, we may need your name, company name, address, email address, phone number and relevant trade documents. We retain these documents for 7 years as required by Belgian accounting and customs regulations.</p>
          </>
        )}

        {section('2. Legal Basis for Processing',
          <>
            <p>Clearance Baran processes personal data on the following legal grounds:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li>Your <strong>consent</strong> (e.g. when you submit a contact request)</li>
              <li><strong>Necessary for the performance of a contract</strong> (e.g. processing your customs file)</li>
              <li><strong>Necessary to comply with a legal obligation</strong> (e.g. customs and accounting regulations)</li>
              <li><strong>Necessary for our legitimate interest</strong> in operating our customs brokerage business</li>
            </ul>
            <br />
            <p>Where processing is based on your consent, you have the right to withdraw that consent at any time.</p>
          </>
        )}

        {section('3. Sharing with Third Parties',
          <>
            <p>Clearance Baran does not sell your personal data to third parties. We share your data internally and only share it with third parties for the following purposes:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li>Processing your customs file (e.g. customs authorities, freight carriers)</li>
              <li>Website hosting (Vercel)</li>
              <li>Form processing (Web3Forms)</li>
            </ul>
            <br />
            <p>All third parties we work with are required to maintain the confidentiality of your data and have taken the necessary protective measures. We only share your personal data with providers located within the European Economic Area or with providers who offer equivalent protection guarantees.</p>
          </>
        )}

        {section('4. Cookies',
          <>
            <p>Our website (<strong>clearancebaran.com</strong>) does not use tracking or advertising cookies. The site is a static informational website and does not collect any browsing data, use analytics services, or place cookies on your device.</p>
          </>
        )}

        {section('5. Your Rights',
          <>
            <p>You have the following rights regarding your personal data:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li><strong>Right of access</strong> — you may request a copy of the data we hold about you</li>
              <li><strong>Right to rectification</strong> — you may request correction of inaccurate or incomplete data</li>
              <li><strong>Right to erasure</strong> — you may request deletion of your personal data</li>
              <li><strong>Right to restriction</strong> — you may request that we limit how we process your data</li>
              <li><strong>Right to data portability</strong> — you may request your data in a structured, machine-readable format</li>
              <li><strong>Right to object</strong> — you may object to processing, including for direct marketing purposes (free of charge)</li>
            </ul>
            <br />
            <p>To exercise any of these rights, please send an email to <strong>contact@clearance-baran.com</strong>. To prevent misuse, we may ask you to provide a copy of your identity document.</p>
          </>
        )}

        {section('6. Complaints',
          <>
            <p>If you have questions or complaints about how we handle your personal data, please contact us using the details at the top of this policy.</p>
            <br />
            <p>You also have the right to lodge a complaint with the Belgian Data Protection Authority:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li>📧 contact@apd-gba.be</li>
              <li>📞 +32 (0)2 274 48 00</li>
              <li>🌐 www.autoriteprotectiondonnees.be</li>
              <li>📍 Rue de la Presse 35, 1000 Brussels</li>
            </ul>
          </>
        )}

        {section('7. Changes to This Policy',
          <>
            <p>Clearance Baran may update this privacy policy from time to time. Any changes will be published on this page. This policy was last updated in <strong>April 2026</strong>.</p>
          </>
        )}

        {/* Back link */}
        <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid #DCEAF4' }}>
          <Link to="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#0F2742',
            textDecoration: 'none',
          }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
