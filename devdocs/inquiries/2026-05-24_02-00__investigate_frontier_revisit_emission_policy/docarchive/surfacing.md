# Surfacing — investigate_frontier_revisit emission policy

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/_branch.md`

## Mode + Entry Point

- **Territory-type-mode:** `possibility-dominant with artifact component`. Most items are CANDIDATE policy options + tradeoff considerations to be generated. Artifact component: design memo (routeman's identity, F-revisit, 12/4 partition, confidence field); 24-01-30 categorization (INVESTIGATE FRONTIER in Progression, REVISIT in Coordination); 24-01 adaptive-guidance (per-movement-type Stage 1 mapping); 24-40 autonomy register; 24-00 persistence model; desc.md Baldwin-cycle maturity gate; canonical /navigation 16-type taxonomy.
- **Entry point:** `signal-first`.
- **Territory specification:** `explicit-bounded`. Edges: the 8 candidate policy axes (always-emit, gate, confidence-graduate, per-type-split, per-sub-action-split, adaptive-rate, per-discipline-aware, snapshot-replay, human-triage, downstream-decides, no-special-treatment, defer-entirely, hybrid); the 5 priors + canonical + desc.md; routeman's structural commitments (enumerate-all identity; confidence field; F-revisit feature; 12/4 partition); the Baldwin cycle mechanism (per desc.md); per-discipline-N tracking mechanism (per autonomy_ladder.md `_meta_state.md`); failure modes.
- **Purpose template:** items qualify if they speak to (a) existing constraints; (b) candidate policy options; (c) per-route-type differentiation; (d) per-sub-action differentiation for REVISIT; (e) confidence-labeling schemes; (f) per-discipline-N tracking; (g) downstream-consumer awareness (Baldwin, /intuit, human); (h) routeman's own pre-maturity meta-uncertainty; (i) pollution-vs-gating tradeoff; (j) revival triggers; (k) interactions with priors; (l) failure modes / risks; (m) structural framing tests (does Baldwin actually consume routeman emissions, or is the pollution framing overstated?).

## Traversal Trace

### Region A — Existing constraints (artifact)

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 1 | A | **desc.md Baldwin mechanism**: "Baldwin seeds never bypass the SIC loop. Hunch-pattern seeds produce inquiry PROPOSALS that enter the normal E → S → D → I → C cycle. ... Seed-generation activates only after calibration maturity (N ≥ 30 per discipline)." | core | HIGH | **Verified by direct read**. Key implications: (1) "Hunch-pattern seeds" = /intuit Phase β+ hunches calibrated by Retrospective RC delta; (2) Baldwin seeds arrive as INQUIRY PROPOSALS to E→S→D→I→C, not as Route Map entries; (3) Routeman's emissions and Baldwin seeds are POTENTIALLY DIFFERENT seed channels. |
| 2 | A | **The pollution framing in Q10 may be overstated.** Routeman emissions = next-move proposals consumed by selector (human at L0-L1). Baldwin seeds = inquiry proposals from /intuit hunches via Retrospective RC delta. Whether routeman's INVESTIGATE FRONTIER / REVISIT emissions DIRECTLY feed Baldwin's seed pool is NOT SPECIFIED in desc.md. | core | HIGH | **Critical surfacing insight.** Q10's "polluting Baldwin's seed quality" assumes routeman → Baldwin direct consumption; this assumption is not validated. The pollution risk may be smaller than the question frames. |
| 3 | A | **Routeman's "enumerate all possible next moves" identity** (design memo, line 109). | core | HIGH | Gating ANY movement type without strong reason VIOLATES this identity commitment. This is a strong constraint on policies that gate (Option 2). |
| 4 | A | **Routeman's confidence field** (design memo Feature: "Assess priority and confidence per move"). | core | HIGH | The mechanism for confidence-graduated emission ALREADY EXISTS in the schema. Confidence-labeling uses an existing attribute, not a new one. |
| 5 | A | **Design memo's 12-auto/4-judgment partition**: REVISIT is one of the 4 judgment-required types per canonical (along with REFRAME, DIFFERENT APPROACH, CONSOLIDATE). INVESTIGATE FRONTIER is in the 12-auto set. | core | HIGH | **Per-route-type asymmetry confirmed.** REVISIT requires human judgment at L0-L4; INVESTIGATE FRONTIER is auto-derivable. The emission policy may legitimately differ. |
| 6 | A | **REVISIT's sub-actions** (RESURRECT / INVALIDATE / REVERT) — per design memo Feature F-revisit. | sub | HIGH | Each sub-action has a different operation: RESURRECT brings back killed direction; INVALIDATE marks survived direction dead; REVERT undoes a refinement. Pollution profile may differ per sub-action. |
| 7 | A | **F-revisit (cross-cycle REVISIT)** operates on prior-cycle outcomes, not current-cycle output. | sub | HIGH | Pre-maturity: prior cycles are themselves uncalibrated, so REVISIT may compound the uncertainty. INVESTIGATE FRONTIER operates on current-cycle frontier signals — less compounded. |
| 8 | A | **24-01-30 categorization**: INVESTIGATE FRONTIER in Progression Moves family (forward direction, L2-baseline autonomy tier); REVISIT in Coordination Moves family (backward direction, L3-cross-cycle autonomy tier). | core | HIGH | **Different families confirm per-route-type-split hypothesis**. Progression Moves are baseline / always-available; Coordination Moves are cross-cycle / context-dependent. |
| 9 | A | **24-01 adaptive guidance per-movement-type mapping**: INVESTIGATE FRONTIER anchors to sensemaking Constraints + finding Open-Questions; REVISIT anchors to prior-cycle critique + cross-cycle meta-reasoning. | sub | HIGH | Both types' anchor sources are FILE-MEDIATED and don't depend on Baldwin. Pre-maturity emission can produce well-anchored routes. |
| 10 | A | **24-40 autonomy register vs calibration maturity**: autonomy level (L0-L5) is the META-LOOP'S role-allocation axis; calibration maturity (N≥30 per discipline) is the inquiry-count axis. They are CORRELATED (higher levels presume more maturity) but DIFFERENT axes. | core | HIGH | **Don't conflate.** A policy keyed to autonomy level is not the same as one keyed to maturity. Both axes may inform the policy. |
| 11 | A | **24-00 persistence model**: `_navig.md` ledger tracks per-Route status across invocations. | sub | MED | Could carry per-route confidence-evolution log if needed. |
| 12 | A | **Per-discipline-N tracking source**: not yet specified in the project. Could live in `_meta_state.md` (per autonomy_ladder.md's L1+ artifact) or be inferred from inquiry-folder count under `devdocs/inquiries/`. | core | HIGH | **Significant missing infrastructure.** Per-discipline-aware policies (Options 4-7) require this. |
| 13 | A | **/intuit Phase β+ not yet shipped** — Baldwin's actual seed source. | sub | HIGH | The pollution concern is forward-looking (when /intuit β + Baldwin both ship); not immediate. |
| 14 | A | **autonomy_ladder.md L1+ requires `_meta_state.md`**: visited-path list with selection rationales. Could be extended to per-discipline N. | sub | MED | Adjacent existing infrastructure for per-discipline-N tracking. |

### Region B — Candidate policy options (possibility — exhaustive enumeration)

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 15 | B | **Option 1: Always-emit** (no gating; no special labeling; FRONTIER + REVISIT treated like any other type) | core | HIGH | Simplest; preserves enumerate-all identity. Risks pollution if Baldwin directly consumes (assumption tested in #2). |
| 16 | B | **Option 2: Gate-until-maturity** (emit zero FRONTIER + REVISIT routes until N≥30) | core | HIGH | Strongest pollution-prevention. **Violates routeman's enumerate-all identity.** Per item #3, this is a structural rejection. |
| 17 | B | **Option 3: Confidence-graduated emission** (source-question's suggested default: emit always; per-route confidence scaled by maturity: LOW pre-maturity, MED at N=20+, HIGH at N=30+) | core | HIGH | Preserves enumerate-all; uses existing confidence field; defers filtering to downstream. |
| 18 | B | **Option 4: Per-route-type split** (INVESTIGATE FRONTIER and REVISIT use DIFFERENT policies; supported by item #5 12/4 partition + item #8 family-split) | core | HIGH | Honors structural asymmetry between Progression (FRONTIER) and Coordination (REVISIT). |
| 19 | B | **Option 5: Per-sub-action split for REVISIT** (RESURRECT / INVALIDATE / REVERT have different policies based on each sub-action's pollution profile) | sub | MED | Finest-grained per-sub-action handling. May over-categorize for marginal benefit. |
| 20 | B | **Option 6: Adaptive emission rate** (cap pre-maturity emissions per Route Map: e.g., max 2 FRONTIER routes; lift cap as N→30) | sub | MED | Limits volume rather than gating type. Cap value is arbitrary; calibration needed. |
| 21 | B | **Option 7: Per-discipline-aware policy** (emit FRONTIER/REVISIT routes targeting a specific discipline only when THAT discipline's N≥30 OR with discipline-specific confidence) | sub | HIGH | Honors "N≥30 PER DISCIPLINE" granularity. Requires per-discipline-N tracking infrastructure (#12). |
| 22 | B | **Option 8: Snapshot-and-replay** (emit FRONTIER + REVISIT routes always but write them to a quarantine file/section; at N≥30, review snapshot and selectively promote to active route-map) | sub | MED | Auditable; preserves enumeration; defers pollution decision. Requires snapshot infrastructure. |
| 23 | B | **Option 9: Human-triage-required pre-maturity** (emit always with marker "human-judgment-required at L0-L1"; graceful downgrade as autonomy advances) | sub | HIGH | Couples to autonomy register; natural for L0-L1 (current). |
| 24 | B | **Option 10: Downstream-decides via metadata** (routeman emits everything with calibration metadata; each downstream consumer (Baldwin, /intuit, human) sets its own filtering policy) | core | HIGH | Routeman doesn't gate; it LABELS. Each consumer decides filtering. Maximum delegation; minimum coupling. |
| 25 | B | **Option 11: No-special-treatment + downstream-discovers** (routeman emits like any type; no maturity label; downstream consumers discover patterns over time) | side | LOW | Most minimal; defers ALL complexity. Loses the maturity-awareness signal entirely. |
| 26 | B | **Option 12: Defer entirely** (don't ship a policy; SKILL.md notes "policy unspecified; default to always-emit-low-confidence until calibration-approaching inquiry resolves") | sub | MED | Honest about pre-maturity uncertainty. Defers decision to N≈20-30 follow-up inquiry. |
| 27 | B | **Option 13: Hybrid (Option 3 + Option 4)** (confidence-graduated per Option 3 + per-route-type split per Option 4; e.g., FRONTIER ships always at LOW; REVISIT ships always at LOW with human-triage marker) | core | HIGH | Combines structural asymmetry handling with maturity-awareness. |
| 28 | B | **Option 14: Hybrid (Option 3 + Option 10)** (confidence-graduated label per Option 3 + downstream-decides-via-metadata per Option 10) | sub | HIGH | Routeman emits with confidence label; each consumer interprets. |
| 29 | B | **Option 15: Hybrid (Option 4 + Option 7 + Option 10)** (per-route-type-split + per-discipline-aware + downstream-decides) | side | LOW | Maximum sophistication; high implementation cost; may over-engineer pre-maturity. |

### Region C — Pollution-vs-gating tradeoff analysis

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 30 | C | **The "pollution" framing assumes Baldwin → routeman direct consumption.** Per #2, this assumption is UNVALIDATED. Baldwin's actual seed source is /intuit Phase β+ hunches calibrated by Retrospective RC. Routeman's emissions may not be Baldwin's seed source AT ALL — they may be consumed only by human selectors and inquiry runners. | core | HIGH | If routeman emissions don't directly feed Baldwin, pollution risk is much smaller; the policy decision shifts toward "always-emit with appropriate human-consumption labels." |
| 31 | C | **The "gating" cost (lost enumeration) is structural** — violates routeman's enumerate-all identity (item #3). Any policy that gates INVESTIGATE FRONTIER or REVISIT entirely fails the identity test. | core | HIGH | Strong constraint against Option 2 and full-gating variants. |
| 32 | C | **The middle ground (confidence-graduated)** preserves enumeration AND informs consumers — the source-question's suggested default. The key design question is the CONFIDENCE LABEL VALUES + their downstream interpretation. | core | HIGH | Most likely to survive scrutiny. |
| 33 | C | **The hidden axis**: pre-maturity confidence values aren't just about maturity — they're also about ROUTEMAN'S OWN TASTE being uncalibrated. Even if a discipline has N=30+, routeman's enumeration TASTE for FRONTIER/REVISIT may not be validated. | sub | HIGH | Per-discipline N alone may be insufficient; routeman's OWN N (per-routeman-invocation count + audit results) might be needed for confidence calibration. |
| 34 | C | **Pre-maturity routeman emissions are human-consumed.** The human (selector at L0-L1) IS the natural pre-maturity filter. Whatever routeman emits, the human triages. This is the project's bootstrap mechanism. | core | HIGH | The "pollution" problem may be a non-issue at L0-L1 because human filtering is robust. The concern is L3+ when system Selector takes over. |

### Region D — Confidence-labeling scheme candidates

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 35 | D | **D1: Source-question's 3-level scheme** — LOW pre-maturity (N<20); MED transitional (20≤N<30); HIGH mature (N≥30) | core | HIGH | Aligns with source-question default. Per-discipline N. |
| 36 | D | **D2: Continuous gradient** — confidence = min(1.0, N/30) for the relevant discipline | sub | MED | Smoother; less actionable for binary downstream decisions. |
| 37 | D | **D3: Discrete LOW / HIGH only** (no MED) — gate the binary decision at N=30 | sub | MED | Simpler; loses the transitional signal. |
| 38 | D | **D4: 5-level scheme** (very-low / low / med / high / very-high) keyed to N=0 / 10 / 20 / 30 / 50 | side | LOW | Over-engineered for the use case. |
| 39 | D | **D5: Per-discipline confidence + routeman-self-confidence** (two confidence values: target-discipline-N-based + routeman's own taste-calibration) | sub | HIGH | Captures the dual uncertainty from #33. Two values may be too many for human triage. |
| 40 | D | **D6: Confidence as text label** (`pre-maturity` / `approaching-maturity` / `mature`) rather than LOW/MED/HIGH (less computery, more descriptive) | sub | MED | Human-readable; conveys the maturity-axis directly. |

### Region E — Per-discipline-N tracking mechanism candidates

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 41 | E | **E1: `_meta_state.md` extension** — autonomy_ladder.md's L1+ artifact gains a per-discipline N field. Routeman reads from there. | core | HIGH | Aligns with existing infrastructure trajectory. Requires the artifact to exist (only at L1+). |
| 42 | E | **E2: `docs/discipline_calibration.md` new file** — sibling to `docs/autonomy_level.md` (per 24-40); centralized per-discipline N + maturity threshold. | sub | HIGH | Clean separation; analogous to the autonomy register design. Adds a new sidecar — sidecar-proliferation risk. |
| 43 | E | **E3: Inquiry-folder count heuristic** — routeman counts entries in `devdocs/inquiries/` filtered by discipline-tag in the folder name (e.g., contains "routeman", "sense-making", etc.). | sub | MED | Inferred; no new infrastructure. Brittle (folder naming is heuristic; discipline-tag may not be in folder name). |
| 44 | E | **E4: Per-discipline frontmatter survey** — routeman scans `finding.md` files' frontmatter for discipline-attribution and counts. | side | LOW | Heuristic; expensive scan; not infrastructure-clean. |
| 45 | E | **E5: Defer to SKILL.md authoring** — don't commit a source at first ship; the policy's per-discipline-N reading can use any of E1-E4 once decided. | sub | HIGH | Honest deferral; doesn't block the emission-policy decision. |

### Region F — Downstream-consumer awareness

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 46 | F | **F1: Human selector (L0-L1; current state)** — reads route confidence + filters by judgment. Per item #34, the natural pre-maturity safeguard. | core | HIGH | Already exists; doesn't require special protocol. |
| 47 | F | **F2: Baldwin cycle (post-N≥30; not yet shipped)** — IF Baldwin consumes routeman emissions (per item #30's open question), it must filter by confidence label. The filter SPEC is Baldwin's, not routeman's. | core | HIGH | Routeman emits with metadata; Baldwin's spec when it ships decides filtering. |
| 48 | F | **F3: /intuit Phase β+ (when shipped)** — may correlate routeman emissions with hunch patterns. Per design memo F-seed, routeman consumes /intuit corpus-limit-seeds; the reverse direction (whether /intuit consumes routeman emissions) is unspecified. | sub | MED | Open. |
| 49 | F | **F4: System Selector at L2+ (per autonomy_ladder.md)** — system takes over selection at L2+. Selector filters by confidence to avoid uncalibrated routes. The Selector's filter SPEC is /MVL+ runner's, not routeman's. | sub | HIGH | Selector filtering policy is downstream. |
| 50 | F | **F5: Downstream-consumer documentation** — routeman SKILL.md may include a "for consumers" section explaining what the confidence values mean and how to interpret. | sub | HIGH | Practical hint for SKILL.md authoring. |

### Region G — Routeman's own pre-maturity meta-uncertainty

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 51 | G | **G1: Routeman's own taste for FRONTIER/REVISIT is uncalibrated pre-maturity.** Even when a discipline has N=30+, routeman's enumeration LOGIC for these types hasn't been validated against outcomes. | core | HIGH | Strong reason to label confidence as LOW even post-discipline-maturity until routeman-self-N≥X. |
| 52 | G | **G2: Routeman's invocation count is a separate axis** from per-discipline inquiry count. Routeman may have run 100 times but the disciplines it observes may each have N=5. | sub | HIGH | Two independent N-axes; both relevant. |
| 53 | G | **G3: Routeman's LAYER-2 audit (frontier Q4)** could inform routeman-self-confidence. Currently audit infrastructure is unspecified (Q4 open). | sub | MED | Forward-looking integration. |

### Region H — Pollution-vs-gating considered concretely

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 54 | H | **H1: Concrete pollution scenario** — Baldwin starts consuming routeman emissions at N=30 for discipline X. Routeman's pre-N=30 emissions for discipline X are in the route-map. Baldwin reads them and treats them as seed-candidates with HIGH confidence (because Baldwin doesn't know they're pre-maturity unless metadata marks them). | core | HIGH | This is the actual pollution mechanism. Mitigation: metadata MUST mark pre-maturity emissions; Baldwin MUST read metadata. |
| 55 | H | **H2: Concrete pollution-non-scenario** — Baldwin's seed source per desc.md is /intuit hunches + Retrospective RC delta, NOT routeman emissions. If this stays the case, routeman emissions DON'T pollute Baldwin. | core | HIGH | Counter-scenario to H1. Resolves only if Baldwin's spec when shipped commits non-consumption of routeman. |
| 56 | H | **H3: Concrete gating cost** — gating FRONTIER pre-maturity means humans don't see frontier-exploration suggestions until N=30. For projects bootstrapping (current state), this is the most useful exploration tool gated entirely. Cost is HIGH at L0-L1. | core | HIGH | Strong cost against gating-based options. |
| 57 | H | **H4: REVISIT gating cost is lower** — REVISIT requires multiple prior cycles to operate (its very purpose is cross-cycle); pre-maturity (N<10), there aren't enough prior cycles for REVISIT to be meaningful. Gating REVISIT at N<10 may match the natural availability anyway. | sub | HIGH | Per-route-type asymmetry: REVISIT's pre-maturity gating cost is LOW; FRONTIER's is HIGH. |

### Region I — Revival triggers

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 58 | I | **I1: N approaches 30 for any discipline** — re-evaluate policy when project starts approaching maturity. | core | HIGH | Source-question's named revival trigger. |
| 59 | I | **I2: Baldwin spec ships** — when Baldwin's spec commits its seed source, the routeman-Baldwin interaction is concrete and the emission policy can be aligned. | core | HIGH | Open dependency on Baldwin's spec. |
| 60 | I | **I3: /intuit Phase β+ ships** — when /intuit produces corpus-limit-seeds, the routeman ↔ /intuit interaction crystallizes. | sub | HIGH | Already-deferred FF from prior inquiries. |
| 61 | I | **I4: LAYER-2 Calibration-Drift audit fires** — if the audit detects drift in routeman's INVESTIGATE FRONTIER / REVISIT calibration, the policy may need adjustment. | sub | MED | Open dependency on Q4 (LAYER-2 audit infrastructure). |
| 62 | I | **I5: Observed pre-maturity emission rate** — if routeman emits many low-confidence FRONTIER/REVISIT routes pre-maturity AND humans report low triage value, revisit (downgrade emission rate or apply Option 6 adaptive-rate). | sub | MED | Operational monitoring trigger. |

### Region J — Failure modes / risks

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 63 | J | **J1: Confidence-label drift** — if routeman emits LOW confidence pre-maturity but the values aren't calibrated, the labels become semantically empty. Downstream consumers can't use them. | core | HIGH | Mitigation: explicit calibration of label meanings; periodic audit. |
| 64 | J | **J2: Per-discipline-N source missing** — Options 4-7 (per-discipline-aware) require the source from Region E. If E5 (deferred source) is chosen, those options can't be fully implemented at first ship. | sub | HIGH | Caps how sophisticated the first-ship policy can be. |
| 65 | J | **J3: Stale routes at maturity** — emit pre-maturity → Baldwin at maturity reads STALE routes (the cycle that produced them is long-past). Stale routes may not match current cycle context. | sub | MED | Mitigation: persistence model's recalibration (24-00) can update stale routes when re-emitted. |
| 66 | J | **J4: Over-emission floods route-map** — pre-maturity, routeman may emit many low-confidence FRONTIER routes that crowd higher-confidence Progression routes. | sub | MED | Mitigation: per-mode emission budget (per design memo's mode-allocation); FRONTIER may be `compact` mode pre-maturity. |
| 67 | J | **J5: Pollution-framing accepted without testing** — if the inquiry adopts the source-question's pollution framing without testing H2 (Baldwin doesn't consume routeman), the policy may solve a non-problem. | core | HIGH | Sensemaking should test this. |
| 68 | J | **J6: Gating violates identity** — Option 2 and variants fail routeman's enumerate-all identity. | core | HIGH | Strong rejection criterion. |
| 69 | J | **J7: Per-sub-action complexity** — Option 5 (per-sub-action REVISIT split) may over-categorize at the per-Route level; SKILL.md authors would need to specify 3 sub-policies per sub-action. | sub | MED | Cost may exceed benefit. |

### Region K — Settled vs needs further inquiry

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 70 | K | Settled: routeman's enumerate-all identity (gating-options rejected; only labeling/rate-limiting variants survive). | core | HIGH | |
| 71 | K | Settled: per-route confidence field exists (the labeling mechanism). | sub | HIGH | |
| 72 | K | Settled: per-route-type asymmetry (FRONTIER auto-class; REVISIT judgment-class) supports per-route-type split. | core | HIGH | |
| 73 | K | Needs further inquiry: pollution framing — does Baldwin actually consume routeman emissions? Sensemaking must test. | core | HIGH | |
| 74 | K | Needs further inquiry: which policy option (1, 3, 4, 7, 8, 9, 10, 13, 14) ships first. | core | HIGH | |
| 75 | K | Needs further inquiry: confidence-labeling scheme (D1 / D2 / D3 / D5 / D6). | sub | HIGH | |
| 76 | K | Needs further inquiry: per-discipline-N source (E1 / E2 / E3 / E5). | sub | HIGH | |
| 77 | K | Needs further inquiry: per-sub-action REVISIT differentiation (Option 5). | sub | MED | |

### Region L — Frontier flags

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 78 | L | **FF-1: Which policy option ships first** (Option 3 / 4 / 7 / 10 / 13 / 14 are the live candidates) | umbrella | HIGH | Central. |
| 79 | L | **FF-2: Pollution framing validation** — does Baldwin consume routeman emissions, or are they separate channels per desc.md? | umbrella | HIGH | Open assumption. |
| 80 | L | **FF-3: Confidence-labeling scheme** (D1-D6) | umbrella | HIGH | |
| 81 | L | **FF-4: Per-discipline-N source** (E1-E5) | umbrella | HIGH | |
| 82 | L | **FF-5: Per-sub-action REVISIT differentiation** | umbrella | MED | |
| 83 | L | **FF-6: Baldwin spec coordination** (revival when Baldwin spec ships) | umbrella | HIGH | |
| 84 | L | **FF-7: /intuit Phase β+ coordination** (revival when /intuit Phase β ships) | umbrella | MED | |
| 85 | L | **FF-8: Routeman-self-N tracking** (G2's separate axis) | umbrella | MED | |

**Convergence check:** 85 trace entries across 12 regions. Major findings: (1) **The pollution framing in Q10's source-question may be overstated** — desc.md specifies Baldwin's seed source as /intuit hunches + Retrospective RC delta, not routeman emissions; Sensemaking must test whether routeman is a Baldwin seed source at all. (2) **Per-route-type asymmetry is structurally significant** — INVESTIGATE FRONTIER is auto-class in 12/4 partition and Progression Moves; REVISIT is judgment-class and Coordination Moves. They legitimately may have different policies. (3) **Routeman's enumerate-all identity is a strong constraint** — gating any movement type without strong reason fails the identity test. (4) **The confidence field already exists** in routeman's schema; confidence-graduated policies are mechanism-cheap. (5) **The pre-maturity safeguard is human triage** at L0-L1 (current state); the pollution concern is forward-looking (L3+ system Selector or Baldwin activation). (6) **Routeman's OWN taste is uncalibrated pre-maturity** — per-discipline N is necessary but not sufficient; routeman-self-N is a second axis. (7) **15 candidate policy options enumerated** (most viable: Options 3, 4, 7, 10, 13, 14 in various hybrid combinations).

## State Summary

### Territory-specification echo

The bounded scope: desc.md Baldwin mechanism + routeman design memo (identity + confidence field + 12/4 partition + F-revisit) + 24-01-30 categorization (per-route-type asymmetry) + 24-01 adaptive guidance (per-movement-type Stage 1 mapping) + 24-40 autonomy register (different axis from maturity) + 24-00 persistence (revival pattern) + canonical /navigation; 15 candidate policy options; 6 confidence-label schemes; 5 per-discipline-N source candidates; downstream consumers (human / Baldwin / /intuit / system-Selector); failure modes; revival triggers.

### Purpose-specification echo

Items qualify if they speak to (a) existing constraints; (b) candidate policy options; (c) per-route-type differentiation; (d) per-sub-action differentiation; (e) confidence schemes; (f) per-discipline-N tracking; (g) downstream awareness; (h) routeman's pre-maturity meta-uncertainty; (i) pollution-vs-gating tradeoff; (j) revival triggers; (k) interactions; (l) failure modes; (m) structural framing tests.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| A — Existing constraints (14) | confirmed | 9 core + 5 sub |
| B — Candidate policy options (15) | confirmed | 5 core + 8 sub + 2 side |
| C — Pollution-vs-gating analysis (5) | confirmed | 5 core |
| D — Confidence-labeling schemes (6) | confirmed | 1 core + 4 sub + 1 side |
| E — Per-discipline-N sources (5) | confirmed | 1 core + 3 sub + 1 side |
| F — Downstream consumers (5) | confirmed | 1 core + 4 sub |
| G — Routeman's pre-maturity meta-uncertainty (3) | confirmed | 1 core + 2 sub |
| H — Pollution concrete scenarios (4) | confirmed | 3 core + 1 sub |
| I — Revival triggers (5) | confirmed | 2 core + 3 sub |
| J — Failure modes / risks (7) | confirmed | 4 core + 3 sub |
| K — Settled vs needs-further (8) | confirmed | 4 core + 4 sub |
| L — Frontier flags (8) | confirmed | 0 core + 0 sub + 8 umbrella |

Total: 85 entries (35 core + 39 sub + 3 side + 8 umbrella).

### Confirmed-absent regions

None — every region traversed yielded items.

### Concept-names list

- `Baldwin-cycle maturity gate` — existing-project-term (desc.md), "seed-generation activates at N≥30 per discipline."
- `pollution framing` — coined-this-inquiry, "the source-question's assumption that routeman emissions feed Baldwin's seed pool; possibly overstated per desc.md's specification of Baldwin's actual seed source."
- `enumerate-all identity` — existing-design-memo-commitment, "routeman's core: list all possible next moves; gating any movement type without strong reason violates."
- `per-route-type asymmetry` — coined-this-inquiry, "INVESTIGATE FRONTIER (Progression / auto-class) vs REVISIT (Coordination / judgment-class) — different families, different autonomy classes, different policies may be warranted."
- `confidence-graduated emission` — source-question-named, "emit always; per-route confidence label scaled by maturity."
- `routeman-self-N` — coined-this-inquiry, "second N axis: routeman's own invocation count + audit, distinct from per-discipline inquiry count."
- `per-discipline-N tracking source` — coined-this-inquiry, "infrastructure needed for per-discipline-aware policies; not yet specified."
- `downstream-decides-via-metadata` — Option 10 framing, "routeman labels; each downstream consumer (Baldwin / /intuit / human) decides filtering."
- `pollution framing test` — coined-this-inquiry, "the Sensemaking task: does Baldwin actually consume routeman emissions, or are they separate seed channels?"

### Frontier flags

- **FF-1** — Which policy option ships first.
- **FF-2** — Pollution framing validation (does Baldwin consume routeman emissions?).
- **FF-3** — Confidence-labeling scheme (D1-D6 candidates).
- **FF-4** — Per-discipline-N source (E1-E5 candidates).
- **FF-5** — Per-sub-action REVISIT differentiation.
- **FF-6** — Baldwin spec coordination (when Baldwin's spec ships).
- **FF-7** — /intuit Phase β+ coordination.
- **FF-8** — Routeman-self-N tracking.

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-24T02:00
extent:
  in-context-files-fully-loaded:
    - docs/desc.md (Baldwin mechanism + N≥30 maturity gate — verified via direct grep)
  in-context-files-via-prior-session-loading:
    - devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md (enumerate-all identity; confidence field; 12/4 partition; F-revisit)
    - devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md (Q10 source)
    - devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md (FRONTIER in Progression; REVISIT in Coordination)
    - devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md (per-movement-type Stage 1 mapping)
    - devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md (autonomy register vs maturity = different axes)
    - devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md (revival-trigger pattern)
    - docs/autonomy_ladder.md (the meta-loop ladder; per-discipline N tracking origin)
  frontier-files-not-loaded:
    - cognitive_harness/navigation/references/navigation.md (canonical /navigation; 16-type taxonomy inherited; 12/4 partition source — verified earlier this session)
```

