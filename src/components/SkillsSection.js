import React, { useEffect, useRef } from "react";
import "../styles/SkillsSection.css";
import {
  SiGo,
  SiTypescript,
  SiSpring,
  SiPython,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiMinio,
  SiDocker,
  SiPrometheus,
  SiGrafana
} from 'react-icons/si';
import { FaNetworkWired, FaShieldAlt, FaTachometerAlt, FaCode } from 'react-icons/fa';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

  const categories = [
    {
      title: 'Core Stack',
      items: [
        { name: 'Go', Icon: SiGo, tip: 'Go — concurrency with goroutines & channels' },
        { name: 'Java (Spring Boot)', Icon: SiSpring, tip: 'Spring Boot — production-ready microservices' },
        { name: 'TypeScript', Icon: SiTypescript, tip: 'Type-safe frontends & services' },
        { name: 'Python', Icon: SiPython, tip: 'Python — data tooling & services' },
      ],
    },
    {
      title: 'Runtime & RPC',
      items: [
        { name: 'Next.js', Icon: SiNextdotjs, tip: 'Next.js — SSR/ISR & app router' },
        { name: 'React', Icon: SiReact, tip: 'React — component-driven UIs' },
        { name: 'Angular', Icon: SiAngular, tip: 'Angular — enterprise frontends' },
        { name: 'gRPC', Icon: FaNetworkWired, tip: 'gRPC — bidi streams with deadlines' },
        { name: 'FastAPI', Icon: SiFastapi, tip: 'FastAPI — high‑perf Python services' },
      ],
    },
    {
      title: 'Data & Infra',
      items: [
        { name: 'MongoDB', Icon: SiMongodb, tip: 'MongoDB — flexible document storage' },
        { name: 'Redis', Icon: SiRedis, tip: 'Redis — caching & rate limits' },
        { name: 'MinIO', Icon: SiMinio, tip: 'MinIO — S3‑compatible storage' },
        { name: 'Docker', Icon: SiDocker, tip: 'Docker/Compose — containerized runtime' },
      ],
    },
    {
      title: 'Reliability & Security',
      items: [
        { name: 'Prometheus', Icon: SiPrometheus, tip: 'Prometheus — metrics & alerts' },
        { name: 'Grafana', Icon: SiGrafana, tip: 'Grafana — unified observability' },
        { name: 'TLS/mTLS', Icon: FaShieldAlt, tip: 'TLS/mTLS — service identity & encryption' },
        { name: 'Rate limiting', Icon: FaTachometerAlt, tip: 'Rate limiting — abuse control & fairness' },
        // Optionally add Jaeger, Circuit breakers, etc. into the overflow
      ],
    },
  ];
  
  useEffect(() => {
    const sectionNode = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
          skillRefs.current.forEach((ref, i) => {
            if (ref) setTimeout(() => ref.classList.add('skill-visible'), 90 * i);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionNode) observer.observe(sectionNode);
    return () => { if (sectionNode) observer.unobserve(sectionNode); };
  }, []);
  
  // proficiency dots removed per request
  
  // Show all items (no "Show more" control)

  // reset refs list to avoid accumulation across re-renders
  skillRefs.current = [];

  return (
    <section className="skills" ref={sectionRef} id="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills</h2>
          <div className="section-underline"></div>
          {/* subtitle removed per request */}
        </div>

        <div className="skills-categories">
          {categories.map((cat, ci) => (
            <div className="skills-category" key={ci}>
              <h3 className="category-title">{cat.title}</h3>
              <ul className="category-list">
                {cat.items.map((item, si) => (
                  <li
                    className="skill-badge"
                    key={`${ci}-${si}`}
                    ref={el => { if (el) skillRefs.current.push(el); }}
                  >
                    <span className="skill-badge-inner" title={item.tip || item.name}>
                      {item.Icon ? <item.Icon className="skill-icon" aria-hidden /> : <FaCode className="skill-icon" aria-hidden />}
                      <span className="skill-name" aria-label={item.name}>{item.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* proof and show more removed */}
      </div>
    </section>
  );
};

export default SkillsSection; 
