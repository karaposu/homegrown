# Critique: Finding Internal-Reference Ambiguity Failure

## Phase 0 — Dimensions With Weights

### 1. Catches Observed Failures - 30%

**Critical.** The fix MUST catch every one of the 10+ failure instances observed in `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md`. If it misses any, the fix is insufficient.

### 2. Mechanical-Not-Subjective - 25%

**Critical.** The user explicitly demanded mechanical fix. The check must be applicable as steps, not as judgment.

### 3. Over-Fire Risk - 20%

**Critical.** Pattern matching might flag legitimate phrasings (e.g., legitimate template sections, well-known acronyms). The first-use checklist must catch over-fires.

### 4. Proportional Scope - 10%

The fix should be a small extension, not a wholesale rewrite. Preserve existing principle, Quality test, Failure modes.

### 5. Existing-Structure Preservation - 10%

The fix integrates with conclude.md's existing structure (principle + Quality test + Failure modes). Doesn't replace or contradict.

### 6. Implementation Cost - 5%

The fix should be writable in ~30 lines or fewer.

**Critical dimensions:** Catches Observed Failures, Mechanical-Not-Subjective, Over-Fire Risk.

## Phase 1 — Fitness Landscape

### Viable Region

Fixes that:
- Catch all 10+ observed failures.
- Are mechanical (regex + checklist).
- Have over-fire mitigation (first-use checklist distinguishes shared vocabulary from internally-referential).
- Preserve existing principle, Quality test, Failure modes.
- Add ≤30 lines of new content.

### Dead Region

Fixes that:
- Miss any of the 10+ observed failures.
- Require subjective judgment.
- Over-fire on legitimate template sections without mitigation.
- Replace or contradict existing structure.
- Require multi-section restructuring.

### Boundary Region

Fixes with:
- Partial pattern coverage (catch most but not all observed failures).
- Strong patterns but weak checklist (over-fire mitigation incomplete).

### Unexplored Region

- Automated tooling (a script that runs the regex automatically). Out of scope; this fix is for the protocol, not the implementation.
- Discipline-spec-side changes (require disciplines to write cold-readably). Out of scope per Sensemaking Ambiguity 4.

## Phase 2 — Candidate Evaluation

### Candidate: Combined Fix (Components A + B + C + D + E + F)

**Prosecution:**

The regex patterns are described as "sketches" rather than exact regex. A runner might interpret the patterns differently, leading to inconsistent application. The patterns may not be exhaustive — some shapes of internally-referential shorthand might not match.

The first-use checklist relies on the runner identifying "WHAT the term refers to" — slightly judgment-dependent. The runner might decide a term doesn't need parenthetical context when it does.

The example expansion adds 3 examples but the failure space is potentially larger. Future failures might have shapes none of the 3+1 examples covers.

The Quality-test reminder is one line; might be skipped if Quality test itself is skipped.

**Defense:**

Verification against observed failures: the combined fix's pattern list catches all 10+ observed instances:
- "the current Probe section" → matches Pattern 1 (definite-article + Title-Case + section).
- "the current Surface-Only Scanning failure-mode prevention" → matches Pattern 1 (definite-article + Title-Case-with-hyphen + failure mode).
- "the current Scan section" → matches Pattern 1.
- "the current Premature Depth failure-mode prevention" → matches Pattern 1.
- "the current Resolution Progression's Coarse Scan step" → matches Pattern 1 (multiple matches).
- "explore.md" (bare) → matches Pattern 2.
- "Surface-Only Scanning" (bare) → matches Pattern 3.
- "Premature Depth" (bare) → matches Pattern 3.
- "Coarse Scan" (bare) → matches Pattern 3.
- "Resolution Progression" (bare) → matches Pattern 3.

All 10+ observed failures are caught. **Pattern coverage: 100%.**

The "sketch" language in the patterns is intentional — a runner can interpret the regex sketches with reasonable judgment. The patterns are concrete enough that two runners would reach the same matches.

The first-use checklist's "WHAT the term refers to" criterion is observable: either a parenthetical phrase exists giving the file/spec/discipline/role, or it doesn't. The criterion is binary, not graded. The judgment-dependency is bounded.

The example expansion adds 3 examples covering 3 different shapes (section reference, named concept, bare-vocabulary). Plus the existing "Template" example covers a 4th shape (generic-noun). 4 examples total cover the observed failure types. Future failures with new shapes can be added in subsequent iterations; this run addresses observed failures.

The Quality-test reminder ensures the check is at least mentioned at the final gate; does not depend on it being the only enforcement mechanism (the mechanical sub-section is the primary enforcement).

