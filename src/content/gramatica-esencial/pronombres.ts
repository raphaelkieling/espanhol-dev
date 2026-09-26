import type { Section } from '../types'

export const pronombres: Section = {
  slug: 'pronombres',
  title: 'Pronombres y posesivos',
  summary: 'Quem faz, de quem é e como dizer "revisar ele" do jeito certo.',
  blocks: [
    {
      type: 'card',
      title: 'Pronomes pessoais',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['yo', 'eu'],
            ['tú', 'você (informal)'],
            ['usted', 'o senhor, a senhora'],
            ['él / ella', 'ele / ela'],
            ['nosotros / nosotras', 'nós, a gente'],
            ['ustedes', 'vocês'],
            ['vosotros / vosotras', 'vocês (só na Espanha, informal)'],
            ['ellos / ellas', 'eles / elas'],
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          title: 'tú ou usted?',
          text: 'Em times de tecnologia, use **tú** com todo mundo. **Usted** fica para clientes ou situações bem formais.',
        },
        {
          type: 'text',
          text: 'O verbo já mostra quem faz a ação, então o pronome costuma sumir. Usá-lo sempre soa repetitivo, ou dá ênfase ("**yo** lo hice, no él").',
        },
        {
          type: 'examples',
          items: [
            { es: '**Trabajo** en el equipo de pagos.', pt: 'Trabalho no time de pagamentos.' },
            { es: '¿**Puedes** revisar mi PR?', pt: 'Você pode revisar meu PR?' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Possessivos',
      blocks: [
        {
          type: 'table',
          columns: ['Antes do substantivo', 'Depois do verbo', 'Português'],
          rows: [
            ['**mi** / **mis**', '**mío**, mía', 'meu, minha'],
            ['**tu** / **tus**', '**tuyo**, tuya', 'seu, sua (de você)'],
            ['**su** / **sus**', '**suyo**, suya', 'dele, dela, de vocês, do senhor'],
            ['**nuestro**, nuestra', '**nuestro**, nuestra', 'nosso, nossa'],
          ],
          caption: 'Mi, tu e su só mudam no plural: mis tareas, tus tests.',
        },
        {
          type: 'examples',
          items: [
            { es: '**Mis** cambios ya están en main.', pt: 'Minhas mudanças já estão na main.' },
            { es: 'Este PR es **mío**, el otro es **tuyo**.', pt: 'Este PR é meu, o outro é seu.' },
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          title: 'su é ambíguo',
          text: '**Su** código pode ser dele, dela, de vocês ou do senhor. Se não ficar claro, diga de quem é: el código **de Ana**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'Objeto: lo, la, le',
      blocks: [
        {
          type: 'text',
          text: 'No Brasil falamos "revisei ele". Em espanhol, o pronome do objeto é outro e vem **antes do verbo**.',
        },
        {
          type: 'table',
          columns: ['Uso', 'Pronomes', 'Exemplo'],
          rows: [
            ['Objeto direto (o quê?)', '**lo, la, los, las**', 'El PR? **Lo** reviso ahora.'],
            ['Objeto indireto (para quem?)', '**le, les**', '**Le** mandé el enlace a Ana.'],
            ['Eu, você, nós', '**me, te, nos**', '¿**Me** ayudas con esto?'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~Reviso él~~ → **Lo** reviso. ~~Mandé para ella~~ → **Le** mandé.',
        },
        {
          type: 'text',
          text: 'Com infinitivo, o pronome pode grudar no final do verbo. As duas formas estão certas:',
        },
        {
          type: 'examples',
          items: [
            { es: '**Lo** voy a revisar. = Voy a revisar**lo**.', pt: 'Vou revisar ele.' },
            { es: 'Tengo que llamar**la**.', pt: 'Tenho que ligar pra ela.' },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          title: 'le + lo = se lo',
          text: 'Quando le/les encontra lo/la, vira **se**: ¿El informe? **Se lo** envío mañana. E com "me/te": **Te lo** paso por Slack.',
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Com um colega de time, qual é o mais natural?',
        options: ['¿Usted puede revisar mi PR?', '¿Puedes revisar mi PR?', '¿Vosotros puede revisar mi PR?'],
        answer: 1,
        explanation: 'No trabalho em tech usa-se **tú**, e o pronome costuma ficar implícito: ¿**Puedes**…?',
      },
      {
        prompt: '___ tareas de hoy están en el board.',
        options: ['Mi', 'Mis', 'Mías'],
        answer: 1,
        explanation: 'Plural antes do substantivo: **mis** tareas.',
      },
      {
        prompt: '¿De quién es este branch? — Es ___.',
        options: ['mi', 'mío', 'el mi'],
        answer: 1,
        explanation: 'Depois do verbo, sem substantivo, usa-se a forma longa: es **mío**.',
      },
      {
        prompt: 'El bug de ayer… ya ___ arreglé.',
        options: ['lo', 'le', 'él'],
        answer: 0,
        explanation: 'Objeto direto masculino (o bug): **lo** arreglé.',
      },
      {
        prompt: '¿El enlace? ___ mando ahora a Pedro.',
        options: ['Le lo', 'Se lo', 'Lo le'],
        answer: 1,
        explanation: 'le + lo vira **se lo**.',
      },
    ],
  },
}
