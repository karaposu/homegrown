# Critique: Generic Discipline-Level Non-Ambiguity Convention

## User Input

devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/_branch.md

## Phase 0 — Dimensions With Weights

Dimensions extracted from sensemaking output (constraints + foundational principles + user pushback evidence):

### 1. Lightweight (compute load) — 25%

**Critical.** No per-output scan; no checklist; no audit step. Maximum: one short sentence per discipline.

### 2. Generic Coverage of Shorthand Types — 20%

**Critical.** Convention must cover all 6 observed shorthand types, not just cross-spec references.

### 3. Composition with Component A — 15%

**Critical.** E1 + E2 must compose cleanly without redundancy or gaps.

### 4. Discipline-Spec Purity — 10%

**Critical.** No embedded placement convention; no maintenance-time content; one-sentence preference is the upper bound.

### 5. Component A Status Verification — 5%

Edit 1 must verify Component A is currently absent and apply it.

### 6. SUPERSEDES Marker — 5%

Edit S-1 must mark prior `2026-05-08_06-30` finding as superseded.

### 7. Component B Rejection (Carried Forward) — 5%

Rejection rationale carried forward and structurally grounded.

### 8. Per-Type Verification — 5%

All 6 shorthand types verified covered.

### 9. Implementation Cost — 5%

Aggregate ≤ ~55 lines across 6 files.

### 10. User Constraint Honored — 5%

User's pushback ("non-ambiguity is generic, not narrow") visibly addressed.

**Critical dimensions (must pass for SURVIVE):** Lightweight, Generic Coverage of Shorthand Types, Composition with Component A, Discipline-Spec Purity.

## Phase 1 — Fitness Landscape

### Viable Region

Conventions that pass all 4 critical dimensions + verify Component A status + mark SUPERSEDES + carry forward Component B rejection + verify all 6 types + bounded cost + honor user constraint.

### Dead Region

- Conventions that introduce per-output checks/scans.
- Conventions that don't catch all 6 types.
- Conventions that conflict with Component A (duplication, gap).
- Conventions that exceed one sentence per discipline.
- Conventions with no SUPERSEDES update (leaves two findings competing).
- Conventions that drop Component B rejection without justification.

### Boundary Region

- E2's wording at 55 words (5 over the 50-word target). Boundary because the 5 extra words buy explicit type enumeration.
- The "niche term" recognition is judgment-dependent (same risk as the prior 2026-05-07_22-10 principle that originally failed). Boundary because the trade-off is the user's accepted constraint (lightweight).

### Unexplored Region

- Whether the convention should also live at runner-level preamble (MVL+/SKILL.md). Sensemaking resolved against this.
- Whether the convention should extend to other Homegrown spec types (protocols, contracts, navigation specs). Out of scope for this iteration.

## Phase 2 — Candidate Evaluation

### Candidate: Combined Fix (E1 + E2 + S-1 + C-1 + B-1)

**Prosecution (10 objections):**

1. **E2's "niche term" is judgment-dependent.** Same risk that doomed the prior 2026-05-07_22-10 principle. Why won't this fail the same way?

2. **E2's wording is 55 words, not the targeted ≤50.** Drift toward longer.

3. **The 5 illustrative type examples in E2 are project-specific** (`/MVL+`, `enes/`, "Probe component"). The convention itself is supposed to be generic / meta-discipline.

4. **E1 + E2 + S-1 + B-1 across 6 files is bigger** than the prior 2026-05-08_06-30 finding's ~5 lines. Are we re-inflating after rejecting Component B for being heavy?

5. **No verification mechanism.** Same as Component B critique — if the convention is ignored or misapplied, there's no detection.

6. **Cross-reference from E2 to Component A creates a maintenance dependency.** If Component A's example list is restructured, E2's pointer might dangle.

7. **5-place identical-text maintenance** for E2. When the convention is updated, all 5 must be updated.

8. **The 6-type taxonomy in Exploration is a snapshot.** Future shorthand types may emerge that don't fit any of the 6.

