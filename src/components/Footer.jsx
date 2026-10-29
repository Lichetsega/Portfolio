import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
            <span className="monogram-badge" style={{ width: '28px', height: '28px', fontSize: '0.75rem' }}>LT</span>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{personalInfo.name}</span>
          </div>
          <div className="footer-copy">
            B.Sc. Software Engineering Candidate • Jimma University • Ethiopia
          </div>
        </div>

        <div className="footer-links-group">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href={personalInfo.telegram} target="_blank" rel="noopener noreferrer" className="footer-link">
            Telegram
          </a>
          <a href={personalInfo.resumePath} target="_blank" rel="noopener noreferrer" download className="footer-link">
            Resume (PDF)
          </a>
          <button
            onClick={scrollToTop}
            className="btn-ghost btn-sm"
            style={{ cursor: 'pointer', border: 'none', color: 'var(--accent-primary)', fontWeight: 600 }}
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
