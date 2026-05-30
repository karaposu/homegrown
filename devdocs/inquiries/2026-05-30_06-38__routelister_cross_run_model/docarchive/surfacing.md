## User Input

`devdocs/inquiries/2026-05-30_06-38__routelister_cross_run_model/_branch.md` (territory: 21-01 [cross-run sketch + principles + guards + open items] + 22-40 [individuation=integrate] + 00-13 [identity-set/index=artifact] + routeman §3.5/§3.6/§5.8 [re-invocation] + 11-43/18-17 [compactness/NOT-list]. Crux = operationalize read/integrate/persist + where it sits in the pipeline.)

**Purpose echo:** surface the items to operationalize the cross-run model (the last design piece).

---

# Structural Surfacing — Thin Artifact

**Mode:** artifact. **Entry-point:** signal-first. **Territory:** explicit-bounded → no Boundary-discovery. **Session note:** 16th inquiry. All priors + routeman §3.5/§3.6/§5.8 in context. Signature signal: **the cross-run model = the listing's running-identity-set made PERSISTENT (load → cluster-on-seeded-set → save)** — unifying cross-run + listing + output — flagged for Sensemaking.

## Traversal Trace

| # | Region | Item (what it shows) | Relevance | Confidence | Step note | Recency |
|---|---|---|---|---|---|---|
| 1 | the sketch | `…21-01…` — read-prior/integrate/persist; OT4 self-re-run + OT5 cross-target = one model, two scopes; idempotency-at-fixpoint + enrich-not-dump; within-concept guard; the root→A→B→root trace; open items (discovery/storage) | **core** | HIGH | The sketch to operationalize. The acceptance test (the trace). In context. | `{filesystem, 2026-05-29}` |
| 2 | integrate's mechanism | `…22-40…` — individuation (online clustering, lean-to-split, INCREMENTAL re-individuation); the running identity-set | **core** | HIGH | Individuation IS the integrate-step matching; re-individuation (split/merge) IS how a depth run updates the index. In context. | `{filesystem, 2026-05-29}` |
| 3 | the artifact | `…00-13…` — the identity-set/index state-file {identity→{own-depth,signal,provenance,timestamps}}+log; the running-identity-set = the persistent index; "no field's value is a different identity" | **core** | HIGH | What read-prior LOADS + persist SAVES. The running-identity-set (22-40) = this persistent index. In context. | `{filesystem, 2026-05-30}` |
| 4 | re-invocation substrate | routeman §3.5/§5.8 — read-prior / recalibrate / add-new; §3.6 idempotency-within-invocation | **core** | HIGH | The op-triple to re-derive: read-prior→LOAD, recalibrate→INTEGRATE, add-new→PERSIST. Re-derive same-map→cross-target (strip REVISIT). In context. | `{filesystem, 2026-05-27}` |
| 5 | the re-derivation lens | `…18-17…` — per-component loop-bound test; NOT-list (no inter-concept graph) | **sub** | HIGH | routeman's re-invocation is loop-built (REVISIT) → re-derive; the within-concept guard bounds the index/ops. In context. | `{filesystem, 2026-05-29}` |
| 6 | the compactness guard | `…11-43…` — breadth lists identities not manifestations | **sub** | HIGH | enrich-not-dump: integrate attaches depth-SIGNALS to identity-routes, not manifestation dumps. In context. | `{filesystem, 2026-05-29}` |
| 7 | the pipeline (where it fires) | `…22-40…` sweep→individuate→frame + `…00-13…` running-identity-set | **core** | HIGH | The integrating question: cross-run read = LOAD the index AS the run's starting running-identity-set (before sweep); save back (after frame). Not a separate phase. Flagged for Sensemaking. | `{filesystem, 2026-05-30}` |

## State Summary

### Coverage map
| Region | Coverage | Aggregate relevance |
|---|---|---|
| The 21-01 sketch (ops + principles + guards + trace + open items) | confirmed | core |
| The prerequisites (22-40 individuation=integrate; 00-13 index=artifact) | confirmed | core |
| routeman re-invocation substrate (§3.5/§3.6/§5.8) + the re-derivation lens + compactness guard | confirmed | core/sub |
| The pipeline-placement (load-at-start/save-at-end) | confirmed (the integrating signal) | core |

