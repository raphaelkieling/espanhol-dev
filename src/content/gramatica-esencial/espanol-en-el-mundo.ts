import type { Section } from '../types'

export const espanolEnElMundo: Section = {
  slug: 'el-espanol-en-el-mundo',
  kind: 'intro',
  title: 'El español en el mundo',
  summary: 'Um idioma, muitos sotaques, e qual deles este curso usa.',
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

    { type: 'heading', text: 'vocês: ustedes ou vosotros' },
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

    { type: 'heading', text: 'vos no lugar de tú' },
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

    { type: 'heading', text: 'Sotaque' },
    {
      type: 'table',
      columns: ['Onde', 'O que muda', 'Exemplo'],
      rows: [
        ['Espanha', '**z** e **ce/ci** soam como o "th" do inglês', 'cero, hacer, zona'],
        ['Argentina e Uruguai', '**ll** e **y** soam como "ch" ou "j"', 'calle → "cache", yo → "cho"'],
        ['Caribe', 'o **s** do fim da sílaba quase some', 'están → "etán"'],
      ],
    },

    { type: 'heading', text: 'Palavras que mudam' },
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

    {
      type: 'text',
      text: 'Ninguém espera que você imite um sotaque. Fale de forma clara e, com o tempo, pegue as palavras que o seu time usa.',
    },
  ],
}
