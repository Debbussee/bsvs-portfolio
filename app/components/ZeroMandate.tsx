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
    body: 'The environment exists solely to anchor the subject. By utilizing absolute voids and a narrow depth of field, we strip away peripheral noise. This forces every bit of visual detail to concentrate on the physical mass and kinetic state of the subject, ensuring the viewer’s focus remains entirely on the raw tactility of the geometry.',
  },
];

function ProtocolCard({ p, index }: { p: typeof protocols[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'relative',
        borderLeft: '2px solid #27272a',
        paddingLeft: '32px',
        paddingTop: '8px',
        paddingBottom: '8px',
      }}
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* animated border accent */}
      <motion.div
        style={{
          position: 'absolute',
          left: '-2px',
          top: 0,
          width: '2px',
          background: '#22d3ee',
        }}
        initial={{ height: 0 }}
        animate={inView ? { height: '100%' } : { height: 0 }}
        transition={{ delay: index * 0.18 + 0.2, duration: 0.5, ease: 'easeOut' }}
      />

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '12px' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#52525b' }}>{p.num}</span>
        <h3 style={{ fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.1em', color: '#ffffff' }}>{p.title}</h3>
      </div>
      <p style={{ color: '#a1a1aa', fontSize: '16px', lineHeight: '1.8', maxWidth: '65ch', whiteSpace: 'pre-wrap' }}>{p.body}</p>
    </motion.div>
  );
}

export default function ZeroMandate() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <div style={{ width: '100%', background: '#0a0a0b' }}>
      <section
        id="mandate"
        style={{
          maxWidth: '896px',
          margin: '0 auto',
          padding: '80px 48px',
        }}
      >
        <div ref={headerRef}>
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div style={{ width: '16px', height: '1px', background: '#f59e0b' }} />
            <span style={{ fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.5em', color: '#f59e0b' }}>SECTION 02</span>
          </motion.div>

          <motion.h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 'bold',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '64px',
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            THE ZERO MANDATE
          </motion.h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {protocols.map((p, i) => (
            <ProtocolCard key={p.num} p={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
