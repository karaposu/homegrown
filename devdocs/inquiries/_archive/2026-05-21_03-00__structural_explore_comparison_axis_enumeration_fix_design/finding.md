---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Structural Fix Design — Comparison-Axis-Enumeration Gap Across Exploration / Critique / Sensemaking Specs

## Question

From `_branch.md`:

> Given that (a) the Exploration spec at `cognitive_harness/explore/references/explore.md` has never — across all 7 historical commits including the major rewrite at cd44648 — contained a comparison-axis-enumeration mechanism (a design-original omission, NOT a recent regression), and (b) the 21-00-30 LOOP_DIAGNOSE inquiry attributed the cognitive_harness-installability axis miss in 02-15 to a PRIMARY gap at this Exploration mechanism + CONTRIBUTING gaps at Critique's Phase 0 exemplar list + Sensemaking's Phase 3 sub-aspect list: what specific spec edits should the project commit, at which discipline files, in what order, with what wording, to close the comparison-axis-enumeration gap without over-scoping?

**Goal.** Concrete spec-edit text for MC1 / MC2 / MC3 + insertion-location commitment + cross-discipline coherence check + sequencing recommendation + auto-memory compliance verification + branch-experiment-necessity verdict. The user should be able to directly apply (or minor-refine + apply) each spec edit.

**Context for readers new to this inquiry's vocabulary:**

- **"21-00-30"** is the LOOP_DIAGNOSE inquiry at `devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/finding.md` that diagnosed the comparison-axis-enumeration gap with MIXED attribution (PRIMARY Exploration; CONTRIBUTING Critique + Sensemaking; CASCADING Orchestration; EXEMPT auto-memory wording).
- **"02-15"** is the preserved-frontier codification inquiry whose Section 7 first recommended `docs/preserved_frontier_resolution_templates.md` for the framework's location — the incident the user's correction surfaced.
- **MC1 / MC2 / MC3** are the maintenance-candidate spec edits the 21-00-30 LOOP_DIAGNOSE identified: MC1 for Exploration, MC2 for Critique, MC3 for Sensemaking.
- **`cognitive_harness/`** is the project's installable harness. The auto-memory `feedback_disciplines_self_contained.md` commits the principle that discipline runtime reference files must not contain outbound pointers to other folders — the spec edits must respect this.
- **Property (v)** is the intervention-shape-commitment property of the Meta-Decision-Piece Criterion at `cognitive_harness/innovate/references/innovate.md` Phase 2 Generate. FIRES at this inquiry's spec-edit pieces because they commit ADD-CONTENT intervention shapes for downstream-discipline behavior.

---

## Finding Summary

