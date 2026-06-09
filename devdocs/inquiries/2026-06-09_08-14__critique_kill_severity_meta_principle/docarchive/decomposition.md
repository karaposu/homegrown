# Decomposition — critique_kill_severity_meta_principle

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/_branch.md

Input: _branch.md + surfacing.md + sensemaking.md (SV1→SV6 stabilized with PURPOSE-FITNESS meta-principle).
Layer Commitment: MEANING primary (stabilized). Decomposition pieces must remain at meaning-layer.
Goal: decompose the stabilized meta-principle + structural commitments + open frontiers into pieces with verification criteria + counter-questions (piece-level inversion).
```

---

## Step 1 — Coupling Topology

The stabilized model from sensemaking has 5 natural clusters with strong-within / weak-across coupling:

**Cluster A — Core meta-articulation** (high internal coupling; the meta-principle itself).
- The meta-principle's structure (purpose-fitness as single-axis).
- The 1-question practitioner-applicable form.
- The REFINE/KILL boundary (fixability-within-frame).
- The per-task composite calibration layer.

These four are TIGHTLY COUPLED structurally — each is a facet of the same meta-claim — but ANSWER DIFFERENT QUESTIONS (what is the principle? how does it convert to use? how does it carve up the verdict triplet? how does the application layer compose?). They are decomposable along the question-axis even though tightly coupled at the claim-axis.

**Cluster B — Scope clarifications** (moderate internal coupling).
- Constructive-output requirement as integral (not orthogonal).
- Confidence as orthogonal (not a severity axis).

Both clarify what's IN-SCOPE vs OUT-OF-SCOPE for the meta-principle. They're peers — each clarifies a different scope question.

**Cluster C — Locus + composition with existing spec structures** (moderate internal coupling).
- Severity-calibration locus = Phase 0 step 4.
- Rubber-Stamping (#2) + Nitpicking (#3) unification by the meta-principle.

Both address how the meta-principle relates to existing spec structures (one to the process; one to the failure-mode list).

**Cluster D — Frontier extensions** (low internal coupling; both are open questions).
- Ambiguous-purpose candidates (F1 from sensemaking).
- INTERIM verdict for insufficient evidence (F2 from sensemaking).

Both are open questions for the structural follow-up. Independent of each other.

**Cluster E — Meta-checks and synthesis** (the wrapping layer).
- Self-applicability check (the meta-loop test).
- Per-scenario picker for structural follow-up.

These operate on the WHOLE piece-set rather than as siblings of the other clusters.

**Coupling map:**

```
                    [P-META] (single-axis meta-principle)
                   ╱    │    ╲
                  ╱     │     ╲
   [P-PRACTICIONER-     │      [P-REFINE-KILL-BOUNDARY]
        TEST]           │          (fixability-within-frame)
                        │
                 [P-COMPOSITE-CALIBRATION]
                   (per-task composite)
                        │
            ────────────┼──────────────
                        │
       [Scope: integral/orthogonal scope clarifications]
       [P-CONSTRUCTIVE-OUTPUT-AS-TEST]  [P-CONFIDENCE-ORTHOGONALITY]
                        │
            ────────────┼──────────────
                        │
       [Locus + spec-composition]
       [P-CALIBRATION-LOCUS]  [P-RUBBER-NITPICK-UNIFICATION]
                        │
            ────────────┼──────────────
                        │
       [Frontier extensions]
       [P-FRONTIER-AMBIGUOUS-PURPOSE]  [P-FRONTIER-INTERIM-VERDICT]
                        │
            ────────────┼──────────────
                        │
       [Wrapping]
       [P-SELF-APPLICABILITY-CHECK]   [P-PICKER]
