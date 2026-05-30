## User Input

`devdocs/inquiries/2026-05-30_00-13__routelister_output_artifact_schema/_branch.md` (prior outputs: surfacing.md, sensemaking.md [the authored schema], decomposition.md [P1–P6]; workspace in context). Render the concrete schema + foils. Structural-layer.

---

# Structural Innovation — Routelister's Output-Artifact Schema (rendered)

## Phase 1 — Seed + Methodology-Mode Consideration

**Seed (type: design/authoring).** The P1–P6 piece-list: render the route-record schema, the wrapper, the state-file, the two-artifact design, the verdict + foils.

**Methodology-Mode:** (a) inherited — Standard default; (b) alternative — Generator-weighted (the concrete schema is the deliverable); (c) what follows — render actual field tables; (d) **decision — FULL coverage + piece-level Inversion**, weighted toward Combination/Domain-Transfer (to render the concrete schema) + Inversion (foils). No mode-switch.

## Meta-Decision-Piece Classification

All six pieces commit a frame → piece-level Inversion foils F1–F6.

---

## Phase 2 — Generate (full coverage)

### Generators

**G1 — Combination (render the route-record).** Combine the carried + re-derived + new fields → the concrete per-route schema:

| Group | Field | Values / Type | Provenance (vs routeman §5.4) |
|---|---|---|---|
| **Route Identity** | Direction | text (the concept-identity as a direction toward the goal) | CARRY (re-derived: identity-as-direction) |
| | Goal | text (what engaging it achieves) | CARRY |
| | grain | `project-space` \| `concept-space` | NEW (`18-17` signature) |
| | kind | `teleological` \| `epistemic` | NEW (`18-17`) |
| | engagement-type | one of the 9-verb subset (DEEPEN/DEVELOP/PURSUE-SEED/INVESTIGATE-FRONTIER \| REFINE/REFRAME/DIAGNOSE/TEST/CONSOLIDATE) | REPLACES Movement-Type |
| **Route Meaning** | Movement | text (what engaging this concept does — territory-relative) | RE-DERIVE (drop "current cycle state") |
| **Route Reasoning** | WHY | text (territory-evidence it's a goal-relevant route) | CARRY |
| | why-this-might-be-important | text (1-sentence cap; territory-anchored; omitted if no anchor) | CARRY |
| **Route Attribution** | Priority | `HIGH`\|`MED`\|`LOW` (attributive importance) | CARRY (attributive, not selection) |
| | Confidence | `HIGH`\|`MED`\|`LOW` | CARRY (attributive) |
| **Route Guidance** | Guidance Mode | `none`\|`compact`\|`full`\|`expand-on-drill` | CARRY (re-derive expand-on-selection→expand-on-drill) |
| | Guidance Pointers | 0/1-2/3-5 pointers, each with its WHY | CARRY |
| **Route Depth-link** *(cross-run)* | depth-pointer | pointer to this identity's OWN depth run \| `none` | NEW (within-concept; `21-01`/`22-40`) |
| | depth-signal | compact text (e.g. "unresolved README-vs-impl divergence → epistemic route available") \| `none` | NEW (enrich-not-dump) |
| | reachability *(optional)* | `engageable` (default) \| `referenced-but-absent` | RE-DERIVE (minimal; Status-values dropped) |
| **DROPPED** | ~~Status~~ (done/stale/superseded/active) | — | DROP (cycle-relative) |
| | ~~Blocked-By~~ | — | DROP (route-gate) |
| | ~~Unlocks~~ | — | DROP (**inter-concept dependency graph — NOT-list**) |

**G2 — Absence Recognition (patch + redesign).**
- *Patch:* add a **worked example record** so the schema is concrete: `Direction: "the authentication mechanism" · grain: project-space · kind: epistemic · engagement-type: DIAGNOSE · Movement: "examine why auth has its current shape" · WHY: "the goal (harden auth) rests on understanding the current mechanism" · Priority: HIGH · Confidence: MED · Guidance Mode: compact · depth-pointer: none · depth-signal: none`. → candidate **EX**.
- *Redesign:* the schema is routeman's 5-group structure re-derived (drop 3, replace 1, add depth-link), not invented — coherence value, low novelty.

**G3 — Domain Transfer (native + different).**
- *Native (a typed record / struct):* the schema reads as a typed struct — enums for grain/kind/engagement-type/Priority/Confidence/Guidance-Mode, text for Direction/Goal/Movement/WHY, an optional pointer for depth-link. This makes it machine-parseable (the spec wants string-enum fields, like routeman's). → strengthens the field table.
- *Different (library catalog — MARC/BIBFRAME):* a catalog *Work* record carries identity fields + links to its *Manifestations* (editions). routelister's route-record is a Work record (the identity + type-signature) with a within-concept depth-link to its own manifestations — literally the catalog pattern. And the catalog's *authority file* (the registry of works) = routelister's identity-set/index state-file. → grounds the two-artifact design (record + authority-file ≈ route-map + index).

**G4 — Extrapolation.** As runs accumulate, the identity-set/index state-file grows into the project's **persistent concept-map** (an authority file of the project's concept-identities) — the cumulative artifact the navigation endgoal wants.

### Framers — Piece-Level Inversion (foils)
- **F1 (carry §5.4 wholesale):** **KILL** — re-imports Status/Blocked-By/Unlocks contamination.
- **F2 (drop the Excluded section):** **KILL** — loses "visible-with-reason"; silently-dropped candidate concepts = the asymmetric-failure trap.
- **F3 (one artifact — fold the index into the route-map):** **KILL** — conflates per-run output with cross-run memory (the routeman.md vs _route.md split exists for a reason).
- **F4 (depth-link = Unlocks renamed → reintroduces the graph):** **KILL** — within-concept (identity→own-depth) ≠ inter-concept (identity→other-identity); the boundary holds.
- **F5 (it's a relabel of routeman's schema):** **KILL** — drops 3 fields, replaces 1 (Movement-Type→3-field signature), adds the depth-link, re-purposes Excluded (inapplicable-types→admission-rejected). Structural change, not relabel.
- **F6 (Priority = selection, forbidden):** **KILL** — attributive per-route priority is permitted by routeman's own §1.3; only which-wins ranking is forbidden.

### Constraint Manipulation (both)
- **REMOVE the type-signature fields** → the record loses routelister's typing (`18-17`) → reverts to routeman's single Movement-Type → confirms the 3-field signature is load-bearing.
- **ADD an "Unlocks/related-concepts" field** → immediately violates the NOT-list (inter-concept graph) → confirms the Unlocks-drop is correct.

### Lens Shifting
Shift to "the schema as a library authority record" (BIBFRAME Work + Authority File): the record = a Work (identity + type) with links to its own Expressions/Manifestations (the depth-link), and the index = the Authority File (the registry of Works). Under this lens the two-artifact design + the within-concept depth-link are the *standard cataloging shape* — de-risking both. Strongest support for P3/P4.

---

## Inherited Frame Audit

**Central assumption:** "the output FORM = the re-derived two-artifact schema (record + wrapper + state-file), contaminated trio dropped, within-concept depth-link." Challenged by F1 (carry-wholesale), F4 (depth-link=graph), F5 (relabel) — all tested. Audit does NOT fire. Per-piece foils present. Clean.

## Phase 3 — Test (5-test + dispositions)

**Designed answer (G1+G2+G3):** the rendered field table (above) + the worked example + the wrapper + the state-file, as two artifacts.

- **Novelty:** low-moderate (a re-derivation + the depth-link + the catalog grounding); coherence value, as a structural authoring should be.
- **Scrutiny survival:** survives carry-wholesale (F1), depth-link=graph (F4), relabel (F5), Priority=selection (F6). ✓ STRONG.
- **Fertility:** directly spec-able; the state-file = the cross-run model's artifact; the catalog/authority-file analogy guides the index design. ✓
- **Actionability:** the field table IS the deliverable — usable verbatim in the spec. ✓
- **Mechanism independence:** the schema reached via Combination (re-derivation) + Domain Transfer (struct + catalog) — independent grounds. ✓ ROBUST.

**Foil dispositions:** F1–F6 KILL (all; none survived — the schema is well-bounded).

**Assembly check.** The field table + wrapper + state-file + the two-artifact design assemble into the **authored output form**. **Emergent (carried):** the state-file is simultaneously this inquiry's OT3 deliverable AND the cross-run model's (`21-01`) core artifact AND the listing mechanism's (`22-40`) running identity-set — *one data structure serving three inquiries* (the project's concept-map / authority file). This is the unification the prior findings predicted.

