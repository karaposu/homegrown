# Sensemaking: Generic Discipline-Level Non-Ambiguity Convention

## User Input

devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/_branch.md

## SV1 — Baseline Understanding

Exploration converged on TWO actions: (1) apply Component A to `conclude.md` (it's not yet there); (2) replace the prior `2026-05-08_06-30` finding's narrow cross-spec-only convention with a generic version covering all 6 shorthand types. Two wording approaches (Approach 1 self-contained; Approach 4 refers to Component A) both pass the lightweight criterion. This sensemaking collapses the wording choice and stabilizes the answer's structure.

## Phase 1 — Cognitive Anchor Extraction

### Constraints

1. **Lightweight non-negotiable.** One short sentence per discipline (~30-50 words). No scan, no checklist, no audit step.
2. **Generic scope required.** Convention must cover all 6 shorthand types observed across the corpus, not just cross-spec references.
3. **Component A must be applied to `conclude.md`** — currently absent (verified by Exploration).
4. **Component B remains rejected** with the structural reasoning carried forward from the prior `2026-05-08_06-30` finding.
5. **Placement convention applied** — single canonical home + one-line cross-references at non-canonical surfaces if needed.
6. **Don't embed convention in spec.**
7. **Supersedes prior `2026-05-08_06-30` finding** — its narrow scope is replaced.

### Key Insights

1. **The non-ambiguity problem is generic, not narrowly cross-spec.** The 6 shorthand types share the same correction (parenthetical context on first use) but differ in what context to add. A generic principle covers all 6 with one sentence; type-specific rules would multiply.

2. **Component A and the discipline-level convention are at DIFFERENT surfaces with COMPLEMENTARY roles.** Component A teaches example shapes for translation at compile-time (CONCLUDE). The discipline-level convention prescribes the writing-style preference at write-time (each discipline). Example bank lives at one place; the convention references the bank rather than duplicating it.

3. **Approach 4 (refer to Component A's examples) is structurally cleaner than Approach 1 (self-contained).** Single canonical home for examples; placement convention's preferred shape; no duplication if examples grow over time.

4. **The 6 shorthand types accumulate from real corpus evidence.** Cross-spec references (chains 1-7); inquiry-coined terms (M6, TP3, etc., from LOOP_DIAGNOSE corpus); project-specific references (`/MVL+`, `enes/`); abbreviations (SV6); file paths; within-discipline references. Each type appears in observed outputs.

5. **The prior `2026-05-08_06-30` finding is technically correct but practically wrong-scoped.** Its convention works for cross-spec references, but the user is right that this is 1/6 of the problem. Supersedes is the correct relationship.

### Structural Points

1. **Two separate edits:**
   - **Edit 1:** Add Component A's 3 example pairs to `homegrown/protocols/conclude.md` non-ambiguity principle's example list. Bring total to 4 examples.
   - **Edit 2:** Add a generic first-use convention sentence to each of the 5 discipline reference specs' SOLID INSTRUCTIONS sections. Identical text in all 5.

2. **Edit 1 has explicit text** (the 3 example pairs from the prior `2026-05-07_22-10` finding's Component A).

3. **Edit 2's wording** is what Innovation will finalize. Sensemaking decides between Approach 1 and Approach 4.

4. **Aggregate cost:**
   - Edit 1: ~10-15 lines added (3 example pairs).
   - Edit 2: ~5-8 lines × 5 disciplines = 25-40 lines aggregate.
   - Total: ~35-55 lines across 6 files.

5. **Cost comparison vs prior approaches:**
   - This refinement: ~35-55 lines aggregate, no per-output overhead.
   - Prior `2026-05-08_06-30` finding (narrow cross-spec): ~5 lines aggregate but only 1/6 coverage.
   - Prior `2026-05-07_22-10` Component A + B: ~30+ lines + per-output scan overhead.

   The generic version costs more lines than the prior narrow version but covers 6x more cases. Per-case cost is dramatically lower.

### Foundational Principles

1. **Generic principle > enumerated triggers when types share the same correction.** When all 6 shorthand types share "give parenthetical context on first use" as the correction, encoding the principle once is structurally cleaner than 6 type-specific rules.

2. **Source-side prevention + destination-side translation = lightweight cascade.** The discipline-level convention reduces ambiguity at write-time; Component A's examples teach pattern recognition at compile-time. Both lightweight.

3. **Discipline-spec purity preserved.** No embedded placement convention; no maintenance-time meta-content; one short sentence per discipline.

4. **Single canonical home per piece of content.** Component A is the example bank at `conclude.md`. The discipline-level convention is at SOLID INSTRUCTIONS in each spec. They reference each other (if Approach 4) or stand independently (if Approach 1) but neither duplicates.

### Meaning-Nodes

1. **Niche term** — a term whose meaning isn't obvious to a reader who only sees the current output. The trigger predicate.
2. **Parenthetical context** — a brief inline phrase naming what the term refers to (which spec, which protocol, which inquiry, what role). The action.
3. **First use** — the trigger occasion. Subsequent uses can be bare.
4. **Shorthand type** — one of the 6 categories; matters for what context to add.
5. **Source-side vs destination-side** — write-time (disciplines) vs compile-time (CONCLUDE).

## SV2 — Anchor-Informed Understanding

Anchor extraction confirms: 2 edits, generic convention with 6 shorthand types covered, Approach 4 (refer to Component A) preferred over Approach 1 (self-contained).

The shift from SV1: the 6-type taxonomy is anchored; the cost-to-coverage trade-off is calculated; the supersedes relationship to prior `2026-05-08_06-30` is explicit.

## Phase 2 — Perspective Checking

### Technical / Logical Perspective

Mechanical applicability:
- Edit 1: 3 example pairs inserted into existing example list. Text is already specified by prior `2026-05-07_22-10` finding's Component A. No design decision needed beyond confirming the wording.
- Edit 2: convention sentence read at SOLID INSTRUCTIONS startup; runner applies it during writing. No post-write check.

NEW ANCHOR: both edits are mechanically simple; no judgment beyond "does this term qualify as niche?"

### Human / User Perspective

The user explicitly said the prior `2026-05-08_06-30` finding was wrongly narrow. This finding directly addresses the user's correction. The user's explicit preference (Component A is good; Component B too heavy; lightweight discipline intervention) is fully honored.

NEW ANCHOR: user-correction is structurally addressed.

### Strategic / Long-term Perspective

Long-term: a generic convention scales — when new shorthand types emerge in future inquiries (e.g., new abbreviations, new protocols), the convention covers them automatically. A type-specific convention would require extension per new type.

NEW ANCHOR: generic principle scales; type-specific rules don't.

### Risk / Failure Perspective

Risks:
- **Convention's "niche term" recognition is judgment-dependent.** Same risk as the prior `2026-05-07_22-10` principle that originally failed. Defense: this is the user's accepted trade-off ("we don't want to overload AI with such work" implies accepting some judgment cost as the price of lightweight). Component A's 4 examples teach pattern recognition.
- **Convention may over-fire on common English.** Mitigation: the convention's wording specifies "niche" explicitly; common words don't trigger.
- **Prior finding's narrow convention is now superseded.** Risk: confusion about which is current. Mitigation: frontmatter `supersedes:` field; History entries in both `_state.md` files.

NEW ANCHOR: judgment-dependence is the accepted trade-off; Component A's examples mitigate.

### Resource / Feasibility Perspective

Implementation cost:
- Edit 1: ~10-15 lines at 1 file (`conclude.md`). User-confirmed surgical edit.
- Edit 2: one sentence × 5 specs = ~25-40 lines aggregate.
- Total: ~35-55 lines across 6 files.

NEW ANCHOR: bounded cost; smallest meaningful intervention that covers the generic problem.

### Definitional / Consistency Perspective

Consistency:
- Edit 1 extends an existing principle without changing its structure.
- Edit 2 adds a writing-style preference at SOLID INSTRUCTIONS without conflicting with existing instructions.
- Composition with prior `2026-05-08_06-30` finding: SUPERSEDED — this finding replaces the narrow convention with the generic one.

CHECK: does the generic convention contradict the prior narrow one? No — generic is broader; superseding is the correct relationship, not contradiction.

CHECK: does the convention conflict with the existing non-ambiguity principle at `conclude.md`? No — they are at different surfaces (disciplines vs CONCLUDE) and at different stages (write-time vs compile-time).

NEW ANCHOR: consistent with existing structure; supersedes correctly.

## SV3 — Multi-Perspective Understanding

Six perspectives confirm:
- Logical/Technical: both edits mechanically simple.
- Human/User: directly addresses user correction.
- Strategic: generic principle scales; type-specific doesn't.
- Risk/Failure: judgment-dependence accepted; Component A mitigates.
- Resource/Feasibility: ~35-55 lines aggregate; bounded.
- Definitional/Consistency: extension-not-replacement; supersedes prior narrow.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Approach 1 (self-contained convention) vs Approach 4 (convention + reference to Component A)?

**Strongest counter-interpretation (Approach 1):** self-contained means the convention works without depending on conclude.md being read or kept in sync. Each discipline's spec contains everything the runner needs.

**Why the counter fails (structural grounds):** Approach 4's cross-reference is one line; the dependency on `conclude.md` is trivial. Component A's examples are the canonical example bank for non-ambiguity translation; duplicating them in 5 discipline specs creates a maintenance hazard (any new example added to Component A must propagate to 5 places). Approach 4 leverages the placement convention's single-canonical-home principle.

**Confidence:** HIGH (placement convention precedent; maintenance cost differential is structural).

**Resolution:** Approach 4 — generic convention + cross-reference to Component A's example bank at conclude.md.

**What is now fixed?** Wording approach.
**What is no longer allowed?** Self-contained convention with examples baked in.
**What now depends on this choice?** Convention's exact wording (Innovation finalizes).
**What changed in the conceptual model?** Convention is concise + cross-references the canonical example bank.

### Ambiguity 2: Should the convention enumerate the 6 shorthand types, or use a pure principle?

**Strongest counter-interpretation:** pure principle ("any term that wouldn't be obvious to an outside reader") — shorter; truly generic; doesn't bias the runner toward thinking only about the 6 types.

**Why the counter fails (structural grounds):** the prior `2026-05-07_22-10` principle was already pure principle and it FAILED — the runner couldn't reliably recognize "what wouldn't be obvious" subjectively when embedded in the inquiry's vocabulary. The 6 types are observable categories that ground the principle without enumerating exhaustively. Listing 4-5 examples of types ("project-specific references, abbreviations, names from other specs, bare file paths, inquiry-coined concepts") gives the runner concrete recognition cues without claiming the list is exhaustive.

**Confidence:** HIGH (the prior failure is the empirical evidence against pure principle).

**Resolution:** convention enumerates 4-5 type examples (not all 6 — within-discipline references are implicit) within the principle's wording. The list is illustrative ("e.g., ..."), not exhaustive.

### Ambiguity 3: Should the convention apply to discipline outputs, the final finding, or both?

**Strongest counter-interpretation:** apply only to discipline outputs (since Component A handles the finding). Discipline outputs feed CONCLUDE; if disciplines write less ambiguously, less ends up in the finding.

**Why the counter fails (structural grounds):** writing-style conventions typically apply to all output the discipline produces. Singling out "this output but not other outputs the discipline writes" creates an artificial boundary. The convention is written generically: "this output" — it applies to whatever the discipline is currently producing. Ambiguity in discipline outputs is bad both for CONCLUDE compilation AND for any human who reads the docarchive directly. Generic application is structurally cleaner.

**Confidence:** HIGH.

**Resolution:** convention applies to ALL output the discipline produces ("this output"). Component A applies to the finding compilation step.

### Ambiguity 4: Where exactly in SOLID INSTRUCTIONS does the convention go?

**Strongest counter-interpretation:** at the very top of SOLID INSTRUCTIONS, before any execute-the-discipline steps.

**Why the counter fails (structural grounds):** the convention is a writing-style preference, not a process step. Putting it at the top of execute-the-discipline instructions would mix writing-style with process-flow. Better placement: at the END of SOLID INSTRUCTIONS, as a writing-style note that applies to whatever output the discipline produces.

**Confidence:** MEDIUM-HIGH (placement is a stylistic choice; both work; end placement is cleaner).

**Resolution:** convention sits at the END of each discipline's SOLID INSTRUCTIONS section, as a writing-style note.

### Ambiguity 5: Should the prior `2026-05-08_06-30` finding be marked SUPERSEDED in its `_state.md`?

**Strongest counter-interpretation:** leave the prior finding ACTIVE and note in this finding's frontmatter that it supersedes. Two findings would be visible.

**Why the counter fails (structural grounds):** the prior finding is wrong-scoped. Leaving it ACTIVE creates confusion about which convention to apply. Setting its `_state.md` Status to SUPERSEDED and adding a History note pointing to this finding is the clean closure.

**Confidence:** HIGH (corpus convention for superseded findings).

**Resolution:** mark prior `2026-05-08_06-30` `_state.md` as SUPERSEDED with a History entry pointing to this finding.

## SV4 — Clarified Understanding

After ambiguity collapse:
- **Approach 4** (generic convention + cross-reference to Component A) for the discipline-level wording.
- **Convention enumerates 4-5 type examples** within the principle (illustrative, not exhaustive).
- **Convention applies to all discipline output** ("this output").
- **Placement at end of SOLID INSTRUCTIONS** in each of the 5 discipline reference specs.
- **Prior `2026-05-08_06-30` `_state.md` marked SUPERSEDED** with history entry.
- **Component A applied to `conclude.md`** as a separate edit (Edit 1).

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

1. TWO edits: Edit 1 (Component A → conclude.md); Edit 2 (generic convention → 5 discipline specs).
2. Edit 2 wording: Approach 4 (refer to Component A's example bank).
3. Edit 2 placement: end of SOLID INSTRUCTIONS in each of the 5 discipline reference specs.
4. Edit 2 scope: ALL output the discipline produces.
5. Convention enumerates 4-5 type examples within the principle (illustrative).
6. Mark prior `2026-05-08_06-30` `_state.md` as SUPERSEDED.
7. Component B from prior `2026-05-07_22-10` REMAINS REJECTED.

### Eliminated

1. Approach 1 (self-contained convention with examples baked in).
2. Pure principle without examples.
3. Application only to discipline outputs OR only to finding (not both).
4. Convention at top of SOLID INSTRUCTIONS.
5. Leaving prior `2026-05-08_06-30` ACTIVE.
6. Type-specific rules (one rule per shorthand type).

### Remaining

1. Concrete final wording for the generic convention (Innovation finalizes within the constraints).

## SV5 — Constrained Understanding

The constrained answer:

- **Edit 1:** apply Component A — add 3 example pairs to `conclude.md` non-ambiguity principle's example list (text already in prior `2026-05-07_22-10` finding).
- **Edit 2:** add generic first-use convention to 5 discipline specs' SOLID INSTRUCTIONS sections (end of section), with cross-reference to Component A's example bank.
- **Innovation's job:** finalize Edit 2's exact wording (one sentence, ~40-50 words, refers to Component A).
- **Critique's job:** verify lightweight criterion + verify catches all 6 shorthand types + verify Component A status note + verify SUPERSEDES is correctly marked.

## Phase 5 — Conceptual Stabilization

### Stable Model

```
TWO edits across the methodology library + ONE state-file update:

EDIT 1 — Apply Component A from prior 2026-05-07_22-10 finding
  Where: homegrown/protocols/conclude.md, non-ambiguity principle's
         example list (currently has 1 example pair; add 3 more for 4 total)
  Text: 3 example pairs verbatim from prior 2026-05-07_22-10 finding
        (Probe section / Surface-Only Scanning failure mode / Coarse Scan)
  Cost: ~10-15 lines added at 1 file

EDIT 2 — Add generic first-use convention to 5 discipline reference specs
  Where: end of SOLID INSTRUCTIONS section in each of:
         homegrown/explore/references/explore.md,
         homegrown/sense-making/references/sensemaking.md,
         homegrown/decompose/references/decompose.md,
         homegrown/innovate/references/innovate.md,
         homegrown/td-critique/references/td-critique.md
  Text: identical sentence in all 5; ~40-50 words; generic principle
        + 4-5 type examples (illustrative); cross-reference to
        Component A's example bank at conclude.md
  Cost: ~25-40 lines aggregate (~5-8 lines × 5 specs)

STATE UPDATE — mark prior 2026-05-08_06-30 _state.md as SUPERSEDED
  Where: devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/_state.md
  Action: Status → SUPERSEDED; History → entry pointing at this inquiry

PRESERVED:
  Component B from 2026-05-07_22-10 — REMAINS REJECTED with structural reasoning
  carried forward from prior 2026-05-08_06-30 finding.

COVERAGE:
  All 6 shorthand types caught by Edit 2 at write-time:
    1. Cross-spec references (M6's Critique sub-rule example)
    2. Within-discipline references (Critique referencing own Phase 0)
    3. Inquiry-coined terms (M6, TP3, P11, Q-RF)
    4. Project-specific references (/MVL+, enes/, LOOP_DIAGNOSE)
    5. Abbreviations (SV6, CONCLUDE)
    6. Bare file paths (explore.md without context)

  Edit 1 catches residual cases at compile-time via 4 example shapes.

  Combined cascade: write-time prevention + compile-time translation; both lightweight.

Aggregate cost: ~35-55 lines across 6 files. Smallest possible coverage of the
generic problem; prior narrow scope covered 1/6 at ~5 lines.
```

### Action Framework

```
Decomposition: 4 pieces (Edit 1 + Edit 2 + State Update + Composition).
Innovation: finalize Edit 2's exact wording.
Critique: verify lightweight + coverage + supersedes + composition.
```

## SV6 — Stabilized Model

The prior `2026-05-08_06-30` finding's discipline-level convention was wrongly narrow — it triggered ONLY on cross-spec references (terms defined in another Homegrown discipline reference spec; "Homegrown" is this repository's methodology library at `homegrown/`). The actual non-ambiguity problem is generic and covers 6 shorthand types observable across the LOOP_DIAGNOSE corpus and beyond: cross-spec references, within-discipline references, inquiry-coined terms (e.g., "M6", "TP3", "Q-RF" from the LOOP_DIAGNOSE corpus), project-specific references (e.g., `/MVL+`, `enes/`), abbreviations (e.g., "SV6", "CONCLUDE"), and bare file paths. The narrow convention covered 1/6 of the actual problem.

This finding supersedes the prior `2026-05-08_06-30` and broadens the discipline-level convention to a generic first-use principle that covers all 6 types via one principle. The convention sits at the end of the SOLID INSTRUCTIONS section in each of the 5 discipline reference specs (the "SOLID INSTRUCTIONS" section is the actionable-instructions surface in each discipline reference spec, beginning with `---- NOW SOLID INSTRUCTIONS START ----`). Identical text in all 5 specs. The convention cross-references the example bank at `homegrown/protocols/conclude.md` (added by Edit 1 — the application of Component A from the prior `2026-05-07_22-10` finding) so the example shapes live in one canonical home rather than duplicating across 6 files.

Two edits + one state update:

- **Edit 1:** apply the prior `2026-05-07_22-10` finding's Component A — add 3 example pairs to `conclude.md` non-ambiguity principle's example list (which currently contains only 1 example pair). Verified absent in current spec.

- **Edit 2:** add the generic first-use convention sentence (Innovation finalizes wording) to the end of SOLID INSTRUCTIONS in each of the 5 discipline reference specs.

- **State update:** mark the prior `2026-05-08_06-30` `_state.md` as SUPERSEDED with a History entry pointing at this finding.

Component B from `2026-05-07_22-10` remains REJECTED with structural reasoning (heavy compute load; incompletely mechanizable; user explicit constraint; source-side prevention obviates destination-side scan).

The cascade: write-time generic convention prevents most ambiguity at source; Component A's 4 examples teach pattern recognition for residual cases at compile-time. Both lightweight. Total methodology-library cost: ~35-55 lines across 6 files. The prior narrow approach covered 1/6 at ~5 lines (much smaller per-file but missed 5/6 categories); this generic approach covers 6/6 at proportional cost. Per-case cost dramatically lower.

The shift from SV1: 6-type taxonomy anchored; Approach 4 (cross-reference to Component A) chosen over Approach 1 (self-contained); placement at end of SOLID INSTRUCTIONS confirmed; supersedes relationship explicit; Component A status verified (not yet applied; must be added).
