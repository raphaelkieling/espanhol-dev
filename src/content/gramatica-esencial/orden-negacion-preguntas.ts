import type { Section } from '../types'

export const ordenNegacionPreguntas: Section = {
  slug: 'orden-negacion-preguntas',
  title: 'Orden de la frase, negación y preguntas',
  summary: 'Montar, negar e perguntar sem traduzir palavra por palavra.',
  blocks: [
    {
      type: 'card',
      title: 'A ordem é a mesma',
      blocks: [
        {
          type: 'text',
          text: 'Como no português: **quem + verbo + o resto**. O adjetivo costuma vir **depois** do substantivo.',
        },
        {
          type: 'examples',
          items: [
            { es: 'El equipo **despliega** los viernes.', pt: 'O time faz deploy às sextas.' },
            { es: 'Es un cambio **pequeño**.', pt: 'É uma mudança pequena.' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Negação',
      blocks: [
        {
          type: 'text',
          text: '**No** vem antes do verbo. Se houver pronome, ele fica entre o no e o verbo.',
        },
        {
          type: 'examples',
          items: [
            { es: '**No** funciona en Safari.', pt: 'Não funciona no Safari.' },
            { es: '**No lo** sé.', pt: 'Não sei.' },
            { es: '**No** hay **nada** en los logs.', pt: 'Não tem nada nos logs.' },
          ],
        },
        {
          type: 'table',
          columns: ['Português', 'Español'],
          rows: [
            ['também não', '**tampoco**'],
            ['nunca', '**nunca** / **no** … **nunca**'],
            ['ainda não', '**todavía no**'],
            ['não … mais', '**ya no**'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~Yo también no~~ → Yo **tampoco**. ~~No sé no~~ → **No sé.** O "não" do fim da frase não existe em espanhol.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Perguntas',
      blocks: [
        {
          type: 'text',
          text: 'Uma pergunta de sim ou não tem a mesma ordem de uma afirmação: só muda a entonação. Na escrita, a frase abre com **¿** e fecha com **?**.',
        },
        {
          type: 'examples',
          items: [
            { es: '**¿**Puedes compartir pantalla**?**', pt: 'Você pode compartilhar a tela?' },
            { es: '**¿**Ya está en producción**?**', pt: 'Já está em produção?' },
          ],
        },
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['¿**qué**?', 'o quê? / que?'],
            ['¿**cuál**?', 'qual?'],
            ['¿**quién**?', 'quem?'],
            ['¿**cómo**?', 'como?'],
            ['¿**cuándo**?', 'quando?'],
            ['¿**dónde**?', 'onde?'],
            ['¿**cuánto**?', 'quanto?'],
            ['¿**por qué**?', 'por quê?'],
          ],
          caption: 'Nas perguntas, essas palavras sempre levam acento.',
        },
        {
          type: 'note',
          tone: 'tip',
          title: 'por qué × porque',
          text: 'Pergunta: ¿**Por qué** falla? Resposta: **Porque** falta una variable de entorno.',
        },
        {
          type: 'note',
          tone: 'tip',
          title: 'qué × cuál',
          text: 'Para escolher ou pedir um dado, use **cuál**: ¿**Cuál** es la URL? Para pedir definição, use **qué**: ¿**Qué** es un webhook?',
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Não sei onde está o erro.',
        options: ['No sé dónde está el error.', 'No sé donde está el error no.', 'Sé no dónde está el error.'],
        answer: 0,
        explanation: '**No** antes do verbo, sem repetir no fim.',
      },
      {
        prompt: 'No me gusta esta solución. — A mí ___.',
        options: ['también no', 'tampoco', 'no también'],
        answer: 1,
        explanation: '"Também não" é **tampoco**.',
      },
      {
        prompt: '¿___ es la contraseña del staging?',
        options: ['Qué', 'Cuál', 'Quién'],
        answer: 1,
        explanation: 'Pedindo um dado específico: **cuál**.',
      },
      {
        prompt: '¿___ no pasan los tests? — Porque cambió el esquema.',
        options: ['Porque', 'Por que', 'Por qué'],
        answer: 2,
        explanation: 'Na pergunta, separado e com acento: **por qué**.',
      },
      {
        prompt: 'O ticket ainda não está pronto.',
        options: ['El ticket ya no está listo.', 'El ticket todavía no está listo.', 'El ticket no está todavía no listo.'],
        answer: 1,
        explanation: '"Ainda não" é **todavía no**. Ya no significa "não mais".',
      },
    ],
  },
}
