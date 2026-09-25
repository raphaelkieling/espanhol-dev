import type { Section } from '../types'

export const leyendaElDorado: Section = {
  slug: 'leyenda-el-dorado',
  title: 'Lectura: la leyenda de El Dorado',
  summary: 'Um texto curto com tudo o que você viu neste módulo. Passe o mouse (ou toque) nos trechos marcados para ver a regra.',
  blocks: [
    {
      type: 'reading',
      title: 'La leyenda de El Dorado',
      audio: 'audio/el-dorado.wav',
      paragraphs: [
        'En Colombia, cerca de Bogotá, [[hay|hay: algo existe]] un lago en las montañas: [[la|la: feminino singular]] laguna de Guatavita. Hoy [[es|ser: o que algo é]] un lugar tranquilo, pero hace quinientos años [[fue|pretérito de ser]] el centro de una ceremonia increíble.',
        'Según la leyenda, cuando el pueblo muisca elige a un nuevo jefe, hay una gran fiesta. El jefe se cubre el cuerpo de polvo de oro y sube a una balsa con [[sus|su → sus no plural]] acompañantes. En el centro [[del|de + el = del]] lago, tira oro y esmeraldas [[al agua|a + el = al. Agua é feminina, mas leva el]] como regalo para los dioses.',
        'En el siglo XVI, los españoles [[escucharon|pretérito, ellos: -aron]] esta historia y pensaron otra cosa: «[[Hay una ciudad|hay + un/una: algo novo]] de oro en la selva». Así nació el nombre El Dorado. La buscaron durante más de cien años, pero [[nunca la encontraron|negação: nunca + pronome + verbo]].',
        'Incluso intentaron vaciar el lago para sacar el oro. Todavía hoy se ve el corte que hicieron en la montaña.',
        '[[Lo curioso|lo + adjetivo: fala de uma ideia]] es que el oro sí existe. En 1969, unos campesinos encontraron una pequeña balsa de oro con un jefe y sus acompañantes. Hoy [[está|estar: onde algo está]] en el Museo del Oro de Bogotá. ¿[[Vas a ir|ir a + infinitivo]] a Bogotá? Entonces [[tienes que|tener que: obrigação]] [[verla|pronome grudado no infinitivo]].',
      ],
    },

    { type: 'heading', text: 'Palavras do texto' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['la laguna', 'a lagoa'],
        ['el jefe', 'o chefe (aqui, o líder do povo)'],
        ['el polvo', 'o pó'],
        ['la balsa', 'a jangada'],
        ['tirar', 'jogar, atirar'],
        ['la selva', 'a floresta'],
        ['vaciar', 'esvaziar'],
        ['todavía', 'ainda'],
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: '¿Dónde está la laguna de Guatavita?',
        options: ['En México', 'Cerca de Bogotá', 'En España'],
        answer: 1,
        explanation: '"En Colombia, **cerca de Bogotá**, hay un lago…"',
      },
      {
        prompt: '¿Qué tira el jefe al agua?',
        options: ['Oro y esmeraldas', 'Comida', 'Su balsa'],
        answer: 0,
        explanation: '"…tira **oro y esmeraldas** al agua."',
      },
      {
        prompt: 'Por que o texto diz "al agua"?',
        options: ['É um erro', 'Agua é masculino', 'a + el = al, e agua usa el'],
        answer: 2,
        explanation: 'Agua é feminina, mas leva **el** no singular. E a + el vira **al**.',
      },
      {
        prompt: 'En "nunca la encontraron", ¿qué es "la"?',
        options: ['La ciudad de oro', 'La laguna', 'La montaña'],
        answer: 0,
        explanation: '**La** retoma "una ciudad de oro", que os espanhóis buscaram.',
      },
      {
        prompt: '¿Dónde está hoy la balsa de oro?',
        options: ['En el fondo del lago', 'En el Museo del Oro de Bogotá', 'En España'],
        answer: 1,
        explanation: '"Hoy **está** en el Museo del Oro de Bogotá."',
      },
    ],
  },
}
