import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CabecalhoCase } from '../CabecalhoCase';
import { Celular } from '../Celular';
import { produto } from './dados';

const total = produto.telas.length;

// Distância circular até a tela ativa (-3..2 com 6 telas): o carrossel não tem fim
const distancia = (i: number, ativo: number) => ((i - ativo + total + Math.floor(total / 2)) % total) - Math.floor(total / 2);

export function ProdutoCarrossel() {
  const [ativo, setAtivo] = useState(0);
  const inicioToque = useRef<number | null>(null);
  const arrastou = useRef(false); // evita que o fim de um arraste conte como clique numa tela

  const ir = (passo: number) => setAtivo((a) => (a + passo + total) % total);

  const aoTeclar = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      ir(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      ir(1);
    }
  };

  // Arrastar para o lado (toque ou mouse) troca de tela
  const aoSoltar = (e: PointerEvent) => {
    if (inicioToque.current === null) return;
    const dx = e.clientX - inicioToque.current;
    inicioToque.current = null;
    arrastou.current = Math.abs(dx) > 40;
    if (arrastou.current) ir(dx < 0 ? 1 : -1);
  };

  const tela = produto.telas[ativo];

  return (
    <section
      id="produto"
      aria-labelledby="titulo-produto"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0A3A42_0%,#0E5964_45%,#3A2D78_100%)] py-20 text-white sm:bg-[linear-gradient(160deg,#0A3A42_0%,#0E5964_45%,#3A2D78_100%)] sm:py-28"
    >
      <div className="mx-auto max-w-pagina px-5 sm:px-8">
        <CabecalhoCase id="titulo-produto" escuro rotulo={produto.rotulo} titulo={produto.titulo} />
      </div>

      {/* Palco do coverflow */}
      <div
        role="group"
        aria-roledescription="carrossel"
        aria-label="Telas do BeReady"
        tabIndex={0}
        onKeyDown={aoTeclar}
        onPointerDown={(e) => (inicioToque.current = e.clientX)}
        onPointerUp={aoSoltar}
        onPointerCancel={() => (inicioToque.current = null)}
        className="relative mx-auto mt-14 h-[500px] max-w-pagina touch-pan-y select-none outline-none [--passo:clamp(84px,22vw,220px)] [--largura:clamp(190px,24vw,270px)] [perspective:1400px] focus-visible:ring-2 focus-visible:ring-[#CFBDFE] sm:h-[600px] lg:h-[720px]"
      >
        {/* Brilho atrás da tela central */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[min(90%,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(207,189,254,0.32),transparent)] blur-xl"
        />

        {produto.telas.map((t, i) => {
          const d = distancia(i, ativo);
          const visivel = Math.abs(d) <= 2;
          return (
            <div
              key={t.titulo}
              aria-hidden={d !== 0}
              onClick={() => d !== 0 && !arrastou.current && setAtivo(i)}
              className={`absolute left-1/2 top-1/2 w-[var(--largura)] transition-[transform,opacity,filter] duration-500 ease-[cubic-bezier(0.22,0.8,0.24,1)] ${
                d === 0 ? '' : 'cursor-pointer'
              }`}
              style={{
                transform: `translate(-50%, -50%) translateX(calc(var(--passo) * ${d})) translateZ(${-Math.abs(d) * 150}px) rotateY(${-d * 32}deg) scale(${1 - Math.abs(d) * 0.08})`,
                opacity: visivel ? [1, 0.6, 0.28][Math.abs(d)] : 0,
                filter: d === 0 ? 'none' : `saturate(0.7) brightness(${1 - Math.abs(d) * 0.12})`,
                zIndex: 10 - Math.abs(d),
                pointerEvents: visivel ? 'auto' : 'none',
              }}
            >
              <Celular src={t.imagem} altura={t.altura} alt={d === 0 ? `Tela do app: ${t.titulo}` : ''} />
            </div>
          );
        })}
      </div>

      {/* Legenda da tela ativa e navegação */}
      <div className="mx-auto mt-10 max-w-xl px-5 text-center">
        <div aria-live="polite">
          <h3 className="font-sans text-[20px] font-semibold">{tela.titulo}</h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#C9D3E3]">{tela.texto}</p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-5">
          {[
            { passo: -1, rotulo: 'Tela anterior', Icone: ArrowLeft },
            { passo: 1, rotulo: 'Próxima tela', Icone: ArrowRight },
          ].map(({ passo, rotulo, Icone }, k) => (
            <button
              key={rotulo}
              type="button"
              onClick={() => ir(passo)}
              aria-label={rotulo}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/[0.08] transition hover:border-[#CFBDFE] hover:bg-white/15 hover:text-[#CFBDFE] ${
                k === 1 ? 'order-3' : ''
              }`}
            >
              <Icone className="h-5 w-5" aria-hidden="true" />
            </button>
          ))}
          <span className="order-2 min-w-[3.5rem] text-[15px] font-medium tabular-nums text-gelo">
            {ativo + 1} / {total}
          </span>
        </div>
      </div>
    </section>
  );
}
