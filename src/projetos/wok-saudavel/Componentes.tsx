import { useState, type ComponentType, type ReactNode } from 'react';
import { AlarmClock, CakeSlice, Flame, Gauge, Salad, Snowflake, Star, Utensils } from 'lucide-react';
import { componentes } from './dados';

// Cores do app (Figma). O verde-oliva foi escurecido um pouco para o texto sobre o amarelo passar de 4,5:1.
const cor = { creme: '#FFF7F0', mostarda: '#F2B705', oliva: '#3B5234', marrom: '#7A5A0F', borda: '#E6D9C8' };

const iconesCategoria: ComponentType<{ className?: string }>[] = [Flame, Salad, CakeSlice, Snowflake];
const iconesInfo: ComponentType<{ className?: string }>[] = [AlarmClock, Utensils, Gauge, Star];

/** Moldura de cada componente: o nome, os estados e a área de teste */
function Bancada({ nome, estados, children }: { nome: string; estados: string; children: ReactNode }) {
  return (
    <div className="flex flex-col rounded-3xl border border-[#E6D9C8] bg-white p-6 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-sans text-[15px] font-bold text-processo">{nome}</h3>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-acento-2">{estados}</p>
      </div>
      {/* Fundo creme do app, com a grade pontilhada do canvas do Figma */}
      <div
        className="mt-5 flex flex-1 flex-wrap items-center gap-3 rounded-2xl p-5"
        style={{
          backgroundColor: cor.creme,
          backgroundImage: 'radial-gradient(rgba(122,90,15,0.13) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ChipsCategoria() {
  const [ativo, setAtivo] = useState(0);
  return (
    <div role="radiogroup" aria-label="Categorias de receita" className="flex flex-wrap gap-2.5">
      {componentes.categorias.map((c, i) => {
        const Icone = iconesCategoria[i];
        const sel = i === ativo;
        return (
          <button
            key={c}
            type="button"
            role="radio"
            aria-checked={sel}
            onClick={() => setAtivo(i)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 text-[14px] font-semibold shadow-[0_2px_6px_-2px_rgba(122,90,15,0.25)] transition hover:-translate-y-0.5"
            style={{ backgroundColor: sel ? cor.mostarda : '#FFFFFF', color: sel ? cor.oliva : cor.marrom }}
          >
            <Icone className="h-4 w-4" aria-hidden="true" />
            {c}
          </button>
        );
      })}
    </div>
  );
}

function ChipsInfo() {
  return (
    <ul className="flex flex-wrap gap-2.5" aria-label="Informações da receita">
      {componentes.infos.map((t, i) => {
        const Icone = iconesInfo[i];
        return (
          <li
            key={t}
            className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border px-3.5 text-[14px] font-semibold"
            style={{ borderColor: cor.borda, color: cor.marrom, backgroundColor: cor.creme }}
          >
            <Icone className="h-4 w-4" aria-hidden="true" />
            {t}
          </li>
        );
      })}
    </ul>
  );
}

function Interruptor({ rotulo, desabilitado = false, inicial = false }: { rotulo: string; desabilitado?: boolean; inicial?: boolean }) {
  const [ligado, setLigado] = useState(inicial);
  const base = desabilitado ? '#8A8A8A' : cor.marrom;
  return (
    <button
      type="button"
      role="switch"
      aria-checked={ligado}
      disabled={desabilitado}
      onClick={() => setLigado((l) => !l)}
      className="group flex min-h-[44px] items-center gap-3 text-left text-[14px] font-medium text-processo disabled:cursor-not-allowed disabled:text-secundario"
    >
      <span
        aria-hidden="true"
        className="relative h-8 w-[52px] shrink-0 rounded-full border-2 transition-colors"
        style={{ borderColor: base, backgroundColor: ligado ? base : 'transparent' }}
      >
        <span
          className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full transition-all duration-200"
          style={{ left: ligado ? 24 : 4, backgroundColor: ligado ? '#FFFFFF' : base }}
        />
      </span>
      {rotulo}
    </button>
  );
}

function Avaliacao() {
  const [nota, setNota] = useState(4);
  const [sobre, setSobre] = useState(0);
  const mostrada = sobre || nota;
  return (
    <div>
      <div role="radiogroup" aria-label="Avaliação da receita" className="flex" onMouseLeave={() => setSobre(0)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={n === nota}
            aria-label={`${n} ${n === 1 ? 'estrela' : 'estrelas'}`}
            onClick={() => setNota(n)}
            onMouseEnter={() => setSobre(n)}
            className="flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-110"
          >
            <Star
              className="h-7 w-7"
              aria-hidden="true"
              style={{ color: cor.marrom, fill: n <= mostrada ? cor.marrom : 'transparent' }}
              strokeWidth={1.6}
            />
          </button>
        ))}
      </div>
      <p className="mt-1 pl-2 text-[13px] text-secundario" aria-live="polite">
        Sua nota: {nota} de 5
      </p>
    </div>
  );
}

export function Componentes() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Bancada nome="Chip de categoria" estados="Padrão · Selecionado">
        <ChipsCategoria />
      </Bancada>
      <Bancada nome="Chip de informação" estados="Ícone + rótulo">
        <ChipsInfo />
      </Bancada>
      <Bancada nome="Interruptor" estados="Desligado · Ligado · Desabilitado">
        <div className="grid gap-1">
          <Interruptor rotulo="Ativar lembrete de refeição" />
          <Interruptor rotulo="Avisar quando repetir" inicial />
          <Interruptor rotulo="Indisponível" desabilitado />
        </div>
      </Bancada>
      <Bancada nome="Avaliação" estados="Vazia · Preenchida">
        <Avaliacao />
      </Bancada>
    </div>
  );
}