**Axis coverage check.** Axes: (1) per-record fields — P1/F1/F6; (2) the container — P2/F2; (3) the second artifact — P3/F3; (4) the boundary — P4/F4; (5) relabel-or-genuine — F5. All have variants. ✓

**Artifact-grounding.** Checked: routeman §5.4/§5.5/§5.8 (the field inventory ✓), `18-17` (the signature + NOT-list ✓), `11-43` (per-identity ✓), `21-01`/`22-40` (the index/depth-link ✓). External: typed-struct + library authority records (real patterns). No artifact contradicts.

---

## Output — The Rendered Schema + Foils (for Critique)

**ROUTE-RECORD (per concept-identity):** Route Identity {Direction, Goal, **grain**, **kind**, **engagement-type**} · Route Meaning {Movement} · Route Reasoning {WHY, why-important} · Route Attribution {Priority, Confidence — attributive} · Route Guidance {Mode[expand-on-drill], Pointers} · Route Depth-link {depth-pointer, depth-signal — within-concept; optional reachability}. **DROPPED:** Status-cycle-values, Blocked-By, Unlocks (the inter-concept graph). *(Worked example included — EX.)*

**`routelister.md` ROUTE-MAP WRAPPER:** Map Header (identity-count + HIGH count) · Route Index (identity-table: ordinal + Direction + grain/kind/engagement-type + Priority + depth?) · Excluded (admission-rejected candidate-concepts + reasoning) · Telemetry (per-grain/kind/engagement-type distributions + individuation stats + convergence + frontier-flags + self-assessment).

