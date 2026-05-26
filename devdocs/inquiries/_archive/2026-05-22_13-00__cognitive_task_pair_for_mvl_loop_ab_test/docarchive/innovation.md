# Innovation: Loop-Level Meaningful Task Pair Design for /MVL+ vs /MVL2+ Comparison

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_13-00__cognitive_task_pair_for_mvl_loop_ab_test/_branch.md`

Plus additional instructions: per-piece Seed → Generate → Test at 9 pieces (P1-P9); each test-prompt body MUST start with cognitive verb (SD14 anti-regression gate); each CTRL body MUST start with lookup verb; amplification prediction must name at least one downstream stage; CONTRARIAN-RETHINK at P5; assembly check.

---

## Intuition / Direction

The corrected deliverable's intuition: cognitive tasks where the LOOP (not just upstream) does substantive work; the upstream choice contributes by mapping territory, downstream disciplines extract anchors, partition pieces, generate options, evaluate verdicts. Direction: choose prompts where /explore vs /surfacing produces different INPUTS to downstream, and the cascade either preserves the difference (Path A or B amplification) or normalizes it (Path C). Valuation: this is empirical validation that the structural verdict from the comparative-evaluation finding translates operationally.

Self-reference vigilance: I drafted /surfacing AND I designed the prior frame-erroneous inquiry. The corrective is my own diagnosis of my own error, externally grounded by the user's correction. The verb-shape gate at SD14 is structural anti-regression — it forces me to check each prompt's first verb against an enumeration-verb blocklist.

---

## P1 — 5 Diagnostic test prompt bodies

### Seed

Seeds D2 (frame-error diagnostic), D3 (self-containedness violations), D8 (L4 multi-head failure anticipation) + 2 derived. PRIMARY deliverable shape: understanding-with-evidence. Cognitive-verb-start required.

### Generate

**Mechanism: Combination** (seed × cognitive-task-shape constraint × harness-internal territory × cognitive-verb start)
**Mechanism: Constraint Manipulation** (size ~5-8 items; verb-shape gate)
**Mechanism: Lens Shifting** (re-frame seeds from "find / map" verbs to "why / how / what's causing" verbs)

**d-1** (from D2; verb: **Why**; PRIMARY amplification: Sense-making + Critique):

```
Why did the prior inquiry (devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/finding.md) produce enumeration-shaped prompts when the user wanted loop-level tests? Diagnose the structural pressure points in that inquiry's design process (which discipline outputs, which decisions, which framings drifted the design toward enumeration), and propose corrective additions to cognitive_harness/protocols/ or relevant discipline specs that would catch similar frame errors earlier when designing tests for cognitive disciplines.
```

**d-2** (from D3; verb: **Why**; PRIMARY amplification: Sense-making + Critique):

```
Why does the cognitive harness's disciplines-self-contained principle (as committed in auto-memory at ~/.claude/projects/.../memory/feedback_disciplines_self_contained.md) keep getting violated when new or updated discipline specs are drafted at cognitive_harness/<discipline>/references/<spec>.md? Diagnose the structural pressures that pull spec drafts toward inter-discipline coupling (vocabulary borrowing, mechanism reference, sibling-discipline naming), and propose what would structurally reduce violations during drafting.
```

**d-3** (from D8; verb: **What is most likely**; PRIMARY amplification: Innovation + Critique):

```
What is most likely to break first when the cognitive harness reaches L4 multi-head autonomy (parallel disciplines running concurrently with downstream merger) per docs/autonomy_ladder.md? Diagnose the structural risks introduced by parallelism (race conditions, contradictory outputs, accumulator desync) and by merging (conflict resolution, weight arbitration, residual-disagreement handling), and propose which risks deserve first-class catalog entries vs which can be handled at runtime.
```

**d-4** (derived; verb: **How did**; PRIMARY amplification: Sense-making + Decomposition):

```
How did this session's chain of six successive /MVL+ inquiries on /surfacing-related design (the inquiries at devdocs/inquiries/2026-05-22_01-25__..., 02-13__..., 07-31__..., 09-02__..., 11-35__..., and this one) achieve productive convergence? Diagnose the operational patterns that made the chain work (iteration-correction cadence, external-grounding sources, user-correction-as-signal, structural decisions accumulating), and propose what should be repeatable for future multi-inquiry sessions on a single design problem.
```

**d-5** (derived; verb: **Why**; PRIMARY amplification: Sense-making + Innovation):

```
Why does the cognitive harness tend to reach for "add another discipline" as the default response to perceived loop gaps (e.g., /anticipate, /merge, /reflect added or proposed) rather than refining existing disciplines or composing them differently? Diagnose the design-tendency's roots in the current discipline taxonomy + how disciplines are catalogued, and propose alternative responses that preserve coverage without bloating the discipline count.
```

### Test

| Test | d-1 | d-2 | d-3 | d-4 | d-5 |
|---|---|---|---|---|---|
| Verb-shape verification (cognitive verb) | ✓ "Why" | ✓ "Why" | ✓ "What is most likely" | ✓ "How did" | ✓ "Why" |
| Primary deliverable = understanding-with-evidence | ✓ | ✓ | ✓ | ✓ | ✓ |
| Amplification names downstream stage | ✓ Sense-making + Critique | ✓ Sense-making + Critique | ✓ Innovation + Critique | ✓ Sense-making + Decomposition | ✓ Sense-making + Innovation |
| All 5 stages do substantive work | ✓ all stages required | ✓ | ✓ | ✓ | ✓ |
| R9 anti-patterns avoided | ✓ (not enum/narrative/single-item) | ✓ | ✓ | ✓ | ✓ |
| Authorship-bias residual LOW | ✓ about process, not specs | ✓ about principle, not specs | ✓ about future state | ✓ about session pattern | ✓ about design tendency |
| Self-contained + paste-ready | ✓ | ✓ | ✓ | ✓ | ✓ |
| Mechanism independence (would Combination alone suffice?) | NO — Combination + Lens Shifting (verb re-framing) required | NO same | NO same | NO + Absence Recognition (productive pattern) | NO + Absence Recognition (alternative responses) |

All 5 prompts PASS. Disposition: **ACTIONABLE**.

---

## P2 — 5 Generative-Design test prompt bodies

### Seed

Seeds G1 (frame-error recovery protocol design), G2 (merger discipline design), G6 (regression-detection sub-system design) + 2 derived. PRIMARY deliverable shape: construction-with-components-and-trade-offs. Cognitive-verb-start required. G3 (pre-loop framing protocol) considered as G1's alternative; derived as g-4.

### Generate

**Mechanism: Combination** + **Mechanism: Absence Recognition** (gaps in the harness → designs that fill them) + **Mechanism: Lens Shifting** (verb re-framing from "generate every" to "design / propose / build")

**g-1** (from G1; verb: **Design**; PRIMARY amplification: Decomposition + Critique):

```
Design a meta-loop refinement protocol the cognitive harness can use to detect and recover from frame errors like the one in devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/finding.md (where prompts intended to test the loop ended up testing only the upstream discipline). What detection signals (observable in discipline outputs or _state.md) would catch such errors at which stage, what recovery procedures would re-frame the inquiry without restart, and what integration points with cognitive_harness/protocols/branch_inquiry.md or conclude.md would make the corrective load-bearing?
```

**g-2** (from G2; verb: **Design**; PRIMARY amplification: Decomposition + Innovation):

```
Design the cognitive harness's first version of a "merger" discipline that combines outputs from parallel cognitive disciplines (in the multi-head loops at L4+ per docs/autonomy_ladder.md). Propose the discipline's identity (what cognitive operation it captures), components (sub-mechanisms: conflict resolution, weight arbitration, residual-disagreement handling, etc.), failure modes (predictable degradation patterns specific to merging), and load-bearing primitives drawn from the typed primitive set at docs/thinking_space_dynamics.md — with reasoning about which primitives each component uses and why.
```

**g-3** (from G6; verb: **Design**; PRIMARY amplification: Decomposition + Critique):

```
Design a regression-detection sub-system that runs alongside /MVL+ (and /MVL2+) and flags when a new inquiry's outputs are systematically lower-quality than baseline — using the 23-symptom catalog at docs/regression/desc.md as the symptom vocabulary. Propose the sub-system's components, the detection thresholds per symptom-pattern (from the 5 diagnostic patterns), the alert mechanism (where in _state.md does the flag surface), the recovery action (what the runner does when flagged), and integration with the CONCLUDE archive pattern.
```

**g-4** (derived from G3 alternative; verb: **Propose**; PRIMARY amplification: Decomposition + Innovation + Critique):

```
Propose a "pre-loop framing protocol" that the cognitive harness runs BEFORE executing /MVL+ or /MVL2+ on a new question. Design what checks ensure the question is well-framed for the cognitive work it requires (whether the user wants a decision, diagnosis, design, or strategy), what to surface to the user when framing is unclear, how to handle multi-layer ambiguity (Meaning / Structural / Process — per the current Layer Commitment check in cognitive_harness/MVL+/SKILL.md), and how this integrates with the existing _branch.md creation step without bloating it.
```

**g-5** (derived; verb: **How should**; PRIMARY amplification: Sense-making + Decomposition + Critique):

```
How should the cognitive harness handle cross-session resume when an active inquiry has accumulated 100k+ tokens of discipline outputs across multiple discipline files? Design the strategy preserving cognitive continuity across sessions without context bloat. Address: the flow-type resumption logic in cognitive_harness/protocols/resume.md, the CONCLUDE archive pattern, what gets reloaded vs summarized vs deferred, how the runner detects accumulated-context state in _state.md, and the trade-off between fidelity (reload all) and budget (summarize and defer).
```

### Test

| Test | g-1 | g-2 | g-3 | g-4 | g-5 |
|---|---|---|---|---|---|
| Verb-shape (cognitive verb) | ✓ "Design" | ✓ "Design" | ✓ "Design" | ✓ "Propose" | ✓ "How should" |
| Primary deliverable = construction-with-components-and-trade-offs | ✓ | ✓ | ✓ | ✓ | ✓ |
| Amplification names downstream stage | ✓ Decomp + Critique | ✓ Decomp + Innovation | ✓ Decomp + Critique | ✓ Decomp + Innovation + Critique | ✓ SM + Decomp + Critique |
| All 5 stages do substantive work | ✓ | ✓ | ✓ | ✓ | ✓ |
| R9 anti-patterns avoided | ✓ | ✓ | ✓ | ✓ | ✓ |
| Authorship-bias residual LOW | ✓ about new protocol | ✓ about new discipline | ✓ about new sub-system | ✓ about new protocol | ✓ about runtime concern |
| Self-contained + paste-ready | ✓ | ✓ | ✓ | ✓ | ✓ |
| Mechanism independence | NO — Combination + Absence Recognition | NO same | NO same | NO same | NO + Domain Transfer (memory management patterns) |

All 5 prompts PASS. Disposition: **ACTIONABLE**.

---

## P3 — 2 Negative-control prompt bodies

### Seed

CTRL purpose: bypass loop cognitive machinery; both forks produce nearly-identical findings; empirically anchor noise floor. Lookup-verb-start required.

### Generate

**Mechanism: Inversion** (CTRL is the inverse of test prompts: no cognitive work → no amplification → no divergence expected) + **Mechanism: Constraint Manipulation** (tiny territory; trivial answer)

**c-d** (D-analog control; verb: **Confirm**; expected amplification: NONE):

```
Confirm that the file at cognitive_harness/MVL+/SKILL.md exists. Report its line count, the first heading after the YAML frontmatter, and the first three skill names that appear in the "Skill-to-command mapping" table within the file. Produce a finding that lists these four facts verbatim.
```

**c-g** (G-analog control; verb: **Read and summarize**; expected amplification: NONE):

```
Read and summarize the contents of the "## Status" field in the file at devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/_state.md, plus the value of the "## Next Discipline" field in the same file. Produce a finding reporting both values verbatim.
```

### Test

| Test | c-d | c-g |
|---|---|---|
| Verb-shape (lookup verb) | ✓ "Confirm" | ✓ "Read and summarize" |
| Territory well-bounded (tiny) | ✓ one file; 4 facts | ✓ one file; 2 fields |
| Bypasses cognitive machinery (no anchors / no pieces / no candidates / no probes) | ✓ deterministic lookups | ✓ verbatim reads |
| Both /MVL+ and /MVL2+ expected to converge on same finding | ✓ | ✓ |
| Self-contained + paste-ready | ✓ | ✓ |
| Reason for "expected LOW divergence" explicit | ✓ deterministic facts | ✓ verbatim field values |

Both CTRLs PASS. Disposition: **ACTIONABLE** as negative controls.

**Note:** If either CTRL produces meaningfully divergent findings, that's diagnostic of unidentified noise. The diagnostic readings in P8 handle this case.

---

## P4 — Annotation table (12 rows)

### Seed

Per-prompt: nature (D / G / CTRL) + primary downstream amplification stage(s) + approximate size + flag.

### Generate

**Mechanism: Combination** (each prompt × annotation fields)

| Prompt ID | Nature | Primary downstream amplification | Approx. size | Flag |
|---|---|---|---|---|
| **d-1** (frame-error why) | D | Sense-making (anchor structure of frame error) + Critique (testing corrective viability) | ~5-8 root causes + corrective points | clean |
| **d-2** (self-containedness why) | D | Sense-making (violation-pressure anchors) + Critique (fix viability) | ~5-7 violations + fixes | clean |
| **d-3** (L4 breaks first) | D | Innovation (failure-mode generation) + Critique (risk-severity testing) | ~5-8 anticipated risks | clean |
| **d-4** (productive chain how) | D | Sense-making (pattern anchors) + Decomposition (per-inquiry contribution analysis) | ~5-6 patterns | clean |
| **d-5** (add-discipline tendency why) | D | Sense-making (tendency anchors) + Innovation (alternative response generation) | ~3-5 alternatives | clean |
| **g-1** (frame-error recovery design) | G | Decomposition (component partition) + Critique (testing detection signals) | ~5-7 components | clean |
| **g-2** (merger discipline design) | G | Decomposition (component partition) + Innovation (component variants + primitive mapping) | ~6-8 components | clean |
| **g-3** (regression-detection design) | G | Decomposition (architecture partition) + Critique (testing detection thresholds) | ~5-7 components | clean |
| **g-4** (pre-loop framing protocol design) | G | Decomposition (check-pieces) + Innovation (check variants) + Critique (testing framing validity) | ~4-6 checks | clean |
| **g-5** (cross-session strategy design) | G | Sense-making (continuity anchors) + Decomposition (component design) + Critique (trade-off testing) | ~3-5 strategies + components | clean |
| **c-d** (lookup CTRL) | CTRL | NONE — loop machinery bypassed by design (lookup answers; no anchors / pieces / candidates / probes) | 4 facts | negative control (expected LOW divergence) |
| **c-g** (lookup CTRL) | CTRL | NONE — same | 2 field values | negative control |

### Test

| Test | Result |
|---|---|
| 12 rows complete | YES |
| Each row: prompt-id + nature + amplification + size + flag | YES |
| Amplification predictions use consistent stage-name vocabulary | YES (sense-making / decomposition / innovation / critique) |
| All test-prompt rows show at least ONE downstream stage in amplification | YES (validates loop-level test character) |
| CTRL rows explicitly show "NONE" + reason | YES |
| Test-prompt amplification predictions distribute across downstream stages (not all on one) | YES — Sense-making (5 prompts) + Decomposition (5) + Innovation (4) + Critique (5) all referenced |

PASS. Disposition: **ACTIONABLE**.

---

## P5 — Pair-selection guidance with CONTRARIAN-RETHINK

### Seed

For each group: which 2-of-5 pair has the sharpest predicted cumulative-effect signal? Apply CONTRARIAN-RETHINK.

### Generate

**Mechanism: Extrapolation** (extending amplification predictions to ranking) + **Mechanism: Inversion** (CONTRARIAN-RETHINK)

**Group D analysis:**

Counting downstream stages per prompt:
- d-1: Sense-making + Critique = 2 distinct downstream stages
- d-2: Sense-making + Critique = 2 distinct (same as d-1)
- d-3: Innovation + Critique = 2 distinct
- d-4: Sense-making + Decomposition = 2 distinct
- d-5: Sense-making + Innovation = 2 distinct

Pair amplification-spread (unique downstream stages covered):
- **d-1 + d-3:** Sense-making + Innovation + Critique = **3 distinct stages** ← widest spread
- d-1 + d-2: Sense-making + Critique = 2 (same)
- d-1 + d-4: Sense-making + Decomposition + Critique = 3
- d-1 + d-5: Sense-making + Innovation + Critique = 3 (same as d-1 + d-3 in stage coverage; d-5 is MEDIUM-HIGH discrim per annotation)
- d-3 + d-4: Sense-making + Decomposition + Innovation + Critique = **4 distinct stages** ← widest
- d-3 + d-5: Sense-making + Innovation + Critique = 3
- d-4 + d-5: Sense-making + Decomposition + Innovation = 3

**Sharpest D pair candidate: d-3 + d-4** — covers 4 distinct downstream stages (Sense-making + Decomposition + Innovation + Critique). Each prompt is HIGH or MEDIUM-HIGH discrim.

Alternative: **d-1 + d-3** — covers 3 distinct stages (Sense-making + Innovation + Critique); both prompts HIGH discrim; concentrated stress on critique and innovation.

**Group G analysis:**

Counting downstream stages per prompt:
- g-1: Decomposition + Critique = 2
- g-2: Decomposition + Innovation = 2
- g-3: Decomposition + Critique = 2
- g-4: Decomposition + Innovation + Critique = 3
- g-5: Sense-making + Decomposition + Critique = 3

Pair amplification-spread:
- g-1 + g-2: Decomposition + Critique + Innovation = 3
- **g-1 + g-5:** Sense-making + Decomposition + Critique = 3 (Sense-making added)
- g-2 + g-3: Decomposition + Innovation + Critique = 3
- g-2 + g-4: Decomposition + Innovation + Critique = 3
- g-2 + g-5: Sense-making + Decomposition + Innovation + Critique = **4 distinct** ← widest
- g-3 + g-4: Decomposition + Innovation + Critique = 3
- **g-4 + g-5:** Sense-making + Decomposition + Innovation + Critique = **4 distinct** ← widest
- g-3 + g-5: Sense-making + Decomposition + Critique = 3

**Sharpest G pair candidate: g-4 + g-5 OR g-2 + g-5** — both cover all 4 distinct downstream stages.

Selection between g-4 + g-5 vs g-2 + g-5: g-4 is itself a 3-stage amplifier; g-2 is a 2-stage amplifier. **g-4 + g-5** has higher per-prompt amplification; **g-2 + g-5** spreads across two prompts more evenly.

Commit: **g-4 + g-5** (sharpest predicted spread).

Alternative: **g-2 + g-5** (equally defensible spread; different content domain — merger discipline + cross-session strategy).

### CONTRARIAN-RETHINK Inversion-candidate: "what if NO pair is meaningfully sharper than the others?"

**Test for Group D:**
- All 5 D prompts have similar discrim strength
- But amplification-stage spread varies: 2-stage (d-1, d-2, d-3, d-4, d-5 individually) vs 4-stage (d-3 + d-4 pair) vs 3-stage (other pairs)
- d-3 + d-4 covers 4 distinct downstream stages; d-1 + d-2 covers only 2 (same stages stressed twice). NOT equivalent — d-3 + d-4 is structurally sharper.
- CONTRARIAN REJECTED for Group D on structural grounds.

**Test for Group G:**
- g-4 + g-5 and g-2 + g-5 both cover 4 distinct downstream stages
- Other pairs cover 3
- 4-stage pairs ARE sharper than 3-stage pairs
- Within 4-stage pairs, g-4 + g-5 vs g-2 + g-5 — both defensible; g-4 has higher per-prompt amplification
- CONTRARIAN REJECTED on overall sharpest-pair claim; ACCEPTED-with-caveat on "single sharpest pair" claim (two pairs tied at top)

### Final pair recommendations

**Group D: d-3 + d-4** (4-stage amplification spread: Sense-making + Decomposition + Innovation + Critique).
- d-3 (L4 breaks first what) stresses Innovation + Critique
- d-4 (productive chain how) stresses Sense-making + Decomposition
- Together they exercise ALL FOUR downstream cognitive stages, with no overlap.

**Alternative for Group D: d-1 + d-3** (3-stage spread; both prompts HIGH discrim; concentrated on Sense-making + Innovation + Critique). Choose this if user wants to deprioritize Decomposition coverage.

**Group G: g-4 + g-5** (4-stage amplification spread: Sense-making + Decomposition + Innovation + Critique).
- g-4 (pre-loop framing protocol design) stresses Decomposition + Innovation + Critique
- g-5 (cross-session strategy design) stresses Sense-making + Decomposition + Critique
- Together they cover all 4 downstream stages with one overlap (both stress Decomposition + Critique).

**Alternative for Group G: g-2 + g-5** (equally 4-stage; different content — merger discipline design + cross-session strategy). Choose if user wants more concrete-component-design domain (merger) over more protocol-design domain (pre-loop framing).

**Recommended subset (sharpest):** d-3 + d-4 + g-4 + g-5 + c-d + c-g = 6 prompts × 2 forks = 12 runs at ~30-50 min each = ~4-5 hours.

### Test

| Test | Result |
|---|---|
| 2 pair recommendations + alternatives | YES |
| Each cites P4 annotations (amplification-stage data) | YES |
| Reasoning is structural (downstream-stage-spread count) | YES |
| CONTRARIAN-RETHINK applied + adjudicated | YES — REJECTED for D group (gradient genuine); REJECTED for G overall + ACCEPTED-with-caveat (two pairs tied) |
| Total recommended-run subset = 4 test + 2 CTRL = 6 prompts | YES |
| Budget trade-off stated | YES (~4-5h vs ~13.5h full) |

PASS. Disposition: **ACTIONABLE**.

---

## P6 — Dual-level rubric artifact

### Seed

SD5 (U1-U5 + F1-F6) + SD6 (aggregate rule + commit-first); format as paste-ready operational rubric.

### Generate

**Mechanism: Lens Shifting** (re-framing SDs as paste-ready user-facing rubric)
**Mechanism: Combination** (upstream-level dims + finding-level dims + aggregate rule + commit protocol into one artifact)

Paste-ready text:

```
## Dual-level comparison rubric (commit BEFORE running prompts)

