import React, { useEffect, useRef } from "react";
import "../styles/SkillsSection.css";
import {
  SiGo,
  SiTypescript,
  SiSpring,
  SiNextdotjs,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiMinio,
  SiDocker,
  SiPrometheus,
  SiGrafana,
  SiJaeger
} from 'react-icons/si';
import { FaNetworkWired, FaShieldAlt, FaCode, FaLock } from 'react-icons/fa';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

  const categories = [
    {
      title: 'Languages & Frameworks',
      items: [
        { name: 'Go', Icon: SiGo },
        { name: 'Java/Spring', Icon: SiSpring },
        { name: 'TypeScript', Icon: SiTypescript },
        { name: 'Python/FastAPI', Icon: SiFastapi },
        { name: 'React/Next.js', Icon: SiNextdotjs },
      ],
    },
    {
      title: 'Infrastructure & Data',
      items: [
        { name: 'Docker', Icon: SiDocker },
        { name: 'MongoDB', Icon: SiMongodb },
        { name: 'Redis', Icon: SiRedis },
        { name: 'MinIO/S3', Icon: SiMinio },
        { name: 'gRPC', Icon: FaNetworkWired },
      ],
    },
    {
      title: 'Observability & Security',
      items: [
        { name: 'Prometheus', Icon: SiPrometheus },
        { name: 'Grafana', Icon: SiGrafana },
        { name: 'Jaeger', Icon: SiJaeger },
        { name: 'TLS/mTLS', Icon: FaShieldAlt },
        { name: 'JWT/Auth', Icon: FaLock },
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
                    <span className="skill-badge-inner">
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
