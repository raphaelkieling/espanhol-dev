import type { Section } from '../types'

export const espanolEnElMundo: Section = {
  slug: 'el-espanol-en-el-mundo',
  title: 'El español en el mundo',
  summary: 'Um idioma, muitos sotaques, e qual deles este curso usa.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'O espanhol é a língua oficial de mais de 20 países. Assim como português do Brasil e de Portugal, as variantes mudam no sotaque e em algumas palavras, mas todo mundo se entende.',
        },
        {
          type: 'note',
          tone: 'tip',
          title: 'Foco deste curso',
          text: 'Os exemplos seguem o espanhol da **América Latina**, onde estão cerca de 9 em cada 10 falantes. Quando a Espanha fizer diferente em algo que você vai ouvir no trabalho, aparece uma nota.',
        },
      ],
    },

    {
      type: 'card',
      title: 'vocês: ustedes ou vosotros',
      blocks: [
        {
          type: 'text',
          text: 'Na América Latina, "vocês" é sempre **ustedes**. Na Espanha, entre colegas, usa-se **vosotros**, com uma conjugação própria.',
        },
        {
          type: 'examples',
          items: [
            { es: '¿**Ustedes** usan TypeScript?', pt: 'América Latina' },
            { es: '¿**Vosotros** usáis TypeScript?', pt: 'Espanha' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'vos no lugar de tú',
      blocks: [
        {
          type: 'text',
          text: 'Na Argentina, no Uruguai e em partes da América Central, o "você" informal é **vos**, e o verbo muda um pouco. Você só precisa reconhecer.',
        },
        {
          type: 'table',
          columns: ['Com tú', 'Com vos'],
          rows: [
            ['**tú tienes**', '**vos tenés**'],
            ['¿**puedes** revisar?', '¿**podés** revisar?'],
            ['**eres**', '**sos**'],
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Sotaque',
      blocks: [
        {
          type: 'table',
          columns: ['Onde', 'O que muda', 'Exemplo'],
          rows: [
            ['Espanha', '**z** e **ce/ci** soam como o "th" do inglês', 'cero, hacer, zona'],
            ['Argentina e Uruguai', '**ll** e **y** soam como "ch" ou "j"', 'calle → "cache", yo → "cho"'],
            ['Caribe', 'o **s** do fim da sílaba quase some', 'están → "etán"'],
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Palavras que mudam',
      blocks: [
        {
          type: 'table',
          columns: ['Português', 'América Latina', 'Espanha'],
          rows: [
            ['computador', '**computadora**', '**ordenador**'],
            ['celular', '**celular**', '**móvil**'],
            ['arquivo', '**archivo**', '**archivo**, **fichero**'],
            ['legal!', '**chévere** (CO), **chido** (MX), **copado** (AR)', '**guay**'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          title: 'coger',
          text: 'Na Espanha, **coger** é pegar. Em vários países da América Latina é palavrão. Prefira **tomar** ou **agarrar**: "**Tomo** el ticket".',
        },
      ],
    },

    {
      type: 'text',
      text: 'Ninguém espera que você imite um sotaque. Fale de forma clara e, com o tempo, pegue as palavras que o seu time usa.',
    },
  ],
  quiz: {
    questions: [
      {
        prompt: '¿Qué español siguen los ejemplos de este curso?',
        options: ['El de España', 'El de América Latina', 'Solo el de Argentina'],
        answer: 1,
        explanation: 'O curso segue o espanhol da **América Latina**, com notas quando a Espanha faz diferente.',
      },
      {
        prompt: 'En América Latina, "vocês" es…',
        options: ['ustedes', 'vosotros', 'vos'],
        answer: 0,
        explanation: 'Na América Latina é sempre **ustedes**. Vosotros é da Espanha.',
      },
      {
        prompt: 'Un argentino te pregunta "¿Podés revisar mi PR?". Es lo mismo que…',
        options: ['¿Puedes revisar mi PR?', '¿Pueden revisar mi PR?', '¿Podemos revisar mi PR?'],
        answer: 0,
        explanation: '**Podés** é a forma com vos de **puedes**.',
      },
      {
        prompt: 'En México, "computador" es…',
        options: ['el ordenador', 'la computadora', 'el móvil'],
        answer: 1,
        explanation: 'Na América Latina é **la computadora**. Ordenador é da Espanha.',
      },
      {
        prompt: 'Para dizer "pego o ticket" em qualquer país, o mais seguro é…',
        options: ['Cojo el ticket.', 'Pego el ticket.', 'Tomo el ticket.'],
        answer: 2,
        explanation: '**Coger** é palavrão em vários países, e pegar significa "colar" ou "bater". Use **tomar**.',
      },
    ],
  },
}
