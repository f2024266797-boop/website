import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';

const AssistantPage = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('devnexes_auth') === 'true');
   const [user, setUser] = useState(() => {
      const saved = localStorage.getItem('devnexes_user');
      return saved ? JSON.parse(saved) : null;
   }); 
   const [sidebarOpen, setSidebarOpen] = useState(true);
   const [isAuthLoading, setIsAuthLoading] = useState(false);
   const [authStep, setAuthStep] = useState('email'); 
   const [tempEmail, setTempEmail] = useState('');
   const [otpValue, setOtpValue] = useState('');
   
   const [messages, setMessages] = useState([]);
   const [inputValue, setInputValue] = useState('');
   const [isTyping, setIsTyping] = useState(false);
   const chatEndRef = useRef(null);

   const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

   const handleSendCode = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      if (!email) return;
      setIsAuthLoading(true);
      setTempEmail(email);
      try {
         let API_BASE = import.meta.env.VITE_API_URL || 'https://devnexes.onrender.com';
         API_BASE = API_BASE.replace(/\/$/, '');
         const response = await fetch(`${API_BASE}/api/send-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
         });
         if (response.ok) setAuthStep('otp');
         else alert("Access Denied.");
      } catch { alert("Identity Server Offline."); }
      finally { setIsAuthLoading(false); }
   };

   const handleVerifyOTP = async (e) => {
      e.preventDefault();
      if (otpValue.length < 8) return;
      setIsAuthLoading(true);
      try {
         let API_BASE = import.meta.env.VITE_API_URL || 'https://devnexes.onrender.com';
         API_BASE = API_BASE.replace(/\/$/, '');
         const response = await fetch(`${API_BASE}/api/verify-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: tempEmail, code: otpValue }),
         });
         if (response.ok) {
            const userData = { name: tempEmail.split('@')[0].toUpperCase(), email: tempEmail, picture: `https://api.dicebear.com/7.x/bottts/svg?seed=${tempEmail}` };
            setUser(userData);
            setIsLoggedIn(true);
            localStorage.setItem('devnexes_auth', 'true');
            localStorage.setItem('devnexes_user', JSON.stringify(userData));
            setMessages([]);
         } else alert("Invalid key.");
      } catch { alert("Verification error."); }
      finally { setIsAuthLoading(false); }
   };

   useEffect(() => {
     if (isLoggedIn && messages.length === 0) setMessages([{ role: 'assistant', text: "Hello! I'm your Devnexes AI Assistant. How can I help you today?" }]);
     document.body.style.backgroundColor = '#ffffff';
   }, [isLoggedIn]);

   useEffect(() => {
     if (messages.length > 0) scrollToBottom();
   }, [messages, isTyping]);

   const handleSend = async (e) => {
      e.preventDefault();
      if (!inputValue.trim()) return;
      const val = inputValue;
      setMessages(p => [...p, { role: 'user', text: val }]);
      setInputValue('');
      setIsTyping(true);
      
      // Force fallback if Render Env Var is missing in build cache
      let API_BASE = import.meta.env.VITE_API_URL || 'https://devnexes.onrender.com';
      API_BASE = API_BASE.replace(/\/$/, '');

      try {
         const response = await fetch(`${API_BASE}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: messages.map(m => ({ role: m.role, content: m.text })).concat({ role: 'user', content: val }) }),
         });
         const data = await response.json();
         setMessages(p => [...p, { role: 'assistant', text: data.response }]);
      } catch { setMessages(p => [...p, { role: 'assistant', text: "Service disconnected." }]); }
      finally { setIsTyping(false); }
   };

   if (!isLoggedIn) {
      return (
         <div className="gpt-auth-root">
            <Navbar />
            <div className="gpt-auth-card animate-enter">
               <h2 className="v10-h2">{authStep === 'email' ? 'Welcome back' : 'Check your email'}</h2>
               <p className="v10-p">{authStep === 'email' ? 'Enter your email to access your Devnexes AI station.' : `We've sent a code to ${tempEmail}`}</p>
               
               {authStep === 'email' ? (
                  <form onSubmit={handleSendCode} className="v10-form">
                     <input type="email" name="email" required placeholder="name@example.com" className="v10-input" defaultValue="rahamq23@gmail.com" />
                     <button type="submit" className="v10-btn" disabled={isAuthLoading}>Continue</button>
                  </form>
               ) : (
                  <form onSubmit={handleVerifyOTP} className="v10-form">
                     <input type="text" maxLength="8" placeholder="8-digit OTP" className="v10-input otp-look" value={otpValue} onChange={e => setOtpValue(e.target.value.replace(/[^0-9]/g,''))} autoFocus />
                     <button type="submit" className="v10-btn v10-prime" disabled={isAuthLoading || otpValue.length < 8}>Verify identity</button>
                     <button type="button" className="v10-link" onClick={() => setAuthStep('email')}>Use a different email</button>
                  </form>
               )}
            </div>
            <style>{`
               .gpt-auth-root { height: 100vh; display: flex; align-items: center; justify-content: center; background: #fff; font-family: 'Outfit', sans-serif; }
               .gpt-auth-card { max-width: 400px; width: 100%; padding: 40px; text-align: center; }
               .v10-h2 { font-size: 2rem; font-weight: 800; color: #0f172a; margin-bottom: 12px; }
               .v10-p { color: #64748b; margin-bottom: 30px; font-size: 0.95rem; }
               .v10-input { width: 100%; padding: 14px 20px; border: 1px solid #e2e8f0; border-radius: 12px; font-size: 1rem; margin-bottom: 15px; outline-color: #0f172a; }
               .v10-btn { width: 100%; padding: 14px; background: #0f172a; color: #fff; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.2s; }
               .v10-btn:hover { opacity: 0.9; }
               .v10-prime { background: linear-gradient(90deg, #6366f1, #8b5cf6); }
               .v10-link { background: none; border: none; color: #6366f1; font-weight: 600; font-size: 0.85rem; margin-top: 20px; cursor: pointer; }
               .otp-look { letter-spacing: 5px; font-weight: 800; text-align: center; }
               @keyframes revealUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
               .animate-enter { animation: revealUp 0.6s ease-out forwards; }
            `}</style>
         </div>
      );
   }

   return (
      <div className="gpt-root">
         
         {/* 📁 SIDEBAR (ChatGPT Style) */}
         <aside className={`gpt-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="gpt-side-header">
               <button className="new-chat-btn" onClick={() => setMessages([{ role: 'assistant', text: "New session started. How can I help?" }])}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
                  New Chat
               </button>
               <button className="side-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
               </button>
            </div>

            <div className="gpt-chat-list">
               <div className="chat-item active">Current Mission</div>
            </div>

            <div className="gpt-side-footer">
               <div className="user-pill">
                  <div className="u-av"><img src={user?.picture} alt="AV" /></div>
                  <div className="u-info">
                     <h6>{user?.name}</h6>
                     <p>Free Plan</p>
                  </div>
               </div>
               <button className="logout-mini" onClick={() => { localStorage.clear(); window.location.reload(); }}>Log out</button>
            </div>
         </aside>

         <main className="gpt-main">
            <header className="gpt-top-bar">
               {!sidebarOpen && (
                  <button className="side-open-btn" onClick={() => setSidebarOpen(true)}>
                     <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                  </button>
               )}
               <div className="model-tag">Devnexes AI v1.0</div>
            </header>

            <div className="gpt-scroller">
               <div className="gpt-thread">
                  {messages.map((m, i) => (
                     <div key={i} className={`gpt-row ${m.role}`}>
                        <div className="gpt-msg-container">
                           <div className="gpt-av">
                              {m.role === 'assistant' ? (
                                 <div className="ai-icon">DX</div>
                              ) : (
                                 <img src={user?.picture} alt="U" />
                              )}
                           </div>
                           <div className="gpt-content">
                              <div className="gpt-role-label">{m.role === 'assistant' ? 'DEVNEXES' : 'YOU'}</div>
                              <div className="gpt-text">{m.text}</div>
                           </div>
                        </div>
                     </div>
                  ))}
                  {isTyping && (
                     <div className="gpt-row assistant">
                        <div className="gpt-msg-container">
                           <div className="gpt-av"><div className="ai-icon typing">DX</div></div>
                           <div className="gpt-content typing">Thinking...</div>
                        </div>
                     </div>
                  )}
                  <div ref={chatEndRef} style={{ height: '30px' }} />
               </div>
            </div>

            <footer className="gpt-footer">
               <div className="gpt-input-box">
                  <form onSubmit={handleSend} className="gpt-form">
                     <textarea 
                        placeholder="Message Devnexes AI..." 
                        value={inputValue} 
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={e => {if(e.key === 'Enter' && !e.shiftKey) handleSend(e)}}
                        rows={1}
                     />
                     <button type="submit" className="gpt-send-btn" disabled={!inputValue.trim()}>
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                     </button>
                  </form>
               </div>
               <p className="gpt-disclaimer">Devnexes AI can make mistakes. Check important info.</p>
            </footer>
         </main>

         <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;700;800&family=JetBrains+Mono:wght@700&display=swap');
            
            .gpt-root { display: flex; height: 100vh; background: #ffffff; font-family: 'Inter', sans-serif; color: #0f172a; overflow: hidden; position: relative; }
            .v10-grid { position: absolute; inset: 0; background-image: radial-gradient(#e2e8f0 1.2px, transparent 1.2px); background-size: 32px 32px; opacity: 0.4; pointer-events: none; }
            
            /* 📁 SIDEBAR (THEMED) */
            .gpt-sidebar { width: 260px; height: 100%; background: #f8fafc; border-right: 1.5px solid #f1f5f9; display: flex; flex-direction: column; transition: 0.3s; flex-shrink: 0; z-index: 2000; }
            .gpt-sidebar:not(.open) { margin-left: -260px; }
            .gpt-side-header { padding: 20px 15px; display: flex; gap: 10px; }
            .new-chat-btn { flex: 1; height: 44px; background: #fff; border: 1.5px solid #e2e8f0; border-radius: 12px; display: flex; align-items: center; gap: 10px; padding: 0 15px; font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.02); }
            .new-chat-btn:hover { background: #f1f5f9; border-color: #6366f1; }
            .side-toggle { width: 44px; height: 44px; background: #fff; border: 1.5px solid #e2e8f0; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer; }
            
            .gpt-chat-list { flex: 1; padding: 10px; overflow-y: auto; }
            .chat-item { padding: 12px 15px; border-radius: 10px; font-size: 0.85rem; color: #475569; cursor: pointer; display: flex; align-items: center; gap: 10px; }
            .chat-item.active { background: #eff6ff; color: #2563eb; font-weight: 700; border: 1px solid #dbeafe; }
            
            .gpt-side-footer { padding: 20px 15px; border-top: 1.5px solid #f1f5f9; background: #fff; }
            .user-pill { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
            .u-av { width: 36px; height: 36px; border-radius: 11px; overflow: hidden; background: #f1f5f9; border: 2px solid #fff; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
            .u-av img { width: 100%; height: 100%; }
            .u-info h6 { margin: 0; font-size: 0.85rem; font-weight: 800; color: #0f172a; }
            .u-info p { margin: 0; font-size: 0.7rem; color: #94a3b8; font-weight: 600; letter-spacing: 1px; }
            .logout-mini { width: 100%; height: 44px; border-radius: 10px; background: #fff5f5; border: none; color: #ef4444; font-weight: 800; font-size: 0.75rem; cursor: pointer; transition: 0.3s; }
            .logout-mini:hover { background: #ef4444; color: #fff; }

            /* 🦾 MAIN CHAT (THEMED GPT) */
            .gpt-main { flex: 1; display: flex; flex-direction: column; background: transparent; min-width: 0; position: relative; z-index: 1000; }
            .gpt-top-bar { height: 64px; display: flex; align-items: center; padding: 0 25px; border-bottom: 1px solid #f1f5f9; justify-content: space-between; background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); }
            .side-open-btn { background: none; border: none; cursor: pointer; color: #64748b; }
            .model-tag { font-family: 'Outfit', sans-serif; font-weight: 900; font-size: 1.1rem; color: #0f172a; background: linear-gradient(90deg, #6366f1, #d946ef); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

            .gpt-scroller { flex: 1; overflow-y: auto; display: flex; flex-direction: column; scroll-behavior: smooth; }
            .gpt-thread { max-width: 780px; width: 100%; margin: 0 auto; padding: 40px 24px; }
            
            .gpt-row { width: 100%; padding: 30px 0; background: transparent; }
            .gpt-msg-container { display: flex; gap: 24px; width: 100%; }
            .gpt-av { width: 32px; height: 32px; border-radius: 8px; overflow: hidden; flex-shrink: 0; margin-top: 4px; box-shadow: 0 5px 15px rgba(0,0,0,0.03); }
            .gpt-av img { width: 100%; height: 100%; }
            
            .ai-icon { width: 100%; height: 100%; background: #0f172a; color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 950; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #6366f1, #d946ef); }
            .u-icon { width: 100%; height: 100%; background: #f1f5f9; color: #64748b; display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 900; }

            .gpt-content { flex: 1; min-width: 0; }
            .gpt-header-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
            .gpt-role-label { font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; font-weight: 900; color: #1e293b; letter-spacing: 2px; }
            .official-tag { font-size: 0.5rem; background: #f1f5f9; color: #94a3b8; padding: 2px 6px; border-radius: 4px; font-weight: 800; letter-spacing: 1px; }
            
            .gpt-text { font-size: 1.05rem; line-height: 1.8; color: #334155; white-space: pre-wrap; word-break: break-word; }
            .user .gpt-text { color: #0f172a; }

            /* 🦾 FOOTER THEMED */
            .gpt-footer { padding: 40px 24px 30px 24px; display: flex; flex-direction: column; align-items: center; background: linear-gradient(transparent, #fff 50%); }
            .gpt-input-box { max-width: 780px; width: 100%; position: relative; }
            .gpt-form { background: #fff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 12px 14px 12px 28px; display: flex; align-items: center; gap: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.03); transition: 0.3s; }
            .gpt-form:focus-within { border-color: #6366f1; box-shadow: 0 15px 50px rgba(99, 102, 241, 0.12); }
            .gpt-form textarea { flex: 1; background: none; border: none; outline: none; font-size: 1.05rem; color: #0f172a; resize: none; min-height: 38px; padding-top: 8px; font-family: inherit; }
            .gpt-send-btn { width: 44px; height: 44px; background: #0f172a; color: #fff; border: none; border-radius: 14px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; flex-shrink: 0; }
            .gpt-send-btn:hover { background: #6366f1; transform: scale(1.05); }
            .gpt-send-btn:disabled { opacity: 0.1; transform: scale(0.9); cursor: not-allowed; }
            .gpt-disclaimer { margin-top: 15px; font-size: 0.7rem; color: #94a3b8; font-weight: 600; letter-spacing: 0.5px; }

            @media (max-width: 768px) {
               .gpt-sidebar { position: fixed; z-index: 5000; }
               .gpt-thread { padding: 20px; }
               .gpt-av { width: 28px; height: 28px; }
               .gpt-text { font-size: 0.95rem; }
            }
         `}</style>
      </div>
   );
};

export default AssistantPage;
