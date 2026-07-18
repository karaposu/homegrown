// P2 — the scene organ, now a two-vehicle router. `road` (default) renders the
// Time-Road (time as position on a terrain ribbon — the 16-05 rethink); the
// orbital world below survives as the `chains` / `flat` lenses (the structure
// views). Shared: the staleness ramp, the chip sprites, the interaction model.

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { staleness, truncate, lensGroups } from './data.js'
import RoadScene from './road.jsx'

export default function Scene(props) {
  if (props.lens === 'road') return <RoadScene {...props} />
  return <OrbitalScene {...props} />
}

const GOLDEN = 2.39996
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const easeInOutCubic = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)
const hash = (s) => {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

// ---- layout (view-side; deterministic from ids — stable across loads) ----

function layout(atlas, lens) {
  const pos = new Map() // id -> [x,y,z]
  const anchors = [] // {id, label, pos, members, radius}
  const groups = lensGroups(atlas, lens)
  const grouped = new Set()

  groups.forEach((g, i) => {
    const ringR = 14 + 6 * Math.sqrt(i)
    const a = i * GOLDEN
    const jitterY = ((hash(g.id) % 100) / 100 - 0.5) * 8
    const anchor = [Math.cos(a) * ringR, jitterY, Math.sin(a) * ringR]
    const localR = 2.5 + 0.35 * Math.sqrt(g.members.length) * 2
    g.members.forEach((mid, j) => {
      grouped.add(mid)
      // fibonacci sphere around the anchor
      const k = (j + 0.5) / g.members.length
      const phi = Math.acos(1 - 2 * k)
      const theta = GOLDEN * j
      pos.set(mid, [
        anchor[0] + localR * Math.sin(phi) * Math.cos(theta),
        anchor[1] + localR * Math.cos(phi) * 0.7,
        anchor[2] + localR * Math.sin(phi) * Math.sin(theta),
      ])
    })
    anchors.push({
      id: g.id,
      label: `${truncate(g.label, 34)}`,
      pos: anchor,
      members: g.members,
      radius: 0.9 + 0.12 * Math.sqrt(g.members.length),
    })
  })

  // standalones: a thin outer dust shell — quiet placement ("unchained"),
  // full participation (search / fly-to / ramp still apply)
  const solo = atlas.nodes.filter((n) => !grouped.has(n.id))
  const shellR0 = 14 + 6 * Math.sqrt(Math.max(groups.length, 1)) + 10
  solo.forEach((n, j) => {
    const k = (j + 0.5) / Math.max(solo.length, 1)
    const phi = Math.acos(1 - 2 * k)
    const theta = GOLDEN * j
    const r = shellR0 + (hash(n.id) % 6)
    pos.set(n.id, [
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi) * 0.45,
      r * Math.sin(phi) * Math.sin(theta),
    ])
  })

  return { pos, anchors }
}

// ---- node visuals: the relative ramp (ember -> ash), status accents, hub size ----

const EMBER = new THREE.Color('#ff8c2e')
const ASH = new THREE.Color('#5d6b8f')

export function nodeColor(node, atlas) {
  const t = staleness(node, atlas.staleDomain)
  return EMBER.clone().lerp(ASH, Math.pow(t, 0.75))
}
export function nodeSize(node, atlas) {
  const deg = atlas.degree.get(node.id) || 0
  return Math.min(0.84, 0.42 * (1 + 0.18 * Math.log2(1 + deg)))
}

// ---- the orbital vehicle (the chains / flat lenses) ----

