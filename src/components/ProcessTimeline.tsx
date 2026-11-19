import React from 'react';
import { Search, Compass, Layers, CheckSquare, Code2, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenBastidores: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBastidores }) => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Pesquisa Quali/Quanti',
      icon: Search,
      color: 'from-cyan-400 to-blue-500',
      description: 'Mapeamento de dores com usuários reais, Matriz CSD, análise quantitativa de funis no Hotjar e benchmarking competitivo.',
      deliverables: ['Matriz de Certezas & Suposições', 'Personas com Dores Reais', 'Mapa de Jornada do Usuário'],
    },
    {
      number: '02',
      title: 'Hipóteses & Testes Iniciais',
      icon: Compass,
      color: 'from-blue-500 to-indigo-500',
      description: 'Criação de protótipos em papel e baixa fidelidade. Validação precoce de fluxos para errar rápido e barato antes do código.',
      deliverables: ['Wireframes de Média Fidelidade', 'Testes de Conceito Sem Fricção', 'Documentação de Descartes'],
    },
    {
      number: '03',
      title: 'Design System & Material 3 UI',
      icon: Layers,
      color: 'from-indigo-500 to-purple-500',
      description: 'Construção visual impecável baseada em Design Tokens (Cores, Tipografia, Elevação, Espaçamentos) e diretrizes do Material 3.',
      deliverables: ['Biblioteca no Figma com Auto-Layout 5.0', 'Tokens de Tema Claro & Escuro', 'Componentes Acessíveis (WCAG AAA)'],
    },
    {
      number: '04',
      title: 'Validação de Usabilidade & Iterações',
      icon: CheckSquare,
      color: 'from-purple-500 to-pink-500',
      description: 'Testes quantitativos moderados e não-moderados (Maze). Medição do tempo de tarefa, taxa de sucesso e satisfação.',
      deliverables: ['Relatório com Métricas de Usabilidade', 'Registro de Iterações V1 -> V2', 'Ajustes Finos de Micro-Interação'],
    },
    {
      number: '05',
      title: 'Handoff com Devs & Acompanhamento',
      icon: Code2,
      color: 'from-pink-500 to-cyan-400',
      description: 'Especificação técnica rigorosa de estados, regras de negócio e acessibilidade. QA de UI junto com o time de engenharia.',
      deliverables: ['Spec Matrix de Todos os Componentes', 'Tokens via Tokens Studio / JSON', 'Acompanhamento em Sprints'],
    },
  ];

  return (
    <section id="processo" className="py-24 relative bg-[#090b14] text-white overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Processo Extremo a Extremo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white">
            O Caminho Inteiro
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Metodologia transparente que conecta as necessidades dos usuários aos objetivos do negócio e entrega pronta para engenharia.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="liquid-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-slate-600 group-hover:text-cyan-400 transition-colors">
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6 space-y-1.5">
                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">Entregáveis:</p>
                    {step.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 liquid-glass rounded-3xl p-8 border border-white/15 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-serif text-white">Quer ver como esse processo funcionaria no seu produto?</h3>
            <p className="text-sm text-slate-300 font-light">
              Apresento casos práticos com arquivos reais do Figma e métricas de negócios.
            </p>
          </div>

          <button
            onClick={onOpenBastidores}
            className="btn-liquid shrink-0 px-8 py-3.5 rounded-full text-sm font-semibold text-white flex items-center gap-2"
          >
            <span>Ver Arquivos do Processo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
