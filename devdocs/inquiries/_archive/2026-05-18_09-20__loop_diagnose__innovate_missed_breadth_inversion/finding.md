---
status: active
model: claude-opus-4-7[1m]
effort: max
diagnoses: devdocs/inquiries/_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/finding.md
---

# Finding: /innovate Missed the Breadth-Is-Feature Inversion — Diagnosis of Four Spec-Execution Gaps + One Subtle Spec-Coverage Gap

## Question

Given the weak prior inquiry at `devdocs/inquiries/_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/`, the user's correction (*"breadth is what we want, not the problem"*), and the corrected inquiry at `devdocs/inquiries/_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/`, what did `/innovate` specifically fail to produce in the prior run that its current spec actually supports — scoped strictly to `/innovate`'s own job (not /td-critique's, /sense-making's, or /reflect's)?

The user's purpose: use the diagnosis later to improve `/innovate`'s spec. This inquiry produces the diagnosis; spec-edit work follows separately.

---

## Correction Chain Summary

- **Prior path:** `devdocs/inquiries/_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/`
- **Corrected path:** `devdocs/inquiries/_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/`
- **Human correction (verbatim from the corrected inquiry's Source Input):**

  > *"lets reconsider it, i dont get why it is a problem that depth will uncover many directions?? it is okay and this is what we want... if you limit it with these other params then we are limiting the navigation no? i can accept max_expansions, which would mean AI would pick top N paths and follow them. but how it is designed should allow running unrun ones too..."*

- **What changed:** the prior produced a budgeted-traversal runner contract (`/multi-navigation --depth 2 --max-expansions 4 --policy expansion-needed`) on the framing that "breadth is the risk to be bounded." The user inverted the frame: breadth IS the purpose of Navigation; the risk is untracked execution. The corrected inquiry produced a frontier-ledger + coverage-mode + scheduling-policy architecture where every discovered candidate is recorded, batches control execution timing not discovery scope, and unrun paths remain visible as `pending` status. The corrected invariant: *"Every discovered expansion candidate must be recorded. Budget changes execution timing, not existence."*

---

## Finding Summary

- **The prior `/innovate` run failed to escape an inherited "expansion must be bounded" frame because four named spec features that exist in `/innovate`'s current spec were not applied at full depth in the prior's execution.** The four are: (1) Inversion's depth-check refinement (which mandates inverting until system-level, not stopping at component-level); (2) Constraint Manipulation's both-direction explicit text (which mandates applying BOTH "remove" AND "add" directions); (3) Absence Recognition's redesign-level question (which mandates surfacing both patch-level AND redesign-level absences); (4) the Assembly Phase's axis-coverage check refinement (which the spec itself explicitly names as the counter to "single-axis candidate sets that arise from a frame inherited from upstream pipeline stages"). All four exist in `cognitive_harness/innovate/references/innovate.md` with direct spec text; the prior didn't exercise them.

- **The diagnosis has a subtle secondary layer:** even with all four named features present, the `/innovate` spec lacks an explicit meta-trigger that ORCHESTRATES those features against an inherited frame when the candidate set as a whole shares an assumption upstream-given. The spec's existing convergence signal ("YES — five mechanisms converge on X") treated the prior's within-frame convergence as a high-confidence success signal; an Inherited Frame Audit meta-step would have caught this. This is a more interpretive finding (MEDIUM-HIGH confidence) than the four execution gaps (HIGH confidence each).

- **Three of `/innovate`'s six named failure modes apply to the prior's pattern.** Survival Bias maps cleanly — the prior's surviving Candidate B (Budgeted Traversal Runner) matches the spec's recognition signal *"incremental; doesn't challenge fundamental assumptions"* verbatim. Single-Mechanism Trap maps as a sub-mode variant (the trap was within Constraint Manipulation, restricting outputs to ADD direction only). Early Frame Lock maps as an "Inherited Frame Lock" variant — the lock wasn't at the first-reframe (the prior applied all seven mechanisms) but at the seed-inherited frame, which all mechanisms operated within.

- **The prior's self-report "Failure modes observed: none" is itself a finding.** The discipline's end-of-run self-check did not catch Survival Bias even though the surviving candidate matched the spec's recognition signal exactly. This points at a failure-mode-self-check blindness in the discipline's execution. Whether this is purely an execution issue or whether the spec's failure-mode list needs additional recognition signals is part of the layered diagnosis.

- **Seven concrete maintenance candidates emerged**, all targeting `/innovate`'s spec only (per the user's scope constraint). The candidates split into two tiers. **Tier 1 (six candidates; land immediately):** B1 Inversion depth-check stopping criterion; B2 Constraint Manipulation both-direction explicit requirement; B3 Absence Recognition redesign-level explicit requirement; B4 Assembly-phase axis-coverage explicit invocation requirement; C1 add "Inherited Frame Lock" as a failure mode variant; C2 add "Sub-mode Single-Trap" as a failure mode variant. All Tier-1 candidates are LOW risk, concrete spec-text additions (not new mechanisms), with testable evaluation gates. **Tier 2 (one candidate; branch experiment first):** A1 Inherited Frame Audit meta-trigger — a new spec sub-section between Phase 2 Generate and Phase 3 Test that orchestrates the four frame-escape features against the candidate set's inherited assumptions when detected. MEDIUM-to-MEDIUM-HIGH risk; should be branch-tested across 3-5 future inquiries to validate marginal value before landing in main spec.

- **The strongest single maintenance candidate is B4 (axis-coverage explicit invocation requirement).** It's LOW risk, the spec quote underpinning it explicitly names the counter to inherited-frame propagation (*"Single-axis candidate sets often arise from a frame inherited from upstream pipeline stages; the axis-coverage check counters that bias"*), the evaluation gate is mechanical (does future /innovate Assembly output explicitly identify candidate-set axes?), and it would have caught the prior's pattern with a single-line spec edit. If the user lands only one candidate, B4 is the recommendation.

- **The verdict is ACTIONABLE for Tier 1 and CONDITIONAL ACTIONABLE for Tier 2.** Tier 1 candidates can be landed in the spec immediately — they are LOW-risk text additions backed by HIGH-confidence hypotheses with direct spec-quote evidence. A1 is appropriately scoped as a branch experiment per LOOP_DIAGNOSE Step 5's caveat against broad fundamentals additions from a single correction chain.

- **All 14 inherited commitments across the 3 prior outputs were re-tested.** The 8 commitments from `/innovate`'s spec are PRESERVED (the maintenance candidates extend existing structure, don't replace it). The 3 commitments from the prior weak inquiry were RE-TESTED with corrections (the "Convergence: YES" claim is correct WITHIN the inherited frame but doesn't indicate genuinely surfaced insight; the "Failure modes observed: none" claim is wrong — Survival Bias and Inherited Frame Lock variant both applied). The 3 commitments from the corrected inquiry are RE-TESTED and CONFIRMED (its convergence is on a different frame; its surviving candidate matches user intent; its seed carrying the inversion as input confirms the prior's discovery failure was discoverable).

