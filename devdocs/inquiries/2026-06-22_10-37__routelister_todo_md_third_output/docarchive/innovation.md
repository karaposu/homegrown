## User Input

`_branch.md` + `surfacing.md` + `sensemaking.md` + `decomposition.md` (this inquiry). Intent: the strongest CRYSTALLIZING framings + a clean NAME + concrete actionable TEMPLATES — (a) the organ separation made vivid, (b) the Level-0 first-artifact shape, (c) the "you re-derived the keystone" reframe, (d) the end-goal fit. Inversion MANDATORY — steelman the opposites ("just give the user their editable todo.md, canon-purism is overthinking"; "routelister IS the right place at Level 0"; "this is just routelog"). Ground every framing in the canon + the real specs.

---

# Structural Innovation — Routelister `todo.md`

## Seed + Methodology-Mode

**Seed (Dissatisfaction → reframe):** routelister must not emit a third editable `todo.md` (enumerator acquiring a controller's organ + the regeneration clobber); the need is **traversal memory** — the orchestrator's organ, the SUSTRALL keystone. **Inherited mode:** Standard default + **Inversion strongly weighted** (seed says MANDATORY). **Alternative:** Contrarian-rethink (would re-litigate "is the no correct"). **Decision: default** — the no survived canon-grounded sensemaking; the mandatory Inversion runs as a strong in-mode steelman. Meta-decision run (commits the verdict + redirect) → Piece-Level Inversion applied.

---

## Phase 2 — Generate

### Inversion (Framer — MANDATORY) 🔑

**Central assumption:** "routelister should NOT emit a `todo.md`; the need is traversal memory owned in the controller layer."

**L1 — "Just give the user their editable `todo.md` as a routelister output; the canon-purism is overthinking a simple ergonomic ask."**
- *Steelman:* the user has a real annoyance (can't tick routes off durably); a 30-second feature scratches it; don't bury it under era-goal architecture.
- *Why it fails (structural):* the "simple feature" **doesn't actually work** — a routelister-emitted file inherits the **regeneration clobber** (the very ✓-futility it's meant to fix: regenerate→wipe / don't→stale). And it **mis-trains the architecture** — the enumerator holding controller state is the organ-confusion "one enumerator, two controllers" exists to prevent; at multihead scale it would be actively harmful (the eyes can't also be the will). So the simple version is **both non-functional and architecturally corrosive.** → REJECTED, but it sharpens the verdict: **the redirect must ship with an EQUALLY-SIMPLE concrete alternative** (the minimal first-artifact below), or the user is left with an annoyance and a lecture.

**L2 — system-level: "routelister IS the right place at Level 0 — the human-orchestrator and the human-reader are the same person, so co-locating the todo with the map is ergonomic."**
- *System reframe:* at L0 there's no separate orchestrator; co-location is convenient.
- *Why it fails — but constructively:* even at L0, **emission/ownership** is the issue, not location — routelister *regenerating* the file is the clobber. Co-location WITHOUT clobber = **the human keeps their own file right beside the map**; routelister never touches it. So the ergonomic "it's right there" is satisfied by a **human-owned file in the same folder**, not by routelister emitting it. → REFINES the finding: **the axis is ownership/emission, not location** — the travel log can live beside `routelister.md`; it just isn't routelister's to write.

### Absence Recognition (both levels)
- **Patch:** missing a traversal-memory artifact (zero instances ever).
- **Redesign (from scratch):** a SUSTRALL-native system would have traversal memory from day one as the orchestrator's organ; its absence is the incremental gap.
- **Redesign (already-present-in-different-form):** the **done-slice already exists in routelog**; and at Level 0 **the human's head/notes ARE proto-traversal-memory**. We are *formalizing an existing informal practice*, not inventing — the turn-invariant says even "one written line of why" already counts as a turn.

### Domain Transfer (native + different) 🔑
- **Different (cartography): the MAP vs the TRAVEL LOG.** The **map** (`routelister.md`) is *redrawn from the territory each survey* (regenerated, perception-fresh — the "eyes"). The **travel log** (traversal memory) records *where you actually went, what you chose, and what you found* (mutable, append-only — the "will"). **You never write your journey onto the map; you keep a log.** This is the crystallization — and it maps exactly onto the canon's eyes (map-maker) vs will (traveler/orchestrator).
- **Native (software): read-model vs write-model (CQRS).** `routelister.md` is a *projection* regenerated from perception; the todo is *mutable user state*. Putting mutable state into a regenerated projection is the classic anti-pattern; keep the projection regenerable and the state separate.
- **Native (build systems): generated artifact vs source.** `routelister.md` is like compiled/generated output (don't hand-edit — your edits get overwritten on rebuild); the log is *source you own*. You never hand-edit build output.

### Combination
- traversal memory **+ the turn-invariant** → the first artifact is literally **one line per turn**: "selected route X, why, outcome."
- the map-vs-log analogy **+ Level 0** → the human keeps a travel log *beside* the map; routelister redraws the map, never the log.

### Constraint Manipulation (both directions)
- **ADD** "routelister may emit ZERO new files" → forces tracking entirely into the consumer layer (clean; routelister stays 2-file).
- **REMOVE** "the tracking must be a separate file" → it could be **append-only entries in routelog** (which exists) — so the minimal first step might need **no new file at all** (extend routelog usage + a rationale/outcome line).

### Lens Shifting
- **Ergonomic lens:** the user wants their editable table right there → a human-owned file beside the map.
- **Era-goal lens:** the user wants the keystone → it's the first traversal-memory artifact; recording the selection-rationale *counts the first SUSTRALL turn.*
- Both lenses point at the **same artifact** → robust.

### Extrapolation
- As runs accumulate, the human-owned travel log becomes the **calibration dataset for the Level-2 Selector** (recorded rationales → agreement-gated Selector). The small Level-0 habit is *self-provisioning* toward autonomy (the staircase the canon describes).

### Inherited Frame Audit
Central assumption challenged by L1 (just give the file) + L2 (routelister is the right place at L0). Audit does **not fire**.

---

## Phase 3 — Test (5-test cycle)

| Survivor | Novelty | Scrutiny | Fertility | Actionable | Mech-indep |
|---|---|---|---|---|---|
| "the map is redrawn; the log is yours" (organ separation) | new framing | "purism" refuted (the file doesn't work + corrodes architecture); "L0 co-location" refuted (ownership not location) | grows into Selector calibration | the templates below | Inversion + Domain-Transfer (3 sources) + Absence converge |
| the Level-0 first-artifact (travel log) | new (zero instances) | "just routelog" → routelog is the done-slice; the log adds why+outcome | the SUSTRALL Tier-1 turn | template (b) | turn-invariant + Combination |
| ownership-not-location refinement | new precision | — | lets the log sit beside the map | (a) | L2 inversion |

**Disposition:** ACTIONABLE (multi-mechanism convergent). The L1 inversion was generated, tested, REJECTED — and forced the equally-simple-alternative requirement (met). The L2 inversion REFINED the verdict (ownership/emission, not location).

**Assembly check (emergent):** the survivors assemble into **the map-and-log architecture** — routelister keeps drawing the map (2 files, regenerated); a human-owned travel log (the first traversal-memory artifact) records route-id · why · outcome, beside the map, never touched by routelister. Emergent value: it scratches the user's ergonomic itch AND takes the project's literal first step toward its era-goal — one move, two payoffs.

**Axis coverage:** the orthogonal axes — *ownership* (routelister vs consumer) and *location* (separate vs beside) — both got variants (the L2 inversion separated them). The *schema* axis is deferred (gated). Covered.

---

## Crystallizing Output

### The NAME: **The map is redrawn; the log is yours**

> `routelister.md` is a **map** — redrawn from the territory each survey (regenerated, perception-fresh; the "eyes"). What you want is a **travel log** — where you went, what you chose, what you found (mutable, append-only; the "will"). **You never write your journey onto the map.** The ✓-column was always a journey-mark on the map — that's why it kept getting wiped. It belongs in the log.

The organ separation, made vivid:

> | surface | what it is | who owns it | mutability |
> |---|---|---|---|
> | **`routelister.md`** | the **map** — the field of routes, this survey | routelister (the eyes) | regenerated each run — never hand-edit |
> | **`_route.md`** | the map's **survey cache** (cumulative perception) | routelister (the eyes) | routelister-maintained |
> | **routelog** | the **done/parked stamps** (the engagement slice) | routelog | append-only |
> | **traversal memory** *(to build)* | the **travel log** — selections · rationales · outcomes across runs | the orchestrator (the **human at Level 0**) | append-only, yours |

### The reframe (the headline)

> **Fixing a ✓-column annoyance, you re-derived the project's keystone.** A mutable cross-run record of what you selected, why, and how it turned out is exactly **traversal memory** — the orchestrator's organ, the canon's #1 missing piece ("zero instances ever; nothing watches between inquiries yet"), and the **first step of the entire era-goal**: *a SUSTRALL turn counts the moment its selection-rationale is recorded into traversal memory.* The right move isn't a routelister feature — it's starting the log.

### (b) The Level-0 first artifact (the travel log)

A single human-owned file (live wherever's ergonomic — even beside `routelister.md`; routelister never touches it):

```
# traversal log  — the orchestrator's memory (mine, not routelister's)

| date  | inquiry                     | route                          | why selected            | outcome              |
|-------|-----------------------------|--------------------------------|-------------------------|----------------------|
| 06-22 | route_essentiality_tags     | R1 — write essentiality to spec | unblocks the whole feature | done — spec edited   |
| 06-22 | why_field_multi_scope       | R1 — line-of-sight WHY to spec  | same coordinated edit   | done — spec edited   |
| ...   |                             |                                 |                         |                      |
```

One line per turn. The user's "editable table" instinct is the **right starting shape** — it just lives in the log (yours), not on the map (routelister's). (Whether this *extends routelog* or is a *fresh file* is the gated schema choice — defer it; the habit can start today as a plain file.)

### (d) End-goal fit (why it's worth it)

- **SUSTRALL Tier-1 / the turn-invariant:** this *is* "create the first traversal-memory artifact ever" — the immediate, no-new-infrastructure next step the north-star names.
- **Unblocks the gated builds:** Retrospective-RC ("becomes buildable once cross-inquiry memory exists"); Phase-4 multi-inquiry learning; the gradient indicators (real-time-steering rides the orchestrator's reflect-consumption; discontinuity-awareness rides cross-session memory).
- **Self-provisioning:** recorded rationales are the Level-2 **Selector** calibration data — the small habit climbs the staircase.

---

## Telemetry
- **Generators:** 4/4 (Combination, Absence, Domain-Transfer, Extrapolation). **Framers:** 3/3 (Inversion, Constraint-Manip, Lens-Shift). Full coverage.
- **Convergence:** YES — Inversion(reject-file, give-simple-alternative) + Domain-Transfer(map-vs-log / CQRS / build-vs-source) + Absence(formalize-existing) + Combination(one-line-per-turn) converge on the map-and-log architecture + the Level-0 travel log. 4+ mechanisms.
- **Survivors tested:** 3/3.
- **Failure modes observed:** none. (Survival-Bias guard: the "just give the file" + "routelister is the right place" alternatives were generated and tested — L1/L2.)
- **Piece-level Inversion compliance:** satisfied (central commitment inverted to system-level depth; L1 rejected-with-refinement, L2 refined the verdict).
- **Overall: PROCEED.**
