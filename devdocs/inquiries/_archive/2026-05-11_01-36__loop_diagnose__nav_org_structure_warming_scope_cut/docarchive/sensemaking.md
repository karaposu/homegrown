# Sensemaking: Loop Diagnose — Nav Org Structure / Warming Scope-Cut

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_01-36__loop_diagnose__nav_org_structure_warming_scope_cut/_branch.md`

Pinpoint the exact wrong thing in 11-22, where it originates, what mechanism produced it, and what maintenance candidate prevents the broader class.

Exploration located: **origin** = `_branch.md:29` (categorization error); **critical failure** = `docarchive/sensemaking.md:130` (Frame-exit perspective fired but reasoned shallowly — Clean Resolution Trap pattern); **manifestation** = `finding.md:256`; **propagation** = 22-46 inherited frame. **Instance 2 of frame-scope capture but with different failure mode from Instance 1** (not-fired vs fired-but-shallow). Refactor candidate alone insufficient.

---

## SV1 — Baseline Understanding

The exact wrong thing has two parts: a **categorization error** at the inquiry-framing stage (scope cut grouped warmup with cognitive content) and a **shallow reasoning failure** at the Sensemaking stage (Frame-exit perspective fired but used the wrong question to test "out of scope"). The category-error biased the entire downstream pipeline; the shallow reasoning was the last-chance catch that failed. Together they form a chain that the user's frame-exit challenge caught externally.

This is structurally different from Instance 1 (Memory) — there the perspective didn't fire at all; here it fired and still failed. So the maintenance answer must address BOTH failure modes, not just the previously-identified one.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (limits, requirements, boundaries)

- **C1: Audit categorization of warming.** Per `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` Category I (lines 109-111): *"I1: warming is precondition for Navigation [CANONICAL]. (I2's element-count is foreground)"*. The audit treats warming as **precondition class**, distinct from the **cognitive content class** (16-type taxonomy in Category E; 12 route fields challenge in D2). The audit does NOT group these. So the categorization error originated in `_branch.md:29` (my loop-builder writing), not in the audit.
- **C2: Sensemaking spec on Clean Resolution Trap.** Failure mode #5 in `homegrown/sense-making/references/sensemaking.md`: *"An ambiguity resolves with an elegant, satisfying explanation. The resolution feels right — clean, logical, complete. But the strongest counter-argument was never tested on structural grounds."* — line 130 of 11-22's sensemaking fits this exactly (the "clean boundary" framing; counter-argument "warmup IS the pre-condition layer" never tested).
- **C3: Refactor candidate text** at `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`: the proposed Frame-exit Completeness sub-perspective asks *"Does the inquiry's frame's anchor-set EXCLUDE referents that exist project-wide?"* — designed to MAKE the perspective fire on inherited multi-value terms.
- **C4: `homegrown/protocols/loop_diagnose.md` Step 5** — don't propose broad fundamentals rewrites from one weak correction chain. Now N=2 (Memory + this instance); audit threshold is ≥3. Still don't propose broad rewrites; but pattern is approaching the threshold.
- **C5: User asked "pinpoint exact wrong thing"** — must answer at line-level, not just structurally.

### Key Insights (non-obvious implications)

- **K1: The deepest root is the loop-builder's `_branch.md:29` categorization error, NOT the audit.** The audit categorized warming as precondition; the loop-builder (me, writing 11-22's branch) re-categorized it as "cognitive content" by listing it alongside 16-type taxonomy + 12 route fields under "audited; don't redesign." This is a categorization-conflation error at the inquiry-framing stage.

- **K2: The Sensemaking phase's frame-exit reasoning was SHALLOW because it answered the wrong question.** The refactor candidate's question is "Does the project have artifacts the frame's scope excludes that play a role in the operation?" The Sensemaking phase asked a related-but-different question: "Is there a clean boundary between warmup and the per-inquiry layer?" The answer to the second question is structurally always YES (boundaries exist), so the second question can't catch frame-scope capture. The first question would have caught it (warmup plays the precondition role; project has that artifact at the warmup folder; out-of-scope verdict is wrong).

- **K3: Instance 1 vs Instance 2 failure-mode distinction is load-bearing for maintenance.** Instance 1 (Memory): perspective DIDN'T fire (the proxy-vs-structural sub-test wasn't applied to Memory at all). Instance 2 (this): perspective FIRED but produced shallow answer. Same OUTCOME (frame-scope capture; missed artifact); different MECHANISM. Different mechanism → different maintenance candidate.

- **K4: The refactor candidate (Frame-exit Completeness as Definitional sub-perspective) alone is INSUFFICIENT to catch Instance 2.** It was designed to MAKE the perspective fire. In Instance 2 the perspective DID fire. The failure was in the reasoning within the perspective, not in whether the perspective fired. So the refactor candidate addresses Instance 1's mechanism but not Instance 2's.

- **K5: The Sensemaking spec already has a failure mode that names Instance 2's mechanism — "Clean Resolution Trap" (failure mode #5).** The corrective: *"State the strongest counter-argument. State why it fails — on structural grounds."* This corrective, applied to Instance 2's "clean boundary" verdict, would have produced: counter = "warmup IS the pre-condition layer; it's part of navigation's project-wide organization"; structural-grounds-test = "is warmup load-bearing for navigation's operation? YES (audit I1: precondition for Navigation). So the boundary is NOT clean for the question being asked." → the verdict would have flipped.

- **K6: So the maintenance candidate is TWO-PART.** Part A: the existing refactor candidate (Frame-exit Completeness sub-perspective; addresses Instance 1's not-fired mechanism). Part B (NEW): require counter-argument testing within frame-exit verdicts (addresses Instance 2's fired-but-shallow mechanism). Together they cover both failure modes.

- **K7: This is N=2 toward the ≥3 audit threshold for the refactor candidate.** The refactor candidate stays DEFERRED per Step 5 (one more catch needed). But the Part B (counter-argument test) is a SEPARATE maintenance candidate that emerges from THIS instance specifically — it doesn't need to inherit the N=3 threshold because it addresses a different mechanism. However, Step 5 caution still suggests deferring Part B's spec change until evidence is stronger.

- **K8: The categorization error at `_branch.md:29` (loop-builder writing) is a different concern from the disciplines' failures.** Even with the best disciplines, if the inquiry-framing pre-categorizes wrongly, the disciplines work inside a biased frame. The fix at the framing layer is: when writing scope cuts, distinguish "out of scope for cognitive-content redesign" (what 16-type taxonomy + 12 route fields are) from "out of scope for organization-discussion" (which warmup is NOT — warmup IS organization, at the project layer).

### Structural Points (core components, relationships)

- **SP1: Three failure surfaces, not one.**
  - Surface 1: framing-stage categorization error at `_branch.md:29`.
  - Surface 2: Sensemaking-stage shallow reasoning at `sensemaking.md:130`.
  - Surface 3: finding-stage confirmation at `finding.md:256` (no recovery).
- **SP2: Each surface has a different maintenance target.**
  - Surface 1: scope-cut writing convention (loop-builder-level).
  - Surface 2: Frame-exit perspective reasoning standard (Sensemaking-spec-level).
  - Surface 3: finding-compilation check (CONCLUDE-level).
- **SP3: The maintenance candidates from prior loop_diagnose work (M1 pre-CONCLUDE checklist; M5 baseline scrutiny; M6 glossary; refactor candidate from 2026-05-10_03-07) collectively address Surfaces 1 and 3 but NOT Surface 2.** Surface 2 is uncovered.
- **SP4: Counter-argument testing is the missing maintenance candidate** that addresses Surface 2.

### Foundational Principles (assumptions, rules, axioms)

- **P1: External anchoring** — cite spec text + audit text + line numbers. Done.
- **P2: Step 5 caution** — N=2 evidence still requires deferral of new spec changes. New maintenance candidate (Part B) is DEFERRED.
- **P3: Existing failure modes preferred over coining new ones** — Clean Resolution Trap (failure mode #5) names Instance 2's mechanism cleanly; no need to coin a new mode.
- **P4: Honest re-framing of the prior refactor candidate** — it addresses Instance 1's mechanism, not all frame-scope-capture mechanisms. This is a refinement, not a rejection.

### Meaning-Nodes (central concepts and themes)

- **M1: Two failure modes within one pattern.** Frame-scope capture is the pattern; not-fired vs fired-but-shallow are two distinct mechanisms.
- **M2: Clean Resolution Trap names Instance 2's mechanism.** It's already in the Sensemaking spec; reuse it.
- **M3: The categorization error at `_branch.md:29` is the deepest root.** Conflated cognitive content with organization-layer.
- **M4: Counter-argument testing is the missing maintenance.** Addresses Surface 2 (fired-but-shallow).
- **M5: Audit threshold approaches.** N=2 toward ≥3; refactor candidate stays DEFERRED.

### SV2 — Anchor-Informed Understanding

The diagnostic resolves into a **three-surface chain**:
1. **Framing-stage categorization error** at `_branch.md:29` (loop-builder grouped warmup with cognitive content under "audited; don't redesign," when the audit actually categorized warmup as precondition-class).
2. **Sensemaking-stage Clean Resolution Trap** at `sensemaking.md:130` (Frame-exit perspective fired but answered the wrong question — "is there a clean boundary?" instead of "does the project have an excluded role-relevant artifact?"). The counter-argument ("warmup IS the pre-condition layer") was never tested.
3. **Finding-stage confirmation** at `finding.md:256` (published artifact's frame-exit verification re-listed warmup as "out of scope; clean boundary" without retest).

This is **Instance 2 of frame-scope capture**, but with a DIFFERENT failure mode from Instance 1 (Memory). Instance 1: perspective didn't fire. Instance 2: perspective fired but reasoned shallowly (Clean Resolution Trap).

**Maintenance candidates: TWO parts.**
- **Part A (existing):** Frame-exit Completeness sub-perspective per `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`. Addresses Instance 1's not-fired mechanism. DEFERRED per Step 5 until audit produces ≥3 instances. This instance brings count to 2.
- **Part B (NEW):** Counter-argument testing within frame-exit verdicts. When a frame-exit perspective verdict says "out of scope; clean boundary," the strongest counter-argument must be stated and tested on structural grounds before the verdict can be claimed. Uses existing Clean Resolution Trap framing (Sensemaking failure mode #5). Addresses Instance 2's fired-but-shallow mechanism. DEFERRED per Step 5 — but with a SEPARATE evidence trigger (audit for instances where frame-exit fired-but-shallow).

Plus: **the categorization error at `_branch.md:29` is the deepest root**, distinct from both Parts A and B. It points at a scope-cut-writing convention that would benefit from sharpening (distinguish "out of scope for cognitive-content redesign" from "out of scope for organization-discussion").

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **C-T1: The line-130 reasoning conflates output-schema-coupling with role-relevance.** "Warmup doesn't change output schema" (true) → "warmup is out of scope" (does not follow). Schema-coupling and role-relevance are orthogonal. Structural test: warmup IS role-relevant (audit I1: precondition for Navigation) even though it doesn't change output schema. Therefore "out of scope" is wrong for an inquiry about navigation organization.
- **C-T2: The "clean boundary" framing is descriptively true but operationally misleading.** YES, there's a boundary between warmup and per-inquiry artifacts (different layers). But "boundary exists" doesn't imply "the inquiry can safely ignore one side." The inquiry should have asked: "Does my analysis depend on what's on the other side of this boundary?" → YES (navigation organization can't be discussed coherently without warmup's pre-condition role).

### Human / User

- **C-H1: User asked for "exact wrong thing"** — line-level evidence is mandatory.
- **C-H2: User's pattern intuition** — "second instance of frame-scope capture" — matches the analysis. Validated.

### Strategic / Long-term

- **C-S1: Instance 2's fired-but-shallow mechanism is more concerning long-term than Instance 1's not-fired.** Not-fired is curable by making the perspective fire (refactor candidate). Fired-but-shallow indicates the perspective fires but the loop's REASONING within it is weak — a deeper failure. The maintenance candidate must address reasoning quality, not just trigger.
- **C-S2: As autonomy graduates (per metaloop ladder), the loop will make MORE of these calls without human supervision.** Reasoning-quality maintenance candidates compound in value.

### Risk / Failure

- **C-R1: Over-coining new failure modes.** Don't coin "shallow-reasoning frame-exit failure" as a new failure mode when Clean Resolution Trap already names it. Reuse > invent.
- **C-R2: Maintenance overreach risk on Part B.** Adding "counter-argument testing required" to every frame-exit verdict is a non-trivial spec change. Defer per Step 5; needs more evidence first.
- **C-R3: Self-reference acute.** This sensemaking diagnoses a sensemaking-stage failure. Mitigation: external anchoring (line citations); apply the very perspective being diagnosed (Frame-exit Completeness on THIS analysis).

### Resource / Feasibility

- **C-F1: Three maintenance candidates' cumulative cost.** Surface 1 (scope-cut convention sharpening) = small. Surface 2 (counter-argument requirement in Frame-exit Completeness) = small. Surface 3 (CONCLUDE checklist for frame-exit re-verification) = already proposed via M1 from prior loop_diagnose. Total: small, mostly additive.

### Definitional / Internal Consistency

- Tested: does "fired-but-shallow" contradict the refactor candidate's design? **No** — the refactor candidate addresses "perspective should fire"; fired-but-shallow is downstream of firing. Complementary, not contradictory.
- Tested: does naming this as Clean Resolution Trap contradict the prior frame-scope-capture diagnosis? **No** — Clean Resolution Trap is the FAILURE MODE; frame-scope capture is the OUTCOME PATTERN. Different layers.
- New anchor: **C-D1: Loop_diagnose Step 5** is honored — neither Part A nor Part B is being shipped now; both are DEFERRED with evidence triggers.

### Definitional / Frame-exit Completeness (meta-application of the refactor candidate to THIS analysis)

Gating predicate fires (inherited terms: "frame-scope capture," "Frame-exit Completeness," "Clean Resolution Trap," "warming"; used across multi-value structures: the 8 regions + 3 surfaces + 2 instances).

Frame-exit check: does the project have artifacts/usages of "frame-scope capture" or "Clean Resolution Trap" that this analysis's frame's scope excludes?

- The Sensemaking spec's other failure modes (#1-#6) — any of them apply here? Premature Stabilization (#2) might also fit: the sensemaking phase reached "frame-exit check passes" quickly without iterating. Anchor Dominance (#3) — the multi-axial frame of "per-inquiry vs cross-inquiry" was the dominant anchor, organizing everything else.
- This analysis treats Clean Resolution Trap as the primary failure-mode name. But Premature Stabilization (#2) and Anchor Dominance (#3) ALSO partially fit. Should they be co-named?

After consideration: **Clean Resolution Trap is the most specific match** because the verdict text ("clean boundary") and the corrective ("state the strongest counter-argument; state why it fails on structural grounds") both align directly. Premature Stabilization is more about the OVERALL stabilization speed; Anchor Dominance is about over-reliance on one anchor. Both are partially-fitting but Clean Resolution Trap is most-fitting.

Frame-exit check passes; the analysis's bounded scope is intentional (single primary failure-mode named with rationale; secondary modes acknowledged but not co-named to avoid over-attribution).

### Phase / Calibration-State

- **C-P1: At L0/L1 of meta-loop ladder, frame-exit perspective fires manually via human prompting.** The user IS the frame-exit perspective at L0/L1 — they catch what the loop missed. At L2+, the loop must catch its own. So maintenance candidates that strengthen frame-exit-reasoning matter more at L2+.

### SV3 — Multi-Perspective Understanding

The diagnostic stabilizes:

- **Three failure surfaces** (framing-stage categorization; Sensemaking shallow reasoning; finding confirmation).
- **Primary failure-mode name: Clean Resolution Trap** (Sensemaking spec failure mode #5) — line-130 fits exactly.
- **Two-part maintenance:** Part A (existing refactor candidate; addresses Instance 1 not-fired); Part B (NEW; counter-argument testing requirement within frame-exit verdicts; addresses Instance 2 fired-but-shallow). Both DEFERRED per Step 5.
- **Plus the categorization error at `_branch.md:29`** — distinct from Parts A/B. Maintenance: scope-cut writing convention (distinguish cognitive-content-out from organization-out).
- **Instance count: N=2 toward refactor candidate's ≥3 threshold.** One more catch and Part A escalates.
- **Self-reference handled via meta-application** of the refactor candidate (Frame-exit Completeness applied to this analysis; check passes).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1: Is the deepest root `_branch.md:29` or upstream (e.g., audit misread)?

**Strongest counter-interpretation:** the audit might have implicitly invited the categorization error. If the audit's structure makes it easy to misread "warming is canonical, audited" as "warming is cognitive-content-class, don't redesign," then the audit shares blame.

**Why the counter fails (structural grounds):** the audit explicitly puts warming in Category I ("Warming"; line 109) — separate from Category E ("Type taxonomy") and the D2 challenge candidate (route fields). The audit's structure is correct; the loop-builder (me, writing `_branch.md`) collapsed the categories at scope-cut-writing time. The misread is loop-builder-level, not audit-level.

**Confidence:** HIGH (audit text directly shows separate categories).

**Resolution:** `_branch.md:29` IS the deepest root in this chain. Audit is correct; loop-builder mis-categorized at scope-cut writing time. Maintenance candidate: scope-cut writing convention.

---

### Ambiguity #2: Is the refactor candidate (Frame-exit Completeness) insufficient, or just incomplete?

**Strongest counter-interpretation:** Calling the refactor candidate "insufficient" is too strong. It addresses Instance 1's mechanism cleanly. Instance 2 is a DIFFERENT mechanism that the refactor candidate wasn't designed for. So the refactor candidate isn't insufficient for what it targets; it's incomplete for the broader pattern.

**Why the counter-interpretation is correct:** YES. "Insufficient" sounded like a critique of the refactor candidate's quality. The accurate framing: the refactor candidate addresses one mechanism (not-fired); Instance 2 reveals a SECOND mechanism (fired-but-shallow) that needs its own maintenance. Both mechanisms produce frame-scope capture; both need addressing; the refactor candidate handles one half.

**Confidence:** HIGH.

**Resolution:** the refactor candidate is COMPLETE for its target (Instance 1's mechanism); ADDITIONAL maintenance candidate (Part B; counter-argument testing) needed for Instance 2's mechanism. Don't call refactor candidate "insufficient" — call it "covers one mechanism; second mechanism needs its own candidate."

---

### Ambiguity #3: Should "Clean Resolution Trap" be the named failure mode, or should we coin a new one?

**Strongest counter-interpretation:** A new failure mode (e.g., "Shallow Frame-exit Verdict") would name Instance 2's mechanism more specifically. Clean Resolution Trap is a Sensemaking-general failure mode; using it for THIS specific frame-exit case might be reusing too broadly.

**Why the counter fails (structural grounds):** loop_diagnose Step 5 forbids broad fundamentals rewrites from weak evidence. Coining a new failure mode is fundamentals work. Existing failure modes are preferred unless evidence is strong (≥3 instances per the audit threshold). Clean Resolution Trap's spec text matches line 130's verdict EXACTLY — *"resolution feels right — clean, logical, complete; strongest counter-argument was never tested on structural grounds."* The match isn't loose.

**Confidence:** HIGH.

**Resolution:** Use Clean Resolution Trap. Don't coin a new failure mode. If pattern recurs and audit threshold is met, consider whether Clean Resolution Trap needs sharpening or whether a specific-to-frame-exit sub-pattern needs naming. For now, reuse.

---

### Ambiguity #4: Should Part B (counter-argument testing requirement) be DEFERRED or ACTIONABLE?

**Strongest counter-interpretation:** Part B is small (add one sentence to the Frame-exit Completeness spec text). It addresses Instance 2's mechanism which is otherwise uncovered. Small + uncovered → ship now.

**Why the counter fails (structural grounds):** Step 5's spirit: don't propose fundamentals changes from weak evidence. N=1 for Instance 2's specific mechanism (THIS instance is the only fired-but-shallow case I've identified). Until N≥3 of fired-but-shallow specifically, defer the spec change. Honor the project's evidence-discipline.

**Confidence:** HIGH on DEFERRED status (consistent with prior loop_diagnose findings' deferrals from N=1).

**Resolution:** Part B is DEFERRED with its own revival trigger ("M4 audit produces ≥3 instances of fired-but-shallow frame-exit verdicts across distinct inquiries"). Separate from Part A's trigger.

---

### Load-bearing concept tests (mandatory per Phase 3 protocol)

#### Concept: "fired-but-shallow" (newly-coined label)

- **Test:** user-language alignment + proxy-vs-structural.
- **Counter:** "fired-but-shallow" is loop-coined. The user said "pinpoint the exact wrong thing"; they didn't say "fired but shallow."
- **Why the counter has merit AND fails:** MERIT — term is loop-coined. FAILURE — the term concisely names a distinct mechanism that matters for maintenance design. Without it, the maintenance recommendation can't cleanly distinguish what addresses Instance 1 vs Instance 2.
- **Resolution:** use "fired-but-shallow" with definition. Flag as provisional; if the pattern repeats and gets audit-confirmed, the term can stabilize.

#### Concept: "categorization error" (the thing at `_branch.md:29`)

- **Test:** discoverability.
- **Counter:** "categorization error" is generic. What specifically was mis-categorized?
- **Resolution:** specify — the scope cut wrote *"the 16-type taxonomy, the 12 route fields, the warming protocol"* under "cognitive content; audited; don't redesign." Warming is precondition-class (per audit Category I), not cognitive-content-class. The error is **conflating precondition-class with cognitive-content-class under "audited; don't redesign."**

#### Specific-vs-pattern recognition cue

The user pointed at ONE specific finding (11-22). The analysis claims pattern (Instance 2 of frame-scope capture; different mechanism from Instance 1). Both are addressed: specific instance with line-level evidence; pattern context with N=2 + audit threshold.

---

### SV4 — Clarified Understanding

The exact wrong thing in 11-22 is a three-surface chain:

1. **Surface 1 — Origin (`_branch.md:29`):** categorization error. Scope cut grouped warming with cognitive content (16-type taxonomy + 12 route fields) under "audited; don't redesign." But the audit categorizes warming as precondition (Category I, separate from cognitive content). The loop-builder collapsed the categories.

2. **Surface 2 — Critical failure (`docarchive/sensemaking.md:130`):** Clean Resolution Trap (Sensemaking failure mode #5). Frame-exit perspective fired on warmup and produced "OUT OF SCOPE; clean boundary" by asking the wrong question (output-schema-coupling) instead of the right question (role-relevance / project-wide-organization). The counter-argument ("warmup IS the pre-condition layer") was never tested on structural grounds, which is precisely what Clean Resolution Trap's corrective says to do.

3. **Surface 3 — Manifestation (`finding.md:256`):** the published frame-exit verification table re-listed warmup as "out of scope; clean boundary" without retest. The error propagated to readers and to the downstream 22-46 comparison finding.

**Pattern context:** this is Instance 2 of frame-scope capture (Instance 1 was Memory). But the mechanism differs:
- Instance 1: perspective NOT FIRED.
- Instance 2: perspective FIRED BUT SHALLOW.

**Maintenance candidates:**
- **Part A** (existing refactor candidate per `2026-05-10_03-07`): Frame-exit Completeness as Definitional sub-perspective. Addresses Instance 1's not-fired mechanism. DEFERRED with revival trigger "M4 audit produces ≥3 instances." This instance contributes count = 2.
- **Part B** (NEW, this instance): Counter-argument testing requirement within frame-exit verdicts. When frame-exit perspective produces "out of scope" / "clean boundary" verdict, the strongest counter-argument must be stated and tested on structural grounds (per Clean Resolution Trap's existing corrective). Addresses Instance 2's fired-but-shallow mechanism. DEFERRED with separate revival trigger "audit produces ≥3 instances of fired-but-shallow frame-exit verdicts."
- **Plus** a scope-cut writing convention sharpening (distinguish cognitive-content-out from organization-out): smaller change; not a spec edit; loop-builder-level guideline. Can be ACTIONABLE since it's just a writing-discipline reminder rather than a spec change.

**Self-reference:** this sensemaking applied Frame-exit Completeness perspective to itself (meta-application; passed); used existing Sensemaking failure modes (Clean Resolution Trap); avoided coining new failure modes per Step 5.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now FIXED

- **F1:** Three failure surfaces (framing / sensemaking / finding).
- **F2:** Deepest root is `_branch.md:29` categorization error (loop-builder level, not audit-level).
- **F3:** Critical failure at `sensemaking.md:130` is Clean Resolution Trap (failure mode #5; existing in spec; don't coin new).
- **F4:** Instance 2 has DIFFERENT mechanism from Instance 1 (fired-but-shallow vs not-fired).
- **F5:** Maintenance is TWO-PART: Part A (existing refactor candidate; Instance 1 coverage) + Part B (new; Instance 2 coverage).
- **F6:** Both Parts DEFERRED per Step 5.
- **F7:** Scope-cut writing convention sharpening is a SEPARATE small candidate (ACTIONABLE; loop-builder-level guideline; not spec change).
- **F8:** N=2 toward refactor candidate's ≥3 threshold; Part B has separate threshold.

### Variables ELIMINATED

- E1: Audit-level cause for the categorization error (audit is correct; loop-builder mis-read).
- E2: Coining a new failure mode for Instance 2's mechanism (Clean Resolution Trap already names it).
- E3: Calling the refactor candidate "insufficient" (it's complete for its target; needs companion candidate for the other mechanism).
- E4: Shipping Part B from N=1 evidence (Step 5).
- E5: Co-naming Premature Stabilization or Anchor Dominance as primary failure modes (Clean Resolution Trap is the best fit; secondary modes acknowledged but not primary).

### Variables that remain OPEN

- **O1:** Exact wording of Part B's counter-argument testing requirement. Innovation will draft.
- **O2:** Exact wording of the scope-cut writing convention. Innovation will draft.
- **O3:** Whether Part B should be folded INTO the existing refactor candidate (as a sub-requirement) or stand SEPARATELY. Decomposition / Innovation will decide.
- **O4:** How to track instances toward the refactor candidate's ≥3 audit threshold (and Part B's separate threshold). Operational question; out of scope for this inquiry.

### SV5 — Constrained Understanding

The diagnostic reduces to: three surfaces, two failure modes within the pattern, two-part maintenance (both DEFERRED), one additional small candidate (scope-cut writing convention; ACTIONABLE). Self-reference handled via meta-application of refactor candidate. N=2 toward audit threshold.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The exact wrong thing in `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md` is a three-surface failure chain. Origin: `_branch.md:29` categorization error — scope cut grouped warming protocol with cognitive content (16-type taxonomy + 12 route fields) under "audited; don't redesign," but warming is precondition-class (audit Category I), not cognitive-content-class. Critical failure: `docarchive/sensemaking.md:130` Clean Resolution Trap (Sensemaking failure mode #5) — Frame-exit perspective fired on warmup but produced "OUT OF SCOPE; clean boundary" by conflating output-schema-coupling with role-relevance, never testing the strongest counter-argument ("warmup IS the pre-condition layer; project has it; navigation operation depends on it") on structural grounds. Manifestation: `finding.md:256` published frame-exit verification re-listed warmup as out-of-scope without retest. Propagation: 22-46 comparison finding inherited the frame and manifested as "concept-mapping = new capability."**

**This is Instance 2 of frame-scope capture but with a different MECHANISM from Instance 1 (Memory). Instance 1: perspective NOT FIRED. Instance 2 (here): perspective FIRED BUT SHALLOW. The proposed Frame-exit Completeness refactor candidate (per `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`) addresses Instance 1's mechanism cleanly but does NOT address Instance 2's mechanism — it makes the perspective fire; it doesn't sharpen the reasoning within. So maintenance is TWO-PART: Part A (existing refactor candidate; Instance 1 not-fired coverage) + Part B (NEW; counter-argument testing requirement within frame-exit verdicts; Instance 2 fired-but-shallow coverage). Both DEFERRED per loop_diagnose Step 5 with separate revival triggers. Plus one ACTIONABLE small candidate at the loop-builder level: scope-cut writing convention sharpening (distinguish "out of scope for cognitive-content redesign" from "out of scope for organization-discussion") — this addresses the deepest root (the framing-stage categorization error). The pattern count is N=2 toward the refactor candidate's ≥3 audit threshold; one more catch and Part A escalates.**

### Difference from SV1

| Dimension | SV1 | SV6 |
|---|---|---|
| Failure-surface count | "Two parts" | THREE explicit surfaces with line citations |
| Failure-mode name | Implicit | Clean Resolution Trap (failure mode #5; existing; don't coin new) |
| Instance distinction | Stated but not load-bearing | Load-bearing for maintenance (not-fired vs fired-but-shallow) |
| Maintenance shape | "Two-part" | Part A (existing) + Part B (new) + ACTIONABLE scope-cut convention |
| Step 5 application | Implicit | Explicit — both parts DEFERRED with separate triggers |
| Self-reference | Risk acknowledged | Mitigated via meta-application of refactor candidate |

The SV1→SV6 delta is substantial: from "three surfaces; need maintenance" to a fully specified diagnostic with named failure mode, distinct mechanism analysis, two-part deferred maintenance with separate triggers, plus one immediate actionable, and explicit self-reference handling.

---

## Saturation indicators

- **Perspective saturation:** high. Frame-exit Completeness perspective applied meta — check passed. Phase/Calibration-State distinguished L0/L1 (manual) vs L2+ (autonomous) implications. Definitional/Consistency tested 3 anchors.
- **Ambiguity resolution ratio:** 4/4 explicit ambiguities resolved (all HIGH); 2 load-bearing concept tests + specific-vs-pattern check.
- **SV delta:** large.
- **Anchor diversity:** 9 anchor types across 8 perspectives.

---

## Open items handed to next disciplines

- **Decomposition:** partition into per-surface analysis (origin / sensemaking / finding) + maintenance candidates (Part A / Part B / scope-cut convention) + verdict.
- **Innovation:** draft exact wording for Part B's counter-argument testing requirement; draft exact wording for scope-cut writing convention; commit O1, O2, O3.
- **Critique:** test whether "fired-but-shallow" label sticks; test whether Part B's revival trigger threshold is right; test self-reference resistance.
