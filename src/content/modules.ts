import { conectoresYFrases } from './conectores-y-frases'
import { pruebaConectores } from './conectores-y-frases/prueba'
import { gramaticaEsencial } from './gramatica-esencial'
import { javaAFondo } from './java-a-fondo'
import { pruebaGramatica } from './gramatica-esencial/prueba'
import { pairProgrammingYCodeReview } from './pair-programming-y-code-review'
import { pruebaPair } from './pair-programming-y-code-review/prueba'
import { reunionesYDecisionesTecnicas } from './reuniones-y-decisiones-tecnicas'
import { pruebaReuniones } from './reuniones-y-decisiones-tecnicas/prueba'
import { laDailyYLasTareas } from './la-daily-y-las-tareas'
import { pruebaDaily } from './la-daily-y-las-tareas/prueba'
import type { Module } from './types'
import { vocabularioDelDiaADia } from './vocabulario-del-dia-a-dia'
import { pruebaVocabulario } from './vocabulario-del-dia-a-dia/prueba'

const icon = (name: string) => `${import.meta.env.BASE_URL}icons/${name}.png`

export const modules: Module[] = [
  {
    id: 1,
    slug: 'gramatica-esencial',
    title: 'Gramática esencial',
    subtitle: 'Artículos, pronombres, ser y estar, y cómo armar una frase',
    icon: icon('book'),
    sections: gramaticaEsencial,
    exam: pruebaGramatica,
  },
  {
    id: 2,
    slug: 'conectores-y-frases',
    title: 'Conectores y frases',
    subtitle: 'Pero, sino, aunque, todavía, ya… para unir ideas',
    icon: icon('puzzle'),
    sections: conectoresYFrases,
    exam: pruebaConectores,
  },
  {
    id: 3,
    slug: 'vocabulario-del-dia-a-dia',
    title: 'Vocabulario del día a día',
    subtitle: 'Presentarte, falsos amigos y leer código en voz alta',
    icon: icon('wave'),
    sections: vocabularioDelDiaADia,
    exam: pruebaVocabulario,
  },
  {
    id: 4,
    slug: 'la-daily-y-las-tareas',
    title: 'La daily y las tareas',
    subtitle: 'Ayer, hoy, bloqueos, tickets y bugs',
    icon: icon('coffee'),
    sections: laDailyYLasTareas,
    exam: pruebaDaily,
  },
  {
    id: 5,
    slug: 'pair-programming-y-code-review',
    title: 'Pair programming y code review',
    subtitle: 'Sugerir, preguntar y comentar un PR',
    icon: icon('headphones'),
    sections: pairProgrammingYCodeReview,
    exam: pruebaPair,
  },
  {
    id: 6,
    slug: 'reuniones-y-decisiones-tecnicas',
    title: 'Reuniones y decisiones técnicas',
    subtitle: 'Explicar arquitectura, opinar y presentar una demo',
    icon: icon('presentation'),
    sections: reunionesYDecisionesTecnicas,
    exam: pruebaReuniones,
  },
  {
    id: 7,
    slug: 'java-a-fondo',
    title: 'Java a fondo',
    subtitle: 'La JVM por dentro, lo básico, concurrencia, microservicios y Spring Boot',
    icon: icon('espresso-machine'),
    sections: javaAFondo,
  },
]

export const findModule = (id: string | number | undefined) => modules.find((m) => m.id === Number(id))
