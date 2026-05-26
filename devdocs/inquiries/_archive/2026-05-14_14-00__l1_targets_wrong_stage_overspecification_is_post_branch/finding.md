---
status: active
corrects:
  - devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md
preserves-from:
  - devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md
depends-on-protocol:
  - homegrown/protocols/loop_diagnose.md
related:
  - devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md
  - devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md
  - devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md
---

# Finding: L1 Targets the Wrong Stage — Loop-Stage Scope-Leakage as a Distinct Failure Mode from Phantom Canon

## Changes from Prior

**Prior path.** `devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md` — referred to below by the shorthand "2026-05-14_13-08."

**Revision trigger.** User's structural correction. After the prior finding proposed a "Recursive Demonstration" section framing the L1 maintenance candidate's over-specification as "Phantom Canon at meta-meta-level / a concrete instance of lesson-introduces-its-own-trap firing at meta-meta-level," the user observed that the LOOP_DIAGNOSE-style inquiry that PRODUCED the over-specified L1 (the inquiry at `devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/`, referred to below as "2026-05-14_12-45") had a correctly generic `_branch.md` Goal (b) — *"reusable (applies to other half-tried artifacts in the project, not just navigation)."* The framing was generic. Yet the published finding contained this-project-specific examples in the L1 spec. Therefore the over-specification entered AFTER `_branch.md` was written — during the loop's discipline pipeline — making L1's pre-`_branch.md` mechanism mis-targeted for catching this particular class of failure.

**What's preserved.**

- The corrected L1 text from 2026-05-14_13-08 (project-agnostic trigger criteria phrasing, ambiguity threshold, diversified canon-status examples, optional project-boundary declaration) stands as-is. It is the right fix for what L1 actually catches: **framing-time canonicalization** — when an artifact is referenced in an inquiry's `_branch.md` with its canon-status unchecked.
- The 2026-05-14_13-08 standing meta-check on L1's trigger criteria stands as-is for its actual scope: text-level project-agnosticism at spec-revision time.
- The `2026-05-14_12-45` finding's primary failure hypothesis (HIGH confidence framing-time implicit canonicalization) stands on its own terms for the original correction chain (`2026-05-14_00-01` → `2026-05-14_00-26`), where the inquiry's `_branch.md` was actually mis-framed.
- Phantom Canon as a failure-mode name and concept stands. The "meta-conditions on verification" pattern-family naming stands.

**What's changed (dimensional CORRECTS on 2026-05-14_13-08).** Three sub-dimensions of 2026-05-14_13-08 are corrected:

1. **Recursive Demonstration framing** — section 6 of 2026-05-14_13-08 claimed the L1 over-specification was "Phantom Canon at meta-meta-level / a concrete instance of lesson-introduces-its-own-trap firing at meta-meta-level." This finding's section 6 records that the framing failed the strengthened diagnostic three-test (claim-truth NO; level-coherence NO; external-citation NO) on the case it was applied to. The L1 over-specification is a different failure mode at a different stage.

2. **Family-extension instance count** — section 7 of 2026-05-14_13-08 added the L1 over-specification as "a second instance of lesson-introduces-its-own-trap, bringing that sub-member's instance count to two." This finding's section 7 retracts that claim. The L1 over-specification is one instance of a sister pattern (loop-stage scope-leakage), making the family a fourth-member family — not a three-member family with one second-instance.

3. **Layer 3 self-reference scope** — section 8 of 2026-05-14_13-08 (Layer 3 of its self-reference, the "spec eats its own dog food" check) verified TEXT-level project-agnosticism on the corrected L1's trigger criteria. The check passed at text-level. But it did not verify mechanism-level appropriateness — whether L1's stage (pre-`_branch.md`) matched the failure mode it was claimed to address. This finding's section 8 acknowledges that text-level alone is insufficient and adds mechanism-level verification.

**What's new.**

- A new failure-mode name: **loop-stage scope-leakage** (technical) — concrete-text generation defaulting to immediately-available examples when the inquiry's framing claims a generic scope. Mechanism description: **available-examples bias**. Fourth member of the meta-conditions-on-verification family (calibration: emerging, not confirmed).
- Primary maintenance candidate **M1** — a scope-fidelity-to-framing test added to the Phase 3 (Test) cycle of `/innovate` (the Structural Innovation discipline; canonical spec at `homegrown/innovate/references/innovate.md`).
- Deferred maintenance candidate **M2** — a scope-fidelity-to-framing dimension added to the Phase 0 (Dimension Construction) defaults of `/td-critique` (the Structural Critique discipline; canonical spec at `homegrown/td-critique/references/td-critique.md`). Revival trigger: M1 fails to catch a loop-stage scope-leakage case in 3 future MVL+ inquiries.
- A separate top-level section recording the Recursive Demonstration correction.
- A fourth-member pattern-family positioning with explicit retraction of the prior's "second instance" claim.
- A multi-layer self-reference acknowledgment applying the new check at text-level + mechanism-level + evidence-calibration-level.

**Migration.** Future inquiries that generate concrete spec text from a generically-framed `_branch.md` should use M1 (described in this finding's Maintenance Candidates section) at `/innovate`'s Phase 3. L1 (preserved from 2026-05-14_13-08) continues to fire at the pre-`_branch.md` stage for inquiries that reference artifacts of ambiguous canon-status. Both maintenance candidates stand in parallel; they address different failure modes at different stages of the inquiry pipeline.

---

## Question

Given that the two prior findings on this topic chain (`devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md` and its CORRECTS at `devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md`) both proposed L1 as a pre-step at `/MVL+`'s root-NEW path BEFORE `_branch.md` is written — and the user has correctly observed that the 2026-05-14_12-45 inquiry's `_branch.md` goal (b) explicitly stated the failure mode should be *"reusable (applies to other half-tried artifacts in the project, not just navigation)"*, meaning the inquiry was FRAMED correctly as generic, but the **finding** produced by the inquiry's pipeline contained the over-specification (L1's trigger criteria enumerated this-project-specific examples) — at WHICH stage of the loop's discipline pipeline (exploration / sensemaking / decomposition / innovation / critique) or CONCLUDE did the over-specification enter, what mechanism catches loop-stage scope-leakage at that stage (as distinct from L1's framing-time canonicalization catch), and what does this say about the H1 attribution (HIGH framing-time implicit canonicalization) being misapplied to this CLASS of failure (loop-stage scope-leakage, NOT framing-time canonicalization)?

**Goal.** A new diagnostic that traces the entry point of the over-specification, names the failure mode distinctly, proposes a maintenance candidate at the right stage, corrects the misattribution that propagated from 2026-05-14_12-45 into 2026-05-14_13-08, and honestly names the 6-MVL+-in-succession cost.

---

## Finding Summary

- **Diagnostic verdict.** ACTIONABLE, with CORRECTS framing on 2026-05-14_13-08 (dimensional — targets three sub-dimensions; the rest stands).

- **What this finding corrects.** Three sub-dimensions of 2026-05-14_13-08: the Recursive Demonstration framing (section 6 of that finding); the family-extension instance count (section 7); the Layer 3 self-reference's claim of comprehensive scope (section 8). All three are corrected; the rest of 2026-05-14_13-08 stands.

