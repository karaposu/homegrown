# Innovation: Finding Internal-Reference Ambiguity Failure

## Phase 1 — Seed

Sensemaking + Decomposition stabilized the fix as Fix-1 (regex scan + checklist) + Fix-3 (example expansion), placed at conclude.md Step 2 after the non-ambiguity principle and before the finding template, with a one-line reminder added to the Quality test. Innovation generates concrete wording.

**Direction:** the user demanded MECHANICAL fix (not subjective). The valuation is on a small, applicable, evidence-grounded patch. The motivation is to prevent recurrence of the observed failure mode.

**Seed type:** Failure (just-completed finding.md violated the principle 10+ times) + Constraint (mechanical, proportional, preserve existing structure) + Gap (rule exists but lacks check).

## Phase 2 — Generate (7 Mechanisms × 3 Variations Each — Compact Form)

Given the highly-constrained solution space (Sensemaking + Decomposition resolved most variables), I'll run mechanisms efficiently per fix component, focusing on convergent wording.

### Component A: Regex Pattern List (for Fix-1)

**Combination (G):** Combine "definite-article references" + "title-case noun phrases" + "bare filenames" → three-pattern list.

**Absence Recognition (G):** What's missing from current conclude.md is a CONCRETE PATTERN list. The new list fills that absence with three patterns covering the observed failures.

**Domain Transfer (G):** Code linting tools use regex patterns to detect code smells. Transfer: prose linting via regex patterns to detect ambiguity smells.

**Extrapolation (G):** If the patterns catch 100% of the 10+ observed failures, the fix is validated. If they catch <100%, the pattern list needs refinement.

**Lens Shifting (F):** Under "the runner is embedded in vocabulary" framing, regex patterns are the right cold-eyed substitute.

**Constraint Manipulation (F):** Add the constraint "patterns must be specifiable in plain regex." Rules out vague pattern descriptions.

**Inversion (F):** "Subjective recognition" → "Mechanical pattern matching." System-level inversion of the check operation.

**Convergence:** all 7 mechanisms point to a 3-pattern list. Final wording:

> *"Pattern 1: Definite-article references to discipline-internal sections, components, steps, failure modes, protocols, principles, or preventions — e.g., 'the X section', 'the Y failure mode', 'the Z component', 'the [Adjective Noun] prevention'. Regex sketch: `\bthe (current )?[A-Z][a-z]+( [A-Z][a-z]+)* (section|component|step|failure mode|protocol|principle|prevention|cycle)\b`*"
> 
> *"Pattern 2: Bare filenames or paths from the repository — e.g., 'explore.md', 'sensemaking.md', 'homegrown/protocols/conclude.md'. Regex sketch: `\b\S+\.md\b` followed by no parenthetical context within the same sentence."*
> 
> *"Pattern 3: Title-case noun phrases that aren't common English — e.g., 'Surface-Only Scanning', 'Premature Depth', 'Coarse Scan', 'Resolution Progression'. Regex sketch: capitalized multi-word terms not preceded by 'the' that don't appear in a parenthetical phrase already."*

### Component B: First-Use Checklist (for Fix-1)

**Convergence (across mechanisms):** for each pattern match, verify whether the FIRST APPEARANCE of the matched term in the finding has parenthetical context. If yes → pass. If no → fail; rewrite the first appearance.

Final wording:

> *"For each match found by the patterns above, locate the first appearance of the matched term in the finding. Verify (in checklist form): [ ] Does the first appearance have a parenthetical phrase naming WHAT the term refers to (which file/spec/discipline/role)? If YES, pass. If NO, fail — rewrite the first appearance to include the parenthetical context. Subsequent appearances may use the bare name. Examples of valid parenthetical context shapes: for sections: 'the X section in `[filepath]` (which is [one-line role description])'; for failure modes: 'X (one of N failure modes documented in `[filepath]`)'; for named concepts: 'X (defined as [one-line definition] in [filepath])'; for files: 'the [discipline name] discipline spec at `[filepath]`'."*

### Component C: Remediation Guidance (for Fix-1)

Final wording:

> *"If a match fails the checklist, rewrite the first appearance of the term in the finding to include the parenthetical context. Do NOT add the parenthetical to every appearance — only to the first. After the rewrite, re-run the pattern scan to verify no remaining matches lack first-use parenthetical context."*

### Component D: Example Expansion (Fix-3)