- **Evidence pointing to other disciplines is flagged but not acted on.** The seed framing "automated traversal must not become unbounded recursion or hidden selection" came from the prior's `_branch.md` — i.e., from /sensemaking's anchor work. /td-critique on the prior's surviving candidate did not adversarially test the assumption "is bounding breadth the right success criterion?" — testing would have surfaced the user's correction. These pointers are mentioned here for completeness; per the user's hard scope constraint, no maintenance candidates target those disciplines. Future loop_diagnose inquiries on /sensemaking and /td-critique can pick up those pointers.

---

## Finding

### Context — what triggered this diagnosis

The user pointed at a specific pair from the 19-pair human-innovation-contribution dataset (Pair 18 in that dataset; numbered #9 in this inquiry's branch): `_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param` → `_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage`. The pair was previously routed to `/td-critique`'s improvement territory (REFINE with dimensional-correction direction). The user asked instead to examine what `/innovate` specifically should have done in the prior run — given that the dimensional correction (budget-vs-coverage as a missed dimension) is something `/innovate` COULD have generated natively if its existing mechanisms had been applied at full depth.

The user's purpose is forward-looking: the diagnosis will inform future `/innovate` spec edits. The scope is sharply bounded: only `/innovate`'s job; pointers to other disciplines are noted but not actioned.

This inquiry applied the LOOP_DIAGNOSE protocol (`cognitive_harness/protocols/loop_diagnose.md`) — a correction-chain diagnostic framing that runs a normal `/MVL+` Extended Cognitive Loop with a fixed-format output (Correction Chain Summary + per-hypothesis failure analysis + maintenance candidates + diagnostic verdict).

### How the diagnosis was reached

Exploration read the three relevant artifacts in full: the prior's archived `innovation.md` (the actual `/innovate` output that failed); the corrected inquiry's archived `innovation.md` (showing what `/innovate` output looks like when the inversion is surfaced); and `cognitive_harness/innovate/references/innovate.md` (the discipline's canonical spec). For each of `/innovate`'s seven mechanisms, Exploration produced a per-mechanism diagnostic comparing what the prior's `innovation.md` actually output, what the spec's depth-check or sub-mode SHOULD have produced if applied at full depth, and what the corrected inquiry's same-mechanism slot produced. The mapping was anchored in direct spec quotes plus direct prior-output quotes.

The pattern that emerged: every prior mechanism output operated within the seed's inherited "expansion must be bounded" frame. Three mechanisms had explicit spec features that would have escaped the frame if applied (Inversion's depth-check; Constraint Manipulation's REMOVE direction; Absence Recognition's redesign-level question). One Assembly-phase refinement (axis-coverage check) is explicitly named in the spec as the counter to inherited-frame propagation — and was not invoked. The combination of these four execution gaps, plus the absence of any explicit meta-trigger orchestrating them, produced the prior's full convergence on a frame-locked candidate set.

Sensemaking committed five decisions: the diagnostic categorization (4 named execution gaps + 1 subtle spec-coverage gap); the spec-execution-gap-with-secondary-subtle-spec-coverage-gap layered diagnosis; the sharp user-scope boundary; the failure-mode mapping (1 clean Survival Bias + 2 variants Sub-mode Single-Trap and Inherited Frame Lock); and the maintenance-candidate shape (7 candidates in two tiers with evaluation gates).

Decomposition partitioned the LOOP_DIAGNOSE-format output into four pieces: Correction Chain Summary; 5 Failure Hypothesis records + Attribution Table; 7 Maintenance Candidate records; Diagnostic Verdict. Innovation produced the records with full LOOP_DIAGNOSE format compliance — each hypothesis citing prior `innovation.md` text verbatim and `/innovate` spec text verbatim; each candidate naming the affected file, the proposed spec-text change, the risk class, the expected benefit, the evaluation gate, and whether it should be a branch experiment.

Critique adversarially tested each hypothesis (could the prior's output have arisen from correct depth-check application with a defensible different verdict?), each candidate (is the spec-text concrete enough? is the evaluation gate testable? is the risk class honest?), the ACTIONABLE verdict (does the single-correction-pair evidence justify it given LOOP_DIAGNOSE Step 5's caveat against broad fundamentals additions?), and a survival-bias second check (did the corrected output favor low-risk text additions over the disruptive Inherited Frame Audit?). All 5 hypotheses survived adversarial test; all 7 candidates survived with one refinement (A1's risk class slightly higher than initially claimed; appropriate branch-experiment treatment); the ACTIONABLE verdict held for Tier 1 with conditional ACTIONABLE for Tier 2.

The 14 inherited commitments were re-tested in Critique per the Synthesis Trigger declared in `_branch.md`. Outcomes: 8 `/innovate`-spec commitments PRESERVED; 3 prior-weak-inquiry commitments RE-TESTED with corrections; 3 corrected-inquiry commitments RE-TESTED CONFIRMED.

### The five failure hypotheses (LOOP_DIAGNOSE Step 4 format)

The hypotheses are reproduced in full from Innovation's output; Critique's verdicts are appended.

#### H1 — Inversion depth-check skipped (HIGH confidence; SURVIVES adversarial test)

**Affected stage:** `/innovate` Inversion mechanism. **Shortcoming type:** Sub-mode shallowness — depth-check stopped at component-level instead of reaching the system-level statement the spec mandates.

**Evidence from prior inquiry:** the prior's Inversion outputs were all about WHO or WHEN decides expansion within the existing frame — *"Instead of 'runner decides what to expand,' require routes to prove they deserve expansion"* (Generic); *"Default Expansion: no; expansion happens only when policy or user selection changes it"* (Focused); *"The runner should be allowed to stop early and say 'coverage is enough at this resolution'"* (Contrarian). All three stay within "expansion is something to limit"; none reach a system-level statement about whether the limit-expansion frame itself is right.

**Evidence from human correction:** the user's correction is exactly the system-level inversion the prior missed: *"i dont get why it is a problem that depth will uncover many directions?? it is okay and this is what we want."* This is a SYSTEM-LEVEL statement (the framing is wrong), not a COMPONENT-LEVEL statement (who decides).

**Evidence from corrected inquiry:** the corrected `/innovate`'s Inversion Generic produced the system-level statement verbatim: *"Invert 'limit expansions to avoid too many directions.' → 'record all directions first; limit only materialization.'"*

**/innovate spec quote grounding (Inversion mechanism, depth-check refinement):** *"Depth check: After each inversion, ask 'Can I invert AGAIN?' The first inversion often produces an incremental improvement. The second often reveals a structural change. Keep inverting until you reach a statement about the SYSTEM, not about a COMPONENT.* (...) *Component-level inversions find workarounds. System-level inversions find architectural solutions."*

**Confidence:** HIGH.

**Why not stronger:** the prior may have iterated multiple inversions internally and recorded only the terminal state. Even so, the terminal output is component-level — and the spec's depth-check is about the terminal output, not the iteration history.

**Maintenance candidate:** B1 (Inversion depth-check stopping criterion).

**Evaluation gate:** re-run a structurally similar inquiry under modified spec; verify Inversion's recorded terminal output is tagged as system-level or root-cause-level, not component-level.

#### H2 — Constraint Manipulation single-direction trap (HIGH confidence; SURVIVES)

**Affected stage:** `/innovate` Constraint Manipulation mechanism. **Shortcoming type:** Sub-mode Single-Trap — only the ADD direction was applied; the REMOVE direction was skipped.

**Evidence from prior inquiry:** all three Constraint Manipulation outputs in the prior add a constraint — *"Add a budget: depth, max_expansions, max_routes_per_map, and max_output_size"* (Generic); *"Add a policy: expansion-needed-only..."* (Focused); *"Forbid parallelism in v1..."* (Contrarian). Zero outputs apply the REMOVE direction.

**Evidence from human correction:** the user's question *"if you limit it with these other params then we are limiting the navigation no?"* is the REMOVE-direction question in user-form — asking whether the constraint should exist at all.

**Evidence from corrected inquiry:** the corrected `/innovate`'s Contrarian variation explicitly applied REMOVE: *"Remove the budget constraint entirely. Result: explicit exhaustive mode."*

**/innovate spec quote grounding (Constraint Manipulation mechanism, How to apply):** *"For each constraint, ask: 'What if I removed this?' and 'What if I added a new constraint?' Explore what becomes possible under the modified constraint set."*

The spec's "AND" is binding; the prior's all-ADD set fails the both-direction mandate.

**Confidence:** HIGH.

**Why not stronger:** the prior may have internally considered REMOVE and judged it unproductive. The spec doesn't explicitly mandate recording REMOVE outputs if they yield nothing — but the absence of any REMOVE consideration in the prior's output is the failure.

**Maintenance candidate:** B2 (Constraint Manipulation both-direction explicit requirement).

**Evaluation gate:** re-run a structurally similar inquiry; verify each CM invocation records at least one ADD and at least one REMOVE output, or explicitly flags "REMOVE-direction explored; no candidate" with reasoning.

#### H3 — Absence Recognition redesign-level question skipped (HIGH confidence; SURVIVES)

**Affected stage:** `/innovate` Absence Recognition mechanism. **Shortcoming type:** Sub-mode shallowness — only patch-level absences surfaced; the redesign-level question was not applied.

**Evidence from prior inquiry:** the prior's Absence Recognition outputs surfaced only patch-level absences — *"Missing artifact: homegrown/protocols/multi_resolution_navigation.md"* (Generic); *"Missing route fields: Expansion, Expansion reason, Child maps"* (Focused); *"Missing product surface: a composed route atlas may matter more than the runner command itself"* (Contrarian). The Contrarian gestures at a redesign concern (product surface) but stays within the runner-command framing.

**Evidence from human correction:** the user's correction implies a redesign-level absence — the design conflated EXPANSION-RECORDING (discovery) with EXPANSION-EXECUTION. A from-scratch redesign would separate them as distinct artifacts. The frontier ledger that emerged in the corrected inquiry is exactly that redesign-level absence.

**Evidence from corrected inquiry:** *"Absent artifact: a frontier ledger."* (Generic) — the redesign-level absence the prior missed.

**/innovate spec quote grounding (Absence Recognition, How to apply):** *"Ask: 'What would exist if this were designed from scratch today? What data, interface, or contract SHOULD exist between these components but was never created — because the system evolved incrementally?' The first three questions find gaps in the current design (a missing field, a missing validation, a missing handler). The last question finds things the current design never considered — structural absences that only become visible when you step outside the incremental mindset. The first finds patches. The last finds redesigns. Both are valid."*

The spec explicitly names two levels and says "Both are valid." The prior used only the patch level.

**Confidence:** HIGH.

**Why not stronger:** the prior's Contrarian is redesign-adjacent but doesn't apply the redesign-level question explicitly.

**Maintenance candidate:** B3 (Absence Recognition redesign-level explicit requirement).

**Evaluation gate:** verify AR records at least one patch-level AND at least one redesign-level absence per invocation.

#### H4 — Assembly-phase axis-coverage check skipped (HIGH confidence; SURVIVES — strongest candidate)

**Affected stage:** `/innovate` Phase 3 Test, Assembly Check, axis-coverage refinement. **Shortcoming type:** Refinement skipped entirely.

**Evidence from prior inquiry:** the prior's Assembly Check section listed seven implementation steps for the assembled protocol but did NOT explicitly identify the axes along which the candidate set varies. All seven prior candidates (A-G) vary along a single axis: budget magnitude or form. The orthogonal axis — discovery-versus-execution split, or track-versus-bound — is absent.

**Evidence from human correction:** the correction surfaces exactly the missing orthogonal axis: "track everything; bound only execution timing."

**Evidence from corrected inquiry:** the corrected inquiry's candidate set varies along two axes (budget control AND coverage preservation), with explicit candidates for both (Candidate C exhaustive mode preserves coverage; Candidate G frontier ledger is the orthogonal-axis variant).

**/innovate spec quote grounding (Phase 3 Test, Axis Coverage Check refinement):** *"Before producing the assembly verdict, examine the candidate set for the orthogonal axes it varies along.* (...) *each axis should have at least one candidate variant. A candidate set that varies along only one axis when multiple orthogonal axes are relevant is incomplete; the assembly check must explicitly identify the candidate-space axes and flag any axis with no variant.* **Single-axis candidate sets often arise from a frame inherited from upstream pipeline stages; the axis-coverage check counters that bias.**"

The bolded sentence is the spec's explicit counter to the exact pattern that failed in the prior. The check was not invoked.

**Confidence:** HIGH.

**Why not stronger:** the prior may have considered axes informally. But the spec mandates EXPLICIT identification; not done is not done.

**Maintenance candidate:** B4 (axis-coverage check explicit invocation requirement) — the strongest candidate; LOW risk; spec-quote-grounded; mechanical evaluation gate.

**Evaluation gate:** verify future `/innovate` Assembly Check sections explicitly enumerate the candidate-set axes and explicitly flag any RELEVANT axis with no candidate variant.

#### H5 — Inherited Frame Audit absent from /innovate spec (MEDIUM-HIGH confidence; SURVIVES; A1 branch-experiment)

**Affected stage:** `/innovate` spec — meta-trigger level, between mechanisms application and Assembly Phase. **Shortcoming type:** Spec-coverage gap (subtle, secondary to the execution gaps above). The spec has four named frame-escape features (Inversion depth-check; CM both-direction; AR redesign-level; axis-coverage check). The spec lacks an explicit meta-trigger that orchestrates those features against the candidate set's inherited assumptions when detected.

**Evidence from prior inquiry:** the prior applied all seven mechanisms (per its own telemetry) and reported *"Convergence: YES. Five mechanisms converge on protocol-backed budgeted traversal."* The discipline's existing convergence signal treated the within-frame convergence as a high-confidence success signal — without any meta-check that the convergence was on a frame inherited from the seed, not on a genuinely surfaced insight.

**Evidence from human correction:** the user delivered the audit manually. The correction is what the Inherited Frame Audit meta-step would have surfaced.

**Evidence from corrected inquiry:** the corrected `/innovate` ran with the inversion already in its seed — i.e., the audit had been done externally before the discipline ran. This confirms that with the inverted frame, `/innovate`'s mechanisms produce the correct architecture; the failure was at discovery (the audit), not at operationalization.

**/innovate spec quote grounding:** the spec has NO passage establishing an Inherited Frame Audit. The closest existing features are Failure Mode #3 Early Frame Lock (which addresses first-reframe lock, not inherited-frame lock) and Failure Mode #6 Survival Bias (which is a consequence-recognition signal, not a generation-time meta-trigger).

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** this is the most interpretive hypothesis. H1-H4's per-mechanism reinforcements may be sufficient to catch inherited-frame propagation at full depth without a separate meta-trigger. The single correction-pair doesn't isolate whether the spec-coverage gap is real or whether per-mechanism enforcement alone suffices.

**Maintenance candidate:** A1 (Inherited Frame Audit meta-trigger), recommended as branch experiment.

**Evaluation gate:** implement H1-H4 maintenance candidates first; re-run on a structurally similar inquiry; if per-mechanism reinforcement alone catches inherited-frame propagation, A1 is unnecessary. If propagation still occurs, A1 is justified.

### Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---|---|---|
| `/innovate` Inversion mechanism | Sub-mode shallowness (depth-check stopped at component-level) | STRONG (prior + spec + corrected divergence) | HIGH | B1 |
| `/innovate` Constraint Manipulation | Sub-mode Single-Trap (only ADD direction) | STRONG (prior + spec + corrected divergence) | HIGH | B2 |
| `/innovate` Absence Recognition | Sub-mode shallowness (only patch-level) | STRONG (prior + spec + corrected divergence) | HIGH | B3 |
| `/innovate` Assembly Phase | Refinement skipped (axis-coverage check not invoked) | STRONG (prior Assembly section + spec quote naming the inherited-frame counter) | HIGH | B4 (strongest single candidate) |
| `/innovate` spec-coverage layer | Missing meta-trigger (Inherited Frame Audit absent) | MEDIUM (interpretive; single correction-pair) | MEDIUM-HIGH | A1 (branch experiment) |

### Seven Maintenance Candidates (Two-Tier Strategy)

The candidates are reproduced in summary from Innovation. Each targets `/innovate`'s spec only.

#### Tier 1 — Land immediately (six candidates, LOW risk)

- **B1 — Inversion depth-check stopping criterion** *(addresses H1).* Add to Inversion mechanism's How-to-apply: explicit stopping criterion language reinforcing that terminal Inversion outputs must reach a system-level statement. Recorded terminal outputs at component-level should be flagged as not-terminal; the discipline should invert again. Critique-suggested softening: "consider inverting again before recording as terminal" rather than "MUST."
- **B2 — Constraint Manipulation both-direction explicit requirement** *(addresses H2).* Add to CM How-to-apply: BOTH directions are mandatory per invocation. Record at least one ADD and at least one REMOVE output, or explicitly flag "REMOVE-direction explored; no candidate" with reasoning.
- **B3 — Absence Recognition redesign-level explicit requirement** *(addresses H3).* Add to AR How-to-apply: BOTH levels are mandatory. Record at least one patch-level and at least one redesign-level absence per invocation, or explicitly flag "redesign-level question yielded no novel absence" with reasoning.
- **B4 — Axis-coverage check explicit invocation requirement** *(addresses H4; strongest single candidate).* Add to Phase 3 Test's Axis Coverage Check refinement: the check is MANDATORY. Before producing the Assembly Check verdict, explicitly identify the axes along which the candidate set varies, name any orthogonal axes RELEVANT but absent, and either produce at least one candidate variant per absent axis or flag "axis identified but no candidate variant produced" with reasoning.
- **C1 — Add "Inherited Frame Lock" failure mode** *(addresses H5 partial).* Either extend FM #3 Early Frame Lock's definition to include the inherited-frame variant, or add a new 7th failure mode. Recognition signal: every mechanism's output is consistent with the seed's central assumption.
- **C2 — Add "Sub-mode Single-Trap" failure mode** *(addresses H1+H2+H3 partial).* Either extend FM #2 Single-Mechanism Trap to include the sub-mode-level variant, or add a new failure mode. Recognition signal: a mechanism's output set covers only one of its named sub-modes.

#### Tier 2 — Branch experiment first (one candidate, MEDIUM-to-MEDIUM-HIGH risk)

- **A1 — Inherited Frame Audit meta-trigger** *(addresses H5).* Add a new spec sub-section between Phase 2 Generate and Phase 3 Test. The audit: if the candidate set's outputs all share an assumption inherited from the seed without being challenged by any mechanism's output, force-apply the four frame-escape features (Inversion at system-level depth; Lens Shifting on the success-criterion; Constraint Manipulation REMOVE on the seed's central constraint; Absence Recognition redesign-level on the seed's design) against that assumption explicitly. Then return to Phase 2 with the new outputs. Branch-experiment validation across 3-5 future inquiries should compare /innovate-with-B1-B4-only against /innovate-with-B1-B4-AND-A1 to isolate A1's marginal value.

### Diagnostic Verdict

**Overall: ACTIONABLE for Tier 1; CONDITIONAL ACTIONABLE for Tier 2.**

- **Best-supported diagnosis:** the prior `/innovate` run failed to escape an inherited "expansion must be bounded" frame because four named frame-escape features that exist in `/innovate`'s current spec were not applied at full depth in the prior's execution. This is primarily a spec-execution gap with a secondary subtle spec-coverage gap.

- **Strongest maintenance candidate:** B4 (Axis-coverage check explicit invocation requirement). It is LOW risk, the underpinning spec quote explicitly names this as the counter to inherited-frame propagation, its evaluation gate is mechanical, and a single-line spec edit would have caught the prior's failure. If the user adopts only one candidate, B4 is the recommendation.

- **Main uncertainty:** whether per-mechanism reinforcements (B1-B4) alone catch the failure pattern, or whether the Inherited Frame Audit meta-trigger (A1) is also needed. A single correction-pair does not isolate this. The branch-experiment treatment of A1 is the appropriate honoring of LOOP_DIAGNOSE Step 5's caveat ("Do not propose broad fundamentals rewrites from one weak correction chain").

- **Recommended next step:** implement Tier 1 (B1-B4 + C1-C2) in `/innovate` spec immediately — LOW risk, HIGH-confidence hypotheses, concrete spec-text additions, testable evaluation gates. Treat A1 as a branch experiment running on the next 3-5 `/innovate` inquiries that exhibit potential inherited-frame seeds. If Tier 1 alone catches propagation reliably, A1 stays deferred. If propagation still occurs, A1 is justified.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger consolidating three priors. Per CONCLUDE's enforcement, each inherited commitment is re-tested below.

### From `cognitive_harness/innovate/references/innovate.md`

- **Commitment:** 2-operation structure (Generation + Framing). **Re-test status:** RE-TESTED PRESERVED. **Evidence:** all seven maintenance candidates slot within existing structure; no new operation added. B1-B4 reinforce existing mechanism How-to-apply text; C1-C2 extend failure-mode definitions; A1 adds a meta-step that orchestrates existing features.
- **Commitment:** 7-mechanism vocabulary. **Re-test status:** RE-TESTED PRESERVED. **Evidence:** no new mechanisms; the candidates strengthen existing mechanism applications.
- **Commitment:** Inversion depth-check refinement. **Re-test status:** RE-TESTED CONFIRMED MISSED in prior. **Evidence:** prior's three Inversion outputs are all component-level; the spec mandates system-level termini; the corrected inquiry's Generic produced the system-level statement verbatim.
- **Commitment:** Constraint Manipulation both-direction text. **Re-test status:** RE-TESTED CONFIRMED MISSED in prior. **Evidence:** prior's three CM outputs are all ADD-direction; the spec uses AND between both directions; the corrected inquiry's Contrarian applied REMOVE explicitly.
- **Commitment:** Absence Recognition redesign-level question. **Re-test status:** RE-TESTED CONFIRMED MISSED in prior. **Evidence:** prior's three AR outputs are patch-level only; spec explicitly names two levels with "Both are valid"; corrected produced the redesign-level absence (frontier ledger).
- **Commitment:** Axis-coverage check refinement. **Re-test status:** RE-TESTED CONFIRMED MISSED in prior. **Evidence:** prior's Assembly Check section did not explicitly identify candidate-set axes; spec's bolded text names this as the counter to inherited-frame propagation.
- **Commitment:** 6 failure modes. **Re-test status:** RE-TESTED — 3 apply to the prior's pattern (Survival Bias clean; Single-Mechanism Trap as sub-mode variant; Early Frame Lock as inherited-frame variant). **Evidence:** prior's surviving Candidate B matches Survival Bias recognition signal; prior's CM all-ADD matches Single-Mechanism Trap sub-mode variant; prior's full-7-mechanism-application-yet-frame-locked matches Inherited Frame Lock pattern (extension of Early Frame Lock).
- **Commitment:** 5-test cycle. **Re-test status:** RE-TESTED PRESERVED. **Evidence:** the cycle applies unchanged to all new and existing mechanism outputs.

### From `devdocs/inquiries/_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/finding.md` (the prior weak inquiry)

- **Commitment:** *"Convergence: YES. Five mechanisms converge on protocol-backed budgeted traversal."* **Re-test status:** RE-TESTED — convergence is real but WITHIN the inherited frame. The spec's convergence signal currently doesn't distinguish "convergence on a genuinely surfaced insight" from "convergence on a frame-inherited assumption." This is part of H5's coverage gap.
- **Commitment:** *"Failure modes observed: none."* **Re-test status:** RE-TESTED — Survival Bias and Inherited Frame Lock variant DID apply. The prior's self-check failed to catch them. This is failure-mode-self-check blindness in execution; the C1+C2 candidates would give the self-check explicit recognition signals for these patterns.
- **Commitment:** Surviving Candidate B (Budgeted Traversal Runner). **Re-test status:** RE-TESTED — surface-correct, frame-locked. Engineered correctly within the inherited frame; would have shipped a budget-bounded runner that erased unrun paths.

### From `devdocs/inquiries/_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/finding.md` (the corrected inquiry)

- **Commitment:** *"Convergence: YES. Five mechanisms converge on the same core innovation: a persistent frontier ledger plus batch/exhaustive modes."* **Re-test status:** RE-TESTED CONFIRMED. The corrected's convergence is on the frontier-ledger frame, structurally different from the prior's budget frame. Same spec, different seed-frame, different convergence target. Confirms that `/innovate`'s mechanisms operate correctly once the right frame is established.
- **Commitment:** Surviving Candidate G (Frontier Ledger / Coverage Ledger). **Re-test status:** RE-TESTED CONFIRMED. Matches the user's intent to preserve breadth while controlling execution timing.
- **Commitment:** The corrected's seed declares the breadth-is-feature inversion as starting input. **Re-test status:** RE-TESTED — confirms that the prior's discovery failure was DISCOVERABLE with `/innovate`'s existing tools. The corrected didn't have to discover the inversion; the prior should have but didn't.

---

## Next Actions

### MUST

- **What:** Implement Tier 1 maintenance candidates (B1, B2, B3, B4, C1, C2) directly in `cognitive_harness/innovate/references/innovate.md`. **Who:** project lead via direct spec edit. **Gate:** condition-bound — when the user accepts these as the input to the next `/innovate` spec edit. **Why:** Tier 1 candidates are LOW-risk text additions backed by HIGH-confidence hypotheses with direct spec-quote evidence; they will catch most of the inherited-frame-propagation pattern without further validation.

### COULD

- **What:** Set up the A1 branch experiment. **Who:** project lead via `/MVL+` or direct spec-fork. **Gate:** observable — fire after Tier 1 has been integrated and at least 3 future `/innovate` inquiries have run under the modified spec. **Why:** A1 (Inherited Frame Audit) is MEDIUM-to-MEDIUM-HIGH risk; its marginal value over Tier 1 alone is unclear from one correction-pair; branch-experiment validation across 3-5 inquiries would isolate the marginal value. **Depends-on:** MUST item "Tier 1 implementation." Override: COULD requires the MUST to land first because the branch experiment compares Tier-1-only against Tier-1-plus-A1.

- **What:** Run cross-discipline loop_diagnose inquiries for the other pair-rows from the 19-pair dataset that this finding noted as out-of-scope (specifically pointers to `/sensemaking` for the inherited seed framing and `/td-critique` for the absent assumption-challenge test on the prior's surviving candidate). **Who:** project lead via `/MVL+` with LOOP_DIAGNOSE framing. **Gate:** condition-bound — when /sensemaking or /td-critique improvement attention is ready. **Why:** the prior `/td-critique` should have surfaced the inherited-frame issue during Scrutiny Survival on Candidate B; the prior `/sensemaking` should have done a perspective-check that surfaced the seed's "expansion is risk" assumption as contestable. Both are real gaps; this inquiry scoped them out per the user's instruction. **Depends-on:** MUST item not required; this is independent work. OVERRIDE: this COULD is fully decoupled from the MUST.

- **What:** Add a "level tagging" output convention to `/innovate`'s mechanism outputs (Inversion outputs tagged component / system / root-cause; AR outputs tagged patch / redesign). **Who:** project lead via spec edit. **Gate:** condition-bound — fire alongside Tier 1 implementation. **Why:** makes B1, B3 evaluation gates mechanical (verify the tag exists in output). Trivial cost; high diagnostic value.

### DEFERRED

- **What:** Reconsider A1's risk class if the branch experiment reveals it's HIGH rather than MEDIUM (e.g., the new Phase 2.5 changes /innovate runtime behavior in unexpected ways). **Gate:** condition-bound — after the branch experiment completes. **Why (if revived):** would require pulling A1 back to RESEARCH FRONTIER until a more careful design pass.

- **What:** Refine the spec's existing "convergence: YES" signal to distinguish "convergence on a genuinely surfaced insight" from "convergence on a frame-inherited assumption." **Gate:** observable — fire if multiple future loop_diagnose findings reveal the same convergence-within-inherited-frame pattern. **Why (if revived):** the prior's "Convergence: YES" report was technically true but structurally misleading; future runs would benefit from a frame-aware convergence signal. Currently deferred because single correction-pair doesn't justify modifying the convergence-signal definition.

---

## Reasoning

### Significant rejections

**The prior's surviving Candidate B (Budgeted Traversal Runner) was correctly engineered within an inherited frame.** It would have shipped a budget-bounded runner that erased unrun paths. Adopting it would have realized the exact failure the user later identified. The corrective is not to re-engineer Candidate B but to give `/innovate` the tools to detect inherited-frame propagation BEFORE such candidates emerge as the discipline's recommendation. That's what Tier 1 + Tier 2 candidates target.

**The "single mechanism trap" failure mode does NOT cleanly apply to the prior's pattern** because the prior applied all seven mechanisms. The trap was at the sub-mode level within mechanisms (only ADD direction of CM; only component-level depth of Inversion; only patch-level of AR). This is a structurally distinct variant warranting either an extended FM #2 definition or a new failure-mode entry — addressed by C2.

**The "early frame lock" failure mode does NOT cleanly apply either** because the prior's lock wasn't at "first successful reframe" — it was at the seed-inherited frame, with all mechanisms operating within it. Same VARIANT issue — addressed by C1.

### What survived intact

`/innovate`'s 2-operation structure (Generation + Framing), 7-mechanism vocabulary, 5-test cycle, 6 failure-mode list, disposition categories, assembly check, and existing refinement notes all survive re-test. The diagnosis is layered: spec-execution gap (the discipline didn't apply tools that exist) + subtle spec-coverage gap (the spec lacks a meta-trigger orchestrating those tools when inherited-frame propagation occurs). Both are real; both are addressed by the maintenance candidates.

### Why this answer over the alternatives

The most disruptive alternative — adding a new top-level operation to `/innovate` (parallel to Generation + Framing) for "frame-auditing" or "self-critique" cognitive moves — was considered and rejected. `/innovate`'s 2-operation structure has been stable; adding a third operation should be justified by stronger evidence than a single correction-pair. The Inherited Frame Audit meta-trigger (A1) is much narrower — a new sub-step within the existing Phase 2 → Phase 3 flow, not a new top-level operation. This is appropriately scoped to the evidence.

The most conservative alternative — only land C1+C2 (failure-mode-list extensions; documentation only) — was rejected as under-responsive. C1+C2 give the self-check recognition signals but don't enforce prevention; the discipline could still produce frame-locked candidates and only catch the failure at the end-of-run self-check. B1-B4 prevent the failure at generation time, which is structurally preferable.

### Self-reference flag

This diagnostic was produced by a `/MVL+` Extended Cognitive Loop applied to a question about another `/innovate` run. Self-reference risk: the diagnostic could rubber-stamp the discipline (find no failures because the discipline's vocabulary matches the analysis). Mitigation: every claim cites direct spec quotes (`cognitive_harness/innovate/references/innovate.md`) plus direct prior-output quotes (the archived `innovation.md` files from the correction chain). The user can verify each claim by reading the cited source directly — the diagnostic is externally checkable.

Notable: the corrected inquiry's `/innovate` produced exactly the cognitive moves the prior missed — the system-level Inversion, the REMOVE-direction CM, the redesign-level AR absence — and produced them under the SAME `/innovate` spec. This is strong evidence that the spec supports the move and the prior's failure was at execution, not at spec coverage. The Layer 2 subtle coverage gap (Inherited Frame Audit absent) is a more interpretive claim, hence MEDIUM-HIGH confidence and branch-experiment treatment.

---

## Open Questions

### Monitoring

- After Tier 1 candidates land, observe whether the next 3-5 `/innovate` inquiries that exhibit potential inherited-frame seeds catch the propagation pattern via the per-mechanism reinforcements alone, or whether some still slip through and require A1.
- Observe whether the "level tagging" output convention (component / system / root-cause for Inversion; patch / redesign for AR) is consistently applied. If not, the discipline's adherence to the new spec text is the issue rather than the spec text itself.
- Observe whether C1+C2 failure-mode-list extensions actually fire in `/innovate`'s end-of-run self-check on subsequent runs.

### Blocked

- The branch experiment for A1 is blocked on Tier 1 implementation. Without Tier 1 as the baseline, comparing Tier-1-only against Tier-1-plus-A1 is impossible.
- Cross-discipline improvement work (/sensemaking, /td-critique inquiries on this same correction-pair's other implications) is blocked on user attention to those disciplines — not on this finding's content.

### Research Frontiers

- **Whether `/innovate`'s convergence signal should distinguish frame-inherited convergence from genuinely surfaced convergence.** The prior's "Convergence: YES" was technically true but structurally misleading. Currently no research path; would emerge if multiple future loop_diagnose findings show the same convergence-within-inherited-frame pattern.

### Refinement Triggers

- If the A1 branch experiment validates marginal value across 3+ inquiries, promote A1 from branch experiment to main spec landing.
- If the A1 branch experiment shows no marginal value over Tier 1, defer A1 indefinitely.
- If a NEW correction chain reveals a different sub-mode shallowness pattern (e.g., Combination's sources-list applied with only one source), consider extending Tier 1 with an additional B-candidate following the same pattern.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
use cognitive_harness/protocols/loop_diagnose.md
one innovation fix pair is 

| # | Prior → Follow-up | Primary T-tag | Sub-type |
|---|---|---|---|
| 9 | `_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param` → `_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage` | T1 generative-content | dimensional correction (budget-vs-coverage) |


i want you to analyse exactly what when wrong with innovation that it missed this.  but make sure only focus on what innovation should do, and not job of other disciplines, this will be used to improve innovation later on but this is not our scope now.
```

</details>
