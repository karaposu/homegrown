# Innovation — investigate_frontier_revisit emission policy

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/_branch.md`

---

## Phase 1 — Seed

**Seed:** Decomposition's 6 pieces (P1 Policy Mechanism; P2 Confidence Labeling; P3 Pollution-test + Downstream; P4 15-option pros/cons table; P5 FF list; P6 Re-test). Production-task mode.

### Methodology-Mode Consideration

- **Inherited mode:** Standard default (balanced 4G+3F).
- **Alternative considered:** Contrarian-rethink — would re-litigate whether pollution-test is overstated; Sensemaking already tested via direct desc.md read. Per-piece Inversion covers contrarian axis.
- **Decision:** DEFAULT.

### Meta-Decision-Piece Classification

| Piece | Properties fired | Meta-decision? |
|---|---|---|
| **P1** (Policy Mechanism) | (a) Option 13 adoption; (b) natural-availability filter vs gating framing; (d) enumerate-all identity criterion; (e) ADD-CONTENT | **YES** + property (v) fires |
| **P2** (Confidence Labeling) | (d) D1 scheme + thresholds criterion; (e) ADD-CONTENT | **YES** + property (v) fires |
| **P3** (Pollution-test + Downstream) | (b) pollution-overstated framing; (c) defensive-labeling + downstream-decides vocabulary | **YES** |
| **P4** (15-option table) | content-production (table format is explicit user ask) | NO |
| **P5** (FF list) | content-production | NO |
| **P6** (Re-test) | (a) verdict labels; (d) verdict taxonomy | **YES** |

4 meta-decision pieces. **P1 + P2 fire property (v) → Intervention-Shape-Axis Inversion required for both.**

---

## Phase 2 — Generate

### Coverage plan

| Piece | Generators | Framers | Inversion-candidate |
|---|---|---|---|
| P1 | Domain Transfer (native+cross) | Constraint Manipulation (ADD+REMOVE) | Inversion (intervention-shape: ADD-CONTENT vs REORGANIZE / DO-NOTHING / REPAIR) |
| P2 | Absence Recognition (patch+redesign) | Lens Shifting | Inversion (intervention-shape: ADD-CONTENT vs REORGANIZE / REPAIR) |
| P3 | Combination | — | Inversion (content-axis: downstream-decides vs routeman-decides) |
| P4 | Combination | — | — (content-production) |
| P5 | (content production) | — | — |
| P6 | Combination, Extrapolation | — | Inversion (content-axis: direction-reversal) |

Mechanism totals: Generators 4/4 (Combination ×2, Absence Recognition, Domain Transfer, Extrapolation); Framers 3/3 (Lens Shifting, Constraint Manipulation both-directions, Inversion ×4). **Full coverage.**

---

### P1 — POLICY MECHANISM SPEC

#### P1-G (Generic — Sensemaking commitment)

> **Mechanism: Domain Transfer.** Native: compiler optimization debug-levels — `gcc -O0` always emits; downstream debugger filters by debug level. Cross-domain: pharmacy labeling — all drugs labeled with active ingredients + dosing; doctor/pharmacist filters per patient context.

```
POLICY MECHANISM: Option 13 hybrid (confidence-graduated emission + per-route-type-split)

INVESTIGATE FRONTIER:
  - Trigger: routeman's enumeration step encounters a frontier signal (e.g.,
    sensemaking Constraints + finding Open-Questions per 24-01 mapping).
  - Action: ALWAYS emit a FRONTIER route.
  - Confidence label: per D1 scheme (LOW/MED/HIGH; per-discipline-N threshold) — see P2.
  - Downstream interpretation: consumer's responsibility (see P3).

REVISIT (with sub-actions RESURRECT/INVALIDATE/REVERT):
  - Trigger: routeman's enumeration step encounters a cross-cycle pattern that
    warrants RESURRECT/INVALIDATE/REVERT (per F-revisit feature in design memo).
  - Natural-availability filter: emit REVISIT only when ≥3 prior cycles exist for
    the relevant scope (count source = persistence model's per-Route status per 24-00,
    OR inquiry-folder scan count heuristic; concrete source deferred to SKILL.md
    authoring per FF-A adjacent).
  - Action: emit REVISIT (one of 3 sub-actions per F-revisit logic).
  - Confidence label: per D1 scheme — see P2.
  - Sub-actions (RESURRECT/INVALIDATE/REVERT) uniformly inherit REVISIT's policy
    at first ship; per-sub-action split deferred (FF-C).

