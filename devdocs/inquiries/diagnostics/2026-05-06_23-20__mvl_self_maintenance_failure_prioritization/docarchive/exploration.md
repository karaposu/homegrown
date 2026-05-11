# Exploration: MVL Self-Maintenance Failure Prioritization

## Mode And Entry Point

Mode: artifact exploration.

Entry point: signal-first, because the user supplied a correction signal: the prior prioritization inquiry drifted into Navigation implementation fixes, while the intended target was MVL self-maintenance from diagnostic evidence.

Question being mapped:

```text
Across diagnostic findings under devdocs/inquiries/diagnostics/,
which fixes should MVL prioritize for self-maintenance, especially
where diagnostics identify discipline or stage failures?
Navigation discussions are evidence, not the target.
```

## Exploration Cycle 1 - Source Set Scan

### Scan

Scanned the diagnostics folder for `finding.md` files and read all ten current findings:

1. `devdocs/inquiries/diagnostics/2026-04-27_tidy_loop_failure_attribution/finding.md`
2. `devdocs/inquiries/diagnostics/2026-04-28_09-24__loop_diagnose__discipline_verdict_source/finding.md`
3. `devdocs/inquiries/diagnostics/2026-05-06_13-36__loop_diagnose__past_navigation_memory_index_before_search/finding.md`
4. `devdocs/inquiries/diagnostics/2026-05-06_13-51__loop_diagnose__route_memory_review_file_necessity/finding.md`
5. `devdocs/inquiries/diagnostics/2026-05-06_14-04__loop_diagnose__route_memory_preflight_boundary/finding.md`
6. `devdocs/inquiries/diagnostics/2026-05-06_14-23__loop_diagnose__early_stage_route_memory_default/finding.md`
7. `devdocs/inquiries/diagnostics/2026-05-06_14-48__loop_diagnose__project_level_proxy_route_memory/finding.md`
8. `devdocs/inquiries/diagnostics/2026-05-06_15-04__loop_diagnose__past_navigation_memory_discovery_pressure/finding.md`
9. `devdocs/inquiries/diagnostics/2026-05-06_16-49__loop_diagnose__navigation_naming_boundary_drift/finding.md`
10. `devdocs/inquiries/diagnostics/2026-05-06_20-17__diagnostics_fix_prioritization/finding.md`

The first nine are direct diagnostic findings about loop failures and maintenance candidates. The tenth is the prior misfocused prioritization finding; it is useful as a fresh failure example, not as authority for the corrected ranking.

### Signals Detected

The strongest signal is that the diagnostics are mostly not asking for Navigation implementation as the main repair. They repeatedly diagnose MVL failure modes:

- bad branch frame or wrong design axis;
- Sensemaking stabilizing the wrong anchor;
- Decomposition cutting the wrong boundary or leaving a load-bearing interface shallow;
- Innovation failing to generate the strongest alternative;
- Critique missing the decisive evaluation dimension;
- CONCLUDE hardening side claims, weak terms, or overstrong recommendations.

The second signal is that Navigation appears often because it produced many correction chains, not because Navigation itself is necessarily the highest-priority target of this meta-inquiry.

### Resolution Decision

Treat the Navigation route-memory chain as an evidence-rich testbed for MVL failure patterns. Do not rank Navigation patches as the main answer unless they directly maintain MVL.

### Probe

Probed the stage-attribution language in each finding. Repeated stage labels and candidate repairs were extracted into a failure-surface inventory.

### Frontier State

Advancing. The source set is known, but the failure surfaces need clustering by discipline and by self-maintenance lever.

### Confidence Map Update

- Confirmed: all ten current diagnostic `finding.md` files were read.
- Confirmed: most recent diagnostics are Navigation-themed but diagnosis-shaped.
- Confirmed: the prior prioritization finding drifted toward Navigation operational fixes.
- Scanned: stage attribution patterns across all findings.
- Unknown: final category ranking until stage surfaces are compared by urgency, reliability, ease, and breadth.

