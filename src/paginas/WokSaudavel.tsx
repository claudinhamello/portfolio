import { useEffect, type CSSProperties } from 'react';
import { Header } from '../components/Header';
import { Contato } from '../components/Contato';
import { Rodape } from '../components/Rodape';
import { useSecaoAtiva } from '../hooks/useSecaoAtiva';
import { rotas, type ItemMenu } from '../conteudo';
import { Aprendizados, Entender, ComponentesWok, HeroWok, Processo, Solucao } from '../projetos/wok-saudavel/Secoes';

// "Início" volta para a Home
const inicio: ItemMenu = { id: 'home', rotulo: 'Início', href: rotas.home };

// Seções do case no header
const secoesMenu: ItemMenu[] = [
  { id: 'entender', rotulo: 'Pesquisa', href: '#entender' },
  { id: 'processo', rotulo: 'Processo', href: '#processo' },
  { id: 'solucao', rotulo: 'Solução', href: '#solucao' },
  { id: 'componentes', rotulo: 'Componentes', href: '#componentes' },
  { id: 'aprendizados', rotulo: 'Aprendizados', href: '#aprendizados' },
];

const secoesRodape = [
  { rotulo: 'Início', href: rotas.home },
  { rotulo: 'Pesquisa', href: '#entender' },
  { rotulo: 'Ideação e testes', href: '#processo' },
  { rotulo: 'Solução', href: '#solucao' },
  { rotulo: 'Componentes', href: '#componentes' },
  { rotulo: 'Aprendizados', href: '#aprendizados' },
  { rotulo: 'Contato', href: '#contato' },
];

const idsObservados = ['entender', 'processo', 'solucao', 'componentes', 'aprendizados', 'contato'];

// Destaques do projeto: o verde-oliva do app (#4A6741) e o marrom dos botões (#7A5A0F), em "R G B"
const coresDoProjeto = { '--acento': '74 103 65', '--acento-2': '122 90 15' } as CSSProperties;

export function WokSaudavel() {
  const secaoAtiva = useSecaoAtiva(idsObservados);

  useEffect(() => {
    const anterior = document.title;
    document.title = 'Wok Saudável — estudo de caso · Claudia Mello';
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
        <HeroWok />
        <Entender />
        <Processo />
        <Solucao />
        <ComponentesWok />
        <Aprendizados />
        <Contato />
      </main>
      <Rodape secoes={secoesRodape} />
    </div>
  );
}
