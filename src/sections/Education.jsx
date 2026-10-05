import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import Reveal from '../components/Reveal';
import { education, certifications } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section education-section" aria-labelledby="edu-heading">
      <div className="container">
        <div className="edu-grid">
          {/* Left */}
          <Reveal>
            <p className="section-kicker">06 / Education</p>
            <h2 id="edu-heading" className="section-heading">
              Computer Science &<br />
              <em className="serif">Business Systems.</em>
            </h2>
          </Reveal>

          {/* Right */}
          <Reveal delay={0.1}>
            <div className="edu-list">
              {education.map((edu, i) => (
                <div key={i} className={`edu-row${edu.current ? ' edu-row-current' : ''}`}>
                  <div className="edu-row-icon" aria-hidden="true">
                    <GraduationCap size={16} />
                  </div>
                  <div className="edu-row-body">
                    <div className="edu-row-top">
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <span className="edu-period">{edu.period}</span>
                    </div>
                    <p className="edu-institution">{edu.institution} · {edu.location}</p>
                    <span className={`edu-score${edu.current ? ' edu-score-highlight' : ''}`}>
                      {edu.score}
                    </span>
                    {edu.current && (
                      <span className="edu-current-badge">In progress</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="certs-block" aria-label="Certifications">
              <p className="certs-heading">
                <Award size={14} aria-hidden="true" />
                Certifications
              </p>
              <ul className="certs-list" role="list">
                {certifications.map(c => (
                  <li key={c.title} className="cert-item">
                    <span className="cert-title">{c.title}</span>
                    <span className="cert-meta">{c.issuer} · {c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