```

---

## Step 2 — Boundaries (Top-Down)

Natural cuts:

- **Within Cluster A:** the question-axis cut (what / how-applied / how-it-carves-verdicts / how-applied-per-task) separates four pieces despite tight claim-coupling.
- **Between Cluster A and Cluster B:** weak coupling — A articulates the meta-principle's STRUCTURE; B articulates its SCOPE. They reference each other but neither requires the other to make sense.
- **Between Cluster B and Cluster C:** weak coupling — B is intrinsic to the meta-principle; C is how the meta-principle relates to the existing spec.
- **Between Cluster C and Cluster D:** weak coupling — C is about the current spec; D is about open frontiers.
- **Between Cluster D and Cluster E:** weak coupling — D is open questions; E is meta-checks on the whole.

All boundaries pass the "low crossing traffic" test — few things flow across each except through explicit interfaces.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Irreducible atoms in the model:

- (a) "Purpose-fitness" as the meta-principle name → atomic; lives in P-META.
- (b) The single yes/no practitioner question → atomic; lives in P-PRACTICIONER-TEST.
- (c) The "fixability-within-frame" criterion for REFINE vs KILL → atomic; lives in P-REFINE-KILL-BOUNDARY.
- (d) The per-task composite (reversibility × blast-radius × scope × fixability) → atomic; lives in P-COMPOSITE-CALIBRATION.
- (e) "Seed extraction = articulating purpose-fitness failure" → atomic; lives in P-CONSTRUCTIVE-OUTPUT-AS-TEST.
- (f) "Confidence is evidence-strength, not severity-component" → atomic; lives in P-CONFIDENCE-ORTHOGONALITY.
- (g) "Phase 0 step 4 (Weight dimensions)" as the locus → atomic; lives in P-CALIBRATION-LOCUS.
- (h) "#2 + #3 = same meta-principle violated in opposite directions" → atomic; lives in P-RUBBER-NITPICK-UNIFICATION.
- (i) Layer-aware modification for ambiguous-purpose candidates → atomic; lives in P-FRONTIER-AMBIGUOUS-PURPOSE.
- (j) Possible 4th verdict (INTERIM) for insufficient evidence → atomic; lives in P-FRONTIER-INTERIM-VERDICT.
- (k) The self-loop test that the meta-principle applies to this inquiry's own output → atomic; lives in P-SELF-APPLICABILITY-CHECK.
- (l) Per-scenario picker for structural follow-up → atomic; lives in P-PICKER.

12 atoms map 1:1 to 12 pieces. No atom is split across pieces. No piece contains multiple unrelated atoms.

**Confidence:** HIGH on all boundaries — top-down clusters and bottom-up atoms agree.

---

## Step 4 — Question Tree

Each piece is expressed as a question with verification criteria + counter-question (piece-level inversion).

### P-META — What is the structural meta-principle of severity in `/td-critique`?

**Question:** What structural property of a defect makes it kill-worthy, in a way that holds across all evaluation domains (software / research / business / spec-edit)?

**Verification criteria:**
- [ ] The named principle is single-axis at the meta-level.
- [ ] The principle's articulation does not name any per-task content (no domain-specific examples used as load-bearing).
- [ ] The principle passes the 4-domain test (one example per domain confirming applicability without per-domain modification).
- [ ] The principle is consistent with the existing spec's commitments (does not require overturning any /td-critique section).

**Counter-question (piece-level inversion):** What if severity is genuinely composite at the meta-level — i.e., no single property captures kill-worthiness, and any single-axis answer is reductive? If this is true, the meta-principle is wrong as articulated.

### P-PRACTICIONER-TEST — What is the 1-question practitioner-applicable form of the meta-principle?

**Question:** How does the meta-principle convert to an operational test the practitioner can run during a real /td-critique invocation?

**Verification criteria:**
- [ ] The conversion reduces to a single yes/no question.
- [ ] The yes/no question has a structural answer (not a felt judgment).
- [ ] Across the 4 domains, the question is answerable without per-domain re-phrasing.
- [ ] The question doesn't require the practitioner to know the candidate's "purpose" in fixed terms — it should work even when purpose is implicit-from-context.

**Counter-question:** What if the practitioner-applicable form requires MULTIPLE questions (e.g., "is the purpose clear?" + "does the defect block it?" + "is the block in-frame fixable?") to be operationally adequate? If a single question collapses these into one, it may be too compressed for real use.

### P-REFINE-KILL-BOUNDARY — What structurally distinguishes a REFINE verdict from a KILL verdict?

**Question:** Given a defect is kill-worthy (blocks purpose-fitness), what determines whether the candidate should be REFINEd (with targeted feedback) or KILLed (with seed extraction)?

**Verification criteria:**
- [ ] The boundary is articulated as a structural property of the defect or the candidate.
- [ ] The boundary holds across the 4 domains (a refine in software has the same structural signature as a refine in business strategy).
- [ ] The boundary explains why some kill-worthy defects feed back to innovation (REFINE) while others feed back to sensemaking (KILL).
- [ ] The boundary maps onto the spec's existing language ("boundary region" vs "dead region" on the fitness landscape).

**Counter-question:** What if REFINE and KILL are positional on a CONTINUUM rather than separated by a structural boundary — i.e., the distinction is about confidence in the fix-availability, not about a binary fixability-in-frame property?

### P-COMPOSITE-CALIBRATION — How does the per-task composite calibration layer compose without reintroducing fixed-N-axis framing?

**Question:** If the meta-principle is single-axis at the meta-level but composite at the per-task application layer (reversibility × blast-radius × scope × fixability × confidence), how do the two layers compose structurally?

**Verification criteria:**
- [ ] The two layers are explicitly named as distinct (meta-axis vs calibration-axis).
- [ ] The calibration layer's composite axes are NAMED but not MANDATED as a fixed N — each task selects its load-bearing axes.
- [ ] The calibration layer's behavior is consistent with the spec's existing "weights come from the problem context" commitment.
- [ ] The calibration layer doesn't smuggle "stakes" back as a binary low/high — it preserves per-task richness.

**Counter-question:** What if the per-task composite IS the meta-principle (composite at all layers), and the "single-axis at meta-level" framing was a premature collapse of genuine multi-axis structure?

### P-CONSTRUCTIVE-OUTPUT-AS-TEST — Is the constructive-output requirement integral to the meta-principle or orthogonal to it?

**Question:** When the spec requires KILL to extract a seed (articulate why the candidate failed), is the requirement (a) a structural test of whether the KILL is real, or (b) an orthogonal downstream-value requirement that operates regardless of severity?

**Verification criteria:**
- [ ] The piece names which (integral vs orthogonal) the relationship is.
- [ ] The piece provides structural evidence — not just argument — for the chosen reading.
- [ ] If integral: the piece articulates HOW inability-to-extract-seed correlates structurally with the verdict being unsupported.
- [ ] The reading is consistent with the spec's existing constructive-output requirement (lines 140-142).

**Counter-question:** What if a kill-worthy defect can exist WITHOUT extractable fertility — i.e., a candidate is structurally dead but the death doesn't generalize to a reusable seed (one-off failure)? If so, requiring fertility as a test is over-constrained.

### P-CONFIDENCE-ORTHOGONALITY — Is confidence a severity axis or orthogonal to severity?

**Question:** Should the meta-principle incorporate confidence (a low-confidence small defect ≠ high-confidence small defect) or treat confidence as orthogonal evidence-strength that requires a separate verdict-shape?

**Verification criteria:**
- [ ] The piece names which (severity-component vs orthogonal) the relationship is.
- [ ] The piece provides structural evidence — not just argument — for the chosen reading.
- [ ] If orthogonal: the piece articulates what insufficient-evidence cases should DO instead of being collapsed into severity.
- [ ] The reading is consistent with the spec's existing SURVIVE-with-caveats language (line 234).

**Counter-question:** What if confidence is INHERENTLY entangled with severity — e.g., severity is the product of impact × confidence, and any clean separation is artificial?

### P-CALIBRATION-LOCUS — Where in `/td-critique`'s process does severity-calibration structurally live?

**Question:** Which phase, sub-step, or refinement note in the spec is the structural home for the meta-principle's encoding (without spec-edit proposals — meaning only)?

**Verification criteria:**
- [ ] The locus is named precisely (phase + sub-step or refinement-note position).
- [ ] The locus is consistent with the existing spec organization.
- [ ] The locus does not require a new sub-phase to exist between Phase 0 and Phase 4.
- [ ] The locus composes cleanly with existing Phase 0 refinement notes (Project-specific risk dimension check; Frame-premise test) — i.e., the three would peer-coexist without overlap.

**Counter-question:** What if severity-calibration is NOT located in any single phase — i.e., it's distributed across Phase 0 (weighting), Phase 2 (adversarial), and Phase 4 (convergence)? A single-locus articulation may over-localize.

### P-RUBBER-NITPICK-UNIFICATION — Does the meta-principle unify #2 Rubber-Stamping and #3 Nitpicking as one structural failure?

**Question:** When the meta-principle (purpose-fitness) is applied to the two existing failure modes, do they unify as opposite-direction violations of the same principle, and does naming this unification simplify prevention design?

**Verification criteria:**
- [ ] The piece articulates the unification: #2 = severe defect under-killed; #3 = non-severe defect over-killed.
- [ ] The piece preserves the operational distinction between the two failure modes (different proximate causes: prosecution-weakness vs defense-weakness).
- [ ] The piece names whether the spec should articulate the unification explicitly (in spec text) or implicitly (via the meta-principle's adoption).
- [ ] The unification doesn't collapse the two modes into one (the operational distinction must survive).

**Counter-question:** What if #2 and #3 are genuinely independent failure modes (different mechanisms, different prevention surfaces) and the unification is just rhetorically convenient rather than structurally real? If unification doesn't change prevention design, naming it adds vocabulary without value.

### P-FRONTIER-AMBIGUOUS-PURPOSE — How does the meta-principle handle candidates whose purpose is intentionally fuzzy?

**Question:** When the candidate is exploratory ideation, a research-frontier candidate, or otherwise has an intentionally ambiguous purpose, does the purpose-fitness meta-principle need modification, or is the original form sufficient?

**Verification criteria:**
- [ ] The piece names whether modification is needed (and if so, what the modification is).
- [ ] If modification: the modified form preserves the meta-principle's task-agnostic structure (no per-domain heuristics).
- [ ] If modification: the modification doesn't reintroduce per-task content under a different name.
- [ ] The piece articulates a STRUCTURAL TEST for when the modification fires vs when the original form applies.

**Counter-question:** What if ambiguous-purpose candidates are NOT in critique's scope — i.e., they belong to /innovate or /sensemaking, not /td-critique? If critique only evaluates candidates whose purpose is sufficiently defined, this piece is out of scope.

### P-FRONTIER-INTERIM-VERDICT — Should `/td-critique` add a 4th verdict for insufficient-evidence cases?

**Question:** Given confidence is orthogonal to severity (per P-CONFIDENCE-ORTHOGONALITY), should `/td-critique` extend the SURVIVE/REFINE/KILL triplet with an INTERIM verdict (analogous to /innovate's DEFERRED)?

**Verification criteria:**
- [ ] The piece names whether the 4th verdict is structurally warranted.
- [ ] If yes: the piece articulates WHEN INTERIM fires (the gating predicate).
- [ ] If yes: the piece articulates HOW INTERIM relates to the existing SURVIVE-with-caveats language.
- [ ] If no: the piece articulates why SURVIVE-with-caveats is structurally sufficient for insufficient-evidence cases.

**Counter-question:** What if adding a 4th verdict OVER-COMPLICATES the discipline — i.e., insufficient-evidence cases should trigger re-running Phase 2 (gather more evidence) rather than rendering a softer verdict?

### P-SELF-APPLICABILITY-CHECK — Does this inquiry's output pass the meta-principle when applied to itself?

**Question:** When the meta-principle (purpose-fitness) is applied to the meta-principle ITSELF as a candidate, does the meta-principle survive (this inquiry's purpose was to produce a structurally articulated meta-principle, and the inquiry's output does that), or does it fail (the inquiry's output is itself a defective candidate)?

**Verification criteria:**
- [ ] The piece names what this inquiry's purpose is (operationally: produce a meaning-layer meta-principle).
- [ ] The piece applies the meta-principle's structural test to the inquiry's output.
- [ ] The piece identifies any defects in the inquiry's output that would be kill-worthy under its own principle.
- [ ] If defects exist: the piece either resolves them or flags them as known residuals.

**Counter-question:** What if the meta-principle's self-application is structurally trivial (it's tautological — any inquiry whose purpose is "produce an articulation" will pass purpose-fitness once the articulation is produced)? If so, the self-applicability check has no signal.

### P-PICKER — What structural follow-up should the structural-layer inquiry prioritize?

**Question:** Given the meta-principle is stabilized but spec-edit shapes are out of scope, what should the structural follow-up address first?

**Verification criteria:**
- [ ] The piece names the priority items for the structural follow-up.
- [ ] The priority items are ordered by structural importance (which encoding decisions enable later decisions).
- [ ] The piece distinguishes ITEMS REQUIRED to encode the meta-principle from ITEMS THAT EXTEND it (frontier-coverage).
- [ ] The piece names PRE-CONDITIONS for the structural follow-up to be productive (e.g., user confirmation of which open frontiers should be addressed).

**Counter-question:** What if no structural follow-up is needed — i.e., the meaning-layer articulation is sufficient and the existing spec's implicit calibration (Phase 0 weighting + constructive-output requirement + burden-of-proof shift) is operationally adequate? If yes, the picker recommends NO-ACTION.

---

## Step 5 — Interface Map

Per piece pair, what flows between them.

| From | To | What flows | Direction | Assumption (hidden-coupling check) |
|---|---|---|---|---|
| P-META | P-PRACTICIONER-TEST | The principle's structural form (what's being tested) | One-way (META → TEST) | Assumes the practitioner-test is the operational EXPRESSION of the same meta-claim, not a separate claim. |
| P-META | P-REFINE-KILL-BOUNDARY | The principle's foundation (what kill-worthiness IS) | One-way (META → BOUNDARY) | Assumes BOUNDARY operates on already-determined kill-worthy defects (i.e., META has fired first). |
| P-META | P-COMPOSITE-CALIBRATION | The principle's single-axis structure (what the calibration layer is layered ON) | One-way (META → CALIBRATION) | Assumes the meta-axis is single; the calibration's composite is layered atop it without contradicting that. |
| P-META | P-CONSTRUCTIVE-OUTPUT-AS-TEST | The principle (what fertility tests) | One-way (META → OUTPUT-TEST) | Assumes "fertility" maps to "articulating purpose-fitness failure." |
| P-META | P-CONFIDENCE-ORTHOGONALITY | The principle's scope (what severity is, so confidence can be defined as NOT-severity) | One-way (META → CONFIDENCE) | Assumes severity is fully defined by META before CONFIDENCE can be located as orthogonal. |
| P-META + P-COMPOSITE-CALIBRATION | P-CALIBRATION-LOCUS | Both the meta-principle and its calibration layer (what gets encoded at the locus) | One-way (META + CALIB → LOCUS) | Assumes a single-locus encoding works for both layers; if calibration needs a different locus, this assumption breaks. |
| P-META | P-RUBBER-NITPICK-UNIFICATION | The principle (what unifies #2 and #3) | One-way (META → UNIFICATION) | Assumes #2 and #3 are violations of the SAME principle; if they're partially independent, the unification leaks. |
| P-META | P-FRONTIER-AMBIGUOUS-PURPOSE | The principle's task-agnostic form (what the frontier asks whether the form covers) | One-way (META → AMBIGUOUS) | Assumes the frontier IS a modification of the meta-principle, not a separate principle. |
| P-CONFIDENCE-ORTHOGONALITY | P-FRONTIER-INTERIM-VERDICT | The orthogonality claim (the structural rationale for interim verdict) | One-way (CONFIDENCE → INTERIM) | Assumes interim-verdict is the structural answer to insufficient-evidence cases. |
| All pieces (P-META through P-FRONTIER-INTERIM-VERDICT) | P-SELF-APPLICABILITY-CHECK | The pieces' commitments collectively (the candidate to be self-tested) | All-to-one | Assumes the self-test fires AFTER pieces are committed (or at least articulated). |
| All pieces | P-PICKER | The pieces' commitments + status (what follow-up to prioritize) | All-to-one | Assumes the picker sees the full piece set's state; if some pieces are deferred, the picker must accommodate. |

**Assumptions-not-data check passed.** The hidden assumptions are surfaced in the right-most column. Two assumptions are LOAD-BEARING:

- The assumption that P-CALIBRATION-LOCUS can encode both P-META and P-COMPOSITE-CALIBRATION at a single locus. If this fails (e.g., calibration needs its own locus), the dependency structure needs DV2 revision.
- The assumption that the self-applicability check fires AFTER piece-articulation. If it fires DURING (as a per-piece check), the meta-check restructures as per-piece sub-checks rather than a wrapping check.

Both are HIGH-confidence assumptions but flagged for runtime monitoring.

---

## Step 6 — Dependency Order

**Tier 1 (foundational, no incoming dependencies):**
- P-META

**Tier 2 (depends on Tier 1):** *all 5 depend on P-META; they are parallel to each other*
- P-PRACTICIONER-TEST
- P-REFINE-KILL-BOUNDARY
- P-COMPOSITE-CALIBRATION
- P-CONSTRUCTIVE-OUTPUT-AS-TEST
- P-CONFIDENCE-ORTHOGONALITY
- P-RUBBER-NITPICK-UNIFICATION
- P-FRONTIER-AMBIGUOUS-PURPOSE

**Tier 3 (depends on Tier 2):**
- P-CALIBRATION-LOCUS (depends on P-META + P-COMPOSITE-CALIBRATION)
- P-FRONTIER-INTERIM-VERDICT (depends on P-CONFIDENCE-ORTHOGONALITY)

**Tier 4 (depends on all prior tiers):**
- P-SELF-APPLICABILITY-CHECK
- P-PICKER

**Working order recommendation:**

1. Start with P-META (foundational).
2. Work Tier 2 pieces in any order (parallel). The 5–7 pieces clarify different facets of the meta-principle.
3. Work Tier 3 pieces (P-CALIBRATION-LOCUS, P-FRONTIER-INTERIM-VERDICT) after their dependencies stabilize.
4. Work Tier 4 pieces last (the wrapping check + synthesis picker).

No circular dependencies. Each tier's output is consumable by the next.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions (always run)

**Independence.** Can each piece be worked on without the others existing?

- P-META: Yes — answerable as a standalone meaning-layer claim with the 4-domain test.
- P-PRACTICIONER-TEST: Yes — converts the meta-principle to operational form; depends on META but not on other Tier 2 pieces.
- P-REFINE-KILL-BOUNDARY: Yes — articulates the SURVIVE/REFINE/KILL distinction independently of CALIBRATION or CONFIDENCE.
- P-COMPOSITE-CALIBRATION: Yes — the calibration layer is articulated separately from the meta-axis.
- P-CONSTRUCTIVE-OUTPUT-AS-TEST: Yes — answers a distinct ambiguity about constructive-output's relationship to severity.
- P-CONFIDENCE-ORTHOGONALITY: Yes — answers a distinct ambiguity about confidence's relationship to severity.
- P-CALIBRATION-LOCUS: Yes — the locus question is structurally separate from the principle's content.
- P-RUBBER-NITPICK-UNIFICATION: Yes — the unification claim is separable from the meta-principle's content.
- P-FRONTIER-AMBIGUOUS-PURPOSE: Yes — frontier extension; doesn't require resolving other frontier pieces.
- P-FRONTIER-INTERIM-VERDICT: Yes — depends on P-CONFIDENCE-ORTHOGONALITY but not on other pieces.
- P-SELF-APPLICABILITY-CHECK: Operates ON the piece-set; "independent" in the sense that it's a meta-check, not a sibling-dependency.
- P-PICKER: Synthesis; depends on the piece-set but doesn't require each piece to be FINALIZED, only ARTICULATED.

**Pass:** all 12 pieces are independent in the structural sense.

**Completeness.** Do the pieces cover the whole?

- The meta-principle (P-META) is articulated.
- The operational test (P-PRACTICIONER-TEST) is articulated.
- The verdict-boundary (P-REFINE-KILL-BOUNDARY) is articulated.
- The application layer (P-COMPOSITE-CALIBRATION) is articulated.
- The two scope clarifications (P-CONSTRUCTIVE-OUTPUT-AS-TEST + P-CONFIDENCE-ORTHOGONALITY) are articulated.
- The locus (P-CALIBRATION-LOCUS) is articulated.
- The failure-mode unification (P-RUBBER-NITPICK-UNIFICATION) is articulated.
- The two open frontiers (P-FRONTIER-AMBIGUOUS-PURPOSE + P-FRONTIER-INTERIM-VERDICT) are articulated.
- The meta-check + synthesis (P-SELF-APPLICABILITY-CHECK + P-PICKER) are articulated.

Cross-check against the 4 sensemaking frontier flags:
- F1 (ambiguous-purpose) → P-FRONTIER-AMBIGUOUS-PURPOSE ✓
- F2 (INTERIM verdict) → P-FRONTIER-INTERIM-VERDICT ✓
- F3 (explicit unification in spec text) → P-RUBBER-NITPICK-UNIFICATION (the meaning-layer claim; spec-edit shape is structural-layer follow-up) ✓
- F4 (calibration-layer articulation) → P-COMPOSITE-CALIBRATION (the meaning-layer claim; spec-edit shape is structural-layer follow-up) ✓

**Pass:** all 4 sensemaking frontier flags map to pieces; no aspect of the stabilized model falls through gaps.

**Reassembly.** Pieces + interfaces = the whole?

Given:
- All 12 pieces' verification criteria are met.
- The interface map's flows are satisfied (each piece's input from upstream pieces is consumed correctly).

Does this reconstruct the inquiry's question — "What is the meta-principle for severity in /td-critique, task-agnostic?"

Reassembly trace:
1. P-META names the principle (purpose-fitness).
2. P-PRACTICIONER-TEST + P-REFINE-KILL-BOUNDARY + P-COMPOSITE-CALIBRATION articulate the principle's structural commitments.
3. P-CONSTRUCTIVE-OUTPUT-AS-TEST + P-CONFIDENCE-ORTHOGONALITY scope the principle.
4. P-CALIBRATION-LOCUS + P-RUBBER-NITPICK-UNIFICATION compose the principle with the existing spec.
5. P-FRONTIER-AMBIGUOUS-PURPOSE + P-FRONTIER-INTERIM-VERDICT identify what the principle DOES NOT yet cover (open frontiers, deferred to structural follow-up).
6. P-SELF-APPLICABILITY-CHECK verifies the principle survives its own application.
7. P-PICKER names what comes next.

Together, these 12 pieces produce a complete meaning-layer answer to the inquiry's question.

**Pass:** reassembly reconstructs the whole.

### Full 7-dimension evaluation (worth running given inquiry stakes)

**Tractability.** Is each piece small enough for a single focused pass?
- All 12 pieces are tractable: each can be answered by Innovation generating a few candidates and Critique adjudicating with a few prosecution-defense pairs. PASS.

**Interface clarity.** Are all cross-piece flows explicit?
- Step 5's table makes interfaces explicit, including the assumptions-not-data check. Two load-bearing assumptions are flagged (P-CALIBRATION-LOCUS single-locus + self-applicability fire-timing). PASS with monitoring.

**Balance.** Is complexity roughly proportional across pieces?
- Tier 1 (P-META) is the heaviest — it's the foundation and the 4-domain test is non-trivial. All Tier 2 pieces are moderate. Tier 3 + Tier 4 are lighter. The complexity gradient is REASONABLE (foundation > clarifications > frontiers > wrap-up). PASS.

**Confidence.** Do top-down and bottom-up agree on boundaries?
- Yes: 12 top-down pieces map 1:1 to 12 bottom-up atoms (Step 3). HIGH confidence.

**All 7 dimensions: PASS.**

### Failure-mode check

- **Premature decomposition** — NO (sensemaking SV6 was stabilized before decomposition started).
- **Wrong boundaries** — NO (boundaries align with atomic claims and answer distinct questions).
- **Hidden coupling** — TWO LOAD-BEARING ASSUMPTIONS FLAGGED (Step 5); not unaddressed, but worth monitoring.
- **Missing pieces** — NO (4 sensemaking frontier flags + 1 self-check + 1 picker all mapped to pieces).
- **Over-decomposition** — Borderline. 12 pieces is high; each is justified by a distinct atomic claim, but practitioners may consolidate Tier 2 pieces into 2–3 super-pieces during Innovation. ACCEPTABLE; flag for monitoring.
- **Ignoring dependencies** — NO (Step 6's dependency order is explicit).
- **Imbalanced decomposition** — NO (complexity is reasonably proportional; P-META is heavier but proportionate to its foundational role).

---

## Final Deliverable

### Question Tree (summary)

```
Tier 1:
  P-META — What is the structural meta-principle of severity?

