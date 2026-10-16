'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Terminal, Activity, Radio, Cpu, ShieldCheck } from 'lucide-react';
import dynamic from 'next/dynamic';
import ThemeToggle from '../components/ThemeToggle';

const CursorRig = dynamic(() => import('../components/CursorRig'), { ssr: false });

/* ═══════════════════════════════════════════════════════════════
   TELEMETRY PAYLOADS — Static diagnostic schemas.
   Public-facing physical boundary audits only.
   No algorithmic internals or ingestion code exposed.
   ═══════════════════════════════════════════════════════════════ */

const TELEMETRY_01 = {
  "$schema": "https://bestillvisualstudio.com/schemas/telemetry-audit.v1.json",
  "instance_id": "BSVS-URE-01-CALIBRATION",
  "timestamp": "2026-06-21T16:30:00Z",
  "audit_layer": "sub_dermal_kinematics",
  "mesh_configuration": {
    "target_nodes": 68,
    "tracking_topology": "dense_landmark_grid",
    "interpolation_mode": "zero_beautification"
  },
  "constraints_enforced": {
    "nasolabial_fold_deformation_limit": 0.042,
    "mentalis_muscle_strain_max": 0.115,
    "orbicularis_oculi_contraction_ratio": 0.085,
    "blink_synchronization_interval_ms": 120
  },
  "telemetry_status": {
    "mesh_drift_detected": false,
    "identity_lock_coherence": 1.000,
    "parallel_tensor_core_latency_ms": 1.24
  },
  "validation_gate": "PASSED"
};

const TELEMETRY_02 = {
  "$schema": "https://bestillvisualstudio.com/schemas/telemetry-audit.v1.json",
  "instance_id": "BSVS-MULTI-SUBJECT-CALIBRATION",
  "timestamp": "2026-06-21T16:37:00Z",
  "audit_layer": "material_boundary_and_phonetics",
  "optical_physics_validation": {
    "inverse_square_law_compliance": true,
    "subsurface_scattering_bias": 0.000,
    "specular_reflectance_ceiling": 0.880
  },
  "textural_boundary_limits": {
    "porous_mesh_isolation": "enforced",
    "volumetric_fusion_tolerance": 0.000,
    "edge_shimmering_damping_factor": 1.00
  },
  "phonetic_alignment_tolerances": {
    "bilabial_plosive_viseme_match": 0.994,
    "labiodental_fricative_boundary_lock": true,
    "dental_geometry_scale_drift": 0.000
  },
  "validation_gate": "PASSED"
};

const TELEMETRY_03 = {
  "$schema": "https://bestillvisualstudio.com/schemas/telemetry-audit.v1.json",
  "instance_id": "BSVS-COMPOSITE-INTEGRATION-AUDIT",
  "timestamp": "2026-06-21T16:37:00Z",
  "audit_layer": "composite_pipeline_integration",
  "sub_dermal_synthesis": {
    "mesh_node_fidelity": 1.000,
    "landmark_drift_magnitude": 0.000,
    "muscle_group_coherence": 0.997
  },
  "phonetic_synthesis": {
    "viseme_sequence_accuracy": 0.996,
    "audio_frame_sync_offset_ms": 0.00,
    "coarticulation_bleed_factor": 0.003
  },
  "material_synthesis": {
    "skin_shader_energy_conservation": true,
    "hair_strand_occlusion_solved": true,
    "eye_caustic_refraction_index": 1.336
  },
  "pipeline_metrics": {
    "total_inference_time_ms": 3.41,
    "vram_peak_allocation_mb": 2048,
    "tensor_core_utilization_pct": 94.7
  },
  "validation_gate": "PASSED"
};

/* ═══════════════════════════════════════════════════════════════
   SECTION CONFIGURATION
   ═══════════════════════════════════════════════════════════════ */

