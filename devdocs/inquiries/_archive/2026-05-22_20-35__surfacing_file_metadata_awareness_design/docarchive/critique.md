# Critique — surfacing file-metadata awareness design

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/_branch.md`

Plus all prior discipline outputs: exploration.md, sensemaking.md, decomposition.md, innovation.md.

Stake level: **HIGH** (the spec edit shapes future discipline behavior across MVL2+ inquiries; touches multiple spec sections; the discipline is foundational for downstream cognitive work). Burden of proof: defense must demonstrate clear viability.

---

## Phase 0 — Dimension Construction

### Dimensions extracted from sensemaking SV6 + project context

| Dim | Name | Extracted from | Weight | Pass criterion |
|---|---|---|---|---|
| **D1** | Correctness | Sensemaking meaning-nodes (Failure modes A + B) | CRITICAL | Failure mode A's signal captured AND Failure mode B structurally protected |
| **D2** | Coherence | §1.1 (purpose-conditioned relevance), §1.3 NOT-list, §4.4 asymmetric-failure | CRITICAL | No violation of NOT-list entries 5/6; no violation of §4.4; no axis confusion |
| **D3** | Feasibility | §2.1 extensibility, §5.4 schema extensibility, §1.3 note placement | MEDIUM | Spec text is integration-ready; no rewriting of existing sections |
| **D4** | Completeness | Both failure modes addressed; possibility-case handled; future-extension pattern | CRITICAL | Both failure modes + scope + extensibility addressed |
| **D5** | Robustness | Future-reader robustness (Ambiguity 4 driver) | CRITICAL | Defense-in-depth across surfaces; explicit reaffirmations; misread-resistance |
| **D6** | Elegance / Parsimony | Minimal-MVP principle | MEDIUM | M1's minimal scope; no over-engineering; no out-of-scope commitments |

### Project-specific risk dimensions (Phase 0 refinement note)

The candidate set involves project artifacts (the surfacing spec). Project-specific risk dimensions added:

| Dim | Name | Extracted from | Weight | Pass criterion |
|---|---|---|---|---|
| **D7** | Identity preservation | Surfacing's discipline-identity invariants (observable-fact / labeling-level / non-filtering / per-invocation-idempotent / purpose-conditioned-relevance) | CRITICAL | All identity invariants preserved |
| **D8** | Spec evolvability | Named-category pattern; placement convention at `docs/discipline_rule_placement.md` | HIGH | Future additions accommodate without restructuring |

### Dimension validation (cross-reference to sensemaking perspectives)

| Sensemaking perspective | Covered by dimension(s) |
|---|---|
| Technical/Logical | D3 |
| Human/User | D1 (user's stated value) |
| Strategic/Long-term | D8 (precedent-setting; project-level pattern) |
| Risk/Failure | D2 + D5 + D7 |
| Resource/Feasibility | D3 |
| Definitional/Internal Consistency | D2 + D7 |
| Phase/Calibration-State | N/A (sensemaking concluded no phase dependence) |

**Coverage of sensemaking perspectives: complete.** No dimension blindness.

**Are any dimensions noise?** No — each dimension has meaningful candidate variation visible in the candidate set.

---

## Phase 1 — Fitness Landscape

### Viable region

Addition that:
- Captures `last-edit-time` at §2.1 Item-enumeration in artifact case (D1).
- Emits as labeling-level, not interpretation (D2, D7).
- Non-filtering with explicit reaffirmation at §2.1 (D2, D5, D7).
- Scoped to artifact-case-only with possibility-case explicitly N/A (D4).
- Named-category pattern enabling future-extension (D8).
- Multi-surface placement following `docs/discipline_rule_placement.md` (D3, D8).
- Minimal at MVP — only `last-edit-time` (D6).

### Dead regions

| Position | Killed on dimension | Reason |
|---|---|---|
| Filter items on mtime (P8 from exploration) | D2 + D7 | Violates §4.4 asymmetric-failure principle; introduces Failure mode B |
| Judgment-adjacent naming (`freshness`, `staleness`, `currency`, `activity`) | D2 + D7 | NOT-list entry 5 risk (quality evaluation) |
| Mix mtime into Relevance-attribution (P4 from exploration) | D2 | Purpose-conditioned axis violation; confuses relevance with content-conditioned property |
| Emit judgment label ("this is idle") rather than raw timestamp | D2 + D7 | NOT-list entry 6 violation (interpretive meaning) |
| Threshold commitment at MVP (e.g., "old = mtime > 30 days") | D6 | Load-bearing quantifiable claim per /explore §3.5 requires empirical probing |
| New top-level §2.5 "Metadata Annotations" section instead of multi-surface placement | D3 + D8 | Violates placement convention |

### Boundary regions

- M2 (freshness-confidence tier): boundary on D6 (adds complexity without validated benefit) — **DEFERRED disposition is correct boundary handling**.
- M3 (per-region edit-time-distribution): boundary on D6 (derivable from Trace; doc-only) — **DEFERRED disposition is correct**.
- Q6 (out-of-scope verdict for downstream-consumer rules): boundary on D4 — does completeness require downstream rules, or can the addition be complete-within-scope?

### Unexplored regions

- Whether the named category will actually accommodate future metadata kinds (empirically untested — no future kinds exist yet).
- Whether downstream consumers will correctly interpret raw timestamps without staleness-tier guidance (untested at MVP).
- Whether project-wide "observable-fact metadata annotations" pattern applies to OTHER disciplines (explicitly out-of-scope for THIS inquiry; future-inquiry frontier).

---

## Phase 2 — Adversarial Evaluation

### Candidate: Q1 — M1 (minimal) verdict

**Prosecution (multi-axis):**
- *User-perspective objection:* User said "this metadata is good for looking at recently edited files and what is the active task." User explicitly named "recently edited" as a usability category. M1 emits raw timestamps without recency framing — downstream cannot trivially distinguish "recent" without computation. The user wants to know "is this recent?" — M1 punts entirely.
- *Failure-case scenario:* A downstream sensemaking pass reads a Trace with 200 items, timestamps spanning 3 years. No built-in recency-weighting mechanism. M1's value-delivery is gated on downstream effort.
- *Specification-gap probe:* M1 specifies WHAT is captured but not whether downstream should weight by recency. The addition's effect is contingent on downstream behavior the spec doesn't direct.

**Defense:**
- Q6's out-of-scope verdict preserves the downstream-rule concern as RESEARCH FRONTIER — not silently dropped, preserved with correct scope.
- M2 revival trigger (≥2 metadata-reliability concerns) handles "downstream needs more guidance" empirically.
- Raw-timestamp emission is structurally cleanest. Any tier commitment at MVP = Surface-Only Scanning instance per /explore §3.5.
- The user's "but" guard is structurally upheld by M1's no-tier policy — committing to tiers re-introduces the warned failure mode.
- Project-precedent absence (R4) requires minimal first-addition.

**Collision:**
The prosecution's user-perspective objection identifies SIGNALS the addition must ENABLE, not BEHAVIORS surfacing must PERFORM. Sensemaking SV6's labeling-vs-judgment boundary explicitly draws this line: surfacing emits raw fact; downstream interprets. The user's positive framing is satisfied by ensuring downstream HAS the signal — which M1 does. The specification-gap is intentional and preserved as RESEARCH FRONTIER.

**Position:** D1 PASS · D2 PASS · D3 PASS · D4 PASS · D5 PASS · D6 PASS · D7 PASS · D8 PASS.

**Verdict: SURVIVE** (caveat: value-delivery contingent on downstream-consumer rules — the RESEARCH FRONTIER is the load-bearing follow-up).

---

### Candidate: Q2 — §2.1 spec extension text

**Prosecution:**
- *Style-mismatch objection:* The extension is FOUR PARAGRAPHS. Surfacing's existing §2.1 component table is a 6-row table with one-sentence role descriptions. Sudden density jump.
- *Failure-case scenario:* A reader skimming §2.1 sees the table, scans past, encounters a multi-paragraph block. They might not realize the block extends the Item-enumeration row specifically — could re-introduce the ADD-DIMENSION interpretation.
- *Specification-gap probe:* The extension says "captures observable file-system metadata" but doesn't specify HOW (fstat? equivalent?).

**Defense:**
- The extension's multi-paragraph structure is REQUIRED by content load: (i) mechanism description, (ii) non-filtering reaffirmation, (iii) named-category framing, (iv) possibility-case handling. Compressing would lose defense-in-depth.
- Each paragraph carries DISTINCT semantic load (sensemaking Ambiguities 1, 3, 4, 5 each contribute one paragraph's-worth).
- The bolded title "Observable-fact metadata at Item-enumeration (artifact case)" structurally anchors the extension to Item-enumeration — explicit attachment.
- HOW-specification (file-system syscall level) is below the spec's natural granularity — consistent with how existing §2.1 components describe WHAT, not HOW.

**Collision:**
The style-mismatch objection penalizes thoroughness in service of thoroughness — structurally weak. The misread risk is mitigated by the bolded title's explicit attachment. The HOW gap is appropriate spec-level reticence.

**Position:** D1-D8 all PASS.

**Verdict: SURVIVE.**

---

### Candidate: Q3 — §5.4 Traversal Trace schema row

**Prosecution:**
- *Style-mismatch objection:* The row's content description has multiple sentences (format spec, scope, non-filtering reference, category reference). Existing per-entry fields have one-line descriptions.
- *Failure-case scenario:* Reader sees concise rows for existing fields, verbose row for `last-edit-time`. May infer it's "more important" than (say) the relevance verdict — mis-prioritization.
- *Specification-gap probe:* "Alternative formats acceptable if internally consistent" — consistent relative to what?

**Defense:**
- Verbose content carries TWO cross-references (§2.1 metadata-capture; named-category) that existing fields don't need.
- "Internally consistent" = within one inquiry's Trace, the same timestamp format throughout. Sensible MVP compromise without empirical data on which format is best.
- The verbosity reflects content load, not structural inconsistency.

**Collision:**
The style-mismatch objection has partial merit. The cross-references are structurally load-bearing BUT could be relocated to a note immediately after the schema table, restoring row-level concision while preserving the cross-references.

**Position:** D1 PASS · D2 PASS · D3 PASS · D4 PASS · D5 PASS · D6 PARTIAL (row could be more concise) · D7 PASS · D8 PASS.

**Verdict: REFINE.**

**Refinement target:** Restructure Q3 — keep the row content short and stylistically consistent with siblings; move cross-references to a note immediately after the schema table. Specifically:

- Row content (concise version):
  > **`last-edit-time`** | Observable file last-modified timestamp at the moment of enumeration. Format: ISO 8601 timestamp string recommended; per-inquiry-consistent alternative formats acceptable. Artifact case only; absent or N/A in possibility-case records.
- Note after schema table:
  > *Note on `last-edit-time`*: this field is the first instance of the **observable-fact metadata annotations** category (see §2.1's metadata-capture sub-text). The annotation is **non-filtering** per §4.4 (asymmetric-failure principle) and §2.1's reaffirmation.

This refinement preserves all substantive content while improving stylistic coherence with surrounding rows.

---

### Candidate: Q4 — §1.3 NOT-list clarification note

**Prosecution:**
- *Redundancy objection:* The note explicitly cross-references NOT-list entries 5 AND 6 just below the table where those entries were listed. The reader might find this redundant or defensive.
- *Failure-case scenario:* A reader reaches §1.3 after the addition, sees the note saying "X is not entries 5 or 6." Their question: "Why is this here?" No precedent for confusion exists yet — the note appears precautionary.
- *Specification-gap probe:* The note's universalism (the entire CATEGORY is not entries 5 or 6) may overstate. Future kinds may not fit the category cleanly (e.g., `test-coverage-status` — observable or judged?).

**Defense:**
- Defensive posture is appropriate as FIRST-INSTANCE-IN-CATEGORY. Setting the boundary at first occurrence prevents future drift; reactive correction after observed drift is costlier.
- Categorical claim is bounded by category-defining properties (content-conditioned, observable-fact). Hypothetical kinds that don't fit don't qualify.
- Removing the note risks Failure mode A's mirror error at the NOT-list reading surface — defense-in-depth is load-bearing.

**Collision:**
The redundancy objection is structurally weak — the note is intentional defense-in-depth, not duplication. The universalism concern is theoretical; the category-defining-properties test handles future cases.

**Position:** D1-D8 all PASS.

**Verdict: SURVIVE.**

---

### Candidate: Q5 — Category framing (lives within Q2)

**Prosecution:**
- *User-perspective objection:* User did not use "observable-fact metadata annotations" — they said "metadata (last datetime of edit) of files." The category name is loop-coined neologism without user-language validation. (Sensemaking's Load-bearing concept test refinement applies here.)
- *Onboarding-cost objection:* The category name is FIVE-WORD MULTI-CONCEPT. New reader has to parse: annotation + metadata + observable-fact. Lower-cost alternative: "metadata annotations" alone.
- *Specification-gap probe:* The category lists examples (file-size, line-count, git-tracked-state) but doesn't define explicitly which observable properties qualify. Membership criterion is implicit.

**Defense:**
- Each word load-bears: "observable-fact" (anti-drift on NOT-list 5/6) + "metadata" (anti-confusion with item content per §5.3 thin-artifact) + "annotations" (alignment with existing surfacing vocabulary — relevance-tag, relevance-confidence).
- The user's "metadata" appears in the category name; the qualifier "observable-fact" was added to disambiguate from inferred/judged metadata (per Sensemaking Ambiguity 1's structural grounds), NOT to coin against user language.
- Membership criterion is the category's defining properties (content-conditioned, observable-fact, labeling-level, non-filtering, downstream-consumable). Future kinds pass the property test.

**Collision:**
The user-language objection is partial: the user used "metadata" but the qualifier "observable-fact" was added for structural disambiguation, not gratuitously. Sensemaking explicitly tested shorter names and chose this one. The verbosity is the disambiguation cost.

**Position:** D1 PASS · D2 PASS · D3 PASS · D4 PASS · D5 PASS · D6 PARTIAL (verbose name) · D7 PASS · D8 PASS.

**Verdict: SURVIVE with caveat.**

**Caveat:** the category name's verbosity is a design choice future readers may find clunky. If empirical observation reveals frequent confusion about the name, revisit. (Not blocking.)

---

### Candidate: Q6 — Out-of-scope verdict for downstream-consumer rules

**Prosecution (multi-axis):**
- *Killer objection:* Without downstream-consumer rules, the addition's value is contingent on each consumer's ad-hoc handling. M1's spec edit emits raw timestamps; no consumer is OBLIGATED to use them. The addition could land and be silently ignored.
- *Failure-case scenario:* After the spec edit lands, MVL2+ runs an inquiry. Surfacing populates `last-edit-time`. Sensemaking reads, doesn't know what to do, ignores. Innovation reads, ignores. ZERO impact on downstream behavior. Failure mode A persists despite the addition.
- *User-perspective objection:* User's stated value ("recently edited files... active task") is realized only if downstream uses the metadata. Q6 explicitly defers this.
- *Specification-gap probe:* Q6 preserves the question as RESEARCH FRONTIER but doesn't commit a concrete trigger or timeline.

**Defense:**
- User's question scope was explicitly the surfacing discipline. Expanding cross-discipline would violate the inquiry's frame.
- Sensemaking's Frame-exit Completeness perspective did not fire — no structural pressure to expand.
- Adjacent discipline specs have their own identity territories; specifying their consumer rules in surfacing's inquiry would be unilateral.
- "Could be silently ignored" applies to ANY new spec addition — not specific to this one.

**Collision:**
The specification-gap probe has force. The Q6 verdict is correct, but the RESEARCH FRONTIER would be more actionable with a concrete trigger.

**Position:** D1 PARTIAL (value-delivery contingent on downstream) · D2 PASS · D3 PASS · D4 PARTIAL (the addition is structurally complete; END-TO-END value-delivery is incomplete pending downstream) · D5 PASS · D6 PASS · D7 PASS · D8 PASS.

**Verdict: REFINE.**

**Refinement target:** Add a concrete revival trigger to the RESEARCH FRONTIER:

> **Trigger:** after ≥2 MVL2+ inquiries produce Traces with `last-edit-time` populated, run a follow-up inquiry to design downstream-consumer rules. Priorities for the follow-up: (i) sensemaking's anchor-extraction weighting by recency; (ii) innovation's Combination mechanism preferences over recent material; (iii) td-critique's flagging of candidates resting on stale references; (iv) decomposition's awareness of recency clustering. Each per-discipline rule is itself a sub-inquiry surface.

This grounds the RESEARCH FRONTIER in observable conditions (artifact-presence trigger).

---

### Candidate: Q7 — Selection criteria

**Prosecution:**
- *Weighting-gap objection:* The five criteria are listed but their RELATIVE WEIGHTS are not specified. If future M2/M3 revival triggers fire and produce ties between paths, which criterion wins?
- *Failure-case scenario:* M2 revival trigger fires later. Evaluator applies the same five criteria. Without weights, the verdict could shift based on which criterion the evaluator emphasizes. Evaluation-drift risk.
- *Specification-gap probe:* Criterion (ii) cites /explore §3.5 (load-bearing quantifiable claims). The cross-reference is one-way (surfacing → /explore).

**Defense:**
- The criteria's ORDER in Q7's principal text conveys implicit priority: (i) listed first (highest); (v) listed last but still critical.
- All five criteria converged on M1 in this evaluation. No tie required tie-breaking.
- The cross-reference convention is standard project practice.

**Collision:**
The weighting-gap concern is forward-looking but real. Adding an explicit weighting note (especially distinguishing fatal vs convergent criteria) would harden against future evaluation drift.

**Position:** D1-D8 PASS; D5 could be marginally stronger against future evaluator drift.

**Verdict: SURVIVE with caveat.**

**Caveat:** consider adding an explicit weighting note distinguishing fatal vs convergent criteria for use when M2/M3 revival triggers fire later. Specifically: **criterion (iv) — asymmetric-failure-principle preservation — is fatal-weighted (failing it kills the path regardless of other criteria); criteria (i)-(iii) and (v) are convergent-weighted (verdict is the convergent verdict across them).** Not blocking; nice-to-have for future-evaluator-robustness.

---

### Candidate: The Assembly (Q1-Q7 + emergent properties)

**Prosecution:**
- *Maintenance-drift objection:* The assembly spans three spec sections (§1.3, §2.1, §5.4). A future maintainer could update one without updating the others.
- *Failure-case scenario:* Six months from now, someone adds `file-size` (a future observable-fact metadata kind). They update §2.1's category description. They forget §5.4 (schema doesn't gain the new field). They forget §1.3 (note doesn't mention the new example). Inconsistency.
- *Specification-gap probe:* No explicit maintenance directive in the assembly for future category additions.

**Defense:**
- The placement convention at `docs/discipline_rule_placement.md` IS the maintenance directive — any future addition follows the same multi-surface placement.
- The Q5 category framing says "future metadata kinds may extend the category under the same constraints without structural change" — implicit maintenance pattern.
- Maintenance drift is a general spec-engineering concern bounded by the convention's existence.

**Collision:**
The maintenance-drift concern is addressable by adding a brief maintenance note in Q5 (or in a project-level doc). One line is sufficient.

**Position:** D1-D7 PASS · D8 PARTIAL (forward-extension pattern works but could be more maintenance-explicit).

**Verdict: SURVIVE with caveat.**

**Caveat:** consider adding a one-line maintenance directive to Q5's category framing — "Future additions to this category follow the same multi-surface placement: §2.1 mechanism description + §5.4 schema row + §1.3 NOT-list note reference, per `docs/discipline_rule_placement.md`." Not blocking.

---

### Candidate: Emergent property 1 — Defense-in-depth on Failure mode B

**Prosecution:**
- *Text-vs-enforcement objection:* "Defense-in-depth" via §4.4 + §2.1 reaffirmation is two textual layers. Both can be misread. The actual defense is the absence of filtering-code-paths, which the spec doesn't enforce at LLM-runtime; relies on the LLM following the spec.
- *Failure-case scenario:* A future spec edit "tightens" surfacing by adding "skip files older than 90 days" to Inhibition. Both layers say the annotation is non-filtering, but the new rule operates on the same data (mtime).

**Defense:**
- The two layers are at DIFFERENT abstraction levels: §4.4 is identity-layer (the asymmetric-failure principle is non-violable); §2.1 reaffirmation is mechanism-layer (this specific annotation does not participate in filtering). A future edit violating EITHER layer also violates §4.4 (identity).
- The defense-in-depth property is TEXT-LEVEL robustness — visible at multiple surfaces so future readers/maintainers more likely to notice the constraint.
- The hypothetical "Inhibition tightening" edit would explicitly violate §4.4.

**Collision:**
The text-vs-enforcement objection conflates spec robustness with executable enforcement. Surfacing is a discipline spec; all constraints are text-level. Defense-in-depth via multiple textual surfaces IS the appropriate robustness mechanism for text-level spec.

**Position:** D1-D8 all PASS. Genuinely emergent (exists only in combination).

**Verdict: SURVIVE.**

---

### Candidate: Emergent property 2 — Anti-drift on Failure mode A's mirror error

**Prosecution:**
- *Empirical-evidence objection:* Has any past surfacing inquiry produced the "fact vs judgment" confusion? Without empirical evidence of the risk, three-surface anti-drift may be over-engineering.
- *Failure-case scenario:* Reader of §5.4 alone doesn't encounter §2.1 or §1.3 surfaces. Does anti-drift work for partial readers?

**Defense:**
- The anti-drift is precautionary, not empirical-driven. Setting the boundary at FIRST introduction is structurally rigorous given §1.3 NOT-list entries 5 + 6 already exist. The risk surface (drift into quality / interpretation) is documented.
- §5.4 alone includes "Format: ISO 8601 timestamp string recommended" — signals "this is data, not judgment" to partial readers.
- §1.3 NOT-list note is one paragraph after the table — visible at the NOT-list reading surface.

**Collision:**
The empirical-evidence objection has some force but is outweighed by the structural rigor argument: defense-in-depth at first introduction is the right time, not reactively after observed drift.

**Position:** D1-D8 all PASS. Genuinely emergent.

**Verdict: SURVIVE.**

---

### Candidate: Emergent property 3 — Forward-extension without restructuring

**Prosecution:**
- *Edge-case objection:* Future kind `is-symbolic-link` is observable fact, but its INTERPRETATION matters at downstream consumption. The category may not accommodate all observable file properties without nuance.
- *Failure-case scenario:* Future addition `git-tracked-state` is project-specific (assumes git). In a non-git codebase, the annotation is N/A. Adds scope-conditionality the current category doesn't explicitly handle.

**Defense:**
- The category's "may extend... under the same constraints" is permissive but not unconditional. Each future kind must pass the defining properties; kinds that don't (judgment-required, model-classified) don't qualify.
- Artifact-case-only scope handles scope-conditionality: `git-tracked-state` is observable in git-tracked artifact case, N/A elsewhere (analogous to `last-edit-time` in possibility case).
- Forward-extension is conditional on passing the category test — gateway-like, not unconditional.

**Collision:**
The edge-case concern is handled by the category's defining-properties test. Forward-extension is sound under the gateway test.

**Position:** D1-D8 all PASS. Genuinely emergent.

**Verdict: SURVIVE.**

---

### Candidate: DEFERRED M2 (per-item freshness-confidence tier)

**Prosecution:**
- *Trigger-vagueness objection:* "≥2 inquiries report metadata-reliability concerns" is observable but vague. What counts as a concern? User complaint? LOOP_DIAGNOSE? REFLECT observation? The threshold could be reached too soon or never.

**Defense:**
- Concrete operational mechanics aren't required at deferral time; they'll be specified when the trigger fires.
- The trigger names a signal type ("metadata-reliability concerns") + a minimum count (≥2). Sufficient for falsifiability.

**Collision:**
The trigger could be tightened (e.g., "concern recorded in LOOP_DIAGNOSE finding OR REFLECT observation"). Minor refinement; not blocking.

**Position:** D1-D8 all PASS.

**Verdict: SURVIVE** (DEFERRED disposition confirmed; trigger refinement is optional).

---

### Candidate: DEFERRED M3 (per-region edit-time-distribution)

Same structural prosecution / defense as M2. Trigger: "≥3 inquiries report cross-region recency-comparison needs."

**Verdict: SURVIVE** (DEFERRED disposition confirmed).

---

### Candidate: RESEARCH FRONTIER (downstream-consumer rules)

Already addressed via Q6 REFINE above. The refined trigger ("after ≥2 MVL2+ inquiries produce Traces with `last-edit-time` populated") grounds the frontier in observable conditions.

**Verdict: SURVIVE-WITH-REFINE** (refinement specified at Q6 above).

---

## Phase 3.5 — Assembly Check

Combining all SURVIVE + REFINE survivors:

The assembly is the proposed spec edit applied to surfacing. Does NEW emergent value emerge beyond the three innovation-named emergent properties?

**TWO new emergent properties surface:**

**Emergent property 4 (NEW) — Calibration trajectory.** M1 ships now → M2/M3 wait for empirical signals (≥2 / ≥3 inquiries with specific concerns) → downstream-consumer rules wait for ≥2 inquiries with populated Traces. The trajectory is **self-calibrating evolution**: each subsequent extension waits for empirical signal rather than being pre-committed. The DEFERRED dispositions + the RESEARCH FRONTIER together form a calibration scaffolding the surfacing spec gains by this assembly.

**Verdict on Emergent property 4: SURVIVE.** Significant project-level value.

**Emergent property 5 (NEW) — Project-level pattern establishment.** The multi-surface placement (§2.1 canonical + §1.3 + §5.4 cross-references) following `docs/discipline_rule_placement.md` sets a project-level precedent for future discipline-design inquiries that add new mechanisms. The pattern is reusable across `/explore`, `/sense-making`, `/decompose`, etc. — any future addition that introduces a new per-item annotation in any discipline can follow this template.

**Verdict on Emergent property 5: SURVIVE.** Cross-discipline pattern value.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage

**Per-candidate coverage:** 13 evaluations completed.
- 7 principals (Q1-Q7): full adversarial testing.
- 3 innovation-named emergent properties: full adversarial testing.
- 2 DEFERRED dispositions (M2, M3): adversarial test on trigger structure.
- 1 RESEARCH FRONTIER (downstream-consumer rules): adversarial test on trigger specificity.
- Plus the Assembly + 2 new emergent properties surfaced at Phase 3.5.

**Per-solution-space coverage:** Landscape mapped. Viable region characterized. Dead regions identified (6 named). Boundary regions handled via DEFERRED. Unexplored regions named (3) and explicitly out-of-scope.

### Convergence assessment

- **At least one SURVIVE with no caveats:** YES — Q1, Q4, Emergent properties 1-5 all SURVIVE cleanly.
- **No KILLs:** confirmed.
- **REFINE verdicts (2):** Q3 (schema-row verbosity), Q6 (RESEARCH FRONTIER trigger specificity).
- **SURVIVE-with-caveat verdicts (3):** Q1 (downstream contingency), Q5 (category name verbosity), Q7 (weighting-note), Assembly (maintenance directive).
- **Landscape stability:** single-iteration discipline-design inquiry; convergence appropriate given upstream sensemaking + decomposition + innovation work.

### Signal: TERMINATE.

**Ranked survivors (final ordering by fitness landscape position):**

1. **The Assembly** (all 7 principals + 5 emergent properties) — full viable region.
2. **M1** (the path verdict) — the load-bearing core.
3. **Emergent properties 1-5** — defense-in-depth on B; anti-drift on A's mirror; forward-extension; calibration trajectory; project-level pattern establishment.
4. **DEFERRED M2, M3** with revival triggers — preserved options for future empirical-driven extension.
5. **RESEARCH FRONTIER** (downstream-consumer rules) with refined trigger — preserved frontier for follow-up inquiry.

---

## Phase 4 — Failure Mode Check

| Failure mode | Observed? | Reason |
|---|---|---|
| Wrong dimensions | NO | Dimensions extracted from sensemaking SV6; project-specific D7/D8 added per Phase 0 refinement note; cross-referenced against sensemaking perspectives |
| Rubber-stamping | NO | Prosecution constructed killer objections at each candidate (user-perspective objection at Q1; verbosity objections at Q3 + Q5; maintenance-drift at Assembly; text-vs-enforcement at Emergent property 1); each was tested |
| Nitpicking | NO | Multiple SURVIVE verdicts; refinements are TARGETED (not blanket "everything is bad"); kills are absent because no candidate falls in the dead region |
| Dimension blindness | NO | All sensemaking perspectives have corresponding dimensions; D7/D8 project-specific dimensions added |
| False convergence | NO | Single-iteration discipline-design inquiry; convergence is structurally appropriate given upstream work; at least one clean SURVIVE exists |
| Evaluation drift | NO | Dimensions fixed at Phase 0; applied consistently |
| Self-reference collapse | NO | Critique evaluates a surfacing-spec-edit; external grounding present via the user's "but" guard (extrinsic), file-system mtime (extrinsic empirical), project-precedent absence (exploration R4 empirical observation) |

**0/7 failure modes observed.**

---

## Final Deliverable

### (a) Dimensions with weights

| Dim | Name | Weight |
|---|---|---|
| D1 | Correctness | CRITICAL |
| D2 | Coherence | CRITICAL |
| D3 | Feasibility | MEDIUM |
| D4 | Completeness | CRITICAL |
| D5 | Robustness | CRITICAL |
| D6 | Elegance / Parsimony | MEDIUM |
| D7 | Identity preservation | CRITICAL |
| D8 | Spec evolvability | HIGH |

### (b) Fitness Landscape

- **Viable region:** mapped (see Phase 1).
- **Dead regions:** 6 identified (filter-on-mtime, judgment-naming, mtime-in-Relevance-attribution, emit-judgment, threshold-at-MVP, new-top-level-section).
- **Boundary regions:** 3 (M2, M3, Q6) — all handled via DEFERRED or REFINE.
- **Unexplored regions:** 3 (future-kind accommodation; downstream-interpretation; cross-discipline pattern) — explicitly out-of-scope for THIS inquiry.

### (c) Candidate Verdicts

| Candidate | Verdict | Notes |
|---|---|---|
| **Q1** M1 minimal verdict | **SURVIVE** | Value-delivery contingent on downstream-consumer rules (preserved as RESEARCH FRONTIER) |
| **Q2** §2.1 spec extension text | **SURVIVE** | Multi-paragraph structure justified by content load; bolded title structurally anchors |
| **Q3** §5.4 Traversal Trace schema row | **REFINE** | Move cross-references to a note after the table; row content becomes more concise |
| **Q4** §1.3 NOT-list clarification note | **SURVIVE** | Defense-in-depth at first introduction; not redundant |
| **Q5** category framing | **SURVIVE** with caveat | Category name verbosity is disambiguation cost; revisit if empirical confusion observed |
| **Q6** out-of-scope verdict for downstream-consumer rules | **REFINE** | Add concrete revival trigger to RESEARCH FRONTIER (≥2 inquiries with populated Traces) |
| **Q7** selection criteria | **SURVIVE** with caveat | Consider explicit weighting note (fatal vs convergent criteria); not blocking |
| **Assembly** (Q1-Q7 combined) | **SURVIVE** with caveat | Consider one-line maintenance directive in Q5 for future-category-additions |
| **Emergent 1** (defense-in-depth on B) | **SURVIVE** | Text-level robustness via multiple surfaces; identity-layer + mechanism-layer |
| **Emergent 2** (anti-drift on A's mirror) | **SURVIVE** | Defense-in-depth at first introduction; partial-reader-resilient |
| **Emergent 3** (forward-extension without restructuring) | **SURVIVE** | Category's defining properties act as gateway test |
| **NEW Emergent 4** (calibration trajectory) | **SURVIVE** | DEFERRED + RESEARCH FRONTIER form self-calibrating evolution scaffolding |
| **NEW Emergent 5** (project-level pattern establishment) | **SURVIVE** | Multi-surface placement is reusable template across disciplines |
| **DEFERRED M2** (freshness-confidence tier) | **SURVIVE** | Trigger sufficient for falsifiability (≥2 metadata-reliability concerns) |
| **DEFERRED M3** (per-region edit-time-distribution) | **SURVIVE** | Trigger sufficient (≥3 cross-region recency-comparison needs) |
| **RESEARCH FRONTIER** (downstream-consumer rules) | **SURVIVE-with-REFINE** | Refined trigger per Q6 above |

**0 KILLs · 2 REFINEs · 14 SURVIVEs (with or without minor caveats).**

### (d) Coverage Map

- Per-candidate coverage: full adversarial testing on all 16 entries.
- Per-solution-space coverage: viable / dead / boundary / unexplored regions fully characterized.
- Dimension coverage: 8/8 dimensions applied to each candidate; project-specific dimensions D7 + D8 added.

### (e) Signal

**TERMINATE.**

The proposed spec edit (the assembly of Q1-Q7 with the two Q3/Q6 refinements applied + the minor caveats consciously accepted as non-blocking) is the surviving direction.

The two REFINE actions are minor and within the scope of the existing innovation; they do not require re-running the SIC loop.

---

## Convergence Telemetry

| Telemetry field | Value |
|---|---|
| **Dimension coverage** | 8/8 (D1-D6 default + D7/D8 project-specific). Full coverage. |
| **Adversarial strength** | STRONG (each candidate received multi-axis prosecution per Phase 2 refinement note: user-perspective objection at Q1 + Q6; failure-case scenarios at every candidate; specification-gap probes at Q1, Q2, Q3, Q5, Q6, Q7). |
| **Landscape stability** | STABLE (single iteration; upstream disciplines stabilized the design space before critique). |
| **Clean SURVIVE exists?** | YES — Q1, Q4, Emergent 1-5 all SURVIVE without critical-dimension caveats. |
| **Failure modes observed** | 0/7. |

**Overall verdict: PROCEED.**

The spec edit can be applied to `cognitive_harness/surfacing/references/surfacing.md` with the two REFINE actions (Q3 schema-row restructure + Q6 RESEARCH FRONTIER trigger refinement) integrated. The minor caveats (Q5 verbosity, Q7 weighting note, Assembly maintenance directive) are non-blocking — accept as conscious design choices with revival triggers, or address with one-line additions as the spec author prefers.
