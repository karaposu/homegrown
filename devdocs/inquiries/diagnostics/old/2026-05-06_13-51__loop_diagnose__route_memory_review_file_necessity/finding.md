---
status: active
diagnoses: devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/finding.md
compares_with: devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md
---
# Finding: Loop Diagnose - Route Memory Review File Necessity

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/finding.md`

**Revision trigger:** The user rejected the prior rule that `route_memory_review.md` should be saved only when durable handoff matters. The user said Homegrown expects explicit Markdown artifacts for meaningful operations.

**What's preserved:** The prior inquiry correctly protected old Navigation maps as historical snapshots. It also correctly improved the name of the operation toward Route Memory Review and kept useful status categories such as carry forward, retire, keep blocked, needs check, and ignore.

**What's changed:** The saved file is no longer treated as adaptive storage. If full Route Memory Review runs, `route_memory_review.md` is the operation output.

**What's new:** Bloat control moves to the operation trigger. The system should decide carefully whether Route Memory Review should run. Once it runs, the review result should be written.

**Migration:** Future maintenance should replace the prior "inline by default, save only for durable handoff" rule with a trigger-limited, output-mandatory rule for full Route Memory Review.

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

The goal was to diagnose affected MVL+ stages with evidence and confidence levels. MVL+ is Homegrown's extended loop of Exploration, Sensemaking, Decomposition, Innovation, and Critique. The diagnostic was required to read the full inquiry artifacts, not only the final findings.

## Finding Summary

- The prior loop's core mistake was not "too few files." The mistake was treating the Route Memory Review file as optional storage instead of as the canonical output of a meaningful operation.

- Route Memory Review is meaningful when old Navigation memory may affect the next Navigation map. In that case, it gives Navigation current instructions about old routes: carry forward, retire, keep blocked, needs check, or ignore.

- The corrected rule is trigger-limited and output-mandatory. Do not run full Route Memory Review when old Navigation memory is irrelevant. If full Route Memory Review runs, write `route_memory_review.md`.

- The prior loop applied artifact-bloat pressure at the wrong layer. It tried to reduce bloat by making the file optional. It should have reduced bloat by narrowing when the review operation runs.

- The strongest affected stages were Sensemaking boundary construction, Innovation candidate testing, and Critique weighting. Codebase-context intake was a contributor with medium confidence. CONCLUDE was mostly downstream because the adaptive-storage model already appeared in the earlier discipline outputs.

- The prevention package should be narrow: an Operation Output Contract Gate, a Bloat Control Layer Gate, an Operational Memory Critique Guard, and a supporting Artifact-Policy Context Pairing rule.

## Finding

This inquiry exists because Navigation has to deal with old Navigation maps without treating them as current truth. Old maps are historical records. A new Navigation run may still need to know whether old routes should be carried forward, retired, kept blocked, checked again, or ignored.

That is what Route Memory Review is for. It is a current interpretation of old Navigation memory before a new Navigation map is written.

The prior inquiry correctly recognized much of that territory. It improved the name of the operation and protected old maps from being edited. The failure was narrower and more important: it separated the review operation from its saved file so strongly that the saved file became optional storage.

That produced the wrong rule:

```text
Run Route Memory Review, but save route_memory_review.md only when durable handoff matters.
```

The better rule is:

```text
Run full Route Memory Review only when old Navigation memory may affect the new Navigation map.
If full Route Memory Review runs, write route_memory_review.md.
```

The difference is the control layer.

The prior rule controlled bloat after the operation ran, by hiding or skipping the canonical output file. That creates a risk where Navigation can be influenced by a review that exists only in chat.

The corrected rule controls bloat before the operation runs. If old Navigation memory does not matter, skip the full review. If the review does matter, record the result as a Markdown artifact.

This matches Homegrown's explicit-artifact culture more closely. Homegrown does not need files for every passing thought. It does need explicit artifacts for meaningful operations that affect later work.

The evidence base is strong enough for a mixed-stage diagnosis. Both inquiry folders were read fully, including `_branch.md`, `_state.md`, `finding.md`, and archived discipline files. The prior archived outputs repeatedly preserved adaptive output modes. The corrected archived outputs repeatedly converged on trigger-limited but artifact-mandatory review.

The prior failure was not isolated to final wording. Exploration, Sensemaking, Innovation, and Critique all showed the adaptive-storage frame. CONCLUDE summarized that frame; it did not invent it.

The likely stage attributions are:

1. **Sensemaking boundary construction: HIGH confidence.** The prior loop drew the boundary around durable handoff and storage value. It should have drawn the boundary around whether a meaningful operation had produced a load-bearing result.

2. **Innovation candidate testing: HIGH confidence.** The prior loop appears to have tested "always save" against "adaptive output." It did not stabilize the better third option: trigger-limited review with mandatory output when review runs.

3. **Critique weighting: HIGH confidence.** The prior Critique weighted artifact proportionality too heavily and did not make explicitness, resumability, auditability, and "no invisible load-bearing state" critical dimensions for operational memory.

4. **Codebase-context intake: MEDIUM confidence.** The prior loop likely underweighted broader Homegrown artifact culture. This is not a sole-cause diagnosis because active Navigation warm-up files also encoded the weak adaptive-output policy.

5. **Conclusion synthesis: LOW-to-MEDIUM confidence as an independent defect.** The final answer was wrong, but it was wrong because the earlier stages had already converged on the wrong model.

The prevention package should not be a broad MVL rewrite. The issue is specific enough for small guardrails.

The first guardrail is an **Operation Output Contract Gate**. When a loop proposes inline-only, print-only, optional, adaptive, or no-file output for a meaningful operation, it must ask whether the file is optional storage or the operation's canonical output.

The second guardrail is a **Bloat Control Layer Gate**. When artifact bloat is the objection, the loop must first test whether bloat can be controlled by narrowing or skipping the operation. It should not make canonical output optional before that test.

The third guardrail is an **Operational Memory Critique Guard**. When an artifact interprets old route maps, prior findings, protocol state, outcome records, or similar operational memory, Critique must include explicitness fit, auditability, resumability, no invisible load-bearing state, and anti-bloat trigger discipline.

The fourth guardrail is a supporting **Artifact-Policy Context Pairing** rule. When the local protocol being read may itself contain the contested policy, the loop should treat that protocol as both evidence and suspect. It should compare it with broader Homegrown artifact or record precedents.

These guardrails preserve the important distinction:

```text
operation trigger
  decides whether the operation runs

