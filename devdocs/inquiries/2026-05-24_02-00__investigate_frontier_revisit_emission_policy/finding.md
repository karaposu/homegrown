---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: investigate_frontier_revisit emission policy

## Question

**From the inquiry's branch document:**

What is routeman's emission policy for the INVESTIGATE FRONTIER and REVISIT movement-types BEFORE the project reaches Baldwin-cycle calibration maturity (N≥30 inquiries per discipline)?

The setting: routeman (the discipline that enumerates next-move proposals after a cycle completes) emits movement-typed routes. Two of those types — INVESTIGATE FRONTIER (a Progression Move, in routeman's automatic-emission set) and REVISIT (a Coordination Move with three sub-actions RESURRECT/INVALIDATE/REVERT, in routeman's judgment-emission set) — are seed-candidates for the Baldwin cycle (the project's autonomous inquiry-proposing mechanism documented in `docs/desc.md`). Baldwin activates only after the project reaches calibration maturity (N≥30 inquiries per discipline); the project is currently far below that threshold. The question: what does routeman do with these two types during the long pre-maturity period?

The source-question framed this as a tradeoff: emit and risk "polluting" Baldwin's eventual seed pool, gate and lose useful enumeration pre-maturity, or emit with confidence labels. The user explicitly asked for an exhaustive options list with pros and cons per option, dive-deep treatment, and a full-loop run on the question.

**Goal.** A SKILL.md-author-able policy that (a) enumerates all credible options with structural pros/cons, (b) commits one as the recommendation, (c) addresses the per-route-type breakdown (the two types may legitimately differ), (d) preserves routeman's "enumerate all possible next moves" core identity, (e) integrates with the per-route confidence field already in routeman's schema, (f) provides downstream-consumer-interpretation guidance for current and future consumers (human Selector now; Baldwin and /intuit when shipped; system Selector when autonomy rises), and (g) acknowledges that routeman's own pre-maturity judgment is itself uncalibrated.

## Finding Summary

- **Policy = Option 13 (Hybrid): confidence-graduated emission + per-route-type-split.** The two route types are treated asymmetrically because they are structurally asymmetric (different movement families, different autonomy classes); both use the existing per-route confidence field already committed in routeman's design.

- **INVESTIGATE FRONTIER rule:** emit ALWAYS when routeman's enumeration step identifies a frontier signal. Attach a per-route confidence label using the D1 scheme (LOW / MED / HIGH) graduated by per-discipline calibration count.

- **REVISIT rule:** emit when at least 3 prior cycles exist for the relevant scope (a "natural-availability filter," not policy-gating — REVISIT's three sub-actions operate on prior-cycle objects, so the filter reflects mechanism-honesty about what the type requires to operate). When emitted, attach the same D1 confidence label.

- **D1 confidence scheme:** three levels — LOW (per-discipline N < 20), MED (20 ≤ N < 30), HIGH (N ≥ 30, matching the Baldwin maturity gate in `docs/desc.md`). Thresholds calibratable at SKILL.md authoring time.

- **Per-discipline-N source: deferred** to SKILL.md authoring. First-ship fallback: all FRONTIER/REVISIT emissions get confidence=LOW until the source is decided. This is graceful degradation (LOW means "pre-maturity; treat with appropriate caution"), not signal loss.

- **First-Ship Operational Note (load-bearing for honesty):** under the first-ship LOW-fallback, the D1 scheme's variance is dormant — every emission carries LOW. The policy provides interpretation context (the label tells consumers "this is pre-maturity") rather than maturity-variance signal. Variance activates only when the per-discipline-N source ships. Consumers should re-attend to the field's variance at the transition; a future audit (the new per-consumer label-utility audit listed under Open Questions) checks whether the variance is actually informing consumer decisions when N approaches 30.

- **Pollution framing was tested and found currently overstated.** Direct read of `docs/desc.md` shows Baldwin's seed source is "hunch-pattern seeds" — i.e., /intuit Phase β+ hunches calibrated against Retrospective RC delta — NOT routeman emissions. Until Baldwin's spec when shipped commits routeman-consumption explicitly, the pollution risk is unverified. The defensive confidence-labeling above is preserved as future-proof insurance at zero cost (the confidence field already exists per the design memo); it costs nothing if the risk doesn't materialize.

- **Downstream-decides-via-metadata pattern.** Routeman emits with confidence labels; each downstream consumer (human Selector at the current autonomy level L0–L1; Baldwin when shipped; /intuit Phase β+ when shipped; system Selector at autonomy level L2+) applies its own filtering policy. Routeman does NOT gate based on assumptions about downstream behavior; it labels, and consumers decide.

- **Enumerate-all identity preserved.** Neither type is gated on policy grounds. Gating-based options (e.g., "emit nothing pre-maturity") failed the design memo's commitment that routeman enumerates the full next-move space. The REVISIT natural-availability filter is mechanism-honest about operands (the sub-actions require prior cycles to act on), not policy-gating.

- **Seven open follow-ups** (one added by Critique) carry the deferred sub-decisions to their right consumers. The most time-sensitive: the per-discipline-N source decision at SKILL.md authoring (the policy's variance signal is dormant until this settles).

## Finding

### Background context

Routeman is the discipline that runs after a cycle (a completed S-D-I-C or similar inquiry pass) to enumerate the next-move space — the set of candidate moves a user or autonomous agent might take next. Its core commitment is **enumerate-all**: every meaningful next-move type should appear in the enumeration. The design memo at `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` commits this identity, plus a 16-type movement taxonomy, a 12-auto / 4-judgment partition (12 types emit automatically; 4 types require explicit judgment), and a per-route confidence field that routeman attaches to every emission.

Two of those 16 types are the subject here: INVESTIGATE FRONTIER (Progression family per the taxonomy categorization at `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md`; auto-class per the partition) and REVISIT (Coordination family; judgment-class; three sub-actions RESURRECT / INVALIDATE / REVERT). Both are seed-candidates for Baldwin, the project's eventual autonomous-inquiry-proposing mechanism documented in `docs/desc.md`. Baldwin activates only after calibration maturity (N≥30 inquiries per discipline); the project is currently at L0 autonomy (human selector) with far fewer than 30 inquiries per discipline.

The source-question framed the policy choice as "emit and risk Baldwin pollution, or gate and lose enumeration." This finding rejects that framing partially: gating is rejected outright (it violates enumerate-all identity); pollution is reframed (it's not currently a verified risk per `docs/desc.md`).

### The recommended policy: Option 13 (Hybrid)

The recommended policy combines two mechanisms: **confidence-graduated emission** (every emission gets a per-route confidence label that varies by maturity) and **per-route-type-split** (FRONTIER and REVISIT use different per-type rules because they are structurally asymmetric). The hybrid was selected over Option 3 alone (confidence-graduated, single policy for both types) because the two types' upstream commitments differ in load-bearing ways (auto-vs-judgment class; Progression-vs-Coordination family; FRONTIER useful from cycle 1, REVISIT structurally meaningless without prior cycles).

The hybrid was selected over the other 14 candidates surfaced (full pros/cons table in the section below) because it is the unique candidate that honors all four central insights from Sensemaking: per-route-type asymmetry, enumerate-all identity preservation, the existing confidence field (no new schema infrastructure), and the pollution-framing test (defensive labeling without over-commitment to a specific Baldwin behavior).

### INVESTIGATE FRONTIER rule

- **Trigger:** routeman's enumeration step encounters a frontier signal — concretely, the sources mapped by the adaptive-guidance mechanism at `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` (Sensemaking Constraints + finding Open Questions are the canonical inputs).
- **Action:** ALWAYS emit a FRONTIER route. No gating; no skipping.
- **Confidence label:** apply the D1 scheme below.
- **Downstream interpretation:** consumer's responsibility (downstream-decides pattern below).

### REVISIT rule

- **Trigger:** routeman's enumeration step encounters a cross-cycle pattern that warrants RESURRECT, INVALIDATE, or REVERT — per the F-revisit feature in the design memo.
- **Natural-availability filter (first-ship default):** emit REVISIT only when at least 3 prior cycles exist for the relevant scope. The count source is deferred to SKILL.md authoring (candidate sources: the persistence model at `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` tracks per-Route status across invocations; alternatively, an inquiry-folder scan heuristic). The "≥3" threshold is calibratable.
- **Action when filter passes:** emit a REVISIT route (one of the three sub-actions per F-revisit logic).
- **Sub-action treatment at first ship:** RESURRECT, INVALIDATE, and REVERT all inherit REVISIT's policy uniformly. Per-sub-action differentiation is deferred — see the "Per-sub-action REVISIT split" open question.
- **Confidence label:** apply the D1 scheme below.
- **Downstream interpretation:** consumer's responsibility (downstream-decides pattern below).

### Why the REVISIT filter is NOT identity-violating gating

A reasonable objection: "the natural-availability filter is just gating with a polite name." The defense rests on a structural distinction:

- **Policy-gating** denies emission for **policy reasons** (e.g., "we don't trust LOW-confidence routes pre-maturity, so we suppress them"). This is what would violate enumerate-all identity.
- **Natural-availability filtering** denies emission for **structural reasons** (e.g., "the type's three sub-actions REQUIRE prior-cycle objects to operate on; with zero prior cycles, the operation has no operand"). REVISIT is structurally undefined when there are no prior cycles to resurrect, invalidate, or revert.

Routeman's enumerate-all commitment is about meaningful enumeration, not vacuous emission. Emitting a REVISIT route when no prior cycle exists for it to act on would not be enumeration — it would be noise. The filter is mechanism-honesty about the type's operands, not policy-driven suppression. The ≥3 threshold itself is heuristic (1 prior cycle is genuinely thin for cross-cycle pattern detection; 3 is the first-ship default judgment) and explicitly calibratable.

### Confidence scheme (D1)

- **Field:** the existing per-route `confidence` field in routeman's schema (committed in the design memo's "Assess priority and confidence per move" feature). No new schema element.
- **Values:** three levels — `LOW`, `MED`, `HIGH`.
- **Thresholds (first-ship defaults):**
  - `LOW`: per-discipline N < 20 (pre-maturity).
  - `MED`: 20 ≤ per-discipline N < 30 (transitional).
  - `HIGH`: per-discipline N ≥ 30 (mature; matches the Baldwin gate in `docs/desc.md`).
- **Calibration:** thresholds are revisable at SKILL.md authoring or later if practice surfaces calibration needs.
- **Per-discipline-N source: deferred** to SKILL.md authoring. The candidate sources are:
  1. Extend the existing `_meta_state.md` artifact (which the autonomy ladder commits at autonomy level L1+).
  2. Introduce a new `docs/discipline_calibration.md` sidecar.
  3. Count inquiry-folder entries with a discipline-tag filter (heuristic).
- **First-ship fallback (until the source is decided):** all FRONTIER and REVISIT emissions receive `confidence=LOW`. Downstream consumers receive a consistent conservative signal and can filter accordingly.

### First-Ship Operational Note (load-bearing for honesty)

Under the first-ship fallback, the D1 scheme's three-level variance is **dormant** — every FRONTIER and REVISIT emission carries `LOW`. This is an honest description of the policy's actual first-ship behavior, not a flaw:

- **What the LOW label does at first ship:** provides **interpretation context** to downstream consumers — telling them "this emission is pre-maturity; treat with appropriate caution." The signal is consistent and interpretable even when it doesn't vary.
- **What the LOW label does NOT do at first ship:** provide maturity-variance signal that distinguishes one route from another. Variance only activates when the per-discipline-N source ships and labels begin to vary across emissions.
- **Why this is the right tradeoff:** the alternative (delaying the policy until the source ships) would either gate enumerate-all in the meantime (identity-violating) or ship an under-specified policy and hope for the best (operationally worse). The fallback ships the labeling infrastructure now so it's already in place when the source decision arrives.
- **Risk to watch:** a consumer-training pathology where human Selectors at L0 see "LOW" on every route, learn to ignore the field, and continue ignoring it after labels start varying. The mitigation is the new per-consumer label-utility audit listed under Open Questions, which fires when the per-discipline-N source ships and validates that the variance is actually informing decisions.

### Two-epoch framing (emergent insight)

The policy's value is structurally divided into two epochs, and acknowledging the split is part of the policy's honesty:

- **Epoch 1 — first-ship (fallback active):** the policy's value is (a) the defensive labeling infrastructure (labels exist, even if flat), (b) the explicit identity preservation (no gating-options accepted), (c) the per-route-type rules in routeman's SKILL.md. The maturity-variance signal is dormant. Pollution-prevention is preemptive insurance.
- **Epoch 2 — post-source (per-discipline-N source ships):** the labels begin to vary across emissions. Downstream consumers can act on the variance. The per-consumer label-utility audit (open question below) becomes operable. If Baldwin ships in this epoch with a confidence-filter, the labels become Baldwin's primary filtering signal.

The transition between epochs is a load-bearing event for the policy. The "Baldwin spec coordination" open question carries the trigger for that transition's sequencing if Baldwin ships before the per-discipline-N source is settled.

### The pollution-framing test (central reframing)

The source-question presupposed that pre-maturity emissions would "pollute" Baldwin's seed quality. Sensemaking tested this assumption by direct read of `docs/desc.md`. Verbatim from desc.md:

> "Baldwin seeds never bypass the SIC loop. Hunch-pattern seeds produce inquiry PROPOSALS that enter the normal E → S → D → I → C cycle. ... Seed-generation activates only after calibration maturity (N ≥ 30 per discipline)."

The named seed source is **hunch-pattern seeds** — i.e., /intuit Phase β+ hunches calibrated against Retrospective RC delta. Routeman emissions are NOT named as a Baldwin seed source in the current desc.md text.

This produces the test result:

- **HIGH confidence that the framing is currently overstated.** Per the text, Baldwin doesn't consume routeman directly; its seed source is /intuit hunches.
- **MEDIUM confidence that the framing is permanently overstated.** Baldwin's spec hasn't shipped yet. When it ships, it may commit a different seed source — possibly including routeman emissions explicitly. The MEDIUM uncertainty is honest.

The defensive labeling (the D1 scheme above) is preserved as **future-proof insurance**: the per-route confidence field already exists, so attaching labels costs nothing; if Baldwin's spec when shipped commits routeman-consumption with a confidence-filter, the labels are already in place; if Baldwin's spec when shipped commits non-consumption, the labels still inform other consumers (human Selector now; system Selector at L2+; /intuit when shipped). The MEDIUM uncertainty is structurally cheap to hedge against.

### Downstream-decides-via-metadata pattern

Routeman emits with metadata (the per-route confidence label). Each downstream consumer applies its own filtering policy:

- **Human Selector (current state, autonomy levels L0–L1):** reads the confidence label as one input to triage judgment. At first ship under the fallback, the consistent LOW signal informs interpretation context (this is pre-maturity); when variance activates, the human can use the variance to triage by confidence.
- **Baldwin cycle (post-N≥30; not yet shipped):** IF Baldwin's spec when shipped commits routeman-consumption, its filtering policy is part of Baldwin's spec, not routeman's. Routeman provides labels; Baldwin's filter uses them. Routeman is not coupled to Baldwin's specifics.
- **/intuit Phase β+ (when shipped):** consumes per /intuit's spec.
- **System Selector at autonomy level L2+ (per `cognitive_harness/autonomy/references/autonomy_ladder.md`):** its filtering policy is part of the system-Selector spec.

The contrarian alternative — routeman pre-filters its emissions based on assumed downstream policies — was rejected because (a) it requires Baldwin's spec to exist (which it doesn't), (b) it couples routeman to Baldwin's specifics, and (c) it violates the project's downstream-decides pattern visible across the codebase (e.g., the autonomy register's read-convention being consumer-specific per `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md`).

### Exhaustive options table (the user's explicit deliverable)

The user asked: "lets dive deep into this one...and list what are our options and what are pluses and minuses of them." Surfacing enumerated 15 options; below is the per-option pros/cons/verdict/reason table. Option 13 is the recommended adoption; the table shows the full field of considered alternatives.

| # | Option | Description | Pros | Cons | Verdict | Reason |
|---|---|---|---|---|---|---|
| 1 | Always-emit | No gating; no labels | Simplest; preserves enumerate-all | No maturity signal; downstream can't distinguish pre-maturity from post-maturity | KILL | Loses maturity-awareness signal that adds zero cost via the existing confidence field |
| 2 | Gate-until-maturity | Emit nothing pre-maturity | Strongest pollution prevention | **Violates enumerate-all identity** (the discipline's core commitment) | KILL | Identity-violating; pollution risk currently overstated per the pollution-framing test on desc.md |
| 3 | Confidence-graduated | Emit always; per-route confidence label graduated by maturity | Preserves enumeration; uses existing confidence field | Treats FRONTIER and REVISIT identically; doesn't honor per-route-type asymmetry alone | KILL as standalone (absorbed into Option 13 hybrid) | Single-policy treats the two types identically; the asymmetry warrants per-type split |
| 4 | Per-route-type-split | FRONTIER and REVISIT use different per-type rules | Honors structural asymmetry (12/4 partition; family-split in the taxonomy categorization) | Doesn't address pre-maturity confidence per route alone | KILL as standalone (absorbed into Option 13 hybrid) | Needs combining with maturity-aware confidence |
| 5 | Per-sub-action REVISIT split | RESURRECT / INVALIDATE / REVERT have different per-action policies | Finest granularity | Over-categorizes at first ship; complexity-cost exceeds benefit | DEFER | Revival trigger: if practice surfaces per-sub-action asymmetry (Per-sub-action REVISIT split open question) |
| 6 | Adaptive emission rate | Cap emissions per movement-type pre-maturity; lift cap as N approaches 30 | Limits volume rather than gating | Arbitrary cap value; calibration needed; added complexity | KILL | Confidence-graduated achieves volume-control implicitly via downstream filtering |
| 7 | Per-discipline-aware policy | Emit FRONTIER / REVISIT routes conditioned on per-discipline N | Honors N≥30 per-discipline granularity directly | Requires per-discipline-N source not yet specified at first ship | DEFER (absorbed into Option 13's per-discipline-N source deferral) | Source decision deferred to SKILL.md authoring (Per-discipline-N source open question) |
| 8 | Snapshot-and-replay | Emit always; quarantine emissions; review at maturity | Auditable; preserves enumeration | Quarantine infrastructure cost (storage + review process); reviewers needed | KILL | Cost too high for an unverified pollution risk; defensive labels are the lighter mechanism |
| 9 | Human-triage-required pre-maturity | Emit always; mark "human-judgment-required" | Couples emission to autonomy register | Redundant with L0–L1 human-Selector default per the autonomy ladder | KILL | Human triage is already the L0–L1 default; an explicit marker adds noise |
| 10 | Downstream-decides via metadata | Routeman labels; consumers decide their own filtering | Maximum delegation; minimum coupling | Requires labels to exist (Option 3 substrate) | KILL as standalone (absorbed into Option 13's downstream-decides pattern) | Labels need defining (Option 3 supplies that substrate) |
| 11 | No-special-treatment + downstream-discovers | Like Option 1; consumers discover patterns over time | Most minimal commitment | Loses maturity signal; defers all complexity onto consumers | REJECT | Loses load-bearing maturity signal |
| 12 | Defer entirely | Don't ship a policy; SKILL.md authoring decides at that time | Honest about uncertainty | Re-runs the option-evaluation work at SKILL.md authoring; loses Sensemaking insights | REJECT | Fails the SKILL.md-author-able criterion |
| **13** | **Hybrid (Option 3 + Option 4)** | **Confidence-graduated + per-route-type-split** | **Honors per-route-type asymmetry + maturity-awareness + existing confidence field + enumerate-all identity** | **Two per-type rules in SKILL.md (modest added complexity)** | **ADOPTED** | **Survives all structural tests; Option 3 alone misses the asymmetry; Option 4 alone misses maturity** |
| 14 | Hybrid (Option 3 + Option 10) | Confidence-graduated + downstream-decides | Routeman labels; consumers decide | Doesn't honor per-route-type asymmetry | KILL | Missing per-route-type-split; Option 13 dominates |
| 15 | Hybrid (Option 4 + Option 7 + Option 10) | Per-type + per-discipline-aware + downstream-decides | Maximum sophistication | Over-engineered; high implementation cost; requires per-discipline-N source NOW | KILL | Over-engineered for first ship; per-discipline-N source not ready |

## Inherited Commitments Re-test

**Test methodology note.** Each verdict below cites the mechanism by which the commitment was re-tested or carried. Verdicts marked PRESERVED-VERBATIM indicate the commitment is unchanged and re-tested by virtue of this finding's content respecting it without modification. Verdicts marked TESTED-AND-FOUND-PROTECTIVE indicate the commitment was tested via direct read of the source artifact during Sensemaking (the load-bearing quote is captured in the Sensemaking output's Key Insights section, specifically the desc.md pollution-framing test). Verdicts marked PRESERVED-AND-USED indicate the commitment was leveraged operationally by this finding.

| Prior / Spec | Commitment | Re-test status | Evidence / Impact |
|---|---|---|---|
| Routeman design memo (`devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`) | Enumerate-all identity (routeman enumerates the full next-move space; gating violates) | RE-TESTED | Option 13 preserves; gating-based options (Options 2, 6) explicitly rejected with reasoning citing identity. The REVISIT natural-availability filter is distinguished from policy-gating via the mechanism-vs-policy distinction. |
| Routeman design memo | Per-route confidence field (committed in "Assess priority and confidence per move" feature) | RE-TESTED — PRESERVED AND USED | D1 scheme uses the existing field; no new schema element introduced. |
| Routeman design memo | 12-auto / 4-judgment partition (REVISIT in the judgment-class set per canonical /navigation) | RE-TESTED — PRESERVED | Per-route-type-split honors REVISIT's judgment-class status; FRONTIER's auto-class status preserved. |
| Routeman design memo | F-revisit feature (RESURRECT / INVALIDATE / REVERT sub-actions) | RE-TESTED — PRESERVED + INHERITED | Sub-actions uniformly inherit REVISIT's policy at first ship; per-sub-action split deferred to the Per-sub-action REVISIT split open question. |
| Frontier questions finding (`devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`) | Question 10's Tier-2 status and candidate resolution path (default policy + revival trigger) | RE-TESTED | This inquiry resolves Question 10 with a specific design (RESOLVED-WITH-DESIGN); the candidate resolution path's "default policy + revival trigger" structure is preserved (D1 scheme with calibratable thresholds; per-discipline-N source decision triggered at SKILL.md authoring). |
| Adaptive guidance mechanism (`devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`) | Per-movement-type Stage-1 mapping (INVESTIGATE FRONTIER ← Sensemaking Constraints + finding Open Questions; REVISIT ← prior-cycle critique + cross-cycle meta-reasoning) | RE-TESTED — PRESERVED AND COMPATIBLE | Mapping unchanged; this finding adds emission-policy + confidence labeling on top of the mapping. The policy decides whether to emit; the mapping decides how to emit. |
| Route taxonomy categorization (`devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md`) | INVESTIGATE FRONTIER in Progression Moves family; REVISIT in Coordination Moves family with `has_sub_actions: true` | RE-TESTED — PRESERVED AND USED | Per-route-type-split honors the family-level distinction; the asymmetry argument for the hybrid policy cites this categorization as structural grounding. |
| Autonomy register (`devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md`) | Register provides current meta-loop autonomy level (different axis from calibration maturity) | RE-TESTED — DISTINGUISHED FROM | Policy uses per-discipline N (calibration maturity), explicitly distinguished from autonomy level. The two are different axes (autonomy = role allocation; maturity = inquiry count). The distinction is load-bearing for the policy's design. |
| Persistence model (`devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`) | Per-Route status tracking via `_navig.md` ledger | RE-TESTED — PRESERVED AND USED | The persistence model is a candidate source for REVISIT's prior-cycle count (one of the operational options listed for the deferred source decision). |
| Canonical /navigation spec (`cognitive_harness/navigation/references/navigation.md`) | INVESTIGATE FRONTIER and REVISIT as 16-type members; route-card schema with confidence field; 12-auto / 4-judgment partition's source | RE-TESTED — PRESERVED VERBATIM | Type definitions unchanged; this finding adds policy and confidence-labeling on top without modifying the canonical types. |
| `docs/desc.md` (consciousness-gradient / Baldwin-cycle endpoint) | Baldwin's seed source = /intuit Phase β+ hunches calibrated against Retrospective RC delta; seed-generation activates at N≥30 per discipline | RE-TESTED — TESTED-AND-FOUND-PROTECTIVE | The pollution-framing test was conducted in Sensemaking by direct read of desc.md. The verbatim text shows the named seed source is hunch-patterns, not routeman. Finding currently overstated; defensive labeling preserved as future-proof insurance. The maturity gate (N≥30) is the basis for the D1 scheme's HIGH threshold. |

## Next Actions

### MUST

- **What:** Author the routeman SKILL.md with the emission policy committed in this finding (Option 13 hybrid; per-type rules for INVESTIGATE FRONTIER and REVISIT; D1 confidence scheme with first-ship LOW-fallback; natural-availability filter for REVISIT at ≥3 prior cycles; downstream-decides pattern).
  - **Who:** SKILL.md authoring inquiry (next inquiry in the routeman chain).
  - **Gate:** condition-bound — when routeman SKILL.md authoring begins.
  - **Why:** the policy must be encoded in the SKILL.md before routeman can be invoked with this behavior; the policy is the artifact's primary contribution.

- **What:** Decide the per-discipline-N source for the D1 confidence scheme (the deferred source decision; candidate sources: extend `_meta_state.md`, introduce `docs/discipline_calibration.md` sidecar, or use an inquiry-folder count heuristic).
  - **Who:** SKILL.md authoring inquiry, possibly delegating to a small dedicated inquiry.
  - **Gate:** condition-bound — at SKILL.md authoring time, OR earlier if Baldwin's spec ships with a confidence-filter that depends on label variance.
  - **Why:** the D1 scheme's variance is dormant until this source ships; the policy provides interpretation context but not maturity-variance signal until the source decision lands.

### COULD

- **What:** Audit per-consumer label utility at calibration maturity — verify that the D1 scheme's variance is actually informing consumer decisions (especially the human Selector at the L0–L1 autonomy levels) when N approaches 30 and labels begin to vary.
  - **Who:** observable monitoring after the per-discipline-N source ships; could be a small follow-up inquiry.
  - **Gate:** observable — when per-discipline N approaches 30 for any discipline; or when labels begin to vary meaningfully after the source decision lands.
  - **Why:** mitigates the consumer-training pathology risk (consumers learning to ignore a flat-signal field and continuing to ignore it after variance activates).
  - **Depends-on:** MUST item "per-discipline-N source decision." This COULD is GATED — do not act until the source ships and labels begin to vary.

- **What:** Coordinate with Baldwin's spec when Baldwin's spec is being written. Validate or revise the pollution-framing-test finding against Baldwin's committed seed source.
  - **Who:** Baldwin-spec inquiry when scheduled.
  - **Gate:** condition-bound — when Baldwin's spec is being written. If Baldwin's spec ships BEFORE the per-discipline-N source is settled, prioritize the source decision immediately so labels can vary in time for Baldwin's filter.
  - **Why:** the defensive labeling was preserved against the possibility that Baldwin's spec when shipped would commit routeman-consumption; if Baldwin's spec when shipped commits non-consumption, the defensive labeling still informs other consumers but the urgency framing changes.
  - **Depends-on:** Baldwin's spec being written (currently no scheduled date). The dependency is on an external event; the COULD remains a coordination action whenever that event fires.

### DEFERRED

- **What:** Per-sub-action REVISIT differentiation — RESURRECT, INVALIDATE, REVERT may need different per-action policies if practice surfaces asymmetry in their behavior.
  - **Gate:** observable — when practice surfaces asymmetric behavior or asymmetric reception across the three sub-actions.
  - **Why (if revived):** finer-grained policy per sub-action; possibly lifting REVISIT's natural-availability filter for one sub-action while keeping it for another.

- **What:** Routeman-self-N as a second confidence axis (track routeman's own enumeration calibration separately from per-discipline N).
  - **Gate:** condition-bound — when LAYER-2 audit infrastructure ships (currently tracked as Question 4 in the frontier questions finding).
  - **Why (if revived):** addresses the meta-uncertainty that routeman's pre-maturity judgment is itself uncalibrated; allows a second-axis confidence signal that informs consumers of both per-discipline maturity AND routeman's own calibration on the type.

- **What:** REVISIT threshold recalibration (the ≥3 prior cycles is a first-ship default).
  - **Gate:** observable — when practice surfaces over-emission or under-emission of REVISIT routes at the ≥3 threshold (e.g., the REVISIT-at-N=3 brittleness scenario where a thin cross-cycle signal produces unhelpful REVISIT routes).
  - **Why (if revived):** the threshold is heuristic; adjusting may reduce noise or expand utility.

- **What:** Generalization to other calibration-sensitive types — could other movement types (e.g., TEST, CONSOLIDATE; both Coordination Moves per the taxonomy categorization) be calibration-sensitive in the same way?
  - **Gate:** observable — research frontier; revival when practice surfaces calibration-sensitivity for other types.
  - **Why (if revived):** the per-route-type asymmetry argument might generalize; current scope deliberately limited to the two types named in the source question.

## Reasoning

The 15 surfaced options were evaluated against 13 dimensions extracted from Sensemaking — six default (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) and seven project-specific (Enumerate-all identity preservation, Pollution-framing-test integrity, Per-route-type asymmetry honoring, Operation-parsimony, Downstream-decides modularity, Layer commitment integrity, Phase-fit at L0). Two dimensions were weighted CRITICAL: Correctness and Enumerate-all identity preservation.

**Why Option 13 (the recommended hybrid) over its closest alternatives.** Option 3 (confidence-graduated alone) treats the two route types identically; it loses the structural information present in the upstream commitments (the auto-vs-judgment partition; the Progression-vs-Coordination family-split in the taxonomy categorization). Option 4 (per-route-type-split alone) honors the asymmetry but doesn't provide maturity-aware labeling. Option 13 combines both: it honors the structural asymmetry AND provides maturity-aware labels using the existing confidence field. The combination passes all four central Sensemaking insights (per-route-type asymmetry, enumerate-all identity, existing confidence field, pollution-framing test) where each individual option fails at least one.

**Why gating-based options were rejected.** Option 2 (gate-until-maturity) violates the enumerate-all identity that the design memo commits as routeman's core. The pollution-framing test removed the primary justification for gating: per direct read of `docs/desc.md`, Baldwin's seed source is hunch-patterns from /intuit Phase β+, not routeman emissions. The pollution risk is unverified, and gating destroys the discipline's identity in exchange for protection against an unverified risk — a bad trade.

**Why the REVISIT natural-availability filter is NOT a gating loophole.** The objection "the filter is just gating with extra steps" was the strongest prosecution against the recommended policy. The defense rests on a structural distinction: gating denies emission for policy reasons (judgment about whether to emit); natural-availability denies emission for structural reasons (the type's operands don't exist). REVISIT's three sub-actions operate on prior-cycle objects; with zero prior cycles, the operation has no operand. The filter is mechanism-honesty about the type's operands, not policy-gating. The ≥3 threshold is a calibratable heuristic for "enough cross-cycle data to operate meaningfully."

**Why the snapshot-and-replay alternative (Option 8) was rejected.** Quarantine infrastructure (storage + review process) adds two operational features for a problem (pollution) that defensive labeling addresses for zero cost (the confidence field already exists). The cost-benefit analysis kills Option 8: the defensive labels are the lighter mechanism.

**Why the contrarian "routeman-decides via Baldwin spec" alternative was rejected.** Pre-filtering routeman's emissions based on Baldwin's spec (a) requires Baldwin's spec to exist (it doesn't), (b) couples routeman to Baldwin's specifics (changes when Baldwin changes), and (c) violates the project's downstream-decides pattern visible across the codebase. Routeman labels; consumers decide.

**Why the per-discipline-N source was deferred.** The candidate sources (extend `_meta_state.md`, introduce a sidecar file, use an inquiry-folder count heuristic) are each operationally tractable. The choice between them depends on (a) what `_meta_state.md` looks like when it ships (currently the autonomy ladder commits it at L1+ but it doesn't exist at L0), (b) whether the project wants a calibration sidecar as a first-class artifact, (c) whether the heuristic is reliable enough. These are SKILL.md-authoring-time decisions, not policy-memo decisions. The fallback (LOW for all emissions) is graceful and operational.

**Why the LOW-flat-signal at first ship is acceptable.** The alternative (delaying the policy until the per-discipline-N source ships) would force routeman to either gate enumerate-all in the meantime (identity-violating) or ship an under-specified policy (operationally worse). The fallback ships the labeling infrastructure now; variance activates when the source decision arrives. The risk (consumer-training pathology) is real but bounded by the consumer's contextual reading at L0, and the per-consumer label-utility audit (under Open Questions) is the explicit mitigation.

**Why Question 10 in the frontier questions finding becomes RESOLVED-WITH-DESIGN.** The candidate resolution path in the source-question allowed for either "track in SKILL.md as policy documentation with revival trigger" or "settle the policy at SKILL.md authoring time with a default that ships and is auditable." This inquiry produces the design that SKILL.md authoring can adopt without re-running the option evaluation — meeting the second branch of the candidate path.

## Open Questions

### Monitoring

- **Per-consumer label utility audit (the new open question added by Critique).** Observable after the per-discipline-N source ships AND labels begin to vary across emissions. Verify that the variance is actually informing consumer decisions, especially the human Selector at autonomy levels L0–L1. Mitigation for the consumer-training pathology risk.

- **REVISIT threshold calibration.** Observable when practice surfaces over- or under-emission of REVISIT routes at the ≥3 threshold. The ≥3 default is a first-ship heuristic; recalibrate if practice shows it's miscalibrated.

- **Per-sub-action REVISIT differentiation.** Observable when practice surfaces asymmetric behavior or reception across RESURRECT, INVALIDATE, and REVERT.

### Blocked

- **Baldwin spec coordination.** Cannot be answered until Baldwin's spec is written. The defensive labeling preserves the policy's value against either outcome (Baldwin commits routeman-consumption or not). Sequencing risk: if Baldwin's spec ships BEFORE the per-discipline-N source is settled, prioritize the source decision immediately so labels can vary in time for Baldwin's filter.

- **Routeman-self-N as a second confidence axis.** Cannot be answered until LAYER-2 audit infrastructure ships (currently tracked as Question 4 in the frontier questions finding). The single-axis confidence at first ship is the deliberate choice; the second axis is a future enhancement.

### Research Frontiers

- **Generalization to other calibration-sensitive types.** No known path; requires empirical observation of whether other movement types (e.g., TEST, CONSOLIDATE) exhibit calibration-sensitivity similar to FRONTIER and REVISIT. Current scope deliberately limited to the two types named in the source question; the per-route-type asymmetry argument might or might not generalize.

### Refinement Triggers

- **First-Ship Operational Note refinement.** The note's framing (LOW-flat acknowledged as a feature, not a bug; variance activates when source ships) reopens when per-consumer label utility audit results come back; specifically, if the audit shows consumers ARE ignoring labels post-source-ship, the note's mitigation guidance needs to be strengthened.

- **Defensive labeling justification.** Reopens when Baldwin's spec ships and commits its seed source. If Baldwin's spec commits routeman-consumption with a confidence-filter, the defensive labeling becomes load-bearing rather than insurance; the policy may need to formalize the labels as Baldwin's primary filter input. If Baldwin's spec commits non-consumption, the defensive labeling remains optional insurance for other consumers; the policy's emphasis can shift.

- **REVISIT natural-availability filter justification.** Reopens if (a) the ≥3 threshold proves wrong in practice (over-emission at N=3 or under-emission as N grows), or (b) the structural argument (the filter is mechanism-honest, not gating) is challenged by a future inquiry that finds the distinction insufficient.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Question 10 — What is the emission policy for INVESTIGATE FRONTIER and REVISIT movement-types before Baldwin-cycle calibration maturity?

The Baldwin-cycle's seed-generation maturity gate is documented in `docs/desc.md`: seed-generation activates after the project reaches calibration maturity (N≥30 inquiries per discipline). Routeman's INVESTIGATE FRONTIER and REVISIT movement-types are seed-candidates — they generate next-move proposals that can become Baldwin-cycle seeds. The intersection of these two endgame mechanisms is unspecified: does routeman emit these types pre-maturity (polluting the Baldwin cycle's seed quality), gate them at N≥30 (losing useful next-move types until maturity arrives), or emit them with appropriate confidence labels at low maturity?

**Why this is a frontier.** No current answer: the intersection between Baldwin maturity and routeman's enumeration is not articulated. Gating: per the accommodation rule, the SKILL.md must commit to a policy that works both pre-maturity and post-maturity; a silent default would either over-emit or under-emit. Net-new: the design memo did not articulate this intersection.

**What it gates.** The SKILL.md's behavior for INVESTIGATE FRONTIER and REVISIT types. Tier 2 because the SKILL.md can ship with a default policy (always emit with confidence-LOW pre-maturity; promote to confidence-MED or HIGH as maturity advances) and a note documenting the policy for later review.

**Hardness.** Breadth medium (affects 2 of 16 movement types). Depth medium (a policy choice plus a threshold). Articulation high (the intersection between Baldwin maturity and routeman's enumeration was not articulated).

**Candidate resolution path.** Track in the SKILL.md as policy documentation. Revival trigger: when the project's inquiry count approaches N=30 per discipline (calibration maturity threshold), re-evaluate the policy. An acceptable alternative: settle the policy at SKILL.md authoring time with a default that ships and is auditable.

lets dive deep into this one...and list what are our options and what are pluses and minuses of them,   make sure you run the full loop at full capacity for this question
```

</details>
