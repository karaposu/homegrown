## User Input

devdocs/inquiries/2026-07-09_09-05__articulate_warm_structure_layer/_branch.md — (STRUCTURAL design dive: settle the structure of articulate_warm — spec-artifact form · loop-control location · output-artifact · naming. Meaning + Process inherited. MIXED case, band RICH, signal-first, guard both ways. Full spec in the instruction.)

---

# Surfacing — the structure of articulate_warm

**Case:** mixed (artifact reads: the harness dirs/specs/protocols + the canon doc; possibility: the structural options). **Band:** RICH. **Signal-first below.**

## Signal (the load-bearing finds)

1. **★THE STRUCTURE IS ABSENT, NOT JUST UNDER-SPECIFIED — three verified facts converge.** (a) There is **no `articulate_warm/` (or `articulate_via_context/`) directory** — articulate_warm has no artifact of its own; it lives only in `docs/how_articulate_warm_should_be.md`. (b) The **current traverse pipeline is cold-articulate-only** — `Articulate-Simple → Surfacing → Sensemaking → …`; there is no warm pass and no re-anchor→re-surface loop wired in. (c) The `articulate_simple` spec has a cold-vs-warm **substrate-detection** edge (references/articulate_simple.md:184 — "Relevance present → warm; absence → cold") but **no warm *mode*** (no deliberate second pass, no loop). So the structure dive is really: **how does the warm pass + its loop come into existence structurally** — as an artifact and inside the runner.

2. **★S1 (spec form): a WARM-MODE SECTION inside the articulate_simple spec — not a separate discipline.** The evidence converges: no separate dir exists; the doc says "a re-invocation of the articulate_cold machinery under a context-informed mode, **not a separate cognitive discipline**" (§10) and "operations… canonically defined in `articulate_simple.md`… inherited here unchanged" (§12); and the spec **already acknowledges warm substrate** (:74/:184), so a "second warm pass" section extends an existing seam rather than bolting on. A separate `articulate_warm/` discipline would duplicate the five operations and contradict §10/§12.

3. **★S2 (loop-control): RUNNER-OWNED, as a cohesive block = the N=2 seam.** The doc says re-surface is "the runner's act" (§6/§10) and the 23-46 finding already ruled the loop runner-owned-now, extract-to-a-protocol-at-N=2. So the loop-control (invoke warm → check warm MQ2 → re-surface if the anchor moved & cap not hit → until fixpoint/cap → proceed) lives in the **traverse** pipeline, as a **cohesive block** between Surfacing and Sensemaking. Keeping it cohesive (not scattered through the runner) is exactly what makes the eventual extraction to `cognitive_harness/protocols/fetch_loop.md` clean when the 2nd site arrives.

4. **★THE GAP is the real deliverable.** Because the runner is cold-only today, the structural design is not "tidy an existing warm step" — it is "**insert the warm segment + its loop into traverse**, and give the warm behavior a home in the articulate_simple spec." The structure spans two artifacts: the **spec** (a warm-mode section) and the **runner** (a warm loop segment).

5. **S3 (output) + S4 (naming), briefly.** Output: the warm pass writes an **updated bundle** (cleanest as its own `articulate_warm.md`, parallel to `articulate_simple.md`), and `_branch.md` is re-derived from the warm bundle; `surfacing.md` **accumulates** across re-surface rounds (§8). Naming: the two-mode structure makes "articulate_simple with cold/warm modes" the unit → the deferred rename's natural landing is a `articulate/` dir housing both — note only, deferred.

## Workspace (regions)

### R1 — How the harness structures things [verified `ls`]
- **Discipline** = `cognitive_harness/<name>/` = `SKILL.md` (thin invocation wrapper: pre-read + instructions) + `references/<name>.md` (the full spec). True for articulate_simple, surfacing, sense-making, decompose, innovate, td-critique, routelister, paradigm_sweeper, **traverse** (the runner is itself a discipline-dir).
- **Protocol** = a single loaded-and-run file `cognitive_harness/protocols/<name>.md` — `conclude`, `branch_inquiry`, `seed_harvester`, `loop_diagnose`. No SKILL.md wrapper; a runner loads and executes it. **This is the structural form a runner-owned capability takes when extracted** (the 23-46 "protocol packaging a capability").
- **Two integration classes**, exactly as the 08-00 finding found: skills (disciplines + runner) and protocols.

### R2 — articulate_warm's current structural footprint: none [verified]
No `articulate_warm/` or `articulate_via_context/` dir. The only artifact is `docs/how_articulate_warm_should_be.md` (a design doc, not a built spec). So there is nothing to "restructure" — the dive designs what to **create**.