## Telemetry

- **Mode:** `possibility-dominant with artifact component`. **Entry point:** `signal-first`.
- **Cycles run:** 1.
- **Items enumerated:** 85 trace entries across 12 regions.
- **Items tagged at each relevance level:** core = 35; sub = 39; side = 3; umbrella = 8.
- **Sub-phase fired:** no.
- **Convergence criteria status:** territory exhaustively traversed; 15 policy candidates enumerated (above default-3-from-source-question); per-route-type asymmetry structurally grounded; pollution framing flagged for Sensemaking test.
- **Workspace-overload trigger:** not fired.
- **Failure modes checked (LAYER 1):** all 7 PASS (Missed-relevance mitigated by 12-region sweep including pre-traversal verification of desc.md; Surfaced-irrelevance — 3 side items kept with reasons; Over-coverage — core/sub split; others standard).
- **Failure modes checked (LAYER 2):** all 3 PASS (Interpretive-overstep — items are candidates / scenarios / risks; Purpose-loss — purpose explicit; Self-coupling-to-downstream — Sensemaking adjudicates).
- **Self-assessment verdict:** **PROCEED with FLAG.** 8 frontier flags + 3 major structural insights: (1) pollution framing may be overstated and needs Sensemaking validation; (2) per-route-type asymmetry is structurally significant; (3) routeman's enumerate-all identity rejects all gating-based options.
