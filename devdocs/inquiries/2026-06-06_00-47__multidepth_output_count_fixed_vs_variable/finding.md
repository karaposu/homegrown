---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-06-05_22-44__multiscope_depth_of_meaning_correction/finding.md
---
# Finding: MultiDepth — Output Count: Fixed-2 at Bootstrap; Bounded-Variable Deferred

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-05_22-44__multiscope_depth_of_meaning_correction/finding.md`

**Revision trigger:** User question following the prior finding. The prior finding committed to depth-of-meaning rendering essence + variable purpose-chain depth (SV6-6) + INCLUDES-with-accuracy rule, but did not operationalize the count question — how many outputs MultiDepth should emit per invocation. The user asked: *"still i am thinking why just 2 ? we can have literal, purpose-wrapped, bigger-purpose wrapped ... what are our options"* and *"lets try to find which option is better, or just 2 fixed is better?"* This inquiry adjudicates among 4 candidate schemas (Fixed-2 / Fixed-3 / Variable-N / Bounded-variable) at the structural layer.

**What's preserved:**
- All 7 inherited commitments from the prior finding: depth-of-meaning rendering essence; INCLUDES-with-accuracy load-bearing rule; MQ3 endpoint vs MultiDepth path distinction; render-as-composition operation type; variable purpose-chain depth (SV6-6); substrate-compliance (anti-fetching); lightness-as-feature
- Operation rename context (MultiScope → MultiDepth) inherited from the user's question and the prior finding's corrected essence
- Bootstrap-state principle (P1) inherited from the broader task-define inquiry chain

**What's changed:**
- **Output count locked at Fixed-2 at Bootstrap.** The prior finding's variable-depth commitment is preserved but **operationalized via internal-text-depth** (chain depth varies inside big-scope's text), not via variable output count. Output count is fixed at 2 (literal + big).
- **Two candidate schemas KILLED at Bootstrap:** Fixed-3 (padding-as-identity-failure on shallow chains; substrate-violation when LLM hallucinates a 3rd purpose level) and Variable-N (reception-rule violation; unbounded count breaks 20-02's bounded scope-spectrum hypothesis-set).
- **One candidate schema DEFERRED:** Bounded-variable (2-to-4 outputs) is structurally viable but Bootstrap-inappropriate (adds spec-complexity + LLM-judgment burden without empirical evidence justification). Preserved as upgrade path via explicit refinement-trigger.

**What's new:**
- **Internal-text-rendering** as the depth-carrying mechanism for big-scope — chain rendered via causal connectives ("in order to" / "so we can" / equivalents) within a single big-scope output. This is the structural mechanism that lets Fixed-2 preserve variable-depth without adding outputs.
- **Schema-vs-text axis** as meta-pattern — depth-of-meaning rendering lives in expressive mechanism (text composition), not output count. Reusable principle for any future render-operation.
- **Composition-shape distinguishes operations** as meta-pattern — MQ3 = single-output perception of endpoint; MultiDepth = 2-output composition of literal + chain. Output content may overlap (final connective phrase in big-scope ≈ MQ3 endpoint text), but operations are distinguished structurally by output count + composition shape.
- **Bootstrap-lock-simplest with refinement-trigger** as explicit strategy — commit simplest viable schema at Bootstrap (Fixed-2); preserve Bounded-variable upgrade path via observable refinement-trigger (Early Operation evidence of depth-loss across N invocations, suggested N=10-20).
- **Padding-risk as identity-failure** (not just additional cost) — Fixed-3 forces purpose-invention on shallow chains, which is substrate-violation and structural regression to the scale-of-ambition misframing the prior finding corrected.
- **Stability-risk as reception-rule violation** — Variable-N's unbounded count breaks the bounded scope-spectrum hypothesis-set required by 20-02's reception rule.

**Migration:** The §2.4 FULL REVISION soft-MUST inherited from the prior finding now has concrete structural content: Fixed-2 schema + internal-text-rendering as depth-carrier + INCLUDES-with-accuracy on single big-output text + explicit refinement-trigger to Bounded-variable. The §2.2.3 light clarification (also inherited soft-MUST) gains the composition-shape pattern: MQ3 = perception of endpoint (single statement); MultiDepth = render of path (literal + composed chain). Readers consulting the prior finding will see `refines:` from this finding's frontmatter; the prior's substantive commitments survive intact, only the count question is resolved.

---

## Question

From `_branch.md`:

**Question:** Given the just-committed corrected essence (depth-of-meaning rendering with variable purpose-chain depth bounded by relevance + perceivability), how many outputs should MultiDepth emit per invocation — Fixed-2 (current), Fixed-3 (literal + proximate + ultimate), Variable-N (LLM-judged per invocation), or Bounded-variable (2-to-4 with LLM judgment) — when measured against the user's worked example, the lightness-as-feature commitment, the INCLUDES-with-accuracy rule, padding-risk in shallow chains, downstream reception complexity, and structural stability?

**Goal:** A defensible structural decision that preserves the corrected essence (depth-of-meaning + INCLUDES), keeps the operation light, handles the worked example without instability, works under both warm and cold context, and produces a stable enough schema for downstream consumers to operate predictably. Use case: encode in `devdocs/how_articulate_simple_should_be.md` §2.4 FULL REVISION.

**Layer Commitment:** Structural-layer only. Meaning-layer settled by prior (essence is count-agnostic); process-layer downstream of structural choice.

---

## Finding Summary

- **VERDICT = Fixed-2 at Bootstrap; Bounded-variable DEFERRED with explicit refinement-trigger.** MultiDepth emits exactly 2 outputs per invocation: literal-scope + big-scope. Fixed-3 and Variable-N are killed at Bootstrap on structural grounds.

- **Internal-text-rendering is the depth-carrying mechanism.** Big-scope's purpose chain is rendered via causal connectives ("in order to" / "so we can" / equivalents) **within** its text. This is how variable depth (SV6-6 from the prior finding) is preserved without requiring variable output count.

- **Fixed-3 KILLED via padding-as-identity-failure.** Forcing 3 outputs on a shallow chain requires the LLM to hallucinate a 3rd purpose level — substrate-violation (no warm context support for the invented purpose) and structural regression to the scale-of-ambition misframing the prior finding's 4-inquiry chain corrected. Not just additional cost; it's identity-failure.

- **Variable-N KILLED via reception-rule violation.** 20-02's reception rule requires downstream consumers (Rephrase, loop disciplines, user, runner) to receive a bounded scope-spectrum hypothesis-set. Variable-N's unbounded count (1 to N) breaks the bounded-set property; downstream cannot operate predictably with arbitrary output count.

- **Bounded-variable DEFERRED to Early Operation.** Structurally viable (2-to-4 with LLM judgment within bound mitigates both Fixed-3's padding-risk and Variable-N's instability), but Bootstrap-inappropriate. Adds spec-complexity + LLM-judgment burden without empirical evidence justifying. Preserved as upgrade path: if Early Operation evidence shows internal-text-rendering insufficient for depth-observability across N invocations (suggested N=10-20), upgrade to Bounded-variable.

- **INCLUDES-with-accuracy rule applies to single big-output.** Big-scope's text MUST contain the literal task verbatim or near-verbatim before chaining purposes. Load-bearing structural anchor from the prior finding preserved in the single-output schema via spec-level text enforcement.

- **MQ3 distinction preserved by composition-shape.** MQ3 perceives intent endpoint (single statement); MultiDepth renders path (literal + composed chain — 2 outputs). Even when endpoint texts overlap (e.g., big-scope's final connective phrase ≈ MQ3 endpoint), the operations remain structurally distinct: 1-output perception vs 2-output composition.

- **Cold-context behavior:** big-scope text has 1-2 connectives (short chain inference from task + general knowledge). **Warm-context behavior:** big-scope text has 2-N connectives (deeper chain visible from session goals). Output count remains 2; chain depth varies inside big-scope's text per perceivability.

- **Substrate-compliance preserved.** Chain inferred from task statement + general knowledge (cold) or session context already loaded (warm). No fetching. Anti-fetching boundary from the prior finding honored.

- **Lightness preserved.** Render-as-composition adds no sub-machinery. 2 outputs; single-step cognitive work per invocation; spec text minimal.

- **Worked example under Fixed-2:**
  - Small-scope: *"fix the token validation bug discussed"*
  - Big-scope: *"fix login bug due to token validation in order to enable login feature for users, so we can login and test other features"*

  Big-scope INCLUDES small-scope ("fix login bug due to token validation" preserves the literal task) and renders 2 chain-levels via causal connectives ("in order to" / "so we can") within its text. Output count remains 2.

- **Four meta-patterns extracted:**
  1. **Schema-vs-text axis** — depth-of-meaning rendering lives in expressive mechanism (text composition), not output count. Reusable for any render-operation facing count-vs-fidelity tradeoffs.
  2. **Bootstrap-lock-simplest with refinement-trigger** — commit simplest viable now; preserve upgrade path via explicit observable trigger. Reusable Bootstrap-state strategy.
  3. **Composition-shape distinguishes operations** even when output content overlaps. Reusable for operation-coordination questions (any pair of operations producing related outputs).
  4. **Internal-text-rendering as depth-carrier** via causal connectives. Reusable linguistic mechanism for any operation needing depth without output stratification.

---

## Finding

### Small surrounding context

The MultiDepth operation (renamed from MultiScope per the prior finding's corrected essence) is one of 5 operations in articulate_simple, which is a cognitive discipline that runs before /surfacing in the articulate inquiry pipeline. MultiDepth renders a task at multiple depths of meaning-wrapping (depth-of-meaning rendering, per the prior finding's essence-correction). The prior finding settled WHAT MultiDepth IS (essence) but did not settle HOW MANY outputs it emits per invocation. This inquiry addresses that structural question.

The user's question was open-ended: *"still i am thinking why just 2 ? we can have literal, purpose-wrapped, bigger-purpose wrapped"* — they explored a 3-level output structure but also asked *"or just 2 fixed is better?"* The inquiry adjudicates among 4 candidate schemas at the structural layer; the meaning layer is settled by the prior finding.

### 1. Why Fixed-2 wins at Bootstrap

The prior finding committed depth-of-meaning rendering as the essence of MultiDepth — same task at multiple depths of meaning-wrapping. It also committed variable purpose-chain depth bounded by relevance + perceivability (SV6-6) — chain depth varies per invocation.

Variable-depth could be carried two ways: by varying **output count** (more levels = more outputs) or by varying **internal-text-depth** (more levels = more connectives within a single output). The prior finding did not pick between these mechanisms — the essence is count-agnostic at the meaning layer.

At the structural layer, the simplest viable mechanism is internal-text-depth within a single big-scope output. The user's own worked example (preserved in the prior finding) demonstrates the mechanism: *"fix login bug due to token validation in order to enable login feature for users, so we can login and test other features"* — this is one output that carries a 2-level purpose chain via causal connectives ("in order to" / "so we can"). The chain is structurally observable: downstream parses the connectives to perceive depth.

Fixed-2 with internal-text-rendering satisfies all 7 inherited commitments from the prior finding while requiring no additional machinery:
- depth-of-meaning rendering essence — preserved (literal output + big-scope renders depth in text)
- INCLUDES-with-accuracy rule — preserved (big-scope text contains literal task verbatim or near-verbatim)
- MQ3 endpoint vs MultiDepth path distinction — preserved by composition-shape (1-output perception vs 2-output composition)
- render-as-composition operation type — preserved (big-scope is composed text)
- variable purpose-chain depth — preserved via internal-text-depth (cold = 1-2 connectives; warm = 2-N connectives)
- substrate-compliance — preserved (chain inferred from task + general knowledge or warm context; no fetching)
- lightness-as-feature — preserved (2 outputs; single-step cognitive work; no sub-machinery)

The Bootstrap-state principle (inherited from prior task-define inquiries) governs schema choice when no empirical data exists: choose simplest viable; refine with evidence later. Fixed-2 is the simplest viable schema.

### 2. Why Fixed-3 is killed at Bootstrap

Fixed-3 (literal + proximate-purpose + ultimate-purpose) forces 3 outputs per invocation. For tasks with a 2-level or 1-level perceivable purpose chain (which the prior finding's SV6-6 explicitly committed exists), the LLM must either:

(a) Repeat content across outputs (proximate ≈ ultimate when chain is shallow), or
(b) Hallucinate a 3rd purpose level not perceivable from substrate

Option (b) is substrate-violation: the prior finding's anti-fetching commitment (from 20-02) requires the LLM to use only task statement + general knowledge + warm context to infer the chain. Inventing a purpose level beyond what's perceivable violates this boundary.

More structurally: the prior finding identified the **scale-of-ambition framing** as the central misframing that drove a 4-inquiry recurring-misframing pattern. Fixed-3 + shallow chain re-introduces this misframing — the LLM, forced to emit a 3rd level, may stratify outputs along an ambition gradient (small task / medium task / big task) rather than a depth-of-meaning gradient (literal / proximate-purpose / ultimate-purpose-when-perceivable).

This is **identity-failure**, not just additional cost. Fixed-3 is structurally inappropriate at Bootstrap. The padding-risk is asymmetric: Fixed-3 schema FORCES the count; Fixed-2 with internal-text-rendering ADAPTS (LLM emits 1 or 2 connectives based on what's perceivable, without forcing depth that isn't there).

### 3. Why Variable-N is killed at Bootstrap

Variable-N (1 literal + N purpose-wraps, where N is LLM-judged per invocation) maximizes faithfulness to perceived depth but is downstream-incompatible.

The prior finding inherits 20-02's **reception rule**: downstream consumers (Rephrase, loop disciplines, user-choice, runner) receive MultiDepth's outputs as a **bounded scope-spectrum hypothesis-set**. The bounded property is structurally load-bearing — downstream operations require a finite known set of candidates to compare, choose from, or iterate over.

Variable-N's unbounded count (N could be 1 or 10 or 50) breaks the bounded-set property. Downstream cannot operate predictably with arbitrary output count. Rephrase doesn't know how many vocabulary variations to produce; loop disciplines don't know how many candidates to consume; user-choice complexity scales unpredictably; the runner cannot allocate fixed reception scaffolding.

Variable-N is downstream-incompatible at Bootstrap. (If empirical evidence later shows depth-loss in Fixed-2's internal-text-rendering, the upgrade path is to Bounded-variable, which preserves the bounded property while gaining adaptivity — not to unbounded Variable-N.)

### 4. Why Bounded-variable is deferred (not chosen) at Bootstrap

Bounded-variable (2-to-4 outputs with LLM judgment within bound) is the structurally most-flexible viable schema. It mitigates Fixed-3's padding-risk (min=2 not min=3; LLM can stop at 1 purpose-wrap when chain is shallow) and Variable-N's instability (max=4 bounds downstream reception). On aggregate axes, it appears to dominate.

But at Bootstrap-state, two factors disqualify it:

- **Spec-complexity:** Bounded-variable requires §2.4 to specify depth-judgment criteria — when does the LLM emit 2 vs 3 vs 4 outputs? What signals shift from min to max? This adds spec text without empirical evidence determining what the criteria should be.
- **LLM-judgment burden:** the LLM must judge depth per invocation before emitting. Fixed-2 has no judgment burden at the count level — depth is judged inside the big-scope text via connective count, which is a natural linguistic mechanism.

The Bootstrap-lock-simplest principle (inherited from prior task-define inquiries) governs: when no empirical data exists, choose simplest viable; refine later when evidence justifies. Bounded-variable's additional complexity is not Bootstrap-justified.

**Refinement-trigger to Bounded-variable:** if Early Operation evidence (across ~10-20 MultiDepth invocations) shows that Fixed-2's internal-text-rendering produces depth-loss — downstream consumers systematically miss chain levels, or the LLM compresses deep chains beyond usable observability — the upgrade path to Bounded-variable is preserved. The refinement-trigger is observable + condition-bound (per the prior finding's gate-specificity style rule).

### 5. The corrected schema in spec terms

§2.4 of `devdocs/how_articulate_simple_should_be.md` should specify:

> **MultiDepth schema (Fixed-2):**
>
> MultiDepth emits exactly 2 outputs per invocation: `literal-scope` and `big-scope`.
>
> - `literal-scope` is the task at its narrowest accurate framing — what is being asked, expressed precisely, with no purpose wrapping.
> - `big-scope` is the literal task INCLUDED in its purpose context chain. Big-scope's text MUST contain the literal task verbatim or near-verbatim, then chain its perceived purposes via causal connectives ("in order to" / "so we can" / equivalents).
>
> **Internal-text-depth:** chain depth varies inside big-scope's text per perceivability — cold-context invocations produce 1-2 connectives (short chain inference from task + general knowledge); warm-context invocations produce 2-N connectives (deeper chain from session goals). Output count remains 2; depth lives in text.
>
> **INCLUDES-with-accuracy** is load-bearing: big-scope always contains small-scope faithfully. This prevents drift to different-task framings (the scale-of-ambition misframing corrected in the prior finding).
>
> **Substrate-compliance:** chain is inferred from task statement + general knowledge (cold) or session context already loaded (warm). No fetching.
>
> **Refinement-trigger to Bounded-variable:** if Early Operation evidence (approximately 10-20 invocations) shows depth-loss in internal-text-rendering — downstream consumers systematically missing chain levels — upgrade to Bounded-variable (2-to-4 outputs with LLM judgment within bound).

### 6. MQ3 light clarification

§2.2.3 (MQ3 section) should add a light clarification of the endpoint-vs-path distinction:

> **MQ3 perceives intent endpoint** (single statement of perceived user intent behind the surface ask). **MultiDepth renders path** (literal + composed chain — 2 outputs). The two operations couple structurally: MQ3's endpoint may serve as the anchor that MultiDepth's big-scope renders toward. They do not duplicate — composition-shape distinguishes them: MQ3's output is single-statement perception; MultiDepth's output is 2-statement composition (literal + chain). Even when MQ3's endpoint text overlaps with MultiDepth's big-scope final connective phrase, the operations remain structurally distinct.

### 7. Four meta-patterns extracted

This finding extracts four reusable meta-patterns:

- **Schema-vs-text axis** — depth-of-meaning rendering does NOT require multi-output structural stratification. Internal-text-rendering via standard linguistic devices (causal connectives, in this case) can carry depth within a single output. This pattern applies to any render-operation facing a count-vs-fidelity tradeoff.

- **Bootstrap-lock-simplest with refinement-trigger** — when no empirical data exists, commit the simplest viable schema; preserve upgrade paths via explicit observable refinement-triggers. This pattern aligns with the project's 5-stage Bootstrap → Early Operation → Mature Operation calibration trajectory.

- **Composition-shape distinguishes operations** — when two operations produce related outputs, the operations can remain structurally distinct via different composition shapes (output count + structure), even when output content overlaps. MQ3 (single-output perception) vs MultiDepth (2-output composition) is one instance; the pattern generalizes.

- **Internal-text-rendering as depth-carrier** — causal connectives within a single output text can carry multi-level depth without stratifying outputs. This is a standard linguistic mechanism (chained causal connectives appear in academic writing, narrative grammar, philosophical exposition) and is naturally produced by LLMs. The pattern is available for any operation needing depth representation without output multiplication.

These meta-patterns are documented for future inquiry-chain reference — particularly when future operations face similar count-vs-fidelity decisions.

### 8. Honest acknowledgment of the question-shift

The user's question opened with exploration of a 3-level structure ("3 levels but ofc we need better names"). The finding does not adopt that structure at Bootstrap. This is not a dismissal:

- The user's 3-level vision is preserved structurally via Fixed-2's internal-text-depth — big-scope text CAN carry 2-3 chain levels via 2-3 connectives.
- The user's option as an output-count structure is preserved as the Bounded-variable upgrade path, with explicit refinement-trigger.
- The user's open question ("or just 2 fixed is better?") is the question this finding answers: at Bootstrap, yes — Fixed-2 is better, because internal-text-rendering captures depth at lower spec-complexity and judgment-burden.

The user's exploration of 3 levels was the load-bearing question that drove this inquiry. The answer honors it by adjudicating the count question explicitly, not by silently keeping the previous default.

---

## Inherited Commitments Re-test

This finding declares `refines:` of `devdocs/inquiries/2026-06-05_22-44__multiscope_depth_of_meaning_correction/finding.md` and inherits 7 commitments. Per CONCLUDE's enforcement (N≥3 commitments inherited), each is re-tested.

### Commitments from `devdocs/inquiries/2026-06-05_22-44__multiscope_depth_of_meaning_correction/finding.md`

- **Commitment:** Depth-of-meaning rendering essence (MultiDepth renders same task at multiple depths of meaning-wrapping).
  - **Re-test status:** **RE-TESTED**
  - **Evidence:** Fixed-2 schema preserves the essence via internal-text-depth — big-scope's text carries multiple meaning-depths via causal connectives. The essence is count-agnostic at the meaning layer (sensemaking A8 in this inquiry verified this explicitly); structural choice (output count) operationalizes via internal-text-rendering. Verified in this inquiry's sensemaking SV6-3 + decomposition VK10 + critique D8 STRONG PASS.

- **Commitment:** INCLUDES-with-accuracy rule (big-scope always contains small-scope faithfully).
  - **Re-test status:** **RE-TESTED**
  - **Evidence:** Fixed-2's big-scope text MUST contain literal task verbatim or near-verbatim (VK11 in decomposition); spec-level enforcement preserves the load-bearing rule on a single big-output. The rule's application shifts from "across multiple level-outputs" to "within single big-output text" but the structural property — small fully contained in big — is preserved. Verified in critique D10 STRONG PASS.

- **Commitment:** MQ3 endpoint vs MultiDepth path distinction (preserved by composition-shape).
  - **Re-test status:** **RE-TESTED**
  - **Evidence:** Fixed-2's 2-output composition (literal + composed big-scope) distinguishes from MQ3's 1-output perception structurally — by output count and composition presence. Endpoint text may overlap (big-scope final connective ≈ MQ3 endpoint), but operations remain distinct. Sensemaking A10 + decomposition VK14+VK15 + critique D15 PASS. The distinction is preserved (and in some respects strengthened by the composition-shape framing this inquiry adds).

- **Commitment:** Render-as-composition operation type (OBJECT-level cognitive operation; from 19-17 precedent).
  - **Re-test status:** **RE-TESTED**
  - **Evidence:** Fixed-2's big-scope IS the rendered composition (literal task + composed chain via connectives). Render-as-composition is the cognitive operation type at OBJECT level. The single-output rendering is consistent with the operation type — composition lives within the output text, parallel to Deconstruct's render-as-tuple (19-17 precedent). Verified in decomposition VK10 + innovation P2 mechanism applications + critique D2 PASS.

- **Commitment:** Variable purpose-chain depth bounded by relevance + perceivability (SV6-6 from prior).
  - **Re-test status:** **RE-TESTED**
  - **Evidence:** Variable depth is preserved via internal-text-depth — chain depth varies inside big-scope's text per perceivability. Cold-context = 1-2 connectives; warm-context = 2-N connectives. The variability lives in connective count within single text, not in output count. Verified in sensemaking SV6-3 + decomposition VK12 + critique D8 STRONG PASS. The prior commitment's substantive property (variable depth) survives; only the carrier mechanism is operationalized.

- **Commitment:** Substrate-compliance preserved (anti-fetching boundary from 20-02).
  - **Re-test status:** **RE-TESTED**
  - **Evidence:** Fixed-2's chain inference uses task statement + general knowledge (cold) or session context already loaded (warm); no fetching required. Decomposition VK13 specifies substrate basis explicitly. Critique D11 PASS. Anti-fetching boundary honored under chosen schema.

- **Commitment:** Lightness-as-feature preserved (no machinery beyond render-as-composition).
  - **Re-test status:** **RE-TESTED**
  - **Evidence:** Fixed-2 emits 2 outputs (matches the prior baseline); single-step cognitive work per invocation; no judgment burden at count-level (depth is judged inside text via natural linguistic mechanism); spec text minimal. Critique D12 PASS. Lightness preserved.

### Variable purpose-chain depth dual-source provenance

This inquiry's depth-of-meaning rendering essence inherits both from the prior finding's SV6-2 essence commitment AND from the prior finding's SV6-6 variable-depth commitment. The schema choice (Fixed-2 with internal-text-depth) operationalizes both: the essence (depth-of-meaning) is rendered at variable depth (SV6-6) inside a single big-output text. The two commitments survive together; they are not in tension under the Fixed-2 schema.

All 7 inherited commitments **RE-TESTED with PASS**. None flagged INHERITED-WITHOUT-RE-TEST.

---

## Next Actions

### MUST

- **What:** Revise `devdocs/how_articulate_simple_should_be.md` §2.4 with Fixed-2 schema content per Section 5 of this finding (literal + big-scope with internal-text-rendering + causal connectives + INCLUDES rule on big-output text + cold/warm context behavior + substrate-compliance + refinement-trigger to Bounded-variable). This is the structural follow-up flagged as soft-MUST in the prior finding, now with concrete content.
  - **Who:** structural-layer follow-up author / explainer-doc maintainer
  - **Gate:** condition-bound — apply when user is ready to commit the structural revision
  - **Why:** without §2.4 revision, the structural commitment exists only in this finding. **Soft MUST** — the structural commitment stands, but finding-vs-spec drift accumulates.

- **What:** When §2.4 revision is authored, include both a shallow-chain worked example (e.g., "rename foo to bar" → small + big with 1 connective like "to improve readability") AND the user's deep-chain worked example (with 2 connectives "in order to" / "so we can") to demonstrate variable-internal-depth.
  - **Who:** structural-layer follow-up author
  - **Gate:** condition-bound — apply alongside §2.4 revision
  - **Why:** without paired examples, readers may not internalize the variable-internal-depth principle. The shallow/deep contrast demonstrates that Fixed-2 absorbs variable depth in text without forcing fixed structure (per critique sub-finding 1).

- **What:** When §2.2.3 (MQ3 section) is revised per the prior finding's soft-MUST, explicitly state "composition-shape distinguishes operations" pattern — MQ3 = single-output perception; MultiDepth = 2-output composition; output content may overlap but composition-shape distinguishes structurally.
  - **Who:** structural-layer follow-up author
  - **Gate:** condition-bound — apply alongside §2.2.3 revision (inherited from prior finding)
  - **Why:** prevents future readers from misperceiving MQ3 + MultiDepth as overlapping work when their endpoint texts overlap (per critique sub-finding 2)

### COULD

- **What:** Specify concrete N in the refinement-trigger ("Early Operation evidence across N invocations"). Suggested N = 10-20 (matches the project's Early Operation phase threshold from prior task-define inquiries).
  - **Who:** structural-layer follow-up author or calibration-infrastructure maintainer
  - **Gate:** condition-bound — apply alongside §2.4 revision
  - **Why:** strengthens refinement-trigger observability per critique sub-finding 3. The condition-bound trigger is already valid; specifying N makes it more directly observable.

- **What:** Add a cross-inquiry note on the **schema-vs-text axis** as a project-level meta-pattern. Document: depth-of-meaning rendering does NOT require multi-output structural stratification; internal-text-rendering via standard linguistic devices can carry depth. Useful for future render-operations facing similar count-vs-fidelity tradeoffs.
  - **Who:** finding maintainer or project architect
  - **Gate:** condition-bound — when project-level meta-pattern documentation is valuable
  - **Why:** captures reusable principle for future inquiries (per critique sub-finding 4). Particularly valuable if future operations face similar render/composition design questions.

- **What:** Document the **Bootstrap-lock-simplest with refinement-trigger** strategy as a reusable Bootstrap-state strategy in the project's task-define inquiry chain reference.
  - **Who:** project architect or future task-define meta-inquiry
  - **Gate:** condition-bound — when reusable Bootstrap strategies need explicit documentation
  - **Why:** aligns with the project's 5-stage Bootstrap → Early Operation → Mature Operation calibration trajectory; documents the specific schema-decision strategy that emerges from this inquiry.

- **What:** At Early Operation (~10-20 MultiDepth invocations), monitor (a) whether LLMs reliably apply INCLUDES-with-accuracy on big-output text, (b) whether causal connectives produce observable depth in big-scope text, (c) whether cold/warm context behavior matches the spec (1-2 vs 2-N connectives), (d) whether downstream consumers can parse depth from connectives.
  - **Who:** calibration-infrastructure maintainer
  - **Gate:** observable — after ~10-20 invocations
  - **Why:** the refinement-trigger to Bounded-variable depends on Early Operation evidence; monitoring frames what evidence counts.

### DEFERRED

- **What:** Bounded-variable (2-to-4 outputs with LLM judgment within bound) upgrade. Spec would specify depth-judgment criteria; LLM would emit 2-to-4 outputs per invocation based on perceived depth.
  - **Gate:** condition-bound — when Early Operation evidence (approximately 10-20 invocations) shows internal-text-rendering produces depth-loss (downstream consumers systematically miss chain levels OR deep chains compress beyond observability)
  - **Why (if revived):** Bounded-variable mitigates both Fixed-3's padding-risk (min=2 allows shallow chains) and Variable-N's instability (max=4 preserves bounded reception). At empirical revival, the upgrade path is structurally preserved.

- **What:** Pass-2 MultiDepth output count inquiry (output count under articulate-two-pass form when /surfacing has returned project material). Deferred per the prior finding's deferred pass-2 essence inquiry.
  - **Gate:** condition-bound — when user develops articulate-two-pass further OR observable from Early Operation evidence
  - **Why (if revived):** pass-2 may introduce different count considerations (e.g., surfaced material may provide explicit purpose chain that doesn't need inference). Pass-2 may inherit the Fixed-2 default but doesn't pre-decide.

---

## Reasoning

### Why Fixed-2 (not Bounded-variable) at Bootstrap

The sensemaking SV4 (clarified understanding) revealed: at Bootstrap-state, the simplest viable schema wins. Fixed-2 is the simplest viable schema among the 4 candidates because:

1. It satisfies all 7 inherited hard commitments (verified in `## Inherited Commitments Re-test` above)
2. Variable-depth (SV6-6 from prior) is preserved via TEXT-INTERNAL chain (the user's own worked example does this implicitly)
3. Depth-observability is preserved via causal connectives within big-scope text — downstream parses "in order to" / "so we can" to perceive depth
4. Bootstrap-state principle + Phase/Calibration-State perspective both favor simplest viable
5. Fixed-2 is calibration-easy and refinement-friendly — can switch to Bounded-variable later with empirical evidence

Bounded-variable (the most likely alternative) is second-best IF empirical evidence later shows internal-text-rendering insufficient. Choosing Bounded-variable speculatively at Bootstrap = false confidence; the Bootstrap-lock-simplest principle (P1 from prior task-define inquiries) explicitly governs.

### Why Fixed-3 is identity-failure, not just additional cost

The prior finding (22-44) identified the **recurring-misframing pattern**: a 4-inquiry chain on MultiScope (now MultiDepth) where the LLM and inquiry chain repeatedly framed scope-rendering as scale-of-ambition (different tasks at different sizes) when the structurally-correct framing is depth-of-meaning (same task at different depths). The user-correction caught the misframing.

Fixed-3 + shallow chain re-introduces the same misframing structurally: forced to emit a 3rd level, the LLM may stratify outputs along an ambition gradient rather than a depth-of-meaning gradient. This is **identity-failure** — structural regression to the corrected misframing.

The asymmetry is the critical point: Fixed-3 FORCES count; Fixed-2 with internal-text-rendering ADAPTS. Internal-text-rendering allows the LLM to emit 1 connective on shallow chains naturally (no forcing); Fixed-3 has no such adaptive mechanism. The padding-risk under Fixed-3 is structurally tied to the schema's forced-count property; the padding-risk under Fixed-2 + internal-text-rendering is bounded by perceivability (the LLM emits what's perceivable).

