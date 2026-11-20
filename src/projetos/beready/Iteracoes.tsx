import { useState, type KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { CabecalhoCase } from '../CabecalhoCase';
import { iteracoes } from './dados';

const { itens, tambemOuvi } = iteracoes;
const TAMBEM = itens.length; // índice do item "Também ouvi"
const total = itens.length;
const num = (i: number) => String(i + 1).padStart(2, '0');

function Colunas({ apareceu, direcao }: { apareceu: string; direcao: string }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-0">
      <div className="md:pr-8">
        <h4 className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-processo">O que apareceu</h4>
        <p className="mt-3 text-[16px] leading-[1.7] text-secundario">{apareceu}</p>
      </div>
      <div className="md:border-l md:border-nevoa md:pl-8">
        <h4 className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-acento-2">Direção para o hi-fi</h4>
        <p className="mt-3 text-[16px] leading-[1.7] text-secundario">{direcao}</p>
      </div>
    </div>
  );
}

function PainelTambemOuvi() {
  return (
    <>
      <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-acento">{tambemOuvi.rotulo}</p>
      <h3 className="mt-3 font-sans text-[24px] font-semibold text-processo">{tambemOuvi.titulo}</h3>
      <p className="mt-5 max-w-2xl text-[16px] leading-[1.7] text-secundario">{tambemOuvi.texto}</p>
    </>
  );
}

export function Iteracoes() {
  const [ativo, setAtivo] = useState(0); // desktop: lista + painel
  const [aberto, setAberto] = useState<number | null>(0); // celular: sanfona

  const ir = (passo: number) => setAtivo((a) => (a + passo + total + 1) % (total + 1));

  // Setas do teclado percorrem a lista de temas
  const aoTeclar = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const proximo = (ativo + (e.key === 'ArrowDown' ? 1 : -1) + total + 1) % (total + 1);
    setAtivo(proximo);
    document.getElementById(`tema-${proximo}`)?.focus();
  };

  const item = ativo < TAMBEM ? itens[ativo] : null;

  return (
    <section id="iteracoes" aria-labelledby="titulo-iteracoes" className="bg-claro py-20 sm:py-28">
      <div className="mx-auto max-w-pagina px-5 sm:px-8">
        <CabecalhoCase id="titulo-iteracoes" rotulo={iteracoes.rotulo} titulo={iteracoes.titulo} texto={iteracoes.texto} />

        {/* Desktop: lista de temas à esquerda e painel do tema selecionado à direita */}
        <div className="mt-14 hidden gap-8 lg:grid lg:grid-cols-[minmax(260px,1fr)_2.2fr]">
          <div role="tablist" aria-label="Temas apontados nos testes" aria-orientation="vertical" onKeyDown={aoTeclar} className="flex flex-col gap-2.5">
            {[...itens.map((t, i) => ({ chave: i, rotulo: t.curto })), { chave: TAMBEM, rotulo: tambemOuvi.titulo }].map(
              ({ chave, rotulo }) => {
                const selecionado = chave === ativo;
                const eTambem = chave === TAMBEM;
                return (
                  <button
                    key={chave}
                    id={`tema-${chave}`}
                    role="tab"
                    type="button"
                    aria-selected={selecionado}
                    aria-controls="painel-iteracao"
                    tabIndex={selecionado ? 0 : -1}
                    onClick={() => setAtivo(chave)}
                    className={`relative flex items-center gap-3 overflow-hidden rounded-2xl border px-5 py-4 text-left transition ${
                      eTambem
                        ? `bg-lilas ${selecionado ? 'border-acento/40' : 'border-transparent hover:border-acento/30'}`
                        : selecionado
                          ? 'border-acento/30 bg-white shadow-[0_14px_30px_-20px_rgba(18,59,90,0.4)]'
                          : 'border-nevoa bg-white/50 hover:bg-white'
                    }`}
                  >
                    {selecionado && <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-acento" />}
                    {eTambem ? (
                      <span className="flex flex-col">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-acento">
                          {tambemOuvi.rotulo}
                        </span>
                        <span className="text-[15px] font-semibold text-processo">{rotulo}</span>
                      </span>
                    ) : (
                      <>
                        <span className="text-[13px] font-semibold tabular-nums text-acento">{num(chave)}</span>
                        <span className="text-[15px] font-semibold text-processo">{rotulo}</span>
                      </>
                    )}
                  </button>
                );
              },
            )}
          </div>

          <div
            id="painel-iteracao"
            role="tabpanel"
            aria-labelledby={`tema-${ativo}`}
            className={`flex min-h-[520px] flex-col rounded-3xl border p-10 ${item ? 'border-nevoa bg-white' : 'border-transparent bg-lilas'}`}
          >
            <div key={ativo} className="animate-[aparecer_0.35s_ease-out]">
              {item ? (
                <>
                  <p className="flex items-baseline gap-2">
                    <span className="font-serif text-[64px] leading-none text-acento">{num(ativo)}</span>
                    <span className="text-[14px] text-secundario">/ {num(total - 1)}</span>
                  </p>
                  <h3 className="mt-4 font-sans text-[24px] font-semibold text-processo">{item.titulo}</h3>
                  <div className="mt-8">
                    <Colunas apareceu={item.apareceu} direcao={item.direcao} />
                  </div>
                </>
              ) : (
                <PainelTambemOuvi />
              )}
            </div>

            <div className="mt-auto flex justify-end gap-3 pt-8">
              {[
                { passo: -1, rotulo: 'Tema anterior', Icone: ArrowLeft },
                { passo: 1, rotulo: 'Próximo tema', Icone: ArrowRight },
              ].map(({ passo, rotulo, Icone }) => (
                <button
                  key={rotulo}
                  type="button"
                  onClick={() => ir(passo)}
                  aria-label={rotulo}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-nevoa bg-white text-processo transition hover:border-acento hover:text-acento"
                >
                  <Icone className="h-4 w-4" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Celular e tablet: sanfona, um tema aberto por vez */}
        <ul className="mt-10 flex flex-col gap-3 lg:hidden">
          {[...itens.map((t, i) => ({ chave: i, t })), { chave: TAMBEM, t: null }].map(({ chave, t }) => {
            const estaAberto = aberto === chave;
            return (
              <li key={chave} className={`overflow-hidden rounded-2xl border ${t ? 'border-nevoa bg-white' : 'border-transparent bg-lilas'}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={estaAberto}
                    aria-controls={`sanfona-${chave}`}
                    onClick={() => setAberto(estaAberto ? null : chave)}
                    className="flex w-full items-center gap-3 px-5 py-4 text-left"
                  >
                    {t ? (
                      <span className="text-[13px] font-semibold tabular-nums text-acento">{num(chave)}</span>
                    ) : (
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-acento">{tambemOuvi.rotulo}</span>
                    )}
                    <span className="flex-1 font-sans text-[16px] font-semibold text-processo">
                      {t ? t.titulo : tambemOuvi.titulo}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-secundario transition-transform ${estaAberto ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div id={`sanfona-${chave}`} hidden={!estaAberto} className="px-5 pb-6">
                  {t ? <Colunas apareceu={t.apareceu} direcao={t.direcao} /> : <p className="text-[16px] leading-[1.7] text-secundario">{tambemOuvi.texto}</p>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
