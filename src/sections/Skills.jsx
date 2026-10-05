import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../components/Reveal';
import { skillGroups } from '../data/portfolio';

function SkillGroup({ group, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  return (
    <motion.div
      ref={ref}
      className={`skill-group${group.accent ? ' skill-group-accent' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
    >
      <div className="skill-group-label" aria-label={`${group.label} skills`}>
        {group.label}
        {group.accent && <span className="skill-group-accent-badge">Core</span>}
      </div>
      <ul className="skill-list" role="list">
        {group.skills.map(skill => (
          <li key={skill}>
            <span className={`skill-pill${group.accent ? ' skill-pill-accent' : ''}`}>
              {skill}
            </span>
          </li>
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
                Tools I actually<br />
                <em className="serif">work with.</em>
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
