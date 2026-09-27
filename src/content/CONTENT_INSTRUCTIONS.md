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
  helpers.ts               upcoming(), hasContent(), moduleSections()…
  modules.ts               the list of modules
  words.ts                 vocabulary for the dictionary page
  <module-slug>/
    index.ts               ordered list of the module's sections
    <section-slug>.ts      one file per section
    prueba.ts              the module exam (a Quiz)
```

## Adding a section

1. Create `src/content/<module-slug>/<section-slug>.ts` that exports a `Section`. Use `articulos.ts` as a reference.
2. In the module's `index.ts`, replace the matching `upcoming('…')` with the import.
3. Add the new vocabulary to `words.ts` (see [Dictionary](#dictionary)).
4. Run `npm run build`.

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
- **Flow:** a short text, then a table or examples, then a note about the most common mistake a Portuguese speaker makes. Wrap each sub-topic in its own `card` with a short `title`. Opening text before the first sub-topic goes in a `card` without a title.

### Blocks

| Type | Use for |
|---|---|
| `card` | A white card around one sub-topic. Optional short `title`, and `blocks` with the sub-topic's content. Every explanation block lives inside a card; only `reading` stays outside. |
| `heading` | Legacy. Use a `card` with `title` instead. |
| `text` | 1–3 sentences. If it gets longer, it probably should be a table or examples. |
| `table` | Conjugations, Portuguese → Spanish comparisons, rules with an example each. Keep it to about 3 columns and up to 10 rows. Optional `caption` for a one-line takeaway. |
| `examples` | Spanish sentences (`es`) with an optional Portuguese translation (`pt`). 2–4 items. |
| `note` | `tone: 'warning'` for common mistakes and false friends. `tone: 'tip'` for shortcuts and context. Optional short `title`. |
| `fill` | Typing practice. Each item is a Spanish sentence (`es`) with a `___` gap, the `answer` (a string or a list of accepted alternatives) and an optional Portuguese `pt` that makes the answer unambiguous. Matching ignores case and accents. Put it in its own `card` titled "Practica", after the explanation. |
| `reading` | A short text in Spanish (`paragraphs`) with an optional `title` and `audio`. Use `[[…|…]]` highlights to point at the rules from the module. |

### Inline marks

All text fields accept:

- `**bold**` to highlight the word being taught. Bold the target form only, not whole sentences.
- `~~strike~~` for the wrong form, usually followed by `→` and the right one: `~~Reviso él~~ → **Lo** reviso.`
- `[text](https://…)` links to an external site, opening in a new tab. Use it for tools and references, not inside exercises.
- `[[text|note]]` highlights `text` and shows `note` (Portuguese, a few words) on hover or tap. It's meant for `reading` blocks: `[[al agua|a + el = al]]`.

## Reading sections

A reading puts the module's rules into a real text and is the last lesson of the module, right before the exam. See `gramatica-esencial/leyenda-el-dorado.ts` and `vocabulario-del-dia-a-dia/historia-base-de-datos.ts`.

- Pick something curious: a Latin American legend, story or place, or a short, funny work story told in the first person (a dev who deleted the production database). Pick whatever shows off the module best.
- Match the module's level: use only the grammar taught so far. For example, module 1 has no imperfect tense and no subjunctive.
- Keep it to 150–250 words in 4–5 short paragraphs.
- Highlight 10–15 spots, one per rule, and don't highlight the same rule over and over.
- Facts must be true. Check dates and names.
- After the text, add a small `table` of hard words, then a quiz that mixes comprehension with one or two questions about the highlighted rules.
- Audio: set `audio: 'audio/<slug>.wav'` (any browser format works) and put the file in `public/audio/`. Until the file exists, the player shows "Audio próximamente".

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

## Dictionary

The footer links to `/diccionario`, a table of every word the course teaches. It also has a button to export the list to Anki. The list lives in `src/content/words.ts`.

**Whenever you add or change content, add the new words to `words.ts`.** That includes new sections, readings ("Palavras do texto"), and new words added to existing sections.

```ts
{
  es: 'todavía',
  context: 'Na daily, para dizer o que ainda falta',
  pt: 'ainda',
  examples: ['**Todavía** no terminé el PR.'],
  module: 2,
},
```

- `es`: the word or short expression in dictionary form (`hacer un deploy`, not `hice el deploy`).
- `context`: where or how it's used at work, in Portuguese, under ~70 characters. For false friends, say what it is not.
- `pt`: the meaning in Portuguese, short.
- `examples`: 1–2 Spanish sentences from real work, ideally taken from the lesson, with the word in `**bold**`.
- `module`: the id of the module that teaches it. Keep entries grouped in module order, and don't repeat a word that an earlier module already has.
- Only add words the lessons actually teach. Skip pure grammar (article tables, conjugation endings).

## Adding a module

Add an entry to `modules.ts` with `id`, `slug`, `title`, `subtitle`, `days`, `icon`, `sections` and later `exam`. The icon is a 320px PNG from [thiings.co](https://www.thiings.co/things) saved in `public/icons/` and referenced with `icon('<name>')`.

## Checklist before publishing

- [ ] Explanations are in Portuguese, examples in Latin American Spanish.
- [ ] No rare rules. Everything is something the reader will say or hear at work.
- [ ] The most common Portuguese-speaker mistake is covered in a `warning` note.
- [ ] Quiz has 4–5 questions (the exam has 10), each with one unambiguous answer and an explanation.
- [ ] The correct answer isn't always in the same position.
- [ ] New vocabulary is in `words.ts`.
- [ ] `npm run build` passes.
