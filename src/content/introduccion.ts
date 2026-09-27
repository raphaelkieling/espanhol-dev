import { sectionKey } from '../progress/store'
import type { Section } from './types'

/** Module 0: what the course is and how to study alongside it. Has its own page and unlocks module 1. */
export const introduccion: Section = {
  slug: 'introduccion',
  title: 'Introducción',
  summary: 'O que este guia cobre e o que fazer além dele para o espanhol sair no trabalho.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'Eaí! Fico feliz que tu resolveu começar a estudar espanhol. Antes de tudo, é bom saber o que esperar: este é um **guia para quem precisa de espanhol de última hora para trabalhar com programação**. Não é um curso completo, não entra em detalhes avançados de gramática e não tenta cobrir o idioma todo. Ele é propositalmente básico e vai direto ao que aparece no dia a dia de um time de tecnologia: a daily, os PRs, as reuniões. A ideia é te dar uma direção e o mínimo para tu conseguir se comunicar, não te deixar fluente.',
        },
        {
          type: 'text',
          text: 'Os módulos te dão a base, mas é conversando que o espanhol vai destravar no final do dia. No começo vai ser complicado... e tu vai errar bastante, faz parte do processo. Então comece a falar cedo, mesmo sem ter começado ou terminado esse guia. Aulas de conversação no [italki](https://www.italki.com) funcionam bem! Se tiver amigos ou colegas que falam espanhol, combine de conversar um pouco só em espanhol. E LLMs como o [ChatGPT](https://chatgpt.com) e o [Claude](https://claude.ai) no modo de voz são um jeito prático de treinar sem vergonha: peça para simular uma daily e para apontar seus erros no final.',
        },
        {
          type: 'text',
          text: 'Para não esquecer o que estudou, use **flashcards com repetição espaçada**. A ideia é revisar cada item pouco antes de esquecer, e é uma das técnicas de estudo com mais evidência de que funciona. O [Anki](https://apps.ankiweb.net) é gratuito e já vem com o [FSRS](https://github.com/open-spaced-repetition/fsrs4anki/wiki/ABC-of-FSRS), um algoritmo que agenda as revisões de forma mais eficiente que o padrão antigo. Coloque frases inteiras do curso, não palavras soltas, e revise um pouco todo dia. O [Duolingo](https://www.duolingo.com) pode entrar depois, como apoio para manter o contato com o idioma, mas sozinho não prepara para uma conversa de trabalho.',
        },
        {
          type: 'text',
          text: 'Boa sorte!',
        },
      ],
    },
  ],  quiz: {
    questions: [
      {
        prompt: 'O que este curso se propõe a ser?',
        options: [
          'Um curso completo de espanhol, do básico ao avançado',
          'Um mini curso básico, com o espanhol do dia a dia de programação',
          'Um curso de gramática detalhada',
        ],
        answer: 1,
        explanation: 'É um **mini curso** de última hora: dá uma direção e o mínimo para se comunicar no trabalho.',
      },
      {
        prompt: 'Segundo o texto, o que mais faz o espanhol destravar?',
        options: ['Terminar todos os módulos antes de falar', 'Conversar desde cedo, mesmo errando', 'Usar só o Duolingo'],
        answer: 1,
        explanation: 'É **conversando** que destrava. Errar no começo faz parte.',
      },
      {
        prompt: 'Qual o melhor jeito de montar seus flashcards no Anki?',
        options: [
          'Frases inteiras do curso, revisando um pouco todo dia',
          'Listas de palavras soltas, revisadas uma vez por semana',
          'Regras de gramática copiadas do texto',
        ],
        answer: 0,
        explanation: '**Frases inteiras** e revisão diária, deixando o FSRS decidir quando cada cartão volta.',
      },
    ],
  },
}

/** Progress key for the intro challenge. */
export const INTRO_KEY = sectionKey(introduccion.slug, introduccion.slug)
