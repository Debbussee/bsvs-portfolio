'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const statements = [
  {
    title: 'AUTHORITY STRATEGY',
    body: 'True cinematic atmosphere isn\u2019t a happy accident. It\u2019s the result of rigorously designed Visual Systems. Here is how we engineer absolute reality.',
  },
  {
    title: 'CONFLICT & RESOLUTION',
    body: 'Flat lighting and lifeless textures destroy credibility. The solution lies in physical logic. Watch how we apply Forensic Realism to construct environments you can actually feel.',
  },
  {
    title: 'SENSORY AESTHETIC',
    body: 'Tangible textures. Volumetric light. Uncompromising grit. Step inside the architecture of Engineered Visuals.',
  },
];

export default function HookLibrary() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div style={{ width: '100%', background: '#000', padding: '80px 0' }}>
      <section
        id="hook"
        ref={ref}
        style={{
          maxWidth: '896px',
          margin: '0 auto',
          padding: '0 48px',
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: '64px' }}>
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div style={{ width: '16px', height: '1px', background: '#a78bfa' }} />
            <span style={{ fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.5em', color: '#a78bfa' }}>SECTION 04</span>
          </motion.div>

          <motion.h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 'bold',
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            HOOK LIBRARY
          </motion.h2>
        </div>

        {/* 3 Core Statements */}
        <div style={{ display: 'grid', gap: '32px', marginBottom: '80px' }}>
          {statements.map((s, i) => (
            <motion.div
              key={s.title}
              style={{
                borderLeft: '2px solid #27272a',
                paddingLeft: '24px',
              }}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
            >
              <h3 style={{ fontFamily: 'monospace', fontSize: '14px', color: '#fff', letterSpacing: '0.1em', marginBottom: '12px' }}>
                {s.title}
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '16px', lineHeight: '1.8', maxWidth: '65ch' }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Master Copy */}
        <motion.div
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '40px',
            marginBottom: '64px',
            position: 'relative'
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Decorative Corner Accents */}
          <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '12px', height: '12px', borderTop: '2px solid #a78bfa', borderLeft: '2px solid #a78bfa' }} />
          <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '12px', height: '12px', borderBottom: '2px solid #a78bfa', borderRight: '2px solid #a78bfa' }} />

          <p style={{ color: '#d4d4d8', fontSize: '18px', lineHeight: '1.9', fontStyle: 'italic', letterSpacing: '0.02em', textAlign: 'justify' }}>
            &quot;Atmosphere cannot be faked; it must be calculated. By treating light behavior, material friction, and environmental particulate as interconnected data points, we move beyond approximation. This is the architecture of Forensic Realism. Absolute precision. Deterministic output. Visual Systems built for the uncompromising. Engineered Visuals.&quot;
          </p>
        </motion.div>

        {/* ─────────────────────────────────────────────
            CONTACT BSVS — Direct Communication Channel
            ───────────────────────────────────────────── */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          {/* Protocol Header Bar */}
          <div style={{
            background: 'rgba(167,139,250,0.06)',
            border: '1px solid rgba(167,139,250,0.2)',
            borderBottom: 'none',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '8px', height: '8px',
                background: '#a78bfa',
                borderRadius: '50%',
                boxShadow: '0 0 8px rgba(167,139,250,0.6)',
                animation: 'pulse 3s infinite',
              }} />
              <span style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                letterSpacing: '0.3em',
                color: '#a78bfa',
                fontWeight: 'bold',
              }}>
                CONTACT BSVS
              </span>
            </div>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '10px',
              color: '#52525b',
              letterSpacing: '0.15em',
            }}>
              DIRECT CHANNEL // ACTIVE
            </span>
          </div>

          {/* Main Terminal Panel */}
          <div style={{
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(167,139,250,0.2)',
            padding: '40px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Scan-line overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(167,139,250,0.015) 3px, rgba(167,139,250,0.015) 4px)',
              pointerEvents: 'none',
              zIndex: 1,
            }} />

            {/* Corner brackets */}
            <div style={{ position: 'absolute', top: '0', left: '0', width: '16px', height: '16px', borderTop: '2px solid #a78bfa', borderLeft: '2px solid #a78bfa' }} />
            <div style={{ position: 'absolute', top: '0', right: '0', width: '16px', height: '16px', borderTop: '2px solid #a78bfa', borderRight: '2px solid #a78bfa' }} />
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '16px', height: '16px', borderBottom: '2px solid #a78bfa', borderLeft: '2px solid #a78bfa' }} />
            <div style={{ position: 'absolute', bottom: '0', right: '0', width: '16px', height: '16px', borderBottom: '2px solid #a78bfa', borderRight: '2px solid #a78bfa' }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Terminal prompt intro */}
              <div style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                color: '#52525b',
                marginBottom: '32px',
                lineHeight: '1.8',
              }}>
                <span style={{ color: '#a78bfa' }}>&gt;</span> DIRECT COMMUNICATION CHANNEL ACTIVE...<br />
                <span style={{ color: '#a78bfa' }}>&gt;</span> FOR ENTERPRISE INQUIRIES, CLOUD PARTNERSHIPS, OR TECHNICAL AUDITS.<br />
                <span style={{ color: '#a78bfa' }}>&gt;</span> DETERMINISTIC RESPONSES ONLY. NO PROBABILISTIC HALLUCINATION.<br />
              </div>

              {/* Email addresses */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {/* Primary */}
                <div style={{
                  borderLeft: '2px solid #a78bfa',
                  paddingLeft: '20px',
                }}>
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    color: '#52525b',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}>
                    <span style={{ color: '#a78bfa', marginRight: '8px' }}>01</span>
                    PRIMARY CHANNEL
                  </div>
                  <a
                    href="mailto:mkd@bestillvisualstudio.com"
                    data-hover
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '16px',
                      color: '#e4e4e7',
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      display: 'inline-block',
                      padding: '8px 0',
                      borderBottom: '1px solid #27272a',
                      transition: 'color 0.3s, border-color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#a78bfa';
                      (e.target as HTMLElement).style.borderColor = '#a78bfa';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = '#e4e4e7';
                      (e.target as HTMLElement).style.borderColor = '#27272a';
                    }}
                  >
                    mkd@bestillvisualstudio.com
                  </a>
                </div>

                {/* Secondary */}
                <div style={{
                  borderLeft: '2px solid #a78bfa',
                  paddingLeft: '20px',
                }}>
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    color: '#52525b',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}>
                    <span style={{ color: '#a78bfa', marginRight: '8px' }}>02</span>
                    ZERO MANDATE ENGINE DIRECT
                  </div>
                  <a
                    href="mailto:marvin@thezeromandate.com"
                    data-hover
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '16px',
                      color: '#e4e4e7',
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      display: 'inline-block',
                      padding: '8px 0',
                      borderBottom: '1px solid #27272a',
                      transition: 'color 0.3s, border-color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#a78bfa';
                      (e.target as HTMLElement).style.borderColor = '#a78bfa';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = '#e4e4e7';
                      (e.target as HTMLElement).style.borderColor = '#27272a';
                    }}
                  >
                    marvin@thezeromandate.com
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent)',
                margin: '32px 0',
              }} />

              {/* Status line */}
              <div style={{
                fontFamily: 'monospace',
                fontSize: '10px',
                color: '#27272a',
                textAlign: 'center',
                letterSpacing: '0.15em',
              }}>
                ▸ ALL CHANNELS MONITORED — DETERMINISTIC RESPONSES WITHIN 48-72 HOURS
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
