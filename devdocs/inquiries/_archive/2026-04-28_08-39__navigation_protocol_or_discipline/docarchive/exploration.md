# Exploration: Navigation Protocol Or Discipline

## User Input

`devdocs/inquiries/2026-04-28_08-39__navigation_protocol_or_discipline/_branch.md`

## 1. Mode and Entry Point

- **Mode:** Mixed artifact and possibility exploration.
- **Entry point:** Signal-first. The user is testing whether the same logic used for `loop_diagnose` should apply to Navigation.

## 2. Exploration Cycles

### Cycle 1 - Current Navigation Source

#### Scan

Scanned:

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`

Found:

- Navigation is explicitly defined as a **boundary discipline**.
- It operates between cognitive cycles, not inside the core MVL/MVL+ sequence.
- Its structural operation is **enumeration**: transform a completed cycle's output into a typed map of possible next directions.
- Its input is usually a completed SIC/MVL inquiry folder, but it can also run independently on project state.
- Its output is a Navigation Map, not a `finding.md` answer.
- The reference has a taxonomy discrepancy: some text says 15-type taxonomy, while the detailed reference lists 16 types, including DIAGNOSE.

#### Signals Detected

1. Navigation already has a distinct cognitive operation: enumeration of next-move space.
2. Navigation is not a protocol wrapper around MVL+ in the same way `loop_diagnose` is.
3. Navigation's output format and taxonomy are specialized enough to justify a separate skill/discipline.
4. There is a small documentation cleanup need around 15 vs 16 types.

#### Resolution Decision

Zoom in on contrast with protocol wrappers.

#### Frontier State

The source strongly supports "separate boundary discipline," not "MVL+ protocol wrapper."

#### Confidence Update

- Confirmed: Navigation is currently specified as a boundary discipline.
- Confirmed: Navigation has a distinct transform: completed cycle output -> possible next directions.
- Scanned: taxonomy count inconsistency.

### Cycle 2 - Prior Navigation Findings

#### Scan

Scanned:

- `devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/finding.md`
- `devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md`

Found:

- `navigation_mvl_integration` concluded Navigation should not be appended to MVL+ as a sixth core stage.
- It recommended a conditional post-CONCLUDE boundary hook, not a core-pipeline change.
- It separated five layers: atomic MVL/MVL+ loop, boundary trigger, Navigation map, selector, later meta-loop runner.
- `meta_loop_whirl_navigation` concluded Navigation is the meta-loop's "eyes," not its selector or will.
- The meta-loop uses MVL+ as probe, Navigation as perception, meta-state as memory, selection as valuation, and meaningful traversal as anti-spinning judgment.

#### Signals Detected

1. Prior findings already resolved "inside MVL+" by distinguishing core stage from boundary hook.
2. Navigation is valuable because it is not answer-producing; it sees movement options after an answer/finding exists.
3. Treating Navigation as an MVL+ protocol would blur perception with answer generation.

#### Resolution Decision

Probe the `loop_diagnose` comparison directly.

#### Frontier State

Prior findings reinforce source-level evidence.

#### Confidence Update

- Confirmed: Navigation should stay outside the core MVL/MVL+ pipeline.
- Confirmed: Navigation can be called by MVL+ as a post-CONCLUDE hook.
- Confirmed: meta-loop should consume Navigation maps but not collapse Navigation into the runner.

### Cycle 3 - Contrast With `loop_diagnose`

#### Scan

Scanned:

- `homegrown/protocols/loop_diagnose.md`
- `devdocs/inquiries/2026-04-28_08-08__loop_diagnose_protocol_integration/finding.md`

Found:

- LOOP_DIAGNOSE explicitly says it does not replace MVL+ and does not add a new cognitive discipline.
- Its job is to frame a correction-chain diagnostic MVL+ inquiry.
- It defines input fields, required reads, branch framing, output requirements, and guardrails.
- The reasoning engine remains MVL+.

#### Signals Detected

1. LOOP_DIAGNOSE has no independent cognitive operation; it uses MVL+ to think.
2. Navigation does have an independent operation: enumerate typed possible next directions from a completed cycle or project state.
3. LOOP_DIAGNOSE produces a normal MVL+ diagnostic finding. Navigation produces a specialized navigation map.

#### Resolution Decision

Map possible architectural choices for Navigation.

#### Frontier State

The main distinction is clear enough for sensemaking.

#### Confidence Update

- Confirmed: `loop_diagnose` is a protocol wrapper.
- Confirmed: Navigation is structurally different from that wrapper.

### Cycle 4 - Architectural Possibilities

#### Scan

Candidate roles:

1. Navigation as a separate discipline.
2. Navigation as a protocol wrapper around MVL+.
3. Navigation as both: a separate discipline with a protocol-style invocation contract.
4. Navigation as a post-CONCLUDE hook in MVL+.
5. Navigation as an internal phase of meta-loop.
6. Navigation deleted and replaced by MVL+ asking "what next?"

#### Signals Detected

- Separate discipline is source-consistent and preserves distinct operation.
- Protocol wrapper around MVL+ is attractive because it preserves the "MVL+ is primitive" idea, but it weakens Navigation's distinct output and taxonomy.
- Both is the most accurate implementation language: Navigation can remain a separate discipline and still have a protocol-style contract for when/how to invoke it.
- Post-CONCLUDE hook is integration, not identity.
- Meta-loop uses Navigation; it does not absorb Navigation.
- Replacing Navigation with MVL+ "what next?" would make next-move mapping inconsistent.

#### Resolution Decision

Converge on "separate boundary discipline, invoked by protocol/hook."

### Jump Scan - MVL Atomicity

#### Scan

Scanned:

- User-pasted MVL skill body.
- Installed MVL+ skill.
- `homegrown/meta-loop/SKILL.md`.

Found:

- MVL/MVL+ are framed as atomic loops that answer a bounded question.
- Meta-loop explicitly says Navigation sees but does not choose.
- Meta-loop treats MVL+ inquiries as atomic probes and Navigation maps as perception artifacts.

#### Signal Detected

The atomic-loop principle does not require every cognitive operation to be MVL+. It means MVL/MVL+ should remain bounded answer-producing loops. Boundary operations can exist around them.

## 3. Convergence Assessment

- **Frontier stability:** Stable. Sources converge on Navigation as separate boundary discipline.
- **Declining discovery rate:** Declining. Later scans mostly clarified integration language.
- **Bounded gaps:** Bounded. Remaining gaps are implementation details: whether to rename taxonomy count and whether to write a separate invocation protocol later.

## 4. Structural Map

### Territory Overview

Major regions:

1. **Navigation's current identity**
   - Boundary discipline.
   - Operation: enumeration.
   - Output: Navigation Map.

2. **MVL/MVL+ identity**
   - Atomic answer-producing loop.
   - Output: finding.

3. **Protocol wrapper precedent**
   - `loop_diagnose` frames MVL+, but does not think independently.

4. **Integration layer**
   - Manual invocation, post-CONCLUDE hook, meta-loop consumption.

5. **Future orchestration**
   - Meta-loop uses Navigation as perception and selection as a separate step.

### Inventory

| Candidate | Status | Notes |
|---|---|---|
| Separate boundary discipline | Strong | Matches source and prior findings. |
| MVL+ protocol wrapper only | Weak | Loses Navigation's distinct transform/output. |
| Boundary discipline with protocol-style invocation | Strongest | Preserves identity and gives integration clarity. |
| Required sixth MVL+ stage | Rejected by prior findings | Breaks atomicity. |
| Meta-loop internal phase | Future integration role | Navigation remains component, not absorbed identity. |
| Replace with MVL+ "what next?" | Weak | Makes maps inconsistent and buries taxonomy. |

### Signal Log

| Signal | Source | Confidence | Meaning |
|---|---|---:|---|
| Navigation is called a boundary discipline | navigation reference | High | Separate discipline identity is intentional. |
| Navigation has one operation: enumeration | navigation reference | High | Distinct from MVL+ answer generation. |
| Navigation not in core MVL+ pipeline | prior finding | High | Keep outside E/S/D/I/C. |
| Meta-loop uses Navigation as eyes | meta-loop finding/spec | High | Component of larger runner, not selector. |
| `loop_diagnose` is only protocol wrapper | protocol file | High | Not a good analogy for Navigation identity. |
| 15 vs 16 taxonomy inconsistency | navigation skill/reference | Medium-high | Documentation cleanup needed. |

### Confidence Map

- **Confirmed:** Navigation should not be a required MVL+ stage.
- **Confirmed:** Navigation has a distinct cognitive operation and output.
- **Confirmed:** Navigation can be invoked by MVL+/meta-loop through a hook/protocol.
- **Inferred:** It should remain a separate boundary discipline with a protocol-like invocation contract.
- **Unknown:** Whether a separate `homegrown/protocols/navigation_invocation.md` would add value now.

## 5. Gaps and Recommendations for Sensemaking

- Clarify the difference between "primitive" and "discipline." MVL+ can be the atomic inquiry loop without every useful boundary operation being reduced to MVL+.
- Decide that Navigation is not analogous to `loop_diagnose`.
- Preserve Navigation as a separate boundary discipline.
- Optionally add a protocol/hook for when to invoke it, but do not rewrite it as an MVL+ use case.
- Clean up taxonomy count mismatch: source says 15 in the skill description but reference defines 16 types.
