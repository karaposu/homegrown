# Branch: Task-Define Process Layer

## Question

- **Subject** — the Task-Define discipline's **process layer**: the runtime procedure that the meaning-layer's commitments need to be executed as.
- **Action** — design (DEVELOP) the procedure from scratch, harmonized with the already-settled meaning layer.
- **Level** — discipline-level (within Task-Define), with one cross-discipline edge: the Task-Define → Exploration dispatch boundary.
- **Observation targets** — list each as a separate item:
  1. The runtime entry / receive contract — what Task-Define receives as input on invocation.
  2. The 4-stage intra-discipline flow committed in the meaning layer (statement-level Itemize → per-item Deconstruct + Rephrase + Meta-question → MultiScope shadow-pass → seed assembly): how its phases sequence and what fires at each.
  3. Per-operation firing logic — when and how each of the 5 operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase) is invoked, with what input, producing what output.
  4. The lightweight-stance enforcement mechanism — how the process honors the 6-criterion lightweight stance (no over-procedurization, no mandatory ceremonies at every operation, etc.).
  5. The NOT-list enforcement mechanism — how the process avoids drifting into the 5 excluded categories (relational meaning across items, candidate generation, exploration of project surroundings, ranking/priority, decomposition into pieces with interfaces).
  6. The seed-emission output shape — what concrete artifact Task-Define emits to its downstream (angles + meaning-layer meta-questions, per the meaning-layer commitment).
  7. The dispatch-signal mechanism that ends Task-Define and hands off to Exploration — the dynamic boundary via meta-question-answers-as-signal (per the user's framing in the meaning-layer inquiry: "Task-Define = produce seeds; Explore = take those seeds, go find project-goal-relevant context in the surroundings. this part, is dynamic").
  8. Convergence / exit criteria — when does the process stop iterating within Task-Define.
  9. Self-assessment output shape — what telemetry / verdict Task-Define emits at end-of-run (analogous to Surfacing's PROCEED / FLAG / RE-RUN).
  10. Failure-mode hooks — process-layer failure modes (analogous to Surfacing's LAYER 1 / LAYER 2 framework) that the procedure exposes for detection at runtime.
- **Deliverable shape** — a process-layer design: a runtime procedure with phases, per-phase mechanisms, gates, signals, exit criteria, harmonized with the meaning-layer commitments and ready to be authored into the runtime spec (R1) and process-layer reference text.

**Question:** What is the process-layer design for Task-Define — the runtime procedure (entry contract, 4-stage flow, per-operation firing logic, lightweight-stance enforcement, NOT-list enforcement, seed-emission output, Exploration dispatch signal, convergence criteria, self-assessment verdict, failure-mode hooks) — such that the meaning-layer commitments execute coherently at runtime without contradicting the discipline's intrinsic features?

## Goal

- **Criterion** — three qualities:
  - **Meaning-layer harmony**: every process choice traces back to a meaning-layer commitment (no procedural choice contradicts the meaning-layer's verb, the refined Itemize, the lightweight stance, the NOT-list, the dynamic Task-Define/Explore relationship).
  - **Authorability**: the design is concrete enough that a downstream author can write the runtime spec from it without re-litigating procedural decisions.
  - **Lightweight**: the design honors the meaning-layer's lightweight-stance commitment — no mandatory ceremonies, no procedural overhead that the meaning layer's 6 criteria forbid.
- **Use case** — directly enables R1 (author Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md`), R5 (empirically test Task-Define on real task statements), and the Exploration-dispatch refinement question (R11 in routelister).
- **Desired outcome** — a process-layer design the user can either approve as ready for runtime-spec authoring, or refine on specific points. Output is procedure + mechanism + signals + telemetry, not theory.
- **What would fail** — a design that:
  - re-litigates the meaning layer instead of building on it (e.g., re-asks what Itemize is);
  - over-procedurizes (mandatory checks at every operation; multi-phase pipelines where a single perceptive pass suffices) — violates the lightweight stance;
  - leaves the Task-Define → Exploration dispatch under-specified (the dynamic boundary is the meaning-layer's signature commitment; an under-specified process there fails the most distinctive part);
  - silently re-introduces premature Itemize-split (the LOOP_DIAGNOSE-revealed defect);
  - is too abstract to author from (e.g., "Task-Define iterates until coherent" with no firing logic).

## Source Input

```text
author Task-Define process layer (DEVELOP)

lets do this
```

## Scope Check

Question covers goal. The question's 10 observation targets directly map to the goal's criteria (meaning-layer harmony covered by targets 2-6; authorability covered by targets 1, 7-9; lightweight enforcement covered by target 4; failure-mode authoring covered by target 10). No specific-vs-pattern ambiguity — single discipline, single layer, single inquiry.

## Layer Commitment

**Primary layer: Process.** The question targets steps / procedure / mechanism / gates / loop. The deliverable is a runtime procedure spec, not a redefinition of what Task-Define IS (meaning) and not a sections-and-schema reorganization of the spec artifact (structural).

**Other layers explicitly out of scope for THIS run:**
- **Meaning** — already settled in `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` (which already incorporates the 17-01 Itemize refinement via direct edits). This inquiry INHERITS the meaning layer; it does not re-litigate it. If a meaning-layer ambiguity surfaces during process design, flag as a frontier; do not redesign in-flight.
- **Structural** — the runtime spec's sections-and-schema (`cognitive_harness/task-define/references/task-define.md` artifact shape) is downstream of this inquiry. The process design here is the substrate; the structural layer organizes its presentation in the runtime spec. R1 (in routelister) is the structural-authoring task that consumes this process design.

**Layer ordering rationale:** meaning → process → structural is the natural design dependency. Meaning fixes what the operation IS; process fixes what it DOES at runtime; structural fixes how the spec artifact ORGANIZES that. Skipping process directly to structural would force structural choices to encode procedural decisions implicitly — which is what current discipline specs already do, and which the meaning-layer commitment "process layer is out of scope" deferred precisely to keep this layer pure.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` — the settled meaning layer for Task-Define (which already integrates the 17-01 Itemize refinement via direct edits at the user's request).
- **RELATED:** `devdocs/inquiries/2026-06-03_17-01__task_define_itemize_refinement/finding.md` — the Itemize refinement (PERCEIVE; default emit one; (subject, action, deliverable-shape) tuple test). Process design for Itemize must honor this refinement.
- **RELATED:** `devdocs/inquiries/2026-06-04_01-00__loop_diagnose__itemize_default_split_miss/finding.md` — the LOOP_DIAGNOSE finding that diagnosed the original Itemize defect's root and surfaced MC1/MC2/MC3 maintenance candidates. Relevant context for understanding what the process must NOT silently re-introduce.
- **RELATED:** `devdocs/inquiries/2026-06-04_02-30__structural_mc1_meaning_layer_harmony_with_sensemaking/finding.md` — the structural MC1 design for sensemaking's Load-bearing concept test. Relevant only as a precedent for "process-layer commitments must harmonize with the meaning layer of the discipline they implement," and as a structural reference for naming/audit patterns. Not a direct input to Task-Define process design.
