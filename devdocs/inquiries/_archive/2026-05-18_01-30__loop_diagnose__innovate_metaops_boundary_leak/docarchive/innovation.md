# Innovation — Three-Part Deliverable Execution

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-18_01-30__loop_diagnose__innovate_metaops_boundary_leak/_branch.md`

Context: Innovation phase, execution-mode. Read all priors. Execute P1 (boundary framework + KILL verdicts) → P2 (corrected /innovate improvements) + P3 (cross-discipline handoffs) → Assembly. Apply 1 Generator + 1 Framer as light tools per spec minimum coverage.

---

## Phase 1 — Seed

The seed is Sensemaking's five committed decisions. The work: format into the publishable 3-part deliverable. Direction: the user's correction is correct; the corrected output is narrower than the prior but honest.

---

## P1 — Boundary Framework + Formal KILL Verdicts

### Part 1A — The T1-T5 Discipline-Boundary Framework

A future agent applying these five tests to any cognitive move can adjudicate "which discipline does this belong to?" without re-litigating the question per case. T1 and T5 are PRIMARY (do most of the routing work); T2-T4 are CORROBORATING (used when T1+T5 give ambiguous results).

#### T1 — Output-Shape Test (PRIMARY)

**Asks:** what kind of artifact does the move produce?

| Output shape | Discipline |
|---|---|
| Novel content (new idea, concept-name, edge-case, novel combination, novel condition) that didn't exist before | `/innovate` |
| Evaluative verdict on candidate (SURVIVE / REFINE / KILL) with optional constructive direction | `/td-critique` |
| Process-observation about how S/I/C performed; failure-mode labeling of prior outputs | `/reflect` |
| Cognitive anchor / stabilized meaning / ambiguity-collapse / re-anchoring at foundational layer | `/sense-making` |
| Predictive internal model of an opaque artifact | `/comprehend` |
| Confidence-tagged map of unknown territory | `/explore` |
| Question tree with interfaces and dependency ordering | `/decompose` |

**Spec quote grounding:** /innovate spec: *"creating something that doesn't exist in the current evaluation frame — a new idea, approach, condition, or combination."* /td-critique spec: *"determining which survive, which need refinement, and which die."* /reflect spec: *"second-order observation of a first-order cognitive process."* /sense-making spec: *"constructing stable meaning by organizing cognitive anchors."* /comprehend spec: *"transforming an observable-but-opaque artifact into an internal working model with predictive power."*

#### T5 — Novel-vs-Existing Test (PRIMARY)

**Asks:** is the move creating something new, or operating on something already produced?

| Operation | Discipline |
|---|---|
| Creating something that didn't exist (new content, new concept-name, new condition) | `/innovate` |
| Operating on existing candidates to produce verdicts | `/td-critique` |
| Operating on existing process traces (completed run's S/I/C outputs) to produce observations | `/reflect` |
| Operating on existing claim/ambiguity to stabilize meaning (anchor extraction with perspective checking) | `/sense-making` |
| Operating on existing opaque artifact to build a predictive model | `/comprehend` |

**Spec quote grounding:** /innovate explicitly excludes "Optimization (optimization improves within a known space; innovation changes the space)" — i.e., /innovate creates new, doesn't operate on existing.

#### T2 — Input-Type Test (CORROBORATING)

**Asks:** what does the move consume?

| Input type | Discipline |
|---|---|
| A seed (question, gap, signal, dissatisfaction, failure, collision, constraint) | `/innovate`'s starting point |
| A candidate or set of candidates | `/td-critique` consumes |
| A completed run's S.md + I.md + C.md outputs + human interventions | `/reflect` consumes |
| Vague/ambiguous input + the cognizer's understanding-state | `/sense-making` consumes |
| An opaque-but-observable artifact (codebase, system, document) | `/comprehend` consumes |

#### T3 — Order-in-Loop Test (CORROBORATING)

**Asks:** when in the SIC(R) pipeline does the move fire?

| Pipeline phase | Discipline |
|---|---|
| Pre-evaluation creation phase (candidates being generated) | `/innovate` |
| Post-creation evaluation phase (candidates being judged) | `/td-critique` |
| Post-everything second-order observation | `/reflect` |
| Pre-candidate problem-understanding phase | `/sense-making` |

#### T4 — Content vs Process Test (CORROBORATING; hard boundary for /reflect)

**Asks:** what is the move targeting?

| Target | Discipline |
|---|---|
| The content under inquiry (the problem's substance) | `/innovate`, `/td-critique`, `/sense-making`, `/comprehend` (different aspects of content) |
| The PROCESS that produced the content (how S/I/C performed) | `/reflect` exclusively |

**Spec quote grounding:** /reflect spec: *"Reflection is NOT Critique (critique evaluates CANDIDATES — ideas, plans. Reflection evaluates the PROCESS — how S, I, C each performed)."* — hard boundary.

### Part 1B — Formal KILL Verdicts on Prior Finding's Commitments

The prior finding (`devdocs/inquiries/2026-05-18_00-06__innovate_top5_improvements_from_pairs/finding.md`) made 8 architectural commitments. Each is tested against T1-T5 and given a verdict:

| # | Prior commitment | Verdict | Destination (where the operation belongs) | Reason |
|---|---|---|---|---|
| **1** | 3-operation top-level expansion (Generation + Framing + new **Meta-Operations** category) | **KILL** | The Meta-Operations content distributes across `/td-critique`, `/sense-making`, `/reflect` — no need for a new /innovate top-level category | T1: the Meta-Operations contents have output-shapes other than novel content; T5: they operate on existing outputs/claims, not create new |
| **2** | **Procedural-Directive Generation** as new Meta-Operation #1 (output: how-the-loop-runs directives, action-shape changes, mode-shifts, failure-mode labeling) | **KILL as /innovate territory** | `/td-critique` (REFINE/KILL verdicts with constructive output) + `/reflect` (failure-mode labeling) | T1: REFINE-with-direction is /td-critique's spec'd output ("Direct back to innovation with targeted feedback. Output: Which dimensions failed + what 'right' looks like"). T5: operates on existing loop outputs, not creating new |
| **3** | **Confidence-Audit** as new Meta-Operation #2 (output: verification candidates for confident claims) | **KILL as /innovate territory** | `/td-critique` (Scrutiny Survival + Prosecution) | T1: adversarial verification is /td-critique's spec'd output. T5: operates on existing prior outputs, not creating new |
| **4** | **Combination's across-history sub-mode** ("Pattern Across History") as Combination extension or new Meta-Operation | **PARTIAL SURVIVE** | The pattern-NAMING aspect (Pair 7) → /innovate as Combination cross-output input-source extension (genuine novel content creation). The failure-mode-recognition-across-runs aspect (Pair 6) → /reflect | T1+T5 split the operation: naming a new concept = /innovate; instancing a known failure across runs = /reflect |
| **5** | **Absence Recognition's verify-direction sub-mode** ("Existence-Counter") | **KILL as /innovate territory** | `/sense-making` (Definitional/Internal-Consistency perspective applied to claimed absences) | T1: verifying a claim against existing artifacts produces an anchor-consistency check, not novel content. T5: operates on existing artifacts and existing claims |
| **6** | **Lens Shifting's altitude-dimension sub-mode** ("Altitude-Shift") | **KILL as /innovate territory** | `/sense-making` (Foundational-Principles anchor at deeper altitude; re-anchoring) | T1: re-anchoring at foundational layer produces stabilized meaning, not novel content. T5: re-running sensemaking with stronger pull-back on existing frame, not creating new |
| **7** | **Inversion-depth-4 sub-mode** (wholesale rejection + rebuild) | **KILL as /innovate's Inversion territory** | `/td-critique` (KILL verdict + seed extraction) | T1: discard-and-new-direction is /td-critique's spec'd KILL output. T5: rejecting existing framework is operating-on-existing, not creating-new |
| **8** | **Failure-mode-labeling sub-mode** (within Procedural-Directive Generation) | **KILL as /innovate territory** | `/reflect` (per-step observation labeling of prior outputs) | T1: labeling prior outputs with failure modes is process-observation. T5: operates on existing prior outputs |

**One partial-survive (Commitment 4) is the only piece of the prior finding's architecture that retains a /innovate claim.** Everything else is operationally re-located.

### Part 1C — Borderline Adjudications

- **Pair 9 (budget-vs-coverage tension-surface) → `/sense-making`.** The user's move was a definitional-consistency correction surfacing a missing constraint-anchor. /sense-making's anchor extraction with the Definitional/Internal-Consistency perspective covers it. (Could also be routed to /innovate as an Absence Recognition tension-sub-mode — user-flippable, but Sensemaking's primary commitment is /sense-making.)
- **Pair 13 (question-replacement; protocol/discipline → depth+answer) → MVL+ runner.** The user's move was seed-substitution — replacing the inquiry's question entirely. This is a runner-level operation (a new seed kicks off a new inquiry); not in any current discipline. The MVL+ runner spec needs a question-replacement / seed-substitution feature.

---

## P2 — Corrected /innovate-Specific Improvement Set

Two confirmed improvements; both extend existing /innovate mechanisms rather than adding new top-level categories or mechanisms.

### Improvement #1 — Combination with Cross-Output Observations Input-Source Extension

- **Proposed name:** Combination's "what recurring patterns appear across prior outputs" input-source extension (or compact: **Combination across-history sub-mode**).
  - Domain-agnostic check: "recurring patterns" (generic concept); "prior outputs" (any accumulated artifact); "across-history" (any temporal aggregation). PASSES.
- **Mechanism shape:**
  - **Input contract change:** add a new source to Combination's existing input-source list. Current Combination spec names four sources: "what's already nearby," "what other mechanisms produced," "what shares the same structure," "what the user/audience is already thinking about." Add a fifth: **"what recurring patterns appear across multiple prior loop outputs."**
  - **Transform:** unchanged (Combination's existing transform — "connect previously unrelated concepts to produce something neither contained alone").
  - **Output contract:** unchanged (novel concept-name / novel connection from cross-output observation).
- **Spec slot:** extends Combination's existing "How to apply → Sources" list. Single bullet addition. No new mechanism, no new operation, no category change.
- **Pair evidence:** **Pair 7** (Phantom Canon pattern). The user observed `innovation.md` lines 161-163 across multiple discipline outputs producing "project-specific over-specification" — then NAMED that recurring pattern "Phantom Canon." The naming is a Combination operation (connecting recurring observation with the abstract concept "narrowing as canonical") using cross-output observations as the input source.
- **One-line domain-agnostic justification:** Combination should be able to draw input-sources from the loop's own accumulated history when novel concept-naming requires it, not just from the immediate working context.
- **Why this is genuinely /innovate (T1+T5):** T1: produces a novel concept-name ("Phantom Canon") that didn't exist before — output-shape matches /innovate. T5: creates the new concept-name; the cross-output observations are INPUTS to creating-something-new, not the thing being operated-on as existing.

### Improvement #2 — Absence Recognition with Edge-Case Sub-Mode

- **Proposed name:** Absence Recognition's **edge-case-probe sub-mode**.
  - Domain-agnostic check: "edge-case" (generic — applies to any frame with cases); "probe" (matches /innovate's existing vocabulary). PASSES.
- **Mechanism shape:**
  - **Input contract:** unchanged (the seed + surrounding landscape).
  - **Transform:** extend Absence Recognition's existing question set. Current spec includes: "what's missing? what should be here but isn't?" / "who needs something that doesn't exist yet?" / "what would the complete picture look like, and what's absent?" / "what would exist if this were designed from scratch today?" Add an explicit sub-mode for **case-level absence** asking: *"What specific cases, edge-cases, or particular instances are missing from the current frame? What input shapes / value variants / boundary conditions are not currently considered?"*
  - **Output contract:** unchanged (named absences). Sub-mode produces specifically *case-level* absences (e.g., specific input variants, edge-cases of a data structure, boundary conditions of a procedure).
- **Spec slot:** extends Absence Recognition's existing question set with a named sub-mode. Single sub-section addition under "How to apply." No new mechanism.
- **Pair evidence:** **Pair 12** (type-key multi-value edge case). The user observed that the prior's `type:` key was designed for single-value but didn't address the multi-value edge case. The user generated a SPECIFIC ABSENT CASE that the prior's frame didn't address. The edge-case-probe sub-mode would natively generate such case-level absences.
- **One-line domain-agnostic justification:** Absence Recognition should be able to surface case-level absences (specific edge-cases, input variants, boundary conditions) explicitly, not just structural-level absences (missing fields, missing mechanisms).
- **Why this is genuinely /innovate (T1+T5):** T1: produces a novel case that didn't exist in the frame — output-shape matches /innovate (novel content). T5: creates the new case-instance; not operating on existing content but generating new edge-case territory.

### Coverage Note

These 2 improvements cover **2 of the 13 originally-cited gap-pair-rows** (Pair 7 + Pair 12). The other 11 pair-rows are handed off to other disciplines per P3 below. Pair 9 is in the borderline-to-/sense-making category but flippable to /innovate as an Absence Recognition tension-sub-mode if the user wants a third candidate; Sensemaking's primary commitment routed it to /sense-making.

---

## P3 — Cross-Discipline Handoff Portfolio

Four future-inquiry suggestions, one per affected discipline/runner. Each handoff has a copy-paste-able inquiry title for `/MVL+` invocation, pair-row mappings showing the evidence base, and a brief framing of what the future inquiry should produce.

### Handoff #1 — /td-critique Improvements Inquiry

**Suggested inquiry title (for `/MVL+`):**

> *"Top-N /td-critique improvements: extending REFINE constructive output, KILL seed extraction, and Scrutiny Survival post-ACTIONABLE timing — derived from the 19-pair dataset's /td-critique-shaped moves"*

**Pair-row mapping (8-9 pair-rows):** Pair 2 (4-operations claim wrong — Scrutiny Survival applied to structural claim); Pair 5 (wholesale rejection + redo — KILL + seed extraction); Pair 10 (boost-coverage → selection-mechanism — REFINE with constructive direction); Pair 15 (verify navigation=explore claim — Scrutiny Survival post-utterance); Pair 17 (minimal — REFINE with scope-shrinking direction); Pair 19 (REPAIR-not-ADD-TEST — REFINE with action-shape direction); Pair 20 (contrarian rethink — KILL + new-mode seed); partial Pair 8 (stage-level reframing); partial Pair 14 (structural reframing cascade).

**Framing:** the 19-pair dataset reveals that the human frequently provides REFINE-with-explicit-direction and KILL-with-new-seed contributions that the loop misses natively. /td-critique already has REFINE and KILL verdicts with constructive output as spec'd operations — but the dataset suggests the constructive-output discipline is being executed too thinly. The inquiry should produce improvements to /td-critique's verdict-with-direction capability: how to produce more concrete action-shape directives in REFINE; how to extract richer seeds in KILL; whether Scrutiny Survival should fire on more output types (including in-conversation assistant utterances and post-ACTIONABLE claims).

### Handoff #2 — /sense-making Improvements Inquiry

**Suggested inquiry title (for `/MVL+`):**

> *"Top-N /sense-making improvements: Definitional/Internal-Consistency perspective extension, Foundational-Principles altitude re-anchoring, missing-dimension sub-mode — derived from the 19-pair dataset's /sense-making-shaped moves"*

**Pair-row mapping (6-7 pair-rows):** Pair 1 (md files = memory — Definitional/Internal-Consistency check against existing artifacts); Pair 3 (warmup files ARE concept maps — same shape); Pair 4 (back to fundamentals — Foundational-Principles re-anchoring); Pair 8 (stage-level reframing — anchor re-extraction at different stage); Pair 9 (budget-vs-coverage tension — missing-dimension anchor); Pair 11 (factoring → holistic — ambiguity collapse with different dominant interpretation); partial Pair 14 (cascade structural reframing).

**Framing:** the 19-pair dataset reveals that the human frequently re-anchors at deeper/different altitudes and surfaces missing constraint-anchors that /sense-making's existing perspectives don't catch natively. /sense-making's Definitional/Internal-Consistency perspective is partially relevant but needs operational extension to apply during downstream-discipline output review (not just during initial sensemaking). The inquiry should produce improvements to: the Foundational-Principles anchor type's altitude-pull-back operation; the Definitional/Internal-Consistency perspective's scope to include scanning existing project artifacts against abstract claims; a missing-dimension sub-mode that surfaces tension-axes the current anchor set hasn't captured.

### Handoff #3 — /reflect Improvements Inquiry

**Suggested inquiry title (for `/MVL+`):**

> *"Top-N /reflect improvements: cross-run process observation, pattern-extension across instances, failure-mode-labeling refinements — derived from the 19-pair dataset's /reflect-shaped moves"*

**Pair-row mapping (3 pair-rows):** Pair 6 (sweep across 6 inquiries — cluster defect identified across multiple priors); Pair 18 (pattern-extension 1 → 3 sources); Pair 21 (over-upstream-marks failure-mode-id).

**Framing:** the 19-pair dataset reveals that /reflect's current scope is single-run process observation, but the human frequently makes cross-run observations (same defect appearing across 6 navigation-memory inquiries; same pattern extending across 3 explore sources). /reflect's spec currently bounds it to a single SIC run's outputs; the inquiry should produce improvements to extend /reflect's scope to include cross-run pattern observations (when does /reflect fire across multiple priors? what's the input contract for multi-run /reflect?) and to refine failure-mode-labeling so it can be applied to specific discipline-output instances (not just summarize the run).

### Handoff #4 — MVL+ Runner Seed-Substitution Feature Inquiry

**Suggested inquiry title (for `/MVL+`):**

> *"Add seed-substitution feature to MVL+ runner: how to handle question-replacement mid-inquiry without abandoning accumulated work"*

**Pair-row mapping (1 pair-row):** Pair 13 (protocol/discipline → depth+answer — user replaced the inquiry's question entirely with a different one).

**Framing:** the 19-pair dataset includes one move that doesn't belong to any discipline — replacing the inquiry's seed-question entirely. The user does this when the current inquiry's question is wrong. The MVL+ runner currently has no "seed substitution" or "question replacement" operation; the human's only path is to abandon the current inquiry and start a new one, losing accumulated context. The inquiry should produce a runner-level feature: when the human (or eventually a discipline's frontier output) flags "the wrong question is being asked," the runner should support either (a) seed-substitution within the current inquiry preserving context, or (b) a structured handoff to a new inquiry carrying forward the relevant prior context. This is NOT a discipline improvement; it's a runner improvement.

---

## Light-Tool Checks (per minimum coverage)

### Absence Recognition (Generator)

**Check: are any improvement categories missing from the 3-part deliverable?**

- /innovate-specific improvements: 2 covered (Pair 7 + Pair 12).
- /td-critique improvements: handoff #1.
- /sense-making improvements: handoff #2.
- /reflect improvements: handoff #3.
- MVL+ runner improvements: handoff #4.
- /comprehend improvements: 0 pair-rows mapped — confirmed-absent.
- /explore improvements: 0 pair-rows mapped — confirmed-absent.
- /decompose improvements: 0 pair-rows mapped — confirmed-absent.

**Coverage check:** the 19-pair dataset doesn't surface improvements for /comprehend, /explore, /decompose. The 3-part deliverable covers everything the dataset reveals. No category missing. ✓

### Constraint Manipulation (Framer)

**Check: would tightening any boundary test change the KILL verdicts?**

- Tighten T1 (Output-Shape) — already strict. No change.
- Tighten T5 (Novel-vs-Existing) — already binary. No change.
- Tighten T2-T4 (corroborating) — wouldn't override T1+T5 primary results.

What if we *loosened* T1 to admit "novel directives about procedure" as /innovate territory? Then Procedural-Directive Generation could re-survive. But this would conflict with /innovate's explicit NOT-list ("optimization improves within a known space; innovation changes the space") — Procedural-Directive Generation operates on existing outputs (loop's recent runs) to produce directives about them; that's optimization-shaped, not innovation-shaped per /innovate's own spec. Loosening T1 to admit this would violate /innovate's spec.

**Constraint check verdict:** the KILL verdicts hold under all reasonable boundary-test tightenings. The verdicts can only be overridden by violating /innovate's own spec — which would be a worse failure than the prior finding's mis-attribution.

---

## Assembly (Peak 4) — Final 3-Part Deliverable Cross-References

The three parts produced above assemble into the final deliverable:

- **Part 1 (P1):** the discipline-boundary framework (T1-T5) + 8 formal KILL verdict records + 2 borderline adjudications.
- **Part 2 (P2):** 2 confirmed /innovate-specific improvements with full operational specification.
- **Part 3 (P3):** 4 cross-discipline handoff inquiry suggestions with pair-row mappings.

### Per-Commitment Re-Test Pointer for Critique

Sensemaking's plan committed re-tests for 5 priors (the /innovate spec, /td-critique spec, /sense-making spec, /reflect spec, the prior 2026-05-18 finding, and the 19-pair dataset finding). Critique executes those re-tests in its own phase, recording outcomes for CONCLUDE's `## Inherited Commitments Re-test` section.