ENUMERATE-ALL IDENTITY PRESERVATION:
  - Neither type is GATED on any axis other than natural-availability for REVISIT.
  - FRONTIER always emits with confidence; REVISIT emits when cross-cycle data exists.
  - The natural-availability filter for REVISIT is MECHANISM-HONESTY (REVISIT is
    structurally meaningless without prior cycles), NOT identity-violating gating.
  - Distinction from gating: gating denies emission for POLICY reasons (e.g., "we
    don't trust LOW-confidence routes pre-maturity"); natural-availability denies
    emission for STRUCTURAL reasons (e.g., "this type requires prior cycles by
    definition; none exist; emission would be undefined").
```

#### P1-F (Focused — REVISIT threshold sensitivity)

> **Mechanism: Constraint Manipulation (ADD direction).** Add constraint: "must work even when prior-cycle count is 0 (fresh project, first invocation)."

Concrete edge cases:
- Fresh project, first routeman invocation: 0 prior cycles. REVISIT emits nothing (natural-availability filter fails). FRONTIER emits with LOW confidence (E5 fallback).
- After 2 prior cycles: REVISIT still emits nothing (threshold ≥3 not met). FRONTIER continues with LOW.
- After 3rd cycle completes: REVISIT becomes available; emits with LOW confidence.
- After 20+ cycles (per-discipline): confidence promotes to MED (per D1 thresholds).
- After 30+ cycles (per-discipline): confidence promotes to HIGH.

Threshold sensitivity note: ≥3 is the first-ship default. Alternatives:
- ≥1 (minimal; risks early REVISIT with insufficient cross-cycle signal)
- ≥5 (more conservative; loses utility for projects with 3-4 cycles)
- ≥10 (most conservative; gates REVISIT for several weeks of small-project work)

The ≥3 default is calibratable at SKILL.md authoring per FF-E. Practice should monitor whether REVISIT emissions at ≥3 prove valuable (revival trigger: emission rate at ≥3 cycles AND human-triage acceptance rate).

#### P1-additional (Constraint Manipulation — REMOVE direction)

> **REMOVE constraint:** "remove the ≥3-cycle natural-availability filter — what happens?" Implication: REVISIT emits from N=1 (any prior cycle). Risks: meaningless cross-cycle pattern (1 prior cycle isn't enough cross-cycle data for RESURRECT/INVALIDATE/REVERT to operate meaningfully). The filter exists for mechanism-honesty; removing it makes REVISIT a degenerate type at N=1-2.

**REMOVE FAILS** — the natural-availability filter is load-bearing for mechanism-honesty. Keep ≥3 (calibratable per FF-E).

#### P1-C (Contrarian — Inversion intervention-shape REQUIRED per property-(v))

> **Mechanism: Inversion (intervention-shape axis).** Current shape: **ADD-CONTENT** (new policy spec in routeman SKILL.md). Alternative shapes:

> **Alternative shape 1: REORGANIZE-WITHOUT-ADDING.** Don't add a separate emission-policy section; inline the per-type rules into the existing routeman feature definitions (F-revisit gains the natural-availability filter; F-frontier-enumeration gains the always-emit + confidence note). Smaller spec footprint.
> Cons: the policy logic gets scattered across feature definitions; harder to audit as a single policy; the pollution-framing-test reasoning (which is policy-level, not feature-level) has no natural home.

> **Alternative shape 2: DO-NOTHING.** Defer the policy entirely; SKILL.md authoring decides at authoring time without this inquiry's commitments.
> Cons: re-runs the entire option-evaluation work at SKILL.md authoring; loses the structural insights from Sensemaking (pollution-framing-test, per-route-type asymmetry, etc.). Wasteful.

> **Alternative shape 3: REPAIR.** Modify the design memo's F-revisit and F-frontier-enumeration feature definitions to include the policy inline. Changes existing design memo text.
> Cons: design memo's F-revisit is a meaning-layer commitment; emission policy is process-layer; conflating layers violates the layer-commitment principle.

> **Verdict:** ADD-CONTENT (P1-G) survives. Alternatives fail on scattering / re-work / layer-conflation.

---

### P2 — CONFIDENCE LABELING SPEC

#### P2-G (Generic — D1 scheme + thresholds + E5 deferral)

> **Mechanism: Absence Recognition (patch level).** Patch: missing "what about new disciplines that haven't started yet"? Edge case where per-discipline N=0 → fallback to LOW. Captured in P2's fallback rule.

```
CONFIDENCE LABELING SPEC

D1 SCHEME (3-level enum):
  - confidence ∈ {LOW, MED, HIGH}
  - LOW: per-discipline N < 20 (pre-maturity)
  - MED: 20 ≤ per-discipline N < 30 (transitional)
  - HIGH: per-discipline N ≥ 30 (mature per docs/desc.md)

THRESHOLDS:
  - First-ship defaults: 20 / 30 per docs/desc.md's calibration-maturity gate.
  - Calibratable at SKILL.md authoring (FF-A adjacent).

PER-DISCIPLINE-N SOURCE:
  - DEFERRED to SKILL.md authoring (FF-A).
  - Source candidates (for SKILL.md authoring to choose):
    - E1: `_meta_state.md` extension (per autonomy_ladder.md's L1+ artifact).
    - E2: New `docs/discipline_calibration.md` sidecar.
    - E3: Inquiry-folder count heuristic (count entries in `devdocs/inquiries/`
      filtered by discipline-tag).

FIRST-SHIP FALLBACK (until source decided):
  - confidence = LOW for ALL FRONTIER/REVISIT emissions.
  - Graceful degradation: policy operates conservatively while source is unspecified.
  - Downstream consumers receive LOW-confidence labels; their filtering behavior
    is conservative-by-default.

CONFIDENCE FIELD LOCATION:
  - Uses the per-route `confidence` field already in routeman's schema (design
    memo: "Assess priority and confidence per move").
  - No new schema field needed.

ROUTEMAN-SELF-N AS SECOND AXIS:
  - SINGLE-AXIS at first ship (per-discipline-N only).
  - Routeman-self-N (the second uncertainty axis) is DEFERRED to FF-D pending
    LAYER-2 audit infrastructure (Q4 from frontier-questions finding).
```

#### P2-F (Focused — LLM-vs-rule consumer Lens Shifting)

> **Mechanism: Lens Shifting.** Under conditions where downstream consumers are LLM-based (interpret "LOW" qualitatively), the label is sufficient. Under conditions where consumers are RULE-based (e.g., Baldwin's filter when shipped may use a numeric threshold), the label might need numeric backing.

```
DUAL-INTERPRETATION FOR DOWNSTREAM:

For LLM-based consumers (human + LLM agents):
  - Label values (LOW / MED / HIGH) are the user-facing form.
  - LLM interprets "LOW" qualitatively + downstream-context-aware.

For RULE-based consumers (Baldwin filter when shipped; system Selector at L2+):
  - Label values are backed by per-discipline N (the derivation source).
  - Rule-based consumers can read `confidence` (label) AND optionally
    `per_discipline_n` (numeric, when N source is decided) as needed.

First-ship commitment: emit label only (LOW/MED/HIGH); per-discipline-N
  field deferred to FF-A's source decision. If consumers need numeric
  backing later, the field can be added at SKILL.md authoring without
  breaking label-only consumers.
```

#### P2-C (Contrarian — Inversion intervention-shape REQUIRED per property-(v))

> **Mechanism: Inversion (intervention-shape axis).** Current shape: **ADD-CONTENT** (new D1 scheme + thresholds spec). Alternatives:

> **Alternative shape 1: REORGANIZE-WITHOUT-ADDING.** Use the existing confidence field's existing semantics (per the design memo, confidence is per-Route LLM judgment with no specific scheme). Don't add maturity-derived values.
> Cons: loses the maturity-aware confidence signal entirely; consumers can't distinguish pre-maturity LOW from any other LOW confidence value. The maturity-derivation IS the inquiry's main contribution.

> **Alternative shape 2: REPAIR.** Modify the existing confidence field to ENFORCE maturity-derivation (override existing semantics). The field becomes maturity-only; LLM judgment can't write to it.
> Cons: existing confidence field has dual purpose (LLM judgment + future maturity-derivation). Removing LLM judgment loses information; this is a backward-incompatible change to the design memo's commitment.

> **Verdict:** ADD-CONTENT (P2-G) survives. Alternatives lose information.

---

### P3 — POLLUTION-TEST + DOWNSTREAM-AWARENESS

#### P3-G (Generic — Combination)

> **Mechanism: Combination.** Pollution-test finding + defensive-labeling rationale + downstream-consumer-interprets-metadata pattern.

```
POLLUTION-FRAMING TEST RESULT (Sensemaking finding)

Q10's source-question framed routeman's pre-maturity emissions as "polluting the
Baldwin cycle's seed quality." This framing was TESTED in Sensemaking via direct
read of `docs/desc.md` and FOUND CURRENTLY OVERSTATED.

Per desc.md (verbatim): "Baldwin seeds never bypass the SIC loop. Hunch-pattern
seeds produce inquiry PROPOSALS that enter the normal E → S → D → I → C cycle.
... Seed-generation activates only after calibration maturity (N ≥ 30 per
discipline)."

The seed source named is "hunch-pattern seeds" — i.e., /intuit Phase β+ hunches
calibrated against Retrospective RC delta. Routeman emissions are NOT named as
a Baldwin seed source in desc.md. The pollution framing assumes a consumption
relationship desc.md does NOT specify.

DEFENSIVE LABELING RATIONALE

Despite the pollution framing being currently overstated, defensive
confidence-labeling (P2's D1 scheme) is preserved as FUTURE-PROOF INSURANCE:

  - Cost: zero (the confidence field already exists per the design memo).
  - Benefit if pollution risk materializes (Baldwin's spec when shipped commits
    routeman-consumption): labels are already in place; Baldwin's filter can
    use them.
  - Benefit if pollution risk doesn't materialize: labels still inform other
    consumers (human Selector, system Selector at L2+).

DOWNSTREAM-CONSUMER-INTERPRETS-METADATA PATTERN

Routeman emits with metadata (D1 confidence label per route). Each downstream
consumer decides its own filtering policy:

  - Human Selector (L0-L1; current state): reads confidence + filters by
    judgment. Natural pre-maturity safeguard.
  - Baldwin cycle (post-N≥30; not yet shipped): IF Baldwin consumes routeman
    emissions, its filtering policy is BALDWIN'S SPEC, not routeman's. Routeman
    provides labels; Baldwin's filter uses them.
  - /intuit Phase β+ (when shipped): interpretation per /intuit's spec; not
    routeman's concern.
  - System Selector at L2+ (per autonomy_ladder.md): its filtering policy is
    the system-Selector spec.

ROUTEMAN DOESN'T GATE BASED ON BALDWIN ASSUMPTIONS

The pollution-prevention responsibility is downstream. Routeman emits with
metadata; doesn't pre-filter for downstream consumers that haven't shipped or
that have their own filtering policies. This is the project's "downstream-decides"
pattern: routeman labels, consumers filter.
```

#### P3-C (Contrarian — Inversion content-axis: routeman-decides)

> **Mechanism: Inversion.** Assumption reversed: "downstream-decides via metadata." → Reversed: "routeman-decides — routeman pre-filters for downstream's known policies."

> **Alternative shape:** routeman reads Baldwin's (eventual) filter spec when Baldwin ships, then pre-filters its emissions to avoid sending Baldwin routes that Baldwin would reject. Pre-filtering reduces Baldwin's processing cost.

> **Cons:**
> - Requires Baldwin's spec to exist (it doesn't).
> - Couples routeman to Baldwin's specifics (changes when Baldwin changes).
> - Violates the project's downstream-decides pattern (cf. the autonomy register's read-convention being consumer-specific from 24-40).
> - Routeman's job is enumerate-all + meaningful enumeration; filtering for specific consumers is consumer responsibility.

> **Verdict:** REJECTED. Downstream-decides (P3-G) preserves modularity. Routeman-decides over-couples.

---

### P4 — 15-OPTION PROS/CONS TABLE

#### P4-G (Generic — single table)

> **Mechanism: Combination.** Layout: single 15-row table with columns Option / Description / Pros / Cons / Verdict / Verdict-Reason.

```
| # | Option | Description | Pros | Cons | Verdict | Reason |
|---|---|---|---|---|---|---|
| 1 | Always-emit | No gating; no labels | Simplest; preserves enumerate-all | No maturity signal; downstream can't distinguish pre/post-maturity | KILL | Loses maturity-awareness signal that adds 0 cost to add |
| 2 | Gate-until-maturity | Emit nothing pre-maturity | Strongest pollution prevention | **Violates enumerate-all identity** (the discipline's core commitment) | KILL | Identity-violating; pollution risk currently overstated per desc.md |
| 3 | Confidence-graduated | Emit always; per-route confidence label per maturity | Preserves enumeration; uses existing confidence field | Doesn't honor per-route-type asymmetry alone | KILL-as-standalone (absorbed into Option 13 hybrid) | Single-policy treats FRONTIER + REVISIT identically; asymmetry warrants split |
| 4 | Per-route-type-split | FRONTIER and REVISIT use different policies | Honors structural asymmetry (12/4 partition; family-split per 24-01-30) | Doesn't address pre-maturity per route alone | KILL-as-standalone (absorbed into Option 13 hybrid) | Needs combining with maturity-aware confidence |
| 5 | Per-sub-action REVISIT split | RESURRECT/INVALIDATE/REVERT have different policies | Finest granularity | Over-categorizes at first ship; complexity-cost exceeds benefit | DEFER | Revival trigger: per-sub-action asymmetry observed in practice (FF-C) |
| 6 | Adaptive emission rate | Cap per-mode emissions pre-maturity; lift cap as N→30 | Limits volume rather than gating | Arbitrary cap value; calibration needed; complexity | KILL | Confidence-graduated achieves volume-control implicitly via downstream filtering |
| 7 | Per-discipline-aware policy | Emit FRONTIER/REVISIT routes per-discipline-N | Honors N≥30 per-discipline granularity | Requires per-discipline-N source not yet specified | DEFER (absorbed into Option 13's per-discipline-N source decision) | Source decision deferred to SKILL.md authoring (FF-A) |
| 8 | Snapshot-and-replay | Emit always; quarantine; review at maturity | Auditable; preserves enumeration | Quarantine infrastructure cost; reviewers needed | KILL | Cost too high for unverified pollution risk |
| 9 | Human-triage-required pre-maturity | Emit always; mark "human-judgment-required" | Couples to autonomy register | Redundant with L0-L1 human-Selector default | KILL | Human triage is already the L0-L1 default per autonomy_ladder.md; explicit marker adds noise |
| 10 | Downstream-decides via metadata | Routeman labels; consumers decide | Maximum delegation; minimum coupling | Requires labels (Option 3 substrate) | KILL-as-standalone (absorbed into Option 13's downstream-pattern) | Labels need defining (Option 3 fills that gap) |
| 11 | No-special-treatment + downstream-discovers | Like Option 1 but consumers discover patterns over time | Most minimal | Loses maturity signal; defers all complexity | REJECT | Loses load-bearing maturity signal |
| 12 | Defer entirely | Don't ship a policy; SKILL.md decides | Honest about uncertainty | Re-runs option-evaluation work; loses Sensemaking insights | REJECT | Fails the SKILL.md-author-able criterion |
| **13** | **Hybrid (Option 3 + Option 4)** | **Confidence-graduated + per-route-type-split** | **Honors per-route-type asymmetry + maturity-awareness + existing confidence field + enumerate-all identity** | **2 per-type rules in SKILL.md (modest complexity)** | **ADOPTED** | **Survives all structural tests; Option 3 alone misses asymmetry; Option 4 alone misses maturity** |
| 14 | Hybrid (Option 3 + Option 10) | Confidence-graduated + downstream-decides | Routeman labels; consumers decide | Doesn't honor per-route-type asymmetry | KILL | Missing per-route-type-split; Option 13 dominates |
| 15 | Hybrid (Option 4 + Option 7 + Option 10) | Per-type + per-discipline + downstream | Maximum sophistication | Over-engineered; high implementation cost; requires per-discipline-N source NOW | KILL | Over-engineered for first ship; per-discipline-N source not ready |
```

**ADOPTED option's justification:** Option 13 combines Option 3's confidence-graduated emission (preserving enumeration + using existing field) with Option 4's per-route-type-split (honoring the FRONTIER/REVISIT asymmetry visible in 12/4 partition + 24-01-30 family-split). Combined with Option 10's downstream-decides pattern (which Option 13's confidence labels enable). The hybrid honors all 4 Sensemaking insights: per-route-type asymmetry + enumerate-all identity + confidence field exists + pollution-framing test (defensive labeling without over-committing).

---

### P5 — FF LIST

#### P5-G (Generic — content production)

```
RESIDUAL OPEN QUESTIONS (6 FFs)

FF-A — Per-discipline-N source decision.
  Scope: which source (E1 _meta_state.md extension / E2 new docs/discipline_calibration.md /
    E3 inquiry-folder count heuristic) provides per-discipline N to confidence labeling.
  Consumer: SKILL.md authoring inquiry.
  Revival: when SKILL.md authoring begins.

FF-B — Baldwin spec coordination.
  Scope: when Baldwin's spec ships and commits its seed source, validate or update
    the pollution-framing-test finding + adjust defensive labeling if needed.
  Consumer: Baldwin-spec inquiry (when scheduled).
  Revival: when Baldwin's spec is being written (likely when project's most-mature
    discipline approaches N=30).

FF-C — Per-sub-action REVISIT split.
  Scope: whether RESURRECT/INVALIDATE/REVERT need differentiated policies.
  Consumer: follow-up routeman inquiry.
  Revival: observable — when practice surfaces asymmetric pollution profile per sub-action.

FF-D — Routeman-self-N as second confidence axis.
  Scope: track routeman's own enumeration calibration separately from per-discipline N.
  Consumer: follow-up routeman inquiry.
  Revival: when LAYER-2 audit infrastructure (Q4 from frontier-questions finding) ships.

FF-E — REVISIT threshold calibration.
  Scope: the ≥3 prior cycles threshold is first-ship default; recalibrate per practice.
  Consumer: SKILL.md authoring inquiry OR observable monitoring.
  Revival: when practice surfaces over- or under-emission of REVISIT routes at ≥3.

FF-F — Generalization to other calibration-sensitive types.
  Scope: research frontier — could TEST or CONSOLIDATE (also Coordination Moves) be
    calibration-sensitive in the same way?
  Research frontier.
  Revival: observable — when practice surfaces calibration-sensitivity for other types.
```

---

### P6 — INHERITED COMMITMENTS RE-TEST

#### P6-G (Generic — verdict table)

> **Mechanism: Combination + Extrapolation.** Combination: standard verdict table. Extrapolation: the pollution-framing-test pattern (testing source-question framings rather than accepting) may apply to other Q-* questions in future inquiries.

```
| Prior / Spec | Commitment | Verdict | Reason / Impact |
|---|---|---|---|
| 14-39 design memo | Enumerate-all identity | PRESERVED | Option 13 preserves; gating-options rejected |
| 14-39 design memo | Per-route confidence field | PRESERVED + USED | D1 scheme uses existing field |
| 14-39 design memo | 12-auto/4-judgment partition (REVISIT in judgment) | PRESERVED | Per-route-type-split honors REVISIT's judgment-class status |
| 14-39 design memo | F-revisit (RESURRECT/INVALIDATE/REVERT sub-actions) | PRESERVED + INHERITED | Sub-actions uniformly inherit REVISIT's policy at first ship; per-sub-action split deferred |
| 15-20 frontier-questions | Q10 (emission policy frontier) | RESOLVED-WITH-DESIGN | This inquiry resolves Q10 with Option 13 |
| 24-01 adaptive guidance | Per-movement-type Stage 1 mapping | PRESERVED + COMPATIBLE | Mapping unchanged; this inquiry adds emission-policy + confidence labeling on top |
| 24-01-30 taxonomy categorization | FRONTIER in Progression / REVISIT in Coordination | PRESERVED + USED | Per-route-type-split honors family-level distinction |
| 24-40 autonomy register | Register provides current meta-loop level | PRESERVED + DISTINGUISHED | Policy uses per-discipline-N (calibration maturity), not autonomy level (different axis) |
| 24-00 persistence model | Per-Route status tracking | PRESERVED + USED | REVISIT's prior-cycle count can come from persistence model's per-Route history (source choice for FF-A) |
| canonical /navigation | INVESTIGATE FRONTIER + REVISIT as 16-type members | PRESERVED VERBATIM | Types unchanged; categorization is structural overlay (per 24-01-30) |
| docs/desc.md | Baldwin's seed source = /intuit hunches + Retrospective RC delta (N≥30 maturity gate) | PRESERVED + TESTED-AND-FOUND-PROTECTIVE | The pollution-framing test grounded in this commitment; finding currently overstated; defensive labeling preserved as future-proof insurance |
```

#### P6-C (Contrarian — Inversion direction-reversal)

> **Mechanism: Inversion.** Direction-reversal: does the adoption SURVIVE each prior?

```
| Prior commitment | Adoption SURVIVES? | Note |
|---|---|---|
| Enumerate-all identity (14-39) | DERIVED-FROM | Option 13 was shaped by this constraint (gating options rejected) |
| 12-auto/4-judgment partition (14-39) | INFORMED-BY | Per-route-type-split reflects REVISIT's judgment-class status |
| F-revisit feature (14-39) | CONSTRAINED-BY | Sub-actions inherit REVISIT's policy; per-sub-action split deferred |
| Q10 framing (15-20) | RE-FRAMED | Source-question's pollution framing was tested; finding overstated |
| Per-movement-type mapping (24-01) | INFORMED-BY | The mapping informed per-type rule choices |
| Categorization (24-01-30) | INFORMED-BY | FRONTIER/REVISIT family-split informed per-route-type-split adoption |
| Autonomy register (24-40) | DISTINGUISHED-FROM | Calibration maturity ≠ autonomy level (different axes) |
| Persistence model (24-00) | USED-FOR | REVISIT prior-cycle count source candidate |
| desc.md Baldwin mechanism | TEST-SOURCE | The pollution-framing test grounded in direct read of this commitment |
```

> **What this reveals:** the policy is heavily shaped by priors. Option 13's hybrid form is FORCED by the convergence of: enumerate-all identity (rejecting gating) + per-route-type asymmetry (forcing per-type-split) + confidence field exists (making labeling cheap) + pollution-framing test (justifying defensive labeling without committing to specific Baldwin behavior). The design isn't a free choice.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Seed-level central assumption

"Option 13 hybrid (confidence-graduated + per-route-type-split) with E5 deferred per-discipline-N source + LOW-fallback + defensive pollution-labeling is the right policy."

**Challenge scan:**
- **P1-C** (REORGANIZE / DO-NOTHING / REPAIR): challenges intervention shape + spec organization. ✓
- **P2-C** (REORGANIZE / REPAIR): challenges confidence-labeling existence. ✓
- **P3-C** (routeman-decides): challenges downstream-decides pattern. ✓
- **P1-additional REMOVE**: challenges natural-availability filter. ✓
- **P6-C** (direction-reversal): reveals derivation. ✓

**Verdict:** Central assumption challenged at multiple piece levels. **Audit does NOT fire.**

### Piece-level commitments

All meta-decision pieces' commitments explicitly challenged. **Audit does NOT fire at piece level.**

---

## Phase 3 — Test

### 5-test cycle per candidate

| Candidate | Novelty | Survival | Fertility | Action | Independence | Disposition |
|---|---|---|---|---|---|---|
| P1-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P1-F (threshold sensitivity) | MED | HIGH | MED | HIGH | YES | **ACTIONABLE as elaboration** |
| P1-additional ADD (works at N=0) | LOW | HIGH | LOW | HIGH | YES | **ACTIONABLE as verification note** |
| P1-additional REMOVE (drop ≥3 filter) | LOW | LOW (mechanism-honesty loss) | LOW | LOW | NO | **REJECTED** |
| P1-C (REORGANIZE/DO-NOTHING/REPAIR) | MED | LOW | LOW | LOW | NO | **KILL with seeds** |
| P2-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P2-F (LLM-vs-rule lens shift) | MED | HIGH | MED | HIGH | YES | **ACTIONABLE as forward-compat note** |
| P2-C (REORGANIZE/REPAIR) | MED | LOW | LOW | LOW | NO | **KILL with seeds** |
| P3-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P3-C (routeman-decides) | MED | LOW (violates downstream-decides; couples to Baldwin spec) | LOW | LOW | NO | **REJECTED** |
| P4-G (15-row table) | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** (the user's explicit deliverable) |
| P5-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P6-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P6-C (direction-reversal) | HIGH (reveals derivation) | HIGH | HIGH | MED | NO | **RE-TEST TRIGGER** → derivation notes already captured in P1+P3 |

### Test summary

- 14 candidates produced.
- 9 ACTIONABLE / companion / verification note.
- 3 KILL (P1-C, P2-C variants).
- 2 REJECTED (P1-additional REMOVE; P3-C).
- 1 RE-TEST TRIGGER (P6-C confirms derivation notes are captured).

### Artifact-grounding (6th conditional test)

Categorical claims requiring artifact check:
- P3-G's pollution-framing-test result quoting desc.md — verified earlier this session via direct grep.
- P1-G's REVISIT count source citing persistence model — verified via 24-00 persistence finding (per-Route status field exists).
- P6-G's verdict per prior — verified via priors' findings.

All verified. **PASS.**

### Axis coverage check

Orthogonal axes addressed:
1. **Content axis:** P1-G/P2-G/P3-G/P4-G with adopted commitments.
2. **Shape axis (intervention-shape):** P1-C + P2-C alternatives (REORGANIZE etc.).
3. **Direction axis (re-test direction-reversal):** P6-C.
4. **Sensitivity axis:** P1-F (threshold sensitivity).
5. **Constraint-direction axis:** P1-additional ADD/REMOVE.
6. **Consumer-perspective axis:** P2-F (LLM vs rule consumer lens shift).

6 axes covered. **PASS.**

---

## Assembly Check

Combine ACTIONABLE candidates:

```
FINDING SHAPE:

1. Opening reframing — Q10 RESOLVED-WITH-DESIGN. The pollution framing was TESTED
   in Sensemaking and found currently overstated per desc.md; defensive labeling
   future-proofs.

2. Policy mechanism spec (P1-G + P1-F threshold sensitivity + P1-additional ADD
   verification): Option 13 hybrid; FRONTIER always-emit; REVISIT with ≥3-prior-
   cycles natural-availability filter; enumerate-all identity preserved; filter
   distinguished from gating.

3. Confidence labeling spec (P2-G + P2-F LLM-vs-rule forward-compat note): D1 scheme
   (LOW/MED/HIGH; thresholds 20/30); per-discipline-N source deferred (E5) with
   LOW-fallback; field-existing-in-schema; single-axis at first ship.

4. Pollution-test + downstream-awareness (P3-G): test result + defensive labeling
   rationale + downstream-consumer-interprets-metadata pattern + routeman-doesn't-
   gate-based-on-Baldwin-assumptions.

5. 15-option pros/cons table (P4-G): the user's explicit deliverable; all 15 options
   listed with pros/cons/verdict/reason; Option 13 ADOPTED with justification citing
   the 4 Sensemaking insights.

6. FF list (P5-G): 6 FFs scoped.

7. Inherited commitments re-test (P6-G + P6-C softened): verdict table + priors-
   shape-adoption note (already captured as derivation notes in P1+P3).

8. Deferred + killed candidates section: KILL seeds preserved (P1-C alternatives;
   P2-C alternatives; P3-C routeman-decides reject).
```

**Cross-piece coherence:** opening reframing coheres with P3's pollution-test finding + P6's derivation note.

**Emergent insight:** the policy honors the central insight that **the question's framing assumption needed testing** — the source-question presupposed pollution; testing found it currently overstated. The defensive labeling preserves protection against the framing turning out to be right later; the no-gating decision preserves routeman's identity. This is a structurally clean balance that the source-question's "default" (always-emit with confidence-LOW) didn't explicitly justify.

---

## Telemetry

### Mechanism Coverage

- **Generators applied:** 4/4 (Combination ×2, Absence Recognition, Domain Transfer, Extrapolation).
- **Framers applied:** 3/3 (Lens Shifting, Constraint Manipulation both-directions, Inversion ×4).
- **Convergence:** YES — 3+ mechanisms converge on Option 13 hybrid (Combination → spec; Domain Transfer → compiler-debug-level analogue; Constraint Manipulation → ADD/REMOVE both fail gating-removal; Inversion → KILL seeds confirm alternatives fail).
- **Survivors tested:** 14/14 (5-test cycle on all).
- **Failure modes observed:** none of the 6.
- **Inherited Frame Audit:** central assumption + piece-level commitments all challenged; audit does NOT fire.
- **RE-TEST TRIGGER:** 1 firing (P6-C → confirms derivation notes captured in P1+P3).

### Production-task additional telemetry

| Piece | Mechanism log | Meta-decision classification | Piece-level Inversion compliance |
|---|---|---|---|
| P1 | [Domain Transfer:native+cross, Constraint Manipulation:ADD+REMOVE, Inversion:intervention-shape-axis] | meta-decision (a, b, d, e); property (v) fires | satisfied (P1-C names REORGANIZE/DO-NOTHING/REPAIR on intervention-shape axis) |
| P2 | [Absence Recognition:patch+redesign, Lens Shifting, Inversion:intervention-shape-axis] | meta-decision (d, e); property (v) fires | satisfied (P2-C names REORGANIZE/REPAIR on intervention-shape axis) |
| P3 | [Combination, Inversion:content-axis] | meta-decision (b, c) | satisfied (P3-C content-axis Inversion) |
| P4 | [Combination] | content-production | n/a |
| P5 | [content production] | content-production | n/a |
| P6 | [Combination, Extrapolation, Inversion:content-axis] | meta-decision (a, d) | satisfied (P6-C direction-reversal) |

**Verdict: PROCEED.**
- Sufficient coverage (4G + 3F).
- Convergence YES.
- All survivors tested.
- No failure modes.
- All 4 meta-decision pieces satisfy Piece-Level Inversion.
- P1 + P2 both satisfy Intervention-Shape-Axis Inversion (REORGANIZE / DO-NOTHING / REPAIR alternatives explicitly named).

---

## Handoff to Critique

Critique's task: evaluate the assembled finding shape against:
1. Whether Option 13 (ADOPTED) survives final scrutiny.
2. Whether the natural-availability filter distinction holds against "this is just gating with extra steps" objection.
3. Whether the D1 thresholds (20/30) are appropriately calibratable-labeled.
4. Whether the E5 deferral with LOW-fallback is graceful enough to ship.
5. Whether the pollution-framing-test finding is correctly attributed to desc.md (not overclaimed).
6. Whether the 15-option pros/cons table satisfies the user's explicit ask (depth + completeness).
7. Whether the downstream-decides pattern correctly distinguishes routeman's responsibility from downstream-consumer responsibility.
