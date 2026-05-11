# Exploration: Finding Internal-Reference Ambiguity Failure

## Mode and Entry Point

**Mode:** Artifact exploration. The territory has concrete objects: (a) the failed `finding.md`, (b) the 5 discipline outputs in `docarchive/`, (c) `homegrown/protocols/conclude.md` itself.

**Entry point:** Signal-first. The user has identified two specific failure instances ("the current Probe section", "the current Surface-Only Scanning failure-mode") and asked: why did the rule fail to prevent these?

## Cycle 1 — Coarse Scan: Inventory the Failure Instances in finding.md

Scanning the failed finding.md for all internally-referential phrases:

**Pattern A — "the current X section" / "the X section":**

- "the current Probe section says..." (line 60 of finding.md, in section 2 "The gap")
- "the current Surface-Only Scanning failure-mode prevention says..." (line 60)
- "the current Scan section says..." (line 81)
- "the current Premature Depth failure-mode prevention says..." (line 81)
- "the current Resolution Progression's Coarse Scan step asks..." (line 81)

**Pattern B — discipline-spec-internal vocabulary used as if public:**

- "Probe section" — section in `homegrown/explore/references/explore.md`; not named for the reader.
- "Surface-Only Scanning" — failure mode in explore.md; not named for the reader.
- "Premature Depth" — failure mode in explore.md; not named for the reader.
- "Coarse Scan" — step in explore.md's Resolution Progression; not named for the reader.
- "Resolution Progression" — process in explore.md; not named for the reader.

**Pattern C — bare references to specs without parenthetical context on first use:**

- explore.md is referenced as "explore.md" (bare filename) without first-use parenthetical context naming it as "the Structural Exploration discipline spec at `homegrown/explore/references/explore.md`."

**Signal counts:**

- Pattern A: 5 instances.
- Pattern B: 5+ instances of discipline-spec-internal vocabulary used without first-use definition.
- Pattern C: bare filename without context.

**Signals detected:**

- **[Density]** Multiple internally-referential references — at least 5+5=10 instances.
- **[Tension]** conclude.md's non-ambiguity principle exists but the finding.md violates it repeatedly.
- **[Absence]** No concrete mechanical check in conclude.md to scan for these patterns.

**Resolution decision:** zoom in on (a) why the principle didn't prevent these (Cycle 2), (b) the docarchive's contribution (Cycle 3), (c) what mechanical fix would catch these (Cycle 4).

## Cycle 2 — Probe: Inspect conclude.md's Non-Ambiguity Principle

The principle (from `homegrown/protocols/conclude.md` lines 64-75):

> *"### Non-ambiguity principle (applies to every sentence)
> 
> Each sentence must be understandable to a reader with no prior exposure to this inquiry. The failure mode to prevent is **internally-referential shorthand** — sentences that make sense to the author (who's been living with the inquiry's vocabulary) but fail for an outside reader. Define niche terms briefly on first use; give project-specific references (e.g., `/MVL`, `enes/`, specific disciplines) a parenthetical context the first time each appears in the finding.
> 
> Example:
> - ❌ *'Template extends from 4 sections to 6'* — which template? in what context?
> - ✅ *'Our existing finding.md template (defined in the `value_extraction_design` inquiry) has 4 sections; this audit adds 2 more for a total of 6.'*"*

The Quality test (lines 219-225):

> *"After writing the finding, ask: 'Can someone read ONLY `finding.md`, at normal reading speed without backtracking, and understand the complete decision?' If no — if the reader needs to re-read paragraphs, scroll up to decode references, or consult other files to understand the verdict — the finding has failed the test. Revise."*

The Failure mode (line 329):

> *"Internally-referential shorthand in the finding — the finding fails the non-ambiguity principle. Detect via the quality test in Step 2; revise before saving."*

**Observations on the principle's mechanism:**

