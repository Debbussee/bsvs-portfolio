'use client';

import { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────
   MEDIA ITEM TYPE
   ───────────────────────────────────────────── */
type MediaItem = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  visual: string;
  src: string;
  type: 'image' | 'video';
  accent: string;
};

/* ─────────────────────────────────────────────
   SLIDE DATA — ordered 1 → 6
   ───────────────────────────────────────────── */
const slides: MediaItem[] = [
  {
    id: 'frame-1',
    number: '01',
    title: 'Cinematic Angle',
    subtitle: 'SDF Primary Capture',
    visual: 'Signed distance field — primary camera extraction.',
    src: '/images_sub/A_cinematic_new_camera_angle_202605300746.jpeg',
    type: 'image',
    accent: '#22d3ee', // cyan
  },
  {
    id: 'frame-2',
    number: '02',
    title: 'Cinematic Angle',
    subtitle: 'SDF Variant I',
    visual: 'Camera offset — geometric field shift variant.',
    src: '/images_sub/A_cinematic_new_camera_angle_202605300746%20(1).jpeg',
    type: 'image',
    accent: '#f59e0b', // amber
  },
  {
    id: 'frame-3',
    number: '03',
    title: 'Cinematic Angle',
    subtitle: 'SDF Variant II',
    visual: 'Secondary parallax — distance boundary re-evaluation.',
    src: '/images_sub/A_cinematic_new_camera_angle_202605300746%20(2).jpeg',
    type: 'image',
    accent: '#a78bfa', // violet
  },
  {
    id: 'frame-4',
    number: '04',
    title: 'Cinematic Angle',
    subtitle: 'SDF Variant III',
    visual: 'Tertiary extraction — material-boundary convergence.',
    src: '/images_sub/A_cinematic_new_camera_angle_202605300746%20(3).jpeg',
    type: 'image',
    accent: '#34d399', // emerald
  },
  {
    id: 'frame-5',
    number: '05',
    title: 'Signal Distance Field',
    subtitle: 'SDF Motion Capture — 9×16',
    visual: 'Vertical signal distance field — kinetic runtime extraction.',
    src: '/images_sub/signal_distance_field_9x16_202605300804.mp4',
    type: 'video',
    accent: '#f43f5e', // rose
  },
  {
    id: 'frame-6',
    number: '06',
    title: 'Signed Distance Fields',
    subtitle: 'SDF Runtime Sequence',
    visual: 'Full signed distance field render — procedural boundary mapping.',
    src: '/images_sub/signed_distance_fields_202605300741.mp4',
    type: 'video',
    accent: '#f97316', // orange
  },
];

/* ─────────────────────────────────────────────
   MEDIA CARD COMPONENT
   ───────────────────────────────────────────── */
function MediaCard({
  item,
  index,
}: {
  item: MediaItem;
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
      id={item.id}
      className="slide-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(48px)',
        transitionDelay: `${index * 80}ms`,
        // @ts-expect-error CSS custom property
        '--accent': item.accent,
      }}
    >
      {/* ── NUMBER BADGE ── */}
      <div className="slide-badge" aria-hidden="true">
        <span className="slide-badge-num">{item.number}</span>
      </div>

      {/* ── HEADER ── */}
      <div className="slide-header">
        <h2 className="slide-title">{item.title}</h2>
        <p className="slide-subtitle">{item.subtitle}</p>
        <p className="slide-visual">{item.visual}</p>
      </div>

      {/* ── MEDIA ── */}
      <div className="slide-media-wrap">
        {item.type === 'video' ? (
          <video
            controls
            playsInline
            preload="metadata"
            className="slide-media slide-video"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={item.src}
            alt={item.visual}
            className="slide-media slide-image"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        )}
        {/* scanline overlay */}
        <div className="slide-scanlines" aria-hidden="true" />
      </div>

      {/* ── ANCHOR LINK ── */}
      <a
        href={`#${item.id}`}
        className="slide-anchor"
        title="Copy anchor link"
        aria-label={`Link to ${item.title}`}
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
    <nav className="toc" aria-label="Frame navigation">
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
export default function ImagesSubPage() {
  useEffect(() => {
    // Restore normal cursor (globals.css sets cursor:none for CursorRig)
    document.body.style.cursor = 'default';

    // Block right-click across entire page
    const block = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', block);

    // Block drag on all images
    const blockDrag = (e: DragEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'IMG') e.preventDefault();
    };
    document.addEventListener('dragstart', blockDrag);

    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('contextmenu', block);
      document.removeEventListener('dragstart', blockDrag);
    };
  }, []);

  return (
    <>
      <style>{pageStyles}</style>

      {/* ── HEADER BAR ── */}
      <header className="vs-header">
        <div className="vs-header-inner">
          <div className="vs-logo">
            <div className="vs-pulse" />
            <span className="vs-logo-text">BSVS</span>
            <span className="vs-logo-tag">SDF GALLERY</span>
          </div>
        </div>
      </header>

      {/* ── TOC (desktop sidebar) ── */}
      <TOC />

      {/* ── HERO ── */}
      <section className="vs-hero">
        <div className="vs-hero-inner">
          <p className="vs-hero-tag">ZERO MANDATE ENGINE — SDF EXTRACTION</p>
          <h1 className="vs-hero-title">
            Signed Distance <span className="vs-hero-accent">Field</span> Gallery
          </h1>
          <p className="vs-hero-desc">
            Six forensic captures documenting signed distance field rendering
            — cinematic stills and kinetic motion sequences.
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

      {/* ── MEDIA CARDS ── */}
      <main className="vs-slides">
        {slides.map((s, i) => (
          <MediaCard key={s.id} item={s} index={i} />
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
body { cursor: default !important; }

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

/* media wrapper */
.slide-media-wrap {
  position: relative; margin: 0 20px 20px; border-radius: 8px; overflow: hidden;
  border: 1px solid #1c1c1f;
  background: #000;
}
.slide-media {
  display: block; width: 100%;
  background: #000; border-radius: 7px;
}
.slide-video { aspect-ratio: 16/9; }
.slide-image {
  width: 100%; height: auto;
  object-fit: cover;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  pointer-events: auto;
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
  .slide-media-wrap { margin: 0 12px 12px; }
  .vs-hero-links { flex-direction: column; align-items: center; }
}
`;
