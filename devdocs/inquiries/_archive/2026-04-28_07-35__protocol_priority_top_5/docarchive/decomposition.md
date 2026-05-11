# Decomposition: Protocol Priority Top 5

## User Input

`devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/_branch.md`

## 1. Coupling Map

### Major Clusters

#### Cluster A - Evidence Intake

Protocol candidate:

- `loop_diagnose`

Purpose:

- Turn correction chains into maintenance evidence.
- Define the input contract: weak prior inquiry, user correction, improved later inquiry, and target question.
- Define the output contract: failure pattern, confidence, maintenance candidates, affected fundamentals, and evaluation need.

Coupling:

- Strongly feeds branch experiments, retrospective review, and future self-maintenance.
- Weakly depends on structural checks; it can run before enforcement exists.

#### Cluster B - Controlled Fundamentals Change

Protocol candidate:

- `maintenance_branch_experiment`

Purpose:

- Convert an evidence-backed maintenance candidate into a git-backed candidate variant.
- Define branch creation, changed files, baseline/candidate evaluation, merge/stop/revert/refine decision, and links to diagnostic findings.

Coupling:

- Depends on `loop_diagnose` or another evidence source.
- Feeds retrospective outcome review.
- Benefits from structural integrity checks before evaluation.

#### Cluster C - Enforcement Substrate

Protocol candidate:

- `structural_integrity_and_telemetry_contract`

Sub-protocols likely needed:

- `structural_integrity_check`: sections, required files, path validity, no missing safeguards.
- `telemetry_verdict_contract`: standardized routeable verdicts such as `PROCEED`, `FLAG`, `RE-RUN`.

Purpose:

- Provide Primitive Regression Checker substrate.
- Make MVL/MVL+ outputs and discipline outputs machine-checkable enough for future routing.
- Unblock telemetry-aware Resume and stronger quality awareness.

Coupling:

- Feeds Resume, branch evaluation, retrospective review, and future Predictive/Retrospective RC.
- Can be built in parallel with `loop_diagnose`, but its implementation details depend on discipline output formats.

#### Cluster D - Outcome Closure

Protocol candidate:

- `retrospective_outcome_review`

Purpose:

- Revisit a diagnostic finding or branch experiment after later evidence appears.
- Decide retain, revert, refine, supersede, or archive.
- Calibrate whether a patch or protocol change actually improved later runs.

Coupling:

- Depends on experiments or enough later inquiries to review.
- Feeds the Retrospective RC layer.
- Provides training data for future Predictive RC and meaningful traversal.

#### Cluster E - Navigation / Meta-Loop Trace Collection

Protocol candidate:

- `navigation_selection_record`

Purpose:

- Record when Navigation was run, which item was selected, why the human selected it, what next MVL+ question resulted, and whether the selection later proved useful.

Coupling:

- Depends on Navigation maps.
- Feeds meta-loop selection, meaningful traversal, and future autonomous selector calibration.
- Can run manually before full meta-loop automation.

### Nearby but Lower-Priority Clusters

#### Cluster F - Meaningful Traversal Assessment

Strategically important but fuzzy. It needs Navigation selections and outcomes before a useful formula can be built.

#### Cluster G - Resume Check

Useful later, but blocked by telemetry contract. Basic resume already exists inline.

#### Cluster H - Protocol Inventory Hygiene

Useful cleanup, especially for `unknown.md` and dormant `resume.md`, but not as high leverage as evidence and quality protocols.

## 2. Boundary Detection and Validation

### Top-Down Boundaries

The natural boundaries are by lifecycle stage:

1. Evidence enters.
2. A candidate change is created.
3. Artifacts are checked.
4. Outcomes are reviewed.
5. Navigation selections become calibration data.

These boundaries are valid because each stage can produce a meaningful artifact on its own.

### Bottom-Up Atom Check

Irreducible atoms:

- weak prior inquiry;
- user correction;
- improved inquiry;
- diagnostic finding;
- source file patch;
- git branch;
- output artifact schema;
- discipline verdict;
- later inquiry outcome;
- Navigation map;
- selected move;
- stop/continue decision.

These atoms group naturally into the five clusters above. The only tension is Cluster C: structural integrity and telemetry verdicts are different atoms. They stay in one ranked priority because both are enforcement substrate, but implementation should keep their responsibilities separate.

## 3. Question Tree

### Q1 - What protocol should ingest correction-chain evidence?

Verification criteria:

- [x] Uses MVL+ as reasoning engine, not a new discipline.
- [x] Reads weak prior, user correction, and improved later inquiry.
- [x] Produces maintenance candidates with confidence and evidence.

Answer:
`loop_diagnose` should be the top protocol because it captures the user's current correction behavior and turns it into reusable maintenance evidence.

### Q2 - What protocol should turn evidence into controlled source variants?

