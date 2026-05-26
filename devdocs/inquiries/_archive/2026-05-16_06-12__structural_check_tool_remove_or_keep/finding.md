---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Structural Check Tool — Remove or Keep

## Question

**The question** *(from `_branch.md`)*: Should the `tools/structural_check.sh` mechanism — referenced by `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md` in the Discipline Transition Protocol step 4, but never built and absent from the repo on disk — be **removed entirely** from the harness, with the LLM-performed structural check (currently the documented fallback) elevated to canonical status, or **kept and built** as the automated arm of the Primitive RC quality-awareness layer?

**The goal:** a reasoned, committed decision (REMOVE / KEEP-AND-BUILD / HYBRID) with an explicit edit plan or build plan + the Q4c sibling-inquiry interaction made concrete.

**The user's prior:** opinionated REMOVE — *"we havent had structural_check.sh from the beginning. and so far LLM was doing itself the check. which makes more sense in my understanding becasue structure is ever changing. and I am thinking removing tools/structural_check.sh logic completely, it is a bloat at this point. and if we dnt then we have to constantly edit it"*. The MVL+ pipeline was instructed to test this prior rather than rubber-stamp or reflexively reject it.

---

## Finding Summary

- **Recommended primary path:** the EMERGENT *Hybrid A+D with explicit decision-tree* — implement REMOVE (Path A) immediately AND commit to an adversarial-test on a concrete trigger AND map test outcomes to subsequent spec states. This is the only candidate that PASSes all four structural commitments while honoring the user's stated REMOVE preference.

- **The user's REMOVE prior contains three implicit claims; Sensemaking tested each:** (1) "LLM-self-check IS Primitive RC mechanism" — **FAILED** structural test (the mechanism is probabilistic, not deterministic — the canonical Primitive RC criterion); (2) "Empirical zero-FAIL proves LLM-self-check works" — **UNDER-SUPPORTED** (three readings consistent with the data; favorable read not established); (3) "Structure is ever-changing → maintenance burden" — **OVERSTATED** (observable history shows section-level stability with refinements adding sub-rules, not top-level changes).

