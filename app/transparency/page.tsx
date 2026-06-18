'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, ShieldCheck, Linkedin, Calendar, Briefcase, Award } from 'lucide-react';
import dynamic from 'next/dynamic';

const CursorRig = dynamic(() => import('../components/CursorRig'), { ssr: false });

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-900 selection:text-cyan-50 relative overflow-hidden">
      {/* Background HUD Grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-zinc-800"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-zinc-800"></div>
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-zinc-800"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-zinc-800"></div>
      </div>

      <CursorRig />

      {/* ── HEADER ── */}
      <header className="fixed top-0 w-full z-50 h-16 flex items-center px-6 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              <span>BSVS</span>
            </Link>
            <span className="font-mono text-[10px] text-zinc-600 border-l border-zinc-800 pl-3 ml-1">
              SYS.OP.NODE // TRANSPARENCY
            </span>
          </div>

          <Link href="/" className="font-mono text-xs text-zinc-500 hover:text-cyan-400 transition-colors flex items-center gap-2">
            <ArrowLeft size={14} /> [ RETURN TO PORTAL ]
          </Link>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative z-10">
        
        {/* Intro / Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-cyan-500" />
            <span className="font-mono text-xs letter-spacing-0.2em text-cyan-400 uppercase">OFFICIAL AUDIT REPORT</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-8 uppercase leading-none">
            Executive Leadership &<br />Origin History
          </h1>

          <p className="font-sans text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl border-l-2 border-zinc-800 pl-6 py-2">
            Be Still Visual Studio LLC operates on a foundational paradigm where raw physical science intersects with high-fidelity digital systems. Founded by Marvin DeBouse and partnered with La Chaunia DeBouse, the studio’s corporate and technical architecture is forged from over two decades of deep industrial process engineering, telecom infrastructure, and enterprise operations.
          </p>
        </motion.div>

        {/* ── LEADERSHIP PROFILES ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* Marvin DeBouse */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="border border-zinc-800 bg-zinc-900/40 p-6 rounded-sm relative group hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-mono text-lg font-bold text-white uppercase">Marvin DeBouse</h2>
                  <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider mt-1">Founder & Technical Director</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/marvin-debouse-148a673b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                >
                  <Linkedin size={14} />
                </a>
              </div>

              <div className="space-y-4 font-sans text-xs text-zinc-400">
                <div>
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Core Mandate</span>
                  <p className="text-zinc-300 leading-relaxed">Systems architecture, Zero Mandate Engine Core development, and forensic AI pipeline design.</p>
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Specialization</span>
                  <p className="text-zinc-300 leading-relaxed">High-scale GPU compute orchestration, hardware-level simulation logic, and the eradication of subjective generative drift through deterministic physical laws.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-850 mt-8 pt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="font-mono text-[8px] text-zinc-500">AUTH: DEV_LEAD_CORE</span>
            </div>
          </motion.div>

          {/* La Chaunia DeBouse */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="border border-zinc-800 bg-zinc-900/40 p-6 rounded-sm relative group hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-mono text-lg font-bold text-white uppercase">La Chaunia DeBouse</h2>
                  <p className="font-mono text-[10px] text-amber-500 uppercase tracking-wider mt-1">Partner & Governance Review</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/la-chaunia-debouse-05756a47/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500 transition-all"
                >
                  <Linkedin size={14} />
                </a>
              </div>

              <div className="space-y-4 font-sans text-xs text-zinc-400">
                <div>
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Core Mandate</span>
                  <p className="text-zinc-300 leading-relaxed">Managing the studio's corporate legal infrastructure, fiscal compliance, and enterprise market deployment.</p>
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Specialization</span>
                  <p className="text-zinc-300 leading-relaxed">Structuring institutional joint ventures, risk mitigation, human capital optimization, and operational scalability.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-850 mt-8 pt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
              <span className="font-mono text-[8px] text-zinc-500">AUTH: GOV_LEAD_REVIEW</span>
            </div>
          </motion.div>

        </div>

        {/* ── TIMELINE SECTION ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu className="text-cyan-500" size={24} />
            <h2 className="font-mono text-xl tracking-widest text-white uppercase">Technical & Corporate Timeline</h2>
            <div className="flex-1 h-[1px] bg-zinc-800 ml-4"></div>
            <span className="font-mono text-xs text-zinc-500">TIMELINE_LOG</span>
          </div>

          <p className="font-sans text-sm text-zinc-400 mb-12">
            The cross-disciplinary expertise that defines the studio's operational framework spans technical precision, engineering discipline, and corporate governance:
          </p>

          {/* Vertical Timeline */}
          <div className="relative border-l border-zinc-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
            
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-cyan-400">
                <Award size={12} />
              </div>
              <span className="inline-block font-mono text-[9px] px-2 py-0.5 border border-zinc-800 bg-zinc-900/60 text-zinc-400 mb-2 uppercase tracking-widest">
                Academic Matrix
              </span>
              <h3 className="font-mono text-sm font-bold text-white uppercase mb-2">Foundational Engineering & Design Monolith</h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-3xl">
                Marvin DeBouse secures an Electronic Engineering Technology degree from the DeVry Institute of Technology, establishing a core competency in hardware architectures and systems logic. He subsequently couples this technical foundation with a degree in Graphic Design from Remington College, merging analytical engineering with visual theory.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-cyan-400">
                <Briefcase size={12} />
              </div>
              <span className="inline-block font-mono text-[9px] px-2 py-0.5 border border-zinc-800 bg-zinc-900/60 text-zinc-400 mb-2 uppercase tracking-widest">
                17-Year Tenure
              </span>
              <h3 className="font-mono text-sm font-bold text-white uppercase mb-2">Industrial Process Engineering & Scaled Fabrication</h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-3xl">
                Marvin serves as a Process Engineering Technician for STMicroelectronics. Across nearly two decades within high-yield semiconductor fabrication environments, he masters sub-micron process stability, deterministic equipment calibration, and rigorous micro-architecture protocols—the direct genetic precursor to the Zero Mandate framework.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-cyan-400">
                <Cpu size={12} />
              </div>
              <span className="inline-block font-mono text-[9px] px-2 py-0.5 border border-zinc-800 bg-zinc-900/60 text-zinc-400 mb-2 uppercase tracking-widest">
                4-Year Tenure
              </span>
              <h3 className="font-mono text-sm font-bold text-white uppercase mb-2">Photonics & Infrastructure Deployment</h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-3xl">
                Marvin transitions into telecommunications infrastructure as a Fiber Optic Technician for AT&T, orchestrating physical-layer light transmission, signal integrity, and critical network routing.
              </p>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-amber-500">
                <Briefcase size={12} />
              </div>
              <span className="inline-block font-mono text-[9px] px-2 py-0.5 border border-zinc-800 bg-zinc-900/60 text-zinc-400 mb-2 uppercase tracking-widest">
                Corporate Matrix
              </span>
              <h3 className="font-mono text-sm font-bold text-white uppercase mb-2">Strategic Enterprise & Human Capital Operations</h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-3xl">
                La Chaunia DeBouse establishes an extensive operational footprint across high-stakes corporate environments. Her background includes driving Human Resource Operations for the Dallas Independent School District, managing complex liability frameworks as a Claims Adjuster for State Farm Mutual Insurance, and steering asset administration as an Associate Manager for the Tivoli Apartment Community.
              </p>
            </div>

            {/* Timeline Item 5 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-amber-500">
                <Award size={12} />
              </div>
              <span className="inline-block font-mono text-[9px] px-2 py-0.5 border border-zinc-800 bg-zinc-900/60 text-zinc-400 mb-2 uppercase tracking-widest">
                Academic Matrix
              </span>
              <h3 className="font-mono text-sm font-bold text-white uppercase mb-2">Institutional Alignment & Communications Governance</h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-3xl">
                La Chaunia completes her Bachelor’s degree in Communications at Dallas Baptist University, cementing an executive skill set tailored for high-authority negotiation, strategic organizational scaling, and institutional partnership structures.
              </p>
            </div>

            {/* Timeline Item 6 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-emerald-500">
                <ShieldCheck size={12} />
              </div>
              <span className="inline-block font-mono text-[9px] px-2 py-0.5 border border-emerald-900/20 bg-emerald-950/10 text-emerald-400 mb-2 uppercase tracking-widest">
                Current Epoch
              </span>
              <h3 className="font-mono text-sm font-bold text-emerald-400 uppercase mb-2">Consolidation: Be Still Visual Studio LLC</h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-3xl">
                The lifetimes of engineering rigor, network infrastructure, corporate liability management, and systemic design converge. Marvin DeBouse steps into the role of Founder & Technical Director to engineer the Zero Mandate Engine Core and pilot GPU compute orchestration. La Chaunia DeBouse assumes command of Corporate Governance, Entity Operations, & Strategic Partnership Management, establishing the legal, fiscal, and enterprise runway for the studio's deployments.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Corporate governance node card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-zinc-800/80 bg-zinc-900/20 p-6 font-mono text-[10px] text-zinc-500 leading-relaxed mb-6"
        >
          <div className="text-zinc-400 font-bold mb-2">GOVERNANCE_NODE // ZME_ENTITY_REGISTRY</div>
          Corporate Governance Node: Be Still Visual Studio LLC is a legally registered corporate entity in the State of Texas, USA. Technical operations, bare-metal container orchestration pipelines, and deterministic asset validation schemas are maintained under active Texas LLC filing matrices.
        </motion.div>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-900 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-600">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>SYSTEM ONLINE // BSVS INFRASTRUCTURE</span>
          </div>
          <div className="font-mono text-[10px] text-zinc-700">
            &copy; {new Date().getFullYear()} BE STILL VISUAL STUDIO. ALL PROTOCOLS ENFORCED.
          </div>
        </div>
      </footer>
    </div>
  );
}
