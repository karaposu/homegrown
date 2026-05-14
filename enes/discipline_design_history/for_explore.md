# /explore — Design History

This file holds the **institutional memory** for the `/explore` discipline — the provenance, calibration-state notes, deferred additions, and research-frontier items that informed the discipline's design but are not needed at runtime.

The **runtime specification** lives at `homegrown/explore/references/explore.md`. The runtime spec is loaded by `homegrown/explore/SKILL.md` at Step 0; this design-history file is NOT loaded at runtime.

Material here is preserved for future spec-authoring and for readers who want to understand why the discipline is shaped the way it is. Removing items from the runtime spec while keeping them here preserves the option to consult them later without burdening every `/explore` invocation with their context cost.

---

## Sources

The `/explore` reference is synthesized from four findings in the project's inquiry log:

- `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding_iter1.md` — the original from-scratch framing (5-section structure, NOT-list, components, modes)
- `devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md` — end-goal-aware additions (resolution-level field, staging telemetry, staging-boundary regression failure mode, Merge Contract, /staged-explore runner)
- `devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/finding.md` — per-item content depth (D0–D4 levels, depth-level field, labeling-vs-meaning heuristic, labeling/anchor terminology, NOT-list clarification)
- `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md` — /explore vs /navigation boundary (specialization pattern; /navigation is a specialization of /explore over the next-move-space)

Additional inquiry: `devdocs/inquiries/2026-05-14_17-30__explore_what_does_it_actually_need__bloat_reframe/finding.md` — the bloat-reframe that produced the current lean runtime spec by relocating institutional-memory content here.

---

## Calibration-state notes

Several items in the discipline reflect the current best-known answer with explicit acknowledgment that empirical refinement is expected.

- *The default depth-by-resolution coupling* — operational reasoning from LLM context-budget observations; not empirically validated. *Refinement trigger:* context-budget observations across staged-explore runs reveal consistent mismatch; refine.

- *The labeling-vs-meaning heuristic's edge cases* — domain jargon and contested terminology treated as labeling-at-low-confidence. *Refinement trigger:* 3+ observed runs report ambiguity at edge cases; refine via empirical examples.

