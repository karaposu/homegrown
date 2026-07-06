---
status: active
model: claude-opus-4-8
effort: max
refines: devdocs/inquiries/2026-07-04_17-45__between_loops_fork_recall_surfacing_placement/finding.md
---
# Finding: Picking Up Parked Directions — the Project Already Writes Them and Never Looks Back

> **A note on words.** An earlier brainstorm called this operation "the fork-recall," and the prior pass used terms like *deferred fork*, *germination*, and *conditional continuation*. This version drops that jargon. The one term to know: a **parked direction** — a direction a traverse noticed it *could* pursue, chose not to pursue yet, and left a short note about ("worth coming back to when X happens"). That note is a **come-back-when note**. Everything below is built from those two plain ideas.

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-07-04_17-45__between_loops_fork_recall_surfacing_placement/finding.md (the prior, high-effort pass on this same question).

**Revision trigger:** The user asked to dive this again at maximum effort, heavy on new ideas, treating the prior pass as a floor to build past.

**What changed for the better (with reasons given below):**
- **What we bring back.** The prior pass brought back *"similar past work"* — anything that resembled the new direction. This pass brings back the **parked direction** — a direction an earlier traverse deliberately set aside with a come-back-when note. That is a much sharper thing, and the project *already writes these constantly*.
- **How we find it.** The prior pass had each new traverse look back over the past to find resemblances. This pass has each traverse **file its own parked directions** where later traverses can find them, so a new traverse just **looks them up** — no searching back over everything.

**What stayed the same (the prior pass got this right):** the operation has two halves (a saving half and a reading half); the saving half is a small step at the end of the loop; you only ever *add* notes, never rewrite old ones; the work is paid once, cheaply, by the traverse that has the material fresh.

**What got a small correction:** "never touch old files" becomes "never rewrite old *content* — but you may append a short 'picked this up' note."

**Migration:** the prior pass's planned spec-write should now target *this* design (parked directions + file-and-look-up), not its resemblance-links. Its correct groundwork is kept.

## Question

Between one traverse and the next, holding a candidate direction to go in, the project should surface the past experience relevant to that direction. The prior pass designed this as a small step that files "what this traverse resembles" and reads it back at the start of the next one. The user asked to look again, harder, for what that pass missed — or to confirm it honestly.

## Finding Summary

- **The thing to bring back is a parked direction, and the project already writes tons of them.** Every traverse, as it finishes, notes directions it could have taken but didn't — in the finding's "deferred" next-actions and in the route-list's set-aside routes, each with a come-back-when note. A structural scan finds this shape in **~391 findings.** They are written every time and **never read again.** The gap isn't that the project fails to remember its set-aside directions; it's that it writes them down and then never looks.

- **The whole shippable design is small.** (1) **File:** when a traverse finishes, it saves its own parked directions into one shared list, tagged by direction. (2) **Look up:** when the next traverse's direction is chosen, look up the parked directions whose come-back-when note now fits. (3) **Revive:** the person (or the navigation step) picks one to become the next traverse's starting point, and adds a short "picked this up" note so a use-once direction won't come up again. That's the entire core.

- **Finding is a look-up, not a search.** Because the parked directions are already written, a new traverse doesn't comb back over everything — it looks them up by direction. The past traverses did the work of writing them down; the new one just reads.

- **There's nothing to edit, so the "don't rewrite old files" worry disappears.** You don't keep a separate master list that has to be edited. The parked directions live in the notes each traverse already wrote; whenever you need "the current list," you assemble it by reading those notes. The only writing is *adding* — a new parked direction, or a short "picked this up" note. Nothing old is ever rewritten. This is the cleanest version of the "only add, never edit" rule the prior pass was reaching for — and it's why the user's idea of *"updating old traverses' route-lists"* isn't needed: there's no master list to update.

- **Reviving is a suggestion you can decline, not an automatic action.** A match just surfaces a parked direction; a person or the navigation step decides whether to actually pick it up. This keeps the judgment where it belongs, and it's the reason the "watcher" (the separate thing that pushes alerts) stays separate: the watcher actively pushes; this looks things up passively when asked.

## Finding

### The shippable core, kept deliberately small