Tier 2 (parallel; all depend on Tier 1):
  P-PRACTICIONER-TEST — What is the 1-question practitioner form?
  P-REFINE-KILL-BOUNDARY — What distinguishes REFINE from KILL?
  P-COMPOSITE-CALIBRATION — How does the per-task layer compose?
  P-CONSTRUCTIVE-OUTPUT-AS-TEST — Integral or orthogonal?
  P-CONFIDENCE-ORTHOGONALITY — Severity axis or orthogonal?
  P-RUBBER-NITPICK-UNIFICATION — Are #2 and #3 unified?
  P-FRONTIER-AMBIGUOUS-PURPOSE — Does the principle cover fuzzy-purpose?

Tier 3 (depends on Tier 2):
  P-CALIBRATION-LOCUS — Where in the process does calibration live?
  P-FRONTIER-INTERIM-VERDICT — Should there be a 4th verdict?

Tier 4 (wrapping):
  P-SELF-APPLICABILITY-CHECK — Does the principle survive its own application?
  P-PICKER — What structural follow-up to prioritize?
```

### Interface Map (summary)

P-META is the foundation; all Tier 2 pieces consume the meta-principle's structure. P-CALIBRATION-LOCUS additionally consumes P-COMPOSITE-CALIBRATION. P-FRONTIER-INTERIM-VERDICT consumes P-CONFIDENCE-ORTHOGONALITY. Tier 4 pieces consume the whole piece-set.

### Dependency Order

```
Tier 1: P-META
   ↓
