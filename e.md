
i am thinking using below like visualizer for homegrown project.  but there is something i cant decide

the nodes should be concepts? if yes then inquiry folder files can be used as a source to generate concept list and subconcepts and we can visualize them 
or lets make these nodes inquiry folders, it will be native to how project persists, no need for weird concept creation logic which is a challange, 

so what do you think ? are there any alternatives? 

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Atlas Nodemap Explorer                                             */
/*                                                                     */
/*  View 1 — NODEMAP: 3D graph (root + modules + subnodes).            */
/*    drag = orbit · scroll/pinch = zoom                               */
/*    single click node  = fly to it (centered, subnodes in view)      */
/*    double click node  = open node detail                            */
/*    double click empty = back to overview                            */
/*                                                                     */
/*  View 2 — NODE DETAIL: left = generic info (title, created,         */
/*    last worked on — subnode work rolls up), right (wider) =         */
/*    markdown display. "← FULL VIEW" returns to the map.              */
/* ------------------------------------------------------------------ */

/* ----------------------------- utils ------------------------------ */

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const easeInOutCubic = (p) =>
  p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const DAY = 86400000;
const NOW = Date.UTC(2026, 6, 11, 9, 0, 0);
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const fmtDate = (t) => {
  const d = new Date(t);
  return MONTHS[d.getUTCMonth()] + " " + d.getUTCDate() + ", " + d.getUTCFullYear();
};
const relDate = (t) => {
  const days = Math.max(0, Math.floor((NOW - t) / DAY));
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return days + " days ago";
  const mo = Math.round(days / 30);
  if (mo < 12) return mo + (mo === 1 ? " month ago" : " months ago");
  return Math.round(mo / 12) + " years ago";
};

const hashStr = (s) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
};
const pick = (arr, seed) => arr[hashStr(seed) % arr.length];
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* --------------------------- dummy data --------------------------- */

const MODULE_DEFS = [
  { title: "Render Pipeline", subs: ["frame-graph","shadow-cascades","gpu-timers","post-fx-stack","mesh-batcher","hdr-tonemap"] },
  { title: "Platform Bridge", subs: ["win32-loop","cocoa-shim","wayland-input","android-jni","gamepad-map"] },
  { title: "Asset Compiler",  subs: ["texture-bake","mesh-import","shader-cache","pak-writer"] },
  { title: "Physics Solver",  subs: ["broadphase","contact-cache","ragdoll-rig","ccd-sweep","joint-limits"] },
  { title: "Audio Mixer",     subs: ["dsp-graph","occlusion-bus","stream-decode","reverb-zones"] },
  { title: "UI Toolkit",      subs: ["layout-flex","font-atlas","theme-tokens","gesture-router","virtual-list"] },
  { title: "Net Sync",        subs: ["snapshot-delta","lag-comp","lobby-api","packet-crypt"] },
  { title: "Script Host",     subs: ["hot-reload","bytecode-vm","ffi-bindings","debug-probe","coroutine-pool"] },
];

const OWNERS = ["k.demir", "a.polat", "s.ono", "m.reyes", "j.okafor"];
const VERBS = ["Refactored", "Profiled", "Stabilized", "Documented", "Instrumented", "Simplified"];

const NODES = {};
const COUNTS = { modules: 0, subs: 0 };

