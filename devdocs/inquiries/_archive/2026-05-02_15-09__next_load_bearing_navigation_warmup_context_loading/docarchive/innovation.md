# Innovation: next_load_bearing_navigation_warmup_context_loading

## User Input

```text
Generate candidate next load-bearing developments that reduce the user's developer burden, especially around Navigation, session warm-up, context loading, recency-targeted loading, and whether this should be a protocol, part of Navigation, or a separate discipline.
```

## Seed

The seed is a burden signal:

```text
The user is still doing the current-state loading and movement-space steering manually.
```

Direction/valuation: the next artifact should make Homegrown more self-carrying without adding a runtime larger than the system can understand.

## Mechanism 1 - Lens Shifting

### Generic Variation

Evaluate the problem as "Navigation quality" rather than "context loading."

Output: improve Navigation's method so it asks for or discovers missing context while producing the map.

Test: actionable, but risks hiding input preparation inside Navigation.

### Focused Variation

Evaluate the problem as "Navigation input boundary."

Output: create a protocol that prepares a Navigation-ready current-state brief before Navigation runs.

Test: strong. It isolates failure attribution: bad map could be caused by bad intake or bad Navigation.

### Contrarian Variation

Evaluate the problem as "selection burden," not Navigation burden.

Output: build a selector protocol that chooses among Navigation outputs.

Test: premature. Selection depends on values and outcome calibration, which are not mature enough yet.

## Mechanism 2 - Combination

### Generic Variation

Combine artifact materialization + Navigation.

Output: a Navigation-to-materialization handoff inside `artifact_materialization.md`.

Test: useful but too narrow. It helps after a move is selected, not before Navigation knows current state.

### Focused Variation

Combine Navigation + context intake + outcome review.

Output: `navigation_context_intake.md` produces a current-state brief, Navigation maps moves, outcome review later checks whether the selected move worked.

Test: strong. It completes the small loop from state loading to reviewed movement.

### Contrarian Variation

Combine branch protocol + context intake.

Output: every branch automatically includes a context-read manifest.

Test: useful later, but not enough for independent project-level Navigation.

## Mechanism 3 - Inversion

### Generic Variation

Assumption: "The user should tell the AI what to read."

Inversion: "The repo should tell the AI what to read."

Output: a protocolized read-set contract.

Test: strong. This directly relaxes user burden.

### Focused Variation

Assumption: "More context makes Navigation better."

Inversion: "Less context makes Navigation better if the less is source-authorized and staged."

Output: tiered loading: base, recent, authority, targeted deep.

Test: strong. It handles context cost without finding-only blindness.

### Contrarian Variation

Assumption: "Warm-up should prepare Navigation."

Inversion: "Navigation should produce warm-up requests, not consume a warm-up."

Output: Navigation begins with an explicit missing-context request when source confidence is low.

Test: partial. Good fallback behavior, but it still leaves the first run underloaded.

## Mechanism 4 - Constraint Manipulation

### Generic Variation

Add constraint: v1 must not create a new discipline.

Output: protocol-first context intake.

Test: strong. Keeps taxonomy stable.

### Focused Variation

Add constraint: v1 must not read all Markdown.

Output: read tiers with escalation triggers.

Test: strong. Makes context economy explicit.

### Contrarian Variation

Remove constraint: allow reading all Homegrown `.md` files.

Output: "full warm-up" mode for rare high-stakes Navigation.

Test: viable as a Full mode, not default. It should be gated by high-risk movement decisions or repeated Navigation failure.

## Mechanism 5 - Absence Recognition

### Generic Variation

Missing artifact: a session warm-up protocol.

Output: `homegrown/protocols/session_warmup.md`.

Test: broad but may become vague.

### Focused Variation

Missing artifact: a Navigation-specific current-state brief contract.

Output: `homegrown/protocols/navigation_context_intake.md`.

Test: strongest. It names the immediate consumer and output.

### Contrarian Variation

Missing artifact: "what not to read" rules.

Output: an exclusion policy that prevents context bloat.

Test: useful as a section, not standalone.

## Mechanism 6 - Domain Transfer

### Generic Variation

Transfer from software bootstrapping.

Pattern: initialize environment before running the app.

Output: Navigation warm-up loads environment/state before Navigation starts.

Test: intuitive and useful.

### Focused Variation

Transfer from retrieval-augmented generation.

Pattern: retrieve small relevant set, cite sources, escalate on uncertainty.

Output: Navigation context intake creates a cited read-set and confidence limits.

Test: strong. It makes the output auditable.

### Contrarian Variation

Transfer from incident response.

Pattern: first produce a situation report, not a solution.

Output: `current_state_brief.md` as a situation report before Navigation.

Test: strong as the protocol's output shape.

## Mechanism 7 - Extrapolation

### Generic Variation

If Homegrown continues accumulating findings, the user will face increasing state-management burden.

Output: context intake becomes necessary before any serious Navigation.

Test: strong.

### Focused Variation

If branches, materializations, and outcome reviews accumulate, Navigation must read not only findings but movement history and used-result evidence.

Output: the protocol should include materialization trace and outcome-review tiers from v1.

