# Decomposition: Navigation Depth And Answer Production

## User Input

`devdocs/inquiries/2026-04-28_09-19__navigation_depth_and_answer_production/_branch.md`

## 1. Coupling Topology

The problem is one complex whole with five strongly coupled clusters:

1. **Question-domain cluster**
   - What question does each component answer?
   - MVL+ answers inquiry questions.
   - Navigation answers movement-space questions.
   - Selector answers commitment questions.

2. **Artifact-contract cluster**
   - MVL+ outputs `finding.md`.
   - Navigation outputs a Navigation Map.
   - Selector outputs a chosen next move.
   - Meta-loop outputs traversal state and sequence.

3. **Internal-rigor cluster**
   - Navigation needs exploration, sensemaking, decomposition, innovation, and critique pressure.
   - Depth affects output quality.
   - Depth does not automatically change the artifact contract.

4. **Authority-boundary cluster**
   - Navigation can evaluate move confidence.
   - Navigation should not hide selection.
   - Selection requires value criteria and outcome memory.

5. **Invocation/integration cluster**
   - Navigation can be called manually.
   - MVL+ can later recommend or invoke it after CONCLUDE.
   - Meta-loop can consume it as perception.

### Coupling Gradients

- Strong coupling: question domain and artifact contract. Changing one changes the meaning of the other.
- Strong coupling: internal rigor and Navigation quality. Shallow internals produce shallow maps.
- Moderate coupling: invocation and artifact storage. How Navigation is called affects where outputs live, but not what Navigation is.
- Weak coupling: whether Navigation eventually uses an invocation protocol. This can change later without changing the conceptual decision.
- Weak coupling: exact phase names inside Navigation. The required depth matters more than whether phases use MVL+ labels literally.

## 2. Boundaries

### Boundary A - Role vs Internal Method

Navigation's role is to answer movement-space questions by producing a map.

Navigation's internal method is how it earns that map. It can use exploration-like, sensemaking-like, decomposition-like, innovation-like, and critique-like operations.

These should be separated because a deep internal method does not force a different role.

### Boundary B - Map vs Decision

Navigation can produce evaluated possibilities.

Selection chooses one possibility to pursue.

These should be separated because choosing requires value criteria that Navigation does not yet own.

### Boundary C - Discipline vs Invocation Protocol

Navigation is the discipline.

An invocation protocol would be a calling convention for when and how to run it.

These should be separated because invocation mechanics should not replace discipline semantics.

### Boundary D - Navigation vs Meta-loop

Navigation maps local next-move space.

Meta-loop controls multi-run traversal through inquiry space.

These should be separated because the meta-loop needs memory, stop conditions, branch tracking, and selection. Navigation does not have those responsibilities.

## 3. Bottom-Up Boundary Validation

### Atomic Elements

- "What moves exist?"
- "Why does each move matter?"
- "What blocks or gates each move?"
- "How should each move be pursued?"
- "What confidence should each move receive?"
- "Which moves are structurally inapplicable?"
- "Which move should be chosen?"
- "Should a new MVL+ inquiry launch now?"

### Validation

- The first six atoms belong inside Navigation.
- "Which move should be chosen?" belongs to selector/human authority.
- "Should a new MVL+ inquiry launch now?" belongs to runner/meta-loop authority.

Top-down boundaries and bottom-up atoms agree. Confidence is high.

## 4. Question Tree

### Q1 - What kind of answer does Navigation produce?

**Verification criteria:**

- [ ] Distinguishes inquiry answers from movement-space answers.
- [ ] Admits that Navigation is answer-producing.
- [ ] Explains why Navigation still differs from MVL+.

### Q2 - What internal reasoning must serious Navigation perform?

**Verification criteria:**

- [ ] Names the depth requirement.
- [ ] Includes blockers, dependencies, non-obvious options, and risks.
- [ ] Explains how MVL-like pressure can exist inside Navigation.

