# Decomposition: Loop-Level Meaningful Task Pair Design for /MVL+ vs /MVL2+ Comparison

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_13-00__cognitive_task_pair_for_mvl_loop_ab_test/_branch.md`

Plus additional instructions: read priors. Apply 7-step decomposition. Property (v) NOT firing. N: 7-9 pieces.

The whole to decompose: **Innovation's deliverable** = 12 paste-ready prompts (5 D + 5 G + 2 CTRL) + 12-row annotation table + pair-selection guidance + dual-level rubric artifact + warming protocol artifact + run plan + caveats artifact + Changes-from-Prior section + frame-error diagnosis carried in.

---

## Step 1 — Perceive Coupling Topology

### Elements

- **E1** — 5 Diagnostic test prompts (from D2 frame-error, D3 self-containedness, D8 L4-failure-anticipation + 2 derived)
- **E2** — 5 Generative-Design test prompts (from G1 frame-error-recovery, G2 merger-discipline, G6 regression-detection + 2 derived; G3 pre-loop-framing as alternative)
- **E3** — 2 negative-control prompts (lookup-shape; bypass cognitive machinery; 1 D-analog + 1 G-analog)
- **E4** — Per-prompt annotation (12 rows × {nature + primary amplification stage + size + flag})
- **E5** — Verb-shape verification (SD14 anti-regression gate); ABSORBED into P1/P2/P3 verification criteria (not a separate piece)
- **E6** — Pair-selection guidance (2-of-5 per group + alternative; CONTRARIAN-RETHINK applied)
- **E7** — Dual-level rubric artifact (U1-U5 upstream + F1-F6 finding; commit-first; aggregate rule)
- **E8** — Warming protocol artifact (6 files; carry-forward)
- **E9** — Run plan + stochasticity + caveats artifact (one run; noise floor; signal threshold; CTRL diagnostic readings; cumulative-effect Path A/B/C interpretation; bias caveats)
- **E10** — Changes-from-Prior section content + R13 frame-error diagnosis (3 root causes + corrective)

### Coupling

- E1, E2 — weak coupling (different nature; shared constraints: cognitive-task-shape, harness-internal, paste-ready, size-comparable, cognitive-verb start)
- E1, E2 ↔ E3 — weak coupling (CTRLs need size-awareness; otherwise independent)
- E1, E2, E3 → E4 — moderate (annotation reads prompt bodies)
- E5 ABSORBED into E1, E2, E3 verification (cognitive-verb-start for test prompts; lookup-verb-start for CTRLs)
- E1, E2 → E6 — moderate (pair-selection needs all 5 in each group + annotations)
- E4 → E6 — moderate (amplification predictions input to ranking)
- E7 — independent (relies on SD5 + SD6 only)
- E8 — independent (relies on SD8 only)
- E9 — independent (relies on SD6 + SD7 + SD10 only)
- E10 — independent (relies on SD12 + R13 only)

### Coupling diagram

```
PHASE A (parallel):
  [E1 5 D prompts] [E2 5 G prompts] [E7 Rubric] [E8 Warming] [E9 Run plan+caveats] [E10 Changes-from-Prior+R13]
       │                │
       └──────┬─────────┘
              ▼
  PHASE B:
  [E3 2 CTRL] ← size-aware via shared contract
              │
              ▼
  E1+E2+E3
              │
              ▼
  PHASE C:
  [E4 Annotation]
              │
              ▼
  PHASE D:
  [E6 Pair-selection]
