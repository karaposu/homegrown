---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Loop Diagnose — Enumeration Frame Error in Test Design

## Question

The user asked, via the LOOP_DIAGNOSE protocol (`cognitive_harness/protocols/loop_diagnose.md`), to diagnose why an earlier `/MVL+` inquiry produced a misunderstood finding. The correction chain:

- **Prior weak inquiry:** `devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/` — produced 10 test prompts that all started with enumeration verbs (Map / Catalog / Find / Identify / Locate / Enumerate / Generate every), which effectively tested only the upstream discipline (`/explore` or `/surfacing`) rather than the full `/MVL+` vs `/MVL2+` loop the user wanted to test.
- **Human correction:** "u suggested prompts but almost all of them are about finding, identifying sths, and this is not what i asked. we are not testing between explore and surfacing, we are between MVL+ and MVL2+ so we should give them better meaningful tasks. this way we can both understand cumulative effect of surfacing vs explore on the loop, and also individual outputs of them..."
- **Corrected inquiry:** `devdocs/inquiries/2026-05-22_13-00__cognitive_task_pair_for_mvl_loop_ab_test/` — redid the design with cognitive-task prompts (Why / How / Should / Design / Propose) and a dual-level comparison rubric.

The diagnostic question: what did the prior loop miss, why did it miss it, which discipline or stage was at fault, what mechanism produced the failure, and what maintenance follows?

## Goal

