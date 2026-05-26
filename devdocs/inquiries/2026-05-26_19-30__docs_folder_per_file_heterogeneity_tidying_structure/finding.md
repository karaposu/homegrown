---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: docs/ Folder Per-File Heterogeneity — Structural Tidying via Two-Layer Architecture

## Question

**From `_branch.md`:** How should the `docs/` folder at `/Users/ns/Desktop/projects/native/docs/` be structurally tidied so that within-file heterogeneity (a single file containing interleaved canon + legacy + sketch + seed material) is exposed to new AI sessions in a way that protects them from context-poison, preserves the legacy/sketch material as future-usable project memory, handles per-file fractions without requiring truth-evaluation of individually unevaluable files like `docs/consciousness.md`, is implementable without LLM batch-rewriting every file, AND extends or replaces the inherited 5-status × 11-subject whole-file taxonomy?

**Goal:** a structural design that names a concrete mechanism for each of 6 observation targets (context-poison protection / seed preservation / per-file fraction handling / unevaluable accommodation / no-batch-rewrite / inherited-taxonomy extension), survives the `consciousness.md` case, and can be applied in bounded time without ongoing heavy discipline.

## Finding Summary

- **The design problem is reader-protection at within-file granularity, not housekeeping** (the "Quarantine-first contribution model with self-similar SKILL.md-styled protocol" v1 design — formally EM-A1 from this inquiry's Critique). Reader-protection means: the corpus can stay messy if the *reader* (especially the AI session) is taught what to read and what to skip. The verb shifts from "tidy" to "expose-status-to-reader."

- **The architecture is two-layer** (the "two layers" decision): **Layer 1 — Inter-file Navigation** is the inherited 5-status × 11-subject whole-file taxonomy from the prior conversation (preserved unchanged). **Layer 2 — Intra-file Reader-Protection** is NEW: section-level annotation declaring one of four content kinds (Canon / Historical-trace / Future-seed / Unevaluable), human-author-declared, markdown-native, paired with a required reader-protocol file. Layer 1 answers "where do I look for X?"; Layer 2 answers "what do I trust in this file I just opened?"

- **Layer 2's four content kinds are operationally distinct** (the "four content kinds" decision): **Canon** = current-truth; **Historical-trace** = was-canon, was-superseded, preserved for reasoning trail; **Future-seed** = not-currently-asserted-as-truth but a possibility worth preserving; **Unevaluable** = has no truth-value (philosophical seed, voice transcript, intuition). The four-way is binding because collapsing any pair loses a load-bearing user constraint — most importantly, **Unevaluable cannot be merged into Future-seed** because that would implicitly require eventual evaluation, which `consciousness.md` cannot survive.

- **The annotation syntax is frontmatter + GFM callout, with explicit vocabulary** (the C1.1 + C1.3 + C1.6 design refinement from Critique): per-file frontmatter `default_section_status: canon|historical-trace|future-seed|unevaluable` declares the file's dominant content kind; per-section override via GitHub-Flavored-Markdown callout block `> [!CANON]`, `> [!HISTORICAL]`, `> [!SEED]`, `> [!UNEVALUABLE]` at the top of any section whose status differs from the file default. The alignment table mapping the four content kinds to the inherited 5 whole-file statuses lives as a section in `docs/README.md` (not a standalone file). Unmarked content defaults to **uncertain** — this is the safe-default that protects AI readers from context-poison.

- **Folder architecture is minimal-change codification for v1** (the C2.5 primary design from Critique; the heavier C2.4 full status-first reorganization is DEFERRED with a revival trigger). The existing implicit folder semantics (the project already half-uses `archive/`, `alignment_perspective/`, `possible_breakthroughs/`, etc. as soft status signals) get codified in `docs/README.md`; a new `_quarantine/` subfolder becomes the safe-default home for new uncertain content; `_archive_note.md` becomes mandatory inside any archive folder (extending the existing `cognitive_harness/deprecated_navigation/_archive_note.md` precedent); `framing: alternative` frontmatter marks sibling architectures (e.g., the `alignment_perspective/alignment.md` case); moved files leave 3-line tombstones at old paths.

- **The reader-protocol is a SKILL.md-styled imperative file at `docs/README.md`** (the C3.1 + C3.2 + C3.3 design from Critique, with refinements). The protocol IS written as direct instructions to a fresh AI session (the same imperative-prompt format the project's own `cognitive_harness/<discipline>/SKILL.md` files use) — leveraging the project's own pattern recursively. `LLMS.txt` at project root is a 5-line redirect to `docs/README.md`; `CLAUDE.md` gets a 2-line block pointing AI sessions to read `docs/README.md` first. The protocol explicitly declares: unmarked = uncertain (safe-default); the four content kinds and their alignment with the 5 whole-file statuses; folder conventions including quarantine semantics. The protocol is framed as **author-side commitments** (PR-reviewable-style writer discipline) rather than reader-side instructions alone — this RELOCATES the AI-compliance residual to where the project has more leverage but does NOT close it (the residual remains as an open Monitoring item).

- **Adoption is gradual via first-touch labeling** (the C4.1 + C4.2 + C4.3 + C4.5 workflow from Critique). Minimum-viable v1 ships in ~2 hours: write the reader-protocol at `docs/README.md`; add `status:` + `default_section_status:` frontmatter to the 10 canonical-architectural-reference files (named in the MUST below); add `_archive_note.md` to `docs/thinking_disciplines/archive/`; add `framing: alternative` to `docs/alignment_perspective/alignment.md`; create `docs/_quarantine/`. The other 35+ files stay unmarked — safe-default per F7 means they're "uncertain," which is the correct semantics until an author touches them. Three labeling triggers thereafter: write-time (new content); first-touch (re-opening any legacy file to edit); optional periodic sweep (most-cited unmarked file every N inquiries). For a file whose dominant kind doesn't drift, no per-section annotation is ever needed — only drift sections carry callouts. When a previously-Canon section becomes Historical-trace, the explicit transition operation: keep section text intact, change callout, one-line reason; optionally add new Canon section above.

- **Supplementary tooling is deferred to v2** (the C5.2 default; C5.1 audit tool stays in DEFERRED pipeline with revival trigger = "v1 has shipped + 3 months of usage data + specific tool need identified"). Matches the project's deferred-until-proven discipline.

- **Six DEFERRED candidates carry explicit revival triggers** so they aren't lost: C1.2 (HTML-sentinel dual-channel — revive if AI-parser reliability becomes a real concern), C2.3 (folder-aliases), C2.4 (full status-first reorganization — revive after 3 months of v1 usage if reader-confusion persists), C2.6 (no folder change at all), C3.4 (CLAUDE.md-only protocol), C4.4 (no workflow). Two RESEARCH FRONTIER items for v2: C1.4 (dual-render derived views) and C5.1 (audit tool). One KILL: C1.5 (assume unmarked = Canon) — fails the binding safe-default constraint.

## Finding

### Why we're discussing this

The user previously proposed a 2-axis taxonomy for `docs/`: Axis A (Status: CANON / THEORY / DESIGN / SKETCH / ARCHIVE) × Axis B (Subject: vision / substrate / disciplines / loops / protocols / runtime / autonomy / traversal / rule-mgmt / frontiers / history). That whole-file taxonomy is useful — but the user identified a real gap: **many files in `docs/` are partially canon and partially legacy** at the same time, interleaved within a single file. The whole-file taxonomy treats files as atomic units when they aren't.

The user named three downstream concerns. First, every new AI session that reads `docs/` gets context-poisoned by the legacy/deprecated/irrelevant material mixed with current truth, because LLMs can't easily filter "this paragraph is current vs. this paragraph is stale" without external annotation. Second, cleaning everything down to just current truth is also bad — the stale/legacy/sketch material is the project's memory, future-revival material, the trace of how the thinking evolved. Third, some files (the user named `docs/consciousness.md` as the canonical example) cannot be truth-evaluated at all — they're 6-line philosophical seeds where the very question "is this true or false or legacy?" has no answer. Truth-evaluation as a sorting criterion fails on the entire seed/sketch/aspiration class.

The constraint envelope the user established: no LLM batch-rewriting every file; no deletion of legacy material; the design must accommodate `consciousness.md`-class unevaluables; the inherited whole-file taxonomy must be extended or replaced (not silently discarded); and the user explicitly asked for an **innovative** structural approach — they're dissatisfied with the obvious moves ("clean it all" / "leave it all" / "just put it in status-folders").

This finding's job is to specify what structural design satisfies all of that. The design space the inquiry explored spans annotation mechanisms, folder reorganization, reader protocols, adoption workflows, and supplementary tooling.

### The design — EM-A1 with 8 refinements

#### 1. Two-layer architecture (the architectural commitment)

The design is two layers, not one. **Layer 1 — Inter-file Navigation** is the inherited 5-status × 11-subject whole-file taxonomy from the prior conversation. It answers the reader's question "where do I look for X?" and uses the existing partial folder structure of `docs/` plus the existing `status:` frontmatter convention. Layer 1 is preserved unchanged.

**Layer 2 — Intra-file Reader-Protection** is new. It answers a different question: "what do I trust in the file I just opened?" Within-file granularity is required because the gap the user identified (per-file fractions) cannot be resolved at folder or whole-file granularity — a file can sit in `docs/canon/X.md` and still contain a paragraph that's a Future-seed within. Layer 2 operates at section granularity by default (markdown-header-bounded), with paragraph-level annotation as an opt-in for finer cases.

The two layers are complementary, not competing. They serve different operations; collapsing them either way loses utility (whole-file-only loses within-file fractions; within-file-only loses inter-file navigation). The architecture is the central commitment this finding makes.

#### 2. The four content kinds (the within-file vocabulary)

Layer 2's annotation declares one of four content kinds. The four are operationally distinct, and the operational distinctions matter:

- **Canon** — content the project currently believes is true and current. AI readers should trust this as the project's current believed state.
- **Historical-trace** — content that *was* canon, *was* superseded, but is preserved for context, reasoning trail, or "not-yet-deleted-because-still-useful-as-evidence" reasons. AI readers should read this for context but not act on it as if it were current.
- **Future-seed** — content that is *not currently asserted as true* but is a possibility worth preserving — a sketch, an aspirational design, an open hypothesis, a possible-future-direction. AI readers should consider this if relevant to the current question but should not treat it as current claim.
- **Unevaluable** — content that has *no truth value to assign* — a philosophical seed, a voice transcript, an intuition, a piece of stream-of-consciousness. The `docs/consciousness.md` case. AI readers should read this as inspiration only, never as truth.

The four-way is binding. Collapsing Unevaluable into Future-seed implies "we'll eventually evaluate this" — which `consciousness.md` cannot survive. Collapsing Historical-trace into Canon-with-a-note loses the within-file reader-status distinction. Each pair-collapse loses a load-bearing user constraint.

The default for unmarked content is **uncertain** — this is the F7 safe-default that protects AI readers from context-poison. Unmarked is *not* the same as any of the four declared kinds; it's a fifth implicit reader-state ("you don't know — be cautious"). This is the most consequential design decision for context-poison protection.

#### 3. Annotation syntax (the markdown-native mechanism)

**Per-file:** YAML frontmatter declares the file's dominant content kind:

```yaml
---
status: active                                    # Layer 1 whole-file status
default_section_status: canon                     # Layer 2 dominant content kind
framing: alternative                              # OPTIONAL: marks sibling architectures
---
```

The `default_section_status` field is the Layer 2 extension; `status` is the inherited Layer 1 field. The `framing: alternative` field is optional and used only for files that present a sibling architectural framing (the `alignment_perspective/alignment.md` case from HP-11).

**Per-section:** GitHub-Flavored-Markdown callout block at the top of any section whose status differs from the file's `default_section_status`:

```markdown
## Some section title

> [!CANON]
> The above section's content is treated as Canon despite the file default.

(section content here)
```

Four callouts: `> [!CANON]`, `> [!HISTORICAL]`, `> [!SEED]`, `> [!UNEVALUABLE]`. The callouts render visibly in GitHub and most markdown viewers (humans see them); they are also pattern-parseable by AI readers and tools.

**Cost to add:** one line per overridden section. Zero lines per section that matches the file default. For a file whose content doesn't drift from its dominant kind, no per-section annotation is ever needed.

#### 4. The alignment table

The four within-file content kinds align with the inherited 5 whole-file statuses. The alignment is published as a section in `docs/README.md` titled `## Alignment Table`. Approximate alignment (the reader-protocol specifies the exact table):

| Whole-file `status:` | Typical `default_section_status:` | Notes |
|---|---|---|
| `active` | `canon` | The file is a current-truth reference |
| `draft` | `future-seed` or `canon` (in-progress) | Author decides per file |
| `archived` | `historical-trace` | Was-canon, was-superseded |
| `superseded` | `historical-trace` | The file's claim was replaced by another file's claim |
| (no `status:`) | (unmarked → uncertain) | Safe-default applies |

Files with `framing: alternative` map to their own dominant kind regardless of `status:` — alternative framings are typically Future-seed (if the project hasn't decided whether to absorb them) or Historical-trace (if the project explicitly rejected them in favor of the main framing).

#### 5. Folder architecture (minimal-change codification for v1)

Critique adjudicated between two ACTIONABLE alternatives — full status-first folder reorganization (C2.4) versus minimal-change codification of the existing implicit convention (C2.5) — and recommended **C2.5 as primary for v1**, with C2.4 DEFERRED with revival trigger. The reasoning: the user's framing ("we need a way to tidy" without large-scale rewriting) favors minimal disruption first; C2.5 ships in 1-2 hours; C2.4 can be promoted later if 2-3 months of v1 usage reveals reader-confusion that C2.4's folder-visible structure would resolve.

The v1 folder changes:

- **Codify existing implicit semantics** in `docs/README.md`. The project already half-uses folders as soft status signals (`archive/` = archived; `alignment_perspective/` = alternative framing; `possible_breakthroughs/` = seeds; `loop_desing_ideas/` = designs; etc.). The reader-protocol declares these semantics explicitly so AI readers can use them.
- **Add `docs/_quarantine/`** as the safe-default home for new uncertain content. Any file whose purpose is unclear lives here until explicit author-review promotes it out. This inverts the conventional publish-by-default model — for a project where context-poison is the operative concern, quarantine-first is the right default.
- **Mandatory `_archive_note.md` in every archive folder.** Add `docs/thinking_disciplines/archive/_archive_note.md` (and any future archive folder) explaining what was archived and what replaces it. Extends the existing `cognitive_harness/deprecated_navigation/_archive_note.md` precedent.
- **`framing: alternative` frontmatter on sibling-architecture files.** Add to `docs/alignment_perspective/alignment.md` immediately (the canonical case). Any future sibling architecture gets this field.
- **Tombstones at old paths when files move.** 3-line stub:
  ```markdown
  # Moved
  This file moved to: <new_path>
  Reason: <short reason>
  ```
  Required only when other files reference the old path.

#### 6. Reader-protocol (the SKILL.md-styled imperative file)

`docs/README.md` becomes the canonical reader-protocol — written as a SKILL.md-style imperative file (the same format the project's own `cognitive_harness/<discipline>/SKILL.md` files use). The protocol structure:

```markdown
# docs/ — Reader Protocol

> Before reading any file in docs/, follow these rules.

## Layer 1 — Inter-file Navigation (where to look)

[Explanation of the 5-status × 11-subject whole-file taxonomy + folder semantics]

## Layer 2 — Intra-file Reader-Protection (what to trust)

[Explanation of the four content kinds + frontmatter + callout syntax]

## Alignment Table

[The 5×4 mapping table above]

## Safe-Default

Unmarked content = uncertain. Do not treat unmarked sections as Canon.

## Folder Conventions

- canon-tagged folders: current-truth references
- archive/: historical; every archive folder MUST contain _archive_note.md
- alignment_perspective/, alternative_framings/, etc.: sibling architectures (files inside carry `framing: alternative`)
- _quarantine/: untriaged or alternative-yet-unsorted; default-trust = "do not act on this until reviewed"
- Tombstones: when files move, a 3-line stub at the old path points to the new location

## Reading Order (for cold-start AI sessions)

If you're a new AI session in this project:
1. Read this file (docs/README.md) first.
2. Read [list of 10 canonical files] to orient on the project's current state.
3. ...
```

The choice of SKILL.md-style imperative is non-trivial: the protocol *uses the project's own discoverable convention recursively*. An AI session that already knows the SKILL.md shape (because the project uses it everywhere in `cognitive_harness/`) reads the protocol naturally — it looks like a skill spec.

**Discoverability is three-channel**, but with one canonical source:
- `docs/README.md` is canonical (the full protocol).
- `LLMS.txt` at project root is a 5-line redirect pointing to `docs/README.md` (for AI tools that load LLMS.txt by convention).
- `CLAUDE.md` gets a 2-line block: `## docs/ folder — Before reading any file in docs/, read docs/README.md first.` (for Claude Code AI sessions that load CLAUDE.md automatically).

The LLMS.txt and CLAUDE.md channels are **redirects only, not duplicates** — to prevent drift. The canonical content lives in one place.

#### 7. The writer-side commitment framing (honest treatment of the compliance residual)

The reader-protocol is framed as **author-side commitments**, not reader-side instructions. The opening reads: *"As an author contributing to docs/, I commit that: any file I add will have `status:` frontmatter; any non-default-kind section in a file will carry the appropriate callout; ..."* This shifts the protocol's enforcement audience from the AI reader (whose compliance is uncertain) to the author (whose compliance is PR-reviewable, or in a single-author project is self-discipline).

This framing **RELOCATES the AI-compliance residual; it does not close it.** Author-side labeling is necessary (without labels, even a compliant AI can't distinguish), but not sufficient (a non-compliant AI may still ignore labels). The finding preserves this residual honestly in the Open Questions / Monitoring section. Closing the residual entirely is a future capability (e.g., a CI check that fails if frontmatter is missing — a v2 P5 tooling possibility, deferred).

#### 8. Gradual adoption workflow

Three labeling triggers + an optional sweep:

- **(a) Write-time** — when adding a new file or new section to an existing file, label it. Cost: 1 line of frontmatter at file creation; 0 to 1 line of callout per section.
- **(b) First-touch** — when opening any legacy file to **edit** any of its content for any reason, do a single-pass labeling of its sections before saving. (Read-only opens do not trigger.)
- **(c) Periodic sweep (optional)** — every N inquiries (e.g., monthly), the user picks the most-cited unmarked file and labels it. Intentionally low-priority — system works without it but converges faster with it.

**Drift-only annotation for non-drifting files:** at file creation, the author commits `status:` + `default_section_status:` in frontmatter. As long as content stays consistent with the declared default, no per-section annotation is ever needed. When drift occurs (e.g., the author adds a Historical-trace section into a Canon-default file), only the drifting section carries a callout. This keeps ongoing labeling cost near-zero for most files.

**Canon → Historical-trace transition operation:** when an author supersedes a Canon section (because the project's understanding evolved): keep the section's text intact, change its callout from `> [!CANON]` to `> [!HISTORICAL]`, add a one-line reason, and optionally add a new `> [!CANON]` section above it with the new content. The trail is preserved; the reader-status is flipped.

#### 9. Minimum-viable v1 (the ship-in-two-hours scope)

The v1 deliverable consists of:

1. Write `docs/README.md` containing the reader-protocol (with the alignment table as a section).
2. Add `LLMS.txt` redirect at project root (5 lines).
3. Add 2-line `## docs/ folder` block to `CLAUDE.md`.
4. Add `status:` + `default_section_status:` frontmatter to the **10 canonical-architectural-reference files** (named in MUST 8 below).
5. Add `_archive_note.md` to `docs/thinking_disciplines/archive/`.
6. Add `framing: alternative` to `docs/alignment_perspective/alignment.md`.
7. Create empty `docs/_quarantine/` (with its own `_quarantine/README.md` stating "default-trust = do not act until reviewed").

That's v1. Total author time: ~2 hours. The other 35+ files in `docs/` stay unmarked — safe-default per F7 means they're "uncertain," which is the correct semantics until an author next touches them via first-touch trigger.

#### 10. What's deferred

The 6 DEFERRED candidates each carry an explicit revival trigger:

- **C1.2** (HTML-sentinel dual-channel annotation) — revive if v1 usage reveals AI-parser inconsistency on GFM callouts across tools.
- **C2.3** (folder-aliases mechanism) — revive when a real cross-subject file emerges where the folder-home choice becomes painful.
- **C2.4** (full status-first folder reorganization) — revive after 3 months of v1 usage if reader-confusion persists despite C2.5's minimal-change codification.
- **C2.6** (no folder changes at all) — revive only as fallback if user objects to even the minimal `_quarantine/` + `_archive_note.md` additions.
- **C3.4** (CLAUDE.md-only protocol) — revive if the project commits to Claude-Code-only AI consumer permanently.
- **C4.4** (no defined workflow) — revive only as fallback if author-discipline proves unreliable in practice.

Two RESEARCH FRONTIER items for v2:
- **C1.4** (dual-render derived views) — auto-generate `docs/.derived/CURRENT.md` from Canon-tagged sections. Requires tooling.
- **C5.1** (audit tool) — single CLI doing parse + derive + dead-link checks. Deferred until v1 usage data justifies.

One KILLED: **C1.5** (assume unmarked = Canon) — fails the F7 binding safe-default constraint catastrophically. Seed extracted: any future revisit requires Sensemaking re-run with new evidence that F7 should be relaxed (no such evidence has surfaced).

### What "innovative" means in this design

The user explicitly asked for an innovative approach. The individual components are conventional (frontmatter, callouts, quarantine folders, reader-protocols all exist as known patterns). The novelty is at the assembly level, in two specific moves:

1. **Self-similar protocol pattern.** The `docs/` reader-protocol IS itself a SKILL.md-styled imperative file, leveraging the project's own pattern recursively. Most projects' READMEs are narrative documentation; this project's README *uses the same imperative-prompt structure the project's disciplines use*. Self-similar architecture means an AI reader already knows the shape on arrival — no additional convention to learn.

2. **Quarantine-first contribution model.** Most projects default to publish-by-default and triage-later. For a project where context-poison is the operative concern, that default is backward. Inverting it — new content lives in `_quarantine/` by default and graduates out only on explicit author-review — is the structural innovation that turns the default from "trust until you find a reason not to" into "don't trust until you're shown a reason to."

These two moves satisfy the INNOVATIVE-quality dimension at assembly-level. Critique confirmed both as genuinely-novel rather than predictable assembly.

## Next Actions

### MUST

- **What:** Write `docs/README.md` as the SKILL.md-styled imperative reader-protocol, containing: the two-layer explanation; the four-content-kind vocabulary with exact callout syntax (`> [!CANON]`, `> [!HISTORICAL]`, `> [!SEED]`, `> [!UNEVALUABLE]`); the alignment table; the safe-default declaration; the folder conventions; and a cold-start reading order. Frame opening as author-side commitments.
  - **Who:** User (author of the project).
  - **Gate:** condition-bound — when the user decides to act on this finding (ideally within 1 week of this finding being published so the v1 ships before drift sets in).
  - **Why:** the reader-protocol is the required paired component (F6); without it, the annotation layer has no consumer-side interpretation. This is the foundational MUST.

- **What:** Add `LLMS.txt` redirect at project root pointing to `docs/README.md`, and add a 2-line `## docs/ folder` block to `CLAUDE.md` that tells AI sessions to read `docs/README.md` before reading other files in docs/.
  - **Who:** User.
  - **Gate:** observable — same session as the README is written.
  - **Why:** three-channel discoverability with a single canonical source; LLMS.txt serves multi-tool AI consumers, CLAUDE.md serves Claude Code's auto-load convention.

- **What:** Add the frontmatter pair (`status:` if missing; `default_section_status: canon|historical-trace|future-seed|unevaluable`) to the 10 canonical-architectural-reference files: `docs/desc.md`, `docs/thinking_space_dynamics.md`, `docs/discipline_taxonomy.md`, `docs/intuit.md`, `docs/autonomy_ladder.md`, `docs/materialization_lifecycle.md`, `docs/self_improvement_rate.md`, `docs/regression/desc.md`, `docs/step_refinement.md`, `docs/discipline_rule_placement.md`.
  - **Who:** User.
  - **Gate:** observable — within the same v1 ship window as the README.
  - **Why:** these are the canonical files most likely to be read by new AI sessions; labeling them eliminates the most common context-poison sources first. Per-file cost: ~30 seconds.

- **What:** Add `docs/thinking_disciplines/archive/_archive_note.md` explaining what each archived file in that folder was, when it was archived, and what (if anything) supersedes it. Use the existing `cognitive_harness/deprecated_navigation/_archive_note.md` as a template.
  - **Who:** User.
  - **Gate:** observable — within the v1 ship window.
  - **Why:** closes HP-7 (archived-but-still-confusing) for the largest existing case (8 files in this archive folder).

- **What:** Add `framing: alternative` frontmatter line to `docs/alignment_perspective/alignment.md`.
  - **Who:** User.
  - **Gate:** observable — within the v1 ship window.
  - **Why:** closes HP-11 (silent alternative-framing) for the canonical case (the 516-line "HomeGrown Agent" sibling architecture).

- **What:** Create `docs/_quarantine/` folder with its own `_quarantine/README.md` stating "default-trust = do not act on content here until reviewed; this is the safe-default home for new uncertain content."
  - **Who:** User.
  - **Gate:** observable — within the v1 ship window.
  - **Why:** establishes the quarantine-first contribution model immediately; new contributions (and uncertain-purpose existing files) have a home.

- **What:** Adopt the three labeling triggers as workflow going forward: (a) write-time labeling for new content; (b) first-touch labeling whenever opening a legacy file to edit; (c) optional periodic sweep of most-cited unmarked file. Drift-only annotation for non-drifting files.
  - **Who:** User.
  - **Gate:** condition-bound — applies starting from v1 ship date.
  - **Why:** gradual adoption mechanism (F8); no batch rewrite required (C-5 / F8); converges the corpus over time.

### COULD

- **What:** During the v1 ship, add `status:` + `default_section_status:` frontmatter to the next tier of files beyond the canonical 10 (e.g., the loop-design files in `docs/loop_desing_ideas/`, the unanswered_frontiers.md, the runtime_environment files). Approximately 8-12 additional files.
  - **Who:** User.
  - **Gate:** observable — only if the v1 ship time-budget exceeds the minimum 2 hours and the user wants to label more files.
  - **Why:** accelerates convergence; reduces the unmarked-uncertain population. Optional because safe-default handles the unmarked case.
  - **Depends-on:** none. Independent of all other MUSTs.

- **What:** Add `framing: alternative` to other complete-alternative files if any are discovered during the v1 ship (e.g., older `thinking_disciplines/list_of_disciplines.md` which references `/wayfinding` and `/comprehend` as built — could be `framing: superseded` or `default_section_status: historical-trace`).
  - **Who:** User.
  - **Gate:** observable — during v1 ship pass.
  - **Why:** surfacing additional HP-11 cases tightens the design's coverage.

- **What:** Build a 1-page `docs/_HOW_TO_CONTRIBUTE.md` that lists the author-side commitments in checklist form for future contributors (or future-self).
  - **Who:** User.
  - **Gate:** observable — anytime after v1 ships.
  - **Why:** operationalizes the writer-side commitment framing (C3.3); makes adoption discoverable for any future contributor (or any future AI session writing into `docs/`).

### DEFERRED

- **What:** Promote C2.4 (full status-first folder reorganization) — restructure `docs/` into top-level folders by content-kind family (canon/, theory/, design/, ideas/, archive/, quarantine/, design_history/, frontiers/, alternative_framings/), with subject-second within each.
  - **Gate:** revival trigger — observable: "C2.5 (v1's minimal-change codification) has shipped + 3 months of usage data + identified specific reader-confusion that C2.4's folder-visible structure would resolve."
  - **Why if revived:** folder-visible status is the strongest possible signal — AI readers know from path alone whether a file is current or historical. If C2.5's reliance on frontmatter + reader-protocol proves insufficient (e.g., AI sessions repeatedly mis-classify because they didn't read the protocol), the migration cost becomes justified.

- **What:** Build C5.1 (audit tool) — single CLI doing parser + derive + dead-link checks + archive_note presence check.
  - **Gate:** revival trigger — observable: "v1 has shipped + 3 months of usage + specific identified tool need (e.g., manual dead-link detection is consuming meaningful time)."
  - **Why if revived:** deterministic supplementary signals supplement the human-author labeling; auto-derived `docs/CURRENT.md` index becomes a strong context-poison protection for AI readers.

- **What:** Build C1.4 (dual-render — auto-generate consumer views from Canon-tagged source).
  - **Gate:** condition-bound — when C5.1 ships AND there is observable benefit to having AI readers consume the derived view by default.
  - **Why if revived:** strongest possible context-poison protection (AI reads only Canon-derived); shifts the design from "label and hope" to "label and serve the labeled view directly."

- **What:** Add CI-side enforcement (e.g., a pre-commit hook or CI check that fails if a file in docs/ lacks `status:` frontmatter, or if an archive folder lacks `_archive_note.md`).
  - **Gate:** condition-bound — when the project adopts a CI/pre-commit workflow.
  - **Why if revived:** closes the author-side-discipline residual (currently relies on self-discipline). Compliance shifts from social to mechanical.

- **What:** Revisit the AI-side compliance residual: if AI readers in practice fail to honor annotations even when present, design a stronger enforcement (e.g., a docs/-side `_RULES.md` that future AI sessions are mechanically forced to read first via an MCP server or similar).
  - **Gate:** condition-bound — when accumulated evidence shows AI-side non-compliance is a significant residual (e.g., 3+ observed instances of an AI session acting on a labeled-as-Historical-trace section as if it were Canon).
  - **Why if revived:** the design's biggest residual is AI-side compliance; closing it requires substrate-level intervention not available at Level 0 autonomy.

## Reasoning

### What survived and why

The 18 candidates Innovation produced spanned 5 design pieces. Critique adversarially tested each. The 14 ACTIONABLE survivors (10 clean + 4 with named refinements) cohere as an assembled v1 design (EM-A1) because the pieces compose without conflict and have explicit interfaces.

The two genuinely-novel features at assembly level (self-similar SKILL.md-styled protocol; quarantine-first contribution default) carry the load on the user's INNOVATIVE-quality requirement. Individual components are conventional; the assembly is not.

The Canon / Historical-trace / Future-seed / Unevaluable four-way partition survived three challenges: a three-way merge attempt (collapse Unevaluable into Future-seed), a five-way split attempt (split Unevaluable into philosophical-seed vs untriaged-question), and a reader-promise reframing attempt. The four-way held because it aligns with the user's existing vocabulary AND each pair has operationally-distinct reader-behavior implications. The most critical pair distinction is Unevaluable vs Future-seed — collapsing them implicitly requires eventual evaluation, which `docs/consciousness.md` cannot survive.

### Significant kills (and what they teach)

**C1.5 (assume unmarked = Canon)** was the only outright KILL. Its prosecution: failing the F7 binding safe-default constraint catastrophically — an unmarked stale paragraph reads as current truth, which is direct context-poison enabler. The design's defense against context-poison rests on the OPPOSITE default (unmarked = uncertain); inverting that default removes the protection entirely.

The seed extracted from the kill: F7 is the most consequential single design decision. The entire context-poison protection rests on it. Any future revisit of the unmarked-default question must first show via Sensemaking re-run that F7's structural reasoning is wrong — no such evidence has surfaced and the current design depends on F7 holding.

### Significant deferrals (and what they teach)

**C2.4 (full status-first folder reorganization) DEFERRED.** The prosecution: high one-time migration cost (~30 files move); the user's framing favors minimal-disruption; mid-migration partial-state is worse than either complete state; the spirit of C-5 (no batch rewrite of content) extends informally to no large-scale folder reshuffle. The defense: folder-level visible status is the strongest possible reader signal. The collision: both candidates survive Phase 2; the difference is a value trade-off, not a structural-grounds question. Critique recommended C2.5 (minimal-change) as primary for v1 with C2.4 DEFERRED with a clear revival trigger (3 months of v1 usage data demonstrating reader-confusion that C2.4 would resolve). This preserves the option without paying the migration cost now.

**C3.3 (writer-side commitment framing) accepted but REFINED.** The original Innovation framing claimed it "closes" the compliance residual; Critique's adversarial test showed it RELOCATES the residual (from AI-side to author-side) but does not CLOSE it. The finding preserves the residual honestly in the Open Questions / Monitoring section rather than over-asserting the fix. This is the design's most honest acknowledgment: at Level 0 autonomy, AI-side compliance is mitigable but residual; the design provides the precondition for compliance (labeling exists; protocol exists) but cannot enforce it.

### Why the 8 refinements survived as MUSTs

Each refinement closes a specification gap that would otherwise leave the design uninstantiable. Without committing to exact frontmatter schema (refinement 1), authors couldn't know what field names to use. Without committing to the alignment table's location (refinement 2), readers wouldn't know where to find it. Without the tombstone template (refinement 3), moved files would leave inconsistent stubs. Without the `_archive_note.md` template (refinement 4), the precedent wouldn't transfer cleanly. Without the C2.5-primary decision (refinement 5), the user would have to re-adjudicate C2.4 vs C2.5 themselves. Without the README-canonical + redirect-only structure (refinement 6), the three protocol channels would drift. Without the honest compliance-residual treatment (refinement 7), the design would over-claim. Without the 10 named files (refinement 8), the minimum-viable v1 wouldn't be concretely actionable.

The refinements move the design from "design idea" to "executable v1 specification."

## Open Questions

### Monitoring

- **AI-reader compliance with annotations.** The design RELOCATES (does not CLOSE) the AI-side compliance residual. Observable: count of cases where an AI session acts on a labeled-as-Historical-trace section as if it were Canon, or treats an `> [!UNEVALUABLE]`-flagged paragraph as a truth claim. Monitor across the next 10-20 AI sessions reading `docs/` after v1 ships. If non-compliance is significant, revive the DEFERRED CI-enforcement item from Next Actions.

- **First-touch labeling discipline rot.** The design depends on the user (author) actually doing first-touch labeling when re-opening legacy files. Observable: after 3 months, what fraction of files touched-for-edit since v1 are now labeled? If <70%, the workflow has rotted and the C4.4 (no-workflow) DEFERRED candidate may need promotion (accept safe-default-only as the answer).

- **The 16 files sharing 2026-05-16 mtime (Surfacing F-4 frontier).** A Recency-Equates-Idleness risk surface — any future tool that interprets mtime as content-freshness would systematically misjudge these 16. Observable: if a v2 tool or AI consumer accidentally uses mtime as a status proxy, flag and adjust.

- **The four-content-kind sufficiency.** Observable: if authors at first-touch repeatedly hit cases that don't fit any of the four kinds and would warrant a fifth, log the case. After 5+ logged cases, revisit the Sensemaking Ambiguity #1 resolution.

### Blocked

- **C5.1 (audit tool) refinement.** Cannot specify exact tool API until v1 usage data reveals which tool capabilities are most needed.

- **C2.4 promotion decision.** Cannot be made before v1 ships and 3 months of usage data accumulates.

### Research Frontiers

- **AI-side compliance enforcement via substrate.** Whether a future AI substrate (e.g., MCP-mediated docs/ access; project-protocol-required reading; etc.) could mechanically force AI sessions to read `docs/README.md` before consuming any other docs/ content. Currently no such mechanism exists at Level 0.

- **Per-claim annotation granularity.** Section-level was chosen because paragraph-level is too costly (Sensemaking Ambiguity #4 resolution). If a future case emerges where a single paragraph genuinely needs multiple status annotations (e.g., a paragraph with one Canon claim and one Historical-trace example), the design may need a sub-paragraph mechanism. Probably resolvable with sentence-level callouts in extreme cases, but not specified now.

- **The "writer-side commitment" + future autonomy.** As the project's autonomy ladder advances (per `docs/desc.md`, `docs/autonomy_ladder.md`), the author may sometimes BE an AI session. At that point, "author-side commitment" becomes "AI-side commitment" — collapsing the relocation that C3.3 currently performs. The design's compliance treatment may need re-derivation under L3+ autonomy.

- **Dual-render (C1.4) consumer protocol.** If C1.4 is built in v2, AI readers should be directed by the reader-protocol to consume the derived `CURRENT.md` first, full source only when needed. The exact reader-protocol revision needed at C1.4 promotion is unspecified now.

### Refinement Triggers

- **C2.4 revival trigger:** v1 has shipped + 3 months of usage data + identified specific reader-confusion that the full folder reorganization would resolve.
- **C5.1 revival trigger:** v1 has shipped + 3 months of usage + specific tool need identified (e.g., manual dead-link detection consuming meaningful time).
- **C1.2 revival trigger:** AI-parser reliability across markdown tools becomes a real concern in v1 usage.
- **CI enforcement revival trigger:** author-side discipline rot observed (per Monitoring item #2 above).
- **AI-side compliance enforcement revival trigger:** 3+ observed instances of an AI session acting on a labeled section against its label.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
what u suggested as
Axis A — Status (how authoritative is this file)
[full 5-status table]
Axis B — Subject (what the file is ABOUT)
[full 11-subject table]

is really useful, but it doestn consider there are many half correct half legacy info containing files there.

everytime a new session reads these docs folder , it will have some context poison due to legacy, deprecated, irrelevant, concepts...

but also cleaning everything so only current state and up to date info stays is bad too, bc all these other info there are still meaningful and can be used in the future or can be a seed.

we need a way to tidy  all of these docs folder,

we can use LLM to go check each document and compile certain cannon knowledge maybe, but this will break many docs documents . for example docs/consciousness.md cant be evaluated as true or false or legacy...

we need innovative way structuring this folder and files maybe
```

</details>
