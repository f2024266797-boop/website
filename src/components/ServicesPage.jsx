import React, { useEffect, useState, useRef } from 'react'
import Footer from './Footer'

const serviceList = [
   {
      id: 1,
      title: 'Mobile Architecture',
      desc: 'Developing high-performance, native-feel applications for iOS and Android reaching peak UX benchmarks.',
      summary: 'Architecting mission-critical mobility protocols. We deploy specialized native kernels and hybrid sharding engines to ensure absolute cross-platform state synchronization and sub-150ms interaction latency.',
      specs: [
         { label: 'Latency Protocol', value: 'L2 Real-time' },
         { label: 'Sync Engine', value: 'Bilateral State' },
         { label: 'Encryption', value: 'End-to-End L5' },
         { label: 'Runtime Depth', value: 'Native Core' }
      ],
      roadmap: [
         { phase: 'PHASE 01', step: 'User Flow Architectural Mapping' },
         { phase: 'PHASE 02', step: 'Kernel-Level Native Execution' },
         { phase: 'PHASE 03', step: 'Distributed State Syncing' },
         { phase: 'PHASE 04', step: 'Global Deployment & Security Audit' }
      ],
      stack: ['Swift', 'Kotlin', 'Flutter', 'Firebase', 'GraphQL', 'SwiftUI', 'Jetpack'],
      icon: '🧠'
   },
   {
      id: 2,
      title: 'Cloud Orchestration',
      desc: 'Building robust, scalable desktop and system-level software tailored for business growth.',
      summary: 'Deploying decentralized global node meshes. Our focus is on zero-point failure resilience and massive horizontal scaling using industrial-grade container orchestration and message brokering.',
      specs: [
         { label: 'Distributed Load', value: 'Unlimited' },
         { label: 'Fail-Safe', value: '99.999% Ready' },
         { label: 'Compute Level', value: 'Edge-Global' },
         { label: 'Node Meshing', value: 'L4 Internal' }
      ],
      roadmap: [
         { phase: 'PHASE 01', step: 'Infrastructure Mesh Analysis' },
         { phase: 'PHASE 02', step: 'Cluster & Container Deployment' },
         { phase: 'PHASE 03', step: 'Real-time Redundancy Testing' },
         { phase: 'PHASE 04', step: 'Global Scaling Protocol Release' }
      ],
      stack: ['Rust', 'Go', 'Docker', 'Kubernetes', 'Aria2-Core', 'Terraform', 'Vault'],
      icon: '⚙️'
   },
   {
      id: 3,
      title: 'Hyper Platforms',
      desc: 'Crafting responsive, secure, and fast web platforms using modern architectural standards.',
      summary: 'Next-generation enterprise ecosystems engineered for extreme speed. Utilizing Edge-computed SSR and sharded payload delivery to handle peak global concurrency with zero latency drift.',
      specs: [
         { label: 'Payload Delta', value: 'Minimized' },
         { label: 'Edge Latency', value: '<40ms' },
         { label: 'Vulnerability', value: 'Zero-Grade' },
         { label: 'CDN Matrix', value: 'Multi-Region' }
      ],
      roadmap: [
         { phase: 'PHASE 01', step: 'Logic Core Mapping' },
         { phase: 'PHASE 02', step: 'SSR Layering Execution' },
         { phase: 'PHASE 03', step: 'Edge-CDN Sharding' },
         { phase: 'PHASE 04', step: 'Production Stress Hardening' }
      ],
      stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'TypeScript', 'Prisma'],
      icon: '🌐'
   },
   {
      id: 4,
      title: 'Neural AI RAG-Ops',
      desc: 'Engineering custom RAG-based LLMs and predictive models to automate complex decision-making.',
      summary: 'Translating research-grade neural intelligence into production environments. We specialize in RAG-Ops and vector state machines that deliver objective decision logic at millisecond inference speeds.',
      specs: [
         { label: 'Inference Speed', value: 'Turbo' },
         { label: 'Context Density', value: 'High' },
         { label: 'Bias Guardrails', value: 'Strict L1' },
         { label: 'Model Weight', value: 'Quantized' }
      ],
      roadmap: [
         { phase: 'PHASE 01', step: 'Vector Embedding Strategy' },
         { phase: 'PHASE 02', step: 'Database RAG Hub Integration' },
         { phase: 'PHASE 03', step: 'LLM Fine-Tuning Execution' },
         { phase: 'PHASE 04', step: 'Neural Production Deployment' }
      ],
      stack: ['PyTorch', 'Pinecone', 'LangChain', 'OpenAI', 'Llama-3', 'HuggingFace'],
      icon: '🧬'
   },
   {
      id: 5,
      title: 'Logic Tech Audit',
      desc: 'Rigorous QA and automated testing protocols ensuring your products are bug-free and efficient.',
      summary: 'Comprehensive quality engineering protocols designed to eliminate technical debt. We conduct L5-level stress testing and code architecture audits to secure your digital assets.',
      specs: [
         { label: 'Audit Depth', value: 'L5 Full' },
         { label: 'Core Coverage', value: '100% Sync' },
         { label: 'Debt reduction', value: 'Target 0' },
         { label: 'Regression Rate', value: 'Minimized' }
      ],
      roadmap: [
         { phase: 'PHASE 01', step: 'Systemic Architecture Review' },
         { phase: 'PHASE 02', step: 'Automated CI/CD Sync' },
         { phase: 'PHASE 03', step: 'Heavy Load Stress Testing' },
         { phase: 'PHASE 04', step: 'Final Verification Report' }
      ],
      stack: ['Cypress', 'Playwright', 'Jest', 'Selenium', 'JMeter', 'Vitest'],
      icon: '🎯'
   },
   {
      id: 6,
      title: 'Agent Orchestration',
      desc: 'Seamlessly embedding intelligent AI agents into existing ecosystems for enhanced productivity.',
      summary: 'Automating high-impact business workflows through intelligent reasoning layers. Our orchestration mesh enables autonomous agents to interact natively with your existing software stack.',
      specs: [
         { label: 'Autonomy Level', value: 'Supervised' },
         { label: 'Workflow ROI', value: '+500%' },
         { label: 'Reasoning Engine', value: 'Vivid' },
         { label: 'Interaction API', value: 'Direct' }
      ],
      roadmap: [
         { phase: 'PHASE 01', step: 'Workflow Logic Audit' },
         { phase: 'PHASE 02', step: 'Reasoning Agent Design' },
         { phase: 'PHASE 03', step: 'Systemic Integration Mesh' },
         { phase: 'PHASE 04', step: 'Autonomous Loop Validation' }
      ],
      stack: ['API Hooks', 'Model Hosting', 'Workflow Logic Hub', 'Python', 'FastAPI'],
      icon: '🤖'
   }
]

