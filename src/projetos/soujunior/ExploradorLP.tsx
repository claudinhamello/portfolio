import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImagemComReserva } from '../../components/ImagemComReserva';
import { Navegador } from '../Navegador';
import { solucao } from './dados';

/**
 * Percorre as seções da LP como as fases de um jogo: a lista à esquerda mostra a seção e o requisito
 * do briefing que ela atende, a janela à direita mostra a seção no desktop.
 */
export function ExploradorLP() {
  const [atual, setAtual] = useState(0);
  const { secoes } = solucao;
  const s = secoes[atual];
  const ultima = secoes.length - 1;

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
      {/* Fases: no celular viram uma fileira com rolagem lateral */}
      <ol className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
        {secoes.map((sec, i) => {
          const ativa = i === atual;
          return (
            <li key={sec.id} className="shrink-0">
              <button
                type="button"
                aria-current={ativa ? 'step' : undefined}
                aria-controls="tela-da-secao"
                onClick={() => setAtual(i)}
                className={`group flex w-full items-center gap-3 rounded-xl border px-4 py-2.5 text-left transition ${
                  ativa
                    ? 'border-[#00F0FF]/60 bg-[#00F0FF]/10 text-white'
                    : 'border-transparent text-white/65 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span
                  className={`font-mono text-[12px] font-bold ${ativa ? 'text-[#00F0FF]' : 'text-white/65 group-hover:text-white/85'}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="whitespace-nowrap text-[15px] font-semibold">{sec.nome}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div>
        <div id="tela-da-secao" key={s.id} className="animate-[aparecer_0.4s_ease]">
          <Navegador url="apoia.se/soujunior · landing page" className="border-white/10">
            <ImagemComReserva
              src={s.imagem}
              alt={s.alt}
              width={s.largura}
              height={s.altura}
              loading="lazy"
              className="block h-auto w-full bg-[#090D16]"
              classeReserva="w-full"
              style={{ aspectRatio: `${s.largura} / ${s.altura}` }}
            />
          </Navegador>
          <div className="mt-6 grid gap-3 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-6">
            <p className="w-fit rounded-full border border-[#8B5CF6]/60 bg-[#8B5CF6]/15 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#C4B5FD]">
              Briefing: {s.requisito}
            </p>
            <p className="text-[16px] leading-relaxed text-white/80">{s.texto}</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-[14px] text-white/70" aria-live="polite">
            Seção {atual + 1} de {secoes.length}: <span className="font-semibold text-white">{s.nome}</span>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setAtual((a) => Math.max(0, a - 1))}
              disabled={atual === 0}
              aria-label="Seção anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10 disabled:opacity-35 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setAtual((a) => Math.min(ultima, a + 1))}
              disabled={atual === ultima}
              aria-label="Próxima seção"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00F0FF] text-[#090D16] transition hover:-translate-y-0.5 disabled:opacity-35 disabled:hover:translate-y-0"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
