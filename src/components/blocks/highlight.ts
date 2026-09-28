import type { CodeLang } from '../../content/types'

/**
 * Tiny syntax highlighter for the code block: comments, strings, numbers,
 * annotations, keywords and type names. Good enough for short lesson snippets,
 * not a parser.
 */

type Kind = 'kw' | 'str' | 'com' | 'num' | 'ann' | 'type'
export type Token = { kind?: Kind; text: string }

/** 'word' rules become a keyword, a type name (Capitalized) or plain text. Patterns must not use capturing groups. */
type Rule = [kind: Kind | 'word', pattern: string]
type Grammar = { rules: Rule[]; keywords?: string; types?: boolean; ignoreCase?: boolean }

const C_COMMENT = String.raw`\/\/[^\n]*|\/\*[\s\S]*?\*\/`
const HASH_COMMENT = String.raw`(?<![^\s])#[^\n]*`
const DOUBLE = String.raw`"(?:\\.|[^"\\\n])*"`
const SINGLE = String.raw`'(?:\\.|[^'\\\n])*'`
const BACKTICK = '`[^`]*`'
const TEXT_BLOCK = '"""[\\s\\S]*?"""'
const NUMBER = String.raw`\b(?:0[xX][\da-fA-F_]+|\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?[lLfFdDmMsS]?)\b`
const WORD = String.raw`[A-Za-z_$][\w$]*`
const ANNOTATION = String.raw`@[A-Za-z_][\w.]*`

const cLike = (keywords: string, strings: string[], extra: Rule[] = []): Grammar => ({
  rules: [['com', C_COMMENT], ...strings.map((s): Rule => ['str', s]), ...extra, ['num', NUMBER], ['word', WORD]],
  keywords,
  types: true,
})

const grammars: Record<CodeLang, Grammar> = {
  java: cLike(
    'abstract assert boolean break byte case catch char class continue default do double else enum extends final finally float for if implements import instanceof int interface long new package permits private protected public record return sealed short static super switch synchronized this throw throws transient try var void volatile when while yield true false null',
    [TEXT_BLOCK, DOUBLE, SINGLE],
    [['ann', ANNOTATION]],
  ),
  kotlin: cLike(
    'as break class companion continue data do else false for fun if in interface is null object override package private return sealed suspend this throw true try val var when while',
    [TEXT_BLOCK, DOUBLE, SINGLE],
    [['ann', ANNOTATION]],
  ),
  ts: cLike(
    'as async await break case catch class const continue default delete do else enum export extends false finally for from function if implements import in instanceof interface let new null of private protected public readonly return satisfies static super switch this throw true try type typeof undefined var void while yield number string boolean unknown never any',
    [DOUBLE, SINGLE, BACKTICK],
    [['ann', ANNOTATION]],
  ),
  go: cLike(
    'break case chan const continue default defer else fallthrough for func go goto if import interface map package range return select struct switch type var nil true false',
    [DOUBLE, BACKTICK, SINGLE],
  ),
  csharp: cLike(
    'abstract as async await base bool break case catch class const continue decimal default do double else enum false finally for foreach get if in init int interface internal is lock long namespace new null object out override private protected public readonly record required return sealed set static string struct switch this throw true try using var virtual void when while with yield',
    [DOUBLE, SINGLE],
  ),
  proto: cLike(
    'syntax package import option message service rpc returns stream enum repeated optional oneof map reserved string bool bytes double float int32 int64 uint32 uint64',
    [DOUBLE, SINGLE],
  ),
  sql: {
    rules: [['com', String.raw`--[^\n]*`], ['str', SINGLE], ['num', NUMBER], ['word', WORD]],
    keywords:
      'SELECT FROM WHERE INSERT INTO VALUES UPDATE SET DELETE CREATE TABLE PRIMARY KEY NOT NULL AND OR ORDER BY LIMIT FOR BEGIN COMMIT ROLLBACK JOIN LEFT ON AS GROUP HAVING INDEX UNIQUE DEFAULT REFERENCES IN IS SKIP LOCKED NOWAIT RETURNING TRANSACTION ISOLATION LEVEL READ COMMITTED REPEATABLE SERIALIZABLE CONFLICT DO NOTHING EXISTS IF VARCHAR TEXT BIGINT INT INTEGER UUID TIMESTAMP TIMESTAMPTZ JSONB BIGSERIAL BOOLEAN NUMERIC TRUE FALSE NOW',
    ignoreCase: true,
  },
  yaml: {
    rules: [
      ['com', HASH_COMMENT],
      ['kw', String.raw`(?<=^[ \t]*(?:- )?)[\w./-]+(?=:(?:\s|$))`],
      ['str', DOUBLE],
      ['str', SINGLE],
      ['num', NUMBER],
      ['word', WORD],
    ],
    keywords: 'true false null',
  },
  properties: {
    rules: [
      ['com', String.raw`^[ \t]*[#!][^\n]*`],
      ['kw', String.raw`^[ \t]*[\w.\-[\]]+(?=[ \t]*[=:])`],
      ['num', NUMBER],
      ['word', WORD],
    ],
    keywords: 'true false',
  },
  bash: {
    rules: [['com', HASH_COMMENT], ['str', DOUBLE], ['str', SINGLE], ['num', NUMBER], ['word', WORD]],
    keywords: 'if then else fi for do done in case esac export while function return',
  },
  dockerfile: {
    rules: [
      ['com', String.raw`^[ \t]*#[^\n]*`],
      ['kw', String.raw`^[ \t]*(?:FROM|RUN|COPY|ADD|WORKDIR|ENTRYPOINT|CMD|ENV|ARG|EXPOSE|USER|LABEL|HEALTHCHECK)\b|\bAS\b`],
      ['str', DOUBLE],
      ['str', SINGLE],
      ['num', NUMBER],
    ],
  },
  json: {
    rules: [
      ['kw', String.raw`"(?:\\.|[^"\\\n])*"(?=\s*:)`],
      ['str', DOUBLE],
      ['num', NUMBER],
      ['word', WORD],
    ],
    keywords: 'true false null',
  },
  xml: {
    rules: [['com', String.raw`<!--[\s\S]*?-->`], ['kw', String.raw`<\/?[\w:.-]+|\/?>`], ['str', DOUBLE]],
  },
  http: {
    rules: [
      ['kw', String.raw`^(?:GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\b|\bHTTP\/[\d.]+`],
      ['ann', String.raw`^[\w-]+(?=:)`],
      ['str', String.raw`"(?:\\.|[^"\\\n])*"`],
      ['num', NUMBER],
    ],
  },
  text: { rules: [] },
}

