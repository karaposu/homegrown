## User Input

`devdocs/inquiries/2026-05-30_06-38__routelister_cross_run_model/_branch.md` (prior outputs: surfacing.md, sensemaking.md [the operationalized model], decomposition.md [P1–P6]; workspace in context). Render the cross-run model concretely + foils. Process-layer.

---

# Structural Innovation — Routelister's Cross-Run Model (rendered)

## Phase 1 — Seed + Methodology-Mode Consideration

**Seed (type: design/operationalization).** The P1–P6 piece-list: render the insight, the three operations, discovery, the properties, the validation + foils.

**Methodology-Mode:** (a) inherited — Standard default; (b) alternative — Generator-weighted (render the concrete procedure); (c) what follows — actual operation steps + the trace; (d) **decision — FULL coverage + piece-level Inversion**, weighted toward Combination/Domain-Transfer (render) + Inversion (foils). No mode-switch.

## Meta-Decision-Piece Classification

All six pieces commit a frame → piece-level Inversion foils F1–F6.

---

## Phase 2 — Generate (full coverage)

### Generators

**G1 — Combination (render the procedure).** Combine the insight + the three ops + the artifact → the concrete per-run procedure (a load-modify-save loop over the persistent index):

```
ROUTELISTER RUN (territory, goal, scope):
  1. LOAD       → read the identity-set/index
                  · root scope:          load the whole index → starting running-identity-set
                  · concept-target scope: load the target identity's entry (+ its depth)
  2. INTEGRATE  → run the listing (sweep → individuate → frame) on the pre-seeded set:
                  for each swept candidate item:
                     individuate against the loaded set (22-40 online clustering):
                        match a loaded identity → RE-CONFIRM it; attach/refresh its depth-signal (if drilled)
                        no match               → NEW identity (lean-to-split)
                  loaded identity NOT re-confirmed by this sweep → flag STALE (keep; timestamp)
                  depth run since last load revealed split/merge → RE-INDIVIDUATE
                  frame each (re)confirmed identity as a typed route (00-13);
                     enrich-not-dump: drilled identities carry a depth-SIGNAL, not manifestations
  3. PERSIST    → save the updated index (new identities, refreshed signals, re-individuations, stale flags)
                  + append an invocation-log entry (mode/scope; added/confirmed/stale counts)
                  + write the run's routelister.md route-map (00-13)
```

→ candidate **PROC** (the rendered procedure).

**G2 — Absence Recognition (patch + redesign).**
- *Patch:* render the **worked trace** (the acceptance test) — the root→A→B→root walk (below in Phase 3). → candidate **TRACE**.
- *Redesign:* the procedure is the listing pipeline (`22-40`) + LOAD/PERSIST bookends — already-present steps, newly persistent; low novelty, coherence value.

**G3 — Domain Transfer (native + different).**
- *Native (incremental build / compiler cache):* LOAD the cache → recompute what changed (re-confirm + add) → SAVE the cache; idempotent (a clean rebuild on unchanged sources is a no-op). routelister's LOAD/INTEGRATE/PERSIST IS an incremental build over the concept-map: re-confirm = "still valid?", new identity = "new source", stale = "deleted source". → grounds idempotency-at-fixpoint + staleness in a known, robust pattern.
- *Different (a living document / wiki edited each session):* LOAD the doc → edit (add/update sections, mark obsolete) → SAVE; the doc accumulates across sessions. The index is a living concept-map document; each run edits it. → grounds the cumulative aspect.

**G4 — Extrapolation.** As runs accumulate, the index matures into the project's persistent concept-map / authority file — the cumulative artifact the navigation endgoal wants; each run is an incremental edit, not a from-scratch rebuild.

### Framers — Piece-Level Inversion (foils)
- **F1 (separate cross-run phase):** **KILL** — duplicates the running-identity-set; the cross-run work lives inside INTEGRATE.
- **F2 (a dedicated merge step beyond the listing):** **KILL** — the "merge" IS individuation in INTEGRATE (match-or-new); no separate merge.
- **F3 (folder-scan discovery):** **KILL** — the index is the registry (entries carry depth-pointers).
- **F4 (load-and-add = drift):** **KILL** — load-modify-save is idempotent at the fixpoint; growth = input change, not drift.
- **F5 (routeman renamed):** **KILL** — re-derived (same-map→cross-target; REVISIT stripped; only the general load-modify-save shape carries).
- **F6 (LOAD replaces perception → trusts stale entries):** **KILL** — perception governs (the sweep re-confirms); LOAD assists (match + enrich); unconfirmed→stale.

