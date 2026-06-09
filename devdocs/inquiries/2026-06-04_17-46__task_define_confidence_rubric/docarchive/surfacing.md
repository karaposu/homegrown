## User Input

devdocs/inquiries/2026-06-04_17-46__task_define_confidence_rubric/_branch.md

(Refinement #6: design the HIGH/MED/LOW confidence rubric for §4.7's self-assessment verdict. Layer = structural; meaning + process settled.)

---

# Surfacing Artifact — Task-Define §4.7 Confidence Rubric

## Mode + Entry Point

- **Mode:** `artifact` primary (current §4.7 + adjacent sections + sister-discipline confidence-rubric precedents + prior inquiry deferrals + rule (b) inquiry's worked-examples pattern as a related project-precedent) + `possibility` for rubric design candidates.
- **Entry point:** `signal-first` — purpose explicit.
- **Territory specification:** `abstract-bounded` (relevance criterion: "items bearing on designing the HIGH / MED / LOW confidence rubric for §4.7's self-assessment verdict — the rubric levels, the discriminator dimension, cross-verdict applicability, placement, lightweight + self-containment compliance"). Sub-phase NOT FIRED.

## Territory + Purpose Echo

- **Territory:** the Task-Define runtime spec's rubric-relevant sections (§4.7 self-assessment + §4.1 LAYER 1/LAYER 2 framework + §4.2 LAYER 1 modes + §4.3 LAYER 2 modes + §4.4 asymmetric-failure principle + §4.6 calibration trajectory); the meaning-layer + process-layer commitments on verdict-with-confidence; sister-discipline confidence-rubric precedents (Surfacing's per-item relevance-confidence + Surfacing's recency-annotation confidence pattern; Sensemaking's ambiguity-collapse HIGH/LOW with structural-grounds reasoning); the mode 6 inquiry's deferral of this rubric; the rule (b) inquiry's worked-examples pattern (precedent for adding operational content to a §-section); a possibility space of rubric design candidates spanning multiple discriminator dimensions.
- **Purpose:** design the §4.7 amendment that operationalizes the HIGH / MED / LOW confidence rubric — exact rubric text + discriminator dimension + cross-verdict applicability + placement + compliance verdicts, concrete enough to drop into the runtime spec.

## Traversal Trace

| # | Region / sub-region | Item identifier | Relevance | Conf | Step note | Recency annotation |
|---|---|---|---|---|---|---|
| 1 | R (current spec text) | §4.7 current verdict shape: *"At the end of an invocation, Task-Define reports a self-assessment verdict with three components: Verdict (PROCEED / FLAG / RE-RUN); Confidence (HIGH / MED / LOW, reflecting the LLM's judgment about the strength of the verdict); Conditions (list of specific FLAG conditions that fired, if any; or the RE-RUN condition that fired, if any; empty list when PROCEED)."* | core | HIGH | The site of the gap; current text leaves confidence under-specified | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 2 | R | §4.7 current PROCEED definition: *"all 4-stage operations fired; no LAYER 1 mode self-recognized; output is ready for downstream consumption."* | sub | HIGH | The clean-run case; corresponds to user's proposed HIGH rubric ("verdict reflects a clean run") | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 3 | R | §4.7 current FLAG definition: *"output produced; one or more flags raised; downstream consumer should review the flags before consuming."* + initial FLAG conditions (a)-(f) | sub | HIGH | FLAG fires on specific named conditions; confidence orthogonal | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 4 | R | §4.7 current RE-RUN definition: *"output incomplete or structurally suspect; re-invocation recommended."* + initial RE-RUN conditions (a) LAYER 2 mode self-recognized (b) receive-step failure | sub | HIGH | RE-RUN is structural failure; confidence may be moot or always LOW | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 5 | R | §4.1 LAYER 1 / LAYER 2 framework: LAYER 1 = operational + detectable per-invocation; LAYER 2 = identity-eroding + detectable only via behavioral audit over time | core | HIGH | Structural separation: LAYER 1 fits per-invocation confidence rubric; LAYER 2 does not | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 6 | R | §4.2 LAYER 1 modes (6): Premature-Itemize-split / Late-multi-item / MQ-extension-violates-bounded-rule / Rephrase-drifted-without-MQ-constraint / Per-operation-firing-missed / MQ2-answer-missing-dispatch-info | core | HIGH | The 6 LAYER 1 modes are the OBSERVABLE BOUNDARIES the confidence rubric can reference; "mode boundary approached" = near to firing one of these | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 7 | R | §4.3 LAYER 2 modes (4): Verification-drift / Substrate-reach / Cross-item-interpretation-drift / Fidelity-verdict-drift | side | MEDIUM | LAYER 2 detection is behavioral-audit-over-time, not per-invocation; OUT of confidence rubric scope per §4.1 framework | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 8 | R | §4.4 asymmetric-failure principle: lean to keep-together at Itemize; lean to fire at MQ extensions when bounded-rule met | sub | HIGH | Background principle; informs how "boundary approached but didn't fire" should be interpreted (the rule biased toward firing means lean-against-firing case is genuinely borderline) | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 9 | R | §4.6 calibration trajectory: Bootstrap → Early Operation → Mature Operation | sub | HIGH | Confidence rubric must be Bootstrap-compatible (no calibration data); Mature Operation may sharpen it | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 10 | M (meaning + process layer) | Process-layer finding's §9 commitment: *"PROCEED / FLAG / RE-RUN self-assessment verdict (+ initial enumeration) ... HIGH/MED/LOW confidence per surfacing precedent"* | core | HIGH | Inherited commitment: confidence attribute exists + follows surfacing's precedent. This inquiry operationalizes that precedent | `{source: filesystem, value: 2026-06-04T08:38:57Z}` |
| 11 | M | Mode 6 inquiry's §2.4 amendment + §4.2 mode 6 predicate (already committed in prior inquiry; pending application) | sub | HIGH | LAYER 1 mode 6 detection contributes to the confidence rubric via "boundary-approached / fired / distant" — adds to the rubric's observable signal base | `{source: filesystem, value: 2026-06-04T14:52:01Z}` |
| 12 | F (sister-discipline precedents) | Surfacing spec `cognitive_harness/surfacing/references/surfacing.md` §2.3 relevance-attribution mechanism: HIGH/MED/LOW confidence reflects match confidence; under low-confidence, default to inclusion (umbrella tag + LOW confidence) per asymmetric-failure principle | core | HIGH | Direct project precedent: confidence reflects match strength + asymmetric-failure default for LOW. Pattern: confidence is reasoning-strength, not feeling | `{source: filesystem, value: 2026-05-23T08:12:56Z}` |
| 13 | F | Surfacing §4.2 mode 8 + 9 (Recency-Equates-Idleness + Recency-Bias-Filter) recognition columns: behavioral patterns observable in output | sub | HIGH | Precedent for grounding rubric definitions in observable output patterns | `{source: filesystem, value: 2026-05-23T08:12:56Z}` |
| 14 | F | Sensemaking spec `cognitive_harness/sense-making/references/sensemaking.md` Phase 3 Ambiguity Collapse: HIGH (evidence demands this over the counter-interpretation on structural grounds) vs LOW (elegant but counter has structural merit — do not treat as irreversible) | core | HIGH | Strongest precedent for binary HIGH/LOW with structural-grounds reasoning; Task-Define has 3 levels but the structural-grounds pattern applies | `{source: filesystem, value: 2026-05-16T00:30:38Z}` |
| 15 | F | Sensemaking ambiguity-collapse "Strongest counter-interpretation" + "Why counter fails (structural grounds)" template: confidence emerges from how the counter-interpretation fares against structural reasoning | sub | HIGH | Same pattern reusable: Task-Define's confidence emerges from how the operation's output fares against the LAYER 1 mode boundaries | `{source: filesystem, value: 2026-05-16T00:30:38Z}` |
| 16 | F | Surfacing §5.4 Traversal Trace schema: per-item HIGH/MED/LOW confidence as a structured field | side | MEDIUM | Precedent for confidence-as-output-field, not free text | `{source: filesystem, value: 2026-05-23T08:12:56Z}` |
| 17 | P (prior inquiry deferrals) | Mode 6 inquiry's finding section 6 verbatim: *"§4.7's general confidence rubric is itself under-specified — the runtime spec acknowledges the gap. Committing per-mode confidence here would presuppose a rubric structure that does not yet exist; the dependency would be inverted."* | core | HIGH | Explicit deferral by mode 6 inquiry — this inquiry closes the deferred gap | `{source: filesystem, value: 2026-06-04T14:52:01Z}` |
| 18 | P | Mode 6 inquiry's choice to commit binary detection (mode fires or doesn't) and route confidence to §4.7's general rubric | sub | HIGH | Binary at the mode level; the GENERAL rubric is at end-of-invocation across all observables | `{source: filesystem, value: 2026-06-04T14:52:01Z}` |
| 19 | P | Rule (b) inquiry's same-item-shape worked-examples pattern at §2.3 sub-block (precedent for adding operational content adjacent to existing commitments) | sub | MEDIUM | Pattern available if rubric needs worked examples; likely not (rubric is naming + criteria, not examples) | `{source: filesystem, value: 2026-06-04T16:48:16Z}` |
| 20 | C (constraints) | Lightweight criterion (iv): no sub-machinery beyond a paragraph per operation. §4.7 is the self-assessment section, not an operation section — multi-paragraph by nature; criterion applies indirectly | core | HIGH | Confidence rubric should be compact (3 levels × 1-2 sentences each = ~6-8 lines); does not violate (iv) | `{source: none, value: null}` |
| 21 | C | Self-containment: no inquiry-folder references in committed spec text | core | HIGH | Confidence rubric definitions must not name inquiries; only intra-spec section pointers (§4.2 mode list; §4.1 framework) | `{source: none, value: null}` |
| 22 | C | Perception/action split: Task-Define perceives; runner/user act. Confidence is a perception emitted to the runner/user, not an action by the discipline | sub | HIGH | Rubric design must keep confidence as perceptive content, not actionable instruction | `{source: none, value: null}` |
| 23 | C | Bootstrap-state compatibility: no calibration data yet; rubric must work without observed-performance signals | core | HIGH | Discriminator must be ON OBSERVABLE-PER-INVOCATION-SIGNALS, not on cumulative or comparative-across-invocations data | `{source: none, value: null}` |
| 24 | D (rubric design candidates — discriminator dimension) | Candidate D1 — LAYER 1 MODE BOUNDARY PROXIMITY (user's proposed). Discriminator: how close any LAYER 1 mode came to firing in this invocation. HIGH = no boundary approached; MED = 1 boundary approached but no mode fired; LOW = multiple boundaries approached OR proximity to a LAYER 1 mode without firing | core | HIGH | The user's primary proposal; observable per invocation; project-rooted (uses §4.2 modes); covers Bootstrap state cleanly | `{source: none, value: null}` |
| 25 | D | Candidate D2 — PER-OPERATION JUDGMENT-CALL DENSITY. Discriminator: count of judgment-calls observed across the 5 operations. HIGH = 0 explicit judgment-calls; MED = 1 judgment-call; LOW = 2+ judgment-calls. Numerical | sub | MEDIUM | Discrete count; harder to apply because "judgment call" needs definition; may overlap with D1 | `{source: none, value: null}` |
| 26 | D | Candidate D3 — PER-OPERATION OUTPUT COHERENCE. Discriminator: how internally coherent each operation's output is. HIGH = all coherent; MED = one with friction; LOW = multiple with friction or one with severe friction | sub | MEDIUM | Subjective; "coherence" needs operational test (similar to rule (b)'s "constrains Rephrase" — already established as judgment-dependent) | `{source: none, value: null}` |
| 27 | D | Candidate D4 — COMBINED INDICATORS. Discriminator: composite of D1 + D2 + D3. HIGH = all indicators clean; MED = one indicator shows friction; LOW = multiple indicators or severe friction | side | LOW | Over-specifies; harder for LLM to apply; not lightweight | `{source: none, value: null}` |
| 28 | D | Candidate D5 — BORDERLINE COUNT ACROSS LAYER 1 MODES. Discriminator: explicit count of LAYER 1 mode boundaries approached. HIGH = 0 boundaries approached; MED = exactly 1; LOW = ≥ 2. Most precise variant of D1 | sub | HIGH | More precise than user's D1 but functionally equivalent; numerical anchor may help consistency | `{source: none, value: null}` |
| 29 | D (rubric design candidates — exact text variants) | Candidate T1 (matches user's proposal): HIGH = "every operation's output is internally coherent and no LAYER 1 mode boundary was approached; the verdict reflects a clean run"; MED = "one operation's output had observable judgment-call boundaries but no rule fired"; LOW = "multiple judgment-calls at boundaries OR proximity to a LAYER 1 mode without firing" | core | HIGH | User's verbatim proposal; clean and operational | `{source: none, value: null}` |
| 30 | D | Candidate T2 (refined for cross-verdict applicability): same as T1 but with explicit note that LOW confidence + PROCEED verdict means "process succeeded but the LLM has reservations"; and LOW confidence is the default for RE-RUN | sub | HIGH | Addresses cross-verdict applicability question (observation target 8) | `{source: none, value: null}` |
| 31 | D | Candidate T3 (alternative wording — count-based): HIGH = "zero LAYER 1 mode boundaries approached during the invocation; all operation outputs internally coherent"; MED = "exactly one LAYER 1 mode boundary approached without firing"; LOW = "two or more LAYER 1 mode boundaries approached OR one boundary very near to firing" | sub | MEDIUM | More precise on D5 axis; slightly heavier wording; may be unnecessarily prescriptive | `{source: none, value: null}` |
| 32 | D | Candidate T4 (alternative wording — sensemaking-style structural-grounds): HIGH = "all operation outputs survive structural-counter-test; no LAYER 1 mode threatened"; MED = "one operation's output survived structural-counter-test but only because the counter is weak; OR one LAYER 1 mode threatened but didn't fire"; LOW = "multiple operations had marginal survivals OR multiple LAYER 1 modes threatened" | side | LOW | Imports sensemaking's structural-grounds template; may not fit per-invocation as cleanly as boundary-proximity | `{source: none, value: null}` |
| 33 | E (cross-verdict applicability edge cases) | Edge case E1 — HIGH-confidence-PROCEED. Natural pairing; clean run + clean verdict | sub | HIGH | Default expected case; rubric must support | `{source: none, value: null}` |
| 34 | E | Edge case E2 — MED-confidence-FLAG. Natural pairing; one boundary approached → FLAG fires; confidence MED | sub | HIGH | Common case; rubric must support | `{source: none, value: null}` |
| 35 | E | Edge case E3 — LOW-confidence-FLAG. Multiple borderline cases; one mode fires + others approached | sub | HIGH | Plausible case; rubric must support | `{source: none, value: null}` |
| 36 | E | Edge case E4 — LOW-confidence-RE-RUN. Default for RE-RUN: structural failure means low confidence in any verdict claim | sub | HIGH | Natural default; rubric should commit | `{source: none, value: null}` |
| 37 | E | Edge case E5 — HIGH-confidence-RE-RUN (anomalous). Could mean "very confident the structural failure occurred and re-invocation is needed" — but this is uncommon | side | MEDIUM | Edge case; rubric should not preclude but doesn't need to specify | `{source: none, value: null}` |
| 38 | E | Edge case E6 — HIGH-confidence-FLAG. Could mean "very confident the flagged condition exists" — useful when downstream needs to act on the flag | sub | MEDIUM | Plausible case; rubric should support | `{source: none, value: null}` |
| 39 | E | Edge case E7 — LOW-confidence-PROCEED. Could mean "process succeeded but the LLM has reservations" — useful caveat | sub | HIGH | Important case for honest LLM self-reporting; rubric should allow | `{source: none, value: null}` |
| 40 | U (placement candidates) | Candidate U1 — Sub-block immediately after the verdict-shape commitment paragraph in §4.7 (before the FLAG conditions list) | core | HIGH | Cleanest placement; rubric defines confidence right where the verdict shape is committed | `{source: none, value: null}` |
| 41 | U | Candidate U2 — Inline within the verdict-shape commitment paragraph (extend the "confidence" bullet) | sub | MEDIUM | More compact but mixes shape commitment with rubric definitions; less scannable | `{source: none, value: null}` |
| 42 | U | Candidate U3 — Separate sub-section ("§4.7.1 Confidence rubric") after the existing §4.7 content | side | LOW | Adds spec depth (sub-section); inconsistent with §4.7's flat structure | `{source: none, value: null}` |
| 43 | U | Candidate U4 — At the END of §4.7 after the RE-RUN conditions list | side | LOW | Far from where confidence is first mentioned; reader has to scan forward | `{source: none, value: null}` |

## State Summary

### Coverage map (per region)

| Region | Coverage | Aggregate verdict | Notes |
|---|---|---|---|
| R (current spec text) | confirmed | core / sub mix | §4.7 verdict shape + 3 verdicts' definitions + §4.1 framework + §4.2 6 LAYER 1 modes + §4.3 LAYER 2 modes (side — out of rubric scope) + §4.4 asymmetric-failure + §4.6 calibration |
| M (meaning + process layer) | confirmed | core | Process-layer finding §9's verdict-with-confidence commitment + mode 6 inquiry's contribution to observable signals |
| F (sister-discipline precedents) | confirmed | core / sub / side | Surfacing's relevance-confidence + asymmetric-failure default for LOW; Sensemaking's ambiguity-collapse HIGH/LOW + structural-grounds reasoning |
| P (prior inquiry deferrals) | confirmed | core / sub | Mode 6 explicit deferral of this rubric; rule (b) inquiry's worked-examples pattern as precedent |
| C (constraints) | confirmed | core / sub | Lightweight + self-containment + Bootstrap-state + perception/action |
| D (rubric design candidates) | confirmed | core / sub / side | 5 discriminator dimensions (D1-D5) + 4 exact-text variants (T1-T4) |
| E (cross-verdict applicability) | confirmed | sub | 7 edge cases E1-E7 across 3 verdicts × 3 confidence levels |
| U (placement candidates) | confirmed | core / sub / side | 4 placement options U1-U4 |

### Confirmed-absent regions

- **LAYER 2 mode proximity** — confirmed irrelevant for per-invocation confidence; LAYER 2 is detected by behavioral-audit-over-time per §4.1 framework. Not a per-invocation observable.
- **Cross-invocation comparative data** — confirmed out of scope for Bootstrap-state design; calibration data is not yet available.
- **Process-layer changes to verdict timing** — out of scope per Layer Commitment; timing (end-of-invocation) settled.
- **Per-mode confidence rubric** — mode 6 inquiry rejected as premature; not re-introduced here.
- **Subjective LLM feeling** — explicitly negative-spec from `_branch.md` "What would fail" section; rubric must tie to observables.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| **LAYER 1 mode boundary proximity** | coined-term | trace #24 | The discriminator dimension D1 — how close a LAYER 1 mode came to firing |
| **boundary approached but didn't fire** | coined-term | trace #24 + #29 | The MED-confidence signal — observable but non-firing |
| **observable per-invocation signal** | structural-reference | traces #5 + #23 | The class of signals the rubric can reference (vs LAYER 2 audit-over-time) |
| **structural-grounds reasoning** | structural-reference | trace #14 | Sensemaking's pattern for HIGH/LOW; applied here as "boundary-approached on structural grounds" |
| **cross-verdict applicability** | coined-term | trace #33-#39 | The 3×3 grid of (verdict, confidence) pairings — which are natural / common / edge |
| **clean run** | coined-term | trace #29 | The user's HIGH-confidence baseline (no friction observed) |
| **borderline case** | coined-term | trace #28 | A LAYER 1 mode boundary that's near firing — the rubric's primary signal |

### Frontier flags

- **F1 (Discriminator dimension selection).** D1 (LAYER 1 mode boundary proximity) is the user's proposed primary; D5 (count-based explicit) is the precise variant; D2-D4 are alternative axes. Sensemaking should adjudicate whether D1 alone is sufficient, or whether per-operation-coherence (D3) should compose as a secondary axis.
- **F2 (Exact rubric wording).** T1 (user's verbatim), T2 (with cross-verdict note), T3 (count-based), T4 (sensemaking-style). T1 is the natural primary; T2 adds an explicit cross-verdict note that may be important for completeness.
- **F3 (Cross-verdict applicability).** All 9 combinations of (PROCEED/FLAG/RE-RUN × HIGH/MED/LOW) plausible; rubric should not preclude any but may commit defaults (e.g., RE-RUN defaults to LOW unless override). Sensemaking adjudicates whether to commit defaults or leave open.
- **F4 (Placement of rubric).** U1 (sub-block after verdict-shape paragraph) is cleanest; alternatives U2-U4 are weaker. Sensemaking confirms.
- **F5 (Cross-discipline precedent application).** Surfacing's relevance-confidence + sensemaking's ambiguity-collapse confidence are both precedents. Does Task-Define's rubric structurally follow either, or define its own form? Likely: takes the project pattern (confidence reflects reasoning strength) + grounds discriminator in observable signals + uses Task-Define's own §4.2 mode list as the signal source.
- **F6 (Pattern propagation to sister disciplines).** If other disciplines have similarly under-specified confidence rubrics, this finding's pattern (ground in observable signals; reference per-discipline modes; commit defaults for verdict pairings) is reusable. Out of scope here; flagged as future work.

### Workspace-populated status

`{populated: true, populated-at: 2026-06-04_17-46, extent: §4.7 + §4.1-§4.4 + §4.6 all in context; surfacing + sensemaking specs from prior reads; mode 6 + process-layer findings fully consumed; 5 discriminator candidates + 4 exact-text variants + 7 cross-verdict cases + 4 placement candidates surfaced as possibility-mode}`

### Recency distribution (per region)

| Region | Newest | Oldest | no-mtime-count | total-items |
|---|---|---|---|---|
| R | 2026-06-04T08:46:13Z | 2026-06-04T08:46:13Z | 0 | 9 |
| M | 2026-06-04T14:52:01Z | 2026-06-04T08:38:57Z | 0 | 2 |
| F | 2026-05-23T08:12:56Z | 2026-05-16T00:30:38Z | 0 | 5 |
| P | 2026-06-04T16:48:16Z | 2026-06-04T14:52:01Z | 0 | 3 |
| C | n/a | n/a | 4 | 4 |
| D | n/a | n/a | 9 | 9 |
| E | n/a | n/a | 7 | 7 |
| U | n/a | n/a | 4 | 4 |
| **TOTAL** | **2026-06-04T16:48:16Z** | **2026-05-16T00:30:38Z** | **24** | **43** |

### Re-invocation parameters (suggested)

If re-invoked: F1 (discriminator dimension) or F3 (cross-verdict applicability) would be the most useful refined-sub-purposes.

## Telemetry

- **Mode:** `artifact` primary + `possibility` for candidates (regions D + E + U).
- **Entry point:** `signal-first`.
- **Cycles run:** 1.
- **Items enumerated:** 43 (9 R / 2 M / 5 F / 3 P / 4 C / 9 D / 7 E / 4 U).
- **Items tagged at each relevance level:**
  - core: 18
  - sub: 17
  - side: 8
  - umbrella: 0
- **Sub-phase fired:** NO.
- **Convergence criteria status:**
  - Territory exhaustively traversed: YES (8 named regions enumerated).
  - No item filtered at uncertain-relevance level: YES.
  - Items rejected only on high-confidence rejection: YES (5 confirmed-absent regions intrinsic-grounded).
- **Workspace-overload trigger:** NOT FIRED.
- **Failure modes checked (LAYER 1):** all NOT OBSERVED (frontier flags F1-F6 signal what was raised but not yet adjudicated).
- **Failure modes checked (LAYER 2):** all NOT OBSERVED.
- **items_with_mtime:** 19; **items_without_mtime:** 24.

## Self-Assessment Verdict

**PROCEED** — 43 items surfaced; 0 LAYER 1 + 0 LAYER 2 failure flags; 6 frontier flags F1-F6 handed to downstream Sensemaking.

Frontier-priority for Sensemaking: **F1** (discriminator dimension selection — D1 LAYER 1 mode boundary proximity primary; D3 per-operation coherence as possible secondary axis) is the primary decision. **F3** (cross-verdict applicability defaults) is the second decision (whether to commit defaults like RE-RUN→LOW). F2 (exact wording), F4 (placement), F5 (precedent application) are smaller adjudications downstream.

Pattern note: this refinement parallels the rule (b) inquiry's structural form (operational test + worked examples) and the mode 6 inquiry's structural form (shape commitment + detection predicate). The §4.7 rubric is the operational test for confidence; downstream consumers reading the verdict are the "detectors." The shape commitment + detector pattern recurs.
