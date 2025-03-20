import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">&copy; {new Date().getFullYear()} Gokul Jinu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
