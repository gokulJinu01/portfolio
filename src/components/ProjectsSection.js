import React, { useRef, useEffect } from "react";
import "../styles/ProjectsSection.css";
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "RailTech AgentPod Platform",
    desc:
      "Secure agent-execution runtime across microservices with containerized task runners and signed HTTP callbacks. Features tag-based memory layer with bounded graph retrieval, deterministic pack assembly, and comprehensive security engine with YAML rulepacks.",
    overview: "Enterprise-grade platform for secure AI agent execution with advanced memory management and security controls.",
    features: [
      "Multi-language microservices architecture",
      "Containerized task execution with security isolation",
      "Tag-based memory system with graph retrieval",
      "YAML-based security rulepacks",
      "Comprehensive audit trails and monitoring"
    ],
    tech: ["Go", "Java", "Spring Boot", "Docker", "MongoDB", "MinIO", "Next.js"],
    live: "https://www.railtech.io/",
  },
  {
    title: "Memory Engine (MME)",
    desc:
      "Core + HTTP data model for tags/edges/blocks with bounded BFS/beam search, stable tie-breakers, budget-aware selection, and diversity guard using ID/hash + Jaccard or submodular gain algorithms.",
    overview: "High-performance memory management system optimized for AI agent context retrieval and storage.",
    features: [
      "Bounded BFS and beam search algorithms",
      "Budget-aware memory selection",
      "Diversity guard with Jaccard similarity",
      "Submodular gain optimization",
      "HTTP API for seamless integration"
    ],
    tech: ["Go", "Graph Algorithms", "Memory Management", "HTTP APIs"],
    live: null,
  },
  {
    title: "Hire-a-Chef (Capstone Project)",
    desc:
      "A marketplace web app where customers can discover, compare, and book private chefs for home events. Features chef profiles, menu browsing, availability booking, messaging, and review system with role-based authentication.",
    overview: "Full-stack marketplace platform connecting customers with private chefs for home dining experiences.",
    features: [
      "Chef profile creation and management",
      "Advanced search and filtering system",
      "Real-time booking and availability",
      "In-app messaging between users",
      "Review and rating system"
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "JWT Auth", "Docker"],
    live: null,
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
              <div className="project-left">
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
              </div>
              <div className="project-right">
                <p className="project-overview">{p.overview}</p>
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {p.features.map((feature, fi) => <li key={fi}>{feature}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
