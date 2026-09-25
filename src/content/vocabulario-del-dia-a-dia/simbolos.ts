import type { Section } from '../types'

export const simbolos: Section = {
  slug: 'simbolos-y-codigo-en-voz-alta',
  title: 'Símbolos y código en voz alta',
  summary: 'Como ditar símbolos, nomes de variáveis e uma linha de código numa call.',
  blocks: [
    {
      type: 'text',
      text: 'Em pair programming ou numa call, você vai ditar código e ouvir alguém ditando. Termos como "if", "array" ou "camelCase" ficam em inglês. Os símbolos, não.',
    },

    { type: 'heading', text: 'Pontuação e caracteres' },
    {
      type: 'table',
      columns: ['Símbolo', 'Español'],
      rows: [
        ['.', '**punto**'],
        [',', '**coma**'],
        [';', '**punto y coma**'],
        [':', '**dos puntos**'],
        ['" "', '**comillas**'],
        ['_', '**guion bajo**'],
        ['-', '**guion**'],
        ['/', '**barra**'],
        ['\\', '**barra invertida**'],
        ['@', '**arroba**'],
      ],
    },

    { type: 'heading', text: 'Parênteses, colchetes e chaves' },
    {
      type: 'table',
      columns: ['Símbolo', 'Español'],
      rows: [
        ['( )', '**paréntesis**'],
        ['[ ]', '**corchetes**'],
        ['{ }', '**llaves**'],
      ],
      caption: 'Para abrir e fechar: **abre** paréntesis, **cierra** llave.',
    },
    {
      type: 'note',
      tone: 'warning',
      text: '~~chaves~~ → **llaves** { }. ~~colchetes~~ → **corchetes** [ ].',
    },

    { type: 'heading', text: 'Operadores' },
    {
      type: 'table',
      columns: ['Símbolo', 'Español'],
      rows: [
        ['=', '**igual** (x igual a cinco)'],
        ['===', '**triple igual**'],
        ['!=', '**distinto de**'],
        ['> / <', '**mayor que** / **menor que**'],
        ['>=', '**mayor o igual que**'],
        ['&&', '**y** (ou "and")'],
        ['||', '**o** (ou "or")'],
        ['=>', '**flecha** (ou "arrow")'],
      ],
    },

    { type: 'heading', text: 'Letras e maiúsculas' },
    {
      type: 'text',
      text: 'Para soletrar um nome, vale conhecer as letras que mudam em relação ao português:',
    },
    {
      type: 'table',
      columns: ['Letra', 'Español', 'Obs.'],
      rows: [
        ['g', '**ge**', 'soa como o "r" de "rato"'],
        ['h', '**hache**', ''],
        ['j', '**jota**', ''],
        ['b / v', '**be** / **ve**', 'mesmo som: "be larga" e "ve corta"'],
        ['w', '**doble ve**', 'no México, **doble u**'],
        ['y', '**ye**', 'ou **i griega**'],
        ['z', '**zeta**', 'soa como "s"'],
      ],
    },
    {
      type: 'examples',
      items: [
        { es: 'Es **userId**, con la i **mayúscula**.', pt: 'É userId, com o i maiúsculo.' },
        { es: '**MAX_RETRIES**, todo en **mayúsculas** y con guion bajo.', pt: 'MAX_RETRIES, tudo em maiúsculas e com underscore.' },
      ],
    },

    { type: 'heading', text: 'Ler uma linha' },
    {
      type: 'examples',
      items: [
        { es: 'if, **abre paréntesis**, user **punto** isActive, **cierra paréntesis**, **abre llave**', pt: 'if (user.isActive) {' },
        { es: 'items, **abre corchete**, cero, **cierra corchete**', pt: 'items[0]' },
        { es: 'api **punto** empresa **punto** com **barra** v uno', pt: 'api.empresa.com/v1' },
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'Ninguém dita cada símbolo de uma linha óbvia. Diga o essencial ("if user punto isActive") e soletre só o que pode gerar dúvida.',
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Como se diz { } em espanhol?',
        options: ['corchetes', 'llaves', 'paréntesis'],
        answer: 1,
        explanation: '{ } são **llaves**. [ ] são corchetes.',
      },
      {
        prompt: 'Como você dita "user_id"?',
        options: ['user, guion bajo, id', 'user, guion, id', 'user, barra, id'],
        answer: 0,
        explanation: '_ é **guion bajo**. O - é só guion.',
      },
      {
        prompt: 'Como se lê "a != b"?',
        options: ['a igual a b', 'a mayor que b', 'a distinto de b'],
        answer: 2,
        explanation: '!= se lê **distinto de**.',
      },
      {
        prompt: 'Como se diz ";" em espanhol?',
        options: ['dos puntos', 'punto y coma', 'coma'],
        answer: 1,
        explanation: '; é **punto y coma**. : é dos puntos.',
      },
      {
        prompt: 'Como você dita o e-mail "ana@dev.io"?',
        options: ['ana a dev punto io', 'ana arroba dev coma io', 'ana arroba dev punto io'],
        answer: 2,
        explanation: '@ é **arroba** e . é **punto**.',
      },
    ],
  },
}
