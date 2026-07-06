---
status: active
model: claude-fable-5
effort: max
refines: devdocs/inquiries/2026-07-03_09-13__generate_concept_view_protocol/finding.md
---
# Finding: Views Are the Read-Path Compaction Layer — Your Proposal, Adjudicated Better-as-Amended

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-07-03_09-13__generate_concept_view_protocol/finding.md`
**Revision trigger:** the user's proposal — views' purpose re-grounded as read-reduction for whole-project (non-worker) warm-ups, with stabilized-concepts-only selection and the reading formula "all views + non-view findings" — and their doubt (entanglement; info-loss; "is this better?").
**What's preserved:** the protocol's whole design (modes, constitution, mechanism, ceremony, trail).
**What's new:** the PURPOSE STATEMENT the design was missing (read-path compaction, with measured numbers); the coverage definitions (edge-coverage; the frontier); the three-tier read doctrine (digest-read / full-read / topic-read) with the full-read recipe; the guards (staleness-visible; the frontier-count metric; the airtight valve).
**Migration:** none — the doctrine lines (~25) join the protocol's build (the fourth enrichment of the same build route).

## Question

From `_branch.md`: *"I'm still not sure how views contribute to traversal memory — not all concepts can feasibly become views; concepts entangle, borders aren't clean; view-compression might lose information and lead us wrong. My idea: navigational (non-worker) sessions need whole-project awareness, but full reads are infeasible even skipping superseded. So: generate views only for already-STABILIZED concepts; the point is reducing total finding.md reads; a navigational session reads all views + the non-view findings. Do you think this is better?"*

## Finding Summary

- **Yes — better, and most of it was already ours.** Your selection rule (views only for stabilized concepts) is exactly what the stabilization ceremony selects; your "point" — total raw reads going down — is the purpose statement the design was missing. Verdict: **better-as-amended**, and the main amendment saves your own objection.

- **The correction that saves your entanglement objection:** you're right that concepts entangle and borders aren't clean — which kills ANY coverage rule phrased at the concept level, including your own "non-view findings." The fix keeps your idea and drops the broken unit: **coverage is decided per FINDING, on edges that are clean by construction** — a finding leaves the raw-read set when something supersedes or consolidates it (its refiner's frontmatter says so, borderlessly). No concept borders needed anywhere.

- **The purpose statement, plainly:** the corpus grows forever (history is sacred) and a session's window doesn't. So the corpus splits into two read-layers: **the frontier** (live findings nothing has consolidated — read RAW at summary grade) and **the compacted past** (read through views). Stabilization ceremonies move material from the first to the second: one consolidation supersedes N priors, and N raw reads become one view-head. **Views + ceremonies are traversal memory's read-path compaction layer — the mechanism that keeps whole-project awareness affordable as the corpus grows.** (Honesty note: read-path compaction only — storage never deletes.)

- **The numbers, labeled honestly (critique un-laundered them):** the raw whole-project read is **~34,000 lines** (your infeasibility premise, verified — even skipping superseded). **Today — with zero views existing — the summary-grade frontier read is ~2,640 lines** (120 frontier findings × ~22-line summaries): feasible RIGHT NOW. **At ~5-view maturity: ~3,500 lines projected**, shrinking as ceremonies consolidate. About a 10× reduction against raw, and it fits a window.

- **The frontier is computable today, no registry:** live findings (166) minus supersession targets (46, basename-matched) = **frontier: 120**. Two greps. That count becomes the health metric, printed in the digest's header.

- **The three read-tiers, named by what they read** (not by session-type — no session taxonomy exists): **digest-read** (default light warm-up, 204 lines) · **full-read** (your non-worker case: all views → compute the remainder → summary-read it; ~2.6k today) · **topic-read** (working a concept: its view + drilled findings, unchanged).

- **Your info-loss worry gets a structural answer, not a promise:** the newest, decision-heaviest material — everything not yet consolidated — is **never read through a view at all**; it stays raw (the frontier). And on any conflict, **the raw frontier outranks any view** (subordination applied to warm-up). Only the already-judged past is ever compressed.

- **The race, honestly:** the full-read stays cheap only while consolidations keep rough pace with new inquiries — otherwise the frontier bloats back toward infeasibility (gracefully: linear, not cliff). The frontier count makes the race visible. **And the valve is airtight:** ceremonies stay yours to declare; sessions never self-initiate ceremonies or view-generation off the metric; the number is for your eyes.

- **Zero new maintained artifacts** — views regenerate on demand; coverage derives from existing frontmatter; the count derives from greps. Your "another mess" worry has no artifact to live in.

## Finding

### 1. The verdict, with the credit and the correction

Your proposal contributes three things. Two are adopted whole: the **purpose** (the point of views is read-economics — the design had the mechanism but never stated what it buys traversal memory) and the **reading formula** (a warm-up tier that reads the compressed layer plus the raw remainder — genuinely new doctrine). The third — your selection rule, stabilized-concepts-only — was already the shipped ceremony's selection, which is confirmation from two directions. One thing needed correcting, and your own argument does the correcting: concepts entangle (~8–10 per finding, measured), so "non-view finding" is undecidable at the concept level — but supersession edges have clean borders by construction (`refines:`/`supersedes:`/`corrects:` frontmatter either names a finding or doesn't). Coverage moves to the finding level, and your entanglement objection stops being a problem and becomes the reason the design is shaped this way.

### 2. The purpose, built up from the need

A growing corpus and a bounded window force a split. What should be read raw? The material whose judgment is still open — the frontier. What can be read compressed? The material history has already judged — superseded and consolidated findings, whose content lives downstream by explicit edge. The ceremony is the pump between the layers: each full-tier consolidation supersedes N priors, removing N files from every future raw read and adding one consolidation (whose summary heads the regenerated view). Run the numbers on today's corpus: raw read ≈ 34,000 lines (infeasible — your premise held); the frontier at summary grade ≈ 2,640 lines (feasible now, zero views needed); at maturity with ~5 stabilized-concept views ≈ 3,500 lines, and FALLING as ceremonies shrink the frontier faster than views grow. That is what views contribute to traversal memory: **without them (and the ceremonies behind them), whole-project awareness dies by arithmetic; with them, it costs a tenth and stays bounded.**

### 3. The coverage mechanics (build-ready)

1. **Edge-covered:** the finding is a supersession/consolidation target — its content lives downstream; safe to meet as one line anywhere. *(46 live today.)* **The honest clause (critique's material catch):** the corpus's edges are overwhelmingly `refines:` (135 refines / 8 supersedes / 32 corrects), and a refined prior's commitments may STILL BIND — edge-coverage is therefore **awareness-grade**, and it rides the re-test mandate: every refiner must carry its prior's commitments (re-tested or explicitly inherited), so reading the chain's newest link reads a document that declares what it preserved. Where a refiner skipped its re-test, the compression over-trusts — one more reason the mandate is load-bearing. Binding-grade reading (a worker needing the prior's full constraints) drills the chain: topic-read territory.
2. **The frontier:** live findings that are not edge-covered — *frontier = live finding.md paths minus the corpus's frontmatter targets, matched by basename* (the era-bulk rider's lesson applies here too). **120 today, by two greps.**
3. *(Soft-coverage demoted:)* a finding already met as a top-k excerpt in step 1's views is skipped in step 3 — a **dedup clause**, not a load-bearing concept (the excerpt ≈ the summary; the saving is only the duplicate).

### 4. The read doctrine (build-ready)

**Tiers are named by what they read:**

- **digest-read** — the default light warm-up: the project digest (204 lines, recency-shaped).
- **full-read** — whole-project awareness (your non-worker case):
  1. **Read all views** (note each header's date; collect top-k excerpt source paths as you go).
  2. **Compute the remainder:** the frontier (two basename-matched greps) minus the paths collected in step 1.
  3. **Summary-read the remainder** (the Finding-Summary regex per file).
  **Rule: on any conflict, the raw frontier summary outranks any view.** The step-2 count prints with the read.
- **topic-read** — working a concept: its view + drilled findings (on-demand, unchanged).

### 5. The guards

- **Staleness (safe-by-construction, made visible):** views may be stale between regenerations — by design. The warm-up survives it because whatever moved past a view arrives RAW in the same read (the frontier includes everything newer, including precisely the findings that made the view stale); frontier-wins orders any conflict; every view prints its date. Regenerating first is always available, never required.
- **The race (the honest operating condition):** the full-read stays cheap only while ceremonies keep rough pace with inquiries; degradation is graceful (linear in the frontier count). **The frontier count prints in the digest's header** (`frontier: 120`) — the health metric, derived per run, no bookkeeping.
- **The valve (airtight):** ceremonies remain user-declared (the fuzziness boundary untouched); the warm-up reads only the views that EXIST (nothing generates at warm-up); **sessions never self-initiate ceremonies or view-generation off the metric** — a heavy frontier is reported as a number, never converted into pressure.

### 6. One house principle this surfaced

The frontier-stays-raw rule mirrors the seeds-trail-free rule from the trail inquiry: in both, the newest layer is read unmediated and compression only ever applies to what history has already judged. One line worth keeping: **the newest layer is never mediated.**

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger over three priors. Re-tests ran at critique; inherited with evidence:

- **Commitment:** freedom-first timing + the fuzziness boundary (from the lifecycle doctrine).
  - **Source:** `devdocs/inquiries/2026-07-03_09-55__view_timing_stabilization_and_archive_question/finding.md`.
  - **Re-test status:** RE-TESTED — commitment confirmed, with the valve HARDENED. **Evidence:** the read-economics purpose was prosecuted as gate-creep's cousin ("must stabilize to keep warm-up cheap"); the valve now closes every pressure path including the subtle one — sessions never self-initiate ceremonies off the metric; the number is information for the user, never a push. Nothing gates on stabilization; the full-read reads whatever exists.

- **Commitment:** one-concept-per-view (from the lifecycle doctrine).
  - **Source:** same finding.
  - **Re-test status:** RE-TESTED — commitment confirmed; the multiple-coverage cost measured as bounded. **Evidence:** a finding excerpted top-k in several views is read once per view (~25 lines each); plausible worst at maturity ≈ +250–500 lines — inside the projection's stated range, and the dedup clause names it.

- **Commitment:** the protocol's size/cost claims + the closed-trail economics.
  - **Source:** `devdocs/inquiries/2026-07-03_09-13__generate_concept_view_protocol/finding.md` + `devdocs/inquiries/2026-07-03_10-22__superseded_material_in_views_purpose/finding.md`.
  - **Re-test status:** RE-TESTED — confirmed with one un-laundering. **Evidence:** the warm-up arithmetic was recomputed at the letter and the "~3.5k today" claim caught as a PROJECTION (today, with zero views, the honest number is ~2,640 — pure frontier); the finding presents three labeled numbers (raw 34k / today 2.6k / maturity ~3.5k). The 10× reduction claim stands against the raw baseline.

## Next Actions

### MUST

*(None — the adjudication is the deliverable; the doctrine lands with the build, gated on your word.)*

### COULD

- **What:** the protocol build, fourth enrichment — the read doctrine's ~25 lines join the transcription (tiers · the 3-step recipe with frontier-wins · the coverage definitions with the awareness-grade clause · the metric line · the valve · the purpose paragraph with three labeled numbers).
  **Who:** the AI, within the same ≤30-minute build.
  **Gate:** condition-bound — your word (`[∥]` the protocol map's build route, now carrying four inquiries' lines).
  **Why:** the protocol ships as the complete read-side of traversal memory.

- **What:** the full-read's first run — validate the 2.6k today-number live (zero views → pure frontier at summary grade; print the count; record where the recipe chafes).
  **Who:** the AI, after the build.
  **Gate:** condition-bound — after the build.
  **Why:** a warm-up doctrine that has never warmed anything is paper.
  **Depends-on:** the build. GATED.

- **What:** the re-test-mandate audit — sample the 135 refiners by era for `Inherited Commitments Re-test` coverage; where old chains lack re-tests, edge-coverage over-trusts (implication: a caution line or back-fill consolidations — unknown until measured).
  **Who:** the AI, cheap sampling.
  **Gate:** condition-bound — before trusting old chains in full-reads (or at your curiosity).
  **Why:** critique showed the mandate is load-bearing for compression safety; honesty extends to measuring what it rides.

### DEFERRED

- **What:** the all-views cap (when the view count makes "read all views" heavy).
  **Gate:** condition-bound — the tier's own printed arithmetic saying so.
  **Why (if revived):** relevance-filtered view selection; a scale problem for a scale that doesn't exist yet.

## Reasoning

**Why better-as-amended rather than plain yes:** your formula's load-bearing term ("non-view findings") was undefined, and the only definition that survives your own entanglement argument is the finding-level one — adopting the proposal unamended would have shipped the broken unit. **Why finding-level coverage is safe to that amendment:** supersession edges are explicit, borderless, and carried forward by the re-test mandate — with the honest bound stated (awareness-grade; 135 of the corpus's 175 edges are refines, where priors may still bind; the refiner's carrying duty is what makes the compression safe, and its coverage is now a routed audit).

**Significant kills:** concept-level coverage (the user's own argument); "navigational session" as tier-vocabulary (undefined session taxonomy — tiers renamed by what they read); the 6-step recipe (compressed to 3); soft-coverage as a load-bearing concept (demoted to a dedup clause — the excerpt ≈ the summary); the projection-as-measurement (un-laundered into three labeled numbers); mandatory freshness gates (staleness is visible instead); any new registry or state file (everything derives per run).

## Open Questions

### Monitoring
- The full-read's first run: does the 2.6k estimate hold, and where does the recipe chafe?
- Does the frontier count in the digest header actually get looked at (the memory-iff-read test, on the metric)?

### Blocked
- Everything landing — blocked on the protocol build (your word), by design.

### Refinement Triggers
- If the re-test-mandate audit finds thin coverage on old chains → add the old-chain caution line to the full-read, or route back-fill consolidations (your call — the valve applies to back-fills too).
- If the frontier count trends up across several digests → the race is being lost; the number is on your desk, the ceremonies are yours to declare.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i am still not so sure how creating and maintaining the views will contribute to traversal memory, for generic understanding yes maybe, but all concepts cant be feasibly generete into views, concepts overlap and entangle and borders are not so clean.

So this view approach might get us into another mess, with informatin loss due to view it might even lead us wrong way.

we should be smart about how we design this.  i think generic idea is this.

non worker session , lets say navigational session should have whole project as a view. but it is not feasible to read all inquiries for each new session as a warm up.  even if we skip superseeded ones ,

so what we can do is to select certain topics and concepts, and generate view for them, these are already stabilized concepts,

and the point is to reduce the number of total finding.md reads via this compressed views of stabilized concepts.

and non worker session, still reads all views and non view findings

do you think this is better?
```

</details>
