import { Sparkles } from 'lucide-react';
import { CabecalhoCase } from '../CabecalhoCase';
import { ImagemComReserva } from '../../components/ImagemComReserva';
import { Anatomia } from './Anatomia';
import { acessibilidade, anatomia, apresentacao, aprendizados, dores, ficha, hero, naRua, pesquisa, problema } from './dados';

const container = 'mx-auto max-w-pagina px-5 sm:px-8';
const card = 'rounded-3xl border border-nevoa bg-white';

export function HeroPlacas() {
  return (
    <section id="inicio" aria-labelledby="titulo-placas" className="bg-claro pb-16 pt-32 sm:pt-40 lg:pb-24">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16`}>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">{hero.rotulo}</p>
          <h1
            id="titulo-placas"
            className="mt-5 text-[48px] leading-[1.02] tracking-[-0.01em] text-processo sm:text-[64px] xl:text-[76px]"
          >
            <span className="block">{hero.titulo}</span>
            <span className="italic text-acento">{hero.tituloDestaque}</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-secundario sm:text-[19px]">{hero.texto}</p>
          <p className="mt-8 inline-flex rounded-full bg-acento/10 px-4 py-2 text-[13px] font-medium text-acento">
            {hero.aviso}
          </p>
        </div>
        <figure className="relative mx-auto w-full max-w-[420px]">
          <ImagemComReserva
            src={hero.imagem}
            alt={hero.alt}
            width={1200}
            height={2132}
            {...{ fetchpriority: 'high' }}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_30%] shadow-[0_40px_80px_-40px_rgba(10,14,60,0.55)]"
            classeReserva="aspect-[4/5] w-full rounded-[2rem]"
          />
        </figure>
      </div>
    </section>
  );
}

export function FichaPlacas() {
  return (
    <section aria-label="Ficha do projeto" className="border-y border-nevoa bg-white">
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

export function Problema() {
  return (
    <section id="problema" aria-labelledby="titulo-problema" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-problema" rotulo={problema.rotulo} titulo={problema.titulo} texto={problema.texto} />
      </div>
    </section>
  );
}

/** Oito bolinhas, uma por motorista; as preenchidas são as que responderam "sim" */
function Pictograma({ valor, total }: { valor: number; total: number }) {
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`h-4 w-4 rounded-full sm:h-5 sm:w-5 ${i < valor ? 'bg-acento' : 'border-2 border-acento/25'}`}
        />
      ))}
    </span>
  );
}

export function Pesquisa() {
  const { total, dados, situacoes, falas } = pesquisa;
  return (
    <section id="pesquisa" aria-labelledby="titulo-pesquisa" className="bg-claro py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-pesquisa" rotulo={pesquisa.rotulo} titulo={pesquisa.titulo} texto={pesquisa.texto} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ul className={`${card} divide-y divide-nevoa px-7 sm:px-9`}>
            {dados.map((d) => (
              <li key={d.texto} className="grid gap-4 py-7 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">
                <div>
                  <p className="font-serif text-[56px] leading-none text-acento">
                    {d.valor}
                    <span className="text-[26px] text-acento-2"> de {total}</span>
                  </p>
                  <div className="mt-3">
                    <Pictograma valor={d.valor} total={total} />
                  </div>
                </div>
                <p className="text-[17px] leading-relaxed text-processo">
                  <span className="sr-only">
                    {d.valor} de {total} motoristas{' '}
                  </span>
                  {d.texto}
                </p>
              </li>
            ))}
          </ul>

          <div className={`${card} p-7 sm:p-9`}>
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">{situacoes.titulo}</h3>
            <ul className="mt-6 grid gap-5">
              {situacoes.itens.map((s) => (
                <li key={s.rotulo}>
                  <div className="flex items-baseline justify-between gap-4 text-[16px] text-processo">
                    <span>{s.rotulo}</span>
                    <span className="font-semibold">
                      {s.valor} de {total}
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-nevoa" aria-hidden="true">
                    <div className="h-full rounded-full bg-acento" style={{ width: `${(s.valor / total) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] text-secundario">Cada pessoa escolheu uma opção.</p>
          </div>
        </div>

        {/* Falas dos motoristas no formato de placa: branco sobre o azul do projeto */}
        <h3 className="mt-16 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">
          Nas palavras de quem respondeu
        </h3>
        <ul className="mt-5 grid gap-5 md:grid-cols-2">
          {falas.map((f) => (
            <li key={f} className="rounded-2xl bg-acento p-1">
              <blockquote className="h-full rounded-[0.85rem] border-2 border-white/80 px-6 py-5 font-serif text-[22px] leading-snug text-white sm:text-[24px]">
                “{f}”
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Dores() {
  return (
    <section id="dores" aria-labelledby="titulo-dores" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-dores" rotulo={dores.rotulo} titulo={dores.titulo} />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {dores.itens.map((d, i) => (
            <li key={d.titulo} className={`${card} p-6`}>
              <span className="font-serif text-[40px] leading-none text-acento/40">{i + 1}</span>
              <h3 className="mt-4 text-[26px] leading-tight text-processo">{d.titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-secundario">{d.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Placa() {
  return (
    <section id="placa" aria-labelledby="titulo-placa" className="bg-claro py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-placa" rotulo={anatomia.rotulo} titulo={anatomia.titulo} texto={anatomia.texto} />
        <div className="mt-12">
          <Anatomia />
        </div>
      </div>
    </section>
  );
}

export function NaRua() {
  return (
    <section id="na-rua" aria-labelledby="titulo-na-rua" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-na-rua" rotulo={naRua.rotulo} titulo={naRua.titulo} texto={naRua.texto} />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {naRua.fotos.map((f) => (
            <figure key={f.imagem}>
              <ImagemComReserva
                src={f.imagem}
                alt={f.alt}
                width={1200}
                height={2132}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover"
                classeReserva="aspect-[4/5] w-full rounded-3xl"
              />
              <figcaption className="mt-4 max-w-md text-[15px] leading-relaxed text-secundario">{f.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Apresentacao() {
  return (
    <section id="apresentacao" aria-labelledby="titulo-apresentacao" className="bg-claro py-20 sm:py-28">
      <div className={`${container} grid items-center gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16`}>
        <CabecalhoCase
          id="titulo-apresentacao"
          rotulo={apresentacao.rotulo}
          titulo={apresentacao.titulo}
          texto={apresentacao.texto}
        />
        <ImagemComReserva
          src={apresentacao.imagem}
          alt={apresentacao.alt}
          width={1800}
          height={1013}
          loading="lazy"
          className="h-auto w-full rounded-3xl shadow-[0_40px_80px_-40px_rgba(10,14,60,0.45)]"
          classeReserva="aspect-[1800/1013] w-full rounded-3xl"
        />
      </div>
    </section>
  );
}

export function Acessibilidade() {
  return (
    <section id="acessibilidade" aria-labelledby="titulo-acessibilidade" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <CabecalhoCase id="titulo-acessibilidade" rotulo={acessibilidade.rotulo} titulo={acessibilidade.titulo} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {acessibilidade.itens.map((a) => (
            <li key={a.titulo} className="border-t-2 border-acento pt-6">
              <h3 className="text-[26px] leading-tight text-processo">{a.titulo}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-secundario">{a.texto}</p>
            </li>
          ))}
        </ul>
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
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_100%_0%,rgb(var(--acento-2)/0.55),transparent_70%)]"
      />
      <div className={container}>
        <CabecalhoCase id="titulo-aprendizados" escuro rotulo={aprendizados.rotulo} titulo={aprendizados.titulo} />
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <article className="border-t border-white/25 pt-8">
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-gelo">Impacto</h3>
            <p className="mt-4 font-serif text-[28px] leading-snug sm:text-[32px]">{aprendizados.impacto}</p>
          </article>
          <article className="border-t border-white/25 pt-8">
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-gelo">O que aprendi</h3>
            <p className="mt-4 font-serif text-[28px] leading-snug sm:text-[32px]">{aprendizados.aprendi}</p>
          </article>
        </div>
        <aside className="mt-14 max-w-2xl rounded-3xl bg-white/10 p-7">
          <h3 className="flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-gelo">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Onde usei IA neste projeto
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-white/85">{aprendizados.ia}</p>
        </aside>
      </div>
    </section>
  );
}
