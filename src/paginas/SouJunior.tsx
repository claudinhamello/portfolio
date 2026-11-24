import { useEffect, type CSSProperties } from 'react';
import { Header } from '../components/Header';
import { Contato } from '../components/Contato';
import { Rodape } from '../components/Rodape';
import { useSecaoAtiva } from '../hooks/useSecaoAtiva';
import { rotas, type ItemMenu } from '../conteudo';
import {
  Aprendizados,
  Desafio,
  DesignSystem,
  FichaSouJunior,
  HeroSouJunior,
  Solucao,
  Squad,
} from '../projetos/soujunior/Secoes';

// "Início" volta para a Home
const inicio: ItemMenu = { id: 'home', rotulo: 'Início', href: rotas.home };

// Seções do case no header
const secoesMenu: ItemMenu[] = [
  { id: 'squad', rotulo: 'A squad', href: '#squad' },
  { id: 'desafio', rotulo: 'Desafio', href: '#desafio' },
  { id: 'solucao', rotulo: 'A LP', href: '#solucao' },
  { id: 'handoff', rotulo: 'Handoff', href: '#handoff' },
  { id: 'aprendizados', rotulo: 'Aprendizados', href: '#aprendizados' },
];

const secoesRodape = [
  { rotulo: 'Início', href: rotas.home },
  { rotulo: 'A squad', href: '#squad' },
  { rotulo: 'O desafio', href: '#desafio' },
  { rotulo: 'A landing page', href: '#solucao' },
  { rotulo: 'Design system e handoff', href: '#handoff' },
  { rotulo: 'Aprendizados', href: '#aprendizados' },
  { rotulo: 'Contato', href: '#contato' },
];

const idsObservados = ['squad', 'desafio', 'solucao', 'handoff', 'aprendizados', 'contato'];

// Destaques do projeto: o azul de destaque da SouJunior (#0E14BF) e um índigo legível (#4F46E5), em "R G B".
// O ciano neon da LP (#00F0FF) só aparece sobre fundo escuro, onde tem contraste.
const coresDoProjeto = { '--acento': '14 20 191', '--acento-2': '79 70 229' } as CSSProperties;

export function SouJunior() {
  const secaoAtiva = useSecaoAtiva(idsObservados);

  useEffect(() => {
    const anterior = document.title;
    document.title = 'Hackathon SouJunior — estudo de caso · Claudia Mello';
    return () => {
      document.title = anterior;
    };
  }, []);

  return (
    <div style={coresDoProjeto}>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header secaoAtiva={secaoAtiva} inicio={inicio} secoes={secoesMenu} />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <HeroSouJunior />
        <FichaSouJunior />
        <Squad />
        <Desafio />
        <Solucao />
        <DesignSystem />
        <Aprendizados />
        <Contato />
      </main>
      <Rodape secoes={secoesRodape} />
    </div>
  );
}