1. **Principle, not check.** The principle is stated as a guideline ("Define niche terms briefly on first use"), not as a mechanical check ("scan for the patterns 'the X section', 'the Y failure mode' and verify each has parenthetical context on first use"). The runner has to subjectively recognize patterns.

2. **Single example.** The example is "Template extends from 4 sections to 6" — which is one shape of the failure. The runner might recognize this exact shape but fail to recognize structurally similar shapes ("the current Probe section", "the Surface-Only Scanning failure mode").

3. **Quality test is subjective + self-applied.** Asking "can someone read ONLY finding.md without backtracking?" requires the runner to simulate a cold reader. The runner has just compiled the finding from upstream disciplines — they have all the context in their head. Self-honestly applying the test is hard.

4. **No mandate to translate from upstream discipline vocabulary.** The protocol says "compile from upstream outputs" but doesn't say "translate upstream's internally-referential vocabulary into non-ambiguous public form." The runner might inherit upstream's vocabulary unconsciously.

5. **Failure mode placement.** The failure mode "Internally-referential shorthand" appears in the Failure modes section (Step 6 area) but the detection is delegated to "the quality test in Step 2" — the same subjective test. The failure mode list doesn't add a mechanical check; it just names the failure.

**Conclusion of Cycle 2:** The principle EXISTS but lacks a MECHANICAL CHECK. The detection mechanism is subjective and is hard to self-apply when the runner is embedded in the inquiry's vocabulary.

## Cycle 3 — Probe: Inspect the docarchive's Contribution

Sampling the discipline outputs in `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/docarchive/`:

**`exploration.md`:**
- Line 25: *"the existing Probe section says..."*
- Line 26: *"the existing Scan section says..."*
- Line 41: *"Probe section says: ..."*
- Line 42: *"Surface-Only Scanning failure mode says: ..."*
- Line 43: *"Possibility Exploration section says..."*

**`sensemaking.md`:**
- Line 25: *"M2 targets Surface-Only Scanning"*
- Line 25: *"N1 targets Premature Depth"*
- Line 27: *"All 6 components and 6 failure modes operate at the within-cycle layer..."*
- Line 40-41: *"sits at Probe section + Surface-Only Scanning prevention"* / *"sits at Scan section + Premature Depth prevention + Coarse Scan in Resolution Progression"*

**`critique.md`:**
- Line 27: *"R1: extends Surface-Only Scanning's 'probe at least one signal' with..."*
- Line 28: *"R2: extends Premature Depth's 'complete at least one coarse scan before probing' with..."*
- Line 41-42: *"R1: one paragraph in Probe section + one paragraph in Surface-Only Scanning prevention. R2: one paragraph in Scan section + one paragraph in Premature Depth prevention..."*

**Pattern observed:** ALL FIVE discipline outputs use internally-referential vocabulary throughout. They use "Probe section", "Surface-Only Scanning", "Premature Depth", "Coarse Scan", "Resolution Progression" as if these were proper nouns the reader knows. The discipline outputs were written for a reader embedded in the explore.md vocabulary — they were not written for cold readers.

**The cascade:**

```
Disciplines write internally-referential vocabulary
    ↓
CONCLUDE compiles from disciplines
    ↓
CONCLUDE inherits the vocabulary AS-IS without translation
    ↓
finding.md contains the same internally-referential vocabulary
    ↓
non-ambiguity principle violated
```

**Conclusion of Cycle 3:** The upstream disciplines are the SOURCE of the internally-referential vocabulary. CONCLUDE didn't introduce the shorthand — it inherited it. The non-ambiguity principle's "first use" framing assumes the runner is composing from scratch, but in practice CONCLUDE is REWRITING upstream content. The "first use" check needs to apply to the upstream content's first appearance in finding.md, not the runner's first writing of it.

## Cycle 4 — Probe: What Concrete Mechanical Check Would Catch These?

A mechanical check is one a runner can apply step-by-step without subjective judgment. The check should:

1. **Identify candidate references.** Patterns to scan: "the X section", "the X failure mode", "the X component", "the X step", "the X protocol", "the X principle", bare names of files/concepts that aren't in common English.
2. **Verify each has parenthetical context on first use.** Each candidate reference must have, on its first appearance in finding.md, a parenthetical phrase that names WHAT the reference is referring to (which file, which spec, which discipline).
3. **Specify what the parenthetical must include.** For a section reference: "the X section in [filepath] (which is [one-line role description])." For a failure mode: "the X failure mode (one of N failure modes in [discipline])." For a discipline-internal concept: "X (defined as [one-line definition] in [filepath])."

**Three concrete mechanical-check candidates:**

**Candidate Fix-1 (regex scan + first-use checklist):** Add a paragraph to `conclude.md` Step 2 that mandates a regex-style scan of the drafted finding.md for definite-article patterns ("the [Title-Case Words] section", "the [Title-Case Words] failure mode", etc.) and a checklist verification that each has parenthetical context on first use. This is the most mechanical option.

**Candidate Fix-2 (translation pass):** Add a STEP 2.5 (between Step 2 "Compile the finding" and Step 3 "Archive") that requires a "translation pass": go through the drafted finding.md and replace every reference inherited from upstream disciplines with its public form (file path + role description on first use). This is a process-level fix.

**Candidate Fix-3 (concrete example expansion):** Expand the conclude.md non-ambiguity-principle example list to include 3-5 concrete failure shapes (not just "Template extends from 4 to 6"). Specifically include: definite-article references to discipline-spec sections, failure mode names, components, steps. This is the lightest fix; relies on pattern-matching from examples.

**Cycle 4 conclusion:** Fix-1 (regex scan + checklist) is the most mechanical; Fix-2 (translation pass) is the most thorough; Fix-3 (example expansion) is the lightest. A combination of Fix-3 + Fix-1 is likely the right balance: Fix-3 provides examples the runner can pattern-match against; Fix-1 provides the mechanical check that catches what pattern-matching misses.

## Cycle 5 — Probe: Should the Fix Apply to Upstream Disciplines Too?

The cascade showed that internally-referential vocabulary originates in the upstream discipline outputs. Should the fix apply there too — i.e., should the discipline specs (sensemaking.md, exploration.md, etc.) also have a non-ambiguity principle?

**Counter-argument:** the discipline outputs are WORKING DOCUMENTS for the runner embedded in the inquiry. They don't need to be cold-readable. The cold-readable artifact is finding.md.

**Defense:** the cascade shows that working-document vocabulary propagates into finding.md. If CONCLUDE's translation pass can't catch every case, upstream-side disambiguation reduces the load.

**Resolution:** apply the fix at CONCLUDE only. Upstream disciplines are working documents; CONCLUDE is the cold-readable surface. CONCLUDE has the responsibility to translate. Adding a non-ambiguity principle to every discipline spec would be over-reach (and would slow the disciplines).

This matches the existing structure: disciplines produce working content; CONCLUDE compiles. CONCLUDE's translation responsibility is the right surface.

## Cycle 6 — Jump Scan + Convergence

**Jump scan:** what if the gap is NOT in the protocol (conclude.md) but in the runner's process (how a runner reads the protocol)? E.g., the principle is fine but runners read it superficially because it's buried in the middle of Step 2.

**Probe:** the principle's placement is in Step 2 between "Be complete but not dense" and the finding template. A runner working through Step 2 sees: section descriptions, then the principle, then the template. The principle is NOT a separate step.

**Possible re-framing:** make the non-ambiguity check a separate Step (e.g., Step 2.7 — Non-Ambiguity Pass) so it's structurally salient.

This converges with Fix-2 (translation pass as separate step). Confirms Fix-2's value.

