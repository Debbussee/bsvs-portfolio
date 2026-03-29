'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const nodes = [
  { id: '01', title: 'KINETIC IMPACT_01',       img: '/images/kinetic_toolbox_terminal_velocity_decay_bsvs_202603190803.png', lat: '34.0522', lon: '-118.2437', status: 'STABLE',    iso: '800',  shutter: '1/500', 
    details: [
      { id: '', label: 'Surface Porosity & Micro-Oxidation', description: 'Notice the granular irregularity on the wrench’s surface. Through the lens of Forensic Realism, the visual system captures the precise degradation of high-carbon steel. The erratic distribution of rust and micro-pitting suggests a tangible history, avoiding the repetitive patterns that typically betray digital origins.' },
      { id: '', label: 'Kinetic Light Scattering', description: 'The motion blur isn\'t a uniform smear; it reflects a sophisticated understanding of light interaction. As the tool descends toward the concrete, the specularity shifts along the forged edges, creating a "shutter-accurate" representation of velocity that captures the authentic way light breaks across a moving, textured metallic plane.' }
    ]
  },
  { id: '02', title: 'STRUCTURAL DECAY_04',      img: '/images/oxide_flaking_thermal_decay_macro_bsvs_202603190754.png',   lat: '40.7128', lon: '-74.0060',  status: 'DEGRADING', iso: '1600', shutter: '1/250', 
    details: [
      { id: '01 /', label: 'Material Stratification', description: 'The brittle, curled edges of the flaking iron oxide exhibit accurate tensile stress and structural degradation. This layering simulates exactly how physical matter fractures and separates under environmental decay.' },
      { id: '02 /', label: 'Specular Granularity', description: 'Directional lighting casts deep, absolute shadows beneath lifted strata while catching micro-specular highlights on unoxidized metallic fragments. This interplay establishes a profound sense of tactile reality.' }
    ]
  },
  { id: '03', title: 'FLUID DYNAMICS_11',        img: '/images/fluid_dynamics_bsvs_202603291326.png', lat: '51.5074', lon: '-0.1278',   status: 'COMPUTING', iso: '400',  shutter: '1/1000', 
    details: [
      { id: '01.', label: 'Capillary Action & Transition', description: 'The visual system accurately simulates moisture wicking upward on the canvas pant leg. The irregular, jagged border between the dry, porous grain of the fabric and the saturated, heavy tonal weight of the wet hem demonstrates a deep understanding of physical material properties.' },
      { id: '02.', label: 'Kinetic Fluid Dynamics', description: 'The splash is a mathematically precise freeze-frame of chaos. Suspended droplets vary in volume and velocity, each acting as a microscopic optical lens where harsh, directional light refracts to create sharp, specular highlights and distinct micro-shadows.' },
      { id: '03.', label: 'Differential Weathering', description: 'The leather boot exhibits deep structural creasing and micro-abrasions. The Engineered Visuals calculate exactly how light behaves—becoming highly reflective over the smooth, wet leather while remaining matte and absorptive where the material is scuffed.' }
    ]
  },
  { id: '04', title: 'THERMAL SHIFT_09',         img: '/images/cyborg_thermal_shift_bsvs_202603291346.png',     lat: '35.6895', lon: '139.6917',  status: 'STABLE',    iso: '200',  shutter: '1/2000', 
    details: [
      { id: '', label: '', description: 'The profound sense of reality in these Engineered Visuals is anchored by two critical physical details:' },
      { id: '01', label: 'Thermal Material Degradation', description: 'The transition between the organic dermis and the internal armature exhibits advanced material logic. We see asymmetrical carbonization at the tissue\'s edge—irregular, volumetric curling that mimics high-intensity heat exposure—juxtaposed with the metallic "heat-tinting" (oxidation gradients of blue and purple) on the core cylinder.' },
      { id: '02', label: 'Subsurface Light Transport', description: 'The luminescence from the wrist cavity isn\'t a flat overlay. It utilizes precise subsurface scattering, where light bleeds through the translucent layers of the surrounding tissue. This interaction creates a warm, internal glow that obeys the laws of organic physics, correctly calculating shadow falloff across the underside of the digits and sleeve fabric.' }
    ]
  },
  { id: '05', title: 'OPTICAL REFRACTION_02',    img: '/images/prism_light_optical_refraction_202603291351.png',    lat: '48.8566', lon: '2.3522',    status: 'ACTIVE',    iso: '640',  shutter: '1/800', 
    details: [
      { id: '01 / .density', label: 'Particulate Density', description: 'The realism is anchored by micro-abrasions, structural chips along the glass edge, and the exact scattering of settled dust on the front plane. This grounds the object in a physical, tangible environment rather than a sterile digital vacuum.' },
      { id: '02 / .scattering', label: 'Volumetric Atmospheric', description: 'The incident white light and resulting chromatic dispersion interact dynamically with suspended atmospheric dust. This creates a dense, volumetric presence, allowing the viewer to perceive the exact physical volume the light occupies.' },
      { id: '03 / .refraction', label: 'Internal Refraction', description: 'Capturing the chaotic beauty of light hitting microscopic internal fractures. The visual calculates not just the primary exit beam, but the internal structural flaws of the glass medium according to strict optical physics.' }
    ]
  },
  { id: '06', title: 'BIOLOGICAL STRESS_07',  img: '/images/human_bio_fatigue_bsvs_202603291319.png',      lat: '37.7749', lon: '-122.4194', status: 'LOCKED',    iso: '3200', shutter: '1/60', 
    details: [
      { id: '01', label: 'Volumetric Particulate Scattering', description: 'The atmosphere is defined by precise light interaction with suspended dust. The light does not merely overlay the subject; it wraps around the anatomy and adheres to physical falloff logic, creating deep environmental authenticity.' },
      { id: '02', label: 'Micro-Surface Fidelity', description: 'Interaction of light on the workbench demonstrates advanced material logic. Specular highlights map flawlessly to the greasy, uneven texture of the metal, creating a stark contrast against the matte, grime-layered uniform.' },
      { id: '03', label: 'Anatomical Tension', description: 'Visual weight is anchored by the compression of the hands against the surface and the visible tension in the forearm musculature. This physical logic prevents the subject from floating, locking them into the geometry of the space.' }
    ]
  },
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
  const [detailsActive, setDetailsActive] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ position: 'relative', aspectRatio: '1', background: '#000', overflow: 'hidden', cursor: 'pointer' }}
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ delay: (index % 3) * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setDetailsActive(false); }}
      onClick={() => setDetailsActive(!detailsActive)}
      data-img-hover
    >
      {/* image */}
      <motion.img
        src={node.img}
        alt={node.title}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        animate={{
          filter: hovered || detailsActive
            ? 'grayscale(100%) contrast(1.2) brightness(0.25)'
            : 'grayscale(100%) contrast(1.15) brightness(0.65)',
          scale: hovered || detailsActive ? 1.04 : 1,
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
        style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px', zIndex: 20, pointerEvents: detailsActive ? 'none' : 'auto' }}
        initial={{ opacity: 0, y: 16 }}
        animate={hovered && !detailsActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>PHYS_STATE</span><span style={{ color: statusColor[node.status] ?? '#a1a1aa' }}>{node.status}</span></div>
          </div>
          
          <button 
            onMouseEnter={() => setDetailsActive(true)}
            style={{
              marginTop: '12px', width: '100%', padding: '6px', 
              border: '1px solid #22d3ee', color: '#22d3ee', 
              fontSize: '10px', fontFamily: 'monospace', 
              background: 'transparent', cursor: 'pointer',
              textTransform: 'uppercase', letterSpacing: '0.1em'
            }}
          >
            [ THE FORENSIC WHY ]
          </button>
        </div>
      </motion.div>

      {/* Forensic Details Overlay */}
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-end z-30"
        style={{ pointerEvents: detailsActive ? 'auto' : 'none' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: detailsActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div 
          style={{ background: 'rgba(0,0,0,0.7)', padding: '20px', borderLeft: '2px solid #fff', backdropFilter: 'blur(8px)', overflowY: 'auto', maxHeight: '100%' }}
        >
          {node.details && node.details.length > 0 ? (
            node.details.map((d, idx) => (
              <div key={idx} style={{ marginBottom: idx === node.details.length - 1 ? 0 : '16px' }}>
                {(d.id || d.label) && (
                  <h3 style={{ fontFamily: 'monospace', fontSize: '12px', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 'bold' }}>
                    {d.id} {d.id && d.label && <br />}
                    <span style={{ color: '#a1a1aa' }}>{d.label}</span>
                  </h3>
                )}
                <p style={{ fontSize: '12px', color: '#d4d4d8', lineHeight: '1.6' }}>
                  {d.description}
                </p>
              </div>
            ))
          ) : (
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#a1a1aa', textAlign: 'center', padding: '20px 0' }}>
              FORENSIC DATA UNAVAILABLE FOR THIS NODE.
            </div>
          )}
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
