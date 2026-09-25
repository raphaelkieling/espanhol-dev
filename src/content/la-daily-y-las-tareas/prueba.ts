import type { Quiz } from '../types'

export const pruebaDaily: Quiz = {
  questions: [
    {
      prompt: 'Ontem revisei dois PRs.',
      options: ['Ayer revisé dos PRs.', 'Ayer voy a revisar dos PRs.', 'Ayer reviso dos PRs.'],
      answer: 0,
      explanation: 'O que você fez ontem vai no pretérito: **revisé**.',
    },
    {
      prompt: 'Estou bloqueado pelo deploy do outro time.',
      options: [
        'Estoy bloqueado para el deploy del otro equipo.',
        'Estoy bloqueado por el deploy del otro equipo.',
        'Soy bloqueado por el deploy del otro equipo.',
      ],
      answer: 1,
      explanation: '**Estoy bloqueado por**…',
    },
    {
      prompt: 'Qual é o prazo?',
      options: ['¿Cuál es el prazo?', '¿Cuál es el alcance?', '¿Cuál es el plazo?'],
      answer: 2,
      explanation: 'Prazo é **plazo**. Alcance é escopo.',
    },
    {
      prompt: 'Isso pode esperar o próximo sprint.',
      options: [
        'Eso puede esperar al próximo sprint.',
        'Eso puede esperar para próximo sprint.',
        'Eso puede esperar a el próximo sprint.',
      ],
      answer: 0,
      explanation: '**Puede esperar al** próximo sprint (a + el = al).',
    },
    {
      prompt: 'Desculpa a demora.',
      options: ['Desculpa la demora.', 'Perdón de la demora.', 'Perdón por la demora.'],
      answer: 2,
      explanation: '**Perdón por** la demora (ou **disculpa** la demora).',
    },
    {
      prompt: '¿Qué les parece ___ dejamos el PDF para el lunes?',
      options: ['que', 'si', 'sino'],
      answer: 1,
      explanation: 'Para propor: ¿qué les parece **si**…?',
    },
    {
      prompt: 'Vai ficar pronto na quinta.',
      options: ['Va a estar pronto el jueves.', 'Va a estar listo el jueves.', 'Va estar listo el jueves.'],
      answer: 1,
      explanation: 'Pronto é **listo**, e ir **a** + infinitivo.',
    },
    {
      prompt: 'A API está fora do ar.',
      options: ['La API está fuera del aire.', 'La API está caído.', 'La API está caída.'],
      answer: 2,
      explanation: 'Fora do ar é **caído**, e concorda com la API: **caída**.',
    },
    {
      prompt: 'Qual parte do ticket descreve o que deveria acontecer?',
      options: ['Resultado actual', 'Resultado esperado', 'Pasos para reproducir'],
      answer: 1,
      explanation: 'O que deveria acontecer é o **resultado esperado**.',
    },
    {
      prompt: 'El test ___ a fallar después del deploy.',
      options: ['volvió', 'vuelto', 'volver'],
      answer: 0,
      explanation: '**Volver a** + infinitivo, no pretérito: **volvió a** fallar.',
    },
  ],
}
