import type { ReactNode } from 'react';

interface Props {
  id: string;
  rotulo: string;
  titulo: ReactNode;
  texto?: ReactNode;
  escuro?: boolean;
}

// Cabeçalho das seções das páginas de projeto: rótulo na cor 2 do projeto + título serifado + texto
export function CabecalhoCase({ id, rotulo, titulo, texto, escuro = false }: Props) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-[13px] font-semibold uppercase tracking-[0.16em] ${escuro ? 'text-gelo' : 'text-acento-2'}`}
      >
        {rotulo}
      </p>
      <h2
        id={id}
        className={`mt-4 text-[36px] leading-[1.08] sm:text-[48px] ${escuro ? 'text-white' : 'text-processo'}`}
      >
        {titulo}
      </h2>
      {texto && (
        <p className={`mt-5 max-w-2xl text-[17px] leading-relaxed ${escuro ? 'text-white/80' : 'text-secundario'}`}>
          {texto}
        </p>
      )}
    </div>
  );
}
