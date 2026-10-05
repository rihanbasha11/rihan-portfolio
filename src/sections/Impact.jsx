import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { stats } from '../data/portfolio';

function useCountUp(target, inView, duration = 1400) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    // If target is not a pure number string, just reveal it
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) { setDisplay(target); return; }
    const prefix = target.match(/^[^0-9]*/)?.[0] ?? '';
    const suffix = target.match(/[^0-9.]+$/)?.[0] ?? '';
    const start  = performance.now();
    const raf    = requestAnimationFrame(function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const current = Math.round(ease * num);
      // format with comma if original has comma
      const formatted = target.includes(',')
        ? current.toLocaleString()
        : String(current);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (t < 1) requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return display;
}

function StatCard({ value, label, context, index }) {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const display = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
    >
      <span className="stat-value" aria-label={value}>{display}</span>
      <span className="stat-label">{label}</span>
      <span className="stat-context">{context}</span>
    </motion.div>
  );
}

export default function Impact() {
  return (
    <section className="impact-section" aria-label="Impact metrics">
      <div className="container">
        <div className="impact-header">
          <p className="section-kicker">Impact in numbers</p>
          <p className="impact-note">
            Real metrics from real work — internships, campaigns, and pipelines.
          </p>
        </div>
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
