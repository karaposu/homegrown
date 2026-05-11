# Materialization Trace: navigation_context_intake_protocol

## Source

```yaml
authority: user_request + findings
user_anchor: "so we can create homegrown/protocols/navigation_context_intake.md now?"
source_paths:
  - devdocs/inquiries/2026-05-02_15-09__next_load_bearing_navigation_warmup_context_loading/finding.md
  - devdocs/inquiries/2026-05-02_15-35__navigation_context_intake_warmup_archaeology_pattern/finding.md
  - homegrown/protocols/artifact_materialization.md
```

## Classification

```yaml
artifact_type: protocol
operation_intent: create
risk_class: medium
selected_mode: standard
target_path: homegrown/protocols/navigation_context_intake.md
write_set:
  - homegrown/protocols/navigation_context_intake.md
  - devdocs/materializations/2026-05-02_15-53__navigation_context_intake_protocol/
```

Medium risk was selected because this is a new Homegrown protocol that future Navigation work may load.

## Contract

The created protocol must:

- define Navigation context intake as pre-Navigation warm-up;
- preserve the boundary between context preparation and Navigation enumeration;
- define source profiles: `codebase`, `artifact_set`, `project_state`, `business_strategy`, `mixed`, `other`;
- define Compact, Standard, Deep, and Full intake modes;
- preserve the staged unlock: orientation summary -> structural map -> behavior/movement/evidence traces;
- reuse existing codebase archaeology commands for `source_profile: codebase`;
- define project/artifact/thinking-state behavior for non-code artifacts;
- define a current-state brief output;
- define trace and outcome-review gates;
- include extraction gates for future standalone commands.

The created protocol must not:

- edit Navigation files;
- create standalone project-state warm-up commands;
- create a Navigation Observer or selector;
- touch `.codex`;
- treat business strategy as the whole non-code layer.

## Records Created

- `devdocs/materializations/2026-05-02_15-53__navigation_context_intake_protocol/desc.md`
- `devdocs/materializations/2026-05-02_15-53__navigation_context_intake_protocol/step_by_step_impl_plan.md`
- `devdocs/materializations/2026-05-02_15-53__navigation_context_intake_protocol/dynamic_critic_prompt.md`
- `devdocs/materializations/2026-05-02_15-53__navigation_context_intake_protocol/critic.md`
- `devdocs/materializations/2026-05-02_15-53__navigation_context_intake_protocol/materialization_trace.md`

## Files Changed

- `homegrown/protocols/navigation_context_intake.md`

## Validation

Planned checks:

- verify target file exists;
- verify required anchors exist with `rg`;
- verify ASCII-only content;
- run structural checker if available.

Actual checks:

- `test -f homegrown/protocols/navigation_context_intake.md`: passed;
- `rg` anchor check for source profiles, modes, stages, current-state brief, handoff, outcome gate, extraction gates, and failure modes: passed;
- `rg` anchor check for codebase command reuse and project/artifact/thinking-state language: passed;
- `rg -n "[^[:ascii:]]" ...`: passed with no non-ASCII matches;
- `bash tools/structural_check.sh homegrown/protocols/navigation_context_intake.md protocol`: failed because `tools/structural_check.sh` does not exist.

## Deviations From Plan

- Structural checker could not run because the checker script is absent from this repo.

## Outcome

`PASS`

Limitation: validation used file presence, anchor checks, ASCII checks, and manual structural review. The planned structural checker was unavailable.

## Follow-Up Review Gate

`after_first_use`

After this protocol is used to produce a current-state brief and Navigation uses that brief to select or recommend a move, run `homegrown/protocols/outcome_review.md` on whether the protocol reduced user context-steering burden or improved Navigation quality.
