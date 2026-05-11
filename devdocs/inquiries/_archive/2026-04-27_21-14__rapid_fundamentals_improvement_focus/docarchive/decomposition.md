# Decomposition: Rapid Fundamentals Improvement Focus

## User Input

`devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/_branch.md`

## 1. Coupling Map

The whole under decomposition is the near-term program for rapid Homegrown fundamentals improvement.

### Major Clusters

1. **Correction-chain capture**
   - Inputs: earlier weak finding, user correction, later improved finding.
   - Strongly coupled to the real inquiry folder structure and to how MVL/MVL+ records "Changes from Prior."

2. **Comparative loop diagnosis**
   - Inputs: correction-chain artifacts.
   - Output: structured account of what failed in the earlier loop.
   - Strongly coupled to discipline boundaries: Exploration, Sensemaking, Decomposition, Innovation, Critique, CONCLUDE, loop framing, context elicitation, and orchestration.

3. **Self-maintenance ledger**
   - Inputs: diagnosis outputs.
   - Output: tracked maintenance candidates with evidence, risk, proposed patch, evaluation gate, and outcome.
   - Strongly coupled to future fundamentals edits.

4. **Bounded fundamentals patching**
   - Inputs: ledger candidates.
   - Output: small changes to discipline/protocol/loop source.
   - Strongly coupled to risk class and evaluation plan.

5. **Evaluation closure**
   - Inputs: later MVL/MVL+ runs after a patch.
   - Output: retain, revert, or refine.
   - Strongly coupled to the ledger because improvement is not established until closure happens.

6. **Support tooling**
   - Inputs: existing protocol expectations.
   - Output: structural check, telemetry consistency, and artifact hygiene.
   - Moderately coupled. It improves reliability but does not substitute for diagnosis.

7. **Downstream orchestration**
   - Inputs: maintenance evidence and improved fundamentals.
   - Output: better meta-loop, Navigation usage, `/intuit`, and external validation programs.
   - Weakly coupled for the immediate decision. It should consume evidence later.

### Natural Boundaries

- The boundary between **diagnosis** and **ledgering** is important: diagnosis explains what happened; the ledger decides whether it merits a system change.
- The boundary between **ledgering** and **patching** is important: not every detected failure should become a fundamental change.
- The boundary between **patching** and **closure** is important: a patch is only a hypothesis until future runs show whether it helped.
- The boundary between **support tooling** and the main improvement loop is important: structural validation catches shape failures, not reasoning failures.

## 2. Boundary Validation

### Top-Down

The sensemaking result points to one coherent pipeline:

```text
correction chain -> loop diagnosis -> maintenance ledger -> small patch -> evaluation closure
```

This is a natural decomposition because each stage transforms a different kind of object:

- artifact sequence;
- failure explanation;
- maintenance candidate;
- source change;
- outcome decision.

### Bottom-Up

The indivisible atoms already visible in the project are:

- inquiry folders;
- findings;
- user corrective prompts;
- discipline/protocol source files;
- prior archived findings about self-maintenance and loop diagnosis;
- missing structural check tool;
- meta-loop/Navigation concepts.

These atoms group naturally into the same clusters above. The correction prompt and prior/later findings belong together; diagnosis and ledgering are distinct; patching and evaluation are distinct; meta-loop is downstream rather than inside the first loop.

### Confidence

Boundary confidence is high. The only medium-confidence boundary is whether loop diagnosis begins as a `homegrown/protocols/` file or as a devdocs template. That is an implementation sequencing choice, not a conceptual boundary issue.

## 3. Question Tree

### Q1. How should correction chains be identified and captured?

Verification criteria:

- [ ] A correction chain can name the prior inquiry folder.
- [ ] The raw user correction/direction is preserved or referenced.
- [ ] The improved inquiry folder is named.
- [ ] The chain can be read without searching chat history.

### Q2. How should a weak MVL/MVL+ run be comparatively diagnosed?

Verification criteria:

- [ ] The diagnosis compares prior output, user correction, and improved output.
- [ ] It separates missing context from reasoning failure.
- [ ] It can attribute likely failure regions without pretending false precision.
- [ ] Each attribution includes evidence and confidence.
- [ ] It produces maintenance candidates, not just criticism.

### Q3. What must the self-maintenance ledger record?

Verification criteria:

- [ ] Each entry has trigger, evidence, diagnosis, proposed change, affected files, risk class, evaluation gate, and outcome.
- [ ] Entries can remain unresolved without being treated as completed improvements.
- [ ] Low-risk and high-risk changes are distinguishable.
- [ ] Retain/revert/refine closure is explicit.

### Q4. What patch policy prevents overbuilding?

Verification criteria:

- [ ] Only one or two low-risk patches are applied in the first trial.
- [ ] Broad rewrites, autonomous self-editing, and full meta-loop optimization are excluded.
- [ ] Each patch is tied to one or more ledger entries.
- [ ] Each patch has a named evaluation condition.

### Q5. How should improvement be evaluated?

Verification criteria:

- [ ] A patch is not called successful at commit time.
- [ ] Later runs are checked for the specific failure class the patch targeted.
- [ ] The ledger records retain, revert, or refine.
- [ ] Evidence can accumulate across multiple runs.

### Q6. What support tooling is needed immediately?

Verification criteria:

- [ ] The missing structural check reference is either implemented or removed/replaced.
- [ ] Required inquiry sections are checkable.
- [ ] Support tooling remains secondary to reasoning-quality diagnosis.

### Q7. When should downstream systems use this evidence?

Verification criteria:

- [ ] Meta-loop uses maintenance evidence after the first trial, not before.
- [ ] Navigation remains "eyes" for traversal, not the diagnosis engine.
- [ ] `/intuit` and external validation can feed the same ledger later.

## 4. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| Correction-chain capture | Loop diagnosis | prior finding, correction prompt, improved finding, paths | one-way |
| Loop diagnosis | Self-maintenance ledger | failure attribution, evidence, confidence, candidate change | one-way |
| Self-maintenance ledger | Patch policy | approved maintenance candidate, risk class, affected files | one-way |
| Patch policy | Fundamentals source | bounded source edit | one-way |
| Fundamentals source | Evaluation closure | later behavior under same failure class | one-way |
| Evaluation closure | Self-maintenance ledger | retain/revert/refine outcome | feedback |
| Support tooling | All stages | structural validity checks and artifact consistency | one-way support |
| Self-maintenance ledger | Meta-loop/Navigation/`/intuit` | calibrated evidence for future orchestration | one-way later |

## 5. Dependency Order

1. **Define the ledger schema first.**
   - This creates the memory target for diagnoses.

2. **Define lightweight loop diagnosis second.**
   - It needs to know what output the ledger expects.

3. **Select three real correction chains third.**
   - The first trial needs real evidence, not invented examples.

4. **Run loop diagnosis on the three chains fourth.**
   - The output becomes the first maintenance entries.

5. **Apply one or two low-risk fundamentals patches fifth.**
   - Do not patch every plausible issue.

6. **Add or repair structural check support in parallel or immediately after.**
   - This is support infrastructure, not the central learning loop.

7. **Evaluate after later use sixth.**
   - Retain, revert, or refine based on whether the targeted failure recurs.

8. **Feed evidence into meta-loop, Navigation, `/intuit`, and validation later.**
   - Downstream systems should consume calibrated evidence, not replace it.

## 6. Self-Evaluation

| Dimension | Result | Notes |
|---|---|---|
| Independence | PASS | Each piece has a distinct object and can be worked on through explicit inputs/outputs. |
| Completeness | PASS | The decomposition covers evidence capture, diagnosis, memory, action, evaluation, support tooling, and downstream use. |
| Reassembly | PASS | If each piece is implemented, the system has a working evidence-to-fundamentals loop. |
| Tractability | PASS | Each piece can be handled in a focused pass. |
| Interface clarity | PASS | The central flow and feedback path are explicit. |
| Balance | PASS | No piece hides most of the complexity, though loop diagnosis is the hardest. |
| Confidence | PASS | Top-down and bottom-up boundary checks agree. |

## 7. Decomposition Result

The most tractable form of the priority is:

```text
self-maintenance ledger
+ lightweight loop-diagnose
+ three real correction-chain trials
+ one or two bounded fundamentals patches
+ retain/revert/refine closure
```

This should be treated as the first Level 1 self-maintenance mechanism. Meta-loop, `/intuit`, and external validation remain important, but they are downstream or adjacent consumers of this evidence loop rather than the biggest immediate focus.
