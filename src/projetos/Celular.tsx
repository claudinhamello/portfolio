import { ImagemComReserva } from '../components/ImagemComReserva';

interface Props {
  src: string;
  alt: string;
  /** Altura da tela no Figma (com 360 de largura). A moldura acompanha, até o tamanho de um celular. */
  altura?: number;
  prioridade?: boolean;
  /** Usado pelo Celular3D: os botões vão para a lateral e a sombra para o chão */
  frente3d?: boolean;
  /** Desespelha a imagem da tela quando o aparelho inteiro está espelhado */
  telaEspelhada?: boolean;
}

const LARGURA = 360;

function BotoesLaterais() {
  return (
    <>
      <span aria-hidden="true" className="aco-botao absolute -left-[3px] top-[17%] h-[7%] w-[3px] rounded-l-sm" />
      <span aria-hidden="true" className="aco-botao absolute -left-[3px] top-[26%] h-[7%] w-[3px] rounded-l-sm" />
      <span aria-hidden="true" className="aco-botao absolute -right-[3px] top-[22%] h-[10%] w-[3px] rounded-r-sm" />
    </>
  );
}
const ALTURA_MAXIMA = 900; // telas mais longas aparecem cortadas embaixo, como se estivessem roladas

/**
 * Moldura de celular feita em código, para as telas puras exportadas do Figma.
 * A moldura segue a altura de cada tela, até ALTURA_MAXIMA.
 */
export function Celular({ src, alt, altura = 852, prioridade = false, frente3d = false, telaEspelhada = false }: Props) {
  const alturaVisivel = Math.min(altura, ALTURA_MAXIMA);
  return (
    // Corpo em aço escovado (ver .aco-escovado no index.css), com botões laterais no mesmo metal
    <div className={`aco-escovado relative rounded-[2.6rem] p-[5px] ${frente3d ? 'aco-escovado--sem-sombra' : ''}`}>
      {!frente3d && <BotoesLaterais />}
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
            className={`h-full w-full object-cover object-top ${telaEspelhada ? '-scale-x-100' : ''}`}
            classeReserva="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

interface Props3D extends Omit<Props, 'frente3d' | 'telaEspelhada'> {
  /** Inclinação em graus. y positivo vira a tela para a direita (mostra a lateral esquerda); x negativo mostra a base. */
  rotacao?: { x: number; y: number; z: number };
  /** Espessura do aparelho, em camadas de 1px */
  espessura?: number;
  /** Posicionamento (padrão: relative) */
  className?: string;
  /**
   * Espelha o aparelho na horizontal (vira para o outro lado), mantendo a tela legível.
   * Prefira isto a usar rotação y positiva, que cortava a tela em alguns navegadores.
   */
  espelhado?: boolean;
}

/**
 * Celular inclinado em 3D, com a lateral de aço visível.
 * A espessura é feita empilhando camadas com o formato do aparelho (extrusão), então a lateral
 * acompanha as curvas dos cantos. Os botões ficam no meio da espessura.
 *
 * Cada camada recebe a transformação 3D completa (com a própria perspectiva) e as camadas são
 * desenhadas da mais funda para a tela, na ordem do código. Assim não dependemos do navegador
 * ordenar as camadas em 3D (preserve-3d), o que variava entre navegadores e placas de vídeo e
 * chegava a desenhar a espessura por cima da tela.
 */
export function Celular3D({
  rotacao = { x: -6, y: -26, z: 5 },
  espessura = 14,
  className = 'relative',
  espelhado = false,
  ...celular
}: Props3D) {
  const giro = `perspective(1800px) rotateX(${rotacao.x}deg) rotateY(${rotacao.y}deg) rotateZ(${rotacao.z}deg)`;
  const naProfundidade = (px: number) => ({ transform: `${giro} translateZ(calc(${-px}px * var(--fator-espessura)))` });
  // Da camada mais funda (traseira) para a mais rasa
  const profundidades = Array.from({ length: espessura }, (_, i) => espessura - i);
  const meio = Math.round(espessura / 2);

  return (
    // A espessura encolhe em telas menores (--fator-espessura), para acompanhar o tamanho do aparelho
    <div
      className={`[--fator-espessura:0.5] sm:[--fator-espessura:0.75] lg:[--fator-espessura:1] ${espelhado ? '-scale-x-100' : ''} ${className}`}
    >
      {/* Sombra no chão */}
      <span
        aria-hidden="true"
        className="absolute -bottom-6 left-[12%] h-10 w-[80%] rounded-[50%] bg-[#12304D]/25 blur-2xl"
      />
      {profundidades.map((p) => (
        <span key={p} aria-hidden="true" className="absolute inset-0">
          <span
            className={`absolute inset-0 rounded-[2.6rem] ${p === espessura ? 'aco-traseira' : 'aco-lateral'}`}
            style={naProfundidade(p)}
          />
          {p === meio && (
            <span className="absolute inset-0" style={naProfundidade(p)}>
              <BotoesLaterais />
            </span>
          )}
        </span>
      ))}
      {/* A tela por último: fica sempre por cima da espessura */}
      <div className="relative" style={{ transform: giro }}>
        <Celular {...celular} frente3d telaEspelhada={espelhado} />
      </div>
    </div>
  );
}
