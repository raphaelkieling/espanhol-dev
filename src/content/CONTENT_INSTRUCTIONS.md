# Content instructions

How to write and add course content. The site is a 7-day course that gets Brazilian (Portuguese-speaking) developers working day to day in Spanish.

## Audience and goal

- Readers are developers who speak Portuguese and may not know formal grammar rules.
- Every section should make them better at speaking and writing Spanish **at work**: dailies, PRs, Slack, meetings, pair programming.
- Respect their time. Teach what they will actually use and skip rare cases, exceptions of exceptions and literary Spanish.
- Never describe the course's purpose on the site, and don't use slogans or motivational filler. Just teach.

## Language

| Where | Language |
|---|---|
| Explanations, headings of explanations, notes, quiz `explanation` | Brazilian Portuguese |
| Examples, quiz prompts and options (except translation prompts), UI labels | Spanish |
| Section `title` | Spanish |
| Section `summary` | Portuguese |

- Use **Latin American Spanish**: `ustedes` (never `vosotros` forms like `usáis`), `computadora`, `celular`, `tomar` instead of `coger`.
- When Spain does something differently that the learner will hear at work, add a short `note` titled "Na Espanha". Don't build lessons around it.
- Treat the reader as `tú` in examples, the way tech teams talk.
- Examples should sound like real work: tickets, deploys, PRs, bugs, meetings, logs. Avoid textbook topics like the beach or the family.

## File layout

```
src/content/
  types.ts                 content model (Block, Question, Quiz, Section, Module)
  helpers.ts               upcoming(), hasContent(), moduleSections(), sectionNumber()…
  modules.ts               the list of modules
  <module-slug>/
    index.ts               ordered list of the module's sections
    <section-slug>.ts      one file per section
    prueba.ts              the module exam (a Quiz)
```

## Adding a section

1. Create `src/content/<module-slug>/<section-slug>.ts` that exports a `Section`. Use `articulos.ts` as a reference.
2. In the module's `index.ts`, replace the matching `upcoming('…')` with the import.
3. Run `npm run build`.

Sections still defined with `upcoming(title)` show as "Próximamente" and can't be opened.

## Section anatomy

```ts
export const example: Section = {
  slug: 'kebab-case-no-accents',
  title: 'Título en español',
  summary: 'Uma frase em português dizendo o que a pessoa vai aprender.',
  blocks: [ /* explanation */ ],
  quiz: { questions: [ /* 4–5 questions */ ] },
}
```

- **Slug:** stable, lowercase, no accents. It is the URL and the progress key (`<module>/<section>`), so don't rename it once published.
- **Length:** aim for a 5–10 minute read. If a topic needs more, split it into two sections.
- **Flow:** a short text, then a table or examples, then a note about the most common mistake a Portuguese speaker makes. Repeat per sub-topic under a `heading`.

### Blocks

| Type | Use for |
|---|---|
| `heading` | Sub-topics inside the section. Short. |
| `text` | 1–3 sentences. If it gets longer, it probably should be a table or examples. |
| `table` | Conjugations, Portuguese → Spanish comparisons, rules with an example each. Keep it to about 3 columns and up to 10 rows. Optional `caption` for a one-line takeaway. |
| `examples` | Spanish sentences (`es`) with an optional Portuguese translation (`pt`). 2–4 items. |
| `note` | `tone: 'warning'` for common mistakes and false friends. `tone: 'tip'` for shortcuts and context. Optional short `title`. |

### Inline marks

All text fields accept:

- `**bold**` to highlight the word being taught. Bold the target form only, not whole sentences.
- `~~strike~~` for the wrong form, usually followed by `→` and the right one: `~~Reviso él~~ → **Lo** reviso.`

## Quizzes

- **Every lesson section has a quiz** of 4–5 questions. The default pass score is 80% (`passScore: 0.8`).
- Each question has one clearly correct option, usually out of 3. Double-check that no distractor is also acceptable Spanish.
- Distractors should be the mistakes a Portuguese speaker really makes (`a el`, `vou a`, `también no`), not random words.
- Only ask about what the section taught.
- Always write an `explanation`: one sentence in Portuguese with the rule and the right form in bold.
- `answer` is the 0-based index of the correct option. Vary its position across questions.
- Two prompt styles work well: fill in the gap (`___ base de datos está caída.`) and a Portuguese sentence for picking the right Spanish translation.

## Module exam

- Every module ends with an exam, set as `exam` on the module in `modules.ts`, with the questions in `<module-slug>/prueba.ts`.
- The site adds it as the last section automatically ("Prueba del módulo", slug `prueba`) and shows it in beige, separate from the list.
- **10 questions** that mix every lesson section of the module.
- Passing requires **every answer to be right** (enforced by the code, so don't set `passScore`). That makes ambiguity even more costly: every question needs exactly one correct answer.
- Passing the exam shows the check on the module's home card.

## Intro sections

- A module can open with a section of `kind: 'intro'`. It is numbered `00`, has no quiz and doesn't count toward progress.
- Use it for context, not grammar (for example, "El español en el mundo").

## Adding a module

Add an entry to `modules.ts` with `id`, `slug`, `title`, `subtitle`, `days`, `icon`, `sections` and later `exam`. The icon is a 320px PNG from [thiings.co](https://www.thiings.co/things) saved in `public/icons/` and referenced with `icon('<name>')`.

## Checklist before publishing

- [ ] Explanations are in Portuguese, examples in Latin American Spanish.
- [ ] No rare rules. Everything is something the reader will say or hear at work.
- [ ] The most common Portuguese-speaker mistake is covered in a `warning` note.
- [ ] Quiz has 4–5 questions (the exam has 10), each with one unambiguous answer and an explanation.
- [ ] The correct answer isn't always in the same position.
- [ ] `npm run build` passes.
