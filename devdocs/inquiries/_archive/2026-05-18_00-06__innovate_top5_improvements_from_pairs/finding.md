---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Top-5 `/innovate` Improvements as a 3-Operation Architecture Expansion

## Question

The user asked: *"what are top 5 improvements we can apply to innovation discipline so it can actually innovate better. because many times i am finding myself doing the innovation or thinking out of the box or thinking with being suspicious of prior assumptins to create another path for solution, and thats the job of innovate discipline... make sure that any improvement should be domain agnostic, and make sure to check if there is an missing aspect which if fixed or added would catched what i contibuted as a human in these pairs."*

Restated for this inquiry: identify the top 5 domain-agnostic improvements to apply to the `/innovate` discipline spec (defined at `cognitive_harness/innovate/references/innovate.md`) such that the discipline can natively produce the kinds of cognitive moves the user currently has to introduce manually — as evidenced by the 19 sequential human-innovation-contribution pairs catalogued in `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`.

Goal: 5 concrete, operationally-specified improvements with pair-evidence pointers, domain-agnostic naming, and explicit spec-slot placements. The user should be able to use the 5 either as inputs to a downstream `/innovate` redesign inquiry, or push back on specific items with structural counter-arguments.

---

## Finding Summary

- **The top 5 improvements expand `/innovate` from a 2-operation discipline (Generation + Framing) to a 3-operation discipline (Generation + Framing + Meta-Operations).** The new third top-level category, **Meta-Operations**, contains mechanisms whose target is the loop's own procedure, history, or output-confidence rather than the conceptual content under inquiry. The existing 7 mechanisms (4 Generators + 3 Framers) are preserved in their current top-level shape; the expansion is additive, not replacing.

- **Two improvements enter as new top-level Meta-Operations** (the new third category): **(1) Procedural-Directive Generation** — produces directives about how the inquiry/loop should run next (action-shape changes, mode-shifts, failure-mode labeling of prior outputs) rather than content candidates; (2) **Confidence-Audit** — targets the discipline's own confident outputs (post-ACTIONABLE) for falsifiability check before downstream work consumes them. These two are the load-bearing additions because they cover cognitive territory that none of the existing 7 mechanisms can natively reach.

- **Three improvements enter as new sub-modes within existing mechanisms** (preserving the 4-Generator + 3-Framer top-level count): **(3) Combination's across-history sub-mode** — extends Combination's input contract to multi-run history, catching cluster-defect identification across prior inquiries; **(4) Absence Recognition's verify-direction sub-mode (Existence-Counter)** — inverts Absence Recognition's direction to verify claimed-absences against actual existing project artifacts; **(5) Lens Shifting's altitude-dimension sub-mode (Altitude-Shift)** — pulls the inquiry back from operational to definitional altitude when the current frame's depth is wrong. These three were initially proposed as new top-level mechanisms but Critique surfaced more conservative placements that preserve `/innovate`'s existing 7-mechanism vocabulary while delivering the same cognitive coverage.