Produce evidence-backed failure hypotheses (each with affected stage, shortcoming type, evidence from prior + correction + corrected, confidence, why-not-stronger, maintenance candidate, evaluation gate); an attribution summary table; maintenance candidates respecting LOOP_DIAGNOSE Step 5 guardrails (don't propose broad rewrites from one chain; allow mixed/unknown attribution; treat corrected inquiry as comparative evidence not ground truth); and a diagnostic verdict (ACTIONABLE / PARTIAL / INCONCLUSIVE).

## Finding Summary

- **Primary failure surface is NOT a single discipline.** Five hypotheses (H1-H5) implicate four distinct stages (orchestration / Exploration / Sensemaking / Critique) plus one cross-stage pattern. Single-discipline attribution fails all four counter-tests applied at the exploration stage of this diagnostic — each counter-hypothesis is partially correct but mis-attributes a single source.

- **The propagation mechanism is cross-stage inheritance-without-re-validation (H5).** A framing error introduced at `_branch.md` transcription (H1) propagated through every downstream stage because each stage consumed upstream commitments without auditing them against the user's stated goal. The 4 per-stage hypotheses (H1-H4) are INSTANCES of this superordinate pattern; H5 is the load-bearing finding.

- **The transcription failure (H1) was the entry point.** The user's raw input said "testing MVL2+ and MVL+ (the difference explore and surfacing makes)" AND "what these MVL loop task can be that it stress tests both explore and surfacing aspects and **accumulation of other disciplines and finding**." The prior `_branch.md` transcribed this as "discriminate /explore from /surfacing when run as `/MVL+` vs `/MVL2+`" — the cumulative-effect / accumulation-through-the-loop phrase was dropped. Direct text comparison between raw input and `_branch.md` confirms this. **Confidence: HIGH.**

- **The propagation through Exploration (H2):** R2 (nature-axis options, lines 56-71 of prior exploration.md) rated the task-kind axis "N2 Diagnostic vs Design" as **MEDIUM** with reasoning "**purpose differs but mechanism similar**" — explicit upstream-discipline-mechanism-stress framing. R5 (discrimination-strength predictors, lines 110-124) listed 3 HIGH-discrim categories ALL referring to upstream-mechanism firing ("Surfacing's 4-tag vocabulary fully exercised"; "Surfacing's umbrella-tag-on-uncertainty fires"; "Surfacing's Boundary-discovery sub-phase activates"). No row in R5 references downstream-stage amplification or cumulative behavior. **Confidence: HIGH.**

- **The propagation through Sensemaking (H3):** SP1 (line 45 of prior sensemaking.md) consumed Exploration's "three strong" candidates (N1, N3, N6). N2 was already pre-pruned at R2 and never re-entered Sensemaking's consideration. Sensemaking's A1 ambiguity counter-test (line 175) tested "domain-mix" as the strongest counter — not "task-kind." Sensemaking ran 2 LBTs (Load-Bearing concept Tests) but both operated WITHIN the inherited frame. Neither tested "is this evaluation frame appropriate for the user's stated goal?" **Confidence: HIGH.**

- **The propagation through Critique (H4):** Critique's load-bearing dimension VD2 (Discrimination strength) explicitly inherited from "Sensemaking FP3 + Exploration R5" (line 20 of prior critique.md, Source column). The dimension-validation step in Critique's Phase 0 verified that dimensions came from sensemaking, but did not audit whether the sensemaking frame was appropriate to the user's goal. None of the 10 dimensions VD1-VD10 probed for cognitive-task character, verb-shape, or metric-appropriateness. **Confidence: HIGH.**

- **The corrected inquiry's R13 frame-error diagnosis is supported by independent prior-docarchive evidence.** R13 named 4 root causes (3 structural + 1 procedural); each maps to direct artifact evidence found in this diagnostic's exploration stage. The corrected inquiry was NOT treated as ground truth — its diagnosis is comparative evidence that converges with independent artifact reads. The convergence raises confidence in the diagnosis without making the corrected inquiry the standard of truth.

- **Three maintenance candidates, with conservative scoping per LOOP_DIAGNOSE Step 5:**
  - **MC1 (monitoring question)** — ACTIONABLE — track future `/MVL+` inquiries for 5-10 more chains; promote MC2 + MC3 from branch-experiment to source-edit if pattern recurs ≥3 times.
  - **MC2 (transcription-audit step at `_branch.md` creation, branch experiment)** — after writing `_branch.md`, re-read raw user input and verify load-bearing phrases survived; affects `cognitive_harness/MVL+/SKILL.md`.
  - **MC3 (metric-appropriateness LBT at Sensemaking, branch experiment)** — when consuming a load-bearing framework from a prior discipline (e.g., Exploration's R5), run an LBT on the framework's appropriateness to the inquiry's stated goal; affects `cognitive_harness/sense-making/references/sensemaking.md`.

- **Diagnostic verdict: PARTIAL.** MC1 is fully actionable (concrete time-bound gate). MC2 and MC3 are guarded as branch experiments because one correction chain is thin evidence for permanent source edits — per LOOP_DIAGNOSE Step 5: "Do not propose broad fundamentals rewrites from one weak correction chain." The overall deliverable is PARTIAL because the source-edit candidates require recurrence evidence; MC1's monitoring is the path to that evidence.

## Finding

### Correction Chain Summary

**Prior path:** `devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/`

**Corrected path:** `devdocs/inquiries/2026-05-22_13-00__cognitive_task_pair_for_mvl_loop_ab_test/`

**Raw human correction (verbatim):**

> "u suggested prompts but almost all of them are about finding, identfying sths, and this is not what i asked. we are not testing between explore and surfacing, we are between MVL+ and MVL2+ so we should give them better meaningful tasks. this way we can both understand cumilative effect of surfacing vs explore on the loop, and also individual outputs of them...
>
> redo it in another inquiry"

**What changed from prior result to corrected result:**

- Verb-shape inversion: prior 10 test prompts started with enumeration verbs (Map / Catalog / Find / Identify / Locate / Enumerate / Generate every); corrected 10 test prompts start with cognitive-task verbs (Why / How / What / Should / Design / Propose / How should).
- Nature-axis reframe: prior axis was N1 = artifact-bounded vs possibility-mode (territory-type); corrected axis was N1 = Diagnostic vs Generative-Design (task-kind).
- Rubric expansion: prior used finding-only DC1+DC2+DC3 (3 dimensions); corrected uses dual-level U1-U5 (upstream-output, 5 dimensions) + F1-F6 (finding, 6 dimensions) = 11 dimensions across 2 levels.
- New gates: corrected introduced SD14 verb-shape verification at Innovation + VD1 verb-shape + VD2 cognitive-task character at Critique (these dimensions did not exist in prior).
- New framing: corrected explicitly operationalized "cumulative effect" via Level 2 vs Level 1 divergence ratio (Path A / B / C interpretation); prior had no such framing.

### Failure Hypotheses

The 4 per-stage hypotheses (H1-H4) below are INSTANCES of the cross-stage pattern H5. They are not competing single-discipline attributions — each names a stage where the cross-stage pattern manifested with direct artifact evidence.

#### Hypothesis 1: _branch.md transcription failure

**Affected stage:** Loop framing / orchestration (not a discipline)

**Shortcoming type:** Semantic compression at transcription. The user's raw input contained two load-bearing phrases: "testing MVL2+ and MVL+ (the difference explore and surfacing makes)" AND "what these MVL loop task can be that it stress tests both explore and surfacing aspects AND **accumulation of other disciplines and finding**." The transcription into `_branch.md`'s Question + Goal sections preserved the first phrase as "discriminate /explore from /surfacing when run as `/MVL+` vs `/MVL2+`" but DROPPED the second phrase ("accumulation of other disciplines and finding") — which was the loop-level / cumulative-effect framing the user later identified as missing.

**Evidence from prior inquiry:** Prior `_branch.md` lines 5 ("discriminate /explore from /surfacing") + 11 ("Each prompt annotated with which mechanism of /explore or /surfacing it stresses") show discipline-level framing throughout the Question + Goal. Prior `finding.md` Source Input section (lines 332-348) preserves the raw input verbatim, showing the "accumulation" phrase was present. Direct text comparison confirms the loss.

**Evidence from human correction:** "we are not testing between explore and surfacing, we are between MVL+ and MVL2+" + "cumulative effect of surfacing vs explore on the loop, and also individual outputs of them" — the user explicitly named the lost framing.

**Evidence from corrected inquiry:** Corrected `_branch.md` Question committed "observe BOTH (a) individual upstream-output differences AND (b) cumulative effect of upstream-discipline choice on final finding" — preserved the loop-level + cumulative-effect framing.

**Confidence:** **HIGH.** Multiple artifacts converge (prior `_branch.md` + raw input + corrected `_branch.md`); the corrected inquiry clearly repairs the same failure.

**Why not stronger:** Only one correction chain observed. Whether this is a one-off transcription artifact or a recurring failure mode requires more chains to assess.

**Maintenance candidate:** MC2 (see below) — transcription-audit step.

**Evaluation gate:** MC2's gate (5-NEW-inquiries branch comparison).

#### Hypothesis 2: Exploration R2 + R5 upstream-axis-stress framing

**Affected stage:** Exploration

**Shortcoming type:** Framework formulation. Exploration committed two regions whose evaluation criteria were defined entirely via upstream-discipline-mechanism stress — ignoring downstream-stage cumulative effect, even though `_branch.md` itself was already discipline-level-framed.

**Evidence from prior inquiry:**

> Prior `docarchive/exploration.md` R2 (lines 56-71):
>
> | **N2** | Diagnostic (what's wrong with X?) | Design (what should X be?) | **MEDIUM — purpose differs but mechanism similar** |
>
> Prior `docarchive/exploration.md` R5 (lines 110-124):
>
> | Per-item-discrete + mixed-relevance | HIGH | **Surfacing's 4-tag vocabulary fully exercised**; /explore's narrative coarser |
> | Asymmetric-failure-prone | HIGH | **Surfacing's umbrella-tag-on-uncertainty fires**; /explore's convergence may exclude |
> | Boundary-implicit | HIGH | **Surfacing's Boundary-discovery sub-phase activates**; /explore's may silently mis-scope |

Three HIGH-discrim categories all cite UPSTREAM-DISCIPLINE-SPECIFIC mechanism firing. No row references downstream-stage amplification.

**Evidence from human correction:** "we are not testing between explore and surfacing" — pushback on discipline-level framing. Exploration's framing was the discipline-level framing.

**Evidence from corrected inquiry:** Corrected exploration.md committed N1 = Diagnostic vs Generative-Design (the previously-MEDIUM-rated task-kind axis) and reformulated discrimination as downstream-amplification spread (corrected R7).

**Confidence:** **HIGH** — direct quoted evidence.

**Why not stronger:** Whether Exploration's spec would have produced different ratings under different prompt language is unknown; one chain.

**Maintenance candidate:** Implicit in MC3 (Sensemaking metric-appropriateness LBT catches downstream).

**Evaluation gate:** Covered by MC3's gate.

#### Hypothesis 3: Sensemaking SP1 inheritance-without-re-validation

**Affected stage:** Sensemaking

**Shortcoming type:** Procedural failure — Sensemaking consumed Exploration's "three strong" nature-axis candidates without auditing the strong/medium ratings against the inquiry's stated goal.

**Evidence from prior inquiry:** Prior `docarchive/sensemaking.md` SP1 (line 45): "Three strong task-nature axis candidates from exploration: N1 (artifact-bounded vs possibility-mode), N3 (explicit-bounded vs implicit-territory), N6 (known-answer vs open-ended-generative)." N2 (Diagnostic vs Design) is absent — already pre-pruned at Exploration. Sensemaking's A1 ambiguity counter-test (line 175) tested "domain-mix" as counter — task-kind was not considered. Two LBTs ran (LBT1 "Discrimination" + LBT2 "Nature-difference") but both operated within the inherited frame; neither tested frame-appropriateness.

**Evidence from human correction:** The correction targets the FRAME, not specific prompts — implying frame was wrong. Sensemaking's job is to commit the frame; the frame was inherited without re-validation.

**Evidence from corrected inquiry:** Corrected `docarchive/sensemaking.md` SP1 committed Diagnostic vs Generative-Design (the previously-excluded N2); corrected `docarchive/critique.md` VP8 added "Root cause 4: Inherited-metric-not-re-validated" as explicit named failure mode.

**Confidence:** **HIGH** — SP1 explicit; A1 counter-test misses task-kind; LBTs operate within frame.

**Why not stronger:** Sensemaking's current spec does not require an LBT on inherited evaluation frameworks. Whether Sensemaking could have caught this without spec change is debatable. One chain.

**Maintenance candidate:** MC3 (metric-appropriateness LBT branch experiment).

**Evaluation gate:** MC3's gate.

#### Hypothesis 4: Critique VD2 inheritance from R5

**Affected stage:** Critique

**Shortcoming type:** Dimension inheritance — Critique's load-bearing dimension VD2 (Discrimination strength, CRITICAL weight) explicitly inherited from "Sensemaking FP3 + Exploration R5." Critique's Phase 0 dimension-validation operated within the inherited frame.

**Evidence from prior inquiry:** Prior `docarchive/critique.md` line 20: "**VD2 | Discrimination strength | CRITICAL | Sensemaking FP3 + Exploration R5**." Source column explicitly cites inherited framework. None of VD1-VD10 probes for cognitive-task character / verb-shape / metric-appropriateness. VD1 (R9 anti-pattern) DID check for "trivial enumeration" but R9's vocabulary referred to LOW-discrim cases (CTRL anti-patterns, e.g., single-file ls) — didn't catch HIGH-discrim enumeration-shape that was rated HIGH by R5.

**Evidence from human correction:** Same as H1-H3 — frame error not caught at Critique either.

**Evidence from corrected inquiry:** Corrected `docarchive/critique.md` introduced VD1 (verb-shape verification) + VD2 (cognitive-task character) as CRITICAL dimensions — NEW dimensions specifically catching enumeration-shape that prior VD1-VD10 missed.

**Confidence:** **HIGH** — Source column evidence + dimension comparison.

**Why not stronger:** Critique's Phase 0 says "verify dimensions against sensemaking output" — Critique did this. Whether the spec requires AUDITING the frame is debatable. One chain.

**Maintenance candidate:** Overlaps with MC3 (auditing inherited frame at Sensemaking prevents Critique inheritance).

**Evaluation gate:** Covered by MC3's gate.

#### Hypothesis 5: Cross-stage inheritance-without-re-validation pattern (SUPERORDINATE)

**Affected stage:** Cross-stage pattern integrating H1-H4

**Shortcoming type:** Propagation mechanism — framework-inheritance propagating from upstream framing error. Every stage (Exploration, Sensemaking, Decomposition, Innovation, Critique, CONCLUDE) consumed upstream commitments without auditing them. The failure compounded.

```
User raw input (had: loop-level + cumulative-effect framing)
  ↓ (transcription dropped "accumulation of other disciplines and finding")
_branch.md (discipline-level framing)
  ↓ (Exploration consumes _branch.md framing)
R2 + R5 (upstream-axis-stress as discrim metric; task-kind axis rated MEDIUM)
  ↓ (Sensemaking consumes "three strong" from R2; consumes R5 framing)
SP1 + SD1 (territory-type axis committed; task-kind never reconsidered)
  ↓ (Decomposition partitions per SD1)
  ↓ (Innovation generates from territory-type seeds)
12 enumeration-shape prompts
  ↓ (Critique inherits VD2 from R5; no frame-audit dimension)
VD1-VD10 (no cognitive-task character probe)
  ↓ (CONCLUDE compiles deliverable faithfully)
finding.md (enumeration-shape prompts as deliverable; user rejects)
```

**Evidence from prior inquiry:** propagation trace above; each arrow grounded in cited artifact.

**Evidence from human correction:** correction targets OUTPUT SHAPE (enumeration), not any single stage. Shape is cumulative result of inherited frame propagating.

**Evidence from corrected inquiry:** corrected R13 named 4 root causes (3 structural + 1 procedural). The procedural cause ("Inherited-metric-not-re-validated") IS this cross-stage pattern at the Sensemaking-stage instance. H5 reframes it as cross-stage rather than localizing to Sensemaking.

**Confidence:** **HIGH** — multi-stage propagation trace + 4 counter-hypotheses tested (each partial-correct-but-mis-attributes-single-source); single-discipline attribution rejected.

**Why not stronger:** The cross-stage framing vs single-stage (R13 root cause 4) framing is a level-of-abstraction choice. Both framings produce the same maintenance candidate (MC3). Whether cross-stage adds explanatory power beyond Sensemaking-local is judgment; this finding commits to cross-stage because it explains WHY the same MC3 is structurally sufficient.

**Maintenance candidate:** MC3 (metric-appropriateness LBT at Sensemaking — earliest point in cascade where the pattern can be caught with minimal spec change). Optionally MC1's monitoring extends to track cross-stage symptoms.

**Evaluation gate:** MC3's gate + MC1's monitoring.

### Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| Loop framing / orchestration (H1) | Semantic compression at `_branch.md` transcription | strong | HIGH | MC2 (transcription-audit branch experiment) |
| Exploration (H2) | Upstream-axis-stress framing in R2 + R5 | strong | HIGH | Covered by MC3 (downstream audit at Sensemaking) |
| Sensemaking (H3) | Inheritance-without-re-validation of R5 framework | strong | HIGH | MC3 (metric-appropriateness LBT branch experiment) |
| Critique (H4) | Inheritance of VD2 from R5 without frame audit | medium-strong | HIGH | Covered by MC3 (catches earlier in cascade) |
| Cross-stage pattern (H5) | Framework-inheritance propagating without re-validation | strong | HIGH | MC3 + MC1 (monitoring) |

Mixed attribution explicit: orchestration (H1) + per-discipline (H2-H4) + cross-stage (H5). Per LOOP_DIAGNOSE Step 5: failure not collapsed into single discipline.

### Maintenance Candidates

#### MC1 — Monitoring question

- **What changes:** Nothing yet — collect more evidence.
- **File or protocol affected:** None directly; this is a monitoring proposal.
- **Risk class:** LOW (no source change).
- **Expected benefit:** Track future `/MVL+` inquiries (5-10 new ones) for the same pattern. If `_branch.md` transcription errors recur, OR Sensemaking's frame-inheritance produces frame errors recur in ≥3 of the next 10 chains, promote MC2 + MC3 from branch-experiment to source-edit proposal.
- **Evaluation gate:** Time-bound — after 5-10 future `/MVL+` inquiries, review the chain for transcription errors and frame-inheritance failures.
- **Branch experiment:** NO — this IS the monitoring criterion for MC2 + MC3.

#### MC2 — Transcription-audit step at `_branch.md` creation (branch experiment)

- **What changes:** Add to the runner's `_branch.md` creation flow: after writing `_branch.md`, re-read the raw user input and structurally check that load-bearing phrases survived transcription. Specifically: scan raw input for clause-pairs joined by "and" / "AND" / "BOTH ... AND" — these often indicate user's multi-part framing. Verify each clause's content appears in `_branch.md`'s Question or Goal. Surface drops to user before proceeding to Exploration.
- **File or protocol affected:** `cognitive_harness/MVL+/SKILL.md` (the runner spec). Optionally `cognitive_harness/protocols/branch_inquiry.md` for branch-new inquiries.
- **Risk class:** MEDIUM (changes runner template; affects all future inquiries).
- **Expected benefit:** Catches H1 transcription failures where load-bearing phrases get dropped.
- **Evaluation gate:** Branch experiment — create parallel `MVL+/SKILL.md` with the audit step; run 5 NEW inquiries through both versions; compare whether audited version catches load-bearing phrase loss in ≥3 of 5 chains where the user input contains multi-part framing.
- **Branch experiment:** YES — per LOOP_DIAGNOSE Step 5, one-chain evidence is thin for permanent source edits.

#### MC3 — Metric-appropriateness LBT at Sensemaking (branch experiment)

- **What changes:** Add a refinement note to Sensemaking spec, Phase 3 Ambiguity Collapse: when consuming a load-bearing framework from a prior discipline (e.g., Exploration's R5 discrim metric, evaluation ratings, etc.), run a Load-Bearing-concept Test (LBT) on the framework's APPROPRIATENESS to the inquiry's stated goal. The LBT predicate: "if this framework's strong/medium ratings are followed, does the resulting decision serve the user's stated goal as captured in `_branch.md`'s Question and Goal?" If unclear, surface as Open Question to user before proceeding to commitment.
- **File or protocol affected:** `cognitive_harness/sense-making/references/sensemaking.md` (Phase 3 → Load-bearing concept test refinement note).
- **Risk class:** MEDIUM (changes Sensemaking spec; affects all future inquiries).
- **Expected benefit:** Catches H3 (and indirectly H4 / cross-stage H5) inheritance-without-re-validation patterns where Sensemaking consumes upstream's framework without auditing.
- **Evaluation gate:** Branch experiment — create parallel `sensemaking.md` with the metric-appropriateness LBT; run 5 NEW inquiries through both versions where Exploration produces a strong evaluation framework that Sensemaking would normally inherit; compare whether audited version catches frame-inheritance failures in ≥3 of 5.
- **Branch experiment:** YES — same evidence-strength caveat as MC2.

## Diagnostic Verdict

**Overall:** **PARTIAL**

- **Best-supported diagnosis:** H5 (cross-stage inheritance-without-re-validation pattern). The pattern propagated from a `_branch.md` transcription failure (H1) through Exploration's upstream-axis-stress framing (H2), Sensemaking's framework-inheritance (H3), and Critique's dimension-inheritance (H4). Each instance is individually evidenced; together they form the propagation mechanism. The corrected inquiry's R13 root cause 4 ("Inherited-metric-not-re-validated") names this pattern at the Sensemaking-stage instance; H5 reframes it as cross-stage.

- **Strongest maintenance candidate:** MC1 (monitoring question). MC1 is fully ACTIONABLE per LOOP_DIAGNOSE Step 4 — it has a concrete evaluation gate (5-10 future inquiries) and no source-change risk. MC2 and MC3 are guarded as branch experiments because one correction chain is thin evidence for source-edit proposals.

- **Main uncertainty:** Whether the failure pattern is recurring (which would justify MC2 + MC3 as permanent source edits) or one-off (which would justify only MC1's monitoring). Per LOOP_DIAGNOSE Step 5: "Do not propose broad fundamentals rewrites from one weak correction chain." MC1's monitoring is the path to resolving the uncertainty.

- **Recommended next step:** Adopt MC1 (monitoring). Defer MC2 + MC3 as branch experiments to run only IF MC1's monitoring confirms recurrence. Do NOT make permanent source edits to `cognitive_harness/MVL+/SKILL.md`, `cognitive_harness/sense-making/references/sensemaking.md`, or `cognitive_harness/td-critique/references/td-critique.md` from this one correction chain alone.

### Why PARTIAL rather than ACTIONABLE

Per LOOP_DIAGNOSE Step 4 definitions:
- **ACTIONABLE:** "at least one maintenance candidate has enough evidence and a concrete evaluation gate." MC1 qualifies on this criterion.
- **PARTIAL:** "the correction chain reveals likely weaknesses, but source changes need more evidence." This more accurately captures the deliverable's overall posture — MC2 and MC3, which are the LOAD-BEARING corrective candidates (they address H1-H5's structural surfaces), are guarded as branch experiments pending recurrence evidence. MC1 alone is actionable, but MC1 is itself a path-to-evidence rather than a corrective.

The PARTIAL verdict reflects methodological honesty: the diagnostic is strong enough to name the failure pattern with HIGH confidence per hypothesis, but the prescriptive remedy is appropriately conservative.

## Reasoning

### Why mixed attribution rather than single-discipline

Four counter-hypotheses tested at exploration's R10:

- **"Sensemaking alone is at fault"** — partially correct (Sensemaking DID inherit without auditing) but mis-attributes the SOURCE of the bias. The bias was Exploration's R2/R5 framing, which Sensemaking inherited.

- **"Exploration alone is at fault"** — partially correct (Exploration's R2/R5 framing was biased) but mis-attributes the source. The framing was inherited from `_branch.md`'s discipline-level Question + Goal.

- **"Critique alone is at fault"** — partially correct (Critique inherited VD2 from R5 without auditing) but Critique's dimensions are designed to come from Sensemaking; the failure is upstream inheritance.

- **"This is a single-failure-at-Sensemaking — SP1 should have considered task-kind"** — Sensemaking COULD have caught it via metric-appropriateness check, but that check is not currently part of Sensemaking's spec. Attribution: PARTIAL.

Each counter is partially correct; each mis-attributes a SINGLE source. The pattern (H5) explains why no single source isolation works — the failure is propagated.

### Why MC3 is structurally sufficient despite being scoped to Sensemaking

The cascade is: `_branch.md` → Exploration → Sensemaking → Decomposition → Innovation → Critique → CONCLUDE.

Adding a metric-appropriateness LBT at Sensemaking catches the failure EARLY in the cascade:
- If Sensemaking audits the inherited framework against the user's stated goal, it can detect frame errors before they propagate to Decomposition, Innovation, Critique.
- Earlier catches dominate later catches structurally — even if Critique could ALSO audit (separate maintenance candidate), Sensemaking's audit prevents the bad commitments from being made in the first place.

MC3 at Sensemaking is the minimum-intervention-maximum-leverage point. MC2 at `_branch.md` is complementary (catches at orchestration); the two together cover the propagation entry points.

### Why one-chain evidence is insufficient for source-edit proposals

Per LOOP_DIAGNOSE Step 5: "Do not propose broad fundamentals rewrites from one weak correction chain." Reasoning:
- One chain may be idiosyncratic (specific to this user, this question, this session state).
- Source edits to `cognitive_harness/MVL+/SKILL.md` or `cognitive_harness/sense-making/references/sensemaking.md` affect ALL future inquiries.
- The risk of false-positive remediation (changing the spec for a non-recurring pattern) outweighs the benefit unless recurrence is confirmed.

MC1's monitoring provides the path-to-evidence. After 5-10 more chains, if the pattern recurs ≥3 times, the source-edit candidates can be promoted with sufficient confidence.

### Self-reference vigilance applied

This diagnostic was authored by Claude — the same agent that authored both the prior weak inquiry AND the corrected inquiry. The diagnostic of one's own error carries self-reference risk: the corrected inquiry's R13 is my own diagnosis; using it as ground truth would be circular.

Mitigations applied:
1. **External grounding via user's explicit correction** — the user's correction is the load-bearing external signal that triggered both the corrected inquiry and this diagnostic.
2. **Cross-checked R13 against independent prior-docarchive evidence** — exploration's R3-R5 read prior docarchive files (R2, R5, SP1, VD2 dimensions) directly. The match between R13's claims and the independent evidence supports R13 as a hypothesis, not as truth.
3. **Per-stage isolated artifact reads** — each diagnostic stage operated from disk-read evidence, not from recall.
4. **Counter-hypothesis testing** — 4 single-discipline counter-hypotheses tested; each rejected on structural grounds (each mis-attributes a single source); H5 cross-stage adopted as best-supported.

Self-reference collapse NOT observed (per Critique VD7 + Phase 4 failure-mode check).

## Open Questions

### Monitoring

- **Does the H1 transcription pattern recur in future chains?** Observable via MC1.
- **Does the H5 cross-stage inheritance-without-re-validation pattern recur?** Observable via MC1.
- **Does Sensemaking's current spec produce frame-inheritance failures when consuming any upstream evaluation framework?** Observable across diverse future inquiries.

### Blocked

- The strength of MC2 and MC3 as permanent source edits cannot be determined from one correction chain. Need 5-10 more chains.
- The cross-stage pattern's generalization beyond /MVL+ to other loop runners (/MVL classic, future /MVL2+ chains) is unknown.

### Research Frontiers

- **Generic pattern: how does framework-inheritance fail across cognitive disciplines?** This diagnostic's H5 names a specific instance; the general phenomenon (downstream stages consuming upstream commitments without auditing) likely appears elsewhere. Out of scope here per LOOP_DIAGNOSE Step 5.

- **Generic remedy: how should a discipline-chain audit inherited frameworks against the inquiry's stated goal?** MC3 is one specific instance (Sensemaking LBT); the general protocol could be a Cross-Stage-Audit pattern. Out of scope per Step 5.

### Refinement Triggers

- **Promote MC2 + MC3 from branch-experiment to source-edit** if MC1's monitoring confirms recurrence in ≥3 of next 10 chains.

- **Re-open the diagnostic** if MC1's monitoring shows the pattern does NOT recur — would suggest this was a one-off and MC2/MC3 should be abandoned.

- **Promote LOOP_DIAGNOSE itself from protocol to standalone skill** only after 5-10 successful diagnostic chains demonstrate a stable internal method distinct from ordinary MVL+ on a diagnostic question (per LOOP_DIAGNOSE Step 5 + Step 6 guardrails).
