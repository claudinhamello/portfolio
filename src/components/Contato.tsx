import { Camera, Linkedin, Mail } from 'lucide-react';
import { contato } from '../conteudo';

// Legenda da foto de fundo (foto dela)
const legendaFoto = 'Serra do Rio do Rastro, setembro de 2026 · foto minha';

// Mesmo botão outlined para LinkedIn e e-mail
const botaoContorno =
  "inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3.5 text-[15px] font-semibold text-white/90 transition hover:bg-white/10";

export function Contato() {
  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="relative isolate overflow-hidden bg-navy py-24 text-white sm:py-32"
    >
      <img
        src="/comum/faixa-urubici-3x1.webp"
        alt=""
        loading="lazy"
        width={1920}
        height={639}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Celular: véu azul-marinho, mais forte à esquerda (o texto ocupa a largura toda) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,42,74,0.92)_0%,rgba(15,42,74,0.6)_55%,rgba(15,42,74,0.25)_100%)] md:hidden"
      />
      {/* Tablet e desktop: desfoque atrás do texto, sumindo para a direita, onde a foto fica nítida */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden backdrop-blur-[6px] [-webkit-mask-image:linear-gradient(90deg,#000_0%,#000_38%,transparent_72%)] [mask-image:linear-gradient(90deg,#000_0%,#000_38%,transparent_72%)] md:block"
      />
      {/* Sombra leve só atrás do texto, para o branco manter contraste sobre o céu */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgba(11,34,64,0.42)_0%,rgba(11,34,64,0.2)_45%,transparent_70%)] md:block"
      />

      <div className="mx-auto max-w-pagina px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gelo">Vamos conversar?</p>
          <h2 id="titulo-contato" className="mt-3 text-[40px] leading-[1.08] sm:text-[56px]">
            Estou sempre aberta a novos <span className="texto-gradiente italic">desafios e conexões.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/85 sm:text-lg">
            Se você busca alguém para pesquisar, desenhar e testar soluções digitais, vamos conversar.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={contato.linkedin}
              target="_blank"
              rel="noreferrer"
              className={botaoContorno}
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            {contato.email && (
              <a href={`mailto:${contato.email}`} className={botaoContorno}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                {contato.email}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Legenda da foto, no rodapé da seção */}
      <p className="absolute inset-x-0 bottom-0 mx-auto flex max-w-pagina items-center gap-2 px-5 pb-5 text-[12px] font-medium tracking-wide text-white/65 sm:justify-end sm:px-8">
        <Camera className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {legendaFoto}
      </p>
    </section>
  );
}
