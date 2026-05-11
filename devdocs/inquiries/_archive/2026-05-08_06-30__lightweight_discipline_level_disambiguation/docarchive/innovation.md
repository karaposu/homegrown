# Innovation: Lightweight Discipline-Level Disambiguation

## User Input

devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/_branch.md

## Phase 1 — Seed

Sensemaking + Decomposition stabilized: ONE shared sentence, FIVE placements (one per discipline), SOLID INSTRUCTIONS section. Innovation finalizes wording.

**Seed type:** Refinement of prior finding (Component B rejected; lightweight alternative needed) + Constraint (no scan, no checklist, no audit; ~30 words max).

**Direction:** the user's framing is structurally correct — write-time prevention is lighter than check-time enforcement. Innovation produces concrete sentence wording + verification + cascade explanation.

## Phase 2 — Generate (7 Mechanisms × 3 Variations Each)

### Mechanism 1: Combination (Generator)

**Generic:** Combine source-side prevention (discipline convention) + destination-side translation (Component A) into a unified "Cross-Spec Vocabulary" rule.

**Focused:** Compose the convention with Component A as orthogonal layers — convention shapes writing, Component A teaches pattern recognition for translation. Both stay independent.

**Contrarian:** Combine into a single comprehensive document at conclude.md. Reject — that's regression to centralization.

**Surviving:** focused composition (convention at disciplines + Component A at CONCLUDE).

### Mechanism 2: Absence Recognition (Generator)

**Generic:** What's missing is source-side reduction. The disciplines write the vocabulary; intervening at the writer is closer to the source than at the compiler.

**Focused:** A single sentence in SOLID INSTRUCTIONS prescribing first-use parenthetical for cross-spec references is the minimum-viable intervention that addresses the source.

**Contrarian:** What's missing is a glossary embedded in each spec. Reject — heavy.

**Surviving:** focused absence (one sentence, source-side).

### Mechanism 3: Domain Transfer (Generator)

**Generic:** Transfer from technical writing — style guides advise authors to define abbreviations on first use. Same shape applies here.

**Focused:** Transfer from API documentation — link to definition on first reference; subsequent references can be bare. Same convention.

**Contrarian:** Transfer from formal verification — every term must have a typed definition. Reject — heavy.

**Surviving:** focused transfer reinforces the first-use convention.

### Mechanism 4: Extrapolation (Generator)

**Generic:** As the methodology library grows, more cross-spec references will be written. The convention scales linearly — applied at write-time it cost-amortizes.

**Focused:** If the convention is added now, future spec additions to ANY discipline benefit immediately without modifying the convention.

**Surviving:** focused extrapolation supports the convention's stable shape.

### Mechanism 5: Lens Shifting (Framer)

**Generic:** Under the current frame (Component B as the only check), the user's pushback is correct. Under the new frame (write-time convention + Component A as catch-net), the same goal is achieved with less load.

**Focused:** Discipline-level convention is write-time; Component A is compile-time; together they're load-balanced.

**Surviving:** focused lens confirms the cascade structure.

### Mechanism 6: Constraint Manipulation (Framer)

**Generic:** Add the constraint that the convention must fit in ≤30 words.

**Focused:** Add constraints: (a) one sentence, (b) cross-spec only, (c) no examples baked in (examples live at Component A), (d) no post-write check.

**Contrarian:** Remove the cross-spec-only constraint. Apply convention to ALL named terms. Reject — within-discipline references are contextually clear; over-firing.

**Surviving:** focused constraint set finalizes the wording shape.

### Mechanism 7: Inversion (Framer)

**Generic:** "Disciplines write internally-referential vocabulary" → invert to "disciplines write with first-use disambiguation for cross-spec references."

**Focused:** "Component B catches at compile-time" → invert to "convention prevents at write-time." Same goal, different layer.

**Contrarian:** "Disciplines should be cold-readable" → invert to "disciplines remain working documents; the cold-readable surface is finding.md." This reinforces the placement decision.

**Surviving:** focused inversion confirms the write-time layer.

## Mechanism Outputs Summary

| Mechanism | Surviving variation | Contribution |
|---|---|---|
| Combination (G) | Focused: orthogonal composition | Convention + Component A as separate layers |
| Absence Recognition (G) | Focused: minimum-viable source-side | One sentence prevents at source |
| Domain Transfer (G) | Focused: technical-writing first-use | Reinforces first-use convention |
| Extrapolation (G) | Focused: scales linearly | Stable shape for future spec additions |
| Lens Shifting (F) | Focused: load-balanced cascade | Write-time + compile-time |
| Constraint Manipulation (F) | Focused: ≤30 words, no examples, no check | Finalizes wording shape |
| Inversion (F) | Focused: write-time over check-time | Confirms the layer decision |

