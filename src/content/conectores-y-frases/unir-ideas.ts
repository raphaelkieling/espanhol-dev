import type { Section } from '../types'

export const unirIdeas: Section = {
  slug: 'unir-ideas',
  title: 'Unir ideas en vez de hablar en frases sueltas',
  summary: 'Como transformar frases curtas e soltas em uma explicação que flui.',
  blocks: [
    {
      type: 'text',
      text: 'Quem está aprendendo costuma falar em frases curtas e separadas. Dá para entender, mas soa travado. Com poucas palavras de ligação, a mesma ideia fica natural.',
    },
    {
      type: 'examples',
      items: [
        { es: 'Encontré un bug. Está en el login. Lo voy a arreglar hoy.', pt: 'Antes: três frases soltas' },
        { es: 'Encontré un bug **en el** login **y** lo voy a arreglar hoy.', pt: 'Depois: uma frase só' },
      ],
    },

    { type: 'heading', text: 'que, donde, cuando' },
    {
      type: 'text',
      text: 'Para falar mais sobre algo que você acabou de mencionar, use **que** (coisa ou pessoa), **donde** (lugar) e **cuando** (momento).',
    },
    {
      type: 'examples',
      items: [
        { es: 'El bug **que** encontré ayer ya está arreglado.', pt: 'O bug que encontrei ontem já está arrumado.' },
        { es: 'Es el archivo **donde** está la config.', pt: 'É o arquivo onde fica a config.' },
        { es: '**Cuando** termine el deploy, te aviso.', pt: 'Quando o deploy terminar, te aviso.' },
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'Sem acento quando liga frases (**que**, **donde**, **cuando**). Com acento só em perguntas (¿**qué**?, ¿**dónde**?, ¿**cuándo**?).',
    },

    { type: 'heading', text: 'antes de, después de, para + infinitivo' },
    {
      type: 'text',
      text: 'Depois dessas expressões, o verbo fica no **infinitivo**, como em português.',
    },
    {
      type: 'examples',
      items: [
        { es: '**Antes de desplegar**, corro los tests.', pt: 'Antes de fazer deploy, rodo os testes.' },
        { es: '**Después de revisar** el PR, lo aprobé.', pt: 'Depois de revisar o PR, aprovei.' },
        { es: 'Uso un mock **para probar** el servicio.', pt: 'Uso um mock para testar o serviço.' },
      ],
    },

    { type: 'heading', text: 'y → e, o → u' },
    {
      type: 'text',
      text: 'Para não repetir o som, **y** vira **e** antes de palavra que começa com som de "i", e **o** vira **u** antes de som de "o".',
    },
    {
      type: 'table',
      columns: ['Regra', 'Exemplo'],
      rows: [
        ['y → **e** antes de i- / hi-', 'tests unitarios **e** integración'],
        ['o → **u** antes de o- / ho-', 'siete **u** ocho días'],
      ],
    },

    { type: 'heading', text: 'Uma mensagem completa' },
    {
      type: 'text',
      text: 'Para explicar um problema, siga a ordem **contexto → problema → próximo passo**, ligando as partes com os conectores do módulo.',
    },
    {
      type: 'examples',
      items: [
        {
          es: 'Estuve revisando el checkout **y** vi que el pago falla con tarjetas internacionales. **Todavía** no sé la causa, **pero** creo que es el cambio de ayer, **así que** lo voy a revertir **para probar**.',
          pt: 'Estive revisando o checkout e vi que o pagamento falha com cartões internacionais. Ainda não sei a causa, mas acho que é a mudança de ontem, então vou reverter para testar.',
        },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: 'Não precisa ligar tudo. Uma frase com dois ou três conectores já soa natural. Frases longas demais com "y… y… y entonces…" confundem.',
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'El PR ___ subí ayer tiene conflictos.',
        options: ['que', 'qué', 'donde'],
        answer: 0,
        explanation: 'Ligando frases, sem acento: el PR **que** subí.',
      },
      {
        prompt: '___ los cambios, avísame.',
        options: ['Antes de subes', 'Antes de subir', 'Antes subir'],
        answer: 1,
        explanation: '**Antes de** + infinitivo.',
      },
      {
        prompt: 'Necesitamos diseño ___ implementación.',
        options: ['y', 'e', 'u'],
        answer: 1,
        explanation: 'Antes de palavra com som de i, **y** vira **e**.',
      },
      {
        prompt: 'Faltan siete ___ ocho tickets.',
        options: ['o', 'u', 'e'],
        answer: 1,
        explanation: 'Antes de palavra com som de o, **o** vira **u**.',
      },
      {
        prompt: 'Qual versão soa mais natural?',
        options: [
          'Cambié la query. La query era lenta. Ahora es rápida.',
          'Cambié la query que era lenta y ahora es rápida.',
          'Cambié la query y la query era lenta y entonces y ahora es rápida.',
        ],
        answer: 1,
        explanation: 'Uma frase com **que** e **y**, sem repetir a mesma palavra.',
      },
    ],
  },
}
