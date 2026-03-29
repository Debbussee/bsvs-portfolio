'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const nodes = [
  { id: '01', title: 'KINETIC IMPACT_01',       img: '/images/kinetic_toolbox_terminal_velocity_decay_bsvs_202603190803.png', lat: '34.0522', lon: '-118.2437', status: 'STABLE',    iso: '800',  shutter: '1/500' },
  { id: '02', title: 'STRUCTURAL DECAY_04',      img: '/images/oxide_flaking_thermal_decay_macro_bsvs_202603190754.png',   lat: '40.7128', lon: '-74.0060',  status: 'DEGRADING', iso: '1600', shutter: '1/250' },
  { id: '03', title: 'FLUID DYNAMICS_11',        img: '/images/fluid_dynamics_bsvs_202603291326.png', lat: '51.5074', lon: '-0.1278',   status: 'COMPUTING', iso: '400',  shutter: '1/1000' },
  { id: '04', title: 'THERMAL SHIFT_09',         img: '/images/cyborg_thermal_shift_bsvs_202603291346.png',     lat: '35.6895', lon: '139.6917',  status: 'STABLE',    iso: '200',  shutter: '1/2000' },
  { id: '05', title: 'OPTICAL REFRACTION_02',    img: '/images/prism_light_optical_refraction_202603291351.png',    lat: '48.8566', lon: '2.3522',    status: 'ACTIVE',    iso: '640',  shutter: '1/800' },
  { id: '06', title: 'BIOLOGICAL STRESS_07',  img: '/images/human_bio_fatigue_bsvs_202603291319.png',      lat: '37.7749', lon: '-122.4194', status: 'LOCKED',    iso: '3200', shutter: '1/60' },
];

const statusColor: Record<string, string> = {
  STABLE:    '#34d399',
  DEGRADING: '#fb7185',
  COMPUTING: '#fbbf24',
  ACTIVE:    '#22d3ee',
  LOCKED:    '#a1a1aa',
};

function NodeCard({ node, index }: { node: typeof nodes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ position: 'relative', aspectRatio: '1', background: '#000', overflow: 'hidden', cursor: 'none' }}
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ delay: (index % 3) * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-img-hover
    >
      {/* image */}
      <motion.img
        src={node.img}
        alt={node.title}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        animate={{
          filter: hovered
            ? 'grayscale(100%) contrast(1.2) brightness(0.35)'
            : 'grayscale(100%) contrast(1.15) brightness(0.65)',
          scale: hovered ? 1.04 : 1,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* node ID badge */}
      <div style={{
        position: 'absolute', top: '12px', left: '12px',
        fontFamily: 'monospace', fontSize: '10px', color: '#71717a',
        background: 'rgba(0,0,0,0.7)', border: '1px solid #27272a',
        padding: '2px 8px', zIndex: 10,
      }}>
        {node.id}
      </div>

      {/* hover overlay — slides up */}
      <motion.div
        style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px', zIndex: 20 }}
        initial={{ opacity: 0, y: 16 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* top corners */}
        <div style={{ position: 'absolute', top: '12px', right: '12px', width: '16px', height: '16px', borderTop: '1px solid rgba(34,211,238,0.6)', borderRight: '1px solid rgba(34,211,238,0.6)' }} />
        <div style={{ position: 'absolute', top: '12px', left: '12px', width: '16px', height: '16px', borderTop: '1px solid rgba(34,211,238,0.6)', borderLeft: '1px solid rgba(34,211,238,0.6)' }} />

        <div style={{
          border: '1px solid rgba(63,63,70,0.5)', background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)', padding: '16px',
        }}>
          <h3 style={{
            fontFamily: 'monospace', fontSize: '14px', color: '#fff',
            letterSpacing: '0.1em', borderBottom: '1px solid #3f3f46',
            paddingBottom: '8px', marginBottom: '8px',
          }}>
            {node.title}
          </h3>
          <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#a1a1aa', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>GEO_LAT</span><span style={{ color: '#22d3ee' }}>{node.lat}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>GEO_LON</span><span style={{ color: '#22d3ee' }}>{node.lon}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>ISO</span><span>{node.iso}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>SHUTTER</span><span>{node.shutter}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>PHYS_STATE</span>
              <span style={{ color: statusColor[node.status] ?? '#a1a1aa' }}>{node.status}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VisualAudit() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <div style={{ width: '100%', background: '#000' }}>
      <section
        id="audit"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px 48px',
        }}
      >
        <div ref={headerRef} style={{
          marginBottom: '56px', display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', borderBottom: '1px solid #27272a', paddingBottom: '16px',
        }}>
          <div>
            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div style={{ width: '16px', height: '1px', background: '#f43f5e' }} />
              <span style={{ fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.5em', color: '#f43f5e' }}>SECTION 03</span>
            </motion.div>
            <motion.h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 'bold',
                letterSpacing: '-0.03em',
                color: '#ffffff',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              VISUAL AUDIT
            </motion.h2>
          </div>
          <motion.span
            style={{ fontFamily: 'monospace', fontSize: '12px', color: '#52525b' }}
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {nodes.length} DATA NODES
          </motion.span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '12px',
        }}>
          {nodes.map((node, i) => (
            <NodeCard key={node.id} node={node} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
