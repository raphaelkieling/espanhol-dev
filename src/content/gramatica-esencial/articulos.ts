import type { Section } from '../types'

export const articulos: Section = {
  slug: 'articulos',
  title: 'Artículos: el, la, los, las y lo',
  summary: 'Os artigos que você vai usar em quase toda frase, e as duas únicas contrações do espanhol.',
  blocks: [
    {
      type: 'text',
      text: 'Como no português, o artigo muda com o **gênero** e o **número** da palavra. O que muda são as formas: o masculino singular é **el**, e não existe "o".',
    },

    { type: 'heading', text: 'Artigos definidos' },
    {
      type: 'table',
      columns: ['', 'Singular', 'Plural'],
      rows: [
        ['Masculino', '**el** código', '**los** tests'],
        ['Feminino', '**la** tarea', '**las** reuniones'],
      ],
      caption: 'Equivalem a o, os, a, as.',
    },

    { type: 'heading', text: 'Artigos indefinidos' },
    {
      type: 'table',
      columns: ['', 'Singular', 'Plural'],
      rows: [
        ['Masculino', '**un** error', '**unos** errores'],
        ['Feminino', '**una** reunión', '**unas** reuniones'],
      ],
      caption: 'Equivalem a um, uns, uma, umas.',
    },

    { type: 'heading', text: 'Só existem duas contrações: al e del' },
    {
      type: 'text',
      text: 'Em português juntamos preposição e artigo o tempo todo (no, na, do, pelo…). Em espanhol, isso só acontece com **el**:',
    },
    {
      type: 'table',
      columns: ['Junção', 'Resultado', 'Exemplo'],
      rows: [
        ['a + el', '**al**', 'Voy **al** trabajo.'],
        ['de + el', '**del**', 'El código **del** proyecto.'],
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      title: 'Cuidado',
      text: 'Com la, los e las não há contração: **a la** reunión, **de los** usuarios. E **en** nunca contrai: "no servidor" é **en el** servidor.',
    },

    { type: 'heading', text: 'O neutro lo' },
    {
      type: 'text',
      text: '**Lo** não acompanha substantivo. Ele vem antes de um adjetivo ou de **que** para falar de uma ideia, como o "o" de "o importante" ou "o que".',
    },
    {
      type: 'examples',
      items: [
        { es: '**Lo** importante es que funcione.', pt: 'O importante é que funcione.' },
        { es: '**Lo** bueno de esta librería es la documentación.', pt: 'O bom dessa biblioteca é a documentação.' },
        { es: '**Lo que** pasa es que el test falla en CI.', pt: 'O que acontece é que o teste falha no CI.' },
        { es: 'No entiendo **lo que** dices.', pt: 'Não entendo o que você diz.' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: 'Com adjetivo sozinho, nunca use el: ~~el importante es~~ → **lo** importante es.',
    },

    { type: 'heading', text: 'Onde o espanhol é diferente' },
    {
      type: 'table',
      columns: ['Português', 'Español', 'Regra'],
      rows: [
        ['o meu código', '**mi** código', 'Nada de artigo antes de possessivo'],
        ['na segunda-feira', '**el** lunes', 'Dias da semana: el, sem preposição'],
        ['às 10h', '**a las** 10', 'Horas: a las (e a la una)'],
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      title: 'el × él',
      text: 'Com acento, **él** é o pronome "ele". **Él** revisó **el** PR.',
    },
  ],
  quiz: {
    questions: [
      {
        prompt: '___ base de datos está caída.',
        options: ['El', 'La', 'Lo'],
        answer: 1,
        explanation: 'Base de datos é feminino: **la** base de datos.',
      },
      {
        prompt: 'Mañana vamos ___ servidor de pruebas.',
        options: ['a el', 'al', 'ao'],
        answer: 1,
        explanation: 'a + el sempre vira **al**.',
      },
      {
        prompt: 'El README ___ repositorio está desactualizado.',
        options: ['del', 'de el', 'do'],
        answer: 0,
        explanation: 'de + el sempre vira **del**.',
      },
      {
        prompt: '___ importante es terminar hoy.',
        options: ['El', 'La', 'Lo'],
        answer: 2,
        explanation: 'Adjetivo sozinho falando de uma ideia pede **lo**.',
      },
      {
        prompt: '¿Cuál frase es correcta?',
        options: ['El mi código está en producción.', 'Mi código está en producción.', 'Mi código está en la producción del.'],
        answer: 1,
        explanation: 'Antes de possessivo não vai artigo: **mi** código.',
      },
    ],
  },
}
