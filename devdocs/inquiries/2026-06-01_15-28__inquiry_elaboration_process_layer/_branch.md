# Branch: Inquiry Elaboration — Process Layer (how IE wires into MVLw and any other runner that adopts it)

## Question

- **Subject** — the **process layer** of Inquiry Elaboration: the runtime wiring between IE (the discipline) and the runner that invokes it (MVLw immediately; **any other runner that adopts IE** generally).
- **Action** — DESIGN the process layer (the steps, mechanisms, gates, and pipeline-shaping decisions) that connect IE's settled meaning + structure to a working runtime.
- **Level** — runner / protocol / cross-cutting (the process design must work for MVLw specifically AND generalize to other runners that may adopt IE).
- **Observation targets** (each preserved separately — the user's input bundles multiple distinct concerns under one ask):
  1. **The call-site** — where IE runs in the MVLw pipeline (before surfacing? as a pre-pipeline stage? a Step 0 of `_branch.md` creation?), and the cross-runner generalization (the abstract call-site contract that any runner adopting IE satisfies).
  2. **The input-supply mechanism** — how IE receives its three inputs (`project_goal`, `original_query`, `recent_context`) at runtime. Each has a different supply pattern: project_goal is long-term ambient; original_query is the user's raw input; recent_context is currency-sensitive. Where does each come from and how is it passed in?
  3. **The spawn mechanics** — how the runner consumes IE's `request-structure verdict` (`single` / `parallel-set` / `sequential-chain`) and acts on it: spawning sub-inquiries, encoding the chosen framing into `_branch.md`, and (when bundled) ordering parallel vs sequential children.
  4. **The runtime gates** — what happens when IE's fidelity-verdict is `FLAG`: halt-before-loop? FLAG-and-bounce? user-confirm? The asymmetric-failure principle (a passed misframing is worse than over-careful) sets the bias.
  5. **The `_branch.md` rewrite** — the migration: as IE absorbs comprehension+fidelity work (the 5 meta-aspects, Source-Input, Scope-Check, Step 3.5 transcription-audit, Step 3.6 reference-authority audit), the runner's `_branch.md` template thins. What exactly stays runner-side vs becomes IE's output that the runner encodes?
  6. **Reference-authority's new home** — the 09-54-deferred residual: the cited-spec-currency check was dropped from IE; the process layer is the natural place to decide where it lives (runner-side pre-flight? separate discipline/protocol? absorbed elsewhere?). Resolving this is part of this run.
  7. **The cross-runner generalization** — what abstract contract does "any runner adopting IE" satisfy? Identify the call-site interface, the input-supply interface, the output-consume interface; do this without coupling IE to MVLw's specifics (no neighbor-runner-naming inside IE's spec; the contract lives runner-side).
- **Deliverable shape** — a process-layer design = the abstract call-site contract + the concrete MVLw wiring (where IE runs in MVLw's pipeline, in what order, with what gates) + the input-supply patterns per input + the spawn mechanics + the runtime gates + the `_branch.md` rewrite (concrete diff) + reference-authority's settled new home + the cross-runner generalization.

**Question (one sentence covering all five meta-aspects):** Given IE's settled meaning (it is a discipline; its operation is Comprehending-generalized; perception/action split holds) and settled structure (output-organized self-contained spec; three temporal anchors; intrinsic NOT-list; LAYER-2 failure modes; substantive + thin-verdict-header output), what is the **process-layer design** that wires IE into MVLw — specifically: the runtime call-site (where IE runs in MVLw's pipeline + the cross-runner abstract call-site contract), the input-supply mechanism for each of `project_goal` / `original_query` / `recent_context`, the spawn mechanics that consume IE's `request-structure verdict`, the runtime gates triggered by IE's `fidelity-verdict`, the exact `_branch.md` template rewrite as comprehension+fidelity work migrates into IE, the settled home for the dropped reference-authority audit, and the cross-runner generalization so any runner adopting IE follows the same abstract contract?

## Goal