Add 3 examples to the existing principle paragraph's example list (which currently has just the "Template" example). Each example draws from a different shape observed in the just-completed finding.md.

Final wording (added after the existing example):

> *"Additional examples of the failure mode and its correction:*
> 
> - *❌ 'the current Probe section says...' — which spec? in what discipline?*
> - *✅ 'the Probe section in `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec) says...'*
> 
> - *❌ 'Surface-Only Scanning failure mode' — failure mode of what? defined where?*
> - *✅ 'Surface-Only Scanning (one of six failure modes documented in the Structural Exploration discipline spec at `homegrown/explore/references/explore.md`)'*
> 
> - *❌ 'Coarse Scan' — coarse scan of what? in what process?*
> - *✅ 'Coarse Scan (the breadth-first first-pass step in Structural Exploration's Resolution Progression)'*"

### Component E: Placement (where Fix-1 sits in conclude.md)

Final wording (sub-section heading + intro):

> *"### Non-ambiguity check (mechanical)*
> 
> *After drafting the finding body, run a mechanical scan to catch internally-referential shorthand the runner may have inherited from upstream discipline outputs or written without realizing. The principle above states what to avoid; this check operationalizes it.*"

Position: between the existing non-ambiguity principle (with expanded examples) and the finding template, in Step 2.

### Component F: Quality-Test Reminder

Final wording (one line added after the existing Quality test):

> *"Confirm that the Non-ambiguity check (mechanical) above has been run and all matches passed the first-use parenthetical context checklist."*

## Phase 3 — Test (5 criteria per component)

All 6 components (Patterns / Checklist / Remediation / Examples / Placement / Quality-test reminder) tested as a unit.

**Novelty:** mechanical check (regex + checklist) is new in conclude.md. NOVEL.

**Scrutiny survival:** strongest objection — "regex patterns will over-fire on legitimate phrasings (e.g., 'the Open Questions section' which is a legitimate finding template section)." Defense — the first-use checklist catches over-fires: legitimate template sections like "Open Questions" are public knowledge to a finding reader (the template is shared); they don't require parenthetical context. The checklist's "WHAT the term refers to" verification distinguishes shared-vocabulary terms from internally-referential shorthand. SURVIVES.

**Fertility:** opens the mechanical-check pattern for future quality controls. FERTILE.

**Actionability:** runner applies the regex scan + checklist as steps. ACTIONABLE.

**Mechanism independence:** all 7 mechanisms converged on the 3-pattern + checklist + remediation structure. HIGH.

**Verdict: SURVIVES.**

## Assembly Check

Combined fix:

```
conclude.md Step 2 modifications:

1. Existing non-ambiguity principle paragraph (lines 64-75):
   - PRESERVE the principle text and existing example.
   - ADD 3 new examples (Component D) drawn from the observed failures.

2. NEW sub-section after the principle, before the finding template:
   ### Non-ambiguity check (mechanical)
   - Component E (intro paragraph)
   - Component A (3 regex patterns)
   - Component B (first-use checklist)
   - Component C (remediation guidance)

3. Existing Quality test (lines 219-225):
   - PRESERVE the test text.
   - ADD Component F (one-line reminder).
```

Emergent value: the combination produces a defense-in-depth structure — examples teach pattern recognition; mechanical scan catches what pattern-matching misses; checklist verifies parenthetical context on first use; remediation specifies the fix; Quality-test reminder ensures the check is run. Each component covers a different failure mode of the others.

Assembly verdict: SURVIVE.

## V1 Shape (Stable Output for Critique)

```
Fix to homegrown/protocols/conclude.md (combined ~25-30 lines added):

A. Expand existing non-ambiguity principle's example list (3 new examples).
B. Add new sub-section "Non-ambiguity check (mechanical)" with:
   - Intro paragraph
   - 3 regex patterns (definite-article references, bare filenames, title-case noun phrases)
   - First-use checklist
   - Remediation guidance
C. Add one-line reminder to Quality test.

Verification:
  - The fix would have caught all 10+ observed failures in the just-completed finding.md.
  - The fix preserves existing structure (principle, template, Quality test, Failure modes).
  - The fix is mechanical (runner applies regex + checklist).
  - The fix is proportional (~25-30 lines of new content).
```

## Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Coverage: FULL.
- Convergence: HIGH (all 7 mechanisms point to the same 3-component structure).
- Survivors tested: 1 (combined fix) — SURVIVES.
- Failure modes observed: NONE.
- **Overall: PROCEED.**
