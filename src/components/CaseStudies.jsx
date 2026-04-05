import React, { useState } from 'react'

const cases = [
  {
    id: 1,
    title: 'Website Design for Devnexes Core Project',
    desc: 'A complete digital transformation for the Devnexes ecosystem — combining high-velocity UI/UX with a sleek, modern brand identity.',
    executiveSummary: 'A full brand overhaul and digital presence rebuild for Devnexes, focused on premium aesthetics, fast performance, and enterprise-grade user experience.',
    challenges: 'Balancing a complex high-tech identity with a clean, user-friendly interface that still resonates with enterprise clients.',
    solutions: 'Built a custom React scroll engine with fluid animations and a glassmorphic design system — maintaining 99+ Lighthouse performance scores.',
    results: '400% increase in lead generation, 65% reduction in bounce rate, and a 100% satisfaction rating from stakeholders.',
    tech: 'React, Node.js, GSAP, Framer Motion',
    metrics: [
      { label: 'Performance', val: '100/100' },
      { label: 'Engagement', val: '+400%' },
      { label: 'SEO Score', val: '98/100' }
    ],
    objectives: ['Boost User Retention', 'Lead Generation Hub', 'Brand Identity Modernization'],
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Fitness & Health Mobile Companion',
    desc: 'A real-time health monitoring app built for elite athletes — syncing wearable data instantly with a seamless mobile interface.',
    executiveSummary: 'An IoT-integrated mobile application providing real-time physiological tracking for professional athletes across multiple devices.',
    challenges: 'Maintaining low-latency synchronization between wearable hardware and the mobile interface across varying network conditions.',
    solutions: 'Engineered a WebSocket bridge and a serverless AWS Lambda backend to handle burst data from 500k+ concurrent IoT devices.',
    results: 'Reached #5 in Health & Fitness on launch week. 95% user retention among professional athletes.',
    tech: 'React Native, Firebase, AWS Lambda, D3.js',
    metrics: [
      { label: 'Concurrent Users', val: '500k+' },
      { label: 'Retention', val: '95%' },
      { label: 'App Rating', val: '4.9/5.0' }
    ],
    objectives: ['IoT Synchronization', 'Real-time Analytics', 'Community Scaling'],
    mainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Minimalist Luxury E-commerce UI',
    desc: 'A high-end digital storefront for a European fashion house — prioritizing premium imagery, zero-friction checkout, and AR visualization.',
    executiveSummary: 'A luxury-focused e-commerce experience built with a minimalist aesthetic and AR features that bring products to life in the browser.',
    challenges: 'Replicating the tactile feel of luxury products digitally, while keeping image-heavy pages ultra-fast.',
    solutions: 'Deployed NexGen-CDN for asset delivery and a browser-native Three.js AR dressing room — no plugins required.',
    results: '35% reduction in checkout churn and a 2.5x increase in Average Order Value through smart cross-sell algorithms.',
    tech: 'Next.js, Shopify API, Stripe, Three.js',
    metrics: [
      { label: 'Conversion Lift', val: '+28%' },
      { label: 'Load Time', val: '0.8s' },
      { label: 'AOV Increase', val: '150%' }
    ],
    objectives: ['AR Visualization', 'Checkout Optimization', 'Performance at Scale'],
    mainImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  }
]

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null)
  const primaryNavy = '#1a1a2e'
  const magentaTheme = '#ff7eb3'
  const textGray = '#5e5e77'

  // Lock background scroll when modal is open
  React.useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [selectedCase])

  return (
    <section id="case-studies" className="case-studies-sec">

      {/* Modal */}
      {selectedCase && (
        <div className="case-modal-overlay" onClick={() => setSelectedCase(null)} onWheel={e => e.stopPropagation()} onTouchMove={e => e.stopPropagation()}>
          <div className="case-modal-card animate-slide-up" onClick={e => e.stopPropagation()}>

            {/* Left Panel */}
            <div className="modal-left">
              <img src={selectedCase.mainImage} alt={selectedCase.title} className="modal-left-img" />
              <div className="modal-left-overlay">
                <span className="modal-tag">Case Study 0{selectedCase.id}</span>
                <h2 className="modal-title">{selectedCase.title}</h2>
              </div>

              {/* Metrics at bottom of left panel */}
              <div className="modal-metrics">
                {selectedCase.metrics.map(m => (
                  <div key={m.label} className="modal-metric">
                    <span className="m-val">{m.val}</span>
                    <span className="m-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="modal-right">
              <button className="close-modal" onClick={() => setSelectedCase(null)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>

              <div className="modal-right-scroll">
                <div className="modal-section">
                  <span className="section-tag">Overview</span>
                  <p>{selectedCase.executiveSummary}</p>
                </div>

                <div className="modal-section">
                  <span className="section-tag">The Challenge</span>
                  <p>{selectedCase.challenges}</p>
                </div>

                <div className="modal-section">
                  <span className="section-tag">Our Solution</span>
                  <p>{selectedCase.solutions}</p>
                </div>

                <div className="modal-section result-highlight">
                  <span className="section-tag" style={{color:'#16a34a'}}>Results</span>
                  <p>{selectedCase.results}</p>
                </div>

                {/* Tech + Objectives */}
                <div className="modal-bottom-row">
                  <div className="mini-card">
                    <h4>Tech Stack</h4>
                    <div className="tech-pile">
                      {selectedCase.tech.split(',').map(t => <span key={t} className="t-pill">{t.trim()}</span>)}
                    </div>
                  </div>
                  <div className="mini-card">
                    <h4>Objectives</h4>
                    <ul className="obj-list">
                      {selectedCase.objectives.map(o => <li key={o}>{o}</li>)}
                    </ul>
                  </div>
                </div>

                <button className="initiate-btn" onClick={() => window.location.href = '/contact'}>
                  Start a Similar Project →
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        .case-studies-sec { background: #fdfdfd; padding: 120px 0; overflow: hidden; }

        /* Cards */
        .case-card { display: flex; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 15px 45px rgba(0,0,0,0.04); border: 1.2px solid #f1f5f9; transition: 0.4s cubic-bezier(0.16,1,0.3,1); }
        .case-card:hover { transform: translateY(-8px); box-shadow: 0 40px 80px rgba(0,0,0,0.09); }
        .case-img-box { flex: 1.1; overflow: hidden; min-height: 360px; }
        .case-img-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.7s; }
        .case-card:hover .case-img-box img { scale: 1.04; }
        .case-txt-box { flex: 1; padding: 45px; display: flex; flex-direction: column; justify-content: center; }
        .project-tag { font-size: 0.72rem; font-weight: 700; color: #a855f7; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; display: block; }
        .view-btn { background: #0f172a; border: none; color: #fff; font-weight: 700; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; gap: 10px; padding: 14px 30px; border-radius: 10px; width: fit-content; transition: 0.3s; margin-top: 2rem; }
        .view-btn:hover { background: #6366f1; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(99,102,241,0.25); }

        /* ── Modal ── */
        .case-modal-overlay { position: fixed; inset: 0; background: rgba(10,15,30,0.7); backdrop-filter: blur(16px); z-index: 100001; display: flex; align-items: center; justify-content: center; padding: 24px; overscroll-behavior: contain; }
        .case-modal-card { width: 100%; max-width: 1100px; height: 88vh; background: #fff; border-radius: 16px; display: flex; overflow: hidden; box-shadow: 0 80px 160px rgba(0,0,0,0.35); }

        /* Left panel */
        .modal-left { width: 42%; position: relative; flex-shrink: 0; display: flex; flex-direction: column; }
        .modal-left-img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; }
        .modal-left-overlay { position: absolute; top: 0; left: 0; right: 0; padding: 40px 36px; background: linear-gradient(to bottom, rgba(10,15,35,0.7) 0%, transparent 100%); z-index: 2; }
        .modal-tag { font-size: 0.68rem; font-weight: 800; color: #818cf8; letter-spacing: 3px; text-transform: uppercase; display: block; margin-bottom: 10px; }
        .modal-title { font-size: 1.65rem; font-weight: 800; color: #fff; line-height: 1.25; margin: 0; }

        /* Metrics at bottom of left panel */
        .modal-metrics { position: absolute; bottom: 0; left: 0; right: 0; z-index: 2; display: flex; background: rgba(10,15,35,0.75); backdrop-filter: blur(10px); }
        .modal-metric { flex: 1; padding: 22px 16px; text-align: center; border-right: 1px solid rgba(255,255,255,0.1); }
        .modal-metric:last-child { border-right: none; }
        .m-val { display: block; font-size: 1.6rem; font-weight: 900; color: #fff; }
        .m-label { font-size: 0.65rem; color: rgba(255,255,255,0.5); font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px; display: block; }

        /* Right panel */
        .modal-right { flex: 1; display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .close-modal { position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; transition: 0.25s; color: #64748b; }
        .close-modal:hover { background: #0f172a; color: #fff; border-color: #0f172a; transform: rotate(90deg); }

        .modal-right-scroll { flex: 1; overflow-y: auto; padding: 44px 40px 40px 40px; scrollbar-width: thin; }

        .modal-section { margin-bottom: 28px; }
        .section-tag { font-size: 0.68rem; font-weight: 800; color: #6366f1; letter-spacing: 2px; text-transform: uppercase; display: block; margin-bottom: 8px; }
        .modal-section p { font-size: 0.97rem; line-height: 1.75; color: #475569; margin: 0; }
        .result-highlight { background: #f0fdf4; padding: 20px 22px; border-radius: 14px; border: 1px solid #dcfce7; }

        .modal-bottom-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
        .mini-card { background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 14px; padding: 22px; }
        .mini-card h4 { font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #1e293b; margin: 0 0 14px 0; }
        .tech-pile { display: flex; flex-wrap: wrap; gap: 7px; }
        .t-pill { background: #fff; color: #475569; padding: 5px 12px; border-radius: 100px; font-size: 0.78rem; font-weight: 600; border: 1.5px solid #e2e8f0; }
        .obj-list { list-style: none; padding: 0; margin: 0; }
        .obj-list li { font-size: 0.88rem; color: #475569; font-weight: 600; margin-bottom: 8px; padding-left: 18px; position: relative; }
        .obj-list li::before { content: '→'; position: absolute; left: 0; color: #6366f1; }

        .initiate-btn { width: 100%; padding: 16px; background: linear-gradient(135deg, #a855f7, #4f46e5); color: #fff; border: none; border-radius: 12px; font-weight: 700; letter-spacing: 0.5px; cursor: pointer; transition: 0.3s; font-size: 0.95rem; }
        .initiate-btn:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(99,102,241,0.3); }

        .animate-slide-up { animation: slideUp 0.5s cubic-bezier(0.16,1,0.3,1); }
        @keyframes slideUp { from { transform: translateY(50px) scale(0.97); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }

        @media (max-width: 900px) {
          .case-modal-card { flex-direction: column; height: 95vh; }
          .modal-left { width: 100%; height: 250px; flex-shrink: 0; }
          .case-card { flex-direction: column; }
          .case-img-box { min-height: 240px; }
          .case-txt-box { padding: 36px 28px; }
          .modal-bottom-row { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 2 }}>
        <div style={{ width: 60, height: 4, background: magentaTheme, margin: '0 auto 20px auto', borderRadius: 2 }} />
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: primaryNavy, letterSpacing: '-1px' }}>Our Projects</h2>
        <p style={{ color: textGray, fontSize: '1.15rem', marginTop: '10px' }}>A selection of projects we've delivered for our clients.</p>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 25px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {cases.map((cs) => (
          <div key={cs.id} className="case-card">
            <div className="case-img-box">
              <img src={cs.mainImage} alt={cs.title} />
            </div>
            <div className="case-txt-box">
              <span className="project-tag">Project 0{cs.id}</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: primaryNavy, marginBottom: '1rem', lineHeight: 1.2 }}>{cs.title}</h3>
              <p style={{ fontSize: '1.05rem', color: textGray, lineHeight: 1.8 }}>{cs.desc}</p>
              <button className="view-btn" onClick={() => setSelectedCase(cs)}>
                View <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
