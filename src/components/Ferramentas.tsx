import { useRef, useState } from 'react';
import { CabecalhoSecao } from './CabecalhoSecao';

/**
 * Ferramentas. Para colocar o ícone de uma ferramenta, salve o arquivo em /public
 * e preencha `icone` (ex.: icone: '/Figma_logo.svg'). Sem ícone, aparece um placeholder com as iniciais.
 */
const ferramentas = {
  figma: { nome: 'Figma', icone: '/Figma_logo.svg' },
  figmaAi: { nome: 'Figma AI', icone: '/Figma_logo.svg' },
  figjam: { nome: 'FigJam', icone: '/Figma_logo.svg' },
  miro: { nome: 'Miro', icone: '/Miro_logo.svg' },
  googleForms: { nome: 'Google Forms', icone: '/Google_Forms_logo.svg' },
  notion: { nome: 'Notion', icone: '/Notion_logo.svg' },
  trello: { nome: 'Trello', icone: '/Trello_logo.svg' },
  googleKeep: { nome: 'Google Keep', icone: '/Google_Keep_logo.svg' },
  chatgpt: { nome: 'ChatGPT', icone: '/ChatGPT_logo.svg' },
  gemini: { nome: 'Gemini', icone: '/Gemini_logo.svg' },
  claude: { nome: 'Claude', icone: '/Claude_logo.svg' },
  materialThemeBuilder: { nome: 'Material Theme Builder', icone: '/Material_Design_logo.svg' },
} satisfies Record<string, { nome: string; icone: string }>;

type Ferramenta = keyof typeof ferramentas;

interface Competencia {
  titulo: string;
  ferramentas: Ferramenta[];
  /** Texto de apoio pequeno, no rodapé do card */
  nota?: string;
  /** Projetos em que a competência foi usada (inclui projetos que ainda vão ganhar página) */
  usadoEm?: string[] | 'todos';
}

// Edite aqui as competências e as ferramentas usadas em cada uma.
const competencias: Competencia[] = [
  { titulo: 'UX/UI Design', ferramentas: ['figma', 'figmaAi', 'figjam', 'miro'], usadoEm: 'todos' },
  {
    titulo: 'Pesquisa com usuários',
    ferramentas: ['googleForms', 'notion', 'trello', 'googleKeep', 'miro'],
    usadoEm: ['BeReady', 'Fast Money', 'Wok Saudável'],
  },
  {
    titulo: 'Arquitetura da informação',
    ferramentas: ['figjam', 'miro'],
    usadoEm: ['BeReady', 'Fast Money', 'Wok Saudável'],
  },
  {
    titulo: 'IA aplicada à análise e síntese de insights',
    ferramentas: ['chatgpt', 'gemini', 'claude'],
    nota: 'Apoio à organização, interpretação e síntese de dados de pesquisa reais — nunca à geração de respostas de usuários.',
    usadoEm: ['BeReady', 'Fast Money', 'Wok Saudável', 'Focus Clínica', 'SouJunior', 'Prothera', 'Passos de Luz'],
  },
  {
    titulo: 'Wireframes e prototipação',
    ferramentas: ['figma'],
    usadoEm: ['BeReady', 'Fast Money', 'Wok Saudável', 'Focus Clínica', 'SouJunior', 'Passos de Luz'],
  },
  {
    titulo: 'Design systems',
    ferramentas: ['materialThemeBuilder', 'figma'],
    usadoEm: ['BeReady', 'Fast Money', 'Wok Saudável', 'Focus Clínica', 'SouJunior'],
  },
  {
    titulo: 'Testes de usabilidade',
    ferramentas: ['figma', 'googleForms'],
    usadoEm: ['BeReady', 'Fast Money', 'Wok Saudável'],
  },
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

      {c.nota && <p className="relative mt-4 text-[13px] leading-relaxed text-secundario">{c.nota}</p>}

      {c.usadoEm && (
        <p className="relative mt-5 border-t border-nevoa pt-4 text-[13px] leading-relaxed text-secundario">
          <span className="mr-1.5 font-semibold uppercase tracking-[0.12em] text-roxo">Usado em</span>
          {c.usadoEm === 'todos' ? 'Todos os projetos' : c.usadoEm.join(' · ')}
        </p>
      )}
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

        <ol className="mt-12 grid gap-5 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
          {competencias.map((c, i) => (
            <CardCompetencia key={c.titulo} c={c} numero={i + 1} ativa={ativa} aoAtivar={setAtiva} />
          ))}
        </ol>
      </div>
    </section>
  );
}
