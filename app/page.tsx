'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic imports to avoid SSR issues with browser APIs
const IntroSequence = dynamic(() => import('./components/IntroSequence'), { ssr: false });
const CursorRig     = dynamic(() => import('./components/CursorRig'),     { ssr: false });
const HeroSection   = dynamic(() => import('./components/HeroSection'),   { ssr: false });
import ZeroMandate from './components/ZeroMandate';
import VisualAudit from './components/VisualAudit';
import HookLibrary from './components/HookLibrary';

export default function PortfolioUI() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-900 selection:text-cyan-50">
      {/* CURSOR */}
      <CursorRig />

      {/* INTRO */}
      <IntroSequence onComplete={handleIntroComplete} />

      {/* SITE CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* ── HEADER / NAV ── */}
        <header className="fixed top-0 w-full z-50 h-16 flex items-center px-6 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDuration: '3s' }}
              />
              <span className="font-mono text-xl font-bold tracking-tighter text-white">BSVS</span>
              <span className="hidden md:inline font-mono text-[10px] text-zinc-600 border-l border-zinc-800 pl-3 ml-1">
                SYS.OP.NODE
              </span>
            </div>

            <nav className="flex gap-8 font-mono text-xs tracking-widest text-zinc-500">
              <a href="#index"   className="hover:text-cyan-400 transition-colors" data-hover>01. INDEX</a>
              <a href="#mandate" className="hover:text-amber-400 transition-colors" data-hover>02. ZERO MANDATE</a>
              <a href="#audit"   className="hover:text-rose-400 transition-colors" data-hover>03. VISUAL AUDIT</a>
              <a href="#hook"    className="hover:text-violet-400 transition-colors" data-hover>04. HOOK LIBRARY</a>
            </nav>
          </div>
        </header>

        {/* ── SECTIONS ── */}
        <main>
          <HeroSection />

          {/* SPACER: Hero → Zero Mandate */}
          <div style={{ height: '120px', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '60%', height: '1px', background: 'linear-gradient(90deg, transparent, #3f3f46, transparent)' }} />
          </div>

          <ZeroMandate />

          {/* SPACER: Zero Mandate → Visual Audit */}
          <div style={{ height: '120px', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '60%', height: '1px', background: 'linear-gradient(90deg, transparent, #3f3f46, transparent)' }} />
          </div>

          <VisualAudit />

          {/* SPACER: Visual Audit → Hook Library */}
          <div style={{ height: '120px', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '60%', height: '1px', background: 'linear-gradient(90deg, transparent, #3f3f46, transparent)' }} />
          </div>

          <HookLibrary />
        </main>

        {/* ── FOOTER ── */}
        <footer className="border-t border-zinc-800 bg-black">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-600">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>SYSTEM ONLINE // BSVS INFRASTRUCTURE</span>
            </div>
            <div className="font-mono text-[10px] text-zinc-700">
              &copy; {new Date().getFullYear()} BE STILL VISUAL STUDIO. ALL PROTOCOLS ENFORCED.
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
