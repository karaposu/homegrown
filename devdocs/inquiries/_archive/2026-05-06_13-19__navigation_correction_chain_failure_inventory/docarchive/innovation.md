# Innovation: Navigation Correction Chain Failure Inventory

## User Input

`devdocs/inquiries/2026-05-06_13-19__navigation_correction_chain_failure_inventory/_branch.md`

## Seed

Seed type: failure + preparation.

The user needs a list of failures now, but the deeper causal work will happen later through `homegrown/protocols/loop_diagnose.md`.

The innovation problem is output shape:

```text
How can the answer be detailed enough for later diagnosis, cautious enough not to overclaim, and concrete enough that the user can run prompts directly?
```

## Mechanism Outputs

### 1. Lens Shifting

Generic variation:

- Treat the answer as a postmortem.

Focused variation:

- Treat the answer as a diagnostic backlog. Each item is an evidence-backed candidate for a later correction-chain diagnosis.

Contrarian variation:

- Treat the answer as a navigation map of failures rather than a failure list.

Surviving output:

Use diagnostic-backlog framing. It makes prompts and priorities natural.

### 2. Combination

Generic variation:

- Combine failure list and evidence table.

Focused variation:

- Combine typed failure inventory, correction-edge map, and ready-to-run prompt blocks.

Contrarian variation:

- Combine all seven inquiries into one large `loop_diagnose` prompt.

Surviving output:

The typed inventory plus pairwise prompts survives. One aggregate prompt is useful only for cross-chain naming/authority themes.

### 3. Inversion

Generic variation:

- Instead of diagnosing root causes now, prepare the minimum objects needed to diagnose later.

Focused variation:

- Invert "what went wrong?" into "what evidence would a diagnostic run need?"

Contrarian variation:

- Do not provide prompts; only list failures and let the user frame diagnostics later.

Surviving output:

The prompt set is part of the value. The user explicitly asked for ready-to-run prompts.

### 4. Constraint Manipulation

Generic variation:

- Add constraint: every failure must have chain location, type, evidence, and confidence.

Focused variation:

- Add constraint: every prompt must follow `loop_diagnose.md` input contract exactly.

Contrarian variation:

- Remove caution and assign likely failed disciplines directly.

Surviving output:

Use strict fields and confidence labels. Do not assign exact failed discipline except as diagnostic goal.

### 5. Absence Recognition

Generic variation:

- Missing object: a correction-edge table.

Focused variation:

- Missing object: a "run these first" priority order.

Contrarian variation:

- Missing object: immediate maintenance candidate list.

Surviving output:

Add priority order. Defer maintenance candidates until diagnostics produce them.

### 6. Domain Transfer

Generic variation:

- Borrow from bug triage: severity, evidence, reproduction, next diagnostic.

Focused variation:

- Borrow from incident review: distinguish symptom, contributing factor, confirmed failure, and follow-up investigation.

Contrarian variation:

- Borrow from legal evidence packets: each failure gets exhibits and claims.

Surviving output:

Use incident-review style: confirmed failure, policy refinement, near-failure, diagnostic hypothesis.

### 7. Extrapolation

Generic variation:

- If this failure inventory is reused later, it should still be understandable without this chat.

Focused variation:

- If several `loop_diagnose` runs are performed, their outputs may reveal MVL+ maintenance patterns. The prompt set should keep correction chains narrow so results are comparable.

Contrarian variation:

- If each prompt is too narrow, repeated runs may miss the recurring meta-pattern.

Surviving output:

Provide pairwise prompts for precision plus one aggregate cross-chain naming/boundary prompt.

## Candidate Designs

### Candidate A - Flat Failure List

Shape:

```text
1. Naming failed
2. Trigger failed
3. Index failed
...
```

Strength:

- Fast to read.

Weakness:

- Loses evidence, confidence, and correction-chain roles.
- Not enough to run `loop_diagnose.md` safely.

Verdict: KILL.

### Candidate B - Typed Failure Inventory

Shape:

```markdown
| Failure | Chain Location | Type | Evidence | Confidence | Diagnostic Use |
```

Strength:

- Cautious and scan-friendly.
- Separates failure from refinement.

Weakness:

- Does not itself provide runnable prompts.

Verdict: SURVIVE as first half of answer.

### Candidate C - Prompt Set Only

Shape:

```text
Run these prompts...
```

Strength:

- Directly actionable.

Weakness:

- Hides why the prompts exist.
- User asked to list failures too.

Verdict: KILL as standalone; preserve as second half of answer.

### Candidate D - One Aggregate Loop Diagnose Prompt

