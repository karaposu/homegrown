# Critique: Next Load-Bearing Navigation vs Materialization

## User Input

`devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/_branch.md`

## Phase 0 - Evaluation Dimensions

| Dimension | Weight | Success Criteria |
| --- | ---: | --- |
| Developer Burden Relief | 25 | Reduces the user's recurring need to choose, sequence, remember, or manually steer work. |
| Self-Building Capacity | 25 | Increases Homegrown's ability to safely create the next useful capability. |
| Feasibility Now | 15 | Can be done with current files, current protocols, and bounded effort. |
| Complexity Control | 15 | Does not add runtime, branch, or role complexity before supporting infrastructure exists. |
| Architectural Coherence | 10 | Fits Navigation, branch, materialization, outcome review, and meta-loop boundaries. |
| Learning/Calibration | 10 | Produces evidence that future Navigation or protocol work can inspect. |

Critical dimensions: Developer Burden Relief, Self-Building Capacity, Complexity Control.

## Phase 1 - Fitness Landscape

### Viable Region

Candidates that relieve Navigation burden while increasing safe self-building capacity without introducing premature autonomy.

### Boundary Region

Candidates that are valuable but incomplete alone: Navigation-only, materialization-only, handoff-only, or memory-only.

### Dead Region

Candidates that scale branch count, runtime roles, or autonomous selection before materialization, outcome comparison, and selector boundaries exist.

### Unexplored Region

Exact first dogfood artifact remains open: `navigation_observer.md`, navigation-memory convention, or Navigation-to-materialization handoff section.

## Phase 2 - Candidate Verdicts

### Candidate A - Navigation Session First, Then Materialization Artifact

**Prosecution:** A Navigation session produces another recommendation artifact but does not itself change Homegrown. It can become more thinking without building.

**Defense:** The user explicitly needs relief from next-move burden. Existing Navigation can run now without new infrastructure. It can choose or confirm the first materialization target and prevent building the wrong artifact.

**Collision:** Defense wins if Candidate A is scoped as immediate use, not architecture build.

**Verdict:** SURVIVE with scope constraint.

**Constructive Output:** Run Navigation as a session/report to pick the first materialization target, but do not treat it as the next durable capability by itself.

### Candidate B - Materialization Protocol First, Dogfood On Navigation Observer

**Prosecution:** Materialization protocol work may feel like more process and may not reduce the user's Navigation burden immediately. It also creates a bootstrap paradox: materializing materialization before materialization exists.

**Defense:** The absence is concrete: `homegrown/protocols/artifact_materialization.md` is missing. The theory already exists. A bootstrap exception can be bounded because the source authority and write-set are clear. Dogfooding it on a Navigation-relief artifact directly connects it to the user's pain.

**Collision:** Defense wins. The bootstrap paradox is real but manageable; the artifact is low-risk documentation/protocol work and should become the last uncontrolled materialization.

**Verdict:** SURVIVE.

**Constructive Output:** Create `homegrown/protocols/artifact_materialization.md` next, with Compact/Standard/Full modes, then use it immediately on a Navigation-relief artifact.

### Candidate C - Navigation-to-Materialization Handoff Contract

**Prosecution:** A separate handoff contract may be premature. It could become another protocol layer before the base materialization protocol exists.

**Defense:** The handoff is structurally important. Navigation without a path into materialization can leave the user with a map but no controlled execution.

**Collision:** Both sides are strong. The idea survives only if embedded in the materialization protocol or dogfood artifact rather than created as a standalone protocol now.

**Verdict:** REFINE.

**Constructive Output:** Include "Navigation item -> materialization request" as a section or future hook in `artifact_materialization.md`; do not create a standalone handoff protocol yet.

### Candidate D - Lightweight Navigation Memory From Traces

**Prosecution:** It depends on materialization traces and outcome records that barely exist. Building memory before records risks empty structure.

**Defense:** It is one of the right long-term directions. Navigation must eventually read evidence about what worked, not only findings.

**Collision:** Defense wins long-term, prosecution wins immediate sequencing.

