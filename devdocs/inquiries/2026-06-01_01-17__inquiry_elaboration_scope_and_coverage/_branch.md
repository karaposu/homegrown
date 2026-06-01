# Branch: Inquiry Elaboration — Scope & Coverage (achieve / cover / not-cover)

## Question

- **Subject** — the **Inquiry Elaboration** discipline (accepted as a discipline in `devdocs/inquiries/2026-05-31_22-30__inquiry_elaboration_discipline_or_not/finding.md`; the front-of-MVLw operation that gets a raw request correctly understood and shaped before the loop runs).
- **Action** — DEFINE / DECIDE its scope (a meaning-layer remit decision), not redesign its identity (already settled) and not author its spec (deferred).
- **Level** — discipline.
- **Observation targets** (three distinct clauses in the user's request — preserved separately per MC2):
  1. What Inquiry Elaboration should **achieve** — its purpose / characteristic output / success condition.
  2. What it should **cover** in terms of *task-definition elaboration* — its in-scope territory (the work it legitimately does on a raw request).
  3. What it should **NOT cover** — its NOT-list / boundary / exclusions (work that belongs to other disciplines, to the runner, or to nothing).
- **Deliverable shape** — a scope definition = an "achieve" statement + an in-scope coverage list + a NOT-list, each item with reasoning grounded in the accepted arc and the adjacent disciplines.

**Question (one sentence capturing all five aspects):** At the meaning layer, what should the accepted Inquiry Elaboration discipline *achieve* (its purpose and characteristic output), what should it *cover* in elaborating a raw task/request into a loop-ready inquiry, and what should it *not* cover (its NOT-list) — so its remit is crisp before structural/process design begins?

## Goal

- **Criterion** — precision (decidable boundaries, not vibes), completeness (answers all three sub-questions), consistency with the accepted 4-phase arc (comprehend → perceive request-structure → verify framing-fidelity → elaborated-inquiry spec) and with the operations it reuses, and non-overlap with adjacent disciplines (sense-making, decompose, td-critique, surfacing) and with the runner.
- **Use case** — the user will use this to (a) lock the discipline's remit before the deferred structural spec design, (b) know which of branch.md's accreted audits migrate INTO the discipline vs stay out, and (c) prevent two specific failure modes: scope-creep into a mini-runner (the tailored-phases residual from 22-30) and territory-theft from adjacent disciplines.
- **Desired outcome** — a settled meaning-layer scope (achieve + cover + NOT-cover) for Inquiry Elaboration, ready to feed the deferred structural design.
- **What would fail** — an answer that (i) re-litigates whether it is a discipline (already settled — out of scope), (ii) drifts into structural design (spec sections, artifact shape) or process design (pipeline placement, spawn mechanics) — those are deferred, (iii) is so broad it swallows sense-making / decompose / critique wholesale (the mini-runner trap), or (iv) is so vague the in/out boundary can't actually be applied to a concrete request.

## Source Input

```text
lets discuess what Inquiry elaboration discipline should achieve, what it should cover in terms of task definition
  elobaration, and what it shouldnt cover
```

## Scope Check

Question covers goal: **YES** — the three observation targets (achieve / cover / not-cover) are exactly what the goal asks to settle, and the Goal's "what would fail" pins the two boundaries that matter (mini-runner creep; adjacent-discipline overlap).

Specific-vs-pattern: the question is about the discipline's general remit (the pattern), not a specific example request. No specific-example scoping intended; address the general scope. The discipline's own motivating examples (wrongly-phrased scope/goal; bundled distinct requests; deprecated-reference-cited-as-authoritative) are evidence to test the scope against, not the scope's limit.

## Layer Commitment

**Primary layer: MEANING.** The question asks what the discipline *achieves*, *covers*, and *excludes* — i.e., its verb-meaning, its cognitive territory, and its NOT-list. In this project's discipline-anatomy convention those three are the **Identity** of a discipline (see surfacing/routelister/routeman specs), which is the meaning layer.

Out of scope for THIS run (other layers, deferred — consistent with the whole arc deferring them):
- **Structural** — the discipline's spec sections (Identity / Components / Process / Quality / Output) and the artifact shape of the elaborated-inquiry output. Reason: scope (remit) precedes spec shape; defining sections before remit is the Layer-Commitment anti-pattern.
- **Process** — where in MVLw it runs, how the runner spawns parallel/sequential inquiries from its output, how branch.md thins. Reason: process design needs the remit AND the structural shape settled first.

Why meaning-first here: the entire arc (05-24 → 22-30) has held meaning-layer-only; the next open meaning question after "it IS a discipline" is "what exactly is in and out of its remit." Settling that wrong would propagate into structural/process. The primary layer is not ambiguous — achieve/cover/not-cover is identity, not sections or steps.

## Synthesis Trigger

This inquiry consumes and inherits commitments from the Inquiry Elaboration arc; each must be re-tested, not silently absorbed (CONCLUDE will enforce an `## Inherited Commitments Re-test`):

- `devdocs/inquiries/2026-05-31_22-30__inquiry_elaboration_discipline_or_not/finding.md` — **controlling prior.** Commits: it IS a discipline; the 4-phase arc (comprehend the request multilayer → perceive request-structure → verify framing-fidelity incl. reference-validity → elaborated-inquiry spec); the spawn of inquiries is the **runner's** action (perception/action split); the load-bearing residual that it's a discipline *only if built with tailored internal phases* (else mini-runner); name "inquiry elaboration" ratified.
- `devdocs/inquiries/2026-05-31_20-08__understanding_stage_identity/finding.md` — Commits: the three jobs map to existing operations (comprehend = sensemaking's Comprehending(input); split = Decomposition(request); fidelity = a verification/td-critique-style gate); two senses of "understanding" (operation vs stage); branch.md thins as its audits migrate in; the spawn is downstream orchestration.
- `devdocs/inquiries/2026-05-31_13-31__understanding_vs_sensemaking_reexamine/finding.md` — Commits: understanding-the-operation = sensemaking's Comprehending (expansion half), generalized; "position ≠ identity"; one operation, multiple consumers.
- `devdocs/for_future/2026-05-24_05-30__understand_discipline_meaning/finding.md` — Commits (basis corrected by 13-31, content preserved): multilayer/multi-resolution comprehension of the task; legitimate standalone pre-framing use; branch.md growth = "pregnant meaning"; an early 5-entry NOT-list (don't converge / don't relevance-tag / don't partition-with-interfaces / don't encode-the-framing / don't generate-novel-candidates).
- `devdocs/for_future/2026-05-24_04-00__branch_md_reference_authority_audit/finding.md` — Commits: branch.md checks span three orthogonal axes — (1) internal consistency, (2) faithfulness to user input, (3) external validity of cited references; the reference-authority audit (status / subject-alignment / disambiguation) is a verify sub-job candidate for the discipline.

Re-test obligation: the in-scope list and NOT-list this inquiry produces must be checked AGAINST these inherited commitments (especially the 4-phase arc and the tailored-phases residual), confirming/refining/correcting each with cited evidence rather than assuming them.
