## User Input

devdocs/inquiries/2026-07-09_08-00__harness_stage_lens_and_fetch_loop_necessity_vs_substrate/_branch.md — (DESIGN dive, continues-from + re-tests the 23-46 fetch_loop finding. Surfacing = draw material for 3 coupled items: A stage-lens + skill-correction · B reuse-beyond-preprocessing · C substrate-redundancy. MIXED case, band RICH, signal-first, guard both ways. Full spec in the instruction.)

---

# Surfacing — stage lens, fetch_loop reuse, and substrate redundancy

**Case:** mixed (artifact reads: the protocols dir, sensemaking:466, traverse SKILL.md, the kernel-bet + north-star; + possibility: the three design threads). **Band:** RICH. **Signal-first below.**

## Signal (the load-bearing finds)

1. **★Item A skill-correction — the user is essentially RIGHT; my "capability not skill" was too sharp.** The harness has **two** reuse-unit classes (verified `ls`): **skills** (disciplines + runners) and **protocols** (`conclude.md`, `seed_harvester.md`, `branch_inquiry.md`, `loop_diagnose.md`, `resume.md` — loaded-and-run by runners). A reusable "runner-owned capability" in this system **is mechanically a protocol the runner loads** (exactly how `conclude.md` runs). So the honest form is **"a protocol/skill packaging a convergence capability — NOT a traverse-like linear runner."** Concede the packaging (skill/protocol is the reuse unit here); preserve the shape (convergence ≠ linear pipeline) and the N=2 timing.

2. **★Item A stage-lens — VALID as a feedforward view, and it makes the fetch loops legible.** pre(articulate+surfacing) / proc(sensemaking+decompose+innovate) / post(critique+routelister) is a clean three-phase read. Its one leak is illuminating: **the fetch loops are exactly the FEEDBACK EDGES that cross the stages** (articulate↔surfacing = preprocessing-internal; sensemaking→surfacing = a processing→preprocessing back-edge), and critique→the traverse outer-loop is a post→everything back-edge. So the lens is a feedforward skeleton; **fetch loops = the back-edges.** Naming the stages is what makes "where do fetch loops go?" answerable.

3. **★Item B — the two named sites DIFFER, and the difference is the answer.** Sensemaking is a **genuine latent pair-scale site** (another surfacing genuinely helps — but only in the *missing-material* case, distinct from its Accommodation trigger which is *wrong-model / re-work existing*, sensemaking.md:466). Critique is **NOT a distinct pair-scale site** — its re-fetch need is **pipeline-grain** and is **already served by the traverse outer loop** ("if the question isn't answered after R, loop again with a refined focus"). So: sensemaking yes-latent, critique no-already-handled.

4. **★Item C — the substrate point is REAL and SHARPENING, but PROVES TOO MUCH if taken absolutely.** "Claude Code already fetches internally, so we don't need it" — applied absolutely — would equally dissolve sensemaking, critique, decomposition (the substrate "thinks" natively too). So it can't be an absolute argument against *fetch_loop specifically*; it's a **gradient** argument about which operations deserve explicit discipline. What it correctly does is **narrow the criterion**: explicit fetch earns its place only where the fetch-**decision** is a **disciplined cognitive judgment worth recording** (re-anchoring: "has the articulated aim moved to new territory?"), NOT mere **data-gathering** ("go read another file" — the substrate handles that well).

5. **★THE SYNTHESIS — the three items lock together on one axis.** Explicit fetch loops belong where a **disciplined re-framing judgment** governs the re-fetch. That is preprocessing *by nature* (A), it extends to sensemaking's missing-material case (B), and it is exactly what the substrate should NOT implicitly own (C). C's criterion *explains* B's split and *validates* A's lens (preprocessing = the disciplined-framing stage; the fetch loop is its internal feedback edge).

## Workspace (regions)

### R1 — The integration mechanics: two reuse-unit classes [verified `ls` this turn]
`.claude/skills/protocols/` = {branch_inquiry, conclude, loop_diagnose, resume}. `cognitive_harness/protocols/` = {branch_inquiry, conclude, loop_diagnose, seed_harvester}. These are **loaded-and-run** by runners (CONCLUDE was loaded from `.claude/skills/protocols/conclude.md` this very session and executed step-by-step). So the harness's reuse units are **skills** (disciplines + the traverse runner) **and protocols** (procedure files a runner loads at a point). **Consequence for Item A:** "a runner-owned capability" is not a third thing — in this system it materializes as a **protocol** (or a skill). The user's "the only way to integrate is as a skill" is right in spirit; precisely, *skill-or-protocol*.