Test: strong, but v1 can keep those tiers small.

### Contrarian Variation

If too many protocols accumulate, the system may spend more effort warming up than moving.

Output: add a "minimal mode" with a hard cap and missing-context warnings.

Test: strong as a guardrail.

## Candidate Set

### Candidate A - `navigation_context_intake.md`

Create a protocol that prepares a Navigation-ready current-state brief.

Core features:

- source authority and trigger classification;
- read tiers: base, recent, authority, targeted deep, full;
- finding-first but not finding-only;
- escalation triggers for `docarchive/`, traces, outcome reviews, and protocol files;
- output contract: current-state brief with read set, confirmed state, recent changes, open gates, movement signals, missing context;
- handoff: Navigation consumes the brief;
- trace: record what was read and why;
- promotion triggers: generalize or discipline-promote only after repeated use.

### Candidate B - Patch Navigation Itself

Edit Navigation so it includes a context-loading preface.

Strength: fewer files and less indirection.

Weakness: conflates input selection with movement enumeration and makes failures harder to diagnose.

### Candidate C - Generic `session_warmup.md`

Create a general protocol for all Homegrown tasks.

Strength: broad utility.

Weakness: too generic for v1; may become a vague context checklist.

### Candidate D - Full Navigation Observer Protocol

Create `navigation_observer.md` now.

Strength: matches prior breakthrough idea.

Weakness: larger than the current missing piece; observer reports need context intake anyway.

### Candidate E - Finding-Only Navigation Mode

Define a cheap mode where Navigation reads only recent `finding.md` files.

Strength: context efficient.

Weakness: false completeness. Misses critique kills, traces, protocol mechanics, and outcome evidence.

### Candidate F - Current-State Brief Convention Only

Create a lightweight `current_state_brief.md` template without a full protocol.

Strength: very small.

Weakness: does not define how to choose sources; likely moves burden from "what next?" to "what should be in the brief?"

### Candidate G - Selector Protocol

Create a protocol that chooses among Navigation directions.

Strength: directly targets decision burden.

Weakness: selection requires valuation and outcome calibration not yet ready.

## Candidate Testing

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism Independence | Initial Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| A - Navigation context intake | medium | high | high | high | high | SURVIVE |
| B - Patch Navigation | low | medium | medium | high | medium | REFINE/KILL |
| C - Generic warm-up | medium | medium | high | medium | medium | REFINE |
| D - Full observer | high | medium | high | medium | medium | DEFER |
| E - Finding-only mode | low | low | low | high | low | KILL as default; keep as Compact tier |
| F - Brief only | low | medium | medium | high | medium | REFINE into A |
| G - Selector | medium | low/medium | high | medium | low | DEFER |

## Assembly Check

The strongest assembly is:

```text
Candidate A - Navigation context intake
  includes Candidate E as a Compact finding-first tier
  includes Candidate F as the output brief
  defers Candidate D until after dogfood
  defers Candidate G until outcome evidence exists
```

This assembly is better than any individual candidate because it:

- gives Navigation the input it needs;
- controls context cost;
- avoids new-discipline complexity;
- preserves path to observer and selector;
- uses outcome review for evidence.

## Proposed Design Sketch

### File

```text
homegrown/protocols/navigation_context_intake.md
```

Plain-language alias: Navigation warm-up.

### Core Flow

```text
Navigation request
  -> classify run type
  -> choose read mode
  -> read base context
  -> read recent findings
  -> read authority/context links
  -> escalate to deep context when triggered
  -> write current-state brief
  -> run Navigation over brief
```

### Modes

| Mode | Use When | Reads |
| --- | --- | --- |
| Compact | quick low-risk "what next?" check | selected recent `finding.md` files + stable protocol index |
| Standard | normal project-level Navigation | recent findings, relevant protocols, branch/materialization/outcome records |
| Deep | fundamentals, corrections, repeated confusion, high-risk movement | Standard + `docarchive/`, critique outputs, related older chains |
| Full | rare global reset or major strategy scan | broad `.md` scan with explicit context budget warning |

### Output

```text
current_state_brief.md
```

or embedded report section:

```markdown
## Read Set
## Current Position
## Recent Changes
## Stable Authorities
## Open Gates
## Movement Signals
## Missing Context / Confidence Limits
## Recommended Navigation Prompt
```

### Dogfood Path

1. Materialize `navigation_context_intake.md` using `artifact_materialization.md`.
2. Use it immediately on current Homegrown state.
3. Run Navigation over the produced brief.
4. Select one move.
5. Materialize or branch that move.
6. Run outcome review after use.

## Mechanism Coverage Telemetry

- Generators applied: 4/4.
- Framers applied: 3/3.
- Convergence: YES. Lens shifting, combination, inversion, constraint manipulation, absence recognition, domain transfer, and extrapolation all converge on a Navigation-specific context-intake protocol.
- Survivors tested: 7/7 initial candidates tested.
- Failure modes observed: none severe. The main risk is early frame lock, mitigated by testing full observer, generic warm-up, finding-only, and selector alternatives.
- Overall: PROCEED.
