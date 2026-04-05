import React, { useState, useEffect } from 'react'

const resources = [
  { 
    id: 1,
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', 
    title: 'Building a High-Performance Next-Gen IDE',
    content: 'Developing a custom Integrated Development Environment (IDE) tailored for specialized workflows. We focus on low-latency code analysis, seamless Git integration, and extensible plugin architectures. Our approach allows developers to work with precision and speed, reducing friction in the coding process significantly.',
    kpis: ['Sub-10ms Code Analysis Latency', 'Seamless Git Ecosystem Integration', 'Custom Plugin Architecture Support'],
    category: 'Engineering',
    readingTime: '5 MIN READ'
  },
  { 
    id: 2,
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', 
    title: 'Neural-Sync Framework for AI Integration',
    summary: 'How we leverage Large Language Models (LLMs) to create custom, domain-specific AI assistants that understand your unique codebase and business logic.',
    details: 'Generic AI models often fail when faced with proprietary datasets. Our Neural-Sync framework allows companies to fine-tune and integrate AI assistants like GPT-4 and Gemini directly into their existing internal platforms, automating documentation and complex code reviews with up to 95% accuracy.',
    kpis: ['Domain-Specific Fine-Tuning', '95% Accuracy in Documentation', 'Real-time Neural Analysis'],
    category: 'AI & Data',
    readingTime: '4 MIN READ'
  },
  { 
    id: 3,
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', 
    title: 'Scaled Web Automation & Scraper Clusters',
    summary: 'Designing distributed scraping clusters that can process millions of data points hourly while bypassing modern anti-bot detections.',
    details: 'Data is the oil of the 21st century, but extracting it at scale is a constant battle. We engineer high-availability scraper clusters using headless technologies and rotating proxy layers, allowing for end-to-end automation of market intelligence and data synchronization.',
    kpis: ['Million+ Requests Baseline', 'Advanced IP Rotation Logic', 'Zero-Downtime Architecture'],
    category: 'Automation',
    readingTime: '6 MIN READ'
  },
  { 
    id: 4,
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80', 
    title: 'Serverless Cloud Infrastructure at Scale',
    summary: 'Moving beyond EC2: How serverless functions and event-driven architectures can reduce your cloud bill by 40% while increasing reliability.',
    details: 'The cloud is often mismanaged, leading to excessive costs and fragile setups. Our approach focuses on event-driven serverless architectures that auto-scale instantly, ensuring you only pay for what you use while maintaining enterprise-grade performance.',
    kpis: ['40% Average Cost Reduction', 'Infinite Vertical Scaling', 'Native Security Hardening'],
    category: 'Cloud Ops',
    readingTime: '7 MIN READ'
  },
  { 
    id: 5,
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80', 
    title: 'Real-time Cross-Platform Mobile Solutions',
    summary: 'Leveraging React Native and WebSockets to build mobile experiences that remain fluid even under extreme network volatility.',
    details: 'Users expect desktop-level performance on their mobile devices. We use high-performance React Native modules combined with real-time database sync layers like Supabase and Firebase to ensure your app feels snappy and offline-ready from day one.',
    kpis: ['Offline-First Data Sync', '60FPS Interaction Baseline', 'Cross-Platform Core Sharing'],
    category: 'Mobile',
    readingTime: '5 MIN READ'
  }
]

