export type Module = {
  id: number
  slug: string
  title: string
  subtitle: string
  days: string
  icon: string
  topics: string[]
}

const icon = (name: string) => `${import.meta.env.BASE_URL}icons/${name}.png`

export const modules: Module[] = [
  {
    id: 1,
    slug: 'gramatica-esencial',
    days: 'Días 1–2',
    title: 'Gramática esencial',
    subtitle: 'Artículos, pronombres, ser y estar, y cómo armar una frase',
    icon: icon('book'),
    topics: [
      'Artículos el, la, los, las y el neutro lo · contracciones al y del',
      'Géneros que cambian del portugués: el equipo, la leche, el puente',
      'Pronombres: lo, la, le, se · posesivos',
      'Ser, estar, hay y tener',
      'Presente, pretérito e ir a + infinitivo',
      'Orden de la frase, negación y preguntas',
    ],
  },
  {
    id: 2,
    slug: 'conectores-y-frases',
    days: 'Día 3',
    title: 'Conectores y frases',
    subtitle: 'Pero, sino, aunque, todavía, ya… para unir ideas',
    icon: icon('puzzle'),
    topics: [
      'Pero, sino, aunque, todavía, ya, además',
      'Sin embargo, entonces, o sea, por eso, es decir',
      'Unir ideas en vez de hablar en frases sueltas',
      'Muletillas para ganar tiempo: bueno, a ver, pues, ¿vale?',
    ],
  },
  {
    id: 3,
    slug: 'vocabulario-del-dia-a-dia',
    days: 'Día 4',
    title: 'Vocabulario del día a día',
    subtitle: 'Presentarte, falsos amigos y leer código en voz alta',
    icon: icon('wave'),
    topics: [
      'Presentarte al equipo: tu rol y tu experiencia',
      'Falsos amigos: exquisito, oficina, borrar, largo, apellido',
      'Símbolos y código en voz alta: paréntesis, llaves, igual, distinto',
      'Llamar a una función, recorrer un array, devolver un valor',
    ],
  },
  {
    id: 4,
    slug: 'la-daily-y-las-tareas',
    days: 'Día 5',
    title: 'La daily y las tareas',
    subtitle: 'Ayer, hoy, bloqueos, tickets y bugs',
    icon: icon('coffee'),
    topics: [
      'Qué hice ayer, qué voy a hacer hoy y qué me bloquea',
      'Tickets, prioridades y estimaciones',
      'Avisar que algo se retrasa',
      'Reportar un bug o un incidente con claridad',
    ],
  },
  {
    id: 5,
    slug: 'pair-programming-y-code-review',
    days: 'Día 6',
    title: 'Pair programming y code review',
    subtitle: 'Sugerir, preguntar y comentar un PR',
    icon: icon('headphones'),
    topics: [
      'Sugerir sin imponer: ¿y si probamos…?, yo lo haría así',
      'Pedir que repitan o expliquen',
      'Llevar el teclado: te paso el control, comparto pantalla',
      'Comentarios de PR y mensajes de Slack claros y amables',
    ],
  },
  {
    id: 6,
    slug: 'reuniones-y-decisiones-tecnicas',
    days: 'Día 7',
    title: 'Reuniones y decisiones técnicas',
    subtitle: 'Explicar arquitectura, opinar y presentar una demo',
    icon: icon('presentation'),
    topics: [
      'Explicar arquitectura y trade-offs: servicios, base de datos, escalar',
      'Dar tu opinión, estar de acuerdo y discrepar con respeto',
      'Presentar una demo corta de principio a fin',
    ],
  },
]

export const pad = (n: number) => String(n).padStart(2, '0')
