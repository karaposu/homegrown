---
status: active
diagnoses: devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md
---

# Finding: Loop Diagnose — Navigation Organization Structure / Warming Scope-Cut

## Question

From `_branch.md`: pinpoint the exact wrong thing in the navigation-organization-structure inquiry at `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md` — origin line, manifestation line, causal mechanism, and maintenance candidates that prevent the broader class of mistake.

**Goal:** produce the deliverable specified by `homegrown/protocols/loop_diagnose.md` Step 4 — failure hypotheses with confidence levels, evidence triplet (prior path / human correction / corrected path), maintenance candidates with explicit evaluation gates, and a diagnostic verdict. The user explicitly asked "pinpoint the EXACT wrong thing," so the verdict must be line-level.

The user's prior framing also signaled that this is the SECOND instance of a frame-scope capture pattern (Instance 1 was a separate Memory-related diagnostic at `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md`), so the diagnosis must also test the pattern claim and consider audit-revival implications.

## Finding Summary

- **The exact wrong thing is a three-surface failure chain with a single deepest root.** The deepest root is at `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/_branch.md` line 29 — a categorization error where the loop-builder's scope-cut grouped warming files with cognitive-content items (the 16-type taxonomy of /navigation; the 12 per-route fields) under one heading ("audited; don't redesign"). The audit (`devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`) explicitly puts warming in a separate category (Category I — "Warming"; canonical precondition for Navigation), distinct from cognitive content.

