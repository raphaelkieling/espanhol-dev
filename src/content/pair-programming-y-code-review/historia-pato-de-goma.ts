import type { Section } from '../types'

export const historiaPatoDeGoma: Section = {
  slug: 'el-pato-de-goma',
  title: 'Lectura: el pato de goma',
  summary: 'Uma sessão de pair em que ninguém dá a resposta, e mesmo assim o bug aparece. Passe o mouse (ou toque) nos trechos marcados para ver a regra.',
  blocks: [
    {
      type: 'reading',
      title: 'El pato de goma',
      audio: 'audio/el-pato-de-goma.wav',
      paragraphs: [
        'Lucas lleva dos horas con un test que falla y no sabe por qué. Le escribe a Sofía, una desarrolladora de Medellín: «Hola, Sofía. [[¿Tienes un minuto?|Slack: tem um minuto?]] Un test del checkout falla solo a veces. [[Te dejo el link|Slack: te mando o link]]».',
        'Cinco minutos después, están en una llamada. «[[¿Quién comparte pantalla?|pantalla = tela]]», pregunta Sofía. «Comparto yo», dice Lucas. Él [[lleva el teclado|quem digita, o driver]] y ella guía. «¿Ves mi pantalla?». «Sí, [[dale|vai, pode começar]]».',
        'Sofía no le da la respuesta. Habla rápido y le propone algo, pero Lucas no entiende todo. «Perdón, [[¿me lo repites?|pedir para repetir]]». «Claro. [[¿Qué tal si|sugerir sem impor]] lees la función en voz alta, línea por línea?».',
        'Lucas empieza a leer: «Si la fecha de hoy es igual a la fecha del pedido, devuelve verdadero…». Y para. «[[Espera|pedido a "tú": espera]]. El servidor usa UTC. Aquí son las siete de la tarde, pero en UTC ya es mañana». O sea, el test solo falla de noche.',
        'Lucas arregla el bug en una línea y sube el PR. Sofía deja dos comentarios: «[[nit:|detalhe que não bloqueia]] el nombre de la variable no es claro» y «[[Muy bien resuelto|elogio no review]]». Lucas contesta: «[[Tienes razón, ya lo cambié|responder ao review]]». Aprobado.',
        'Al final, Lucas le dice: «Gracias, encontraste el bug». «No, lo encontraste tú. Yo solo hice de pato de goma». «[[¿Qué quieres decir con|pedir explicação]] "pato de goma"?». Sofía le explica que es una técnica famosa: le explicas tu código a un pato de goma, línea por línea, y muchas veces encuentras el error tú solo.',
      ],
    },

    { type: 'heading', text: 'Palavras do texto' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['a veces', 'às vezes'],
        ['el pedido', 'o pedido (de compra)'],
        ['y para', 'e para (verbo parar)'],
        ['hacer de', 'fazer o papel de'],
        ['el pato de goma', 'o pato de borracha'],
        ['tú solo', 'sozinho'],
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: '¿Por qué Lucas le escribe a Sofía?',
        options: ['Porque un test falla y no sabe por qué', 'Porque quiere hacer una pausa', 'Porque Sofía le pidió un review'],
        answer: 0,
        explanation: 'Um teste falha **a veces** e ele está há duas horas nisso.',
      },
      {
        prompt: '¿Quién lleva el teclado?',
        options: ['Sofía', 'Lucas', 'Los dos'],
        answer: 1,
        explanation: 'Lucas compartilha a tela e **lleva el teclado**. Sofía guia.',
      },
      {
        prompt: '¿Por qué falla el test?',
        options: ['Por un error de sintaxis', 'Porque falta un punto y coma', 'Porque el servidor usa UTC y de noche ya es otro día'],
        answer: 2,
        explanation: 'Às sete da noite no México, em **UTC** já é o dia seguinte.',
      },
      {
        prompt: '"nit: el nombre de la variable no es claro." Esse comentário…',
        options: ['bloqueia o merge', 'é um detalhe que não bloqueia', 'é um elogio'],
        answer: 1,
        explanation: '**nit:** marca um detalhe opcional.',
      },
      {
        prompt: '¿Qué es la técnica del pato de goma?',
        options: [
          'Explicar el código en voz alta, línea por línea, para encontrar el error',
          'Pedirle a otra persona que arregle el bug',
          'Correr los tests de noche',
        ],
        answer: 0,
        explanation: 'Explicando o código em voz alta, muitas vezes você mesmo encontra o erro.',
      },
    ],
  },
}