9. **Within-discipline references are still under-evidenced.** The failure evidence (`2026-05-07_20-35`'s finding) was exclusively cross-spec. Adding within-discipline coverage to the convention is preemptive, not evidence-based.

10. **The SUPERSEDES marker on `2026-05-08_06-30` may confuse future readers.** Two findings for what was originally one user push-back.

**Defense (12 rebuttals):**

1. **The judgment-dependence is reduced, not eliminated.** The prior 2026-05-07_22-10 principle was pure principle ("define niche terms briefly on first use"); the runner had to recognize "niche" subjectively without examples. E2 provides 5 illustrative type examples that ground the recognition. Component A's 4 examples at conclude.md provide additional pattern teaching. The cognitive load is lower than pure principle, even if not zero.

2. **55 words ≈ 50 words.** The 5 extra words buy explicit type enumeration that prevents the prior failure mode (subjective recognition). Word-count drift is minor; the wording is concrete.

3. **The illustrative type examples are illustrative, not prescriptive.** "(e.g., `/MVL+`, `enes/`)" is concrete grounding that helps the runner recognize the pattern. The convention's principle ("any niche term") is generic; examples ground without locking. If `/MVL+` is renamed in 5 years, the examples can be updated; the principle stays.

4. **E1 + E2 + S-1 + B-1 across 6 files = ~35-55 lines aggregate** is bigger than the prior 5-line narrow scope but covers 6x more cases. Per-case cost is dramatically lower (~6-9 lines per case vs the narrow scope's ~5 lines for 1 case). Net efficiency higher.

5. **No verification mechanism is THE FEATURE, not a bug.** Component B's verification mechanism is exactly what the user rejected. The convention's effect is write-time; verification at write-time would be a check-time regression. Component A's 4 examples teach pattern recognition for residual cases.

6. **The cross-reference dependency is one line.** If Component A is restructured, the cross-reference can be updated. This is a routine maintenance task, not a structural risk.

7. **5-place maintenance is real but bounded.** The convention's wording is stable (the "first-use parenthetical" principle isn't going away); update frequency is low. Approach 4 (cross-reference) keeps the example bank at one canonical home, so the convention itself rarely changes.

8. **The 6-type taxonomy is an EVIDENCE BASE, not a closed list.** The convention's principle ("any niche term") covers future types automatically. The illustrative examples in E2 can be extended if a 7th distinct type emerges. The principle is robust.

9. **Within-discipline coverage in E2 is precautionary AND structurally consistent.** Within-discipline references can be ambiguous when the discipline output is read by another agent (CONCLUDE compiling) or by a human reading docarchive. The principle naturally extends to within-discipline cases without firing on them when context is obvious. Net effect: minor increase in coverage; no false positives in clearly contextualized within-discipline references.

10. **SUPERSEDES is the corpus convention** for replaced findings. Two findings for one user push-back is correct: the first (2026-05-08_06-30) was wrong-scoped; this one (2026-05-08_07-15) corrects the scope. The SUPERSEDES marker prevents future readers from applying the wrong-scoped convention.

11. **All 4 critical dimensions HIGH:** Lightweight (one sentence; no scan); Generic Coverage (all 6 types; principle scales); Composition with Component A (clean cascade; cross-reference); Discipline-Spec Purity (one sentence; no embedded convention; no maintenance-time content).

12. **User constraint honored.** The user's correction ("non-ambiguity is generic, not narrow") is structurally addressed; their pushback against Component B (heavy regex) is preserved (B-1 carries the rejection forward).

**Collision:**

Strongest prosecution: objections 1 (judgment-dependence) and 4 (size inflation). Strongest defense: judgment-dependence is reduced via type enumeration + Component A examples; size inflation is justified by 6x coverage. Defense survives.

**Verification against critical dimensions:**

| Critical Dimension | Score | Rationale |
|---|---|---|
| Lightweight | HIGH | One sentence per discipline; no scan; no checklist; ~55 words within range |
| Generic Coverage | HIGH | All 6 shorthand types covered at write-time; principle scales to future types |
| Composition with Component A | HIGH | E2 cross-references E1's example bank; clean cascade; no duplication |
| Discipline-Spec Purity | HIGH | One sentence; no embedded convention; no maintenance-time content |

**Verification against secondary dimensions:**

| Dimension | Score |
|---|---|
| Component A Status Verification | HIGH (Exploration confirmed absent; E1 applies it) |
| SUPERSEDES Marker | HIGH (S-1 marks prior 2026-05-08_06-30 superseded) |
| Component B Rejection Carried Forward | HIGH (B-1 preserves 4 structural reasons) |
| Per-Type Verification | HIGH (all 6 types verified) |
| Implementation Cost | LOW-MEDIUM (~35-55 lines aggregate, biggest in series but justified by coverage) |
| User Constraint Honored | HIGH |

**Verdict: SURVIVE.**

Constructive output:

1. Apply E1 (Component A): insert 3 example pairs at `homegrown/protocols/conclude.md` line 73.
2. Apply E2 (generic convention): insert single sentence at end of SOLID INSTRUCTIONS in each of 5 discipline reference specs.
3. Apply S-1: update prior `2026-05-08_06-30` `_state.md` to SUPERSEDED.
4. DOCUMENT in this finding: C-1 (verification + cascade) + B-1 (Component B rejection carried forward).

Risk class: LOW. Evaluation gate: in next 3 MVL+ runs producing finding outputs with niche terms, the discipline outputs (in `docarchive/`) and the resulting `finding.md` show first-use parenthetical context for terms in any of the 6 shorthand types.

If the convention does not fire effectively in the next 3 runs (niche terms slip through both layers without first-use context), revive Component B's mechanical-check approach as a deferred fallback.

## Phase 3.5 — Assembly Check

The combined fix's components reinforce each other:

- E1 + E2 form the source-side + destination-side cascade.
- S-1 closes the prior 2026-05-08_06-30 finding cleanly.
- C-1 proves coverage of all 6 shorthand types.
- B-1 documents the rejected heavy alternative.

**Self-applying check:** this Critique uses td-critique on a refinement-of-refinement. Self-Reference Collapse defended via:
- Empirical: 10 observed failures from 2026-05-07_20-35 + 6-type taxonomy from corpus observation.
- Cross-discipline: dimensions extracted from sensemaking output (constraints + foundational principles + user pushback evidence), not from td-critique.md itself.
- Adversarial: 10 prosecution objections including size inflation, judgment-dependence, project-specific examples; 12 defense rebuttals; the strongest prosecution survived defense.

The convention itself, when applied to THIS finding's body, requires every niche term get first-use parenthetical. Self-test: the finding does name sources on first use throughout (e.g., "SOLID INSTRUCTIONS" with parenthetical context; "Probe component" with parenthetical context; "M6"/"TP3" with parenthetical context). PASS — this finding walks its own talk.

**Assembly verdict: SURVIVE.**

## Phase 3 — Ranked Verdicts

1. **SURVIVE: Combined fix (E1 + E2 + S-1 + C-1 + B-1).** Two edits + one state update + verification + Component B rejection carried forward.

2. **REJECT: Component B from prior `2026-05-07_22-10`** (carried forward). 4 structural reasons preserved.

3. **REJECT: Pure principle (no type enumeration in E2).** The prior 2026-05-07_22-10 principle was pure; it failed under embedded-vocabulary conditions. E2's type enumeration is the corrective.

4. **DOCUMENT (in finding):** verification table (per-type coverage); cascade composition; SUPERSEDES note for prior 2026-05-08_06-30; Component B rejection carried forward.

## Coverage Map

Evaluated:
- Combined assembly as a unit.
- Per-type verification: 6/6 covered.
- Per-dimension verification: 4 critical + 6 secondary all HIGH or LOW (cost) as expected.
- Component A status: confirmed absent; E1 applies it.
- SUPERSEDES update: confirmed needed.
- Component B rejection: 4 structural reasons preserved.
- Self-Reference Collapse: defended via 3-pronged grounding.

Unexplored but not blocking:
- Runner-level preamble placement (sensemaking resolved against).
- Extension to other Homegrown spec types (protocols, contracts) — out of scope for this iteration.

Coverage: sufficient.

## Signal

**TERMINATE with ranked survivor:**

1. SURVIVE: Combined fix (E1 Component A + E2 generic convention + S-1 SUPERSEDES + C-1 + B-1).
2. REJECT: Component B from prior 22-10 (carried forward).
3. REJECT: Pure principle without type enumeration.
4. DOCUMENT: verification + cascade + SUPERSEDES + rejection.

The user's question is answered: TWO actionable edits + ONE state update. The non-ambiguity problem is now addressed at both source-side (write-time generic convention at 5 discipline specs) and destination-side (compile-time 4-example bank at conclude.md). Prior narrow-scope finding (2026-05-08_06-30) is superseded with a SUPERSEDES marker. Component B remains rejected with rationale.

## Convergence Telemetry

- **Dimension coverage:** complete (10 dimensions; 4 critical + 6 secondary).
- **Adversarial strength:** STRONG (10 prosecution objections including size, judgment, project-specific examples; 12 defense rebuttals; strongest objections survived).
- **Landscape stability:** STABLE.
- **Clean SURVIVE:** YES (all 4 critical dimensions HIGH).
- **Failure modes observed:** NONE.
  - Wrong Dimensions: NO.
  - Rubber-Stamping: NO (genuine prosecution).
  - Nitpicking: NO (defense for every objection).
  - Dimension Blindness: NO (10 dimensions covering all evaluation axes).
  - False Convergence: NO.
  - Evaluation Drift: NO (consistent with sister-analyses' weighting).
  - Self-Reference Collapse: NO (3-pronged external grounding).
- **Overall: PROCEED.**
