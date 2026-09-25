import type { Section } from '../types'
import { explicarArquitectura } from './explicar-arquitectura'
import { historiaDemo } from './historia-demo'
import { opinar } from './opinar'
import { presentarDemo } from './presentar-demo'

export const reunionesYDecisionesTecnicas: Section[] = [explicarArquitectura, opinar, presentarDemo, historiaDemo]