Lots of ideas came out of this pass (they're at the end, under "the frontier"), but the core that should actually be built first is small — three steps over one shared list:

1. **File (end of the loop, small step).** When a traverse finishes, it has already written its parked directions — the finding's "deferred" items and the route-list's set-aside routes, each with a come-back-when note. This step just *saves* them into one shared list, tagged by direction so they can be found later. Its only real work beyond copying is turning each come-back-when note into a searchable tag. It makes no decision about where the project should go next.

2. **Look up (start of the next traverse).** When the next direction is chosen — normally when someone is deciding what to work on next — look up the parked directions whose come-back-when note fits that direction. A quick look-up against a tagged list, not a re-read of everything.

3. **Revive (a choice).** A matching parked direction is shown to the person or the navigation step, who may turn it into the next traverse's starting point. If it was a *use-once* direction, add a short "picked this up" note so it won't surface again.

Everything past this point is either a small refinement of these three steps or an explicitly-deferred extra.

### Why "parked direction" and not "similar past work"

The prior pass brought back anything that *resembled* the new direction. This pass brings back a direction an earlier traverse *deliberately set aside with a note*. The difference matters. Resemblance is guessed by comparing content. A parked direction is a plain statement — "come back here when X" — so finding it is just checking whether X now holds, which is far more precise than guessing at similarity.

And it's grounded in what the project already does. A scan finds the parked-direction shape (a "deferred" section with come-back-when notes) in **~391 findings** — plus dozens of set-aside routes in the route-lists. (That's a count of findings that match the pattern — a rough scale figure, not a hand-checked tally — but the shape is unmistakable and shows up in nearly every finding.) The project writes these every single time and reads them back never. Bringing back *resemblances* is still useful as a weaker, secondary catch — for connections nobody thought to write down — but the sharp, already-written thing to bring back is the parked direction.

### Finding by look-up, not by searching back

Because the parked directions already exist, the way you retrieve them flips around. Instead of each new traverse searching back over the whole past for resemblances, each finishing traverse **files its own parked directions** (tagged by direction) into one shared place, and each new traverse **looks up** the ones that fit its direction. The cost is paid once, by the traverse that had the material fresh in front of it, and it's cheap to read forever after. (If that shared list is ever empty — a cold start — searching back over the past is the fallback, but that's the exception, not the design.)

### Nothing to edit: the list is assembled from notes, not stored and changed

You might expect a "master list of open directions" that gets edited as directions are added and picked up. There isn't one, and that's the point. The parked directions live in the notes each traverse already writes. Whenever you want the current picture — which directions are open, which have been picked up — you build it by reading those notes. The only writing that ever happens is *adding*: a new parked direction when a traverse finishes, or a short "picked this up" note when one is revived. No old note is ever rewritten.

This dissolves the thing the user was circling with *"maybe it should update old traverses' route-lists?"* There's no old list to update — updating would mean rewriting old files, which causes exactly the problems the prior pass warned about (clashes when several traverses run at once, and losing the plain "only ever add" safety). Adding a short "picked this up" note is fine because it's an addition, not a rewrite.

### Reviving is a choice, and that keeps the "watcher" separate

A match is a suggestion, not a command. When the look-up finds a parked direction that fits, it's *shown* — and a person, or the navigation step, decides whether to actually pick it up. This does two useful things. It keeps the real judgment (where should the project go next?) with a person, not baked into the loop. And it explains why this stays separate from the "watcher" — the other mechanism that actively pushes alerts at you. The watcher pushes without being asked; this looks things up passively when a direction is on the table. Same territory, opposite manner — so they're rightly kept apart.

### The frontier (good ideas, deliberately deferred)

The max-effort pass turned up a real neighborhood of extensions. None belongs in the first version; each has a clear signal for when to revisit:
- **Promote directions that keep getting picked up.** If a parked direction is revived often, rank its kind higher. Cheap; likely the first extra to add once the core runs.
- **Let stale directions fade.** Drop parked directions that are clearly dead — but fade them based on *the direction being abandoned*, not on *age*. A direction that's waited a long time and finally fits can be the *most* valuable one to pick up, not the least. Add this only when false matches start showing up.
- **How much to save with each parked direction.** Start light (just a pointer plus the come-back-when note; re-derive the rest when picked up). Only save more if re-deriving turns out to be expensive.
- **Further out:** ranking matches by how likely/valuable they are; scoring which directions are "hubs." Both need more scale than exists yet.

