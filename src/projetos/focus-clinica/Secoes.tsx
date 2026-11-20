import { ArrowUpRight, Check } from 'lucide-react';
import { CabecalhoCase } from '../CabecalhoCase';
import { Navegador } from '../Navegador';
import { ImagemComReserva } from '../../components/ImagemComReserva';
import { Vitrine } from './Vitrine';
import {
  aprendizados,
  atuacao,
  colaboracao,
  contexto,
  decisoes,
  desafio,
  ficha,
  hero,
  links,
  resultado,
  solucao,
} from './dados';

const container = 'mx-auto max-w-pagina px-5 sm:px-8';
const card = 'rounded-3xl border border-nevoa bg-white';

// Card com reação no hover: sobe, borda e sombra no verde do projeto e um brilho suave vindo de cima
const cardInterativo = `${card} group relative isolate overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-acento/40 hover:shadow-[0_24px_50px_-28px_rgb(var(--acento)/0.45)]`;

function BrilhoHover() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(var(--acento)/0.08)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  );
}

function BotaoExterno({ href, children, contorno = false }: { href: string; children: string; contorno?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition hover:-translate-y-0.5 ${
        contorno
          ? 'border border-acento text-acento hover:bg-acento hover:text-white'
          : 'bg-acento text-white shadow-[0_12px_30px_-12px_rgb(var(--acento)/0.7)]'
      }`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function HeroFocus() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-focus"
      // Sem overflow-hidden e com espaço embaixo: a sombra da janela (~80px) não pode ser cortada
      className="relative isolate z-10 bg-claro pb-28 pt-32 sm:pt-40"
    >
      {/* Brilho verde suave atrás do conteúdo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[70%] bg-[radial-gradient(60%_70%_at_50%_0%,rgb(var(--acento)/0.12),transparent_70%)]"
      />
      <div className={`${container} text-center`}>
        <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">{hero.rotulo}</p>
        <h1
          id="titulo-focus"
          className="mx-auto mt-5 max-w-4xl text-[44px] leading-[1.04] tracking-[-0.01em] text-processo sm:text-[60px] xl:text-[72px]"
        >
          {hero.titulo} <span className="italic text-acento">{hero.tituloDestaque}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-secundario">{hero.texto}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <BotaoExterno href={links.landingPage}>Ver landing page</BotaoExterno>
          <BotaoExterno href={links.figma} contorno>
            Ver no Figma
          </BotaoExterno>
        </div>
        <p className="mt-6 inline-flex rounded-full bg-acento/10 px-4 py-2 text-[13px] font-medium text-acento">
          {hero.aviso}
        </p>

        <Navegador url={links.landingPage.replace('https://', '')} className="mx-auto mt-14 max-w-[1040px] text-left">
          <ImagemComReserva
            src={hero.imagem}
            alt={hero.alt}
            width={hero.largura}
            height={hero.altura}
            {...{ fetchpriority: 'high' }}
            className="block h-auto w-full"
            classeReserva="aspect-[16/9] w-full"
          />
        </Navegador>
      </div>
    </section>
  );
}

export function FichaFocus() {
  return (
    <section aria-label="Ficha do projeto" className="bg-claro pb-16">
      <dl className={`${container} grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4`}>
        {ficha.map((f) => (
          <div key={f.rotulo} className="border-l-2 border-acento/40 pl-5">
            <dt className="text-[13px] font-semibold uppercase tracking-[0.14em] text-acento-2">{f.rotulo}</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-processo">{f.texto}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Contexto() {
  return (
    <section id="contexto" aria-labelledby="titulo-contexto" className="bg-white py-20 sm:py-28">
      <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
        <CabecalhoCase id="titulo-contexto" rotulo={contexto.rotulo} titulo={contexto.titulo} />
        <div className="lg:pt-10">
          {contexto.paragrafos.map((p) => (
            <p key={p} className="mb-4 text-[17px] leading-relaxed text-secundario">
              {p}
            </p>
          ))}
          <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-acento-2">
            {contexto.publico.rotulo}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {contexto.publico.itens.map((i) => (
              <li key={i} className="rounded-full bg-acento/10 px-4 py-2 text-[14px] font-medium text-acento">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Desafio() {
  return (
    <section id="desafio" aria-labelledby="titulo-desafio" className="bg-claro py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-desafio" rotulo={desafio.rotulo} titulo={desafio.titulo} texto={desafio.texto} />
        <ol className="mt-12 border-t border-processo/10">
          {desafio.objetivos.map((o, i) => (
            <li key={o} className="grid gap-4 border-b border-processo/10 py-8 sm:grid-cols-[120px_1fr] sm:items-baseline">
              <span className="font-serif text-[56px] leading-none text-acento">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-serif text-[26px] leading-snug text-processo sm:text-[32px]">{o}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Atuacao() {
  return (
    <section id="atuacao" aria-labelledby="titulo-atuacao" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-atuacao" rotulo={atuacao.rotulo} titulo={atuacao.titulo} texto={atuacao.texto} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {atuacao.grupos.map((g) => (
            <div key={g.titulo} className={`${cardInterativo} p-7`}>
              <BrilhoHover />
              <h3 className="font-sans text-[18px] font-semibold text-processo transition-colors group-hover:text-acento">
                {g.titulo}
              </h3>
              <ul className="mt-5 space-y-3">
                {g.itens.map((i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-secundario">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-acento" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Solucao() {
  return (
    <section id="solucao" aria-labelledby="titulo-solucao" className="bg-claro py-20 sm:py-28">
      <div className={container}>
        <div className="mx-auto max-w-3xl text-center [&>div]:mx-auto">
          <CabecalhoCase id="titulo-solucao" rotulo={solucao.rotulo} titulo={solucao.titulo} texto={solucao.texto} />
        </div>
        <div className="mt-12">
          <Vitrine />
        </div>

        <h3 className="mt-20 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">
          {solucao.estruturaRotulo}
        </h3>
        <ol className="mt-6 grid gap-x-10 sm:grid-cols-2">
          {solucao.estrutura.map((e, i) => (
            <li key={e.titulo} className="flex gap-5 border-t border-processo/10 py-5">
              <span className="w-7 shrink-0 font-serif text-[22px] leading-none text-acento">{i + 1}</span>
              <div>
                <h4 className="font-sans text-[16px] font-semibold text-processo">{e.titulo}</h4>
                <p className="mt-1 text-[15px] leading-relaxed text-secundario">{e.texto}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[14px] italic text-secundario">{solucao.avisoNumeros}</p>
      </div>
    </section>
  );
}

export function Decisoes() {
  return (
    <section id="decisoes" aria-labelledby="titulo-decisoes" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-decisoes" rotulo={decisoes.rotulo} titulo={decisoes.titulo} texto={decisoes.texto} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {decisoes.aspectos.map((a) => (
            <li key={a.titulo} className={`${cardInterativo} p-6`}>
              <BrilhoHover />
              <h3 className="font-sans text-[17px] font-semibold text-processo transition-colors group-hover:text-acento">
                {a.titulo}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-secundario">{a.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Colaboracao() {
  return (
    <section id="colaboracao" aria-labelledby="titulo-colaboracao" className="bg-claro py-20 sm:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16`}>
        <div>
          <CabecalhoCase
            id="titulo-colaboracao"
            rotulo={colaboracao.rotulo}
            titulo={colaboracao.titulo}
            texto={colaboracao.texto}
          />
          <ul className="mt-8 space-y-3">
            {colaboracao.itens.map((i) => (
              <li key={i} className="flex gap-3 text-[16px] text-processo">
                <Check className="mt-1 h-4 w-4 shrink-0 text-acento" aria-hidden="true" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">A equipe</p>
          <div className={`${card} flex items-center gap-4 border-acento/30 p-5`}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-acento font-serif text-lg text-white">
              C
            </span>
            <div>
              <p className="font-semibold text-processo">Claudia Mello</p>
              <p className="text-[14px] text-secundario">UI/UX Design</p>
            </div>
          </div>
          {colaboracao.equipe.map((p) => (
            <div key={p.nome} className={`${card} flex items-center gap-4 p-5`}>
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-acento-2/10 text-[14px] font-semibold text-acento-2"
              >
                {p.nome
                  .split(' ')
                  .filter((_, k, todas) => k === 0 || k === todas.length - 1)
                  .map((parte) => parte[0])
                  .join('')}
              </span>
              <div className="flex-1">
                <p className="font-semibold text-processo">{p.nome}</p>
                <p className="text-[14px] text-secundario">{p.papel}</p>
              </div>
              {p.linkedin && (
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`LinkedIn de ${p.nome}`}
                  className="text-acento hover:text-acento-2"
                >
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Resultado() {
  return (
    <section id="resultado" aria-labelledby="titulo-resultado" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <CabecalhoCase id="titulo-resultado" rotulo={resultado.rotulo} titulo={resultado.titulo} texto={resultado.texto} />
          <div className="flex flex-wrap gap-3">
            <BotaoExterno href={links.landingPage}>Ver landing page</BotaoExterno>
            <BotaoExterno href={links.figma} contorno>
              Ver no Figma
            </BotaoExterno>
          </div>
        </div>

        {/* Galeria dos detalhes da interface, em grade 2 × 2 */}
        <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2">
          {resultado.detalhes.map((d) => (
            <figure key={d.imagem}>
              <div className="overflow-hidden rounded-3xl border border-nevoa bg-claro">
                <ImagemComReserva
                  src={d.imagem}
                  alt={`Detalhe da landing page: ${d.legenda}`}
                  loading="lazy"
                  className="block h-auto w-full"
                  classeReserva="aspect-[4/3] w-full"
                />
              </div>
              <figcaption className="mt-3 text-[14px] font-medium text-secundario">{d.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Aprendizados() {
  return (
    <section
      id="aprendizados"
      aria-labelledby="titulo-aprendizados"
      className="relative isolate overflow-hidden bg-acento py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_100%_0%,rgb(var(--acento-2)/0.7),transparent_70%)]"
      />
      <div className={container}>
        <CabecalhoCase id="titulo-aprendizados" escuro rotulo={aprendizados.rotulo} titulo={aprendizados.titulo} />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {aprendizados.reflexoes.map((r, i) => (
            <article key={r.titulo} className="border-t border-white/25 pt-8">
              <span className="font-serif text-[20px] text-white/60">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-[32px] leading-tight sm:text-[40px]">{r.titulo}</h3>
              <p className="mt-5 text-[17px] leading-relaxed text-white/85">{r.texto}</p>
              {/* O exemplo concreto da divergência acompanha a reflexão sobre colaboração e escuta */}
              {i === 0 && (
                <div className="mt-6 rounded-2xl bg-white/10 p-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gelo">
                    {aprendizados.divergencia.rotulo}
                  </p>
                  <p className="mt-2 text-[16px] leading-relaxed text-white/90">{aprendizados.divergencia.texto}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/25 pt-10 lg:flex-row lg:items-start lg:justify-between">
          <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {aprendizados.tecnicos.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] text-white/85">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gelo" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <a
            href={links.postLinkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/40 px-6 py-3 text-[15px] font-semibold transition hover:bg-white hover:text-acento"
          >
            {aprendizados.post}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
