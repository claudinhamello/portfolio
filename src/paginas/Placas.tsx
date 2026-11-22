import { useEffect, type CSSProperties } from 'react';
import { Header } from '../components/Header';
import { Contato } from '../components/Contato';
import { Rodape } from '../components/Rodape';
import { useSecaoAtiva } from '../hooks/useSecaoAtiva';
import { rotas, type ItemMenu } from '../conteudo';
import {
  Acessibilidade,
  Apresentacao,
  Aprendizados,
  Dores,
  FichaPlacas,
  HeroPlacas,
  NaRua,
  Pesquisa,
  Placa,
  Problema,
} from '../projetos/placas/Secoes';

// "Início" volta para a Home
const inicio: ItemMenu = { id: 'home', rotulo: 'Início', href: rotas.home };

// Seções do case no header
const secoesMenu: ItemMenu[] = [
  { id: 'pesquisa', rotulo: 'Pesquisa', href: '#pesquisa' },
  { id: 'placa', rotulo: 'A placa', href: '#placa' },
  { id: 'na-rua', rotulo: 'Na rua', href: '#na-rua' },
  { id: 'aprendizados', rotulo: 'Aprendizados', href: '#aprendizados' },
];

const secoesRodape = [
  { rotulo: 'Início', href: rotas.home },
  { rotulo: 'O problema', href: '#problema' },
  { rotulo: 'Pesquisa', href: '#pesquisa' },
  { rotulo: 'Pontos problemáticos', href: '#dores' },
  { rotulo: 'A placa', href: '#placa' },
  { rotulo: 'Na rua', href: '#na-rua' },
  { rotulo: 'Devolutiva à cidade', href: '#apresentacao' },
  { rotulo: 'Acessibilidade', href: '#acessibilidade' },
  { rotulo: 'Aprendizados', href: '#aprendizados' },
  { rotulo: 'Contato', href: '#contato' },
];

const idsObservados = ['problema', 'pesquisa', 'dores', 'placa', 'na-rua', 'apresentacao', 'acessibilidade', 'aprendizados', 'contato'];

// Destaques do projeto: o azul-escuro da placa (#141A80) e o cinza do asfalto (#566070), em "R G B"
const coresDoProjeto = { '--acento': '20 26 128', '--acento-2': '86 96 112' } as CSSProperties;

export function Placas() {
  const secaoAtiva = useSecaoAtiva(idsObservados);

  useEffect(() => {
    const anterior = document.title;
    document.title = 'Redesign de placas de ruas — estudo de caso · Claudia Mello';
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
        <HeroPlacas />
        <FichaPlacas />
        <Problema />
        <Pesquisa />
        <Dores />
        <Placa />
        <NaRua />
        <Apresentacao />
        <Acessibilidade />
        <Aprendizados />
        <Contato />
      </main>
      <Rodape secoes={secoesRodape} />
    </div>
  );
}
