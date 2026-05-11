# Decomposition: Navigation Observer Session Architecture

## User Input

`devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/_branch.md`

## 1. Coupling Topology

The whole being decomposed is the proposed architecture where advanced Navigation becomes a separate AI observer session that watches MVL inquiry artifacts and manages movement-space understanding.

### Elements

- Worker MVL/MVL+ session
- Inquiry artifact store
- Navigation Observer role/session
- Navigation discipline/method
- Navigation-focused MVL+ internal loop
- Navigation memory / graph state
- Selector
- Meta-loop runner
- Human operator
- Future UI / thinking-space visualization
- Evaluation evidence

### Coupling Map

| Element A | Element B | Coupling | Why |
|---|---|---:|---|
| Worker MVL session | Inquiry artifact store | Strong | Worker output is the observer's primary input. |
| Inquiry artifact store | Navigation Observer | Strong | Observer quality depends on artifact completeness and structure. |
| Navigation Observer | Navigation discipline | Strong | Discipline is the observer's core method. |
| Navigation Observer | Navigation-focused MVL+ | Moderate | Deep reasoning is an escalation path, not always required. |
| Navigation Observer | Navigation memory / graph | Strong | Cross-run usefulness depends on durable movement state. |
| Navigation Observer | Selector | Moderate | Observer recommends; selector commits. |
| Selector | Meta-loop runner | Strong | Runner executes committed moves. |
| Meta-loop runner | Worker MVL session | Strong | Runner starts or resumes worker inquiries. |
| Human operator | Selector | Strong in v1 | Human holds selection authority initially. |
| Navigation memory / graph | UI visualization | Moderate | UI consumes graph state after it exists. |
| Observer | UI visualization | Weak initially | UI is downstream instrumentation, not required for first observer protocol. |
| Observer | Evaluation evidence | Moderate | Evidence determines whether observer should gain more autonomy. |

### High-Coupling Clusters

1. **Local inquiry production cluster**
   - Worker MVL/MVL+ session
   - Inquiry artifacts

2. **Movement perception cluster**
   - Navigation Observer
   - Navigation discipline
   - Navigation-focused MVL+ escalation
   - Navigation memory / graph

3. **Commitment and execution cluster**
   - Selector
   - Human in v1
   - Meta-loop runner
   - Worker launch/resume

4. **Instrumentation and validation cluster**
   - Evaluation evidence
   - UI / graph visualization

## 2. Boundary Detection

### Boundary A: Worker vs Observer

**Cut point:** Between local inquiry solving and movement-space perception.

**Reason:** The worker and observer optimize for different attention modes. The worker solves the current question; the observer interprets what the completed artifact implies for possible next moves.

**Confidence:** High.

### Boundary B: Observer vs Selector

**Cut point:** Between recommended movement options and committed next move.

**Reason:** Selection requires value judgment and risk/cost tradeoff authority. Navigation can rank candidates, but should not silently commit them in v1.

**Confidence:** High.

### Boundary C: Observer vs Meta-loop Runner

**Cut point:** Between map/recommendation generation and execution/state traversal.

**Reason:** Execution requires scheduling, folder creation, branch tracking, stop logic, and state mutation. The observer does not need that authority to provide value.

**Confidence:** High.

### Boundary D: Observer Protocol vs Persistent Observer Session

**Cut point:** Between manually invoked observer reports and a long-lived AI session.

**Reason:** The protocol can be tested before building runtime complexity. Persistent session should be promoted only after repeated useful outputs.

**Confidence:** High.

### Boundary E: Graph/UI vs Observer Core

**Cut point:** Between producing movement maps and visualizing them.

**Reason:** UI can improve legibility later, but observer value must first exist in text/graph artifacts.

**Confidence:** Medium-high.

## 3. Bottom-Up Boundary Validation

### Atoms

- Completed inquiry folder
- Navigation read-set
- Navigation map
- Candidate next moves
- Excluded directions
- Confidence / uncertainty
- Selection status
- Outcome record
- Graph edge
- Human selection
- New MVL seed

### Validation

- Atoms related to completed inquiry folders naturally group under **artifact store**.
- Atoms related to maps, candidates, excluded directions, and uncertainty naturally group under **Navigation Observer**.
- Human selection and selection status naturally group under **Selector**, not observer.
- New MVL seed and traversal record naturally group under **Meta-loop runner**.
- Graph edges can be produced by observer but should be stored as durable memory, not only in observer context.

Bottom-up check agrees with the top-down boundaries. No major boundary cuts through high coupling, except the observer/graph boundary, which should be handled by a clear write interface.

## 4. Question Tree

### Q1. What is the Worker MVL session responsible for?

Verification:

- [ ] Defines worker as local inquiry solver.
- [ ] Specifies that worker outputs artifacts, not navigation authority.
- [ ] Clarifies worker does not need long-term thinking-space memory.

### Q2. What is the Navigation Observer responsible for?

Verification:

- [ ] Defines observer as artifact-native movement-space perception role.
- [ ] Specifies inputs it reads.
- [ ] Specifies outputs it writes.
- [ ] Separates recommendation from commitment.
- [ ] Defines when it may use navigation-focused MVL+ internally.

### Q3. What must the artifact interface contain?

Verification:

- [ ] Lists required read files.
- [ ] Includes read-set recording.
- [ ] Includes relationship/context metadata.
- [ ] Avoids raw transcript dependence.
- [ ] Supports missing-artifact warnings.

### Q4. What authority does the Selector have?

Verification:

