# Branch: Routelister — The Cross-Run Model (the last design piece)

## Question

Operationalize routelister's **cross-run memory model** — the capstone the prior findings sketched (`21-01`) and gated on individuation (`22-40`, now resolved) and the output-artifact/index (`00-13`, now authored) — into a concrete process: how a run reads prior runs, folds them in, and persists, across the two scopes (a root run reading prior concept-targeted runs; a run reading its own prior). (Subject: routelister's cross-run/re-invocation behavior; action: **design + operationalize** the process; level: **discipline**, **process layer**; deliverable: the concrete read-prior / integrate / persist operations + the discovery/storage mechanism + the scope-parameterization + the convergence/staleness handling, with the within-concept + enrich-not-dump + idempotency-at-fixpoint guards.) Observation targets, preserved separately:

- **(OT1 — the three operations)** What, concretely, are **read-prior**, **integrate**, and **persist** — given that the artifact they operate on is the identity-set/index from `00-13` and the matching judgment is the individuation from `22-40`?
- **(OT2 — discovery / storage)** How does a run **find** the prior runs to read? (Where does the index live; is cross-target discovery a folder-scan or does the index itself serve as the registry?) — the open item `21-01` flagged.
- **(OT3 — the two scopes + convergence + staleness)** How is read-prior parameterized by scope (self-re-run [OT4 of `21-01`] vs cross-target [OT5 of `21-01`])? How does idempotency-at-fixpoint hold across re-runs, and how is **staleness** handled when the territory changed between runs?
- **(OT4 — the integrating question)** WHERE does cross-run reading sit relative to the listing pipeline (sweep → individuate → frame)? Is it a separate phase, or is it that the listing's "running identity-set" is simply made **persistent** (loaded at start, saved at end) — unifying the cross-run model with the listing mechanism + the output index?

**Deliverable shape:** the operationalized cross-run model — the three operations, the discovery mechanism, the scope-parameterization, the convergence/staleness handling, and where it sits in the pipeline — with the user's `21-01` worked trace (root → A → B → root) as the acceptance test, and a per-commitment re-test.

## Goal

- **Criterion** — concrete operations (not a re-sketch of `21-01`): what each operation reads/writes, how discovery works, how the scopes differ, how convergence + staleness are handled — usable for the spec.
- **Use case** — completes the **last design piece** of routelister; with it done, the whole routelister picture (meaning, listing, route-type, input, output, cross-run) is settled and ready to consolidate into the structural spec.
- **Desired outcome** — clarity on (a) the three operations; (b) discovery/storage; (c) scope + convergence + staleness; (d) where cross-run reading lives in the pipeline.
- **What would fail** — (a) re-sketching `21-01` without operationalizing (the three operations must be concrete); (b) re-importing routeman's loop-built re-invocation (REVISIT / same-map) instead of re-deriving for cross-target aggregation; (c) breaching the within-concept guard (the index/operations must never encode inter-concept relations); (d) an idempotency story that drifts rather than converges, or that ignores staleness when the territory changes; (e) drifting into re-opening the artifact schema (`00-13`, settled) or individuation (`22-40`, settled).

## Source Input

```text
the cross-run model (#4, the last design piece)
```

## Scope Check

Question covers goal: **YES** — the three operations (OT1) + discovery (OT2) + scopes/convergence/staleness (OT3) + the pipeline-placement (OT4) cover the operationalization the goal asks for, with the `21-01` trace as the acceptance test.

Specific-vs-pattern: the user points at a specific DAG item ("#4, the last design piece") — the cross-run model. This addresses that specific design; the broader pattern (routelister as a cumulative, persistent concept-map) is what the model serves. Both in scope.

Transcription-audit note: the input is a terse directive ("the cross-run model (#4, the last design piece)"). The load-bearing content — operationalize the cross-run model, the last design piece — is captured in Question + Goal; the four OTs derive from `21-01`'s flagged-open items (discovery, scopes, convergence) + the integrating pipeline-placement question. No clause dropped.

## Layer Commitment

Primary layer: **PROCESS.** The question is the *behavior across invocations* — the read/integrate/persist operations, the discovery mechanism, the scope-parameterization, the convergence/staleness handling, and where the cross-run read fires in the pipeline. That is the steps/mechanisms the discipline runs = process.

Other-layer alternatives considered and explicitly OUT OF SCOPE:
- **Structural** — the artifact the operations read/write (the identity-set/index + route-record) — SETTLED (`00-13`); inherited, not re-opened. This run designs the operations *on* that artifact.
- **Meaning** — what routelister IS + individuation's meaning — SETTLED (`12-44`/`22-40`); inherited.

Sequential plan: **Process now** (the cross-run operations) → completes the last design piece → next is **consolidation** (authoring the routelister structural spec from the whole settled chain). This order because the cross-run model is the final design input the spec needs.

The primary layer is **not ambiguous** (cross-invocation behavior = process), so the pipeline proceeds without a user gate.

## Synthesis Trigger

This inquiry operationalizes `21-01`'s sketch using `22-40` + `00-13` + routeman's re-invocation machinery; per CONCLUDE the finding MUST include an `## Inherited Commitments Re-test`.

Priors being synthesized / re-tested:

- `devdocs/inquiries/2026-05-29_21-01__routelister_output_and_cross_run_behavior/finding.md` — the cross-run model sketch (read-prior/integrate/persist; OT4 self-re-run + OT5 cross-target = one model at two scopes); the two principles (idempotency-at-fixpoint + enrich-not-dump); the within-concept guard; the worked trace; the open items (discovery/storage). **CRITICAL re-test: operationalize the sketch — does it survive being made concrete?**
- `devdocs/inquiries/2026-05-29_22-40__routelister_concept_listing_mechanism/finding.md` — individuation (online clustering, lean-to-split, incremental re-individuation). **Re-test: individuation IS the integrate step's matching mechanism; re-individuation IS how a depth run updates the index.**
- `devdocs/inquiries/2026-05-30_00-13__routelister_output_artifact_schema/finding.md` — the identity-set/index state-file (the artifact the operations read/write); the depth-link; "no field's value is a different identity." **Re-test: the index IS what read-prior loads + persist saves; the running-identity-set = the persistent index.**
- `devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md` — breadth-compactness (enrich-not-dump must hold). 
- `cognitive_harness/routeman/references/routeman.md` §3.5 (re-invocation) / §3.6 (idempotency) / §5.8 (`_route.md` read-prior/recalibrate/add-new). **CRITICAL re-test: routeman's same-map, REVISIT-built re-invocation is re-derived to cross-target aggregation (per `21-01`/`18-17` loop-bound test) — read-prior/recalibrate/add-new → load/integrate/persist.**
