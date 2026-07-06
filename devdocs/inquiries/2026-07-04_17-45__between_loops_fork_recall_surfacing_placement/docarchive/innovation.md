# Innovation — The Between-Loops Fork-Recall Operation (Placement + Mechanism)

## User Input

`_branch.md` + prior outputs (surfacing / sensemaking / decomposition) in this folder. Production-task mode — seed = the 6-piece plan (shape / write-half [CENTER] / mechanism [CENTER] / read-half+SEED-2 / work-split / CONNECT-emergent+re-test). ALL SEVEN mechanisms fire (tested; kills recorded); core three-variation set at Q2+Q3; Piece-Level Inversion at Q2 ("keep it in navigation") and Q3 ("mutate-old is fine" → re-defeat). Plain design register; the two-halves as spine; SEED-2 resolved as an answer to its own decidability; the non-sycophancy ledger visible; CONNECT scoped to the record-layer; analogies as design intuition.

---

## Mechanism Coverage Ledger (7/7)

| # | Mechanism | Fired → yield | Verdict |
|---|---|---|---|
| 1 | Combination | write-half + read-half + path-graph = the two-halves mechanism (Q1); anastomosis + slime-trail + ant-trail = an append-only positive cross-link | SURVIVES → Q1/Q2 |
| 2 | Absence recognition | the absence = no explicit link-graph exists at write-time (nav recomputes cold, A5); and no NAME for the third record-function | SURVIVES → Q2/Q6 |
| 3 | Domain transfer | append-only logs / event-sourcing (never mutate history; compute views at read-time) — an ENGINEERING warrant for append-forward independent of biology | SURVIVES → Q3 (strengthens) |
| 4 | Extrapolation | densifying union = the "graph files" nav wants (A4); mutate-old under multihead = write-write CORRUPTION; append-forward has no conflict | SURVIVES → Q3 (sharpens the cost) |
| 5 | Lens shifting | "memory op" → "an economy": the write-half is AMORTIZATION — pay thin at warm-write to save the cold recompute | SURVIVES → Q2/Q5 (names the WHY) |
| 6 | Constraint manipulation | relax "loop writes only its own files" → a THIRD target: append to a SHARED index (≠ mutating old files) — a middle mechanism option | SURVIVES (bounded) → Q3 sub-option |
| 7 | Inversion (framer) | Q2-inversion "keep in navigation" + Q3-inversion "mutate-old is fine" | Q2 refined; Q3 inversion KILLED |

---

## Finding-Ready Pieces

### Q1 — The shape: two halves of one mechanism
The between-traverse "fork-recall" is not one operation but **two halves of a single memory mechanism, sharing the path-graph** (`_route.md` + the relationship links). A WRITE-half records, after a traverse finishes, which past traverses this one connects to. A READ-half surfaces, before the next traverse starts, the past experience relevant to the candidate direction. They are distinct — a write produces a durable artifact consumed later by other (possibly cold) sessions; a read pulls direction-relevant context into attention now — but they are two ends of one thing: the write-half lays down what the read-half later picks up.

### Q2 — The write-half: a new post-routelister loop step [CENTER]
Add a step to the traverse loop, **after routelister**: the finishing traverse surfaces the past traverses and paths it connects to, and records those connections. This affirms the user's insight, and it follows a precedent the project already set — routelister itself was moved out of the isolated navigation session and into the loop for exactly this reason. The argument is **amortization**: at the end of a traverse the relevant context is already warm (the traverse just ran), so surfacing "what does this connect to" is cheap *now* and expensive *later*, when a cold navigation session would have to reload everything to recompute it. Each traverse pays a small, warm cost so the navigation session doesn't pay a large, cold one.

One constraint the step must respect: **it must be thin.** It surfaces connections and appends links — mechanical work. It does not judge which connections matter for steering, and it does not decide the next move. That judgment stays in the navigation session (Q5). A thin write-half keeps the loop simple and keeps the complex, changeable logic centralized where it's maintainable.

### Q3 — The mechanism: append-forward, never mutate-old [CENTER]
The write-half writes **append-forward**: each traverse writes backward-pointing links into *its own* `_route.md` ("this connects to past traverse X, path Y"). The full graph is the *union* of every traverse's own links; a reader computes the reverse edges at read-time. **No old artifact is ever edited.**

The user asked whether the step should instead *update old traverses' routelisters*. The honest answer is no, and on four independent grounds:
1. **It buys nothing.** Bidirectional navigability is real value, but a reader already gets it by reading the union — if traverse N links to traverse 3, any reader knows 3←N without touching 3's file.
2. **It breaks the append-only record.** The whole record-layer works because it accumulates and is not rewritten; the external trail is a deposit, not a document you go back and revise.
3. **It corrupts under multiple heads.** The architecture explicitly supports several worker traverses running at once; if each edits shared old files, they collide. Append-forward has no such conflict — each traverse writes only its own file.
4. **It's the anti-pattern append-only logs exist to avoid.** In engineering, history is appended and views are computed at read-time precisely because mutation-in-place is fragile. The design intuition and the analogy agree: the slime-trail is laid down, not re-walked and rewritten.

So "reactivation of an old path" is **not** a mutation. An old path re-activates when many forward-links accumulate pointing at it — it *thickens by accumulation*, exactly as a productive tube thickens with flow — and a reader notices. Reactivation is an emergent, read-side effect, not a write-side edit.

