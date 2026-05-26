---
status: active
continues-from: devdocs/inquiries/2026-05-14_17-00__ab_test_rerun_under_old_explore_spec/finding.md
related:
  - devdocs/inquiries/2026-05-14_16-00__current_explore_rewrite_caused_mvl_run_problems/finding.md
  - devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md
  - devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/finding.md
  - devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md
  - devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md
  - devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md
  - devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md
verdict: Wider bloat than chain E2; REPAIR pattern is RELOCATE-NOT-DELETE
---

# Finding: /explore — What Does It Actually Need? (Bloat Reframe)

## Question

This is the tenth iteration in a chain of inquiries that started with a user observation about recent problematic MVL+ runs and progressively diagnosed sources of bloat in the project's discipline specification files. The discipline at the center of this iteration is `/explore` (Structural Exploration), whose runtime specification lives at `homegrown/explore/references/explore.md` — about 18 pages of markdown that the assistant loads at Step 0 of every `/explore` invocation.

The prior iteration (`devdocs/inquiries/2026-05-14_17-00__ab_test_rerun_under_old_explore_spec/finding.md`) concluded with a calibrated empirical finding (the OLD spec produces materially lighter output than the CURRENT spec) and recommended a selective revert (called "E2" in the chain) targeting three project-coupling elements. The user then pushed back with a sharper question:

> "REPAIR the Neighbor-disciplines table to drop project paths (A2) — why Neighbor-disciplines is needed anyway? why would explore need to know this? I think you are not understanding the full bloat for some reason."

This iteration reframes the question. Rather than asking "which catalogued diff items between the OLD and CURRENT specs should be reverted?", it asks the structurally different question: **what does `/explore` actually need in its runtime specification to do its job, regardless of diff history?** Element by element, does each present block fire at `/explore`'s runtime execution, or is it bloat that doesn't?

The goal is a per-element verdict supporting one of three concrete outcomes: (a) a wider repair than the chain's three-element E2; (b) confirmation that the specific Neighbor-disciplines table the user asked about is entirely unneeded (not just its project-paths column); or (c) a direction reversal toward the older specification as the editing base, with override-by-preference made explicit.

## Finding Summary

- **The chain was under-counting.** A from-scratch necessity frame — applied element-by-element to the current `/explore` specification — identifies roughly 12 to 16 bloat blocks, compared with the chain's prior recommendation that targeted 3. The user's "full bloat" signal was correct on structural grounds.

- **The Neighbor-disciplines table in §6.2 is bloat in full**, not bloat only in its project-paths column. The table's "What /explore does NOT do" column duplicates the §1.3 NOT-list with different framing, and its existence asserts /explore's position relative to neighbor disciplines — which /explore does not consult at runtime. The whole table can be removed; the §1.3 NOT-list (without paths) carries the scope-anchoring value alone.

- **The repair pattern is RELOCATE-NOT-DELETE.** Institutional-memory content (the Sources subblock in the Loading note, §6.4 Source findings, and all of §7 Calibration-state notes + Deferred additions + Research-frontier items) moves to a new file at `enes/discipline_design_history/for_explore.md`. Pure protocol-overhead content (the Step 0 declarations table, the Neighbor-disciplines table, the Staged-execution subsection, the Resolution-progression subsection that duplicates the canonical-cycle content, the Cross-Inquiry Merge Contract subsection, the Runner taxonomy table, the Universal anatomy subsection, the Summary table at the end of the spec, the navigation-specific paragraph in §1.5, the project-paths column in §1.3, the Anatomy-template reference in the Loading note, and the speculative staging-boundary-regression failure mode) is deleted in place. The lean runtime spec keeps the actual operation.

