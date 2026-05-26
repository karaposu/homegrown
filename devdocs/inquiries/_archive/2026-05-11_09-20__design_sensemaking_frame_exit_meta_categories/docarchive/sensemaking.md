# Sensemaking: Design Sensemaking — Frame-exit Perspective Meta-Categories

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_09-20__design_sensemaking_frame_exit_meta_categories/_branch.md`

The user observed that the Frame-exit Completeness perspective has two distinct failure modes — Instance 1 not-fired (Memory) and Instance 2 fired-but-shallow (warming) — and proposed that the right structural answer is to sub-divide the perspective into meta-categories so the AI is forced to think of each separately. The constraint: categories must cover the perspective fully without narrowing it. The user wants a %100 improvement, not a might-improve / might-degrade trade-off.

Exploration's output: 4-meta-category structure (Existence Enumeration + Role Assessment + Verdict Rigor + Residual / Coverage Justification) with dimension-illustrative examples (type, layer, phase, agent, time-horizon, …) treated as non-exhaustive. Four gaps remain (G1 inline-vs-refinement-note placement; G2 position inherited from 03-07; G3 explicit-non-exhaustiveness wording; G4 status of the 4th meta-category as peer vs closing).

---

## SV1 — Baseline Understanding

The Sensemaking spec's proposed Frame-exit Completeness sub-perspective (drafted in 03-07; never adopted) is currently a single-bullet question. To handle the two distinct failure modes the user identified, that single bullet must become a structured set of named sub-checks the AI applies one at a time. The exploration converged on four sub-checks — Existence Enumeration, Role Assessment, Verdict Rigor, Residual / Coverage Justification — plus dimension-illustrative examples. The remaining work is to validate this is the right structure, defend it against the user's "no narrowing" constraint, settle the placement (inline vs refinement-note), and produce a structure that delivers a %100 improvement rather than a coin-flip change.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (limits, requirements, boundaries)

- **C1: User's high-confidence constraint.** *"we want sth that is %100 improvement and not interested so much in might be improvement might be degradation."* Any candidate with a non-trivial degradation surface is a fail by the user's own criterion, not just a refinement candidate.
- **C2: Coverage constraint.** *"it is vital that these categories cover that perspective fully otherwise we are risking narrowing the perspective total."* The categories together must cover the perspective's full intent.
- **C3: Two-mechanism reach.** The structure must address Instance 1 (not-fired; recognition layer) AND Instance 2 (fired-but-shallow; reasoning-quality layer). A structure covering only one mechanism is incomplete.
- **C4: Surround-layer convention** (per Exploration R7 and `homegrown/sense-making/references/sensemaking.md` lines 207-214). Phase-2 perspectives are bulleted; conditional perspectives use parenthesized gating (`Phase / Calibration-State (when …)`). Refinement notes (lines 219-291) are the spec's existing idiom for adding sub-structure to a phase or perspective. Any meta-category structure must fit one of these existing patterns.
- **C5: Step-5 caution.** `homegrown/protocols/loop_diagnose.md` Step 5 forbids broad rewrites from a single weak correction chain. This inquiry produces a DRAFT design; adoption stays gated by the prior audit threshold (≥3 instances). The design's correctness does not lower the adoption bar.
- **C6: Failure-mode reuse.** Sensemaking failure mode #5 (Clean Resolution Trap, lines 147-153) already names the corrective for fired-but-shallow ("state the strongest counter-argument; state why it fails on structural grounds"). Coining new failure modes for the meta-categories would duplicate; prefer referencing failure mode #5 and #4 (Perspective Blindness).

### Key Insights (non-obvious implications)

- **K1: The user's "narrowing" warning identifies a meta-level risk that the meta-categories themselves could become a narrowing frame.** This is recursion: a structure intended to prevent frame-scope capture can itself become a frame that captures. Mitigation: an explicit residual / coverage-justification category that asks "any frame-exit concern not captured by the named categories?" — turning the residual into a named cognitive move, not just a flag.
- **K2: The two failure mechanisms map cleanly to two of the four meta-categories.** Instance 1 (not-fired) is prevented by Existence Enumeration (forces enumeration before any judgment). Instance 2 (fired-but-shallow) is prevented by Verdict Rigor (forces counter-test on any exclusion verdict). Role Assessment sits BETWEEN them as the operationalization of "why might an exclusion be wrong"; Residual sits AFTER them as the anti-narrowing backstop.
- **K3: The cognitive-move axis (Discovery / Relevance / Verdict-Rigor / Residual) is the natural decomposition; the frame-dimension axis (type / layer / phase / agent / time-horizon / …) is the narrowing-risk decomposition.** The dimension axis must live INSIDE the cognitive-move axis as illustrative examples, not as the structural axis itself. If dimensions become the structural axis (Candidate 4 from Exploration), narrowing is acute because dimensions are infinite-in-principle.
- **K4: The Verdict Rigor meta-category isn't a duplicate of Role Assessment; it's a defense-in-depth check on the verdict itself.** Role Assessment asks "what role does the referent play?" — produces a verdict. Verdict Rigor asks "for any out-of-scope verdict produced (regardless of how), test the strongest counter on structural grounds." Verdict Rigor catches verdicts produced via paths Role Assessment didn't anticipate — e.g., silent dismissal, implicit exclusion, schema-coupling-only reasoning.
- **K5: Inline placement (meta-categories within the perspective bullet) is preferred over refinement-note placement.** Reason: the meta-categories ARE the perspective's operational core, not a sub-rule added on top. Putting them inline matches the spec's pattern for Phase-2 perspectives (where each perspective is self-contained in its own bullet). Refinement notes (lines 219-291) are for sub-rules that apply CONDITIONALLY across multiple perspectives or phases — different role.
- **K6: The "%100 improvement" claim is testable.** A %100 improvement means: every case the current 03-07 draft catches is still caught by the new structure AND additionally fired-but-shallow cases are caught AND the new structure introduces no false positives nor unworkable application friction. The test is operational, not just rhetorical.
- **K7: Self-reference is acute** because this inquiry is producing Sensemaking spec text for the perspective that catches frame-scope capture, while being a Sensemaking output that could itself fall into frame-scope capture. Mitigation: meta-apply the drafted 4-meta-category structure to THIS analysis as a coverage test.
- **K8: The N=2 evidence problem is real for adoption but not for design quality.** Adoption requires audit's ≥3-instance threshold (Step 5). But DESIGN correctness depends on structural coverage, not instance-count. A %100-improvement design is one whose correctness is provable from structural reasoning (failure mode #5 corrective is canonical; cognitive-move axis is field-coherent in software code review, formal logic, and mathematical proof). The user's "%100 improvement" framing assumes design quality can be judged on structural grounds — which is what makes this inquiry tractable from N=2.

### Structural Points (core components, relationships)

- **SP1: Four meta-categories form a sequenced pipeline within the perspective.** Existence Enumeration (discovery) → Role Assessment (relevance per excluded referent) → Verdict Rigor (counter-test for any exclusion verdict) → Residual / Coverage Justification (post-application check that the perspective's intent has been covered). Each step feeds the next; skipping a step is a recognizable failure.
- **SP2: Three relationships across the categories:**
  - *Existence → Role*: each referent enumerated in Existence becomes an input to Role Assessment.
  - *Role → Verdict Rigor*: any "irrelevant; out of scope" verdict produced in Role triggers Verdict Rigor.
  - *Residual → (any of the prior)*: if Residual surfaces an uncaptured frame-exit concern, the AI loops back to apply Existence + Role + Verdict Rigor to it.
- **SP3: Two layers of structure.** Layer 1 — the four named meta-categories (cognitive moves). Layer 2 — the dimension-illustrative examples (type, layer, phase, agent, time-horizon, …) nested inside Existence Enumeration as a non-exhaustive list. Layer 1 is the structural axis; Layer 2 is the prompting axis (helps the AI generate enumeration breadth).
- **SP4: Gating predicate is inherited unchanged from 03-07.** The conjunctive gating (inherited multi-value terms in committed structures) is upstream of the four meta-categories — it decides whether the perspective fires at all. The meta-categories are what happens WHEN it fires.
- **SP5: Failure-mode references at category endpoints.** Existence Enumeration prevents Perspective Blindness applied to frame-exit (failure mode #4). Verdict Rigor prevents Clean Resolution Trap applied to frame-exit (failure mode #5). Residual prevents self-narrowing of the meta-category structure. Role Assessment doesn't have a corresponding canonical failure mode — it's the bridge step.

### Foundational Principles (assumptions, rules, axioms)

- **P1: External anchoring.** Every load-bearing claim must cite spec text, prior-finding text, or external-field text (software review / formal logic / proof theory).
- **P2: Step 5 deferral on adoption** (per `homegrown/protocols/loop_diagnose.md`). This inquiry produces a draft; ship-decision waits for audit threshold.
- **P3: Reuse over coinage.** Reference existing failure modes (#4 Perspective Blindness; #5 Clean Resolution Trap) rather than coin new ones.
- **P4: Coverage-before-elegance.** The user's narrowing warning overrides any drive toward elegance. A clunky-but-coverage-complete structure beats an elegant-but-narrow one.
- **P5: Self-applicability as design test.** The 4-meta-category structure must be applicable to its own design (meta-application). If applying the structure to this inquiry reveals a frame-exit concern this inquiry has missed, that's evidence of either narrowing or insufficient design.

### Meaning-Nodes (central concepts and themes)

- **M1: Meta-category as forced-cognitive-move.** A meta-category is a sub-check phrased separately in the spec text so the AI cannot collapse it into a shallow single move. Phrasing separately is the structural mechanism that forces consideration.
- **M2: Coverage-without-narrowing as the binding constraint.** The user's explicit constraint sets the design's success criterion: any candidate structure failing this fails the inquiry.
- **M3: Two-mechanism reach.** Both not-fired and fired-but-shallow must be structurally prevented. Single-mechanism candidates fail the user's request.
- **M4: %100 improvement framing.** The user's framing is that design correctness can be judged on structural grounds, independent of audit instance count. The design must be defensible on those grounds.
- **M5: Cognitive-move axis vs frame-dimension axis.** Two candidate decompositions; the cognitive-move axis is structurally narrowing-resistant while the frame-dimension axis is narrowing-prone. Choice matters.
- **M6: Residual / Coverage Justification as anti-meta-narrowing.** A 4th category whose explicit job is to test whether the 3 prior categories have missed anything. Self-checking move at the perspective level.

### SV2 — Anchor-Informed Understanding

The design space resolves into two structural axes. Axis 1 — cognitive moves — has four named meta-categories arranged in a sequenced pipeline (Existence Enumeration → Role Assessment → Verdict Rigor → Residual). Axis 2 — frame dimensions — lives inside Existence Enumeration as a non-exhaustive illustrative list. Axis 1 is the design's structural backbone (narrowing-resistant; matches cognitive-move semantics in adjacent fields); Axis 2 is the design's prompting layer (helps the AI generate enumeration breadth without becoming the structure itself).

The recursive risk K1 — that the meta-categories themselves become a narrowing frame — is addressed by the 4th category (Residual / Coverage Justification). The 4th category is not redundant with Verdict Rigor: Verdict Rigor tests exclusion verdicts at the referent level; Residual tests the perspective's overall application at the meta level.

Inline placement (within the Frame-exit Completeness bullet) is preferred over refinement-note placement because the meta-categories ARE the perspective's operational definition, not an added rule.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **C-T1: The 4-meta-category structure is logically sound.** Existence ∧ Role ∧ Verdict-Rigor ∧ Residual = a conjunctive pipeline that catches not-fired (via Existence; would have caught Memory's md-file referent) and fired-but-shallow (via Verdict Rigor; would have flipped warming's clean-boundary verdict). Logically complete for the two named mechanisms.
- **C-T2: Logical risk — the categories could be silently merged at application time.** An AI might run Existence and Role as one move ("enumerate and assess in one pass"), losing the forced-separation benefit. Mitigation: explicit numbered list in the spec text; each category in its own paragraph with its own ask.
- **C-T3: The conjunctive gating predicate remains a logical constraint** (inherited from 03-07; not subject to refactoring in this inquiry). If gating fires false, none of the four meta-categories applies — preserves generic Sensemaking capability per 03-07's non-hurt argument.

### Human / User

- **C-H1: The user explicitly asked for separate phrasing.** *"since they are phrased separately AI will have to think of them."* The 4-meta-category structure does this directly — each category is its own labeled paragraph.
- **C-H2: The user's %100-improvement framing rules out hedge-design.** Any design with "this might or might not help" failure surface should be rejected, not refined. The 4-meta-category structure is defensible on structural grounds (cognitive moves are field-coherent; each prevents a named failure mode); the only degradation surface is application friction (more text to read), which is bounded and reversible.
- **C-H3: User-language alignment.** The user used the term "meta categories" — the design adopts this exact term ("meta-categories") in the spec text rather than re-naming (e.g., "sub-perspectives" or "axes"). Preserves traceability to user intent.

### Strategic / Long-term

- **C-S1: At L0/L1 of meta-loop ladder, the human catches frame-exit failures externally.** The Sensemaking spec edit matters more at L2+ (where the loop runs more autonomously). The 4-meta-category structure compounds in value as autonomy increases — at L2+, the AI must produce frame-exit verdicts the human can rely on without manual re-checking.
- **C-S2: Spec-edit longevity.** The 4-meta-category structure will be in the spec for many runs. Maintenance cost = the text length added. Benefit = each failure mode prevented per recurrence. Long-term value is high if the failure pattern recurs (which the audit's threshold is designed to confirm).
- **C-S3: Strategic relationship to 03-07's refactor.** This inquiry's design ELABORATES 03-07's drafted second bullet (Frame-exit Completeness). It doesn't supersede the refactor's other bullet (Internal Consistency) nor its gating predicate. Composition: 03-07 = the perspective; this inquiry = the perspective's internal structure. Both ship together at audit-revival.

### Risk / Failure

- **C-R1: Risk — meta-categories themselves become a narrowing frame** (K1; user's explicit warning). Mitigated by the 4th category (Residual / Coverage Justification). Residual's text: "After applying the three named meta-categories, ask: is there a frame-exit concern about this term — anything the inquiry's frame might exclude — that the named categories did NOT capture? If yes, name it; apply Existence + Role + Verdict-Rigor to it." This is a recursive anti-narrowing move.
- **C-R2: Risk — applying 4 meta-categories adds friction at each Sensemaking run.** Reality check: the gating predicate fires only when inherited multi-value terms exist in committed structures. Most Sensemaking runs won't trigger the perspective at all (per 03-07's non-hurt table). When it does trigger, applying 4 meta-categories takes a few minutes of analysis — small cost compared to the cost of a frame-scope-capture failure (downstream finding rewrite, like the 22-46 propagation).
- **C-R3: Risk — over-firing on benign cases.** If the gating predicate fires too broadly, the 4 meta-categories run unnecessarily. Mitigation: gating predicate is conjunctive (inherited multi-value terms AND committed structures). Calibration path per 03-07: monitor next 5 post-revival runs.
- **C-R4: Risk — Verdict Rigor and Role Assessment look duplicative to a fast reader.** Mitigated by clear differentiation in spec text: Role Assessment asks "what role does this play?" → produces verdict. Verdict Rigor asks "for ANY out-of-scope verdict produced, test the counter on structural grounds." Different scopes; clearly named.
- **C-R5: Risk — narrowing via the dimension-illustrative examples.** If the spec lists "type, layer, phase, agent, time-horizon," AI might treat the list as exhaustive. Mitigation: "(this list is not exhaustive; other dimensions may apply)" appended; Residual category catches what the list missed.

### Resource / Feasibility

- **C-F1: Spec-text length cost.** The 4-meta-category structure adds ~150-300 words to the perspective bullet (vs ~150 words in the 03-07 single-bullet draft). Small absolute cost; immediate readability cost is bounded.
- **C-F2: Application-time cost.** Each meta-category takes 30-90 seconds of careful application. Total: 2-6 minutes when the perspective fires (which is rare per gating).
- **C-F3: Maintenance cost.** Future spec edits to the Sensemaking discipline must consider the 4-meta-category structure. Cost negligible unless the discipline gets a major rewrite.
- **C-F4: Reversal cost.** If the design proves wrong post-adoption, reversal is straightforward (revert spec edit). No deep coupling to other discipline specs. Low risk on design wrongness.

### Ethical / Systemic

(Not directly applicable to a Sensemaking spec edit. Skipped.)

### Definitional / Consistency

- **C-D1: Forward consistency** — does the 4-meta-category structure contradict any established Sensemaking principle or prior stabilized model?
  - Phase 1 / Cognitive Anchor Extraction unchanged.
  - Phase 2 / Perspective Checking gets ONE perspective (Frame-exit Completeness) restructured. Other perspectives unchanged.
  - Failure modes #4 (Perspective Blindness) and #5 (Clean Resolution Trap) are referenced from the meta-categories — consistent reuse.
  - 03-07 finding's refactor design is preserved (gating predicate, replacement of D/C with Internal Consistency + Frame-exit Completeness). This inquiry's design lives inside the second bullet's body. **Consistent.**
- **C-D2: Anchor-strength weighting** — strong anchor (user's explicit constraint about coverage-without-narrowing; K1; failure modes #4 and #5) vs weak anchor (any specific dimension example like "type" or "layer"). The strong anchor wins: the cognitive-move axis structures the spec; the dimension axis is illustrative.
- **C-D3: Reverse self-consistency** — does the design contradict ITSELF? The 4 meta-categories are sequenced; each builds on the prior. Residual is a peer of the others in named-status but a closing-step in flow-status. This dual role isn't a contradiction — it's a deliberate "named cognitive move that also closes the application." Acknowledged explicitly in spec text.

### Definitional / Frame-exit Completeness (meta-application)

Meta-applying the proposed structure to THIS sensemaking. Gating predicate: inherited multi-value terms in committed structures?

- **Inherited multi-value terms:** YES. "Frame-exit Completeness," "meta-category," "cognitive move," "frame dimension" are all inherited from prior findings (03-07, 11-22) and from the user's command-args.
- **Committed structures:** YES. This sensemaking has the 4-meta-category table, the cognitive-move-vs-frame-dimension axis, multiple anchor lists.
- **Gating fires.**

Apply the 4 meta-categories to this analysis:

1. **Existence Enumeration:** what referents do "frame-exit" / "meta-category" / "cognitive move" have project-wide that this inquiry's frame might exclude?
   - "Frame-exit" appears in: Sensemaking spec failure mode #4 (Perspective Blindness corrective); 03-07's drafted Frame-exit Completeness; 11-22 loop_diagnose finding; this inquiry. **Referent: a cognitive operation the AI is asked to perform.** This inquiry's frame includes all these usages. ✓
   - "Meta-category" appears in: user's command-args; this analysis. Not used elsewhere in the project. **Referent: this inquiry's own structural axis.** Frame-scope includes this. ✓
   - "Cognitive move" appears in: this analysis; exploration's cycle 4. Field-coherent term (used in software review, formal logic). Frame-scope includes this. ✓
   - **No excluded referents identified.** Existence check passes.

2. **Role Assessment:** for each excluded referent (none identified), what role does it play?
   - N/A.

3. **Verdict Rigor:** for any out-of-scope verdict produced in this sensemaking, test the counter on structural grounds.
   - This sensemaking does NOT produce out-of-scope verdicts on artifacts. It produces RESOLUTIONS on design choices. So no out-of-scope verdict to test. ✓

4. **Residual / Coverage Justification:** is there a frame-exit concern about this analysis the named categories did not catch?
   - Potential concern: does this analysis's frame exclude the broader pattern (frame-scope capture across disciplines beyond Sensemaking)? The user's question is specifically about the Sensemaking spec. This is intentional bounding, not an oversight. ✓
   - Potential concern: does this analysis exclude alternative refactor candidates (e.g., promoting frame-scope capture to a project-level failure mode across all disciplines)? Out of scope for this inquiry (different refactor; same audit threshold).
   - No uncaptured concern found.

Meta-application **passes** without surfacing a defect. This is a strong validity signal: the design is self-applicable AND produces meaningful results.

### Phase / Calibration-State

- **C-P1: Calibration state.** The Sensemaking discipline is mature (already in production use); the Frame-exit Completeness sub-perspective is in DRAFT (proposed in 03-07; not yet adopted). This inquiry adds INTERNAL STRUCTURE to a draft. Calibration: design correctness is the right question now; adoption-readiness is gated by the audit threshold downstream.
- **C-P2: Phase-dependence.** The 4-meta-category structure depends on the prior 03-07 refactor being adopted (the gating predicate, the replacement of D/C with Internal Consistency + Frame-exit Completeness). If 03-07 is never adopted, this inquiry's design is unused. Coupling: this design's adoption is downstream of 03-07's adoption.
- **C-P3: Project-phase rule check.** Sensemaking's perspective list is a phase-stable spec element (no known calibration that changes how perspectives are applied). The meta-categories within Frame-exit Completeness are also phase-stable. No phase-dependent rule applies.

### SV3 — Multi-Perspective Understanding

The 4-meta-category structure survives all eight perspectives (Technical, Human, Strategic, Risk, Resource, Definitional-Consistency, Definitional-Frame-exit-meta-application, Phase). The strongest external constraints (Human/User: coverage-without-narrowing; Risk: meta-categories becoming a frame) are addressed by the explicit Residual / Coverage Justification step. Definitional Frame-exit meta-application passes — the design is self-applicable.

Two refinements emerged from perspective-checking:
- **R-Spec-Text-1**: explicit numbered list (not just paragraph order) — preserves separation when the AI applies the perspective.
- **R-Spec-Text-2**: explicit "(this list is not exhaustive)" on the dimension examples — preserves coverage.

The cognitive-move axis is confirmed as the structural backbone; the frame-dimension axis is confirmed as the prompting layer within Existence Enumeration. Inline placement is confirmed over refinement-note placement.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1: Should Residual be a 4th meta-category or a closing requirement on the 3?

**Strongest counter-interpretation:** Residual is not a peer of Existence / Role / Verdict-Rigor — those are cognitive moves at the referent level; Residual is a coverage check at the perspective level. Putting it as a 4th category conflates two grain sizes (per-referent vs per-application).

**Why the counter has structural merit:** YES — there is a grain-size distinction. Existence operates per-term-and-its-referents. Role operates per-excluded-referent. Verdict Rigor operates per-exclusion-verdict. Residual operates at the perspective's overall application. These are at different grain sizes.

**Why the counter doesn't fail the design:** the grain-size difference doesn't argue for excluding Residual; it argues for naming it CLEARLY as a closing-step. The spec text can do this: "After applying the three named meta-categories, run the Residual / Coverage Justification check."

**Confidence:** HIGH that Residual belongs in the structure (otherwise meta-category narrowing has no anti-mechanism). MEDIUM-HIGH on its naming as a "4th meta-category" vs "closing-step." Resolution: name it as **the 4th meta-category** with an explicit note in the spec text clarifying its closing-step role. This preserves the user's "structure into meta-categories" framing while honoring the grain-size distinction.

**Resolution:** 4 named meta-categories, with Residual explicitly described as the closing-step coverage check (peer in NAMING; closing-step in FLOW). G4 from Exploration: resolved.

**What is now fixed:** Residual is the 4th named meta-category. Its role is anti-narrowing at the perspective level. Spec text will clarify the closing-step semantics.

**What is no longer allowed:** Residual cannot be silently merged into Verdict Rigor's tail (different grain size; different anti-narrowing target).

**What now depends on this choice:** Innovation must draft Residual's spec text with the closing-step clarification.

### Ambiguity #2: Should the meta-categories live inline within the perspective bullet, or as a refinement note immediately after the bullet?

**Strongest counter-interpretation:** Refinement-note placement is the spec's existing idiom for "structured sub-detail" (per Exploration S5 and the four existing refinement notes in lines 219-291). Inline placement breaks the perspective-bullet's pattern of "one bullet = one ask."

**Why the counter partially has merit:** the existing four refinement notes (Phase / Calibration-State requirement; Load-bearing concept test; Specific-vs-pattern recognition cue; Accommodation trigger) ARE the spec's existing idiom for sub-detail.

**Why the counter doesn't fully apply:** the four existing refinement notes share a property — they apply CONDITIONALLY (e.g., "when the inquiry involves rules…"; "when committing to a key concept built from a small set of specific examples…"). The 4-meta-category structure isn't conditional — when the Frame-exit Completeness perspective fires, ALL FOUR meta-categories apply. They're the perspective's operational definition, not a sub-rule.

Structurally: a refinement note is "when X, do Y in addition." A meta-category set is "this perspective's actual content is these sub-checks." Different role.

**Confidence:** HIGH on inline placement. Inline = meta-categories ARE the perspective's body. Refinement-note = meta-categories are added rules. The former is correct.

**Resolution:** **Inline placement** within the Frame-exit Completeness perspective bullet (which is itself the second bullet of the 03-07 refactor's replacement for line 213). G1 from Exploration: resolved.

**What is now fixed:** inline placement; the Frame-exit Completeness bullet's body IS the four meta-categories (sequenced and named).

**What is no longer allowed:** placing the meta-categories as a separate refinement note (would violate the perspective-bullet semantics).

**What now depends on this choice:** Innovation drafts the inline spec text with all four meta-categories.

### Ambiguity #3: Should the dimension-illustrative examples (type, layer, phase, agent, time-horizon) be in the spec text or only in a separate examples document?

**Strongest counter-interpretation:** Examples in spec text are fragile — easily mistaken as exhaustive (the narrowing risk K1). Moving them to a separate "examples doc" avoids embedding a narrowing-risky list in the spec.

**Why the counter has merit:** narrowing risk is real and the user explicitly warned about it.

**Why the counter doesn't win:** without examples, the Existence Enumeration meta-category is too abstract. The AI applying the spec at runtime won't know HOW to enumerate without prompts. Examples are essential for application; their narrowing risk is bounded by explicit non-exhaustiveness language.

**Mitigation:** put examples in spec text AS A NON-EXHAUSTIVE LIST with explicit "(this list is not exhaustive; other dimensions may apply)" + the Residual meta-category as backstop. The combination of explicit non-exhaustiveness + Residual is the anti-narrowing structure.

**Confidence:** HIGH on examples-in-spec-text with non-exhaustiveness language.

**Resolution:** examples appear in spec text under Existence Enumeration as a non-exhaustive prompting list. G3 from Exploration: resolved.

**What is now fixed:** examples include type / layer / phase / agent / time-horizon / structural-role with "(not exhaustive)" appended.

**What is no longer allowed:** dimensions becoming the structural axis (already excluded by Candidate 4 rejection in Exploration; reaffirmed here).

**What now depends on this choice:** Innovation drafts the example list with non-exhaustiveness language.

### Ambiguity #4: Does this design count as a Step-5-prohibited fundamentals rewrite?

**Strongest counter-interpretation:** Adding four meta-categories to a Sensemaking perspective is a substantial spec edit. Step 5 forbids spec changes from N=2 evidence. This inquiry produces a Step-5-prohibited rewrite.

**Why the counter has merit:** Step 5 is project-canonical and explicit.

**Why the counter doesn't apply here:** this inquiry produces a DESIGN (drafted spec text in finding.md), not an adoption (edit applied to `homegrown/sense-making/references/sensemaking.md`). Adoption stays DEFERRED at the audit-revival threshold — unchanged by this inquiry. The draft is preparation; the audit gate is the adoption mechanism.

This pattern is consistent with prior findings: 11-22's loop_diagnose drafted Part B's spec text while keeping adoption DEFERRED. The draft-vs-adoption distinction is the project's existing pattern for honoring Step 5 while doing thinking work.

**Confidence:** HIGH that this inquiry conforms to Step 5 — it produces a draft, not an adoption.

**Resolution:** Step-5 conformance via deferred adoption. The design is published in this inquiry's finding.md with "(DRAFT — not adopted; revival trigger: M4 audit produces ≥3 instances)" header. C5 from Phase 1: honored.

**What is now fixed:** the design is a draft; the adoption gate is the audit's ≥3-instance threshold.

**What is no longer allowed:** editing `homegrown/sense-making/references/sensemaking.md` in this inquiry's commit. The spec file stays unchanged.

**What now depends on this choice:** finding.md presents the design as drafted spec text with explicit "(DRAFT — not adopted)" header.

### Ambiguity #5: Is the cognitive-move axis the right structural axis (vs the frame-dimension axis)?

**Strongest counter-interpretation:** The user's two named instances (Memory's TYPE-axis; warming's LAYER-axis) are both frame-dimension failures. A frame-dimension-axis structure (Candidate 4 from Exploration) directly addresses what the instances reveal.

**Why the counter has merit:** YES — the instances both involve specific frame dimensions. Naming the dimensions in the spec gives the AI direct prompts.

**Why the counter fails the user's coverage constraint:** the frame-dimension axis is enumerable-in-principle (type / layer / phase / agent / time-horizon / structural-role / temporal scope / authorial intent / …). Any finite list is incomplete. A finite list named as the STRUCTURAL axis tells the AI "these dimensions are the perspective's job" — narrows. The user's narrowing warning rules this out.

The cognitive-move axis is finite-by-purpose (discovery + relevance + verdict-rigor + residual). The four cognitive moves cover the perspective's COMPLETE intent (find what's outside the frame; assess relevance; test exclusion verdicts; check residual coverage). The four moves are derived from what the perspective is fundamentally doing, not from listing the dimensions it could check.

The dimension axis lives INSIDE the Existence Enumeration meta-category as illustrative examples. This is the right composition: cognitive-move axis for structure; dimension axis for prompting breadth.

**Confidence:** HIGH that cognitive-move is the right structural axis. Confirmed by Domain Transfer (software review: case-coverage; formal logic: completeness; proof theory: exhaustive case enumeration — all use cognitive-move-axis structures rather than enumerated-case structures).

**Resolution:** cognitive-move axis is the structural backbone; dimension axis lives inside Existence Enumeration. M5 from Phase 1: collapsed.

**What is now fixed:** the structural axis of the 4 meta-categories is cognitive moves (Discovery / Relevance / Verdict-Rigor / Residual).

**What is no longer allowed:** organizing the perspective by frame dimensions as the primary axis (Candidate 4 path explicitly rejected).

**What now depends on this choice:** Innovation's drafting must name the four meta-categories as cognitive moves, with dimensions as nested examples.

---

### Load-bearing concept tests (per spec refinement)

#### Concept: "meta-category" (term inherited from user's command-args; used in spec text + this analysis)

- **Test:** user-language alignment + proxy-vs-structural.
- **Counter:** "meta-category" is the user's framing. Does it match the project's existing vocabulary? The spec already uses "perspectives," "phases," "refinement notes," "failure modes." Adding "meta-category" introduces new vocabulary.
- **Why the counter has merit AND fails:** MERIT — risks vocabulary proliferation. FAILS — the user's term is precise and there's no existing project term for "sub-checks within a perspective." The user's term fills a real vocabulary gap; alignment with user language is preserved.
- **Resolution:** use "meta-category" in the spec text and analysis. Term stabilizes via user-language alignment.

#### Concept: "Existence Enumeration" (loop-coined for the first meta-category)

- **Test:** proxy-vs-structural + discoverability.
- **Counter:** "Existence Enumeration" is a loop coinage. Does it represent a real structural distinction, or is it a label for what AI does anyway?
- **Why the counter has merit AND fails:** MERIT — could be confused with anchor extraction (Phase 1's job). FAILS — Existence Enumeration is specifically about referents of inherited terms that the frame might exclude (project-wide referents, dimension-agnostic). Anchor extraction is broader (any anchor type from any source). The distinction is structural — Existence Enumeration is a specialized enumeration with a specific gating predicate and a specific target.
- **Discoverability check:** if the spec says "apply Existence Enumeration," the AI knows what to do? Yes — the spec text will define it operationally ("list what the load-bearing term refers to project-wide; for each referent, check whether the frame's scope includes it").
- **Resolution:** "Existence Enumeration" stabilizes as the meta-category name. Definition in spec text grounds it.

#### Concept: "Role Assessment" (loop-coined for the second meta-category)

- **Test:** discoverability.
- **Counter:** "Role" is generic. What role?
- **Resolution:** specify in spec text — *"the role this referent plays in the operation being organized."* The "operation being organized" anchor (from Part B's drafted text in 11-22) inherits cleanly.

#### Concept: "Verdict Rigor" (loop-coined for the third meta-category)

- **Test:** discoverability + reuse-vs-coin.
- **Counter:** "Verdict Rigor" sounds like a check on verdict quality. Is this distinct from Sensemaking's existing Clean Resolution Trap corrective?
- **Why the counter is partially correct:** Verdict Rigor's OPERATION is "state strongest counter; test on structural grounds." This IS the Clean Resolution Trap corrective's operation. So Verdict Rigor reuses an existing operation; the meta-category names WHERE it applies within Frame-exit Completeness.
- **Resolution:** "Verdict Rigor" stabilizes as the meta-category name, with the spec text explicitly citing failure mode #5: *"applies failure mode #5's corrective (state strongest counter-argument; test on structural grounds) to any out-of-scope verdict produced in this perspective."* Reuse-not-coinage preserved.

#### Concept: "Residual / Coverage Justification" (loop-coined for the fourth meta-category)

- **Test:** discoverability + user-language alignment.
- **Counter:** "Residual" is technical; "Coverage Justification" is operational. The two together feel like a placeholder name.
- **Why the counter has merit AND fails:** MERIT — the compound name is unwieldy. FAILS — the meta-category does two related things: identifies what the prior three meta-categories didn't catch (residual = leftover) AND justifies that the perspective's intent has been covered (coverage justification). The compound captures the meta-category's dual role.
- **Resolution:** Innovation may choose to simplify the name (e.g., "Residual Coverage Check") if a tighter form emerges. For now, "Residual / Coverage Justification" stands. Acceptable provisional name.

#### Specific-vs-pattern recognition cue

The user named two specific instances (Memory; warming). The design extracts a PATTERN (frame-scope capture in two mechanisms) and proposes a STRUCTURAL solution. Risk: design fits only the two specific instances and misses other pattern manifestations.

**Counter:** could there be a third pattern manifestation (beyond not-fired and fired-but-shallow)?

- *Candidate: fired-with-wrong-question.* The perspective fires but answers a different question than the perspective intends. E.g., fires on "is there a boundary?" instead of "does the frame exclude a load-bearing referent?" This was a sub-issue in the warming case but not categorically distinct from fired-but-shallow (the wrong question IS the shallow reasoning).
- *Candidate: fired-correctly-but-output-ignored.* The perspective fires, produces a correct verdict, but downstream phases ignore the verdict. This is an Innovation / Critique propagation issue, not a Sensemaking failure. Out of this perspective's scope.
- *Candidate: fired-with-correct-answer-but-uncalibrated.* The perspective fires, asks the right question, gets the right answer, but the AI's confidence calibration is off. This is meta-Sensemaking calibration, outside this perspective.

**Resolution:** the two named mechanisms (not-fired; fired-but-shallow) are categorically distinct; no third categorically-distinct mechanism is currently identifiable. The Residual meta-category catches any future-discovered mechanism that doesn't fit the named two. **Specific-vs-pattern check passes.**

---

### SV4 — Clarified Understanding

The design crystallizes. Frame-exit Completeness perspective gets sub-divided inline into four named meta-categories, structured as cognitive moves arranged in a sequenced pipeline:

1. **Existence Enumeration** — discovery move. List what the load-bearing term refers to project-wide. Dimension prompts (type, layer, phase, agent, time-horizon, structural role) provided as a non-exhaustive list to help the AI generate enumeration breadth without making dimensions the structural axis.

2. **Role Assessment** — relevance move. For each referent identified as outside the frame, state the role it plays in the operation being organized. Ask: "Is the operation's coherence preserved if this excluded referent is ignored?" If NO → re-locate the referent to its correct in-scope layer.

3. **Verdict Rigor** — counter-test move. For any "out of scope" / "clean boundary" verdict produced in this perspective (or referenced elsewhere in Sensemaking), state the strongest counter-argument and test it on structural grounds. Applies failure mode #5's (Clean Resolution Trap) corrective.

4. **Residual / Coverage Justification** — anti-narrowing move at the perspective level. After applying the three named meta-categories, ask: "Is there a frame-exit concern about this term that the named categories did not capture?" If yes, name it; apply Existence + Role + Verdict-Rigor to it.

Gating predicate inherited from 03-07 unchanged. Failure-mode references at endpoints: Perspective Blindness (failure mode #4) at Existence; Clean Resolution Trap (failure mode #5) at Verdict Rigor.

Inline placement within the Frame-exit Completeness perspective bullet. Examples appear in spec text as non-exhaustive prompting list. Adoption stays DEFERRED at audit-revival threshold; this inquiry produces a draft.

Self-applicability verified via meta-application of the 4-category structure to this analysis. Coverage holds; no narrowing detected.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now FIXED

- **F1:** Four named meta-categories: Existence Enumeration / Role Assessment / Verdict Rigor / Residual / Coverage Justification.
- **F2:** Structural axis is cognitive moves (not frame dimensions).
- **F3:** Frame dimensions live inside Existence Enumeration as non-exhaustive illustrative examples.
- **F4:** Inline placement within the Frame-exit Completeness perspective bullet.
- **F5:** Sequenced pipeline (Existence → Role → Verdict-Rigor → Residual).
- **F6:** Failure-mode references at endpoints (Perspective Blindness on Existence side; Clean Resolution Trap on Verdict Rigor side).
- **F7:** Gating predicate inherited from 03-07 unchanged.
- **F8:** Adoption stays DEFERRED at audit-revival threshold. This inquiry produces a draft.
- **F9:** Spec text adopts the user's term "meta-categories."
- **F10:** Self-applicability tested via meta-application — passes.

### Variables ELIMINATED

- **E1:** Two-axis structure (Candidate 1 from Exploration) — thin spot at relevance recognition.
- **E2:** Four-axis structure with explicit Re-location (Candidate 3) — adds friction; re-location lives inside Role Assessment's corrective.
- **E3:** Frame-dimension-axis structure (Candidate 4) — high narrowing risk.
- **E4:** Status-quo / single-bullet structure (Candidate 6) — fails user's question.
- **E5:** Refinement-note placement (instead of inline) — wrong idiom for the perspective's operational definition.
- **E6:** Examples-in-separate-doc — too abstract for spec-text application.
- **E7:** Editing `homegrown/sense-making/references/sensemaking.md` in this inquiry's commit — Step 5 deferral applies.
- **E8:** Coining new failure modes for the meta-categories — reuse existing #4 and #5.
- **E9:** Treating Residual as silent merge into Verdict Rigor's tail — different grain size.
- **E10:** Treating dimension list as exhaustive — explicit non-exhaustiveness required.

### Variables that remain OPEN

- **O1:** Exact wording of each meta-category's spec text (for Innovation).
- **O2:** Whether to simplify "Residual / Coverage Justification" name (Innovation may choose a tighter form).
- **O3:** Whether to include negative examples (cases where the perspective does NOT fire) alongside positive examples (cases where it does). Innovation decides.
- **O4:** Position of the failure-mode references — should each meta-category cite its failure mode explicitly in its body, or should the citations live in a closing note? Innovation decides.

### SV5 — Constrained Understanding

The design is reduced to a single structural form: 4 named meta-categories, inline, sequenced pipeline, cognitive-move axis, dimensions-as-examples, Step-5-conformant deferred adoption. Open variables are all wording / drafting choices for Innovation. Adoption gate unchanged.

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did new perspectives keep destabilizing the model? NO — the 4-meta-category structure survived all eight perspectives (Technical, Human, Strategic, Risk, Resource, Definitional-Consistency, Definitional-Frame-exit-meta-application, Phase) without revision. SV3 produced two text-level refinements (numbered list; explicit non-exhaustiveness); SV4 resolved 5 ambiguities. No structural revision was forced. Accommodation trigger does NOT fire.

### Saturation indicators

- **Perspective saturation:** high. The last 2-3 perspectives (Resource, Definitional-Consistency, Phase) confirmed existing anchors without introducing new structural concerns. Saturation reached at SV3.
- **Ambiguity resolution ratio:** 5/5 explicit ambiguities resolved (all HIGH or HIGH on the design point). Specific-vs-pattern check + 5 load-bearing concept tests applied.
- **SV delta:** large (SV1 = "structure exists; details TBD" → SV6 = fully specified four-named-meta-category pipeline with placement, naming, gating, failure-mode references, drafting handoff).
- **Anchor diversity:** 6 anchor types (Constraint, Key Insight, Structural Point, Foundational Principle, Meaning-Node, Refinement-cue) across eight perspectives.

### SV6 — Stabilized Model

**The Sensemaking spec edit that produces a %100 improvement over the 03-07 draft is: replace the body of the Frame-exit Completeness perspective bullet with four sequenced, named, inline meta-categories arranged on a cognitive-move axis — Existence Enumeration (discovery; addresses Instance 1's not-fired mechanism), Role Assessment (relevance per excluded referent), Verdict Rigor (failure-mode-#5 counter-test on any exclusion verdict; addresses Instance 2's fired-but-shallow mechanism), and Residual / Coverage Justification (anti-narrowing closing-step at the perspective level). Frame dimensions (type, layer, phase, agent, time-horizon, structural role) live inside Existence Enumeration as a non-exhaustive illustrative prompt list. The gating predicate from 03-07 (inherited multi-value terms in committed structures) is upstream of the four meta-categories and remains unchanged. Each meta-category carries an explicit failure-mode reference where applicable (Perspective Blindness #4 at Existence; Clean Resolution Trap #5 at Verdict Rigor). Adoption stays DEFERRED at the audit-revival ≥3-instance threshold; this inquiry produces a draft to be lifted into `homegrown/sense-making/references/sensemaking.md` at revival.**

**The design is %100 improvement on structural grounds: every case the 03-07 single-bullet draft catches is caught by Existence Enumeration (whose enumeration is a superset of the single bullet's question); additionally fired-but-shallow cases are caught by Verdict Rigor; the meta-category structure cannot itself narrow because Residual / Coverage Justification provides a recursive coverage check; cognitive-move axis is structurally narrowing-resistant (vs frame-dimension axis which is enumerable-in-principle and thus narrowing-prone). Self-applicability is verified — applying the 4-category structure to this analysis passes coverage. No degradation surface identified beyond bounded application-time friction (a few minutes per fired-perspective application), which is small compared to the cost of a downstream frame-scope-capture propagation failure (like 22-46's "new capability" misclassification).**

### Difference from SV1

| Dimension | SV1 | SV6 |
|---|---|---|
| Category count | Mentioned 4 from Exploration; design TBD | FIXED at 4; named; sequenced |
| Structural axis | Implicit | Cognitive moves (not frame dimensions); justified by narrowing analysis + Domain Transfer |
| Dimension treatment | "Illustrative examples" (Exploration) | FIXED as non-exhaustive prompts inside Existence Enumeration |
| Placement | Inline-or-refinement-note (Exploration G1) | FIXED inline within the perspective bullet |
| Residual category status | "Peer or closing" (Exploration G4) | FIXED as 4th named meta-category with explicit closing-step semantics |
| Adoption | "DEFERRED" (general) | EXPLICITLY DEFERRED at ≥3-instance threshold; draft-vs-adoption pattern named |
| %100 improvement claim | Asserted | Defended on 4 structural grounds (superset coverage; Verdict Rigor adds Instance 2 coverage; Residual prevents meta-narrowing; cognitive-move axis is narrowing-resistant) |
| Self-applicability | Untested | Verified via meta-application; passes coverage |
| Failure-mode references | Implicit | EXPLICIT at endpoints (#4 Perspective Blindness; #5 Clean Resolution Trap) |
| Naming alignment | TBD | "Meta-categories" preserved from user language |

The SV1→SV6 delta is substantial: from "design space with 4 candidates and 4 gaps" to "fully specified design with 10 fixed variables, 10 eliminated variables, and 4 wording-level open variables for Innovation."

---

## Saturation indicators (final)

- **Perspective saturation:** HIGH. All 8 perspectives applied; last 3 confirmed without introducing structural concerns.
- **Ambiguity resolution ratio:** 5/5 explicit ambiguities resolved + 5 load-bearing concept tests + 1 specific-vs-pattern check.
- **SV delta:** LARGE.
- **Anchor diversity:** 6 anchor types × 8 perspectives.

---

## Open items handed to next disciplines

- **Decomposition:** partition into pieces around the four meta-categories' spec-text drafting + the placement+gating integration + the coverage-proof presentation + the %100-improvement defense.
- **Innovation:** draft exact spec text for each of the four meta-categories (inline, sequenced, with failure-mode references). Decide O1, O2, O3, O4.
- **Critique:** test the %100-improvement claim on its structural grounds (superset coverage; Instance 2 closure; meta-narrowing prevention; cognitive-move axis selection); test self-applicability; test narrowing-resistance.
