---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Meta-Question Taxonomy / Categories

## Question

From `_branch.md`:

**Question:** Develop a typed taxonomy of meta-question categories grounded in their structural nature, with MQ1/MQ2/MQ3 mapped into the taxonomy, per-category bounded-extensibility status noted, and named categories that distinguish pre-context-answerable meta-questions from post-context-required ones — such that the taxonomy makes the meta-question category non-fuzzy AND enables principled decisions about MQ extension authoring AND about future pass-1 / pass-2 meta-question placement.

The user's stated background motivation is the pass-1/pass-2 split decision (for task-define2's two-pass design from `devdocs/inquiries/2026-06-05_00-11__task_define_two_pass_with_surfacing_between/finding.md`), but the inquiry's PRIMARY scope is the taxonomy itself — the split decision is downstream of having the taxonomy.

**Goal:** a typed taxonomy with (a) structural distinctness across types, (b) cognitive grounding (each type names a specific cognitive operation), (c) clean mapping of existing MQ1/MQ2/MQ3, (d) downstream applicability (enables future per-pass placement + per-category rule refinement + extension authoring).

**Layer Commitment:** meaning-layer only. Structural amendments to spec sections + per-pass placement decisions are downstream of settling the taxonomy and are explicitly out of scope.

---

## Finding Summary

- **The meta-question taxonomy has 2 load-bearing axes:** **target-of-perception** (what the meta-question perceives about the task) and **substrate-mode** (what evidence the meta-question requires to be answered).

- **3 primary types on the target-of-perception axis:**
  - **Structural** — perceives intrinsic properties of the task (scope, complexity-class, time-horizon)
  - **Relational** — perceives task-to-project relations (context-need, kinds of info needed, relational stance, preparation substrate)
  - **Interpretive** — perceives task-to-user-intent (hidden meaning behind the surface ask)

- **2 substrate modes:** **pre-context** (answerable from task statement + LLM general knowledge alone) and **post-context** (requires surfaced material to answer well).

- **The 2 axes cross into a 6-cell grid.** Each cell has a specific cognitive operation. The 3 base MQs populate 3 pre-context cells: **MQ1 → Structural/pre-context** (classify scope-axis); **MQ2 → Relational/pre-context** (perceive context-need + produce preparation substrate); **MQ3 → Interpretive/pre-context** (infer intent). The 3 post-context cells are currently empty under task-define2's variant (a) commitment.

- **2 post-context cognitive operations name what happens in post-context cells:** **Validate** (check whether the pre-context perception still holds given surfaced material; output a verdict) and **Refine** (produce a sharpened version of the pre-context perception using surfaced material; output positive content).

- **Bounded-extensibility rule (b) refinement.** The current §2.3 rule "must constrain Rephrase" is **generalized** to "must constrain some downstream operation": Structural extensions → MultiScope (primary); Relational extensions → runner → /surfacing (primary); Interpretive extensions → Rephrase (primary, direct); post-context extensions → pass-2 operations. Rules (a) "about task structure/framing" and (c) "one-sentence" are preserved unchanged.

- **The taxonomy resolves meta-question fuzziness at 3 dimensions:** category coverage (taxonomy IS the meaning), MQ heterogeneity (the 3 base MQs are heterogeneous because they instantiate 3 different primary types — feature, not defect), extension authoring (per-type bounded-extensibility refinement provides guidance for classifying and authoring extensions).

- **Variant-(a) tension surfaced for user choice.** Task-define2 variant (a) commits "only Rephrase re-runs in pass-2." If the user wants post-context MQs (Validate/Refine operations on cells 4-6) to fire, variant (a) needs revisiting. Two resolutions named: **(a) extend variant-(a)** to include post-context MQs in pass-2, or **(b) keep variant-(a) as-is** and treat post-context types as research frontier for a future task-define3. This inquiry does NOT decide; surfaces the tension for user choice.

- **All 5 inherited commitments status:** 14-14 (MQ2 verdict + kind) PRESERVED via Relational type; 21-12 (MQ2 three-element substance) PRESERVED via Relational type; 21-58 (preparation substrate + always-invoke + function-name-independence) PRESERVED via Relational type; 2026-06-05_00-11 (variant a Rephrase-only-in-pass-2) TENSION SURFACED; §2.3 bounded-extensibility rules (a)+(c) PRESERVED, (b) REFINED per-category.

