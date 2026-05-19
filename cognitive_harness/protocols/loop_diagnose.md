> **Loading note.** This file is loaded by a human or future MVL+ runner before starting a correction-chain diagnostic inquiry. Read it in full before LOOP_DIAGNOSE is used. Every section below - input contract, artifact reading, branch framing, output contract, confidence rules, and failure modes - is referenced by the procedure. Do not summarize or partial-load.

---

# LOOP_DIAGNOSE - The Correction-Chain Diagnostic Framing Protocol

LOOP_DIAGNOSE is the operational protocol for turning a correction chain into a diagnostic MVL+ inquiry.

LOOP_DIAGNOSE does not replace MVL+. It does not add a new cognitive discipline. It frames a special kind of MVL+ run whose purpose is to compare a weak prior inquiry, the human correction, and a later improved inquiry, then infer what the earlier loop likely missed.

The reasoning engine remains MVL+:

```text
Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique
```

LOOP_DIAGNOSE only defines the input contract, required artifact reads, diagnostic question framing, and expected diagnostic output.

---

## When to use

Use LOOP_DIAGNOSE when the user is asking a question like:

```text
This later inquiry corrected an earlier bad MVL/MVL+ result.
Read both inquiry folders and the user's correction.
What went wrong in the earlier loop?
Which discipline, stage, or framing step likely failed?
What should we improve in the fundamentals?
```

Typical trigger phrases:

- `loop_diagnose`
- correction-chain diagnosis
- self-maintenance diagnosis
- compare these two inquiries and find what went wrong
- why did the earlier MVL/MVL+ loop fail?

Do not use LOOP_DIAGNOSE for ordinary comparison, ordinary review, or ordinary Resume. The key requirement is a correction chain: an earlier weak result, a human correction signal, and a later improved result.

---

## Step 1 - Normalize the input contract

Before starting the MVL+ inquiry, identify these fields:

```text
prior_path:
corrected_path:
human_correction:
optional_context:
diagnostic_goal:
```

Field meanings:

- `prior_path` is the earlier weak, wrong, incomplete, or unsatisfactory inquiry folder.
- `corrected_path` is the later inquiry folder that reflects the user's correction or improved direction.
- `human_correction` is the user's explicit correction, dissatisfaction, added guidance, or rerun instruction.
- `optional_context` is any extra surrounding information that helps interpret the correction chain.
- `diagnostic_goal` is what the diagnosis should produce. Default: evidence-backed failure hypotheses and maintenance candidates.

If `prior_path`, `corrected_path`, or `human_correction` is missing, do not proceed as LOOP_DIAGNOSE. Ask for the missing field or run a normal MVL+ inquiry instead.

If the user names `path_A` and `path_B`, normalize them into semantic roles before proceeding. Do not assume alphabetical or chronological order. The key distinction is weak prior inquiry versus later corrected inquiry.

---

## Step 2 - Verify paths and artifact availability

For both `prior_path` and `corrected_path`, check whether the folder exists.

For each existing inquiry folder, read these files when present:

- `_branch.md`
- `_state.md`
- `finding.md`
- root discipline outputs that have not yet been archived:
  - `exploration.md`
  - `sensemaking.md`
  - `decomposition.md`
  - `innovation.md`
  - `critique.md`
- archived discipline outputs in `docarchive/`:
  - `docarchive/exploration.md`
  - `docarchive/sensemaking.md`
  - `docarchive/decomposition.md`
  - `docarchive/innovation.md`
  - `docarchive/critique.md`

Read any additional local markdown files in the inquiry folder if they appear to be part of the loop's evidence trail.

Do not diagnose from `finding.md` alone when discipline outputs are available. CONCLUDE archives discipline outputs into `docarchive/`, and those files often contain the evidence needed to see where the prior loop failed.

If either folder is missing, halt and report the missing path. Do not infer diagnostic conclusions from one side of the correction chain unless the user explicitly asks for a partial diagnosis.

---

## Step 3 - Frame the diagnostic MVL+ inquiry

Create a normal MVL+ inquiry folder using the current MVL+ folder rule:

```text
devdocs/inquiries/<YYYY-MM-DD_HH-MM__slugified_name>/
```

Prefer a slug that makes the diagnostic nature visible:

```text
<YYYY-MM-DD_HH-MM__loop_diagnose__short_prior_topic>
```

Write `_branch.md` with this structure:

```markdown
# Branch: Loop Diagnose - [short topic]

## Question

Given the weak prior inquiry at `[prior_path]`, the human correction, and the later improved inquiry at `[corrected_path]`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

## Goal

A good answer should identify evidence-backed failure hypotheses, confidence levels, affected discipline or runner stages, shortcoming types, maintenance candidates, and evaluation gates. It should avoid pretending to know exact root cause when the evidence is weak.

## Scope Check

Question covers goal. The question asks for comparative diagnosis of a correction chain, and the goal requires failure hypotheses, evidence, confidence, and maintenance candidates.

## Correction Chain

- Prior path: `[prior_path]`
- Corrected path: `[corrected_path]`
- Human correction:
  ```text
  [human_correction]
  ```
- Optional context:
  ```text
  [optional_context or "None provided."]
  ```

## Required Reads

For both inquiry folders, read `_branch.md`, `_state.md`, `finding.md`, root discipline outputs if present, and `docarchive/` discipline outputs if present.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- Treat the corrected inquiry as comparative evidence, not ground truth.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow mixed or unknown attribution when evidence does not isolate one discipline.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them.

## Relationships

- DIAGNOSES: [prior_path] (weak prior inquiry)
- COMPARES WITH: [corrected_path] (later corrected inquiry)
```

Then run normal MVL+ from that `_branch.md`. Do not change the MVL+ pipeline.

---

## Step 4 - Required diagnostic output

