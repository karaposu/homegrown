# Innovation — Open-Directions Index: How Good a Solution Is It Really?

## User Input

`_branch.md` + prior outputs. PROPORTIONATE default coverage (evaluation, not design-build). Seed = the 6-piece plan. All 7 mechanisms fire (tested; kills recorded); core-3× at Q3 (index-as-substrate) + Q6 (grade + correction); Piece-Level Inversion at Q1 + Q3. Plain language; grade decomposed; non-sycophancy both ways.

**Methodology-mode:** inherited = Standard-default (elaborate the committed verdict). Alternative considered = Contrarian-rethink (Framer-weighted). What follows under the alternative: heavier inversion of the whole verdict — but the seed is *already* adversarial (self-authored design, steelman-both-ways done in sensemaking), so Standard-default WITH the two mandated piece-inversions is right. Decision: **default** (the adversarial work is already loaded into the seed; over-weighting Framers would re-litigate settled steelmans).

**Inherited Frame Audit:** the seed's central assumption is "the ODI = the pull mechanism." That assumption IS explicitly challenged in the candidate set (Q3 inverts it: the index is the substrate, pull is one read). Audit does not fire — the frame is already broken open by the sensemaking restructure.

---

## Mechanism Coverage Ledger (7/7)

| # | Mechanism | Yield | Verdict |
|---|---|---|---|
| 1 | Combination | index (F4) + two reads (pull+push) = substrate-with-two-reads; "push greps recorded state" + "the index IS recorded state" = push presupposes the index | SURVIVES → Q3 spine, E1 |
| 2 | Absence recognition | ABSENT from the doc: the push read; distillation/pruning; the index-as-substrate framing. Redesign-level: from scratch, the index is the first-class object, pull+push are reads | SURVIVES → Q3/Q5/Q6, E1 |
| 3 | Domain transfer | native-domain: a store vs its access patterns (DB + on-demand query vs materialized-view/trigger; a log + poll vs subscribe). The ODI conflates the STORE with ONE access pattern | SURVIVES → Q3, E1 |
| 4 | Extrapolation | extend "index grows every traverse, pull-only": at scale the index is huge + write-mostly, pull harvest stays low → the write-only problem RETURNS; and the steering job never gets done if only pull is built | SURVIVES → Q5/Q4, E2 (sharp) |
| 5 | Lens shifting | shift frame "is the ODI good?" → "is the INDEX good, and is pull the right first read?" — under the index-frame the foundational thing is genuinely good; the fault is framing not substance | SURVIVES → Q6, E3 |
| 6 | Constraint manipulation | REMOVE "the ODI = pull-only" → the index can host push too (the correction). ADD "must help SELECT the next traverse, not just enrich a chosen one" → pull fails, push required | SURVIVES → Q4/Q6 |
| 7 | Inversion | Q1 "it IS a breakthrough" → KILLED (write-half only + no capability-unlock; partial credit to the write half). Q3 "index is trivial / pull is the contribution" → KILLED (push presupposes the index) | see Inversions |

---

## Finding-Ready Pieces

### Q1 — Is it a breakthrough "as the routelister addition to the loop"? No.
The benchmark is specific (from the steering canon and the actual precedent): the routelister-into-loop move (i) protected a real cognitive function — movement-space attention; (ii) *relocated a whole existing discipline* into the loop at ~zero new infrastructure; (iii) rode an intrinsic end-of-traverse act; and (iv) *unlocked a new downstream capability* — an isolated navigation session comparing per-traverse route-maps across multiple heads (multihead coordination). Measured against that, the ODI meets the "cheap / rides-existing" criterion on its **write half only** (filing the Directions the loop already produces), and it **unlocks no new capability** as-packaged — it enriches individual traverses. Meeting some criteria on one half is not a breakthrough at the whole-design level. **Verdict: no — a good increment, not a breakthrough.**

### Q2 — Does F4-instance status make it unremarkable? Novelty low; value not lowered by that.
The ODI is an instance of F4 (entity-threaded registry) from the project's own traversal-memory paradigm map — and `_route.md` is literally F4's exemplar. So as a *paradigm* it is not new. But novelty and value are orthogonal: the write half being a clean, proven application of F4 is exactly *why* it is cheap and sound. The known-ness is a virtue (a settled pattern), not a demerit. **Novelty: low. Value of the write half: high. Do not slide from "not novel" to "not valuable."**

### Q3 — What is the ODI's actual load-bearing contribution? The INDEX, not the pull. [CENTER]
The real contribution is the **index** — recording each traverse's set-aside Directions in one queryable place. The Look-Up (pull) is one *read* over that index; it is not the contribution, it is *a* way to consume it. The load-bearing structural fact: **a push read presupposes the index.** The push finding (U8) builds its "watcher" as a CHECK that *greps recorded state* on a moment — so "surface aging high-value directions uninvited" requires those directions to be recorded in one queryable place, which is precisely the index. So pull and push are two access patterns over one store, and the store is the foundation both need.

The corollary is the honest criticism: the ODI doc **welds the foundational index to the weaker read (pull-only)** and names the whole thing after that read. That is a *storage-vs-access-pattern conflation* — treating one access pattern as if it were the thing itself. Separate them and the design clarifies: index = the store (foundational, cheap, F4); pull + push = two reads over it.

