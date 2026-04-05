import React, { useEffect, useState } from 'react'
import Footer from './Footer'

const services = [
  { title: 'Generative AI & LLMs', desc: 'Custom RAG pipelines, fine-tuned LLMs, and autonomous agent systems.', icon: '🧠', tag: 'ACTIVE' },
  { title: 'Cloud Infrastructure', desc: 'AWS/Azure/GCP architecting for high-scale, mission-critical systems.', icon: '☁️', tag: 'STABLE' },
  { title: 'Fullstack Web Core', desc: 'High-performance React/Next.js ecosystems prioritizing speed and SEO.', icon: '🌐', tag: 'CORE' },
  { title: 'Mobile Ecosystems', desc: 'Native-feel Flutter and React Native apps for consumer and enterprise.', icon: '📱', tag: 'MOBILE' },
  { title: 'UI/UX Architecture', desc: 'Interactive systems that convert engagement into measurable growth.', icon: '✨', tag: 'DESIGN' },
  { title: 'Enterprise Solutions', desc: 'Dismantling and re-architecting legacy workflows into modern modular kernels.', icon: '⚙️', tag: 'SYNCED' }
]

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const d_purp = '#3d1fc2';
  const d_magenta = '#ff7eb3';
  const d_grad = 'linear-gradient(135deg, #ff7eb3 0%, #3d1fc2 100%)';

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', color: '#0f172a', fontFamily: "'Outfit', sans-serif", overflowX: 'hidden' }}>


      {/* 🧬 ULTRA-PREMIUM DYNAMIC BACKGROUND BLOBS */}
      <div style={{ position: 'fixed', top: '-10%', left: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(61, 31, 194, 0.04) 0%, transparent 70%)', filter: 'blur(120px)', zIndex: 0, animation: 'float-slow 25s infinite linear' }} />
      <div style={{ position: 'fixed', bottom: '-10%', right: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.04) 0%, transparent 70%)', filter: 'blur(120px)', zIndex: 0, animation: 'float-slow 30s infinite linear reverse' }} />
      <div style={{ position: 'fixed', top: '40%', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.02) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0, animation: 'float-slow 20s infinite ease-in-out' }} />
      
      <style>{`
         @keyframes float-slow {
           0% { transform: translate(0, 0) scale(1); }
           33% { transform: translate(40px, 30px) scale(1.15); }
           66% { transform: translate(-30px, 40px) scale(0.9); }
           100% { transform: translate(0, 0) scale(1); }
         }
         @keyframes glow-pulse {
           0% { box-shadow: 0 0 20px rgba(61, 31, 194, 0.1); }
           50% { box-shadow: 0 0 40px rgba(61, 31, 194, 0.2); }
           100% { box-shadow: 0 0 20px rgba(61, 31, 194, 0.1); }
         }
         .card-hover:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: ${d_purp}44 !important;
            box-shadow: 0 30px 60px rgba(0,0,0,0.08) !important;
         }
         .portrait-hover:hover {
            transform: scale(1.05);
            border-color: ${d_purp}aa !important;
            box-shadow: 0 30px 80px rgba(61, 31, 194, 0.15) !important;
         }
         @media (max-width: 900px) {
           .hero-h1 { font-size: 2.2rem !important; }
           .hero-p { font-size: 1rem !important; padding: 0 20px !important; }
           .tree-svg-desktop { display: none !important; }
           .tree-svg-mobile { display: block !important; }
           .tree-level-container { flex-direction: column !important; gap: 60px !important; align-items: center !important; }
           .side-text-node { flex-direction: column !important; text-align: center !important; gap: 15px !important; width: 100% !important; margin-bottom: 60px !important; }
           .side-text-node > div { text-align: center !important; }
           .service-grid { grid-template-columns: 1fr !important; }
           .main-pad { padding: 40px 20px 80px 20px !important; }
         }
      `}</style>

      <main className="main-pad" style={{ maxWidth: '1420px', margin: '0 auto', padding: '100px 40px 100px 40px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        
        {/* ── ✨ RESPONSIVE STYLIZED HERO ───── */}
        <div style={{ marginBottom: '100px', textAlign: 'center' }}>
           <div style={{ display: 'inline-block', padding: '5px 15px', borderRadius: '100px', background: 'rgba(61, 31, 194, 0.04)', color: d_purp, fontSize: '0.65rem', fontWeight: 1000, letterSpacing: '4px', marginBottom: '20px', border: '1px solid rgba(61, 31, 194, 0.1)' }}>
              THE CORE PROTOCOL V.04
           </div>
           <h1 className="hero-h1" style={{ fontSize: '4.8rem', letterSpacing: '-4px', lineHeight: 1, marginBottom: '30px' }}>
              <span style={{ fontWeight: 200, color: '#94a3b8' }}>Defining</span> <span style={{ fontWeight: 1000 }}>Devnexes</span> <br /> 
              <span style={{ fontWeight: 1000, background: d_grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Logic</span> <span style={{ fontWeight: 200, background: d_grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: 0.8 }}>Hierarchy</span>
           </h1>
           <p className="hero-p" style={{ color: '#64748b', fontSize: '1.35rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
              An elite personnel collective architecting <span style={{ color: d_purp, fontWeight: 900 }}>high-performance technical kernels</span> for world-class founders.
           </p>
        </div>

        {/* ── 🌳 THE STYLIZED DUAL-MODE TREE ───── */}
        <div className="tree-root" style={{ position: 'relative', width: '100%', maxWidth: '1100px', margin: '0 auto 180px auto' }}>
           
           <svg className="tree-svg-desktop" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, opacity: 0.5 }}>
              <line x1="50%" y1="120" x2="50%" y2="180" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
              <line x1="22%" y1="180" x2="78%" y2="180" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
              <line x1="22%" y1="180" x2="22%" y2="220" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
              <line x1="78%" y1="180" x2="78%" y2="220" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
              <line x1="22%" y1="330" x2="22%" y2="380" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
              <line x1="78%" y1="330" x2="78%" y2="380" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
              <line x1="22%" y1="380" x2="78%" y2="380" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
              <line x1="50%" y1="380" x2="50%" y2="420" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
              <line x1="50%" y1="540" x2="50%" y2="600" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="6, 6" />
              <line x1="25%" y1="600" x2="75%" y2="600" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="6, 6" />
              <line x1="25%" y1="600" x2="25%" y2="640" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="6, 6" />
              <line x1="75%" y1="600" x2="75%" y2="640" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="6, 6" />
              <circle cx="50%" cy="180" r="6" fill={d_purp} />
              <circle cx="50%" cy="380" r="6" fill={d_purp} />
           </svg>

           <svg className="tree-svg-mobile" style={{ position: 'absolute', top: 50, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, display: 'none', opacity: 0.3 }}>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="10, 10" />
           </svg>

           <div style={{ position: 'relative', zIndex: 10 }}>
              
              {/* LEVEL 1: FOUNDER */}
              <div className="side-text-node" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '100px', gap: '35px' }}>
                 <div className="portrait-hover" style={{ width: 140, height: 140, borderRadius: '44px', border: '6px solid #fff', overflow: 'hidden', boxShadow: '0 25px 50px rgba(61, 31, 194, 0.08)', background: '#f8fafc', transition: '0.4s cubic-bezier(0.2, 0.8, 0.2, 1)', cursor: 'default' }}>
                    <img src="/assets/founder.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="CEO" />
                 </div>
                 <div style={{ textAlign: 'left' }}>
                    <span style={{ display: 'inline-block', fontSize: '0.6rem', fontWeight: 1000, color: d_purp, letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '10px', background: 'rgba(61, 31, 194, 0.03)', padding: '2px 8px', borderRadius: '4px' }}>
                       • EXECUTIVE •
                    </span>
                    <h5 style={{ fontSize: '1.5rem', fontWeight: 1000, margin: '0 0 5px 0', letterSpacing: '-0.8px' }}>MUHAMMAD RAHAM</h5>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, fontWeight: 500, opacity: 0.8 }}>Founder & Principal Architect</p>
                 </div>
              </div>

              {/* LEVEL 2: DIRECTORS */}
              <div className="tree-level-container" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '100px' }}>
                 <div className="side-text-node" style={{ width: '45%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25px' }}>
                    <div className="portrait-hover" style={{ width: 110, height: 110, flexShrink: 0, borderRadius: '36px', border: '4px solid #fff', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', background: '#f8fafc', transition: '0.4s' }}>
                       <img src="/assets/huzaifa.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="CTO" />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                       <span style={{ display: 'inline-block', fontSize: '0.55rem', fontWeight: 1000, color: d_magenta, letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '8px' }}>
                          • DATA TECH •
                       </span>
                       <h5 style={{ fontSize: '1rem', fontWeight: 1000, margin: 0 }}>MUHAMMAD HUZAIFA</h5>
                       <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>Chief Tech Officer</p>
                    </div>
                 </div>
                 <div className="side-text-node" style={{ width: '45%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25px' }}>
                    <div className="portrait-hover" style={{ width: 110, height: 110, flexShrink: 0, borderRadius: '36px', border: '4px solid #fff', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', background: '#f8fafc', transition: '0.4s' }}>
                       <img src="/assets/arham.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="COO" />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                       <span style={{ display: 'inline-block', fontSize: '0.55rem', fontWeight: 1000, color: '#6366f1', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '8px' }}>
                          • OPERATIONS •
                       </span>
                       <h5 style={{ fontSize: '1rem', fontWeight: 1000, margin: 0 }}>MUHAMMAD ARHAM</h5>
                       <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>Chief Ops Officer</p>
                    </div>
                 </div>
              </div>

              {/* LEVEL 3: LEADERS */}
              <div className="side-text-node" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '100px', gap: '35px' }}>
                 <div className="portrait-hover" style={{ width: 140, height: 140, borderRadius: '44px', border: '6px solid #fff', overflow: 'hidden', boxShadow: '0 30px 70px rgba(61, 31, 194, 0.1)', background: '#f8fafc', transition: '0.4s cubic-bezier(0.2, 0.8, 0.2, 1)' }}>
                    <img 
                       src="/assets/huzaifa_mushtaq.jpeg" 
                       style={{ 
                          width: '100%', height: '100%', objectFit: 'cover',
                          transform: 'scale(2.0)', objectPosition: 'center 20%'
                       }} 
                       alt="Team Lead" 
                    />
                 </div>
                 <div style={{ textAlign: 'left' }}>
                    <span style={{ display: 'inline-block', fontSize: '0.65rem', fontWeight: 1000, color: d_purp, letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '10px', background: 'rgba(61, 31, 194, 0.03)', padding: '2px 8px', borderRadius: '4px' }}>
                       • ENGINEERING •
                    </span>
                    <h5 style={{ fontSize: '1.5rem', fontWeight: 1000, margin: '0 0 5px 0', letterSpacing: '-0.8px' }}>HUZAIFA MUSHTAQ</h5>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, fontWeight: 500, opacity: 0.8 }}>Technical Team Lead</p>
                 </div>
              </div>

              {/* LEVEL 4: EXPANSION */}
              <div className="tree-level-container" style={{ display: 'flex', justifyContent: 'center', gap: '22%' }}>
                 {[1, 2].map(i => (
                    <div key={i} style={{ textAlign: 'center' }}>
                       <div style={{ 
                          width: 85, height: 85, borderRadius: '30px', border: '2px dashed #cbd5e1', 
                          display: 'flex', alignItems: 'center', justifyContent: 'center', 
                          color: '#cbd5e1', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '2px',
                          background: 'rgba(0,0,0,0.01)', transition: '0.3s'
                       }}>
                          BOARD <br /> GROWTH
                       </div>
                       <p style={{ fontSize: '0.55rem', color: '#94a3b8', fontWeight: 1000, textTransform: 'uppercase', marginTop: '12px' }}>COMMING SOON</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* ── 💠 ULTRA-STYLIZED SERVICE GRID ───── */}
        <div style={{ textAlign: 'left', marginTop: '60px', borderTop: '1.5px solid #f1f5f9', paddingTop: '80px' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 1000, letterSpacing: '-1.5px', margin: 0 }}>Strategic Capabilities.</h2>
              <span className="tree-svg-desktop" style={{ fontSize: '0.65rem', fontWeight: 1000, color: '#bdc3c7', letterSpacing: '6px', textTransform: 'uppercase' }}>CORE.SERVICES</span>
           </div>
           
           <div className="service-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
              {services.map((s, i) => (
                <div key={i} className="card-hover" style={{ padding: '35px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderRadius: '36px', border: '1.5px solid #f1f5f9', transition: '0.5s cubic-bezier(0.2, 0.8, 0.2, 1)', cursor: 'default' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                      <div style={{ width: '45px', height: '45px', background: 'rgba(61, 31, 194, 0.04)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', border: '1.5px solid rgba(61, 31, 194, 0.1)' }}>{s.icon}</div>
                      <span style={{ fontSize: '0.55rem', fontWeight: 1000, color: d_purp, background: 'rgba(61, 31, 194, 0.05)', padding: '5px 10px', borderRadius: '6px', letterSpacing: '1px' }}>{s.tag}</span>
                   </div>
                   <h4 style={{ fontSize: '1.2rem', fontWeight: 1000, marginBottom: '12px', color: '#0f172a' }}>{s.title}</h4>
                   <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, fontWeight: 500, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
           </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
