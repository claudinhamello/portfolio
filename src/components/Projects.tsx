import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle, Eye, Layers, ShieldCheck } from 'lucide-react';

interface ProjectsProps {
  onOpenBastidores: () => void;
  onOpenContact: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenBastidores, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'fintech' | 'healthtech' | 'designsystem'>('todos');

  const projectsList = [
    {
      id: 'fintech',
      title: 'Fintech Bank — Redesign do Onboarding & Dashboard',
      category: 'fintech',
      categoryName: 'Fintech & B2B',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Redesign completo da experiência de abertura de contas PJ e dashboard financeiro. Foco na redução da fricção no upload de documentos e clareza de dados.',
      metric: 'Reduziu tempo de onboarding de 14min para 4min (68% de ganho)',
      tags: ['UX Research', 'Material 3', 'A/B Testing', 'Figma Tokens'],
      highlights: [
        'Pesquisa com 32 PMEs brasileiras',
        'Arquitetura de informação simplificada',
        'Protótipo interativo de alta fidelidade em Figma',
      ]
    },
    {
      id: 'healthtech',
      title: 'Telemedicina — Prontuário Eletrônico & Agendamento',
      category: 'healthtech',
      categoryName: 'HealthTech & Acessibilidade',
      image: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Interface médica de alta densidade de informação desenvolvida sob os rígidos critérios de acessibilidade WCAG AAA e usabilidade hospitalar.',
      metric: 'Aumento de 98% de satisfação médica no prontuário digital',
      tags: ['WCAG AAA', 'Design System', 'User Testing', 'Medical UX'],
      highlights: [
        'Acessibilidade por atalhos de teclado para médicos',
        'Contraste ajustável e modo escuro hospitalar',
        'Validação em ambiente real de consulta',
      ]
    },
    {
      id: 'designsystem',
      title: 'Design System Aurora — Figma to React Multi-Brand',
      category: 'designsystem',
      categoryName: 'Design Systems',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ecossistema completo com mais de 350 componentes tokenizados no Figma, documentação interativa em Storybook e sincronização automática via Tokens Studio.',
      metric: 'Acelerou desenvolvimento de novas páginas em 2.5x',
      tags: ['Design Tokens', 'Style Dictionary', 'Storybook', 'Figma API'],
      highlights: [
        'Tokens dinâmicos para 3 marcas simultâneas',
        'Automação de testes de contraste no GitHub',
        'Guia de acessibilidade para desenvolvedores',
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? projectsList 
    : projectsList.filter(p => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-24 relative bg-[#0b0c16] text-white overflow-hidden">
      {/* Background Subtle Gradient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Casos de Estudo Selecionados</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-white">
              Projetos em Destaque
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light">
              Projetos reais com dados, problemas resolvidos e métricas comprovadas.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'todos'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedCategory('fintech')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'fintech'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Fintech
            </button>
            <button
              onClick={() => setSelectedCategory('healthtech')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'healthtech'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              HealthTech
            </button>
            <button
              onClick={() => setSelectedCategory('designsystem')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'designsystem'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Design System
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="liquid-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Showcase Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1024] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10 liquid-glass rounded-full px-3 py-1 border border-white/20 backdrop-blur-md">
                    <span className="text-xs font-medium text-cyan-300">{project.categoryName}</span>
                  </div>

                  {/* Impact Metric Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-purple-950/80 border border-purple-400/30 backdrop-blur-md">
                    <p className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{project.metric}</span>
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-serif font-medium text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Process Highlights */}
                  <ul className="space-y-2 pt-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md text-[11px] bg-white/5 border border-white/10 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenBastidores}
                  className="w-full py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all group-hover:border-cyan-400/50"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Ver Bastidores & Processo Completo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
