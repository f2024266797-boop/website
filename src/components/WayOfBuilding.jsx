import React from 'react'

const steps = [
  {
    id: 1,
    title: 'Build the right team to scale',
    desc: 'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).',
    subDesc: 'Our <span style="color: #b03673; font-weight: 700;">delivery model</span> helps you cut costs and deliver within budget.',
    quote: '"Building a core team that shares your vision is the foundation of any successful digital transformation for our clients."',
    author: 'Muhammad Raham',
    role: 'CEO & Founder',
    authorImg: '/assets/founder.jpg',
    localImg: '/assets/way1.png',
    align: 'right'
  },
  {
    id: 2,
    title: 'Precision in Development',
    desc: 'We follow a structured agile methodology to ensure every line of code serves a purpose. High-scale architectures require high-scale thinking and meticulous execution.',
    subDesc: 'Our <span style="color: #b03673; font-weight: 700;">agile model</span> ensures transparency and rapid iteration cycles.',
    quote: '"Technological excellence is not about using the flashiest tools, but about building robust, scalable architectures that last."',
    author: 'Muhammad Huzaifa',
    role: 'CTO',
    authorImg: '/assets/huzaifa.jpeg',
    localImg: '/assets/way2.png',
    align: 'left'
  },
  {
    id: 3,
    title: 'Scaling for Growth',
    desc: 'Software shouldn’t just work; it should grow with you. We build scalable foundations that allow your product to handle millions of requests without breaking a sweat.',
    subDesc: 'Our <span style="color: #b03673; font-weight: 700;">growth framework</span> is built for enterprise-grade performance.',
    quote: '"Operational efficiency is the bridge between a great idea and a worldwide product. We ensure everything runs perfectly at scale."',
    author: 'Muhammad Arham',
    role: 'COO',
    authorImg: '/assets/arham.jpeg',
    localImg: '/assets/way3.png',
    align: 'right'
  }
]

export default function WayOfBuilding() {
  const primaryNavy = '#1a1a2e'
  const textGray = '#5e5e77'

  return (
    <section id="way-of-building" className="way-sec">
      
      {/* Injecting structural stylesheet removing hardcoded inline min-width lockouts causing mobile bleeds */}
      <style>{`
        .way-sec { background: #ffffff; padding: 120px 0 60px 0; overflow: hidden; }
        .way-row { display: flex; align-items: center; flex-wrap: wrap; gap: 100px; margin-bottom: 150px; }
        .way-row:last-child { margin-bottom: 0; }
        .way-reverse { flex-direction: row-reverse; }
        .way-txt { flex: 1 1 400px; min-width: 280px; }
        .way-img { flex: 1.2 1 450px; min-width: 280px; position: relative; }
        .way-img-frame { width: 100%; height: 520px; border-radius: 25px; overflow: hidden; position: relative; z-index: 1; border: 1px solid rgba(0,0,0,0.05); }
        
        @media (max-width: 1024px) {
           .way-row { flex-direction: column !important; gap: 60px; margin-bottom: 100px; }
           .way-img { width: 100%; flex: 1 1 100%; }
        }
        @media (max-width: 600px) {
           .way-sec { padding: 80px 0 40px 0; }
           .way-img-frame { height: 350px; border-radius: 16px; }
           .way-txt h3 { font-size: 2rem !important; margin-bottom: 1.5rem !important; }
           .way-txt p { font-size: 1.05rem !important; }
           .way-row { margin-bottom: 80px; }
        }
      `}</style>
      
      {/* 🏷️ SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '100px' }}>
        <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #ff7eb3 0%, #3d1fc2 100%)', margin: '0 auto 25px auto', borderRadius: 2 }} />
        <h4 style={{ fontSize: '1.8rem', fontWeight: 300, color: textGray, marginBottom: '0.8rem' }}>
          Way of building
        </h4>
        <h2 style={{ fontSize: '3.2rem', fontWeight: 800, color: primaryNavy }}>
          Great Software
        </h2>
      </div>

      {/* 📦 CONTENT BLOCKS */}
      <div style={{ maxWidth: 1250, margin: '0 auto', padding: '0 25px' }}>
        {steps.map((step, idx) => (
          <div key={idx} className={`way-row ${step.align === 'left' ? 'way-reverse' : ''}`}>
            
            {/* 📝 TEXT SIDE */}
            <div className="way-txt">
              <h3 style={{ fontSize: '2.4rem', fontWeight: 800, color: primaryNavy, marginBottom: '2.5rem', lineHeight: 1.2 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '1.2rem', color: textGray, lineHeight: 1.9, marginBottom: '2rem' }}>
                {step.desc}
              </p>
              <p style={{ fontSize: '1.2rem', color: textGray, lineHeight: 1.9, marginBottom: '4rem' }} dangerouslySetInnerHTML={{ __html: step.subDesc }} />
              
              {/* Quote Wrapper */}
              <div style={{ 
                borderLeft: `4px solid #b03673`, 
                paddingLeft: '30px', 
                marginBottom: '1rem',
                position: 'relative'
              }}>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#b03673', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
                  {step.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src={step.authorImg} alt={step.author} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h5 style={{ fontSize: '1rem', fontWeight: 800, color: primaryNavy, margin: 0 }}>{step.author}</h5>
                    <p style={{ fontSize: '0.85rem', color: textGray, margin: 0, opacity: 0.8 }}>{step.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 📸 IMAGE SIDE (Mockup Frame) */}
            <div className="way-img">
              
              {/* 🎨 DECORATIVE BLOBS */}
              <div style={{ 
                position: 'absolute', top: -25, left: step.align === 'right' ? -25 : 'auto', right: step.align === 'left' ? -25 : 'auto',
                width: 140, height: 140, borderRadius: '50%', background: 'rgba(255, 165, 0, 0.45)', filter: 'blur(2px)', zIndex: 0
              }} />
              
              <div style={{ 
                position: 'absolute', bottom: -25, left: '50%', transform: 'translateX(-50%)',
                width: 45, height: 45, borderRadius: '50%', background: '#b03673', zIndex: 2, boxShadow: '0 5px 15px rgba(176, 54, 115, 0.3)'
              }} />

              <div style={{ 
                position: 'absolute', top: -15, right: step.align === 'right' ? -15 : 'auto', left: step.align === 'left' ? -15 : 'auto',
                width: 35, height: 35, borderRadius: '50%', background: 'linear-gradient(90deg, #ff7eb3 0%, #3d1fc2 100%)', zIndex: 2 
              }} />

              {/* Main Image Frame */}
              <div className="way-img-frame" style={{ boxShadow: '0 50px 100px rgba(0,0,0,0.12)' }}>
                <img src={step.localImg} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