### Q4 — Does it "feed the steering layer" as the doc claims? Only for a heading already chosen.
Pull surfaces a parked direction *only when a new traverse is already heading toward its topic and queries it.* So it **enriches an already-chosen heading** ("I'm starting on X — what past directions relate to X?"). It cannot **originate the selection** ("what should I even work on next?"), because it needs a focus to query *with* — a chicken-and-egg for the selection problem. The canon's hard steering job is selection; pull does not do it. The doc's "feeds the steering layer" claim over-reaches its mechanism. The selection job belongs to **push** — a watcher that surfaces the high-value aging directions *uninvited* — over the same index. **Pull = enrichment (the easy half); push = selection (the hard half).**

### Q5 — Is scaling fatal, a non-issue, or a solvable gap? Real, named, solvable.
Real: the index grows on every traverse (write-mostly), and the pull read is a fuzzy LLM judgment over the whole pile — both degrade as it grows (the doc itself flags this). Not a non-issue. But not fatal either: three composable fixes exist — **F6 (distilled ledger cascade)** — scheduled distillation into compact read-surfaces; **Priority/Essentiality pruning** — the index already carries these, so a read can surface only `core`/high routes; and **push reads grep rather than read-the-whole-pile**, so an active read scales differently from a fuzzy full-scan. **Scaling is a design gap, unsolved as-specced, solvable by composition — not a fatal flaw.**

### Q6 — The honest grade + the single highest-value correction.
**Grade: GOOD FOUNDATION, MIS-PACKAGED.** Decomposed:
- **Index (write half):** HIGH value — cheap, intrinsic, F4-proven; shares several of the routelister-addition's virtues; foundational (both reads need it).
- **Pull (the doc's committed read):** MODERATE — sound for enrichment, weak for selection, and over-identified with the whole design.
- **Novelty:** LOW (F4 instance) — not a demerit, just not new.
- **Breakthrough:** NO (write-half virtues only; no capability-unlock).
- **Scaling:** SOLVABLE GAP (unsolved as-specced).

**Highest-value correction:** re-frame the design around the **index as the substrate**, and present **pull AND push as two reads over it** — letting push do the hard steering/selection job the doc currently (over-)claims for pull. That single move upgrades the design from "one modest read welded to a good store" to "a foundational store with the easy read (pull) and a path to the hard read (push)."

## Piece-Level Inversions

- **Q1 inverted — "it IS a breakthrough."** Tested: the cheap-on-ramp is a genuine, strong virtue (closes a real write-only gap with data that already exists). But it applies to the *write half only*, and the whole design unlocks no new capability the way routelister-into-loop unlocked multihead. **KILLED as "breakthrough"; extracts partial credit — the write half genuinely shares the breakthrough-virtues.**
- **Q3 inverted — "the index is trivial; the pull IS the contribution."** Tested: fails hard — push presupposes the index, the index is the shared substrate both reads need, and pull is the *swappable* part. If anything the pull is the trivially-replaceable component and the index is load-bearing. **KILLED; strongly confirms Q3.**

## Assembly Check — Emergents

- **E1 · Storage-vs-access-pattern is the real lens** [HIGH; converged by Combination + Domain-transfer + Constraint-removal → robust]. The ODI's core error is conflating the *store* (the index) with *one access pattern* (pull). Separating them — index = store; pull + push = two reads — is the whole correction, and it dissolves the pull-ceiling debate (the ceiling is a property of *pull*, not of the index). This unifies Q3 + Q4 + Q6.
- **E2 · The write-only problem returns at scale unless a read actively harvests** [HIGH; from Extrapolation + Constraint-add — the sharpest substantive critique]. Pull is a *passive* read — it harvests only what a traverse happens to query, so most parked directions are never read, recreating the write-only failure one level up. Push is an *active* read — it harvests the high-value ones uninvited. **So the index needs at least one active read to actually solve the write-only problem it targets; pull alone only half-solves it.** This is why push isn't optional polish — it's what closes the loop the ODI opened.
- **E3 · The honest grade is a reframe, not a downgrade** [MED-HIGH]. Under the index-as-substrate lens, the design *contains* a genuinely good foundational piece; the criticism targets packaging and framing, not the core. "GOOD FOUNDATION, MIS-PACKAGED" is therefore precise and non-sycophantic both ways: credit the foundation, fix the framing.

## Kills / Bounds
- **KILL** — "it IS a breakthrough" (Q1 inversion: write-half virtues only, no capability-unlock).
- **KILL** — "the index is trivial / pull is the contribution" (Q3 inversion: push presupposes the index).
- **KILL** — "the ODI should be dropped/deprioritized for push or F6" (sensemaking steelman: push *needs* the ODI's index; the index is not skippable).
- **BOUND** — push is *buildable* here (U8's check+moment+interrupt) but not yet built; the correction points at a path, not a shipped feature.
- **BOUND** — F6 distillation is a known fix but adds a scheduled-distill mechanism; real, not free. Don't over-claim scaling is trivially handled.

**Coverage: 7/7 mechanisms fired; both piece-inversions killed; 3 emergents (E1 storage-vs-access-pattern, E2 write-only-returns-without-active-read, E3 grade-is-a-reframe). Proportionate to an evaluation. Proceed to Critique.**
