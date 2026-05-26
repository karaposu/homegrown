# Critique — investigate_frontier_revisit emission policy

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/_branch.md`

---

## Phase 0 — Dimension Construction

### Default dimensions (validated against Sensemaking)

| Dim | Asks | Extracted from | Weight |
|---|---|---|---|
| **D1 Correctness** | Does this solve Q10 per the goal's 8 criteria? | Branch goal i-viii + Sensemaking SV4 commitments | **CRITICAL** |
| **D2 Coherence** | Does this fit the 8 priors (design memo, frontier-Qs, autonomy, adaptive guidance, categorization, persistence, desc.md, canonical /navigation)? | Synthesis Trigger | **HIGH** |
| **D3 Feasibility** | Implementable as SKILL.md rules in current state (L0, pre-Baldwin, pre-/intuit)? | C2, P-RES-1, Phase 1 Resource | **MED** |
| **D4 Completeness** | Addresses all 8 observation targets + per-route-type + downstream consumers + the user's explicit "options table" ask? | Branch question's 8 obs targets + Goal criterion (i)+(vii), P-HUMAN-1 | **HIGH** |
| **D5 Robustness** | Survives BOTH (a) Baldwin spec when shipped commits non-consumption of routeman AND (b) commits consumption AND (c) pre-/post-maturity transition? | Phase 2 Risk perspective, R1-R4, P-STRAT-1+2 | **HIGH** |
| **D6 Elegance** | Minimum sufficient complexity for the coverage? | FP1 (Don't reinvent) | **MED** |

### Project-specific risk dimensions (per Phase 0 refinement note)

The candidates involve project artifacts (routeman SKILL.md + downstream consumers' specs) + operations (runtime emission decision) + state (per-route confidence field). Project-specific risk dimensions are required:

| Dim | Asks | Extracted from | Weight |
|---|---|---|---|
| **D7 Enumerate-all-identity preservation** | Preserves routeman's "enumerate all possible next moves" identity (gating ANY type violates)? | C1, FP2, KI4 | **CRITICAL** (discipline-core) |
| **D8 Pollution-framing-test integrity** | Respects the testing (and partial overstatement) of the pollution framing rather than accepting it? | C7, KI1, FP3, SP1, Ambiguity 1 | **HIGH** |
| **D9 Per-route-type asymmetry honoring** | Respects FRONTIER and REVISIT's structural difference (Progression/Coordination families; auto/judgment classes)? | C3, KI2, KI3, SP2 | **HIGH** |
| **D10 Operation-parsimony** | Uses existing mechanisms (confidence field) vs introducing new infrastructure? | KI5, SP3, FP1 | **MED-HIGH** |
| **D11 Downstream-decides modularity** | Routeman labels; consumers filter? Doesn't couple routeman to downstream specifics? | KI6, FP4, MN5, SP4 | **MED-HIGH** |
| **D12 Layer commitment integrity** | PROCESS layer primary; doesn't conflate meaning/structural/process? | C2 (Process layer) + Layer Commitment | **MED** |
| **D13 Phase-fit (L0-shippable NOW)** | Works at L0 in current pre-Baldwin, pre-/intuit, pre-LAYER-2-audit state? | P-HUMAN-3, P-STRAT-1, E5-fallback rationale | **HIGH** |

### Dimension validation

**Cross-check against Sensemaking perspectives:**
- Technical/Logical → D1, D3, D6, D10
- Human/User → D4 (user's "options table" ask)
- Strategic/Long-term → D5, D13
- Risk/Failure → D5, D8
- Resource/Feasibility → D3, D6
- Definitional/Internal Consistency → D7, D9, D12
- Definitional/Frame-exit → D7 (load-bearing test verdict on metadata-labeling-vs-gating)

All 7 Sensemaking perspectives have a corresponding critique dimension. **PASS dimension blindness check.**

**Self-check question:** "If the assembled policy passed all 13 dimensions perfectly, would it actually solve Q10?" — YES: the dimensions cover (a) what Q10 asks (D1/D4), (b) what priors require (D2/D7/D9/D11), (c) what risks demand (D5/D8/D13), (d) what's tractable (D3/D6/D10), (e) what's clean (D12). **PASS dimension correctness check.**

---

## Phase 1 — Landscape Construction

### Viable region

A policy lives in the viable region if it:
- Preserves enumerate-all identity (D7) — NO gating-based options.
- Uses the existing confidence field (D10) — no new schema infrastructure.
- Honors per-route-type asymmetry (D9) — different policies for FRONTIER vs REVISIT, OR a deliberate justified collapse.
- Tests the pollution framing rather than accepting it (D8).
- Ships at L0 without depending on Baldwin/intuit/LAYER-2 (D13).
- Provides a SKILL.md-author-able commitment (D1).
- Delivers the user's exhaustive 15-option table (D4).

### Dead region

A policy is dead if it fails ANY of:
- Gates an entire movement type (D7 fail) — Option 2 family.
- Couples routeman to a downstream spec that hasn't shipped (D11 fail) — Option P3-C routeman-decides; Option 15's per-discipline-aware-NOW.
- Requires infrastructure that doesn't exist at L0 (D13 fail) — full Option 7; Option 15.
- Conflates layers (D12 fail) — P1-C REPAIR alternative.
- Accepts pollution framing as validated (D8 fail) — would force gating-first thinking.

### Boundary region

A policy is on the boundary if it:
- Defers a sub-decision but ships a fallback that works (D13 boundary case) — E5 LOW-fallback; threshold ≥3 calibratable.
- Hybrid combines orthogonal mechanisms (D6 elegance trade vs D9 asymmetry) — Option 13.
- Has the natural-availability filter that COULD be seen as gating with a polite name (D7 boundary case).

### Unexplored region

What's NOT been surfaced as a candidate:
- **Hybrid: Option 3 + Option 8 quarantine** (confidence-graduated + snapshot-and-replay together) — would add quarantine infrastructure to defensively store low-confidence emissions. Not surfaced. Likely sub-viable per D6+D10 (quarantine cost too high for unverified pollution risk).
- **Hybrid: Option 13 + per-sub-action split at first ship (Option 5)** — Innovation explicitly defers per-sub-action to FF-C; the not-now choice is justified by D6 (over-categorization at first ship).
- **Adaptive-threshold REVISIT filter** (start at ≥3, lower as practice surfaces value at lower N) — Innovation has FF-E for threshold calibration but doesn't propose adaptive at first ship; reasonable per D6.

**Coverage map:** Viable region is dominated by Option 13 hybrid (the convergence point of D7+D9+D10+D11). Dead region cleanly excludes gating-based + over-coupling + L0-infeasible candidates. Boundary region holds the deferred sub-decisions (E5, ≥3 threshold) — these are the residual uncertainties. Unexplored regions are TOPOLOGICALLY UNLIKELY to contain viable candidates (surrounded by dead/boundary regions).

---

## Phase 2 — Adversarial Evaluation

### Candidate C-A: The Assembled Policy (Option 13 hybrid + all surrounding commitments)

**Description:** Option 13 hybrid (confidence-graduated + per-route-type-split) + D1 confidence scheme (LOW/MED/HIGH; thresholds 20/30) + E5 deferred per-discipline-N source + LOW-fallback + natural-availability filter for REVISIT (≥3 prior cycles) + uniform REVISIT sub-action treatment + single-axis confidence at first ship + defensive pollution-labeling + downstream-decides-by-metadata + enumerate-all identity preserved + 6 FFs.

#### Prosecution (multi-axis depth)

**Dimension-level prosecution:**

- **P-D7 (Enumerate-all-identity attack):** "The natural-availability filter for REVISIT (≥3 prior cycles) is just gating with a polite name. You're letting routeman decide NOT to emit a route type based on a runtime count check. That IS gating; the 'natural-availability' label is rhetorical cover."

- **P-D13 (Phase-fit attack):** "The E5 LOW-fallback means EVERY FRONTIER/REVISIT emission gets confidence=LOW until per-discipline-N source ships. The 'maturity-aware signal' is FLAT at first ship. The recommendation provides ZERO actionable maturity differentiation in the actual first-ship state. The D1 scheme's 3 levels degenerate to 1 level."

- **P-D6 (Elegance attack):** "Option 13 is genuinely more complex than Option 3 alone. Per-route-type-split adds 2 rules vs 1. The asymmetry argument (12/4 partition + family-split) is structurally present but is it LOAD-BEARING enough to justify the doubled-rule complexity at first ship? You're paying complexity for an asymmetry you haven't observed in practice."

- **P-D8 (Pollution-framing-test attack):** "Sensemaking's HIGH confidence on overstated-now / MEDIUM confidence on overstated-permanently means you're 50% sure the framing might be right when Baldwin ships. The defensive labeling response is reasonable but the policy doesn't explicitly say WHAT changes when Baldwin's spec arrives and validates/refutes the framing. Where's the revival trigger for Baldwin-spec coordination?"

- **P-D5 (Robustness attack):** "What if Baldwin's spec when shipped commits a DIFFERENT seed source than 'hunch patterns' — e.g., explicitly includes routeman emissions filtered by confidence? Your labels become Baldwin's primary filter signal. But your labels are derived from per-discipline-N which is DEFERRED. Baldwin needs labels NOW but your labels are FLAT until the source ships. Mismatch."

**User-perspective prosecution (multi-axis depth — user-stated concerns):**

- **P-USER-1 (the user wanted exhaustive options):** "The user explicitly asked 'list what are our options and what are pluses and minuses of them'. The 15-option table is provided — but the table's 'Pros' columns are sometimes one-clause shorthand ('Simplest; preserves enumerate-all' for Option 1). The user asked for 'pluses' and 'minuses' — did each option get enough depth? Or are some rows perfunctory? Verify."

- **P-USER-2 (the user wanted 'dive deep'):** "The user said 'lets dive deep into this one'. The pollution-framing test IS deep. The per-route-type-split asymmetry IS deep. But the deeper question of 'when does FRONTIER's confidence-LOW emission actually help any consumer?' is not directly addressed. If human Selector at L0 always triages anyway, what does the LOW label add at first ship? Is there a depth-gap on the consumer-utility question?"

**Specification-gap probe:**

- **P-SPEC-1 (REVISIT prior-cycle source gap):** "P1-G says 'count source = persistence model's per-Route status per 24-00, OR inquiry-folder scan count heuristic; concrete source deferred to SKILL.md authoring per FF-A adjacent'. Routeman runtime needs to know the prior-cycle count to apply the ≥3 filter. This is an OPERATIONAL gap, not a documentation gap. SKILL.md authoring will hit this on day 1. Is the deferral honest?"

- **P-SPEC-2 (FF-D circular dependency):** "FF-D (routeman-self-N as second confidence axis) waits for LAYER-2 audit infrastructure (Q4 from frontier-questions). Q4 is itself open. Is FF-D a deferred-into-vapor dependency? When could it ever revive?"

**Failure-case scenario:**

- **P-CASE-1 (the LOW-flat-signal pathology):** "Concrete scenario: project at L0, N=5 inquiries per discipline (mid-pre-maturity). Routeman emits FRONTIER routes with confidence=LOW (E5 fallback). Human Selector reads 'LOW' on every route. After 10 emissions, the human notices 'LOW' is meaningless and starts ignoring it. The label has trained the consumer to ignore it. When per-discipline-N source ships and labels start varying, the consumer has already learned to ignore the field. CONSUMER-TRAINING failure mode."

- **P-CASE-2 (REVISIT at N=3 brittleness):** "Concrete scenario: project completes 3rd cycle. REVISIT becomes available. But 3 cycles is genuinely thin for cross-cycle pattern detection. Routeman emits a REVISIT.RESURRECT route based on weak cross-cycle signal. Human Selector accepts (assumes routeman's judgment is calibrated). The RESURRECT route runs but the resurrection target wasn't actually worth resurrecting. Now the user has wasted a cycle on noise. The ≥3 threshold is too low."

#### Defense

**D-D7 defense:** "The natural-availability filter is NOT gating because REVISIT is STRUCTURALLY UNDEFINED at 0 prior cycles. RESURRECT/INVALIDATE/REVERT operate on prior-cycle objects; with no prior cycles, the operation has no operand. Gating is denying emission for POLICY reasons (e.g., 'we don't trust LOW-confidence routes'); natural-availability is denying emission for STRUCTURAL reasons (the type's operands don't exist). The distinction is real, not rhetorical."

**D-D13 defense:** "E5 LOW-fallback IS graceful degradation. LOW is interpretable as 'pre-maturity; treat with appropriate caution.' Downstream consumers (human Selector now; system Selector at L2+; Baldwin at maturity) can read this signal. The signal isn't FLAT in semantics — it's FLAT in VARIANCE; the meaning ('pre-maturity caution') is consistent and interpretable. When the per-discipline-N source ships, variance returns. The fallback is a feature, not a bug."

**D-D6 defense:** "Per-route-type-split honors a STRUCTURAL FACT (12-auto/4-judgment partition explicit in design memo; Progression/Coordination family-split explicit in 24-01-30). The asymmetry is OBSERVABLE in the type taxonomy, not theoretical. Collapsing it would LOSE information present in the upstream commitments. 2 rules vs 1 is a small complexity tax for honoring structural facts."

**D-D8 defense:** "The pollution-framing test is the inquiry's central reframing contribution. The MEDIUM confidence on overstated-permanently is HONEST — we can't know what Baldwin's spec will commit. FF-B (Baldwin-spec coordination) IS the revival trigger when Baldwin ships. The defensive labeling is structurally CHEAP (zero-cost; field already exists per design memo). The policy honors both possibilities: framing is currently overstated AND labels protect if framing turns out to be right."

**D-D5 defense:** "If Baldwin's spec ships and commits routeman-emission consumption with a confidence-filter, FF-A (per-discipline-N source decision) becomes time-critical and SKILL.md updates accordingly. The defensive labeling is the FORWARD-COMPAT investment; Baldwin's spec drives the source-decision urgency. This is exactly the intended trigger-pattern."

**D-USER-1 defense:** "The 15-option table provides per-option pros, cons, verdict, and reason for each row. The Pros/Cons columns are appropriate length for structural critique of each option; longer columns would not add information. The verdict + reason columns are where depth lives. Inspection of the table shows depth (e.g., Option 2's reason cites 'Identity-violating; pollution risk currently overstated per desc.md' which is the inquiry's load-bearing reasoning)."

**D-USER-2 defense:** "The consumer-utility question for FRONTIER's LOW-emission at L0 IS addressed implicitly via the downstream-decides pattern: human Selector at L0 reads confidence + filters by judgment; the LOW label informs the judgment context (telling the human 'this is pre-maturity'). The label adds INTERPRETATION CONTEXT even when constant. The deeper consumer-utility question is genuinely an FF (could be FF-G: per-consumer label utility audit at calibration maturity)."

**D-SPEC-1 defense:** "The deferral is honest because the choice between (a) persistence model's per-Route status (concrete; per 24-00) and (b) inquiry-folder scan count (concrete; tractable) is a SKILL.md-authoring-time decision, not a policy-memo decision. Both candidates are operational. The policy MEMO doesn't need to pick; the SKILL.md AUTHOR does."

**D-SPEC-2 defense:** "FF-D's revival trigger is 'when LAYER-2 audit infrastructure (Q4) ships'. Q4 is itself a frontier question with a candidate path. The chain isn't vapor — it's a transitive dependency on Q4. If Q4 dies, FF-D dies; that's normal frontier-question dynamics."

**D-CASE-1 defense:** "The consumer-training pathology is real but mitigated by: (a) human Selector at L0 reads each route individually and triages contextually (not in bulk-with-pattern-matching); (b) when per-discipline-N source ships and labels vary, that's a noticeable CHANGE in field semantics that warns the consumer to re-attend. The risk exists but is bounded by the consumer's contextual reading."

**D-CASE-2 defense:** "The ≥3 threshold is FIRST-SHIP DEFAULT and CALIBRATABLE per FF-E. The brittleness at N=3 is exactly what FF-E exists to monitor and recalibrate. The policy doesn't commit ≥3 as permanent; it commits ≥3 as testable starting heuristic with a revival trigger."

#### Collision

| Prosecution → Defense | Verdict |
|---|---|
| P-D7 (gating-in-disguise) ↔ D-D7 (structural vs policy distinction) | **DEFENSE SURVIVES** — the structural-vs-policy distinction is genuine. Mechanism-honesty IS different from policy-gating; the inquiry articulates this explicitly. |
| P-D13 (LOW-flat-signal) ↔ D-D13 (graceful degradation) | **DEFENSE PARTIALLY SURVIVES** — LOW-flat IS a real concern; D-D13's "FLAT in variance, consistent in meaning" is honest but the pathological case (P-CASE-1 consumer-training) is real. **REFINE direction:** acknowledge LOW-flat as a known limitation; specify what consumers should do at first ship to avoid consumer-training failure. |
| P-D6 (complexity vs asymmetry) ↔ D-D6 (structural fact) | **DEFENSE SURVIVES** — asymmetry is observable in upstream priors; honoring it is principled. |
| P-D8 (50% uncertainty on permanence) ↔ D-D8 (defensive cheap insurance + FF-B) | **DEFENSE SURVIVES** — FF-B IS the revival trigger; defensive labeling at zero cost is rational under MEDIUM uncertainty. |
| P-D5 (Baldwin shipping mismatch) ↔ D-D5 (FF-A becomes time-critical) | **DEFENSE PARTIALLY SURVIVES** — the trigger pattern is correct but there's a sequencing risk if Baldwin ships before FF-A is settled. **REFINE direction:** add explicit "if Baldwin ships before FF-A: prioritize FF-A in SKILL.md authoring updates" to FF-B. |
| P-USER-1 (table depth) ↔ D-USER-1 (per-row depth via verdict+reason) | **DEFENSE SURVIVES** — table provides per-row reasoning. |
| P-USER-2 (consumer-utility depth) ↔ D-USER-2 (interpretation context + new FF-G) | **DEFENSE PARTIALLY SURVIVES** — the implicit answer is reasonable; the explicit answer is missing. **REFINE direction:** add an FF for per-consumer label utility audit (FF-G) and a brief note in the finding about why LOW-at-L0 still informs human triage. |
| P-SPEC-1 (operational gap) ↔ D-SPEC-1 (SKILL.md-author-time decision) | **DEFENSE SURVIVES** — both candidate sources are concrete; deferral is honest. |
| P-SPEC-2 (FF-D vapor) ↔ D-SPEC-2 (transitive on Q4) | **DEFENSE SURVIVES** — frontier-chain dynamics are acceptable. |
| P-CASE-1 (consumer-training) ↔ D-CASE-1 (bounded by contextual reading) | **DEFENSE PARTIALLY SURVIVES** — risk is real but bounded. Same REFINE direction as P-D13. |
| P-CASE-2 (REVISIT N=3 brittleness) ↔ D-CASE-2 (FF-E recalibration) | **DEFENSE SURVIVES** — FF-E exists explicitly for this. |

#### Position on landscape

C-A sits in the **VIABLE region** with **two boundary touches** that REFINE addresses:
1. LOW-flat signal at first ship (P-D13 + P-CASE-1 + P-USER-2 cluster).
2. Baldwin-shipping sequencing if Baldwin ships before FF-A (P-D5).

**Verdict: SURVIVE-WITH-REFINE.** The assembled policy is genuinely viable but needs 3 surgical additions to address the surviving prosecution residuals.

---

### Candidate C-B: P4-G — the 15-option pros/cons table (deliverable format)

**Description:** Single table with columns Option / Description / Pros / Cons / Verdict / Reason.

#### Prosecution

- **P-Format-1:** "Some Pros columns are one-clause shorthand ('Simplest; preserves enumerate-all'). Did each row get genuine pros/cons depth? Or are some perfunctory?"
- **P-Format-2:** "Option 11 ('No-special-treatment + downstream-discovers') has Pros='Most minimal' / Cons='Loses maturity signal'; this is very thin. Is Option 11 a real option or a placeholder?"
- **P-Coverage:** "15 options is comprehensive but did surfacing miss any? E.g., 'INVERT: routeman gates everything except FRONTIER + REVISIT' (the reverse policy)? Or 'GATE-only-REVISIT-at-N<3, always-emit-FRONTIER' (a partial gating not collapsed into Option 13)?"

#### Defense

- **D-Format-1:** "Per-row depth lives in Verdict + Reason columns; Pros/Cons are summaries. The table's job is comparative; each cell's load-bearing claim is its verdict-with-reason."
- **D-Format-2:** "Option 11 IS a real option (always-emit-without-labels-with-consumer-discovery) — it's the consumer-side-learning variant of Option 1. The thinness IS the right verdict-shape: REJECT for losing the load-bearing maturity signal."
- **D-Coverage:** "The 'GATE-only-REVISIT-at-N<3' option IS what Option 13's natural-availability filter implements (when REVISIT prior cycles < 3, REVISIT isn't emitted). It's INCORPORATED into Option 13 rather than enumerated separately because the natural-availability filter is structurally different from policy-gating. The 'INVERT' option (gate everything except these 2) violates D7 enumerate-all and would be Option 2 generalized — captured by Option 2's kill verdict."

#### Collision

| Prosecution → Defense | Verdict |
|---|---|
| P-Format-1 ↔ D-Format-1 | DEFENSE SURVIVES — depth is in verdict+reason. |
| P-Format-2 ↔ D-Format-2 | DEFENSE SURVIVES — thinness is the right verdict-shape. |
| P-Coverage ↔ D-Coverage | DEFENSE SURVIVES — surfacing-coverage hypothesis-test: the two candidate "missed" options are either incorporated (GATE-only-REVISIT) or covered by an existing kill (INVERT generalizes Option 2). |

**Verdict: SURVIVE.** The 15-option table satisfies the user's explicit deliverable ask.

---

### Candidate C-C: P6-G — Inherited Commitments Re-test verdict table

**Description:** 11-row table with prior / commitment / verdict (PRESERVED / RESOLVED-WITH-DESIGN / etc.) / reason+impact columns.

#### Prosecution

- **P-Re-test-1:** "Are all 11 priors actually re-tested with CITED EVIDENCE, or are some merely RECORDED as inherited? Per CONCLUDE's enforcement, the re-test must cite evidence OR explicitly flag as inherited-without-re-test."
- **P-Re-test-2:** "The desc.md row's verdict is 'PRESERVED + TESTED-AND-FOUND-PROTECTIVE' — what specifically was tested? Was the test methodology load-bearing?"

#### Defense

- **D-Re-test-1:** "Each verdict cites the mechanism (e.g., 'PRESERVED + USED' identifies HOW the prior is used; 'INHERITED' identifies deferred sub-decisions). The reason+impact column provides citation context (e.g., 'D1 scheme uses existing field'). The verdicts ARE evidence-cited at the structural level."
- **D-Re-test-2:** "The desc.md test was the pollution-framing test in Sensemaking: direct read of desc.md's seed-source language ('hunch-pattern seeds ... /intuit Phase β+ hunches calibrated against Retrospective RC delta'); finding: routeman emissions are NOT named as a Baldwin seed source. This IS the load-bearing test. The verdict 'TESTED-AND-FOUND-PROTECTIVE' captures: the framing was tested + found currently overstated + defensive labeling preserves protection."

#### Collision

| Prosecution → Defense | Verdict |
|---|---|
| P-Re-test-1 ↔ D-Re-test-1 | DEFENSE PARTIALLY SURVIVES — verdicts cite mechanism; finding may need an EXPLICIT note that the verbatim test happened in Sensemaking (and is grounded by direct quote). **REFINE direction:** in the finding, add a one-line "test methodology" note explaining how each non-PRESERVED-VERBATIM verdict was arrived at. |
| P-Re-test-2 ↔ D-Re-test-2 | DEFENSE SURVIVES. |

**Verdict: SURVIVE-WITH-REFINE.** Add a brief test-methodology note in the finding.

---

### Candidate C-D: P5-G — FF list (6 follow-ups)

**Description:** 6 FFs (FF-A through FF-F) with scope / consumer / revival trigger.

#### Prosecution

- **P-FF-1:** "Are revival triggers OBSERVABLE? Vague triggers ('when practice surfaces X') may never fire."
- **P-FF-2:** "FF-B (Baldwin-spec coordination) waits for Baldwin's spec to ship; Baldwin's spec waits for project to approach N=30; current state is L0 / N small. FF-B might wait years."
- **P-FF-3:** "FF-F (generalization to other calibration-sensitive types) is labeled 'research frontier' — is that a real disposition or a way to defer indefinitely?"

#### Defense

- **D-FF-1:** "Each FF has a stated revival trigger. FF-A: 'when SKILL.md authoring begins' (definite event); FF-B: 'when Baldwin's spec is being written' (definite event); FF-C/E/F: 'observable — when practice surfaces X' (observable triggers; revival depends on practice). The triggers are appropriately specific."
- **D-FF-2:** "FF-B waiting years IS appropriate — the inquiry's contribution to Baldwin coordination is the defensive labeling NOW; the spec-write inquiry consumes it later. The waiting is structural, not lazy."
- **D-FF-3:** "FF-F as research frontier is honest: the question 'are other types calibration-sensitive?' requires empirical practice data to answer, and the inquiry's scope was 2 specific types. Labeling as research frontier signals that this is open-ended, not a deferred-with-deadline."

#### Collision

| Prosecution → Defense | Verdict |
|---|---|
| P-FF-1 ↔ D-FF-1 | DEFENSE SURVIVES — triggers are appropriately specific. |
| P-FF-2 ↔ D-FF-2 | DEFENSE SURVIVES — long waiting is structurally appropriate. |
| P-FF-3 ↔ D-FF-3 | DEFENSE SURVIVES — research frontier is honest disposition. |

**Verdict: SURVIVE.** Adding FF-G (per-consumer label utility audit) per P-USER-2 collision result would extend to 7 FFs.

---

### Candidates C-K1 through C-K3: Killed Options (verify the kills hold)

#### C-K1 — Option 1 (Always-emit without labels)

**Prosecution:** "Simplest; preserves enumerate-all most strongly. Why kill?"
**Defense:** "Loses the maturity-aware signal. The confidence field already exists; using it is zero-cost. Not using it is leaving free information on the floor. Defensive labeling future-proofs against pollution-framing-test outcomes."
**Collision:** PROSECUTION WEAK; DEFENSE STRONG. Kill verdict holds.
**Constructive seed:** the simplicity intuition is right — Option 13 should ship at minimum spec footprint. SKILL.md author should keep the per-route-type rules tight.

#### C-K2 — Option 2 (Gate-until-maturity)

**Prosecution:** "Strongest pollution prevention. If framing is overstated, doesn't matter — extra safety is cheap."
**Defense:** "Violates enumerate-all identity (D7 CRITICAL). Gating an entire movement type for policy reasons fails the identity test. Identity is load-bearing because routeman's value-add is exhaustive enumeration; gating produces an incomplete enumeration."
**Collision:** DEFENSE DOMINATES. Kill verdict holds.
**Constructive seed:** the safety intuition is preserved via defensive labeling, NOT gating. Labels protect; gating destroys.

#### C-K3 — Option 8 (Snapshot-and-replay)

**Prosecution:** "Auditable; preserves enumeration; quarantine catches anything labels miss."
**Defense:** "Quarantine infrastructure cost (where does the quarantine live? who reviews? when?) is high for an unverified pollution risk. Quarantine adds 2 features (storage + review process) for a problem that defensive labeling addresses for zero cost."
**Collision:** DEFENSE DOMINATES (cost-benefit). Kill verdict holds.
**Constructive seed:** the auditability intuition is real — defensive labels ARE auditable (downstream consumers can audit by reading labels). Quarantine is the heavy mechanism; labels are the light one.

---

### Candidates C-K4 / C-K5: Killed Innovation alternatives

#### C-K4 — P1-C (REORGANIZE / DO-NOTHING / REPAIR alternatives for P1)

**Prosecution / Defense / Collision:** Innovation already conducted (REORGANIZE scatters policy; DO-NOTHING re-runs work; REPAIR conflates layers). All verdicts confirmed.
**Verdict:** KILL holds. Seeds: cleanly-separated policy section + don't conflate layers.

#### C-K5 — P3-C (routeman-decides via Baldwin spec)

**Prosecution / Defense / Collision:** Innovation already conducted (couples routeman to non-existent Baldwin spec; violates downstream-decides). 
**Verdict:** REJECT holds. Seeds: downstream-decides preserves modularity.

---

## Phase 3 — Verdict + Constructive Output

### Verdict summary

| Candidate | Verdict | Constructive output |
|---|---|---|
| **C-A Assembled Policy** | **SURVIVE-WITH-REFINE** | Add 3 surgical additions to finding (see below) |
| **C-B 15-option table** | SURVIVE | No changes needed |
| **C-C Re-test verdict table** | SURVIVE-WITH-REFINE | Add brief test-methodology note |
| **C-D FF list** | SURVIVE | Add FF-G per P-USER-2 collision result (→ 7 FFs) |
| C-K1 Option 1 | KILL holds | Simplicity preserved via Option 13's tight spec |
| C-K2 Option 2 | KILL holds | Safety preserved via defensive labeling not gating |
| C-K3 Option 8 | KILL holds | Auditability preserved via labels not quarantine |
| C-K4 P1-C alternatives | KILL holds | Clean policy section + no layer-conflation |
| C-K5 P3-C routeman-decides | REJECT holds | Downstream-decides preserves modularity |

### Constructive REFINE directives for the finding

**REFINE-1 (P-D13 + P-CASE-1 + P-USER-2 cluster — LOW-flat signal at first ship):**

Add a brief subsection to the finding (in the Policy Mechanism + Confidence Labeling part, OR as a standalone "First-Ship Operational Note") that:

(a) Explicitly acknowledges: at first ship under E5 fallback, ALL FRONTIER/REVISIT emissions carry confidence=LOW. The variance in the D1 scheme is dormant until per-discipline-N source ships.

(b) Specifies what consumers should do at first ship to avoid consumer-training pathology: human Selector at L0 reads LOW as "this is pre-maturity; treat with appropriate caution" — the label adds interpretation CONTEXT even when constant. When the source ships and labels start varying, consumers should re-attend to the field's variance.

(c) Adds FF-G: per-consumer label utility audit at calibration maturity — when N approaches 30, verify that label-variance is actually informing consumer decisions (not being silently ignored).

**REFINE-2 (P-D5 cluster — Baldwin-shipping sequencing risk):**

Extend FF-B's revival trigger to include sequencing: "Baldwin's spec coordination — when Baldwin's spec is being written. IF Baldwin's spec ships BEFORE FF-A (per-discipline-N source) is settled, prioritize FF-A immediately so labels can vary in time for Baldwin's filter."

**REFINE-3 (P-Re-test-1 — test-methodology note):**

In the finding's `## Inherited Commitments Re-test` section, add a brief one-line "test methodology" note explaining that non-PRESERVED-VERBATIM verdicts (e.g., 'TESTED-AND-FOUND-PROTECTIVE' for desc.md) were arrived at via direct read of the source artifact during Sensemaking, with the load-bearing quote captured in the Sensemaking output's KI1.

