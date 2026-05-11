---
status: active
---

# Finding: Navigator Warm-Up v1/v2/v3 Sufficiency

## Question

Are `navigation-project-warmup_v1.md`, `navigation-project-warmup_v2.md`, and `navigation-project-warmup_v3.md` good enough as a Navigator warm-up routine, and are they missing a vital recency-focused warm-up step?

The goal is to decide whether the user should continue with this v1/v2/v3 routine, refine it, add another warm-up file, or keep relying on `homegrown/protocols/navigation_context_intake.md`.

## Finding Summary

- The three-file routine is the right **spine** for Navigator warm-up. It gives a concrete staged sequence: `v1` creates a plain project summary, `v2` explains direction and architecture of effort, and `v3` traces movement over time.

- The current drafts are not yet good enough as final operational commands. They still contain codebase-specific wording, rough phrasing, and at least one incomplete line in `v3`.

- The vital missing piece is not a fourth heavy warm-up command. The missing piece is an explicit **Recent / Current Frontier** lens: what changed recently, what still matters, what was corrected or superseded, what is blocked, and what Navigation should pay attention to now.

- Dated inquiry folders help, but they are not enough. Dates give chronology. They do not explain relevance, active status, supersession, correction, or current Navigation importance.

- A separate recency command should be deferred. Create it only if real use shows the current-frontier section is repeatedly needed without running the broader v1/v2 warm-up.

- `navigation_context_intake.md` should not remain the main user-facing shape if v1/v2/v3 works. At most, it can later shrink into a tiny wrapper that says: run warm-up once per session, reuse outputs until stale, then let Navigation consume them.

## Finding

The v1/v2/v3 routine is better aligned with the actual use case than a large parameterized intake protocol.

Navigator warm-up is not a per-request classifier. It is a once-per-session context digestion routine. The user starts a Navigation-capable session, the system consumes project state, and Navigation then operates with that warmed context across follow-up questions.

The three files match that shape well:

1. `navigation-project-warmup_v1.md` answers: what is this project or project state?
2. `navigation-project-warmup_v2.md` answers: where is it trying to go, what intermediate goals exist, and how is the project positioned to reach them?
3. `navigation-project-warmup_v3.md` answers: how have ideas, artifacts, branches, protocols, corrections, and implementations moved over time?

That is the right staged unlock:

```text
orientation -> directional architecture -> movement traces
```

Earlier warm-up inquiries `2026-05-02_15-09__next_load_bearing_navigation_warmup_context_loading` and `2026-05-02_15-35__navigation_context_intake_warmup_archaeology_pattern` are now historical precursors. They established the need for a Navigation warm-up/context-intake layer and imported the staged archaeology pattern: orientation -> project-direction architecture -> movement traces. Their active substance is preserved by the current v1/v2/v3 warm-up spine and the `homegrown/navigation/warmup/` placement decision, so they do not need to remain top-level active inquiries.

The routine still needs cleanup because the current drafts carry codebase residue. `v1` says to read code files and focus on source code, even though it later says first-party source-of-truth artifacts include code and Markdown. `v2` still frames the reader as a new engineer and asks for codebase architecture patterns. `v3` correctly generalizes traces into project movement, but later says to base analysis strictly on actual code behavior. Those phrases will pull the routine back toward software-only archaeology unless revised.

The most important missing output is a `Recent / Current Frontier` section.

This section should not merely list recent inquiry folders. It should interpret the recent state:

```text
Recent changes that still matter
Active decisions and artifacts
Corrected or superseded items
Open gates and blockers
Stale or unsafe assumptions
Navigation implications now
```

This matters because inquiry folder dates are only raw evidence. A date can show that a finding is recent, but it cannot show whether the finding still matters, whether the user corrected it later, whether it was superseded by a branch, or whether its artifact has been tried in practice. Navigation needs interpreted currentness, not just chronology.

The best immediate design is not `v4 = recency warm-up`. The better design is:

```text
v1 = broad orientation + current frontier
v2 = destination / intermediate goals / attempts / positioning
v3 = selected project movement traces
small handoff rule = run once per session, reuse until stale, Navigation consumes outputs
```

The recency command should stay deferred because a separate file would likely duplicate v1/v2 reading before real use proves it has independent value. It becomes worth extracting only if the user repeatedly needs current-state exposure without a full warm-up.

`v3` also needs a scope limit. It should enumerate possible traces by category, then write only the traces most relevant to Navigation based on recency, risk, uncertainty, active gates, and current project movement. Otherwise trace generation can explode into too many files and make warm-up too expensive.