```

---

## Step 2 — Detect Boundaries Top-Down

| Piece | Cluster | Elements | Why this boundary |
|---|---|---|---|
| **P1** | Content-gen, Diagnostic | E1 — 5 D prompts | Same primary deliverable shape; shared constraints |
| **P2** | Content-gen, Generative-Design | E2 — 5 G prompts | Same primary deliverable shape; shared constraints |
| **P3** | Content-gen, Controls | E3 — 2 CTRLs | Different design intent (anti-loop-cognitive); shared lookup-shape |
| **P4** | Analysis over content | E4 — 12-row annotation | Different work type (analysis, not generation); operates ON prompts |
| **P5** | Synthesis over annotated content | E6 — pair-selection | Different work type (ranking across group); operates ON annotations |
| **P6** | Methodology — rubric | E7 — dual-level rubric | Different domain (comparison rubric); independent of prompt content |
| **P7** | Methodology — warming | E8 — warming protocol | Different domain (parent-session priming); independent |
| **P8** | Methodology — runs + caveats | E9 — run plan + caveats | Different domain (run-time behavior); independent |
| **P9** | Meta — corrective explanation | E10 — Changes-from-Prior + frame-error diagnosis | Different domain (meta-acknowledgment); independent |

9 pieces.

---

## Step 3 — Validate Boundaries Bottom-Up

### Atoms

| Atom set | Group | Piece |
|---|---|---|
| 5 D prompt bodies (d-1 through d-5) | d-* | P1 ✓ |
| 5 G prompt bodies (g-1 through g-5) | g-* | P2 ✓ |
| 2 CTRL prompt bodies (c-d, c-g) | c-* | P3 ✓ |
| 12 annotation rows | n-* | P4 ✓ |
| 2 pair-selections + alternatives | ps-* | P5 ✓ |
| 5 U-dimensions + 6 F-dimensions + aggregate rule + commit-first protocol | dr-* | P6 ✓ |
| 6 file references + reading order + intent statements + fork instruction | w-* | P7 ✓ |
| Stochasticity policy + noise floor + signal threshold + CTRL diagnostic readings + cumulative-effect interpretation + caveats + budget | rp-* | P8 ✓ |
| 4 sub-sections (preserved/changed/new/migration) + revision trigger + 3 frame-error root causes + 3 correctives | cfp-* | P9 ✓ |

All atoms group naturally. No atoms straddle boundaries.

### Confidence

| Boundary | Confidence |
|---|---|
| P1 (5 D prompts) | HIGH |
| P2 (5 G prompts) | HIGH |
| P3 (2 CTRL) | HIGH |
| P4 (annotation) | HIGH |
| P5 (pair-selection) | HIGH |
| P6 (dual-level rubric) | HIGH |
| P7 (warming) | HIGH |
| P8 (run plan + caveats) | HIGH |
| P9 (Changes-from-Prior + frame-error diagnosis) | HIGH |

Top-down and bottom-up agree on all 9 boundaries.

---

## Step 4 — Express as Question Tree

### P1 — 5 Diagnostic test prompts

**Question:** What 5 specific paste-ready cognitive-task prompt bodies (PRIMARY deliverable = understanding-with-evidence; harness-internal; size-comparable; cognitive-verb-start; engages all 5 stages substantively) best instantiate seeds D2 (frame-error diagnostic), D3 (self-containedness violations), D8 (L4 multi-head failure anticipation) plus 2 derived candidates?

**Verification criteria:**
- [ ] 5 prompt bodies produced
- [ ] Each prompt's PRIMARY deliverable shape is understanding-with-evidence (diagnostic, not design)
- [ ] Each prompt body STARTS with cognitive-task verb (Why / Diagnose / What's causing / What explains / How does X manifest) — **NOT** enumeration verb (Map / Catalog / Find / Identify / Locate / Enumerate / Generate every)
- [ ] Each prompt has explicit territory specification (paths / scope / domain)
- [ ] Each prompt's downstream-amplification prediction names at least ONE downstream stage (sense-making / decomposition / innovation / critique) as primary amplification site — confirms loop-level rather than upstream-only stress
- [ ] All 5 stages would have substantive cognitive work (not just upstream)
- [ ] Self-contained (paste-ready; user adds /MVL+ or /MVL2+ prefix only)
- [ ] R9 anti-patterns avoided (no trivial enumeration; no pure narrative; no single-item; no too-vague; no one-passage-answer)
- [ ] Authorship-bias residual LOW (prompt is about project/harness concern, not about /explore-vs-/surfacing directly)

### P2 — 5 Generative-Design test prompts

**Question:** What 5 specific paste-ready cognitive-task prompts (PRIMARY deliverable = construction-with-components-and-trade-offs; harness-internal; size-comparable; cognitive-verb-start; engages all 5 stages substantively) best instantiate seeds G1 (frame-error recovery protocol design), G2 (merger discipline design), G6 (regression-detection sub-system design) plus 2 derived (with G3 pre-loop-framing as defensible alternative for G1)?

**Verification criteria:**
- [ ] 5 prompt bodies produced
- [ ] Each prompt's PRIMARY deliverable shape is construction-with-components-and-trade-offs (design, not pure diagnosis)
- [ ] Each prompt body STARTS with cognitive-task verb (Design / Propose / Build / How should / What approach) — NOT enumeration verb
- [ ] Each prompt has explicit territory specification
- [ ] Each prompt's downstream-amplification prediction names at least ONE downstream stage as primary site
- [ ] All 5 stages would have substantive cognitive work
- [ ] Self-contained + paste-ready
- [ ] R9 anti-patterns avoided
- [ ] Authorship-bias residual LOW

### P3 — 2 Negative-control prompts

**Question:** What 2 paste-ready lookup-shape prompts (1 D-analog + 1 G-analog) deliberately bypass loop cognitive machinery such that BOTH /MVL+ and /MVL2+ produce nearly-identical findings — anchoring the noise floor empirically for a loop-level test?

**Verification criteria:**
- [ ] 2 controls produced
- [ ] Each STARTS with lookup verb (Confirm / Report / What value / Read and summarize) — anti-pattern relative to cognitive-task verbs
- [ ] Each territory is well-bounded (tiny scope; trivially answered)
- [ ] Both expected to bypass downstream cognitive work — sense-making has no anchors; decomposition no pieces; innovation no candidates; critique no probes
- [ ] Both expected to converge on near-identical finding under both /MVL+ and /MVL2+
- [ ] Self-contained + paste-ready
- [ ] Reasoning for "expected LOW divergence" stated explicitly per control
- [ ] No authorship-bias risk (lookup is mechanism-neutral)

### P4 — Annotation layer (12-row table)

**Question:** For each of the 12 prompts: nature (D / G / CTRL), primary downstream amplification stage prediction, approximate size, and flag if applicable?

**Verification criteria:**
- [ ] 12 rows produced
- [ ] Each row: prompt-id + nature + primary amplification stage(s) + approximate size + flag-or-clean
- [ ] Amplification predictions reference downstream stages by name (sense-making / decomposition / innovation / critique / finding)
- [ ] CTRL rows show "expected LOW divergence; loop-bypass design"
- [ ] Test-prompt rows show predicted amplification stage(s) explicitly (validates loop-level test character)
- [ ] Annotation is consistent (e.g., diagnostic prompts tend to amplify at sense-making + critique; generative tends to amplify at decomposition + innovation)
- [ ] No row omitted; no row stranded

### P5 — Pair-selection guidance

**Question:** For each of Groups D (5 diagnostic) and G (5 generative-design), which 2-of-5 pair has the sharpest predicted cumulative-effect signal — applying CONTRARIAN-RETHINK ("what if NO pair is meaningfully sharper?")?

**Verification criteria:**
- [ ] 2 pair recommendations (1 per group)
- [ ] Each recommendation: 2 prompt-ids + reasoning grounded in P4 annotations
- [ ] Reasoning is structural (cites: cognitive-task character + amplification-stage-spread + low authorship-bias)
- [ ] CONTRARIAN-RETHINK probe applied + adjudicated (REJECTED if discrim gradient is genuine; ACCEPTED if all candidates equivalent)
- [ ] Alternative pair flagged if applicable (e.g., G1+G2 vs G2+G6 — note alternative)
- [ ] Total recommended subset stated (2 D + 2 G + 2 CTRL = 6 prompts vs 12 full)
- [ ] Budget trade-off stated (sharpest subset ~3.7h vs full set ~13.5h)

### P6 — Dual-level rubric artifact

**Question:** What paste-ready text operationalizes SD5 (U1-U5 upstream dims + F1-F6 finding dims) + SD6 (aggregate rule + commit-first) for the user to keep in hand during the A/B runs?

**Verification criteria:**
- [ ] U1 (content coverage) defined with rubric
- [ ] U2 (granularity) defined with rubric
- [ ] U3 (relevance discipline) defined with rubric
- [ ] U4 (uncertainty handling) defined with rubric
- [ ] U5 (boundary handling) defined with rubric
- [ ] F1 (verdict shape) defined with rubric
- [ ] F2 (per-item precision) defined with rubric
- [ ] F3 (trade-off depth) defined with rubric
- [ ] F4 (coverage robustness) defined with rubric
- [ ] F5 (actionability) defined with rubric
- [ ] F6 (internal consistency) defined with rubric
- [ ] Aggregate rule stated: per-criterion verdict per fork-task; aggregate at level + holistic
- [ ] Commit-first protocol stated explicitly
- [ ] Operational instruction for HOW user applies the rubric (per-prompt; per-level; per-fork)

### P7 — Warming protocol artifact

**Question:** What is the paste-ready warming protocol (6 files, carried forward from prior)?

**Verification criteria:**
- [ ] 6 files listed (explore.md, surfacing.md, MVL+ SKILL.md, MVL2+ SKILL.md, docs/desc.md, docs/discipline_taxonomy.md)
- [ ] Reading order specified
- [ ] Per-file intent statement (one line each)
- [ ] Fork-after-warming instruction explicit
- [ ] Paste-ready

### P8 — Run plan + stochasticity + caveats artifact

**Question:** What paste-ready text captures the run plan, stochasticity policy, signal/noise thresholds, CTRL diagnostic readings, cumulative-effect interpretation, caveats, and compute budget?

**Verification criteria:**
- [ ] Stochasticity policy stated (one run per fork-task)
- [ ] Noise floor stated (~5-10%; CTRL-anchored)
- [ ] Signal threshold stated (>20% per-item OR substantially-different aggregate verdict)
- [ ] CTRL diagnostic readings (4 readings: amplification / neutral / Path C / noisy)
- [ ] Cumulative-effect interpretation (Path A / Path B / Path C — all 3 stated; Path C is VALID outcome, not failure)
- [ ] Caveats: authorship-bias (with cognitive-task-framing-mitigation note), harness-internal, stochasticity (CTRL qualitative not quantitative)
- [ ] Session-identicality checklist (model + effort + time + working-dir + auto-memory)
- [ ] Compute budget estimate (sharpest subset ~3.7h; full set ~13.5h)
- [ ] Paste-ready

### P9 — Changes-from-Prior + frame-error diagnosis

**Question:** What text formats the 4 Changes-from-Prior sub-sections (preserved / changed / new / migration) + revision trigger + R13's 3-root-cause frame-error diagnosis for inclusion in finding?

**Verification criteria:**
- [ ] Revision trigger stated (user correction on prior framing)
- [ ] "What's preserved" listed:
  - Harness-internal commitment
  - Warming protocol files
  - One-run-per-fork stochasticity policy
  - Commit-first protocol
  - Caveat shape (authorship + domain + stochasticity)
  - Pair-selection methodology (sharpest pair + alternative)
- [ ] "What's changed" listed:
  - Nature axis: from territory-type (artifact-bounded vs possibility-mode) → task-KIND (Diagnostic vs Generative-Design)
  - Advancing seeds: from R10's per-territory pool → R5/R6's cognitive-task pool
  - Comparison rubric: from finding-only DC1-DC3 → dual-level U1-U5 + F1-F6
  - Authorship-bias exclusions: from 3 flagged (a-3, b-4, b-5 kept with flags) → 4 excluded (D4, D5, D7, G8)
- [ ] "What's new" listed:
  - Frame-error diagnosis (3 concurring root causes)
  - Cumulative-effect operationalization (Path A/B/C interpretation)
  - Per-prompt downstream-amplification prediction
  - Verb-shape verification gate (anti-regression structural test)
  - Dual-level comparison guidance section
- [ ] "Migration" stated: prior's prompts SHOULD NOT be used; use these new ones. Prior finding stands as historical record of the frame error.
- [ ] R13 3-root-cause diagnosis included:
  - Root cause 1: discrim-strength predictor biased toward upstream-axis stress
  - Root cause 2: nature axis was territory-type, not task-kind
  - Root cause 3: conflation of "test the discipline" with "test the loop with the discipline as upstream"
- [ ] Corrective per root cause stated

---

## Step 5 — Map Interfaces

| # | Source | Target | Flow | Direction |
|---|---|---|---|---|
| **HCR1** | P1 (D prompts) | P4 (annotation) | Each D prompt body → annotation row (nature + amplification + size) | one-way |
| **HCR2** | P2 (G prompts) | P4 (annotation) | Each G prompt body → annotation row | one-way |
| **HCR3** | P3 (CTRLs) | P4 (annotation) | Each CTRL body → annotation row (with "expected LOW divergence; loop-bypass" marker) | one-way |
| **HCR4** | P1 (D prompts) | P5 (pair-selection) | 5 D prompts + their annotations → 2-of-5 D pair | one-way many-to-one |
| **HCR5** | P2 (G prompts) | P5 (pair-selection) | 5 G prompts + their annotations → 2-of-5 G pair | one-way many-to-one |
| **HCR6** | P4 (annotations) | P5 (pair-selection) | Amplification predictions → ranking input | one-way |
| **HCR7** | P1, P2 size contract | P3 (CTRL) | shared constraint: territory ~5-10 items / runtime ~30-50 min for test prompts; CTRLs size-comparable but well-bounded | shared-state contract |
| **HCR8** | All P1-P9 | CONCLUDE | Compilation into finding.md | one-way aggregation |

### Assumptions-not-data check

| Assumption | Source | Target | Captured? | Hidden coupling risk |
|---|---|---|---|---|
| Prompt bodies machine-readable enough to extract amplification predictions | P1, P2, P3 → P4 | P4 reads prompt body | YES — P4 verification requires annotation rows to read prompt content | Mitigated |
| Size contract held across P1/P2/P3 | P1, P2 → P3 | shared contract | YES — verification criteria require size-comparable | Mitigated |
| Annotation amplification predictions use consistent stage-name vocabulary | P4 internal | P5 reads them | YES — P4 verification specifies stage-name vocabulary | Mitigated |
| CONTRARIAN-RETHINK probe at P5 produces clear adjudication | P5 internal | downstream Critique | PARTIAL — if no clear sharpest pair emerges, P5 must flag and surface to Critique | Soft risk flagged |
| SD content stable (P6, P7, P8, P9 read SDs) | P6-P9 ← Sensemaking | independent | YES — SDs committed at Sensemaking | Mitigated |
| R13 frame-error diagnosis stable | P9 ← exploration | independent | YES — R13 committed at exploration | Mitigated |
| User-commits-criterion-BEFORE-runs protocol followed by user | P6/P8 → user behavior | runtime | OUTSIDE Innovation's scope | Acknowledged in P8 caveats |

One soft risk: P5 CONTRARIAN-RETHINK might find no clear sharpest pair in one group. P5 verification mandates explicit handling (REJECTED if gradient genuine; ACCEPTED if equivalent).

---

## Step 6 — Order by Dependency

```
PHASE A (parallel — 6 pieces):
  P1 — 5 D prompts          (independent; relies on SD3 advancing seeds)
  P2 — 5 G prompts          (independent; relies on SD3 advancing seeds)
  P6 — Dual-level rubric    (independent; relies on SD5 + SD6)
  P7 — Warming protocol     (independent; relies on SD8)
  P8 — Run plan + caveats   (independent; relies on SD6 + SD7 + SD10)
  P9 — Changes-from-Prior   (independent; relies on SD12 + R13 + SD13)
                              │
                              ▼
