import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personal, headline } from '../data/portfolio';

const EASE = [0.16, 1, 0.3, 1];

/* Stagger container + items */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* Individual letter split for the heading */
function AnimatedWord({ text, className, delay = 0 }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 48, rotateX: -12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.75, ease: EASE, delay }}
      style={{ display: 'block', transformOrigin: 'top' }}
    >
      {text}
    </motion.span>
  );
}

export default function Hero() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" aria-label="Introduction">
      {/* Background grid */}
      <div className="hero-grid" aria-hidden="true" />
      {/* Glow orbs */}
      <div className="hero-dot-accent"   aria-hidden="true" />
      <div className="hero-dot-accent-2" aria-hidden="true" />

      <div className="container hero-body">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hero-content"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="hero-eyebrow">
            <span className="hero-pulse" aria-hidden="true" />
            {headline.eyebrow}
          </motion.div>

          {/* H1 — word by word */}
          <h1 className="hero-h1" aria-label={`${headline.h1Part1} ${headline.h1Part2}`}>
            <AnimatedWord text={headline.h1Part1} className="hero-h1-line1" delay={0.18} />
            <AnimatedWord text={headline.h1Part2} className="hero-h1-line2 serif" delay={0.28} />
          </h1>

          {/* Name */}
          <motion.p variants={item} className="hero-name">
            {personal.name}
            <span className="hero-location"> · {personal.location}</span>
          </motion.p>

          {/* Subhead */}
          <motion.p variants={item} className="hero-subhead">
            {headline.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="hero-cta">
            <motion.button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="View selected projects"
            >
              View selected work <ArrowUpRight size={16} aria-hidden="true" />
            </motion.button>
            <motion.a
              className="btn-secondary"
              href={personal.resume}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Download résumé"
            >
              <Download size={15} aria-hidden="true" /> Download résumé
            </motion.a>
          </motion.div>

          {/* Social */}
          <motion.div variants={item} className="hero-social">
            {[
              { href: personal.github,             icon: Github,   label: 'GitHub'   },
              { href: personal.linkedin,           icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`,  icon: Mail,     label: 'Email'    },
            ].map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <span className="hero-social-sep" aria-hidden="true" />}
                <a
                  href={s.href}
                  target={s.label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="hero-social-link"
                  aria-label={s.label}
                >
                  <s.icon size={15} /> <span>{s.label}</span>
                </a>
              </React.Fragment>
            ))}
          </motion.div>

          {/* Status badge */}
          <motion.div
            variants={item}
            className="hero-status"
            role="status"
          >
            <span className="hero-status-dot" aria-hidden="true" />
            {headline.status}
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-fade-bottom" aria-hidden="true" />
    </section>
  );
}
