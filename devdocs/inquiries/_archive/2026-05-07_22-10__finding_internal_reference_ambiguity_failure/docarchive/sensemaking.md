# Sensemaking: Finding Internal-Reference Ambiguity Failure

## User Input

`devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/_branch.md` — diagnose why conclude.md's non-ambiguity principle didn't prevent internally-referential references in the just-completed finding.md, and propose concrete mechanical fixes.

## Initial Sense Version (SV1 — Baseline Understanding)

The exploration identified 5 root-cause hypotheses (H1-H5) and 3 fix candidates (Fix-1 regex scan / Fix-2 translation pass / Fix-3 example expansion). The two HIGH-confidence root causes are: **H1** the rule is a principle without a mechanical check; **H2** the upstream disciplines propagate internally-referential vocabulary which CONCLUDE inherits without translation. The fix needs to be MECHANICAL (not subjective) and MUST be at CONCLUDE's surface (the cold-readable artifact's compilation step).

## Phase 1 — Cognitive Anchor Extraction

### Constraints

1. **Mechanical-not-subjective.** The user explicitly asked for a fix the runner can apply by following a step, not by recognizing a pattern.
2. **Proportional scope.** Fix should be a small protocol patch, not a wholesale rewrite. Preserve existing conclude.md structure.
3. **Verify-against-evidence.** The fix must demonstrably catch the specific failures observed in the just-completed finding.md (10+ instances of internally-referential references).
4. **Don't propagate to upstream disciplines.** The discipline outputs are working documents; CONCLUDE is the cold-readable surface. Fix at CONCLUDE only.
5. **Preserve the existing principle.** The non-ambiguity principle (lines 64-75 of conclude.md) stays; the fix adds a check mechanism.

### Key Insights

1. **Two converging root causes.** H1 (principle not check) and H2 (upstream cascade) are independent but reinforcing. H1 explains why the runner doesn't catch shorthand they wrote; H2 explains why the runner inherits shorthand from upstream without realizing it.

2. **The Quality test is structurally limited.** The test asks "can someone read ONLY finding.md without backtracking?" — but the runner has just read all the disciplines. The test requires cold-eyed simulation, which is hard for a hot-eyed runner. Subjective tests fail under embedded-vocabulary conditions.

3. **The example in conclude.md shows only ONE shape.** "Template extends from 4 sections to 6" is a generic-noun shape. The failure shapes in finding.md are different: "the current Probe section says...", "the Surface-Only Scanning failure mode says..." These are TITLE-CASE-NOUN shapes (proper-noun-like names from the discipline spec). The runner's pattern-matching from one example shape may not extend to a different shape.

4. **CONCLUDE compiles, doesn't translate.** The protocol's framing is "compile from upstream outputs" — implicit verb-of-action is COMPILE (assemble). It doesn't say TRANSLATE (translate from internal to public vocabulary). The protocol's framing nudges runners toward inheritance.

5. **The fix surface is well-defined.** It's conclude.md's Step 2. Specifically: between "Compile the finding" content and "Archive" (Step 3). The fix is a check mechanism that runs after the draft finding.md is written but before saving.

### Structural Points

1. **conclude.md current structure:**
   - Path contract.
   - Step 1: Pipeline detection.
   - Step 2: Compile the finding (includes Non-ambiguity principle, Finding template, Style rules, Size-adaptive application, Multi-iteration handling, Quality test).
   - Step 3: Archive.
   - Step 4: Update _state.md.
   - Step 5: Print summary.
   - Step 6: Print relationship pointers.
   - Failure modes (incl. Internally-referential shorthand).

2. **Failure mechanism (cascade):**
   ```
   Discipline outputs use internally-referential vocabulary
       ↓
   CONCLUDE compiles, inheriting the vocabulary
       ↓
   Non-ambiguity principle is a guideline, not a check
       ↓
   Quality test is subjective and self-applied (hard for embedded runner)
       ↓
   finding.md fails the principle
   ```

3. **Fix candidates (from Exploration):**
   - **Fix-1 (regex scan + first-use checklist):** mechanical pattern scan over drafted finding.md.
   - **Fix-2 (translation pass as separate step):** new Step 2.5 mandates a translation pass.
   - **Fix-3 (example expansion):** expand example list with 3-5 concrete failure shapes.