Existing structure preservation: the principle stays; the Quality test stays; the Failure modes section stays; the new sub-section sits between principle and template. No replacement.

**Collision:**

The prosecution's "regex sketches not exact" is real but bounded. The patterns are specific enough to be applied consistently; perfect regex is not the goal — runner-applicable patterns are. Defense survives.

The prosecution's "checklist judgment-dependency" is real but bounded by the binary criterion. Defense survives.

The prosecution's "future shapes might not match" is real for any pattern-based check. Defense — the framework allows pattern additions in future iterations; this run addresses observed failures (which is the for-sure standard from the previous inquiry's methodology).

**Dimensions:**

- Catches Observed Failures: HIGH (all 10+ caught).
- Mechanical-Not-Subjective: HIGH (regex + binary checklist).
- Over-Fire Risk: MEDIUM-HIGH (first-use checklist mitigates; legitimate template sections like "Open Questions" wouldn't trigger Pattern 1's "section" match because they're not definite-article-referenced; if a runner reads "the Open Questions section" it WOULD match — but the first-use checklist would correctly verify that "Open Questions" is a shared finding-template concept, not a discipline-internal name; the parenthetical-context rule applies to internally-referential, not template-shared).
- Proportional Scope: HIGH (~25-30 lines of new content).
- Existing-Structure Preservation: HIGH (principle, Quality test, Failure modes all preserved).
- Implementation Cost: LOW.

**Verdict: SURVIVE.**

Constructive output:

ADD to `homegrown/protocols/conclude.md` Step 2 the combined fix (Components A + B + C as the new sub-section "Non-ambiguity check (mechanical)" between principle and template; Component D as 3 new examples in the existing principle's example list; Component F as one-line addition to Quality test). Risk class: low. Evaluation gate: in next 3 finding.md compilations, the runner applies the mechanical check; verify zero internally-referential references slip through.

### Refinement note on Over-Fire Risk

Adding to the checklist's wording for clarity: the first-use parenthetical-context check distinguishes between:
- **Internally-referential shorthand** (term originates from a specific spec/discipline/file the reader hasn't necessarily read; e.g., "Probe section" referring to explore.md's Probe section).
- **Template-shared vocabulary** (term is part of the finding-template's standardized structure that any finding reader knows; e.g., "Open Questions section", "Source Input section").

The check fires on the first kind, not the second. The example list helps runners distinguish.

## Phase 3.5 — Assembly Check

The combined fix's components reinforce each other:
- Examples (D) teach pattern recognition.
- Patterns (A) catch matches mechanically.
- Checklist (B) verifies first-use parenthetical context.
- Remediation (C) specifies the corrective action.
- Placement (E) makes the check structurally salient (own sub-section).
- Quality-test reminder (F) ensures the check is reinforced at the final gate.

Defense in depth: each component covers a different failure mode of the others. If a runner misses a pattern (because the sketch isn't exhaustive), the examples teach pattern recognition. If a runner over-fires, the checklist's binary criterion catches over-fires. If a runner skips the new sub-section, the Quality-test reminder catches the skip.

Assembly verdict: SURVIVE.

## Phase 3 — Ranked Verdicts

1. **SURVIVE: Combined fix** (Components A + B + C + D + E + F as described in Innovation). Catches all 10+ observed failures. Mechanical. Over-fire risk mitigated. Proportional. Preserves structure. Low cost.

## Coverage Map

Evaluated:
- The combined fix as a unit (5 critical dimensions + 6 dimensions overall).
- Verification against all 10+ observed failures.
- Over-fire risk against legitimate template-shared vocabulary.
- Existing-structure preservation.

Unexplored but not blocking:
- Automated tooling (out of scope; protocol-level fix only).
- Discipline-spec-side changes (resolved as out of scope in Sensemaking Ambiguity 4).
- Additional failure shapes beyond the observed 10+ (future iterations).

Coverage judgment: sufficient.

## Signal

TERMINATE with ranked survivor: the Combined Fix (A + B + C + D + E + F).

The user's question is answered: the rule failed because (H1) it was a principle without a mechanical check AND (H2) the upstream disciplines propagate internally-referential vocabulary that CONCLUDE inherits without translation. The fix is a mechanical check (regex patterns + first-use checklist + remediation guidance) added as a new sub-section in conclude.md Step 2, plus an expanded example list in the principle, plus a one-line reminder in the Quality test. Verified to catch all 10+ observed failures.

## Convergence Telemetry

- Dimension coverage: complete.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE: yes (the combined fix).
- Failure modes observed: NONE.
- **Overall: PROCEED.**
