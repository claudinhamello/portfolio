import React, { useState } from 'react';
import { Sparkles, Layers, Check, Copy, Sliders, Moon, Sun, ShieldCheck } from 'lucide-react';

export const DesignSystemShowcase: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<'dark' | 'glass'>('glass');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const tokens = [
    { name: '--color-primary', value: '#9E7FFF', description: 'Cor principal para botões primários e links' },
    { name: '--color-cyan-glow', value: '#38BDF8', description: 'Destaque secundário e bordas de foco' },
    { name: '--color-surface-glass', value: 'rgba(255, 255, 255, 0.05)', description: 'Fundo translúcido para cards' },
    { name: '--backdrop-blur', value: '20px', description: 'Efeito Liquid Glass Frost' },
    { name: '--radius-pill', value: '9999px', description: 'Arredondamento para botões e pílulas de status' },
  ];

  const handleCopy = (token: string) => {
    navigator.clipboard.writeText(token);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <section id="design-system" className="py-24 relative bg-[#0b0c16] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>Material 3 & Figma Tokens</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white">
              Design System Vivo
            </h2>
            <p className="text-slate-300 text-base font-light">
              Componentes testados para acessibilidade (WCAG AAA), sincronizados via Tokens Studio no Figma e prontos para desenvolvedores.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTheme('glass')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTheme === 'glass' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modo Liquid Glass</span>
            </button>
            <button
              onClick={() => setActiveTheme('dark')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTheme === 'dark' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Modo Dark Material 3</span>
            </button>
          </div>
        </div>

        {/* Live Playground Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Interactive UI Components Preview */}
          <div className="lg:col-span-7 liquid-glass rounded-3xl p-6 sm:p-8 border border-white/15 space-y-8">
            <h3 className="text-xl font-serif text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-cyan-400" />
              <span>Preview de Componentes Interativos</span>
            </h3>

            {/* Buttons Showcase */}
            <div className="space-y-3">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">01. Botões & Variantes</p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="btn-liquid px-6 py-3 rounded-full text-sm font-semibold text-white">
                  Botão Liquid Gradient
                </button>
                <button className="px-6 py-3 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md">
                  Botão Glass Secondary
                </button>
                <button className="px-6 py-3 rounded-full text-sm font-medium text-cyan-400 border border-cyan-400/40 hover:bg-cyan-400/10">
                  Outline Cyan
                </button>
              </div>
            </div>

            {/* Badges Showcase */}
            <div className="space-y-3">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">02. Badges de Status & Tags</p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Ativo na Produção
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Figma Auto-Layout 5.0
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  WCAG AAA Compliance
                </span>
              </div>
            </div>

            {/* Card Widget Preview */}
            <div className="space-y-3">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">03. Liquid Card Surface</p>
              <div className="p-5 rounded-2xl liquid-card border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Métrica do Design System</span>
                  <span className="text-xs text-cyan-400">Tokens V2.4</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[88%]" />
                </div>
                <p className="text-xs text-slate-400">88% de reuso de componentes na squad de engenharia.</p>
              </div>
            </div>

          </div>

          {/* Token Explorer */}
          <div className="lg:col-span-5 liquid-glass rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6">
            <div>
              <h3 className="text-xl font-serif text-white">Design Tokens (CSS / JSON)</h3>
              <p className="text-xs text-slate-400 mt-1">Clique para copiar qualquer variável para a área de transferência.</p>
            </div>

            <div className="space-y-3">
              {tokens.map((tok) => (
                <div
                  key={tok.name}
                  onClick={() => handleCopy(tok.name)}
                  className="p-3.5 rounded-xl bg-[#080a14] border border-white/10 hover:border-cyan-400/40 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono text-purple-300 group-hover:text-cyan-300">
                        {tok.name}
                      </code>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light">{tok.description}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">
                      {tok.value}
                    </span>
                    {copiedToken === tok.name ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-500 group-hover:text-white" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
