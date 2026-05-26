# Branch: Structural Fix Design — Comparison-Axis-Enumeration Gap Across Exploration / Critique / Sensemaking Specs

## Question

Given that (a) the Exploration spec at `cognitive_harness/explore/references/explore.md` has never — across all 7 historical commits (ee0c1a4 / 02b382c / bf4ae1f / 0d58309 / cd44648 "change explore" major rewrite / 01ebc16 / 273c613) — contained a comparison-axis-enumeration mechanism (a design-original omission, NOT a recent regression; verified via git-grep across each historical version + the preserved `explore_old.md`), and (b) the 21-00-30 LOOP_DIAGNOSE inquiry attributed the cognitive_harness-installability axis miss in 02-15 to a PRIMARY gap at this Exploration mechanism + CONTRIBUTING gaps at Critique's Phase 0 exemplar list + Sensemaking's Phase 3 sub-aspect list: what specific spec edits should the project commit, at which discipline files, in what order, with what wording, to close the comparison-axis-enumeration gap without over-scoping?

## Goal

A good answer produces:

- **Concrete spec-edit text** for each candidate (MC1 Exploration + MC2 Critique + MC3 Sensemaking), at a level the user can directly apply OR with minor refinement.
- **Insertion-location commitment** for each edit (which section of the spec; which existing refinement note to extend OR new section to add).
- **Cross-discipline coherence check** — do the 3 edits, taken together, produce a defense-in-depth that catches the class of miss the 02-15 incident exemplifies?
- **Sequencing recommendation** — which edits to commit first (LOW-risk additive vs MEDIUM-risk structural), with the gating that informs the sequencing.
- **Compliance with the auto-memory principle** — none of the spec edits introduce outbound pointers from `cognitive_harness/<discipline>/references/<discipline>.md` to design-history / theory / repo-level docs/.
- **Branch-experiment recommendation per candidate** — MC1 (PROBABLY YES per 21-00-30); MC2 + MC3 (NO per 21-00-30).
- **Acknowledgment of what is NOT in scope** — MC4 (cross-discipline protocol; NEEDS MORE EVIDENCE; deferred); MC6 (orchestration investigation; investigation-first); MC5 (auto-memory widening; REJECTED).

The user should be able to directly review the proposed spec-edit text + decide commit OR refine OR run a branch experiment per candidate.

## Scope Check

Question covers goal. The question scopes to spec-edit design at 3 discipline files + sequencing + cross-discipline coherence + auto-memory compliance. The goal asks for concrete spec text + insertion location + sequencing + branch-experiment recommendation per candidate.

Specific-vs-pattern check: the question references the SPECIFIC 02-15 → 21-00-30 correction chain as the motivating evidence. But the broader pattern (comparison-axis-enumeration as a generic mechanism across project disciplines producing comparison structures) is what the spec edits address. Default: address the broader pattern with the specific case as the worked example. The cognitive_harness-installability axis IS the worked example that should appear in the spec edits.

## Layer Commitment

Primary cognitive layer: **STRUCTURAL.**

Justification: the inquiry's question is "what specific spec edits should the project commit" — this is asking what the disciplines' artifact shape SHOULD LOOK LIKE. Specific section placement, refinement-note wording, exemplar-list extensions, and sub-aspect-list additions are all artifact-shape commitments. The MEANING-layer question ("what is the gap?") was answered by the 21-00-30 LOOP_DIAGNOSE finding. The PROCESS-layer question ("what procedural steps run when the new mechanism fires?") is implicit in the structural commits — once the spec text is committed, the procedural steps follow from reading it; a separate PROCESS inquiry is not warranted unless structural commits surface procedure gaps.

Other-layer alternatives considered and explicitly OUT OF SCOPE for THIS run:

