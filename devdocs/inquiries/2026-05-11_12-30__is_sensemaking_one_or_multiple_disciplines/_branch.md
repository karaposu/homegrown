# Branch: Is Sensemaking One Discipline or Multiple Disciplines Under One File?

## Question

After the recent accumulation of edits and refinements to `homegrown/sense-making/references/sensemaking.md` — including (a) the just-adopted Frame-exit Completeness perspective with its 4 sequenced meta-categories (Existence Enumeration / Role Assessment / Verdict Rigor / Residual / Coverage Justification), (b) the load-bearing concept test refinement note in Phase 3, (c) the specific-vs-pattern recognition cue refinement note in Phase 3, (d) the Accommodation trigger refinement note in Phase 5, (e) the Phase / Calibration-State perspective requirement refinement note in Phase 2, and (f) the renaming of Definitional / Consistency → Internal Consistency with scope explicitization — **is the spec still describing one coherent discipline, or has it grown into a file that houses two (or more) distinct disciplines that should be named and possibly separated — for example, "comprehending + sensemaking," or some other combination the project hasn't named yet?**

## Goal

A clear structural diagnosis with operational consequence:

1. **Verdict:** is the current `homegrown/sense-making/references/sensemaking.md` one discipline or multiple? If multiple, name them.
2. **Structural evidence:** if it's one discipline, what holds it together as one? If multiple, where is the natural boundary (which sections / phases / operations belong to which sub-discipline; what's the coupling that distinguishes them)?
3. **Operational consequence:** if multiple, what would change operationally — would the /MVL+ pipeline need to insert a new discipline step, or could the disciplines remain co-located in one file with named sub-modes, or does the spec need to be split into separate files entirely? What's the cheapest configuration that respects the structural truth?
4. **Self-reference handling:** this inquiry's own Sensemaking phase will be diagnosing whether Sensemaking should split — acute self-reference risk. The diagnostic must work despite that, with explicit mitigation.

The user must be able to act on the verdict — keep the spec as one discipline, or split it, or rename it, or otherwise restructure based on what the diagnosis reveals.

## Scope Check

Question covers goal: YES. The question asks whether the spec is one or multiple disciplines; the goal compiles the verdict + structural evidence + operational consequence + self-reference handling.

**Specific-vs-pattern check:** the question is structural and pattern-level (about the spec's overall coherence after accumulated edits), not about any one edit in isolation. The recent edits enumerated in the question are evidence sources, not the scope. The default reading — analyze the spec's overall structure as accumulated — is the right scope.

**Self-reference acuity:** this is the highest-risk inquiry yet for self-reference. The Sensemaking phase will be DIAGNOSING the Sensemaking spec using the Sensemaking spec's own perspectives and refinement notes. Mitigations required: (a) external anchoring at every load-bearing claim (cite spec line numbers; cite the project's other discipline specs for cross-discipline coherence comparisons; cite adjacent fields where similar discipline-decomposition questions have been resolved); (b) apply the just-adopted Frame-exit Completeness perspective to this very analysis as a meta-test; (c) the Critique phase should explicitly test whether the diagnostic verdict could be self-confirming rather than structurally derived.

## Candidate decompositions to consider (not exhaustive; for orientation, not for premature commitment)

- **Candidate A — One discipline (status quo).** Sensemaking is one expand-contract methodology; Phases 1-2 expand the anchor space, Phases 3-5 contract it; this is the standard shape of meaning-construction work; splitting would be artificial.
- **Candidate B — Comprehending + Sensemaking.** Comprehending = Phases 1-2 (build anchor space); Sensemaking proper = Phases 3-5 (stabilize); the split mirrors the project's existing Innovation (expansion) vs Critique (contraction) separation on the solution-space axis but applied to the meaning-space axis.
- **Candidate C — Sensemaking + Vigilance.** Core Sensemaking = Phases 1-5 (the methodology); Vigilance = the recently-added meta-checks (Frame-exit Completeness; load-bearing concept tests; specific-vs-pattern; Accommodation trigger; Phase/Calibration-State requirement) that test the integrity of the work itself; the split is along the work-vs-check-on-work boundary.
- **Candidate D — Anchoring + Resolving.** Anchoring = Phase 1 only (extract anchors); Resolving = Phases 2-5; the split is at the extraction-vs-application boundary; simpler than B or C.
- **Candidate E — Comprehending + Sensemaking + Vigilance** (combines B and C; three disciplines).
- **Candidate F — Single discipline with named sub-modes.** One discipline but with explicit "comprehending mode" and "stabilizing mode" sub-labels in the spec; a compromise between unity and split that avoids splitting files but acknowledges the internal structure.

Exploration may add candidates; Sensemaking may eliminate or refine candidates; Innovation may propose drafted re-organization; Critique will adversarially test the survivor(s).

## Required reads

- `homegrown/sense-making/references/sensemaking.md` (the spec being diagnosed; just-edited; reflects all recent additions including Frame-exit Completeness with 4 meta-categories).
- `devdocs/inquiries/2026-05-11_09-20__design_sensemaking_frame_exit_meta_categories/finding.md` (the most recent edit; context for what was just added and why).
- `devdocs/inquiries/diagnostics/rare_cases/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` (prior refactor proposal; explains the Internal Consistency split rationale).
- `homegrown/innovate/references/innovate.md` (for comparison; sister discipline; see how it's scoped).
- `homegrown/td-critique/references/td-critique.md` (for comparison; sister discipline; see how it's scoped).
- `homegrown/explore/references/explore.md` (for comparison; sister discipline; see how it's scoped).
- `homegrown/decompose/references/decompose.md` (for comparison; sister discipline; see how it's scoped).

## Design constraints

- **No premature commitment to a candidate.** The Exploration phase enumerates candidates; the Sensemaking phase analyzes; the Innovation phase drafts (if appropriate); the Critique phase adversarially tests. The verdict comes at finding compilation.
- **Operational consequence is mandatory.** A verdict without operational consequence is incomplete. If the answer is "one discipline," explain what holds it. If "two disciplines," explain how to structure (one file with sub-modes? two files? new pipeline step?).
- **Honor the just-adopted edit.** The Frame-exit Completeness perspective with 4 meta-categories was just adopted into the spec. This inquiry must work WITH that, not against it — the edit is part of the spec being diagnosed, not a candidate for reversal.
- **Self-reference mitigation is mandatory.** External anchoring at every load-bearing claim; meta-application of the Frame-exit Completeness perspective to this analysis at Sensemaking Phase 2; Critique must explicitly test self-confirmation risk.

## Relationships

- RELATED: `devdocs/inquiries/2026-05-11_09-20__design_sensemaking_frame_exit_meta_categories/finding.md` (the most recent edit; this inquiry diagnoses whether that edit + the prior accumulated edits push the spec across a discipline boundary).
- RELATED: `devdocs/inquiries/diagnostics/rare_cases/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` (the parent refactor; context).
- AFFECTS SPEC: `homegrown/sense-making/references/sensemaking.md` (the spec being diagnosed; potential restructuring target).
- POTENTIALLY AFFECTS: `homegrown/protocols/MVL+.md` or equivalent (if a discipline split implies a pipeline-step change).
