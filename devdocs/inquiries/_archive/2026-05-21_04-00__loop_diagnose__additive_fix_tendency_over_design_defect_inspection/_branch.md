# Branch: Loop Diagnose — Additive-Fix Tendency Over Design-Defect Inspection at 21-03-00

## Question

Given the 21-03-00 STRUCTURAL inquiry's proposed fix is purely additive (3 ADD-CONTENT spec edits adding NEW rules/sentences/sub-aspects to existing specs at Exploration / Critique / Sensemaking) without first inspecting whether the existing specs have design defects that caused the original gap, and the human correction "we shouldn't wildly add new rules everytime we encounter sth; we should look at the current spec of explore and try to understand why it missed that? what is wrong with the current spec... lets analyze why u did additive fix instead of properly inspecting the problematic part of the discipline as asked," what discipline/mechanism in the inquiry-process drove the additive framing, what cognitive tendency in the LLM runtime amplifies that framing, and what is the structurally-correct alternative approach?

## Goal

A good answer identifies:

- **Where the additive framing was first locked in** — at 21-00-30 (the LOOP_DIAGNOSE that produced MC1/MC2/MC3 candidates named as "add this exemplar; add this sub-aspect; add this step")? Or at 21-03-00's own Exploration (which inherited the framing without questioning it)? Or earlier (at the spec-design level, in innovate's Intervention-Shape Vocabulary which names 3 of 10 shapes as "ADD-*")?
- **What discipline part allowed the additive framing to pass uninspected** — Sensemaking's load-bearing concept test (which tests "is this concept's name right?" but not "is the framing's PRESUPPOSITION right?"); Innovation's Inversion mechanism (which tests intervention shapes but not framings); Critique's prosecution dimensions (which test wording but not whether the FIX-CATEGORY itself is the right category).
- **What LLM-cognitive-tendency amplified the additive framing** — anchoring on "missing X" language; path-of-least-disruption bias; pattern-matching to existing additive precedents in the same spec; treating "spec-evolved-additively" as evidence "spec-should-evolve-additively"; avoidance of restructural cost.
- **What the structurally-correct alternative would look like** — re-inspect §3.1's existing design for the defect that allowed comparison-axes to remain implicit; potentially REPAIR the framing (e.g., redefine "possibility mode output" to explicitly include both options AND comparison structure, with completeness applying to both); or DEEPER STRUCTURAL question of whether §3.1's two-mode framing is itself partial.
- **What should happen to 21-03-00's proposed edits** — are MC1/MC2/MC3 rolled back / superseded / kept but supplemented by a structural redesign inquiry? Sequencing matters.

The user should be able to: (a) understand why the LLM's process tends toward additive fixes; (b) understand what the correct process looks like; (c) decide whether to discard 21-03-00's proposed edits, supplement them, or commit them anyway pending the structural redesign.

## Scope Check

Question covers goal. The diagnostic question + corrective-approach question together cover the goal's 5 sub-asks.

Specific-vs-pattern check: the question references the SPECIFIC 21-03-00 inquiry's additive-fix output. But the user's broader critique ("a tendency on your core LLM logic") asks for the BROADER PATTERN — additive-fix tendency as a generic LLM cognitive bias affecting future inquiries too. Default: address the broader pattern with the 21-03-00 case as the worked example. The user explicitly framed it as a tendency-to-challenge.

## Layer Commitment

Primary cognitive layer: **MEANING.**

