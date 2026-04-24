import React, { useEffect, useRef, useState } from "react";
import "../styles/HeroSection.css";

const TWEAKS = {
  depth: 18,
  parallax: 18,
  faceColor: "#f3f5f8",
  sideColor: "#35577D",
  shadowColor: "#0d1a28",
  accentA: "#6aa9ff",
  accentB: "#ff9566",
};

function parseHex(h) {
  if (h.startsWith("rgb")) {
    const m = h.match(/\d+/g).map(Number);
    return [m[0], m[1], m[2]];
  }
  const s = h.replace("#", "");
  return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
}
function mixColor(a, b, t) {
  const pa = parseHex(a), pb = parseHex(b);
  const r = Math.round(pa[0] + (pb[0] - pa[0]) * t);
  const g = Math.round(pa[1] + (pb[1] - pa[1]) * t);
  const bl = Math.round(pa[2] + (pb[2] - pa[2]) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

function Extruded3DLetter({ ch, depth, face, side, shadow, style }) {
  const layers = [];
  for (let i = 0; i < depth; i++) {
    const t = i / Math.max(1, depth - 1);
    const c = i === 0 ? face : mixColor(side, shadow, t);
    layers.push(
      <span
        key={i}
        className="ex3d-layer"
        aria-hidden={i !== 0}
        style={{
          transform: `translateZ(${-i}px)`,
          color: c,
          WebkitTextStroke: i === 0 ? "0.5px rgba(0,0,0,0.25)" : "none",
        }}
      >
        {ch}
      </span>
    );
  }
  return (
    <span className="ex3d-letter" style={style}>
      <span className="ex3d-stack">{layers}</span>
    </span>
  );
}

const HeroSection = () => {
  const stageRef = useRef(null);
  const nameRef = useRef(null);
  const [rot, setRot] = useState({ x: -8, y: -14 });
  const [idle, setIdle] = useState(true);
  const mouseRef = useRef({ x: -14, y: -8 });
  const autoRef = useRef(0);
  const rafRef = useRef(0);

  // parallax + idle sway
  useEffect(() => {
    const onMove = (e) => {
      const el = stageRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      mouseRef.current = {
        x: -ny * TWEAKS.parallax,
        y: nx * TWEAKS.parallax * 1.2,
      };
      setIdle(false);
    };
    const onLeave = () => setIdle(true);
    window.addEventListener("mousemove", onMove);
    const el = stageRef.current;
    if (el) el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (el) el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    let last = performance.now();
    const loop = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      autoRef.current += dt;
      const amp = idle ? 1 : 0.35;
      const autoX = Math.sin(autoRef.current * 0.55) * 5 * amp - (idle ? 6 : 0);
      const autoY = Math.cos(autoRef.current * 0.4) * 9 * amp - (idle ? 8 : 0);
      const targetX = idle ? autoX : mouseRef.current.x + autoX;
      const targetY = idle ? autoY : mouseRef.current.y + autoY;
      setRot((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.08,
        y: prev.y + (targetY - prev.y) * 0.08,
      }));
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [idle]);

  // magnetic repel on letters
  useEffect(() => {
    const root = nameRef.current;
    if (!root) return;
    let raf = 0;
    let mx = -9999, my = -9999;
    const apply = () => {
      raf = 0;
      const letters = root.querySelectorAll(".ex3d-letter");
      const radius = 180;
      const strength = 42;
      letters.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = cx - mx;
        const dy = cy - my;
        const dist = Math.hypot(dx, dy);
        if (dist < radius && dist > 0.001) {
          const f = 1 - dist / radius;
          const falloff = f * f;
          const nx = dx / dist;
          const ny = dy / dist;
          el.style.setProperty("--mag-x", `${nx * strength * falloff}px`);
          el.style.setProperty("--mag-y", `${ny * strength * falloff * 0.7}px`);
          el.style.setProperty("--mag-z", `${falloff * 30}px`);
          el.style.setProperty("--mag-r", `${nx * falloff * 8}deg`);
        } else {
          el.style.setProperty("--mag-x", "0px");
          el.style.setProperty("--mag-y", "0px");
          el.style.setProperty("--mag-z", "0px");
          el.style.setProperty("--mag-r", "0deg");
        }
      });
    };
    const onMove = (e) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(apply); };
    const onLeave = () => { mx = -9999; my = -9999; if (!raf) raf = requestAnimationFrame(apply); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const fullName = [..."GOKUL".split(""), " ", ..."JINU".split("")];

  return (
    <section id="home" className="hero3d" ref={stageRef}>
      <div className="hero3d-bg">
        <div className="hero3d-grid" />
        <div className="hero3d-glow" style={{ "--a": TWEAKS.accentA, "--b": TWEAKS.accentB }} />
        <div className="hero3d-scanlines" />
      </div>

      <div className="hero3d-chrome">
        <div className="chrome-item">
          <span className="chrome-dot" />
          AVAILABLE · FULLSTACK · TORONTO
        </div>
        <div className="chrome-item mono">
          <span className="chrome-k">SYS</span> render.engine/3d · <span className="chrome-k">VER</span> 04.2026
        </div>
      </div>

      <div
        className="hero3d-scene"
        style={{
          "--rx": `${rot.x}deg`,
          "--ry": `${rot.y}deg`,
          "--depth": `${TWEAKS.depth}px`,
        }}
      >
        <div className="hero3d-name" ref={nameRef}>
          <h1 className="hero3d-line">
            {fullName.map((c, i) =>
              c === " " ? (
                <span key={"sp" + i} className="hero3d-gap">&nbsp;</span>
              ) : (
                <Extruded3DLetter
                  key={"n" + i}
                  ch={c}
                  depth={TWEAKS.depth}
                  face={TWEAKS.faceColor}
                  side={TWEAKS.sideColor}
                  shadow={TWEAKS.shadowColor}
                  style={{ animationDelay: `${i * 90}ms` }}
                />
              )
            )}
          </h1>
        </div>
        <div className="hero3d-floor" />
      </div>

      <div className="hero3d-meta">
        <div className="meta-block">
          <div className="meta-k">ROLE</div>
          <div className="meta-v">Fullstack · Infra · Security</div>
        </div>
        <div className="meta-sep" />
        <div className="meta-block">
          <div className="meta-k">STACK</div>
          <div className="meta-v">Go · TS · Spring · Docker</div>
        </div>
        <div className="meta-sep" />
        <div className="meta-block">
          <div className="meta-k">FOCUS</div>
          <div className="meta-v">Agent runtimes, memory engines</div>
        </div>
        <div className="meta-sep" />
        <div className="meta-block">
          <div className="meta-k">STATUS</div>
          <div className="meta-v"><span className="pulse" /> Open to work</div>
        </div>
      </div>

      <div className="hero3d-cta">
        <a href="#contact" className="btn3d btn3d-primary">
          <span className="btn3d-face">GET IN TOUCH</span>
          <span className="btn3d-side" />
        </a>
        <a href="#works" className="btn3d btn3d-ghost">
          <span className="btn3d-face">VIEW WORKS →</span>
          <span className="btn3d-side" />
        </a>
        <a href="/Gokul_Jinu_Resume_BW.pdf" className="btn3d btn3d-ghost" download>
          <span className="btn3d-face">RESUME ↓</span>
          <span className="btn3d-side" />
        </a>
      </div>

      <div className="hero3d-scroll">
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default HeroSection;
