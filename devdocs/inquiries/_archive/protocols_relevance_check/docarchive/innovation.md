# Innovation: protocols_relevance_check

## User Input
devdocs/inquiries/protocols_relevance_check/_branch.md

Apply 7 mechanisms × 3 variations each. Develop concrete designs for the 4 pieces (P1 status-table update, P2 doc enrichment, P3 loop_design back-link, P4 VERSION build decision). Apply assembly check.

---

## Seed

Four partly-specified work pieces from decomposition. Goal: produce concrete design candidates per piece (actual proposed wording / actual cross-reference placement / actual VERSION build options) so critique can evaluate fitness.

The framework wants novelty + viability. Most variation will land on actionability and right-sizing rather than blue-sky novelty (the work is doc maintenance + one build decision, not architectural exploration).

---

## Phase 2 — Generate (7 mechanisms × 3 variations)

### 1. Lens Shifting (framer)

| Variation | Lens | Output |
|---|---|---|
| **Generic** | "Reader comes back to the doc 6 months later, cold" | Forces status table entries to include the WHY of their status, not just the label. "Removed" alone is a dead end; "Removed in inquiry X (date) — see finding for context" is recoverable. → P1 should include audit-trail breadcrumbs. |
| **Focused** | "/intuit Phase A actually ships in 30 days" | Suddenly VERSION is no longer speculative; it's near-term. The status table must be ready to support concrete iteration tracking the moment /intuit ships. → P4 leans toward design-now (P4.B) rather than pure defer (P4.A). |
| **Controversial** | "User accidentally deletes the doc in 12 months — what content is load-bearing enough that it MUST live somewhere else?" | The autonomy-ladder mapping (because it's project-goal connectivity). Suggests the autonomy-ladder content lives in `enes/desc.md` (project goal doc), not just in `protocols/desc.md` as a cross-reference. → Surfaces P2.C (move autonomy-mapping to enes/desc.md). |

### 2. Combination (generator)

| Variation | Combine | Output |
|---|---|---|
| **Generic** | "Status table" + "autonomy ladder" | Status entries that explicitly include WHICH autonomy level each protocol unblocks. New table column. → P1.B (status + Build-trigger column with capability mapping). |
| **Focused** | "loop_design_N.md series" + "protocols/desc.md" | A unified design-dimension × protocol matrix: for each of loop_design_1's 8 design dimensions, which named protocol governs it. New artifact (could be a section in either doc, or a small index file). → New variation: a comparison table that sits in either doc, makes the dimension/protocol relationship explicit. |
| **Controversial** | "protocols-doc as map" + "_state.md as source-of-truth pattern" | Make protocols/desc.md a generated-from-truth doc — treat each command's actual implementation as source-of-truth, have the doc auto-summarize. Tooling overhead probably exceeds the doc-maintenance saving. Surfaces an extreme alternative; rejected as overkill but illustrates the cost-benefit edge. |

### 3. Inversion (framer)

| Variation | Invert | Output |
|---|---|---|
| **Generic (component)** | "The doc reflects reality" → "Reality reflects the doc" | Currently descriptive. What if prescriptive? Missing-protocol section becomes spec sketches with steps + completion test + failure modes — not just labels. → Surfaces P4.B (design VERSION spec now, even before build). |
| **Focused (system)** | "Protocols are implemented in commands" → "Protocols are NOT in commands; they're in `_state.md`" | Each `_state.md` is an instance of the protocols' state machine; commands just read/write it. Reframes protocols as data-machinery rather than command-machinery. Interesting but moot for current pieces — the current commands already follow this pattern operationally. |
| **Controversial (root)** | "We have 3 loop runners + a protocols doc" → "We should have ONE loop runner that reads its protocols from a config file" | Protocols doc becomes the spec for runtime configuration. Large refactor; out of scope for current pieces. Surfaces a long-term direction worth noting in the doc's "future" section but not actionable now. |

### 4. Constraint Manipulation (framer)

| Variation | Modify | Output |
|---|---|---|
| **Generic (add)** | Add: "Every protocol entry must name its build-trigger explicitly" | Forces all 6 missing protocols to get triggers (P1 already does this); also forces the 5 alive ones to name their "what would invalidate this" trigger. Tightens the table. → P1.B refinement: add a "Trigger / invalidation condition" column for ALL protocols, not just missing ones. |
| **Focused (add)** | Add: "Every doc edit must point to a concrete user-visible benefit" | Focuses P1 on pruning low-value edits; focuses P2 on the autonomy-ladder mapping (highest reader-value addition). Pushes toward P2.B (focused enrichment) rather than P2.A (minimal). |
| **Controversial (remove)** | Drop: "protocols/desc.md must be a single doc" | Split into: `protocols/index.md` + `protocols/pipeline.md` + `protocols/transfer.md` + `protocols/persistence.md`, with each named protocol eventually getting its own page. Surfaces P1.C (ADR-style restructure). Larger refactor; valuable when missing protocols start getting built (more authors → more contention → more value in per-protocol pages). |

### 5. Absence Recognition (generator)

| Variation | What's missing | Output |
|---|---|---|
| **Generic (current-design gap)** | The doc has no "what's actively being worked on" indicator | A reader can't tell from the status table whether the user is mid-edit on a protocol or not. → Add a "Last reviewed: YYYY-MM-DD" or "Active changes" annotation per protocol. Cheap addition; lives well in the existing table. |
| **Focused (small gap)** | The doc doesn't mention this very inquiry (`protocols_relevance_check`) | This audit will produce a finding; the finding should be linkable. → Add a "History / Audits" footer pointing to `devdocs/inquiries/protocols_relevance_check/finding.md` once it's written. |
| **Controversial (designed-from-scratch)** | If we were redesigning today, would we have a separate protocols doc? Or would each command embed its own protocols-section? | E.g., `commands/MVL.md` gains a "Protocols implemented" header listing CONFIGURE, STEER, etc. Could federate the protocols dimension out of one map into many command-local declarations. Larger refactor; eliminates "stale doc" problem (each command declares its own; drift = command spec drift, already audited). Long-term direction; surface as deferred item in protocols/desc.md's "future" section. |

### 6. Domain Transfer (generator)

| Variation | Source domain | Output |
|---|---|---|
| **Generic (open-source READMEs)** | GitHub README pattern: top-level README points outward to sub-docs | Apply: protocols/desc.md becomes an INDEX with overview + pointers to per-category sub-pages. Convergent with Constraint #4 controversial. Validates P1.C (ADR-style) as a structurally-supported direction. |
| **Focused (Architecture Decision Records / ADRs)** | Each major architectural decision in software gets its own ADR file with date, status, context, decision, consequences | Apply: each named protocol becomes an ADR. The dimension's "doc" becomes an index pointing to N ADRs. Same shape as the inquiries folder. Surfaces P1.C as a recognized architectural pattern, not just an idea. |
| **Controversial (biology — gene expression)** | Genes exist as code in DNA but only "express" when needed (transcribed to protein) | Apply: protocols exist as named-vocabulary in the doc, but only "express" (get implemented) when a specific autonomy capability triggers them. → STRONGLY VALIDATES the current design with capability triggers. The 6 missing protocols are "unexpressed genes" — present in the genotype, transcribed only when their capability emerges. Suggests the protocols doc itself should explicitly use this framing for missing protocols. |

### 7. Extrapolation (generator)

| Variation | Extrapolate | Output |
|---|---|---|
| **Generic (project growth)** | In 1 year there will be 2-3 more disciplines, possibly 1-2 more loop runners, and possibly some protocols implemented | The doc will need to scale. → P1.C (per-protocol restructure) becomes more attractive over time; today's small-scale single-doc is fine but won't be in 1-2 years. |
| **Focused (Baldwin cycle maturity)** | In 1 year, /intuit Phase A is producing real iteration data; Baldwin cycle is calibrating; VERSION is built and integrated | The doc's status table needs to support "alive-and-functional" with last-calibrated date as a new column. → P1.B (Build trigger column) extends naturally to also support a "Last calibrated" column. |
| **Controversial (5-year future)** | The project either reaches Level 3+ (protocols become deeply formalized) OR plateaus at Level 0-1 (protocols doc becomes a museum piece) | The current update is bet-hedging — we don't know which future ships. The minimum-update version (P1.A only) is well-calibrated to bet-hedging; over-investment in restructure (P1.C) is not worth it before evidence of which trajectory plays out. → Validates Configuration α (MINIMUM) as a defensible bet-hedge. |

---

## Concrete Designs Per Piece

### P1 — Status Table Update

#### P1.A — Minimal drop-in fixes (RECOMMENDED MINIMUM)

**Edits to `thinking_disciplines/protocols/desc.md`:**

1. **Metadata injection** entry: change status from "Implemented as the `devdocs_metadata_appender.sh` hook" to:
   > **Removed.** The `hooks/` directory was deleted in 2026-04 (see commit history). Replacement deferred — no current need; revive if provenance headers become required for self-improvement traceability.

2. **Archival** entry: change "Exists as the `/devdocs-archivist` command" to:
   > **Removed as a standalone command.** Per-inquiry archival is now embedded in `/MVL` and `/MVL+`'s ITERATION-COMPLETE step (discipline outputs move to `docarchive/` when the finding is written). Cross-inquiry stale-detection (the original `/devdocs-archivist` use case) is currently absent.

3. **RESUME** entry: change "Currently lives inside `/inquiry`" to:
   > **Implemented in all three loop runners** (`/MVL`, `/MVL+`, `/inquiry`). Each reads `_state.md` plus file-existence cross-check; same procedure, three implementations.

4. **Folder convention** entry: change path from "Documented in `devdocs/folder_based.md`" to:
   > Documented in `enes/runtime_environment/folder_based.md`. **Battle-tested in active inquiry use** (every inquiry under `devdocs/inquiries/` follows this convention).

5. **Current State count table** at line 138-142: replace with:

   | Status | Count | Protocols |
   |--------|-------|-----------|
   | **Alive — embedded in commands** | 5 | CONFIGURE, STEER, TERMINATE, RESUME, SYNTHESIZE |
   | **Alive — partial / generalized** | 3 | BRANCH (rationale only), folder convention, archival (runner-embedded) |
   | **Alive — discipline component** | 1 | CV persistence (in `/comprehend`) |
   | **Removed** | 2 | metadata injection, freshness checks (CLAUDE.md doesn't exist) |
   | **Missing — needed for stated goals** | 6 | SCOPE, BRANCH (formal step), MERGE, HANDOFF, BRIEF, VERSION |

6. **Missing-protocol entries** get inline build-trigger annotation. Template wording (apply to each of SCOPE / BRANCH / MERGE / HANDOFF / BRIEF / VERSION):

   > **MISSING. Build trigger:** [specific condition]. **Unblocks:** [autonomy-ladder capability]. **Why deferred:** [reason — usually "no current capability needs it"].

   Per-protocol triggers (from sensemaking):
   - **VERSION** — Build trigger: when `/intuit` Phase A starts producing iteration-comparable invocation traces. Unblocks: Baldwin cycle calibration. Why deferred: /intuit Phase A is current immediate-next-step (per `enes/desc.md`); VERSION's shape depends on what /intuit produces.
   - **SCOPE** — Build trigger: autonomy ladder reaches Level 2 (system handles uncertain reviews). Unblocks: autonomy-level-aware effort calibration. Why deferred: Level 0 doesn't need scope-budgeting; human is bootstrap.
   - **BRANCH (formal step)** — Build trigger: parallel MVL loops capability begins (Open Question #4 in `enes/desc.md`). Unblocks: per-branch sub-pipelines. Why deferred: no parallel-runs need yet.
   - **MERGE** — Build trigger: same as BRANCH (depends on it). Unblocks: combining parallel-branch outputs. Why deferred: depends on BRANCH.
   - **HANDOFF** — Build trigger: autonomy ladder reaches Level 3+ (system handles tactical self-improvement; cross-agent or cross-session work emerges). Unblocks: full-context transfer to a different agent. Why deferred: current Level 0-1 doesn't need cross-agent handoff.
   - **BRIEF** — Build trigger: same as HANDOFF. Unblocks: cold-start for an active-participant agent. Why deferred: same as HANDOFF.

**Net edits:** ~30 lines of doc changes.
**Pro:** Cheapest correct version. Doc no longer misleads. Triggers documented.
**Con:** Doesn't surface the load-bearing-for-autonomy-ladder argument unless the reader connects the dots.

#### P1.B — P1.A + Build-trigger column for ALL protocols (RECOMMENDED FULLER)

All P1.A edits PLUS:
- Restructure each category table to add a **Build-trigger / invalidation-condition** column.
- For alive protocols, the column states "what would mark this as no longer alive" (e.g., RESUME's invalidation condition: "if a future loop runner ships without RESUME support — flag as drift").
- For missing protocols, the column states the build trigger (per P1.A).

**Net edits:** ~40 lines.
**Pro:** Symmetric treatment of all protocols (alive and missing both have triggers). Anticipates extrapolation #2 (Baldwin cycle maturity adding "Last calibrated" — same column structure can host this).
**Con:** ~10 extra lines for marginal value at current scale.

#### P1.C — Restructure as per-protocol ADR-style sections (CONTRARIAN, deferred)

Replace the per-category status table with one section per protocol (16 mini-sections). Each section includes status, location, build trigger, last verified, history.

**Pro:** Architecturally clean; matches Domain Transfer #6 (ADR pattern); scales to multi-author edits.
**Con:** Larger restructure (~80 lines). Premature today (single-author, low edit-rate). Defer until extrapolation #1 conditions emerge (more disciplines / more authors).

---

### P2 — Doc Enrichment

#### P2.A — Minimal cross-reference (RECOMMENDED MINIMUM)

**Edit to `thinking_disciplines/protocols/desc.md`:**

Add a small section near the existing "How Protocols Relate to Disciplines" section (around line 150-159):

```markdown
## How Protocols Relate to Loop Runners

The project has three loop runners (`/MVL`, `/MVL+`, `/inquiry`) that embed several of the named protocols. For runner-by-runner choices on each operational dimension (drive mode, state tracking, steering component, iteration files, pipeline flexibility, branch parallelism, synthesis, cross-inquiry learning), see:

- `enes/loop_desing_ideas/loop_design_1.md` — cross-runner taxonomy of design dimensions
- `enes/loop_desing_ideas/loop_design_2.md` — `/MVL` deep walkthrough
- `enes/loop_desing_ideas/loop_design_3.md` — `/MVL+` deep walkthrough

Loop_design is runner-first; this document is concept-first. Both views are needed: a reader investigating "what does `/MVL+` do?" goes to loop_design; a reader asking "is there a way to handoff context?" goes here.
```

**Net edits:** ~10 lines.
**Pro:** Cheap. Enables cross-doc navigation.
**Con:** Doesn't surface the load-bearing-for-goal claim.

#### P2.B — P2.A + Autonomy-ladder mapping section (RECOMMENDED FULLER)

All P2.A edits PLUS new section:

```markdown
## How the Missing Protocols Connect to the Autonomy Ladder

The 6 missing protocols are not arbitrary gaps. Each maps to a specific capability that the project's stated long-term goal (`enes/desc.md`) commits to. A future where the project reaches Level 3+ autonomy without these protocols built is structurally inconsistent — the autonomy capability has nothing to operate on.

| Missing Protocol | Autonomy-Ladder Capability It Unblocks | Source in `enes/desc.md` |
|---|---|---|
| **VERSION** | Baldwin cycle calibration — comparing Predictive RC predictions at T0 to Retrospective RC outcomes at T2+ requires iteration history | "The Evolutionary Mechanism — Baldwin Cycles" section |
| **SCOPE** | Autonomy-level-aware effort calibration — Level 2 ("reviews uncertain only") requires distinguishing routine from uncertain | Human's Role table, Level 2 row |
| **BRANCH (formal step)** | Parallel MVL loops with per-branch sub-pipelines | Open Question #4 |
| **MERGE** | Combining results across parallel branches | Open Question #4 (same) |
| **HANDOFF** | Cross-agent or cross-session full-context transfer | Level 3+ ("System handles tactical self-improvement") |
| **BRIEF** | Cold-start for an active-participant agent — the participant continues, doesn't just read | Same as HANDOFF (different shape) |

Build sequencing for these protocols matches autonomy-ladder progression: VERSION earliest (when /intuit Phase A produces iteration-comparable traces), SCOPE next (Level 2), BRANCH/MERGE in parallel-loops design (Level 2-3), HANDOFF/BRIEF latest (Level 3+).
```

**Net edits:** ~25 lines.
**Pro:** Surfaces the load-bearing claim explicitly. Reader of protocols/desc.md sees why missing protocols matter.
**Con:** Duplicates information that lives canonically in enes/desc.md (mild).

#### P2.C — Move autonomy-mapping to `enes/desc.md` instead (CONTRARIAN)

Don't add the autonomy mapping to `protocols/desc.md`. Instead:
- Add a small "Operational Substrate" subsection to `enes/desc.md` noting that 6 named protocols (VERSION/SCOPE/BRANCH/MERGE/HANDOFF/BRIEF) unblock specific Level-3+ capabilities.
- `protocols/desc.md` gets only a one-line back-link.

**Reasoning:** `enes/desc.md` is the project-goal doc; that's where "what unblocks Level 3" canonically belongs. `protocols/desc.md` is the operational map; it shouldn't repeat the goal doc.

**Pro:** Single source of truth for autonomy-ladder claims.
**Con:** Touches a different file; risks editing the project-goal doc that's been carefully stabilized; protocols/desc.md becomes thinner on the load-bearing argument.

---

### P3 — Reciprocal Loop_design Back-link

#### P3.A — Footers in all 3 loop_design files (FULL RECIPROCITY)

Add a "See also" footer to each of `loop_design_1/2/3.md`:

```markdown
---
*See also: `thinking_disciplines/protocols/desc.md` for the concept-first taxonomy of operational concerns (named protocols, status, build triggers).*
```

**Net edits:** ~3 lines × 3 files = 9 lines.
**Pro:** Full bidirectional cross-referencing.
**Con:** 3 files to maintain; if loop_design_1 evolves to a different framing, all 3 footers may need rewording.

#### P3.B — Footer only in `loop_design_1.md` (RECOMMENDED)

Add the back-reference only to `loop_design_1.md` (the cross-runner taxonomy), in or near its "Design Principles" section:

```markdown
> **See also:** `thinking_disciplines/protocols/desc.md` is the concept-first taxonomy of operational concerns. This document is runner-first; protocols/desc.md is named-protocol-first. Both views are complementary.
```

**Reasoning:** loop_design_2.md and 3.md are per-runner specifics; protocols/desc.md is generic. The cross-reference is most relevant in the cross-runner doc.

**Net edits:** ~3 lines in 1 file.
**Pro:** Targeted; doesn't add maintenance burden to the per-runner files.
**Con:** Reader of loop_design_2 or 3 doesn't see the back-link.

#### P3.C — Don't add back-link; create a hub doc (CONTRARIAN, deferred)

Create a small new file (e.g., `enes/loop_desing_ideas/index.md` or a new top-level architectural-index file) pointing to BOTH protocols/desc.md AND the loop_design series.

**Pro:** Single hub.
**Con:** New file overhead; doesn't really help unless many architectural docs need linking. Defer until N≥5 architectural docs need indexing.

---

### P4 — VERSION Build Decision

#### P4.A — Defer with named trigger (RECOMMENDED)

**Decision:** Defer VERSION build until `/intuit` Phase A produces N≥10 iteration-comparable invocation traces (concrete calibration data) OR until iteration-history loss in /MVL/MVL+ runs causes an observable problem.

**Action now:** Annotate in protocols/desc.md status table per P1.A. No design or build.

**Reasoning:**
- Speculative-design risk: designing VERSION before /intuit Phase A produces concrete needs may produce wrong-shape spec (per failure mode #5 in sensemaking).
- /intuit Phase A is the current immediate-next-step per enes/desc.md; respect sequencing.
- Cost of waiting: zero, until iteration-history actually matters.
- Cost of speculative-design: a few hours now + likely rework later.

**Pro:** Lowest-risk position. Honest about what's known.
**Con:** When /intuit Phase A ships, VERSION integration starts from zero rather than from a draft spec.

#### P4.B — Design VERSION spec NOW; defer integration (FOCUSED)

**Decision:** Write a lightweight VERSION protocol spec now (in protocols/desc.md or as a new sketch file). Do NOT integrate into /MVL or /MVL+ until /intuit Phase A produces concrete needs.

**Spec sketch** (what the spec would contain):
- **Steps:** (1) at iteration N+1 start, before overwriting, copy iteration N's outputs to `iter_N/` subfolder; (2) update `_state.md`'s history with snapshot pointer.
- **Completion test:** "Given iteration N+1 has started, can I read iteration N's full output unchanged?"
- **Failure modes:** disk space; subfolder name collisions; partial-snapshot when iteration N+1 fails mid-pipeline.

**Pro:** When /intuit Phase A ships, integration is faster (spec exists). Forces clarity now.
**Con:** Spec may turn out to be wrong shape for what Baldwin actually needs. Rewrite cost. Premature commitment to a particular structure (per-iteration sub-folders vs. versioned filenames vs. iteration-aware metadata).

#### P4.C — Build VERSION now, light implementation (AGGRESSIVE)

**Decision:** Design AND integrate VERSION into /MVL and /MVL+. Implementation: per-iteration sub-folders (`iter_1/`, `iter_2/`, ...) for inquiry folders that have multiple iterations.

**Edits to /MVL and /MVL+:** at the start of iteration N+1, before resetting progress, move iteration N's discipline outputs to a new subfolder; update `_state.md` history with a pointer.

**Pro:** Closes the iteration-loss gap immediately. Provides concrete iteration history for any future Baldwin-cycle work.
**Con:** Speculative — may not match what Baldwin actually wants. Extra storage. Loops 3 commits ahead of /intuit Phase A.

#### P4.D — Declare VERSION not strictly needed (CONTRARIAN, deferred-permanently variant)

**Argument:** The Baldwin cycle compares Predictive RC predictions at T0 to Retrospective RC outcomes at T2+. These signals are stored in `/intuit` invocation traces, NOT in inquiry iteration histories. Therefore VERSION may not be load-bearing for the Baldwin cycle specifically.

**Decision:** Defer VERSION permanently with note "may be unnecessary; revisit only if /intuit invocation traces don't contain enough version-history information when Baldwin calibration begins."

**Pro:** Skeptical position; protects against building unnecessary infrastructure.
**Con:** If wrong, Baldwin cycle has no comparison surface for non-/intuit-trace state changes (e.g., spec edits, discipline output evolution).

---

## Phase 3 — Test Survivors

| Design | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence |
|---|---|---|---|---|---|
| **P1.A** (minimal fixes) | LOW | STRONG — directly fixes documented errors | LOW | HIGH (~30 line edit) | Lens-generic + Constraint-generic |
| **P1.B** (P1.A + trigger column) | MEDIUM | STRONG — symmetric treatment | MEDIUM | HIGH (~40 line edit) | Combination-generic + Constraint-generic + Extrapolation-focused |
| **P1.C** (ADR restructure) | HIGH | MEDIUM — premature for current scale | HIGH long-term, LOW short-term | MEDIUM (~80 line edit + new files possibly) | Constraint-controversial + Domain-generic + Domain-focused + Extrapolation-generic |
| **P2.A** (minimal cross-ref) | LOW | STRONG | LOW | HIGH | Constraint-focused (rejected) |
| **P2.B** (P2.A + autonomy mapping) | MEDIUM | STRONG — surfaces load-bearing claim | HIGH (makes the long-term-goal connection visible) | HIGH (~25 line edit) | Combination-generic + Lens-controversial-rebuttal |
| **P2.C** (move to enes/desc.md) | HIGH | MEDIUM — touches the project-goal doc; risks destabilizing it | MEDIUM | LOW-MEDIUM | Lens-controversial |
| **P3.A** (3 footers) | LOW | STRONG | LOW | HIGH (9 lines across 3 files) | Default reciprocal |
| **P3.B** (1 footer in loop_design_1) | LOW | STRONG | LOW | HIGHEST (~3 lines in 1 file) | Targeted, asymmetric |
| **P3.C** (hub doc) | MEDIUM | WEAK — premature; new file overhead without enough docs to index | LOW | LOW | Domain-generic (rejected here) |
| **P4.A** (defer with trigger) | LOW | STRONGEST — honest about uncertainty, respects sequencing | LOW | HIGHEST (just an annotation) | Lens-generic + Extrapolation-controversial |
| **P4.B** (spec now, integrate later) | MEDIUM | MEDIUM — speculative-design risk acknowledged but accepted | HIGH (spec → faster integration later) | MEDIUM (a few hours of design) | Inversion-generic + Lens-focused |
| **P4.C** (build now) | MEDIUM | WEAK — speculative; loops 3 commits ahead of /intuit | MEDIUM | MEDIUM (small implementation) | Inversion-component-level |
| **P4.D** (declare unnecessary) | MEDIUM | WEAK — the skeptical case has merit but the risk of being wrong about Baldwin's needs is high | LOW | HIGH (no work) | Inversion-generic + Domain-controversial (gene-expression supports keeping VERSION as "unexpressed gene") |

### Path eliminations

- **P3.C** (hub doc) — premature; defer to when N≥5 architectural docs need indexing.
- **P4.C** (build now) — speculative; loops too far ahead of /intuit Phase A.
- **P4.D** (declare unnecessary) — the gene-expression analogy from Domain Transfer suggests VERSION should be carried as named-vocabulary even if not built; outright declaring it unnecessary forecloses the possibility.

### Survivors

- For P1: **P1.A (minimum) and P1.B (recommended fuller)**. P1.C is HIGH-novelty long-term direction; defer.
- For P2: **P2.A (minimum) and P2.B (recommended fuller)**. P2.C is HIGH-novelty but risks the project-goal doc; defer unless user wants to invest in moving content.
- For P3: **P3.B (recommended) and P3.A (full reciprocity)**. Either works; B is targeted, A is symmetric.
- For P4: **P4.A (defer with trigger — recommended) and P4.B (design-now, integrate-later — focused)**. P4.A is safer; P4.B invests in faster downstream integration.

---

## Phase 3.5 — Assembly Check

Survivors form natural configurations:

### Configuration α — MINIMUM (P1.A + P2.A + skip P3 + P4.A)

- Just fix stale entries in the status table.
- One-line cross-reference to loop_design.
- No back-link in loop_design.
- Defer VERSION with trigger.

**Net effort:** ~30-45 min.
**Net change:** Doc is no longer misleading; everything else stays as-is.
**Use case:** User wants minimum-time intervention; trusts that further work will happen on demand.

### Configuration β — RECOMMENDED (P1.B + P2.B + P3.B + P4.A)

- Status table corrections + Build-trigger column for all protocols.
- Cross-reference to loop_design + autonomy-ladder mapping section.
- Targeted back-link in loop_design_1.md only.
- Defer VERSION with named trigger.

**Net effort:** ~1.5-2 hours.
**Net change:** Doc reflects reality + connects to autonomy ladder + bidirectional cross-references in the right places. The load-bearing-for-goal argument is explicit.
**Use case:** User wants the protocols dimension to be a living, well-connected architectural map without overcommitting to restructure.

### Configuration γ — MAXIMUM (P1.C + P2.B + P3.A + P4.B)

- Restructure status table as per-protocol mini-sections (ADR-style).
- Full P2.B + autonomy-ladder mapping.
- Footers in all 3 loop_design files.
- Design VERSION spec now.

**Net effort:** ~half-day.
**Net change:** Substantial structural investment in the protocols dimension as architectural infrastructure. VERSION spec ready for /intuit Phase A.
**Use case:** User wants to invest aggressively in architectural prep; comfortable with rewrite risk on speculative spec.

### Configuration δ — CONTRARIAN (P1.A + P2.C + P3.C + P4.D)

- Minimal status updates.
- Move autonomy-ladder mapping to enes/desc.md.
- New hub index doc.
- Declare VERSION unnecessary.

**Net effort:** ~1 hour.
**Net change:** Less in protocols/desc.md; speculative on VERSION's necessity; potentially destabilizes enes/desc.md.
**Use case:** User wants to test the skeptical hypothesis (protocols dimension is over-engineering); risks losing the named-vocabulary infrastructure.

### Recommended default: **Configuration β**

Reasoning:
- Highest value-per-effort ratio.
- Each piece's B-variant does the high-value work without overcommitting.
- P4.A respects the sequencing constraint from `enes/desc.md`.
- P3.B is targeted (avoids 3-file footer maintenance burden).
- P2.B surfaces the load-bearing claim, which is the most important point this audit produces.

Configuration α is acceptable as fallback if user wants minimum effort.
Configuration γ should be deferred unless user has independent reason to invest in restructure now.
Configuration δ is informative as a contrarian check but not recommended.

---

## Phase 4 — Survivors for Critique

### Configuration choices to evaluate

- **A.** α (minimum) — P1.A + P2.A + no P3 + P4.A
- **B.** β (recommended) — P1.B + P2.B + P3.B + P4.A
- **C.** γ (maximum) — P1.C + P2.B + P3.A + P4.B

### Per-piece options to evaluate

- P1: A (minimum) vs B (with trigger column)
- P2: A (minimum cross-ref) vs B (with autonomy mapping)
- P3: B (1 footer) vs A (3 footers) vs skip
- P4: A (defer with trigger) vs B (spec-now-integrate-later)

### Recommended default for critique to challenge

**Configuration β** = P1.B + P2.B + P3.B + P4.A

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Convergence:** YES — 3+ mechanisms point to capability-trigger framing for missing protocols (Constraint #1 add, Lens #2 focused, Domain #6 controversial gene-expression, Extrapolation #2 focused). Strong validation of P1.A/P1.B's trigger-column approach.
- **Survivors tested:** All viable paths tested for novelty, scrutiny survival, fertility, actionability, mechanism independence.
- **Convergence on configuration β:** P1.B comes from Combination-generic + Constraint-generic (alignment); P2.B comes from Combination-generic + Lens-focused (alignment); P3.B is targeted minimum; P4.A is the safe-defer path. β is internally consistent.
- **Failure modes observed:**
  - Premature evaluation? No.
  - Single-mechanism trap? No.
  - Early frame lock? No — explored α, β, γ, δ configurations; landed on β with reasoning, not gut.
  - Innovation without grounding? No — every design has concrete proposed wording.
  - Mechanism exhaustion? No.
  - Survival bias? Tested the most uncomfortable paths (P1.C restructure, P2.C move-to-goal-doc, P4.C build-now, P4.D declare-unnecessary). All four assessed; rejected for present moment with explicit reasoning, but P1.C and P2.C kept as future-direction options.
- **Overall:** PROCEED — coverage strong, convergence on Configuration β recommended, all survivors tested. Critique can now adversarially evaluate.