- **Four structural commitments any decision must address** (from Sensemaking SV6): gate preservation (fix-and-re-save on FAIL); mechanism honesty (substrate-honest naming of whatever mechanism is canonical); reliability acknowledgment (the empirical zero-FAIL signal is interpretation-ambiguous; the favorable read isn't proven); autonomy-trajectory awareness (L0 vs L4+ may need different forms).

- **The structural check IS a gate, not just a record.** The runtime spec's invocation text describes fix-and-re-save behavior — *"If any `[FAIL]` lines appear, fix the missing sections in the output and re-save. Re-run the check to confirm"* — which is gating, even if not labeled as such. The fallback rule ("manually check ... record the result") is operationally weaker. Any winning option must explicitly preserve fix-and-re-save semantics.

- **Empirical evidence is observable but interpretation-ambiguous:** 30+ "Manual structural check: PASS" records across 6+ inquiry folders; zero `[FAIL]` events observed. Three readings consistent with the data: (α) LLM-self-check reliably catches compliance; (β) LLM-self-check rubber-stamps its own output; (γ) discipline specs are loose enough that any reasonable output passes mechanical compliance. Without ground truth or adversarial-test validation, none of the three can be ruled in.

- **The decision should account for the autonomy trajectory:** at L0 the LLM-self-check is operationally adequate as recording; at L4+ multi-head, per-head LLM-self-check across parallel Workers is expensive and unscalable. An adversarial-test now produces calibration data that informs the L4+ form.

- **Two killed candidates:** Path C standalone (FORMALIZE protocol without script) is pareto-dominated; Hybrid A+B-light (REMOVE + 5-line bash helper) is a cosmetic middle that catches almost nothing. Both eliminated with constructive output preserved as seeds.

---

## Finding

### Why we're discussing this

The Homegrown harness's runtime specs (`homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`) invoke a bash script `tools/structural_check.sh` after each discipline saves its output, with a documented fallback: *"If `tools/structural_check.sh` is unavailable, manually check the discipline's required structure and record the result in `_state.md`."* The script has never been built. The system has run for the project's entire history using the manual LLM-self-check fallback.

The user, after observing this state directly, proposed removing the script reference entirely and formalizing the LLM-self-check as canonical. Their stated reasoning: the script has never existed; the LLM-self-check has been operating; "structure is ever changing" means a script would be a maintenance burden; the reference is "bloat at this point."

The /MVL+ pipeline was instructed to test this prior — neither rubber-stamp it nor reflexively reject it — because the project's commitments around Primitive RC (the canonical layer the script would inhabit) are load-bearing for the harness's broader self-improvement trajectory. If LLM-self-check satisfies what the Primitive RC layer needs, the user's prior is structurally correct. If it doesn't, formalizing the wrong thing as canonical introduces an invisible quality-awareness gap.

### 1. What sensemaking surfaced

Sensemaking committed a conceptual model that reshaped the question from a binary "REMOVE / KEEP" choice into a constrained decision over four viable paths under four structural commitments.

#### 1.1 The four structural commitments

Any winning option must address four commitments simultaneously. They emerge from the project's existing commitments around Primitive RC (the canonical quality-awareness layer the script would inhabit) plus the user's stated bars on the measurement-system design.

**Gate preservation.** The runtime spec's invocation describes fix-and-re-save behavior on `[FAIL]` — the next discipline does not begin until the previous discipline's output passes the structural check. The fallback's "manually check ... record the result" wording is OPERATIONALLY WEAKER — it doesn't explicitly require fix-and-re-save before continuing. Any winning option must explicitly preserve fix-and-re-save semantics, not just structural recording.

**Mechanism honesty (substrate-honest naming).** The Primitive RC layer's canonical definition in `enes/evolving_quality_assetment_component.md` is explicit: *"Binary — something is structurally wrong or it isn't. No judgment needed. Source of signal: Git diff, text scanning, telemetry field checks, format validation against discipline specs."* The mechanism is deterministic. The LLM-self-check is PROBABILISTIC in mechanism, BINARY in outcome. Calling them structurally equivalent violates the substrate-honest principle. Whatever implementation is committed, the spec text must accurately name what it IS.

**Reliability acknowledgment.** The empirical record (30+ "PASS" records, zero "FAIL" events) is observable but interpretation-ambiguous. Three readings are consistent with the data: (α) LLM-self-check reliably catches compliance; (β) LLM-self-check rubber-stamps its own output (Self-Reference Blindness — a failure mode the project's own sensemaking discipline catalogs); (γ) discipline specs are loose enough that any reasonable LLM output passes mechanical compliance. Without ground truth or an adversarial test, none of the three can be ruled in. The user's prior treats α as established; the data only supports the OPERATIONAL claim that LLM-self-check is happening, not the RELIABILITY claim that it is working reliably.

**Autonomy-trajectory awareness.** The structural-check operation's appropriate form may vary by autonomy level. At Level 0 (the project's current state) the LLM-self-check is operationally adequate as recording. At Level 2-3 (system Selector / Runner) the system needs a Primitive RC arm it can trust to route decisions. At Level 4+ (multi-head with parallel Workers) per-head LLM-self-check incurs aggregate context cost that scales poorly; deterministic automation scales better. The decision should reckon with which level it's making the choice for.

#### 1.2 The four viable paths

Within the four-commitment constraint, four viable paths remain after sensemaking's contraction. Two earlier candidates (silent REMOVE without gate preservation; full-spec'd KEEP-AND-BUILD as originally referenced) were eliminated by sensemaking as no-longer-viable.

**Path A — REMOVE with explicit gate preservation.** Edit the four runtime-spec references (MVL line 23 / MVL line 159 / MVL+ line 26 / MVL+ line 197) to drop the script invocation; replace with explicit LLM-self-check procedure including fix-and-re-save behavior; add a substrate-honest mechanism note + reliability caveat. Maps directly to the user's REMOVE prior. PARTIAL on reliability acknowledgment (caveat only; no validation) and autonomy-trajectory (L0 acceptable; L4+ uncertain).

