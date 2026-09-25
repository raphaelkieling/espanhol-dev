import type { Section } from '../types'

export const serEstarHayTener: Section = {
  slug: 'ser-estar-hay-tener',
  title: 'Ser, estar, hay y tener',
  summary: 'Os quatro verbos que sustentam a maioria das frases, e o "tem" que em espanhol é hay.',
  blocks: [
    {
      type: 'table',
      columns: ['', 'ser', 'estar', 'tener'],
      rows: [
        ['yo', 'soy', 'estoy', 'tengo'],
        ['tú', 'eres', 'estás', 'tienes'],
        ['él / ella / usted', 'es', 'está', 'tiene'],
        ['nosotros', 'somos', 'estamos', 'tenemos'],
        ['ellos / ustedes', 'son', 'están', 'tienen'],
      ],
      caption: 'Presente. Hay não muda: hay un bug, hay tres bugs.',
    },

    { type: 'heading', text: 'ser × estar' },
    {
      type: 'text',
      text: 'A divisão é quase a mesma do português: **ser** diz o que algo é, **estar** diz como ou onde algo está agora.',
    },
    {
      type: 'table',
      columns: ['ser', 'estar'],
      rows: [
        ['**Soy** desarrollador backend.', '**Estoy** en una reunión.'],
        ['**Es** un problema de caché.', 'El servidor **está** caído.'],
        ['**Son** las diez.', 'El PR **está** listo.'],
        ['La daily **es** a las diez.', '**Estoy** revisando los logs.'],
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      title: 'listo',
      text: '**Estar** listo = estar pronto. **Ser** listo = ser esperto. "El deploy **está** listo."',
    },

    { type: 'heading', text: 'hay: o "tem" de existir' },
    {
      type: 'text',
      text: 'Em português dizemos "tem um bug no login". Em espanhol, quando o sentido é **existir**, usa-se **hay**. **Tener** fica só para posse e obrigação.',
    },
    {
      type: 'examples',
      items: [
        { es: '**Hay** un bug en el login.', pt: 'Tem um bug no login.' },
        { es: '¿**Hay** alguna pregunta?', pt: 'Tem alguma pergunta?' },
        { es: 'No **hay** tests para este módulo.', pt: 'Não tem testes para este módulo.' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: '~~Tiene un bug en el login~~ → **Hay** un bug en el login.',
    },
    {
      type: 'note',
      tone: 'tip',
      title: 'hay × está',
      text: 'Algo novo, com un/una ou número: **hay** un error. Algo já conhecido, com el/la: **el** error **está** en el archivo de config.',
    },

    { type: 'heading', text: 'tener y tener que' },
    {
      type: 'examples',
      items: [
        { es: '**Tengo** una duda sobre el ticket.', pt: 'Tenho uma dúvida sobre o ticket.' },
        { es: '**Tengo que** salir a las cinco.', pt: 'Tenho que sair às cinco.' },
        { es: '**Tenemos que** hablar con producto.', pt: 'Temos que falar com produto.' },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'La API ___ caída desde las nueve.',
        options: ['es', 'está', 'hay'],
        answer: 1,
        explanation: 'Estado do momento: **está** caída.',
      },
      {
        prompt: '___ desarrolladora frontend en el equipo de pagos.',
        options: ['Soy', 'Estoy', 'Tengo'],
        answer: 0,
        explanation: 'Profissão é identidade: **soy**.',
      },
      {
        prompt: 'Tem um erro no pipeline.',
        options: ['Tiene un error en el pipeline.', 'Está un error en el pipeline.', 'Hay un error en el pipeline.'],
        answer: 2,
        explanation: '"Tem" no sentido de existir é **hay**.',
      },
      {
        prompt: 'Mañana ___ que presentar la demo.',
        options: ['hay', 'tengo', 'estoy'],
        answer: 1,
        explanation: 'Obrigação pessoal: **tengo que**.',
      },
      {
        prompt: 'O PR está pronto para review.',
        options: ['El PR es listo para review.', 'El PR está listo para review.', 'El PR hay listo para review.'],
        answer: 1,
        explanation: '**Estar** listo = estar pronto. Ser listo é ser esperto.',
      },
    ],
  },
}
