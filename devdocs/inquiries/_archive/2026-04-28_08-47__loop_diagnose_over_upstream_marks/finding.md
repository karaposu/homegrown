---
status: active
corrects: devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md
---
# Finding: Loop Diagnose Over Upstream Marks

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md`

**Revision trigger:** User correction. The user pointed out that the prior finding's "Critique Should Produce Upstream Marks" section is not the best design because MVL/MVL+ already archives Critique and other discipline outputs in `docarchive/`.

**What's preserved:** The prior finding was right to reject authoritative discipline self-verdicts. A discipline should not decide that its own output is sufficient for downstream use.

**What's changed:** Routine Critique should not be framed as the default producer of upstream discipline marks. That is too much attribution work inside the normal loop and risks creating labels that later tools over-trust.

**What's new:** Use `homegrown/protocols/loop_diagnose.md` as the better framing for correction-chain diagnosis. `LOOP_DIAGNOSE` runs a normal MVL+ inquiry over existing artifacts when diagnosis is actually needed.

**Migration:** Treat the prior "Critique Should Produce Upstream Marks" section as corrected by this finding. Replace it with: routine Critique preserves evaluation evidence; archived artifacts are the diagnostic substrate; `LOOP_DIAGNOSE` performs upstream or loop-level diagnosis on demand.

## Question

Should the prior finding replace "Critique should produce upstream marks" with a separate `LOOP_DIAGNOSE`-style protocol that analyzes existing inquiry artifacts and `docarchive/` outputs when inner-loop diagnosis is needed?

The goal is to decide whether the prior recommendation was structurally wrong or merely imprecise, clarify the relationship between archived discipline outputs and diagnosis, and produce guidance that improves MVL/MVL+ maintenance without adding unnecessary processing to every run.

## Finding Summary

- The prior finding's rejection of discipline self-verdicts still stands.

- The "Critique should produce upstream marks" recommendation should be corrected. It puts too much diagnosis responsibility into routine Critique output.

- MVL/MVL+ already produces a better evidence source: the archived discipline outputs in `docarchive/`.

- `LOOP_DIAGNOSE` is the better mechanism for upstream or loop-level diagnosis when a correction chain exists.

- Routine Critique may preserve local refinement clues, but those clues should not become standardized upstream `PROCEED / FLAG / RE-RUN` marks.

- Future MVL+ hooks or diagnostic indexes should be deferred until repeated `LOOP_DIAGNOSE` runs show stable value.

## Finding

The corrected model is: **archive first, diagnose on demand.**

Routine MVL/MVL+ runs should keep doing the normal work: run the disciplines, write the discipline outputs, compile a finding, and archive the discipline outputs into `docarchive/`.

Those archived outputs are not passive leftovers. They are the evidence trail. They contain what Exploration scanned, what Sensemaking stabilized, how Decomposition partitioned the problem, what Innovation generated, and how Critique evaluated candidates.

That means upstream diagnosis does not need to be precomputed as marks inside every Critique output. When a real correction signal appears, the diagnostic process can read the complete artifact trail.

`homegrown/protocols/loop_diagnose.md` is a better boundary for this job. It defines a correction-chain diagnostic MVL+ run: compare a weak prior inquiry, the human correction, and a later corrected inquiry, then infer what the earlier loop likely missed.

This matters because failure attribution is wider than "which upstream discipline failed?" A bad result can come from weak Exploration, Sensemaking, Decomposition, Innovation, or Critique. It can also come from branch framing, missing context, orchestration, or CONCLUDE compressing the result poorly.

Routine Critique should not be forced to guess all of that during the original loop. It usually does not yet have the later human correction or corrected inquiry that makes diagnosis strong.

Critique can still leave local clues. If three candidates are killed because they ignored the same constraint, Critique should record that reason. It may say the next Innovation pass should pin that constraint. That is useful refinement guidance.

But that is not the same as a routable upstream mark. It should not become `Innovation: FLAG` or `Sensemaking: RE-RUN` by default. Those labels imply a stronger diagnostic and routing authority than routine Critique has in the base loop.

The strongest surviving architecture is:

1. Base MVL/MVL+ archives the full discipline evidence trail.
2. Routine Critique evaluates current candidates and records kill/refine/survive reasoning.
3. Optional Critique notes may preserve local diagnostic seeds for the next iteration.
4. `LOOP_DIAGNOSE` performs explicit correction-chain diagnosis when the required evidence exists.
5. Diagnostic findings produce failure hypotheses, confidence levels, maintenance candidates, and evaluation gates.

This keeps the base loop lighter and makes diagnosis more reliable.

## Next Actions

### MUST

- **What:** Treat `Critique Should Produce Upstream Marks` in the prior finding as corrected.
- **Who:** Future MVL/MVL+ maintenance work that reads `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md`.
- **Gate:** Before using that prior finding to change Critique, MVL+, Resume, Navigation, or routing behavior.
- **Why:** Prevents adding mandatory upstream marks to routine Critique.

- **What:** Use `LOOP_DIAGNOSE` only when the input has a correction-chain shape.
- **Who:** MVL+ runner or maintainer.
- **Gate:** When there is a weak prior inquiry, a human correction signal, and a corrected or improved inquiry to compare.
- **Why:** Keeps diagnosis evidence-backed instead of inferred from one output.

### COULD

- **What:** Allow routine Critique to record optional local refinement clues.
- **Who:** Critique discipline output author.
- **Gate:** Only when candidate failures clearly reveal immediate next-iteration guidance.
- **Why:** Preserves useful evidence without creating routable upstream marks.

- **What:** Add lightweight relationship pointers such as `DIAGNOSES`, `COMPARES WITH`, and `CORRECTS` in diagnostic inquiry metadata.
- **Who:** Diagnostic inquiry author.
- **Gate:** When a diagnostic inquiry is created.
- **Why:** Makes correction chains easier to navigate without adding marks to base-loop Critique.

### DEFERRED

- **What:** Add an automatic MVL+ hook for `loop_diagnose`.
- **Gate:** After at least 5 explicit `LOOP_DIAGNOSE` runs show stable trigger language and useful findings.
- **Why if revived:** A narrow hook could reduce setup friction without silently switching modes.

- **What:** Build a cross-inquiry diagnostic index.
- **Gate:** After at least 10 diagnostic findings exist.
- **Why if revived:** A pattern index could reveal repeated maintenance failures across disciplines, framing, orchestration, or CONCLUDE.

## Reasoning

The mandatory Critique upstream-mark design was killed. Its strongest defense is routability: marks are easy for future tools to inspect. That defense loses because the labels are lossy and premature. The full archived outputs already exist and contain better evidence.

The "finding-only correction" design was also killed as a standalone answer. It would fix one paragraph but would not explain what routine Critique, `docarchive/`, and `LOOP_DIAGNOSE` should each own.

Optional Critique diagnostic notes survived with a caveat. They are useful when Critique naturally sees a repeated failure pattern. The caveat is that these notes must remain refinement clues, not standardized upstream verdicts.

Explicit `LOOP_DIAGNOSE` over archives survived as the primary answer. It uses the right evidence at the right time: prior artifacts, human correction, corrected artifacts, and a normal MVL+ reasoning loop.

Relationship pointers were refined, not adopted as a broad new schema. They are useful inside diagnostic inquiries, but this finding does not justify a global index yet.

Immediate MVL+ hook adoption was refined and deferred. The protocol itself warns against silent automatic diagnosis-mode inference. A future explicit trigger hook may be reasonable after real diagnostic runs prove the pattern.

The main contradiction resolved by this inquiry was between routability and evidence quality. Upstream marks are routable, but correction-chain diagnosis needs evidence quality more than routing convenience.

## Open Questions

### Monitoring

- After 5 explicit `LOOP_DIAGNOSE` runs, check whether the protocol produces stable enough findings to justify a narrow MVL+ hook.

- After 10 diagnostic findings, check whether repeated failure patterns justify a cross-inquiry diagnostic index.

### Refinement Triggers

- Reopen the "optional Critique notes" boundary if future Critique outputs repeatedly fail to preserve enough evidence for later diagnosis.

- Reopen the "no automatic hook" decision if users repeatedly invoke `loop_diagnose` explicitly and the manual setup becomes pure overhead.

## Source Input

<details>
<summary>Raw correction text for this finding</summary>

```text
$MVL+ 

in devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md 

Critique Should Produce Upstream Marks is not so logical. We already have docarchive folders which have criqitue outputs and other discipine outputs... they can be used to analyze without further processing or adding marks...


we can create sth like i just created /Users/ns/Desktop/projects/native/homegrown/protocols/loop_diagnose.md 

and it can be used for inner loop diagnose
```

Pasted MVL procedural context omitted because the active skill file was loaded from disk for this run.

</details>
