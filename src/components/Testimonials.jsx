import { useState, useEffect } from 'react'

const testimonials = [
  { id: 1, name: 'Romeena De Silva', role: 'Jonet Cosmetics', stars: 5, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80' },
  { id: 2, name: 'Romeena De Silva', role: 'Jonet Cosmetics', stars: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80' },
  { id: 3, name: 'Imran Khan', role: 'Software Engineer', stars: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', active: true },
  { id: 4, name: 'Romeena De Silva', role: 'Jonet Cosmetics', stars: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
  { id: 5, name: 'Romeena De Silva', role: 'Jonet Cosmetics', stars: 5, image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&q=80' }
]

export default function Testimonials() {
  const primaryNavy = '#1a1a2e'
  const magentaGradient = 'linear-gradient(90deg, #ff7eb3 0%, #3d1fc2 100%)'
  const textBody = '#5e5e77'
  const purpleTheme = '#5a21b3'

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="testimonials" style={{ background: '#ffffff', padding: isMobile ? '80px 0' : '140px 0', position: 'relative' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: isMobile ? '4rem' : '6rem' }}>
         <div style={{ width: 60, height: 4, background: magentaGradient, margin: '0 auto 2.5rem auto' }} />
         <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 300, color: primaryNavy, lineHeight: 1.2 }}>
            Why customers love <br />
            <span style={{ fontWeight: 800 }}>working with us</span>
          </h2>
      </div>

      {/* Quote Content */}
      <div style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center', position: 'relative', padding: '0 3rem' }}>
         <div style={{ position: 'absolute', top: -35, left: '2rem', width: 25, height: 25, color: '#f09' }}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C9.12154 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12154 23 8.01697 23H5.01697C3.9124 23 3.01697 22.1046 3.01697 21Z" transform="scale(1, -1) translate(0, -24)" /></svg>
         </div>
         <p style={{ fontSize: isMobile ? '1.05rem' : '1.25rem', color: textBody, lineHeight: 1.8, marginBottom: '5rem', padding: '0 1rem' }}>
            Without any doubt I recommend Devnexes Solutions as one of the best web design and digital marketing agencies. 
            One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.
         </p>
         <div style={{ position: 'absolute', bottom: 50, right: '2rem', width: 25, height: 25, color: '#f09' }}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C9.12154 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12154 23 8.01697 23H5.01697C3.9124 23 3.01697 22.1046 3.01697 21Z" /></svg>
         </div>
      </div>

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '4rem' : '4rem', maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
         {!isMobile && (
           <button style={{ width: 54, height: 54, borderRadius: '50%', border: `1.8px solid ${purpleTheme}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: purpleTheme, background: 'transparent', cursor: 'pointer' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
           </button>
         )}
         <div style={{ display: 'flex', alignItems: 'flex-end', gap: isMobile ? '1.5rem' : '2.5rem', overflowX: isMobile ? 'auto' : 'visible', width: isMobile ? '100vw' : 'auto', padding: isMobile ? '1rem' : 0, justifyContent: 'center' }}>
            {testimonials.map((t) => (
              <div key={t.id} style={{ textAlign: 'center', opacity: t.active ? 1 : 0.6, transition: '0.3s', minWidth: t.active ? 100 : 80 }}>
                 <div style={{ 
                   width: t.active ? (isMobile ? 85 : 95) : (isMobile ? 65 : 75), 
                   height: t.active ? (isMobile ? 85 : 95) : (isMobile ? 65 : 75), 
                   borderRadius: '50%', border: t.active ? '3.5px solid #f09' : '2px solid #ececf4', 
                   padding: '5px', margin: '0 auto 1.2rem auto', overflow: 'hidden' 
                 }}>
                    <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                 </div>
                 <div style={{ color: '#ffc107', fontSize: '1rem', marginBottom: '0.8rem' }}>
                    {'★'.repeat(t.stars)}
                 </div>
                 <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: t.active ? purpleTheme : primaryNavy }}>{t.name}</h4>
                 <p style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '4px' }}>{t.role}</p>
              </div>
            ))}
         </div>
         {!isMobile && (
           <button style={{ width: 54, height: 54, borderRadius: '50%', border: `1.8px solid ${purpleTheme}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: purpleTheme, background: 'transparent', cursor: 'pointer' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
           </button>
         )}
      </div>

    </section>
  )
}
