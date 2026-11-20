import { useEffect, useState } from 'react';
import { Header, type SecaoAtiva } from './components/Header';
import { Hero } from './components/Hero';
import { Projetos } from './components/Projetos';
import { SobreMim } from './components/SobreMim';
import { ComoTrabalho } from './components/ComoTrabalho';
import { Ferramentas } from './components/Ferramentas';
import { Contato } from './components/Contato';
import { Rodape } from './components/Rodape';

export default function App() {
  const [secaoAtiva, setSecaoAtiva] = useState<SecaoAtiva>('inicio');

  // Marca no menu a seção que está no meio da tela.
  useEffect(() => {
    const ids: Exclude<SecaoAtiva, null>[] = ['inicio', 'projetos', 'sobre', 'processo', 'ferramentas', 'contato'];
    const visiveis = new Set<string>();
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => (e.isIntersecting ? visiveis.add(e.target.id) : visiveis.delete(e.target.id)));
        setSecaoAtiva(ids.find((id) => visiveis.has(id)) ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observador.observe(el);
    });
    return () => observador.disconnect();
  }, []);

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header secaoAtiva={secaoAtiva} />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Projetos />
        <SobreMim />
        <ComoTrabalho />
        <Ferramentas />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
