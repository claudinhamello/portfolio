import React from 'react';
import { Sparkles, Linkedin, Github, Figma, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenBastidores: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenBastidores }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080f] text-slate-400 py-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-[#0d1024] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                </div>
              </div>
              <span className="font-display font-bold text-white text-lg">
                Luciana<span className="text-cyan-400 font-light">.design</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 font-light max-w-sm leading-relaxed">
              Você vê o resultado. Eu mostro o caminho inteiro. Design de Produto focado em pesquisa, métricas e handoff perfeito.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Navegação</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#projetos" className="hover:text-cyan-400 transition-colors">Projetos</a>
              <a href="#processo" className="hover:text-cyan-400 transition-colors">Processo UX</a>
              <a href="#design-system" className="hover:text-cyan-400 transition-colors">Design System</a>
              <button onClick={onOpenBastidores} className="text-left text-cyan-400 hover:text-cyan-300">
                Bastidores
              </button>
              <button onClick={onOpenContact} className="text-left hover:text-cyan-400">
                Contato
              </button>
            </div>
          </div>

          {/* Contact Action */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Vamos criar juntos?</p>
            <button
              onClick={onOpenContact}
              className="btn-liquid w-full py-3 rounded-full text-xs font-semibold text-white flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Agendar Conversa</span>
            </button>

            <button
              onClick={scrollToTop}
              className="w-full py-2.5 rounded-full text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-all"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Luciana Silva. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Desenvolvido com Liquid Glass FX, React & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
