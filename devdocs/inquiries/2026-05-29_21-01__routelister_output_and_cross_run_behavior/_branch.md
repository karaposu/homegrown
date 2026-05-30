# Branch: Routelister — Output Contract + Cross-Run / Re-Invocation Behavior (what to define next)

## Question

Identify what still needs defining for routelister — concentrated on its **output contract** and its **cross-run / re-invocation behavior** — and answer five specific sub-questions, the headline being whether a "root" (project-space breadth) run should read prior concept-targeted (concept-space depth) runs to enrich itself, and whether that behavior is *defined*. (Subject: routelister's output + re-invocation/cross-run state; action: **diagnose what's defined vs not + design the undefined behavior**; level: **discipline**, primarily **process layer**; deliverable: a prioritized enumeration of next-to-define items + a per-question verdict (defined / partial / undefined, with what's needed) + an adjudication of the user's proposed cross-run-enrichment behavior.) Observation targets, preserved separately:

- **(OT0 — umbrella)** What are the things that should be handled next to define routelister better? (a prioritized enumeration of the gaps.)
- **(OT1 — concept-listing logic)** Is routelister's concept-listing logic defined *well enough*? (Is the HOW of identifying-and-listing concept-identities specified, or only the WHAT?)
- **(OT2 — root-run output clarity)** Is it clear what the *output* will be if routelister is run without a target, i.e. at the root (project-space breadth)?
- **(OT3 — per-mode output difference)** Does the output *differ* between a root (project-space) run and a concept-targeted (concept-space) run — and is that difference defined?
- **(OT4 — sequential root re-runs)** What happens if routelister is run twice sequentially at the root? (Idempotent? Accumulate? Extend? — is this defined?)
- **(OT5 — cross-run enrichment, the headline)** What happens across the sequence root → target-A → target-B → root-again? The user's stated intent for what *should* happen: *when concept-targeted runs exist and a root run is invoked, the root run should find those concept-targeted runs, read their `routelister.md` files, and use that to expand its knowledge and produce better results.* **The question: is this behaviour defined or not?** (And if not, should it be, and what does it depend on?)

**Deliverable shape:** a per-question verdict (each OT: defined / partial / undefined + the gap) + a prioritized "handle-next" enumeration + a designed answer for the cross-run-enrichment behavior (OT5) with its dependencies and guards — grounded in routelister's chain + routeman's actual re-invocation machinery (§3.5/§3.6/§5.8) re-tested through the loop-bound lens.

## Goal

- **Criterion** — honest per-question verdicts (don't claim "defined" where only the meaning-level is settled and the process/output-schema is not), plus a designed, dependency-aware answer for the cross-run-enrichment behavior.
- **Use case** — sequences routelister's remaining definitional work before/alongside the structural spec; settles the cross-run behavior the user cares about so the spec can encode it.
- **Desired outcome** — clarity on (a) which of the 5 questions are already answered by the chain vs open; (b) what to define next, in priority order; (c) whether the proposed cross-run-enrichment is sound, defined, and what it requires (notably identity-individuation + a discovery/storage mechanism + an enrich-not-overload guard).
- **What would fail** — (a) answering "yes it's defined" by pointing at routeman's machinery without noticing routeman's cross-run model is *same-map re-invocation*, not the user's *cross-target aggregation*, and is built on loop-control machinery (REVISIT) that doesn't transfer (per `18-17`); (b) designing the cross-run-enrichment while ignoring that it depends on the still-undefined identity-individuation; (c) letting a root run that reads depth runs *dump manifestations* and violate the breadth-run compactness (`11-43`); (d) treating the 5 questions as one (they have distinct answers).

## Source Input

```text
okay what are things that should be handled next in terms of defining better for routelister?

some questions for you

does concept listing logic defined good enough?
is it clear what the output will be , if run without target as a root?

does output differes per root run or concept targeted  run ?

what happens if we run 2 times sequentually in root?

what happens if we run 1 time as a root, then 1 time with targeting concept A and one time with targeting concetp B and then again 1 tine as a root ? (let me tell you what should happen, if concept target runs exists and we run from root, root run should go find these concept targeted runs and read their routelister.md files , and this will expand it's knowledge so it can producse better results, but question is this behaviour is defined or not ?)
```

## Scope Check

Question covers goal: **YES** — the per-question verdicts (OT1–OT5) + the handle-next enumeration (OT0) + the cross-run-enrichment design (OT5) cover the goal of sequencing routelister's remaining work + settling the headline behavior.

Specific-vs-pattern: the user gives a SPECIFIC run-sequence (root → A → B → root). The inquiry addresses both the specific trace (what happens at each step) AND the BROADER pattern it illustrates — routelister's cross-run state/memory model — because the user's question ("is this behaviour defined?") is about the general behavior, not just the one trace.

Transcription-audit note: the input is multi-sentence with FIVE distinct sub-questions; each is preserved as a separate observation target (OT1–OT5), plus the umbrella (OT0). The user's parenthetical in OT5 (the proposed "should happen" behavior — root reads prior concept-targeted runs' `routelister.md` to enrich itself) is load-bearing and preserved verbatim in the OT5 statement. No sub-question compressed.

## Layer Commitment

Primary layer: **PROCESS.** The headline (OT5 cross-run enrichment) and OT4 (sequential re-runs) are about *runtime behavior across invocations* — re-invocation, cross-run state, discovery/reading of prior runs, accumulation. That is the process layer (the steps/mechanisms the discipline runs across invocations). OT2/OT3 (output per mode) are answerable as "what a run produces," which feeds the process picture; OT1 (concept-listing logic) is partly process (the enumeration mechanism).

Sequential plan (this inquiry is partly a multi-layer gap-scan; the layers are explicitly sequenced):
- **Meaning** — largely SETTLED by the chain (what routelister IS; the two axes; the route-type from `18-17`); this inquiry inherits it, doesn't re-open it. (OT3's per-mode *difference* is meaning-settled — the grain axis.)
- **Process (this run)** — the re-invocation / cross-run-state / enrichment behavior (OT4/OT5) + the concept-listing/enumeration + individuation mechanism (OT1) — the dominant, headline content.
- **Structural** — the concrete output-artifact schema (the `routelister.md` route-record fields + the persisted cross-run state file analogous to routeman's `_route.md`) — OT2's "what the output is" has a structural facet (the artifact shape) that this run scopes but does not author; deferred to the spec pass.

This order because the cross-run behavior (process) determines what the persisted artifact must carry (structural), so the process must be settled first.

The primary layer is **not ambiguous** at the headline (OT4/OT5 are unambiguously cross-invocation runtime behavior = process); the output-schema structural facet is explicitly sequenced as downstream, so the pipeline proceeds without a user gate.

## Synthesis Trigger

This inquiry rolls up the routelister chain + routeman's re-invocation machinery into its answers; per CONCLUDE the finding MUST include an `## Inherited Commitments Re-test` (re-test the inherited commitments, especially routeman's cross-run machinery through the loop-bound lens, not parrot).

