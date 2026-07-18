// P3 — the reading organ. Renders a REAL finding faithfully (marked+DOMPurify),
// shows the node's meta, events, and its FULL edge list (file/prose targets
// listed honestly, never drawn), and links back to the file (copy repoPath).
// Group and root tiles are synthetic — mechanical rollups, never fabricated prose.

import React, { useEffect, useMemo, useState } from 'react'
import { fmtDate, relDate, truncate } from './data.js'
import { renderMarkdown } from './md.js'

const TYPE_LABELS = {
  'continues-from': 'continues from',
  'related': 'related',
  'superseded-by': 'superseded by',
  'synthesizes-from': 'synthesizes from',
  'grounds-in': 'grounds in',
  'branch-of': 'branch of',
}

export default function Detail({ atlas, id, onBack, onOpen, onFly, roadApi }) {
  const node = atlas.byId.get(id)
  const group = node?.group ? atlas.groupById.get(node.group) : atlas.groupById.get(id)

  if (node) return <NodeDetail atlas={atlas} node={node} onBack={onBack} onOpen={onOpen} onFly={onFly} />
  if (group) return <GroupDetail atlas={atlas} group={group} onBack={onBack} onOpen={onOpen} roadApi={roadApi} />
  return <RootDetail atlas={atlas} onBack={onBack} />
}

function CopyPath({ path, label = 'copy path' }) {
  const [done, setDone] = useState(false)
  return (
    <button
      className="copy-btn"
      onClick={() => {
        navigator.clipboard?.writeText(path)
        setDone(true)
        setTimeout(() => setDone(false), 1500)
      }}
      title={path}
    >
      {done ? '✓ copied' : label}
    </button>
  )
}

function MetaRow({ k, children }) {
  return (
    <div className="meta-row">
      <span className="meta-k">{k}</span>
      <span className="meta-v">{children}</span>
    </div>
  )
}