export default function ServicesPage() {
   const primaryNavy = '#0f172a'
   const d_purp = '#3d1fc2'
   const brandMagenta = '#ff7eb3'
   const d_grad = 'linear-gradient(135deg, #ff7eb3 0%, #3d1fc2 100%)'
   const themeBorder = 'rgba(61,31,194,0.12)'

   const [selectedService, setSelectedService] = useState(null)
   const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
   const containerRef = useRef(null)

   // 🛑 NUCLEAR SCROLL JAIL 🛑
   useEffect(() => {
      if (selectedService) {
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
   }, [selectedService])

   const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePos({ x, y })
   }

   return (
      <div style={{ background: '#ffffff', minHeight: '100vh', color: '#0f172a', fontFamily: "'Outfit', sans-serif" }}>
         


         <main style={{ paddingTop: '100px', paddingBottom: '160px', position: 'relative', zIndex: 1, overflow: 'hidden', width: '100%' }}>
            <div style={{ maxWidth: '1420px', margin: '0 auto', padding: '0 40px', position: 'relative' }}>
               
               {/* 🌈 DESKTOP HERO MASTERPIECE (RESTORED V36/V38) 🌈 */}
               <div className="v41-hero-flex" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '140px', position: 'relative' }}>
                  <div className="v41-hero-text" style={{ textAlign: 'left', position: 'relative', zIndex: 10 }}>
                     <span style={{ fontSize: '0.76rem', fontWeight: 1000, color: '#94a3b8', letterSpacing: '6px', marginBottom: '30px', display: 'block' }}>STRATEGIC CAPABILITIES 01</span>
                     <h1 className="v41-hero-h1">
                        <span className="building-text-v41">Building</span> Digital <br />
                        <span style={{ background: d_grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Success.</span>
                     </h1>
                     <p className="v41-hero-para" style={{ maxWidth: '500px' }}>
                        Transforming technical complexity into mission-critical engineering solutions
                        built for industrial-scale production.
                     </p>
                  </div>

                  {/* RESTORED V29 ANIMATION STACK */}
                  <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={() => setMousePos({ x: 0, y: 0 })} className="v41-responsive-stack" style={{ position: 'absolute', top: '10px', right: '160px', width: '380px', height: '420px', zIndex: 0 }}>
                     <div className="v41-ambient-fog" />
                     
                     <div className="v41-module v41-mod-1" style={{ top: '40px', right: '0px', width: '190px', border: `1.2px solid ${d_purp}22`, zIndex: 3, transform: `rotate(-4deg) translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)` }}>
                        <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}><div className="v11-dot dot-r" /><div className="v11-dot dot-y" /><div className="v11-dot dot-g" /></div>
                        <span style={{ fontSize: '0.55rem', fontWeight: 1000, color: d_purp, letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>CORE KERNEL rs</span>
                        <div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#64748b', lineHeight: 1.6, fontFamily: 'monospace' }}>fn sync_engine() {'{'}<br />&nbsp;&nbsp;exec:para(14)<br />&nbsp;&nbsp;cache:clear()<br />{'}'}</div>
                     </div>

                     <div className="v41-module v41-mod-2" style={{ top: '100px', right: '60px', width: '240px', height: '240px', border: `1.2px solid ${d_purp}22`, borderRadius: '28px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `rotate(5deg) translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)` }}>
                        <div className="grid-flow-v41" style={{ width: '100%', height: '100%', backgroundSize: '30px 30px', backgroundImage: `radial-gradient(circle, ${d_purp}22 1.2px, transparent 1.2px)` }} />
                        <div className="v20-icon-glow" style={{ position: 'absolute' }}>
                           <svg width="80" height="80" viewBox="0 0 100 100" className="v41-mesh-icon">
                              <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke={d_purp} strokeOpacity="0.3" strokeWidth="2" />
                              <polygon points="50,25 75,37 75,63 50,75 25,63 25,37" fill="none" stroke={d_purp} strokeOpacity="0.2" strokeWidth="1" />
                           </svg>
                        </div>
                     </div>

                     <div className="v41-module v41-mod-3" style={{ top: '300px', right: '10px', width: '140px', background: '#000', color: '#fff', border: `1.2px solid ${d_purp}88`, zIndex: 2, transform: `rotate(2deg) translate(${mousePos.x * 35}px, ${mousePos.y * 35}px)` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><div className="v11-active-pulse" /><span style={{ fontSize: '0.45rem', fontWeight: 1000, letterSpacing: '2px' }}>LOGIC CORE</span></div>
                        <div className="v41-shimmer-vivid" style={{ fontSize: '0.85rem', fontWeight: 1000 }}>CORE PROTOCOL</div>
                     </div>

                     <div className="v41-module v41-mod-4" style={{ top: '10px', right: '220px', padding: '8px 15px', border: `1.2px solid ${d_purp}22`, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(15px)', zIndex: 4, transform: `rotate(-2deg) translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}>
                        <span style={{ fontSize: '0.55rem', fontWeight: 1000, color: d_purp, letterSpacing: '3px' }}>PROTOCOL ACTIVE</span>
                     </div>
                  </div>
               </div>

               {/* SERVICE GRID */}
               <div className="v41-grid-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                  {serviceList.map((s) => (
                     <div key={s.id} className="v41-service-card" style={{ border: `1.5px solid ${themeBorder}` }} onClick={() => setSelectedService(s)}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                           <div className="v41-icon-box">{s.icon}</div>
                        </div>
                        <h3 className="v41-title-label">{s.title}</h3>
                        <p className="v41-desc-text">{s.desc}</p>
                        
                        <div className="v41-explore-node">
                           <span className="v41-explore-text">EXPLORE</span>
                           <div className="v41-arrow-shift">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

            </div>
         </main>

         <Footer />

         {/* 🏆 THE ABSOLUTE FINAL SIDE DRAWER (NO UNDERSCORES, WORKING SCROLL) ───── */}
         {selectedService && (
            <div className="v41-drawer-overlay" onWheel={e => e.stopPropagation()} onTouchMove={e => e.stopPropagation()} onClick={() => setSelectedService(null)}>
               <div className="v41-side-window" onClick={e => e.stopPropagation()}>
                  <div className="v41-drawer-header">
                     <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="v41-active-dot" />
                        <span className="v41-head-shimmer">STRATEGIC PROTOCOL SYNC ACTIVE</span>
                     </div>
                     <button onClick={() => setSelectedService(null)} className="v41-close-btn">EXIT</button>
                  </div>
                  <div className="v41-drawer-scroll-jail">
                     <div className="v41-content-inner">
                        <section style={{ marginBottom: '60px' }}>
                           <div className="v41-metadata-label">MISSION VERTICAL REF 0{selectedService.id}</div>
                           <h2 className="v41-drawer-h2">{selectedService.title}</h2>
                           <p className="v41-narrative">{selectedService.summary}</p>
                        </section>
                        <section style={{ marginBottom: '60px' }}>
                           <h5 className="v41-section-label">PERFORMANCE SUCCESS MATRIX</h5>
                           <div className="v41-bento-grid">
                              {selectedService.specs.map((s, i) => (
                                 <div key={i} className="v41-bento-item">
                                    <span className="b-lbl">{s.label}</span>
                                    <span className="b-val">{s.value}</span>
                                 </div>
                              ))}
                           </div>
                        </section>
                        <section style={{ marginBottom: '60px' }}>
                           <h5 className="v41-section-label">STRATEGIC EXECUTION ROADMAP</h5>
                           <div className="v41-roadmap-flow">
                              {selectedService.roadmap.map((r, i) => (
                                 <div key={i} className="v41-roadmap-item">
                                    <div className="v41-phase-tag">{r.phase}</div>
                                    <div className="v41-phase-text">{r.step}</div>
                                 </div>
                              ))}
                           </div>
                        </section>
                        <div style={{ marginTop: '70px' }}>
                           <button onClick={() => window.location.href = '/contact'} className="v41-final-handshake">INITIATE PROTOCOL HANDSHAKE →</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}

         <style>{`
            @keyframes v41-slide { from { transform: translateX(100%); } to { transform: translateX(0); } }
            @keyframes v41-float { 0%, 100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-8px) rotate(-1deg); } }
            @keyframes v41-shimmer { to { background-position: 200% 0; } }
            @keyframes v41-grid-move { from { background-position: 0 0; } to { background-position: 60px 60px; } }

            .v41-hero-h1 { font-size: 4.2rem; font-weight: 1000; color: ${primaryNavy}; letter-spacing: -4px; line-height: 1; margin-bottom: 35px; }
            .v41-hero-para { font-size: 1.2rem; line-height: 1.6; color: #64748b; font-weight: 400; }
            .building-text-v41 { font-weight: 200; letter-spacing: 1px; color: #94a3b8; }
            
            .v41-ambient-fog { position: absolute; inset: -100px; background: radial-gradient(circle, rgba(61,31,194,0.06) 0%, transparent 70%); filter: blur(100px); z-index: -1; }
            .v41-module { position: absolute; padding: 18px; border-radius: 20px; background: #ffffff; box-shadow: 0 40px 100px rgba(0,0,0,0.06), inset 0 0 35px rgba(61,31,194,0.06); transition: 0.6s; cursor: pointer; overflow: hidden; }
            .v41-responsive-stack:hover .v41-module { border-color: ${d_purp}88 !important; box-shadow: 0 40px 100px rgba(61,31,194,0.12), inset 0 0 55px rgba(61,31,194,0.14); }
            .v41-mod-1 { animation: v41-float 6s ease-in-out infinite; }
            .v41-mod-2 .grid-flow-v41 { animation: v41-grid-move 10s linear infinite; }
            .v41-mesh-icon { animation: v41-rot 40s linear infinite; opacity: 0.3; }
            @keyframes v41-rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            .v41-shimmer-vivid { background: linear-gradient(90deg, #fff, ${brandMagenta}, #fff); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: v41-shimmer 1.5s linear infinite; }

            /* Cards Base */
            .v41-service-card { position: relative; background: #fff; border-radius: 26px; cursor: pointer; transition: 0.6s; padding: 50px; overflow: hidden; }
            .v41-service-card:hover { transform: translateY(-12px); border-color: ${d_purp} !important; box-shadow: 0 40px 80px rgba(61,31,194,0.08); }
            .v41-icon-box { width: 50px; height: 50px; border-radius: 14px; background: rgba(61,31,194,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; transition: 0.4s; }
            .v41-service-card:hover .v41-icon-box { background: ${d_purp}; color: #fff; transform: scale(1.1); }
            .v41-title-label { font-size: 1.8rem; font-weight: 1000; margin-bottom: 18px; color: ${primaryNavy}; letter-spacing: -1.5px; }
            .v41-desc-text { color: #64748b; line-height: 1.7; margin-bottom: 40px; }
            .v41-explore-node { display: flex; align-items: center; gap: 12px; }
            .v41-explore-text { font-size: 0.72rem; font-weight: 1000; color: #000; letter-spacing: 2px; }
            .v41-arrow-shift { transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1); color: #94a3b8; }
            .v41-service-card:hover .v41-arrow-shift { color: ${d_purp}; transform: translateX(8px); }

            /* Side Drawer Base (V41) */
            .v41-drawer-overlay { position: fixed; inset: 0; background: rgba(10,15,30,0.7); backdrop-filter: blur(20px); z-index: 100001; display: flex; justify-content: flex-end; overscroll-behavior: contain; }
            .v41-side-window { position: relative; background: #ffffff; display: flex; flex-direction: column; animation: v41-slide 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; height: 100vh; width: 40%; min-width: 480px; }
            .v41-drawer-header { padding: 22px 50px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; }
            .v41-active-dot { width: 8px; height: 8px; background: ${d_purp}; border-radius: 50%; box-shadow: 0 0 10px ${d_purp}; }
            .v41-head-shimmer { font-size: 0.58rem; font-weight: 1000; color: ${d_purp}; letter-spacing: 4px; }
            .v41-close-btn { background: #f8fafc; border: 1px solid #e2e8f0; padding: 6px 18px; border-radius: 30px; font-size: 0.65rem; font-weight: 1000; cursor: pointer; }
            .v41-drawer-scroll-jail { flex: 1; overflow-y: auto; scrollbar-width: thin; -webkit-overflow-scrolling: touch; }
            .v41-content-inner { padding: 60px 45px; }

            .v41-drawer-h2 { font-size: 2.6rem; font-weight: 1000; color: ${primaryNavy}; letter-spacing: -2.5px; margin-bottom: 30px; line-height: 1; }
            .v41-narrative { font-size: 1.15rem; font-weight: 300; color: #64748b; line-height: 1.75; }
            .v41-bento-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
            .v41-bento-item { padding: 25px; border-radius: 20px; border: 1px solid ${themeBorder}; }
            .v41-phase-tag { font-size: 0.6rem; font-weight: 1000; color: ${d_purp}; padding: 4px 10px; background: rgba(61,31,194,0.04); border-radius: 6px; }
            .v41-roadmap-item { display: flex; align-items: center; gap: 20px; padding: 15px 25px; background: #fdfdfd; border-radius: 18px; border: 1px solid #f1f5f9; }
            .v41-final-handshake { width: 100%; padding: 22px; background: #000; color: #fff; border-radius: 20px; font-weight: 1000; }

            /* ─── SURGICAL RESPONSIVE OVERRIDES (RECOVERED) ─── */
            @media (max-width: 1023px) {
               .v41-hero-flex { display: flex !important; flex-direction: column !important; align-items: center !important; text-align: center !important; }
               .v41-hero-text { order: 1 !important; margin-bottom: 60px !important; text-align: center !important; }
               .v41-responsive-stack { order: 2 !important; position: relative !important; right: auto !important; top: auto !important; margin: 0 auto 80px !important; scale: 0.85 !important; }
               .v41-grid-layout { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
               .v41-side-window { width: 100% !important; min-width: 100% !important; }
            }

            @media (max-width: 767px) {
               .v41-grid-layout { grid-template-columns: 1fr !important; }
               .v41-hero-h1 { font-size: 2.8rem !important; }
               .v41-responsive-stack { scale: 0.7 !important; margin-bottom: 40px !important; width: 320px !important; height: 320px !important; }
               .v41-hero-para { font-size: 1.1rem !important; margin: 0 auto !important; }
               .v41-side-window { animation: none !important; transform: translateX(0) !important; }
            }
         `}</style>
      </div>
   )
}
