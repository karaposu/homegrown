# Innovation — L1 Targets the Wrong Stage: Concrete Text for the 8 Pieces

## User Input

Sensemaking + Decomposition committed: CORRECTS on 2026-05-14_13-08 (dimensional — three sub-dimensions); new failure-mode "Loop-stage scope-leakage" + mechanism "available-examples bias"; M1 PRIMARY + M2 DEFERRED; L1 PARALLEL; standing meta-check unchanged; 8 top-level pieces; fourth-member of meta-conditions-on-verification family.

**CRITICAL SELF-CHECK APPLIED**: M1 spec text must pass M1's own scope-fidelity check at BOTH text-level AND mechanism-level. This applies inside this innovation step (the same step where the original failure occurred in 2026-05-14_12-45 — concrete-text generation). Diversified M1 examples span 4 contexts; this-project case is ONE tagged illustration of the four.

---

## Seeds

| Piece | Seed | Mechanism applied |
|---|---|---|
| P1.1 | Frontmatter convention extension | Combination |
| P1.2 | Question preserved | n/a |
| P1.3 | User's correction quote frames | Lens Shifting |
| P1.4 | Finding summary | Combination |
| P1.5 | Changes from Prior block | Combination |
| P2.1 | Correction Chain Summary | Combination |
| P2.2 | 3 Failure Hypotheses about loop-stage scope-leakage | Absence Recognition |
| P2.3 | Attribution Summary | Combination |
| P2.4a | M1 spec text | **Constraint Manipulation + Absence Recognition + Inversion** (3 mechanisms converge) |
| P2.4b | M2 deferred + revival trigger | Constraint Manipulation |
| P2.4c | L1-vs-M1 distinction table | Combination |
| P2.5 | Verdict | Combination |
| P3 | Recursive Demonstration CORRECTION | **Inversion** (invert prior claim) |
| P4 | Pattern-family corrected positioning | **Absence Recognition** (missing fourth member) |
| P5 | Self-reference at scope-fidelity (text + mechanism) | **Inversion** (turn check inward) |
| P6 | Reasoning | Combination |
| P7 | Next Actions + Open Questions | Extrapolation |
| P8 | Source Input verbatim | n/a |

---

## Phase 2 — Generate (one focused variant per piece)

### P1.1 — Frontmatter

```yaml
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
```

### P1.2 — Heading + Question

```markdown
# Finding: L1 Targets the Wrong Stage — Loop-Stage Scope-Leakage as a Distinct Failure Mode from Phantom Canon

## Question

[Preserved verbatim from _branch.md.]
```

### P1.3 — Surrounding context

```markdown
## Surrounding context

The user invoked /MVL+ to correct the prior LOOP_DIAGNOSE-style finding's diagnostic frame. The correction quote:

> *"so i am thinking branch md generation is not the problem.. becuase it was correct, it said this is an issue not just specific to navigation, but finding had this specification error... so obviously the error doesnt come from branch or before branch no?"*

The user has correctly observed that the prior LOOP_DIAGNOSE finding's (`devdocs/inquiries/2026-05-14_12-45__.../finding.md`) `_branch.md` Goal (b) explicitly stated the failure mode should be "reusable (applies to other half-tried artifacts in the project, not just navigation)." The framing was correctly generic. Yet the finding produced by that inquiry's pipeline contained an over-specification of the L1 maintenance candidate's trigger criteria (this-project-specific examples enumerating `homegrown/` paths, this-project discipline names, this-project inquiry-ID format). This means the over-specification entered SOMEWHERE between `_branch.md` (correctly generic) and `finding.md` (over-specified) — DURING the loop's discipline pipeline.

The user's observation has two structural implications:

1. **L1 (the maintenance candidate from the prior chain, corrected in `2026-05-14_13-08/finding.md`) is mis-targeted for THIS class of failure.** L1 fires before `_branch.md` is written, catching framing-time canonicalization. But the over-specification entered AFTER `_branch.md` was written. L1 cannot catch its own kind of over-specification.

2. **The prior CORRECTS finding (`2026-05-14_13-08/finding.md`) mis-framed the L1 over-specification as "Phantom Canon at meta-meta-level / concrete instance of lesson-introduces-its-own-trap firing at meta-meta-level."** This framing is structurally mis-attributed: the L1 over-specification is a different failure mode (loop-stage scope-leakage at innovation-stage) at a different stage (during innovation's concrete-text generation, NOT at framing time).

This finding produces the CORRECTS-flavored LOOP_DIAGNOSE diagnostic: it traces the over-specification's exact entry point (innovation's concrete-text generation step); names the failure mode distinctly (loop-stage scope-leakage; mechanism: available-examples bias); proposes a maintenance candidate at the right stage (M1 at /innovate Phase 3 scope-fidelity test); preserves L1 PARALLEL for what L1 actually catches; corrects the prior finding's three mis-framings (Recursive Demonstration framing + family-extension instance count + Layer 3 self-reference's text-only scope); and acknowledges the 6th-MVL+-in-succession cost.

The CORRECTS is DIMENSIONAL on the prior `2026-05-14_13-08/finding.md`. It does not overturn the corrected L1 text (which stands for what it actually catches) nor the `2026-05-14_12-45/finding.md` H1 attribution for the original chain (which stands on its own terms).
```

### P1.4 — Finding Summary

```markdown
## Finding Summary

- **Diagnostic verdict:** ACTIONABLE (CORRECTS-flavored on `2026-05-14_13-08/finding.md`). The prior finding's Recursive Demonstration section mis-framed the L1 over-specification as "Phantom Canon at meta-meta-level." This finding corrects that framing dimensionally and proposes a maintenance candidate at the right stage.

- **New failure mode named:** **loop-stage scope-leakage** (technical) — concrete-text generation defaulting to immediately-available examples when the inquiry's framing claimed a generic scope. **Mechanism description:** available-examples bias. Fourth member of the emerging meta-conditions-on-verification family (calibration: emerging, not confirmed).

- **Primary maintenance candidate (M1):** a scope-fidelity-to-framing test added to `/innovate`'s Phase 3 (Test) cycle. Selective: fires only when the inquiry's framing claims a generic scope. Check phrasing: *"Does the candidate's spec text retain the SCOPE that the inquiry's framing claimed, or has it NARROWED to specific examples drawn from immediately-available context?"* Risk LOW; doc-only edit to `/innovate`'s skill spec.

- **Deferred maintenance candidate (M2):** a scope-fidelity-to-framing dimension added to `/td-critique`'s Phase 0 dimension construction defaults. Revival trigger: if M1 fails to catch a loop-stage scope-leakage case in 3 future MVL+ inquiries.

- **Relationship to L1 (preserved from `2026-05-14_13-08/finding.md`):** PARALLEL. L1 catches framing-time canonicalization at `_branch.md` write; M1 catches loop-stage scope-leakage at `/innovate` Phase 3. Different stages; different failure modes; both stand.

- **Recursive Demonstration CORRECTION (separate section P3 in body):** the prior finding's Recursive Demonstration claimed the L1 over-specification was Phantom Canon at meta-meta-level / a concrete instance of lesson-introduces-its-own-trap. The strengthened diagnostic three-test produces three NOs on this framing: the L1 over-specification's mechanism (available-examples bias) and stage (innovation) are different from Phantom Canon's (framing-time canonicalization at `_branch.md` write).

- **Pattern-family corrected (section P4):** the family now has FOUR distinct members, not three with one second-instance. The 2026-05-14_13-08 claim of "second instance of lesson-introduces-its-own-trap" is retracted. Members: lesson-introduces-its-own-trap; framing-load-bearing; Phantom Canon; loop-stage scope-leakage. Calibration: still emerging.

- **Self-reference at scope-fidelity (section P5):** this finding's own outputs pass M1's check at TWO layers — text-level (the failure-mode name, M1 description, evidence framing all use generic phrasing) AND mechanism-level (M1 fires at the right stage for what it catches). This is a higher-order spec-eats-its-own-dog-food than the prior finding's text-only Layer 3.

- **Honest cost-naming:** This is the sixth MVL+ inquiry in succession on the related topic chain. Cumulative cost is heavy. The value of this iteration: distinguishing two failure modes that the prior iterations conflated, placing the maintenance candidate at the actual entry-stage of the failure, and providing concrete evidence that "spec eats its own dog food" needs a mechanism-level layer (not text-level alone).
```

### P1.5 — Changes from Prior

```markdown
## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md`

