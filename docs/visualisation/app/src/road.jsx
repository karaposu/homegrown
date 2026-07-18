// The TIME-ROAD — the home vehicle (the 16-05 rethink, built on the user's go).
// Position IS time: a terrain ribbon runs past -> NOW at true scale (~2.2
// units/day) with two honest, VISIBLE corrections — quiet gaps > 3 days fold
// into marked pleats, crowded days widen boundedly (the day ticks show the
// stretch). Elevation = smoothed weekly node-count (effort as terrain).
// Ventures sit as settlement arcs on <= 3 lanes (the measured max); standalones
// as shoulder markers; furniture = week ticks, month pylons, mechanical chapter
// banners, the NOW beacon. Camera = inertial dolly along the road + a cone
// orbit; opens on a three-quarter aerial with NOW in the near field. LOD: FAR
// is the 30-second narration layer. The globe's transferred soul: inertia,
// planet-grade glow, the aerial opening.
//
// The route layer rides here too: shoulder-flag pennants (open-route counts)
// at MID zoom — a free geometry channel; color stays the staleness ramp's.

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { truncate } from './data.js'
import { makeChip, nodeColor, nodeSize } from './scene.jsx'

const DAY = 86400000
const BASE_W = 2.2          // units per day, true scale
const WIDEN = 0.5           // extra width per node beyond 4 on one day
const PLEAT_W = 7           // a folded gap's total width, regardless of length
const HALF_W = 12           // ribbon half-width (~24 wide)
const LANE_Z = [0, 5.2, -5.2]
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const ease = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)

// ---- the time mapping: day -> x, with pleats and widening (both visible) ----
// (exported for math smoke-tests — no THREE in here)

export function buildTimeMap(atlas) {
  const nowMs = Date.parse(atlas.generatedAt)
  let minMs = Infinity
  const perDay = new Map()
  for (const n of atlas.nodes) {
    minMs = Math.min(minMs, n.createdMs)
    const d = Math.floor(n.createdMs / DAY)
    perDay.set(d, (perDay.get(d) || 0) + 1)
  }
  const day0 = Math.floor(minMs / DAY)
  const dayN = Math.floor(nowMs / DAY)

  const dayRecs = [] // {day, x0, w} in walk order (for msOfX search)
  const dayX = new Map()
  const pleats = []  // {x0, w, days}
  let x = 0
  let d = day0
  while (d <= dayN) {
    const n = perDay.get(d) || 0
    if (n === 0) {
      let e = d
      while (e <= dayN && !(perDay.get(e) || 0)) e++
      const run = e - d
      if (run > 3) {
        pleats.push({ x0: x, w: PLEAT_W, days: run })
        const per = PLEAT_W / run
        for (let dd = d; dd < e; dd++) {
          dayX.set(dd, { x0: x + (dd - d) * per, w: per })
          dayRecs.push({ day: dd, x0: x + (dd - d) * per, w: per })
        }
        x += PLEAT_W
        d = e
        continue
      }
      for (let dd = d; dd < e; dd++) {
        dayX.set(dd, { x0: x, w: BASE_W })
        dayRecs.push({ day: dd, x0: x, w: BASE_W })
        x += BASE_W
      }
      d = e
      continue
    }
    const w = BASE_W + WIDEN * Math.max(0, n - 4)
    dayX.set(d, { x0: x, w, widened: n > 4 })
    dayRecs.push({ day: d, x0: x, w })
    x += w
    d += 1
  }
  const length = x
  const shift = -length / 2 // keep the world centered around the origin

  const xOfMs = (ms) => {
    const dd = clamp(Math.floor(ms / DAY), day0, dayN)
    const rec = dayX.get(dd)
    const frac = clamp(ms / DAY - Math.floor(ms / DAY), 0, 0.999)
    return rec.x0 + rec.w * frac + shift
  }
  const msOfX = (xq) => {
    const q = clamp(xq - shift, 0, length - 1e-6)
    let lo = 0, hi = dayRecs.length - 1
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1
      if (dayRecs[mid].x0 <= q) lo = mid
      else hi = mid - 1
    }
    const rec = dayRecs[lo]
    return (rec.day + clamp((q - rec.x0) / rec.w, 0, 1)) * DAY
  }

  // weekly buckets (7-day, anchored at day0) — the elevation + strip profile
  const weekCounts = []
  for (const [dd, n] of perDay) {
    const w = Math.floor((dd - day0) / 7)
    weekCounts[w] = (weekCounts[w] || 0) + n
  }
  const nWeeks = Math.floor((dayN - day0) / 7) + 1
  const weeks = []
  for (let w = 0; w < nWeeks; w++) {
    weeks.push({
      count: weekCounts[w] || 0,
      x0: xOfMs((day0 + w * 7) * DAY),
      x1: xOfMs(Math.min(day0 + (w + 1) * 7, dayN + 1) * DAY - 1),
      centerMs: (day0 + w * 7 + 3.5) * DAY,
    })
  }
  const maxWeek = Math.max(1, ...weeks.map((w) => w.count))

  return {
    day0, dayN, nowMs, dayX, dayRecs, pleats: pleats.map((p) => ({ ...p, x0: p.x0 + shift })),
    length, shift, xOfMs, msOfX, weeks, maxWeek,
    xStart: shift, xEnd: xOfMs(nowMs),
  }
}

