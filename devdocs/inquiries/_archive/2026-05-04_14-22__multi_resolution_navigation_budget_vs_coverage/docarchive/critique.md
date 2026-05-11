# Critique: Multi-Resolution Navigation Budget Vs Coverage

## User Input

```text
Did the prior multi-resolution Navigation runner finding overstate the risk of many expansions, and should `max_expansions` be treated as a resumable batch/frontier control rather than a limit that reduces Navigation coverage?
```

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Coverage Preservation | Critical | The design must not hide, discard, or silently filter discovered Navigation routes. |
| Execution Control | High | The design must prevent uncontrolled child-map materialization when the user does not request exhaustive traversal. |
| Resumeability | High | Unrun candidates must be visible and runnable later. |
| No-Selection Boundary | Critical | Scheduling cannot become final route choice or implicit commitment. |
| Readability | High | A future reader must understand what was expanded, what remains pending, and why. |
| Conceptual Clarity | High | Terms must not imply a coverage cap when they mean execution budget. |
| Implementation Simplicity | Medium | The design should be protocol-sized now and runner-sized later. |

Dimension validation: these dimensions match the sensemaking anchors: coverage, frontier, batch, scheduling, resume, composition, and no final selection.

## Phase 1: Fitness Landscape

### Viable Region

Designs that:

- enumerate all expansion candidates;
- expand either all candidates under explicit exhaustive mode or a batch under budgeted mode;
- preserve unexpanded candidates as pending;
- explain scheduling separately from selection;
- produce composition and run trace.

### Dead Region

Designs that:

- use `max_expansions` as a permanent cap;
- hide out-of-policy or unexpanded routes;
- treat top-N as final route selection;
- use depth alone with no frontier/resume/composition.

### Boundary Region

Designs that:

- support sampling, but only if sampling is explicit and labeled coverage-sacrificing;
- use the name `max_expansions`, but clearly define it as current-run batch size;
- allow exhaustive mode, but only with trace and composition.

### Unexplored Region

Exact CLI shape and concrete file layout remain unexplored. They are not needed to answer this inquiry but matter for materialization.

## Phase 2: Candidate Verdicts

### Candidate A: Hard `max_expansions` Cap

**Prosecution:** This directly violates coverage preservation. It makes non-expanded routes disappear or become second-class without preserving them as runnable frontier.

**Defense:** It is simple and prevents output explosion.

**Collision:** Simplicity does not overcome the critical failure. Navigation's purpose is broad route enumeration; a hard cap makes the runner a hidden selector.

**Verdict:** KILL.

**Kill seed:** Keep the execution budget, but move it after full frontier enumeration and preserve unrun candidates.

### Candidate B: Batch-Size Budget With Persistent Frontier

**Prosecution:** It adds artifacts and protocol complexity. The runner must maintain statuses correctly or it creates a false sense of coverage.

**Defense:** It satisfies the user’s exact requirement: AI can pick the next N paths to expand while unrun paths remain visible and runnable later.

**Collision:** The complexity is real but justified because it protects critical dimensions: coverage preservation, resumeability, and no-selection boundary.

**Verdict:** SURVIVE.

**Caveat:** Prefer `batch_size` or `max_batch_expansions` over `max_expansions` to prevent semantic drift.

### Candidate C: Explicit Exhaustive Mode

**Prosecution:** It can create many files and heavy output.

**Defense:** Sometimes the user wants exactly that. Full multi-resolution coverage is legitimate when explicitly requested.

**Collision:** The risk is operational, not conceptual. Trace and composition are sufficient guardrails.

**Verdict:** SURVIVE.

**Caveat:** Exhaustive mode should be explicit, not the default.

### Candidate D: Sampled Mode

**Prosecution:** Sampling intentionally reduces coverage and can hide important routes.

**Defense:** It may be useful for quick reconnaissance or when the user explicitly asks for representative exploration.