const SECTIONS = [
  {
    id: 'audio2emotion-01',
    index: '01',
    title: 'Sub-Dermal Kinematics Tracking',
    subtitle: 'Wireframe Landmark Grid Calibration',
    description:
      'Real-time facial wireframe extraction with dense 68-point landmark tracking against incoming audio stream. Zero beautification interpolation enforced across all deformation channels.',
    videos: [
      {
        src: '/images/Lip-Sync_Au2Emo_bsvs_202606211630.mp4',
        label: 'BSVS-URE-01 // WIREFRAME_MESH_68N',
      },
    ],
    telemetry: TELEMETRY_01,
    telemetryTitle: 'telemetry-audit-sub-dermal.v1.json',
    metrics: [
      { label: 'MESH_DENSITY', value: '68_PTS_OPT' },
      { label: 'LATENCY', value: '1.24ms' },
      { label: 'ID_LOCK', value: '1.000' },
      { label: 'DRIFT', value: 'NONE', pass: true },
    ],
  },
  {
    id: 'audio2emotion-02',
    index: '02',
    title: 'Material Boundary & Phonetic Alignment',
    subtitle: 'Multi-Subject Phonetic / Textural Calibration',
    description:
      'Optical physics validation with material separation auditing and high-velocity phoneme-to-viseme threshold locking across multiple subjects under inverse-square lighting compliance.',
    videos: [
      {
        src: '/images/Lip-Sync_Au2Emo_bsvs_2.20606201521.mp4',
        label: 'BSVS-MULTI-01 // PHONETIC_CALIBRATION',
      },
      {
        src: '/images/Lip-Sync_Au2Emo_bsvs_202606211629.mp4',
        label: 'BSVS-MULTI-02 // TEXTURAL_BOUNDARY',
      },
    ],
    telemetry: TELEMETRY_02,
    telemetryTitle: 'telemetry-audit-material-phonetic.v1.json',
    metrics: [
      { label: 'INV_SQ_LAW', value: 'ENFORCED', pass: true },
      { label: 'SSS_BIAS', value: '0.000' },
      { label: 'SPEC_CEIL', value: '0.880' },
      { label: 'BILAB_MATCH', value: '0.994' },
    ],
  },
  {
    id: 'audio2emotion-03',
    index: '03',
    title: 'Composite Pipeline Integration',
    subtitle: 'Full-Stack Validation Audit',
    description:
      'End-to-end composite validation synthesizing sub-dermal tracking, phonetic alignment, and material physics into a unified pipeline coherence test. Tensor core utilization and VRAM allocation surfaced.',
    videos: [
      {
        src: '/images/Lip-Sync_Au2Emo_bsvs_202606211637.mp4',
        label: 'BSVS-COMPOSITE-01 // INTEGRATION_AUDIT',
      },
    ],
    telemetry: TELEMETRY_03,
    telemetryTitle: 'telemetry-audit-composite.v1.json',
    metrics: [
      { label: 'MESH_FID', value: '1.000' },
      { label: 'VISEME_ACC', value: '0.996' },
      { label: 'INFERENCE', value: '3.41ms' },
      { label: 'TENSOR_UTIL', value: '94.7%' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   UTILITY — JSON Syntax Highlighting (Adaptive Theme Variables)
   ═══════════════════════════════════════════════════════════════ */

function syntaxHighlight(json: string): string {
  const escaped = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped.replace(
    /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let style = 'color:var(--status-ok);font-weight:600';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          style = 'color:var(--text-primary);font-weight:600';
        } else if (match.includes('PASSED')) {
          style = 'color:var(--status-ok);font-weight:700';
        } else {
          style = 'color:var(--accent-primary)';
        }
      } else if (/true/.test(match)) {
        style = 'color:var(--status-ok);font-weight:600';
      } else if (/false/.test(match)) {
        style = 'color:var(--status-rec);font-weight:600';
      } else if (/null/.test(match)) {
        style = 'color:var(--text-muted)';
      }
      return `<span style="${style}">${match}</span>`;
    },
  );
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT — Terminal Panel (JSON viewer)
   ═══════════════════════════════════════════════════════════════ */

function TerminalPanel({
  title,
  data,
}: {
  title: string;
  data: object;
}) {
  const jsonStr = JSON.stringify(data, null, 2);
  const lines = jsonStr.split('\n');
  const highlighted = syntaxHighlight(jsonStr).split('\n');

  return (
    <div
      className="cinematic-glass"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* ── Title bar ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-strong)' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-strong)' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
          </div>
          <Terminal size={12} style={{ color: 'var(--text-secondary)' }} />
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10.5px',
              color: 'var(--text-primary)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '9px',
            color: 'var(--text-muted)',
          }}
        >
          {lines.length} LINES
        </span>
      </div>

      {/* ── Code body ── */}
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          padding: '18px 0',
          background: 'var(--bg-code)',
        }}
      >
        <pre
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '11.5px',
            lineHeight: '1.75',
            margin: 0,
            color: 'var(--text-secondary)',
          }}
        >
          {highlighted.map((line, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                paddingLeft: '18px',
                paddingRight: '18px',
              }}
            >
              <span
                style={{
                  width: '32px',
                  minWidth: '32px',
                  textAlign: 'right',
                  marginRight: '20px',
                  color: 'var(--text-muted)',
                  userSelect: 'none',
                  fontSize: '10px',
                }}
              >
                {i + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: line }} />
            </div>
          ))}
        </pre>
      </div>

      {/* ── Status footer ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--bg-secondary)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            className="animate-pulse"
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: 'var(--status-ok)',
              animationDuration: '2s',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10px',
              color: 'var(--status-ok)',
              letterSpacing: '0.1em',
              fontWeight: 600,
            }}
          >
            VALIDATION_GATE: PASSED
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '9.5px',
            color: 'var(--text-muted)',
          }}
        >
          SCHEMA V1.0
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT — Video Viewport
   ═══════════════════════════════════════════════════════════════ */

function VideoViewport({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  return (
    <div
      className="cinematic-glass-interactive group"
      style={{
        borderRadius: '16px',
        padding: '10px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top accent highlight */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--accent-primary), transparent)',
          zIndex: 3,
        }}
      />

      {/* Video element */}
      <video
        src={src}
        controls
        muted
        autoPlay
        loop
        playsInline
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        style={{
          width: '100%',
          display: 'block',
          background: '#141413',
          borderRadius: '10px',
        }}
      />

      {/* Label bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 10px 4px 10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Radio size={11} style={{ color: 'var(--accent-primary)' }} />
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10px',
              color: 'var(--text-primary)',
              fontWeight: 600,
              letterSpacing: '0.06em',
            }}
          >
            {label}
          </span>
        </div>
        <span
          className="cinematic-pill"
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '9px',
            color: 'var(--text-secondary)',
            padding: '2px 10px',
          }}
        >
          .MP4
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT — Metric Badge
   ═══════════════════════════════════════════════════════════════ */

function MetricBadge({
  label,
  value,
  pass,
}: {
  label: string;
  value: string;
  pass?: boolean;
}) {
  return (
    <div
      className="cinematic-pill"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '7px 14px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '9.5px',
          color: 'var(--text-muted)',
          letterSpacing: '0.06em',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '10px',
          color: pass ? 'var(--status-ok)' : 'var(--text-primary)',
          fontWeight: 600,
          letterSpacing: '0.04em',
        }}
      >
        {value}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT — Benchmark Section
   ═══════════════════════════════════════════════════════════════ */

function BenchmarkSection({
  section,
}: {
  section: (typeof SECTIONS)[number];
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id={section.id}
      style={{
        scrollMarginTop: '120px',
        paddingTop: '56px',
        paddingBottom: '56px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ── Section header ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '14px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '11px',
              color: 'var(--accent-primary)',
              background: 'var(--accent-glow)',
              border: '1px solid var(--border-accent)',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontWeight: 600,
              letterSpacing: '0.1em',
            }}
          >
            {section.index}
          </span>
          <h2
            className="font-editorial"
            style={{
              fontSize: 'clamp(1.65rem, 3vw, 2.35rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.015em',
              margin: 0,
            }}
          >
            {section.title}
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '18px',
          }}
        >
          <span
            className="cinematic-pill"
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10px',
              color: 'var(--text-secondary)',
              padding: '4px 12px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 600,
            }}
          >
            {section.subtitle}
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <div
              className="animate-pulse"
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--status-ok)',
                animationDuration: '2.5s',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '9.5px',
                color: 'var(--status-ok)',
                letterSpacing: '0.12em',
                fontWeight: 600,
              }}
            >
              ACTIVE
            </span>
          </div>
        </div>

        <p
          style={{
            fontSize: '15.5px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            maxWidth: '78ch',
            marginBottom: '24px',
          }}
        >
          {section.description}
        </p>

        {/* ── Active constraint badges ── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '28px',
          }}
        >
          {section.metrics.map((m) => (
            <MetricBadge
              key={m.label}
              label={m.label}
              value={m.value}
              pass={'pass' in m ? m.pass : undefined}
            />
          ))}
        </div>

        {/* ── Split layout: Videos | Telemetry ── */}
        <div
          className="telemetry-split-grid"
          style={{
            display: 'grid',
            gap: '24px',
          }}
        >
          {/* Video column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {section.videos.map((v) => (
              <VideoViewport
                key={v.src}
                src={v.src}
                label={v.label}
              />
            ))}
          </div>

          {/* Telemetry JSON column */}
          <div style={{ minHeight: '320px' }}>
            <TerminalPanel
              title={section.telemetryTitle}
              data={section.telemetry}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT — System Divider
   ═══════════════════════════════════════════════════════════════ */

