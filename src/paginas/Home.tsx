import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projetos } from '../components/Projetos';
import { SobreMim } from '../components/SobreMim';
import { ComoTrabalho } from '../components/ComoTrabalho';
import { Ferramentas } from '../components/Ferramentas';
import { Contato } from '../components/Contato';
import { Rodape } from '../components/Rodape';
import { useSecaoAtiva } from '../hooks/useSecaoAtiva';
import type { ItemMenu } from '../conteudo';

const inicio: ItemMenu = { id: 'inicio', rotulo: 'Início', href: '#inicio' };

// Seções que entram no header depois de "Projetos"
const secoesMenu: ItemMenu[] = [
  { id: 'sobre', rotulo: 'Sobre mim', href: '#sobre' },
  { id: 'processo', rotulo: 'Como trabalho', href: '#processo' },
  { id: 'ferramentas', rotulo: 'Ferramentas', href: '#ferramentas' },
];

const secoesRodape = [
  inicio,
  { rotulo: 'Projetos', href: '#projetos' },
  ...secoesMenu,
  { rotulo: 'Contato', href: '#contato' },
];

const idsObservados = ['inicio', 'projetos', 'sobre', 'processo', 'ferramentas', 'contato'];

export function Home() {
  const secaoAtiva = useSecaoAtiva(idsObservados, 'inicio');

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header secaoAtiva={secaoAtiva} inicio={inicio} secoes={secoesMenu} />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Projetos />
        <SobreMim />
        <ComoTrabalho />
        <Ferramentas />
        <Contato />
      </main>
      <Rodape secoes={secoesRodape} />
    </>
  );
}
