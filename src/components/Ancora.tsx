import type { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Link que serve para os dois casos:
 * - "#secao": âncora na própria página (<a> comum);
 * - "/pagina" ou "/#secao": outra página do site, sem recarregar (React Router).
 */
export function Ancora({ href, ...resto }: Props) {
  if (href.startsWith('/')) return <Link to={href} {...resto} />;
  return <a href={href} {...resto} />;
}