- **Structural-followup work** (out of scope per Layer Commitment but enumerated for user scheduling): 5 items including spec amendments to §2.3 (typed taxonomy section + per-category rule (b) refinement + per-type worked examples) + per-pass placement decision (depends on variant-(a) resolution) + future variant-(a) revision inquiry + task-define3 future-architecture exploration. F1 (§2.3 amendments) flagged as effectively soft-MUST — without amendments, finding-vs-spec drift means future authoring uses outdated spec rather than the typed taxonomy.

---

## Finding

### Small surrounding context

This inquiry continues the task-define / task-define2 development arc. Task-define is a cognitive discipline (`cognitive_harness/task-define/references/task-define.md`) whose job is to expand a compact task statement into a defined task downstream loop disciplines can work on. The Meta-question operation, one of 5 in task-define, applies "questions about the task's structure or framing" per item — currently 3 base meta-questions canonically defined at §2.3: MQ1 (scope), MQ2 (context-need), MQ3 (intent), plus a bounded-extensibility rule for adding more.

When the user wrote `devdocs/what_is_task_define2.md`'s "What it does" section explaining task-define2's two-pass design, a doubt surfaced: should pass-1 really run all 5 operations? Maybe Itemize/Deconstruct/Rephrase in pass-1; MultiScope/Meta-questions/Rephrase-again in pass-2? But the user was uncertain about meta-questions because "meta-question" is itself a fuzzy term — the 3 base MQs feel different in kind, but the spec treats them as one homogeneous category. Without understanding their nature, the pass-1/pass-2 split for meta-questions can't be made principled.

So the user narrowed the inquiry's focus: **first develop a taxonomy/categorization of meta-questions**, then the split decision becomes tractable. This finding is that taxonomy.

### 1. The 2 load-bearing axes

The taxonomy has 2 axes that distinguish meta-questions from each other:

**Axis A: target-of-perception** — what kind of property the meta-question perceives about the task. This axis answers "what does this meta-question look at?"

- **Intrinsic properties** of the task — facts about the task as written, independent of the project context. Scope, complexity-class, time-horizon. The task is what it is; these perceptions classify or characterize that.
- **Relational properties** — how the task relates to existing project state. Does it need external context? What kinds of context? Is this task a continuation of prior work, or a fresh start of something? These perceptions name the task-to-project relationship.
- **Interpretive properties** — inferences about the user's hidden meaning beyond the surface ask. What does the user actually want behind what they said? What unstated criteria might shape the answer?

**Axis B: substrate-mode** — what evidence the meta-question requires to be answered. This axis answers "what does this meta-question need to produce its answer?"