Shape:

```text
Diagnose all seven inquiries at once.
```

Strength:

- Captures recurring meta-patterns.

Weakness:

- Violates `loop_diagnose.md`'s clean correction-chain model unless roles are normalized.
- Too broad to isolate affected stage or maintenance candidate.

Verdict: REFINE.

Refinement:

Use only for cross-chain naming/boundary pattern after pairwise diagnostics, not as the primary diagnostic.

### Candidate E - Pairwise Prompt Set

Shape:

One prompt per correction edge:

```text
$MVL+
Use homegrown/protocols/loop_diagnose.md.
prior_path: ...
corrected_path: ...
human_correction: ...
optional_context: ...
diagnostic_goal: ...
```

Strength:

- Matches protocol input contract.
- Makes prior/corrected roles unambiguous.
- Keeps evidence small enough for one diagnostic inquiry.

Weakness:

- More prompts for the user to choose from.

Verdict: SURVIVE.

### Candidate F - Immediate Maintenance Candidate List

Shape:

```text
Patch MVL+ to do X, patch Sensemaking to do Y...
```

Strength:

- Feels useful.

Weakness:

- Overreaches. `loop_diagnose.md` is the correct place to infer affected stage and maintenance candidates.

Verdict: KILL for now.

### Candidate G - Priority-Ordered Diagnostic Backlog

Shape:

```text
Run first:
1. Index-before-search
2. File necessity
3. Preflight wording
...
```

Strength:

- Helps the user decide what to run first.
- Keeps prompts actionable.

Weakness:

- Priority can imply certainty if not explained.

Verdict: SURVIVE with evidence-based priority labels.

## Assembly Check

Best assembly:

```text
Evidence coverage note
  -> typed failure inventory
  -> correction edge map
  -> recommended diagnostic priority
  -> ready-to-run pairwise loop_diagnose prompts
  -> one optional aggregate naming/boundary prompt
  -> guardrails
```

Emergent value:

- The user gets the failure list now.
- The later diagnostic runs get clean input contracts.
- The answer remains cautious about root cause.
- The prompt set is practical.

## Proposed Failure Types

Use these types:

- `confirmed_failure`
- `policy_refinement`
- `near_failure_repaired_in_run`
- `diagnostic_hypothesis`
- `recurring_risk`

Use these confidence labels:

- `HIGH`: explicit correction or multiple artifacts converge.
- `MEDIUM`: artifacts support the claim but exact role or scope is ambiguous.
- `LOW`: mostly chat-context or cross-chain inference.

## Proposed Prompt Priority

### Priority 1 - Most Isolated High-Signal Diagnostics

1. `past_navigation_memory_file_index_feasibility -> past_navigation_memory_index_vs_search`
   - Why first: clearest explicit correction and concrete missed alternative.

2. `prior_map_overlay_artifact_necessity -> route_memory_review_file_necessity`
   - Why first: clearest explicitness-culture miss.

3. `route_memory_review_trigger_boundary -> route_memory_preflight_reevaluation`
   - Why first: clearest naming/operation-boundary issue.

### Priority 2 - Phase And Trigger Diagnostics

4. `route_memory_preflight_reevaluation -> early_stage_always_full_route_memory_review`
   - Why second: important but partly refinement, not pure failure.

5. `route_memory_review_file_necessity -> route_memory_review_trigger_boundary`
   - Why second: trigger proxy correction is clear, but exact prior-path role is slightly broader.

### Priority 3 - Bridge And Cross-Chain Diagnostics

6. `early_stage_always_full_route_memory_review -> past_navigation_memory_file_index_feasibility`
   - Why third: index feasibility follows from source detection pressure, but it is less clearly a correction of the prior inquiry.

7. Cross-chain naming/boundary prompt.
   - Why third: useful for recurring pattern after pairwise evidence exists.

## Prompt Template

Use this shape:

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path: <earlier weak inquiry folder>
corrected_path: <later corrected inquiry folder>
human_correction:
<faithful correction signal>

optional_context:
<why these two are linked; any surrounding chain notes>

diagnostic_goal:
Identify evidence-backed hypotheses for what the prior loop likely missed, which stage or framing step may have failed, what confidence each hypothesis has, and what maintenance candidates or evaluation gates follow. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

## Innovation Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: yes. Five mechanisms converge on typed failure inventory plus pairwise prompt set.

Survivors tested: 7 / 7.

Failure modes observed: none. Premature maintenance recommendations were killed; single aggregate diagnosis was refined rather than adopted.

Overall: PROCEED.
