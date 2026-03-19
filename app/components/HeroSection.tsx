'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [time, setTime] = useState<string>('00:00:00.000');

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = (e.clientX / window.innerWidth  - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseX(cx);
      setMouseY(cy);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      const h  = d.getHours().toString().padStart(2,'0');
      const m  = d.getMinutes().toString().padStart(2,'0');
      const s  = d.getSeconds().toString().padStart(2,'0');
      const ms = d.getMilliseconds().toString().padStart(3,'0');
      setTime(`${h}:${m}:${s}.${ms}`);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="index"
      className="relative h-screen w-full overflow-hidden bg-black scanlines noise"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          y: bgY,
          x: mouseX * -18,
          scale: 1.12,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400"
          alt="Architectural hero"
          className="w-full h-full object-cover grayscale contrast-125 opacity-35"
          data-img-hover
        />
        {/* vignette */}
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-black/40 to-black/90 pointer-events-none" />
      </motion.div>

      {/* HORIZONTAL RULE TOP */}
      <motion.div
        className="absolute top-16 left-0 w-full h-px bg-zinc-800"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 3.6, duration: 0.8, ease: 'easeOut' }}
      />

      {/* HUD — TOP LEFT */}
      <motion.div
        className="absolute top-20 left-6 font-mono text-[10px] text-zinc-500 leading-relaxed z-20"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.8, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
          <span className="text-cyan-400 tracking-widest">SYS.ONLINE</span>
        </div>
        <div>NODE: ALPHA-7</div>
        <div>UPLINK: SECURE</div>
        <div>PROTOCOL: ZERO</div>
      </motion.div>

      {/* HUD — TOP RIGHT */}
      <motion.div
        className="absolute top-20 right-6 font-mono text-[10px] text-zinc-500 text-right leading-relaxed z-20"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.8, duration: 0.6 }}
      >
        <div className="flex items-center justify-end gap-2 mb-1">
          <span className="text-red-500 tracking-widest font-bold">REC</span>
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
        </div>
        <div className="text-zinc-400">{time}</div>
        <div>LUM: 45% | f/1.4</div>
      </motion.div>

      {/* MAIN TEXT */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center select-none"
        style={{ y: textY, opacity }}
      >
        <motion.div
          style={{ x: mouseX * 14, y: mouseY * 6 }}
          transition={{ type: 'spring', stiffness: 120, damping: 30 }}
        >
          <motion.h1
            className="glitch text-[11vw] font-bold tracking-tighter text-white leading-none"
            data-text="BE STILL VISUAL STUDIO"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            BE STILL VISUAL STUDIO
          </motion.h1>

          <motion.p
            className="font-mono text-xs md:text-sm tracking-[0.5em] text-zinc-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.0, duration: 0.8 }}
          >
            LIGHT AS EVIDENCE. SHADOW AS STRUCTURE.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* HUD — BOTTOM LEFT */}
      <motion.div
        className="absolute bottom-8 left-6 font-mono text-[10px] text-zinc-500 z-20"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.0, duration: 0.6 }}
      >
        <div>LAT: 34.0522 N</div>
        <div>LON: 118.2437 W</div>
        <div>ELEV: 84M</div>
      </motion.div>

      {/* HUD — BOTTOM RIGHT */}
      <motion.div
        className="absolute bottom-8 right-6 font-mono text-[10px] text-zinc-500 text-right z-20"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.0, duration: 0.6 }}
      >
        <div>OPTICS: 24MM f/1.4</div>
        <div>ISO: 800</div>
        <div>SHUTTER: 1/500</div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.4, duration: 0.8 }}
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-zinc-600">SCROLL</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* CORNER BRACKETS */}
      <div className="absolute top-[4.5rem] left-4 w-5 h-5 border-t border-l border-zinc-700 z-20 pointer-events-none" />
      <div className="absolute top-[4.5rem] right-4 w-5 h-5 border-t border-r border-zinc-700 z-20 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-zinc-700 z-20 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-zinc-700 z-20 pointer-events-none" />
    </section>
  );
}