### R3 — The current traverse pipeline is cold-only [traverse SKILL.md]
`Run Articulate-Simple → Surfacing → Sensemaking → Decomposition → Innovation → Critique → Routelister`. `articulate_simple` runs once, cold, on the raw input (step 3). The only loop is the **whole-pipeline** outer loop ("If the question isn't answered after R, loop again with a refined focus") — pipeline-grain, not the articulate_warm inner loop. **The warm pass + its re-anchor→re-surface loop are not present.** The doc §1/§7 target (`cold → surface → warm → [re-surface → warm]* → downstream`) is unbuilt.

### R4 — The spec already has cold/warm, but as DETECTION not a MODE [references/articulate_simple.md:74, :184]
- :184 (an LLM-Judgment Edge): "**Cold-vs-warm-context detection** — Examines loaded context for relevance signals… Relevance present → warm; absence → cold. Prefer cold-context treatment under uncertainty."
- :74 / :401: "Substrate (warm session context if present; cold otherwise)."
This is *adapt-to-whatever-substrate-is-present*, a per-invocation judgment. It is **not** the articulate_warm design (a deliberate, runner-sequenced **second** pass that controls a fetch loop). **Consequence:** the warm-mode section folds in cleanly (the spec already knows "warm substrate") *and* adds something genuinely new (the second-pass + loop-control behavior). The existing edge should **cross-reference** the new warm-mode section.

### R5 — The spec's structure (where a warm-mode section folds in) [references/articulate_simple.md headers]
Sections include: What Articulation Is · Key Components (Five Operations · 2-shape · AMBIGUITY-NATURE · Composition · Asymmetric-Failure) · Lightweight Stance · NOT-List · **Process Model** · LLM-Judgment Edges · Failure Modes · Verdict Assignment · **Output Contract** (per-item bundle / statement-level / assembly) · Worked Examples · **Execute the Following Process**. A warm-mode section (e.g. "## Warm Re-invocation — the second (post-context) pass") slots naturally after **Process Model / Execute**, reusing the Output Contract (the warm pass emits the *same* bundle with MQ2 + Rephrase re-fired). The how_articulate_warm_should_be.md content is the **design source** for that section (fold in, or link as the companion design doc).

### R6 — S1 options (spec-artifact form) [possibility]
- **(i) Separate discipline dir** `cognitive_harness/articulate_warm/` (SKILL.md + references). **Merit:** maximal legibility (warm gets its own greppable home). **Cost:** duplicates the five operations OR references back to articulate_simple anyway; contradicts §10/§12 "not a separate discipline"; two specs to keep in sync. **Disconfirming weight:** the legibility merit is real but is better served by a well-named section + the existing companion doc.
- **★(ii) Warm-mode section in articulate_simple** + a mode note on its SKILL.md. **Merit:** DRY (operations defined once, inherited); matches §10/§12; extends the existing warm-substrate seam (R4). **Cost:** the spec grows; "one spec, two modes" must be signposted so the cold reader isn't confused. **Evidence points here.**
- **(iii) Thin mode-doc** — keep `how_articulate_warm_should_be.md` as the warm description, add a pointer + a mode flag in the built spec. **Merit:** lowest churn now. **Cost:** the warm behavior stays in `docs/` (a design doc), not in the built `references/` spec the runner's discipline actually loads — a split between "described" and "built." Acceptable as an interim, weaker as the target.

### R7 — S2 options (loop-control location) [possibility + 23-46]
- **★(i) Runner-owned** — a warm segment in traverse's pipeline between Surfacing and Sensemaking, with the termination rule (§8) enforced by the runner. **Pre-constrained here by 23-46** (runner-owned at N=1). Keep it a **cohesive block** = the N=2 extraction seam.
- **(ii) Protocol now** — `protocols/fetch_loop.md` the runner loads. **Premature per 23-46** (N=1; one wired instance). The cohesive-block seam (i) is what makes this cheap *later*.
- **(iii) In-the-warm-mode (discipline self-loops)** — **rejected**: contradicts §6 (no-fetch) + §10 ("re-surfacing is the runner's act"). The discipline requests-by-re-anchoring; it does not drive the loop.
- **Disconfirming (runner-bloat):** traverse SKILL.md is already large; adding the warm segment grows it. This is a *real* cost and a mild argument for earlier protocol extraction — but 23-46's N=2 rule governs; the mitigation is the cohesive block (extract-when-earned, cheaply).

### R8 — S3 options (output-artifact) [possibility + Output Contract]
- The warm pass emits the **same per-item bundle** (Output Contract, :251-270) with MQ2 + Rephrase re-fired and the rest carried through. Where it lands: **(i)** its own `articulate_warm.md` (parallel to `articulate_simple.md`) — cleanest for audit (both passes visible); **(ii)** an in-place update to `articulate_simple.md` — loses the cold/warm diff; **(iii)** a delta file — extra machinery.
- Cross-artifact: `_branch.md` is derived from the articulation, so on a warm pass it is **re-derived** from the warm bundle. `surfacing.md` **accumulates** across re-surface rounds (§8 "the workspace accumulates; earlier material is not lost, the new territory is added") — so surfacing.md is append/enrich across rounds, not overwrite.
- **Lean:** (i) own file — it keeps the two passes legible and matches the "second pass" framing.

