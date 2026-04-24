import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const ITEMS = [
  ["#home", "HOME"],
  ["#about", "ABOUT"],
  ["#works", "WORKS"],
  ["#skills", "SKILLS"],
  ["#contact", "CONTACT"],
];

const Navbar = () => {
  const [hash, setHash] = useState(
    typeof window !== "undefined" && window.location.hash ? window.location.hash : "#home"
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const pick = (h) => { setHash(h); setOpen(false); };

  return (
    <nav className="nav3d" aria-label="Primary">
      <a href="#home" className="nav3d-logo" onClick={() => pick("#home")}>
        <span className="nav3d-logo-face">GJ</span>
        <span className="nav3d-logo-side" />
      </a>
      <div className={"nav3d-items" + (open ? " is-open" : "")}>
        {ITEMS.map(([h, l]) => (
          <a
            key={h}
            href={h}
            className={"nav3d-item" + (hash === h ? " is-active" : "")}
            onClick={() => pick(h)}
          >
            {l}
          </a>
        ))}
      </div>
      <div className="nav3d-right mono">
        <span className="nav3d-dot" /> 43.65°N · 79.38°W
      </div>
      <button
        className="nav3d-burger"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
