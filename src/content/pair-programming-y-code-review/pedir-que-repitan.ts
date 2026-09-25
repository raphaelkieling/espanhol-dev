import type { Section } from '../types'

export const pedirQueRepitan: Section = {
  slug: 'pedir-que-repitan-o-expliquen',
  title: 'Pedir que repitan o expliquen',
  summary: 'O que dizer quando você não entendeu, perdeu uma parte ou precisa que falem mais devagar.',
  blocks: [
    {
      type: 'text',
      text: 'Não entender faz parte, principalmente com sotaques diferentes. Pedir para repetir é normal e muito melhor do que concordar sem ter entendido.',
    },

    { type: 'heading', text: 'Pedir para repetir' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['**¿Me lo repites?**', 'Pode repetir?'],
        ['**Perdón, no te escuché.**', 'Desculpa, não te ouvi.'],
        ['**¿Puedes hablar más despacio?**', 'Pode falar mais devagar?'],
        ['**Se cortó el audio.**', 'O áudio cortou.'],
        ['**¿Perdón?** / **¿Cómo?**', 'Como? (não entendi)'],
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: '~~Más devagar~~ → Más **despacio**. E cuidado: "más bajo" é mais baixo (volume).',
    },
    {
      type: 'note',
      tone: 'tip',
      text: '"¿Qué?" sozinho pode soar seco. Prefira **¿Perdón?** ou **¿Cómo?**. No México, você vai ouvir **¿Mande?**.',
    },

    { type: 'heading', text: 'Pedir para explicar' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['**¿Qué quieres decir con**…?', 'O que você quer dizer com…?'],
        ['**¿Me explicas** esta parte?', 'Me explica essa parte?'],
        ['**¿Qué significa** "blue-green"?', 'O que significa "blue-green"?'],
        ['**¿Tienes un ejemplo?**', 'Tem um exemplo?'],
        ['**No entendí** la parte del cache.', 'Não entendi a parte do cache.'],
      ],
    },

    { type: 'heading', text: 'Confirmar que entendeu' },
    {
      type: 'text',
      text: 'Repetir com suas palavras é a forma mais segura de confirmar. O **o sea** e o **entonces** do módulo 2 ajudam aqui.',
    },
    {
      type: 'examples',
      items: [
        { es: '**O sea que** primero migramos y después borramos la tabla vieja, ¿no?', pt: 'Ou seja, primeiro migramos e depois apagamos a tabela antiga, né?' },
        { es: '**Entonces, si entendí bien**, el cache se limpia cada hora.', pt: 'Então, se entendi bem, o cache é limpo a cada hora.' },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Pode falar mais devagar?',
        options: ['¿Puedes hablar más devagar?', '¿Puedes hablar más despacio?', '¿Puedes hablar más bajo?'],
        answer: 1,
        explanation: 'Devagar é **despacio**. "Más bajo" é mais baixo.',
      },
      {
        prompt: 'A conexão caiu e você perdeu a frase. O que diz?',
        options: ['Se cortó el audio, ¿me lo repites?', 'No estoy de acuerdo.', 'Buena idea, lo cambio.'],
        answer: 0,
        explanation: '**Se cortó el audio** + **¿me lo repites?**',
      },
      {
        prompt: 'Qual é o jeito mais educado de dizer que não entendeu?',
        options: ['¿Eh?', '¿Qué?', '¿Perdón, cómo?'],
        answer: 2,
        explanation: '**¿Perdón?** ou **¿Cómo?** soam mais gentis do que "¿qué?".',
      },
      {
        prompt: '"¿Qué quieres decir con blue-green?" O que significa?',
        options: ['Quando é o deploy blue-green?', 'O que você quer dizer com blue-green?', 'Você quer fazer o blue-green?'],
        answer: 1,
        explanation: '**¿Qué quieres decir con**…? = o que você quer dizer com…?',
      },
      {
        prompt: '___, el cache se limpia cada hora, ¿no?',
        options: ['Si entendí bien', 'Sin embargo', 'Además'],
        answer: 0,
        explanation: 'Para confirmar com suas palavras: **si entendí bien**.',
      },
    ],
  },
}
