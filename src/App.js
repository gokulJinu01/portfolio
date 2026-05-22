import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import MmeCaseStudy from "./components/MmeCaseStudy";
import "./App.css";

function App() {
  // Tiny pathname-based router — keeps the bundle dep-free.
  // SPA fallback for /mme is handled by vercel.json rewrites.
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/mme" || path === "/mme/") {
    return <MmeCaseStudy />;
  }

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
