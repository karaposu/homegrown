# Exploration: MVL Compact Prevention Without Core Changes

## Mode And Entry Point

Artifact exploration with a signal-first entry point.

Signal: compact MVL/MVL+ execution happened even though the runner prompts already contain sequential-execution language. The user corrected the scope: source-of-truth files are under `homegrown/`, and narrow edits to MVL/MVL+ peripheral/rules sections are allowed; core loop rewrites and sub-skill rewrites are not.

## Cycle 1: Scan Source Runner Prompts

### Scanned

- `homegrown/MVL+/SKILL.md`
- `homegrown/MVL/SKILL.md`

### Found

`homegrown/MVL+/SKILL.md` already has a strong anti-batching sentence near the top:

```text
(run mvl skills one by one , not at once... and do not use subagents!, And the order is skill run, write it's file, go the next skill and so on. Not run all skills and write all docs...)
```

It also contains:

- an `EXECUTE PIPELINE` section requiring E -> S -> D -> I -> C;
- a Discipline Transition Protocol requiring spec load, output save, structural check, and `_state.md` update;
- Rule 8 saying not to run skills in parallel or with subagents to save time or token.

`homegrown/MVL/SKILL.md` contains:

- an `EXECUTE PIPELINE` section requiring S -> I -> C;
- a Discipline Transition Protocol requiring spec load, output save, structural check, and `_state.md` update;
- rules requiring full SIC loop and `_state.md` as source of truth.

But classic MVL does not appear to have the same top-level anti-batching sentence or equivalent Rule 8 found in MVL+.

### Signals

- MVL+ already says the key thing in natural language, so the problem is not simply absence of an anti-batch prompt.
- MVL classic is weaker at the peripheral/rules layer, so any prevention should probably harmonize MVL and MVL+.
- Both prompts rely on "run structural check," but the repo currently lacks `tools/structural_check.sh`.

### Resolution Decision

Zoom in on the enforcement gaps around existing rules. The prompts already describe sequence, but they do not define enough observable invalid states.

### Frontier State

Advancing. Major prompt regions are scanned; enforcement details remain partly unmapped.

### Confidence Update

- Confirmed: MVL+ already contains explicit anti-batching text.
- Confirmed: MVL classic contains sequential protocol but lacks MVL+'s extra anti-batching emphasis.
- Scanned: runner prompt structure.

## Cycle 2: Probe Artifact Lifecycle And Prior Failure

### Scanned

- `homegrown/protocols/conclude.md`
- `devdocs/inquiries/2026-05-05_17-27__compact_mvl_execution_trigger_diagnosis/finding.md`

### Found

CONCLUDE says it reads root-level discipline outputs, writes `finding.md`, then moves discipline outputs into `docarchive/`.

The prior compact-failure finding established:

- the prior compact run wrote all outputs together;
- prior discipline files were already in `docarchive/`;
- the same-second timestamps and one-patch trace prove batching;
- missing `tools/structural_check.sh` was a guardrail gap, not a root cause;
- the surviving prevention concept was "each discipline as a visible transaction."

### Signals

- There is a clear artifact lifecycle that can become an invariant: discipline files live in inquiry root until CONCLUDE.
- Direct-to-`docarchive/` discipline outputs before a visible root-stage lifecycle should be treated as invalid during active execution.
- The previous finding's "visible transaction" idea can be refined into prompt-level and/or tooling-level prevention.

### Resolution Decision

Zoom out to map prevention layers. The useful question is not "add a sentence or not?" but "which layer can make compact execution hard to do and easy to detect?"

### Frontier State

Stable around artifact lifecycle. Prevention layers still need inventory.

### Confidence Update

- Confirmed: CONCLUDE owns archive movement.
- Confirmed: prior failure bypassed visible root-output lifecycle.
- Inferred: artifact lifecycle invariants are stronger than more warning text alone.

## Cycle 3: Scan Prevention Layers

### Scanned

Possible prevention surfaces:

1. **Runner prompt rules:** narrow edits to `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`.
2. **Sub-skill prompts:** `explore`, `sense-making`, `decompose`, `innovate`, `td-critique`.
3. **CONCLUDE protocol:** artifact lifecycle and finalization guard.
4. **Structural checker tooling:** `tools/structural_check.sh`.
5. **State ledger convention:** `_state.md` history entries after each discipline.
6. **External wrapper/harness:** a command or script that enforces transitions outside the prompt.

### Found

Runner prompt rules are relevant and allowed if edits are narrow.

Sub-skill prompts are not the right place for the fix. The failure was in the runner's orchestration of disciplines, not in any single discipline's reasoning framework.

