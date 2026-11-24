import {
  AlarmClock,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChefHat,
  Contrast,
  CornerDownRight,
  Hand,
  Headphones,
  Snowflake,
  Sparkles,
  Type,
  X,
} from 'lucide-react';
import { CabecalhoCase } from '../CabecalhoCase';
import { Celular } from '../Celular';
import { ImagemComReserva } from '../../components/ImagemComReserva';
import { Componentes } from './Componentes';
import { ModoDePreparo } from './ModoDePreparo';
import { Ramo, Vapor } from './Ornamentos';
import { aprendizados, componentes, entender, ficha, hero, links, personas, processo, solucao } from './dados';

const container = 'mx-auto max-w-pagina px-5 sm:px-8';
// Creme do app, usado como fundo quente em algumas seções
const creme = 'bg-[#FFF8EF]';

function BotaoPrototipo({ claro = false }: { claro?: boolean }) {
  return (
    <a
      href={links.prototipo}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold transition hover:-translate-y-0.5 ${
        claro
          ? 'bg-[#F2B705] text-[#2B3A26]'
          : 'bg-acento text-white shadow-[0_12px_30px_-12px_rgb(var(--acento)/0.7)]'
      }`}
    >
      Ver protótipo no Figma
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

/** Chip igual ao do app, flutuando ao lado dos celulares */
function ChipFlutuante({ children, className, Icone }: { children: string; className: string; Icone: typeof Check }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#7A5A0F] shadow-[0_10px_24px_-10px_rgba(122,90,15,0.45)] ${className}`}
    >
      <Icone className="h-4 w-4" />
      {children}
    </span>
  );
}

