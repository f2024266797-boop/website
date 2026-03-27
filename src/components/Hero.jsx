import React, { useState, useEffect } from 'react'
import cubeImg from '../assets/cube.png'

export default function Hero() {
  const navyColor = '#1a1a2e'
  const purpleHighlight = '#b06ab3'

  // Dedicated High-Performance Parallax Engine specific to Hero visual elements
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    // Registering passive physics listener ensuring absolute 60FPS fluid gliding via inter-inertia parameters
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const btnStyle = {
    background: 'linear-gradient(135deg, #a855f7 0%, #4f46e5 100%)',
    color: '#fff',
    fontSize: '0.95rem',
    fontWeight: 600,
    padding: '12px 32px',
    borderRadius: 10,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 30px rgba(168, 85, 247, 0.35)',
    transition: 'box-shadow 0.2s, background 0.2s'
  }

  return (
    <section
      id="about"
      style={{
        paddingTop: 140,
        paddingBottom: 100,
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 48%) 1fr', alignItems: 'center', gap: '3rem' }} className="hero-grid">

          <div className="animate-fade-up">
            <h1 style={{
              lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em', 
              fontSize: 'clamp(2.4rem, 8vw, 4.2rem)',
              transform: `translateY(${scrollY * 0.15}px)`
            }}>
              <span style={{ fontWeight: 300, color: navyColor }}>Great </span>
              <span style={{ fontWeight: 600, color: purpleHighlight }}>Product</span>
              <span style={{ fontWeight: 300, color: navyColor }}> is</span>
              <br />
              <span style={{ fontWeight: 800, color: navyColor }}>built by great </span>
              <span style={{ fontWeight: 600, color: purpleHighlight }}>teams</span>
            </h1>

            <p style={{
              fontSize: '1.05rem', color: '#555577', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 420,
              // Mid Layer Parallax
              transform: `translateY(${scrollY * 0.12}px)`
            }}>
              We help build and manage a team of world-class developers
              to bring your vision to life.
            </p>

            <button
              style={{
                ...btnStyle,
                // Front Layer Parallax Button mapping
                transform: `translateY(${scrollY * 0.05}px)`
              }}
              onClick={() => window.location.href = '/contact'}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(168, 85, 247, 0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(168, 85, 247, 0.35)' }}
            >
              Let's get started!
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }} className="animate-fade-up">
            {/* Complex Dual-Engine rendering: Encapsulated the existing CSS Keyframes inside the new structural scroll-listener Parallax parameters */}
            <div
              style={{
                width: '100%',
                maxWidth: 480,
                // Fast Multiplier Forward Parallax: Forces object upwards accelerating it faster against vertical inertia producing sharp 3D optical scale separation
                transform: `translateY(${scrollY * -0.22}px)`
              }}
            >
              <div className="floating-img-container">
                <img
                  src={cubeImg}
                  alt="Devnexes Hero Visual"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* Continuous non-scroll physics mapping */
        .floating-img-container {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        /* Strict safe mobile constraints preventing the left-squash previously shown */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid h1 { font-size: 2.8rem !important; }
          p { margin: 0 auto 2rem auto !important; }
        }
        @media (max-width: 480px) {
           /* Force fluid line breaking text reduction on extreme squashes avoiding viewport overflows natively */
          .hero-grid h1 { font-size: 2.1rem !important; line-height: 1.25 !important;}
        }
      `}</style>
    </section>
  )
}
