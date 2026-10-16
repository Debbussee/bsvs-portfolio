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
    <div style={{ width: '100%', padding: '88px 0 112px 0' }}>
      <section
        id="hook"
        ref={ref}
        style={{
          maxWidth: '1020px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
                  background: '#A65E2E',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.35em',
                  color: '#A65E2E',
                  fontWeight: 600,
                }}
              >
                SECTION 04
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="font-editorial"
            style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#141413',
              lineHeight: 1.05,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            HOOK LIBRARY
          </motion.h2>
        </div>

        {/* 3 Core Statements */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {statements.map((s, i) => (
            <motion.div
              key={s.title}
              className="cinematic-glass-interactive"
              style={{
                borderRadius: '16px',
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 + i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #A65E2E, transparent)',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: '11px',
                  color: '#A65E2E',
                  letterSpacing: '0.16em',
                  marginBottom: '14px',
                  fontWeight: 600,
                }}
              >
                {s.title}
              </h3>
              <p style={{ color: '#4A4843', fontSize: '15.5px', lineHeight: '1.8' }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Master Editorial Quote */}
        <motion.div
          className="cinematic-glass"
          style={{
            borderRadius: '18px',
            padding: '48px 52px',
            marginBottom: '64px',
            position: 'relative',
            overflow: 'hidden',
            background: '#EBE6DC',
            border: '1px solid rgba(20, 20, 19, 0.14)',
            borderLeft: '4px solid #A65E2E',
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-editorial"
            style={{
              color: '#141413',
              fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
              lineHeight: '1.6',
              fontWeight: 500,
              fontStyle: 'italic',
              letterSpacing: '0.005em',
              position: 'relative',
              zIndex: 1,
            }}
          >
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
          transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="cinematic-glass"
          style={{
            borderRadius: '18px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              background: '#EBE6DC',
              borderBottom: '1px solid rgba(20, 20, 19, 0.12)',
              padding: '20px 36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#A65E2E',
                  borderRadius: '50%',
                }}
              />
              <span
                style={{
                  fontSize: '14px',
                  letterSpacing: '0.24em',
                  color: '#141413',
                  fontWeight: 700,
                }}
              >
                CONTACT BSVS
              </span>
            </div>
            <span
              className="cinematic-pill"
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '10px',
                color: '#A65E2E',
                letterSpacing: '0.15em',
                padding: '4px 12px',
                fontWeight: 600,
              }}
            >
              DIRECT CHANNEL // ACTIVE
            </span>
          </div>

          {/* Main Contact Body */}
          <div style={{ padding: '40px 36px', position: 'relative', zIndex: 2 }}>
            <div
              style={{
                fontSize: '13px',
                color: '#4A4843',
                marginBottom: '36px',
                lineHeight: '1.85',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                fontFamily: 'var(--font-geist-mono), monospace',
              }}
            >
              <div><span style={{ color: '#A65E2E', marginRight: '8px' }}>▸</span>DIRECT COMMUNICATION CHANNEL ACTIVE...</div>
              <div><span style={{ color: '#A65E2E', marginRight: '8px' }}>▸</span>FOR ENTERPRISE INQUIRIES, CLOUD PARTNERSHIPS, OR TECHNICAL AUDITS.</div>
              <div><span style={{ color: '#A65E2E', marginRight: '8px' }}>▸</span>DETERMINISTIC RESPONSES ONLY. NO PROBABILISTIC HALLUCINATION.</div>
            </div>

            {/* Email cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {/* Primary */}
              <a
                href="mailto:mkd@bestillvisualstudio.com"
                data-hover
                style={{
                  textDecoration: 'none',
                  padding: '24px 28px',
                  borderRadius: '14px',
                  background: '#F4F1EA',
                  border: '1px solid rgba(20, 20, 19, 0.14)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#A65E2E';
                  e.currentTarget.style.background = '#EBE6DC';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(20, 20, 19, 0.14)';
                  e.currentTarget.style.background = '#F4F1EA';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: '10px',
                    letterSpacing: '0.22em',
                    color: '#78746C',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  <span style={{ color: '#A65E2E', marginRight: '8px', fontWeight: 600 }}>01</span>
                  PRIMARY CHANNEL
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: '15px',
                    color: '#141413',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  mkd@bestillvisualstudio.com
                </div>
              </a>

              {/* Secondary */}
              <a
                href="mailto:marvin@thezeromandate.com"
                data-hover
                style={{
                  textDecoration: 'none',
                  padding: '24px 28px',
                  borderRadius: '14px',
                  background: '#F4F1EA',
                  border: '1px solid rgba(20, 20, 19, 0.14)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#A65E2E';
                  e.currentTarget.style.background = '#EBE6DC';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(20, 20, 19, 0.14)';
                  e.currentTarget.style.background = '#F4F1EA';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: '10px',
                    letterSpacing: '0.22em',
                    color: '#78746C',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  <span style={{ color: '#A65E2E', marginRight: '8px', fontWeight: 600 }}>02</span>
                  ZERO MANDATE ENGINE DIRECT
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: '15px',
                    color: '#141413',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  marvin@thezeromandate.com
                </div>
              </a>
            </div>

            {/* Divider */}
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(20,20,19,0.16), transparent)',
                margin: '32px 0 24px 0',
              }}
            />

            {/* Status line */}
            <div
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '10px',
                color: '#78746C',
                textAlign: 'center',
                letterSpacing: '0.15em',
              }}
            >
              ▸ ALL CHANNELS MONITORED — DETERMINISTIC RESPONSES WITHIN 48-72 HOURS
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
