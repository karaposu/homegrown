# Sensemaking — critique_kill_severity_meta_principle

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/_branch.md

Input: _branch.md + surfacing.md (45 items surfaced across 8 regions; 7 frontier questions emitted).
Layer Commitment: MEANING primary.
Goal: stabilize SV1→SV6 of the underlying meaning of "severity" in /td-critique — what structurally distinguishes a kill-worthy issue from a minor / nitpick issue, expressed task-agnostically.

Key concerns: existing spec articulation as starting text; #2/#3 as one-axis-or-two; REFINE-vs-KILL structural distinction; severity as single-axis-vs-composite; constructive-output as symptom-vs-definition; confidence as severity-axis; where severity lives in the process. Self-reference risk active (critique applied to critique severity-calibration). Meta-loop self-applicability mandatory.
```

---

## SV1 — Baseline Understanding

`/td-critique` currently articulates severity through three near-synonymous notions — *severity awareness*, *critical-weight*, *burden-of-proof shifts by stakes* — without making explicit what STRUCTURE makes one defect kill-worthy and another minor. The two-pole framing of #2 Rubber-Stamping (too little kill) vs #3 Nitpicking (too much kill) implies a calibration axis exists, but the axis is left implicit. External canonical frameworks (safety SIL, blast-radius, asymmetric loss) decompose criticality into multiple orthogonal axes, suggesting either the spec under-articulates a composite or the spec correctly bundles per-task complexity under a single meta-axis. The question is: which?

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1 — Task-agnostic.** Meta-principle MUST hold across all four candidate-domains the spec claims to serve (software design / research hypothesis / business strategy / spec-edit). No per-domain heuristics.
- **C2 — Bidirectional prevention.** Meta-principle MUST prevent BOTH #2 Rubber-Stamping (under-kill) AND #3 Nitpicking (over-kill). Preventing one but not the other = incomplete.
- **C3 — Spec-consistent.** Meta-principle MUST compose with existing spec commitments: 6 default dimensions; Prosecution + Defense + Collision; SURVIVE/REFINE/KILL triplet; Phase 0–Phase 4 process; constructive-output requirement on KILL.
- **C4 — Meta-level not collapsing to per-task heuristic.** The meta-principle MUST NOT reduce to "depends on stakes" without articulating WHAT structurally varies by stakes.
- **C5 — Self-applicable.** If the meta-principle marks THIS inquiry's own claims kill-worthy under its own test, that is self-refutation. The principle must survive its own application.
- **C6 — Practitioner-applicable.** Meta-principle must convert to a structural test the practitioner can run during a real /td-critique invocation — not a felt judgment.

### Key Insights

- **K1 — Severity is already framed as a "matter" test.** Line 22: "*nitpicking finds surface flaws without assessing whether they matter*; critique evaluates across weighted dimensions with severity awareness." The word "matter" is the load-bearing meaning-anchor. The meta-principle should make precise what it means for a defect to *matter*.
- **K2 — KILL has TWO conditions, not one.** Line 138: "fails on critical dimensions, defense cannot overcome prosecution." Conjunction is load-bearing. A defect must be (a) on a critical dimension AND (b) defense-resistant. Removing either condition makes KILL inappropriate.
- **K3 — Constructive-output (seed extraction) is a hidden severity-test.** Line 142: "Critique that only says 'this is bad' without saying 'here's what would make it better' is incomplete." If you can't extract a seed, either you don't understand WHY the defect is fatal, OR the defect isn't actually fatal. Fertility is structural evidence of true kill-worthiness.
- **K4 — Stakes is already implicitly composite in the spec.** Line 126: "High stakes (*hard to reverse, large scope, touches many systems*)." Three axes named in one parenthetical: reversibility / scope / blast-radius. The composite structure ALREADY EXISTS in the spec, bundled under "stakes."
- **K5 — Burden-of-proof shift IS the asymmetric-failure principle applied to critique.** Surfacing's analog from `/surfacing` §4.4: missing-something > including-something-extra. Critique's analog: under low stakes, false-positive KILL (killing a viable candidate) costs more → let it through; under high stakes, false-negative SURVIVE (letting an unviable candidate through) costs more → block it.
- **K6 — The 6 default dimensions are CONTENT-axes; severity-calibration is a LOAD-axis.** Correctness/Coherence/Feasibility/Completeness/Robustness/Elegance describe WHAT to test. Weights describe HOW HARD a failure on each counts. Severity = the structure of weighting, not the structure of dimensions.

### Structural Points

- **S1 — Verdicts are POSITIONAL, not categorical.** Line 132: "Verdicts are not binary (pass/fail) — they are positional (where on the landscape) with an action attached." SURVIVE/REFINE/KILL are regions, not labels. Severity calibrates the LANDSCAPE BOUNDARIES.
- **S2 — Prosecution + Defense are SYMMETRIC.** Severity emerges from their COLLISION, not from prosecution alone. A defect that defense answers structurally is not kill-worthy regardless of how it sounded under prosecution.
- **S3 — REFINE is structurally distinct from KILL by FIXABILITY-WITHIN-FRAME.** REFINE = "boundary region — strong core, specific weaknesses." KILL = "dead region — defense cannot overcome prosecution." The structural distinction is whether a within-frame modification can move the candidate from dead to viable.
- **S4 — Phase 0 owns severity-calibration.** Severity-calibration is the dimensions' WEIGHTING, set at Phase 0 step 4. Phase 2's adversarial evaluation APPLIES severity; Phase 4's convergence assessment OBSERVES severity. Severity is not its own phase.

### Foundational Principles

- **F1 — Critique is contraction.** Line 65: "Critique is contraction (many candidates → fewer, better-positioned survivors)." If nothing gets killed (or refined), critique didn't happen. Severity-calibration determines THE CONTRACTION'S BOUNDARY.
- **F2 — Critique tests "right," not "working."** Line 24: "validation confirms something works; critique determines whether something is the *right* thing." Severity in critique is about fitness-for-purpose, not defect-presence.
- **F3 — Adversarial structure requires BOTH strong prosecution AND strong defense.** Line 128: "prevents rubber-stamping (prosecution too weak) and nitpicking (defense absent)." Both poles are failures of one principle: asymmetric adversarial strength.
- **F4 — Asymmetric-failure principle applies to KILL/SURVIVE choice.** Some defects are worse to miss than to over-call; others are worse to over-call than to miss. The direction of asymmetry is the burden-of-proof shift.

### Meaning-Nodes

- **M1 — Purpose-fitness.** What the candidate is supposed to do. Severity tests whether the defect blocks purpose-fitness.
- **M2 — Frame-replacement vs in-frame-fix.** The structural REFINE/KILL boundary. REFINE = defect fixable within candidate's frame; KILL = defect requires replacing the candidate.
- **M3 — Critical-weight dimension.** Dimension whose failure prevents purpose-fitness. "Critical" is shorthand for "purpose-blocking."
- **M4 — Stakes (composite).** Reversibility × scope × blast-radius. Per-task calibration of HOW STRICT purpose-fitness criteria must be.
- **M5 — Fertility.** A kill-worthy defect produces extractable understanding of WHY purpose-fitness fails. Inability to articulate fertility is structural evidence the defect is not actually kill-worthy.

*Meta-Inspection cross-reference: applying meta-question to H4 (concept names) — "purpose-fitness," "frame-replacement," "fertility" are coined here; H5 (motivating examples) — the spec's existing text + the 4 external canonical frameworks ground the anchors externally.*

### SV2 — Anchor-Informed Understanding

The spec's existing articulation of severity (severity awareness / burden-of-proof / critical-weight / constructive-output) is NOT under-articulated — it is OVER-DECOMPOSED into 4 near-synonyms that all point at the same structural property without naming it. The unnamed structural property is **purpose-fitness**: does the defect block the candidate from doing what it's supposed to do? The 6 default dimensions are CONTENT-axes (where defects might be found); severity is the LOAD-axis (whether the defect blocks purpose). #2 Rubber-Stamping = failure to test purpose-fitness adequately. #3 Nitpicking = killing for defects that don't block purpose. The two poles are violations of the same principle from opposite sides.

The composite structure (reversibility × scope × blast-radius) the spec mentions under "stakes" is per-task calibration of HOW STRICT purpose-fitness must be — not the meta-principle itself.

---

## Phase 2 — Perspective Checking

### Practitioner perspective

A practitioner running `/td-critique` needs a STRUCTURAL TEST, not a felt judgment. The purpose-fitness meta-principle converts to a 1-question test:

> **"If this defect were left in place, would the candidate still do what it's supposed to do?"**

If YES → not kill-worthy (REFINE or note as caveat).
If NO → kill-worthy (REFINE if fixable in-frame; KILL if requires frame-replacement).

This converts severity from a feeling to a structural answer. **NEW ANCHOR — K7: Practitioner-test reducibility.** The meta-principle satisfies C6 (practitioner-applicability) precisely because it reduces to a single yes/no question with a structural answer.

### Task-agnostic perspective (C1 verification)

Test purpose-fitness across the 4 domains the spec serves:

| Domain | Defect example | Purpose-fitness test | Verdict |
|---|---|---|---|
| **Software design** | Bug that crashes the system on common input | Would the system do what it's supposed to do (process input reliably) with the crash? NO. | KILL-worthy. |
| **Software design** | Typo in a code comment | Would the system still do what it's supposed to do with the typo? YES. | Not kill-worthy. |
| **Research hypothesis** | Methodological flaw invalidating conclusions | Would the hypothesis stand (be tested rigorously) with the flaw? NO. | KILL-worthy. |
| **Research hypothesis** | Citation format inconsistency | Would the hypothesis stand with the inconsistency? YES. | Not kill-worthy. |
| **Business strategy** | Empirically wrong market assumption | Would the strategy succeed with the wrong assumption? NO. | KILL-worthy. |
| **Business strategy** | Phrasing choice in executive summary | Would the strategy succeed with the phrasing? YES. | Not kill-worthy. |
| **Spec-edit critique** | Structural inconsistency reachable in normal use | Would the spec produce correct behavior with the inconsistency? NO. | KILL-worthy. |
| **Spec-edit critique** | Formatting inconsistency | Would the spec produce correct behavior with the inconsistency? YES. | Not kill-worthy. |

**Verdict: PASSES.** The purpose-fitness test holds across all 4 domains without per-domain modification. **NEW ANCHOR — K8: domain-invariance verified.** The meta-principle satisfies C1.

### Failure-mode perspective (C2 verification)

- **#2 Rubber-Stamping** is preventable IF prosecution is required to CONCRETELY name a case where the candidate fails to fulfill its purpose. The defect description "the X is poorly designed" is rubber-stamp-vulnerable because it doesn't name a purpose-failure case. The defect description "under condition Y, the X fails to do Z, where Z is the candidate's purpose" forces purpose-fitness articulation.
- **#3 Nitpicking** is preventable IF every defect's recognition requires the question "would the candidate still fulfill its purpose with this defect in place?" Defects that fail to block purpose are noted-as-caveat-on-SURVIVE, not promoted to KILL.

Both failure modes are violations of the SAME meta-principle from opposite directions:
- Rubber-Stamping = ignoring purpose-fitness failures that ARE present.
- Nitpicking = treating non-purpose-fitness defects as if they were purpose-fitness failures.

**Verdict: PASSES.** The meta-principle prevents both poles. **NEW ANCHOR — K9: bidirectional prevention verified.** C2 satisfied.

### Spec-grounded perspective (C3 verification)

- **6 default dimensions:** purpose-fitness defines what makes a dimension critical-weight for a given candidate. The dimensions stay unchanged; weighting becomes structurally grounded.
- **Prosecution + Defense + Collision:** purpose-fitness is what the prosecution must DEMONSTRATE FAILURE OF; defense must DEFEND PURPOSE-FITNESS. Collision is the conflict over whether the candidate fulfills its purpose given the prosecution's case. Adversarial structure unchanged.
- **SURVIVE/REFINE/KILL triplet:** purpose-fitness defines the LANDSCAPE BOUNDARIES. Viable region = candidate fulfills purpose; boundary region = candidate could fulfill purpose with in-frame modification (REFINE); dead region = candidate's frame prevents purpose-fulfillment (KILL).
- **Constructive-output on KILL:** seed extraction = articulating WHY the candidate's frame prevents purpose-fulfillment. Built into the meta-principle.
- **Phase 0–Phase 4 process:** severity-calibration lives at Phase 0 (dimension weighting); applied at Phase 2 (adversarial); observed at Phase 4 (convergence). Unchanged.

**Verdict: PASSES.** The meta-principle is consistent with all spec commitments without overturning any. **NEW ANCHOR — K10: spec-coherent.** C3 satisfied.

### Frame-exit Completeness perspective

Gating predicate fires: the inquiry inherited multi-value terms from prior findings (#2 Rubber-Stamping, #3 Nitpicking — both used as poles of one axis; SURVIVE/REFINE/KILL — used as 3 regions; "stakes" — used as both 2-value low/high and as composite). Apply meta-categories.

**Existence Enumeration.** "Severity" project-wide referents:
- (i) Severity in /td-critique (current focus).
- (ii) Severity-analog in /innovate (Phase 3 Test pass/fail per test; OUTPUT-DISPOSITION categories ACTIONABLE/DEFERRED/RESEARCH FRONTIER/RE-TEST TRIGGER).
- (iii) Severity-analog in /surfacing (4 relevance levels CORE/SUB/SIDE/UMBRELLA + relevance confidence HIGH/MEDIUM/LOW).
- (iv) Severity-analog in /sense-making (anchor confidence HIGH/MEDIUM/LOW + ambiguity-resolution per ambiguity).
- (v) Severity in canonical external frameworks (safety SIL, blast-radius, statistical Type I/II, asymmetric loss).

**Role Assessment.** The inquiry's frame's scope is (i) only. (ii)-(iv) are analogs that could inform the meta-principle but are NOT the meta-principle's scope. (v) is external grounding. The operation's coherence is preserved if (ii)-(iv) are kept as analog evidence, not folded into the meta-principle. (v) is integrated via the composite-stakes anchor (K4).

**Verdict Rigor.** Strongest counter-argument to the "purpose-fitness" meta-principle:

> "Critique sometimes legitimately KILLs candidates that DO fulfill their purpose, on grounds of REDUNDANCY (a different candidate fulfills the purpose better) or PRINCIPLE (the purpose itself was wrong). The purpose-fitness test misses these legitimate KILLs."

Structural response: this counter is real but operates at a DIFFERENT LAYER. Redundancy-KILL = comparison between candidates within the candidate set, governed by Phase 3.5 (Assembly check) + Phase 4 (Coverage + Convergence). Principle-KILL (the purpose was wrong) = upstream sensemaking re-pass, not a critique-internal severity-judgment. The purpose-fitness meta-principle is the test for SINGLE-CANDIDATE severity; multi-candidate redundancy and purpose-revision are separate operations. **The counter doesn't disprove the meta-principle; it locates its scope.** Meta-principle stays HIGH CONFIDENCE within its scope.

**Residual / Coverage Justification.** Is there a frame-exit concern the meta-categories did NOT capture? One: candidates whose purpose is intentionally ambiguous (exploratory ideation, research-frontier candidates). For these, the meta-principle requires a layer-aware modification — purpose-fitness becomes "would this candidate continue to support the exploratory inquiry?" rather than "would it fulfill a fixed purpose?" Flagged as **frontier (F1)** for the structural follow-up.

### Phase / Calibration-State perspective

Does the meta-principle depend on calibration the project has? The principle is stated in structural terms (purpose-fitness); operationalization depends on per-candidate clarity of purpose. Project state at inquiry-time is irrelevant; the principle holds at all phases. **No phase-dependence; perspective satisfied without modification.**

### Definitional / Internal Consistency perspective

Does the meta-principle contradict any existing /td-critique commitment? Cross-check:
- "Critique is not nitpicking — contraction force" (line 9): consistent (purpose-fitness IS the contraction criterion).
- "Severity awareness" (line 22): consistent (purpose-fitness IS what awareness is OF).
- "Critical-weight dimensions" (lines 130-138): consistent (a dimension is critical-weight when its failure blocks purpose).
- "Burden-of-proof shifts by stakes" (lines 124-128): consistent (stakes calibrate HOW STRICT the purpose-fitness criteria are).
- "Constructive output on KILL" (lines 140-142): consistent (the seed = articulation of why the candidate's frame prevents purpose).

No contradiction. **Verdict: spec-internally consistent.**

### SV3 — Multi-Perspective Understanding

The purpose-fitness meta-principle survives 6 perspective checks (practitioner / task-agnostic / failure-mode / spec-grounded / frame-exit completeness / definitional internal consistency). Two new anchors emerged:

- **K7 — Practitioner-test reducibility.** The meta-principle converts to a single yes/no structural question, making it operationally usable.
- **K8 — Domain-invariance.** Test passes across software design / research / business / spec-edit without per-domain modification.
- **K9 — Bidirectional prevention.** Rubber-Stamping and Nitpicking are the same meta-violation from opposite directions.
- **K10 — Spec-coherent.** No existing spec commitment needs to be overturned.

One frontier flag emerged:
- **F1 — Ambiguous-purpose candidates.** Exploratory-ideation candidates have intentionally fuzzy purposes; the meta-principle needs a layer-aware modification for them. Flagged for structural follow-up.

The verdict-rigor pass located the meta-principle's scope: it tests SINGLE-CANDIDATE severity. Redundancy-comparison and purpose-revision are separate operations at different phases.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Is "severity" a single axis or composite?

**Strongest counter-interpretation.** Severity is COMPOSITE at the meta-level — multiple orthogonal axes (severity × likelihood × blast-radius × reversibility × fixability × confidence). The spec's single-axis "stakes" framing is under-articulated. The meta-principle should be a 4–6-axis composition with weighted aggregation.

**Why the counter fails (structural grounds).** The composite-decomposition operates at PER-TASK CALIBRATION, not at the META-PRINCIPLE. The spec line 126 already names the composite axes inside "stakes" (hard to reverse / large scope / touches many systems). The composite IS in the spec; it's just appropriately bundled as "stakes" because the DECOMPOSITION VARIES BY DOMAIN — reversibility matters more in software, blast-radius matters more in business strategy, etc. A meta-principle that mandates a fixed N-axis composition would NOT be task-agnostic (per C1) because the relative weights of the axes are domain-specific. The structural meta-principle stays single-axis (purpose-fitness); the composite emerges as the PER-TASK CALIBRATION of what blocks purpose-fitness.

**Confidence:** HIGH. The composite-decomposition is appropriate-at-the-application-layer evidence, not meta-principle-overturning evidence.

**Resolution.** Severity has a META-PRINCIPLE (purpose-fitness, single-axis) and an APPLICATION CALIBRATION (composite, per-domain). The two layers are distinct. The meta-principle answers "what makes a defect kill-worthy in structure"; the calibration answers "what counts as purpose-fulfillment for THIS candidate."

**What is now fixed?** The meta-principle's structure: single-axis purpose-fitness. The calibration layer's existence: composite, per-task.

**What is no longer allowed?** Treating the composite axes (reversibility / blast-radius / etc.) as themselves the meta-principle. Treating "stakes" as a single-value low/high binary.

**What now depends on this choice?** The structural-layer follow-up will need to articulate HOW the calibration layer composes — likely by reference to the existing spec commitments (Phase 0 weighting + the project-specific risk dimension check refinement note already in the spec).

**What changed in the conceptual model?** The model gains TWO layers: meta-principle (structural) + calibration (per-task application). Severity-as-feeling collapses to severity-as-structural-test-of-purpose-fitness, with per-task richness preserved via the calibration layer.

---

### Ambiguity 2: Is constructive-output (seed extraction) a SYMPTOM or a DEFINITION?

**Strongest counter-interpretation.** Constructive-output is ORTHOGONAL to severity-calibration. The requirement to extract a seed exists for downstream-value reasons (the seed feeds back into innovation). A defect can be kill-worthy without producing a seed (the candidate is structurally broken and we know it, but we can't articulate a generalizable seed). The constructive-output requirement is a SEPARATE OPERATIONAL CONCERN.

**Why the counter fails (structural grounds).** If a defect is truly kill-worthy under the purpose-fitness meta-principle, then BY DEFINITION the practitioner can articulate WHY the candidate's frame prevents purpose-fulfillment. That articulation IS the seed. Inability to articulate a seed → inability to articulate the purpose-fitness failure → the KILL is structurally unsupported → it's a nitpick or rubber-stamp masquerading as a KILL. The constructive-output requirement is NOT an orthogonal operational concern; it is the STRUCTURAL TEST that the KILL is real. The seed = "we know why this candidate's frame prevents purpose-fulfillment, and that knowledge generalizes to inform the next iteration."

If the practitioner can't extract a seed but feels strongly the candidate is dead, the structural verdict is RE-EXAMINE — either the candidate is fine (nitpick), or the practitioner doesn't yet understand the failure (insufficient evidence; deferred verdict).

**Confidence:** HIGH. Structural argument is tight.

**Resolution.** Constructive-output (seed extraction) is both SYMPTOM and TEST of the purpose-fitness meta-principle:
- Symptom: kill-worthy defects produce seeds because their structural articulation IS the seed.
- Test: failure to extract a seed = failure to articulate purpose-fitness failure = the KILL is unsupported.

**What is now fixed?** Constructive-output requirement is integral to the meta-principle, not orthogonal.

**What is no longer allowed?** Treating constructive-output as a downstream-value requirement separable from severity-judgment.

**What now depends on this choice?** Practitioner protocol: when KILLing a candidate, the practitioner MUST articulate the purpose-fitness failure as a seed. If they can't, the verdict should be RE-EXAMINE (collect more evidence) or REFINE (the failure is partial / in-frame fixable).

**What changed in the conceptual model?** Seed extraction becomes part of the structural definition of KILL, not a separate downstream operation.

---

### Ambiguity 3: Is confidence a severity axis?

**Strongest counter-interpretation.** Confidence weights severity. A low-confidence small defect ≠ high-confidence small defect; the meta-principle should incorporate confidence into the kill-worthiness verdict.

**Why the counter fails (structural grounds).** Confidence is about EVIDENCE STRENGTH for the verdict, not about severity per se. A defect either blocks purpose-fitness or it doesn't (purpose-fitness is binary at the structural level — the candidate either does what it's supposed to do or it doesn't, given a defined purpose). What confidence affects is whether the practitioner can RENDER A VERDICT AT ALL given current evidence. Low confidence = the practitioner doesn't yet know whether the defect blocks purpose-fitness. The correct response to low confidence is NOT to give a softer KILL or stronger SURVIVE — it is to either gather more evidence or render an INTERIM verdict (analogous to innovate's DEFERRED disposition).

The spec currently doesn't have an INTERIM verdict; it has SURVIVE-with-caveats (line 234: "Note any caveats — dimensions where it passes but barely"). This is an open structural question for the structural-layer follow-up: should critique have a 4th verdict for low-confidence cases? But that question is ORTHOGONAL to the severity meta-principle. The meta-principle answers "what makes a defect kill-worthy"; the confidence question answers "how should critique behave when evidence is insufficient." Two separate problems.

**Confidence:** HIGH. Orthogonality is structurally clean.

**Resolution.** Confidence is orthogonal to severity. The purpose-fitness meta-principle assumes sufficient evidence to render a verdict. Insufficient-evidence cases need a separate verdict-shape (structural follow-up).

**What is now fixed?** Severity (purpose-fitness) and confidence (evidence-strength) are distinct dimensions of the verdict.

**What is no longer allowed?** Folding confidence into severity calibration. Treating low-confidence KILL as a different severity than high-confidence KILL.

**What now depends on this choice?** The structural follow-up may consider extending the verdict triplet (e.g., add INTERIM verdict for insufficient-evidence cases).

**What changed in the conceptual model?** Severity-calibration is decoupled from evidence-confidence; the meta-principle is cleaner.

---

### Ambiguity 4: Where does severity live in the discipline's process?

**Strongest counter-interpretation.** Severity-calibration is its own sub-phase between Phase 1 (Landscape) and Phase 2 (Adversarial), where the practitioner explicitly sets purpose-fitness thresholds before testing candidates.

**Why the counter fails (structural grounds).** Severity-calibration is a PROPERTY OF DIMENSIONS, set at Phase 0 step 4 (Weight dimensions). The dimensions' weights ARE the severity calibration — a heavily-weighted dimension is one whose failure is purpose-blocking; a lightly-weighted dimension is one whose failure isn't. Phase 1 maps the landscape FROM the weighted dimensions; Phase 2 applies the calibration via adversarial testing; Phase 4 observes convergence given the calibration. Severity isn't its own phase; it's the SEMANTICS of weighting set at Phase 0.

The spec already has the right structural placement; the meta-principle just clarifies what weighting MEANS (purpose-fitness, not raw importance).

**Confidence:** HIGH. Structural location is already correct in the spec.

**Resolution.** Severity-calibration lives at Phase 0 (Dimension Construction), specifically at the weight-dimensions sub-step (step 4). The meta-principle clarifies what weighting structurally MEANS but doesn't relocate where calibration happens.

**What is now fixed?** Phase 0 step 4 is the severity-calibration locus.

**What is no longer allowed?** Treating severity-calibration as a separate sub-phase that runs between landscape and adversarial.

**What now depends on this choice?** The structural-layer follow-up should articulate the meta-principle AT Phase 0, likely as a refinement note on the weight-dimensions sub-step.

**What changed in the conceptual model?** Severity is now structurally located: meta-principle (purpose-fitness) realized as Phase 0 weighting semantics.

---

### Ambiguity 5: Are #2 Rubber-Stamping and #3 Nitpicking two poles of ONE axis or TWO independent failure modes?

**Strongest counter-interpretation.** They are two independent failure modes. #2 = prosecution-strength failure; #3 = defense-strength failure. Each is about a different adversarial role. The "two poles of one axis" framing is rhetorical, not structural.

**Why the counter fails (structural grounds).** Both failures are violations of the SAME meta-principle (purpose-fitness) from opposite sides:
- #2 Rubber-Stamping = defects that DO block purpose-fitness pass undetected. The structural failure is: prosecution didn't construct a purpose-fitness failure case strong enough to displace the defense.
- #3 Nitpicking = defects that DON'T block purpose-fitness are treated as KILLs. The structural failure is: severity was assigned to a defect that doesn't actually block purpose-fitness; defense was either absent or weak enough that the over-severe defect prevailed.

Both failures involve a MISMATCH between defect-severity (under the purpose-fitness test) and the verdict rendered. The mismatch direction differs (#2 = severe defect, lenient verdict; #3 = non-severe defect, harsh verdict), but the mismatch IS the failure. So both are violations of the same meta-principle.

That said, OPERATIONALLY they have different proximate causes (prosecution-weakness vs defense-weakness). So they are structurally one principle violated two ways, and operationally two proximate failure modes. The spec's existing dual naming is appropriate.

**Confidence:** HIGH.

**Resolution.** Two operationally distinct failure modes (different proximate causes); one structural meta-principle (purpose-fitness) violated in opposite directions.

**What is now fixed?** The structural unity of the two failure modes.

**What is no longer allowed?** Treating #2 and #3 as if they could be solved by independent corrections without unifying meta-principle.

**What now depends on this choice?** The structural follow-up can use the unification to argue that addressing the meta-principle addresses both failures simultaneously.

**What changed in the conceptual model?** Both failure modes are now seen as opposite-direction violations of one meta-principle, simplifying the prevention design.

---

*Meta-Inspection cross-reference: Load-bearing concept test fired on M1 (purpose-fitness), M2 (frame-replacement vs in-frame-fix), M5 (fertility). All three survived structural tests in Ambiguity 1, 2, 5. Specific-vs-pattern recognition: the 4-domain test in Phase 2 already exercised this — the meta-principle was tested on multiple example domains, not committed from a single example.*

### SV4 — Clarified Understanding

The meta-principle of severity in `/td-critique` is **purpose-fitness**: a defect is kill-worthy IFF, left in place, it prevents the candidate from doing what the candidate is supposed to do.

The meta-principle has these structural commitments:

- **Single axis at meta-level.** Composite decomposition (reversibility × scope × blast-radius × fixability) is per-task application calibration, not meta-principle structure.
- **REFINE vs KILL = fixability-within-frame.** REFINE = "blocks purpose-fitness, fixable in-frame"; KILL = "blocks purpose-fitness, requires frame-replacement."
- **Constructive-output is integral.** Seed extraction = articulating the purpose-fitness failure; inability to extract a seed = the KILL is unsupported.
- **Confidence is orthogonal.** Insufficient evidence calls for INTERIM verdict (structural follow-up), not a softer severity.
- **Phase 0 owns severity-calibration.** Step 4 (Weight dimensions) is where the meta-principle attaches.
- **#2 Rubber-Stamping + #3 Nitpicking are unified.** Both violate the meta-principle from opposite directions; both are preventable by the same structural test.

The practitioner-applicable form: **"If this defect were left in place, would the candidate still do what it's supposed to do?"**

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed (no longer variable)

- **Meta-principle structure:** single-axis purpose-fitness.
- **Severity-calibration locus:** Phase 0 step 4 (Weight dimensions).
- **REFINE/KILL structural boundary:** fixability-within-frame.
- **Composite decomposition:** per-task application layer (reversibility × blast-radius × etc.), not meta-principle structure.
- **Constructive-output requirement:** integral to KILL definition.
- **Confidence:** orthogonal to severity (separate verdict problem).
- **#2 and #3 failure modes:** unified by meta-principle.

### Eliminated (no longer viable)

- "Severity is a feeling" — eliminated; it's a structural test.
- "Severity is a fixed N-axis composite at meta-level" — eliminated; the composite is per-task.
- "Constructive-output is orthogonal operational concern" — eliminated; it's structural test of the verdict.
- "Confidence weights severity" — eliminated; confidence is evidence-strength.
- "Severity is its own sub-phase between landscape and adversarial" — eliminated; it's Phase 0 weighting semantics.
- "#2 and #3 are independent" — eliminated; they're unified by the meta-principle.
- "Stakes" as binary low/high — eliminated; stakes is per-task composite.

### Viable paths (constrained solution space)

- The meta-principle is "purpose-fitness," articulated as the structural test "would the candidate still do what it's supposed to do if this defect were left in place?"
- The structural follow-up will articulate WHERE in the spec to encode this and HOW the calibration layer relates to existing Phase 0 weighting semantics.
- The follow-up may also address the structural question raised by Ambiguity 3 — should critique have an INTERIM verdict for insufficient-evidence cases?

### SV5 — Constrained Understanding

The meaning-layer question has converged. Severity in `/td-critique` is structurally purpose-fitness: kill-worthy = "the candidate doesn't do what it's supposed to do because of this defect"; minor = "the candidate still does what it's supposed to do despite this defect." All four ambiguities are resolved with HIGH confidence; one resolved with HIGH confidence after re-scoping (Ambiguity 1). The structural-layer follow-up's design space is constrained to:

1. **Encoding location:** a refinement note (or other spec edit) at Phase 0 / Dimension Construction / step 4 (Weight dimensions).
2. **Calibration layer articulation:** how the per-task composite (reversibility × blast-radius × etc.) interacts with the meta-principle without re-introducing the rejected "fixed N-axis" framing.
3. **Practitioner protocol:** the 1-question structural test ("would the candidate still do what it's supposed to do?") integrated into the spec's existing language.
4. **Open question (structural follow-up scope):** should critique add an INTERIM verdict for insufficient-evidence cases (Ambiguity 3's spin-off)?
5. **Open question (structural follow-up scope):** should the spec articulate the unified relationship between #2 and #3 explicitly (Ambiguity 5's outcome)?

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did new perspectives keep destabilizing the model? Review: SV1 → SV2 (anchors revealed purpose-fitness as unnamed structural property) → SV3 (perspectives confirmed without destabilizing; two new anchors emerged that strengthened the model) → SV4 (ambiguities resolved cleanly with high confidence) → SV5 (degrees-of-freedom reduced to constrained design space).

The model SETTLED. No perspective produced destabilizing anchors that forced re-extraction. Accommodation trigger does NOT fire. Stabilization is structurally supported, not forced. **No model-misfit.**

### Self-applicability test (META-LOOP)

The meta-principle states: a candidate is kill-worthy if it doesn't do what it's supposed to do.

**This inquiry's purpose:** produce a structurally articulated, task-agnostic meta-principle for severity in `/td-critique`.

**Self-test:** does this inquiry's output (the purpose-fitness meta-principle) do what the inquiry is supposed to do?

- **Structural articulation:** the meta-principle is named (purpose-fitness), defined (would-the-candidate-still-do-its-job test), and located in the spec (Phase 0 step 4). ✓
- **Task-agnostic:** verified across 4 domains (software / research / business / spec-edit). ✓
- **Practitioner-applicable:** converts to a single yes/no structural question. ✓
- **Bidirectional prevention:** unifies #2 and #3 as opposite-direction violations of the same principle. ✓
- **Spec-coherent:** no existing commitment overturned. ✓
- **Self-applicable without contradiction:** applying the meta-principle to this inquiry's output verifies the output does its job. ✓

The meta-principle PASSES its own application. No self-refutation. **Self-test verdict: SURVIVES.**

### Self-Reference Blindness check (Failure mode #6)

This inquiry uses the conceptual framework of `/td-critique` (verdicts, severity, dimensions, prosecution, defense) to evaluate `/td-critique` itself. The risk of self-reference blindness is REAL.

Mitigation evidence applied:
- **External canonical anchors** (surfacing items 39-45): safety SIL, blast-radius, asymmetric loss, Type I/II errors — none of these originate in `/td-critique`'s conceptual framework. They externally ground the composite-structure observation in K4.
- **Cross-discipline analogs** (innovate's 4 dispositions; surfacing's 4 relevance levels): provide structural-shape evidence that verdict-shapes can be richer than 3-state, externally informing Ambiguity 3.
- **Empirical corpus signal** (`100_critique_correction_chain_analysis.md` ~48% correction rate; top_7 failure patterns): provides empirical grounding that critique CAN miscalibrate severity in real inquiries — the meta-principle isn't tested only against the spec's own articulation.
- **Domain-invariance test** (4-domain Phase 2 check): forces the meta-principle to hold OUTSIDE the spec's home language; if it only made sense in critique-vocabulary, it wouldn't pass.

**Self-Reference Blindness verdict: ACCEPTABLE RESIDUAL.** Self-reference is present but externally grounded.

### Status Quo Bias check (Failure mode #1)

Did the analysis defend the existing spec articulation because it's documented, rather than because evidence supports it? Review:
- The analysis RE-FRAMED the existing articulation. The spec says "severity awareness" + "burden of proof" + "critical-weight" + "constructive-output" as separate notions; the analysis collapsed them into one underlying meta-principle (purpose-fitness). This is NOT defense of existing language; it's articulation of the UNDERLYING STRUCTURE that the existing language was 4 partial views of.
- The analysis EXPLICITLY FLAGGED an open question for the structural follow-up (INTERIM verdict for insufficient evidence) that would EXTEND the spec, not preserve it.
- The analysis FOUND a structural insight (#2 and #3 are unified by the meta-principle) that the existing spec does not state.

**Status Quo Bias verdict: NOT APPLICABLE.** The analysis is meaning-articulating, not status-quo-preserving.

### SV6 — Stabilized Model

**The meta-principle of severity in `/td-critique`, expressed task-agnostically:**

> A defect in a candidate is **kill-worthy** IFF, left in place, the defect prevents the candidate from doing what the candidate is supposed to do.
>
> A defect is **minor / nitpick** IFF, left in place, the candidate still does what it's supposed to do.
>
> The practitioner-applicable structural test: **"If this defect were left in place, would the candidate still do what it's supposed to do?"** YES → not kill-worthy (caveat on SURVIVE, or REFINE if there's a known better in-frame variant). NO → kill-worthy (REFINE if in-frame modification fixes it; KILL if the candidate's frame itself produces the failure).

**The structural commitments of the meta-principle:**

1. **Single-axis at meta-level (purpose-fitness).** Composite decomposition (reversibility × blast-radius × scope × fixability) belongs to per-task calibration, not the meta-principle.
2. **Severity-calibration locus.** Phase 0 / Dimension Construction / step 4 (Weight dimensions). Critical-weight dimensions are those whose failure blocks purpose-fitness.
3. **REFINE/KILL structural boundary.** Fixability-within-frame. REFINE = in-frame fixable; KILL = requires frame-replacement.
4. **Constructive-output is integral.** Seed extraction = articulating the purpose-fitness failure. Inability to extract = the KILL is unsupported.
5. **Confidence is orthogonal.** Insufficient evidence is a separate verdict-shape problem (open for structural follow-up to address with an INTERIM verdict or similar).
6. **#2 Rubber-Stamping and #3 Nitpicking are unified.** Both are opposite-direction violations of the meta-principle.

**Differences from SV1:**

| | SV1 | SV6 |
|---|---|---|
| Severity articulation | 4 near-synonyms (severity awareness / burden of proof / critical-weight / constructive-output) | 1 structural meta-principle (purpose-fitness) with the 4 SV1 notions as views of it |
| Single or composite | Implicit single-axis ("stakes") with composite hints externally | Two layers: meta-principle (single-axis) + calibration (composite, per-task) |
| Constructive-output | Operational requirement | Structural test integral to KILL definition |
| #2 vs #3 | Two pole framing without unification | Unified as opposite-direction violations of one meta-principle |
| Practitioner test | Implicit ("severity awareness") | Explicit single yes/no structural question |
| Confidence | Unmentioned | Orthogonal to severity; open for follow-up |
| Phase location | Implicit | Phase 0 step 4 (Weight dimensions) |

### Telemetry

- **Perspective saturation:** PASSING. After 6 perspectives (practitioner / task-agnostic / failure-mode / spec-grounded / frame-exit completeness / definitional internal consistency), new perspectives confirmed rather than destabilized. Phase / Calibration-State perspective added no new anchors (no phase-dependence in the meta-principle).
- **Ambiguity resolution ratio:** 5/5 ambiguities resolved (Ambiguities 1-5); 1 frontier flagged (F1 — ambiguous-purpose candidates) for structural follow-up.
- **SV delta:** SUBSTANTIAL. SV1 viewed the spec as having 4 near-synonyms for severity; SV6 unifies them under a single named meta-principle (purpose-fitness) with a clear structural test. The 7-row comparison table shows substantive shifts on every row.
- **Anchor diversity:** 6 constraints + 10 key insights + 4 structural points + 4 foundational principles + 5 meaning-nodes from 6 perspectives. Multi-type, multi-perspective.

### Open frontiers (for structural follow-up)

- **F1 — Ambiguous-purpose candidates.** When the candidate's purpose is intentionally fuzzy (exploratory ideation), the purpose-fitness test needs a layer-aware modification. Likely articulation: "would this candidate continue to support the exploratory inquiry?" replaces the fixed-purpose test for these cases.
- **F2 — INTERIM verdict for insufficient evidence.** Ambiguity 3 spin-off. Critique currently has SURVIVE/REFINE/KILL with caveats noted on SURVIVE. Should there be a 4th verdict (analogous to innovate's DEFERRED) for cases where evidence is insufficient to render a confident verdict?
- **F3 — Explicit unification of #2 and #3 in the spec text.** Ambiguity 5 outcome. Should the spec text be updated to name the unified meta-principle that prevents both, rather than treating them as independent prevention problems?
- **F4 — Calibration-layer articulation.** How does the per-task composite (reversibility × blast-radius × etc.) interact with the meta-principle in spec text? Likely a refinement-note shape, citing existing language (the Project-specific risk dimension check refinement note already in the spec is the codebase precedent).

### Self-Assessment

PROCEED. SV6 is stabilized with high confidence; all 5 ambiguities resolved; perspectives confirmed without destabilizing; self-applicability test passed; self-reference blindness mitigated via external grounding. Downstream Decomposition can operate on this stabilized model to identify the pieces of the structural-follow-up question (since the meaning is now settled).