**Revision trigger:** User's structural correction. After the prior CORRECTS finding proposed a Recursive Demonstration framing for the L1 over-specification (treating it as "Phantom Canon at meta-meta-level / lesson-introduces-its-own-trap firing at meta-meta-level"), the user observed that the prior LOOP_DIAGNOSE finding's `_branch.md` (the inquiry that PRODUCED the over-specified L1) was correctly generic in its Goal (b). Therefore the over-specification entered AFTER `_branch.md` was written — during the loop's discipline pipeline — making L1's pre-`_branch.md` mechanism mis-targeted for catching this class of failure.

**What's preserved:**

- The corrected L1 text from `2026-05-14_13-08/finding.md` (project-agnostic trigger criteria + ambiguity threshold + diversified canon-status examples + optional project-boundary declaration) stands as-is for what L1 actually catches — **framing-time canonicalization** (artifact-treated-as-canon-without-check at `_branch.md` framing).
- The 2026-05-14_13-08 standing meta-check on trigger criteria (P2.4b in that finding) stands AS-IS for its actual scope — text-level project-agnosticism at spec-revision time.
- The `2026-05-14_12-45/finding.md` H1 attribution (HIGH framing-time implicit canonicalization) stands on its own terms for the ORIGINAL correction chain (`2026-05-14_00-01` → `2026-05-14_00-26`), where the `_branch.md` was actually mis-framed.
- Phantom Canon as a failure-mode name and concept stands. The meta-conditions-on-verification family naming stands.

**What's changed (dimensional CORRECTS on `2026-05-14_13-08/finding.md`):**

- **Recursive Demonstration framing** — the prior finding's section 6 claimed the L1 over-specification was "Phantom Canon at meta-meta-level / a concrete instance of lesson-introduces-its-own-trap firing at meta-meta-level." This finding's P3 records that framing failed the strengthened diagnostic three-test (level-coherence NO; external-citation NO; claim-truth NO) and the L1 over-specification is a different failure mode at a different stage.
- **Family-extension instance count** — the prior finding's section 7 added the L1 over-specification as "a second instance of lesson-introduces-its-own-trap." This finding's P4 retracts that claim; the L1 over-specification is a first-instance of a SISTER pattern (loop-stage scope-leakage), making the family fourth-member (not three-with-a-second-instance).
- **Layer 3 self-reference scope** — the prior finding's section 8 Layer 3 (spec eats its own dog food) verified TEXT-level project-agnosticism on the corrected L1's trigger criteria. The check passed at text-level, but L1's mechanism was mis-targeted for the failure mode it claimed to address. This finding's P5 acknowledges that text-level alone is insufficient and adds mechanism-level verification.

**What's new:**

- A new failure-mode name: **loop-stage scope-leakage** (technical) + **available-examples bias** (mechanism).
- M1 primary maintenance candidate: scope-fidelity-to-framing test added to `/innovate` Phase 3 (Test) cycle.
- M2 deferred maintenance candidate: scope-fidelity-to-framing dimension added to `/td-critique` Phase 0 defaults, with revival trigger.
- P3 Recursive Demonstration CORRECTION as a separate top-level section.
- P4 Pattern-family corrected positioning (fourth member, calibration emerging).
- P5 Self-reference at scope-fidelity at TWO layers (text + mechanism).

