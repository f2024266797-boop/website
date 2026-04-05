import React, { useEffect, useState, useRef } from 'react'
import Footer from './Footer'

const blogData = [
   {
      id: 1,
      tag: 'AI LABS ENGINEERING',
      title: 'Neural Orchestration: The Rise of Agentic Corporate Intelligence',
      desc: 'Architecting RAG-powered agents for mission-critical automation in 2026 enterprise ecosystems.',
      summary: 'The transition from static AI models to active, agentic systems marks the next phase of enterprise evolution. At Devnexes, we are engineering "Neural Orchestration" layers that allow AI agents to act within legacy ecosystems with absolute precision.',
      long: `Most current AI implementations are restricted to simple chat interfaces. While useful for basic querying, they lack the "Agency" required to perform complex corporate tasks. The primary barrier has been the disconnect between low-latency inference and high-integrity data access.\n\n### The Logical Engine: RAG v4.0\nRetrieval-Augmented Generation (RAG) is the structural spine of modern business logic. Unlike basic LLM implementations that suffer from hallucinations, our RAG architecture utilizes high-density vector embeddings stored in specialized clusters. This allow the AI to cross-reference every incoming prompt with a verified "Digital Knowledge Base" in real-time.`,
      specs: [
         { label: 'AGENCY LEVEL', value: 'L5 Autonomous' },
         { label: 'SYNC PROTOCOL', value: 'Real-time Vector' },
         { label: 'DATA INTEGRITY', value: 'L1 Verifiable' },
         { label: 'RUNTIME DELTA', value: '85% Efficiency' }
      ],
      tech: ['PineconeDB', 'LangChain', 'OpenAI Enterprise', 'Py-FastAPI'],
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop'
   },
   {
      id: 2,
      tag: 'CORE ENGINEERING',
      title: 'Rust vs Go: Solving Memory Safety in Industrial Cores',
      desc: 'Memory safety vs concurrency in high-load industrial cores and fintech infrastructures.',
      summary: 'When building systems that handle 10M+ concurrent transactions, language choice is a matter of survival. At Devnexes, we have transitioned our core mission-critical assets to a dual-core architecture using Rust and Golang.',
      long: `Memory safety is no longer optional for industrial-scale financial architecture. Rust’s ownership model eliminates these risks at compile-time by enforcing strict borrow-check rules. This means we catch memory-related bugs during development, not in production.\n\n### The Concurrency Mesh\nGolang remains our primary choice for high-concurrency microservices due to its lightweight goroutine sharding. The combination of Rust at the hardware edge and Go at the orchestration layer creates an impenetrable performance mesh.`,
      specs: [
         { label: 'SAFETY GRADE', value: 'L5 Memory' },
         { label: 'CORE THROUGHPUT', value: '10M+ RPS' },
         { label: 'LATENCY BENCH', value: 'Sub-ms Delta' },
         { label: 'PARALLELISM', value: 'Horizontal Scal' }
      ],
      tech: ['Rust 1.76', 'Golang 1.22', 'gRPC-Net', 'PostgreSQL'],
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop'
   },
   {
      id: 3,
      tag: 'UX PRECISION',
      title: 'The Mechanical Beauty of Functional UX Design',
      desc: 'Why industrial-grade tools deserve high-fidelity elite design systems.',
      summary: 'Enterprise tools should empower, not overwhelm. Devnexes Design System (DDS) focuses on high-contrast clarity and mechanical grid systems for elite performance.',
      long: `The Devnexes Design System priorities physical visual depth and executive readability over consumer-grade soft aesthetics. An interface for an engineer or an executive should feel like a cockpit: all the necessary levers within reach, presented with aesthetic authority.\n\n### Form Follows Logic\nWe utilize a strict 4px grid and high-frequency spacing protocols to ensure that high-density information remains scannable. Our "Information Hierarchy L1" strategy reduces cognitive load by 35%, allowing operators to make mission-critical decisions faster.`,
      specs: [
         { label: 'GRID STANDARD', value: '4px Industrial' },
         { label: 'CLARITY INDEX', value: 'L1 High-Vis' },
         { label: 'DECISION ROI', value: '+35% Velocity' },
         { label: 'DESIGN SYSTEM', value: 'DDS v2 Engine' }
      ],
      tech: ['Figma Engineering', 'React 18', 'Tailwind/SCSS'],
      img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop'
   }
]

