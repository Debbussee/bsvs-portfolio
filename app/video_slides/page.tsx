'use client';

import { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────
   SLIDE DATA — ordered 1 → 2 → 3 → 4a → 4b
   ───────────────────────────────────────────── */
const slides = [
  {
    id: 'slide-1',
    number: '01',
    title: 'The Premise',
    subtitle: 'The End of Digital Glaze',
    visual: '"Humanoid Volume" material fusion collapse.',
    src: '/images/humanoid_volume_metallic_bsvs_202605171026.mp4',
    accent: '#22d3ee', // cyan
  },
  {
    id: 'slide-2',
    number: '02',
    title: 'The Solution',
    subtitle: 'The Zero Mandate Engine',
    visual: '"Demi Cyborg" extraction.',
    src: '/images/biological_frame_bsvs_202604201330.mp4',
    accent: '#f59e0b', // amber
  },
  {
    id: 'slide-3',
    number: '03',
    title: 'The Mathematical Scaffolding',
    subtitle: 'iDNS & Navier-Stokes',
    visual: '"Tensile Failure & Fluid Dynamics" extraction.',
    src: '/images/initialization_kinetic_bsvs_202605182059.mp4',
    accent: '#a78bfa', // violet
  },
  {
    id: 'slide-4a',
    number: '04a',
    title: 'The Hardware Mandate',
    subtitle: 'The DGX Spark',
    visual: '"OpenShell Runtime Isolation" — The Red Energy Cage.',
    src: '/images/bsvs_cage_nervous_system_auditor_202605182057.mp4',
    accent: '#f43f5e', // rose
  },
  {
    id: 'slide-4b',
    number: '04b',
    title: 'The Hardware Mandate',
    subtitle: 'The DGX Spark',
    visual: '"NemoClaw Actuator" bounding box.',
    src: '/images/bsvs_control_nervous_system%E2%80%A6_202605182055.mp4',
    accent: '#f43f5e', // rose
  },
];

/* ─────────────────────────────────────────────
   SLIDE CARD COMPONENT
   ───────────────────────────────────────────── */
function SlideCard({
  slide,
  index,
}: {
  slide: (typeof slides)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={slide.id}
      className="slide-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(48px)',
        transitionDelay: `${index * 80}ms`,
        // @ts-expect-error CSS custom property
        '--accent': slide.accent,
      }}
    >
      {/* ── NUMBER BADGE ── */}
      <div className="slide-badge" aria-hidden="true">
        <span className="slide-badge-num">{slide.number}</span>
      </div>

      {/* ── HEADER ── */}
      <div className="slide-header">
        <h2 className="slide-title">{slide.title}</h2>
        <p className="slide-subtitle">{slide.subtitle}</p>
        <p className="slide-visual">{slide.visual}</p>
      </div>

      {/* ── VIDEO ── */}
      <div className="slide-video-wrap">
        <video
          controls
          playsInline
          preload="metadata"
          className="slide-video"
        >
          <source src={slide.src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        {/* scanline overlay */}
        <div className="slide-scanlines" aria-hidden="true" />
      </div>

      {/* ── ANCHOR LINK ── */}
      <a
        href={`#${slide.id}`}
        className="slide-anchor"
        title="Copy anchor link"
        aria-label={`Link to ${slide.title}`}
      >
        #
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TABLE OF CONTENTS SIDEBAR
   ───────────────────────────────────────────── */
function TOC() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    slides.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(s.id);
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((io) => io.disconnect());
  }, []);

  return (
    <nav className="toc" aria-label="Slide navigation">
      {slides.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`toc-link ${active === s.id ? 'toc-active' : ''}`}
          style={{ '--accent': s.accent } as React.CSSProperties}
        >
          <span className="toc-dot" />
          <span className="toc-label">
            {s.number} — {s.subtitle}
          </span>
        </a>
      ))}
    </nav>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */
export default function VideoSlidesPage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* ── HEADER BAR ── */}
      <header className="vs-header">
        <div className="vs-header-inner">
          <div className="vs-logo">
            <div className="vs-pulse" />
            <span className="vs-logo-text">BSVS</span>
            <span className="vs-logo-tag">VIDEO DECK</span>
          </div>
        </div>
      </header>

      {/* ── TOC (desktop sidebar) ── */}
      <TOC />

      {/* ── HERO ── */}
      <section className="vs-hero">
        <div className="vs-hero-inner">
          <p className="vs-hero-tag">ZERO MANDATE ENGINE — VISUAL DECK</p>
          <h1 className="vs-hero-title">
            Protocol <span className="vs-hero-accent">Extraction</span> Slides
          </h1>
          <p className="vs-hero-desc">
            Five forensic extractions documenting the material-truth rendering
            pipeline — from premise to hardware mandate.
          </p>

          {/* quick-jump links */}
          <div className="vs-hero-links">
            {slides.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="vs-hero-link"
                style={{ '--accent': s.accent } as React.CSSProperties}
              >
                <span className="vs-hero-link-num">{s.number}</span>
                {s.subtitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLIDES ── */}
      <main className="vs-slides">
        {slides.map((s, i) => (
          <SlideCard key={s.id} slide={s} index={i} />
        ))}
      </main>

      {/* ── FOOTER ── */}
      <footer className="vs-footer">
        <div className="vs-footer-inner">
          <div className="vs-footer-status">
            <div className="vs-footer-dot" />
            <span>SYSTEM ONLINE // BSVS INFRASTRUCTURE</span>
          </div>
          <div className="vs-footer-copy">
            &copy; {new Date().getFullYear()} BE STILL VISUAL STUDIO. ALL
            PROTOCOLS ENFORCED.
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─────────────────────────────────────────────
   SCOPED STYLES
   ───────────────────────────────────────────── */
const pageStyles = /* css */ `
/* ── RESET & BASE ── */
html { scroll-behavior: smooth; }

/* ── HEADER ── */
.vs-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  height: 56px;
  background: rgba(9,9,11,0.85);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid #27272a;
  display: flex; align-items: center;
}
.vs-header-inner { max-width: 1280px; width: 100%; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; }
.vs-logo { display: flex; align-items: center; gap: 10px; }
.vs-pulse { width: 6px; height: 6px; border-radius: 50%; background: #22d3ee; animation: pulse-glow 3s ease-in-out infinite; }
@keyframes pulse-glow { 0%,100% { box-shadow: 0 0 4px #22d3ee55; } 50% { box-shadow: 0 0 14px #22d3eecc; } }
.vs-logo-text { font-family: var(--font-geist-mono), 'Courier New', monospace; font-size: 18px; font-weight: 700; letter-spacing: -0.04em; color: #fff; }
.vs-logo-tag { font-family: var(--font-geist-mono), 'Courier New', monospace; font-size: 9px; color: #52525b; border-left: 1px solid #27272a; padding-left: 10px; letter-spacing: 0.12em; text-transform: uppercase; }

/* ── TOC SIDEBAR ── */
.toc {
  position: fixed; left: 20px; top: 50%; transform: translateY(-50%); z-index: 90;
  display: flex; flex-direction: column; gap: 14px;
}
.toc-link {
  display: flex; align-items: center; gap: 10px; text-decoration: none;
  transition: opacity 0.25s;
  opacity: 0.4;
}
.toc-link:hover, .toc-active { opacity: 1; }
.toc-dot {
  width: 8px; height: 8px; border-radius: 50%;
  border: 1.5px solid #52525b;
  transition: all 0.3s;
  flex-shrink: 0;
}
.toc-active .toc-dot {
  background: var(--accent); border-color: var(--accent);
  box-shadow: 0 0 10px color-mix(in srgb, var(--accent) 50%, transparent);
}
.toc-label {
  font-family: var(--font-geist-mono), 'Courier New', monospace;
  font-size: 10px; color: #71717a; letter-spacing: 0.06em;
  white-space: nowrap;
  transition: color 0.25s;
}
.toc-active .toc-label { color: #d4d4d8; }

/* ── HERO ── */
.vs-hero {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  padding: 120px 24px 80px;
  background:
    radial-gradient(ellipse 60% 50% at 50% 40%, rgba(34,211,238,0.04), transparent),
    #09090b;
}
.vs-hero-inner { max-width: 720px; text-align: center; }
.vs-hero-tag {
  font-family: var(--font-geist-mono), 'Courier New', monospace;
  font-size: 10px; letter-spacing: 0.2em; color: #22d3ee; margin-bottom: 20px;
}
.vs-hero-title {
  font-family: var(--font-geist-sans), 'Inter', sans-serif;
  font-size: clamp(32px, 5vw, 56px); font-weight: 800; letter-spacing: -0.03em;
  color: #fafafa; line-height: 1.1; margin-bottom: 20px;
}
.vs-hero-accent { color: #22d3ee; }
.vs-hero-desc {
  font-size: 15px; color: #a1a1aa; line-height: 1.7; max-width: 520px; margin: 0 auto 40px;
}
.vs-hero-links {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;
}
.vs-hero-link {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 16px; border-radius: 6px;
  border: 1px solid #27272a; background: rgba(24,24,27,0.6);
  font-family: var(--font-geist-mono), 'Courier New', monospace;
  font-size: 11px; color: #a1a1aa; text-decoration: none;
  transition: all 0.3s;
}
.vs-hero-link:hover {
  border-color: var(--accent); color: #fafafa;
  background: color-mix(in srgb, var(--accent) 8%, transparent);
  box-shadow: 0 0 20px color-mix(in srgb, var(--accent) 15%, transparent);
}
.vs-hero-link-num {
  font-weight: 700; color: var(--accent); font-size: 12px;
}

/* ── SLIDES CONTAINER ── */
.vs-slides {
  max-width: 960px; margin: 0 auto;
  padding: 40px 24px 120px;
  display: flex; flex-direction: column; gap: 100px;
}

/* ── SLIDE CARD ── */
.slide-card {
  position: relative;
  border: 1px solid #1c1c1f;
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(24,24,27,0.7), rgba(9,9,11,0.95));
  overflow: hidden;
  transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
}
.slide-card:hover {
  border-color: color-mix(in srgb, var(--accent) 30%, #27272a);
  box-shadow: 0 0 60px color-mix(in srgb, var(--accent) 8%, transparent);
}

/* badge */
.slide-badge {
  position: absolute; top: 20px; right: 20px; z-index: 10;
  width: 44px; height: 44px; border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
  display: flex; align-items: center; justify-content: center;
  background: rgba(9,9,11,0.8);
}
.slide-badge-num {
  font-family: var(--font-geist-mono), 'Courier New', monospace;
  font-size: 13px; font-weight: 700; color: var(--accent);
}

/* header */
.slide-header { padding: 36px 36px 20px; }
.slide-title {
  font-family: var(--font-geist-sans), 'Inter', sans-serif;
  font-size: 26px; font-weight: 700; color: #fafafa; letter-spacing: -0.02em;
  margin-bottom: 4px;
}
.slide-subtitle {
  font-family: var(--font-geist-mono), 'Courier New', monospace;
  font-size: 12px; color: var(--accent); letter-spacing: 0.08em;
  text-transform: uppercase; margin-bottom: 12px;
}
.slide-visual {
  font-size: 13px; color: #71717a; line-height: 1.5; font-style: italic;
}

/* video wrapper */
.slide-video-wrap {
  position: relative; margin: 0 20px 20px; border-radius: 8px; overflow: hidden;
  border: 1px solid #1c1c1f;
  background: #000;
}
.slide-video {
  display: block; width: 100%; aspect-ratio: 16/9;
  background: #000; border-radius: 7px;
}
.slide-scanlines {
  position: absolute; inset: 0; pointer-events: none; z-index: 2;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px, transparent 3px,
    rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px
  );
}

/* anchor link */
.slide-anchor {
  position: absolute; bottom: 16px; right: 20px;
  font-family: var(--font-geist-mono), 'Courier New', monospace;
  font-size: 16px; color: #3f3f46; text-decoration: none;
  transition: color 0.2s;
}
.slide-anchor:hover { color: var(--accent); }

/* ── FOOTER ── */
.vs-footer { border-top: 1px solid #27272a; background: #000; }
.vs-footer-inner {
  max-width: 1280px; margin: 0 auto; padding: 28px 24px;
  display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px;
}
.vs-footer-status {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--font-geist-mono), 'Courier New', monospace;
  font-size: 10px; color: #52525b;
}
.vs-footer-dot { width: 6px; height: 6px; border-radius: 50%; background: #10b981; animation: pulse-glow-g 3s ease-in-out infinite; }
@keyframes pulse-glow-g { 0%,100% { box-shadow: 0 0 4px #10b98155; } 50% { box-shadow: 0 0 14px #10b981cc; } }
.vs-footer-copy {
  font-family: var(--font-geist-mono), 'Courier New', monospace;
  font-size: 10px; color: #3f3f46;
}

/* ── RESPONSIVE ── */
@media (max-width: 1100px) {
  .toc { display: none; }
}
@media (max-width: 640px) {
  .slide-header { padding: 24px 20px 16px; }
  .slide-title { font-size: 20px; }
  .slide-video-wrap { margin: 0 12px 12px; }
  .vs-hero-links { flex-direction: column; align-items: center; }
}
`;
