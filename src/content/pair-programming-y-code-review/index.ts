import type { Section } from '../types'
import { comentariosPrSlack } from './comentarios-pr-slack'
import { historiaPatoDeGoma } from './historia-pato-de-goma'
import { llevarElTeclado } from './llevar-el-teclado'
import { pedirQueRepitan } from './pedir-que-repitan'
import { sugerir } from './sugerir'

export const pairProgrammingYCodeReview: Section[] = [sugerir, pedirQueRepitan, llevarElTeclado, comentariosPrSlack, historiaPatoDeGoma]