This rubric measures the cumulative effect of upstream-discipline choice (/explore in /MVL+
vs /surfacing in /MVL2+) at TWO levels: the upstream-output level (exploration.md vs
surfacing.md content) AND the finding level (the loop's final finding.md).

Compare per-prompt; aggregate per level and holistic.

### Level 1 — Upstream-output dimensions (compare exploration.md from /MVL+ fork vs surfacing.md from /MVL2+ fork)

- **U1 — Content coverage.** Did each variant surface the same substantive items / regions? Did either MISS something? Did either include something extra?

- **U2 — Granularity.** At what unit-level does each variant operate? /explore typically at region/signal granularity with per-region items at D2 (functional one-line); /surfacing typically at per-item granularity with 4-level relevance tags (core / sub / side / umbrella). Note the actual granularity each produced.

- **U3 — Relevance discipline.** Does each variant tag relevance explicitly? With what vocabulary? /surfacing's 4-level vocabulary is explicit; /explore's relevance annotation is optional at D4. Note where each variant's outputs are pinned to relevance verdicts vs leave items un-tagged.

- **U4 — Uncertainty handling.** What does each variant do under low-confidence-rejection? /surfacing leans toward inclusion (umbrella tag + LOW confidence) per its asymmetric-failure principle; /explore's convergence criteria implicitly favor completeness but no explicit asymmetric-failure rule. Note where each variant included vs excluded marginal items.

- **U5 — Boundary handling.** How does each handle implicit/fuzzy territory edges? /surfacing has explicit Boundary-discovery sub-phase that fires on `boundary: unknown`; /explore fires its sub-phase only on explicit signal. Note where each variant's territory boundaries are tight vs fuzzy.

### Level 2 — Finding dimensions (compare finding.md from /MVL+ fork vs finding.md from /MVL2+ fork)

- **F1 — Verdict shape.** Is each finding's conclusion a decision / diagnosis / design / strategy with reasoning? Are the conclusions similar in shape or different? (For diagnostic prompts: is each verdict a clearly named cause + remediation? For design prompts: is each verdict a component set + trade-offs?)

- **F2 — Per-item precision.** Does the finding pin claims to specific items from the upstream output, or are claims floating prose? A finding that says "the violation pressure is X, evident in items A and B" is more precise than "violations seem to result from systemic patterns."

- **F3 — Trade-off depth.** Are trade-offs named at appropriate weight? Pinned to items? Or hand-waved?

- **F4 — Coverage robustness.** Would the finding's overall verdict survive if 1-2 items had been missed at upstream? Findings hinging on a single item are brittle.

- **F5 — Actionability.** Can the user immediately act on the finding? Is the recommendation concrete?

- **F6 — Internal consistency.** Are claims internally consistent + supported by named evidence from upstream stages?

### Aggregate rule

For each prompt run on both forks:

1. Per-criterion verdict (per fork-task): BETTER / SAME / WORSE — where BETTER means this fork's output more strongly satisfies the criterion than the other fork's. Apply to all 11 dimensions (5 U + 6 F).

2. Per-level aggregate (per prompt): summarize the 5 U-verdicts as a Level 1 verdict per fork (Stronger / Same / Weaker) and the 6 F-verdicts as a Level 2 verdict per fork.

3. Holistic verdict (per prompt): summarize Level 1 + Level 2 into an overall comparison.

### Cumulative-effect interpretation

Compare Level 1 verdict to Level 2 verdict for each prompt:

- **Level 2 > Level 1** (finding diverges MORE than upstream output) → **Path A or B amplification**: upstream choice propagates with growth through the cascade. Cumulative effect REAL.
- **Level 2 ≈ Level 1** (finding diverges as much as upstream output) → **Neutral propagation**: cumulative effect equals individual effect.
- **Level 2 < Level 1** (finding diverges LESS than upstream output) → **Path C normalization**: cascade absorbs upstream difference. Cumulative effect SMALLER than individual.

All three outcomes are valid empirical signals. Path C does not mean the test failed — it means the structural verdict from the prior comparative-evaluation finding may not translate operationally.

### Commit-first protocol

Read and commit to this rubric BEFORE running any prompt. Do not modify the rubric after seeing findings. The commit-first protocol is the primary mitigation against post-hoc rubric drift toward favoring whichever finding "feels better."

If running with a notes file, copy this rubric block in before forking the session.
```

### Test

| Test | Result |
|---|---|
| All 5 U dimensions defined with rubric | ✓ |
| All 6 F dimensions defined with rubric | ✓ |
| Aggregate rule stated (per-criterion + per-level + holistic) | ✓ |
| Commit-first protocol stated | ✓ |
| Cumulative-effect interpretation (Path A/B/C) | ✓ |
| Operational instruction for user | ✓ |
| Paste-ready | ✓ |

PASS. Disposition: **ACTIONABLE**.

---

## P7 — Warming protocol artifact

### Seed

SD8: 6-file warming protocol; carry forward from prior.

### Generate

**Mechanism: Lens Shifting** (re-frame as user-facing instruction)

Paste-ready text:

```
## Warming protocol (run in parent session BEFORE forking)

Read these 6 files in order, in the parent session, BEFORE forking into two identical
sessions. Each warming read primes context both forks will need.

1. cognitive_harness/explore/references/explore.md
   — so this session knows what /explore's spec commits.

2. cognitive_harness/surfacing/references/surfacing.md
   — so this session knows what /surfacing's spec commits.

3. cognitive_harness/MVL+/SKILL.md
   — the /MVL+ runner (will be invoked in fork 1).

4. cognitive_harness/MVL2+/SKILL.md
   — the /MVL2+ runner (will be invoked in fork 2).

5. docs/desc.md
   — project end-goal context.

6. docs/discipline_taxonomy.md
   — categorical placement of disciplines.

After all 6 reads, fork the session into 2 identical copies.

- In session 1: prefix prompts with /MVL+
- In session 2: prefix prompts with /MVL2+
```

### Test

| Test | Result |
|---|---|
| 6 files listed in order | ✓ |
| Per-file intent statement | ✓ |
| Fork-after-warming instruction | ✓ |
| Paste-ready | ✓ |

PASS. Disposition: **ACTIONABLE**.

---

## P8 — Run plan + stochasticity + caveats artifact

### Seed

SD7 + SD9 + SD10 + cumulative-effect interpretation (Path A/B/C) + session-identicality checklist.

### Generate

**Mechanism: Lens Shifting** + **Mechanism: Combination**

Paste-ready text:

```
## Run plan + methodology

### Stochasticity policy

- One run per fork-task. No duplication of test prompts.
- Expected noise floor: ~5-10% per-item divergence between any two runs of the same
  prompt under the same conditions (this is normal LLM stochasticity).
- Signal threshold: >20% per-item divergence between /MVL+ and /MVL2+ runs of the same
  prompt, OR substantially-different aggregate verdict at Level 1 or Level 2.

### Run sequence

1. Run warming protocol in parent session (see Warming Protocol section).
2. Verify session-identicality checklist (see below) before forking.
3. Fork into 2 identical sessions.
4. Commit to the Dual-Level Comparison Rubric (do not modify after seeing findings).
5. In session 1: prefix prompts with /MVL+.
6. In session 2: prefix prompts with /MVL2+.
7. Run the recommended subset first (4 test prompts + 2 controls):
   - d-3 (L4 breaks first; 4-stage downstream amplification when paired with d-4)
   - d-4 (productive chain how)
   - g-4 (pre-loop framing protocol)
   - g-5 (cross-session strategy)
   - c-d (lookup control — D analog)
   - c-g (lookup control — G analog)
   Expected runtime: ~4-5 hours total compute across both forks.
8. Compare per-prompt findings using the dual-level rubric.
9. Optional: run the remaining 6 test prompts (d-1, d-2, d-5, g-1, g-2, g-3) for
   broader coverage. Adds ~6-8 hours.

### Negative-control diagnostic readings (for the 2 CTRL prompts)

The 2 lookup-shape controls (c-d, c-g) deliberately bypass loop cognitive machinery.
Both /MVL+ and /MVL2+ should produce nearly-identical findings on them. Apply these
diagnostic readings:

- **Controls CONVERGE + test prompts DIVERGE AT BOTH LEVELS** → Path A or B amplification
  detected; cumulative effect is real; the prior structural verdict translates
  operationally.

- **Controls CONVERGE + test prompts DIVERGE AT LEVEL 1 ONLY (not Level 2)** → Path C
  cascade normalization. Upstream individual effect is real but downstream cascade
  absorbs it. The structural verdict may not translate operationally.

- **Controls CONVERGE + test prompts CONVERGE AT BOTH LEVELS** → No upstream effect
  detected; the prior structural verdict refuted operationally.

- **Controls DIVERGE** → High noise overall; cannot distinguish signal from noise. Re-run
  with stricter session-identicality.

### Session-identicality checklist (verify BEFORE forking)

For the comparison to be apples-to-apples, the two forked sessions must be identical
except for the upstream-discipline runner. Verify:

- **Model + effort:** both forks use the same model (e.g., both Opus 4.7 1M) and the
  same effort setting (e.g., both `max`).
- **Time-of-day window:** don't run one fork at session-fresh and the other at
  session-fatigued. Adjacent time windows, not hours apart.
- **Working-directory state:** commit or stash any in-progress changes before forking.
  Both forks should see the same project state.
- **Auto-memory state:** if the project uses persistent memory at
  ~/.claude/projects/.../memory/, both forks should have the same memory contents.
- **Warming reads:** identical files read in identical order (see Warming Protocol).
- **Dual-level rubric:** committed in both forks (or in your notes file the user
  consults) BEFORE the first prompt runs.

### Cumulative-effect interpretation (Path A / B / C)

For each test prompt, compare per-fork findings and classify the result:

- **Path A** — /MVL2+ (/surfacing upstream) → finding with per-item-pinned verdicts;
  more granular reasoning; amplification across cascade. Cumulative effect favors
  /surfacing.

- **Path B** — /MVL+ (/explore upstream) → finding with region/signal-narrative
  verdicts; broader claims; amplification favors /explore.

- **Path C** — both findings converge despite upstream differences. Cascade
  normalization. Cumulative effect approximately zero; the structural advantage at
  the upstream level doesn't propagate.

A test that produces Path A on most prompts AND Path C on others is informative — it
identifies which task-types amplify upstream differences vs which absorb them.

### Caveats (honestly priced into the test)

- **Authorship bias.** /surfacing was drafted by Claude in a prior /MVL+ inquiry. The
  same agent designed this test. Mitigations: cognitive-task framing reduces risk
  vs the prior inquiry's enumeration framing (the upstream discipline is INSTRUMENT
  not SUBJECT); 4 bias-prone candidates excluded outright (the prior inquiry's a-3 +
  b-4 + b-5 retained-with-flags pattern was replaced with hard exclusion);
  pre-committed rubric; negative-control pair. Residual risk acknowledged.

