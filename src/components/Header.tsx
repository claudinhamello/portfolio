import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { LogoAnimado } from './LogoAnimado';

export type SecaoAtiva = 'inicio' | 'projetos' | null;

// Itens do submenu "Projetos". Troque os href quando as páginas de cada projeto existirem.
export const projetosMenu = [
  { rotulo: 'BeReady', href: '#projetos' },
  { rotulo: 'Focus Clínica', href: '#projetos' },
  { rotulo: 'Fast Money', href: '#projetos' },
  { rotulo: 'Redesign de placas de ruas', href: '#projetos' },
];
const verTodos = { rotulo: 'Ver todos os projetos', href: '#projetos' };

interface HeaderProps {
  secaoAtiva: SecaoAtiva;
}

export function Header({ secaoAtiva }: HeaderProps) {
  const [rolou, setRolou] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState(false);
  const [mobileAberto, setMobileAberto] = useState(false);

  const botaoProjetosRef = useRef<HTMLButtonElement>(null);
  const submenuRef = useRef<HTMLUListElement>(null);
  const botaoMobileRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  // Fecha o submenu ao clicar fora
  useEffect(() => {
    if (!submenuAberto) return;
    const aoClicar = (e: MouseEvent) => {
      const alvo = e.target as Node;
      if (!submenuRef.current?.contains(alvo) && !botaoProjetosRef.current?.contains(alvo)) {
        setSubmenuAberto(false);
      }
    };
    document.addEventListener('mousedown', aoClicar);
    return () => document.removeEventListener('mousedown', aoClicar);
  }, [submenuAberto]);

  // Esc fecha o menu mobile
  useEffect(() => {
    if (!mobileAberto) return;
    const aoTeclar = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileAberto(false);
        botaoMobileRef.current?.focus();
      }
    };
    document.addEventListener('keydown', aoTeclar);
    return () => document.removeEventListener('keydown', aoTeclar);
  }, [mobileAberto]);

  const linksDoSubmenu = () =>
    Array.from(submenuRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? []);

  const focarItem = (indice: number) => {
    const links = linksDoSubmenu();
    if (!links.length) return;
    links[(indice + links.length) % links.length].focus();
  };

  const aoTeclarBotao = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSubmenuAberto(true);
      requestAnimationFrame(() => focarItem(0));
    } else if (e.key === 'Escape') {
      setSubmenuAberto(false);
    }
  };

  const aoTeclarSubmenu = (e: KeyboardEvent<HTMLUListElement>) => {
    const links = linksDoSubmenu();
    const atual = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focarItem(atual + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focarItem(atual - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focarItem(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focarItem(links.length - 1);
    } else if (e.key === 'Escape') {
      setSubmenuAberto(false);
      botaoProjetosRef.current?.focus();
    }
  };

  const fecharTudo = () => {
    setSubmenuAberto(false);
    setMobileAberto(false);
  };

  return (
    <header className="header-vidro fixed inset-x-0 top-0 z-50 text-white">
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between px-5 transition-[height] duration-300 sm:px-8 ${
          rolou ? 'h-16' : 'h-[88px]'
        }`}
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={fecharTudo}
          className="flex flex-col items-start"
          aria-label="Claudia Mello — voltar ao início"
        >
          <LogoAnimado
            className={`transition-all duration-300 ${rolou ? 'h-8 w-[43px]' : 'h-10 w-[54px]'}`}
          />
          <span
            aria-hidden="true"
            className={`overflow-hidden whitespace-nowrap font-serif text-[15px] leading-none tracking-wide text-white/90 transition-all duration-300 ${
              rolou ? 'mt-0 max-h-0 opacity-0' : 'mt-1.5 max-h-5 opacity-100'
            }`}
          >
            Claudia Mello
          </span>
        </a>

        {/* Navegação — desktop */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-12">
            <li>
              <a
                href="#inicio"
                className="nav-link"
                aria-current={secaoAtiva === 'inicio' ? 'true' : undefined}
              >
                Início
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setSubmenuAberto(true)}
              onMouseLeave={() => setSubmenuAberto(false)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setSubmenuAberto(false);
              }}
            >
              <button
                ref={botaoProjetosRef}
                type="button"
                className="nav-link"
                aria-expanded={submenuAberto}
                aria-controls="submenu-projetos"
                aria-current={secaoAtiva === 'projetos' ? 'true' : undefined}
                onClick={() => setSubmenuAberto((v) => !v)}
                onKeyDown={aoTeclarBotao}
              >
                Projetos
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${submenuAberto ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {/* pt-4 cria uma "ponte" para o mouse não perder o hover */}
              <div
                className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 ${submenuAberto ? 'block' : 'hidden'}`}
              >
                <ul
                  id="submenu-projetos"
                  ref={submenuRef}
                  onKeyDown={aoTeclarSubmenu}
                  className="painel-vidro w-64 rounded-2xl p-2 shadow-2xl shadow-black/30"
                >
                  {projetosMenu.map((p) => (
                    <li key={p.rotulo}>
                      <a
                        href={p.href}
                        onClick={fecharTudo}
                        className="block rounded-xl px-4 py-2.5 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10"
                      >
                        {p.rotulo}
                      </a>
                    </li>
                  ))}
                  <li className="mt-1 border-t border-white/15 pt-1">
                    <a
                      href={verTodos.href}
                      onClick={fecharTudo}
                      className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-gelo transition-colors hover:bg-white/10 focus-visible:bg-white/10"
                    >
                      {verTodos.rotulo} →
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        {/* CTA — desktop */}
        <a href="#contato" className="btn-acao hidden px-6 py-3 text-[15px] md:inline-flex">
          Vamos conversar
        </a>

        {/* Botão do menu — mobile */}
        <button
          ref={botaoMobileRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 md:hidden"
          aria-expanded={mobileAberto}
          aria-controls="menu-mobile"
          aria-label={mobileAberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMobileAberto((v) => !v)}
        >
          {mobileAberto ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Painel — mobile */}
      <div id="menu-mobile" className={`px-4 pb-4 md:hidden ${mobileAberto ? 'block' : 'hidden'}`}>
        <nav aria-label="Principal (celular)" className="painel-vidro rounded-2xl p-5">
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="#inicio"
                onClick={fecharTudo}
                className="nav-link py-2 text-lg"
                aria-current={secaoAtiva === 'inicio' ? 'true' : undefined}
              >
                Início
              </a>
            </li>
            <li className="pt-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Projetos</span>
              <ul className="mt-2 flex flex-col">
                {[...projetosMenu, verTodos].map((p) => (
                  <li key={p.rotulo}>
                    <a
                      href={p.href}
                      onClick={fecharTudo}
                      className="block rounded-lg py-2 text-base text-white/85 hover:text-white"
                    >
                      {p.rotulo}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <a href="#contato" onClick={fecharTudo} className="btn-acao mt-5 w-full px-6 py-3 text-base">
            Vamos conversar
          </a>
        </nav>
      </div>
    </header>
  );
}