Priors being synthesized / re-tested:

- `devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md` — the two traversal axes (project-space breadth = root run / concept-space depth = concept-targeted run); manifestation-overload-avoidance (breadth stays compact); **identity-individuation flagged as the deferred process-frontier** (OT5 depends on it). **Re-test: does the breadth/depth distinction define OT2/OT3?**
- `devdocs/inquiries/2026-05-29_12-44__routelister_definition_consolidated_rerun/finding.md` — the consolidated definition; identity-individuation = the one open component. **Re-test: how much of "concept-listing logic" (OT1) is settled vs open?**
- `devdocs/inquiries/2026-05-29_18-17__routelister_route_type_schema_reconciliation/finding.md` — the route-type (grain/kind/engagement-type); the **per-component loop-bound test for carried machinery** + the explicit "reachability/guidance/state carry awaits the loop-bound test." **Re-test: routeman's re-invocation machinery (§3.5/§5.8) is exactly such an un-re-derived carried component — does it transfer?**
- `devdocs/inquiries/2026-05-29_14-58__routelister_project_root_operation_meaning/finding.md` — the root run = project-space breadth → concept-identities as routes; standalone for enumeration. **Re-test: does it answer OT2?**
- `cognitive_harness/routeman/references/routeman.md` §3.5 (re-invocation), §3.6 (idempotency), §5.8 (`_route.md` state file), §2.2 (REVISIT). **CRITICAL re-test: routeman's cross-run model is SAME-MAP re-invocation (extend one inquiry's map via `_route.md`, using REVISIT — a loop-control type that DOESN'T transfer per `18-17`); the user's OT5 is CROSS-TARGET aggregation (a breadth run absorbing separate depth runs) — a DIFFERENT pattern routeman does not define.**
