import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from '../components/Reveal';
import { skillGroups } from '../data/portfolio';

const EASE = [0.16, 1, 0.3, 1];

function SkillGroup({ group, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  return (
    <motion.div
      ref={ref}
      className={`skill-group${group.accent ? ' skill-group-accent' : ''}`}
      initial={{ opacity: 0, x: 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.1 }}
    >
      <div className="skill-group-label">
        {group.label}
        {group.accent && <span className="skill-group-accent-badge">Core</span>}
      </div>
      <ul className="skill-list" role="list">
        {group.skills.map((skill, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, ease: EASE, delay: index * 0.1 + i * 0.04 }}
          >
            <span className={`skill-pill${group.accent ? ' skill-pill-accent' : ''}`}>
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section dark-section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="skills-layout">
          <Reveal>
            <div className="skills-left">
              <p className="section-kicker light">04 / Toolkit</p>
              <h2 id="skills-heading" className="section-heading light">
                Tools I actually<br /><em className="serif">work with.</em>
              </h2>
              <p className="skills-note">
                Programming, AI tooling, workflow automation and the platforms I use across
                projects and internships. No padding.
              </p>
            </div>
          </Reveal>
          <div className="skills-right">
            {skillGroups.map((group, i) => (
              <SkillGroup key={group.label} group={group} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
