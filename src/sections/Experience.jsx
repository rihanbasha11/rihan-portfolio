import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal';
import { experience } from '../data/portfolio';

function ExpCard({ exp, index }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <Reveal delay={index * 0.1}>
      <article className="exp-card" aria-label={`${exp.role} at ${exp.org}`}>
        {/* Card header */}
        <div className="exp-card-header">
          <div className="exp-card-meta">
            <span className="exp-date">{exp.dates}</span>
            <span className="exp-type-badge">{exp.type}</span>
          </div>
          <div className="exp-card-title">
            <h3 className="exp-role">{exp.role}</h3>
            <p className="exp-org">
              {exp.org} <span className="exp-location">· {exp.location}</span>
            </p>
          </div>
        </div>

        {/* Context */}
        <p className="exp-context">{exp.context}</p>

        {/* Team note for Infosys */}
        {exp.teamNote && (
          <div className="exp-team-note" role="note">
            <span className="exp-team-badge">TEAM PROJECT</span>
            <p>{exp.teamNote}</p>
          </div>
        )}

        {/* My contribution */}
        <div className="exp-contribution">
          <button
            className="exp-contribution-toggle"
            onClick={() => setExpanded(e => !e)}
            aria-expanded={expanded}
            aria-controls={`contrib-${exp.id}`}
          >
            <span className="exp-contrib-label">
              {exp.teamNote ? 'My Contribution — RAG Pipeline' : 'Key Contributions'}
            </span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={16} aria-hidden="true" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={`contrib-${exp.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <ul className="exp-contrib-list" role="list">
                  {exp.myContribution.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Metrics */}
        {exp.metrics && exp.metrics.length > 0 && (
          <div className="exp-metrics" aria-label="Key metrics">
            {exp.metrics.map(m => (
              <div key={m.label} className="exp-metric">
                <span className="exp-metric-value">{m.value}</span>
                <span className="exp-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Stack */}
        <div className="exp-stack" aria-label="Technologies used">
          {exp.stack.map(s => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience-section dark-section" aria-labelledby="exp-heading">
      <div className="container">
        <Reveal>
          <p className="section-kicker light">02 / Experience</p>
          <h2 id="exp-heading" className="section-heading light">
            Where I've applied<br />
            <em className="serif">what I know.</em>
          </h2>
        </Reveal>

        <div className="exp-list">
          {experience.map((exp, i) => (
            <ExpCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