// elevation: smoothed weekly effort — cosine-interpolated control points
export function makeElevation(tm) {
  const pts = tm.weeks.map((w) => ({
    x: tm.xOfMs(w.centerMs),
    y: 1.2 + 8.5 * (w.count / tm.maxWeek),
  }))
  if (!pts.length) return () => 1.2
  const first = { x: tm.xStart - 30, y: 0.6 }
  const last = { x: tm.xEnd + 30, y: pts[pts.length - 1].y * 0.8 }
  const all = [first, ...pts, last]
  return (x) => {
    if (x <= all[0].x) return all[0].y
    for (let i = 1; i < all.length; i++) {
      if (x <= all[i].x) {
        const a = all[i - 1], b = all[i]
        const t = (x - a.x) / Math.max(1e-6, b.x - a.x)
        const s = 0.5 - 0.5 * Math.cos(t * Math.PI) // cosine smoothing
        return a.y + (b.y - a.y) * s
      }
    }
    return all[all.length - 1].y
  }
}

const zCenter = (x) => 7.5 * Math.sin(x * 0.028) // the gentle S-curve

// ---- placement: settlements on lanes, standalones on shoulders ----

function placeNodes(atlas, tm, elev) {
  const pos = new Map()
  const grouped = new Set()
  const settlements = [] // {id, label, x, y, z, size}

  // group footprints -> greedy lane assignment (<= 3, the measured max)
  const gs = (atlas.groups || []).map((g) => {
    const ms = g.members.map((m) => atlas.byId.get(m)).filter(Boolean)
    const xs = ms.map((m) => tm.xOfMs(m.createdMs))
    return { g, ms, x0: Math.min(...xs) - 2, x1: Math.max(...xs) + 2 }
  }).sort((a, b) => a.x0 - b.x0)
  const laneEnd = LANE_Z.map(() => -Infinity)
  for (const rec of gs) {
    let lane = 0
    for (let i = 0; i < LANE_Z.length; i++) if (laneEnd[i] <= rec.x0) { lane = i; break }
    laneEnd[lane] = Math.max(laneEnd[lane], rec.x1)
    rec.lane = lane
  }

  for (const [gi, rec] of gs.entries()) {
    const { g, ms, lane } = rec
    const bulge = (gi % 2 ? 1 : -1) * Math.min(2.6, 0.35 * ms.length)
    const sorted = [...ms].sort((a, b) => a.createdMs - b.createdMs)
    // same-day members spread inside the (widened) day
    const byDay = new Map()
    for (const m of sorted) {
      const d = Math.floor(m.createdMs / DAY)
      if (!byDay.has(d)) byDay.set(d, [])
      byDay.get(d).push(m)
    }
    sorted.forEach((m, j) => {
      grouped.add(m.id)
      const sibs = byDay.get(Math.floor(m.createdMs / DAY))
      const k = sibs.indexOf(m)
      const nudge = (k - (sibs.length - 1) / 2) * 0.85
      const x = tm.xOfMs(m.createdMs) + nudge
      const arc = sorted.length > 1 ? Math.sin((j / (sorted.length - 1)) * Math.PI) * bulge : 0
      const z = zCenter(x) + LANE_Z[lane] + arc
      pos.set(m.id, [x, elev(x) + 0.55, z])
    })
    const cx = (rec.x0 + rec.x1) / 2
    settlements.push({
      id: g.id, label: truncate(g.label, 34), members: g.members.length,
      x: cx, y: elev(cx) + 3.4, z: zCenter(cx) + LANE_Z[lane] + bulge * 0.5,
    })
  }

  // standalones: alternating shoulder markers
  atlas.nodes.filter((n) => !grouped.has(n.id)).forEach((n, i) => {
    const x = tm.xOfMs(n.createdMs)
    const side = i % 2 ? 1 : -1
    const z = zCenter(x) + side * (HALF_W - 2.2)
    pos.set(n.id, [x, elev(x) + 0.45, z])
  })

  settlements.sort((a, b) => b.members - a.members)
  return { pos, settlements }
}

// ---- geometry builders ----

