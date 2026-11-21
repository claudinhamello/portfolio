import { useEffect, type CSSProperties } from 'react';
import { Header } from '../components/Header';
import { Contato } from '../components/Contato';
import { Rodape } from '../components/Rodape';
import { useSecaoAtiva } from '../hooks/useSecaoAtiva';
import { rotas, type ItemMenu } from '../conteudo';
import {
  Aprendizados,
  Atuacao,
  Colaboracao,
  Contexto,
  Decisoes,
  Desafio,
  FichaFocus,
  HeroFocus,
  Resultado,
  Solucao,
} from '../projetos/focus-clinica/Secoes';

// "Início" volta para a Home
const inicio: ItemMenu = { id: 'home', rotulo: 'Início', href: rotas.home };

// Seções do case no header
const secoesMenu: ItemMenu[] = [
  { id: 'solucao', rotulo: 'Solução', href: '#solucao' },
  { id: 'decisoes', rotulo: 'Decisões', href: '#decisoes' },
  { id: 'colaboracao', rotulo: 'Colaboração', href: '#colaboracao' },
  { id: 'aprendizados', rotulo: 'Aprendizados', href: '#aprendizados' },
];

const secoesRodape = [
  { rotulo: 'Início', href: rotas.home },
  { rotulo: 'Contexto', href: '#contexto' },
  { rotulo: 'O desafio', href: '#desafio' },
  { rotulo: 'Minha atuação', href: '#atuacao' },
  ...secoesMenu,
  { rotulo: 'Resultado', href: '#resultado' },
  { rotulo: 'Contato', href: '#contato' },
];

const idsObservados = ['contexto', 'desafio', 'atuacao', 'solucao', 'decisoes', 'colaboracao', 'resultado', 'aprendizados', 'contato'];

// Destaques da Focus Clínica: verde-esmeralda #1B6B51 e azul-petróleo #3E6374, em "R G B"
const coresDoProjeto = { '--acento': '27 107 81', '--acento-2': '62 99 116' } as CSSProperties;

export function FocusClinica() {
  const secaoAtiva = useSecaoAtiva(idsObservados);

  useEffect(() => {
    const anterior = document.title;
    document.title = 'Focus Clínica — estudo de caso · Claudia Mello';
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
        <HeroFocus />
        <FichaFocus />
        <Contexto />
        <Desafio />
        <Atuacao />
        <Solucao />
        <Decisoes />
        <Colaboracao />
        <Resultado />
        <Aprendizados />
        <Contato />
      </main>
      <Rodape secoes={secoesRodape} />
    </div>
  );
}