**Convergence:** Six of seven mechanisms point to a one-sentence write-time convention at the discipline level. HIGH convergence.

## Phase 3 — Test (5 criteria per surviving candidate)

### Candidate C-1 — Convention Wording + Per-Discipline Placement

**Concrete final wording** (single sentence; ~35 words; identical text to be inserted in the SOLID INSTRUCTIONS section of each of the five discipline reference specs):

> **Cross-spec reference convention.** When this output references a named section, component, step, or failure mode that is defined in another Homegrown discipline reference spec (`homegrown/{explore,sense-making,decompose,innovate,td-critique}/references/*.md`), name the source on first use (e.g., "the Probe component in Structural Exploration"); subsequent uses can be bare.

**Placement instruction:** insert this single bolded paragraph in the SOLID INSTRUCTIONS section of each of the five discipline reference specs. Identical text in all five.

**Tests:**

- **Novelty:** new write-time convention; no equivalent currently in any discipline spec. NOVEL.
- **Scrutiny survival:** strongest objection — *"runner has to recognize 'defined in another Homegrown discipline reference spec.'"* Defense — the parenthetical in the convention names the five specific files; the recognition is "is this term defined in one of these five specs?" — a small known set. Manageable cognitive load. SURVIVES.
- **Fertility:** opens SOLID INSTRUCTIONS as a structural surface for write-time conventions; future writing-style preferences can be added the same way. FERTILE.
- **Actionability:** runner reads the convention at discipline startup → applies it implicitly during writing. No checklist, no scan. Deterministic in the sense that it's a writing-style preference applied during normal output generation. ACTIONABLE.
- **Mechanism independence:** 6 mechanisms converge. HIGH.

**VERDICT: SURVIVES.**

### Candidate A-1 — Component A Preservation

Component A from the prior `2026-05-07_22-10` finding stays. Its 4 expanded examples in the non-ambiguity principle's example list at `homegrown/protocols/conclude.md` provide pattern teaching for cold-readability translation at compile-time.

**Tests:** SURVIVES (already-applicable lightweight; not modified by this finding).

### Candidate B-1 — Component B Rejection (with structural rationale)

Component B from the prior finding (the regex sub-section) is REJECTED. Structural rationale:

1. **Heavy compute load.** The check requires per-output scan, per-match first-use lookup, per-match remediation. Each finding compilation pays this cost.

2. **Incompletely mechanizable.** Pattern 1 (definite-article references) is a real regex; Pattern 2 (bare filenames) and Pattern 3 (title-case noun phrases) require semantic judgment that pure regex can't express ("not preceded by a parenthetical context describing what the file is" — that's a semantic test, not a syntactic one). The "regex sketch" framing in the prior finding acknowledged this; the user correctly identified it as a weakness.

3. **User explicit constraint.** The user said: *"we don't want to overload AI with such work."* This rejects the per-output scan approach.

4. **Source-side prevention obviates destination-side scan.** When the convention prevents most cross-spec ambiguity at write-time, the destination-side scan becomes redundant. Component A's 4 examples teach pattern recognition for the residual cases that slip through. No mechanical scan needed.

