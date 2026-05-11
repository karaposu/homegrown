# Decomposition: Loop Diagnose and Git Self-Maintenance

## User Input

`devdocs/inquiries/2026-04-27_21-38__loop_diagnose_git_self_maintenance/_branch.md`

## 1. Coupling Map

The whole is a self-maintenance architecture for Homegrown that uses MVL/MVL+ as the atomic cognitive run, diagnostic inquiries for failure analysis, Markdown findings for evidence, and git branches for candidate variants of the fundamentals.

### Major Clusters

1. **Atomic cognitive run**
   - Strongly coupled to MVL/MVL+.
   - Defines what actually performs reasoning.
   - `loop-diagnose` should not duplicate this layer.

2. **Diagnostic use-case protocol**
   - Strongly coupled to correction-chain inputs and diagnostic output expectations.
   - Provides the recipe for running MVL+ on a diagnostic comparison.
   - Does not itself reason; it shapes the question and required artifacts.

3. **Diagnostic evidence records**
   - Strongly coupled to `finding.md` outputs under `devdocs/inquiries/diagnostics/`.
   - Stores what failed, why it likely failed, evidence, confidence, and maintenance candidates.

4. **Maintenance lifecycle view**
   - Moderately coupled to diagnostic findings, source patches, branches, and evaluation results.
   - Tracks OPEN / EVALUATING / RETAINED / REVERTED / REFINED / STOPPED.
   - Can be a small index rather than a full evidence store.

5. **Git branch variant substrate**
   - Strongly coupled to actual edits in `homegrown/` and other fundamentals files.
   - Stores file-state variants, diffs, merges, and reverts.
   - Weakly stores semantic rationale unless paired with docs.

6. **Evaluation and selection layer**
   - Strongly coupled to branch experiments.
   - Compares baseline and candidate outputs on shared inquiries or test cases.
   - Produces merge / continue / stop / fork decisions.

7. **Future orchestration**
   - Coupled to meta-loop, Navigation, and branch/merge protocols.
   - Should eventually automate traversal and comparison, but not before evidence exists.

### Natural Boundaries

- The boundary between **MVL+** and **loop-diagnose**: MVL+ reasons; loop-diagnose specifies a diagnostic job for MVL+.
- The boundary between **diagnostic finding** and **maintenance index**: diagnostic findings contain evidence; the index shows lifecycle state.
- The boundary between **git branch** and **semantic record**: branch stores executable variant; docs store why and how it is judged.
- The boundary between **branch creation** and **branch selection**: creating a variant is not evidence of superiority.

## 2. Boundary Validation

### Top-Down

Sensemaking produced a layered model:

```text
MVL/MVL+ = cognition primitive
loop-diagnose = diagnostic use-case protocol
diagnostic finding = semantic evidence
self-maintenance index = lifecycle memory
git branch = executable candidate variant
evaluation finding = selection evidence
meta-loop later = orchestration
```

Each layer answers a different question:

- What thinks?
- What diagnostic task is being asked?
- What evidence was produced?
- What is the lifecycle state?
- What file-state variant exists?
- Which variant performed better?
- What should run next?

### Bottom-Up

The obvious atoms are:

- MVL/MVL+ inquiry folders;
- diagnostic findings;
- source files under `homegrown/`;
- git commits and branches;
- branch comparison outputs;
- future meta-loop state.

These atoms group into the same clusters. No atom forces `loop-diagnose` to become a new discipline. No atom lets git store the full semantic maintenance lifecycle by itself.

### Confidence

Boundary confidence is high for the core split: MVL+ versus diagnostic protocol versus git branch.

Boundary confidence is medium for the exact lifecycle-index implementation because the project has not yet run enough branch experiments to know whether one index file, frontmatter search, or a dedicated folder is best.

## 3. Question Tree

### Q1. What is the atomic cognitive operation?

Verification criteria:

- [ ] MVL/MVL+ remains the operation that performs reasoning.
- [ ] `loop-diagnose` does not duplicate or replace MVL/MVL+.
- [ ] Diagnostic work can be run as a normal inquiry.

### Q2. What is `loop-diagnose`?

Verification criteria:

- [ ] It has a clear input contract: prior bad inquiry, user correction, improved inquiry, optional source changes.
- [ ] It has a clear output contract: diagnostic finding with evidence, confidence, and maintenance candidates.
- [ ] It is described as a protocol/template or inquiry pattern, not a discipline.
- [ ] It can later be promoted only if repeated cases justify a distinct operation.

### Q3. Where should diagnostic evidence live?

Verification criteria:

