# Critique: Comparative MVL Loop Diagnosis

## User Input

`devdocs/inquiries/comparative_mvl_loop_diagnosis/_branch.md`

Question: Should Homegrown's next self-maintenance step be a comparative diagnostic protocol that analyzes failed and improved MVL inquiry runs, rather than trying to build advanced autonomous self-maintenance directly?

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Fits real workflow | Critical | Matches bad finding -> user correction -> rerun -> better finding. |
| Distinct from Reflection | High | Does not blur single-run Reflection with cross-run diagnosis. |
| Generates self-maintenance data | Critical | Produces evidence that can improve disciplines, protocols, or loop behavior. |
| Avoids premature autonomy | Critical | Does not auto-edit fundamentals or pretend to be advanced self-maintenance. |
| Implementability | High | Can start as Markdown-native protocol with no heavy runtime. |
| Attribution rigor | High | Avoids blaming the wrong discipline and separates new context from system failure. |
| Future extensibility | Medium | Can later become a discipline or feed autonomous maintenance. |

## Phase 1: Fitness Landscape

### Viable Region

The viable region is a lightweight comparative diagnostic protocol that:

- accepts multiple inquiry folders and user correction;
- compares bad and improved outputs;
- attributes failures with evidence and confidence;
- produces maintenance candidates;
- feeds Level 1 self-maintenance.

### Boundary Region

Turning this into a full discipline immediately is boundary-region: likely useful later, but premature now.

Extending Reflection is boundary-region: possible, but risks muddling Reflection's simpler role.

### Dead Region

Dead approaches:

- direct autonomous spec edits;
- advanced self-maintenance first;
- manual notes without a protocol;
- treating better answer generation as enough without extracting failure data.

## Phase 2 and 3: Candidate Verdicts

### Candidate A: Extend Reflection Into Multi-Run Mode

**Prosecution:** It overloads Reflection. Single-run process reflection and cross-run delta diagnosis are different input shapes and different questions.

**Defense:** It reuses an existing concept and avoids adding another named operation.

**Collision:** Prosecution wins for the near term. Reuse is attractive, but clarity matters more.

**Verdict:** REFINE.

**Constructive output:** Keep Reflection separate. Later, Reflection may consume loop-diagnosis outputs or gain a multi-run mode if evidence supports it.

### Candidate B: New Protocol `loop-diagnose`

**Prosecution:** A protocol may be too lightweight; without a full discipline spec, outputs may vary.

**Defense:** Lightweight is correct for the first build. The operation is new and should be tested on real correction chains before hardening into a discipline.

**Collision:** Defense wins.

**Verdict:** SURVIVE.

**Constructive output:** Build `loop-diagnose` as a protocol/template first.

### Candidate C: New Full Discipline `comparative-diagnosis`

**Prosecution:** Too heavy too early. A full discipline needs reference docs, failure modes, telemetry, and maintenance overhead.

**Defense:** The operation is conceptually distinct enough to deserve discipline status eventually.

**Collision:** Both are true. It should be a promotion path, not the first step.

**Verdict:** REFINE.

**Constructive output:** Promote to discipline after 5-10 useful diagnosis cases.

### Candidate D: Self-Maintenance Ledger First

**Prosecution:** A ledger without diagnosis will contain weak entries or human-only notes.

**Defense:** A ledger is still required for Level 1.

**Collision:** The components need each other. The ledger stores maintenance decisions; `loop-diagnose` creates high-quality candidate entries.

**Verdict:** SURVIVE as paired component.

**Constructive output:** Implement ledger and `loop-diagnose` together or in immediate sequence.

### Candidate E: Manual Template Only

**Prosecution:** Too weak. It will depend on inconsistent human usage and will not reliably attribute failures.

**Defense:** It is cheap and may be enough for early experimentation.

**Collision:** Defense wins only as part of `loop-diagnose`. A protocol can start template-like while still specifying inputs and outputs.

**Verdict:** REFINE.

**Constructive output:** Use a template inside the protocol, not as the whole system.

### Candidate F: Direct Fundamental Patch

**Prosecution:** Skips diagnosis confidence, maintenance logging, and retain/revert. One correction chain may be misleading.

**Defense:** It could rapidly fix obvious failures.

**Collision:** Prosecution wins. Rapid improvement without evidence discipline is exactly the trap the self-maintenance ladder was designed to avoid.

**Verdict:** KILL.

**Seed extracted:** Create maintenance candidates and only patch after enough evidence or explicit human approval.

### Candidate G: Build Advanced Self-Maintenance First

**Prosecution:** The project does not yet know what should be maintained, what triggers are reliable, or which failures recur. Advanced self-maintenance would be architecture without data.

**Defense:** A unified self-maintenance system is the long-term goal.

**Collision:** Prosecution wins for the near term. The long-term goal remains, but data generation comes first.

**Verdict:** KILL.

**Seed extracted:** `loop-diagnose` becomes the evidence generator for later self-maintenance.

## Phase 3.5: Assembly Check

### Assembly Candidate: Correction-Chain Diagnosis Protocol

The best assembly:

1. Create `loop-diagnose` as a lightweight protocol.
2. Inputs: bad inquiry folder, user correction, improved inquiry folder(s).
3. Outputs: diagnosis folder with delta summary, correction signals, failure attributions, maintenance candidates, and data value.
4. Feed outputs into `devdocs/self_maintenance.md` once the Level 1 ledger exists.
5. Keep Reflection separate for single-run process review.
6. Promote `loop-diagnose` to a full discipline only after it proves useful across 5-10 cases.

**Prosecution:** Adds another artifact type before the existing Reflection system is mature.

**Defense:** The new artifact type is justified because it captures a currently lost evidence source: the correction chain. Existing Reflection cannot reliably infer this delta from one run.

**Collision:** Defense wins.

**Verdict:** SURVIVE.

## Phase 4: Coverage Map

### Covered

- Why the new operation is needed.
- How it differs from Reflection.
- What inputs it should read.
- What outputs it should produce.
- How it connects to Level 1 self-maintenance.
- Why advanced self-maintenance should wait.

### Deferred

- Exact file path and command implementation.
- Full discipline reference file.
- Automated invocation.
- Aggregation across many diagnosis folders.
- Promotion criteria beyond the 5-10 case threshold.

### Convergence

The answer is stable: build the comparative diagnostic protocol first.

## Signal

TERMINATE with ranked survivors:

1. **Correction-Chain Diagnosis Protocol**: master answer.
2. **Level 1 Ledger as paired storage**: required companion.
3. **Reflection remains separate**: refined.
4. **Full discipline later**: deferred promotion path.

## Convergence Telemetry

- **Dimension coverage:** Full for the user's question.
- **Adversarial strength:** STRONG. Reflection-extension and advanced-self-maintenance alternatives were directly tested.
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES. Correction-Chain Diagnosis Protocol.
- **Failure modes observed:** No rubber-stamping. No premature autonomy. Self-reference risk remains, mitigated by evidence-based attribution and retain/revert path.
- **Overall: PROCEED**
