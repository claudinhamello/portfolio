import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ao trocar de página: vai para o topo, ou para a seção indicada no endereço (ex.: "/#projetos").
 * Espera um quadro para a página nova já estar na tela.
 */
export function GerenciaRolagem() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const alvo = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (alvo) alvo.scrollIntoView();
      else window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
}
