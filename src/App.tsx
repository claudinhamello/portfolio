import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProcessTimeline } from './components/ProcessTimeline';
import { DesignSystemShowcase } from './components/DesignSystemShowcase';
import { Footer } from './components/Footer';
import { BastidoresModal } from './components/BastidoresModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isBastidoresOpen, setIsBastidoresOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projetos', 'processo', 'design-system'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c16] text-slate-100 font-sans selection:bg-purple-500 selection:text-white antialiased overflow-x-hidden relative">
      {/* Sticky Liquid Glass Navigation */}
      <Header
        onOpenContact={() => setIsContactOpen(true)}
        onOpenBastidores={() => setIsBastidoresOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Section matching the original screenshot layout and exact text */}
      <main>
        <Hero
          onOpenBastidores={() => setIsBastidoresOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Featured Case Studies */}
        <Projects
          onOpenBastidores={() => setIsBastidoresOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* End-to-End UX Process Timeline */}
        <ProcessTimeline
          onOpenBastidores={() => setIsBastidoresOpen(true)}
        />

        {/* Material 3 & Figma Tokens Showcase */}
        <DesignSystemShowcase />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenBastidores={() => setIsBastidoresOpen(true)}
      />

      {/* Interactive Modals */}
      <BastidoresModal
        isOpen={isBastidoresOpen}
        onClose={() => setIsBastidoresOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