**Convergence check:**
- Frontier stable: yes; the failure mechanism is identified, fix candidates are mapped.
- Discovery rate declining: yes; cycles 2-5 each produced new structural information; cycle 6's jump scan converged with cycle 4 rather than producing new region.
- Bounded gaps: yes; remaining unknowns (which fix candidate is best) are for downstream Sensemaking + Critique.

CONVERGED.

## Final Deliverable

### 1. Territory Overview

The territory is the failure mechanism by which `conclude.md`'s non-ambiguity principle did not prevent internally-referential references in finding.md. Major regions:
- The failure instances in finding.md (10+ references).
- The principle's text in conclude.md (existing rule, but no mechanical check).
- The docarchive's discipline outputs (source of the internally-referential vocabulary).
- The fix candidate space (3 candidates: regex scan / translation pass / example expansion).

### 2. Inventory

**Failure instances:** 5 explicit "the current X section" patterns + 5+ discipline-spec-internal vocabulary uses without first-use definitions in finding.md.

**Root cause hypotheses:**
- **H1 (HIGH):** The non-ambiguity principle is a PRINCIPLE, not a CHECK. The runner has to subjectively recognize patterns; subjective recognition fails when the runner is embedded in the vocabulary.
- **H2 (HIGH):** The upstream disciplines (5 files in docarchive) all use internally-referential vocabulary. CONCLUDE inherits this vocabulary AS-IS without a translation pass.
- **H3 (MEDIUM-HIGH):** The Quality test is subjective + self-applied. Cold-eyed application is hard for a hot-eyed runner.
- **H4 (MEDIUM):** The principle's example shows one shape ("Template"). Other shapes ("the X section", "the Y failure mode") may not be recognized as the same failure pattern.
- **H5 (LOW-MEDIUM):** The principle is buried in Step 2 between other content; not structurally salient.

**Fix candidates:**
- **Fix-1 (regex scan + first-use checklist):** mechanical check via pattern scan; runner applies as a checklist step.
- **Fix-2 (translation pass as separate step):** add Step 2.5 in conclude.md; mandates one pass of replacing internally-referential references with public form.
- **Fix-3 (example expansion):** expand the principle's example list to include 3-5 concrete failure shapes.

### 3. Signal Log

- **[Density]** 10+ failure instances in finding.md → probed in Cycle 1.
- **[Absence]** No mechanical check in conclude.md → probed in Cycle 2.
- **[Tension]** Principle exists but failure occurred → probed in Cycle 2.
- **[Cascade]** Upstream disciplines propagate vocabulary → probed in Cycle 3.
- **[Gap]** Mechanical-check candidates → probed in Cycle 4.
- **[Boundary]** Should fix apply upstream too? → probed in Cycle 5; resolved NO.
- **[Convergence]** Jump scan converged with Fix-2 → confirmed in Cycle 6.

### 4. Confidence Map

| Region | Confidence |
|---|---|
| Failure instances enumeration | Confirmed (10+ instances) |
| H1 (principle not check) | Confirmed |
| H2 (upstream cascade) | Confirmed |
| H3 (subjective test) | Scanned |
| H4 (example shape narrowness) | Scanned |
| H5 (placement) | Inferred |
| Fix-1 (regex scan) | Scanned |
| Fix-2 (translation pass) | Scanned |
| Fix-3 (example expansion) | Scanned |
| Whether fix should apply upstream | Confirmed (NO) |

### 5. Frontier State

STABLE. The failure mechanism is identified at three converging causes (H1 + H2 + H3). The fix space has three candidates with different cost/coverage profiles.

### 6. Gaps and Recommendations

**For Sensemaking:** stabilize the root-cause cascade and select the right fix combination. Likely Fix-3 (light) + one of Fix-1 / Fix-2 (mechanical/process).

**For Decomposition:** partition the fix surface (rule wording, check mechanism, placement, example list).

**For Innovation:** generate concrete wording for each fix component.

**For Critique:** verify the fix would have caught the specific failures observed in the finding.md (test against Cycle 1's failure instance enumeration).