**Path B — KEEP-AND-BUILD MINIMAL.** Build a thin script (~50 lines bash) that checks (a) stable universal sentinels — file size >1KB, the standardized `**Overall:**` verdict line is present (per the resume protocol), the `## User Input` record exists — and (b) two per-discipline section sentinels. LLM-self-check handles discipline-specific deep structure not covered by the script. PASSes all four commitments; deterministic mechanism eliminates the rubber-stamping risk for what the script checks. Scales to L4+. Doesn't honor the user's REMOVE prior.

**Path C — FORMALIZE LLM-self-check as protocol.** Write `homegrown/protocols/structural_check.md` (~60 lines) that formalizes the LLM-self-check procedure (including fix-and-re-save behavior), then edit the four runtime-spec references to load the protocol via Skill/Read. Adds a protocol file rather than a script. As a STANDALONE PATH, Path C is pareto-dominated (Path A is cheaper for the same commitment profile; Path B passes more commitments; Hybrid B+C uses the protocol's value better) — Critique killed standalone Path C.

**Path D — HYBRID with adversarial-test maturity gate.** Retain the script reference in the interim (no spec edits); commit to an adversarial-test experiment (intentional-flaw catch-rate test) that validates LLM-self-check reliability; the test's outcome determines the subsequent spec state. PASSes the reliability commitment most rigorously. Defers the immediate decision; user-prior alignment is partial (defers what the user wants resolved).

#### 1.3 What innovation added

Innovation generated three emergent hybrids beyond the four base paths:

**Hybrid B+C — Script + Protocol.** Build the Path B script AND write the Path C protocol; the runner runs the script first (deterministic universal check) and then runs the protocol-driven LLM-self-check for discipline-specific deep structure. PASSes all four commitments more stringently than any single path. Cost is modest. Doesn't honor the user's REMOVE prior.

**Hybrid A+D — REMOVE + adversarial-test revival.** Implement Path A immediately AND commit to the adversarial-test as a future revival condition. Combines Path A's cost-elegance with Path D's epistemic rigor. Honors the user's REMOVE prior immediately while deferring-but-committing to the reliability question.

**Hybrid A+B-light — REMOVE + 5-line bash helper.** Edit per Path A AND ship a 5-line bash helper that just checks "Overall: verdict line present." Critique killed this — the helper's reliability gain is marginal; dominated by Path B (more coverage at modest extra cost) and by Hybrid A+D (commits to validation rather than cosmetic check).

#### 1.4 What critique's adversarial evaluation produced

Critique evaluated all seven candidates (4 paths + 3 hybrids) against the four commitments + project-specific risk axes (cost profile, user-prior alignment, optionality preservation, mechanism honesty as substrate-honesty preservation). Multi-axis prosecution applied (dimension-level + user-perspective + specific-failure-case + spec-gap probe) per candidate. Two candidates were killed as pareto-dominated. The remaining survivors were ranked by their commitment-satisfaction profile + trade-off characteristics.

**An emergent candidate surfaced in Critique's Phase 3.5 assembly check:** Hybrid A+D extended with an explicit decision-tree that maps test-outcome thresholds to subsequent spec states. This emergent candidate combines the strongest user-prior alignment (Path A immediately) with the strongest rigor commitment (Path D's adversarial test) plus a concrete operational map for what each test outcome means. It is the only candidate that PASSes all four commitments while honoring the user's stated REMOVE preference. **This is the recommended primary.**

### 2. The recommended path — Hybrid A+D with decision-tree

**State 0 (immediate state, implementable today):**

The four runtime-spec edits are applied. Specifically:

*`homegrown/MVL/SKILL.md` line 23 (Workspace Invariant fallback rule), new text:*
> 6. Run the structural check on the saved output (procedure in Step 4 below). The check is performed by the LLM session against the discipline's required output structure; outcome is recorded in `_state.md`. On `[FAIL]`, fix the missing sections in the output and re-save before continuing.

*`homegrown/MVL/SKILL.md` line 159 (Discipline Transition Protocol step 4), new text:*
> 4. **Run structural check** on the saved output:
>    Read the discipline's reference file (`homegrown/<discipline>/references/<discipline>.md`) or its `SKILL.md` to identify required output sections. Verify each is present. Record the result in `_state.md` as `Structural check: [PASS] (<N>/<M> sections present)` or `Structural check: [FAIL: <missing-element-1>, ...]`.
>    If any `[FAIL]` lines appear, fix the missing sections in the output and re-save. Re-run the check to confirm. Include the results in the next checkpoint display.
>
>    **Mechanism note (substrate-honest).** This structural verification is performed by the LLM session. Its mechanism is probabilistic in execution; its outcome is binary (a section is present or it isn't). Reliability against intentionally-flawed outputs has not been adversarially validated. Treat the check as preventing obvious structural omissions, not as a robust regression guard. An adversarial-test validation is committed as a Next Action.

*`homegrown/MVL+/SKILL.md` lines 26 and 197:* same changes applied to the MVL+ runner.

The `enes/self_improvement_rate.md` reference to `tools/structural_check.sh` at line 313 gets a one-line note added pointing to the updated procedure. The `enes/runtime_environment/folder_based.md` reference at line 160 is minor-edited for consistency. The `enes/loop_desing_ideas/loop_design_2.md` reference at line 127 is kept as historical record (it's design-history notebook material, not a runtime spec).

**State 0 commitment satisfaction:**
- Gate preservation: PASS — fix-and-re-save explicit.
- Mechanism honesty: PASS — Mechanism note in callout form (not buried inline) accurately names probabilistic mechanism.
- Reliability acknowledgment: PASS-PENDING — caveat states unvalidated state; adversarial-test commitment is the operationalization (see below).
- Autonomy-trajectory: PASS-PENDING — interim is L0 only; later states address higher levels via the decision tree.

**The adversarial-test commitment (the rigor side):**

The adversarial-test is queued as a Next Action with a concrete revival trigger. The test design:

*Construct N=12 intentionally-flawed discipline outputs* across the five cognitive-act disciplines (exploration, sensemaking, decomposition, innovation, critique). Each output is taken from prior passing runs in the project's `_state.md` history and modified along one of four flaw categories (three outputs per category): (a) missing section entirely; (b) section-heading-present-but-content-absent; (c) renamed section; (d) removed safeguard text.

*Score each result.* Run the LLM-self-check procedure (per the updated spec text) against each flawed output in a fresh session. Score: TRUE-POSITIVE (caught the flaw correctly); FALSE-NEGATIVE (rubber-stamped); TRUE-POSITIVE-WRONG-CAUSE (flagged but for wrong reason; half credit). Catch-rate = (TRUE-POSITIVE + 0.5 × TRUE-POSITIVE-WRONG-CAUSE) / N.

*Revival trigger* — the test fires when ANY of the following events occurs:
- A `structural_check: [PASS]` record is later revealed as missed-failure via downstream consequence (a discipline output that passed but caused regression downstream).
- The next time any discipline's required-section list is being refined (spec edit changing required output structure).
- Before the next `/MVL+` run that the user explicitly designates as test-relevant.

If none of these triggers fires within ~30 inquiries or ~3 months, the user may elect to run the test proactively as evidence-gathering.

**State 1 (after the test runs) — the decision tree:**

Based on the observed catch-rate, the spec state graduates to one of three subsequent states:

- **Catch-rate ≥ 0.85** → **lock in Path A.** The LLM-self-check is validated. The current spec text becomes final. The Mechanism note's caveat updates to say "adversarial-test validation completed with catch-rate ≥0.85 on N intentional flaws; treat the check as a calibrated regression guard within the test's coverage scope." Status COMPLETE.
- **Catch-rate 0.65 – 0.85** → **build Path B's minimal script** for stable universal checks (file size + verdict line + User Input record + per-discipline sentinels per Innovation's elaboration). The script handles what the LLM-self-check misses. Effectively becomes Hybrid B+C in capability — the script for universal sentinels, the LLM-self-check (now per the updated spec) for discipline-specific deep structure. The Mechanism note's caveat updates to reflect the composition.
- **Catch-rate < 0.65** → **build full Hybrid B+C** (script + a formalized protocol). The LLM-self-check is unreliable enough that the project commits to both deterministic and protocol-driven mechanisms. The spec text revises to reflect protocol-driven check.

This decision tree preserves optionality at every state. The user's REMOVE prior is honored in the interim; rigor is committed to via the test; the future state is determined by evidence rather than presupposed.

### 3. Why this won over the alternatives

The pareto landscape Critique surfaced has a clear meta-trade-off: **immediate user-prior alignment vs immediate rigor commitment.**

**Path B and Hybrid B+C** prioritize immediate rigor. They PASS all four commitments cleanly but DO NOT honor the user's REMOVE prior. If the user values structural rigor over their own stated preference for removal, these are the strongest candidates. Hybrid B+C is the strongest in the rigor-primary direction.

**Path A and Hybrid A+D** prioritize user-prior alignment. They PASS commitments 1 and 2 cleanly and PARTIAL on 3 and 4. Without the decision tree, Hybrid A+D is still strong but the future-state map is implicit.

**The emergent Hybrid A+D with decision-tree** resolves the meta-trade-off temporally: user-prior is honored immediately (State 0 implements Path A), rigor is committed to via the test, and the future spec state is determined by the test's evidence. This is the only candidate that simultaneously satisfies both sides of the meta-trade-off, not by averaging but by sequencing.

**Killed candidates and what was preserved:**

*Path C standalone (FORMALIZE protocol without script)* was killed because it's pareto-dominated: cheaper than Path A on commitment-satisfaction profile? No. More commitment-satisfying than Path B? No. The protocol's value emerges as the deep-structure component of Hybrid B+C, not as a standalone replacement for the script. The protocol pattern itself is preserved as a seed — if the test outcome puts the project into State 1's Hybrid B+C branch, the protocol design from Path C's elaboration is what gets built.

*Hybrid A+B-light (REMOVE + 5-line bash helper)* was killed as the cosmetic middle: the 5-line helper only checks verdict-line presence, catching almost no real regressions. Reliability gain over pure Path A is marginal. Dominated by Path B (much more coverage at modest extra cost) and by Hybrid A+D (commits to validation rather than cosmetic check). Seed preserved: marginal deterministic checks don't satisfy reliability acknowledgment; the honest choices are full LLM-self-check (Path A) or substantive deterministic check (Path B+), not the cosmetic middle.

### 4. Sibling-inquiry interaction (Q4c calibration-state)

The sibling self-improvement-rate inquiry (`devdocs/inquiries/2026-05-16_00-07__self_improvement_rate_measurable_questions/finding.md`) committed Q4c (per-edit spec-symptom check) as Tier 1 today via manual inspection, with a note: *"could be automated when `tools/structural_check.sh` ships."*

This finding's decision affects Q4c's calibration-state:
- **In State 0 (immediate state, Path A applied):** Q4c stays Tier 1 manual. The note in Q4c's wording is updated: instead of "could be automated when structural_check.sh ships," it becomes "could be automated when an adversarial-test validates the LLM-self-check OR when a deterministic script is built (per the structural-check decision-tree)."
- **In State 1 (after test) with catch-rate ≥0.85:** Q4c stays Tier 1 manual. The LLM-self-check IS the operationalization; manual inspection is still the user's mode.
- **In State 1 with catch-rate <0.85:** Q4c partially automates — the script (Path B or B+C) catches structural symptoms; manual inspection handles the deep-structure symptoms.

The two inquiries are now coherent.

### 5. Honest framing on the user's prior

The user's REMOVE prior survives as the interim state. Sensemaking's testing of its three implicit claims produced a more honest version:

- *"LLM-self-check IS Primitive RC mechanism"* — the recommended path doesn't claim this. The Mechanism note in the new spec text explicitly says the mechanism is probabilistic, not deterministic. Whatever the LLM-self-check IS, the spec text names it accurately.
- *"Empirical zero-FAIL proves LLM-self-check works"* — the recommended path acknowledges the ambiguity. The reliability caveat is in the spec text; the adversarial-test commitment is the operationalization of the rigor question. The data ISN'T treated as proving reliability; the test produces the data that does or doesn't.
- *"Structure is ever-changing → maintenance burden"* — the recommended path doesn't require the user to maintain a script unless the test outcome demands it. If catch-rate ≥0.85, the script never gets built; the maintenance burden the user worried about never materializes. If catch-rate <0.85, the script's existence is evidence-justified, not speculation-justified.

The user's intuition — that the script-as-spec'd was bloat at the current state — survives as the interim state's design. The user's instinct about LLM-self-check working — that survives only as a hypothesis to be tested, not as a presupposition to act on.

---

## Next Actions

### MUST

- **What:** Apply the four runtime-spec edits to `homegrown/MVL/SKILL.md` (lines 23, 159) and `homegrown/MVL+/SKILL.md` (lines 26, 197) per Path A's elaboration. The new text replaces the script invocation with explicit LLM-self-check procedure including fix-and-re-save behavior, plus the Mechanism note as a dedicated callout.
  - **Who:** a small materialization run on these two files (Family II — modest investment, no calibration data required per the prior project-identity finding).
  - **Gate:** observable — when the user is ready to commit the spec change.
  - **Why:** brings the runtime spec into alignment with current operational reality (the LLM-self-check has been the operational form for the project's history); preserves the gate-and-fix-and-re-save commitment that the runtime spec already implicitly carries; substrate-honestly names what mechanism is canonical at L0.

- **What:** Apply the minor edits to the three `enes/` references: `enes/self_improvement_rate.md` line 313 (one-line note pointing to updated procedure); `enes/runtime_environment/folder_based.md` line 160 (consistency edit); `enes/loop_desing_ideas/loop_design_2.md` line 127 (no edit; historical record).
  - **Who:** same materialization run.
  - **Gate:** observable — same as above.
  - **Why:** consistency with the runtime spec; preserves design-history while updating active references.

- **What:** Update the sibling self-improvement-rate inquiry's Q4c wording (in `enes/self_improvement_rate.md` if it's been extracted there, or wherever the finding currently lives) to reflect the structural-check decision: replace "could be automated when `tools/structural_check.sh` ships" with the conditional language tied to the decision tree.
  - **Who:** same materialization run (small edit to sibling-inquiry finding text).
  - **Gate:** observable — at the same time as the runtime-spec edits.
  - **Why:** keeps the two inquiries coherent; Q4c's calibration-state stays correct.

### COULD

- **What:** Commit to running the adversarial-test as a Next-Action, with the revival trigger specified above. The test design is concrete (N=12 intentionally-flawed outputs across the five disciplines; four flaw categories; catch-rate score; threshold-driven decision tree).
  - **Who:** the user, when one of the revival triggers fires (a missed-failure observation, or a next discipline-spec refinement, or a designated test run).
  - **Gate:** condition-bound — first trigger event after the runtime-spec edits land.
  - **Why:** operationalizes the reliability question; produces calibration data that determines whether the structure of State 1 is "lock in Path A" or "build Path B" or "build Hybrid B+C." Without the test, the project remains in the favorable-read regime indefinitely.

- **What:** Build Path B's minimal script (~50 lines bash, per Innovation's elaboration) if the test outcome puts the project in State 1's middle band (catch-rate 0.65 – 0.85) or low band (<0.65).
  - **Who:** a future materialization run (Family II, conditional).
  - **Gate:** condition-bound — when the adversarial-test outcome demands it per the decision tree.
  - **Why:** the script handles deterministic universal-sentinel checks the LLM-self-check missed in testing. Cost is modest; reliability gain is evidence-justified.
  - **Depends-on:** MUST item "apply the four runtime-spec edits" AND the adversarial-test having fired. This COULD is GATED — do not act until the MUST resolves AND the test outcome is in.

