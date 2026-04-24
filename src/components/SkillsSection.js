import React from "react";
import "../styles/SkillsSection.css";
import SecHead from "./SecHead";

const CATS = [
  {
    n: "/A",
    label: "LANGUAGES · FRAMEWORKS",
    items: ["Go", "Java · Spring", "TypeScript", "Python · FastAPI", "React · Next.js"],
  },
  {
    n: "/B",
    label: "INFRASTRUCTURE · DATA",
    items: ["Docker", "MongoDB", "Redis", "MinIO · S3", "gRPC"],
  },
  {
    n: "/C",
    label: "OBSERVABILITY · SECURITY",
    items: ["Prometheus", "Grafana", "Jaeger", "TLS · mTLS", "JWT · Auth"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="sec3d skills3d">
      <SecHead num="03" title="SKILLS" kicker="What I reach for" />

      <div className="skills3d-grid">
        {CATS.map((c) => (
          <div className="skills3d-cat" key={c.n}>
            <div className="skills3d-cat-head">
              <span className="mono skills3d-n">{c.n}</span>
              <span className="mono skills3d-label">{c.label}</span>
            </div>
            <ul>
              {c.items.map((i) => (
                <li key={i} className="skill3d-chip">
                  <span className="chip-face">{i}</span>
                  <span className="chip-side" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
