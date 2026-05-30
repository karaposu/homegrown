# Branch: Routelister — The Output-Artifact Schema (record fields + saved-file form)

## Question

Author the *form* of routelister's output — the part the prior audit marked PARTIAL ("clear in kind [a compact list of concept-identities as typed routes]; the form — record fields, saved-file format — isn't authored"). (Subject: routelister's output-artifact schema; action: **design + author** the artifact shape; level: **discipline**, **structural layer**; deliverable: the per-route record schema + the saved-file/Route-Map wrapper + the identity-set/cross-run-index recording, each re-derived from routeman's §5.4/§5.5/§5.8 through the `18-17` loop-bound test.) Observation targets, preserved separately:

- **(OT1 — the route-record schema)** What fields does a single routelister route carry? Re-derive routeman's §5.4 5-group per-route schema (Route Identity / Route State / Route Meaning / Reasoning / Adaptive Guidance) for routelister: which fields carry, which re-derive, which DROP as loop-contaminated (per `18-17`'s per-component loop-bound test) — and how the route-type signature (grain × kind × engagement-type) lands as fields.
- **(OT2 — the saved-file / Route-Map wrapper)** What does the saved `routelister.md` look like? Re-derive routeman's §5.5 wrapper (Map Header / Route Index / Excluded Section / Telemetry) for routelister's identity-list output.
- **(OT3 — the identity-set / cross-run index recording)** How is the running identity-set (which `21-01`/`22-40` established IS the cross-run index) recorded? Re-derive routeman's §5.8 `_route.md` state file, within-concept (identity → own-depth pointer; never inter-concept edges).
- **(OT0 — umbrella)** With OT1–OT3 authored, is the root-run output's FORM now defined (does PARTIAL → DEFINED)?

**Deliverable shape:** the authored output-artifact schema — the route-record fields, the saved-file Route-Map wrapper, and the identity-set/index recording — with each field's provenance (carries / re-derived / dropped) traced to routeman's §5.4/§5.5/§5.8 via the loop-bound test, and a per-commitment re-test.

## Goal

- **Criterion** — a concrete, authored schema (actual field list + wrapper + state-file), with every routeman field explicitly classified (carry / re-derive / drop-as-loop-contaminated) — not a vague "it has fields."
- **Use case** — completes the output half of routelister's structural spec; unblocks the cross-run model (which reads/writes this artifact); answers the audit's OT2 (root-run output FORM).
- **Desired outcome** — clarity on (a) the per-route record's fields; (b) the saved-file's structure; (c) how the identity-set/index is persisted; all re-derived, not blindly carried.
- **What would fail** — (a) copying routeman's §5.4 schema wholesale (re-importing the loop-contaminated fields — Status reachability values, Blocked-By, Unlocks — that `18-17` showed don't transfer); (b) letting the "Unlocks"/downstream-routes field smuggle in the forbidden inter-concept dependency graph; (c) authoring the schema without the route-type signature (grain × kind × engagement-type) as first-class fields; (d) drifting into the meaning/process (already settled) rather than the FORM.

## Source Input

```text
now lets dive into

Is the root-run output clear?

PARTIAL. Clear in kind (a compact list of the project's concept-identities as typed routes); the form (record fields, saved-file format) isn't authored.
```

## Scope Check

Question covers goal: **YES** — the route-record schema (OT1) + the saved-file wrapper (OT2) + the identity-set/index recording (OT3) cover the "form" the audit flagged unauthored, and OT0 closes whether the FORM is then defined.

Specific-vs-pattern: the user quotes the audit's exact PARTIAL verdict ("record fields, saved-file format isn't authored"). The two named pieces (record fields / saved-file format) are the specific anchors; OT3 (the identity-set/index) is added because the prior findings flagged it as part of the same structural residue. Both the specific form-pieces and the broader "routelister's output artifact" are in scope.

Transcription-audit note: the audit names two form-pieces — "record fields" and "saved-file format" — preserved as OT1 (record schema) and OT2 (saved-file wrapper); OT3 (identity-set/index) is the structural residue the chain attached to the same form question. No piece compressed.

## Layer Commitment

Primary layer: **STRUCTURAL.** The question is explicitly about the *form* — "record fields, saved-file format." That is the artifact's shape/schema/organization = the structural layer. (The prior findings repeatedly deferred "the output-artifact schema" to "the structural spec pass"; this is that pass.)

Other-layer alternatives considered and explicitly OUT OF SCOPE:
- **Meaning** — what routelister IS + what a route's type IS — SETTLED (`12-44`, `18-17`); inherited, not re-opened.
- **Process** — the listing mechanism (sweep → individuate → frame) + individuation — SETTLED (`22-40`); inherited. This run gives those a *place to land* (the fields), not a re-design.

Sequential plan: **Structural now** (the output schema) → integrates with the deferred **cross-run model** (`21-01`), which reads/writes this artifact (the identity-set/index this run records is what the cross-run model consumes). This order because the cross-run model needs a defined artifact to operate on — this run supplies it.

The primary layer is **not ambiguous** (the FORM = structural), so the pipeline proceeds without a user gate.

## Synthesis Trigger

This inquiry rolls up routeman's §5.4/§5.5/§5.8 + the routelister chain into the output schema; per CONCLUDE the finding MUST include an `## Inherited Commitments Re-test` (re-test each routeman field through the loop-bound test, not blindly carry).

Priors being synthesized / re-tested:

- `cognitive_harness/routeman/references/routeman.md` §5.4 (per-route 5-group schema) + §5.5 (Route-Map wrapper) + §5.8 (`_route.md` state file). **CRITICAL re-test: which §5.4 fields carry vs are loop-contaminated (Status reachability done/stale/superseded; Blocked-By; Unlocks) → drop/re-derive per `18-17`.**
- `devdocs/inquiries/2026-05-29_18-17__routelister_route_type_schema_reconciliation/finding.md` — the route-type (grain × kind × engagement-type, the 9-verb subset); the per-component loop-bound test (the lens for this whole re-derivation); the NOT-list excludes inter-concept graphs (bounds the "Unlocks" field). **Re-test: the type-signature lands as the Route-Identity fields.**
- `devdocs/inquiries/2026-05-29_22-40__routelister_concept_listing_mechanism/finding.md` — the running identity-set (= the cross-run index); individuation; the identity↔manifestation depth-link. **Re-test: the identity-set is what OT3 records; the depth-link is a within-concept field.**
- `devdocs/inquiries/2026-05-29_21-01__routelister_output_and_cross_run_behavior/finding.md` — the cross-run index (identity → own-depth pointer; within-concept guard); enrich-not-dump (depth-signals on identity-routes). **Re-test: the depth-signal is a route-record field; the index is the OT3 state-file.**
- `devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md` — breadth-compactness (a route = one identity, not its manifestations) → the route-record is per-IDENTITY, not per-manifestation.
- `devdocs/inquiries/2026-05-29_14-58__routelister_project_root_operation_meaning/finding.md` — the root-run output = the project's concept-identities as routes (what OT2's wrapper holds).
