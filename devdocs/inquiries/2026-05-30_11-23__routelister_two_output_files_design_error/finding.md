---
status: active
model: claude-opus-4-8[1m]
effort: max
refines: devdocs/inquiries/2026-05-30_00-13__routelister_output_artifact_schema/finding.md
---
# Finding: Routelister Owns Two Output Files — the State File Was Under-Specified, Not Lost

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-30_00-13__routelister_output_artifact_schema/finding.md` (the output-schema finding).
**Revision trigger:** user challenge — "something went bad; routelister should clearly have both a state file and `routelister.md` in its core output."
**What's preserved:** routelister's output is two artifacts (`routelister.md` + an identity-set/index re-derived from routeman's `_route.md`); the per-route schema; the dropped loop-relative fields; the within-concept boundary.
**What's changed:** the prior finding (and the spec authored from it) left the second artifact **unnamed** and framed it as cross-run *behavior* rather than a core *output*. This finding **names it and elevates it** to a core, always-written output, and corrects a conversational error of mine that implied routelister writes no state file at all.
**What's new:** the **standalone-owns-its-state** principle; the **three-memory / two-owner** model (resolving the apparent conflict with the loop-harmony finding); the concrete spec-edit set.
**Migration:** in `cognitive_harness/routelister/references/routelister.md`, name the index file, move it from §3.5 (cross-run behavior) into §5 (Output) as a named core artifact next to `routelister.md`, and state in the Execute PERSIST step that routelister writes it itself every run (standalone included), holding the within-concept concept-map only.

## Question

**routelister** lists the concepts in any body of material as typed routes; it is **cumulative** (it grows a persistent concept-map across runs) and **standalone** (it runs on any territory, often with no surrounding loop). Its predecessor **routeman** wrote two files: `routeman.md` (the per-run route-map) + `_route.md` (a persistent state file).

After I authored routelister's spec, the user pushed back hard:

> "routelister can just create `routelister.md` and the MVLw loop itself will write `_route.md` — but wait, routelister is not part of MVLw, so that doesn't make sense… I'm pretty certain something went bad with our design. It should clearly have **both** a route-state file **and** `routelister.md` in its core output logic. Let's understand what went wrong."

So: should routelister's core output always produce both files (and is the state file its own)? Who writes that state when routelister runs standalone (no loop)? What, precisely, went wrong — a broken design, an under-specified spec, or a miscommunication? And does routelister owning a state file contradict the earlier decision that cross-cycle memory belongs to the meta-loop?

## Finding Summary

- **The user is right: routelister's core output is two files, both its own, written every run** — `routelister.md` (the per-run route-map) **and** a persistent state file (its own cross-run concept-map index). This is not optional or loop-dependent.

- **Why it must own its state — the principle:** routelister is **cumulative** (each run reads the prior index to enrich its map — that's how a repeated root run gets smarter) **and standalone** (it frequently runs with no loop). The only component present on *every* routelister run is routelister itself. So **a cumulative, standalone discipline must own and write its own state** — the loop can't be responsible for it, because the loop is often absent. (This is exactly the contradiction the user spotted: "the loop would write it, but routelister isn't part of the loop.")

- **What actually went wrong — three layers, none of them a broken design:**
  - **(a) The design was right but under-specified.** The output-schema finding (`00-13`) *did* specify two artifacts — but it only ever called the second one "the identity-set/index state-file." It never **named** it.
  - **(b) The spec I authored under-elevated it.** The index is described (§5.3) and persisted ("PERSIST the index"), but it's **unnamed** and lives under "§3.5 Cross-run behavior" — framed as a *behavior* rather than as a core, always-written *output* sitting next to `routelister.md`.
  - **(c) My conversational answer introduced a real error.** Saying *"routelister doesn't write a `_route.md`"* conflated two different things: it's true routelister doesn't carry routeman's loop-**state** (the cross-cycle content); it's false that routelister doesn't write a state **file**. I dropped the file along with the content. That's what set off the alarm — correctly.

- **No contradiction with "cross-cycle memory → the meta-loop": there are three memories, two owners.**
  1. **the per-run map** (`routelister.md`) — this run's routes — *routelister's*;
  2. **routelister's cross-run index** (the state file) — its persistent concept-map (what concepts exist, how drilled), written every run — *routelister's*;
  3. **the meta-loop's cross-cycle state** (`_meta_state.md`) — the loop's traversal + verdict history, written only inside a loop — *the meta-loop's*.

  routeman fused (2) and (3) into one `_route.md` *because it was the loop-bound discipline*. The split gives the concept-map (2) to routelister and the traversal history (3) to the meta-loop. The earlier finding's "two-memories boundary" was (2) vs (3); adding the per-run map makes three. routelister always had its state file (2) — only the naming, the elevation, and my description slipped.

- **The fix is small, local, and must not re-fuse:** name routelister's state file (recommend **`_route.md`** — it mirrors routeman's `routeman.md` + `_route.md` pairing and matches the user's framing; foil `_routelist.md`); elevate it to a named core always-written output; state routelister writes it itself every run; and keep it holding the **within-concept concept-map only** — never the meta-loop's cross-cycle state (re-merging would re-fuse routelister to the loop, the original defect).

## Finding

### The principle that settles it

routelister has two properties that, together, force the answer. It is **cumulative**: a run loads the prior index and uses it to enrich the current map (this is what makes a repeated root run smarter, and what the idempotency-at-fixpoint and enrich-not-dump guarantees rest on). And it is **standalone**: it runs on any territory, and its primary case is *no loop at all*.

Put those together: the cross-run memory is intrinsic to how routelister works, and there is no guaranteed external component to hold it. The only thing present on every routelister run is routelister. Therefore **routelister must write its own persistent state** — the loop cannot own it, because the loop is usually not there. This is precisely the contradiction the user found: "the loop would write the state file, but routelister isn't part of the loop, so that doesn't make sense." Exactly — so routelister writes it.

### So the core output is two files, both routelister's

1. **`routelister.md`** — the per-run **route-map** (Map Header, Route Index, per-route records, Excluded, Telemetry).
2. **its own persistent state file** — routelister's **cross-run concept-map index** (`identity → {own-depth, depth-signal, individuation history, first-seen/last-touched}` + an invocation log) — the artifact the next run loads to enrich its map.

Both are written by routelister, every run, standalone included. This is the user's "both a route-state file and `routelister.md` in its core output," and it mirrors routeman's own `routeman.md` + `_route.md` pairing.

### What went wrong — precisely, and not the design

It's worth being exact, because "something went bad" could mean several things, and only the precise version is useful:

- **The design (`00-13`) was right but under-specified.** It clearly specified *two artifacts*, including "the identity-set/index state-file (re-derived from routeman's `_route.md`)." What it never did was give that second file a **name** — it stayed "the state-file." An unnamed artifact is easy to lose track of.

- **The spec I authored inherited that and under-elevated it.** In the routelister spec, the index is described in §5.3 and the Execute step says "PERSIST the index" — but it has **no filename**, and it sits under "§3.5 Cross-run behavior," which frames it as a *behavior* rather than as a first-class *output* standing beside `routelister.md`. Behaviors are easier to overlook than named outputs.

- **My conversational answer then dropped it.** When I said "routelister doesn't read or write a `_route.md`," I merged two separate claims. One is true: routelister doesn't carry routeman's loop-**state** (the cross-cycle/REVISIT content). One is false: that routelister doesn't write a state **file**. It does — its index. I shed the file along with the cargo. That error is what made it look like routelister had lost its second file.

So the design core (two artifacts) is sound; the failure is an unnamed + under-elevated file, compounded by my miscommunication. That's fixable locally, not a redesign.

### Three memories, two owners (why there's no contradiction)

The natural worry is: didn't we decide cross-cycle memory belongs to the meta-loop? Yes — and that's consistent, because there are three different memories:

| # | Memory | Holds | Owner | Written |
|---|---|---|---|---|
| 1 | per-run map (`routelister.md`) | this run's routes | routelister | every run |
| 2 | cross-run index (the state file) | the concept-map (what exists, how drilled) | **routelister** | every run (standalone included) |
| 3 | cross-cycle state (`_meta_state.md`) | the loop's traversal + verdict history | the meta-loop | loop runs only |

routeman bundled (2) and (3) into a single `_route.md` *because it was the loop-bound discipline that owned both*. When that fusion was split, the **concept-map (2)** stayed with routelister and the **traversal history (3)** went to the meta-loop. The earlier "two-memories" boundary was comparing (2) and (3); the per-run map makes three. So routelister keeping a state file (2) is exactly what the earlier work intended — it explicitly kept the within-discipline index as routelister's and relocated only the cross-cycle memory.

### The fix (and the one thing it must not do)

Three small, local edits to the authored spec:
1. **Name** routelister's state file — recommend **`_route.md`** (mirrors routeman's pairing and matches the user's framing; routeman is superseded, so the name is free). Foil: `_routelist.md`, if you'd rather it be unmistakably distinct from any archived routeman `_route.md`. Low-stakes — your call.
2. **Elevate** it — move the index out of "§3.5 Cross-run behavior" into the **Output** section as a named, core, **always-written** artifact next to `routelister.md`.
3. **State ownership** — the Execute PERSIST step says routelister writes this file *itself, every run, standalone included*.

And the constraint the fix must honor: routelister's state file holds the **within-concept concept-map only** — never the meta-loop's cross-cycle state. routelister writes its own file and never reads or writes the meta-loop's `_meta_state.md`. Re-merging the cross-cycle memory back into routelister "so it has all the state" would re-fuse the discipline to the loop — the exact loop-relativity defect this whole redesign removed.

## Inherited Commitments Re-test

This finding refines a prior finding and synthesizes the chain; each commitment is re-tested.

- **Commitment:** routelister's output = two artifacts (`routelister.md` + an identity-set/index re-derived from `_route.md`); state-file unnamed.
  - **Source:** `devdocs/inquiries/2026-05-30_00-13__routelister_output_artifact_schema/finding.md`.
  - **Re-test status:** RE-TESTED — REFINED. The two-artifact design is right and preserved; the refinement is to **name** the second file (the root under-specification) and elevate it to a core output.

- **Commitment:** cross-cycle memory relocates to the meta-loop (`_meta_state.md`); the within-discipline index stays routelister's (Gap D, two-memories boundary).
  - **Source:** `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md`.
  - **Re-test status:** RE-TESTED — CONFIRMED + SHARPENED. No contradiction: 08-14 kept the within-discipline index as routelister's and moved only the cross-cycle memory. Sharpened from two memories to three (adding the per-run map), two owners; the no-re-fusion guard is preserved.

- **Commitment:** the cross-run model is load-modify-save on a persistent index that is routelister's own.
  - **Source:** `devdocs/inquiries/2026-05-30_06-38__routelister_cross_run_model/finding.md`.
  - **Re-test status:** RE-TESTED — confirms routelister owns + writes its own index every run; supplies the operations on the now-named file.

- **Commitment:** the authored spec's output section.
  - **Source:** `cognitive_harness/routelister/references/routelister.md` (§3.5, §5.3, Execute).
  - **Re-test status:** RE-TESTED — DEFECT CONFIRMED. The index is real but unnamed + framed as cross-run behavior, not a core output. The three edits above are this finding's MUST.

- **Commitment:** routeman's `routeman.md` + `_route.md` pairing; `_route.md` bundled within-discipline memory + loop-state.
  - **Source:** `cognitive_harness/routeman/references/routeman.md` §5.5/§5.8.
  - **Re-test status:** RE-TESTED (artifact-grounded). The source pairing supports `routelister.md` + `_route.md`; routeman fused the two states because it was loop-bound; the split untangles them.

All five priors re-tested with cited evidence; none inherited without re-test.

## Next Actions

### MUST

- **What:** In `cognitive_harness/routelister/references/routelister.md`, make the persistent state file a **named, core, always-written output**: (i) name it (`_route.md`, or `_routelist.md`); (ii) move it from §3.5 (cross-run behavior) into §5 (Output) alongside `routelister.md`; (iii) in the Execute PERSIST step, state routelister writes it itself, every run, standalone included.
  - **Who:** the routelister spec.
  - **Gate:** condition-bound — now (the spec exists; this closes the gap before routelister is run/installed).
  - **Why:** routelister's cross-run memory is intrinsic and standalone; an unnamed, behavior-tucked file is what let it be overlooked.

- **What:** Encode the **within-concept-only** content constraint on the state file: it holds routelister's concept-map (identities → own-depth/individuation/timestamps); it never holds the meta-loop's cross-cycle/traversal state, and routelister never reads/writes the meta-loop's `_meta_state.md`.
  - **Who:** the routelister spec.
  - **Gate:** condition-bound — alongside the naming/elevation edit.
  - **Why:** prevents the elevated file from re-acquiring loop-state and re-fusing routelister to the loop.

### COULD

- **What:** Update `docs/walkthrough.md` §6 to name the second artifact (it currently says "the identity-set / index") so the walkthrough and spec agree.
  - **Who:** the walkthrough.
  - **Gate:** condition-bound — when the file name is chosen.
  - **Why:** keeps the design doc consistent with the spec.
  - **Depends-on:** MUST item "name the state file."

### DEFERRED

- **What:** Decide the exact filename (`_route.md` vs `_routelist.md`).
  - **Gate:** the user's call (low-stakes).
  - **Why (if revived):** lineage continuity vs unambiguous distinctness from archived routeman files.

## Reasoning

The verdict survived an adversarial pass:

- **"Make routelister stateless; let the caller maintain cross-run memory."** Rejected — routelister's cross-run guarantees (idempotency-at-fixpoint, enrich-not-dump) require the current run to read the prior index, so the memory is intrinsic; and the standalone case has no guaranteed caller to maintain it.

- **"The design is broken — the loop-harmony split stripped routelister's state file."** Rejected — the output-schema finding specified two artifacts, and the loop-harmony finding explicitly *kept* the within-discipline index as routelister's (it relocated only the cross-cycle memory). The design never stripped the file; the failure was naming, elevation, and (my) description. ("Something went bad" is honored — three things did — but not the design core.)

- **"Give routelister all the state — merge the cross-cycle memory in so there's one store."** Rejected — that puts loop-state back into routelister and re-fuses it to the loop (the defect the redesign removed). Three memories, two owners, kept separate.

- **"Naming is a fudge."** Set aside as a genuine low-stakes choice (both `_route.md` and `_routelist.md` work); the load-bearing fix is naming-and-elevating *at all*, not which string.

A note on self-reference: this finding diagnoses a spec I authored and a conversational error I made. The diagnosis owns the error explicitly as mine, names the spec's defects rather than protecting them, and preserves the design's valid core rather than inflating the fault into "broken." It is anchored on checkable evidence (the unnamed file in `00-13`; the index kept as routelister's in `08-14`; routeman's `_route.md` pairing) rather than on my own say-so.

## Open Questions

### Refinement Triggers

- If a real use ever needs routelister's state file to carry information *about the loop* (a cycle, a verdict-across-cycles), the within-concept-only constraint is under pressure — and the correct response is to put that in the meta-loop's `_meta_state.md`, not in routelister's file (re-confirm the boundary, don't breach it).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
hmm, i guess it can make sense.. routelister can just create routelister.md file and MVLw loop itself will write route.md but wait, routelister is not part of MVLw so it doesnt make sense...

i am pretty certain something went bad with our design of routelister.  

it should have clearly have both route.md and routelister.md files in its core output logic

lets dive deep back and understand what went wrong
```

</details>