So the verdict is:

```text
Use v1/v2/v3 as the Navigator warm-up spine.
Refine them before treating them as canonical.
Do not create a separate recency warm-up yet.
Add explicit current-frontier, freshness, session handoff, and trace selection rules.
Use the routine once on a real Navigator session before retiring navigation_context_intake.md.
```

## Next Actions

### MUST

- **What:** Patch `navigation-project-warmup_v1.md` so it speaks about first-party source-of-truth artifacts, not only code files, and so it outputs a `Recent / Current Frontier` section.
  **Who:** The warm-up command file.
  **Gate:** Before first real Navigator warm-up use.
  **Why:** Prevents Navigation from confusing chronology with current state.

- **What:** Patch `navigation-project-warmup_v2.md` so it focuses on project-direction architecture, not only codebase architecture.
  **Who:** The warm-up command file.
  **Gate:** Before first real Navigator warm-up use.
  **Why:** Makes v2 explain end goal, intermediate goals, attempts, and positioning for Homegrown artifacts.

- **What:** Patch `navigation-project-warmup_v3.md` to remove code-only grounding, fix the incomplete `- is this` line, and require trace selection before writing trace files.
  **Who:** The warm-up command file.
  **Gate:** Before first real Navigator warm-up use.
  **Why:** Keeps trace work useful and bounded.

- **What:** Add a tiny session handoff rule somewhere near the routine.
  **Who:** Either a small wrapper file or a short section shared by the warm-up files.
  **Gate:** Before Navigation consumes the warm-up outputs.
  **Why:** Prevents the old per-request intake mistake from returning.

### COULD

- **What:** Keep `homegrown/protocols/navigation_context_intake.md` temporarily as a historical/controller reference.
  **Who:** Homegrown protocol layer.
  **Gate:** Until v1/v2/v3 are used once in a real Navigator session.
  **Why:** Avoids deleting the old safety logic before the new command routine proves itself.

### DEFERRED

- **What:** Create `navigation-project-warmup_recent.md` or similar.
  **Gate:** Revive only if at least two real Navigator sessions show that current-frontier exposure is needed independently from the full v1/v2 warm-up.
  **Why if revived:** It would reduce compute when only freshness/currentness is needed.

## Reasoning

The surviving idea is the three-stage routine itself. It survived because it matches the actual cognitive need: warm a session by understanding what exists, where the project is trying to go, and how the project has been moving.

The current-frontier lens survived because it addresses the largest real gap. Dated inquiry folders are useful, but they do not say which recent items are still authoritative, which were corrected, which are stale, and which create the next Navigation gate.

The tiny session handoff survived because the user explicitly corrected the model: warm-up is once per session, not per request. Without a handoff rule, future executions can drift back into request-shaped intake.

The v3 trace-selection rule survived because unbounded trace generation would make the warm-up routine too expensive. The command should enumerate candidate traces, then select the traces that matter for Navigation.

The separate recency command was killed for now. The prosecution is that it adds a fourth stage before proving that a cheaper current-frontier lens is insufficient. The defense is that recency may eventually deserve independent execution. The collision produces a deferred extraction: create it later if real use shows it is repeatedly needed.

The large `navigation_context_intake.md` shape did not survive as the main interface. It can preserve useful invariants, but it is too parameter-heavy for the user's actual warm-up need. If kept, it should shrink into a wrapper or index after v1/v2/v3 prove themselves.

## Open Questions

### Monitoring

- After the first real Navigator warm-up use, check whether `Recent / Current Frontier` made Navigation materially easier or whether the user still had to manually explain what is current.

- After three warm-up sessions, check whether v3 trace generation is too expensive or too sparse.

### Refinement Triggers

- Create a separate recency warm-up only if at least two sessions need currentness without needing full v1/v2 context.

- Retire or shrink `homegrown/protocols/navigation_context_intake.md` only after v1/v2/v3 are used successfully in one full Navigation session.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

inspect 

/Users/ns/Desktop/projects/native/navigation-project-warmup_v1.md
/Users/ns/Desktop/projects/native/navigation-project-warmup_v2.md
/Users/ns/Desktop/projects/native/navigation-project-warmup_v3.md

these, i am plannign to use them as navigator warmup routine.  Are they good enough?  maybe they are missing something vital? maybe we need another warmup for exposing recency? or it is not needed since inquiry folders have dates?
```

</details>
