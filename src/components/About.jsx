import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Engineering Story</span>
          </div>
          <h2 className="section-title">Where Intelligence Meets Systems Architecture</h2>
          <p className="section-subtitle">
            Bridging autonomous AI workflows with robust, scalable backends and intuitive user interfaces.
          </p>
        </div>

        <div className="about-grid">
          {/* Who I Am */}
          <div className="card-glass about-card">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Who I Am</span>
            </h3>
            <p>
              I am a Software Engineer and AI Developer based in Ethiopia, completing my B.Sc. in Software Engineering at <strong>Jimma University</strong>. I engineer specialized agentic workflows, multi-agent orchestrations, and high-concurrency backend services that solve concrete, high-impact problems.
            </p>
            <p>
              During my 6-month AI Engineering internship at <strong>INSA (Information Network Security Administration)</strong>, I engineered and scaled production-grade RAG and Agentic RAG pipelines—mastering intent detection, hybrid vector retrieval, and multi-key failover managers.
            </p>
            <p>
              Whether designing full-duplex interactive voice systems with <strong>FastAPI & WebSockets</strong> or structuring normalized database models in <strong>PostgreSQL</strong>, I take extreme ownership over code quality, security, and developer ergonomics.
            </p>
          </div>

          {/* Core Principles */}
          <div className="card-glass about-card">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 14 14"></polyline>
              </svg>
              <span>Core Principles</span>
            </h3>

            <ul className="pillar-list">
              <li className="pillar-item">
                <div className="pillar-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                  </svg>
                </div>
                <div className="pillar-text">
                  <strong>Autonomous Intelligence</strong>
                  <span>Moving beyond static prompts into agentic loops featuring intent detection, dynamic tool execution, and semantic query caching.</span>
                </div>
              </li>

              <li className="pillar-item">
                <div className="pillar-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 17l6-6-6-6M12 19h8" />
                  </svg>
                </div>
                <div className="pillar-text">
                  <strong>Architectural Rigor</strong>
                  <span>Building robust, type-safe backends, relational schema integrity, and security-first implementations (such as SHA-1 k-Anonymity models).</span>
                </div>
              </li>

              <li className="pillar-item">
                <div className="pillar-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="pillar-text">
                  <strong>Clean Engineering & UI</strong>
                  <span>Writing clean, maintainable code with modular components, high performance, and accessible, clutter-free interfaces.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