**Verdict:** REFINE / DEFER.

**Constructive Output:** Add trace fields and outcome-review gates now so Navigation memory can be built after several real records exist.

### Candidate E - Build Separate Persistent Navigation Observer Now

**Prosecution:** This adds role/runtime complexity before report format, read-set, selector boundary, and outcome memory are proven. It risks becoming an unvalidated manager.

**Defense:** Separate Navigation attention is likely valuable because worker sessions are polluted by local task context.

**Collision:** Defense establishes future value but not immediate readiness.

**Verdict:** KILL for immediate next step; preserve as deferred seed.

**Seed Extracted:** Build a protocol-first Navigation Observer report after artifact materialization exists; do not build a persistent session first.

### Candidate F - Multihead Branch Brute Force

**Prosecution:** Multihead increases output volume before comparison, merge, selection, and outcome calibration are mature. It worsens the user's digestion burden.

**Defense:** Branching now exists, and brute force can explore thinking space faster when a good direction exists.

**Collision:** Prosecution wins now. Faster exploration without comparison and merge creates more work than relief.

**Verdict:** KILL for immediate next step; preserve as deferred seed.

**Seed Extracted:** Reopen multihead after several Navigation-selected branches have outcome reviews and a merge/comparison policy exists.

## Phase 3.5 - Assembly Check

### Assembly Candidate - Materialization-Backed Navigation Relief

```text
Run Navigation now
  -> bootstrap artifact_materialization.md
  -> use it on a Navigation-relief artifact
  -> outcome_review after use
```

**Prosecution:** The assembly may still be too many steps. It could delay the user's desired Navigation improvement.

**Defense:** Each step has a distinct role and uses existing capabilities:

- Navigation session: immediate relief and target choice.
- Artifact materialization protocol: safe implementation bridge.
- Navigation-relief dogfood: directly addresses the user's pain.
- Outcome review: checks whether the artifact worked.

The assembly prevents both failure modes: Navigation-only option sprawl and materialization-only bureaucracy.

**Collision:** Defense wins. The assembly is more coherent and load-bearing than any single candidate.

**Verdict:** SURVIVE, ranked first.

## Coverage Map

| Candidate | Region | Verdict |
| --- | --- | --- |
| A Navigation session first | Boundary/viable as immediate use | SURVIVE scoped |
| B Materialization protocol first | Viable as next artifact | SURVIVE |
| C Handoff contract | Boundary | REFINE |
| D Navigation memory | Future viable | REFINE / DEFER |
| E Persistent observer now | Dead for immediate stage | KILL now |
| F Multihead now | Dead for immediate stage | KILL now |
| Assembly | Viable region | SURVIVE first |

## Final Ranking

1. **SURVIVE:** Materialization-backed Navigation relief sequence.
2. **SURVIVE:** Create `homegrown/protocols/artifact_materialization.md`.
3. **SURVIVE scoped:** Run a Navigation session now to select/confirm first target.
4. **REFINE:** Navigation-to-materialization handoff, embedded rather than standalone.
5. **REFINE / DEFER:** Navigation memory from traces and outcome reviews.
6. **KILL now:** Persistent Navigation Observer runtime.
7. **KILL now:** Multihead branch brute force.

## Signal

TERMINATE.

The original question is answered. A clean survivor exists: the next load-bearing development is not pure Navigation or pure materialization, but a staged sequence where Navigation is used immediately and materialization is built next, then dogfooded on Navigation relief.

## Convergence Telemetry

- **Dimension coverage:** Complete. Critical dimensions were applied to all candidates.
- **Adversarial strength:** STRONG. Persistent observer and multihead were defended and still killed for immediate sequencing.
- **Landscape stability:** STABLE. The viable region is the assembly; dead regions are premature autonomy/scale.
- **Clean SURVIVE exists:** YES.
- **Failure modes observed:** None significant. Avoided rubber-stamping by killing two attractive candidates; avoided nitpicking by preserving future seeds.
- **Overall:** PROCEED.

## Verification Gap

`tools/structural_check.sh` is absent, so automated structural validation could not be run.
