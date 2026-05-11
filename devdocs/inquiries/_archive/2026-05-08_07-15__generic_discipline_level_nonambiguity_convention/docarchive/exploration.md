# Exploration: Generic Discipline-Level Non-Ambiguity Convention

## User Input

devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/_branch.md

## Mode and Entry Point

- **Mode:** Possibility exploration (conceptual — what generic-but-lightweight discipline-level interventions exist?), partly Artifact (what's currently in `conclude.md`?).
- **Entry point:** Signal-first. Two strong signals from user pushback: (1) prior cross-spec-only scope was too narrow; (2) the broad non-ambiguity problem is generic across many shorthand types.

## Territory Overview

Three regions:

- **Region A — Component A status (artifact).** Verify whether the prior `2026-05-07_22-10` finding's Component A (the 3 additional example pairs) is in `homegrown/protocols/conclude.md`. **CONFIRMED ABSENT** — current `conclude.md` lines 70-73 contain only the original "Template" example pair; the proposed 3 additional pairs (Probe section / Surface-Only Scanning / Coarse Scan) were never applied. Component A must be added.

- **Region B — The full taxonomy of internally-referential shorthand the convention must cover.** What types of shorthand actually appear in discipline outputs and findings?

- **Region C — Generic convention design space.** What lightweight wording covers all shorthand types in one short sentence?

## Inventory

### Region A — Confirmed gap

- `homegrown/protocols/conclude.md` lines 70-73: contains the original "Template extends from 4 sections to 6" example pair.
- Component A proposes adding 3 more pairs (Probe section / Surface-Only Scanning / Coarse Scan), bringing the total to 4 examples.
- **Status: NOT yet applied.** Must be added.

### Region B — Taxonomy of internally-referential shorthand

Examining the 10+ observed failures from `2026-05-07_20-35`'s finding plus what naturally appears in discipline outputs across the corpus:

| Shorthand type | Examples | Catches by prior narrow convention (cross-spec only)? | Catches by GENERIC convention? |
|---|---|---|---|
| **Cross-spec references** (sections, components, failure modes from another Homegrown discipline reference spec) | "Probe section", "Surface-Only Scanning", "Coarse Scan", "Resolution Progression" | YES | YES |
| **Within-discipline references** (this discipline's own components/phases referenced bare in the output) | Critique referencing its own "Phase 0" or "Prosecution" without context | NO | YES (a generic principle catches this when the context isn't obvious) |
| **Inquiry-coined terms** (concepts named within the current inquiry but never defined for the outside reader) | "M6", "TP3", "P11", "Q-RF", "the M-N-O-R-S-T-U scheme" — these are LOOP_DIAGNOSE-corpus identifiers coined by the running inquiry | NO | YES |
| **Project-specific references** (runners, protocols, paths) | `/MVL+`, `/MVL`, `enes/`, `homegrown/`, `LOOP_DIAGNOSE` | NO | YES |
| **Abbreviations** (short identifiers tied to longer concepts) | "SV6", "MVL+", "CONCLUDE" | NO | YES |
| **Bare file paths** (filename or path mentioned without naming what it is) | "explore.md" used bare on first use | NO | YES |

The prior cross-spec-only convention covered roughly 1/6 of the actual shorthand types. The generic version must cover all 6.

### Region C — Generic convention design space

#### Approach 1 — One short sentence at SOLID INSTRUCTIONS, generic principle

A single sentence in the SOLID INSTRUCTIONS section of each of the five discipline reference specs, expressing a generic first-use convention. Example wording:

> *"On first use of any niche term — a project-specific reference (e.g., `/MVL+`, `enes/`, a protocol name), an abbreviation, a name from another spec, a file path, or a concept coined within this inquiry — give brief parenthetical context naming what it refers to. Subsequent uses can be bare."*

About 45 words. Lists the main shorthand types as examples (not as exhaustive trigger list); the principle is the meta-rule. Identical text in all 5 disciplines. Cost: ~5-7 lines aggregate.

#### Approach 2 — Same as Approach 1 but list-form

> **First-use context.** When introducing any niche term in the output, give brief parenthetical context on first use. Examples of niche terms: project-specific references (`/MVL+`, `enes/`, protocol names), abbreviations (`SV6`, `M6`), names from a Homegrown discipline reference spec (e.g., "Probe component"), bare file paths, and inquiry-coined concepts. Subsequent uses can be bare.

About 50 words; clearer enumeration. Trade-off: longer.

#### Approach 3 — Maximally compressed

> **First-use context.** When introducing a term that wouldn't be obvious to someone reading only this output, give it brief parenthetical context naming what it refers to. Subsequent uses can be bare.

About 30 words. Pure principle, no enumeration. Pro: shortest. Con: no examples; runner has to recognize "wouldn't be obvious" subjectively. Trade-off: same subjectivity risk as the prior `2026-05-07_22-10` principle that failed.

#### Approach 4 — Minimal sentence + reference to Component A's examples at conclude.md

> **First-use context.** When introducing a niche term in this output (project-specific references, abbreviations, names from other Homegrown specs, file paths, inquiry-coined concepts), give brief parenthetical context on first use. See `homegrown/protocols/conclude.md` non-ambiguity principle for example shapes.

About 45 words. Names the categories briefly + cross-references Component A's examples. Pro: doesn't duplicate examples; leverages Component A as the example bank.

#### Approach 5 — No discipline-level convention; rely entirely on Component A

Component A's 4 examples at conclude.md handle pattern teaching at compile-time only. No discipline-level intervention. Pro: zero added load at disciplines. Con: source-side prevention is lost; CONCLUDE has more residual cases to catch.

#### Rejected approaches

- **Per-output checklist.** Same regression to Component B's check-time approach.
- **Embedded glossary at each discipline.** Heavy.
- **Inline hints at every named term in each spec.** Spec purity violation.

## Signal Log

### Signal 1 — DENSITY at "first-use parenthetical" pattern

Component A's 4 examples and the existing `conclude.md` non-ambiguity principle all converge on the same fix shape: bare term on first use → bare term + parenthetical context on first use → subsequent uses bare. The discipline-level convention should encode this shape generically.

### Signal 2 — TAXONOMY signal

The 6 shorthand types share the same correction (parenthetical context on first use) but differ in WHAT context to add:
- Cross-spec / within-discipline references → name the source spec or discipline.
- Inquiry-coined terms → brief definition or "coined in this inquiry as [meaning]".
- Project-specific references → brief role description.
- Abbreviations → expansion.
- File paths → name what the file is.

A generic convention can use the principle ("brief parenthetical context naming what it refers to") and let the runner adapt the context shape to the term type. This is structurally cleaner than enumerating per-type rules.

### Signal 3 — Approach 4 (refer to Component A's examples) is structurally elegant

Approach 4 keeps the discipline-level convention short by deferring to Component A's example bank. Component A becomes the canonical home for example shapes; disciplines reference it. This matches the placement convention (single canonical home + cross-reference).

### Signal 4 — Composition with Component A

The 4 examples at Component A + the discipline-level convention together teach the runner WHAT shape the parenthetical takes. Disciplines don't need to repeat the examples; they need to reference the same source. This is structurally consistent with the placement convention.

### Signal 5 — Prior finding's superseded scope

The prior `2026-05-08_06-30` finding's narrow cross-spec scope is technically correct as far as it goes, but the user is right that it's the WRONG goal. This new finding supersedes it via the frontmatter `supersedes:` field.

## Confidence Map

| Region | Confidence | Reason |
|---|---|---|
| Component A status (NOT yet applied) | **CONFIRMED** | Direct grep of conclude.md |
| Generic taxonomy (6 shorthand types) | **CONFIRMED** | Multi-source observation across corpus |
| Approach 1 (generic principle, examples in wording) | **CONFIRMED** as viable | Length 45 words; one sentence; lightweight |
| Approach 4 (refer to Component A) | **CONFIRMED** as viable | Length 45 words; cross-reference cleanly to canonical home |
| Approach 5 (no discipline convention) | **SCANNED** | Defensible but loses source-side reduction |
| Heavy approaches (regex, glossary, inline hints) | **CONFIRMED ABSENT** as needed | User constraint + sister-analysis precedent |

## Frontier State

**STABLE.** Two viable approaches in play (1 and 4); they're substantively similar. Approach 4 is slightly cleaner because it leverages Component A as the example bank; Approach 1 is self-contained. Sensemaking will collapse this ambiguity.

### Jump Scan

Before declaring convergence, scan in a different direction: **could the convention live at conclude.md alongside Component A and skip the disciplines entirely?** Evaluating this — it would push everything to compile-time. The user's pushback was specifically about wanting source-side prevention so the discipline outputs are less ambiguous, not just the finding. Skipping disciplines would lose that. Reject this jump direction.

Frontier convergence achieved.

## Gaps and Recommendations

### The lightweight fix shape (broadened from prior finding)

**Two parts that compose:**

1. **At `conclude.md`:** Apply Component A from the prior `2026-05-07_22-10` finding. The 3 additional example pairs go into the existing non-ambiguity principle's example list, bringing the total to 4 examples. This is the destination-side translation layer's example bank.

2. **At each of the 5 discipline reference specs (SOLID INSTRUCTIONS section):** A single sentence prescribing a GENERIC first-use parenthetical convention covering all shorthand types — not just cross-spec references.

### Proposed wording (Approach 1 or Approach 4 — Sensemaking will pick)

**Approach 1 (self-contained):**

> **First-use context.** On first use of any niche term — a project-specific reference (e.g., `/MVL+`, `enes/`, a protocol name), an abbreviation, a name from another Homegrown discipline reference spec, a bare file path, or a concept coined within this inquiry — give brief parenthetical context naming what it refers to. Subsequent uses can be bare.

**Approach 4 (refers to Component A):**

> **First-use context.** When introducing a niche term in this output (project-specific references, abbreviations, names from other Homegrown specs, file paths, inquiry-coined concepts), give brief parenthetical context on first use. See `homegrown/protocols/conclude.md` non-ambiguity principle for example shapes.

Both ~45 words; both generic; both lightweight. Approach 4 is structurally cleaner via cross-reference; Approach 1 is self-contained without external dependency.

### Verification against observed failures + broader shorthand types

Re-running coverage check across all 6 shorthand types:

| Shorthand type | Example | Caught by GENERIC convention? |
|---|---|---|
| Cross-spec references | "Probe section", "Surface-Only Scanning", "Coarse Scan", "Resolution Progression" | YES |
| Within-discipline references | Critique referencing own "Phase 0" without context | YES |
| Inquiry-coined terms | "M6", "TP3", "P11", "Q-RF" | YES |
| Project-specific references | `/MVL+`, `enes/`, `LOOP_DIAGNOSE` | YES |
| Abbreviations | "SV6", "CONCLUDE" | YES |
| Bare file paths | "explore.md" on first use | YES |

All 6 covered by the generic convention. The prior cross-spec-only scope covered only 1/6.

### Speculative additions REJECTED

- **Component B from prior `2026-05-07_22-10` finding** (regex sub-section + checklist) — REJECTED with structural reasoning carried forward from prior `2026-05-08_06-30` finding (heavy compute load; incompletely mechanizable; user explicit constraint; source-side prevention obviates destination-side scan).
- **Per-output checklist at discipline level** — same regression.
- **Glossary embedded in each spec** — heavy.

### Supersedes / replaces prior `2026-05-08_06-30` finding

The prior `2026-05-08_06-30` finding's narrow cross-spec-only scope is structurally inadequate — covers 1/6 of the actual shorthand types. This finding supersedes it. The frontmatter will use `supersedes:` to mark the prior as superseded.

## Convergence Assessment

- **Frontier stability:** stable.
- **Declining discovery rate:** yes; jump scan finds no surprises.
- **Bounded gaps:** yes; only Sensemaking-level decision is Approach 1 vs Approach 4 wording choice.

All three convergence criteria met. **Exploration converges.**

Sensemaking should: (a) confirm Component A must be applied to conclude.md (currently absent); (b) collapse Approach 1 vs Approach 4 ambiguity for the discipline-level convention wording; (c) confirm composition with Component A; (d) confirm rejection of prior narrow scope (supersedes 2026-05-08_06-30).
