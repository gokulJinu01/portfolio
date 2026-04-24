import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer3d">
      <div className="footer3d-top">
        <div className="footer3d-big">GOKUL JINU</div>
        <div className="footer3d-cta">
          <div className="mono footer3d-cta-label">SAY HI /</div>
          <a href="mailto:gokuljinu12@gmail.com" className="footer3d-cta-link">
            gokuljinu12@gmail.com
          </a>
        </div>
      </div>
      <div className="footer3d-bottom mono">
        <span>© {year} · Gokul Jinu · Toronto</span>
        <span>DESIGNED · BUILT · ITERATED IN THE BROWSER</span>
      </div>
    </footer>
  );
};

export default Footer;
