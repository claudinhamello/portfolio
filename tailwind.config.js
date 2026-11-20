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
      colors: {
        navy: '#0F2A4A',
        petroleo: '#14395F',
        roxo: '#6C4FD8',
        teal: '#22B5B5',
        gelo: '#A8F3F8',
        tinta: '#12304D',
        claro: '#F5F9FD',
        rodape: '#161F33',
      },
    },
  },
  plugins: [],
};
