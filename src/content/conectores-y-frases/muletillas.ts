import type { Section } from '../types'

export const muletillas: Section = {
  slug: 'muletillas',
  title: 'Muletillas para ganar tiempo',
  summary: 'O que dizer enquanto pensa, quando esquece uma palavra ou quer saber se foi entendido.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'Nativos também param para pensar. A diferença é que preenchem a pausa com palavras curtas em vez de silêncio ou de um "é…" em português.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Para pensar',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português', 'Quando usar'],
          rows: [
            ['**Bueno…**', 'Bom…', 'Começar a resposta'],
            ['**A ver…**', 'Vamos ver…', 'Antes de analisar algo'],
            ['**Este…**', 'É…', 'Pausa no meio da frase (muito latino-americano)'],
            ['**Pues…**', 'Pois…, bom…', 'Começar a resposta (México, Colômbia, Espanha)'],
            ['**Déjame pensar.**', 'Deixa eu pensar.', 'Precisa de alguns segundos'],
            ['**Un segundo.**', 'Um segundo.', 'Procurando algo na tela'],
          ],
        },
        {
          type: 'examples',
          items: [
            { es: '**A ver**… creo que el problema está en el cache.', pt: 'Vamos ver… acho que o problema está no cache.' },
            { es: '**Bueno**, depende de cuántos usuarios esperamos.', pt: 'Bom, depende de quantos usuários esperamos.' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Quando falta a palavra',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '¿**Cómo se dice**…? El rollback.', pt: 'Como se diz…? O rollback.' },
            { es: '**No sé cómo se dice**, pero **es como** un cache compartido.', pt: 'Não sei como se diz, mas é tipo um cache compartilhado.' },
            { es: '**¿Cómo te explico?**', pt: 'Como eu te explico?' },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Em tech, usar o termo em inglês é normal. Se não lembrar a palavra em espanhol, diga em inglês e siga em frente.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Os vícios do português',
      blocks: [
        {
          type: 'table',
          columns: ['Português', 'Español'],
          rows: [
            ['…, né?', '…, **¿no?** / …, **¿verdad?**'],
            ['tipo…', '**como**…'],
            ['então…', '**entonces**…'],
          ],
        },
        {
          type: 'examples',
          items: [
            { es: 'Es más rápido con un índice, **¿no?**', pt: 'É mais rápido com um índice, né?' },
            { es: 'Es **como** un proxy, pero más simple.', pt: 'É tipo um proxy, mas mais simples.' },
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~Es más rápido, né?~~ → Es más rápido, **¿no?**',
        },
      ],
    },

    {
      type: 'card',
      title: 'Conferir se foi entendido',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '**¿Me explico?**', pt: 'Fui claro?' },
            { es: '**¿Se entiende?**', pt: 'Deu para entender?' },
            { es: '**¿Me sigues?**', pt: 'Está me acompanhando?' },
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Alguém pergunta algo difícil e você precisa de alguns segundos. O que diz?',
        options: ['Déjame pensar.', 'Todavía.', 'Sin embargo.'],
        answer: 0,
        explanation: '**Déjame pensar** = deixa eu pensar.',
      },
      {
        prompt: 'Es mejor usar Redis aquí, ___',
        options: ['¿né?', '¿no?', '¿tipo?'],
        answer: 1,
        explanation: 'O "né?" do espanhol é **¿no?** ou **¿verdad?**.',
      },
      {
        prompt: 'Esqueceu a palavra "vazamento de memória". O que é mais natural?',
        options: [
          'Silêncio até lembrar.',
          '¿Cómo se dice…? Un memory leak.',
          'Tipo, né, o vazamento.',
        ],
        answer: 1,
        explanation: '**¿Cómo se dice…?** e o termo em inglês. Em tech, isso é normal.',
      },
      {
        prompt: 'O que significa "A ver…" no começo de uma resposta?',
        options: ['Vamos ver…', 'Para ver', 'Adeus'],
        answer: 0,
        explanation: '**A ver** = vamos ver, usado para pensar antes de responder.',
      },
      {
        prompt: 'Depois de explicar uma arquitetura, você quer saber se o time entendeu.',
        options: ['¿Me explico?', '¿Me llamo?', '¿Cómo se dice?'],
        answer: 0,
        explanation: '**¿Me explico?** = fui claro?',
      },
    ],
  },
}
