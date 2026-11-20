import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { CabecalhoSecao } from './CabecalhoSecao';

// Edite aqui as etapas. A tag é o entregável típico da etapa.
const etapas = [
  {
    titulo: 'Entendimento do problema',
    texto: 'Compreensão do contexto, dos objetivos e das necessidades envolvidas para alinhar a solução ao propósito.',
    tag: 'Briefing',
  },
  {
    titulo: 'Pesquisa e descoberta',
    texto: 'Investigação das necessidades e dificuldades dos usuários, com métodos adequados a cada projeto.',

    tag: 'Entrevistas',
  },
  {
    titulo: 'Ideação e estruturação',
    texto: 'Organização das informações, definição de fluxos e exploração de soluções criativas para o produto.',
    tag: 'Fluxos',
  },
  {
    titulo: 'Prototipação',
    texto: 'Criação de wireframes, interfaces e protótipos para representar a experiência do usuário de forma funcional.',
    tag: 'Protótipo',
  },
  {
    titulo: 'Testes e evolução',
    texto: 'Avaliação das soluções, identificação de melhorias e refinamento da experiência para garantir o impacto.',
    tag: 'Testes de usabilidade',
  },
];

const INTERVALO_MS = 4000; // tempo de cada etapa ativa
const PAUSA_APOS_TOQUE_MS = 8000; // depois de um clique/toque, o ciclo espera isto para voltar

const prefereMenosMovimento = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function ComoTrabalho() {
  const [ativo, setAtivo] = useState(0);
  // Com "reduzir movimento" ligado, a sequência não avança sozinha (hover e clique continuam funcionando)
  const [tocando] = useState(() => !prefereMenosMovimento());
  const [emInteracao, setEmInteracao] = useState(false); // mouse em cima ou foco dentro da lista
  const [pausaToque, setPausaToque] = useState(false);
  const [visivel, setVisivel] = useState(false);
  const listaRef = useRef<HTMLOListElement>(null);
  const toqueTimer = useRef<number>();

  // Só avança enquanto a seção está na tela
  useEffect(() => {
    const el = listaRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setVisivel(e.isIntersecting), { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // O ciclo: um timeout por etapa, recriado sempre que a etapa ativa muda (troca manual ganha o tempo inteiro)
  const avancando = tocando && visivel && !emInteracao && !pausaToque;
  useEffect(() => {
    if (!avancando) return;
    const t = window.setTimeout(() => setAtivo((a) => (a + 1) % etapas.length), INTERVALO_MS);
    return () => window.clearTimeout(t);
  }, [avancando, ativo]);

  useEffect(() => () => window.clearTimeout(toqueTimer.current), []);

  const ativarPorToque = (i: number) => {
    setAtivo(i);
    setPausaToque(true);
    window.clearTimeout(toqueTimer.current);
    toqueTimer.current = window.setTimeout(() => setPausaToque(false), PAUSA_APOS_TOQUE_MS);
  };

  // Hover só conta para mouse de verdade: no toque, o "hover" pode ficar preso e travar o ciclo
  const soMouse = (fn: () => void) => (e: PointerEvent) => {
    if (e.pointerType === 'mouse') fn();
  };

  return (
    <section
      id="processo"
      aria-labelledby="titulo-processo"
      className="relative isolate overflow-hidden bg-processo py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_85%_0%,rgba(138,108,240,0.28),transparent_70%),radial-gradient(45%_55%_at_0%_100%,rgba(34,181,181,0.2),transparent_70%)]"
      />

      <div className="mx-auto max-w-pagina px-5 sm:px-8">
        <CabecalhoSecao
            id="titulo-processo"
            escuro
            rotulo="Processo"
            titulo="Como trabalho"
            apoio="Um processo flexível, que muda conforme o projeto, mas sempre parte da escuta antes do desenho."
          />

        <ol
          ref={listaRef}
          className="mt-14 grid gap-6 lg:grid-cols-5 lg:gap-5"
          onPointerEnter={soMouse(() => setEmInteracao(true))}
          onPointerLeave={soMouse(() => setEmInteracao(false))}
          // Só o foco por teclado pausa; o foco deixado por um clique de mouse não deve travar o ciclo
          onFocus={(e) => {
            if ((e.target as HTMLElement).matches(':focus-visible')) setEmInteracao(true);
          }}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setEmInteracao(false);
          }}
        >
          {etapas.map((etapa, i) => {
            const eAtivo = i === ativo;
            const ultimo = i === etapas.length - 1;
            return (
              <li
                key={etapa.titulo}
                className="relative grid grid-cols-[44px_1fr] gap-x-5 lg:flex lg:flex-col"
                onPointerEnter={soMouse(() => setAtivo(i))}
                onClick={() => ativarPorToque(i)}
              >
                {/* Conector até a próxima etapa: vertical no celular/tablet, horizontal no desktop.
                    Fica preenchido nas etapas já percorridas. */}
                {!ultimo && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[21px] top-[44px] h-[calc(100%-44px+1.5rem)] w-[2px] bg-white/15 lg:left-[44px] lg:top-[21px] lg:h-[2px] lg:w-[calc(100%-44px+1.25rem)]"
                  >
                    <span
                      className={`block h-full w-full origin-top bg-ametista transition-transform duration-500 ease-in-out lg:origin-left ${
                        i < ativo ? 'scale-100' : 'scale-y-0 lg:scale-x-0 lg:scale-y-100'
                      }`}
                    />
                  </span>
                )}

                <button
                  type="button"
                  aria-current={eAtivo ? 'step' : undefined}
                  aria-label={`Etapa ${i + 1}: ${etapa.titulo}`}
                  onFocus={() => setAtivo(i)}
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 font-serif text-xl transition-colors duration-300 ease-in-out ${
                    eAtivo ? 'border-ametista bg-ametista text-white' : 'border-ametista/70 bg-processo text-white'
                  }`}
                >
                  {i + 1}
                </button>

                <div
                  className={`flex flex-col rounded-2xl border-2 p-5 transition duration-300 ease-in-out lg:mt-6 lg:flex-1 ${
                    eAtivo
                      ? 'border-ametista bg-white/[0.08] shadow-[0_0_32px_-6px_rgba(138,108,240,0.65)] lg:-translate-y-1'
                      : 'border-white/10 bg-white/[0.04]'
                  }`}
                >
                  <h3 className="text-[22px] leading-tight lg:min-h-[2.5em]">{etapa.titulo}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-white/75 lg:flex-1">{etapa.texto}</p>
                  <span className="mt-5 self-start rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-gelo">
                    {etapa.tag}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