### Why Variable-N's reception-rule violation is downstream-critical

The prior finding inherits 20-02's reception rule: downstream consumers receive MultiDepth's outputs as a bounded scope-spectrum hypothesis-set. The bounded property is load-bearing because:

- Rephrase varies vocabulary across a known set of candidates
- User-choice requires a bounded set to choose from
- Loop disciplines (Sensemaking, Decomposition, Innovation, Critique) consume MultiDepth's outputs as part of articulate's output set
- Runner-level reception scaffolding allocates resources per output

Variable-N's unbounded count breaks all four. The reception-rule violation is not a hypothetical — it directly breaks 4 downstream consumption patterns. Bounded-variable (which preserves bounded reception while gaining adaptivity) is the structurally-correct upgrade path; pure Variable-N is downstream-incompatible.

### Sub-findings from critique (incorporated)

- §2.4 worked examples should include both shallow-chain and deep-chain illustrations to demonstrate variable-internal-depth (P2 critique sub-finding → MUST item 2)
- §2.2.3 "composition-shape distinguishes operations" pattern should be explicit (P3 critique sub-finding → MUST item 3)
- Refinement-trigger could specify concrete N (e.g., 10-20) for Early Operation evidence threshold (P3 critique sub-finding → COULD item 1)
- Cross-inquiry note on schema-vs-text axis as meta-pattern (Assembly critique sub-finding → COULD item 2)

