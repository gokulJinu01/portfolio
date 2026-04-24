import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
