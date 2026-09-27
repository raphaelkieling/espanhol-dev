import type { Section } from '../types'

export const sinEmbargoEntonces: Section = {
  slug: 'sin-embargo-entonces',
  title: 'Sin embargo, entonces, o sea, por eso, es decir',
  summary: 'Conectores para contrastar, concluir e explicar melhor, e qual deles usar falando ou escrevendo.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'Estes conectores ligam uma frase à anterior. Alguns soam naturais na fala e outros ficam melhor por escrito, em docs, e-mails ou descrições de PR.',
        },
        {
          type: 'table',
          columns: ['Para…', 'Na fala', 'Por escrito'],
          rows: [
            ['contrastar', '**pero**', '**sin embargo**'],
            ['seguir ou concluir', '**entonces**', '**entonces**'],
            ['dizer a consequência', '**así que**, **por eso**', '**por eso**, **por lo tanto**'],
            ['explicar de novo', '**o sea**', '**es decir**'],
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'sin embargo',
      blocks: [
        {
          type: 'text',
          text: 'É o "no entanto". Costuma começar a frase, seguido de vírgula.',
        },
        {
          type: 'examples',
          items: [
            { es: 'El cambio es pequeño. **Sin embargo**, afecta a todo el login.', pt: 'A mudança é pequena. No entanto, afeta todo o login.' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'entonces y así que',
      blocks: [
        {
          type: 'text',
          text: '**Entonces** é igual ao "então": serve para concluir e para seguir a conversa. **Así que** é o "então" de consequência, muito comum no meio da frase.',
        },
        {
          type: 'examples',
          items: [
            { es: '**Entonces**, ¿lo desplegamos hoy?', pt: 'Então, fazemos o deploy hoje?' },
            { es: 'La API estaba caída, **así que** reinicié el servicio.', pt: 'A API estava fora, então reiniciei o serviço.' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'por eso',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: 'El test fallaba a veces, **por eso** lo desactivé.', pt: 'O teste falhava às vezes, por isso desativei.' },
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~Por isso~~ → Por **eso**. Em espanhol, "isso" é **eso**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'o sea y es decir',
      blocks: [
        {
          type: 'text',
          text: 'Os dois equivalem a "ou seja". **O sea** é muito usado na fala, às vezes até como pausa. **Es decir** soa mais formal.',
        },
        {
          type: 'examples',
          items: [
            { es: 'Falla en staging, **o sea**, hoy no desplegamos.', pt: 'Falha no staging, ou seja, hoje não tem deploy.' },
            { es: 'El endpoint es idempotente, **es decir**, se puede llamar varias veces.', pt: 'O endpoint é idempotente, isto é, pode ser chamado várias vezes.' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Practica',
      blocks: [
        {
          type: 'text',
          text: 'Escreva o conector que falta. A tradução ajuda a escolher entre eles.',
        },
        {
          type: 'fill',
          items: [
            { es: 'El cambio parece simple. ___, rompe los tests de integración.', answer: ['Sin embargo', 'No obstante'], pt: 'A mudança parece simples. No entanto, quebra os testes de integração.' },
            { es: 'El build tardaba mucho, ___ activé la caché.', answer: ['por eso', 'así que'], pt: 'O build demorava muito, por isso ativei o cache.' },
            { es: '___, ¿cerramos el ticket?', answer: 'Entonces', pt: 'Então, fechamos o ticket?' },
            { es: 'La API devuelve 429, ___, estamos pasando el límite.', answer: ['o sea', 'es decir'], pt: 'A API devolve 429, ou seja, estamos passando do limite.' },
            { es: 'Usamos soft delete, ___, los registros nunca se borran de verdad.', answer: ['es decir', 'o sea'], pt: 'Usamos soft delete, isto é, os registros nunca são apagados de verdade.' },
            { es: 'Hoy tengo el día lleno de reuniones, ___ reviso tu PR mañana.', answer: ['así que', 'por eso', 'entonces'], pt: 'Hoje meu dia está cheio de reuniões, então reviso seu PR amanhã.' },
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Num e-mail formal: "La migración terminó. ___, algunos datos no se copiaron."',
        options: ['O sea', 'Sin embargo', 'Así que'],
        answer: 1,
        explanation: 'Contraste por escrito: **sin embargo**.',
      },
      {
        prompt: 'O teste estava quebrado, por isso atrasei o PR.',
        options: [
          'El test estaba roto, por isso retrasé el PR.',
          'El test estaba roto, por eso retrasé el PR.',
          'El test estaba roto, sin embargo retrasé el PR.',
        ],
        answer: 1,
        explanation: '"Por isso" é **por eso**.',
      },
      {
        prompt: 'No había tests, ___ los escribí yo.',
        options: ['así que', 'sin embargo', 'es decir'],
        answer: 0,
        explanation: 'Consequência: **así que**.',
      },
      {
        prompt: 'Qual equivale a "ou seja" numa conversa informal?',
        options: ['sin embargo', 'o sea', 'por lo tanto'],
        answer: 1,
        explanation: 'Na fala, "ou seja" é **o sea**.',
      },
      {
        prompt: '___, ¿quién se encarga del deploy?',
        options: ['Sin embargo', 'Es decir', 'Entonces'],
        answer: 2,
        explanation: 'Para seguir a conversa e decidir algo: **entonces**.',
      },
    ],
  },
}
