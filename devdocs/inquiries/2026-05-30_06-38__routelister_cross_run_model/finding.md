---
status: active
model: claude-opus-4-8[1m]
effort: max
refines: devdocs/inquiries/2026-05-29_21-01__routelister_output_and_cross_run_behavior/finding.md
---
# Finding: Routelister's Cross-Run Model — the Last Design Piece

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-29_21-01__routelister_output_and_cross_run_behavior/finding.md`

**Revision trigger:** prerequisites met. The prior finding *sketched* routelister's cross-run model (read-prior / integrate / persist, idempotency-at-fixpoint, enrich-not-dump, a within-concept guard) and named it the **capstone — gated on identity-individuation and the output-artifact schema**. Both gates have since been resolved (individuation in the `22-40` finding; the output-artifact/index schema in the `00-13` finding), so this finding **operationalizes** the sketch.

**What's preserved:** the prior's whole frame — the two scopes (a root run reading prior concept-target runs; a run reading its own prior) as one model; the two principles (idempotency-at-fixpoint, enrich-not-dump); the within-concept guard; and the worked trace (root → A → B → root) as the acceptance test.

**What's changed:** the sketch becomes a concrete procedure (LOAD / INTEGRATE / PERSIST), and the prior's flagged-open *discovery* question is resolved.

**What's new:** the integrating insight that the cross-run model is **not a separate phase** — it is the listing's running identity-set *made persistent*; the resolution of discovery (the index IS the registry); the staleness handling (re-confirm + flag-not-delete); and the verification that the trace passes.

## Question

Operationalize routelister's cross-run memory model — concretely: how a run reads prior runs, folds them in, and persists, across the two scopes — with discovery, convergence, and staleness handled, and the prior worked trace as the acceptance test.

Background for an outside reader:
- **routelister** lists the concepts in a body of material ("a territory") as typed prescriptive routes. A *root* run lists the project's concept-*identities* (breadth); a *concept-targeted* run drills one identity (depth).
- Earlier inquiries settled: the **listing** keeps a running identity-set (online clustering); the **output schema** persists that set as an **index** (each identity → a pointer to its own depth run, a depth-signal, individuation history). The cross-run question is: when you run routelister again — re-running at the root, or after drilling some concepts — does it *read prior runs* and produce better results, and how?
- **routeman** (the predecessor) has re-invocation machinery (its `_route.md` state file), but it's *same-map* (re-run one inquiry's evolving map) and built on a loop-control move ("REVISIT") that doesn't transfer — so it's a template to re-derive, not copy.

**Goal:** concrete operations (not a re-sketch) — what each reads/writes, how discovery works, how scopes differ, how convergence and staleness behave — usable for the spec, with the trace passing.

## Finding Summary

- **The integrating insight: the cross-run model is not a new phase — it is the listing's running identity-set made *persistent*.** The listing already maintains a running identity-set during a run; the output schema already persists it as the index. So the cross-run model is simply: **LOAD the index at the start of a run, run the ordinary listing on that pre-seeded set, SAVE the index back at the end.** This unifies the cross-run model with the listing mechanism and the output schema into one object — the project's cumulative concept-map.

- **The three operations, concretely:**
  - **LOAD (read-prior):** read the index → the run's starting running identity-set. *Scoped:* a root run loads the whole index; a concept-targeted run loads the one target identity's entry.
  - **INTEGRATE:** run the listing (sweep → individuate → frame) on the *pre-seeded* set. For each swept item, individuate against the loaded set — *match* a loaded identity → re-confirm it and attach/refresh its depth-signal (if drilled); *no match* → start a new identity (lean-to-split). Loaded identities the sweep does **not** re-confirm → flag **stale**. Any split/merge a depth run revealed → re-individuate. Enrichment is signals-only (enrich-not-dump).
  - **PERSIST (add-new):** save the updated index (new identities, refreshed signals, re-individuations, stale flags) + an invocation log + the run's route-map.

- **Discovery dissolves: the index IS the registry.** The prior finding left open "how does a root run find the prior concept-target runs?" It doesn't scan folders — each identity's entry already carries a depth-pointer, so a root run finds what's been drilled by LOADING the index. A concept-target run PERSISTS its depth into the entry, so the next root run discovers it on LOAD. The first run finds an empty index and creates it (bootstrapping).

- **Scopes are just what's loaded/saved.** Root: load-whole / integrate-breadth / persist-whole. Concept-target: load-one-entry / integrate-depth / persist-that-entry. One mechanism, two scopes.

- **Idempotency-at-fixpoint via re-confirm.** A re-run loads the prior fixpoint; the sweep re-confirms each loaded identity against the *current* territory. Unchanged input → the same set, nothing added → saved unchanged (a no-op at the fixpoint — load-modify-save is idempotent by construction). Growth happens only when the input changes (a new depth run, a changed territory) — a correct update, not drift. **Perception governs** (the current sweep decides what's real); the loaded set only **assists** (matching + enrichment).

- **Staleness = flag-not-delete, and the live map stays compact.** Loaded identities the sweep doesn't re-confirm are flagged stale (kept in the index with a timestamp, recoverable), never silently deleted. Critically, the **route-map** (the user-facing output) shows only *live, re-confirmed* identities; stale entries live in the *index*, flagged and prunable — so the output never bloats even as the cross-run memory accumulates.

- **It re-derives routeman, doesn't carry it.** routeman's read-prior / recalibrate / add-new → routelister's LOAD / INTEGRATE / PERSIST; routeman's *same-map* (one inquiry's map) → routelister's *cross-target* (the index spans all the project's identities); the loop-control "REVISIT" is stripped. Only the general **load-modify-save** shape carries — which is itself the standard incremental-build pattern (load cache → recompute changed → save cache).

- **The acceptance test passes.** The prior finding's trace (root → A → B → root) produces exactly the intended behavior: root #2 = root #1 with A and B now carrying depth-signals (enrich-not-dump), idempotent at the fixpoint.

- **This is the last design piece.** With the cross-run model operationalized, routelister's full design — meaning, listing mechanism, route-type, input contract, output schema, cross-run behavior — is settled. The natural next step is to consolidate it into the structural spec.

## Finding

### The integrating insight: not a separate phase

The cross-run model looked, in the prior sketch, like a feature to bolt on — a step that goes and reads other runs and merges them. Operationalizing it reveals something cleaner: routelister already has everything needed, just not made persistent. The listing mechanism maintains a *running identity-set* as it works (the online clustering that turns swept items into concept-identities); the output schema *persists* that set as the index. So the cross-run model is just the recognition that this running identity-set is **persistent** — loaded at the start of a run, saved at the end. There is no separate cross-run phase; the cross-run work happens inside the listing's existing INTEGRATE step. A separate phase would build a *second* identity-set and have to reconcile it with the listing's — pointless duplication.

This is the unification the whole routelister chain was converging on: the running identity-set (listing), the index (output), and the cross-run memory are **one object** — the project's persistent, accumulating concept-map.

### The three operations

A routelister run is a **load-modify-save** loop over that persistent index:

- **LOAD** the index → the run's starting running identity-set. A *root* run loads the whole index (so the breadth sweep starts already knowing the project's identities and which have been drilled); a *concept-targeted* run loads just the target identity's entry.

- **INTEGRATE** — run the ordinary listing (sweep → individuate → frame) on that *pre-seeded* set. As the sweep surfaces candidate items, each is individuated *against the loaded set*: if it matches a loaded identity, that identity is **re-confirmed** and its depth-signal attached or refreshed (if it has been drilled); if it matches nothing, a **new identity** is started (leaning to split, per the individuation finding). Loaded identities the sweep does *not* re-confirm are flagged **stale**. If a depth run since the last load revealed that one identity is really two, or two are really one, that **re-individuation** is applied. Enrichment is signals-only: a drilled identity's route carries a compact depth-signal ("unresolved README-vs-implementation divergence → epistemic route available"), never its full manifestations.

- **PERSIST** — save the updated index (new identities, refreshed signals, re-individuations, stale flags), append an invocation-log entry, and write the run's route-map.

### Discovery, scopes, convergence, staleness

**Discovery** was the prior finding's flagged-open question, and it dissolves: the index IS the registry. A root run doesn't scan the workspace for prior concept-target runs — it reads the index, whose entries carry depth-pointers. A concept-target run writes its depth result into the identity's entry on PERSIST, so the next root run finds it on LOAD. The first run bootstraps (empty index → create on PERSIST). Discovery is just reading the artifact the output schema already defined.

**Scopes** are simply what's loaded and saved: a root run loads/integrates/persists the whole index (breadth); a concept-target run loads/integrates/persists one entry (depth). Same three operations, parameterized.

**Idempotency-at-fixpoint** holds because load-modify-save is idempotent at a fixpoint by construction: a re-run loads the prior fixpoint and re-confirms it, and on unchanged input adds nothing, saving the same set. The key safeguard is that **perception governs** — the current sweep re-confirms each loaded identity against the *current* territory, so the loaded set never overrides what's actually there; it only assists (matching and enrichment). Growth happens only when the input genuinely changes, which is a correct update, not drift.

**Staleness** is handled by re-confirm + flag-not-delete: a loaded identity the current sweep doesn't re-confirm (because the territory changed) is flagged stale and kept with a timestamp, not silently deleted — preserving recoverability and history. And the output stays clean: the **route-map** shows only live, re-confirmed identities; stale entries live in the *index*, flagged and prunable (a prune-policy for very-stale entries is available but not the default). So the user-facing output never bloats even as the cross-run memory accumulates.

### Re-deriving routeman, not carrying it

routeman has analogous machinery — its `_route.md` state file does read-prior / recalibrate / add-new. But it is *same-map* (re-invoking one inquiry's evolving map) and built on its loop-control "REVISIT" move (resurrect / invalidate / revert prior-cycle verdicts), which an earlier finding showed does not transfer to a standalone routelister. So this model re-derives it: read/recalibrate/add-new → LOAD/INTEGRATE/PERSIST; *same-map* → *cross-target* (the index spans all the project's identities, not one inquiry's map); REVISIT is stripped (the integrate step uses individuation + re-confirm, not cycle-verdict revisitation). Only the general **load-modify-save** shape carries — and that shape is just the standard incremental-build pattern (load the cache, recompute what changed, save the cache; a clean rebuild on unchanged sources is a no-op), which is reassuring evidence the design is a known, robust one rather than a novelty.

### The boundary

The operations preserve routelister's identity-defining boundary: INTEGRATE's individuation matches an *item to an identity* (membership), never an *identity to an identity* (relation); the index entries are identity→own-depth. So LOAD/INTEGRATE/PERSIST never create edges between concepts — the forbidden inter-concept dependency graph stays absent at the operation level, not just the schema level.

### The acceptance test, passed

The prior finding's worked trace is the acceptance test. *root #1*: empty index → sweep + individuate fresh → save the project's identities (no depth) + route-map #1. *target-A*: load A → drill A → save A's entry with a depth-signal ("unresolved divergence"). *target-B*: load B → drill B (clean) → save B's entry. *root #2*: load the whole index, now carrying A's and B's depth → re-sweep, re-confirm the identities, attach A's and B's depth-signals to their routes → save + route-map #2. The result: route-map #2 equals route-map #1 with A and B now carrying depth-signals (enrich-not-dump, still compact), idempotent at the fixpoint (had A and B not run, root #2 would equal root #1). This is exactly the behavior the user specified.

### The last design piece

With the cross-run model operationalized, routelister's full design is settled: its meaning (a standalone concept-as-route discipline), its listing mechanism (sweep → individuate → frame), its route-type (grain × kind × engagement-type), its input contract (a territory + a possibly-fuzzy goal), its output schema (the route-map + the index), and its cross-run behavior (load-modify-save the persistent index). The next step is no longer a design question — it is to **consolidate the whole settled chain into the routelister structural spec**.

## Inherited Commitments Re-test

- **Commitment:** the cross-run model sketch (read-prior/integrate/persist; two scopes as one model; idempotency-at-fixpoint + enrich-not-dump; within-concept guard; the trace; the open discovery item).
  - **Source:** `devdocs/inquiries/2026-05-29_21-01__routelister_output_and_cross_run_behavior/finding.md`
  - **Re-test status:** **OPERATIONALIZED.** The sketch becomes concrete LOAD/INTEGRATE/PERSIST; the discovery item is resolved (index-as-registry); the trace passes. The sketch survived being made concrete — and the integrating insight (it's the persistent running-identity-set, not a separate phase) sharpened it.

- **Commitment:** individuation (online clustering, lean-to-split, incremental re-individuation).
  - **Source:** `devdocs/inquiries/2026-05-29_22-40__routelister_concept_listing_mechanism/finding.md`
  - **Re-test status:** **RE-TESTED → individuation IS the INTEGRATE match; re-individuation IS how a depth run updates the index.**

- **Commitment:** the identity-set/index state-file; "no field's value is a different identity."
  - **Source:** `devdocs/inquiries/2026-05-30_00-13__routelister_output_artifact_schema/finding.md`
  - **Re-test status:** **RE-TESTED → the index IS the LOAD/PERSIST target; the within-concept boundary holds at the operation level (membership, not relation).**

- **Commitment:** routeman's re-invocation / idempotency / `_route.md` state (§3.5/§3.6/§5.8).
  - **Source:** `cognitive_harness/routeman/references/routeman.md`
  - **Re-test status:** **RE-TESTED → re-derived (not carried).** read/recalibrate/add-new → LOAD/INTEGRATE/PERSIST; same-map → cross-target; REVISIT stripped; only the general load-modify-save shape carries.

- **Commitment:** breadth-compactness.
  - **Source:** `devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md`
  - **Re-test status:** **RE-TESTED → enrich-not-dump preserved** (signals on identity-routes; the live route-map stays compact; stale entries are index-side).

## Next Actions

### MUST

- **What:** in routelister's structural spec, encode the cross-run model as the **load-modify-save** procedure over the persistent index — LOAD (scoped) → INTEGRATE (the listing on the pre-seeded set: individuation match-or-new, re-confirm + enrich-with-depth-signal, unconfirmed → stale, re-individuate) → PERSIST (index + invocation-log + route-map) — with the index-as-registry discovery and the two scopes.
  - **Who:** the routelister structural-spec authoring pass.
  - **Gate:** condition-bound — when the spec's process section is written.
  - **Why:** this is the operationalized last design piece; it completes routelister's behavior across invocations.

- **What:** encode the live-map / historical-index separation (the route-map shows only re-confirmed identities; stale entries are kept index-side, flagged, prunable) and the idempotency-at-fixpoint + perception-governs invariants.
  - **Who:** the structural-spec authoring pass.
  - **Gate:** condition-bound — alongside the process section.
  - **Why:** keeps the output compact while the cross-run memory accumulates; makes the convergence guarantee explicit.

### COULD

- **What:** **consolidate the whole routelister chain into the structural spec** — meaning, listing mechanism, route-type, input contract, output schema, cross-run model — now that all design pieces are settled.
  - **Who:** the user / a structural consolidation `/MVLw`.
  - **Gate:** condition-bound — the natural next step after this finding.
  - **Why:** the design is complete; consolidation is what remains to produce a usable routelister discipline.

### DEFERRED

- **What:** a **prune-policy** for very-stale index entries, and a **concurrency** story for two runs writing the index at once (file-locking / single-writer).
  - **Gate:** condition-bound — when routelister is implemented and runtime concerns arise (these are implementation details, not design gaps).
  - **Why (if revived):** prune keeps the historical index from growing without bound over a very long project; concurrency control keeps the shared index consistent under parallel runs.

## Reasoning

The model was operationalized by stating it and testing the strongest objections:

- **"It needs a separate cross-run phase."** Rejected — the listing already maintains a running identity-set and the output schema already persists it; the cross-run model is just making that set persistent (load/save), with the cross-run work inside the existing INTEGRATE step. A separate phase would duplicate the identity-set.
- **"Load-and-add means the index bloats / drifts."** Rejected, with a refinement. Load-modify-save is idempotent at the fixpoint (re-running on unchanged input is a no-op); growth happens only on real input change. And the output doesn't bloat: the route-map shows only live re-confirmed identities; stale entries are index-side, flagged, prunable.
- **"Folding cross-run into the listing over-unifies self-re-run and cross-target."** Rejected — they are one mechanism (load-modify-save the shared index) at two scopes (what's loaded); the cross-target work (attaching a prior target's depth-signal to a root identity-route) is a concrete INTEGRATE step, not hidden.
- **"It's routeman renamed."** Rejected — re-derived: same-map → cross-target, REVISIT stripped; only the general load-modify-save shape carries (and that's the standard incremental-build pattern, not routeman-specific).
- **"The trace passing is circular."** Rejected — the trace is the user's *own* specified behavior (an external requirement); the design meeting it is the design satisfying the spec, and it exercises the real mechanism.

A note on method, since this operationalizes the project's own prior sketch: the operations are anchored on routeman's actual re-invocation sections (re-derived, not carried) and on the standard incremental-build pattern, and the design is validated against the user's external acceptance trace — not merely asserted to extend the sketch.

## Open Questions

### Blocked

- Nothing blocks the design. The remaining items (prune-policy, concurrency) are implementation concerns, deferred to when routelister is built.

### Refinement Triggers

- If, in use, the historical index grows large enough that LOAD becomes costly, the prune-policy moves from DEFERRED to needed (observable: LOAD latency or index size crosses a practical threshold).
- If parallel routelister runs become common, the concurrency story (single-writer / locking) moves from DEFERRED to needed (observable: a corrupted or lost index write under concurrent runs).

### Research Frontiers

- Whether the "make the per-run working state persistent → cross-run memory" pattern generalizes to other disciplines that maintain working state (a project-wide pattern for turning per-run state into cumulative memory). Out of scope; flagged.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
the cross-run model (#4, the last design piece)
```

</details>
