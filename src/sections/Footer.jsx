import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} Shaik Rihan Basha · Kurnool, India
        </p>
        <div className="footer-links">
          <a href={`mailto:${personal.email}`} className="footer-icon" aria-label="Email">
            <Mail size={15} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer-icon" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="footer-icon" aria-label="GitHub">
            <Github size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
