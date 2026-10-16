'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [time, setTime] = useState<string>('00:00:00.000');

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
      className="relative min-h-screen w-full overflow-hidden bg-[#F4F1EA] arch-grid noise flex flex-col justify-between pt-28 pb-10 px-6 md:px-14"
    >
      {/* ARCHITECTURAL DRAFTING REGISTRATION LINES */}
      <div
        className="pointer-events-none absolute inset-x-6 md:inset-x-14 top-24 bottom-8 border border-[#141413]/10 z-0"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-24 bottom-8 w-px bg-[#141413]/[0.05] z-0 hidden lg:block"
      />

      {/* TOP TELEMETRY ROW */}
      <div className="relative z-20 flex items-start justify-between w-full max-w-[1440px] mx-auto pt-2">
        {/* TOP LEFT TELEMETRY */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="cinematic-glass"
            style={{
              padding: '12px 18px',
              borderRadius: '10px',
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10px',
              lineHeight: '1.7',
              color: '#4A4843',
              background: 'rgba(250, 248, 245, 0.9)',
              border: '1px solid rgba(20, 20, 19, 0.12)',
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-1.5 h-1.5 bg-[#A65E2E] rounded-full animate-pulse"
                style={{ boxShadow: '0 0 8px rgba(166, 94, 46, 0.6)', animationDuration: '3s' }}
              />
              <span className="text-[#A65E2E] tracking-[0.2em] font-semibold">SYS.ONLINE</span>
            </div>
            <div className="text-[#4A4843]">NODE: <span className="text-[#141413] font-medium">ALPHA-7</span></div>
            <div className="text-[#4A4843]">UPLINK: <span className="text-[#141413] font-medium">SECURE</span></div>
            <div className="text-[#141413] font-semibold">PROTOCOL: ZERO</div>
          </div>
        </motion.div>

        {/* CENTER EXHIBITION FOLIO MARKER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="hidden md:flex flex-col items-center font-mono text-[10px] tracking-[0.3em] text-[#78746C] pt-2"
        >
          <span>ARCHIVE FOLIO // 001</span>
          <span className="text-[9px] text-[#A65E2E] mt-1">DETERMINISTIC VISUAL ARCHITECTURE</span>
        </motion.div>

        {/* TOP RIGHT TELEMETRY */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="cinematic-glass text-right"
            style={{
              padding: '12px 18px',
              borderRadius: '10px',
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10px',
              lineHeight: '1.7',
              color: '#4A4843',
              background: 'rgba(250, 248, 245, 0.9)',
              border: '1px solid rgba(20, 20, 19, 0.12)',
            }}
          >
            <div className="flex items-center justify-end gap-2 mb-1">
              <span className="text-[#B43E3E] tracking-[0.2em] font-semibold">REC</span>
              <div
                className="w-1.5 h-1.5 bg-[#B43E3E] rounded-full animate-pulse"
                style={{ boxShadow: '0 0 8px rgba(180, 62, 62, 0.6)' }}
              />
            </div>
            <div className="text-[#141413] font-semibold tabular-nums">{time}</div>
            <div className="text-[#78746C]">LUM: 45% | f/1.4</div>
          </div>
        </motion.div>
      </div>

      {/* MAIN EDITORIAL & ARCHITECTURAL GALLERY CENTERPIECE */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center select-none my-auto py-8 max-w-[1360px] mx-auto w-full"
        style={{ y: textY, opacity }}
      >
        <motion.div
          style={{ x: mouseX * 8, y: mouseY * 5 }}
          transition={{ type: 'spring', stiffness: 110, damping: 28 }}
          className="flex flex-col items-center w-full"
        >
          {/* Editorial Category Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="cinematic-pill mb-6 px-5 py-2 flex items-center gap-2.5"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#A65E2E]"
            />
            <span className="font-mono text-[10px] tracking-[0.35em] text-[#141413] font-medium uppercase">
              FORENSIC ARCHITECTURE &amp; KINETIC RENDERING
            </span>
          </motion.div>

          {/* Editorial Monumental Title */}
          <motion.h1
            className="font-editorial text-[8.5vw] sm:text-[6.8vw] lg:text-[5.8rem] font-semibold tracking-[-0.025em] leading-[0.94] text-[#141413] uppercase"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            BE STILL VISUAL STUDIO
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-mono text-xs md:text-sm tracking-[0.42em] text-[#A65E2E] font-medium mt-4 mb-8 uppercase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            LIGHT AS EVIDENCE. SHADOW AS STRUCTURE.
          </motion.p>

          {/* MUSEUM-FRAMED ARCHITECTURAL PHOTOGRAPH VIEWPORT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[1040px] bg-[#FAF8F5] p-3 sm:p-4 rounded-xl border border-[#141413]/15 shadow-[0_24px_60px_rgba(20,20,19,0.1)]"
          >
            <div className="relative w-full h-[240px] sm:h-[310px] md:h-[360px] overflow-hidden rounded-lg bg-[#141413]">
              <motion.img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2400"
                alt="Data center server corridor"
                className="w-full h-full object-cover contrast-105 saturate-95"
                style={{
                  y: bgY,
                  x: mouseX * -12,
                  scale: 1.08,
                }}
                data-img-hover
              />
              {/* Subtle warm architectural glaze & caption bar */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(20,20,19,0.1) 0%, transparent 45%, rgba(20,20,19,0.65) 100%)',
                }}
              />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-[#FAF8F5]/90 pointer-events-none">
                <span>PLATE 00 // DETERMINISTIC INFRASTRUCTURE CORRIDOR</span>
                <span className="hidden sm:inline text-[#E5C19A]">24MM ANAMORPHIC // RAW CAPTURE</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* BOTTOM TELEMETRY ROW */}
      <div className="relative z-20 flex items-end justify-between w-full max-w-[1440px] mx-auto">
        {/* BOTTOM LEFT TELEMETRY */}
        <motion.div
          className="hidden sm:block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div
            className="cinematic-glass"
            style={{
              padding: '10px 16px',
              borderRadius: '10px',
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10px',
              lineHeight: '1.6',
              color: '#78746C',
              background: 'rgba(250, 248, 245, 0.9)',
              border: '1px solid rgba(20, 20, 19, 0.12)',
            }}
          >
            <div>LAT: <span className="text-[#141413] font-medium">34.0522 N</span></div>
            <div>LON: <span className="text-[#141413] font-medium">118.2437 W</span></div>
            <div>ELEV: <span className="text-[#141413] font-medium">84M</span></div>
          </div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          className="mx-auto sm:mx-0 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span className="font-mono text-[9px] tracking-[0.4em] text-[#78746C]">SCROLL</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-[#A65E2E] via-[#141413]/40 to-transparent"
            animate={{ scaleY: [1, 0.45, 1], opacity: [0.9, 0.35, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* BOTTOM RIGHT TELEMETRY */}
        <motion.div
          className="hidden sm:block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          <div
            className="cinematic-glass text-right"
            style={{
              padding: '10px 16px',
              borderRadius: '10px',
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10px',
              lineHeight: '1.6',
              color: '#78746C',
              background: 'rgba(250, 248, 245, 0.9)',
              border: '1px solid rgba(20, 20, 19, 0.12)',
            }}
          >
            <div>OPTICS: <span className="text-[#141413] font-medium">24MM f/1.4</span></div>
            <div>ISO: <span className="text-[#141413] font-medium">800</span></div>
            <div>SHUTTER: <span className="text-[#141413] font-medium">1/500</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