Justification: the question is "what is the cognitive failure mode the inquiry-process exhibits?" — what concept the inquiry-process is mis-applying when it goes additive without inspecting the existing design. This is asking about a process-level cognitive operation (the inquiry's adjudication of fix-category), not what the spec text says (STRUCTURAL) and not procedural steps (PROCESS).

Other-layer alternatives considered OUT OF SCOPE for THIS run:

- **STRUCTURAL** — what the alternative restructural spec edit would look like. Downstream of settling whether the current additive fix is the right fix at all.
- **PROCESS** — what procedural changes to inquiry-execution would prevent the additive-bias. Downstream of identifying the failure mode at MEANING.

Sequential plan: this MEANING-layer diagnostic → if a structural-redesign fix is warranted, a future STRUCTURAL inquiry designs the redesign → procedural changes to inquiry-execution (e.g., a new spec mechanism that forces design-defect-inspection before fix-design) would be a still-later PROCESS inquiry.

## Correction Chain

- **Prior path:** `devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/` (the STRUCTURAL inquiry whose deliverable is the 3 additive spec-edits).
- **Corrected path:** NONE — the correction was just received via conversation; no follow-up inquiry has run. Per LOOP_DIAGNOSE protocol's "no corrected_path" pattern (same as 21-00-30), proceed with ONE-SIDED evidence base; calibrate confidence DOWN.
- **Human correction (verbatim):**

  ```text
  use cognitive_harness/protocols/loop_diagnose.md
  in devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/finding.md
  we talked about how there was error on explore

  in devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/finding.md
  solution proposed is sth like
  adding Comparison-axis enumeration

  but i think this is wrong approach. we shouldnt wildly add new rules everytime we encounter sth,
  we should look at the current spec of explore and try to understand why it missed that?
  what is wrong with the current spec...

  and you did not do that and directly focusing on making an additive fix, which is a tendency on
  your core LLM logic. But i would like to challange that. It was wrong.

  lets analyze why u did additive fix instead of properly inspecting the problematic part of the
  discipline as asked
  ```

- **Optional context:**

  ```text
  Recent project history shows multiple inquiries producing additive spec-edits as the dominant
  fix-shape — Sub-Inquiries A/B/C; 05-00 Pair 5 Q1; 06-00 Pair 5 Q4; the 02-15 codification's
  recommendation to ADD a new doc; the 21-03-00 inquiry's 3 ADD-CONTENT edits. The pattern is
  visible across the discipline-prevents-Layer-3-advancement N=12 cumulative inquiry record.

  Within 21-03-00 itself: Innovation's Inversion mechanism (Property (v) firing at MC1/MC2/MC3)
  considered REPAIR vs REORGANIZE alternatives at each piece + REJECTED them. The override
  reasons cited "ADD-CONTENT preserves bounded trigger; REPAIR couples concerns" + similar.
  These were intervention-SHAPE alternatives — not FRAMING alternatives. The mechanism didn't
  ask "is the existing spec's framing itself wrong such that no single-shape fix suffices?"

  The innovate spec's Intervention-Shape Vocabulary at lines 332-346 names 10 shapes; 3 of
  them are ADD-* prefixed (ADD-TEST, ADD-DIMENSION, ADD-CONTENT). REPAIR + REORGANIZE-WITHOUT-ADDING
  + CONTRARIAN-RETHINK are also named but listed alongside; the vocabulary doesn't bias FOR
  additive but does treat additive as one valid category among many. The Inversion mechanism
  forces consideration of an alternative shape but doesn't force consideration of whether the
  FRAMING (what the fix is fixing) is right.
  ```

- **Diagnostic goal:** identify (i) where additive framing first locked in; (ii) which discipline mechanism allowed it through uninspected; (iii) LLM-tendency analysis; (iv) what correct approach looks like; (v) verdict on 21-03-00's proposed edits.

## Required Reads

For the prior inquiry folder `devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/`:

- `_branch.md` — the inquiry's question framing.
- `_state.md` — pipeline history.
- `finding.md` — the compiled output with the 3 additive edits.
- `docarchive/exploration.md` — first-stage framing.
- `docarchive/sensemaking.md` — load-bearing concept tests; ambiguity collapses.
- `docarchive/decomposition.md` — Q-tree structure.
- `docarchive/innovation.md` — Inversion mechanism applications + override records.
- `docarchive/critique.md` — prosecution dimensions + verdict.

Cross-references:
- `devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/finding.md` — where the MC1/MC2/MC3 framing first appeared (was it additive-framed there?).
- `cognitive_harness/explore/references/explore.md` §3.1 — the artifact being modified by the additive fix; inspect whether its existing design has a defect.
- `cognitive_harness/innovate/references/innovate.md` lines 332-346 (Intervention-Shape Vocabulary) + lines 399-410 (Intervention-Shape-Axis Inversion at Property-(v) Pieces) — the mechanism that DID surface intervention-shape alternatives but didn't surface framing alternatives.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- No corrected_path; ONE-SIDED evidence base; calibrate confidence DOWN per LOOP_DIAGNOSE protocol Step 5.
- Allow mixed or unknown attribution.
- The diagnostic should distinguish: (a) what 21-03-00 did wrong; (b) what the LLM-cognitive-tendency that drove it is; (c) what a fix would look like — three SEPARATE outputs, not collapsed into one.
- Do not propose a broad fundamentals rewrite from this one correction chain. But DO question whether the 21-00-30 LOOP_DIAGNOSE's MC1/MC2/MC3 framing itself inherited the additive presupposition.

## Synthesis Trigger

This inquiry synthesizes commitments from:

- `devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/finding.md` + its 5 docarchive outputs — the inquiry under diagnosis.
- `devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/finding.md` — the upstream LOOP_DIAGNOSE whose MC1/MC2/MC3 framing may have introduced the additive presupposition.
- `cognitive_harness/explore/references/explore.md` — the spec being modified; its existing §3.1 design is the subject of the "what's wrong with the current spec" question.
- `cognitive_harness/innovate/references/innovate.md` Intervention-Shape Vocabulary + Inversion mechanism — the project's existing mechanisms that DID + DIDN'T surface the framing question.
- User's auto-memory + the broader project history showing ADD-* fix patterns dominating.

CONCLUDE will require an `## Inherited Commitments Re-test` section. The diagnostic must actually re-examine each prior, not silently inherit its framing.

## Relationships

- **DIAGNOSES:** `devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/` (the inquiry that proposed the 3 additive edits without inspecting the existing spec's design defect)
- **NO COMPARATOR:** no corrected_path; conversational correction only
- **RELATED (upstream framing source):** `devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/` (where MC1/MC2/MC3 candidates were first named; additive presupposition may have been introduced here)
- **POTENTIAL DOWNSTREAM:** if the diagnostic concludes the 21-03-00 proposal is wrong-framed, a structural-redesign inquiry would re-design the fix at the existing-spec-defect-inspection level.
