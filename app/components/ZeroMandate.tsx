'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const protocols = [
  {
    num: '01',
    title: 'THE PROTOCOL OF MATERIAL TRUTH',
    body: 'We do not generate images; we enforce physical constraints. The Zero Mandate strips away subjective aesthetic bloat, relying entirely on raw analog realism and absolute forensic truth. If the math fails, the render is rejected.',
  },
  {
    num: '02',
    title: 'Precision is the ultimate luxury.',
    body: 'Our Visual Systems represent a commitment to deterministic output and absolute creative control. By utilizing Forensic Realism, we ensure that every texture, shadow, and material interaction aligns with a singular architectural intent.\n\nEngineered Visuals. Defined by precision.',
  },
  {
    num: '03',
    title: '| ARCHITECTURAL ISOLATION',
    body: 'The environment exists solely to anchor the subject. By utilizing absolute voids and a narrow depth of field, we strip away peripheral noise. This forces every bit of visual detail to concentrate on the physical mass and kinetic state of the subject, ensuring the viewer\'s focus remains entirely on the raw tactility of the geometry.',
  },
];

function ProtocolCard({ p, index }: { p: typeof protocols[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="cinematic-glass-interactive"
      style={{
        position: 'relative',
        borderRadius: '16px',
        padding: '38px 42px',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.14, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top accent architectural rule */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), transparent)',
        }}
        initial={{ width: 0 }}
        animate={inView ? { width: '100%' } : { width: 0 }}
        transition={{ delay: index * 0.14 + 0.25, duration: 0.8, ease: 'easeOut' }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '11px',
            color: 'var(--accent-primary)',
            background: 'var(--accent-glow)',
            border: '1px solid var(--border-accent)',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontWeight: 600,
          }}
        >
          {p.num}
        </span>
        <h3
          className="font-editorial"
          style={{
            fontSize: '24px',
            fontWeight: 600,
            letterSpacing: '0.01em',
            color: 'var(--text-primary)',
          }}
        >
          {p.title}
        </h3>
      </div>
      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: '16px',
          lineHeight: '1.85',
          maxWidth: '68ch',
          whiteSpace: 'pre-wrap',
        }}
      >
        {p.body}
      </p>
    </motion.div>
  );
}

export default function ZeroMandate() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const aboutBtnRef = useRef<HTMLDivElement>(null);
  const aboutBtnInView = useInView(aboutBtnRef, { once: true, margin: '-60px' });

  return (
    <div style={{ width: '100%' }}>
      <section
        id="mandate"
        style={{
          maxWidth: '1020px',
          margin: '0 auto',
          padding: '88px 32px',
        }}
      >
        <div ref={headerRef}>
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}
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
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.35em',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                }}
              >
                SECTION 02
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="font-editorial"
            style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            THE ZERO MANDATE
          </motion.h2>

          <motion.p
            style={{
              fontSize: '16px',
              lineHeight: '1.85',
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              maxWidth: '68ch',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Operational Status: The Zero Mandate Engine is a proprietary architecture engineered, owned, and operated by Be Still Visual Studio LLC. For raw repository access, developer telemetry logs, and complete system documentation schemas, visit our core developer hub.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a
              href="/thezeromandate"
              data-hover
              className="cinematic-btn cinematic-btn-primary"
            >
              <span>ZERO MANDATE ENGINE — DEVELOPER HUB</span>
              <span style={{ fontSize: '14px', lineHeight: 1 }}>→</span>
            </a>
          </motion.div>
          <div style={{ marginBottom: '56px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {protocols.map((p, i) => (
            <ProtocolCard key={p.num} p={p} index={i} />
          ))}
        </div>

        {/* EXECUTIVE LEADERSHIP & ORIGIN HISTORY */}
        <motion.div
          ref={aboutBtnRef}
          className="cinematic-glass"
          style={{
            marginTop: '64px',
            padding: '44px 42px',
            borderRadius: '18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '24px',
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--bg-secondary)',
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={aboutBtnInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-editorial"
            style={{
              fontSize: 'clamp(1.85rem, 3.8vw, 2.6rem)',
              fontWeight: 600,
              letterSpacing: '-0.015em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            EXECUTIVE LEADERSHIP &amp; ORIGIN HISTORY
          </h2>

          <a
            href="/transparency"
            data-hover
            className="cinematic-btn cinematic-btn-secondary"
          >
            <span>FOUNDER AND CORE TEAM</span>
            <span style={{ fontSize: '14px', lineHeight: 1 }}>→</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
