import React, { useState } from 'react';
import { X, Sparkles, AlertCircle, CheckCircle, ArrowRight, Lightbulb, Search, FileCode, Layers, ShieldCheck, Cpu } from 'lucide-react';

interface BastidoresModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const BastidoresModal: React.FC<BastidoresModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'iteracoes' | 'pesquisa' | 'handoff' | 'metricas'>('iteracoes');

  if (!isOpen) return null;

  const iterationsList = [
    {
      id: 1,
      project: 'Plataforma Fintech — Onboarding B2B',
      problem: 'Taxa de desistência de 38% na etapa 3 (Upload de Documentos PJ).',
      hypothesis: 'Usuários achavam a lista de documentos longa e confusa, gerando ansiedade e perda de progresso.',
      testFail: 'Primeiro protótipo listava 7 campos em um formulário único e extenso.',
      solution: 'Divisão em 3 etapas progressivas com validação prévia em OCR inteligente e salvamento automático em tempo real.',
      result: 'Redução do abandono de 38% para 9%. Tempo médio de onboarding caiu de 14 min para 4.2 min.',
      tags: ['UX Research', 'A/B Testing', 'Form Design'],
    },
    {
      id: 2,
      project: 'Telemedicina — Prontuário Médico Digital',
      problem: 'Médicos gastavam 6 minutos digitando e buscando histórico durante a consulta ao vivo.',
      hypothesis: 'Hierarquia visual poluída e contraste insuficiente em telas hospitalares de baixa resolução.',
      testFail: 'Layout estilo tabela densa sobrecarregava a visão periférica dos profissionais.',
      solution: 'Reformulação com Material 3 tokens, agrupamento por módulos flutuantes com atalhos de teclado e tema de alto contraste.',
      result: 'Aumento de 98% no NPS de usabilidade com médicos. Atendimento 3.5 minutos mais rápido por consulta.',
      tags: ['Material 3', 'Acessibilidade WCAG AAA', 'Usabilidade'],
    },
    {
      id: 3,
      project: 'Design System Multimarcas',
      problem: 'Inconsistência de tokens entre Figma e repositório React Native em 4 squads.',
      hypothesis: 'Falta de automação na sincronização e nomes de tokens muito genéricos.',
      testFail: 'Planilha manual de tokens defasava em menos de 2 semanas.',
      solution: 'Criação de pipeline com Style Dictionary + Tokens Studio no Figma e teste automatizado de contraste no GitHub Actions.',
      result: 'Zero divergências de UI na produção e velocidade de entregas de novas telas 2.5x mais rápida.',
      tags: ['Design Tokens', 'Figma API', 'Developer Handoff'],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#0e1122] border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-purple-950/40 via-[#0e1122] to-cyan-950/40 flex items-start justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bastidores & Processo Real</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">
              O Que Acontece Antes da Tela Bonita
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Nenhum grande produto surge pronto na primeira versão. Veja as falhas de teste, pesquisas e como os dados transformaram os projetos.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors shrink-0"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-white/[0.02] px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('iteracoes')}
            className={`px-5 py-3.5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'iteracoes'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>Erros & Iterações</span>
          </button>

          <button
            onClick={() => setActiveTab('pesquisa')}
            className={`px-5 py-3.5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'pesquisa'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Pesquisa com Usuários</span>
          </button>

          <button
            onClick={() => setActiveTab('handoff')}
            className={`px-5 py-3.5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'handoff'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>Handoff & Tokens</span>
          </button>

          <button
            onClick={() => setActiveTab('metricas')}
            className={`px-5 py-3.5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'metricas'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Acessibilidade & Métricas</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'iteracoes' && (
            <div className="space-y-6">
              {iterationsList.map((item) => (
                <div key={item.id} className="p-6 rounded-2xl liquid-glass border border-white/10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <h3 className="text-lg font-semibold text-white">{item.project}</h3>
                    <div className="flex gap-2">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Failure / Learning */}
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 space-y-2">
                      <div className="flex items-center gap-2 text-red-400 font-semibold text-xs uppercase tracking-wider">
                        <AlertCircle className="w-4 h-4" />
                        <span>O que deu errado no Teste V1</span>
                      </div>
                      <p className="text-sm text-slate-300">{item.testFail}</p>
                      <p className="text-xs text-slate-400 italic">Sintoma: {item.problem}</p>
                    </div>

                    {/* Solution & Impact */}
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                        <CheckCircle className="w-4 h-4" />
                        <span>A Iteração V2 e O Resultado</span>
                      </div>
                      <p className="text-sm text-slate-300">{item.solution}</p>
                      <p className="text-xs text-emerald-300 font-medium">Impacto: {item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pesquisa' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl liquid-glass border border-white/10 space-y-4">
                <h3 className="text-xl font-serif text-white">Métodos de Pesquisa Aplicados</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <Search className="w-6 h-6 text-cyan-400 mb-2" />
                    <h4 className="font-semibold text-white text-sm">Entrevistas em Profundidade</h4>
                    <p className="text-xs text-slate-400 mt-1">Mais de 45 entrevistas gravadas e codificadas por mapa de empatia em projetos B2B e B2C.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <Layers className="w-6 h-6 text-purple-400 mb-2" />
                    <h4 className="font-semibold text-white text-sm">Testes Usabilidade Não-Moderados</h4>
                    <p className="text-xs text-slate-400 mt-1">Utilização do Maze & Lookback com tarefas quantificadas em taxa de sucesso e tempo por tarefa.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <Cpu className="w-6 h-6 text-emerald-400 mb-2" />
                    <h4 className="font-semibold text-white text-sm">Análise de Hotjar & Funis</h4>
                    <p className="text-xs text-slate-400 mt-1">Mapeamento de pontos de fricção e rage clicks para pautar hipóteses de redesign.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'handoff' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl liquid-glass border border-white/10 space-y-4">
                <h3 className="text-xl font-serif text-white">Padrão de Documentação para Desenvolvedores</h3>
                <p className="text-sm text-slate-300">
                  Todo componente passa por documentação de estados (Default, Hover, Active, Focus, Disabled, Loading, Error), espaçamentos de 8px e variações responsivas.
                </p>
                <div className="p-4 rounded-xl bg-[#080a14] font-mono text-xs text-cyan-300 border border-white/10 space-y-2">
                  <p className="text-slate-500">// Token de Cores — Glassmorphism Theme</p>
                  <p><span className="text-purple-400">--color-surface-glass:</span> rgba(255, 255, 255, 0.05);</p>
                  <p><span className="text-purple-400">--backdrop-blur-nav:</span> 20px;</p>
                  <p><span className="text-purple-400">--border-glass-highlight:</span> rgba(255, 255, 255, 0.12);</p>
                  <p><span className="text-purple-400">--shadow-glow-cyan:</span> 0 0 25px rgba(56, 189, 248, 0.35);</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'metricas' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl liquid-glass border border-white/10 space-y-4">
                <h3 className="text-xl font-serif text-white">Acessibilidade Integrada (WCAG 2.1 AA / AAA)</h3>
                <p className="text-sm text-slate-300">
                  Garantia de navegação por teclado, leitor de tela, razão de contraste mínima de 4.5:1 para textos corporativos e suporte total a temas de alto contraste.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-black/40 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Quer ver a documentação completa no Figma ou agendar uma apresentação ao vivo?
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              Fechar
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="btn-liquid px-6 py-2.5 rounded-full text-sm font-semibold text-white flex items-center gap-2"
            >
              <span>Vamos Conversar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
