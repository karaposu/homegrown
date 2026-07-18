// P1 — the data organ. Loads a venture-atlas/1 snapshot, runs the contract's
// loader shim, and derives the view-side indexes. The data file is never
// mutated; every derivation lives here (record → schema → shim → component).

export const SCHEMA = 'venture-atlas/1'
const DAY = 86400000

export async function loadAtlas(url = 'data.json') {
  const res = await fetch(url)
  if (!res.ok) throw new AtlasError(`could not fetch ${url} (HTTP ${res.status})`, null)
  const raw = await res.json()
  if (raw.schema !== SCHEMA) {
    throw new AtlasError(`schema mismatch: found "${raw.schema}", expected "${SCHEMA}"`, raw)
  }
  return shim(raw)
}

export class AtlasError extends Error {
  constructor(message, raw) {
    super(message)
    this.raw = raw
  }
}

// The ~20-line shim from the contract finding: ISO -> ms, counts from the
// envelope, body text ?? href. Plus the derived indexes (the internal data API).
function shim(raw) {
  const nodes = raw.nodes.map((n) => ({
    ...n,
    createdMs: Date.parse(n.createdAt),
    lastMs: Date.parse(n.lastWorkedAt),
    eventsMs: (n.events || []).map((e) => Date.parse(e)),
  }))

  const byId = new Map(nodes.map((n) => [n.id, n]))

  const degree = new Map()
  const edgesByNode = new Map() // both directions; includes raw-target edges (for detail lists)
  const bump = (id, e) => {
    degree.set(id, (degree.get(id) || 0) + 1)
    if (!edgesByNode.has(id)) edgesByNode.set(id, [])
    edgesByNode.get(id).push(e)
  }
  const drawable = { continuesFrom: [], related: [], other: [] }
  for (const e of raw.edges) {
    bump(e.source, e)
    if (e.target && byId.has(e.target)) {
      bump(e.target, e)
      if (e.type === 'continues-from') drawable.continuesFrom.push(e)
      else if (e.type === 'related') drawable.related.push(e)
      else drawable.other.push(e)
    }
  }

  const groups = raw.groups || []
  const groupById = new Map(groups.map((g) => [g.id, g]))

  const nowMs = Date.parse(raw.generatedAt)
  let minLast = Infinity
  let maxDays = 0
  for (const n of nodes) {
    minLast = Math.min(minLast, n.lastMs)
    maxDays = Math.max(maxDays, (nowMs - n.lastMs) / DAY)
  }
  const staleDomain = { maxDays: Math.max(1, maxDays), nowMs }

  const recent = [...nodes].sort((a, b) => b.lastMs - a.lastMs).slice(0, 10)

  // The route layer (gate-approved): per-node open counts + the corpus-wide
  // Open Field list. Rows come straight from each folder's routelister.md table;
  // missing columns stay undefined and render as an em-dash — never invented.
  const openCount = new Map()
  const openField = []
  for (const n of nodes) {
    let c = 0
    for (const r of n.openRoutes || []) {
      if (r.ticked) continue
      c += 1
      openField.push({ ...r, nodeId: n.id, nodeTitle: n.title, lastMs: n.lastMs })
    }
    if (c > 0) openCount.set(n.id, c)
  }
  openField.sort(fieldOrder('ess'))

  return {
    raw,
    nodes,
    byId,
    degree,
    edgesByNode,
    drawable,
    groups,
    groupById,
    staleDomain,
    recent,
    openCount,
    openField,
    counts: raw.counts,
    anomalies: raw.anomalies,
    generatedAt: raw.generatedAt,
    source: raw.source,
    snapshotAgeDays: Math.max(0, Math.floor((Date.now() - nowMs) / DAY)),
  }
}

// ---- route-row ordering (attributive tags -> sortable ranks) ----
// Essentiality-first is the default; rows from pre-Essentiality tables (the old
// 6-column format) rank after tagged rows and fall back to Priority, per the
// gate's missing-column policy.

export function essRank(s) {
  if (!s) return 3
  const t = s.toLowerCase()
  if (t.startsWith('core')) return 0
  if (t.startsWith('supporting')) return 1
  if (t.startsWith('peripheral')) return 2
  return 3
}
export function priRank(s) {
  if (!s) return 5
  const t = s.replace(/\*/g, '').trim().toUpperCase()
  if (t.startsWith('MED-HIGH')) return 1
  if (t.startsWith('HIGH')) return 0
  if (t.startsWith('MED')) return 2
  if (t.startsWith('LOW-MED')) return 3
  if (t.startsWith('LOW')) return 4
  return 5
}
export function fieldOrder(key) {
  if (key === 'pri') return (a, b) => priRank(a.priority) - priRank(b.priority) || essRank(a.essentiality) - essRank(b.essentiality) || b.lastMs - a.lastMs
  if (key === 'age') return (a, b) => b.lastMs - a.lastMs || essRank(a.essentiality) - essRank(b.essentiality)
  if (key === 'inq') return (a, b) => a.nodeId.localeCompare(b.nodeId) || essRank(a.essentiality) - essRank(b.essentiality)
  // 'ess' — the default: essentiality, then priority, then recency
  return (a, b) => essRank(a.essentiality) - essRank(b.essentiality) || priRank(a.priority) - priRank(b.priority) || b.lastMs - a.lastMs
}

// ---- small shared formatters (the demo's, adapted) ----

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
export function fmtDate(ms) {
  const d = new Date(ms)
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}
export function relDate(ms, nowMs = Date.now()) {
  const days = Math.max(0, Math.floor((nowMs - ms) / DAY))
  if (days === 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 30) return `${days} days ago`
  const mo = Math.round(days / 30)
  if (mo < 12) return mo === 1 ? '1 month ago' : `${mo} months ago`
  return `${Math.round(mo / 12)} years ago`
}

// staleness 0 (worked now) .. 1 (oldest in corpus) — the RELATIVE ramp's input
export function staleness(node, staleDomain) {
  const days = (staleDomain.nowMs - node.lastMs) / DAY
  return Math.min(1, Math.max(0, days / staleDomain.maxDays))
}

export function truncate(s, n = 36) {
  return s.length > n ? s.slice(0, n - 1) + '…' : s
}

// grouping lenses — all derived, never data (grouping stays optional all the way down)
export function lensGroups(atlas, lens) {
  if (lens === 'flat') return []
  if (lens === 'month') {
    const by = new Map()
    for (const n of atlas.nodes) {
      const key = n.createdAt.slice(0, 7)
      if (!by.has(key)) by.set(key, [])
      by.get(key).push(n.id)
    }
    return [...by.entries()]
      .sort()
      .map(([key, members]) => ({ id: `m:${key}`, label: key, members, root: members[0] }))
  }
  return atlas.groups // 'chains' (default) — the data's own venture components
}
