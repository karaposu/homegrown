# Branch: Meta-Question Taxonomy / Categories

## Question

- **Subject** — the **meta-question** as a discipline concept within task-define / task-define2. Currently defined at `cognitive_harness/task-define/references/task-define.md` §2.3 as "a question about the task's structure or framing (its kind, scope, intent, granularity)" with a bounded-extensibility rule (a/b/c). The three base meta-questions (MQ1 scope, MQ2 context-need, MQ3 intent) are treated as an ad-hoc set — they're heterogeneous in nature (MQ1 perceives a task-intrinsic property; MQ2 produces preparation substrate for a cross-discipline; MQ3 infers user-intent behind surface ask) but the spec treats them as a homogeneous category. The user observes that "meta-question" is fuzzy precisely because no taxonomy exists for what KINDS of meta-questions there are, what each kind PRODUCES, and how they DIFFER from each other.
- **Action** — **categorize / taxonomize (DEVELOP)** meta-questions into typed categories grounded in their structural nature. The output is a categorization scheme (one taxonomy or multiple intersecting axes) that distinguishes meta-question types by what they perceive, what they produce, how they're consumed, and what their substrate-dependencies are.
- **Level** — **discipline-internal at the meaning-layer component**. The taxonomy is a meaning-layer object: what KINDS of cognitive operations the meta-question category subsumes. Adjacent levels potentially affected: the bounded-extensibility rule at §2.3 (might need taxonomy-aware refinement); future pipeline-placement decisions (e.g., the open question of whether ALL meta-questions belong in pass-1, or whether some kinds belong in pass-2 — the user's stated background motivation).
- **Observation targets** — list each as a separate item:
  1. **What axes meaningfully distinguish meta-questions.** Candidate axes: substrate-dependence (pre-context vs post-context — answerable from task statement alone vs requires surfaced context); downstream consumer (within-Task-Define operations like MultiScope/Rephrase vs cross-discipline like /surfacing); answer-shape (simple verdict vs structured payload vs free-form perception); task-property kind (intrinsic vs relational vs operational); cognitive operation (classify vs perceive-need vs infer-intent). Which axes are load-bearing for the taxonomy?
  2. **What types/categories emerge from the load-bearing axes.** Are there 2 types? 3? 4? More? Each type should be structurally distinct (mutually exclusive on at least one axis), name-able (has a clear cognitive operation), and load-bearing (omitting it would leave a real cognitive operation uncovered).
  3. **How the 3 existing base meta-questions (MQ1/MQ2/MQ3) map to the taxonomy.** Does each existing MQ fall cleanly into one category? Are any boundary cases? Does the taxonomy explain why these three were the original base set (vs other candidates)?
  4. **Pre-context vs post-context: which meta-questions can be answered pre-/surfacing.** The user's background motivation. The taxonomy should identify which categories are pre-context-answerable (and therefore fit in pass-1) vs which require post-context (and would fit in pass-2 if/when pass-2 expands beyond Rephrase-only).
  5. **What pass-2-specific meta-questions might look like.** If post-context meta-questions exist, what categories do they belong to? Examples: "given what /surfacing returned, did MQ2's context-need verdict turn out right?"; "has the perceived intent shifted given the surfaced material?"; "what additional kinds of context might still be needed?"
  6. **The bounded-extensibility rule's status under the taxonomy.** Current rule (§2.3): extensions must be (a) about task structure/framing, (b) constrain Rephrase, (c) one-sentence. Under the taxonomy, does the rule still apply uniformly across all categories, or do different categories warrant different bounded-extensibility conditions?
  7. **Naming.** Once types are identified, what's a clear name for each? Names should be concrete (not "type A / type B") and convey the category's character.
  8. **How the taxonomy informs MQ extension authoring.** When the LLM running task-define2 perceives a need for an MQ extension (per the bounded-extensibility rule), the taxonomy should help: identifying which category the extension belongs to + whether that category's per-pass placement fits the extension.
  9. **The downstream concern: does the taxonomy enable a principled pass-1 / pass-2 split for meta-questions.** The user's larger background concern. The deliverable is the taxonomy itself; whether/how the split happens is a follow-up, but the taxonomy should make the split decision tractable.
- **Deliverable shape** — a typed taxonomy of meta-questions with: (a) the load-bearing axes for distinguishing types; (b) a typed list of categories with names + structural definitions; (c) mapping of the 3 base MQs (MQ1/MQ2/MQ3) into the taxonomy; (d) per-category note on pre-context-answerable vs post-context-required; (e) note on whether the existing bounded-extensibility rule (a/b/c) applies uniformly across categories; (f) note on how the taxonomy could inform a future pass-1/pass-2 meta-question split (without committing the split itself — that's downstream).

**Question (single statement):** What taxonomy of meta-question categories — typed by structural nature (substrate-dependence, downstream consumer, answer-shape, task-property kind, cognitive operation, or some combination) — best captures the kinds of cognitive operations the meta-question category currently subsumes (with MQ1/MQ2/MQ3 mapped into the taxonomy + the bounded-extensibility rule's per-category status + named categories that distinguish pre-context-answerable meta-questions from post-context-required ones), such that the taxonomy makes the meta-question category non-fuzzy (each type has a clear nature) AND enables principled decisions about MQ extension authoring AND about future pass-1 / pass-2 meta-question placement?

## Goal

- **Criterion** — four qualities:
  - **Structural distinctness.** Each type in the taxonomy is structurally distinct from the others (mutually exclusive on at least one load-bearing axis); no type is just a sub-case of another.
  - **Cognitive grounding.** Each type names a specific cognitive operation the meta-question performs (perceives X / produces Y / classifies Z); not just labels.
  - **Mapping coverage for existing MQs.** Each of MQ1/MQ2/MQ3 maps cleanly to one category; the taxonomy explains why these three were the original base set and where extensions would fit.
  - **Downstream applicability.** The taxonomy enables (without committing) future per-pass placement decisions and per-category bounded-extensibility refinements.
- **Use case** — the user wants the taxonomy to (a) make the meta-question concept non-fuzzy, (b) inform future spec amendments (potentially per-category bounded-extensibility rules; per-category placement), (c) enable principled MQ extension authoring at runtime (when the LLM perceives a need for an MQ extension, which category does it belong to?).
- **Desired outcome** — a typed taxonomy that the user can either approve, refine, or use as input for a follow-up structural-layer or process-layer inquiry on pass-1/pass-2 meta-question split.
- **What would fail** — a deliverable that:
  - produces type labels without structural definitions ("type 1 / type 2 / type 3" with no cognitive grounding);
  - produces a taxonomy where MQ1/MQ2/MQ3 don't map cleanly (multiple categories fit each one; or none fit cleanly);
  - over-generalizes (one undifferentiated category) or over-fragments (every MQ is its own category);
  - commits the pass-1/pass-2 placement decision (out of scope — that's downstream of having the taxonomy);
  - violates the bounded-extensibility rule's intent (allows extensions that wouldn't constrain Rephrase or that require ecosystem knowledge);
  - drifts into structural-layer spec amendment authoring (taxonomy is meaning-layer; amendments are downstream).

## Source Input

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

## Scope Check

Question covers goal. The nine observation targets map to the four goal criteria: structural distinctness covered by targets 1+2+7; cognitive grounding covered by targets 2+5; mapping coverage covered by target 3; downstream applicability covered by targets 4+6+8+9.

Specific-vs-pattern check: the user explicitly narrows the focus from the broader "should pass-1 have all 5 ops?" question (which is the pattern) to the specific "meta-question taxonomy" inquiry (which is one part of answering the pattern). The taxonomy IS the specific deliverable; the pattern (per-operation split) is downstream. Inquiry stays focused on taxonomy; flags the pattern as research frontier for follow-up.

## Layer Commitment

**Primary layer: Meaning.** The question targets WHAT KINDS of cognitive operations the meta-question category subsumes — the meaning-layer of meta-questions as a discipline component. The taxonomy is the meaning-layer object; once settled, structural-layer (spec amendments per category) and process-layer (per-pass placement) follow.

**Other layers explicitly out of scope:**

- **Structural** — spec amendments at §2.3 (per-category bounded-extensibility refinements; new MQ types added to the canonical set; etc.) are downstream of settling the taxonomy. Out of scope for THIS inquiry.
- **Process** — per-pass placement decisions (which categories fire in pass-1 vs pass-2; whether the existing base 3 all stay in pass-1 or some move to pass-2) are downstream of the taxonomy + a separate process-layer inquiry. Out of scope for THIS inquiry.

**Layer ordering rationale:** the taxonomy (what KINDS of meta-questions exist) is the upstream concern; per-category structural amendments and per-category process placement are downstream consequences. Settling the taxonomy first unblocks both; settling structural or process first would commit on rules/placement with still-fuzzy meta-question categories underneath.

**Next-layer-inquiry preview** (transparency note, not a planned-sequential commitment): if this inquiry settles a taxonomy, the natural downstream sequence is (a) process-layer inquiry on per-category pass-1/pass-2 placement (addressing the user's larger background concern); then (b) structural-layer inquiry on per-category bounded-extensibility refinements + canonical-MQ-set expansion if warranted. User decides scheduling.

## Synthesis Trigger

This inquiry inherits commitments from multiple prior task-define / task-define2 findings whose substance touches meta-questions. The inquiry will re-test each commitment under the taxonomy — either re-justify, refine, or note the commitment's status.

Prior outputs being synthesized / re-tested:

- `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` — committed MQ2's answer-content shape (verdict + kind specifier); mode 6 detects missing required content. The taxonomy's MQ2-category mapping must respect this commitment.
- `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` — committed MQ2's three-element substance (verdict + kinds + stance + hypothetical-relational mode) + runner-mediated alignment with /surfacing. The taxonomy's MQ2-category should map this substance to its category's characteristics.
- `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md` — committed always-invoke premise + preparation substrate concept + function-name-independence. The taxonomy's pre-context-vs-post-context axis should align with the always-invoke architectural pattern.
- `devdocs/inquiries/2026-06-05_00-11__task_define_two_pass_with_surfacing_between/finding.md` — committed task-define2 variant (a) (minimal Rephrase-only re-run in pass-2). The taxonomy's pass-1/pass-2 mapping discussion should honor variant (a)'s minimality commitment.
- `cognitive_harness/task-define/references/task-define.md` §2.3 — canonical MQ set + bounded-extensibility rule. The taxonomy must respect the rule's intent (or explicitly refine it per-category).

Each of these carries commitments the taxonomy must respect, refine, or explicitly engage. CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section that names each commitment and either re-tests it with cited evidence (under the taxonomy) or explicitly flags it as inherited-without-re-test with a reason.

The inquiry's discipline work — particularly Sensemaking's ambiguity-collapse pairs + Load-bearing concept tests + Critique's adversarial evaluation — must actually do the re-testing, not just record the inheritance.
