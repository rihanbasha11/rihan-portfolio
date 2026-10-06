import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../data/portfolio';

const EASE = [0.16, 1, 0.3, 1];

/* Smooth count-up with easing */
function useCountUp(target, inView, duration = 1600) {
  const [display, setDisplay] = useState('—');
  const rafRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    // Handle non-numeric values like "Top 5"
    const raw = target.replace(/[^0-9.]/g, '');
    const num = parseFloat(raw);
    if (isNaN(num)) { setDisplay(target); return; }

    const prefix = target.match(/^[^0-9]*/)?.[0]  ?? '';
    const suffix = target.match(/[^0-9.]+$/)?.[0] ?? '';
    const hasComma = target.includes(',');

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Expo ease-out
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const current = Math.round(eased * num);
      const formatted = hasComma ? current.toLocaleString() : String(current);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [inView, target, duration]);

  return display;
}

function StatCard({ value, label, context, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const count  = useCountUp(value, inView, 1400 + index * 80);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.06 }}
    >
      <span className="stat-value" aria-label={value}>{count}</span>
      <span className="stat-label">{label}</span>
      <span className="stat-context">{context}</span>
    </motion.div>
  );
}

export default function Impact() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="impact-section" aria-label="Impact metrics">
      <div className="container">
        <motion.div
          ref={headerRef}
          className="impact-header"
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="section-kicker accent">Impact in numbers</p>
          <p className="impact-note">Real metrics from real work — internships, campaigns, and pipelines.</p>
        </motion.div>

        <div className="stats-grid" role="list">
          {stats.map((s, i) => (
            <div role="listitem" key={s.label}>
              <StatCard {...s} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
