import { conectoresYFrases } from './conectores-y-frases'
import { pruebaConectores } from './conectores-y-frases/prueba'
import { gramaticaEsencial } from './gramatica-esencial'
import { pruebaGramatica } from './gramatica-esencial/prueba'
import { upcoming } from './helpers'
import type { Module } from './types'

const icon = (name: string) => `${import.meta.env.BASE_URL}icons/${name}.png`

export const modules: Module[] = [
  {
    id: 1,
    slug: 'gramatica-esencial',
    days: 'Días 1–2',
    title: 'Gramática esencial',
    subtitle: 'Artículos, pronombres, ser y estar, y cómo armar una frase',
    icon: icon('book'),
    sections: gramaticaEsencial,
    exam: pruebaGramatica,
  },
  {
    id: 2,
    slug: 'conectores-y-frases',
    days: 'Día 3',
    title: 'Conectores y frases',
    subtitle: 'Pero, sino, aunque, todavía, ya… para unir ideas',
    icon: icon('puzzle'),
    sections: conectoresYFrases,
    exam: pruebaConectores,
  },
  {
    id: 3,
    slug: 'vocabulario-del-dia-a-dia',
    days: 'Día 4',
    title: 'Vocabulario del día a día',
    subtitle: 'Presentarte, falsos amigos y leer código en voz alta',
    icon: icon('wave'),
    sections: [
      upcoming('Presentarte al equipo'),
      upcoming('Falsos amigos'),
      upcoming('Símbolos y código en voz alta'),
      upcoming('Funciones, arrays y valores'),
    ],
  },
  {
    id: 4,
    slug: 'la-daily-y-las-tareas',
    days: 'Día 5',
    title: 'La daily y las tareas',
    subtitle: 'Ayer, hoy, bloqueos, tickets y bugs',
    icon: icon('coffee'),
    sections: [
      upcoming('Ayer, hoy y bloqueos'),
      upcoming('Tickets, prioridades y estimaciones'),
      upcoming('Avisar que algo se retrasa'),
      upcoming('Reportar un bug o un incidente'),
    ],
  },
  {
    id: 5,
    slug: 'pair-programming-y-code-review',
    days: 'Día 6',
    title: 'Pair programming y code review',
    subtitle: 'Sugerir, preguntar y comentar un PR',
    icon: icon('headphones'),
    sections: [
      upcoming('Sugerir sin imponer'),
      upcoming('Pedir que repitan o expliquen'),
      upcoming('Llevar el teclado'),
      upcoming('Comentarios de PR y mensajes de Slack'),
    ],
  },
  {
    id: 6,
    slug: 'reuniones-y-decisiones-tecnicas',
    days: 'Día 7',
    title: 'Reuniones y decisiones técnicas',
    subtitle: 'Explicar arquitectura, opinar y presentar una demo',
    icon: icon('presentation'),
    sections: [
      upcoming('Explicar arquitectura y trade-offs'),
      upcoming('Opinar, estar de acuerdo y discrepar'),
      upcoming('Presentar una demo'),
    ],
  },
]

export const findModule = (id: string | number | undefined) => modules.find((m) => m.id === Number(id))