- **Criterion** — precision (concrete enough to author the MVLw runner edits + the `_branch.md` rewrite from); consistency with IE's settled meaning (perception/action split; object/mode rule) and settled structure (the §5 schema; intrinsic NOT-list; the LAYER-2 failure modes); preservation of IE's self-containment (the process layer wires IE *from outside*; IE's own spec does not gain runner-knowledge); completeness across all seven observation targets; honest naming where the design has residuals or genuine alternatives.
- **Use case** — the user (or a follow-up authoring pass) will use this to (i) edit `cognitive_harness/MVLw/SKILL.md` to invoke IE at the right call-site; (ii) rewrite the `_branch.md` template thinning out the migrated work; (iii) decide where reference-authority's check now lives; (iv) check that IE's spec (to be authored per Route 1 of the IE-trajectory route-map) remains self-contained despite being wired into MVLw.
- **Desired outcome** — a process-layer design settled enough that the spec-author (and the next discipline-design inquiry that adopts IE) can act without re-opening process-layer questions.
- **What would fail** — (i) re-litigating IE's meaning (settled at 22-30 + 13-31 + 20-08) or structure (settled at 09-54 + 11-27) — out of scope; (ii) violating IE's self-containment by pulling runner-specifics into IE's spec or by naming IE's neighbors inside the process design that IE itself reads; (iii) coupling IE to MVLw specifically (so any runner adopting IE has to re-design the wiring); (iv) leaving reference-authority's new home open without naming a candidate; (v) producing a runtime gate-design that bypasses the asymmetric-failure stance (a passed misframing is the costly failure); (vi) over-fitting the design to today's MVLw without naming the cross-runner abstraction.

## Source Input

```text
Layer Commitment = PROCESS, targeting how IE wires into MVLw (and any other runner that adopts it) 

do this
```

## Scope Check

Question covers goal: **YES** — the seven observation targets together cover the call-site (T1), the input-supply (T2), the spawn mechanics (T3), the runtime gates (T4), the `_branch.md` rewrite (T5), the reference-authority re-home (T6), and the cross-runner generalization (T7). The Goal's "what would fail" fences off (a) re-litigation of meaning/structure, (b) self-containment violations, (c) MVLw-only over-fitting, (d) dropping reference-authority into the void.

Specific-vs-pattern check: the user named MVLw specifically AND "any other runner that adopts it" — both clauses preserved as distinct observation-targets (T1 + T7). Default-pattern + specific-MVLw-grounding; both required.

## Layer Commitment

**Primary layer: PROCESS** (declared by the user verbatim: "Layer Commitment = PROCESS"). This is the third layer of IE's design after meaning (settled) and structural (settled); the user's choice respects the project's meaning-before-structure-before-process layering.

Out of scope for this run:
- **Meaning** — settled at `2026-05-31_22-30__inquiry_elaboration_discipline_or_not` (IE is a discipline) + `2026-05-31_13-31__understanding_vs_sensemaking_reexamine` (its operation is sensemaking's Comprehending, generalized) + `2026-05-31_20-08__understanding_stage_identity` (perception/action split, with the surviving piece that the spawn is the runner's action). Re-opening any of these would unwind the trajectory.
- **Structural** — settled at `2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare` (output-organized self-contained design; intrinsic NOT-list; LAYER-2 failure modes) and refined at `2026-06-01_11-27__inquiry_elaboration_structure_with_recent_context` (three temporal anchors; rename `why_makes_sense` → `rephrase_in_project_goal`; anchor-detachment + anchor-imbalance failure modes). The structural design is the input to this run, not its target.

Multi-layer sequential plan: this run is the third of three. Meaning → Structural → Process is the established sequence; this run completes the trio. After this run, the immediate-next-action shifts from "design IE" to "author IE's spec from the settled design" (Route 1 of the IE-trajectory route-map) + "apply the process-layer wiring to MVLw" (which this run produces the design for).

## Synthesis Trigger

This inquiry consolidates commitments from FIVE prior inquiries; each commitment must be re-tested (not absorbed) at CONCLUDE-time via an `## Inherited Commitments Re-test` section. Plan the discipline work (especially sensemaking + critique) to actually do the re-testing.

- `devdocs/inquiries/2026-06-01_11-27__inquiry_elaboration_structure_with_recent_context/finding.md` — **controlling structural prior**. Commits: the three inputs (`project_goal`, `original_query`, `recent_context`); the substantive output schema with anchor-grounded family + emphasis variants + scope versions + multi-request `requests:[]` with `how_connected_with_other_part`; the temporal-layering frame (long-term / short-term / inquiry-itself); the §4 failure modes (drift / flattening / anchor-detachment / anchor-imbalance / missed-split / over-reach); the editor-brief image extended to three sources. The process layer reads from these as the runtime artifact-shapes IE produces.
- `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/finding.md` — Commits: self-containment (zero neighbor-naming anywhere in IE's spec); output-organized §2 Components; intrinsic NOT-list grounded in IE's own character; reference-authority **dropped from IE and re-homed** (re-home unresolved — the process layer is the natural place to close it); the surrounding orchestration layer supplies inputs (per R-x); over-reach is the upper-bound failure mode.
- `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/finding.md` — Commits: the object/mode decision rule (operates on the request, perceives not acts); the 7-border NOT-list including spawn = runner; the migration principle (comprehension + fidelity migrate INTO IE; orchestration STAYS runner-side); the upper bound (tailored phases, not wrapper-fusion).
- `devdocs/inquiries/2026-05-31_22-30__inquiry_elaboration_discipline_or_not/finding.md` — Commits: IE is a discipline (verdict) AND the surviving piece from 20-08 — the spawn = runner's action (the perception/action split). This is the load-bearing process-layer commitment that distinguishes IE-emits-the-verdict from runner-acts-on-the-verdict.
- `devdocs/inquiries/2026-06-01_11-46__loop_diagnose__inquiry_elaboration_self_containment_failure_chain/finding.md` — Commits: the LOOP_DIAGNOSE MCs (especially MC-A — when an inquiry's target is discipline-design, surfacing's territory must include adjudicating memories + self-contained exemplars at core priority with the load-bearing property in the gloss; and MC-D — CONCLUDE's Inherited-Commitments-Re-test must include the broader-reading test). The process layer must NOT silently violate these MCs in its own design — particularly: when the process layer wires IE into the runner, the wiring should be expressed without neighbor-runner-naming inside IE's spec (so the IE-spec → next-discipline-design-surfacing chain doesn't reproduce the failure pattern).

The Re-test obligation: at CONCLUDE-time, each of the five priors' commitments must be either (a) re-tested with cited evidence that this process design honors them, or (b) explicitly flagged as INHERITED-WITHOUT-RE-TEST with a reason. Plan: sensemaking + critique should both perform the re-test, not just record the inheritance.