- **What this finding does NOT correct.** The corrected L1 text from 2026-05-14_13-08 stands as-is. L1's catch of framing-time canonicalization (Phantom Canon) is unchanged. The `2026-05-14_12-45` finding's H1 attribution for the original chain stands on its own terms. The Phantom Canon failure-mode name and concept stand.

- **New failure mode named:** **loop-stage scope-leakage** (technical) — concrete-text generation defaulting to immediately-available examples when the inquiry's framing claimed a generic scope. Mechanism description: **available-examples bias**. Fourth member of the meta-conditions-on-verification family. Calibration: emerging, not confirmed (one observed instance).

- **Where the over-specification entered (traced).** Innovation. Specifically, the concrete-text generation step in the 2026-05-14_12-45 inquiry's `innovation.md` (lines 161-163 of that archived file) — where the L1 spec-edit text first appeared with this-project-specific examples in the trigger criteria. Upstream disciplines (exploration, sensemaking, decomposition) all kept the L1 spec abstract. Critique compounded the over-specification by recommending a `/navigation` example for the `non-canon` category, without probing project-agnosticism on the trigger criteria.

- **Primary maintenance candidate (M1).** A scope-fidelity-to-framing test added to `/innovate`'s Phase 3 (Test) cycle. Selective: fires only when the inquiry's framing claims a generic scope. Check phrasing: *"Does the candidate's spec text retain the SCOPE that the inquiry's framing claimed, or has it NARROWED to specific examples drawn from immediately-available context?"* Risk LOW; doc-only edit to `/innovate`'s skill spec.

- **Deferred maintenance candidate (M2).** A scope-fidelity-to-framing dimension added to `/td-critique`'s Phase 0 default dimensions. Revival trigger: M1 fails to catch a loop-stage scope-leakage case in 3 future MVL+ inquiries.

- **Relationship to L1 (preserved from 2026-05-14_13-08).** PARALLEL. L1 catches framing-time canonicalization at `_branch.md` write; M1 catches loop-stage scope-leakage at `/innovate` Phase 3. Different stages; different failure modes; both stand without conflict.

- **Pattern-family corrected.** The family now has FOUR distinct members, not three with one second-instance. Members: lesson-introduces-its-own-trap; framing-load-bearing; Phantom Canon; loop-stage scope-leakage. The 2026-05-14_13-08 claim that "loop-stage scope-leakage is a second instance of lesson-introduces-its-own-trap" is explicitly retracted.

- **Self-reference at scope-fidelity.** This finding's own outputs (failure-mode name, M1 description, evidence framing) pass M1's check at THREE layers: text-level (all phrasing is generic; this-project evidence is tagged as illustration), mechanism-level (M1 is at the right stage for what it catches), and evidence-calibration-level (one-instance basis is acknowledged honestly).

- **Honest cost-naming.** This is the sixth MVL+ inquiry in succession on the related topic chain. Cumulative cost is heavy. The value of this iteration: distinguishing two failure modes that the prior iterations conflated, placing the maintenance candidate at the failure's actual entry stage, correcting a structural misattribution that would otherwise propagate forward, and providing concrete evidence that "spec eats its own dog food" requires multi-layer application (not text-level alone).

---

## Finding

### Why this discussion exists

The Homegrown project — a personal effort to build a thinking-discipline toolkit consisting of structured methodologies for exploration, sensemaking, decomposition, innovation, and critique — recently produced a chain of LOOP_DIAGNOSE-style findings about a failure mode the project's MVL+ inquiry loop had been encountering: the loop was anchoring on artifacts that existed in the project but did not represent the user's current intent. The first LOOP_DIAGNOSE finding (`2026-05-14_12-45/finding.md`) named the failure mode Phantom Canon and proposed a pre-step (L1) for `/MVL+` (the Extended Cognitive Loop runner; canonical spec at `homegrown/protocols/`) to check artifact canon-status before each new inquiry's framing is written.

The second LOOP_DIAGNOSE finding (`2026-05-14_13-08/finding.md`) was itself a CORRECTS on `2026-05-14_12-45`. It corrected the L1 trigger criteria's text to be project-agnostic (the prior L1 had over-specified to this-project examples in its trigger criteria), added a standing meta-check on trigger criteria at spec-revision time, and added an explicit Recursive Demonstration section claiming the L1 over-specification was "Phantom Canon at meta-meta-level / a concrete instance of lesson-introduces-its-own-trap firing at meta-meta-level."

The user then made a structural observation that this finding addresses. The user pointed out that the `2026-05-14_12-45` inquiry's `_branch.md` Goal (b) was explicitly generic — it said *"reusable (applies to other half-tried artifacts in the project, not just navigation)."* The framing was correctly generic. Yet the finding produced by that inquiry's pipeline contained the over-specification. Therefore the over-specification entered AFTER `_branch.md` was written — during the loop's discipline pipeline. The user's structural conclusion: L1 (a pre-step BEFORE `_branch.md`) is mis-targeted for catching THIS kind of failure.

