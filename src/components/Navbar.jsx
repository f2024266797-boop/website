import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const btnStyle = {
    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    color: '#fff', fontSize: '0.88rem', fontWeight: 700, padding: '12px 28px',
    border: 'none', borderRadius: 12, cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(168, 85, 247, 0.2)',
    transition: '0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    whiteSpace: 'nowrap',
  }

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999,
          background: 'rgba(255,255,255,0.78)',
          backdropFilter: 'saturate(180%) blur(30px)',
          WebkitBackdropFilter: 'saturate(180%) blur(30px)',
          borderBottom: scrolled ? '1px solid rgba(168,85,247,0.12)' : '1px solid rgba(255,255,255,0)',
          boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.06)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          
          {/* DEFINITIVE NAV HEIGHT ADJUSTMENT (V114) */}
          <nav style={{ height: 95, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            {/* SYNCED LOGO RE-SCALE (V114) */}
            <a href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}>
              <img
                src={logo}
                alt="Devnexes"
                style={{
                  height: '140px', // Restored to a more dominant scale, balanced with 95px container
                  width: 'auto',
                  objectFit: 'contain',
                  marginTop: '0px'
                }}
              />
            </a>

            <ul className="dn-desktop-links" style={{ display: 'flex', gap: '35px', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{ 
                       fontSize: '0.9rem', 
                       fontWeight: 600, 
                       color: '#475569', 
                       transition: '0.3s', 
                       textDecoration: 'none',
                       letterSpacing: '-0.3px'
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="dn-desktop-links">
               <button 
                  style={btnStyle} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onClick={() => window.location.href = '/contact'}
               >
                  Contact us
               </button>
            </div>

            <button
              onClick={() => setMenuOpen(!mobileOpen)}
              className="dn-mobile-btn"
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

          </nav>
        </div>
      </header>

      <div className={`dn-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div style={{ marginBottom: '30px' }}>
          <img src={logo} alt="Devnexes" style={{ height: '45px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1.2rem', fontWeight: 700,
                color: '#1e293b',
                textDecoration: 'none',
                padding: '20px 0',
                borderBottom: '1.5px solid #f8fafc'
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            style={{ ...btnStyle, width: '100%', padding: '18px', marginTop: '30px' }}
            onClick={() => { setMenuOpen(false); window.location.href = '/contact'; }}
          >
            Contact us
          </button>
        </div>
      </div>

      <div onClick={() => setMenuOpen(false)} className={`dn-drawer-overlay ${mobileOpen ? 'open' : ''}`} />

      <style>{`
        @media (max-width: 1024px) {
          .dn-desktop-links { display: none !important; }
          .dn-mobile-btn    { display: flex !important; }
        }
        .dn-mobile-drawer {
          position: fixed; top: 0; right: 0; bottom: 0;
          width: 300px; background: #fff; z-index: 1000000;
          padding: 40px; transform: translateX(110%);
          transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -20px 0 60px rgba(0,0,0,0.1);
        }
        .dn-mobile-drawer.open { transform: translateX(0); }
        .dn-drawer-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.4);
          z-index: 999999; opacity: 0; visibility: hidden;
          transition: 0.4s; backdrop-filter: blur(4px);
        }
        .dn-drawer-overlay.open { opacity: 1; visibility: visible; }
        .dn-desktop-links a:hover { color: #a855f7 !important; }
      `}</style>
    </>
  )
}
