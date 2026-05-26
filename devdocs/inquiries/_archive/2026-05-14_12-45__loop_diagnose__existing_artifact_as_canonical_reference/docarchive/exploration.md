# Exploration — Loop Diagnose: Existing-Artifact-as-Canonical-Reference

## Step 0 Declarations

| Field | Value |
|---|---|
| cognitive-commitment-mode | open |
| territory-type-mode | artifact (correction-chain artifacts to read + compare) + some possibility (failure-mode-naming and maintenance-candidate generation) |
| entry-point | signal-first (user's correction is the specific diagnostic signal) |
| expected | ~15-20 candidates across hypotheses + maintenance + pattern-names + evidence anchors |
| depth-level | D2 with D3 probes on contested attributions |

LOOP_DIAGNOSE protocol commitments: treat human correction as evidence, not noise; treat corrected inquiry as comparative evidence, NOT ground truth; prefer evidence-backed hypotheses; allow mixed/unknown attribution; do not adjudicate /navigation spec itself — focus on the META-issue (loops treating accumulated artifacts as canonical).

---

## Territory Overview

The territory is a comparison of two inquiry folders + the broader correction chain. Three layers to map:

**Layer A — The prior inquiry's commitment trail.** Where, in the prior loop's pipeline, did the spec-as-canonical commitment happen? At framing? Exploration? Sensemaking? Cascading from upstream?

**Layer B — The corrected inquiry's anti-commitment structure.** What did the corrected loop DO differently that prevented the same commitment? Where in the pipeline did the prevention live?

**Layer C — The failure-mode design space.** Given the failure observed and the prevention that worked, what's the named failure mode + where should the check live + what's the project-vocabulary term?

---

## Inventory

### Layer A — Where did the prior loop's spec-as-canonical commitment happen?

| ID | Commitment-point | Evidence (from artifacts) | Confidence |
|---|---|---|---|
| **A1** | **Framing time (the inquiry's `_branch.md`)** | The prior `_branch.md` Question text: *"Is /navigation structurally the same discipline as /explore..."* — uses `/navigation` without canon-status qualifier. Goal section references *"residuals from the original /navigation finding's specialization treatment (per the 2026-05-12_11-40 inquiry)"* as established context. The framing TREATS the existing discipline as the reference target. | **HIGH** |
| **A2** | **Exploration's artifact-reading list** | The prior `docarchive/exploration.md` has a KEY ARTIFACTS TO CONSUME section listing `homegrown/navigation/SKILL.md` and `homegrown/navigation/references/navigation.md` as authoritative reads. No canon-status declared; the artifacts are treated as the test target. | **HIGH** |
| **A3** | **Sensemaking's anchor-extraction** | The prior `docarchive/sensemaking.md` extracted anchors from the spec-derived residuals (Guide, Reachability, REVISIT, autonomy-split) without questioning whether those residuals represent the user's current intent for "/navigation." | **MEDIUM** (sensemaking inherited the commitment; didn't originate it) |
| **A4** | **Upstream cascade from the 2026-05-12_11-40 finding's B-refined model** | The prior 2026-05-12_11-40 finding established /navigation as a 4-component model (Enumerate + Label + Guide + Select). This commitment cascaded: /explore §1.5 names /navigation as a "specialization"; the existing /navigation/SKILL.md and references/navigation.md exist; the 2026-05-14_00-01 inquiry inherited all of this as established. | **MEDIUM-HIGH** |
| **A5** | **Assistant's in-conversation argument that preceded the inquiry** | Before the prior inquiry was created, the assistant had argued the unification using "/navigation" without disambiguating concept vs spec. The user invoked /MVL+ as verification; the inquiry's framing reflected the assistant's reference (existing /navigation). | **MEDIUM** |

**Synthesis:** the commitment was made EARLIEST at framing time (A1), with upstream cascade (A4) anchoring it as natural. Exploration faithfully executed against the framed target (A2). Sensemaking and downstream operated within the commitment (A3). The PRIMARY commitment point is framing time (A1); A2-A3 are downstream artifacts of A1.

### Layer B — What did the corrected inquiry do differently?

| ID | Anti-commitment structure | Where it lived | Effectiveness |
|---|---|---|---|
| **B1** | **Explicit framing exclusion in `_branch.md`** | Corrected `_branch.md`'s Question explicitly named the target as *"the general cognitive operation of finding paths... independent of how the existing `/navigation` discipline is currently specified"*; the Scope Check had a "Specific exclusion (per user instruction): the existing `/navigation` discipline spec... is NOT the reference." | **HIGH** — the framing committed away from the spec |
| **B2** | **DO NOT READ list in exploration's input** | Corrected exploration's framing instructions included a DO NOT READ list naming `homegrown/navigation/references/navigation.md` and `homegrown/navigation/SKILL.md`. Anti-anchor at the discipline level. | **HIGH** — structural prevention at the discipline-reading boundary |
| **B3** | **Cross-domain external grounding** | Corrected exploration's MR1-MR5 were anchored in cross-domain treatments (graph theory, motion planning, RL, cognitive science) — external to the project — instead of in project-internal artifacts. | **HIGH** — provides reference grounding that doesn't depend on project-internal artifact canon-status |
| **B4** | **Stress-test in sensemaking acknowledging bias-shopping risk** | Corrected sensemaking explicitly probed whether the framing was honest vs framing-shopping. The user's reframing was the external grounding for the framing. | **MEDIUM** — caught downstream risk, not the upstream commitment |

**Synthesis:** the corrected loop's prevention happened at framing time (B1) via explicit exclusion, reinforced at exploration's reading boundary (B2), and grounded in non-project external evidence (B3). The structural pattern is: **explicit exclusion of the suspected non-canon artifact + alternative external grounding**.

### Layer C — Failure-mode design space

#### C.1 — Failure mode name candidates

| ID | Name candidate | Strength | Weakness |
|---|---|---|---|
| **N1** | **Phantom Canon** | Vivid; memorable; captures "looks canonical but isn't" | Slightly metaphorical |
| **N2** | **Implicit Canon Assumption** | Descriptive; precise | Verbose |
| **N3** | **Stale Anchor (artifact form)** | Ties to sensemaking's anchor vocabulary; "stale" captures the legacy aspect | "Anchor" already has technical meaning in /sense-making |
| **N4** | **Half-Tried Artifact Read as Canon** | Uses user's own term | Awkward as a name |
| **N5** | **Non-Canon Inheritance** | Frames as inheritance problem (which it is — inherited from upstream commitments) | Less vivid |
| **N6** | **Legacy-Spec Bias** | Names the bias direction | Narrow to specs, not all artifacts |
| **N7** | **Artifact Canon-Status Omission** | Names the omission directly | Long |

Adjudication will happen in sensemaking. Initial lean: **N1 "Phantom Canon"** for vividness + **N7 "Artifact Canon-Status Omission"** for the failure-mode operational description (with N1 as the pattern-name and N7 as the mechanism description).

#### C.2 — Where the maintenance candidate (the check) should live

| ID | Location | What the check would do | Pros | Cons |
|---|---|---|---|---|
| **L1** | **/MVL+ skill — framing-clarification pre-step** | Before `_branch.md` is created (root NEW path), prompt for canon-status of any project artifacts the question references | Catches at earliest point (before pipeline runs); aligns with the previous inquiry's Research Frontier item | Requires /MVL+ skill change; would have caught THIS case; risks heavy startup for simple inquiries |
| **L2** | **/explore Step 0 declarations — add `reference-status` field per artifact** | Declare each artifact-to-be-read with canon-status: `canon` / `non-canon` / `under-test` / `unknown`. Items marked `under-test` or `unknown` get treated differently than canon. | Places the check at the discipline level where artifact-reading happens; load-bearing for /explore in artifact mode | Late in the pipeline (after framing committed); requires runner to know status before invoking |
| **L3** | **/sense-making — extend frame-exit-completeness to artifacts** | The existing frame-exit-completeness check covers inherited TERMS with multi-value usage. Extend to inherited ARTIFACTS: when an inquiry inherits an artifact as authoritative, check whether that artifact's status was declared. | Reuses existing check infrastructure; minimal new vocabulary | Sensemaking is late; the commitment is often made at framing |
| **L4** | **A new failure mode in `/explore`'s §4.1** | Name the failure mode in /explore's failure-modes list ("Phantom Canon: artifact read as authoritative without canon-status check") with prevention rule | Lives in the discipline most directly affected (artifact mode reads artifacts) | Doesn't catch failures originating at framing |
| **L5** | **A protocol (parallel to LOOP_DIAGNOSE) — `artifact_canon_clarification.md`** | A new protocol invoked when inquiries reference project artifacts | Reusable; minimal MVL+ disruption | More project complexity; another protocol to learn |
| **L6** | **Hybrid: framing-time + discipline-time checks** | A failure mode named once + checks at multiple layers (framing pre-step + /explore Step 0 field + sense-making extension) | Defense-in-depth | Risk of duplication; consistency requires coordination |

#### C.3 — Risk and burden-of-proof

| ID | Risk | Mitigation |
|---|---|---|
| **R1** | Over-application — every project artifact requires canon-status check, becoming bureaucratic | Limit the check to artifacts being treated as REFERENCE TARGETS for the inquiry's question, not all artifacts read for context |
| **R2** | Under-specification — a vague "consider canon-status" rule that doesn't actually fire | Specify SIGNAL (what triggers the check), CHECK (what's tested), and PREVENTION (what to do if it fails) |
| **R3** | False-positives — the check fires when no canon-issue exists | Allow `unknown` as a valid canon-status that proceeds with caveat-noting |
| **R4** | The user might not know the canon-status either | The check should ALLOW user-declared "unknown" with explicit acknowledgment; not force a binary canon/non-canon decision |

---

## Signal Log

### Probed signals (D3 depth where needed)

| Signal | Probe result |
|---|---|
| **Where in the prior loop's pipeline did the spec-as-canonical commitment originate?** | Framing time (A1) — confirmed by linguistic analysis of the prior `_branch.md`. Downstream stages (A2-A3) executed against the committed framing. |
| **Was the user's correction a predictable consequence of an unguarded loop step, or an unexpected redirect?** | Predictable in retrospect — once the framing committed to existing /navigation as reference, the verification's NO verdict was inevitable; the user's correction was about FRAMING, not about the verdict's correctness for that framing. The prior loop didn't fail at verification; it failed at framing-by-default. |
| **Did the assistant's in-conversation framing pre-bias the inquiry?** | YES — the assistant argued unification using "/navigation" without disambiguation. The inquiry's framing inherited that reference. This is BOTH an assistant-side framing issue (in-conversation argument was imprecise) AND a loop-design issue (the loop didn't catch the imprecision at framing time). |
| **Is the previous corrected inquiry's "framing-clarification pre-step" Research Frontier item THE same maintenance candidate?** | YES it's a CLOSE COUSIN but not identical. The prior Research Frontier item suggested a pre-step for framing-clarification in general. This finding's candidate is more specific: framing-clarification for ARTIFACT-CANON-STATUS. The general pre-step would cover this case; this case provides specific motivation for the general pre-step. |
| **Could the existing /sense-making frame-exit-completeness check have caught this?** | NO as-written. The existing check fires when inherited TERMS are used across ≥2 distinct values/levels within committed structures. The spec-as-canon commitment is about an inherited ARTIFACT, not a multi-value term. The check would need extension. |
| **Could the existing /explore boundary-discovery sub-phase have caught this?** | NO. Boundary-discovery fires when the territory boundary isn't pre-specified. In the prior inquiry, the territory was pre-specified (the existing /navigation spec); the issue wasn't unknown-boundary but rather wrong-target. |

### Deferred signals

| Signal | Why deferred |
|---|---|
| How many "many before mvl inquiries" actually had this confusion? The user noted there were many. Full retrospective is out of scope. | The user's signal is sufficient; full retrospective adds cost without changing the maintenance candidate. |
| Whether other project disciplines (`/comprehend`, `/innovate`) have similar artifact-canon issues. | Out of scope; pattern-level investigation is in the deferred items of the corrected inquiry. |
| Whether the project's discipline-taxonomy needs an explicit "canon" annotation per discipline. | Broader design question; out of scope here. |

### Jump-scan

Deliberately scanning directions not yet probed:

| Direction | Surface |
|---|---|
| **What if the check is too cheap to add — is there a reason NOT to add it?** | No structural reason against adding the check; the failure is real and recurring (user's "many before mvl inquiries" signal). |
| **What if the check moves the framing problem upstream — to /MVL+/branch_inquiry?** | This is L1 (the MVL+ pre-step option). Worth probing whether the user's question is asking for a /MVL+-level change vs a discipline-level change. User's text says "in one discipline or in MVL skill" — both options are user-acceptable. |
| **What if the user's term "half tried artifacts" should be the project-vocabulary term as-is, without renaming?** | Strong case — using user's term preserves their cognitive framing. Counter: "half tried" is colloquial; "phantom canon" is more diagnostic-vocabulary. Probably the finding should preserve user's term as the LAY name and add "phantom canon" as the TECHNICAL term. |
| **What about the previous corrected inquiry's PATTERN observation — that this is the second project pattern about meta-conditions on verification (sister to lesson-introduces-its-own-trap)?** | This finding's failure mode could be framed as a THIRD meta-condition pattern (Phantom Canon as artifact-canon-omission). Worth surfacing the three-pattern family in the finding. |

Jump-scan result: no new top-level regions; reinforced existing inventory. Frontier stable.

---

## Confidence Map

| Region | Confidence |
|---|---|
| **A1 — Framing-time commitment was the primary point** | **confirmed** — linguistic analysis of `_branch.md`s + structural comparison |
| **A2-A3 — Downstream stages inherited the commitment** | **confirmed** — by reading the docarchive outputs |
| **A4 — Upstream cascade from 2026-05-12_11-40 + /explore §1.5** | **scanned with high inference** — multiple upstream commitments anchor the spec-as-canon assumption |
| **A5 — Assistant's in-conversation argument pre-biased the inquiry** | **scanned** — partial; the assistant's argument was a contributor but the loop's framing-by-default is the structural issue |
| **B1-B3 — Corrected loop's anti-commitment structure** | **confirmed** — clean structural differences in `_branch.md` + exploration |
| **B4 — Sensemaking's stress-test caught downstream issues** | **confirmed** |
| **C.1 Failure mode name candidates** | **scanned** — multiple candidates; sensemaking adjudicates |
| **C.2 Maintenance candidate locations** | **scanned** — 6 candidates with pros/cons; sensemaking adjudicates the right layer or hybrid |
| **C.3 Risks** | **scanned** — 4 risks named with mitigations |
| **Whether the pre-step is general framing-clarification or specifically artifact-canon-status** | **scanned with medium confidence** — leans toward specifically-artifact-canon as a sub-step of general framing-clarification |

**Confirmed-absent:**

- **A single discipline as the unique failure surface.** Confirmed absent. The failure is at framing time (loop-level), inherited by multiple disciplines. Attribution is MIXED, leaning loop-framing.
- **An existing check in /explore or /sense-making that would have caught this.** Confirmed absent. Frame-exit-completeness handles TERMS; boundary-discovery handles UNKNOWN-boundary. Neither handles ARTIFACT-CANON-STATUS.

---

## Frontier State

**STABLE.** Three convergence criteria met:

1. Frontier stability — three cycles + jump-scan produced overlapping candidates; no new top-level regions.
2. Declining discovery rate — jump-scan surfaced only refinements (user-term-preservation; three-pattern-family note), not new operations.
3. Bounded gaps — remaining unknowns (retrospective across "many before inquiries"; other-disciplines pattern check) are interpolable from neighbors; deferred to future inquiry.

Jump-scan rule satisfied.

---

## Gaps and Recommendations

### Gaps

- Retrospective verification across "many before mvl inquiries" — out of scope; user's signal is sufficient for this finding.
- Whether the pre-step should be invoked only when artifacts are referenced as test-targets OR more broadly — sensemaking should adjudicate.
- Whether `Phantom Canon` or another name is the right project-vocabulary term — sensemaking adjudicates.

### Recommendations for downstream disciplines

- **Sensemaking** adjudicates: (a) the primary commitment point (A1 framing time; A2-A4 supporting); (b) the failure-mode name (Phantom Canon vs alternatives); (c) the maintenance-candidate location (L1-L6 single-layer vs hybrid); (d) the relationship to the previous inquiry's framing-clarification Research Frontier item.

- **Decomposition** partitions: (a) named failure mode definition; (b) signal/check/prevention triple; (c) maintenance candidate (location + diff); (d) project-vocabulary term; (e) evaluation gate; (f) relationship to the broader correction chain.

- **Innovation** generates concrete text: (a) the failure mode definition (per LOOP_DIAGNOSE Step 4 format); (b) maintenance candidate spec-edit text; (c) project-vocabulary term + sister-pattern note.

- **Critique** evaluates: (a) whether the maintenance candidate is over- or under-specified; (b) whether the evaluation gate is testable; (c) whether the failure mode name is operationally useful.

---

## Telemetry

**Base metrics:**
- Mode: artifact + possibility
- Entry point: signal-first
- Cycles run: 3 (artifact-comparison + commitment-point identification + maintenance-candidate generation) + 1 jump-scan
- Candidates generated: 5 commitment-points (A1-A5) + 4 anti-commitment structures (B1-B4) + 7 failure-mode names (N1-N7) + 6 maintenance candidate locations (L1-L6) + 4 risks (R1-R4) = 26 candidates
- Signals detected: 6 probed at D3; 3 deferred
- Resolution progression: D2 with D3 probes on commitment-point primary location, user-term preservation, and the framing-clarification-pre-step relationship
- Frontier state: stable
- Discovery rate: declining
- Convergence criteria status: frontier-stability YES, declining-discovery-rate YES, bounded-gaps YES
- Jump-scan performed: YES
- Failure modes checked: premature depth (avoided); surface-only scanning (avoided — D3 probes); false confidence (jump-scan done); premature termination (3 criteria met); re-exploration (frontier tracking); completeness bias (obvious-first: read prior + corrected inquiries before generating failure-mode names); open→closed drift (avoided — kept at labeling level); inadequate depth (D2 with D3 where needed).

**Self-assessment: PROCEED.**

The exploration identifies framing-time as the primary commitment point with downstream cascade; surfaces 7 failure-mode name candidates and 6 maintenance-candidate locations with pros/cons; confirms no existing check would have caught this case; provides risks with mitigations. Sensemaking can adjudicate the verdict-shape (which failure mode name; which maintenance candidate location or hybrid; what relationship to previous corrected inquiry's Research Frontier item).

**Initial verdict-direction (to be adjudicated):**

- Failure mode name: **Phantom Canon** (with user's "half-tried artifacts" preserved as the lay description)
- Affected stage: **Loop framing / context elicitation** (primary); /explore artifact-reading (secondary cascade)
- Confidence: **HIGH** that the framing-time commitment is the primary point
- Maintenance candidate: **L1 (MVL+ framing-clarification pre-step) + L4 (named failure mode in /explore §4.1)** — hybrid; pre-step catches at earliest point; named failure mode preserves recognition for cases where the pre-step is bypassed
- Pattern-name family note: this is the THIRD project pattern about meta-conditions on verification (sister to `2026-05-13_12-45`'s lesson-introduces-its-own-trap and `2026-05-14_00-26`'s framing-load-bearing-ness)