Tier 2 (parallel): {P-PRACT, P-RKB, P-COMP, P-COUT, P-CONF, P-RNU, P-FAP}
   ↓
Tier 3: P-CAL-LOC (after P-META + P-COMP)
         P-FIV (after P-CONF)
   ↓
Tier 4: P-SAC + P-PICKER
```

### Self-Evaluation Verdict

**Minimum 3 dimensions:** Independence ✓ / Completeness ✓ / Reassembly ✓ — ALL PASS.

**Full 7 dimensions:** + Tractability ✓ / Interface clarity ✓ (with 2 assumptions flagged) / Balance ✓ / Confidence ✓ — ALL PASS.

**Failure modes:** 0 active failures; 2 monitoring flags (load-bearing interface assumptions; borderline-high piece count).

**Verdict: PROCEED.** Innovation can operate on the 12 pieces with the dependency order above. The 2 monitoring flags are worth keeping visible but don't block progression.

### Open Questions for Innovation

- Per piece: generate at least one candidate articulation + one inversion-candidate (the piece-level counter-question is the seed for the inversion).
- For Tier 2 parallel pieces: consider whether 1–2 of them should be MERGED into super-pieces if structural articulation reveals they collapse to one claim. (Borderline-high-piece-count monitoring.)
- For P-CALIBRATION-LOCUS: monitor whether single-locus encoding holds; if it doesn't, DV2 the piece into LOCUS-FOR-META + LOCUS-FOR-CALIBRATION.

Innovation should produce candidates per piece; critique adjudicates whether the candidates pass the piece's verification criteria.
