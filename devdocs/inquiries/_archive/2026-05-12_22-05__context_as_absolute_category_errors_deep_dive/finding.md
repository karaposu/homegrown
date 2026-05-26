---
status: active
continues_from: devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md
related: devdocs/inquiries/2026-05-12_16-59__navigation_requires_holistic_understanding/finding.md
related: devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/docarchive/finding_iter1.md
related: devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/finding.md
related: devdocs/inquiries/2026-05-12_20-51__navigate_warrants_separate_discipline/finding.md
---

# Finding: "Context-as-absolute category errors" is structurally TWO families — name Family A as /sense-making failure mode #7 "Operation-Status Drift"; Family B stays research-frontier

## Question

From `_branch.md`: *What is the precise structure of the "context-as-absolute category errors" failure pattern observed in three sibling instances across recent inquiries — is it one family or several? What is its detection mechanism? What is its corrective? How does it relate to existing failure modes? Should it be elevated to a project-wide named failure-mode entry NOW or remain research-frontier?*

Goal: a structurally-grounded understanding sufficient to name the pattern precisely, locate it in the failure-mode taxonomy, specify detection + corrective, and decide actionability.

---

## Finding Summary

- **The pattern is structurally TWO families, not one.** "Context-as-absolute" works as a meta-family label connecting them, but the two operate at categorically different structural levels and need separate detection mechanisms and correctives. Treating them as one family would obscure their operational differences.