### Q3 - What artifact should Navigation produce?

**Verification criteria:**

- [ ] Preserves the Navigation Map.
- [ ] Explains why `finding.md` is the wrong default output for Navigation.
- [ ] Keeps guidelines, WHYs, confidence, excluded directions, and telemetry.

### Q4 - What authority should Navigation have?

**Verification criteria:**

- [ ] Allows confidence and reasoning.
- [ ] Rejects hidden selection.
- [ ] Separates human/selector choice from map generation.

### Q5 - How should Navigation be integrated with MVL+ and meta-loop?

**Verification criteria:**

- [ ] Keeps Navigation out of the required MVL+ core.
- [ ] Allows boundary invocation.
- [ ] Allows future meta-loop consumption.
- [ ] Does not require a full runner now.

### Q6 - What should be changed in the prior finding or Navigation spec?

**Verification criteria:**

- [ ] Corrects the answer-producing language.
- [ ] Recommends strengthening Navigation's internal process.
- [ ] Avoids premature implementation overreach.

## 5. Interface Map

| Source | Target | Flow | Direction |
|---|---|---|---|
| MVL+ finding | Navigation | Completed inquiry output, critique verdicts, open questions, telemetry | One-way |
| Navigation | Selector/human | Navigation Map with possible moves, confidence, blockers, guidelines | One-way |
| Selector/human | MVL+ or meta-loop | Chosen next move or stop decision | One-way |
| Meta-loop state | Navigation | Current path history, branch state, unresolved goals | One-way |
| Navigation | Meta-loop state | Map of reachable next directions | One-way |
| Reflection or loop diagnosis | Navigation | Process-quality observations, known failure modes | One-way |

### Hidden Coupling Risks

- If Navigation starts selecting, it couples to value criteria that are not explicit.
- If Navigation becomes an MVL+ protocol, it couples to `finding.md` and loses the map contract.
- If Navigation stays shallow, meta-loop quality becomes coupled to weak maps.
- If Navigation's internal phases become too rigid, it may duplicate MVL+ rather than specialize movement-space analysis.

## 6. Dependency Order

1. Correct the concept: Navigation is answer-producing in the movement-space domain.
2. Preserve the role boundary: Navigation maps; selector chooses.
3. Preserve the artifact boundary: Navigation outputs a map, not a normal finding.
4. Strengthen Navigation's internal process requirements.
5. Dogfood Navigation manually on real completed inquiries.
6. Only then add invocation hooks or meta-loop consumption.

Parallel after step 4:

- Clean taxonomy mismatch.
- Draft an invocation protocol if repeated use shows it is needed.
- Record human selections from Navigation Maps for future selector design.

## 7. Self-Evaluation

### Independence - PASS

Each question can be answered independently:

- Q1 handles conceptual identity.
- Q2 handles internal method.
- Q3 handles output.
- Q4 handles authority.
- Q5 handles integration.
- Q6 handles migration.

### Completeness - PASS

The decomposition covers the whole user objection: answer production, depth, MVL+ relationship, discipline status, and practical implications.

### Reassembly - PASS

If Q1 through Q6 are answered, the original question is answered: Navigation can be serious and answer-producing while remaining a separate boundary discipline with stronger internal rigor.

### Tractability - PASS

Each piece is small enough to reason about in one pass.

### Interface Clarity - PASS

Interfaces are explicit: findings flow into Navigation, maps flow into selectors or humans, choices flow into runners.

### Balance - PASS

The most complex pieces are Q2 and Q4, but no single piece carries the whole inquiry.

### Confidence - HIGH

Top-down clusters and bottom-up atoms agree.

## Decomposition Telemetry

- **Primary boundary:** role versus internal method.
- **Most important hidden coupling risk:** letting Navigation silently inherit selector authority.
- **Most important missing-piece risk avoided:** treating depth as an implementation detail rather than an architectural requirement.
- **Output: PROCEED**
