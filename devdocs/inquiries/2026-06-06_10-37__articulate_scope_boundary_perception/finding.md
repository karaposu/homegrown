---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: articulate_simple — Scope-Boundary Perception (MQ4 Boundary)

## Question

From `_branch.md`:

**Question:** Does articulate_simple currently have a cognitive-operation mechanism for perceiving explicit user-declared scope-boundaries (what's IN vs OUT of scope), distinct from the intrinsic-to-the-task-statement scope perception that MQ1/MQ2/MQ3/MQ-aggregate-resolution already provide; and if not (or insufficient), what meaning-layer commitment SHOULD it carry — what operation perceives it, what's its essence, where it lives, and what downstream consumers it constrains?

**Goal:** Defensible meaning-layer decision grounded in the doc's current commitments + the 5 operations' essence + the triggering failure case (task-define.md mis-scoped at the prior structural-layer inquiry) + the intrinsic-vs-extrinsic distinction + lightness + substrate-compliance + a clean downstream-consumer story.

**Layer Commitment:** MEANING. Structural-layer + process-layer items flagged where they surface but not adjudicated.

---

## Finding Summary

- **Audit verdict — NO.** Articulate_simple's current 5-operation set does NOT have an explicit cognitive operation that perceives extrinsic scope-boundaries (user-declared exclusions outside the task statement). MQ3 + MQ-aggregate-resolution handle INTRINSIC exclusions implicitly (the §13 Example C "redo from scratch" pattern is the canonical case). The gap is EXTRINSIC perception.

- **Meaning-layer verdict — Add MQ4 (Boundary) as the 4th base meta-question.** Expand the inherited 3-type MQ taxonomy (Structural / Relational / Interpretive — from `2026-06-05_10-03`) to 4-type by adding a Boundary type alongside the existing three.

- **MQ4's essence:** *"What's explicitly out of scope, or excluded, for this task?"* MQ4 is a perception-type cognitive operation, parallel in shape to MQ1/MQ2/MQ3. It perceives scope-boundaries the user has declared — primarily extrinsic (declared outside the task statement, in warm session context); can also catch intrinsic for safety. Its output is an enumeration of excluded items / concepts + per-item confidence (parallel to MQ2's kinds-plural structure).

- **Substrate-bounded — inherited from 20-02's anti-fetching boundary.** MQ4 reads from the task statement (intrinsic signals) + warm session context (extrinsic explicit declarations). It does NOT fetch from project state. This is the same substrate rule that MQ2 and MQ3 already operate under.

- **Lightness preserved — parallel architecture.** MQ4 is structurally the same shape as MQ1/MQ2/MQ3 (a one-sentence question + a typed output). It is NOT a new operation, NOT new sub-machinery, NOT a pre-Meta-question step. It is a 4th sibling of the existing base MQs. Spec text in §2.2 grows by one parallel sub-section (~30-50 lines).

- **Intrinsic-vs-extrinsic split — MQ3+MQ-aggregate-resolution continue handling intrinsic; MQ4 handles extrinsic primary.** The §13 Example C pattern is preserved: when the task statement signals "from scratch", MQ3 perceives the anti-intent and MQ-aggregate-resolution reconciles the resulting tension with MQ2's default continuation stance. MQ4 fills the missing slot — explicit declarations the user makes OUTSIDE the task statement (e.g., *"we are not caring about task-define.md anymore"*).

- **MQ-aggregate-resolution extends naturally to the 4-MQ set.** MQA's essence (from `2026-06-05_12-00`) is *"perceives MQ-answer-set as whole; handles cross-MQ coherence violations"* — set-based, not count-based. Extending the set from 3 to 4 doesn't change essence; reconciliation continues to operate over contradictions / asymmetric-confidence / latent-conflicts among all MQs. A common new contradiction pattern: MQ4 says "X excluded" + MQ2 says "X is load-bearing context" → MQA reconciles, typically with MQ4's explicit-exclusion overriding MQ2's default kinds-list (parallel to Example C's MQ3-overrides-MQ2 pattern).

- **Downstream consumer story is complete.** Five consumers receive MQ4's output:
  - **Rephrase** — honors MQ4 by not drifting into excluded vocabulary or framings; joins MQ1+MQ2+MQ3+MQ-aggregate-resolution as a 5th constraint source
  - **/surfacing** (via runner) — runner reads MQ2 substrate (positive context-need) + MQ4 substrate (exclusions) when formulating /surfacing's territory; the bounded territory excludes regions MQ4 named
  - **Loop disciplines** (Sensemaking, Decomposition, Innovation, Critique downstream of articulate) — receive MQ4 exclusions as inherited context; honor them in their own territory specifications
  - **Runner** — propagates exclusions across the cross-discipline boundary
  - **User** — sees MQ4's output explicitly in the framing artifact (visibility of declared boundaries)

- **Project-level conventions DEFERRED to process-layer.** Standing rules like *"we don't use library X"* are NOT in any given session's warm context — they require **project memory**, which is outside articulate_simple's substrate at Bootstrap. MQ4 covers session-level explicit exclusions only. Project-level convention perception is a future concern (process-layer + memory-tracking) flagged for later inquiry.

- **The triggering failure case is addressed.** The user's *"we are not caring about task-define.md anymore"* is exactly the kind of EXPLICIT EXTRINSIC declaration MQ4 perceives. Under the prior structural-layer inquiry (`2026-06-06_09-58`), articulate's framing did NOT carry this exclusion because no operation had the job of perceiving it. Under this finding's commitment, MQ4 would have surfaced the exclusion + MQA would have reconciled the resulting tension with the doc's §6 + §9 references to task-define.md + the structural-layer recommendations would have been bounded to articulate_simple's own surface.

- **Four meta-patterns extracted (reusable beyond this inquiry):**
  1. **Cognitive perception space is bidirectional** — perceptions can be positive (what's IN) AND negative (what's OUT); reusable for any perception-based discipline that currently only perceives positively
  2. **Taxonomy expansion as solution-pattern** — when a structural gap surfaces that doesn't fit existing typing, expanding the typology (3-type → 4-type) is structurally cleaner than forcing the gap into wrong typing via extension
  3. **Aggregation-as-set-extension** — set-based aggregators (like MQA) absorb count changes without redesign; reusable architectural pattern for any extensible aggregation operation
  4. **Source-routing as perception design** — distinguishing signal-source (intrinsic-to-statement vs extrinsic-to-warm-context) routes perception work to the right operation; reusable for split-responsibility patterns where two operations cover related-but-distinct signal sources

---

## Finding

### Small surrounding context

The user's question emerged from a concrete failure case in the prior inquiry. That inquiry (`2026-06-06_09-58__articulate_simple_doc_structural_layer_deepdive`) was a structural-layer deep-dive on `devdocs/how_articulate_simple_should_be.md` — the meaning-layer explainer doc for articulate_simple. The inquiry surfaced that the doc points to a canonical structural spec at `cognitive_harness/task-define/references/task-define.md`, found that spec stale, and produced MUSTs M4-M7 to sync its content.

Then the user said: *"but we are not caring about task-define.md anymore... we started from scratch and focusing only artituclate simple..."*

The exclusion was real. The prior inquiry's recommendations were not. But the inquiry itself wasn't wrong-by-its-own-lights — the user's exclusion lived in the session's broader context, and the inquiry's _branch.md observation targets had listed §6 + §9 spec-path consistency as a target. The deeper question: *what should articulate_simple itself do so that the framing it produces honors user-declared boundaries that aren't carried in the task statement?*

This finding answers: add MQ4 — Boundary perception — as the 4th base meta-question.

### 1. Why "scope-boundary perception" is a real cognitive operation

Three of the five existing articulate operations are perceptions (MQ1, MQ2, MQ3). They all perceive POSITIVE properties of the task: scope-axis (what dimension scope varies along), context-need (what kinds of external context bear), intent (what user wants). None perceives the NEGATIVE — what's been excluded.

The current set handles INTRINSIC exclusions implicitly. The §13 Example C case (*"redo the user dashboard from scratch"*) is the canonical demonstration: MQ3 perceives the "from scratch" signal in the task statement and infers an anti-intent ("treat existing as discardable reference, not foundation"); MQ-aggregate-resolution catches the resulting contradiction with MQ2's default continuation stance and reconciles. This pattern WORKS for exclusions signaled by the task statement itself.

EXTRINSIC exclusions — declared by the user outside the task statement, in the broader session context — have no operational home. There is no MQ that asks the equivalent of *"What has the user excluded that isn't in the task statement?"* That gap is what the task-define.md failure case revealed.

The bidirectional-perception meta-pattern names the structural insight: a perception discipline that only perceives positively is structurally incomplete when the cognitive territory has explicit negative signals available in its substrate. MQ4 closes the bidirectional gap.

### 2. Why MQ4 is a new base MQ, not a new MQ-extension

The bounded-extensibility rule (§2.2.4) allows new MQs to be authored as extensions when they (a) are about task structure/framing, (b) constrain a downstream operation, (c) are expressible in one sentence. Scope-boundary perception satisfies all three. So why not author it as an extension?

The typing doesn't fit. The bounded-extensibility rule's downstream-consumer routing is keyed to the 3-type MQ taxonomy from `2026-06-05_10-03`: Interpretive extensions feed Rephrase; Relational extensions feed the runner→/surfacing path; Structural extensions feed MultiDepth (renamed from MultiScope). Scope-boundary spans all three:

- **Structurally**, the boundary is a property of where the task ends — Structural-ish
- **Relationally**, the exclusion is about what context is NOT load-bearing — Relational-ish
- **Interpretively**, the exclusion captures user anti-intent — Interpretive-ish

Forcing it into any single existing type creates a typing-mismatch. The structural diagnosis is that scope-boundary needs its OWN type. The taxonomy expansion meta-pattern names what to do: when a gap surfaces that doesn't fit existing types, expand the typology rather than force the wrong fit.

So the meaning-layer commitment is two-fold: (a) MQ4 Boundary as a new base meta-question, and (b) a 4th type "Boundary" alongside Structural / Relational / Interpretive in the inherited taxonomy. This is a meaning-layer change — the typology of meta-questions evolves from 3-type to 4-type.

### 3. Why the intrinsic-vs-extrinsic split is preserved

MQ4 could theoretically take ALL scope-boundary perception, including intrinsic, deprecating MQ3+MQA's Example C pattern. The piece-level Inversion at Innovation tested this; it failed.

The Example C pattern is structurally sound and load-bearing: the user's intent inference (MQ3) catches "from scratch" as a signal IN the task statement, and the resulting MQ3↔MQ2 contradiction is exactly what MQ-aggregate-resolution exists to resolve. Disturbing that pattern would lose working machinery.

The split is functional, not categorical-rigid. When intrinsic signals appear in the task statement, MQ3 perceives them and MQA reconciles. When extrinsic signals appear in warm context, MQ4 perceives them. When both sources signal the same exclusion (e.g., user says "from scratch" AND has separately said "abandon prior version"), both operations fire, and MQ-aggregate-resolution mediates as it already does for cross-MQ overlap.

The source-routing meta-pattern names the structural insight: when a perception's signal can come from multiple sources, splitting responsibility by source-location keeps each operation focused on what it perceives well.

### 4. Why MQ-aggregate-resolution extends without redesign

MQ-aggregate-resolution's essence (from `2026-06-05_12-00`) is *"perceives MQ-answer-set as whole; handles cross-MQ coherence violations."* The operation reconciles contradictions / asymmetric-confidence / latent-conflicts / three-way-disagreements among the MQ answers.

This essence is **set-based**, not **count-based**. Whether the set has 3 MQs or 4 MQs, the operation's job is the same: perceive the set, reconcile its incoherences. Extending the set from 3 to 4 doesn't change essence; the reconciliation domain absorbs the new participant.

A new common contradiction pattern emerges: MQ4 says "X excluded" + MQ2 says "X is load-bearing context"; MQ-aggregate-resolution reconciles, typically with MQ4's explicit exclusion overriding MQ2's default kinds-list. This is structurally parallel to Example C's MQ3-overrides-MQ2 pattern; the reconciliation type (intent-or-exclusion overrides default) reuses existing machinery.

The aggregation-as-set-extension meta-pattern names this: set-based aggregators absorb count changes for free; aggregation-design that respects this property leaves room for future MQ additions without architectural disturbance.

### 5. Why this addresses the task-define.md failure case

The user's exclusion *"we are not caring about task-define.md anymore"* is an explicit declaration in session warm context. Under the current operation set, no MQ has the job of perceiving such declarations. Under MQ4's commitment, the perception is routed to MQ4, which enumerates the exclusion (with confidence). MQ-aggregate-resolution sees MQ4's output alongside the other MQs and, if MQ2 had perceived task-define.md as a load-bearing kind of context, reconciles by overriding the MQ2 default.

The runner formulating /surfacing's input now reads BOTH MQ2's positive context-need AND MQ4's exclusions, and bounds the territory accordingly — task-define.md is NOT in the territory. The structural-layer inquiry on the doc would now operate within a territory that excludes task-define.md from the outset, and the M4-M7 spec-content-sync MUSTs would never be generated.

Beyond the specific case, MQ4 covers the broader pattern of session-level explicit exclusions: *"focus on X; we abandoned Y"*, *"don't touch module B"*, etc. The surfacing's CASE region documented six representative scenarios; MQ4 addresses C1-C5 (the session-level ones). Project-level conventions (C3 standing rules) require project memory and are deferred.

### 6. Lightness honored — the architectural compromise

Adding any new operation to articulate_simple raises a lightness concern. The §5 lightweight stance commits to no sub-machinery beyond a paragraph per operation; every output element load-bearing for at least one downstream actor's decision. The piece-level Inversions at Innovation explicitly tested heavier alternatives (new operation parallel to MQ-aggregate; pre-Meta-question step; statement-level operation parallel to Itemize) and rejected them as lightness-violating.

MQ4 stays light by being **parallel** to existing base MQs rather than additive in shape. It is a 4th sibling of MQ1/MQ2/MQ3, with the same internal complexity (one perception, one typed output, one downstream contribution). MQ-aggregate-resolution extends to handle the new participant in the set, but does not gain new machinery. The spec text in §2.2 grows by one sibling sub-section, roughly the size of the existing MQ1 or MQ3 sub-sections.

Cost summary at the doc level: one new sub-section in §2.2 + one paragraph extending §2.2.5 (MQ-aggregate-resolution) to acknowledge 4-MQ scope + one element added to §6's per-item bundle list + one example in §13 demonstrating MQ4 firing. The structural footprint is incremental, not architectural.

### 7. What's explicitly out of scope for MQ4

MQ4 perceives **session-level explicit exclusions**. It does NOT perceive:

- **Project-level standing rules** like *"we don't use library X"* that aren't in any given session's warm context. These require **project memory** — a separate cognitive infrastructure outside articulate's substrate. Articulate at Bootstrap stays substrate-bounded; project-memory perception is a future concern (process-layer + memory infrastructure).
- **Implicit exclusions inferable only from indirect cues** without explicit declaration. MQ4 perceives explicit signals; indirect inference belongs to MQ3 (which already does inference).
- **Anti-intent in the intent-inference sense.** When the task statement signals fresh-start intent (Example C), MQ3+MQA continue to handle it; MQ4 doesn't duplicate the work.

These exclusions name what MQ4 is NOT responsible for, honoring the honest-acknowledgment principle: each operation perceives a bounded slice; deferred concerns are named explicitly with revival paths (project memory perception is the named future).

---

## Next Actions

### MUST

- **What:** Add §2.2.4-style MQ4 Boundary sub-section to `devdocs/how_articulate_simple_should_be.md` §2.2, parallel in shape to §2.2.1 (MQ1) / §2.2.2 (MQ2) / §2.2.3 (MQ3). The sub-section specifies MQ4's question, output shape, perception sources (task statement + warm context), intrinsic-vs-extrinsic split with MQ3+MQA, and downstream consumers.
  - **Who:** doc maintainer (structural-layer follow-up)
  - **Gate:** condition-bound — apply when user is ready to commit the structural revision
  - **Why:** without §2.2.4 (or §2.2.4 + §2.2.5 reorganization) addition, the meaning-layer commitment exists only in this finding; finding-vs-doc drift accumulates. **Soft MUST** — the meaning-layer commitment stands; structural-layer application is the follow-up.

- **What:** Update the existing typology framing in `devdocs/how_articulate_simple_should_be.md` §2.2 from "three base MQs" / "three-type taxonomy" to "four base MQs" / "four-type taxonomy" (Structural / Relational / Interpretive / Boundary). Update the typology references in §2.2's introduction and in the inheritance map (§11).
  - **Who:** doc maintainer
  - **Gate:** condition-bound — apply alongside MQ4 sub-section addition
  - **Why:** the 3-type framing is inherited from `2026-06-05_10-03`; this finding expands it. Honest acknowledgment of the typology change keeps reader understanding aligned with the new commitment.

- **What:** Extend `devdocs/how_articulate_simple_should_be.md` §2.2.5 (MQ-aggregate-resolution) to acknowledge the 4-MQ set explicitly. Add a brief note (one paragraph) that MQA's reconciliation domain now spans MQ1/MQ2/MQ3/MQ4 contradictions, with a representative example (e.g., MQ4 "X excluded" vs MQ2 "X is load-bearing context" — MQ4 overrides MQ2, parallel to Example C's MQ3-overrides-MQ2 pattern).
  - **Who:** doc maintainer
  - **Gate:** condition-bound — apply alongside MQ4 sub-section addition
  - **Why:** MQA is structurally extended; honest documentation of the new participant in its reconciliation domain prevents future readers from assuming MQA is 3-MQ-only.

- **What:** Update `devdocs/how_articulate_simple_should_be.md` §6 (output shape — per-item bundle) to include the MQ4 output alongside MQ1/MQ2/MQ3 outputs.
  - **Who:** doc maintainer
  - **Gate:** condition-bound — apply alongside MQ4 sub-section addition
  - **Why:** the per-item bundle contract changes; downstream consumers (and readers) need the contract update.

- **What:** Add a §13 example demonstrating MQ4 firing on an extrinsic exclusion case. Suggested example: a task like *"work on improving articulate_simple"* in a session where the user has previously said *"we don't care about task-define.md anymore"*. Show MQ4's output enumerating task-define.md as excluded; show MQA reconciling MQ2's potential continuation-context perception with MQ4's exclusion (MQ4 overrides); show the resulting framing artifact's MQ4 visibility.
  - **Who:** doc maintainer
  - **Gate:** condition-bound — apply alongside MQ4 sub-section addition
  - **Why:** §13 examples are the de-facto schema; without an MQ4 example, readers don't see the operation in action and may miss the structural shape of its output.

### COULD

- **What:** Add a note in §2.2 (or in the new MQ4 sub-section) acknowledging the **taxonomy expansion as solution-pattern** meta-pattern: when a structural gap surfaces that doesn't fit existing typing, expanding the typology is structurally cleaner than forcing the gap into wrong typing. This documents the reusable principle for future evolution of articulate or other discipline taxonomies.
  - **Who:** doc maintainer or project architect
  - **Gate:** condition-bound — when project-level meta-pattern documentation is valuable
  - **Why:** captures the reusable principle (per critique sub-finding 1).

- **What:** Add a note in the new MQ4 sub-section that the runtime distinction between "explicit declaration" and "incidental mention" of an exclusion is LLM-judgment at runtime (process-layer concern; not specified at meaning layer). Sets correct reader expectations.
  - **Who:** doc maintainer
  - **Gate:** condition-bound — apply alongside MQ4 sub-section addition
  - **Why:** prevents readers from expecting a runtime mechanism specification at the meaning-layer doc (per critique sub-finding 2).

- **What:** Add a note in the new MQ4 sub-section that empty MQ4 output IS the common case in cold-context (when no session-level exclusions have been declared); empty output is valid, not a failure. Downstream consumers see empty + treat as "no exclusions to honor"; behavior is graceful.
  - **Who:** doc maintainer
  - **Gate:** condition-bound — apply alongside MQ4 sub-section addition
  - **Why:** prevents readers from misinterpreting empty MQ4 output as a structural failure (per critique sub-finding 3).

- **What:** Document the four meta-patterns extracted (bidirectional perception space / taxonomy-expansion / aggregation-as-set-extension / source-routing) at a project-level meta-pattern reference, or note their reusability in the doc's §11 inheritance map.
  - **Who:** project architect
  - **Gate:** condition-bound — when project-level meta-pattern documentation is valuable
  - **Why:** other articulate operations or future disciplines may face similar structural design questions; documented patterns enable proactive application.

### DEFERRED

- **What:** Project-level convention perception — a separate cognitive operation (or sub-operation, or memory-integration mechanism) for perceiving standing rules like *"we don't use library X"* that aren't in any given session's warm context.
  - **Gate:** condition-bound — when project memory infrastructure becomes available OR when N≥3 inquiries surface project-level-convention failure cases not addressed by session-level MQ4
  - **Why (if revived):** standing rules are a recognized exclusion category; the project memory layer this would require doesn't yet exist at Bootstrap. When the infrastructure is available, perception of standing rules joins the perception set.

- **What:** Operational examples of MQ4 cross-domain (research / content-authoring / strategy / organizational) added to §13 or to the new MQ4 sub-section to reinforce that the operation is domain-general (parallel to the generic-application warnings at §2.2.1-§2.3).
  - **Gate:** observable — empirical evidence that engineering-anchoring of §13's MQ4 example causes downstream pattern-matching issues
  - **Why (if revived):** §13's examples are software-engineering anchored; the §2.2.1-§2.3 generic-application warnings mitigate the risk in principle; cross-domain examples would reinforce empirically.

---

## Reasoning

### Why MQ4 as new base MQ over the 7 alternatives

Surfacing surfaced 8 placement options (PLACE region). Sensemaking's A1-A10 ambiguity-collapse pairs and Innovation's piece-level Inversions adjudicated:

- **Status-quo (no change):** rejected (D11 user-failure-case-not-addressed; D12 user-framing-ignored)
- **MQ-extension via §2.2.4 bounded-extensibility:** rejected (typing-mismatch — scope-boundary spans Structural+Relational+Interpretive types per K3+K4)
- **MQ2 enhancement (add exclusions element):** rejected (recent M2 element-count concern; structural friction)
- **MQ3 enhancement (anti-intent element):** rejected (MQ3 is INTENT inference; explicit-exclusion is project-level signal not intent inference; type-mismatch)
- **New operation parallel to MQ-aggregate-resolution:** rejected (heavy; lightness-violation per D10)
- **Pre-Meta-question step:** rejected (architectural shift; heaviest)
- **Statement-level operation parallel to Itemize:** rejected (Itemize is count-perception; scope-boundary is enumeration; shape-mismatch)
- **MQ4 as new base MQ + 4th type Boundary:** SURVIVES (parallel architecture; substrate-compatible; addresses failure case; honors user framing; preserves Example C; MQA extends naturally)

### Why the intrinsic-vs-extrinsic split is preserved

The piece-level Inversion at P2 tested "MQ4 absorbs all scope-boundary perception including intrinsic" and rejected it. The Example C pattern is structurally sound and load-bearing; disturbing it would lose working machinery. The split is functional (each operation perceives signals at its own source-location) not categorical-rigid (overlap is reconciled by MQA when it occurs).

### Why project-level conventions are deferred

The Frame-exit Completeness perspective at sensemaking surfaced project-level standing rules as a 5th referent type for "scope-boundary" alongside the four already-named types. Standing rules aren't in session warm context — they require project memory, which articulate_simple's substrate doesn't include at Bootstrap. The deferral is honest acknowledgment of a structural class not addressed; revival is gated on project memory infrastructure existing AND empirical evidence of the gap.

### Sub-findings from critique (incorporated)

- P1 meta-pattern note → COULD item
- P2 runtime-judgment note → COULD item
- P3 empty-common-case note → COULD item

---

## Open Questions

### Monitoring

- After MQ4 is added to the doc, monitor: do future articulate invocations correctly emit MQ4 (empty or non-empty)?
- Monitor MQ-aggregate-resolution's handling of MQ4-vs-MQ2 contradictions: does the MQ4-overrides-MQ2 default pattern hold in practice?
- Monitor downstream consumers (Rephrase + /surfacing + loop disciplines): do they honor MQ4 exclusions in practice?
- Monitor for false-positives — cases where MQ4 perceives an exclusion that wasn't actually declared (over-inference)

### Refinement Triggers

- **Project-level convention support trigger:** N≥3 inquiries surface project-level-convention failure cases not addressed by session-level MQ4 → revisit project-memory infrastructure decision
- **Cross-domain examples trigger:** empirical evidence that engineering-anchoring of §13's MQ4 example causes downstream pattern-matching issues → add cross-domain examples
- **MQ4 internal-spec refinement trigger:** if LLMs systematically struggle with the "explicit declaration vs incidental mention" judgment in practice, the process-layer specification may need to formalize the judgment criteria
- **Intrinsic-vs-extrinsic split trigger:** if Example C pattern + MQ4 overlap excessively in practice (i.e., MQ4 redundantly catches what MQ3+MQA already handle), the split's responsibility allocation may need clarification

### Research Frontiers

- **Project memory perception** — what cognitive operation (if any) perceives standing project-level conventions? Out of scope for articulate at Bootstrap; future inquiry frontier.
- **Bidirectional perception space across articulate operations** — could the bidirectional-perception meta-pattern extend beyond MQ4? Are there other articulate operations (or future operations) that would benefit from explicit negative perceptions?
- **Cross-discipline application of source-routing** — does the intrinsic-vs-extrinsic source-routing meta-pattern apply to other disciplines beyond articulate? Could downstream loop disciplines (Sensemaking, Decomposition) benefit from similar splits?

### Blocked

- None at this time. MQ4 commitment is meaning-layer-complete; structural-layer follow-up (MUST items) is bounded-scope and applicable upon user authorization.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said for M4-m7 


⏺ /Users/ns/Desktop/projects/native/cognitive_harness/task-define/references/task-define.md

  That's the downstream spec the doc points to at §6 (line 454) and §9 (line 519). 464 lines. The folder name (task-define/)
  stays unchanged per the Bootstrap-lock-simplest deferral — only the file's content gets updated to match the current
  operation framing:

  - "Task-Define" → "Articulate" (operation name + verb-meaning)
  - "MultiScope" → "MultiDepth" + depth-of-meaning rendering + Fixed-2 schema (literal + purpose-wrapped) +
  INCLUDES-with-accuracy rule
  - "/Exploration" → "/surfacing" (upstream-discipline reference)
  - Scale-of-ambition rendering language → depth-of-meaning rendering vocabulary


but we are not caring about task-define.md anymore... we started from scratch and focusing only artituclate simple...


this error situtaion is what articulate simple should handle as well...


i guess what we care about and not care about should be stated somehow by articulate simple when we create a query.. do you understand me? lets check if we current devdocs/how_articulate_simple_should_be.md has such mechanism or not. and if we want to have how it should be (meaning layer)
```

</details>
