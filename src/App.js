import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Ensure dark theme is applied even without Navbar
  useEffect(() => {
    document.body.classList.add('dark-theme');
    return () => document.body.classList.remove('dark-theme');
  }, []);
  return (
    <div className="app-container">
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
