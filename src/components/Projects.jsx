import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    { key: 'all', label: `All (${projectsData.length})` },
    { key: 'ai', label: 'AI & Agents (3)' },
    { key: 'fullstack', label: 'Full-Stack & DB (2)' },
    { key: 'tools', label: 'Security & Tools (2)' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.stack.some((tech) => tech.toLowerCase().includes(q));
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Portfolio & Work</span>
          </div>
          <h2 className="section-title">Selected Engineering Projects</h2>
          <p className="section-subtitle">
            Autonomous multi-agent RAG systems, interactive voice assistants, and secure relational platforms.
          </p>
        </div>

        {/* Filter and Live Search Bar */}
        <div className="projects-control-bar">
          <div className="filter-group">
            {filterOptions.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`filter-tab-btn ${activeFilter === filter.key ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="project-search-wrap">
            <svg
              className="search-icon-svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Filter by keyword (RAG, Gemini, DB...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="project-search-input"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="card-glass project-card">
                <div>
                  <div className="project-top-meta">
                    <span className="project-category-tag">{project.categoryLabel}</span>
                    {project.featured && (
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                        ★ Highlighted
                      </span>
                    )}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tagline">{project.tagline}</div>
                  <p className="project-desc">{project.description}</p>

                  <ul className="project-highlights-list">
                    {project.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="project-stack-wrap">
                    {project.stack.map((tech) => (
                      <span key={tech} className="project-stack-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>No projects match your filter query.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="btn btn-secondary btn-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
