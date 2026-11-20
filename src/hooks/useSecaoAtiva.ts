import { useEffect, useState } from 'react';

/** Retorna o id da seção que está no meio da tela (para destacar o item do menu). */
export function useSecaoAtiva(ids: string[], inicial: string | null = null) {
  const [ativa, setAtiva] = useState<string | null>(inicial);
  const chave = ids.join(',');

  useEffect(() => {
    const lista = chave.split(',');
    const visiveis = new Set<string>();
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => (e.isIntersecting ? visiveis.add(e.target.id) : visiveis.delete(e.target.id)));
        setAtiva(lista.find((id) => visiveis.has(id)) ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    lista.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observador.observe(el);
    });
    return () => observador.disconnect();
  }, [chave]);

  return ativa;
}