- **The critical failure point is at `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/docarchive/sensemaking.md` line 130** (the Sensemaking phase of that prior inquiry). The Frame-exit Completeness perspective fired — but produced "OUT OF SCOPE; clean boundary" via the Clean Resolution Trap pattern (Sensemaking failure mode #5, defined in `homegrown/sense-making/references/sensemaking.md`). The strongest counter-argument ("warming IS the pre-condition layer; the project has it; navigation's operation depends on it — see audit Category I1") was never stated or tested on structural grounds.

- **The manifestation is at `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md` line 256** — the published Frame-exit verification table re-listed warmup as "out of scope; clean boundary" without retest.

- **The propagation site is the downstream comparison finding** at `devdocs/inquiries/2026-05-10_22-46__nav_should_be_vs_recent_discussion_comparison/finding.md` — which inherited the 11-22 frame and called concept-mapping "a new capability the project doesn't have." The user caught this manually via frame-exit challenge ("if there is no mapping how could navigation work in the first place?"), since warming files at `homegrown/navigation/warmup/` ARE concept-map content in narrative form.

- **This is Instance 2 of frame-scope capture, but the failure mechanism differs from Instance 1.** Instance 1 (Memory): the perspective NEVER FIRED. Instance 2 (here, warming): the perspective FIRED but reasoned SHALLOWLY (Clean Resolution Trap). Same outcome pattern (frame-scope capture); different etiology; different maintenance candidate.

- **Maintenance is two-part for the discipline-level work** (both DEFERRED per loop_diagnose Step 5), plus one immediate item at the loop-builder level (ACTIONABLE):
  - **Part A — Frame-exit Completeness sub-perspective** (existing candidate from `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`). Addresses Instance 1's not-fired mechanism. DEFERRED with revival trigger "M4 audit produces ≥3 instances of frame-scope-capture patterns across distinct inquiries." This inquiry contributes Instance 2; the count is now 2/3.
  - **Part B — Counter-argument testing requirement** (NEW, drafted but DEFERRED). Addresses Instance 2's fired-but-shallow mechanism. Separate revival trigger: "M4 audit produces ≥3 instances of fired-but-shallow frame-exit verdicts." Current count for this specific mechanism: 1/3.
  - **Scope-cut writing convention** (ACTIONABLE). A loop-builder-level writing-discipline reminder (not a discipline-spec change), to distinguish "out of scope for cognitive-content redesign" from "out of scope for organization-discussion." Applicable to all future `_branch.md` scope-cuts.

## Finding

The user has been driving a /MVL+ pass (the Extended Cognitive Loop: Exploration → Sensemaking → Decomposition → Innovation → Critique) over the navigation-organization area of the project. A recent inquiry — `2026-05-10_11-22__navigation_organization_structure` — defined what /navigation should organize as artifacts (per-run `navigation_observer_<N>.md` files; per-folder `_nav.md` files; etc.) and confirmed a scope cut treating the warming files at `homegrown/navigation/warmup/` as out of scope. A subsequent comparison inquiry then called concept-mapping "a new capability the project doesn't have." The user challenged the comparison ("if there is no mapping how could navigation work in the first place?"), and that challenge made the prior frame visibly wrong: warming files at `homegrown/navigation/warmup/` ARE concept-map content in narrative form. This loop_diagnose pass exists to pinpoint exactly where that wrongness originated and what would prevent its recurrence.

### 1. The failure chain — three surfaces

The wrong thing is not a single error at a single point. It is a chain across three surfaces of one inquiry's artifact, each with a different mechanism, each with a different prevention opportunity. Naming the chain matters because the maintenance options change depending on where in the chain you intervene.

**Surface 1 — Origin: `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/_branch.md` line 29.**

The scope-cut text at that line reads:

> "Explicit scope cut: the inquiry does NOT redesign Navigation's cognitive content (the 16-type taxonomy, the 12 route fields, the warming protocol — these were already audited in `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`). It focuses ONLY on the artifact / file / folder organization layer."

This is a categorization error. The audit referenced in the scope-cut places these three items in distinct categories:

- The 16-type taxonomy of route types (the canonical schema for how /navigation classifies routes) lives in audit Category E — cognitive content of the discipline.
- The 12 per-route fields (the per-route schema for what /navigation records about each route) live as audit item D2 — a Tier-1 challenge candidate flagged as HEURISTIC.
- The warming protocol — the files at `homegrown/navigation/warmup/` (navigator-warmup1.md, navigator-warmup2.md, navigator-warmup3.md, plus prior-map-overlay and refresh files) — lives in audit Category I, with item I1 explicitly designated as CANONICAL: "warming is precondition for Navigation."

The first two items are about /navigation's internal cognitive content — what the discipline produces and records. The third (warming) is about /navigation's pre-condition layer — what must exist BEFORE /navigation can operate coherently. The audit treats these as distinct categories. The scope-cut at line 29 collapses them into one heading: "audited; don't redesign."

"Don't redesign" is true for all three items (the audit confirms canonical status). But "outside the inquiry's organization-discussion" is wrong specifically for warming, because warming IS part of /navigation's organization at a different layer (project-wide pre-condition layer rather than per-inquiry artifact layer). The collapse at line 29 biased the inquiry's frame from the start.

**Surface 2 — Critical failure: `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/docarchive/sensemaking.md` line 130** (the prior inquiry's Sensemaking phase).

The line-130 verdict reads:

> "`homegrown/navigation/warmup/` — pre-discipline preparation files — boundary check: feed INTO the discipline, don't change the per-run output structure. OUT OF SCOPE; clean boundary."

Followed at line 134 by:

> "Frame-exit check passes: the inquiry's frame correctly bounds to discipline + per-folder artifact organization. Excluded items have clean boundaries (warmup feeds in; multi-resolution-protocol uses out; Navigator-session-role addressed elsewhere)."

This is the Clean Resolution Trap pattern — Sensemaking failure mode #5, defined in `homegrown/sense-making/references/sensemaking.md`:

> "An ambiguity resolves with an elegant, satisfying explanation. The resolution feels right — clean, logical, complete. But the strongest counter-argument was never tested on structural grounds. … Corrective: State the strongest counter-argument. State why it fails — on structural grounds."

The line-130 verdict fits this exactly. The elegant explanation is "warmup feeds INTO discipline; doesn't change output structure" — clean, logical, complete-feeling. The strongest counter-argument is "warmup IS the pre-condition layer; the project already has it; /navigation's coherent operation depends on it (audit Category I1)." That counter was never stated and was never tested on structural grounds. If it had been tested, the test would have asked: "Is the navigation-organization analysis coherent without considering warmup?" The answer is NO. The verdict would have flipped from "out of scope; clean boundary" to "in scope at a different layer — project-wide pre-condition rather than per-inquiry artifact."

The line-130 verdict resolves the question by conflating two distinct sub-questions: (a) "Does warmup change the per-run output schema of /navigation?" (answer NO; true); (b) "Is warmup part of /navigation's organization at the project level?" (answer YES; never tested at line 130). The Sensemaking phase answered question (a) and treated the answer as if it answered question (b).

**Surface 3 — Manifestation: `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md` line 256.**

The published finding's Frame-exit verification table re-lists warmup with the same verdict:

> "| `homegrown/navigation/warmup/` | Out of scope (feeds INTO discipline; per-run `warming_summary` field references it; clean boundary). |"

This is unverified confirmation — the CONCLUDE step that produced the finding inherited the Sensemaking verdict and propagated it to the public surface of the artifact without retest.

**Propagation:** the published finding's frame then propagated to the downstream comparison inquiry at `devdocs/inquiries/2026-05-10_22-46__nav_should_be_vs_recent_discussion_comparison/finding.md`. The comparison was asking "is concept-mapping covered by the recent design (i.e., the 11-22 design)?" Inheriting the 11-22 frame (with warming out of scope), the answer was NO — which produced the wrong claim that concept-mapping is "a new capability the project doesn't have." The user's challenge during the subsequent /sense-making run caught this externally, since warming files at `homegrown/navigation/warmup/` ARE concept-map content in narrative form, just hand-curated, static, and single-stage rather than dynamic.

### 2. Pattern context — Instance 1 vs Instance 2

The user identified this as the second instance of frame-scope capture in recent project work. Instance 1 was a separate diagnostic at `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` (where Sensemaking missed the per-inquiry-md-file dimension of Memory in a meta-loop autonomy-ladder diagnostic). Both instances produce frame-scope capture — the inquiry's frame excludes a referent that the project actually contains and that bears on the analysis. The pattern is real.

But the underlying mechanism is different in each instance, and the difference matters for what maintenance prevents recurrence:

| Aspect | Instance 1 (Memory) | Instance 2 (this — warming) |
|---|---|---|
| Outcome pattern | Frame-scope capture | Frame-scope capture (same outcome) |
| Mechanism | Perspective NOT FIRED — a load-bearing concept test wasn't applied to Memory's type-axis at all | Perspective FIRED but reasoned SHALLOWLY — Frame-exit Completeness applied to warmup, but Clean Resolution Trap produced "clean boundary" without counter-test |
| Failure layer | Recognition (didn't recognize Memory as needing the test) | Reasoning (recognized warmup as needing the test, but reasoned shallowly within it) |
| Caught by | User's correction ("we have md files no?") — manual frame-exit | User's challenge ("if there is no mapping how could navigation work in the first place?") — manual frame-exit |
| What maintenance addresses | Make the perspective fire (Part A) | Sharpen reasoning when the perspective fires (Part B) |

Same disease, different etiology. A maintenance candidate that only addresses one mechanism leaves the other open.

### 3. Maintenance candidates — three pieces

**Part A — Frame-exit Completeness sub-perspective.** This candidate already exists. It was proposed at `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` after Instance 1. The proposal is to refactor Sensemaking's existing Definitional perspective by adding a Frame-exit Completeness sub-perspective that asks: "Does the project have artifacts or usages of the inquiry's load-bearing terms that the inquiry's frame's scope excludes?"

Part A addresses Instance 1's not-fired mechanism — it gives the perspective a named slot in Sensemaking Phase 2, so it fires on inherited multi-value terms. It does NOT address Instance 2's mechanism (in Instance 2 the perspective fired; the failure was downstream of firing).

**Status: DEFERRED** per loop_diagnose Step 5 ("don't propose broad fundamentals rewrites from a single weak correction chain"). **Revival trigger:** the audit at item M4 from the Instance-1 diagnostic produces ≥3 instances of frame-scope-capture patterns across distinct inquiries.

**Current instance count toward Part A's trigger: 2** (Memory was 1; this is 2). One more catch and Part A revives. The count for Part A includes both not-fired and fired-but-shallow mechanisms — any frame-scope capture counts.

**Part B — Counter-argument testing requirement (NEW; drafted but DEFERRED).** This candidate is new to the project. It addresses Instance 2's fired-but-shallow mechanism: when the Frame-exit Completeness perspective (once Part A ships) produces an "out of scope" or "clean boundary" verdict, the strongest counter-argument MUST be stated and tested on structural grounds before the verdict can be committed. It reuses the existing Clean Resolution Trap corrective rather than coining a new failure mode.

**Drafted spec text** (refined per critique's REFINE direction on the candidate's original draft; the refinement is captured here so the eventual N=3-triggered revival ships the refined version rather than the original):

```
(DRAFT — not adopted; revival trigger: M4 audit produces
≥3 instances of fired-but-shallow frame-exit verdicts.)

When the Frame-exit Completeness perspective produces a verdict of
"out of scope" or "clean boundary" on an artifact that may play a role
in the OPERATION BEING ORGANIZED (i.e., the discipline or process whose
artifacts the inquiry is analyzing), state the strongest counter-argument
as:

  "This artifact plays role X in [the operation being organized]."

Test the counter by asking:

  "Is the operation's coherence preserved if this artifact is excluded
   from the inquiry's frame?"

If NO (operation depends on the artifact), the "OUT OF SCOPE; CLEAN
BOUNDARY" framing is WRONG — the artifact is in-scope at a different
layer (e.g., project-wide pre-condition vs per-inquiry artifact). The
corrective is NOT to force the artifact into the current frame, but to
RE-LOCATE it to its correct in-scope layer and note that the current
inquiry operates within a per-layer slice of the operation.

If YES (operation is coherent without the artifact), the verdict stands.

This sub-requirement applies Sensemaking failure-mode #5 (Clean
Resolution Trap, defined in homegrown/sense-making/references/sensemaking.md)
to the frame-exit axis. The corrective is the same: "State the strongest
counter-argument. State why it fails on structural grounds." Failing to
state and test the counter-argument when a clean-boundary verdict is
produced is an instance of Clean Resolution Trap applied to the
frame-exit axis.
```

**Status: DEFERRED** per loop_diagnose Step 5. **Revival trigger:** M4 audit produces ≥3 instances of fired-but-shallow frame-exit verdicts across distinct inquiries (separate from Part A's count; the mechanism-specific threshold).

**Current instance count toward Part B's trigger: 1** (this inquiry's Instance 2 is the only fired-but-shallow case identified so far). Two more catches and Part B revives.

**File affected if revived:** Part B's text would extend the Frame-exit Completeness sub-perspective in `homegrown/sense-making/references/sensemaking.md` — i.e., it lives WITH Part A's spec edit. Part B presupposes Part A.

**Scope-cut writing convention (ACTIONABLE; loop-builder-level guideline; NOT a discipline-spec change).** When writing a `_branch.md` scope-cut, distinguish two distinct out-of-scope categories:

```
SCOPE-CUT WRITING DISCIPLINE

When writing a _branch.md scope cut, distinguish two distinct
out-of-scope categories:

1. OUT OF SCOPE FOR COGNITIVE-CONTENT REDESIGN.
   Items that are CANONICAL discipline-output structure (e.g., the
   16-type taxonomy of /navigation, the 12 per-route fields, the SIC
   pipeline order). These are out-of-scope because the inquiry isn't
   redesigning the discipline's cognitive content.

2. OUT OF SCOPE FOR ORGANIZATION-DISCUSSION.
   Items that are not part of the inquiry's organization concern at all.
   These are out-of-scope because they don't bear on what's being
   organized — different artifact category entirely.

DO NOT group these together under "audited; don't redesign."

An item being "audited and canonical" tells you about category-1 status
(don't redesign its cognitive content). It does NOT automatically place
the item in category 2 (don't discuss as organization).

Specifically: items in audit categories describing preconditions, inputs,
or organizational primitives (e.g., warming files at
homegrown/navigation/warmup/, which the audit categorizes as I1
"precondition for Navigation [CANONICAL]") are CANONICAL-don't-redesign
for cognitive content, but they may still be part of the operation's
organization at a different layer (project-wide pre-condition vs
per-inquiry artifact). Treat such items as IN-SCOPE for
organization-discussion at their respective layer.

Counter-example from history: the 11-22 inquiry's _branch.md line 29
grouped 16-type taxonomy + 12 route fields + warming protocol under
"audited; don't redesign." The warming protocol shouldn't have been
there. The frame this created caused downstream frame-scope capture
(Sensemaking line 130; the published finding line 256; the 22-46
comparison inheriting the frame; the user catching it manually).
```

This convention lives at the loop-builder level — the discipline-spec changes (Parts A and B) are governed by Step 5's N≥3 rule, but a writing-discipline reminder for how to phrase a scope-cut is not a discipline-spec change and is reversible at low cost. The convention can be stored as a note in `enes/runtime_environment/folder_based.md` (which already documents `_branch.md` conventions) or as a standalone guideline file.

**File affected:** `enes/runtime_environment/folder_based.md` (or a new sibling guideline file). The exact placement is a small operational choice for whoever applies this finding.

### 4. Diagnostic verdict

**The exact wrong thing is at `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/_branch.md` line 29 — the deepest root.** From there it propagates through Surface 2 (the Sensemaking-phase Clean Resolution Trap) and Surface 3 (the unverified finding-level confirmation) to the downstream 22-46 comparison.

The chain has a clean intervention point at every surface: Surface 1 is catchable at framing time (the scope-cut writing convention); Surface 2 is catchable at Sensemaking time (Parts A + B once they revive); Surface 3 is catchable at CONCLUDE time (a pre-CONCLUDE checklist proposed in the prior loop_diagnose can verify frame-exit verdicts before they ship in the finding).

**Confidence: HIGH on the diagnosis.** All claims are anchored to spec text (Sensemaking failure mode #5; loop_diagnose Step 5), audit text (Categories E, D2, I1), and line citations in the 11-22 artifact (`_branch.md` line 29; `docarchive/sensemaking.md` lines 130-134; `finding.md` line 256). The audit verification confirmed that the audit itself is correct and that the categorization error is at the loop-builder level rather than the audit level.

**Refutation conditions for the diagnosis** (added per Critique's REFINE direction on the diagnostic verdict's falsifiability):

- The diagnosis would be refuted if the audit actually grouped warmup with cognitive content under one category, rather than separating Category I from Category E and item D2. (Verified false — the audit text shows these as separate categories.)
- The diagnosis would be partially refuted if a passage in `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/docarchive/` outside lines 130-134 actually states and tests the counter-argument "warmup IS the pre-condition layer" on structural grounds before producing the frame-exit verdict. (Partial check — the lines cited are the explicit frame-exit-check passage; a full archive enumeration was not performed, so a residual falsifiability gap remains here. If such a passage exists, Surface 2's "Clean Resolution Trap" characterization weakens, but Surface 1 and Surface 3 still stand.)
- The diagnosis would be refuted if the categorization at line 29 was intentional and well-grounded — for example, if the loop-builder had a reasoned argument for grouping warmup with cognitive content that the diagnosis missed. (Verified false — the categorization was a writing-stage conflation rather than a considered decision; the audit's separate categorization is the canonical project signal, and the scope-cut text itself doesn't argue for the grouping.)

The first and third refutation conditions are verified false; the second has a residual falsifiability gap that is acknowledged here rather than concealed.

## Next Actions

### MUST

- **What:** Apply the scope-cut writing convention (the boxed text in section 3 above) when authoring future `_branch.md` scope-cuts.
  - **Who:** the loop-builder layer (the human or agent writing the inquiry frame for any future /MVL or /MVL+ run).
  - **Gate:** observable — over the next five `_branch.md` writings, do scope-cuts distinguish the two categories (cognitive-content-out vs organization-out)?
  - **Why:** prevents future categorization errors at the framing stage. The cheapest catch point in the chain — catches at Surface 1 before propagating to Surfaces 2 and 3.

### COULD

- **What:** Add the scope-cut writing convention as a note in `enes/runtime_environment/folder_based.md` (which already documents `_branch.md` conventions) or as a sibling guideline file at `enes/runtime_environment/scope_cut_convention.md`.
  - **Who:** anyone applying this finding (small operational choice).
  - **Gate:** time-bound — within the next loop-builder editing session.
  - **Why:** stabilizes the convention as a durable reference rather than living only in this finding.

- **What:** Optionally small-revise the comparison finding at `devdocs/inquiries/2026-05-10_22-46__nav_should_be_vs_recent_discussion_comparison/finding.md` to acknowledge that warming is the existing concept-map layer (per today's correction sensemaking at `devdocs/sensemaking/2026-05-11__concept_mapping_as_default_prerequisite_for_navigation.md`).
  - **Who:** the loop-builder.
  - **Gate:** condition-bound — only worth doing if 22-46 is actively being referenced in downstream work; skip if it's settled history.
  - **Why:** prevents the inherited wrong frame from propagating further into future inquiries that read 22-46.

### DEFERRED

- **What:** Part A — Frame-exit Completeness sub-perspective refactor of Sensemaking's Definitional perspective (existing candidate at `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`).
  - **Gate:** observable — M4 audit (from the Instance-1 diagnostic) produces ≥3 instances of frame-scope-capture patterns across distinct inquiries. Current count: 2/3. The count includes both not-fired and fired-but-shallow mechanisms.
  - **Why (if revived):** makes the Frame-exit Completeness perspective FIRE on inherited multi-value terms; addresses Instance 1's mechanism (perspective-not-firing).

- **What:** Part B — Counter-argument testing requirement (the drafted spec text in section 3 above).
  - **Gate:** observable — M4 audit produces ≥3 instances of fired-but-shallow frame-exit verdicts (separate from Part A's count; specific to this mechanism). Current count: 1/3.
  - **Why (if revived):** sharpens reasoning when the Frame-exit Completeness perspective fires; addresses Instance 2's mechanism (fired-but-shallow). Without Part B, the perspective could fire and still produce a wrong verdict via Clean Resolution Trap.

- **What:** Update M4's audit design to record mechanism classification per instance (not-fired / fired-but-shallow / other) when it runs.
  - **Gate:** triggered automatically when M4 itself runs (M4 is independently scheduled per the Instance-1 diagnostic).
  - **Why (if applied):** enables Part A and Part B counters to track independently, so revival decisions are mechanism-aware.

## Reasoning

This section shows the full field of what was considered, including alternatives that were rejected.

### Why the chain has three surfaces and not one

A single-surface diagnosis ("the wrong thing is X") would have hidden where the prevention opportunities lie. The Decomposition phase mapped four pieces (P1-P4), and the chain across surfaces was the load-bearing hub piece — every maintenance candidate hangs off a specific surface. If the diagnosis named only `finding.md:256` (the visible manifestation), the maintenance would target CONCLUDE-level checks, which is the LATEST and most expensive intervention point. Naming the origin at `_branch.md:29` shifts the cheapest intervention to the framing stage (the scope-cut convention).

### Why Clean Resolution Trap (Sensemaking failure mode #5) and not a new failure-mode coinage

The Sensemaking failure-mode catalog already names Instance 2's mechanism. The line-130 verdict text ("clean boundary") and the corrective for failure mode #5 ("state the strongest counter-argument; state why it fails on structural grounds") match exactly — not loosely. Coining a new failure mode would be a discipline-spec change governed by Step 5's N≥3 rule, and would also duplicate an existing concept. Step 5 was honored by reusing.

Two other failure modes were considered as primary candidates and rejected:

- **Premature Stabilization (failure mode #2)** — partially fit, since the Sensemaking phase reached "frame-exit check passes" quickly. But Premature Stabilization is about the overall stabilization speed of the analysis; failure mode #5 is more specific to the clean-feeling resolution that hides an untested counter-argument. Failure mode #5 is the most-specific match.
- **Anchor Dominance (failure mode #3)** — partially fit, since the per-inquiry-vs-cross-inquiry anchor was the dominant organizing axis of the 11-22 sensemaking. But Anchor Dominance is about over-reliance on one anchor; the line-130 issue was specifically about how the frame-exit verdict was reasoned, not about anchor balance. Failure mode #5 is the closer fit.

Both are acknowledged as secondary modes; Clean Resolution Trap is the primary name.

### Why the audit (the audit-finding at `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`) is correct and the categorization error is at the loop-builder level

The Sensemaking phase explicitly tested the alternative root-cause hypothesis "maybe the audit's structure invited the categorization error." Test outcome: the audit's text places warming in Category I (separate from Category E for the 16-type taxonomy and from item D2 for the 12 per-route fields). The categories are explicitly distinct. The audit-finding does NOT group these. Therefore the misread happened at scope-cut-writing time (the loop-builder, drafting `_branch.md`), not at audit-design time. This narrows the maintenance target to a scope-cut-writing convention rather than an audit-redesign.

### Why Parts A and B are both DEFERRED rather than shipped now

`homegrown/protocols/loop_diagnose.md` Step 5 explicitly forbids broad fundamentals rewrites from a single weak correction chain. The pattern threshold is ≥3 instances. Currently Part A is at 2/3 (Memory + this) and Part B is at 1/3 (just this). Shipping either as a spec change now would violate Step 5. The drafted text is preparation, not adoption — when N=3 is reached, the refined draft can be lifted into the spec without restart cost. The deferred status is not de-facto-permanent because the M4 audit is independently scheduled (per the Instance-1 diagnostic), so there is a real path to revival.

### Why the scope-cut writing convention is ACTIONABLE rather than DEFERRED

A discipline-spec change (Sensemaking, Innovation, etc.) is governed by Step 5. A writing-discipline reminder for the loop-builder layer (how to phrase a scope-cut) is not a discipline-spec change. It is a reversible writing convention with low installation cost and low reversion cost. Step 5's concern is preventing low-evidence spec adoption; the scope-cut convention is structurally clarifying (distinguishing two senses of "out of scope") rather than pattern-preventing, so it does no harm even at low evidence and provides immediate clarity for future framing.

### Critique survivors and refinements

The Critique phase ran 11 evaluation dimensions across 6 candidate pieces (the chain, Part A, Part B, the convention, the threshold-tracking design, the diagnostic verdict) plus the assembly. Five pieces survived cleanly; two received REFINE verdicts. Both refinements have been applied in this finding:

- **Part B's drafted text** was sharpened in three places: the "(DRAFT — not adopted)" header is now inline rather than only in surrounding prose; the "operation being organized" anchor is re-stated inline within the spec text itself; and the "verdict is WRONG" language is qualified to be specifically about the "OUT OF SCOPE; CLEAN BOUNDARY" framing being wrong, with the corrective directing toward re-location to a correct in-scope layer rather than forced inclusion in the current frame.
- **The diagnostic verdict** now includes explicit refutation conditions (see section 4 above), making the diagnosis's falsifiability legible rather than implicit.

No candidates were killed. The verdict mix (clean SURVIVE on the chain, Part A, the convention, the threshold design; REFINE on the drafted spec text and the verdict's falsifiability; no KILLs) reflects honest evaluation — neither rubber-stamping nor nitpicking.

### Self-reference handling

This diagnostic is a Sensemaking-phase output diagnosing a Sensemaking-phase failure, and a Critique-phase output evaluating Innovation's diagnosis. The recursion is acute and risks self-reference collapse (Sensemaking's failure mode #6 and Critique's failure mode #7). It was handled in two ways: (a) every load-bearing claim is anchored to text external to this inquiry (the audit-finding, the Sensemaking spec, the loop_diagnose spec, specific lines in the 11-22 archive); (b) Sensemaking's Frame-exit Completeness perspective was meta-applied to this analysis itself (the check passed; the analysis names Clean Resolution Trap as primary and acknowledges Premature Stabilization and Anchor Dominance as secondary partial-fits without over-attributing).

## Open Questions

### Monitoring

- Whether Part A's instance count reaches 3 before any unrelated change to Sensemaking renders the refactor candidate obsolete or invalid. Observable after the next several /MVL+ runs that involve frame-exit-relevant terminology.
- Whether Part B's fired-but-shallow count grows independently of Part A's broader count. Observable when the M4 audit runs with mechanism-aware classification (per the DEFERRED M4-update action above).
- Whether the scope-cut writing convention actually changes future `_branch.md` writing behavior. Observable across the next five `_branch.md` writings.

### Blocked

- Part A and Part B cannot be shipped until the M4 audit runs and produces the threshold count. The M4 audit itself is DEFERRED in the Instance-1 diagnostic, so this finding is blocked behind that audit's execution.

### Research Frontiers

- Whether other Sensemaking failure modes (beyond #5 Clean Resolution Trap) also have specific axes where a "fired but shallow" mechanism is the dominant failure pattern. The mechanism-aware classification design proposed for M4 may surface this if more instances are recorded with the classifier.

### Refinement Triggers

- This finding re-opens if M4 produces evidence that contradicts the Instance-1-vs-Instance-2 mechanism distinction (e.g., a third instance whose mechanism is neither not-fired nor fired-but-shallow but where the maintenance still naturally fits Part A or Part B).
- This finding re-opens if a passage in `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/docarchive/` outside the lines cited here (130-134 in sensemaking; line 256 in finding) is found to actually state and test the counter-argument "warmup IS the pre-condition layer" on structural grounds. (This is the residual falsifiability gap noted in section 4.)

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+ - use homegrown/protocols/loop_diagnose.md
to take a look at and understand what went wrong exactly with
devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md

bc u said

Direct answer

You're right about the foundational role — and you just caught a real mistake in the
recent finding.

The audit canonically says "warming is precondition for Navigation"
(devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md, item I1).
Some map MUST exist for /navigation to work. The recent comparison finding called
concept-mapping a "new capability the project doesn't have" — that's wrong. The project
ALREADY has concept-map content, just in narrative form: the warming files at
homegrown/navigation/warmup/navigator-warmup1.md / warmup2.md / warmup3.md. They orient
the Navigator to codebase / fundamentals / trajectory. That IS a concept map. It's
hand-curated, static, single-stage; but it's the same INFORMATION TYPE nav_should_be
proposes.

So the right re-framing: concept-mapping is an UPGRADE of the existing warming layer, not
a new capability. Same role, richer / dynamic / multi-stage / tree-structured.

What "default" means operationally

Your "default" splits two ways:

- D1 — regenerate the concept map every time /navigation runs. REJECTED on cost grounds.
Each Navigator session is already a fresh isolated session; doubling that with
map-regeneration is too expensive.
- D2 — project maintains a concept-map artifact, regenerated episodically; warming
references it. RECOMMENDED. Cost-amortized. Preserves your intuition that mapping is
foundational. Works at L0/L1 today (warming files do the partial job); scales to L2+
(dynamic concept-mapping replaces static narrative).

Step 5 still applies

The recommendation to defer the protocol-spec (do one manual concept-mapping run first as
evidence) stays. The framing-correction doesn't lower the evidence threshold.

Bigger finding (bonus)

This is the SECOND instance of frame-scope capture in recent project work. Memory was
instance 1 (the L0 cell mistake — the prior finding's frame excluded per-inquiry md
files). This is instance 2 — the recent comparison finding's frame excluded the warming
layer. You performed frame-exit (operated outside the frame) and caught what the frame's
scope had hidden.

so lets try to pinpoint exact wrong thing..
```

</details>
