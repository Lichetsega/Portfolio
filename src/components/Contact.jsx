import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Open for full-time engineering roles, AI agent consulting, and technical collaboration.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Channels */}
          <div className="card-glass contact-card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Direct Channels
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', marginBottom: '1.75rem' }}>
              Feel free to reach out directly via email, message on Telegram, or connect professionally on LinkedIn.
            </p>

            {/* Email Channel Item with Copy Button */}
            <div className="contact-channel-item">
              <div className="channel-left">
                <div className="channel-icon-pill">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="channel-label">Direct Email</div>
                  <div className="channel-value">{personalInfo.email}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`copy-badge-btn ${copied ? 'copied' : ''}`}
                aria-label="Copy Email Address"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Telegram Channel */}
            <a
              href={personalInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
            >
              <div className="channel-left">
                <div className="channel-icon-pill" style={{ color: 'var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.1)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.87 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.46c.537-.196 1.006.128.831.94z"/>
                  </svg>
                </div>
                <div>
                  <div className="channel-label">Telegram</div>
                  <div className="channel-value">{personalInfo.telegramHandle}</div>
                </div>
              </div>

              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Chat →</span>
            </a>

            {/* LinkedIn Channel */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
            >
              <div className="channel-left">
                <div className="channel-icon-pill">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <div className="channel-label">LinkedIn</div>
                  <div className="channel-value">in/{personalInfo.linkedinHandle}</div>
                </div>
              </div>

              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>View →</span>
            </a>

            {/* GitHub Channel */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
            >
              <div className="channel-left">
                <div className="channel-icon-pill">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="channel-label">GitHub</div>
                  <div className="channel-value">{personalInfo.githubHandle} (29 Repos)</div>
                </div>
              </div>

              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>View →</span>
            </a>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="card-glass contact-card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Send a Direct Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', marginBottom: '1.75rem' }}>
              Have a role, project, or technical question? Leave a note and I'll get back to you promptly.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="e.g. Alex Chen"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. alex@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell me about your team, project requirements, or opportunity..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <span>Send Message</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {submitted && (
                <div className="form-alert form-alert-success">
                  ✓ Thank you! Your message has been simulated successfully. Liche will reach out to your email address soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
