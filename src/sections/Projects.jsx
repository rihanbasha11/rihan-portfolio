import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ExternalLink, Workflow, Database, BarChart3 } from 'lucide-react';
import Reveal from '../components/Reveal';
import { projects } from '../data/portfolio';

const EASE = [0.16, 1, 0.3, 1];
const iconMap = {
  'inventory-agent':    Workflow,
  'rag-pipeline':       Database,
  'analytics-dashboard':BarChart3,
};

function FlowViz({ steps }) {
  return (
    <div className="flow-viz" aria-label="Project workflow" role="img">
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <span className="flow-step">{step}</span>
          {i < steps.length - 1 && (
            <ArrowRight size={11} className="flow-arrow" aria-hidden="true" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function ProjectCard({ project, index, featured }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[project.id] ?? Workflow;

  return (
    <Reveal delay={index * 0.1} y={28}>
      <motion.article
        className={`project-card${featured ? ' project-card-featured' : ''}`}
        aria-label={project.title}
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        {/* Top row */}
        <div className="project-card-top">
          <div className="project-num-icon">
            <span className="project-num">{project.num}</span>
            <div className="project-icon-wrap" aria-hidden="true">
              <Icon size={18} />
            </div>
          </div>
          <span className="project-type-badge">{project.type}</span>
        </div>

        {/* Title */}
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>

        {/* Flow */}
        <FlowViz steps={project.flow} />

        {/* Description */}
        <p className="project-desc">{project.description}</p>

        {/* Team note */}
        {project.isTeamProject && (
          <div className="project-team-note" role="note">
            <span className="exp-team-badge">TEAM PROJECT</span>
            <span>Individual contribution described below</span>
          </div>
        )}

        {/* Expandable contribution */}
        <div className="project-contribution">
          <button
            className="project-contrib-btn"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-controls={`proj-detail-${project.id}`}
          >
            <span>My contribution</span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.22, ease: EASE }}
            >
              <ChevronDown size={15} aria-hidden="true" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={`proj-detail-${project.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{ overflow: 'hidden' }}
              >
                <p className="project-contrib-text">{project.myContribution}</p>
                <ul className="project-caps" role="list">
                  {project.capabilities.map(c => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="project-footer">
          <div className="project-stack" aria-label="Technologies">
            {project.stack.map(s => (
              <span key={s} className="tag tag-light">{s}</span>
            ))}
          </div>
          {project.projectLink !== '[ADD PROJECT LINK]' ? (
            <a href={project.projectLink} target="_blank" rel="noreferrer"
               className="project-link" aria-label={`View ${project.title}`}>
              <ExternalLink size={14} />
            </a>
          ) : (
            <span className="project-link-placeholder" title="Link coming soon">
              <ExternalLink size={14} />
            </span>
          )}
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const rest     = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="projects-header">
          <Reveal>
            <p className="section-kicker">03 / Selected Work</p>
            <h2 id="projects-heading" className="section-heading">
              Proof, not<br /><em className="serif">promises.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="projects-intro">
              Three projects across AI agents, RAG and analytics — built during internships and independent work.
            </p>
          </Reveal>
        </div>

        <div className="projects-grid-featured">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} featured />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="projects-grid-rest">
            {rest.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} featured={false} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