export function HeroWok() {
  return (
    <section id="inicio" aria-labelledby="titulo-wok" className={`${creme} overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-24`}>
      <div className={`${container} grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12`}>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">{hero.rotulo}</p>
          <h1
            id="titulo-wok"
            className="mt-5 text-[48px] leading-[1.02] tracking-[-0.01em] text-processo sm:text-[64px] xl:text-[76px]"
          >
            <span className="block">{hero.titulo}</span>
            <span className="italic text-acento">{hero.tituloDestaque}</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-secundario sm:text-[19px]">{hero.texto}</p>

          {/* Ficha do projeto como ficha de receita: rótulo, pontilhado e valor */}
          <div className="mt-10 max-w-xl rounded-3xl border-2 border-dashed border-[#E2CFAF] bg-white/70 p-6 sm:p-7">
            <p className="flex items-center gap-2 font-serif text-[24px] text-acento-2">
              <ChefHat className="h-5 w-5" aria-hidden="true" />
              Ficha da receita
            </p>
            <dl className="mt-4 grid gap-3">
              {ficha.map((f) => (
                <div key={f.rotulo} className="grid gap-0.5 sm:flex sm:items-baseline sm:gap-3">
                  <dt className="shrink-0 text-[13px] font-semibold uppercase tracking-[0.12em] text-acento-2">{f.rotulo}</dt>
                  <span aria-hidden="true" className="hidden flex-1 border-b-2 border-dotted border-[#E2CFAF] sm:block" />
                  <dd className="text-[15px] font-medium text-processo sm:max-w-[60%] sm:text-right">{f.texto}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-9">
            <BotaoPrototipo />
          </div>
        </div>

        {/* Os celulares servidos numa tábua redonda, com vapor subindo */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <div
            aria-hidden="true"
            className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle_at_50%_45%,#F6E3C4_0%,#EBCB9B_58%,#DDB57E_59%,#E8C590_63%,#F3DDBA_100%)] shadow-[0_40px_80px_-40px_rgba(122,90,15,0.55)]"
          />
          <div aria-hidden="true" className="absolute inset-[11%] rounded-full border border-[#C99A5B]/30" />
          <Vapor className="absolute left-1/2 top-[-4%] w-20 -translate-x-1/2 text-[#C99A5B]/70" />
          <div className="absolute left-[14%] top-[13%] w-[36%] -rotate-[8deg]">
            <Celular src={hero.telaFundo.imagem} alt={hero.telaFundo.alt} altura={hero.telaFundo.altura} prioridade />
          </div>
          <div className="absolute right-[13%] top-[8%] w-[38%] rotate-[5deg]">
            <Celular src={hero.telaFrente.imagem} alt={hero.telaFrente.alt} altura={hero.telaFrente.altura} prioridade />
          </div>
          <ChipFlutuante Icone={AlarmClock} className="bottom-[14%] left-[4%]">Até 40min</ChipFlutuante>
          <ChipFlutuante Icone={Snowflake} className="bottom-[6%] right-[10%]">Para congelar</ChipFlutuante>
        </div>
      </div>
    </section>
  );
}

export function Entender() {
  return (
    <section id="entender" aria-labelledby="titulo-entender" className="relative overflow-hidden bg-papel py-20 sm:py-28">
      <Ramo className="pointer-events-none absolute -right-6 top-10 hidden w-28 rotate-12 text-acento/15 lg:block" />
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <CabecalhoCase id="titulo-entender" rotulo={`Passo 1 · ${entender.rotulo}`} titulo={entender.titulo} texto={entender.texto} />

          {/* As dores no formato da lista de ingredientes do app */}
          <div className="rounded-3xl border border-[#E6D9C8] bg-white p-7 sm:p-8">
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">
              Ingredientes da frustração
            </h3>
            <ul className="mt-5 grid gap-3.5">
              {entender.dores.map((d) => (
                <li key={d} className="flex gap-3 text-[16px] leading-snug text-processo">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-2 border-acento bg-acento text-white"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-20 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">
          Para quem eu estava cozinhando
        </h3>
        <ul className="mt-6 grid gap-8 lg:grid-cols-2">
          {personas.map((p, i) => (
            <li key={p.nome} className="relative rounded-3xl border border-[#E6D9C8] bg-white p-6 pt-8 sm:p-8 sm:pt-10">
              {/* Fita adesiva, como uma receita presa na geladeira */}
              <span
                aria-hidden="true"
                className={`absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 bg-[#F2B705]/45 ${i ? 'rotate-[3deg]' : '-rotate-[3deg]'}`}
              />
              <div className="grid gap-6 sm:grid-cols-[180px_1fr]">
                <ImagemComReserva
                  src={p.imagem}
                  alt={p.alt}
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl object-cover sm:w-[180px]"
                  classeReserva="aspect-square w-full rounded-2xl sm:w-[180px]"
                />
                <div>
                  <p className="font-serif text-[30px] leading-tight text-processo">{p.nome}</p>
                  <p className="mt-1 text-[14px] font-medium text-secundario">{p.perfil}</p>
                  <blockquote className="mt-4 font-serif text-[21px] italic leading-snug text-acento">“{p.frase}”</blockquote>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-secundario">{p.contexto}</p>
              <div className="mt-6 grid gap-6 border-t border-[#EFE4D4] pt-6 sm:grid-cols-2">
                <div>
                  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-acento">Metas</p>
                  <ul className="mt-3 grid gap-2">
                    {p.metas.map((m) => (
                      <li key={m} className="flex gap-2 text-[15px] leading-snug text-processo">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-acento" aria-hidden="true" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-acento-2">Frustrações</p>
                  <ul className="mt-3 grid gap-2">
                    {p.frustracoes.map((f) => (
                      <li key={f} className="flex gap-2 text-[15px] leading-snug text-processo">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-acento-2" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Par antes/depois: o wireframe testado e a tela ajustada */
function AntesDepois({ m }: { m: (typeof processo.mudancas)[number] }) {
  return (
    <li className="rounded-3xl border border-[#E6D9C8] bg-white p-6 sm:p-8">
      <h4 className="font-serif text-[28px] leading-tight text-processo">{m.titulo}</h4>
      <p className="mt-2 text-[15px] leading-relaxed text-secundario">{m.texto}</p>
      {/* Antes: o wireframe testado (já vem com moldura). Depois: a tela redesenhada, na moldura do site. */}
      <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-end gap-3 sm:gap-5">
        <figure className="text-center">
          <ImagemComReserva
            src={m.antes.imagem}
            alt={m.antes.alt}
            loading="lazy"
            className="mx-auto aspect-[320/674] w-full max-w-[170px] object-contain"
            classeReserva="mx-auto aspect-[320/674] w-full max-w-[170px] rounded-2xl"
          />
          <figcaption className="mt-3 whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.1em] text-acento-2 sm:text-[13px]">Antes do teste</figcaption>
        </figure>
        <ArrowRight className="self-center h-6 w-6 text-acento" aria-hidden="true" />
        <figure className="text-center">
          {/* Mesma proporção do "antes": telas mais longas aparecem roladas no topo */}
          <div className="mx-auto w-full max-w-[170px]">
            <Celular src={m.depois.imagem} alt={m.depois.alt} altura={Math.min(m.depois.altura, 758)} />
          </div>
          <figcaption className="mt-3 whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.1em] text-acento-2 sm:text-[13px]">Depois do teste</figcaption>
        </figure>
      </div>
    </li>
  );
}

export function Processo() {
  const { ideacao, estudo, mudancas } = processo;
  return (
    <section id="processo" aria-labelledby="titulo-processo" className={`${creme} py-20 sm:py-28`}>
      <div className={container}>
        <CabecalhoCase id="titulo-processo" rotulo={`Passo 2 · ${processo.rotulo}`} titulo={processo.titulo} />

        {/* Ideação: o quadro de post-its "preso na geladeira" e os rascunhos */}
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <figure className="relative mx-auto w-full max-w-[380px] -rotate-[1.5deg] rounded-2xl bg-white p-3 shadow-[0_30px_60px_-30px_rgba(122,90,15,0.5)]">
            {/* Ímã de geladeira */}
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full bg-[#F2B705] shadow-[0_4px_8px_-2px_rgba(0,0,0,0.35)]"
            />
            <ImagemComReserva
              src={ideacao.postits.imagem}
              alt={ideacao.postits.alt}
              loading="lazy"
              width={900}
              height={1427}
              className="h-auto w-full rounded-xl"
              classeReserva="aspect-[900/1427] w-full rounded-xl"
            />
          </figure>
          <div>
            <h3 className="text-[32px] leading-tight text-processo">{ideacao.titulo}</h3>
            <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-secundario">{ideacao.texto}</p>
            <figure className="mt-8">
              <ImagemComReserva
                src={ideacao.rascunhos.imagem}
                alt={ideacao.rascunhos.alt}
                loading="lazy"
                width={1800}
                height={1249}
                className="h-auto w-full rounded-3xl border border-[#E6D9C8]"
                classeReserva="aspect-[1800/1249] w-full rounded-3xl"
              />
              <figcaption className="mt-3 text-[14px] text-secundario">{ideacao.rascunhos.legenda}</figcaption>
            </figure>
          </div>
        </div>

        {/* Estudo de usabilidade */}
        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h3 className="text-[32px] leading-tight text-processo">{estudo.titulo}</h3>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Parâmetros do estudo">
              {estudo.parametros.map((p) => (
                <li key={p} className="rounded-full border border-[#E2CFAF] bg-white px-4 py-2 text-[14px] font-semibold text-acento-2">
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {estudo.rodadas.map((r) => (
                <div key={r.titulo} className="border-t-2 border-acento pt-5">
                  <p className="font-serif text-[24px] text-acento">{r.titulo}</p>
                  <ul className="mt-3 grid gap-3">
                    {r.itens.map((t) => (
                      <li key={t} className="flex gap-2 text-[15px] leading-snug text-processo">
                        <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-acento-2" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <figure>
            <ImagemComReserva
              src={estudo.afinidade.imagem}
              alt={estudo.afinidade.alt}
              loading="lazy"
              width={1600}
              height={1334}
              className="h-auto w-full rounded-3xl border border-[#E6D9C8] bg-white"
              classeReserva="aspect-[1600/1334] w-full rounded-3xl"
            />
            <figcaption className="mt-3 text-[14px] text-secundario">{estudo.afinidade.legenda}</figcaption>
          </figure>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {mudancas.map((m) => (
            <AntesDepois key={m.titulo} m={m} />
          ))}
        </ul>
      </div>
    </section>
  );
}

// Caminho principal do app (arquitetura da informação), do mapa feito em 2023
const caminho = [
  { titulo: 'Abrir o app' },
  { titulo: 'Escolher categoria', alternativa: 'ou buscar por ingrediente' },
  { titulo: 'Escolher a receita' },
  { titulo: 'Tem os ingredientes?', desvio: 'Não: gera a lista do mercado' },
  { titulo: 'Registrar o preparo', alternativa: 'data, mudanças, nota e quando repetir' },
  { titulo: 'Ganhar mais receitas' },
];

function Arquitetura() {
  return (
    <div className="mt-20 rounded-3xl border border-white/15 bg-white/[0.06] p-7 sm:p-9">
      <h3 className="font-serif text-[30px] leading-tight text-white">{solucao.arquitetura.titulo}</h3>
      <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-white/80">{solucao.arquitetura.texto}</p>
      <ol className="mt-8 grid auto-rows-fr gap-3 lg:grid-cols-6 lg:gap-2">
        {caminho.map((c, i) => (
          <li key={c.titulo} className="relative flex">
            <div
              className={`flex-1 rounded-2xl px-4 py-4 ${
                c.desvio ? 'border-2 border-dashed border-[#F2B705]/70' : 'bg-white/10'
              }`}
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#F2B705]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-1 text-[16px] font-semibold leading-snug text-white">{c.titulo}</p>
              {c.alternativa && <p className="mt-1 text-[14px] leading-snug text-white/70">{c.alternativa}</p>}
              {c.desvio && <p className="mt-1 text-[14px] leading-snug text-[#F8D56B]">{c.desvio}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Solucao() {
  return (
    <section id="solucao" aria-labelledby="titulo-solucao" className="relative isolate overflow-hidden bg-[#2B3A26] py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_100%_0%,rgba(242,183,5,0.16),transparent_70%),radial-gradient(40%_45%_at_0%_100%,rgb(var(--acento)/0.5),transparent_70%)]"
      />
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <CabecalhoCase id="titulo-solucao" escuro classeRotulo="text-[#F2B705]" rotulo={`Passo 3 · ${solucao.rotulo}`} titulo={solucao.titulo} texto={solucao.texto} />
          <BotaoPrototipo claro />
        </div>
        <div className="mt-14">
          <ModoDePreparo />
        </div>
        <Arquitetura />
      </div>
    </section>
  );
}

const iconesAcessibilidade = [Headphones, Contrast, Hand, Type];

export function ComponentesWok() {
  return (
    <section id="componentes" aria-labelledby="titulo-componentes" className="relative overflow-hidden bg-papel py-20 sm:py-28">
      <Ramo className="pointer-events-none absolute -left-8 bottom-10 hidden w-28 -rotate-12 text-acento/15 lg:block" />
      <div className={container}>
        <CabecalhoCase id="titulo-componentes" rotulo={componentes.rotulo} titulo={componentes.titulo} texto={componentes.texto} />
        <div className="mt-12">
          <Componentes />
        </div>

        <h3 className="mt-20 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">
          Acessibilidade no mesmo prato
        </h3>
        <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {componentes.acessibilidade.map((a, i) => {
            const Icone = iconesAcessibilidade[i];
            return (
              <li key={a.titulo}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-acento/10 text-acento">
                  <Icone className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-serif text-[24px] leading-tight text-processo">{a.titulo}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-secundario">{a.texto}</p>
              </li>
            );
          })}
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
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_100%_0%,rgba(242,183,5,0.28),transparent_70%)]"
      />
      <div className={container}>
        <CabecalhoCase id="titulo-aprendizados" escuro classeRotulo="text-[#F8D56B]" rotulo={aprendizados.rotulo} titulo={aprendizados.titulo} />
        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-12">
          <article className="border-t border-white/25 pt-8">
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#F8D56B]">Impacto</h3>
            <p className="mt-4 font-serif text-[24px] leading-snug sm:text-[26px]">{aprendizados.impacto}</p>
          </article>
          <article className="border-t border-white/25 pt-8">
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#F8D56B]">O que aprendi</h3>
            <p className="mt-4 font-serif text-[24px] leading-snug sm:text-[26px]">{aprendizados.aprendi}</p>
          </article>
          <article className="border-t border-white/25 pt-8">
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#F8D56B]">Próximos passos</h3>
            <ul className="mt-4 grid gap-3">
              {aprendizados.proximos.map((p) => (
                <li key={p} className="flex gap-2 text-[17px] leading-snug text-white/90">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#F8D56B]" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <aside className="mt-14 max-w-2xl rounded-3xl bg-white/10 p-7">
          <h3 className="flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#F8D56B]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Onde usei IA neste projeto
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-white/85">{aprendizados.ia}</p>
        </aside>
      </div>
    </section>
  );
}
