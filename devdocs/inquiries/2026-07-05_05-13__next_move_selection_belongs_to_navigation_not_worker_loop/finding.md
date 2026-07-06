---
status: active
model: claude-opus-4-8[1m]
effort: max
corrects: devdocs/inquiries/2026-07-05_00-21__open_directions_index_solution_quality_evaluation/finding.md
---
# Finding: "What Should I Work On Next?" Belongs to Navigation, Not the Worker Loop

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-07-05_00-21__open_directions_index_solution_quality_evaluation/finding.md
**Revision trigger:** User correction — the prior finding said the "hard steering job" of choosing the next move "belongs to push"; the user pointed out that choosing the next move is not the worker traverse loop's concern at all, but the isolated navigational session's (and the orchestrator's).
**What's preserved:** the prior finding's diagnosis that pull's "feeds the steering layer" claim over-reaches; and its verdict that the index (the store of set-aside directions) is the valuable foundation. Both stand.
**What's changed:** the prior finding's *prescription* — "let push do the hard steering/selection job as a second read over the index." That mislocated steering. Steering (choosing what to work on next) is not any worker-loop read's job; it lives one layer up.
**What's new:** the layer model that fixes it — the index feeds *two layers* (a worker-loop read below; the navigation/orchestrator selection above), and the "push" function the prior finding invented is really an already-existing job of the navigational session.
**Migration:** the 00-21 finding's "highest-value correction" (add push as a second read that steers) should be re-read as "feed the index to the navigational session's enumeration; steering stays with the orchestrator." Its index-as-substrate verdict needs no change.

## Question

The prior finding (evaluating the Open-Directions Index design) wrote:

> *"Pull enriches a direction you've already chosen; it does not help you choose… it cannot answer 'what should I work on next?' That harder job — actually steering the next move — belongs to push."*

The user corrected this:

> *"'what should I work on next?' is something [the] isolated navigational session should worry [about], not [the] traverse loop of [the] worker session. Do you understand this? dive deeper of why."*

So the question is: is the user right that choosing the next move is the navigational session's / orchestrator's job and *not* the worker traverse loop's — and why does that hold architecturally?

## Finding Summary

- **Yes — the user is right, and on the architecture's own terms (not just as agreement).** The project's era-goal canon (the SUSTRALL document, `docs/canon/sustained_traversal_loop_of_loops.md`) lays out one revolution of the system as *probe → see → decide → dispatch*: a **worker** runs one inquiry to a finding (probe); the **navigational session** enumerates the field of directions over the finished work (see); the **orchestrator** selects the next route (decide). "What should I work on next?" is the *decide/select* step — it happens *after* a worker finishes, one layer up.

- **Five canon-grounded reasons make next-move-selection structurally not the worker's job.** (1) *Whole-field visibility* — a worker is heads-down in one inquiry with one topic and can't see the whole field of directions; the navigational session is deliberately fresh, isolated, and warmed *so that it can*. (2) *Control scope* — the canon states the worker runner's control scope is "per-cycle only (conclude-or-iterate within one inquiry)." (3) *Sees vs chooses* — even the layer that sees the whole field is barred from choosing: "Navigation sees; it does not choose"; choosing is the orchestrator's. (4) *Freshness* — the navigational session is a fresh session precisely to keep a deep worker's narrow, biased view out of the next-move decision. (5) *Dispatch order* — by the time a worker is running, "what to work on next" was already answered; that's *why* it has its topic.

- **My prior finding mislocated steering, on two counts.** First, *see vs decide*: surfacing an aging direction is an enumeration (a "see"); selection is a "decide." I called a see-function "the selection job." Second, *layer*: I framed pull and push as two reads a worker performs, but selection is a cross-inquiry decision *above* the inquiry boundary — a worker-loop read is the wrong layer to own it.

- **The correction is bounded — it fixes one recommendation, not the whole finding.** The prior finding's diagnosis (pull's "feeds the steering layer" over-claims) and its index-as-substrate verdict both stand. Only the "add push as a steering read" prescription is wrong. And pull is not made "bad" by this — pull is correctly in its layer.

- **Where pull and push actually land: the index feeds two layers.** *Below the inquiry boundary* (the worker loop): **pull** — a worker enriches its already-chosen topic. Its inability to answer "what should I work on next" is *not a defect* — that isn't its job. *Above the inquiry boundary* (navigation + orchestrator): the **navigational session** enumerates the whole field, including the aging directions parked in the index, and the **orchestrator** selects using traversal memory. So the "surface aging directions over the whole field" function I called "push" is not a new worker mechanism — it's a job the architecture *already assigns* to the navigational session. The fix is to feed the index to that session, not to build a worker-loop push.