- **One repair pattern addresses both form bloat and substance bloat.** Form bloat (tables, declarations, enumerations) and substance bloat (project-coupling, provenance) both derive primarily from the spec adopting a template at `thinking_disciplines/anatomy_of_disciplines.md` that demands certain sections, with a smaller fraction from local in-spec additions. Writing the spec for the operation rather than for the template, and keeping institutional memory in a separate artifact, addresses the underlying force.

- **The evidence shape is structural reasoning, not empirical substance measurement.** Each bloat verdict rests on the test "does this element fire at /explore's runtime?" — not on a measurement that removing the element improves cognitive operation quality. This is stronger than form-observation (visible spec lightness) but weaker than empirical substance-superiority (would require multi-run study across topics). The previous iteration's calibration ladder placed form-observation at Level 1 and substance-superiority at Level 2; this iteration's evidence sits at Level 1.5.

- **The cost-asymmetry argument is the structural foundation.** For a runtime-read specification, false-keep (leaving bloat in the spec) costs ongoing context per invocation, while false-remove (deleting something useful) costs at most one re-add. The prior chain's default ("no per-element evidence of harm → keep") was over-conservative for this asymmetric context. The from-scratch frame's default ("no evidence of necessity → remove") is appropriate here.

- **The cost of running the full pipeline at iteration #10 was real.** Sensemaking initially recommended truncating at sensemaking and direct-editing from there. The user kept the pipeline running. The Critique step then caught several genuine gaps in the Innovation step (specifically, the EXECUTE INSTRUCTIONS section at the bottom of the spec which contains active instructions referencing the deleted Step 0 declarations subsection, and five stale section-number references that the renumbering pass would have missed). Critique's gap-catching value would have been lost under a truncate-and-direct-edit alternative.

- **Pattern-level research frontier.** The from-scratch necessity frame is a generalizable bloat-audit operation. It plausibly applies to the project's other discipline specifications — `/innovate`, `/sense-making`, `/comprehend`, `/decompose`, `/navigation` — which are likely to carry similar template-inherited bloat. Iteration #7 (`devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/finding.md`) already applied a related pattern to `/innovate`. A project-wide spec-hygiene pass using the same audit is named here as a research frontier, not pursued in this iteration.

## Finding

### Why this inquiry exists, briefly

The chain of inquiries leading here had progressively diagnosed and repaired sources of project-coupling in discipline specifications. Each iteration found a piece of the bloat puzzle in a different discipline or at a different scope. By the ninth iteration, the chain had calibrated its conclusion to "the CURRENT `/explore` spec produces lighter output than the OLD one as a contributing factor at the form level" and recommended a small selective revert targeting three project-coupling elements.

The user's pushback identified the chain's limitation. The chain's frame was the diff between OLD and CURRENT — it could only adjudicate "revert which changes." It could not see bloat in elements that were unchanged (i.e., present in both OLD and CURRENT), nor in elements where the chain had marked "no evidence of harm → keep" without examining whether they were structurally necessary. The user's "you are not understanding the full bloat for some reason" pointed at exactly this blind spot.

This iteration's reframe is structural: walk the current `/explore` specification element by element under a from-scratch test. For each block, ask: "does this fire when `/explore` actually executes?" Mark each block NECESSARY, HELPFUL, or BLOAT based on that test alone, regardless of whether it existed in the OLD spec, was added in the CURRENT rewrite, or has prior chain calibration attached.

### What the from-scratch frame found

The current `/explore` specification has eight numbered sections (§1 through §8) plus an EXECUTE INSTRUCTIONS section at the bottom. Roughly thirty distinct subsections, tables, and content blocks. Applying the from-scratch test classified each as one of three categories.

