# Branch: Are the Loop-Control Moves Meta-Loop DECISIONS, Not an Enumerated Menu?

## Question

Re-examine where the loop-control moves (TERMINATE, WIDEN, MERGE, RE-RUN-DEEPER, UNBLOCK, DIFFERENT-APPROACH, REVISIT) belong in the architecture — challenging the standing assumption that they are an *enumerated menu* composed at a boundary (Gap A's fix: "the meta-loop composes the loop-control menu by reading its loop-state + routelister's index"; and the prior turn's "the boundary protocol produces the complete field including the loop-control moves").

- **Subject** — the loop-control moves' nature (enumerated field-item vs control decision) and their owning component (routelister / a boundary protocol / the meta-loop).
- **Action** — **diagnose/decide**: are the loop-control moves *enumerated options* (like concept-routes) or *the meta-loop's control DECISIONS*? Does the "boundary protocol enumerates a loop-control menu" framing survive, or does it dissolve/shrink?
- **Level** — architecture: discipline (routelister) / boundary-protocol / meta-loop / runner — cross-cutting; the *ownership + nature* of a class of moves.
- **Observation targets** (preserved separately):
  - **(OT1 — the nature)** Is a loop-control move an *enumerated option* (a member of a perceived field, like a concept-route) or a *control DECISION* (a member of the meta-loop's fixed control vocabulary, evaluated against loop-state)? These are different kinds of thing.
  - **(OT2 — the owner)** Given OT1, who owns them — routelister (no, already excluded), a boundary protocol (the Gap-A "composes the menu" frame), or the meta-loop (the user's hypothesis)?
  - **(OT3 — the boundary-protocol's fate)** If loop-control moves are meta-loop decisions, does the separate "boundary protocol" layer dissolve or shrink (to a thin junction = how/when the meta-loop calls routelister), and what — if anything — remains its own responsibility?
  - **(OT4 — the per-move test)** Per move (terminate/widen/merge/re-run/unblock/different-approach/revisit): is it a decision, a perception, or a mix? (esp. MERGE = concept-sameness [routelister's individuation] + branch-combine [meta-loop decision]; UNBLOCK = gate-state [meta-loop] + clear [meta-loop].)
  - **(OT0 — clean architecture)** What is the cleanest end-state layering, and does it dissolve the user's recurring confusion ("isn't the boundary protocol doing what routelister does?")?
- **Deliverable shape** — a decision (enumerated-menu vs meta-loop-decisions) with per-move reasoning, the resulting clean layering, and an explicit re-test of Gap A + the prior boundary-protocol framing (which this may CORRECT/REFINE).

## Goal

- **Criterion** — a clean, honest verdict that distinguishes *enumeration* (perceiving a field of options) from *decision* (a controller evaluating its control vocabulary), decides which the loop-control moves are, and follows the consequence through to the component-ownership + whether the boundary-protocol layer is real or an over-decomposition.
- **Use case** — settles the architecture before the routelister spec + the meta-loop/boundary orchestration are authored; prevents building a "boundary protocol that enumerates a loop-control menu" if that's a routeman holdover.
- **Desired outcome** — clarity on whether loop-control = meta-loop decisions (collapsing a layer) or = an enumerated menu (keeping the boundary protocol as a composer); a layering the user can hold without the recurring "isn't this what routelister does?" confusion.
- **What would fail** — (a) reflexively defending Gap A / the boundary-protocol framing because they're in prior findings (status-quo bias); (b) reflexively agreeing with the user without testing whether *some* enumeration is genuinely needed (e.g., presenting options to a human); (c) missing that "enumerate" was inherited from routeman's "everything is a route" model and may be the wrong verb for control-flow; (d) over-collapsing (dissolving a layer that does real work — e.g., the cycle→territory junction).

## Source Input

```text
i feel like these are actaully meta-loop decisions and not relevant to boundary protocol or routelister... 

maybe our assumption of these belong to routelister was wrong?  i might be wrong but lets dive deep intensively and try to understand what makes more sense and more clean
```

## Scope Check

Question covers goal: **YES** — OT1 (nature) + OT2 (owner) + OT3 (boundary-protocol fate) + OT4 (per-move) + OT0 (clean layering) cover the goal of a decision-with-reasoning + the consequent layering + the Gap-A/boundary-protocol re-test.

Specific-vs-pattern: the user names the specific loop-control moves but the load-bearing pattern is "is a control-flow action an enumerated option or a controller decision, and what does that mean for layering?" Both in scope; the general nature-of-loop-control question is the load-bearing frame.

Transcription-audit note: load-bearing clauses preserved — "these are actually meta-loop decisions" (OT1/OT2 — the hypothesis), "not relevant to boundary protocol or routelister" (OT2/OT3 — excludes both lower layers), "maybe our assumption that these belong to routelister was wrong" (the prior-assumption challenge — note: 08-14 already excluded them from routelister; the live target is the boundary-protocol/Gap-A frame), "what makes more sense and more clean" (OT0 — cleanliness is the criterion). The "and" in "boundary protocol or routelister" is a disjunction (excludes both), preserved.

## Layer Commitment

Primary layer: **MEANING** — the crux is *what a loop-control move IS*: an *enumerated option* (a perceived field-member, like a concept-route) or a *control decision* (a member of the meta-loop's fixed control vocabulary, evaluated against loop-state). Settling this nature-question determines ownership and whether the boundary-protocol layer survives. This is a meaning question about a class of moves, not a spec-shape or procedure question.

Other layers (sequential consequence, re-tested not re-opened):
- **Structural** — whether the "boundary protocol" is a distinct artifact or dissolves into the meta-loop — DOWNSTREAM of the meaning verdict (OT3); decided as a consequence, not as the primary frame.
- **Process** — the runtime steps of a boundary crossing — deferred.

The primary layer is not ambiguous (the load-bearing question is the nature of loop-control moves = meaning), so the pipeline proceeds without a user gate.

## Synthesis Trigger

This inquiry re-tests + may CORRECT/REFINE prior outputs; per CONCLUDE the finding MUST include an `## Inherited Commitments Re-test`.

Priors being synthesized / re-tested:
- `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md` — **Gap A**: "loop-control move ENUMERATION is homeless; the meta-loop composes the menu by reading its loop-state + routelister's index." **CRITICAL re-test: is "enumeration / composing a menu" the right frame, or are these the meta-loop's control DECISIONS (no menu)?** Also: the 7 loop-control types don't transfer to routelister (confirmed; the user's "belong to routelister" is already answered NO).
- `devdocs/inquiries/2026-05-30_09-07__routelister_boundary_use_protocol_vs_section/finding.md` — the three-layer model (discipline/usage/orchestration); "the boundary protocol produces the complete next-move field (incl. loop-control moves)." **CRITICAL re-test: does the boundary protocol enumerate loop-control moves, or does that responsibility belong to the meta-loop (collapsing/shrinking the boundary-protocol layer)?**
- `cognitive_harness/routeman/references/routeman.md` §2.2 — routeman enumerated ALL 16 moves (concept + loop-control) as "routes" in one taxonomy. **Re-test: is "loop-control as an enumerated route" a routeman artifact (because routeman modeled everything as routes), and is it the wrong frame for control-flow?**
- `/Users/ns/.claude/skills/meta-loop/SKILL.md` — meta-loop SELECTS + owns cross-run state; "Navigation sees; it does not choose." **Re-test: does the meta-loop's controller role naturally own terminate/widen/merge/re-run/unblock/revisit as decisions?**
