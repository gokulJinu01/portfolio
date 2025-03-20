import React, { useEffect, useRef } from "react";
import "../styles/SkillsSection.css";

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const skillListRefs = useRef([[], []]);
  
  // Primary Skills (First Line)
  const primarySkills = [
    { name: "Java (Spring Boot)", percentage: 85 },
    { name: "JavaScript (Node.js)", percentage: 80 },
    { name: "React.js / Next.js", percentage: 75 },
    { name: "PostgreSQL (SQL)", percentage: 80 },
    { name: "MongoDB", percentage: 75 }
  ];
  
  // Secondary Skills (Second Line)
  const secondarySkills = [
    { name: "Docker", percentage: 75 },
    { name: "JWT Authentication", percentage: 80 },
    { name: "Microservices Architecture", percentage: 75 },
    { name: "REST API Design", percentage: 80 },
    { name: "Git & GitHub", percentage: 85 }
  ];
  
  useEffect(() => {
    const sectionNode = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
          
          // Animate each skill list separately with a slight delay
          skillListRefs.current.forEach((listRef, listIndex) => {
            listRef.forEach((skillRef, index) => {
              if (skillRef) {
                setTimeout(() => {
                  skillRef.classList.add('skill-visible');
                }, 100 * index + 300 * listIndex);
              }
            });
          });
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionNode) {
      observer.observe(sectionNode);
    }
    
    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
    };
  }, []);
  
  const handleMouseEnter = (element) => {
    if (element) {
      element.style.textShadow = "0 0 5px rgba(92, 107, 192, 0.7)";
    }
  };
  
  const handleMouseLeave = (element) => {
    if (element) {
      element.style.textShadow = "";
    }
  };
  
  const renderSkillText = (name, percentage, skillId) => {
    return (
      <div className="skill-name">
        <div 
          className="skill-text-container"
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget.querySelector('.skill-text'))}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget.querySelector('.skill-text'))}
        >
          <div 
            className="skill-text" 
            id={skillId}
          >
            {name}
          </div>
          <div 
            className="skill-text-fill"
            style={{ height: `${percentage}%` }}
            data-text={name}
          ></div>
        </div>
      </div>
    );
  };
  
  return (
    <section className="skills" ref={sectionRef} id="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="skills-content">
          <div className="skills-list primary-skills">
            {primarySkills.map((skill, index) => (
              <div 
                className="skill-item"
                key={`primary-${index}`}
                ref={el => skillListRefs.current[0][index] = el}
              >
                {renderSkillText(skill.name, skill.percentage, `primary-${index}`)}
              </div>
            ))}
          </div>
          
          <div className="skills-list secondary-skills">
            {secondarySkills.map((skill, index) => (
              <div 
                className="skill-item"
                key={`secondary-${index}`}
                ref={el => skillListRefs.current[1][index] = el}
              >
                {renderSkillText(skill.name, skill.percentage, `secondary-${index}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 