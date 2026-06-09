# Branch: MQ-Aggregate-Resolution — Verdict-Sum Field for Cross-Type Contradictions

## Question

**Question framing (covering 5 meta-aspects):**

- **Subject** — whether a per-item MQ-aggregate-resolution operation (a "verdict-sum" / merge / reconciliation field) should exist after MQ1+MQ2+MQ3 run, and if so, what its essence is.
- **Action** — decide + design (decide IF the merge operation belongs in task-define; if YES, design its essence — what it perceives, what it produces, how it relates to the 3 MQs upstream and the downstream consumers).
- **Level** — discipline-level (task-define's per-item Meta-question block) with cross-discipline implications (Rephrase consumes MQ answers; runner reads MQ2's preparation substrate for /surfacing).
- **Observation targets:**
  1. The contradiction class — when can MQ1+MQ2+MQ3 contradict each other given the 3-type taxonomy from 2026-06-05_10-03? Is the "from scratch" scenario (MQ2 says-yes-surface-prior-X; MQ3 says-greenfield-exclude-prior-X) the only contradiction class, or are there others?
  2. The TWO mechanisms named in conversation — (a) aggregation rule where MQ3 conditions MQ2 via runner-smart-interpretation, (b) MQ2-itself-intent-aware via a 3rd "excluded-kinds" element. Are these mutually exclusive, complementary, or are both inferior to a 3rd option?
  3. The proposed merge field's essence — what cognitive operation does it perform (resolve / reconcile / merge / synthesize / arbitrate)? What does it perceive (the 3 MQ answers together)? What does it produce (a unified MQ-resolution that downstream consumers — Rephrase, runner-formulating-/surfacing — read in place of or in addition to the 3 raw MQ answers)?
  4. The taxonomy fit — under the 2026-06-05_10-03 taxonomy's 2 axes (target-of-perception × substrate-mode), where does the merge operation fit? Is it a 4th primary type (target = MQ-answer-set itself, meta-perception)? Or is it a post-MQ cognitive operation separate from Meta-question? Or is it an inherent part of the Meta-question operation that was previously implicit?
  5. The downstream consumer contract — what do Rephrase and the runner read after the merge? Do they read raw MQ1+MQ2+MQ3 (unmodified) plus a merge-resolution summary? Or does the merge REPLACE/REWRITE the 3 MQ answers? This affects how MQ2's preparation substrate flows to /surfacing.
  6. The post-context implication — under variant-(a) of task-define2, pass-2 runs Rephrase only. If the merge operation is a NEW Meta-question-category operation, does it also need to re-run in pass-2 after /surfacing returns? Or does pass-1's merge result carry through?
  7. The contradiction-detection mechanism — even before merge, HOW is contradiction detected? Is it a structural check (kinds-overlap analysis)? Is it an inferential check (does the LLM running MQ-merge perceive contradiction)? This affects whether merge runs always vs only-when-contradiction-flagged.
  8. The bounded-extensibility rule fit — under the refined per-category rule (b) from 2026-06-05_10-03, the merge operation must constrain some downstream consumer. Which? Rephrase (the unified MQ-resolution feeds Rephrase as constraint). Runner-/surfacing (the unified resolution drives /surfacing formulation). Both.
- **Deliverable shape** — a meaning-layer decision (does the merge operation belong as a cognitive operation in task-define? YES/NO with reasoning) PLUS, if YES, a design of its essence (cognitive operation name, what it perceives, what it produces, downstream contract, taxonomy fit). Structural amendments to §2.3 are downstream.

**Stated question:** Does task-define need a verdict-sum / MQ-aggregate-resolution field as a 4th element in the per-item Meta-question block — after MQ1+MQ2+MQ3 run — whose job is to resolve cross-type contradictions (specifically Interpretive→Relational conflicts like the "from scratch" scenario) and merge the 3 MQ answers into one coherent unified answer that downstream consumers (Rephrase, runner formulating /surfacing) read? If YES, what is its essence at meaning-layer (what cognitive operation, what perceives, what produces)?

## Goal

- **Criterion** — meaning-layer settledness about whether MQ-merge is a real cognitive operation in task-define. The decision must be principled (grounded in the 3-type taxonomy and the contradiction class observation), not arbitrary. The reasoning must hold under critique adversarial pressure.
- **Use case** — the user is deciding whether to amend §2.3 to add a new per-item Meta-question sub-element. The decision shapes how MQ aggregation is handled (today implicit; under merge-adoption explicit). Downstream: spec amendments + Rephrase contract update + runner-reading-MQ-output update.
- **Desired outcome** — either (a) a clean decision that MQ-merge IS a needed cognitive operation with its essence designed (cognitive operation name + what it perceives + what it produces + taxonomy fit), or (b) a clean decision that MQ-merge is NOT needed because the contradictions are handled adequately by an existing mechanism (e.g., Rephrase's MQ-constrains-Rephrase machinery already reconciles; runner's reading is smart enough; etc.), with the alternative mechanism named clearly.
- **What would fail** — a verdict that just says "yes maybe consider it" without designing the operation, OR "no don't need it" without identifying the existing mechanism that handles cross-type contradictions, OR a design that adds a merge field without showing how it interacts with the 3-type taxonomy from 2026-06-05_10-03 OR the downstream consumers OR variant-(a) two-pass design OR the bounded-extensibility rule.

## Source Input

