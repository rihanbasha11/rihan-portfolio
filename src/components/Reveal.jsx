import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Scroll-reveal wrapper — fades + slides up with a crisp spring ease.
 */
export default function Reveal({
  children,
  delay    = 0,
  y        = 32,
  x        = 0,
  scale    = 1,
  className = '',
  once     = true,
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once, margin: '0px 0px -72px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],   /* expo ease-out */
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
