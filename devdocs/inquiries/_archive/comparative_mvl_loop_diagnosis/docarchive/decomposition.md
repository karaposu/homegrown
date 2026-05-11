# Decomposition: Comparative MVL Loop Diagnosis

## 1. Coupling Map

### Major Clusters

1. **Input model**
   - Original inquiry folder.
   - Correction text or artifact.
   - Improved inquiry folder or chain.
   - Optional related file/spec changes.

2. **Comparison engine**
   - Finding-to-finding delta.
   - Discipline-output delta where archived outputs exist.
   - User-feedback alignment.
   - Missing/changed assumptions.

3. **Failure attribution**
   - Sensemaking, Exploration, Decomposition, Innovation, Critique, CONCLUDE, framing, orchestration, or context-elicitation.
   - Confidence and evidence for each attribution.

4. **Output artifact**
   - Diagnosis folder or file.
   - Delta summary.
   - Attribution entries.
   - Maintenance candidates.
   - Proposed memory cells.

5. **Integration**
   - Feeds Reflection or self-maintenance ledger.
   - Creates Level 1 self-maintenance data.
   - Later supports Level 2 recommendations.

### Natural Boundaries

- **Boundary A:** Compare content deltas vs attribute process failure.
- **Boundary B:** Diagnose failure vs change system fundamentals.
- **Boundary C:** Single-run Reflection vs cross-run Comparative Diagnosis.
- **Boundary D:** Human-supplied new information vs system-missed information.

### Bottom-Up Validation

The user's workflow naturally creates the atoms:

- bad finding;
- user comments;
- better finding;
- potentially discipline outputs;
- desire to know what failed.

These atoms group cleanly into input, comparison, attribution, and maintenance-candidate outputs.

## 2. Question Tree

### Q1: What should the new operation be called and scoped as?

Verification criteria:

- [ ] Gives a clear name.
- [ ] Defines the operation in one sentence.
- [ ] Distinguishes it from Reflection.
- [ ] Places it in the self-maintenance ladder.

### Q2: What inputs does it require?

Verification criteria:

- [ ] Defines minimum inputs.
- [ ] Defines optional inputs.
- [ ] Handles two-run and multi-run chains.
- [ ] Handles missing archived discipline outputs.

### Q3: What process should it execute?

Verification criteria:

- [ ] Compares findings.
- [ ] Compares discipline outputs when available.
- [ ] Extracts user correction claims.
- [ ] Maps changes to failure categories.
- [ ] Separates new context from system failure.

### Q4: What output should it produce?

Verification criteria:

- [ ] Defines output folder/file.
- [ ] Defines delta summary.
- [ ] Defines failure attribution schema.
- [ ] Defines maintenance candidate schema.
- [ ] Defines confidence/evidence requirements.

### Q5: How does it feed self-maintenance?

Verification criteria:

- [ ] Connects to `devdocs/self_maintenance.md` or equivalent.
- [ ] Explains when a maintenance entry should be created.
- [ ] Explains what stays as observation only.
- [ ] Prevents automatic spec edits from one diagnosis.

### Q6: Should it replace Reflection?

Verification criteria:

- [ ] Evaluates replacement vs extension vs separate protocol.
- [ ] Gives a near-term decision.
- [ ] Defines future re-evaluation trigger.

## 3. Interface Map

### Q1 -> Q2

- **Flow:** Operation scope determines input contract.
- **Direction:** One-way.
- **Interface:** If the operation is comparative, it must accept multiple inquiry folders.

### Q2 -> Q3

- **Flow:** Available inputs constrain the diagnosis process.
- **Direction:** One-way.
- **Interface:** If discipline outputs are missing, the process can only attribute from findings and feedback at lower confidence.

### Q3 -> Q4

- **Flow:** Process determines output sections.
- **Direction:** One-way.
- **Interface:** Every attribution must cite evidence from the comparison.

### Q4 -> Q5

- **Flow:** Maintenance candidates become self-maintenance entries.
- **Direction:** One-way.
- **Interface:** A diagnosis output may propose a maintenance entry; it does not automatically apply the change.

### Q6 -> Q5

- **Flow:** Reflection relationship affects integration.
- **Direction:** One-way.
- **Interface:** If Reflection remains separate, comparative diagnosis outputs can be reflected on or logged, not merged into Reflection immediately.

## 4. Dependency Order

1. **Q1: Name and scope** first.
2. **Q2: Input contract** second.
3. **Q3: Process** third.
4. **Q4: Output schema** fourth.
5. **Q5: Self-maintenance integration** fifth.
6. **Q6: Reflection relationship** can be answered after Q1 and Q4, but final placement depends on Q5.

## 5. Self-Evaluation

### Independence

**Pass.** Each piece can be designed independently after the operation is named.

### Completeness

**Pass.** The decomposition covers inputs, process, outputs, integration, and relationship to Reflection.

### Reassembly

**Pass.** If all questions are answered, the result is a buildable protocol spec.

### Tractability

**Pass.** The first implementation can be Markdown-native and manual-invoked.

### Interface Clarity

**Pass.** The key interface is diagnosis -> maintenance candidate. It is explicit that diagnosis does not directly edit fundamentals.

### Balance

**Pass.** Input/output and attribution receive most detail because they determine usefulness.

### Confidence

**High.** The decomposition follows the user's actual run-correction-rerun workflow.
