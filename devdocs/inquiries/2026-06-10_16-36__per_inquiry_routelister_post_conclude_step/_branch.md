# Branch: per_inquiry_routelister_post_conclude_step

## Source Input

```text
why not after each query we are not running routelister with respecet to that inquiry outputs? it ll generate route md file and routelister.md file 

and this way navigational session can be just about compiling  routelister.md  route md into bigger more directional map , 

i think this is one significant design improvement over what we were designing. it simplifies things a lot , nagivational session becomes something more focus on general direction since it is not running routelister for each inquiry but it is reading them and running  routelister in root mode? or in direction mode?

this might be a small size breakthrough even. bc adding one more routelisting to the end of MVLw loop is gonna produce constant route list in the projectbase.  and these routelists since they ll run jsut after critique , they will be using the fresh focus on that subject and generate more accurate downstream routes

i guess they should only generate downstream routes . this can be a good next frontier to dive deep into.  i am not so sure about thsi.
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-06-10_16-36__per_inquiry_routelister_post_conclude_step/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `item-1`
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

*(Literal statement, per MultiDepth — compressed):* "Why not run routelister after each inquiry, on that inquiry's outputs (generating its route-md + routelister.md)? Then the navigational session becomes just COMPILING per-inquiry maps into a bigger, more directional map — focused on general direction, reading them and running routelister in root mode, or direction mode? I think this is a significant design improvement — it simplifies a lot; a constant route list accumulates in the projectbase; and running just after critique uses the fresh focus to generate more accurate downstream routes. I guess they should only generate downstream routes — good next frontier; I am not so sure about this."

**Identified ambiguities — what kind of ask (MQ1, preserved open):**
- **proposal-evaluation:** is the per-inquiry post-loop routelister the improvement claimed, vs the navigational-session-runs-routelister design?
- **step-specification:** WHERE in the runner (post-critique vs post-CONCLUDE), territory, goal, files — incl. the index mechanics (per-inquiry `_route.md` vs the ONE cumulative master index the spec's LOAD-INTEGRATE-PERSIST assumes).
- **nav-role-redefinition + the mode question (user-asked, open):** the compiler role — root/breadth (index-extending over the corpus) or concept-target/depth ("direction mode")?
- **downstream-adjudication (user-flagged open):** only downstream routes? "i am not so sure about this."
- **consistency-check:** vs the fresh-eyes dial; routelister's self-containment; field-before-choice; the Expedition spine.

**Identified ambiguities — what end-state (MQ3, preserved open):**
- **endpoint-verdict** (adopt/refine/reject + reasons) · **endpoint-step-spec** · **endpoint-nav-design** (with the mode answer) · **endpoint-downstream-answer** (or honest split) · **endpoint-consequences** (Expedition spine; field-before-choice; what stays open — the supplement gap).

*(MQA: evaluation folds with consistency-check; SURFACED open: the mode question + the downstream question.)*

## Goal

**Deliverable shape (Deconstruct):** the design adjudication — verdict with reasons + the runner-step spec (placement/territory/goal/files/index mechanics) + the navigational compiler design with the mode answer + the downstream adjudication + the consequence trace. Kinds: design evaluation + composition spec + tension reconciliation + consequence tracing. **Bounds: caller/runner-level composition — routelister's own spec untouched (self-containment preserved); process layer primarily.**

**Motivations a good answer might serve (WHY-axis, preserved open):**
- **simplification** — the navigational session sheds per-inquiry enumeration and focuses on general direction.
- **constant-field-production** — the projectbase always carries a current route list.
- **freshness-accuracy bet** — post-critique context produces sharper routes than a later cold read.
- **expedition-feasibility** — the spine's see-phase gets pre-listed routes; Mode B intake shrinks; see becomes read+compile.
- **cost-amortization** — field-production distributes into worker loops.

**Context the work needs (MQ2, preserved open):**
- **Routelister's spec (read in full today):** §1.4 self-containment + the Process-coupling LAYER 2 mode → the DISCIPLINE cannot reference loop positions, but "how a caller uses its output is the caller's concern" — this proposal is a RUNNER-composition change, legal by construction; §3.5/5.3 the cumulative index (LOAD scoped → INTEGRATE → PERSIST); two run modes; goal-relative individuation (the goal parameter is how "downstream" would be implemented).
- **The routelister-gap finding (minutes old):** the composite field — this proposal improves the ENUMERATED share's production timing/placement/cost; it does NOT close the supplement gap (collision/generation/rebinding stay organ-less). Honesty required.
- **The Turn Architecture:** field-before-choice (per-inquiry maps pre-write the field at source); the fresh-seat dial (fresh EYES objectivity) vs the user's fresh FOCUS accuracy claim — the post-critique session is maximally warm AND maximally invested; enumerate-not-select may make investment-bias tolerable where selection-bias would not be.
- **The Expedition finding:** Mode B spine intake ≈ finding + map delta per turn; per-inquiry route-maps would shift the spine's see-phase from generate to read+compile.
- Stance: design-EVALUATOR + SPECIFIER (the user proposes and invites the dive).

**What would fail (negative spec):** modifying routelister's own spec to reference the loop (process-coupling — the exact LAYER 2 failure its identity guards); treating this as a fix for the supplement gap; collapsing the user's two open questions (mode; downstream-only) instead of adjudicating them with reasons; ignoring the freshness-vs-investment tension.

## Considered Articulations

**Item item-1 — the per-inquiry routelister step:**
1. *(adopt-evaluate)* "Evaluate: post-loop per-inquiry routelister vs the navigational-session-runs-routelister design — which produces the better field at lower cost, and is the claimed simplification real?"
2. *(step-spec)* "Specify the step: where in the runner (post-critique vs post-CONCLUDE), what territory (which outputs), what goal (and who supplies it), which files written where — and how per-inquiry `_route.md` outputs relate to the ONE cumulative master index the spec's cross-run model assumes."
3. *(nav-compile)* "Redefine the navigational session's job as compilation: reading per-inquiry route-maps and running routelister in WHICH mode — root/breadth over the corpus (index-extending) or concept-target depth — to produce the bigger directional map?"
4. *(downstream-question)* "Adjudicate the user's uncertain guess: only downstream routes (next-work directions), or also reflexive routes over the finding itself (TEST/REFINE-the-verdict slots) — and what does 'downstream' precisely mean in route terms?"
5. *(freshness-vs-bias)* "Reconcile fresh-FOCUS accuracy with the fresh-EYES dial and investment bias: is post-critique enumeration sharper, biased, or both — and does enumerate-not-select make the bias tolerable where selection would not be?"
6. *(system-effects)* "Trace consequences: the spine's see-phase becomes read+compile (Mode B intake shrinks); field-before-choice gets fields pre-written at source; the supplement gap explicitly STAYS OPEN."

## Scope Check

**IN scope:** the adjudication, the runner-step spec, the nav-compile design (mode), the downstream question, the tension reconciliation, the consequence trace.

**OUT of scope:** changes to routelister's OWN spec (self-containment preserved — the change lives in callers); the supplement-gap fix (its own gated inquiry); building/executing the runner edits (proposals; the user approves); the Expedition's other mechanics.

Question covers goal — the six considered articulations jointly span all five endpoints and every WHY motivation.

**Specific-vs-pattern check:** the user proposes a specific composition (post-MVLw-loop routelister). The general pattern behind it (where field-production lives in the loop-of-loops) is addressed through the specific proposal — specific-first, with the general stated where it falls out.

## Layer Commitment

**Primary layer: PROCESS** — where the routelister step sits in the runner's procedure, what the navigational session's run does, how the files/index flow. The proposal is a CALLER-composition change.

Out of scope for THIS run, with reasons:
- **Meaning** — routelister's identity is untouched by construction (its self-containment makes caller composition explicitly not-its-concern; changing its meaning would trip the Process-coupling failure mode and break the discipline the gap finding just certified as innocent).
- **Structural** — file shapes mostly exist (routelister.md / _route.md per spec); the one structural question (per-inquiry index vs master index) is settled as part of the process spec, not as a schema redesign.

Sequential plan: this inquiry settles the process composition; if adopted, the runner docs (MVLw/aMVLw SKILL.md) get the step as a proposal-edit (user's seat); the supplement-gap fix inquiry remains separate and gated.

## Synthesis Trigger

**Fired** — the inquiry consumes prior outputs whose commitments it inherits:

- `cognitive_harness/routelister/SKILL.md` + `references/routelister.md` — commits: self-containment (§1.4) + Process-coupling guard (the discipline never references loop positions; callers compose freely); the cumulative index with LOAD-INTEGRATE-PERSIST + scoped loading + idempotency-at-fixpoint (§3.5/5.3); two run modes; goal-relative individuation; enumerate-not-select. Re-test relevance: does the proposal keep the discipline clean while changing only callers? How do per-inquiry `_route.md` files square with the one-index cross-run model?
- `devdocs/inquiries/2026-06-10_16-09__routelister_capability_gap_route_kinds_missed/finding.md` — commits: the composite field; the four hard-miss kinds; the usage-gaps (tension-flags and depth-dives exist but go unrun — THIS proposal may operationalize exactly those unrun modes!); the supplement gap stays open. Re-test relevance: does per-inquiry routelisting change any gap conclusion? (It should close usage-gaps, not the hard kinds.)
- `devdocs/inquiries/2026-06-10_14-00__metaloop_orchestrator_role_architecture_from_scratch/finding.md` — commits: field-before-choice; the see-phase as discipline-with-dial; the fresh-seat dial's trade. Re-test relevance: the fresh-FOCUS claim vs the dial; does pre-writing fields at source change the turn's validity mechanics?
- `devdocs/inquiries/2026-06-10_14-41__lone_traversal_loop_operational_breakthrough/finding.md` — commits: Mode B spine intake (finding + map delta); the see-phase; the build-list. Re-test relevance: the spine's see-phase becomes read+compile; does the Expedition's build-list change?

CONCLUDE will require the `## Inherited Commitments Re-test` section. Plan Sensemaking and Critique to re-test: (a) self-containment preserved under the new composition; (b) the index mechanics (per-inquiry vs master) against idempotency and scoped loading; (c) the freshness/bias reconciliation against the dial; (d) the gap finding's usage-gap rows (does this proposal operationalize them?); (e) the Expedition's intake arithmetic under pre-listed routes.
