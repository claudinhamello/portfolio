// Desenhos de traço fino, ligados à cozinha. São decorativos (aria-hidden) e usados com parcimônia.

/** Raminho de ervas */
export function Ramo({ className = '' }: { className?: string }) {
  const folhas = [
    { x: 46, y: 150, r: -38 },
    { x: 74, y: 128, r: 42 },
    { x: 50, y: 104, r: -34 },
    { x: 80, y: 82, r: 38 },
    { x: 58, y: 60, r: -28 },
    { x: 84, y: 40, r: 30 },
  ];
  return (
    <svg viewBox="0 0 120 200" fill="none" aria-hidden="true" className={className}>
      <path d="M60 196 C 62 150, 64 100, 74 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {folhas.map((f) => (
        <g key={`${f.x}-${f.y}`} transform={`translate(${f.x} ${f.y}) rotate(${f.r})`}>
          <ellipse cx="0" cy="0" rx="9" ry="20" stroke="currentColor" strokeWidth="1.6" />
          <path d="M0 -16 L0 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

/** Vapor subindo: três fios ondulados (param de se mexer com movimento reduzido) */
export function Vapor({ className = '' }: { className?: string }) {
  const fios = ['M20 90 C 8 70, 32 56, 20 36 S 24 8, 20 0', 'M50 90 C 38 70, 62 56, 50 36 S 54 8, 50 0', 'M80 90 C 68 70, 92 56, 80 36 S 84 8, 80 0'];
  return (
    <svg viewBox="0 0 100 92" fill="none" aria-hidden="true" className={className}>
      {fios.map((d, i) => (
        <path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="vapor-fio"
          style={{ animationDelay: `${i * 0.7}s` }}
        />
      ))}
    </svg>
  );
}