- *The staging-boundary regression threshold* — `< 2 items` was a starting default for a speculative failure mode (formerly listed as failure mode #10 in the runtime spec; removed in the 2026-05-14 bloat-reframe because the mode is speculative and detection is runner-level, not discipline-level). *Refinement trigger:* observed runs reveal the threshold is too lax or too strict AND a runner exists that can detect it.

- *D4 (relevance verdict)* — optional in the runtime spec; full specification forward-tied to a planned follow-up inquiry on active verification-probing.

---

## Deferred additions (revival-triggered)

These items are structurally sound but presuppose a project state not yet reached. Each has a specific revival trigger.

- **Typed Input Contract** (excluding the already-actionable `expected` and `depth-level` fields). A typed `_branch.md` schema (territory specification, purpose, prior map, depth target). *Revival:* project introduces a typed `_branch.md` schema OR meta-loop introduces a cross-invocation map handoff requiring typed exchange.

- **Typed Existence-Claim Schema.** Typed record `{territory, region, item, confidence, claim_type ∈ {present, absent, inferred}, optional relevance, optional adjacent_items}` alongside markdown rendering. *Revival:* automation consumer downstream OR project adopts machine-readable inquiry artifacts.

- **Drift-as-Escalation.** Convert open→closed drift (failure mode in the runtime spec) from failure-mode suppression to a Frontier-output escalation to sense-making. *Revival:* 3+ runs observe drift OR sense-making is wired to consume escalations from /explore.

- **Legend output section.** Explicit semantics of confidence levels and annotation types as a Legend section. *Revival:* downstream consumers report confusion about annotation semantics in 2+ runs.

- **Controlled Vocabulary for claim types.** Typed categories (present / absent / inferred / hypothetical) replacing prose claim descriptions. *Revival:* claim-type ambiguity surfaces as a frontier signal in 2+ runs.

- **Discovery-vs-Revisit telemetry.** Track how often re-invocation finds new items vs re-confirms known ones. *Revival:* cross-invocation re-explore becomes common.

- **Implementation-level Merge Contract.** Code-supported merging instead of manual. *Revival:* meta-loop runs sibling inquiries with overlapping territories OR users report manual merging is unsustainable.

- **Frontmatter mode-declaration.** Add `cognitive-commitment: open` to the SKILL.md frontmatter. *Revival:* project introduces a frontmatter-mode convention OR autonomous mode-selection ships at Level 3+.

- **Paired-discipline cross-reference with /comprehend.** Explicit pairing as open-mode / closed-mode counterparts. *Revival:* /comprehend is being rewritten OR autonomous mode-selection ships requiring discipline pairing.

- **Skill-ification of `/staged-explore`.** Convert the doc-only v1 runner to an invokable skill. *Revival:* manual orchestration becomes unsustainable OR autonomous mode-selection ships at Level 3+.

- **Step 0 declarations** (removed from the runtime spec in the 2026-05-14 bloat-reframe). A 5-field declarations table (cognitive-commitment-mode; territory-type-mode; entry-point; expected; depth-level). *Revival:* autonomous orchestration ships AND requires a typed input contract AND empirical evidence shows that explicit declaration reduces a real failure rate; without those conditions, the declarations were ritual overhead that didn't fire at runtime.

- **Cross-Inquiry Merge Contract** (removed from the runtime spec in the 2026-05-14 bloat-reframe). The contract for merging multiple /explore output maps. Manual merging remains possible by reading two outputs and combining them; the spec-level merge contract is deferred until an automated implementation consumer exists. *Revival:* automated merge consumer exists OR meta-loop sibling-inquiry merging becomes routine.

- **Staged execution subsection** (removed from the runtime spec in the 2026-05-14 bloat-reframe). The `/staged-explore` runner orchestrates `/explore` at progressively finer resolutions. The runner's spec lives in its own file (`homegrown/runners/staged_explore.md` when materialized); the runtime `/explore` spec no longer cross-references it. *Revival:* /explore's runtime behavior changes in a way that affects /staged-explore.

- **Resolution progression subsection** (removed from the runtime spec in the 2026-05-14 bloat-reframe). Duplicated the canonical-cycle content with a different framing. *Revival:* if the two framings turn out to be meaningfully different and the duplication was load-bearing; otherwise stays removed.

- **Specialization pattern + /navigation boundary** (removed from the runtime spec in the 2026-05-14 bloat-reframe). The pattern described how `/navigation` transcludes `/explore`'s mechanics at spec-time. The pattern is meta-architectural; it does not fire at /explore runtime. The /navigation spec describes its own specialization independently. *Revival:* if a future specialization needs cross-reference at runtime, OR if the pattern becomes load-bearing for spec-time decisions about new disciplines.

- **Neighbor disciplines table** (removed from the runtime spec in the 2026-05-14 bloat-reframe). A 5-row table mapping disciplines to their spec paths and to what /explore does NOT do. The NOT-list portion duplicated §1.3 NOT-list; the spec-paths portion was project-coupling. *Revival:* if cross-discipline runtime cross-references become load-bearing; until then the §1.3 NOT-list is sufficient.

- **Runner taxonomy table** (removed from the runtime spec in the 2026-05-14 bloat-reframe). Lists the project's runners. /explore does not consult runners at runtime; the table was project-orientation overhead. *Revival:* if /explore's runtime behavior changes based on which runner invoked it.

- **Universal anatomy subsection** (removed from the runtime spec in the 2026-05-14 bloat-reframe). Cross-reference to `thinking_disciplines/anatomy_of_disciplines.md`. The anatomy template is for spec-authoring; it does not fire at /explore runtime. *Revival:* if the anatomy template changes in a way that affects runtime behavior.

- **Summary table** (removed from the runtime spec in the 2026-05-14 bloat-reframe). A 16-row recap of content present elsewhere in the spec. Pure duplication. *Revival:* none anticipated; if a future reader needs a one-page summary, the introduction of §1 can be expanded.

---

## Research-frontier items

These items are open research directions for the discipline; they exceed per-inquiry scope and do not block the current spec.

- **Persistent-state /explore.** `/explore` as a continuous state-machine running across the inquiry's lifetime, updating a project-wide map as new items surface. Incompatible with the current `/MVL+` discrete-invocation contract; depends on loop-architecture evolution (multi-head loops, merging loops).

- **`/parallel-loops` runner.** A fifth runner for multi-head loops with cross-comparison. Depends on the project starting multi-head loop capability.

- **Full restructure** of discipline reference files around cognitive operations rather than the spec-anatomy structure. Long-term direction if the project commits to systemic restructuring.

- **Cognitive-operation taxonomy across all 7 disciplines.** Each discipline characterized by open/closed mode and generative/analytic. Deserves its own inquiry.

- **Active verification-probing in /explore.** Should /explore actively probe candidates to confirm irrelevance (not just passively surface positives)? D4 (relevance verdict) is forward-tied to this future inquiry.

- **Generalizable from-scratch BLOAT audit.** The 2026-05-14 bloat-reframe inquiry (`devdocs/inquiries/2026-05-14_17-30__explore_what_does_it_actually_need__bloat_reframe/`) developed a from-scratch necessity-test frame as a generalizable BLOAT-audit operation. The same audit applies in principle to `/innovate`, `/sense-making`, `/comprehend`, `/decompose`, `/navigation`, and any future discipline reference file. *Revival:* when another discipline shows similar bloat signals, OR proactively as a project-wide spec-hygiene pass.