## Exploration Cycle 2 - Stage Failure Inventory

### Scan

Scanned the findings for explicit affected stages, shortcoming types, and maintenance candidates.

### Inventory By Finding

| Finding | Primary MVL Failure Signals | Maintenance Signals |
| --- | --- | --- |
| `tidy_loop_failure_attribution` | Exploration false confidence; Sensemaking canonical/provenance confusion; Decomposition wrong topology; Innovation inherited constraint; Critique wrong dimensions; CONCLUDE amplification | canonical-vs-provenance check; premise/dimension validation; inherited-constraint challenge; CONCLUDE uncertainty/overstatement guard |
| `discipline_verdict_source` | branch frame too narrow; Sensemaking anchor dominance; Decomposition wrong boundary; Innovation omitted archive-first candidate; Critique missed base-loop burden and artifact reuse; CONCLUDE overstatement | correction-chain framing check; archive-use check; user mechanism expansion; base-loop burden and artifact-reuse dimensions |
| `past_navigation_memory_index_before_search` | Exploration treated search as fallback; Sensemaking collapsed explicitness into registry; Innovation missed strongest search alternative; Critique missed fallback-as-primary | registry-vs-derivation challenge; strongest-alternative rule; fallback-promotion check; explicitness-shape note |
| `route_memory_review_file_necessity` | Sensemaking drew boundary around storage convenience; Innovation missed trigger-limited/output-mandatory candidate; Critique overweighted artifact proportionality; context intake underweighted Homegrown explicitness | Operation Output Contract Gate; Bloat Control Layer Gate; Operational Memory Critique Guard |
| `route_memory_preflight_boundary` | Sensemaking prematurely stabilized "preflight"; Critique under-attacked operation proliferation; user perspective not recursive; Innovation underweighted cleaner status-field candidate; Decomposition missed classification/review boundary | Status Classification vs Review Gate; Operation Boundary Naming Gate; Operation-Proliferation Critique Guard; User-Felt-Messiness Anchor |
| `early_stage_route_memory_default` | phase-insensitive optimization; calibration value underweighted; breakthrough preservation absent as critical criterion; robust expensive candidate killed too early | phase-calibration gate; temporary-mode guard; cost/risk priority assumption hook; scoped Critique dimensions |
| `project_level_proxy_route_memory` | proxy-trigger leakage; source taxonomy missing; universal-status middle path missed; secondary operational claims under-specified; examples drifted toward rules | proxy-trigger critique; trigger-or-defer guard; example discipline guard; source-dependency taxonomy as evidence of the failure type |
| `past_navigation_memory_discovery_pressure` | source-discovery interface left undefined; unknown state missing; Decomposition named but did not decompose discovery; Critique did not ask how existence is known; CONCLUDE hardened undefined interface | Discovery Interface Invariant; discovery status vocabulary; trigger-discovery critique guard; CONCLUDE secondary interface guard |
| `navigation_naming_boundary_drift` | durable names accepted before user-inferred behavior was tested; name migration incomplete; CONCLUDE made terms durable | Durable Term Boundary Check; name-implied behavior Critique dimension; Durable Terms block |
| `diagnostics_fix_prioritization` | target substitution in the prioritization task: answer drifted toward Navigation operational repairs instead of MVL self-maintenance repairs | answer-target validation; goal coverage check at Critique/CONCLUDE; navigation-as-evidence guard for meta inquiries |

### Signals Detected

The highest-density failure surface is **Critique missing the decisive dimension**. It appears in storage policy, archive-first diagnosis, registry/search, operation output, operation proliferation, phase calibration, proxy triggers, discovery interfaces, durable naming, and the prior misfocused prioritization.

The next strongest surfaces are **Sensemaking boundary/anchor failures** and **Innovation strongest-alternative failures**. Sensemaking often stabilizes an untested premise. Innovation often generates plausible candidates but misses or underweights the strengthened candidate that later corrections reveal.