function buildMd(n) {
  const owner = pick(OWNERS, n.id);
  const owner2 = pick(OWNERS, n.id + "x");
  const verb = pick(VERBS, n.id + "v");

  if (n.kind === "root") {
    return [
      "# Atlas Core",
      "",
      "The root of the graph. Every module below hangs off this node, and activity anywhere in the tree rolls up here.",
      "",
      "## How to read this map",
      "- **Orange nodes** are modules. Click once to fly to one, double-click to open it.",
      "- **Pale nodes** are subnodes: the actual units of work inside a module.",
      "- *Last worked on* for any node includes work done on its subnodes.",
      "",
      "## Conventions",
      "1. One markdown file per node, kept short.",
      "2. Subnodes log their own activity; parents summarize.",
      "3. Anything stale for 90+ days gets flagged at review.",
      "",
      "```txt",
      "atlas graph status",
      "→ " + COUNTS.modules + " modules · " + COUNTS.subs + " subnodes · 0 orphans",
      "```",
    ].join("\n");
  }

  if (n.kind === "module") {
    const subs = n.childIds.map((c) => NODES[c].title);
    const s1 = subs[0] || "core";
    const s2 = subs[1] || s1;
    const s3 = subs[2] || s1;
    return [
      "# " + n.title,
      "",
      "Module of **Atlas Core** — " + n.childIds.length + " subnodes tracked.",
      "",
      "## Overview",
      n.title + " owns everything under the `" + slug(n.title) + "` namespace. It exposes a small, stable surface to the rest of the graph and keeps internals free to change without ceremony.",
      "",
      "## Current state",
      "- Owner: `" + owner + "`",
      "- Created: " + fmtDate(n.createdAt),
      "- Last direct edit: " + fmtDate(n.lastWorkedAt),
      "- Health: " + pick(["green", "green", "amber"], n.id + "h"),
      "",
      "## Working notes",
      verb + " the `" + s1 + "` path recently. The remaining risk sits in `" + s2 + "`, which still assumes a single producer. Nothing here blocks other modules.",
      "",
      "```txt",
      "atlas graph inspect " + slug(n.title),
      "→ " + n.childIds.length + " subnodes · last activity " + relDate(n.lastWorkedAt),
      "```",
      "",
      "## Next",
      "1. Close out `" + s3 + "`.",
      "2. Write a short design note for `" + s2 + "`.",
      "3. Review open questions with `" + owner2 + "`.",
    ].join("\n");
  }

  const parent = NODES[n.parentId];
  return [
    "# " + n.title,
    "",
    "Subnode of **" + parent.title + "**.",
    "",
    "## Summary",
    "Tracks the " + n.title.replace(/-/g, " ") + " work inside " + parent.title + ". Scope is deliberately narrow: one concern, one doc.",
    "",
    "## Log",
    "- " + fmtDate(n.createdAt) + " — created under " + parent.title,
    "- " + fmtDate(n.lastWorkedAt) + " — " + verb.toLowerCase() + " the main path",
    "",
    "## Open",
    "- [ ] tighten tests around the edge cases",
    "- [ ] fold findings back into the `" + slug(parent.title) + "` doc",
  ].join("\n");
}

(function build() {
  const rng = mulberry32(20260711);
  const R = (a, b) => a + rng() * (b - a);
  const RI = (a, b) => Math.round(R(a, b));

  const root = {
    id: "root", kind: "root", title: "Atlas Core", parentId: null, childIds: [],
    pos: [0, 0.6, 0],
    createdAt: NOW - 620 * DAY,
    lastWorkedAt: NOW - RI(4, 40) * DAY,
    md: "",
  };
  NODES.root = root;

  MODULE_DEFS.forEach((def, i) => {
    const id = "m" + i;
    const ang = (i / MODULE_DEFS.length) * Math.PI * 2 + R(-0.22, 0.22);
    const rad = R(12.5, 17.5);
    const pos = [Math.cos(ang) * rad, R(-3.5, 5.5), Math.sin(ang) * rad];
    const createdAt = root.createdAt + RI(10, 160) * DAY;
    const node = {
      id, kind: "module", title: def.title, parentId: "root", childIds: [],
      pos, createdAt, lastWorkedAt: NOW - RI(1, 110) * DAY, md: "",
    };
    NODES[id] = node;
    root.childIds.push(id);
    COUNTS.modules += 1;

    def.subs.forEach((s, j) => {
      const sid = id + "s" + j;
      const dx = R(-1, 1), dy = R(-0.7, 0.95), dz = R(-1, 1);
      const len = Math.hypot(dx, dy, dz) || 1;
      const d = R(3.2, 5.8);
      const spos = [pos[0] + (dx / len) * d, pos[1] + (dy / len) * d, pos[2] + (dz / len) * d];
      const screated = Math.min(createdAt + RI(5, 300) * DAY, NOW - 5 * DAY);
      NODES[sid] = {
        id: sid, kind: "sub", title: s, parentId: id, childIds: [],
        pos: spos, createdAt: screated,
        lastWorkedAt: Math.max(screated, NOW - RI(0, 120) * DAY),
        md: "",
      };
      node.childIds.push(sid);
      COUNTS.subs += 1;
    });
  });

  Object.values(NODES).forEach((n) => { n.md = buildMd(n); });
})();

/* "last worked on" including all descendant subnode activity */
function effLast(n) {
  let best = { t: n.lastWorkedAt, via: null };
  n.childIds.forEach((cid) => {
    const c = NODES[cid];
    const sub = effLast(c);
    if (sub.t > best.t) best = { t: sub.t, via: sub.via || c.title };
  });
  return best;
}

