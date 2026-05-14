---
name: bf4ae1f-comprehend
description: Transforms observable-but-opaque artifacts (codebases, systems, documents, designs) into tested working models with predictive power, through progressive model construction (CV1-CV5), perturbation testing, and adversarial self-verification. Use when the user asks to "understand," "explain," or "model how X works," when a codebase or system needs deep analysis before modification, when a design needs to be reverse-engineered, or when surface reading isn't enough and the model needs to predict untested behavior.
---

# /comprehend — Structural Comprehension Analysis

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/comprehend.md` in full.** The protocol below references concepts — the two primary aspects (Mechanistic vs Intent), the six key components (model construction, perturbation testing, prediction testing, adversarial self-challenge, design rationale extraction, accommodation trigger), the depth hierarchy (CV1 Structural → CV2 Behavioral → CV3 Causal → CV4 Hardened → CV5 Generative), the per-CV depth tests, frontier questions, and the eight failure modes — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism (notably the difference between TRACING behavior and BUILDING a predictive model).

Do not proceed to Step 1 until the read completes.

---

Analyze the given input using the Structural Comprehension Framework loaded in Step 0. This transforms observable-but-opaque artifacts into tested, transferable working models through progressive construction, perturbation testing, and adversarial self-verification.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input and consume it. It can be raw text, a folder path with md files, code files, or image path. Consume all input.

2. Determine the comprehension aspect:
   - **Mechanistic** (default) — "How does this work?" Build a model of mechanism.
   - **Intent** — "Why was this built this way?" Build a model of the design space.
   - If the user specifies an aspect, use it. Otherwise default to mechanistic, blending intent naturally as it arises.

3. Determine the target depth:
   - If the user specifies a depth target, stop there.
   - If no target is specified, aim for **Predictive (CV3-CV4)** for code and systems; **Structural (CV1)** for quick orientation tasks.

4. Use codebase context where relevant. For code artifacts, prefer execution-based perturbation testing (actually run the code, modify inputs, observe outputs). For non-code artifacts, use scenario-based or reasoning-based perturbation.

5. Execute the full Structural Comprehension process described in `references/comprehend.md` — the five Comprehension Versions (CV1 Structural → CV2 Behavioral → CV3 Causal → CV4 Hardened → CV5 Generative), each with its phase (Static → Dynamic → Differential → Adversarial → Stabilization), depth test, and frontier-question generation. Stop at the target depth determined in Step 3.

6. Produce explicit predictions BEFORE testing them, log each as CONFIRMED or FAILED in CV3, and trigger model revision (or accommodation rebuild for systematic failures) when predictions fail.

7. Save the output as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save in the same folder as the input file.
   - **Otherwise** — save under `devdocs/comprehension/<suitable-name>.md` (create the directory if needed).

8. Print the output in the conversation as well.

9. Record the user's input at the top of the output file: `## User Input` followed by the $ARGUMENTS that were passed to this command.

10. Present the **Final Summary** after the last CV: aspect (Mechanistic / Intent / Both), depth reached with evidence, prediction scorecard (made / confirmed / failed / revisions triggered), confidence map (HIGH / MEDIUM / LOW areas), key surprises, remaining unknowns, accumulated frontier questions grouped by depth level.

---

**Reference loading during execution.** When recognizing failure modes (surface fluency, premature model closure, assimilation error, trace without model, wrong abstraction level, intent-mechanism confusion, fragile model, paradigm projection), consult the "Failure Modes" section of `references/comprehend.md` for full descriptions and corrective actions. The framework's vocabulary (CV depth tests, perturbation strength hierarchy, accommodation trigger semantics, the six key components) is canonically defined in that file.
