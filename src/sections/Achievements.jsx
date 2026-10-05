import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import Reveal from '../components/Reveal';
import { achievements, activities } from '../data/portfolio';

const iconMap = { quantum: Trophy, sih: Medal, amazon: Star };

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section" aria-labelledby="ach-heading">
      <div className="container">
        <Reveal>
          <p className="section-kicker">05 / Signals</p>
          <h2 id="ach-heading" className="section-heading">
            Beyond the<br />
            <em className="serif">résumé.</em>
          </h2>
        </Reveal>

        {/* Achievements grid */}
        <div className="ach-grid" role="list">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.id] ?? Trophy;
            return (
              <Reveal key={ach.id} delay={i * 0.1}>
                <article
                  className={`ach-card${ach.highlight ? ' ach-card-highlight' : ''}`}
                  role="listitem"
                  aria-label={ach.title}
                >
                  {ach.highlight && (
                    <div className="ach-highlight-bar" aria-hidden="true" />
                  )}
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
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Leadership & Activities */}
        <Reveal delay={0.15}>
          <div className="activities-section" aria-label="Leadership and activities">
            <p className="section-kicker" style={{ marginBottom: '28px' }}>Leadership & Activities</p>
            <div className="activities-grid">
              {activities.map(a => (
                <div key={a.title} className="activity-card">
                  <h3 className="activity-title">{a.title}</h3>
                  <p className="activity-desc">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