CONCLUDE appears repeatedly as an amplifier and backstop layer, not usually the origin. Its failures are still important because it hardens findings into durable guidance.

### Resolution Decision

Cluster by MVL self-maintenance lever, not by the topical object named in the diagnostic.

### Probe

Candidate self-maintenance levers:

- Critique Premise/Dimension Validation Pack.
- Sensemaking Boundary and Assumption Extraction Guard.
- Innovation Strongest Alternative / Candidate Expansion Guard.
- Decomposition Load-Bearing Interface and Boundary Materialization Check.
- CONCLUDE Handoff Integrity Backstops.
- Correction-Chain Framing and Archive-Use Hook.
- Exploration Confidence and Primary-Alternative Probe.
- Answer-Target Validation for meta inquiries.

### Frontier State

Advancing but stabilizing. The map now has recurring failure levers.

### Confidence Map Update

- Confirmed: Critique dimension blindness is the broadest repeated missed-catch surface.
- Confirmed: Sensemaking and Innovation are repeated upstream contributors.
- Confirmed: CONCLUDE mostly amplifies or fails to backstop.
- Confirmed: the corrected meta target is MVL self-maintenance, not Navigation.
- Inferred: most urgent fixes should likely be loop-level gates, not Navigation route-memory patches.

## Exploration Cycle 3 - Maintenance Candidate Clustering

### Scan

Scanned maintenance candidates across findings and grouped them by what they would change in MVL behavior.

### Candidate Clusters

#### Cluster A - Critique Decisive-Dimension Pack

Includes:

- premise/dimension validation;
- canonical layer versus provenance layer;
- base-loop burden;
- artifact reuse;
- fallback as primary mechanism;
- operation proliferation;
- phase/calibration and breakthrough preservation;
- proxy trigger versus real dependency;
- name-implied behavior;
- discovery/existence dependency.

This cluster is broad because it targets the stage that repeatedly failed to stop wrong survivors.

#### Cluster B - Sensemaking Boundary And Assumption Pack

Includes:

- canonical versus provenance anchor;
- explicitness-shape distinction;
- operation output versus storage convenience;
- status classification versus review;
- phase and cost/risk priority assumptions;
- user-felt messiness classification;
- durable term meaning and "not this" boundaries.

This cluster targets root-frame stabilization.

#### Cluster C - Innovation Strongest Alternative Pack

Includes:

- strengthen search/no-index alternatives before killing them;
- generate artifact-derived alternatives before embedded mechanisms;
- test robust-but-expensive candidates as temporary modes;
- generate status-field alternatives before named routines;
- challenge inherited hard constraints when user preference or correction signal conflicts.

This cluster targets missing candidate shapes.

#### Cluster D - Decomposition Interface Materialization Pack

Includes:

- decompose existence-dependent triggers into discovery method, status, confidence, fallback, and ownership;
- separate classification, operation, artifact, handoff, and authority;
- make load-bearing side interfaces first-class;
- avoid inheriting a wrong object boundary without testing.

This cluster targets shallow or wrong topology.

#### Cluster E - CONCLUDE Backstop Pack

Includes:

- secondary operational claim guard;
- load-bearing interface defined-or-deferred;
- overstatement check;
- examples-as-likelihood-hints guard;
- Durable Terms block;
- answer-target/goal-coverage verification before finalizing.

This cluster targets durable hardening failures.

#### Cluster F - Correction-Chain Framing And Archive-Use Pack

Includes:

- explicitly use `LOOP_DIAGNOSE` for correction-chain diagnosis;
- read archived discipline outputs before proposing new marks;
- separate routing, diagnosis, and evidence storage;
- expand user-proposed mechanisms before adopting them.

This cluster is narrow but easy.

#### Cluster G - Exploration Confidence And Primary-Alternative Probe

Includes:

- jump-scan hidden variables such as project phase;
- avoid false confidence from one signal;
- test deterministic search as primary, not just fallback;
- map architecture context before treating a signal as confirmed.

