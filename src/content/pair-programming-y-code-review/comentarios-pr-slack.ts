import type { Section } from '../types'

export const comentariosPrSlack: Section = {
  slug: 'comentarios-de-pr-y-mensajes-de-slack',
  title: 'Comentarios de PR y mensajes de Slack',
  summary: 'Comentários de review claros e gentis, e mensagens de Slack que se resolvem na primeira troca.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'Por escrito não há tom de voz, e um comentário curto demais pode soar seco. Algumas fórmulas resolvem isso.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Comentários de PR',
      blocks: [
        {
          type: 'table',
          columns: ['Tipo', 'Exemplo'],
          rows: [
            ['Sugestão', '**¿Qué tal si** extraemos esto a una función?'],
            ['Pergunta', '**¿Por qué** usaste un setTimeout aquí?'],
            ['Detalhe', '**nit:** falta un espacio.'],
            ['Bloqueante', '**Esto rompe** el login si el usuario es nulo.'],
            ['Elogio', '**Muy bien resuelto.** / **Me gusta** este enfoque.'],
            ['Aprovar', '**LGTM.** / **Aprobado.**'],
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Deixe claro se o comentário bloqueia o merge. **nit:** e **opcional:** avisam que não bloqueiam.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Responder a um review',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '**Tienes razón**, ya lo cambié.', pt: 'Você tem razão, já mudei.' },
            { es: '**Buena observación.** Lo arreglé en el último commit.', pt: 'Boa observação. Arrumei no último commit.' },
            { es: '**Lo dejé así porque** la API devuelve null a veces.', pt: 'Deixei assim porque a API retorna null às vezes.' },
            { es: '¿**Lo vemos en una llamada**? Es más fácil.', pt: 'Vemos isso numa call? É mais fácil.' },
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Arrumar (consertar) é **arreglar**: ~~ya lo arrumé~~ → ya lo **arreglé**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Slack',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**¿Tienes un minuto?**', 'Tem um minuto?'],
            ['**¿Le puedes echar un vistazo a**…?', 'Pode dar uma olhada em…?'],
            ['**Te dejo el link.**', 'Te mando o link.'],
            ['**Cuando puedas.**', 'Quando puder.'],
            ['**Quedo atento.** / **Quedo atenta.**', 'Fico no aguardo.'],
          ],
        },
        {
          type: 'examples',
          items: [
            {
              es: 'Hola, Sofía. **¿Le puedes echar un vistazo a** mi PR? Es un cambio pequeño en el login. **Te dejo el link.** **Cuando puedas**, gracias.',
              pt: 'Oi, Sofía. Pode dar uma olhada no meu PR? É uma mudança pequena no login. Te mando o link. Quando puder, obrigado.',
            },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Não mande só "Hola" e fique esperando. Escreva a pergunta completa já na primeira mensagem.',
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Qual comentário é um detalhe que não bloqueia o merge?',
        options: ['nit: falta un espacio.', 'Esto rompe el login.', 'Esto está mal.'],
        answer: 0,
        explanation: '**nit:** avisa que é só um detalhe.',
      },
      {
        prompt: 'Pode dar uma olhada no meu PR?',
        options: ['¿Puedes dar una olhada a mi PR?', '¿Le puedes echar un vistazo a mi PR?', '¿Le puedes echar una vista mi PR?'],
        answer: 1,
        explanation: 'Dar uma olhada = **echar un vistazo**.',
      },
      {
        prompt: 'Alguém apontou um erro no seu PR e você já corrigiu. O que responde?',
        options: ['Tienes razón, ya lo cambio ayer.', 'Tienes razón, ya lo cambiado.', 'Tienes razón, ya lo cambié.'],
        answer: 2,
        explanation: 'Já fez: pretérito, **ya lo cambié**.',
      },
      {
        prompt: 'Já consertei.',
        options: ['Ya lo arrumé.', 'Ya lo arreglé.', 'Ya lo arreglado.'],
        answer: 1,
        explanation: 'Consertar é **arreglar**: ya lo **arreglé**.',
      },
      {
        prompt: 'Qual é a melhor primeira mensagem no Slack?',
        options: ['Hola.', '¿Estás?', 'Hola, ¿le puedes echar un vistazo a mi PR del login? Te dejo el link.'],
        answer: 2,
        explanation: 'A pergunta completa já na primeira mensagem.',
      },
    ],
  },
}
