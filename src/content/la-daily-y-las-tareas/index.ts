import type { Section } from '../types'
import { avisarRetraso } from './avisar-retraso'
import { ayerHoyBloqueos } from './ayer-hoy-bloqueos'
import { historiaMvp } from './historia-mvp'
import { reportarBug } from './reportar-bug'
import { ticketsEstimaciones } from './tickets-estimaciones'

export const laDailyYLasTareas: Section[] = [ayerHoyBloqueos, ticketsEstimaciones, avisarRetraso, reportarBug, historiaMvp]
