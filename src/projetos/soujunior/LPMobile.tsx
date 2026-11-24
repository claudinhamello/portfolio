import { ImagemComReserva } from '../../components/ImagemComReserva';
import { solucao } from './dados';

/**
 * A LP mobile inteira dentro de um celular de aço, com rolagem própria:
 * no mobile a página foi desenhada como um fluxo contínuo, não seção por seção.
 */
export function LPMobile() {
  const { mobile } = solucao;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
      <div className="max-w-xl">
        <h3 className="text-[30px] leading-tight text-white">{mobile.titulo}</h3>
        <p className="mt-3 text-[16px] leading-relaxed text-white/80">{mobile.texto}</p>
        <p className="mt-6 text-[14px] font-semibold text-[#7DF9FF]">
          <span aria-hidden="true">↕ </span>Role a tela dentro do celular
        </p>
      </div>

      <div className="mx-auto w-[min(320px,82vw)]">
        <div className="aco-escovado relative rounded-[1.5rem] p-[5px]">
          <div className="rounded-[1.25rem] bg-[#0d0e11] p-[6px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            {/* Área rolável: recebe foco pelo teclado para rolar com as setas */}
            <div
              tabIndex={0}
              role="region"
              aria-label="Landing page no celular, com rolagem"
              className="h-[min(620px,70vh)] overflow-y-auto overscroll-contain rounded-[0.9rem] bg-[#090D16] outline-none [scrollbar-width:thin] focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
            >
              <ImagemComReserva
                src={mobile.imagem}
                alt={mobile.alt}
                width={390}
                height={6107}
                loading="lazy"
                className="block h-auto w-full"
                classeReserva="aspect-[390/6107] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
