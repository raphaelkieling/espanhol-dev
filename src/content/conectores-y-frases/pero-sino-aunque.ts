import type { Section } from '../types'

export const peroSinoAunque: Section = {
  slug: 'pero-sino-aunque',
  title: 'Pero, sino, aunque, todavía, ya, además',
  summary: 'As palavras curtas que mais aparecem numa conversa, incluindo um falso amigo perigoso.',
  blocks: [
    {
      type: 'table',
      columns: ['Español', 'Português', 'Exemplo'],
      rows: [
        ['**pero**', 'mas, porém', 'Funciona, **pero** es lento.'],
        ['**sino**', 'mas sim (depois de "não")', 'No es un bug, **sino** una feature.'],
        ['**aunque**', 'embora, mesmo que', '**Aunque** pasa los tests, falla en staging.'],
        ['**todavía**', 'ainda', '**Todavía** no está listo.'],
        ['**ya**', 'já', '**Ya** está en producción.'],
        ['**además**', 'além disso', '**Además**, hay que actualizar la doc.'],
      ],
    },

    { type: 'heading', text: 'todavía não é "todavia"' },
    {
      type: 'text',
      text: 'Em português, "todavia" significa "porém". Em espanhol, **todavía** significa **ainda**. Para "porém", use **pero** ou **sin embargo**.',
    },
    {
      type: 'examples',
      items: [
        { es: '¿**Todavía** estás en la reunión?', pt: 'Você ainda está na reunião?' },
        { es: '**Todavía** no revisé tu PR.', pt: 'Ainda não revisei seu PR.' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: '~~Funciona, todavía es lento~~ → Funciona, **pero** es lento.',
    },
    {
      type: 'note',
      tone: 'tip',
      text: '**Aún** (com acento) também significa ainda: **aún** no está listo.',
    },

    { type: 'heading', text: 'pero × sino' },
    {
      type: 'text',
      text: '**Sino** só aparece depois de uma negação, para **corrigir**: não é isso, é aquilo. Se não há correção, é **pero**.',
    },
    {
      type: 'examples',
      items: [
        { es: 'No es un problema de red, **sino** de DNS.', pt: 'Não é um problema de rede, e sim de DNS.' },
        { es: 'No lo hizo Pedro, **sino** Ana.', pt: 'Não foi o Pedro, foi a Ana.' },
        { es: 'No es urgente, **pero** hay que hacerlo esta semana.', pt: 'Não é urgente, mas tem que ser feito esta semana.' },
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      title: 'sino × si no',
      text: 'Separado, **si no** é "se não": **Si no** funciona, avísame.',
    },

    { type: 'heading', text: 'aunque' },
    {
      type: 'text',
      text: 'Quando se fala de um fato, **aunque** usa o verbo normal, diferente de "embora" em português.',
    },
    {
      type: 'examples',
      items: [
        { es: '**Aunque** el cambio **es** pequeño, necesita review.', pt: 'Embora a mudança seja pequena, precisa de review.' },
      ],
    },

    { type: 'heading', text: 'ya y además' },
    {
      type: 'examples',
      items: [
        { es: '**Ya** lo arreglé.', pt: 'Já arrumei.' },
        { es: '¿**Ya** terminaste?', pt: 'Já terminou?' },
        { es: '**Además del** backend, hago el front.', pt: 'Além do backend, faço o front.' },
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: '"Além de" é **además de**, e com el vira **además del**.',
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'El PR no está listo ___, falta un test.',
        options: ['todavía', 'pero', 'además'],
        answer: 0,
        explanation: '**Todavía** = ainda.',
      },
      {
        prompt: 'No es un error del frontend, ___ de la API.',
        options: ['pero', 'sino', 'si no'],
        answer: 1,
        explanation: 'Depois de negação, corrigindo: **sino**.',
      },
      {
        prompt: 'O código funciona, porém é difícil de manter.',
        options: [
          'El código funciona, todavía es difícil de mantener.',
          'El código funciona, sino es difícil de mantener.',
          'El código funciona, pero es difícil de mantener.',
        ],
        answer: 2,
        explanation: '"Porém" é **pero**. Todavía significa ainda.',
      },
      {
        prompt: '___ el fix es simple, prefiero probarlo en staging.',
        options: ['Aunque', 'Ya', 'Sino'],
        answer: 0,
        explanation: '**Aunque** = embora.',
      },
      {
        prompt: '¿Revisaste mi PR? — Sí, ___ lo aprobé.',
        options: ['todavía', 'ya', 'además'],
        answer: 1,
        explanation: '**Ya** = já.',
      },
    ],
  },
}
