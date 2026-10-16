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
          animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'var(--bg-overlay)',
            overflowY: 'auto',
          }}
          onClick={onClose}
        >
          {/* Close button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            onClick={onClose}
            className="cinematic-glass"
            style={{
              position: 'fixed',
              top: '28px',
              right: '28px',
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: 'var(--text-primary)',
              padding: '10px 22px',
              borderRadius: '9999px',
              cursor: 'pointer',
              zIndex: 10000,
            }}
          >
            CLOSE ✕
          </motion.div>

          {/* Content container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '880px',
              margin: '0 auto',
              padding: '100px 32px 96px 32px',
            }}
          >
            <div
              className="cinematic-glass"
              style={{
                borderRadius: '20px',
                padding: 'clamp(32px, 6vw, 64px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Section tag */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}
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
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent-primary)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: '10px',
                      letterSpacing: '0.35em',
                      color: 'var(--accent-primary)',
                      fontWeight: 600,
                    }}
                  >
                    SECTION 05
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                className="font-editorial"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '48px',
                }}
              >
                ABOUT
              </motion.h2>

              {/* Paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {paragraphs.map((text, i) => (
                  <div key={i}>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + i * 0.05, duration: 0.6, ease: 'easeOut' }}
                      style={{
                        borderLeft: i === 0 || i === 3 || i === 7 ? '3px solid var(--accent-primary)' : '2px solid var(--border-subtle)',
                        paddingLeft: '24px',
                      }}
                    >
                      <p
                        className={i === 0 || i === 3 || i === 7 ? 'font-editorial' : undefined}
                        style={{
                          color: i === 0 || i === 3 || i === 7 ? 'var(--text-primary)' : 'var(--text-secondary)',
                          fontWeight: i === 0 || i === 3 || i === 7 ? 600 : 400,
                          fontSize: i === 0 || i === 3 || i === 7 ? '22px' : '16.5px',
                          lineHeight: '1.8',
                          maxWidth: '68ch',
                        }}
                      >
                        {text}
                      </p>
                    </motion.div>

                    {/* Video embed after the "constraint structure" paragraph */}
                    {i === 4 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                        style={{
                          marginTop: '36px',
                          borderRadius: '14px',
                          border: '1px solid var(--border-subtle)',
                          background: 'var(--bg-secondary)',
                          padding: '10px',
                          overflow: 'hidden',
                          boxShadow: 'var(--card-shadow)',
                        }}
                      >
                        <video
                          src="/images/video_bsvs_040820261135.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls
                          style={{
                            width: '100%',
                            display: 'block',
                            borderRadius: '8px',
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
                transition={{ delay: 0.75, duration: 0.6 }}
                style={{
                  marginTop: '64px',
                  paddingTop: '32px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: '10px',
                    letterSpacing: '0.22em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  INQUIRIES
                </span>
                <a
                  href="mailto:mkd@bestillvisualstudio.com"
                  style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: 'var(--accent-primary)',
                    textDecoration: 'none',
                  }}
                >
                  mkd@bestillvisualstudio.com
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
