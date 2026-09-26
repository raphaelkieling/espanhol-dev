import type { Section } from '../types'

export const ayerHoyBloqueos: Section = {
  slug: 'ayer-hoy-y-bloqueos',
  title: 'Ayer, hoy y bloqueos',
  summary: 'A estrutura da daily: o que você fez, o que vai fazer e o que está te bloqueando.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'A daily tem três partes, e cada uma usa um tempo verbal que você já viu no módulo 1.',
        },
        {
          type: 'table',
          columns: ['Parte', 'Tempo', 'Exemplo'],
          rows: [
            ['Ayer', 'pretérito', '**Ayer terminé** el endpoint de login.'],
            ['Hoy', 'ir a + infinitivo', '**Hoy voy a** escribir los tests.'],
            ['Bloqueos', 'presente', '**Estoy bloqueado** por el acceso a staging.'],
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Ayer',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: 'Ayer **terminé** la migración y **revisé** dos PRs.', pt: 'Ontem terminei a migração e revisei dois PRs.' },
            { es: 'Ayer **estuve** con el bug del checkout, pero todavía no lo encontré.', pt: 'Ontem fiquei no bug do checkout, mas ainda não achei.' },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Na segunda-feira, fale da sexta: "**El viernes** terminé…".',
        },
      ],
    },

    {
      type: 'card',
      title: 'Hoy',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**seguir con**', 'continuar com'],
            ['**empezar** (empiezo)', 'começar'],
            ['**subir** un PR', 'abrir um PR'],
            ['**desplegar**', 'fazer deploy'],
            ['**probar** (pruebo)', 'testar'],
          ],
        },
        {
          type: 'examples',
          items: [
            { es: 'Hoy **voy a seguir con** el ticket de pagos.', pt: 'Hoje vou continuar com o ticket de pagamentos.' },
            { es: 'Hoy **voy a** terminar el PR y, si hay tiempo, **empiezo** con la doc.', pt: 'Hoje vou terminar o PR e, se der tempo, começo a doc.' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Bloqueos',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**Estoy bloqueado por**…', 'Estou bloqueado por…'],
            ['**Necesito** acceso a…', 'Preciso de acesso a…'],
            ['**Estoy esperando** la respuesta de…', 'Estou esperando a resposta de…'],
            ['**¿Alguien me puede ayudar con**…?', 'Alguém pode me ajudar com…?'],
            ['**Sin bloqueos.**', 'Sem bloqueios.'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~Necesito de acceso~~ → **Necesito** acceso. Em espanhol, necesitar não leva "de". E "travado" é **trabado**: estoy **trabado** con este bug.',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Estar + gerúndio funciona como em português: **estoy revisando**, **estoy probando**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Uma daily completa',
      blocks: [
        {
          type: 'examples',
          items: [
            {
              es: '**Ayer terminé** el endpoint de login y subí el PR. **Hoy voy a** arreglar los comentarios del review y empezar con el logout. **Estoy bloqueado por** el acceso a staging, ¿alguien me puede ayudar?',
              pt: 'Ontem terminei o endpoint de login e abri o PR. Hoje vou ajustar os comentários do review e começar o logout. Estou bloqueado pelo acesso ao staging, alguém pode me ajudar?',
            },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Uma boa daily dura uns 30 segundos. Não conte tudo, só o que importa para o time.',
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: '___ terminé la migración.',
        options: ['Mañana', 'Ayer', 'Voy a'],
        answer: 1,
        explanation: 'Pretérito para o que você fez: **ayer** terminé.',
      },
      {
        prompt: 'Hoje vou revisar os PRs.',
        options: ['Hoy voy a revisar los PRs.', 'Hoy voy revisar los PRs.', 'Hoy revisé a los PRs.'],
        answer: 0,
        explanation: 'ir **a** + infinitivo: voy **a** revisar.',
      },
      {
        prompt: 'Preciso de acesso ao banco de dados.',
        options: ['Necesito de acceso a la base de datos.', 'Necesito acceso a la base de datos.', 'Preciso acceso a la base de datos.'],
        answer: 1,
        explanation: '**Necesitar** não leva "de": necesito acceso.',
      },
      {
        prompt: 'É segunda-feira. Como contar o que você fez na sexta?',
        options: ['El viernes voy a terminar el ticket.', 'Ayer terminé el ticket.', 'El viernes terminé el ticket.'],
        answer: 2,
        explanation: 'Na segunda, "ayer" é domingo. Diga **el viernes** + pretérito.',
      },
      {
        prompt: 'Estou travado com esse bug.',
        options: ['Estoy trabado con este bug.', 'Estoy travado con este bug.', 'Soy bloqueado con este bug.'],
        answer: 0,
        explanation: 'Travado é **trabado** (ou bloqueado), com **estar**.',
      },
    ],
  },
}
