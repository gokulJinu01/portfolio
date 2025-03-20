import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode
  const [isRotating, setIsRotating] = useState(false); // State for rotation animation
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true); // Start with navbar visible
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply the theme class to body when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Hide when scrolling down, show when scrolling up
      const shouldBeVisible = prevScrollPos > currentScrollPos || currentScrollPos < 50;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(shouldBeVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleTheme = () => {
    if (isRotating) return; // Prevent toggling during rotation
    setIsRotating(true); // Start rotation animation
    
    // Simply toggle the theme
    setTimeout(() => {
      setIsDarkMode(!isDarkMode);
      setIsRotating(false); // End rotation animation
    }, 500);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'} ${isDarkMode ? 'dark-theme' : ''}`}>
      <div className="nav-logo">
        <a href="#home">GJ</a>
      </div>
      
      <div className="nav-content">
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
        
        <div className="theme-toggle">
          <span
            onClick={toggleTheme}
            className={`theme-icon ${isRotating ? "rotating" : ""}`}
            style={{ cursor: "pointer" }}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