- [ ] Commits one next move.
- [ ] Can override observer recommendation.
- [ ] Records why a move was selected.
- [ ] Is human in v1 and explicit component later.

### Q5. What does the Meta-loop runner do that the observer should not do yet?

Verification:

- [ ] Executes selected moves.
- [ ] Tracks branch status and stop/continue state.
- [ ] Starts/resumes MVL inquiries.
- [ ] Records outcomes.
- [ ] Does not hide selection inside execution.

### Q6. What minimum implementation tests the observer idea?

Verification:

- [ ] Defines a protocol-first observer report.
- [ ] Runs after completed MVL+ inquiries.
- [ ] Produces comparable artifacts across runs.
- [ ] Requires at least several dogfooding cases before persistent session promotion.

### Q7. What evidence would justify a live separate observer session?

Verification:

- [ ] Shows better next-move recommendations than current Navigation.
- [ ] Reduces repeated correction loops or wasted branches.
- [ ] Produces useful graph/state data.
- [ ] Maintains clarity about uncertainty and excluded paths.
- [ ] Avoids excessive overhead.

## 5. Interface Map

### Worker -> Artifact Store

- **Flow:** `_branch.md`, `_state.md`, discipline outputs, `finding.md`, `docarchive/`, relationships.
- **Direction:** One-way from worker to durable artifacts.
- **Risk:** Incomplete or inconsistent artifacts weaken observation.

### Artifact Store -> Navigation Observer

- **Flow:** Scoped read-set for current inquiry and related prior inquiries.
- **Direction:** One-way read.
- **Risk:** Observer hallucination if missing files are not surfaced.

### Navigation Observer -> Navigation Memory / Graph

- **Flow:** candidate moves, edges, dependencies, blocked questions, excluded directions, confidence, outcome placeholders.
- **Direction:** Observer writes durable navigation state.
- **Risk:** Graph pollution if uncertain recommendations are written as facts.

### Navigation Observer -> Selector

- **Flow:** ranked move candidates, rationale, confidence, read-set, risks, excluded options.
- **Direction:** One-way recommendation.
- **Risk:** Ranking may be treated as automatic commitment.

### Selector -> Meta-loop Runner

- **Flow:** selected move, selection rationale, target question or folder, constraints.
- **Direction:** One-way commitment.
- **Risk:** Selector override may lose observer's uncertainty unless recorded.

### Meta-loop Runner -> Worker

- **Flow:** MVL/MVL+ invocation, seed question, target folder, resume path.
- **Direction:** One-way execution.
- **Risk:** Runner may create branches faster than observer/selector can evaluate them.

### Meta-loop Runner -> Navigation Memory

- **Flow:** execution status, selected edge, outcome, stopped/continued state.
- **Direction:** Write-back.
- **Risk:** Outcome tracking can drift if not connected to the original recommendation.

### Navigation Memory -> UI

- **Flow:** nodes, edges, statuses, confidence, open questions, selected paths.
- **Direction:** Read-only visualization.
- **Risk:** UI can become decorative if graph data is not meaningful.

## 6. Dependency Order

### First

1. Patch or define N2 Navigation behavior: deep movement-space map construction.
2. Define the Navigation Observer artifact contract.
3. Define `navigation_observer.md` output structure.

### Then

4. Run protocol-first observer manually after completed MVL+ inquiries.
5. Record selection status and outcomes in a simple durable form.
6. Compare observer maps against current ad hoc Navigation.

### Later

7. Add graph-native state once observer reports produce repeatable move edges.
8. Add persistent observer session only after protocol-first outputs prove useful.
9. Add UI visualization once graph state is real enough to inspect.
10. Consider explicit selector automation only after evidence exists about recommendation quality.

### Parallelizable

- N2 Navigation spec improvements and observer report template can be designed together.
- UI sketches can be explored conceptually, but should not drive implementation yet.
- Evaluation criteria can be created while dogfooding observer reports.

## 7. Self-Evaluation

| Dimension | Result | Notes |
|---|---|---|
| Independence | Pass | Worker, observer, selector, runner, and UI have separable responsibilities. |
| Completeness | Pass | The decomposition covers perception, recommendation, selection, execution, state, and validation. |
| Reassembly | Pass | If each piece works and interfaces are honored, the original observer architecture is implementable. |
| Tractability | Pass | Each question can be handled in a focused protocol/spec pass. |
| Interface clarity | Pass with caution | Interfaces are explicit, but graph writes need careful confidence semantics. |
| Balance | Pass | No single piece owns all complexity; observer remains largest but bounded. |
| Confidence | High | Top-down and bottom-up boundaries agree. |

## Failure Mode Check

- **Premature decomposition:** Avoided. Sensemaking clarified the whole first.
- **Wrong boundaries:** Mostly avoided. The most dangerous boundary, observer vs selector, is explicit.
- **Hidden coupling:** Remaining risk. Observer recommendations and selector commitments must share IDs or traceable references.
- **Missing pieces:** Evaluation evidence was added as a piece to avoid treating the design as proven.
- **Over-decomposition:** Avoided. Pieces are role-level, not tiny implementation tasks.
- **Ignoring dependencies:** Avoided. Protocol-first comes before persistent session and UI.
- **Imbalanced decomposition:** Acceptable. Observer is larger because it is the proposed new role, but it is not unbounded.

## Decomposition Telemetry

- **Dominant boundary:** Observer vs selector.
- **Secondary boundary:** Observer protocol vs persistent observer runtime.
- **Primary hidden-coupling risk:** Recommendations losing traceability when selected or executed.
- **Reassembly confidence:** High.
- **Output: PROCEED**
