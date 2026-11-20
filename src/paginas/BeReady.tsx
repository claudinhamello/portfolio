import { useEffect, type CSSProperties } from 'react';
import { Header } from '../components/Header';
import { Contato } from '../components/Contato';
import { Rodape } from '../components/Rodape';
import { useSecaoAtiva } from '../hooks/useSecaoAtiva';
import { rotas, type ItemMenu } from '../conteudo';
import {
  DesignSystem,
  Equipe,
  FichaProjeto,
  HeroBeReady,
  Pesquisa,
  Problema,
  ProximosPassos,
} from '../projetos/beready/Secoes';
import { ProdutoCarrossel } from '../projetos/beready/ProdutoCarrossel';
import { Iteracoes } from '../projetos/beready/Iteracoes';

// "Início" volta para a Home
const inicio: ItemMenu = { id: 'home', rotulo: 'Início', href: rotas.home };

// Seções do case no header (as mais procuradas por quem recruta)
const secoesMenu: ItemMenu[] = [
  { id: 'pesquisa', rotulo: 'Pesquisa', href: '#pesquisa' },
  { id: 'produto', rotulo: 'O produto', href: '#produto' },
  { id: 'iteracoes', rotulo: 'Iterações', href: '#iteracoes' },
  { id: 'design-system', rotulo: 'Design system', href: '#design-system' },
];

const secoesRodape = [
  { rotulo: 'Início', href: rotas.home },
  { rotulo: 'O problema', href: '#problema' },
  ...secoesMenu,
  { rotulo: 'Próximos passos', href: '#proximos-passos' },
  { rotulo: 'Equipe', href: '#equipe' },
  { rotulo: 'Contato', href: '#contato' },
];

const idsObservados = ['problema', 'pesquisa', 'produto', 'iteracoes', 'design-system', 'proximos-passos', 'equipe', 'contato'];

// Destaques do BeReady (roxo e azul-petróleo do app), em "R G B". O resto segue o portfólio.
const coresDoProjeto = { '--acento': '103 78 170', '--acento-2': '14 89 100' } as CSSProperties;

export function BeReady() {
  const secaoAtiva = useSecaoAtiva(idsObservados);

  useEffect(() => {
    const anterior = document.title;
    document.title = 'BeReady — estudo de caso · Claudia Mello';
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
        <HeroBeReady />
        <FichaProjeto />
        <Problema />
        <Pesquisa />
        <ProdutoCarrossel />
        <Iteracoes />
        <DesignSystem />
        <ProximosPassos />
        <Equipe />
        <Contato />
      </main>
      <Rodape secoes={secoesRodape} />
    </div>
  );
}