export default function FeaturedResources() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected) {
      // Stricter scroll lock for both body and html
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      document.body.style.touchAction = 'none' 
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [selected])

  return (
    <section id="featured-resources" style={{ background: '#fcfbff', padding: '120px 0', borderTop: '1px solid #f0f0f5', position: 'relative' }}>
      
      <style>{`
        .drawer-overlay {
          position: fixed; inset: 0; z-index: 100005;
          background: rgba(10,15,35,0.45); backdrop-filter: blur(10px);
          transition: 0.3s ease; opacity: 0; visibility: hidden;
          overscroll-behavior: contain;
        }
        .drawer-overlay.active { opacity: 1; visibility: visible; }

        .drawer-content {
          position: fixed; right: 0; top: 0; bottom: 0;
          width: 100%; max-width: 500px; background: #fff;
          transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(100%); display: flex; flex-direction: column;
          box-shadow: -20px 0 60px rgba(0,0,0,0.1);
          z-index: 100006;
          height: 100vh;
          overflow: hidden;
        }
        .drawer-overlay.active .drawer-content { transform: translateX(0); }

        .drawer-scroll-body { 
          flex: 1; 
          overflow-y: auto !important; 
          overflow-x: hidden; 
          padding: 40px; 
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }
        .drawer-scroll-body::-webkit-scrollbar { width: 6px; }
        .drawer-scroll-body::-webkit-scrollbar-track { background: #f8fafc; }
        .drawer-scroll-body::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

        .res-card { cursor: pointer; transition: 0.4s; overflow: hidden; border-radius: 20px; background: #fff; border: 1.5px solid #f1f5f9; padding: 15px; }
        .res-card:hover { transform: translateY(-8px); border-color: #7c3aed; box-shadow: 0 30px 60px rgba(124, 58, 237, 0.08); }
        .res-img-box { height: 180px; border-radius: 12px; overflow: hidden; margin-bottom: 20px; }
        .res-img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s; }
        .res-card:hover .res-img { transform: scale(1.1); }

        .kpi-row { display: flex; align-items: center; gap: 15px; padding: 20px; background: #f8fafc; border-radius: 15px; border: 1px solid #f1f5f9; margin-bottom: 12px; }
        .expert-card { background: linear-gradient(135deg, #1a1a2e 0%, #3d1fc2 100%); padding: 35px; border-radius: 24px; color: #fff; margin-top: 50px; }
        
        @media (max-width: 1024px) {
           .grid-container { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
           .grid-container { grid-template-columns: 1fr !important; }
           .drawer-content { max-width: 100%; }
        }
      `}</style>

      {/* 🔮 SLIDE-IN DRAWER */}
      <div 
        className={`drawer-overlay ${selected ? 'active' : ''}`} 
        onClick={() => setSelected(null)}
        onWheel={(e) => e.stopPropagation()} // Prevent scroll propagation
      >
        <div className="drawer-content" onClick={e => e.stopPropagation()}>
          {selected && (
            <>
              {/* Header (Fixed) */}
              <div style={{ padding: '20px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f8fafc', background: '#fff', zIndex: 10, flexShrink: 0 }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px rgba(16,185,129,0.5)' }}></div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '2px' }}>Enterprise Insight</span>
                 </div>
                 <button 
                  style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid #f1f5f9', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#94a3b8' }} 
                  onClick={() => setSelected(null)}
                 >×</button>
              </div>

              {/* Scrollable Body */}
              <div className="drawer-scroll-body" onWheel={(e) => e.stopPropagation()}>
                 <div style={{ borderRadius: 16, overflow: 'hidden', height: 200, marginBottom: '30px' }}>
                    <img src={selected.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                 </div>

                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                    <span style={{ background: '#7c3aed1a', color: '#7c3aed', padding: '4px 10px', borderRadius: 6, fontSize: '0.65rem', fontWeight: 950, textTransform: 'uppercase' }}>{selected.category}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#cbd5e1' }}>{selected.readingTime}</span>
                 </div>

                 <h3 style={{ fontSize: '2.4rem', fontWeight: 950, color: '#1a1a2e', lineHeight: 1.1, marginBottom: '35px', letterSpacing: '-1px' }}>{selected.title}</h3>

                 <section style={{ marginBottom: '45px' }}>
                    <h6 style={{ fontSize: '0.7rem', fontWeight: 950, textTransform: 'uppercase', color: '#cbd5e1', letterSpacing: '2px', marginBottom: '15px' }}>Objective Overview</h6>
                    <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>{selected.details || selected.content}</p>
                 </section>

                 <section>
                    <h6 style={{ fontSize: '0.7rem', fontWeight: 950, textTransform: 'uppercase', color: '#cbd5e1', letterSpacing: '2px', marginBottom: '15px' }}>Core Performance Metrics</h6>
                    {selected.kpis.map((kpi, i) => (
                      <div key={i} className="kpi-row">
                         <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#1a1a2e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 900 }}>{i+1}</div>
                         <span style={{ fontSize: '1rem', fontWeight: 800, color: '#1a1a2e' }}>{kpi}</span>
                      </div>
                    ))}
                 </section>

                 <div className="expert-card">
                    <h4 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 950 }}>Ready to achieve these metrics?</h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '10px' }}>Our core engineering team can help you design and deploy this architecture in record time.</p>
                    <button 
                      style={{ width: '100%', padding: '16px', background: '#fff', color: '#1a1a2e', border: 'none', borderRadius: 12, fontWeight: 900, cursor: 'pointer', marginTop: '25px' }} 
                      onClick={() => window.location.href='/contact'}
                    >Consult devnexes Core →</button>
                 </div>
              </div>

              {/* Footer (Fixed) */}
              <div style={{ padding: '25px 40px', borderTop: '1px solid #f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', flexShrink: 0 }}>
                 <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8' }}>Recently read by 40+ leads</span>
                 <div style={{ display: 'flex', gap: '6px' }}>
                    {[1,2,3].map(v => <div key={v} style={{ width: 22, height: 22, borderRadius: '50%', background: '#f1f5f9', border: '2px solid #fff' }}></div>)}
                 </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '100px' }}>
         <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #ff7eb3, #3d1fc2)', margin: '0 auto 25px auto', borderRadius: 2 }}></div>
         <h2 style={{ fontSize: '3.5rem', fontWeight: 950, color: '#1a1a2e', letterSpacing: '-1.5px' }}>Featured Resources</h2>
         <p style={{ fontSize: '1.2rem', color: '#5e5e77', marginTop: '10px' }}>Unlock the power of our latest technological research and deployment strategies.</p>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 30px' }}>
         <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '25px' }}>
            {resources.map((res) => (
              <div key={res.id} className="res-card" onClick={() => setSelected(res)}>
                 <div className="res-img-box">
                    <img src={res.img} className="res-img" alt="" />
                 </div>
                 <span style={{ background: '#7c3aed1a', color: '#7c3aed', padding: '4px 10px', borderRadius: 6, fontSize: '0.65rem', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '12px' }}>{res.category}</span>
                 <h4 style={{ fontSize: '1.1rem', fontWeight: 950, color: '#1a1a2e', lineHeight: 1.25, marginBottom: '25px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{res.title}</h4>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: 25, height: 2, background: '#e2e8f0' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 950, color: '#1a1a2e', textTransform: 'uppercase' }}>Access Story</span>
                 </div>
              </div>
            ))}
         </div>
      </div>

    </section>
  )
}
