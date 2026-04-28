import React, { useState } from 'react';
import Strava from './components/Strava.jsx';

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const goToStrava = params.get('strava') || params.get('strava_error');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#0f1117' }}>
      <header style={{
        background: '#12161f',
        borderBottom: '1px solid #1e2533',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        height: 56,
      }}>
        <div style={{ color: '#e2e8f0', fontWeight: 500, fontSize: 15, letterSpacing: '0.08em' }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#fc4c02', display: 'inline-block', marginRight: 8,
          }} />
          Dan-Stra
        </div>
      </header>
      <main style={{ flex: 1, padding: '2rem', overflowX: 'auto' }}>
        <Strava />
      </main>
    </div>
  );
}