Specifically Critique should:
- Re-test the 6 commitments from /innovate spec (each is RE-TESTED + outcome).
- Re-test the boundary-relevant commitments from /td-critique, /sense-making, /reflect specs (each is RE-TESTED + outcome demonstrating the discipline already covers the operation Sensemaking routed to it).
- Re-test the 4 commitments from the prior 2026-05-18 finding (which Sensemaking KILLed; Critique formalizes the KILL with adversarial verification).
- Re-test the 5 commitments from the 19-pair dataset finding (taxonomy + gaps + sweep + evidence-base).

---

## Failure Modes Observed

- **Premature evaluation:** AVOIDED — all 8 KILL verdicts have explicit boundary-test reasoning + spec-quote grounding.
- **Single-mechanism trap:** N/A — execution mode; 1G + 1F applied per spec.
- **Early frame lock:** AVOIDED — Sensemaking's frame applied; not re-litigated.
- **Innovation without grounding:** AVOIDED — every improvement and every handoff has pair-row evidence + spec-quote justification.
- **Mechanism exhaustion:** N/A.
- **Survival bias:** EXPLICITLY CHECKED — the corrected output is much smaller than the prior finding (2 confirmed vs 5 mis-attributed). The check: is the smallness honest or under-surviving? The answer is honest — every KILLed proposal maps to another discipline's spec quote, not just being rejected for inconvenience.

