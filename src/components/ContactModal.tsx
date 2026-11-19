import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, Linkedin, Mail, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    tipo: 'Redesign / Novo Produto',
    mensagem: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0e1122] border border-white/20 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        
        {/* Modal Close Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inicie seu projeto ou contratação</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white mt-2">Vamos conversar</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">Mensagem Enviada com Sucesso!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Obrigado pelo contato! Luciana responderá em até 24 horas úteis com a melhor proposta de alinhamento.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-liquid px-6 py-2.5 rounded-full text-sm font-semibold text-white mt-4"
            >
              Voltar ao Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium">Seu Nome *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ana Maria"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium">Seu E-mail Corporativo *</label>
                <input
                  type="email"
                  required
                  placeholder="ana@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium">Empresa / Startup</label>
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium">Tipo de Projeto</label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#14182f] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="Redesign / Novo Produto">Redesign / Novo Produto UX</option>
                  <option value="Design System & Tokens">Design System & Tokens</option>
                  <option value="Consultoria UX & Pesquisa">Consultoria UX & Pesquisa</option>
                  <option value="Vaga Lead / Staff UX">Vaga Lead / Staff Product Designer</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-slate-300 font-medium">Detalhes do Projeto ou Pergunta *</label>
              <textarea
                required
                rows={3}
                placeholder="Conte brevemente sobre os objetivos, prazos ou desafios do seu produto..."
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-slate-400 text-xs">
                <a href="mailto:luciana@design.com" className="hover:text-cyan-300 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>luciana@design.com</span>
                </a>
              </div>

              <button
                type="submit"
                className="btn-liquid w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold text-white flex items-center justify-center gap-2"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
