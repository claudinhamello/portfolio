import { useEffect, type CSSProperties } from 'react';
import { Header } from '../components/Header';
import { Contato } from '../components/Contato';
import { Rodape } from '../components/Rodape';
import { useSecaoAtiva } from '../hooks/useSecaoAtiva';
import { rotas, type ItemMenu } from '../conteudo';
import {
  Aprender,
  Contexto,
  Entender,
  FichaFastMoney,
  HeroFastMoney,
  Iniciar,
  LinhaDoTempo,
  Refinar,
  Solucao,
} from '../projetos/fast-money/Secoes';

// "Início" volta para a Home
const inicio: ItemMenu = { id: 'home', rotulo: 'Início', href: rotas.home };

// Os capítulos do case no header
const secoesMenu: ItemMenu[] = [
  { id: 'entender', rotulo: 'Entender', href: '#entender' },
  { id: 'iniciar', rotulo: 'Design', href: '#iniciar' },
  { id: 'refinar', rotulo: 'Refinar', href: '#refinar' },
  { id: 'solucao', rotulo: 'Solução', href: '#solucao' },
  { id: 'aprender', rotulo: 'Aprender', href: '#aprender' },
];

const secoesRodape = [
  { rotulo: 'Início', href: rotas.home },
  { rotulo: 'Contexto', href: '#contexto' },
  ...secoesMenu,
  { rotulo: 'Contato', href: '#contato' },
];

const idsObservados = ['contexto', 'entender', 'iniciar', 'refinar', 'solucao', 'aprender', 'contato'];

// Destaques do Fast Money: azul-marinho #214177 (cor das telas) e azul médio #3A6EA5, em "R G B"
const coresDoProjeto = { '--acento': '33 65 119', '--acento-2': '58 110 165' } as CSSProperties;

export function FastMoney() {
  const secaoAtiva = useSecaoAtiva(idsObservados);

  useEffect(() => {
    const anterior = document.title;
    document.title = 'Fast Money — estudo de caso · Claudia Mello';
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
        <HeroFastMoney />
        <FichaFastMoney />
        <Contexto />
        <LinhaDoTempo secaoAtiva={secaoAtiva} />
        <Entender />
        <Iniciar />
        <Refinar />
        <Solucao />
        <Aprender />
        <Contato />
      </main>
      <Rodape secoes={secoesRodape} />
    </div>
  );
}
