# Branch: MultiDepth's Purpose-Wrapped — Cascade 1 Resolution

## Question

- **Subject:** MultiDepth's purpose-wrapped output (the second of MultiDepth's two outputs per §2.4 of `devdocs/how_articulate_simple_should_be.md`). The just-completed `2026-06-06_21-52` finding named this as Cascade 1 — flagged structurally but not pre-decided. Under §2.4 as currently committed, MultiDepth emits two outputs per item: (a) literal (the task at narrowest accurate framing) and (b) purpose-wrapped (the literal task INCLUDED in its perceived purpose chain via causal connectives like "in order to" / "so we can"). The purpose-wrapped output is a COMMITMENT — the LLM commits to a perceived purpose chain inferred from the task statement + general knowledge (cold context) or session goals (warm context). The 21-52 finding's substrate-bounded + downstream-safety argument applies symmetrically: articulate_simple runs BEFORE /surfacing has provided project context; without project context, the perceived purpose chain is a guess; downstream consumers (the runner reading the purpose-wrapped to bias /surfacing's input toward the perceived purpose; Rephrase varying within the purpose-wrapped frame; the user reading the framing to verify it) act on the guessed purpose; downstream framing is polluted with a pre-context guess.

- **Action:** decide / synthesize-with-correction — produce a confident verdict on whether MultiDepth's purpose-wrapped suffers the substrate-bounded + downstream-safety critique, and if so, what the right resolution is. The 21-52 finding's deferred candidates are: (a) REFINE to purpose-ambiguity-identification (no committed purpose chain; just identified openness about the task's purpose), or (b) DEFER to articulate2 post-/surfacing (purpose-wrapped becomes an articulate2 emission only, after /surfacing has provided project context). A third candidate (c) PRESERVE with structural justification (defend purpose-wrapped as different in kind from MQ commitments) is also live — the inquiry must engage it rather than dismiss it.

- **Level:** discipline-operation level (MultiDepth as one of the 5 operations within articulate_simple). The verdict has cascading implications for: §2.4 (MultiDepth's stated essence + INCLUDES-with-accuracy rule + cold/warm context depth-variation + Refinement-trigger to Bounded-variable); §2.5 (Rephrase, which currently varies within the perceived scope+purpose frame); §3 (the intra-discipline flow — Stage 3's MultiDepth output feeds Stage 4 Rephrase); the meta-pattern transfer test from 21-52 (substrate-contamination-vs-downstream-bias).

- **Observation targets** (preserved from the user's input as separate items):
  1. **Is MultiDepth's purpose-wrapped a commitment in the same KIND as MQ commitments?** §2.4 currently says "the LLM commits to a perceived purpose"; the substrate-bounded critique would treat this as same-shape contamination. But MultiDepth's purpose-wrapped also has INCLUDES-with-accuracy as a structural anchor (preserves literal task verbatim) — whether the anchor changes the contamination calculus must be examined.
  2. **Does the same substrate-bounded critique apply?** §2.4's substrate-compliance paragraph already says "MultiDepth does not fetch from the project. The substrate boundary is the same as elsewhere in articulate." If the substrate is the same, the contamination should be the same. But the cold-context worked example ("rename foo to bar to improve readability") suggests purpose chains may be SHALLOWER than MQ commitments (one connective; general knowledge inference), which may change the danger weight.
  3. **Are downstream consumers polluted by the guessed purpose?** Explicit downstream consumers per §2.4 + §3: (a) Rephrase varies within the purpose-wrapped frame; (b) the runner reads purpose-wrapped to bias /surfacing's input formulation toward the perceived purpose; (c) the user reads the framing to verify it. Each consumer's bias-at-action must be tested under the user's substrate-bounded argument.
  4. **Does it refine to "purpose-ambiguity-identification"?** Symmetric to MQ refinement from 21-52: the 2-shape answer-range was {identified-ambiguity / explicit-empty}. The candidate is: purpose-wrapped refines to identified-purpose-ambiguities-list (e.g., "purpose ambiguity: 'refactor the authentication module' could be for security hardening, for adding new auth methods, for cleanup of tech debt; the perceivable purposes from the task statement diverge significantly") + explicit-empty (when no purpose-ambiguity is perceivable). Whether this refinement is structurally coherent must be tested.
  5. **Does it defer to articulate2?** Alternative candidate: purpose-wrapped is eliminated from articulate_simple stage entirely; emerges only at articulate2 post-/surfacing where project context grounds the purpose chain. This would simplify articulate_simple but cascade into the §9 two-pass deferral (Cascade 3 from 21-52) — making the two-pass design structurally necessary.
  6. **Cascading implications for §2.4 + §2.5 + §3.** If MultiDepth refines, what specifically changes in §2.4 (INCLUDES rule survives? cold/warm depth-variation survives? refinement-trigger to bounded-variable survives?); in §2.5 (Rephrase's purpose-frame constraint disappears alongside MQ commitments); in §3 (does Stage 3 still emit a two-output bundle, or change shape).

- **Deliverable shape:** confident verdict (REFINE-to-ambiguity-identification / DEFER-to-articulate2 / PRESERVE-with-structural-justification / HYBRID-split-by-context-warmth) with structural justification engaging all three candidates, grounded in: (a) the doc's §2.4 substrate-compliance paragraph + INCLUDES rule + cold/warm context distinction; (b) the 21-52 finding's substrate-bounded + downstream-safety chain + scope-mismatch crux + substrate-contamination-vs-downstream-bias meta-pattern; (c) cascading implications for §2.5 + §3 + §9 + the meta-pattern transfer test. If verdict requires cascade follow-ups, name them.

**Question statement:** Given that the just-completed `2026-06-06_21-52` finding flagged MultiDepth's purpose-wrapped output as Cascade 1 (the same substrate-bounded + downstream-safety critique that forced MQ answer-range to narrow from 4-shape to 2-shape applies to MultiDepth's purpose-wrapped because the LLM commits to a perceived purpose chain without project context), and given §2.4 currently emits a two-output bundle (literal + purpose-wrapped with cold/warm-context depth-variation, anchored by the INCLUDES-with-accuracy rule), is MultiDepth's purpose-wrapped structurally same-kind contamination requiring the same correction, and if so is the right verdict REFINE-to-purpose-ambiguity-identification (symmetric to MQ's 2-shape), DEFER-to-articulate2 post-/surfacing (eliminate purpose-wrapped from articulate_simple stage), PRESERVE-with-structural-justification (argue the INCLUDES anchor + general-knowledge-inferable chains differ from MQ commitments), or HYBRID (e.g., cold-context defer; warm-context preserve)?

## Goal

- **Criterion:** A confident verdict engaging all three candidates with structural seriousness — not dismissing PRESERVE without testing whether INCLUDES anchor changes the contamination calculus, and not blindly extending REFINE without testing whether purpose-wrapped is in fact same-kind as MQ commitments. The verdict must name cascading implications for §2.4 + §2.5 + §3 and engage the §9 two-pass deferral pressure inherited from 21-52.
- **Use case:** Settle whether MultiDepth's purpose-wrapped needs the same correction MQ commitments needed; produce a verdict the user can act on for doc revision.
- **Desired outcome:** A clear verdict + named cascading implications + Inherited Commitments Re-test of all prior MultiDepth commitments and the 21-52 chain.
- **What would fail:**
  (a) accepting REFINE-by-analogy without testing whether INCLUDES + general-knowledge-inferable chains differ structurally from MQ scope-axis commitments;
  (b) accepting PRESERVE by retreating to "purpose chains are different from scope commitments" without engaging the substrate-bounded chain explicitly;
  (c) accepting DEFER without engaging whether literal-only emission at articulate_simple stage is enough to support /surfacing's input formulation;
  (d) ignoring the §9 two-pass deferral pressure (Cascade 3 from 21-52) — if DEFER is the verdict, §9 must be flagged honestly;
  (e) treating this as a structural-layer question (output count, schema shape) when the layer-commitment is meaning (what KIND of content purpose-wrapped IS);
  (f) failing to test whether the substrate-contamination-vs-downstream-bias meta-pattern from 21-52 transfers cleanly to MultiDepth (the meta-pattern's transferability claim under live test).

## Source Input

```text
based on devdocs/inquiries/2026-06-06_21-52__no_commitments_pre_surfacing_safety/finding.md 

u said 

ascade 1 — MultiDepth's purpose-wrapped: under §2.4, MultiDepth emits a purpose-wrapped output that includes the LLM's perceived purpose chain. This is a commitment — the LLM commits to a perceived purpose. Same substrate-bounded critique applies: without project context, the perceived purpose is a guess. Downstream consumers (the runner reading the purpose-wrapped to bias /surfacing toward the perceived purpose; the user reading the framing to verify it) act on the guessed purpose. Follow-up inquiry needed to determine whether MultiDepth's purpose-wrapped refines to purpose-ambiguity-identification

lets dive deeper into this one
```

## Scope Check

Question covers goal. The 6 observation targets preserve the user's distinct interrogation axes (same-kind / substrate-critique-applies / downstream-pollution / refinement-candidate / defer-candidate / cascading-implications). Specific-vs-pattern check: the user's question is specific to Cascade 1 (MultiDepth) per their explicit request "lets dive deeper into this one"; the broader pattern (do all upstream-discipline commitments under cold context suffer the same critique) is out of scope for THIS inquiry but is the meta-pattern transfer test deferred from 21-52.

## Layer Commitment

**Primary layer: MEANING.** The question is what KIND of content MultiDepth's purpose-wrapped output IS at meaning layer — whether it is a commitment (same kind as MQ scope-axis commitments) or some other content shape (ambiguity-identification / literal-only / context-conditional). This is symmetric to the 21-52 inquiry's meaning-layer test of MQ answer-range. Settling the meaning layer is prior to any structural revision of §2.4's output schema.

**Out of scope:**
- **Structural** — specific output-schema changes to §2.4 (whether output count stays at 2, drops to 1, becomes variable). Out per Layer Commitment until meaning is settled.
- **Process** — how the LLM detects warm-vs-cold context at runtime, when to emit identified-purpose-ambiguities vs explicit-empty. Out per Layer Commitment.

## Synthesis Trigger

This inquiry **SYNTHESIZES** commitments from prior outputs and tests them against the user's Cascade 1 question:

- `devdocs/inquiries/2026-06-06_21-52__no_commitments_pre_surfacing_safety/finding.md` — just-completed REFINE verdict; MQ answer-range narrowed to 2-shape; Cascade 1 NAMED but not pre-decided; substrate-bounded chain + scope-mismatch crux + substrate-contamination-vs-downstream-bias meta-pattern. UNDER DIRECT EXTENSION TEST (does the meta-pattern transfer to MultiDepth?).
- `devdocs/inquiries/2026-06-06_20-29__meta_ambiguity_vs_meta_question/finding.md` — F3 Hybrid Q-of-ambiguities (now narrowed by 21-52); identified-ambiguity as first-class answer shape. UNDER INDIRECT TEST (does purpose-ambiguity-identification track the same shape?).
- `devdocs/inquiries/2026-06-06_19-06__meta_question_is_question_not_answer/finding.md` — Q-mandatory + asymmetric-naming meta-pattern. UNDER INDIRECT TEST (does MultiDepth's name "MultiDepth" obligate a similar identity check? The name implies depth-rendering, not commitment to specific perceived purpose).
- `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md` — three-layer model + empty-as-content principle. UNDER TEST (does empty-as-content extend to purpose-ambiguity emission?).
- `devdocs/inquiries/2026-06-06_11-16__mqs_as_seed_qa_overreach_two_pass/finding.md` — PERMISSION-not-CONSTRAINT (now scope-refined by 21-52). UNDER TEST — does PERMISSION apply to MultiDepth's purpose-wrapped at articulate_simple stage, or is it the same scope-mismatch?
- `devdocs/inquiries/2026-06-06_00-47__multidepth_output_count_fixed_vs_variable/finding.md` — Fixed-2 schema (literal + purpose-wrapped) + internal-text-rendering as depth-carrier + Refinement-trigger to Bounded-variable. UNDER DIRECT TEST — if purpose-wrapped becomes purpose-ambiguity-identification, does Fixed-2 schema survive? Does the depth-carrier mechanism survive?
- `devdocs/inquiries/2026-06-05_22-44__multiscope_depth_of_meaning_correction/finding.md` — MultiDepth corrected essence (depth-of-meaning rendering + INCLUDES-with-accuracy rule + MQ3 endpoint-vs-path distinction). UNDER DIRECT TEST — does "depth-of-meaning rendering" survive if there's no committed purpose to render? Does INCLUDES-with-accuracy still apply if purpose-wrapped becomes ambiguity-identification?
- `devdocs/how_articulate_simple_should_be.md` §2.4 (MultiDepth full spec) + §2.5 (Rephrase's MQ-constrains-Rephrase relation) + §3 (intra-discipline flow Stage 3) + §9 (two-pass deferral pressure from 21-52 Cascade 3). UNDER TEST.

Each prior carries commitments this inquiry will inherit, re-test, or revise. CONCLUDE will require an `## Inherited Commitments Re-test` section. Plan Sensemaking + Critique to do actual re-testing, not just record inheritance.