```text
u said

MQ1 (Structural/pre-context). Doesn't catch it. Scope-axis perception sees "feature-level task" either way. From-scratch vs
  continuation isn't a scope distinction.

  MQ2 (Relational/pre-context). Partially mis-perceives by default. The relational read of "implement feature X" — if X has
  prior artifacts — naturally produces verdict: yes with kinds = [prior attempts of X, design docs for X, related modules].
  That's the OPPOSITE of what you want for from-scratch. MQ2 alone would surface the old files.

  MQ3 (Interpretive/pre-context). This is where the signal lives. "From scratch" is an inference about the user's hidden
  meaning behind the surface ask. The Interpretive type's cognitive operation (infer-intent) is precisely what perceives "user
  wants greenfield, not continuation; existing artifacts are noise, not signal."

  The interaction question (open)

  The taxonomy's 3 types perceive in parallel. The current §2.3 spec doesn't define a conflict-resolution rule for when MQ3's
  intent perception should override MQ2's default kinds-specifier. In your scenario:
  - MQ2 says: "need context, kinds = prior X attempts"
  - MQ3 says: "intent = fresh greenfield, exclude prior X"

  These contradict. Two ways the contradiction could be handled:

  1. Aggregation rule — MQ3 conditions MQ2 (intent gates the kinds-specifier). The runner reading MQ2's preparation substrate
  sees "kinds = X-prior-attempts BUT intent says exclude" and formulates /surfacing's bias to exclude them. This requires the
  runner to be smart about MQ-internal interactions.
  2. MQ2 itself becomes intent-aware — MQ2's substance gets a third element ("excluded-kinds") populated by Interpretive
  signal. This would amend §2.3.
  
  Neither is currently spec'd. The taxonomy perceives the situation but the propagation mechanism for Interpretive→Relational
  interaction is underspecified.

so maybe we need a verdict-sum like field after all three MQs  ? which resolves the contradiction and merges the answers into one coherent one?
```

## Scope Check

Question covers goal. The question asks about meaning-layer essence (does merge operation belong? if yes, what is it?) and the goal asks for meaning-layer settledness with principled decision + design (if YES) or alternative-mechanism identification (if NO).

**Specific-vs-pattern check:** The user's "from scratch" scenario from the conversation is a SPECIFIC EXAMPLE used to surface the contradiction class. The inquiry should address the BROADER PATTERN — all classes of MQ1+MQ2+MQ3 contradiction, not just Interpretive→Relational for from-scratch. The from-scratch case is illustrative; the merge operation (if adopted) should handle all contradiction classes, not just that one.

## Layer Commitment

**Primary layer: MEANING.**

The user's question is whether a NEW cognitive operation belongs in task-define and what it IS at the conceptual level. Structural amendments (where the field sits in §2.3, what the field schema is, what the spec's section structure becomes) are downstream of settling whether the operation exists and what it perceives/produces.

**Other-layer alternatives explicitly out of scope:**

- **Structural** (amendments to §2.3, addition of a sub-block for merge, schema for the merge field) — OOS. These are downstream of the meaning-layer decision. If meaning-layer says YES, a follow-up structural inquiry will define the spec amendments.
- **Process** (when the merge operation runs in the pipeline, how it's invoked, ordering relative to MQ1/MQ2/MQ3 emission, calibration trajectory at Bootstrap vs Early Operation) — OOS. Sequencing/timing decisions are downstream of essence settlement.

**Sequential plan:** If this meaning-layer inquiry settles YES with designed essence, the user can schedule a follow-up structural inquiry to amend §2.3. If it settles NO with named alternative mechanism, no structural amendment is needed.

## Synthesis Trigger

This inquiry consumes prior inquiry outputs as load-bearing inputs:

- `devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/finding.md` — the 3-type taxonomy (Structural/Relational/Interpretive × pre/post-context) + 6-cell grid + 2 post-context operations (Validate/Refine) + variant-(a) tension surface + per-type bounded-extensibility rule (b) refinement. Commits to: taxonomy IS the meaning of meta-question category; 3 base MQs are 3 different primary types; downstream consumer per type is specified.
- `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` — MQ2's three-element substance (verdict + kinds + stance + hypothetical-relational expression mode) + runner-mediated alignment with /surfacing. Commits to: MQ2 has 3 elements in this specific form; runner reads MQ2 to formulate /surfacing's input.
- `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md` — preparation substrate concept + always-invoke premise + function-name-independence principle. Commits to: MQ2 produces preparation substrate; /surfacing always fires.
- `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` — MQ2's answer carries verdict ∈ {yes, no, uncertain} + (when verdict=yes) kind specifier. Commits to: MQ2's verdict + kind specifier shape.
- `devdocs/inquiries/2026-06-05_00-11__task_define_two_pass_with_surfacing_between/finding.md` — variant (a) two-pass with Rephrase-only-re-run-in-pass-2. Commits to: pass-2 runs Rephrase only.
- `cognitive_harness/task-define/references/task-define.md` §2.3 — bounded-extensibility rule (a)(b)(c) + canonical 3 MQs + (under 2026-06-05_10-03 refinement) per-category rule (b) primary-downstream-consumer.

The inquiry's finding MUST include an `## Inherited Commitments Re-test` section per CONCLUDE's enforcement. The 6 priors carry commitments that the merge-or-not decision must be tested against. Sensemaking and Critique will plan the re-testing.
