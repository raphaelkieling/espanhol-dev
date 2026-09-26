import type { Section } from '../types'

export const llevarElTeclado: Section = {
  slug: 'llevar-el-teclado',
  title: 'Llevar el teclado',
  summary: 'As frases de quem digita (driver) e de quem guia (navigator) numa sessão de pair.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'No pair, uma pessoa digita (**lleva el teclado**, o driver) e a outra guia (o navigator). Os termos em inglês são usados, mas as frases do dia a dia são em espanhol.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Começar e trocar',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**¿Quién comparte pantalla?**', 'Quem compartilha a tela?'],
            ['**Comparto yo.**', 'Eu compartilho.'],
            ['**¿Ves mi pantalla?**', 'Está vendo minha tela?'],
            ['**¿Me pasas el teclado?**', 'Me passa o teclado?'],
            ['**Te paso el control.**', 'Te passo o controle.'],
            ['**¿Cambiamos?**', 'Vamos trocar?'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~Comparto la tela~~ → Comparto la **pantalla**. Em espanhol, tela é tecido.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Guiar',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**Baja** un poco. / **Sube.**', 'Desce um pouco. / Sobe.'],
            ['**Ahí.** / **Justo ahí.**', 'Aí. / Bem aí.'],
            ['**En la línea** 42.', 'Na linha 42.'],
            ['**Abre** el archivo de config.', 'Abre o arquivo de config.'],
            ['**Espera**, vuelve atrás.', 'Espera, volta.'],
            ['**Dale.**', 'Vai. / Pode mandar.'],
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Para pedir algo a "tú", use a mesma forma do "él" no presente: él **abre** → **abre** el archivo. **Dale** é muito usado na América do Sul; no México, é mais comum **va** ou **órale**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Pensar em voz alta',
      blocks: [
        {
          type: 'text',
          text: 'Quem digita deve narrar o que está fazendo. Assim quem guia acompanha sem precisar perguntar.',
        },
        {
          type: 'examples',
          items: [
            { es: '**Voy a** crear una función para esto.', pt: 'Vou criar uma função para isso.' },
            { es: '**A ver** qué devuelve…', pt: 'Vamos ver o que retorna…' },
            { es: 'Esto es raro, **¿lo ves?**', pt: 'Isso é estranho, está vendo?' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Pausas',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '**¿Hacemos una pausa** de cinco minutos?', pt: 'Fazemos uma pausa de cinco minutos?' },
            { es: '**Vuelvo en** cinco.', pt: 'Volto em cinco.' },
            { es: '**Ya volví.**', pt: 'Voltei.' },
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Eu compartilho a tela.',
        options: ['Comparto la tela.', 'Comparto la pantalla.', 'Comparo la pantalla.'],
        answer: 1,
        explanation: 'Tela é **pantalla**. Tela em espanhol é tecido.',
      },
      {
        prompt: 'Você quer digitar agora. O que diz?',
        options: ['¿Me pasas el teclado?', '¿Te paso el teclado?', '¿Me pesas el teclado?'],
        answer: 0,
        explanation: '**¿Me pasas** el teclado? = me passa o teclado? "Te paso" é oferecer.',
      },
      {
        prompt: 'O navigator quer ver de novo o código de antes. O que diz?',
        options: ['Comparto yo.', 'Dale, sigue.', 'Espera, vuelve atrás.'],
        answer: 2,
        explanation: '**Espera**, **vuelve atrás** = espera, volta.',
      },
      {
        prompt: '"¿Hacemos una pausa?" O que significa?',
        options: ['Terminamos por hoje?', 'Fazemos uma pausa?', 'Trocamos de lugar?'],
        answer: 1,
        explanation: '**Hacer una pausa** = fazer uma pausa.',
      },
      {
        prompt: 'Peça ao driver: "___ el archivo de config."',
        options: ['Abre', 'Abres', 'Abierto'],
        answer: 0,
        explanation: 'Para pedir a "tú", mesma forma do "él": **abre**.',
      },
    ],
  },
}
