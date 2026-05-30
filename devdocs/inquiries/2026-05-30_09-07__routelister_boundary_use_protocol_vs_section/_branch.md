# Branch: Routelister + Boundary-Use — Composition Model, Routeman's Failure, and Protocol-vs-Section

## Question

Clarify how routelister (the intrinsic concept-listing discipline) becomes a **boundary discipline** in use, and decide where the loop-boundary machinery lives:

- **Subject** — the composition of routelister (perception) with the loop-boundary role; the diagnosis of routeman's failure at this exact composition; and the artifact-shape decision for the loop-boundary things.
- **Action** — **confirm/correct** the composition intent (Q1), **diagnose** what went wrong in routeman's attempt at the same combination (Q2), and **decide** the artifact shape (Q3: protocol vs section) — the whole in service of **clarifying** the user's understanding.
- **Level** — discipline + composition/protocol layer (how a discipline is *used* as a boundary; where orchestration lives) — cross-cutting.
- **Observation targets** (preserved separately — the input is explicitly multi-part):
  - **(OT1)** Is the plan "have routelister as a standalone discipline, then *utilize it later* as a boundary discipline" correct? Reframe precisely: is the boundary-role a *usage/composition* of routelister, or a second identity?
  - **(OT2)** "We already kind of tried that in routeman — what went wrong?" Why did routeman's concept-lister + boundary-discipline combination fail, and how is the new plan (routelister + boundary-use) *different* from what routeman did, such that it won't repeat the failure?
  - **(OT3)** Should the loop-boundary-relevant things for routelister be a **protocol** (a separate orchestration artifact that uses routelister) or a **section** (inside routelister's spec)? Or split?
  - **(OT0)** Clarity deliverable — resolve the user's stated confusion: a clean mental model tying OT1+OT2+OT3 together (discipline vs usage vs orchestration).
- **Deliverable shape** — a decision (protocol vs section vs split) with reasoning, grounded in (a) the composition model, (b) the routeman-failure diagnosis, and (c) the project's "disciplines are individuals / self-contained" principle + canonical protocol location; plus a clear mental model that resolves the confusion.

## Goal

- **Criterion** — clarity-producing and decisive: it must (a) confirm-or-correct the composition intent in plain terms, (b) explain precisely why routeman failed at the *same* combination and how the new plan differs (so the user sees they're not repeating the mistake), and (c) decide protocol-vs-section with a principled reason.
- **Use case** — settles how routelister's boundary-use is *architected* before the routelister spec + the boundary orchestration are authored; resolves the confusion blocking that authoring.
- **Desired outcome** — the user holds a clean three-layer mental model: routelister = the discipline (perception, intrinsic); the boundary-role = a usage (composition); the loop-control machinery = orchestration (protocol/meta-loop). And knows where each artifact lives.
- **What would fail** — (a) confirming "yes, use it as a boundary" without distinguishing *usage* from *identity* (the exact thing routeman got wrong); (b) diagnosing routeman shallowly ("it was loop-bound") without showing the *fusion-vs-composition* difference that makes the new plan safe; (c) deciding protocol-vs-section without re-testing the prior finding's "loop-role section in routelister" (08-14 Gap C) against the "disciplines are self-contained individuals" principle (these may conflict); (d) leaving the user more confused by over-formalizing.

## Source Input

```text
routelister is just  a concept listing direction.  routeman (which tried to be both concept lister + boundary discipline) is more.

what we want to do is , have routelister discipline and then utilize it later on as boundary discipline ... correct?

but we already kind of tried to do that in routeman, what went wrong?  

should loop boundary relevant things for routelister a protocol? or it should be a section ?

i have a better understanding but at the same time a bit confused. Help me make things more clear.
```

## Scope Check

Question covers goal: **YES** — OT1 (composition intent) + OT2 (routeman-failure diagnosis + the difference) + OT3 (protocol vs section) + OT0 (clarity) cover the goal of a decisive, clarity-producing answer.

Specific-vs-pattern: the user asks specifically about routelister/routeman, but the load-bearing pattern is "how does a pure discipline get *used* as a boundary, and where does the orchestration live (discipline spec vs protocol)?" Both in scope; the general pattern (discipline vs usage vs orchestration; self-contained disciplines) is the load-bearing frame for the protocol-vs-section decision.

Transcription-audit note: the input has four distinct clauses, each a separate OT — "utilize it later as a boundary discipline … correct?" (OT1), "we already tried that in routeman, what went wrong?" (OT2), "should loop boundary relevant things be a protocol or a section?" (OT3), "help me make things more clear" (OT0). All preserved separately. The clause-joiner "but we already kind of tried to do that" links OT1→OT2 (the new plan vs the prior attempt) — preserved as the fusion-vs-composition axis.

## Layer Commitment

Primary layer: **STRUCTURAL** — the load-bearing decision (OT3) is an *artifact-shape* question: should the loop-boundary things be a **protocol** (a separate orchestration file) or a **section** (inside routelister's spec)? Protocol-vs-section is organization/artifact-shape = structural.

Other layers, considered and treated as SETTLED-GROUNDING (re-tested, not re-opened):
- **Meaning** — routelister's intrinsic identity (concept-listing, not loop-bound) is SETTLED (`12-44`/`01-11`); the boundary-role-is-a-usage-not-an-identity is the load-bearing meaning anchor (re-tested in OT1/OT2, not re-opened). This run does NOT re-open routelister's identity.
- **Process** — the runtime steps of a boundary run (how the protocol calls routelister) — deferred; this run decides *where the things live*, not the full procedure.

Sequential note: the structural decision (protocol vs section) rests on the settled meaning (boundary = usage, not identity) + the routeman-failure diagnosis (fusion was the defect). The diagnosis (OT2) is meaning/process grounding that this run re-tests to justify the structural verdict. The primary layer is not ambiguous (the deliverable the user wants is the protocol-vs-section decision = structural), so the pipeline proceeds without a user gate.

## Synthesis Trigger

This inquiry rolls up + re-tests prior outputs; per CONCLUDE the finding MUST include an `## Inherited Commitments Re-test`.

Priors being synthesized / re-tested:
- `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md` — the perception/selection split ("Navigation sees, it does not choose"); Gap C ("a loop-role **section** in routelister's spec"); Gap A/B (meta-loop spec additions). **CRITICAL re-test: does Gap C's "loop-role section in routelister" survive the "disciplines are self-contained individuals" principle, or should the loop-role live in a protocol instead?**
- `devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/finding.md` — routeman's defect = loop-RELATIVE identity. **Re-test: was the defect *fusion of two roles into one identity*, and does composition (routelister + caller) avoid it?**
- `docs/walkthrough.md` §9 + Scenario 3 — "routelister fills the forward-Boundary slot **by role** … not part of routelister's identity"; "the loop *answers a question*; routelister *says what to do next* … by composition role." **Re-test: confirm boundary = composition role, not identity.**
- `cognitive_harness/routeman/references/routeman.md` §1.2/§1.5 — routeman *defined as* the boundary discipline (loop-position in identity); the loop-boundary machinery (cross-cycle revisitation, autonomy classification, `_route.md`, selection-feeding) *inside the discipline*. **Re-test: routeman put orchestration INSIDE the discipline + into its identity = the fusion error.**
- Project principle (auto-memory): **disciplines are self-contained individuals** (discipline runtime spec files must not contain outbound pointers to other folders); **protocols live at `cognitive_harness/protocols/`**. **CRITICAL re-test: this principle is the structural adjudicator for protocol-vs-section.**
