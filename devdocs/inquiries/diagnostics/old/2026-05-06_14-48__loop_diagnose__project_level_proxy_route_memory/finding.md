---
status: active
diagnoses: devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity
compares_with: devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary
uses_protocol: homegrown/protocols/loop_diagnose.md
---
# Finding: Loop Diagnose - Project-Level Proxy Route Memory

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

The diagnostic goal was specific: identify whether the prior loop used "project-level" or broad Navigation as a proxy for the real dependency, diagnose what it missed about bounded inputs that are themselves route-memory artifacts, and diagnose what it missed about Navigation needing one unified context-preparation flow.

## Finding Summary

- The prior inquiry did not mainly fail on the file rule. Its durable answer that a full Route Memory Review should write `route_memory_review.md` still holds.

- The prior inquiry likely failed by letting scale-shaped examples sit too close to trigger policy. It said old route memory matters, but its examples and handoff language made "bounded local Navigation" look like a skip case and "project-level stale or warmed context" look like the likely review case.

- The corrected trigger is source dependency, not Navigation size. Full Route Memory Review should run when the Navigation source set contains relevant old Navigation memory that needs current interpretation.

- A bounded input can still be old Navigation memory. Examples include a prior `navigation.md`, a local inquiry folder that contains a Navigation map, a `_frontier.md` ledger, or a prior `route_memory_review.md`.

- Navigation should have one context-preparation flow. Every Navigation run should record route-memory status and a reason. Full Route Memory Review remains conditional, and `route_memory_review.md` remains mandatory when the full review actually runs.

- The best-supported failure class is proxy-trigger leakage. The prior loop let an observable proxy, input scale, stand near the real decision variable, route-memory dependency.

- The failure attribution is mixed. The branch framed the question around file necessity, Sensemaking did not make a route-memory source taxonomy explicit, Innovation did not generate the universal-status middle path, Critique did not attack scale-as-proxy strongly enough, and CONCLUDE compressed examples into durable handoff language.

- The maintenance answer should be scoped. Patch Navigation route-memory policy and trigger-writing habits before considering global MVL+ changes.

## Correction Chain Summary

**Prior inquiry:** `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity`

The prior inquiry asked whether `route_memory_review.md` should be generated. Its main preserved answer was:

```text
If full Route Memory Review runs, write route_memory_review.md.
```

The prior inquiry also tried to control artifact bloat by controlling when the operation runs. That was reasonable in direction, but the trigger language was under-specified.

**Human correction:**

```text
The user said the model smelled because it seemed to make Route Memory Review run for big or project-level Navigation but not bounded Navigation, even though Navigation should be Navigation regardless of scale.
```

The correction matters because it points to a user-facing model problem. The user should not have to learn two Navigation modes, one for broad/project-level questions and one for bounded/local questions.

**Corrected inquiry:** `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary`

The corrected inquiry rejected project-level versus bounded as the structural boundary. It replaced that boundary with route-memory dependency:

```text
Every Navigation run checks route-memory status.
Full Route Memory Review runs only when relevant old Navigation memory may affect the new Navigation map.
```

The corrected inquiry is comparative evidence, not automatic ground truth. In this chain, though, it directly repairs the user's stated objection and explains the hidden variable the prior answer left fuzzy.

## Finding

Navigation, in this codebase, is the operation that prepares a current route map: what path the work should take next, what old routes are relevant, what is blocked, and what should be ignored. Navigation needs current context, but it can also be affected by old route memory from earlier Navigation runs.

Route Memory Review is a support operation before Navigation writes a new map. Its job is to reconcile old Navigation memory so stale routes do not get treated as current truth. For example, an old map might say "create a warm-up README" after a later finding killed that idea. A review should retire that route instead of resurrecting it.

The important distinction is this:

```text
File rule:
  If full Route Memory Review runs, write route_memory_review.md.

Trigger rule:
  Full Route Memory Review runs when old Navigation memory may affect the new Navigation map.
```

The prior inquiry answered the file rule well. It preserved Homegrown's explicit artifact culture by saying a meaningful full review should produce a durable Markdown artifact.

The prior inquiry did not define the trigger rule cleanly enough. It used phrases such as bounded local Navigation and project-level stale or warmed contexts as examples, but in durable handoff language those examples can start behaving like rules.

That is the failure. The prior loop did not clearly say "project-level is the formal trigger." The evidence does not support that stronger accusation. The better diagnosis is that project-level and bounded examples leaked into the operational handoff as a proxy for the real dependency.

The real dependency is whether the current Navigation source set contains relevant old Navigation memory. A source set can be broad or narrow. Size is only a likelihood hint.