**Tests:** SURVIVES as a rejection (not as a candidate for the spec; it's a documentation of why Component B is not adopted).

### Candidate V-1 — Per-Failure Verification + Composition

**Verification table:**

| Observed failure (from `2026-05-07_20-35`'s finding) | Cross-spec reference? | Caught by Convention at write-time? | Component A catches if slips? |
|---|---|---|---|
| "the current Probe section says..." | YES (Probe is in Exploration spec) | YES — convention requires "Probe component in Structural Exploration" on first use | YES (Component A example #1) |
| "the current Surface-Only Scanning failure-mode prevention says..." | YES (Surface-Only Scanning is in Exploration spec) | YES — convention requires source named on first use | YES (Component A example #2) |
| "the current Scan section says..." | YES | YES | YES |
| "the current Premature Depth failure-mode prevention says..." | YES | YES | YES |
| "the current Resolution Progression's Coarse Scan step asks..." | YES | YES | YES (Component A example #3) |
| "explore.md" (bare) | YES (filename) | YES — convention requires source/role named on first use | YES |
| "Surface-Only Scanning" (bare title-case) | YES | YES | YES |
| "Premature Depth" (bare title-case) | YES | YES | YES |
| "Coarse Scan" (bare title-case) | YES | YES | YES (Component A example #3) |
| "Resolution Progression" (bare title-case) | YES | YES | YES |

All 10 observed failures are cross-spec references. Convention catches them at write-time. Component A catches any that slip through at compile-time.

**Composition:**

```
Source-side prevention (convention at disciplines):
  - Read once at SOLID INSTRUCTIONS startup
  - Applied implicitly during output writing
  - Cost: 5 lines aggregate (one sentence × 5 disciplines)
  - Catches: cross-spec references at write-time

  ↓ (residual cases slip through to CONCLUDE)

Destination-side translation (Component A at CONCLUDE):
  - 4 expanded examples in non-ambiguity principle's example list
  - Teaches pattern recognition during finding compilation
  - Cost: ~lines added to existing principle paragraph
  - Catches: residual cross-spec references at compile-time

  ↓

Final finding.md output: cross-spec references have first-use parenthetical context.
```

**Tests:** SURVIVES — all observed failures covered; cascade structure clean.

## Phase 4 — Assembly Check

The strongest assembly:

```
C-1 (Convention wording + per-discipline placement)
  + A-1 (Component A preservation)
  + B-1 (Component B rejection rationale)
  + V-1 (verification + composition)
```

**Emergent value:**

- C-1 + A-1 form the source-side + destination-side cascade. Lightweight at both ends.
- B-1 documents WHY the prior finding's heavier alternative is rejected — preserves epistemic accountability.
- V-1 verifies coverage of all observed failures and shows the cascade composition.

**Self-applying check:** this Innovation phase produces a convention that the SOLID INSTRUCTIONS sections will carry. The convention applies to discipline outputs; this finding compiles to `finding.md` (a CONCLUDE artifact, where Component A applies). The finding's body uses cross-spec references — verify that this finding itself names sources on first use (e.g., "Probe component in Structural Exploration" rather than bare "Probe section"). Self-test: this Innovation phase output uses "SOLID INSTRUCTIONS" multiple times — first use is "SOLID INSTRUCTIONS section in each discipline reference spec," which is parenthetically contextualized. PASS.

**Assembly verdict: SURVIVE.**

## Phase 5 — V1 Shape (Stable Output for Critique)

```
For-sure-needed lightweight intervention to refine the prior 2026-05-07_22-10
finding:

CONVENTION (replaces Component B from prior finding) — Cross-spec reference
  convention
  Where: SOLID INSTRUCTIONS section of EACH of the 5 discipline reference
         specs
  Trigger: writing output references a named section/component/step/failure
           mode defined in ANOTHER Homegrown discipline reference spec
  Action: name source on first use; subsequent uses bare
  Wording: one sentence, ~35 words (final wording above)
  Cost: ~5 lines aggregate (one sentence × 5 disciplines)
  Cross-references: NONE required

PRESERVED FROM PRIOR FINDING:
  Component A at homegrown/protocols/conclude.md — 4 expanded examples in
  non-ambiguity principle's example list. Already-applicable lightweight
  destination-side translation.

REJECTED FROM PRIOR FINDING (with structural reasoning):
  Component B at homegrown/protocols/conclude.md — regex sub-section +
  per-output checklist + remediation. Heavy compute load; incompletely
  mechanizable; user explicit constraint; source-side prevention obviates
  destination-side scan.

VERIFIED:
  All 10 observed failures from 2026-05-07_20-35's finding are cross-spec
  references. Convention catches them at write-time. Component A catches
  residual at compile-time.

Aggregate cost: ~5 lines (convention) + 4 examples (Component A, already
applied or applicable) ≈ 10-15 lines aggregate, vs. Component B's ~25-30
lines + per-output scan overhead.
```

## Innovation Telemetry

- Generators applied: 4 / 4. Framers applied: 3 / 3. Coverage: FULL.
- Convergence: HIGH — 6/7 mechanisms.
- Survivors tested: 4 (C-1, A-1, B-1, V-1). All SURVIVE.
- Failure modes observed: NONE.
- **Output disposition** (per innovate.md's just-applied Rule B):
  - C-1: ACTIONABLE (multi-mechanism convergent; concrete spec edits).
  - A-1: ACTIONABLE-PRESERVATION (no new edits; confirms prior).
  - B-1: DOCUMENTATION (rejection rationale; not a candidate).
  - V-1: DOCUMENTATION (verification table; not a candidate).
- **Overall: PROCEED.**
