import React from "react";
import "../styles/AboutSection.css";
import SecHead from "./SecHead";

const PILLARS = [
  ["/01", "Infrastructure & Security", "Agent-execution runtimes with containerised task runners and layered security."],
  ["/02", "Observability", "Prometheus / Grafana / Jaeger with timeouts, retries, circuit breakers."],
  ["/03", "Memory Systems", "Tag-based memory layers with bounded graph retrieval and deterministic pack assembly."],
  ["/04", "Research", "Whitepapers on tag-graph memory retrieval and explainability."],
];

const AboutSection = () => {
  return (
    <section id="about" className="sec3d about3d">
      <SecHead num="01" title="ABOUT" kicker="Who, what, why" />

      <div className="about3d-grid">
        <div className="about3d-lead">
          <p>
            I'm a <b>full-stack infrastructure engineer</b> who designs and ships
            <b> secure, observable services</b> and the UIs that run them.
          </p>
          <p className="about3d-sub">
            Comfortable across Go / Java / Python and TypeScript / React.
            REST · gRPC · Mongo · Redis · MinIO · Dockerised execution.
            Bias for clear specs, deterministic behaviour, reproducible results.
          </p>
        </div>

        <div className="about3d-pillars">
          {PILLARS.map(([n, t, d]) => (
            <div className="pillar" key={n}>
              <div className="pillar-num mono">{n}</div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about3d-edu">
        <div className="edu-label mono">EDUCATION /</div>
        <div className="edu-body">
          <h3>George Brown College</h3>
          <div className="edu-row">
            <span>Computer Programming &amp; Analysis (T177)</span>
            <span className="mono">3-YEAR · CO-OP · CAPSTONE</span>
          </div>
          <p className="edu-desc">
            Algorithms, data structures, software engineering, systems analysis.
            Co-op work terms and capstone demonstrating learned concepts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
