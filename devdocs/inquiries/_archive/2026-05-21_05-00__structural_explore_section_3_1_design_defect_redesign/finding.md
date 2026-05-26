---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-05-21_04-00__loop_diagnose__additive_fix_tendency_over_design_defect_inspection/finding.md
---

# Finding: Structural Redesign of explore.md §3.1 — Design-Defect Repair via Per-Dimension Completeness

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-21_04-00__loop_diagnose__additive_fix_tendency_over_design_defect_inspection/finding.md` (the META-LOOP_DIAGNOSE that named the "Additive-fix anchoring bias" and committed the verdict HOLD + REDO on the 21-03-00 additive proposal).

**Revision trigger:** the 21-04-00 finding committed a MEANING-layer APPROACH (REPAIR + EXTEND; 2-form taxonomy; per-dimension completeness) with an illustrative Section 6 sketch but no final deployable text. This inquiry operationalizes that approach into final exact spec text.

**What's preserved:**
- The MEANING-layer APPROACH (REPAIR + EXTEND with per-dimension completeness).
- The named meaning-node "Additive-fix anchoring bias" (the LLM-cognitive bias inherited from 21-04-00 as MN8).
- The design-defect diagnosis: §3.1's framing of possibility-mode output was partial (treated output as candidates-only when actually 2 forms exist).
- The 21-04-00 verdict HOLD + REDO on 21-03-00's additive MC1 proposal.

**What's changed:**
- The Section 6 illustrative sketch is refined into final deployable wording.
- The trigger phrase "the inquiry's substance requires..." was replaced with "the inquiry's deliverable requires..." for operational clarity.
- The axis-minimum type (a) was refined from "stated criteria" to "stated and implicit in the question's framing" to handle inquiries with implicit criteria (e.g., the 02-15 R10 case).
- The axis-minimum type (b) had its parenthetical exemplars restored for runner discoverability.
- The artifact-observable sentence was kept in operationally-specific form ("a labeled row above the candidate rows or a named axis-list above the table") rather than the sketch's trimmed version.

**What's new:**
- The FINAL EXACT SPEC TEXT in BEFORE/AFTER form, deployable as direct replacement of lines 120-129 of `cognitive_harness/explore/references/explore.md`.
- 15 specific structural decisions (C1-C15) bounding the redesign at sentence-level granularity.
- Per-piece Intervention-Shape-Axis Inversion at 4 Property (v)-firing pieces with CONTRARIAN-RETHINK considered explicitly (per 21-04-00 corrective) and rejected on structural grounds.
- Integration verification (T1-T5) PASS + self-vigilance verification (4 recognition signals from the named bias) PASS.
- Retrospective tests on both 02-15 R10 (the original incident) and a fresh exemplar (5-deployment-strategies inquiry) confirming runtime equivalence with the 21-03-00 additive proposal while differing in conceptual integrity.

**Migration:** the 21-04-00 finding's Section 6 sketch is now superseded by this finding's final exact spec text. The 21-04-00 verdict on 21-03-00 (HOLD + REDO) is operationalized here: applying this finding's AFTER text to explore.md §3.1 lines 120-129 closes the redesign work; the 21-03-00 MC1 (Exploration spec edit) is no longer queued for additive commit. 21-03-00's MC2 (Critique spec edit at `cognitive_harness/td-critique/references/td-critique.md`) and MC3 (Sensemaking spec edit at `cognitive_harness/sense-making/references/sensemaking.md`) remain user-discretion per the 21-04-00 verdict — this inquiry does not adjudicate them.

---

## Question

From `_branch.md`:

> Given the 21-04-00 META-LOOP_DIAGNOSE diagnosed §3.1's actual design defect as PARTIAL framing of possibility-mode output (treating output as a unitary set of candidates when actually output can take form A "candidates-only" OR form B "comparison structure" = candidates × axes) and committed the MEANING-layer approach "REPAIR + EXTEND §3.1's structure to recognize both output forms with per-dimension completeness," what is the final structural text of the redesigned §3.1 spec — exact prose for the two-form taxonomy, exact prose for the per-dimension completeness rule, exact cross-reference updates if any, and verification that the redesigned text INTEGRATES the comparison-axis-enumeration concept into the existing rule structure rather than appending a separate accreted rule?

**Goal.** Deployable BEFORE/AFTER text + integration verification + cross-reference impact analysis + sequencing recommendation + self-vigilance verification that the redesign is NOT an accreted-rule-in-disguise.

**Context for readers new to this inquiry's vocabulary:**

- **"§3.1"** is Section 3.1 ("Two operational modes") of `cognitive_harness/explore/references/explore.md` — the Structural Exploration discipline's spec section governing how the discipline operates in artifact mode vs possibility mode. It is the artifact this inquiry redesigns.

- **"21-04-00"** is the META-LOOP_DIAGNOSE inquiry at `devdocs/inquiries/2026-05-21_04-00__loop_diagnose__additive_fix_tendency_over_design_defect_inspection/finding.md`. It diagnosed an LLM cognitive bias ("Additive-fix anchoring bias") that caused a prior inquiry to propose adding a new rule when the structurally-correct fix was to repair the existing design's framing.

- **"21-03-00"** is the STRUCTURAL inquiry at `devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/finding.md`. It proposed 3 additive spec edits (MC1/MC2/MC3) — the proposal whose MC1 (Exploration spec edit) is now superseded by this finding's REPAIR + EXTEND redesign.

- **"21-00-30"** is the LOOP_DIAGNOSE inquiry at `devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/finding.md`. It originally diagnosed the gap (the comparison-axis-enumeration absence) that this inquiry's redesign repairs at the framing level.

- **"02-15"** is the inquiry at `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/finding.md`. Its R10 location-options table is the original incident's example of form-B output (candidates × implicit axes) — the retrospective test case for this inquiry's redesign.

- **"Form A / Form B"** are the two possibility-mode output forms this inquiry recognizes at the spec level: form A is candidates-only (no per-candidate comparative scoring); form B is comparison structure (candidates × axes).

- **"REPAIR + EXTEND"** is an intervention-shape combination from the Intervention-Shape Vocabulary at `cognitive_harness/innovate/references/innovate.md` lines 332-346. REPAIR modifies existing text's framing while preserving its function; EXTEND adds within the existing structure. The combination is structurally distinct from ADD-CONTENT (the rejected additive-fix shape).

- **"Property (v)"** is the intervention-shape-commitment property of the Meta-Decision-Piece Criterion at `cognitive_harness/innovate/references/innovate.md` Phase 2 Generate. It fires when an Innovation piece commits to a named intervention shape from the Vocabulary that downstream-discipline behavior operates under.

- **"CONTRARIAN-RETHINK"** is one of the 10 intervention shapes in the Vocabulary. It's the framing-flip shape — questioning whether a prior conclusion's framing itself is right. The 21-04-00 corrective requires considering CONTRARIAN-RETHINK as an alternative shape when an Innovation piece commits to an additive shape; this inquiry applies that corrective.

- **"Additive-fix anchoring bias"** is the named meaning-node committed at 21-04-00 Section 5 — the LLM tendency to default to "add X" interventions when a diagnostic frames a gap as "X is missing." The corrective is "INSPECT before fix-category-commitment." This inquiry self-vigilantly applies the recognition signals within its own pipeline.

---

## Finding Summary

- **The redesigned §3.1 text is the deliverable.** It is presented below as a BEFORE/AFTER block in Section 1 ("The Redesigned §3.1 Spec Text"). The user may apply it as a direct replacement of lines 120-129 of `cognitive_harness/explore/references/explore.md`. No cascading edits to §4.1, §4.2, §5 are required.

- **The redesign approach is REPAIR + EXTEND, not ADD-CONTENT.** The existing "Completeness before novelty" rule's body is extended per-dimension (candidates dimension + comparison-axes dimension); the rule's name is preserved; the Possibility mode bullet's body is rewritten to recognize 2 output forms (form A "Candidates-only" + form B "Comparison structure") with nested sub-bullets. The §3.1 redesign reads as one coherent rule with two dimensions, not as the existing rule + an appended exception.

- **The 02-15 R10 retrospective test PASSES.** If the redesigned §3.1 had been in effect when the 02-15 inquiry ran, the comparison-axes-dimension's axis minimum (b) "project-architecture invariants relevant to the candidate's domain" would have surfaced the cognitive_harness-installability axis that was originally missed.

- **A fresh exemplar retrospective test PASSES.** Applied to a hypothetical inquiry comparing 5 deployment strategies (kubernetes / serverless / VMs / containers / hybrid), the redesigned §3.1 produces axis enumeration as the natural next step (cost, latency, operational-complexity, scalability via axis (a); existing-infra coupling, team expertise, deployment-target compatibility via axis (b); etc.).

- **Runtime equivalence with the 21-03-00 additive proposal is preserved.** Both the redesigned text and the 21-03-00 additive proposal produce the same downstream behavior (axes enumerated when form B output is produced). The redesign differs in conceptual integrity — it integrates form-recognition into the existing rule structure rather than appending a separate "Comparison-axis enumeration" rule alongside.

- **15 specific structural decisions (C1-C15) bound the redesign at sentence level.** These were committed at Sensemaking after 9-perspective check, 8 ambiguity collapses, and 6 load-bearing concept tests. Decomposition organized them into an 8-piece Q-tree; Innovation generated the final wording for each piece; Critique evaluated the assembly against 16 dimensions (including 4 CRITICAL: Integration-vs-accretion, Pre-redesign-history-invisibility, Project-architecture-invariants axis, and the named-bias recognition signals from 21-04-00).

- **Property (v) fired at 4 Innovation pieces (Q2/Q3/Q4/Q5).** At each, Intervention-Shape-Axis Inversion was applied with CONTRARIAN-RETHINK as the alternative shape considered (per the 21-04-00 corrective). At each, the alternative was rejected on structural grounds (not precedent) via the 5-test cycle. The principal REPAIR + EXTEND survived at all 4 pieces.

- **Auto-memory compliance verified.** The redesigned text uses concept-form prose throughout — "project-architecture invariants," "installability boundaries," "folder-independence commitments inherited from project structure," "Synthesis Trigger" — with zero outbound paths to `docs/`, `enes/`, or other folders. This satisfies the auto-memory `feedback_disciplines_self_contained.md` constraint.

- **Cross-reference accuracy verified.** §4.1 #6 (Completeness bias in possibility mode) and §4.1 #2 (Surface-only scanning) cross-references in the redesigned text are accurate against the current explore.md. No text update to §4.1 is required.

- **Layer-3 §9 self-application: RECORDED-OVERRIDE count remains N=4.** Property (v) fired at 4 Innovation pieces but the override pattern was not invoked (compliance criterion satisfied by Inversion-candidate generation + 5-test rejection, not by recording a skip-override). The pattern of "discipline-prevents-Layer-3-advancement" advances to **N=14 cumulative inquiries**.

- **The Inherited Frame Audit override is RECORDED + COMPLIANT** per the 6-component compliance criterion at `cognitive_harness/innovate/references/innovate.md` lines 479-484. The override's structural reason names the specific property (the seed's central assumption is itself a framing-flip output from 21-04-00); the contextual reason names the specific upstream work (21-04-00 Sections 5 + 6 + 7).

- **Critique verdict: PROCEED to CONCLUDE.** All 8 pieces + assembled final text receive SURVIVE verdicts on all 16 dimensions. No KILL verdicts. 1 MINOR optional REFINE on axis-(c) qualifier ("when applicable" → "if it fires") is non-blocking and user-discretion. No critique failure modes observed.

- **Sequencing.** The redesigned §3.1 text can be applied as a direct edit immediately. The 21-03-00 MC1 (Exploration spec edit) is superseded by this finding. The 21-03-00 MC2 (Critique exemplar list extension) and MC3 (Sensemaking sub-aspect list extension) remain user-discretion per the 21-04-00 verdict — this inquiry does not change their status.

- **Cross-discipline propagation OUT OF SCOPE.** The 21-04-00 MC-ENHANCE-1 (LOOP_DIAGNOSE protocol failure-classification taxonomy enhancement) and MC-ENHANCE-2 (Innovate's Intervention-Shape-Axis Inversion enhancement requiring CONTRARIAN-RETHINK consideration when principal is ADD-*) remain DEFERRED to monitoring observable per the 21-04-00 Step 5 guardrail. This inquiry honors that deferral; the redesign is scoped to /explore §3.1 only.

---

## Finding

### Surrounding context — why this STRUCTURAL inquiry exists

The user's prior correction at 21-04-00 named the problem clearly: when a diagnostic frames a gap as "X is missing," the LLM's default response is to propose "add X" — even when the structurally-correct response is to inspect what's wrong with the existing design that allowed X to remain implicit. The 21-04-00 finding diagnosed this as the "Additive-fix anchoring bias" (Section 5), identified §3.1's actual design defect (Section 6), and committed a MEANING-layer APPROACH: REPAIR + EXTEND §3.1's existing structure with per-dimension completeness.

But 21-04-00 left the structural-text production unfinished. The finding's Section 6 included an illustrative sketch, explicitly marked as a draft for a future design-defect redesign inquiry. The user's subsequent instruction — "lets do the redesign inquiry correctly" — triggered this STRUCTURAL inquiry to operationalize the committed approach into deployable spec text.

This inquiry's deliverable is concrete: replacement prose for lines 120-129 of `cognitive_harness/explore/references/explore.md`. The text must be integrative (not accretion-in-disguise), self-vigilantly applying the recognition signals of the named bias to its own wording choices. The redesign must read as designed-this-way-from-the-start; the redesign history must be invisible to future readers.

### 1. The Redesigned §3.1 Spec Text

**Target file:** `cognitive_harness/explore/references/explore.md`

**Edit type:** REPLACEMENT. Lines 120-129 are replaced. The replacement applies the REPAIR + EXTEND structural fix-shape — the Possibility mode bullet's body is repaired (extended to recognize two output forms); the "Completeness before novelty" rule's body is repaired (extended per-dimension); the rule's name and scope tag are preserved; the section header, mode-determination principle, Artifact mode bullet, and "Key difference from /innovate" callout are preserved verbatim.

**BEFORE** (current state, lines 120-129):

```markdown
### 3.1 Two operational modes