/* --------------------------- three helpers ------------------------ */

function makeChip(text, big) {
  const px = 2; // supersample for crisp text
  const font = (big ? 34 : 26) * px;
  const padX = 20 * px;
  const padY = 11 * px;
  const c = document.createElement("canvas");
  let ctx = c.getContext("2d");
  const fontSpec = "600 " + font + "px -apple-system, 'Segoe UI', Roboto, sans-serif";
  ctx.font = fontSpec;
  const tw = ctx.measureText(text).width;
  c.width = Math.ceil(tw + padX * 2);
  c.height = Math.ceil(font + padY * 2);
  ctx = c.getContext("2d");
  const r = 13 * px;
  const w = c.width, h = c.height;
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(w - r, 0);
  ctx.arcTo(w, 0, w, r, r);
  ctx.lineTo(w, h - r);
  ctx.arcTo(w, h, w - r, h, r);
  ctx.lineTo(r, h);
  ctx.arcTo(0, h, 0, h - r, r);
  ctx.lineTo(0, r);
  ctx.arcTo(0, 0, r, 0, r);
  ctx.closePath();
  ctx.fillStyle = "rgba(31,27,24,0.92)";
  ctx.fill();
  ctx.lineWidth = 2 * px;
  ctx.strokeStyle = "rgba(255,255,255,0.13)";
  ctx.stroke();
  ctx.font = fontSpec;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#edeae5";
  ctx.fillText(text, w / 2, h / 2 + font * 0.04);

  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = THREE.LinearFilter;
  const sp = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false })
  );
  const worldH = big ? 1.6 : 1.15;
  sp.scale.set(worldH * (w / h), worldH, 1);
  return sp;
}

function edgeLines(pairs, color, opacity) {
  const arr = new Float32Array(pairs.length * 3);
  pairs.forEach((p, i) => {
    arr[i * 3] = p[0];
    arr[i * 3 + 1] = p[1];
    arr[i * 3 + 2] = p[2];
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  return new THREE.LineSegments(
    geo,
    new THREE.LineBasicMaterial({ color, transparent: true, opacity })
  );
}

/* ------------------------ mini markdown renderer ------------------ */

const INLINE_RE = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[[^\]]+\]\([^)]+\))/g;

function renderInline(text) {
  const out = [];
  let last = 0, m, k = 0;
  INLINE_RE.lastIndex = 0;
  while ((m = INLINE_RE.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const s = m[0];
    if (m[1]) out.push(<code key={k++}>{s.slice(1, -1)}</code>);
    else if (m[2]) out.push(<strong key={k++}>{s.slice(2, -2)}</strong>);
    else if (m[3]) out.push(<em key={k++}>{s.slice(1, -1)}</em>);
    else if (m[4]) {
      const mm = s.match(/\[([^\]]+)\]\(([^)]+)\)/);
      out.push(
        <a key={k++} href={mm[2]} target="_blank" rel="noreferrer">{mm[1]}</a>
      );
    }
    last = m.index + s.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const taskify = (s) => s.replace(/^\[ \] /, "☐ ").replace(/^\[x\] /i, "☑ ");

function Markdown({ src }) {
  const lines = src.split("\n");
  const blocks = [];
  let i = 0, key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^```/.test(line)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i++; }
      i++;
      blocks.push(<pre key={key++}><code>{buf.join("\n")}</code></pre>);
      continue;
    }
    if (/^### /.test(line)) { blocks.push(<h3 key={key++}>{renderInline(line.slice(4))}</h3>); i++; continue; }
    if (/^## /.test(line)) { blocks.push(<h2 key={key++}>{renderInline(line.slice(3))}</h2>); i++; continue; }
    if (/^# /.test(line)) { blocks.push(<h1 key={key++}>{renderInline(line.slice(2))}</h1>); i++; continue; }
    if (/^---+\s*$/.test(line)) { blocks.push(<hr key={key++} />); i++; continue; }
    if (/^> /.test(line)) {
      const buf = [];
      while (i < lines.length && /^> /.test(lines[i])) { buf.push(lines[i].slice(2)); i++; }
      blocks.push(<blockquote key={key++}>{renderInline(buf.join(" "))}</blockquote>);
      continue;
    }
    if (/^[-*] /.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) { items.push(lines[i].slice(2)); i++; }
      blocks.push(
        <ul key={key++}>{items.map((it, j) => <li key={j}>{renderInline(taskify(it))}</li>)}</ul>
      );
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push(lines[i].replace(/^\d+\. /, "")); i++; }
      blocks.push(
        <ol key={key++}>{items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ol>
      );
      continue;
    }
    if (line.trim() === "") { i++; continue; }
    const buf = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^(#{1,3} |```|> |[-*] |\d+\. |---)/.test(lines[i])
    ) { buf.push(lines[i]); i++; }
    blocks.push(<p key={key++}>{renderInline(buf.join(" "))}</p>);
  }
  return <div className="md">{blocks}</div>;
}

