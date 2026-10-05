import React from 'react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { personal } from '../data/portfolio';

const contactLinks = [
  {
    label: 'Email me',
    sublabel: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    sublabel: 'linkedin.com/in/shaik-rihan-basha-9341b42b6',
    href: personal.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    sublabel: 'github.com/rihanbasha11',
    href: personal.github,
    icon: Github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          {/* Left */}
          <Reveal>
            <p className="section-kicker light">07 / Contact</p>
            <h2 id="contact-heading" className="contact-heading">
              Let's build something<br />
              <em className="serif">useful.</em>
            </h2>
            <p className="contact-subtext">
              Open to software engineering, AI/ML, GenAI/RAG, automation, data analytics
              internships and entry-level opportunities.
            </p>
          </Reveal>

          {/* Right — links */}
          <Reveal delay={0.12}>
            <div className="contact-links" role="list">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className="contact-link"
                    role="listitem"
                    aria-label={`${link.label}: ${link.sublabel}`}
                  >
                    <div className="contact-link-left">
                      <span className="contact-link-icon" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      <div>
                        <span className="contact-link-label">{link.label}</span>
                        <span className="contact-link-sub">{link.sublabel}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="contact-link-arrow" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
