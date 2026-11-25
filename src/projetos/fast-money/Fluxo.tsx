import { useState } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Smartphone } from 'lucide-react';
import { ImagemComReserva } from '../../components/ImagemComReserva';
import { Navegador } from '../Navegador';
import { Celular } from '../Celular';
import { solucao, type TelaFluxo } from './dados';

const versoes = [
  { id: 'desktop', rotulo: 'Desktop', Icone: Monitor, telas: solucao.desktop as TelaFluxo[] },
  { id: 'mobile', rotulo: 'Mobile', Icone: Smartphone, telas: solucao.mobile as TelaFluxo[] },
] as const;

/** Percorre o fluxo do Pix etapa por etapa, no desktop ou no celular. */
export function Fluxo() {
  const [versao, setVersao] = useState(0);
  const [etapa, setEtapa] = useState(0);
  const { telas, id } = versoes[versao];
  const tela = telas[etapa];
  const ultima = telas.length - 1;

  const trocarVersao = (i: number) => {
    setVersao(i);
    setEtapa(0);
  };

  return (
    <div>
      <div role="tablist" aria-label="Versão do site" className="flex w-fit gap-1 rounded-full bg-white/10 p-1">
        {versoes.map((v, i) => (
          <button
            key={v.id}
            role="tab"
            type="button"
            aria-selected={i === versao}
            aria-controls="painel-fluxo"
            onClick={() => trocarVersao(i)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold transition ${
              i === versao ? 'bg-white text-acento' : 'text-white/75 hover:text-white'
            }`}
          >
            <v.Icone className="h-4 w-4" aria-hidden="true" />
            {v.rotulo}
          </button>
        ))}
      </div>

      <div id="painel-fluxo" role="tabpanel" className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
        {/* Etapas: no celular viram uma fileira com rolagem lateral */}
        <ol className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
          {telas.map((t, i) => {
            const atual = i === etapa;
            return (
              <li key={t.imagem} className="shrink-0">
                <button
                  type="button"
                  aria-current={atual ? 'step' : undefined}
                  onClick={() => setEtapa(i)}
                  className={`group flex w-full items-center gap-3 rounded-full px-4 py-2.5 text-left text-[15px] font-medium transition lg:rounded-xl ${
                    atual ? 'bg-white text-tinta' : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span
                    className={`font-serif text-[18px] leading-none ${atual ? 'text-acento' : 'text-white/60 group-hover:text-white/80'}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="whitespace-nowrap">{t.titulo}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div>
          <div className="flex min-h-[320px] items-start justify-center">
            {id === 'desktop' ? (
              <Navegador url="fastmoney.com.br/pix" className="w-full">
                <ImagemComReserva
                  key={tela.imagem}
                  src={tela.imagem}
                  alt={tela.alt}
                  loading="lazy"
                  className="block aspect-[1440/1024] w-full animate-[aparecer_0.4s_ease] object-cover object-top"
                  classeReserva="aspect-[1440/1024] w-full"
                />
              </Navegador>
            ) : (
              <div key={tela.imagem} className="w-[min(300px,78vw)] animate-[aparecer_0.4s_ease]">
                <Celular src={tela.imagem} alt={tela.alt} altura={tela.altura} />
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-[15px] text-white/75" aria-live="polite">
              Etapa {etapa + 1} de {telas.length}: <span className="font-semibold text-white">{tela.titulo}</span>
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setEtapa((e) => Math.max(0, e - 1))}
                disabled={etapa === 0}
                aria-label="Etapa anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10 disabled:opacity-35 disabled:hover:bg-transparent"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setEtapa((e) => Math.min(ultima, e + 1))}
                disabled={etapa === ultima}
                aria-label="Próxima etapa"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-acento transition hover:-translate-y-0.5 disabled:opacity-35 disabled:hover:translate-y-0"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
