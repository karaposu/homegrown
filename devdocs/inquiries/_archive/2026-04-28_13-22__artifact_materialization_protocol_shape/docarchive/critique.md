# Critique: Artifact Materialization Protocol Shape

## User Input

The user asked how `homegrown/protocols/artifact_materialization.md` should be designed, what it should include or exclude, and whether minimal artifacts can use a smaller lifecycle without wasting compute or time.

## Phase 0 - Evaluation Dimensions

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Safety of file effects | 5 | Prevents unscoped or unauthorized edits. |
| Adoption ergonomics | 5 | Low-risk artifacts are cheap enough that the protocol will be used. |
| Lifecycle rigor | 5 | Preserves task description, planning, criticism, repair, validation, and trace functions where needed. |
| Mode clarity | 5 | A future agent can select compact/standard/full without guessing. |
| Escalation robustness | 5 | Compact mode cannot hide risky changes. |
| Architectural fit | 4 | Preserves MVL/MVL+, CONCLUDE, branch experiments, and artifact-specific planning as separate concerns. |
| Generality | 4 | Works beyond ARC and beyond Markdown docs. |
| Retrospective value | 4 | Leaves enough evidence for later diagnosis and learning. |
| Implementation feasibility | 4 | Can be written as a manual Markdown protocol now. |

Critical dimensions are safety, adoption ergonomics, lifecycle rigor, mode clarity, and escalation robustness.

## Phase 1 - Fitness Landscape

### Viable Region

The viable region is a tiered lifecycle protocol with one invariant input contract, three modes, escalation triggers, validation outcomes, and trace requirements.

### Boundary Region

Boundary candidates include artifact-type templates, branch experiment integration, and ARC-specific guidance. These are useful later but should not define v1.

### Dead Region

Dead candidates include:

- one-size full lifecycle as the default,
- free compact mode with no risk scan,
- direct file edits with only an after-the-fact note,
- ARC-first protocol core,
- branch experiment for every artifact.

### Unexplored Region

Automation scripts for generating desc/plan/critic/trace files remain unexplored. They should wait until manual traces reveal stable patterns.

## Phase 2 - Candidate Evaluation

### A. One-Size Full Lifecycle

**Prosecution:** This is rigorous but too expensive for small artifacts. It will waste compute/time on low-risk standalone docs and create pressure to bypass the protocol.

**Defense:** It preserves the proven lifecycle and gives strong traceability.

**Collision:** The defense survives for high-risk artifacts, but fails as the default.

**Verdict:** KILL as default; SURVIVE only as Full mode.

Constructive output: keep the full lifecycle for high-risk artifacts and behavior-changing work.

### B. Free Compact Mode

**Prosecution:** This recreates the original failure mode: a finding leads to a file edit without enough source, scope, risk, validation, or trace. The fact that an artifact is small does not prove low risk.

**Defense:** It is fast and would encourage actual building.

**Collision:** Speed does not overcome the safety failure.

**Verdict:** KILL.

Constructive seed: compact mode can exist, but it must include inline brief, tiny plan, risk scan, validation note, and trace.

### C. Three-Mode Protocol

**Prosecution:** Three modes add decision overhead. Agents may misclassify risk to choose the easier path.

**Defense:** The three modes match real risk gradients: compact for low-risk standalone artifacts, standard for medium-risk work, full for high-risk behavior changes. Escalation rules can control misclassification.

**Collision:** The overhead is justified because it prevents both bureaucracy and loopholes.

**Verdict:** SURVIVE.

Constructive output: make mode selection the protocol's first operational gate.

### D. Two-Mode Protocol

**Prosecution:** Two modes leave no natural place for medium-risk work like editing an existing skill, existing protocol, test, or config. These are too important for compact mode and too common for full mode.

**Defense:** Simpler than three modes.

**Collision:** Simplicity creates bad fit for the most common non-trivial materialization work.

**Verdict:** REFINE into three modes.

Constructive output: add Standard mode as the middle path.

### E. Artifact-Type Templates First

**Prosecution:** This front-loads template design before the protocol has evidence. It risks overfitting imagined artifact classes.

**Defense:** Templates would reduce ambiguity later and improve repeatability.

**Collision:** Useful later, premature now.

