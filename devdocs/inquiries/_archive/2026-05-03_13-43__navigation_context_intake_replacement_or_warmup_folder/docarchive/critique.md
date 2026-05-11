# Critique: Navigation Context Intake Replacement Or Warm-Up Folder

## User Input

Evaluate whether to remove `navigation_context_intake.md`, make it use v1/v2/v3, or create `homegrown/protocols/navigation/` and put v1/v2/v3 there.

## Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | ---: | --- |
| Authority clarity | 30 | Only one detailed warm-up routine is active. |
| Taxonomy coherence | 25 | File placement matches Homegrown's discipline/protocol split. |
| Transition safety | 20 | Existing useful invariants and references are not lost abruptly. |
| Usability | 15 | The user and future agents can find and run the routine easily. |
| Scalability | 10 | The structure can grow without confusing namespaces. |

## Fitness Landscape

### Viable Region

Solutions where v1/v2/v3 own execution, Navigation owns the warm-up routine, and protocol-level files hold only small shared invariants.

### Dead Region

Solutions that keep two detailed warm-up authorities, delete safety invariants immediately, or create a second ambiguous Navigation namespace.

### Boundary Region

Temporary root files are acceptable only while the routine is being drafted. A retained `navigation_context_intake.md` is acceptable only if it is short and delegating.

### Unexplored Region

How the moved routine behaves after first real Navigator warm-up use.

## Candidate Verdicts

### Candidate A - Delete `navigation_context_intake.md` Now

#### Prosecution

Immediate deletion removes the duplicate authority, but it also discards session and handoff invariants before v3 is cleaned and before one real use proves the replacement.

#### Defense

Deletion is simple and avoids future confusion.

#### Collision

The defense is weaker because simplicity achieved by losing safety invariants is not a good transition.

#### Verdict

**KILL.**

Constructive output:

Delete later only after references are migrated and the new routine has been used successfully.

### Candidate B - Keep `navigation_context_intake.md` As-Is

#### Prosecution

This preserves the exact thing the user is trying to escape: a heavy parameterized protocol that competes with the simpler warm-up routine.

#### Defense

It contains useful completeness, read-set, and handoff logic.

#### Collision

The useful logic does not justify preserving the heavy execution shape.

#### Verdict

**KILL.**

Constructive output:

Extract the useful invariants into a much shorter wrapper.

### Candidate C - Shrink `navigation_context_intake.md` Into A Tiny Wrapper Around v1/v2/v3

#### Prosecution

The wrapper can become another layer of indirection, and the old filename may keep old mental models alive.

#### Defense

The wrapper solves transition safety. It keeps session boundary, freshness, handoff, and outcome review without duplicating the detailed warm-up steps.

#### Collision

Defense survives if the wrapper is strict: short, delegating, and explicitly non-authoritative for detailed execution.

#### Verdict

**SURVIVE WITH CONSTRAINT.**

Constructive output:

Keep it short. It should say:

```text
Detailed execution lives in v1/v2/v3.
Run once per session.
Rerun only when boundary changes, outputs are stale, or Navigation failed due missing context.
Navigation consumes outputs.
Preserve missing-context warnings.
Route selected actions through branch/materialization protocols.
Review after first real use.
```

### Candidate D - Create `homegrown/protocols/navigation/` And Put v1/v2/v3 There

#### Prosecution

This creates a second Navigation namespace beside `homegrown/navigation/`. It also mislabels runnable warm-up commands as protocol-layer artifacts.

#### Defense

The path is neat and makes Navigation-related protocols easy to group.

#### Collision

The defense is mostly aesthetic. The prosecution identifies a real taxonomy and future-discovery risk.

#### Verdict

**KILL FOR NOW.**

Constructive output:

Only consider protocol subfolders later if Homegrown adopts protocol subfolders generally and uses names that do not collide with discipline folders.

### Candidate E - Move v1/v2/v3 To `homegrown/navigation/warmup/`

#### Prosecution

Moving files introduces path churn and may make the routine seem too tightly tied to Navigation if other systems later use it.

#### Defense

Navigation is the consumer. Warm-up prepares Navigation's context. This path keeps support routines near the discipline that owns the use case and avoids the `protocols/navigation` collision.

#### Collision

Defense survives. If other consumers emerge later, a wrapper can point to the same routine.

#### Verdict

**SURVIVE.**

Constructive output:

Move after v3 cleanup, then update references or keep temporary root aliases.

### Candidate F - Keep v1/v2/v3 At Repo Root

#### Prosecution

Root files are drafting artifacts, not a stable Homegrown location. They will become harder to discover systematically.

#### Defense

They are easy for the user to see and edit right now.

#### Collision

The defense wins only temporarily.

#### Verdict

**REFINE.**

Constructive output:

Keep root files only until v3 is cleaned and the move plan is ready.

## Assembly Check

The strongest assembly is:

```text
Immediate:
  - finish cleaning navigation-project-warmup_v3.md
  - keep v1/v2/v3 at root while still actively editing

Next:
  - create homegrown/navigation/warmup/
  - move v1/v2/v3 there
  - add a tiny README/index with run order and session boundary
  - rewrite navigation_context_intake.md as a tiny wrapper pointing there

Later:
  - after first real use, decide whether to rename/remove the wrapper
```

## Coverage Map

| Concern | Covered? | Result |
| --- | --- | --- |
| Remove old file? | Yes | Not now. |
| Keep old file unchanged? | Yes | No. |
| Make old file use v1/v2/v3? | Yes | Yes, as tiny wrapper only. |
| Put warm-up in `homegrown/protocols/navigation/`? | Yes | No, avoid namespace confusion. |
| Better folder? | Yes | `homegrown/navigation/warmup/`. |
| Timing? | Yes | After v3 cleanup, before making routine canonical. |

## Signal

**TERMINATE** with ranked survivors.

Ranked outcome:

1. `homegrown/navigation/warmup/` as future home for v1/v2/v3.
2. `navigation_context_intake.md` as tiny transitional wrapper around that routine.
3. Root v1/v2/v3 as temporary drafting location.

## Convergence Telemetry

- **Dimension coverage:** strong. Authority clarity, taxonomy, transition safety, usability, and scalability were all evaluated.
- **Adversarial strength:** strong. Immediate deletion, unchanged retention, and `homegrown/protocols/navigation/` were killed.
- **Landscape stability:** stable. Survivors converge on a two-layer model: Navigation-owned routine plus protocol wrapper.
- **Clean survivor exists:** yes, with timing constraint.
- **Failure modes observed:** no rubber-stamping; no nitpicking. Self-reference risk is bounded by direct file-layout evidence.
- **Overall:** PROCEED.
