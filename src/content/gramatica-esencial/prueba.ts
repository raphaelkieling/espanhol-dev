import type { Quiz } from '../types'

export const pruebaGramatica: Quiz = {
  questions: [
    {
      prompt: '___ mensaje de error no es claro.',
      options: ['La', 'El', 'Lo'],
      answer: 1,
      explanation: 'Palavras em -aje são masculinas: **el** mensaje.',
    },
    {
      prompt: 'Mañana voy ___ oficina.',
      options: ['a la', 'al', 'a el'],
      answer: 0,
      explanation: 'Só a + el contrai. Com la fica **a la**.',
    },
    {
      prompt: '___ bueno es que ya tenemos tests.',
      options: ['El', 'La', 'Lo'],
      answer: 2,
      explanation: 'Adjetivo sozinho falando de uma ideia: **lo** bueno.',
    },
    {
      prompt: '¿De quién es este branch? — Es ___.',
      options: ['mi', 'mío', 'me'],
      answer: 1,
      explanation: 'Depois do verbo, sem substantivo: es **mío**.',
    },
    {
      prompt: '¿El PR de Juan? Ya ___ revisé.',
      options: ['le', 'lo', 'él'],
      answer: 1,
      explanation: 'Objeto direto masculino (o PR): **lo** revisé.',
    },
    {
      prompt: 'Tem um problema com o deploy.',
      options: ['Tiene un problema con el deploy.', 'Está un problema con el deploy.', 'Hay un problema con el deploy.'],
      answer: 2,
      explanation: '"Tem" no sentido de existir é **hay**.',
    },
    {
      prompt: 'El servidor ___ caído desde anoche.',
      options: ['es', 'está', 'hay'],
      answer: 1,
      explanation: 'Estado do momento: **está** caído.',
    },
    {
      prompt: 'Ayer Ana ___ el ticket. (terminar)',
      options: ['terminé', 'termina', 'terminó'],
      answer: 2,
      explanation: 'Ela, no passado: **terminó**.',
    },
    {
      prompt: 'Esta tarde ___ subir el PR.',
      options: ['voy', 'voy a', 'vou'],
      answer: 1,
      explanation: 'Futuro próximo: **voy a** + infinitivo.',
    },
    {
      prompt: 'Isso também não funciona.',
      options: ['Eso también no funciona.', 'Eso tampoco funciona.', 'Eso no funciona tampoco no.'],
      answer: 1,
      explanation: '"Também não" é **tampoco**.',
    },
  ],
}
