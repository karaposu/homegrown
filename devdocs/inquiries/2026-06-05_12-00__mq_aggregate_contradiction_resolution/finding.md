---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: MQ-Aggregate-Resolution — Verdict-Sum Field for Cross-Type Contradictions

## Question

From `_branch.md`:

**Question:** Does task-define need a verdict-sum / MQ-aggregate-resolution field as a 4th element in the per-item Meta-question block — after MQ1+MQ2+MQ3 run — whose job is to resolve cross-type contradictions (specifically Interpretive→Relational conflicts like the "from scratch" scenario) and merge the 3 MQ answers into one coherent unified answer that downstream consumers (Rephrase, runner formulating /surfacing) read? If YES, what is its essence at meaning-layer (what cognitive operation, what perceives, what produces)?

The "from scratch" scenario referenced above came from the prior conversation. It is a use case where a user asks for a feature to be implemented again "from scratch" even though the codebase contains prior implementations of that feature. MQ2 (which perceives "what kinds of project context are load-bearing") would naively say "yes, surface the prior implementations." MQ3 (which perceives "what is the user's hidden intent behind the surface ask") would say "the intent is greenfield; exclude prior implementations." These two MQ perceptions contradict — the question is whether task-define needs a defined operation that resolves contradictions like this.

**Goal:** A principled YES (with designed essence) OR a principled NO (with named alternative mechanism that handles the contradictions). The decision must hold under critique adversarial pressure. The reasoning must be structurally grounded, not merely empirical-deferral. Layer Commitment = meaning-layer only; structural amendments to spec sections + process-layer firing decisions are downstream.

---

## Finding Summary

- **MQ-aggregate-resolution IS a defined cognitive operation in task-define.** The decision is structurally grounded: Rephrase (the operation that would otherwise carry the aggregation burden) composes constraints but does not resolve contradictions; without an explicit aggregator, MQ contradictions corrupt downstream output silently.

- **Cognitive operation type = meta-cognitive perception.** The operation perceives the MQ-answer-set itself (the 3 raw MQ outputs as the meta-object), not the task directly. The 3 base MQs perceive properties of the task; MQ-aggregate-resolution perceives properties of the MQ outputs about the task. This distinction preserves the 3-type taxonomy from the prior meta-question taxonomy finding without revision.

- **Essence = hybrid reconcile-OR-surface.** When the MQ-set's contradictions are resolvable at adequate confidence, the operation reconciles (produces a unified MQ-output). When confidence is insufficient or the contradiction is structural, the operation surfaces the tension (emits the contradiction itself as content for downstream consumers to handle). The same operation runs both modes; runtime confidence determines which mode fires.

- **Output is hybrid (coherence-verdict + reconciliation-content).** A pure verdict-only output would lose the reconciled content downstream consumers need; a pure content-only output would lose the meta-information about whether reconciliation happened. Both are needed.

- **Domain = cross-MQ-coherence-violations (broader than contradictions alone).** The operation handles contradictions, asymmetric-confidence cases, latent-conflicts, and three-way disagreements as one class. The approach is principle-based (single meta-cognitive operation handling all coherence-violations via LLM judgment), not class-specific (no rule enumeration).

- **Taxonomy fit = internal to Meta-question (4th internal step).** Meta-question expands from emitting 3 MQs to emitting 3 MQs + an aggregate-resolution. This preserves the 3-type taxonomy from `2026-06-05_10-03` (the meta-question taxonomy categories finding) for the 3 MQ types themselves; the new operation lives inside Meta-question, not as a 4th primary type on the taxonomy's axis A.

- **Downstream consumers = BOTH Rephrase AND runner→/surfacing.** The aggregate-resolution constrains both downstream operations: Rephrase reads it as a unified constraint set; runner reads it when formulating `/surfacing`'s input. This satisfies the refined bounded-extensibility rule from the meta-question taxonomy finding (per-category primary downstream consumer, with the new operation cross-cutting both).

- **Pre-context firing committed at meaning-layer (pass-1).** The operation fires during pass-1 of task-define2 (the two-pass design from `2026-06-05_00-11`). Whether it ALSO re-runs during pass-2 (post-context) is a process-layer question deliberately deferred to a follow-up inquiry.

