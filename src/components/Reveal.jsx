import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Shared scroll-reveal wrapper.
 * Wraps children in a motion.div that fades + slides up on first viewport entry.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '0px 0px -60px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