### Constraint Manipulation (both)
- **REMOVE PERSIST** → no cross-run memory (each run is amnesic) → confirms PERSIST is load-bearing.
- **ADD "rebuild the index from scratch each run (no LOAD)"** → loses accumulation + cross-target enrichment (a root run can't see prior depth runs) → confirms LOAD is load-bearing.

### Lens Shifting
Shift to "routelister as an incremental build system over the concept-map": LOAD the cache, recompute the changed, SAVE; idempotent, cumulative. Under this lens the model is the standard, robust incremental-build shape — de-risking idempotency + staleness. Strongest support for P4.

---

## Inherited Frame Audit

**Central assumption:** "the cross-run model = the persistent running-identity-set (LOAD/INTEGRATE/PERSIST); not a separate phase." Challenged by F1 (separate phase), F4 (drift), F5 (renamed) — all tested. Audit does NOT fire. Per-piece foils present. Clean.

## Phase 3 — Test (5-test + the worked trace + dispositions)

**The worked trace (TRACE — the acceptance test):**
| Step | LOAD | INTEGRATE | PERSIST |
|---|---|---|---|
| **root #1** | index empty | sweep + individuate fresh → the project's identities | save identities (no depth); write route-map #1 |
| **target-A** | load A's entry | drill A → manifestations + an unresolved README-vs-impl divergence | save A's entry: depth-pointer + depth-signal "unresolved divergence" |
| **target-B** | load B's entry | drill B → clean | save B's entry: depth-pointer; no divergence-signal |
| **root #2** | load whole index (now carrying A's + B's depth) | re-sweep → re-confirm identities; attach A's & B's depth-signals to their routes | save; write route-map #2 |

**Result:** route-map #2 = route-map #1 with A and B now carrying depth-signals (enrich-not-dump, compact). Idempotent at the fixpoint: had A/B not run, root #2 = root #1. ✓ Exactly the `21-01` intended behavior.

- **Novelty:** low-moderate (the procedure is the listing + bookends; the incremental-build grounding is the framing contribution); coherence value.
- **Scrutiny survival:** survives separate-phase (F1), drift (F4), renamed (F5), stale-trust (F6); the trace passes. ✓ STRONG.
- **Fertility:** directly spec-able; the index = the cumulative concept-map; the incremental-build analog guides edge-cases. ✓
- **Actionability:** PROC is the procedure verbatim for the spec. ✓
- **Mechanism independence:** the model reached via Combination (the bookend reframe) + Domain Transfer (incremental-build) — independent grounds; the trace is an external check. ✓ ROBUST.

**Foil dispositions:** F1–F6 KILL (all; the model is well-bounded).

**Assembly check.** PROC + TRACE + the guards assemble into the operationalized cross-run model — the last design piece. **Emergent (confirmed):** the index is now provably one object across four inquiries — listing (`22-40` running-set), output (`00-13` index), cross-run (this run's LOAD/PERSIST target), and the input-contract's "territory" sense — i.e., the project's single persistent concept-map. With this, routelister's design is complete.

**Axis coverage check.** Axes: (1) where-it-sits — P1/F1; (2) the ops — P2/F2; (3) discovery — P3/F3; (4) convergence/staleness — P4/F4/F6; (5) re-derivation — P5/F5. All have variants. ✓

**Artifact-grounding.** Checked: `21-01` (the sketch + trace ✓), `22-40` (individuation=integrate ✓), `00-13` (index=artifact ✓), routeman §3.5/§5.8 (the substrate ✓). External: incremental-build cache + living-document (real patterns). No artifact contradicts.

---

## Output — The Rendered Model + Foils (for Critique)

**THE CROSS-RUN MODEL = the persistent running-identity-set.** A run is a **load-modify-save** over the project's identity-set/index:
- **LOAD** the index (scoped: root = whole; concept-target = one entry) → the run's starting running-identity-set.
- **INTEGRATE** = the ordinary listing (sweep→individuate→frame) on the pre-seeded set: individuation matches a loaded identity (re-confirm + enrich with a depth-signal) or starts a new one (lean-to-split); unconfirmed loaded identities → flag STALE; depth-revealed split/merge → re-individuate; enrich-not-dump (signals, not manifestations).
- **PERSIST** the updated index + invocation-log + the run's route-map.

**Discovery** = the index IS the registry (no folder-scan; first-run bootstraps). **Scopes** = what's loaded/saved. **Idempotency-at-fixpoint** via re-confirm (load-modify-save; perception governs, LOAD assists; converge-not-drift). **Staleness** = flag-not-delete. **Guards:** within-concept (membership not relation) + enrich-not-dump. **Re-derivation:** routeman read/recalibrate/add-new → LOAD/INTEGRATE/PERSIST (same-map→cross-target; REVISIT stripped). **Acceptance test (root→A→B→root): PASSED.** **This is the last design piece** — routelister's design is complete; next is consolidation.

**Foils for Critique:** F1–F6 all KILL (separate-phase / dedicated-merge / folder-scan / drift / renamed / stale-trust). Critique: re-confirm idempotency + staleness (P4), the re-derivation (P5), the within-concept boundary, the self-reference, and the trace.

## Telemetry
- Generators: **4/4**; Framers: **3/3** (Inversion ×6 + Constraint ADD/REMOVE + Lens).
- Convergence: **YES** (the model via the bookend-reframe + incremental-build grounding + the passing trace, independent).
- Survivors tested: 7/7 (model + 6 foils); rendered PROC + TRACE.
- Per-piece Inversion: P1–P6 ✓.
- Inherited Frame Audit: did NOT fire.
- Failure modes: **none** (full coverage; foils generated + tested).
- **Overall: PROCEED.**

### Handoff to Critique
Adjudicate: (1) P4 — idempotency-at-fixpoint (does load-modify-save genuinely converge?) + staleness (flag-not-delete right?); (2) P5 — the re-derivation (same-map→cross-target; REVISIT-stripped) + the within-concept boundary; (3) P1 — not-a-separate-phase; (4) the trace; (5) self-reference. Render SURVIVE/REFINE/KILL.
