import { useState, type ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string; classeReserva?: string };

/**
 * Imagem que, se o arquivo ainda não existir em /public, mostra um espaço reservado com o nome
 * do arquivo esperado. Quando o arquivo for adicionado, a imagem aparece sozinha.
 */
export function ImagemComReserva({ src, className = '', classeReserva = '', alt = '', ...resto }: Props) {
  const [falhou, setFalhou] = useState(false);

  if (falhou) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-[linear-gradient(135deg,#F0EDFF_0%,#EAF1FA_55%,#DDF6F5_100%)] p-4 ${classeReserva || className}`}
      >
        <span className="rounded-full border border-dashed border-secundario/40 px-3 py-1 text-center text-[12px] font-medium text-secundario">
          {src.split('/').pop()}
        </span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFalhou(true)} {...resto} />;
}