### R9 — S4 (naming/dir) [deferred, note only]
The two-mode structure makes "articulate_simple, with a cold pass and a warm mode" the unit. The deferred cold/warm rename's natural landing is a `cognitive_harness/articulate/` dir housing both modes (references/articulate.md with cold + warm sections). Interaction: **do S1 first (mode structure), then the rename can move the whole unit once.** Note only — rename stays deferred.

### R10 — The N=2 seam [S2 × the 23-46 consumer]
The runner's warm loop-control is the **first** fetch-loop instance. Written as a cohesive block ("re-anchor→re-surface until fixpoint/cap, oscillation-guarded"), it is the template the **second** instance (sensemaking→surface, the 08-00 missing-material case) would match. When that 2nd site is wired, the block extracts to `protocols/fetch_loop.md` and both callers load it. So the structure's job now: **make the block cohesive and parameterizable-in-place** (upstream U=surfacing, downstream D=warm-MQ2, need-signal, material-change test, cap) so the later extraction is a move, not a rewrite. This is exactly the 23-46 "prepared-extraction sketch," now given a structural home.

### R11 — DISCONFIRMING / guard-both-ways
- **Is the warm-mode-section too cramped?** Possible failure: burying a load-bearing second pass inside a "cold" spec makes it easy to miss. **Mitigation:** signpost strongly (the cold-vs-warm edge at :184 cross-refs it; the SKILL.md names both modes). If signposting proves insufficient in practice, escalate to a separate spec — but not pre-emptively.
- **Does a separate spec earn its keep?** Only if warm diverges enough from cold to be its own discipline. Per §12 it does **not** — it inherits all operations and changes only which re-run + adds the loop. So separate-spec is over-structure now.
- **Should the loop be a protocol now?** The runner-bloat cost is real, but N=1 → runner-owned (23-46). Extract at N=2. Reported honestly; not overridden.

## Hypothesis map (for the pipeline; do NOT decide here)
- **S1** → warm-mode SECTION in articulate_simple (R6-ii), extending the existing warm-substrate seam (R4); not a separate discipline; the doc = the design source.
- **S2** → runner-owned loop segment in traverse (R7-i), a cohesive block (R10) = the N=2 seam.
- **S3** → the warm pass writes its own `articulate_warm.md` (R8-i); `_branch` re-derived warm; `surfacing.md` accumulates.
- **S4** → naming deferred; the mode structure makes `articulate/` the eventual dir (R9).
- **★THE GAP** → the runner is cold-only (R3); the structure includes **wiring the warm segment into traverse** — the design's real weight.
- **Consistency re-test (23-46/08-00/doc):** runner-owned loop ✓ (23-46); the loop-control is the judgment-governed re-fetch ✓ (08-00); "not a separate discipline / receives-never-fetches" ✓ (doc §6/§10/§12).

## Thin artifact (relevance-tagged)
- **CRITICAL:** the three-fact convergence (no warm dir · cold-only pipeline · detection-not-mode) → the structure is absent (R2/R3/R4) · S1=warm-mode-section (R6) · S2=runner-owned-cohesive-block=N=2-seam (R7/R10) · THE GAP (wire the warm segment into traverse, R3).
- **HIGH:** the spec's fold-in point (R5) · S3=own-file + accumulating surfacing (R8) · the existing cold-vs-warm edge must cross-ref the new section (R4).
- **MEDIUM:** S4 naming→`articulate/` deferred (R9) · protocol/conclude.md as the extraction exemplar (R1).
- **DISCONFIRMING (kept):** warm-mode-section cramped-risk (mitigate by signposting) · separate-spec over-structures now · protocol-now premature but runner-bloat is a real cost (R11).

## Telemetry
- Territory swept: the harness dir tree (verified) + articulate_simple SKILL.md & reference (structure + the cold/warm edge, grepped) + traverse SKILL.md (cold-only pipeline) + the protocols dir + the canon doc §6/§8/§10/§12 + the 23-46/08-00 findings. Convergence reached (the four facets + the gap saturated; no new structural option on a second pass).
- Verify-don't-assert honored: R1 grounded in `ls`; R2/R3/R4 grounded in `ls` + grep (:74/:184 quoted, headers listed); the "spec already has a mode" guard RESOLVED — it has a *detection edge*, not a *mode* (reported, as instructed).
- Guard both ways: separate-spec + protocol-now surfaced with real merits (R6/R7/R11), not strawmanned; the runner-bloat cost stated.
- Self-assessment: **PROCEED** to Sensemaking (stabilize: S1 mode-section · S2 runner-cohesive-block/N=2-seam · S3 own-file · S4 deferred · THE GAP = wire warm into traverse).
