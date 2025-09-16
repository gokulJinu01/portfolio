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
    
    const features = [...featuresRef.current];
    features.forEach(feature => {
      if (feature) {
        featuresObserver.observe(feature);
      }
    });
    
    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
      
      features.forEach(feature => {
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
                I'm a <span className="about-highlight">full-stack infrastructure engineer</span> who designs and ships <span className="about-highlight">secure, observable services</span> and the UIs that run them. Comfortable across Go/Java/Python and TypeScript/React; REST/gRPC; Mongo/Redis/MinIO; Dockerised execution; and practical security. I have a bias for <span className="about-highlight">clear specs, deterministic behaviour, and reproducible results</span>.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature-item" ref={el => featuresRef.current[0] = el}>
                <FaLaptopCode className="feature-icon" />
                <div className="feature-text">
                  <h4>Infrastructure & Security</h4>
                  <p>Building <span className="about-highlight">secure agent-execution runtimes</span> with containerized task runners and comprehensive security layers</p>
                </div>
              </div>
              
              <div className="feature-item" ref={el => featuresRef.current[1] = el}>
                <FaRocket className="feature-icon" />
                <div className="feature-text">
                  <h4>Observability & Reliability</h4>
                  <p>Implementing <span className="about-highlight">Prometheus/Grafana/Jaeger</span> monitoring with timeouts, retries, and circuit breakers</p>
                </div>
              </div>
              
              <div className="feature-item" ref={el => featuresRef.current[2] = el}>
                <FaLayerGroup className="feature-icon" />
                <div className="feature-text">
                  <h4>Memory & Data Systems</h4>
                  <p>Designing <span className="about-highlight">tag-based memory layers</span> with bounded graph retrieval and deterministic pack assembly</p>
                </div>
              </div>
              
              <div className="feature-item" ref={el => featuresRef.current[3] = el}>
                <FaBookReader className="feature-icon" />
                <div className="feature-text">
                  <h4>Research & Innovation</h4>
                  <p>Contributing to <span className="about-highlight">whitepapers on tag-graph memory retrieval</span> and explainability in AI systems</p>
                </div>
              </div>
            </div>
            
      <div className="about-education">
        <h4>Education</h4>
        <div className="education-layout">
          <div className="education-main">
            <div className="education-header">
              <strong>George Brown College — Computer Programming and Analysis (T177)</strong>
            </div>
            <span className="education-duration">3-Year Program</span>
            <p className="education-description">Comprehensive program in computer science fundamentals, software engineering principles, and systems analysis. Includes co-op work terms and capstone projects for practical industry experience.</p>
          </div>
          <div className="education-right">
            <div className="detail-item">
              <h5>Computer Science Fundamentals</h5>
              <p>Algorithms, data structures, and computational thinking</p>
            </div>
            <div className="detail-item">
              <h5>Software Engineering</h5>
              <p>System design, testing methodologies, and project management</p>
            </div>
          </div>
          <div className="education-bottom">
            <div className="detail-item">
              <h5>Academic Foundation</h5>
              <p>Mathematics, logic, and theoretical computer science concepts</p>
            </div>
            <div className="detail-item">
              <h5>Capstone Project</h5>
              <p>Comprehensive final project demonstrating learned concepts</p>
            </div>
            <div className="detail-item">
              <h5>Co-op Experience</h5>
              <p>Practical industry experience through work terms</p>
            </div>
          </div>
        </div>
      </div>
            
            <div className="about-achievements">
              <h4>Achievements</h4>
              <div className="achievements-timeline">
                <div className="timeline-extension-left"></div>
                <div className="achievement-card achievement-card-reverse">
                  <div className="achievement-content">
                    <h5>Italia360 Incubation</h5>
                    <p>Technical alignment/experimentation with partner orchestration platform (under NDA). Whitepaper draft on tag-graph memory retrieval and explainability.</p>
                  </div>
                  <div className="achievement-year">2025</div>
                </div>
                <div className="achievement-card achievement-card-normal">
                  <div className="achievement-content">
                    <h5>Most Innovative Startup</h5>
                    <p>Awarded as Most Innovative startup in REIS Congress 2025.</p>
                  </div>
                  <div className="achievement-year">2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
