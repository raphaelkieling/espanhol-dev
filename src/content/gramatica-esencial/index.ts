import { upcoming } from '../helpers'
import type { Section } from '../types'
import { articulos } from './articulos'
import { generos } from './generos'
import { pronombres } from './pronombres'

export const gramaticaEsencial: Section[] = [
  articulos,
  generos,
  pronombres,
  upcoming('Ser, estar, hay y tener'),
  upcoming('Presente, pretérito e ir a + infinitivo'),
  upcoming('Orden de la frase, negación y preguntas'),
]
