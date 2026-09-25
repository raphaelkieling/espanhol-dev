import type { Section } from './types'

const slugify = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

/** Placeholder for a section whose content has not been written yet. */
export const upcoming = (title: string): Section => ({ slug: slugify(title), title })

export const hasContent = (section: Section) => Boolean(section.blocks?.length)

export const pad = (n: number) => String(n).padStart(2, '0')
