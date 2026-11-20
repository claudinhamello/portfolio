import { ArrowUpRight } from 'lucide-react';
import { CabecalhoCase } from '../CabecalhoCase';
import { Celular3D } from '../Celular';
import { ImagemComReserva } from '../../components/ImagemComReserva';
import { designSystem, equipe, ficha, hero, links, pesquisa, problema, proximosPassos } from './dados';

const container = 'mx-auto max-w-pagina px-5 sm:px-8';
const card = 'rounded-3xl border border-nevoa bg-white';

export function HeroBeReady() {
  return (
    <section id="inicio" aria-labelledby="titulo-beready" className="bg-claro pb-16 pt-32 sm:pt-40 lg:pb-24">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16`}>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">{hero.rotulo}</p>
          <h1
            id="titulo-beready"
            className="mt-5 text-[48px] leading-[1.02] tracking-[-0.01em] text-processo sm:text-[64px] xl:text-[76px]"
          >
            <span className="block">{hero.titulo}</span>
            <span className="italic text-acento">{hero.tituloDestaque}</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-secundario sm:text-[19px]">{hero.texto}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            {links.prototipoFigma && (
              <a
                href={links.prototipoFigma}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-acento px-8 py-4 text-[15px] font-semibold text-white shadow-[0_12px_30px_-12px_rgb(var(--acento)/0.7)] transition hover:-translate-y-0.5"
              >
                Ver protótipo no Figma
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            <span className="rounded-full bg-acento-2/10 px-4 py-2 text-[13px] font-medium text-acento-2">
              {hero.status}
            </span>
          </div>
        </div>

        {/* Dois celulares em 3D, virados um para o outro: o da esquerda é o da direita espelhado.
            Evitar rotação y positiva: no navegador da Claudia ela cortava a tela do celular. */}
        <div className="relative mx-auto aspect-[1/1.1] w-full max-w-[460px] lg:mr-0">
          <Celular3D
            src={hero.telas[0].imagem}
            altura={hero.telas[0].altura}
            alt={hero.telas[0].alt}
            prioridade
            espelhado
            className="absolute left-[6%] top-0 w-[42%]"
          />
          <Celular3D
            src={hero.telas[1].imagem}
            altura={hero.telas[1].altura}
            alt={hero.telas[1].alt}
            prioridade
            rotacao={{ x: -6, y: -26, z: 5 }}
            className="absolute bottom-0 right-[12%] w-[42%]"
          />
        </div>
      </div>
    </section>
  );
}

export function FichaProjeto() {
  return (
    <section aria-label="Ficha do projeto" className="border-y border-nevoa bg-white">
      <dl className={`${container} grid gap-x-12 gap-y-7 py-10 sm:grid-cols-2 lg:grid-cols-4`}>
        {ficha.map((f) => (
          <div key={f.rotulo}>
            <dt className="text-[13px] font-semibold uppercase tracking-[0.14em] text-acento-2">{f.rotulo}</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-processo">{f.texto}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Problema() {
  return (
    <section id="problema" aria-labelledby="titulo-problema" className="bg-claro py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase
          id="titulo-problema"
          rotulo={problema.rotulo}
          titulo={problema.titulo.map((t) => (
            <span key={t} className="block">
              {t}
            </span>
          ))}
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problema.cards.map((c) => (
            <li key={c.titulo} className={`${card} p-6 sm:p-7`}>
              <h3 className="font-sans text-[18px] font-semibold leading-snug text-processo">{c.titulo}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-secundario">{c.texto}</p>
            </li>
          ))}
        </ul>

        <figure className="mt-8 rounded-3xl bg-acento-2 px-7 py-10 text-white sm:px-12 sm:py-12">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-gelo">{problema.surpresa.rotulo}</p>
          <blockquote className="mt-4 max-w-3xl font-serif text-[24px] leading-snug sm:text-[28px]">
            {problema.surpresa.texto}
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

export function Pesquisa() {
  return (
    <section id="pesquisa" aria-labelledby="titulo-pesquisa" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-pesquisa" rotulo={pesquisa.rotulo} titulo={pesquisa.titulo} />

        <dl className="mt-12 grid gap-8 sm:grid-cols-3">
          {pesquisa.metricas.map((m) => (
            <div key={m.legenda} className="border-t border-nevoa pt-6">
              <dt className="sr-only">{m.legenda}</dt>
              <dd>
                <span className="block font-serif text-[72px] leading-none text-acento">{m.valor}</span>
                <span className="mt-3 block text-[15px] text-secundario">{m.legenda}</span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 max-w-3xl text-[17px] leading-relaxed text-secundario">{pesquisa.texto}</p>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {pesquisa.resultados.map((r) => (
            <li key={r.titulo} className={`${card} bg-claro p-6 sm:p-7`}>
              <h3 className="font-sans text-[18px] font-semibold text-processo">{r.titulo}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-secundario">{r.texto}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-[15px] text-secundario">{pesquisa.fluxosIntro}</p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {pesquisa.fluxos.map((f) => (
            <li key={f} className="rounded-full bg-acento/10 px-4 py-2 text-[14px] font-medium text-acento">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DesignSystem() {
  const { tipografia, cores } = designSystem;
  return (
    <section id="design-system" aria-labelledby="titulo-design-system" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase
          id="titulo-design-system"
          rotulo={designSystem.rotulo}
          titulo={designSystem.titulo}
          texto={designSystem.texto}
        />

        <div className="mt-16">
          <h3 className="font-sans text-[22px] font-semibold text-processo">{tipografia.titulo}</h3>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-secundario">{tipografia.texto}</p>
          <div className={`${card} mt-8 overflow-hidden p-3 sm:p-5`}>
            <ImagemComReserva
              src={tipografia.imagem}
              alt={tipografia.alt}
              loading="lazy"
              className="h-auto w-full rounded-2xl"
              classeReserva="aspect-[16/9] w-full rounded-2xl"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-sans text-[22px] font-semibold text-processo">{cores.titulo}</h3>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-secundario">{cores.texto}</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {[cores.claro, cores.escuro].map((c) => (
              <ImagemComReserva
                key={c.imagem}
                src={c.imagem}
                alt={c.alt}
                loading="lazy"
                className="h-auto w-full rounded-2xl border border-nevoa"
                classeReserva="aspect-[3/4] w-full rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProximosPassos() {
  return (
    <section id="proximos-passos" aria-labelledby="titulo-proximos" className="bg-claro py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-proximos" rotulo={proximosPassos.rotulo} titulo={proximosPassos.titulo} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proximosPassos.cards.map((c) => (
            <li key={c.titulo} className={`${card} p-6 sm:p-7`}>
              <h3 className="font-sans text-[18px] font-semibold text-processo">{c.titulo}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-secundario">{c.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Equipe() {
  return (
    <section
      id="equipe"
      aria-labelledby="titulo-equipe"
      className="bg-[linear-gradient(135deg,#EDEBF8_0%,#E6EEF8_50%,#E2F4F6_100%)] py-20 sm:py-24"
    >
      <div className={container}>
        <h2 id="titulo-equipe" className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">
          {equipe.rotulo}
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {equipe.pessoas.map((p) => (
            <li
              key={p.nome}
              className="rounded-3xl border border-white/70 bg-white/55 p-7 shadow-[0_20px_50px_-30px_rgba(18,59,90,0.35)] backdrop-blur-md sm:p-9"
            >
              <h3 className="text-[30px] leading-tight text-processo">{p.nome}</h3>
              <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-acento-2">{p.cargo}</p>
              <p className="mt-4 text-[16px] leading-relaxed text-secundario">{p.texto}</p>
              {p.linkedin && (
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`LinkedIn de ${p.nome}`}
                  className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-acento px-6 py-2.5 text-[15px] font-semibold text-acento transition hover:bg-acento hover:text-white"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
