// P4 — the command organ: ranked search (/ focuses), lenses (road default),
// status filters, the recent-10 list, the OPEN FIELD queue (the selecting
// cargo's instrument — corpus-wide open routes, sortable, click = fly-to),
// the scrub-strip minimap + play control (road only), the anomalies badge,
// and counts + snapshot age.

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { relDate, truncate, fieldOrder } from './data.js'

function rankMatches(atlas, q) {
  if (!q) return []
  const needle = q.toLowerCase()
  const scored = []
  for (const n of atlas.nodes) {
    const hay = `${n.title} ${n.slug} ${n.id}`.toLowerCase()
    let score = -1
    if (hay.startsWith(needle)) score = 3
    else if (hay.includes(` ${needle}`) || hay.includes(`_${needle}`) || hay.includes(`-${needle}`)) score = 2
    else if (hay.includes(needle)) score = 1
    if (score > 0) scored.push({ n, score })
  }
  scored.sort((a, b) => b.score - a.score || b.n.lastMs - a.n.lastMs)
  return scored.slice(0, 12).map((s) => s.n)
}

export default function Hud({ atlas, lens, setLens, filters, setFilters, onFly, onOpen, roadApi }) {
  const [q, setQ] = useState('')
  const [showRecent, setShowRecent] = useState(false)
  const [showAnoms, setShowAnoms] = useState(false)
  const [showField, setShowField] = useState(false)
  const [fieldSort, setFieldSort] = useState('ess')
  const inputRef = useRef(null)

  const results = useMemo(() => rankMatches(atlas, q.trim()), [atlas, q])
  const field = useMemo(
    () => [...atlas.openField].sort(fieldOrder(fieldSort)),
    [atlas, fieldSort])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault()
        inputRef.current?.focus()
      }
      if (e.key === 'Escape') { setQ(''); inputRef.current?.blur() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const anomTotal = atlas
    ? atlas.anomalies.unresolvedEdgeTargets + atlas.anomalies.missingBodies + atlas.anomalies.clampedLastWorked
      + (atlas.anomalies.unparsedRouteTables || 0)
    : 0

  return (
    <>
      <div className="hud-tl">
        <div className="hud-title">VENTURE ATLAS</div>
        <div className="hud-sub">
          {atlas.counts.nodes} traverses · {atlas.counts.groups} chains · {atlas.counts.edges} links
          {atlas.snapshotAgeDays > 0 && <span className="hud-age"> · snapshot {atlas.snapshotAgeDays}d old</span>}
        </div>
        <div className="lens-row">
          {['road', 'chains', 'flat'].map((l) => (
            <button key={l} className={`lens-btn ${lens === l ? 'on' : ''}`} onClick={() => setLens(l)}>{l}</button>
          ))}
          <span className="lens-sep" />
          {['complete', 'active', 'superseded'].map((s) => (
            <button
              key={s}
              className={`lens-btn small ${filters[s] !== false ? 'on' : ''}`}
              title={`toggle ${s} nodes`}
              onClick={() => setFilters({ ...filters, [s]: filters[s] === false })}
            >{s}</button>
          ))}
        </div>
      </div>

      <div className="search-wrap">
        <input
          ref={inputRef}
          className="search"
          placeholder="find an inquiry…  ( / )"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && results[0]) { onFly(results[0].id); setQ('') }
          }}
        />
        {results.length > 0 && (
          <div className="search-results">
            {results.map((n) => (
              <button key={n.id} className="result-row" onClick={() => { onFly(n.id); setQ('') }}>
                <span className="result-title">{truncate(n.title, 46)}</span>
                <span className="result-when">{relDate(n.lastMs)}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="hud-tr">
        <button
          className={`hud-btn field ${showField ? 'on' : ''}`}
          onClick={() => { setShowField(!showField); setShowRecent(false); setShowAnoms(false) }}
          title="every open route across the record — the selecting queue"
        >⚑ OPEN FIELD {atlas.counts.openRouteRows ?? atlas.openField.length}</button>
        <button className="hud-btn" onClick={() => { setShowRecent(!showRecent); setShowField(false); setShowAnoms(false) }}>RECENT</button>
        <button className="hud-btn warn" onClick={() => { setShowAnoms(!showAnoms); setShowField(false); setShowRecent(false) }} title="what the parse skipped or patched">⚠ {anomTotal}</button>
        <button className="hud-btn" onClick={() => onOpen('__root__')}>SNAPSHOT</button>
      </div>

      {showRecent && (
        <div className="flyout">
          <div className="flyout-h">LAST 10 WORKED</div>
          {atlas.recent.map((n) => (
            <button key={n.id} className="result-row" onClick={() => { onFly(n.id); setShowRecent(false) }}>
              <span className="result-title">{truncate(n.title, 42)}</span>
              <span className="result-when">{relDate(n.lastMs)}</span>
            </button>
          ))}
        </div>
      )}

      {showField && (
        <div className="flyout field">
          <div className="flyout-h field-h">
            <span>THE OPEN FIELD — {field.length} open routes · {atlas.anomalies.unparsedRouteTables || 0} maps unparsed</span>
            <span className="field-sorts">
              {[['ess', 'essentiality'], ['pri', 'priority'], ['age', 'recency'], ['inq', 'inquiry']].map(([k, label]) => (
                <button key={k} className={`sort-btn ${fieldSort === k ? 'on' : ''}`} onClick={() => setFieldSort(k)}>{label}</button>
              ))}
            </span>
          </div>
          <div className="field-scroll">
            {field.map((r, i) => (
              <button key={i} className="field-row" onClick={() => { onFly(r.nodeId); setShowField(false) }}
                title={`${r.direction}\n\n${r.nodeTitle}`}>
                <span className="field-dir">{r.ordinal ? `${r.ordinal} · ` : ''}{truncate(r.direction, 64)}</span>
                <span className="field-meta">
                  <em>{truncate(r.nodeTitle, 30)}</em>
                  <b className={`ess e-${(r.essentiality || 'none').split(' ')[0].toLowerCase()}`}>{r.essentiality || '—'}</b>
                  <b className="pri">{r.priority || '—'}</b>
                  <span className="typ">{r.engagementType || '—'}</span>
                  <span className="age">{relDate(r.lastMs)}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {showAnoms && (
        <div className="flyout wide">
          <div className="flyout-h">THE PARSE, HONESTLY</div>
          <table className="anom-table">
            <tbody>
              <tr><td>date-only stamps (midnight)</td><td>{atlas.anomalies.dateOnlyStamps}</td></tr>
              <tr><td>clamped lastWorkedAt</td><td>{atlas.anomalies.clampedLastWorked}</td></tr>
              <tr><td>file/prose edge targets</td><td>{atlas.anomalies.unresolvedEdgeTargets}</td></tr>
              <tr><td>missing bodies</td><td>{atlas.anomalies.missingBodies}</td></tr>
              <tr><td>route-maps w/o a parseable table</td><td>{atlas.anomalies.unparsedRouteTables || 0}</td></tr>
              <tr><td>skipped dirs</td><td>{(atlas.anomalies.skippedDirs || []).join(', ')}</td></tr>
            </tbody>
          </table>
        </div>
      )}

      {roadApi && <ScrubStrip atlas={atlas} api={roadApi} />}

      <div className="hint">
        {lens === 'road'
          ? 'wheel / drag = travel · right-drag = orbit · ⌘wheel = zoom · click focus · double-click open · / search'
          : 'drag rotate · scroll zoom · click focus · double-click open · / search'}
      </div>
    </>
  )
}

// The scrub-strip minimap: week bars mirroring the road's own proportions
// (pleats show compressed, exactly as on the terrain), a live cursor, and the
// play control (replay = a driven scrub, not a separate home).
function ScrubStrip({ atlas, api }) {
  const cursorRef = useRef(null)
  const labelRef = useRef(null)
  const stripRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  // the journey-replay announcement: while playing, the chapter banner the
  // cursor is crossing (label + week DATES — spans are facts, never durations)
  const [announce, setAnnounce] = useState(null)

  useEffect(() => {
    const unsub = api.onCursor((f, ms, isPlaying) => {
      if (cursorRef.current) cursorRef.current.style.left = `${(f * 100).toFixed(2)}%`
      if (labelRef.current) {
        const d = new Date(ms)
        labelRef.current.textContent = `${d.toLocaleString('en', { month: 'short' })} ${d.getDate()}`
      }
      setPlaying((p) => (p === isPlaying ? p : isPlaying))
      if (isPlaying && api.banners) {
        const b = api.banners.find((x) => f >= x.f0 && f <= x.f1) || null
        setAnnounce((cur) => (cur?.label === b?.label ? cur : b))
      } else {
        setAnnounce((cur) => (cur === null ? cur : null))
      }
    })
    return unsub
  }, [api])

  const fmtD = (ms) => {
    const d = new Date(ms)
    return `${d.toLocaleString('en', { month: 'short' })} ${d.getUTCDate()}`
  }

  const scrubFromEvent = (e) => {
    const r = stripRef.current.getBoundingClientRect()
    api.scrubToFrac((e.clientX - r.left) / r.width)
  }

  return (
    <div className="scrub-wrap">
      {playing && announce && (
        <div className="replay-banner" key={announce.label}>
          <span className="rb-label">{announce.label}</span>
          <span className="rb-dates">{fmtD(announce.ms0)} – {fmtD(announce.ms1)}</span>
        </div>
      )}
      <button
        className="play-btn"
        title="replay the road (a driven scrub)"
        onClick={() => { if (api.isPlaying()) { api.pause(); setPlaying(false) } else { api.play(); setPlaying(true) } }}
      >{playing ? '⏸' : '▶'}</button>
      <div
        className="scrub"
        ref={stripRef}
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); scrubFromEvent(e) }}
        onPointerMove={(e) => { if (e.buttons) scrubFromEvent(e) }}
      >
        {api.weeks.map((w, i) => (
          <div
            key={i}
            className="scrub-bar"
            style={{
              left: `${(w.f0 * 100).toFixed(2)}%`,
              width: `${Math.max(0.4, (w.f1 - w.f0) * 100).toFixed(2)}%`,
              height: `${(4 + 22 * (w.count / api.maxWeek)).toFixed(0)}px`,
            }}
          />
        ))}
        {api.pleats.map((p, i) => (
          <div key={`p${i}`} className="scrub-pleat" style={{ left: `${(p.f * 100).toFixed(2)}%` }} title={`${p.days} quiet days`} />
        ))}
        <div className="scrub-cursor" ref={cursorRef}><span className="scrub-label" ref={labelRef} /></div>
      </div>
      <span className="scrub-now">NOW</span>
    </div>
  )
}
