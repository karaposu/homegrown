# Decomposition: Resume Protocol Usecase

## User Input

`devdocs/inquiries/2026-04-28_00-25__resume_protocol_usecase/_branch.md`

## 1. Coupling Map

### Major Elements

- **E1 - Current inline MVL/MVL+ resume**
  - Reads `_state.md`, `_branch.md`, flow type, and output file existence.
  - Continues from the first incomplete discipline.
  - Strongly coupled to MVL/MVL+ runner behavior.

- **E2 - Standalone `homegrown/protocols/resume.md`**
  - Reads completed discipline outputs and looks for PROCEED/FLAG/RE-RUN.
  - Routes the runner based on verdicts.
  - Currently not invoked by the runners.

- **E3 - Discipline telemetry contract**
  - Standardized self-assessment verdict lines across E/S/D/I/C.
  - Required for E2 to do anything meaningfully different from E1.

- **E4 - No-wait MVL/MVL+ pipeline invariant**
  - MVL/MVL+ should run disciplines sequentially without stopping between them unless interrupted.
  - Conflicts with E2's "wait for user decision on FLAG/RE-RUN" behavior.

- **E5 - Meta-loop resume**
  - Uses `_meta_state.md` and `## Next Action`.
  - Related to Resume as persistence, but not the same mechanism as inquiry-level verdict routing.

- **E6 - Protocol-folder hygiene**
  - Active-looking protocol files should either be loaded, explicitly marked future/dormant, or archived/deleted.
  - Prevents two-source-of-truth drift.

### Coupling Strengths

| Pair | Coupling | Reason |
|---|---:|---|
| E1 <-> E4 | Strong | Inline resume must preserve MVL/MVL+ no-wait runner behavior. |
| E2 <-> E3 | Strong | Telemetry-aware resume cannot route without standardized verdicts. |
| E2 <-> E4 | Strong/conflicting | E2 may pause on FLAG/RE-RUN; MVL/MVL+ expects continuous execution. |
| E2 <-> E6 | Strong | An unused active-looking protocol creates protocol hygiene risk. |
| E1 <-> E2 | Moderate | They share the "resume" name and inquiry-folder input, but solve different trust levels. |
| E5 <-> E1 | Moderate | Meta-loop may call MVL+ resume for incomplete inquiry frontiers. |
| E5 <-> E2 | Weak-to-moderate | Future autonomy may need telemetry-aware resume, but v1 meta-loop currently uses `_meta_state.md`. |
| E3 <-> E4 | Moderate | Verdicts can exist without pausing, but routing policy must decide how verdicts affect auto-chain. |

### Natural Boundaries

1. **Basic continuation boundary**
   - Contains E1 and E4.
   - This is the current runtime capability.

2. **Telemetry-gated continuation boundary**
   - Contains E2 and E3.
   - This is the standalone Resume protocol's unique future capability.

3. **Traversal resume boundary**
   - Contains E5.
   - This belongs to meta-loop, not directly to inquiry-level Resume.

4. **Artifact governance boundary**
   - Contains E6.
   - This decides whether `resume.md` should stay active, be marked dormant, or be archived/deleted.

## 2. Boundary Validation

### Top-Down Boundary Check

The main split between basic continuation and telemetry-aware continuation is valid because a user can need one without the other. Basic continuation asks: "What file is missing?" Telemetry-aware continuation asks: "Are existing files acceptable to build on?"

### Bottom-Up Atom Check

Irreducible atoms:

- folder-path input;
- `_state.md` progress;
- output file existence;
- standardized verdict line;
- FLAG/RE-RUN routing policy;
- no-wait rule;
- `_meta_state.md` next action;
- protocol file disposition.

These atoms group naturally into the four boundaries above. The only high-tension atom is FLAG/RE-RUN routing policy because it touches both telemetry-aware Resume and MVL/MVL+ no-wait behavior. That confirms it should be treated as an integration dependency, not hidden inside either piece.

## 3. Question Tree

### Q1 - What resume capability does Homegrown already have?

Verification criteria:

- [x] MVL/MVL+ inline resume behavior identified.
- [x] Current use case of basic resume stated.
- [x] Limits of file-existence resume stated.

Answer:
Homegrown already has basic inquiry continuation in MVL/MVL+. It is enough for current manual recovery from interruption or context loss, but it does not validate output quality.

### Q2 - What unique logic does standalone Resume add?

Verification criteria:

- [x] Unique behavior compared to inline resume identified.
- [x] Dependency on verdict telemetry identified.
- [x] Difference between routing and judging stated.

Answer:
Standalone Resume adds telemetry-aware routing. It does not judge outputs itself; it reads each discipline's own verdict and routes the runner. This is unique, but only works when disciplines emit standardized verdicts.

### Q3 - When would telemetry-aware Resume be useful?

Verification criteria:

- [x] Practical triggering situations listed.
- [x] Difference from normal manual resume explained.
- [x] Future autonomy relevance stated without overclaiming current readiness.