Verification criteria:

- [x] Uses git branch as executable variant substrate.
- [x] Links branch to diagnostic finding.
- [x] Requires baseline/candidate evaluation before merge.

Answer:
`maintenance_branch_experiment` should rank second because Homegrown wants self-evolving fundamentals, but branch superiority must be earned by output evidence.

### Q3 - What protocol should make outputs checkable?

Verification criteria:

- [x] Repairs or replaces missing structural check expectations.
- [x] Defines required sections/files for artifacts.
- [x] Defines standardized routeable verdicts.

Answer:
`structural_integrity_and_telemetry_contract` should rank third because it provides Primitive RC substrate and unblocks Resume-style routing.

### Q4 - What protocol should close the learning loop?

Verification criteria:

- [x] Revisits changes after later evidence.
- [x] Decides retain/revert/refine/supersede.
- [x] Produces Retrospective RC evidence.

Answer:
`retrospective_outcome_review` should rank fourth because without closure, every change is only an untested edit.

### Q5 - What protocol should prepare meta-loop autonomy?

Verification criteria:

- [x] Records Navigation maps and selected moves.
- [x] Records human rationale and later outcome.
- [x] Does not hide selection inside Navigation.

Answer:
`navigation_selection_record` should rank fifth because it starts collecting the data needed for future selectors and meaningful traversal without premature autonomy.

## 4. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| User correction chain | `loop_diagnose` | Weak inquiry, correction, improved inquiry | One-way evidence input |
| `loop_diagnose` | `maintenance_branch_experiment` | Maintenance candidate, affected files, confidence, risk | One-way proposal |
| `structural_integrity_and_telemetry_contract` | `maintenance_branch_experiment` | Check gates for branch outputs and changed specs | One-way validation |
| `maintenance_branch_experiment` | `retrospective_outcome_review` | Branch, patch, evaluation cases, initial outcome | One-way review input |
| Later inquiries | `retrospective_outcome_review` | Evidence of improvement, regression, or no effect | One-way empirical input |
| `retrospective_outcome_review` | Future `loop_diagnose` / specs | Retain/revert/refine lessons | Feedback |
| Navigation map | `navigation_selection_record` | Options, confidence, trigger reason | One-way selection input |
| Human or meta-loop v1 | `navigation_selection_record` | Selected item and rationale | One-way selection record |
| `navigation_selection_record` | Meaningful traversal / future selector | Trace/outcome dataset | One-way calibration input |
| Telemetry contract | Resume / Navigation / future routing | `PROCEED`, `FLAG`, `RE-RUN` style verdicts | One-way routing evidence |

## 5. Dependency Order

### Immediate Order

1. **`loop_diagnose`**
   - Can start now with existing correction chains.
   - Needs only a lightweight protocol/template.

2. **`structural_integrity_and_telemetry_contract`**
   - Can start in parallel after `loop_diagnose` framing is clear.
   - Fixes the missing enforcement substrate.

3. **`maintenance_branch_experiment`**
   - Should come after at least one diagnostic finding motivates a real source change.
   - Benefits from structural/telemetry checks before evaluating candidate branches.

4. **`retrospective_outcome_review`**
   - Needs a patch, branch, or later inquiry outcome to review.
   - Can be specified early, but its first real use comes after experiments.

5. **`navigation_selection_record`**
   - Can begin manually whenever Navigation is run.
   - Becomes more important as meta-loop is used.

### Deferred Order

6. `meaningful_traversal_assessment`
7. `resume_check`
8. `protocol_inventory_hygiene`
9. autonomous selector
10. multi-head merge protocol

## 6. Self-Evaluation

| Dimension | Result | Rationale |
|---|---|---|
| Independence | PASS | Each protocol has a coherent purpose and artifact boundary. |
| Completeness | PASS | Covers diagnosis, change, enforcement, closure, and traversal data. |
| Reassembly | PASS | Together, the five protocols create a Level 1 self-maintenance path from failure signal to evaluated improvement. |
| Tractability | PASS | Each can begin as a lightweight Markdown-native protocol. |
| Interface clarity | PASS | Evidence, branch, validation, outcome, and selection flows are explicit. |
| Balance | PASS | No single protocol absorbs the whole roadmap; each is one lifecycle function. |
| Confidence | MEDIUM-HIGH | Boundaries match recent findings, but exact schemas still need implementation inquiries. |

## 7. Decomposition Summary

The ranked top five should be understood as a lifecycle:

```text
loop_diagnose
-> maintenance_branch_experiment
-> structural_integrity_and_telemetry_contract
-> retrospective_outcome_review
-> navigation_selection_record
```

The order is not purely chronological. `structural_integrity_and_telemetry_contract` can be worked on in parallel. The ranking reflects usefulness: how much each protocol helps Homegrown learn from its own use and avoid arbitrary self-modification.
