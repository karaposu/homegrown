# Innovation: Reflect Discipline vs MVL Protocol

## User Input

```text
Should `reflect` remain a discipline, or should it become another MVL operation with a protocol?
```

## Seed

The seed is a taxonomy tension: `reflect` is currently a discipline, but Homegrown increasingly treats special operations such as `loop_diagnose` as protocols that frame MVL+ runs. The system needs a classification that avoids both over-fragmentation and over-centralization.

## Mechanism Outputs

### 1. Lens Shifting

**Generic:** Evaluate `reflect` not by file type but by operation type.

**Focused:** If the operation is "bounded process observation," keep it as a discipline. If the operation is "open-ended diagnosis of why the process failed," route to MVL+/`loop_diagnose`.

**Contrarian:** Evaluate from the future autonomous system's perspective: every operation should be MVL+ unless it proves it can be cheaper and stable.

**Candidate:** Operation-type classification.

### 2. Combination

**Generic:** Combine discipline execution with protocol governance.

**Focused:** Keep `reflect` as the cognitive operation, but let `alignment_control.md` define the record shape and let a future `process_review.md` protocol govern invocation/storage if complexity appears.

**Contrarian:** Combine reflect and loop diagnose into one "process diagnosis" protocol family with depth modes.

**Candidate:** Split stack: contract -> discipline -> optional wrapper -> MVL+ escalation.

### 3. Inversion

**Generic:** Instead of asking "why should reflect be a discipline?", ask "what would break if reflect were only protocol-wrapped MVL+?"

**Focused:** Routine process review becomes too heavy. The system loses cheap post-loop process sensing and starts using full inquiry machinery for simple observations.

**Contrarian:** Instead of asking "what would break?", ask "what would improve?" The taxonomy simplifies and avoids preserving an unused tool.

**Candidate:** Use a convert gate: if direct reflect produces no useful low-cost observations, demote it to protocol-wrapped MVL+.

### 4. Constraint Manipulation

**Generic:** Add a constraint: no new protocol unless the existing discipline cannot carry trigger/output rules cleanly.

**Focused:** Patch `reflect` first; create `process_review.md` only after 3-5 real reflect runs show that invocation/storage governance is becoming too large for the discipline spec.

**Contrarian:** Add the opposite constraint: all alignment-insurance operations must be protocols. Then `reflect` becomes protocolized immediately, but its internal method still has to live somewhere.

**Candidate:** Protocolization threshold.

### 5. Absence Recognition

**Generic:** What is missing is not another label; it is evidence.

**Focused:** There is no trial corpus of reflect outputs. The missing artifact is a small set of triggered `reflection.md` runs reviewed for usefulness, noise, and escalation rate.

**Contrarian:** What is missing is a generic "process_review" operation that can decide whether to run light reflection or full MVL+.

**Candidate:** Reflect trial evidence gate.

### 6. Domain Transfer

**Generic:** Borrow from software quality systems.

**Focused:** Linters, tests, reviews, and incident postmortems are separate mechanisms. A code review is not replaced by a full incident postmortem. Likewise, `reflect` can be a lightweight review while `loop_diagnose` is the postmortem.

**Contrarian:** Borrow from small teams: too many named rituals die unused. Collapse rituals until evidence demands separation.

**Candidate:** Lightweight review plus escalation, with kill criteria.

### 7. Extrapolation

**Generic:** If Homegrown grows into multihead branching, cheap process signals become more important.

**Focused:** A future system running many MVL+ branches cannot afford a full MVL+ process diagnosis after each branch. It needs a cheap way to notice process-alignment issues and route only the important ones deeper.

**Contrarian:** If branch volume grows, even direct reflect may be too much; process signals should be extracted from existing artifacts/checkpoints without a new LLM step.

**Candidate:** Reflect as optional boundary observer now; later automate only signal extraction or runner suggestions after value is proven.

## Candidate Designs

### Candidate A: Keep Reflect as Boundary Discipline

`reflect` remains a discipline, but its identity narrows to process-alignment insurance. It is opt-in or trigger-suggested, not automatic.

### Candidate B: Convert Reflect Into `process_review.md` Protocol Wrapping MVL+

Delete/demote standalone reflect. A protocol frames a normal MVL+ inquiry over a completed loop's process artifacts.

### Candidate C: Split Discipline and Protocol

`reflect` remains the cognitive operation. A later `process_review.md` protocol governs source authority, trigger depth, storage, and alignment-control records.

### Candidate D: Merge Reflect With Loop Diagnose

One diagnostic family handles process review and correction-chain diagnosis with depth modes.

### Candidate E: Retire Reflect

Use outcome review and loop diagnose only. Process issues become either downstream outcome mismatch or correction-chain diagnosis.

### Candidate F: Trial-Gated Boundary Discipline

Keep `reflect` as a narrow boundary discipline now. Add trigger/output guidance. Run 3-5 real triggered reflect trials. Decide later whether to keep, wrap, convert, or retire.

## Survival Tests

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism Independence | Result |
| --- | --- | --- | --- | --- | --- | --- |
| A. Keep as boundary discipline | Medium | Medium | Medium | High | Medium | Refine |
| B. Protocol-wrapped MVL+ now | Medium | Medium-Low | Medium | Medium | Low | Weak |
| C. Split discipline/protocol | Medium | High | High | Medium | High | Survives |
| D. Merge with loop diagnose | Low | Low | Low | Medium | Low | Kill |
| E. Retire reflect | Low | Low | Low | High | Low | Kill for now |
| F. Trial-gated boundary discipline | High | High | High | High | High | Survives |

## Assembly Check

The strongest assembly is Candidate F with Candidate C as the future path:

```text
Now:
  reflect = boundary discipline for process-alignment observation
  no default auto-run
  patch role/triggers/output
  trial on selected inquiries

Later if evidence supports:
  process_review.md = protocol wrapper for invocation/storage/depth selection
  reflect still performs light review
  MVL+/loop_diagnose handles deep causal diagnosis
```

This assembly preserves current functionality, avoids adding protocol complexity prematurely, and gives the user's concern a concrete test.

## Innovation Verdict

**Overall: PROCEED**

- Generators applied: 4 / 4
- Framers applied: 3 / 3
- Convergence: YES. Multiple mechanisms converge on "keep reflect narrow now, trial-gate it, protocolize only if evidence demands."
- Survivors tested: 6 / 6
- Failure modes observed: none significant.

## Surviving Innovation

The best idea is not simply "`reflect` is a discipline." The better design is:

```text
reflect is a provisional boundary discipline with explicit evidence gates.
```

It remains a discipline because it has a distinct bounded method. It becomes a protocol-wrapped MVL+ operation only if real usage shows that the bounded method is insufficient.