- **"Push" is corrected only as *steering*, not deleted as a concept.** A below-boundary *uninvited-enrichment* push (surfacing an aging direction to a worker at its start without it querying — enrichment, not selection) could still be a legitimate idea. What's ruled out is "push does the selecting."

## Finding

### The architecture this rests on

The project is building toward SUSTRALL — a system that revolves over "thinking space," running many separate thinking-sessions and steering itself across them. Its canon describes three parts, by role:

- **The worker loop-runners — "the hands."** Each runs *one* inquiry at full depth. The canon fixes their control scope: "per-cycle only (conclude-or-iterate within one inquiry)." A worker decides only whether to conclude or iterate *its own* inquiry.
- **The isolated navigational session — "the eyes."** A *fresh, context-isolated* session, warmed on the terrain, that runs the route-enumerator over *finished* work and produces the field of directions. Two hard rules: "it never chooses ('Navigation sees; it does not choose')," and it's a fresh session each time.
- **The orchestrator — "the will."** The cross-inquiry controller. It does "route selection among what the eyes enumerated," and its organ is *traversal memory*.

And one architectural commitment ties them together: "one enumerator, two controllers — routelister enumerates; the runner (per-cycle) and the orchestrator (cross-inquiry) decide." There are two decision scopes: the runner's, *inside* one inquiry, and the orchestrator's, *across* inquiries.

### Why "what should I work on next?" is not the worker loop's question

Put the revolution in order: *probe → see → decide → dispatch*. A worker probes (runs its inquiry). Then the eyes see (enumerate the field over the finished work). Then the will decides (selects the next route). Then the next session is dispatched. "What should I work on next?" is the **decide** step. It sits *after* the worker's probe and is owned by a *different* part.

Five reasons, each grounded in the canon, make this not a stylistic choice but a structural necessity:

1. **You can't choose what you can't see.** Selecting the next move means choosing among the whole field of open directions. A worker traverse is heads-down in one inquiry with one topic — it structurally does not have the whole field in view. The navigational session is *built* to have it: fresh, isolated, warmed on the terrain, surveying finished work. Visibility is a precondition for selection, and only the eyes have it.

2. **The canon simply assigns the scopes.** The worker's control scope is "per-cycle only." Cross-inquiry route selection is listed under the orchestrator. This isn't inferred — it's the architecture's stated allocation. "What to work on next" is cross-inquiry by definition, so it is definitionally not the worker's to decide.

3. **Even the eyes don't choose — so the worker certainly doesn't.** The canon walls off *seeing* from *choosing*: the navigational session "sees; it does not choose." Choosing is reserved for the orchestrator. Both the seeing and the choosing sit *above* the worker. The worker is two roles removed from selection — it neither sees the field nor chooses over it.

