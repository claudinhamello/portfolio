import { contato } from '../conteudo';

const valores = [
  { titulo: 'Escuta', texto: 'Entender o contexto antes de propor soluções.' },
  { titulo: 'Curiosidade', texto: 'Pesquisar, testar e questionar antes de decidir.' },
  { titulo: 'Colaboração', texto: 'Trabalhar junto com quem constrói e decide.' },
];

export function SobreMim() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-pagina px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-roxo">Sobre mim</p>
            <h2 id="titulo-sobre" className="mt-3 text-[40px] leading-[1.08] text-processo sm:text-[52px]">
              Para mim, bom design começa pela{' '}
              <span className="texto-gradiente italic">escuta.</span>
            </h2>
            <p className="mt-7 max-w-[560px] text-[17px] leading-[1.7] text-secundario sm:text-lg">
              Antes de desenhar telas, gosto de entender quem vai usar o produto, em que situação e com qual
              dificuldade. É dessa investigação que saem decisões mais claras e soluções que fazem sentido no dia a
              dia. Tenho construído esse olhar em projetos autorais, acadêmicos e em colaborações práticas,
              incluindo um projeto de produto digital como voluntária.
            </p>
          </div>

          <img
            src="/home/sobre-mim-claudia-3x2.webp"
            alt="Wireframes à mão e cards de pesquisa do BeReady."
            loading="lazy"
            width={1551}
            height={1034}
            className="aspect-[3/2] w-full rounded-3xl object-cover lg:col-span-6"
          />
        </div>

        <ol className="mt-16 grid gap-8 border-t border-processo/15 pt-10 sm:grid-cols-3 sm:gap-10">
          {valores.map((v, i) => (
            <li key={v.titulo}>
              <span className="texto-gradiente font-serif text-xl">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-[26px] leading-tight text-processo">{v.titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-secundario">{v.texto}</p>
            </li>
          ))}
        </ol>

        <a
          href={contato.linkedin}
          target="_blank"
          rel="noreferrer"
          className="btn-acao group mt-12 px-8 py-4 text-[15px]"
        >
          Conheça minha trajetória
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
