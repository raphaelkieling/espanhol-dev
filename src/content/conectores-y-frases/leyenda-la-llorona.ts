import type { Section } from '../types'

export const leyendaLaLlorona: Section = {
  slug: 'leyenda-la-llorona',
  title: 'Lectura: la leyenda de La Llorona',
  summary: 'Uma lenda contada como numa conversa, com os conectores e muletillas do módulo. Passe o mouse (ou toque) nos trechos marcados para ver a regra.',
  blocks: [
    {
      type: 'reading',
      title: 'La Llorona',
      audio: 'audio/la-llorona.wav',
      paragraphs: [
        '[[Bueno|muletilla para começar a falar]], ¿conoces la leyenda de La Llorona? Es de México, [[aunque|aunque: embora]] la cuentan en casi toda América Latina. [[O sea|o sea: ou seja]], tarde o temprano alguien te la va a contar.',
        'Dicen que hace muchos años una mujer se enojó con su esposo y, llena de rabia, llevó a sus hijos al río. El río se llevó a los niños. Cuando entendió lo que hizo, [[ya|ya: já]] no pudo hacer nada.',
        'Desde esa noche, camina por los ríos donde los perdió y llora: «¡Ay, mis hijos!». Nunca los encontró, [[así que|así que: consequência]] los busca todas las noches. La llaman La Llorona, [[es decir|es decir: isto é]], la mujer que llora.',
        '[[Además|además: além disso]], dicen que tiene el pelo largo y los ojos rojos [[e|y → e antes de som de i]] hinchados. [[Sin embargo|sin embargo: no entanto]], lo peor no es verla, [[sino|sino: corrige depois de "no"]] oírla.',
        'Hay un detalle que da miedo: si oyes el llanto lejos, ella está cerca. Y si lo oyes cerca, está lejos. [[¿Me explico?|muletilla: fui claro?]]',
        '[[Por eso|por eso: por isso]] muchas madres les dicen a sus hijos: «[[Antes de salir|antes de + infinitivo]], mira la hora». [[A ver|a ver: vamos ver]], seguro que es solo una leyenda, ¿no? Pero, por si acaso, yo [[todavía|todavía: ainda (não é "porém")]] evito los ríos de noche.',
      ],
    },

    { type: 'heading', text: 'Palavras do texto' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['tarde o temprano', 'cedo ou tarde'],
        ['enojarse', 'ficar bravo'],
        ['la rabia', 'a raiva'],
        ['el pelo', 'o cabelo'],
        ['hinchado', 'inchado'],
        ['el llanto', 'o choro'],
        ['lejos / cerca', 'longe / perto'],
        ['por si acaso', 'por via das dúvidas'],
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: '¿De dónde es la leyenda de La Llorona?',
        options: ['De España', 'De México', 'De Chile'],
        answer: 1,
        explanation: '"Es **de México**, aunque la cuentan en casi toda América Latina."',
      },
      {
        prompt: '¿Por qué la llaman La Llorona?',
        options: ['Porque llora buscando a sus hijos', 'Porque vive en un río', 'Porque tiene los ojos rojos'],
        answer: 0,
        explanation: 'Ela chora procurando os filhos. **Es decir**, la mujer que llora.',
      },
      {
        prompt: 'Según el texto, si oyes el llanto lejos…',
        options: ['ella está lejos', 'ella está cerca', 'no hay peligro'],
        answer: 1,
        explanation: 'Esse é o detalhe macabro: se o choro soa **longe**, ela está **perto**.',
      },
      {
        prompt: '"Lo peor no es verla, sino oírla." Por que "sino" e não "pero"?',
        options: ['Sino significa "se não"', 'É o mesmo que "todavía"', 'Corrige a ideia depois de uma negação'],
        answer: 2,
        explanation: '**Sino** vem depois de "no" para corrigir: não é isso, é aquilo.',
      },
      {
        prompt: 'En "yo todavía evito los ríos de noche", "todavía" significa…',
        options: ['porém', 'ainda', 'já'],
        answer: 1,
        explanation: '**Todavía** = ainda. Não confunda com o "todavia" do português.',
      },
    ],
  },
}