---

## Phase 3.5 — Assembly Check

### Assembly examination

Surviving candidates:
- C-A (assembled policy)
- C-B (15-option table)
- C-C (re-test verdict table)
- C-D (FF list + new FF-G)

These are all already designed as components of a single finding. No emergent assembly beyond what Innovation already specified.

**However,** the REFINE directives REFINE-1 and the new FF-G surface an ASSEMBLY INSIGHT:

**Emergent insight (assembly-level):** The policy's value at first ship is structurally divided into two epochs:

1. **First-ship epoch (E5-fallback active):** policy's value is (a) the DEFENSIVE LABELING infrastructure (labels exist, even if flat), (b) the EXPLICIT IDENTITY PRESERVATION (no gating-options accepted), (c) the PER-ROUTE-TYPE-SPLIT RULES IN SKILL.md. The maturity-variance signal is dormant.

2. **Post-source epoch (FF-A settled):** policy's value compounds — labels start varying meaningfully + downstream consumers can use variance + FF-G's utility audit becomes operable.

This two-epoch structure is implicit in the policy but not explicitly framed. Surfacing this in the finding (per REFINE-1) makes the first-ship value proposition honest and the source-ship transition observable.

**No new candidate emerges from assembly,** but the framing of the policy's value-in-two-epochs is a constructive emergent insight that the finding should surface.

