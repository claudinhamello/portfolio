import type { ReactNode } from 'react';

interface Props {
  /** Conteúdo da tela (normalmente uma imagem que ocupa a largura toda) */
  children: ReactNode;
  className?: string;
}

/**
 * Notebook feito em código, no mesmo aço escovado do Celular (ver .aco-escovado no index.css).
 * Os paddings em % seguem a largura, então a moldura escala junto com o tamanho do notebook.
 */
export function Notebook({ children, className = '' }: Props) {
  return (
    <div className={`relative ${className}`}>
      {/* Tampa: aço por fora, moldura preta e a tela */}
      <div className="aco-escovado aco-escovado--sem-sombra relative mx-[6%] rounded-t-[clamp(10px,1.6vw,18px)] rounded-b-[4px] p-[0.7%]">
        <div className="relative rounded-t-[clamp(8px,1.3vw,15px)] rounded-b-[2px] bg-[#0d0e11] px-[2%] pb-[2.6%] pt-[2.6%] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
          {/* Câmera */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[0.9%] h-[clamp(3px,0.45vw,5px)] w-[clamp(3px,0.45vw,5px)] -translate-x-1/2 rounded-full bg-[#2a2f36] ring-1 ring-white/10"
          />
          <div className="overflow-hidden rounded-[2px] bg-white">{children}</div>
        </div>
      </div>

      {/* Base: mais larga que a tampa, com o rebaixo para abrir no centro */}
      <div aria-hidden="true" className="relative">
        <div className="aco-escovado aco-escovado--sem-sombra h-[clamp(9px,1.5vw,16px)] rounded-b-[50%_100%] rounded-t-[3px]" />
        <span className="absolute left-1/2 top-0 h-[45%] w-[16%] -translate-x-1/2 rounded-b-[8px] bg-gradient-to-b from-[#6f767e] to-[#a9afb5] shadow-[inset_0_1px_2px_rgba(0,0,0,0.35)]" />
        {/* Sombra no chão */}
        <span className="absolute inset-x-[4%] -bottom-3 -z-10 h-6 rounded-[50%] bg-black/45 blur-xl" />
      </div>
    </div>
  );
}