const compiled = new Map<CodeLang, { regex: RegExp; keywords: Set<string> }>()

const compile = (lang: CodeLang) => {
  let entry = compiled.get(lang)
  if (!entry) {
    const g = grammars[lang]
    entry = {
      regex: new RegExp(g.rules.map(([, pattern]) => `(${pattern})`).join('|'), 'gm'),
      keywords: new Set(g.keywords?.split(' ')),
    }
    compiled.set(lang, entry)
  }
  return entry
}

export function highlight(code: string, lang: CodeLang): Token[] {
  const g = grammars[lang]
  if (!g.rules.length) return [{ text: code }]
  const { regex, keywords } = compile(lang)
  const tokens: Token[] = []
  let last = 0
  for (const match of code.matchAll(regex)) {
    const text = match[0]
    if (!text) continue
    if (match.index > last) tokens.push({ text: code.slice(last, match.index) })
    const [kind] = g.rules[match.slice(1).findIndex((group) => group !== undefined)]
    if (kind !== 'word') tokens.push({ kind, text })
    else if (keywords.has(g.ignoreCase ? text.toUpperCase() : text)) tokens.push({ kind: 'kw', text })
    // Capitalized words with a lowercase letter are type names; ALL_CAPS constants stay plain
    else if (g.types && /^[A-Z](?=.*[a-z])/.test(text)) tokens.push({ kind: 'type', text })
    else tokens.push({ text })
    last = match.index + text.length
  }
  if (last < code.length) tokens.push({ text: code.slice(last) })
  return tokens
}

/**
 * Snippets are written as indented template literals in the content files.
 * Drop the blank first and last lines and the indentation every line shares.
 */
export function dedent(code: string) {
  const lines = code.replace(/^\s*\n|\n\s*$/g, '').split('\n')
  const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^ */)![0].length))
  return lines.map((l) => l.slice(indent)).join('\n')
}