4. **Composability of fixes:** Fix-3 + Fix-1 are highly compatible (examples teach pattern recognition; regex scan is the mechanical fallback). Fix-2 is more invasive (adds a step) but more thorough.

### Foundational Principles

1. **A subjective check fails under embedded-vocabulary conditions.** This is the structural reason H1 + H3 cause the failure.

2. **Upstream working documents do not need cold-readability.** The disciplines are by-design embedded; CONCLUDE is the public surface. Fix at CONCLUDE.

3. **Mechanical checks compose with subjective principles.** The principle stays; the check becomes the ENFORCEMENT mechanism.

4. **Examples teach pattern recognition.** Adding 3-5 concrete examples (different shapes of the same failure family) gives the runner more pattern-match coverage than one example.

5. **Proportional scope.** A small extension is preferable to a wholesale restructure. The fix should be the minimum that mechanically catches the observed failure.

### Meaning-Nodes

1. **Internally-referential shorthand** — already named in conclude.md; the failure family the principle targets.
2. **Mechanical check** — a step the runner can apply by following instructions, not by subjective recognition.
3. **Translation pass** — the act of replacing upstream-vocabulary with public-vocabulary in the drafted finding.
4. **First-use parenthetical context** — the principle's existing prescription; what the check verifies.
5. **Cold reader** — the audience the finding is written for; the simulation target of the quality test.

## Sense Version 2 (SV2 — Anchor-Informed Understanding)

Anchor extraction sharpens the picture. The failure cascade has TWO independent root causes (H1 principle-not-check + H2 upstream-cascade) that converge to produce the observed failures. The fix needs to address BOTH: a mechanical check to catch the shorthand the runner produces (H1), and an explicit translation requirement to catch the shorthand the runner inherits from upstream (H2).

