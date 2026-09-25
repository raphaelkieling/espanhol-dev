import type { Section } from '../types'

export const generos: Section = {
  slug: 'generos',
  title: 'Géneros que cambian del portugués',
  summary: 'As palavras que parecem iguais mas trocam de gênero, e como decidir o artigo de termos em inglês.',
  blocks: [
    {
      type: 'text',
      text: 'Na maioria das palavras, o gênero é o mesmo do português: **el** sistema, **la** versión, **el** servidor. O problema são as poucas que trocam, porque o erro aparece logo no artigo.',
    },

    { type: 'heading', text: 'As que mais aparecem no trabalho' },
    {
      type: 'table',
      columns: ['Português', 'Español'],
      rows: [
        ['a mensagem', '**el** mensaje'],
        ['a linguagem', '**el** lenguaje'],
        ['a porcentagem', '**el** porcentaje'],
        ['a análise', '**el** análisis'],
        ['a ordem', '**el** orden'],
        ['a origem', '**el** origen'],
        ['a cor', '**el** color'],
        ['o alarme', '**la** alarma'],
        ['o sinal', '**la** señal'],
        ['o costume', '**la** costumbre'],
      ],
    },

    { type: 'heading', text: 'Duas terminações que ajudam' },
    {
      type: 'table',
      columns: ['Terminação', 'Gênero', 'Exemplos'],
      rows: [
        ['-aje', 'masculino', '**el** mensaje, **el** lenguaje, **el** aprendizaje'],
        ['-umbre', 'feminino', '**la** costumbre, **la** incertidumbre'],
      ],
      caption: 'Em português, -agem e -ume costumam ter o gênero contrário.',
    },

    { type: 'heading', text: 'Palavras em inglês' },
    {
      type: 'text',
      text: 'Termos técnicos em inglês são quase sempre **masculinos**. A exceção é quando a palavra em espanhol que eles substituem é feminina.',
    },
    {
      type: 'table',
      columns: ['Masculino', 'Feminino (pensando em…)'],
      rows: [
        ['**el** commit', '**la** API (la interfaz)'],
        ['**el** deploy', '**la** app (la aplicación)'],
        ['**el** bug', '**la** query (la consulta)'],
        ['**el** backlog', '**la** feature (la funcionalidad)'],
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'Em dúvida com um termo novo, preste atenção em como o time fala e repita. Nesses casos, ninguém vai te corrigir por usar o gênero que o time usa.',
    },

    { type: 'heading', text: 'el agua, el área' },
    {
      type: 'text',
      text: 'Palavras femininas que começam com **a** tônica usam **el** no singular, para não juntar dois sons de "a". Elas continuam femininas.',
    },
    {
      type: 'examples',
      items: [
        { es: '**El** área de producto está contenta.', pt: 'A área de produto está contente.' },
        { es: 'Hablé con **las** áreas de soporte y ventas.', pt: 'Falei com as áreas de suporte e vendas.' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: 'O adjetivo continua feminino: el área ~~nuevo~~ → el área **nueva**.',
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Te mandé ___ mensaje por Slack.',
        options: ['la', 'el', 'lo'],
        answer: 1,
        explanation: 'Palavras em -aje são masculinas: **el** mensaje.',
      },
      {
        prompt: '___ análisis de rendimiento está listo.',
        options: ['El', 'La', 'Lo'],
        answer: 0,
        explanation: 'Diferente do português: **el** análisis.',
      },
      {
        prompt: 'Saltó ___ alarma de producción.',
        options: ['el', 'la', 'lo'],
        answer: 1,
        explanation: 'Em espanhol é feminino: **la** alarma.',
      },
      {
        prompt: '¿Qué ___ de programación usáis?',
        options: ['lenguaje', 'linguagem', 'lengua'],
        answer: 0,
        explanation: '"Linguagem de programação" é **lenguaje** de programación (masculino).',
      },
      {
        prompt: '¿Cuál frase es correcta?',
        options: ['La área nueva empieza el lunes.', 'El área nuevo empieza el lunes.', 'El área nueva empieza el lunes.'],
        answer: 2,
        explanation: 'Área começa com a tônica: leva **el**, mas continua feminina, então **nueva**.',
      },
    ],
  },
}