**Necessary content** (load-bearing for `/explore`'s runtime cognitive operation): the verb-meaning paragraph that defines what `/explore` is; the NOT-list of what `/explore` deliberately excludes; the vocabulary distinction between "labeling" and "anchor"; the six core components (scan, signal detection, probe, resolution management, frontier tracking, confidence mapping); the annotation layers that ride on surfaced items; the D0–D4 per-item depth vocabulary; the two operational modes (artifact / possibility); the boundary-discovery sub-phase; the seven-step canonical cycle; the idempotency commitment; the type-aware probing rule; the failure modes list; the convergence criteria; the labeling-vs-meaning boundary heuristic; the self-assessment output; the Transform / Progression / Telemetry / Frontier output schema.

**Helpful but trimmable content**: some surrounding tables and tabular framings could be inline prose with no loss of operation-coverage. The exploration noted these but treated them as lower-priority than the clear-bloat items.

**Bloat content** (does not fire at runtime): roughly twelve to sixteen specific blocks. These fall into three sub-categories.

*Institutional memory embedded in the runtime spec.* The Sources subblock in the Loading note enumerates four project findings that informed the spec's design. The Source findings list in §6.4 enumerates the same four findings again. The Calibration-state notes, Deferred additions, and Research-frontier items in §7 occupy roughly three pages with design history. These have real value — but for spec-authoring and project-history, not for execution. Every `/explore` invocation pays the context cost of reading them without ever consulting them.

*Protocol-overhead enumerations.* The Step 0 declarations table in §3.1 has five fields, three of which are constants (cognitive-commitment-mode is always "open") or trivially inferable from context (territory-type-mode, entry-point). The Summary table in §8 is a sixteen-row recap of content already present elsewhere in the spec. The Resolution-progression subsection in §3.7 lists a five-step progression that duplicates the canonical-cycle content in §3.4. The Staged-execution subsection in §3.6 explains a separate runner's behavior. The Cross-Inquiry Merge Contract in §5.5 specifies a deferred-implementation contract for merging output maps.

*Project-coupling references.* The Neighbor-disciplines table in §6.2 cross-references five other discipline specs by file path. The Runner-taxonomy table in §6.1 lists the project's runners. The Universal-anatomy subsection in §6.3 cross-references the spec-authoring template. The navigation-specific paragraph in §1.5 ties `/explore` to a specific other discipline (`/navigation`). The "Belongs to" column in the §1.3 NOT-list lists project-internal paths for each excluded operation. The Anatomy-template reference in the Loading note points at the same spec-authoring template. None of these is consulted by `/explore` during execution.

### Why the user's specific probe — Neighbor-disciplines table — is BLOAT in full

The user asked: "why Neighbor-disciplines is needed anyway? why would explore need to know this?"

The Neighbor-disciplines table at §6.2 has three columns: Discipline, Spec path, and What /explore does NOT do. Walking through each column:

The "What /explore does NOT do" column duplicates the §1.3 NOT-list. The §1.3 NOT-list lists five conceptual exclusions: meaning, mechanism, partition, novelty, route-selection. The §6.2 table lists the same five exclusions, just reframed from each neighbor's perspective rather than from `/explore`'s. The information is identical.

The "Spec path" column lists project-internal paths (`homegrown/sense-making/references/sensemaking.md`, and so on). These paths are not consulted by `/explore` at runtime; they exist to point a human reader at the neighbor disciplines' specs. Pure project-coupling.

The "Discipline" column itself, combined with the framing "Neighbor disciplines (NOT-list anchors)", asserts that `/explore` has a specific position in a multi-discipline project — a position relative to specific other named disciplines. That assertion is meta-architectural; `/explore` doesn't consult it during execution either.

Removing only the project-paths column (the chain's prior E2 recommendation) preserves the duplication of the §1.3 NOT-list and preserves the framing-level coupling. The from-scratch frame says: remove the whole table. The §1.3 NOT-list alone, with its five conceptual exclusions and no project paths, carries the scope-anchoring value that `/explore` actually needs.

### The repair shape — RELOCATE-NOT-DELETE

Two operations on disk capture the repair.

**Create** a new file at `enes/discipline_design_history/for_explore.md`. This file holds the institutional-memory content that has spec-authoring value but not runtime value: the original Sources subblock (preserved verbatim from the Loading note); the Calibration-state notes; the Deferred additions with their revival triggers; the Research-frontier items; the Source findings list; and new entries documenting items just removed from the runtime spec (each with a revival trigger naming the conditions under which the item should be re-added). The file's header makes clear that this is design history and that the runtime spec is at `homegrown/explore/references/explore.md` — readers reach for the design-history file only when they want to understand why the spec is shaped the way it is.

**Edit** `homegrown/explore/references/explore.md` to delete bloat content in place. The Loading note keeps the load-bearing "this file is loaded by `homegrown/explore/SKILL.md` at Step 0" sentence and gains a one-line cross-reference to the new design-history file at `enes/discipline_design_history/for_explore.md`. The body deletes the bloat blocks enumerated above. Within kept sections, three surgical edits: the §1.3 NOT-list drops its "Belongs to" project-paths column; the §2.3 D0–D4 vocabulary drops its Default-coupling table; the §4.1 failure-modes list removes the speculative staging-boundary-regression mode (preserved in the design-history file with its revival trigger).

After the edits, the runtime spec runs from approximately 18 pages to approximately 7–9 pages. The reduction is concentrated in protocol metadata, project-coupling references, and duplicate content; the core operational content (definition, NOT-list, components, cycle, failure modes, output) remains intact.

### What the critique step caught

The pipeline's Critique step (the fifth and final discipline) ran against the assembled repair specification and surfaced five completion gaps that the Innovation step had missed. These gaps are part of the repair and must be applied alongside the main edits.

**The EXECUTE INSTRUCTIONS section at the bottom of the spec** (lines 491–518 in the current file, under the rule `---- NOW SOLID INSTRUCTIONS START ----`) contains active instructions like "Declare the Step 0 fields (§3.1): `cognitive-commitment-mode: open`; ..." After the §3.1 deletion, this instruction references a section that no longer exists. The instruction itself fires when `/explore` executes — leaving it unedited produces a self-contradictory spec. The fix: rewrite the EXECUTE INSTRUCTIONS to remove the §3.1 reference, simplify the field-declaration instruction, and update cross-references for renumbered sections.

**The §5.3 staging-aware-telemetry subsection** is orphaned by the §3.6 deletion. It currently presupposes that the `/staged-explore` runner exists and is in scope. Under the from-scratch frame consistent with the rest of the repair, this subsection should be deleted; runners that need staging-aware telemetry can read what they need from `/explore`'s general output without a discipline-spec contract.

**§4.3 line 271** has a parenthetical referencing `homegrown/runners/staged_explore.md`. Project-coupling that survives the §3.6 deletion. The parenthetical should be removed.

**The "Coarse scan in layered territories" rule**, relocated by Innovation from the deleted §3.7 into §3.4 canonical-cycle, uses vocabulary ("Coarse scan") defined in its now-deleted origin section. The §3.4 canonical-cycle uses "Scan — breadth-first pass" instead. The rule should be rephrased to match the new location's vocabulary: "Surround-layer inclusion at first scan. When the territory has an identifiable contextual or structural surround layer, the first breadth-first scan must include items from that surround layer before going deep on inquiry-specific objects."

**Five stale section-number references** during the renumbering pass: §2.3 line 109 references `(see §3.1)` for the deleted Step 0 declarations; §2.3 line 131 references `(see §7)` for the deleted §7; §4.1 mode 2 references `§3.8` which renumbers to §3.5; §4.1 mode 6 references `§3.2` which renumbers to §3.1; §4.1 mode 8 references `(§3.3) fires` which renumbers to §3.2.

## Next Actions

### MUST

The repair is concretely specified and ready to apply. The implementing agent (the user, or an assistant invoked specifically for this) can apply the edits in this order:

- **What:** Create the new file `enes/discipline_design_history/for_explore.md` with the institutional-memory content. The full file content is specified in this inquiry's `docarchive/innovation.md` under "P1 — Full content for `enes/discipline_design_history/for_explore.md`."
  - **Who:** the user or an assistant.
  - **Gate:** when the user is ready to apply the repair (no blocker; reversible via git).
  - **Why:** destination for institutional memory before its removal from the runtime spec.

- **What:** Edit `homegrown/explore/references/explore.md` to apply the Loading-note edit, the body-block deletions (§1.5, §3.1, §3.6, §3.7, §5.5, §6 entirely, §7 entirely, §8 entirely), and the surgical edits (§1.3 column drop, §2.3 Default-coupling drop, §4.1 mode-#10 removal). All `old_string`/`new_string` pairs are specified in this inquiry's `docarchive/innovation.md` under "P2," "P3," and "P4." Use content-addressed Edit operations; do not rely on line numbers.
  - **Who:** the user or an assistant.
  - **Gate:** after the new design-history file at `enes/discipline_design_history/for_explore.md` exists (so the cross-reference in the Loading note resolves).
  - **Why:** removes the bloat from the runtime spec while preserving institutional value via the relocate pattern.

- **What:** Apply the five completion edits the Critique step identified: rewrite the EXECUTE INSTRUCTIONS section to remove §3.1 references and simplify the field-declaration instruction; delete the §5.3 staging-aware-telemetry subsection; delete the §4.3 line 271 parenthetical; rephrase the relocated "Coarse scan in layered territories" rule to match §3.4's vocabulary; fix the five stale section-number references during the renumbering pass. Concrete details are in this inquiry's `docarchive/critique.md` under "Phase 3 — Per-Piece Verdicts → P3 — Spec body bloat-block deletions → Verdict: REFINE."
  - **Who:** the user or an assistant.
  - **Gate:** alongside the main body edits in the prior step (these completions ARE part of P3, not a separate phase).
  - **Why:** prevents a self-contradictory spec (the EXECUTE INSTRUCTIONS would otherwise reference a deleted section) and prevents stale cross-references throughout the spec.

- **What:** Renumber subsections within each section to consecutive numbering after deletions. §1.6 → §1.5; §3.2 → §3.1, §3.3 → §3.2, §3.4 → §3.3, §3.5 → §3.4, §3.8 → §3.5. Update internal cross-references to use the new numbers.
  - **Who:** the user or an assistant.
  - **Gate:** after the deletion edits.
  - **Why:** cosmetic consistency; avoids gaps in subsection numbering that confuse future readers.

### COULD

- **What:** Use the A/B-test inquiry protocol described in `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md` to test the lean runtime spec reversibly on a future real inquiry before committing to it long-term.
  - **Who:** the user.
  - **Gate:** condition-bound — if the user wants empirical confirmation that the lean spec produces equivalent-or-better cognitive operation. Not blocking the repair itself.
  - **Why:** upgrades the chain's calibration from inferred ("structurally, this should preserve operation") toward empirical ("we measured operation on identical inputs under both spec versions and observed equivalent or better results"). The infrastructure for this test was designed in the `2026-05-14_16-41` inquiry.

### DEFERRED

- **What:** Apply the from-scratch necessity frame as a bloat audit to the project's other discipline specifications — `/innovate`, `/sense-making`, `/comprehend`, `/decompose`, `/navigation`.
  - **Gate:** observable — if any of those disciplines exhibits similar bloat signals during use, OR proactively as a project-wide spec-hygiene pass when the user has bandwidth.
  - **Why (if revived):** plausibly produces similar findings; would reduce context cost across the discipline set and may surface a generalizable repair pattern beyond `/explore`. Iteration #7 (the `2026-05-14_15-00` finding) already applied a related pattern to `/innovate`; the same audit applied generically may identify further reductions.

## Reasoning

### What was considered and not chosen

The from-scratch frame produced three structurally distinct repair shapes; this finding chose one and reserved another as escalation.

**An in-place wider repair** would have extended the chain's prior selective-revert pattern from 3 elements to roughly 12–16 elements, with no relocation. Tempting because it preserves the pattern the chain had been using. Rejected because it leaves the spec's protocol form intact while patching content — the underlying force (template inheritance from `thinking_disciplines/anatomy_of_disciplines.md`) reasserts on the next iteration. Additionally, several items targeted by the wider revert (the Sources subblock, the §7 deferred additions, the §6.4 source findings) have institutional value that pure deletion would lose. The Relocate-not-delete shape preserves that value via the new design-history file at no runtime cost.

**A direction reversal toward the older spec as the editing base** would have taken the OLD `/explore` reference file as the starting point and added back the genuinely-useful new content from the CURRENT version (the D0–D4 depth vocabulary, the new failure modes around open-closed drift and silent boundary-discovery and per-item depth, the type-aware probing rule, the boundary-discovery sub-phase clarification, the per-invocation-vs-per-staging-coverage distinction). Tempting because the user's earlier framing in a prior conversation had pointed toward this option. Rejected as the primary action because the user's deeper preference is for lighter form, not for OLD-as-base specifically, and because relocate-not-delete delivers the same lightness with operationally simpler edits and lower risk of accidentally losing useful new content during per-element add-back. Reserved as an escalation: if the relocate pattern fails to deliver enough cleanup, or if the template-inheritance force keeps producing new bloat in future iterations, direction reversal becomes warranted.

**Upgrading the prior iteration's substance-inferred calibration** (Level 2 on the chain's calibration ladder) to substance-confirmed. Tempting because the from-scratch frame's reasoning ("this element does not fire at runtime") feels substance-related. Rejected because BLOAT-confirmed is structural reasoning — it predicts that removing the element will not degrade operation; it does not measure operation quality before and after. Upgrading Level 2 would require multi-run empirical comparison across multiple investigation topics. The from-scratch frame's evidence sits at Level 1.5 on the calibration ladder — stronger than form-observation (the chain's Level 1) but weaker than empirical substance-measurement (the chain's Level 2).

**Keeping the speculative staging-boundary-regression failure mode** (mode 10 of the original 11-mode list). The mode was self-flagged as "speculative; calibration-state-dependent" in the current spec, with detection placement explicitly stated as "the runner detects this from invocation telemetry; /explore names the failure mode but does not detect it." A failure mode that the discipline cannot detect and that has a starting-default threshold without empirical validation does not belong in the runtime failure-modes list. Removed from the runtime spec, preserved in the design-history file with its revival trigger ("observed runs reveal the threshold is too lax or too strict AND a runner exists that can detect it").

### Why form bloat and substance bloat are one axis for repair

The exploration distinguished form bloat (tables, declarations, enumerations) from substance bloat (project-coupling, provenance, institutional-memory in runtime spec). Two surface manifestations. Under sensemaking's perspective check, both turn out to be driven primarily by one underlying force: the spec's adoption of the template at `thinking_disciplines/anatomy_of_disciplines.md`. That template demands certain section shapes (which produces form bloat) and bakes in project-specific sections like "Sources" and "Universal anatomy" (which produces substance bloat). A smaller fraction of bloat — the Neighbor-disciplines table specifically, the navigation-specific paragraph in §1.5 — comes from local in-spec additions not template-mandated. For the repair, the distinction is functionally one axis: address the template-inheritance with relocate-not-delete; address local additions with per-element review. One repair pattern, two surface targets.

### Why the iteration's full pipeline cost was real

This iteration ran the full Exploration → Sensemaking → Decomposition → Innovation → Critique pipeline despite the Sensemaking step explicitly recommending truncation at sensemaking + direct-edit from there. The user kept the pipeline running per the continuous-/MVL+ commitment.

Sensemaking's truncation recommendation was based on the prior iteration's "post-Exploration over-scoped" observation — when the load-bearing work is upstream (Exploration + Sensemaking in this case), downstream disciplines produce diminishing returns. That observation was correct for the prior iteration (a Confirmation Report finding) and partially correct for this iteration.

The partial part matters. Decomposition's value was modest — the five-piece partitioning was structurally sensible but not load-bearing for the actual edits. Innovation's value was real (it produced concrete `old_string`/`new_string` Edit pairs that an implementing agent can execute mechanically). Critique's value turned out to be high — it caught five genuine gaps in Innovation's output (the missed EXECUTE INSTRUCTIONS section, the orphaned §5.3 staging-aware telemetry, the orphaned §4.3 line 271 reference, the layered-territories-rule vocabulary mismatch, and the five stale section-number references). Under a truncate-and-direct-edit alternative, these gaps would have been committed without being caught.

The honest framing: the user's continuous-pipeline commitment produced retroactive value through Critique. Truncating after Sensemaking would have produced a simpler repair that contained five completion gaps. The full pipeline produced a complete repair specification. The cost-benefit was real, not waste.

## Open Questions

### Monitoring

- **After the repair is applied, watch the next several `/explore` invocations across inquiries.** Does the lean runtime spec produce equivalent-or-better Exploration outputs? Does the ratio of protocol scaffolding to core-operation content shift in the predicted direction (more attention to the actual operation, less to bookkeeping)? This is informal monitoring rather than a controlled study — it does not produce empirical substance-level evidence, but it does provide a sanity check that the lean spec preserves operation.

- **Watch whether new bloat creeps in during future spec edits.** The relocate-not-delete pattern is preserved as a routing convention: future institutional-memory additions for `/explore` should go to `enes/discipline_design_history/for_explore.md` rather than back into the runtime spec. The same convention applies to other disciplines' design histories under `enes/discipline_design_history/`. Whether future edits honor this convention is observable across the next several spec iterations.

### Research Frontiers

- **From-scratch bloat audit applied to other discipline specifications.** The necessity-test frame used here is generalizable. The project's other discipline specs — `/innovate`, `/sense-making`, `/comprehend`, `/decompose`, `/navigation` — plausibly carry similar template-inherited bloat. A project-wide spec-hygiene pass applying the same audit would identify further reductions and may surface a repair pattern that generalizes beyond `/explore`. Out of scope for this iteration; revived when bandwidth allows or when one of the listed disciplines shows similar bloat signals during use.

- **Empirical substance-level test for the lean runtime spec.** The chain's Level 2 calibration (does lighter form produce measurably better cognitive operation?) remains inferred-not-confirmed. The infrastructure for this test exists in the A/B-test inquiry protocol designed in `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md`. Running that protocol against the lean spec versus the current spec, across multiple investigation topics, would upgrade the calibration toward empirical. Out of scope here; named because the path exists.

### Refinement Triggers

- **Iteration #11+ threshold.** The chain's threshold for justifying another full MVL+ iteration on this axis is further elevated. Iteration #11 requires structurally NEW questions — not refinements of this iteration's bloat-confirmed scope nor revisits of the chain's earlier E2. Examples that would qualify: empirical mistake-rate measurement under the lean spec; the from-scratch bloat audit applied to another discipline; a runtime issue caused by something this repair deleted that turns out to have been load-bearing after all.

- **Relocate-pattern-failure trigger.** If the lean spec doesn't deliver enough cleanup (for example, new bloat creeps back into the runtime spec, or the design-history file becomes a dumping ground for content that should be deleted rather than relocated), the chain's reserved escalation option is the direction reversal toward OLD with selective add-back. The pattern's success criterion: across the next several spec iterations, total runtime-spec bloat stays bounded.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

 REPAIR the Neighbor-disciplines table to drop project paths (A2)

why Neighbor-disciplines is needed anyway?  why woudl explore need to know this ? 

i think you are not understanding the full bloat for some reason.
```

</details>