- **Three spec edits are ready for direct commit** (after Critique's REFINE applied to MC2): MC1 Exploration (1 new inline bold-rule at §3.1); MC2 Critique (1 new sentence at the end of an existing refinement note paragraph); MC3 Sensemaking (1 new sub-aspect within an existing bullet list). All LOW-to-MEDIUM risk; all auto-memory compliant; all matching their host spec's existing pattern.

- **MC1 branch-experiment is NOT REQUIRED** (Critique-discharged). The 21-00-30 LOOP_DIAGNOSE finding's CAUTION-recommended "PROBABLY YES branch experiment" was conditional on whether Critique's adversarial test surfaced wording problems. Critique surveyed over-constrain + under-constrain edge cases and found the wording bounded + permissive enough for direct commit. The remaining limitations (runner-judgment dependencies; not all instance-shapes of architectural-invariants enumerable in a spec) are intrinsic to any spec mechanism, not wording-fixable.

- **All 3 spec edits can commit directly + immediately.** Critique-updated sequencing: no asymmetric staging required.

- **Defense-in-depth across 3 pipeline stages.** The 3 edits compose into structural defense-in-depth: MC1 fires at SURFACE time (Exploration's option-enumeration step); MC3 fires at STABILIZE time (Sensemaking's load-bearing concept test); MC2 fires at ADVERSARIAL-TEST time (Critique's Phase 0 dimension list). Different pipeline stages catch different misses. MEDIUM-HIGH effective per Sensemaking's load-bearing concept test — not infallible (depends on runner-compliance) but substantial improvement over status quo (no mechanism at all). Pattern-naming amplifies effectiveness: each edit names "project-architecture invariants" + gives concrete examples (installability boundaries; folder-independence commitments), lowering the bar for future runners' pattern-matching.

- **Auto-memory compliance verified per edit.** All 3 wordings name CONCEPTS (project-architecture invariants; installability boundaries; folder-independence; Synthesis Trigger; etc.) without outbound PATHS. The MC2 wording originally contained "cognitive_harness/ and repo-level folders" — Critique flagged this as path-like ambiguity; REFINEd to "this discipline's installable harness and repo-level content" for maximally-compliant conceptual anchoring.

- **Each spec edit respects its host spec's existing pattern.** Explore.md uses INLINE BOLD-RULE pattern (no italic refinement-note prefix); MC1 matches the §3.5 "Type-aware probing" precedent. Critique + Sensemaking use the `*Refinement note (applies at Phase X):*` italic-prefix pattern; MC2 + MC3 inherit this naturally because their edits extend EXISTING refinement notes (no new italic-prefix needed).

- **Innovation's comparison-structure gap is OUT OF SCOPE for this inquiry.** Per 21-00-30's MC4 monitoring observable framing — one correction-chain incident is insufficient evidence for a cross-discipline protocol; preserve as monitoring observable. This inquiry honors that guardrail.

- **Property (v) FIRES at this inquiry's spec-edit pieces.** The MC1/MC2/MC3 pieces commit ADD-CONTENT intervention shapes for downstream-discipline behavior. Per-piece Inversion at Meta-Decision Pieces + Intervention-Shape-Axis Inversion compliance recorded (alternative shapes REPAIR/REORGANIZE named, 5-tested, override-recorded per innovate.md lines 401-410). **Layer-3 §9 self-application:** methodology-mode consideration at seed time was Standard default; Contrarian-rethink Framer-weighted alternative narratively rejected (per established documentation-seed practice 00-15 / 01-10 / 02-15 / 03-30 / 21-00-30 + 06-00 i2). Override pattern `Methodology-mode-alternative-marked-inapplicable:` NOT invoked verbatim. **Layer-3 §9 RECORDED-OVERRIDE count remains N=4.** Pattern advances to **N=12 cumulative discipline-prevents-Layer-3-advancement inquiries.**

- **Inherited Frame Audit override RECORDED + COMPLIANT** per innovate.md lines 479-484 (6-component criterion).

- **Inherited Commitments Re-test: 8/8 priors RE-TESTED with cited evidence; 0 silent inheritance.**

- **PARTIAL evidence base limitation acknowledged.** This inquiry inherits 21-00-30's ONE-SIDED-evidence constraint (no corrected_path inquiry exists). The proposed spec edits address the failure surfaces identified by 21-00-30's MEANING-layer diagnostic; empirical validation that the fixes prevent recurrence requires post-commit observation OR a future correction-chain incident showing the fixes catching the class of miss.

---

## Finding

### Surrounding context — why this STRUCTURAL inquiry exists

The 21-00-30 LOOP_DIAGNOSE inquiry attributed the cognitive_harness-installability axis miss (in 02-15's Section 7 location recommendation) to a comparison-axis-enumeration gap across 3 discipline specs: PRIMARY at Exploration's §3.1 possibility-mode procedure; CONTRIBUTING at Critique's Phase 0 project-specific risk dimension check + Sensemaking's Phase 3 load-bearing concept test; CASCADING at Orchestration; EXEMPT at auto-memory wording. The diagnostic produced 3 maintenance candidates (MC1/MC2/MC3) at MEANING layer + deferred MC4 (cross-discipline protocol) to monitoring observable + REJECTED MC5 (auto-memory widening) + INVESTIGATION-FIRST MC6 (orchestration).

The user's instruction "how to fix this?" plus the explicit "run the full mvl loop as i asked" triggered this STRUCTURAL inquiry to operationalize MC1+MC2+MC3 into concrete spec-edit text.

Git history of the Exploration spec confirms the gap is DESIGN-ORIGINAL not a recent regression. Across 7 commits (ee0c1a4 → 02b382c → bf4ae1f → 0d58309 → cd44648 "change explore" major rewrite → 01ebc16 → 273c613) + the preserved `cognitive_harness/explore/references/explore_old.md` from the pre-rewrite version, no version has ever contained a comparison-axis-enumeration mechanism. Same for Critique's exemplar list and Sensemaking's sub-aspect list — illustrative lists grown by accumulation; project-architecture-invariants was never named. The fix is design-completion, not regression-recovery.

The 3 spec edits below are presented at level of detail the user can directly apply (or minor-refine + apply). Each respects the auto-memory's disciplines-self-contained principle. The MC1 branch-experiment-necessity verdict has been adjudicated by this inquiry's Critique: NOT REQUIRED; direct commit viable.

### How to read the three edits below

Each of the three sections that follows has the same shape:

- **Target file** — the exact path of the file to change.
- **Edit type** — one of: ADDITION (a new paragraph or block; nothing existing is touched) / INLINE EXTENSION (new text is inserted inside an existing paragraph or list; the existing text stays as-is around it) / REPLACEMENT (existing text is replaced with new text).
- **BEFORE** — the spec text exactly as it currently exists.
- **AFTER** — the spec text exactly as it should look once the edit is applied.
- **What's new** — the specific sentence/paragraph/clause that appears in AFTER but not in BEFORE. This is the only content that gets typed; everything else in AFTER is already in the file.

Apply each edit by replacing the BEFORE block with the AFTER block in the target file. (Or, if you prefer, just type the "What's new" content at the position described.)

---

### 1. MC1 — Exploration spec edit

**Target file:** `cognitive_harness/explore/references/explore.md`

**Edit type:** ADDITION. A new inline bold-rule paragraph is added to §3.1. No existing text is changed; the new paragraph goes between the existing "Key difference from /innovate" paragraph and the §3.2 heading.

**BEFORE** (current state of §3.1's tail, lines 120-130 approximately):

```markdown
### 3.1 Two operational modes

Modes are determined by the territory's type, not by the discipline's commitment.

- **Artifact mode** — the territory has concrete pre-existing objects (codebases, literature, existing systems). Scan = traverse and index. Probe = read deeper into a specific artifact.
- **Possibility mode** — the territory is conceptual; candidates must be generated to be placed on the map (solution spaces, design options, research directions). Scan = generate candidates at surface level. Probe = examine a candidate more closely.

**Completeness before novelty** (possibility mode). When scanning in possibility mode, explicitly scan for the standard/obvious approaches BEFORE scanning for novel ones. Generating only "creative" candidates and missing the obvious ones is a failure mode (see §4.1).

**Key difference from /innovate.** Possibility-mode exploration generates candidates for *completeness*; /innovate generates ideas for *novelty*. /explore must include the obvious approach on the map; /innovate would skip it. Different success criteria → different outputs.

### 3.2 Preliminary sub-phase: boundary-discovery
```

**AFTER** (same content, with one new paragraph added between "Key difference from /innovate" and "### 3.2"):

```markdown
### 3.1 Two operational modes

Modes are determined by the territory's type, not by the discipline's commitment.

- **Artifact mode** — the territory has concrete pre-existing objects (codebases, literature, existing systems). Scan = traverse and index. Probe = read deeper into a specific artifact.
- **Possibility mode** — the territory is conceptual; candidates must be generated to be placed on the map (solution spaces, design options, research directions). Scan = generate candidates at surface level. Probe = examine a candidate more closely.

**Completeness before novelty** (possibility mode). When scanning in possibility mode, explicitly scan for the standard/obvious approaches BEFORE scanning for novel ones. Generating only "creative" candidates and missing the obvious ones is a failure mode (see §4.1).

**Key difference from /innovate.** Possibility-mode exploration generates candidates for *completeness*; /innovate generates ideas for *novelty*. /explore must include the obvious approach on the map; /innovate would skip it. Different success criteria → different outputs.

**Comparison-axis enumeration** (possibility mode). When a possibility-mode scan produces a per-option comparison structure (pros/cons table; multi-attribute scoring grid; ranked list with stated criteria), enumerate the comparison axes explicitly BEFORE populating per-option cells. The axis list names at minimum: (a) the inquiry-question's stated criteria; (b) project-architecture invariants relevant to the option's domain (placement / coupling / installability boundaries; folder-independence commitments inherited from project structure); (c) constraints inherited via the inquiry's Synthesis Trigger (when applicable). The runner may add additional axes as substance warrants. The axis list is an artifact-observable output: a labeled row above option-rows OR a named axis-list above the table. Skipping enumeration and populating per-option cells under implicit axes is a Surface-Only Scanning instance applied to the comparison axis (see §4.1 #2); the visible cells are populated but the invisible axis-choice is unscanned.

### 3.2 Preliminary sub-phase: boundary-discovery
```

**What's new** (the only content that gets typed; everything else is already in the file): the single paragraph starting with **`**Comparison-axis enumeration**`** and ending with **`the invisible axis-choice is unscanned.`** It goes after the "Key difference from /innovate" paragraph and before the `### 3.2` heading. Leave a blank line above and below.

**Why this wording.**
- The trigger ("per-option comparison structure (pros/cons table; multi-attribute scoring grid; ranked list with stated criteria)") is narrow — informal 2-option discussions don't match. This prevents over-constrain.
- The axis list is permissive ("at minimum" + "may add additional axes as substance warrants") — the three named categories are floors, not exhaustive.
- The failure-mode reference to "§4.1 #2 Surface-Only Scanning" connects the new rule to language already in the same spec, so the rule feels native to the file's vocabulary.

**Risk: MEDIUM.** Affects every future possibility-mode run that produces a comparison structure. Mitigated by the narrow trigger phrase + permissive axis list.

**Auto-memory compliance:** the wording mentions project-architecture invariants, installability boundaries, folder-independence, and project structure as *concepts*. There are no path-form references like `docs/...` or `devdocs/...`. ✓

**Branch experiment NOT REQUIRED.** Critique adversarially tested this wording (over-constrain + under-constrain edge cases + runner-judgment-dependent cases) and the wording survived. Direct commit is viable.

---

### 2. MC2 — Critique spec edit

**Target file:** `cognitive_harness/td-critique/references/td-critique.md`

**Edit type:** INLINE EXTENSION. Two new sentences are appended to the END of an existing paragraph. The paragraph's existing text is unchanged; the new content goes at its tail.

**BEFORE** (the existing "Project-specific risk dimension check" refinement note, around line 178):

```markdown
*Refinement note (applies at Phase 0 Dimension Construction):*

**Project-specific risk dimension check.** When the candidate set being evaluated involves project artifacts, operations, or state, the dimension list must include at least one project-specific risk dimension that captures the project's documented risk axes. The default dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented; project-specific risk dimensions are mechanism-oriented (e.g., across recent inquiries: duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit have each been the load-bearing axis for specific candidate types). A dimension list that omits project-specific risk axes when the candidate set involves project artifacts/operations/state is incomplete; the validate-dimensions sub-step must explicitly check this and flag any missing axes for inclusion.
```

**AFTER** (same paragraph with two new sentences appended at the end):

```markdown
*Refinement note (applies at Phase 0 Dimension Construction):*

**Project-specific risk dimension check.** When the candidate set being evaluated involves project artifacts, operations, or state, the dimension list must include at least one project-specific risk dimension that captures the project's documented risk axes. The default dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented; project-specific risk dimensions are mechanism-oriented (e.g., across recent inquiries: duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit have each been the load-bearing axis for specific candidate types). A dimension list that omits project-specific risk axes when the candidate set involves project artifacts/operations/state is incomplete; the validate-dimensions sub-step must explicitly check this and flag any missing axes for inclusion. Project-architecture invariants are a current project example: when the candidate set affects placement, coupling, or installability of project artifacts, the dimension list should include a project-architecture-invariants axis (e.g., "does this candidate respect installability boundaries between this discipline's installable harness and repo-level content?"). A dimension list that omits architectural-invariant axes when the candidate set involves artifact placement or cross-folder coupling is incomplete.
```

**What's new** (the two sentences appended at the end of the existing paragraph):

> Project-architecture invariants are a current project example: when the candidate set affects placement, coupling, or installability of project artifacts, the dimension list should include a project-architecture-invariants axis (e.g., "does this candidate respect installability boundaries between this discipline's installable harness and repo-level content?"). A dimension list that omits architectural-invariant axes when the candidate set involves artifact placement or cross-folder coupling is incomplete.

Append these two sentences directly after the existing paragraph's last sentence ("...flag any missing axes for inclusion."). No new paragraph break; same paragraph continues with the new content.

**Why this wording.**
- The existing paragraph's exemplar list uses past tense ("across recent inquiries: X, Y, Z have been..."). Mixing a forward-looking exemplar into that past-tense list would be jarring. Putting the new content in two separate sentences after the existing list keeps the tenses clean.
- The example probe ("does this candidate respect installability boundaries between this discipline's installable harness and repo-level content?") uses the phrasing Critique adjusted from the original draft — it deliberately avoids the path-like string "cognitive_harness/" that could be misread as an outbound reference.

**Risk: LOW.** Two added sentences inside an existing paragraph. Easy to revert.

**Auto-memory compliance:** "this discipline's installable harness" and "repo-level content" are conceptual descriptors, not path references. ✓

**Branch experiment: NO.**

---

### 3. MC3 — Sensemaking spec edit

**Target file:** `cognitive_harness/sense-making/references/sensemaking.md`

**Edit type:** INLINE EXTENSION inside an existing list bullet. One new sub-aspect ("project-architecture-invariant probe") is inserted inside an existing bullet, between the last existing sub-aspect ("user-language alignment") and the closing sentence of that bullet ("The illustrative list is not exhaustive..."). The existing bullet's other sub-aspects and closing sentence are unchanged.

**BEFORE** (the relevant bullet inside the existing "Load-bearing concept test" refinement note at Phase 3, around line 424). The bullet starts with `- Phase 5 / Conceptual Stabilization output —`:

```markdown
- Phase 5 / Conceptual Stabilization output — final committed concepts (especially trigger-classifier rules and concepts whose use depends on a runtime determination) → test multiple sub-aspects: proxy-vs-structural ("does this categorical label represent a real structural distinction, or is it an incidental input property used as a proxy?"), discoverability ("if the concept's use depends on a runtime determination, has the determination mechanism been specified, or left implicit?"), and user-language alignment ("does the concept's name match the user's language, or has the loop coined a name without validation?"). The illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates.
```

**AFTER** (same bullet with one new sub-aspect inserted between "user-language alignment" and the closing "The illustrative list..." sentence). The word "and" before "user-language alignment" is removed; a new "and" is added before the new sub-aspect:

```markdown
- Phase 5 / Conceptual Stabilization output — final committed concepts (especially trigger-classifier rules and concepts whose use depends on a runtime determination) → test multiple sub-aspects: proxy-vs-structural ("does this categorical label represent a real structural distinction, or is it an incidental input property used as a proxy?"), discoverability ("if the concept's use depends on a runtime determination, has the determination mechanism been specified, or left implicit?"), user-language alignment ("does the concept's name match the user's language, or has the loop coined a name without validation?"), and project-architecture-invariant probe ("does this concept respect the project's architectural invariants — installability boundaries, folder-independence commitments, artifact-boundary placement — or does it implicitly couple to a layer outside the discipline's scope?"). The illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates.
```

**What's new** — two small changes to the existing bullet:

1. The phrase **`and user-language alignment`** loses the word `and` and becomes just `user-language alignment`. (Because the new sub-aspect now sits between user-language alignment and the closing sentence, so "and" moves to before the new sub-aspect.)
2. A new sub-aspect is inserted: **`, and project-architecture-invariant probe ("does this concept respect the project's architectural invariants — installability boundaries, folder-independence commitments, artifact-boundary placement — or does it implicitly couple to a layer outside the discipline's scope?")`**

Both changes happen inside the same bullet. Nothing outside that bullet changes.

**Why this wording.**
- The existing sub-aspects are formatted as a name + parenthetical question in single quotes. The new sub-aspect follows the same pattern.
- The closing sentence of the bullet — "The illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates" — explicitly invites this kind of extension. The new sub-aspect is exactly the case it described.

**Risk: LOW.** One sub-aspect added to a list the spec explicitly says is extensible.

**Auto-memory compliance:** the new probe names architectural invariants conceptually; no path references. ✓

**Branch experiment: NO.**

### 4. Cross-discipline coherence — defense-in-depth across 3 stages

| Stage | Discipline | Rule | When it fires | What it catches |
|---|---|---|---|---|
| SURFACE | Exploration | MC1 — Comparison-axis enumeration | When possibility-mode produces a per-option comparison structure | Comparison-axes (including project-architecture invariants) named BEFORE populating per-option cells |
| STABILIZE | Sensemaking | MC3 — project-architecture-invariant probe sub-aspect | Phase 3 load-bearing concept test at Phase 5 / Conceptual Stabilization output | Architectural-invariant probe surfaces "does the concept respect installability boundaries?" |
| ADVERSARIAL-TEST | Critique | MC2 — project-architecture-invariants axis in Phase 0 | Phase 0 Dimension Construction when candidate affects placement, coupling, installability | Dimension list includes project-architecture-invariants when relevant |

Each rule fires at a DIFFERENT pipeline stage. Defense-in-depth structure: if MC1 misses (runner doesn't enumerate axes at Exploration's R10-equivalent), MC3 catches at Sensemaking's concept-stabilization. If MC1 + MC3 both miss, MC2 catches at Critique's adversarial prosecution.

**Pattern-naming amplification.** Each edit NAMES the project-architecture-invariants pattern + gives concrete examples (installability boundaries; folder-independence commitments). Pattern-naming lowers the bar for future runners' pattern-matching — even runners unfamiliar with the specific 02-15 incident can pattern-match a placement question against the named category.

**Effectiveness: MEDIUM-HIGH** per Sensemaking Phase 3's load-bearing concept test on the coherence claim. NOT infallible — depends on runner-compliance + runner's ability to recognize specific architectural-invariant instances per inquiry. Substantial improvement over status quo (no mechanism at all).

### 5. Sequencing recommendation

Critique-updated sequencing (the 21-00-30 finding's MC1-deferred recommendation has been discharged):

**All 3 spec edits can commit directly + immediately.** No asymmetric staging required. The proposed wording for each has been adversarially tested via Critique's prosecution. The Critique-REFINE on MC2 (path-like-string removal) has been applied to the proposed wording above.

**Recommended commit order (operational, not gating):**
1. **MC2** — LOW-RISK; 1-sentence append. Quick win.
2. **MC3** — LOW-RISK; 1 sub-aspect addition. Quick win.
3. **MC1** — MEDIUM-RISK; new inline rule paragraph. Critique-approved direct commit; no branch experiment needed.

Each commit is independent of the others (no prerequisite dependencies). Order suggestion is operational sequence (smallest to largest), not gating.

### 6. Compliance record: auto-memory + Layer-3 §9 + Inherited Frame Audit

**Auto-memory compliance per edit:**

| Edit | Wording references | Outbound paths? | Compliance |
|---|---|---|---|
| MC1 | project-architecture invariants; installability boundaries; folder-independence; Synthesis Trigger; project structure | NONE | ✓ COMPLIANT |
| MC2 (post-REFINE) | project-architecture-invariants; installability boundaries between this discipline's installable harness and repo-level content; artifact placement; cross-folder coupling | NONE | ✓ COMPLIANT |
| MC3 | project's architectural invariants; installability boundaries; folder-independence commitments; artifact-boundary placement; layer outside the discipline's scope | NONE | ✓ COMPLIANT |

The auto-memory's literal scope (per `feedback_disciplines_self_contained.md`): "outbound pointers to design-history, theory, or other folders — for example, 'design history preserved at <docs|enes>/...' or 'see also <docs|enes>/...'." None of the 3 wordings use path-form references; all use concept-form prose. ✓ COMPLIANT across all 3.

**Layer-3 §9 self-application record:**

Property (v) of the Meta-Decision-Piece Criterion (per `cognitive_harness/innovate/references/innovate.md` Phase 2 Generate) FIRES at the MC1/MC2/MC3 pieces of this inquiry's Innovation step. Each piece's candidate text commits an explicit ADD-CONTENT intervention shape (named per the Intervention-Shape Vocabulary) that downstream-discipline behavior would operate under if the user commits the edits. The Piece-Level Inversion at Meta-Decision Pieces refinement note (innovate.md lines 385-396) + the Intervention-Shape-Axis Inversion at Property-(v) Pieces refinement note (innovate.md lines 399-410) BOTH apply.

Per-piece Inversion compliance verified:
- MC1 piece: alternative shape REPAIR named (modify existing "Completeness before novelty" rule instead); what-follows stated; 5-test applied; override `Intervention-shape-Inversion-marked-inapplicable: ADD-CONTENT shape preserves bounded trigger conditions specific to axis-enumeration; REPAIR would couple two distinct concerns and obscure the bounded trigger.` Reason structural + contextual.
- MC2 piece: alternative shape REORGANIZE-WITHOUT-ADDING named; what-follows stated; 5-test applied; override with structural + contextual reason.
- MC3 piece: alternative shape REPAIR named (modify existing user-language-alignment sub-aspect); what-follows stated; 5-test applied; override with structural + contextual reason.

All 3 per-piece Inversion overrides satisfy the 6-component compliance criterion (structural reason + contextual reason + not empty + not generic + not single-component + not abuse-vector).

**Methodology-Mode Consideration at seed time:**

Standard default mode inherited; Contrarian-rethink Framer-weighted alternative considered + narratively rejected (per Sensemaking SV3 + SV4 + Phase 5 stabilization + the user's "run the full mvl loop as i asked" directive + LOOP_DIAGNOSE Step 5 guardrail). Override pattern `Methodology-mode-alternative-marked-inapplicable:` NOT invoked verbatim (narrative rejection per established documentation/structural-seed practice 00-15 / 01-10 / 02-15 / 03-30 / 21-00-30 + 06-00 i2 ACTIVE-NO-OVERRIDE).

**Layer-3 §9 RECORDED-OVERRIDE count remains N=4** (unchanged since the 23-00 A1 branch experiment design inquiry).

**Pattern advances to N=12 cumulative discipline-prevents-Layer-3-advancement inquiries.**

**Inherited Frame Audit override** for this inquiry's Innovation: RECORDED + COMPLIANT. Sensemaking SV3 (8 perspectives) + SV4 (6 ambiguity-collapses + 1 load-bearing concept test) + Phase 5 stabilization (4 named failure-mode checks) collectively discharged the challenge obligation upstream. The 6-component compliance criterion at innovate.md lines 479-484 is satisfied.

### 7. What is NOT in scope

Per the 21-00-30 LOOP_DIAGNOSE finding's Section 7 deferrals + Step 5 protocol guardrails:

- **MC4 — cross-discipline comparison-axis-enumeration protocol.** Deferred to monitoring observable. One correction-chain incident (this case) is insufficient evidence per the LOOP_DIAGNOSE protocol Step 5 guardrail ("Only propose a source edit when the evidence is strong enough to justify a change"). If the comparison-axis-enumeration gap recurs in 2+ additional inquiries after MC1+MC2+MC3 commit, MC4 strengthens to actionable.

- **MC5 — auto-memory widening.** REJECTED per 21-00-30 + this inquiry's Sensemaking Ambiguity-5-equivalent. The auto-memory is a user-feedback artifact; widening is not the assistant's role. The orchestration-pattern-matching mechanism is the proper failure-surface address (MC6).

- **MC6 — orchestration improvement (memory-spirit pattern-matching at runtime decisions).** INVESTIGATION-FIRST per 21-00-30. Outside the discipline-spec system; needs design work before any edit. A future orchestration-design inquiry would adjudicate.

- **Innovation discipline comparison-structure gap.** Innovation produces mechanism applicability matrices that are conceptually similar comparison structures, but the 02-15 → 21-00-30 evidence base doesn't establish the gap at Innovation. Deferred to MC4 monitoring observable per 21-00-30. If post-MC1-MC2-MC3-commit a similar miss recurs at Innovation's comparison-structures, MC4 strengthens to include Innovation in its scope.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger inheriting from 8 priors.

- **Prior 1:** 21-00-30 LOOP_DIAGNOSE finding (`devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/finding.md`). **Commitment:** Primary cause attribution (Exploration §3.1) + CONTRIBUTING (Critique Phase 0 + Sensemaking Phase 3) + MC1/MC2/MC3 candidates with risk/reach/branch-experiment framing. **RE-TESTED.** Evidence: this finding operationalizes MC1/MC2/MC3 with concrete wording at Sections 1-3; the 21-00-30 attribution is honored (no re-litigation); the branch-experiment recommendation for MC1 is updated by this inquiry's Critique discharge (NOT REQUIRED), with explicit reasoning.

- **Prior 2:** 02-15 finding (`devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/finding.md`). **Commitment:** Section 7 docs/-location recommendation (now superseded by the user correction that triggered the 21-00-30 LOOP_DIAGNOSE). **RE-TESTED.** Evidence: this finding's surrounding context acknowledges the superseded recommendation; the MC edits enable future re-adjudication of 02-15's location question under the corrected axis-set.

- **Prior 3:** 03-30 finding (`devdocs/inquiries/2026-05-20_03-30__layer_3_section_9_trigger_redesign_deep_dive/finding.md`). **Commitment:** Section 6 inherited the same 4-option location frame uncorrected; established the Layer-3 §9 dual-record framing correction. **RE-TESTED.** Evidence: this finding's Layer-3 §9 self-application record (Section 6) applies the corrected dual-record framing (Property (v) fires + narrative rejection + count stays); 03-30's lesson preserved.

- **Prior 4:** `cognitive_harness/explore/references/explore.md`. **Commitment:** §3.1 possibility-mode procedure + §3.5 "Type-aware probing" structural precedent pattern + §4.1 #2 Surface-Only Scanning failure mode. **RE-TESTED.** Evidence: MC1 spec edit specifies insertion at §3.1 + matches §3.5 inline bold-rule pattern + references §4.1 #2 failure mode language; verbatim quotes verified by direct file read at this inquiry's Exploration phase.

- **Prior 5:** `cognitive_harness/td-critique/references/td-critique.md`. **Commitment:** Phase 0 "Project-specific risk dimension check" refinement note's existing exemplar list + past-tense framing. **RE-TESTED.** Evidence: MC2 spec edit extends the existing paragraph with a new forward-looking sentence preserving tense consistency; verbatim quote of the existing refinement note verified at Exploration phase.

- **Prior 6:** `cognitive_harness/sense-making/references/sensemaking.md`. **Commitment:** Phase 3 "Load-bearing concept test" refinement note's Phase 5 sub-aspect list + the explicit "illustrative list is not exhaustive" extension framing. **RE-TESTED.** Evidence: MC3 spec edit adds a new sub-aspect within the existing list per the spec's own extension framing; verbatim quote verified at Exploration phase.

- **Prior 7:** Auto-memory `~/.claude/projects/-Users-ns-Desktop-projects-native/memory/feedback_disciplines_self_contained.md`. **Commitment:** disciplines-self-contained principle (no outbound pointers from runtime reference files to other folders). **RE-TESTED.** Evidence: per-edit auto-memory compliance verification at Section 6 (with Critique's REFINE on MC2 applied to ensure path-like ambiguity removed).

- **Prior 8:** Git history of the Exploration spec (7 commits + `explore_old.md` preserved from cd44648 rewrite). **Commitment:** the comparison-axis-enumeration gap is design-original, not regression. **RE-TESTED.** Evidence: surrounding context cites the git evidence chain; the spec edits are framed as design-completion, not regression-recovery.

**Total: 8 priors named. 8/8 RE-TESTED with cited evidence. 0 INHERITED-WITHOUT-RE-TEST. No silent inheritance.**

---

## Next Actions

### COULD

- **Apply MC2 spec edit** at `cognitive_harness/td-critique/references/td-critique.md` Phase 0 "Project-specific risk dimension check" refinement note. Append the proposed sentence at the end of the existing paragraph.
  - **Who:** project lead via direct edit.
  - **Gate:** observable — when project decides to commit defense-in-depth improvements.
  - **Why:** LOW-RISK additive; closes a TYPE-A gap with HIGH evidence.

- **Apply MC3 spec edit** at `cognitive_harness/sense-making/references/sensemaking.md` Phase 3 "Load-bearing concept test" refinement note. Insert the new sub-aspect within the Phase 5 / Conceptual Stabilization output bullet.
  - **Who:** project lead via direct edit.
  - **Gate:** observable — when project decides to commit defense-in-depth improvements.
  - **Why:** LOW-RISK additive; the spec explicitly invites extension; closes a TYPE-A gap.

- **Apply MC1 spec edit** at `cognitive_harness/explore/references/explore.md` §3.1 after the existing "Key difference from /innovate" paragraph. Insert the new inline bold-rule.
  - **Who:** project lead via direct edit.
  - **Gate:** observable — when project decides to commit the PRIMARY-cause fix.
  - **Why:** MEDIUM-RISK additive; broadest reach (affects all future possibility-mode runs producing comparison structures); Critique-approved direct commit (no branch experiment required).

- **Monitor for MC4 evidence accumulation.** Per 21-00-30 LOOP_DIAGNOSE Step 5 guardrail. If 2+ additional inquiries surface the comparison-axis-enumeration gap (especially at Innovation's mechanism applicability matrices), MC4 (cross-discipline protocol) strengthens to actionable.
  - **Who:** project lead during routine inquiry execution.
  - **Gate:** observable — 2+ additional correction-chain incidents.
  - **Why:** evidence-accumulation before cross-cutting commit.

- **MC6 orchestration investigation** — Future inquiry investigating runtime memory-spirit pattern-matching mechanism design (per 21-00-30).
  - **Who:** project lead via /MVL+ orchestration-design inquiry.
  - **Gate:** condition-bound — when project decides to formally specify the orchestration layer.

### DEFERRED

- **MC4 cross-discipline protocol** — deferred to monitoring observable status (see above).
- **MC5 auto-memory widening** — REJECTED; not revivable as proposed.
- **Post-commit empirical validation** — observe whether MC1+MC2+MC3 catch the class of miss in future inquiries.
  - **Gate:** observable — a future inquiry where the same kind of placement/coupling/installability question arises and the rules fire correctly.
  - **Why (if revived):** strengthens or weakens the diagnostic's hypothesis confidence; informs whether MC4 cross-cutting commit is needed.

---

## Reasoning

### Why direct commit for MC1 instead of branch experiment

The 21-00-30 LOOP_DIAGNOSE finding recommended "PROBABLY YES branch experiment" for MC1 with CAUTION reasoning ("structurally significant; branch experiment would test the spec-edit design before commit"). This inquiry's Critique adversarially prosecuted the MC1 wording:

- **Over-constrain edge case** (informal 2-option discussions triggering the rule unnecessarily): defeated by the trigger phrase "per-option comparison STRUCTURE (pros/cons TABLE; multi-attribute scoring GRID; ranked list with STATED CRITERIA)." Informal text doesn't match "structure."
- **Under-constrain edge case** (axes-without-labeled-row): defeated by the artifact-observable requirement ("a labeled row above option-rows OR a named axis-list above the table").
- **Subtler runner-judgment edge case** (architectural-invariant category named but specific instance missed by runner): this limitation is INTRINSIC to any spec mechanism. The wording names the category; runners apply judgment per inquiry. Not wording-fixable.

The wording survives strong prosecution. The remaining limitations are not branch-experiment-resolvable (a branch experiment would surface the same runner-judgment dependency). Direct commit viable. The 21-00-30 CAUTION-recommendation is discharged.

### Why mixed-attribution sequencing was discharged

The 21-00-30 finding's MC1-deferred sequencing (MC2+MC3 first, MC1 after Critique) was conditional on Critique's outcome. This inquiry's Critique cleared MC1 for direct commit. The asymmetric sequencing is no longer warranted. All 3 can commit directly + immediately.

### Why Innovation's comparison-structure gap is out of scope

Per 21-00-30 LOOP_DIAGNOSE Step 5 guardrail: "Only propose a source edit when the evidence is strong enough to justify a change. Otherwise propose a monitoring question or another diagnostic run." Innovation's mechanism applicability matrices are conceptually similar to Exploration's comparison structures, but the 02-15 → 21-00-30 evidence base specifically identified the gap at 3 disciplines (Exploration / Critique / Sensemaking), not at Innovation. Including Innovation in this inquiry's scope without evidence would violate the LOOP_DIAGNOSE protocol's "Maintenance overreach" guardrail.

### Why the auto-memory wording is exempt from blame

Per Sensemaking + Critique re-tests of 21-00-30's EXEMPT-FROM-BLAME framing: the auto-memory is a user-feedback artifact. Widening its letter would be the assistant rewriting user content. The orchestration layer's failure to elevate the memory's spirit is the proper failure-surface address (MC6 investigation), not the memory's narrow wording. This finding honors that framing.

### Critique's REFINE on MC2 wording

The Critique surfaced a path-like ambiguity in MC2's original wording ("installability boundaries between cognitive_harness/ and repo-level folders"). While the string "cognitive_harness/" referred to the spec's OWN enclosing folder (self-reference) rather than an outbound pointer, a stricter reading could object that path-like strings in discipline runtime reference files violate the auto-memory's spirit. The REFINE replaced the path-like string with conceptual anchoring: "this discipline's installable harness and repo-level content." This is the version above in Section 2; the original Innovation draft is superseded.

---

## Open Questions

### Monitoring

- **Whether MC1+MC2+MC3 catch the class of miss in future inquiries.** After commit, observe whether the rules fire correctly when placement/coupling/installability questions arise. If they fire correctly, evidence accumulates for the diagnostic's hypothesis. If misses persist, MC4 or MC6 strengthens.

- **Innovation discipline comparison-structure gap.** Monitor for whether Innovation's mechanism applicability matrices exhibit the same kind of miss. If yes, MC4 cross-discipline protocol candidate strengthens.

- **Pattern recurrence at non-architectural-invariant axes.** The 02-15 case was about cognitive_harness-installability axis specifically. If future inquiries miss DIFFERENT comparison axes (cost; risk; coupling-strength; etc.), the spec edits' "at minimum" framing + "may add additional axes" permissive clause is the design point — observe whether runners use the permissive clause appropriately.

### Blocked

- **Empirical validation of fix effectiveness.** Cannot be answered until (i) the edits commit + (ii) future inquiries either fire the rules correctly or surface continued misses.

### Research Frontiers

- **Cross-discipline comparison-axis-enumeration protocol.** Deferred to MC4 monitoring observable status. A future research-frontier inquiry would design the cross-discipline protocol if evidence accumulates.

- **Orchestration layer formal specification.** Per 21-00-30 MC6. A future research-frontier inquiry would design the orchestration mechanism for runtime memory-spirit pattern-matching.

### Refinement Triggers

- **A second correction-chain incident.** If a similar class of miss surfaces with 2-sided evidence (corrected_path inquiry available), this finding's spec-edit wordings would be re-examined with stronger evidence base.

- **MC1 spec edit commit outcomes.** If post-commit Exploration runs produce unexpected behavior (e.g., over-constrain on legitimate informal comparisons), MC1 wording would be revisited.

- **Auto-memory principle widens.** If the user updates the auto-memory to broaden its scope (e.g., to explicitly state "cognitive_harness/ as a whole must be installable; no outbound dependencies from any cognitive_harness/ file"), this finding's compliance verification would be re-run against the updated principle.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
run the full mvl loop as i asked
```

(Original /MVL+ trigger: "this is bad. is this caused by recent update to explore ? or it is included in old version too ? how to fix this?")

</details>
