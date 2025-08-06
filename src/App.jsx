// src/App.jsx
import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // Simple state management for dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
  // Check if user has a saved preference
  const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  // Effect to apply theme changes
  useEffect(() => {
    console.log('🎨 Theme changed to:', isDarkMode ? 'dark' : 'light');
    
    // Save to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply theme to document
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Simple toggle function
  const toggleDarkMode = () => {
    console.log('🔄 Toggle clicked! Current:', isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  console.log('🎯 App - isDarkMode:', isDarkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#0D1117] text-white' 
        : 'bg-white text-black'
    }`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <HeroSection isDarkMode={isDarkMode} />
        <AboutSection isDarkMode={isDarkMode} />
        <ProjectsSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
