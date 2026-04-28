import React from 'react';
import Strava from './components/Strava.jsx';

export default function App() {
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
      `}</style>
      <div style={{ minHeight: '100vh', background: '#080c14' }}>
        <Strava />
      </div>
    </>
  );
}