- **What:** Build Hybrid B+C's protocol file (`homegrown/protocols/structural_check.md`, ~60 lines per Innovation's elaboration) if the test outcome puts the project in State 1's low band (<0.65 catch-rate).
  - **Who:** a future materialization run (Family II, conditional, deeper).
  - **Gate:** condition-bound — when the adversarial-test outcome demands the protocol-formalism.
  - **Why:** in the low-catch-rate scenario, both deterministic checks (script) and explicit substrate-honest protocol-formalism (protocol file) are warranted to address rubber-stamping at multiple layers.
  - **Depends-on:** MUST item "apply the four runtime-spec edits" AND COULD item "build Path B's minimal script" AND the adversarial-test having fired with catch-rate <0.65. This COULD is GATED — do not act until both prior items resolve.

### DEFERRED

- **What:** Specify the structural-check operation's appropriate form at autonomy Level 4+ (multi-head). Per Sensemaking's Phase / Calibration-State perspective, the per-head LLM-self-check cost scales poorly at multi-head; an automated check may be structurally required there.
  - **Gate:** condition-bound — when the meta-loop ladder graduates to L3+ (sequential chains) or L4 (multi-head) per the parent project-identity finding.
  - **Why if revived:** the current decision is for L0; the recommendation explicitly notes the autonomy-trajectory limitation. At L4+, the trade-offs change and the decision may need revisiting.

