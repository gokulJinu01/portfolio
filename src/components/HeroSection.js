import React, { useEffect, useRef } from "react";
import "../styles/HeroSection.css";
// glaze removed
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const letters = lettersRef.current.filter(letter => letter !== null);
    
    if (letters.length === 0) return; // Guard against empty refs
    
    const animateLettersWithShadow = () => {
      letters.forEach((letter, index) => {
        setTimeout(() => {
          if (letter && letter.classList) {
            letter.classList.add("shake");
            setTimeout(() => {
              letter.classList.remove("shake");
            }, 150);
          }
        }, index * 300);
      });
    };

    const interval = setInterval(animateLettersWithShadow, 5000);

    // Initial animation
    animateLettersWithShadow();

    return () => {
      clearInterval(interval);
      letters.forEach((letter) => {
        if (letter && letter.classList) {
          letter.classList.remove("shake");
        }
      });
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          {/* Desktop View (will be hidden on mobile) */}
          <div className="desktop-title-container">
            <h1 className="title">
              <span style={{ whiteSpace: "nowrap" }}>
                {["G", "O", "K", "U", "L"].map((letter, i) => (
                  <span 
                    key={i} 
                    className="animate-letter three-d-letter" 
                    ref={(el) => lettersRef.current[i] = el}
                  >
                    {letter}
                  </span>
                ))}
                <span className="hero-face">^-_-^</span>
              </span>
            </h1>

            <h1 className="title">
              <span style={{ whiteSpace: "nowrap" }}>
                {["J", "I", "N", "U"].map((letter, i) => (
                  <span 
                    key={i + 5} 
                    className="animate-letter three-d-letter" 
                    ref={(el) => lettersRef.current[i + 5] = el}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </h1>
          </div>
          
          {/* Mobile View (will be hidden on desktop) */}
          <div className="mobile-title-container">
            <h1 className="title">
              <span style={{ whiteSpace: "nowrap" }}>
                {["G", "O", "K", "U", "L"].map((letter, i) => (
                  <span 
                    key={`mobile-${i}`} 
                    className="animate-letter three-d-letter" 
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </h1>
            
            <h1 className="title hero-face-container">
              <span className="hero-face mobile-face">^-_-^</span>
            </h1>

            <h1 className="title">
              <span style={{ whiteSpace: "nowrap" }}>
                {["J", "I", "N", "U"].map((letter, i) => (
                  <span 
                    key={`mobile-${i + 5}`} 
                    className="animate-letter three-d-letter" 
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </h1>
          </div>
          
          <div className="hero-subtitle">
            <p className="subtitle">
              <span className="hero-highlight">Fullstack Developer</span> & Computer Science Student
            </p>
            <p className="subtitle">
              <span className="hero-highlight">Passionate about</span> crafting fullstack and backend solutions
            </p>
          </div>
          
          <div className="hero-cta">
            <a href="#contact" className="btn primary-btn">Contact Me</a>
          </div>
        </div>
      </div>
      
      <div className="social-links-vertical">
        <a href="https://github.com/gokulJinu01" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gokul-jinu-627695223/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/gokul_jinu/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