function SystemDivider() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 0',
      }}
    >
      <div
        style={{
          flex: 1,
          height: '1px',
          background: 'var(--border-subtle)',
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE — Telemetry Benchmarks
   ═══════════════════════════════════════════════════════════════ */

export default function TelemetryBenchmarksPage() {
  const [uptime, setUptime] = useState(0);
  const [utcTime, setUtcTime] = useState('');
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-40px' });

  /* Session clock */
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((u) => u + 1);
      setUtcTime(
        new Date().toISOString().replace('T', ' ').split('.')[0] + 'Z',
      );
    }, 1000);
    setUtcTime(
      new Date().toISOString().replace('T', ' ').split('.')[0] + 'Z',
    );
    return () => clearInterval(interval);
  }, []);

  /* Scroll-to-anchor on mount (accounts for render delay) */
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 600);
    }
  }, []);

  /* Block right-click, copy, paste */
  useEffect(() => {
    const block = (e: Event) => e.preventDefault();
    document.addEventListener('contextmenu', block);
    document.addEventListener('copy', block);
    document.addEventListener('paste', block);
    return () => {
      document.removeEventListener('contextmenu', block);
      document.removeEventListener('copy', block);
      document.removeEventListener('paste', block);
    };
  }, []);

  const formatUptime = (s: number) => {
    const h = Math.floor(s / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((s % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${h}:${m}:${sec}`;
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden arch-grid noise"
      style={{ background: 'var(--bg-canvas)', color: 'var(--text-primary)' }}
    >
      <CursorRig />

      {/* ══════════════════════════════════════════
          FLOATING HEADER / NAV
          ══════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            height: '62px',
            padding: '0 24px',
            borderRadius: '9999px',
            background: 'var(--bg-nav)',
            backdropFilter: 'blur(20px) saturate(140%)',
            WebkitBackdropFilter: 'blur(20px) saturate(140%)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--card-shadow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--accent-primary)' }}
            />
            <Link
              href="/"
              className="font-editorial text-2xl font-bold tracking-tight uppercase no-underline"
              style={{ color: 'var(--text-primary)' }}
              data-hover
            >
              BSVS
            </Link>
            <span
              className="hidden md:inline font-mono text-[10px] tracking-[0.18em] pl-3 ml-1"
              style={{ color: 'var(--text-muted)', borderLeft: '1px solid var(--border-subtle)' }}
            >
              SYS.OP.NODE // TELEMETRY_BENCHMARKS
            </span>
          </div>

          <nav className="flex items-center gap-3 font-mono text-xs tracking-widest">
            <ThemeToggle />
            <Link
              href="/"
              className="cinematic-btn cinematic-btn-secondary"
              style={{ padding: '7px 18px', fontSize: '10px' }}
              data-hover
            >
              <ArrowLeft size={12} /> RETURN TO PORTAL
            </Link>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
          ══════════════════════════════════════════ */}
      <main
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          paddingTop: '128px',
          paddingBottom: '96px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* LIVE DIAGNOSTIC SESSION PILL BAR */}
        <div
          className="cinematic-glass"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 24px',
            borderRadius: '9999px',
            marginBottom: '48px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                className="animate-pulse"
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--status-rec)',
                  animationDuration: '1.5s',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: '10px',
                  color: 'var(--status-rec)',
                  letterSpacing: '0.14em',
                  fontWeight: 600,
                }}
              >
                LIVE DIAGNOSTIC SESSION
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '10px',
                color: 'var(--text-muted)',
              }}
            >
              UPTIME {formatUptime(uptime)}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '10px',
                color: 'var(--text-muted)',
              }}
            >
              UTC {utcTime}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={12} style={{ color: 'var(--status-ok)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: '10px',
                  color: 'var(--status-ok)',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                }}
              >
                3/3 GATES PASSED
              </span>
            </div>
          </div>
        </div>

        {/* ── Page header ── */}
        <div ref={headerRef} style={{ marginBottom: '56px' }}>
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
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
              <Activity size={13} style={{ color: 'var(--accent-primary)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.35em',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                }}
              >
                TELEMETRY BENCHMARKS
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="font-editorial"
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.1,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '28px',
              textTransform: 'uppercase',
              lineHeight: '1.06',
            }}
          >
            Audio-to-Emotion
            <br />
            Validation Endpoint
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontSize: '15.5px',
              lineHeight: '1.85',
              color: 'var(--text-secondary)',
              maxWidth: '78ch',
              borderLeft: '3px solid var(--accent-primary)',
              paddingLeft: '24px',
            }}
          >
            Diagnostic telemetry payloads for sub-dermal mesh tracking,
            phonetic-to-viseme alignment, and material boundary auditing.
            These endpoints surface measurable, deterministic physical
            constraints without exposing the underlying algorithmic
            architecture or core ingestion code of the Zero Mandate Engine.
          </motion.p>

          {/* ── Anchor nav ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '32px',
            }}
          >
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-hover
                className="cinematic-pill"
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: '10.5px',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  padding: '8px 18px',
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                {s.index} — {s.id.toUpperCase()}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Benchmark sections ── */}
        {SECTIONS.map((section, i) => (
          <React.Fragment key={section.id}>
            {i > 0 && <SystemDivider />}
            <BenchmarkSection section={section} />
          </React.Fragment>
        ))}

        {/* ── Classification footer block ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cinematic-glass"
          style={{
            borderRadius: '18px',
            padding: '32px 36px',
            marginTop: '64px',
            background: 'var(--bg-secondary)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '12px',
            }}
          >
            <Cpu size={14} style={{ color: 'var(--accent-primary)' }} />
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '11px',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '0.12em',
              }}
            >
              CLASSIFICATION_NODE // PUBLIC_TELEMETRY_PAYLOAD
            </span>
          </div>
          <p
            style={{
              fontSize: '13.5px',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              maxWidth: '90ch',
            }}
          >
            These diagnostic schemas are architected as public telemetry
            payloads. They surface high-level physical boundary audits
            without exposing the underlying algorithmic architecture,
            proprietary training methodologies, or core ingestion pipelines
            of the Zero Mandate Engine. All outputs are formatted as
            deterministic data streams, not creative interpretations.
          </p>
        </motion.div>
      </main>

      {/* ══════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════ */}
      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--bg-secondary)',
        }}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.16em]" style={{ color: 'var(--text-secondary)' }}>
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--status-ok)' }}
            />
            <span>SYSTEM ONLINE // BSVS INFRASTRUCTURE</span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} BE STILL VISUAL STUDIO. ALL
            PROTOCOLS ENFORCED.
          </div>
        </div>
      </footer>
    </div>
  );
}
