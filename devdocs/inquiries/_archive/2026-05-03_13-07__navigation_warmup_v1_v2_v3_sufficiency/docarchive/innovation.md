# Innovation: Navigator Warm-Up v1/v2/v3 Sufficiency

## User Input

Inspect the three planned Navigator warm-up files and determine whether they are good enough, what is missing, and whether recency needs another warm-up step.

## Seed

The v1/v2/v3 routine is simpler and more usable than a large protocol, but it risks missing Navigation-ready currentness unless recency/current frontier is made explicit.

## Mechanism 1 - Lens Shifting

### Generic

View the warm-up not as documentation generation but as **session memory construction**.

### Focused

Make each output answer: "What should Navigation now know without asking the user to restate it?"

### Contrarian

Do not optimize for perfect project summary. Optimize for next-move readiness, even if some low-relevance context is skipped.

## Mechanism 2 - Combination

### Generic

Combine the three files into a staged routine:

```text
v1 summary -> v2 direction -> v3 movement traces
```

### Focused

Add a small shared handoff:

```text
After v1/v2/v3, Navigation consumes:
- summary
- destination/intermediate goals
- selected traces
- current frontier
- confidence/staleness warnings
```

### Contrarian

Keep `navigation_context_intake.md` only as a tiny wrapper/index, not as the main protocol.

## Mechanism 3 - Inversion

### Generic

Instead of asking "what more should warm-up read?", ask "what should warm-up stop producing?"

### Focused

v3 should stop writing every possible trace. It should enumerate candidates, then write only Navigation-relevant traces.

### Contrarian

Instead of creating a recency command, make oldness/freshness a property every warm-up output must declare.

## Mechanism 4 - Constraint Manipulation

### Generic

Add constraint: no new heavy stage unless repeated dogfood proves the need.

### Focused

Add constraint: current-frontier section must be produced from the same read context used by v1/v2.

### Contrarian

Add constraint: the routine must be useful even if v3 is skipped. That forces v1/v2 to carry enough currentness for lightweight sessions.

## Mechanism 5 - Absence Recognition

### Generic

Missing artifact: a "current frontier" view.

### Focused

Missing fields:

- recent changes that still matter;
- corrected/superseded findings;
- active gates/blockers;
- artifacts created but not yet dogfooded;
- stale outputs;
- what Navigation should not rely on.

### Contrarian

The hidden absence may be "warm-up freshness," not recency. The system needs to know when previous archaeology outputs can be reused.

## Mechanism 6 - Domain Transfer

### Generic

From engineering onboarding: summary first, architecture second, traces third is a proven staged context-loading pattern.

### Focused

From incident response: add a "current situation" section that says what changed, what is active, and what requires attention now.

### Contrarian

From archaeology: dates are strata, not interpretation. A dated layer still needs an archaeologist to explain what it means.

## Mechanism 7 - Extrapolation

### Generic

As Homegrown grows, "read all findings" will become expensive.

### Focused

The routine will need a freshness heuristic:

```text
read recent findings first;
pull older findings only when they are referenced, superseding, foundational, or contradicted.
```

### Contrarian

If the project becomes large enough, recency may become a separate index-building operation. But that should be extracted from dogfood evidence, not assumed now.

## Survivor Candidates

### Candidate A - Add `Recent / Current Frontier` To v1 Or v2

Description:

Add a required section that lists:

- recent changes;
- active decisions;
- active artifacts;
- corrected/superseded items;
- open gates/blockers;
- stale or untrusted context;
- what Navigation should pay attention to now.

Test:

- **Novelty:** moderate; common in incident/status reporting, new as required warm-up lens here.
- **Scrutiny survival:** survives; dates alone do not provide interpretation.
- **Fertility:** high; can later become a separate command if needed.
- **Actionability:** high; direct edit to v1 or v2.
- **Mechanism independence:** high; found by lens shifting, absence recognition, domain transfer, and extrapolation.

Verdict: **Survives.**

### Candidate B - Add A Tiny Session Handoff Wrapper

Description:

Use a short wrapper or note:

```text
Run v1/v2/v3 once per Navigation session.
Reuse outputs unless source set changed or outputs are stale.
Navigation consumes these outputs as session context.
```

Test:

- **Novelty:** low, but useful.
- **Scrutiny survival:** survives; prevents per-question misuse.
- **Fertility:** medium; can replace the heavy protocol index later.
- **Actionability:** high.
- **Mechanism independence:** medium.

Verdict: **Survives.**

### Candidate C - Constrain v3 Trace Volume

Description:

v3 should enumerate candidate traces for all categories, then write only selected traces based on Navigation relevance, uncertainty, risk, and recent movement.

Test:

- **Novelty:** low-to-medium.
- **Scrutiny survival:** survives; otherwise v3 may become too expensive.
- **Fertility:** high; gives v3 practical control.
- **Actionability:** high.
- **Mechanism independence:** high; found by inversion, constraint manipulation, and extrapolation.

Verdict: **Survives.**

### Candidate D - Create `navigator-warmup-recent.md` Now

Description:

Add a fourth command dedicated to recent changes.

Test:

- **Novelty:** low.
- **Scrutiny survival:** weak now; it may duplicate v1/v2 reads.
- **Fertility:** medium.
- **Actionability:** medium.
- **Mechanism independence:** low; mostly absence recognition.

Verdict: **Refine / defer.** Create only after dogfood shows current-frontier needs independent execution.

## Assembly Check

The best assembly is:

```text
v1 = broad orientation + current frontier
v2 = destination / intermediate goals / attempts / positioning
v3 = selected project movement traces
wrapper = once-per-session run rule + freshness + Navigation handoff
```

This assembly keeps the user's simple command-family direction while preserving the safety properties that `navigation_context_intake.md` was trying to provide.

## Mechanism Coverage Telemetry

- **Generators applied:** 4/4.
- **Framers applied:** 3/3.
- **Convergence:** yes. Six mechanisms converge on "add current-frontier/freshness and handoff without adding a heavy fourth stage yet."
- **Survivors tested:** 4/4.
- **Failure modes observed:** none significant. No premature evaluation; no single-mechanism trap.
- **Overall:** PROCEED with refinements.