- **MEANING** — already settled by 21-00-30 (mixed attribution; PRIMARY Exploration's missing comparison-axis-enumeration mechanism; CONTRIBUTING Critique Phase 0 + Sensemaking Phase 3; CASCADING Orchestration; EXEMPT auto-memory wording).
- **PROCESS** — implicit in the structural commits. If a separate PROCESS inquiry surfaces as needed (e.g., the spec text raises a procedural ambiguity the structural commit can't resolve), it would follow downstream.

Sequential plan: this STRUCTURAL inquiry produces the spec-edit artifacts → user commits MC2 + MC3 directly (LOW-RISK additive) → MC1 may be committed directly OR may warrant a branch experiment depending on this inquiry's design adjudication → MC4 / MC6 remain deferred per 21-00-30 LOOP_DIAGNOSE guardrail.

## Synthesis Trigger

This inquiry synthesizes commitments from multiple priors:

- `devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/finding.md` — the LOOP_DIAGNOSE diagnostic + its MC1/MC2/MC3 candidates with risk/reach/evaluation-gate per candidate. PRIMARY input.
- `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/finding.md` — the original incident (the 02-15 inquiry whose Exploration R10 first manifested the gap).
- `devdocs/inquiries/2026-05-20_03-30__layer_3_section_9_trigger_redesign_deep_dive/finding.md` — parallel inquiry that inherited the same uncorrected frame in its Q6 (Section 6); informs cross-frontier propagation.
- `cognitive_harness/explore/references/explore.md` — the Exploration spec where MC1 lands. Specifically §3.1 possibility-mode procedure + §2.1 signal types + §4.1 failure modes for context.
- `cognitive_harness/td-critique/references/td-critique.md` — the Critique spec where MC2 lands. Specifically Phase 0 project-specific risk dimension check refinement note.
- `cognitive_harness/sense-making/references/sensemaking.md` — the Sensemaking spec where MC3 lands. Specifically Phase 3 Ambiguity Collapse load-bearing concept test refinement note.
- `~/.claude/projects/-Users-ns-Desktop-projects-native/memory/feedback_disciplines_self_contained.md` — the auto-memory whose principle the spec edits must respect (no outbound pointers from discipline runtime reference files).
- Git history of explore spec (7 commits + `explore_old.md`) — verified the gap is design-original, not a recent regression.

Each prior carries commitments this inquiry inherits:
- 21-00-30 commits to MIXED attribution + per-candidate risk/reach/evaluation-gate. This inquiry's spec-edit designs must respect 21-00-30's commitments (not re-litigate attribution).
- 02-15 commits to the typed framework + the docs/-location recommendation (which is now superseded by the user's correction). This inquiry's MC1 fix must enable the future re-adjudication of 02-15's location recommendation under the corrected axis-set.
- 03-30 commits to the 4-option location frame in its Section 6. This inquiry's spec edits may surface that 03-30's Section 6 inherited the same un-weighted axis and may need a downstream correction inquiry.
- The 3 discipline specs commit to specific sections/wording/refinement-notes. This inquiry's edits must integrate WITHOUT contradicting existing commitments.
- The auto-memory commits to the disciplines-self-contained principle. This inquiry's edits must NOT add outbound pointers from discipline runtime reference files to other folders.

CONCLUDE will require an `## Inherited Commitments Re-test` section. The discipline work (especially Critique) must verify each prior's commitment is honored by the proposed edits.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/` — the LOOP_DIAGNOSE diagnostic that produced MC1 + MC2 + MC3 as MEANING-layer maintenance candidates. This STRUCTURAL inquiry operationalizes them.
- **RELATED:** `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/` — the inquiry whose Section 7 location recommendation surfaced the gap.
- **RELATED:** `devdocs/inquiries/2026-05-20_03-30__layer_3_section_9_trigger_redesign_deep_dive/` — inherited the same uncorrected frame in its Section 6.
- **POTENTIAL DOWNSTREAM:** if the spec edits produce ambiguities at the procedural level, a future PROCESS inquiry adjudicates. If the cross-discipline gap recurs after MC2 + MC3 commit (per 21-00-30 monitoring observable), MC4 (cross-discipline protocol) strengthens.