A project-level Navigation run may not need full Route Memory Review if no relevant old Navigation memory exists.

A bounded Navigation run may need full Route Memory Review if the bounded input is itself old Navigation memory. A single file can be a prior `navigation.md`. A small inquiry folder can contain an old Navigation map. A `_frontier.md` ledger can carry old route state. A prior `route_memory_review.md` can be a compact memory handoff.

This is why the user was right to call the previous model messy. It made the reader ask, "Is this Navigation big enough to deserve review?" The cleaner model asks, "Does this Navigation depend on old Navigation memory?"

The corrected unified flow is:

```text
Every Navigation run:
  classify route-memory status
  record the status and reason

Only when status is review_needed:
  run full Route Memory Review
  write route_memory_review.md

Then:
  Navigation reads the current context plus any review output
  Navigation writes the new navigation.md
```

This keeps Navigation unified without forcing full review every time. The universal part is status classification. The conditional part is full reconciliation.

The most useful name for the old-memory input is `PastNavigationMemoryFile`. In plain terms, this means a prior file or folder that carries Navigation memory from an earlier run. The name should not imply age alone. A file matters only when it can affect the current route map.

## Failure Hypotheses

### Hypothesis 1: Scale examples leaked into trigger policy

**Affected stage:** mixed: Sensemaking, Decomposition, Critique, and CONCLUDE.

**Shortcoming type:** proxy-trigger leakage.

**Evidence from prior inquiry:** The prior finding preserved the rule "if Route Memory Review runs, write `route_memory_review.md`." It also used no-review examples such as bounded local Navigation and routed project-level stale or warmed contexts toward review when prior maps matter. The prior Decomposition interface also linked Freshness Preflight to whether "project-level context and prior maps matter."

**Evidence from human correction:** The user objected that Navigation should not split by big/project-level versus bounded scale.

**Evidence from corrected inquiry:** The corrected inquiry killed project-level-only triggering and bounded automatic bypass. It replaced them with route-memory dependency.

**Confidence:** HIGH.

**Why not stronger:** The prior artifacts do not prove a formal rule saying project-level is the trigger. They prove a weaker but still important failure: scale was allowed to act as a practical proxy in handoff language.

**Maintenance candidate:** Add a source-dependency trigger taxonomy for Route Memory Review.

**Evaluation gate:** The next Navigation route-memory policy patch must include both a bounded input that contains old Navigation memory and a project-level input with no relevant old Navigation memory.

### Hypothesis 2: Bounded inputs were treated as likely self-contained

**Affected stage:** Sensemaking and Innovation.

**Shortcoming type:** missing source taxonomy.

**Evidence from prior inquiry:** The prior inquiry treated bounded local Navigation as a no-review example, while using "old route memory matters" as a broad condition. It did not enumerate bounded files that are themselves route-memory artifacts.

**Evidence from human correction:** The user's objection was that bounded Navigation should not be structurally different from big Navigation.

**Evidence from corrected inquiry:** The corrected inquiry made bounded route-memory artifacts explicit, including old Navigation maps and other memory files.

**Confidence:** HIGH.

**Why not stronger:** The prior branch was focused on artifact necessity, not a full trigger taxonomy. That explains part of the miss, but does not remove it because the finding proposed Navigation routing behavior.

**Maintenance candidate:** Add a `PastNavigationMemoryFile` source taxonomy with examples independent of input size.

**Evaluation gate:** A future Navigation context-intake draft passes only if "bounded + old Navigation memory" can produce `review_needed`.

### Hypothesis 3: The prior loop missed the universal-status middle path

**Affected stage:** Innovation and Critique.

**Shortcoming type:** false binary between full review and no review.

**Evidence from prior inquiry:** The prior Critique correctly killed full review for every Navigation run because it would create meaningless files for no-source cases. It did not preserve a universal route-memory status check for every run.

**Evidence from human correction:** The user wanted Navigation to feel like one operation regardless of scale.

**Evidence from corrected inquiry:** The corrected inquiry introduced one flow where every Navigation run records route-memory status, but full review only runs when status is `review_needed`.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** The exact status mechanism was developed in the later trigger-boundary inquiry, so the prior loop may not have had that concept available yet. Still, the missed middle path explains the correction well.

**Maintenance candidate:** Add compact `route_memory_status` recording to Navigation context preparation.

**Evaluation gate:** The next three durable Navigation runs should each show a status and a reason, including at least one non-review case that does not write `route_memory_review.md`.

### Hypothesis 4: The file-focused branch let secondary routing claims escape under-specified

