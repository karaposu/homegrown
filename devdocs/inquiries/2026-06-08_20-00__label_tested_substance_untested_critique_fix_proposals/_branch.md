# Branch: label_tested_substance_untested_critique_fix_proposals

## Question

The question spans these load-bearing aspects (all preserved):

- **Subject** — The "Label-Tested, Substance-Untested" failure type identified as #3 in `devdocs/top_7_common_critique_failures.md`, in the context of the `/td-critique` discipline at `cognitive_harness/td-critique/`.
- **Action** — diagnose (understand the mechanism with structural precision) THEN design (propose concrete fixes).
- **Level** — discipline-level (modifications to `cognitive_harness/td-critique/SKILL.md` and `references/td-critique.md`).
- **Observation targets** (preserved separately per the multi-clause rule):
  1. The underlying mechanism of Label-Tested, Substance-Untested — what makes it different from existing failure modes (the closest is #3 Nitpicking but as INVERSE per top_7 §3); whether it has a precondition-violation structural relationship paralleling Axis Absence and Inherited-Frame Preservation (or a different relationship); the sub-mechanisms across the 6 corpus instances.
  2. AT LEAST THREE solution proposals at structurally-distinct tiers (surgical / additional / significant) honoring the Axis Absence finding's tier-shape vocabulary.
  3. Plus/minuses per proposal (trade-off analysis using the inherited 5-or-6 trade-off axes).
- **Deliverable shape** — design with N≥3 alternative proposals + explicit per-proposal trade-off analysis + compositional analysis with BOTH prior inquiries (Axis Absence + Inherited-Frame Preservation).

**The question.** What is the underlying structural mechanism of "Label-Tested, Substance-Untested" (specifically: how it differs from existing td-critique.md failure modes; whether the precondition-violation framing from the two prior sibling inquiries applies and at what layer; what sub-mechanisms produce the failure; how dimensions can be operationally restricted to surface-level testing while substance goes unprobed), and what are at least 3 structurally-distinct solution proposals — surgical / additional / significant — for amending `td-critique.md` that would fix it, with explicit plus/minus trade-off analysis per proposal AND compositional analysis with the Axis Absence + Inherited-Frame Preservation proposals?

## Goal

- **Criterion** — proposals must be (a) actionable as concrete edits to specific sections of `td-critique.md`, (b) grounded against the 6 corpus instances from top_7 §3 (retroactively testable per proposal), (c) honestly different in structural scope (per Axis Absence inherited tier vocabulary), (d) trade-off-honest, (e) compatible with the just-completed Axis Absence and Inherited-Frame Preservation proposals.
- **Use case** — the user will pick one or more proposals to implement; may compose with the Axis Absence and Inherited-Frame Preservation proposals.
- **Desired outcome** — clear mechanism understanding + concrete fix menu + cross-proposal composition map.
- **What would fail** — three proposals all at the same tier; proposals that don't ground against 6 corpus instances; proposals that collapse Label-Tested into Nitpicking (the closest existing mode but INVERSE) or into Axis Absence / Inherited-Frame Preservation siblings.

## Source Input

```text
## 3. Label-Tested, Substance-Untested

**Definition.** Critique evaluates the surface attribute (the name, the label, the top-level shape, the structural slot) but never tests the underlying substance (the meaning, the example's content, the differentiation within a category, the unit's presupposition).

**Mechanism.** Dimensions often probe whether a NAME aligns with user language, whether a TOP-LEVEL category is coherent, or whether a CANDIDATE matches a STRUCTURAL slot. The actual substance — what the name means in practice, whether the worked example holds under load-bearing reading, whether the category contains structurally distinct sub-cases — sits beneath the dimension's evaluation surface.

**Corpus instances.**
- **15-39 A8 ← 01-00** (name-vs-meaning conflation): D5 User-language alignment verified the NAME "Itemize" was user-verbatim but never interrogated the LLM-auto-completed MEANING ("split into distinct atomic items"). **The harm evidence was in critique's own artifact** — D12 Recursion-fitness applied Itemize to the Source Input using the LLM's intuitive reading instead of the authored description.
- **21-18 ← 22-44** (worked example treated as illustration): the small=fix-bug / big=redesign-OAuth-flow example was tested against dual-mode dispatch mechanics but not against the underlying claim "spans the scope-axis." The example was the load-bearing structural commitment.
- **18-21 ← 19-06** (question-text never surfaced): critique tested 10 CORE per-item entries against 4 readers — but the question-text itself was never on the candidate list because the prior taxonomy of "MQ produces answer" was taken for granted.
- **09-23 STANDALONE** (verb-vs-noun unit presupposition): critique read operation top-down (what it does) — preserves enumerate-all + type + reachability + guidance + no-select — but didn't read bottom-up (what its primary UNIT presupposes; verb-first quietly presupposes prior trajectory).
- **19-06 ← 20-29** (permissive treated as uniform space): "A-permissive" tested as one category; the structural distinction within it (UNDETERMINED vs UNCERTAIN; refusal-to-commit vs commitment-with-hedge) was not surfaced.
- **11-23 STANDALONE** (artifact-as-conceptual vs artifact-as-authored-deliverable): one artifact named (`routelister.md`), other only described as "the identity-set/index state-file." Naming asymmetry undetected because dimension treated artifacts as conceptual entities, not as deliverables requiring naming parity.

**Why current critique doesn't catch it.** No existing failure mode names this. The closest is "Nitpicking" — but that's the inverse (too much surface detail at the cost of substance). Substance-test failure is the opposite: too much surface confidence in well-tested labels while the load-bearing substance went unprobed.

**Corrective.** Add a **Substance-vs-Label Test**: for each load-bearing claim, identify (a) the LABEL (name, shape, classification, slot) and (b) the SUBSTANCE (meaning, content, distinction-within-category, unit-presupposition). Require at least one dimension explicitly testing substance. For **worked examples specifically**: treat them as load-bearing structural commitments and apply the candidate's mechanism to them literally, not via intuitive reading.

lets dive deep into this one the same way
```

## Scope Check

Question covers goal. The Question explicitly asks for mechanism understanding + ≥3 tier-distinct proposals + plus/minus + cross-inquiry composition; the Goal's use-case + what-would-fail specs match.

Specific-vs-pattern check: 6 SPECIFIC corpus instances; broader pattern is the structural surface where dimensions are operationally restricted to surface-level evaluation. Proposals address the broader pattern with the 6 instances as ground truth.

## Layer Commitment

Meta-question on the `/td-critique` discipline spec. Following the same primary-layer commitment as the prior two inquiries: STRUCTURAL primary, meaning foundational, process deferred.

**Primary layer: STRUCTURAL.** Deliverable is concrete spec edits.

**Foundational meaning-layer work:** understanding the LABEL vs SUBSTANCE structural distinction at the meaning layer (what each refers to in critique's evaluation operation; how dimensions can be operationally restricted to surface evaluation).

**Other layers considered:**
- **Process** — out of scope. Runtime invocation of new substance-tests is downstream design.

## Synthesis Trigger

This inquiry consumes the following prior outputs:

- `devdocs/100_critique_correction_chain_analysis.md` — the 48-pair corpus; the 6 Label-Tested instances come from this.
- `devdocs/top_7_common_critique_failures.md` §3 (Label-Tested, Substance-Untested) — definition + mechanism + 6 corpus instances + corrective sketch (Substance-vs-Label Test; worked-examples-as-commitments).
- `cognitive_harness/td-critique/references/td-critique.md` — the existing spec, especially Phase 0 Dimension Construction (where dimensions are constructed; the operational restriction to surface evaluation happens here), Phase 2 Adversarial Evaluation (where candidates are tested; substance-level testing could be required here), §4 Failure Modes (especially #3 Nitpicking which is named as the INVERSE of this failure), §3.5 Assembly Check.
- `cognitive_harness/td-critique/SKILL.md` — invocation contract.
- `devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/finding.md` — Axis Absence finding; tier-shape vocabulary inherited unchanged; precondition-violation framing as TEST whether it applies here; 5 trade-off axes inherited.
- `devdocs/inquiries/2026-06-08_19-10__inherited_frame_preservation_critique_fix_proposals/finding.md` — Inherited-Frame Preservation finding; cross-spec dimension established as new axis; tier-metaphor + SS/CS sub-axis clarification carries forward; precondition-violation at different layer framing established.

CONCLUDE will require an `## Inherited Commitments Re-test` section. Each proposal must be tested against (a) 6 corpus instances, (b) existing failure-mode definitions (especially #3 Nitpicking as INVERSE — verify distinctness, not collapse), (c) the just-articulated Axis Absence + Inherited-Frame Preservation proposals (composition check), (d) the tier-shape vocabulary inherited from Axis Absence (use unchanged).

**Important cross-failure note for re-test:** The prior two inquiries both established precondition-violation at structurally distinct layers (Axis Absence within-spec; Inherited-Frame Preservation cross-spec). Sensemaking must test whether Label-Tested has a precondition-violation relationship to any existing mode OR has a different structural relationship (e.g., dimension's operational scope restricted to surface). Do not inherit the precondition-violation framing uncritically.