### Why this finding stays narrow on the question-shift

The user's question explored a 3-level structure but also asked "or just 2 fixed is better?" The finding answers the schema-level question (2 fixed is better at Bootstrap) and preserves the 3-level vision structurally via internal-text-depth (big-scope can render 2-3 chain levels via 2-3 connectives within text). This is not a dismissal of the user's exploration — it's an honest structural adjudication that the depth question (which the 3-level structure addresses) is separable from the output-count question (which Fixed-2 answers).

Future inquiries on the depth-judgment-criteria question (when LLM perceives 2 vs 3 chain levels at runtime) are process-layer and downstream of this structural decision.

---

## Open Questions

### Monitoring

- After ~10-20 MultiDepth invocations (Early Operation), monitor whether LLMs reliably apply INCLUDES-with-accuracy on big-output text
- Monitor whether causal connectives produce observable depth in big-scope text (downstream parses depth correctly)
- Monitor whether cold/warm context behavior matches the spec (1-2 connectives cold; 2-N warm)
- Monitor for any signs of identity-failure (LLM drift toward scale-of-ambition framing even within Fixed-2's text)

### Refinement Triggers

- **Bounded-variable upgrade trigger:** Early Operation evidence (across ~10-20 invocations) shows internal-text-rendering produces depth-loss — downstream consumers systematically missing chain levels OR deep chains compressing beyond observability
- **MQ3-MultiDepth blur trigger:** if downstream consumers in practice conflate MQ3 endpoint with MultiDepth big-scope final connective phrase, §2.2.3 may need stronger structural-distinction language
- **Internal-text-rendering reliability trigger:** if LLMs systematically fail to use causal connectives in big-scope text (instead producing prose without explicit chain markers), §2.4 may need stronger guidance or enforcement language
- **§2.4 inadequacy trigger:** if the chosen Fixed-2 schema causes user-reported confusion or downstream operational difficulty, the schema choice may need revisiting

### Research Frontiers

- Does the **schema-vs-text axis** meta-pattern generalize beyond MultiDepth to other articulate operations facing count-vs-fidelity tradeoffs?
- Does the **composition-shape distinguishes operations** meta-pattern apply to other operation-pairs in the broader cognitive_harness project?
- What is MultiDepth's count at articulate-two-pass (post-surfacing) — does the corrected Fixed-2 schema apply or does pass-2 introduce its own count considerations?
- Does **internal-text-rendering as depth-carrier** apply to other operations needing depth without output multiplication (e.g., future render operations)?

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Want me to test the worked example against 
  fixed-3, variable-N, and bounded-variable to see which one keeps the operation light?

lets try to find which option is better, or just 2 fixed is better?
```

Note: this input followed an extended conversation in which the user explored a 3-level output structure ("we can have literal, purpose-wrapped, bigger-purpose wrapped"), asked for better naming options, then opened the structural question this inquiry addresses ("still i am thinking why just 2 ?"). The structural question is the load-bearing inquiry.

</details>
