import { ImagemComReserva } from '../components/ImagemComReserva';

interface Props {
  src: string;
  alt: string;
  /** Altura da tela no Figma (com 360 de largura). A moldura acompanha, até o tamanho de um celular. */
  altura?: number;
  prioridade?: boolean;
}

const LARGURA = 360;
const ALTURA_MAXIMA = 900; // telas mais longas aparecem cortadas embaixo, como se estivessem roladas

/**
 * Moldura de celular feita em código, para as telas puras exportadas do Figma.
 * A moldura segue a altura de cada tela, até ALTURA_MAXIMA.
 */
export function Celular({ src, alt, altura = 852, prioridade = false }: Props) {
  const alturaVisivel = Math.min(altura, ALTURA_MAXIMA);
  return (
    // Corpo em aço escovado (ver .aco-escovado no index.css), com botões laterais no mesmo metal
    <div className="aco-escovado relative rounded-[2.6rem] p-[5px]">
      <span aria-hidden="true" className="aco-botao absolute -left-[3px] top-[17%] h-[7%] w-[3px] rounded-l-sm" />
      <span aria-hidden="true" className="aco-botao absolute -left-[3px] top-[26%] h-[7%] w-[3px] rounded-l-sm" />
      <span aria-hidden="true" className="aco-botao absolute -right-[3px] top-[22%] h-[10%] w-[3px] rounded-r-sm" />
      {/* Moldura preta fina em volta da tela */}
      <div className="rounded-[2.3rem] bg-[#0d0e11] p-[6px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <div
          className="relative overflow-hidden rounded-[1.9rem] bg-white"
          style={{ aspectRatio: `${LARGURA} / ${alturaVisivel}` }}
        >
          <ImagemComReserva
            src={src}
            alt={alt}
            width={LARGURA}
            height={altura}
            {...(prioridade ? { fetchpriority: 'high' } : { loading: 'lazy' as const })}
            className="h-full w-full object-cover object-top"
            classeReserva="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