- **What:** Cross-reference the structural-check decision pattern with other unvalidated mechanisms in the project (the Predictive RC `/intuit` discipline once shipped; the meaningful-traversal substrate; the Retrospective RC outcome-tracking). The adversarial-test pattern from Path D is reusable.
  - **Gate:** condition-bound — when any of those mechanisms ships and faces the same reliability-validation question.
  - **Why if revived:** the adversarial-test design pattern is a candidate generalization. Similar logic might apply to other LLM-performed operations the project formalizes.

---

## Reasoning

### Why the user's REMOVE prior survived in the interim state but was tested rigorously

Sensemaking's testing of the prior's three implicit claims produced two structurally significant results: the claim that "LLM-self-check IS Primitive RC mechanism" FAILED a substrate-honest test (mechanism differs from canonical definition); the claim that "empirical zero-FAIL proves it works" was UNDER-SUPPORTED (three readings consistent with the data). The third claim ("structure is ever-changing") was OVERSTATED but not fully wrong.

These tests didn't ELIMINATE the REMOVE prior — they ADDED REQUIREMENTS. Path A (REMOVE) is viable in itself but PARTIAL on the reliability commitment. The emergent Hybrid A+D resolves the partiality temporally: REMOVE now (honor user prior), commit to adversarial-test (address reliability), let evidence shape the future state.