This finding traces the over-specification's actual entry point (innovation's concrete-text generation step), names the failure mode distinctly from Phantom Canon (loop-stage scope-leakage), proposes a maintenance candidate at the right stage (M1 at `/innovate`'s Phase 3), and corrects the prior finding's three mis-framings dimensionally. The CORRECTS is dimensional, not total — the corrected L1 text stands, the L1 catch of framing-time canonicalization stands, and the `2026-05-14_12-45` H1 attribution for the original chain stands.

### 1. Correction Chain Summary

| Field | Value |
|---|---|
| **Prior path** | `devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md` |
| **Corrected path** | this finding |
| **Human correction (excerpt)** | *"so i am thinking branch md generation is not the problem.. becuase it was correct, it said this is an issue not just specific to navigation, but finding had this specification error... so obviously the error doesnt come from branch or before branch no?"* |
| **What changed** | Tracing the five archived discipline outputs of `2026-05-14_12-45` reveals: exploration, sensemaking, and decomposition all kept the L1 spec abstract. Innovation introduced the this-project-specific examples in the concrete L1 spec-edit text (its archived `innovation.md` lines 161-163). Critique compounded by recommending a `/navigation` example for the `non-canon` category without probing project-agnosticism on the trigger criteria. The over-specification's entry point is innovation's concrete-text generation step — a different stage and different mechanism than Phantom Canon (which fires at framing-time at `_branch.md` write). L1 (a pre-`_branch.md` pre-step) is mis-targeted for catching this class of failure. The corrected diagnostic: name the new failure mode (loop-stage scope-leakage); place the maintenance candidate at the right stage (M1 at `/innovate` Phase 3); preserve L1 PARALLEL for what L1 actually catches. |
| **Scope of CORRECTS** | Dimensional, not total. Targets three sub-dimensions of `2026-05-14_13-08`: (i) Recursive Demonstration framing (section 6 of that finding); (ii) family-extension instance count (section 7); (iii) Layer 3 self-reference's text-only scope (section 8). The corrected L1 text, the standing text-level meta-check, the Phantom Canon failure-mode name, the meta-conditions-on-verification family naming, and the `2026-05-14_12-45` H1 attribution for the original chain all stand. |

### 2. Failure Hypotheses

#### Hypothesis 1: Innovation's concrete-text generation defaults to available-examples (HIGH confidence; PRIMARY)

**Affected stage.** `/innovate`'s Phase 2 (Generate) — specifically the step where the discipline's mechanisms produce concrete spec-edit text from sensemaking and decomposition commitments.

**Shortcoming type.** **Available-examples bias.** When the inquiry's framing claims a generic scope but the loop is running inside a specific project, innovate's concrete-text generation reaches for the most cognitively-available examples — typically this-project's artifact patterns, named entities, and identifier conventions. Without an explicit scope-fidelity check at Phase 3 (Test), the spec text exits innovate narrowed from the framed scope.

**Evidence from the 2026-05-14_12-45 pipeline (linguistic trace across the five archived discipline outputs).**

- `exploration.md` (the L1 candidate description, around line 74): *"Before `_branch.md` is created (root NEW path), prompt for canon-status of **any project artifacts** the question references"* — GENERIC. No this-project-specific terms.
- `sensemaking.md` (Perspective 7 + SV6 stabilized model): *"fires at root-NEW creation when the inquiry's question explicitly references project artifacts. The pre-step prompts: 'Are these artifacts canon for the question being asked, or are they historical/legacy/under-test?'"* — GENERIC.
- `decomposition.md` (the P2.4 piece's verification + determination-mechanism check): *"selective triggering on artifact references; per-artifact prompt for canon-status; unknown-acceptable"* — GENERIC.
- **`innovation.md` (the P2.4 L1 spec-edit text at lines 161-163):** *"The pre-step is SELECTIVE: it fires only when the question or goal text explicitly references project artifacts (file paths under `homegrown/`, discipline names like `/navigation` or `/explore`, prior inquiry IDs like `2026-05-12_11-40`)."* — **THIS-PROJECT-SPECIFIC** (first appearance of the over-specification).
- `critique.md` (probe (a) on L1 operational-clarity, recommendation R1 around line 49): *"Add brief illustrative examples per category to L1's prompt design. E.g., for `non-canon`: 'an existing **/navigation** discipline spec...'"* — **COMPOUNDED** (added a this-project example for one canon-status category).

**Evidence from the human correction.** The user's quote explicitly identifies that the `_branch.md` was correctly generic (its Goal (b) said *"applies to other half-tried artifacts in the project, not just navigation"*) and the over-specification appears only in the finding. This directly implicates the loop's discipline pipeline (post-`_branch.md`), not the framing.

**Confidence.** HIGH. The linguistic trace is conclusive across five independent discipline outputs. The user's structural correction provides external grounding.

**Why not stronger.** HIGH is the maximum. Trace evidence + user correction + structural reasoning all converge.

**Maintenance candidate.** M1 (`/innovate` Phase 3 scope-fidelity-to-framing test). See section 4 below.

**Evaluation gate.** Deploy M1; observe 3 future MVL+ inquiries where the framing claims a generic scope and concrete spec text is generated. For each: (1) Does M1 fire correctly (selective triggering on generic-framed; not firing on specific-scoped)? (2) Does M1 catch scope narrowing when it occurs? (3) Does the prevention rule produce diversified, tagged, or re-framed output? (4) Does the spec text passing M1 actually retain text-scope matching the framing-scope? If 3 of 4 pass on 2 of 3 inquiries — confirmed. If fewer — revisit M1's trigger criterion or check phrasing.

#### Hypothesis 2: Critique's default prosecution dimensions don't probe scope-fidelity (MEDIUM confidence; supporting)

**Affected stage.** `/td-critique`'s Phase 0 (Dimension Construction) and Phase 2 (Adversarial Evaluation).

**Shortcoming type.** **Dimension gap.** The six default critique dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented. None of them indexes on whether the candidate's text-scope matches the inquiry's framed scope. The adversarial-testing capability exists in principle, but the default-dimension level does not surface scope-fidelity, so scope-leakage tends to pass through critique without a probe.

**Evidence from the 2026-05-14_12-45 pipeline.** Its archived `critique.md` listed dimensions in Phase 0 but none was scope-fidelity-to-framing. Probe (a) on L1 surfaced operational-clarity issues (two-reader divergence) but did not probe project-agnosticism on the trigger criteria. The probe's recommendation (R1) suggested adding per-category examples and used a this-project example (`/navigation`) for one category — compounding rather than catching.

**Confidence.** MEDIUM. The dimension gap is structural at the default level. Critique could construct a scope-fidelity probe with a problem-specific dimension, but it would require either intuition or upstream signal.

**Why not stronger.** Critique's adversarial-testing capability is general enough that a sufficiently rigorous critique pass could have surfaced scope-fidelity even without it being a default dimension. The structural gap is at default-dimension level, not at capability level.

**Maintenance candidate.** M2 (deferred — add a scope-fidelity-to-framing dimension to `/td-critique`'s Phase 0 defaults). See section 4 below.

**Evaluation gate.** Monitor whether M1 alone catches the failure mode in 3 future MVL+ inquiries. Revival trigger for M2: if M1 fails to catch a loop-stage scope-leakage case in any of 3 future inquiries with generically-framed inquiries.

#### Hypothesis 3: Existing standing meta-check operates at text level only (MEDIUM confidence; supporting)

**Affected stage.** Spec-revision time. Specifically, the standing meta-check on L1's trigger criteria added in section 4b of `2026-05-14_13-08/finding.md`.

**Shortcoming type.** **Text-level scope only; mechanism-level appropriateness unaddressed.** The standing meta-check from 2026-05-14_13-08 requires future spec-revisers to verify that L1's trigger criteria phrasing is project-agnostic at TEXT level. The check is sound for what it claims. But it does not check mechanism-level appropriateness — whether the spec's mechanism (the stage of the loop pipeline where it fires) matches the failure mode it claims to address.

**Evidence.** Section 8 Layer 3 of `2026-05-14_13-08/finding.md` (its "spec eats its own dog food" check) explicitly verified TEXT-level project-agnosticism on each row of the corrected L1's trigger criteria. The check passed for what it checked. But L1's mechanism (pre-`_branch.md` pre-step) was mis-targeted for the failure mode it claimed to address (the L1's own over-specification, which entered at innovation-stage, not at framing-time).

**Confidence.** MEDIUM. The gap is real but bounded — the text-level meta-check still serves its declared scope.

**Why not stronger.** The text-level meta-check itself is not broken; it is scope-limited. Treating it as broken would overreach.

**Maintenance candidate.** M1 (covers mechanism-level at innovate-runtime, not at spec-revision time). This avoids meta-check proliferation while ensuring mechanism-level coverage at the natural stage.

**Evaluation gate.** Monitor whether the text-level meta-check + M1 together cover both layers (text + mechanism) in future spec revisions. Research-frontier flag: if existing-spec major redesigns expose mechanism-level errors at spec-revision time not caught by M1's runtime check, revisit by adding a mechanism-level layer to the standing meta-check.

### 3. Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| `/innovate` Phase 2 concrete-text generation (PRIMARY) | Available-examples bias | strong (5-file linguistic trace + user correction) | HIGH | M1 |
| `/td-critique` Phase 0 dimension construction (supporting) | Dimension gap on scope-fidelity | medium | MEDIUM | M2 deferred |
| Spec-revision time (text-level meta-check from 2026-05-14_13-08) | Text-only scope; mechanism-level unaddressed | medium | MEDIUM | Covered by M1 at innovate-runtime; avoid meta-check proliferation |

Primary attribution is at innovation. Critique's gap is supporting (compounding). The text-level meta-check's scope-limitation is a structural acknowledgment, not a fix-target — its scope is preserved.

### 4. Maintenance Candidates

#### Primary: M1 — `/innovate` Phase 3 scope-fidelity-to-framing test

**What changes.** Add a sixth test to `/innovate`'s Phase 3 (Test) cycle. The current 5 tests (novelty, scrutiny survival, fertility, actionability, mechanism independence) test the candidate's properties. M1 adds a sixth test that checks the candidate's text-scope against the inquiry's framed scope.

**Trigger criterion (project-agnostic).** The test fires when the inquiry's framing claims a generic scope — that is, claims the candidate (concept, spec, rule, design) applies to a class of cases rather than to one specific case. Recognition cues for "generic-framed" include phrases like:

- *"applies to a class of cases"*
- *"should be reusable / generalize / span multiple contexts"*
- *"the failure mode is generic"*
- *"applies regardless of [project / system / context / domain]"*
- *"any [artifact / case / instance]"*

The test does NOT fire when the inquiry's framing is explicitly scoped to a specific case. Selective triggering on generic-framed inquiries prevents over-fire.

**Check phrasing.**

> *"Does the candidate's spec text retain the SCOPE that the inquiry's framing claimed, or has it NARROWED to specific examples drawn from immediately-available context?"*

The check fires after innovate's Phase 2 (Generate) produces concrete text. It inspects the generated text for examples and references; flags any that fall outside the framed scope.

**Diversified illustrative examples (spanning four contexts within software-engineering — the spec eats its own dog food at this very listing).**

- *Algorithm spec.* Inquiry framing: *"this algorithm should handle inputs of any size."* Generated text examples: only N=10 and N=100 inputs from one test suite. → Scope NARROWED. M1 fires.
- *Protocol spec.* Inquiry framing: *"applies to any data transport."* Generated text examples: HTTPS and TLS only. → Scope NARROWED. M1 fires.
- *Documentation spec.* Inquiry framing: *"for any reader."* Generated text examples: drawn exclusively from one team's codebase. → Scope NARROWED. M1 fires.
- *Discipline-rule spec (one illustration from one project context, not a project-specific scope claim).* Inquiry framing: *"the failure mode applies to other projects, not just this one."* Generated text examples: only this project's artifact patterns / discipline names / identifier conventions. → Scope NARROWED. M1 fires.

The four contexts span sub-domains within software-engineering (the project's natural domain). Cross-domain examples (e.g., business policy, scientific methodology) are flagged as a research frontier — the M1 check is generically defined but the deployment context is currently software-engineering.

**Prevention rule when M1 fires.** Choose one:

- (a) **Diversify examples** — replace the narrowed examples with examples spanning at least 3 distinct contexts. The candidate's text-scope is restored to match the framing-scope.
- (b) **Tag explicitly as illustration** — keep one specific example but tag it as *"ONE illustration of the class, not a scope-claim."* Add a sentence clarifying that the spec applies beyond the tagged example.
- (c) **Re-frame the inquiry** — if the generic framing was incorrect (the candidate's natural scope is the specific case), revise `_branch.md` to explicitly scope to the specific case. This is a calibration on the framing, not a defect of generation.

**"Unknown scope" is acceptable.** If the inquiry's framing is genuinely ambiguous about scope (and re-framing isn't possible mid-loop), M1's prevention can output a flag rather than forcing a binary diversify/tag/re-frame choice. The flag becomes a downstream signal for critique to probe scope-fidelity explicitly.

**Which file is affected.** `/innovate`'s skill spec, at whatever location the canonical and installed versions live for the project. In the Homegrown project, the canonical spec lives at `homegrown/innovate/references/innovate.md` (per the project's canonical-protocol-location convention); the installed version lives at `~/.claude/skills/innovate/references/innovate.md`. M1's runtime behavior is independent of where the canonical spec lives. The spec edit is doc-only.

**Risk class.** LOW. Doc-only edit; selective triggering avoids bureaucracy; "unknown scope" output is acceptable for genuinely-ambiguous cases.

**Expected benefit.** Catches loop-stage scope-leakage at the failure's natural origin stage (immediately after innovate's concrete-text generation). Generic application: works for any inquiry running inside any project context when the inquiry's framing claims generic scope. Cumulative cost savings: avoids correction chains like the one from `2026-05-14_12-45` to `2026-05-14_13-08` to this finding, where scope-leakage in a maintenance candidate's spec text required multiple iterations to diagnose and correct.

**Evaluation gate (with two-reader divergence monitoring per critique R1).** Deploy M1; observe 3 future MVL+ inquiries where the framing claims a generic scope and innovation produces concrete spec text. For each:

1. Does M1 fire correctly (selective triggering on generic-framed; doesn't fire on specific-scoped)?
2. Does M1 catch scope narrowing when it occurs?
3. Does the prevention rule produce diversified, tagged, or re-framed output?
4. Does the spec text passing M1 actually exhibit text-scope matching the framing-scope?
5. Two-reader divergence rate on borderline cases (track but do not gate on this).

If 3 of 4 (excluding the two-reader divergence rate) pass on 2 of 3 inquiries → M1 confirmed. If fewer → revisit trigger criterion or check phrasing.

**Branch experiment Y/N.** NO — the edit is small enough to deploy directly.

#### Deferred: M2 — `/td-critique` Phase 0 scope-fidelity-to-framing dimension

**What would change.** Add a scope-fidelity-to-framing dimension to `/td-critique`'s Phase 0 default-dimension list when the candidate set is a concept, spec, rule, or design that the inquiry framed at a generic scope. The dimension's role: probe scope-fidelity at the adversarial-testing stage as defense-in-depth against M1 misses.

**Which file.** `/td-critique`'s skill spec (canonical at `homegrown/td-critique/references/td-critique.md`; installed at `~/.claude/skills/td-critique/references/td-critique.md`).

**Risk class.** LOW (doc-only).

**Expected benefit.** Defense-in-depth: catches loop-stage scope-leakage at the adversarial-testing stage if M1's runtime check at innovate-Phase-3 misses.

**Evaluation gate.** Revival trigger: if M1 fails to catch a loop-stage scope-leakage case in 3 future MVL+ inquiries with generically-framed inquiries.

**Branch experiment Y/N.** NO.

**Status.** DEFERRED until M1's calibration trigger fires.

#### L1-vs-M1 distinction (PARALLEL, not replacing)

L1 (from `2026-05-14_13-08/finding.md`) is preserved for what it actually catches. M1 is PARALLEL to L1 — addresses a different failure mode at a different stage. Neither subsumes the other.

| Dimension | L1 (preserved from `2026-05-14_13-08`) | M1 (this finding) |
|---|---|---|
| **Failure mode addressed** | Framing-time canonicalization (Phantom Canon): artifact-treated-as-canon-without-check at `_branch.md` framing | Loop-stage scope-leakage: candidate's spec text scope NARROWED from generic-as-framed during innovation's concrete-text generation |
| **Stage where check fires** | `/MVL+` root-NEW path, BEFORE `_branch.md` is written | `/innovate` Phase 3 (Test), DURING the loop, immediately after concrete-text generation |
| **Trigger condition** | Selective: fires when `_branch.md` Question or Goal references an artifact whose canon-status is non-obvious | Selective: fires when the inquiry's framing claims a generic scope and innovation generates concrete spec text |
| **Check phrasing** | *"What is the canon-status of `<artifact>` for the question being asked?"* | *"Does the candidate's spec text retain the SCOPE that the inquiry's framing claimed, or has it NARROWED to specific examples drawn from immediately-available context?"* |
| **What "unknown" means** | Status not determined; proceed with caveat | Scope ambiguity; flag for downstream probe |
| **Relationship** | PARALLEL — both stand, addressing different failure modes at different stages | PARALLEL — both stand, addressing different failure modes at different stages |

L1 prevents framing-time canonicalization; M1 prevents loop-stage scope-leakage. Together they form a defense across two stages of the inquiry pipeline.

### 5. Diagnostic Verdict

**Overall:** ACTIONABLE (CORRECTS-flavored on `2026-05-14_13-08`).

- **Best-supported diagnosis.** H1 HIGH — innovation's concrete-text generation defaults to available-examples bias when the inquiry's framing claims a generic scope but the loop runs inside a specific project. Five-file linguistic trace across the `2026-05-14_12-45` archived discipline outputs plus the user's structural correction converge.

- **Strongest maintenance candidate.** M1 — `/innovate` Phase 3 scope-fidelity-to-framing test, with concrete trigger (selective on generic-framed), check phrasing, prevention rule (diversify / tag / re-frame), and evaluation gate (3 future inquiries). PARALLEL to L1 (preserved from `2026-05-14_13-08` for what L1 actually catches). Risk LOW; project-agnostic.

- **Main uncertainty.** Whether M1 alone catches all loop-stage scope-leakage cases or whether M2 (defense-in-depth at `/td-critique` Phase 0) is needed. Calibration over 3 future MVL+ inquiries will resolve.

- **Recommended next step.** Apply M1 to `/innovate`'s skill spec at both canonical and installed locations. Preserve L1 PARALLEL from `2026-05-14_13-08`. Preserve this finding as the precedent for *"spec eats its own dog food at mechanism level, not just text level."* Monitor 3 future MVL+ inquiries; revisit M2 deferral if M1 doesn't fire correctly.

### 6. Recursive Demonstration: Correction of the prior finding's framing

The prior finding (`2026-05-14_13-08` section 6) framed the L1 over-specification as *"Phantom Canon at meta-meta-level / a concrete instance of lesson-introduces-its-own-trap firing at meta-meta-level."* This section records that the framing is structurally mis-attributed. The L1 over-specification is a different failure mode at a different stage.

**Three-test result on the prior framing.**

Applying the strengthened diagnostic three-test (from `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`) to the prior framing:

- **Claim-truth test.** Is the prior framing true? **NO.** Phantom Canon's mechanism is artifact-treated-as-canon-without-check at framing-time (when `_branch.md` is being composed). The L1 over-specification's mechanism is concrete-text-generation defaulting to available-examples at innovation-stage (after `_branch.md` is composed, during the loop pipeline). Different mechanisms.

- **Level-coherence test.** Is the prior framing at the right level? **NO.** Phantom Canon operates at the framing-time layer. The L1 over-specification operates at the innovation-stage layer. Putting both at "meta-meta-level" conflates two distinct layers of the inquiry pipeline.

- **External-citation test.** Could the prior framing be cited as authoritative for catching loop-stage scope-leakage in another inquiry? **NO.** The prior framing's mechanism (artifact-canon-check at framing-time) cannot catch a failure that enters at innovation-stage. Citing it would propagate the misattribution.

Three NOs → CORRECTS verdict warranted on the prior framing.

**Structural distinction between the two failure modes.**

| Dimension | Phantom Canon | Loop-stage scope-leakage |
|---|---|---|
| **What is treated wrongly** | An artifact's canon-status is unchecked | A spec text's scope is narrowed |
| **Stage of entry** | Framing time (`_branch.md` write) | Innovation-stage (concrete-text generation) |
| **Mechanism** | Implicit canonicalization | Available-examples bias |
| **Catch mechanism** | L1 pre-step at `/MVL+` root-NEW (before `_branch.md`) | M1 test at `/innovate` Phase 3 (after concrete-text generation) |
| **Pattern-family member** | Third member of meta-conditions-on-verification | Fourth member of meta-conditions-on-verification |

**What stands from the prior Recursive Demonstration.**

- The fact that the L1 spec had a real problem stands. The prior finding's discovery of the over-specification was real. What is corrected is the CATEGORY ATTRIBUTION of that problem.
- The general insight that *"even careful diagnostics can exhibit a failure mode they themselves diagnose"* stands. This insight motivated the spec-eats-its-own-dog-food architectural pattern. What is corrected is the layer at which the pattern was applied (text-level only — corrected here to add mechanism-level via M1).
- The dimensional-CORRECTS approach as method stands. This finding inherits and applies the same method to the prior finding's Recursive Demonstration framing.

**What is corrected.**

- The category attribution. Phantom Canon at meta-meta-level → loop-stage scope-leakage at innovation-stage (a distinct failure mode).
- The family-extension claim. "Second instance of lesson-introduces-its-own-trap" → fourth sister member. See section 7.
- The Layer 3 self-reference's claim of comprehensive scope. Text-level passes; mechanism-level needed at runtime (covered by M1). See section 8.

**Why this gets its own top-level section.** The prior finding's Recursive Demonstration was its own top-level section. The correction has equal structural significance — failing to give it parallel visibility would bury the correction inside the Reasoning section. The CORRECTS framing requires this section to be visible.

**What this teaches.** A finding that names a failure mode AND proposes a maintenance candidate AND verifies the candidate's spec text against the failure mode's check must verify at EVERY layer the check claims to operate on — not just the text-level layer. The spec-eats-its-own-dog-food pattern needs multi-layer application: if the check claims to operate at level X, the self-application must verify at level X. Text-level alone is necessary but not sufficient when the check's purpose includes mechanism-level appropriateness.

### 7. Pattern-family positioning corrected — fourth member

The "meta-conditions on verification" family naming (originally from `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md` and `2026-05-14_12-45/finding.md`) is preserved. The family captures patterns about CONDITIONS that affect the verification process itself rather than the verification's content.

This finding corrects the prior `2026-05-14_13-08` family-extension claim. The prior added the L1 over-specification as *"a second instance of lesson-introduces-its-own-trap firing at meta-meta-level."* Section 6 above establishes that the L1 over-specification is NOT a second instance of lesson-introduces-its-own-trap (different mechanism; different stage). It is a distinct fourth member of the family.

**Corrected family (four members).**

1. **Lesson-introduces-its-own-trap** (from `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`).
   - Mechanism: vocabulary-introduction creates a vector for the failure mode the lesson names.
   - Stage: conversational-introduction layer.
   - Prevention: pair every new meta-lesson vocabulary with an obligatory diagnostic check before its first application.
   - Instances: 1 observed.

2. **Framing-load-bearing** (from `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md`).
   - Mechanism: same hypothesis produces different verdicts under different framings (scope, referent, granularity).
   - Stage: verification-framing layer.
   - Prevention: explicit framing-clarification before verification.
   - Instances: 1 observed.

3. **Phantom Canon** (named in `2026-05-14_12-45/finding.md`; L1 text corrected in `2026-05-14_13-08/finding.md`).
   - Mechanism: artifact-treated-as-canon-without-check.
   - Stage: framing-time layer.
   - Prevention: L1 pre-step at `/MVL+` root-NEW path.
   - Instances: 1 observed.

4. **Loop-stage scope-leakage** (this finding).
   - Mechanism: concrete-text-generation defaults to immediately-available examples when inquiry-framing claims generic scope.
   - Stage: innovation-stage layer.
   - Prevention: M1 scope-fidelity test at `/innovate` Phase 3.
   - Instances: 1 observed.

**Retraction.** The prior `2026-05-14_13-08` claim that *"the recursive demonstration provides a second instance of lesson-introduces-its-own-trap, bringing that sub-member's instance count to two"* is retracted. The L1 over-specification is one instance of a sister pattern (loop-stage scope-leakage), not a second instance of an existing member.

**Calibration.** The family remains EMERGING, not confirmed. Pattern-confirmation requires more cases. The new naming (fourth member) is calibration-state thin — one observed instance of loop-stage scope-leakage.

- **Pattern-confirmation trigger.** If 3 or more additional failure modes share the meta-conditions-on-verification feature → family-naming earns confirmation.
- **Sub-pattern instance trigger.** If 2 or more additional instances of any current member surface in future inquiries → that member's evidence base strengthens.
- **Pattern-revision trigger.** If a future named pattern doesn't fit the family cleanly → family may need decomposition.

**Speculative fifth member (flagged for tracking, not named here).** The pattern of *"the diagnostic's own maintenance candidate exhibits the failure mode it diagnoses"* — which BOTH `2026-05-14_12-45` AND `2026-05-14_13-08` exhibited at different layers — might become a meta-level pattern worth naming if it recurs in a third inquiry. Provisional name candidate: "self-application incompleteness." Flagged for future tracking; not named on the basis of two instances in the same project topic-chain.

### 8. Self-reference acknowledgment — three layers (text + mechanism + evidence-calibration)

This finding introduces M1 (a scope-fidelity-to-framing test at `/innovate` Phase 3). The finding's own outputs must pass M1's check at every layer M1 claims to operate on. Applying M1 to this finding's own outputs:

#### Layer A — Text-level scope-fidelity

| This finding's output | Inquiry's generic scope claim | Text-level check |
|---|---|---|
| Failure-mode name "loop-stage scope-leakage" + mechanism "available-examples bias" | Generic failure mode applicable to any project running an MVL+ pipeline inside a project context | PASS — names use generic phrasing |
| M1 description (trigger + check + prevention) | Generic test applicable to any inquiry-framing with a generic-scope claim | PASS — uses "candidate's spec text" + "inquiry's framing" + "immediately-available context" (generic terms) |
| M1's diversified examples (4 contexts) | Examples spanning multiple contexts, not narrowed to this project | PASS — four distinct contexts within software-engineering; the discipline-rule case is explicitly tagged as *"one illustration from one project context, not a project-specific scope claim"* |
| M2 description (scope-fidelity-to-framing dimension at `/td-critique` Phase 0) | Generic dimension applicable to any `/td-critique` invocation on a generic-framed candidate | PASS — discipline name `/td-critique` is project-vocabulary but the referent is generic |
| Pattern-family corrected positioning (section 7) | Four distinct sister members of a generic family | PASS — family naming uses generic mechanism descriptions; no project-specific scope claim on the family itself |
| Evidence framing (`2026-05-14_12-45` archived files cited as illustration) | One concrete instance of a generic pattern | PASS — files explicitly tagged as ONE illustration of the generic pattern |

All outputs pass text-level scope-fidelity.

#### Layer B — Mechanism-level appropriateness (the addition over the prior's text-only Layer 3)

| Maintenance candidate | Failure mode addressed | Stage of failure | Mechanism's stage | Mechanism-stage match? |
|---|---|---|---|---|
| M1 (`/innovate` Phase 3 scope-fidelity test) | Loop-stage scope-leakage | `/innovate` Phase 2 (concrete-text generation) | `/innovate` Phase 3 (immediately after Phase 2) | YES — adjacent stage; appropriate |
| M2 (`/td-critique` Phase 0 scope-fidelity dimension) | Loop-stage scope-leakage (defense-in-depth at compounding stage) | `/td-critique` Phase 2 (adversarial-testing without scope-fidelity probe) | `/td-critique` Phase 0 (dimension construction) | YES — upstream of failure stage within the same discipline; appropriate as defense-in-depth |

Both maintenance candidates have mechanism-stage match.

This is the addition over `2026-05-14_13-08` Layer 3 self-reference, which was text-level only. The prior's L1 passed text-level scope-fidelity but did NOT pass mechanism-level appropriateness for the failure mode the prior was diagnosing (the L1 over-specification, which entered post-`_branch.md` while L1 fires pre-`_branch.md`). This finding's M1 passes both layers because the check was designed with mechanism-stage match as an explicit requirement.

#### Layer C — One-instance evidence calibration (honest)

The failure-mode naming ("loop-stage scope-leakage") is based on ONE concrete instance — the L1 over-specification in `2026-05-14_12-45`'s archived `innovation.md` lines 161-163. Pattern-naming from one instance is calibration-state thin.

- The name is provisional; the family-positioning is provisional; the maintenance candidate's effectiveness is provisional.
- Pattern-confirmation requires more cases. A second instance of loop-stage scope-leakage in a future MVL+ inquiry would strengthen the evidence base from one to two. Three or more instances would earn full pattern-confirmation.
- Self-reference acknowledges the one-instance limit honestly. The inquiry does not claim the failure-mode is established; it claims the failure-mode is identified in one observed case with structural reasoning and linguistic trace evidence.

**Why all three layers matter.** Layer A verifies the inquiry's outputs retain the framing-scope at the text-content layer. Layer B verifies the maintenance candidate's mechanism matches the failure stage it addresses. Layer C verifies the inquiry honestly acknowledges its evidence base. Together they form a self-application of the new check that covers both the spec-text layer the prior Layer 3 covered AND the mechanism-level layer the prior missed AND the evidence-calibration layer that is specific to one-instance pattern-naming.

---

## Next Actions

### MUST

No MUST actions. This is a diagnostic finding.

### COULD

- **What:** Apply M1 to `/innovate`'s skill spec at both canonical (`homegrown/innovate/references/innovate.md`) and installed (`~/.claude/skills/innovate/references/innovate.md`) locations.
  - **Who:** the user (or whoever maintains the `/innovate` skill spec).
  - **Gate:** condition-bound — when the user is ready to commit the M1 edit.
  - **Why:** catches loop-stage scope-leakage at the failure's natural entry stage (innovation Phase 3, immediately after concrete-text generation). Prevents future inquiries from producing scope-narrowed spec text without detection.

- **What:** Verify the corrected L1 from `2026-05-14_13-08/finding.md` continues to stand for what it catches (framing-time canonicalization) and is not affected by this finding's dimensional CORRECTS.
  - **Who:** the user (during spec-deployment review).
  - **Gate:** condition-bound — when the user reviews this finding's CORRECTS impact.
  - **Why:** prevents confusion about whether the L1 text needs revision (it does not).

- **What:** Retrospective audit of prior MVL+ inquiries for instances of loop-stage scope-leakage.
  - **Who:** spec-maintenance review session.
  - **Gate:** condition-bound — during a cumulative-quality review.
  - **Why:** the failure mode might have occurred in other inquiries; retrospective audit strengthens pattern-confirmation evidence.

### DEFERRED

- **What:** M2 — add a scope-fidelity-to-framing dimension to `/td-critique`'s Phase 0 default-dimension list.
  - **Gate:** observable revival trigger — if M1 fails to catch a loop-stage scope-leakage case in 3 future MVL+ inquiries.
  - **Why (if revived):** defense-in-depth catches loop-stage scope-leakage at the adversarial-testing stage if M1's runtime check misses.

- **What:** A mechanism-level meta-check at spec-revision time, complementing the existing text-level meta-check from `2026-05-14_13-08`.
  - **Gate:** observable revival trigger — if existing-spec major redesigns expose mechanism-level errors at spec-revision time that M1's runtime check doesn't catch.
  - **Why (if revived):** covers mechanism-level appropriateness at spec-revision time, not just at innovate-runtime.

- **What:** Pattern-confirmation for the meta-conditions-on-verification family.
  - **Gate:** observable revival trigger — 3 or more additional named patterns sharing the family feature, OR 2 or more additional instances of any current member.
  - **Why (if revived):** family-naming earns confirmation status; project vocabulary stabilizes.

---

## Reasoning

### Why CORRECTS over REFINES (dimensional CORRECTS on `2026-05-14_13-08`)

Applying the strengthened diagnostic three-test (from `2026-05-13_12-45`) to the prior finding's Recursive Demonstration framing — the claim that *"the L1 over-specification is Phantom Canon at meta-meta-level / a concrete instance of lesson-introduces-its-own-trap"*:

- **Claim-truth test.** Did the prior framing claim the L1 over-specification was Phantom Canon? YES (explicitly in section 6 of that finding). Is the claim true? NO — different mechanism (available-examples bias vs implicit canonicalization), different stage (innovation vs framing). → **NO.**
- **Level-coherence test.** Was the prior framing at the right level? NO — putting both at "meta-meta-level" conflates two distinct layers (innovation vs framing). → **NO.**
- **External-citation test.** Could the prior framing be cited as authoritative for catching loop-stage scope-leakage in another inquiry? NO — citing it would propagate the misattribution to a different failure class. → **NO.**

Three NOs → CORRECTS verdict warranted on the prior framing. The CORRECTS is dimensional, not total.

### What is preserved + why

| Element | Why preserved |
|---|---|
| L1 text (project-agnostic trigger phrasing, ambiguity threshold, diversified canon-status examples, optional project-boundary) | L1's text is sound for what L1 actually catches (framing-time canonicalization). The text-level project-agnosticism work in `2026-05-14_13-08` is correct. |
| L1's framing-time-canonicalization catch | L1 stands for what it actually catches. PARALLEL to M1. |
| Standing text-level meta-check from `2026-05-14_13-08` | Its actual scope is text-level at spec-revision time. The check is sound for what it claims. |
| `2026-05-14_12-45` H1 attribution for the original chain | H1 was correct for the original chain (`2026-05-14_00-01` → `2026-05-14_00-26`), where the `_branch.md` was actually mis-framed. |
| Phantom Canon failure-mode name and concept | The failure mode is real; only the prior finding's attribution of the L1 over-specification to it is corrected. |
| Meta-conditions-on-verification family naming | Family naming stands; this finding adds a fourth member. |

### What is corrected + why

| Element | Why corrected |
|---|---|
| Prior Recursive Demonstration framing (section 6 of `2026-05-14_13-08`) | Three NOs on the three-test; the framing is mis-attributed to a different failure class. |
| Prior family-extension instance count ("second instance of lesson-introduces-its-own-trap") | The L1 over-specification is one instance of a sister pattern (loop-stage scope-leakage), not a second instance of lesson-introduces-its-own-trap. |
| Prior Layer 3 self-reference's claim of comprehensive scope | Text-level alone is insufficient; mechanism-level needed (via M1 at innovate-runtime). |

### Why `2026-05-14_12-45` is NOT corrected

The `2026-05-14_12-45` finding's H1 attribution applied to the ORIGINAL chain, where the inquiry's `_branch.md` was actually mis-framed. For that chain:

- Claim-truth: H1 (HIGH framing-time implicit canonicalization) for the original chain → TRUE.
- Level-coherence: framing-time-canonicalization at the framing-time layer → COHERES.
- External-citation: citable as authoritative for framing-time canonicalization → YES.

Three YESes → H1 stands on its own terms for its actual scope. The misattribution emerged in `2026-05-14_13-08` when implicitly extending H1 to the L1's own over-specification. `2026-05-14_12-45` itself did not make that implicit extension.

### Honest cost-naming for 6 MVL+ in succession

This is the sixth MVL+ inquiry in succession on the related topic chain. Cumulative cost is heavy. The direct-edit-vs-full-loop guideline (extracted in `2026-05-14_13-08`'s Reasoning section) was applied to decide on running the full loop for this iteration:

| Direct-edit condition | This iteration's result | Verdict |
|---|---|---|
| Correction is text-only without diagnostic implications | NO — this iteration surfaces a structural misattribution + introduces a new failure mode | full-loop |
| No new pattern is being recognized | NO — a new failure mode (loop-stage scope-leakage) is being recognized | full-loop |
| Prior diagnostic frame is unchanged | NO — three sub-dimensions of the prior need dimensional correction | full-loop |
| Prior verdict, hypotheses, attribution all stand | NO — three sub-dimensions of the prior need dimensional correction | full-loop |

All four direct-edit conditions are NO → the full loop is warranted.

Unique outputs of this iteration (not achievable by direct edit):

1. The trace-evidence diagnosis (5-file linguistic trace localizing the over-specification's entry point to innovation.md lines 161-163 of `2026-05-14_12-45`).
2. The mechanism naming (available-examples bias as the underlying cognitive mechanism).
3. M1's concrete spec design (trigger criterion + check phrasing + prevention rule + evaluation gate + diversified examples).
4. The L1-vs-M1 PARALLEL framing (preserving L1 + adding M1 without conflict).
5. The three-test result on the prior Recursive Demonstration framing (formal CORRECTS justification).
6. The fourth-member family-positioning (with retraction of "second instance" claim).
7. The three-layer self-reference (text + mechanism + evidence-calibration) — a higher-order spec-eats-its-own-dog-food than the prior's text-only Layer 3.

Cumulative value of the sixth iteration: distinguishing two failure modes the prior conflated, placing the maintenance candidate at the failure's actual entry stage, providing concrete evidence that *"spec eats its own dog food"* requires multi-layer application. Without this iteration, the project would deploy L1 thinking it addresses both failure classes when it actually addresses only one — and the misattribution would propagate forward in any future citations of `2026-05-14_13-08`.

### What was killed in this iteration

- **Treating the L1 over-specification as Phantom Canon at meta-meta-level** (mis-attributed; different mechanism, different stage). Killed.
- **Treating the L1 over-specification as a concrete instance of lesson-introduces-its-own-trap** (mis-attributed; different mechanism). Killed.
- **Treating the new failure mode as a sub-pattern of lesson-introduces-its-own-trap** (different mechanism, different stage). Killed.
- **Adding a second meta-check at spec-revision time** (meta-check proliferation; M1 catches mechanism-level at its natural runtime stage). Killed.
- **Hybrid M1 + M2 as primary candidate** (over-commit without empirical effectiveness data; M2 deferred is the right shape per LOOP_DIAGNOSE Step 5 guardrails). Killed.
- **SUPERSEDES on `2026-05-14_13-08`** (overreach; CORRECTS is dimensional). Killed.
- **CORRECTS on `2026-05-14_12-45`** (its H1 attribution stands for the original chain's actual scope). Killed.
- **Renaming or restructuring L1** (L1's text stands as-is for what it actually catches). Killed.
- **Treating M1 as a `/MVL+`-level pre-step parallel to L1** (the failure is at innovation-stage, not framing-stage; M1's natural location is inside `/innovate`'s Phase 3). Killed.

### Contradictions reconciled

- **CORRECTS on `2026-05-14_13-08` versus PRESERVES of L1 text.** Reconciled by making the CORRECTS dimensional. The L1 text is one preserved sub-dimension; three other sub-dimensions are corrected.
- **New M1 versus L1 PARALLEL.** Reconciled by recognizing that L1 and M1 address different failure modes at different stages. Both stand without competition.
- **Standing meta-check stays text-level versus mechanism-level catch needed.** Reconciled by placing the mechanism-level catch at M1 (innovate-runtime), not at spec-revision time. Avoids meta-check proliferation while ensuring mechanism-level coverage at the natural stage.
- **Specific instance (the L1 over-specification) versus pattern-level diagnosis.** Reconciled by framing the diagnostic as pattern-level (loop-stage scope-leakage as a class) with the L1 over-specification as the ONE observed instance.

---

## Open Questions

### Monitoring

- **M1 calibration.** Across 3 future MVL+ inquiries where the framing claims a generic scope and concrete spec text is generated: does M1 fire correctly (selective triggering)? Does it catch scope narrowing when it occurs? Does the prevention rule produce diversified, tagged, or re-framed output? Does the spec text passing M1 actually retain text-scope matching framing-scope? Track two-reader divergence rate on borderline cases per critique recommendation R1.

- **L1 calibration (preserved from `2026-05-14_13-08`).** Across 3 future MVL+ inquiries referencing artifacts of ambiguous canon-status: does L1 fire correctly? Continued monitoring under the prior evaluation gate.

- **Standing text-level meta-check effectiveness (preserved from `2026-05-14_13-08`).** Does the text-level meta-check on trigger criteria get applied at future L1 revisions? Does it prevent text-level project-specific over-specification from being re-introduced?

- **Family-confirmation trajectory.** Does the meta-conditions-on-verification family accrue more patterns or instances?

### Research Frontiers

- **Whether other prior MVL+ inquiries exhibit loop-stage scope-leakage** — retrospective audit research frontier.

- **Whether the available-examples bias appears in other LLM-driven discipline pipelines beyond `/innovate`** — e.g., does `/sense-making`'s anchor-extraction default to available examples in similar ways? Does `/decompose`'s piece-naming default to available examples? Cross-discipline research frontier.

- **Whether M1 generalizes across domains beyond software-engineering** — the 4 diversified contexts in M1's spec (algorithm / protocol / documentation / discipline-rule) are all within the project's natural domain. Cross-domain applicability (business policy, scientific methodology, legal regulation) is unexplored research frontier per critique recommendation R2.

- **Whether prevention at `/innovate` Phase 2 (generation time)** would be more effective than M1's prevention at Phase 3 (test time) — Phase 2 modification is more invasive but catches earlier. Phase 3 testing is the current choice; Phase 2 modification is an unexplored alternative per critique recommendation R3.

- **Whether the spec-eats-its-own-dog-food architectural pattern needs a multi-layer canonical form** — text-level + mechanism-level + evidence-calibration-level — for all future CORRECTS findings. Methodology-design research frontier.

- **Whether the "self-application incompleteness" speculative meta-pattern** (flagged in section 7) earns naming on the basis of a third occurrence in some future inquiry. Family-extension research frontier.

### Refinement Triggers

- **If a future MVL+ inquiry exhibits loop-stage scope-leakage despite M1** — revisit M1's trigger criterion or check phrasing; consider promoting M2 from deferred to active.

- **If a second instance of loop-stage scope-leakage surfaces in a non-`/innovate` stage** — generalize M1 to apply at multiple discipline stages.

- **If existing-spec major redesigns expose mechanism-level errors at spec-revision time not caught by M1** — revisit the standing meta-check's scope; add a mechanism-level layer at spec-revision time.

- **If the family accrues 3 or more additional patterns or 2 or more additional instances of any current member** — family-confirmation earns its status; project vocabulary stabilizes.

- **If a third inquiry in this project surfaces "the diagnostic's own maintenance candidate exhibits the failure mode it diagnoses"** — promote the speculative "self-application incompleteness" pattern to a named family member.

- **If iteration #7+ becomes necessary on this topic chain** — apply the direct-edit-vs-full-loop guideline rigorously per critique recommendation R4; full-loop needs explicit justification (new failure mode? new structural correction?).

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

u said


4a. Primary: L1 — /MVL+ artifact-canon-status pre-step (CORRECTED)
What changes. Add a pre-step to /MVL+'s root-NEW path — the moment when a new inquiry is being initialized but before its _branch.md (the file that records the inquiry's question, goal, and scope-check) is written. The pre-step is SELECTIVE; it does not fire on every inquiry.

Trigger criterion (project-agnostic). The pre-step fires when the question or goal text references any artifact whose canon-status — its relationship to the user's current intent for the question being asked — is non-obvious. The trigger applies regardless of which project the artifact belongs to. It applies equally to:

artifacts in the user's current project (files, named entities, identifiers in any project's vocabulary),
artifacts in other projects the user is reasoning about or comparing to,
external references (libraries, standards, RFCs, frameworks, prior art, third-party documentation),
the user's own prior work products in any context (prior inquiries, notes, drafts, archived findings, superseded designs).



but when i check  devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/_branch.md 

i see these

(b) A named failure mode worth introducing into a discipline spec or into /MVL+'s skill spec. The failure mode should be recognizable (have a signal), preventable (have a check), and reusable (applies to other half-tried artifacts in the project, not just navigation).


so i am thinking branch md generation is not the problem.. becuase it was correct , it said this is an issue not just specific to navigation , 

but finding had this specification error ... 


so obviously the error doesnt come from branch or before branch no?
```

</details>
