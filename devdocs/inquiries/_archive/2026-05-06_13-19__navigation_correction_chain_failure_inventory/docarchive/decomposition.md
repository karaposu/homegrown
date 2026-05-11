# Decomposition: Navigation Correction Chain Failure Inventory

## Input

`_branch.md`, `exploration.md`, and `sensemaking.md` from this inquiry.

## Step 1 - Perceive Coupling Topology

The whole problem:

```text
Produce a cautious failure inventory from seven Navigation correction-chain inquiries, then prepare runnable loop_diagnose prompts without overclaiming root cause.
```

### Elements

- Evidence set read status.
- Chronological correction edges.
- Failure classification.
- Evidence binding.
- Confidence level.
- Prompt generation.
- Cross-chain diagnostic themes.
- Root-cause attribution guardrail.

### Coupling Gradients

Strong coupling:

- Failure classification and evidence binding. A failure label is invalid without a cited correction edge.
- Prompt generation and correction edges. `loop_diagnose.md` requires a prior path, corrected path, and human correction.
- Confidence and root-cause guardrail. Strong evidence of a bad output does not equal strong evidence of a failed discipline.

Moderate coupling:

- Cross-chain themes and pairwise failures. Themes emerge from repeated pairwise failures but can be diagnosed separately.
- User correction wording and prompt quality. The prompts need faithful correction signals, but exact chat wording may be summarized when artifacts already record the revision trigger.

Weak coupling:

- Final prose order and diagnostic validity.
- Whether prompts are run now or later.
- Exact future maintenance candidates, which should wait for loop diagnosis.

## Step 2 - Detect Boundaries Top-Down

Natural pieces:

1. **Evidence Coverage**
   - Proves the requested files were inspected and marks confidence limits.

2. **Failure Inventory**
   - Lists failures and near-failures with type, evidence, and confidence.

3. **Correction Edge Map**
   - Maps each pair of prior/corrected inquiries.

4. **Cross-Chain Themes**
   - Captures repeated patterns such as naming, boundary confusion, and authority drift.

5. **Loop Diagnose Prompt Set**
   - Converts high-value correction edges into ready-to-run prompts.

6. **Attribution Guardrails**
   - Prevents the answer from claiming exact stage/root cause before diagnostics.

These are low-coupling boundaries. Each can be written and checked independently, and together they satisfy the user's request.

## Step 3 - Validate Boundaries Bottom-Up

### Atoms

- A path to a prior inquiry.
- A path to a corrected inquiry.
- A human correction signal.
- A changed recommendation.
- A named failure type.
- A confidence label.
- A diagnostic goal.
- A prompt block.

### Validation

Atoms group naturally:

- paths + correction signal + diagnostic goal -> Loop Diagnose Prompt Set;
- changed recommendation + evidence + confidence -> Failure Inventory;
- repeated changed recommendations -> Cross-Chain Themes;
- confidence label + missing causal isolation -> Attribution Guardrails.

Boundary confidence: high.

No atom needed for the final output is stranded outside a piece.

## Step 4 - Question Tree

### Q1. What evidence coverage must be stated?

Verification criteria:

- [ ] Names the seven inquiry folders.
- [ ] States that root Markdown and `docarchive/*.md` files were read.
- [ ] Notes the 56-file / 10,596-line evidence count.
- [ ] Names confidence limits where evidence comes from chat context rather than artifacts alone.

### Q2. What failures happened between inquiries?

Verification criteria:

- [ ] Includes storage-mode / file-generation reversal.
- [ ] Includes unclear artifact/operation naming.
- [ ] Includes project-level/bounded trigger proxy.
- [ ] Includes standalone preflight smell.
- [ ] Includes vague "may affect" materiality language.
- [ ] Includes early-stage phase / premature optimization.
- [ ] Includes unclear source/PastNavigationMemoryFile vocabulary.
- [ ] Includes maintained index before search.
- [ ] Includes broad-index near-failure.
- [ ] Includes recurring authority-boundary risk.

### Q3. Which items are failures versus refinements?

Verification criteria:

- [ ] Marks confirmed failures.
- [ ] Marks policy refinements.
- [ ] Marks near-failures repaired in the same inquiry.
- [ ] Marks diagnostic hypotheses.
- [ ] Avoids flattening everything into one severity.

### Q4. Which correction edges should become loop-diagnose prompts?

Verification criteria:

- [ ] Includes `17-56 -> 20-38`.
- [ ] Includes `20-38 -> 17-12`.
- [ ] Includes `17-12 -> 18-30`.
- [ ] Includes `18-30 -> 20-02`.
- [ ] Includes `07-06 -> 10-21`.
- [ ] Optionally includes `20-02 -> 07-06` as a lower-priority bridge.
- [ ] Includes cross-chain naming prompt.

### Q5. What must each prompt contain?

Verification criteria:

- [ ] `prior_path`.
- [ ] `corrected_path`.
- [ ] `human_correction`.
- [ ] `optional_context`.
- [ ] `diagnostic_goal`.
- [ ] Instruction to read `_branch.md`, `_state.md`, `finding.md`, root discipline files, and `docarchive/` discipline files.

### Q6. What should be deferred to actual loop diagnosis?

Verification criteria:

- [ ] Exact affected discipline.
- [ ] Exact root cause.
- [ ] Source edits or maintenance candidates.
- [ ] Whether a repeated failure justifies changing MVL+ fundamentals.

## Step 5 - Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Evidence Coverage | Failure Inventory | Read-completeness and confidence limits | one-way |
| Failure Inventory | Correction Edge Map | Which failures belong to which pair | one-way |
| Correction Edge Map | Loop Diagnose Prompt Set | Prior/corrected paths and correction signal | one-way |
| Cross-Chain Themes | Loop Diagnose Prompt Set | Aggregate prompt topics | one-way |
| Attribution Guardrails | Failure Inventory | Confidence labels and no-overclaim rule | feedback |
| Attribution Guardrails | Loop Diagnose Prompt Set | Ask diagnosis to infer stage; do not assert stage | one-way |

Hidden-coupling checks:

- Do not let the prompt set imply the corrected inquiry is ground truth.
- Do not use a cross-chain theme as evidence for a pair unless the pair actually contains that theme.
- Do not let a user correction in chat substitute for artifact evidence unless the confidence limit is stated.

## Step 6 - Dependency Order

1. State evidence coverage.
2. List typed failures.
3. Map failures to correction edges.
4. Add cross-chain themes.
5. Generate pairwise prompts.
6. Generate aggregate prompts.
7. State guardrails and recommended first diagnostics.

Parallelizable after step 2:

- Pairwise prompt drafting and cross-chain prompt drafting can proceed independently.

Must wait:

- Prompt generation should wait until failure types and correction edges are stable.
- Maintenance candidate recommendations should wait until loop diagnosis runs.

## Step 7 - Self-Evaluation

### Independence

Pass.

Evidence coverage, failure inventory, correction edges, prompt generation, and guardrails can each be checked independently.

### Completeness

Pass.

The decomposition covers the user's whole request: inspect evidence, list failures, and provide ready-to-run `loop_diagnose.md` prompts.

### Reassembly

Pass.

If the pieces are answered in dependency order, the final answer reconstructs a complete failure inventory and prompt set.

### Tractability

Pass.

Each piece is small enough for Innovation and Critique to test.

### Interface Clarity

Pass.

The main interface is the correction edge object:

```yaml
prior_path:
corrected_path:
human_correction:
diagnostic_goal:
```

### Balance

Pass with note.

The failure inventory and prompt set are the largest pieces. They are still tractable because the correction chain has only seven inquiries and six main edges.

### Confidence

High.

Top-down boundaries and bottom-up atoms agree.

## Final Deliverable

### Coupling Map

```text
evidence coverage
  supports -> failure inventory

failure inventory
  maps onto -> correction edges

correction edges
  generate -> loop_diagnose prompts

cross-chain themes
  generate -> aggregate diagnostics

attribution guardrails
  constrain -> every failure and prompt
```

### Question Tree

1. What evidence coverage must be stated?
2. What failures happened between inquiries?
3. Which items are failures versus refinements?
4. Which correction edges should become loop-diagnose prompts?
5. What must each prompt contain?
6. What should be deferred to actual loop diagnosis?

### Interface Map

Primary prompt interface:

```yaml
prior_path:
corrected_path:
human_correction:
optional_context:
diagnostic_goal:
```

Primary inventory interface:

```yaml
failure:
chain_location:
type:
evidence:
confidence:
diagnostic_use:
```

### Dependency Order

```text
coverage -> typed failures -> correction edges -> prompt set -> guardrails
```

### Self-Evaluation Summary

Independence: pass.

Completeness: pass.

Reassembly: pass.