- **Harness-internal domain bias.** All 12 prompts target the project's own corpus.
  /surfacing was designed with the harness's end-goal docs in mind. Acknowledged but
  unavoidable — external-domain prompts trade away user-evaluability.

- **Limited statistical noise estimation.** One run per fork-task gives N=1 per
  condition. Negative-control pair is a QUALITATIVE noise anchor (detects gross
  noise) but not a QUANTITATIVE one. Optional: double-run negative controls to get
  N=2 for stronger noise estimation at modest extra cost.

- **Path C is a valid empirical outcome.** If the cascade normalizes upstream
  differences across most test prompts, the structural verdict from the prior
  comparative-evaluation finding (/surfacing wins at MEDIUM-HIGH confidence) may not
  translate operationally. This is meaningful data, not test failure.

- **Compute budget realism.** Cognitive tasks take ~30-50 min per /MVL+ run.
  Recommended subset (~4-5 hours) is the practical optimum; full set (~13.5 hours)
  is for users with maximum budget.
```

### Test

| Test | Result |
|---|---|
| Stochasticity policy stated | ✓ |
| Run sequence specified | ✓ |
| Negative-control diagnostic readings (4) | ✓ |
| Session-identicality checklist | ✓ |
| Cumulative-effect Path A/B/C interpretation | ✓ |
| Caveats with bias mitigations | ✓ |
| Path C as valid outcome explicit | ✓ |
| Compute budget estimate | ✓ |
| Paste-ready | ✓ |

PASS. Disposition: **ACTIONABLE**.

---

## P9 — Changes-from-Prior + frame-error diagnosis

### Seed

SD12 + R13 (3 root causes + corrective per cause); format for inclusion in finding.

### Generate

**Mechanism: Absence Recognition** (what the prior inquiry was MISSING that this corrects) + **Mechanism: Combination** (Changes-from-Prior sub-sections + R13 diagnosis)

```
## Changes from Prior

