# Exploration: Navigation Depth And Answer Production

## User Input

`devdocs/inquiries/2026-04-28_09-19__navigation_depth_and_answer_production/_branch.md`

## 1. Mode and Entry Point

**Mode:** Mixed artifact and possibility exploration.

- Artifact territory: existing Navigation docs, prior Navigation findings, MVL+ structure, and the `loop_diagnose` precedent.
- Possibility territory: possible architectural framings for deep Navigation.

**Entry point:** Signal-first.

The user's correction is a strong signal: the prior finding used "answer-producing" as a distinguishing trait of MVL+, but Navigation also answers a question, namely "what can or should happen next?"

## 2. Exploration Cycles

### Cycle 1 - Scan Existing Artifacts

**Scanned:**

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`
- `devdocs/inquiries/2026-04-28_08-39__navigation_protocol_or_discipline/finding.md`
- Prior Navigation integration findings referenced by that inquiry
- The current MVL+ skill structure

**Found:**

- Navigation is explicitly defined as a "Thinking Discipline" and "BOUNDARY discipline."
- Its declared core operation is enumeration of possible next directions.
- Its output is a Navigation Map, not a `finding.md`.
- The Navigation Map includes direction, WHY, guidelines, confidence, excluded directions, and telemetry.
- The spec already says Navigation reads cycle output, telemetry, scope, frontier questions, and optionally reflection observations.
- The spec already includes process-directed types such as RE-RUN DEEPER, REFRAME, DIFFERENT APPROACH, and DIAGNOSE.
- The prior finding says "MVL+ is answer-producing" and contrasts that with Navigation as movement-mapping.

**Signals detected:**

- The existing Navigation source is deeper than a simple option list.
- The prior finding's "answer-producing" distinction is inaccurate.
- Navigation's current implementation may still be too shallow if it only assigns taxonomy types mechanically.
- There is a distinction between Navigation's **role** and Navigation's **internal reasoning method**.

**Resolution decision:** Zoom in on the faulty distinction.

**Probe:**

The question "is it answer-producing?" does not separate MVL+ from Navigation. Both can answer questions.

- MVL+ answers inquiry questions and compiles a finding.
- Navigation answers movement questions and compiles a map.

The real distinction is not whether an operation answers. The real distinction is:

- what kind of question it answers;
- what artifact it produces;
- what authority it has after producing that artifact;
- whether it selects, launches, or only exposes possible next moves.

**Frontier state:** Advancing. The core flaw is located, but the architecture alternatives need exploration.

**Confidence update:** Confirmed that the prior distinction needs correction.

### Cycle 2 - Scan Architectural Possibilities

**Scanned candidate framings:**

1. Navigation as just an MVL+ protocol.
2. Navigation as a separate shallow discipline.
3. Navigation as a separate deep discipline.
4. Navigation as a discipline implemented internally by an MVL+-like micro-loop.
5. Navigation as a meta-loop phase that runs multiple MVL+ inquiries.
6. Navigation as selector.

**Found:**

- Candidate 1 preserves MVL+ as universal reasoning engine, but risks losing Navigation's map-specific output.
- Candidate 2 is too weak and aligns with the user's objection: Navigation cannot be a lightweight list of options.
- Candidate 3 preserves the discipline identity and admits depth.
- Candidate 4 may be the most precise implementation idea: Navigation has its own output contract but can internally use E/S/D/I/C-like checks.
- Candidate 5 is too large for Navigation itself. Meta-loop can use Navigation, but Navigation is not the entire meta-loop.
- Candidate 6 confuses seeing possible moves with choosing one.

**Signals detected:**

- "Discipline" does not have to mean "single simple operation."
- "Protocol wrapper" does not have to mean "shallow."
- MVL+ can be a primitive reasoning method without every skill becoming only an MVL+ command.
- The Navigation discipline may need an explicit internal quality cycle.

**Resolution decision:** Zoom in on the strongest hybrid: separate Navigation discipline with internal E/S/D/I/C-shaped rigor.

**Probe:**

Deep Navigation could have phases that resemble MVL+ without being MVL+:

- Explore the possible next-move space.
- Sensemake the current position, blockers, and goal pressure.
- Decompose next-move classes and dependencies.
- Innovate non-obvious directions.
- Critique the map for missing options, shallow guidelines, action bias, and hidden selection.

This does not necessarily mean Navigation should invoke the full MVL+ runner. It means Navigation's own spec should require these operations before emitting a Navigation Map.

**Frontier state:** Stabilizing. The strongest framing is emerging.

**Confidence update:** High confidence that "separate discipline" and "deep reasoning" are compatible.

### Cycle 3 - Probe Output Contract and Authority

**Scanned:**

- How MVL+ closes: `finding.md`.
- How Navigation closes: `navigation.md` map.
- How meta-loop would use Navigation.

**Found:**

Navigation can be answer-producing in a precise sense. It answers:

- What next moves are reachable?
- Which moves are blocked?
- Which moves are high, medium, or low confidence?
- Which moves should be excluded and why?
- What guidelines would make each move stronger?

But Navigation should not answer:

- Which single move must be taken?
- Whether to launch the next MVL+ automatically.
- Whether the project goal has globally succeeded.

Those belong to selector, runner, or human authority.

**Signals detected:**

- The user's objection does not force Navigation to become MVL+.
- It forces the prior finding to stop describing Navigation as non-answer-producing.
- It also forces the Navigation spec to protect against shallow enumeration.

**Resolution decision:** Zoom out for a jump scan.

**Frontier state:** Stable around the hybrid framing.

**Confidence update:** Confirmed distinction: output and authority are stronger than answer/non-answer.

### Jump Scan - Opposite Direction

**Scanned a contrary possibility:** Maybe every serious discipline should be implemented as MVL+ because the MVL skill says "This is the only primitive. Every cognitive task is a SIC loop applied to a different question."

**Found:**

This principle can be interpreted in two ways:

1. Strong interpretation: every discipline is merely a prompt/protocol around MVL/MVL+.
2. Weak interpretation: every serious cognitive operation should contain sensemaking, innovation, and critique pressure, but can still have a domain-specific artifact and role.

The strong interpretation collapses discipline boundaries too aggressively. If every discipline is just MVL+, Navigation, Reflection, Exploration, and Critique lose their specific artifact contracts.

The weak interpretation fits the project better. It says Navigation should not be shallow; it should be loop-shaped or critique-bearing internally. But it remains Navigation because it produces a Navigation Map and obeys the Navigation contract.

**Frontier result:** No uncharted alternative displaced the hybrid model.

## 3. Convergence Assessment

- **Frontier stability:** Stable. The major alternatives are visible.
- **Declining discovery rate:** Yes. Later scans clarified distinctions rather than adding new viable architectures.
- **Bounded gaps:** Yes. Remaining gaps concern implementation details, not the main answer.

Exploration is complete for this inquiry.

## 4. Structural Map

### Territory Overview

The territory has four main regions:

1. **Prior finding flaw:** "Answer-producing" was used incorrectly as a separator between MVL+ and Navigation.
2. **Navigation source reality:** Navigation is already framed as a boundary discipline with a typed map, confidence, guidelines, excluded directions, and telemetry.
3. **Depth requirement:** Navigation must reason about blockers, hidden options, dependencies, and risks; shallow enumeration is failure.
4. **Architecture choice:** The strongest model is separate Navigation discipline with an internal loop-shaped rigor, invoked at boundaries.

### Inventory

| Region | What exists | Confidence |
|---|---|---|
| Prior finding | Correctly kept Navigation out of MVL+ core; incorrectly implied Navigation is not answer-producing | Confirmed |
| Navigation docs | Define Navigation as boundary discipline and map producer | Confirmed |
| Depth issue | User correction exposes need for deeper internal reasoning | Confirmed |
| Protocol wrapper option | Viable only as invocation support, not replacement | Scanned |
| Internal loop-shaped Navigation | Strong candidate: Navigation can use E/S/D/I/C-like operations but output a map | Confirmed |
| Selector authority | Should remain separate from Navigation | Confirmed |

### Signal Log

- **Strong signal:** Navigation answers "what next?" The prior contrast must be corrected.
- **Strong signal:** Navigation should not be lightweight. Its failure modes already warn against shallow enumeration.
- **Strong signal:** Output artifact distinguishes Navigation from MVL+ more cleanly than answer production.
- **Medium signal:** Navigation's spec should explicitly include exploration, sensemaking, decomposition, innovation, and critique pressure.
- **Medium signal:** A future Navigation invocation protocol may help, but only after the discipline semantics are clarified.

### Confidence Map

- **Confirmed:** Navigation is answer-producing in the domain of next-move mapping.
- **Confirmed:** Separate discipline status remains viable.
- **Confirmed:** "Answer-producing vs map-producing" is a bad distinction.
- **Scanned:** Exact internal phase names for deeper Navigation.
- **Inferred:** The Navigation spec should be edited later to include stronger internal rigor.
- **Unknown:** Whether Navigation should literally call MVL+ as a subroutine in rare complex cases.

### Frontier State

The main frontier is no longer "discipline or protocol." The frontier is:

```text
How should the Navigation discipline be upgraded so it has MVL+ level seriousness
without losing its Navigation Map output contract?
```

### Gaps and Recommendations

- Sensemaking should refine the conceptual distinction from "answer-producing" to "question type, artifact type, and authority boundary."
- Decomposition should separate Navigation's role, internal reasoning process, output contract, and invocation mechanism.
- Innovation should generate upgrade options for making Navigation deep without collapsing it into MVL+.
- Critique should test whether the hybrid model is coherent or only a compromise.

## Exploration Telemetry

- **Mode:** Mixed artifact and possibility exploration.
- **Entry point:** Signal-first.
- **Cycles run:** 3 plus jump scan.
- **Convergence:** COMPLETE.
- **Primary failure avoided:** Surface-only scanning. The analysis did not stop at "Navigation is a map"; it probed what kind of reasoning a serious map needs.
- **Output: PROCEED**
