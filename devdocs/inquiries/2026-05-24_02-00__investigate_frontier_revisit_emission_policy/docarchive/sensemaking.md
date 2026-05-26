# Sensemaking — investigate_frontier_revisit emission policy

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/_branch.md`

---

## SV1 — Baseline Understanding (pre-analysis)

The inquiry is choosing among 15 candidate policies for routeman's pre-maturity emission of INVESTIGATE FRONTIER and REVISIT. Naive framing: source-question suggests confidence-graduated as default; surfacing surfaced 14 alternatives.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** — Routeman's "enumerate all possible next moves" identity (design memo). Gating ANY movement type without strong reason violates the identity test.
- **C2** — PROCESS layer primary; the question is about routeman's runtime emission decision.
- **C3** — Per-route-type asymmetry must be addressed: INVESTIGATE FRONTIER (Progression / auto-class) vs REVISIT (Coordination / judgment-class). Different families, different autonomy classes.
- **C4** — Per-route confidence field already exists in routeman's schema (design memo Feature "Assess priority and confidence per move"). Confidence-labeling is mechanism-cheap.
- **C5** — User explicitly asked for EXHAUSTIVE options + pros/cons (already addressed in Surfacing's 15-option enumeration); the deliverable must commit a recommendation while preserving the alternatives.
- **C6** — Synthesis Trigger active; priors re-tested.
- **C7** — Pollution framing assumption (Q10's premise that routeman emissions "pollute" Baldwin's seed quality) needs testing — desc.md says Baldwin's seed source is /intuit hunches + Retrospective RC delta, NOT routeman directly.

### Key Insights

- **KI1** — **The pollution framing IS currently overstated.** Per direct read of `docs/desc.md`: "Baldwin seeds never bypass the SIC loop. Hunch-pattern seeds produce inquiry PROPOSALS that enter the normal E → S → D → I → C cycle. ... Seed-generation activates only after calibration maturity (N ≥ 30 per discipline)." The seed source named is **hunch patterns from /intuit Phase β+ calibrated against Retrospective RC delta** — NOT routeman emissions. The pollution risk assumes routeman → Baldwin direct consumption, which desc.md does NOT specify. Until Baldwin's spec ships and commits its actual seed source, the pollution framing is unverified.

- **KI2** — **Per-route-type asymmetry is structural, not stylistic.** INVESTIGATE FRONTIER is auto-class in the design memo's 12-auto/4-judgment partition + Progression Moves family per 24-01-30 categorization. REVISIT is judgment-class + Coordination Moves family. Different families, different autonomy classes — the two types may legitimately use different policies.

- **KI3** — **REVISIT's gating cost is naturally low; FRONTIER's is high.** REVISIT requires prior cycles to operate (cross-cycle pattern); gating REVISIT at very low N matches natural availability (there isn't enough cross-cycle data to REVISIT meaningfully at N<5-10). FRONTIER is useful from N=1 onward as an exploration tool; gating FRONTIER costs the project's primary bootstrap exploration mechanism.

- **KI4** — **Routeman's enumerate-all identity rejects all gating-based options.** Option 2 (gate-until-maturity) and full-gating variants fail the identity test. Only LABELING-BASED options (Option 3 confidence-graduated, Option 10 downstream-decides-via-metadata) + ADAPTIVE-RATE (Option 6) + SNAPSHOT-REPLAY (Option 8) + HYBRID variants (Options 13, 14) survive.

- **KI5** — **Confidence field exists; using it is mechanism-cheap.** Confidence-graduated emission (Option 3) leverages existing schema; no new infrastructure needed.

- **KI6** — **Pre-maturity safeguard at L0-L1 is HUMAN TRIAGE.** Per autonomy_ladder.md, current project state is L0; the human is the Selector. The human filters routeman's emissions naturally. The "pollution" concern is forward-looking (L3+ system-Selector OR Baldwin activation); pre-maturity, human-filtering is the natural safeguard.

- **KI7** — **Routeman's OWN taste is a second uncertainty axis** distinct from per-discipline N. Per-discipline N tracks the discipline being routed-about; routeman-self-N tracks routeman's own enumeration calibration. Both are relevant but routeman-self-N requires LAYER-2 audit infrastructure (Q4) that's deferred.

- **KI8** — **Per-discipline-N source is unspecified infrastructure.** Per-discipline-aware policies (Options 4, 7) require this source. Candidates: E1 (`_meta_state.md` extension), E2 (new `docs/discipline_calibration.md`), E3 (inquiry-folder count heuristic). If source is deferred, policy at first ship uses a fallback (LOW confidence always until source ships).

### Structural Points

- **SP1** — Pollution framing tests as PROBABLY OVERSTATED. Defensive confidence-labeling future-proofs if Baldwin's spec changes; costs nothing if pollution risk doesn't materialize.
- **SP2** — Per-route-type-split (Option 4 in some form) is structurally warranted given KI2 + KI3.
- **SP3** — Confidence-graduated emission (Option 3) is the mechanism-cheap default; aligns with source-question's suggested default.
- **SP4** — Downstream-decides-via-metadata (Option 10) is complementary — routeman emits with metadata; each consumer decides filtering.
- **SP5** — Hybrid Option 13 (Option 3 + Option 4 per-route-type-split) honors both confidence-grading and per-route-type asymmetry.
- **SP6** — Per-discipline-N source is deferred to SKILL.md authoring (Option E5); policy at first ship can fall back to ROUTEMAN-SELF-LOW or "confidence always LOW until source decided" — graceful degradation.
- **SP7** — REVISIT has a NATURAL availability filter (cross-cycle pattern requires ≥N prior cycles); gating REVISIT at very low N matches natural availability, NOT identity-violating gating.

### Foundational Principles

- **FP1** — Don't reinvent — confidence field exists; use it.
- **FP2** — Enumerate-all (routeman's identity) — preserve. Gating violates.
- **FP3** — Test framing assumptions — pollution framing should be tested, not accepted.
- **FP4** — Per-consumer filtering at the consumer layer — routeman labels; consumers decide.

### Meaning-Nodes

- **MN1** — **Emission policy as METADATA-LABELING, not GATING** (the central insight that respects identity).
- **MN2** — **Per-route-type asymmetry honoring structural differences** (FRONTIER ≠ REVISIT).
- **MN3** — **Pollution-framing-as-testable-hypothesis** (not accepted assumption).
- **MN4** — **Confidence-as-existing-field** (no new infrastructure).
- **MN5** — **Downstream-decides-by-metadata** (delegation pattern).
- **MN6** — **Natural-availability filter for REVISIT** (≥N prior cycles needed; isn't identity-violating gating).

### Meta-Inspection — H4 + H5

- **H4 — concept names.** "Metadata-labeling vs gating", "per-route-type asymmetry", "pollution-framing test", "natural-availability filter". All structurally grounded. User-language check: the user's "options" framing accommodates the policy-axis vocabulary; "confidence" is design-memo's term. **PASS.**
- **H5 — motivating examples.** The source-question's pollution framing is the motivating concern that KI1 tests and finds overstated. The 3-options-default (always-emit / gate / confidence-graduated) is the example set Surfacing expanded to 15. **PASS.**

### SV2 — Anchor-Informed Understanding

The inquiry's central insight collapses the 15 options dramatically: (1) gating-based options fail enumerate-all identity (eliminates Option 2 and variants); (2) the pollution framing is currently overstated per desc.md (reduces urgency of pollution-prevention-only policies); (3) per-route-type asymmetry is structurally significant (eliminates undifferentiated single-policy options); (4) confidence field already exists (favors confidence-graduated mechanism-cheap options); (5) human triage at L0-L1 is the natural pre-maturity safeguard (reduces need for routeman-side gating). Likely recommendation: Option 13 hybrid (confidence-graduated + per-route-type-split), with per-discipline-N source deferred.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **P-TECH-1** — Option 3 (confidence-graduated) uses existing field; minimal SKILL.md surface.
- **P-TECH-2** — Option 4 (per-route-type-split) requires 2 per-type rules in SKILL.md. Tractable.
- **P-TECH-3** — Per-discipline-N source missing → fallback to LOW-confidence default; policy still works.
- **P-TECH-4** — Option 8 (snapshot-and-replay) adds quarantine infrastructure; cost too high for a pollution risk that may not materialize.
- **P-TECH-5** — REVISIT's natural-availability filter (≥N prior cycles) is implementable from the persistence model's per-Route status (per 24-00) — count cycles routeman has scanned; if <N, don't emit REVISIT routes.

### Human / User

- **P-HUMAN-1** — User wants exhaustive options + pros/cons (delivered in Surfacing's enumeration + tabular form in the finding).
- **P-HUMAN-2** — User's framing presupposed pollution as concern; the pollution-framing test (KI1) finds the framing overstated. This may surprise the user; the inquiry's deliverable should explicitly acknowledge "you assumed pollution; we tested it and the assumption isn't currently validated by desc.md."
- **P-HUMAN-3** — Human selectors at L0-L1 are the natural pre-maturity safeguard; the recommendation should make this explicit so the user sees the cost-benefit clearly (gating costs enumeration; pollution risk is unverified; human-triage handles the residual risk).

### Strategic / Long-term

- **P-STRAT-1** — Project trajectory toward multi-head + Baldwin requires forward-compatible policy. Confidence labeling is forward-compatible (Baldwin can interpret when shipped).
- **P-STRAT-2** — When Baldwin's spec ships and commits its seed source, the pollution risk is verifiable. Defensive labeling protects against that future-shipping case without immediate cost.

### Risk / Failure

- **R1** — Pollution framing accepted without testing (J5 from surfacing). Mitigation: explicit testing in this inquiry; KI1 + Ambiguity 1 below.
- **R2** — Per-discipline-N source missing prevents per-discipline-aware policies. Mitigation: defer source decision; first-ship policy uses no-per-discipline-N fallback (LOW confidence default).
- **R3** — Confidence-label drift. Mitigation: confidence values calibrated by LAYER-2 audit (when ships; Q4 open).
- **R4** — Stale routes at maturity (J3). Mitigation: persistence model's recalibration (24-00) handles cross-invocation update.

### Resource / Feasibility

- **P-RES-1** — Policy as 2-3 SKILL.md rules. Tractable.

### Definitional / Internal Consistency

- "Emission policy" must not contradict routeman's enumerate-all identity. Surviving options preserve enumeration.
- Confidence label values must have CONSISTENT MEANING. LOW pre-maturity must mean something interpretable to downstream consumers.
- Natural-availability filter for REVISIT (≥N prior cycles) is NOT identity-violating gating; it's mechanism-honest (REVISIT operates on prior cycles; if none exist, REVISIT is undefined). This needs to be articulated as "natural availability filter" not "gating."

### Definitional / Frame-exit Completeness

**Gating predicate.** Inquiry inherits multi-value term "emission policy" across 15 candidate values (the surfaced options). Distinct propositions per option. **Gate fires.**

1. **Existence Enumeration.** What does "emission policy" refer to project-wide?
   - **TYPE axis:** routeman's policy (this inquiry); other disciplines' emission policies (e.g., /critique's verdict-emission; /sense-making's anchor-extraction). Other disciplines' policies are out of scope but acknowledged as adjacent.
   - **LAYER axis:** routeman runtime policy (this inquiry's PROCESS focus); SKILL.md spec policy (downstream STRUCTURAL); meta-level cross-discipline emission convention.
   - **PHASE axis:** pre-maturity (this inquiry's focus); approaching-maturity (revival trigger); post-maturity (Baldwin-active).
   - **AGENT axis:** routeman (this inquiry); Baldwin (downstream; spec pending); /intuit Phase β+ (downstream; pending); human Selector (current); system Selector (future, L2+).

2. **Role Assessment.**
   - Other disciplines' emission policies — out of scope. Routeman is the load-bearing case here.
   - Baldwin's consumption policy — DOWNSTREAM; not designed here. The pollution framing test (KI1) hinges on what Baldwin's spec commits when it ships.
   - System Selector filtering at L2+ — downstream; not designed here. Routeman's confidence labels are inputs to system Selector's filtering when it ships.

3. **Verdict Rigor.** "Pollution framing is currently overstated" — strongest counter: maybe Baldwin's spec WILL commit consumption of routeman when shipped; the framing is forward-looking. Test: per desc.md's actual text, Baldwin's seed source is "hunch-pattern seeds" (i.e., /intuit Phase β+ hunches calibrated against Retrospective RC delta). Routeman emissions are NOT named as a Baldwin seed source. Until Baldwin's spec when shipped commits routeman-consumption, the framing is overstated. The counter (Baldwin spec MIGHT commit routeman-consumption) is real but unverifiable now. Defensive labeling addresses both possibilities. **HIGH confidence on overstated-now; MEDIUM confidence on overstated-permanently.**

4. **Residual.** Routeman-self-N as second uncertainty axis (KI7) — captured as Ambiguity 6 below.

### Phase / Calibration-State perspective

Phase-dependent rules: pre-maturity vs approaching-maturity vs post-maturity. Calibration check: project is currently pre-maturity (N<30 per discipline; current L0). Policy at first ship must handle THIS state.

### Meta-Inspection — H1 + H2 + H3 + H7

- **H1 — candidate set.** 15 options surfaced. Cross-Candidate Unity check: Options 1 + 11 collapse (always-emit without labels); Options 4, 7, 13, 15 are per-route-type-split variants; Options 3, 14 are confidence-graduated variants. Reduced to ~5 viable archetypes: (a) Option 3 / 14 confidence-graduated; (b) Option 4 / 13 per-route-type-split; (c) Option 8 snapshot-replay; (d) Option 10 downstream-decides-via-metadata; (e) Option 12 defer-entirely.
- **H2 — frame scope.** Frame-exit addressed.
- **H3 — question framing.** Question doesn't bias.
- **H7 — phase/calibration.** Addressed.

### SV3 — Multi-Perspective Understanding

The recommendation crystallizes as **Option 13 (Hybrid: confidence-graduated + per-route-type-split)**, with per-discipline-N source deferred to SKILL.md authoring (E5 fallback to LOW-default-confidence). The pollution framing is tested and found currently overstated per desc.md; defensive labeling future-proofs the policy if Baldwin's spec changes when shipped.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Does the pollution framing hold? Does Baldwin consume routeman emissions?

**Strongest counter-interpretation:** Baldwin's spec hasn't shipped yet; it MAY commit consumption of routeman when shipped. The policy should pre-emptively protect against this possibility.

**Why the counter is partial:** forward-looking pre-emption is reasonable, but per desc.md (verified by direct read), Baldwin's seed source is named as "Predictive RC predictions calibrated against Retrospective RC empirical outcomes" — i.e., /intuit Phase β+ hunches calibrated by retrospective outcomes. Routeman emissions are NOT named as a Baldwin seed source. The pollution framing assumes a consumption relationship desc.md does NOT specify.

**Counter-counter (defense of defensive labeling):** even if Baldwin's spec when shipped commits non-consumption of routeman, defensive confidence-labeling costs nothing (the field already exists per the design memo); if Baldwin's spec changes its seed source to include routeman, labels are already there. The labeling is structurally cheap insurance.

**Confidence:** HIGH that the framing is currently overstated; MEDIUM that we should still ship defensive labeling (forward-proofing).

**Resolution:** Acknowledge the pollution framing as **currently overstated per desc.md** in the finding's reasoning; ship **defensive confidence-labeling** as future-proof insurance.

**What is fixed:** the inquiry's reasoning includes the pollution-framing test as a load-bearing finding; the policy includes confidence-labeling regardless of pollution risk's verification.

**What is no longer allowed:** committing policy on the pollution framing as if it were validated.

---

### Ambiguity 2: Which policy option (1, 3, 4, 7, 8, 9, 10, 13, 14, 12) is the recommendation?

**Strongest counter-interpretation:** Option 3 (confidence-graduated) alone is the source-question's suggested default; simplest; one less commitment.

**Why the counter fails (structural grounds):** Option 3 alone doesn't honor per-route-type asymmetry (KI2 + KI3). INVESTIGATE FRONTIER and REVISIT have different families, autonomy classes, and pre-maturity gating costs. Treating them identically loses structural information.

**Counter-counter (defense of Option 13 hybrid):** Option 13 = Option 3 + Option 4; honors both confidence-grading AND per-route-type asymmetry. The per-route-type-split adds minimal complexity (2 per-type rules in SKILL.md instead of 1 generic rule). Each type gets the policy that matches its structural properties.

**Confidence:** HIGH for Option 13.

**Resolution:** **Option 13 — Hybrid: confidence-graduated emission + per-route-type-split.** Specifically:
- **INVESTIGATE FRONTIER** — emit ALWAYS; per-route confidence label graduated by per-discipline maturity (LOW pre-maturity / MED transitional / HIGH mature; thresholds per Ambiguity 3 + 4).
- **REVISIT** — emit when natural-availability conditions hold (≥N prior cycles exist for the cross-cycle pattern — Ambiguity 7); when emitted, confidence label graduated identically; per-sub-action treatment uniform at first ship (Ambiguity 5).

**What is fixed:** mechanism = Option 13; per-route-type rules differentiated.

**What is no longer allowed:** treating INVESTIGATE FRONTIER and REVISIT under one undifferentiated policy.

---

### Ambiguity 3: Confidence-labeling scheme (D1 / D2 / D3 / D5 / D6)?

**Strongest counter-interpretation:** D2 (continuous gradient = N/30) is most precise.

**Why the counter fails:** continuous values aren't actionable for binary downstream decisions; consumers (humans, system Selector when ships, Baldwin when ships) triage in discrete buckets. D1 (3-level LOW/MED/HIGH) maps to natural decision buckets.

**Counter-counter:** D1 with thresholds 20/30 matches source-question's default; D5 (per-discipline + routeman-self) is more accurate but routeman-self tracking is deferred (Ambiguity 6).

**Confidence:** HIGH for D1.

**Resolution:** **D1 — 3-level scheme (LOW / MED / HIGH) with thresholds N=20 (LOW→MED) and N=30 (MED→HIGH).** Thresholds calibratable at SKILL.md authoring.

**What is fixed:** confidence-label scheme.

---

### Ambiguity 4: Per-discipline-N source (E1-E5)?

**Strongest counter-interpretation:** E1 (`_meta_state.md` extension) is the cleanest source; should commit at first ship.

**Why the counter is partial:** `_meta_state.md` is an L1+ artifact per autonomy_ladder.md — at L0 (current) it doesn't exist yet. The policy must work at L0 too.

**Counter-counter:** E5 (deferred source with FALLBACK = LOW-confidence-default until source decided) is graceful: policy works at L0 with maximum conservatism; when SKILL.md authoring decides the source (likely E1 once `_meta_state.md` ships), the per-discipline-aware values activate.

**Confidence:** HIGH for E5 with LOW-default fallback.

**Resolution:** **E5 — Defer per-discipline-N source to SKILL.md authoring.** First-ship fallback: confidence is LOW for all FRONTIER/REVISIT emissions until source is decided. When source ships, per-discipline-aware confidence values activate.

**What is fixed:** per-discipline-N source is deferred; first-ship fallback specified.

**What is no longer allowed:** committing a specific source (E1/E2/E3/E4) at first ship without SKILL.md authoring's input.

---

### Ambiguity 5: Per-sub-action REVISIT differentiation (Option 5)?

**Strongest counter-interpretation:** 3 sub-actions (RESURRECT/INVALIDATE/REVERT) have different pollution profiles; split per sub-action.

**Why the counter fails (cost-benefit):** per-sub-action complexity exceeds benefit at first ship. The 3 sub-actions are operational refinements of REVISIT (per 24-01-30 categorization's `has_sub_actions: true`); first-ship can treat them uniformly under REVISIT's policy. If practice surfaces asymmetry (e.g., RESURRECT is always-safe while INVALIDATE is high-risk), split later.

**Confidence:** HIGH for uniform treatment at first ship; deferred-with-observable-trigger.

**Resolution:** **REVISIT's sub-actions inherit REVISIT's policy uniformly at first ship.** Per-sub-action split DEFERRED to follow-up if observed asymmetry emerges.

**What is fixed:** uniform REVISIT sub-action policy.

---

### Ambiguity 6: Routeman-self-N as second uncertainty axis?

**Strongest counter-interpretation:** routeman's OWN taste needs separate tracking; per-discipline N alone is insufficient.

**Why the counter is partial:** at first ship, routeman-self-N tracking requires LAYER-2 audit infrastructure (Q4 from frontier-questions) that doesn't exist yet. Adding it now is bootstrap-circular (audit-infrastructure depends on observations that don't exist pre-audit-infrastructure).

**Counter-counter:** at first ship, treat routeman-self-N as IMPLICITLY LOW (pre-maturity, routeman invocations are few). Confidence labels are conservative anyway under E5 fallback. When LAYER-2 audit (Q4) ships, routeman-self-N becomes observable and second-axis confidence can be added.

**Confidence:** HIGH for routeman-self-N deferred to Q4 follow-up.

**Resolution:** **Single-axis confidence (per-discipline-N-based) at first ship; routeman-self-N as deferred second axis** (Q4 follow-up dependency).

**What is fixed:** single-axis confidence.

---

### Ambiguity 7: REVISIT's "natural-availability filter" — what's N for "≥N prior cycles needed"?

**Strongest counter-interpretation:** N=1 (any prior cycle qualifies REVISIT for emission).

**Why the counter is partial:** REVISIT's three sub-actions (RESURRECT/INVALIDATE/REVERT) operate on prior-cycle DIRECTIONS — they need prior-cycle outcomes to recall, mark invalid, or revert. N=1 is too low; a single prior cycle doesn't usually produce enough material for meaningful cross-cycle REVISIT.

**Counter-counter:** N=3 to N=5 prior cycles is a reasonable heuristic — enough cross-cycle material for REVISIT to operate meaningfully. The specific threshold is calibratable; SKILL.md authoring can refine.

**Confidence:** MEDIUM for N=3 default; threshold is calibratable.

**Resolution:** **N=3 prior cycles** as the natural-availability filter for REVISIT (calibratable at SKILL.md authoring). This is NOT identity-violating gating because REVISIT is structurally meaningless without prior cycles; the filter is mechanism-honesty, not policy-gating.

**What is fixed:** REVISIT natural-availability filter = N=3 prior cycles (calibratable).

---

### Load-bearing concept tests

- **"Metadata-labeling vs gating"** — real structural commitment; gating fails identity; labeling preserves. **PASS.**
- **"Per-route-type asymmetry"** — grounded in 12/4 partition + 24-01-30 family-split. **PASS.**
- **"Pollution-framing test"** — applied; finding currently overstated; defensive labeling adopted. **PASS.**
- **"Natural-availability filter"** — distinct from identity-violating gating; mechanism-honesty about REVISIT's requirement for prior cycles. **PASS.**

### Specific-vs-pattern recognition cue

The question is about 2 specific movement types (INVESTIGATE FRONTIER + REVISIT). Wider pattern: could other types (TEST, CONSOLIDATE) be calibration-sensitive? Possibly, but those aren't the inquiry's scope; flagged as research-frontier extension if practice surfaces calibration-sensitivity for other types.

### SV4 — Clarified Understanding

The recommended policy:
1. **Mechanism:** Option 13 (Hybrid: confidence-graduated + per-route-type-split).
2. **INVESTIGATE FRONTIER:** emit ALWAYS; per-route confidence label per maturity (D1 scheme).
3. **REVISIT:** emit when ≥3 prior cycles exist (natural-availability filter); when emitted, confidence label per maturity (D1 scheme).
4. **Confidence scheme:** D1 = 3-level (LOW / MED / HIGH) with per-discipline-N thresholds 20/30.
5. **Per-discipline-N source:** E5 deferred; first-ship fallback = LOW-confidence-default for all FRONTIER/REVISIT emissions until source decided at SKILL.md authoring.
6. **Per-sub-action REVISIT split:** uniform at first ship; deferred to follow-up.
7. **Routeman-self-N:** single-axis at first ship; second-axis deferred to LAYER-2 audit (Q4) follow-up.
8. **Pollution framing:** acknowledged as currently overstated per desc.md; defensive labeling preserved as future-proof insurance.
9. **Downstream consumers** (Baldwin / /intuit / human Selector / system Selector) interpret confidence labels per their own filtering policies; routeman doesn't gate based on Baldwin assumptions.
10. **REVISIT's natural-availability filter** is mechanism-honesty, not identity-violating gating.

Open follow-ups:
- **FF-A** — Per-discipline-N source (E1-E5 candidates; SKILL.md authoring decides).
- **FF-B** — Baldwin spec coordination (revival when Baldwin ships and commits seed source).
- **FF-C** — Per-sub-action REVISIT differentiation (observable trigger).
- **FF-D** — Routeman-self-N tracking (LAYER-2 audit Q4 dependency).
- **FF-E** — REVISIT's "≥3 prior cycles" threshold (calibratable; SKILL.md decides).
- **FF-F** — Generalization to other calibration-sensitive types (research frontier; e.g., TEST, CONSOLIDATE).

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- Mechanism: Option 13 hybrid (confidence-graduated + per-route-type-split).
- INVESTIGATE FRONTIER: always-emit with confidence label.
- REVISIT: emit when ≥3 prior cycles exist (natural-availability filter; calibratable); confidence label when emitted.
- Confidence scheme: D1 (LOW/MED/HIGH; thresholds 20/30).
- Per-discipline-N source: E5 deferred with LOW-fallback.
- Per-sub-action REVISIT split: uniform at first ship.
- Routeman-self-N: single-axis at first ship.
- Pollution framing: tested and found overstated; defensive labeling preserved.
- Downstream consumers: interpret labels per their own policies.

### Options eliminated

- Option 2 (gate-until-maturity) — violates enumerate-all identity.
- Option 5 (per-sub-action REVISIT split) — over-categorizes at first ship; deferred.
- Option 6 (adaptive-rate-cap) — arbitrary cap value; confidence-graduated is cleaner.
- Option 8 (snapshot-and-replay) — cost too high for unverified pollution risk.
- Option 11 (no-special-treatment) — loses maturity signal entirely.
- Option 12 (defer entirely) — fails the SKILL.md-author-able criterion.
- Option 15 (max-sophistication hybrid) — over-engineered.

### Paths still viable

- Per-discipline-N source decision (E1-E4 candidates) at SKILL.md authoring.
- Per-sub-action REVISIT split if practice surfaces asymmetry.
- Routeman-self-N as second axis if/when Q4 audit ships.
- Generalization to other calibration-sensitive types if practice forces.

### SV5 — Constrained Understanding

The problem reduces to a single deliverable shape: a recommendation memo with the 10 commitments above + a 15-option pros/cons table (the user's explicit ask) + 6 open follow-ups + the pollution-framing-test finding.

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did multiple perspectives produce destabilizing anchors? Looking back:
- Pollution framing → tested and found overstated; no model patching needed.
- Per-route-type asymmetry → clean per-type-split adopted.
- Confidence labeling → D1 scheme; clean.
- Per-discipline-N source → E5 deferred with fallback; clean.
- Per-sub-action split → uniform first ship; clean.
- Routeman-self-N → second axis deferred; clean.
- REVISIT's natural-availability filter → distinguished from gating; clean.

Model didn't require multiple patches. The pollution-framing test was a NEW FINDING (the source-question's framing was overstated), not a model patch. Per-route-type asymmetry was a structural recognition, not a patch.

Self-applicability: target is routeman policy + downstream-consumer-interaction; not sensemaking framework. Low risk.

### Meta-Inspection — H6 + H8

- **H6 — model fit.** Has the model required multiple patches? No. The recommendation flows from KI1 (pollution overstated) + KI4 (gating fails identity) + KI2 (per-route-type asymmetry) + KI5 (confidence field exists) into Option 13 hybrid. PASS.
- **H8 — self-reference.** Sensemaking evaluating routeman's policy; different target framework. Low risk. PASS.

### SV6 — Stabilized Model

**The model.**

Routeman's emission policy for INVESTIGATE FRONTIER and REVISIT pre-Baldwin-maturity is **Option 13: Hybrid (confidence-graduated emission + per-route-type-split)**.

**Per-type rules:**
- **INVESTIGATE FRONTIER:** emit ALWAYS; per-route confidence label graduated by per-discipline maturity (LOW pre-maturity / MED transitional at N=20+ / HIGH mature at N=30+).
- **REVISIT:** emit when ≥3 prior cycles exist (natural-availability filter; mechanism-honesty, not identity-violating gating); when emitted, confidence label graduated identically; per-sub-action treatment uniform at first ship.

**Confidence scheme:** D1 = 3-level (LOW / MED / HIGH) with thresholds N=20 and N=30 per-discipline.

**Per-discipline-N source:** deferred to SKILL.md authoring (E5); first-ship fallback = LOW-confidence-default for all FRONTIER/REVISIT emissions until source ships.

**Downstream consumers** (Baldwin / /intuit / human Selector / system Selector at L2+) interpret confidence labels per their own filtering policies. Routeman doesn't gate based on Baldwin assumptions.

**The pollution framing is currently overstated** per direct read of `docs/desc.md`: Baldwin's seed source is "hunch-pattern seeds" from /intuit Phase β+ calibrated against Retrospective RC delta, NOT routeman emissions. Defensive confidence-labeling future-proofs the policy if Baldwin's spec when shipped changes the seed source.

**Routeman's enumerate-all identity** is preserved: no movement type is gated; INVESTIGATE FRONTIER always emits with confidence label; REVISIT's natural-availability filter is mechanism-honesty about cross-cycle requirements, not identity-violating gating.

**6 open follow-ups deferred** to SKILL.md authoring (FF-A frontier-N source, FF-E REVISIT threshold) + future inquiries (FF-B Baldwin spec, FF-C per-sub-action split, FF-D routeman-self-N tracking, FF-F generalization research frontier).

**How SV6 differs from SV1.**

| Axis | SV1 | SV6 |
|---|---|---|
| Problem framing | Choose among 15 options | Option 13 hybrid with per-type rules + deferred sub-decisions |
| Pollution framing | Accepted | Tested + found currently overstated per desc.md |
| Per-route-type treatment | Open | Asymmetric (FRONTIER always; REVISIT with natural-availability filter) |
| Confidence scheme | Open | D1 (3-level; thresholds 20/30) |
| Per-discipline-N source | Open | Deferred (E5 with LOW-fallback) |
| Per-sub-action REVISIT | Open | Uniform at first ship |
| Routeman-self-N | Open | Single-axis at first ship |
| REVISIT's gating | Ambiguous | Natural-availability filter (mechanism-honest; not identity-violating) |
| Open follow-ups | Implicit | 6 explicit FFs |

---

## Telemetry

- **Perspective saturation:** 8 perspectives applied. 3 produced new anchors. Converging.
- **Ambiguity resolution ratio:** 7 ambiguities raised; 7 resolved (6 HIGH; 1 MEDIUM for REVISIT threshold).
- **SV delta:** SV1 → SV6 shows MAJOR shift: 15-option-space → Option 13 hybrid + per-type rules + deferred sub-decisions; pollution-framing-test is a NEW central finding the source-question didn't surface.
- **Anchor diversity:** 5 anchor types (Constraints, Key Insights, Structural Points, Foundational Principles, Meaning-Nodes); 8 perspectives.
- **Failure modes checked:**
  - **Status Quo Bias:** the source-question's default (Option 3 confidence-graduated) was the inherited default; this inquiry TESTED it and adopted a more refined hybrid (Option 13). Not status-quo-protected.
  - **Premature Stabilization:** verified via 3+ new-anchor perspectives + the pollution-framing test grounded in direct desc.md read.
  - **Anchor Dominance:** the pollution-framing-test insight is dominant; checked by listing 4 other distinct decisions (per-route-type-split, confidence scheme, per-discipline-N source, REVISIT natural-availability filter) that don't all collapse to it.
  - **Perspective Blindness:** most uncomfortable perspective = "maybe gating IS the right answer and enumerate-all should be revisited" — addressed by tracing enumerate-all's status as core identity-commitment from design memo; gating IS rejected, not avoided.
  - **Clean Resolution Trap:** Option 13's clean fit was tested via Option 3-alone alternative (asymmetric-ignoring fails per KI2); Option 13 survives structural test.
  - **Self-Reference Blindness:** target ≠ sensemaking; low risk.
- **Convergence verdict:** STABILIZED.

---

## Output handoff to Decomposition

Decomposition's task: take the 10 commitments + 6 FFs and produce a clean coupling map + question tree. The commitments fall into clusters:

- **Policy-mechanism cluster:** Option 13 hybrid + per-type rules (FRONTIER always-emit; REVISIT natural-availability filter).
- **Confidence-labeling cluster:** D1 scheme + thresholds + E5-deferred source with LOW-fallback.
- **Downstream-awareness cluster:** consumer-interprets-metadata pattern + pollution-framing-test finding.
- **Deferred-decisions cluster:** per-sub-action split + routeman-self-N + REVISIT threshold + Baldwin coordination + generalization research frontier.

Key load-bearing concepts handed off:
- **Option 13 hybrid mechanism** as the central policy shape.
- **Per-route-type asymmetry** as the structural justification for per-type rules.
- **Pollution-framing-test finding** as the central reframing of the inquiry's central problem.
- **Natural-availability filter** as the distinction from identity-violating gating.
- **D1 confidence scheme** as the labeling mechanism.
- **E5 deferral with LOW-fallback** as the per-discipline-N approach.
