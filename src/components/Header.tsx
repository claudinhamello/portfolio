import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { LogoAnimado } from './LogoAnimado';
import { Ancora } from './Ancora';
import { projetosMenu, verTodosProjetos, type ItemMenu } from '../conteudo';

interface HeaderProps {
  /** id da seção visível no momento (para o traço do item ativo) */
  secaoAtiva: string | null;
  /** "Início": na Home rola até o topo; nas outras páginas volta para a Home */
  inicio: ItemMenu;
  /** Seções da página atual que entram no menu depois de "Projetos" (o contato fica no botão "Vamos conversar") */
  secoes: ItemMenu[];
}

export function Header({ secaoAtiva, inicio, secoes }: HeaderProps) {
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
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 px-5 text-processo transition-[padding] duration-300 sm:px-8 ${
        rolou ? 'pt-2.5' : 'pt-4 sm:pt-5'
      }`}
    >
      {/* Cápsula flutuante em Liquid Glass */}
      <div
        className={`vidro-liquido pointer-events-auto mx-auto flex max-w-conteudo items-center justify-between rounded-full pl-6 pr-2.5 transition-[height] duration-300 sm:pl-8 ${
          rolou ? 'h-[58px]' : 'h-[72px]'
        }`}
      >
        <span className="vidro-halo" aria-hidden="true" />
        {/* Logo */}
        <Ancora
          href={inicio.href}
          onClick={fecharTudo}
          className="flex items-center"
          aria-label="Claudia Mello — voltar ao início"
        >
          <LogoAnimado
            className={`shrink-0 transition-all duration-300 ${rolou ? 'h-7 w-[38px]' : 'h-8 w-[43px]'}`}
          />
          {/* Nome em duas linhas, com a mesma altura do logo (32px); some ao rolar */}
          <span
            aria-hidden="true"
            className={`flex h-8 flex-col justify-center overflow-hidden whitespace-nowrap font-serif text-[17px] leading-4 tracking-wide text-processo transition-all duration-300 ${
              rolou ? 'ml-0 max-w-0 opacity-0' : 'ml-2.5 max-w-[96px] opacity-100'
            }`}
          >
            <span>Claudia</span>
            <span>Mello</span>
          </span>
        </Ancora>

        {/* Navegação — desktop */}
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            <li>
              <Ancora
                href={inicio.href}
                className="nav-link"
                aria-current={secaoAtiva === inicio.id ? 'true' : undefined}
              >
                Início
              </Ancora>
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
                  className="vidro-liquido w-72 rounded-[22px] p-2"
                >
                  {projetosMenu.map((p) => (
                    <li key={p.rotulo}>
                      <Ancora
                        href={p.href}
                        onClick={fecharTudo}
                        className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-processo transition-colors hover:bg-white/30 focus-visible:bg-white/30"
                      >
                        {p.rotulo}
                      </Ancora>
                    </li>
                  ))}
                  <li className="mt-1 border-t border-processo/15 pt-1">
                    {verTodosProjetos.disponivel ? (
                      <Ancora
                        href={verTodosProjetos.href}
                        onClick={fecharTudo}
                        className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-processo transition-colors hover:bg-white/30 focus-visible:bg-white/30"
                      >
                        {verTodosProjetos.rotulo} →
                      </Ancora>
                    ) : (
                      // Desabilitado: não é link nem recebe foco (as setas do teclado só percorrem os <a>)
                      <span
                        aria-disabled="true"
                        className="flex cursor-not-allowed items-center justify-between gap-2 whitespace-nowrap px-4 py-2.5 text-sm font-semibold text-processo/45"
                      >
                        {verTodosProjetos.rotulo}
                        <span className="whitespace-nowrap rounded-full bg-processo/10 px-2 py-0.5 text-[12px] font-semibold text-processo/70">
                          Em breve
                        </span>
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </li>
            {secoes.map((s) => (
              <li key={s.id}>
                <Ancora
                  href={s.href}
                  className="nav-link"
                  aria-current={secaoAtiva === s.id ? 'true' : undefined}
                >
                  {s.rotulo}
                </Ancora>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA — desktop */}
        <a href="#contato" className="btn-acao hidden whitespace-nowrap px-6 py-3 text-[15px] shadow-none hover:shadow-none lg:inline-flex">
          Vamos conversar
        </a>

        {/* Botão do menu — mobile */}
        <button
          ref={botaoMobileRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] lg:hidden"
          aria-expanded={mobileAberto}
          aria-controls="menu-mobile"
          aria-label={mobileAberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMobileAberto((v) => !v)}
        >
          {mobileAberto ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Painel — mobile */}
      <div
        id="menu-mobile"
        className={`pointer-events-auto mx-auto mt-3 max-w-conteudo lg:hidden ${mobileAberto ? 'block' : 'hidden'}`}
      >
        <nav aria-label="Principal (celular)" className="vidro-liquido rounded-[28px] p-5">
          <ul className="flex flex-col gap-1">
            <li>
              <Ancora
                href={inicio.href}
                onClick={fecharTudo}
                className="nav-link py-2 text-lg"
                aria-current={secaoAtiva === inicio.id ? 'true' : undefined}
              >
                Início
              </Ancora>
            </li>
            <li className="pt-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-processo/70">Projetos</span>
              <ul className="mt-2 flex flex-col">
                {[...projetosMenu, verTodosProjetos].map((p) => (
                  <li key={p.rotulo}>
                    {'disponivel' in p && !p.disponivel ? (
                      <span
                        aria-disabled="true"
                        className="flex cursor-not-allowed items-center gap-2 py-2 text-base font-semibold text-processo/45"
                      >
                        {p.rotulo}
                        <span className="whitespace-nowrap rounded-full bg-processo/10 px-2 py-0.5 text-[12px] font-semibold text-processo/70">
                          Em breve
                        </span>
                      </span>
                    ) : (
                      <Ancora
                        href={p.href}
                        onClick={fecharTudo}
                        className="block rounded-lg py-2 text-base font-semibold text-processo hover:text-processo/80"
                      >
                        {p.rotulo}
                      </Ancora>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            {secoes.map((s) => (
              <li key={s.id} className={s === secoes[0] ? 'pt-3' : undefined}>
                <Ancora
                  href={s.href}
                  onClick={fecharTudo}
                  className="nav-link py-2 text-lg"
                  aria-current={secaoAtiva === s.id ? 'true' : undefined}
                >
                  {s.rotulo}
                </Ancora>
              </li>
            ))}
          </ul>
          <a href="#contato" onClick={fecharTudo} className="btn-acao mt-5 w-full px-6 py-3 text-base">
            Vamos conversar
          </a>
        </nav>
      </div>
    </header>
  );
}