The alternative — pre-deciding rigor without honoring user-prior — would commit to Hybrid B+C and require the user to accept structural rigor wins over their stated preference. That's a viable choice but not the structurally cleanest one given the user's clearly-expressed prior.

### Why pareto-dominance killed two candidates

Path C standalone and Hybrid A + B-light were both killed on pareto-dominance grounds. Critique's adversarial test showed that for each, another candidate or hybrid provided strictly better commitment-satisfaction at the same or lower cost. The constructive output preserved seeds from each (the protocol pattern from Path C; the marginal-checks-are-cosmetic insight from Hybrid A + B-light) so future inquiries can re-use the structural insights without re-deliberating these specific candidates.

### Why the adversarial-test is the right rigor commitment

The reliability gap in the user's prior wasn't dismissable as "we don't have time to validate" or "the prior is good enough." Sensemaking flagged Self-Reference Blindness explicitly — the project's own sensemaking discipline names this failure mode. The empirical record's zero-FAIL rate is INTERPRETATION-AMBIGUOUS, and the favorable interpretation is one of three equally consistent with the data. Acting on the favorable interpretation without validation is exactly what Self-Reference Blindness predicts.

The adversarial-test design (N=12 intentionally-flawed outputs; catch-rate threshold-driven decision tree) operationalizes the reliability question in a way that's MODEST in cost (~hours of work) and DECISIVE in outcome (the catch-rate maps to a defined subsequent state). The test gives evidence-gated graduation a concrete instance.

