import type { Quiz } from '../types'

export const pruebaPair: Quiz = {
  questions: [
    {
      prompt: '¿Y si ___ un Set en vez de un array?',
      options: ['usar', 'usamos', 'usaremos'],
      answer: 1,
      explanation: 'Depois de **si**, presente: ¿y si **usamos**?',
    },
    {
      prompt: 'Qual resposta recusa uma sugestão com respeito?',
      options: ['Lo pensé, pero así es más fácil de leer.', 'No.', 'Eso no sirve.'],
      answer: 0,
      explanation: '**Lo pensé, pero** + o motivo.',
    },
    {
      prompt: 'Pode falar mais devagar?',
      options: ['¿Puedes hablar más despacio?', '¿Puedes hablar más devagar?', '¿Puedes hablar más bajo?'],
      answer: 0,
      explanation: 'Devagar é **despacio**.',
    },
    {
      prompt: '¿___ quieres decir con "rollback parcial"?',
      options: ['Cómo', 'Qué', 'Cuál'],
      answer: 1,
      explanation: '¿**Qué quieres decir con**…? = o que você quer dizer com…?',
    },
    {
      prompt: 'Pode compartilhar a tela?',
      options: ['¿Puedes compartir la tela?', '¿Puedes compartir la pantalla?', '¿Puedes comparar la pantalla?'],
      answer: 1,
      explanation: 'Tela é **pantalla**.',
    },
    {
      prompt: 'O navigator quer que o driver desça no arquivo. O que diz?',
      options: ['Vuelvo en cinco.', 'Sube un poco.', 'Baja un poco.'],
      answer: 2,
      explanation: 'Descer é **bajar**: **baja** un poco.',
    },
    {
      prompt: 'Me passa o teclado?',
      options: ['¿Me pasas el teclado?', '¿Te paso el teclado?', '¿Me pesas el teclado?'],
      answer: 0,
      explanation: '**¿Me pasas** el teclado?',
    },
    {
      prompt: 'Qual comentário de PR deixa claro que é opcional?',
      options: ['Esto rompe el login.', 'nit: podrías usar const aquí.', '¿Por qué hiciste esto?'],
      answer: 1,
      explanation: '**nit:** marca um detalhe que não bloqueia.',
    },
    {
      prompt: 'Pode dar uma olhada no meu PR?',
      options: ['¿Puedes dar una olhada a mi PR?', '¿Le puedes echar un visto a mi PR?', '¿Le puedes echar un vistazo a mi PR?'],
      answer: 2,
      explanation: 'Dar uma olhada = **echar un vistazo**.',
    },
    {
      prompt: 'Tienes razón, ya lo ___.',
      options: ['cambié', 'cambio ayer', 'cambiado'],
      answer: 0,
      explanation: 'Já fez: pretérito, **cambié**.',
    },
  ],
}
