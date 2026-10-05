import React from 'react';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import Reveal from '../components/Reveal';
import { personal, about } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Left — heading */}
          <Reveal>
            <p className="section-kicker">01 / About</p>
            <h2 id="about-heading" className="section-heading">
              Technical thinking.<br />
              <em className="serif">Business lens.</em>
            </h2>

            <div className="about-meta">
              <div className="about-meta-item">
                <MapPin size={14} aria-hidden="true" />
                <span>{personal.location}</span>
              </div>
              <div className="about-meta-item">
                <GraduationCap size={14} aria-hidden="true" />
                <span>Final-year B.Tech · CGPA 8.23/10</span>
              </div>
              <div className="about-meta-item">
                <Briefcase size={14} aria-hidden="true" />
                <span>2 Internships · AI/ML + E-Commerce</span>
              </div>
            </div>
          </Reveal>

          {/* Right — copy */}
          <Reveal delay={0.1}>
            <div className="about-copy">
              <p>{about.intro}</p>
              <p>{about.body}</p>
              <p>{about.close}</p>
            </div>

            {/* Strengths tags */}
            <div className="about-tags" aria-label="Core strengths">
              {['AI / ML', 'RAG Pipelines', 'n8n Automation', 'Data Analytics', 'Power BI', 'Python · SQL'].map(tag => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
