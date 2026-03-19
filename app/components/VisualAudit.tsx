'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const nodes = [
  { id: '01', title: 'KINETIC IMPACT_01',       img: '/ella_editorial_bsvs_220001.png', lat: '34.0522', lon: '-118.2437', status: 'STABLE',    iso: '800',  shutter: '1/500' },
  { id: '02', title: 'STRUCTURAL DECAY_04',      img: '/renee_flood_bsvs_049120.png',   lat: '40.7128', lon: '-74.0060',  status: 'DEGRADING', iso: '1600', shutter: '1/250' },
  { id: '03', title: 'FLUID DYNAMICS_11',        img: '/sienna_clktwr_bsvs_109020.png', lat: '51.5074', lon: '-0.1278',   status: 'COMPUTING', iso: '400',  shutter: '1/1000' },
  { id: '04', title: 'THERMAL SHIFT_09',         img: '/tae_hmlss_bsvs_071110.png',     lat: '35.6895', lon: '139.6917',  status: 'STABLE',    iso: '200',  shutter: '1/2000' },
  { id: '05', title: 'OPTICAL REFRACTION_02',    img: '/ella_water_bsvs_220001.png',    lat: '48.8566', lon: '2.3522',    status: 'ACTIVE',    iso: '640',  shutter: '1/800' },
  { id: '06', title: 'BIOMECHANICAL STRESS_07',  img: '/zm_bench_bsvs_625530.png',      lat: '37.7749', lon: '-122.4194', status: 'LOCKED',    iso: '3200', shutter: '1/60' },
];

const statusColor: Record<string, string> = {
  STABLE:    'text-emerald-400',
  DEGRADING: 'text-rose-400',
  COMPUTING: 'text-amber-400',
  ACTIVE:    'text-cyan-400',
  LOCKED:    'text-zinc-400',
};

function NodeCard({ node, index }: { node: typeof nodes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative aspect-square bg-black overflow-hidden cursor-none group"
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
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          filter: hovered
            ? 'grayscale(100%) contrast(1.2) brightness(0.35)'
            : 'grayscale(100%) contrast(1.15) brightness(0.65)',
          scale: hovered ? 1.04 : 1,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* node ID badge */}
      <div className="absolute top-3 left-3 font-mono text-[10px] text-zinc-500 bg-black/70 border border-zinc-800 px-2 py-0.5 z-10">
        {node.id}
      </div>

      {/* hover overlay — slides up */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-5 z-20"
        initial={{ opacity: 0, y: 16 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* top corners */}
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-cyan-500/60" />
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan-500/60" />

        <div className="border border-zinc-700/50 bg-black/60 backdrop-blur-sm p-4 space-y-2">
          <h3 className="font-mono text-sm text-white tracking-widest border-b border-zinc-700 pb-2">
            {node.title}
          </h3>
          <div className="font-mono text-[10px] space-y-1 text-zinc-400">
            <div className="flex justify-between"><span>GEO_LAT</span><span className="text-cyan-400">{node.lat}</span></div>
            <div className="flex justify-between"><span>GEO_LON</span><span className="text-cyan-400">{node.lon}</span></div>
            <div className="flex justify-between"><span>ISO</span><span>{node.iso}</span></div>
            <div className="flex justify-between"><span>SHUTTER</span><span>{node.shutter}</span></div>
            <div className="flex justify-between">
              <span>PHYS_STATE</span>
              <span className={statusColor[node.status] ?? 'text-zinc-400'}>{node.status}</span>
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
    <section id="audit" className="py-32 px-6 max-w-7xl mx-auto">
      <div ref={headerRef} className="mb-14 flex items-end justify-between border-b border-zinc-800 pb-4">
        <div>
          <motion.div
            className="flex items-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-4 h-px bg-rose-500" />
            <span className="font-mono text-xs tracking-[0.5em] text-rose-500">SECTION 03</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            VISUAL AUDIT
          </motion.h2>
        </div>
        <motion.span
          className="font-mono text-xs text-zinc-600"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {nodes.length} DATA NODES
        </motion.span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {nodes.map((node, i) => (
          <NodeCard key={node.id} node={node} index={i} />
        ))}
      </div>
    </section>
  );
}
