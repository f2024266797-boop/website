import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Assistant', href: '/assistant' },
  { label: 'Coming Soon', href: '#', disabled: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const btnStyle = {
    background: 'linear-gradient(135deg, #a855f7 0%, #4f46e5 100%)',
    color: '#fff', fontSize: '0.9rem', fontWeight: 600, padding: '10px 24px',
    border: 'none', borderRadius: 8, cursor: 'pointer',
    boxShadow: '0 4px 18px rgba(168, 85, 247, 0.25)',
    transition: 'transform 0.2s, box-shadow 0.2s'
  }

  return (
    <>
      <header 
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999,
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)', 
          borderBottom: scrolled ? '1px solid rgba(168, 85, 247, 0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 25px rgba(0, 0, 0, 0.04)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{ maxWidth: 1250, margin: '0 auto', padding: '0 2.5rem' }}>
          <nav style={{ height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
              <div style={{ position: 'relative', width: 44, height: 44 }}>
                <svg width="44" height="44" viewBox="0 0 50 50">
                  <defs>
                    <linearGradient id="logoG" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#ff7eb3" />
                      <stop offset="100%" stopColor="#3d1fc2" />
                    </linearGradient>
                  </defs>
                  <path d="M25 5C13.9 5 5 13.9 5 25C5 29.8 6.7 34.2 9.5 37.7L25 25L40.5 37.7C43.3 34.2 45 29.8 45 25C45 13.9 36.1 5 25 5Z" fill="url(#logoG)" />
                  <circle cx="25" cy="27" r="3.5" fill="#fff" />
                </svg>
              </div>
              <span style={{ fontSize: '1.9rem', color: '#1a1a2e', fontWeight: 600, marginLeft: '2px' }} className="logo-font">Devnexes</span>
            </a>

            <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: '0 2rem' }} className="desktop-links">
              {navLinks.map(l => (
                <li key={l.label}>
                  {l.disabled ? (
                    <span style={{
                      fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8',
                      background: '#f1f5f9', border: '1px solid #e2e8f0',
                      padding: '4px 12px', borderRadius: 20, cursor: 'default',
                      letterSpacing: '0.5px'
                    }}>
                      {l.label}
                    </span>
                  ) : (
                    <a 
                      href={l.href} 
                      style={{ fontSize: '0.95rem', fontWeight: 500, color: '#4b4b66', transition: 'color 0.2s' }} 
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="desktop-links" style={{ flexShrink: 0 }}>
              <button style={btnStyle} onClick={() => window.location.href = '/contact'}>Contact us</button>
            </div>

            <button onClick={() => setMenuOpen(!mobileOpen)} className="mobile-btn" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 10, zIndex: 1000000 }}>
               {mobileOpen ? (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               ) : (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
               )}
            </button>
          </nav>
        </div>
      </header>

      {/* 📱 MOBILE NAVIGATION DRAWER - MOVED OUTSIDE HEADER TO PREVENT CLIPPING */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {navLinks.map(l => (
            <a 
              key={l.label} 
              href={l.href} 
              onClick={() => setMenuOpen(false)} 
              style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1a2e', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
          <button style={{ ...btnStyle, width: '100%', padding: '15px' }} onClick={() => window.location.href = '/contact'}>Contact us</button>
        </div>
      </div>

      <div onClick={() => setMenuOpen(false)} className={`drawer-overlay ${mobileOpen ? 'open' : ''}`} />

      <style>{`
        .mobile-drawer {
          position: fixed !important;
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 300px !important;
          background-color: #ffffff !important;
          background: #ffffff !important;
          z-index: 2000000000 !important;
          padding: 120px 40px !important;
          transform: translateX(100%) !important;
          visibility: hidden !important;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
          box-shadow: -10px 0 50px rgba(0,0,0,0.2) !important;
          display: block !important;
          opacity: 1 !important;
        }
        .mobile-drawer.open {
          transform: translateX(0) !important;
          visibility: visible !important;
        }
        .drawer-overlay {
          position: fixed !important;
          inset: 0 !important;
          background: rgba(0,0,0,0.6) !important;
          z-index: 1999999999 !important;
          opacity: 0 !important;
          visibility: hidden !important;
          transition: opacity 0.4s ease !important;
          backdrop-filter: blur(4px) !important;
        }
        .drawer-overlay.open {
          opacity: 1 !important;
          visibility: visible !important;
        }
        @media (max-width: 1100px) {
          .desktop-links { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          .logo-font { font-size: 1.5rem !important; }
        }
      `}</style>
    </>
  )
}
