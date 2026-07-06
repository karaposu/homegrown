# Surfacing — Open-Directions Index: How Good a Solution Is It Really?

## User Input

`devdocs/inquiries/2026-07-05_00-21__open_directions_index_solution_quality_evaluation/_branch.md` — evaluate how good the Open-Directions Index (ODI) is as a traversal-memory solution; is it breakthrough-level (like the routelister addition to the loop), inelegant, or scaling-limited? **Artifact + possibility case**, GROUNDED in the real corpus (read this session). Honest-adversarial stance (self-authored design — no benefit of the doubt).

**Grounded reads this session:** the ODI doc; `devdocs/sweeps/traversal-memory/paradigm_sweep.md` (8 families); `devdocs/inquiries/2026-07-03_16-39__push_driven_memory_mechanisms_dive/finding.md` (the push/U8 alternative); `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` (the benchmark's origin); the traversal-memory canon.

---

## Cluster A — Where the ODI sits in the paradigm landscape (the novelty question)

- **A1 · The ODI is an instance of F4 (Entity-threaded registry)** [FACT, core]. The sweep defines F4 as "per-identity records extended across runs; query/glance read" — and names `_route.md`'s identity-set as its *exemplar*. The ODI is exactly this: per-Direction records, accumulated across traverses, read by query. **It is an established family, not a new paradigm.**
- **A2 · Its read has an F5 (reconstruction/warming) flavor** [core]. Relevance is computed *at read time* (the topic-match), not stored — the F5 "rebuild at read" move, applied to retrieval.
- **A3 · The existing committed traversal-memory design is already a composition: F2 (thin choice-records) + F3 (✓ marks) + F5 (warming)** [FACT, sub]. The ODI ADDS an F4 index. So it's an *increment to a composition*, not a from-scratch solution.
- **A4 · Consequence for "breakthrough via novelty"** [core]: on the novelty axis, the ODI is NOT a breakthrough — it applies a known family. (But novelty is only one sense of "good"; see Cluster D for the benchmark's actual criteria.)

## Cluster B — The pull-vs-push axis (the sharpest limitation)

- **B1 · The ODI is purely PULL** [FACT, core]. Its Look-Up fires only when a *new traverse is already heading toward a topic* and queries the index. Nothing surfaces unless a reader's question selects it.
- **B2 · The push finding (U8) shows the complementary half exists and is buildable here** [core]. "Push without a daemon" decomposes a watcher into CHECK (grep/session) + MOMENT (warm-up boundary / git hook / cron) + INTERRUPT (dated alert-note / banner / device). The past reaches you *uninvited* — relevance fires before any reader exists.
- **B3 · The structural gap this exposes** [core, load-bearing]: the ODI can only surface a parked direction when *some current traverse happens to head near its topic*. A high-value direction that no current traverse is looking toward **stays buried forever** — the exact write-only failure the ODI set out to fix, recreated one level up (filed, but never queried because nobody asks for its topic).
- **B4 · The steering vs enrichment distinction** [core]: the ODI *enriches a heading you've already chosen* ("I'm starting on X — what past directions relate to X?"). It does NOT help *choose* the heading ("what should I even work on next?"). The canon's steering problem is the latter; push (U8) addresses it, pull (ODI) does not. **The ODI's doc claim "feeds the steering layer" is true only for an already-chosen focus — narrower than it reads.**
- **B5 · They are COMPLEMENTARY, not competing** [sub]: pull (ODI) = enrichment of a chosen start; push (U8) = uninvited surfacing for selection. A full traversal memory plausibly wants both. So "does an alternative dominate?" → push doesn't dominate; it covers the *harder half* the ODI leaves open.

## Cluster C — Scaling (the user's explicit worry, sharpened)

- **C1 · The index grows monotonically, write-mostly** [core]. Every traverse appends set-aside Directions (~hundreds already exist write-only); only a fraction are ever queried. A store that grows on every write and is read only when a topic happens to match is a "write-mostly, read-rarely" pile — a scaling smell.
- **C2 · The read is an LLM relevance-judgment over the whole pile** [FACT, core; the ODI doc flags this]. At hundreds→thousands of entries, plain label-reading degrades; the match quality drops or the read cost climbs.
- **C3 · A known mitigation exists but is NOT in the ODI as specced** [sub]: F6 (distilled ledger cascade) — scheduled distillation into compact read-surfaces (turn → session → epoch). Composing ODI + F6 addresses C1/C2. So scaling is a *real but solvable* concern, currently unsolved in the doc.
- **C4 · Priority/Essentiality could prune the read** [side]: routelister routes carry Priority + Essentiality; the index could surface only `core`/high routes, bounding the read. Also unspecced.

## Cluster D — The benchmark: what actually made the routelister-into-loop addition good

- **D1 · It protected a distinct cognitive function** [FACT, core]. The steering canon: the navigation session exists "to protect one cognitive function: movement-space attention." Routelister enumerates the field of onward moves — a different operation from solving the local problem.
- **D2 · Migrating it INTO the loop relocated an EXISTING, well-formed discipline to where it's cheapest** [core]. Routelister was already a complete discipline; running it as the traverse exhaust step meant every traverse enumerates its own onward routes *while warm*, at zero new infrastructure, and reduced the separate navigation session's complexity.
- **D3 · It was intrinsic** [core]: enumerating onward routes is a natural end-of-traverse act (the traverse just exhausted the territory). The addition rode an operation that already belonged there.
- **D4 · It enabled a coordination layer (multihead)** [sub]: per-traverse route-maps give an isolated navigation session something auditable to compare across heads.
- **D5 · The benchmark's criteria, distilled** [core, the yardstick]: (i) protects/creates a real cognitive organ; (ii) relocates/rides an *existing* capability (cheap, intrinsic); (iii) zero-to-low new infrastructure; (iv) reduces complexity elsewhere; (v) enables downstream capability (multihead). **This is what "breakthrough as routelister addition" must be measured against.**

## Cluster E — What is genuinely GOOD about the ODI (balance)

- **E1 · The WRITE side (File) is elegant and intrinsic** [core]. Appending the Directions the loop already produces to a shared index is a clean F4 extension — cheap, in-place, rides an existing output. This half meets benchmark criteria (ii)+(iii).
- **E2 · It closes a real write-only gap using data that already exists** [core]. The routelister already writes onward Directions every traverse; the ODI adds only the *read*. This is a genuine strength (cheap on-ramp; the canon's "create the first traversal-memory artifact" is nearly free here).
- **E3 · It composes cleanly** [sub]. It extends the existing F2+F3+F5 design without conflict, and composes with F6 (scaling) and U8 (push) rather than blocking them.
- **E4 · Relevance-triggered delivery, when it fires, is well-timed** [sub]. The direction surfaces exactly when a related traverse starts — the right-time property is real (for the pull case).

## Cluster F — Elegance, decomposed (the "not so elegant maybe?" question)

- **F1 · The design is TWO halves with different elegance** [core]. WRITE (File) = elegant/intrinsic (E1). READ (Look-Up) = the questionable half (pull, reactive B3/B4, scaling-fragile C1-C2). The user's "maybe not elegant" instinct lands specifically on the READ half.
- **F2 · The read adds a new step at traverse START** [sub]. Unlike the routelister addition (which rode an existing END-of-traverse act), the Look-Up introduces a new front-of-traverse operation — less "rides what's already there."
- **F3 · The naming/scoping is now clean** [side]: post-rename (Open-Directions Index) the artifact and operations are plainly named; not an elegance problem.

## Cluster G — Boundaries / honesty guards

- **G1 · Not a build request** [bounding]: the deliverable is an evaluation, not an implementation.
- **G2 · Don't reopen the 19-10 correction or the naming** [bounding]: both settled.
- **G3 · Self-authored design — adversarial stance mandatory** [bounding]: the design was produced by the assistant; every "good" must be earned against the benchmark, not asserted.
- **G4 · Novelty ≠ value** [bounding]: F4-instance status (A4) lowers the *novelty* grade but does not by itself make the ODI bad — a well-applied known pattern can still be the right cheap increment (E1-E2). Keep these separate in the verdict.

---

## Traversal Trace (thin artifact)

| # | Region | Items | Relevance | Conf |
|---|---|---|---|---|
| 1 | paradigm_sweep.md (F1–F8) | ODI=F4-instance; existing design=F2+F3+F5; F6=scaling-fix; F7/F8 frontier | core | HIGH |
| 2 | push_driven finding (U8) | push-without-daemon; pull-vs-push; steering-vs-enrichment gap | core | HIGH |
| 3 | steering canon | benchmark criteria (movement-attention; relocate-existing; cheap; enables multihead) | core | HIGH |
| 4 | ODI doc | write-side elegant; read-side reactive+scaling-flagged; two-halves | core | HIGH |
| 5 | traversal-memory canon | the organ with zero instances; ODI = a cheap first slice | sub | HIGH |
| 6 | routelister spec (Priority/Essentiality) | unspecced pruning lever for the read | side | MED |

## State Summary

- **Territory:** the ODI design + the traversal-memory paradigm space + the routelister-addition benchmark + the push alternative + the canon problem-definition.
- **Coverage:** the decisive regions (paradigm map, push alternative, benchmark, the ODI's two halves) are covered at HIGH confidence. Confirmed-absent: no *dominating* single alternative (push complements, not dominates); no evidence the ODI is novel.
- **Frontier flags:** (a) exact scaling curve of LLM-read-over-index is unmeasured (as in the ODI doc); (b) whether ODI+F6+U8 is the right *composite* is a design question, not this evaluation's.

## Relevance Summary (for Sensemaking)

**HIGH / load-bearing:**
- A1-A4: ODI = F4-instance → **not a novelty breakthrough**.
- B1-B4: pure pull → **structurally can't do the harder steering/selection job; only enriches an already-chosen heading; push (U8) covers what it can't**.
- C1-C3: scaling is **real** (monotonic write-mostly index + fuzzy read), **solvable** by F6, **unsolved as specced**.
- D1-D5: the benchmark's real criteria (protect an organ; relocate an *existing* capability cheaply; enable downstream) — the yardstick.
- E1-E2: the write side IS elegant + the cheap-on-ramp IS a genuine strength.
- F1: elegance splits by half — write elegant, read questionable.

**For Sensemaking to adjudicate:** (1) breakthrough-verdict against D5's criteria — the write side partly meets them, the read side does not; (2) the honest grade separating novelty (low) from value-as-cheap-increment (real); (3) the pull-only ceiling (B3/B4) as the deepest structural limit; (4) scaling (C) as real-but-solvable; (5) whether the honest framing is "one good half of a larger organ (the pull/enrichment half), not the whole thing and not the harder half" rather than "breakthrough" or "bad."

**Self-assessment verdict:** PROCEED. Telemetry: mode artifact+possibility; 6 trace regions; core×4/sub×1/side×1; no workspace-overload; failure modes checked (missed-relevance, purpose-loss, self-coupling) — none fired; the adversarial stance held (surfaced real limits of a self-authored design).
