// P3 — the reading pipeline: frontmatter -> meta, body -> sanitized HTML.
// Settled at the gate: marked + DOMPurify (pinned), because real findings carry
// tables with pipes inside code spans and <details> blocks with fenced markdown
// inside — exactly the edges a hand parser mis-renders.

import { marked } from 'marked'
import DOMPurify from 'dompurify'

marked.setOptions({ gfm: true, breaks: false })

// Strip YAML frontmatter; return { meta, body }. Meta is displayed as chips,
// never rendered as text (100% of findings carry frontmatter).
export function splitFrontmatter(text) {
  const meta = {}
  if (!text.startsWith('---')) return { meta, body: text }
  const end = text.indexOf('\n---', 3)
  if (end === -1) return { meta, body: text }
  const head = text.slice(3, end).trim()
  for (const line of head.split('\n')) {
    const m = line.match(/^(\w[\w-]*):\s*(.*)$/)
    if (m) meta[m[1]] = m[2]
  }
  return { meta, body: text.slice(end + 4).replace(/^\s*\n/, '') }
}

const PURIFY_OPTS = {
  ADD_TAGS: ['details', 'summary'],
  FORBID_TAGS: ['style', 'script', 'iframe'],
  FORBID_ATTR: ['onerror', 'onclick', 'onload'],
}

export function renderMarkdown(text) {
  const { meta, body } = splitFrontmatter(text)
  const html = DOMPurify.sanitize(marked.parse(body), PURIFY_OPTS)
  return { meta, html }
}