**Verdict:** DEFER.

Constructive output: collect traces from early materialization runs, then create subtype templates based on observed repetition.

### F. Branch Experiment Integrated Protocol

**Prosecution:** Branch experiments are too heavy for ordinary materialization. Requiring them for every artifact would make the protocol unusable.

**Defense:** High-risk self-modification needs empirical comparison and retain/revert decisions.

**Collision:** Branch experiment is a downstream consumer or high-risk add-on, not v1 core.

**Verdict:** DEFER / REFINE.

Constructive output: Full mode should recommend branch experiment when a materialization changes core behavior, but not require it for every artifact.

### G. ARC-First Materialization Protocol

**Prosecution:** ARC is concrete but too narrow. A protocol designed around ARC harnesses and scoring will not cleanly govern docs, protocols, skills, configs, and general self-improvement artifacts.

**Defense:** ARC is a strong pressure test because it needs executable artifacts and scoring.

**Collision:** ARC should be one materialization use case.

**Verdict:** REFINE.

Constructive output: treat ARC execution/scoring artifacts as Full mode by default, not as the protocol core.

### H. Mode Selection as Protocol Center

**Prosecution:** The table may become another checklist that agents fill mechanically without real judgment.

**Defense:** Without mode selection, the protocol cannot solve the user's main concern: minimal artifacts wasting compute/time. A table with escalation triggers makes judgment explicit and reviewable.

**Collision:** The prosecution identifies a wording risk, not a structural failure.

**Verdict:** SURVIVE.

Constructive output: include both a mode-selection table and explicit "escalate when" rules.

## Phase 3.5 - Assembly Check

The strongest final assembly is:

1. Purpose and boundary:
   - materialization converts authorized decisions into concrete artifacts;
   - it does not validate truth, replace MVL/MVL+, replace CONCLUDE, or replace branch experiments.
2. Universal input contract:
   - source authority,
   - artifact type,
   - target path/write-set,
   - artifact contract,
   - validation plan,
   - risk facts,
   - selected mode.
3. Risk classification:
   - based on behavior impact, existing-vs-new target, loaded protocol/skill/tooling impact, write-set breadth, reversibility, and validation clarity.
4. Mode selection:
   - Compact for low-risk standalone artifacts.
   - Standard for medium-risk artifacts.
   - Full for high-risk artifacts.
5. Compact mode:
   - one trace file with inline brief, tiny plan, risk scan, implementation notes, validation, outcome, and follow-up.
6. Standard mode:
   - separate desc, plan, dynamic critic prompt, critic output, repaired plan if needed, implementation, validation, and trace.
7. Full mode:
   - standard mode plus strict High/Medium risk gates, stronger validation, retrospective review gate, and branch experiment recommendation for core behavior changes.
8. Escalation:
   - any mode pauses/escalates if write-set expands, validation becomes unclear, risk increases, or implementation discovers architecture change.
9. Outcome:
   - PASS, PARTIAL, or FAIL; only PASS or explicit PARTIAL can be used as evidence.
10. Retrospective hook:
   - after artifact use, compare expected value, critic misses, validation quality, and downstream outcome.

This assembly passes all critical dimensions.

## Phase 4 - Coverage and Convergence

All candidate regions were evaluated. The landscape is stable: viable designs preserve tiered rigor; dead designs either overburden small artifacts or create unsafe shortcuts.

The original question is answered. No second iteration is needed.

## Convergence Telemetry

- Dimension coverage: all critical dimensions covered.
- Adversarial strength: STRONG. Both over-bureaucracy and unsafe compact mode were tested.
- Landscape stability: STABLE.
- Clean survivor exists: yes, the one-contract/three-mode protocol.
- Failure modes observed: none requiring rerun. The main risk is future mode misclassification, addressed by escalation rules.

**Overall: PROCEED**

## Critique Verdict

**TERMINATE.**

The operational protocol should be a tiered lifecycle controller. It should include a universal input contract, risk/mode selection, compact/standard/full procedures, escalation rules, implementation rules, validation outcomes, trace schema, retrospective hook, and non-goals. It should not include artifact-specific build recipes, ARC-specific core logic, branch experiment mechanics for every artifact, truth validation of findings, or permission for skills to bypass write scope.
