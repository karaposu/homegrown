# Innovation — docs/ folder per-file heterogeneity structural tidying

## User Input

```
_branch.md + surfacing.md (60 items) + sensemaking.md (SV6, F1-F10, D-1..D-10, 4 content kinds) + decomposition.md (5 pieces P1..P5, 23 sub-questions, interfaces, dependency order)
Task: Production-task mode innovation per piece. Generate candidates resolving each piece's sub-questions. Apply 7-mechanism spread, intervention-shape-axis Inversion at meta-decision pieces, Inherited Frame Audit, 5-test cycle, disposition categories, Assembly + Axis Coverage checks.
User explicitly framed inquiry as needing INNOVATIVE approach — produce at least one genuinely-novel candidate per piece beyond the obvious.
```

---

## Methodology-Mode Consideration (Seed-time, Phase 1 refinement)

- **Inherited mode:** STANDARD DEFAULT (4 Generators + 3 Framers; elaborate the committed direction). Text signal: the seed framing inherits a stable SV6 + 10 D-choices and asks Innovation to "generate candidates resolving each piece's sub-questions" — generation-of-elaboration framing.
- **Alternative mode named:** CONTRARIAN-RETHINK (Framer-weighted; challenge the two-layer architecture itself OR the four-content-kind partition).
- **What follows under alternative:** under CONTRARIAN-RETHINK, Innovation would re-litigate the two-layer commitment — generating candidates like "single-layer with dual-render only" or "no within-file annotation; derive views from external metadata only" or "abandon docs/ folder; move everything into devdocs/inquiries/ and treat each note as an inquiry-shaped object". These challenge fixed-constraint F4 (two-layer) and F1 (four content kinds).
- **Decision:** STANDARD DEFAULT.
- **Reason:** the two-layer architecture survived Sensemaking's Ambiguity #3 with HIGH confidence; the four content kinds survived Ambiguity #1 with MEDIUM-HIGH confidence. Contrarian-rethink would re-litigate decided ground. The inquiry's energy is better spent on per-piece elaboration. Note: any candidate that incidentally challenges F1-F10 will surface in the Inherited Frame Audit step below.

**Compliance check (artifact-observable):**
- Inherited mode named: ✓ STANDARD DEFAULT
- Alternative mode named: ✓ CONTRARIAN-RETHINK
- "What follows" description: ✓ provided above
- Decision: ✓ STANDARD DEFAULT with specific reason

---

## Phase 2 — Generate (per-piece)

Production-task mode active. Each piece is a meta-decision piece (property v fires for every piece because each commits a load-bearing intervention shape per the Intervention-Shape Vocabulary). Each piece therefore receives mandatory **Intervention-shape-axis Inversion** (per the Phase 2 refinement note).

### P1 — Annotation Syntax (mandatory)

**Sub-questions:** Q1a syntax family; Q1b human/AI visibility; Q1c whole-file frontmatter; Q1d alignment table; Q1e unmarked-section default.

**Mechanism: Domain Transfer (Generator)**

- **C1.1 (focused) — Hugo/Jekyll frontmatter + GFM callout block.** Whole-file: extend frontmatter with `default_section_status: canon|theory|design|sketch|archive` (aligned with inherited 5×11). Per-section override: GitHub-Flavored-Markdown callout `> [!CANON]`, `> [!HISTORICAL]`, `> [!SEED]`, `> [!UNEVALUABLE]` at the top of any section whose status differs from the file default. Renders visibly in GitHub/most markdown viewers. Cheap to add (one line per overridden section). Alignment table lives in the reader-protocol (P3), not in each file. Unmarked-section default = file's `default_section_status`. If no frontmatter, default = `uncertain` per F7.
  - Intervention shape: **ADD-CONTENT** (new section-callout convention) + **ADD-DIMENSION** (extension to existing frontmatter status field).
  - Axis annotation: intervention-shape axis (mandatory for property-v).

**Mechanism: Combination (Generator)**

- **C1.2 (contrarian) — HTML-sentinel + visible callout, dual-channel.** Per-section: callout `> [!CANON]` for humans + HTML comment `<!--STATUS:CANON-->` for AI-strict parsing on the same section. Belt-and-suspenders: human reader sees the rendered callout; AI parser keys on the comment (more reliable than callout-pattern matching across markdown dialects). Cost: 2 lines per overridden section instead of 1.
  - Intervention shape: **ADD-CONTENT** (dual-channel convention).

**Mechanism: Absence Recognition (Generator)**

- **C1.3 (focused — redesign-level question) — Explicit alignment table as a separate doc/manifest.** The 4 within-file content kinds and the 5 whole-file statuses need an explicit cross-reference that has never existed. Build it as a single table file (e.g., `docs/_TAXONOMY.md` or a section in `docs/README.md`) that maps: file's whole-file `status` → file's default `content_kind` → which section-callouts make sense. Without this table, P1's syntax is locally well-defined but globally incoherent.
  - Intervention shape: **ADD-CONTENT** (new alignment artifact).

**Mechanism: Lens Shifting (Framer)**

- **C1.4 (contrarian) — Render-target lens: "dual-render" approach.** Don't annotate within-file at source. Instead: each file remains as-is (heterogeneous); a tool reads frontmatter + simple section headers and generates derivable consumer views (`docs/.derived/CURRENT.md`, `docs/.derived/HISTORICAL.md`, `docs/.derived/SEEDS.md`). Reader-protocol points AI to read derived views by default, full source only when needed. Violates F5 partially (requires tooling to render) — REJECT for v1 unless we relax F5; surface as v2 candidate.
  - Intervention shape: **ADD-CONTENT** (tooling) + **REORGANIZE-WITHOUT-ADDING** (source unchanged; views derived).

**Mechanism: Inversion (Framer) — MANDATORY at property-v intervention-shape axis**