**IDENTITY-SET / INDEX STATE-FILE** (within-concept; re-derived `_route.md`): `{identity → {own-depth pointer, depth-signal, individuation-provenance (merged items + confidence), first-seen/last-touched}}` + invocation log. = the project's persistent concept-map / authority file.

**TWO ARTIFACTS** (route-map + state-file), mirroring routeman.md + _route.md. **OT0: FORM DEFINED.**

**Foils for Critique:** F1–F6 all KILL (carry-wholesale / drop-Excluded / one-artifact / depth-link=graph / relabel / Priority=selection). Critique: re-confirm the drops (P1), the within-concept boundary (P4), the two-artifact split (P3/P4), the self-reference.

## Telemetry
- Generators: **4/4**; Framers: **3/3** (Inversion ×6 + Constraint ADD/REMOVE + Lens).
- Convergence: **YES** (schema via re-derivation + struct + catalog grounding, independent).
- Survivors tested: 7/7 (schema + 6 foils); rendered field table + worked example (EX).
- Per-piece Inversion: P1–P6 ✓.
- Inherited Frame Audit: did NOT fire.
- Failure modes: **none** (full coverage; foils generated + tested).
- **Overall: PROCEED.**

### Handoff to Critique
Adjudicate: (1) P1 — the field drops (Status/Blocked-By/Unlocks) correct? the carried fields right? (2) P4 — the within-concept boundary (depth-link ≠ Unlocks); (3) P3 — two artifacts vs one; (4) is anything mis-classified (a dropped field that should carry, or vice versa)? (5) self-reference + the §5.4/§5.5/§5.8 re-test. Render SURVIVE/REFINE/KILL.
