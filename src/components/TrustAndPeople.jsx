import { useState, useEffect } from 'react'

export default function TrustAndPeople() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const magentaGradient = 'linear-gradient(135deg, #ff7eb3 0%, #3d1fc2 100%)'
  const primaryNavy = '#1a1a2e'
  const textBody = '#5e5e77'
  const accentMagenta = '#b03673'
  const purpleTheme = '#5a21b3'

  return (
    <section 
      id="trust-people" 
      style={{ 
        background: '#ffffff', 
        padding: isMobile ? '80px 0 0 0' : '160px 0 0 0', 
        position: 'relative', 
        overflow: 'visible' 
      }}
    >
      
      {/* ── PART 1: Trust Section content ── */}
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '4rem' : '8rem', alignItems: 'center', marginBottom: isMobile ? '6rem' : '10rem' }}>
        <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
          <div style={{ width: 45, height: 4, background: magentaGradient, margin: isMobile ? '0 auto 2rem auto' : '0 0 2rem 0' }} />
          <h2 style={{ fontSize: isMobile ? '1.85rem' : '2.55rem', color: primaryNavy, fontWeight: 300, lineHeight: 1.1, marginBottom: '2rem', maxWidth: '650px' }}>
            Leading companies trust us <br />
            <span style={{ fontWeight: 800 }}>to develop software</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: textBody, lineHeight: 1.8, marginBottom: '2.5rem' }}>
            We <span style={{ color: accentMagenta, fontWeight: 500 }}>add development capacity</span> to tech teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle.
          </p>
          <a href="/services" style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '0.8rem', color: '#6366f1', fontWeight: 600, textDecoration: 'none' }}>
            See more Information
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
        <div onClick={() => setIsPlaying(true)} style={{ flex: 1.4, width: '100%', position: 'relative', cursor: isPlaying ? 'default' : 'pointer' }}>
          <div style={{ width: '100%', aspectRatio: isMobile ? '1.2 / 1' : '1.45 / 1', borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.12)', position: 'relative', background: '#000' }}>
             {isPlaying ? (
               <video autoPlay muted loop controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}><source src="https://player.vimeo.com/external/371433846.sd.mp4?s=23117387a3222f77918a8eb605d6e274a7ad3e1b&profile_id=164&oauth2_token_id=57447761" type="video/mp4" /></video>
             ) : (
               <>
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 60, height: 60, borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}><div style={{ width: 42, height: 42, borderRadius: '50%', background: magentaGradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z" /></svg></div></div>
               </>
             )}
          </div>
        </div>
      </div>

      {/* ── PART 2: Meet the People ── */}
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 2rem', marginBottom: isMobile ? '4rem' : '8.5rem' }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left', marginBottom: isMobile ? '3rem' : 0 }}>
            <div style={{ width: 45, height: 4, background: magentaGradient, margin: isMobile ? '0 auto 2.2rem auto' : '0 0 2.2rem 0' }} />
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 300, color: primaryNavy, lineHeight: 1.2 }}>
               Meet the People <br />
               <span style={{ fontWeight: 800 }}>We are Working With</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', paddingRight: isMobile ? 0 : '2.5rem' }}>
             <button onClick={() => alert('Coming Soon')} style={{ width: 50, height: 50, borderRadius: '50%', border: `1.8px solid ${purpleTheme}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: purpleTheme, background: 'transparent', cursor: 'pointer' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="10 17 5 12 10 7" /></svg></button>
             <button onClick={() => alert('Coming Soon')} style={{ width: 50, height: 50, borderRadius: '50%', background: purpleTheme, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', border: 'none', cursor: 'pointer' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="14 7 19 12 14 17" /></svg></button>
          </div>
        </div>
      </div>

      {/* ── PART 2b: Team Member Cards ── */}
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 2rem 5rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
          gap: isMobile ? '2.5rem' : '1.5rem',
          justifyItems: 'center',
        }}>

          {/* Slot 1 — Empty */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 110, height: 110, borderRadius: '50%', border: '2.5px dashed #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
            <p style={{ fontWeight: 700, color: '#d1d5db', fontSize: '0.9rem', margin: 0 }}>Seat Free</p>
            <p style={{ fontSize: '0.75rem', color: '#e5e7eb', margin: 0 }}>Coming Soon</p>
          </div>

          {/* Slot 2 — Muhammad Arham */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', border: '3px solid #e9d5ff', boxShadow: '0 8px 24px rgba(168,85,247,0.15)' }}>
              <img src="/assets/arham.jpeg" alt="Muhammad Arham" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML=`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#a855f7,#4f46e5);font-size:1.5rem;font-weight:800;color:#fff;border-radius:50%">MA</div>`; }} />
            </div>
            <p style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '0.9rem', margin: 0, textAlign: 'center' }}>Muhammad Arham</p>
            <p style={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 600, margin: 0 }}>COO</p>
          </div>

          {/* Slot 3 — Founder (Featured Center) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 124, height: 124, borderRadius: '50%', padding: '3px', background: 'linear-gradient(135deg,#ff7eb3,#3d1fc2)', boxShadow: '0 10px 30px rgba(168,85,247,0.3)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#fff' }}>
                <img src="/assets/founder.jpg" alt="Founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.target.src='https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=200'; }} />
              </div>
            </div>
            <p style={{ fontWeight: 800, color: '#1a1a2e', fontSize: '0.95rem', margin: 0, textAlign: 'center' }}>Muhammad Raham</p>
            <p style={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 600, margin: 0 }}>CEO & Founder</p>
          </div>

          {/* Slot 4 — Muhammad Huzaifa */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', border: '3px solid #e9d5ff', boxShadow: '0 8px 24px rgba(168,85,247,0.15)' }}>
              <img src="/assets/huzaifa.jpeg" alt="Muhammad Huzaifa" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML=`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#a855f7,#4f46e5);font-size:1.5rem;font-weight:800;color:#fff;border-radius:50%">MH</div>`; }} />
            </div>
            <p style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '0.9rem', margin: 0, textAlign: 'center' }}>Muhammad Huzaifa</p>
            <p style={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 600, margin: 0 }}>CTO</p>
          </div>

          {/* Slot 5 — Huzaifa Mushtaq */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', border: '3px solid #e9d5ff', boxShadow: '0 8px 24px rgba(168,85,247,0.15)' }}>
              <img src="/assets/huzaifa_mushtaq.jpeg" alt="Huzaifa Mushtaq" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(2.0)', objectPosition: 'center 20%' }}
                onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML=`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#a855f7,#4f46e5);font-size:1.5rem;font-weight:800;color:#fff;border-radius:50%">HM</div>`; }} />
            </div>
            <p style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '0.9rem', margin: 0, textAlign: 'center' }}>Huzaifa Mushtaq</p>
            <p style={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 600, margin: 0 }}>Team Lead</p>
          </div>

        </div>
      </div>


    </section>
  )
}