- [ ] Diagnostic results can live under `devdocs/inquiries/diagnostics/<YYYY-MM-DD_HH-MM__slug>/`.
- [ ] The output remains a normal MVL+ `finding.md`.
- [ ] It can link to the prior bad inquiry, the user correction, and the improved inquiry.
- [ ] It can produce maintenance candidates without directly applying them.

### Q4. What is the self-maintenance ledger now?

Verification criteria:

- [ ] "Ledger" is defined as lifecycle memory, not necessarily a single file.
- [ ] It can be implemented as an index over diagnostic findings, git branches, patches, and evaluation outcomes.
- [ ] It has status states and gates.
- [ ] It remains searchable and resumable.

### Q5. What is git responsible for?

Verification criteria:

- [ ] Git branches hold actual candidate changes to fundamentals.
- [ ] Git commits preserve diffs and rollback ability.
- [ ] Git is not treated as sufficient evidence of why a change exists or whether it succeeded.
- [ ] Branches are linked to diagnostic and evaluation findings.

### Q6. How should branch evolution work later?

Verification criteria:

- [ ] A candidate branch has a linked diagnostic reason.
- [ ] Baseline and candidate branches are tested against the same evaluation inquiries.
- [ ] Comparison produces explicit merge / continue / stop / fork decisions.
- [ ] The selection rule is documented before autonomy is added.

### Q7. What should be deferred?

Verification criteria:

- [ ] Full `loop-diagnose` discipline is deferred.
- [ ] Automated branch selection is deferred.
- [ ] Multi-branch autonomous evolution is deferred.
- [ ] Deferral has revival gates.

## 4. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| Correction chain | `loop-diagnose` protocol | bad inquiry, correction, improved inquiry | one-way |
| `loop-diagnose` protocol | MVL+ inquiry | constrained diagnostic question and required inputs | one-way |
| MVL+ inquiry | Diagnostic finding | evidence, attribution, confidence, maintenance candidates | one-way |
| Diagnostic finding | Maintenance lifecycle index | status, candidate, risk, linked evidence | one-way |
| Diagnostic finding | Git branch | reason to create candidate variant | one-way |
| Git branch | Evaluation inquiry | candidate fundamentals to test | one-way |
| Baseline branch | Evaluation inquiry | baseline outputs to compare | one-way |
| Evaluation inquiry | Maintenance lifecycle index | selection decision and outcome | feedback |
| Maintenance lifecycle index | Meta-loop later | open branches, closed outcomes, selection evidence | one-way later |

## 5. Dependency Order

1. **Keep MVL/MVL+ as the atomic cognitive run.**
   - This is already true and must not be disturbed.

2. **Standardize diagnostic MVL+ inquiry shape.**
   - Define what `loop-diagnose` means as a protocol/template.

3. **Use `devdocs/inquiries/diagnostics/` as the evidence store.**
   - Continue the pattern already proven by `2026-04-27_tidy_loop_failure_attribution`.

4. **Add lifecycle metadata or a small index.**
   - Only enough to find open/evaluating/retained/stopped maintenance candidates.

5. **Create git branches only when source changes are being tested.**
   - Do not branch for every diagnosis.

6. **Define branch experiment fields.**
   - Baseline branch, candidate branch, diagnostic source, changed files, evaluation inquiries, decision rule, outcome.

7. **Later: automate branch comparison through meta-loop.**
   - Only after manual branch experiments produce enough evidence.

## 6. Self-Evaluation

| Dimension | Result | Notes |
|---|---|---|
| Independence | PASS | Each layer has a distinct purpose and artifact type. |
| Completeness | PASS | The decomposition covers diagnostic runs, records, lifecycle tracking, git branching, evaluation, and future orchestration. |
| Reassembly | PASS | The layers reassemble into a git-backed, evidence-bound self-maintenance architecture. |
| Tractability | PASS | Each piece can be implemented or tested separately. |
| Interface clarity | PASS | The interfaces name exactly what flows between MVL+, docs, git, and evaluation. |
| Balance | PASS | No single piece hides all complexity; branch evaluation is the hardest and is deferred. |
| Confidence | PASS | Top-down and bottom-up boundaries agree. |

## 7. Decomposition Result

The architecture should be:

```text
diagnostic MVL+ protocol
-> diagnostic finding under devdocs/inquiries/diagnostics/
-> optional lifecycle index entry
-> optional git branch for source variant
-> evaluation MVL+ comparing baseline and candidate
-> merge / continue / stop / refine decision
```

This preserves MVL+ as the atomic thinking method while making room for git-based evolutionary self-maintenance later.
