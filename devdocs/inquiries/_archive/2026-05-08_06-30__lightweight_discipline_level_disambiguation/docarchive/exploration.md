# Exploration: Lightweight Discipline-Level Disambiguation

## User Input

devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/_branch.md

## Mode and Entry Point

- **Mode:** Possibility exploration. The territory is a conceptual design space — what lightweight discipline-level interventions could reduce the most common internally-referential vocabulary in finding outputs?
- **Entry point:** Signal-first. The user named the constraint shape directly: lightweight, no regex, no per-output checklist, must respect compute limits.

## Territory Overview

Three regions:

- **Region A — The failure shape (what gets propagated).** What internally-referential vocabulary actually appeared in the docarchive of `2026-05-07_20-35` and surfaced into its finding? Concrete instances: "the current Probe section", "the current Surface-Only Scanning failure-mode prevention", "the current Coarse Scan step", bare "explore.md", bare "Surface-Only Scanning", bare "Coarse Scan", bare "Resolution Progression". The shape is consistent: definite-article references to spec-internal sections/components/failure-modes, plus title-case noun phrases used as if proper nouns.

- **Region B — The lightweight intervention space.** What can each discipline spec add at the cost of one short line in the SOLID INSTRUCTIONS section (the section that runs when the discipline executes), without per-output checklists or scans?

- **Region C — The complement at CONCLUDE.** Component A from the prior finding (4 expanded examples in the non-ambiguity principle's example list) stays. The discipline-level fix complements it: source-side reduction of ambiguity meets destination-side translation.

## Inventory (Possibility Mode)

### Standard / boring approach (must be on the map per completeness rule)

**Approach 1 — One-line "name the spec on first reference" rule per discipline.** Each discipline spec adds a single line to its SOLID INSTRUCTIONS section: *"When referencing a section, component, or failure mode from this discipline's reference document, name the document (or one-line role) on first use."* Cost: 1 line per discipline × 5 disciplines = 5 lines total. No checklist; no scan; the rule is read once at discipline startup and informs the runner's writing style.

### Variant approaches

**Approach 2 — Single shared rule at the COMMON convention (not per discipline).** A single line added to a shared place (e.g., a one-paragraph "Output conventions" section in each discipline's SOLID INSTRUCTIONS) that says: *"On first use, name the document/spec where any spec-internal section, component, or failure mode is defined. Subsequent uses can be bare."* Cost: same 5 lines aggregate, but the rule's wording is consistent across disciplines.

**Approach 3 — Output-template-level cue.** Modify the discipline's output structure with one cue (e.g., for Exploration's "Inventory" section, add a footnote-style hint: *"Reference any spec-internal terms with their source document on first appearance."*) Cost: 1 line per discipline, embedded in the template. Less salient than Approach 1 because it's inside an output section.

**Approach 4 — Shared "vocabulary handoff" sentence at end of every discipline output.** The discipline ends its output with a single line: *"Vocabulary used in this output that originates from the discipline's reference spec: [list]."* Cost: variable (depends on how many terms). Heavy at output time. **REJECT.**

**Approach 5 — Pre-compile lexicon embedded in each discipline spec.** Each discipline spec contains a glossary of its own terms. The runner consults the glossary when writing output. Cost: ~20-50 lines per discipline. **REJECT** — heavy, and disciplines are at compute limit.

**Approach 6 — No discipline-level fix; rely entirely on Component A at CONCLUDE.** The prior finding's Component A (expanded example list at CONCLUDE) does the heavy lifting; disciplines remain unchanged. Cost: 0 lines added at disciplines. Trade-off: Component A relies on the runner pattern-matching against examples without a structural reminder at the source.

### Contrarian / unusual approaches

**Approach 7 — Disciplines mark their own internal vocabulary.** When a discipline spec defines a named component/failure-mode/section, the spec itself carries a hint: *"When referencing this component in output, name the discipline."* But this requires modifying the *spec* (adding hints inline at every named term), which is heavy and pollutes the spec with maintenance content. **REJECT** — discipline-spec purity violation.

**Approach 8 — Move the responsibility to the runner-loaded preamble.** A single line in `MVL+/SKILL.md` or in the runner-level preamble that loads each discipline reminds the runner about the convention. Cost: 1 line at the runner level, informs all disciplines. **CONSIDER.**

## Signal Log

### Signal 1 — DENSITY at "first-use parenthetical" pattern

The prior finding's Component A examples all converge on the same fix shape: at first use, the bare term gets a parenthetical that names what it refers to (which spec, which file, which role). This is a writing-style convention more than a process step. Disciplines' SOLID INSTRUCTIONS could simply state this style preference once.

**Probe result:** approach 1 (one-line per discipline) and approach 2 (shared wording across disciplines) both encode this writing-style preference at the discipline level with minimum overhead.

### Signal 2 — ABSENCE of per-output checks

None of the lightweight approaches require the discipline to re-examine its output before terminating. This is the defining difference from Component B (which required the runner to scan, list candidates, walk each candidate, etc.). Lightweight = no scan, no checklist, no audit step.

### Signal 3 — The disciplines' SOLID INSTRUCTIONS sections are the right surface

Each discipline reference spec has a marker `---- NOW SOLID INSTRUCTIONS START ----` or equivalent. After this line, the runner gets the actionable instructions for executing the discipline. A single line added here is read when the discipline runs and shapes output behavior without any subsequent check step.

### Signal 4 — Approach 8 (runner-level preamble) overlaps with Component A

If the prior finding's Component A is at CONCLUDE and addresses cold-readability, a runner-level preamble that addresses spec-internal vocabulary would partially overlap. The cleaner placement is at the discipline level (per the placement convention's step-level scope category) since the writing happens inside the discipline.