- **Pre-context** — answerable from the task statement plus the LLM's general knowledge alone. No surfaced material needed. The perception can be performed before `/surfacing` runs.
- **Post-context** — requires surfaced material to answer well. The pre-context version of the same perception would be hypothetical-relational at best (per the 2026-06-04_21-12 finding's expression mode); the post-context version is concrete.

The 2 axes are orthogonal: a meta-question can be Structural and pre-context, or Structural and post-context; same for Relational and Interpretive. Both axes are load-bearing — axis A makes meta-questions structurally distinct from each other; axis B enables the future pass-1/pass-2 placement decision the user's downstream concern requires.

### 2. The 3 primary types on the target-of-perception axis

**Structural meta-questions** perceive intrinsic properties of the task. They classify or characterize what the task IS (its scope axis, its complexity class, its time horizon, etc.). The cognitive operation is **classify** — assign the task to a category along the perceived property dimension. MQ1 is the canonical instance: it perceives the task's scope along a fixed axis (time-horizon / conceptual / project / feature / cross-cutting / other).

**Relational meta-questions** perceive task-to-project relations. They name how the task relates to existing project state — what kinds of external information would be load-bearing, what relational stance the task takes, what coordination is needed with downstream disciplines. The cognitive operation is **perceive-need + produce preparation substrate** — identify what cross-discipline coordination is required and produce the substrate that informs the coordination. MQ2 is the canonical instance: it perceives context-need (verdict ∈ {yes, no, uncertain}) plus produces the preparation substrate (kinds-plural + relational stance, in hypothetical-relational mode) that the runner uses to formulate `/surfacing`'s input.

**Interpretive meta-questions** perceive task-to-user-intent relations. They infer hidden meaning behind the surface ask — what does the user actually want beyond what they literally said? What implicit acceptance criteria might shape the answer? The cognitive operation is **infer-intent** — interpret the user's hidden goal. MQ3 is the canonical instance: it perceives the underlying intent vs the surface ask.

These three types are mutually distinct on axis A: a perception is either about the task itself (Structural), about the task's relations (Relational), or about hidden meaning behind the task (Interpretive). The bounded-extensibility rule (a) "about task structure/framing" constrains extensions to perceptions about the task; the 3 primary types exhaust this constraint.

### 3. The 2 substrate modes

**Pre-context** meta-questions are answerable from the task statement plus the LLM's general knowledge alone. They don't need to know anything specific about this project's actual artifacts. The LLM can perceive scope, perceive context-need (in hypothetical-relational mode), or infer intent from the task statement + what the LLM already knows about tasks of this kind.

**Post-context** meta-questions require surfaced material to answer well. They use surfaced project material as evidence to validate or refine a pre-context perception. Without surfaced material, a post-context perception would be reduced to a pre-context perception (hypothetical at best).

The substrate-mode axis matters because it directly maps to task-define2's two-pass design: pass-1 has no surfaced material available, so it can only fire pre-context meta-questions; pass-2 has `/surfacing`-output available, so it could fire post-context meta-questions. The user's stated downstream concern (pass-1/pass-2 split decision) is reducible to the question "which type-mode combinations get which pass?"

### 4. The 6-cell grid

The 2 axes cross into a 6-cell grid:

| Cell | Type × Mode | Cognitive operation | Current MQ |
|---|---|---|---|
| 1 | Structural × pre-context | classify intrinsic property | **MQ1** (scope-axis classification) |
| 2 | Relational × pre-context | perceive-need + produce preparation substrate | **MQ2** (verdict + kinds + stance in hypothetical-relational mode) |
| 3 | Interpretive × pre-context | infer hidden meaning | **MQ3** (intent vs surface) |
| 4 | Structural × post-context | Validate or Refine intrinsic-property perception | (currently empty) |
| 5 | Relational × post-context | Validate or Refine task-project-relation perception | (currently empty — could be MQ2-validation; MQ-frontier asking "what's still missing?"; etc.) |
| 6 | Interpretive × post-context | Validate or Refine hidden-meaning perception | (currently empty — could be MQ3-refinement asking "has intent shifted given surfaced material?") |

The current spec populates 3 cells in the pre-context column. The 3 post-context cells are empty by current spec commitment (task-define2 variant (a) commits "only Rephrase re-runs in pass-2"). Whether they get populated depends on variant-(a) tension resolution (see §8 below).

The grid is structurally exhaustive on axis A under bounded-extensibility rule (a). The "currently empty" cells are conceptually-distinct positions in the taxonomy, not arbitrary placeholders.

### 5. The 2 post-context cognitive operations

When a meta-question fires in post-context mode, it performs one of 2 cognitive operations on the corresponding pre-context perception:

**Validate** — check whether the pre-context perception still holds given the surfaced material. Output: a verdict (binary or graded — held / partially-held / didn't-hold). Example: "MQ2's pre-context verdict was 'context needed (yes), kinds = [past memos, prior versions]'; did `/surfacing` actually surface materials matching those kinds, or were the kinds off-target?"

**Refine** — produce a sharpened version of the pre-context perception using surfaced material as new evidence. Output: positive content (an updated perception, not just a verdict). Example: "given that `/surfacing` returned specific items, the actual scope of this task is now visible to be narrower than the pre-context classification suggested; refine to a more specific sub-scope."

The two operations are distinct: Validate checks (verdict output); Refine sharpens (positive content output). A post-context meta-question can perform one or the other or both. The taxonomy doesn't force a single operation per post-context cell — it names the two operations as the available cognitive moves in post-context mode.

### 6. Bounded-extensibility rule (b) refinement

The current rule at §2.3 says: extensions must "(b) constrain Rephrase." This was based on the implicit assumption that all MQs feed Rephrase as constraints, which is architecturally true (all MQ answers are inputs to Rephrase via the MQ-constrains-Rephrase mechanism from 2026-06-04_07-48) but obscures the per-type primary downstream consumer.

**Refined rule (b): "must constrain some downstream operation."** Per category:

- **Structural extensions** → constrain MultiScope (primary; via the scope-axis-feeding mechanism) + Rephrase (indirect via MQ-constrains-Rephrase general mechanism)
- **Relational extensions** → constrain runner → `/surfacing` (primary; via the preparation-substrate mechanism) + Rephrase (indirect, via pass-2 context-informed-refinement)
- **Interpretive extensions** → constrain Rephrase (primary, direct; via vocabulary shaping)
- **Post-context extensions** (Validate / Refine operations) → constrain pass-2 operations (currently Rephrase under variant a; potentially others under future variants)

Rules (a) "about task structure/framing" and (c) "one-sentence" are preserved unchanged. Rule (a) covers all 3 primary types (intrinsic / relational / interpretive properties are all about task structure/framing). Rule (c) is authoring economy; applies uniformly.

The refinement preserves rule (b)'s original anti-floating intent (extensions must serve SOME downstream purpose; can't be free-floating perceptions) while accommodating the per-type primary downstream consumer that varies across the taxonomy.

### 7. Fuzziness resolution at 3 dimensions

The user's "fuzzy" critique had 3 dimensions, each addressed:

**Dimension 1: Category coverage.** What IS a meta-question? Answer: a structural perception of one of the 3 primary property types (intrinsic / relational / interpretive) about the task, in one of the 2 substrate modes (pre/post-context), with a specific cognitive operation per cell. The category is exhaustive on axis A under bounded-extensibility rule (a) constraint.

**Dimension 2: MQ heterogeneity.** Why are the 3 base MQs so different from each other? Answer: because they instantiate 3 different primary types (Structural / Relational / Interpretive). The heterogeneity is **structurally correct, not a defect** — it's how the 3 base MQs cover the 3 primary types with minimal redundancy. Each MQ has distinct cognitive operation + distinct primary downstream consumer + distinct answer-shape; all explained by its type.

**Dimension 3: Extension authoring.** How do I know if my proposed extension is a meta-question, and which type? Answer: classify the proposed extension into (a) a primary type (Structural / Relational / Interpretive), (b) a substrate mode (pre/post-context), (c) a cognitive operation per the cell. The per-type rule (b) refinement (§6 above) provides authoring guidance — knowing the type tells the author which downstream operation the extension must constrain. Extensions that don't fit any type either (i) belong to a fundamentally new primary type (requires taxonomy revision via separate inquiry) or (ii) aren't meta-questions at all (might be verification, fetching, etc. — different operations).

### 8. Variant-(a) tension (surfaced for user choice)

Task-define2 variant (a) from `devdocs/inquiries/2026-06-05_00-11__task_define_two_pass_with_surfacing_between/finding.md` commits "only Rephrase re-runs in pass-2." Under the taxonomy, this means the post-context column (cells 4-6, where Validate/Refine operations would fire) is **empty by spec commitment, not by structural impossibility**. The cells exist conceptually but no MQs occupy them.

If the user wants post-context meta-questions to fire in pass-2, variant (a) needs revisiting. Examples of post-context MQs that could exist:
- **Cell 5 candidate "MQ2-validation":** "Did MQ2's pre-context context-need verdict (yes/no/uncertain) turn out right given what `/surfacing` actually returned?"
- **Cell 5 candidate "MQ-frontier":** "Given what was surfaced, what kinds of context are STILL missing? Should `/surfacing` be invoked again with a refined purpose?" — this enables the iterative-surfacing forward-looking note from the 2026-06-05_00-11 finding.
- **Cell 6 candidate "MQ3-refinement":** "Given the surfaced material, has the perceived intent shifted? Does the surface ask now appear to mean something different than initially inferred?"

**Two resolutions** for the tension:

- **(a) Extend variant-(a)** — pass-2 expands from "Rephrase only" to "post-context MQs (Validate / Refine on cells 4-6) + Rephrase." Cost: extra cognitive cycles for post-context MQs in pass-2. Benefit: explicit Validate/Refine of pre-context perceptions; structural completion of the 6-cell grid; enables iterative-surfacing patterns.

- **(b) Keep variant-(a) as-is** — post-context types (cells 4-6) remain conceptually-real-but-spec-empty. Treat them as research frontier for a future task-define3 design.

**This inquiry does NOT decide.** The taxonomy enables both resolutions; the choice is the user's. The choice may depend on Early Operation evidence (per 2026-06-05_00-11's calibration trajectory) revealing whether pass-1 perceptions systematically need post-context Validation or Refinement in practice. Surfacing the tension explicitly so the user can decide is honest assessment; silently resolving either way would violate user-position respect.

