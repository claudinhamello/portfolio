import { useState } from 'react';
import { ImagemComReserva } from '../../components/ImagemComReserva';
import { anatomia } from './dados';

/** Foto da placa com pontos numerados; cada ponto explica uma decisão de design. */
export function Anatomia() {
  const [ativo, setAtivo] = useState(0);
  const ponto = anatomia.pontos[ativo];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-center lg:gap-12">
      <div className="relative">
        <ImagemComReserva
          src={anatomia.imagem}
          alt={anatomia.alt}
          width={anatomia.largura}
          height={anatomia.altura}
          loading="lazy"
          className="block h-auto w-full rounded-2xl shadow-[0_40px_80px_-40px_rgba(10,14,60,0.55)]"
          classeReserva="aspect-[1800/1356] w-full rounded-2xl"
        />
        {anatomia.pontos.map((p, i) => {
          const selecionado = i === ativo;
          return (
            <button
              key={p.titulo}
              type="button"
              onClick={() => setAtivo(i)}
              onMouseEnter={() => setAtivo(i)}
              onFocus={() => setAtivo(i)}
              aria-pressed={selecionado}
              aria-label={`${i + 1}. ${p.titulo}`}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              {/* Anel pulsante só no ponto ativo (e sem animação para quem prefere movimento reduzido) */}
              {selecionado && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 animate-ping rounded-full bg-[#FFC629]/60 motion-reduce:animate-none"
                />
              )}
              <span
                className={`relative flex h-9 w-9 items-center justify-center rounded-full text-[15px] font-bold shadow-[0_6px_18px_-4px_rgba(0,0,0,0.5)] ring-2 transition sm:h-11 sm:w-11 sm:text-[16px] ${
                  selecionado ? 'bg-[#FFC629] text-tinta ring-white' : 'bg-white text-acento ring-acento/20 group-hover:bg-[#FFC629]'
                }`}
              >
                {i + 1}
              </span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="rounded-3xl border border-nevoa bg-white p-7 sm:p-9">
        <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-acento-2">
          {String(ativo + 1).padStart(2, '0')} de {String(anatomia.pontos.length).padStart(2, '0')}
        </p>
        <h3 key={ponto.titulo} className="mt-3 animate-[aparecer_0.35s_ease] text-[32px] leading-tight text-processo">
          {ponto.titulo}
        </h3>
        <p key={ponto.texto} className="mt-4 animate-[aparecer_0.35s_ease] text-[17px] leading-relaxed text-secundario">
          {ponto.texto}
        </p>
        <div className="mt-7 flex gap-2" aria-hidden="true">
          {anatomia.pontos.map((p, i) => (
            <span
              key={p.titulo}
              className={`h-1.5 flex-1 rounded-full transition ${i === ativo ? 'bg-acento' : 'bg-nevoa'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
