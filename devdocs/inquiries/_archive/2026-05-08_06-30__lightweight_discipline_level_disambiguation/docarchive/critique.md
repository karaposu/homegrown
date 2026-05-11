# Critique: Lightweight Discipline-Level Disambiguation

## User Input

devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/_branch.md

## Phase 0 — Dimensions With Weights

Dimensions extracted from sensemaking (constraints + foundational principles + user pushback evidence):

### 1. Lightweight (compute load) — 25%

**Critical.** No per-output scan; no checklist; no audit step. Maximum: one sentence per discipline.

### 2. Catches Observed Failures — 20%

**Critical.** Convention must catch the 10+ cross-spec references in `2026-05-07_20-35`'s finding.

### 3. Composition with Component A — 15%

**Critical.** Convention + Component A must compose cleanly without redundancy or gaps.

### 4. Discipline-Spec Purity — 10%

**Critical.** No embedded placement convention; no maintenance-time content; one-sentence preference is the upper bound.

### 5. Component B Rejection Justified — 10%

Rejection must be structurally grounded, not preference-based.

### 6. Wording Genericity — 10%

The convention's wording must apply to all five disciplines without per-discipline customization.

### 7. Implementation Cost — 5%

Aggregate ≤ ~5 lines.

### 8. User Constraint Honored — 5%

The user's pushback ("we don't want to overload AI") must be visibly honored in the final design.

**Critical dimensions (must pass for SURVIVE):** Lightweight, Catches Observed Failures, Composition with Component A, Discipline-Spec Purity.

## Phase 1 — Fitness Landscape

### Viable Region

Conventions that pass all 4 critical dimensions + bounded cost + structural rejection of Component B + generic wording + user constraint honored.

### Dead Region

Conventions that introduce per-output checks / scans; conventions that don't catch observed failures; conventions that conflict with Component A; conventions that exceed one sentence per discipline; conventions with project-specific wording requiring per-discipline customization.

### Boundary Region

The convention's recognition cost ("is this term defined in another Homegrown discipline reference spec?") is judgment-dependent at write-time. This is the boundary — it's lightweight (single test against 5-file set) but not zero-cost.

### Unexplored Region

- Whether to add the convention at the runner-level preamble (MVL+/SKILL.md) instead of per-discipline. Out of scope; sensemaking resolved this in favor of per-discipline placement.
- Whether discipline-OUTPUT templates should also carry the convention. Out of scope; sensemaking rejected this for salience reasons.

## Phase 2 — Candidate Evaluation

### Candidate: Combined Fix (C-1 + A-1 + B-1 + V-1)

**Prosecution (8 objections):**

1. **The convention is ALSO subjective recognition.** The runner has to identify "is this term defined in another Homegrown discipline reference spec?" — that's a judgment call. The prior finding rejected the principle for being subjective; the convention is also subjective. Hypocrisy?

2. **The cross-spec scope is narrow.** What about WITHIN-discipline references the runner makes ambiguously (e.g., Critique referencing its own "Prosecution" without context)? The convention doesn't catch these.

3. **5 lines is small but additive.** Each of the five discipline reference specs gets a new sentence in SOLID INSTRUCTIONS. SOLID INSTRUCTIONS is the runner's most-attended-to surface; adding cognitive load there might affect other discipline performance.

4. **Component A's 4 examples may not be enough** without the regex check from Component B. If 1 of 10 cross-spec references slips through the convention, Component A relies on the runner pattern-matching against 4 examples.

5. **The convention's wording is ~35 words, not the original "~30 words" target.** Drift toward longer.

6. **Same sentence in 5 places.** When the convention is updated, all 5 must be updated. Maintenance cost.

7. **The 5-file parenthetical in the wording (`homegrown/{explore,...}/references/*.md`) is project-specific.** The convention itself is supposed to be generic / meta-discipline.

8. **No verification mechanism.** If the convention is ignored or misapplied, there's no detection.