canonical output contract
  decides what the operation writes when it runs

storage convenience
  applies only to non-load-bearing notes, summaries, or copies
```

## Next Actions

### MUST

- **What:** Materialize the Operation Output Contract Gate and Bloat Control Layer Gate in the relevant Homegrown rule surface for MVL+/loop diagnostics or artifact-policy decisions.
  **Who:** Homegrown protocol maintainer or a later materialization pass.
  **Gate:** Before using MVL+ or `homegrown/protocols/loop_diagnose.md` for another artifact-policy decision.
  **Why:** Prevents future loops from making a canonical operation output optional to avoid bloat.

- **What:** Materialize the Operational Memory Critique Guard for critiques involving old route maps, prior findings, protocol state, outcome records, or similar memory sources.
  **Who:** Homegrown protocol maintainer or a later materialization pass.
  **Gate:** Before the next critique that decides whether an operational-memory artifact should be written.
  **Why:** Prevents artifact proportionality from overriding explicitness, auditability, and resumability in the wrong context.

- **What:** Audit active Navigation context files that still encode inline-default or save-only-for-durable-handoff behavior for Route Memory Review.
  **Who:** Navigation protocol maintainer.
  **Gate:** Before the next durable Navigation run that consumes old Navigation memory.
  **Why:** The active local policy can still reproduce the corrected mistake if it remains unchanged.

### COULD

- **What:** Add the refined Artifact-Policy Context Pairing rule to artifact-policy inquiries.
  **Who:** Homegrown protocol maintainer.
  **Gate:** When an inquiry evaluates whether a protocol-owned operation should create a file.
  **Why:** Helps avoid over-weighting a local rule that is itself being tested.

### DEFERRED

- **What:** Decide the exact source-file placement for the prevention package.
  **Gate:** Revive when a maintenance task is opened to edit MVL+, loop diagnosis, Navigation warm-up, or artifact-materialization rules.
  **Why if revived:** This diagnostic proves the rules needed, but exact placement needs a source-edit pass that reads the live files at edit time.

## Reasoning

The Operation Output Contract Gate survived because it directly addresses the core mechanism. The prior loop needed to ask whether `route_memory_review.md` was the canonical output of Route Memory Review. It did not need a generic preference for more files.

The Bloat Control Layer Gate survived because it preserves both sides of the corrected answer. It keeps Homegrown explicitness, but it also keeps anti-bloat discipline by forcing the run/no-run question before output is made optional.

The Operational Memory Critique Guard survived because the prior Critique used the wrong decisive dimensions. Artifact proportionality matters, but it cannot be the only critical dimension when the artifact records current interpretation of old operational memory.

The Artifact-Policy Context Pairing candidate was refined rather than treated as a primary fix. More reading alone would not have solved the issue, because the active local Navigation policy itself matched the weak prior answer. The useful version is narrower: when a local policy is being evaluated, treat it as both evidence and suspect.

The "mandatory file for every Navigation run" candidate was killed. It overcorrects. Explicit artifacts should record meaningful operations; they should not manufacture empty records when no full Route Memory Review ran.

The "no source edit, rely on human correction memory" candidate was killed. It fails the exact durability need that the user raised. A private memory of the correction is not a Homegrown process rule.

The main contradiction across the two inquiries was reconciled by separating trigger policy from output policy. The prior inquiry had a legitimate concern about artifact bloat. The corrected inquiry had a legitimate concern about invisible load-bearing state. Both concerns fit once bloat is controlled by deciding whether Route Memory Review should run, while the output remains mandatory when it runs.

## Open Questions

### Monitoring

After the next three artifact-policy MVL+ inquiries, check whether the new gates prevented optional-storage framing without causing unnecessary artifact creation.

### Blocked

Exact source-file placement is blocked until a maintenance/materialization task chooses whether the guardrails belong in MVL+, `loop_diagnose.md`, Navigation warm-up rules, artifact-materialization rules, or a small shared peripheral prompt.

### Refinement Triggers

Reopen this finding if future Route Memory Review runs produce `route_memory_review.md` for cases where no old Navigation memory was actually reviewed.

Reopen this finding if future MVL+ or loop-diagnose runs again recommend inline-only output for a meaningful operation that affects later Navigation, protocol state, or operational memory.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity

corrected_path:
devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity

human_correction:
The user rejected the rule "create route_memory_review.md only when durable handoff matters" and said this is not how the codebase works because Homegrown enforces explicitness and creates Markdown artifacts for meaningful operations.

optional_context:
The prior inquiry correctly renamed the operation toward Route Memory Review, but still treated the saved file as adaptive storage. The corrected inquiry moved bloat control to trigger policy: do not run Route Memory Review unless old route memory matters, but if full review runs, write `route_memory_review.md`.

diagnostic_goal:
Identify what the prior loop likely missed about Homegrown's explicit-artifact culture and the distinction between operation output and storage convenience. Diagnose whether the weakness was in codebase-context intake, sensemaking boundary construction, innovation candidate testing, critique weighting, or conclusion synthesis. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

</details>
