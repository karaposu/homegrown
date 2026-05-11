# Sensemaking: Navigator Warm-Up v1/v2/v3 Sufficiency

## User Input

Inspect `navigation-project-warmup_v1.md`, `navigation-project-warmup_v2.md`, and `navigation-project-warmup_v3.md` as a planned Navigator warm-up routine. Judge whether they are good enough, whether anything vital is missing, and whether a separate recency warm-up is needed or inquiry folder dates are enough.

## SV1 - Baseline Understanding

The proposed warm-up routine is trying to replace a heavy parameterized protocol with three concrete commands: summarize the project, understand its directional architecture, then trace movement. The main uncertainty is whether this staged routine leaves Navigation blind to recency/currentness.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Warm-up should run once per session, not per Navigation question.
- It must reduce the user's context-steering burden.
- It must be practical enough to dogfood, not so complex that it becomes another protocol burden.
- `devdocs/inquiries/` has dated folders and canonical `finding.md` files; `docarchive/` is normally intermediate/superseded.
- The routine must support non-code Homegrown artifacts, not just codebases.

### Key Insights

- v1/v2/v3 form a coherent staged unlock: existence -> direction -> movement.
- Recency is not equivalent to dated filenames. Dates expose order; they do not explain current relevance.
- v3 is where Homegrown becomes distinct from generic code archaeology because it includes reasoning/evidence traces.
- A fourth full warm-up command may create unnecessary compute/time cost; a lightweight current-frontier section may be enough.

### Structural Points

- `v1` creates broad orientation.
- `v2` creates directional architecture: end goal, intermediate goals, attempts, positioning.
- `v3` creates movement/risk/improvement traces.
- Navigation needs the outputs as session memory, not as isolated reports.

### Foundational Principles

- Session warm-up should create usable context, not automatically choose the next move.
- Navigation quality depends on both stable context and current frontier.
- Existing artifacts can be inconsistent; warm-up must remain honest about half-built, stale, or superseded material.
- Trace selection must be deliberate; exhaustive trace generation can become expensive and noisy.

### Meaning-Nodes

- Warm-up as context digestion.
- Current frontier.
- Directional architecture.
- Project movement traces.
- Dogfood-before-formalization.

## SV2 - Anchor-Informed Understanding

The routine is good because it is concrete and forgiving: it behaves like a set of warm-up commands instead of a large contract. The gap is not that it lacks more categories. The gap is that it does not yet require a compact current-state/current-frontier output that tells Navigation what recent evidence matters now.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

The staged sequence is logically valid. v1 provides broad context, v2 organizes direction, v3 extracts behavior over time. But the files retain codebase assumptions that will distort Homegrown project-state use.

New anchor: replace code-only language with "first-party source-of-truth artifacts" and treat code as one artifact subtype.

### Human / User Perspective

The user wants less burden and more self-sufficient Navigation. A large protocol with many parameters fights that goal. v1/v2/v3 are easier to run and easier to revise by creating v4 or editing a command.

New anchor: command simplicity matters because the system must be load-bearing for its own development.

### Strategic / Long-Term Perspective

The routine can become a reusable session entrypoint for Homegrown. It also preserves a path toward automation: outputs can later become durable `devdocs/archaeology/*` artifacts consumed by Navigation.

New anchor: keep the routine command-shaped now; only extract a controller later if dogfood shows repeated routing complexity.

### Risk / Failure Perspective

Risks:

- v1 reads everything but does not necessarily expose what is newly important.
- v3 can explode into many trace files.
- v2 still sounds like code architecture rather than project-direction architecture.
- Existing archaeology outputs can go stale without a freshness rule.

New anchor: the routine needs freshness, trace selection, and Navigation handoff rules.

### Resource / Feasibility Perspective

Adding a fourth heavy warm-up creates more compute and time cost. Adding a required "Recent / Current Frontier" section to v1 or v2 is cheaper.

New anchor: recency should first be a lightweight lens, not a separate full command.

### Definitional / Consistency Perspective

"Navigator warm-up" means session context loading. Therefore the outputs should be optimized for what Navigation needs: current state, direction, movement signals, blockers, and viable next-move context. Pure summary is insufficient unless it exposes Navigation-relevant currentness.

New anchor: the routine's success criterion is Navigation readiness, not report completeness.

## SV3 - Multi-Perspective Understanding

The evaluation shifts from "do these files contain enough content?" to "do these files produce the specific session memory Navigation needs?" On that criterion, the sequence is strong but not fully operational. It needs small mandatory output sections more than another broad warm-up layer.

## Phase 3 - Ambiguity Collapse

### Ambiguity: "Good enough"

**Strongest counter-interpretation:** They are not good enough because they still contain codebase residue, typos, and incomplete v3 text.

**Why the counter-interpretation fails:** Those are edit-quality issues, not structural failure. The underlying sequence covers orientation, direction, and movement, which are the right warm-up layers.

