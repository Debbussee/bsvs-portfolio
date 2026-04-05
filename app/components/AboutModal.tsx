import { motion, AnimatePresence } from 'framer-motion';

export default function AboutModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-8 overflow-y-auto"
          onClick={onClose}
        >
          {/* Close instruction */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="fixed top-8 right-8 font-mono text-[10px] tracking-widest text-zinc-500 hover:text-white transition-colors cursor-pointer uppercase border border-zinc-800 px-4 py-2 bg-black/50"
            onClick={onClose}
          >
            [ CLOSE ]
          </motion.div>

          <div 
            className="w-full max-w-[720px] my-auto py-24 text-zinc-200"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="font-mono text-[10px] tracking-widest text-[#d97706]">---- SECTION 05</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-[44px] font-bold tracking-tight text-white mb-12"
            >
              ABOUT
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 text-[15px] md:text-[16px] leading-[1.6]"
            >
              <p>Every aircraft that has ever flown did so inside a mathematical framework with a hole in it.</p>
              
              <p>The Navier-Stokes equations describe the motion of viscous fluids. They are the fundamental laws governing everything from weather forecasts to hemodynamics and the air moving over a wing.</p>
              
              <p>The hole is the Clay Mathematics Institute's Millennium Prize problem. A million dollars has been on the table since the year 2000 because, in three dimensions, nobody has proved that smooth, globally-defined solutions exist for all time. It remains one of the seven great unsolved problems in mathematics.</p>
              
              <p>And yet every aircraft still flies.</p>
              
              <p>The engineering world has operated for a century inside an incomplete theory and produced results indistinguishable from reality. Which means completeness was never the prerequisite. The constraint structure was.</p>
              
              <p>The equations encode the right physics. The constraints—conservation of momentum, incompressibility, and viscous dissipation—are load-bearing. The proof of global smoothness is not. We confused mathematical closure with physical truth, and the confusion cost us nothing in practice because the scaffolding was correct.</p>
              
              <p>This is not a story about fluids. It is a story about how working systems actually work. Biological systems, economies, generative models, and creative practices—none of them wait for complete theories before operating. They run on correctly structured constraints inside partial understanding. The scaffolding does the work. Completeness is a mathematical aesthetic, not a precondition for building.</p>
              
              <p>Stop waiting for closed-form understanding before you build. The constraint structure is the product.</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
