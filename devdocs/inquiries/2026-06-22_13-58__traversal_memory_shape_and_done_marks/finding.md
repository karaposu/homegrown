---
status: active
model: claude-opus-4-8[1m]
effort: max
refines: devdocs/inquiries/2026-06-22_10-37__routelister_todo_md_third_output/finding.md
---
# Finding: Normalize the Cross-Run Memory — Log Your *Choices*, Not the *Territory* (and keep the route mark)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-22_10-37__routelister_todo_md_third_output/finding.md`
**Revision trigger:** user correction (the prior's two action-recommendations were challenged with specific, correct arguments).
**What's preserved:** routelister stays a pure enumerator that never authors tracking-state ("one enumerator, two controllers"); the need for cross-run memory is real and is the project's keystone; the distinction between the regenerated map and the durable record.
**What's changed (two corrections):**
- The prior's **"travel log" shape** (a table of `route-id · why-selected · outcome`) is **wrong**. Re-describing *outcomes* duplicates artifacts that already exist and are traceable (the code, the findings), and reduces code-meaning to lossy natural language. Record *choices* (selection + rationale + **pointers**), not outcomes.
- The prior's **"drop the ✓ column"** is **reversed**. Keep a minimal done/explored mark — it's a cheap, durable, identity-clean operational glance on a *static* concluded route-piece.
**What's new:** the reconciling principle (**decompose traversal memory by where each component already lives**) and the "log your choices, not the territory" framing (a normalized, commit-log-shaped record).
**Migration:** the prior finding's onward route "start a travel log" is superseded by "log choices, not outcomes"; its onward route "drop the ✓" is superseded by "keep + reframe the mark."

## Question

In the prior finding I argued: keep routelister a pure two-file enumerator, and start a small "travel log" — a table of `route-id · why-selected · outcome` — as the first **traversal memory** artifact (the project's cross-run record of what was chosen and what came of it). I also recommended dropping the `✓` done-column from the route-map.

The user pushed back with specific arguments:
1. **routelister.md is not a whole map — it's a map *piece*** (there are dozens of active pieces, worked on asynchronously). So a mark *on* the piece, for operational ease, makes sense.
2. **The travel log is the wrong approach.** We don't know how much we'll accumulate; for code decisions you'd reduce code-meaning to natural language (lossy); and — the key point — **we already have the artifacts** (the code, the MVL loop's findings), all traceable. So writing down "what is done and where" just **duplicates what already exists.**
3. routelister should carry only **minimal marks** (is a route done/explored?), not implementation detail. (Agreed.)
4. **Traversal memory is not an MD file** — it's the *session context of the orchestrator session* (the one that chooses), reconstructed from what's there. (The navigational session, which doesn't choose, maybe needs its own memory for parallel routes — discuss later.)

The question: are these corrections right, and what's the corrected architecture?

## Finding Summary

- **The corrections are right.** The reconciling insight that makes everything fall into place: **decompose "traversal memory" by where each of its parts already lives.**

- **The decomposition.** The canon defines traversal memory as a record of *visits, selections, rationales, and outcomes.* Of those four: **visits** are the inquiry folders (they exist); **outcomes** are the findings and code (they exist); only **selections** (which route you chose among the options) and **rationales** (why) live **nowhere** — a route-map lists the options, but nothing records which one was picked or why.

- **So the rule is: log your *choices*, not the *territory*.** Outcomes are the territory — already there, traceable; re-describing them in a logbook is a duplication anti-pattern (it copies and then rots). What has no home is the *choice + the reason* — record that, and **point** at the territory.

- **Traversal memory has two faces, and the user and the canon were each right about one.** A **thin durable record** (the choice + a one-line rationale + pointers) satisfies the canon's "record the selection-rationale." The **rich state** ("where am I, what's done, what's open") is the **orchestrator session's context, reconstructed by warming** on those pointers + the artifacts — *not* a standing logbook. (The user's "not an MD file" is right about the rich layer; the thin choice-record is the one small durable sliver.)

- **The git analogy makes it concrete.** Cross-run memory is a **commit log of route choices**: the *rationale* is the commit message; the *outcome* is the SHA you can check out (a pointer). You never paste the code into the commit message — and you never paste the outcome into the memory.

- **Keep the mark (reverse my prior "drop it").** A minimal done/explored mark belongs on the route-piece. It's durable because a *concluded* piece isn't regenerated; it's identity-clean because **routelister authors it empty and never reads it** — a consumer (routelog, which already tracks done/parked, or a hand-tick) fills it. One bit; duplicates nothing; glance-able across dozens of async pieces.

- **The leanest form, and the honest caveat.** The choice-record may not even need a new file — for a selection that *spawns a child inquiry*, it can be a stable relationship-link + a rationale line in that child's existing `_branch.md`. But not every selection spawns an inquiry (direct edits, deferrals, abandonments don't), so the full design is likely **hybrid** (enriched links where they fit + a thin central note for the rest) — and that design is **deferred** (gated).

## Finding

### Why we are even discussing this

The project's era-goal needs a cross-run memory — a record of how it moves through its own thinking space, so that later it can learn from its own choices. I proposed a literal "travel log." The user's pushback was sharper than a style note: a travel log that records *outcomes* fights the grain of a system whose whole design is **already** durable, traceable artifacts. This finding takes that seriously and lands on a cleaner architecture.

### The reconciliation: decompose by where each part already lives

The apparent conflict was: the canon says traversal memory is a *recorded* artifact of "visits, selections, rationales, outcomes"; the user says it's the orchestrator's *session context*, not a file. Both are right, and you see how once you ask, of each component, **where does it already live?**

| component | where it already lives | what to do |
|---|---|---|
| **visits** (which inquiries ran) | the inquiry folders | nothing — they exist |
| **outcomes** (what each produced) | `finding.md`, code, spec edits | **point** at them, don't re-describe |
| **selections** (which route, among the options) | *nowhere* | **record** (a stable id) |
| **rationales** (why that route) | *nowhere* | **record** (one line) |

Three of the four are already on disk. Only the **choice and its reason** are homeless — because a route-map *enumerates* the options but nothing captures which one the orchestrator picked, or why. That homeless sliver is the only thing the durable record needs to hold.

### Log your choices, not the territory

This is the corrected version of the prior "travel log." The outcomes (the code that got written, the finding that got produced) are the *territory* — they exist and are traceable. Copying them into a logbook is a **denormalization anti-pattern**: you now have two copies, and the moment the real artifact changes, the logbook copy is stale and lying. So the durable record stores only the non-duplicable part — the choice and the reason — and **points** at the territory for everything else.

The cleanest way to picture it is a **git commit log**:

> The **rationale** is the commit *message*. The **outcome** is the *SHA you can check out* — a pointer to the resulting artifact. You never paste the diff into the message, and you never paste the outcome into the memory. The working tree (the rich "where am I" state) is **reconstructed** by checking out — i.e., by the orchestrator session **warming** on the pointers and the artifacts.

A record entry is therefore tiny:

```
chose:   2026-06-22_00-20 / R1   (essentiality → spec)
because: unblocks the whole feature; lowest-risk first move
led-to:  2026-06-22_00-20/finding.md  +  the routelister spec edit     ← pointers, not prose
```

**One important subtlety (from adversarial review): "outcome" splits in two.** A choice that *produces an artifact* (code, a finding, a spec edit) → you point at it. A choice that *produces no artifact* — you explored a route and **abandoned** it, or **deferred** it, or decided the existing thing was fine — has no outcome-artifact to point at, but that's because the outcome *is itself a choice with a reason*, which the rationale line already holds ("chose **not** to pursue R5, because …"). So nothing is lost: artifact-outcomes are pointed at; non-artifact-outcomes are already choices.

### The two faces of traversal memory

This is how the user's "session context" and the canon's "recorded artifact" both turn out true:

- **The thin durable record** (the commit-log of choices) is small and persists. It satisfies the canon's turn-invariant ("a turn counts when its selection-rationale is recorded").
- **The rich working state** — "what's happened, what hasn't, where we are across all the parallel routes" — is the **orchestrator session's context**, rebuilt each session by **warming**: reading the choice-record's pointers and the artifacts they point at. The canon already prescribes this ("the navigation session should be artifact-first … warming = understand the terrain by reading artifacts") and even warns against trying to pre-map it all ("a context and time waste"). This is the user's "not an MD file" — correct about the rich layer.

### The four organs (each function lives exactly once)

| organ | function | mutability |
|---|---|---|
| **routelister** | enumerate the routes (one map-piece per inquiry) | regenerated per run; authors the mark-slot **empty**, never reads it |
| **routelog** | the **done/explored mark** | append-only; projects onto the static piece |
| **the choice-record** *(thin; maybe just enriched links)* | record **choice + rationale + pointers** | append-only; one line per turn |
| **the orchestrator session** | **reconstruct** the rich state by warming | ephemeral; rebuilt each session |

Three of these already exist (routelister, routelog, and the orchestrator session as a canon role). The only genuinely new thing is the thin choice-record — and even it may dissolve into enriched links on existing artifacts.

### Keep the mark — and why that's not a contradiction of "don't write on the map"

My prior finding said drop the `✓`. The user is right to keep it, on two distinctions my prior missed:

1. **A concluded piece is static.** My "it gets wiped" argument was about *active, regenerating* maps. Most route-maps are read *after* their inquiry concludes — and a concluded piece isn't regenerated, so a mark on it is durable. (The honest scope: on a *still-iterating* inquiry's map a mark would still be wiped — but you don't mark routes mid-inquiry anyway.)
2. **Authored-empty, consumer-filled.** routelister leaves the mark-slot blank and never reads it — even more hands-off than the `Priority`/`Essentiality` fields it actively writes. A consumer (routelog, which already owns done/parked, or a hand-tick) fills it. So "one enumerator, two controllers" still holds: the enumerator never tracks.

My prior dropped the mark by **conflating** it with the fat log. They're different: the fat log (re-describing outcomes) is the duplication problem; the mark (one bit on a static piece) is a cheap, clean operational glance. Keep the mark; reject the fat log.

## Inherited Commitments Re-test

This finding `refines:` `devdocs/inquiries/2026-06-22_10-37__routelister_todo_md_third_output/finding.md`. Its commitments, re-tested:

- **Commitment:** routelister stays a pure two-file enumerator and never authors tracking-state ("one enumerator, two controllers").
  **Source:** prior finding, the verdict + reasoning.
  **Re-test status:** **RE-TESTED — confirmed.** Evidence: the corrected architecture keeps routelister untouched; the mark is *authored empty and never read*, and the choice-record + reconstruction live entirely in the controller layer. The canon commitment is unviolated.

- **Commitment:** the need for cross-run memory is real and is the project's keystone (SUSTRALL Tier-1 traversal memory).
  **Source:** prior finding, the "keystone" reframe.
  **Re-test status:** **RE-TESTED — confirmed.** Evidence: the thin choice-record is exactly the turn-invariant's "recorded selection-rationale"; it remains the keystone first step.

- **Commitment:** start a "travel log" — a table of `route-id · why-selected · outcome` — as the first traversal-memory artifact.
  **Source:** prior finding, Next Actions MUST.
  **Re-test status:** **RE-TESTED — found INVALID (frame corrected).** Evidence: the `outcome` column re-describes artifacts that already exist and are traceable (denormalization → duplication + staleness; lossy code→NL). The corrected commitment: record **choices** (selection + rationale + **pointers**), not outcomes; prefer enriched links on existing artifacts. This finding's content reflects the corrected version.

- **Commitment:** drop the `✓` done-column from the routelister spec.
  **Source:** prior finding, Next Actions COULD.
  **Re-test status:** **RE-TESTED — found INVALID (reversed).** Evidence: on a *static* concluded map-piece a minimal, authored-empty, consumer-filled mark is durable and identity-clean; the prior over-killed it by conflating it with the fat log. The corrected commitment: **keep** the mark, reframed as a consumer-filled done/explored mark on the static piece.

- **Commitment:** the routelog-side question (whether routelog can write the mark) is separate and open.
  **Source:** prior finding, Open Questions.
  **Re-test status:** **RE-TESTED — confirmed, sharpened.** routelog is the natural filler of the now-kept mark (it owns done/parked); the mark on a *static* piece sidesteps the earlier "routelog can't mutate a regenerated map" conflict.

## Next Actions

### MUST
- **What:** Keep and reframe the route done/explored mark in the routelister spec (§5.1) — a consumer-filled mark on the static concluded piece (filled by routelog or a hand-tick), authored empty by routelister and never read by it. (This **reverses** the prior finding's "drop the ✓" onward action.)
  **Who:** a routelister-spec edit.
  **Gate:** observable — the next routelister-spec edit.
  **Why:** gives the operational cross-piece glance the user wants, durably and identity-cleanly; closes the long-running ✓ question correctly.

### COULD
- **What:** Start the cross-run record the corrected way — log **choices** (`chose · because · led-to=pointer`), never outcomes; prefer recording it as an enriched relationship-link in the existing child-inquiry artifacts where one exists.
  **Who:** you (the orchestrator, at Level 0) — a one-line habit; no new tooling.
  **Gate:** observable — the next time you select a route to act on.
  **Why:** captures the one thing artifacts don't (the choice + why) without the lossy, duplicative fat log; the SUSTRALL first turn.

### DEFERRED
- **What:** Design the hybrid choice-record schema (enriched links + a thin central index for non-spawning selections; stable identifiers; staged warming) and resolve whether the *navigational* session needs its own memory for parallel async routes.
  **Gate:** condition-bound — gated by the canon "on canonization + ≥3 recorded turns"; revive once the choice-record has a handful of real turns.
  **Why (if revived):** the robust cross-run memory + the multihead coordination boundary the era-goal needs.

## Reasoning

**Why this over the alternatives:**

- **"A fat standing record is needed (reconstruction is fragile/expensive)" (rejected).** The canon explicitly chose artifact-first warming and warns against over-mapping ("a context and time waste"); a denormalized record duplicates and rots (cache-invalidation). The fix for fragility is **stable pointers** (inquiry-id + route-id, not file paths) and **staged** warming — not a fat copy. The fat record trades a bounded reconstruction cost for an unbounded staleness cost.

- **"Even the thin choice-record is unnecessary — it's all inferable" (partly right, became the leanest option).** For selections that spawn a child inquiry, the choice + rationale can ride the child's existing relationship-links — near-zero new footprint. But non-spawning selections (direct edits, deferrals, abandonments) have no host artifact, so a thin central record is still needed for them. Hence the hybrid, deferred design.

- **"Drop the mark" (reversed).** Over-killed: it conflated the cheap one-bit mark with the fat log. On a static piece, authored-empty and consumer-filled, the mark is durable and identity-clean.

- **What survived:** decompose-by-where-it-lives → log choices not outcomes → a thin choice-record (maybe enriched links) + session-reconstruction-by-warming → a cheap kept mark → routelister untouched. It survived adversarial testing — the strongest prosecutions (are outcomes *always* artifacts? does "enrich existing links" cover *all* selections?) forced the honest refinements (the outcome-split; the hybrid; the mark-scope) rather than breaking it. Every load-bearing claim is anchored in a canon quote or a cross-domain structural pattern (database normalization; the git commit log), not in the analysis agreeing with itself.

## Open Questions

### Blocked
- **The hybrid choice-record's exact form** (enriched links vs a thin central index, and how they combine) — gated by the canon's "≥3 recorded turns"; the principle (choices-not-outcomes, stable pointers) is settled, the form is not.

### Research Frontiers
- **Does the *navigational* session need its own memory for parallel async routes?** The orchestrator clearly holds the choice-record; whether the (non-choosing) navigational session needs a memory to navigate dozens of parallel routes is the user's explicitly-deferred "discuss later."

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
[quoting the prior finding's "map is redrawn; the log is yours" + "start a travel log" passage, then:]

i really like this example u gave. although there are nuances.

routelister.md is not a whole map, it is a map PIECE; there are dozens of active map pieces, worked on async — so it makes sense to bond adding marks to the map for operational ease.

the travel log (where you went / chose / found) is the WRONG approach: we don't know how much we'll get; for code decisions you'd reduce code-meaning into natural language (bad); and we ALREADY have the artifacts — the code, the MVL loop's MD files — all traceable. So writing "what is done and where" duplicates what already exists.

I agree routelister shouldn't contain all info about selected routes / how implemented — I just suggested some MARKS: is it done or not, a generic readable "is this route explored or not".

traversal memory is correct as a need, but it's NOT an MD file. Traversal memory is the session context of the orchestrator session (not the navigational session — navigation doesn't choose). Maybe the navigational session also needs memory for parallel routes. discuss later.
```

</details>