### Why the decision tree is the structurally clean shape

The four-path option space contains a meta-trade-off (user-prior vs rigor). A static path-choice forces the user to pick one side of the trade-off; a temporal sequencing resolves the trade-off by honoring user-prior in the immediate state and committing to rigor in the future state. The decision tree adds the third structural element: the future state is DETERMINED BY EVIDENCE (the test's outcome) rather than presupposed.

This is the same pattern the prior project-identity inquiry committed for the broader autonomy ladder — "evidence-gated graduation" — applied to a specific tactical question. The pattern's reuse here is consistent with the project's commitment.

---

## Open Questions

### Monitoring

- **Will any of the revival triggers fire?** The trigger conditions (missed-failure observation; next discipline-spec refinement; user-designated test run) are observable in real operation. If none fires for ~30 inquiries, the user should consider proactive test execution.

- **Will the catch-rate threshold (≥0.85) hold across N=12?** The threshold is a placeholder derived from intuition + the project's pattern of N≥30-per-discipline maturity gates. After the first test runs, the threshold may need re-calibration (per the prior project-identity finding's pattern of explicit-PLACEHOLDER tagging).

### Blocked

- **What the structural-check operation looks like at L4+ autonomy.** Cannot be designed now without empirical data on per-head context-cost behavior. Blocked on multi-head MVL+ shipping at all (L4-buildable per the parent finding).

### Research Frontiers

- **The adversarial-test pattern's generalization.** The test design (N=12 intentionally-flawed outputs; catch-rate scoring; threshold-driven decision tree) is potentially reusable for other unvalidated mechanisms. Becomes a research frontier when the project has 2+ unvalidated mechanisms competing for validation budget (per the meta-loop ladder's calibration-graduation framing).

- **Substrate-takeover effect on this decision.** If the LLM substrate gains native structural-check capability (e.g., a model that natively validates its own output against a schema), the LLM-self-check graduates from probabilistic-mechanism to deterministic-mechanism, eliminating the reliability question. The current decision is for the current substrate; substrate-takeover would re-open it.

### Refinement Triggers

- **The catch-rate thresholds (0.85, 0.65)** re-open when the adversarial-test runs and produces data. Adjust based on what the empirical distribution looks like.
- **The 4 runtime-spec edits' exact wording** re-opens if user reads the new text and finds the Mechanism note buried or the fix-and-re-save behavior unclear. Adjust wording as needed during materialization.
- **The decision tree's branches** re-open if a test outcome falls in an unexpected range or if the test reveals failure modes the categorical framework doesn't capture (e.g., the LLM-self-check catches missing-section but misses removed-safeguard; the catch-rate aggregate masks per-category variation).

---

## Source Input

<details>
<summary>Raw user input for this inquiry</summary>

```text
The structural-check tool — tools/structural_check.sh exists in spec-references but not on disk; what does it check,
  and is it the right Primitive RC arm or does it overlap with the regression-symptom Type 5 spec-symptoms?

hmm, we havent had structural_check.sh from the beginnign. and so far LLM was doing itself the check. which makes more sense in my understanding becasue structure is ever changing. and I am thinking removing tools/structural_check.sh logic completely, it is a bloat at this point. and if we dnt then we have to constantly edit it
```

</details>
