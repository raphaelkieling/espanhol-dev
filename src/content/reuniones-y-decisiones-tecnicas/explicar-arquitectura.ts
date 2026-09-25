import type { Section } from '../types'

export const explicarArquitectura: Section = {
  slug: 'explicar-arquitectura-y-trade-offs',
  title: 'Explicar arquitectura y trade-offs',
  summary: 'Como descrever um sistema, comparar opções pelos prós e contras e fechar com uma recomendação.',
  blocks: [
    {
      type: 'text',
      text: 'Para explicar arquitetura, vá do geral ao detalhe: o que o sistema faz, quais são as partes e como elas se comunicam.',
    },

    { type: 'heading', text: 'Descrever as partes' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['**El sistema tiene** tres partes.', 'O sistema tem três partes.'],
        ['El front **se comunica con** la API.', 'O front se comunica com a API.'],
        ['La API **guarda** los datos **en** Postgres.', 'A API guarda os dados no Postgres.'],
        ['El servicio **manda** un evento **a** la cola.', 'O serviço manda um evento para a fila.'],
        ['**Por un lado**… **por otro**…', 'Por um lado… por outro…'],
      ],
    },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['**la cola**', 'a fila (de mensagens)'],
        ['**la capa**', 'a camada'],
        ['**el cuello de botella**', 'o gargalo'],
        ['**el balanceador de carga**', 'o load balancer'],
        ['**escalar**', 'escalar'],
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: '~~La fila~~ → la **cola**. ~~La camada~~ → la **capa**. ~~El gargalo~~ → el **cuello de botella**.',
    },

    { type: 'heading', text: 'Comparar opções' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['**La ventaja es que**…', 'A vantagem é que…'],
        ['**La desventaja es que**…', 'A desvantagem é que…'],
        ['**Es más** simple **que**…', 'É mais simples que…'],
        ['**a cambio de**…', 'em troca de…'],
        ['**Vale la pena.**', 'Vale a pena.'],
      ],
    },
    {
      type: 'examples',
      items: [
        { es: 'Redis **es más rápido que** Postgres para esto, **pero** es otro servicio que mantener.', pt: 'Redis é mais rápido que Postgres para isso, mas é outro serviço para manter.' },
        { es: 'Un monolito es más simple. **La desventaja es que** escala peor.', pt: 'Um monolito é mais simples. A desvantagem é que escala pior.' },
        { es: 'Ganamos velocidad **a cambio de** complejidad.', pt: 'Ganhamos velocidade em troca de complexidade.' },
      ],
    },

    { type: 'heading', text: 'Recomendar' },
    {
      type: 'examples',
      items: [
        { es: '**Yo recomiendo** empezar con el monolito.', pt: 'Eu recomendo começar com o monolito.' },
        { es: '**Por ahora**, lo más simple es usar Postgres.', pt: 'Por enquanto, o mais simples é usar Postgres.' },
        { es: '**Si** el tráfico crece, **vamos a** separar el servicio.', pt: 'Se o tráfego crescer, vamos separar o serviço.' },
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'Feche com uma recomendação clara. Comparar opções sem escolher nenhuma deixa a decisão no ar.',
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'O gargalo é o banco de dados.',
        options: ['El gargalo es la base de datos.', 'El cuello de botella es la base de datos.', 'La botella es la base de datos.'],
        answer: 1,
        explanation: 'Gargalo é **cuello de botella**.',
      },
      {
        prompt: 'La ___ es que el monolito escala peor.',
        options: ['desventaja', 'ventaja', 'capa'],
        answer: 0,
        explanation: 'Escalar pior é um ponto contra: **desventaja**.',
      },
      {
        prompt: 'Redis es más rápido ___ Postgres para esto.',
        options: ['como', 'de', 'que'],
        answer: 2,
        explanation: 'Comparação: más rápido **que**.',
      },
      {
        prompt: 'Como se diz "fila de mensagens"?',
        options: ['la fila de mensajes', 'la cola de mensajes', 'la línea de mensajes'],
        answer: 1,
        explanation: 'Fila é **cola**.',
      },
      {
        prompt: 'Qual frase fecha a explicação com uma recomendação clara?',
        options: ['Yo recomiendo empezar con el monolito.', 'Hay varias opciones.', 'Depende.'],
        answer: 0,
        explanation: '**Yo recomiendo** + a opção escolhida.',
      },
    ],
  },
}