**Affected stage:** loop framing and CONCLUDE.

**Shortcoming type:** secondary operational claim leakage.

**Evidence from prior inquiry:** The branch question was about whether to generate `route_memory_review.md`, but the finding proposed patches to Navigation context intake and Navigation skill behavior. Those patches implied trigger behavior.

**Evidence from human correction:** The user corrected the implied trigger behavior, not the artifact rule itself.

**Evidence from corrected inquiry:** The corrected inquiry made trigger boundary the central question and produced a cleaner dependency rule.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** It is not only a CONCLUDE problem. The proxy appears earlier in Decomposition and Critique. CONCLUDE amplified it by making the wording durable.

**Maintenance candidate:** Add a final handoff guard: if a finding proposes routing behavior outside its main question, it must define the trigger structurally or mark trigger details deferred.

**Evaluation gate:** In the next five findings that propose changes outside their main question, each secondary operational claim must name its trigger or explicitly defer trigger policy.

### Hypothesis 5: Critique did not test for observable proxies replacing real dependencies

**Affected stage:** Critique.

**Shortcoming type:** missing evaluation dimension.

**Evidence from prior inquiry:** Prior Critique attacked empty artifacts and review-every-run bloat, but it did not separately attack whether bounded/project-level examples were replacing the real dependency.

**Evidence from human correction:** The human smell was specifically about the unnatural boundary.

**Evidence from corrected inquiry:** Corrected Critique killed project-level-only review and bounded automatic bypass.

**Confidence:** MEDIUM.

**Why not stronger:** The prior inquiry's main question was file generation, so a trigger-proxy critique dimension may not have been obviously required.

**Maintenance candidate:** For routing and trigger-policy critiques, add the question: "Is an observable proxy replacing the real dependency?"

**Evaluation gate:** Use this question on the next two trigger/routing policy inquiries and check whether it catches a concrete issue without adding irrelevant ceremony.

### Hypothesis 6: Durable examples were not labeled as likelihood hints

**Affected stage:** CONCLUDE and final wording.

**Shortcoming type:** example-to-rule drift.

**Evidence from prior inquiry:** The prior finding used examples such as bounded local Navigation and project-level stale contexts in the same area as proposed Navigation-routing changes.

**Evidence from human correction:** The user read those examples as a scale split in how Navigation operates.

**Evidence from corrected inquiry:** The corrected inquiry reframed scale as non-authoritative and dependency as authoritative.

**Confidence:** MEDIUM.

**Why not stronger:** Examples are not always rules, and the prior finding did include "when prior maps matter." The problem is where the examples appeared and what they implied in durable patch guidance.

**Maintenance candidate:** Add an example discipline guard for durable trigger/routing findings.

**Evaluation gate:** When a finding uses scale examples in trigger policy, it must also state the structural trigger and include a counterexample.

## Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
| --- | --- | --- | --- | --- |
| Mixed pipeline | Scale proxy near trigger policy | strong | high | Source-dependency trigger taxonomy |
| Sensemaking / Innovation | Missing bounded route-memory source taxonomy | strong | high | `PastNavigationMemoryFile` examples independent of size |
| Innovation / Critique | Missed universal-status middle path | medium-strong | medium-high | `route_memory_status` every Navigation run |
| Loop framing / CONCLUDE | Secondary routing claims under-specified | medium-strong | medium-high | Trigger-or-defer guard for secondary claims |
| Critique | Missing proxy-trigger dimension | medium | medium | Scoped proxy-trigger critique check |
| CONCLUDE | Examples not labeled as likelihood hints | medium | medium | Example discipline guard |

## Maintenance Candidates

### Candidate A: Source-Dependency Trigger Taxonomy

**What should change:** Route Memory Review trigger policy should be defined by source dependency:

```text
PastNavigationMemoryFile exists
  + relevant to the current Navigation question
  + needs current interpretation
  -> review_needed
```

**Likely affected file or protocol:** Navigation context-intake documentation or Navigation skill instructions that decide whether Route Memory Review runs.

**Risk class:** low-medium. The risk is adding terminology without concrete examples.

**Expected benefit:** Prevents input scale from becoming the decision rule.

**Evaluation gate:** Any patch must include examples where bounded input needs review and project-level input does not.

**Branch experiment:** yes, if this becomes a source edit.

### Candidate B: Universal Route-Memory Status Record

**What should change:** Every Navigation run should record route-memory status and reason. Full review should remain conditional.

**Likely affected file or protocol:** Navigation output structure or context-preparation protocol.

**Risk class:** medium. The risk is noisy output if the status field becomes verbose.

