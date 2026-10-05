import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import Nav          from './components/Nav';
import Hero         from './sections/Hero';
import Impact       from './sections/Impact';
import About        from './sections/About';
import Experience   from './sections/Experience';
import Projects     from './sections/Projects';
import Skills       from './sections/Skills';
import Achievements from './sections/Achievements';
import Education    from './sections/Education';
import Contact      from './sections/Contact';
import Footer       from './sections/Footer';

function App() {
  return (
    <>
      {/* ── Skip to main content (accessibility) ─── */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* ── Navigation ───────────────────────────── */}
      <Nav />

      {/* ── Main content ─────────────────────────── */}
      <main id="main-content" tabIndex={-1}>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Impact numbers */}
        <Impact />

        {/* 3. About */}
        <About />

        {/* 4. Experience */}
        <Experience />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Skills */}
        <Skills />

        {/* 7. Achievements */}
        <Achievements />

        {/* 8. Education + Certifications */}
        <Education />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* ── Footer ───────────────────────────────── */}
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
