/**
 * Logo "C" da Claudia (Logotipo.svg), separado em partes:
 * - corpo do C: revelado por uma máscara com um arco grosso cujo
 *   stroke-dashoffset anima (~1,2s), como se o C estivesse sendo desenhado;
 * - dois riscos de velocidade: deslizam para o lugar em ~0,3s depois do C.
 * Com prefers-reduced-motion, o logo aparece completo (ver index.css).
 */

const corpoDoC = [
  // parte inferior do C
  'M19.0762 25.2259C20.8204 29.1314 24.7363 31.8548 29.29 31.8548C30.1122 31.8548 30.913 31.7622 31.6846 31.5931L28.6113 30.1273L28.7578 29.8216L38.8506 34.6371L38.8408 34.6566L42.4355 36.3724C40.4839 37.9689 38.2415 39.2037 35.8125 39.9955C31.5183 41.3949 26.8811 41.3372 22.623 39.8314C18.3649 38.3251 14.7221 35.4538 12.2627 31.6654C10.0803 28.3032 8.93867 24.3842 8.95898 20.3978L19.0762 25.2259Z',
  // faixa da lateral esquerda
  'M18.2588 18.847C18.161 19.4407 18.1065 20.0499 18.1064 20.6712C18.1064 20.7458 18.1097 20.8207 18.1113 20.8949L9.31348 16.6966C9.43462 16.0548 9.58658 15.4201 9.76758 14.7953L18.2588 18.847Z',
  // parte superior do C
  'M25.7598 0.336288C30.2023 -0.478578 34.791 0.197243 38.8105 2.25719C41.6694 3.72253 44.1275 5.83107 46.0039 8.39488L39.3945 15.6429C38.3455 13.4984 36.6316 11.7477 34.5049 10.6576C32.3361 9.5462 29.8599 9.18184 27.4629 9.62144C27.1773 9.67386 26.8943 9.73765 26.6152 9.81187C23.6542 10.5387 21.1602 12.4462 19.6523 15.0052L6.55957 8.75719L12.4131 9.11363C12.9622 8.29138 13.5716 7.5048 14.2402 6.76402C17.2669 3.4114 21.3172 1.15141 25.7598 0.336288Z',
].join(' ');

const riscoEsquerdo =
  'M10.2803 17.9095L10.2783 17.9144L18.1533 21.6732C18.2343 22.5848 18.4254 23.4646 18.7119 24.3002L8.97559 19.6546C8.97587 19.6479 8.97628 19.6409 8.97656 19.6341L6.3291 18.3714L7.05273 16.8539L0 13.4886L0.188477 13.0931L10.2803 17.9095Z';

const riscoDireito =
  'M55 36.3793L44.6475 34.267C44.1287 34.8394 43.5806 35.3833 43.0029 35.892L33.126 31.1781C34.881 30.537 36.4287 29.4676 37.6465 28.098L55 36.3793Z';

interface Props {
  className?: string;
}

export function LogoAnimado({ className }: Props) {
  return (
    <svg
      viewBox="0 0 55 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="logo-gradiente" x1="50" y1="6" x2="6" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#A8F3F8" />
          <stop offset="0.45" stopColor="#22B5B5" />
          <stop offset="1" stopColor="#6C4FD8" />
        </linearGradient>
        <mask id="logo-mascara" maskUnits="userSpaceOnUse" x="-5" y="-5" width="65" height="51">
          {/* Arco que começa no topo-direito do C e gira no sentido anti-horário até a base */}
          <path
            className="logo-arco"
            d="M44.3 15.1 A16 16 0 1 0 44.3 26.1"
            pathLength={1}
            stroke="#fff"
            strokeWidth={30}
            fill="none"
          />
        </mask>
      </defs>

      <path d={corpoDoC} fill="url(#logo-gradiente)" mask="url(#logo-mascara)" />
      <path className="logo-risco logo-risco--esq" d={riscoEsquerdo} fill="url(#logo-gradiente)" />
      <path className="logo-risco logo-risco--dir" d={riscoDireito} fill="url(#logo-gradiente)" />
    </svg>
  );
}