**Collision:** Sampling is valid only as a declared coverage-sacrificing mode.

**Verdict:** REFINE.

**Refinement:** Allow only with language like `coverage_mode: sampled` and an explicit warning that unexpanded routes are not fully covered.

### Candidate E: AI Top-N As Final Route Selection

**Prosecution:** This violates Navigation's boundary. It turns scheduling into commitment.

**Defense:** It reduces user burden by narrowing choices.

**Collision:** Reducing final choice is not Navigation's job. That belongs to user judgment, MVL, selector work, or materialization planning.

**Verdict:** KILL.

**Kill seed:** AI may order the next expansion batch, but the rest of the frontier must remain pending.

### Candidate F: AI Top-N As Scheduling Policy

**Prosecution:** Users may misread scheduled-first as most important.

**Defense:** The risk is controllable if the scheduling policy and ordering reasons are explicit and pending routes remain visible.

**Collision:** This survives if output labels scheduling clearly and composition separates `expanded` from `selected`.

**Verdict:** SURVIVE.

**Caveat:** Use terms like `scheduled for this batch`, not `chosen`.

### Candidate G: Coverage Ledger / Frontier Artifact

**Prosecution:** It is an extra artifact that may become stale.

**Defense:** Without it, the runner cannot guarantee that unrun paths remain visible or resumable.

**Collision:** The ledger is load-bearing. Staleness is handled by run trace and resume rules; absence of a ledger is worse.

**Verdict:** SURVIVE.

**Caveat:** The ledger must include statuses and reasons, not just names.

## Phase 3.5: Assembly Check

The surviving assembly is:

```text
frontier-first multi-resolution Navigation runner/protocol
  - enumerate full expansion frontier
  - record every candidate with parent identity, status, and reason
  - choose coverage_mode: exhaustive | budgeted | sampled
  - apply batch_size only in budgeted mode
  - use scheduling_policy for next-batch ordering
  - write child maps under output_root
  - write composition_output
  - preserve pending candidates for resume
  - state no_final_selection
```

### Assembly Prosecution

This may be too much machinery before the first real run. The user may need only a simple manual child-map convention first.

### Assembly Defense

The assembly can be expressed first as a protocol, not automated infrastructure. The load-bearing concepts are few: frontier, batch, pending, composition, resume. These are exactly the concepts needed to avoid the user's objection.

### Assembly Collision

The assembly survives as a protocol-level correction. It should not immediately become a complex installed runner.

**Assembly Verdict:** SURVIVE.

## Coverage Map

| Concern | Covered? | Notes |
|---|---|---|
| Does breadth matter? | Yes | Breadth is desired coverage. |
| Is depth-only enough? | Yes | No. It lacks horizontal execution/resume control. |
| Is `max_expansions` acceptable? | Yes | Only as batch size/current-run execution budget. |
| Should unrun routes remain runnable? | Yes | This is mandatory. |
| Can AI pick top N? | Yes | Only as scheduling, not final selection. |
| Should exhaustive traversal exist? | Yes | Explicit mode with trace/composition. |
| Should sampling exist? | Partially | Only explicit and coverage-sacrificing. |
| Is exact command syntax settled? | No | Deferred to protocol/materialization. |

## Signal

TERMINATE.

The question is answered. A clean survivor exists: `max_expansions` should be reframed or renamed as a current-run batch-size control, backed by a full frontier ledger and resume semantics. It must not be a coverage limit.

## Convergence Telemetry

Dimension coverage: strong. Critical dimensions were coverage preservation and no-selection boundary; both were explicitly tested.

Adversarial strength: strong. The strongest counterargument against the survivor is extra protocol complexity, and it does not defeat the need for frontier preservation.

Landscape stability: stable. Candidate regions are clear: hard caps and hidden selection are dead; batch frontier and exhaustive mode survive; sampling is boundary/refine.

Clean SURVIVE exists: yes.

Failure modes observed: none.

Overall: PROCEED.
