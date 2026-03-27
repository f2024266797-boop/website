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
    // Linear Purple Gradient (Purple to Indigo/Blue)
    background: 'linear-gradient(135deg, #a855f7 0%, #4f46e5 100%)',
    color: '#fff', fontSize: '0.9rem', fontWeight: 600, padding: '10px 24px',
    border: 'none', borderRadius: 8, cursor: 'pointer',
    boxShadow: '0 4px 18px rgba(168, 85, 247, 0.25)',
    transition: 'transform 0.2s, box-shadow 0.2s'
  }

  return (
    <header 
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)', // Guaranteed Safari render engine support
        borderBottom: scrolled ? '1px solid rgba(168, 85, 247, 0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 25px rgba(0, 0, 0, 0.04)' : 'none',
        transition: 'all 0.3s ease',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic Left Mirror Shade (Theme Color Glow) - Isolated to Left Corner Only Rendering */}
      <div style={{ 
        position: 'absolute', top: 0, left: -50, width: '45%', height: '150%', 
        background: 'radial-gradient(circle at left top, rgba(168, 85, 247, 0.16) 0%, transparent 70%)', 
        pointerEvents: 'none', zIndex: -1, filter: 'blur(10px)'
      }} />

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
                    onMouseEnter={e => e.target.style.color = '#a855f7'} 
                    onMouseLeave={e => e.target.style.color = '#4b4b66'}
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="desktop-links" style={{ flexShrink: 0 }}>
            <button 
              style={btnStyle}
              onClick={() => window.location.href = '/contact'}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(168, 85, 247, 0.4)' }} 
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(168, 85, 247, 0.25)' }}
            >
              Contact us
            </button>
          </div>

          <button onClick={() => setMenuOpen(!mobileOpen)} className="mobile-btn" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 6 }}>
            {[1,2,3].map(i => <div key={i} style={{ width: 26, height: 2.2, background: '#1a1a2e', borderRadius: 2 }} />)}
          </button>
        </nav>

      </div>

      {/* 📱 MOBILE NAVIGATION DRAWER (Slide-in) */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '280px',
        background: '#fff', zIndex: 10001, padding: '80px 40px',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: '-10px 0 50px rgba(0,0,0,0.1)'
      }}>
        <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 25, right: 25, background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#1a1a2e' }}>×</button>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {navLinks.map(l => (
            <a 
              key={l.label} 
              href={l.href} 
              onClick={() => setMenuOpen(false)} 
              style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1a1a2e', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
          <button style={{ ...btnStyle, width: '100%' }} onClick={() => window.location.href = '/contact'}>Contact us</button>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.2)', zIndex: 10000, backdropFilter: 'blur(5px)' }} />}

      <style>{`
        @media (max-width: 1100px) {
          .desktop-links { display: none !important; }
          .mobile-btn { display: flex !important; z-index: 10002; }
        }
        @media (max-width: 480px) {
          .logo-font { font-size: 1.5rem !important; }
        }
      `}</style>
    </header>
  )
}