**Expected benefit:** Gives Navigation one user-facing flow while avoiding fake full-review artifacts.

**Evaluation gate:** Three durable Navigation runs should show compact status lines that explain review, skip, or consumed memory without ambiguity.

**Branch experiment:** yes.

### Candidate C: Bounded Route-Memory Regression Matrix

**What should change:** Add a small matrix to route-memory policy validation:

```text
bounded + old Navigation memory -> may be review_needed
bounded + no old Navigation memory -> no full review
project-level + old Navigation memory -> may be review_needed
project-level + no relevant old Navigation memory -> no full review
```

**Likely affected file or protocol:** Navigation route-memory docs, any future context-intake test checklist, or a finding template for trigger-policy changes.

**Risk class:** low.

**Expected benefit:** Prevents the exact miss from recurring.

**Evaluation gate:** The matrix appears in the next route-memory policy patch and is checked against examples.

**Branch experiment:** optional. It can be included with Candidate A.

### Candidate D: Example Discipline Guard

**What should change:** In durable trigger/routing findings, examples like "bounded" and "project-level" must be labeled as likelihood hints unless they are the actual trigger.

**Likely affected file or protocol:** CONCLUDE style rules or Navigation policy-writing guidance.

**Risk class:** medium. Applied too broadly, this would slow ordinary explanatory writing.

**Expected benefit:** Prevents examples from silently becoming rules.

**Evaluation gate:** Apply only to durable trigger/routing policy. Reassess after five such findings.

**Branch experiment:** maybe. Prefer local policy guidance first.

### Candidate E: Proxy Trigger Critique Dimension

**What should change:** For routing, trigger, mode-selection, and policy-boundary critiques, ask whether an observable proxy is replacing the real dependency.

**Likely affected file or protocol:** Critique guidance for trigger/routing inquiries, not necessarily global Critique.

**Risk class:** medium.

**Expected benefit:** Catches scale-proxy failures before they survive Critique.

**Evaluation gate:** Use on the next two trigger/routing inquiries. Keep it only if it finds real issues or clarifies a decision.

**Branch experiment:** yes, but scoped.

### Candidate F: Secondary Operational Claim Guard

**What should change:** If a finding's main question is not trigger policy but the finding proposes routing behavior, it must define the trigger structurally or explicitly mark trigger details deferred.

**Likely affected file or protocol:** CONCLUDE guidance.

**Risk class:** medium.

**Expected benefit:** Prevents under-specified side claims from becoming durable instructions.

**Evaluation gate:** Check the next five findings that include operational changes outside their main question.

**Branch experiment:** yes.

### Candidate G: No-Op Review Artifact For Every Skip

**Verdict:** rejected.

**Why rejected:** It confuses explicit status with a full review operation. A `route_memory_review.md` file should represent an actual full review, not a no-object skip.

**Revival gate:** Reopen only if compact status telemetry repeatedly fails audit and the failure cannot be solved by a lighter ledger.

### Candidate H: Broad MVL+ Proxy-Trigger Invariant

**Verdict:** rejected for now.

**Why rejected:** One Navigation correction chain does not justify a global MVL+ rule. This would risk turning every inquiry into broad proxy hunting.

**Revival gate:** Reopen only if 5 to 10 independent loop diagnoses show proxy-trigger substitution across unrelated domains.

## Next Actions

### MUST

- **What:** Patch or draft Route Memory Review trigger policy around `PastNavigationMemoryFile` source dependency, not project-level versus bounded scale.
  **Who:** Navigation route-memory docs or the next Navigation skill/protocol branch.
  **Gate:** Before the next durable Navigation route-memory policy is treated as canonical.
  **Why:** Prevents scale from becoming the route-review trigger.

- **What:** Add compact route-memory status recording to the Navigation context-preparation model.
  **Who:** Navigation output/context-intake design.
  **Gate:** Before automatic or repeated durable Navigation runs depend on prior maps.
  **Why:** Gives every Navigation run one flow while keeping full review conditional.

- **What:** Include the bounded/project-level source matrix in the next route-memory policy change.
  **Who:** The agent or branch editing Navigation route-memory policy.
  **Gate:** Same patch as the trigger taxonomy, or the first follow-up patch if split.
  **Why:** Forces the policy to handle bounded old-memory inputs and broad no-source contexts.

### COULD

- **What:** Add a scoped proxy-trigger question to Critique for routing and trigger-policy inquiries.
  **Who:** Critique guidance or a local checklist used by these inquiries.
  **Gate:** After it is tested on two trigger/routing inquiries.
  **Why:** It may catch the same class of proxy substitution earlier.

