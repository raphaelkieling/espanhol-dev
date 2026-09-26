import type { Section } from '../types'

export const presentarDemo: Section = {
  slug: 'presentar-una-demo',
  title: 'Presentar una demo',
  summary: 'A estrutura de uma demo curta, o que dizer quando algo dá errado e como responder perguntas.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'Uma boa demo segue uma estrutura simples: **contexto → demo → próximos pasos → preguntas**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Abrir',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**¿Se ve bien mi pantalla?**', 'Minha tela está aparecendo bem?'],
            ['**Les voy a mostrar**…', 'Vou mostrar para vocês…'],
            ['**Hasta ahora**, el usuario tiene que…', 'Até agora, o usuário tem que…'],
            ['**Con este cambio**…', 'Com essa mudança…'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~Voy a apresentar~~ → Voy a **presentar**. E lembre: tela é **pantalla**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Durante a demo',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '**Primero** entro como administrador.', pt: 'Primeiro entro como administrador.' },
            { es: '**Como ven**, el reporte carga en dos segundos.', pt: 'Como vocês podem ver, o relatório carrega em dois segundos.' },
            { es: '**Aquí** pueden ver los filtros.', pt: 'Aqui vocês podem ver os filtros.' },
            { es: '**Si hago clic aquí**, se abre el detalle.', pt: 'Se eu clicar aqui, abre o detalhe.' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Quando algo dá errado',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '**Parece que** el servidor está lento. **Un segundo.**', pt: 'Parece que o servidor está lento. Um segundo.' },
            { es: '**Esto funcionó hace cinco minutos**, lo prometo.', pt: 'Isso funcionou cinco minutos atrás, juro.' },
            { es: '**Tengo un video**, por si acaso.', pt: 'Tenho um vídeo, por via das dúvidas.' },
            { es: '**Lo reviso después** y les aviso.', pt: 'Vejo isso depois e aviso vocês.' },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Tenha um plano B, como um vídeo ou screenshots. Um pouco de humor também ajuda: todo mundo já teve uma demo que falhou.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Fechar e responder perguntas',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**Los próximos pasos son**…', 'Os próximos passos são…'],
            ['**¿Alguna pregunta?**', 'Alguma pergunta?'],
            ['**Buena pregunta.**', 'Boa pergunta.'],
            ['**No lo sé, pero lo averiguo** y te aviso.', 'Não sei, mas vou descobrir e te aviso.'],
            ['**Eso es todo.** Gracias.', 'É isso. Obrigado.'],
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Vou mostrar para vocês o novo relatório.',
        options: ['Les voy a mostrar el nuevo reporte.', 'Les voy mostrar el nuevo reporte.', 'Los voy a mostrar el nuevo reporte.'],
        answer: 0,
        explanation: '**Les** (para vocês) + voy **a** mostrar.',
      },
      {
        prompt: '"Como ven, el reporte carga en dos segundos." "Como ven" significa…',
        options: ['quando vocês vierem', 'como vocês podem ver', 'venham ver'],
        answer: 1,
        explanation: '**Como ven** = como vocês podem ver.',
      },
      {
        prompt: 'A demo travou. Qual é a melhor reação?',
        options: [
          'Perdón, perdón, no sé qué pasó, perdón.',
          'Esto no funciona, terminamos.',
          'Parece que el servidor está lento. Tengo un video, por si acaso.',
        ],
        answer: 2,
        explanation: 'Calma e plano B: **tengo un video**.',
      },
      {
        prompt: 'Alguém faz uma pergunta que você não sabe responder. O que diz?',
        options: ['No sé.', 'No lo sé, pero lo averiguo y te aviso.', 'Eso no importa.'],
        answer: 1,
        explanation: '**No lo sé, pero lo averiguo** + te aviso.',
      },
      {
        prompt: 'Vou apresentar a demo.',
        options: ['Voy a presentar la demo.', 'Voy a apresentar la demo.', 'Voy presentar la demo.'],
        answer: 0,
        explanation: 'Apresentar é **presentar**, e ir **a** + infinitivo.',
      },
    ],
  },
}
