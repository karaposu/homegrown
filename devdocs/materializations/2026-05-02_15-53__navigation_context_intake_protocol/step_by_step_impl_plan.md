# Step-by-Step Implementation Plan: navigation_context_intake_protocol

## What Is The Task

Create `homegrown/protocols/navigation_context_intake.md` as the controller protocol for Navigation warm-up. It should prepare a Navigation-ready current-state brief from codebase, artifact-set, project-state, business-strategy, mixed, or other sources.

## Desired State

Homegrown has one protocol entry point for context intake before Navigation. The protocol controls source profiles, read modes, staged warm-up, output shape, trace, and handoff. Future standalone warm-up commands remain deferred behind extraction gates.

## High-Level Summary

| Step | Description | Expected Output |
| --- | --- | --- |
| 1 | Define protocol identity and boundaries. | Loading note, purpose, non-goals, when to use. |
| 2 | Define input contract. | Normalized fields for Navigation requests. |
| 3 | Define source profiles. | Codebase, artifact_set, project_state, business_strategy, mixed, other. |
| 4 | Define intake modes. | Compact, Standard, Deep, Full. |
| 5 | Define staged warm-up ladder. | Orientation -> structural map -> behavior/movement/evidence traces. |
| 6 | Define profile-specific stage behavior. | Codebase reuses existing arch commands; project/artifact/thinking-state gets non-code stages. |
| 7 | Define current-state brief. | Required output sections. |
| 8 | Define trace, handoff, outcome gate, extraction gates, failure modes. | Operational controls for use and future growth. |

## Per-Step Details

### Step 1 - Protocol Identity

- Files touched: `homegrown/protocols/navigation_context_intake.md`
- Safe in nature: yes, new file.
- Hardness: 2/5.
- Validation: required title and loading note exist.

### Step 2 - Input Contract

- Files touched: target protocol only.
- Safe in nature: yes.
- Hardness: 2/5.
- Validation: `rg` finds "Input Contract".

### Step 3 - Source Profiles

- Files touched: target protocol only.
- Safe in nature: yes.
- Hardness: 2/5.
- Validation: `rg` finds all source profile ids.

### Step 4 - Intake Modes

- Files touched: target protocol only.
- Safe in nature: yes.
- Hardness: 2/5.
- Validation: `rg` finds Compact, Standard, Deep, Full.

### Step 5 - Staged Warm-Up

- Files touched: target protocol only.
- Safe in nature: yes.
- Hardness: 3/5.
- Validation: `rg` finds orientation summary, structural map, movement/evidence traces.

### Step 6 - Profile-Specific Behavior

- Files touched: target protocol only.
- Safe in nature: yes.
- Hardness: 3/5.
- Validation: `rg` finds arch-small-summary, arch-intro, arch-traces-2 and project/artifact/thinking-state terms.

### Step 7 - Current-State Brief

- Files touched: target protocol only.
- Safe in nature: yes.
- Hardness: 2/5.
- Validation: `rg` finds Current-State Brief and required section names.

### Step 8 - Controls

- Files touched: target protocol only.
- Safe in nature: yes.
- Hardness: 3/5.
- Validation: `rg` finds handoff, outcome review, extraction gates, failure modes.

## Repair Path

If validation shows missing sections, patch only `homegrown/protocols/navigation_context_intake.md` and update the trace. If the protocol becomes too large, do not extract files yet; shorten or defer details to future extraction gates.
