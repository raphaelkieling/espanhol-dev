import type { Section } from '../types'

export const reportarBug: Section = {
  slug: 'reportar-un-bug-o-un-incidente',
  title: 'Reportar un bug o un incidente',
  summary: 'Como escrever um ticket de bug que qualquer pessoa reproduz e avisar um incidente com clareza.',
  blocks: [
    {
      type: 'text',
      text: 'Um bom reporte permite que qualquer pessoa reproduza o problema sem precisar te perguntar nada.',
    },

    { type: 'heading', text: 'O ticket de bug' },
    {
      type: 'table',
      columns: ['Parte', 'Exemplo'],
      rows: [
        ['**Título**', 'El checkout falla con tarjetas internacionales'],
        ['**Pasos para reproducir**', '1. Entrar al checkout. 2. Pagar con una tarjeta de Brasil.'],
        ['**Resultado esperado**', 'El pago se aprueba.'],
        ['**Resultado actual**', 'Aparece un error 500.'],
        ['**Entorno**', 'Producción, Chrome, desde ayer.'],
      ],
    },

    { type: 'heading', text: 'Verbos de bug' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['**falla**', 'falha'],
        ['**está roto**', 'está quebrado'],
        ['**está caído**', 'está fora do ar'],
        ['**no carga**', 'não carrega'],
        ['**da** / **devuelve** un error', 'dá / retorna um erro'],
        ['**se cuelga**', 'trava'],
        ['**debería** + infinitivo', 'deveria'],
      ],
    },
    {
      type: 'examples',
      items: [
        { es: 'El botón **debería** guardar los cambios, pero no hace nada.', pt: 'O botão deveria salvar as alterações, mas não faz nada.' },
        { es: 'La página **no carga** en Safari.', pt: 'A página não carrega no Safari.' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: '~~El sistema está fuera del aire~~ → El sistema **está caído**. E concorda com o gênero: la API está **caída**.',
    },

    { type: 'heading', text: 'Incidentes' },
    {
      type: 'text',
      text: 'Num incidente, a mensagem diz o que está acontecendo, qual é o impacto e qual é o próximo passo. Frases curtas.',
    },
    {
      type: 'examples',
      items: [
        { es: 'El login **está caído** desde las 10:15 y **afecta a** todos los usuarios.', pt: 'O login está fora do ar desde 10:15 e afeta todos os usuários.' },
        { es: '**Estamos investigando.** Les aviso en 15 minutos.', pt: 'Estamos investigando. Aviso vocês em 15 minutos.' },
        { es: '**Hicimos rollback** y el servicio **volvió a funcionar**.', pt: 'Fizemos rollback e o serviço voltou a funcionar.' },
        { es: '**Ya está resuelto.** La causa fue un certificado **vencido**.', pt: 'Já está resolvido. A causa foi um certificado expirado.' },
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: '**Volver a** + infinitivo = fazer de novo: el error **volvió a** aparecer.',
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'O sistema está fora do ar.',
        options: ['El sistema está fuera del aire.', 'El sistema está caído.', 'El sistema es caído.'],
        answer: 1,
        explanation: 'Fora do ar é **está caído**.',
      },
      {
        prompt: 'El botón ___ guardar los cambios, pero no hace nada.',
        options: ['debería', 'deberías', 'deberíamos'],
        answer: 0,
        explanation: 'Deveria (ele) é **debería**.',
      },
      {
        prompt: 'Qual parte do ticket diz o que aconteceu de fato?',
        options: ['Resultado esperado', 'Pasos para reproducir', 'Resultado actual'],
        answer: 2,
        explanation: 'O que aconteceu é o **resultado actual**. O esperado é o que deveria acontecer.',
      },
      {
        prompt: 'O erro voltou a aparecer.',
        options: ['El error volvió aparecer.', 'El error volvió a aparecer.', 'El error volvió de aparecer.'],
        answer: 1,
        explanation: '**Volver a** + infinitivo.',
      },
      {
        prompt: 'O que não pode faltar numa mensagem de incidente?',
        options: ['O impacto e o próximo passo', 'O nome de quem causou o problema', 'Um pedido de desculpas longo'],
        answer: 0,
        explanation: 'O que acontece, **o impacto** e **o próximo passo**.',
      },
    ],
  },
}
