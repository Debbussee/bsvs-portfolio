import { motion, AnimatePresence } from 'framer-motion';

const paragraphs = [
  'Every aircraft that has ever flown did so inside a mathematical framework with a hole in it.',
  
  'The Navier-Stokes equations describe the motion of viscous fluids. They are the fundamental laws governing everything from weather forecasts to hemodynamics and the air moving over a wing.',
  
  'The hole is the Clay Mathematics Institute\'s Millennium Prize problem. A million dollars has been on the table since the year 2000 because, in three dimensions, nobody has proved that smooth, globally-defined solutions exist for all time. It remains one of the seven great unsolved problems in mathematics.',
  
  'And yet every aircraft still flies.',
  
  'The engineering world has operated for a century inside an incomplete theory and produced results indistinguishable from reality. Which means completeness was never the prerequisite. The constraint structure was.',
  
  'The equations encode the right physics. The constraints\u2014conservation of momentum, incompressibility, and viscous dissipation\u2014are load-bearing. The proof of global smoothness is not. We confused mathematical closure with physical truth, and the confusion cost us nothing in practice because the scaffolding was correct.',
  
  'This is not a story about fluids. It is a story about how working systems actually work. Biological systems, economies, generative models, and creative practices\u2014none of them wait for complete theories before operating. They run on correctly structured constraints inside partial understanding. The scaffolding does the work. Completeness is a mathematical aesthetic, not a precondition for building.',
  
  'Stop waiting for closed-form understanding before you build.',
];

export default function AboutModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            overflowY: 'auto',
          }}
          onClick={onClose}
        >
          {/* Close button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onClick={onClose}
            style={{
              position: 'fixed', top: '24px', right: '24px',
              fontFamily: 'monospace', fontSize: '12px', color: '#a1a1aa',
              border: '1px solid #3f3f46', padding: '8px 16px',
              background: 'rgba(0,0,0,0.5)', cursor: 'pointer',
              zIndex: 10000,
            }}
          >
            [ CLOSE ]
          </motion.div>

          {/* Content container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '896px',
              margin: '0 auto',
              padding: '120px 48px 80px 48px',
            }}
          >
            {/* Section tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}
            >
              <div style={{ width: '16px', height: '1px', background: '#f59e0b' }} />
              <span style={{ fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.5em', color: '#f59e0b' }}>SECTION 05</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 'bold',
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '64px',
              }}
            >
              ABOUT
            </motion.h2>

            {/* Paragraphs — styled like protocol cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {paragraphs.map((text, i) => (
                <div key={i}>
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.6, ease: 'easeOut' }}
                    style={{
                      borderLeft: '2px solid #27272a',
                      paddingLeft: '24px',
                    }}
                  >
                    <p style={{ color: '#a1a1aa', fontSize: '16px', lineHeight: '1.8', maxWidth: '65ch' }}>
                      {text}
                    </p>
                  </motion.div>

                  {/* Video embed after the "constraint structure" paragraph */}
                  {i === 4 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                      style={{
                        marginTop: '40px',
                        border: '1px solid #27272a',
                        background: '#000',
                        overflow: 'hidden',
                      }}
                    >
                      <video
                        src="/images/video_bsvs_040820261135.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          width: '100%',
                          display: 'block',
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Inquiries footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{
                marginTop: '80px',
                paddingTop: '32px',
                borderTop: '1px solid #27272a',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '8px',
              }}
            >
              <span style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.2em', color: '#52525b', textTransform: 'uppercase' }}>
                INQUIRIES
              </span>
              <a
                href="mailto:mkd@bestillvisualstudio.com"
                style={{
                  fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.1em',
                  color: '#f59e0b', textDecoration: 'none',
                }}
              >
                mkd@bestillvisualstudio.com
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