---

## Phase 4 — Coverage + Convergence Assessment

### Accumulator update

| Field | Value |
|---|---|
| Evaluations | 14 candidates (Innovation) + 9 critique-level candidates (4 SURVIVE/REFINE + 5 KILL/REJECT verifications) |
| Kills | 5 (Options 1, 2, 8; P1-C alternatives; P3-C) — all confirmed by critique |
| Refines | 3 directives for the assembled policy (REFINE-1/2/3) + 1 new FF-G |
| Coverage map | Viable region: Option 13 hybrid + surroundings. Dead region: gating + over-coupling + L0-infeasible. Boundary region: LOW-flat-signal + Baldwin-sequencing residuals (now addressed by REFINEs). Unexplored regions topologically unlikely to contain viable candidates. |

### Coverage assessment

**Per-candidate coverage:** Each critique-level candidate (C-A/B/C/D + K1-K5) received prosecution + defense + collision. C-A received multi-axis prosecution depth (dimension + user-perspective + specification-gap + failure-case scenario). **PASS.**

**Per-solution-space coverage:** All 15 surfaced options received critique-level treatment (either via Innovation's table or via direct kill-verification). The 2 unexplored hybrids surfaced in Phase 1 (Option 3+8; Option 13+Option 5) were topologically excluded as sub-viable. **PASS.**

### Convergence assessment

- **At least one SURVIVE with no critical-dimension caveats:** C-A SURVIVE-WITH-REFINE; REFINE addresses boundary touches on D13 (Phase-fit) and one MED-weight aspect of D5 (Robustness). After REFINE, no CRITICAL-dimension caveats remain. **YES.**
- **Two consecutive iterations without new regions:** This is iteration 1. The next iteration would only test the REFINE-applied finding. The REFINE additions are surgical (not structural), so iteration 2 would likely return SURVIVE. **YES (anticipated).**
- **No unexplored regions topologically likely to contain viable candidates:** Confirmed in Phase 1. **YES.**
- **Decreasing rate of new information:** Innovation produced 14 candidates; critique produced 3 new REFINEs + 1 new FF (FF-G) + 1 emergent-insight (two-epoch framing). The rate is meaningful but converging on refinement rather than restructuring. **YES.**

### Signal

**TERMINATE** with C-A as the primary survivor, refined per REFINE-1/2/3 + FF-G + two-epoch framing.

**Ranked survivors:**

1. **C-A (Assembled Policy) — Option 13 hybrid + surrounding commitments** with REFINE-1/2/3 applied — the recommended finding.
2. **C-B (15-option table)** — the user's explicit deliverable.
3. **C-C (Re-test verdict table)** — augmented with test-methodology note (REFINE-3).
4. **C-D (FF list)** — extended to 7 FFs (adding FF-G).

---

## Final Deliverable Summary

### (a) Dimensions with weights

13 dimensions: 6 default (D1-D6) + 7 project-specific (D7-D13). Critical weights: D1 (Correctness), D7 (Enumerate-all-identity preservation). High weights: D2/D4/D5/D8/D9/D13.

### (b) Fitness landscape

- **Viable region:** Option 13 hybrid + confidence-labeling-via-existing-field + per-route-type-split + natural-availability filter for REVISIT (structurally-grounded, not policy-gating) + defensive labeling + downstream-decides.
- **Dead region:** Gating-based options (D7 fail); over-coupling to non-existent specs (D11 fail); L0-infeasible candidates (D13 fail); layer-conflation candidates (D12 fail).
- **Boundary region:** LOW-flat-signal at first ship + Baldwin-shipping sequencing risk — both addressed by REFINEs.
- **Unexplored region:** Two unexplored hybrids (Option 3+8; Option 13+5) — topologically sub-viable.

### (c) Candidate verdicts

C-A SURVIVE-WITH-REFINE | C-B SURVIVE | C-C SURVIVE-WITH-REFINE | C-D SURVIVE (with FF-G addition) | C-K1/K2/K3/K4/K5 KILL/REJECT confirmed.

### (d) Coverage map

Per-candidate: full multi-axis prosecution on C-A; dimension+collision on C-B/C/D; verification on kills. Per-solution-space: 15 surfaced options + 2 unexplored-hybrids assessed; topology stable.

### (e) Signal

**TERMINATE.** C-A is the recommended finding shape, with REFINE-1/2/3 + FF-G + two-epoch emergent framing applied. Iteration 2 not warranted.

---

## Convergence Telemetry

| Check | Result |
|---|---|
| **Dimension coverage** | 13 dimensions; all 7 Sensemaking perspectives have corresponding critique dimensions; project-specific risk dimensions (D7-D13) included per the Phase 0 refinement note. PASS. |
| **Adversarial strength** | **STRONG.** C-A received 11 distinct prosecution lines (5 dimension-level + 2 user-perspective + 2 specification-gap + 2 failure-case). 5 partial-survives drove 3 REFINEs + 1 new FF. |
| **Landscape stability** | **STABLE.** No new regions surfaced beyond Phase 1 mapping; REFINEs are intra-region adjustments. |
| **Clean SURVIVE exists** | YES — C-A SURVIVE-WITH-REFINE; after REFINE, no critical-dimension caveats. |
| **Failure modes observed** | None of the 7. (Wrong dimensions: validated against perspectives. Rubber-stamping: 11 prosecution lines on C-A. Nitpicking: defenses constructed for every prosecution; severity-weighted. Dimension blindness: cross-checked against perspectives. False convergence: convergence criteria met substantively. Evaluation drift: dimensions fixed in Phase 0. Self-reference collapse: critique evaluated the discipline's output, not itself.) |
| **Output** | **PROCEED.** |

---

## Handoff to CONCLUDE

CONCLUDE assembles the finding by:

1. Adopting C-A as the policy with REFINE-1/2/3 applied:
   - REFINE-1: add "First-Ship Operational Note" subsection covering LOW-flat acknowledgment + consumer guidance + FF-G.
   - REFINE-2: extend FF-B with Baldwin-sequencing clause.
   - REFINE-3: add test-methodology note in Inherited Commitments Re-test.
2. Including C-B (15-option table) as the deliverable Section.
3. Including C-C (Re-test verdict table, augmented).
4. Including C-D (FF list, extended to 7).
5. Adding the two-epoch framing as an emergent insight Section.
6. Setting Q10's disposition in the frontier-questions finding to RESOLVED-WITH-DESIGN.