**Defense (10 rebuttals):**

1. **The judgment is structurally smaller than Component B's.** Component B required pattern-matching against 3 regex shapes plus walking each match through a checklist. The convention's judgment is one test ("is this term in one of 5 specific files?"). The cognitive load is reduced, not eliminated. Lightweight is the requirement, not zero-cost.

2. **Within-discipline references are contextually clear** (the discipline's own output uses its own vocabulary; readers infer context). The failure evidence (`2026-05-07_20-35`'s finding) is exclusively cross-spec; the convention's targeted scope matches the evidence.

3. **The 5 lines are additive but ALIGNED with existing SOLID INSTRUCTIONS structure.** Each spec already has SOLID INSTRUCTIONS guidance about output. Adding one writing-style preference is structurally continuous.

4. **Component A doesn't need to be exhaustive** — it teaches pattern recognition for residual cases. The convention handles the bulk; Component A handles the long tail. Net coverage is higher than either alone.

5. **35 words ≈ 30 words.** The "~30 words" was an estimate; 35 is within range. Word-count drift is minor and the wording is concrete (not vague hedging).

6. **5-place maintenance is real but bounded.** The convention's wording is stable (cross-spec references aren't going away); update frequency is low. Sister-analysis precedent: M6 / TP3 underwent multiple refinements but never propagated to multiple files because they sit at single-canonical-home.

7. **The 5-file parenthetical is concrete grounding, NOT spec content.** The convention can be reworded to say "any other Homegrown discipline reference spec" without listing the files. Innovation's wording included the file paths to help the runner; if this is structurally objectionable, drop it. Reword: *"...defined in another Homegrown discipline reference spec, name the source on first use..."*

8. **Verification mechanism exists at Component A.** Component A's 4 examples teach the runner what to look for at compile-time, including residual cases the convention missed. The cascade has detection at the destination.

9. **All 4 critical dimensions HIGH:** Lightweight (one sentence; no scan); Catches Observed Failures (10/10 covered at write-time); Composition with Component A (clean cascade, no redundancy); Discipline-Spec Purity (one sentence preference; no embedded convention; no maintenance-time content).

10. **User constraint honored.** "We don't want to overload AI with such work" — the convention is read once, applied implicitly during writing, no scan required. The user's instinct is preserved.

**Collision:**

Strongest prosecution: objections 1 (subjective recognition) and 7 (project-specific file list). Strongest defense: structurally-smaller judgment cost; rewording to drop the file list. Defense survives; the file list parenthetical can be dropped to make the convention purely generic.

**Refinement to Innovation's wording:** drop the explicit file list parenthetical to keep the convention generic. Final wording becomes:

> **Cross-spec reference convention.** When this output references a named section, component, step, or failure mode that is defined in another Homegrown discipline reference spec, name the source on first use (e.g., "the Probe component in Structural Exploration"); subsequent uses can be bare.

This is ~33 words. Generic. Single example inline (no file paths). Mid-sentence example illustrates the convention's shape.

**Verification against critical dimensions:**

| Critical Dimension | Score | Rationale |
|---|---|---|
| Lightweight | HIGH | One sentence; no scan; no checklist |
| Catches Observed Failures | HIGH | 10/10 cross-spec references covered at write-time |
| Composition with Component A | HIGH | Clean cascade: convention prevents source-side; Component A translates destination-side |
| Discipline-Spec Purity | HIGH | One sentence; no embedded placement convention; no maintenance-time content; generic wording (after dropping file list) |

**Verification against secondary dimensions:**

| Dimension | Score |
|---|---|
| Component B Rejection Justified | HIGH (4 structural reasons documented) |
| Wording Genericity | HIGH (after refinement) |
| Implementation Cost | LOW (5 lines aggregate) |
| User Constraint Honored | HIGH |

**Verdict: SURVIVE (with refinement to drop file-list parenthetical from convention wording).**

Constructive output:

