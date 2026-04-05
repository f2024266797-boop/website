import React, { useState } from 'react';
import Footer from './Footer';

const ContactPage = () => {
   const [formState, setFormState] = useState('idle');
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      service: '',
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
         const response = await fetch('/api/send-proposal', {
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

         <main className="contact-main">
            {/* 🌌 ATMOSPHERE: ADVANCED NEURAL MESH */}
            <div className="neural-glow indigo-glow" />
            <div className="neural-glow magenta-glow" />
            <div className="v123-grid-overlay" />

            <section className="contact-hero">
               <div className="c-container">
                  <div className="v123-hero-flex">

                     {/* LEFT: HEADLINE */}
                     <div className="v123-hero-left">
                        <div className="v123-header-meta animate-fade-in">
                           <span className="v123-pulse-dot" />
                           <span className="v123-meta-txt">Available for new projects</span>
                        </div>
                        <h1 className="v123-h1 animate-slide-up">Let's build something <br /><span className="gradient-text">great together.</span></h1>
                        <p className="v123-p animate-slide-up" style={{ animationDelay: '0.1s' }}>
                           Tell us about your project. Our team reviews every request within 24 hours and will get back to you with a tailored plan.
                        </p>
                     </div>

                     {/* RIGHT: QUICK CONTACT CARD */}
                     <div className="v123-hero-right animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="v123-quick-card">
                           <div className="v123-qc-top">
                              <div className="v123-qc-avatar">DN</div>
                              <div>
                                 <div className="v123-qc-name">Devnexes Team</div>
                                 <div className="v123-qc-role">Engineering & Design</div>
                              </div>
                              <div className="v123-online-badge">● Online</div>
                           </div>

                           <div className="v123-qc-divider" />

                           <div className="v123-qc-items">
                              <div className="v123-qc-item">
                                 <span className="v123-qc-icon">✉</span>
                                 <div>
                                    <div className="v123-qc-label">Email us</div>
                                    <a href="mailto:Devnexes.Solutions@gmail.com" className="v123-qc-value">Devnexes.Solutions@gmail.com</a>
                                 </div>
                              </div>
                              <div className="v123-qc-item">
                                 <span className="v123-qc-icon">📞</span>
                                 <div>
                                    <div className="v123-qc-label">Call us</div>
                                    <a href="tel:+923095659479" className="v123-qc-value">+92 309 5659479</a>
                                 </div>
                              </div>
                              <div className="v123-qc-item">
                                 <span className="v123-qc-icon">⚡</span>
                                 <div>
                                    <div className="v123-qc-label">Response time</div>
                                    <div className="v123-qc-value">Within 24 hours</div>
                                 </div>
                              </div>
                           </div>

                           <div className="v123-qc-footer">
                              <div className="v123-qc-stat"><span>100%</span> Satisfaction</div>
                              <div className="v123-qc-stat"><span>24H</span> Response</div>
                           </div>

                           <div className="v123-qc-glow" />
                        </div>
                     </div>

                  </div>
               </div>
            </section>

            <section className="contact-interface">
               <div className="c-container v123-main-grid">
                  
                  {/* CONTACT FORM */}
                  <div className="v123-form-col animate-fade-in" style={{ animationDelay: '0.2s' }}>
                     {formState === 'success' ? (
                        <div className="v123-success-vault">
                           <div className="v123-success-icon">✓</div>
                           <h2 className="v123-success-h2">Message Received!</h2>
                           <p className="v123-success-p">Thanks for reaching out. Our team will review your message and get back to you within 24 hours.</p>
                           <button onClick={() => setFormState('idle')} className="v123-reset-btn">Send Another Message</button>
                        </div>
                     ) : (
                        <div className="v123-glass-vault">
                           <div className="v123-vault-header">
                              <h3 className="v123-vault-h3">Send us a message</h3>
                              <div className="v123-vault-status"><span className="v123-pulse-dot" /> We respond in 24h</div>
                           </div>
                           
                           <form onSubmit={handleSubmit} className="v123-form">
                              <div className="v123-fields-grid">
                                 <div className="v123-field">
                                    <label>Full Name</label>
                                    <input 
                                       type="text" 
                                       name="name"
                                       value={formData.name}
                                       onChange={handleInputChange}
                                       placeholder="Your full name" 
                                       required 
                                    />
                                    <div className="v123-field-glow" />
                                 </div>
                                 
                                 <div className="v123-field">
                                    <label>Email Address</label>
                                    <input 
                                       type="email" 
                                       name="email"
                                       value={formData.email}
                                       onChange={handleInputChange}
                                       placeholder="you@company.com" 
                                       required 
                                    />
                                    <div className="v123-field-glow" />
                                 </div>

                                 <div className="v123-field">
                                    <label>Service Needed</label>
                                    <select 
                                       name="service"
                                       value={formData.service}
                                       onChange={handleInputChange}
                                       required
                                    >
                                       <option value="">Choose a service...</option>
                                       <option value="AI Systems">AI & Machine Learning</option>
                                       <option value="Web Engineering">Web Development</option>
                                       <option value="Mobile App">Mobile App Development</option>
                                       <option value="UI/UX Design">UI / UX Design</option>
                                       <option value="Other">Other</option>
                                    </select>
                                    <div className="v123-field-glow" />
                                 </div>



                                 <div className="v123-field full-width">
                                    <label>Your Message</label>
                                    <textarea 
                                       name="message"
                                       value={formData.message}
                                       onChange={handleInputChange}
                                       placeholder="Tell us about your project, goals, and timeline..." 
                                       required 
                                       rows={4}
                                    ></textarea>
                                    <div className="v123-field-glow" />
                                 </div>
                              </div>

                              <button type="submit" className="v123-submit-btn" disabled={formState === 'sending'}>
                                 {formState === 'sending' ? (
                                    <span className="v123-loading-wrap">
                                       <span className="v123-spinner" /> Sending...
                                    </span>
                                 ) : 'Send Message →'}
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
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=JetBrains+Mono:wght@800&display=swap');
            
            .contact-root { background: #fff; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; color: #1e293b; overflow-x: hidden; }
            .c-container { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
            
            /* 🌌 V123 ATMOSPHERE */
            .v123-grid-overlay { position: absolute; inset: 0; background-image: radial-gradient(#e2e8f0 1px, transparent 1px); background-size: 32px 32px; z-index: -1; opacity: 0.6; }
            .neural-glow { position: absolute; width: 60vw; height: 60vw; border-radius: 50%; filter: blur(120px); opacity: 0.12; z-index: -1; pointer-events: none; }
            .indigo-glow { top: -20%; left: -10%; background: #a855f7; }
            .magenta-glow { bottom: -10%; right: -20%; background: #ec4899; }

            /* 🚀 HERO V123 */
            .contact-hero { padding: 120px 0 40px; }
            .v123-hero-flex { display: flex; align-items: center; justify-content: space-between; gap: 60px; }
            .v123-hero-left { flex: 1.1; }
            .v123-hero-right { flex: 0 0 380px; }
            .v123-header-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
            .v123-pulse-dot { width: 6px; height: 6px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; animation: v-p 2s infinite; }
            @keyframes v-p { 0% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; } }
            .v123-meta-txt { font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; font-weight: 800; color: #94a3b8; letter-spacing: 2px; }
            .v123-h1 { font-size: 3.2rem; font-weight: 800; color: #0f172a; line-height: 1.1; letter-spacing: -2px; margin-bottom: 16px; }
            .v123-p { font-size: 1rem; color: #64748b; max-width: 580px; line-height: 1.6; }
            .gradient-text { background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

            /* 🃏 QUICK CONTACT CARD */
            .v123-quick-card { background: #fff; border: 1.8px solid #f1f5f9; border-radius: 28px; padding: 28px; position: relative; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.04); }
            .v123-qc-top { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
            .v123-qc-avatar { width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, #a855f7, #ec4899); color: #fff; font-weight: 900; font-size: 1rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
            .v123-qc-name { font-size: 0.95rem; font-weight: 800; color: #0f172a; }
            .v123-qc-role { font-size: 0.75rem; color: #94a3b8; font-weight: 600; margin-top: 2px; }
            .v123-online-badge { margin-left: auto; font-size: 0.7rem; font-weight: 700; color: #22c55e; background: #f0fdf4; padding: 5px 12px; border-radius: 50px; border: 1px solid #bbf7d0; white-space: nowrap; }
            .v123-qc-divider { height: 1.5px; background: #f1f5f9; margin-bottom: 20px; }
            .v123-qc-items { display: flex; flex-direction: column; gap: 16px; margin-bottom: 22px; }
            .v123-qc-item { display: flex; align-items: flex-start; gap: 14px; }
            .v123-qc-icon { font-size: 1rem; margin-top: 2px; flex-shrink: 0; }
            .v123-qc-label { font-size: 0.68rem; font-weight: 700; color: #94a3b8; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 0.5px; }
            .v123-qc-value { font-size: 0.88rem; font-weight: 700; color: #0f172a; text-decoration: none; word-break: break-all; }
            .v123-qc-value:hover { color: #a855f7; }
            .v123-qc-footer { display: flex; justify-content: space-between; padding-top: 18px; border-top: 1.5px solid #f1f5f9; }
            .v123-qc-stat { text-align: center; font-size: 0.7rem; font-weight: 700; color: #94a3b8; }
            .v123-qc-stat span { display: block; font-size: 1.2rem; font-weight: 900; color: #0f172a; margin-bottom: 2px; }
            .v123-qc-glow { position: absolute; bottom: -40px; right: -40px; width: 150px; height: 150px; background: linear-gradient(135deg, #a855f7, #ec4899); border-radius: 50%; filter: blur(60px); opacity: 0.08; pointer-events: none; }

            /* 📡 MAIN GRID V123 */
            .v123-main-grid { display: flex; justify-content: center; padding-bottom: 80px; }
            .v123-form-col { width: 100%; max-width: 780px; }
            .v123-info-col { flex: 1; min-width: 0; }

            /* 📝 THE VAULT (FORM) */
            .v123-glass-vault { background: #fff; border: 1.8px solid #f1f5f9; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.02); }
            .v123-vault-header { padding: 20px 30px; background: #fafafa; border-bottom: 1.5px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; }
            .v123-vault-h3 { font-size: 1rem; font-weight: 800; color: #0f172a; }
            .v123-vault-id { font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; color: #94a3b8; font-weight: 800; }
            .v123-vault-status { display: flex; align-items: center; gap: 8px; font-size: 0.78rem; font-weight: 700; color: #22c55e; }
            
            .v123-form { padding: 30px; }
            .v123-fields-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; }
            .v123-field { position: relative; display: flex; flex-direction: column; gap: 8px; }
            .v123-field label { font-size: 0.78rem; font-weight: 700; color: #475569; letter-spacing: 0; }
            .v123-field input, .v123-field select, .v123-field textarea { background: #f8fafc; border: 1.5px solid #f1f5f9; padding: 13px 16px; border-radius: 12px; font-family: inherit; font-size: 0.9rem; color: #0f172a; outline: none; transition: 0.3s; position: relative; z-index: 2; }
            .v123-field input:focus, .v123-field select:focus, .v123-field textarea:focus { border-color: #a855f7; background: #fff; }
            .v123-field-glow { position: absolute; inset: -5px; z-index: 1; border-radius: 16px; background: linear-gradient(135deg, #a855f7, #ec4899); opacity: 0; filter: blur(15px); transition: 0.4s; }
            .v123-field input:focus ~ .v123-field-glow, .v123-field select:focus ~ .v123-field-glow, .v123-field textarea:focus ~ .v123-field-glow { opacity: 0.1; }
            .v123-field.full-width { grid-column: 1 / span 2; }

            .v123-submit-btn { width: 100%; padding: 18px; background: #000; color: #fff; border: none; border-radius: 14px; font-weight: 900; font-size: 1rem; letter-spacing: 1.5px; cursor: pointer; transition: 0.4s; position: relative; overflow: hidden; }
            .v123-submit-btn:hover { background: linear-gradient(135deg, #a855f7, #ec4899); transform: translateY(-5px); box-shadow: 0 30px 60px rgba(168,85,247,0.2); }
            .v123-loading-wrap { display: flex; align-items: center; justify-content: center; gap: 12px; }
            .v123-spinner { width: 18px; height: 18px; border: 3px solid rgba(255,255,255,0.2); border-top-color: #fff; border-radius: 50%; animation: v-spin 0.8s linear infinite; }
            @keyframes v-spin { to { transform: rotate(360deg); } }

            /* 🏆 INFO STACK V123 */
            .v123-info-stack { display: flex; flex-direction: column; gap: 20px; }
            .v123-info-block { padding: 25px; border-radius: 20px; border: 1.5px solid #f1f5f9; background: #fff; }
            .v123-info-block.darker { background: #0f172a; border: none; color: #fff; }
            .v123-info-h4 { font-size: 1.05rem; font-weight: 800; margin-bottom: 18px; }
            .v123-info-item { margin-bottom: 14px; }
            .v123-info-item:last-child { margin-bottom: 0; }
            .v123-lbl { display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; color: #94a3b8; margin-bottom: 5px; font-weight: 800; letter-spacing: 1.5px; }
            .v123-val { font-size: 0.95rem; font-weight: 800; color: inherit; text-decoration: none; word-break: break-all; }
            .v123-val:hover { color: #a855f7; }

            .v123-board-status { display: flex; flex-direction: column; gap: 10px; }
            .v123-status-row { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; font-weight: 700; color: #94a3b8; }
            .v123-s-dot { width: 6px; height: 6px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; flex-shrink: 0; }
            
            .v123-stat-mesh { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
            .v123-stat-box { padding: 20px; border-radius: 18px; background: #fdfdfe; border: 1.5px solid #f1f5f9; text-align: center; }
            .v123-st-val { display: block; font-size: 1.5rem; font-weight: 900; color: #0f172a; margin-bottom: 4px; }
            .v123-st-lbl { font-weight: 800; font-size: 0.6rem; color: #94a3b8; letter-spacing: 1.5px; }

            /* ✅ SUCCESS STATE */
            .v123-success-vault { padding: 50px 30px; text-align: center; }
            .v123-success-icon { width: 70px; height: 70px; background: #22c55e; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 25px; animation: pop-up 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
            .v123-success-h2 { font-size: 2rem; font-weight: 900; margin-bottom: 12px; }
            .v123-success-p { font-size: 1rem; color: #64748b; line-height: 1.7; max-width: 450px; margin: 0 auto 30px; }
            .v123-reset-btn { padding: 12px 35px; border-radius: 100px; background: #f1f5f9; border: none; font-weight: 800; color: #475569; cursor: pointer; transition: 0.3s; }
            .v123-reset-btn:hover { background: #e2e8f0; }

            @media (max-width: 1100px) {
               .v123-main-grid { flex-direction: column; gap: 40px; }
               .v123-info-col { order: 2; }
               .v123-form-col { order: 1; }
               .v123-h1 { font-size: 2.6rem; letter-spacing: -1.5px; }
               .v123-hero-flex { gap: 40px; }
               .v123-hero-right { flex: 0 0 320px; }
            }
            @media (max-width: 768px) {
               .v123-fields-grid { grid-template-columns: 1fr; gap: 15px; }
               .v123-field.full-width { grid-column: 1; }
               .v123-h1 { font-size: 2rem; letter-spacing: -1px; }
               .v123-form { padding: 20px; }
               .v123-vault-header { padding: 16px 20px; }
               .c-container { padding: 0 20px; }
               .contact-hero { padding: 100px 0 30px; }
               .v123-hero-flex { flex-direction: column; }
               .v123-hero-right { flex: none; width: 100%; }
            }

            /* Animations */
            .animate-fade-in { opacity: 0; animation: fade-in 0.8s ease-out forwards; }
            .animate-slide-up { opacity: 0; transform: translateY(30px); animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            @keyframes fade-in { to { opacity: 1; } }
            @keyframes slide-up { to { opacity: 1; transform: translateY(0); } }
            @keyframes pop-up { from { transform: scale(0.6); opacity: 0; } to { transform: scale(1); opacity: 1; } }
         `}</style>
      </div>
   );

};

export default ContactPage;
