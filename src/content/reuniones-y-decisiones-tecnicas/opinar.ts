import type { Section } from '../types'

export const opinar: Section = {
  slug: 'opinar-estar-de-acuerdo-y-discrepar',
  title: 'Opinar, estar de acuerdo y discrepar',
  summary: 'Dar opinião, concordar e discordar com educação numa reunião técnica.',
  blocks: [
    {
      type: 'card',
      title: 'Opinar',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**Creo que**…', 'Acho que…'],
            ['**Me parece que**…', 'Me parece que…'],
            ['**Para mí**…', 'Para mim…'],
            ['**En mi opinión**…', 'Na minha opinião…'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '"Achar" não existe em espanhol. ~~Acho que~~ → **Creo que**. Para achar algo perdido, **encontrar**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Concordar',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**Estoy de acuerdo.**', 'Concordo.'],
            ['**Tienes razón.**', 'Você tem razão.'],
            ['**Exacto.**', 'Exato.'],
            ['**Me parece bien.**', 'Por mim, tudo bem.'],
            ['**Estoy de acuerdo en parte.**', 'Concordo em parte.'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'É **estar** de acuerdo: ~~soy de acuerdo~~ → **estoy** de acuerdo.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Discordar',
      blocks: [
        {
          type: 'text',
          text: 'Em reuniões técnicas, discordar é normal e esperado. Reconheça o ponto da outra pessoa e dê um motivo.',
        },
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**Entiendo tu punto, pero**…', 'Entendo seu ponto, mas…'],
            ['**No estoy de acuerdo, porque**…', 'Não concordo, porque…'],
            ['**Lo veo distinto.**', 'Vejo diferente.'],
            ['**Tiene sentido, pero ¿qué pasa si**…?', 'Faz sentido, mas e se…?'],
          ],
        },
        {
          type: 'examples',
          items: [
            { es: '**Entiendo tu punto, pero** una cola agrega otro servicio que mantener.', pt: 'Entendo seu ponto, mas uma fila adiciona outro serviço para manter.' },
            { es: '**Lo veo distinto**: el problema no son los servidores, **sino** las queries.', pt: 'Vejo diferente: o problema não são os servidores, e sim as queries.' },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Discorde da ideia, não da pessoa: "esa solución…" em vez de "tú…".',
        },
      ],
    },

    {
      type: 'card',
      title: 'Pedir a palavra e fechar',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '**¿Puedo agregar algo?**', pt: 'Posso acrescentar uma coisa?' },
            { es: '**Perdón que te interrumpa**, pero…', pt: 'Desculpa te interromper, mas…' },
            { es: '**Volviendo a** lo de la cola…', pt: 'Voltando à questão da fila…' },
            { es: 'Entonces, **¿quedamos en** usar Postgres?', pt: 'Então, combinamos de usar Postgres?' },
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Acho que é melhor esperar.',
        options: ['Acho que es mejor esperar.', 'Creo que es mejor esperar.', 'Creo de que es mejor esperar.'],
        answer: 1,
        explanation: 'Achar (opinião) é **creer**: creo que.',
      },
      {
        prompt: 'Concordo.',
        options: ['Estoy de acuerdo.', 'Soy de acuerdo.', 'Tengo de acuerdo.'],
        answer: 0,
        explanation: 'É **estar** de acuerdo.',
      },
      {
        prompt: 'Qual frase discorda com educação?',
        options: ['Eso no tiene sentido.', 'Estás equivocado.', 'Entiendo tu punto, pero una cola agrega complejidad.'],
        answer: 2,
        explanation: 'Reconheça o ponto (**entiendo tu punto**) e dê o motivo.',
      },
      {
        prompt: '"Lo veo distinto." O que significa?',
        options: ['Não estou vendo.', 'Vejo diferente.', 'Vejo de novo.'],
        answer: 1,
        explanation: '**Lo veo distinto** = vejo diferente.',
      },
      {
        prompt: 'Entonces, ¿___ en usar Postgres?',
        options: ['quedamos', 'estamos', 'tenemos'],
        answer: 0,
        explanation: 'Para fechar uma decisão: ¿**quedamos en**…? = combinamos…?',
      },
    ],
  },
}