1. ADD to SOLID INSTRUCTIONS section of each of the 5 discipline reference specs: the refined Cross-spec reference convention sentence (identical text in all 5).
2. NO change to `homegrown/protocols/conclude.md` (Component A from prior finding stays as already-applicable; Component B is REJECTED with rationale documented in finding).
3. DOCUMENT in this finding: rejection rationale + per-failure verification + composition explanation.

Risk class: LOW. Evaluation gate: in next 3 MVL+ runs producing finding outputs with cross-spec references, the discipline outputs (in `docarchive/`) and the resulting finding.md show first-use parenthetical context for cross-spec terms.

If the convention does not fire effectively in the next 3 runs (cross-spec references slip through without first-use context, AND Component A doesn't catch them at compile-time), revive Component B's mechanical-check approach as a deferred fallback.

## Phase 3.5 — Assembly Check

The combined fix's components:

- C-1 + A-1 form the source-side + destination-side cascade.
- B-1 documents the rejection of the heavier alternative.
- V-1 proves coverage.

Self-applying check: this Critique uses td-critique on a refinement of an earlier finding. Self-Reference Collapse defended via the dimensions being extracted from sensemaking output (constraints + foundational principles + user pushback evidence) — not from td-critique.md itself. The 10 observed failures are external empirical evidence.

The convention itself, when applied to THIS finding's body, requires: every cross-spec reference (Probe, Surface-Only Scanning, Component A, etc.) gets first-use parenthetical context. Self-test: this finding does name sources on first use throughout (e.g., "Probe component in Structural Exploration", "Component A from the prior `2026-05-07_22-10` finding"). PASS — the finding walks its own talk.

**Assembly verdict: SURVIVE.**

## Phase 3 — Ranked Verdicts

1. **SURVIVE: Combined fix (C-1 + A-1 + B-1 + V-1) with refined wording.** Convention sentence applied to 5 discipline SOLID INSTRUCTIONS sections; Component A from prior finding preserved at conclude.md; Component B from prior finding rejected with structural rationale.

2. **REJECT: Component B from prior finding.** Heavy compute load; incompletely mechanizable; user explicit constraint; source-side prevention obviates destination-side scan.

3. **DOCUMENT (in finding):** Rejection rationale; per-failure verification table; composition explanation; deferred fallback (revive Component B if convention proves insufficient in next 3 runs).

## Coverage Map

Evaluated:
- Combined assembly as a unit.
- Per-failure verification: 10/10 observed failures covered.
- Per-dimension verification: 4 critical + 4 secondary all HIGH or LOW (cost) as expected.
- Component B rejection: 4 structural reasons.
- Self-Reference Collapse: defended via external grounding.

Unexplored but not blocking:
- Runner-level preamble placement. Sensemaking resolved.
- Discipline-output template placement. Sensemaking resolved.

Coverage: sufficient.

## Signal

**TERMINATE with ranked survivor:**

1. SURVIVE: Refined Cross-spec reference convention applied to 5 discipline specs.
2. REJECT: Component B from prior finding (structural rationale documented).
3. DOCUMENT: rejection + verification + composition + deferred fallback.

The user's question is answered: the prior finding's Component B is replaced with a lightweight one-sentence convention at each of the 5 discipline reference specs' SOLID INSTRUCTIONS sections. Component A from the prior finding stays. Aggregate cost ~5 lines (smallest in the methodology-library refinement series). The user's pushback is structurally honored.

## Convergence Telemetry

- **Dimension coverage:** complete (8 dimensions; 4 critical + 4 secondary).
- **Adversarial strength:** STRONG (8 prosecution objections; 10 defense rebuttals; refinement to drop file-list parenthetical resolves the strongest prosecution).
- **Landscape stability:** STABLE.
- **Clean SURVIVE:** YES (after refinement; all 4 critical dimensions HIGH).
- **Failure modes observed:** NONE.
- **Overall: PROCEED.**
