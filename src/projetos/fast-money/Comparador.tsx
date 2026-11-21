import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import { ImagemComReserva } from '../../components/ImagemComReserva';

interface Lado {
  imagem: string;
  rotulo: string;
  alt: string;
}

interface Props {
  antes: Lado;
  depois: Lado;
  /** Proporção das telas (largura / altura) */
  proporcao?: string;
  /** Nome do comparador para leitores de tela */
  nome: string;
}

/**
 * Comparador antes/depois com divisória arrastável (mouse, toque ou teclado).
 * A imagem "depois" fica por baixo; a "antes" é recortada até a posição da divisória.
 */
export function Comparador({ antes, depois, proporcao = '1440 / 1024', nome }: Props) {
  const [posicao, setPosicao] = useState(50);
  const [arrastando, setArrastando] = useState(false);
  const area = useRef<HTMLDivElement>(null);

  const moverPara = useCallback((clientX: number) => {
    const caixa = area.current?.getBoundingClientRect();
    if (!caixa) return;
    const porcento = ((clientX - caixa.left) / caixa.width) * 100;
    setPosicao(Math.min(100, Math.max(0, porcento)));
  }, []);

  const aoPressionar = (e: PointerEvent<HTMLDivElement>) => {
    // Só o botão principal do mouse; toque e caneta sempre
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setArrastando(true);
    moverPara(e.clientX);
  };

  const aoTeclar = (e: KeyboardEvent<HTMLDivElement>) => {
    const passo = e.shiftKey ? 10 : 2;
    const mapa: Record<string, number> = {
      ArrowLeft: posicao - passo,
      ArrowRight: posicao + passo,
      Home: 0,
      End: 100,
    };
    if (!(e.key in mapa)) return;
    e.preventDefault();
    setPosicao(Math.min(100, Math.max(0, mapa[e.key])));
  };

  return (
    <figure className="m-0">
      <div
        ref={area}
        onPointerDown={aoPressionar}
        onPointerMove={(e) => arrastando && moverPara(e.clientX)}
        onPointerUp={() => setArrastando(false)}
        onPointerCancel={() => setArrastando(false)}
        // pan-y: no celular a página continua rolando na vertical, e o arraste horizontal move a divisória
        className={`relative select-none overflow-hidden rounded-2xl border border-nevoa bg-white shadow-[0_40px_80px_-40px_rgba(18,59,90,0.45)] [touch-action:pan-y] ${
          arrastando ? 'cursor-grabbing' : 'cursor-ew-resize'
        }`}
        style={{ aspectRatio: proporcao }}
      >
        <ImagemComReserva
          src={depois.imagem}
          alt={depois.alt}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover object-top"
          classeReserva="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - posicao}% 0 0)` }}>
          <ImagemComReserva
            src={antes.imagem}
            alt={antes.alt}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-top"
            classeReserva="absolute inset-0 h-full w-full"
          />
        </div>

        {/* Rótulos fixos nos cantos */}
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-tinta/85 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur sm:bottom-5 sm:left-5">
          {antes.rotulo}
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-acento px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-white sm:bottom-5 sm:right-5">
          {depois.rotulo}
        </span>

        {/* Divisória */}
        <div
          className="pointer-events-none absolute inset-y-0 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgb(var(--acento)/0.35)]"
          style={{ left: `${posicao}%` }}
        />
        <div
          role="slider"
          tabIndex={0}
          aria-label={nome}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(posicao)}
          aria-valuetext={`${Math.round(posicao)}% mostrando ${antes.rotulo.toLowerCase()}`}
          onKeyDown={aoTeclar}
          className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-acento shadow-[0_8px_24px_-6px_rgba(18,59,90,0.5)] ring-1 ring-acento/20 transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-acento/40"
          style={{ left: `${posicao}%`, transform: `translate(-50%, -50%) scale(${arrastando ? 1.08 : 1})` }}
        >
          <ChevronsLeftRight className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    </figure>
  );
}