export default function BlogPage() {
   const [selected, setSelected] = useState(null)
   const [filter, setFilter] = useState('ALL REPORTS')
   const d_purp = '#3d1fc2'
   const themeBorder = 'rgba(61,31,194,0.12)'

   // 🛑 SCROLL LOCK 🛑
   useEffect(() => {
      if (selected) {
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
   }, [selected])

   const filteredData = filter === 'ALL REPORTS' ? blogData : blogData.filter(b => b.tag === filter)

   return (
      <div style={{ background: '#fff', minHeight: '100vh', color: '#0f172a', fontFamily: "'Outfit', sans-serif" }}>


         <main style={{ paddingTop: '100px', paddingBottom: '160px', overflow: 'hidden', position: 'relative' }}>
            
            {/* 🌈 AMBIENT GLOW 🌈 */}
            <div className="v52-ambient-orb" />

            {/* 💎 ELITE HERO (FINAL TYPOGRAPHY) */}
            <section style={{ maxWidth: '1420px', margin: '0 auto', padding: '0 40px', textAlign: 'center', marginBottom: '100px', position: 'relative', zIndex: 1 }}>
               <span style={{ fontSize: '0.76rem', fontWeight: 1000, color: '#94a3b8', letterSpacing: '6px', marginBottom: '30px', display: 'block' }}>INTELLIGENCE REPORTS DEVNEXES LABS</span>
               <h1 className="v52-hero-title" style={{ fontSize: '5.2rem', fontWeight: 1000, color: '#0f172a', letterSpacing: '-4px', lineHeight: 1, marginBottom: '30px' }}>
                  <span style={{ fontWeight: 100, color: '#1e293b', letterSpacing: '3px', textShadow: '4px 4px 15px rgba(0,0,0,0.35)' }}>Engineering</span> <span style={{ color: '#ff7eb3', fontWeight: 1000 }}>Insights.</span>
               </h1>
               <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '650px', margin: '0 auto 60px', lineHeight: 1.6 }}>Deep-dives into neural automation, memory-safe architectures, and global-scale orchestration.</p>

               <nav className="v52-filters" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  {['ALL REPORTS', 'AI LABS ENGINEERING', 'CORE ENGINEERING', 'UX PRECISION'].map(item => (
                     <button key={item} onClick={() => setFilter(item)} className={`v52-pill ${filter === item ? 'active' : ''}`}>{item}</button>
                  ))}
               </nav>
            </section>

            {/* 🧱 PREMIUM BLOG GRID 🧱 */}
            <div className="container" style={{ maxWidth: '1420px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
               <div className="v52-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                  {filteredData.map((post) => (
                     <div key={post.id} className="v52-card" onClick={() => setSelected(post)}>
                        <div className="v52-media">
                           <div className="v52-corner-id">REF 0{post.id}</div>
                           <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="v52-body">
                           <span className="v52-tag">{post.tag}</span>
                           <h3 className="v52-title">{post.title}</h3>
                           <p className="v52-desc">{post.desc}</p>
                           <div className="v52-foot">
                              <div className="v52-explore">
                                 <span className="v52-extext">OPEN DIRECTIVE</span>
                                 <div className="v52-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                              </div>
                              <span className="v52-brand-tag">DEVNEXES DIGITAL SOLUTIONS</span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </main>

         <Footer />

         {/* 🏆 THE SURGICAL EFFICIENT DRAWER (V52) ───── */}
         {selected && (
            <div className="v52-drawer-overlay" onWheel={e => e.stopPropagation()} onTouchMove={e => e.stopPropagation()} onClick={() => setSelected(null)}>
               <div className="v52-side-window" onClick={e => e.stopPropagation()}>
                  <div className="v52-header">
                     <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="v52-active-point" />
                        <span className="v52-shimmer-head">REPORT ARCHIVE MISSION L5</span>
                     </div>
                     <button onClick={() => setSelected(null)} className="v52-close-pill">EXIT</button>
                  </div>

                  <div className="v52-scroll-jail">
                     <div className="v52-inner">
                        <section style={{ marginBottom: '50px' }}>
                           <div className="v52-meta-label">STRATEGIC MONOGRAPH REF 0{selected.id}</div>
                           <h2 className="v52-h2">{selected.title}</h2>
                           <p className="v52-summary">{selected.summary}</p>
                        </section>

                        <section style={{ marginBottom: '50px' }}>
                           <div className="v52-visual"><img src={selected.img} alt="Visual" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                        </section>

                        <section style={{ marginBottom: '50px' }}>
                           <h5 className="v52-sec-label">01 TECHNICAL ANALYSIS</h5>
                           <div className="v52-long-text">
                              {selected.long.split('\n\n').map((chunk, i) => (
                                 chunk.startsWith('###') ? <h3 key={i} className="v52-h3-sub">{chunk.replace('###', '')}</h3> : <p key={i} className="v52-p">{chunk}</p>
                              ))}
                           </div>
                        </section>

                        {/* ⚡ THE SURGICAL EFFICIENT BENTO (V52: SOLVING CLUTTER) ⚡ */}
                        <section style={{ marginBottom: '50px' }}>
                           <h5 className="v52-sec-label">02 PERFORMANCE MATRIX</h5>
                           <div className="v52-bento-grid">
                              {selected.specs.map((s, i) => (
                                 <div key={i} className="v52-bento-item">
                                    <span className="b-lbl-efficient">{s.label}</span>
                                    <div className="b-val-efficient">{s.value}</div>
                                 </div>
                              ))}
                           </div>
                        </section>

                        <div style={{ marginTop: '70px', padding: '40px', background: '#f8fafc', borderRadius: '24px' }}>
                           <h4 style={{ fontSize: '1.2rem', fontWeight: 1000, marginBottom: '10px' }}>Strategic Architectural Session?</h4>
                           <button onClick={() => window.location.href = '/contact'} className="v52-final-cta">INITIATE STRATEGY PROTOCOL →</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}

         <style>{`
            @keyframes v52-slide { from { transform: translateX(100%); } to { transform: translateX(0); } }
            @keyframes v52-fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

            .v52-ambient-orb { position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 800px; height: 600px; background: radial-gradient(circle, rgba(61,31,194,0.04) 0%, transparent 70%); filter: blur(80px); z-index: 0; pointer-events: none; }

            .v52-pill { background: #fff; border: 1.5px solid #f2f2f5; padding: 12px 28px; border-radius: 50px; font-size: 0.65rem; font-weight: 1000; color: #94a3b8; cursor: pointer; letter-spacing: 2px; }
            .v52-pill.active { background: #0f172a; color: #fff; border-color: #0f172a; }

            /* 🧱 COMPACT PREMIUM CARDS (V54) 🧱 */
            .v52-card { background: #fff; border-radius: 28px; cursor: pointer; transition: 0.7s cubic-bezier(0.16, 1, 0.3, 1); border: 1.5px solid rgba(15,23,42,0.06); box-shadow: inset 0 0 50px rgba(61,31,194,0.01); animation: v52-fade-in 1s ease-out; position: relative; overflow: hidden; }
            .v52-card:hover { transform: translateY(-10px); border-color: ${d_purp}88 !important; box-shadow: 0 40px 80px rgba(61,31,194,0.06); }
            
            .v52-media { height: 210px; overflow: hidden; position: relative; }
            .v52-corner-id { position: absolute; top: 15px; right: 15px; background: rgba(0,0,0,0.8); color: #fff; font-size: 0.45rem; font-weight: 1000; padding: 5px 10px; border-radius: 6px; z-index: 2; letter-spacing: 2px; }
            .v52-media img { transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1); opacity: 0.9; }
            .v52-card:hover .v52-media img { transform: scale(1.06); opacity: 1; }

            .v52-body { padding: 32px; }
            .v52-tag { font-size: 0.55rem; font-weight: 1000; color: ${d_purp}; letter-spacing: 4px; display: inline-block; padding: 5px 12px; background: rgba(61,31,194,0.04); border-radius: 30px; margin-bottom: 20px; }
            .v52-title { font-size: 1.5rem; font-weight: 1000; color: #0f172a; line-height: 1.25; letter-spacing: -1px; margin-bottom: 15px; transition: 0.4s; }
            .v52-card:hover .v52-title { color: ${d_purp}; }
            .v52-desc { font-size: 0.9rem; color: #64748b; line-height: 1.6; margin-bottom: 30px; }

            .v52-foot { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding-top: 25px; border-top: 1.5px solid #f8fafc; }
            .v52-explore { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
            .v52-extext { font-size: 0.72rem; font-weight: 1000; color: #000; letter-spacing: 2px; }
            .v52-arrow { transition: 0.4s; color: #cbd5e1; flex-shrink: 0; }
            .v52-card:hover .v52-arrow { color: ${d_purp}; transform: translateX(8px); }
            .v52-brand-tag { font-size: 0.48rem; font-weight: 1000; color: #cbd5e1; letter-spacing: 1.5px; text-align: right; line-height: 1.4; opacity: 0.8; }

            /* Side Drawer Base */
            .v52-drawer-overlay { position: fixed; inset: 0; background: rgba(10,15,30,0.73); backdrop-filter: blur(25px); z-index: 100001; display: flex; justify-content: flex-end; }
            .v52-side-window { position: relative; background: #ffffff; display: flex; flex-direction: column; animation: v52-slide 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; height: 100vh; width: 38%; min-width: 480px; }
            .v52-header { padding: 22px 45px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; flex-shrink: 0; }
            .v52-active-point { width: 7px; height: 7px; background: ${d_purp}; border-radius: 50%; }
            .v52-shimmer-head { font-size: 0.58rem; font-weight: 1000; color: ${d_purp}; letter-spacing: 4px; }
            .v52-close-pill { background: #f8fafc; border: 1px solid #e2e8f0; padding: 6px 18px; border-radius: 30px; font-size: 0.65rem; font-weight: 1000; cursor: pointer; transition: 0.25s; }
            .v52-close-pill:hover { background: #000; color: #fff; }
            .v52-scroll-jail { flex: 1; overflow-y: auto; scrollbar-width: thin; -webkit-overflow-scrolling: touch; }
            .v52-inner { padding: 60px 45px; }

            .v52-meta-label { font-size: 0.62rem; font-weight: 1000; color: #cbd5e1; letter-spacing: 3px; margin-bottom: 15px; }
            .v52-h2 { font-size: 2.3rem; font-weight: 1000; color: #0f172a; letter-spacing: -2px; margin-bottom: 25px; line-height: 1.1; }
            .v52-summary { font-size: 0.95rem; color: #64748b; line-height: 1.7; font-style: italic; border-left: 2.5px solid ${d_purp}33; padding-left: 20px; margin-bottom: 35px; }
            .v52-visual { width: 100%; height: 320px; border-radius: 20px; overflow: hidden; background: #f1f5f9; }
            .v52-sec-label { font-size: 0.58rem; font-weight: 1000; color: #94a3b8; letter-spacing: 3px; margin-bottom: 25px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; }
            .v52-h3-sub { font-size: 1.4rem; font-weight: 1000; color: #0f172a; margin: 40px 0 15px; }
            .v52-p { font-size: 0.92rem; line-height: 1.7; color: #475569; margin-bottom: 20px; }

            /* ⚡ EFFICIENT BENTO MATRIX (V52) ⚡ */
            .v52-bento-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
            .v52-bento-item { padding: 22px; border-radius: 18px; border: 1.5px solid ${themeBorder}; background: #ffffff; transition: 0.4s; overflow: hidden; position: relative; }
            .v52-bento-item:hover { border-color: ${d_purp}; background: rgba(61,31,194,0.01); }
            
            .b-lbl-efficient { font-size: 0.5rem; font-weight: 1000; color: #94a3b8; letter-spacing: 2px; text-transform: uppercase; display: block; margin-bottom: 10px; }
            .b-val-efficient { font-size: 1.05rem; font-weight: 1000; color: #0f172a; letter-spacing: -0.5px; line-height: 1.2; }

            .v52-final-cta { width: 100%; padding: 22px; background: #000; color: #fff; border-radius: 20px; font-weight: 1000; }

            @media (max-width: 1024px) {
               .v52-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 30px !important; }
               .v52-side-window { width: 100% !important; min-width: 100% !important; }
            }
            @media (max-width: 768px) {
               .v52-hero-title { font-size: 3rem !important; letter-spacing: -2px !important; }
               .v52-grid { grid-template-columns: 1fr !important; gap: 25px !important; }
               .v52-body { padding: 30px !important; }
               .v52-h2 { font-size: 1.8rem !important; }
               .v52-inner { padding: 40px 25px !important; }
               .v52-bento-grid { grid-template-columns: 1fr !important; }
               .v52-ambient-orb { width: 400px; height: 300px; }
            }
         `}</style>
      </div>
   )
}