**Confidence:** HIGH.

**Resolution:** Good enough to dogfood after cleanup, not good enough to fully replace `navigation_context_intake.md` without session/freshness/handoff rules.

**What is now fixed?** The routine should continue as v1/v2/v3 rather than returning to the large parameterized protocol as the primary interface.

**What is no longer allowed?** Treating the current drafts as final.

**What now depends on this choice?** Whether to edit the files versus design a new protocol.

**What changed in the conceptual model?** The files are a viable command routine, not merely rough notes.

### Ambiguity: "Is recency already handled by dated inquiry folders?"

**Strongest counter-interpretation:** Dates are enough because the model can sort recent inquiry folders and read the latest findings.

**Why the counter-interpretation fails:** Sorting by date does not identify relevance, supersession, correction, active gates, or current user priority. It only gives chronology.

**Confidence:** HIGH.

**Resolution:** Dates are useful evidence, but the warm-up must explicitly produce a recent/current frontier view.

**What is now fixed?** Recency exposure is required.

**What is no longer allowed?** Assuming dated folder names alone provide Navigation-ready currentness.

**What now depends on this choice?** v1/v2 output design and Navigation handoff.

**What changed in the conceptual model?** Recency becomes an interpreted layer, not a filesystem property.

### Ambiguity: "Should recency be a separate v4?"

**Strongest counter-interpretation:** Yes, because currentness is vital and deserves its own command.

**Why the counter-interpretation fails:** A separate command may duplicate v1/v2 reading and increase warm-up cost. The immediate need is a required section that exposes recent/current state from the same read context.

**Confidence:** LOW-to-MEDIUM, because dogfooding may show recency deserves extraction.

**Resolution:** Do not create a heavy v4 yet. Add `Recent / Current Frontier` as a mandatory output section, and extract a separate recency command only if repeated dogfood shows it needs independent execution.

**What is now fixed?** Start with recency as a lens, not a fourth routine step.

**What is no longer allowed?** Ignoring recency because v1 reads dated files.

**What now depends on this choice?** Whether to patch v1/v2 now or create a new file.

**What changed in the conceptual model?** The missing piece is output shape, not another read pass.

## SV4 - Clarified Understanding

v1/v2/v3 are a good Navigator warm-up spine. They are not yet clean enough as operational files. The vital missing element is an explicit current-frontier/freshness lens, plus session reuse and handoff rules. Dated folders help implement that lens but do not replace it.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Keep the three-stage routine.
- Treat it as once-per-session warm-up.
- Add explicit recency/current-frontier output.
- Keep v3 trace-based, but constrain trace enumeration and selection.
- Remove code-only wording where Homegrown project-state artifacts are the target.

### Eliminated

- Replacing v1/v2/v3 with a large parameterized protocol as the primary user-facing interface.
- Assuming date ordering equals current-state understanding.
- Creating a heavy recency warm-up before dogfooding the simpler lens.
- Letting v3 generate unbounded trace volume.

### Viable Paths

1. Patch v1/v2/v3 directly and dogfood them.
2. Add a tiny wrapper that says: run v1 -> v2 -> v3 once per session, then Navigation consumes the outputs.
3. Later extract a `navigator-warmup-recent` only if the required current-frontier section proves too heavy or too often needed independently.

## SV5 - Constrained Understanding

The best next shape is:

```text
navigator-warmup1 = broad orientation + Recent / Current Frontier
navigator-warmup2 = directional architecture: end goal, intermediate goals, attempts, positioning
navigator-warmup3 = selected movement traces, not exhaustive trace generation
small handoff rule = Navigation consumes these as session context
```

## Phase 5 - Conceptual Stabilization

The routine should be judged by whether it gives Navigation enough session memory to stop relying on the user to manually reconstruct project state. v1/v2/v3 are close because they match the needed cognitive progression. They need operational cleanup and a current-frontier lens, not another complex protocol.

## SV6 - Stabilized Model

`navigation-project-warmup_v1.md`, `v2.md`, and `v3.md` are good enough as the **spine** of Navigator warm-up. They are not yet good enough as final operational commands.

The vital missing piece is **recency/currentness interpretation**:

- dates in inquiry folders are useful;
- dates are not enough;
- the routine must output what is recent, still active, superseded/corrected, blocked, and important for Navigation now.

Do not add a heavy fourth command yet. Add a required `Recent / Current Frontier` section to v1 or v2, and extract a separate recency warm-up later only if dogfood proves it should run independently.

## Saturation Telemetry

- **Perspective saturation:** high; later perspectives reinforced the same small set of gaps.
- **Ambiguity resolution ratio:** 3/3 major ambiguities resolved, one with medium confidence.
- **SV delta:** high; SV1 asked if the routine was sufficient, SV6 distinguishes spine sufficiency from operational readiness.
- **Anchor diversity:** good; constraints, user burden, recency, trace cost, and Navigation handoff all shaped the model.