### Confirmed-absent regions
- An operationalized cross-run model (concrete read/integrate/persist + discovery + scope + staleness) — ABSENT (this run authors it; 21-01 only sketched).
- A folder-scanning discovery mechanism — ABSENT and should stay so (the index IS the registry).

### Concept-names list (provenance = trace #)
- `persistent-running-identity-set` {coined-term, #3/#7, gloss: THE integrating insight — the cross-run model is the listing's running-identity-set made persistent: LOAD the index at start (read-prior), online-cluster on the pre-seeded set (integrate), SAVE back at end (persist). Not a separate phase}
- `op-triple re-derivation` {structural-ref, #4, gloss: routeman read-prior/recalibrate/add-new → routelister LOAD/INTEGRATE/PERSIST; same-map→cross-target; strip REVISIT}
- `individuation = integrate` {structural-ref, #2, gloss: the integrate-step matching IS individuation (22-40); re-individuation (split/merge) IS the index update}
- `index = registry (discovery)` {coined-term, #1/#3, gloss: discovery is trivial — the index is the registry (known path; entries carry depth-pointers); no folder-scan needed (21-01's open item resolved)}
- `idempotency-at-fixpoint via re-confirm` {structural-ref, #1/#7, gloss: re-run LOADS the prior fixpoint; the sweep RE-CONFIRMS entries against the current territory → unchanged=same set (converged); changed=updated (correct); unconfirmed→flagged stale (kept, visible-with-reason)}

### Recency distribution
| Region | newest | oldest | no-mtime | total |
|---|---|---|---|---|
| chain (this session) | 2026-05-30 | 2026-05-29 | 0 | 5 |
| routeman spec | 2026-05-27 | 2026-05-27 | 0 | 1 |
| derived signal | 2026-05-30 | — | 1 | 1 |

### Frontier flags (for downstream)
- **F1 (OT4, the integrating insight — Sensemaking)** — confirm the cross-run model = the persistent-running-identity-set (load/cluster/save), not a separate phase; this unifies cross-run + listing + output.
- **F2 (OT1, Sensemaking)** — the three operations concretely: LOAD (scoped) / INTEGRATE (individuation + enrich-not-dump + re-individuation) / PERSIST (save index + log).
- **F3 (OT2, Sensemaking)** — discovery = the index is the registry (no folder-scan).
- **F4 (OT3, Sensemaking)** — scopes (root loads whole index / concept-target loads one entry); idempotency-at-fixpoint via re-confirm; staleness → flag-not-delete.
- **F5 (boundary, Critique)** — within-concept (the index/ops never encode inter-concept relations); re-derive routeman (don't carry REVISIT/same-map).
- **F6 (out of scope)** — re-opening the artifact schema (00-13) or individuation (22-40).

### Workspace-populated status
`{populated: true, populated-at: 2026-05-30T06-38 (session-local), extent: the 21-01 sketch + prerequisites + routeman substrate + the persistent-running-identity-set signal, tagged for the operationalization}`

## Telemetry
- Mode: `artifact`; entry-point: `signal-first`; cycles: 1 (all priors + routeman §3.5/§3.6/§5.8 in context)
- Items enumerated: 7; tagged — core 5, sub 2
- Boundary-discovery: no; `items_with_mtime`: 6; `items_without_mtime`: 1
- Failure modes checked: Missed-relevance (the persistent-running-identity-set unification + the index-is-registry + idempotency-via-re-confirm + staleness-flag-not-delete all surfaced, not just "operationalize"); Over-coverage (held); Interpretive-overstep (avoided — the operationalization FLAGGED for Sensemaking); Recency-Equates-Idleness (avoided — routeman 2026-05-27 substrate is core)
- Self-assessment verdict: **PROCEED** — the sketch, the prerequisites, the routeman substrate, and the persistent-running-identity-set signal are in the workspace; the cross-run-model territory is covered.
