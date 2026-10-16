'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Cpu, Linkedin } from 'lucide-react';
import dynamic from 'next/dynamic';
import ThemeToggle from '../components/ThemeToggle';

const CursorRig = dynamic(() => import('../components/CursorRig'), { ssr: false });

function TimelineItem({ 
  badge, 
  title, 
  body, 
  index, 
}: { 
  badge: string; 
  title: string; 
  body: string; 
  index: number; 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="cinematic-glass-interactive relative"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRadius: '16px',
        padding: '32px 36px',
        overflow: 'hidden',
      }}
    >
      {/* Animated Top Rule */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--accent-primary), transparent)',
        }}
        initial={{ width: 0 }}
        animate={inView ? { width: '100%' } : { width: 0 }}
        transition={{ delay: index * 0.08 + 0.2, duration: 0.6, ease: 'easeOut' }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '10px',
            padding: '4px 12px',
            borderRadius: '9999px',
            border: '1px solid var(--border-accent)',
            backgroundColor: 'var(--accent-glow)',
            color: 'var(--accent-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontWeight: 600,
          }}
        >
          {badge}
        </span>
      </div>

      <h3
        className="font-editorial"
        style={{
          fontSize: '23px',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '12px',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: '1.8', maxWidth: '72ch', whiteSpace: 'pre-wrap' }}>
        {body}
      </p>
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
    <div
      className="min-h-screen relative overflow-hidden arch-grid noise"
      style={{ background: 'var(--bg-canvas)', color: 'var(--text-primary)' }}
    >
      <CursorRig />

      {/* ── FLOATING HEADER / NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            height: '62px',
            padding: '0 24px',
            borderRadius: '9999px',
            background: 'var(--bg-nav)',
            backdropFilter: 'blur(20px) saturate(140%)',
            WebkitBackdropFilter: 'blur(20px) saturate(140%)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--card-shadow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--accent-primary)' }}
            />
            <Link
              href="/"
              className="font-editorial text-2xl font-bold tracking-tight uppercase no-underline"
              style={{ color: 'var(--text-primary)' }}
              data-hover
            >
              BSVS
            </Link>
            <span
              className="hidden md:inline font-mono text-[10px] tracking-[0.18em] pl-3 ml-1"
              style={{ color: 'var(--text-muted)', borderLeft: '1px solid var(--border-subtle)' }}
            >
              SYS.OP.NODE // TRANSPARENCY
            </span>
          </div>

          <nav className="flex items-center gap-3 font-mono text-xs tracking-widest">
            <ThemeToggle />
            <Link
              href="/"
              className="cinematic-btn cinematic-btn-secondary"
              style={{ padding: '7px 18px', fontSize: '10px' }}
              data-hover
            >
              <ArrowLeft size={12} /> RETURN TO PORTAL
            </Link>
          </nav>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 6vw, 64px)',
          paddingRight: 'clamp(24px, 6vw, 64px)',
          paddingTop: '148px',
          paddingBottom: '120px',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Intro / Header */}
        <div ref={headerRef} style={{ marginBottom: '72px' }}>
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              className="cinematic-pill"
              style={{
                padding: '5px 14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                }}
              />
              <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: '10px', letterSpacing: '0.35em', color: 'var(--accent-primary)', fontWeight: 600 }}>
                TRANSPARENCY AUDIT
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="font-editorial"
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '32px',
              textTransform: 'uppercase',
              lineHeight: '1.05',
            }}
          >
            Executive Leadership &amp;<br />Origin History
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: '16px',
              lineHeight: '1.85',
              color: 'var(--text-secondary)',
              maxWidth: '72ch',
              borderLeft: '3px solid var(--accent-primary)',
              paddingLeft: '24px',
            }}
          >
            Be Still Visual Studio LLC operates on a foundational paradigm where raw physical science intersects with high-fidelity digital systems. Founded by Marvin DeBouse and partnered with La Chaunia DeBouse, the studio’s corporate and technical architecture is forged from over two decades of deep industrial process engineering, telecom infrastructure, and enterprise operations.
          </motion.p>
        </div>

        {/* ── LEADERSHIP PROFILES ── */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            marginBottom: '104px',
          }}
        >
          {/* Marvin DeBouse */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="cinematic-glass-interactive flex flex-col justify-between relative overflow-hidden"
            style={{
              padding: '44px 36px',
              borderRadius: '18px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--accent-primary), transparent)',
              }}
            />

            <div>
              <div className="flex justify-between items-start" style={{ marginBottom: '32px' }}>
                <div>
                  <h2 className="font-editorial text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    Marvin DeBouse
                  </h2>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] mt-1.5" style={{ color: 'var(--accent-primary)' }}>
                    Founder &amp; Technical Director
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/marvin-debouse-148a673b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all cinematic-pill"
                  data-hover
                >
                  <Linkedin size={15} />
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <span className="block font-mono uppercase tracking-[0.2em] mb-2 text-[10px] font-semibold" style={{ color: 'var(--text-muted)' }}>
                    CORE MANDATE
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Systems architecture, Zero Mandate Engine Core development, and forensic AI pipeline design.
                  </p>
                </div>
                <div>
                  <span className="block font-mono uppercase tracking-[0.2em] mb-2 text-[10px] font-semibold" style={{ color: 'var(--text-muted)' }}>
                    SPECIALIZATION
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    High-scale GPU compute orchestration, hardware-level simulation logic, and the eradication of subjective generative drift through deterministic physical laws.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 flex items-center gap-2.5" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--accent-primary)' }}
              />
              <span className="font-mono text-[10px] tracking-[0.15em] font-medium" style={{ color: 'var(--text-muted)' }}>
                NODE: ZME_CORE_ARCHITECT
              </span>
            </div>
          </motion.div>

          {/* La Chaunia DeBouse */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="cinematic-glass-interactive flex flex-col justify-between relative overflow-hidden"
            style={{
              padding: '44px 36px',
              borderRadius: '18px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--accent-secondary), transparent)',
              }}
            />

            <div>
              <div className="flex justify-between items-start" style={{ marginBottom: '32px' }}>
                <div>
                  <h2 className="font-editorial text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    La Chaunia DeBouse
                  </h2>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] mt-1.5" style={{ color: 'var(--accent-primary)' }}>
                    Partner &amp; Operations Review
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/la-chaunia-debouse-05756a47/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all cinematic-pill"
                  data-hover
                >
                  <Linkedin size={15} />
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <span className="block font-mono uppercase tracking-[0.2em] mb-2 text-[10px] font-semibold" style={{ color: 'var(--text-muted)' }}>
                    CORE MANDATE
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Managing the studio&apos;s corporate legal infrastructure, fiscal compliance, and enterprise market deployment.
                  </p>
                </div>
                <div>
                  <span className="block font-mono uppercase tracking-[0.2em] mb-2 text-[10px] font-semibold" style={{ color: 'var(--text-muted)' }}>
                    SPECIALIZATION
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Structuring institutional joint ventures, risk mitigation, human capital optimization, and operational scalability.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 flex items-center gap-2.5" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--accent-secondary)' }}
              />
              <span className="font-mono text-[10px] tracking-[0.15em] font-medium" style={{ color: 'var(--text-muted)' }}>
                NODE: GOV_CORP_OFFICER
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── TIMELINE SECTION ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '96px' }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '28px',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Cpu style={{ color: 'var(--accent-primary)' }} size={20} />
              <h2 className="font-editorial" style={{ fontSize: '26px', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
                Technical &amp; Corporate Timeline
              </h2>
            </div>
            <span className="cinematic-pill font-mono text-[10px] font-semibold px-3 py-1" style={{ color: 'var(--text-secondary)' }}>
              TIMELINE_LOG
            </span>
          </div>

          <p 
            style={{
              fontSize: '15.5px',
              color: 'var(--text-secondary)',
              marginBottom: '36px',
            }}
          >
            The cross-disciplinary expertise that defines the studio&apos;s operational framework spans technical precision, engineering discipline, and corporate governance:
          </p>

          {/* Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
            />

            <TimelineItem 
              index={4}
              badge="Academic Matrix" 
              title="Institutional Alignment & Communications Governance" 
              body="La Chaunia completes her Bachelor’s degree in Communications at Dallas Baptist University, cementing an executive skill set tailored for high-authority negotiation, strategic organizational scaling, and institutional partnership structures." 
            />

            <TimelineItem 
              index={5}
              badge="Current Epoch" 
              title="Consolidation: Be Still Visual Studio LLC" 
              body="The lifetimes of engineering rigor, network infrastructure, corporate liability management, and systemic design converge. Marvin DeBouse steps into the role of Founder & Technical Director to engineer the Zero Mandate Engine Core and pilot GPU compute orchestration. La Chaunia DeBouse assumes command of Corporate Governance, Entity Operations, & Strategic Partnership Management, establishing the legal, fiscal, and enterprise runway for the studio's deployments." 
            />
          </div>
        </motion.div>

        {/* Corporate governance node card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cinematic-glass leading-relaxed relative"
          style={{
            padding: '32px 36px',
            borderRadius: '18px',
            background: 'var(--bg-secondary)',
          }}
        >
          <div className="font-mono text-xs font-semibold mb-3 flex items-center gap-2.5 tracking-wider" style={{ color: 'var(--text-primary)' }}>
            <span
              className="w-2 h-2 inline-block rounded-full"
              style={{ background: 'var(--status-ok)' }}
            />
            GOVERNANCE_NODE // ZME_ENTITY_REGISTRY
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Corporate Governance Node: Be Still Visual Studio LLC is a legally registered corporate entity in the State of Texas, USA. Technical operations, bare-metal container orchestration pipelines, and deterministic asset validation schemas are maintained under active Texas LLC filing matrices.
          </p>
        </motion.div>
      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--bg-secondary)',
        }}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.16em]" style={{ color: 'var(--text-secondary)' }}>
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--status-ok)' }}
            />
            <span>SYSTEM ONLINE // BSVS INFRASTRUCTURE</span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} BE STILL VISUAL STUDIO. ALL PROTOCOLS ENFORCED.
          </div>
        </div>
      </footer>
    </div>
  );
}
