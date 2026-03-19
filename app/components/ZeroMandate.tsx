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
    title: 'SPATIAL & KINETIC LOCKDOWN',
    body: 'Every node in the archive operates strictly under defined physics constraints. Thermodynamic drag, high Weber number fragmentation, and geometric permanence are not suggestions—they are structural mandates.',
  },
  {
    num: '03',
    title: 'ARCHITECTURAL ISOLATION',
    body: 'The environment must serve the subject. Absolute voids (#000000) and aggressive aperture isolation (f/1.4) are utilized to force processing compute directly into the physical mass and kinetic state of the core geometry.',
  },
];

function ProtocolCard({ p, index }: { p: typeof protocols[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="relative border-l-2 border-zinc-800 pl-8 py-2"
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* animated border accent */}
      <motion.div
        className="absolute left-[-2px] top-0 w-[2px] bg-cyan-500"
        initial={{ height: 0 }}
        animate={inView ? { height: '100%' } : { height: 0 }}
        transition={{ delay: index * 0.18 + 0.2, duration: 0.5, ease: 'easeOut' }}
      />

      <div className="flex items-baseline gap-4 mb-3">
        <span className="font-mono text-xs text-zinc-600">{p.num}</span>
        <h3 className="font-mono text-sm tracking-widest text-white">{p.title}</h3>
      </div>
      <p className="text-zinc-400 text-base leading-relaxed max-w-prose">{p.body}</p>
    </motion.div>
  );
}

export default function ZeroMandate() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="mandate" className="py-32 px-6 max-w-4xl mx-auto">
      <div ref={headerRef}>
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-4 h-px bg-amber-500" />
          <span className="font-mono text-xs tracking-[0.5em] text-amber-500">SECTION 02</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          THE ZERO MANDATE
        </motion.h2>
      </div>

      <div className="space-y-12">
        {protocols.map((p, i) => (
          <ProtocolCard key={p.num} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
