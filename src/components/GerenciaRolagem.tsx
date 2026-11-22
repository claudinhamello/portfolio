import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Posição de rolagem de cada entrada do histórico (pela `key` do React Router)
const posicoes = new Map<string, number>();

/**
 * Rolagem entre páginas:
 * - Voltar/avançar do navegador: retorna ao ponto em que a pessoa estava naquela página.
 * - Link novo: vai para o topo, ou para a seção indicada no endereço (ex.: "/#projetos").
 *
 * A restauração automática do navegador fica desligada: ela agia depois da página montar e
 * disputava com esta lógica, levando a Home para uma seção errada ao voltar de um case.
 */
export function GerenciaRolagem() {
  const { pathname, hash, key } = useLocation();
  const tipo = useNavigationType();

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  // Guarda a posição enquanto a pessoa rola a página atual
  useEffect(() => {
    const salvar = () => posicoes.set(key, window.scrollY);
    window.addEventListener('scroll', salvar, { passive: true });
    return () => window.removeEventListener('scroll', salvar);
  }, [key]);

  useEffect(() => {
    let id = 0;
    const salva = posicoes.get(key);

    if (tipo === 'POP' && salva !== undefined) {
      // Tenta por alguns quadros: a página pode ainda estar crescendo (imagens, fontes)
      let tentativas = 0;
      const restaurar = () => {
        window.scrollTo({ top: salva, behavior: 'instant' as ScrollBehavior });
        if (Math.abs(window.scrollY - salva) > 2 && tentativas++ < 60) id = requestAnimationFrame(restaurar);
      };
      id = requestAnimationFrame(restaurar);
    } else {
      // Espera um quadro para a página nova já estar na tela
      id = requestAnimationFrame(() => {
        const alvo = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
        if (alvo) alvo.scrollIntoView();
        else window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      });
    }
    return () => cancelAnimationFrame(id);
  }, [pathname, hash, key, tipo]);

  return null;
}
