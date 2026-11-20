import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { contato, secoes } from '../conteudo';

export function Rodape() {
  return (
    <footer className="bg-rodape text-white/80">
      <div className="mx-auto flex max-w-pagina flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3" aria-label="Claudia Mello — voltar ao início">
            <img src="/favicon.svg" alt="" width={40} height={40} className="h-10 w-10" />
            <span className="font-serif text-2xl text-white">Claudia Mello</span>
          </a>
          <p className="mt-3 text-[14px]">Product Designer | UX/UI Designer</p>
        </div>

        <nav aria-label="Rodapé">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-[15px] sm:grid-cols-3">
            {secoes.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="transition-colors hover:text-white">
                  {s.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contato.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          {contato.email && (
            <a
              href={`mailto:${contato.email}`}
              aria-label="E-mail"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:bg-white/10"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 px-5 py-2.5 text-[14px] font-semibold transition hover:bg-white/10"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Voltar ao topo
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-pagina px-5 py-6 text-[13px] text-white/60 sm:px-8">
          © {new Date().getFullYear()} Claudia Mello.
        </p>
      </div>
    </footer>
  );
}