- **What:** Add a CONCLUDE backstop for secondary operational claims.
  **Who:** CONCLUDE guidance.
  **Gate:** After one or two more LOOP_DIAGNOSE findings confirm side-claim leakage is recurring.
  **Why:** It prevents findings from smuggling under-specified routing rules into durable docs.

### DEFERRED

- **What:** Add a broad MVL+ proxy-trigger invariant.
  **Gate:** Reopen only after 5 to 10 independent LOOP_DIAGNOSE findings show the same proxy-trigger substitution outside Navigation.
  **Why if revived:** A global rule would then have evidence beyond one route-memory correction chain.

- **What:** Generate `route_memory_review.md` for every skipped case.
  **Gate:** Reopen only if route-memory status telemetry proves insufficient for audit.
  **Why if revived:** A stronger audit artifact might be needed, but this evidence does not justify it now.

## Reasoning

The strongest survivor is the source-dependency trigger taxonomy. It directly repairs the user's correction because it asks what old Navigation memory is present and relevant, rather than asking whether the current Navigation request is large or small.

Universal route-memory status also survives. It is the middle path between two bad options. The first bad option is "full review only for big Navigation," which misses bounded old-memory files. The second bad option is "full review for every Navigation," which creates empty ceremony when no old memory exists.

The bounded route-memory regression matrix survives because it makes the missed case testable. It prevents a future policy from saying the right words while still skipping bounded inputs that are old Navigation memory.

The example discipline guard survives only with scope. It is useful when durable trigger policy uses examples, but it should not make ordinary explanatory examples heavy.

The proxy-trigger critique dimension survives only for routing and trigger policy. As a global critique dimension it would add friction without enough evidence. As a scoped check, it targets the exact failure.

The secondary operational claim guard survives as a backstop. The prior branch was about file necessity, yet it proposed Navigation routing behavior. That side claim needed trigger precision.

The no-op review artifact candidate was killed. This codebase values explicit Markdown artifacts, but explicitness should attach to meaningful operations. A skipped full review can be explicit as status. It does not need a fake full-review file.

The broad MVL+ proxy-trigger invariant was killed for now. LOOP_DIAGNOSE explicitly warns against broad fundamentals rewrites from one correction chain. The evidence supports scoped Navigation and trigger-policy maintenance.

The main contradiction resolved across the loop was this:

```text
Homegrown wants explicit durable artifacts.
But not every status check is a full operation.
Therefore:
  route_memory_status is universal;
  route_memory_review.md is mandatory only when full review runs.
```

Another resolved contradiction was this:

```text
Project-level runs often have old maps.
Bounded runs often look local.
But "often" is not a trigger.
Therefore:
  scale can be a search hint;
  source dependency decides review.
```

## Open Questions

### Monitoring

- After three durable Navigation runs using route-memory status, check whether the status field is clear enough to explain why full review did or did not run.

- After two trigger/routing inquiries use the proxy-trigger critique question, check whether it found useful issues or only added noise.

### Refinement Triggers

- Reopen broad MVL+ proxy-trigger maintenance only after 5 to 10 independent LOOP_DIAGNOSE findings show the same failure class across unrelated domains.

- Reopen no-op review artifact generation only if compact status telemetry fails audit in repeated Navigation runs.

## Diagnostic Verdict

**Overall:** ACTIONABLE.

- **Best-supported diagnosis:** The prior loop let project-level/bounded scale act as a practical proxy for route-memory dependency in Navigation handoff language.

- **Strongest maintenance candidate:** Source-Dependency Trigger Taxonomy plus Universal Route-Memory Status Record.

- **Main uncertainty:** Exact stage weighting. The evidence supports mixed attribution more than a single discipline blame.

- **Recommended next step:** Patch Navigation route-memory policy so `PastNavigationMemoryFile` source dependency decides full Route Memory Review, while every Navigation run records compact route-memory status.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity

corrected_path:
devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary

human_correction:
The user said the model smelled because it seemed to make Route Memory Review run for big or project-level Navigation but not bounded Navigation, even though Navigation should be Navigation regardless of scale.

optional_context:
The prior inquiry focused on whether `route_memory_review.md` should be generated and used trigger examples such as bounded local Navigation and old maps that matter. The corrected inquiry rejected project-level versus bounded as the structural boundary and replaced it with route-memory dependency.

diagnostic_goal:
Identify whether the prior loop used project-level or broad Navigation as a proxy for the real dependency. Diagnose what it missed about bounded inputs that are themselves route-memory artifacts, and about Navigation needing one unified context-preparation flow. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

</details>