PHASE B:
  P3 — 2 CTRLs               (size-aware of P1+P2; could parallel if size pre-committed)
                              │
                              ▼
PHASE C:
  P4 — Annotation            (after P1, P2, P3 produce prompts)
                              │
                              ▼
PHASE D:
  P5 — Pair-selection        (after P4 produces annotations)
```

4-phase order. No circular dependencies. PHASE A has 6 pieces (larger than prior's 4) reflecting added Changes-from-Prior + dual-level-rubric + run-plan-with-caveats complexity.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Result | Evidence |
|---|---|---|
| **Independence** | PASS | P1, P2, P6, P7, P8, P9 all independent; P3 needs only size CONTRACT (not data); P4, P5 depend on prior pieces through interfaces |
| **Completeness** | PASS | All 10 elements (E1-E10; E5 absorbed into P1/P2/P3 verification) mapped to P1-P9; no aspect of deliverable falls through gaps |
| **Reassembly** | PASS | Pieces + HCR1-HCR8 reconstruct: 12 prompts + annotations + pair guidance + dual-level rubric + warming + run plan + caveats + Changes-from-Prior + frame-error diagnosis → CONCLUDE |

### Determination-mechanism piece check

Load-bearing concepts with runtime-determination components:

| Concept | Runtime determination | Piece addressing HOW? |
|---|---|---|
| Pair-selection ranking | "Which 2-of-5 has sharpest cumulative-effect prediction?" | **P5** (combining amplification-prediction-spread + cognitive-task-character + low-bias scoring) ✓ |
| Verb-shape verification | "Does each prompt body start with cognitive-task verb?" | **P1, P2** verification criteria explicitly check ✓ |
| Cognitive-task character | "Will all 5 stages have substantive work for this prompt?" | **P1, P2** verification criteria check via amplification prediction + downstream-stage-as-primary-site ✓ |
| Negative-control bypass | "Does each CTRL bypass cognitive machinery?" | **P3** verification criteria specify lookup-shape + tiny territory + reasoning for expected-LOW ✓ |
| Cumulative-effect interpretation | "Which Path (A/B/C) operated per prompt?" | **P8** specifies the 4 diagnostic readings + Path interpretations ✓ |

All determinations have piece-level mechanism specification.

**PASS.**

### Full evaluation (7 dimensions)

| Dimension | Result | Reasoning |
|---|---|---|
| Independence | PASS | As above |
| Completeness | PASS | As above |
| Reassembly | PASS | As above |
| Tractability | PASS | Each piece has 5-9 verification criteria; each is a focused Innovation pass |
| Interface clarity | PASS | 8 HCRs explicit with source / target / flow / direction; assumptions-not-data check applied; 1 soft risk flagged |
| Balance | PASS | P1 and P2 similar substantive generation work; P3 lighter (2 prompts); P4 medium synthesis (12 rows); P5 light synthesis with CONTRARIAN-RETHINK; P6 medium content (11 dimensions to specify); P7 light (formatting); P8 medium (multi-element artifact); P9 medium-heavy (4 sub-sections + 3-root-cause diagnosis) — distribution acceptable; no piece dominates 80% |
| Confidence | PASS | Top-down and bottom-up agree on all 9 boundaries |

### Failure modes

| Failure | Status | Evidence |
|---|---|---|
| Premature decomposition | NOT OBSERVED | Sensemaking produced 14 SDs first; decomposition operates on stable substrate |
| Wrong boundaries | NOT OBSERVED | Cuts at low-coupling regions (D vs G; tests vs CTRL; content vs analysis vs methodology vs meta) |
| Hidden coupling | NOT OBSERVED | Assumptions-not-data check applied; 1 soft risk flagged (P5 CONTRARIAN-RETHINK adjudication) |
| Missing pieces | NOT OBSERVED | E1-E10 all mapped; determination-mechanism check PASS; P9 explicitly addresses Changes-from-Prior (required by `corrects:` frontmatter) |
| Over-decomposition | NOT OBSERVED | 9 pieces appropriate; verb-shape absorbed into P1/P2/P3 verification rather than separated |
| Ignoring dependencies | NOT OBSERVED | 4-phase order; parallel-when-independent identified |
| Imbalanced | NOT OBSERVED | All pieces have substantive work; no 80% piece |

All 7 failure modes AVOIDED.

---

## Self-Assessment Verdict

**PROCEED to Innovation with 9-piece Q-tree (P1-P9) + 8 HCRs.**

Innovation will:
- Execute per-piece Seed → Generate → Test at P1, P2, P3 (substantive prompt generation with verb-shape verification embedded in verification criteria)
- Execute lighter synthesis at P4, P5 (analytical work over P1-P3's outputs)
- Execute formatting + content at P6, P7, P8 (operational rubric + procedure + caveats)
- Execute content at P9 (Changes-from-Prior + frame-error diagnosis carried in)
- Apply CONTRARIAN-RETHINK Inversion-candidate at P5 — "what if NO pair is meaningfully sharper?" — test + adjudicate honestly
- At Innovation's assembly check, verify: (a) all 12 prompts pass verb-shape verification; (b) each prompt's amplification prediction names at least one downstream stage as primary; (c) negative controls actually bypass cognitive machinery; (d) the assembly + Changes-from-Prior section together correct the prior frame error visibly

Property (v) NOT firing at any piece confirmed.
