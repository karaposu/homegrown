# Branch: Routelister — The Concept-Listing Mechanism (enumeration + scoping + identity-individuation)

## Question

Define the *how* of routelister's concept-listing — the part the prior audit marked PARTIAL (the WHAT is settled; the mechanism is not) — across three sub-mechanisms, with identity-individuation emphasized. (Subject: routelister's concept-listing mechanism; action: **design + define** the operational HOW; level: **discipline**, **process layer**; deliverable: a defined mechanism with its components + guards + the key tractability resolution.) Observation targets, preserved separately:

- **(OT1 — the enumeration mechanism)** How does routelister actually traverse a territory and surface candidate concept-identities? (Does it borrow `/surfacing`-style traversal, and how does it stay distinct from `/surfacing` — i.e., what is the operation that turns swept items into typed prescriptive concept-routes?)
- **(OT2 — breadth-scoping / completeness)** When is a root (breadth) run "done," and how is overload avoided beyond a soft goal-bias? (Re-derive routeman's/`surfacing`'s convergence criteria + asymmetric-failure for routelister's identity-resolution.)
- **(OT3 — identity-individuation, the emphasized one)** How does routelister decide two artifacts are manifestations of the *same* concept-identity vs *different* concepts? Is it decidable, and by what mechanism? (The chain's one standing open component + the prior finding's named linchpin.)
- **(OT0 — umbrella)** With OT1–OT3 answered, is the concept-listing logic's HOW now defined (or what remains)?

**Deliverable shape:** a defined concept-listing mechanism — the enumeration procedure, the scoping/completeness criteria, and the identity-individuation mechanism (with its decidability resolution, its failure-asymmetry, and its guards) — grounded in the chain + `/surfacing`'s traversal + routeman's asymmetric-failure/convergence, with a per-commitment re-test.

## Goal

- **Criterion** — an operational mechanism (not just "it's a judgment"): concrete components, a stated individuation test with signals + a bias direction, and a resolution of the "is individuation decidable in general?" worry — without over-formalizing what is genuinely a soft judgment.
- **Use case** — unblocks the #1 prerequisite in routelister's handle-next DAG (individuation gates the listing HOW and the cross-run model); feeds the eventual process spec.
- **Desired outcome** — clarity on (a) the enumeration procedure (sweep → individuate → frame); (b) the breadth-scoping/completeness rule; (c) the individuation mechanism — what it is, whether/why it's tractable, which way it errs, and how it interacts with depth runs.
- **What would fail** — (a) answering individuation with "it's an LLM judgment" and stopping (a non-answer — must give signals + a bias + a tractability argument); (b) collapsing routelister's enumeration into `/surfacing` (losing the individuate-and-prescribe operation that distinguishes it); (c) over-formalizing individuation into a crisp algorithm it cannot be (it is a soft, goal-relative judgment); (d) defining individuation without addressing its failure-asymmetry (over-merge vs over-split) or its interaction with the breadth-compactness commitment (`11-43`).

## Source Input

```text
Is concept-listing logic defined well enough?  │ ⚠️ PARTIAL. What it lists is defined; how (the enumeration
mechanism, breadth-scoping, and esp. identity-individuation) is not.

okay lets dive deep into this one
```

## Scope Check

Question covers goal: **YES** — the enumeration mechanism (OT1) + scoping/completeness (OT2) + identity-individuation (OT3) cover the three named pieces of the "how," and OT0 closes whether the HOW is then defined.

Specific-vs-pattern: the user quotes the prior audit's exact PARTIAL verdict and says "dive deep into this one." The three named pieces (enumeration mechanism / breadth-scoping / identity-individuation) are the specific anchors; the broader pattern is "routelister's concept-listing operational mechanism." Both in scope; individuation is the emphasized anchor ("esp.").

Transcription-audit note: the input names THREE pieces joined by commas + "and esp." — each preserved as a separate observation target (OT1 enumeration, OT2 scoping, OT3 individuation), with OT3 flagged as emphasized per "esp." No piece compressed.

## Layer Commitment

Primary layer: **PROCESS.** The question is explicitly about the *how* — the enumeration procedure, the scoping mechanism, the individuation mechanism. These are the steps/mechanisms routelister runs. (The user contrasts "what it lists [defined]" vs "how [not]" — the HOW is process.)

Other-layer alternatives considered and explicitly OUT OF SCOPE:
- **Meaning** — what routelister IS + what a concept-identity IS — SETTLED by the chain (inherited, not re-opened). Individuation's *meaning* (the identity is the invariant over manifestations) is settled; this run defines its *mechanism*.
- **Structural** — the output-artifact schema + any persisted individuation record — deferred to the spec pass (the cross-run index from `21-01` consumes individuation but its schema is downstream).

Sequential plan: **Process now** (the listing mechanism) → **Structural** (how the identity set + individuation decisions are recorded in the route-record/index) → integrates with the deferred cross-run model. This order because the cross-run model (`21-01`) is gated on individuation being defined first — this run is that prerequisite.

The primary layer is **not ambiguous** (the HOW = process), so the pipeline proceeds without a user gate.

## Synthesis Trigger

This inquiry rolls up the chain + `/surfacing`'s traversal + routeman's enumeration/asymmetric-failure into the concept-listing mechanism; per CONCLUDE the finding MUST include an `## Inherited Commitments Re-test`.

Priors being synthesized / re-tested:

- `devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md` — the ontology (identity↔manifestations); the two axes; breadth-compactness; **identity-individuation flagged as the deferred process-frontier + the refinement-trigger "if undecidable in general, the unit may need a fallback."** **CRITICAL re-test: is individuation decidable, and does the "undecidable in general" worry dissolve?**
- `devdocs/inquiries/2026-05-29_09-53__routeman_concept_definition_refinement/finding.md` — the concept-admission gloss (teleological/epistemic, goal-relative); the **soft bound + lean-to-inclusion**; "abstractness no bar." **Re-test: is individuation the relational sibling of admission (same goal-relative soft judgment)?**
- `devdocs/inquiries/2026-05-29_12-44__routelister_definition_consolidated_rerun/finding.md` — the consolidated definition; individuation = the one open component; perceive-by-enumerate (like `/surfacing`, NOT generate-from-nothing).
- `devdocs/inquiries/2026-05-29_18-17__routelister_route_type_schema_reconciliation/finding.md` — the route-type (grain×kind×engagement-type) the framing step assigns; the NOT-list (no inter-concept graph) bounding what individuation may use.
- `devdocs/inquiries/2026-05-29_21-01__routelister_output_and_cross_run_behavior/finding.md` — individuation = the linchpin gating the listing HOW + the cross-run matching; individuation is incremental (depth runs may re-individuate); idempotency-at-fixpoint.
- `/Users/ns/.claude/skills/surfacing/references/surfacing.md` §2.1/§3.4 (the six-component traversal) + §4.4 (asymmetric-failure) — the traversal substrate routelister's enumeration may compose.
- `cognitive_harness/routeman/references/routeman.md` §2.1 (Enumeration component) + §4.4 (asymmetric-failure: lean-to-inclusion; information-loss-in-the-dark) + §4.5 (convergence criteria). **Re-test: does lean-to-inclusion extend to lean-to-SPLIT for individuation (over-merge hides a concept [unrecoverable] vs over-split lists a near-duplicate [recoverable])?**
