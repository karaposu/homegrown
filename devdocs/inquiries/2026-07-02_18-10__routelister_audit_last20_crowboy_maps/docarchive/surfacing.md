# Surfacing — Routelister Audit: the Last 20 Crowboy Maps

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-07-02_18-10__routelister_audit_last20_crowboy_maps/_branch.md

(Territory = the last 20 crowboy routelister.md files (2026-06-24 → 2026-07-02; ALL post-June-22 changes) + sibling _route.md glance + the current spec + the prior audit's baseline numbers. Purpose = measured facts on (a) June-22 feature adoption, (b) the ✓ column in the wild, (c) format consistency, (d) density/readability vs baseline, (e) route-content quality signals, (f) index health. Method: bash-counted stats across ALL 20 + full reads of representative maps. Save to surfacing.md.)
```

**Mode:** artifact. **Entry:** signal-first. **Territory:** explicit-bounded (20 maps; 175 index routes; ~2,400 lines total). **Method executed:** 4 counted bash passes over all 20 + full reads of 2 representative maps (newest/outlier `2026-07-02_14-23`; ticked `2026-06-27_15-04` first 75 lines) + targeted samples from the rest.

---

## Traversal Trace

| # | Region | Item(s) / measured fact | Relevance | Conf | Note |
|---|---|---|---|---|---|
| T1 | Corpus shape | 20/20 inquiries have `routelister.md`; sizes 91–187 lines; 4–13 routes/map; **175 index routes total** | **core** | HIGH | Compact maps throughout — no bloat regression vs the prior audit's corpus. |
| T2 | Index adoption | Index header UNIFORM in 20/20: `# · Direction · engagement(-type) · Priority · Essentiality · ✓`; **kind column 0/20; grain column 0/20** | **core** | HIGH | The June-22 lean index fully adopted. Cosmetic label variance only ("engagement-type" 15 / "engagement" 4 / "Type" 1). |
| T3 | Essentiality adoption | Present 20/20. Index distribution: **94 core (54%) / 67 supporting (38%) / 13 peripheral (7%)** | **core** | HIGH | It VARIES — not all-core noise; core-leaning per the lean-to-core rule. The triage column carries real information. |
| T4 | Phase qualifiers | `· @` in 16/20 files; vocabulary in the wild: `@later` ×13 · `@pilot` ×12 · `@build` ×13 (two spacings) · `@next-inquiry` ×4 · `@scale` ×3 · `@prerequisite` ×3 · `@launcher-build` ×3 | **core** | HIGH | Heavily adopted; project-specific phase words as designed. Spacing inconsistency (`·@` vs `· @`) cosmetic. |
| T5 | Qualifier-slot mutations | Three organic extensions beyond `@phase`: **`core (prerequisite)`** (parenthetical semantics); **`core · [∥ 11-30]`** (cross-map overlap marker, explained in the map's own preamble: "shared routes are marked [∥ 11-30] and not re-derived"); half-tick **`◑`** in the ✓ cell with a status note | **core** | HIGH | The qualifier slot and the ✓ cell are hosting improvised semantics — emergent needs leaking into the nearest cells. |
| T6 | WHY adoption | 187 WHY lines; **150 (80%) explicitly reference the goal**; full-read samples show consistent climbing shape ("the goal's X cannot land while…"; "the end goal gains…") | **core** | HIGH | The line-of-sight WHY adopted at high fidelity. The 20% non-goal lines skew toward terse LOW/peripheral routes (spot-checked). |
| T7 | WHY boundary specimen | The newest map's R11 WHY: *"inherited gate — every teleological route here (R2/R3/R4/R6/R7) is unsellable and unbuildable until the loop runs"* — names five sibling routes as dependents | **core** | HIGH | A live brush against the spec's "neighbourhood rung… NEVER a route↔route dependency edge." Honest prerequisite reality found its way into a WHY + a `(prerequisite)` qualifier. |
| T8 | Move/Lands/Touches | **Move 20/20 files (164 lines, avg 182 chars, max 397); Lands 132 lines (avg 146, max 363); Touches 14/20 files** | **core** | HIGH | vs the prior audit's single-line Movement (median 224, max 483): the un-cram landed — action lines shorter, state on its own line, max down. ~32 routes have Move without Lands (terse routes; some merge Lands into the Move line — drift or sensible compression, to adjudicate). |
| T9 | The ✓ column in the wild | Present 20/20, authored empty; **consumer-ticked in 1 map (4 ticks + 1 half-tick ◑), each WITH an inline outcome note** ("✓ (schema + fill script + DB)"; "◑ local_term=NULL done; TR-cities = KEEP (pending user call)") | **core** | HIGH | The mark works on static concluded pieces AND has organically evolved: binary → annotated micro-status. This is this morning's reframe validated + extended by real use. |
| T10 | Guidance label drift | "Guidance Mode:" 8/20; plain "Guidance:" or "Guidance (compact):" 13/20 — the CONTENT (a mode word + reasoned `(bc …)` pointers) survives in both styles | **sub** | HIGH | The June-21 "keep Guidance in its shape" note half-took: shape yes, label no. Cosmetic-to-minor. |
| T11 | grain/kind in records | "grain: project-space" re-displayed in record type-signature lines in most maps (20/20 files contain "grain"); kind shown as "(teleological)/(epistemic)" parens on record headers broadly | **core** | HIGH | The spec says grain+kind are "not re-displayed when constant or derivable" — the index obeys; the RECORDS mostly don't. ~1 redundant segment per route (the newest map already dropped grain — drift is healing newest-first). |
| T12 | Depth-link & Meaning-gaps | Depth-link rows in only 2/20 files (maps omit the row when nothing is drilled); Meaning-gaps blocks in 9/20 files (DEVELOP+CONSOLIDATE = 105/175 routes — partial adoption; where present, one-line gap+vitality form is correct) | **sub** | MED | Omission-when-empty reads as ceiling-not-floor spirit for Depth-link; Meaning-gaps under-adoption is the larger gap (60% of routes are the meaning-consuming verbs). |
| T13 | Verb distribution | DEVELOP 70 · CONSOLIDATE 35 · REFINE 23 · INVESTIGATE-FRONTIER 23 · TEST 20 · PURSUE-SEED 9 · DEEPEN 2 · REFRAME 1 · **DIAGNOSE 0** | **core** | HIGH | Build-heavy territory explains teleological dominance; DIAGNOSE never fired in 20 maps and DEEPEN/REFRAME nearly never — vocabulary tail unused (territory-natural vs verb-overlap, to adjudicate). |
| T14 | Priority distribution | MED 90 / HIGH 67 / LOW 26 (+ compound "MED-HIGH"/"LOW-MED" values appearing) | **sub** | HIGH | Varies; MED-centered; compound values are another small organic extension (spec has no compound grades). |
| T15 | Direction quality | Index Direction avg **54.7 chars** (n=175), self-explanatory noun-phrases throughout the samples | **core** | HIGH | The prior audit's "too short/opaque" complaint is resolved in the wild. |
| T16 | Structure & telemetry | Excluded section 20/20 (with reasons; newest map's excluded entries carry `[[memory-concept]]` links); Telemetry 20/20 incl. failure-modes-checked lines; record-header style: `###` 19/20, bold-line 1/20 (the newest) | **core** | HIGH | Structural compliance is essentially total; one header-style outlier; Excluded quality high (settled-trap / relitigation reasons). |
| T17 | `_route.md` glance | Format healthy where sampled (Invocation Log table + Identity Registry; `2026-07-01_13-43`: 11 identities, fresh, PROCEED); formats vary mildly across maps; all sampled are single-invocation (fresh, never re-run) | **sub** | MED | The cumulative machinery exists but re-runs don't happen in practice (every inquiry gets a fresh index; cross-run accumulation unused at this grain — consistent with maps being per-inquiry exhausts). |
| T18 | Full-read quality (newest map) | Every WHY climbs; essentiality honest (8 core incl. 2 @scale + 1 prerequisite / 2 supporting / 1 peripheral·@later); Excluded kills relitigation with named reasons; telemetry narrates the lean-to-split call (R6/R8) | **core** | HIGH | Content quality at the top of the corpus is genuinely strong — the discipline's identity (enumerate-not-select) visibly held. |

## State Summary

- **Territory echo:** 20 maps (2026-06-24 → 2026-07-02) + `_route.md` glance + current spec + prior-audit baseline.
- **Purpose echo:** adoption / ✓-in-the-wild / consistency / density / content-quality / index-health — measured.

**Coverage map:**
| Region | Coverage | Aggregate relevance |
|---|---|---|
| Corpus inventory + sizes | confirmed (counted, all 20) | core |
| June-22 adoption (index, essentiality, qualifiers, WHY, Move/Lands) | confirmed (counted + sampled) | core |
| ✓ column in the wild | confirmed (counted + full-read) | core |
| Format consistency/drift | confirmed (counted + samples) | core |
| Content quality | confirmed at sample depth (2 full reads + spot samples; not all 20 read line-by-line) | core |
| `_route.md` health | scanned-but-shallow (2 sampled + 6 glanced) | sub |

**Confirmed-absent:** kind column in any index (0/20); DIAGNOSE usage (0/175); consumer ticks outside the one executed map (ticking happens where engagement happened — 19 maps' fields not yet engaged, or engaged without ticking — undetermined which).

**Concept-names list:**
- `annotated micro-status ticks` (T9, coined) — ✓/◑ + inline outcome notes; the mark's organic evolution.
- `qualifier-slot hosting` (T5, coined) — @phase (designed) + (prerequisite) + [∥ cross-map] improvised into the Essentiality cell.
- `cross-map overlap marker` (T5) — `[∥ inquiry-id]`: the wild's answer to the same route appearing on two maps.
- `record-level grain/kind redisplay` (T11) — index obeys the lean rule; records lag.
- `WHY-as-dependency-carrier` (T7) — prerequisite reality expressed by naming sibling routes in a WHY.
- `verb tail unused` (T13) — DIAGNOSE 0 / DEEPEN 2 / REFRAME 1 across 175 routes.
- `fresh-only indexes` (T17) — `_route.md` cumulative machinery present, never re-invoked per-inquiry.

**Frontier flags:**
1. Content quality confirmed at sample depth — 2 full reads + spot samples ground the quality verdicts; a per-map line-by-line read was not performed (18 maps sampled via counted patterns only).
2. Whether un-ticked maps mean un-engaged routes or un-recorded engagements is undetermined from the maps alone (routelog/_route_engagements not swept — out of the stated scope).
3. `_route.md` formats vary mildly; a dedicated index-format audit was not run (scope-open point went to a glance, as planned).

**Workspace-populated:** `{populated: true, populated-at: 2026-07-02 (this run), extent: 4 counted passes over all 20 + 2 full/partial map reads + 1 index sample}`

## Telemetry

- Mode: artifact | entry: signal-first
- Cycles: 6 (inventory → adoption stats → usage stats → refined counts → 2 deep reads → index glance) | items: 18 trace entries | tags: core 13 · sub 5 (+2 confirmed-absences)
- Boundary-discovery: not fired (explicit-bounded)
- Convergence: counted patterns exhausted; deep-read sample representative (newest/outlier + ticked); uncertain items at MED flagged, not dropped
- Workspace-overload: managed (counted stats across all; full reads bounded to representatives — flagged as frontier 1, not silent)
- Failure modes checked: Missed-relevance (frontier-flagged the unswept engagement records), Surfaced-irrelevance (sub-tags), Territory-mis-binding (none), desync (capture-at-moment), Recency (corpus dates recorded; no recency-based filtering)
- **Self-assessment: PROCEED**
