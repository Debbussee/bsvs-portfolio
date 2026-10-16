'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('bsvs-theme') as 'light' | 'dark' | null;
    const initial = saved === 'dark' ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('bsvs-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  if (!mounted) {
    return (
      <div
        className="cinematic-pill"
        style={{ width: '84px', height: '32px', opacity: 0.5 }}
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      data-hover
      aria-label="Toggle Light and Dark Theme"
      title={theme === 'light' ? 'Switch to Cinematic Dark Mode' : 'Switch to Warm Studio Light Mode'}
      className="cinematic-pill"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '6px 13px',
        fontFamily: 'var(--font-geist-mono), monospace',
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.12em',
        cursor: 'pointer',
        color: 'var(--text-primary)',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-strong)',
      }}
    >
      {theme === 'light' ? (
        <>
          <Moon size={12} style={{ color: 'var(--accent-primary)' }} />
          <span>DARK</span>
        </>
      ) : (
        <>
          <Sun size={12} style={{ color: 'var(--accent-primary)' }} />
          <span>LIGHT</span>
        </>
      )}
    </button>
  );
}
