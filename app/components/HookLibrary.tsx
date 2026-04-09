'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const statements = [
  {
    title: 'AUTHORITY STRATEGY',
    body: 'True cinematic atmosphere isn\u2019t a happy accident. It\u2019s the result of rigorously designed Visual Systems. Here is how we engineer absolute reality.',
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

const DOMAINS = [
  'Autonomous Navigation',
  'Sim-to-Real Robotics',
  'Material Stress Testing',
  'Kinetic/Fluid Simulation',
  'Optical Physics Rendering',
  'Deterministic Environment Design',
];

/* ── shared input style ── */
const inputBase: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid #27272a',
  color: '#e4e4e7',
  fontFamily: 'monospace',
  fontSize: '13px',
  padding: '12px 16px',
  outline: 'none',
  transition: 'border-color 0.3s, box-shadow 0.3s',
  letterSpacing: '0.04em',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '11px',
  letterSpacing: '0.25em',
  color: '#a78bfa',
  marginBottom: '8px',
  display: 'block',
};

const fieldWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column' as const,
};

export default function HookLibrary() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  /* ── form state ── */
  const [designation, setDesignation]     = useState('');
  const [domain, setDomain]               = useState('');
  const [bottleneck, setBottleneck]       = useState('');
  const [acknowledged, setAcknowledged]   = useState(false);
  const [submitted, setSubmitted]         = useState(false);
  const [submitting, setSubmitting]       = useState(false);
  const [focusedField, setFocusedField]   = useState<string | null>(null);

  const canSubmit = designation.trim() && domain && bottleneck.trim().length >= 20 && acknowledged;

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);

    // Simulate uplink transmission delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2200);
  }, [canSubmit]);

  const focusBorder = (field: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focusedField === field ? '#a78bfa' : '#27272a',
    boxShadow: focusedField === field ? '0 0 12px rgba(167,139,250,0.15)' : 'none',
  });

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
            &quot;Atmosphere cannot be faked; it must be calculated. By treating light behavior, material friction, and environmental particulate as interconnected data points, we move beyond approximation. This is the architecture of Forensic Realism. Absolute precision. Deterministic output. Visual Systems built for the uncompromising. Engineered Visuals.&quot;
          </p>
        </motion.div>

        {/* ─────────────────────────────────────────────
            SYS.INTAKE_PROTOCOL — Client Rejection Gate
            ───────────────────────────────────────────── */}
        <motion.div
          id="intake"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          {/* Protocol Header Bar */}
          <div style={{
            background: 'rgba(167,139,250,0.06)',
            border: '1px solid rgba(167,139,250,0.2)',
            borderBottom: 'none',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '8px', height: '8px',
                background: '#a78bfa',
                borderRadius: '50%',
                boxShadow: '0 0 8px rgba(167,139,250,0.6)',
                animation: 'pulse 3s infinite',
              }} />
              <span style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                letterSpacing: '0.3em',
                color: '#a78bfa',
                fontWeight: 'bold',
              }}>
                SYS.INTAKE_PROTOCOL
              </span>
            </div>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '10px',
              color: '#52525b',
              letterSpacing: '0.15em',
            }}>
              v4.2.1 // UPLINK ACTIVE
            </span>
          </div>

          {/* Main Terminal Panel */}
          <div style={{
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(167,139,250,0.2)',
            padding: '40px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Scan-line overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(167,139,250,0.015) 3px, rgba(167,139,250,0.015) 4px)',
              pointerEvents: 'none',
              zIndex: 1,
            }} />

            {/* Corner brackets */}
            <div style={{ position: 'absolute', top: '0', left: '0', width: '16px', height: '16px', borderTop: '2px solid #a78bfa', borderLeft: '2px solid #a78bfa' }} />
            <div style={{ position: 'absolute', top: '0', right: '0', width: '16px', height: '16px', borderTop: '2px solid #a78bfa', borderRight: '2px solid #a78bfa' }} />
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '16px', height: '16px', borderBottom: '2px solid #a78bfa', borderLeft: '2px solid #a78bfa' }} />
            <div style={{ position: 'absolute', bottom: '0', right: '0', width: '16px', height: '16px', borderBottom: '2px solid #a78bfa', borderRight: '2px solid #a78bfa' }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Terminal prompt intro */}
              <div style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                color: '#52525b',
                marginBottom: '32px',
                lineHeight: '1.8',
              }}>
                <span style={{ color: '#a78bfa' }}>&gt;</span> INITIATING CLIENT INTAKE AUDIT...<br />
                <span style={{ color: '#a78bfa' }}>&gt;</span> ALL FIELDS REQUIRED. INCOMPLETE SUBMISSIONS WILL BE REJECTED.<br />
                <span style={{ color: '#a78bfa' }}>&gt;</span> PROVIDE DETERMINISTIC DATA ONLY.<br />
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── SUCCESS STATE ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', padding: '40px 0' }}
                  >
                    <div style={{
                      width: '48px', height: '48px',
                      border: '2px solid #22d3ee',
                      borderRadius: '50%',
                      margin: '0 auto 24px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 0 24px rgba(34,211,238,0.3)',
                    }}>
                      <span style={{ color: '#22d3ee', fontSize: '20px', fontFamily: 'monospace' }}>✓</span>
                    </div>
                    <div style={{
                      fontFamily: 'monospace',
                      fontSize: '14px',
                      letterSpacing: '0.25em',
                      color: '#22d3ee',
                      marginBottom: '12px',
                    }}>
                      UPLINK ESTABLISHED
                    </div>
                    <div style={{
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      color: '#52525b',
                      lineHeight: '1.8',
                    }}>
                      INTAKE PACKET RECEIVED. AUDIT QUEUE POSITION ASSIGNED.<br />
                      THE ARCHITECT WILL RESPOND WITHIN 48-72 HOURS.<br />
                      <span style={{ color: '#a78bfa' }}>PROTOCOL STATUS: ACTIVE</span>
                    </div>
                  </motion.div>
                ) : (
                  /* ── FORM ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* CLIENT DESIGNATION */}
                    <div style={fieldWrap}>
                      <label htmlFor="intake-designation" style={labelStyle}>
                        <span style={{ color: '#52525b', marginRight: '8px' }}>01</span>
                        CLIENT DESIGNATION
                      </label>
                      <input
                        id="intake-designation"
                        type="text"
                        placeholder="Name / Organization"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        onFocus={() => setFocusedField('designation')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          ...focusBorder('designation'),
                          cursor: 'text',
                        }}
                        required
                      />
                    </div>

                    {/* ENVIRONMENTAL PARAMETERS */}
                    <div style={fieldWrap}>
                      <label htmlFor="intake-domain" style={labelStyle}>
                        <span style={{ color: '#52525b', marginRight: '8px' }}>02</span>
                        ENVIRONMENTAL PARAMETERS
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="intake-domain"
                          value={domain}
                          onChange={(e) => setDomain(e.target.value)}
                          onFocus={() => setFocusedField('domain')}
                          onBlur={() => setFocusedField(null)}
                          required
                          style={{
                            ...focusBorder('domain'),
                            appearance: 'none',
                            cursor: 'pointer',
                            color: domain ? '#e4e4e7' : '#52525b',
                          }}
                        >
                          <option value="" disabled>Select operational domain...</option>
                          {DOMAINS.map(d => (
                            <option key={d} value={d} style={{ background: '#09090b', color: '#e4e4e7' }}>
                              {d}
                            </option>
                          ))}
                        </select>
                        {/* Dropdown arrow */}
                        <div style={{
                          position: 'absolute',
                          right: '16px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none',
                          color: '#a78bfa',
                          fontFamily: 'monospace',
                          fontSize: '10px',
                        }}>
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* THE PHYSICAL BOTTLENECK */}
                    <div style={fieldWrap}>
                      <label htmlFor="intake-bottleneck" style={labelStyle}>
                        <span style={{ color: '#52525b', marginRight: '8px' }}>03</span>
                        THE PHYSICAL BOTTLENECK
                      </label>
                      <div style={{
                        fontFamily: 'monospace',
                        fontSize: '10px',
                        color: '#3f3f46',
                        marginBottom: '8px',
                        lineHeight: '1.6',
                        letterSpacing: '0.03em',
                      }}>
                        DIRECTIVE: Define the exact physical or material interaction your current simulation models are failing to resolve.
                      </div>
                      <textarea
                        id="intake-bottleneck"
                        placeholder="e.g., non-Newtonian boundary layers, high-velocity optical refraction, deformable collision meshes under thermal stress..."
                        value={bottleneck}
                        onChange={(e) => setBottleneck(e.target.value)}
                        onFocus={() => setFocusedField('bottleneck')}
                        onBlur={() => setFocusedField(null)}
                        rows={4}
                        required
                        style={{
                          ...focusBorder('bottleneck'),
                          resize: 'vertical',
                          minHeight: '100px',
                          lineHeight: '1.7',
                        }}
                      />
                      {bottleneck.length > 0 && bottleneck.trim().length < 20 && (
                        <div style={{
                          fontFamily: 'monospace',
                          fontSize: '10px',
                          color: '#ef4444',
                          marginTop: '6px',
                          letterSpacing: '0.1em',
                        }}>
                          ⚠ INSUFFICIENT DATA — MINIMUM 20 CHARACTERS REQUIRED
                        </div>
                      )}
                    </div>

                    {/* DIVIDER */}
                    <div style={{
                      width: '100%',
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent)',
                    }} />

                    {/* THE MANDATE ACKNOWLEDGMENT */}
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div
                        onClick={() => setAcknowledged(!acknowledged)}
                        style={{
                          width: '18px',
                          height: '18px',
                          minWidth: '18px',
                          border: `1px solid ${acknowledged ? '#a78bfa' : '#3f3f46'}`,
                          background: acknowledged ? 'rgba(167,139,250,0.15)' : 'transparent',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.25s ease',
                          marginTop: '2px',
                          boxShadow: acknowledged ? '0 0 10px rgba(167,139,250,0.2)' : 'none',
                        }}
                      >
                        {acknowledged && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={{ color: '#a78bfa', fontSize: '12px', fontFamily: 'monospace', lineHeight: 1 }}
                          >
                            ✓
                          </motion.span>
                        )}
                      </div>
                      <label
                        onClick={() => setAcknowledged(!acknowledged)}
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '11px',
                          color: '#71717a',
                          lineHeight: '1.7',
                          cursor: 'pointer',
                          letterSpacing: '0.02em',
                          userSelect: 'none',
                        }}
                      >
                        <span style={{ color: '#a78bfa', letterSpacing: '0.2em', fontSize: '10px', display: 'block', marginBottom: '6px' }}>
                          MANDATE ACKNOWLEDGMENT <span style={{ color: '#ef4444' }}>*</span>
                        </span>
                        I acknowledge that Be Still Visual Studio does not generate subjective or aesthetic media.
                        We engineer deterministic visual physics. If this request requires probabilistic hallucination,
                        the uplink will be rejected.
                      </label>
                    </div>

                    {/* SUBMIT */}
                    <motion.button
                      type="submit"
                      disabled={!canSubmit || submitting}
                      whileHover={canSubmit && !submitting ? { scale: 1.01 } : {}}
                      whileTap={canSubmit && !submitting ? { scale: 0.98 } : {}}
                      style={{
                        width: '100%',
                        padding: '18px 32px',
                        border: `1px solid ${canSubmit ? '#a78bfa' : '#27272a'}`,
                        background: canSubmit ? 'rgba(167,139,250,0.08)' : 'transparent',
                        color: canSubmit ? '#a78bfa' : '#3f3f46',
                        fontFamily: 'monospace',
                        fontSize: '13px',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase' as const,
                        cursor: canSubmit && !submitting ? 'pointer' : 'not-allowed',
                        transition: 'all 0.35s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: canSubmit ? '0 0 20px rgba(167,139,250,0.1)' : 'none',
                      }}
                    >
                      {submitting ? (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                          <motion.span
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                          >
                            ◈
                          </motion.span>
                          TRANSMITTING UPLINK...
                        </span>
                      ) : (
                        '[ INITIATE UPLINK ]'
                      )}

                      {/* Animated border scan on hover */}
                      {canSubmit && !submitting && (
                        <motion.div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.06), transparent)',
                          }}
                          animate={{ left: ['−100%', '200%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />
                      )}
                    </motion.button>

                    {/* Status line */}
                    <div style={{
                      fontFamily: 'monospace',
                      fontSize: '10px',
                      color: '#27272a',
                      textAlign: 'center',
                      letterSpacing: '0.15em',
                    }}>
                      {canSubmit
                        ? '▸ ALL PARAMETERS VALIDATED — READY FOR UPLINK'
                        : '▸ AWAITING COMPLETE PARAMETER INPUT'}
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