CONCLUDE already encodes the correct lifecycle. It may not need a major change, but the runner can refer to the lifecycle as an invariant.

Structural checker tooling is missing. Restoring it would help, but checker absence alone cannot enforce skill loading, state updates, or no batching.

`_state.md` history is already treated as source of truth. It can become the durable transaction ledger without adding a new artifact type.

An external wrapper/harness could enforce sequence mechanically, but that is a larger system change and may be unnecessary if the immediate need is prompt/protocol hardening.

### Signals

- The best near-term prevention is probably a narrow runner-rule addition, not a core rewrite.
- The rule should specify invalid write patterns, not just repeat "sequential."
- MVL+ already has warning text; the missing piece is operational invariant language.
- MVL classic needs parity because compact SIC batching can fail the same way.

### Resolution Decision

Probe candidate invariant structure in the next discipline rather than editing immediately.

### Frontier State

Stable. Prevention layers are mapped at enough resolution for Sensemaking.

### Confidence Update

- Confirmed: runner rules are the natural edit surface.
- Confirmed absent: need to edit discipline sub-skill prompts for this failure.
- Scanned: external wrapper as possible but heavier option.

## Jump Scan: Opposite Direction

### Scanned

Assumption: maybe existing prompts themselves caused the problem by being too long, too procedural, or too easy to satisfy as a checklist.

### Found

There is a real prompt-design weakness, but not that the prompts are "bad" in the core-loop sense. The prompts say the correct thing, but they phrase compliance mostly as instructions. They do not make invalid states explicit enough:

- "All discipline outputs created in one patch" is not named as invalid.
- "Discipline outputs appear in `docarchive/` before root-stage CONCLUDE" is not named as invalid.
- "Structural checker missing" does not have a required fallback path.
- "`_state.md` updated only once at the end" is not named as invalid.

### Signal

The existing prompts are not the root problem, but they are under-specified at the enforcement/invariant layer.

## Structural Map

### Territory Overview

1. **Homegrown MVL+ runner:** confirmed strong sequential intent, including explicit anti-batching language.
2. **Homegrown MVL runner:** confirmed sequential intent, weaker peripheral anti-batching emphasis.
3. **CONCLUDE protocol:** confirmed root-output-then-archive lifecycle.
4. **Prior failure finding:** confirmed compact execution was an assistant-side protocol collapse.
5. **Prevention surfaces:** runner rules, state ledger, checker fallback, lifecycle invariant, optional tooling.

### Inventory

- `homegrown/MVL+/SKILL.md`: already says run skills one by one, write each file before next, and do not use subagents.
- `homegrown/MVL/SKILL.md`: already says run S -> I -> C sequentially and update `_state.md`, but lacks MVL+'s stronger anti-batching rule text.
- `homegrown/protocols/conclude.md`: says CONCLUDE reads root discipline outputs, writes `finding.md`, then archives discipline outputs.
- `devdocs/inquiries/2026-05-05_17-27__compact_mvl_execution_trigger_diagnosis/finding.md`: says the previous failure was not missing prompt intent; it was execution collapse, with missing structural checker as a guardrail gap.

### Signal Log

- Probed: Homegrown MVL+ anti-batch text.
- Probed: Homegrown MVL classic asymmetry.
- Probed: CONCLUDE lifecycle.
- Probed: prior compact-failure finding.
- Deferred: exact patch wording for MVL/MVL+ until Innovation/Critique determines whether it should be added.

### Confidence Map

- Confirmed: source-of-truth prompts are in `homegrown/`.
- Confirmed: MVL+ already contains explicit anti-batch language.
- Confirmed: MVL classic lacks equivalent top-level anti-batch/rule emphasis.
- Confirmed: CONCLUDE owns archive movement after discipline outputs exist in the root.
- Confirmed: previous compact failure bypassed visible state transitions.
- Inferred: adding another generic prompt is insufficient.
- Inferred: narrow invariant/rules edits are likely useful.
- Unknown: whether a mechanical wrapper should be implemented now or deferred.

### Frontier State

Stable. The important regions have been mapped. Remaining unknowns are design choices for Sensemaking and Innovation, not missing source territory.

### Gaps And Recommendations

Sensemaking should decide whether the existing prompts are the problem or merely incomplete at the enforcement layer.

Decomposition should separate prevention into prompt-rule, state-ledger, checker-fallback, lifecycle, and tooling layers.

Innovation should generate candidate fixes that respect the allowed change surface: narrow runner/rules edits are allowed, core-loop and sub-skill rewrites are not.