function buildRibbon(tm, elev) {
  const step = 1.6
  const n = Math.ceil((tm.length + 24) / step)
  const posArr = [], colArr = [], idx = []
  const base = new THREE.Color('#3d2c1b')
  const high = new THREE.Color('#6b4526')
  for (let i = 0; i <= n; i++) {
    const x = tm.xStart - 12 + i * step
    const y = elev(x)
    const z = zCenter(x)
    posArr.push(x, y, z - HALF_W, x, y + 0.001, z, x, y, z + HALF_W)
    const c = base.clone().lerp(high, clamp((y - 1.2) / 8.5, 0, 1))
    const edge = c.clone().multiplyScalar(0.72)
    colArr.push(edge.r, edge.g, edge.b, c.r, c.g, c.b, edge.r, edge.g, edge.b)
    if (i < n) {
      const a = i * 3
      idx.push(a, a + 3, a + 1, a + 1, a + 3, a + 4, a + 1, a + 4, a + 2, a + 2, a + 4, a + 5)
    }
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(posArr), 3))
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colArr), 3))
  geo.setIndex(idx)
  geo.computeVertexNormals()
  return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.92, metalness: 0.02,
  }))
}

function lineSet(points, color, opacity) {
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(points), 3))
  return new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity }))
}

function arcLine(a, b, lift, color, opacity) {
  const mid = new THREE.Vector3((a[0] + b[0]) / 2, Math.max(a[1], b[1]) + lift, (a[2] + b[2]) / 2)
  const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(...a), mid, new THREE.Vector3(...b))
  const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(28))
  return new THREE.Line(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity }))
}

function glowSprite(color, size) {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 62)
  g.addColorStop(0, color)
  g.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 128, 128)
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending, opacity: 0.55,
  }))
  sp.scale.set(size, size, 1)
  return sp
}

const MONTH_NAMES = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']

// ---- the component ----

