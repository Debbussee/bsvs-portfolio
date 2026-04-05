'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-400 flex flex-col items-center justify-center p-8 md:p-24 selection:bg-zinc-800 selection:text-zinc-100">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-8 left-8 md:top-12 md:left-12 z-50"
      >
        <Link href="/" className="font-mono text-[10px] tracking-widest text-zinc-600 hover:text-zinc-300 transition-colors uppercase">
          [&nbsp;RETURN TO INDEX&nbsp;]
        </Link>
      </motion.div>
      
      <motion.main 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="max-w-[700px] mx-auto flex flex-col w-full"
      >
        <div className="space-y-8 md:space-y-10 font-serif text-[15px] md:text-[17px] leading-[2.2] md:leading-[2.4] text-zinc-400 text-justify tracking-wide font-light w-full">
          <p>
            Every aircraft that has ever flown did so inside a mathematical framework with a hole in it.
          </p>
          <p>
            The Navier-Stokes equations describe the motion of viscous fluids. They are the fundamental laws governing everything from weather forecasts to hemodynamics and the air moving over a wing.
          </p>
          <p>
            The hole is the Clay Mathematics Institute’s Millennium Prize problem. A million dollars has been on the table since the year 2000 because, in three dimensions, nobody has proved that smooth, globally-defined solutions exist for all time. It remains one of the seven great unsolved problems in mathematics.
          </p>
          <p>
            And yet every aircraft still flies.
          </p>
          <p>
            The engineering world has operated for a century inside an incomplete theory and produced results indistinguishable from reality. Which means completeness was never the prerequisite. The constraint structure was.
          </p>
          <p>
            The equations encode the right physics. The constraints—conservation of momentum, incompressibility, and viscous dissipation—are load-bearing. The proof of global smoothness is not. We confused mathematical closure with physical truth, and the confusion cost us nothing in practice because the scaffolding was correct.
          </p>
          <p>
            This is not a story about fluids. It is a story about how working systems actually work. Biological systems, economies, generative models, and creative practices—none of them wait for complete theories before operating. They run on correctly structured constraints inside partial understanding. The scaffolding does the work. Completeness is a mathematical aesthetic, not a precondition for building.
          </p>
          <div className="pt-12 md:pt-16 pb-4">
            <p className="text-zinc-200 font-sans font-medium text-center uppercase tracking-[0.25em] text-[10px] md:text-[11px] leading-loose">
              Stop waiting for closed-form understanding before you build.<br/>The constraint structure is the product.
            </p>
          </div>
        </div>
      </motion.main>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-24 md:mt-32 mb-16 flex flex-col items-center space-y-8"
      >
        <div className="w-12 h-px bg-zinc-800" />

        <div className="font-mono text-[10px] tracking-[0.2em] text-zinc-600 text-center space-y-3 uppercase flex flex-col items-center">
          <span className="text-zinc-500">INQUIRIES</span>
          <a href="mailto:mkd@bestillvisualstudio.com" className="text-zinc-400 hover:text-white transition-colors">
            mkd@bestillvisualstudio.com
          </a>
        </div>
      </motion.div>
    </div>
  );
}
