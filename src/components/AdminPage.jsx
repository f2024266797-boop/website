import React, { useState, useEffect } from 'react';

const AdminPage = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [password, setPassword] = useState('');
   const [proposals, setProposals] = useState([]);
   const [loading, setLoading] = useState(true);
   const [search, setSearch] = useState('');
   const [filter, setFilter] = useState('All');
   const [loginError, setLoginError] = useState(false);
   const [selectedProposal, setSelectedProposal] = useState(null);

   useEffect(() => {
      const session = localStorage.getItem('admin_session');
      if (session === 'active') {
         setIsLoggedIn(true);
         fetchProposals();
      } else {
         setLoading(false);
      }
   }, []);

   const handleLogin = (e) => {
      e.preventDefault();
      // UPDATED PASSWORD: Devnexes@Devnexes
      if (password === 'Devnexes@Devnexes') {
         localStorage.setItem('admin_session', 'active');
         setIsLoggedIn(true);
         setLoginError(false);
         fetchProposals();
      } else {
         setLoginError(true);
      }
   };

   const handleLogout = () => {
      localStorage.removeItem('admin_session');
      setIsLoggedIn(false);
   };

   const fetchProposals = async () => {
      setLoading(true);
      try {
         const response = await fetch('/api/get-proposals');
         const data = await response.json();
         setProposals(data || []);
      } catch (err) {
         console.error('Fetch error:', err);
      }
      setLoading(false);
   };

   const filtered = proposals.filter(p => {
      const matchesSearch = (p.name || '').toLowerCase().includes(search.toLowerCase()) || 
                           (p.email || '').toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || (p.service || '').includes(filter);
      return matchesSearch && matchesFilter;
   });

   // --- LOGIN SCREEN ---
   if (!isLoggedIn) {
      return (
         <div className="lg-root">
            <div className="lg-card">
               <div className="lg-brand">DEVNEXES<span>CORE</span></div>
               <div className="lg-head">
                  <h1>Secure Access</h1>
                  <p>Command center is locked. Authorization required.</p>
               </div>
               <form onSubmit={handleLogin}>
                  <div className="lg-input-wrap">
                     <label>OPERATIONAL KEY</label>
                     <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="••••••••" 
                        className={loginError ? 'error' : ''} 
                        autoFocus 
                     />
                     {loginError && <span className="lg-err">Invalid Key. Terminal Access Denied.</span>}
                  </div>
                  <button type="submit" className="lg-btn">ACTIVATE SESSION</button>
               </form>
            </div>
            <style>{`
               .lg-root { height: 100vh; background: #fff; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: 'Inter', sans-serif; }
               .lg-card { width: 100%; max-width: 420px; padding: 40px; border: 1px solid #f0f0f0; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); text-align: center; }
               .lg-brand { font-weight: 900; font-size: 1.1rem; margin-bottom: 40px; }
               .lg-brand span { color: #fff; background: #000; padding: 2px 6px; border-radius: 4px; font-size: 0.6rem; margin-left: 6px; }
               .lg-head h1 { font-size: 1.5rem; font-weight: 800; margin-bottom: 8px; letter-spacing: -0.5px; }
               .lg-head p { font-size: 0.9rem; color: #777; margin-bottom: 32px; line-height: 1.5; }
               .lg-input-wrap { text-align: left; margin-bottom: 24px; }
               .lg-input-wrap label { font-size: 0.65rem; font-weight: 900; letter-spacing: 1px; color: #aaa; display: block; margin-bottom: 10px; }
               .lg-input-wrap input { width: 100%; padding: 14px; border: 1.5px solid #eee; border-radius: 12px; font-size: 1rem; outline: none; transition: 0.2s; }
               .lg-input-wrap input:focus { border-color: #000; }
               .lg-input-wrap input.error { border-color: #ff4d4d; background: #fff8f8; }
               .lg-err { color: #ff4d4d; font-size: 0.75rem; font-weight: 700; margin-top: 8px; display: block; }
               .lg-btn { width: 100%; padding: 16px; background: #000; color: #fff; border: none; border-radius: 12px; font-weight: 800; cursor: pointer; transition: 0.2s; }
               .lg-btn:hover { background: #333; transform: translateY(-1px); }
            `}</style>
         </div>
      );
   }

   return (
      <div className="rv-root">
         {/* Sidebar which becomes a header on mobile */}
         <aside className="rv-sidebar">
            <div className="rv-brand">DEVNEXES<span>AD</span></div>
            <nav className="rv-nav">
               <div className="rv-nav-link active">Dashboard</div>
               <div className="rv-nav-link" onClick={handleLogout}>Logout</div>
            </nav>
            <div className="rv-stat-dot">
               <div className="dot" /> ONLINE
            </div>
         </aside>

         <main className="rv-content">
            <header className="rv-header">
               <div className="rv-title-wrap">
                  <h1 className="rv-title">Terminal</h1>
                  <p className="rv-meta">Operational proposal stream</p>
               </div>
               <div className="rv-actions">
                  <div className="rv-search">
                     <input type="text" placeholder="Filter..." value={search} onChange={(e) => setSearch(e.target.value)} />
                  </div>
                  <button onClick={fetchProposals} className="rv-sync">SYNC</button>
               </div>
            </header>

            {/* RESPONSIVE STATS */}
            <div className="rv-stats-grid">
               <div className="rv-s-box">
                  <div className="rv-s-val">{proposals.length}</div>
                  <div className="rv-s-lbl">TOTAL LOGS</div>
               </div>
               <div className="rv-s-box">
                  <div className="rv-s-val">{proposals.filter(p => p.service?.includes('AI')).length}</div>
                  <div className="rv-s-lbl">AI UNITS</div>
               </div>
               <div className="rv-s-box">
                  <div className="rv-s-val">{proposals.filter(p => p.service?.includes('Web')).length}</div>
                  <div className="rv-s-lbl">WEB NODES</div>
               </div>
            </div>

            {/* RESPONSIVE TABLE VIEW */}
            <div className="rv-vault">
               <div className="rv-vault-top">
                  <div className="rv-tabs">
                     {['All', 'Web', 'AI', 'Mobile'].map(f => (
                        <button key={f} className={`rv-tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
                     ))}
                  </div>
               </div>
               <div className="rv-table-container">
                  <table className="rv-table">
                     <thead>
                        <tr>
                           <th>IDENTITY</th>
                           <th>SERVICE</th>
                           <th>BUDGET</th>
                           <th className="hide-mob">DATE</th>
                        </tr>
                     </thead>
                     <tbody>
                        {filtered.map(p => (
                           <tr key={p.id} onClick={() => setSelectedProposal(p)} className="rv-row">
                              <td>
                                 <div className="rv-name">{p.name || 'Anonymous'}</div>
                                 <div className="rv-email">{p.email}</div>
                              </td>
                              <td className="rv-serv-text">{p.service || 'N/A'}</td>
                              <td className="rv-budget-text">{p.budget || 'N/A'}</td>
                              <td className="hide-mob rv-date-text">{new Date(p.created_at).toLocaleDateString()}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </main>

         {/* --- RESPONSIVE SIDE DRAWER --- */}
         {selectedProposal && (
            <div className="rv-drawer-overlay" onClick={() => setSelectedProposal(null)}>
               <div className="rv-drawer" onClick={e => e.stopPropagation()}>
                  <div className="rv-d-head">
                     <h2>Proposal Insight</h2>
                     <button className="rv-close" onClick={() => setSelectedProposal(null)}>✕</button>
                  </div>
                  <div className="rv-d-body">
                     <div className="rv-d-card">
                        <label>SENDER</label>
                        <div className="rv-d-name">{selectedProposal.name || 'Anonymous'}</div>
                        <div className="rv-d-email">{selectedProposal.email}</div>
                     </div>
                     <div className="rv-d-grid">
                        <div>
                           <label>SERVICE</label>
                           <div className="rv-d-tag">{selectedProposal.service || 'General'}</div>
                        </div>
                        <div>
                           <label>BUDGET</label>
                           <div className="rv-d-tag green">{selectedProposal.budget || 'N/A'}</div>
                        </div>
                     </div>
                     <div className="rv-d-msg-wrap">
                        <label>INTEL MESSAGE</label>
                        <div className="rv-d-msg">{selectedProposal.message || 'No message provided.'}</div>
                     </div>
                  </div>
                  <div className="rv-d-foot">
                     <button className="rv-d-btn" onClick={() => window.open(`mailto:${selectedProposal.email}`)}>REPLY VIA EMAIL</button>
                  </div>
               </div>
            </div>
         )}

         <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
            
            .rv-root { min-height: 100vh; background: #fff; display: flex; color: #111; font-family: 'Inter', sans-serif; flex-direction: row; }
            
            .rv-sidebar { width: 220px; border-right: 1px solid #f0f0f0; padding: 40px 20px; display: flex; flex-direction: column; background: #fff; height: 100vh; position: sticky; top: 0; }
            .rv-brand { font-weight: 900; font-size: 1rem; margin-bottom: 40px; }
            .rv-brand span { background: #000; color: #fff; padding: 2px 5px; border-radius: 4px; font-size: 0.55rem; margin-left: 6px; }
            .rv-nav { flex: 1; display: flex; flex-direction: column; gap: 5px; }
            .rv-nav-link { padding: 12px 16px; border-radius: 10px; font-weight: 700; font-size: 0.8rem; color: #777; cursor: pointer; transition: 0.2s; }
            .rv-nav-link.active { background: #f7f7f7; color: #000; }
            .rv-stat-dot { font-size: 0.6rem; font-weight: 900; color: #ccc; display: flex; align-items: center; gap: 8px; letter-spacing: 1px; }
            .rv-stat-dot .dot { width: 5px; height: 5px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; }

            .rv-content { flex: 1; padding: 40px; max-width: 1200px; margin: 0 auto; width: 100%; }
            .rv-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; gap: 20px; flex-wrap: wrap; }
            .rv-title { font-size: 2rem; font-weight: 900; letter-spacing: -1px; }
            .rv-meta { font-size: 0.85rem; color: #888; font-weight: 500; }
            .rv-actions { display: flex; gap: 10px; align-items: center; }
            .rv-search input { padding: 10px 16px; border: 1px solid #eee; border-radius: 10px; width: 220px; font-size: 0.85rem; outline: none; }
            .rv-sync { padding: 10px 20px; background: #000; color: #fff; border: none; border-radius: 10px; font-weight: 900; font-size: 0.65rem; cursor: pointer; }

            .rv-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px; }
            .rv-s-box { background: #fff; border: 1px solid #f0f0f0; padding: 24px; border-radius: 18px; }
            .rv-s-val { font-size: 2.2rem; font-weight: 900; letter-spacing: -0.5px; }
            .rv-s-lbl { font-size: 0.65rem; font-weight: 800; color: #aaa; letter-spacing: 1px; margin-top: 4px; }

            .rv-vault { border: 1px solid #f0f0f0; border-radius: 20px; overflow: hidden; background: #fff; }
            .rv-vault-top { padding: 16px 24px; background: #fafafa; border-bottom: 1px solid #f0f0f0; display: flex; justify-content: space-between; align-items: center; }
            .rv-tabs { display: flex; gap: 6px; }
            .rv-tab { padding: 6px 14px; background: #fff; border: 1px solid #eee; border-radius: 8px; font-size: 0.75rem; font-weight: 700; color: #777; cursor: pointer; }
            .rv-tab.active { background: #000; color: #fff; border-color: #000; }

            .rv-table-container { width: 100%; overflow-x: auto; }
            .rv-table { width: 100%; border-collapse: collapse; min-width: 600px; }
            .rv-table th { text-align: left; padding: 14px 24px; font-size: 0.6rem; font-weight: 900; color: #ccc; letter-spacing: 1px; border-bottom: 1px solid #f0f0f0; }
            .rv-table td { padding: 18px 24px; border-bottom: 1px solid #fcfcfc; }
            .rv-row { cursor: pointer; transition: 0.15s; }
            .rv-row:hover { background: #f9f9f9; }
            .rv-name { font-weight: 800; font-size: 0.85rem; }
            .rv-email { font-size: 0.75rem; color: #999; }
            .rv-serv-text { font-size: 0.75rem; font-weight: 700; color: #555; }
            .rv-budget-text { font-size: 0.8rem; font-weight: 800; color: #22c55e; }
            .rv-date-text { font-size: 0.75rem; color: #aaa; font-weight: 600; }

            /* DRAWER */
            .rv-drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.1); backdrop-filter: blur(5px); z-index: 100; display: flex; justify-content: flex-end; }
            .rv-drawer { width: 550px; height: 100%; background: #fff; display: flex; flex-direction: column; animation: rv-slide 0.3s cubic-bezier(0,0,0.2,1); }
            @keyframes rv-slide { from { transform: translateX(100%); } to { transform: translateX(0); } }
            .rv-d-head { padding: 30px 40px; border-bottom: 1px solid #f0f0f0; display: flex; justify-content: space-between; align-items: center; }
            .rv-d-head h2 { font-size: 1.3rem; font-weight: 900; letter-spacing: -0.5px; }
            .rv-close { background: #f7f7f7; border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; font-size: 0.9rem; font-weight: 800; }
            .rv-d-body { flex: 1; padding: 40px; overflow-y: auto; }
            .rv-d-body label { font-size: 0.6rem; font-weight: 900; color: #bbb; letter-spacing: 1px; display: block; margin-bottom: 10px; }
            .rv-d-card { padding: 20px; background: #fafafa; border: 1px solid #f0f0f0; border-radius: 16px; margin-bottom: 24px; }
            .rv-d-name { font-size: 1rem; font-weight: 800; margin-bottom: 2px; }
            .rv-d-email { font-size: 0.8rem; color: #777; font-weight: 500; }
            .rv-d-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; }
            .rv-d-tag { display: inline-block; padding: 8px 16px; background: #000; color: #fff; border-radius: 50px; font-size: 0.75rem; font-weight: 800; }
            .rv-d-tag.green { background: #effff6; color: #059669; border: 1px solid #34d39966; }
            .rv-d-msg { padding: 24px; background: #fff; border: 1px solid #f0f0f0; border-radius: 20px; font-size: 0.95rem; line-height: 1.7; color: #333; white-space: pre-wrap; font-weight: 500; }
            .rv-d-foot { padding: 30px 40px; border-top: 1px solid #f0f0f0; }
            .rv-d-btn { width: 100%; padding: 16px; background: #000; color: #fff; border: none; border-radius: 14px; font-weight: 800; font-size: 0.9rem; cursor: pointer; }

            /* RESPONSIVE BREAKPOINTS */
            @media (max-width: 900px) {
               .rv-root { flex-direction: column; }
               .rv-sidebar { width: 100%; height: auto; border-right: none; border-bottom: 1px solid #f0f0f0; flex-direction: row; padding: 20px 30px; position: relative; justify-content: space-between; align-items: center; }
               .rv-brand { margin-bottom: 0; }
               .rv-nav { flex-direction: row; gap: 15px; }
               .rv-nav-link { padding: 8px 12px; }
               .rv-stat-dot { display: none; }
               .rv-content { padding: 30px; }
               .rv-drawer { width: 100%; }
            }

            @media (max-width: 650px) {
               .rv-stats-grid { grid-template-columns: 1fr; }
               .rv-header { flex-direction: column; align-items: flex-start; }
               .rv-search input { width: 100%; }
               .rv-actions { width: 100%; justify-content: space-between; }
               .hide-mob { display: none; }
               .rv-d-grid { grid-template-columns: 1fr; }
            }
         `}</style>
      </div>
   );
};

export default AdminPage;
