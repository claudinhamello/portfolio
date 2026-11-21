import type { ReactNode } from 'react';

interface Props {
  /** Endereço exibido na barra (só texto) */
  url?: string;
  children: ReactNode;
  className?: string;
}

/** Janela de navegador desenhada em código, para mostrar capturas de sites e landing pages. */
export function Navegador({ url, children, className = '' }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-processo/10 bg-white shadow-[0_40px_80px_-40px_rgba(18,59,90,0.45)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-nevoa bg-claro px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </span>
        {url && (
          <span className="mx-auto max-w-[70%] truncate rounded-full bg-white px-4 py-1 text-[12px] text-secundario ring-1 ring-nevoa">
            {url}
          </span>
        )}
        {/* equilibra o espaço das bolinhas, para o endereço ficar centralizado */}
        {url && <span aria-hidden="true" className="w-[42px]" />}
      </div>
      {children}
    </div>
  );
}
