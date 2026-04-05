import React from 'react';

export default function Footer() {
  const accentColor = '#7c3aed';
  
  return (
    <footer style={{ background: '#0a0d14', color: '#94a3b8', padding: '100px 0 60px 0', fontFamily: 'Inter, sans-serif' }}>
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
         
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '80px', marginBottom: '80px' }}>
            
            {/* Column 1: Brand */}
            <div style={{ flex: '1.5 1 300px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
                  <div style={{ width: 10, height: 10, background: 'linear-gradient(to right, #7c3aed, #db2777)', borderRadius: '2px' }}></div>
                  <span style={{ color: '#fff', fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-1.5px', textTransform: 'uppercase' }}>DEVNEXES</span>
               </div>
               <p style={{ fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '300px', color: '#64748b' }}>
                  Premium software engineering for elite founders and scaling enterprises.
               </p>
            </div>

            {/* Column 2: Solutions */}
            <div>
               <h5 style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '25px' }}>Solutions</h5>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {['AI Core', 'Cloud Infrastructure', 'Mobile Ecosystems', 'Custom Software'].map(item => (
                    <li key={item}><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: '0.2s', fontSize: '0.9rem' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#94a3b8'}>{item}</a></li>
                  ))}
               </ul>
            </div>

            {/* Column 3: Company */}
            <div>
               <h5 style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '25px' }}>Company</h5>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {['Strategic Ledger', 'Our Arsenal', 'About Mission', 'Privacy Protocol'].map(item => (
                    <li key={item}><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: '0.2s', fontSize: '0.9rem' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#94a3b8'}>{item}</a></li>
                  ))}
               </ul>
            </div>

            {/* Column 4: Connectivity */}
            <div>
               <h5 style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '25px' }}>Connectivity</h5>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.65rem', color: '#475569', fontWeight: 900, marginBottom: '4px' }}>DIRECT LINE</span>
                    <a href="tel:+923095659479" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700 }}>+92 309 5659479</a>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.65rem', color: '#475569', fontWeight: 900, marginBottom: '4px' }}>EMAIL COMMAND</span>
                    <a href="mailto:Devnexes.Solutions@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700 }}>Devnexes.Solutions@gmail.com</a>
                  </div>
               </div>
            </div>

         </div>

         {/* Bottom Line */}
         <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <span style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 800 }}>© 2026 DEVNEXES CORE. ALL RIGHTS RESERVED.</span>
            <div style={{ display: 'flex', gap: '20px' }}>
               {['LinkedIn', 'Instagram', 'Github'].map(s => (
                  <a key={s} href="#" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 900, transition: '0.2s' }} onMouseEnter={e => e.target.style.color = '#7c3aed'} onMouseLeave={e => e.target.style.color = '#475569'}>
                    {s.toUpperCase()}
                  </a>
               ))}
            </div>
         </div>

      </div>

    </footer>
  );
}
