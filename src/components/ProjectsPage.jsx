import React, { useEffect, useState } from 'react'
import Footer from './Footer'

const projectsData = [
   {
      id: 1, title: 'Cortex IDE', category: 'Software', status: 'Stable', v: 'v2.1',
      desc: 'Next-gen IDE with neural predictive loops and agentic code generation.',
      img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200',
      metrics: ['95% Auto-Code', 'Low Latency', '0-Lag Editing', 'Neural Predict'],
      stack: ['Rust', 'Wasm', 'TypeScript', 'LLVM'],
      spec: 'A surgical development environment designed for high-end agentic workflows. Cortex integrates local neural models to predict complex architectural patterns, reducing manual boilerplate by 90%. It features a kernel-level memory management system for zero-lag editing across massive monorepos, real-time collaborative cursors, and a built-in AI reviewer that flags logical errors before compilation.',
      deliverables: ['Agentic code completion engine', 'Multi-language LSP fusion core', 'Real-time pair programming mesh', 'Built-in AI code reviewer', 'Kernel memory optimizer'],
      price: '$180/mo',
      planName: 'Studio Hub',
      planDesc: 'Full team environment with shared intelligence and collaborative editing.',
      features: ['Up to 12 Seats', 'Neural Code Prediction (Advanced)', 'Unlimited completions', 'Shared RAG Knowledge Base', 'Priority Support', 'CI/CD Integration']
   },
   {
      id: 2, title: 'LexiBase Chat', category: 'Database', status: 'Live', v: 'v1.4',
      desc: 'Transform raw SQL databases into conversational semantic layers with RAG-logic.',
      img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200',
      metrics: ['Natural SQL', '99% Accuracy', 'ACID Compliant', 'Real-time Query'],
      stack: ['Python', 'PostgreSQL', 'pgvector', 'FastAPI'],
      spec: 'LexiBase bridges the gap between complex database schemas and natural language. It utilizes vectorized semantic indexing to allow non-technical stakeholders to query real-time data using conversational English. The engine maintains 100% ACID compliance, supports multi-tenant isolation, and delivers sub-50ms query translation across billion-row datasets with industrial-grade encryption at rest.',
      deliverables: ['Natural language query engine', 'Vectorized semantic index layer', 'Multi-DB connection manager', 'Access control & audit logs', 'REST & GraphQL API export'],
      price: '$150/mo',
      planName: 'Core Query',
      planDesc: 'Multi-database integration with custom RAG and advanced analytics.',
      features: ['Up to 10 DB Connections', 'Advanced RAG Engine', '1M queries/month', 'Custom Embedding Models', 'Audit Logs & RBAC', 'Slack/Teams Integration']
   },
   {
      id: 3, title: 'Vanguard Security', category: 'Cyber', status: 'Critical', v: 'v3.0',
      desc: 'Autonomous threat neutralization agent for decentralized enterprise networks.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200',
      metrics: ['Zero-Day Shield', '99% Kill Rate', 'eBPF Kernel', '<1ms Response'],
      stack: ['C', 'eBPF', 'Rust', 'Kubernetes'],
      spec: 'Vanguard is an autonomous security kernel that operates at the eBPF layer. It monitors system calls in real-time to detect and neutralize advanced persistent threats (APTs) before they reach the application layer. The engine runs a holographic defense mesh across distributed cloud environments, maintaining a live threat graph that adapts to emerging zero-day exploits without requiring signature updates.',
      deliverables: ['eBPF kernel monitor agent', 'Autonomous threat neutralization', 'Live threat graph dashboard', 'Zero-day pattern detection', 'Incident response playbooks'],
      price: '$250/mo',
      planName: 'Net Shield',
      planDesc: 'Network-wide autonomous defense for growing engineering organizations.',
      features: ['Up to 50 Nodes', 'Autonomous Threat Neutralization', 'Live Threat Graph', 'Slack Incident Alerts', 'Custom Playbooks', 'Quarterly Pentest Report']
   },
   {
      id: 4, title: 'ChatMind', category: 'Messaging', status: 'Production', v: 'v2.2',
      desc: 'Secure encrypted messaging with integrated AI assistant agents.',
      img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200',
      metrics: ['E2EE Sync', '100M Scale', 'On-Device AI', 'Zero Data Leak'],
      stack: ['Elixir', 'Flutter', 'WebRTC', 'Signal Protocol'],
      spec: 'ChatMind combines military-grade end-to-end encryption with local-first AI processing. Unlike traditional messengers, ChatMind hosts personalized AI agents directly on the device — ensuring zero data exposure to external servers. Agents handle workflows, scheduling, and deep data analysis privately within chats, while the distributed Elixir backend handles 100M+ concurrent sessions with sub-100ms message delivery globally.',
      deliverables: ['E2EE messaging core', 'On-device AI agent runtime', 'Multi-platform Flutter client', 'Workflow automation SDK', 'Admin broadcast & compliance tools'],
      price: '$99/mo',
      planName: 'Agent Max',
      planDesc: 'Multi-agent orchestration with advanced workflow automation across teams.',
      features: ['Up to 200 Users', 'Multi-Agent Orchestration', 'Workflow Automation SDK', 'File Sharing (100GB)', 'Desktop & Web Client', 'Custom AI Personas']
   },
   {
      id: 5, title: 'EduAI Hub', category: 'Education', status: 'Stable', v: 'v1.1',
      desc: 'Adaptive neural feedback education platform with biometric tracking.',
      img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200',
      metrics: ['40% Retention Boost', 'L5 Adaptive', 'Biometric Input', 'Real-time Path'],
      stack: ['React', 'TensorFlow', 'Python', 'WebGL'],
      spec: 'EduAI Hub uses deep learning to customize curriculum paths in real-time. By analyzing engagement metrics and biometric feedback (via optional sensor integration), the platform identifies learning plateaus and automatically reconfigures challenging concepts into personalized modules. The system tracks knowledge decay curves, delivers spaced repetition schedules, and provides educator dashboards with per-student neural engagement heatmaps.',
      deliverables: ['Adaptive curriculum engine', 'Biometric engagement tracker', 'Educator analytics dashboard', 'Spaced repetition scheduler', 'LMS integration (LTI 1.3)'],
      price: '$160/mo',
      planName: 'Academy Hub',
      planDesc: 'Full platform for schools with educator dashboards and class analytics.',
      features: ['Up to 500 Students', 'Full Adaptive Engine', 'Educator Dashboard', 'Biometric Tracking (Optional)', 'LMS Integration', 'Parent Portal']
   },
   {
      id: 6, title: 'Voyager AR', category: 'Travel', status: 'Live', v: 'v2.0',
      desc: 'Geospatial travel orchestrator with high-fidelity AR navigation layers.',
      img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200',
      metrics: ['100% Offline', 'AR Mapping', 'Digital Twin', 'Multi-Lang'],
      stack: ['Unity', 'C++', 'Swift', 'ARKit'],
      spec: 'Voyager AR redefines geospatial exploration using high-fidelity augmented reality. It creates a digital twin of physical landmarks, providing historical overlays, real-time translations, and interactive wayfinding that operates completely offline using edge-mapping technology. The platform supports custom branded AR experiences for tourism agencies, with proprietary spatial anchoring that remains accurate to within 5cm in open environments.',
      deliverables: ['Offline AR navigation engine', 'Digital twin landmark system', 'Real-time translation overlay', 'Custom AR experience builder', 'Agency white-label SDK'],
      price: '$199/mo',
      planName: 'Global AR',
      planDesc: 'Unlimited global AR twin access with premium overlays and analytics.',
      features: ['Global AR Access', 'Historical & Cultural Overlays', '40+ Languages', 'Analytics Dashboard', 'Custom POI Editor', 'API Access']
   }
]