Modes are determined by the territory's type, not by the discipline's commitment.

- **Artifact mode** — the territory has concrete pre-existing objects (codebases, literature, existing systems). Scan = traverse and index. Probe = read deeper into a specific artifact.
- **Possibility mode** — the territory is conceptual; candidates must be generated to be placed on the map (solution spaces, design options, research directions). Scan = generate candidates at surface level. Probe = examine a candidate more closely.

**Completeness before novelty** (possibility mode). When scanning in possibility mode, explicitly scan for the standard/obvious approaches BEFORE scanning for novel ones. Generating only "creative" candidates and missing the obvious ones is a failure mode (see §4.1).

**Key difference from /innovate.** Possibility-mode exploration generates candidates for *completeness*; /innovate generates ideas for *novelty*. /explore must include the obvious approach on the map; /innovate would skip it. Different success criteria → different outputs.
```

**AFTER** (final redesigned text — replace lines 120-129 with this):

```markdown
### 3.1 Two operational modes

Modes are determined by the territory's type, not by the discipline's commitment.

- **Artifact mode** — the territory has concrete pre-existing objects (codebases, literature, existing systems). Scan = traverse and index. Probe = read deeper into a specific artifact.
- **Possibility mode** — the territory is conceptual; candidates must be generated to be placed on the map (solution spaces, design options, research directions). Scan = generate candidates at surface level. Probe = examine a candidate more closely. The output takes one of two forms:
  - **(i) Candidates-only** — a set of candidates without per-candidate comparative scoring on shared criteria.
  - **(ii) Comparison structure** — candidates × axes (pros/cons table; multi-attribute scoring grid; ranked list with stated criteria), produced when the inquiry's deliverable requires per-candidate assessment on shared criteria.