This cluster is important but less frequently the final decisive failure than Critique/Sensemaking/Innovation.

### Signals Detected

Two candidate clusters compete for "most meaningful reliability":

1. Critique Decisive-Dimension Pack, because it is the broadest safety net and many diagnostics identify Critique as the missed-catch stage.
2. Sensemaking Boundary and Assumption Pack, because several root causes start when Sensemaking stabilizes the wrong model.

The main difference is prevention point. Sensemaking prevents bad frames from forming. Critique prevents bad frames from surviving. Since the question is self-maintenance for MVL reliability across unknown future inquiries, the safety-net role may be more reliable if it is scoped correctly.

### Resolution Decision

Do not resolve final rankings in Exploration. Pass the tension to Sensemaking:

```text
Root-cause prevention points:
  Sensemaking, Innovation, Decomposition.

Missed-catch and broad reliability point:
  Critique.

Durable-hardening point:
  CONCLUDE.

Easy workflow point:
  LOOP_DIAGNOSE archive-use and correction framing.
```

### Probe

Probed whether Navigation-specific fixes should remain top-ranked. They should not as direct implementation fixes. They may remain as examples inside loop-maintenance gates:

- source dependency becomes a proxy-trigger critique example;
- PastNavigationMemoryFile discovery becomes an existence-dependent trigger example;
- route_memory_status becomes a classification-versus-review example;
- Route Memory Review output becomes operation-output-contract example.

### Frontier State

Stable at the level needed for Sensemaking.

### Confidence Map Update

- Confirmed: there is a separate MVL self-maintenance answer from the Navigation implementation answer.
- Confirmed: the prior prioritization finding answered at the wrong target level.
- Confirmed: top candidates are cross-loop gates and discipline-specific guardrails.
- Scanned: exact source placement remains unconfirmed.
- Unknown: final order of urgency versus ease versus breadth.

## Jump Scan - Non-Navigation And Meta Failure Check

### Scan

Jump-scanned the older non-Navigation diagnostics and the newly corrected prior prioritization failure:

- `tidy_loop_failure_attribution`;
- `discipline_verdict_source`;
- `diagnostics_fix_prioritization`.

### Signals Detected

The non-Navigation diagnostics confirm that the problem is not only route-memory policy:

- storage policy failed through canonical/provenance confusion and wrong Critique dimensions;
- discipline verdict/source-of-authority failed through branch framing, archive-use blindness, and mechanism overfit;
- the prior prioritization failure itself shows target substitution: a meta-maintenance question was answered as an operational Navigation patch list.

### Resolution Decision

This confirms that a Navigation-first answer would repeat the same mistake. The final answer should prioritize MVL self-maintenance gates and use Navigation examples only to justify them.

### Frontier State

Stable.

### Confidence Map Update

- Confirmed: broad MVL maintenance candidates have evidence outside Navigation.
- Confirmed: target validation is itself now a maintenance candidate.
- Confirmed absent: evidence does not support a broad rewrite of all MVL core mechanics immediately; diagnostics mostly recommend scoped gates with evaluation triggers.

## Convergence Check

Frontier stability: yes. New scans repeated the same failure clusters rather than adding new clusters.

Declining discovery rate: yes. Later readings and the jump scan reinforced known surfaces.

Bounded gaps: yes. Exact source-edit placement is unknown, but the user asked for prioritized fixes, not implementation patch locations.

Jump scan: completed. It confirmed that the corrected answer must be self-maintenance-focused.

## Territory Overview

The diagnostic territory has four layers:

1. **Root-frame layer**
   - Branch framing, Exploration confidence, Sensemaking anchors, and Decomposition boundaries.

2. **Candidate-space layer**
   - Innovation generation and strengthening of alternatives before a candidate is killed.

3. **Evaluation layer**
   - Critique selecting the dimensions that match the actual failure mode.