### R2 — The 23-46 verdict being re-tested [session context]
The prior finding said: fetch_loop is "a small runner-owned **capability**, not a skill, not a discipline"; the category-mismatch = traverse composes at the **pipeline grain** (linear per iteration, re-runs wholesale), fetch_loop at the **pair grain** (re-fetch to a signal-fixpoint); timing = extract at the 2nd WIRED instance (N=2). **Re-test result surfacing:** the *shape* claim (pair-grain convergence ≠ linear pipeline) STANDS; the *packaging* claim ("not a skill") is **too sharp** given R1 → revise to "a protocol/skill packaging the convergence capability, not a traverse-like linear runner." Timing untouched by this.

### R3 — The stage lens: fit + the illuminating leak [traverse SKILL.md]
- **Fit:** pre = articulate (get the question right) + surfacing (gather material) = *prepare the inputs*. proc = sensemaking (stabilize) + decompose (partition) + innovate (generate) = *the core transform*. post = critique (evaluate/gate) + routelister (enumerate onward) = *finish/evaluate outputs*. Clean, familiar, and — per the user — not a rename mandate, just a view.
- **Leak (the good part):** it's a **feedforward** picture, but the harness has **back-edges**: (i) critique can trigger the traverse **outer loop** — SKILL.md: *"If the question isn't answered after R, loop again with a refined focus"* — a post→(re-run everything) edge; (ii) the fetch loops cross stages (articulate↔surfacing internal to pre; sensemaking→surfacing is proc→pre).
- **★Emergent:** the stage lens + the fetch-loop question illuminate each other — **fetch loops ARE the cross-stage feedback edges** of the otherwise-feedforward pipeline. The lens gives them a home ("the back-edges"); they give the lens its dynamics.

### R4 — Item B, sensemaking: genuine latent site [sensemaking.md:466 + 23-46]
Accommodation trigger (verbatim, :466): *"When new perspectives keep producing anchors that destabilize the current model… the structural model itself may be wrong… **re-extract anchors using the destabilizing perspectives as primary sources.**"* → this is the **wrong-model** case, re-working **existing** material. The user's question — "while sensemaking, is it highly possible that another surfacing would help?" — is **YES**, but for a *different* case: when the model won't stabilize because **material is missing** (never surfaced). That is a genuine pair-scale re-fetch (sensemaking→surfacing), and it needs a **new discrimination** (wrong-model → re-extract; missing-material → re-surface). Matches 23-46's "latent 2nd site." Affirm the user's intuition; size it (needs the discrimination, real per-site work).

