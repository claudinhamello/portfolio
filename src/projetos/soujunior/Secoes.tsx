import { useState } from 'react';
import { ArrowUpRight, Monitor, Smartphone, Sparkles, Users } from 'lucide-react';
import { CabecalhoCase } from '../CabecalhoCase';
import { Navegador } from '../Navegador';
import { ImagemComReserva } from '../../components/ImagemComReserva';
import { ExploradorLP } from './ExploradorLP';
import { LPMobile } from './LPMobile';
import { aprendizados, designSystem, desafio, ficha, hero, links, solucao, squad } from './dados';

const container = 'mx-auto max-w-pagina px-5 sm:px-8';
const card = 'rounded-3xl border border-nevoa bg-white';
// Fundo escuro da LP (Dark Obsidian), com a grade sutil de "mapa de jogo"
const fundoJogo =
  'bg-[#090D16] [background-image:linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]';

function BotaoPrototipo({ escuro = false }: { escuro?: boolean }) {
  return (
    <a
      href={links.prototipo}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold transition hover:-translate-y-0.5 ${
        escuro
          ? 'bg-[#00F0FF] text-[#090D16] shadow-[0_0_30px_-6px_rgba(0,240,255,0.6)]'
          : 'bg-acento text-white shadow-[0_12px_30px_-12px_rgb(var(--acento)/0.7)]'
      }`}
    >
      Ver protótipo interativo
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function HeroSouJunior() {
  return (
    <section id="inicio" aria-labelledby="titulo-soujunior" className="overflow-hidden bg-claro pb-16 pt-32 sm:pt-40 lg:pb-24">
      <div className={`${container} grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-12 [&>*]:min-w-0`}>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">{hero.rotulo}</p>
          <h1
            id="titulo-soujunior"
            className="mt-5 text-[40px] leading-[1.04] tracking-[-0.01em] text-processo sm:text-[62px] xl:text-[72px]"
          >
            <span className="block">{hero.titulo}</span>
            <span className="italic text-acento">{hero.tituloDestaque}</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-secundario sm:text-[19px]">{hero.texto}</p>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-acento-2/10 px-4 py-2 text-[14px] font-semibold text-acento-2">
            <Users className="h-4 w-4" aria-hidden="true" />
            {hero.selo}
          </p>
          <div className="mt-9">
            <BotaoPrototipo />
          </div>
        </div>

        {/* A LP num "monitor de jogo" escuro, com o crachá do hackathon pendurado na frente */}
        <div className={`relative rounded-[2rem] p-5 pb-24 sm:p-8 sm:pb-28 lg:pb-8 ${fundoJogo}`}>
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(50%_60%_at_90%_10%,rgba(139,92,246,0.35),transparent_70%),radial-gradient(45%_50%_at_0%_100%,rgba(0,240,255,0.18),transparent_70%)]"
          />
          <Navegador url="apoia.se/soujunior · landing page" className="relative border-white/10">
            <ImagemComReserva
              src={hero.imagem}
              alt={hero.alt}
              width={1440}
              height={760}
              {...{ fetchpriority: 'high' }}
              className="block aspect-[1440/760] w-full object-cover"
              classeReserva="aspect-[1440/760] w-full"
            />
          </Navegador>
          <div className="cracha-balanco absolute -bottom-6 right-4 w-[32%] max-w-[190px] origin-top sm:right-8 lg:-bottom-16 lg:-right-6">
            <ImagemComReserva
              src={hero.cracha.imagem}
              alt={hero.cracha.alt}
              width={900}
              height={1125}
              className="h-auto w-full rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
              classeReserva="aspect-[900/1125] w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FichaSouJunior() {
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

export function Squad() {
  return (
    <section id="squad" aria-labelledby="titulo-squad" className="bg-papel py-20 sm:py-28">
      <div className={container}>
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <CabecalhoCase id="titulo-squad" rotulo={squad.rotulo} titulo={squad.titulo} texto={squad.texto} />
          <figure>
            <ImagemComReserva
              src={squad.foto.imagem}
              alt={squad.foto.alt}
              width={1600}
              height={739}
              loading="lazy"
              className="h-auto w-full rounded-3xl shadow-[0_30px_60px_-34px_rgba(14,20,191,0.45)]"
              classeReserva="aspect-[1600/739] w-full rounded-3xl"
            />
            <figcaption className="mt-3 text-[14px] text-secundario">{squad.foto.legenda}</figcaption>
          </figure>
        </div>

        {/* O grupo como num RPG: cada papel é um personagem, o meu fica em destaque */}
        <h3 className="mt-20 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">
          O grupo, como na LP
        </h3>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {squad.papeis.map((p) => (
            <li
              key={p.papel}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-6 ${
                p.eu ? 'border-acento bg-white shadow-[0_24px_50px_-30px_rgb(var(--acento)/0.6)]' : 'border-nevoa bg-white'
              }`}
            >
              {p.eu && (
                <span className="absolute right-4 top-4 rounded-full bg-acento px-3 py-1 text-[12px] font-bold uppercase tracking-[0.12em] text-white">
                  Eu
                </span>
              )}
              <div className={`-mx-6 -mt-6 flex h-44 items-end justify-center ${fundoJogo}`}>
                <img
                  src={p.imagem}
                  alt=""
                  loading="lazy"
                  className="h-36 w-auto translate-y-2 object-contain [image-rendering:pixelated]"
                />
              </div>
              <p className="mt-5 font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-acento-2">{p.papel}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-processo">{p.texto}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[15px] text-secundario">Completavam a squad: {squad.apoio.join(' e ')}.</p>

        {/* Backlog de UX/UI: a coluna "Concluído" do quadro do Notion */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h3 className="text-[32px] leading-tight text-processo sm:text-[36px]">{squad.backlog.titulo}</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-secundario">{squad.backlog.texto}</p>
            <p className="mt-5 border-l-4 border-acento-2/40 pl-5 text-[16px] leading-relaxed text-processo">
              {squad.backlog.direcoes}
            </p>
          </div>
          <div className={`rounded-3xl p-5 sm:p-6 ${fundoJogo}`}>
            <p className="flex items-center gap-2 text-[13px] font-semibold text-white/80">
              <span className="rounded-full bg-[#22C55E]/20 px-2.5 py-0.5 text-[#86EFAC]">Concluído</span>
              {squad.backlog.itens.length}
            </p>
            <ul className="mt-4 grid gap-2.5">
              {squad.backlog.itens.map((item) => (
                <li
                  key={item.titulo}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                >
                  <span className="text-[15px] font-medium text-white">{item.titulo}</span>
                  {item.eu ? (
                    <span className="shrink-0 rounded-full bg-[#00F0FF] px-2.5 py-0.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[#090D16]">
                      Eu
                    </span>
                  ) : (
                    <span className="shrink-0 text-right text-[12px] text-white/60">{squad.backlog.legendaOutra}</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12px] text-white/55">Recriado a partir de um print do Notion da equipe de design.</p>
          </div>
        </div>

        {/* Como a squad trabalhou, em sequência */}
        <h3 className="mt-20 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">
          Como a squad trabalhou
        </h3>
        <ol className="mt-8 grid gap-6 md:grid-cols-5 md:gap-4">
          {squad.rituais.map((r, i) => (
            <li key={r.titulo} className="relative md:pt-8">
              {/* Trilha que liga as etapas, como uma barra de XP */}
              {i < squad.rituais.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-[-1rem] top-3 hidden h-1 rounded-full bg-gradient-to-r from-acento/70 to-acento-2/70 md:block"
                />
              )}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 hidden h-7 w-7 items-center justify-center rounded-full bg-acento font-mono text-[12px] font-bold text-white ring-4 ring-papel md:flex"
              >
                {i + 1}
              </span>
              <p className="flex items-center gap-2 font-serif text-[26px] leading-tight text-processo">
                <span className="font-mono text-[13px] font-bold text-acento md:hidden">{i + 1}.</span>
                {r.titulo}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-secundario">{r.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Desafio() {
  const { auditoria } = desafio;
  return (
    <section id="desafio" aria-labelledby="titulo-desafio" className="bg-claro py-20 sm:py-28">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <CabecalhoCase id="titulo-desafio" rotulo={desafio.rotulo} titulo={desafio.titulo} texto={desafio.texto} />
            <figure className="mt-10 border-l-4 border-acento pl-6">
              <blockquote className="font-serif text-[26px] leading-snug text-processo sm:text-[30px]">“{desafio.citacao}”</blockquote>
              <figcaption className="mt-3 text-[14px] text-secundario">
                <a href={links.briefing} target="_blank" rel="noreferrer" className="underline decoration-acento/40 underline-offset-4 hover:text-acento">
                  {desafio.fonteCitacao}
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="grid content-start gap-5">
            <div className={`${card} p-7`}>
              <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">Para quem</h3>
              <ul className="mt-4 grid gap-4">
                {desafio.personas.map((p) => (
                  <li key={p.titulo}>
                    <p className="text-[16px] font-semibold text-processo">{p.titulo}</p>
                    <p className="text-[15px] leading-relaxed text-secundario">{p.texto}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${card} p-7`}>
              <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">Como a banca avaliou</h3>
              <ul className="mt-5 grid gap-4">
                {desafio.criterios.map((c) => (
                  <li key={c.titulo}>
                    <div className="flex items-baseline justify-between gap-4 text-[15px] text-processo">
                      <span>{c.titulo}</span>
                      <span className="font-semibold">{c.peso}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-nevoa" aria-hidden="true">
                      <div className="h-full rounded-full bg-acento" style={{ width: `${(c.peso / 30) * 100}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Auditoria competitiva: o mercado x a proposta */}
        <div className="mt-20">
          <h3 className="text-[32px] leading-tight text-processo sm:text-[36px]">{auditoria.titulo}</h3>
          <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-secundario">{auditoria.texto}</p>
          <div className={`${card} mt-8 overflow-hidden`}>
            <div className="hidden grid-cols-[0.7fr_1fr_1.3fr] gap-6 border-b border-nevoa bg-nevoa/50 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-secundario md:grid">
              <span>Ponto</span>
              <span>O que a maioria faz</span>
              <span className="text-acento">O que propus</span>
            </div>
            <ul className="divide-y divide-nevoa">
              {auditoria.linhas.map((l) => (
                <li key={l.ponto} className="grid gap-2 px-7 py-5 md:grid-cols-[0.7fr_1fr_1.3fr] md:gap-6">
                  <p className="text-[16px] font-semibold text-processo">{l.ponto}</p>
                  <p className="text-[15px] leading-relaxed text-secundario">
                    <span className="font-semibold md:hidden">Mercado: </span>
                    {l.mercado}
                  </p>
                  <p className="text-[15px] leading-relaxed text-processo">
                    <span className="font-semibold text-acento md:hidden">Proposta: </span>
                    {l.proposta}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const versoes = [
  { id: 'desktop', rotulo: 'Desktop', Icone: Monitor },
  { id: 'mobile', rotulo: 'Mobile', Icone: Smartphone },
] as const;

export function Solucao() {
  const [versao, setVersao] = useState(0);
  return (
    <section id="solucao" aria-labelledby="titulo-solucao" className={`${fundoJogo} relative overflow-hidden py-20 sm:py-28`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(40%_40%_at_0%_0%,rgba(139,92,246,0.22),transparent_70%)]"
      />
      <div className={`${container} relative`}>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <CabecalhoCase
            id="titulo-solucao"
            escuro
            classeRotulo="text-[#00F0FF]"
            rotulo={solucao.rotulo}
            titulo={solucao.titulo}
            texto={solucao.texto}
          />
          <p className="font-mono text-[14px] font-bold uppercase tracking-[0.12em] text-[#00F0FF] [text-shadow:0_0_18px_rgba(0,240,255,0.6)]">
            {solucao.lema}
          </p>
        </div>
        <div role="tablist" aria-label="Versão da landing page" className="mt-12 flex w-fit gap-1 rounded-full bg-white/10 p-1">
          {versoes.map((v, i) => (
            <button
              key={v.id}
              role="tab"
              type="button"
              aria-selected={i === versao}
              aria-controls="painel-lp"
              onClick={() => setVersao(i)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold transition ${
                i === versao ? 'bg-[#00F0FF] text-[#090D16]' : 'text-white/75 hover:text-white'
              }`}
            >
              <v.Icone className="h-4 w-4" aria-hidden="true" />
              {v.rotulo}
            </button>
          ))}
        </div>
        <div id="painel-lp" role="tabpanel" className="mt-10">
          {versao === 0 ? <ExploradorLP /> : <LPMobile />}
        </div>
      </div>
    </section>
  );
}

export function DesignSystem() {
  const { cores, fontes, mascote, prototipo, capa } = designSystem;
  return (
    <section id="handoff" aria-labelledby="titulo-handoff" className="bg-papel py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-handoff" rotulo={designSystem.rotulo} titulo={designSystem.titulo} texto={designSystem.texto} />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className={`${card} p-7 sm:p-8`}>
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">Cores</h3>
            <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {cores.map((c) => (
                <li key={c.hex}>
                  <span
                    aria-hidden="true"
                    className="block h-20 rounded-2xl ring-1 ring-black/10"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="mt-2 text-[14px] font-semibold text-processo">{c.nome}</p>
                  <p className="font-mono text-[12px] text-secundario">{c.hex}</p>
                  <p className="mt-0.5 text-[13px] leading-snug text-secundario">{c.uso}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${card} p-7 sm:p-8`}>
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">Tipografia</h3>
            <ul className="mt-5 divide-y divide-nevoa">
              {fontes.map((f) => (
                <li key={f.nome} className="py-3.5 first:pt-0 last:pb-0">
                  <p className="text-[17px] font-semibold text-processo">{f.nome}</p>
                  <p className="text-[14px] leading-snug text-secundario">{f.uso}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mascote oficial e a versão em pixel art */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className={`${card} flex flex-col p-7 sm:p-8`}>
            <h3 className="text-[28px] leading-tight text-processo">{mascote.titulo}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-secundario">{mascote.texto}</p>
            <div className={`mt-6 flex flex-1 items-center justify-center gap-6 rounded-2xl p-6 ${fundoJogo}`}>
              <img src={mascote.oficial.imagem} alt={mascote.oficial.alt} loading="lazy" className="h-28 w-28 rounded-xl object-cover" />
              <span aria-hidden="true" className="font-mono text-[20px] font-bold text-[#00F0FF]">→</span>
              <img
                src={mascote.pixel.imagem}
                alt={mascote.pixel.alt}
                loading="lazy"
                width={70}
                height={70}
                className="h-28 w-28 [image-rendering:pixelated]"
              />
            </div>
          </div>
          <figure className={`${card} overflow-hidden p-3`}>
            <ImagemComReserva
              src={capa.imagem}
              alt={capa.alt}
              width={1600}
              height={900}
              loading="lazy"
              className="h-auto w-full rounded-2xl"
              classeReserva="aspect-video w-full rounded-2xl"
            />
            <figcaption className="px-4 pb-2 pt-4 text-[14px] text-secundario">{capa.legenda}</figcaption>
          </figure>
        </div>

        {/* Protótipo interativo no Figma Make */}
        <div className={`mt-6 grid items-center gap-8 overflow-hidden rounded-3xl p-7 sm:p-10 lg:grid-cols-[1fr_auto] ${fundoJogo}`}>
          <div>
            <h3 className="text-[30px] leading-tight text-white">{prototipo.titulo}</h3>
            <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-white/80">{prototipo.texto}</p>
          </div>
          <BotaoPrototipo escuro />
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
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_100%_0%,rgba(0,240,255,0.25),transparent_70%),radial-gradient(40%_50%_at_0%_100%,rgba(139,92,246,0.4),transparent_70%)]"
      />
      <div className={container}>
        <CabecalhoCase id="titulo-aprendizados" escuro classeRotulo="text-[#7DF9FF]" rotulo={aprendizados.rotulo} titulo={aprendizados.titulo} />
        <p className="mt-10 max-w-3xl font-serif text-[28px] leading-snug sm:text-[32px]">{aprendizados.resultado}</p>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {aprendizados.itens.map((a) => (
            <article key={a.titulo} className="border-t border-white/25 pt-7">
              <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7DF9FF]">{a.titulo}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-white/90">{a.texto}</p>
            </article>
          ))}
        </div>
        <aside className="mt-14 max-w-2xl rounded-3xl bg-white/10 p-7">
          <h3 className="flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7DF9FF]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Onde usei IA neste projeto
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-white/85">{aprendizados.ia}</p>
        </aside>
      </div>
    </section>
  );
}
