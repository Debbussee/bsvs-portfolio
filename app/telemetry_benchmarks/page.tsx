'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Terminal, Activity, Radio, Cpu, ShieldCheck } from 'lucide-react';
import dynamic from 'next/dynamic';

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
    accent: '#22d3ee',
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
    accent: '#f59e0b',
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
    accent: '#a78bfa',
  },
];

/* ═══════════════════════════════════════════════════════════════
   UTILITY — JSON Syntax Highlighting (inline styles, no deps)
   ═══════════════════════════════════════════════════════════════ */

function syntaxHighlight(json: string): string {
  const escaped = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped.replace(
    /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let style = 'color:#34d399'; // numbers → emerald-400
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          style = 'color:#22d3ee'; // keys → cyan-400
        } else if (match.includes('PASSED')) {
          style =
            'color:#34d399;font-weight:bold;text-shadow:0 0 6px rgba(52,211,153,0.4)';
        } else {
          style = 'color:#fbbf24'; // strings → amber-400
        }
      } else if (/true/.test(match)) {
        style = 'color:#34d399';
      } else if (/false/.test(match)) {
        style = 'color:#fb7185'; // rose-400
      } else if (/null/.test(match)) {
        style = 'color:#71717a';
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
  accent,
}: {
  title: string;
  data: object;
  accent: string;
}) {
  const jsonStr = JSON.stringify(data, null, 2);
  const lines = jsonStr.split('\n');
  const highlighted = syntaxHighlight(jsonStr).split('\n');

  return (
    <div
      style={{
        background: '#0c0c0f',
        border: '1px solid #27272a',
        borderRadius: '0',
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
          padding: '10px 16px',
          background: '#111114',
          borderBottom: '1px solid #1e1e22',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#27272a',
              }}
            />
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#27272a',
              }}
            />
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#27272a',
              }}
            />
          </div>
          <Terminal size={11} style={{ color: '#52525b' }} />
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10px',
              color: '#52525b',
              letterSpacing: '0.05em',
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
            color: '#3f3f46',
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
          padding: '16px 0',
        }}
      >
        <pre
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '11px',
            lineHeight: '1.7',
            margin: 0,
          }}
        >
          {highlighted.map((line, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                paddingLeft: '16px',
                paddingRight: '16px',
              }}
            >
              <span
                style={{
                  width: '32px',
                  minWidth: '32px',
                  textAlign: 'right',
                  marginRight: '20px',
                  color: '#3f3f46',
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
          padding: '8px 16px',
          borderTop: '1px solid #1e1e22',
          background: '#111114',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div
            className="animate-pulse"
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#34d399',
              boxShadow: '0 0 6px rgba(52,211,153,0.4)',
              animationDuration: '2s',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '9px',
              color: '#34d399',
              letterSpacing: '0.1em',
              fontWeight: 'bold',
            }}
          >
            VALIDATION_GATE: PASSED
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '9px',
            color: '#3f3f46',
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
  accent,
}: {
  src: string;
  label: string;
  accent: string;
}) {
  return (
    <div
      style={{
        border: '1px solid #27272a',
        background: '#0c0c0f',
        position: 'relative',
      }}
      className="group"
    >
      {/* HUD corner brackets */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderTop: `1px solid ${accent}33`,
          borderLeft: `1px solid ${accent}33`,
          zIndex: 2,
          transition: 'border-color 0.3s',
        }}
        className="group-hover:!border-opacity-80"
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '8px',
          height: '8px',
          borderTop: `1px solid ${accent}33`,
          borderRight: `1px solid ${accent}33`,
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderBottom: `1px solid ${accent}33`,
          borderLeft: `1px solid ${accent}33`,
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '8px',
          height: '8px',
          borderBottom: `1px solid ${accent}33`,
          borderRight: `1px solid ${accent}33`,
          zIndex: 2,
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
          background: '#000',
        }}
      />

      {/* Label bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          borderTop: '1px solid #1e1e22',
          background: '#111114',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Radio size={9} style={{ color: accent, opacity: 0.6 }} />
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '9px',
              color: '#52525b',
              letterSpacing: '0.05em',
            }}
          >
            {label}
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '9px',
            color: '#3f3f46',
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
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 10px',
        border: '1px solid #1e1e22',
        background: '#0c0c0f',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '9px',
          color: '#52525b',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '9px',
          color: pass ? '#34d399' : '#a1a1aa',
          fontWeight: pass ? 'bold' : 'normal',
          letterSpacing: '0.03em',
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
        scrollMarginTop: '96px',
        paddingTop: '64px',
        paddingBottom: '64px',
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
            gap: '16px',
            marginBottom: '12px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '11px',
              color: section.accent,
              fontWeight: 'bold',
              letterSpacing: '0.1em',
            }}
          >
            {section.index}
          </span>
          <div
            style={{
              width: '16px',
              height: '1px',
              background: section.accent,
              opacity: 0.4,
            }}
          />
          <h2
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
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
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10px',
              color: '#52525b',
              padding: '2px 8px',
              border: '1px solid #27272a',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {section.subtitle}
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <div
              className="animate-pulse"
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: '#34d399',
                animationDuration: '2.5s',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '9px',
                color: '#34d399',
                letterSpacing: '0.1em',
              }}
            >
              ACTIVE
            </span>
          </div>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '11px',
            color: '#71717a',
            lineHeight: '1.8',
            maxWidth: '80ch',
            marginBottom: '20px',
          }}
        >
          {section.description}
        </p>

        {/* ── Active constraint badges ── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '24px',
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
              gap: '16px',
            }}
          >
            {section.videos.map((v) => (
              <VideoViewport
                key={v.src}
                src={v.src}
                label={v.label}
                accent={section.accent}
              />
            ))}
          </div>

          {/* Telemetry JSON column */}
          <div style={{ minHeight: '320px' }}>
            <TerminalPanel
              title={section.telemetryTitle}
              data={section.telemetry}
              accent={section.accent}
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
        padding: '16px 0',
      }}
    >
      <div
        style={{
          flex: 1,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, #27272a 30%, #27272a 70%, transparent)',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '8px',
          color: '#27272a',
          padding: '0 16px',
          letterSpacing: '0.2em',
        }}
      >
        ■ ■ ■
      </span>
      <div
        style={{
          flex: 1,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, #27272a 30%, #27272a 70%, transparent)',
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
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-cyan-900 selection:text-cyan-50 relative overflow-hidden scanlines noise">
      <CursorRig />

      {/* ══════════════════════════════════════════
          HEADER / NAV
          ══════════════════════════════════════════ */}
      <header className="fixed top-0 w-full z-50 h-16 flex items-center px-6 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            <Link
              href="/"
              className="font-mono text-xl font-bold tracking-tighter text-white uppercase"
              data-hover
            >
              BSVS
            </Link>
            <span className="hidden md:inline font-mono text-[10px] text-zinc-600 border-l border-zinc-800 pl-3 ml-1">
              SYS.OP.NODE // TELEMETRY_BENCHMARKS
            </span>
          </div>

          <nav className="flex gap-8 font-mono text-xs tracking-widest text-zinc-500">
            <Link
              href="/"
              className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              data-hover
            >
              <ArrowLeft size={12} /> [ RETURN TO PORTAL ]
            </Link>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          LIVE SESSION STATUS BAR
          ══════════════════════════════════════════ */}
      <div
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          zIndex: 49,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 24px',
          background: 'rgba(9,9,11,0.92)',
          borderBottom: '1px solid #1e1e22',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div
              className="animate-pulse"
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#ef4444',
                boxShadow: '0 0 8px rgba(239,68,68,0.6)',
                animationDuration: '1.5s',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '9px',
                color: '#ef4444',
                letterSpacing: '0.1em',
                fontWeight: 'bold',
              }}
            >
              LIVE DIAGNOSTIC SESSION
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '9px',
              color: '#3f3f46',
            }}
          >
            UPTIME {formatUptime(uptime)}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '9px',
              color: '#3f3f46',
            }}
          >
            UTC {utcTime}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <ShieldCheck size={10} style={{ color: '#34d399' }} />
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '9px',
                color: '#34d399',
                letterSpacing: '0.05em',
              }}
            >
              3/3 GATES PASSED
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
          ══════════════════════════════════════════ */}
      <main
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          paddingTop: '160px',
          paddingBottom: '96px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* ── Page header ── */}
        <div ref={headerRef} style={{ marginBottom: '64px' }}>
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
            <Activity size={14} style={{ color: '#22d3ee' }} />
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '11px',
                letterSpacing: '0.4em',
                color: '#22d3ee',
              }}
            >
              TELEMETRY BENCHMARKS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.1,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
              fontWeight: 'bold',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '32px',
              textTransform: 'uppercase',
              lineHeight: '1.15',
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
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '11px',
              lineHeight: '1.9',
              color: '#71717a',
              maxWidth: '80ch',
              borderLeft: '2px solid #27272a',
              paddingLeft: '24px',
              paddingTop: '4px',
              paddingBottom: '4px',
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
              gap: '8px',
              marginTop: '28px',
            }}
          >
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-hover
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: '10px',
                  color: '#71717a',
                  padding: '6px 14px',
                  border: '1px solid #27272a',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = s.accent;
                  (e.target as HTMLElement).style.borderColor = s.accent + '66';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = '#71717a';
                  (e.target as HTMLElement).style.borderColor = '#27272a';
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
          style={{
            border: '1px solid #27272a',
            background: '#0c0c0f',
            padding: '24px 32px',
            marginTop: '64px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
            }}
          >
            <Cpu size={12} style={{ color: '#22d3ee', opacity: 0.6 }} />
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '10px',
                color: '#52525b',
                fontWeight: 'bold',
                letterSpacing: '0.1em',
              }}
            >
              CLASSIFICATION_NODE // PUBLIC_TELEMETRY_PAYLOAD
            </span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '10px',
              color: '#3f3f46',
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
      <footer className="border-t border-zinc-900 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-600">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>SYSTEM ONLINE // BSVS INFRASTRUCTURE</span>
          </div>
          <div className="font-mono text-[10px] text-zinc-500">
            &copy; {new Date().getFullYear()} BE STILL VISUAL STUDIO. ALL
            PROTOCOLS ENFORCED.
          </div>
        </div>
      </footer>
    </div>
  );
}
