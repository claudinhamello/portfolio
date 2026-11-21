import { CabecalhoSecao } from './CabecalhoSecao';
import { Ancora } from './Ancora';
import { rotas } from '../conteudo';

interface Projeto {
  nome: string;
  categoria: string;
  contexto: string;
  descricao: string;
  tags: string[];
  /** Arquivo em /public (16:9) */
  capa: string;
  /** Página do case. Sem ela, o card mostra "Case completo em breve". */
  href?: string;
}

// Edite aqui os projetos da Home.
const projetos: Projeto[] = [
  {
    nome: 'BeReady',
    categoria: 'Product Design · App mobile',
    contexto: 'Projeto autoral · em andamento',
    descricao:
      'App que ajuda famílias a montar, organizar e manter mochilas de emergência, com controle de validade dos itens.',
    tags: ['Pesquisa com usuários', 'Prototipação', 'Testes de usabilidade'],
    capa: '/home/capa-beready.webp',
    href: rotas.beready,
  },
  {
    nome: 'Focus Clínica',
    categoria: 'UI/UX Design · SaaS',
    contexto: 'Voluntário · 2026',
    descricao:
      'Landing page de um SaaS para clínicas. Única designer do time, acompanhei três devs na implementação.',
    tags: ['Design de interface', 'Colaboração com devs', 'Figma'],
    capa: '/home/capa-focus-clinica.webp',
    href: rotas.focusClinica,
  },
  {
    nome: 'Fast Money',
    categoria: 'UX/UI Design · Fintech',
    contexto: 'Certificação Google UX · 2023',
    descricao: 'App responsivo de transferência via Pix, do erro de destinatário ao saldo insuficiente.',
    tags: ['Entrevistas', 'Testes de usabilidade', 'Design system'],
    capa: '/home/capa-fast-money.webp',
    href: rotas.fastMoney,
  },
  {
    nome: 'Redesign de placas de ruas',
    categoria: 'UX Research · Design de informação',
    contexto: 'Extensão acadêmica · 2024',
    descricao:
      'Nova sinalização de ruas a partir de uma pesquisa em que 6 de 8 motoristas tinham dificuldade para se localizar.',
    tags: ['Pesquisa', 'Diagnóstico', 'Redesign'],
    capa: '/home/capa-sinalizacao-urbana.webp',
  },
];

function CardProjeto({ p }: { p: Projeto }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-3xl border border-nevoa bg-white transition duration-300 hover:-translate-y-1 hover:border-roxo/40 hover:shadow-[0_24px_50px_-30px_rgba(18,59,90,0.45)]">
      <img
        src={p.capa}
        alt={`Capa do projeto ${p.nome}`}
        loading="lazy"
        width={1600}
        height={900}
        className="aspect-video w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-roxo">{p.categoria}</p>
        <h3 className="mt-2 text-[26px] leading-tight text-processo">{p.nome}</h3>
        <p className="mt-1 text-[13px] font-medium text-secundario">{p.contexto}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-secundario">{p.descricao}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Competências">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full bg-nevoa px-3 py-1 text-[12px] font-semibold text-processo">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          {p.href ? (
            <Ancora
              href={p.href}
              aria-label={`Saiba mais sobre o projeto ${p.nome}`}
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-roxo"
            >
              Saiba mais
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Ancora>
          ) : (
            <span className="text-[14px] font-medium text-secundario/80">Case completo em breve</span>
          )}
        </div>
      </div>
    </li>
  );
}

export function Projetos() {
  return (
    <section id="projetos" aria-labelledby="titulo-projetos" className="bg-claro py-20 sm:py-28">
      <div className="mx-auto max-w-pagina px-5 sm:px-8">
        <CabecalhoSecao
          id="titulo-projetos"
          rotulo="Projetos"
          titulo="Projetos selecionados"
          apoio="Uma seleção de projetos que reúne desafios, descobertas e soluções desenvolvidas em diferentes contextos."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {projetos.map((p) => (
            <CardProjeto key={p.nome} p={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}