---

## Innovation Telemetry

| Field | Value |
|---|---|
| Mode | EXECUTION (not generative) |
| Generators applied (light tools) | 1/4 (Absence Recognition — category coverage check) |
| Framers applied (light tools) | 1/3 (Constraint Manipulation — boundary-test tightening check) |
| Three-part deliverable produced | YES (P1 boundary+verdicts; P2 /innovate improvements; P3 cross-discipline handoffs) |
| KILL verdicts | 7 full KILLs + 1 partial-survive (Pattern Across History's naming aspect) + 1 architectural KILL (3-operation expansion) |
| /innovate confirmed improvements | 2 (Combination cross-output extension; Absence Recognition edge-case sub-mode) |
| Cross-discipline handoffs | 4 (/td-critique; /sense-making; /reflect; MVL+ runner) |
| Pair-row coverage | 13 of 13 (2 in /innovate; 7-9 in /td-critique; 5-7 in /sense-making; 3 in /reflect; 1 in MVL+ runner) |
| Confirmed-absent (no pair-rows mapped) | /comprehend; /explore; /decompose |
| Failure modes | mostly avoided; survival bias actively checked |
| Assembly emergent value | the 3-part structure surfaces that the prior finding's category-error has a clean fix — re-route the gaps to the disciplines whose specs already cover the operations |

**Overall: PROCEED to Critique.** Three-part deliverable produced. Sensemaking's commitments executed faithfully. Light-tool checks pass (coverage complete; KILL verdicts robust under tightening).

---

## Hand-off to Critique

Critique should:

1. **Test each KILL verdict adversarially.** For each of the 8 KILL verdicts, construct the strongest counter-argument that the operation actually does belong in /innovate. Defense should rely on /innovate's spec; prosecution on the destination discipline's spec.

2. **Test the 2 confirmed /innovate improvements** against T1+T5 — are they genuinely /innovate-shaped, or could either route elsewhere? Specifically: Combination's cross-output input-source extension — could this be /reflect's cross-run observation extension? Absence Recognition's edge-case sub-mode — could this be /sense-making's anchor extraction extension?

3. **Test the 4 cross-discipline handoffs.** For each, validate that the destination discipline's existing spec actually covers the operation being handed off. If a destination spec has a gap, the handoff inquiry will need to ALSO add new operations to that discipline (not just refine existing ones).

4. **Execute per-commitment re-tests** per Sensemaking's plan. Record outcomes for CONCLUDE's `## Inherited Commitments Re-test`.

5. **Survival-bias second check.** The output is much smaller than the prior. Did Critique under-survive candidates that should have stayed in /innovate? Specifically test Pair 9 (Sensemaking routed to /sense-making but the user could flip to /innovate as Absence Recognition tension-sub-mode).
