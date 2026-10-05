import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X, Download } from 'lucide-react';
import { personal, navItems } from '../data/portfolio';

export default function Nav() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection observer to track active section
  useEffect(() => {
    const ids = navItems.map(n => n.id);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <header
        className={`nav-root${scrolled ? ' nav-scrolled' : ''}`}
        role="banner"
      >
        <div className="container nav-inner">
          {/* Brand */}
          <button
            className="nav-brand"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            Rihan<span className="nav-brand-dot">.</span>
          </button>

          {/* Desktop links */}
          <nav aria-label="Primary navigation">
            <ul className="nav-links" role="list">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    className={`nav-link${active === item.id ? ' nav-link-active' : ''}`}
                    onClick={() => scrollTo(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="nav-actions">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="nav-icon-link"
              aria-label="GitHub profile"
            >
              <Github size={17} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="nav-icon-link"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={personal.resume}
              download
              className="nav-resume-btn"
              aria-label="Download resume PDF"
            >
              <Download size={14} />
              <span>Résumé</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav>
              <ul role="list">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      className={`mobile-link${active === item.id ? ' mobile-link-active' : ''}`}
                      onClick={() => scrollTo(item.id)}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="mobile-menu-footer">
              <a href={personal.github} target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={personal.resume} download className="nav-resume-btn">
                <Download size={13} /><span>Résumé</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
