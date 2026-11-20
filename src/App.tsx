import { useEffect, useState } from 'react';
import { Header, type SecaoAtiva } from './components/Header';
import { Hero } from './components/Hero';

export default function App() {
  const [secaoAtiva, setSecaoAtiva] = useState<SecaoAtiva>('inicio');

  // Marca no menu a seção visível: "Início" (hero) ou "Projetos".
  useEffect(() => {
    const ids: Exclude<SecaoAtiva, null>[] = ['inicio', 'projetos'];
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
        {/* Âncoras das próximas seções — conteúdo ainda a construir */}
        <section id="projetos" aria-label="Projetos" />
        <section id="sobre" aria-label="Sobre mim" />
        <section id="processo" aria-label="Como trabalho" />
        <section id="contato" aria-label="Contato" />
      </main>
    </>
  );
}
