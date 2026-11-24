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
    href: rotas.placas,
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

/**
 * Faixa abaixo dos cards: a experiência em squad multidisciplinar (Hackathon SouJunior).
 * Fica fora da grade de 4 projetos para não mudar a Home, mas à vista de quem recruta.
 */
function DestaqueSquad() {
  return (
    <Ancora
      href={rotas.soujunior}
      className="group mt-6 grid overflow-hidden rounded-3xl border border-nevoa bg-white transition duration-300 hover:-translate-y-1 hover:border-roxo/40 hover:shadow-[0_24px_50px_-30px_rgba(18,59,90,0.45)] md:grid-cols-[1.05fr_1fr] lg:mt-8"
    >
      <img
        src="/projetos/soujunior/daily-squad.webp"
        alt="Daily da Squad DevLevelUp por videochamada, com nove integrantes"
        loading="lazy"
        width={1600}
        height={739}
        className="h-full min-h-[200px] w-full object-cover object-left"
      />
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-roxo">Experiência em squad · Hackathon SouJunior 2026</p>
        <h3 className="mt-2 text-[28px] leading-tight text-processo sm:text-[32px]">Minha primeira squad multidisciplinar</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-secundario">
          15 dias com PM, PO, mentor, devs e QA para criar a landing page de doações da comunidade. Do kickoff às dailys e ao
          handoff, acompanhando os devs até a entrega.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Competências">
          {['Trabalho em squad', 'UI Design', 'Handoff com devs'].map((t) => (
            <li key={t} className="rounded-full bg-nevoa px-3 py-1 text-[12px] font-semibold text-processo">
              {t}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-roxo">
          Ver o case
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Ancora>
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
        <DestaqueSquad />
      </div>
    </section>
  );
}