### 9. Future MQs and boundary cases

The taxonomy is open-set-extensible at the primary-type level. If future MQ extensions surface a fundamentally new perception target that doesn't fit Structural / Relational / Interpretive, the taxonomy can be revised to add a 4th type via a separate inquiry. Within the existing 3 types, new extensions fit by sub-classification (e.g., a new Structural MQ perceiving "complexity-class" rather than "scope" would be Structural × pre-context, just a different intrinsic property).

Boundary cases — MQs that span types (e.g., something that perceives both intrinsic property AND relational property) — should be handled by **re-classification** (one type is primary; the other is secondary or derivative), not by **type proliferation** (creating a "hybrid Structural-Relational" type). Type proliferation would dilute the taxonomy's distinctness; re-classification preserves it.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger listing 5 prior outputs whose commitments touch meta-questions. The CONCLUDE protocol mandates this section.

### Commitments from `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md`

- **Commitment:** MQ2's answer must carry verdict ∈ {yes, no, uncertain} + (when verdict=yes) kind specifier.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** sensemaking Ambiguity 3 verified MQ2 → Relational/pre-context mapping. The verdict + kind specifier shape is absorbed by the Relational type's pre-context cell as MQ2's substance commitment. The mode-6 detection rule (LAYER 1 in §4.2) continues to apply unchanged under the taxonomy.

