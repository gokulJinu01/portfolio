import React, { useRef, useEffect } from "react";
import "../styles/ProjectsSection.css";
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "RailTech",
    desc:
      "AgentPod platform for safe execution, verification, and monetization of autonomous agents. Guardian MSE brings modular security. Pillars: security, speed, transparency.",
    tech: ["Security", "Agents", "Edge"],
    live: "https://www.railtech.io/",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.project-card');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });
    cards.forEach(c => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Works</h2>
          <div className="section-underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article className="project-card" key={i}>
              <div className="project-sheen" />
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <ul className="project-tags">
                {p.tech.map((t, ti) => <li key={ti} className="tag">{t}</li>)}
              </ul>
              <div className="project-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link"><FaExternalLinkAlt/> Website</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
