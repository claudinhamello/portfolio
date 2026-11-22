import type { ReactNode } from 'react';
import { ArrowUpRight, Check, Frown, Monitor, Smartphone, Smile, Sparkles, X } from 'lucide-react';
import { CabecalhoCase } from '../CabecalhoCase';
import { Celular } from '../Celular';
import { Notebook } from '../Notebook';
import { ImagemComReserva } from '../../components/ImagemComReserva';
import { Ancora } from '../../components/Ancora';
import { Comparador } from './Comparador';
import { Fluxo } from './Fluxo';
import { aprender, capitulos, contexto, entender, ficha, hero, iniciar, links, refinar, solucao } from './dados';

const container = 'mx-auto max-w-pagina px-5 sm:px-8';
const card = 'rounded-3xl border border-nevoa bg-white';

function BotaoPrototipo({ href, children, Icone, contorno = false }: { href: string; children: string; Icone: typeof Monitor; contorno?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition hover:-translate-y-0.5 ${
        contorno
          ? 'border border-white/35 text-white hover:bg-white/10'
          : 'bg-white text-acento shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)]'
      }`}
    >
      <Icone className="h-4 w-4" aria-hidden="true" />
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function HeroFastMoney() {
  return (
    <section id="inicio" aria-labelledby="titulo-fast-money" className="relative isolate overflow-hidden bg-navy pb-20 pt-32 text-white sm:pt-40 lg:pb-28">
      {/* Brilho azul do projeto vindo da direita */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_65%_at_85%_40%,rgb(var(--acento-2)/0.55),transparent_70%)]"
      />
      <div className={`${container} grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12`}>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-gelo">{hero.rotulo}</p>
          <h1 id="titulo-fast-money" className="mt-5 text-[48px] leading-[1.02] tracking-[-0.01em] sm:text-[64px] xl:text-[76px]">
            <span className="block">{hero.titulo}</span>
            <span className="italic text-gelo">{hero.tituloDestaque}</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/80">{hero.texto}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <BotaoPrototipo href={links.prototipoDesktop} Icone={Monitor}>
              Protótipo desktop
            </BotaoPrototipo>
            <BotaoPrototipo href={links.prototipoMobile} Icone={Smartphone} contorno>
              Protótipo mobile
            </BotaoPrototipo>
          </div>
          <p className="mt-6 text-[14px] text-white/60">{hero.aviso}</p>
        </div>

        {/* Notebook e celular em aço escovado, mostrando a tela de confirmação nas duas versões */}
        <div className="relative pb-10 pr-6 sm:pr-14">
          <Notebook>
            <img
              src={hero.imagemDesktop}
              alt={hero.altDesktop}
              width={1440}
              height={1024}
              {...{ fetchpriority: 'high' }}
              className="block h-auto w-full"
            />
          </Notebook>
          <div className="absolute -bottom-1 right-0 w-[27%] min-w-[100px] max-w-[180px]">
            <Celular src={hero.imagemMobile} alt={hero.altMobile} altura={hero.alturaMobile} prioridade compacto />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FichaFastMoney() {
  return (
    <section aria-label="Ficha do projeto" className="border-b border-nevoa bg-papel">
      <dl className={`${container} grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4`}>
        {ficha.map((f) => (
          <div key={f.rotulo} className="border-l-2 border-acento/30 pl-5">
            <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-acento-2">{f.rotulo}</dt>
            <dd className="mt-2 text-[16px] font-medium text-processo">{f.texto}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Contexto() {
  return (
    <section id="contexto" aria-labelledby="titulo-contexto" className="bg-claro py-20 sm:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20`}>
        <div>
          <CabecalhoCase id="titulo-contexto" rotulo={contexto.rotulo} titulo={contexto.titulo} />
          {contexto.paragrafos.map((p) => (
            <p key={p} className="mt-5 max-w-2xl text-[17px] leading-relaxed text-secundario">
              {p}
            </p>
          ))}
        </div>
        <div className={`${card} self-start p-7 sm:p-8`}>
          <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">O que fiz</h3>
          <ul className="mt-5 grid gap-3">
            {contexto.responsabilidades.map((r) => (
              <li key={r} className="flex items-start gap-3 text-[16px] text-processo">
                <Check className="mt-1 h-4 w-4 shrink-0 text-acento" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Linha do tempo com os quatro capítulos; o capítulo em leitura fica aceso. */
export function LinhaDoTempo({ secaoAtiva }: { secaoAtiva: string | null }) {
  // A solução fica entre "Refinar" e "Aprender"; no contato, a história já terminou
  const extras: Record<string, number> = { solucao: 2, contato: 3 };
  const ativo = secaoAtiva ? (extras[secaoAtiva] ?? capitulos.findIndex((c) => c.id === secaoAtiva)) : -1;
  return (
    <nav aria-label="Capítulos do estudo de caso" className="bg-claro pb-20 sm:pb-28">
      <div className={container}>
        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Trilho e progresso (só no desktop, onde os capítulos ficam em linha) */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-[22px] hidden h-[2px] bg-nevoa lg:block" />
          <span
            aria-hidden="true"
            className="absolute left-0 top-[22px] hidden h-[2px] bg-acento transition-[width] duration-500 lg:block"
            style={{ width: ativo < 0 ? '0%' : `${((ativo + 0.5) / capitulos.length) * 100}%` }}
          />
          {capitulos.map((c, i) => {
            const passou = ativo >= i;
            return (
              <li key={c.id} className="relative lg:pr-8">
                <Ancora href={`#${c.id}`} className="group flex gap-4 lg:block" aria-current={secaoAtiva === c.id ? 'step' : undefined}>
                  <span
                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 font-serif text-[20px] transition ${
                      passou ? 'border-acento bg-acento text-white' : 'border-nevoa bg-white text-acento group-hover:border-acento'
                    }`}
                  >
                    {c.numero}
                  </span>
                  <span className="block lg:mt-5">
                    <span className="block text-[24px] leading-tight text-processo transition group-hover:text-acento">
                      {c.titulo}
                    </span>
                    <span className="mt-1 block text-[15px] text-secundario">{c.resumo}</span>
                  </span>
                </Ancora>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

/** Abertura de cada capítulo: número grande vazado + título */
function Capitulo({ indice, fundo = 'bg-papel', children }: { indice: number; fundo?: string; children: ReactNode }) {
  const c = capitulos[indice];
  return (
    <section id={c.id} aria-labelledby={`titulo-${c.id}`} className={`${fundo} scroll-mt-20 py-20 sm:py-28`}>
      <div className={container}>
        <header className="flex items-end gap-5 border-b border-nevoa pb-8 sm:gap-8">
          <span
            aria-hidden="true"
            className="font-serif text-[96px] leading-[0.8] text-transparent [-webkit-text-stroke:1.5px_rgb(var(--acento))] sm:text-[150px]"
          >
            {c.numero}
          </span>
          <div className="pb-1">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">Capítulo {c.numero}</p>
            <h2 id={`titulo-${c.id}`} className="mt-2 text-[36px] leading-[1.05] text-processo sm:text-[52px]">
              {c.titulo}
            </h2>
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}

function Subtitulo({ children }: { children: ReactNode }) {
  return <h3 className="text-[30px] leading-tight text-processo sm:text-[36px]">{children}</h3>;
}

const alturaSentimento = { tranquila: 18, aliviada: 18, tensa: 78 } as const;

function Jornada() {
  const { etapas } = entender.jornada;
  const pontos = etapas.map((e, i) => `${((i + 0.5) / etapas.length) * 100},${alturaSentimento[e.sentimento as keyof typeof alturaSentimento]}`);
  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
      <ol className="relative grid min-w-[620px] grid-cols-6">
        <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-0 h-32 w-full">
          <polyline
            points={pontos.join(' ')}
            fill="none"
            stroke="rgb(var(--acento) / 0.35)"
            strokeWidth="2"
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {etapas.map((e) => {
          const tensa = e.sentimento === 'tensa';
          const Icone = tensa ? Frown : Smile;
          return (
            <li key={e.titulo} className="relative flex flex-col items-center text-center">
              <div className="relative h-32 w-full">
                <span
                  className={`absolute left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-white ${
                    tensa ? 'border-[#C2410C] text-[#C2410C]' : 'border-acento text-acento'
                  }`}
                  style={{ top: `${alturaSentimento[e.sentimento as keyof typeof alturaSentimento]}%` }}
                >
                  <Icone className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <span className="mt-2 px-1 text-[15px] font-semibold leading-snug text-processo">{e.titulo}</span>
              <span className={`mt-1 text-[13px] ${tensa ? 'text-[#C2410C]' : 'text-secundario'}`}>{e.sentimento}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function Entender() {
  const { pesquisa, dores, persona, jornada } = entender;
  return (
    <Capitulo indice={0}>
      {/* Pesquisa */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <Subtitulo>{pesquisa.titulo}</Subtitulo>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-secundario">{pesquisa.texto}</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 self-start">
          {pesquisa.numeros.map((n) => (
            <div key={n.rotulo} className="rounded-3xl bg-acento p-6 text-white">
              <dt className="sr-only">{n.rotulo}</dt>
              <dd>
                <span className="block font-serif text-[64px] leading-none">{n.valor}</span>
                <span className="mt-2 block text-[15px] text-white/80">{n.rotulo}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {dores.map((d, i) => (
          <li key={d.titulo} className={`${card} p-7`}>
            <span className="font-serif text-[20px] text-acento-2">{String(i + 1).padStart(2, '0')}</span>
            <h4 className="mt-3 text-[26px] leading-tight text-processo">{d.titulo}</h4>
            <p className="mt-2 text-[16px] leading-relaxed text-secundario">{d.texto}</p>
          </li>
        ))}
      </ul>

      {/* Persona e jornada */}
      <div className="mt-20 space-y-16">
        <article className="grid overflow-hidden rounded-3xl border border-nevoa bg-white lg:grid-cols-[360px_1fr]" aria-labelledby="persona-nome">
          <div className="bg-acento p-7 text-white sm:p-9">
            <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 font-serif text-[30px]">
              {persona.nome[0]}
            </span>
            <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-gelo">Persona</p>
            <h3 id="persona-nome" className="mt-1 text-[36px] leading-none">
              {persona.nome}
            </h3>
            <p className="mt-2 text-[15px] text-white/80">{persona.descricao}</p>
          </div>
          <div className="grid gap-7 p-7 sm:grid-cols-2 sm:p-9">
            <p className="text-[16px] leading-relaxed text-secundario sm:col-span-2">{persona.bio}</p>
            <blockquote className="sm:col-span-2 border-l-2 border-acento pl-4 font-serif text-[22px] italic leading-snug text-processo">
              “{persona.citacao}”
            </blockquote>
            <div>
              <h4 className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-acento-2">Objetivos</h4>
              <ul className="mt-3 grid gap-2">
                {persona.objetivos.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-[15px] text-processo">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-acento" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-acento-2">Frustrações</h4>
              <ul className="mt-3 grid gap-2">
                {persona.frustracoes.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-processo">
                    <X className="mt-1 h-4 w-4 shrink-0 text-[#C2410C]" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <div>
          <Subtitulo>{jornada.titulo}</Subtitulo>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-secundario">{jornada.texto}</p>
          <div className="mt-10">
            <Jornada />
          </div>
        </div>
      </div>
    </Capitulo>
  );
}

export function Iniciar() {
  const { fluxo, wireframes, comparadorConfirmacao: comp } = iniciar;
  return (
    <Capitulo indice={1} fundo="bg-claro">
      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="self-center">
          <Subtitulo>{fluxo.titulo}</Subtitulo>
          <p className="mt-5 text-[17px] leading-relaxed text-secundario">{fluxo.texto}</p>
          <a
            href={fluxo.imagem}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-acento"
          >
            Abrir o fluxo em tamanho real
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className={`${card} p-4 sm:p-6`}>
          <ImagemComReserva
            src={fluxo.imagem}
            alt={fluxo.alt}
            width={fluxo.largura}
            height={fluxo.altura}
            loading="lazy"
            className="h-auto w-full"
            classeReserva="aspect-[2000/1738] w-full"
          />
        </div>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="self-center">
          <Subtitulo>{wireframes.titulo}</Subtitulo>
          <p className="mt-5 text-[17px] leading-relaxed text-secundario">{wireframes.texto}</p>
          <p className="mt-8 text-[15px] font-semibold text-processo">{comp.titulo}</p>
          <p className="mt-1 text-[15px] text-secundario">{comp.texto}</p>
        </div>
        <Comparador antes={comp.antes} depois={comp.depois} nome={comp.titulo} />
      </div>
    </Capitulo>
  );
}

export function Refinar() {
  const { estudo, descobertas, comparadorLogin: comp } = refinar;
  return (
    <Capitulo indice={2}>
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <Subtitulo>{estudo.titulo}</Subtitulo>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-secundario">{estudo.texto}</p>
        </div>
        <dl className="grid gap-4 self-start sm:grid-cols-3 lg:grid-cols-1">
          {estudo.detalhes.map((d) => (
            <div key={d.rotulo} className="flex flex-col rounded-2xl bg-claro px-5 py-4 lg:flex-row lg:items-baseline lg:justify-between">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-acento-2">{d.rotulo}</dt>
              <dd className="mt-1 text-[16px] font-medium text-processo lg:mt-0">{d.texto}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h3 className="font-sans mt-16 text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">O que o teste revelou</h3>
      <ul className="mt-5 grid gap-5 md:grid-cols-3">
        {descobertas.map((d) => (
          <li key={d.titulo} className={`${card} p-7`}>
            <h4 className="text-[26px] leading-tight text-processo">{d.titulo}</h4>
            <p className="mt-2 text-[16px] leading-relaxed text-secundario">{d.texto}</p>
          </li>
        ))}
      </ul>

      <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="self-center">
          <Subtitulo>{comp.titulo}</Subtitulo>
          <p className="mt-5 text-[17px] leading-relaxed text-secundario">{comp.texto}</p>
          <p className="mt-6 text-[15px] text-secundario">Arraste a divisória para comparar.</p>
        </div>
        <Comparador antes={comp.antes} depois={comp.depois} nome={comp.titulo} />
      </div>
    </Capitulo>
  );
}

export function Solucao() {
  return (
    <section id="solucao" aria-labelledby="titulo-solucao" className="relative isolate overflow-hidden bg-tinta py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_55%_at_0%_0%,rgb(var(--acento-2)/0.45),transparent_70%)]"
      />
      <div className={container}>
        <CabecalhoCase id="titulo-solucao" escuro rotulo={solucao.rotulo} titulo={solucao.titulo} texto={solucao.texto} />
        <div className="mt-12">
          <Fluxo />
        </div>
        <div className="mt-14 flex flex-wrap gap-3 border-t border-white/15 pt-10">
          <BotaoPrototipo href={links.prototipoDesktop} Icone={Monitor}>
            Protótipo desktop
          </BotaoPrototipo>
          <BotaoPrototipo href={links.prototipoMobile} Icone={Smartphone} contorno>
            Protótipo mobile
          </BotaoPrototipo>
        </div>
      </div>
    </section>
  );
}

export function Aprender() {
  const { acessibilidade, impacto, aprendizado, proximosPassos, ia } = aprender;
  return (
    <Capitulo indice={3} fundo="bg-claro">
      <div className="mt-14">
        <Subtitulo>{acessibilidade.titulo}</Subtitulo>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {acessibilidade.itens.map((a) => (
            <li key={a.titulo} className={`${card} p-7`}>
              <h4 className="text-[26px] leading-tight text-processo">{a.titulo}</h4>
              <p className="mt-2 text-[16px] leading-relaxed text-secundario">{a.texto}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <article className={`${card} p-8 sm:p-10`}>
          <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">{impacto.titulo}</h3>
          <p className="mt-4 font-serif text-[28px] leading-snug text-processo sm:text-[32px]">{impacto.texto}</p>
        </article>
        <article className="rounded-3xl bg-acento p-8 text-white sm:p-10">
          <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-gelo">{aprendizado.titulo}</h3>
          <p className="mt-4 font-serif text-[28px] leading-snug sm:text-[32px]">{aprendizado.texto}</p>
        </article>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">Próximos passos</h3>
          <ol className="mt-5 grid gap-4">
            {proximosPassos.map((p, i) => (
              <li key={p} className="flex items-baseline gap-4 border-b border-nevoa pb-4 text-[17px] text-processo">
                <span className="font-serif text-[20px] text-acento">{String(i + 1).padStart(2, '0')}</span>
                {p}
              </li>
            ))}
          </ol>
        </div>
        <aside className="self-start rounded-3xl border border-dashed border-acento/35 p-7">
          <h3 className="font-sans flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Onde usei IA neste projeto
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-secundario">{ia}</p>
        </aside>
      </div>
    </Capitulo>
  );
}