Answer:
It is useful when resuming partial work where output existence is not enough evidence: long-running inquiries, agent handoffs, user interruptions after weak outputs, multi-session runs, meta-loop frontiers, or future autonomous runners.

### Q4 - Does MVL/MVL+ already contain an alternative?

Verification criteria:

- [x] Inline alternative confirmed.
- [x] Scope of alternative constrained.
- [x] Missing telemetry capability identified.

Answer:
Yes. MVL/MVL+ contain a basic inline alternative. It is not a full substitute for telemetry-aware Resume, but it is a substitute for current cross-session continuation.

### Q5 - What would happen if standalone Resume were used now?

Verification criteria:

- [x] Effects under current missing-telemetry conditions described.
- [x] No-wait pipeline conflict described.
- [x] Two-source-of-truth risk described.

Answer:
If wired now, it would mostly degrade to backward-compatible PROCEED for disciplines with no standardized verdicts, while adding an extra source of truth. Where verdicts do exist, it could pause the runner on FLAG/RE-RUN, which conflicts with MVL/MVL+'s current no-wait design unless a routing policy is explicitly chosen.

### Q6 - What should be done with `homegrown/protocols/resume.md` now?

Verification criteria:

- [x] Immediate action recommendation bounded.
- [x] Future path preserved.
- [x] Orphan-state risk handled.

Answer:
Do not wire it now. The honest options are either archive/delete it as a premature extraction, or mark it explicitly dormant/future with prerequisites. Leaving it as an active-looking orphan is the weak option.

## 4. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| MVL/MVL+ inline resume | User workflow | Continuation from interruption | One-way runtime behavior |
| `_state.md` | MVL/MVL+ inline resume | Flow type, progress, next discipline | One-way state input |
| Output files | MVL/MVL+ inline resume | Existence/missingness | One-way state input |
| Discipline telemetry | Standalone Resume | PROCEED/FLAG/RE-RUN verdict | One-way evidence input |
| Standalone Resume | MVL/MVL+ runner | Route: next discipline, wait, rerun, complete | One-way control signal |
| No-wait invariant | Standalone Resume | Constraint on routing policy | One-way constraint |
| Standalone Resume | `_state.md` | Updated progress/history/next discipline | One-way state mutation |
| Meta-loop | MVL/MVL+ | Incomplete inquiry frontier to resume | One-way invocation |
| `_meta_state.md` | Meta-loop resume | Next traversal action | One-way state input |
| Protocol hygiene | `resume.md` disposition | Active/dormant/archive/delete decision | One-way governance |

## 5. Dependency Order

### Current Answer Dependencies

1. Establish what MVL/MVL+ already do.
2. Establish what `resume.md` uniquely does.
3. Compare the two at the correct layer.
4. Decide current usefulness.
5. Decide file disposition.

### Implementation Dependencies for Future Real Resume

1. Standardize verdict telemetry across Exploration, Sensemaking, Decomposition, Innovation, and Critique.
2. Define routing policy for FLAG/RE-RUN under human-guided MVL/MVL+.
3. Rewrite `resume.md` as an executable CONCLUDE-style protocol if needed.
4. Modify MVL/MVL+ to load Resume instead of duplicating conflicting logic.
5. Add a dry-run or regression check over sample inquiry folders.
6. Only then consider use inside meta-loop or autonomous runners.

### Parallel Work

- Meta-loop resume via `_meta_state.md` can evolve separately from inquiry-level telemetry-aware Resume.
- Protocol hygiene can be handled now without implementing telemetry routing.

## 6. Self-Evaluation

| Dimension | Result | Rationale |
|---|---|---|
| Independence | PASS | Basic continuation, telemetry-aware resume, meta-loop resume, and file disposition can each be reasoned about separately once interfaces are explicit. |
| Completeness | PASS | Covers current use, unique future logic, MVL alternative, practical effect, usefulness conditions, and disposition. |
| Reassembly | PASS | Answering Q1-Q6 reconstructs the original question and goal. |
| Tractability | PASS | Each question can be answered in the final finding without another full sub-inquiry. |
| Interface clarity | PASS | Dependencies between verdict telemetry, routing, no-wait invariant, and state updates are explicit. |
| Balance | PASS | The decomposition avoids making file disposition the whole question; it keeps runtime behavior and future use visible. |
| Confidence | PASS | Boundaries match both source structure and user-facing workflow. |

## 7. Decomposition Summary

The problem should be answered through six linked questions:

1. What does inline MVL/MVL+ resume already provide?
2. What unique logic does standalone Resume add?
3. When would that unique logic matter?
4. Is inline resume an alternative or a partial substitute?
5. What would happen if standalone Resume were used now?
6. What should be done with the file now?

The strongest boundary is between **basic continuation** and **telemetry-gated continuation**. Current Homegrown needs the first and already has it. Future autonomous or quality-aware Homegrown may need the second, but only after discipline verdict telemetry exists.