### R5 — Item B, critique: already handled at pipeline grain [traverse SKILL.md + td-critique]
Critique's backstop ("what does the design miss?") can reveal a gap — but critique does not re-fetch to convergence; it **feeds the traverse outer loop** (the whole-pipeline re-run with refined focus). So critique's re-fetch need is **pipeline-grain and already served**. It is **not** a distinct pair-scale fetch-loop site. **The differentiation (B's real output):** sensemaking's re-fetch is a *disciplined pair-scale judgment* (missing-material); critique's is *pipeline-grain* (re-run everything) — already in the runner.

### R6 — Item C, the value proposition (why explicit ≠ redundant) [the_kernel_bet.md, quoted]
- §5: *"competence is scale's domain… **Regulation + record is precision's domain**: what to think about next, what to keep, what was done and why. The core that cannot be absorbed by weights… is the **verifiable commitment practice — criteria-files-before-data (timestamp-ordered pre-registration), declared deviations, versioned records** under independent control."*
- The user's own words (kernel-bet Source Input): explicit operations *"prevent LLM taking shortcuts… gives us this reliability, like **we know it will go and traverse this thinking space, and we can see the results because our system outputs MD files.**"*
- **Contrast surfaced:** the substrate's fetch (Claude Code re-reading files, re-grepping, re-searching) is **implicit, uncontrolled, unrecorded, no convergence criterion**. The harness's fetch loop is **explicit** (defined need-signal), **criterion-bound** (converges when the need stabilizes), **capped/guarded**, and **recorded** (surfacing.md re-runs). That explicit+recorded quality is *precisely* the kernel-bet's un-absorbable core.

### R7 — Item C, the two edges (guard both ways) [analysis grounded in R6]
- **Edge 1 — PROVES TOO MUCH.** "The substrate already does X, so we don't need explicit X" is, taken absolutely, an argument against the **whole harness** — the substrate also thinks, senses, critiques natively. The project exists on the bet that **explicit disciplined versions of native operations add reliability**. So the substrate-point cannot single out fetch_loop; it's a **gradient** question: *which* operations repay explicit discipline?
- **Edge 2 — REAL + SHARPENING.** The point correctly **narrows the criterion**. Not every re-fetch deserves an explicit loop. **Data-gathering** ("go read more") → leave to the substrate (it's good at it, and no disciplined judgment is involved). **Re-framing** ("has the articulated aim moved to a materially different territory — should I re-anchor?") → make explicit (a disciplined judgment with a recorded criterion). This is a genuinely better gate than 23-46 had.

### R8 — The synthesis [composition of R3/R4/R5/R7]
One axis unifies all three items: **explicit fetch loops belong where a disciplined re-framing judgment governs the re-fetch.**
- **A:** preprocessing IS the disciplined-framing stage → the fetch loop lives there by nature (its back-edge).
- **B:** sensemaking's missing-material re-fetch meets the criterion (a real judgment) → genuine site; critique's need is pipeline-grain / data-gathering-ish → already handled or substrate-owned.
- **C:** the criterion is precisely "disciplined judgment worth recording" vs "data-gathering the substrate owns."
So C's criterion *explains* B and *validates* A. This is the dive's likely spine (held open for sensemaking).

### R9 — DISCONFIRMING / guard-both-ways checks
- **Against over-caving on A:** conceding "it can be a skill" must not silently import "so build the skill now" — the N=2 timing is independent and untouched; the shape (convergence ≠ pipeline) still forbids "a skill *like traverse*."
- **Against over-defending on C:** if the honest read were "the substrate genuinely makes explicit fetch pointless," the finding must say so. It doesn't — but only because the value-add is *discipline+record* (R6), not raw capability. If a site's fetch has **no disciplined judgment** (pure data-gathering), then for THAT site the substrate-redundancy point WINS — and the finding should say that too (partial deflation of over-broad application).
- **Against the clean synthesis (R8):** it's tidy; the sensemaking pipeline must test whether "disciplined re-framing judgment" is a real criterion or a post-hoc label. The test: does it correctly *predict* the critique-vs-sensemaking split without being fitted to it? (It does: critique's need is pipeline-grain independently of the criterion — a mild corroboration, to be prosecuted at Critique.)

## Hypothesis map (for the pipeline; do NOT decide here)
- **A-lens** → VALID feedforward view; fetch loops = its feedback edges (R3).
- **A-skill** → CONCEDE packaging (skill/protocol, R1); PRESERVE shape + timing (R2). Revise 23-46's "capability not skill" → "protocol/skill packaging a convergence capability, not a traverse-like runner."
- **B** → sensemaking genuine-latent (missing-material, R4); critique already-handled (pipeline-grain, R5). Output = the differentiation + the criterion.
- **C** → conditional necessity: proves-too-much if absolute (R7-edge1); real+sharpening as a criterion (R7-edge2); value-add = discipline+record (R6).
- **SYNTHESIS** → explicit fetch loops belong where a disciplined re-framing judgment governs the re-fetch (R8); guard the tidiness (R9).
- **Re-test of 23-46:** shape/timing CONFIRMED; packaging REVISED (skill/protocol); a NEW necessity-criterion ADDED (disciplined-judgment-vs-data-gathering) that sharpens what a "genuine site" is.

## Thin artifact (relevance-tagged)
- **CRITICAL:** the two reuse-unit classes (R1 — grounds A-skill concession) · the substrate two-edged analysis (R7 — C's core) · the sensemaking/critique differentiation (R4/R5 — B) · the synthesis axis (R8).
- **HIGH:** the stage-lens-as-feedforward + fetch-loops-as-feedback-edges (R3) · the kernel-bet value proposition (R6) · Accommodation = wrong-model (R4, :466).
- **MEDIUM:** the 23-46 shape/timing preserved (R2) · the traverse outer-loop clause (R3/R5).
- **DISCONFIRMING (kept):** proves-too-much (R7-e1) · don't-over-cave-on-A (R9) · substrate WINS for pure-data-gathering sites (R9) · the clean-synthesis caution (R9).

## Telemetry
- Territory swept: the protocols dirs (verified `ls`), traverse SKILL.md (outer-loop clause), sensemaking.md:466, the_kernel_bet.md (§5 + Source Input, quoted), north-star, the 23-46 finding + fixpt-S1. Convergence reached (no new item on a second pass; the three threads saturated + the synthesis stabilized).
- Verify-don't-assert honored: R1 grounded in the `ls`; R6 quotes the kernel-bet verbatim (not asserted); R4 quotes :466; R3/R5 quote the traverse clause. Guard both ways surfaced explicitly (R9), including the case where the substrate-point WINS.
- Self-assessment: **PROCEED** to Sensemaking (stabilize: A concede-packaging-preserve-shape · B differentiate · C conditional-criterion · the synthesis axis · guard the tidiness).
