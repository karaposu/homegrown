---
status: active
model: claude-opus-4-7[1m]
effort: max
corrects: devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/finding.md
---
# Finding: Loop-Level Meaningful Task Pair Design for /MVL+ vs /MVL2+ Comparison

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/finding.md`

**Revision trigger:** User explicit correction. The user reviewed the prior finding's prompts and identified that they were enumeration-shaped (starting with verbs like "Map every," "Catalog every," "Find every," "Identify the," "Locate every," "Generate every") — surface-level inventory tasks that effectively test only the upstream discipline (`/explore` or `/surfacing`) rather than the full `/MVL+` vs `/MVL2+` loop. The user asked the inquiry to be redone with meaningful cognitive tasks (decide / diagnose / design / strategize / analyze) where downstream disciplines (sense-making, decomposition, innovation, critique) also do substantive cognitive work, so that the cumulative effect of the upstream-discipline choice on the final finding can be observed.

**What's preserved:**

- Harness-internal domain commitment (all 12 prompts target the project's own corpus for evaluability).
- Warming protocol files (same 6 files in same order).
- One-run-per-fork-task stochasticity policy + noise floor + signal threshold structure.
- Commit-first protocol for the comparison rubric (criterion frozen before runs).
- 2×2 design (2 task-natures × 2 discipline-runners).
- Negative-control role as noise-floor anchor.
- Pair-selection methodology (sharpest pair + alternative; CONTRARIAN-RETHINK probe).
- Caveat shape (authorship-bias + harness-internal-domain + stochasticity).

**What's changed:**

- **Nature axis.** Prior committed N1 = artifact-bounded vs possibility-mode (a TERRITORY-TYPE axis). This finding commits N1 = Diagnostic vs Generative-Design (a TASK-KIND axis). The territory-type axis biases toward enumeration tasks regardless of pole; the task-kind axis selects for genuine cognitive work.

- **Advancing seeds.** Prior advanced 6 territory-mapped candidates (GA-1 through GA-3 + GB-1, GB-2, GB-5). This finding advances 6 cognitive-task seeds: D2 (frame-error diagnostic), D3 (self-containedness violations diagnostic), D8 (L4 multi-head failure anticipation), G1 (frame-error recovery protocol design), G2 (merger discipline design), G6 (regression-detection sub-system design).

- **Comparison rubric.** Prior used finding-only DC1 (per-item precision) + DC2 (trade-off depth) + DC3 (coverage robustness) — 3 dimensions, single level. This finding uses dual-level **U1-U5** (upstream-output level: content coverage, granularity, relevance discipline, uncertainty handling, boundary handling) + **F1-F6** (finding level: verdict shape, per-item precision, trade-off depth, coverage robustness, actionability, internal consistency) — 11 dimensions, two levels. The dual level is necessary to observe both individual upstream-output differences AND cumulative effect on finding.

- **Authorship-bias treatment.** Prior kept 3 bias-flagged prompts in the deliverable with caveats (a-3, b-4, b-5 retained with flags). This finding excludes 4 bias-prone candidates outright (D4, D5, D7, G8) on the structural ground that hard exclusion is methodologically cleaner than retained-with-flags, but adds 2 BIDIRECTIONAL flags on g-2 (mild bias toward /surfacing on primitive emphasis) and g-5 (mild bias toward /explore on cross-session strength). The bidirectional pattern is methodologically a feature — it prevents unidirectional confirmation of /surfacing.

- **Negative-control shape.** Prior used trivial-enum (c-a: "list files in directory") + pure-narrative (c-b: "creative metaphors for /MVL+") as anti-patterns for enumeration tests. This finding uses lookup-shape (c-d: "Confirm file + facts"; c-g: "Read and summarize field values") that bypass cognitive machinery — the correct anti-control for a loop-level test.

- **Prompt verbs.** Prior prompts started with enumeration verbs (Map / Catalog / Find / Identify / Locate / Enumerate / Generate every). This finding's test prompts start with cognitive-task verbs (Why / How / What / Should / Design / Propose / Diagnose / How should) — enforced as a verification gate (SD14) at Innovation, re-verified at Critique (100% pass).

**What's new:**

- **Frame-error diagnosis** (see Reasoning section). Now 4 root causes identified (3 from R13 + 1 process-failure cause from Critique's VP8), each with corrective.

- **Cumulative-effect operationalization** via Path A (/surfacing-style amplification), Path B (/explore-style amplification), Path C (cascade normalization). All 3 are valid empirical outcomes; Path C explicitly REFUTES the operational translation of the prior structural verdict (does not refute the spec-level verdict's accuracy).

- **Per-prompt downstream-amplification prediction** in the annotation table. Each test prompt names at least one downstream stage as primary amplification site, validating loop-level test character per-prompt.

- **Verb-shape verification gate** (SD14) as structural anti-regression test. Prevents future test designs from drifting back into enumeration shape.

- **Bidirectional authorship-bias flags** on g-2 (toward /surfacing) and g-5 (toward /explore). Methodologically informative — the test is not unidirectionally biased.

- **Dual-level comparison guidance section** (Section 6 of this finding).

- **Session-identicality checklist** formalized from prior's implicit caveat.

- **Path C as valid outcome** (not failure) — explicitly framed as refuting the operational implication.

- **Process-failure corrective** (Root cause 4): Sensemaking should probe inherited metrics from prior disciplines against the inquiry's specific goal, not just consume them.

**Migration:**

- The prior finding's prompts (a-1 through a-5; b-1 through b-5; c-a; c-b) SHOULD NOT be used for the loop-level A/B test the user originally wanted. They are enumeration tasks that test only the upstream stage.

- The prior finding (`devdocs/inquiries/2026-05-22_11-35__.../finding.md`) stands as historical record of the frame error. Status remains `active`; not retroactively edited. The `corrects:` declaration in this finding's frontmatter is how future readers locate the corrected version.

- If the user has already attempted prior's tests, the results may still be informative for the upstream-output-level comparison only (Level 1 of this finding's rubric). They do not address the cumulative-effect dimension (Level 2 + Path A/B/C interpretation).

## Question

The user is preparing to empirically test whether `/MVL2+` (the Extended Cognitive Loop runner that uses `/surfacing` as the upstream discipline) produces better final findings than `/MVL+` (the same runner that uses `/explore` as the upstream discipline). Two parallel runners exist: `/MVL+` uses `/explore` (located at `cognitive_harness/explore/references/explore.md`); `/MVL2+` uses `/surfacing` (located at `cognitive_harness/surfacing/references/surfacing.md`). Both are otherwise identical 5-stage pipelines: upstream → sense-making → decomposition → innovation → critique → CONCLUDE.

The user plans to open one session, run a warming protocol, fork into two identical sessions, and run the same prompt as `/MVL+` in one fork and `/MVL2+` in the other — repeating for prompts of different natures — then compare the resulting findings AT TWO LEVELS: the upstream-output level (`exploration.md` vs `surfacing.md`) AND the final finding level (`finding.md` vs `finding.md`).

**The question:** what 10 paste-ready prompts (5+5 by nature, where each is a genuine cognitive task that engages all 5 loop stages substantively — NOT an enumeration task that the upstream stage alone could complete) would let the user observe both (a) individual upstream-output differences AND (b) the cumulative effect of upstream-discipline choice on the final finding?

**The goal:** a deliverable the user can act on immediately — 10 paste-ready cognitive-task prompts annotated with per-prompt downstream-amplification predictions, plus 2 negative-control prompts to anchor noise, plus warming protocol, plus pre-committed dual-level discrimination rubric, plus run plan with diagnostic readings for Path A / Path B / Path C interpretation, plus methodological caveats. Outcome: empirically validate (or refute) whether the prior comparative-evaluation's MEDIUM-HIGH-confidence structural verdict — that `/surfacing` is more end-goal-aligned than `/explore` — translates to operational advantage when run as the full MVL loop.

## Finding Summary

- **Deliverable:** 12 paste-ready prompts (5 Diagnostic + 5 Generative-Design + 2 negative-control) + warming protocol + dual-level comparison rubric + run plan with Path A/B/C interpretation + session-identicality checklist + Changes-from-Prior section + frame-error diagnosis. Total compute for sharpest subset (4 test prompts + 2 controls × 2 forks): ~4-5 hours. Full set (10 + 2 × 2 forks): ~13.5 hours.

- **Nature-split axis:** Group D is **Diagnostic** (PRIMARY deliverable shape = understanding-with-evidence; probe-existing-state cognitive operation). Group G is **Generative-Design** (PRIMARY deliverable shape = construction-with-components-and-trade-offs; construct-target-state cognitive operation). This is a difference in KIND of cognitive operation, not in size, depth, or domain.

- **All 12 prompts pass verb-shape verification** (SD14 anti-regression gate). Test prompts start with cognitive-task verbs (Why / How / What / Should / Design / Propose); negative controls start with lookup verbs (Confirm / Read and summarize). No enumeration verbs anywhere.

- **Recommended subset for sharpest signal at minimum budget:** d-3 + d-4 (Group D — 4-stage downstream amplification spread across Sense-making + Decomposition + Innovation + Critique) and g-4 + g-5 (Group G — same 4-stage spread), plus both negative controls (c-d, c-g). This is 6 of the 12 prompts; running this subset across both forks takes ~4-5 hours.

- **Equally defensible alternative for Group D:** d-1 + d-3 (3-stage spread: Sense-making + Innovation + Critique). For Group G: g-2 + g-5 (same 4-stage spread; different content domain — merger discipline + cross-session strategy).

- **Pair-selection metric:** breadth of cascade amplification (how many distinct downstream stages amplify the upstream effect). User wanting per-stage INTENSITY (depth) could choose different prompts emphasizing fewer stages with deeper engagement.

- **Two prompts carry mild authorship-bias flags — in OPPOSITE directions:** g-2 (merger discipline design with primitive mapping) mildly favors `/surfacing` (its spec models primitives explicitly; `/explore`'s does not). g-5 (cross-session resume strategy) mildly favors `/explore` (its content-bearing artifact handles cross-session better than `/surfacing`'s thin artifact). The **bidirectional pattern is methodologically a feature** — it prevents unidirectional confirmation of `/surfacing`. A `/surfacing` win on g-5 (the `/explore`-favored prompt) constitutes robust evidence FOR `/surfacing`.

- **Pre-committed dual-level discrimination rubric (frozen BEFORE runs):**
  - **Level 1 (Upstream-output level)** — compare `exploration.md` from `/MVL+` fork vs `surfacing.md` from `/MVL2+` fork on 5 dimensions (U1 content coverage, U2 granularity, U3 relevance discipline, U4 uncertainty handling, U5 boundary handling).
  - **Level 2 (Finding level)** — compare `finding.md` from each fork on 6 dimensions (F1 verdict shape, F2 per-item precision, F3 trade-off depth, F4 coverage robustness, F5 actionability, F6 internal consistency).
  - The cumulative-effect dimension is operationalized as the COMPARISON between Level 2 divergence and Level 1 divergence. Three possible outcomes per prompt: Path A (Level 2 > Level 1; cascade amplifies upstream effect; cumulative effect REAL); Neutral (Level 2 ≈ Level 1); Path C (Level 2 < Level 1; cascade normalizes; cumulative effect SMALLER than individual).
  - Pre-committed BEFORE running prompts; rubric does not modify after seeing findings.

- **Negative controls (c-d, c-g) are LOOKUP-SHAPE, not enumeration or pure-narrative.** They deliberately bypass loop cognitive machinery (small territory, deterministic answer). Expected: both forks produce nearly-identical findings AT THE FACTS LEVEL (some prose-framing divergence is acceptable noise, not signal). If CTRLs converge at facts AND test prompts diverge AT BOTH LEVELS, the divergence is upstream-discipline-driven (Path A or B). If CTRLs converge AND test prompts diverge AT LEVEL 1 ONLY, the cascade normalizes (Path C — operational translation of structural verdict refuted).

- **Path C is intellectually honest as an empirical outcome.** It REFUTES the operational translation of the prior structural verdict (the verdict that `/surfacing` is more end-goal-aligned at the spec level). Path C does NOT refute the spec-level accuracy of the structural verdict — it refutes its operational implication. If most prompts produce Path C, the user learns that structural advantage doesn't translate to loop-output advantage at the current calibration state.

- **Frame-error diagnosis (carried into Reasoning section):** 4 root causes identified in the prior inquiry. 3 structural (R13: discrim-predictor biased toward upstream-axis stress; nature axis was territory-type not task-kind; conflation of "test the discipline" with "test the loop with the discipline as upstream"); 1 procedural (Critique's VP8: inherited-metric-not-re-validated — Sensemaking consumed the discrim metric without auditing it against the user's goal). Corrective per cause is structural in this finding's test design and procedural in the generalized Sensemaking-protocol note.

- **Convergence:** the corrected test design SURVIVED full Critique evaluation across 11 dimensions and 10 focal probes + 3 standard prosecution probes (methodology / pair / verb-shape). All prosecutions defended (one partial: pair-selection metric is breadth not depth, acknowledged). Bidirectional bias structure prevents unidirectional confirmation. 100% verb-shape gate held.

## Finding

### Surround context — what this test is for and why this finding exists

In prior inquiries this session, the user explored a redesign of `/explore` — the upstream discipline that maps the territory of an inquiry before downstream cognitive disciplines (sense-making, decomposition, innovation, critique) operate on it. The redesign, called `/surfacing`, was drafted in three successive `/MVL+` inquiries, and a comparative-evaluation inquiry (`devdocs/inquiries/2026-05-22_09-02__comparative_evaluation_surfacing_vs_current_explore_for_mvl_robustness/finding.md`) concluded at MEDIUM-HIGH confidence that `/surfacing` is more end-goal-aligned than `/explore` (winning 8 of 10 end-goal-derived criteria including 2 of 3 CRITICAL).

That verdict was STRUCTURAL — it compared what each spec COMMITS. The user wants empirical validation that the structural advantage translates to operational advantage when the disciplines are used as upstream stages of the full MVL loop.

The user's FIRST attempt at designing this empirical test (`devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/finding.md`) produced prompts that the user identified as enumeration-shaped — find, identify, map, list, enumerate. These tasks effectively test only the upstream stage (where surfacing/exploring DOES enumerate items) and leave downstream disciplines with little substantive work. The user corrected the framing: they wanted to test the LOOP (the cumulative effect of upstream choice on what the full pipeline produces), not the discipline alone.

This finding redoes the design under the corrected framing. The deliverable is 12 paste-ready prompts where each test prompt is a genuine cognitive task (decide / diagnose / design / strategize / analyze) that REQUIRES all 5 loop stages to do substantive work — verified per-prompt via the downstream-amplification prediction column.

### Section 1 — The 10 test prompts (paste-ready)

For each prompt: copy the body verbatim, prefix with `/MVL+` in fork 1 and `/MVL2+` in fork 2. Each prompt has been verified self-contained (no external context required), targets a harness-internal territory, starts with a cognitive-task verb, and requires substantive work from at least one downstream stage as the PRIMARY amplification site (validates loop-level character).

#### Group D — Diagnostic test prompts

PRIMARY deliverable: understanding-with-evidence. Cognitive operation: probe-existing-state.

##### Prompt d-1 (frame-error why; stresses Sense-making + Critique + Innovation-secondary)

> Why did the prior inquiry (devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/finding.md) produce enumeration-shaped prompts when the user wanted loop-level tests? Diagnose the structural pressure points in that inquiry's design process (which discipline outputs, which decisions, which framings drifted the design toward enumeration), and propose corrective additions to cognitive_harness/protocols/ or relevant discipline specs that would catch similar frame errors earlier when designing tests for cognitive disciplines.

##### Prompt d-2 (self-containedness violations why; stresses Sense-making + Critique + Innovation-secondary)

> Why does the cognitive harness's disciplines-self-contained principle (as committed in auto-memory at ~/.claude/projects/.../memory/feedback_disciplines_self_contained.md) keep getting violated when new or updated discipline specs are drafted at cognitive_harness/<discipline>/references/<spec>.md? Diagnose the structural pressures that pull spec drafts toward inter-discipline coupling (vocabulary borrowing, mechanism reference, sibling-discipline naming), and propose what would structurally reduce violations during drafting.

##### Prompt d-3 (L4 multi-head failure anticipation; stresses Innovation + Critique)

> What is most likely to break first when the cognitive harness reaches L4 multi-head autonomy (parallel disciplines running concurrently with downstream merger) per docs/autonomy_ladder.md? Diagnose the structural risks introduced by parallelism (race conditions, contradictory outputs, accumulator desync) and by merging (conflict resolution, weight arbitration, residual-disagreement handling), and propose which risks deserve first-class catalog entries vs which can be left to runtime detection.

##### Prompt d-4 (productive chain how; stresses Sense-making + Decomposition)

> How did this session's chain of six successive /MVL+ inquiries on /surfacing-related design (the inquiries at devdocs/inquiries/2026-05-22_01-25__..., 02-13__..., 07-31__..., 09-02__..., 11-35__..., and this one) achieve productive convergence? Diagnose the operational patterns that made the chain work (iteration-correction cadence, external-grounding sources, user-correction-as-signal, structural decisions accumulating), and propose what should be repeatable for future multi-inquiry sessions on a single design problem.

##### Prompt d-5 (add-discipline tendency why; stresses Sense-making + Innovation)

> Why does the cognitive harness tend to reach for "add another discipline" as the default response to perceived loop gaps (e.g., /anticipate, /merge, /reflect added or proposed) rather than refining existing disciplines or composing them differently? Diagnose the design-tendency's roots in the current discipline taxonomy + how disciplines are catalogued, and propose alternative responses that preserve coverage without bloating the discipline count.

#### Group G — Generative-Design test prompts

PRIMARY deliverable: construction-with-components-and-trade-offs. Cognitive operation: construct-target-state.

##### Prompt g-1 (frame-error recovery protocol design; stresses Decomposition + Critique)

> Design a meta-loop refinement protocol the cognitive harness can use to detect and recover from frame errors like the one in devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/finding.md (where prompts intended to test the loop ended up testing only the upstream discipline). What detection signals (observable in discipline outputs or _state.md) would catch such errors at which stage, what recovery procedures would re-frame the inquiry without restart, and what integration points with cognitive_harness/protocols/branch_inquiry.md or conclude.md would make the corrective load-bearing?

##### Prompt g-2 (merger discipline design; stresses Decomposition + Innovation) — **MILD AUTHORSHIP-BIAS FLAG: direction = /surfacing**

> Design the cognitive harness's first version of a "merger" discipline that combines outputs from parallel cognitive disciplines (in the multi-head loops at L4+ per docs/autonomy_ladder.md). Propose the discipline's identity (what cognitive operation it captures), components (sub-mechanisms: conflict resolution, weight arbitration, residual-disagreement handling, etc.), failure modes (predictable degradation patterns specific to merging), and load-bearing primitives drawn from the typed primitive set at docs/thinking_space_dynamics.md — with reasoning about which primitives each component uses and why.

> **Flag (mild):** the prompt asks about load-bearing primitives. `/surfacing`'s spec explicitly catalogues 8 primitives (§2.4); `/explore`'s spec does not model primitives. Under `/MVL2+`, the discipline already operates from a primitives-as-load-bearing position; under `/MVL+`, it must rediscover primitives from `docs/thinking_space_dynamics.md`. The finding may favor `/MVL2+` for reasons related to spec-level primitive modeling rather than loop-level cumulative effect. Weight findings on g-2 accordingly.

##### Prompt g-3 (regression-detection sub-system design; stresses Decomposition + Critique)

> Design a regression-detection sub-system that runs alongside /MVL+ (and /MVL2+) and flags when a new inquiry's outputs are systematically lower-quality than baseline — using the 23-symptom catalog at docs/regression/desc.md as the symptom vocabulary. Propose the sub-system's components, the detection thresholds per symptom-pattern (from the 5 diagnostic patterns), the alert mechanism (where in _state.md the flag surfaces), the recovery action (what the runner does when flagged), and integration with the CONCLUDE archive pattern.

##### Prompt g-4 (pre-loop framing protocol design; stresses Decomposition + Innovation + Critique)

> Propose a "pre-loop framing protocol" that the cognitive harness runs BEFORE executing /MVL+ or /MVL2+ on a new question. Design what checks ensure the question is well-framed for the cognitive work it requires (whether the user wants a decision, diagnosis, design, or strategy), what to surface to the user when framing is unclear, how to handle multi-layer ambiguity (Meaning / Structural / Process — per the current Layer Commitment check in cognitive_harness/MVL+/SKILL.md), and how this integrates with the existing _branch.md creation step without bloating it.

##### Prompt g-5 (cross-session strategy design; stresses Sense-making + Decomposition + Critique) — **MILD AUTHORSHIP-BIAS FLAG: direction = /explore (BIDIRECTIONAL with g-2)**

> How should the cognitive harness handle cross-session resume when an active inquiry has accumulated 100k+ tokens of discipline outputs across multiple discipline files? Design the strategy preserving cognitive continuity across sessions without context bloat. Address: the flow-type resumption logic in cognitive_harness/protocols/resume.md, the CONCLUDE archive pattern, what gets reloaded vs summarized vs deferred, how the runner detects accumulated-context state in _state.md, and the trade-off between fidelity (reload all) and budget (summarize and defer).

> **Flag (mild):** `/explore`'s content-bearing artifact handles cross-session resume better than `/surfacing`'s thin artifact (per the prior comparative-evaluation's C8 dimension verdict where `/explore` won). Under `/MVL+`, the discipline starts from a stronger cross-session-resume position; under `/MVL2+`, the discipline must work around the thin-artifact constraint. The finding may favor `/MVL+` for reasons related to spec-level cross-session capabilities rather than loop-level cumulative effect. **Bidirectional note:** this flag is in the OPPOSITE direction from g-2's flag. Together they prevent unidirectional confirmation. A `/surfacing` win on g-5 constitutes robust evidence FOR `/surfacing`'s operational advantage (since g-5 is `/explore`-favored). Weight findings accordingly.

### Section 2 — The 2 negative-control prompts (paste-ready)

Negative controls deliberately bypass loop cognitive machinery. Both `/MVL+` and `/MVL2+` should produce nearly-identical findings AT THE FACTS LEVEL on these prompts. Their job is to anchor noise empirically.

##### Prompt c-d (D-analog control; lookup-shape)

> Confirm that the file at cognitive_harness/MVL+/SKILL.md exists. Report its line count, the first heading after the YAML frontmatter, and the first three skill names that appear in the "Skill-to-command mapping" table within the file. Produce a finding that lists these four facts verbatim.

##### Prompt c-g (G-analog control; lookup-shape)

> Read and summarize the contents of the "## Status" field in the file at devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/_state.md, plus the value of the "## Next Discipline" field in the same file. Produce a finding reporting both values verbatim.

**Note on CTRL convergence:** "Near-identical" means at the FACTS / VERBATIM-VALUES level. Some prose-framing divergence between forks (3-5%; surfacing may apply per-item tags while explore may describe) is acceptable noise. The CTRL anchor is empirically valid at the facts level, not the prose level.

### Section 3 — Annotation table (per-prompt metadata)

| Prompt | Nature | Primary downstream amplification | Secondary amplification | Approx. size | Flag |
|---|---|---|---|---|---|
| **d-1** | D | Sense-making + Critique | Innovation (corrective generation) | ~5-8 root causes + corrective points | clean |
| **d-2** | D | Sense-making + Critique | Innovation (fix generation) | ~5-7 violations + fixes | clean |
| **d-3** | D | Innovation + Critique | — | ~5-8 anticipated risks | clean |
| **d-4** | D | Sense-making + Decomposition | — | ~5-6 patterns | clean |
| **d-5** | D | Sense-making + Innovation | — | ~3-5 alternatives | clean |
| **g-1** | G | Decomposition + Critique | — | ~5-7 components | clean |
| **g-2** | G | Decomposition + Innovation | — | ~6-8 components | **mild bias → /surfacing** (primitive emphasis) |
| **g-3** | G | Decomposition + Critique | — | ~5-7 components | clean |
| **g-4** | G | Decomposition + Innovation + Critique | — | ~4-6 checks | clean |
| **g-5** | G | Sense-making + Decomposition + Critique | — | ~3-5 strategies + components | **mild bias → /explore** (cross-session strength; bidirectional with g-2) |
| **c-d** | CTRL | NONE — loop machinery bypassed by design | — | 4 facts | negative control |
| **c-g** | CTRL | NONE — same | — | 2 field values | negative control |

**Dimension-distinctness note:** The 11-dimension rubric (5 upstream + 6 finding) is not redundant. Each dimension observes a distinct aspect: U2 granularity (per-item vs region) is distinct from U3 relevance discipline (explicit tagging vs optional annotation); F2 per-item precision is distinct from F4 coverage robustness (precision-of-attribution vs structural-soundness-against-missing-items); F1 verdict shape is distinct from F6 internal consistency (deliverable form vs logical coherence).

### Section 4 — Pair-selection guidance

If the user wants the strongest discrimination signal per unit compute, run this subset across both forks. The pair-selection metric is **breadth of cascade amplification** (how many distinct downstream stages amplify the upstream effect).

**Group D recommended pair: d-3 + d-4** (4-stage amplification spread)

- d-3 (L4 breaks first what) stresses Innovation + Critique
- d-4 (productive chain how) stresses Sense-making + Decomposition
- Together: ALL FOUR downstream cognitive stages exercised with no overlap

**Group G recommended pair: g-4 + g-5** (4-stage amplification spread)

- g-4 (pre-loop framing protocol) stresses Decomposition + Innovation + Critique
- g-5 (cross-session strategy) stresses Sense-making + Decomposition + Critique
- Together: ALL FOUR downstream stages, with Decomposition + Critique overlap

**Alternatives:**

- For Group D: **d-1 + d-3** (3-stage spread: Sense-making + Innovation + Critique). Choose if you want to deprioritize Decomposition coverage.
- For Group G: **g-2 + g-5** (same 4-stage spread; different content — merger discipline + cross-session strategy). Choose if you want concrete-component-design domain over protocol-design domain.

**Explicit caveat on g-5 in the recommended pair:** g-5 carries a mild `/explore`-direction bias flag (per Section 1). This is METHODOLOGICALLY A FEATURE: it pairs with g-2's `/surfacing`-direction flag to give the test bidirectional structure. A `/surfacing` win on g-5 is robust evidence FOR `/surfacing`; a `/explore` win on g-2 is robust evidence FOR `/explore`. The flags increase evidential weight per result.

**Metric note:** "4-stage spread" is BREADTH, not DEPTH. The user wanting per-stage INTENSITY (e.g., a pair that intensely stresses one stage like Critique twice) could choose different prompts. Breadth is the appropriate proxy for cumulative-effect testing because it observes whether multiple downstream stages amplify; depth would require per-discipline-output quality comparison which is harder to evaluate externally.

**Recommended subset:** d-3 + d-4 + g-4 + g-5 + c-d + c-g = 6 prompts × 2 forks = 12 runs at ~30-50 min each = **~4-5 hours total compute**.

**Full set:** 10 test + 2 CTRL × 2 forks = 24 runs = ~13.5 hours.

### Section 5 — Warming protocol (run in parent session BEFORE forking)

Read these 6 files in order, in the parent session, BEFORE forking into two identical sessions. Each warming read primes context both forks will need.

1. `cognitive_harness/explore/references/explore.md` — so this session knows what `/explore`'s spec commits.
2. `cognitive_harness/surfacing/references/surfacing.md` — so this session knows what `/surfacing`'s spec commits.
3. `cognitive_harness/MVL+/SKILL.md` — the `/MVL+` runner (will be invoked in fork 1).
4. `cognitive_harness/MVL2+/SKILL.md` — the `/MVL2+` runner (will be invoked in fork 2).
5. `docs/desc.md` — project end-goal context.
6. `docs/discipline_taxonomy.md` — categorical placement of disciplines.

After all 6 reads, fork the session into 2 identical copies.

- In session 1: prefix prompts with `/MVL+`.
- In session 2: prefix prompts with `/MVL2+`.

### Section 6 — Dual-level comparison rubric (commit BEFORE running prompts)

This rubric is the CORRECTED framing's centerpiece. Compare per-prompt at TWO levels; the comparison BETWEEN levels reveals cumulative effect.

#### Level 1 — Upstream-output dimensions

Compare `exploration.md` from `/MVL+` fork vs `surfacing.md` from `/MVL2+` fork on:

- **U1 — Content coverage.** Did each variant surface the same substantive items / regions? Did either MISS something? Did either include something extra?
- **U2 — Granularity.** At what unit-level does each variant operate? `/explore` typically at region/signal granularity with per-region items at D2; `/surfacing` typically at per-item granularity with 4-level relevance tags (core / sub / side / umbrella).
- **U3 — Relevance discipline.** Does each variant tag relevance explicitly? With what vocabulary? `/surfacing`'s 4-level vocabulary is explicit; `/explore`'s relevance annotation is optional at D4. Note where each variant's outputs are pinned to relevance verdicts vs left un-tagged.
- **U4 — Uncertainty handling.** What does each variant do under low-confidence-rejection? `/surfacing` leans toward inclusion (umbrella tag + LOW confidence) per its asymmetric-failure principle; `/explore`'s convergence criteria implicitly favor completeness but no explicit asymmetric-failure rule.
- **U5 — Boundary handling.** How does each handle implicit/fuzzy territory edges? `/surfacing` has explicit Boundary-discovery sub-phase; `/explore` fires its sub-phase only on explicit signal.

#### Level 2 — Finding dimensions

Compare `finding.md` from each fork on:

- **F1 — Verdict shape.** Is each finding's conclusion a decision / diagnosis / design / strategy with reasoning? Are the conclusions similar in shape or different?
- **F2 — Per-item precision.** Does the finding pin claims to specific items, or are claims floating prose?
- **F3 — Trade-off depth.** Are trade-offs named at appropriate weight + pinned to items?
- **F4 — Coverage robustness.** Would the finding's overall verdict survive if 1-2 items had been missed at upstream?
- **F5 — Actionability.** Can the user immediately act on the finding?
- **F6 — Internal consistency.** Are claims internally consistent + supported by named evidence from upstream stages?

#### Aggregate rule

For each prompt run on both forks:

1. **Per-criterion verdict** (per fork-task): BETTER / SAME / WORSE — where BETTER means this fork's output more strongly satisfies the criterion. Apply to all 11 dimensions.
2. **Per-level aggregate** (per prompt): summarize the 5 U-verdicts as a Level 1 verdict per fork and the 6 F-verdicts as a Level 2 verdict.
3. **Holistic verdict** (per prompt): summarize Level 1 + Level 2 into an overall comparison.

#### Cumulative-effect interpretation (the corrected framing's centerpiece)

Compare Level 1 verdict to Level 2 verdict for each prompt:

- **Level 2 > Level 1** (finding diverges MORE than upstream output) → **Path A or B amplification**: upstream choice propagates with growth. Cumulative effect REAL. The structural verdict's operational implication is SUPPORTED.
- **Level 2 ≈ Level 1** (finding diverges as much as upstream) → **Neutral propagation**: cumulative effect equals individual effect.
- **Level 2 < Level 1** (finding diverges LESS than upstream) → **Path C normalization**: cascade ABSORBS upstream difference. The structural verdict's operational implication is **REFUTED** (the spec-level verdict's accuracy is unchanged; its operational implication is refuted).

All three outcomes are valid empirical signals. Path C does NOT mean the test failed — it means the structural advantage doesn't translate to loop-output advantage at the current calibration state.

#### Commit-first protocol

Read and commit to this rubric BEFORE running any prompt. Do not modify the rubric after seeing findings. The commit-first protocol is the primary mitigation against post-hoc rubric drift toward favoring whichever finding "feels better." If running with a notes file, copy this rubric section into your notes BEFORE forking the session.

### Section 7 — Run plan + methodology

#### Stochasticity policy

- One run per fork-task. No duplication.
- Expected noise floor: ~5-10% per-item divergence between any two runs of the same prompt under same conditions.
- Signal threshold: >20% per-item divergence between `/MVL+` and `/MVL2+` runs of the same prompt, OR substantially-different aggregate verdict at Level 1 or Level 2.

#### Run sequence

1. Run warming protocol in parent session (Section 5).
2. Verify session-identicality checklist (Section 8) before forking.
3. Fork into 2 identical sessions.
4. Commit to the Dual-Level Comparison Rubric (Section 6) — do not modify after seeing findings.
5. In session 1: prefix prompts with `/MVL+`.
6. In session 2: prefix prompts with `/MVL2+`.
7. Run the recommended subset first (4 test prompts + 2 controls): d-3, d-4, g-4, g-5, c-d, c-g. Expected runtime: ~4-5 hours total compute across both forks.
8. Compare per-prompt findings using the dual-level rubric.
9. Optional: run the remaining 6 test prompts (d-1, d-2, d-5, g-1, g-2, g-3) for broader coverage. Adds ~6-8 hours.

#### Negative-control diagnostic readings

The 2 lookup-shape controls (c-d, c-g) deliberately bypass loop cognitive machinery. Both forks should produce nearly-identical findings AT THE FACTS LEVEL. Apply these diagnostic readings:

- **CTRLs CONVERGE + test prompts DIVERGE AT BOTH LEVELS** → Path A or B amplification; cumulative effect is real; structural verdict's operational implication SUPPORTED.
- **CTRLs CONVERGE + test prompts DIVERGE AT LEVEL 1 ONLY (not Level 2)** → Path C cascade normalization; structural verdict's operational implication REFUTED.
- **CTRLs CONVERGE + test prompts CONVERGE AT BOTH LEVELS** → No upstream effect detected; structural verdict refuted at both levels.
- **CTRLs DIVERGE** → High noise overall; cannot distinguish signal from noise. Re-run with stricter session-identicality.

**Note on CTRL convergence:** "Converge" is at the FACTS / VERBATIM-VALUES level. Some prose-framing divergence (3-5%; surfacing may apply per-item tags; explore may describe) is acceptable noise, not signal. If CTRL findings disagree on the FACTS, that's a noise concern.

### Section 8 — Session-identicality checklist (verify BEFORE forking)

For the comparison to be apples-to-apples, the two forked sessions must be identical EXCEPT for the upstream-discipline runner. Verify:

- **Model + effort.** Both forks use the same model (e.g., both Opus 4.7 1M context) and the same effort setting (e.g., both `max`).
- **Time-of-day window.** Don't run one fork at session-fresh and the other at session-fatigued. Adjacent time windows, not hours apart.
- **Working-directory state.** Commit or stash any in-progress changes before forking. Both forks should see the same project state.
- **Auto-memory state.** If the project uses persistent memory at `~/.claude/projects/.../memory/`, both forks should have the same memory contents.
- **Warming reads.** Identical 6 files read in identical order (Section 5).
- **Rubric commitment.** The Dual-Level Comparison Rubric (Section 6) is committed in your notes BEFORE the first prompt runs.

### Section 9 — Acknowledged caveats

- **Authorship bias.** `/surfacing` was drafted by Claude in a prior `/MVL+` inquiry. The same agent designed this test. Mitigations: cognitive-task framing reduces risk vs the prior inquiry's enumeration framing (the upstream discipline is INSTRUMENT not SUBJECT — the cognitive task is about the project, not about `/explore` vs `/surfacing`); 4 bias-prone candidates excluded outright (the prior inquiry's retained-with-flags pattern was replaced with hard exclusion); 2 BIDIRECTIONAL flags on g-2 (`/surfacing` direction) and g-5 (`/explore` direction) — bidirectional structure prevents unidirectional confirmation; pre-committed rubric; negative-control pair. Residual risk acknowledged but bidirectionally bounded.

- **Harness-internal domain bias.** All 12 prompts target the project's own corpus. `/surfacing` was designed with the harness's end-goal docs in mind. Acknowledged but unavoidable — external-domain prompts trade away user-evaluability.

- **Limited statistical noise estimation.** One run per fork-task gives N=1 per condition. Negative-control pair is a QUALITATIVE noise anchor (detects gross noise) but not a QUANTITATIVE one. Optional: double-run negative controls to get N=2 for stronger noise estimation at modest extra cost (~30-60 min).

- **Path C is a valid empirical outcome.** If the cascade normalizes upstream differences across most test prompts, the prior structural verdict's OPERATIONAL implication is refuted. The structural verdict's spec-level accuracy is unchanged. The user gets meaningful data — namely that structural advantage doesn't translate operationally at the current calibration state. This is NOT test failure.

- **Pair-selection metric is breadth, not depth.** The "4-stage downstream amplification spread" metric observes WHETHER multiple downstream stages amplify, not HOW INTENSELY they amplify. User wanting depth-emphasis could choose different prompts.

- **CTRL prose-divergence is acceptable.** CTRL convergence is at facts/values level. Some prose-framing divergence is expected and constitutes noise, not signal.

## Next Actions

### MUST

- **What:** Run the warming protocol (Section 5) AND verify the session-identicality checklist (Section 8) AND commit to the Dual-Level Comparison Rubric (Section 6) BEFORE forking.
  - **Who:** The user.
  - **Gate:** Observable — warming complete; checklist verified; rubric stated explicitly in notes file or pinned text.
  - **Why:** The commit-first protocol is the primary mitigation against post-hoc rubric drift; warming equalizes the forks; identicality checklist verifies the only delta is upstream-discipline.

- **What:** Run the recommended subset (d-3, d-4, g-4, g-5, c-d, c-g) across both forks.
  - **Who:** The user.
  - **Gate:** Observable — 12 fork-runs complete.
  - **Why:** This is the empirical A/B test; without it the deliverable doesn't produce signal.

- **What:** Compare per-fork findings using the dual-level rubric. Apply the 4 negative-control diagnostic readings (Section 7) to classify each test prompt's result as Path A / Path B / Neutral / Path C.
  - **Who:** The user.
  - **Gate:** Observable — per-prompt verdicts documented; aggregate Path-pattern declared.
  - **Why:** This is where the test produces its conclusion — does the prior structural verdict's operational implication hold?

### COULD

- **What:** Run the remaining 6 test prompts (d-1, d-2, d-5, g-1, g-2, g-3) for broader coverage.
  - **Who:** The user.
  - **Gate:** Observable — after the recommended subset is complete and the user wants broader confidence.
  - **Why:** Broader axis coverage; checks whether the recommended pair generalizes.
  - **Depends-on:** MUST item "Run the recommended subset." This COULD is GATED.

- **What:** Double-run the negative-control pair to get N=2 per mode for stronger noise estimation.
  - **Who:** The user.
  - **Gate:** Time-bound — ~30-60 min additional compute.
  - **Why:** Strengthens the noise-floor anchor from qualitative to weakly-quantitative.
  - **Depends-on:** MUST item "Run the recommended subset." This COULD is GATED.

- **What:** If the A/B test produces a clear verdict, run an external-domain test as a follow-up to check generalization beyond harness-internal territory.
  - **Who:** The user, after harness-internal test concludes.
  - **Gate:** Condition-bound — only if Path classification is clear (Path A/B confirmed OR Path C confirmed).
  - **Why:** Addresses the harness-internal-domain caveat.
  - **Depends-on:** MUST item "Compare per-fork findings." This COULD is GATED.

### DEFERRED

- **What:** Re-evaluate the test design if the recommended subset produces ambiguous results (controls diverge OR test signal is weak).
  - **Gate:** Condition-bound — if diagnostic readings produce "high noise" or "weak signal."
  - **Why if revived:** test design may have an unidentified confound; re-design with stricter controls.

- **What:** Apply the process-failure corrective (Root cause 4) to the general Sensemaking protocol — add a rule that Sensemaking should probe inherited metrics from upstream disciplines against the inquiry's stated goal.
  - **Gate:** Condition-bound — if a future inquiry reveals similar inherited-metric-not-re-validated failures.
  - **Why if revived:** generalizes this inquiry's frame-error correction beyond the specific case.

## Reasoning

### Why this test design over alternatives

**Why cognitive-task framing instead of enumeration framing.** The prior inquiry's enumeration-shaped prompts (find / identify / map / list) put the upstream discipline in the cognitive driver's seat — they ask the discipline to do the main work of producing a categorized inventory. Downstream disciplines then organize that inventory but don't transform it into substantive cognitive work (a decision, diagnosis, design, or strategy). When the upstream alone does most of the cognitive work, the loop-level comparison reduces to a discipline-level comparison. The user wants the loop tested, not the discipline. Cognitive-task framing (decide / diagnose / design / strategize) puts the upstream stage in an instrumental role (it surfaces material the downstream consumes) and forces downstream stages to do substantive work.

**Why Diagnostic vs Generative-Design as the nature axis.** Five candidate axes were considered (territory-type, reactive-vs-anticipatory, decision-vs-strategy, domain, specific-vs-pattern). Diagnostic vs Generative-Design won because it captures genuine difference-in-KIND of cognitive operation (probe-existing-state vs construct-target-state). Each pole engages all 5 stages substantively but with different downstream-stage emphasis. The prior inquiry's nature axis (artifact-bounded vs possibility-mode) was a TERRITORY-TYPE axis — both poles produce enumeration tasks operationally, just on different territory types.

**Why d-3+d-4 and g-4+g-5 as the recommended pairs.** The metric is BREADTH of cascade amplification. Across the 5 D-prompts, only the pair d-3+d-4 achieves a 4-stage amplification spread (Sense-making + Decomposition + Innovation + Critique). Across the 5 G-prompts, both g-4+g-5 and g-2+g-5 achieve 4-stage spread; g-4+g-5 was committed; g-2+g-5 is the equally-defensible alternative. The CONTRARIAN-RETHINK probe ("what if NO pair is meaningfully sharper?") was applied and REJECTED on structural grounds — the 4-stage > 3-stage > 2-stage discrim gradient is genuine.

**Why dual-level rubric (5 upstream + 6 finding) instead of finding-only.** The corrected framing's centerpiece is the cumulative-effect dimension — operationalized as the COMPARISON between Level 2 divergence (finding) and Level 1 divergence (upstream output). Without both levels, Path A (cascade amplifies) and Path C (cascade absorbs) are indistinguishable; both can produce similar findings depending on noise. The ratio of Level 1 to Level 2 divergence is the discriminating signal. The 5 upstream dimensions (U1-U5) are minimal coverage of the prior comparative-evaluation's 5 operational-difference axes. The 6 finding dimensions extend the prior inquiry's DC1-DC3 with 3 additional dimensions (verdict shape, internal consistency, actionability) needed for cognitive-task evaluation.

### Frame-error diagnosis (the prior inquiry's failure modes)

Four concurring root causes in the prior inquiry produced enumeration-shaped prompts when the user intended loop-level tests:

**Root cause 1 — Discrim-strength predictor biased toward upstream-axis stress.** The prior inquiry's exploration (R5 region) ranked prompts by their stress on the operational-difference axes between specs (per-item granularity, uncertainty handling, output structure, boundary handling, substrate). HIGH discrim was equated with strong stress on these axes. But the prompts that maximally stress upstream-difference axes are exactly the prompts where the upstream stage does the main work — enumeration shapes. The predictor was structurally biased toward selecting prompts that put the upstream stage in the cognitive driver's seat.

*Corrective:* Discrim strength is now measured as DOWNSTREAM-AMPLIFICATION SPREAD — how many distinct downstream stages amplify the upstream effect. Per-prompt amplification predictions in the annotation table validate this. Each test prompt names at least one downstream stage as primary amplification site.

**Root cause 2 — Nature axis was territory-type, not task-kind.** The prior committed nature axis N1 = artifact-bounded vs possibility-mode. This is a property of the TERRITORY (does it contain pre-existing items or require candidate generation), not a property of the TASK (what cognitive operation is being asked for). Both poles of the prior axis are enumeration shapes operationally — just on different territory types.

*Corrective:* Nature axis is now N1 = Diagnostic vs Generative-Design. This is a genuine difference-in-KIND of cognitive operation. Each pole engages all 5 stages substantively but with different downstream-stage emphasis.

**Root cause 3 — Conflation of "test the discipline" with "test the loop with the discipline as upstream."** The user's question was about `/MVL+` vs `/MVL2+` (loop-level comparison). The prior inquiry's framing operated as if "discriminate `/explore` from `/surfacing`" (discipline-level question) and "test the loop with each as upstream" were the same thing. They are not. In the discipline-level framing, the discipline does the whole job; in the loop-level framing, the discipline contributes one stage to a 5-stage process.

*Corrective:* Explicit framing as LOOP-LEVEL test throughout; dual-level comparison rubric (Level 1 upstream + Level 2 finding) makes both levels of comparison observable; meaningful cognitive tasks where downstream stages do substantive work — verified per-prompt via amplification-prediction annotation.

**Root cause 4 — Inherited-metric-not-re-validated (process failure).** The prior inquiry's Sensemaking consumed exploration's R5 discrim-strength framework WITHOUT auditing it against the user's actual goal (loop-level test). Sensemaking should have probed: "is the discrim-strength metric appropriate for what the user wants?" It did not. Root causes 1-3 are structural (the bias, the axis, the conflation); Root cause 4 is procedural (why the structural problems weren't caught).

*Corrective:* General Sensemaking-protocol rule: when consuming a framework from a prior discipline, explicitly probe the framework's alignment with the inquiry's stated goal. Treat inherited frameworks as load-bearing concepts requiring LBT (load-bearing test) testing. Generalizes beyond this inquiry — this corrective applies to any /MVL+ run where Sensemaking inherits content from exploration or upstream priors.

### What survived Critique's adversarial evaluation

11 dimensions adversarially tested via 10 focal probes (verb-shape verification, cognitive-task character, amplification-prediction sanity, negative-control validity, pair-selection metric, dual-level rubric redundancy, Path C handling, frame-error completeness, authorship-bias re-application, visible-correction) plus 3 standard prosecution probes (methodology, pair, verb-shape gate).

- **Methodology prosecution defended:** the dual-level rubric is NOT just "prior + 5 dimensions"; the structural addition (operationalizing cumulative effect via Level 1 vs Level 2 ratio) is a different measurement, not an additive one.
- **Pair-selection prosecution partially survived:** breadth-not-depth metric acknowledged; user wanting depth-emphasis has alternative-pair option.
- **Verb-shape prosecution defended:** verb-shape gate + cognitive-task character probe together are sufficient; surface-verb-but-enumeration-noun catches the failure mode.
- **VP9 authorship-bias re-application:** identified bidirectional flags on g-2 (/surfacing direction) and g-5 (/explore direction). The bidirectional pattern is methodologically a feature.
- **VP8 frame-error completeness:** Root cause 4 added (process failure: inherited-metric-not-re-validated).

12 prompts: 8 SURVIVE clean + 4 SURVIVE-with-FLAG (g-2 + g-5 + 2 CTRLs). 0 KILLs.

## Open Questions

### Monitoring

- **Does the test produce a clear Path classification?** The 4 diagnostic readings (Section 7) classify each test prompt's result. If most prompts produce Path A or Path B, the structural verdict's operational implication is supported. If most produce Path C, it's refuted. If readings are mixed, the cumulative-effect dimension is task-dependent.

- **Does the bidirectional bias structure actually prevent unidirectional confirmation?** Observable after runs: if g-2 (/surfacing-favored) AND g-5 (/explore-favored) both show /surfacing winning, that's robust /surfacing evidence. If they show opposite results aligned with their bias direction, the test is operating as designed.

- **Does the verb-shape gate hold in future test designs?** This finding's SD14 gate caught zero regressions. The next test design (if any) should apply the same gate.

### Blocked

- The verdict the test produces depends on the user running it. Cannot be answered until at least the recommended subset runs.
- The process-failure corrective (Sensemaking-protocol rule about probing inherited metrics) requires explicit deployment to Sensemaking spec at `cognitive_harness/sense-making/references/sensemaking.md` — out of scope here.

### Research Frontiers

- **How to design loop-level tests for cognitive disciplines in general** (not just `/explore` vs `/surfacing`). The frame-error diagnosis + 4-root-cause structure + verb-shape gate + dual-level rubric methodology could become a reusable pattern. Out of scope here per the inquiry's Specific-vs-pattern declaration.

- **The relationship between structural-spec alignment and operational performance.** The general question — when does structural alignment translate to operational advantage in cognitive systems? — is broader than this case.

### Refinement Triggers

- **Re-open the test design** if recommended subset produces ambiguous results (controls diverge OR test signal is weak). Re-design with stricter session-identicality.

- **Re-open the discrim-strength gradient** if observed per-prompt amplification doesn't match the breadth-of-cascade predictions in the annotation table.

- **Re-open the bidirectional bias claim** if g-2 and g-5 produce same-direction results (both favoring /surfacing or both favoring /explore) — would indicate the bias directions were mis-estimated.

- **Promote Root cause 4 corrective to a Sensemaking-protocol rule** if a future inquiry reveals similar inherited-metric-not-re-validated failures — the pattern generalizes.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

in devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/finding.md

u suggested prompts but almost all of them are about finding , identfying sths , and this is not what i asked. we are not testing between explore and surfacing, we are between MVL+ and MVL2+ so we should give them better meaningful tasks. this way we can both understand cumilative effect of surfacing vs explore on the loop, and also individual outputs of them...

redo it in another inquiry
```

</details>
