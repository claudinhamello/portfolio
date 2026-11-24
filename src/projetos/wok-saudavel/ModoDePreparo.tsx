import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Celular } from '../Celular';
import { solucao } from './dados';

/**
 * O fluxo do app como o "modo de preparo" de uma receita: passos numerados à esquerda,
 * a tela do passo atual no celular à direita.
 */
export function ModoDePreparo() {
  const [passo, setPasso] = useState(0);
  const { passos } = solucao;
  const atual = passos[passo];
  const ultimo = passos.length - 1;

  return (
    <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
      {/* No celular, a lista dá lugar ao texto do passo atual, logo abaixo da tela */}
      <div className="hidden lg:block">
        <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#F2B705]">Modo de preparo</h3>
        <ol className="mt-6 grid gap-1">
          {passos.map((p, i) => {
            const ativo = i === passo;
            return (
              <li key={p.imagem}>
                <button
                  type="button"
                  aria-current={ativo ? 'step' : undefined}
                  aria-controls="tela-do-passo"
                  onClick={() => setPasso(i)}
                  className={`group flex w-full gap-4 rounded-2xl px-4 py-3 text-left transition ${
                    ativo ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[14px] font-bold transition ${
                      ativo ? 'bg-[#F2B705] text-[#2B3A26]' : 'border border-white/30 text-white/70 group-hover:border-white/60'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className={`block text-[17px] font-semibold ${ativo ? 'text-white' : 'text-white/75'}`}>{p.titulo}</span>
                    {/* O texto do passo só abre no passo atual, como numa receita que se lê aos poucos */}
                    <span
                      className={`grid transition-[grid-template-rows] duration-300 ${ativo ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-1.5 text-[15px] leading-relaxed text-white/80">{p.texto}</span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mx-auto w-[min(300px,78vw)] lg:sticky lg:top-28">
        <div id="tela-do-passo" key={atual.imagem} className="animate-[aparecer_0.4s_ease]">
          <Celular src={atual.imagem} alt={atual.alt} altura={atual.altura} />
        </div>
        <div className="mt-6 lg:hidden" aria-live="polite">
          <p className="text-[18px] font-semibold text-white">{atual.titulo}</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-white/80">{atual.texto}</p>
        </div>
        <div className="mt-7 flex items-center justify-between gap-4">
          <p className="text-[14px] text-white/75" aria-live="polite">
            Passo {passo + 1} de {passos.length}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPasso((p) => Math.max(0, p - 1))}
              disabled={passo === 0}
              aria-label="Passo anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10 disabled:opacity-35 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setPasso((p) => Math.min(ultimo, p + 1))}
              disabled={passo === ultimo}
              aria-label="Próximo passo"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F2B705] text-[#2B3A26] transition hover:-translate-y-0.5 disabled:opacity-35 disabled:hover:translate-y-0"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
