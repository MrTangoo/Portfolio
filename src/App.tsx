import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import CVSection from './components/CVSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  // Update title when component mounts
  useEffect(() => {
    document.title = 'Jean Dupont | Développeur d\'applications';
  }, []);

  return (
    <div className="antialiased text-gray-800 bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CVSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;