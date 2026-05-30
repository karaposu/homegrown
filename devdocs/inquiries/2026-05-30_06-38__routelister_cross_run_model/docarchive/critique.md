## User Input

`devdocs/inquiries/2026-05-30_06-38__routelister_cross_run_model/_branch.md` (problem context: sensemaking.md; candidates: the rendered model PROC + TRACE + foils F1–F6 in innovation.md; priors + routeman §3.5/§3.6/§5.8 in context). Adjudicate idempotency/staleness, the re-derivation, the within-concept boundary, not-a-separate-phase, the trace, self-reference. Process-layer.

---

# Structural Critique — Routelister's Cross-Run Model

**Stakes: HIGH** (the last design piece; completes routelister) → **burden = guilty-until-proven-innocent**. Weighted risks: **idempotency/drift** and **self-reference + the acceptance-test's legitimacy**.

## Phase 0 — Dimension Construction

| # | Dimension | What it asks | Weight |
|---|---|---|---|
| D1 | **Idempotency-at-fixpoint** | Does load-modify-save genuinely converge (not drift)? | **CRITICAL** |
| D2 | **Staleness handling** | Is flag-not-delete right, or does the index/map bloat? | HIGH |
| D3 | **Re-derivation soundness** | same-map→cross-target, REVISIT-stripped — genuine, not renamed? | HIGH |
| D4 | **Within-concept boundary** | Preserved by the operations (no inter-concept edges)? | **CRITICAL** |
| D5 | **Not-a-separate-phase** | Is the unification right, or does it hide real cross-run complexity? | HIGH |
| D6 | **Self-reference + the trace** | Guarded; does the `21-01` trace genuinely (non-circularly) pass? | **CRITICAL** |

## Phase 1 — Fitness Landscape

- **Viable:** converging idempotency + bounded staleness + genuine re-derivation + preserved boundary + justified unification + a non-circular passing trace.
- **Dead:** (a) drift/monotonic-bloat [D1/D2]; (b) inter-concept leak [D4]; (c) routeman renamed [D3]; (d) over-unification hiding complexity [D5]; (e) circular trace [D6].
- **Boundary:** right but the index-bloat or concurrency unaddressed → REFINE.

## Phase 2 — Adversarial Evaluation

### Candidate A — The cross-run model (principal)

**Prosecution:**
- *P-a (D1/D2 — the sharpest):* "load-modify-save with flag-not-delete means the index only grows — stale entries pile up forever and the breadth map fills with stale-flagged identities. That's monotonic accumulation, not idempotency; the 'concept-map' bloats."
- *P-b (D5):* "Folding cross-run into the listing over-unifies — a root run reading OTHER targets' depth is genuinely different from re-running on the same territory. You've hidden the real cross-target work inside 'the running-identity-set is persistent.'"
- *P-c (D6):* "The trace 'passing' is circular — you designed the model to pass your own trace."
- *P-d (D2):* "Two runs writing the index concurrently corrupt it — the model has no concurrency story."

**Defense:**
- *D-a (vs P-a):* idempotency-at-fixpoint is about the *output given fixed input* — re-running on an unchanged territory+goal+index produces the same output. That holds (load-modify-save; re-confirm adds nothing new). The stale-accumulation concern is real but bounded by two things: (1) **the route-map (the user-facing output) shows only LIVE [re-confirmed] identities** — stale entries live in the *index* with a flag, NOT in the active breadth map, so the *output* doesn't bloat; (2) the index's growth is the *legitimate accumulation of the project's concept history* (recoverable, flag-visible), and a **prune-policy** for very-stale entries is available (the deferred option). So: idempotent output, bounded live-map, optional prune. (This must be stated — a REFINE: separate the live route-map from the full historical index.)
- *D-b (vs P-b):* they are one mechanism (load-modify-save the *shared* index) at two scopes — what differs is *which* index entries are relevant (own-prior vs all-targets' depth), but both read the *same* index. `21-01` already established self-re-run (OT4) and cross-target (OT5) are one model at two scopes; this run confirms it. The "genuine difference" is the scope *parameter* (whole vs one entry), not a different mechanism — and the cross-target work (attaching a prior target's depth-signal to a root identity-route) is a concrete INTEGRATE step, not hidden.
- *D-c (vs P-c):* the trace is the *user's own specified behavior* (`21-01`'s OT5 intent — "a root run should read prior concept-target runs and produce better results"), an external requirement, not one invented to pass. The design meeting it = the design satisfying the user's spec. And the trace exercises the real mechanism (root #2 LOADs A's/B's persisted depth; INTEGRATE attaches their signals; idempotent at the fixpoint). Passing is meaningful, not circular.
- *D-d (vs P-d):* concurrent index writes are an *implementation/runner* concern (file-locking / single-writer), not a *model* concern — the model defines load-modify-save; the runtime guarantees serialization. Flagged as a downstream implementation detail (acknowledged, not a design gap).

