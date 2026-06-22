'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Cpu, ShieldCheck, Linkedin, Briefcase, Award, Crosshair } from 'lucide-react';
import dynamic from 'next/dynamic';

const CursorRig = dynamic(() => import('../components/CursorRig'), { ssr: false });

function TimelineItem({ 
  badge, 
  title, 
  body, 
  index, 
  glowColor = '#22d3ee' 
}: { 
  badge: string; 
  title: string; 
  body: string; 
  index: number; 
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderLeft: '2px solid #27272a',
        paddingLeft: '40px',
        paddingTop: '16px',
        paddingBottom: '16px',
      }}
    >
      {/* Animated Left Glow Line */}
      <motion.div
        className="absolute left-[-2px] top-0 w-[2px]"
        style={{ background: glowColor }}
        initial={{ height: 0 }}
        animate={inView ? { height: '100%' } : { height: 0 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5, ease: 'easeOut' }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '9px', padding: '2px 8px', border: '1px solid #27272a', backgroundColor: 'rgba(24, 24, 27, 0.6)', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {badge}
        </span>
      </div>

      <h3 style={{ fontFamily: 'monospace', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>{title}</h3>
      <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.8', maxWidth: '65ch', whiteSpace: 'pre-wrap' }}>{body}</p>
    </motion.div>
  );
}

export default function TransparencyPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  useEffect(() => {
    const block = (e: Event) => e.preventDefault();
    document.addEventListener('contextmenu', block);
    document.addEventListener('copy', block);
    document.addEventListener('paste', block);
    return () => {
      document.removeEventListener('contextmenu', block);
      document.removeEventListener('copy', block);
      document.removeEventListener('paste', block);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-cyan-900 selection:text-cyan-50 relative overflow-hidden scanlines noise">
      
      <CursorRig />

      {/* ── HEADER / NAV ── */}
      <header className="fixed top-0 w-full z-50 h-16 flex items-center px-6 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-white uppercase" data-hover>
              BSVS
            </Link>
            <span className="hidden md:inline font-mono text-[10px] text-zinc-600 border-l border-zinc-800 pl-3 ml-1">
              SYS.OP.NODE // TRANSPARENCY
            </span>
          </div>

          <nav className="flex gap-8 font-mono text-xs tracking-widest text-zinc-500">
            <Link href="/" className="hover:text-cyan-400 transition-colors flex items-center gap-2" data-hover>
              <ArrowLeft size={12} /> [ RETURN TO PORTAL ]
            </Link>
          </nav>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(32px, 8vw, 144px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          paddingTop: '180px',
          paddingBottom: '128px',
          position: 'relative',
          zIndex: 10
        }}
      >
        
        {/* Intro / Header */}
        <div ref={headerRef} style={{ marginBottom: '80px' }}>
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div style={{ width: '16px', height: '1px', background: '#00d2ef' }} />
            <span style={{ fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.5em', color: '#00d2ef' }}>TRANSPARENCY AUDIT</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'monospace',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '48px',
              textTransform: 'uppercase',
              lineHeight: '1.1',
            }}
          >
            Executive Leadership &<br />Origin History
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              lineHeight: '1.8',
              color: '#a1a1aa',
              maxWidth: '65ch',
              borderLeft: '2px solid #27272a',
              paddingLeft: '32px',
              paddingTop: '8px',
              paddingBottom: '8px',
            }}
          >
            Be Still Visual Studio LLC operates on a foundational paradigm where raw physical science intersects with high-fidelity digital systems. Founded by Marvin DeBouse and partnered with La Chaunia DeBouse, the studio’s corporate and technical architecture is forged from over two decades of deep industrial process engineering, telecom infrastructure, and enterprise operations.
          </motion.p>
        </div>

        {/* ── LEADERSHIP PROFILES ── */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            marginBottom: '120px',
          }}
        >
          
          {/* Marvin DeBouse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-zinc-800 bg-zinc-950 rounded-none relative group hover:border-zinc-700 transition-all flex flex-col justify-between"
            style={{
              padding: '48px 40px',
            }}
          >
            {/* HUD Bounding Corner Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-800 group-hover:border-cyan-500/50 transition-colors"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-800 group-hover:border-cyan-500/50 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-800 group-hover:border-cyan-500/50 transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-800 group-hover:border-cyan-500/50 transition-colors"></div>

            <div>
              <div className="flex justify-between items-start" style={{ marginBottom: '32px' }}>
                <div>
                  <h2 className="font-mono text-lg font-bold text-white uppercase tracking-wide">Marvin DeBouse</h2>
                  <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mt-1">Founder & Technical Director</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/marvin-debouse-148a673b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-none border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-400 transition-all bg-zinc-950"
                  data-hover
                >
                  <Linkedin size={14} />
                </a>
              </div>

              <div className="font-mono text-[11px] text-zinc-400" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <span className="block text-zinc-500 uppercase tracking-widest mb-2 text-[9px]">[ Core Mandate ]</span>
                  <p className="text-zinc-300 leading-relaxed">Systems architecture, Zero Mandate Engine Core development, and forensic AI pipeline design.</p>
                </div>
                <div>
                  <span className="block text-zinc-500 uppercase tracking-widest mb-2 text-[9px]">[ Specialization ]</span>
                  <p className="text-zinc-300 leading-relaxed">High-scale GPU compute orchestration, hardware-level simulation logic, and the eradication of subjective generative drift through deterministic physical laws.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 mt-10 pt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="font-mono text-[8px] text-zinc-600">NODE: ZME_CORE_ARCHITECT</span>
            </div>
          </motion.div>

          {/* La Chaunia DeBouse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-zinc-800 bg-zinc-950 rounded-none relative group hover:border-zinc-700 transition-all flex flex-col justify-between"
            style={{
              padding: '48px 40px',
            }}
          >
            {/* HUD Bounding Corner Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-800 group-hover:border-amber-500/50 transition-colors"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-800 group-hover:border-amber-500/50 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-800 group-hover:border-amber-500/50 transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-800 group-hover:border-amber-500/50 transition-colors"></div>

            <div>
              <div className="flex justify-between items-start" style={{ marginBottom: '32px' }}>
                <div>
                  <h2 className="font-mono text-lg font-bold text-white uppercase tracking-wide">La Chaunia DeBouse</h2>
                  <p className="font-mono text-[10px] text-amber-500 uppercase tracking-widest mt-1">Partner & Operations Review</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/la-chaunia-debouse-05756a47/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-none border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-amber-500 hover:border-amber-500 transition-all bg-zinc-950"
                  data-hover
                >
                  <Linkedin size={14} />
                </a>
              </div>

              <div className="font-mono text-[11px] text-zinc-400" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <span className="block text-zinc-500 uppercase tracking-widest mb-2 text-[9px]">[ Core Mandate ]</span>
                  <p className="text-zinc-300 leading-relaxed">Managing the studio's corporate legal infrastructure, fiscal compliance, and enterprise market deployment.</p>
                </div>
                <div>
                  <span className="block text-zinc-500 uppercase tracking-widest mb-2 text-[9px]">[ Specialization ]</span>
                  <p className="text-zinc-300 leading-relaxed">Structuring institutional joint ventures, risk mitigation, human capital optimization, and operational scalability.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 mt-10 pt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
              <span className="font-mono text-[8px] text-zinc-600">NODE: GOV_CORP_OFFICER</span>
            </div>
          </motion.div>

        </div>

        {/* ── TIMELINE SECTION ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '120px' }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '48px',
              borderBottom: '1px solid #27272a',
              paddingBottom: '24px',
            }}
          >
            <Cpu className="text-cyan-500 animate-pulse" size={20} />
            <h2 style={{ fontFamily: 'monospace', fontSize: '16px', letterSpacing: '0.1em', color: '#ffffff', textTransform: 'uppercase' }}>Technical & Corporate Timeline</h2>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#27272a', marginLeft: '16px' }}></div>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#52525b' }}>TIMELINE_LOG</span>
          </div>

          <p 
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              color: '#52525b',
              marginBottom: '48px',
            }}
          >
            The cross-disciplinary expertise that defines the studio's operational framework spans technical precision, engineering discipline, and corporate governance:
          </p>

          {/* Vertical Timeline with ProtocolCard style items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            
            <TimelineItem 
              index={0}
              badge="Academic Matrix" 
              title="Foundational Engineering & Design Monolith" 
              body="Marvin DeBouse secures an Electronic Engineering Technology degree from the DeVry Institute of Technology, establishing a core competency in hardware architectures and systems logic. He subsequently couples this technical foundation with a degree in Graphic Design from Remington College, merging analytical engineering with visual theory." 
            />

            <TimelineItem 
              index={1}
              badge="17-Year Tenure" 
              title="Industrial Process Engineering & Scaled Fabrication" 
              body="Marvin serves as a Process Engineering Technician for STMicroelectronics. Across nearly two decades within high-yield semiconductor fabrication environments, he masters sub-micron process stability, deterministic equipment calibration, and rigorous micro-architecture protocols—the direct genetic precursor to the Zero Mandate framework." 
            />

            <TimelineItem 
              index={2}
              badge="4-Year Tenure" 
              title="Photonics & Infrastructure Deployment" 
              body="Marvin transitions into telecommunications infrastructure as a Fiber Optic Technician for AT&T, orchestrating physical-layer light transmission, signal integrity, and critical network routing." 
            />

            <TimelineItem 
              index={3}
              badge="Corporate Matrix" 
              title="Strategic Enterprise & Human Capital Operations" 
              body="La Chaunia DeBouse establishes an extensive operational footprint across high-stakes corporate environments. Her background includes driving Human Resource Operations for the Dallas Independent School District, managing complex liability frameworks as a Claims Adjuster for State Farm Mutual Insurance, and steering asset administration as an Associate Manager for the Tivoli Apartment Community." 
              glowColor="#f59e0b"
            />

            <TimelineItem 
              index={4}
              badge="Academic Matrix" 
              title="Institutional Alignment & Communications Governance" 
              body="La Chaunia completes her Bachelor’s degree in Communications at Dallas Baptist University, cementing an executive skill set tailored for high-authority negotiation, strategic organizational scaling, and institutional partnership structures." 
              glowColor="#f59e0b"
            />

            <TimelineItem 
              index={5}
              badge="Current Epoch" 
              title="Consolidation: Be Still Visual Studio LLC" 
              body="The lifetimes of engineering rigor, network infrastructure, corporate liability management, and systemic design converge. Marvin DeBouse steps into the role of Founder & Technical Director to engineer the Zero Mandate Engine Core and pilot GPU compute orchestration. La Chaunia DeBouse assumes command of Corporate Governance, Entity Operations, & Strategic Partnership Management, establishing the legal, fiscal, and enterprise runway for the studio's deployments." 
              glowColor="#10b981"
            />

          </div>
        </motion.div>

        {/* Corporate governance node card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-zinc-800 bg-zinc-950 font-mono text-[10px] text-zinc-500 leading-relaxed relative"
          style={{
            padding: '32px 40px',
            marginBottom: '80px',
          }}
        >
          <div className="text-zinc-400 font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 inline-block rounded-full"></span>
            GOVERNANCE_NODE // ZME_ENTITY_REGISTRY
          </div>
          Corporate Governance Node: Be Still Visual Studio LLC is a legally registered corporate entity in the State of Texas, USA. Technical operations, bare-metal container orchestration pipelines, and deterministic asset validation schemas are maintained under active Texas LLC filing matrices.
        </motion.div>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-900 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-600">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>SYSTEM ONLINE // BSVS INFRASTRUCTURE</span>
          </div>
          <div className="font-mono text-[10px] text-zinc-500">
            &copy; {new Date().getFullYear()} BE STILL VISUAL STUDIO. ALL PROTOCOLS ENFORCED.
          </div>
        </div>
      </footer>
    </div>
  );
}