- **Variant-(a) tension surfaced (not resolved).** The pass-2 placement question creates structural tension with the variant-(a) commitment in `2026-06-05_00-11` (which says "only Rephrase re-runs in pass-2"). If MQ-aggregate-resolution should also re-run in pass-2, variant (a) needs revision. Two resolutions named for user choice; this finding surfaces the choice without picking.

- **Per-item scope; principle-based approach.** Each task item has its own MQ-aggregate-resolution (matching the per-item MQ structure). The operation handles contradictions via principle (LLM meta-cognitive judgment), not rule enumeration — this generalizes to any future MQ extensions.

- **Operation name (meaning-layer) = MQ-aggregate-resolution.** This is the cognitive-operation name committed by the finding. The user's proposed term "verdict-sum" is preserved as the user-proposed structural-shape-term — it may inform the field naming when the §2.3 amendment is authored at structural-layer.

- **6 inherited commitments compatibility:** 5 PRESERVED (the prior commitments are all respected); 1 TENSION SURFACED (the variant-(a) commitment from `2026-06-05_00-11` is in tension with the pass-2 placement question; surfaced for the user's choice rather than silently resolved).

- **Structural-followup work (out of scope per Layer Commitment but enumerated):** §2.3 spec amendments + variant-(a) revision inquiry + process-layer placement decisions (always-vs-conditional firing; pass-2 re-run). The §2.3 amendment is flagged as a soft-MUST (without it, the meaning-layer commitment exists only in this finding; future authoring would use outdated spec).

---

## Finding

### Small surrounding context

Task-define is a cognitive discipline in the cognitive_harness project (`cognitive_harness/task-define/references/task-define.md`) that expands a compact task statement into a defined task downstream loop disciplines can work on. Within task-define, the **Meta-question** operation runs per-item and applies "structural questions about the task itself" — currently 3 canonical base meta-questions defined at §2.3:

- **MQ1** — perceives the task's scope (e.g., feature-level, project-level, time-horizon)
- **MQ2** — perceives the task's context-need (does the task need external project context; if yes, what kinds)
- **MQ3** — perceives the user's hidden intent behind the surface ask

A recent inquiry (`devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/finding.md` — referred to below as the meta-question taxonomy finding) developed a typed taxonomy for these MQs: they represent 3 distinct primary types (Structural / Relational / Interpretive) on a target-of-perception axis. The 3 MQs run in parallel and emit independent perceptions of the task.

The trigger for this inquiry: in the prior conversation, the user proposed a use case — "implement feature X from scratch" in a codebase that already has prior implementations of X. Under the 3-type taxonomy:
- MQ2 (Relational/pre-context) by default would say "yes need context, kinds = [prior implementations of X]"
- MQ3 (Interpretive/pre-context) by default would say "intent = fresh greenfield, exclude prior X"

These two MQ outputs contradict. The user asked: does task-define need a 4th element after the 3 MQs whose job is to resolve such contradictions and merge the 3 outputs into one coherent unified answer? They named the proposal "verdict-sum like field."

This finding answers that question at meaning-layer (what cognitive operation, what perceives, what produces); structural amendments to §2.3 (where in the spec it lives, what its field schema looks like) and process-layer placement (when it runs, in which pass, under what conditions) are deliberately deferred to follow-up inquiries per the inquiry's Layer Commitment.

### 1. The Decision — YES, MQ-aggregate-resolution is a defined cognitive operation

The structural argument for YES rests on a key observation:

**Rephrase composes constraints; it does not resolve contradictions.** The Rephrase operation in task-define produces alternative formulations of each item, constrained by the 3 MQ answers (via the MQ-constrains-Rephrase mechanism from `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md`). This mechanism assumes the input constraints are composable — meaning, non-contradictory. Given contradictory MQ inputs (such as the from-scratch case above), Rephrase has only three possible behaviors:

- silently pick one MQ's framing and ignore the other (loss of fidelity; arbitrary)
- produce contradictory rephrasings (output corruption)
- fail

None of these is "merging." Constraint-composition (Rephrase's actual mechanism) and contradiction-resolution (what merging would do) are different cognitive operations. The argument "Rephrase already merges contradictions implicitly" — the strongest counter to the YES decision — conflates these two operations.

The runner — which reads MQ2's preparation substrate to formulate `/surfacing`'s input (per `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md`) — has a similar limitation. It can read MQ2 (the context-need substrate) but doesn't have a defined mechanism for cross-checking MQ2's substrate against MQ3's intent perception. The runner could implicitly aggregate via LLM judgment, but that aggregation is invisible — it can't be audited, refined, or tested.

The decision rests on four independent supporting pillars:

1. **Structural (technical perspective):** Rephrase's documented mechanism doesn't include contradiction-handling. Without an explicit aggregator, contradictions corrupt output silently.
2. **Bootstrap (calibration-state perspective):** the project is in Bootstrap state — no empirical evidence yet exists about MQ contradiction frequency. At Bootstrap, decisions must be principled-from-structure, not empirically-deferred. The structural completeness check (above) reveals the gap; principled-from-structure says: fix the gap structurally.
3. **User-perceived-need (user perspective):** the user's framing of the question is itself structural evidence the problem exists at design-level. The user perceived the issue while developing task-define2 (the two-pass design); their framing isn't speculative but emerges from working with the discipline.
4. **Layer Commitment (scope respect):** the meaning-layer scope honors the inquiry's declared layer commitment. Process-layer questions (when merge fires; whether it always runs) are deferred to follow-up inquiries.

Removing any one pillar still leaves the YES decision standing on the others — defense in depth.

### 2. The Essence — Meta-Cognitive Hybrid Reconcile-OR-Surface

The cognitive operation type is **meta-cognitive perception**. This distinguishes it from the 3 base MQs:

- MQ1, MQ2, MQ3 perceive PROPERTIES OF THE TASK (the task is the object of perception)
- MQ-aggregate-resolution perceives THE MQ-ANSWER-SET (the perception-set is the object of meta-perception)

The target-of-perception is "the 3 MQ outputs taken as a collective unit." This is structurally distinct from object-level perception and explains why MQ-aggregate-resolution doesn't fit as a 4th primary type on the taxonomy's axis A (which is reserved for object-level perception types).

The essence is **hybrid reconcile-OR-surface**:

- **Reconcile mode** — when the MQ-set's contradictions are resolvable at adequate confidence, the operation produces a unified MQ-output: a verdict that resolves the contradiction + content that names what the unified perception is. Example for the from-scratch case: verdict = "MQ3's intent overrides MQ2's default kinds-list"; content = "Don't surface prior X implementations; surface only related-but-not-derived-from-X material."

- **Surface mode** — when confidence is insufficient or the contradiction is structural (no resolution can be confidently produced), the operation surfaces the tension itself as content. Example: verdict = "Irreducible contradiction at MED confidence"; content = "MQ2 perceives kinds=[prior X]; MQ3 perceives intent=greenfield; the user should decide whether prior X is reference material or noise."

The same operation runs both modes. Runtime confidence determines which fires. At Bootstrap, there's no empirical evidence for setting a precise confidence-threshold — LLM judgment at runtime determines the mode for each invocation. This is principled deferral, not vagueness; it matches how other LLM cognitive operations (e.g., sense-making's anchor-extraction, /surfacing's relevance-attribution) handle confidence-dependent decisions.

The output is **hybrid (verdict + content)**:

- Pure verdict-only would lose the reconciled content; downstream consumers (Rephrase, runner) would need to re-derive it from the raw MQs + verdict — defeating the purpose of having an explicit aggregator
- Pure content-only would lose the meta-information about whether reconciliation happened or tension was surfaced; auditability would be impossible
- Both are needed; the structural shape (one bundle with two fields vs. one structured narrative) is structural-layer detail deferred to the §2.3 amendment inquiry

The domain is **cross-MQ-coherence-violations**, which is broader than "contradictions" alone. This includes:

- Hard contradictions (A says X; B says not-X — the from-scratch case fits here)
- Asymmetric-confidence cases (MQ1 HIGH; MQ2 LOW; MQ3 MED — no contradiction per se but coordination matters)
- Latent conflicts (MQs appear to agree at emission but Rephrase reveals incompatibility)
- Three-way disagreements (all 3 MQs misalign)
- And other coherence violations that emerge as future MQ extensions are authored

The approach is **principle-based, not class-specific**. The operation handles all coherence-violations via meta-cognitive judgment (LLM reasoning about the MQ-set as a whole). It does NOT use class-specific resolution rules (e.g., "rule X: when MQ3 says greenfield, override MQ2's kinds-list"). Rule-based approaches would require enumerating contradiction classes, be combinatorially expensive to author for future MQ extensions, and would be brittle to subtle/latent contradictions that don't fit pre-enumerated classes.

### 3. The Operation's Name

At meaning-layer, the cognitive-operation name is **MQ-aggregate-resolution**. This descriptive name captures both the aggregation aspect (drawing together the 3 MQ outputs) and the resolution aspect (producing a unified or tension-surfaced result).

The user's proposed term — "verdict-sum" — is preserved as the **user-proposed structural-shape-term**. When the §2.3 amendment is authored at structural-layer, the field naming (i.e., what to call the per-item bundle's 4th element) can adopt user's term or refine it. The structural-layer follow-up has the user's framing available for naming.

### 4. Architectural Fit — Internal to Meta-question, ADD-CONTENT Shape

The architectural placement is **internal to the Meta-question operation** (the operation's structure expands from "emit 3 MQs" to "emit 3 MQs + aggregate-resolution"). This:

- Preserves the 3-type taxonomy from the meta-question taxonomy finding for the 3 MQ types themselves — they remain Structural, Relational, Interpretive as before
- Co-locates the meta-perception with its target (the MQ-set lives inside Meta-question; meta-perception of it lives there too)
- Avoids creating a 6th task-define operation (which would add operational overhead)
- Avoids modifying MQ2's existing three-element substance (the 21-12 commitment is preserved)

The intervention shape (the form of action the §2.3 amendment will take) is **ADD-CONTENT**:

- A new sub-section in §2.3 describing MQ-aggregate-resolution as the 4th internal step
- A new element in the per-item bundle structure capturing the operation's output
- No existing §2.3 content is modified (preserving the 21-12 MQ2 substance commitment, the rule (b) refinement from the meta-question taxonomy finding, and all other §2.3 elements)

Alternative shapes — REPAIR (modify §2.3 to extend MQ2's substance), ADD-DIMENSION (add as evaluation dimension without making it a step), REORGANIZE-WITHOUT-ADDING (rename existing structure) — were tested and rejected during the innovation phase: REPAIR violates the 21-12 inheritance; ADD-DIMENSION loses the generative content-producing aspect of the operation; REORGANIZE-WITHOUT-ADDING contradicts the K10 argument that the operation is NEW, not pre-existing-but-unnamed.

### 5. Downstream Consumers — Both Rephrase and Runner

The operation's output constrains BOTH primary downstream consumers:

- **Rephrase** reads MQ-aggregate-resolution's output as a unified constraint set (replacing or augmenting the raw 3 MQ inputs). This handles the constraint-composition layer where Rephrase originally operated.
- **Runner formulating `/surfacing`** reads it when formulating `/surfacing`'s input. This handles the preparation-substrate layer where MQ2 originally fed the runner directly.

This makes the operation **cross-cutting** under the refined bounded-extensibility rule from the meta-question taxonomy finding. The refined rule (b) says: "must constrain some downstream operation," with per-category primary downstream consumer specified. MQ-aggregate-resolution doesn't fit a single category's primary consumer because it operates above the type-axis — it constrains both Rephrase (the constraint-composition consumer) and runner (the preparation-substrate consumer).

### 6. Pre-Context Firing; Variant-(a) Tension Surfaced

At meaning-layer, MQ-aggregate-resolution fires at **pre-context (pass-1)** of task-define2 (the two-pass design from `devdocs/inquiries/2026-06-05_00-11__task_define_two_pass_with_surfacing_between/finding.md`). The from-scratch case demonstrates why: the contradiction between MQ2 and MQ3 exists at MQ-emission time, BEFORE `/surfacing` fires. If aggregate-resolution waited for `/surfacing`, the runner would have already consumed contradictory MQ2 to formulate `/surfacing`'s input — the corruption would have already happened.

Pass-2 placement is a process-layer question and is deliberately deferred. But the deferral creates structural tension with the variant-(a) commitment in the `2026-06-05_00-11` finding (referred to below as the two-pass design finding). The two-pass design finding committed to "only Rephrase re-runs in pass-2." If MQ-aggregate-resolution also needs to re-run in pass-2 (because post-context surfaced material may reveal new coherence-violations not visible pre-context), variant (a) needs revision.

Two possible resolutions for the tension:

- **Extend variant (a)** — pass-2 expands from "Rephrase only" to "MQ-aggregate-resolution + Rephrase." This enables post-context aggregate-resolution to fire when surfaced material reveals new conflicts.
- **Keep variant (a) as-is** — pass-2 stays Rephrase-only; post-context coherence-violations remain as a research frontier for a future task-define3 design.

This finding does NOT resolve the tension. The choice belongs to the user and likely depends on Early Operation evidence (after the operation has been used ~10-20 times, the patterns become observable). Surfacing the tension explicitly so the user can decide is honest assessment; silently picking either way would violate user-position respect.

### 7. Per-Item Scope; Bootstrap State

The operation runs **per-item** (matching the per-item Meta-question structure). A task statement decomposed by Itemize into 3 items has 3 separate MQ-aggregate-resolution invocations, one per item. Whole-task scope (one aggregation across all items) was rejected during sensemaking because it loses per-item granularity.

The project is in **Bootstrap state** — no empirical evidence yet exists about MQ contradiction frequency, confidence-threshold patterns, or aggregate-resolution behavior under load. This finding's commitments are principled-from-structure (derived from the structural-completeness check against Rephrase + the 3-type taxonomy + the cross-discipline pattern of parallel-perception → aggregator). Empirical validation will come at Early Operation (~10-20 invocations); refinement triggers are listed in Open Questions below.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger listing 6 prior outputs whose commitments touch MQ aggregation, inter-type interaction, and the preparation substrate. The CONCLUDE protocol mandates this section.

### Commitments from `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md`

- **Commitment:** MQ2's answer carries verdict ∈ {yes, no, uncertain} + (when verdict=yes) kind specifier.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** MQ-aggregate-resolution operates on MQ2's existing substance; it does NOT modify MQ2's three-element substance. The aggregate-resolution reads MQ2's verdict + kind specifier as input and produces a meta-perception about how it relates to MQ3's intent + MQ1's scope. MQ2's emission contract is unchanged.

### Commitments from `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md`

- **Commitment:** MQ2's three-element substance (verdict + kinds + stance + hypothetical-relational expression mode) + runner-mediated alignment with `/surfacing`.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** the three-element substance is preserved; MQ-aggregate-resolution does NOT extend MQ2 with a 4th element (the rejected REPAIR alternative would have done this). Runner-mediated alignment is preserved with augmentation: the runner now reads MQ-aggregate-resolution's output in addition to (or as a refinement of) MQ2's raw preparation substrate, when forming `/surfacing`'s input. The runner's role doesn't change; the substrate it reads is augmented.

### Commitments from `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md`

- **Commitment:** Preparation substrate concept + always-invoke premise + function-name-independence principle.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** the preparation-substrate concept is preserved; MQ-aggregate-resolution produces an augmented preparation substrate (or a separate companion substrate) that the runner reads alongside MQ2's. The always-invoke premise is preserved — `/surfacing` still always fires (per `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md`). Function-name-independence is honored — the operation's essence (meta-cognitive perception of the MQ-set) is not tied to any naming convention; the name MQ-aggregate-resolution is descriptive, not load-bearing.

### Commitments from `devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/finding.md`

- **Commitment:** 3-type taxonomy (Structural / Relational / Interpretive) + 6-cell grid (3 primary types × 2 substrate modes) + per-type refined rule (b).
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** the 3 primary types remain unchanged for the 3 MQ types themselves. MQ-aggregate-resolution does NOT add a 4th primary type (the rejected TF1 alternative would have done this). The operation is structurally internal to the Meta-question operation — a 4th internal step, not a 4th type. The refined rule (b) extends naturally: MQ-aggregate-resolution is a cross-cutting downstream consumer that constrains both Rephrase and runner→/surfacing.

### Commitments from `devdocs/inquiries/2026-06-05_00-11__task_define_two_pass_with_surfacing_between/finding.md`

- **Commitment:** Variant (a) — only Rephrase re-runs in pass-2.
  - **Re-test status:** **TENSION SURFACED** (per Section 6 above)
  - **Evidence:** the pass-2 placement question (does MQ-aggregate-resolution re-run in pass-2?) creates structural tension with variant (a). Two resolutions are named for user choice (extend variant (a) to include pass-2 re-run, OR keep variant (a) and treat post-context aggregation as research frontier). This finding does not pick; the user retains the choice. Honest assessment requires surfacing the tension; silently resolving it would violate user-position respect.

### Commitments from `cognitive_harness/task-define/references/task-define.md` §2.3

- **Commitment:** Bounded-extensibility rules (a) "about task structure/framing", (b) "constrain Rephrase" (refined per the meta-question taxonomy finding to "must constrain some downstream operation per category"), (c) "one-sentence."
  - **Re-test status:** **RULES (a) AND (c) PRESERVED; RULE (b) ALREADY-REFINED-PER-10-03; MQ-AGGREGATE-RESOLUTION FITS REFINED RULE**
  - **Evidence:** rule (a) applies (MQ-aggregate-resolution is about task structure/framing — specifically about coherence of the framing). Rule (c) applies (the operation's commitment is one-sentence-expressible). Rule (b) — already refined per `2026-06-05_10-03` to per-category primary downstream consumer — extends naturally to MQ-aggregate-resolution as a cross-cutting consumer of both Rephrase (constraint-composition layer) and runner→/surfacing (preparation-substrate layer).

---

## Next Actions

### MUST

- **What:** Structural amendments to `cognitive_harness/task-define/references/task-define.md` §2.3 — add MQ-aggregate-resolution as a 4th internal step of the Meta-question operation. Define: meta-cognitive perception type; hybrid reconcile-OR-surface essence; hybrid output (verdict + content); cross-MQ-coherence-violations domain; per-item scope; principle-based approach; downstream consumer constraint on both Rephrase and runner→/surfacing. Specify the per-item bundle integration point (where in the per-item bundle structure the operation's output lives).
  - **Who:** structural-layer follow-up inquiry author (user-scheduled)
  - **Gate:** condition-bound — apply when the user is ready to commit structural amendments
  - **Why:** without the spec amendments, the meaning-layer commitment exists only in this finding; future authoring of MQ-related work would use the outdated spec rather than the typed operation. **This is a soft MUST** — the meaning-layer commitment stands without amendments, but finding-vs-spec drift accumulates until the structural amendments land.

- **What:** Update `devdocs/what_is_task_define.md` and `devdocs/what_is_task_define2.md` to reference MQ-aggregate-resolution. Brief: in `what_is_task_define.md`, note that Meta-question now has a 4th internal step; in `what_is_task_define2.md`, note that pass-1's Meta-question fires MQ-aggregate-resolution at the end, producing a unified substrate the runner reads when formulating `/surfacing`'s input.
  - **Who:** explanatory-doc maintainer
  - **Gate:** condition-bound — apply alongside §2.3 spec amendments
  - **Why:** the explanatory docs currently treat the 3 MQs as the only Meta-question elements; once §2.3 amendments land, the docs should reflect the typed-operation structure.

### COULD

- **What:** Schedule a separate meaning-layer follow-up inquiry on variant-(a) tension resolution — decide whether to extend variant (a) to include MQ-aggregate-resolution re-run in pass-2 (so post-context coherence-violations get handled) OR keep variant (a) as-is (and treat post-context aggregation as research frontier for task-define3).
  - **Who:** future user-scheduled meaning-layer inquiry
  - **Gate:** condition-bound — schedule when the user has Early Operation evidence (per the two-pass design finding's calibration trajectory) suggesting whether post-context aggregation patterns emerge
  - **Why:** the tension is real but not urgent at Bootstrap; deferring until evidence accumulates avoids premature commitment
  - **Depends-on:** MUST item "Structural amendments to §2.3." This COULD is GATED — variant-(a) resolution should be informed by the now-explicit operation structure committed in §2.3.

- **What:** Confidence-threshold pattern observation at Early Operation — observe whether confidence-thresholds for the reconcile-vs-surface mode decision emerge as empirical patterns. If a stable pattern emerges (e.g., "MED-LOW confidence → surface; MED-HIGH → reconcile"), refine the §2.3 essence specification.
  - **Who:** runner / calibration-infrastructure maintainer
  - **Gate:** observable — after ~10-20 MQ-aggregate-resolution invocations under realistic use
  - **Why:** at Bootstrap, the operation's runtime behavior is LLM-judged; empirical refinement may discover patterns worth specifying explicitly.

- **What:** Empirical validation of cross-MQ-coherence-violation classes — observe whether the 9 contradiction classes surfaced during this inquiry (from the surfacing discipline output) exhaust the real-world variety, or whether new classes emerge that weren't enumerated.
  - **Who:** runner / calibration-infrastructure maintainer
  - **Gate:** observable — after ~10-20 MQ-aggregate-resolution invocations
  - **Why:** the principle-based approach is designed to handle the class generally; empirical validation confirms the principle holds against actual use.

### DEFERRED

- **What:** Future task-define3 design exploring iterative-surfacing rounds driven by post-context coherence-violation discovery
  - **Gate:** observable — when Early Operation evidence shows that post-context aggregation reveals coherence-violations that warrant an additional surfacing pass (re-querying `/surfacing` with refined purpose based on the post-context aggregate-resolution's findings)
  - **Why (if revived):** would enable an iterative loop — `/surfacing` → pass-2 → coherence-violation surface → another `/surfacing` → pass-3 → ... — that the two-pass design finding's forward-looking note hinted at; only worth designing if Early Operation evidence justifies it.

---

## Reasoning

The finding was reached by the following structural chain:

### Why YES (Section 1)

The strongest counter-argument was AL3 ("Rephrase already merges contradictions implicitly"). It was tested adversarially during sensemaking and demolished by the K10 structural argument: Rephrase composes constraints; it does not resolve contradictions. The mechanism by which Rephrase operates (MQ-constrains-Rephrase from `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md`) assumes non-contradictory inputs and produces undefined behavior under contradictory inputs.

A subtle prosecution objection emerged during critique: "Perhaps Rephrase implicitly handles contradictions via LLM judgment at runtime; if so, the YES decision rests on a structural argument that's empirically untested." The defense to this objection actually STRENGTHENS the YES decision: even if Rephrase sometimes succeeds via implicit handling, the implicit handling is invisible-coverage that can't be audited, refined, or tested. The structural commitment to a NAMED operation is the meaning-layer contribution; runtime behavior under implicit-handling is process-layer detail and would itself benefit from explicit-aggregation specification.

### Why hybrid reconcile-OR-surface (Section 2)

The strongest counter for essence was "pure reconcile" — always resolve to a verdict; never surface tension. This was rejected because pure reconcile would manufacture coherence even on irreducible contradictions (the over-resolution failure mode); the user would receive falsely-confident reconciled output when the real situation is structurally unresolved. The opposite pole — pure surface (never reconcile; always emit tension) — would under-utilize confident cases. The hybrid resolves both failure modes: confidence determines mode at runtime.

Pure verdict-only output and pure content-only output were both rejected during the ambiguity-collapse phase: pure verdict loses the reconciled content; pure content loses the meta-information about whether reconciliation happened. Both are needed for downstream consumption + auditability.

### Why internal-to-Meta-question (Section 4)

The strongest counter for placement was TF1 (4th primary type on the meta-question taxonomy's axis A). This was rejected because axis A targets PROPERTIES OF THE TASK; MQ-aggregate-resolution's target is the MQ-ANSWER-SET (a meta-target, not a task-property). Adding it as a 4th primary type would break axis A's structural integrity by conflating object-level perceptions with meta-level perception.

TF4 (separate 6th operation, external to Meta-question) was also rejected during innovation: the meta-perception target (MQ-set) lives inside Meta-question's invocation; co-locating the perception with its target is more structurally honest than externalizing.

The intervention-shape question was tested adversarially via the Intervention-Shape-Axis Inversion from /innovate. REPAIR (modify MQ2 to extend its substance) was rejected because it breaks the 21-12 MQ2 three-element commitment without principled reason. ADD-DIMENSION was rejected because it loses the generative content-producing aspect that the hybrid essence requires. REORGANIZE-WITHOUT-ADDING was rejected because it contradicts K10 (the operation is NEW, not pre-existing-but-unnamed).

### Why both downstream consumers (Section 5)

Rephrase needs the unified constraint set to compose alternative rephrasings correctly. Runner needs the augmented preparation substrate to formulate `/surfacing`'s input correctly. A single-consumer placement would mean one of these still operates on raw potentially-contradictory MQs.

### Why variant-(a) tension surfaced (Section 6)

Honest assessment over silent resolution is a foundational principle in this inquiry's discipline lineage (multiple prior task-define inquiries have committed to it). The pass-2 placement question creates real structural tension with the two-pass design finding's variant (a) commitment. Silently picking either resolution would violate user-position respect. The finding surfaces the tension and names two resolutions, leaving the choice to the user with appropriate calibration-state guidance (Early Operation evidence will inform the choice).

### Sub-findings from critique

The critique discipline produced 4 sub-findings now incorporated:

- The Rephrase-might-implicitly-handle prosecution objection STRENGTHENS rather than weakens the YES decision (incorporated in Section 1 reasoning above).
- Confidence-threshold pattern observation at Early Operation should be added as COULD (added to Next Actions).
- Per-item bundle integration point should be explicitly named in the §2.3 amendment scope (added to MUST item #1).
- §2.3 amendment flagged as soft-MUST to prevent finding-vs-spec drift (formatted as such in MUST).

---

## Open Questions

### Monitoring

- After ~10-20 invocations of MQ-aggregate-resolution under realistic use, monitor whether the 9 contradiction classes surfaced during this inquiry exhaust the real-world variety, or whether new classes emerge.
- Monitor whether confidence-threshold patterns emerge as empirical regularities (e.g., "MED-LOW confidence systematically leads to surface; MED-HIGH systematically leads to reconcile").
- Monitor whether the hybrid output (verdict + content) actually serves downstream consumers (Rephrase + runner) usefully, or whether one consumer reads only one field in practice.

### Refinement Triggers

- If Early Operation evidence reveals confidence-threshold patterns that the spec should encode, refine §2.3 essence specification.
- If empirical observation shows pass-2 aggregate-resolution patterns warrant inclusion in variant (a), trigger the variant-(a) revision inquiry per the COULD above.
- If a new MQ extension is authored that doesn't fit the principle-based approach (i.e., requires class-specific handling), revisit the principle-based vs class-specific decision.
- If a future inquiry reveals that the meta-cognitive perception type doesn't generalize to other multi-perceiver disciplines, the type name should be refined.

### Research Frontiers

- Does this taxonomy/operation pattern (parallel-perception → meta-cognitive-aggregator) generalize to other thinking disciplines beyond task-define? The pattern matches sense-making's structure (parallel anchor-extraction → cross-item ambiguity-collapse) and /surfacing's structure (per-item relevance-attribution → cross-item region-summary). Cross-discipline generalization is a research frontier.
- Are there alternative hybrid essence forms beyond reconcile-OR-surface (e.g., reconcile-OR-surface-OR-defer)? Sensemaking deliberately stabilized at the two-mode hybrid; future inquiries may explore additional modes.
- The post-context coherence-violation question (cell 6 of the meta-question taxonomy finding's 6-cell grid) intersects with this finding's pre-context commitment. A future inquiry could explore whether post-context MQ-aggregate-resolution has different essence than pre-context — or whether the same operation runs in both modes with confidence-and-substrate-aware behavior.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

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

</details>
