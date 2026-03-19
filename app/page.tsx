'use client';

import React, { useState } from 'react';
import { Crosshair, Terminal, Activity, Focus, ScanLine, Database } from 'lucide-react';

const PortfolioUI = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const archiveNodes = [
    { id: '01', title: 'KINETIC IMPACT_01', img: '/ella_editorial_bsvs_220001.png', lat: '34.0522', lon: '-118.2437', status: 'STABLE' },
    { id: '02', title: 'STRUCTURAL DECAY_04', img: '/renee_flood_bsvs_049120.png', lat: '40.7128', lon: '-74.0060', status: 'DEGRADING' },
    { id: '03', title: 'FLUID DYNAMICS_11', img: '/sienna_clktwr_bsvs_109020.png', lat: '51.5074', lon: '-0.1278', status: 'COMPUTING' },
    { id: '04', title: 'THERMAL SHIFT_09', img: '/tae_hmlss_bsvs_071110.png', lat: '35.6895', lon: '139.6917', status: 'STABLE' },
    { id: '05', title: 'OPTICAL REFRACTION_02', img: '/ella_water_bsvs_220001.png', lat: '48.8566', lon: '2.3522', status: 'ACTIVE' },
    { id: '06', title: 'BIOMECHANICAL STRESS_07', img: '/zm_bench_bsvs_625530.png', lat: '37.7749', lon: '-122.4194', status: 'LOCKED' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-cyan-900 selection:text-cyan-50">

      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" style={{ animationDuration: '3s' }} />
              <span className="font-mono text-2xl font-bold tracking-tighter text-white">BSVS</span>
            </div>
            <span className="hidden md:inline-block font-mono text-xs text-zinc-500 border-l border-zinc-800 pl-4">SYS.OP.NODE</span>
          </div>
          <nav className="flex gap-8 font-mono text-xs tracking-widest text-zinc-400">
            <a href="#index" className="hover:text-cyan-400 transition-colors">01. INDEX</a>
            <a href="#mandate" className="hover:text-amber-400 transition-colors">02. THE ZERO MANDATE</a>
            <a href="#audit" className="hover:text-rose-400 transition-colors">03. VISUAL AUDIT</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="index" className="pt-16 w-full relative overflow-hidden border-b border-zinc-800 bg-black">
        <div className="absolute top-24 left-6 text-zinc-800 z-10"><Crosshair size={32} /></div>
        <div className="absolute bottom-6 right-6 text-zinc-800 z-10"><Focus size={32} /></div>

        <div className="relative h-[85vh] w-full overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div
            className="absolute -inset-[10%] w-[120%] h-[120%] transition-transform duration-75 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=2500"
              alt="Hero Architectural Placeholder"
              className="w-full h-full object-cover grayscale contrast-125 opacity-40 mix-blend-luminosity"
            />
          </div>

          {/* HUD OVERLAY */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none z-10">
            <div className="flex justify-between font-mono text-xs text-cyan-500 relative z-20">
              <span>REC // 00:00:00:00</span>
              <span>LUM: 45% | F/1.4</span>
            </div>

            {/* CENTERED TYPOGRAPHY */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter text-white/90 drop-shadow-2xl mix-blend-overlay mb-2">BE STILL VISUAL STUDIO</h1>
              <p className="font-mono text-sm md:text-base tracking-[0.5em] text-zinc-300 drop-shadow-lg">FORENSIC VISUAL ARCHITECTURE</p>
            </div>

            <div className="flex justify-between items-end font-mono text-[10px] text-zinc-600 relative z-20">
              <span>LAT: 33.2148° N<br />LON: 97.1331° W</span>
              <ScanLine size={16} className="text-amber-500 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* THE ZERO MANDATE MANIFESTO */}
      <section id="mandate" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="border-t-4 border-white pt-8">
          <div className="flex items-center gap-3 mb-8">
            <Terminal size={20} className="text-amber-500" />
            <h2 className="font-mono text-xl tracking-widest text-zinc-300">THE ZERO MANDATE</h2>
          </div>

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              <strong className="text-white font-mono text-sm block mb-1">01. THE PROTOCOL OF MATERIAL TRUTH</strong>
              We do not generate images; we enforce physical constraints. The Zero Mandate strips away subjective aesthetic bloat, relying entirely on raw analog realism and absolute forensic truth. If the math fails, the render is rejected.
            </p>
            <p>
              <strong className="text-white font-mono text-sm block mb-1">02. SPATIAL & KINETIC LOCKDOWN</strong>
              Every node in the archive operates strictly under defined physics constraints. Thermodynamic drag, high Weber number fragmentation, and geometric permanence are not suggestions—they are structural mandates.
            </p>
            <p>
              <strong className="text-white font-mono text-sm block mb-1">03. ARCHITECTURAL ISOLATION</strong>
              The environment must serve the subject. Absolute voids (#000000) and aggressive aperture isolation (f/1.4) are utilized to force processing compute directly into the physical mass and kinetic state of the core geometry.
            </p>
          </div>
        </div>
      </section>

      {/* THE VISUAL ARCHIVE */}
      <section id="audit" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-4">
          <h2 className="font-mono text-xl tracking-widest text-white flex items-center gap-2">
            <Database size={18} className="text-cyan-500" /> VISUAL AUDIT_
          </h2>
          <span className="font-mono text-xs text-zinc-500">DISPLAYING {archiveNodes.length} DATA NODES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archiveNodes.map((node) => (
            <div
              key={node.id}
              className="group relative aspect-square bg-black border border-zinc-800 overflow-hidden cursor-crosshair"
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={node.img}
                alt={node.title}
                className="w-full h-full object-cover grayscale contrast-125 opacity-60 group-hover:opacity-20 transition-opacity duration-300"
              />

              {/* STATIC LABEL */}
              <div className="absolute top-4 left-4 font-mono text-xs text-zinc-500 bg-black/80 px-2 py-1 border border-zinc-800">
                {node.id}
              </div>

              {/* HOVER OVERLAY (DATA READOUT) */}
              <div className={`absolute inset-0 p-6 flex flex-col justify-center bg-zinc-950/80 backdrop-blur-sm transition-opacity duration-300 ${hoveredNode === node.id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="border border-zinc-700 p-4 relative">
                  <div className="absolute -top-2 -left-2 text-cyan-500"><Crosshair size={16} /></div>
                  <div className="absolute -bottom-2 -right-2 text-cyan-500"><Crosshair size={16} /></div>

                  <h3 className="font-mono text-sm text-white mb-4 border-b border-zinc-800 pb-2">{node.title}</h3>

                  <ul className="font-mono text-[10px] space-y-2 text-zinc-400">
                    <li className="flex justify-between"><span>GEO_LAT:</span> <span className="text-cyan-400">{node.lat}</span></li>
                    <li className="flex justify-between"><span>GEO_LON:</span> <span className="text-cyan-400">{node.lon}</span></li>
                    <li className="flex justify-between"><span>PHYS_STATE:</span> <span className={`${node.status === 'DEGRADING' ? 'text-rose-500' : 'text-amber-500'}`}>{node.status}</span></li>
                    {/* Render time simulation removed dynamic math in render loop to avoid hydration mismatch */}
                    <li className="flex justify-between"><span>RENDER_TIME:</span> <span>STABLE LOOP</span></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-black mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <Activity size={14} className="text-emerald-500 animate-pulse" />
            <span>SYSTEM ONLINE // BSVS INFRASTRUCTURE</span>
          </div>

          <div className="font-mono text-[10px] text-zinc-600">
            &copy; {new Date().getFullYear()} BE STILL VISUAL STUDIO. ALL PROTOCOLS ENFORCED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioUI;