- **Family A — "Operation-Status Drift" — is READY for project-wide naming.** A discipline-analysis claim elevates a sub-discipline entity (a parameter, an annotation/output-content field, or a sub-step of an existing operation) to operation-level / component-level / new-cognitive-step status. Two observed instances: territory-as-operation (the 16-59 finding's Setup sub-phase wrongly elevated /explore-on-SIC-territory to a new operation); annotation-as-operation (iter-1 of 19-43 wrongly elevated per-route fields like Movement, Guide, and Continuation to additive operations).

- **Family B — "Inherited-Claim-as-Canonical" — remains research-frontier.** An inquiry treats a prior finding's claim as if it were canonical-spec authoritative without checking the relevant discipline's canonical spec for contradiction. One observed instance (the LOOP_DIAGNOSE's diagnosis of iter-1 of 19-43 trusting the 11-40 factoring finding's Select component without canonical check). One instance is thin for project-wide naming; revival trigger is one or more additional cross-finding-inheritance-authority-confusion instances observed.

- **Family A's detection mechanism (D1) is a 3-step check** applied when an inquiry analyzes a discipline and proposes adding a new operation / component / cognitive step:
  1. Is the proposed operation `/explore` applied to a different territory? Test: does it produce a confidence-tagged map of surfaced items?
  2. Is the proposed operation a per-item content field in an existing operation's output? Test: is it a route-card field, an annotation, a per-item descriptor?
  3. Is the proposed operation a sub-step of an existing operation? Test: does it occur as part of producing the existing operation's Transform? (Step 3 is speculative coverage; activated when a sub-step-as-operation instance is observed in practice.)
  If any of (1), (2), or (3) returns YES, the proposed item is NOT a new operation; the claim represents Operation-Status Drift.

- **Family A's corrective (C1):** retract the operation-elevation; re-classify the entity at its correct level (parameter, annotation, or sub-step). Document the re-classification explicitly.

- **Family A's primary placement: BOTH a failure mode entry AND a perspective sub-aspect in `/sense-making`'s canonical spec at `homegrown/sense-making/references/sensemaking.md`.** This matches the existing `/sense-making` pattern where failure mode #2 (Premature Stabilization) appears as a NAMED FAILURE PATTERN with cross-references to refinement notes under Phase 3 and Phase 5 perspectives — the failure mode captures the pattern; the refinement notes specify operational checks. Family A gets the same dual placement:
  - **As failure mode #7** ("Operation-Status Drift") in `/sense-making`'s failure mode list: describes the pattern with recognition signals and prevention notes.
  - **As a refinement note** under Phase 2's Definitional / Internal Consistency perspective: specifies the D1 3-step check operationally.
  - The two locations cross-reference each other.

- **Family A is distinct from `/explore` failure mode #7 (open→closed drift).** Both use "drift" but at categorically different structural levels. `/explore`'s open→closed drift is within-discipline-mode-drift (open-mode surfacing slides into closed-mode interpretive operations during scanning). Operation-Status Drift is within-discipline-analysis level-elevation (a sub-discipline entity is elevated to operation-level during analysis of a discipline's structure). The two patterns are siblings — they both involve a claim sliding across a structural boundary — but they slide across different boundaries. Cross-references in both locations disambiguate.

- **A cross-reference table consolidates existing-failure-mode coverage:**
  - Family A partially covered by `/explore` failure mode #7 (open→closed drift; covers annotation-as-operation aspect) and `/sense-making` failure mode #5 (Clean Resolution Trap; covers the elegant-elevations-feel-right aspect).
  - Family B partially covered by `/sense-making` failure mode #1 (Status Quo Bias; covers prior-finding-because-it-exists aspect) and `/td-critique` failure mode #4 (Dimension Blindness; covers missing-canonical-spec-dimension aspect).
  - Family A's new entry consolidates the fragmented coverage; it doesn't replace existing modes but adds a meta-level lens.

- **The meta-family label "context-as-absolute category errors" is preserved as a cross-reference connector, NOT as a directly-actionable name.** Families A and B both belong to a meta-pattern of "elevating-something-contextual-to-absolute-status," but the meta-name doesn't operationalize detection. Each family has its own detection and corrective. The meta-label serves as connective tissue for future-family detection (potential Family C, D, etc., not yet observed).

- **This finding might be wrong.** The loop's track record this session is mixed (multiple corrections). External grounding via the three prior-finding artifact-level instances + `/sense-making`'s existing failure-mode pattern + canonical-spec content protects against most self-reference collapse but does not eliminate it. Iteration 3 invited if a future user observation or analysis reveals an error.

---

## Finding

### Surrounding context

The recent inquiry thread observed three failure instances that appeared to share a meta-pattern. The LOOP_DIAGNOSE finding (at `devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md`) provisionally named the meta-pattern "context-as-absolute category errors" and flagged it as a research-frontier item, deferring project-wide naming until the pattern's structure was understood more precisely. This inquiry is that deeper dive.

The three observed instances:
1. **Territory-as-operation** (in the 2026-05-12_16-59 holistic-understanding finding): /explore-applied-to-the-SIC-output-territory was wrongly named "Setup sub-phase" as a new operation/depth/component in /navigate.
2. **Annotation-as-operation** (in iter-1 of the 2026-05-12_19-43 inquiry, now archived at `docarchive/finding_iter1.md`): per-route content fields (Movement-articulation, Guide pointers, Continuation memory) in /navigate's route-card structure were wrongly elevated to additive operations beyond /explore-specialization.
3. **Prior-finding-authority-as-canonical** (diagnosed in the 2026-05-12_20-31 LOOP_DIAGNOSE): iter-1 of the 19-43 inquiry trusted the 2026-05-12_11-40 factoring finding's "Select as Component 4" commitment as authoritative, without checking /navigate's canonical spec which explicitly NOT-listed Decision-making.

The deep dive's question: are these three instances ONE family at a single structural level, several distinct patterns at different levels, or something else?

### 1. The verdict: TWO families, not one

The three instances share a meta-pattern at the most abstract level — all three involve treating something CONTEXTUAL as if it were ABSOLUTE. But at the operational level, the instances cluster into TWO categorically distinct groups:

- **Group A (instances 1 + 2)** operates at the WITHIN-DISCIPLINE-ANALYSIS level. Both instances are inside a single inquiry's analysis of a discipline's structure. Both elevate a sub-discipline-level entity (a territory specialization in instance 1; per-item annotation content in instance 2) to operation-level. The detection check for both is the same predicate type: "is this proposed operation actually a parameter / annotation / sub-step of an existing operation?"

- **Group B (instance 3)** operates at the CROSS-FINDING-INHERITANCE level. The instance crosses inquiry boundaries: it inherits a claim from one finding and treats it as canonical-spec authoritative without checking. The detection check is a different predicate type: "is this inherited claim contradicted by the relevant canonical spec?"

The two groups share the meta-pattern (level-confusion / elevating-something-contextual-to-absolute-status), but their detection mechanisms and correctives are different. Treating them as ONE family with ONE detection would obscure the operational difference and produce a check that works in neither case. Treating them as THREE separate patterns (one per instance) would miss the structural similarity between instances 1 and 2.

Therefore the structurally correct decomposition is TWO families:
- Family A (within-discipline-analysis level): Operation-Status Drift.
- Family B (cross-finding-inheritance level): Inherited-Claim-as-Canonical.

### 2. Family A — Operation-Status Drift

**Structural definition.** A discipline-analysis claim elevates a sub-discipline entity to operation-level / component-level / new-cognitive-step status when the entity actually belongs at a lower abstraction level.

The "sub-discipline entity" can take one of three forms:
1. A territory specialization (a parameter of an existing operation — e.g., /explore applied to a specific territory type).
2. A per-item annotation or output content field (content produced by an existing operation, not a separate cognitive step).
3. A sub-step within an existing operation (an internal stage of producing the existing operation's Transform).

When any of these is mistaken for a new operation, the analysis claims that the discipline has MORE operations than it actually has. The discipline's structure becomes inflated.

**Detection mechanism (D1) — 3-step check.** When an inquiry analyzes a discipline and proposes a new operation, component, or cognitive step:

1. **Territory check.** Is the proposed operation `/explore` applied to a different territory? Test: does it produce a confidence-tagged map of surfaced items? If yes, it is `/explore` over a different territory (a Step 0 parameter declaration via `territory-type-mode`), not a new operation.

2. **Annotation check.** Is the proposed operation a per-item content field in an existing operation's output? Test: is it a route-card field, an annotation layer, a per-item descriptor? If yes, it is an annotation, not a separate cognitive step. Internal structure of the content (e.g., guidance modes with WHY pointers) is content-shape, not operation status.

3. **Sub-step check** *(speculative coverage; activated when 1+ sub-step-as-operation instance is observed in practice).* Is the proposed operation a sub-step of an existing operation? Test: does it occur as part of producing the existing operation's Transform? If yes, it is a sub-step, not a separate operation.

If ANY of (1), (2), or (3) returns YES, the proposed item is NOT a new operation; the claim represents Operation-Status Drift.

**Corrective (C1).** Retract the operation-elevation. Re-classify the entity at its correct level (parameter, annotation, or sub-step). Document the re-classification explicitly in the discipline-analysis output. Update any cross-references that referenced the elevated form.

### 3. Family A's placement in `/sense-making`'s canonical spec

**Family A goes in BOTH a failure mode entry AND a perspective sub-aspect, matching the existing /sense-making pattern.** Examining /sense-making's canonical at `homegrown/sense-making/references/sensemaking.md`: failure mode #2 (Premature Stabilization) appears as a NAMED FAILURE PATTERN in the Failure Modes section AND has refinement notes specifying operational checks under Phase 3 (Load-bearing concept test; Specific-vs-pattern recognition cue) and Phase 5 (Accommodation trigger). The failure mode entry captures the pattern; the refinement notes specify the operational checks; the two cross-reference each other. This is the existing project pattern for failure-pattern + operational-check placement.

Family A gets the same dual placement:

**Failure mode #7 (NEW) — "Operation-Status Drift."** Lives in `/sense-making`'s Failure Modes section alongside the existing six failure modes. Format follows existing entries:
- Brief structural definition.
- "How to recognize" — the symptoms (proposed operation has identical input/output to an existing operation; proposed operation is consistently described as content-of vs separate-step; reviewer or downstream discipline finds the elevation unjustified on canonical-spec check).
- "How to prevent" — apply the D1 3-step check; cross-reference to the Phase 2 refinement note.
- Cross-references to `/explore` failure mode #7 (open→closed drift), `/sense-making` failure mode #5 (Clean Resolution Trap), and the Phase 2 refinement note that specifies D1.

**Phase 2 refinement note — Operation-Status Drift Detection.** Lives under Phase 2's Definitional / Internal Consistency perspective. Specifies the D1 3-step check operationally:
- The 3 steps as listed above.
- Step 3 marked "speculative coverage; activate when 1+ sub-step-as-operation instance is observed."
- Cross-reference back to failure mode #7.

### 4. Disambiguating Operation-Status Drift from /explore failure mode #7 (open→closed drift)

Both failure modes use "drift" in their names; both involve a claim sliding across a structural boundary. They are SIBLING PATTERNS but at categorically different boundaries:

- **`/explore` failure mode #7 (open→closed drift):** within-discipline-mode-drift. `/explore`'s relevance/adjacency annotations begin to claim relational meaning, drifting from open-mode surfacing into closed-mode interpretive operations (sense-making's territory). The drift is mode-level: the annotation's content-type slides from descriptive observation to interpretive claim during scanning.

- **`/sense-making` failure mode #7 (Operation-Status Drift):** within-discipline-analysis level-elevation. A discipline-analysis claim elevates a sub-discipline entity to operation-level. The drift is structural-level: an entity's status slides from sub-operation-level (parameter / annotation / sub-step) to operation-level during analysis.

The two patterns are real, distinct, and worth naming separately. Cross-references in both locations disambiguate.

### 5. Family B — Inherited-Claim-as-Canonical (research-frontier)

**Structural definition (working).** An inquiry treats a prior finding's claim as if it were canonical-spec authoritative, without checking the relevant discipline's canonical spec for contradiction. The prior finding is a CONTEXTUAL ARTIFACT (a snapshot of past reasoning); the canonical spec is the discipline's AUTHORITATIVE structure. The inquiry confuses the two.

**Detection mechanism (D2) — 2-step check, bundled with LOOP_DIAGNOSE Candidate A.** When an inquiry inherits a structural claim from a prior finding:
1. Is the relevant discipline's canonical spec loaded into the working context? If no, LOAD it.
2. Does the inherited claim contradict the canonical spec? Specifically: does the canonical's NOT-list or identity-defining content explicitly exclude the inherited claim's substance? If yes, the inherited claim is presumptively wrong; investigate before propagating.

**Corrective (C2).** If contradiction found, the canonical wins; retract the inherited claim OR flag for explicit user resolution.

**Status: RESEARCH-FRONTIER.** Only one observed instance (LOOP_DIAGNOSE's diagnosis of iter-1 of 19-43 trusting the 11-40 finding's Select component). One instance is thin for project-wide naming. Revival trigger: 1+ additional cross-finding-inheritance-authority-confusion instance observed. The pattern is real and the detection mechanism is operationalizable, but premature naming risks over-specifying based on one example.

When Family B is promoted from research-frontier to actionable, it would become `/sense-making` failure mode #8 (or wherever the failure-mode numbering lands at that time) with the same dual placement pattern: failure mode entry + refinement note (likely under Phase 2 Frame-exit Completeness perspective or a new perspective specifically for cross-artifact-inheritance checks).

### 6. The meta-family label "context-as-absolute category errors"

**Status: cross-reference connector, NOT directly-actionable.** The label captures the meta-pattern shared by Families A and B (elevating something contextual to absolute status; level-confusion). But the meta-label does NOT specify a detection mechanism — Families A and B have different detection mechanisms and require different correctives. Naming the meta-pattern directly-actionable would create a check that fails in either case.

The meta-label serves as connective tissue for future-family detection. If a future inquiry surfaces a third pattern (potential Family C: e.g., runner-vs-discipline confusion; autonomy-level-confusion; iteration-spanning-confusion) that fits the meta-pattern, the connection is easier to recognize because the meta-label exists.

In the new failure mode #7 entry, a footnote-style cross-reference notes: "This failure mode belongs to a broader family informally labeled 'context-as-absolute category errors' (treating something contextual as if it were absolute). Family B (Inherited-Claim-as-Canonical) is the sibling pattern at the cross-finding-inheritance level; currently research-frontier."

### 7. Cross-reference table

Existing failure modes partially cover the patterns. The cross-reference table consolidates the coverage:

| Existing failure mode | Covers (which family + which aspect) | Status |
|---|---|---|
| `/explore` #7 (open→closed drift) | Family A — annotation-as-operation aspect (annotation claims interpretive meaning) | Partial |
| `/sense-making` #5 (Clean Resolution Trap) | Family A — elegant-elevations-feel-right aspect (Setup sub-phase felt elegant; 4 additive operations felt elegant) | Partial |
| `/sense-making` #1 (Status Quo Bias) | Family B — defending-existing-because-it-exists aspect (the 11-40 finding was treated as authoritative because it existed) | Partial |
| `/td-critique` #4 (Dimension Blindness) | Family B — missing-canonical-spec-contradiction-dimension aspect (iter-1's critique didn't include canonical-spec-contradiction as a prosecution axis) | Partial |
| `/sense-making` Phase 2 Definitional / Internal Consistency perspective | Both families — corrective tool (checks canonical contradiction) | Tool, not failure mode |

The new failure mode #7 entry consolidates Family A's coverage without replacing the partial coverage in existing modes — the existing modes remain valid; the new entry adds the meta-level lens.

### 8. This finding might be wrong

The same `/MVL+` loop that produced multiple corrected commitments earlier in this session is producing this finding. External grounding (three prior-finding artifact-level instances + `/sense-making`'s existing failure-mode pattern + canonical-spec content) protects against most self-reference collapse, but does not eliminate it.

Specifically watch for: whether the two-family decomposition is actually correct (could Family A and Family B share more structure than acknowledged?); whether the failure mode #7 placement matches /sense-making's intended structure (the dual failure-mode + refinement-note placement is inferred from existing patterns, not explicitly documented); whether the D1 3-step check catches future cases (especially edge cases not yet observed).

If a future user observation or analysis reveals an error in this finding, iteration 3 should follow the same self-correction pattern this thread has been applying.

---

## Next Actions

### MUST

- **What:** Adopt Family A naming — add failure mode #7 "Operation-Status Drift" to `/sense-making`'s canonical spec at `homegrown/sense-making/references/sensemaking.md` Failure Modes section + add a refinement note under Phase 2 Definitional / Internal Consistency perspective specifying D1 (the 3-step check). Cross-reference the two locations to each other AND to `/explore` failure mode #7 (with disambiguation note).
  - **Who:** user (or maintainer authorized to edit `homegrown/`).
  - **Gate:** none — adoption-ready.
  - **Why:** consolidates fragmented existing-failure-mode coverage; operationalizes the D1 detection; provides project-wide named handle for the pattern; protects future inquiries from the recurring failure mode observed twice in this session.

### COULD

- **What:** Defense-in-depth placement — also add D1's check as a project-specific risk dimension in `/td-critique`'s Phase 0 Dimension Construction. Optional additional placement that catches the pattern at the verdict stage if it slips past `/sense-making`'s checks.
  - **Who:** maintainer.
  - **Gate:** activate if 2+ future inquiries miss Family A drift despite `/sense-making` coverage.
  - **Why (if revived):** defense-in-depth across structural-validation + verdict-stage.

### DEFERRED

- **What:** Promote Family B from research-frontier to actionable. Add failure mode #8 "Inherited-Claim-as-Canonical" to `/sense-making`'s spec with detection D2 and corrective C2.
  - **Gate:** when 1+ additional cross-finding-inheritance-authority-confusion instance is observed.
  - **Why (if revived):** Family B's pattern is real; second instance would justify project-wide naming.

- **What:** Project-wide failure-mode catalog document consolidating Family A + Family B + future families + the meta-family label.
  - **Gate:** when 3+ failure-mode patterns warrant cross-discipline consolidation OR a maintainer initiates a catalog inquiry.
  - **Why (if revived):** consolidates the cross-discipline coverage; provides a single reference point for the meta-pattern.

- **All prior deferred items from this thread** remain active.

---

## Reasoning

### Why the two-family decomposition is correct

Tested against H1 (one family, single level) and H2 (three distinct patterns) and H4 (meta-pattern-only):
- H1 fails: instances 1 + 2 are at within-discipline-analysis level; instance 3 is at cross-finding-inheritance level. Different levels.
- H2 fails: instances 1 + 2 share the same detection predicate (sub-discipline-vs-operation check); they are structurally the same pattern.
- H4 partially holds: existing failure modes partially cover both families, but coverage is fragmented across multiple disciplines; explicit naming consolidates without redundancy.

H3 (two families) is the structurally correct decomposition.

### Why Family A is READY for naming but Family B stays research-frontier

Project precedent for failure-mode naming: 2+ observed instances + operationalizable detection + clear corrective + not redundant with existing modes (or consolidates fragmented coverage).
- Family A meets all 4 criteria: 2 instances; D1 operationalizable; C1 clear; consolidates fragmented coverage in `/explore` #7 + `/sense-making` #5.
- Family B meets criteria (2)-(4) but only has 1 observed instance. Premature naming risks over-specifying.

### Why the dual placement (failure mode + perspective refinement note)

The existing `/sense-making` pattern for failure mode #2 (Premature Stabilization) uses both:
- Failure mode entry in the Failure Modes section.
- Refinement notes under Phase 3 perspectives (Load-bearing concept test; Specific-vs-pattern recognition cue) and Phase 5 (Accommodation trigger).

The dual placement separates "what fails" (the named pattern) from "how to check" (the operational mechanism). Family A's failure pattern is the elevation; D1 is the operational check. They naturally separate into the two locations following the existing pattern.

### Why "Operation-Status Drift" as the name

Project failure-mode naming pattern: 2-3 words; describes failure shape; uses project-native terms. Examples: "Premature Stabilization"; "Open→closed drift"; "Clean Resolution Trap."

"Operation-Status Drift" matches:
- "drift" pattern (parallel to `/explore` #7).
- Project-native terms ("operation" used throughout; "drift" used in `/explore` spec).
- Describes the failure shape (status drifts from sub-operation-level to operation-level).

Disambiguation from `/explore` #7 (open→closed drift) is provided in cross-references.

### Killed candidates

| Candidate | Reasoning |
|---|---|
| Name both families now | Family B's 1 instance is thin |
| Single-family decomposition | Operational mechanisms are different across the two levels |
| Three-pattern decomposition | Instances 1 + 2 share detection predicate |
| Meta-family naming as directly-actionable | Meta-name doesn't specify detection mechanism |
| Defense-in-depth placement now | `/sense-making` alone is sufficient until observed otherwise |
| Standalone-only placement (innovation's initial M4-contra) | Sensemaking's perspective-sub-aspect placement was right; both placements are needed (matches existing pattern) |
| Perspective-sub-aspect-only placement (sensemaking's initial commitment) | Standalone failure mode entry is also needed to capture the named pattern |

### Contradictions reconciled across the pipeline

Sensemaking committed perspective-sub-aspect placement; innovation committed failure-mode-#7 placement; critique reconciled both as the existing /sense-making pattern uses both for the same concept (failure mode #2 Premature Stabilization). The dual placement is the structurally correct synthesis.

---

## Open Questions

### Monitoring

- **Does the D1 3-step check actually catch future cases?** Watch for cases where a discipline-analysis claim adds a new operation that escapes the check. *Observable after:* 3 or more future discipline-analysis inquiries.

- **Does the failure mode #7 entry consolidate existing coverage or duplicate it?** Watch for cases where readers cite multiple failure modes for the same instance (suggests consolidation hasn't happened). *Observable after:* 2 or more uses of failure mode #7 in critique outputs.

- **Does Family B's revival trigger fire?** Watch for an additional cross-finding-inheritance-authority-confusion instance. *Observable after:* future inquiries' findings.

### Refinement Triggers

- **Activate Family B naming** when 1 or more additional cross-finding-inheritance-authority-confusion instance is observed. Add failure mode #8 ("Inherited-Claim-as-Canonical") with detection D2 + corrective C2.

- **Activate defense-in-depth placement** (add D1 to `/td-critique` Phase 0 as a project-specific risk dimension) if 2 or more future inquiries miss Family A drift despite `/sense-making` coverage.

- **Activate D1 step 3** (sub-step-as-operation check) when 1 or more sub-step-as-operation instance is observed in practice. Currently marked speculative.

- **Activate a project-wide failure-mode catalog** when 3 or more failure-mode patterns warrant cross-discipline consolidation.

### Research Frontiers

- **Additional pattern families.** Potential Family C/D candidates: runner-vs-discipline confusion; autonomy-level-confusion; iteration-spanning-confusion. None observed; placeholders for future tracking.

- **Meta-family catalog.** If 3+ families accumulate, a project-wide doc consolidating them under the "context-as-absolute" meta-label could emerge.

- **Iteration-3 self-correction.** If this finding has errors, iteration 3 follows the same pattern documented across this thread.

### Blocked

- *None.* No blocker prevents adoption today.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+


A deeper pattern was surfaced but flagged as research-frontier. "Context-as-absolute category errors" — the family of errors where something contextual (a territory specialization; per-item annotation content; a prior finding's authority) is treated as if it were absolute (an operation; a separate cognitive step; canonical authority). Three sibling instances observed across recent inquiries (territory-as-operation in the 16-59 finding; annotation-as-operation in iter-1 of 19-43; prior-finding-authority-as-canonical in this diagnostic). The instances are at different levels (within-discipline-analysis vs cross-finding-inheritance); project-wide naming is deferred until two or more more same-level instances are observed.


lets dive deep into this one
```

</details>
