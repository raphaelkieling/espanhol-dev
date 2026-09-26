import type { Section } from '../types'

export const avisarRetraso: Section = {
  slug: 'avisar-que-algo-se-retrasa',
  title: 'Avisar que algo se retrasa',
  summary: 'Como avisar cedo que algo vai atrasar, explicar o motivo e propor uma saída.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'Atrasos acontecem. O time só precisa saber cedo, com um motivo e uma proposta. A ordem é **aviso → motivo → propuesta**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Avisar',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**Les aviso que**…', 'Aviso vocês que…'],
            ['**No voy a llegar** para el viernes.', 'Não vou conseguir entregar até sexta.'],
            ['**Se va a retrasar** un día.', 'Vai atrasar um dia.'],
            ['**Necesito más tiempo** para los tests.', 'Preciso de mais tempo para os testes.'],
            ['**Va a estar listo** el lunes.', 'Vai ficar pronto na segunda.'],
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: '**Te aviso** para uma pessoa, **les aviso** para o time. "No voy a llegar" é chegar ao prazo, o jeito mais natural de dizer "não vou conseguir".',
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~Desculpa la demora~~ → **Perdón por** la demora / **Disculpa** la demora.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Explicar o motivo',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: 'Es **más complejo de lo que pensé**.', pt: 'É mais complexo do que pensei.' },
            { es: '**Apareció** un bug en la integración con pagos.', pt: 'Apareceu um bug na integração com pagamentos.' },
            { es: '**Estoy esperando** el acceso desde el martes.', pt: 'Estou esperando o acesso desde terça.' },
            { es: 'Terminé el backend, **pero** el front **todavía** no.', pt: 'Terminei o backend, mas o front ainda não.' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Propor uma saída',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**Puedo entregar** una primera versión el viernes.', 'Posso entregar uma primeira versão na sexta.'],
            ['**Propongo** dejar el PDF para el próximo sprint.', 'Proponho deixar o PDF para o próximo sprint.'],
            ['**Podemos sacar** los gráficos del alcance.', 'Podemos tirar os gráficos do escopo.'],
            ['**¿Qué les parece si**…?', 'O que acham se…?'],
          ],
        },
        {
          type: 'examples',
          items: [
            { es: '¿**Qué les parece si** lo dividimos en dos tickets?', pt: 'O que acham de dividirmos em dois tickets?' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'A mensagem completa',
      blocks: [
        {
          type: 'examples',
          items: [
            {
              es: 'Hola, equipo. **Les aviso que** el ticket de reportes **se va a retrasar**. La API de pagos devuelve datos incompletos y todavía no sé por qué. **Puedo entregar** la vista sin el PDF el viernes y dejar el PDF para el lunes. **¿Qué les parece?**',
              pt: 'Oi, time. Aviso que o ticket de relatórios vai atrasar. A API de pagamentos retorna dados incompletos e ainda não sei por quê. Posso entregar a tela sem o PDF na sexta e deixar o PDF para segunda. O que acham?',
            },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Avise assim que perceber o atraso, não no dia da entrega.',
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Não vou conseguir entregar até sexta.',
        options: ['No voy a llegar para el viernes.', 'No voy llegar el viernes.', 'No llego a el viernes.'],
        answer: 0,
        explanation: 'O natural é **no voy a llegar**: não vou chegar ao prazo.',
      },
      {
        prompt: 'Desculpa a demora.',
        options: ['Desculpa la demora.', 'Perdón por la demora.', 'Perdón a la demora.'],
        answer: 1,
        explanation: '**Perdón por** la demora (ou **disculpa** la demora).',
      },
      {
        prompt: '¿Qué les ___ si dejamos el PDF para el próximo sprint?',
        options: ['parecen', 'parecemos', 'parece'],
        answer: 2,
        explanation: 'A expressão fixa é ¿qué les **parece**?',
      },
      {
        prompt: 'Qual mensagem de atraso é melhor?',
        options: [
          'El ticket se va a retrasar.',
          'El ticket se va a retrasar porque la API falla. Puedo entregar una parte el viernes.',
          'Perdón, perdón, el ticket no está.',
        ],
        answer: 1,
        explanation: 'Aviso, **motivo** e **propuesta**.',
      },
      {
        prompt: 'Vai ficar pronto na segunda.',
        options: ['Va a estar listo el lunes.', 'Va a estar pronto el lunes.', 'Va estar listo el lunes.'],
        answer: 0,
        explanation: 'Pronto é **listo**, e ir **a** + infinitivo.',
      },
    ],
  },
}
