'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const statements = [
  {
    title: 'AUTHORITY STRATEGY',
    body: 'True cinematic atmosphere isn’t a happy accident. It’s the result of rigorously designed Visual Systems. Here is how we engineer absolute reality.',
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
            "Atmosphere cannot be faked; it must be calculated. By treating light behavior, material friction, and environmental particulate as interconnected data points, we move beyond approximation. This is the architecture of Forensic Realism. Absolute precision. Deterministic output. Visual Systems built for the uncompromising. Engineered Visuals."
          </p>
        </motion.div>

        {/* Call To Action */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 style={{ fontFamily: 'monospace', fontSize: '18px', color: '#fff', letterSpacing: '0.2em' }}>
            QUESTIONS?
          </h3>
          <a
            href="mailto:hello@bestillvisualstudio.com"
            style={{
              padding: '16px 32px',
              border: '1px solid #a78bfa',
              color: '#a78bfa',
              fontFamily: 'monospace',
              fontSize: '14px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(167, 139, 250, 0.1)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(167, 139, 250, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            [ CONTACT PROTOCOL ]
          </a>
        </motion.div>
      </section>
    </div>
  );
}
