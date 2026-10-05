import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personal, headline } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1];

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 28 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
  },
};

export default function Hero() {
  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" aria-label="Introduction">
      {/* Background grid lines */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Subtle dot accent */}
      <div className="hero-dot-accent" aria-hidden="true" />

      <div className="container hero-body">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="hero-content"
        >
          {/* Eyebrow */}
          <motion.div variants={stagger.item} className="hero-eyebrow">
            <span className="hero-pulse" aria-hidden="true" />
            {headline.eyebrow}
          </motion.div>

          {/* H1 */}
          <motion.h1 variants={stagger.item} className="hero-h1">
            <span className="hero-h1-line1">{headline.h1Part1}</span>
            <br />
            <em className="hero-h1-line2">{headline.h1Part2}</em>
          </motion.h1>

          {/* Name badge */}
          <motion.p variants={stagger.item} className="hero-name">
            {personal.name} <span className="hero-location">· {personal.location}</span>
          </motion.p>

          {/* Subhead */}
          <motion.p variants={stagger.item} className="hero-subhead">
            {headline.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="hero-cta">
            <button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
              aria-label="View selected projects"
            >
              View selected work <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <a
              className="btn-secondary"
              href={personal.resume}
              download
              aria-label="Download résumé as PDF"
            >
              <Download size={15} aria-hidden="true" /> Download résumé
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={stagger.item} className="hero-social">
            <a href={personal.github} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
              <Github size={16} /> <span>GitHub</span>
            </a>
            <span className="hero-social-sep" aria-hidden="true" />
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <Linkedin size={16} /> <span>LinkedIn</span>
            </a>
            <span className="hero-social-sep" aria-hidden="true" />
            <a href={`mailto:${personal.email}`} className="hero-social-link" aria-label="Email">
              <Mail size={16} /> <span>Email</span>
            </a>
          </motion.div>

          {/* Status badge */}
          <motion.div variants={stagger.item} className="hero-status" role="status">
            <span className="hero-status-dot" aria-hidden="true" />
            {headline.status}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="hero-fade-bottom" aria-hidden="true" />
    </section>
  );
}