const CATEGORIES = ['All', 'Software', 'Database', 'Cyber', 'Messaging', 'Education', 'Travel']

export default function ProjectsPage() {
   const [filter, setFilter] = useState('All')
   const [selected, setSelected] = useState(null)
   const c_mix = 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
   const c_purp = '#a855f7'
   const c_pink = '#ec4899'

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   useEffect(() => {
      if (selected) {
         document.body.style.overflow = 'hidden'
      } else {
         document.body.style.overflow = 'unset'
      }
      return () => { document.body.style.overflow = 'unset' }
   }, [selected])

   const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter)

   return (
      <div className="v104-root">

         <main className="v104-main">
            
            {/* HER0 V117 */}
            <section className="v104-hero">
               <div className="v104-mesh-layer" />
               <div className="v104-glow-eff" />
               <div className="proj-container">
                  <div className="v104-hero-flex">
                     <div className="v104-hero-info">
                        <div className="v104-eyebrow"><span className="v104-dot" /><span className="v104-tag">Institutional Product Repository</span></div>
                        <h1 className="v104-h1"><span className="v104-thin">Building</span> <span className="v104-bold">what</span> <br /><span className="v104-mix">matters.</span></h1>
                        <p className="v104-desc">Surgical precision in digital architecture. Explore our specialized project environment portfolio.</p>
                        
                        <div className="v104-filters">
                           {CATEGORIES.map(cat => (
                              <button key={cat} onClick={() => setFilter(cat)} className={`v104-cat-btn ${filter === cat ? 'active' : ''}`}>{cat}</button>
                           ))}
                        </div>
                     </div>

                     <div className="v104-portal">
                        <div className="v104-cta-card">
                           <div className="v104-cta-head"><span className="v104-f-lbl">Strategy Initiator</span><div className="v104-f-pulse" /></div>
                           <h2 className="v104-cta-h2">Ready to deploy?</h2>
                           <p className="v104-cta-p">Connect with our engineering masters to begin your institutional strategy proposal.</p>
                           <button onClick={() => window.location.href='/contact'} className="v104-cta-btn">Send Proposal →</button>
                           <div className="v104-neon-rim" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* GRID V119 */}
            <div className="v118-grid-sec">
               <div className="proj-container">
                  <div className="v118-grid">
                     {filteredProjects.map((proj) => (
                        <div key={proj.id} className="v118-card" onClick={() => setSelected(proj)}>
                           <div className="v118-media">
                              <img src={proj.img} alt={proj.title} crossOrigin="anonymous" />
                              <div className="v118-overlay-glow" />
                              <div className="v118-badge-tier">{proj.price} Starting</div>
                              <div className="v119-meta-bar">
                                 <div className="v119-meta-cat">{proj.category}</div>
                                 <div className={`v119-meta-stat ${proj.status.toLowerCase()}`}>
                                    <span className="v119-pulse" />
                                    {proj.status}
                                 </div>
                              </div>
                           </div>
                           <div className="v118-body">
                              <h3 className="v118-h3">{proj.title}</h3>
                              <p className="v118-desc-txt">{proj.desc}</p>
                              <div className="v118-stack-mesh">
                                 {proj.stack?.map(s => <span key={s} className="v118-s-chip">{s}</span>)}
                              </div>
                              <div className="v118-footer">
                                 <div className="v118-version-id">{proj.v}</div>
                                 <div className="v118-right">
                                    <div className="v118-price-tag">{proj.price}</div>
                                    <span className="v118-details-link">Details →</span>
                                 </div>
                              </div>
                           </div>
                           <div className="v118-holographic-rim" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </main>
         <Footer />

         {/* 🏆 MISSION CONTROL DRAWER (V121 FIX) 🏆 */}
         {selected && (
            <div className="v120-overlay" onClick={() => setSelected(null)}>
               <div className="v120-drawer" onClick={e => e.stopPropagation()}>
                  
                  <div className="v120-head">
                     <div className="v120-h-left">
                        <div className="v120-status-dot" />
                        <span className="v120-session-id">MISSION ID: {selected.id}00X9</span>
                     </div>
                     <button className="v120-close" onClick={() => setSelected(null)}>EXIT MISSION</button>
                  </div>

                  {/* SCROLLABLE AREA — data-lenis-prevent stops Lenis hijacking scroll */}
                  <div className="v120-scroll-area" data-lenis-prevent>
                     <div className="v120-inner">
                        
                        <div className="v120-identity">
                           <div className="v120-badge">{selected.category} PORTFOLIO</div>
                           <h2 className="v120-title">{selected.title}</h2>
                           <p className="v120-tagline">{selected.desc}</p>
                        </div>

                        <div className="v120-media-hero">
                           <img src={selected.img} alt="Hero" />
                           <div className="v120-v-tag">{selected.v} INSTITUTIONAL</div>
                        </div>

                        {/* 01 / TECHNICAL DNA */}
                        <section className="v120-section">
                           <h5 className="v120-sec-lbl">01 / TECHNICAL DNA</h5>
                           <p className="v120-spec-txt">{selected.spec}</p>
                           <div className="v120-metrics-grid">
                              {selected.metrics?.map(m => (
                                 <div key={m} className="v120-metric-card">
                                    <span className="v120-m-val">{m}</span>
                                    <span className="v120-m-lbl">KPI TARGET</span>
                                 </div>
                              ))}
                           </div>
                        </section>

                        {/* 02 / DELIVERABLES */}
                        {selected.deliverables && (
                           <section className="v120-section">
                              <h5 className="v120-sec-lbl">02 / KEY DELIVERABLES</h5>
                              <ul className="v120-deliverables-list">
                                 {selected.deliverables.map(d => (
                                    <li key={d} className="v120-del-item">
                                       <span className="v120-del-dot">▸</span>
                                       {d}
                                    </li>
                                 ))}
                              </ul>
                           </section>
                        )}

                        {/* 03 / INVESTMENT ARCHITECTURE */}
                        <section className="v120-section">
                           <h5 className="v120-sec-lbl">03 / INVESTMENT ARCHITECTURE</h5>
                           <div className="v121-plan-card popular">
                              <div className="v121-popular-tag">INSTITUTIONAL TIER</div>
                              <div className="v121-p-header">
                                 <span className="v121-p-name">{selected.planName}</span>
                                 <span className="v121-p-price">{selected.price}</span>
                              </div>
                              <p className="v121-p-desc">{selected.planDesc}</p>
                              {selected.features && (
                                 <ul className="v121-features-list">
                                    {selected.features.map(f => (
                                       <li key={f} className="v121-feat-item">
                                          <span className="v121-feat-check">✓</span>
                                          {f}
                                       </li>
                                    ))}
                                 </ul>
                              )}
                              <div className="v121-p-neon" />
                           </div>
                        </section>

                        {/* 04 / STACK MAPPING */}
                        <section className="v120-section">
                           <h5 className="v120-sec-lbl">04 / STACK MAPPING</h5>
                           <div className="v120-stack-wrap">
                              {selected.stack?.map(s => (
                                 <div key={s} className="v120-stack-pill">{s}</div>
                              ))}
                           </div>
                        </section>

                        <div style={{ paddingBottom: '50px' }}>
                           <button onClick={() => window.location.href='/contact'} className="v120-cta-final">INITIATE DEPLOYMENT PROTOCOL →</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}

         <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=JetBrains+Mono:wght@800&display=swap');
            
            .v104-root { background: #fff; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; color: #1e293b; overflow-x: hidden; }
            .proj-container { max-width: 1240px; margin: 0 auto; padding: 0 40px; }
            .v104-hero { padding: 130px 0 100px 0; background: #fff; border-bottom: 1.5px solid #f8fafc; position: relative; overflow: hidden; }
            .v104-mesh-layer { position: absolute; inset: 0; background-image: radial-gradient(rgba(148,163,184,0.18) 1.2px, transparent 1.2px); background-size: 35px 35px; opacity: 0.6; }
            .v104-glow-eff { position: absolute; width: 500px; height: 500px; border-radius: 50%; filter: blur(100px); background: ${c_purp}12; top: -10%; left: -5%; opacity: 0.12; }
            .v104-hero-flex { display: flex; align-items: center; justify-content: space-between; gap: 80px; position: relative; z-index: 10; }
            .v104-hero-info { flex: 1.2; text-align: left; }
            .v104-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 25px; }
            .v104-tag { font-size: 0.72rem; font-weight: 700; color: #94a3b8; letter-spacing: 1.5px; text-transform: uppercase; }
            .v104-dot { width: 5px; height: 5px; background: ${c_pink}; border-radius: 50%; box-shadow: 0 0 10px ${c_pink}; }
            .v104-h1 { font-size: 3.8rem; letter-spacing: -2.8px; line-height: 1.05; color: #0f172a; margin-bottom: 30px; }
            .v104-thin { font-weight: 200 !important; color: #475569; }
            .v104-bold { font-weight: 800 !important; color: #0f172a; }
            .v104-mix { font-weight: 800 !important; background: ${c_mix}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .v104-desc { font-size: 1.15rem; color: #64748b; max-width: 500px; line-height: 1.7; margin-bottom: 45px; }
            .v104-cat-btn { background: #fff; border: 1.5px solid #f1f5f9; padding: 11px 24px; border-radius: 12px; font-size: 0.88rem; font-weight: 600; cursor: pointer; transition: 0.3s; color: #64748b; }
            .v104-cat-btn.active { background: ${c_mix}; color: #fff; border-color: transparent; }
            .v104-filters { display: flex; gap: 10px; flex-wrap: wrap; }
            .v104-portal { flex: 0.85; }
            .v104-cta-card { background: #fff; border-radius: 35px; padding: 45px; position: relative; box-shadow: 0 40px 80px rgba(0,0,0,0.02); }
            .v104-neon-rim { position: absolute; inset: -1.8px; z-index: -1; border-radius: 37px; background: ${c_mix}; opacity: 0.35; }
            .v104-cta-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 25px; border-bottom: 1.5px solid #f8fafc; padding-bottom: 15px; }
            .v104-f-lbl { font-size: 0.65rem; font-weight: 800; color: #cbd5e1; letter-spacing: 3px; text-transform: uppercase; }
            .v104-f-pulse { width: 6px; height: 6px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; }
            .v104-cta-h2 { font-size: 1.65rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; }
            .v104-cta-p { font-size: 0.95rem; color: #64748b; line-height: 1.6; margin-bottom: 30px; }
            .v104-cta-btn { width: 100%; background: ${c_mix}; color: #fff; border: none; padding: 22px; border-radius: 14px; font-weight: 800; font-size: 1.1rem; cursor: pointer; transition: 0.3s; }
            .v118-grid-sec { background: #fdfdfe; padding: 100px 0 160px; }
            .v118-grid { display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 50px; }
            .v118-card { background: #fff; border-radius: 36px; border: 1.8px solid #f1f5f9; cursor: pointer; overflow: hidden; position: relative; transition: 0.8s; display: flex; flex-direction: column; }
            .v118-card:hover { transform: translateY(-12px); border-color: ${c_purp}; box-shadow: 0 40px 80px rgba(168,85,247,0.1); }
            .v118-holographic-rim { position: absolute; inset: -2px; z-index: -1; border-radius: 38px; background: ${c_mix}; opacity: 0; transition: 0.5s; }
            .v118-card:hover .v118-holographic-rim { opacity: 0.5; }
            .v118-media { height: 260px; position: relative; overflow: hidden; background: #000; }
            .v118-media img { width: 100%; height: 100%; object-fit: cover; transition: 1.2s; }
            .v118-overlay-glow { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); }
            .v118-badge-tier { position: absolute; top: 20px; right: 20px; background: #fff; color: #000; font-weight: 900; font-size: 0.65rem; padding: 5px 12px; border-radius: 6px; }
            .v119-meta-bar { position: absolute; bottom: 20px; left: 20px; right: 20px; display: flex; justify-content: space-between; align-items: center; }
            .v119-meta-cat { font-size: 0.55rem; font-weight: 900; color: #fff; letter-spacing: 2px; }
            .v119-meta-stat { display: flex; align-items: center; gap: 6px; font-size: 0.6rem; font-weight: 800; color: #fff; background: rgba(34,197,94,0.4); padding: 4px 10px; border-radius: 50px; backdrop-filter: blur(5px); }
            .v119-meta-stat.critical { background: rgba(239,68,68,0.4); }
            .v119-pulse { width: 5px; height: 5px; background: #fff; border-radius: 50%; animation: v119-p 1s infinite; }
            .v118-body { padding: 30px; flex: 1; display: flex; flex-direction: column; background: #fff; }
            .v118-h3 { font-size: 1.6rem; font-weight: 800; color: #0f172a; margin-bottom: 12px; }
            .v118-desc-txt { font-size: 0.9rem; color: #64748b; line-height: 1.6; margin-bottom: 20px; }
            .v118-s-chip { font-size: 0.65rem; font-weight: 800; color: #475569; background: #f1f5f9; padding: 4px 10px; border-radius: 6px; margin: 0 6px 6px 0; display: inline-block; }
            .v118-footer { border-top: 1.5px solid #f8fafc; padding-top: 20px; margin-top: auto; display: flex; justify-content: space-between; align-items: center; }
            .v118-version-id { font-size: 0.6rem; font-weight: 800; color: #cbd5e1; font-family: 'JetBrains Mono', monospace; }
            .v118-price-tag { font-size: 0.8rem; font-weight: 900; color: ${c_purp}; margin-bottom: 4px; display: block; }
            .v118-details-link { font-size: 0.85rem; font-weight: 900; color: ${c_purp}; }

            /* 🏆 SCROLLABLE DRAWER V121 FIX 🏆 */
            .v120-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(15px); z-index: 1000000; display: flex; justify-content: flex-end; }
            .v120-drawer { width: 40vw; min-width: 550px; height: 100vh; background: #fff; display: flex; flex-direction: column; animation: slideIn 0.5s ease-out; box-shadow: -40px 0 100px rgba(0,0,0,0.2); }
            @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
            
            .v120-head { padding: 25px 40px; border-bottom: 1.5px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; flex-shrink: 0; }
            .v120-h-left { display: flex; align-items: center; gap: 10px; }
            .v120-status-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px rgba(34,197,94,0.5); }
            .v120-session-id { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; color: #94a3b8; font-weight: 800; letter-spacing: 1px; }
            .v120-close { padding: 8px 20px; border-radius: 50px; background: #000; color: #fff; border: none; font-size: 0.7rem; font-weight: 900; cursor: pointer; transition: 0.3s; }
            .v120-close:hover { background: ${c_purp}; }

            /* CRITICAL: FIX SCROLLING */
            .v120-scroll-area { flex: 1; overflow-y: auto; overflow-x: hidden; scrollbar-width: none; }
            .v120-scroll-area::-webkit-scrollbar { display: none; }
            .v120-inner { padding: 60px 40px; }

            .v120-badge { font-size: 0.7rem; font-weight: 900; color: ${c_purp}; letter-spacing: 3px; margin-bottom: 15px; }
            .v120-title { font-size: 2.8rem; font-weight: 800; color: #0f172a; letter-spacing: -2px; line-height: 1.1; margin-bottom: 20px; }
            .v120-tagline { font-size: 1.3rem; color: #64748b; font-weight: 300; line-height: 1.6; border-left: 4px solid ${c_purp}; padding-left: 20px; }
            .v120-media-hero { width: 100%; height: 320px; border-radius: 24px; overflow: hidden; margin: 45px 0; position: relative; background: #f8fafc; }
            .v120-media-hero img { width: 100%; height: 100%; object-fit: cover; }
            .v120-v-tag { position: absolute; bottom: 20px; right: 20px; background: rgba(0,0,0,0.8); color: #fff; font-size: 0.6rem; font-weight: 900; padding: 5px 12px; border-radius: 6px; }

            .v120-section { margin-bottom: 70px; }
            .v120-sec-lbl { font-size: 0.65rem; font-weight: 900; color: #cbd5e1; letter-spacing: 2px; margin-bottom: 30px; border-bottom: 2px solid #f8fafc; padding-bottom: 10px; }
            .v120-spec-txt { font-size: 1.1rem; color: #475569; line-height: 1.8; margin-bottom: 40px; }

            .v120-metrics-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .v120-metric-card { padding: 30px; border-radius: 24px; background: #fcfdfe; border: 1.5px solid #f1f5f9; }
            .v120-m-val { display: block; font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 5px; }
            .v120-m-lbl { font-size: 0.6rem; font-weight: 800; color: #94a3b8; letter-spacing: 1.5px; }

            /* 📊 DELIVERABLES LIST */
            .v120-deliverables-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
            .v120-del-item { display: flex; align-items: center; gap: 14px; font-size: 0.95rem; color: #334155; font-weight: 500; }
            .v120-del-dot { color: ${c_purp}; font-size: 0.8rem; flex-shrink: 0; }

            /* 📊 PRICING TIERS V121 */
            .v121-plans-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
            .v121-plan-card { padding: 28px 30px; background: #fff; border: 1.5px solid #f1f5f9; border-radius: 24px; position: relative; overflow: hidden; transition: 0.3s; }
            .v121-plan-card.popular { border-color: ${c_purp}; background: linear-gradient(135deg, #faf5ff 0%, #fff0f9 100%); box-shadow: 0 20px 60px rgba(168,85,247,0.12); }
            .v121-popular-tag { font-size: 0.6rem; font-weight: 900; color: #fff; background: ${c_mix}; letter-spacing: 2px; padding: 4px 14px; border-radius: 50px; display: inline-block; margin-bottom: 14px; }
            .v121-p-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; gap: 10px; }
            .v121-p-name { font-size: 1.15rem; font-weight: 800; color: #0f172a; }
            .v121-p-price { font-family: 'JetBrains Mono', monospace; font-weight: 800; color: ${c_purp}; font-size: 1.15rem; white-space: nowrap; }
            .v121-p-desc { font-size: 0.9rem; color: #64748b; line-height: 1.55; margin-bottom: 20px; position: relative; z-index: 2; }
            .v121-features-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; border-top: 1px solid #f1f5f9; padding-top: 18px; position: relative; z-index: 2; }
            .v121-feat-item { display: flex; align-items: center; gap: 10px; font-size: 0.875rem; color: #475569; font-weight: 500; }
            .v121-feat-check { color: #22c55e; font-weight: 900; font-size: 0.8rem; flex-shrink: 0; }
            .v121-p-neon { position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: ${c_mix}; border-radius: 20px 0 0 20px; }

            .v120-stack-wrap { display: flex; flex-wrap: wrap; gap: 12px; }
            .v120-stack-pill { padding: 10px 22px; border-radius: 12px; border: 1.5px solid #f1f5f9; font-size: 0.85rem; font-weight: 800; color: #64748b; }
            .v120-cta-final { width: 100%; padding: 25px; background: #000; color: #fff; border-radius: 24px; font-weight: 900; font-size: 1.1rem; cursor: pointer; transition: 0.4s; }
            .v120-cta-final:hover { background: ${c_mix}; transform: translateY(-5px); box-shadow: 0 30px 60px rgba(168,85,247,0.25); }

            @media (max-width: 1100px) {
               .v120-drawer { width: 90vw; }
               .v118-grid { grid-template-columns: 1fr 1fr; }
               .v104-hero-flex { gap: 40px; }
            }
            @media (max-width: 768px) {
               .v104-hero { padding: 100px 0 60px 0; }
               .v104-hero-flex { flex-direction: column; gap: 60px; text-align: center; }
               .v104-hero-info { flex: 1; text-align: center; }
               .v104-eyebrow { justify-content: center; }
               .v104-h1 { font-size: 2.8rem; letter-spacing: -1.5px; }
               .v104-desc { margin: 0 auto 35px auto; }
               .v104-filters { justify-content: center; }
               .v104-portal { flex: 1; min-width: 100%; }
               .v104-cta-card { padding: 30px; }
               .proj-container { padding: 0 20px; }
               .v118-grid-sec { padding: 60px 0 100px; }
               .v118-card { border-radius: 28px; }
               .v118-grid { grid-template-columns: 1fr; }
               
               /* 🏆 MODAL MOBILE REFINEMENT */
               .v120-drawer { width: 100vw; min-width: 100vw; }
               .v120-title { font-size: 2.2rem; letter-spacing: -1px; }
               .v120-tagline { font-size: 1.1rem; padding-left: 15px; }
               .v120-inner { padding: 40px 24px; }
               .v120-media-hero { height: 220px; margin: 30px 0; }
               .v120-metrics-grid { grid-template-columns: 1fr; }
               .v120-spec-txt { font-size: 1rem; line-height: 1.7; }
               .v121-p-header { flex-direction: column; align-items: flex-start; gap: 8px; }
               .v121-p-price { font-size: 1.4rem; }
               .v120-head { padding: 20px; }
            }
         `}</style>
      </div>
   )
}
