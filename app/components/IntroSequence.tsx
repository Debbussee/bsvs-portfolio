'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSequenceProps {
  onComplete: () => void;
}

const LETTERS = 'BSVS'.split('');

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [phase, setPhase] = useState<'typing' | 'glitch' | 'hold' | 'exit'>('typing');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('glitch'), 1200);
    const t2 = setTimeout(() => setPhase('hold'),   1800);
    const t3 = setTimeout(() => setPhase('exit'),   2600);
    const t4 = setTimeout(() => onComplete(),        3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9990] bg-black flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* scanning line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-cyan-500 opacity-60"
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          />

          {/* logo letters */}
          <div className="flex gap-1 overflow-hidden">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                className="font-mono text-7xl md:text-9xl font-bold text-white tracking-widest"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* sub-label */}
          <motion.p
            className="font-mono text-xs tracking-[0.6em] text-zinc-500 mt-4 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'typing' ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            INITIALIZING PROTOCOL
          </motion.p>

          {/* glitch flash */}
          {phase === 'glitch' && (
            <motion.div
              className="absolute inset-0 bg-cyan-500 mix-blend-overlay"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* scanning line bottom */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-px bg-cyan-500 opacity-60"
            initial={{ scaleX: 0, transformOrigin: 'right' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          />

          {/* corner brackets */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-zinc-700" />
          <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-zinc-700" />
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-zinc-700" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-zinc-700" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
