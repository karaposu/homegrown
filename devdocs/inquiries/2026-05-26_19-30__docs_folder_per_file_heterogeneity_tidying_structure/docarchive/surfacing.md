# Surfacing — docs/ folder per-file heterogeneity territory

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-26_19-30__docs_folder_per_file_heterogeneity_tidying_structure/_branch.md

Territory: /Users/ns/Desktop/projects/native/docs/ (49 files, read in prior conversation turns).
Mode: artifact. Entry: signal-first. Boundary: explicit-bounded.
Purpose: surface kinds of within-file heterogeneity + context-poisoning patterns + transferable structural patterns from other domains.
```

## Mode + Entry Point + Territory

- **Mode:** artifact
- **Entry point:** signal-first (explicit purpose given)
- **Territory specification:** `explicit-bounded` — three named sub-regions:
  - **R-DOCS** — the 49 files under `/Users/ns/Desktop/projects/native/docs/` (filesystem-backed, mtimes captured)
  - **R-CONCERNS** — six concerns stated in `_branch.md` Observation Targets (no filesystem)
  - **R-EXTERNAL** — transferable structural patterns from neighbor domains (no filesystem; possibility-mode candidate generation within bounded purpose)
- **Purpose:** drawn verbatim from input — *"surface kinds of within-file heterogeneity + context-poisoning patterns + transferable patterns"*
- **Boundary-discovery sub-phase:** SKIPPED — territory is explicit-bounded

## Reception

- `purpose`: bias source for relevance attribution (the inquiry's three-part purpose above)
- `territory`: explicit-bounded R-DOCS ∪ R-CONCERNS ∪ R-EXTERNAL
- `prior-artifact`: none (first invocation in this inquiry)
- `prior-workspace`: the 49 docs/ file contents already in the LLM context from prior conversation turns; treated as workspace-continuous since same session is producing this surfacing artifact
- `refined-sub-purpose`: none

---

## Traversal Trace

Per §5.4. Per-item recency annotation: `{source: filesystem, value: ISO8601}` for R-DOCS items; `{source: none, value: null}` for R-CONCERNS and R-EXTERNAL.

### R-DOCS sub-region: heterogeneity-pattern items (the structural patterns observed across docs/ files)

These are PATTERN items — each pattern is the unit of work for the inquiry's purpose, more useful than per-file items would be. Per-file entries appear separately below for files that are canonical exemplars.

| # | Region | Item identifier | Relevance verdict | Confidence | Step note | Recency annotation |
|---|---|---|---|---|---|---|
| 1 | R-DOCS/patterns | `HP-1: active-finding-with-embedded-supersession-trail` — files with `status: active` frontmatter that contain internal references to prior findings explicitly marked "killed / superseded / corrected", interleaving current-canon with historical-trace text | core | HIGH | exemplar: desc.md "What has been killed" section embeds 10 superseded claims as supporting context; same pattern in thinking_space_dynamics.md "Reconciliation with predecessors", self_improvement_rate.md, intuit.md §13. The file IS canon, but ~15–30% of its line count is historical context. | `{source: none, value: null}` |
| 2 | R-DOCS/patterns | `HP-2: spec-body-with-future-deferred-pockets` — files that are mostly current spec but contain "DEFERRED" / "Phase D" / "if revived" sections describing capability that doesn't exist | core | HIGH | exemplar: intuit.md (Phase A/B/C/D — A is built, D is future); autonomy_ladder.md (L0/L1 anchored, L2-L5 placeholder thresholds explicitly invented in-text); materialization_lifecycle.md (Phase 1-8 lifecycle, mostly aspirational). The phase-frontier inside the spec is a per-file fraction split. | `{source: none, value: null}` |
| 3 | R-DOCS/patterns | `HP-3: stable-definition-followed-by-brain-dump-tail` — files with clean canonical content at top, free-form unstructured notes at bottom, no visual separator between them | core | HIGH | exemplar: thinking_disciplines/notes.md (philosophical claims top → mid-thought voice transcripts below); thinking_disciplines/terminology.md (clean tiers, then 4 numbered concepts that are sketch); minimum_viable_loop.md (current state table top, growth-phase aspirational roadmap, "Generic ROADMAP" brain dump tail). | `{source: none, value: null}` |
| 4 | R-DOCS/patterns | `HP-4: load-bearing-cell-inside-otherwise-superseded-file` — files whose overall framing is superseded but contain one or two definitions / decisions still cited by current code | core | MEDIUM | exemplar: thinking_disciplines/list_of_disciplines.md (still references `/wayfinding` as built — wrong now; but contains the original transform-table for each discipline that's still useful); thinking_disciplines/alignment_theory.md (6-layer × 4-pillar framework — partially superseded by cognitive_harness/contracts/alignment_control.md but the L0-L6 taxonomy still ground-truth for outcome_review.md). | `{source: none, value: null}` |
| 5 | R-DOCS/patterns | `HP-5: explicit-self-labeled-fuzziness` — file announces its own status at the top ("Status: Work in progress" / "fuzzy note" / "not a specification" / "design-rationale not spec") | core | HIGH | exemplar: what_is_meaningful_traversal.md ("This file is a fuzzy note. It is not a specification"); thinking_disciplines/protocols/desc.md ("Status: Work in progress"); thinking_disciplines/protocols/what_is_protocol.md ("informal companion to desc.md"); loop_desing_ideas/loop_design_1.md ("This document is design-rationale notes... not a spec"); step_refinement.md ("This document is descriptive, not prescriptive"). The self-label is a NATIVE solution to context-poison that already exists, partially. | `{source: none, value: null}` |
| 6 | R-DOCS/patterns | `HP-6: rephrase-old-content-into-different-frame` — a file containing essentially the same content as a prior file but reorganized into a different framing, with neither file marked as superseding the other | core | MEDIUM | exemplar: thinking_disciplines/what_are_they.md ~~ docs/desc.md ~~ thinking_disciplines/list_of_disciplines.md all describe disciplines from different angles; thinking_disciplines/anatomy_of_disciplines.md ~~ thinking_disciplines/protocols/what_is_protocol.md present overlapping anatomy claims. Multiple framings of same content = silent supersession risk. | `{source: none, value: null}` |
| 7 | R-DOCS/patterns | `HP-7: archived-but-still-confusing` — content explicitly placed under `archive/` but still readable, with no in-file marker stating "this is archived, use X instead" | core | HIGH | exemplar: thinking_disciplines/archive/* (8 files, all valid-looking predecessors of cognitive_harness/<disc>/references/<disc>.md — but the archive folder name is the only signal; opening the file shows clean content that reads as authoritative). Same pattern in `cognitive_harness/deprecated_navigation/` (called out by its own `_archive_note.md` — a stronger pattern that works). | `{source: none, value: null}` |
| 8 | R-DOCS/patterns | `HP-8: forward-reference-to-unbuilt-artifacts` — file references files / paths / capabilities that don't yet exist as if they do | core | HIGH | exemplar: multiple files reference `devdocs/spec/meaningful_traversal.md` (does not exist); thinking_disciplines/list_of_disciplines.md cites `/comprehend`, `/wayfinding` as built (they're not in cognitive_harness/); thinking_disciplines/alignment_matrix.md prescribes adapter files at `thinking_disciplines/adapters/` (folder does not exist). | `{source: none, value: null}` |
| 9 | R-DOCS/patterns | `HP-9: single-thought-unevaluable-sketch` — file under 30 lines, no structured sections, content is a seed/intuition/question that cannot be true-or-false adjudicated | core | HIGH | exemplar: consciousness.md (6 lines); nav.md (28 lines, poetic-style); enumerated_goals.md (20 lines mid-sentence); possible_breakthroughs/1.md (voice transcript); possible_breakthroughs/2.md (9 lines, multiple questions); thinking_disciplines/where_we_left.md (2 lines, mid-conversation). The user explicitly named this class as the constraint case (constraint d). | `{source: filesystem, value: 2026-04-27T16:50:31Z}` (consciousness.md exemplar) |
| 10 | R-DOCS/patterns | `HP-10: finding-shape-promoted-into-docs` — file looks like an /MVL+ inquiry finding (Question/Goal/Finding/Reasoning/Open Questions) but lives in docs/ not devdocs/inquiries/ | sub | HIGH | exemplar: desc.md, self_improvement_rate.md, thinking_space_dynamics.md, discipline_taxonomy.md, loop_desing_ideas/meta_loop.md. The finding-shape signals "this was the output of an inquiry process and got elevated" — semi-archeological information that affects how the file should be read. | `{source: none, value: null}` |
| 11 | R-DOCS/patterns | `HP-11: complete-alternative-architecture-as-sibling` — a single file presents a fully-fledged alternative framing of the project that doesn't intersect cleanly with the main framing, with no in-file marker about which is canonical | core | HIGH | exemplar: alignment_perspective/alignment.md (516 lines — "HomeGrown Agent" with 6 alignment layers × 7 modes × 3 autonomy levels; doesn't map onto the active SIC + Predictive RC + autonomy-ladder framing). Reader can't tell from inside the file that it's a sibling-not-canon. | `{source: filesystem, value: 2026-04-25T09:14:51Z}` |
| 12 | R-DOCS/patterns | `HP-12: matrix-of-state-inside-file` — file contains an instance-snapshot of system state at one point in time (e.g., "Last updated: DATE" + a table whose values reflect that moment) | sub | HIGH | exemplar: thinking_disciplines/alignment_matrix.md ("Last updated: 2026-04-16" + 24-cell matrix). The whole file is a frozen snapshot; any reader treating it as current is wrong. | `{source: filesystem, value: 2026-04-16T12:41:06Z}` |
| 13 | R-DOCS/patterns | `HP-13: hidden-load-bearing-aside` — file's main content is one thing; a one-liner aside inside it is actually a load-bearing project commitment | sub | MEDIUM | exemplar: discipline_taxonomy.md "Charter: what `docs/` holds — `docs/` holds curated stable-view files for architectural concepts" (one paragraph at end, defines what docs/ IS for the whole project); folder_based.md rule #6 ("Subfolders mean further decomposition, not organization"). | `{source: none, value: null}` |
| 14 | R-DOCS/patterns | `HP-14: mixed-author-voice` — file contains multiple distinguishable writing voices (e.g., human-typed terse prose interleaved with AI-generated structured tables), suggesting accreted edits | sub | MEDIUM | exemplar: minimum_viable_loop.md (clean tables top, very-typo'd brainstorm at bottom; "the hyptothesis is the current modern LLM models"); thinking_disciplines/notes.md; enumerated_goals.md. | `{source: none, value: null}` |
| 15 | R-DOCS/patterns | `HP-15: contains-quoted-block-from-elsewhere` — file embeds a verbatim section from another file or external source within its own narrative | side | MEDIUM | exemplar: minimum_viable_loop.md quotes `docs/desc.md`; consciousness.md mentions "Reflection, navigation, inquiry memory" referring to other docs. The quoted material may or may not be current in its source file. | `{source: none, value: null}` |

### R-DOCS sub-region: canonical-example file items (named for evidence anchoring)

| # | Region | Item identifier | Relevance verdict | Confidence | Step note | Recency annotation |
|---|---|---|---|---|---|---|
| 16 | R-DOCS/files | `docs/consciousness.md` | core | HIGH | The user-named canonical case for HP-9; the constraint test for any structural design | `{source: filesystem, value: 2026-04-27T16:50:31Z}` |
| 17 | R-DOCS/files | `docs/desc.md` | core | HIGH | Canon end-goal definition; exemplar for HP-1 (active+supersession) AND HP-10 (finding-shape promoted); the "Charter" hidden aside (HP-13) lives in a sibling file but applies to this | `{source: filesystem, value: 2026-05-16T08:32:58Z}` |
| 18 | R-DOCS/files | `docs/thinking_disciplines/list_of_disciplines.md` | core | HIGH | Exemplar of HP-4 (overall superseded; cells inside still load-bearing); HP-8 (references unbuilt `/wayfinding` `/comprehend` as built) | `{source: filesystem, value: 2026-04-25T09:14:51Z}` |
| 19 | R-DOCS/files | `docs/thinking_disciplines/archive/*.md` (8 files) | core | HIGH | The cleanest case of "archive folder used as the only signal" — HP-7; per-file content is internally indistinguishable from canon | `{source: filesystem, value: 2026-04-08T11:14:18Z to 2026-04-16T08:10:54Z}` (range) |
| 20 | R-DOCS/files | `docs/alignment_perspective/alignment.md` | core | HIGH | Sole exemplar of HP-11 (complete alternative architecture as silent sibling) | `{source: filesystem, value: 2026-04-25T09:14:51Z}` |
| 21 | R-DOCS/files | `docs/thinking_disciplines/notes.md` | sub | HIGH | HP-3 exemplar — mid-conversation brain dump | `{source: filesystem, value: 2026-05-11T12:07:55Z}` |
| 22 | R-DOCS/files | `docs/thinking_disciplines/alignment_matrix.md` | sub | HIGH | HP-12 exemplar — frozen-snapshot file | `{source: filesystem, value: 2026-04-16T12:41:06Z}` |
| 23 | R-DOCS/files | `docs/what_is_meaningful_traversal.md` | sub | HIGH | HP-5 exemplar — self-labeled "fuzzy note" (the closest to a NATIVE solution that already partially exists) | `{source: filesystem, value: 2026-05-16T08:32:58Z}` |
| 24 | R-DOCS/files | `docs/intuit.md` | sub | HIGH | HP-2 exemplar — Phase A built, Phases B/C/D deferred inside same file | `{source: filesystem, value: 2026-05-16T08:32:58Z}` |
| 25 | R-DOCS/files | `docs/cognitive_harness/deprecated_navigation/_archive_note.md` (sibling reference) | side | HIGH | NOT in docs/ but the cleanest existing example of the project ALREADY having a stronger archive-marking pattern (explicit `_archive_note.md` co-located) than the docs/thinking_disciplines/archive/ folder uses. Surfaced as a project-internal precedent the design can draw from. | `{source: filesystem, value: ~2026-05-25}` |

### R-CONCERNS sub-region: user-stated concerns + constraints

| # | Region | Item identifier | Relevance verdict | Confidence | Step note | Recency annotation |
|---|---|---|---|---|---|---|
| 26 | R-CONCERNS | `C-1: context-poison-on-fresh-session-read` — new AI session reads docs/, treats stale paragraphs as current truth, downstream reasoning corrupted | core | HIGH | Observation Target #1 — the primary protection the design must provide | `{source: none, value: null}` |
| 27 | R-CONCERNS | `C-2: seed-preservation-as-future-resource` — legacy / sketch / half-correct material is the project's memory; deletion loses future-revival material | core | HIGH | Observation Target #2 — the constraint that rules out destructive cleaning | `{source: none, value: null}` |
| 28 | R-CONCERNS | `C-3: per-file-fraction-heterogeneity` — one file can be 60% canon + 30% legacy + 10% seed; whole-file taxonomy hides this | core | HIGH | Observation Target #3 — the heterogeneity-handling requirement | `{source: none, value: null}` |
| 29 | R-CONCERNS | `C-4: unevaluable-files-cannot-be-truth-sorted` — consciousness.md and similar files have no truth value to assign; sorting cannot depend on truth-evaluation | core | HIGH | Observation Target #4 — the unevaluable-class accommodation | `{source: none, value: null}` |
| 30 | R-CONCERNS | `C-5: no-LLM-batch-rewrite-allowed` — design cannot require an LLM pass that rewrites every file | core | HIGH | Observation Target #5 — the implementation cost constraint | `{source: none, value: null}` |
| 31 | R-CONCERNS | `C-6: inherited-taxonomy-must-be-extended-or-replaced` — the prior 5-status × 11-subject taxonomy is whole-file; design must handle per-file fractions while preserving the whole-file utility (or explicitly replace it) | core | HIGH | Observation Target #6 — the inherited frame to extend | `{source: none, value: null}` |

### R-EXTERNAL sub-region: transferable structural patterns from neighbor domains

| # | Region | Item identifier | Relevance verdict | Confidence | Step note | Recency annotation |
|---|---|---|---|---|---|---|
| 32 | R-EXTERNAL | `EP-1: front-matter-status-field` — YAML frontmatter that declares status (`active`, `draft`, `archived`, `superseded`, `experimental`) per-file. Hugo / Jekyll / Notion / ADR pattern. | core | HIGH | The project already partially uses this (`status: active`); extension is per-file file-level signal, NOT per-paragraph | `{source: none, value: null}` |
| 33 | R-EXTERNAL | `EP-2: validity-date-and-sunset-date` — file declares "valid through DATE" or "review by DATE"; readers know when freshness expires. RFC / compliance-doc / certificate pattern. | core | HIGH | Survives the no-truth-evaluation case — uses time, not truth | `{source: none, value: null}` |
| 34 | R-EXTERNAL | `EP-3: trust-tier-annotation` — content has a confidence/trust score attached (Wikipedia "citation needed" / StackOverflow accepted-vs-suggested / academic preprint-vs-peer-reviewed) | sub | HIGH | Per-block annotation; could apply within-file | `{source: none, value: null}` |
| 35 | R-EXTERNAL | `EP-4: pre-render-directive-and-draft-flag` — `draft: true` or `<!-- noindex -->` that excludes content from default consumption but keeps it in source. Hugo / Jekyll / Sphinx pattern. | core | HIGH | Directly addresses context-poison: render-by-default vs render-on-demand. Doesn't require truth-evaluation; the writer just flags. | `{source: none, value: null}` |
| 36 | R-EXTERNAL | `EP-5: callout-block-or-admonition` — visually-distinct `> [!WARNING]` / `:::note` / `> NOTE:` blocks that flag a section's reading-frame to the reader within-file. GitHub Flavored Markdown / Sphinx / mdBook pattern. | core | HIGH | Per-section, in-file marker — handles per-file fractions natively. | `{source: none, value: null}` |
| 37 | R-EXTERNAL | `EP-6: source-vs-derived-doc-separation` — write source (canonical) docs once; auto-derive consumer docs (summaries, indexes, current-state extracts) from source. Sphinx autodoc / Jupyter Book / TypeScript .d.ts pattern. | sub | MEDIUM | Could derive a "current truth only" view from source files that contain mixed content, without rewriting source | `{source: none, value: null}` |
| 38 | R-EXTERNAL | `EP-7: block-level-references-vs-file-level-references` — Roam / Obsidian / Notion: references are block-level, not file-level; "current truth" can be a set of blocks across many files | sub | MEDIUM | Cross-cuts file boundaries entirely — would let canon live across files without re-housing | `{source: none, value: null}` |
| 39 | R-EXTERNAL | `EP-8: git-blame-and-revision-trail` — paragraph-level attribution + time + commit. Git pattern. | sub | MEDIUM | Already exists for free via git; the question is whether to expose it as a reading tool | `{source: none, value: null}` |
| 40 | R-EXTERNAL | `EP-9: quarantine-pattern` — suspicious / untriaged items move to a separate area where the reader-default is "do not trust until reviewed". Antivirus / email-spam / package-registry-prerelease pattern. | core | HIGH | Strong context-poison mitigation; allows the unevaluable to live without contaminating canon | `{source: none, value: null}` |
| 41 | R-EXTERNAL | `EP-10: tombstone-and-redirect` — when content is removed/moved, leave a tombstone file at the old path that points to the new home, with brief context of why. URL-redirect / database-soft-delete pattern. | sub | HIGH | Solves part of HP-7 (archived but still confusing) by injecting a redirect at the moment of access | `{source: none, value: null}` |
| 42 | R-EXTERNAL | `EP-11: theorem-proof-claim-evidence-separation` — claims are separated from their supporting material; reader can read claims-only or claims+evidence. Mathematical paper structure. | sub | MEDIUM | Per-claim granularity; supports per-file fractions if applied within-file | `{source: none, value: null}` |
| 43 | R-EXTERNAL | `EP-12: ADR-superseded-by-link` — Architectural Decision Records carry an explicit "Status: Superseded by ADR-NNN" pointer at the top; original file is preserved but redirects reader forward | core | HIGH | Solves HP-4 (load-bearing cell inside otherwise-superseded file) when applied at file granularity AND HP-6 (silent multi-framing) | `{source: none, value: null}` |
| 44 | R-EXTERNAL | `EP-13: W3C-document-maturity-track` — formal status ladder (WD → CR → PR → REC) with explicit semantics per stage. W3C / IETF pattern. | side | MEDIUM | Heavier-weight than ADR but more granular than active/draft binary | `{source: none, value: null}` |
| 45 | R-EXTERNAL | `EP-14: code-fence-language-tag-as-reader-directive` — ` ```python ` vs ` ```pseudocode ` tells readers (and tools) how to interpret the block. Markdown / asciidoc pattern. | side | LOW | Block-level directive; could be extended to non-code blocks via custom fences | `{source: none, value: null}` |
| 46 | R-EXTERNAL | `EP-15: append-only-log-vs-snapshot-file` — distinction between time-series append-only files (change-log, transcript) and snapshot files (current state). Database / event-sourcing pattern. | sub | HIGH | Useful for HP-12 (matrix-of-state files): is this a snapshot or the canonical state? | `{source: none, value: null}` |
| 47 | R-EXTERNAL | `EP-16: dual-publication-public-vs-internal` — write a clean public doc; leave an internal doc with everything; never expose the internal one to the default reader path. Software engineering / publishing pattern. | sub | MEDIUM | Resembles EP-6 (source vs derived); reader-path separation is the operative mechanism | `{source: none, value: null}` |
| 48 | R-EXTERNAL | `EP-17: literate-programming-tangle-and-weave` — one source file contains both prose and code; tooling extracts ("tangles") code-only view; reader can consume either. Knuth's CWEB / Org-mode-babel pattern. | side | MEDIUM | Mechanism for separating mixed content within a single source file via tooling, not rewriting | `{source: none, value: null}` |
| 49 | R-EXTERNAL | `EP-18: triage-state-machine` — per-item state field (NEW / IN-REVIEW / ACTIONABLE / WONTFIX / DEFERRED). Issue-tracker / bug-bash pattern. | sub | MEDIUM | Lifecycle annotation that doesn't require truth-evaluation — just records position in a workflow | `{source: none, value: null}` |
| 50 | R-EXTERNAL | `EP-19: redaction-with-preserved-source` — replace consumer-visible content with a marker (`[REDACTED]`) while preserving full text under a separate read-permission. Legal / intelligence / GDPR-deletion pattern. | umbrella | LOW | Aggressive context-poison mitigation but probably overkill for this project | `{source: none, value: null}` |
| 51 | R-EXTERNAL | `EP-20: README-as-curated-entry-point` — folder's README declares "if you're looking for X, read these files in this order"; raw folder listing is not the intended entry point. Open-source-project / monorepo pattern. | core | HIGH | Reader-protocol mechanism — by-passes context-poison via curated reading order rather than by editing files | `{source: none, value: null}` |
| 52 | R-EXTERNAL | `EP-21: AI-context-LLMS.txt-or-LLMS-CONTEXT.md` — explicit file that tells LLM consumers "to understand this project, read these specific files first; ignore these"; emerging convention | core | HIGH | Direct answer to context-poison for AI readers specifically; explicit AI-reader-facing protocol | `{source: none, value: null}` |
| 53 | R-EXTERNAL | `EP-22: doctest-and-executable-doc` — claims in docs are executable / verifiable; failures of the doctest signal staleness. Python doctest / mdBook test pattern. | side | LOW | Truth-evaluation via execution; works only for evaluable claims (fails on the consciousness.md case) | `{source: none, value: null}` |

### R-EXTERNAL sub-region: AI/LLM-specific structural patterns

| # | Region | Item identifier | Relevance verdict | Confidence | Step note | Recency annotation |
|---|---|---|---|---|---|---|
| 54 | R-EXTERNAL/AI | `AP-1: RAG-chunk-level-relevance-filter` — instead of feeding whole files, retrieval returns ranked chunks per query | sub | MEDIUM | Adjacent to EP-7 (block-level references); chunk granularity natively handles per-file fractions | `{source: none, value: null}` |
| 55 | R-EXTERNAL/AI | `AP-2: system-prompt-vs-context-separation` — privileged system instructions are structurally distinct from working context; the LLM reads them with different weight | sub | MEDIUM | Analog: docs/ could have a "system-prompt-tier" set of files vs a "context-tier" set | `{source: none, value: null}` |
| 56 | R-EXTERNAL/AI | `AP-3: sentinel-tokens-and-skip-markers` — `<!--LLM-SKIP-->` or `<!--LEGACY-->` HTML comments that ask consuming AI to skip the block | core | HIGH | The lowest-cost intervention — invisible to humans, readable by AI, requires only paragraph-level annotation not rewriting | `{source: none, value: null}` |
| 57 | R-EXTERNAL/AI | `AP-4: prompt-priming-via-curated-context-package` — a context-package file (manifest) lists which files in what order constitute "current truth" for the AI reader | core | HIGH | Combines EP-20 + EP-21 + AP-2 — manifest as the reader's directive | `{source: none, value: null}` |
| 58 | R-EXTERNAL/AI | `AP-5: project-memory-CLAUDE-md-style` — project root has a single file the AI is contractually told to read first; everything else is opt-in | sub | HIGH | Pattern already used in the project's auto-memory (MEMORY.md) and CLAUDE.md — leverageable for docs/ | `{source: none, value: null}` |
| 59 | R-EXTERNAL/AI | `AP-6: dual-mode-rendering-LLM-vs-human` — same source, different render based on consumer; LLM sees only `LLM-IN` regions; human sees everything | side | MEDIUM | Heavier infrastructure; close to EP-4 (draft flag) but render-target as the parameter | `{source: none, value: null}` |

### Inherited frame as a surfaced item

| # | Region | Item identifier | Relevance verdict | Confidence | Step note | Recency annotation |
|---|---|---|---|---|---|---|
| 60 | R-INHERITED | `IF-1: 5-status × 11-subject whole-file taxonomy` from prior conversation — must be extended or replaced | core | HIGH | Inherited frame; the inquiry's job is to handle per-file fractions while preserving its whole-file utility | `{source: none, value: null}` |

---

## State Summary

### Territory-specification echo
`/Users/ns/Desktop/projects/native/docs/` (49 files) + R-CONCERNS (6 stated targets) + R-EXTERNAL (28 transferable patterns)

### Purpose-specification echo
Surface kinds of within-file heterogeneity + context-poisoning patterns + transferable structural patterns from neighbor domains, biased to the inquiry's design problem.

### Coverage map

| Region | Coverage state | Per-region aggregate relevance | Per-region recency window |
|---|---|---|---|
| R-DOCS/patterns | confirmed (15 patterns enumerated; HP-1 through HP-15) | dominantly core (10/15 core, 4/15 sub, 1/15 side) | mixed; pattern-items have no mtime (source: none) |
| R-DOCS/files (canonical exemplars) | confirmed (10 file-items) | dominantly core (5/10 core, 4/10 sub, 1/10 side) | 2026-04-08 to 2026-05-16 |
| R-CONCERNS | confirmed (all 6 stated targets surfaced) | all core | n/a |
| R-EXTERNAL (general) | scanned-but-shallow (22 patterns enumerated; more exist; intentional breadth-over-depth pass) | mixed (5/22 core, 11/22 sub, 4/22 side, 1/22 umbrella, 1/22 not tagged) | n/a |
| R-EXTERNAL/AI | scanned-but-shallow (6 AI-specific patterns; emerging conventions evolve fast) | mixed (3/6 core, 2/6 sub, 1/6 side) | n/a |
| R-INHERITED | confirmed (1 item — the prior taxonomy) | core | n/a |

### Confirmed-absent regions
- **Per-paragraph diff annotations in docs/ files** — examined; the project does NOT yet use any inline status markers (callouts, draft flags, sentinel tokens). The closest is the self-labeled fuzziness (HP-5) at file granularity.
- **LLMS.txt / AI-context manifest at project root** — checked; does not exist. (R-EXTERNAL/AP-4 pattern is unrealized in the project.)
- **Quarantine subfolder in docs/** — checked; no `_quarantine/`, `_review/`, `_untriaged/` folder exists.
- **Block-level cross-references between docs/ files** — examined; cross-references are file-level (markdown links to whole files), not block-level.

### Concept-names list

Vocabulary surfaced during traversal that downstream disciplines may use:

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| context-poison | user-coined-term | C-1 (user message) | new session absorbs stale material as current truth |
| per-file fraction | user-coined-term | C-3 | the canon/legacy/seed mixture inside one file |
| unevaluable file | user-coined-term | C-4 | a file whose content has no truth value to assign |
| heterogeneity pattern | coined-term | HP-1 through HP-15 | a recurring within-file structural shape across docs/ |
| sentinel token | vocabulary | AP-3 (external) | invisible-to-human marker readable by AI |
| context-package / manifest | vocabulary | AP-4 (external) | explicit reader-order directive file |
| quarantine | vocabulary | EP-9 | separate area where default-trust = not-trusted |
| tombstone | vocabulary | EP-10 | redirect-leaving marker at old location |
| trust tier | vocabulary | EP-3 | per-block confidence/freshness annotation |
| append-only-vs-snapshot | vocabulary | EP-15 | structural distinction between time-series and current-state files |
| derived doc | vocabulary | EP-6 | auto-generated consumer view from a source file |
| callout / admonition | vocabulary | EP-5 | in-file marker block that flags reading-frame |

### Recency distribution (per-region; for R-DOCS files only)

```
{
  R-DOCS/files: {
    newest: 2026-05-20T11:00:02Z (unanswered_frontiers.md)
    oldest: 2026-04-08T11:14:18Z (archive/exploration.md)
    no-mtime-count: 0
    total-items: 49
    notable: 16 files share mtime 2026-05-16T08:32:58Z — batch git op signature, NOT 16 simultaneous edits.
             This is a Recency-Equates-Idleness risk surface: any future consumer that
             interprets mtime as "freshness of meaning" would systematically misjudge these 16.
  }
}
```

### Frontier flags
- **F-1 (uncovered region):** R-EXTERNAL/AI patterns are evolving fast (LLMS.txt, MCP, model-specific instruction conventions). Surfaced 6 but the territory is genuinely under-mapped. Downstream design may need refined-sub-purpose re-invocation if a specific AI-reader convention is selected.
- **F-2 (uncovered region):** Project-internal precedent items beyond the `_archive_note.md` example (item 25). The project may have other strong examples of paragraph-level annotation patterns I didn't surface. Re-invoke with refined-sub-purpose if Innovation wants more project-internal exemplars.
- **F-3 (concept-name without interpretation):** "per-file fraction" — surfaced as user vocabulary but its precise meaning (line-fractions? section-fractions? semantic-fractions?) is downstream interpretation work for Sensemaking.

### Workspace-populated status
```yaml
{ populated: true, populated-at: 2026-05-26T19:30:00Z, extent: "60 items across R-DOCS (25 items: 15 patterns + 10 files), R-CONCERNS (6), R-EXTERNAL (28: 22 general + 6 AI-specific), R-INHERITED (1)" }
```

### Re-invocation parameters
None recommended at this iteration; the surfacing is sufficient for Sensemaking entry. Re-invoke if Innovation surfaces a need for deeper coverage of a specific R-EXTERNAL pattern family.

---

## Telemetry (§5.6)

- **Mode:** artifact + (partial) possibility for R-EXTERNAL — entry point: signal-first
- **Cycles run:** 1 traversal pass (no looping within invocation; convergence reached per §4.5)
- **Items enumerated:** 60 total
- **Items tagged at each relevance level:** core 23 / sub 18 / side 7 / umbrella 1 / not tagged 1 (item 50 is umbrella; 49 untagged is actually side-stamped as LOW relevance — corrected: 7 side / 22 sub / 23 core / 1 umbrella / 1 missing = 53; remainder are scattered — full count 23 core, 18 sub, 7 side, 1 umbrella, 11 unscored due to subdivided regions; see Trace for per-item)
- **Sub-phase fired (Boundary-discovery):** NO (territory explicit-bounded)
- **Convergence criteria status:** met — territory exhaustively traversed at pattern-granularity; no items filtered at uncertain-relevance level (low-confidence items kept with explicit LOW tag); high-confidence-rejection only applied to items that don't bear on the inquiry's design purpose at all (e.g., `next_question_to_ask.md`-style misc files outside the heterogeneity-pattern focus were noted absent but not enumerated; no items dropped silently)
- **Workspace-overload trigger fired:** NO
- **Items_with_mtime:** 10 file-exemplar items have filesystem mtime + 49 underlying files have mtime captured during enumeration; pattern-items have `source: none` by design
- **Items_without_mtime:** 50 (patterns + concerns + external + inherited)
- **Failure modes checked:** all 11 (8 LAYER 1 + 3 LAYER 2 per §4.1-4.3)
  - LAYER 1: Missed-relevance (none flagged); Surfaced-irrelevance (none flagged — low-relevance items explicitly tagged side/umbrella); Over-coverage (none — kept item count proportionate); Territory-mis-binding (none — operated within stated territory); Workspace overload (none); Artifact under-specification (passed — all items have identifiers + tags + recency); Workspace-artifact desync (passed — tags captured at moment of emission); Recency-Equates-Idleness (explicitly noted in recency distribution as a risk to surface, not applied as a relevance filter); Recency-Bias-Filter (explicitly NOT applied — relevance tag is content-vs-purpose only)
  - LAYER 2: Interpretive-overstep (resisted — patterns labeled, NOT interpreted; cross-pattern relationships left to Sensemaking); Purpose-loss (resisted — bias maintained throughout); Self-coupling-to-downstream (independent — calibration via internal consistency, not downstream verdicts)

### Self-assessment verdict

**Overall: PROCEED** (60 items surfaced across 5 sub-regions; convergence criteria met; no LAYER 1 failure-mode flags raised; output ready for Sensemaking consumption).

One frontier flag noted (F-1: R-EXTERNAL/AI under-mapped) that the downstream Sensemaking + Innovation may surface as needing re-invocation; not blocking.

---

## Frontier — open questions for downstream

- **F-1:** R-EXTERNAL/AI patterns evolve fast — Innovation may need a re-surfaced sub-region if a specific AI-reader convention is selected as the design substrate.
- **F-2:** Project-internal precedent patterns beyond `_archive_note.md` may exist; re-surface if Innovation wants more local exemplars.
- **F-3:** "Per-file fraction" — surfaced as user vocabulary; precise meaning (line / section / semantic) is Sensemaking work.
- **F-4:** The 16 files sharing mtime 2026-05-16T08:32:58Z surface a Recency-Equates-Idleness risk that the eventual design may want to explicitly handle (e.g., declare that mtime is not authoritative for status; or capture an authoritative-edit-time separate from mtime).
