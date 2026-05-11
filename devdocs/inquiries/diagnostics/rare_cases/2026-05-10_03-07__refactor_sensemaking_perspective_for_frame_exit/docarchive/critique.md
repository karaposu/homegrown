# Critique: Refactor a Sensemaking perspective into 2 to catch frame-exit?

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/_branch.md`

The drill-down asked: refactor candidate? split? non-hurt? recommendation? Innovation committed P1 (refactor design with drafted spec text + gating predicate), P2 (non-hurt argument), P3 (refactor vs M7 comparison), P4 (commitment + recommendation, DEFERRED).

---

## Phase 0 — Dimension Construction

### Evaluation Dimensions

| # | Dimension | Source | Weight |
|---|---|---|---|
| D1 | **Correctness** — does the design actually solve frame-scope capture? | Sensemaking M1 (gap is real) | HIGH |
| D2 | **Source-document fidelity** — are citations to spec text accurate? | Sensemaking C-D1 | HIGH |
| D3 | **Maintenance-overreach avoidance** — Step 5 honored? | Sensemaking P3 | HIGH |
| D4 | **Substantive-vs-cosmetic** — is the refactor genuinely substantive (not just renaming)? | Sensemaking Ambiguity #1 | HIGH |
| D5 | **Specification operability** — spec text + gating predicate operationally clear? | Decomposition determination-mechanism check | HIGH |
| D6 | **Self-reference resistance** — design tested via meta-application? | Sensemaking C5 | HIGH |
| D7 | **Generic-capability preservation** — non-hurt verified? | User MUST condition (b) | HIGH |
| D8 | **Coherence with prior diagnostic chain** | Continues-from relationship | MEDIUM-HIGH |
| D9 | **Cost vs benefit** | Default | MEDIUM |
| D10 | **Elegance / spec parsimony** | Default | MEDIUM |

### Project-specific risk dimension check

The candidate involves a project artifact (the Sensemaking spec at `homegrown/sense-making/references/sensemaking.md`). Project-specific risks covered: D2 source-fidelity, D3 maintenance-overreach, D4 substantive-vs-cosmetic (project's "renaming dressed as refactor" risk), D5 specification operability, D6 self-reference resistance, D7 non-hurt. Coverage: present.

### Burden of proof

**HIGH STAKES** — proposes spec edits to a load-bearing project file. Defense must demonstrate clear viability.

---

## Phase 1 — Landscape Construction

### Viable region

A candidate is viable when:
- Passes D1 (design actually closes the frame-scope-capture gap).
- Passes D2 (spec citations match real text).
- Passes D3 (commitment is DEFERRED per Step 5 from N=1 evidence).
- Passes D4 (refactor is substantive — bundles renaming + gating + scope-clarification).
- Passes D5 (spec text + gating operationally clear).
- Passes D6 (design is self-applicable; meta-application produces meaningful results).
- Passes D7 (gating auto-skips on non-frame-bounded; non-hurt verified).

### Dead region

- Fails D2 (fabricated spec text).
- Fails D3 (ships from N=1).
- Fails D4 (refactor is just renaming).
- Fails D7 (gating fires spuriously on non-frame-bounded).

### Boundary region

- D5 partial — spec text examples could be tighter on "multi-value" definition.
- D9 partial — small spec edit cost is favorable but its benefit depends on audit confirming recurrence.

---

## Phase 2 — Adversarial Evaluation

### P1 — Refactor design (drafted spec text + gating predicate)

**Prosecution.**
- *D5 specification operability:* the gating predicate's "≥2 distinct values" threshold is somewhat arbitrary. What if a term appears in 2 cells of a 3-row table but the cells happen to share the same meaning (just elaborate the term differently)? Is that "multi-value"? The threshold-plus-distinct-meanings test is unclear without explicit examples.
- *D4 substantive-vs-cosmetic (Internal Consistency sub-perspective):* this sub-perspective is essentially the existing D/C with "WITHIN the inquiry's frame" added. Is that substantive? The 3 jobs are unchanged.
- *D2 source-document fidelity:* the drafted spec text has good fidelity to the existing D/C wording. No fabrication.

**Defense.**
- *D4 substantive defense:* the substantive change is the SPLIT itself + the new gating-conditioned Frame-exit Completeness sub-perspective. Internal Consistency is intentionally close-to-existing (preserves capability); the substantive part is the second sub-perspective + the scope marker. Per Sensemaking Ambiguity #1: "renaming + gating + scope-clarification together IS substantive."
- *D5 defense:* "≥2 distinct values" is a reasonable threshold; "distinct" is implicit but should be made explicit in spec-text examples. The gating's conjunctive structure (AND) tightens application even when individual conditions are interpretively loose.
- *D1 correctness:* the design closes the frame-scope-capture gap by making frame-exit a first-class operation gated on the conditions where it's needed.
- *D6 self-reference resistance via meta-application:* applying the drafted Frame-exit Completeness to THIS inquiry — does it have inherited multi-value terms + organizing frames? YES (the 8 Sensemaking perspectives are inherited; multi-value across the perspective list). The check fires. It asks: does "Sensemaking spec" have project-wide referents the inquiry's frame excludes? YES — Phase 1 anchors, Phase 3 ambiguity collapse, Phase 4 DOF, Phase 5 stabilization, failure modes. The inquiry's `_branch.md` explicitly bounded scope to Phase 2 perspectives only. Meta-application produces meaningful, non-trivial result: identifies that this inquiry's analysis is bounded (which is correct) and surfaces the broader question (which is acknowledged in Exploration's "What was NOT explored"). **Self-reference test passes substantively.**

**Collision.**
- The "≥2 distinct values" concern is addressable via clearer spec-text examples + replacement "≥2 distinct values, where 'distinct' means used to assert different propositions in different cells/levels." Add this clarification.
- Internal Consistency's near-identity to existing D/C is BY DESIGN — preserves existing capability. The split's substantive change is in the second sub-perspective. Defense holds.

**Verdict: SURVIVE with caveat.** Add the "distinct values" clarification to the drafted spec text.

**Constructive output:**
- In P1's Frame-exit Completeness gating, replace "≥2 distinct values" with "≥2 distinct values, where 'distinct' means used to assert different propositions in different cells/levels (NOT multiple occurrences of the same proposition)."
- Add a positive example to spec text: "Memory at L0 'human (mental)' vs Memory at L1 'system writes navigation_observer.md' = distinct propositions; multi-value fires."
- Add a negative example: "function-name 'authenticate' appearing in 2 call sites with same meaning = NOT distinct propositions; multi-value does not fire."

---

### P2 — Non-hurt argument

**Prosecution.**
- *D7 non-hurt with adversarial example:* the argument's examples (code review, bug diagnosis, strategic decision, research question) are reasonable but cherry-picked. Adversarial: what about a code review where the function uses a class name from a prior PR AND the function has multiple call sites in different files? Could the gating fire spuriously?
- *D5 operability:* "multi-value" is operationalized but the scope ("within the inquiry's commitments") is implicit, not explicit in spec text.

**Defense.**
- *D7 defense via scope clarification:* "multi-value" is operationalized as values within the INQUIRY's commitments (multi-row tables, ladders, axes, taxonomies). Code review's call sites aren't commitments OF the inquiry; they're ARTIFACTS the inquiry analyzes. The gating wouldn't fire.
- *Empirical-validation path is specified:* monitor next 5 Sensemaking outputs across inquiry types post-revival; calibrate.

**Collision.**
- Prosecution's adversarial example has merit IF "multi-value" is loosely interpreted. The defense's scope-clarification (commitments-of-the-inquiry vs artifacts-the-inquiry-analyzes) is correct but should be EXPLICIT in spec text.

**Verdict: SURVIVE with caveat.** Add the "within the inquiry's commitments" scope clarification to spec text.

**Constructive output:**
- In P1's gating predicate, after "used across multiple values/levels," add: "(within the inquiry's own committed structures: multi-row tables, ladders, axes, taxonomies — NOT in artifacts the inquiry analyzes)."

---

### P3 — Refactor vs M7 comparison

**Prosecution.**
- *D8 coherence:* the comparison's "structurally equivalent" claim is verifiable behaviorally. The conceptual preference for refactor is somewhat soft — "honors D/C's existing broad spec" is a stylistic argument, not a hard structural one.

**Defense.**
- *Honesty in framing:* P3 explicitly acknowledges M7 as defensible alternative; ranks refactor first but allows M7. The recommendation isn't forcing refactor.
- *D2 fidelity:* the Domain Transfer evidence (consistency-vs-completeness as field-coherent distinction) provides external grounding for the refactor framing.

**Collision.**
- The "stylistic argument" concern is mild; honest comparison preserves user choice. Defense holds.

**Verdict: SURVIVE.** Comparison is balanced and honest.

---

### P4 — Commitment + Recommendation (DEFERRED)

**Prosecution.**
- *D3 maintenance-overreach interpretation:* deferring per Step 5 from N=1 might be overcautious for a small spec edit. The literal Step 5 phrase is "do not propose broad fundamentals rewrites" — a small spec edit isn't strictly "broad."
- *D9 cost-benefit:* the spec edit's cost is small; the benefit (closing primary mechanism) is substantial. Cost-benefit favors shipping, not deferring.

**Defense.**
- *Step 5 spirit:* the spirit is precaution against over-fitting from N=1. Even small edits to load-bearing project files (the Sensemaking spec is exactly that) carry the precaution. The user explicitly asked for caution: *"only if it is a real missing thing, and if it is not gonna be hurt sensemaking's generic capability for sure."*
- *Audit as calibration:* the M4 audit IS the project's evidence-discipline mechanism. Bypassing it would undermine the protocol the project itself defines.
- *Coherence with prior diagnostic:* the prior loop_diagnose finding deferred M2 + M3 (analogous spec edits) for the same N=1 reason. Refactor follows the same precedent.

**Collision.**
- Step 5 spirit + user's caution + prior precedent all support DEFERRED. Defense wins on spirit-of-the-protocol grounds.

**Verdict: SURVIVE.** DEFERRED is the right commitment-status given Step 5 spirit + user's explicit caution.

---

### Self-reference collapse check (failure mode #7)

This critique evaluates an Innovation that drafts Sensemaking spec edits. The drafted edit IS a Sensemaking-Phase-2 spec change. So the critique is using critique's framework to evaluate a sensemaking-spec-redesign. Risk is acute.

**Mitigation evidence:**
1. **Meta-application of the drafted design produces non-trivial result.** Applying Frame-exit Completeness to THIS inquiry: gating fires (inherited multi-value terms + organizing frames present), check returns "Sensemaking spec has project-wide referents — Phase 1, 3, 4, 5, failure modes — outside this inquiry's Phase-2 frame." This is a real, falsifiable result, not trivial validation.
2. **External anchoring at every claim:** spec-text citations to `homegrown/sense-making/references/sensemaking.md` lines; prior-finding citations.
3. **Refused trivial clean SURVIVE:** P1 + P2 received caveats requiring spec-text refinement.
4. **Step 5 restraint applied:** P4 deferred; not committed from N=1.

Self-reference collapse: **NOT observed.**

---

## Phase 3.5 — Assembly Check

The 4 pieces compose into the recommendation:
- P1 (refactor design) provides the structural answer with drafted spec text.
- P2 (non-hurt argument) verifies user MUST condition (b).
- P3 (vs M7) verifies the choice respects user preference for refactor.
- P4 (commitment + recommendation) defers per Step 5; specifies revival.

**Assembly emergent property:** the user gets a complete refactor proposal — design, draft spec text, non-hurt verification, M7 comparison, deferral, revival trigger — addressable as a single update to the prior loop_diagnose finding's deferred-candidates list.

**Assembly's adversarial test.**
- *Coverage gap:* does the assembly address user's actual question? User asked: refactor candidate? non-hurt? recommendation respect MUST conditions? Assembly directly addresses each. No gap.
- *Self-reference at assembly level:* the assembly is sensemaking-spec-redesign analyzed via sensemaking + critique. Three meta-levels. Mitigation: meta-application of design + spec-text external anchoring + refused trivial SURVIVE.

**Assembly verdict: SURVIVE with 2 caveats applied** (P1's "distinct values" clarification + P2's "within the inquiry's commitments" scope clarification).

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage map

- All 4 pieces evaluated against 10 dimensions.
- 7 critical-weight dimensions all checked.
- Multi-axis prosecution depth applied: user-perspective (P3, P4), specific failure-case (P2 adversarial code-review example), specification-gap probe (P1, P2 spec-text-clarification needs).

### Convergence assessment

- At least one SURVIVE without critical caveat? **YES** — P3, P4 SURVIVE clean.
- New candidates landing in already-mapped regions? **YES.**
- Landscape stable? **YES.**
- Decreasing rate of new information? **YES.**

### Failure-mode self-check

| Failure mode | Observed? | Notes |
|---|---|---|
| Wrong dimensions | NO | Phase 0 validated against project-specific risks. |
| Rubber-stamping | NO | P1 + P2 received caveats; not all clean. |
| Nitpicking | NO | No KILLs; severity-weighted. |
| Dimension blindness | Mitigated | D2 + D3 + D4 + D5 + D6 + D7 explicit. |
| False convergence | NO | Convergence criteria met. |
| Evaluation drift | N/A | First iteration. |
| Self-reference collapse | **Acute risk acknowledged + mitigated.** Meta-application of design produces non-trivial result; external anchoring + caveat application; Step 5 restraint. |

---

## Final Deliverable

### (a) Dimensions with weights

| # | Dimension | Weight |
|---|---|---|
| D1 | Correctness | HIGH |
| D2 | Source-document fidelity | HIGH |
| D3 | Maintenance-overreach avoidance | HIGH |
| D4 | Substantive-vs-cosmetic | HIGH |
| D5 | Specification operability | HIGH |
| D6 | Self-reference resistance | HIGH |
| D7 | Generic-capability preservation | HIGH |
| D8 | Coherence with prior diagnostic chain | MEDIUM-HIGH |
| D9 | Cost vs benefit | MEDIUM |
| D10 | Elegance / spec parsimony | MEDIUM |

### (b) Fitness Landscape

- **Viable (clean):** P3 (vs M7 comparison), P4 (commitment + recommendation).
- **Boundary (caveat applied):** P1 (refactor design — add "distinct values" + "within commitments" clarifications), P2 (non-hurt argument — same scope clarifications).
- **Dead:** empty.
- **Unexplored:** whether the same refactor analysis applies to other Sensemaking spec sections (out of scope per `_branch.md`).

### (c) Candidate Verdicts

| ID | Verdict | Constructive output |
|---|---|---|
| P1 (refactor design + drafted spec text) | SURVIVE w/ caveat | Add "distinct values" clarification + "within the inquiry's commitments" scope clarification to spec text. Specify positive (Memory) and negative (function-name) examples. |
| P2 (non-hurt argument) | SURVIVE w/ caveat | Same scope clarification as P1; references the same spec text. |
| P3 (refactor vs M7 comparison) | SURVIVE | Balanced and honest; M7 acceptable alternative preserved. |
| P4 (commitment + recommendation) | SURVIVE | DEFERRED per Step 5 spirit; revival = M4 audit ≥3 instances. |
| **Assembly** | SURVIVE w/ 2 caveats applied | Apply caveats during finding compilation; no structural changes. |

### (d) Coverage map

- 4 pieces × 10 dimensions evaluated.
- Self-reference resistance: meta-application of design tested.
- Multi-axis prosecution: user-perspective, specific failure-case, spec-gap probe.

### (e) Signal: TERMINATE with caveats applied

**TERMINATE.** Convergence reached. Apply the 2 spec-text caveats during finding compilation.

**Ranked survivors:**
1. P3 (vs M7) — clean SURVIVE.
2. P4 (commitment) — clean SURVIVE.
3. P1 (refactor design) — SURVIVE with 1 caveat (spec-text clarifications).
4. P2 (non-hurt) — SURVIVE with same caveat.

---

## Convergence Telemetry

- **Dimension coverage:** 10/10 dimensions; 7 HIGH critical-weight.
- **Adversarial strength:** STRONG. P1 + P2 received caveats from concrete prosecution (adversarial code-review example, threshold ambiguity).
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES (P3, P4).
- **Failure modes observed:** NONE blocking. Self-reference collapse risk explicitly mitigated.
- **Overall: PROCEED.** Apply 2 caveats during finding compilation.