- **C1.5 (contrarian; intervention-shape-axis Inversion) — Mark the EXCEPTIONS, not the Canon.** Principal candidate (C1.1) commits to ADD-CONTENT shape (label sections that AREN'T the file's default). Inverted candidate: invert the assumption that "Canon is the labeled exception." Instead: assume sections are Canon-by-default UNLESS marked otherwise. Label only Historical-trace / Future-seed / Unevaluable sections. Canon sections carry zero markup.
  - **Shape being inverted:** ADD-CONTENT-for-Canon vs ADD-CONTENT-for-non-Canon.
  - **Alternative shape named:** Same shape, different default direction.
  - **What follows if the inversion were committed:** lower annotation cost (most sections are Canon and require no marking); BUT violates F7 (safe-default unmarked = uncertain → in C1.5, unmarked = Canon, which means an UNLABELED stale paragraph reads as current truth — direct context-poison enabler).
  - **Verdict on the inversion:** FAILS Scrutiny Survival on F7 grounds. Kept as adversarial check; will not survive Phase 3 unless F7 is relaxed (which it isn't — F7 is fixed by Sensemaking).
  - **Mechanism-trace per axis:** intervention-shape axis explicitly named; alternative direction stated; result of testing recorded.

**Mechanism: Constraint Manipulation (Framer)**

- **C1.6 (focused) — Add the constraint "every section above the file's default-status must be flagged."** Tightens C1.1's convention into a rule: file declares `default_section_status: theory` → every CANON section must carry `> [!CANON]`. Forces explicitness in mixed-content files. Synergistic with C1.1.
  - Intervention shape: **ADD-CONTENT** (new rule).

**Per-piece P1 mechanism log:**
- Generators applied: Domain Transfer (C1.1), Combination (C1.2), Absence Recognition (C1.3) = 3/4
- Framers applied: Lens Shifting (C1.4), Inversion (C1.5), Constraint Manipulation (C1.6) = 3/3
- Coverage: 6 of 7 mechanisms (Extrapolation skipped — trends are not the operative axis for a syntax choice)

---

### P2 — Folder & Whole-File-Status Architecture (mandatory)

**Sub-questions:** Q2a top-level shape; Q2b quarantine; Q2c archive convention; Q2d alternative-framings; Q2e tombstones; Q2f folder+frontmatter composition.

**Mechanism: Domain Transfer (Generator)**

- **C2.1 (focused) — Antivirus-quarantine pattern + git-tombstone pattern.** Add `docs/_quarantine/` subfolder where alternative-framing files (HP-11), untriaged contributions, and unevaluable-as-a-whole-file content live. Default reader-trust on quarantine content = "do not act on this until reviewed." When any file moves (including into quarantine), leave a 3-line tombstone at the old path:
  ```
  # Moved
  This file moved to: <new_path>
  Reason: <short reason>
  ```
  Quarantine is the SAFE DEFAULT for any contributor whose file purpose is unclear. Files leave quarantine only by explicit author review.
  - Intervention shape: **ADD-CONTENT** (new folder + new convention).

**Mechanism: Constraint Manipulation (Framer)**

- **C2.2 (focused — ADD direction) — Mandatory `_archive_note.md` per archive folder + mandatory `framing:` frontmatter for alternative architectures.** Add two enforceable rules: (a) every folder whose name starts with `archive`, `deprecated_`, or contains "_old" MUST contain an `_archive_note.md` explaining what was archived and what replaces it (template-able; project already has the precedent at `cognitive_harness/deprecated_navigation/_archive_note.md`). (b) Any file presenting a complete alternative framing carries `framing: alternative` in frontmatter (single line). Eliminates HP-7 and HP-11 silent-sibling problems.
  - Intervention shape: **ADD-CONTENT** (new rule pair).

- **C2.3 (contrarian — REMOVE direction) — Remove the constraint that files must live in one folder; allow `_aliases.md` cross-references.** Reduces folder reorg cost: a file in `theory/` can be referenced from `canon/` via an entry in `canon/_aliases.md` pointing to it. Avoids choosing one home for files that span subjects.
  - Intervention shape: **ADD-CONTENT** (alias mechanism) + **REORGANIZE-WITHOUT-ADDING** (no file moves).
  - Risk: alias mechanism adds reader cognitive load; readers must check aliases as well as direct folder.

**Mechanism: Combination (Generator)**

- **C2.4 (focused) — Status-first top-level + subject-second (the prior conversation's proposal) + quarantine + archive-note + tombstone + alt-framings folder.** Full assembly of patterns:
  ```
  docs/
    README.md                    # reader-protocol (P3)
    _TAXONOMY.md                 # alignment table (P1)
    canon/{vision,substrate,...} # current truth (per Layer 1 5×11)
    theory/                      # explanatory companion
    design/                      # walkthroughs / proposals
    alternative_framings/        # sibling architectures (HP-11 home)
    ideas/                       # sketches / seeds
    design_history/              # per-discipline institutional memory (existing)
    frontiers/                   # open-questions inventory (existing)
    archive/                     # superseded; requires _archive_note.md per subfolder
    _quarantine/                 # untriaged or alternative-yet-unsorted
    _tombstones/                 # OR inline at old path: tombstones for moved content
  ```
  - Intervention shape: **REORGANIZE-WITHOUT-ADDING** (most files just move) + **ADD-CONTENT** (new convention folders).

**Mechanism: Absence Recognition (Generator) — redesign-level question**

- **C2.5 (focused — bidirectional Absence Recognition per refinement note) — Codify the existing folder convention rather than rebuilding.**
  - *Missing-direction question:* what data SHOULD exist between author and reader that doesn't? — an explicit map of what each existing top-level folder ALREADY MEANS (archive/ = archived; alignment_perspective/ = alternative framing; possible_breakthroughs/ = seed; etc.).
  - *Already-present-in-different-form direction:* the project ALREADY half-uses status-folders. The "innovation" isn't to invent new folders; it's to FORMALIZE the existing implicit convention into the reader-protocol and add the missing pieces (quarantine for newly-introduced unsorted content; `_archive_note.md` requirement).
  - **This challenges the assumption that significant folder reorganization is needed.** A minimal version moves few files and adds only convention markers.
  - Intervention shape: **REORGANIZE-WITHOUT-ADDING** (minimal moves) + **ADD-CONTENT** (codification doc + small additions).

**Mechanism: Inversion (Framer) — MANDATORY intervention-shape-axis Inversion**

- **C2.6 (contrarian; intervention-shape-axis Inversion) — Leave folders entirely alone; do all work via per-file annotations only.**
  - **Shape being inverted:** principal candidates (C2.1, C2.2, C2.4) commit to REORGANIZE-WITHOUT-ADDING (folder restructure) or ADD-CONTENT (new folder additions). Inversion commits to DO-NOTHING at folder layer; all status / quarantine / alt-framing markers carried by frontmatter alone, no folder moves.
  - **Alternative shape named:** DO-NOTHING (at folder axis) + ADD-CONTENT (at frontmatter axis only).
  - **What follows if committed:** zero migration cost; folder structure stays exactly as it is today. But: P3 reader-protocol gets harder (cannot say "files in canon/ are current; files in archive/ are historical" because no such folders). Reader-protection burden falls 100% on frontmatter discipline + section annotation. Higher reader-side cost (must check every file's frontmatter rather than infer from folder).
  - **Verdict on the inversion:** PARTIAL SURVIVAL — viable for projects unwilling to migrate, but loses the inter-file navigation value the inherited 5×11 was meant to provide (Layer 1 becomes purely frontmatter-derived rather than folder-visible).

**Per-piece P2 mechanism log:**
- Generators applied: Domain Transfer (C2.1), Combination (C2.4), Absence Recognition (C2.5) = 3/4
- Framers applied: Constraint Manipulation (C2.2 ADD, C2.3 REMOVE — both directions per refinement), Inversion (C2.6) = 3/3
- Coverage: 5 of 7 (Lens Shifting + Extrapolation skipped — folder design isn't lens-shifted productively at this scope; trends aren't the operative axis)

---

### P3 — Reader-Protocol (mandatory; depends on P1 + P2)

**Sub-questions:** Q3a location; Q3b content; Q3c cold-start discovery; Q3d reading-order recommendation.

**Mechanism: Domain Transfer (Generator)**

- **C3.1 (focused) — LLMS.txt + docs/README.md + CLAUDE.md note — three-channel protocol.**
  - `docs/README.md` is the canonical human-and-AI-readable protocol. Contains: explanation of Layer 1 (5×11 + folder semantics from P2); explanation of Layer 2 (4 content kinds + section callout syntax from P1); explicit alignment table (from C1.3); safe-default declaration (unmarked = uncertain); folder convention semantics (quarantine = do-not-trust; archive_note.md = required-for-archive-folders; framing: alternative = sibling); reading-order recommendation ("if you're a new AI session, read these files in this order: ...").
  - `docs/LLMS.txt` is a 5-line pointer at project root following the emerging LLMS.txt convention, redirecting to `docs/README.md`. (Or omit if LLMS.txt convention isn't relevant in this deployment.)
  - `CLAUDE.md` adds a single block: `## docs/ folder` with one sentence directing the AI to read `docs/README.md` before reading other files in docs/.
  - Intervention shape: **ADD-CONTENT** (new README) + **ADD-DIMENSION** (extending CLAUDE.md).

**Mechanism: Combination (Generator)**

- **C3.2 (focused) — Protocol-as-imperative-prompt embedded in README + the README is also a SKILL.md-style discoverable file.** The README isn't passive documentation; it's written as direct instructions to a fresh AI session ("Before reading any file in docs/, read its frontmatter for `status:` and `default_section_status:`. If unmarked, treat content as uncertain. ..."). Composes with the project's existing skill-file convention (the project already uses imperative-prompt skill files cognitive_harness/<disc>/SKILL.md).
  - Intervention shape: **ADD-CONTENT** + **REORGANIZE-WITHOUT-ADDING** (the README is structured as skill-like instructions, leveraging an existing project pattern).

**Mechanism: Lens Shifting (Framer)**

- **C3.3 (contrarian) — Reframe the protocol as a contract the writer commits to, not a courtesy the reader follows.** Instead of "here's how to read docs/", write "I, the author, commit that: any file I add to docs/ will have `status:` frontmatter; any non-Canon section in a Canon-default file will be marked; etc." This shifts the protocol's load-bearing audience from the reader (whose compliance is uncertain) to the author (whose compliance is enforceable through review). Reader-side instruction becomes a consequence of the writer-side commitment.
  - Intervention shape: **REORGANIZE-WITHOUT-ADDING** (same content, different framing) + **ADD-CONTENT** (writer-commitment list).
  - Note: this addresses Ambiguity #6's compliance residual — shifts the compliance question from AI-side to human-side, where the project has more leverage.

**Mechanism: Inversion (Framer) — intervention-shape-axis Inversion**

- **C3.4 (contrarian; intervention-shape-axis Inversion) — No standalone protocol file; embed the protocol entirely in CLAUDE.md.**
  - **Shape being inverted:** principal candidates (C3.1, C3.2) commit to ADD-CONTENT (new README file in docs/). Inversion commits to ADD-DIMENSION only (extending CLAUDE.md with a docs-reading section, no new file in docs/).
  - **Alternative shape named:** ADD-DIMENSION instead of ADD-CONTENT.
  - **What follows if committed:** zero new file in docs/; CLAUDE.md grows by one section; protocol is automatically loaded by Claude Code (no discovery needed). Trade-off: only works for Claude Code AI sessions (LLMS.txt and `docs/README.md` would serve other tools that don't load CLAUDE.md). Project-internal-only for AI consumers.
  - **Verdict on the inversion:** VIABLE if the project explicitly targets Claude Code only. Less robust to multi-tool readership.

**Per-piece P3 mechanism log:**
- Generators applied: Domain Transfer (C3.1), Combination (C3.2) = 2/4
- Framers applied: Lens Shifting (C3.3), Inversion (C3.4) = 2/3
- Coverage: 4 of 7 (Absence Recognition, Extrapolation, Constraint Manipulation skipped — minimal additional generative angles for a single-document piece)

---

### P4 — Adoption Workflow (mandatory; depends on P1 + P2 + P3)

**Sub-questions:** Q4a minimum-viable v1; Q4b first-touch trigger; Q4c revision protocol; Q4d shipped-vs-internal priority.

**Mechanism: Extrapolation (Generator)**

- **C4.1 (focused) — Forward-extrapolate corpus growth: workflow must scale linearly.** Today: 49 files. In 12 months at current rate: ~150 files. In 36 months: ~500. The workflow must support per-touch labeling that scales with corpus, not all-at-once labeling. **Minimum-viable v1:** (a) write `docs/README.md` (P3 output); (b) add `status:` frontmatter to the 10-15 most-cited files (the canonical reference docs); (c) declare adoption rule going forward; (d) leave the other 35+ files unmarked — they're "uncertain" by safe-default, which is correct semantics. v1 ships within ~1 hour of author time. Subsequent touches gradually convert unmarked to marked.
  - Intervention shape: **ADD-CONTENT** (minimal labeled subset).

**Mechanism: Combination (Generator)**

- **C4.2 (focused) — Three labeling triggers: write-time + first-touch + high-traffic sweep.** Three trigger conditions for adding/updating annotation:
  - (a) **Write-time:** when adding a new file or new section to an existing file, label it.
  - (b) **First-touch:** when opening any legacy file to edit ANY of its content for any reason, do a single-pass labeling of its sections before saving.
  - (c) **High-traffic sweep (low-priority):** every N inquiries (e.g., monthly), the user picks the most-cited unmarked file and labels it.
  Combines write-time and first-touch from Sensemaking F3 with an explicit periodic-sweep mechanism. (c) is intentionally low-priority — system works without it but converges faster with it.
  - Intervention shape: **ADD-CONTENT** (workflow specification).

**Mechanism: Lens Shifting (Framer)**

- **C4.3 (focused) — Reframe: file-purpose declaration at file-creation is what authors do; section-level annotation only when drift occurs.** Standard authoring flow:
  - At file creation: author commits `status:` + `default_section_status:` in frontmatter (5 keystrokes; one decision).
  - During file lifetime: as long as content stays consistent with the declared default, no per-section annotation needed.
  - When drift occurs (e.g., adding a Historical-trace section into a Canon-default file): author flags the new section with a callout.
  - Reframes annotation as a drift-handling operation rather than a per-section discipline. Most sections are zero-cost.
  - Intervention shape: **REORGANIZE-WITHOUT-ADDING** (recast the workflow from "label everything" to "label only drift").

**Mechanism: Inversion (Framer) — intervention-shape-axis Inversion**

- **C4.4 (contrarian; intervention-shape-axis Inversion) — Don't define a workflow; rely on safe-default to handle unmarked content.**
  - **Shape being inverted:** principal candidates (C4.1, C4.2, C4.3) commit to ADD-CONTENT (workflow specification). Inversion commits to DO-NOTHING at the workflow-specification level; the only requirement is the protocol file (P3) + the safe-default convention. Authors label or don't label as they choose; unmarked is always uncertain.
  - **Alternative shape named:** DO-NOTHING (no workflow specified).
  - **What follows if committed:** zero adoption discipline required; safe-default does all the work. BUT: convergence to a labeled corpus may take indefinitely; corpus may remain mostly-uncertain forever (which is safe but unhelpful). The workflow's value is in pushing toward eventual full labeling.
  - **Verdict on the inversion:** PARTIAL SURVIVAL — viable as a fallback if author discipline is unreliable; suboptimal for long-term clarity. Loses the gradual-improvement benefit.

**Mechanism: Absence Recognition (Generator)**

- **C4.5 (focused) — Add the missing transition operation: when does Canon become Historical-trace?** Workflow gap surfaced in Decomposition's P4: there's no defined operation for "a section that WAS Canon is now superseded." Define it: when an author supersedes a Canon section, they (a) keep the section's text intact, (b) change its callout from `> [!CANON]` to `> [!HISTORICAL]` with a one-line reason, and (c) optionally add a `> [!CANON]` section above it with the new content. Preserves the trail; flips the reader-status; matches the project's existing finding-template "supersedes/corrects" pattern.
  - Intervention shape: **ADD-CONTENT** (new workflow operation).

**Per-piece P4 mechanism log:**
- Generators applied: Extrapolation (C4.1), Combination (C4.2), Absence Recognition (C4.5) = 3/4
- Framers applied: Lens Shifting (C4.3), Inversion (C4.4) = 2/3
- Coverage: 5 of 7 (Domain Transfer + Constraint Manipulation skipped at piece level; workflow design is less amenable to those)

---

### P5 — Supplementary Tooling (OPTIONAL; v2)

Per Decomposition, P5 is opt-in and deferred to v2. Generating ≥2 candidates as required.

**Mechanism: Combination (Generator)**

- **C5.1 (focused) — Single-tool combo: parse + derive + checks.** One small CLI (`tools/docs_audit.sh`) that:
  - Parses frontmatter + callouts across docs/
  - Generates `docs/.derived/CURRENT.md` (Canon-tagged sections only, indexed)
  - Runs dead-link check across docs/ + cognitive_harness/ cross-references (catches HP-8)
  - Reports any archive folder missing `_archive_note.md`
  Single artifact, deterministic, opt-in.
  - Intervention shape: **ADD-CONTENT** (new tool) — DEFERRED to v2.

**Mechanism: Inversion (Framer) — intervention-shape-axis Inversion**

- **C5.2 (contrarian; intervention-shape-axis Inversion) — Build nothing; reassess after 3-6 months of v1 usage.**
  - **Shape being inverted:** C5.1 commits to ADD-CONTENT (build a tool). Inversion commits to DO-NOTHING at v1 entirely.
  - **Alternative shape named:** DO-NOTHING.
  - **What follows if committed:** v1 ships without P5; usage reveals which tools (if any) would have helped. Matches the project's discipline of deferred-until-proven (per `cognitive_fixes/README.md` staging gates).
  - **Verdict on the inversion:** DEFAULT for v1.

---

## Inherited Frame Audit (between Phase 2 Generate and Phase 3 Test)

Per the refinement note, before Phase 3 Test, examine the candidate set for un-challenged inheritance from the seed-level central assumption and each piece-level load-bearing commitment.

### Step (i) — Seed-level central assumption

The seed's central assumption (from `_branch.md` + sensemaking's SV6) is: **"The design must be a two-layer architecture with within-file annotation as Layer 2, four content kinds, human-author-declared, markdown-native, paired with a reader-protocol."**

Sub-assumptions also load-bearing:
- F1 (4 content kinds) — committed at HIGH confidence
- F2 (section-level default) — committed
- F3 (human-author-declared) — committed
- F4 (two-layer) — committed at HIGH confidence
- F5 (markdown-native) — committed
- F6 (reader-protocol paired) — committed
- F7 (safe-default unmarked = uncertain) — committed
- F8 (gradual first-touch) — committed
- F9 (no destruction) — committed
- F10 (Layer 1 preserved) — committed

### Step (ii) — Piece-level load-bearing commitments

- **P1's load-bearing commitment:** "section-level annotation in markdown-native syntax." (Sub-questions Q1a-e elaborate this.)
- **P2's load-bearing commitment:** "folder structure carries status signal AND new mechanisms (quarantine, tombstone, archive_note) added."
- **P3's load-bearing commitment:** "explicit reader-protocol file required, paired with annotation."
- **P4's load-bearing commitment:** "human-author-declared at write-time + first-touch."
- **P5's load-bearing commitment:** "opt-in v2; not in v1."

### Step (iii) — Challenge scan

Per the operational signals for "explicit challenge" (direct opposite / removal / absence-recognition redesign / frame-rejection / reversal):

- **C1.4 (dual-render) challenges P1's "markdown-native at source"** — proposes deriving views rather than annotating at source. Partial challenge to F5. Surfaced.
- **C1.5 (mark exceptions, not Canon) challenges F7 (safe-default unmarked = uncertain)** — direct opposite. Surfaced.
- **C2.5 (codify existing convention) challenges the seed assumption that "significant folder reorganization is needed"** — reframes the within-file vs folder choice toward minimal-folder-change. Surfaced.
- **C2.6 (leave folders alone) challenges P2's load-bearing commitment that folder is one of the design's tools** — direct opposite. Surfaced.
- **C3.3 (writer-side commitment rather than reader-side instruction) challenges P3's reader-side framing** — reframe. Surfaced.
- **C3.4 (CLAUDE.md only) challenges F6's requirement of paired docs/-side protocol** — partial challenge (CLAUDE.md IS pairing but at project-root rather than docs/-side). Surfaced.
- **C4.4 (no workflow) challenges P4's commitment to a defined workflow** — direct opposite. Surfaced.
- **C5.2 (DO-NOTHING) is already the recommended v1 default** — no challenge needed; it IS the framework's recommendation.

### Step (iv) — Firing condition

For seed-level central assumption (two-layer + four-kinds + ...): IS any candidate challenging the SEED assumption explicitly?

- The seed assumption survives — no candidate proposes abandoning the two-layer architecture. (C1.4 dual-render is compatible with two-layer; C2.6 folders-alone is compatible.)
- The four content kinds also survive — no candidate proposes a different partition.

For piece-level commitments: P1, P2, P3, P4 each have at least one challenge-candidate. **Audit DOES NOT FIRE at seed-level** (assumption is challenged sufficiently by Innovation's spread). **Audit FIRES at piece-level for P1 (via C1.4, C1.5), P2 (via C2.5, C2.6), P3 (via C3.3, C3.4), P4 (via C4.4).** These were generated by Phase 2 Inversion + other Framer mechanisms — no Return-to-Phase-2 needed; the challenges already exist in the candidate set.

**Audit verdict:** seed-level — sufficient challenge; piece-level — sufficient challenge. No further generation needed. Proceeding to Phase 3 Test.

---

## Phase 3 — Test (5-test cycle per candidate)

Applying Novelty / Scrutiny Survival / Fertility / Actionability / Mechanism Independence per candidate. Compact form: ✓/✗/partial per test, brief reasoning.

### P1 candidates

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mech-Indep | Verdict | Disposition |
|---|---|---|---|---|---|---|---|
| C1.1 frontmatter + GFM callout | partial (Hugo/Jekyll convention applied to this project) | ✓ | ✓ (composes with C2.2, C3.1, C4.x) | ✓ (1 line per overridden section) | ✓ (Domain Transfer + Combination both converge) | **SURVIVE** | **ACTIONABLE** |
| C1.2 HTML-sentinel + visible callout dual-channel | ✓ | ✓ | ✓ (parsable by P5 tools strictly) | ✓ (cost: 2 lines per overridden section) | partial (Combination only) | **SURVIVE** | **DEFERRED with revival trigger** — promote to ACTIONABLE if AI-parser reliability becomes a real concern in early v1 usage |
| C1.3 alignment table as separate doc | partial (existing pattern at higher granularity) | ✓ | ✓ (P3 consumes; P4 instructions cite) | ✓ (one new file) | ✓ (Absence Recognition + Combination converge) | **SURVIVE** | **ACTIONABLE** — paired with C1.1 |
| C1.4 dual-render (derive views) | ✓ | partial (violates F5 partially) | ✓ (enables P5 tooling) | partial (requires tooling for v1) | partial (Lens Shifting only) | **REFINE** | **RESEARCH FRONTIER** for v2 — reassess once corpus + tooling justify it |
| C1.5 mark exceptions, assume unmarked = Canon | ✓ | ✗ (fails F7 direct test — violates fixed constraint) | n/a | n/a | n/a | **KILL** | seed: F7 is a binding constraint; any future relaxation of F7 would revive this — but no near-term trigger |
| C1.6 mandatory above-default flagging rule | partial (sharpens C1.1) | ✓ | ✓ | ✓ | partial (Constraint Manipulation only) | **SURVIVE** | **ACTIONABLE** — paired with C1.1 |

**P1 survivors:** C1.1 (ACTIONABLE), C1.2 (DEFERRED), C1.3 (ACTIONABLE), C1.6 (ACTIONABLE)
**P1 refined/researched:** C1.4 (v2 frontier)
**P1 killed:** C1.5 (F7 violation)

### P2 candidates

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mech-Indep | Verdict | Disposition |
|---|---|---|---|---|---|---|---|
| C2.1 quarantine + tombstone | ✓ | ✓ | ✓ (composes with P3 protocol) | ✓ (one new folder + tombstone convention) | ✓ (two cross-domain transfers converge) | **SURVIVE** | **ACTIONABLE** |
| C2.2 mandatory `_archive_note.md` + `framing:` frontmatter | partial (extends project precedent) | ✓ | ✓ | ✓ (rule-only; no immediate moves required) | ✓ (Constraint Manipulation + project-precedent converge) | **SURVIVE** | **ACTIONABLE** |
| C2.3 aliases (REMOVE constraint) | ✓ | partial (adds reader cognitive load) | partial | partial (alias mechanism = new convention) | partial (Constraint Manipulation REMOVE only) | **REFINE** | **DEFERRED with revival trigger** — revive if a real cross-subject file emerges and folder-choice becomes painful |
| C2.4 full folder reorganization (status-first + all patterns) | partial (assembles prior conversation's proposal + this inquiry's additions) | ✓ | ✓ (full structure for new content) | partial (large migration cost; one-time but >1hr) | ✓ (Combination of multiple sources) | **SURVIVE-WITH-CAVEAT** | **ACTIONABLE** if user accepts the migration cost; otherwise **DEFERRED** with C2.5 as fallback |
| C2.5 codify existing convention (minimal-change) | ✓ (the existing convention surfaced redesign-level) | ✓ | ✓ | ✓ (cheap; mostly docs/_TAXONOMY entries; few moves) | ✓ (Absence Recognition redesign-level + project-precedent) | **SURVIVE** | **ACTIONABLE** — strong alternative to C2.4 |
| C2.6 leave folders alone (Inversion) | partial (extreme position) | partial (loses inter-file navigation; weakens Layer 1) | partial (frontmatter-only is brittle) | ✓ (zero migration) | partial (Inversion only) | **REFINE** | **DEFERRED with revival trigger** — revive if all attempts at C2.4/C2.5 stall due to migration objection |

**P2 survivors:** C2.1 (ACTIONABLE), C2.2 (ACTIONABLE), C2.4 OR C2.5 (alternative ACTIONABLE pair — user chooses which)
**P2 deferred:** C2.3, C2.6
**P2 killed:** none

**Note (RE-TEST TRIGGER):** C2.5's survival has implications for whether the inquiry's eventual finding recommends the prior-conversation's full status-first reorganization (C2.4) or its minimal-change inverse (C2.5). Both are viable; user-context (migration appetite) decides. Flag for Critique to evaluate adversarially.

### P3 candidates

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mech-Indep | Verdict | Disposition |
|---|---|---|---|---|---|---|---|
| C3.1 LLMS.txt + docs/README.md + CLAUDE.md | partial (assembles emerging conventions) | ✓ | ✓ (multi-channel discoverability) | ✓ | ✓ (Domain Transfer + project-precedent) | **SURVIVE** | **ACTIONABLE** |
| C3.2 protocol-as-imperative-prompt + skill-file styling | ✓ | ✓ | ✓ (leverages project's own SKILL.md convention recursively) | ✓ | ✓ (Combination of project's own pattern) | **SURVIVE** | **ACTIONABLE** |
| C3.3 writer-side commitment rather than reader-side instruction | ✓ | ✓ (addresses Ambiguity #6 compliance residual) | ✓ (shifts enforcement to PR-review-style human discipline) | ✓ | partial (Lens Shifting only) | **SURVIVE** | **ACTIONABLE** as a framing for C3.1's content |
| C3.4 CLAUDE.md only (Inversion) | partial | partial (only works for Claude Code AI sessions) | partial (no multi-tool support) | ✓ | partial (Inversion only) | **REFINE** | **DEFERRED with revival trigger** — revive if multi-tool support proves unnecessary (project is Claude-Code-only forever) |

**P3 survivors:** C3.1 (ACTIONABLE), C3.2 (ACTIONABLE), C3.3 (ACTIONABLE — framing layer on top of C3.1)
**P3 deferred:** C3.4

### P4 candidates

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mech-Indep | Verdict | Disposition |
|---|---|---|---|---|---|---|---|
| C4.1 minimum-viable v1 (10-15 most-cited files) | ✓ | ✓ | ✓ (ships within 1 hour) | ✓ | ✓ (Extrapolation logic) | **SURVIVE** | **ACTIONABLE** |
| C4.2 three triggers (write + first-touch + sweep) | ✓ | ✓ | ✓ (covers all author-touch moments) | ✓ | ✓ (Combination of multiple project patterns) | **SURVIVE** | **ACTIONABLE** |
| C4.3 file-purpose at creation; sections only on drift | ✓ | ✓ | ✓ (low ongoing cost) | ✓ (5 keystrokes at file creation) | partial (Lens Shifting only) | **SURVIVE** | **ACTIONABLE** — paired with C4.2 |
| C4.4 no workflow (Inversion) | partial | partial (lose gradual-improvement benefit) | partial | ✓ (zero discipline) | partial (Inversion only) | **REFINE** | **DEFERRED with revival trigger** — revive only as fallback if author discipline proves unreliable in practice |
| C4.5 Canon→Historical transition operation | ✓ | ✓ | ✓ (handles a real workflow gap) | ✓ | ✓ (Absence Recognition + project precedent) | **SURVIVE** | **ACTIONABLE** — sub-component of P4 |

**P4 survivors:** C4.1 (ACTIONABLE), C4.2 (ACTIONABLE), C4.3 (ACTIONABLE), C4.5 (ACTIONABLE)
**P4 deferred:** C4.4

### P5 candidates

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mech-Indep | Verdict | Disposition |
|---|---|---|---|---|---|---|---|
| C5.1 single audit tool | partial | ✓ | ✓ | ✓ for v2 | ✓ (Combination of multiple tool-pattern sources) | **SURVIVE for v2** | **DEFERRED with revival trigger** — revive after v1 ships and usage reveals which tools would help |
| C5.2 DO-NOTHING for v1 (Inversion) | n/a | ✓ | ✓ (matches project's deferred-until-proven discipline) | ✓ | ✓ (Inversion converges with project precedent) | **SURVIVE** | **ACTIONABLE** for v1 — DEFER P5 entirely |

**P5 outcome for v1:** C5.2 wins — DO-NOTHING. C5.1 stays in DEFERRED pipeline with revival trigger = "v1 has shipped + 3 months of usage data + identified specific tool need."

---

## Phase 3.5 — Assembly Check

Combining ACTIONABLE survivors across pieces to test for emergent value.

### Assembly candidate: v1 Recommended Design

- **P1:** C1.1 + C1.3 + C1.6 (frontmatter + GFM callout + alignment table + mandatory-above-default flagging)
- **P2:** C2.1 + C2.2 + (C2.4 OR C2.5 — user-chosen; both ACTIONABLE)
- **P3:** C3.1 + C3.2 + C3.3 (LLMS.txt + README + CLAUDE.md, skill-file-styled, writer-side-committed)
- **P4:** C4.1 + C4.2 + C4.3 + C4.5 (minimum-viable v1 + three triggers + drift-only labeling + transition operation)
- **P5:** C5.2 (DO-NOTHING for v1)

### Emergent properties

**EM-1: Self-similar protocol pattern.** P3's C3.2 (protocol-as-imperative-prompt + skill-file styling) means the reader-protocol IS itself written as the project's own skill-file format. The project's docs/ teaches AI readers using the SAME pattern the project's `cognitive_harness/` uses to teach skills. Self-similar architecture — discoverable because the reader already knows the SKILL.md shape.

**EM-2: Writer-side enforcement closes compliance residual.** P3's C3.3 (writer-side commitment) combined with P4's C4.2 (three triggers) shifts the compliance burden from AI-side (uncertain) to author-side (PR-reviewable). The compliance residual from Sensemaking Ambiguity #6 becomes partially-solved: enforcement is feasible through PR-review-style human discipline, not through hoping AI sessions read protocol files.

**EM-3: Quarantine becomes the safe-by-default landing zone for ANY new content of uncertain status.** P2's C2.1 (quarantine) + P3's safe-default (unmarked = uncertain) + P4's C4.1 (minimum-viable v1) compose: new contributors / new files default to `_quarantine/`; explicit author-review promotes out. Eliminates the "new contributor adds a file that quietly poisons the corpus" failure mode.

**EM-4: Codify-existing-convention (C2.5) + minimum-viable v1 (C4.1) = "ship today" path.** The user can adopt the design in one afternoon: write `docs/README.md` codifying existing folder semantics; add `_archive_note.md` to the existing archive folder; add `framing: alternative` to `alignment_perspective/alignment.md`; add `status:` frontmatter to the 10 most-cited files; create `_quarantine/`. Done. No big folder reorg. Subsequent first-touches gradually deepen the labeling.

**EM-5: The four content kinds × six writer-trigger moments produces a small cognitive load.** Author has four labels and three triggers (+ optional sweep) = a single decision tree, not a procedure book. Adoption cognitive cost is bounded.

### Emergent assembly candidate (NEW)

**EM-A1 (assembly): "Quarantine-first contribution model with self-similar SKILL.md-styled protocol."**

The assembly produces a coherent v1 architecture:
- New files default to `_quarantine/` (P2)
- The reader-protocol IS a SKILL.md-styled imperative file at `docs/README.md` (P3) that teaches AI readers the four content kinds + safe-default + folder semantics
- Authors commit (PR-reviewable) to label-or-quarantine for every new file (P3 writer-side framing + P4 triggers)
- Existing files codified by minimum-viable v1: status frontmatter on top 10-15 files; alignment table; archive notes (C2.5 + C4.1)
- Section-level annotation only when within-file drift occurs (C4.3); transition operation defined (C4.5)
- Tooling DEFERRED to v2 (C5.2)

This assembly survives all 5 tests as a unit (emergent fertility, novel via the self-similar protocol pattern, actionable in <1 day, mechanism-independent because multiple mechanisms converge).

**Assembly disposition: ACTIONABLE.**

---

## Phase 3 Refinement — Axis Coverage Check

Per the Phase 3 refinement note, examine the candidate set for orthogonal axes:

The design problem has several orthogonal axes; ensure candidate variants exist along each:

| Axis | Variants present in candidate set | Coverage |
|---|---|---|
| Annotation locus (in-source vs derived) | C1.1/C1.2 in-source; C1.4 derived | ✓ |
| Annotation visibility (human-visible vs AI-only) | C1.1 visible; C1.2 dual-channel | ✓ |
| Folder-change scope (minimal vs full reorg) | C2.5 minimal; C2.4 full | ✓ |
| Compliance enforcement locus (AI-side vs writer-side) | C3.1 AI-side; C3.3 writer-side | ✓ |
| Protocol channel (single-file vs multi-file vs in-prompt) | C3.4 prompt-only; C3.1 multi-channel | ✓ |
| Workflow discipline (defined vs none) | C4.1-4.3 defined; C4.4 none | ✓ |
| Default-direction at unmarked (uncertain vs Canon) | C1.5 inverted (killed); C1.1 default (survived) | ✓ (axis explored; one direction killed by fixed constraint) |
| Intervention shape (ADD vs REORGANIZE vs DO-NOTHING) | All three present across P1-P5 candidates | ✓ |

**Axis coverage: COMPLETE.** No single-axis bias in the candidate set.

---

## Per-row mechanism-trace audit (Production-task telemetry refinement)

For each piece (row in the decomposition's piece-list), verify at least one candidate's mechanism work references the piece's cell-values:

| Piece | Mechanism trace present? |
|---|---|
| P1 | ✓ C1.1, C1.3, C1.6 construct the sub-question answers explicitly |
| P2 | ✓ C2.1, C2.2, C2.4, C2.5 construct sub-question answers |
| P3 | ✓ C3.1, C3.2, C3.3 construct sub-question answers |
| P4 | ✓ C4.1, C4.2, C4.3, C4.5 construct sub-question answers |
| P5 | ✓ C5.1 + C5.2 construct sub-question answers (DO-NOTHING vs build) |

**Per-row mechanism-trace: ALL PIECES COVERED.** No piece appears as a placeholder without mechanism work.

---

## Telemetry

### Generic mechanism coverage

- **Generators applied (total across pieces):** Combination ✓; Absence Recognition ✓; Domain Transfer ✓; Extrapolation ✓ — **4/4**
- **Framers applied (total across pieces):** Lens Shifting ✓; Constraint Manipulation ✓ (both ADD and REMOVE per refinement); Inversion ✓ — **3/3**
- **Convergence signal:** YES — Domain Transfer + Combination + Absence Recognition converge on C1.1 + C2.1/C2.2 + C3.1; multiple independent mechanisms point to similar core innovations (quarantine + frontmatter + GFM callout + multi-channel protocol). HIGH confidence.
- **Survivors tested:** 18 candidates generated; 13 SURVIVE; 4 DEFERRED with revival trigger; 1 KILLED (C1.5 — F7 violation); 1 RESEARCH FRONTIER (C1.4 — v2). Tested: 18/18.
- **Failure modes observed:** none of the six (Premature Evaluation prevented by Phase 2 spread; Single-Mechanism Trap prevented by 4G+3F coverage; Early Frame Lock prevented by Inversion at each piece; Innovation Without Grounding prevented by 5-test cycle; Mechanism Exhaustion not reached; Survival Bias mitigated by Inversion-candidates being explicitly tested even when uncomfortable).

### Production-task additional telemetry

**Per-piece mechanism log:**
- P1: [Domain Transfer:content, Combination:content, Absence Recognition:content, Lens Shifting:intervention-shape, Inversion:intervention-shape, Constraint Manipulation:content]
- P2: [Domain Transfer:content, Constraint Manipulation:content (ADD+REMOVE), Combination:content, Absence Recognition:content, Inversion:intervention-shape]
- P3: [Domain Transfer:content, Combination:content, Lens Shifting:content, Inversion:intervention-shape]
- P4: [Extrapolation:content, Combination:content, Lens Shifting:content, Inversion:intervention-shape, Absence Recognition:content]
- P5: [Combination:content, Inversion:intervention-shape]

**Per-piece axis-distribution log (property-v pieces):**
- P1: intervention-shape axis covered (C1.5 Inversion). ✓
- P2: intervention-shape axis covered (C2.6 Inversion). ✓
- P3: intervention-shape axis covered (C3.4 Inversion). ✓
- P4: intervention-shape axis covered (C4.4 Inversion). ✓
- P5: intervention-shape axis covered (C5.2 Inversion). ✓

**Meta-decision-piece classification:**
- P1: meta-decision (property v fires — intervention-shape commitment)
- P2: meta-decision (property v fires)
- P3: meta-decision (property v fires)
- P4: meta-decision (property v fires)
- P5: meta-decision (property v fires)

**Piece-level Inversion compliance:**
- P1: SATISFIED (C1.5 generated, tested, KILLED by F7 — generation + test occurred per rule)
- P2: SATISFIED (C2.6 generated, tested, DEFERRED — generation + test occurred)
- P3: SATISFIED (C3.4 generated, tested, DEFERRED)
- P4: SATISFIED (C4.4 generated, tested, DEFERRED)
- P5: SATISFIED (C5.2 generated, tested, SURVIVED as v1 default)

**FLAG condition check:** no meta-decision piece has compliance = violated. No property-v piece has axis-misalignment violations. Verdict NOT FLAG on production-task grounds.

**RE-RUN condition check:** zero pieces have unsatisfied compliance. Verdict NOT RE-RUN on production-task grounds.

---

## Overall verdict

- Generators applied: 4 / 4
- Framers applied: 3 / 3
- Convergence: YES (multiple mechanisms converge on the v1 assembly EM-A1)
- Survivors tested: 18 / 18
- Failure modes observed: NONE
- Per-piece mechanism log: complete
- Per-piece axis-distribution log: complete (all property-v pieces covered on intervention-shape axis)
- Meta-decision-piece classification: all 5 pieces are meta-decision pieces
- Piece-level Inversion compliance: 5/5 satisfied
- Axis coverage check: complete (no single-axis bias)
- Per-row mechanism trace: all pieces have mechanism work referencing their sub-questions
- Inherited Frame Audit: ran; sufficient challenge at seed-level (no fire) and at all piece-levels (challenges generated by Phase 2 spread; no Return-to-Phase-2 needed)

**Overall: PROCEED** (sufficient coverage + convergence + tested survivors + an emergent assembly candidate EM-A1 ready for Critique to evaluate adversarially).
