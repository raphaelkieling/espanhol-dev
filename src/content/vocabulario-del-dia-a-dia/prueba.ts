import type { Quiz } from '../types'

export const pruebaVocabulario: Quiz = {
  questions: [
    {
      prompt: 'Estou na empresa há três anos.',
      options: ['Llevo tres años en la empresa.', 'Tengo hace tres años en la empresa.', 'Soy tres años en la empresa.'],
      answer: 0,
      explanation: 'Há quanto tempo: **llevo** + tempo.',
    },
    {
      prompt: 'Como se diz "desenvolvedor" em espanhol?',
      options: ['desenvolvedor', 'desarrollador', 'desenrollador'],
      answer: 1,
      explanation: 'Desenvolver é **desarrollar**, então desenvolvedor é **desarrollador**.',
    },
    {
      prompt: 'Desliguei o servidor de staging.',
      options: ['Apagué el servidor de staging.', 'Borré el servidor de staging.', 'Prendí el servidor de staging.'],
      answer: 0,
      explanation: 'Desligar é **apagar**. Borrar é deletar e prender é ligar.',
    },
    {
      prompt: '¿Está ___ el deploy? — Sí, ya terminó.',
      options: ['largo', 'pronto', 'listo'],
      answer: 2,
      explanation: 'O "pronto" do português é **listo**.',
    },
    {
      prompt: 'Você lembra da senha?',
      options: ['¿Acuerdas la contraseña?', '¿Te acuerdas de la contraseña?', '¿Te despiertas de la contraseña?'],
      answer: 1,
      explanation: 'Lembrar é **acordarse de**.',
    },
    {
      prompt: 'Como se diz [ ] em espanhol?',
      options: ['paréntesis', 'llaves', 'corchetes'],
      answer: 2,
      explanation: '[ ] são **corchetes**. { } são llaves.',
    },
    {
      prompt: 'Como você dita "MAX_RETRIES"?',
      options: [
        'max, guion, retries, todo en minúsculas',
        'max, guion bajo, retries, todo en mayúsculas',
        'max, barra, retries, todo en mayúsculas',
      ],
      answer: 1,
      explanation: '_ é **guion bajo**, e o nome está **todo en mayúsculas**.',
    },
    {
      prompt: 'Como se lê "x >= 10"?',
      options: ['x mayor o igual que diez', 'x menor que diez', 'x distinto de diez'],
      answer: 0,
      explanation: '>= se lê **mayor o igual que**.',
    },
    {
      prompt: 'Vou rodar os testes antes do merge.',
      options: [
        'Voy a rodar los tests antes del merge.',
        'Voy a correr los tests antes del merge.',
        'Voy a borrar los tests antes del merge.',
      ],
      answer: 1,
      explanation: 'Rodar é **correr** (ou ejecutar).',
    },
    {
      prompt: 'La función ___ dos parámetros y devuelve un booleano.',
      options: ['recibe', 'recorre', 'apaga'],
      answer: 0,
      explanation: 'Receber um parâmetro é **recibir**.',
    },
  ],
}
