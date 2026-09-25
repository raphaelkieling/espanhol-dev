import type { Section } from '../types'

export const presentarte: Section = {
  slug: 'presentarte-al-equipo',
  title: 'Presentarte al equipo',
  summary: 'Uma apresentação de 30 segundos para o primeiro dia: nome, cargo, experiência e o que você faz.',
  blocks: [
    {
      type: 'text',
      text: 'Na primeira reunião com um time novo, espera-se uma apresentação curta. Nome, de onde você é, o que faz e há quanto tempo. Com poucas frases prontas você resolve.',
    },

    { type: 'heading', text: 'As frases' },
    {
      type: 'table',
      columns: ['Para dizer…', 'Español'],
      rows: [
        ['o nome', '**Me llamo** Ana. / **Soy** Ana.'],
        ['de onde é', '**Soy de** Brasil. **Vivo en** Curitiba.'],
        ['o cargo', '**Trabajo como** desarrolladora backend.'],
        ['há quanto tempo', '**Llevo** cinco años en tecnología.'],
        ['do que cuida', '**Me encargo de** la API de pagos.'],
        ['com o que trabalha', '**Trabajo con** Node y Postgres.'],
      ],
    },
    {
      type: 'examples',
      items: [
        {
          es: 'Hola a todos. **Me llamo** Lucas, **soy de** Brasil y **trabajo como** desarrollador backend. **Llevo** seis años en tecnología y ahora **me voy a encargar de** la API de pagos. ¡Encantado!',
          pt: 'Oi, pessoal. Meu nome é Lucas, sou do Brasil e trabalho como desenvolvedor backend. Tenho seis anos de tecnologia e agora vou cuidar da API de pagamentos. Prazer!',
        },
      ],
    },

    { type: 'heading', text: 'llevar + tempo' },
    {
      type: 'text',
      text: '**Llevar** + tempo é o jeito mais natural de dizer há quanto tempo você faz algo. **Tengo** … **de experiencia** também funciona.',
    },
    {
      type: 'examples',
      items: [
        { es: '**Llevo** dos años en la empresa.', pt: 'Estou na empresa há dois anos.' },
        { es: '**Tengo** cinco años **de experiencia** con React.', pt: 'Tenho cinco anos de experiência com React.' },
      ],
    },

    { type: 'heading', text: 'Cargos' },
    {
      type: 'table',
      columns: ['Português', 'Español'],
      rows: [
        ['desenvolvedor(a)', '**desarrollador(a)**'],
        ['engenheiro(a) de software', '**ingeniero(a)** de software'],
        ['estagiário(a)', '**pasante** / **practicante**'],
        ['líder técnico', '**líder técnico** / tech lead'],
        ['analista de dados', '**analista de datos**'],
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: '~~Soy desenvolvedor~~ → Soy **desarrollador**. Desenvolver = **desarrollar**. E o time é el **equipo**: ~~mi time~~ → mi **equipo**.',
    },

    { type: 'heading', text: 'Responder' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['**Mucho gusto.**', 'Muito prazer.'],
        ['**Encantado.** / **Encantada.**', 'Prazer. (concorda com quem fala)'],
        ['**Igualmente.**', 'Igualmente.'],
        ['**Bienvenido** / **Bienvenida** al equipo.', 'Bem-vindo(a) ao time.'],
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: '**Encantado** e **bienvenido** mudam com o gênero: Ana diz "**Encantada**" e o time diz "**Bienvenida**, Ana".',
    },
  ],
  quiz: {
    questions: [
      {
        prompt: '___ cinco años en desarrollo web.',
        options: ['Llevo', 'Tengo hace', 'Estoy'],
        answer: 0,
        explanation: '**Llevo** + tempo = há quanto tempo você faz algo.',
      },
      {
        prompt: 'Sou desenvolvedora frontend.',
        options: ['Soy desenvolvedora frontend.', 'Soy desarrolladora frontend.', 'Estoy desarrolladora frontend.'],
        answer: 1,
        explanation: 'Desenvolvedora é **desarrolladora**, e cargo vai com **ser**.',
      },
      {
        prompt: 'Eu cuido da parte de pagamentos.',
        options: ['Me encargo en los pagos.', 'Estoy encargo de los pagos.', 'Me encargo de los pagos.'],
        answer: 2,
        explanation: '"Cuidar de algo" no trabalho é **encargarse de**: me encargo **de**.',
      },
      {
        prompt: 'Ana acaba de conhecer o time: "¡___ de conocerlos!"',
        options: ['Encantado', 'Encantada', 'Encantar'],
        answer: 1,
        explanation: 'Concorda com quem fala: Ana diz **encantada**.',
      },
      {
        prompt: 'Alguém diz "Mucho gusto". Qual é a resposta natural?',
        options: ['Igualmente.', 'De nada.', 'Todavía.'],
        answer: 0,
        explanation: 'A resposta para **mucho gusto** é **igualmente** (ou "el gusto es mío").',
      },
    ],
  },
}
