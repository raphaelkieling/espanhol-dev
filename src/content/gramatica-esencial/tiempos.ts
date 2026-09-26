import type { Section } from '../types'

export const tiempos: Section = {
  slug: 'tiempos',
  title: 'Presente, pretérito e ir a + infinitivo',
  summary: 'Os três tempos de uma daily: o que você fez, o que faz e o que vai fazer.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'Com esses três tempos você já consegue contar o que fez, o que está fazendo e o que vai fazer. As terminações são bem parecidas com as do português.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Presente',
      blocks: [
        {
          type: 'table',
          columns: ['', 'arreglar', 'aprender', 'escribir'],
          rows: [
            ['yo', 'arregl**o**', 'aprend**o**', 'escrib**o**'],
            ['tú', 'arregl**as**', 'aprend**es**', 'escrib**es**'],
            ['él / ella', 'arregl**a**', 'aprend**e**', 'escrib**e**'],
            ['nosotros', 'arregl**amos**', 'aprend**emos**', 'escrib**imos**'],
            ['ellos', 'arregl**an**', 'aprend**en**', 'escrib**en**'],
          ],
        },
        {
          type: 'text',
          text: 'Alguns verbos muito usados mudam na primeira pessoa ou na raiz:',
        },
        {
          type: 'table',
          columns: ['Verbo', 'yo', 'tú / él'],
          rows: [
            ['hacer', '**hago**', 'haces, hace'],
            ['poder', '**puedo**', 'puedes, puede'],
            ['querer', '**quiero**', 'quieres, quiere'],
            ['probar', '**pruebo**', 'pruebas, prueba'],
            ['ir', '**voy**', 'vas, va'],
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Pretérito: o que você fez',
      blocks: [
        {
          type: 'table',
          columns: ['', '-ar (terminar)', '-er / -ir (subir)'],
          rows: [
            ['yo', 'termin**é**', 'sub**í**'],
            ['tú', 'termin**aste**', 'sub**iste**'],
            ['él / ella', 'termin**ó**', 'sub**ió**'],
            ['nosotros', 'termin**amos**', 'sub**imos**'],
            ['ellos', 'termin**aron**', 'sub**ieron**'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          title: 'O acento muda tudo',
          text: '**arreglo** = eu arrumo. **arregló** = ele arrumou.',
        },
        {
          type: 'table',
          columns: ['Irregulares comuns', 'yo', 'él / ella'],
          rows: [
            ['hacer', '**hice**', 'hizo'],
            ['tener', '**tuve**', 'tuvo'],
            ['estar', '**estuve**', 'estuvo'],
            ['poder', '**pude**', 'pudo'],
            ['ir / ser', '**fui**', 'fue'],
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          title: 'Na Espanha',
          text: 'Para coisas de hoje, espanhóis costumam usar **he** + particípio: "Hoy **he terminado** el ticket". Na América Latina, o normal é "Hoy **terminé** el ticket". Os dois estão certos.',
        },
      ],
    },

    {
      type: 'card',
      title: 'ir a + infinitivo: o que você vai fazer',
      blocks: [
        {
          type: 'text',
          text: 'Igual ao "vou fazer" do português, mas com um **a** no meio: **voy a**, **vas a**, **va a**, **vamos a**, **van a**.',
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~Voy revisar el PR~~ → Voy **a** revisar el PR.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Tudo junto numa daily',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: 'Ayer **terminé** el endpoint de pagos.', pt: 'Ontem terminei o endpoint de pagamentos.' },
            { es: 'Hoy **estoy** con los tests y **voy a subir** el PR por la tarde.', pt: 'Hoje estou com os testes e vou subir o PR à tarde.' },
            { es: 'No **tengo** bloqueos.', pt: 'Não tenho bloqueios.' },
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Ayer ___ el bug del login. (yo, arreglar)',
        options: ['arreglo', 'arreglé', 'arregló'],
        answer: 1,
        explanation: 'Pretérito, primeira pessoa: **arreglé**.',
      },
      {
        prompt: 'Mañana ___ los tests de integración.',
        options: ['voy escribir', 'voy a escribir', 'vou a escribir'],
        answer: 1,
        explanation: 'Futuro próximo: **voy a** + infinitivo.',
      },
      {
        prompt: 'La semana pasada ___ un curso de Kubernetes. (yo, hacer)',
        options: ['hice', 'hacé', 'hizo'],
        answer: 0,
        explanation: 'Hacer é irregular: yo **hice**, él hizo.',
      },
      {
        prompt: '¿Quién subió el cambio? — Lo ___ Marta.',
        options: ['subí', 'subió', 'sube'],
        answer: 1,
        explanation: 'Ela (Marta), no passado: **subió**.',
      },
      {
        prompt: '¿___ ayudarte con eso? (yo, poder)',
        options: ['Podo', 'Pudo', 'Puedo'],
        answer: 2,
        explanation: 'Poder muda a raiz no presente: **puedo**.',
      },
    ],
  },
}
