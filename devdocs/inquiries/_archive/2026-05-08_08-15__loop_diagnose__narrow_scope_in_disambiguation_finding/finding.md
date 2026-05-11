---
status: active
type: loop_diagnose_diagnostic_inquiry
analyzes:
  - devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md
  - devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/finding.md
impacts:
  - homegrown/sense-making/references/sensemaking.md
---
# Finding: Loop Diagnose - Narrow Scope in Disambiguation Finding

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md` (the prior loop, which proposed a discipline-level non-ambiguity convention narrowly scoped to cross-spec references only), the human correction (which named the scope as *"incredibly narrow scoped and wrong goal"* and pointed out that the non-ambiguity problem is generic), and the corrected inquiry at `devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/finding.md` (the corrected loop, which broadened the convention to a generic first-use principle covering all 6 observed shorthand types), what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

The diagnosis ran via `homegrown/protocols/loop_diagnose.md` — the LOOP_DIAGNOSE protocol that frames an MVL+ inquiry (the Extended Cognitive Loop runner at `homegrown/MVL+/SKILL.md`) over a correction chain to surface candidate methodology improvements.

## Finding Summary

- **The prior loop's narrow scope was caused by a multi-stage cascade with two upstream sources.** Hypothesis A (branch framing) pre-encoded a narrow scope at the prior `_branch.md`'s Diagnostic Constraints. Hypothesis B (Sensemaking Premature Stabilization) locked the narrow scope as a load-bearing concept at Phase 1 / Key Insights and used it as a structural argument in Ambiguity Collapse #5 without first testing the counter-interpretation. **B is the more proximate cause** because Sensemaking had the opportunity (via the M6 cross-cutting rule applied to `homegrown/sense-making/references/sensemaking.md` from the prior `2026-05-08_00-20` sister analysis — "M6" is the cross-cutting "name-and-test load-bearing anchors" rule promoted in chain 3 of the original LOOP_DIAGNOSE corpus and codified in the Sensemaking discipline reference spec) to test the load-bearing concept and didn't.

- **Five hypotheses confirmed at HIGH or MEDIUM-HIGH confidence:**
  - **Hypothesis A — Branch framing (HIGH).** Prior `_branch.md` Diagnostic Constraints line 31 said: *"The fix isn't 'make discipline outputs cold-readable'; it's 'reduce the most common ambiguity shape that propagates into CONCLUDE.'"* The phrase *"most common ambiguity shape"* pre-encoded a sub-type as the entire problem. Most upstream cause.
  - **Hypothesis B — Sensemaking Premature Stabilization (HIGH; load-bearing PROXIMATE).** Prior `sensemaking.md` Phase 1 Insight #3 says: *"Cross-spec references are the load-bearing case."* Phase 3 Ambiguity Collapse #5 then uses this insight as a structural argument with HIGH confidence. The load-bearing concept *"the problem IS cross-spec references"* was never tested with M6's prescribed counter-interpretation pair.
  - **Hypothesis C — Exploration shape characterization (MEDIUM).** Prior `exploration.md` Region A line 16 collapsed multiple observed shorthand types under one shape ("definite-article references to spec-internal sections... plus title-case noun phrases used as if proper nouns"). Inherited from A.
  - **Hypothesis D — Critique missing scope-adequacy dimension (MEDIUM-HIGH; detective gap).** Prior `critique.md`'s 9 dimensions (Lightweight, Catches Observed Failures, Composition with Component A, Discipline-Spec Purity, etc.) did not test scope-adequacy / sample-vs-population reasoning. The TP3 cross-cutting rule (multi-axis prosecution depth check; promoted in chain 6 of the original LOOP_DIAGNOSE corpus and codified in the Critique discipline reference spec via the `2026-05-08_05-00` sister analysis) was nominally available but its user-perspective sub-axis didn't fire on the user's broader-scope concern.
  - **Hypothesis E — Sister-analysis precedent (MEDIUM; parallel reinforcement).** Sister analyses of explore.md / sensemaking.md / decompose.md / innovate.md / td-critique.md were narrowly scoped by design (each targeted one discipline's observed failures). The prior loop repeatedly anchored on these precedents, which reinforced "narrow is right" as the default frame.

- **CONCLUDE is NOT implicated.** The prior `finding.md` faithfully synthesized the discipline outputs' narrow scope. CONCLUDE didn't introduce the narrowness; it inherited it. CONCLUDE's existing non-ambiguity principle is a writing-style check (cold-readability of finding output), not a framing-stage check (scope adequacy of the entire inquiry).

- **Both M6 and TP3 — the cross-cutting rules from the original LOOP_DIAGNOSE corpus — were nominally applied but did NOT fire effectively in their first post-promotion test.** This is the corpus's first observation of M6 + TP3 first-application effectiveness checks. M6 was applied to `sensemaking.md` via the `2026-05-08_00-20` sister analysis; the runner did not recognize Insight #3 as load-bearing because the cue's recognition surface didn't fire. TP3 was applied to `td-critique.md` via the `2026-05-08_05-00` sister analysis; the user-perspective sub-axis didn't fire on the user's broader-scope concern. **These are MONITORING signals, not action triggers** — the rules' shapes are correct; the recognition cues' effectiveness in practice is the observable.

- **Five maintenance candidates emerge:**
  - **W1 (ACTIONABLE):** extend M6's application paragraph at `homegrown/sense-making/references/sensemaking.md` with a sample-vs-population recognition cue. ~70 words; one paragraph; concrete recognition cue + test action.
  - **W2 (DEFERRED-conditional):** Critique scope-adequacy / sample-vs-population dimension at `homegrown/td-critique/references/td-critique.md`. Revival trigger: if W1 alone proves insufficient in the next 3 MVL+ runs producing Sensemaking output with "what the problem IS" load-bearing concepts.
  - **W7 (CONTENT CLEANUP — already addressed):** verify the prior `2026-05-08_06-30 _state.md` SUPERSEDED status note proposed by the corrected `2026-05-08_07-15` finding's S-1 edit lands when applied. Mirrors the M7+N7+O7+R7+S7+T7+U5 content cleanup pattern from the chain 1-7 LOOP_DIAGNOSE corpus.
  - **W8 (MONITORING):** 5 tracks — M6 first-application effectiveness check #2; TP3 first-application effectiveness check #1; P1 family (Sensemaking adopting load-bearing concept) extension to 7th instance; P2 family (Critique missing project-specific dimension) extension to 5th instance; M6 cumulative refinement consolidation review TRIGGERED (4 refinements: chain 4 ×2, chain 6 ×1, this chain ×1).
  - **WX (DEFERRED):** runner-level branch-framing patch (e.g., scope-adequacy template at `homegrown/MVL+/SKILL.md`). Defer; corrective implicit through W1; runner-level patches risk over-firing.

- **Diagnostic verdict: ACTIONABLE.** W1 has concrete wording, location, and evaluation gate; the other candidates have explicit revival triggers or are already-procedural.

## Finding

### 1. Why this matters — the corpus pattern continues

This is the 8th LOOP_DIAGNOSE run in the corpus. The first 7 chains (`2026-05-07_15-01` through `2026-05-07_20-02`) diagnosed navigation correction chains — content-level corrections to specific routing inquiries. This 8th chain is structurally different: it's a *meta-correction chain* about a methodology-library refinement task. The prior loop was itself attempting to refine the methodology library (replace a heavy regex-based fix with a lightweight discipline-level intervention), and it produced a wrongly-narrow output despite having access to corpus evidence supporting a broader scope.

This 8th chain extends the corpus's existing failure patterns:

- **P1 family** (Sensemaking adopting load-bearing concept without testing) extends to **7 instances** across 7 chains (chains 1, 2, 3, 4, 5, 6, this one).
- **P2 family** (Critique missing project-specific dimension or scope-adequacy axis) extends to **5 instances** across 5 chains (chains 1, 4, 5, 6, this one).

Both pattern families have well above the 3+ chain threshold; both already have cross-cutting rules promoted (M6 for P1 family; TP3-extended for P2 family) and codified in the relevant discipline reference specs. **And yet the failure recurred in this chain**. This is the load-bearing observation.

### 2. The cascade — five hypotheses

```
A (branch framing pre-encoded narrow scope)
  → C (Exploration Region A inherited and characterized failure shape narrowly)
  → B (Sensemaking Phase 1 Insight #3 stabilized narrow scope as
        load-bearing concept; Phase 3 Ambiguity Collapse #5 used it as
        structural argument WITHOUT M6 testing) ← LOAD-BEARING + PROXIMATE
  → Decomposition / Innovation / Critique inherited narrow scope and propagated
  → D (Critique 9 dimensions did NOT include scope-adequacy axis; couldn't catch as detective)
  → finding.md narrow scope
  
PARALLEL: E (sister-analysis precedent reinforced "narrow is right" frame).
```

Each link is observable in the prior loop's artifacts:

- **A** is in the prior `_branch.md` Diagnostic Constraints line 31. The phrase *"most common ambiguity shape"* admits two readings: (i) one specific sub-type that is most common in the available evidence; (ii) the most common type-pattern (which would be "give first-use parenthetical context for any niche term"). The prior loop's Exploration interpreted (i); the corrected loop interpreted (ii). Same evidence; different framing inheritance.

- **B** is in the prior `sensemaking.md`. Phase 1 / Key Insights line 30 says: *"Cross-spec references are the load-bearing case."* Phase 3 / Ambiguity Collapse #5 (line 174) says: *"Confidence: HIGH (failure evidence is specifically cross-spec). Resolution: Convention applies ONLY to cross-spec references."* Sensemaking USED the load-bearing concept (#3 above) as a structural argument WITHOUT first running M6's prescribed counter-interpretation test. The available evidence (10 observed failures from one prior inquiry) was treated as bounding the underlying problem class — a sample-as-population reasoning failure.

- **C** is in the prior `exploration.md` Region A line 16: *"definite-article references to spec-internal sections/components/failure-modes, plus title-case noun phrases used as if proper nouns. The shape is consistent."* The 10 observed failures contained instances of multiple shorthand types, but Exploration collapsed them under one shape. Inherited from A.

- **D** is in the prior `critique.md`'s 9 dimensions list. None of the 9 tested *"does this convention cover the FULL problem class or just the observed sample?"* The TP3 rule was nominally available, but its user-perspective sub-axis was not constructed against the user's broader-scope concern.

- **E** is in the prior `sensemaking.md` line 30: *"sister-analysis precedent of one-paragraph extensions."* The prior loop explicitly cited sister analyses of explore.md / sensemaking.md / decompose.md / innovate.md / td-critique.md as reference frame. Each sister analysis was narrowly scoped by design (one discipline's failures). Anchoring on these precedents reinforced "narrow is right" as the default.

### 3. Why B is the more proximate cause

A and B are correlated (the branch's Diagnostic Constraints primed the corridor that Sensemaking reasoned inside) but separable.

A is upstream priming: the branch's Diagnostic Constraints pre-encoded a narrow scope, but the wording itself is ambiguous (admits both narrow and broad readings). A doesn't determinate-cause the lock-in.

B is the proximate cause: Sensemaking's job is to test interpretive choices. The prior `sensemaking.md`'s Phase 3 / Ambiguity Collapse is the dedicated phase for testing scope assumptions. The prior loop ran 5 ambiguity-collapse pairs (Ambiguities 1-5); none of them tested whether *"the problem IS cross-spec references"* was a sample-bounded interpretation. Ambiguity Collapse #5 instead used the narrow scope as a structural argument with HIGH confidence.

**M6 was nominally applied to `sensemaking.md` (codified via the `2026-05-08_00-20` sister analysis) but did NOT fire here.** M6's rule says: *"For each load-bearing concept stabilized in Sensemaking output (whether at Phase 1 / Constraints, Phase 1 / Foundational Principles, SV2+ Terminology, OR Phase 2 / Perspective Checking when the candidate involves project-state-dependent rules), generate at least one ambiguity-collapse pair testing the strongest counter-interpretation."* The runner did not recognize Insight #3 as a load-bearing concept that triggers M6 testing. Why?

Two possibilities:

- **M6's recognition cue is incomplete.** The rule lists Phase 1 / Constraints, Phase 1 / Foundational Principles, SV2+ Terminology, and Phase 2 / Perspective Checking as the surfaces to scan for load-bearing concepts. Phase 1 / Key Insights — where Insight #3 lived — is not enumerated explicitly. The runner may have applied M6 only to the listed sub-types.

- **The runner recognized Insight #3 as load-bearing but didn't recognize sample-vs-population as a counter-interpretation worth testing.** Even if M6's recognition cue fired, the strongest-counter-interpretation step is judgment-dependent. The runner may have generated counter-interpretations within the narrow frame (e.g., "Approach 1 vs Approach 2 for cross-spec wording") without stepping outside the narrow frame to test it.

Both possibilities suggest a recognition-cue refinement at the application surface, not a rule-shape rewrite. W1 is this refinement.

### 4. The maintenance candidate (W1)

**Concrete final wording** for W1 (one paragraph, ~70 words; appended after the existing M6 application paragraph in `homegrown/sense-making/references/sensemaking.md`):

> **Sample-vs-population recognition cue.** When a load-bearing concept stabilized in Sensemaking output names "what the problem IS" — particularly when it appears as a Phase 1 / Key Insight derived from a finite evidence sample (e.g., observations from one inquiry, instances from one corpus chain) — the ambiguity-collapse pair MUST explicitly test whether the sample is representative of the underlying problem class. The strongest counter-interpretation is: the sample's distribution is not the population's distribution; the load-bearing concept may bound the observed sample, not the actual problem.

Placement: extend the existing M6 application paragraph (the rule applied via `2026-05-08_00-20` sister analysis) at `homegrown/sense-making/references/sensemaking.md`. No new failure mode introduced; no new structural surface added.

Why this wording: it adds a concrete recognition cue ("when a load-bearing concept names 'what the problem IS'") that the prior `sensemaking.md`'s M6 application paragraph didn't make explicit. It names the test action ("test whether the sample is representative"). It grounds the abstraction with examples ("observations from one inquiry, instances from one corpus chain"). The principle is generic; the example is concrete.

### 5. Why other candidates are deferred or only-procedural

**W2 (Critique scope-adequacy dimension) is DEFERRED-conditional.** B is the proximate cause; W1 addresses B directly at the source. W2 would address D (Critique missing scope-adequacy dimension) at the detective layer. If W1 catches the failure at source, the detective layer is redundant; if W1 doesn't catch in the next 3 applicable runs, W2 becomes ACTIONABLE. The chain count for the SCOPE-ADEQUACY-AT-CRITIQUE-DIMENSION pattern is 1 (just this chain); the AXIS-coverage pattern reached 5 chains but was already addressed by `innovate.md`'s Rule A (Axis Coverage Check) from the prior `2026-05-08_03-00` sister analysis. Different patterns; W2 needs its own chain count.

**W7 (content cleanup) is already addressed** by the corrected `2026-05-08_07-15` finding's S-1 edit (which marks the prior `2026-05-08_06-30 _state.md` SUPERSEDED). When the 07-15 finding's edits are applied, this content cleanup lands automatically. No separate action.

**W8 (monitoring) is procedural and zero-cost** — 5 tracks added to the corpus's ongoing observation:
- M6 first-application effectiveness check #2 (chain 6 was #1).
- TP3 first-application effectiveness check #1.
- P1 family extension to 7th instance.
- P2 family extension to 5th instance.
- **M6 cumulative refinement consolidation review TRIGGERED.** Per chain 5's deferral language, the consolidation review fires when cumulative M6 refinement count reaches 4. Count: chain 4 added refinement-S; chain 4 added refinement-C; chain 6 added refinement-S2; this chain adds refinement-via-W1. Total: 4. **Trigger fires.** Outcome of the review is open (could produce no change, refinement-consolidation, or rule-shape rewrite); the trigger only mandates that a review happen at the next LOOP_DIAGNOSE run or methodology-library refinement event.

**WX (runner-level branch-framing patch) is DEFERRED.** Sensemaking is the right corrective surface for interpretive choices; runner-level patches at `MVL+/SKILL.md` risk over-firing on legitimate user-narrow-scope requests. Revival trigger: if a future chain shows branch-framing as a sole upstream cause (no Sensemaking corrective layer available), WX becomes ACTIONABLE.

### 6. The first-application effectiveness observation

This chain is the corpus's first observed test of two cross-cutting rules in their post-promotion application:

- **M6** (Sensemaking name-and-test load-bearing concepts) was promoted in chain 3 (`2026-05-07_16-28`); applied to `homegrown/sense-making/references/sensemaking.md` via the `2026-05-08_00-20` sister analysis. Chain 6 (`2026-05-07_19-08`) flagged the first M6 effectiveness check (#1) which produced refinement-S2. This 8th chain produces M6 effectiveness check **#2** with another refinement event (W1, structurally similar to a refinement-via-recognition-cue extension). Cumulative M6 refinements: 4.

- **TP3** (Critique multi-axis prosecution depth check) was promoted in chain 6; applied to `td-critique.md` via the `2026-05-08_05-00` sister analysis. This 8th chain produces TP3 effectiveness check **#1** (the first observed post-promotion test). The user-perspective sub-axis was nominally available but didn't fire on the user's broader-scope concern.

These observations matter for the corpus's evolving understanding of cross-cutting rule effectiveness. **Both rules' shapes appear correct** (the rules are generic, multi-chain-evidenced, and structurally clean), **but the recognition cues' effectiveness in practice is the observable that needs tracking**. The W8 monitoring tracks formalize this observation across upcoming runs.

The M6 cumulative refinement consolidation review is now mechanically triggered. This doesn't mandate protocol changes; it mandates a review event. Per LOOP_DIAGNOSE Step 6, protocol-level changes still require 5-10 stable findings. The consolidation review will assess whether M6's accumulated refinements (S, C, S2, this chain's W1-style refinement) suggest a shape consolidation or whether continued piecemeal refinement is sustainable.

### 7. Why CONCLUDE is not implicated

The prior `finding.md` faithfully synthesized the prior `docarchive/` outputs. Each section of the prior finding maps to a corresponding section of an upstream discipline output. CONCLUDE compiled the narrow scope; it did not introduce it.

CONCLUDE's existing non-ambiguity principle (at `homegrown/protocols/conclude.md`) is a writing-style check — it tests cold-readability of the finding's prose for an outside reader. It does NOT test scope adequacy of the entire inquiry. Adding scope-adequacy to CONCLUDE would conflate two different concerns (writing-style vs framing-stage) and would over-burden CONCLUDE with responsibilities that belong upstream (at Sensemaking).

CONCLUDE non-implication is structurally defended.

### 8. Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| Loop framing (branch) | Diagnostic Constraints pre-encoded narrow scope | strong | HIGH | None standalone (corrective implicit through W1) |
| Sensemaking | Premature Stabilization at Phase 1 / Key Insights; M6 recognition cue didn't fire | strong | HIGH | W1 — sample-vs-population recognition cue extension |
| Exploration | Region A characterization collapsed multiple shorthand types | medium (largely inherited from branch framing) | MEDIUM | Covered by W1 (Sensemaking-level corrective re-tests scope) |
| Critique | 9 dimensions missing scope-adequacy axis | medium-strong | MEDIUM-HIGH | W2 — DEFERRED-conditional |
| Sister-analysis precedent | "Narrow is right" frame reinforced from per-discipline analyses | weak-medium (parallel reinforcement) | MEDIUM | None standalone |
| CONCLUDE | (not implicated; faithfully synthesized) | n/a | n/a (NOT IMPLICATED) | None |

The cascade has TWO upstream sources (A framing + B Sensemaking) plus one detective gap (D Critique) plus a parallel reinforcement (E sister precedent). C is propagated from A. CONCLUDE is clear.

## Next Actions

### MUST

- **What:** Apply W1 — extend the existing M6 application paragraph at `homegrown/sense-making/references/sensemaking.md` (the rule paragraph applied via the `2026-05-08_00-20` sister analysis) with the sample-vs-population recognition cue (~70 words; one paragraph; final wording in section 4 above).
  - **Who:** Sensemaking discipline maintainer (user-confirmed surgical edit).
  - **Gate:** observable — in the next 3 MVL+ runs producing Sensemaking output with load-bearing concepts characterizing "what the problem IS" derived from finite evidence samples (one inquiry's observations or one corpus chain's instances), the runner generates an ambiguity-collapse pair explicitly testing sample-vs-population.
  - **Why:** Targets Hypothesis B at the load-bearing proximate cause. Prevents recurrence of sample-as-population reasoning at Sensemaking. Lowest-cost Sensemaking-spec edit; multiple downstream effects (Decomposition / Innovation / Critique inheritance) prevented.

- **What:** Activate W8 monitoring (5 tracks).
  - **Who:** User during normal MVL+ runs.
  - **Gate:** at the next LOOP_DIAGNOSE run completion or methodology-library refinement event, document M6 + TP3 effectiveness check observations; document P1 + P2 family chain count; review M6 cumulative refinement consolidation (4 refinements; review now triggered).
  - **Why:** Provides ongoing observation of cross-cutting rule effectiveness; activates M6 consolidation review without forcing premature consolidation.

### COULD

- **What:** When the corrected `2026-05-08_07-15` finding's edits are applied (Component A → conclude.md; generic convention → 5 discipline specs; SUPERSEDES marker → prior `2026-05-08_06-30 _state.md`), verify the supersession status note lands. This satisfies W7.
  - **Who:** User during the surgical-edit application sequence.
  - **Gate:** verifiable by single read of prior `_state.md`.
  - **Why:** Ensures content cleanup track is closed; mirrors M7+N7+O7+R7+S7+T7+U5 pattern from chain 1-7 LOOP_DIAGNOSE corpus.

### DEFERRED

- **What:** Promote W2 from DEFERRED-conditional to ACTIONABLE — Critique scope-adequacy / sample-vs-population dimension at `homegrown/td-critique/references/td-critique.md`. Sister to existing project-specific risk dimensions (duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit) added via the `2026-05-08_05-00` sister analysis.
  - **Gate:** revive when (a) W1 alone proves insufficient in the next 3 MVL+ runs producing Sensemaking output with "what the problem IS" load-bearing concepts (narrow scope still locks in despite W1), OR (b) the SCOPE-ADEQUACY-AT-CRITIQUE-DIMENSION pattern reaches 3+ chains (currently 1: this chain).
  - **Why (if revived):** Adds detective-layer coverage at Critique. If W1's source-side correction is missed, W2's destination-side dimension catches the failure during prosecution. Increases redundant coverage with low marginal cost (one new dimension entry).

- **What:** Promote WX from DEFERRED to ACTIONABLE — runner-level branch-framing patch (e.g., scope-adequacy template at `homegrown/MVL+/SKILL.md`).
  - **Gate:** revive when a future chain shows branch-framing as a SOLE upstream cause (no Sensemaking corrective layer available because Sensemaking properly applied M6 + W1 but the branch's framing was already too narrow to recover).
  - **Why (if revived):** Patching the runner-level branch-creation step risks over-firing on legitimate user-narrow-scope requests; current evidence does not justify the risk. Sensemaking is the right corrective surface.

- **What:** Conduct M6 cumulative refinement consolidation review.
  - **Gate:** at the next LOOP_DIAGNOSE run or methodology-library refinement event. **Trigger is now fired** (cumulative refinement count = 4: chain 4 ×2, chain 6 ×1, this chain ×1).
  - **Why:** Per chain 5's deferral language. The review may produce no change (each refinement remains targeted at distinct surfaces), refinement-consolidation (combine the 4 refinements into a generalized M6 wording), or rule-shape rewrite (M6 needs structural change). Outcome is open; the trigger only mandates the review event.

## Reasoning

This finding's diagnostic verdict is structural, not motivational. The prior loop's narrow scope is explained by a multi-stage cascade with observable evidence at each stage; it is not explained by the runner being careless or the rules being absent.

### Why a multi-source cascade over single-source attribution

Single-source attribution was considered. Two specific framings:

- **"Sensemaking failed M6; everything else is fine."** Rejected because the branch's Diagnostic Constraints line 31 pre-encoded the narrow scope. Even if Sensemaking had applied M6 correctly, the corridor was primed. Single-source attribution to B alone underweights A's contribution.

- **"Branch framing pre-encoded everything; downstream disciplines just inherited."** Rejected because the branch wording itself admits both narrow and broad readings. Sensemaking had the opportunity to broaden via M6; it didn't. Single-source attribution to A alone underweights B's proximate causation.

The two-source cascade structure (A primes; B locks) is supported by independent artifact citations at each stage. Per LOOP_DIAGNOSE Step 5: "Do not collapse all failures into discipline failures. Bad loop framing, missing context, orchestration choices, and CONCLUDE synthesis can be the real failure surface." This chain's diagnosis honors that guidance.

### Why M6's failure is recognition-cue, not rule-shape

M6's wording lists Phase 1 / Constraints, Phase 1 / Foundational Principles, SV2+ Terminology, and Phase 2 / Perspective Checking as the surfaces to scan for load-bearing concepts. The prior loop's load-bearing concept (Insight #3 at Phase 1 / Key Insights) is not in that explicit list.

But two interpretations of M6 are possible:

- **Narrow:** "scan only the listed Phase 1 anchor sub-types."
- **Broad:** "scan all Phase 1 anchor sub-types; the list is illustrative."

Under the broad interpretation, Insight #3 is in scope and should have triggered M6 testing. Under the narrow interpretation, it wasn't.

The corrective is at the application-surface recognition cue: explicitly enumerate Phase 1 / Key Insights alongside the other sub-types, OR add a recognition cue at the meta level ("any load-bearing concept that names 'what the problem IS' regardless of which Phase 1 sub-type captures it"). W1's wording takes the meta-level approach.

### Why W2 is DEFERRED, not ACTIONABLE

The chain count for the AXIS-coverage failure pattern reached 5 (chain 1 storage-axis, chain 4 phase-conditional, chain 5 structural-vs-input, chain 6 discovery-mechanism, this chain narrow-disambiguation). But the AXIS-coverage failures were addressed by `innovate.md`'s Rule A (Axis Coverage Check at Phase 3 / Test Assembly Check) from the prior `2026-05-08_03-00` sister analysis. This chain's failure is at a different layer — Sensemaking's load-bearing-concept characterization, not Innovation's candidate-set or Critique's dimension list.

The chain count for the SCOPE-ADEQUACY-AT-CRITIQUE-DIMENSION pattern is 1 (just this chain). Per LOOP_DIAGNOSE Step 6, cross-cutting promotion typically requires 3+ chains. W2 deferred to its own chain-count threshold.

If W1 effectively addresses B at Sensemaking, W2 may never become necessary. If W1 fails to fire, W2 activates as the detective-layer corrective.

### Why M6 cumulative refinement consolidation review is triggered, not protocol-rewritten

Per chain 5's deferral language: *"if cumulative M6 refinement frequency continues, consolidate the rule shape rather than continuing to refine."* Chain 6 expanded to 3 refinements. This chain's W1 is structurally similar to a 4th refinement event (extending M6's recognition cue at the application surface).

Trigger: count reaches 4 → consolidation REVIEW fires. Per LOOP_DIAGNOSE Step 6 (protocol-level changes need 5-10 stable findings): we have 8 chains so far — within range. The REVIEW is now appropriate; the OUTCOME of the review (no change, consolidation, or rewrite) is open.

The review is mechanical, not judgment-based; the outcome is judgment-based. This separation is intentional.

### Why the user's correction is high-quality external evidence

The user's correction is structurally precise: *"is talking about small edits to disciplines and only regarding referring to other discipline text references, which is incredibley narrow scoped and wrong goal. Our nonambiguity problem is generic and not only relevant to referring other discipline text."*

The user named the failure mode ("narrow scoped and wrong goal") and the corrective direction ("non-ambiguity is generic"). This grounds the diagnosis externally — the diagnostic's verdict isn't self-validating critique-on-critique; it's grounded in user judgment about what the problem actually is.

This addresses Self-Reference Collapse (failure mode #7 at `td-critique.md`): when critique evaluates critique itself, external grounding via user judgment + corpus evidence prevents circular validation.

## Open Questions

### Monitoring

- **W1 effectiveness in the next 3 MVL+ runs producing Sensemaking output with "what the problem IS" load-bearing concepts.** Observable in `docarchive/sensemaking.md` outputs. If the runner generates an ambiguity-collapse pair testing sample-vs-population, W1 fires correctly. If not, refine the recognition cue.

- **TP3 first-application effectiveness check #1 outcome in upcoming runs.** Track whether TP3's user-perspective sub-axis fires when applicable.

- **M6 first-application effectiveness check #2 vs #1 comparison.** Both checks observed similar recognition-cue weaknesses; whether the W1 refinement addresses both is testable.

### Refinement Triggers

- **W2 promotion** if W1 alone proves insufficient in next 3 applicable runs, OR if SCOPE-ADEQUACY-AT-CRITIQUE-DIMENSION pattern reaches 3+ chains.

- **WX promotion** if a future chain shows branch-framing as a sole upstream cause.

- **M6 consolidation outcome** at the next LOOP_DIAGNOSE run or methodology-library refinement event. Trigger fired (4 refinements); outcome is open.

- **Cross-cutting promotion of W1** if this chain's pattern (sample-vs-population reasoning failure at Sensemaking's "what the problem IS" load-bearing concept) recurs in 3+ chains. Currently 1 chain; below threshold.

### Research Frontiers

- **Q-RF reinforcement** — whether the M6 + TP3 first-application effectiveness checks point to a deeper system-level capability gap (the runner can't reliably detect when its own framing is sample-bounded). This connects to the existing Q-RF (Quality-Awareness Gap) research frontier from chain 3 onward; Predictive RC architecture territory per `enes/desc.md`. Out of scope for per-paragraph patches.

## Diagnostic Verdict

**Overall:** ACTIONABLE.

- **Best-supported diagnosis:** the prior loop's narrow scope was caused by a cascade with two upstream sources — Hypothesis A (branch framing pre-encoded narrow scope) and Hypothesis B (Sensemaking Premature Stabilization at Phase 1 / Key Insights, with M6 recognition cue not firing on the load-bearing concept *"the problem IS cross-spec references"*). B is the more proximate cause. Hypothesis D (Critique missing scope-adequacy dimension) is the missing detective layer. Hypotheses C (Exploration shape characterization, inherited from A) and E (sister-analysis precedent reinforcement, parallel) are contributing factors. CONCLUDE not implicated.

- **Strongest maintenance candidate:** W1 — extend the M6 application paragraph at `homegrown/sense-making/references/sensemaking.md` with a sample-vs-population recognition cue (~70 words; one paragraph). Targets B at the source; prevents recurrence by forcing Sensemaking to test sample-vs-population for "what the problem IS" load-bearing concepts.

- **Main uncertainty:** whether W1 alone is sufficient. W2 (Critique scope-adequacy dimension) is DEFERRED-conditional with a revival trigger if W1 proves insufficient.

- **Recommended next step:** apply W1; activate W8 monitoring (5 tracks); verify W7 lands when the 07-15 finding's edits are applied; observe M6 + TP3 + P1 + P2 across next 3 MVL+ runs; schedule M6 consolidation review for the next LOOP_DIAGNOSE run or methodology-library refinement event.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

use homegrown/protocols/loop_diagnose.md

devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md
here was missing some important things, understanding and scope as pointed out in

devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/finding.md

we have a situation regarding MVL loop again running but with some broken result.
you can inspect them and create diagnosis of what happened
```

</details>