### Signal 5 — Cost calibration via sister analyses

The five sister analyses (explore.md +25 lines; sensemaking.md +20 lines; decompose.md +6-10 lines; innovate.md +16-23 lines; td-critique.md +10-15 lines) all add multi-line rules with examples. The proposed lightweight fix is smaller (1 line per discipline = 5 lines total). This is the smallest intervention in the methodology library so far. Comparable to a CSS one-liner relative to the sister analyses' multi-paragraph rules.

## Confidence Map

| Region | Confidence | Reason |
|---|---|---|
| Failure shape (what propagated) | **CONFIRMED** | Prior finding documents 10+ specific instances |
| Approach 1 (one-line per discipline) feasibility | **CONFIRMED** | SOLID INSTRUCTIONS section exists in each discipline spec; single-line additions are consistent with existing conventions |
| Approach 2 (shared wording) | **CONFIRMED** | Same as Approach 1 with consistency benefit |
| Approach 6 (no discipline-level fix) | **SCANNED** | Defensible but loses source-side reduction |
| Approach 8 (runner-level preamble) | **INFERRED** | Possible but less placement-clean than per-discipline |
| Heavy alternatives (regex, translation pass, full glossary) | **CONFIRMED ABSENT** as needed | User explicitly rejected; sister-analysis precedent of lightweight extensions |

## Frontier State

**STABLE.** Three viable approaches in play (1, 2, 6). Approaches 4, 5, 7 rejected on weight grounds. Approach 8 partially overlaps with Component A; not preferred.

The convergence: Approach 1 or 2 (essentially the same intervention with minor wording difference) is the lightweight fit. Approach 6 (no discipline-level fix) is the maximally minimal option but relies on Component A alone.

### Jump Scan

Before declaring convergence, scan in a different direction: **could the lightweight fix live in the discipline OUTPUT TEMPLATE rather than the SOLID INSTRUCTIONS?** The output template is part of the discipline spec but operates at write-time rather than read-time. Approach 3 (output-template cue) is this direction. Less salient than SOLID INSTRUCTIONS placement; the runner sees the template after generating content rather than before. Reject — same line count but worse salience.

Frontier convergence achieved.

## Gaps and Recommendations

### The lightweight fix shape

**One sentence per discipline, in the SOLID INSTRUCTIONS section.** Suggested wording:

> *"When the output references a section, component, or failure mode that is defined in this discipline's reference spec (or any other Homegrown discipline spec), name the source on first use — e.g., 'the Probe component (in Structural Exploration)' rather than bare 'the Probe section'. Subsequent uses can be bare."*

Cost per discipline: 1 line of writing-style guidance. Total methodology-library cost: 5 lines.

### Verification against observed failures

The 10+ observed failures from `2026-05-07_20-35`'s finding all involve definite-article references to spec-internal sections + bare title-case noun phrases. The proposed sentence directly addresses both:

- Definite-article references: caught — runner names the source at first use.
- Bare title-case noun phrases: caught — same first-use convention applies.

Catches the same failures Component B's regex would have caught, but at the writing layer rather than the post-write check layer. No scan; no checklist.

### What the prior finding got right and wrong

- **Right (keep):** Component A — expanded example list at CONCLUDE. Lightweight (4 examples in existing paragraph), teaches pattern recognition, no per-output overhead.
- **Wrong (replace):** Component B — regex sub-section with patterns + checklist + remediation. Heavy (~25-30 lines added; per-output scan + per-match checklist; pattern-3 not even properly mechanizable). Required the runner to perform a scan task on every finding compilation.
- **Missing (add):** discipline-level prevention. The disciplines were never asked to write less ambiguous output; the prior finding correctly identified this as the source but rejected discipline-level fixes ("disciplines are working documents; conflate audiences"). The user's instinct is correct: a lightweight discipline-level convention reduces source-side ambiguity without conflating audiences (the convention is about cross-spec references, not about cold-readability for external readers).

### Speculative additions REJECTED

- **Per-output checklist at discipline level.** Same compute load as Component B; just relocated.
- **Glossary embedded in each discipline spec.** Heavy maintenance.
- **Inline hints at every named term in spec.** Spec purity violation; maintenance bloat.
- **Output template cues.** Worse salience than SOLID INSTRUCTIONS placement.

## Convergence Assessment

- **Frontier stability:** stable. Approach 1/2 is the lightweight viable region.
- **Declining discovery rate:** yes. Jump scan finds no surprises.
- **Bounded gaps:** yes. The convention's wording is the only remaining design choice for Innovation to nail down.

All three convergence criteria met. **Exploration converges.**

Sensemaking should: (a) stabilize the answer's structure (one-line writing-style convention per discipline; Component A stays at CONCLUDE; Component B is rejected), (b) collapse the ambiguity between Approach 1 (per-discipline wording) and Approach 2 (shared wording across disciplines), (c) determine the canonical home (SOLID INSTRUCTIONS section in each discipline spec).
