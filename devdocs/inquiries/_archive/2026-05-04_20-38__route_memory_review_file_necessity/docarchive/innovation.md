# Innovation: Route Memory Review File Necessity

## User Input

The user challenged the prior inline-default answer and asked whether `route_memory_review.md` should be generated, with exact benefit, path, structure, trigger, timing, and timing rationale.

## Seed

The earlier "save only for durable handoff" decision conflicts with Homegrown's explicitness and Markdown artifact culture.

## Generated Candidates

### Candidate A - Mandatory Artifact On Operation

Whenever Route Memory Review runs, it writes `route_memory_review.md`. Bloat is controlled by not running Route Memory Review when old route memory is irrelevant.

Tests:

- Novelty: medium; refines prior decision.
- Scrutiny survival: strong; fits Homegrown's artifact pattern.
- Fertility: high; gives clear spec patch.
- Actionability: high.
- Mechanism independence: supported by constraint manipulation, inversion, absence recognition, and domain transfer.

### Candidate B - Inline Default, Saved On Durable Handoff

Keep the prior finding. Same-session small reviews can be inline; saved file appears only when cross-session durability matters.

Tests:

- Novelty: already proposed.
- Scrutiny survival: weak against the user's explicitness correction.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: weak in this repo context.

### Candidate C - Always Generate For Every Navigation Run

Every Navigation invocation writes a `route_memory_review.md`, even local or bounded ones.

Tests:

- Novelty: low.
- Scrutiny survival: weak; creates empty ceremony when no prior route memory is involved.
- Fertility: low.
- Actionability: high but noisy.
- Mechanism independence: weak.

### Candidate D - Store Route Memory Review Inside New Navigation Map

Navigation map includes a `Route Memory Used` section and no separate file.

Tests:

- Novelty: medium.
- Scrutiny survival: partial; useful as a summary, but not sufficient as authoritative pre-map context.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: moderate.

### Candidate E - Route Memory Review Folder With Review And Handoff

Create a navigation context folder that contains `route_memory_review.md`; later it may also contain a trace or source copy if needed.

Tests:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high; compatible with sync briefs and future context artifacts.
- Actionability: high.
- Mechanism independence: strong.

## Mechanism Coverage

### Lens Shifting

Under a generic documentation lens, inline review seems enough. Under Homegrown's operational-artifact lens, a saved file is the default for meaningful operations.

### Combination

Combine old-map immutability + freshness preflight + materialization trace culture -> Route Memory Review as a navigation-context artifact.

### Inversion

Instead of "avoid bloat by not saving," invert to "avoid bloat by not running the operation unless it matters." This preserves explicitness.

### Constraint Manipulation

Add constraint: every operation that changes future interpretation must leave an inspectable artifact. This selects Candidate A/E.

### Absence Recognition

Without the file, there is no durable place to record "old route X is retired because finding Y killed it" before Navigation consumes that fact.

### Domain Transfer

Outcome reviews, materialization traces, and `_frontier.md` all separate source artifacts from generated current-state control artifacts. Route Memory Review should follow the same pattern.

### Extrapolation

As Navigation becomes more automated and multi-session, inline review becomes brittle. A saved artifact scales better.

## Assembly Check

The best assembly is Candidate A plus Candidate E:

```text
Route Memory Review is trigger-limited but artifact-mandatory.
When it runs, it writes a navigation-context folder containing route_memory_review.md.
Navigation consumes that file and may summarize it inside the resulting navigation.md.
```

## Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: YES - multiple mechanisms converge on artifact-mandatory, trigger-limited review.
- Survivors tested: 2 / 5.
- Failure modes observed: none.

**Overall: PROCEED** (sufficient coverage and tested survivor).