4. **Isolation exists precisely to keep the worker's bias out of the decision.** Depth costs perspective: a session deep in one problem has a narrow, biased view. The navigational session is deliberately a *fresh* session with *fresh perception each time*, so the next-move decision isn't contaminated by whatever the last worker happened to be fixated on. If a heads-down worker chose the next move, it would import exactly the tunnel-vision the isolation was designed to shed. (Extrapolate it: if every worker picked the next move, the traversal would drift toward each finishing worker's obsession rather than the whole-field best.)

5. **The question was already answered before the worker started.** By the time a worker traverse is running, "what to work on next" has already been decided — the orchestrator selected this inquiry and dispatched it. That's *why* the worker has this topic. A worker asking "what should I work on next?" is re-asking a question resolved one step earlier, one layer up. Its job is to *execute* that answer (probe to a finding), not to re-derive it.

There's a familiar shape to this. An operating system doesn't let a busy worker process decide which process the scheduler runs next — a separate, privileged scheduler with whole-run-queue visibility does. A hospital doesn't let a surgeon mid-operation decide which patient is admitted next — triage, with whole-ward visibility, does. In both, the "what's next" decision is deliberately lifted out of the busy worker and given to a layer that can see everything and isn't tunnelled into one task. Next-move-selection in SUSTRALL is the same pattern. (These are analogies — they illustrate the *reason*, they don't import guarantees.)

### The load-bearing distinction: surfacing is not selecting

Underneath all five reasons is one clean distinction the canon draws and my prior finding blurred: **seeing and deciding are different steps with different owners.** Surfacing an aging direction — putting it in front of whoever chooses — is a *see*. Actually choosing it as the next move is a *decide*. Surfacing *feeds* selection; it is not selection. This matters because the thing I called "push" (a mechanism that surfaces aging directions) is a see-function, and I mislabeled it as "the selection job."

### What my prior finding got wrong — precisely, and how much

The prior finding said: "the selection job belongs to push — a watcher that surfaces the high-value aging directions uninvited," and "let push do the hard steering/selection job." That mislocated steering two ways:

1. **See vs decide.** Surfacing aging directions is enumeration. Selection is the orchestrator's. Calling the surfacing "the selection job" collapsed two distinct steps.
2. **Layer.** I framed pull and push as "two reads over the index" — reads a worker performs, since the design's Look-Up is a worker-start read. But selection is a cross-inquiry decision, *above* the inquiry boundary. A worker-loop read cannot own it.

I want to be equally clear about what was *not* wrong, so the correction stays honest in both directions. The prior finding correctly diagnosed that pull's "feeds the steering layer" claim over-reaches. It correctly identified the index (the store) as the valuable foundation. Those stand. The error was localized to the *prescription* — the proposed fix reached for a worker-loop "push read" to do steering, when steering was never a worker-loop job. So this is a mis-*layering*, not a mistake of substance: the prior finding had the right pieces (the index is valuable; pull only enriches; *something* must actively harvest the whole field) but assigned that last piece to the wrong layer.

And to be clear this isn't just deference to the correction: if the canon had assigned next-move-selection to the worker, the honest answer would have been "you're mistaken." It doesn't — it scopes the worker to per-cycle-only and puts selection with the orchestrator. The agreement is forced by the text, not granted to the user.

### Where pull and push actually belong

Once selection is understood as an above-the-boundary decision, the index's consumers sort cleanly by layer:

- **Below the inquiry boundary — the worker loop — pull.** A worker, at the start of the inquiry it was already assigned, queries the index and enriches its chosen topic. This is correctly in-layer, and its silence on "what should I work on next" is *correct*, not a shortfall — that question isn't the worker's.

- **Above the inquiry boundary — navigation + orchestrator — the "push" function, already provided.** The navigational session, running over finished work, enumerates the whole field *including* the aging directions parked in the index; the orchestrator then selects the next route using traversal memory. So "surface the aging high-value directions uninvited, over the whole field" is not a new worker-loop mechanism to invent — it's an *existing* job of the navigational session. The concrete fix is simply: **make the open-directions index one of the inputs the navigational session enumerates.** The organ that does the "uninvited whole-field surfacing" already exists; the index just needs to feed it.

One nuance so the correction stays precise: this rules out "push does the selecting." It does *not* rule out a *below-boundary uninvited-enrichment* push — surfacing an aging direction to a worker at its start without the worker querying (which differs from pull only in being uninvited). That would still be enrichment, not selection, and it's a separate open question of whether it's worth having.

## Inherited Commitments Re-test

This finding corrects a prior finding and inherits three commitments from it.

- **Commitment:** The index (the store of set-aside directions) is the load-bearing, valuable foundation of the Open-Directions Index design.
  - **Source:** `devdocs/inquiries/2026-07-05_00-21__open_directions_index_solution_quality_evaluation/finding.md` (its central "index-as-substrate" verdict).
  - **Re-test status:** RE-TESTED — commitment confirmed. Nothing in this correction touches the index's value; the correction is about which *layer consumes* the index, not whether the index is worth having.
  - **Evidence:** the layer-split (Finding, "Where pull and push actually belong") has both layers consuming the same index — the store remains the shared foundation.

- **Commitment:** Pull enriches an already-chosen heading; it does not steer. (The prior finding's diagnosis of pull.)
  - **Source:** the 00-21 finding (its "pull = enrichment, not steering" claim).
  - **Re-test status:** RE-TESTED — commitment confirmed but frame revised. Pull does only enrich, as claimed. But the prior finding framed pull's non-steering as a *limitation* ("it cannot answer what to work on next"). The revised frame: that's not a limitation — steering isn't the worker layer's job, so pull correctly staying silent on it is in-layer behavior, not a shortfall.
  - **Evidence:** Finding, reasons (2) and (5) and the layer-split.

- **Commitment:** The "hard steering/selection job" belongs to push, as a second read over the index. (The prior finding's prescription.)
  - **Source:** the 00-21 finding (its "highest-value correction" — add push to do the steering).
  - **Re-test status:** RE-TESTED — commitment found INVALID. Steering is the orchestrator's *decide* step over the navigational session's *see*, above the inquiry boundary — not a worker-loop read. This finding's content reflects the corrected position (feed the index to the navigational session's enumeration; steering stays with the orchestrator), not the inherited prescription.
  - **Evidence:** the five canon-grounded reasons + the see-vs-decide distinction (Finding, "Why…" and "The load-bearing distinction").

## Next Actions

### MUST
- **What:** Amend the 00-21 finding — replace its "let push do the hard steering/selection job [as a second read]" prescription with "the index feeds the *above-boundary* navigational session's enumeration → orchestrator selection; steering is the orchestrator's decide step, never a worker-loop read." Keep its diagnosis and index-as-substrate verdict unchanged.
  - **Who:** a correction pass on the 00-21 finding (a "Changes from Prior"/superseding note pointing here).
  - **Gate:** observable — before the 00-21 finding's "highest-value correction" is acted on by any design work.
  - **Why:** the mislocation should not propagate from the corrected finding into downstream design; the correction belongs on the artifact it corrects.

### COULD
- **What:** Specify how the open-directions index feeds the navigational session's enumeration — as one of the eyes' warming/terrain inputs over finished work, so the orchestrator selects over a field that includes the aging parked directions.
  - **Who:** a design pass on the navigational-session inputs.
  - **Gate:** condition — when the index and the navigational-session habit are being built.
  - **Why:** turns the correction from "don't put steering in a worker read" into the constructive "here's where the aging-direction surfacing actually lives."

- **What:** Re-scope the sibling 00-47 finding's "push" route (in its `_route.md`) so it doesn't imply push is a worker-loop steering read — re-cast it as the index feeding the eyes, and separately flag a possible below-boundary uninvited-enrichment push.
  - **Who:** a light touch on the 00-47 inquiry's route index.
  - **Gate:** condition — when the memory-design routes are next revisited.
  - **Why:** keeps the cross-inquiry route-maps consistent; the sibling's mark-done (state-write) conclusion is unaffected.
  - **Depends-on:** MUST item "amend the 00-21 finding." This COULD is GATED — settle the correction on the primary corrected finding first.

### DEFERRED
- **What:** Decide whether a below-boundary uninvited-enrichment push (surface an aging direction to a worker at its start, unqueried) adds value distinct from pull.
  - **Gate:** revival — when the index has real volume and pull is in use.
  - **Why (if revived):** closes the one push-concept this correction deliberately left open, cleanly separating it from the (killed) "push does selection."

## Reasoning

**What was killed, and why:**

- **"My prior prescription was right — push does the steering."** Rejected. Surfacing (push) is a *see*, and the canon reserves *decide/select* for the orchestrator; a push-watcher feeds selection but does not perform it. And a worker-loop read cannot own an above-boundary, cross-inquiry decision. The prescription mislocated steering twice over.

- **"The worker loop could or should steer the next move."** Rejected. The worker's control scope is per-cycle-only by canon; it lacks whole-field visibility; and by dispatch-order its topic was already chosen upstream. A worker that steered would import its tunnel-vision into the next move — the exact failure the navigational session's isolation exists to prevent.

- **"So the whole prior finding was wrong."** Rejected as an over-correction. The prior finding's diagnosis (pull over-claims) and index-as-substrate verdict are sound and untouched. The error is one mislocated prescription.

- **"So pull, or the index, is bad."** Rejected as an over-correction the other way. Pull is correctly in its layer; the index is the shared foundation both layers consume. The correction narrows what pull is *for* (enrichment), it doesn't devalue it.

**The check worth flagging:** because this confirms a user's correction of my own prior work, the risk was deference — agreeing because the user asserted it. That was tested against the canon directly: every one of the five reasons maps to quoted canon text (the revolution sequence; the per-cycle-only control scope; "Navigation sees; it does not choose"; fresh perception each time; the inquiry boundary). The agreement is earned by the text. The same run also *bounded* the correction (the prior diagnosis and index-verdict stand) and *preserved* a below-boundary push as a live idea — signs the pipeline adjudicated rather than simply agreed.

## Open Questions

### Blocked
- The exact wiring of "the index feeds the navigational session's enumeration" (a distinct input vs folded into "recent work"; how the eyes weight aging directions against fresh field-directions) can't be pinned down until the navigational-session inputs and the index schema are specified.

### Refinement Triggers
- If a below-boundary uninvited-enrichment push (deferred above) turns out valuable and distinct from pull, the worker-loop read side gains a second member — revisit the layer-split's below-boundary reads then.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
in devdocs/inquiries/2026-07-05_00-21__open_directions_index_solution_quality_evaluation/finding.md u said 


- **Pull enriches a direction you've *already chosen*; it does not help you *choose*.** To use pull you must already have a topic to query with — so it can sharpen a heading you've picked, but it cannot answer "what should I work on next?" That harder job — actually steering the next move — belongs to push. The write-up's claim that the design "feeds the steering layer" is therefore broader than what pull actually does.

"what should I work on
  next?"

question is something isolated navigational session should worry, not traverse loop of worker session. Do you understand this ? dive deeper of why
```

</details>
