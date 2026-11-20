import type { ReactNode } from 'react';

interface Props {
  id: string;
  rotulo: string;
  titulo: ReactNode;
  apoio?: ReactNode;
  escuro?: boolean;
}

// Rótulo pequeno + título serifado + frase de apoio, alinhados à esquerda (padrão de todas as seções)
export function CabecalhoSecao({ id, rotulo, titulo, apoio, escuro = false }: Props) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-[13px] font-semibold uppercase tracking-[0.18em] ${escuro ? 'text-gelo' : 'text-roxo'}`}
      >
        {rotulo}
      </p>
      <h2
        id={id}
        className={`mt-3 text-[38px] leading-[1.08] sm:text-[44px] ${escuro ? 'text-white' : 'text-processo'}`}
      >
        {titulo}
      </h2>
      {apoio && (
        <p className={`mt-4 text-[17px] leading-relaxed sm:text-lg ${escuro ? 'text-white/80' : 'text-secundario'}`}>
          {apoio}
        </p>
      )}
    </div>
  );
}
