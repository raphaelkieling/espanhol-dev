import type { Quiz } from '../types'

export const pruebaConectores: Quiz = {
  questions: [
    {
      prompt: 'O deploy ainda não terminou.',
      options: ['El deploy todavía no terminó.', 'El deploy ya no terminó.', 'El deploy sino no terminó.'],
      answer: 0,
      explanation: '"Ainda não" é **todavía no**.',
    },
    {
      prompt: 'No es un problema de memoria, ___ de CPU.',
      options: ['pero', 'sino', 'aunque'],
      answer: 1,
      explanation: 'Negação seguida de correção: **sino**.',
    },
    {
      prompt: 'La solución es buena, ___ tarda mucho en implementarse.',
      options: ['pero', 'sino', 'todavía'],
      answer: 0,
      explanation: 'Contraste sem negação antes: **pero**. Todavía significa ainda.',
    },
    {
      prompt: '___ del frontend, también hago infraestructura.',
      options: ['Además', 'Además de', 'Además del'],
      answer: 2,
      explanation: 'Além de + el = **además del**.',
    },
    {
      prompt: 'El servidor se quedó sin disco, ___ borré los logs viejos.',
      options: ['así que', 'sin embargo', 'sino'],
      answer: 0,
      explanation: 'Consequência: **así que**.',
    },
    {
      prompt: 'Num documento: "El servicio es estable. ___, no escala bien con picos de tráfico."',
      options: ['O sea', 'Sin embargo', 'Entonces'],
      answer: 1,
      explanation: 'Contraste por escrito: **sin embargo**.',
    },
    {
      prompt: 'Es una API pública, ___, cualquiera puede llamarla.',
      options: ['es decir', 'sino', 'aunque'],
      answer: 0,
      explanation: 'Explicando de outro jeito: **es decir** (ou **o sea**).',
    },
    {
      prompt: '___ mergear, corre los tests.',
      options: ['Antes de', 'Antes que', 'Antes'],
      answer: 0,
      explanation: '**Antes de** + infinitivo.',
    },
    {
      prompt: 'Hay que revisar el diseño ___ implementarlo.',
      options: ['y', 'e', 'u'],
      answer: 1,
      explanation: 'Antes de som de i, **y** vira **e**.',
    },
    {
      prompt: 'Queremos confirmar: "É mais simples com um webhook, né?"',
      options: [
        'Es más simple con un webhook, ¿né?',
        'Es más simple con un webhook, ¿no?',
        'Es más simple con un webhook, ¿tipo?',
      ],
      answer: 1,
      explanation: 'O "né?" é **¿no?** ou **¿verdad?**.',
    },
  ],
}
