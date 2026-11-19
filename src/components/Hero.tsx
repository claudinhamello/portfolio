import React from 'react';
import { ArrowRight, Sparkles, Figma } from 'lucide-react';

interface HeroProps {
  onOpenBastidores: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBastidores, onOpenContact }) => {
  // Direct reference to your image file
  const designerImage = "/claudia_hero.png";

  const tickerItems = [
    'PESQUISA',
    'DESIGN SYSTEM',
    'MATERIAL 3',
    'HANDOFF COM DEVS',
    'FIGMA',
    'PESQUISA',
    'PROTOTIPAGEM ALTA FIDELIDADE',
    'ACCESSIBILIDADE WCAG AAA',
    'MÉTRICAS DE UX',
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-12 md:pt-36 md:pb-16 flex flex-col justify-between bg-[#0b0c16]">
      {/* Background True Radial Glows unbounded across the section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-[10%] right-[5%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(139,92,246,0.15) 50%, transparent 80%)',
            filter: 'blur(90px)',
          }}
        />
        <div 
          className="absolute bottom-[20%] left-[-5%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.18) 0%, rgba(59,130,246,0.08) 50%, transparent 75%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-20 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left z-20 pt-4">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">
                Disponível para Projetos & Liderança de UX
              </span>
            </div>

            {/* Main Headline exact text from image */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-white font-normal leading-[1.1]">
                Você vê o resultado.
              </h1>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-gradient-hero font-normal leading-[1.15]">
                Eu mostro o caminho inteiro.
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-xl font-light leading-relaxed">
              Pesquisa, erros e iterações de cada projeto.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBastidores}
                className="btn-liquid group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-300"
              >
                <span>Ver os bastidores</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-base font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Agendar conversa</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-white">8+ anos</p>
                <p className="text-xs text-slate-400 font-light mt-1">Design de Produto UX/UI</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-cyan-400">42%</p>
                <p className="text-xs text-slate-400 font-light mt-1">Aumento de Conversão</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-purple-300">100%</p>
                <p className="text-xs text-slate-400 font-light mt-1">Handoff Documentado</p>
              </div>
            </div>

          </div>

          {/* Right Column: Person standing DIRECTLY on the background */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-full">
            <div className="relative w-full max-w-[480px] flex items-end justify-center">

              {/* Backlight Glow directly behind her silhouette */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-purple-500/15 to-transparent rounded-full blur-3xl transform scale-110 pointer-events-none" />

              {/* Portrait Image without alpha fade */}
              <div className="relative w-full flex justify-center min-h-[480px]">
                <img
                  src={designerImage}
                  alt="Claudia Mello — Product Designer"
                  className="w-full max-h-[620px] object-cover object-top select-none pointer-events-none filter drop-shadow-[0_20px_50px_rgba(56,189,248,0.2)]"
                />
              </div>

              {/* Minimalist Floating Pill Badge */}
              <div className="absolute top-4 right-0 z-30 liquid-glass rounded-full px-4 py-1.5 border border-white/20 backdrop-blur-md flex items-center gap-2 shadow-xl animate-float">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                <span className="text-xs text-white font-medium">Claudia Mello • Product/UI/UX Designer</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Ticker / Marquee Banner at Hero Bottom */}
      <div className="relative w-full overflow-hidden border-y border-white/10 bg-white/[0.02] backdrop-blur-md py-4 mt-8 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-slate-300 uppercase font-sans">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
