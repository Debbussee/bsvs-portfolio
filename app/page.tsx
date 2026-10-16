'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic imports to avoid SSR issues with browser APIs
const CursorRig     = dynamic(() => import('./components/CursorRig'),     { ssr: false });
const HeroSection   = dynamic(() => import('./components/HeroSection'),   { ssr: false });
const AboutModal    = dynamic(() => import('./components/AboutModal'),    { ssr: false });
import ZeroMandate from './components/ZeroMandate';
import VisualAudit from './components/VisualAudit';
import HookLibrary from './components/HookLibrary';
import ThemeToggle from './components/ThemeToggle';

export default function PortfolioUI() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-x-hidden arch-grid noise"
      style={{ background: 'var(--bg-canvas)', color: 'var(--text-primary)' }}
    >
      {/* CURSOR */}
      <CursorRig />

      {/* SITE CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        {/* ── FLOATING ARCHITECTURAL HEADER / NAV ── */}
        <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 transition-all duration-500">
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              height: scrolled ? '58px' : '68px',
              padding: '0 24px',
              borderRadius: '9999px',
              background: scrolled ? 'var(--bg-nav-scrolled)' : 'var(--bg-nav)',
              backdropFilter: 'blur(20px) saturate(140%)',
              WebkitBackdropFilter: 'blur(20px) saturate(140%)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--card-shadow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <a
              href="#index"
              data-hover
              className="flex items-center gap-3 no-underline"
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                }}
              />
              <span
                className="font-editorial text-2xl font-bold tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                BSVS
              </span>
              <span
                className="hidden sm:inline font-mono text-[10px] tracking-[0.22em] pl-3 ml-1"
                style={{
                  color: 'var(--text-muted)',
                  borderLeft: '1px solid var(--border-subtle)',
                }}
              >
                SYS.OP.NODE
              </span>
            </a>

            <nav
              className="flex items-center gap-3 md:gap-6 font-mono text-[10.5px] font-semibold tracking-[0.14em]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <a href="#index"   className="hidden lg:inline hover:opacity-75 transition-opacity" data-hover>01. INDEX</a>
              <a href="#mandate" className="hidden md:inline hover:opacity-75 transition-opacity" data-hover>02. ZERO MANDATE</a>
              <a href="#audit"   className="hidden md:inline hover:opacity-75 transition-opacity" data-hover>03. VISUAL AUDIT</a>
              <a href="#hook"    className="hidden lg:inline hover:opacity-75 transition-opacity" data-hover>04. HOOK LIBRARY</a>
              <a
                href="/telemetry_benchmarks"
                className="cinematic-pill px-3.5 py-1.5 no-underline hover:opacity-85 transition-opacity"
                data-hover
              >
                05. TELEMETRY
              </a>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        {/* ── SECTIONS ── */}
        <main>
          <HeroSection />

          {/* ARCHITECTURAL HAIRLINE DIVIDER: Hero → Zero Mandate */}
          <div style={{ height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '85%', maxWidth: '1280px', height: '1px', background: 'var(--border-subtle)' }} />
          </div>

          <ZeroMandate />

          {/* ARCHITECTURAL HAIRLINE DIVIDER: Zero Mandate → Visual Audit */}
          <div style={{ height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '85%', maxWidth: '1280px', height: '1px', background: 'var(--border-subtle)' }} />
          </div>

          <VisualAudit />

          {/* ARCHITECTURAL HAIRLINE DIVIDER: Visual Audit → Hook Library */}
          <div style={{ height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '85%', maxWidth: '1280px', height: '1px', background: 'var(--border-subtle)' }} />
          </div>

          <HookLibrary />
        </main>

        {/* ── FOOTER ── */}
        <footer
          style={{
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-secondary)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div
              className="flex items-center gap-2.5 font-mono text-[10.5px] tracking-[0.16em]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--status-ok)',
                }}
              />
              <span>SYSTEM ONLINE // BSVS INFRASTRUCTURE</span>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setAboutOpen(true)}
                data-hover
                className="cinematic-btn cinematic-btn-secondary"
                style={{ padding: '10px 24px', fontSize: '10.5px' }}
              >
                DESIGN MANIFESTO
              </button>
            </div>
            <div
              className="font-mono text-[10.5px] tracking-[0.12em]"
              style={{ color: 'var(--text-muted)' }}
            >
              &copy; {new Date().getFullYear()} BE STILL VISUAL STUDIO. ALL PROTOCOLS ENFORCED.
            </div>
          </div>
        </footer>

        {/* ABOUT MANIFESTO MODAL */}
        <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      </motion.div>
    </div>
  );
}