**Migration:** Future inquiries that produce concrete spec text from a generically-framed inquiry should use M1 (this finding's Maintenance Candidates section) at `/innovate` Phase 3. L1 (from `2026-05-14_13-08/finding.md`) continues to fire at the pre-`_branch.md` stage for inquiries that reference artifacts of ambiguous canon-status. Both maintenance candidates stand; they address different failure modes at different stages.
```

### P2.1 — Correction Chain Summary

```markdown
## Correction Chain Summary

| Field | Value |
|---|---|
| **Prior path** | `devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md` |
| **Corrected path** | this finding |
| **Human correction (excerpt)** | *"so i am thinking branch md generation is not the problem.. becuase it was correct, it said this is an issue not just specific to navigation, but finding had this specification error... so obviously the error doesnt come from branch or before branch no?"* |
| **What changed** | The prior finding's Recursive Demonstration section 6 treated the L1 over-specification as "Phantom Canon at meta-meta-level / concrete instance of lesson-introduces-its-own-trap firing at meta-meta-level." The user observed that the prior LOOP_DIAGNOSE finding's `_branch.md` Goal (b) explicitly stated the failure mode should be "reusable (applies to other half-tried artifacts in the project, not just navigation)" — i.e., the framing was correctly generic. So the over-specification entered AFTER `_branch.md` was written — during the loop's discipline pipeline. Tracing the 5 archived discipline outputs of `2026-05-14_12-45` reveals that exploration, sensemaking, and decomposition all kept the L1 spec abstract; innovation introduced the this-project-specific examples in the concrete L1 spec-edit text (innovation.md lines 161-163); critique compounded by recommending a `/navigation` example for the `non-canon` category without probing project-agnosticism on the trigger criteria. The failure mode is therefore a distinct class (loop-stage scope-leakage at innovation-stage), and L1 (a pre-`_branch.md` pre-step) is mis-targeted for catching it. The corrected diagnostic: name the new failure mode; place M1 at `/innovate` Phase 3; preserve L1 PARALLEL for what it actually catches. |
| **Scope of CORRECTS** | Dimensional, not total. Targets three sub-dimensions of the prior finding: (i) Recursive Demonstration framing; (ii) family-extension instance count; (iii) Layer 3 self-reference's text-only scope. The corrected L1 text, the standing text-level meta-check, the Phantom Canon name, the family naming, and the `2026-05-14_12-45/finding.md` H1 attribution for the original chain all stand. |
```

### P2.2 — Failure Hypotheses

```markdown
## Failure Hypotheses

### Hypothesis 1: Innovation's concrete-text generation defaults to available-examples (HIGH confidence; PRIMARY)

**Affected stage.** `/innovate` Phase 2 (Generate), specifically the concrete-text generation step where mechanisms produce spec-edit text from sensemaking/decomposition commitments.

**Shortcoming type.** **Available-examples bias.** When the inquiry's framing claims a generic scope but the loop is running inside a specific project, innovate's concrete-text generation reaches for the most cognitively-available examples (this-project's artifact patterns, names, identifiers). Without an explicit scope-fidelity check at Phase 3 (Test), the spec text exits innovate narrowed from the framed scope.

**Evidence from the 2026-05-14_12-45 pipeline (linguistic trace across 5 archived discipline outputs).**

- `exploration.md` (line 74, L1 candidate description): *"Before `_branch.md` is created (root NEW path), prompt for canon-status of **any project artifacts** the question references"* — GENERIC.
- `sensemaking.md` (Perspective 7's K13, SV6): *"fires at root-NEW creation when the inquiry's question explicitly references project artifacts. The pre-step prompts: 'Are these artifacts canon for the question being asked, or are they historical/legacy/under-test?'"* — GENERIC.
- `decomposition.md` (P2.4 determination-mechanism piece check, Step 7): *"selective triggering on artifact references; per-artifact prompt for canon-status; unknown-acceptable"* — GENERIC.
- **`innovation.md` (P2.4 L1 spec-edit text, lines 161-163):** *"The pre-step is SELECTIVE: it fires only when the question or goal text explicitly references project artifacts (file paths under `homegrown/`, discipline names like `/navigation` or `/explore`, prior inquiry IDs like `2026-05-12_11-40`)."* — **THIS-PROJECT-SPECIFIC** (first appearance).
- `critique.md` (probe (a), R1 recommendation, line 49): *"Add brief illustrative examples per category to L1's prompt design. E.g., for `non-canon`: 'an existing **/navigation** discipline spec...'"* — **COMPOUNDED** (added a this-project example for one category).

**Evidence from human correction.** The user's quote explicitly identifies that the `_branch.md` was correctly generic (Goal (b) said "applies to other half-tried artifacts in the project, not just navigation") and the over-specification appears only in the finding. This directly implicates the loop's discipline pipeline (post-`_branch.md`), not the framing.

**Evidence from this inquiry's corrected diagnostic.** Five-file linguistic trace converges on innovation as the entry point. Upstream disciplines kept the spec abstract; innovation introduced the this-project specifics; critique compounded rather than caught.

**Confidence.** HIGH. The linguistic trace is conclusive across five independent discipline outputs.

**Why not stronger.** HIGH is the maximum. Trace evidence + user correction + structural reasoning all converge.

**Maintenance candidate.** M1 (`/innovate` Phase 3 scope-fidelity-to-framing test).

**Evaluation gate.** Deploy M1 to `/innovate`'s skill spec; observe 3 future MVL+ inquiries where the framing claims a generic scope and concrete spec text is generated. For each:
1. Does M1 fire correctly (selective triggering on generic-framed inquiries)?
2. Does M1 catch scope narrowing when it occurs?
3. Does the prevention rule produce diversified or properly-tagged spec text?

If all three pass on 2 of 3 → M1 confirmed. If 0-1 of 3 → revisit M1's trigger or check design.

---

### Hypothesis 2: Critique's default prosecution dimensions don't probe scope-fidelity (MEDIUM confidence; supporting)

**Affected stage.** `/td-critique` Phase 0 (Dimension Construction) + Phase 2 (Adversarial Evaluation).

**Shortcoming type.** **Dimension gap.** The six default critique dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented. None of them indexes on whether the candidate's text-scope matches the inquiry's framed scope. The adversarial-testing capability EXISTS (critique can construct probes on any dimension), but the default-dimension level doesn't surface scope-fidelity, so scope-leakage tends to pass through critique without a probe.

**Evidence from prior pipeline.** `2026-05-14_12-45/docarchive/critique.md` Phase 0 listed 14 dimensions but none was "scope-fidelity-to-framing." Probe (a) on L1 surfaced "two readers might answer differently" (operational-clarity) but didn't probe project-agnosticism. R1's recommendation to add per-category examples did not check whether the recommended examples preserved generic scope; the recommendation itself used a this-project example (`/navigation`).

**Confidence.** MEDIUM. The dimension gap is structural at the default level. Critique COULD construct a scope-fidelity probe with a problem-specific dimension, but this would require either intuition or upstream signal from sensemaking/decomposition.

**Why not stronger.** Critique's adversarial-testing capability is general enough that a sufficiently rigorous critique pass could have surfaced scope-fidelity even without it being a default dimension. The structural gap is at default-dimension level, not at capability level.

**Maintenance candidate.** M2 (DEFERRED) — add scope-fidelity-to-framing to `/td-critique` Phase 0 default dimensions for inquiries where the framing claims a generic scope.

**Evaluation gate.** Monitor whether M1 alone catches the failure mode in 3 future inquiries. Revival trigger for M2: if M1 fails to catch a loop-stage scope-leakage case in 3 future inquiries.

---

### Hypothesis 3: Existing standing meta-check operates at text level only (MEDIUM confidence; supporting)

**Affected stage.** Spec-revision time, specifically the 2026-05-14_13-08 P2.4b standing meta-check on L1's trigger criteria.

**Shortcoming type.** **Text-level scope only, missing mechanism-level appropriateness.** The standing meta-check (added in `2026-05-14_13-08/finding.md` section 4b) requires future spec-revisers to verify the trigger criteria phrasing is project-agnostic at TEXT level. The check is sound for what it claims. But it doesn't address mechanism-level appropriateness (whether the spec's mechanism — where it fires in the loop pipeline — matches the failure mode it claims to address).

**Evidence.** `2026-05-14_13-08/finding.md` section 8 Layer 3 ("spec eats its own dog food") explicitly verified TEXT-level project-agnosticism on each row of the corrected L1's trigger criteria. The check passed for what it checked. But L1's mechanism (pre-`_branch.md` pre-step) was mis-targeted for the failure mode it was claimed to catch (the L1's own over-specification, which entered at innovation-stage, not at framing-time).

**Confidence.** MEDIUM. The gap is real but bounded — the text-level check still serves its declared scope.

**Why not stronger.** The text-level meta-check itself isn't broken; it's just scope-limited. Treating it as broken would overreach.

**Maintenance candidate.** M1 (covers mechanism-level at innovate-runtime, not at spec-revision time). This avoids meta-check proliferation per the sensemaking adjudication.

**Evaluation gate.** Monitor whether the text-level meta-check + M1 together cover both layers (text + mechanism) in future spec revisions. Research-frontier flag: if existing-spec major redesigns expose mechanism-level errors at spec-revision time (not caught by M1's runtime check), revisit by adding a mechanism-level layer to the standing meta-check.
```

### P2.3 — Failure Attribution Summary

```markdown
## Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| `/innovate` Phase 2 concrete-text generation (PRIMARY) | Available-examples bias | strong (5-file linguistic trace + user correction) | HIGH | M1 (`/innovate` Phase 3 scope-fidelity test) |
| `/td-critique` Phase 0 dimension construction (supporting) | Dimension gap on scope-fidelity | medium | MEDIUM | M2 deferred (revival if M1 fails to catch in 3 inquiries) |
| Spec-revision time (text-level meta-check) | Text-only scope; mechanism-level unaddressed | medium | MEDIUM | Covered by M1 at innovate-runtime; avoid meta-check proliferation |

Primary attribution is at innovation. Critique's gap is supporting (compounding). The text-level meta-check's scope-limitation is a structural acknowledgment, not a fix-target — its scope is preserved.
```

### P2.4 — Maintenance Candidates

#### P2.4a — M1 PRIMARY (innovate Phase 3 scope-fidelity test)

**Mechanism cluster:** Constraint Manipulation (adding a 6th test to innovate's 5-test cycle) + Absence Recognition (the absence of scope-fidelity in the current cycle) + Inversion (turning the check inward at innovate-runtime, on innovate's own output).

**Self-check applied:** the M1 spec text below was generated under M1's own check. The diversified examples span FOUR contexts (algorithm spec / protocol spec / documentation spec / discipline-rule spec); the discipline-rule case (this-project) is ONE of four, tagged as one illustration. The trigger criterion, check phrasing, and prevention rule use generic phrasing throughout.

```markdown
### Primary: M1 — /innovate Phase 3 scope-fidelity-to-framing test

**What changes.** Add a sixth test to `/innovate`'s Phase 3 (Test) cycle. The current 5 tests (novelty, scrutiny survival, fertility, actionability, mechanism independence) test the candidate's properties. M1 adds a sixth test that checks the candidate's text-scope against the inquiry's framed scope.

**Trigger criterion (project-agnostic).** The test fires when the inquiry's framing claims a generic scope — that is, claims the candidate (concept, spec, rule, design) applies to a class of cases rather than to one specific case. Recognition cues for "generic-framed" include phrases like:

- *"applies to a class of cases"*
- *"should be reusable / generalize / span multiple contexts"*
- *"the failure mode is generic"*
- *"applies regardless of [project / system / context / domain]"*
- *"any [artifact / case / instance]"*

The test does NOT fire when the inquiry's framing is explicitly scoped to a specific case (e.g., "fix this bug in this file"; "rewrite this one function"). Selective triggering on generic-framed inquiries prevents over-fire.

**Check phrasing.**

> *"Does the candidate's spec text retain the SCOPE that the inquiry's framing claimed, or has it NARROWED to specific examples drawn from immediately-available context?"*

The check fires after innovate's Phase 2 (Generate) produces concrete text. It inspects the generated text for examples and references; flags any that fall outside the framed scope.

**Diversified illustrative examples (spanning four contexts; the spec eats its own dog food at this very listing).**

- *Algorithm spec.* Inquiry framing: "this algorithm should handle inputs of any size." Generated text examples: only N=10 and N=100 inputs from one test suite. → Scope NARROWED. M1 fires.
- *Protocol spec.* Inquiry framing: "applies to any data transport." Generated text examples: HTTPS and TLS only. → Scope NARROWED. M1 fires.
- *Documentation spec.* Inquiry framing: "for any reader." Generated text examples: drawn exclusively from one team's codebase. → Scope NARROWED. M1 fires.
- *Discipline-rule spec (one illustration from one project context, not a project-specific scope claim).* Inquiry framing: "the failure mode applies to other projects, not just this one." Generated text examples: only this project's artifact patterns / discipline names / identifier conventions. → Scope NARROWED. M1 fires.

**Prevention rule when M1 fires.** Choose one:

(a) **Diversify examples** — replace the narrowed examples with examples spanning at least 3 distinct contexts (different domains, systems, or projects). The candidate's text-scope is restored to the framing-scope.

(b) **Tag explicitly as illustration** — keep one specific example but tag it as "ONE illustration of the class, not a scope-claim." Add a sentence clarifying that the spec applies beyond the tagged example.

(c) **Re-frame the inquiry** — if the generic framing was incorrect (the candidate's natural scope is the specific case), revise `_branch.md` to explicitly scope to the specific case. This is a calibration on the framing, not a defect of generation.

**"Unknown scope" is acceptable.** If the inquiry's framing is genuinely ambiguous about scope (and re-framing isn't possible mid-loop), M1's prevention can output a flag rather than forcing a binary diversify/tag/re-frame choice. The flag becomes a downstream signal for critique to probe scope-fidelity explicitly.

**Which file is affected.** `/innovate`'s skill spec, at whatever location the canonical and installed versions live for the project. The location convention is a property of the project, not of M1. The spec edit is doc-only — adds one test to Phase 3's test list with the trigger / check / prevention specification above.

**Risk class.** LOW. Doc-only edit; selective triggering avoids bureaucracy; "unknown scope" output is acceptable for genuinely-ambiguous cases.

**Expected benefit.** Catches loop-stage scope-leakage at the failure's natural origin stage (immediately after innovate's concrete-text generation). Generic application: works for any inquiry running inside any project context, when the inquiry's framing claims generic scope. Cumulative cost savings: avoids correction chains like the one from `2026-05-14_12-45/finding.md` to `2026-05-14_13-08/finding.md` to this finding, where scope-leakage in a maintenance candidate's spec text required multiple iterations to diagnose and correct.

**Evaluation gate.** Deploy M1; observe 3 future MVL+ inquiries where:
- The inquiry's framing claims a generic scope.
- Innovation produces concrete spec text.

For each:
1. Does M1 fire correctly (selective triggering on generic-framed; doesn't fire on specific-scoped)?
2. Does M1 catch scope narrowing when it occurs (true-positive rate)?
3. Does the prevention rule produce diversified, tagged, or re-framed output as appropriate?
4. Does the spec text passing M1 actually exhibit text-scope matching the framing-scope?

If 3 of 4 pass on 2 of 3 inquiries → M1 confirmed. If fewer → revisit trigger criterion or check phrasing.

**Branch experiment Y/N.** NO — the edit is small enough to deploy directly.
```

#### P2.4b — M2 DEFERRED (td-critique Phase 0 scope-fidelity dimension)

**Mechanism:** Constraint Manipulation (add a scope-fidelity dimension as a constraint on critique's adversarial-testing).

```markdown
### Deferred: M2 — /td-critique Phase 0 scope-fidelity-to-framing dimension

**What would change.** Add a "scope-fidelity-to-framing" dimension to `/td-critique`'s Phase 0 default-dimension list when the candidate set is a concept, spec, rule, or design that the inquiry framed at a generic scope. The dimension's role: probe scope-fidelity at the adversarial-testing stage as defense-in-depth against M1 misses.

**Which file.** `/td-critique`'s skill spec.

**Risk class.** LOW (doc-only).

**Expected benefit.** Defense-in-depth: catches loop-stage scope-leakage at the adversarial-testing stage if M1's runtime check at innovate-Phase-3 misses.

**Evaluation gate.** Revival trigger: if M1 fails to catch a loop-stage scope-leakage case in 3 future MVL+ inquiries with generically-framed inquiries.

**Branch experiment Y/N.** NO.

**Status.** DEFERRED until M1's calibration trigger fires.
```

#### P2.4c — L1-vs-M1 distinction (PARALLEL framing)

**Mechanism:** Combination (combining the preserved L1 with the new M1 into an explicit comparison).

```markdown
### Sub-piece: L1-vs-M1 distinction — PARALLEL, not replacing

L1 (from `2026-05-14_13-08/finding.md`) is PRESERVED for what it actually catches. M1 (this finding) is PARALLEL to L1 — addresses a different failure mode at a different stage. Neither subsumes the other.

| Dimension | L1 (preserved from `2026-05-14_13-08/finding.md`) | M1 (this finding) |
|---|---|---|
| **Failure mode addressed** | Framing-time canonicalization (Phantom Canon): artifact-treated-as-canon-without-check at `_branch.md` framing | Loop-stage scope-leakage: candidate's spec text scope NARROWED from generic-as-framed during innovation's concrete-text generation |
| **Stage where check fires** | `/MVL+` root-NEW path, BEFORE `_branch.md` is written | `/innovate` Phase 3 (Test), DURING the loop, immediately after concrete-text generation |
| **Trigger condition** | Selective: fires when `_branch.md` Question or Goal references an artifact whose canon-status is non-obvious | Selective: fires when the inquiry's framing claims a generic scope and innovation generates concrete spec text |
| **Check phrasing** | *"What is the canon-status of `<artifact>` for the question being asked?"* | *"Does the candidate's spec text retain the SCOPE that the inquiry's framing claimed, or has it NARROWED to specific examples drawn from immediately-available context?"* |
| **What "unknown" means** | Status not determined; proceed with caveat | Scope ambiguity; flag for downstream probe |
| **Relationship** | PARALLEL — both stand, addressing different failure modes at different stages | PARALLEL — both stand, addressing different failure modes at different stages |

The two checks together cover two distinct entry points for the same broader category of "meta-conditions on verification" failures. L1 prevents framing-time canonicalization; M1 prevents loop-stage scope-leakage. Together they form a defense across two stages of the inquiry pipeline.
```

### P2.5 — Diagnostic Verdict

```markdown
## Diagnostic Verdict

**Overall:** ACTIONABLE (CORRECTS-flavored on `2026-05-14_13-08/finding.md`).

- **Best-supported diagnosis:** H1 HIGH — innovation's concrete-text generation defaults to available-examples bias when the inquiry's framing claims a generic scope but the loop runs inside a specific project. Five-file linguistic trace across `2026-05-14_12-45/docarchive/` plus user's structural correction converge.

- **Strongest maintenance candidate:** M1 — `/innovate` Phase 3 scope-fidelity-to-framing test, with concrete trigger (selective on generic-framed), check phrasing, prevention rule (diversify / tag / re-frame), and evaluation gate (3 future inquiries). PARALLEL to L1 (preserved from `2026-05-14_13-08/finding.md` for what L1 actually catches). Risk LOW; project-agnostic.

- **Main uncertainty:** Whether M1 alone catches all loop-stage scope-leakage cases or whether M2 (defense-in-depth at `/td-critique` Phase 0) is needed. Calibration over 3 future MVL+ inquiries will resolve.

- **Recommended next step:** Apply M1 to `/innovate`'s skill spec at both canonical and installed locations. Preserve L1 PARALLEL from `2026-05-14_13-08/finding.md`. Preserve this finding as the precedent for "spec eats its own dog food at mechanism level, not just text level." Monitor 3 future MVL+ inquiries; revisit M2 deferral if M1 doesn't fire correctly.
```

### P3 — Recursive Demonstration CORRECTION

**Mechanism:** Inversion (the prior claimed one thing; this section inverts to show why opposite, then preserves what stands).

```markdown
## Recursive Demonstration: Correction of the prior finding's framing

The prior finding (`2026-05-14_13-08/finding.md` section 6) framed the L1 over-specification as "Phantom Canon at meta-meta-level / a concrete instance of lesson-introduces-its-own-trap firing at meta-meta-level." This finding's diagnostic reveals that framing is structurally mis-attributed. The L1 over-specification is a DIFFERENT failure mode at a DIFFERENT stage.

### Three-test result on the prior framing

Applying the strengthened diagnostic three-test (from `devdocs/inquiries/2026-05-13_12-45__.../finding.md`) to the prior framing's claim that "the L1 over-specification is Phantom Canon at meta-meta-level / a concrete instance of lesson-introduces-its-own-trap":

- **Claim-truth test.** Is the prior framing true? **NO.** Phantom Canon's mechanism is artifact-treated-as-canon-without-check at framing-time (when `_branch.md` is being composed). The L1 over-specification's mechanism is concrete-text-generation defaulting to available-examples at innovation-stage (after `_branch.md` is composed, during the loop pipeline). Different mechanisms.

- **Level-coherence test.** Is the prior framing at the right level? **NO.** Phantom Canon operates at the framing-time layer. The L1 over-specification operates at the innovation-stage layer. Putting both at "Phantom Canon at meta-meta-level" conflates two distinct layers of the inquiry pipeline.

- **External-citation test.** Could the prior framing be cited as authoritative for catching loop-stage scope-leakage in another inquiry? **NO.** The prior framing's mechanism (artifact-canon-check at framing-time) cannot catch a failure that enters at innovation-stage (after framing is complete). Citing it would propagate the misattribution.

Three NOs → CORRECTS verdict warranted on the prior framing.

### Structural distinction between the two failure modes

| Dimension | Phantom Canon | Loop-stage scope-leakage |
|---|---|---|
| **What's treated wrongly** | An artifact's canon-status is unchecked | A spec text's scope is narrowed |
| **Stage of entry** | Framing time (`_branch.md` write) | Innovation-stage (concrete-text generation) |
| **Mechanism** | Implicit canonicalization | Available-examples bias |
| **Catch mechanism** | L1 pre-step at `/MVL+` root-NEW (before `_branch.md`) | M1 test at `/innovate` Phase 3 (after concrete-text generation) |
| **Pattern-family member** | Third member of meta-conditions-on-verification | Fourth member of meta-conditions-on-verification |

### What stands from the prior Recursive Demonstration

- **The fact that the L1 spec had a real problem** — STANDS. The prior finding's discovery of the over-specification is real. What's corrected is the CATEGORY ATTRIBUTION of that problem.

- **The general insight that "even careful diagnostics can exhibit a failure mode they themselves diagnose"** — STANDS. This insight motivated the spec-eats-its-own-dog-food architectural pattern. What's corrected is the layer the pattern was applied at (text-level only → mechanism-level needs M1).

- **The dimensional CORRECTS approach** — STANDS as method. This finding inherits and applies the same dimensional-CORRECTS method to the prior finding's Recursive Demonstration framing.

### What's corrected from the prior Recursive Demonstration

- **The category attribution.** Phantom Canon at meta-meta-level → loop-stage scope-leakage at innovation-stage (a distinct failure mode).
- **The family-extension claim** ("second instance of lesson-introduces-its-own-trap") → fourth sister member. See P4.
- **The Layer 3 self-reference's comprehensive-scope claim** (the corrected L1's trigger criteria pass project-agnosticism check, therefore the spec eats its own dog food) → text-level passes, mechanism-level needed at runtime (covered by M1). See P5.

### Why this gets its own top-level section

The prior finding's Recursive Demonstration was its own top-level section. The correction has equal structural significance — failing to give it parallel visibility would bury the correction inside the Reasoning section, where readers might miss it. The CORRECTS framing requires this section to be visible.

### What this teaches

A finding that names a failure mode AND proposes a maintenance candidate AND verifies the candidate's spec text against the failure mode's check must verify at EVERY layer the check claims to operate on — not just the text-level layer. The "spec eats its own dog food" pattern needs MULTI-LAYER application: if the check claims to operate at level X, the self-application must verify at level X. Text-level only is necessary but not sufficient when the check's purpose includes mechanism-level appropriateness.
```

### P4 — Pattern-family corrected positioning

**Mechanism:** Absence Recognition (the prior family-extension missed the distinct fourth member).

```markdown
## Pattern-family positioning: meta-conditions on verification — fourth member

The "meta-conditions on verification" family naming (from `2026-05-14_00-26/finding.md` and `2026-05-14_12-45/finding.md`) is preserved. The family captures patterns about CONDITIONS that affect the verification process itself rather than the verification's content.

This finding corrects the prior finding's (`2026-05-14_13-08/finding.md` section 7) family-extension claim. The prior added the L1 over-specification as "a second instance of lesson-introduces-its-own-trap firing at meta-meta-level." This finding's P3 establishes that the L1 over-specification is NOT a second instance of lesson-introduces-its-own-trap (different mechanism; different stage). It is a distinct fourth member of the family.

### Corrected family (four members)

1. **Lesson-introduces-its-own-trap** (from `devdocs/inquiries/2026-05-13_12-45__.../finding.md`).
   - Mechanism: vocabulary-introduction creates a vector for the failure mode the lesson names.
   - Stage: conversational-introduction layer.
   - Prevention: pair every new meta-lesson vocabulary with an obligatory diagnostic check before its first application.
   - Instances: 1 observed.

2. **Framing-load-bearing** (from `devdocs/inquiries/2026-05-14_00-26__.../finding.md`).
   - Mechanism: same hypothesis produces different verdicts under different framings (scope, referent, granularity).
   - Stage: verification-framing layer.
   - Prevention: explicit framing-clarification before verification.
   - Instances: 1 observed.

3. **Phantom Canon** (from `devdocs/inquiries/2026-05-14_12-45__.../finding.md`; corrected at text-level in `2026-05-14_13-08/finding.md`).
   - Mechanism: artifact-treated-as-canon-without-check.
   - Stage: framing-time layer.
   - Prevention: L1 pre-step at `/MVL+` root-NEW path.
   - Instances: 1 observed.

4. **Loop-stage scope-leakage** (this finding).
   - Mechanism: concrete-text-generation defaults to immediately-available examples when inquiry-framing claims generic scope.
   - Stage: innovation-stage layer.
   - Prevention: M1 scope-fidelity test at `/innovate` Phase 3.
   - Instances: 1 observed.

### Retraction

The prior finding's claim that "the recursive demonstration provides a second instance of lesson-introduces-its-own-trap, bringing that sub-member's instance count to two" is RETRACTED. The L1 over-specification is one instance of a sister pattern (loop-stage scope-leakage), not a second instance of lesson-introduces-its-own-trap.

### Calibration

The family remains EMERGING, not confirmed. Pattern-confirmation requires more cases. The new naming (fourth member) is calibration-state thin (one observed instance of loop-stage scope-leakage).

- **Pattern-confirmation trigger.** If 3+ additional failure modes share the meta-conditions-on-verification feature → family-naming earns confirmation.
- **Sub-pattern instance trigger.** If 2+ additional instances of any current member surface in future inquiries → that member's evidence base strengthens.
- **Pattern-revision trigger.** If a future named pattern doesn't fit the family cleanly → family may need decomposition.

### Speculative future fifth member (flagged for tracking, not named here)

The pattern of "the diagnostic's own maintenance candidate exhibits the failure mode it diagnoses" (which is what BOTH `2026-05-14_12-45/finding.md` AND `2026-05-14_13-08/finding.md` exhibited, at different layers) might become a meta-level pattern worth naming if it recurs in a third inquiry. Provisional name candidate: "self-application incompleteness." Flagged for future tracking; not named on the basis of two instances in the same project topic-chain.
```

### P5 — Self-reference at scope-fidelity (text + mechanism)

**Mechanism:** Inversion (turn M1's new check inward on this finding's own outputs at TWO layers).

```markdown
## Self-reference acknowledgment: this finding passes M1's check at two layers

This finding introduces M1 (a scope-fidelity-to-framing test at `/innovate` Phase 3). The finding's own outputs must pass M1's check. Applying M1 to this finding's own spec text + mechanism choices:

### Layer A — Text-level scope-fidelity (M1's check applied to this finding's text outputs)

| This finding's output | Inquiry's generic scope claim | Text-level check |
|---|---|---|
| Failure-mode name "loop-stage scope-leakage" + mechanism description "available-examples bias" | Generic failure mode applicable to any project running an MVL+ pipeline inside a project context | PASS — names use generic phrasing without project-specific terms |
| M1 description (trigger criterion + check phrasing + prevention rule) | Generic test applicable to any inquiry-framing with a generic-scope claim | PASS — uses "candidate's spec text" + "inquiry's framing" + "immediately-available context" (generic terms) |
| M1's diversified examples (4 contexts: algorithm spec / protocol spec / documentation spec / discipline-rule spec) | Examples spanning multiple contexts, not narrowed to this project | PASS — four distinct contexts; discipline-rule case is tagged as "one illustration from one project context, not a project-specific scope claim" |
| M2 description (scope-fidelity-to-framing dimension at `/td-critique` Phase 0) | Generic dimension applicable to any `/td-critique` invocation on a generic-framed candidate | PASS — discipline-name `/td-critique` is project-vocabulary but referent is generic |
| Pattern-family corrected positioning (P4) | Four distinct sister members of a generic family | PASS — family naming uses generic mechanism descriptions; no project-specific scope claim on the family itself |
| Evidence framing (`2026-05-14_12-45/docarchive/` files cited as illustration) | One concrete instance of generic pattern | PASS — files explicitly tagged as ONE illustration of the generic pattern |

All outputs pass text-level scope-fidelity. The new failure-mode name, the M1 spec, the M2 spec, the family-positioning, and the evidence framing all retain the generic scope the inquiry's framing claimed.

### Layer B — Mechanism-level appropriateness (the addition this finding makes to the prior's text-only Layer 3)

| Maintenance candidate | Failure mode addressed | Stage of failure | Mechanism's stage | Mechanism-stage match? |
|---|---|---|---|---|
| M1 (`/innovate` Phase 3 scope-fidelity test) | Loop-stage scope-leakage | `/innovate` Phase 2 (concrete-text generation) | `/innovate` Phase 3 (immediately after Phase 2) | YES — adjacent stage; appropriate |
| M2 (`/td-critique` Phase 0 scope-fidelity dimension) | Loop-stage scope-leakage (defense-in-depth at compounding stage) | `/td-critique` Phase 2 (adversarial-testing without scope-fidelity probe) | `/td-critique` Phase 0 (dimension construction) | YES — upstream of failure stage within the same discipline; appropriate as defense-in-depth |

Both maintenance candidates have mechanism-stage match. The new check this finding introduces (M1) is at the right stage for what it catches.

This is the addition over the prior `2026-05-14_13-08/finding.md` Layer 3 self-reference (which was text-level only). The prior's L1 passed text-level scope-fidelity but did NOT pass mechanism-level appropriateness for the failure mode the prior was diagnosing (the L1 over-specification, which entered post-`_branch.md` while L1 fires pre-`_branch.md`). This finding's M1 passes both layers because the check was designed with mechanism-stage match as an explicit requirement.

### Layer C — One-instance evidence calibration (honest)

The failure-mode naming ("loop-stage scope-leakage") is based on ONE concrete instance: the L1 over-specification in `2026-05-14_12-45/docarchive/innovation.md` lines 161-163. Pattern-naming from one instance is calibration-state thin.

- **Naming with calibration:** the name is provisional; the family-positioning is provisional; the maintenance candidate's effectiveness is provisional.
- **Pattern-confirmation requires more cases.** A second instance of loop-stage scope-leakage in a future MVL+ inquiry would strengthen the evidence base from one to two. Three or more instances would earn full pattern-confirmation.
- **Self-reference acknowledges the one-instance limit honestly.** The inquiry does not claim the failure-mode is established; it claims the failure-mode is identified in one observed case with structural reasoning + linguistic trace evidence.

### Why all three layers matter

Layer A (text-level) verifies the inquiry's outputs retain the framing-scope at the text-content layer. Layer B (mechanism-level) verifies the maintenance candidate's mechanism matches the failure stage it addresses. Layer C (evidence-calibration) verifies the inquiry honestly acknowledges its evidence base. Together they form a self-application of the new check that covers both the spec-text-level the prior Layer 3 covered AND the mechanism-level layer the prior missed AND the evidence-calibration layer that's specific to one-instance pattern-naming.
```

### P6 — Reasoning

**Mechanism:** Combination (preserved-from + corrected + three-test + cost-naming + what-was-killed).

```markdown
## Reasoning

### Why CORRECTS over REFINES (dimensional CORRECTS on `2026-05-14_13-08/finding.md`)

Applying the strengthened diagnostic three-test to the prior finding's Recursive Demonstration framing (the claim that "the L1 over-specification is Phantom Canon at meta-meta-level / a concrete instance of lesson-introduces-its-own-trap"):

- **Claim-truth test.** Did the prior framing claim the L1 over-specification was Phantom Canon? YES (explicitly in section 6). Is the claim true? NO — different mechanism (available-examples bias vs implicit canonicalization), different stage (innovation vs framing). → **NO.**
- **Level-coherence test.** Was the prior framing at the right level? NO — putting both at "meta-meta-level" conflates two distinct layers (innovation vs framing). → **NO.**
- **External-citation test.** Could the prior framing be cited as authoritative for catching loop-stage scope-leakage in another inquiry? NO — citing it would propagate the misattribution. → **NO.**

Three NOs → CORRECTS verdict warranted on the prior framing.

### Why dimensional CORRECTS, not total

CORRECTS is dimensional. Three sub-dimensions of the prior finding are corrected; the rest stands:

| Element | Preserved or Corrected? | Why |
|---|---|---|
| L1 text (project-agnostic trigger phrasing, ambiguity threshold, diversified canon-status examples, optional project-boundary) | PRESERVED | L1's text is sound for what L1 actually catches (framing-time canonicalization). The text-level project-agnosticism work in `2026-05-14_13-08/finding.md` is good. |
| L1's framing-time-canonicalization catch | PRESERVED | L1 stands for what it actually catches. PARALLEL to M1. |
| Prior standing meta-check on trigger criteria (text-level scope at spec-revision time) | PRESERVED | Its actual scope is text-level. The check is sound for what it claims. The mismatch is at scope-claim level (what the check covers vs what readers may have inferred). |
| `2026-05-14_12-45/finding.md` H1 attribution for original chain | PRESERVED | H1 was correct for the original `2026-05-14_00-01 → 2026-05-14_00-26` chain. |
| Phantom Canon failure-mode name and concept | PRESERVED | The failure mode itself is real; only the prior finding's attribution of the L1 over-specification to it is corrected. |
| Meta-conditions-on-verification family naming | PRESERVED | Family naming stands; this finding adds a fourth member. |
| Prior Recursive Demonstration framing (section 6) | CORRECTED | Three NOs on the three-test; framing is mis-attributed. |
| Prior family-extension instance count ("second instance of lesson-introduces-its-own-trap") | CORRECTED | The L1 over-specification is a first-instance of a sister pattern, not a second-instance of an existing member. |
| Prior Layer 3 self-reference's claim of comprehensive-scope | CORRECTED | Text-level alone is insufficient; mechanism-level needed (via M1 at innovate-runtime). |

### Why `2026-05-14_12-45/finding.md` NOT corrected

The 2026-05-14_12-45 finding's H1 attribution applied to the ORIGINAL chain (`2026-05-14_00-01` → `2026-05-14_00-26`), where the `_branch.md` was actually mis-framed. For that chain:

- Claim-truth: H1 (HIGH framing-time implicit canonicalization) for the original chain → TRUE.
- Level-coherence: framing-time-canonicalization at the framing-time layer → COHERES.
- External-citation: citable as authoritative for framing-time canonicalization → YES.

Three YESes → H1 stands on its own terms for its actual scope. The misattribution emerged in `2026-05-14_13-08/finding.md` when implicitly extending H1 to the L1's own over-specification. `2026-05-14_12-45/finding.md` itself did not make that implicit extension.

### Honest cost-naming for 6 MVL+ in succession

This is the sixth MVL+ inquiry in succession on the related topic chain. Cumulative cost is heavy. The direct-edit-vs-full-loop guideline (extracted in `2026-05-14_13-08/finding.md` Reasoning section) was applied to decide on running the full loop for this iteration:

| Direct-edit condition | This iteration's value |
|---|---|
| Correction is text-only without diagnostic implications | NO — this iteration surfaces a structural misattribution + introduces a new failure mode |
| No new pattern is being recognized | NO — a new failure mode (loop-stage scope-leakage) is being recognized |
| Prior diagnostic frame is unchanged | NO — the prior Recursive Demonstration framing is being structurally challenged |
| Prior verdict, hypotheses, attribution all stand | NO — three sub-dimensions of the prior need dimensional correction |

All four direct-edit conditions are NO → the full loop is warranted.

Unique outputs of this iteration (not achievable by direct edit):

1. The trace-evidence diagnosis (5-file linguistic trace localizing the over-specification's entry point to innovation.md lines 161-163).
2. The mechanism naming (available-examples bias as the underlying cognitive mechanism).
3. M1's concrete spec design (test phrasing + prevention rule + evaluation gate + diversified examples).
4. The L1-vs-M1 PARALLEL framing (preserving L1 + adding M1 without conflict).
5. The three-test result on the prior Recursive Demonstration framing (formal CORRECTS justification).
6. The fourth-member family-positioning (with retraction of "second instance" claim).
7. The two-layer self-reference (text + mechanism) — a higher-order spec-eats-its-own-dog-food than the prior's text-only Layer 3.

Cumulative value of the sixth iteration: distinguishing two failure modes the prior conflated, placing the maintenance candidate at the failure's actual entry stage, and providing concrete evidence that "spec eats its own dog food" requires multi-layer application. Without this iteration, the project would deploy L1 thinking it addresses both failure classes when it actually addresses only one — and the misattribution would propagate forward in any future citations of `2026-05-14_13-08/finding.md`.

### What was killed in this iteration

- **Treating the L1 over-specification as Phantom Canon at meta-meta-level** (mis-attributed; different mechanism, different stage). Killed.
- **Treating the L1 over-specification as a concrete instance of lesson-introduces-its-own-trap firing at meta-meta-level** (mis-attributed; different mechanism). Killed.
- **Treating the new failure mode as a sub-pattern of lesson-introduces-its-own-trap** (different mechanism, different stage). Killed.
- **Adding a second meta-check at spec-revision time** (meta-check proliferation; M1 catches mechanism-level at natural runtime stage). Killed.
- **Hybrid M1+M2 as primary candidate** (over-commit without empirical effectiveness data; M2 deferred is the right shape per Step 5 LOOP_DIAGNOSE guardrails). Killed.
- **SUPERSEDES on `2026-05-14_13-08/finding.md`** (overreach; CORRECTS is dimensional). Killed.
- **CORRECTS on `2026-05-14_12-45/finding.md`** (its H1 attribution stands for the original chain's actual scope). Killed.
- **Renaming or restructuring L1** (L1's text stands as-is for what it actually catches). Killed.
- **Treating M1 as a /MVL+-level pre-step parallel to L1** (the failure is at innovation-stage, not framing-stage; M1's natural location is inside `/innovate`'s Phase 3). Killed.

### Contradictions reconciled

- **CORRECTS on `2026-05-14_13-08` vs PRESERVES of L1 text.** Reconciled by making the CORRECTS dimensional. The L1 text is one preserved sub-dimension; three other sub-dimensions are corrected.
- **New M1 vs L1 PARALLEL.** Reconciled by recognizing that L1 and M1 address different failure modes at different stages. Both stand without competition.
- **Standing meta-check stays text-level vs mechanism-level catch needed.** Reconciled by placing the mechanism-level catch at M1 (innovate-runtime), not at spec-revision time. Avoids meta-check proliferation while ensuring mechanism-level coverage at the natural stage.
- **Specific instance (the L1 over-specification) vs pattern-level diagnosis.** Reconciled by framing the diagnostic as pattern-level (loop-stage scope-leakage as a class) with the L1 over-specification as the ONE observed instance.
```

### P7 — Next Actions + Open Questions

**Mechanism:** Extrapolation (extend the monitoring + research trajectory).

```markdown
## Next Actions

### MUST

No MUST actions. This is a diagnostic finding.

### COULD

- **What:** Apply M1 to `/innovate`'s skill spec at both canonical and installed locations.
  - **Who:** the user (or whoever maintains the `/innovate` skill spec).
  - **Gate:** condition-bound — when the user is ready to commit the M1 edit.
  - **Why:** catches loop-stage scope-leakage at the failure's natural entry stage (innovation Phase 3, immediately after concrete-text generation). Prevents future inquiries from producing scope-narrowed spec text without detection.

- **What:** Verify the corrected L1 from `2026-05-14_13-08/finding.md` continues to stand for what it catches (framing-time canonicalization) and is not affected by this CORRECTS finding's dimensional correction.
  - **Who:** the user (during spec-deployment review).
  - **Gate:** condition-bound — when the user reviews this finding's CORRECTS impact.
  - **Why:** prevents confusion about whether the L1 text needs revision (it does not).

- **What:** Apply the retrospective audit to other prior MVL+ inquiries for loop-stage scope-leakage instances.
  - **Who:** spec-maintenance review session.
  - **Gate:** condition-bound — during a cumulative-quality review.
  - **Why:** the failure mode might have occurred in other inquiries; retrospective audit strengthens pattern-confirmation evidence.

### DEFERRED

- **What:** M2 — add a scope-fidelity-to-framing dimension to `/td-critique`'s Phase 0 default-dimension list when the candidate set was framed at generic scope.
  - **Gate:** observable revival trigger — if M1 fails to catch a loop-stage scope-leakage case in 3 future MVL+ inquiries.
  - **Why (if revived):** defense-in-depth catches loop-stage scope-leakage at the adversarial-testing stage if M1's runtime check misses.

- **What:** A mechanism-level meta-check at spec-revision time, complementing the existing text-level meta-check from `2026-05-14_13-08/finding.md`.
  - **Gate:** observable revival trigger — if existing-spec major redesigns expose mechanism-level errors at spec-revision time that M1's runtime check doesn't catch.
  - **Why (if revived):** covers mechanism-level appropriateness at spec-revision time, not just at innovate-runtime.

- **What:** Pattern-confirmation for the meta-conditions-on-verification family.
  - **Gate:** observable revival trigger — 3+ additional named patterns sharing the family feature, OR 2+ additional instances of any current member.
  - **Why (if revived):** family-naming earns confirmation status; project vocabulary stabilizes.

## Open Questions

### Monitoring

- **M1 calibration.** Across 3 future MVL+ inquiries where the framing claims a generic scope and concrete spec text is generated: does M1 fire correctly (selective triggering)? Does it catch scope narrowing when it occurs? Does the prevention rule produce diversified, tagged, or re-framed output? Does the spec text passing M1 actually retain text-scope matching framing-scope?

- **L1 calibration (preserved from `2026-05-14_13-08/finding.md`).** Across 3 future MVL+ inquiries referencing artifacts of ambiguous canon-status: does L1 fire correctly? Continued monitoring under the same evaluation gate.

- **Standing meta-check effectiveness (preserved from `2026-05-14_13-08/finding.md`).** Does the text-level meta-check on trigger criteria get applied at future L1 revisions? Does it prevent text-level project-specific over-specification from being re-introduced?

- **Family-confirmation trajectory.** Does the meta-conditions-on-verification family accrue more patterns or instances?

### Research Frontiers

- **Whether other prior MVL+ inquiries exhibit loop-stage scope-leakage** — retrospective audit research frontier.

- **Whether the available-examples bias appears in other LLM-driven discipline pipelines beyond `/innovate`** (e.g., does `/sense-making` anchor-extraction default to available examples in similar ways? Does `/decompose` piece-naming default to available examples?). Cross-discipline research frontier.

- **Whether the spec-eats-its-own-dog-food architectural pattern needs a multi-layer canonical form** — text-level + mechanism-level + evidence-calibration-level — for all future CORRECTS findings. Methodology-design research frontier.

- **Whether non-loop direct edits to spec text exhibit a comparable failure mode** — direct-edit research frontier. The current naming (loop-stage scope-leakage) is calibrated to loop-based workflows; non-loop direct edits would have a different mechanism but possibly comparable scope-leakage.

- **Whether the "self-application incompleteness" speculative meta-pattern (flagged in P4)** earns naming on the basis of a third occurrence (in some future inquiry's recursive-demonstration framing). Family-extension research frontier.

### Refinement Triggers

- **If a future MVL+ inquiry exhibits loop-stage scope-leakage despite M1** — revisit M1's trigger criterion or check phrasing; consider promoting M2 from deferred to active.

- **If a second instance of loop-stage scope-leakage surfaces in a non-`/innovate` stage** — generalize M1 to apply at multiple discipline stages (e.g., `/sense-making` adjudications, `/decompose` pieces).

- **If existing-spec major redesigns expose mechanism-level errors at spec-revision time not caught by M1** — revisit the standing meta-check's scope; add a mechanism-level layer at spec-revision time.

- **If the family accrues 3+ more patterns or 2+ more instances of any current member** — family-confirmation earns its status; project vocabulary stabilizes.

- **If a third inquiry in this project surfaces "the diagnostic's own maintenance candidate exhibits the failure mode it diagnoses"** — promote the speculative "self-application incompleteness" pattern to a named family member.
```

### P8 — Source Input

```markdown
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
```

---

## Phase 3 — Test (5-test cycle on load-bearing pieces)

### Per-load-bearing-piece tests

| Piece | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| **P2.4a M1 spec** | HIGH — scope-fidelity test in `/innovate` Phase 3 is a structurally new check beyond the existing 5-test cycle | PASS — strongest objection: "adding 6th test adds friction." Response: selective triggering on generic-framed only; LOW friction. | HIGH — extensible to other concrete-text-generating disciplines; M1's structure is the basis for cross-discipline application | HIGH — concrete trigger, check phrasing, prevention rule, evaluation gate all specified | YES — Constraint Manipulation + Absence Recognition + Inversion converge (three mechanisms) | ACTIONABLE |
| **P3 Recursive Demonstration CORRECTION** | HIGH — explicit dimensional correction of prior finding's recursive demonstration framing is a structurally new element | PASS — strongest objection: "harsh on prior framing." Response: three-test produces three NOs; dimensional CORRECTS preserves what stands. | HIGH — sets precedent for future CORRECTS findings to apply three-test rigorously | HIGH — structural distinction table; explicit preserved-vs-corrected listing | YES — Inversion + Combination | ACTIONABLE |
| **P5 Self-reference at two layers** | HIGH — applying M1 to self at BOTH text-level AND mechanism-level (and adding Layer C evidence-calibration) is a structurally new self-reference form | PASS — strongest objection: "performative?" Response: check operates on concrete outputs with explicit table rows; not performative. | HIGH — sets precedent for future findings to apply self-reference at multiple layers | HIGH — three-layer table with row-by-row checks | YES — Inversion + Constraint Manipulation | ACTIONABLE |
| **P4 Pattern-family corrected positioning** | MEDIUM — family extended from three to four members; retraction of "second instance" claim is structurally new | PASS — strongest objection: "is fourth member premature given one-instance evidence?" Response: calibration note explicitly maintains emerging-state. | HIGH — opens tracking for the family; flags a speculative fifth member | HIGH — concrete family table with mechanism + stage per member | YES — Absence Recognition + Combination | ACTIONABLE |
| **P2.4c L1-vs-M1 distinction** | MEDIUM — explicit PARALLEL table is a new structural element for clarifying scope of two parallel candidates | PASS — strongest objection: "redundant with M1 spec?" Response: distinguishes scope explicitly; prevents readers from confusing L1 and M1 as competing candidates. | HIGH — clarifies the scope-boundary for downstream consumers | HIGH — concrete six-row table | YES — Combination | ACTIONABLE |
| **P6 Reasoning** | PARTIAL — three-test analysis is a new element; preserved-vs-corrected table is new | PASS — strongest objection: "over-detailed reasoning?" Response: the reasoning is load-bearing because the dimensional CORRECTS requires per-element justification. | HIGH — template for future dimensional CORRECTS findings | HIGH — explicit reasoning | YES — Combination | ACTIONABLE |

### Per-supporting-piece tests (lighter)

| Piece | Disposition | Notes |
|---|---|---|
| P1.1 Frontmatter | ACTIONABLE | corrects: + preserves-from: extends LOOP_DIAGNOSE convention; matches prior CORRECTS framing |
| P1.2 Heading + Question | ACTIONABLE | preserved verbatim |
| P1.3 Surrounding context | ACTIONABLE | user's quote framed with dimensional CORRECTS framing |
| P1.4 Finding Summary | ACTIONABLE | each bullet grounded in downstream section |
| P1.5 Changes from Prior | ACTIONABLE | preserved/corrected/new clearly distinguished |
| P2.1 Correction Chain Summary | ACTIONABLE | scope-of-CORRECTS row prevents over-reading |
| P2.2 Hypotheses H1-H3 | ACTIONABLE | full LOOP_DIAGNOSE Step 4 hypothesis structure; H1 HIGH supported by 5-file trace |
| P2.3 Attribution Summary | ACTIONABLE | three rows with confidence + candidate action |
| P2.4b M2 deferred | ACTIONABLE with revival trigger | concise spec; mirrors L4-deferred from prior |
| P2.4d (no separate L4-style here, M2 is the deferred candidate) | — | n/a — M2 IS the deferred candidate; no further deferred candidate needed |
| P2.5 Diagnostic Verdict | ACTIONABLE | preserved + brief restatement reflecting M1 |
| P7 Next Actions + Open Questions | ACTIONABLE | grounded in this iteration's contributions |
| P8 Source Input | preserved | verbatim |

**Per-piece summary.** All ~17 sub-pieces ACTIONABLE. 1 DEFERRED-with-revival-trigger (P2.4b M2). No KILL or REFINE results.

---

## Phase 3.5 — Assembly Check

### Emergent architecture: Multi-layer spec-eats-its-own-dog-food

The 8 pieces compose into a coherent CORRECTS-flavored LOOP_DIAGNOSE finding with an emergent architectural pattern that goes beyond `2026-05-14_13-08/finding.md`'s text-only "spec eats its own dog food":

1. **Define the new check (M1).** P2.4a specifies M1's trigger + check phrasing + prevention rule.
2. **Apply M1 to this finding's own outputs at MULTIPLE LAYERS.** P5 applies M1 at Layer A (text-level on all this finding's outputs), Layer B (mechanism-level on this finding's maintenance candidates), and Layer C (evidence-calibration on the one-instance basis).
3. **Record explicit correction of the prior text-only application.** P3 corrects the prior finding's Recursive Demonstration framing (which applied at text-only Layer 3).
4. **Stand the parallel candidate (L1) for its actual scope.** P2.4c explicitly distinguishes L1 from M1 to prevent scope-confusion.

The emergent architectural pattern: when a finding introduces a check that operates at multiple layers (text + mechanism), the self-application must verify at EVERY layer the check claims to operate on. Text-level alone is insufficient when the check's purpose includes mechanism-level.

This is the higher-order spec-eats-its-own-dog-food: the spec passes its own check at every layer the check is claimed to cover.

### Adversarial test on the assembly

**Prosecution against the architecture.** Are the 8 pieces coherent together, or do any contradict?

- P3 says the prior framing is mis-attributed. P2.4c says L1 stands PARALLEL. Contradiction? NO — the prior framing was about the L1 over-specification (a specific failure-mode-attribution claim); the L1 mechanism's scope was the issue. P2.4c preserves L1 for what L1 actually catches (framing-time canonicalization); P3 corrects the misattribution about what the L1 over-specification was an instance of. Coherent.
- P4 retracts the "second instance of lesson-introduces-its-own-trap" claim. P3 establishes the structural reason (different mechanism, different stage). Coherent.
- P5 verifies this finding's own outputs pass M1's check at multiple layers. M1 is defined in P2.4a. Coherent.
- P6 reasoning aggregates the dimensional CORRECTS justification. Consistent with P3 + P4 + P5. Coherent.

**Defense.** The architecture is structurally coherent. The dimensional CORRECTS is supported by per-element justification; the multi-layer self-reference is the structural addition that distinguishes this finding from the prior; M1's PARALLEL position to L1 is supported by mechanism-stage analysis.

**Collision.** No adversarial collision destroys the architecture. The architecture is coherent.

**Assembly verdict: SURVIVE.**

---

## Axis Coverage Check

Committed axes (from sensemaking + decomposition):

| Axis | Variant committed | Status |
|---|---|---|
| (a) Format adherence | strict LOOP_DIAGNOSE Step 4 envelope inside CORRECTS framing | ✓ delivered |
| (b) Prescription level | M1 single source edit (with sub-pieces) + M2 deferred | ✓ delivered (M1 spec is single edit to `/innovate` Phase 3; M2 deferred for `/td-critique` Phase 0) |
| (c) Self-reference style | scope-fidelity self-application at TWO layers (text + mechanism), plus Layer C evidence-calibration | ✓ delivered (P5 three-layer table) |
| (d) Family-positioning commitment | fourth-member with calibration emerging + retraction of "second instance" claim | ✓ delivered (P4 four-member family + explicit retraction) |

All four axes have delivered variants. No axis is empty.

---

## Mechanism Coverage (Telemetry)

| Component | Count | Notes |
|---|---|---|
| **Generators applied** | 4 / 4 (full coverage) | Combination (P1.4, P1.5, P2.1, P2.5, P6, multiple); Absence Recognition (P2.2 hypotheses identifying mechanism gap, P2.4a M1's recognition of missing check, P3 distinguishing the failure modes, P4 fourth member recognition); Domain Transfer (M1's diversified examples span four distinct domain contexts); Extrapolation (P7 monitoring + research frontiers) |
| **Framers applied** | 3 / 3 (full coverage) | Constraint Manipulation (M1 spec, M2 deferred, the scope-fidelity check itself); Inversion (P3 inverts prior recursive demonstration framing, P5 turns M1 check inward, P2.4a M1 itself inverts available-examples bias); Lens Shifting (P1.3 dimensional-CORRECTS lens framing) |
| **Convergence** | YES — 3 mechanisms (Constraint Manipulation + Absence Recognition + Inversion) converge on P2.4a M1 as load-bearing candidate | HIGH confidence on M1 |
| **Survivors tested** | ~17 / 17 pieces tested via 5-test cycle on load-bearing + lighter pass on supporting | All ACTIONABLE except M2 (DEFERRED with revival trigger by design) |
| **Failure modes observed** | NONE | Premature evaluation: NO (generation separated from testing). Single-mechanism trap: NO (multiple mechanisms applied per piece). Early frame lock: NO (multiple frames considered via sensemaking adjudications + critique-of-prior). Innovation without grounding: NO (all outputs tested). Mechanism exhaustion: NO (all 7 mechanisms produced output). Survival bias: NO — the structurally uncomfortable correction of prior surface mis-framing (the recursive-demonstration framing was a confident structural claim in `2026-05-14_13-08/finding.md`; correcting it is structurally uncomfortable) survives via three-test rigor + 5-file linguistic trace evidence. |

**Overall: PROCEED.**

Sufficient coverage (4G + 3F, full 7-mechanism); convergence on load-bearing piece (3 mechanisms on M1); all survivors tested; no failure modes observed; assembly check identifies emergent architectural value (multi-layer spec-eats-its-own-dog-food); axis coverage confirms all 4 committed axes have delivered variants.

---

## Output for Critique

The 8 pieces (~17 sub-pieces) above constitute the concrete final text for the CORRECTS-flavored LOOP_DIAGNOSE finding. Critique will evaluate:

- **M1 operational clarity** — is the trigger criterion + check phrasing + prevention rule operationally clear? Could two readers applying M1 to the same spec text produce different verdicts?
- **M1 spec self-fidelity** — does M1's own spec text pass M1's check? (Critique should verify the scope-fidelity self-check applied during innovation was rigorous.)
- **Recursive Demonstration correction's three-test rigor** — are the three NOs robust? Could a defender argue any of them flips to YES?
- **L1-vs-M1 PARALLEL framing soundness** — could M1 actually subsume L1 (covering both failure modes) or vice versa?
- **Family-positioning calibration** — is the "fourth member" naming + retraction of "second instance" appropriately scoped?
- **Self-reference Layer B genuineness** — does the mechanism-level check actually verify mechanism-stage match, or is the table performative?
- **6-MVL+-in-succession value-vs-cost meta-question** — was this iteration the right intervention? What does it produce uniquely?
- **Specific-vs-pattern check on the new failure mode** — is "loop-stage scope-leakage" defined at the right scope (pattern-level), with the L1 over-specification correctly framed as ONE instance?

Innovation discipline output: COMPLETE. PROCEED to Critique.
