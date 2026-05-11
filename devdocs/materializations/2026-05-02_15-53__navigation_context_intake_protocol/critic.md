# Critic: navigation_context_intake_protocol

## Verdict

Proceed after minor mitigations. No High risks found.

## Risks

### Medium - Protocol Could Become Too Abstract

Risk: A controller protocol that only names profiles and stages may not actually help a session warm up.

Impact: Navigation would still require the user to explain what to read.

Affected area: `homegrown/protocols/navigation_context_intake.md`

Mitigation: Include concrete output sections, mode-specific read behavior, and profile-specific stage outputs.

### Medium - Codebase Commands Could Be Overgeneralized

Risk: The existing archaeology commands are code-specific. If the protocol implies they work for all artifact types, non-code context will be misread.

Impact: False confidence during project-state Navigation.

Affected area: source profile definitions.

Mitigation: State that the existing commands are only for `source_profile: codebase`; define separate project/artifact/thinking-state stages.

### Medium - Finding-First Compact Mode Could Become False Completeness

Risk: Compact mode could read recent `finding.md` files and present the result as complete.

Impact: Navigation may resurrect killed ideas or miss outcome evidence.

Affected area: Compact mode.

Mitigation: Require confidence limits and escalation triggers to Standard/Deep.

### Low - New Protocol May Add Ceremony

Risk: The protocol could add more steps before Navigation.

Impact: User burden may increase if every small Navigation request requires Deep/Full intake.

Affected area: mode selection.

Mitigation: Define Compact as cheap and explicitly allow minimal use with missing-context warnings.

### Low - Future Command Extraction Could Fragment The System

Risk: Future project-state warm-up command files may duplicate protocol invariants.

Impact: Maintenance burden.

Affected area: extraction gates.

Mitigation: Require repeated dogfood traces, stable procedure, no invariant duplication, and controller remains entry point.

## Required Plan Adjustments

- Make source-profile definitions explicit.
- Include `project/artifact/thinking-state` language, with `business_strategy` only as a subtype/profile.
- Include Compact confidence warning.
- Include extraction gates.
- Include after-first-use outcome review gate.

## Gate Result

No unresolved High risks. Medium risks are addressed by the planned protocol sections.
