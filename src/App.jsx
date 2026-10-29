import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiAssistant from './components/AiAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('liche_portfolio_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('liche_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-root">
      <div className="bg-subtle-grid" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AiAssistant />
        <Contact />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