**Collision:**
- P-a × D-a → **defense wins, REFINE required:** separate the live route-map (re-confirmed identities only) from the full historical index (which keeps stale-flagged entries, prunable). Output doesn't bloat; idempotency holds. **D1/D2: PASS as refined.**
- P-b × D-b → **defense wins:** one mechanism, two scopes; the cross-target work is a concrete INTEGRATE step, not hidden. **D5: PASS.**
- P-c × D-c → **defense wins:** the trace is the user's external spec; passing is meaningful. **D6: PASS.**
- P-d × D-d → **acknowledged:** concurrency is a downstream implementation concern (note it). **D2 (concurrency): NOTED, out-of-model-scope.**
- **D3** (re-derivation): same-map→cross-target + REVISIT-stripped (only the general load-modify-save shape carries) — genuine. **PASS.**
- **D4** (within-concept): INTEGRATE's individuation is membership (item→identity), not relation (identity→identity); index entries are identity→own-depth. No inter-concept edges. **PASS.**

**Position:** **VIABLE.** Passes all CRITICAL dims (D1 idempotency, D4 boundary, D6 self-ref/trace), plus D3/D5, under the high-stakes burden. Two REFINEs: (i) separate the live route-map from the historical index (so the output doesn't bloat; staleness is index-side, flagged, prunable); (ii) note concurrency as a downstream implementation concern.

### Candidates B — The foils

| Foil | Verdict | Why |
|---|---|---|
| **F1 (separate cross-run phase)** | **KILL** | duplicates the running-identity-set; cross-run work lives in INTEGRATE. |
| **F2 (dedicated merge step)** | **KILL** | the merge IS individuation (match-or-new). |
| **F3 (folder-scan discovery)** | **KILL** | the index is the registry. |
| **F4 (load-and-add = drift)** | **KILL** | load-modify-save idempotent at fixpoint; growth = input change. |
| **F5 (routeman renamed)** | **KILL** | re-derived (cross-target; REVISIT-stripped). |
| **F6 (LOAD replaces perception / stale-trust)** | **KILL** | perception governs (re-confirm); LOAD assists. |

## Phase 3 — Verdicts

- **Candidate A (the model): SURVIVE** with two REFINEs (live-map vs historical-index separation; concurrency-noted). Passes all CRITICAL dims.
- **F1–F6 KILL** (all; the model is well-bounded).

## Phase 3.5 — Assembly Check

The model + the two REFINEs assemble into the **operationalized, well-bounded cross-run model** — the last design piece. **Emergent (confirmed):** the index is one object across four inquiries (listing/output/cross-run/input-territory) = the project's persistent concept-map; with the live-map/historical-index separation, the user-facing output stays compact while the cross-run memory accumulates. **routelister's design is now complete** — meaning, listing, route-type, input, output, cross-run all settled. VIABLE.

## Phase 4 — Coverage + Convergence

- **Coverage:** all six dimensions + the bloat + over-unification + circularity attacks evaluated; foils map the dead regions; no large unexplored region.
- **Convergence:** clean SURVIVE (the REFINEs sharpen, don't change the verdict); stable.
- **Signal: TERMINATE** — the cross-run model is operationalized; the last design piece is done.

---

## Inherited Commitments Re-test (Synthesis-Trigger obligation)

| Prior commitment | Re-test result | Evidence |
|---|---|---|
| `21-01`: the cross-run model sketch (read-prior/integrate/persist; two scopes; idempotency-at-fixpoint + enrich-not-dump; within-concept guard; the trace; open discovery item) | **RE-TESTED → OPERATIONALIZED.** read-prior/integrate/persist → concrete LOAD/INTEGRATE/PERSIST; the discovery open-item RESOLVED (index-as-registry); the trace PASSES. The sketch survived being made concrete. |
| `22-40`: individuation (online clustering, lean-to-split, incremental) | **RE-TESTED → individuation IS the INTEGRATE match; re-individuation IS the index update.** |
| `00-13`: the identity-set/index state-file; "no field's value is a different identity" | **RE-TESTED → the index IS the LOAD/PERSIST target; the within-concept boundary holds at the operation level (membership not relation).** |
| routeman `§3.5`/`§3.6`/`§5.8` (re-invocation/idempotency/state) | **RE-TESTED → re-derived (not carried):** read/recalibrate/add-new → LOAD/INTEGRATE/PERSIST; same-map→cross-target; REVISIT stripped; only the general load-modify-save shape carries. |
| `11-43`: breadth-compactness | **RE-TESTED → enrich-not-dump preserved** (signals on identity-routes; live-map stays compact). |

None parroted; the sketch is **operationalized + verified against the trace**, routeman is **re-derived** (adversarial to carry), and a new REFINE (live-map vs historical-index) sharpens the staleness handling. **D6: PASS.**

## Convergence Telemetry

- **Dimension coverage:** 6 (default + project-specific D1/D4/D6 weighted); all applied.
- **Adversarial strength:** **STRONG** — prosecution constructed the bloat/drift attack (P-a, which forced the live-map/historical-index REFINE), the over-unification attack (P-b), the circular-trace attack (P-c), and the concurrency attack (P-d).
- **Landscape stability:** STABLE (REFINEs sharpen; no verdict-region change).
- **Clean SURVIVE exists:** YES.
- **Failure modes observed:** **none.** Wrong-Dimensions guarded (D1/D4/D6 weighted); Rubber-stamping guarded (6 foil KILLs + the bloat/over-unification/circularity attacks); Nitpicking guarded (defense + 2 REFINEs, clean SURVIVE); Dimension-Blindness guarded (the bloat + circularity risks explicitly dimensioned); False-Convergence guarded (clean SURVIVE); **Self-Reference-Collapse guarded** — external anchors (routeman §3.5/§5.8; the incremental-build pattern; the user's `21-01` trace as the external acceptance test), and the re-derivation strips REVISIT (adversarial to carrying routeman).
- **Overall: PROCEED / TERMINATE** — the cross-run model SURVIVES; the last design piece is complete.

### Signal to the loop
**TERMINATE.** Ranked survivor: the cross-run model = the listing's running-identity-set made **persistent** — **LOAD** the index (scoped) → **INTEGRATE** (the listing on the pre-seeded set: individuation match-or-new, re-confirm + enrich-with-depth-signal, unconfirmed→stale, re-individuate) → **PERSIST** (index + log + route-map). Discovery = the index-as-registry; idempotency-at-fixpoint via re-confirm (converge-not-drift); staleness = flag-not-delete (index-side; the live route-map shows only re-confirmed identities; prune-policy optional); routeman re-derived (same-map→cross-target, REVISIT-stripped); within-concept preserved; the `21-01` trace PASSES; concurrency noted as a downstream implementation concern. **This is the last design piece — routelister's design (meaning, listing, route-type, input, output, cross-run) is now complete; next is consolidation into the structural spec.** Ready for CONCLUDE.
