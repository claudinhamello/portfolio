import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenBastidores: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onOpenBastidores, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`liquid-glass-nav rounded-full px-5 py-3 sm:px-6 sm:py-3.5 transition-all duration-300 flex items-center justify-between ${
            scrolled ? 'shadow-2xl shadow-purple-950/40 border-white/20' : ''
          }`}
        >
          {/* Logo Orb */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 p-[2px] transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-cyan-500/30">
              <div className="w-full h-full rounded-full bg-[#0d1024] flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 via-purple-500/40 to-pink-500/40 animate-pulse-glow" />
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-300 to-purple-400 shadow-inner" />
              </div>
            </div>
            <span className="font-display font-bold text-white text-base tracking-wide hidden sm:inline-block">
              Claudia<span className="text-cyan-400 font-light">.design</span>
            </span>
          </a>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection('home')}
              className={`relative py-1 transition-colors ${
                activeSection === 'home' 
                  ? 'text-white font-semibold' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_8px_#38bdf8]" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('projetos')}
              className={`relative py-1 transition-colors ${
                activeSection === 'projetos' 
                  ? 'text-white font-semibold' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Projetos
              {activeSection === 'projetos' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_8px_#38bdf8]" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('processo')}
              className={`relative py-1 transition-colors ${
                activeSection === 'processo' 
                  ? 'text-white font-semibold' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Processo UX
              {activeSection === 'processo' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_8px_#38bdf8]" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('design-system')}
              className={`relative py-1 transition-colors ${
                activeSection === 'design-system' 
                  ? 'text-white font-semibold' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Design System
            </button>

            <button
              onClick={onOpenBastidores}
              className="text-purple-300 hover:text-purple-100 flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Bastidores</span>
            </button>
          </nav>

          {/* Contact Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 border border-white/20 hover:border-cyan-400/60 bg-white/5 hover:bg-white/10 backdrop-blur-md hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
            >
              <span>Vamos conversar</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-6 rounded-2xl liquid-glass-nav border border-white/20 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-lg text-slate-200 hover:text-white py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-left text-lg text-slate-200 hover:text-white py-2"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('processo')}
              className="text-left text-lg text-slate-200 hover:text-white py-2"
            >
              Processo UX
            </button>
            <button
              onClick={() => scrollToSection('design-system')}
              className="text-left text-lg text-slate-200 hover:text-white py-2"
            >
              Design System
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBastidores();
              }}
              className="text-left text-lg text-cyan-400 flex items-center gap-2 py-2"
            >
              <Sparkles className="w-4 h-4" />
              Ver Bastidores
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