*(Sub-option, surfaced not decided: the write **target** could be each traverse's own `_route.md`, or a single shared append-only index the step appends one line to, or both. A shared index is easier to read but re-introduces one concurrency point; per-traverse files are conflict-free but must be unioned. Append-forward is settled; the target is a follow-on refinement.)*

### Q4 — The read-half's home, and what it answers in SEED-2
The read-half lives as **a doctrine line on the topic-read** — the context-assembly that happens when composing the next traverse. Its job, now that the links exist explicitly, shrinks to: read the links relevant to the candidate direction. No new pre-articulation protocol is needed.

This resolves the seed's own decidability. SEED-2 framed the choice as "either the topic-read IS this operation (one doctrine line) or something genuinely precedes articulation (a new protocol)," and noted *no third shape had appeared*. The third shape is the **write/read split**: the read-half was always the topic-read — the seed's first horn was right — but it was starved, because the thing it should read (an explicit link-graph) didn't exist yet. The missing piece was never a pre-loop protocol; it was the **post-loop write-half**. The seed couldn't see this because it hadn't separated recording the memory from using it.

### Q5 — The work-split: thin-mechanical in the loop, judgment in navigation
The division is **write-in-loop, steer-in-navigation** — and, more precisely, **thin-mechanical work in the loop, complex judgment in the navigation session.** The loop owns writing its own links (local, cheap, warm, no judgment). The navigation session owns consuming the union, comparing across heads, and committing the next move — the steering that must stay centralized so the system has one coherent sense of direction rather than many worker heads each trying to steer. The over-integration warning from the mycelium dive polices this boundary in both directions: the loop's write-role must not bleed into mutating the shared corpus (which is why mutate-old is out), and it must not bleed into steering (which stays in navigation).

### Q6 — The emergent, and the inherited commitments
**Emergent — the record-layer gains a third function.** The record was described as doing two things: *accumulate* (the growing body / the corpus) and *avoid-redundancy* (the anti-redundancy trail — "don't re-search here"). The write-half adds a third: **connect** — "this past path is relevant to that direction; go here." That is the ant's positive, go-here trail, distinct from the record's existing avoid-here flavor. The between-traverse write-half is precisely the operation that produces this third function. Scope it carefully: this extends the analogy-family's account of the record-layer; it is not a redefinition of meaningful traversal (that remains the spec-slot's job).

Inherited commitments, re-tested: the fungus's **fork-recall home** holds and is sharpened — the fork now has an explicit record to re-enter. **Anastomosis** is operationalized — the write-half is anastomosis performed by the loop. The **over-integration wrinkle** proves load-bearing — it adjudicates append-forward over mutate-old. The **record's two functions** extend to three. The **ant positive-trail**, flagged earlier as a candidate feature, is adopted here as the write-half's link.

---

## Piece-Level Inversions

**Q2 inverted — "don't migrate; keep the write-work in the navigation session."** Steelmanned: centralized logic is more maintainable than logic spread across every traverse's loop. Real concern — and it is answered by keeping the loop-step **thin** (surface + append, no judgment). The complex, changeable logic (which links matter, how to steer) stays centralized in navigation; only the thin mechanical deposit migrates. With that refinement, the migration survives: the warm-write amortization (lens 5) is a genuine efficiency the cold-recompute status quo forfeits. **Q2 SURVIVES, refined: the write-half must be thin.**

**Q3 inverted — "mutate-old is fine, even better."** Tested against the four grounds above (buys nothing / breaks append-only / corrupts under multihead / engineering anti-pattern). All four hold; the inversion fails on each. **Q3 inversion KILLED** — which is what the non-sycophantic correction requires: the user's floated "update old routelisters??" is shown to fail crisply and specifically, not waved away.

---

## Assembly Check — Emergents

- **E1 · The CONNECT function** (Q6) — the record-layer's third function; the write-half is its producer. Confirmed from sensemaking; named here.
- **E2 · The amortization principle** — the efficiency driver generalized: *migrate work loop-ward when it is thin-mechanical, cheap at warm-write, and otherwise paid cold and repeatedly.* This is the reusable principle under both the routelister migration and this one. BOUNDED: it licenses migrating *thin* work consumed cold, not "move everything into the loop."
- **E3 · The thin-loop / thick-navigation split** — the work-split sharpened past write/steer into thin-mechanical vs complex-judgment; answers the maintainability concern and gives a clean test for what may migrate.
- **E4 · The write-target sub-option** — per-traverse file vs shared append-only index vs both; surfaced, not decided (a follow-on).

## Kills / Bounds
- **KILL** — mutate-old-routelisters (Q3 inversion, 4 grounds).
- **KILL** — the collapse reading (write = read; defeated in sensemaking, not revived).
- **BOUND** — CONNECT scoped to the record-layer, not a spec-slot redefinition.
- **BOUND** — the amortization principle scoped to thin-mechanical-work-consumed-cold.
- **BOUND** — the write-target sub-option surfaced, not decided.
- **BOUND** — the write-half must be THIN (surface + append; no judgment) or the loop bloats and the maintainability concern bites.

**Coverage: 7/7 mechanisms fired. Core-3× at Q2+Q3. Both inversions run (Q2 refined; Q3 killed). 4 emergents, 2 kills, 4 bounds. Proceed to Critique.**
