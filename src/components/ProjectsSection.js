import React, { useState } from "react";
import "../styles/ProjectsSection.css";
import SecHead from "./SecHead";
import railtechShot from "../images/railtech.png";
import mmeShot from "../images/mme.png";

const PROJECTS = [
  {
    n: "/01",
    title: "RailTech AgentPod Platform",
    blurb:
      "Secure agent-execution runtime across microservices. Containerized task runners with signed HTTP callbacks, tag-based memory, YAML rulepacks.",
    tech: ["Go", "Java · Spring", "Next.js", "Docker", "MongoDB", "MinIO"],
    live: "https://www.railtech.io/",
    host: "railtech.io",
    shot: railtechShot,
    year: "2025",
  },
  {
    n: "/02",
    title: "MME · Tag-Graph Memory Engine",
    blurb:
      "Bounded tag-graph memory for AI agents. Saves what the agent learns, retrieves only what fits the budget, promotes memories that keep getting used — no embeddings, no retraining, every result explainable.",
    tech: ["Python · FastAPI", "MCP", "LangChain", "Graph Retrieval", "Docker"],
    live: "https://mme.railtech.io/",
    host: "mme.railtech.io",
    shot: mmeShot,
    year: "2025",
  },
  {
    n: "/03",
    title: "Hire-a-Chef Marketplace",
    blurb:
      "Two-sided marketplace for booking private chefs. Browse menus, match on cuisine and dietary needs, book and pay in one flow.",
    tech: ["Next.js", "TypeScript", "Stripe", "Postgres", "Tailwind"],
    live: null,
    host: "hire-a-chef",
    shot: null,
    year: "2024",
  },
];

function PreviewPlaceholder({ title }) {
  return (
    <div className="preview-placeholder">
      <div className="pp-grid">
        {Array.from({ length: 48 }).map((_, i) => (
          <span key={i} className="pp-cell" style={{ animationDelay: `${(i % 12) * 0.06}s` }} />
        ))}
      </div>
      <div className="pp-label">
        <div className="mono pp-tag">PREVIEW /</div>
        <div className="pp-title">{title}</div>
        <div className="mono pp-sub">SCREENSHOT COMING SOON</div>
      </div>
    </div>
  );
}

function ProjectPreview({ p, idx }) {
  return (
    <div className="works3d-preview" key={idx}>
      <div className="preview-chrome">
        <span className="chrome-tl tl1" />
        <span className="chrome-tl tl2" />
        <span className="chrome-tl tl3" />
        <span className="mono preview-addr">{p.host}</span>
        {p.live && (
          <a href={p.live} target="_blank" rel="noreferrer" className="mono preview-open">
            OPEN ↗
          </a>
        )}
      </div>
      <div className="preview-body">
        {p.shot ? (
          p.live ? (
            <a href={p.live} target="_blank" rel="noreferrer" className="preview-shot-link">
              <img className="preview-shot" src={p.shot} alt={p.title} loading="lazy" />
              <span className="preview-shot-overlay">
                <span className="mono">VISIT {p.host.toUpperCase()} ↗</span>
              </span>
            </a>
          ) : (
            <img className="preview-shot" src={p.shot} alt={p.title} loading="lazy" />
          )
        ) : (
          <PreviewPlaceholder title={p.title} />
        )}
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  const [active, setActive] = useState(0);
  const p = PROJECTS[active];

  return (
    <section id="works" className="sec3d works3d">
      <SecHead num="02" title="WORKS" kicker="Selected projects" />

      <div className="works3d-shell">
        <ul className="works3d-list">
          {PROJECTS.map((pr, i) => (
            <li
              key={pr.n}
              className={"works3d-row" + (i === active ? " is-active" : "")}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span className="works3d-n mono">{pr.n}</span>
              <span className="works3d-t">{pr.title}</span>
              <span className="works3d-y mono">{pr.year}</span>
              <span className="works3d-arrow">→</span>
            </li>
          ))}
        </ul>

        <div className="works3d-detail">
          <div className="works3d-card">
            <div className="works3d-card-head">
              <div>
                <div className="mono works3d-card-n">{p.n} · {p.year}</div>
                <h3>{p.title}</h3>
              </div>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn3d btn3d-ghost btn3d-sm"
                >
                  <span className="btn3d-face">VISIT ↗</span>
                  <span className="btn3d-side" />
                </a>
              )}
            </div>
            <p className="works3d-blurb">{p.blurb}</p>
            <ProjectPreview p={p} idx={active} />
            <div className="works3d-cols works3d-cols-tight">
              <ul className="works3d-tags">
                {p.tech.map((t, i) => (
                  <li key={i} className="works3d-tag">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