**Prior path:** devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/finding.md

**Revision trigger:** User explicit correction. The user reviewed the prior finding's
prompts and identified that they were enumeration-shaped ("Map every," "Catalog every,"
"Find every," "Identify the," "Locate every," "Generate every") — surface-level inventory
tasks that effectively test only the upstream discipline rather than the full MVL+ vs
MVL2+ loop. The user asked for the test to be redone with meaningful cognitive tasks
(decide / diagnose / design / strategize / analyze) where downstream disciplines also do
substantive work and the cumulative effect of upstream choice on the final finding can
be observed.

**What's preserved:**

- Harness-internal domain commitment (all 12 prompts target the project's own corpus).
- Warming protocol files (same 6 files in same order).
- One-run-per-fork stochasticity policy + noise floor + signal threshold structure.
- Commit-first protocol for the comparison rubric.
- 2×2 design (2 task-natures × 2 discipline-runners).
- Negative-control role as noise-floor anchor.
- Pair-selection methodology (sharpest pair + alternative; CONTRARIAN-RETHINK probe).
- Caveat shape (authorship-bias + harness-internal + stochasticity).

**What's changed:**

- **Nature axis.** Prior committed N1 = artifact-bounded vs possibility-mode (a
  TERRITORY-TYPE axis). This finding commits N1 = Diagnostic vs Generative-Design (a
  TASK-KIND axis). The territory-type axis biases toward enumeration tasks regardless
  of pole; the task-kind axis selects for genuine cognitive work.

- **Advancing seeds.** Prior advanced 6 territory-mapped candidates (GA-1, GA-2, GA-3,
  GB-1, GB-2, GB-5). This finding advances 6 cognitive-task seeds (D2 frame-error, D3
  self-containedness violations, D8 L4 multi-head failure, G1 frame-error recovery
  protocol, G2 merger discipline, G6 regression-detection sub-system).

- **Comparison rubric.** Prior used finding-only DC1 (per-item precision) + DC2
  (trade-off depth) + DC3 (coverage robustness) — 3 dimensions, single level. This
  finding uses dual-level U1-U5 (upstream-output: content coverage, granularity,
  relevance discipline, uncertainty handling, boundary handling) + F1-F6 (finding:
  verdict shape, per-item precision, trade-off depth, coverage robustness,
  actionability, internal consistency) — 11 dimensions, two levels. The dual level is
  needed to observe both individual upstream-output differences AND cumulative effect
  on finding.

- **Authorship-bias treatment.** Prior kept 3 bias-flagged prompts in the deliverable
  with caveats (a-3 asymmetric-failure, b-4 merger components with primitives, b-5
  consciousness-gradient indicators). This finding excludes 4 bias-prone candidates
  outright (D4 stage-token balance, D5 authorship-bias pattern, D7 asymmetric-failure
  spec diff, G8 new "anticipation" discipline) on the structural ground that
  hard exclusion is methodologically cleaner than retained-with-flags.

- **Negative-control shape.** Prior used trivial-enum (c-a: "list files in directory")
  + pure-narrative (c-b: "creative metaphors for MVL+") as anti-patterns for
  enumeration tests. This finding uses lookup-shape (c-d: "Confirm file + facts";
  c-g: "Read and summarize field values") that bypass cognitive machinery for both
  forks — the correct anti-control for a loop-level test.

- **Prompt verbs.** Prior prompts started with enumeration verbs (Map / Catalog / Find /
  Identify / Locate / Enumerate / Generate every). This finding's prompts start with
  cognitive-task verbs (Why / How / What / Should / Design / Propose / Diagnose /
  Build) — enforced as a verification gate (SD14) at Innovation.

**What's new:**

- **Frame-error diagnosis** (see Reasoning section). 3 concurring root causes identified
  + corrective per cause.

- **Cumulative-effect operationalization** via Path A (/surfacing-style propagation),
  Path B (/explore-style propagation), Path C (cascade normalization). All 3 are valid
  empirical outcomes; Path C is not test failure.

- **Per-prompt downstream-amplification prediction** in the annotation table. Each test
  prompt names at least one downstream stage as primary amplification site, validating
  loop-level test character per-prompt.

- **Verb-shape verification gate** (SD14) as structural anti-regression test. The gate
  prevents future test designs from drifting back into enumeration shape.

- **Dual-level comparison guidance section** in the finding (this finding includes the
  rubric as a paste-ready user-facing artifact).

- **Session-identicality checklist** formalized from prior's implicit caveat — model +
  effort + time + working-dir + auto-memory + warming reads + rubric commitment.

**Migration:**

- The prior finding's prompts (a-1 through a-5; b-1 through b-5; c-a; c-b) SHOULD NOT
  be used for the loop-level A/B test the user originally wanted. They are enumeration
  tasks that test only the upstream stage.

- The prior finding (devdocs/inquiries/2026-05-22_11-35__.../finding.md) stands as
  historical record of the frame error. Status remains `active`; it is not
  retroactively edited. The `corrects:` declaration in this finding's frontmatter is
  how future readers find the corrected version.

- If the user has already attempted prior's tests, the results may still be informative
  for the upstream-output-level comparison only (Level 1 of this finding's rubric).
  They do not address the cumulative-effect dimension (Level 2 + Path A/B/C
  interpretation).

## Frame-error diagnosis (carried into Reasoning section)

Three concurring root causes in the prior inquiry that produced enumeration-shaped
prompts when the user intended loop-level tests:

**Root cause 1 — Discrim-strength predictor biased toward upstream-axis stress.**

The prior inquiry's exploration (R5) ranked prompts by their stress on the operational-
difference axes between specs (per-item granularity, uncertainty handling, output
structure, boundary handling, substrate). HIGH discrim was equated with strong stress
on these axes. But the prompts that maximally stress upstream-difference axes are
exactly the prompts where the upstream stage does the main work — enumeration shapes.
The predictor was structurally biased toward selecting prompts that put the upstream
stage in the cognitive driver's seat.

*Corrective:* Discrim strength is now measured as DOWNSTREAM-AMPLIFICATION SPREAD —
how many distinct downstream stages amplify the upstream effect — not as upstream-axis
stress alone. Per-prompt amplification predictions in the annotation table validate
this.

**Root cause 2 — Nature axis was territory-type, not task-kind.**

The prior committed nature axis N1 = artifact-bounded vs possibility-mode. This is a
property of the TERRITORY (does it contain pre-existing items or require candidate
generation), not a property of the TASK (what cognitive operation is being asked for).
Both poles of the prior axis are enumeration shapes operationally — just on different
territory types.

*Corrective:* Nature axis is now N1 = Diagnostic vs Generative-Design. This is a
genuine difference-in-KIND of cognitive operation (probe-existing-state vs construct-
target-state). Each pole engages all 5 stages substantively but with different
downstream-stage emphasis.

**Root cause 3 — Conflation of "test the discipline" with "test the loop with the
discipline as upstream."**

The user's question was about /MVL+ vs /MVL2+ (loop-level comparison). The prior
inquiry's framing operated as if "discriminate /explore from /surfacing" (discipline-
level question) and "test the loop with each as upstream" were the same thing. They are
not. In the discipline-level framing, the discipline does the whole job; in the loop-
level framing, the discipline contributes one stage of work to a 5-stage process.

*Corrective:* Explicit framing as LOOP-LEVEL test throughout; dual-level comparison
rubric (Level 1 upstream + Level 2 finding) makes both levels of comparison observable;
meaningful cognitive tasks where downstream stages do substantive work — verified per-
prompt via the amplification-prediction annotation.

These three root causes are concurring (all present; mutually reinforcing). The
corrective addresses all three structurally.
```

### Test

| Test | Result |
|---|---|
| Revision trigger stated | ✓ |
| What's preserved listed (8 items) | ✓ |
| What's changed listed (6 changes) | ✓ |
| What's new listed (6 additions) | ✓ |
| Migration stated | ✓ |
| 3 root causes with correctives | ✓ |
| Paste-ready for CONCLUDE | ✓ |

PASS. Disposition: **ACTIONABLE**.

---

## Assembly Check

Examining all 9 pieces together — does the assembly produce emergent value + visibly correct the prior frame error?

**Test 1: Verb-shape verification across all test prompts**

| Prompt | First verb | Cognitive? |
|---|---|---|
| d-1 | Why | ✓ |
| d-2 | Why | ✓ |
| d-3 | What is most likely | ✓ |
| d-4 | How did | ✓ |
| d-5 | Why | ✓ |
| g-1 | Design | ✓ |
| g-2 | Design | ✓ |
| g-3 | Design | ✓ |
| g-4 | Propose | ✓ |
| g-5 | How should | ✓ |
| c-d (CTRL) | Confirm | ✓ lookup |
| c-g (CTRL) | Read and summarize | ✓ lookup |

**ALL 12 prompts PASS verb-shape verification.** SD14 anti-regression gate held. No enumeration verbs.

**Test 2: Methodological coherence**

- 12 prompts (10 test + 2 CTRL) form a 2×2 design with negative controls
- Dual-level rubric makes cumulative effect observable
- Warming protocol + run plan + commit-first protocol equalize forks
- Changes-from-Prior section visibly corrects prior frame error
- All pieces interlock

VERDICT: methodologically coherent.

**Test 3: Downstream-amplification distribution**

Across the 10 test prompts:
- Sense-making amplified by: d-1, d-2, d-4, d-5, g-5 (5 prompts)
- Decomposition amplified by: d-4, g-1, g-2, g-3, g-4, g-5 (6 prompts)
- Innovation amplified by: d-3, d-5, g-2, g-4 (4 prompts)
- Critique amplified by: d-1, d-2, d-3, g-1, g-3, g-4, g-5 (7 prompts)

All 4 downstream stages amplified by at least 4 prompts. Distribution adequate.

VERDICT: balanced amplification coverage.

**Test 4: Frame-error correction visibility**

- Prior verb-shapes (enumeration) → current verb-shapes (cognitive): 100% verb-shape inversion
- Prior nature axis (territory-type) → current (task-kind): explicitly stated in Changes-from-Prior
- Prior single-level rubric → current dual-level: explicitly stated
- Prior 3-flagged retained → current 4-excluded outright: explicitly stated
- R13 3-root-cause diagnosis: included with corrective per cause

VERDICT: frame-error correction is visible and structural.

**Test 5: Budget feasibility**

- Recommended subset (4 test + 2 CTRL = 6 prompts × 2 forks = 12 runs × ~35-50 min): ~4-5 hours
- Full set (10 test + 2 CTRL = 12 prompts × 2 forks = 24 runs × ~35-50 min): ~13.5 hours
- Both options practical for focused session series

VERDICT: budget options available.

**Test 6: Failure-mode immunity**

| Failure | Status |
|---|---|
| Premature evaluation | NOT observed |
| Single-mechanism trap | NOT observed (7 mechanisms applied across pieces) |
| Early frame lock | NOT observed (5 variants per group from 3 seeds + 2 derived) |
| Innovation without grounding | NOT observed (every prompt tested) |
| Mechanism exhaustion | NOT observed |
| Survival bias | NOT observed (CONTRARIAN-RETHINK applied at P5) |

VERDICT: assembly passes all checks. **The whole is methodologically coherent + verb-shape-verified + amplification-balanced + frame-error-correcting + budget-flexible + failure-mode-immune.** Emergent value: the user gets a test design that empirically validates whether the structural verdict translates operationally, with explicit handling of the three possible outcomes (Path A/B/C) and visible correction of the prior frame error.

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** 4/4 — Combination (all pieces); Absence Recognition (P2, P9); Domain Transfer (P3 negative-controls from experimental method; g-5 from memory-management patterns); Extrapolation (P5 amplification-spread ranking)
- **Framers applied:** 3/3 — Lens Shifting (verb re-framing at P1/P2/P3; SD-to-artifact at P6/P7/P8); Constraint Manipulation (size budget; verb-shape gate); Inversion (CTRL prompts; CONTRARIAN-RETHINK at P5)
- **Convergence:** YES — multiple mechanisms point to the same core innovation (the cognitive-task framing with verb-shape verification + dual-level rubric + frame-error-visible correction as the right methodological design)
- **Survivors tested:** 12 prompts + 4 protocol artifacts (P4, P5, P6, P7, P8, P9 content) — all PASS
- **Failure modes observed:** NONE

**Overall: PROCEED to Critique.**

---

## Self-Assessment Verdict

**PROCEED to Critique.**

The deliverable is structurally complete:
- 10 test prompts (5 Diagnostic + 5 Generative-Design) — all paste-ready, all verb-shape verified (cognitive verb start), all amplification-prediction-named at least one downstream stage
- 2 negative-control prompts — lookup-shape; bypass cognitive machinery
- 12-row annotation table with consistent amplification-stage vocabulary
- Pair-selection guidance: d-3+d-4 (Group D, 4-stage amplification) and g-4+g-5 (Group G, 4-stage amplification); alternatives flagged; CONTRARIAN-RETHINK applied
- Dual-level rubric artifact (5 U + 6 F dimensions + aggregate rule + commit-first + Path A/B/C interpretation)
- Warming protocol artifact (6 files, paste-ready)
- Run plan + caveats artifact (stochasticity + diagnostic readings + session-identicality + Path interpretation + caveats)
- Changes-from-Prior section + R13 3-root-cause frame-error diagnosis

Critique should probe:
- Each prompt against verb-shape verification (re-verify SD14 anti-regression gate)
- Each prompt: does it actually engage all 5 stages substantively? Or does upstream still dominate?
- Each prompt: amplification prediction sanity check — would another agent reach the same prediction?
- Per-prompt authorship-bias residual re-applied
- Negative-control validity (do CTRLs actually bypass cognitive machinery in practice?)
- Pair-selection: is d-3+d-4 actually sharpest, or is the 4-stage-spread metric the wrong proxy?
- Dual-level rubric: are all 11 dimensions load-bearing? Non-redundant?
- Path C handling: is "valid outcome" framing intellectually honest, or does it pre-empt the conclusion?
- Frame-error diagnosis: do the 3 root causes actually exhaust the failure modes, or are there additional ones unaddressed?
- Visible-correction effectiveness: would a future reader of this finding alone understand both the corrected design AND why the prior was wrong?
