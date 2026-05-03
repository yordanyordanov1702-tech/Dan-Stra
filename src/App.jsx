import React, { useState, useRef } from 'react';
import Strava from './components/Strava.jsx';
import Garmin from './components/Garmin.jsx';

const TABS = [
  { id: 'strava', label: 'STRAVA' },
  { id: 'garmin', label: 'GARMIN' },
];

const s = {
  shell: { display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#080c14' },
  header: {
    background: '#0a0e1a', borderBottom: '1px solid #1a2235',
    padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', height: 56,
  },
  logo: { color: '#3b82f6', fontWeight: 700, fontSize: 15, letterSpacing: '0.08em', whiteSpace: 'nowrap' },
  dot: { width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', marginRight: 6 },
  nav: { display: 'flex', gap: '0.25rem', flex: 1, overflowX: 'auto', scrollbarWidth: 'none' },
  tab: (active) => ({
    padding: '0 1.25rem', height: 56, border: 'none', background: 'none', cursor: 'pointer',
    color: active ? '#e2e8f0' : '#4a5568', fontSize: 11, letterSpacing: '0.1em', whiteSpace: 'nowrap',
    borderBottom: active ? '2px solid #3b82f6' : '2px solid transparent',
    fontFamily: 'inherit', transition: 'all 0.15s',
  }),
  scrollBtn: {
    background: 'none', border: 'none', color: '#4a5568', cursor: 'pointer',
    fontSize: 18, padding: '0 4px', flexShrink: 0, lineHeight: 1, fontFamily: 'inherit',
  },
};

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const init = params.get('strava') || params.get('strava_error') ? 'strava' : 'strava';
  const [tab, setTab] = useState(init);
  const navRef = useRef(null);
  const scroll = dir => navRef.current?.scrollBy({ left: dir * 120, behavior: 'smooth' });

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080c14; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #080c14; }
        ::-webkit-scrollbar-thumb { background: #1a2235; border-radius: 3px; }
        nav::-webkit-scrollbar { display: none; }
      `}</style>
      <div style={s.shell}>
        <header style={s.header}>
          <div style={s.logo}><span style={s.dot} />Dan-Stra</div>
          <button style={s.scrollBtn} onClick={() => scroll(-1)}>&#8249;</button>
          <nav ref={navRef} style={s.nav}>
            {TABS.map(t => (
              <button key={t.id} style={s.tab(tab === t.id)} onClick={() => setTab(t.id)}>
                {t.label}
              </button>
            ))}
          </nav>
          <button style={s.scrollBtn} onClick={() => scroll(1)}>&#8250;</button>
        </header>
        <main style={{ flex: 1 }}>
          {tab === 'strava' && <Strava />}
          {tab === 'garmin' && <Garmin />}
        </main>
      </div>
    </>
  );
}