/* ----------------------------- detail view ------------------------ */

function DetailView({ nodeId, onBack, onOpen }) {
  const n = NODES[nodeId];
  const eff = effLast(n);
  const parent = n.parentId ? NODES[n.parentId] : null;
  const kindLabel = n.kind === "sub" ? "SUBNODE" : n.kind === "module" ? "MODULE" : "ROOT";
  return (
    <div className="detail">
      <div className="detail-top">
        <button className="back-btn" onClick={onBack}>← FULL VIEW</button>
        <span className="crumb">
          {parent ? parent.title + " / " : ""}
          <b>{n.title}</b>
        </span>
      </div>
      <div className="detail-body">
        <aside className="info">
          <div className={"kind-badge " + n.kind}>{kindLabel}</div>
          <h1 className="node-title">{n.title}</h1>

          <div className="meta">
            <div className="meta-row">
              <span className="meta-k">Created</span>
              <span className="meta-v">
                {fmtDate(n.createdAt)}
                <em>{relDate(n.createdAt)}</em>
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-k">Last worked on</span>
              <span className="meta-v">
                {fmtDate(eff.t)}
                <em>{relDate(eff.t)}</em>
                {eff.via && <em className="via">via subnode “{eff.via}”</em>}
              </span>
            </div>
            {n.childIds.length > 0 && (
              <div className="meta-row">
                <span className="meta-k">Subnodes</span>
                <span className="meta-v">{n.childIds.length}</span>
              </div>
            )}
            {parent && (
              <div className="meta-row">
                <span className="meta-k">Parent</span>
                <button className="link" onClick={() => onOpen(parent.id)}>{parent.title}</button>
              </div>
            )}
          </div>

          {n.childIds.length > 0 && (
            <div className="sublist">
              <div className="sublist-h">SUBNODES</div>
              {n.childIds.map((cid) => {
                const c = NODES[cid];
                return (
                  <button key={cid} className="subrow" onClick={() => onOpen(cid)}>
                    <span className={"subdot " + c.kind} />
                    <span className="subname">{c.title}</span>
                    <span className="subwhen">{relDate(effLast(c).t)}</span>
                  </button>
                );
              })}
            </div>
          )}
        </aside>

        <section className="mdwrap">
          <div className="md-file">
            <span className="md-chip">{slug(n.title)}.md</span>
          </div>
          <Markdown src={n.md} />
        </section>
      </div>
    </div>
  );
}

/* ----------------------------- main component --------------------- */

const HOME = { theta: 0.85, phi: 1.12, radius: 34 };
const SINGLE_DELAY = 300;
const DOUBLE_MS = 330;
const MOVE_TOL = 6;

