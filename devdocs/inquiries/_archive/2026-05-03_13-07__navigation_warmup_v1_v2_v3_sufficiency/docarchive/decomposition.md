# Decomposition: Navigator Warm-Up v1/v2/v3 Sufficiency

## Coupling Map

### Cluster A - Warm-Up Spine

Elements:

- `v1` broad project summary.
- `v2` direction/architecture.
- `v3` movement traces.

Coupling: strong internal sequence. `v2` depends on the broad context established by `v1`; `v3` depends on enough understanding from `v1` and `v2` to choose meaningful traces.

Boundary: the spine can be judged separately from exact wording cleanup.

### Cluster B - Non-Code Generalization

Elements:

- code-shaped phrases in all three files;
- "codebase" and "new engineer" framing;
- `v3` line saying analysis is strictly based on code behavior.

Coupling: moderate. Wording affects execution quality, but does not invalidate the staged routine.

Boundary: can be fixed by targeted edits without redesigning the routine.

### Cluster C - Recency / Current Frontier

Elements:

- dated inquiry folders;
- recent `finding.md` files;
- supersession/correction chains;
- active gates and current blockers.

Coupling: strong with Navigation output quality. Navigation needs this interpreted layer to know what matters now.

Boundary: recency should be a required output lens, not necessarily a separate read pass.

### Cluster D - Operational Session Contract

Elements:

- warm-up runs once per session;
- existing outputs can be reused if fresh;
- Navigation consumes the outputs;
- rerun conditions.

Coupling: strong with practical use. Without this cluster, the commands may produce reports but not become a stable Navigation routine.

Boundary: can be a small wrapper or a short section added to the files.

### Cluster E - Trace Scope Control

Elements:

- seven trace categories;
- grouped trace enumeration;
- one file per trace;
- assessment sections;
- incomplete `- is this` line.

Coupling: strong with v3 usability. If v3 generates too many traces, warm-up becomes too expensive.

Boundary: needs selection criteria and cleanup.

## Question Tree

### Q1. Is the v1/v2/v3 spine structurally right?

Verification:

- [x] v1 gives orientation.
- [x] v2 gives destination/intermediate-goal structure.
- [x] v3 gives movement/risk/improvement traces.
- [x] The sequence supports Navigation better than a single large protocol.

### Q2. What must be fixed before dogfooding?

Verification:

- [ ] Replace code-only wording with project/artifact/source-of-truth wording.
- [ ] Fix typos and incomplete text.
- [ ] Add current-frontier/freshness section.
- [ ] Add session reuse and Navigation handoff rules.
- [ ] Add trace selection limits to v3.

### Q3. Does recency require a separate warm-up?

Verification:

- [x] Dated folders are recognized as useful ordering evidence.
- [x] Dates alone are rejected as sufficient current-state interpretation.
- [x] A lightweight recency/current-frontier lens is identified as necessary.
- [x] Separate command is deferred until dogfood proves independent value.

### Q4. What should Navigation receive after warm-up?

Verification:

- [ ] Plain project summary from v1.
- [ ] Directional architecture from v2.
- [ ] Selected movement traces from v3.
- [ ] Current frontier: recent active decisions, corrections, blockers, stale/superseded items, and next relevant gates.
- [ ] Confidence/staleness limits.

## Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| v1 orientation | v2 direction | project scope, source-of-truth context, active areas | one-way |
| v1 + v2 | v3 traces | enough context to identify meaningful movement traces | one-way |
| dated findings | current-frontier lens | chronological evidence | one-way |
| current-frontier lens | Navigation | interpreted currentness, active blockers, stale/superseded warnings | one-way |
| trace selection rule | v3 | limit on which traces to write | one-way |
| session rule | all warm-up files | when to run/reuse/rerun outputs | one-way |

## Dependency Order

1. Clean source-target language: make all files project/artifact aware, with code as one subtype.
2. Add current-frontier/freshness output.
3. Add session reuse and Navigation handoff.
4. Add v3 trace selection and fix incomplete text.
5. Dogfood the routine on one real Navigation session.
6. Only after dogfood, decide whether recency deserves a standalone v4.

## Self-Evaluation

### Independence

Pass. The evaluation separates spine validity, wording cleanup, recency/currentness, session contract, and trace scope control.

### Completeness

Pass. The decomposition covers the original question: sufficiency, missing vital pieces, and whether recency needs its own warm-up.

### Reassembly

Pass. If the pieces are answered and the fixes applied, the user can decide whether to continue with v1/v2/v3 and what to change first.

### Tractability

Pass. Each piece is small enough for direct file edits or one follow-up inquiry.

### Interface Clarity

Pass. The main interface is clear: warm-up outputs become Navigation's session context.

### Balance

Pass. Recency/currentness is the largest piece, but not so large that it dominates the whole.

### Confidence

Medium-high. The structural judgment is grounded in file reads, but the true test is dogfooding on a full Homegrown session.