**Completeness before novelty** (possibility mode). Apply completeness per dimension of the output:
- **Candidates dimension** (forms i + ii). Explicitly scan for the standard/obvious approaches BEFORE scanning for novel ones. Generating only "creative" candidates and missing the obvious ones is a failure mode (see §4.1 #6).
- **Comparison-axes dimension** (form ii only, when present). Enumerate the comparison axes explicitly BEFORE populating per-candidate cells. The axis list names at minimum: (a) the inquiry-question's criteria — both stated and implicit in the question's framing; (b) project-architecture invariants relevant to the candidate's domain (placement, coupling, installability boundaries; folder-independence commitments inherited from project structure); (c) constraints inherited via the inquiry's Synthesis Trigger (when applicable). The runner may add additional axes as substance warrants. The axis list is an artifact-observable output — a labeled row above the candidate rows or a named axis-list above the table. Skipping enumeration and populating per-candidate cells under implicit axes is a Surface-Only Scanning instance applied to the comparison axes (the visible cells are populated but the invisible axis-choice is unscanned; see §4.1 #2).

**Key difference from /innovate.** Possibility-mode exploration generates candidates for *completeness*; /innovate generates ideas for *novelty*. /explore must include the obvious approach on the map; /innovate would skip it. Different success criteria → different outputs.
```

**What's new** (the only content that gets typed; everything else is already in the file):

Compared to the BEFORE text, the AFTER text adds/modifies the following:

1. **Inside the Possibility mode bullet:** after the existing definition sentence (which ends "...examine a candidate more closely."), the bullet continues with " The output takes one of two forms:" followed by 2 nested sub-bullets defining form (i) "Candidates-only" and form (ii) "Comparison structure" (with the form-(ii) trigger phrase using "deliverable requires per-candidate assessment on shared criteria"). The existing bullet's opening phrasing is preserved verbatim; the form recognition is integrated as a continuation of the mode definition.

2. **Inside the "Completeness before novelty" rule's body:** the rule name + scope tag "(possibility mode)" are preserved verbatim. The single prescription sentence that exists today ("When scanning in possibility mode, explicitly scan...failure mode (see §4.1).") is replaced with a per-dimension structure:
   - A preamble sentence ("Apply completeness per dimension of the output:") that frames the body as having two dimensions.
   - A "Candidates dimension (forms i + ii)" sub-bullet that preserves the existing prescription's content with the §4.1 #6 cross-reference made specific.
   - A "Comparison-axes dimension (form ii only, when present)" sub-bullet — the new content. It contains: an axes-enumeration-before-cells prescription; 3 axis minimum types (a/b/c); a permissive extension clause; an artifact-observable requirement; and a negative-form sentence referencing §4.1 #2.

3. **The section header, mode-determination principle, Artifact mode bullet, and "Key difference from /innovate" callout** are all preserved verbatim. No changes to these elements.

**No cascading edits required.** §4.1 #6 + §4.1 #2 cross-references are accurate against the current spec; their prevention text remains correct for the candidates dimension and the comparison-axes dimension respectively (the comparison-axes dimension's framing of axis-non-enumeration as "Surface-Only Scanning applied to the comparison axes" is a conceptual analogy that the redesigned §3.1's own bridge sentence makes interpretable; §4.1 #2's text doesn't need updating).

### 2. Why the redesign is REPAIR + EXTEND, not ADD-CONTENT

The 21-03-00 inquiry's original proposal added a new inline bold-rule "Comparison-axis enumeration" alongside the existing "Completeness before novelty" rule. That proposal applied the ADD-CONTENT intervention shape — it preserved the existing rule unchanged and appended new content. The 21-04-00 META-LOOP_DIAGNOSE diagnosed the resulting partial framing (which §3.1 still treats output as candidates-only) as the root design defect — a "design-elision" rather than a "mechanism-absence." The structurally-correct fix is REPAIR + EXTEND: modify the existing framing to recognize 2 output forms and extend the existing rule body per-dimension.

The mechanical test that distinguishes REPAIR + EXTEND from ADD-CONTENT is whether the existing rule's text can be quoted unchanged after the fix is applied:

- **Under ADD-CONTENT** (the 21-03-00 proposal): the "Completeness before novelty" rule's text is preserved unchanged; a new rule is added alongside. The original framing (candidates-only completeness) stays intact + a new exception is documented.

- **Under REPAIR + EXTEND** (this inquiry's redesign): the "Completeness before novelty" rule's name is preserved but its body is rewritten as a per-dimension structure (preamble + candidates dimension sub-bullet + comparison-axes dimension sub-bullet). The existing prescription's content is preserved within the candidates dimension sub-bullet, but the rule's structure is reframed to acknowledge both dimensions.

Critique's prosecution at Q2 (the Possibility mode bullet extension) tested the strongest objection: that the bullet's body extension preserves existing definition phrases ("the territory is conceptual; candidates must be generated to be placed on the map" + "Scan = generate candidates at surface level. Probe = examine a candidate more closely.") and only appends form-recognition at the tail — which could be argued as accretion-in-disguise. The defense overcame this objection on 5 structural grounds:

1. The form sub-bullets are nested within the Possibility mode bullet (not co-equal section level), hierarchically signaling intra-mode classification.

2. The "The output takes one of two forms:" preamble reads as a continuation of the mode definition's "what is Possibility mode" answer — not as an additional rule.

3. The existing definition phrases are preserved because they remain accurate at the mode level (modes are still determined by territory; candidates are still what get generated). The form recognition is a refinement of HOW the mode's output is structured.

4. The mechanical structural test passes: the AFTER bullet's body cannot be quoted as exactly equal to the BEFORE bullet's body — the redesign genuinely reframes the body.

5. The Inversion-candidate (CONTRARIAN-RETHINK = no forms) was generated and rejected on 5-test grounds at Innovation Q2. The rejection reasoning was structural: reverting to the no-forms framing would re-instate the design-elision diagnosed at 21-04-00.

### 3. Why the form-(ii) trigger phrase uses "deliverable" not "substance"

The 21-04-00 sketch used "when the inquiry's substance requires comparing options on shared criteria." This inquiry replaced "substance" with "deliverable" for operational clarity. The reasoning:

- "Substance" is interpretively loose — it doesn't appear elsewhere in explore.md spec vocabulary. Future readers may not know what makes "substance" require comparison.

- "Deliverable" connects to the discipline-output framing already present in explore.md (§5 Transform, §5.4 Frontier-to-downstream). The trigger specifies what kind of OUTPUT the inquiry demands, and "deliverable" is the operational term for an inquiry's required output.

- The full phrase becomes "produced when the inquiry's deliverable requires per-candidate assessment on shared criteria" — operationally specific. A reader can read this and ask: does my inquiry's deliverable require per-candidate assessment? If yes, form (ii) applies.

### 4. Why the axis minima list refines axis (a) and restores (b) exemplars + (c) qualifier

The 21-04-00 sketch listed axis minima as (a) "the inquiry-question's stated criteria"; (b) "project-architecture invariants relevant to the option's domain" (no exemplars); (c) "constraints inherited via the inquiry's Synthesis Trigger" (no qualifier). This inquiry refines each.

- **Axis (a) refined to "stated and implicit in the question's framing."** The 02-15 R10 retrospective test case had implicit criteria (semantic cleanliness, transferability, discoverability) that were never stated explicitly in the inquiry's question — they were derived from the cell content of the pros/cons table. Under the sketch's "stated criteria" only, axis (a) would have returned an empty list for 02-15 R10, and the runner would have skipped to axes (b) and (c). The retrospective test would still pass via (b) but the reading would be artificial. Refining to "stated and implicit" makes axis (a) honest about implicit-criteria cases without expanding the minima list to a 4th type.

- **Axis (b) restored parenthetical exemplars** ("placement, coupling, installability boundaries; folder-independence commitments inherited from project structure"). These are inherited from the 21-03-00 wording analysis (which Critique verified as auto-memory-compliant — concept-form prose, no outbound paths). The exemplars give runners pattern-matching anchors; without them, "project-architecture invariants" might pass over runners' heads.

- **Axis (c) restored "(when applicable)" qualifier.** Not all inquiries have a Synthesis Trigger that fires. Without the qualifier, runners might force a Synthesis-Trigger axis even for fresh inquiries. The qualifier preserves the conditional applicability.

Critique evaluated axis (c)'s "(when applicable)" wording as a minor optional REFINE candidate — the parenthetical qualifier could be sharper ("if it fires"). The current form is acceptable; the alternative is user-discretion. Both forms are operationally clear.

### 5. Why the artifact-observable sentence preserves operational specificity

The 21-04-00 sketch trimmed the artifact-observable sentence to "The axis list is an artifact-observable output." The 21-03-00 wording analysis had a more operationally specific form: "a labeled row above option-rows OR a named axis-list above the table." This inquiry uses the operationally specific form (with "option-rows" → "candidate rows" per vocabulary canonicalization).

The reasoning: the rule's enforcement depends on runner-recognition of compliance. "Artifact-observable" alone doesn't tell the runner what to look for. The operationally specific form gives runners a testable signal — a labeled row above the rows, or a named axis-list above the table. The trade-off (prose-bulkiness vs operational specificity) favors specificity because the rule's value comes from being checkable.

### 6. Why §4.1 cross-references work as conceptual analogies

The redesigned §3.1 cross-references §4.1 #6 (Completeness bias in possibility mode) for the candidates dimension and §4.1 #2 (Surface-only scanning) for the comparison-axes dimension.

§4.1 #6 is a direct match: the candidates dimension's negative form ("Generating only 'creative' candidates and missing the obvious ones") is literally what §4.1 #6 names ("Completeness bias in possibility mode" with prevention text "scan for standard/obvious candidates BEFORE scanning for novel ones").

§4.1 #2 is a conceptual analogy: §4.1 #2 names "Surface-only scanning" with prevention text about scan/probe depth. The redesigned §3.1's comparison-axes-dimension negative form frames axis-non-enumeration as "a Surface-Only Scanning instance applied to the comparison axes." The conceptual bridge ("the visible cells are populated but the invisible axis-choice is unscanned") is in the redesigned §3.1 text itself; §4.1 #2's text doesn't need updating to support the cross-reference. The reader follows the conceptual analogy through the bridge sentence; the cross-reference is interpretively complete.

### 7. Property (v) firing at 4 pieces + CONTRARIAN-RETHINK consideration

Innovation generated wording for 8 pieces (Q1-Q8) corresponding to the 15 committed structural decisions. Per the Decomposition forecast, Property (v) fires at 4 pieces (Q2 Possibility mode bullet extension; Q3 vocabulary canonicalization; Q4 rule body extension; Q5 comparison-axes dimension sub-bullet) because these pieces commit intervention shapes (REPAIR + EXTEND or REPAIR or EXTEND) that downstream-discipline behavior would operate under if the spec edit commits.

At each of the 4 firing pieces, Intervention-Shape-Axis Inversion (per `cognitive_harness/innovate/references/innovate.md` lines 399-410) was applied with CONTRARIAN-RETHINK as the alternative shape considered. The 21-04-00 corrective explicitly required this — the named bias's recognition signal #3 (Inversion considers same-category-shapes only) is countered by forcing CONTRARIAN-RETHINK consideration when principal is in the ADD-*/REPAIR/REORGANIZE family.

The CONTRARIAN-RETHINK alternatives generated:

- **At Q2:** question whether possibility-mode output should be classified into forms at all (= no-form-distinction; revert to current partial framing).
- **At Q3:** question whether "candidates" should be canonical or whether dual vocabulary ("candidates" + "options") should distinguish form-(i) from form-(ii) entries.
- **At Q4:** question whether the "Completeness before novelty" rule should be relocated to §1.3 NOT-list as a meta-exclusion instead of being a §3.1 rule.
- **At Q5:** question whether comparison-axes completeness should require explicit enumeration or rely on runner-judgment "axes-aware" principle without operational specifics.

Each CONTRARIAN-RETHINK alternative was tested via the 5-test cycle (novelty / scrutiny survival / fertility / actionability / mechanism independence). All 4 were rejected on structural grounds (not precedent). The rejection reasoning at each piece was specific to the alternative's structural failure (e.g., at Q2: reverting to no-form-distinction would re-instate the design-elision; at Q5: runner-judgment-only is precisely what allowed the original cognitive_harness-installability axis to be missed at 02-15).

The compliance criterion at innovate spec lines 399-410 — (a) principal candidate text + (b) Inversion-candidate paragraph naming alternative shape + (c) 5-test on both — is satisfied at all 4 firing pieces. No override pattern was invoked because the Inversion was genuinely applied and the candidate was tested-then-rejected, not skipped.

### 8. Layer-3 §9 self-application + Inherited Frame Audit

**Layer-3 §9 RECORDED-OVERRIDE count remains N=4** (unchanged since the 23-00 A1 branch experiment design inquiry).

The override pattern `Methodology-mode-alternative-marked-inapplicable` is invoked only when the per-piece Inversion is SKIPPED with an override-record (per established documentation/structural-seed practice). This inquiry's Property (v) firing pieces (Q2-Q5) generated and tested Inversion-candidates — they did not skip. So the override-recording pattern was not triggered. RECORDED-OVERRIDE count stays at N=4.

The pattern "discipline-prevents-Layer-3-advancement" advances to **N=14 cumulative inquiries** (10 documentation/structural seeds with TRIVIALLY-SATISFIED or ACTIVE-NO-OVERRIDE outcomes + 4 production seeds). This is the established pattern across recent inquiries: when Innovation generates Inversion-candidates at Property (v) firing pieces and tests them via the 5-test cycle, the override-pattern's preconditions are not met regardless of which candidate (principal or Inversion) survives.

**Inherited Frame Audit override RECORDED + COMPLIANT** per the 6-component compliance criterion at `cognitive_harness/innovate/references/innovate.md` lines 479-484:

- **Structural reason:** the seed's central assumption (REPAIR + EXTEND approach) is itself a framing-flip output from the immediate prior (21-04-00 META-LOOP_DIAGNOSE applying CONTRARIAN-RETHINK at the meta-loop level to question the 21-03-00 additive proposal's fix-shape). Each property-(v) piece in this inquiry generated CONTRARIAN-RETHINK Inversion-candidates explicitly. Double framing-flip would re-instate the diagnosed defect.

- **Contextual reason:** the 21-04-00 finding's Section 5 (named meaning-node MN8 "Additive-fix anchoring bias") + Section 6 (design-defect analysis) + Section 7 (verdict HOLD + REDO on 21-03-00) explicitly committed REPAIR + EXTEND as the corrective framing.

- The reason is not empty, not generic (names specific structural property + specific upstream sections), not single-component (4+ components: seed's central assumption + each piece's load-bearing commitment + CONTRARIAN-RETHINK Inversion at all 4 firing pieces + per-piece 5-test on alternative), not abuse-vector (reasoning is specific, not template-filling).

### 9. Sequencing — what to commit, when

**Immediate commit (after user approval):** apply the redesigned §3.1 text from Section 1's AFTER block to `cognitive_harness/explore/references/explore.md` lines 120-129. This is a single-section replacement; no cascading edits to §4.1, §4.2, or §5.

**No additional edits required to /explore from this inquiry.**

**21-03-00's MC2 + MC3 — user-discretion (unchanged from 21-04-00 verdict):**

- **MC2** (Critique exemplar list extension at `cognitive_harness/td-critique/references/td-critique.md`'s Phase 0 "Project-specific risk dimension check" refinement note) — LOW-RISK additive extension; user may commit immediately for defense-in-depth.

- **MC3** (Sensemaking sub-aspect list extension at `cognitive_harness/sense-making/references/sensemaking.md`'s Phase 3 "Load-bearing concept test" refinement note's Phase 5 sub-aspect bullet) — LOW-RISK additive extension; user may commit immediately for defense-in-depth.

This inquiry's redesigned §3.1 stands alone whether or not MC2 + MC3 commit. If the user commits all three, MC2 + MC3 reinforce the §3.1 redesign's pattern at Sensemaking + Critique stages of future inquiries.

**Cross-discipline propagation — DEFERRED (unchanged from 21-04-00 verdict):**

- **MC-ENHANCE-1** (LOOP_DIAGNOSE protocol failure-classification taxonomy enhancement to add "design-elision" category alongside "mechanism-absence") — DEFERRED to monitoring observable.

- **MC-ENHANCE-2** (Innovate's Intervention-Shape-Axis Inversion enhancement to require CONTRARIAN-RETHINK consideration when principal is ADD-*) — DEFERRED to monitoring observable.

Both enhancements are cross-cutting changes affecting all future LOOP_DIAGNOSE or Property (v)-firing inquiries. One correction chain (the 21-03-00 → 21-04-00 → this inquiry trio) is insufficient evidence for cross-cutting commits per the LOOP_DIAGNOSE protocol Step 5 guardrail.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger inheriting from 6 priors + the auto-memory.

| # | Prior | Commitment | Re-test status | Evidence |
|---|---|---|---|---|
| P1 | `devdocs/inquiries/2026-05-21_04-00__loop_diagnose__additive_fix_tendency_over_design_defect_inspection/finding.md` | Named meaning-node "Additive-fix anchoring bias" (Section 5); design-defect diagnosis of §3.1's PARTIAL framing (Section 6); MEANING-layer APPROACH commitment to REPAIR + EXTEND with per-dimension completeness; Section 6 illustrative SKETCH as starting point; verdict HOLD + REDO on 21-03-00 (Section 7) | RE-TESTED | Section 1's AFTER text operationalizes the APPROACH; Section 2 ("Why the redesign is REPAIR + EXTEND") demonstrates the structural distinction from ADD-CONTENT mechanically; Sections 3-6 refine the sketch's wording with specific structural justifications; Section 9's sequencing operationalizes the HOLD + REDO verdict |
| P2 | `devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/finding.md` | The 3 additive spec edits MC1/MC2/MC3; cross-discipline coherence analysis; auto-memory compliance verification; branch-experiment-necessity adjudication; MC1 BEFORE/AFTER wording for the additive proposal | RE-TESTED as INPUT-NOT-FINAL | MC1 wording was extracted at element level (trigger phrase exemplars; axis minima types; artifact-observable language) and reused within the REPAIR + EXTEND redesign; the MC1 fix-shape (ADD-CONTENT) was rejected and superseded per 21-04-00 verdict; MC2 + MC3 user-discretion status is preserved unchanged in Section 9 |
| P3 | `devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/finding.md` | TYPE-A "mechanism-absence" classification of the original gap; MC1 (Exploration spec edit) as PRIMARY cause; affected spec section §3.1 | RE-TESTED with reframing | The TYPE-A classification was reframed by 21-04-00 as "design-elision" rather than "mechanism-absence"; this inquiry operationalizes the reframing in structural text (Section 2); the original affected-spec-section locus (§3.1) is preserved as the redesign target |
| P4 | `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/finding.md` | R10 location-options table as the original incident's exemplar of form-B output (candidates × implicit axes); the cognitive_harness-installability axis that was missed | RE-TESTED via retrospective application | Section 1's redesigned §3.1, applied retrospectively to R10, surfaces the cognitive_harness-installability axis via axis minimum (b) "project-architecture invariants" — confirmed at Innovation Q5's 5-test + Critique's fresh-exemplar test |
| P5 | `cognitive_harness/explore/references/explore.md` | The current §3.1 text + surrounding sections (§3.2 boundary-discovery, §3.3 canonical cycle, §3.4 idempotency, §3.5 type-aware probing, §4.1 ten failure modes including #6 + #2, §4.2 convergence criteria, §5 output schema) | RE-TESTED | The BEFORE text in Section 1 is verbatim from the current §3.1 (lines 120-129); §4.1 #6 + #2 cross-references verified accurate against current spec; surrounding sections constrain the redesigned text without requiring cascading edits |
| P6 | `cognitive_harness/innovate/references/innovate.md` lines 332-410 + 416-549 | Intervention-Shape Vocabulary (10 shapes including CONTRARIAN-RETHINK); Intervention-Shape-Axis Inversion at Property-(v) Pieces refinement note; Inherited Frame Audit framework; 6-component override compliance criterion at lines 479-484 | RE-TESTED | Section 7 documents Property (v) firing at 4 pieces with CONTRARIAN-RETHINK Inversion candidates and 5-test cycles; Section 8 records the Inherited Frame Audit override with structural + contextual reasons per the 6-component criterion |
| P7 | Auto-memory `~/.claude/projects/-Users-ns-Desktop-projects-native/memory/feedback_disciplines_self_contained.md` | Discipline runtime reference files must not contain outbound pointers to design-history, theory, or other folders | RE-TESTED | Critique Q6 audit verified zero outbound paths in the AFTER text; concept-form prose used throughout ("project-architecture invariants," "installability boundaries," "folder-independence commitments inherited from project structure," "Synthesis Trigger" — all concept-form, not path-form) |

**Total: 7 priors named. 7/7 RE-TESTED with cited evidence. 0 INHERITED-WITHOUT-RE-TEST. No silent inheritance.**

---

## Next Actions

### MUST

- **Apply the redesigned §3.1 spec text** from Section 1's AFTER block to `cognitive_harness/explore/references/explore.md` lines 120-129. Single-section replacement; no cascading edits to §4.1, §4.2, §5.
  - **Who:** project lead via direct edit (or Edit tool when authorized).
  - **Gate:** observable — once the user approves the AFTER text as deployable.
  - **Why:** closes the 21-04-00 design-defect diagnosis; supersedes 21-03-00's MC1 additive proposal; deploys the integrated REPAIR + EXTEND fix.

### COULD

- **Apply 21-03-00 MC2 spec edit** at `cognitive_harness/td-critique/references/td-critique.md`'s Phase 0 "Project-specific risk dimension check" refinement note (append the proposed forward-looking sentence introducing project-architecture invariants as a current example).
  - **Who:** project lead via direct edit.
  - **Gate:** observable — when project decides to commit defense-in-depth at Critique stage.
  - **Why:** LOW-RISK additive extension; reinforces the §3.1 redesign's pattern at the Critique discipline; closes the 21-00-30 CONTRIBUTING-cause gap at Critique Phase 0.
  - **Depends-on:** MUST item "Apply the redesigned §3.1 spec text." OVERRIDE: COULD is adoption-ready despite MUST timing. Reason: MC2 is independent of /explore's §3.1 text — Critique's Phase 0 refinement note adds a project-architecture-invariants axis to its exemplar list regardless of whether /explore's spec has been updated. The MC2 commit can proceed in parallel with or independently of the MUST.

- **Apply 21-03-00 MC3 spec edit** at `cognitive_harness/sense-making/references/sensemaking.md`'s Phase 3 "Load-bearing concept test" refinement note's Phase 5 sub-aspect bullet (insert the project-architecture-invariant-probe sub-aspect).
  - **Who:** project lead via direct edit.
  - **Gate:** observable — when project decides to commit defense-in-depth at Sensemaking stage.
  - **Why:** LOW-RISK additive extension; the spec explicitly invites this kind of extension via the "illustrative list is not exhaustive" framing; closes the 21-00-30 CONTRIBUTING-cause gap at Sensemaking Phase 3.
  - **Depends-on:** MUST item "Apply the redesigned §3.1 spec text." OVERRIDE: COULD is adoption-ready despite MUST timing. Reason: same as MC2 — MC3 operates at Sensemaking's discipline-spec; independent of /explore's §3.1 update.

- **Minor optional REFINE on axis-(c) qualifier wording** in the redesigned §3.1 text. The current form "(c) constraints inherited via the inquiry's Synthesis Trigger (when applicable)" uses a parenthetical qualifier. An alternative form is "(c) constraints inherited via the inquiry's Synthesis Trigger, if it fires." Both are operationally clear; the alternative is more explicit.
  - **Who:** project lead via direct edit (if applying the AFTER text with the alternative wording).
  - **Gate:** observable — at the time of applying the AFTER text; user may apply either form.
  - **Why:** sharpens the conditional applicability; non-blocking refinement per Critique's verdict.
  - **Depends-on:** MUST item "Apply the redesigned §3.1 spec text." This COULD is GATED — it modifies the text being committed.

### DEFERRED

- **MC-ENHANCE-1: LOOP_DIAGNOSE protocol failure-classification taxonomy enhancement.** Add "design-elision" category alongside "mechanism-absence" to the protocol's diagnostic vocabulary.
  - **Gate:** condition-bound — when 2+ additional correction-chain incidents surface the same classification-naming gap. Monitoring observable per LOOP_DIAGNOSE Step 5 guardrail.
  - **Why (if revived):** the classification influences fix-shape adjudication downstream; misclassification propagates the named bias. The "design-elision" category would name the distinction explicitly in the protocol vocabulary.

- **MC-ENHANCE-2: Innovate's Intervention-Shape-Axis Inversion mechanism enhancement.** When principal shape is ADD-* prefixed, the mechanism would require CONTRARIAN-RETHINK as one of the considered alternative shapes (currently any alternative shape from the Vocabulary qualifies).
  - **Gate:** condition-bound — when additional correction-chain incidents show the same-category-alternative-only pattern.
  - **Why (if revived):** forces framing-flip consideration at the spec-mechanism level rather than relying on runner judgment.

- **Empirical validation of the redesigned §3.1.** Observe whether the redesigned text catches form-B output situations in future possibility-mode runs. If 3+ future inquiries produce form-B outputs and the redesigned spec correctly surfaces axis-enumeration, the diagnostic's hypothesis is empirically validated.
  - **Gate:** observable — 3+ future inquiries.
  - **Why (if revived):** confirms the redesign produces the intended behavior; informs whether MC-ENHANCE-1 + MC-ENHANCE-2 promote from monitoring to actionable.

---

## Reasoning

### Why REPAIR + EXTEND instead of ADD-CONTENT

The 21-04-00 META-LOOP_DIAGNOSE explicitly diagnosed §3.1's design defect as "design-elision" (the existing framing is partial, eliding a relevant case) rather than "mechanism-absence" (a specific mechanism is genuinely missing while the existing framing is sound). The structurally-correct treatment for design-elision is to repair the existing framing, not to add a new mechanism alongside it.

ADD-CONTENT (the 21-03-00 proposal) would preserve the partial framing (treating §3.1's output as candidates-only) and document a new exception alongside ("Comparison-axis enumeration" rule). This preserves the design-debt and creates an accreted exception pattern that future inquiries pattern-match against.

REPAIR + EXTEND modifies the existing framing to recognize both forms (form A and form B) at the same conceptual level, then extends the "Completeness before novelty" rule per-dimension. The result is a unified §3.1 that reads as one coherent rule with two dimensions, not two parallel rules.

The user's correction at 21-04-00 — "we shouldnt wildly add new rules everytime we encounter sth, we should look at the current spec of explore and try to understand why it missed that?" — is honored at the structural level. The redesign inspects the existing design's framing for the defect (PARTIAL framing of possibility-mode output) and repairs that framing, rather than adding a new rule alongside.

### Why all 4 CONTRARIAN-RETHINK alternatives were rejected

At each of the 4 Property (v)-firing pieces, the Intervention-Shape-Axis Inversion mechanism (per innovate spec lines 399-410) required generating an Inversion-candidate with CONTRARIAN-RETHINK as the alternative shape and testing both candidates via the 5-test cycle.

- **At Q2 (Possibility mode bullet extension):** CONTRARIAN-RETHINK alternative = no-form-distinction; revert to current partial framing. Rejected on 5-of-5 test grounds. The most load-bearing rejection: scrutiny survival fails because the partial framing IS the design-elision being repaired; reverting to no-form-distinction re-instates the diagnosed defect. This is a structural argument (the structural property "design-elision" is operative on the no-form-distinction framing), not a precedent argument.

- **At Q3 (vocabulary canonicalization):** CONTRARIAN-RETHINK alternative = dual vocabulary ("candidates" + "options") to distinguish form-(i) from form-(ii) entries. Rejected on scrutiny survival + mechanism independence grounds. Form-(i)/form-(ii) is at the OUTPUT-FORM level, not the ENTRY level; the same entry can be in form-(i) at one point and form-(ii) at another. Vocabulary multiplicity introduces avoidable ambiguity.

- **At Q4 (rule body extension):** CONTRARIAN-RETHINK alternative = relocate "Completeness before novelty" to §1.3 NOT-list as a meta-exclusion. Rejected on 5-of-5 test grounds. §1.3 NOT-list is meta-exclusion (what /explore does NOT do); the completeness rule's role is operational direction (what /explore DOES). Relocating loses operational specificity.

- **At Q5 (comparison-axes dimension sub-bullet):** CONTRARIAN-RETHINK alternative = runner-judgment-only "axes-aware" principle without operational specifics (3 minima + artifact-observable + cross-ref). Rejected on 5-of-5 test grounds. The 02-15 R10 retrospective test fails under runner-judgment-only because runner-judgment is precisely what allowed the cognitive_harness-installability axis to be missed in the first place. This is the partial framing 21-00-30 + 21-04-00 diagnosed as inadequate.

Each rejection cites structural reasoning, not precedent. The structural property "this would re-instate the diagnosed defect" is grounded in WHAT THE PARTIAL FRAMING ACTUALLY IS, not in WHAT 21-04-00 SAYS. The 21-04-00 finding identified the design-elision; the structural property exists independently of 21-04-00's identification.

### Why the integration is genuinely structural, not wording-claim

The strongest possible prosecution at Critique was on Q2's Possibility mode bullet extension: that preserving existing definition phrases ("the territory is conceptual; candidates must be generated to be placed on the map" + "Scan = generate candidates at surface level. Probe = examine a candidate more closely.") and appending form-recognition at the tail could be argued as accretion-in-disguise.

The defense overcame this prosecution on 5 structural grounds (per Section 2 above), of which the load-bearing argument is the mechanical structural test: quote the original bullet's body unchanged after applying the redesign — does it match the new bullet's body? NO. The redesign genuinely reframes the bullet's body to recognize 2 output forms. The preserved phrases are preserved BECAUSE they remain accurate at the mode-level (modes are still territory-determined; candidates are still what gets generated); the redesign is at the form-recognition level within the mode.

Integration tests T1-T5 (the 5 mechanical tests from Exploration R9) all PASS. T5 ("pre-redesign-history-invisible reading") is the most subjective; it depends on a future reader perceiving the AFTER text as designed-this-way-from-the-start. The text contains no additive markers ("additionally," "moreover," "also," "in cases where..."); the prose flows naturally; the form sub-bullets are nested inside the Possibility mode bullet; the rule body's per-dimension structure is integral.

### Why the user-clarity bar was a critical dimension

The user's prior correction at 21-03-00 surfaced a specific clarity concern: "i dont understand this at all, it is so ambigious terms / Proposed wording (verbatim for direct application) section is it an addition or change for example, i dont understand." The user explicitly required clarity in how the spec edits were presented.

This inquiry's User-clarity-bar dimension (D14 in Critique) required:
- Operationally specific trigger phrases ("deliverable requires per-candidate assessment on shared criteria" — not the loose "substance").
- Disambiguated form names (the full definition "a set of candidates without per-candidate comparative scoring on shared criteria" clarifies form-(i)'s "Candidates-only" name).
- Concrete axis minima with parenthetical exemplars (rather than abstract category names).
- Artifact-observable requirement in operationally specific form (rather than vague "artifact-observable output").

Critique evaluated each of these and confirmed PASS on the User-clarity-bar dimension. The MINOR optional REFINE on axis-(c) qualifier ("when applicable" → "if it fires") is the only residual clarity-concern flagged; the current form is acceptable.

### Why cross-discipline propagation stayed OUT OF SCOPE

The 21-04-00 finding's MC-ENHANCE-1 (LOOP_DIAGNOSE protocol taxonomy enhancement) and MC-ENHANCE-2 (Innovate Intervention-Shape-Axis Inversion enhancement) were both DEFERRED to monitoring observable per the LOOP_DIAGNOSE Step 5 guardrail. One correction chain (the 21-03-00 → 21-04-00 → this inquiry trio) is insufficient evidence for cross-cutting commits.

This inquiry honors that deferral. The redesign is scoped to /explore §3.1 only. The named "Additive-fix anchoring bias" is applied self-vigilantly within this inquiry's pipeline (per Innovation Q8 + Critique D7 self-vigilance checks), but the cross-discipline corrective is not committed.

If 2+ additional correction-chain incidents surface the same classification-naming gap or same-category-Inversion pattern, MC-ENHANCE-1 + MC-ENHANCE-2 promote from DEFERRED to actionable. Until then, the corrective stays at the substrate-awareness level (the named meaning-node from 21-04-00) rather than at the spec-mechanism level.

---

## Open Questions

### Monitoring

- **Whether the redesigned §3.1 catches form-B output situations in future possibility-mode runs.** Observe future inquiries that produce comparison-structure output (pros/cons tables; multi-attribute scoring grids; ranked lists with stated criteria). Does axis-enumeration happen naturally per the redesigned spec, or are axes still implicit? If 3+ future inquiries fire the rule correctly, the diagnostic is empirically validated.

- **Whether the MINOR optional REFINE on axis-(c) qualifier ("when applicable" → "if it fires") improves operational clarity.** If the user signals a clarity concern about the parenthetical qualifier, applying the alternative wording is a one-character change.

- **Whether MC-ENHANCE-1 + MC-ENHANCE-2 monitoring observables fire.** Track future correction-chain incidents for the same classification-naming gap (MC-ENHANCE-1) or the same-category-alternative-only Inversion pattern (MC-ENHANCE-2). 2+ additional incidents promote the candidates to actionable.

### Blocked

- **Empirical validation of the redesign.** Cannot be answered until (i) the redesigned §3.1 commits + (ii) future inquiries produce form-B outputs and either fire the rule correctly or surface continued misses.

- **Whether the user perceives the AFTER text as integrative or accreted.** Critique's D7 (Integration-vs-accretion) and D10 (Pre-redesign-history-invisibility) verdict is PASS based on mechanical structural testing + 5-test rejection of CONTRARIAN-RETHINK at Innovation. The subjective reader test (T5) is the residual uncertainty; only direct user response confirms.

### Research Frontiers

- **Pattern of "REPAIR + EXTEND for design-elision" as a project precedent.** This inquiry is the first explicit application of REPAIR + EXTEND for design-elision (as distinct from ADD-CONTENT for mechanism-absence). If additional inquiries surface design-elision diagnoses, the REPAIR + EXTEND pattern becomes a precedent. A future research-frontier inquiry could codify when REPAIR + EXTEND is the right shape vs other shapes from the Intervention-Shape Vocabulary.

- **Cross-discipline form-recognition.** /innovate's mechanism applicability matrices, /td-critique's fitness landscape, /sense-making's perspective tables — these produce form-B-like structures. The 21-04-00 MC-ENHANCE-1 + MC-ENHANCE-2 monitoring observables track whether similar design-elisions exist in those disciplines. If yes, a cross-discipline form-recognition protocol could be designed.

- **Operational test mechanism for "integration vs accretion" beyond T1-T5.** Critique's D7 used the 5 mechanical tests from Exploration R9. A future inquiry could codify a more general test mechanism for integration verification — applicable to REPAIR + EXTEND fixes across disciplines.

### Refinement Triggers

- **A second correction-chain incident at /explore §3.1.** If a future inquiry surfaces a different kind of axis-enumeration gap (e.g., the 3 minima don't cover a new class of axis), the axis-minima list refines via additional minimum types.

- **A user objection on D7 (Integration-vs-accretion).** If the user reads the AFTER text and perceives accretion-in-disguise, the locus is Q2's Possibility mode bullet extension. The alternative restructure (defining forms first, then describing scan/probe semantics within each form) is available as an emergency refinement path.

- **Cross-discipline propagation triggers.** If 2+ additional correction-chain incidents surface the same classification-naming gap (MC-ENHANCE-1) or same-category-Inversion pattern (MC-ENHANCE-2), the deferred enhancements promote to actionable.

- **The user explicitly invalidates the redesign approach.** If the user objects to REPAIR + EXTEND as a fix-shape (e.g., prefers a fundamentally different framing), the redesign would be re-examined at the MEANING layer.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+ Verdict on 21-03-00 proposed edits: HOLD + REDO. Do NOT commit MC1/MC2/MC3 as-is.
Treat 21-03-00's content (proposed wordings + cross-discipline coherence analysis + auto-memory
compliance verification) as INPUT to a future design-defect redesign inquiry that produces the
integrated §3.1 fix per the Section 6 sketch.

lets do the redesign inquiry correctly
```

</details>

---

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-05-21_04-00__loop_diagnose__additive_fix_tendency_over_design_defect_inspection/` — the META-LOOP_DIAGNOSE that diagnosed §3.1's design defect and committed the MEANING-layer APPROACH this inquiry operationalizes.

- **SUPERSEDES (the MC1 scope of):** `devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/` — specifically MC1 (Exploration spec edit). MC2 + MC3 remain user-discretion. The 21-03-00 finding's content was used as INPUT (wording elements + auto-memory compliance verification + cross-discipline coherence analysis), not as final.

- **RELATED (upstream diagnostic):** `devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/` — the original LOOP_DIAGNOSE that identified the gap. Its TYPE-A "mechanism-absence" classification was reframed by 21-04-00 as "design-elision"; this inquiry operationalizes the reframing.

- **RELATED (original incident):** `devdocs/inquiries/2026-05-20_02-15__preserved_frontier_resolution_pattern_codification_deep_dive/` — the inquiry whose R10 location-options table demonstrated form-B output without spec mechanism guidance. Retrospective test case for the redesigned §3.1.

- **POTENTIAL DOWNSTREAM:** if the user commits 21-03-00's MC2 + MC3, those edits at Critique + Sensemaking specs reinforce the §3.1 redesign's pattern. If 2+ additional correction-chain incidents surface, MC-ENHANCE-1 + MC-ENHANCE-2 from 21-04-00 promote from DEFERRED to actionable, triggering future cross-discipline inquiries.
