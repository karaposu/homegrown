# Materialization Trace: artifact_materialization_protocol

## Source

```yaml
authority: user_request
path: conversation on 2026-05-02
anchor: "oaky create artifact_materialization.md then"
supporting_findings:
  - devdocs/inquiries/2026-05-02_12-55__artifact_materialization_lifecycle_subprotocols/finding.md
  - devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md
  - devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/finding.md
  - enes/materialization_lifecycle.md
```

## Contract

Create `homegrown/protocols/artifact_materialization.md` as the first operational controller protocol for turning authorized decisions into concrete files.

The protocol must contain:

- source-authority rules;
- artifact type classification;
- operation intent profiles for create, edit, rewrite, refactor, extend, extract, delete, and deprecate;
- risk facts and risk classes;
- Compact, Standard, and Full lifecycle modes;
- lightweight content lifecycle for low-risk Markdown artifacts;
- task-desc/task-plan/dynamic-critic/repair lifecycle for code and behavior-affecting artifacts;
- validation and trace requirements;
- after-use review gate using `homegrown/protocols/outcome_review.md`;
- subprotocol extraction gates.

The protocol must not:

- create separate operation subprotocol files in v1;
- make Compact mode a loophole for loaded protocol, skill, runner, or behavior changes;
- replace MVL/MVL+, Navigation, Reflect, Loop Diagnose, or Outcome Review.

## Classification

```yaml
artifact_type: protocol
operation_intent: create
risk_class: medium
selected_mode: bootstrap_compact
target_path: homegrown/protocols/artifact_materialization.md
write_set:
  - homegrown/protocols/artifact_materialization.md
  - devdocs/materializations/2026-05-02_15-01__artifact_materialization_protocol/materialization_trace.md
```

Medium risk was selected because the created artifact is a protocol that future Homegrown work may load. Bootstrap Compact was used because this protocol did not exist yet and the user explicitly requested its creation after the shaping inquiries.

## Content Contract

```yaml
purpose: Provide a controlled decision-to-files materialization protocol.
must_contain:
  - universal input contract
  - source authority verification
  - artifact type classification
  - operation intent classification
  - risk assessment
  - compact/standard/full modes
  - validation and outcome fields
  - trace requirements
  - outcome review gate
  - subprotocol extraction gates
must_not_contain:
  - automatic permission to edit arbitrary files
  - separate operation subprotocols
  - claims that materialization decides truth
relationships:
  - homegrown/protocols/outcome_review.md
  - homegrown/contracts/alignment_control.md
  - enes/materialization_lifecycle.md
reader_success: A future user or runner can decide how to safely create, edit, rewrite, refactor, or implement an artifact from an authorized source.
```

## Tiny Plan

1. Read the current shaping finding and relevant local protocol style.
2. Create `homegrown/protocols/artifact_materialization.md` as a single controller protocol.
3. Create this bootstrap trace.
4. Run lightweight structural checks by reading the generated files and checking path presence.

## Risk Scan

- Compact mode could accidentally become a loophole. Mitigation: protocol explicitly bans Compact for loaded instruction, runner, behavior, broad rewrite, or unclear-validation cases.
- Markdown protocol may be treated as harmless. Mitigation: protocol states that Markdown can be medium/high risk when it affects operation.
- Future operation profiles could fragment too early. Mitigation: protocol includes extraction gates requiring repeated traces.
- Automated structural checker is not available in this repo. Mitigation: record manual validation and missing checker honestly.

## Implementation Notes

Created:

- `homegrown/protocols/artifact_materialization.md`
- `devdocs/materializations/2026-05-02_15-01__artifact_materialization_protocol/materialization_trace.md`

No existing files were edited.

## Validation

Planned checks:

- verify generated protocol file exists;
- verify generated trace file exists;
- manually review protocol sections against the materialization findings;
- run structural checker if available.

Actual checks:

- `test -f homegrown/protocols/artifact_materialization.md`: passed;
- `test -f devdocs/materializations/2026-05-02_15-01__artifact_materialization_protocol/materialization_trace.md`: passed;
- `rg` section check for required anchors in `artifact_materialization.md`: passed;
- manual skim against the materialization findings: passed;
- `test -f tools/structural_check.sh`: failed because no structural checker exists at that path.

## Outcome

`PASS`

Limitation: no automated structural checker was available in this repo. Validation used file-presence checks, section-anchor checks, and manual review.

## Follow-Up Review Gate

Use `homegrown/protocols/outcome_review.md` after the first real artifact is materialized through this protocol.