function OrbitalScene({ atlas, lens, filters, focusId, onFocus, onOpen, flyRequest }) {
  const mountRef = useRef(null)
  const stateRef = useRef({})
  const hoverRef = useRef(null)
  const focusRef = useRef(null)
  focusRef.current = focusId

  // build / rebuild the whole scene when atlas or lens changes
  useEffect(() => {
    const mount = mountRef.current
    if (!mount || !atlas) return

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x140d09, 60, 220)
    const camera = new THREE.PerspectiveCamera(
      50, Math.max(mount.clientWidth, 1) / Math.max(mount.clientHeight, 1), 0.1, 600)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.domElement.style.touchAction = 'none'
    renderer.domElement.className = 'nm-canvas'
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.HemisphereLight(0xffd9b0, 0x14100c, 0.8))
    const dir = new THREE.DirectionalLight(0xffffff, 0.8)
    dir.position.set(30, 40, 20)
    scene.add(dir)
    const pt = new THREE.PointLight(0xff7a1a, 0.6, 120)
    pt.position.set(0, 4, 0)
    scene.add(pt)

    const { pos, anchors } = layout(atlas, lens)

    // group anchor spheres + chips
    const chipSprites = []
    const anchorMeshes = []
    for (const a of anchors) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(a.radius, 24, 18),
        new THREE.MeshStandardMaterial({
          color: '#b8763a', emissive: '#7a3c12', emissiveIntensity: 0.35,
          roughness: 0.55, metalness: 0.08, transparent: true, opacity: 0.85,
        }))
      mesh.position.set(...a.pos)
      mesh.userData = { groupId: a.id }
      scene.add(mesh)
      anchorMeshes.push(mesh)
      const chip = makeChip(a.label)
      chip.position.set(a.pos[0], a.pos[1] + a.radius + 1.3, a.pos[2])
      scene.add(chip)
      chipSprites.push(chip)
    }

    // inquiry nodes
    const nodeMeshes = []
    const meshById = new Map()
    for (const n of atlas.nodes) {
      if (!pos.has(n.id)) continue
      const color = nodeColor(n, atlas)
      const mat = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 0.35, roughness: 0.6, metalness: 0.05,
      })
      if (n.status === 'superseded') { mat.transparent = true; mat.opacity = 0.4 }
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(nodeSize(n, atlas), 18, 14), mat)
      mesh.position.set(...pos.get(n.id))
      mesh.userData = { nodeId: n.id, baseEmissive: 0.35, active: n.status === 'active' }
      scene.add(mesh)
      nodeMeshes.push(mesh)
      meshById.set(n.id, mesh)
    }

    // three edge sets under the policy
    const segs = (edges, color, opacity) => {
      const pts = []
      for (const e of edges) {
        const a = pos.get(e.source), b = pos.get(e.target)
        if (a && b) pts.push(...a, ...b)
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3))
      return new THREE.LineSegments(geo,
        new THREE.LineBasicMaterial({ color, transparent: true, opacity }))
    }
    const contEdges = segs(atlas.drawable.continuesFrom, 0xcf8b4a, 0.5)  // always on
    const relEdges = segs(atlas.drawable.related, 0x6f7c9e, 0.22)        // on selection
    const otherEdges = segs(atlas.drawable.other, 0x8a86a8, 0.28)        // long tail, one style
    relEdges.visible = false
    otherEdges.visible = false
    scene.add(contEdges, relEdges, otherEdges)

    // selection-local neighborhood (rebuilt per focus; <= ~32 segments)
    let localEdges = null
    const showNeighborhood = (id) => {
      if (localEdges) { scene.remove(localEdges); localEdges.geometry.dispose(); localEdges = null }
      if (!id) return
      const nbrs = (atlas.edgesByNode.get(id) || []).filter(
        (e) => e.type !== 'continues-from' && e.target && pos.has(e.target) && pos.has(e.source))
      if (!nbrs.length) return
      localEdges = segs(nbrs, 0x9db4e8, 0.55)
      scene.add(localEdges)
    }

    // hover label (one sprite, retargeted)
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

    const st = {
      scene, camera, renderer, nodeMeshes, meshById, pos, anchors,
      raycaster: new THREE.Raycaster(), mouseV: new THREE.Vector2(),
      sph: { theta: 0.85, phi: 1.1, radius: 60, target: new THREE.Vector3(0, 0, 0) },
      flight: null, raf: 0, showNeighborhood, setHoverChip, relEdges, otherEdges,
      filtersRef: { current: filters },
    }
    stateRef.current = st

    const startFlight = (toT, toR) => {
      st.flight = {
        fromT: st.sph.target.clone(), toT, fromR: st.sph.radius, toR,
        start: performance.now() / 1000, dur: 0.9,
      }
    }
    st.flyTo = (id) => {
      const p = pos.get(id)
      if (p) startFlight(new THREE.Vector3(...p), 9)
      else {
        const a = anchors.find((x) => x.id === id)
        if (a) startFlight(new THREE.Vector3(...a.pos), 16)
      }
    }
    st.flyHome = () => startFlight(new THREE.Vector3(0, 0, 0), 60)

    // ---- input (the demo's kept model) ----
    const el = renderer.domElement
    el.style.cursor = 'grab'
    const pointers = new Map()
    let lastPinch = 0
    let tapDown = null
    let lastTap = { id: undefined, t: 0, timer: 0 }

    const pickAt = (x, y) => {
      const r = el.getBoundingClientRect()
      st.mouseV.set(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1)
      st.raycaster.setFromCamera(st.mouseV, camera)
      const hits = st.raycaster.intersectObjects([...nodeMeshes, ...anchorMeshes], false)
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
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
      st.flight = null
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
      const cur = { x: e.clientX, y: e.clientY }
      if (pointers.size === 1) {
        st.sph.theta -= (cur.x - prev.x) * 0.0055
        st.sph.phi = clamp(st.sph.phi - (cur.y - prev.y) * 0.0045, 0.12, 1.52)
      }
      pointers.set(e.pointerId, cur)
      if (pointers.size === 2) {
        const v = [...pointers.values()]
        const d = Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y)
        if (lastPinch > 0) st.sph.radius = clamp(st.sph.radius * (lastPinch / d), 5, 160)
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
        tapDown = null
      }
    }
    const onWheel = (e) => {
      e.preventDefault()
      st.flight = null
      st.sph.radius = clamp(st.sph.radius * (1 + e.deltaY * 0.0011), 5, 160)
    }
    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    el.addEventListener('wheel', onWheel, { passive: false })

    const ro = new ResizeObserver(() => {
      const w = Math.max(mount.clientWidth, 1), h = Math.max(mount.clientHeight, 1)
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    })
    ro.observe(mount)

    // deep-link on load
    const hashId = decodeURIComponent(location.hash.slice(1))
    if (hashId && (pos.has(hashId) || anchors.some((a) => a.id === hashId))) {
      setTimeout(() => { st.flyTo(hashId); onFocus(hashId) }, 300)
    }

    const animate = () => {
      const now = performance.now() / 1000
      if (st.flight) {
        const f = st.flight
        const p = Math.min(1, (now - f.start) / f.dur)
        const e = easeInOutCubic(p)
        st.sph.target.lerpVectors(f.fromT, f.toT, e)
        st.sph.radius = f.fromR + (f.toR - f.fromR) * e
        if (p >= 1) st.flight = null
      }
      const fid = focusRef.current
      const flt = st.filtersRef.current
      for (const m of nodeMeshes) {
        const n = atlas.byId.get(m.userData.nodeId)
        const passes = !flt || flt[n.status] !== false
        m.visible = passes
        let target = 1
        if (fid === m.userData.nodeId) target = 1.2 + Math.sin(now * 3.2) * 0.05
        else if (hoverRef.current === m.userData.nodeId) target = 1.22
        m.scale.setScalar(m.scale.x + (target - m.scale.x) * 0.18)
        // active beacon: slow pulse (graceful at zero actives — this just never fires)
        if (m.userData.active) m.material.emissiveIntensity = 0.5 + 0.35 * (0.5 + 0.5 * Math.sin(now * 2.2))
      }
      const { theta, phi, radius, target: tg } = st.sph
      camera.position.set(
        tg.x + radius * Math.sin(phi) * Math.sin(theta),
        tg.y + radius * Math.cos(phi),
        tg.z + radius * Math.sin(phi) * Math.cos(theta))
      camera.lookAt(tg)
      renderer.render(scene, camera)
      st.raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(st.raf)
      clearTimeout(lastTap.timer)
      ro.disconnect()
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
      el.removeEventListener('wheel', onWheel)
      scene.traverse((o) => {
        o.geometry?.dispose?.()
        if (o.material) { o.material.map?.dispose?.(); o.material.dispose?.() }
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [atlas, lens])

  // focus side-effects: neighborhood edges + related-set visibility + deep-link hash
  useEffect(() => {
    const st = stateRef.current
    if (!st.showNeighborhood) return
    st.showNeighborhood(focusId && atlas.byId.has(focusId) ? focusId : null)
    const on = Boolean(focusId)
    st.relEdges.visible = false // related shown only as the focused node's local set
    st.otherEdges.visible = false
    if (focusId) history.replaceState(null, '', `#${encodeURIComponent(focusId)}`)
    else history.replaceState(null, '', location.pathname + location.search)
  }, [focusId, atlas])

  // filter changes flow into the render loop without a rebuild
  useEffect(() => {
    if (stateRef.current.filtersRef) stateRef.current.filtersRef.current = filters
  }, [filters])

  // external fly requests (search / recent / detail links)
  useEffect(() => {
    if (flyRequest && stateRef.current.flyTo) {
      stateRef.current.flyTo(flyRequest.id)
    }
  }, [flyRequest])

  return <div className="stage" ref={mountRef} />
}

// canvas chip sprite (the demo's, kept; opts added for the road's furniture)
export function makeChip(text, opts = {}) {
  const { worldH = 1.15, opacity = 1, color = '#edeae5', bare = false } = opts
  const px = 2
  const font = 26 * px
  const padX = 20 * px, padY = 11 * px
  const c = document.createElement('canvas')
  let ctx = c.getContext('2d')
  const fontSpec = `600 ${font}px -apple-system, 'Segoe UI', Roboto, sans-serif`
  ctx.font = fontSpec
  const tw = ctx.measureText(text).width
  c.width = Math.ceil(tw + padX * 2)
  c.height = Math.ceil(font + padY * 2)
  ctx = c.getContext('2d')
  const r = 13 * px, w = c.width, h = c.height
  if (!bare) {
    ctx.beginPath()
    ctx.moveTo(r, 0); ctx.lineTo(w - r, 0); ctx.arcTo(w, 0, w, r, r)
    ctx.lineTo(w, h - r); ctx.arcTo(w, h, w - r, h, r)
    ctx.lineTo(r, h); ctx.arcTo(0, h, 0, h - r, r)
    ctx.lineTo(0, r); ctx.arcTo(0, 0, r, 0, r)
    ctx.closePath()
    ctx.fillStyle = 'rgba(31,27,24,0.92)'
    ctx.fill()
    ctx.lineWidth = 2 * px
    ctx.strokeStyle = 'rgba(255,255,255,0.13)'
    ctx.stroke()
  }
  ctx.font = fontSpec
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color
  ctx.fillText(text, w / 2, h / 2 + font * 0.04)
  const tex = new THREE.CanvasTexture(c)
  tex.minFilter = THREE.LinearFilter
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({
    map: tex, transparent: true, depthWrite: false, opacity,
  }))
  sp.scale.set(worldH * (w / h), worldH, 1)
  return sp
}
