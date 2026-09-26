import type { Section } from '../types'

export const ticketsEstimaciones: Section = {
  slug: 'tickets-prioridades-y-estimaciones',
  title: 'Tickets, prioridades y estimaciones',
  summary: 'O vocabulário da planning: tickets, escopo, prioridade e como estimar sem prometer demais.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'Em plannings e refinamentos, muita coisa fica em inglês (sprint, backlog, story points). O resto é este vocabulário:',
        },
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**la tarea** / el ticket', 'a tarefa / o ticket'],
            ['**la historia de usuario**', 'a user story'],
            ['**el refinamiento**', 'o refinamento'],
            ['**los criterios de aceptación**', 'os critérios de aceite'],
            ['**la estimación**', 'a estimativa'],
            ['**el alcance**', 'o escopo'],
            ['**el plazo**', 'o prazo'],
            ['**la fecha de entrega**', 'a data de entrega'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~La estimativa~~ → la **estimación**. ~~El escopo~~ → el **alcance**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Prioridades',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: 'Esto es **urgente**, hay que hacerlo hoy.', pt: 'Isso é urgente, tem que ser feito hoje.' },
            { es: '**Primero** el bug y **después** la feature.', pt: 'Primeiro o bug e depois a feature.' },
            { es: 'Eso **puede esperar al** próximo sprint.', pt: 'Isso pode esperar o próximo sprint.' },
            { es: '¿Qué es **más importante**: el reporte o el login?', pt: 'O que é mais importante: o relatório ou o login?' },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Nos tickets: prioridad **alta**, **media** o **baja**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Estimar',
      blocks: [
        {
          type: 'text',
          text: 'Ao estimar, é normal deixar margem. Estas frases dão um número sem virar promessa.',
        },
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**Calculo** dos días.', 'Calculo dois dias.'],
            ['**Más o menos** tres puntos.', 'Mais ou menos três pontos.'],
            ['**Le pongo** cinco puntos.', 'Dou cinco pontos.'],
            ['**Como mínimo**, una semana.', 'No mínimo, uma semana.'],
            ['**Depende de** la API de pagos.', 'Depende da API de pagamentos.'],
            ['**Es más grande de lo que parece.**', 'É maior do que parece.'],
            ['**Todavía no sé**, necesito investigar un poco.', 'Ainda não sei, preciso investigar um pouco.'],
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Para duração, use **llevar**, como em "llevo dos años": esto **va a llevar** tres días.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Pedir clareza',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '¿**Cuál es el alcance**?', pt: 'Qual é o escopo?' },
            { es: '¿**Para cuándo** lo necesitan?', pt: 'Para quando vocês precisam?' },
            { es: '¿Esto **entra en** este sprint?', pt: 'Isso entra neste sprint?' },
            { es: '¿**Cuáles son** los criterios de aceptación?', pt: 'Quais são os critérios de aceite?' },
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Qual é o escopo?',
        options: ['¿Cuál es el escopo?', '¿Cuál es el alcance?', '¿Cuál es el plazo?'],
        answer: 1,
        explanation: 'Escopo é **alcance**. Plazo é prazo.',
      },
      {
        prompt: '¿___ lo necesitan? — Para el viernes.',
        options: ['Para cuándo', 'Por qué', 'Cuánto'],
        answer: 0,
        explanation: 'Perguntando o prazo: ¿**para cuándo**?',
      },
      {
        prompt: 'Como se diz "estimativa" em espanhol?',
        options: ['la estima', 'la estimativa', 'la estimación'],
        answer: 2,
        explanation: 'Estimativa é **estimación**. "Estima" é apreço.',
      },
      {
        prompt: 'Isso vai levar mais ou menos três dias.',
        options: [
          'Eso va llevar más o menos tres días.',
          'Eso va a llevar más o menos tres días.',
          'Eso lleva a más o menos tres días.',
        ],
        answer: 1,
        explanation: 'Duração com **llevar**, e ir **a** + infinitivo: va **a** llevar.',
      },
      {
        prompt: 'Você ainda não consegue estimar um ticket. O que diz?',
        options: ['Todavía no sé, necesito investigar un poco.', 'Ya sé, son dos puntos.', 'Es urgente, hay que hacerlo hoy.'],
        answer: 0,
        explanation: '**Todavía no sé** + o que você precisa para estimar.',
      },
    ],
  },
}