4. **Durable-hardening layer**
   - CONCLUDE turning survivors, examples, terms, and side claims into future instructions.

Navigation discussions mostly live as test cases inside those layers.

## Inventory

| Self-Maintenance Candidate | Main Discipline Surface | Evidence Strength | Scope |
| --- | --- | --- | --- |
| Critique Decisive-Dimension Pack | Critique | high | broad but must be scoped by problem type |
| Sensemaking Boundary and Assumption Pack | Sensemaking | high | broad root-frame prevention |
| Innovation Strongest Alternative Pack | Innovation | high | medium-broad candidate generation |
| Decomposition Interface Materialization Pack | Decomposition | medium-high | medium, for load-bearing interfaces |
| CONCLUDE Handoff Integrity Backstops | CONCLUDE | high as amplifier, medium as root fix | broad downstream backstop |
| Correction-Chain Framing and Archive-Use Pack | branch framing / LOOP_DIAGNOSE | high | narrow and easy |
| Exploration Confidence and Primary-Alternative Probe | Exploration | medium-high | medium |
| Answer-Target Validation for Meta Inquiries | Critique / CONCLUDE / branch goal | high from latest failure, low corpus count | narrow but urgent for self-maintenance inquiries |

## Signal Log

| Signal | Where Found | Status | Notes |
| --- | --- | --- | --- |
| Critique repeatedly missed decisive dimensions | most findings | confirmed | Broadest repeated missed-catch surface. |
| Sensemaking stabilized wrong anchors | storage, archive-marks, explicitness, operation output, preflight, phase | confirmed | Often root-cause or strong contributor. |
| Innovation failed to strengthen alternatives | archive-first, search-as-primary, temporary robust mode, status-field alternative | confirmed | Repeated candidate-space weakness. |
| Decomposition left load-bearing interfaces shallow | discovery pressure, preflight boundary, storage topology | confirmed | Important when findings propose operational patch guidance. |
| CONCLUDE hardened incomplete or wrong claims | storage, archive-marks, trigger side claims, naming, latest prioritization | confirmed | Best treated as a backstop, not sole fix. |
| Navigation implementation salience caused target drift | latest prioritization finding | confirmed | Must be prevented in this corrected inquiry. |
| Broad MVL rewrite is justified now | multiple findings explicitly defer broad rewrites | confirmed absent | Current evidence supports scoped gates first. |

## Confidence Map

| Region | Confidence | Reason |
| --- | --- | --- |
| Critique dimension validation is a top self-maintenance candidate | high | Repeated across unrelated and Navigation-themed diagnostics. |
| Sensemaking boundary/assumption checking is root-cause important | high | Multiple findings identify anchor or boundary stabilization errors. |
| Innovation strongest-alternative checking is important | high | Several corrections show the stronger alternative was absent or underweighted. |
| CONCLUDE backstops are useful but insufficient alone | high | Findings repeatedly call CONCLUDE an amplifier/downstream guard. |
| Correction-chain archive-use is easy and high-effect | high | Strong evidence from `discipline_verdict_source`. |
| Exact top ranking by category | medium | Requires Sensemaking/Critique tradeoff, not more exploration. |
| Exact source-file placement | low | Needs separate implementation pass reading live protocol files. |

## Frontier State

Exploration frontier is closed for the user's current purpose. The map is sufficient for Sensemaking to rank fixes by urgency, reliability, ease, and breadth.

## Gaps And Recommendations

Sensemaking should not use frequency alone. It should distinguish:

- a root-cause fix, such as Sensemaking boundary checks;
- a safety-net fix, such as Critique dimension validation;
- a quick workflow fix, such as LOOP_DIAGNOSE archive-use;
- a durable-output fix, such as CONCLUDE backstops;
- the latest observed failure, target substitution in meta-prioritization.

Sensemaking should also explicitly answer why the previous answer went wrong: it optimized for the topical object visible in the diagnostics, Navigation route memory, instead of the maintenance target requested by the user, MVL failure prevention.