### Commitments from `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md`

- **Commitment:** MQ2's three-element substance (verdict + kinds + stance + hypothetical-relational mode) + runner-mediated alignment with `/surfacing`.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** sensemaking Ambiguity 3 + concept tests verified Relational/pre-context cell IS the type carrying these commitments. The hypothetical-relational mode is specifically a pre-context-Relational artifact (the expression mode that makes the perception substrate-compliant). Runner-mediated alignment inherits unchanged.

### Commitments from `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md`

- **Commitment:** Preparation substrate concept + always-invoke premise + function-name-independence principle.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** Relational/pre-context cell IS the preparation-substrate type. Always-invoke premise inherits (taxonomy doesn't affect /surfacing's invocation pattern). Function-name-independence principle applies — the taxonomy's type names are name-independent of the cognitive operations they perform.

### Commitments from `devdocs/inquiries/2026-06-05_00-11__task_define_two_pass_with_surfacing_between/finding.md`

- **Commitment:** Variant (a) — only Rephrase re-runs in pass-2.
  - **Re-test status:** **TENSION SURFACED** (this finding's §8)
  - **Evidence:** taxonomy's post-context column (cells 4-6) implies post-context MQs could exist; variant (a) excludes them. Two resolutions named for user choice; this inquiry does not decide. The tension is structural; surfacing it is honest assessment.

### Commitments from `cognitive_harness/task-define/references/task-define.md` §2.3

- **Commitment:** Bounded-extensibility rules (a) "about task structure/framing", (b) "constrain Rephrase", (c) "one-sentence."
  - **Re-test status:** **RULES (a) AND (c) PRESERVED; RULE (b) REFINED**
  - **Evidence:** Rule (a) covers all 3 primary types in the taxonomy. Rule (c) applies uniformly. Rule (b) is generalized per-category (§6 above): "must constrain Rephrase" → "must constrain some downstream operation" with per-type primary downstream consumer specified.

---

## Next Actions

### MUST

- **What:** Structural amendments to `cognitive_harness/task-define/references/task-define.md` §2.3 — add typed taxonomy section (2 axes, 3 primary types, 2 substrate modes, 6-cell grid, 2 post-context cognitive operations) + per-category rule (b) refinement text + per-type worked examples
  - **Who:** structural-layer follow-up inquiry author (user-scheduled)
  - **Gate:** condition-bound — apply when user is ready to commit structural amendments
  - **Why:** without the spec amendments, the typed taxonomy exists only in this finding; future MQ extension authoring would use the outdated spec rather than the typed taxonomy. **This is a soft MUST** — adopting the taxonomy at meaning-layer without amending the spec creates finding-vs-spec drift (per Critique sub-finding).

- **What:** Update `devdocs/what_is_task_define2.md` to reference the meta-question taxonomy (briefly note that "Meta-question" is now a typed category with 3 primary types + 2 substrate modes; point to §2.3 + this finding for details)
  - **Who:** explanatory-doc maintainer
  - **Gate:** condition-bound — apply alongside §2.3 spec amendments
  - **Why:** explanatory doc currently treats meta-questions as undifferentiated; should reflect the typed structure once spec amendments land

### COULD

- **What:** Schedule a separate meaning-layer inquiry on variant-(a) tension resolution — decide whether to extend variant-(a) to include post-context MQs in pass-2 (resolution (a)) or treat post-context types as research frontier for task-define3 (resolution (b))
  - **Who:** future user-scheduled meaning-layer inquiry
  - **Gate:** condition-bound — schedule when user has Early Operation evidence (per 2026-06-05_00-11 calibration) suggesting whether pass-1 perceptions need post-context Validation or Refinement
  - **Why:** the variant-(a) tension is real but not urgent at Bootstrap; deferring until evidence accumulates avoids premature commitment
  - **Depends-on:** MUST item "Structural amendments to §2.3." This COULD is GATED — variant-(a) resolution decision should be informed by the now-explicit typed taxonomy structure.

- **What:** Empirical validation of the typed taxonomy at Early Operation — observe whether the 3 primary types hold under actual MQ extension authoring (do extensions classify cleanly into Structural / Relational / Interpretive, or do boundary cases proliferate?)
  - **Who:** runner / calibration infrastructure maintainer
  - **Gate:** observable — when ~5-10 MQ extensions have been authored under the typed taxonomy
  - **Why:** the taxonomy is meaning-layer-sound at Bootstrap but empirical confirmation requires actual extension-authoring evidence

### DEFERRED

- **What:** Future task-define3 design exploring iterative-surfacing rounds responding to MQ-frontier seed questions
  - **Gate:** observable — when Early Operation evidence shows that pass-2 MQ-frontier perceptions ("what's still missing?") raise sharp follow-on questions that warrant their own surfacing pass
  - **Why (if revived):** would enable an iterative loop — `surfacing` → pass-2 → MQ-frontier → another `surfacing` → pass-3 → ... — that the 2026-06-05_00-11 finding's forward-looking note hinted at

---

## Reasoning

The taxonomy was reached by:

1. **Identifying the load-bearing axes.** Sensemaking Ambiguity 1 tested 1-axis vs 2-axis taxonomies. The 1-axis option (target-of-perception only) was rejected because it doesn't enable the pass-1/pass-2 distinction the user's downstream concern requires. 2-axis with substrate-dependence as the second axis directly maps to pass-placement.

2. **Naming the 3 primary types on axis A.** Ambiguity 2 tested type names. "Classification" / "Preparation" / "Inference" were rejected as operation-specific (too narrow). "Intrinsic" / "Coordination" / "Intent" were rejected as either too abstract or too specific. "Structural" / "Relational" / "Interpretive" balanced operation-agnosticism with cognitive grounding.

3. **Mapping the existing 3 base MQs cleanly.** Ambiguity 3 verified MQ1=Structural/pre-context (no boundary case with Relational or Interpretive); MQ2=Relational/pre-context (substance is task-to-project relation, not intent inference); MQ3=Interpretive/pre-context (intent inference, not classification).

4. **Including post-context types despite their current emptiness.** Ambiguity 4 tested whether to include cells 4-6 in the taxonomy. Including them was justified because (a) post-context cognitive operations (Validate / Refine) are structurally distinct from pre-context operations, and (b) the taxonomy's value is enabling future decisions, not just describing existing MQs. The variant-(a) tension is the consequence, surfaced honestly.

5. **Naming 2 post-context cognitive operations.** Ambiguity 5 tested whether Validate and Refine should merge into a single "Re-perceive" operation. Rejected because Validate (verdict output) and Refine (positive content output) are distinct operations. Both kept.

6. **Refining bounded-extensibility rule (b).** Ambiguity 6 tested whether the existing "constrain Rephrase" rule was sufficient via the general MQ-constrains-Rephrase mechanism. The strict reading was rejected because it could falsely reject type-appropriate Structural / Relational extensions. Generalized rule (b) preserves anti-floating intent + accommodates typed taxonomy.

7. **Surfacing variant-(a) tension for user choice.** Ambiguity 7 + Critique D12 verified that the inquiry should NOT silently resolve the tension. Two resolutions presented equally; user retains choice. Honest assessment requires surfacing internal contradictions; silently picking would violate user-position respect.

### Critique's sub-finding contributions

Critique's adversarial evaluation produced 4 sub-findings now incorporated:

- **(1)** Future boundary cases (MQs spanning types) handled by re-classification or revision, not type proliferation. Captured in §9 above.
- **(2)** Per-type rule (b) worked examples should be added to §2.3 as structural amendment. Captured in Next Actions MUST.
- **(3)** Empirical validation at Early Operation added as COULD. Captured in Next Actions COULD.
- **(4)** F1 (§2.3 amendments) flagged as soft-MUST to prevent finding-vs-spec drift. Captured in Next Actions MUST.

---

## Open Questions

### Monitoring

- After ~5-10 MQ extensions are authored under the typed taxonomy (per COULD #2), monitor whether extensions classify cleanly into the 3 primary types or whether boundary cases proliferate.
- If a boundary case emerges that genuinely doesn't fit any of the 3 primary types, trigger a taxonomy-revision inquiry to consider adding a 4th type.

### Refinement Triggers

- If Early Operation evidence (under 2026-06-05_00-11's calibration trajectory) reveals that pass-1 perceptions systematically need post-context Validation or Refinement, revisit the variant-(a) tension via COULD #1.
- If empirical authoring shows the per-type rule (b) refinement is unclear or generates ambiguous classifications, refine the per-type details further.
- If iterative-surfacing patterns become valuable enough to warrant task-define3 design, the DEFERRED item activates.

### Research Frontiers

- The taxonomy may generalize to other disciplines' meta-questions (if other disciplines have meta-questions). Whether the principle generalizes is open.
- Alternative post-context cognitive operations beyond Validate/Refine (e.g., Reframe, Re-categorize) might emerge with experience. Currently 2 are sufficient.
- Per-task-type taxonomy extensions (different task families might warrant different MQ-type emphasis) is unexplored.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said What it does
Task-define2 takes one input — the raw task statement — and runs two passes with surfacing between them.

Pass 1 runs five cognitive operations on the task statement in a fixed order:

Itemize — figures out whether the statement is one task or several.
Meta-question — for each item, asks three structural questions about the task itself (scope, context-need, intent).
Deconstruct — splits each item into its parts (subject, action, deliverable-shape).
MultiScope — renders each item at both the narrowest defensible interpretation AND the widest defensible interpretation.
Rephrase — produces alternative formulations of each item, constrained by the meta-question answers.
The runner reads pass-1's MQ2 answer — the preparation substrate carrying what kinds of external information are load-bearing and what relational stance the task takes toward existing project state — and formulates surfacing's input (purpose + territory + bias) from it.

surfacing runs (always-invoked) and returns relevance-tagged items from the project base.

Pass 2 re-invokes task-define2 under a new "context-informed-refinement" re-invocation mode. Its purpose: generate seed questions — concrete, context-grounded framings the downstream disciplines pick up and run with. Mechanically, only Rephrase re-runs this time (the other 4 operations from pass-1 carry through unchanged), with two inputs feeding it:



but if it is 2 phased maybe pass 1 shouldnt have all these 5 cognitive operations? it can itemize, deconstruct , rephrase better 

but multiscope and meta questions and again rephrase should be for second pass? 

but i am not sure meta questions should be included in first phase too or not . i think this is due to meta questions being a fuzzy term and we dont know what it should produce (it should meta questions, but maybe they can have some taxanomy so we cna understand their nature and use this taxanomy to divide pass1 meta questions and pass 2 meta questions? )


so now, your focus should be meta question taxonomies/categories regarding given task
```

</details>