(One idea was cut rather than deferred: "reviving a direction re-files a sharpened version of it" isn't a special mechanism — the traverse it spawns writes its own parked directions like any other traverse. The list improves for free.)

## How This Compares to the Prior Pass

This pass's job was to say clearly what it changed:

| Aspect | Prior pass | This pass |
|---|---|---|
| What we bring back | "similar past work" (guessed by resemblance) | a **parked direction** (a set-aside direction with a come-back-when note) — *sharper, and already written ~391 times* |
| How we find it | each new traverse searches back over the past | each traverse **files** its own; new ones **look up** by direction |
| The "don't edit old files" worry | "only add links, never rewrite" | there's **no master list to edit** — you read the notes and assemble the picture; the worry disappears |
| Reviving | (not separated out) | a **suggestion you can decline**, not an automatic action |
| The stable parts | two halves, small step in the loop, only-add, pay-once | **kept and credited** |

Honest bottom line: the prior pass got the *shape* right and left the *what-you-bring-back* and the *how-you-find-it* vague. This pass sharpened both, on solid ground (the ~391 already-written directions), and kept the result small enough to build.

## Inherited Commitments Re-test

Each earlier finding this one builds on, re-checked:

- **Prior pass (17-45).** Re-checked at full effort — its shape holds (two halves; small step in the loop; only-add; pay-once); *what we bring back* and *how we find it* are replaced; the "don't rewrite" rule is refined; resemblance-recall is demoted to a secondary catch, not removed.
- **The fungus finding (15-11) — where "picking up a set-aside direction" was first named.** Re-checked — still holds, now sharper: the thing you pick up is a written parked direction, and picking it up is a definite step.
- **The mycelium finding (15-56) — traverses connect through the shared record; don't over-merge things that should stay separate.** Re-checked — the shared list of parked directions is that connection; the "don't over-merge" caution is what keeps this a passive look-up (not merged into the watcher) and keeps writing to *adding only* (not editing the shared record).
- **The slime-mold finding (16-25) — the record does two jobs (build up / avoid repeating).** Re-checked — extended: the record now also holds set-aside directions, and the "picked this up" notes are how it avoids repeating.
- **The brute-force finding (16-51) — a "go here" trail as a candidate feature.** Re-checked — a revived direction *is* that "go here" pointer, drawing the next traverse toward it.
- **The original brainstorm (11-24) — the "watcher" is a separate, direction-blind thing; this operation is direction-aware.** Re-checked — that separation holds, for a sharper reason (passive look-up vs active push).

## Next Actions

### MUST
*(None. This pass decided the design; it isn't itself a code change.)*

### COULD
- **Write the first-version spec:** file parked directions into a tagged shared list → look up by direction → revive with a "picked this up" note. **When:** your call — the main next step. **Keep to:** the small core; describe the "assemble-from-notes" idea in plain project terms (notes you add and read, not a database); leave the frontier out.
- **Reconcile with the prior pass (17-45):** note that this replaces its *what-you-bring-back* and *how-you-find-it* while keeping its shape, and point its planned spec-write at this design. **When:** your call.
- **Record the "assemble-from-notes" idea** in the record-layer notes (you never edit a master list; you read what each traverse wrote). **When:** if/when that gets documented.

### DEFERRED
- **The frontier extras** (promote-often-picked-up; fade-abandoned; how-much-to-save; ranking). **When:** each has its own signal — promotion first once the core runs; fading when false matches appear; the rest need more scale.
- **The bigger-picture significance** (this is what lets one traverse's set-aside question get picked up later by a completely different traverse — the way one researcher's open problem gets solved by another who read their paper). **When:** if the grounding write-up wants it — and stated as *enabling* that behavior, not *achieving* human-like thinking.

## Reasoning

**Dropped — searching back as the main way to find things.** Combing ~391 findings from scratch every time is the exact waste; the directions are already written, so filing-and-looking-up is cheaper. Searching back survives only as a cold-start fallback.

**Dropped — editing old files.** There's no master list to edit; the picture is assembled from notes each traverse already wrote, and the only writing is adding.

**Dropped — auto-reviving on a match.** A match is a suggestion; forcing it would take the judgment away from the person and push this toward the always-on "watcher."

**Cut — "reviving re-files a sharpened version" as a separate mechanism.** It's just the next traverse writing its own notes, which happens anyway.

**Held back — the whole frontier.** Promoting, fading, ranking: all real, none first-version. The discipline of this pass, after deliberately generating a lot, was to keep the buildable core small so the new ideas don't turn into an unbuildable pile.

**Checked against reality, not just cleverness.** The change rests on facts, not novelty: the ~391 already-written directions; the plain difference between a written "come back when X" and a guessed resemblance; and the fact that this is just notes-you-add-and-read, not new machinery.

## Open Questions

### To watch
- Whether, once built, picked-up directions actually make the next choice better — argued from the ~391 count, not yet measured.
- Whether wrong matches show up (a direction surfacing where it shouldn't) — the signal to add fading.

### Still open
- Whether a come-back-when note written as prose can be turned reliably into a searchable tag, or whether traverses should write those notes in a more structured way.
- How much to save with each parked direction (a bare pointer vs enough to resume directly) — answerable only once re-deriving proves cheap or costly.

### Would trigger a revisit
- If traverses start writing structured come-back-when notes, check whether the ~391 older ones can be back-filled or only new ones count.
- If several traverses ever run at once, confirm that add-only filing stays clash-free (it should — each writes only its own notes).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
with our new understanding and analogies 

> SEED 2 — The fork-recall: the between-loops surfacing.
[... the SEED-2 block, as in the prior pass ...]

lets dive deep into this one, 

do this once more, with heavy on innoation.  bc last one was usign high reasoning effort and i want you to think in max effort for this imporant thing
```

*(The bracketed block is the same SEED-2 text as the prior pass; the new part is the instruction to dive again at maximum effort, heavy on new ideas.)*

</details>
