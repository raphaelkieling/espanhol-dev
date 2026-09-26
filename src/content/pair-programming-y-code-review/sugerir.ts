import type { Section } from '../types'

export const sugerir: Section = {
  slug: 'sugerir-sin-imponer',
  title: 'Sugerir sin imponer',
  summary: 'Como dar uma sugestão no pair ou no review sem soar como ordem, e como aceitar ou recusar uma.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'Em pair programming, "cambia eso" soa como ordem. Transformar a frase em pergunta ou usar **podríamos** deixa espaço para a outra pessoa pensar.',
        },
        {
          type: 'table',
          columns: ['Soa como ordem', 'Soa como sugestão'],
          rows: [
            ['Cambia el nombre.', '**¿Qué tal si** cambiamos el nombre?'],
            ['Usa un map.', '**¿Y si** usamos un map?'],
            ['Hazlo así.', '**Podríamos** hacerlo así.'],
            ['Eso está mal.', '**No sé si** eso funciona con valores nulos.'],
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'As fórmulas',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['**¿Qué tal si** + presente?', 'Que tal se…?'],
            ['**¿Y si** + presente?', 'E se…?'],
            ['**Podríamos** + infinitivo', 'Poderíamos…'],
            ['**Yo probaría** con…', 'Eu testaria com…'],
            ['**A lo mejor** es…', 'Talvez seja…'],
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~¿Y si probar con un índice?~~ → ¿Y si **probamos** con un índice? Depois de **si**, o verbo vai no presente.',
        },
        {
          type: 'note',
          tone: 'tip',
          text: '**A lo mejor** usa o verbo normal: **a lo mejor es** el cache. É o jeito mais simples de dizer "talvez".',
        },
      ],
    },

    {
      type: 'card',
      title: 'Perguntar em vez de afirmar',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '¿**Por qué** elegiste un array aquí?', pt: 'Por que você escolheu um array aqui?' },
            { es: '¿**Qué pasa si** la lista viene vacía?', pt: 'O que acontece se a lista vier vazia?' },
            { es: '¿**Pensaste en** usar un Set?', pt: 'Você pensou em usar um Set?' },
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Aceitar ou recusar',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: '**Buena idea**, lo cambio.', pt: 'Boa ideia, vou mudar.' },
            { es: '**Buen punto.** **Tiene sentido.**', pt: 'Bom ponto. Faz sentido.' },
            { es: '**Lo pensé, pero** el map no mantiene el orden.', pt: 'Pensei nisso, mas o map não mantém a ordem.' },
            { es: '**Prefiero** dejarlo así por ahora, **porque** es más fácil de leer.', pt: 'Prefiro deixar assim por enquanto, porque é mais fácil de ler.' },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Para recusar, dê o motivo. "Lo pensé, pero…" mostra que você considerou a ideia.',
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Qual frase soa como sugestão?',
        options: ['Cambia el nombre de la variable.', '¿Qué tal si cambiamos el nombre de la variable?', 'El nombre de la variable está mal.'],
        answer: 1,
        explanation: '**¿Qué tal si** + presente transforma a ordem em sugestão.',
      },
      {
        prompt: '¿Y si ___ con un índice?',
        options: ['probamos', 'probar', 'probaremos'],
        answer: 0,
        explanation: 'Depois de **si**, presente: ¿y si **probamos**?',
      },
      {
        prompt: 'Poderíamos separar em duas funções.',
        options: [
          'Podríamos a separarlo en dos funciones.',
          'Podríamos de separarlo en dos funciones.',
          'Podríamos separarlo en dos funciones.',
        ],
        answer: 2,
        explanation: '**Podríamos** + infinitivo, sem preposição.',
      },
      {
        prompt: 'Talvez seja o cache.',
        options: ['Talvez es el cache.', 'A lo mejor es el cache.', 'A mejor es el cache.'],
        answer: 1,
        explanation: 'Talvez = **a lo mejor**, com o verbo normal.',
      },
      {
        prompt: 'Você não vai aceitar uma sugestão. O que soa respeitoso?',
        options: ['No, así está bien.', 'Eso está mal.', 'Lo pensé, pero el map no mantiene el orden.'],
        answer: 2,
        explanation: '**Lo pensé, pero** + o motivo.',
      },
    ],
  },
}
