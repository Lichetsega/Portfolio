import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Career & Education</span>
          </div>
          <h2 className="section-title">Experience & Academic Background</h2>
          <p className="section-subtitle">
            Hands-on AI pipeline research, full-stack systems development, and rigorous software engineering education.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="card-glass exp-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>
                </div>

                <div className="exp-meta-badge">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', marginBottom: '0.75rem' }}>
                {exp.description}
              </p>

              <ul className="exp-highlights">
                {exp.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
