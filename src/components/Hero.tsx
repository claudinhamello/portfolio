// Edite aqui os itens do ticker da base do hero.
export const itensTicker = [
  'Pesquisa com usuários',
  'Design system',
  'Prototipação',
  'Testes de usabilidade',
  'Jornada do usuário',
  'Handoff com devs',
  'Escuta antes da tela',
  'IA com critério',
  'Figma',
];

function Fundo() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradiente base: navy à esquerda → azul-petróleo */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#0B2240_0%,#0F2A4A_38%,#14395F_70%,#1A4A78_100%)]" />
      {/* Brilho violeta atrás da foto */}
      <div className="absolute right-[-8%] top-[8%] h-[85%] w-[65%] bg-[radial-gradient(closest-side,rgba(108,79,216,0.62),rgba(108,79,216,0.18)_55%,transparent)]" />
      {/* Teal no canto inferior direito */}
      <div className="absolute bottom-[-25%] right-[-15%] h-[70%] w-[60%] bg-[radial-gradient(closest-side,rgba(34,181,181,0.6),rgba(34,181,181,0.15)_60%,transparent)]" />
      {/* Toque violeta no canto inferior esquerdo */}
      <div className="absolute bottom-[-30%] left-[-20%] h-[60%] w-[50%] bg-[radial-gradient(closest-side,rgba(108,79,216,0.4),transparent)]" />

      {/* Curvas translúcidas suaves */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="curva-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#A8F3F8" stopOpacity="0" />
            <stop offset="0.5" stopColor="#A8F3F8" stopOpacity="0.07" />
            <stop offset="1" stopColor="#22B5B5" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient id="curva-b" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#6C4FD8" stopOpacity="0.2" />
            <stop offset="1" stopColor="#6C4FD8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="curva-linha" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M520 0C700 210 980 260 1440 180V0Z" fill="url(#curva-a)" />
        <path d="M0 900C260 640 560 560 860 640C1080 700 1250 820 1440 760V900Z" fill="url(#curva-b)" />
        <path d="M940 900C1050 640 1240 480 1440 440V900Z" fill="url(#curva-a)" />
        <path d="M-40 420C300 300 620 330 900 470S1300 640 1480 560" stroke="url(#curva-linha)" strokeWidth="1.2" />
        <path d="M380 -20C560 180 860 250 1480 120" stroke="url(#curva-linha)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function Ticker() {
  return (
    <div className="ticker absolute inset-x-0 bottom-0 z-20 overflow-hidden py-5">
      <p className="sr-only">Competências: {itensTicker.join(', ')}.</p>
      <div className="ticker-trilho" aria-hidden="true">
        {[0, 1].map((copia) => (
          <ul key={copia} className="flex shrink-0 items-center">
            {itensTicker.map((item) => (
              <li
                key={item}
                className="flex items-center whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-[13px]"
              >
                <span className="px-4">{item}</span>
                <span className="text-gelo/80">·</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-hero"
      className="relative isolate min-h-[max(660px,min(100svh,900px))] overflow-hidden text-white"
    >
      <Fundo />

      <div className="relative mx-auto flex min-h-[inherit] max-w-pagina flex-col px-5 sm:px-8 lg:flex-row lg:items-center">
        {/* Texto */}
        {/* A coluna é um container: no desktop o título se ajusta à largura dela (cqw) */}
        <div className="relative z-10 pb-10 pt-32 sm:pt-36 lg:w-[54%] lg:pb-20 lg:pt-28 lg:[container-type:inline-size]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-teal sm:text-[13px]">
            Designer de Produto · UX · UI
          </p>

          <h1
            id="titulo-hero"
            className="mt-5 font-serif text-[44px] leading-[1.04] tracking-[-0.01em] sm:text-[60px] lg:text-[min(76px,9.4cqw)]"
          >
            <span className="block">Você vê o resultado.</span>
            {/* No desktop fica numa linha só. No celular e tablet pode quebrar, mas "caminho inteiro." fica junto */}
            <span className="texto-gradiente italic lg:whitespace-nowrap">
              Eu mostro o <span className="whitespace-nowrap">caminho inteiro.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-white/85 sm:text-xl">
            Pesquisa, erros e iterações de cada projeto.
          </p>

          <a href="#processo" className="btn-acao group mt-9 px-8 py-4 text-base">
            Ver os bastidores
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Foto — sem nenhum tratamento na imagem; o corte e o esmaecimento são só de CSS */}
        <div className="relative z-0 mx-auto mt-auto aspect-[9/10] w-[min(88%,440px)] self-center overflow-hidden [mask-image:linear-gradient(to_bottom,#000_62%,transparent_97%)] lg:absolute lg:bottom-0 lg:right-8 lg:mt-0 lg:h-[85%] lg:w-auto lg:max-w-[48%]">
          <img
            src="/home/claudia-hero.webp"
            alt="Claudia Mello sorrindo, de óculos e blusa clara estampada em tons de verde e azul"
            width={900}
            height={1598}
            {...{ fetchpriority: 'high' }}
            className="h-full w-full select-none object-cover object-top"
            draggable={false}
          />
        </div>
      </div>

      <Ticker />
    </section>
  );
}
