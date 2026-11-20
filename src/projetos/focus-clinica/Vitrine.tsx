import { useState, type KeyboardEvent } from 'react';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import { ImagemComReserva } from '../../components/ImagemComReserva';
import { Navegador } from '../Navegador';
import { links, solucao } from './dados';

const icones = { desktop: Monitor, tablet: Tablet, mobile: Smartphone } as const;

/** Abas Desktop / Tablet / Mobile; cada captura de página inteira rola dentro da própria moldura. */
export function Vitrine() {
  const [ativa, setAtiva] = useState(0);
  const versao = solucao.versoes[ativa];
  const total = solucao.versoes.length;

  const aoTeclar = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const proxima = (ativa + (e.key === 'ArrowRight' ? 1 : -1) + total) % total;
    setAtiva(proxima);
    document.getElementById(`aba-${solucao.versoes[proxima].id}`)?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Versões da landing page"
        onKeyDown={aoTeclar}
        className="mx-auto flex w-fit gap-1 rounded-full border border-nevoa bg-white p-1"
      >
        {solucao.versoes.map((v, i) => {
          const Icone = icones[v.id as keyof typeof icones];
          const selecionada = i === ativa;
          return (
            <button
              key={v.id}
              id={`aba-${v.id}`}
              role="tab"
              type="button"
              aria-selected={selecionada}
              aria-controls="painel-versao"
              tabIndex={selecionada ? 0 : -1}
              onClick={() => setAtiva(i)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold transition ${
                selecionada ? 'bg-acento text-white' : 'text-secundario hover:text-processo'
              }`}
            >
              <Icone className="h-4 w-4" aria-hidden="true" />
              {v.rotulo}
            </button>
          );
        })}
      </div>

      <div id="painel-versao" role="tabpanel" aria-labelledby={`aba-${versao.id}`} className="mt-8">
        <Navegador
          url={links.landingPage.replace('https://', '')}
          className={`mx-auto transition-[max-width] duration-500 ${versao.largura}`}
        >
          {/* Área com rolagem própria: a página inteira fica dentro dela */}
          <div
            tabIndex={0}
            aria-label={`Página inteira na versão ${versao.rotulo.toLowerCase()}, com rolagem`}
            className="h-[min(68svh,720px)] overflow-y-auto overscroll-contain focus-visible:outline-none"
          >
            <ImagemComReserva
              key={versao.id}
              src={versao.imagem}
              alt={`Landing page da Focus Clínica completa, versão ${versao.rotulo.toLowerCase()}`}
              loading="lazy"
              className="block h-auto w-full"
              classeReserva="h-[min(68svh,720px)] w-full"
            />
          </div>
        </Navegador>
      </div>
    </div>
  );
}
