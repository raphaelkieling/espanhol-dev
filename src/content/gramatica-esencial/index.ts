import type { Section } from '../types'
import { articulos } from './articulos'
import { espanolEnElMundo } from './espanol-en-el-mundo'
import { generos } from './generos'
import { leyendaElDorado } from './leyenda-el-dorado'
import { ordenNegacionPreguntas } from './orden-negacion-preguntas'
import { pronombres } from './pronombres'
import { serEstarHayTener } from './ser-estar-hay-tener'
import { tiempos } from './tiempos'

export const gramaticaEsencial: Section[] = [
  espanolEnElMundo,
  articulos,
  generos,
  pronombres,
  serEstarHayTener,
  tiempos,
  ordenNegacionPreguntas,
  leyendaElDorado,
]