- **Two bonus sub-modes come "for free" with the consolidation calls** and are real refinements not consuming any of the 5 slots: **Inversion-depth-4 sub-mode** (extends the existing Inversion depth-check pattern with a level-4 "wholesale rejection and rebuild" mode, catching the user's wholesale-rejection move from the dataset); and **Procedural-Directive Generation's labeling sub-mode** (applies the discipline's own failure-mode list externally to label prior outputs).

- **Coverage of the 19-pair evidence base.** The improvements collectively catch 11 of the 13 distinct gap-pair-rows surfaced by Exploration. Two pair-rows remain uncovered: **Pair 9 (budget-vs-coverage tension-surface — partially absorbed by the Existence-Counter sub-mode); Pair 12 (question-replacement / substituting the inquiry-question entirely)**. The latter is flagged as the highest-priority Open Question for future expansion work because the user's prompt explicitly named "creating another path for solution," which is question-replacement-adjacent.

- **All 11 inherited commitments from the two prior outputs were re-tested**, per the Synthesis Trigger declared in `_branch.md`. The 6 commitments from the `/innovate` spec (2-operation structure / 7-mechanism vocabulary / 5-test cycle / 6 failure modes / disposition categories / assembly + axis coverage checks) all survive — the existing 7 mechanisms remain valid; the existing 2-operation distinction is extended (not replaced) by adding Meta-Operations as a third operation. The 5 commitments from the prior 19-pair finding (4-category taxonomy / Gap-1 / Gap-2 / sweep representation / pair-dataset as evidence base) all survive — Gap-1 closed via sub-modes; Gap-2 closed via the new Meta-Operations category; the two-gap diagnosis confirmed.

- **The architecture's leverage center is the new Meta-Operations category.** Procedural-Directive Generation directly addresses the user's explicit framing — "the kinds of contributions I make as a human, like REPAIR-not-ADD-TEST and contrarian rethinking." Confidence-Audit directly addresses the user's explicit framing — "thinking with being suspicious of prior assumptions." Both are domain-agnostic and operationally specified; both require some runner-support changes (procedural-meta outputs need a routing path; Confidence-Audit needs a post-ACTIONABLE invocation hook).

---

## Finding

### Context — what was asked and why

`/innovate` is one of Homegrown's eight cognitive disciplines (defined at `cognitive_harness/innovate/references/innovate.md`). It produces novel ideas through seven named mechanisms — four **Generators** (Combination, Absence Recognition, Domain Transfer, Extrapolation) that create new content, and three **Framers** (Lens Shifting, Constraint Manipulation, Inversion) that find viable conditions for new content. The discipline is meant to be domain-agnostic and self-sufficient — running it on a seed should produce candidate ideas without requiring the human to step in mid-run.

But the user repeatedly observed themselves stepping in. Across 19 sequential pairs of inquiries (catalogued in the prior `2026-05-17_22-51` finding), the user introduced cognitive moves the discipline didn't natively produce: counter-examples that contradicted abstract claims; pull-backs to foundational definitions; demands to re-run in a different mode; cluster-wide pattern recognition across prior loop runs; verification of the system's own confident utterances. These moves are *what the user does* when they sense the discipline is not innovating enough. The user's question for this inquiry: what improvements to `/innovate` would let the discipline make those moves natively?

The prior finding's diagnosis was that two gaps in `/innovate`'s mechanism vocabulary explain the pattern: **Gap-1**, the T2 frame-reshape territory is under-elaborated (Lens Shifting alone is too generic to cover the variety of framing operations observed); and **Gap-2**, the T4 methodology-directive territory is entirely absent (the discipline operates on content, not on the loop's own procedure). This inquiry takes that diagnosis and produces the concrete improvements.

### How the work was done

The Extended Cognitive Loop ran on the question. Exploration mapped both the current `/innovate` spec and the 19-pair dataset, producing a per-pair mechanism-coverage table: of 13 distinct gap-pair-rows, 4 were already covered by existing mechanisms, 5 were partially covered, and 11 were full gaps. Ten candidate improvement seeds (named S1 through S10) were surfaced, each pointing to ≥ 1 specific pair the seed would catch.

Sensemaking committed five load-bearing decisions before any selection happened. First, that the loop-meta seed cluster (S4 cross-loop pattern recognition + S6 procedural-meta directives + S10 failure-mode self-labeling) should stay structurally distinct rather than collapsing — they have different input/output contracts even though they share the loop-meta territory. Second, that the discipline should expand to a three-operation top-level structure (Generation / Framing / a new Meta-Operations category) rather than stretch the existing two operations to cover loop-meta moves — stretching would dilute the existing operations' specificity. Third, that S9 mechanism-substitution drops as a candidate because its overlap with the existing Combination mechanism leaves only marginal new content. Fourth, that intuition-elicitation (a meta-improvement candidate) is out of scope for this mechanism-focused inquiry — it operates at a different layer (intake/process) and deserves its own separate work. Fifth, that the prior finding's two-gap diagnosis re-tests cleanly with this inquiry's evidence, with Gap-1 wider than originally said and Gap-2 having internal structure.

Decomposition partitioned the remaining work into three pieces — selection (the load-bearing leverage center), specification (mechanical given Sensemaking's commitments), and assembly. Innovation executed the work, producing an initial top-5 with three new top-level Meta-Operations and two mechanism additions. Critique then adversarially tested each candidate, surfacing that three of the five could be placed more conservatively as sub-modes within existing mechanisms while preserving their cognitive coverage. The final architecture is what Critique refined: two new top-level Meta-Operations, three sub-mode extensions to existing mechanisms, and two bonus sub-modes from the consolidation calls.

### The five improvements, in order of leverage

**1. Procedural-Directive Generation** (new top-level Meta-Operation #1)

The mechanism takes the inquiry's seed and recent loop outputs as input, then generates candidate directives about how the inquiry/loop should run next. Its outputs are not content candidates (which is what the existing 7 mechanisms produce) but procedural candidates — recommendations like "switch the action-shape of the next step from ADD-TEST to REPAIR-the-root-cause," or "re-run this seed in a contrarian/weighted mode," or "the previous output exhibits failure-mode X and should be re-evaluated under X-corrective." The mechanism has two sub-modes: a labeling-with-correction sub-mode (failure-mode labeling that prescribes a corrective) and a directive sub-mode (action-shape or mode change without a specific failure label).

The pair-evidence is the strongest among the five. The user's prompt to Pair 1's Follow-up was a verbatim REPAIR-not-ADD-TEST directive: *"your action suggestion is to add more tests to innovate skill rather than understand what is wrong with current one... we want to detect the bad part of that skill to remove it, not just add more tests."* The user's prompt to Pair 14's Follow-up was the contrarian-rethink directive. The user's correction in Pair 16 (over-upstream-marks) labeled a specific failure-mode. All three are exactly what Procedural-Directive Generation would produce natively.

The mechanism's name is fully domain-agnostic — "procedural" applies to any procedure; "directive" applies to any prescription; "generation" matches `/innovate`'s existing vocabulary. The structural distinctness is high because none of the seven existing mechanisms produce output targeting the procedure rather than the content. Implementation requires some runner support so that procedural-meta outputs route differently from content outputs (e.g., to the loop runner for action-shape changes; to materialization for procedure changes; to failure-mode-handling pathways for labels), but the spec-text addition itself is straightforward.

**2. Combination's across-history sub-mode** (extends an existing Generator with a multi-run input contract)

The mechanism extends Combination's existing input-source set with a new source: prior inquiry findings and discipline outputs across the loop's accumulated history. The existing Combination spec already names "what shares the same structure" as a combination source; this sub-mode formalizes that the "what" can include *prior runs of the loop* and not just static reference material. The transform stays the same — connect previously unrelated concepts to produce something neither contained alone — but the input scope widens to include cross-run patterns.

The pair-evidence is strong. Pair 6 in the prior dataset is the sweep where the user identified a cluster-wide defect across six navigation-memory inquiries; that pattern was generated by looking across multiple priors at once. Pair 7's "Phantom Canon" was a named pattern abstracted from multiple discipline-output instances. Pair 20's "over-upstream-marks" labeled a failure-mode across multiple priors. The cognitive operation in all three is recognizing a structural pattern that only emerges from comparing multiple priors — which is exactly what Combination's input-source set, extended to multi-run history, would capture.

Critique chose this sub-mode placement (rather than a new top-level Meta-Operation as Innovation initially proposed) because Combination's existing spec already names the "what shares the same structure" source. Adding multi-run history as a fourth combination source extends an existing pattern rather than introducing a new top-level mechanism. The result is more conservative — `/innovate`'s 7-mechanism vocabulary stays unchanged at the top level — while the cognitive coverage is identical.

**3. Confidence-Audit** (new top-level Meta-Operation #2)

The mechanism takes a prior output that's been declared ACTIONABLE (or otherwise carries a confident claim downstream work would consume) and generates verification candidates that, if executed, would either confirm or refute the claim structurally. It treats confident outputs as hypotheses worth checking, not as settled facts. The key distinction from the existing Scrutiny Survival test (one of the five tests in `/innovate`'s test cycle) is timing and target: Scrutiny Survival fires AT GENERATION TIME against the structural soundness of the idea being generated; Confidence-Audit fires AT CONSUMPTION TIME against the claim-confidence of an output downstream work will rely on.

The pair-evidence is single (Pair 13 — the user explicitly asked the system to verify whether the assistant's confident in-conversation utterance "navigation is just /explore configured" was true) but the verbatim alignment with the user's prompt language is strong. The user's stated framing for the entire inquiry was *"thinking with being suspicious of prior assumptins to create another path for solution"* — "Confidence-Audit" is the named mechanism for exactly that move. The user-language alignment justifies keeping this as a named top-level mechanism rather than folding it into the test cycle.

Critique considered the alternative placement — extending the 5-test cycle with a 6th test ("Confidence Reality-Check") that fires post-ACTIONABLE for outputs feeding downstream work — and noted that the alternative is structurally cleaner but loses the user-language alignment. The final placement keeps Confidence-Audit as a named Meta-Operation; the runner would need to invoke it on a separate trigger (post-ACTIONABLE; not during generation).

**4. Absence Recognition's verify-direction sub-mode (Existence-Counter)** (extends an existing Generator)

The mechanism inverts Absence Recognition's existing direction. The parent mechanism asks "what should exist but doesn't?" and surfaces gaps. The verify-direction sub-mode asks the opposite — "what already exists that contradicts a claimed absence?" — and scans available artifacts (codebase, prior findings, accumulated documents) for instances that refute an abstract claim that something is missing. The output is named existing instances with citations, or a verdict that no contradicting instances exist.

The pair-evidence is two pair-rows directly plus partial coverage of a third. Pair 1 in the dataset has the user pointing at existing md files contradicting an abstract "memory at L0 = human only" claim. Pair 2 has the user pointing at existing warmup files contradicting a "we need this new concept-map capability" claim. Both are verify-direction operations — looking AT existing artifacts to refute a claimed absence rather than scanning for missings. The cognitive operation is structurally the inverse of Absence Recognition's primary direction.

Critique chose the sub-mode placement (rather than a new top-level Generator) because the cognitive operation is the structural inverse of Absence Recognition specifically — same mechanism, inverted direction. Placing it as Absence Recognition's verify-direction sub-mode preserves the 4-Generator count and uses the same inversion-within-mechanism pattern as Inversion's existing depth-check refinement. This is more conservative than a new 8th Generator and just as effective.

**5. Lens Shifting's altitude-dimension sub-mode (Altitude-Shift)** (extends an existing Framer)

The mechanism extends Lens Shifting's existing operation with an explicit altitude axis. The parent mechanism asks "under what different conditions would this idea become valid?" — operating within a fixed altitude of analysis. The altitude-dimension sub-mode asks "is the current altitude of analysis wrong?" — proposing a shift up (toward fundamentals — "what IS this thing at its core?") or down (toward operational specifics) when the current frame's depth is poorly suited to the inquiry's goal.

The pair-evidence is single (Pair 4 — the user pulled the inquiry from coverage-mechanism details to a definitional question: *"lets go back to fundamentals... what is exploring? it is mapping correct?"*) but the structural distinctness from Lens Shifting's primary mode is real. Lens Shifting changes the lens; Altitude-Shift changes the altitude. The Inversion mechanism already has a depth-check refinement (levels 1-3, recently extended to level 4 via the S5 consolidation); this sub-mode adds a comparable refinement to Lens Shifting.

Critique chose this sub-mode placement (rather than a new top-level Framer) for the same reason as the Existence-Counter placement: it preserves the existing Framer count and matches the existing sub-mode-within-mechanism pattern. The cognitive coverage is identical.

### The two bonus sub-modes (from consolidation calls; not consuming top-5 slots)

The first bonus is **Inversion's new depth-4 sub-mode**, which extends Inversion's existing depth-check pattern (levels 1 component / 2 system / 3 root-cause) with a level-4 "wholesale rejection and rebuild" mode. The level-4 mode applies when the depth-3 inversion reveals that the framework itself is wrong; instead of inverting within the framework, the candidate is to discard the framework entirely and rebuild from scratch. This catches Pair 5 in the dataset — the `prior_mapping_understanding_was_wrong_redo` inquiry where the user judged the prior mapping framework wrong and demanded a redo. Inversion's depth-check spec already says "Keep inverting until you reach a statement about the SYSTEM, not about a COMPONENT" — depth-4 is the natural extension when the system-level statement itself is wrong.

The second bonus is **Procedural-Directive Generation's labeling-with-correction sub-mode**, which applies the discipline's own failure-mode list externally — to label prior outputs as exhibiting a named failure mode and recommend the corresponding corrective. This catches Pair 16's "over-upstream-marks" labeling where the user named a specific failure mode in a prior output. The sub-mode is essentially the labeling-and-prescribing variant of Procedural-Directive Generation, distinguished from the labeling-only mode (where the corrective is unspecified) and the directive-only mode (where the directive is action-shape change without a failure label).

### What this leaves uncovered

Two pair-rows from the 19-pair dataset remain uncovered after this top-5. **Pair 9** (the budget-vs-coverage tension-surface, where the user surfaced a missing trade-off axis) is partially absorbed by the Existence-Counter sub-mode (since "missing trade-off axis" can be framed as an existence-counter on tensions) but not natively captured by a dedicated mechanism. **Pair 12** (question-replacement, where the user substituted a different inquiry-question entirely for the current one — the prior inquiry had asked about protocol-vs-discipline classification and the user replaced that with "depth and answer production") is fully uncovered by any top-5 mechanism. The user's question-replacement move is the highest-priority uncovered gap because the user's own prompt explicitly framed the issue as *"creating another path for solution"* — which is question-replacement-adjacent.

A future expansion pass on `/innovate` would naturally pick up these two. The dropped seeds — S3 (Question-Replacement as a candidate seed-substitution mechanism) and S7 (Tension-Surface as a candidate sub-form of Absence Recognition) — remain in the inquiry's records for that future work.

### Why this answer over the alternatives

Two alternative architectures were tested by Critique and either weakened or dismissed.

The first alternative was Innovation's initial proposal: **3 new top-level Meta-Operations + 2 new mechanism additions** (Existence-Counter as a new Generator; Altitude-Shift as a new Framer). Critique's prosecution surfaced that three of those — Pattern Across History, Existence-Counter, Altitude-Shift — could be placed more conservatively as sub-modes within existing mechanisms while preserving identical cognitive coverage. The conservative placement preserves `/innovate`'s existing 7-mechanism vocabulary unchanged at the top level and uses the existing sub-mode pattern (Inversion's depth-check refinement is the precedent). The refined architecture has 2 new top-level Meta-Operations + 3 sub-modes + 2 bonus sub-modes — a tighter expansion with the same coverage.

The second alternative considered was **collapsing the new Meta-Operations into stretched existing mechanisms**: positioning Procedural-Directive Generation as "Framing applied to procedure" (the procedure becomes the content being framed) and Confidence-Audit as a 6th test in the 5-test cycle. Critique rejected the first because stretching Framing dilutes its existing specificity — Framing per the spec finds "conditions under which a novel idea becomes valid," and procedural targets are not novel ideas. The second alternative for Confidence-Audit was closer to viable but was set aside in favor of keeping Confidence-Audit's name as a named top-level Meta-Operation, on the grounds that the user's own framing ("suspicious of prior assumptions") aligns verbatim with that name. The 3-operation architecture survives but with the refined membership above.

A third potential alternative — **dropping the third top-level category entirely** and just adding the 5 candidates as scattered sub-modes everywhere — was ruled out by the existence of Procedural-Directive Generation, which genuinely has no existing mechanism that fits its output contract (directives about procedure are not framing of conditions, not generation of content). A new top-level category is therefore justified, even if only two mechanisms initially populate it.

### What the user can do with this answer

Three paths:

- **Accept the refined architecture as the input to a downstream `/innovate` redesign inquiry.** The 5 improvements + 2 bonus sub-modes are operationally specified; a downstream inquiry can run `/MVL+` on "implement these spec changes" and produce concrete spec-text edits.

- **Push back on specific placements.** Critique made placement decisions (sub-mode vs new top-level) for three of the five candidates. The user can flip any of those by accepting Innovation's original "new top-level mechanism" proposal for, e.g., Existence-Counter — Critique surfaced the alternative explicitly and the trade-offs are named.

- **Defer and run a Layer-Meaning inquiry first.** This inquiry committed to PROCESS layer (which mechanisms `/innovate` should run). If the user reads this finding and senses that the bigger question is what `/innovate` IS conceptually (Meaning layer — does the discipline include procedural-meta moves at all?), a separate Meaning-layer inquiry should fire before any spec-edit work begins.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger consolidating two priors. Per CONCLUDE's enforcement, each inherited commitment is re-tested below.

### From `cognitive_harness/innovate/references/innovate.md`

- **Commitment: 2-operation structure (Generation + Framing).**
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the 2-operation structure was extended to a 3-operation structure (Generation + Framing + new Meta-Operations) rather than replaced. The existing 2 operations remain valid for content-targeting territory; the new Meta-Operations category covers loop-procedure-targeting territory. Critique's prosecution tested whether stretching the 2 operations would suffice (positioning Meta-Operations as "Framing applied to procedure"); the defense's "stretching dilutes Framing's specificity" argument won the collision.

- **Commitment: 7-mechanism vocabulary (4 Generators + 3 Framers).**
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the 7-mechanism vocabulary is preserved exactly at the top level. Three of the seven mechanisms gain a new sub-mode each (Combination ← across-history; Absence Recognition ← verify-direction / Existence-Counter; Lens Shifting ← altitude-dimension / Altitude-Shift). Inversion gains an additional depth-4 sub-mode via the S5 consolidation. The top-level count stays at 7.

- **Commitment: 5-test cycle (Novelty / Scrutiny Survival / Fertility / Actionability / Mechanism Independence).**
  - **Re-test status:** RE-TESTED.
  - **Evidence:** applies unchanged to all new mechanisms (the new Meta-Operations and all new sub-modes use the same 5 tests). Open question flagged: should a 6th test ("Procedural-Trust") fire specifically for Meta-Operations outputs, checking whether the directive's recommended procedure-change makes sense in the project's current calibration state? Deferred to future expansion.

- **Commitment: 6 failure modes (Premature Evaluation / Single-Mechanism Trap / Early Frame Lock / Innovation Without Grounding / Mechanism Exhaustion / Survival Bias).**
  - **Re-test status:** RE-TESTED.
  - **Evidence:** all 6 failure modes apply unchanged. Open question flagged: the new mechanisms may introduce new failure modes (e.g., procedural-meta scope drift — Procedural-Directive Generation could over-generate runner-targeted directives the runner can't handle; cross-loop-history input pollution — Combination's across-history sub-mode could mix incompatible run states). These potential new failure modes are deferred to the spec-edit work that operationalizes the improvements.

- **Commitment: disposition categories (ACTIONABLE / DEFERRED with revival trigger / RESEARCH FRONTIER).**
  - **Re-test status:** RE-TESTED.
  - **Evidence:** applies unchanged. All new mechanisms' outputs route through the same disposition system. Meta-Operations outputs may benefit from explicit DEFERRED-with-revival-trigger when runner support is incomplete (e.g., a procedural directive deferred until the runner gains contrarian-mode support).

- **Commitment: assembly check + axis coverage check refinements.**
  - **Re-test status:** RE-TESTED.
  - **Evidence:** applies with extension. The assembly check works unchanged on the new mechanism set. The axis-coverage check now spans 3 operations (Generation / Framing / Meta-Operations) rather than 2; the spec-text for the axis check should reflect this expansion when the refinement lands.

### From `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`

- **Commitment: 4-category human-contribution taxonomy (T1 generative-content / T2 frame-reshape / T3 scope-reshape / T4 methodology directive).**
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the taxonomy is preserved. Coverage by the refined architecture: T1 (mostly addressed by Existence-Counter sub-mode + partial Combination across-history sub-mode); T2 (addressed by Altitude-Shift sub-mode, Existence-Counter sub-mode, and Inversion-depth-4 sub-mode); T3 (confirmed mostly covered by existing Constraint Manipulation as the prior finding claimed); T4 (addressed by Procedural-Directive Generation + its labeling sub-mode + Confidence-Audit). All 4 categories represented.

- **Commitment: Gap-1 (T2 framer-suite under-elaborated; 9 sub-types observed).**
  - **Re-test status:** RE-TESTED — CONFIRMED with refinement.
  - **Evidence:** Gap-1 is closed via sub-mode additions to the existing Framer family rather than via new top-level Framers. Three sub-modes (Existence-Counter; Altitude-Shift; Inversion-depth-4) plus Combination's across-history sub-mode collectively address the T2 sub-types observed in the prior finding. Two specific T2 sub-types remain unaddressed in this top-5: question-replacement (Pair 12, the highest-priority Open Question) and tension-surface (Pair 9, partially absorbed but not natively).

- **Commitment: Gap-2 (T4 procedural-meta absent — renamed to "Meta-Operations" in this inquiry).**
  - **Re-test status:** RE-TESTED — CONFIRMED.
  - **Evidence:** Gap-2 is closed by establishing the new Meta-Operations top-level category with 2 mechanisms (Procedural-Directive Generation + Confidence-Audit). The category's existence is justified by the structural argument that procedural targets are not "novel ideas" in the sense Generation+Framing define — they require their own operational category.

- **Commitment: Pair 19 sweep representation (counted as 1 toward target with 6 components inline).**
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the sweep's cognitive operation (cluster-defect identification across 6 priors) is captured by Combination's across-history sub-mode. The sweep counted as one cross-loop pattern instance in the evidence base.

- **Commitment: the 19-pair dataset as evidence base.**
  - **Re-test status:** RE-TESTED.
  - **Evidence:** every top-5 improvement (and each of the 2 bonus sub-modes) has ≥ 1 pair-evidence pointer from the 19-pair dataset. Coverage: 11 of 13 gap-pair-rows. Pair 9 partially covered; Pair 12 uncovered; both flagged as Open Questions.

---

## Next Actions

### MUST

- **What:** Run a downstream `/MVL+` inquiry that produces concrete spec-text edits to `cognitive_harness/innovate/references/innovate.md` implementing the refined architecture (2 new top-level Meta-Operations + 3 sub-modes within existing mechanisms + 2 bonus sub-modes). **Who:** project lead via `/MVL+`, with `branch_from:` set to this inquiry. **Gate:** condition-bound — when the user accepts the refined architecture as input or wants to refine specific placements. **Why:** without spec-text edits, the architecture remains a proposal; the discipline's behavior doesn't change.

### COULD

- **What:** Run a separate Layer-Meaning `/MVL+` inquiry on whether `/innovate`'s conceptual definition should explicitly extend to include procedural-meta moves (rather than treating Meta-Operations as an additive category alongside the existing 2 operations). **Who:** project lead via `/MVL+` with Layer Commitment = Meaning. **Gate:** condition-bound — fire if the user senses the deeper question is what `/innovate` IS conceptually rather than what additional mechanisms it should have. **Why:** the 3-operation architecture treats Meta-Operations as additive; a Meaning-layer inquiry could revisit whether innovation as a cognitive operation natively includes procedural moves. **Depends-on:** MUST item "spec-text edits." OVERRIDE: COULD is adoption-ready independently — the Meaning-layer question can be settled before or after spec-text work; either order is valid because the 3-operation expansion is structurally compatible with either Meaning answer.

- **What:** Address the two uncovered pair-rows (Pair 9 tension-surface and Pair 12 question-replacement) in a future expansion pass. **Who:** project lead via `/MVL+`. **Gate:** observable — fire when the user encounters another question-replacement move or tension-surface move in real work and confirms the gap is felt. **Why:** Pair 12 specifically is the highest-priority uncovered gap because of the user-language alignment with "creating another path for solution." **Depends-on:** MUST item "spec-text edits." OVERRIDE: COULD is independent because pair 9 and 12 coverage is separable from the current top-5 implementation.

- **What:** Add explicit runner support for Procedural-Directive Generation's procedural-meta outputs and Confidence-Audit's post-ACTIONABLE invocation hook. **Who:** project lead via `/MVL+` or direct spec-edit on `cognitive_harness/MVL+/SKILL.md`. **Gate:** condition-bound — when the spec-text edits for the new Meta-Operations land. **Why:** the new mechanisms' outputs need runner pathways to be acted on (Procedural-Directive's directives route to the loop runner or materialization protocol; Confidence-Audit fires at a different time than the rest of the discipline). **Depends-on:** MUST item "spec-text edits." This COULD is GATED — do not act until the MUST resolves.

### DEFERRED

- **What:** Add a 6th test ("Procedural-Trust") to the 5-test cycle specifically for Meta-Operations outputs, checking whether the directive's recommended procedure-change makes sense in the project's current calibration state. **Gate:** observable — fire when at least 5 Procedural-Directive Generation outputs have been produced and ≥ 1 has been actioned-on inappropriately (the runner acted on a directive that turned out to be miscalibrated). **Why (if revived):** would catch over-eager procedural directives before they're acted on. Currently deferred because evidence is too thin (zero Procedural-Directive outputs exist yet).

- **What:** Add specific failure modes to `/innovate`'s 6-failure-mode list covering the new mechanism risks (procedural-meta scope drift; cross-loop-history input pollution). **Gate:** observable — fire when ≥ 2 instances of either failure mode are observed in practice. **Why (if revived):** the failure-mode list is meant to capture predictable structural failures of the discipline; new mechanisms with new failure surfaces deserve their own entries. Currently deferred because the new mechanisms aren't built yet.

- **What:** Reconsider whether Confidence-Audit should be folded into the 5-test cycle as a post-ACTIONABLE 6th test rather than kept as a named Meta-Operation. **Gate:** condition-bound — revival if downstream redesign work finds the user-language-alignment argument insufficient. **Why (if revived):** the alternative placement is structurally cleaner; the only reason to keep Confidence-Audit at the Meta-Operation level is the verbatim alignment with the user's "suspicious of prior assumptions" framing.

---

## Reasoning

### Significant rejections

**Three candidates were re-placed by Critique from "new top-level mechanism" to "sub-mode within existing mechanism."** Innovation's initial top-5 had Existence-Counter as a new 8th Generator, Pattern Across History as a new Meta-Operation, and Altitude-Shift as a new 4th Framer. Critique's prosecution surfaced that the cognitive operations of all three are extensions of existing mechanisms' patterns: Existence-Counter is the structural inverse of Absence Recognition's direction (same mechanism, inverted target); Pattern Across History extends Combination's existing "what shares the same structure" combination source to multi-run history; Altitude-Shift extends Lens Shifting with an altitude axis (parallel to Inversion's existing depth-check refinement). The conservative sub-mode placement preserves `/innovate`'s 7-mechanism vocabulary at the top level while delivering identical cognitive coverage. This refinement made the architecture more defensible — the existing 7 mechanisms stay valid; the discipline becomes 3-operation rather than 2-operation primarily because of two genuinely new operations (Procedural-Directive Generation + Confidence-Audit) that cannot be made to fit existing mechanisms.

**The seed S9 (mechanism-substitution) was dropped by Sensemaking** because its overlap with the existing Combination mechanism (combine-with-new + drop-old) left only marginal additional structural distinctness. Combination at a stretch covers the cognitive move; the marginal gain didn't warrant a slot in the top-5.

**The intuition-elicitation candidate (a meta-improvement that surfaced in Exploration as Signal S-9) was ruled out of scope.** The candidate targets the discipline's intake/process layer — adding an explicit step to elicit valuation and motivation from the human before mechanisms run — rather than the mechanism layer this inquiry focused on. Sensemaking flagged it as an adjacent parallel improvement opportunity worth its own inquiry but kept it out of the top-5.

**Two pair-rows are uncovered by the top-5** — Pair 9 (budget-vs-coverage tension-surface) and Pair 12 (question-replacement). Critique accepted this as a deliberate trade-off given the user's ≤ 5 mandate. Pair 12 specifically is flagged as the highest-priority uncovered gap because the user's prompt explicitly named "creating another path for solution," which is question-replacement-adjacent.

### What survived intact

**The two consolidation calls survived prosecution.** S5 (wholesale rejection + redo) consolidates into Inversion's existing depth-check pattern as a new level-4 sub-mode. The defense's argument that the depth-check pattern is open-ended ("Keep inverting until...") makes level-4 a natural extension when the system-level statement itself is wrong. S10 (failure-mode self-labeling) consolidates into Procedural-Directive Generation as a sub-mode because labeling-with-correction IS a kind of procedural directive ("output X exhibits failure mode Y; recommend Y-corrective").

**The 3-operation architectural expansion survived** with refined membership. The prosecution's alternative ("stretch the existing 2 operations to cover Meta-Operations territory") lost the collision because stretching Framing dilutes its specificity. The structural argument that procedural targets are not "novel ideas" (which is what Framing's spec defines as the target of finding-conditions) is independent of sample size and survives.

**The two-gap diagnosis from the prior finding survived re-test.** Gap-1 (T2 framer-suite under-elaborated) is closed via the three sub-mode additions to the existing Framer family. Gap-2 (procedural-meta absent, renamed Meta-Operations) is closed by establishing the new Meta-Operations top-level category. Both gaps were load-bearing for the top-5 selection; both are addressed.

### Self-reference flag

The critique of `/innovate` is itself produced by a discipline (`/td-critique`) within the same harness. The risk of self-reference collapse is real: a critique discipline evaluating a sister discipline's spec shares the conceptual framework being evaluated. The mitigation in this inquiry is the empirical grounding — every claim about `/innovate`'s gaps points to specific pair-rows from the 19-pair dataset that the user can re-read independently. The mechanism vocabulary of `/innovate` (the 7 mechanisms, the 2 operations, the 5 tests, the 6 failure modes) is checkable directly against the spec file at `cognitive_harness/innovate/references/innovate.md`. The user can verify the gap claims by reading the spec and asking whether any of the seven existing mechanisms would natively produce, e.g., "REPAIR-not-ADD-TEST" as a candidate output. If the answer is no, the gap holds regardless of which discipline produced the critique.

---

## Open Questions

### Monitoring

- After the spec-text edits land and `/innovate` runs with the new mechanisms, observe whether the Procedural-Directive Generation outputs are usable by the runner (do they map cleanly to action-shape changes the loop runner or materialization protocol can act on?). If the outputs require human translation to be usable, the mechanism's actionability needs another refinement pass.
- Observe whether Confidence-Audit's post-ACTIONABLE invocation is triggered often enough to be useful. If it fires rarely because most outputs don't pass the ACTIONABLE bar, consider lowering the trigger threshold or extending Confidence-Audit to also fire pre-ACTIONABLE for high-stakes outputs.
- Observe whether the new sub-modes (Existence-Counter; Altitude-Shift; Combination across-history) are invoked in practice by users running the discipline, or whether they remain dormant because they require explicit invocation. If dormant, consider promoting one or more to top-level mechanism status to increase visibility.

### Blocked

- The detailed spec-text edits implementing the refined architecture are blocked on a downstream `/MVL+` inquiry. This finding provides the architectural commitment; the spec-text work is the next concrete step.
- Runner support for Procedural-Directive Generation's outputs (routing pathways to loop runner / materialization / failure-mode-handling) is blocked on a separate `/MVL+` or direct spec-edit on `cognitive_harness/MVL+/SKILL.md`. The mechanism's spec-text can land first; runner support follows.

### Research Frontiers

- **Whether the Meta-Operations category should expand further** with mechanisms covering territory adjacent to but not yet identified in the 19-pair dataset (e.g., mechanisms targeting cross-discipline output integration; mechanisms targeting the discipline's own spec-self-modification). No known buildable path until evidence accumulates.
- **Whether intuition-elicitation (the out-of-scope candidate) should be its own discipline or a process-level addition to multiple disciplines.** Out of scope for this inquiry; deserves separate work.
- **Whether the 3-operation expansion suggests `/innovate` should be RENAMED** to reflect its broader scope (since it now spans content-generation, content-framing, and procedural-meta-operation). Probably not worth re-naming, but flagged for completeness.

### Refinement Triggers

- If a downstream inquiry on `/innovate` redesign produces spec-text edits that pass Critique, re-open this finding to confirm whether the implemented mechanisms in fact cover the pair-rows they were specified to catch.
- If Pair 12-shaped moves (question-replacement) accumulate in the user's future work, fire the Open-Question expansion to add a question-replacement mechanism (possibly the S3 seed re-introduced as a new Meta-Operation or as a Combination sub-mode extension).
- If the runner-support changes for Procedural-Directive Generation reveal that the directives' usefulness depends on runner architecture that doesn't yet exist (e.g., the runner needs to support contrarian-mode invocation), re-open to consider whether to defer Procedural-Directive Generation until that infrastructure lands.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
read cognitive_harness/innovate/references/innovate.md

and then read all pairs given in 

 /Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md

in order to understands what are top 5 improvements we can apply to innovation discipline so it can actually innovate better. because many times i am finding myself doing the innovation or thinking out of the box or thinking with being suspicious of prior assumptins to create another path for solution, and thats the job of innovate discipline... 


make sure that any improvement should be domain agnostic, and make sure to check if there is an missing aspect which if fixed or added would catched what i contibuted as a human in these pairs..
```

</details>