function EdgeList({ atlas, id, onOpen, onFly }) {
  const edges = atlas.edgesByNode.get(id) || []
  if (!edges.length) return null
  const byType = new Map()
  for (const e of edges) {
    if (!byType.has(e.type)) byType.set(e.type, [])
    byType.get(e.type).push(e)
  }
  return (
    <div className="sublist">
      <div className="sublist-h">RELATIONSHIPS ({edges.length})</div>
      {[...byType.entries()].map(([type, list]) => (
        <div key={type} className="edge-group">
          <div className="edge-type">{TYPE_LABELS[type] || type}</div>
          {list.map((e, i) => {
            const otherId = e.source === id ? e.target : e.source
            const dirIn = e.source !== id
            const resolved = otherId && atlas.byId.has(otherId)
            return (
              <div key={i} className="edge-row">
                {resolved ? (
                  <button className="link" onClick={() => onOpen(otherId)}>
                    {dirIn ? '← ' : ''}{truncate(atlas.byId.get(otherId).title, 52)}
                  </button>
                ) : (
                  <span className="edge-raw" title="a file or prose reference — not a map node">
                    📄 {truncate(e.targetRaw || '(unspecified)', 52)}
                  </span>
                )}
                {e.note && <div className="edge-note">{e.note}</div>}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

function EventsStrip({ node }) {
  if (!node.eventsMs?.length) return null
  return (
    <div className="events-strip" title={`${node.eventsMs.length} recorded steps`}>
      {node.eventsMs.map((_, i) => <span key={i} className="ev-dot" />)}
    </div>
  )
}

// the inquiry's own route-map rows, verbatim (the flags' click-through target):
// direction + type + Priority/Essentiality as written; ✓ rows dimmed; missing
// columns shown as an em-dash — the parse never invents values.
function RouteList({ node }) {
  const routes = node.openRoutes
  if (!routes || !routes.length) return null
  const open = routes.filter((r) => !r.ticked).length
  return (
    <div className="sublist">
      <div className="sublist-h">ROUTE MAP ({open} open / {routes.length})</div>
      {routes.map((r, i) => (
        <div key={i} className={`route-row ${r.ticked ? 'done' : ''}`}>
          <span className="route-dir">
            {r.ticked ? '✓ ' : ''}{r.ordinal ? `${r.ordinal} · ` : ''}{r.direction}
          </span>
          <span className="route-tags">
            {r.engagementType || '—'} · {r.priority || '—'} · {r.essentiality || '—'}
          </span>
        </div>
      ))}
    </div>
  )
}

function NodeDetail({ atlas, node, onBack, onOpen, onFly }) {
  const [rendered, setRendered] = useState(null)
  useEffect(() => {
    let live = true
    const finish = (text) => { if (live) setRendered(renderMarkdown(text)) }
    if (node.body?.text != null) finish(node.body.text)
    else if (node.body?.href) {
      fetch(node.body.href).then((r) => r.text()).then(finish)
        .catch(() => live && setRendered({ meta: {}, html: '<p><em>body could not be loaded</em></p>' }))
    } else setRendered({ meta: {}, html: '<p><em>no body file existed for this folder</em></p>' })
    return () => { live = false }
  }, [node])

  const group = node.group ? atlas.groupById.get(node.group) : null
  const meta = rendered?.meta || {}

  return (
    <div className="detail">
      <div className="detail-top">
        <button className="back-btn" onClick={onBack}>← FULL VIEW</button>
        <span className="crumb">
          {group ? <button className="link" onClick={() => onOpen(group.id)}>{truncate(group.label, 30)}</button> : 'standalone'}
          {' / '}<b>{truncate(node.title, 60)}</b>
        </span>
      </div>
      <div className="detail-body">
        <aside className="info">
          <div className="kind-badge inquiry">INQUIRY · {node.status.toUpperCase()}</div>
          <h1 className="node-title">{node.title}</h1>
          <div className="chips">
            {node.flowType && <span className="chip">{node.flowType}</span>}
            {meta.model && <span className="chip">{meta.model}</span>}
          </div>
          <div className="meta">
            <MetaRow k="Created">{fmtDate(node.createdMs)} <em>{relDate(node.createdMs)}</em></MetaRow>
            <MetaRow k="Last worked on">{fmtDate(node.lastMs)} <em>{relDate(node.lastMs)}</em></MetaRow>
            <MetaRow k="Steps"><EventsStrip node={node} /></MetaRow>
            <MetaRow k="File">
              <span className="mono">{node.body?.file || '—'}</span> <CopyPath path={node.body?.repoPath || node.id} />
            </MetaRow>
            <MetaRow k="Resume">
              {/* the tee-up: dispatch stays the human's act — the map only readies it */}
              <CopyPath path={`/traverse devdocs/inquiries/${node.id}/`} label="copy resume command" />
            </MetaRow>
          </div>
          <RouteList node={node} />
          <EdgeList atlas={atlas} id={node.id} onOpen={onOpen} onFly={onFly} />
        </aside>
        <section className="mdwrap">
          <div className="md-file"><span className="md-chip">{node.body?.repoPath || node.id}</span></div>
          {rendered
            ? <div className="md" dangerouslySetInnerHTML={{ __html: rendered.html }} />
            : <p className="loading-note">rendering…</p>}
        </section>
      </div>
    </div>
  )
}

// synthetic VENTURE tile: a mechanical member table — no fabricated prose
function GroupDetail({ atlas, group, onBack, onOpen, roadApi }) {
  const members = group.members.map((m) => atlas.byId.get(m)).filter(Boolean)
  const last = members.reduce((a, b) => (a.lastMs > b.lastMs ? a : b))
  return (
    <div className="detail">
      <div className="detail-top">
        <button className="back-btn" onClick={onBack}>← FULL VIEW</button>
        {roadApi?.playVenture && (
          <button
            className="back-btn replay"
            title="replay this venture on the road — play bounded to its span (dates are facts; nothing is timed)"
            onClick={() => { roadApi.playVenture(group.id); onBack() }}
          >▶ REPLAY THIS VENTURE</button>
        )}
        <span className="crumb"><b>{group.label}</b></span>
      </div>
      <div className="detail-body">
        <aside className="info">
          <div className="kind-badge venture">VENTURE (chain)</div>
          <h1 className="node-title">{truncate(group.label, 60)}</h1>
          <div className="meta">
            <MetaRow k="Members">{members.length}</MetaRow>
            <MetaRow k="Last worked on">{fmtDate(last.lastMs)} <em>{relDate(last.lastMs)} · via {truncate(last.title, 30)}</em></MetaRow>
            <MetaRow k="Reading">a thread-continuity chain of {members.length} traverses</MetaRow>
          </div>
        </aside>
        <section className="mdwrap">
          <div className="md">
            <h1>{group.label}</h1>
            <table>
              <thead><tr><th>traverse</th><th>created</th><th>last worked</th></tr></thead>
              <tbody>
                {members.sort((a, b) => a.createdMs - b.createdMs).map((m) => (
                  <tr key={m.id}>
                    <td><button className="link" onClick={() => onOpen(m.id)}>{truncate(m.title, 60)}</button></td>
                    <td>{fmtDate(m.createdMs)}</td>
                    <td>{relDate(m.lastMs)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

// synthetic ATLAS tile: the envelope rendered — the snapshot's honest cover page
function RootDetail({ atlas, onBack }) {
  const a = atlas.anomalies
  return (
    <div className="detail">
      <div className="detail-top">
        <button className="back-btn" onClick={onBack}>← FULL VIEW</button>
        <span className="crumb"><b>Venture Atlas</b></span>
      </div>
      <div className="detail-body">
        <aside className="info">
          <div className="kind-badge atlas">ATLAS</div>
          <h1 className="node-title">the snapshot</h1>
          <div className="meta">
            <MetaRow k="Generated">{atlas.generatedAt}</MetaRow>
            <MetaRow k="Source">{atlas.source.root}{atlas.source.commit ? ` @ ${atlas.source.commit}` : ''}</MetaRow>
            <MetaRow k="Counts">{atlas.counts.nodes} nodes · {atlas.counts.edges} edges · {atlas.counts.groups} chains</MetaRow>
            <MetaRow k="Open field">{atlas.counts.openRouteRows ?? 0} open of {atlas.counts.routeRows ?? 0} route rows</MetaRow>
          </div>
        </aside>
        <section className="mdwrap">
          <div className="md">
            <h1>What the parse did — honestly</h1>
            <table>
              <tbody>
                <tr><td>date-only History stamps (midnight-truncated)</td><td>{a.dateOnlyStamps}</td></tr>
                <tr><td>clamped lastWorkedAt values</td><td>{a.clampedLastWorked}</td></tr>
                <tr><td>edges pointing at files/prose (listed, not drawn)</td><td>{a.unresolvedEdgeTargets}</td></tr>
                <tr><td>folders with no body file</td><td>{a.missingBodies}</td></tr>
                <tr><td>route-maps found but with no parseable table (listed nowhere — counted here)</td><td>{a.unparsedRouteTables ?? 0}</td></tr>
                <tr><td>directories skipped by the include filter</td><td>{(a.skippedDirs || []).join(', ') || '—'}</td></tr>
              </tbody>
            </table>
            <p>Every number above is computed from what was actually emitted — the map does not lie by omission.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
