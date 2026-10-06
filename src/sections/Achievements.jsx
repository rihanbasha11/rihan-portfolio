import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star } from 'lucide-react';
import Reveal from '../components/Reveal';
import { achievements, activities } from '../data/portfolio';

const EASE = [0.16, 1, 0.3, 1];
const iconMap = { quantum: Trophy, sih: Medal, amazon: Star };

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section" aria-labelledby="ach-heading">
      <div className="container">
        <Reveal>
          <p className="section-kicker">05 / Signals</p>
          <h2 id="ach-heading" className="section-heading">
            Beyond the<br /><em className="serif">résumé.</em>
          </h2>
        </Reveal>

        <div className="ach-grid" role="list">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.id] ?? Trophy;
            return (
              <Reveal key={ach.id} delay={i * 0.12} y={24}>
                <motion.article
                  className={`ach-card${ach.highlight ? ' ach-card-highlight' : ''}`}
                  role="listitem"
                  aria-label={ach.title}
                  whileHover={ach.highlight
                    ? { scale: 1.02, transition: { duration: 0.25, ease: EASE } }
                    : { y: -4,      transition: { duration: 0.25, ease: EASE } }
                  }
                >
                  {ach.highlight && <div className="ach-highlight-bar" aria-hidden="true" />}

                  <div className="ach-card-icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>

                  <div className="ach-big-label">
                    <span className="ach-big-value">{ach.label}</span>
                    <span className="ach-big-sub">{ach.sublabel}</span>
                  </div>

                  <h3 className="ach-title">{ach.title}</h3>
                  <span className={`ach-role-badge${ach.highlight ? ' ach-role-badge-highlight' : ''}`}>
                    {ach.role}
                  </span>
                  <p className="ach-desc">{ach.description}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        {/* Leadership */}
        <Reveal delay={0.15}>
          <div className="activities-section" aria-label="Leadership and activities">
            <p className="section-kicker" style={{ marginBottom: '24px' }}>Leadership & Activities</p>
            <div className="activities-grid">
              {activities.map(a => (
                <motion.div
                  key={a.title}
                  className="activity-card"
                  whileHover={{ y: -3, transition: { duration: 0.22, ease: EASE } }}
                >
                  <h3 className="activity-title">{a.title}</h3>
                  <p className="activity-desc">{a.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