The fix surface is well-defined (conclude.md's Step 2 area). The proportional fix is a combination: light example expansion (Fix-3) + a concrete check mechanism (Fix-1 or Fix-2). The choice between Fix-1 and Fix-2 is a tradeoff: Fix-1 (regex scan + checklist) is lighter but requires the runner to interpret the patterns; Fix-2 (translation pass as separate step) is more thorough but adds a step.

Shift from SV1: the fix is now anchored as a combination (not a single candidate); the choice between Fix-1 and Fix-2 is the open question.

## Phase 2 — Perspective Checking

### Technical / Logical Perspective

A regex scan can mechanically detect:
- Pattern: `\bthe (current )?[A-Z][a-z]+( [A-Z][a-z]+)* (section|failure mode|component|step|protocol|principle|prevention)\b` — matches "the current Probe section", "the Surface-Only Scanning failure mode", etc.
- Pattern: bare filenames (e.g., `\b\w+\.md\b` not preceded by a parenthetical context describing what the file is).
- Pattern: title-case-noun-phrases that don't appear in common English (e.g., "Premature Depth", "Coarse Scan", "Resolution Progression").

Such scans are deterministic. A runner can apply them by inspection; an automated tool could apply them by regex.

NEW ANCHOR (Constraint): The mechanical check must be specifiable as concrete patterns, not abstract concepts.

### Human / User Perspective

The user identified the failure ("i dont get wdym or refer by the current Probe section"). They explicitly said: "we already have rules for preventing this ambiguity but why it failed?" This frames the user's concern: the user wants to understand the mechanism of failure AND see a fix that prevents recurrence.

The fix must be applicable BY THE RUNNER (not require the user to inspect every finding). The user's experience is a degraded read; the fix should restore the cold-readable contract.

NEW ANCHOR (Foundational Principle): The user's frustration validates the problem; the fix must be runner-applied, not user-applied.

### Strategic / Long-term Perspective

If the fix is added:
- Future finding.md files will be more readable (less internally-referential shorthand).
- The cost is one additional step in conclude.md (small).
- The benefit accumulates over many findings.

If the fix is NOT added:
- Future findings will likely have similar shorthand (the failure mechanism doesn't go away).
- The user will keep needing to ask "what did you mean by X?".
- The conclude.md's Quality test will keep failing in practice.

NEW ANCHOR (Constraint): The fix has positive cost/benefit ratio in the long term; deferring is unprincipled given the diagnostic clarity.

### Risk / Failure Perspective

Risks of the fix:
- **Fix-1 (regex scan) over-fires.** The regex might match phrases that are already cold-readable (e.g., "the cold reader" in this very document). Mitigation: pair with the first-use checklist — the regex flags candidates; the checklist verifies whether each has parenthetical context on first use.
- **Fix-2 (translation pass) adds friction.** Adding a step could be ignored under time pressure. Mitigation: phrase as "verify first-use parenthetical context for upstream-inherited references" — a focused single check, not a vague "translate."
- **Fix-3 (example expansion) doesn't add a mechanical check.** Examples teach but don't enforce. Mitigation: pair with Fix-1 or Fix-2.

NEW ANCHOR (Risk): Each fix has weakness; combination mitigates.

### Resource / Feasibility Perspective

Implementation cost per fix:
- Fix-1: one paragraph (regex pattern list + checklist) added to conclude.md Step 2.
- Fix-2: one new sub-step (Step 2.5 or equivalent) — slightly more invasive.
- Fix-3: 3-5 example bullets added to existing example list.

Total combination cost: one new sub-step + one expanded example list = ~10 lines of new content in conclude.md. Trivial.

NEW ANCHOR (Foundational Principle): The combination fix is low-cost; no resource constraint blocks it.

### Definitional / Consistency Perspective

Consistency check against existing conclude.md:
- The principle (lines 64-75) stays; the fix adds a check, not a replacement.
- The Quality test (lines 219-225) stays; the new check is a more concrete predecessor that catches what the Quality test wouldn't.
- The Failure modes section (line 329) stays; the existing entry "Internally-referential shorthand" is reinforced by the new check's mechanical specificity.

CHECK: does conclude.md's stated purpose contradict the new fix? Stated purpose: "compile the loop's artifacts into the standardized finding.md artifact." The new fix is part of compilation (a quality gate during compilation). No contradiction.

CHECK: does the principle contradict itself? The principle says "give project-specific references parenthetical context the first time each appears in the finding." The new check operationalizes this. No internal contradiction; the check IS the principle's operationalization.

NEW ANCHOR (Foundational Principle): The fix is consistent with conclude.md's existing structure; it operationalizes the existing principle without contradicting it.

## Sense Version 3 (SV3 — Multi-Perspective Understanding)

Six perspectives reveal:

- **Technical/Logical** confirms the regex patterns are specifiable.
- **Human/User** confirms the user wants a runner-applied fix that prevents recurrence.
- **Strategic** confirms positive long-term cost/benefit.
- **Risk/Failure** identifies per-fix weaknesses; combination mitigates.
- **Resource/Feasibility** confirms ~10 lines of new content; trivial.
- **Definitional/Consistency** confirms the fix is consistent with conclude.md's existing structure.

The shift from SV2 is: the fix is now operationalized as a regex-pattern list + first-use checklist + example expansion + (potentially) translation-pass step. The combination converges across all six perspectives.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Should the fix be Fix-1 (regex scan) OR Fix-2 (translation pass step) OR a combination?

**Strongest counter-interpretation:** Fix-2 (translation pass as separate step) is overkill; Fix-1 (regex scan + checklist) suffices. The translation pass is just the regex scan applied with intent.

**Why the counter-interpretation fails (structural grounds):** Fix-1 alone treats the check as a sub-task within Step 2 — it might be skipped under time pressure. Fix-2 makes the check structurally salient (a step). Both are valid; the choice is between structural-salience (Fix-2) and footprint-minimization (Fix-1).

**Confidence:** MEDIUM-HIGH on the resolution; the choice is principled but not decisive.

**Resolution:** Adopt **Fix-1** (regex scan + first-use checklist), positioned as a mandatory check at the end of Step 2 (just before the Quality test). The check is concrete (regex patterns) and the checklist is the application step. **Fix-3** (example expansion) is also adopted to teach pattern recognition. **Fix-2** (translation pass as separate step) is NOT adopted at this run because Fix-1 + Fix-3 satisfy the user's mechanical-fix requirement; adding a separate step is over-invasive given evidence (single failure observed).

**What is now fixed?** The fix is Fix-1 + Fix-3. The check is mechanical (pattern scan + checklist). The principle's example is expanded. No new step is added.

**What is no longer allowed?** Adding Fix-2 (separate step) at this run.

**What now depends on this choice?** Innovation generates concrete wording for Fix-1 + Fix-3. Critique tests whether the combination would have caught the observed failures.

**What changed in the conceptual model?** The fix is now a combination of two patches at conclude.md's Step 2 (within the existing Step), not a new Step. Proportional scope respected.

### Ambiguity 2: Where exactly should the regex scan + checklist sit in conclude.md?

**Strongest counter-interpretation:** insert it inside the existing non-ambiguity principle paragraph (lines 64-75). Keeps the principle and check co-located.

**Why the counter-interpretation fails (structural grounds):** the principle is descriptive ("define niche terms briefly on first use"); the check is procedural ("run this regex scan and verify each match has parenthetical context"). Mixing description and procedure makes the principle harder to read and the check easier to skip.

**Confidence:** MEDIUM-HIGH.

**Resolution:** position the check as a NEW sub-section within Step 2, immediately AFTER the non-ambiguity principle and BEFORE the finding template. Title: "Non-ambiguity check (mechanical)." Three-paragraph structure: (1) what to scan for (regex patterns); (2) how to apply the checklist; (3) what to do when a match fails.

**What is now fixed?** The fix's placement is Step 2, after the principle, before the template, as its own sub-section.

**What is no longer allowed?** Mixing the check into the principle's paragraph.

**What now depends on this choice?** Innovation generates the sub-section's content; Decomposition partitions it into pattern list + checklist + remediation guidance.

### Ambiguity 3: Should the fix also reinforce the Quality test (lines 219-225)?

**Strongest counter-interpretation:** add the regex scan + checklist as an explicit gate WITHIN the Quality test, not as a separate sub-section.

**Why the counter-interpretation fails:** the Quality test is the FINAL gate ("after writing the finding"). The check should run BEFORE finalizing, not at the end. Earlier check = less rework.

**Confidence:** HIGH.

**Resolution:** the check sits BEFORE the finding template in Step 2 (so it's applied during compilation), and a brief reminder is added to the Quality test ("...and that the non-ambiguity check at [link to sub-section] passed").

**What is now fixed?** Two-pass structure: mechanical check during compilation; Quality test at end.

**What now depends on this choice?** the Quality test gets a one-line addition referencing the new check.

### Ambiguity 4: Does the fix need to address upstream discipline outputs?

Already resolved in Cycle 5 of Exploration: NO. Disciplines are working documents; CONCLUDE is the cold-readable surface. Fix at CONCLUDE only.

**Confidence:** HIGH (already resolved in Exploration; re-confirmed in Sensemaking via Strategic perspective).

**Resolution:** fix is at CONCLUDE only. No changes to discipline specs.

## Sense Version 4 (SV4 — Clarified Understanding)

After ambiguity collapse:

- **The fix is Fix-1 + Fix-3** (regex scan + first-use checklist + example expansion). Fix-2 (separate step) is NOT adopted at this run.
- **Placement:** new sub-section within Step 2 of `homegrown/protocols/conclude.md`, immediately after the non-ambiguity principle, before the finding template.
- **Quality test gets a one-line reminder** referencing the new check.
- **No upstream changes.** Disciplines are working documents; CONCLUDE is the public surface.

## Phase 4 — Degrees-of-Freedom Reduction

### What Variables Are Now Fixed

1. **Fix combination:** Fix-1 + Fix-3 (regex scan + checklist + example expansion).
2. **Placement:** Step 2, after principle, before template.
3. **Quality test reminder:** one-line addition.
4. **No new step:** Step 2.5 (Fix-2) NOT adopted at this run.
5. **No upstream changes.**
6. **Existing principle preserved.**
7. **Existing Quality test preserved.**
8. **Existing Failure mode list preserved.**

### What Options Are Eliminated

1. **NO Fix-2** (translation pass as new step) at this run — over-invasive.
2. **NO upstream discipline-spec changes** — out of scope.
3. **NO mixing of check into principle paragraph** — clarity loss.
4. **NO replacement of Quality test** — test stays; gets a reminder.
5. **NO wholesale conclude.md restructuring** — proportional scope.

### What Paths Remain Viable

1. **Wording variations for the regex pattern list** (Generic / Focused / Contrarian per /innovate).
2. **Wording variations for the checklist** (how the runner applies the pattern matches).
3. **Wording variations for the expanded example list** (which 3-5 shapes to include).
4. **Wording for the Quality test reminder.**

## Sense Version 5 (SV5 — Constrained Understanding)

The constrained solution space:

- **Fix combination** = Fix-1 + Fix-3.
- **One new sub-section** in conclude.md Step 2, titled "Non-ambiguity check (mechanical)."
- **Three-paragraph structure** for the sub-section: (a) regex pattern list to scan for; (b) checklist for verifying each match has parenthetical context on first use; (c) remediation when a match fails the check.
- **One-line reminder** added to the Quality test.
- **Expanded example list** in the existing principle paragraph: 3-5 concrete failure shapes.

## Phase 5 — Conceptual Stabilization

### Stable Model

```
The failure mechanism (cascade):
  Discipline outputs use internally-referential vocabulary (working-doc style)
      ↓
  CONCLUDE compiles from disciplines, inheriting vocabulary
      ↓
  Non-ambiguity principle is a guideline, not a check
      ↓
  Quality test is subjective + self-applied (hard for embedded runner)
      ↓
  finding.md fails the principle (10+ instances observed)

The fix:
  Add to conclude.md Step 2 (after principle, before template):
  
  ### Non-ambiguity check (mechanical)
  
  After drafting the finding body, scan it for these patterns:
    1. "the [Title-Case Words] section/component/step/failure mode/protocol/principle/prevention"
    2. Bare filenames (e.g., explore.md, sensemaking.md) without parenthetical role description
    3. Title-case noun phrases not in common English (e.g., "Surface-Only Scanning",
       "Premature Depth", "Coarse Scan")
  
  For each match, verify:
    [ ] First appearance in the finding has parenthetical context naming WHAT it refers to:
        - For sections: "the X section in [filepath] (which is [one-line role])"
        - For named concepts: "X (one of N concepts in [discipline]; defined as [one-line])"
        - For files: "the [discipline name] discipline spec at [filepath]"
    [ ] Subsequent appearances may use the bare name.
  
  If any match lacks parenthetical context, rewrite that first appearance before saving.
  
  Expand existing example list to include:
    - ❌ "the current Probe section says..." → ✅ "the Probe section in `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec) says..."
    - ❌ "Surface-Only Scanning failure mode" → ✅ "Surface-Only Scanning (one of six failure modes documented in `explore.md`)"
    - ❌ "Coarse Scan" → ✅ "Coarse Scan (the breadth-first first-pass step in Structural Exploration)"
  
  Add to Quality test: "...and that the non-ambiguity check at [link to sub-section] passed."
```

### Action Framework

- **Decomposition:** partition the new sub-section into pattern list / checklist / remediation guidance + the example-list expansion.
- **Innovation:** generate concrete wording per piece (Generic / Focused / Contrarian).
- **Critique:** verify the fix would have caught the observed failures (10+ instances) AND that it doesn't over-fire on correct phrasings.

## Final Sense Version (SV6 — Stabilized Model)

The non-ambiguity principle in `homegrown/protocols/conclude.md` (the CONCLUDE protocol that compiles MVL+ inquiry artifacts into `finding.md`) failed to prevent internally-referential references in `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md` for two converging reasons: (1) the principle is a GUIDELINE without a MECHANICAL CHECK, so the runner has to subjectively recognize patterns and fails when embedded in the inquiry's vocabulary; and (2) the upstream discipline outputs (5 working documents in `docarchive/`) all use internally-referential vocabulary, and CONCLUDE inherits this vocabulary AS-IS without a translation pass.

The fix is a combination of two small patches at conclude.md's Step 2 — a mechanical check (regex pattern scan + first-use checklist + remediation guidance) added as a new sub-section between the principle and the finding template, plus an expanded example list in the principle itself with 3-5 concrete failure shapes drawn from the observed failure. Plus a one-line reminder in the Quality test referencing the new check.

The fix is proportional (~10 lines of new content), mechanical (the runner applies regex patterns + checklist, not subjective recognition), and complete (catches both the upstream-inherited shorthand and the runner-produced shorthand). It preserves the existing principle, Quality test, and Failure mode list. No upstream discipline changes are made; CONCLUDE is the cold-readable surface and the fix's right placement.

The shift from SV1 is: the fix is now a specific 2-component patch with explicit placement, structure, and verification criteria. The choice against Fix-2 (separate step) preserves proportional scope; future evidence may revisit if Fix-1 + Fix-3 prove insufficient.
