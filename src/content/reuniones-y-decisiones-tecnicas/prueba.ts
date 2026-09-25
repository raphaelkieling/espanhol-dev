import type { Quiz } from '../types'

export const pruebaReuniones: Quiz = {
  questions: [
    {
      prompt: 'O gargalo é a API.',
      options: ['El gargalo es la API.', 'La botella es la API.', 'El cuello de botella es la API.'],
      answer: 2,
      explanation: 'Gargalo é **cuello de botella**.',
    },
    {
      prompt: 'La ___ de Redis es que es muy rápido.',
      options: ['desventaja', 'ventaja', 'cola'],
      answer: 1,
      explanation: 'Ser rápido é um ponto a favor: **ventaja**.',
    },
    {
      prompt: 'A camada de dados.',
      options: ['la capa de datos', 'la camada de datos', 'la cama de datos'],
      answer: 0,
      explanation: 'Camada é **capa**.',
    },
    {
      prompt: 'Acho que devemos esperar.',
      options: ['Creo que debemos esperar.', 'Acho que debemos esperar.', 'Creo de que debemos esperar.'],
      answer: 0,
      explanation: 'Achar (opinião) é **creo que**.',
    },
    {
      prompt: 'Concordo em parte.',
      options: ['Soy de acuerdo en parte.', 'Estoy de acuerdo en parte.', 'Estoy acuerdo en parte.'],
      answer: 1,
      explanation: '**Estoy de acuerdo** en parte.',
    },
    {
      prompt: 'Qual frase discorda com educação?',
      options: [
        'Estás equivocado.',
        'Eso no tiene sentido.',
        'Lo veo distinto: el problema no son los servidores, sino las queries.',
      ],
      answer: 2,
      explanation: '**Lo veo distinto** + o motivo.',
    },
    {
      prompt: 'Entonces, ¿___ en usar Postgres?',
      options: ['quedamos', 'estamos', 'tenemos'],
      answer: 0,
      explanation: '¿**Quedamos en**…? = combinamos…?',
    },
    {
      prompt: 'Vou mostrar para vocês a nova tela.',
      options: [
        'Les voy a mostrar la nueva tela.',
        'Les voy a mostrar la nueva pantalla.',
        'Los voy a mostrar la nueva pantalla.',
      ],
      answer: 1,
      explanation: '**Les** voy a mostrar, e tela é **pantalla**.',
    },
    {
      prompt: 'Numa demo, "como ven" significa…',
      options: ['quando vocês vierem', 'venham ver', 'como vocês podem ver'],
      answer: 2,
      explanation: '**Como ven** = como vocês podem ver.',
    },
    {
      prompt: 'Não sei, mas vou descobrir.',
      options: ['No lo sé, pero lo averiguo.', 'No lo sé, pero lo apresento.', 'No sé, pero lo busco ayer.'],
      answer: 0,
      explanation: 'Descobrir (uma informação) é **averiguar**.',
    },
  ],
}
