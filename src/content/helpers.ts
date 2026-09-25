import type { Module, Section } from './types'

const slugify = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

/** Placeholder for a section whose content has not been written yet. */
export const upcoming = (title: string): Section => ({ slug: slugify(title), title })

export const hasContent = (section: Section) => Boolean(section.blocks?.length || (section.kind === 'exam' && section.quiz))

export const EXAM_SLUG = 'prueba'

const examSection = (module: Module): Section => ({
  slug: EXAM_SLUG,
  kind: 'exam',
  title: 'Prueba del módulo',
  summary: 'Perguntas de todas as seções. Para completar o módulo, acerte todas.',
  quiz: module.exam && { ...module.exam, passScore: 1 },
})

/** Intro is 00, lessons start at 1. */
export const sectionNumber = (module: Module, section: Section) =>
  section.kind === 'intro' ? 0 : module.sections.filter((s) => s.kind !== 'intro').indexOf(section) + 1

/** Sections that can be completed (everything except the intro). */
export const countsForProgress = (section: Section) => section.kind !== 'intro'

/** Lesson sections followed by the module exam. */
export const moduleSections = (module: Module) => [...module.sections, examSection(module)]

export const pad = (n: number) => String(n).padStart(2, '0')