export default function RoadScene({ atlas, filters, focusId, onFocus, onOpen, flyRequest, onRoadApi }) {
  const mountRef = useRef(null)
  const stateRef = useRef({})
  const hoverRef = useRef(null)
  const focusRef = useRef(null)
  focusRef.current = focusId

  useEffect(() => {
    const mount = mountRef.current
    if (!mount || !atlas) return

    const tm = buildTimeMap(atlas)
    const elev = makeElevation(tm)
    const { pos, settlements } = placeNodes(atlas, tm, elev)

    const scene = new THREE.Scene()
    // cold fog to match the cold void — the warm ribbon separates by HUE
    scene.fog = new THREE.Fog(0x0d1018, 90, 420)
    const camera = new THREE.PerspectiveCamera(
      50, Math.max(mount.clientWidth, 1) / Math.max(mount.clientHeight, 1), 0.1, 900)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.domElement.style.touchAction = 'none'
    renderer.domElement.className = 'nm-canvas'
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.HemisphereLight(0xffd9b0, 0x10131c, 0.7))
    const dir = new THREE.DirectionalLight(0xfff2dd, 0.95)
    dir.position.set(70, 55, 35) // lower sun — slopes catch light (effort reads as relief)
    scene.add(dir)

    // -- the terrain ribbon
    scene.add(buildRibbon(tm, elev))

    // -- emissive shoulder lines: the road's TRUE edges, glowing — the
    //    silhouette that survives any camera pose (honest geometry, no meaning)
    {
      const step = 1.6
      const n = Math.ceil((tm.length + 24) / step)
      for (const side of [-1, 1]) {
        const pts = []
        for (let i = 0; i <= n; i++) {
          const x = tm.xStart - 12 + i * step
          pts.push(new THREE.Vector3(x, elev(x) + 0.12, zCenter(x) + side * HALF_W))
        }
        const geo = new THREE.BufferGeometry().setFromPoints(pts)
        scene.add(new THREE.Line(geo, new THREE.LineBasicMaterial({
          color: 0xd08f52, transparent: true, opacity: 0.8,
        })))
      }
    }

    // -- LOD groups
    const farOnly = new THREE.Group()   // pylons, top-12 chips, banners, beacon glow
    const midGroup = new THREE.Group()  // ticks, all chips, pleat marks, flags
    const nearGroup = new THREE.Group() // day ticks
    scene.add(farOnly, midGroup, nearGroup)

    // -- furniture: week lines + day ticks (the widening made visible)
    const weekPts = [], dayPts = []
    for (const w of tm.weeks) {
      const z = zCenter(w.x0)
      weekPts.push(w.x0, elev(w.x0) + 0.06, z - HALF_W, w.x0, elev(w.x0) + 0.06, z + HALF_W)
    }
    for (const rec of tm.dayRecs) {
      if (rec.w < 1) continue // inside a pleat — the pleat mark carries it
      const x = rec.x0 + tm.shift
      const z = zCenter(x)
      dayPts.push(x, elev(x) + 0.05, z - 1.4, x, elev(x) + 0.05, z + 1.4)
    }
    midGroup.add(lineSet(weekPts, 0xa5825a, 0.75))
    nearGroup.add(lineSet(dayPts, 0x7d6242, 0.65))

    // -- month pylons (FAR furniture — the calendar's skeleton)
    for (let d = tm.day0; d <= tm.dayN; d++) {
      const date = new Date(d * DAY)
      if (date.getUTCDate() !== 1 && d !== tm.day0) continue
      const x = tm.xOfMs(d * DAY)
      const z = zCenter(x) - (HALF_W + 4)
      const h = 15
      const pylon = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.3, h, 8),
        new THREE.MeshStandardMaterial({ color: '#7d5a36', emissive: '#3a2210', emissiveIntensity: 0.4 }))
      pylon.position.set(x, elev(x) + h / 2, z)
      farOnly.add(pylon)
      const label = makeChip(MONTH_NAMES[date.getUTCMonth()], { worldH: 2.6, bare: true, color: '#d9b98c', opacity: 0.9 })
      label.position.set(x, elev(x) + h + 1.8, z)
      farOnly.add(label)
    }

    // -- chapter banners: per week, the largest venture born that week (mechanical)
    const groupByWeek = new Map()
    for (const g of atlas.groups || []) {
      const first = g.members.map((m) => atlas.byId.get(m)).filter(Boolean)
        .reduce((a, b) => (a.createdMs < b.createdMs ? a : b))
      const w = Math.floor((Math.floor(first.createdMs / DAY) - tm.day0) / 7)
      const cur = groupByWeek.get(w)
      if (!cur || g.members.length > cur.members.length) groupByWeek.set(w, g)
    }
    for (const [w, g] of groupByWeek) {
      if (g.members.length < 2 || !tm.weeks[w]) continue
      const cx = (tm.weeks[w].x0 + tm.weeks[w].x1) / 2
      const banner = makeChip(truncate(g.label.replace(/ ×\d+$/, ''), 30).toUpperCase(),
        { worldH: 1.7, bare: true, color: '#caa877', opacity: 0.5 })
      banner.position.set(cx, elev(cx) + 8.2, zCenter(cx))
      farOnly.add(banner)
    }

    // -- pleat marks: fold lines + the honest caption
    for (const p of tm.pleats) {
      const foldPts = []
      for (const f of [0.28, 0.5, 0.72]) {
        const x = p.x0 + p.w * f
        const z = zCenter(x)
        foldPts.push(x, elev(x) + 0.08, z - HALF_W, x, elev(x) + 0.08, z + HALF_W)
      }
      midGroup.add(lineSet(foldPts, 0x352417, 0.9))
      const chip = makeChip(`· ${p.days} quiet days ·`, { worldH: 0.95, opacity: 0.85 })
      chip.position.set(p.x0 + p.w / 2, elev(p.x0 + p.w / 2) + 2.1, zCenter(p.x0 + p.w / 2))
      midGroup.add(chip)
    }

    // -- the NOW beacon (+ the two horizon glows — the globe's inheritance)
    const bx = tm.xEnd
    const beacon = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.5, 22, 10),
      new THREE.MeshStandardMaterial({
        color: '#ffb066', emissive: '#ff8c2e', emissiveIntensity: 0.9, transparent: true, opacity: 0.85,
      }))
    beacon.position.set(bx, elev(bx) + 11, zCenter(bx))
    scene.add(beacon)
    const beaconLight = new THREE.PointLight(0xff8c2e, 1.1, 80)
    beaconLight.position.set(bx, elev(bx) + 6, zCenter(bx))
    scene.add(beaconLight)
    const nowChip = makeChip('NOW', { worldH: 2.2, bare: true, color: '#ffc890' })
    nowChip.position.set(bx, elev(bx) + 24, zCenter(bx))
    scene.add(nowChip)
    const glowNow = glowSprite('rgba(255,150,70,0.95)', 90)
    glowNow.position.set(bx + 20, elev(bx) + 6, zCenter(bx))
    scene.add(glowNow)
    const glowPast = glowSprite('rgba(110,120,160,0.5)', 70)
    glowPast.position.set(tm.xStart - 16, 4, zCenter(tm.xStart))
    scene.add(glowPast)

    // -- settlement chips (top-12 always; the rest at MID)
    const chipSprites = []
    settlements.forEach((s, i) => {
      const chip = makeChip(s.label)
      chip.position.set(s.x, s.y, s.z)
      chip.userData = { groupId: s.id }
      chipSprites.push(chip)
      if (i < 12) farOnly.add(chip)
      else midGroup.add(chip)
    })

    // -- inquiry nodes (the ramp carries staleness; position carries time)
    const nodeMeshes = []
    const meshById = new Map()
    for (const n of atlas.nodes) {
      if (!pos.has(n.id)) continue
      const color = nodeColor(n, atlas)
      const mat = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 0.35, roughness: 0.6, metalness: 0.05,
      })
      if (n.status === 'superseded') { mat.transparent = true; mat.opacity = 0.4 }
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(nodeSize(n, atlas) * 0.85, 18, 14), mat)
      mesh.position.set(...pos.get(n.id))
      mesh.userData = { nodeId: n.id, active: n.status === 'active' }
      scene.add(mesh)
      nodeMeshes.push(mesh)
      meshById.set(n.id, mesh)
    }

    // -- contact pucks: a soft dark disc on the ground under every node —
    //    the grounding cue (nothing floats; the stands-on relation, previewed)
    {
      const ids = atlas.nodes.filter((n) => pos.has(n.id))
      const puckGeo = new THREE.CircleGeometry(1, 20)
      puckGeo.rotateX(-Math.PI / 2)
      const puckMat = new THREE.MeshBasicMaterial({
        color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false,
      })
      const pucks = new THREE.InstancedMesh(puckGeo, puckMat, ids.length)
      const pm = new THREE.Matrix4()
      ids.forEach((n, i) => {
        const p = pos.get(n.id)
        const r = nodeSize(n, atlas) * 0.95
        pm.makeScale(r, 1, r)
        pm.setPosition(p[0], elev(p[0]) + 0.03, p[2])
        pucks.setMatrixAt(i, pm)
      })
      scene.add(pucks)
    }

    // -- shoulder flags: open-route pennants (height ∝ count; MID zoom)
    // geometry is the free channel — color stays the staleness ramp's.
    const flagged = [...atlas.openCount.entries()].filter(([id]) => pos.has(id))
    if (flagged.length) {
      const poleGeo = new THREE.CylinderGeometry(0.035, 0.035, 1, 5)
      poleGeo.translate(0, 0.5, 0)
      const flagGeo = new THREE.ConeGeometry(0.22, 0.55, 4)
      flagGeo.rotateZ(-Math.PI / 2)
      const poleMat = new THREE.MeshBasicMaterial({ color: 0x9fb8ae, transparent: true, opacity: 0.7 })
      const flagMat = new THREE.MeshBasicMaterial({ color: 0x46d0b0, transparent: true, opacity: 0.9 })
      const poles = new THREE.InstancedMesh(poleGeo, poleMat, flagged.length)
      const flags = new THREE.InstancedMesh(flagGeo, flagMat, flagged.length)
      const m4 = new THREE.Matrix4()
      flagged.forEach(([id, count], i) => {
        const p = pos.get(id)
        const h = 0.9 + 0.32 * Math.min(count, 8)
        m4.makeScale(1, h, 1)
        m4.setPosition(p[0], p[1], p[2])
        poles.setMatrixAt(i, m4)
        m4.makeTranslation(p[0] + 0.24, p[1] + h, p[2])
        flags.setMatrixAt(i, m4)
      })
      midGroup.add(poles, flags)
    }

    // -- continues-from arcs: short warm hops in-settlement, tall glowing
    //    back-arcs when a venture reaches weeks back (the visible story)
    for (const e of atlas.drawable.continuesFrom) {
      const a = pos.get(e.source), b = pos.get(e.target)
      if (!a || !b) continue
      const span = Math.abs(a[0] - b[0])
      if (span > 18) scene.add(arcLine(a, b, 4 + span * 0.12, 0xffa050, 0.5))
      else scene.add(arcLine(a, b, 0.8 + span * 0.08, 0xcf8b4a, 0.35))
    }

    // -- ↩ re-entries: a chain-link back into a region that had been quiet
    //    ≥ 21 days (a DECLARED convention — the chip labels itself, the pleat-
    //    caption pattern; the day count is a date-derived fact, never a metric)
    const REENTRY_DAYS = 21
    const memberGroup = new Map()
    for (const g of atlas.groups || []) for (const m of g.members) memberGroup.set(m, g)
    const reentrySeen = new Set()
    for (const e of atlas.drawable.continuesFrom) {
      const src = atlas.byId.get(e.source)
      const tgt = atlas.byId.get(e.target)
      if (!src || !tgt || !pos.has(e.target)) continue
      const g = memberGroup.get(e.target)
      let lastBefore = tgt.createdMs
      if (g) for (const mid of g.members) {
        const m = atlas.byId.get(mid)
        if (m && m.createdMs < src.createdMs) lastBefore = Math.max(lastBefore, m.createdMs)
      }
      const gapDays = Math.floor((src.createdMs - lastBefore) / DAY)
      if (gapDays < REENTRY_DAYS) continue
      const key = g ? g.id : e.target
      if (reentrySeen.has(key)) continue
      reentrySeen.add(key)
      const p = pos.get(e.target)
      const chip = makeChip(`↩ re-entered after ${gapDays} quiet days`, { worldH: 0.95, opacity: 0.85 })
      chip.position.set(p[0], p[1] + 2.6, p[2])
      midGroup.add(chip)
    }

    // selection-local neighborhood (non-chain types, on focus only)
    let localEdges = null
    const showNeighborhood = (id) => {
      if (localEdges) { scene.remove(localEdges); localEdges.geometry.dispose(); localEdges = null }
      if (!id) return
      const nbrs = (atlas.edgesByNode.get(id) || []).filter(
        (e) => e.type !== 'continues-from' && e.target && pos.has(e.target) && pos.has(e.source))
      if (!nbrs.length) return
      const pts = []
      for (const e of nbrs) pts.push(...pos.get(e.source), ...pos.get(e.target))
      localEdges = lineSet(pts, 0x9db4e8, 0.55)
      scene.add(localEdges)
    }

    // hover label
    let hoverChip = null
    const setHoverChip = (id) => {
      if (hoverChip) { scene.remove(hoverChip); hoverChip.material.map.dispose(); hoverChip = null }
      if (!id) return
      const n = atlas.byId.get(id)
      const m = meshById.get(id)
      if (!n || !m) return
      hoverChip = makeChip(truncate(n.title, 40))
      hoverChip.position.copy(m.position).add(new THREE.Vector3(0, 1.2, 0))
      scene.add(hoverChip)
    }

    // ---- the road camera rig: inertial dolly + cone orbit ----
    const OPENING = {
      t: clamp(tm.xOfMs(tm.nowMs - 6 * DAY), tm.xStart, tm.xEnd),
      radius: 84, theta: 1.05, phi: 0.95,
    }
    const rig = {
      t: OPENING.t, vel: 0,
      theta: OPENING.theta, phi: OPENING.phi, radius: OPENING.radius,
      flight: null,
    }

    const st = {
      scene, camera, renderer, nodeMeshes, meshById, pos, rig, tm,
      raycaster: new THREE.Raycaster(), mouseV: new THREE.Vector2(),
      showNeighborhood, setHoverChip,
      filtersRef: { current: filters },
      playing: false, playRange: null, cursorCbs: new Set(),
      raf: 0,
    }
    stateRef.current = st

    const startFlight = (toT, toR) => {
      rig.flight = {
        fromT: rig.t, toT: clamp(toT, tm.xStart, tm.xEnd + 4),
        fromR: rig.radius, toR,
        start: performance.now() / 1000, dur: 0.9,
      }
      rig.vel = 0
    }
    st.flyTo = (id) => {
      const p = pos.get(id)
      if (p) { startFlight(p[0], 11); return }
      const s = settlements.find((x) => x.id === id)
      if (s) startFlight(s.x, 22)
    }
    st.flyHome = () => { startFlight(OPENING.t, OPENING.radius); rig.theta = OPENING.theta; rig.phi = OPENING.phi }

    // the scrub/play API (the HUD strip drives and mirrors this)
    st.api = {
      domain: { t0: tm.day0 * DAY, t1: tm.nowMs },
      weeks: tm.weeks.map((w) => ({
        f0: (w.x0 - tm.xStart) / tm.length, f1: (w.x1 - tm.xStart) / tm.length, count: w.count,
      })),
      maxWeek: tm.maxWeek,
      pleats: tm.pleats.map((p) => ({ f: (p.x0 + p.w / 2 - tm.xStart) / tm.length, days: p.days })),
      scrubToFrac: (f) => { rig.flight = null; rig.vel = 0; rig.t = tm.xStart + clamp(f, 0, 1) * tm.length },
      play: () => { st.playRange = null; st.playing = true; if (rig.t >= tm.xEnd - 1) rig.t = tm.xStart },
      pause: () => { st.playing = false },
      // the journey-replay staging: banners the strip announces while playing
      // (labels + week DATES — spans are facts, never durations to compare)
      banners: [...groupByWeek.entries()]
        .filter(([w, g]) => g.members.length >= 2 && tm.weeks[w])
        .map(([w, g]) => ({
          f0: (tm.weeks[w].x0 - tm.xStart) / tm.length,
          f1: (tm.weeks[w].x1 - tm.xStart) / tm.length,
          label: truncate(g.label.replace(/ ×\d+$/, ''), 40),
          ms0: (tm.day0 + w * 7) * DAY,
          ms1: Math.min(tm.day0 + (w + 1) * 7 - 1, tm.dayN) * DAY,
        })),
      // bounded one-venture replay: play clamped to the settlement's span —
      // the same constant travel speed as the full run (true-scale time; no
      // normalization, no timing)
      playVenture: (groupId) => {
        const g = (atlas.groups || []).find((x) => x.id === groupId)
        if (!g) return
        const xs = g.members.map((m) => atlas.byId.get(m)).filter(Boolean)
          .map((m) => tm.xOfMs(m.createdMs))
        if (!xs.length) return
        st.playRange = {
          x0: Math.max(tm.xStart, Math.min(...xs) - 3),
          x1: Math.min(tm.xEnd, Math.max(...xs) + 3),
        }
        rig.flight = null
        rig.vel = 0
        rig.t = st.playRange.x0
        rig.radius = clamp(rig.radius, 6, 34) // come down to travel height
        st.playing = true
      },
      isPlaying: () => st.playing,
      onCursor: (cb) => { st.cursorCbs.add(cb); return () => st.cursorCbs.delete(cb) },
      msOfFrac: (f) => tm.msOfX(tm.xStart + clamp(f, 0, 1) * tm.length),
    }
    onRoadApi?.(st.api)

    // ---- input ----
    const el = renderer.domElement
    el.style.cursor = 'grab'
    const pointers = new Map()
    let lastPinch = 0
    let tapDown = null
    let lastTap = { id: undefined, t: 0, timer: 0 }
    let dragVel = 0

    const pickAt = (x, y) => {
      const r = el.getBoundingClientRect()
      st.mouseV.set(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1)
      st.raycaster.setFromCamera(st.mouseV, camera)
      const hits = st.raycaster.intersectObjects([...nodeMeshes, ...chipSprites.filter((c) => c.visible !== false)], false)
      if (!hits.length) return null
      const u = hits[0].object.userData
      return u.nodeId || u.groupId || null
    }

    const handleTap = (x, y) => {
      const id = pickAt(x, y)
      const now = performance.now()
      if (lastTap.id === id && now - lastTap.t < 330) {
        clearTimeout(lastTap.timer)
        lastTap.id = undefined
        if (id) onOpen(id)
        else { st.flyHome(); onFocus(null) }
      } else {
        lastTap.id = id
        lastTap.t = now
        clearTimeout(lastTap.timer)
        lastTap.timer = setTimeout(() => {
          if (id) { st.flyTo(id); onFocus(id) } else onFocus(null)
        }, 300)
      }
    }

    const onDown = (e) => {
      el.setPointerCapture?.(e.pointerId)
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, btn: e.button })
      rig.flight = null
      st.playing = false
      st.playRange = null
      dragVel = 0
      el.style.cursor = 'grabbing'
      tapDown = pointers.size === 1 ? { x: e.clientX, y: e.clientY, id: e.pointerId } : null
    }
    let lastHover = 0
    const onMove = (e) => {
      if (pointers.size === 0) {
        const t = performance.now() / 1000
        if (t - lastHover > 0.05) {
          lastHover = t
          const id = pickAt(e.clientX, e.clientY)
          if (hoverRef.current !== id) {
            hoverRef.current = id
            setHoverChip(id && atlas.byId.has(id) ? id : null)
          }
          el.style.cursor = id ? 'pointer' : 'grab'
        }
        return
      }
      if (!pointers.has(e.pointerId)) return
      const prev = pointers.get(e.pointerId)
      const cur = { x: e.clientX, y: e.clientY, btn: prev.btn }
      const dx = cur.x - prev.x, dy = cur.y - prev.y
      if (pointers.size === 1) {
        if (prev.btn === 2 || e.shiftKey) {
          // orbit inside the cone
          rig.theta -= dx * 0.0055
          rig.phi = clamp(rig.phi - dy * 0.0045, 0.15, 1.35)
        } else {
          // the primary gesture: drag the road under you (dolly), pitch on Y
          const scale = 0.0021 * rig.radius
          rig.t = clamp(rig.t - dx * scale, tm.xStart, tm.xEnd + 4)
          dragVel = -dx * scale * 60 // per-second velocity for release inertia
          rig.phi = clamp(rig.phi - dy * 0.003, 0.15, 1.35)
        }
      }
      pointers.set(e.pointerId, cur)
      if (pointers.size === 2) {
        const v = [...pointers.values()]
        const d = Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y)
        if (lastPinch > 0) rig.radius = clamp(rig.radius * (lastPinch / d), 6, 140)
        lastPinch = d
      }
    }
    const onUp = (e) => {
      pointers.delete(e.pointerId)
      lastPinch = 0
      el.style.cursor = 'grab'
      if (tapDown && e.pointerId === tapDown.id) {
        if (Math.hypot(e.clientX - tapDown.x, e.clientY - tapDown.y) < 6)
          handleTap(e.clientX, e.clientY)
        else rig.vel = clamp(dragVel, -220, 220) // the globe's spin, transferred
        tapDown = null
      } else if (pointers.size === 0 && Math.abs(dragVel) > 1) {
        rig.vel = clamp(dragVel, -220, 220)
      }
      dragVel = 0
    }
    const onWheel = (e) => {
      e.preventDefault()
      rig.flight = null
      st.playing = false
      st.playRange = null
      if (e.ctrlKey || e.metaKey) {
        rig.radius = clamp(rig.radius * (1 + e.deltaY * 0.0016), 6, 140)
      } else {
        // wheel = travel (the primary gesture) — inertial
        rig.vel = clamp(rig.vel + e.deltaY * 0.055 * (rig.radius / 40), -260, 260)
      }
    }
    const onKey = (e) => {
      if (e.target !== document.body) return
      if (e.key === 'ArrowRight') rig.vel = clamp(rig.vel + 26, -260, 260)
      if (e.key === 'ArrowLeft') rig.vel = clamp(rig.vel - 26, -260, 260)
      if (e.key === '+' || e.key === '=') rig.radius = clamp(rig.radius * 0.86, 6, 140)
      if (e.key === '-') rig.radius = clamp(rig.radius * 1.16, 6, 140)
    }
    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('contextmenu', (e) => e.preventDefault())
    window.addEventListener('keydown', onKey)

    const ro = new ResizeObserver(() => {
      const w = Math.max(mount.clientWidth, 1), h = Math.max(mount.clientHeight, 1)
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    })
    ro.observe(mount)

    // deep-link on load
    const hashId = decodeURIComponent(location.hash.slice(1))
    if (hashId && (pos.has(hashId) || settlements.some((s) => s.id === hashId))) {
      setTimeout(() => { st.flyTo(hashId); onFocus(hashId) }, 300)
    }

    // ---- animate: rig physics, LOD, pulses, cursor mirror ----
    let lastBand = ''
    let lastFrame = performance.now() / 1000
    let lastCursorT = -1
    const animate = () => {
      const now = performance.now() / 1000
      const dt = Math.min(0.05, now - lastFrame)
      lastFrame = now

      if (rig.flight) {
        const f = rig.flight
        const p = Math.min(1, (now - f.start) / f.dur)
        const e = ease(p)
        rig.t = f.fromT + (f.toT - f.fromT) * e
        rig.radius = f.fromR + (f.toR - f.fromR) * e
        if (p >= 1) rig.flight = null
      } else {
        if (st.playing) {
          rig.t += (tm.length / 45) * dt // constant travel speed (full run ~45s)
          const end = st.playRange ? st.playRange.x1 : tm.xEnd
          if (rig.t >= end) { rig.t = end; st.playing = false; st.playRange = null }
        } else if (Math.abs(rig.vel) > 0.02) {
          rig.t = clamp(rig.t + rig.vel * dt, tm.xStart, tm.xEnd + 4)
          rig.vel *= Math.pow(0.16, dt) // the transferred spin decay
          if (rig.t <= tm.xStart || rig.t >= tm.xEnd + 4) rig.vel = 0
        }
      }

      // LOD bands: FAR is the 30-second narration layer
      const band = rig.radius > 70 ? 'far' : rig.radius > 25 ? 'mid' : 'near'
      if (band !== lastBand) {
        lastBand = band
        midGroup.visible = band !== 'far'
        nearGroup.visible = band === 'near'
        for (const m of nodeMeshes) m.userData.lodHidden = band === 'far'
      }

      const fid = focusRef.current
      const flt = st.filtersRef.current
      for (const m of nodeMeshes) {
        const n = atlas.byId.get(m.userData.nodeId)
        const passes = !flt || flt[n.status] !== false
        m.visible = passes && !(m.userData.lodHidden && fid !== m.userData.nodeId)
        let target = 1
        if (fid === m.userData.nodeId) target = 1.25 + Math.sin(now * 3.2) * 0.05
        else if (hoverRef.current === m.userData.nodeId) target = 1.22
        m.scale.setScalar(m.scale.x + (target - m.scale.x) * 0.18)
        if (m.userData.active) m.material.emissiveIntensity = 0.5 + 0.35 * (0.5 + 0.5 * Math.sin(now * 2.2))
      }
      beacon.material.emissiveIntensity = 0.75 + 0.3 * (0.5 + 0.5 * Math.sin(now * 1.8))

      // camera on the rig
      const ty = elev(rig.t) + 2.2
      const tz = zCenter(rig.t)
      camera.position.set(
        rig.t + rig.radius * Math.sin(rig.phi) * Math.sin(rig.theta),
        ty + rig.radius * Math.cos(rig.phi),
        tz + rig.radius * Math.sin(rig.phi) * Math.cos(rig.theta))
      camera.lookAt(rig.t, ty, tz)

      // mirror the cursor to the strip (only when it moved)
      if (Math.abs(rig.t - lastCursorT) > 0.05 && st.cursorCbs.size) {
        lastCursorT = rig.t
        const f = (rig.t - tm.xStart) / tm.length
        const ms = tm.msOfX(rig.t)
        for (const cb of st.cursorCbs) cb(f, ms, st.playing)
      }

      renderer.render(scene, camera)
      st.raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(st.raf)
      clearTimeout(lastTap.timer)
      ro.disconnect()
      window.removeEventListener('keydown', onKey)
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
      el.removeEventListener('wheel', onWheel)
      onRoadApi?.(null)
      scene.traverse((o) => {
        o.geometry?.dispose?.()
        if (o.material) { o.material.map?.dispose?.(); o.material.dispose?.() }
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [atlas])

  // focus side-effects: neighborhood + deep-link hash
  useEffect(() => {
    const st = stateRef.current
    if (!st.showNeighborhood) return
    st.showNeighborhood(focusId && atlas.byId.has(focusId) ? focusId : null)
    if (focusId) history.replaceState(null, '', `#${encodeURIComponent(focusId)}`)
    else history.replaceState(null, '', location.pathname + location.search)
  }, [focusId, atlas])

  useEffect(() => {
    if (stateRef.current.filtersRef) stateRef.current.filtersRef.current = filters
  }, [filters])

  useEffect(() => {
    if (flyRequest && stateRef.current.flyTo) stateRef.current.flyTo(flyRequest.id)
  }, [flyRequest])

  return <div className="stage" ref={mountRef} />
}
