import type { Section } from '../types'

export const serEstarHayTener: Section = {
  slug: 'ser-estar-hay-tener',
  title: 'Ser, estar, hay y tener',
  summary: 'Os quatro verbos que sustentam a maioria das frases, e o "tem" que em espanhol é hay.',
  blocks: [
    {
      type: 'card',
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
      ],
    },

    {
      type: 'card',
      title: 'ser × estar',
      blocks: [
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
      ],
    },

    {
      type: 'card',
      title: 'hay: o "tem" de existir',
      blocks: [
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
      ],
    },

    {
      type: 'card',
      title: 'tener y tener que',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '**Tengo** una duda sobre el ticket.', pt: 'Tenho uma dúvida sobre o ticket.' },
            { es: '**Tengo que** salir a las cinco.', pt: 'Tenho que sair às cinco.' },
            { es: '**Tenemos que** hablar con producto.', pt: 'Temos que falar com produto.' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Practica',
      blocks: [
        {
          type: 'text',
          text: 'Escreva o verbo que falta: **ser**, **estar**, **hay** ou **tener**, já conjugado.',
        },
        {
          type: 'fill',
          items: [
            { es: 'Yo ___ desarrollador backend.', answer: 'soy', pt: 'Eu sou desenvolvedor backend.' },
            { es: 'El servidor ___ caído desde anoche.', answer: 'está', pt: 'O servidor está fora do ar desde ontem à noite.' },
            { es: '___ un bug en el formulario de login.', answer: 'Hay', pt: 'Tem um bug no formulário de login.' },
            { es: 'Mañana yo ___ que presentar la demo.', answer: 'tengo', pt: 'Amanhã eu tenho que apresentar a demo.' },
            { es: '¿Dónde ___ los logs del deploy?', answer: 'están', pt: 'Onde estão os logs do deploy?' },
            { es: 'La daily ___ a las diez.', answer: 'es', pt: 'A daily é às dez.' },
            { es: '¿___ alguna pregunta?', answer: 'Hay', pt: 'Tem alguma pergunta?' },
            { es: 'Tú ___ una duda sobre el ticket, ¿no?', answer: 'tienes', pt: 'Você tem uma dúvida sobre o ticket, né?' },
            { es: 'El PR ya ___ listo para review.', answer: 'está', pt: 'O PR já está pronto para review.' },
            { es: 'Ellos ___ del equipo de pagos.', answer: 'son', pt: 'Eles são do time de pagamentos.' },
          ],
        },
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
