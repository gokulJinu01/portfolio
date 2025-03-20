import React, { useEffect, useRef } from "react";
import "../styles/AboutSection.css";
import { FaCode, FaLaptopCode, FaRocket, FaLayerGroup, FaBookReader } from 'react-icons/fa';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const featuresRef = useRef([]);
  
  useEffect(() => {
    const sectionNode = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
        }
      },
      { threshold: 0.2 }
    );
    
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('feature-visible');
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionNode) {
      observer.observe(sectionNode);
    }
    
    featuresRef.current.forEach(feature => {
      if (feature) {
        featuresObserver.observe(feature);
      }
    });
    
    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
      
      featuresRef.current.forEach(feature => {
        if (feature) {
          featuresObserver.unobserve(feature);
        }
      });
    };
  }, []);

  return (
    <section className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <div className="about-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <div className="about-icon-container">
                <FaCode className="about-icon" />
              </div>
              <p>
                I'm a <span className="about-highlight">developer</span> passionate about crafting <span className="about-highlight">fullstack and backend solutions</span> with clean, scalable code. I blend <span className="about-highlight">creativity</span> with <span className="about-highlight">technical skills</span> to build applications that are simple, efficient, and purposeful. For me, it's not just about writing code—it's about <span className="about-highlight">solving real problems</span> and delivering value.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature-item" ref={el => featuresRef.current[0] = el}>
                <FaLaptopCode className="feature-icon" />
                <div className="feature-text">
                  <h4>Technical Expertise</h4>
                  <p>Specializing in <span className="about-highlight">fullstack development</span>, microservices, and secure backend systems</p>
                </div>
              </div>
              
              <div className="feature-item" ref={el => featuresRef.current[1] = el}>
                <FaRocket className="feature-icon" />
                <div className="feature-text">
                  <h4>Problem Solver</h4>
                  <p>Passionate about designing <span className="about-highlight">practical solutions</span> to complex technical challenges</p>
                </div>
              </div>
              
              <div className="feature-item" ref={el => featuresRef.current[2] = el}>
                <FaLayerGroup className="feature-icon" />
                <div className="feature-text">
                  <h4>System Design</h4>
                  <p>Focused on building <span className="about-highlight">scalable, maintainable</span>, and modular backend architectures</p>
                </div>
              </div>
              
              <div className="feature-item" ref={el => featuresRef.current[3] = el}>
                <FaBookReader className="feature-icon" />
                <div className="feature-text">
                  <h4>Continuous Learner</h4>
                  <p>Committed to sharpening my skills and exploring <span className="about-highlight">new technologies</span> to grow as a developer</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn pulse-btn">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