export default function NodemapExplorer() {
  const mountRef = useRef(null);
  const threeRef = useRef(null);
  const hoverRef = useRef(null);
  const focusedRef = useRef(null);
  const viewRef = useRef("map");
  const tapRef = useRef({ lastId: undefined, time: 0, timer: 0 });

  const [view, setView] = useState("map");
  const [detailId, setDetailId] = useState(null);
  const [focusedId, setFocusedId] = useState(null);

  viewRef.current = view;

  /* ---- scene ---- */
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x140d09, 46, 150);

    const camera = new THREE.PerspectiveCamera(
      50,
      Math.max(mount.clientWidth, 1) / Math.max(mount.clientHeight, 1),
      0.1,
      400
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.className = "nm-canvas";
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffd9b0, 0x14100c, 0.75));
    const dir = new THREE.DirectionalLight(0xffffff, 0.85);
    dir.position.set(20, 28, 12);
    scene.add(dir);
    const pt = new THREE.PointLight(0xff7a1a, 0.7, 70);
    pt.position.set(0, 3, 0);
    scene.add(pt);

    const geos = {
      root: new THREE.SphereGeometry(1.7, 32, 24),
      module: new THREE.SphereGeometry(1.15, 28, 20),
      sub: new THREE.SphereGeometry(0.42, 18, 14),
    };
    const matSpec = {
      root:   { color: "#ff8c2e", emissive: "#ff6a00", e: 0.55, rough: 0.45 },
      module: { color: "#ef8f3a", emissive: "#c2570a", e: 0.5, rough: 0.5 },
      sub:    { color: "#ced4ea", emissive: "#6b7390", e: 0.3, rough: 0.6 },
    };

    const nodeMeshes = [];
    const meshById = new Map();
    Object.values(NODES).forEach((n) => {
      const s = matSpec[n.kind];
      const mesh = new THREE.Mesh(
        geos[n.kind],
        new THREE.MeshStandardMaterial({
          color: s.color,
          emissive: s.emissive,
          emissiveIntensity: s.e,
          roughness: s.rough,
          metalness: 0.08,
        })
      );
      mesh.position.set(n.pos[0], n.pos[1], n.pos[2]);
      mesh.userData = { nodeId: n.id, kind: n.kind, baseEmissive: s.e };
      scene.add(mesh);
      nodeMeshes.push(mesh);
      meshById.set(n.id, mesh);

      if (n.kind !== "sub") {
        const chip = makeChip(n.kind === "root" ? "root" : n.title, n.kind === "root");
        const r = n.kind === "root" ? 1.7 : 1.15;
        chip.position.set(n.pos[0], n.pos[1] + r + 1.2, n.pos[2]);
        scene.add(chip);
      }
    });

    // edges
    const rootPairs = [];
    const subPairs = [];
    Object.values(NODES).forEach((n) => {
      if (!n.parentId) return;
      const p = NODES[n.parentId];
      const target = n.kind === "module" ? rootPairs : subPairs;
      target.push(p.pos, n.pos);
    });
    scene.add(edgeLines(rootPairs, 0x9b9fa8, 0.32));
    scene.add(edgeLines(subPairs, 0x8b8f9b, 0.26));

    const t = {
      scene, camera, renderer, nodeMeshes, meshById,
      raycaster: new THREE.Raycaster(),
      mouseV: new THREE.Vector2(),
      sph: { ...HOME, target: new THREE.Vector3(0, 1, 0) },
      flight: null,
      raf: 0,
    };
    threeRef.current = t;

    /* ---- flight helpers ---- */
    const startFlight = (toTarget, toRadius, homeAngles) => {
      t.flight = {
        fromT: t.sph.target.clone(), toT: toTarget,
        fromR: t.sph.radius, toR: toRadius,
        fromTh: t.sph.theta, toTh: homeAngles ? HOME.theta : t.sph.theta,
        fromPh: t.sph.phi, toPh: homeAngles ? HOME.phi : t.sph.phi,
        start: performance.now() / 1000, dur: 0.9,
      };
    };
    t.flyToNode = (id) => {
      const n = NODES[id];
      const focusR = n.kind === "root" ? 22 : n.kind === "module" ? 11 : 6.5;
      startFlight(new THREE.Vector3(n.pos[0], n.pos[1], n.pos[2]), focusR, false);
    };
    t.flyHome = () => startFlight(new THREE.Vector3(0, 1, 0), HOME.radius, true);

    /* ---- input ---- */
    const el = renderer.domElement;
    el.style.cursor = "grab";
    const pointers = new Map();
    let lastPinch = 0;
    let tapDown = null;
    let lastHoverT = 0;

    const pickAt = (clientX, clientY) => {
      const rect = el.getBoundingClientRect();
      t.mouseV.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      t.mouseV.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      t.raycaster.setFromCamera(t.mouseV, camera);
      const hits = t.raycaster.intersectObjects(nodeMeshes, false);
      return hits.length ? hits[0].object.userData.nodeId : null;
    };

    const handleTap = (x, y) => {
      const id = pickAt(x, y);
      const nowMs = performance.now();
      const tp = tapRef.current;
      if (tp.lastId === id && nowMs - tp.time < DOUBLE_MS) {
        clearTimeout(tp.timer);
        tp.lastId = undefined;
        if (id) {
          setDetailId(id);
          setView("detail");
        } else {
          t.flyHome();
          setFocusedId(null);
        }
      } else {
        tp.lastId = id;
        tp.time = nowMs;
        clearTimeout(tp.timer);
        tp.timer = setTimeout(() => {
          if (id) {
            t.flyToNode(id);
            setFocusedId(id);
          } else {
            setFocusedId(null);
          }
        }, SINGLE_DELAY);
      }
    };

    const onDown = (e) => {
      el.setPointerCapture && el.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      t.flight = null;
      el.style.cursor = "grabbing";
      tapDown = pointers.size === 1
        ? { x: e.clientX, y: e.clientY, id: e.pointerId }
        : null;
    };
    const onMove = (e) => {
      if (pointers.size === 0) {
        // hover picking (mouse only)
        const nowS = performance.now() / 1000;
        if (nowS - lastHoverT > 0.04) {
          lastHoverT = nowS;
          const id = pickAt(e.clientX, e.clientY);
          hoverRef.current = id;
          el.style.cursor = id ? "pointer" : "grab";
        }
        return;
      }
      if (!pointers.has(e.pointerId)) return;
      const prev = pointers.get(e.pointerId);
      const cur = { x: e.clientX, y: e.clientY };
      if (pointers.size === 1) {
        t.sph.theta -= (cur.x - prev.x) * 0.0055;
        t.sph.phi = clamp(t.sph.phi - (cur.y - prev.y) * 0.0045, 0.12, 1.52);
      }
      pointers.set(e.pointerId, cur);
      if (pointers.size === 2) {
        const vals = [...pointers.values()];
        const d = Math.hypot(vals[0].x - vals[1].x, vals[0].y - vals[1].y);
        if (lastPinch > 0) t.sph.radius = clamp(t.sph.radius * (lastPinch / d), 5, 90);
        lastPinch = d;
      }
    };
    const onUp = (e) => {
      pointers.delete(e.pointerId);
      lastPinch = 0;
      el.style.cursor = "grab";
      if (tapDown && e.pointerId === tapDown.id) {
        const moved = Math.hypot(e.clientX - tapDown.x, e.clientY - tapDown.y);
        if (moved < MOVE_TOL) handleTap(e.clientX, e.clientY);
        tapDown = null;
      }
    };
    const onWheel = (e) => {
      e.preventDefault();
      t.flight = null;
      t.sph.radius = clamp(t.sph.radius * (1 + e.deltaY * 0.0011), 5, 90);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("wheel", onWheel, { passive: false });

    const ro = new ResizeObserver(() => {
      const w = Math.max(mount.clientWidth, 1);
      const h = Math.max(mount.clientHeight, 1);
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(mount);

    /* ---- loop ---- */
    const animate = () => {
      const now = performance.now() / 1000;

      if (t.flight) {
        const f = t.flight;
        const p = Math.min(1, (now - f.start) / f.dur);
        const e = easeInOutCubic(p);
        t.sph.target.lerpVectors(f.fromT, f.toT, e);
        t.sph.radius = f.fromR + (f.toR - f.fromR) * e;
        t.sph.theta = f.fromTh + (f.toTh - f.fromTh) * e;
        t.sph.phi = f.fromPh + (f.toPh - f.fromPh) * e;
        if (p >= 1) t.flight = null;
      }

      nodeMeshes.forEach((m) => {
        const id = m.userData.nodeId;
        let target = 1;
        if (focusedRef.current === id) target = 1.14 + Math.sin(now * 3.2) * 0.05;
        else if (hoverRef.current === id) target = 1.2;
        m.scale.setScalar(m.scale.x + (target - m.scale.x) * 0.18);
      });

      const { theta, phi, radius, target: tg } = t.sph;
      camera.position.set(
        tg.x + radius * Math.sin(phi) * Math.sin(theta),
        tg.y + radius * Math.cos(phi),
        tg.z + radius * Math.sin(phi) * Math.cos(theta)
      );
      camera.lookAt(tg);
      if (viewRef.current === "map") renderer.render(scene, camera);
      t.raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(t.raf);
      clearTimeout(tapRef.current.timer);
      ro.disconnect();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("wheel", onWheel);
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (o.material.map) o.material.map.dispose && o.material.map.dispose();
          o.material.dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      threeRef.current = null;
    };
  }, []);

  /* ---- reflect focus ---- */
  useEffect(() => {
    focusedRef.current = focusedId;
    const t = threeRef.current;
    if (!t) return;
    t.meshById.forEach((m, id) => {
      m.material.emissiveIntensity =
        id === focusedId ? m.userData.baseEmissive * 1.9 : m.userData.baseEmissive;
    });
  }, [focusedId]);

  const handleBack = () => {
    setView("map");
    setFocusedId(null);
    const t = threeRef.current;
    if (t) t.flyHome();
  };

  /* ------------------------------- UI ----------------------------- */
  return (
    <div className="nm-root">
      <style>{CSS}</style>

      <div className="stage" ref={mountRef}>
        <div className="glow g1" />
        <div className="glow g2" />
        <div className="vignette" />
        <div className="hud-tl">
          <div className="hud-title">ATLAS NODEMAP</div>
          <div className="hud-sub">1 root · {COUNTS.modules} modules · {COUNTS.subs} subnodes</div>
        </div>
        <button
          className="hud-btn"
          onClick={() => {
            const t = threeRef.current;
            if (t) t.flyHome();
            setFocusedId(null);
          }}
        >
          FULL VIEW
        </button>
        <div className="hint">drag rotate · scroll / pinch zoom · click focus · double-click open</div>
      </div>

      {view === "detail" && detailId && (
        <DetailView nodeId={detailId} onBack={handleBack} onOpen={(id) => setDetailId(id)} />
      )}
    </div>
  );
}

