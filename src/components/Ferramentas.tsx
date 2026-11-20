import { useRef, useState } from 'react';
import { CabecalhoSecao } from './CabecalhoSecao';

/**
 * Ferramentas. Para colocar o ícone de uma ferramenta, salve o arquivo em /public
 * e preencha `icone` (ex.: icone: '/Figma_logo.svg'). Sem ícone, aparece um placeholder com as iniciais.
 */
const ferramentas = {
  figma: { nome: 'Figma', icone: '/Figma_logo.svg' },
  figmaAi: { nome: 'Figma AI', icone: '/Figma_logo.svg' },
  figjam: { nome: 'FigJam', icone: '' },
  miro: { nome: 'Miro', icone: '/Miro_logo.svg' },
  googleForms: { nome: 'Google Forms', icone: '/Google_Forms_logo.svg' },
  notion: { nome: 'Notion', icone: '/Notion_logo.svg' },
  trello: { nome: 'Trello', icone: '/Trello_logo.svg' },
  googleKeep: { nome: 'Google Keep', icone: '/Google_Keep_logo.svg' },
  chatgpt: { nome: 'ChatGPT', icone: '/ChatGPT_logo.svg' },
  gemini: { nome: 'Gemini', icone: '/Gemini_logo.svg' },
  claude: { nome: 'Claude', icone: '/Claude_logo.svg' },
  uizard: { nome: 'Uizard', icone: '' },
  materialThemeBuilder: { nome: 'Material Theme Builder', icone: '/Material_Design_logo.svg' },
  colormind: { nome: 'Colormind', icone: '' },
} satisfies Record<string, { nome: string; icone: string }>;

type Ferramenta = keyof typeof ferramentas;

interface Competencia {
  titulo: string;
  ferramentas: Ferramenta[];
  descricao?: string;
  /** Ocupa duas colunas no desktop (fecha a grade de 3 colunas em xadrez) */
  largo?: boolean;
}

// Edite aqui as competências e as ferramentas usadas em cada uma.
const competencias: Competencia[] = [
  { titulo: 'UX/UI Design', ferramentas: ['figma', 'figmaAi', 'figjam', 'miro'] },
  { titulo: 'Pesquisa com usuários', ferramentas: ['googleForms', 'notion', 'trello', 'googleKeep', 'miro'] },
  { titulo: 'Arquitetura da informação', ferramentas: ['figjam'] },
  {
    titulo: 'IA aplicada à análise e síntese de insights',
    descricao:
      'Apoio à organização, interpretação e síntese de dados de pesquisa reais — nunca à geração de respostas de usuários.',
    ferramentas: ['chatgpt', 'gemini', 'claude'],
    largo: true,
  },
  { titulo: 'Wireframes e prototipação', ferramentas: ['figma', 'uizard'] },
  { titulo: 'Design systems', ferramentas: ['materialThemeBuilder', 'colormind', 'figma'] },
  { titulo: 'Testes de usabilidade', ferramentas: ['figma', 'googleForms'], largo: true },
];

const iniciais = (nome: string) =>
  nome
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function IconeFerramenta({ id }: { id: Ferramenta }) {
  const { nome, icone } = ferramentas[id];
  if (icone) {
    return <img src={icone} alt="" width={20} height={20} className="h-5 w-5 shrink-0 object-contain" />;
  }
  // Placeholder até o ícone real existir
  return (
    <span
      aria-hidden="true"
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-lilas text-[9px] font-bold text-roxo"
    >
      {iniciais(nome)}
    </span>
  );
}

interface CardProps {
  c: Competencia;
  numero: number;
  ativa: Ferramenta | null;
  aoAtivar: (id: Ferramenta | null) => void;
}

function CardCompetencia({ c, numero, ativa, aoAtivar }: CardProps) {
  const contem = ativa !== null && c.ferramentas.includes(ativa);
  const apagado = ativa !== null && !contem;
  const tipoPonteiro = useRef<string>('mouse');

  return (
    <li
      className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white p-6 transition duration-300 sm:p-7 ${
        c.largo ? 'lg:col-span-2' : ''
      } ${
        contem
          ? '-translate-y-1 border-roxo/40 shadow-[0_24px_50px_-30px_rgba(108,79,216,0.5)]'
          : 'border-nevoa hover:-translate-y-1 hover:border-roxo/30 hover:shadow-[0_24px_50px_-32px_rgba(18,59,90,0.45)]'
      } ${apagado ? 'opacity-45' : ''}`}
    >
      {/* Filete em gradiente no topo: aparece no hover e no card que contém a ferramenta ativa */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[3px] origin-left bg-[linear-gradient(90deg,#6C4FD8,#22B5B5)] transition-transform duration-500 group-hover:scale-x-100 ${
          contem ? 'scale-x-100' : 'scale-x-0'
        }`}
      />

      <span className="texto-gradiente relative font-serif text-[22px] leading-none">
        {String(numero).padStart(2, '0')}
      </span>
      <h3 className="relative mt-4 text-[24px] leading-tight text-processo">{c.titulo}</h3>
      {c.descricao && (
        <p className="relative mt-3 max-w-xl text-[15px] leading-relaxed text-secundario">{c.descricao}</p>
      )}

      <ul className="relative mt-auto flex flex-wrap gap-2 pt-6" aria-label={`Ferramentas de ${c.titulo}`}>
        {c.ferramentas.map((id) => {
          const eAtiva = id === ativa;
          return (
            <li key={id}>
              <button
                type="button"
                aria-pressed={eAtiva}
                title={`Ver onde uso ${ferramentas[id].nome}`}
                onPointerDown={(e) => (tipoPonteiro.current = e.pointerType)}
                onPointerEnter={(e) => e.pointerType === 'mouse' && aoAtivar(id)}
                onPointerLeave={(e) => e.pointerType === 'mouse' && aoAtivar(null)}
                onFocus={(e) => e.currentTarget.matches(':focus-visible') && aoAtivar(id)}
                onBlur={() => aoAtivar(null)}
                // No toque não existe hover: um toque liga, outro desliga
                onClick={() => tipoPonteiro.current !== 'mouse' && aoAtivar(eAtiva ? null : id)}
                className={`inline-flex items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-3.5 text-[14px] font-medium transition-colors duration-200 ${
                  eAtiva ? 'border-roxo/50 bg-lilas text-roxo' : 'border-nevoa bg-claro text-processo hover:border-roxo/30'
                }`}
              >
                <IconeFerramenta id={id} />
                {ferramentas[id].nome}
              </button>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export function Ferramentas() {
  // Ferramenta em foco: acende em todos os cards em que aparece e apaga os demais
  const [ativa, setAtiva] = useState<Ferramenta | null>(null);

  return (
    <section id="ferramentas" aria-labelledby="titulo-ferramentas" className="bg-claro py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <CabecalhoSecao
          id="titulo-ferramentas"
          rotulo="Repertório · Processo · Ferramentas"
          titulo="Ferramentas e competências"
          apoio="Uso de IA como apoio na obtenção de insights a partir de pesquisas e entrevistas."
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {competencias.map((c, i) => (
            <CardCompetencia key={c.titulo} c={c} numero={i + 1} ativa={ativa} aoAtivar={setAtiva} />
          ))}
        </ol>
      </div>
    </section>
  );
}
