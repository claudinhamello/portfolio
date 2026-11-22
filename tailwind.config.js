/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Instrument Serif para TODOS os títulos serifados; Manrope para o resto.
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        // Largura do conteúdo: 1216px + 25% da sobra de cada lado da tela, até 1600px.
        // Ex.: 1440px de tela → 1272px de conteúdo (margem 84px); 1920px → 1392px (margem 264px).
        conteudo: 'min(1600px, calc(912px + 25vw))',
        // O mesmo + o recuo lateral de 32px de cada lado (px-8), para os containers das seções
        pagina: 'min(1664px, calc(976px + 25vw))',
      },
      colors: {
        navy: '#0F2A4A',
        petroleo: '#14395F',
        roxo: '#6C4FD8',
        teal: '#22B5B5',
        gelo: '#A8F3F8',
        tinta: '#12304D',
        claro: '#F5F9FD',
        // Fundo das seções que antes eram branco puro (o header usa o branco)
        papel: '#F4F7F5',
        rodape: '#161F33',
        // Seções claras (design system do Figma)
        secundario: '#45647D',
        nevoa: '#EAF1FA',
        lilas: '#F0EDFF',
        processo: '#123B5A',
        // Roxo mais luminoso, para destaques sobre fundo escuro
        ametista: '#8A6CF0',
        // Cores de destaque do projeto da página (definidas por página em --acento / --acento-2, ver index.css)
        acento: 'rgb(var(--acento) / <alpha-value>)',
        'acento-2': 'rgb(var(--acento-2) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
