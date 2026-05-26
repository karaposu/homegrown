# Decomposition — Compare MVL+ vs MVL2+ on the surfacing-metadata question

## User Input

(from `_branch.md`) Compare the two findings and verdict which did a better job, with reasoning that distinguishes runner-attributable differences from other-variable differences.

The whole to decompose (from SV6): produce a composite verdict (overall + per-dimension) using the 9 dimensions tiered by weight, with explicit runner-attribution hypothesis and MEDIUM-HIGH confidence calibration.

## Step 1 — Perceive Coupling Topology

Coupling across the 9 dimensions:

- **HIGH-weight cluster** (load-bearing for user's named regression risks):
  - Fidelity to named regression risks
  - Structural defense-in-depth
  - Convention conformance
- **MEDIUM-weight cluster** (substantive but not load-bearing for user's specific question):
  - User-language alignment
  - Missingness handling
  - Reporting completeness
- **LOWER-weight cluster** (nice-to-have / process-quality):
  - Forward-extension
  - Decomposition granularity
  - Methodology rigor in pass

Coupling within each cluster: moderate (the dimensions share thematic context but score independently). Coupling across clusters: weak (per-dimension verdicts are independent until aggregation).

Coupling with synthesis: tight (the aggregation pass needs all 9 per-dimension verdicts to produce the overall verdict + runner-attribution + confidence).

## Step 2 — Detect Boundaries (Top-Down)

Four pieces:

- **Piece HIGH-weight scoring** — per-finding verdicts on the 3 HIGH-weight dimensions.
- **Piece MEDIUM-weight scoring** — per-finding verdicts on the 3 MEDIUM-weight dimensions.
- **Piece LOWER-weight scoring** — per-finding verdicts on the 3 LOWER-weight dimensions.
- **Piece Synthesis** — aggregate per-dimension verdicts to overall verdict + runner-attribution + confidence calibration.

## Step 3 — Validate Boundaries (Bottom-Up Check)

Irreducible atoms:

- 9 per-dimension verdicts (one per dimension; each atomic).
- 1 weighting aggregation rule (HIGH * w_H + MEDIUM * w_M + LOWER * w_L → overall).
- 1 runner-attribution estimate (with confidence).
- 1 overall verdict + confidence statement.

Group atoms by piece:

- HIGH-weight: 3 per-dimension verdicts. ✅ Coherent cluster.
- MEDIUM-weight: 3 per-dimension verdicts. ✅ Coherent cluster.
- LOWER-weight: 3 per-dimension verdicts. ✅ Coherent cluster.
- Synthesis: weighting aggregation + runner-attribution + overall verdict + confidence. ✅ Coherent cluster (all four atoms operate at the cross-piece layer).

Boundaries match atom grouping. **Confidence: HIGH.**

## Step 4 — Express as Question Tree

### Piece HIGH-weight scoring

**Question:** On each of the 3 HIGH-weight dimensions (Fidelity to named regression risks; Structural defense-in-depth; Convention conformance), which finding wins, and what is the per-dimension evidence and reasoning?

**Verification criteria:**
- [ ] Per-dimension verdict for Fidelity (MVL+ / MVL2+ / tie) with evidence from both findings.
- [ ] Per-dimension verdict for Defense-in-depth (count of spec surfaces + analysis of mutual-reinforcement) with evidence.
- [ ] Per-dimension verdict for Convention conformance (Step Refinement primitive usage, placement convention adherence) with evidence.
- [ ] Each verdict cites specific evidence from the finding (path + section).

### Piece MEDIUM-weight scoring

**Question:** On each of the 3 MEDIUM-weight dimensions (User-language alignment; Missingness handling; Reporting completeness), which finding wins, and what is the per-dimension evidence and reasoning?

**Verification criteria:**
- [ ] Per-dimension verdict for User-language alignment with evidence (compare field names to user's verbatim phrasing).
- [ ] Per-dimension verdict for Missingness handling (possibility-mode treatment in each finding) with evidence.
- [ ] Per-dimension verdict for Reporting completeness (State Summary derived fields + Telemetry) with evidence.
- [ ] Each verdict cites specific evidence from the finding.

### Piece LOWER-weight scoring

**Question:** On each of the 3 LOWER-weight dimensions (Forward-extension; Decomposition granularity; Methodology rigor in pass), which finding wins, and what is the per-dimension evidence and reasoning?

**Verification criteria:**
- [ ] Per-dimension verdict for Forward-extension (named category / category-as-Research-Frontier) with evidence.
- [ ] Per-dimension verdict for Decomposition granularity (count of pieces, DAG vs parallel) with evidence.
- [ ] Per-dimension verdict for Methodology rigor in pass (state-file telemetry — stake level, candidate count, Inversion candidates) with evidence.
- [ ] Each verdict cites specific evidence from the finding's state file.

### Piece Synthesis

**Question:** Given the 9 per-dimension verdicts (with HIGH × MEDIUM × LOWER weighting), what is the overall verdict, what is the runner-attribution hypothesis, and what is the overall confidence?

**Verification criteria:**
- [ ] Overall verdict states the winner (or explicitly declares tie / per-dimension-only result).
- [ ] Per-dimension verdicts are tallied by weight tier; the aggregation rule is stated.
- [ ] Runner-attribution hypothesis names the contribution estimate (~%) and the alternative-variable contributions.
- [ ] Overall confidence is stated with sensitivity-to-weighting flag.
- [ ] The verdict's actionability for the user is explicit (what does the user do with the verdict?).

## Step 5 — Map Interfaces

| From | To | What flows | Direction |
|---|---|---|---|
| HIGH-weight scoring | Synthesis | 3 per-dimension verdicts + evidence (cited in finding) | one-way |
| MEDIUM-weight scoring | Synthesis | 3 per-dimension verdicts + evidence | one-way |
| LOWER-weight scoring | Synthesis | 3 per-dimension verdicts + evidence | one-way |
| Synthesis | Open Questions section (in finding) | Sensitivity flag — "verdict robust under user-concern-weighted scoring; not under all weightings" | one-way |

### Assumptions-not-data check

Beyond per-dimension verdicts, do the pieces share unstated assumptions?

- **A1 (per-dimension → synthesis):** the synthesis assumes each per-dimension verdict is correctly assessed. If a per-dimension verdict is wrong, the synthesis inherits the error. **Made explicit:** Critique's adversarial testing per-dimension is the protective mechanism (prosecute each verdict).
- **A2 (synthesis → user's calibration use-case):** the synthesis assumes the user can apply the verdict to their calibration decision (which runner to prefer for spec-edit questions). **Made explicit:** the verdict must state actionability + flag that one comparison is not a calibration; the user should accumulate more comparisons before committing a general rule.

Both assumptions surfaced; neither is hidden.

## Step 6 — Order by Dependency

- **HIGH-weight ‖ MEDIUM-weight ‖ LOWER-weight** can run in parallel — each piece scores a disjoint subset of dimensions; no inter-piece dependency.
- **Synthesis** depends on all three.

Final order: HIGH ‖ MEDIUM ‖ LOWER → Synthesis.

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions)

| Dimension | Verdict |
|---|---|
| Independence | PASS — each piece scores a disjoint subset of dimensions |
| Completeness | PASS — 9 dimensions / 3 tiers + 1 synthesis covers the whole comparison + verdict |
| Reassembly | PASS — HIGH + MEDIUM + LOWER aggregated by Synthesis = composite verdict |

### Determination-mechanism piece check

Is there a load-bearing concept whose use depends on a runtime determination that no piece addresses?

- **Per-dimension verdict determination:** addressed in each scoring piece (the verification criteria force per-dimension verdict + evidence + reasoning).
- **Weighting aggregation determination:** addressed in Synthesis (the aggregation rule is stated as a verification criterion).
- **Runner-attribution determination:** addressed in Synthesis (contribution estimate + alternative variables).
- **Overall confidence determination:** addressed in Synthesis (confidence level + sensitivity flag).

All four determinations are covered.

### Full evaluation (7 dimensions)

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| **Tractability** | PASS — each scoring piece has 3 dimensions × 2 findings = 6 small comparisons; Synthesis has 4 atoms |
| **Interface clarity** | PASS — only per-dimension verdicts flow into Synthesis; assumptions surfaced |
| **Balance** | PASS — 3 dimensions per scoring piece; Synthesis is the only multi-atom piece (4 atoms; still bounded) |
| **Confidence** | HIGH — top-down + bottom-up fully agree |

## Frontier / Open Questions

- **Whether the per-dimension verdicts will themselves be contested.** Innovation generates candidate verdicts per dimension; Critique adversarially tests them. If a per-dimension verdict survives prosecution + defense + collision, it stands.

- **Whether the runner-attribution hypothesis can be more precise than ~30–50%.** Without controlled A/B data, more precision is overclaim. Critique should test the contribution estimate for honesty.

## Self-Assessment

PROCEED to Innovation. Four pieces with explicit interfaces, parallel dependency for the three scoring pieces, single synthesis aggregator. All 7 self-evaluation dimensions PASS at HIGH confidence. The determination-mechanism check passes — all four determinations are covered by piece scope.
