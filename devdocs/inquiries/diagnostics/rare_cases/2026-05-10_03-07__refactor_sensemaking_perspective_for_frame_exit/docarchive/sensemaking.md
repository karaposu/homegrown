# Sensemaking: Refactor a Sensemaking perspective into 2 to catch frame-exit?

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/_branch.md`

> **Question:** Is one of Sensemaking's 8 Phase-2 perspectives doing two distinct cognitive jobs that could be refactored into 2 perspectives, where the split would (a) make frame-exit checking a first-class operation and (b) NOT hurt Sensemaking's generic capability? If yes, which perspective splits cleanest, and what is the gating that prevents spurious-firing?

Exploration converged: **Definitional / Consistency** is the sole strong refactor candidate; proposed split is Internal-Consistency + Frame-exit-Completeness; gating analogous to Phase/Calibration-State's conditional pattern.

---

## SV1 — Baseline Understanding

The user's hypothesis (refactor an existing perspective) is more elegant than the prior M7 candidate (add a new perspective) IF a clean refactor exists. Exploration says yes — D/C bundles 3 cognitive jobs and a 4th implicit-but-unspec'd move (frame-exit completeness). Splitting into two named perspectives makes the implicit move first-class while preserving the existing capability.

But the analysis carries 3 risks: (1) self-reference (using Sensemaking to redesign Sensemaking), (2) over-fitting from N=1, (3) the split might be a renaming-without-substance dressed up as a refactor.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (limits, requirements, boundaries)

- **C1: User's two MUST conditions.** (a) The frame-exit gap must be real. (b) The refactor must NOT hurt Sensemaking's generic capability.
- **C2: `homegrown/protocols/loop_diagnose.md` Step 5** still applies. Even if the refactor is structurally clean, ship-now is over-reach from N=1; recommendation must be DEFERRED.
- **C3: Sensemaking spec text already shows D/C bundling 3 cognitive jobs** (per Exploration's R-A inventory): forward consistency, anchor-strength weighting, reverse self-consistency.
- **C4: Phase/Calibration-State's conditional gating pattern exists** — analogous gating for the new sub-perspective is supported by precedent.
- **C5: Self-reference risk is acute.** This sensemaking redesigns sensemaking. External anchoring required at every load-bearing claim.
- **C6: User asked for a specific shape: refactor existing perspective into 2.** This excludes "add a brand-new perspective" alternatives unless explicitly justified as superior.

### Key Insights (non-obvious implications)

- **K1: D/C's broad spec already implies the frame-exit move.** The phrase *"established definitions, principles, or prior stabilized models"* in D/C's spec text is broad — "prior stabilized models" reasonably includes the project's project-wide model space, not just the inquiry's frame. The prior Memory failure narrowed D/C in application; the refactor would make the broad scope explicit, not invent new behavior.
- **K2: The split is a SCOPE CLARIFICATION, not a feature addition.** Internal-Consistency = the narrower interpretation D/C is currently applied as. Frame-exit-Completeness = the broader interpretation D/C's spec already permits but doesn't operationalize. The substantive change is application-level: forcing the broader scope check via a named sub-perspective.
- **K3: The other 7 perspectives are single-mode.** Per Exploration's inventory, Technical, Human, Strategic, Risk, Resource, Ethical, Phase-Calibration each do one cognitive job. None has D/C's structural overload. So D/C is uniquely the candidate.
- **K4: The frame-exit gap is PROJECT-LEVEL, not inquiry-specific.** Any inquiry that builds on prior findings + organizes terms into a frame is at risk. The Memory failure is one instance; the prior loop_diagnose suspected Reflect-channel as another. Multi-instance evidence is gated on M4 audit.
- **K5: The gating must use existing pattern (Phase/Calibration-State conditional)** to be coherent with the spec's idiom. Anything else creates inconsistency.
- **K6: The refactor and the prior M7 (add new perspective) are STRUCTURALLY EQUIVALENT in net behavior** — both end up with Sensemaking having 8 named perspectives plus the conditional 9th (Frame-exit). The difference is conceptual: refactor honors the spec's existing broad scope (D/C); add-new asserts a missing capability. The user's preference for refactor is justified IF D/C's broad scope is genuinely there in the spec, NOT if it's a strained reading.
- **K7: Self-reference mitigation: the user IS outside the loop's frame.** The user proposed the refactor; this analysis verifies it. The user's frame-exit perspective on Sensemaking-spec (via this question) provides external grounding that the loop's internal analysis cannot fully replicate.

### Structural Points (core components, relationships)

- **SP1: D/C's bundled jobs.** (a) Forward consistency: new claim against established. (b) Anchor-strength weighting: weak vs strong adjudication. (c) Reverse self-consistency: established stuff against itself. (d) [implicit / not operationalized] Frame-exit completeness: established stuff's scope completeness against project-wide referents.
- **SP2: Proposed split.**
  - **Definitional / Internal Consistency** — preserves jobs (a)+(b)+(c). Scoped explicitly: within-inquiry stabilized models.
  - **Definitional / Frame-exit Completeness** — operationalizes job (d). Conditional gating: triggered when the inquiry has inherited multi-value terms or organizing frames.
- **SP3: Gating predicate.** Trigger Frame-exit Completeness sub-perspective WHEN: (i) the inquiry's commitments include terms inherited from prior findings or framing-level commitments AND (ii) those terms are used across multiple values/levels (i.e., load-bearing in multi-row tables, multi-axial frames, ladders, or other organizing structures).
- **SP4: Non-hurt argument.** For non-frame-bounded inquiries (no inherited multi-value terms; no organizing frames), the gating predicate is FALSE; the sub-perspective auto-skips. Cost: zero.
- **SP5: Step 5 restraint.** Even with the design analysis complete, the recommendation must be DEFERRED pending M4 audit per `homegrown/protocols/loop_diagnose.md`.

### Foundational Principles (assumptions, rules, axioms)

- **P1: External anchoring is mandatory.** Cite spec text and prior-output text for every load-bearing claim.
- **P2: A refactor is preferable to an addition** when the refactor honors existing spec scope (D/C's broad reading) and doesn't add net new behavior. The reasoning: maintains spec parsimony; avoids appearance of patching.
- **P3: Step 5 restraint applies regardless of how clean the design is.** N=1 evidence cannot ship spec changes; the refactor must be DEFERRED with revival trigger even if structurally compelling.
- **P4: Specific-vs-pattern: address Memory specifically with high confidence; address the broader pattern (term-ambiguity-in-frame-bounded-inquiry) with deferred confidence pending audit.**

### Meaning-Nodes (central concepts and themes)

- **M1: Refactor over addition.** When existing spec scope already implies the missing operation, refactor (clarify scope by splitting) rather than add (assert missing capability).
- **M2: Application-level vs spec-level fix.** D/C's spec is correct; its application has been narrow. The refactor's value is in making application-time recognition easier, not in changing what the spec permits.
- **M3: Conditional gating.** The spec already has the conditional-gating idiom (Phase/Calibration-State, Ethical/Systemic). New sub-perspective uses the same idiom for consistency.
- **M4: Step 5 deferral.** No spec change ships from N=1, regardless of design quality.

### SV2 — Anchor-Informed Understanding

The proposed refactor is **Definitional / Consistency split into Definitional / Internal Consistency + Definitional / Frame-exit Completeness**, where:
- Internal Consistency preserves D/C's existing 3 cognitive jobs (forward consistency, anchor-strength weighting, reverse self-consistency), scoped to within-inquiry stabilized models.
- Frame-exit Completeness operationalizes D/C's broad spec scope ("prior stabilized models" project-wide) as a first-class conditional sub-perspective gated on inherited multi-value terms or organizing frames.

The refactor's structural value: it's **scope clarification, not capability addition**. D/C's spec already permits the broader check; the application has narrowed it. Splitting and gating makes the broader scope explicit.

The refactor's commitment status: **DEFERRED per loop_diagnose Step 5.** Design analysis is structurally compelling but N=1 evidence does not justify shipping. Revival trigger: M4 audit produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries.

The refactor's relationship to prior M7: **structurally equivalent net behavior.** Both end with Sensemaking having a frame-exit operation. The difference is conceptual framing. The refactor is preferable because it honors D/C's existing broad spec rather than asserting a missing capability — but only marginally. If the user prefers M7's framing (cleaner narrative), that's a defensible choice.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **C-T1: D/C's spec text bundles 3 cognitive jobs verifiably** (per Exploration's reading of `homegrown/sense-making/references/sensemaking.md` lines 213). Splitting cleanly is structurally supportable.
- **C-T2: The gating predicate (inherited multi-value terms + organizing frames) is operational.** The runner can detect inherited terms (cross-reference inquiry's _branch.md and prior-finding references) and organizing frames (multi-row tables, taxonomies, ladders). Non-trivial but feasible.

### Human / User

- **C-H1: User explicitly asked for refactor over addition.** The user's framing ("maybe one of the perspectives can be refactored into 2") signals a preference for parsimony. The analysis honors this if D/C splits cleanly.
- **C-H2: User wants to know if the refactor is REAL or strained.** The MUST condition "(a) the gap must be real" captures this. The refactor is real if D/C's spec genuinely permits the broader scope — which it does ("prior stabilized models" is project-wide-readable).

### Strategic / Long-term

- **C-S1: Refactoring vs adding has long-term consequences.** Refactoring D/C teaches the loop "Sensemaking spec already had the right answer; application narrowed it" — a learning posture about RECOGNIZING existing capability. Adding a new perspective teaches "Sensemaking needed a new capability" — a learning posture about EXTENDING capability. The refactor is a more conservative, more spec-honoring posture.
- **C-S2: As Sensemaking's spec evolves, the refactor's clarification will compound.** Future inquiries reading the split will be less likely to narrow D/C in application. If the project produces N inquiries over time, the refactor's value is N × marginal-correct-application instead of one-off correct-application.

### Risk / Failure

- **C-R1: Self-reference collapse.** This sensemaking redesigns sensemaking. Mitigation: every load-bearing claim cites spec text + the user's external-frame question (the user IS outside the loop's reasoning frame).
- **C-R2: Over-fitting from N=1.** The refactor proposal might fit Memory specifically and miss broader patterns. Mitigation: defer commitment per Step 5; audit-revival.
- **C-R3: Renaming-without-substance risk.** Is the refactor really substantive, or is it cosmetic — adding "Frame-exit Completeness" as a name without really changing application? Mitigation: the gating predicate is the substantive part. Without gating, the split is cosmetic; with gating, the split forces application of the broader scope on inherited multi-value terms.

### Resource / Feasibility

- **C-F1: Spec edit cost is small.** Adding ~5 lines to `homegrown/sense-making/references/sensemaking.md` Phase 2 + amending the existing D/C text is a minor edit. Comparable to the prior M7 addition cost.
- **C-F2: Application cost on existing inquiries is zero.** Past inquiries' sensemaking outputs aren't retroactively changed; the refactor applies forward.

### Definitional / Consistency (existing perspective applied to this analysis)

- **C-D1: Forward consistency:** does this analysis contradict the Sensemaking spec? **No.** The proposed split honors the spec's existing broad scope and uses the existing conditional-gating idiom.
- **C-D1b: Anchor-strength:** the spec text (HIGH confidence anchor) supports the split. The N=1 evidence (LOW confidence anchor) limits to design-only, not commitment.
- **C-D1c: Reverse self-consistency:** does the proposed split's text contradict itself? **Test pending — Innovation will draft the actual sub-perspective wording.**
- **C-D1d: Frame-exit completeness (the very thing being designed):** what does "Sensemaking spec" mean PROJECT-WIDE? At `/Users/ns/.claude/skills/sense-making/references/sensemaking.md` (the source). Plus: outputs across all inquiries' sensemaking.md files; conceptual vocabulary across `enes/` and other docs. The refactor would propagate into FUTURE outputs but not retroactively change past ones. This frame-exit check confirms the refactor's scope is bounded; it doesn't have unintended cross-project effects.

### Phase / Calibration-State

- **C-P1: Project-stage appropriateness.** Currently at L0 of the meta-loop ladder. The refactor doesn't depend on a higher meta-loop level. It applies at the per-MVL+-run level.
- **C-P2: Calibration trigger.** The M4 audit IS the calibration. Defer commitment until calibration data exists.

### SV3 — Multi-Perspective Understanding

The refactor stabilizes as: **Definitional / Consistency split into Definitional / Internal Consistency + Definitional / Frame-exit Completeness, with the latter conditionally gated on inherited multi-value terms or organizing frames, structurally equivalent in net behavior to prior M7 but conceptually preferable because it honors D/C's existing broad spec, with commitment DEFERRED pending M4 audit per Step 5.**

The two MUST conditions are met:
- **Gap is real:** D/C's broad spec implies the frame-exit move; the prior Memory failure shows it wasn't operationalized in application.
- **Generic capability not hurt:** the gating predicate auto-skips on non-frame-bounded inquiries; the spec already has analogous conditional-gating idioms (Phase/Calibration-State).

Self-reference risk is acute but mitigated via: spec-text external anchoring; the user's frame-exit framing of THIS very question (the user is outside the loop's reasoning); refusal to ship from N=1 evidence.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1: Is the refactor genuinely substantive, or renaming-without-substance?

**Strongest counter-interpretation:** The refactor's only substantive change is the gating predicate. Without gating, the split is cosmetic — both sub-perspectives describe the same operation differently. With gating, only the second sub-perspective's gating is new behavior; the first sub-perspective is just D/C with a clarified scope. So the refactor is really "D/C with a new conditional gate" — equivalent to prior M7 but framed as "split" rather than "add."

**Why the counter-interpretation has merit AND fails:**
- MERIT: the substantive new behavior is the gated frame-exit check; the rest is renaming.
- FAILURE: renaming has VALUE for application-time recognition. The current D/C text says *"established definitions, principles, or prior stabilized models"* — broad. The application read it narrowly. If the spec text explicitly distinguishes Internal Consistency (within-inquiry) from Frame-exit Completeness (project-wide), the application's narrowing becomes self-evidently incomplete.
- Renaming + gating + scope-clarification together IS substantive. Each component alone is small; the bundle is meaningful.

**Confidence:** HIGH. The refactor is substantive enough to justify the proposal.

**Resolution:** The refactor IS substantive. Renaming is the conceptual change; gating is the behavioral change. Together they make the broad scope explicit and operationalized.

**What is now fixed?** The refactor includes BOTH a renaming/scope-clarification AND a conditional gating predicate. Either alone is incomplete.

**What is no longer allowed?** Treating the refactor as "just renaming" or "just adding a gate."

**What now depends on this choice?** Innovation must draft the actual spec text for both sub-perspectives, including the gating predicate. Critique must test that the bundled change is more than the sum of its parts.

---

### Ambiguity #2: Is "refactor" really preferable to "add new perspective" (prior M7)?

**Strongest counter-interpretation:** The prior M7 (add a new "Frame-exit" perspective) is conceptually cleaner. The refactor introduces a HIERARCHY (Definitional / Internal vs Frame-exit) inside an otherwise FLAT perspective list — adding structural complexity. M7 keeps the list flat. The user's preference for refactor might not be the structurally best choice; it might just be the user's instinct.

**Why the counter-interpretation has merit AND fails:**
- MERIT: a flat list of perspectives is structurally simpler; refactor adds a 2-level hierarchy under "Definitional / ___."
- FAILURE: the spec already has 2-level hierarchy in perspective names (Technical / **Logical**, Human / **User**, Strategic / **Long-term**, Risk / **Failure**, Resource / **Feasibility**, Ethical / **Systemic**, Definitional / **Consistency**, Phase / **Calibration-State**). The first part is the category; the second part is the specific dimension. The refactor would make Definitional have TWO dimensions (Internal Consistency, Frame-exit Completeness) — analogous to a category having multiple subordinate names. This is a small extension of the existing pattern, not a new structural complexity.

**Confidence:** MEDIUM-HIGH. The refactor is structurally compatible with the spec's existing naming pattern; M7 (add new top-level perspective) is also compatible. The choice is preference-shaped, not structurally forced.

**Resolution:** The refactor is preferable for two reasons: (a) honors D/C's existing broad spec rather than asserting a missing capability; (b) the spec's existing pattern allows multi-dimension categories. But M7 is also defensible. Either path produces structurally equivalent net behavior.

**What is now fixed?** Refactor is the recommended path; M7 is an acceptable alternative if the user prefers flat-list framing.

**What is no longer allowed?** Claiming refactor is the ONLY structurally valid path; both are valid.

---

### Ambiguity #3: Does the gating predicate (inherited multi-value terms + organizing frames) actually auto-skip on non-frame-bounded inquiries?

**Strongest counter-interpretation:** The gating predicate uses subjective categories ("inherited terms," "organizing frame") that the runner might over-apply. For a moderately complex Sensemaking run on, say, a code review (no obvious organizing frame), the runner might still wonder "is the function-name 'authenticate' an inherited term?" and trigger the sub-perspective spuriously.

**Why the counter-interpretation has merit AND fails:**
- MERIT: subjective gating predicates can be applied loosely; risk of over-firing.
- FAILURE: the predicate has TWO conjunctive conditions — "inherited" AND "multi-value." Even if "inherited" is loosely applied, the multi-value condition (term used across multiple values/levels) is sharp. Function-name "authenticate" used once isn't multi-value. The conjunction tightens the gating.
- Plus: spec-text can include examples — "inherited terms" with explicit examples (the metaloop-ladder's Memory; suspected Reflect-channel) and counter-examples (a function-name used once). Examples ground the predicate.

**Confidence:** MEDIUM-HIGH. Gating is tight enough under correct interpretation; spec-text examples reduce over-firing risk.

**Resolution:** The gating predicate uses two conjunctive conditions and is supported by examples in the spec text. Auto-skip on non-frame-bounded inquiries is plausible; empirical confirmation is part of the audit-deferred validation.

---

### Ambiguity #4: Is the refactor's commitment-status really DEFERRED, or is it strong enough to ship?

**Strongest counter-interpretation:** The design analysis is structurally compelling. D/C's broad spec is verifiably broad. The split is honest. Why defer? Step 5's "don't propose broad rewrites from N=1" applies to BROAD REWRITES — this is a small spec edit, not a broad rewrite. So committing should be allowed.

**Why the counter-interpretation has merit AND fails:**
- MERIT: a small spec edit is technically distinguishable from a broad rewrite. Step 5's strict literal reading might allow it.
- FAILURE: the spirit of Step 5 is precaution against over-fitting from N=1. Even small edits to load-bearing project files (the Sensemaking spec is exactly that) are subject to the precaution. The user explicitly asked for caution ("only if it is a real missing thing"). The audit IS the calibration mechanism the project's own protocols define. Bypassing it would undermine the project's evidence-discipline.

**Confidence:** HIGH. DEFERRED is the right commitment-status.

**Resolution:** DEFERRED per Step 5 spirit. Revival trigger: M4 audit produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries. If the audit confirms recurrence, the refactor escalates to ACTIONABLE; otherwise it stays deferred or is retired.

---

### Load-bearing concept tests (mandatory per Phase 3 protocol)

#### Concept: "Definitional / Frame-exit Completeness" (newly-coined name)

- **Test:** user-language alignment + proxy-vs-structural.
- **Counter:** "frame-exit completeness" is loop-coined. The user's language was "frame-exit" (the user might not have said "completeness"). Plus: "completeness" might be ambiguous — completeness of what? Definitions? Anchors? Project artifacts?
- **Why the counter has merit:** YES. The name needs disambiguation in the spec text.
- **Resolution:** Use "Frame-exit Completeness" with explicit subtitle in spec text: *"For inherited terms or organizing-frame elements, ask: does the inquiry's frame's anchor-set EXCLUDE referents that exist project-wide? Specifically — does the project have artifacts/usages of this term that the frame's scope doesn't account for?"* The "completeness" refers to anchor-set completeness (frame's anchors against project-wide referents).

#### Concept: "frame-bounded inquiry" (used as the gating-predicate negation)

- **Test:** discoverability. How does the runner detect a frame-bounded inquiry vs. a non-frame-bounded one?
- **Counter:** the determination is judgment-shaped; not algorithmic.
- **Why the counter has merit AND fails:** the determination IS judgment-shaped, but supported by observable signals: presence of multi-row tables in the inquiry's commitments; inheritance of vocabulary from prior findings; named axes / ladders / taxonomies. Examples in spec text reduce ambiguity.
- **Resolution:** "frame-bounded inquiry" is a category whose application requires judgment, supported by examples in spec text.

#### Concept: "inherited multi-value term" (gating predicate)

- **Test:** discoverability + proxy-vs-structural.
- **Counter:** what counts as "inherited"? From any prior finding, or only from the directly preceding finding? "Multi-value" — used 2+ times? 3+? In what context?
- **Why the counter has merit:** YES, the predicate needs concrete thresholds.
- **Resolution:** "Inherited" = appearing in `_branch.md`'s framing OR in a prior finding referenced by the inquiry's Relationships. "Multi-value" = used in 2+ distinct values/levels (e.g., 2+ rows of a multi-row table; 2+ levels of a ladder; 2+ axes of a multi-axial frame). Spec text should specify these thresholds.

#### Specific-vs-pattern recognition cue

The user's hypothesis about refactor was based on the Memory failure (N=1). Per the cue: a small set of examples doesn't always tell us about the wider pattern.

Counter applied: the refactor's design was justified using D/C's spec text (independent of the Memory failure) — the spec text-based justification is N-independent. The MEMORY FAILURE is the trigger that surfaced the need; the SPEC TEXT is the structural evidence that D/C bundles 3 jobs and a 4th implicit move.

Resolution: the refactor's design is structurally supported beyond N=1; only the COMMITMENT is N=1-deferred. Use the design with HIGH confidence; defer the commitment.

---

### SV4 — Clarified Understanding

The refactor of Definitional / Consistency into:
1. **Definitional / Internal Consistency** — preserves D/C's existing 3 cognitive jobs (forward consistency, anchor-strength weighting, reverse self-consistency), explicitly scoped to within-inquiry stabilized models.
2. **Definitional / Frame-exit Completeness** — operationalizes D/C's broad spec scope as a conditional sub-perspective gated on (i) inherited multi-value terms AND (ii) organizing frames.

The refactor is **substantive** (not just renaming): bundles renaming + gating + scope-clarification. **Real** (not strained): D/C's broad spec already permits the operation. **Doesn't hurt generic capability** (under correct gating): non-frame-bounded inquiries auto-skip via the conjunctive gating predicate.

**Commitment status: DEFERRED per loop_diagnose Step 5.** Revival trigger: M4 audit produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries.

**Relationship to prior M7:** structurally equivalent in net behavior; refactor is preferable because it honors D/C's existing broad spec rather than asserting a missing capability. M7 remains a defensible alternative.

The user's MUST conditions are MET (gap is real; generic capability not hurt under correct gating).

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now FIXED

- **F1: D/C is THE refactor candidate.** Other 7 perspectives are single-mode.
- **F2: The split is into Internal Consistency + Frame-exit Completeness.**
- **F3: The frame-exit sub-perspective is conditionally gated** (inherited multi-value terms + organizing frames).
- **F4: The refactor is SUBSTANTIVE** (renaming + gating + scope-clarification bundled).
- **F5: User's two MUST conditions are MET.**
- **F6: Commitment is DEFERRED per Step 5.**
- **F7: Revival trigger is M4 audit ≥3 instances.**
- **F8: Refactor is preferable to prior M7 (add new perspective)** because it honors D/C's existing broad spec.

### Variables ELIMINATED

- E1: Refactoring any other perspective.
- E2: Treating the refactor as "just renaming" or "just adding a gate."
- E3: Shipping the refactor immediately (Step 5 violation).
- E4: Adding the frame-exit operation as an unconditional perspective (would hurt generic capability).
- E5: Replacing prior M7 entirely (M7 remains defensible alternative).

### Variables that remain OPEN

- **O1:** Exact wording of the Internal Consistency sub-perspective spec text (Innovation will draft).
- **O2:** Exact wording of the Frame-exit Completeness sub-perspective spec text + gating predicate (Innovation will draft).
- **O3:** Whether the spec text should include examples (Memory, Reflect-channel) or stay general (open in Innovation).
- **O4:** Whether other Sensemaking spec sections (Phase 1, Phase 3, Phase 5) might also need analogous frame-exit additions (out of scope per `_branch.md`).

### SV5 — Constrained Understanding

The recommendation is fully reduced: refactor D/C → (Internal Consistency + Frame-exit Completeness with conditional gating); DEFERRED with M4 audit revival; preferable to but structurally equivalent to prior M7. Innovation draft the actual spec text. Critique tests for substantive-vs-cosmetic concern, gating-tightness, and self-reference.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The refactor candidate is Definitional / Consistency. It splits cleanly into Definitional / Internal Consistency (preserving the existing 3 cognitive jobs — forward consistency, anchor-strength weighting, reverse self-consistency — explicitly scoped within-inquiry) and Definitional / Frame-exit Completeness (a conditional sub-perspective gated on inherited multi-value terms AND organizing frames; operationalizes the broad spec scope D/C already permits but doesn't currently make explicit). The split is substantive (bundles renaming + gating + scope-clarification, each component small but the bundle meaningful) and meets both user MUST conditions: the gap is real (D/C's broad spec implies frame-exit; application narrowed it in the Memory failure) and generic capability is not hurt (conjunctive gating auto-skips on non-frame-bounded inquiries; analogous to Phase / Calibration-State's existing conditional pattern). The refactor is preferable to but structurally equivalent in net behavior to the prior M7 (add new "Frame-exit" perspective); the refactor's framing honors D/C's existing broad spec rather than asserting a missing capability. Commitment is DEFERRED per `homegrown/protocols/loop_diagnose.md` Step 5 (do not propose broad fundamentals rewrites from N=1); revival trigger is M4 audit ≥3 instances of frame-scope-capture-like patterns across distinct inquiries. If the audit confirms recurrence, the refactor escalates to ACTIONABLE; otherwise it stays deferred or is retired.**

### Difference from SV1

| Dimension | SV1 | SV6 |
|---|---|---|
| Refactor candidate | "Maybe one of the perspectives splits" | Definitional / Consistency, specifically |
| Substantive vs cosmetic | Implicit "substantive" | Bundle of renaming + gating + scope-clarification; each small, bundle meaningful |
| User MUST conditions | "We need to verify" | Both met: gap is real (spec-text broad reading), generic capability not hurt (conjunctive gating) |
| Refactor vs add (M7) | Open | Refactor preferable; M7 defensible alternative |
| Commitment | Open | DEFERRED per Step 5; revival = M4 audit ≥3 instances |
| Self-reference handling | Risk implicit | External anchoring via spec text + user's frame-exit framing of this question |

The SV1→SV6 delta is large: from open hypothesis to fully specified design with commitment-status.

---

## Saturation indicators

- **Perspective saturation:** moderate. Definitional / Consistency was applied to THIS analysis (recursively) — the meta-application surfaced no new anchors. Phase / Calibration-State confirmed M4 audit calibration.
- **Ambiguity resolution ratio:** 4/4 explicit ambiguities resolved (3 HIGH, 1 MEDIUM-HIGH); 3 load-bearing concept tests passed; specific-vs-pattern check applied.
- **SV delta:** large.
- **Anchor diversity:** 9 anchor types across 7 perspectives.

---

## Open items handed to next disciplines

- **Decomposition:** partition into pieces — refactor candidate identification, split spec-text drafting, gating predicate spec, non-hurt argument, recommendation/verdict, comparison to prior M7.
- **Innovation:** draft actual sub-perspective spec text for both Internal Consistency and Frame-exit Completeness; include gating predicate examples.
- **Critique:** test for substantive-vs-cosmetic concern; test gating tightness; test self-reference resistance; verify Step 5 deferral is honored.
