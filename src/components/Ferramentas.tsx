import { CabecalhoSecao } from './CabecalhoSecao';

// Edite aqui. Sem níveis ou porcentagens, de propósito.
const grupos = [
  {
    nome: 'Competências',
    itens: [
      'UX/UI Design',
      'Product Design',
      'Pesquisa com usuários',
      'Arquitetura da informação',
      'Wireframes e prototipação',
      'Design systems',
      'Testes de usabilidade',
      'Interfaces responsivas',
    ],
  },
  {
    nome: 'Design e colaboração',
    itens: ['Figma', 'FigJam', 'Miro', 'Notion', 'Trello', 'Jira', 'Canva Pro'],
  },
  {
    nome: 'IA e código',
    itens: ['Figma Make', 'ChatGPT', 'Gemini', 'Claude', 'Bolt', 'GitHub', 'Vercel'],
  },
];

export function Ferramentas() {
  return (
    <section id="ferramentas" aria-labelledby="titulo-ferramentas" className="bg-claro py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <CabecalhoSecao
          id="titulo-ferramentas"
          rotulo="Caixa de ferramentas"
          titulo="Ferramentas e competências"
          apoio="Uso de IA como apoio na obtenção de insights a partir de pesquisas e entrevistas."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grupos.map((g) => (
            <div key={g.nome} className="rounded-3xl border border-nevoa bg-white p-6 sm:p-8">
              <h3 className="text-[24px] text-processo">{g.nome}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.itens.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-nevoa bg-claro px-3.5 py-1.5 text-[14px] font-medium text-processo"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