The final `finding.md` produced by CONCLUDE should include these diagnostic elements. They may be integrated into the normal finding template, but they must be present and understandable to a reader who has not read the archived discipline outputs.

### Correction Chain Summary

Record:

- prior inquiry path;
- corrected inquiry path;
- raw human correction or a faithful excerpt when the correction is long;
- what changed from prior result to corrected result.

### Failure Hypotheses

For each hypothesis, use this shape:

```markdown
### Hypothesis [N]: [short name]

**Affected stage:** [Exploration / Sensemaking / Decomposition / Innovation / Critique / CONCLUDE / loop framing / orchestration / context elicitation / mixed / unknown]

**Shortcoming type:** [what kind of failure occurred]

**Evidence from prior inquiry:** [specific artifact/path and concise evidence]

**Evidence from human correction:** [specific correction signal]

**Evidence from corrected inquiry:** [what later inquiry handled differently]

**Confidence:** HIGH / MEDIUM / LOW

**Why not stronger:** [what evidence is missing or ambiguous]

**Maintenance candidate:** [specific protocol/spec/fundamental change, or "None yet"]

**Evaluation gate:** [how to test whether this maintenance candidate helps]
```

Confidence meanings:

- `HIGH`: multiple artifacts converge, and the corrected inquiry clearly repairs the same failure.
- `MEDIUM`: evidence points to the hypothesis, but another explanation remains plausible.
- `LOW`: the hypothesis is possible, but the correction chain does not isolate it.

### Failure Attribution Summary

Summarize the strongest attributions in a compact table:

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| [stage] | [type] | [weak/medium/strong] | [low/medium/high] | [action] |

Do not force every failure into a discipline. Include loop framing, orchestration, context elicitation, CONCLUDE, mixed, or unknown when those are more accurate.

### Maintenance Candidates

For each candidate, state:

- what should change;
- which file or protocol might be affected;
- risk class: low / medium / high;
- expected benefit;
- evaluation gate;
- whether it should become a branch experiment.

Only propose a source edit when the evidence is strong enough to justify a change. Otherwise propose a monitoring question or another diagnostic run.

### Diagnostic Verdict

End the finding with a short diagnostic verdict:

```markdown
## Diagnostic Verdict

**Overall:** [ACTIONABLE / PARTIAL / INCONCLUSIVE]

- **Best-supported diagnosis:** ...
- **Strongest maintenance candidate:** ...
- **Main uncertainty:** ...
- **Recommended next step:** ...
```

Verdict meanings:

- `ACTIONABLE`: at least one maintenance candidate has enough evidence and a concrete evaluation gate.
- `PARTIAL`: the correction chain reveals likely weaknesses, but source changes need more evidence.
- `INCONCLUSIVE`: the artifacts do not support a reliable diagnosis.

---

## Step 5 - Guardrails

Do not treat the corrected inquiry as ground truth.

Do not claim exact root cause unless the artifacts isolate it.

Do not collapse all failures into discipline failures. Bad loop framing, missing context, orchestration choices, and CONCLUDE synthesis can be the real failure surface.

Do not propose broad fundamentals rewrites from one weak correction chain.

Do not create a maintenance branch unless the diagnostic finding produces a specific source-change candidate and evaluation gate.

Do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVL+ findings show a stable internal method that cannot be explained as ordinary MVL+ on a diagnostic question.

---

## Step 6 - Optional future MVL+ hook

After `cognitive_harness/protocols/loop_diagnose.md` has been used successfully on at least one real correction chain, MVL+ may add this explicit hook before `_branch.md` creation:

```text
If NEW input explicitly asks for `loop_diagnose`, correction-chain diagnosis,
or self-maintenance diagnosis, read `cognitive_harness/protocols/loop_diagnose.md`
before creating `_branch.md`. Use that protocol to frame the inquiry question,
goal, context, and required reads. Then run the normal E -> S -> D -> I -> C
pipeline unchanged.
```

Classic MVL may add a lighter note:

```text
For correction-chain diagnosis or self-maintenance diagnosis, prefer MVL+,
because the task usually requires reading multiple inquiry folders and
separating possible failure locations before innovation and critique.
```

Do not add silent automatic diagnosis-mode inference until at least 10 explicit LOOP_DIAGNOSE runs show stable trigger language with no confusing false positives.

---

## Failure modes

- **Missing role assignment** - The user provides two paths but does not identify which is the weak prior inquiry and which is the corrected inquiry. Ask for role assignment before proceeding.

- **Missing human correction** - Two inquiries differ, but no correction signal is provided. This is comparison, not LOOP_DIAGNOSE. Ask for the correction signal or run a normal comparative MVL+ inquiry.

- **Finding-only diagnosis** - The diagnostic reads only `finding.md` and ignores `docarchive/`. This is incomplete when archived discipline outputs exist. Re-read the archived discipline outputs before concluding.

- **Ground-truth inversion** - The diagnostic treats the later improved inquiry as necessarily correct. Corrective action: restate that the corrected inquiry is comparative evidence, not truth.

- **Overconfident attribution** - The diagnostic says a specific discipline failed without evidence that isolates that discipline. Corrective action: downgrade confidence or mark attribution as mixed/unknown.

- **Maintenance overreach** - The diagnostic proposes a broad protocol rewrite from one correction chain. Corrective action: narrow the candidate, add an evaluation gate, or defer source edits until more examples exist.

- **Premature skill creation** - The diagnostic is implemented as a new `loop-diagnose` discipline. Corrective action: keep LOOP_DIAGNOSE as a protocol wrapper around MVL+ until repeated diagnostic findings prove a distinct method.

- **Silent mode switching** - MVL/MVL+ enters LOOP_DIAGNOSE based on vague wording. Corrective action: require explicit trigger language at the current stage.
