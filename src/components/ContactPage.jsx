import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage = () => {
   const [formState, setFormState] = useState('idle');
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      service: '',
      budget: '',
      message: ''
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setFormState('sending');
      
      try {
         const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
         const response = await fetch(`${API_BASE}/api/send-proposal`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
         });
         
         if(response.ok) {
            setFormState('success');
         } else {
            console.error('Transmission failed');
            setFormState('idle');
         }
      } catch (error) {
         console.error('Network error:', error);
         setFormState('idle');
      }
   };

   return (
      <div className="contact-root">
         <Navbar />
         
         <main className="contact-main">
            {/* Immersive Neural Atmosphere */}
            <div className="neural-glow indigo-glow" />
            <div className="neural-glow magenta-glow" />
            <div className="neural-grid-pattern" />

            <section className="contact-hero animate-fade-up">
               <div className="c-container">
                  <div className="status-badge">
                     <span className="dot" />
                     SYSTEM_ACTIVE: CONNECT_NOW
                  </div>
                  <h1 className="hero-title">Draft your <span className="gradient-text">proposal</span></h1>
                  <p className="hero-desc">
                     Partner with Devnexes to architect your digital future. Submit your project requirements, 
                     and our elite engineering team will draft a strategic execution plan for your review.
                  </p>
               </div>
            </section>

            <section className="contact-interface">
               <div className="c-container interface-grid">
                  
                  {/* Strategic Connectivity Column */}
                  <div className="contact-channels animate-fade-up" style={{ animationDelay: '0.1s' }}>
                     <div className="channel-card">
                        <h3>Official Channels</h3>
                        
                        <div className="channel-item">
                           <div className="item-meta">EMAIL_ADDRESS</div>
                           <a href="mailto:Devnexes.Solutions@gmail.com" className="item-link">Devnexes.Solutions@gmail.com</a>
                        </div>
                        
                        <div className="channel-item">
                           <div className="item-meta">HOTLINE_DIRECT</div>
                           <a href="tel:+923095659479" className="item-link">03095659479</a>
                        </div>
                        
                        <div className="channel-item">
                           <div className="item-meta">REGIONAL_PRESENCE</div>
                           <div className="item-static highlight">COMING SOON</div>
                        </div>

                        <div className="social-nexus">
                           <div className="nexus-label">NETWORK_NODES</div>
                           <div className="nexus-links">
                              <a href="#">LinkedIn</a>
                              <a href="#">Twitter</a>
                              <a href="#">Instagram</a>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Proposal Intake Form */}
                  <div className="contact-form-side animate-fade-up" style={{ animationDelay: '0.2s' }}>
                     {formState === 'success' ? (
                        <div className="transmission-success">
                           <div className="success-icon">✓</div>
                           <h2>Proposal Transmitted</h2>
                           <p>Your strategic briefing has been successfully sent to devnexes.solutions@gmail.com. Our board will review your requirements and respond within 24 hours.</p>
                           <button onClick={() => setFormState('idle')} className="btn-reconnect">Submit New Briefing</button>
                        </div>
                     ) : (
                        <div className="glass-form-container">
                           <form onSubmit={handleSubmit}>
                              <div className="form-fields">
                                 <div className="field-group">
                                    <div className="input-wrap">
                                       <label>Full Identity</label>
                                       <input 
                                          type="text" 
                                          name="name"
                                          value={formData.name}
                                          onChange={handleInputChange}
                                          placeholder="e.g. Hammad Khan" 
                                          required 
                                       />
                                    </div>
                                    <div className="input-wrap">
                                       <label>Transmission Email</label>
                                       <input 
                                          type="email" 
                                          name="email"
                                          value={formData.email}
                                          onChange={handleInputChange}
                                          placeholder="name@company.com" 
                                          required 
                                       />
                                    </div>
                                 </div>

                                 <div className="field-group">
                                    <div className="input-wrap">
                                       <label>Target Service Category</label>
                                       <select 
                                          name="service"
                                          value={formData.service}
                                          onChange={handleInputChange}
                                          required
                                       >
                                          <option value="">Select Domain...</option>
                                          <option value="AI Architecture">AI Systems Architecture</option>
                                          <option value="Web Engineering">Web Engineering</option>
                                          <option value="Mobile App">Mobile App Development</option>
                                          <option value="UI/UX Design">Strategic UI/UX Design</option>
                                       </select>
                                    </div>
                                    <div className="input-wrap">
                                       <label>Resource Scale [Budget]</label>
                                       <select 
                                          name="budget"
                                          value={formData.budget}
                                          onChange={handleInputChange}
                                          required
                                       >
                                          <option value="">Select Range...</option>
                                          <option value="$1k - $5k">$1k - $5k (Startup MVP)</option>
                                          <option value="$5k - $20k">$5k - $20k (Growth Scaling)</option>
                                          <option value="$20k+">$20k+ (Enterprise Tier)</option>
                                       </select>
                                    </div>
                                 </div>

                                 <div className="input-wrap full-width">
                                    <label>Proposal Objectives & Vision</label>
                                    <textarea 
                                       name="message"
                                       value={formData.message}
                                       onChange={handleInputChange}
                                       placeholder="Provide details about your project goals, technical requirements, and timeline..." 
                                       required 
                                       rows={4}
                                    ></textarea>
                                 </div>
                              </div>

                              <button type="submit" className="btn-transmit" disabled={formState === 'sending'}>
                                 {formState === 'sending' ? 'TRANSMITTING...' : 'SUBMIT PROPOSAL BRIEFING'}
                              </button>
                           </form>
                        </div>
                     )}
                  </div>

               </div>
            </section>
         </main>

         <Footer />

         <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=JetBrains+Mono:wght@700&display=swap');
            
            .contact-root { background: #ffffff; min-height: 100vh; font-family: 'Outfit', sans-serif; overflow-x: hidden; }
            .contact-main { padding-top: 100px; position: relative; }

            /* 🌌 ATMOSPHERE */
            .neural-glow { position: absolute; width: 65vw; height: 65vw; border-radius: 50%; filter: blur(140px); opacity: 0.1; pointer-events: none; z-index: -1; }
            .indigo-glow { top: -10%; left: -15%; background: #6366f1; }
            .magenta-glow { bottom: -10%; right: -15%; background: #d946ef; }
            .neural-grid-pattern { position: absolute; inset: 0; background-image: radial-gradient(#e2e8f0 1.2px, transparent 1.2px); background-size: 32px 32px; z-index: -1; opacity: 0.5; }

            .c-container { max-width: 1250px; margin: 0 auto; padding: 0 40px; }
            .interface-grid { display: flex; gap: 80px; align-items: flex-start; padding-bottom: 120px; }

            /* 🚀 HERO (PROPOSAL MODE) */
            .contact-hero { padding: 100px 0 60px 0; }
            .status-badge { background: #0f172a; color: #fff; padding: 10px 20px; border-radius: 6px; display: flex; align-items: center; gap: 12px; font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; font-weight: 800; width: fit-content; margin-bottom: 30px; letter-spacing: 1px; }
            .status-badge .dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; animation: pulse 2s infinite; }
            @keyframes pulse { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }

            .hero-title { font-size: 4.5rem; font-weight: 900; color: #1a1a2e; line-height: 1.1; margin-bottom: 30px; }
            .gradient-text { background: linear-gradient(90deg, #6366f1, #d946ef); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .hero-desc { font-size: 1.35rem; color: #64748b; max-width: 700px; line-height: 1.6; }

            /* 📡 CHANNELS */
            .contact-channels { flex: 0 0 360px; }
            .channel-card { background: #f8fafc; border: 1.5px solid #f1f5f9; padding: 40px; border-radius: 20px; }
            .channel-card h3 { font-size: 1.5rem; font-weight: 800; color: #1a1a2e; margin-bottom: 35px; }
            
            .channel-item { margin-bottom: 35px; }
            .item-meta { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; color: #6366f1; font-weight: 800; letter-spacing: 1.5px; margin-bottom: 10px; }
            .item-link { font-size: 1.2rem; font-weight: 800; color: #1a1a2e; text-decoration: none; transition: 0.3s; word-break: break-all; }
            .item-link:hover { color: #6366f1; transform: translateX(5px); display: inline-block; }
            .item-static { font-size: 1.25rem; font-weight: 800; color: #cbd5e1; }
            .item-static.highlight { color: #94a3b8; }

            .social-nexus { margin-top: 50px; border-top: 1px dashed #e2e8f0; padding-top: 30px; }
            .nexus-label { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; color: #94a3b8; font-weight: 800; letter-spacing: 2px; margin-bottom: 15px; }
            .nexus-links { display: flex; gap: 15px; }
            .nexus-links a { font-size: 0.95rem; font-weight: 800; color: #1a1a2e; text-decoration: none; transition: 0.2s; }
            .nexus-links a:hover { color: #6366f1; transform: translateY(-2px); }

            /* 📝 FORMS */
            .contact-form-side { flex: 1; min-width: 0; }
            .glass-form-container { background: #ffffff; border: 1.5px solid #f1f5f9; padding: 50px; border-radius: 24px; box-shadow: 0 40px 100px rgba(0,0,0,0.03); }
            
            .form-fields { display: flex; flex-direction: column; gap: 30px; }
            .field-group { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
            .input-wrap { display: flex; flex-direction: column; gap: 10px; }
            .input-wrap label { font-size: 0.85rem; font-weight: 800; color: #1a1a2e; }
            .input-wrap input, .input-wrap select, .input-wrap textarea { background: #f8fafc; border: 1.5px solid #f1f5f9; padding: 16px 20px; border-radius: 12px; font-family: inherit; font-size: 1rem; color: #1a1a2e; outline: none; transition: 0.3s; }
            .input-wrap input:focus, .input-wrap select:focus, .input-wrap textarea:focus { border-color: #6366f1; background: #fff; box-shadow: 0 10px 40px rgba(99,102,241,0.05); }
            .full-width { margin-bottom: 20px; }

            .btn-transmit { background: #1a1a2e; color: #fff; border: none; padding: 20px 50px; border-radius: 12px; font-weight: 850; font-size: 1rem; letter-spacing: 2px; cursor: pointer; transition: 0.4s; width: fit-content; text-transform: uppercase; }
            .btn-transmit:hover { background: #6366f1; transform: translateY(-3px); box-shadow: 0 15px 40px rgba(99,102,241,0.25); }
            .btn-transmit:disabled { opacity: 0.5; }

            /* ✅ SUCCESS */
            .transmission-success { text-align: center; padding: 60px 0; }
            .success-icon { width: 90px; height: 90px; background: #22c55e; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto 30px auto; animation: popUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
            .transmission-success h2 { font-size: 2.8rem; font-weight: 900; color: #1a1a2e; margin-bottom: 20px; }
            .transmission-success p { color: #64748b; line-height: 1.8; max-width: 550px; margin: 0 auto 40px auto; font-size: 1.15rem; }
            .btn-reconnect { background: #f1f5f9; border: none; padding: 14px 40px; border-radius: 100px; font-weight: 800; color: #475569; cursor: pointer; }

             @media (max-width: 1024px) {
                .interface-grid { flex-direction: column; gap: 70px; }
                .contact-channels { flex: 1; width: 100%; order: 2; }
                .contact-form-side { order: 1; }
                .hero-title { font-size: clamp(2.5rem, 10vw, 4.5rem); }
             }
             @media (max-width: 768px) {
                .field-group { grid-template-columns: 1fr; gap: 20px; }
                .glass-form-container { padding: 30px 20px; }
                .btn-transmit { width: 100%; }
             }

            @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes popUp { from { transform: scale(0.6); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
         `}</style>
      </div>
   );
};

export default ContactPage;