/* ------------------------------- styles --------------------------- */

const CSS = `
.nm-root{position:relative;width:100%;height:100vh;overflow:hidden;color:#e9e4dd;background:#0b0705;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,sans-serif;}
.stage{position:absolute;inset:0;
  background:radial-gradient(120% 90% at 50% 38%, #261a12 0%, #170f0a 48%, #0b0705 100%);}
.nm-canvas{position:absolute;inset:0;display:block;}
.glow{position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none;}
.g1{width:340px;height:340px;right:-70px;bottom:-90px;background:#7a3c12;opacity:.35;}
.g2{width:260px;height:260px;left:6%;top:-90px;background:#4a2a12;opacity:.26;}
.vignette{position:absolute;inset:0;pointer-events:none;z-index:1;
  background:radial-gradient(80% 70% at 50% 45%, transparent 55%, rgba(0,0,0,.55) 100%);}
.hud-tl{position:absolute;top:14px;left:16px;z-index:2;pointer-events:none;}
.hud-title{font-size:12px;font-weight:700;letter-spacing:.24em;color:#f0b986;}
.hud-sub{font-size:11px;color:#9a8f83;margin-top:3px;letter-spacing:.04em;}
.hud-btn{position:absolute;top:14px;right:16px;z-index:2;padding:6px 12px;border-radius:999px;cursor:pointer;
  font-family:inherit;font-size:10.5px;font-weight:700;letter-spacing:.14em;color:#d9cfc2;
  background:rgba(34,28,24,.7);border:1px solid rgba(255,255,255,.14);transition:border-color .15s,color .15s;}
.hud-btn:hover{border-color:#f0a45f;color:#f6d9b7;}
.hint{position:absolute;bottom:11px;right:14px;z-index:2;font-size:10.5px;color:#8d8276;letter-spacing:.04em;
  pointer-events:none;background:rgba(12,8,6,.6);padding:3px 9px;border-radius:5px;}

/* ---------------- detail view ---------------- */
.detail{position:absolute;inset:0;z-index:10;display:flex;flex-direction:column;
  background:radial-gradient(120% 90% at 50% 30%, #241811 0%, #150e09 52%, #0b0705 100%);}
.detail-top{display:flex;align-items:center;gap:14px;padding:14px 18px;}
.back-btn{padding:7px 14px;border-radius:999px;cursor:pointer;font-family:inherit;font-size:11px;
  font-weight:700;letter-spacing:.12em;color:#f6d9b7;background:rgba(240,164,95,.1);
  border:1px solid rgba(240,164,95,.45);transition:background .15s;}
.back-btn:hover{background:rgba(240,164,95,.2);}
.crumb{font-size:12.5px;color:#9a8f83;}
.crumb b{color:#e9e4dd;font-weight:600;}
.detail-body{flex:1;display:flex;gap:16px;padding:0 18px 18px;min-height:0;}
.info{width:300px;min-width:264px;overflow-y:auto;border:1px solid rgba(255,255,255,.09);
  background:rgba(255,255,255,.035);border-radius:12px;padding:18px;}
.kind-badge{display:inline-block;font-size:9.5px;font-weight:700;letter-spacing:.18em;padding:3px 9px;
  border-radius:999px;border:1px solid;margin-bottom:12px;}
.kind-badge.root,.kind-badge.module{color:#f0a45f;border-color:rgba(240,164,95,.5);background:rgba(240,164,95,.08);}
.kind-badge.sub{color:#b9c0dd;border-color:rgba(185,192,221,.45);background:rgba(185,192,221,.07);}
.node-title{font-size:24px;font-weight:700;margin:0 0 14px;color:#f4efe8;line-height:1.2;}
.meta{border-top:1px solid rgba(255,255,255,.08);}
.meta-row{padding:11px 0;border-bottom:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;gap:3px;}
.meta-k{font-size:10px;letter-spacing:.16em;color:#93887b;text-transform:uppercase;}
.meta-v{font-size:14px;color:#ece7df;display:flex;flex-direction:column;gap:1px;}
.meta-v em{font-style:normal;font-size:11.5px;color:#93887b;}
.meta-v .via{color:#f0a45f;}
.link{color:#f0a45f;background:none;border:none;padding:0;font:inherit;font-size:14px;cursor:pointer;text-align:left;}
.link:hover{text-decoration:underline;}
.sublist{margin-top:16px;}
.sublist-h{font-size:10px;letter-spacing:.16em;color:#93887b;margin-bottom:6px;}
.subrow{display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:7px 8px;border-radius:7px;
  background:transparent;border:none;color:#d8d2c9;cursor:pointer;font-family:inherit;font-size:12.5px;
  transition:background .12s;}
.subrow:hover{background:rgba(255,255,255,.06);}
.subdot{width:7px;height:7px;border-radius:50%;flex-shrink:0;}
.subdot.sub{background:#c3c9e4;}
.subdot.module{background:#ef8f3a;}
.subname{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.subwhen{font-size:10.5px;color:#93887b;font-family:ui-monospace,Menlo,Consolas,monospace;}
.mdwrap{flex:1;min-width:0;overflow-y:auto;border:1px solid rgba(255,255,255,.09);
  background:rgba(0,0,0,.28);border-radius:12px;padding:22px 28px;}
.md-file{margin-bottom:14px;}
.md-chip{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:#c9beae;
  background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);padding:3px 9px;border-radius:6px;}
.info::-webkit-scrollbar,.mdwrap::-webkit-scrollbar{width:9px;}
.info::-webkit-scrollbar-thumb,.mdwrap::-webkit-scrollbar-thumb{background:#3a2f26;border-radius:5px;}

/* ---------------- markdown ---------------- */
.md h1{font-size:26px;font-weight:700;margin:0 0 14px;color:#f4efe8;}
.md h2{font-size:16.5px;font-weight:700;margin:22px 0 8px;color:#f0a45f;letter-spacing:.02em;}
.md h3{font-size:14px;font-weight:700;margin:16px 0 6px;color:#e4b88a;}
.md p{margin:0 0 12px;line-height:1.68;color:#d8d2c9;font-size:14.5px;}
.md ul,.md ol{margin:0 0 14px;padding-left:22px;line-height:1.68;color:#d8d2c9;font-size:14.5px;}
.md li{margin:3px 0;}
.md strong{color:#f4efe8;}
.md em{color:#e0d5c5;}
.md code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12.5px;color:#f3c896;
  background:rgba(255,255,255,.08);padding:1.5px 6px;border-radius:5px;}
.md pre{background:#160f09;border:1px solid rgba(255,255,255,.08);border-radius:9px;
  padding:13px 15px;overflow-x:auto;margin:0 0 14px;}
.md pre code{background:none;padding:0;color:#e3b57e;font-size:12.5px;line-height:1.55;}
.md blockquote{border-left:3px solid #f0a45f;margin:0 0 14px;padding:4px 0 4px 14px;color:#b9b1a5;font-style:italic;}
.md hr{border:none;border-top:1px solid rgba(255,255,255,.1);margin:18px 0;}
.md a{color:#f0a45f;}

@media (max-width:760px){
  .detail{overflow-y:auto;}
  .detail-body{flex-direction:column;min-height:auto;}
  .info{width:100%;min-width:0;overflow:visible;}
  .mdwrap{overflow:visible;}
}
`;