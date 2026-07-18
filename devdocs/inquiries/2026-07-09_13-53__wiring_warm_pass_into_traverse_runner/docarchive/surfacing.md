## User Input

devdocs/inquiries/2026-07-09_13-53__wiring_warm_pass_into_traverse_runner/_branch.md — (Surfacing for the PROCESS-layer wiring dive. Territory: the `/traverse` runner spec's control structure + the warm design's runner-facing commitments + /surfacing's invocation contract. Purpose: surface exactly what the wiring must fit into and honor. Bias: core = the runner's per-discipline mechanics + the warm loop/policy the runner must own.)

---

# Surfacing — the runner structure the wiring must fit

Territory = artifact case (the runner spec + the warm docs, existing artifacts). Harness-on-harness: every fact is a line-checkable feature of `traverse/SKILL.md`, `docs/how_articulate_warm_should_be.md`, or `cognitive_harness/articulate_warm/references/articulate_warm.md` — not a design preference.

## The runner as it is (core relevance)

- **F1 — the per-discipline transition protocol (core).** EXECUTE PIPELINE runs disciplines **one at a time** via a fixed 6-step transition: (1) checkpoint display · (2) load the discipline spec via the Skill tool · (3) execute at full depth (the discipline writes its own output file) · (4) run structural check on the saved output · (5) update `_state.md` (check off, set next, append a fresh-timestamped `## History` entry) · (6) continue to the next. No subagents; one canonical output file per discipline.
- **F2 — the Skill-to-command mapping table (core).** Seven rows: `articulate_simple`, `surfacing`, `sense-making`, `decompose`, `innovate`, `td-critique`, `routelister`, each → a canonical output file. **The warm pass is absent** — it has no row, no skill-name entry, no output-file slot in the runner.
- **F3 — the Progress checklist (core).** `_state.md`'s Progress has exactly seven checkboxes (A/Su/S/D/I/C/R). **No warm checkbox.**
- **F4 — RESUME keys off output-file existence (core).** RESUME "determines where the pipeline left off by checking which files exist," proceeding from the first incomplete discipline in **Su → S → D → I → C → R** order. It is **file-existence-driven**, with no notion of a *mid-discipline* or *mid-loop* position.
- **F5 — the current pipeline is LINEAR (core).** A → Su → S → D → I → C → R is a straight sequence; **each discipline is invoked exactly once per iteration.** The only loop is the *outer* ITERATION loop (re-run Su→R when the question isn't answered). There is **no sub-loop inside a single iteration** today.
- **F6 — /surfacing is already a runner-invoked discipline (sub).** The runner already knows how to call `/surfacing` once (as Su) with `$ARGUMENTS`. What it does **not** do is call it **repeatedly** within one iteration — that is exactly what the warm loop introduces.
- **F7 — Routelister is precedent for a non-standard invocation (sub).** Routelister "differs" — it takes territory + goal (not `_branch.md` alone) and writes **two** files. So a discipline having a special invocation shape + file behavior in the runner is **already sanctioned**; the warm loop being non-standard is not unprecedented.
- **F8 — ITERATION COMPLETE tests all seven files (sub).** The answeredness gate fires when all 7 canonical files exist; a warm output would be an **8th** file the gate must not wait on (it isn't part of the answer — it's upstream framing).

## The warm design's runner-facing commitments (core relevance)

- **F9 — /surfacing runs UNCONDITIONALLY first (core; design §9).** The first surface between the passes always runs — even when the cold MQ2 verdict = no (it runs vacuous, returns empty fast). So the runner's **current single Su call = the mandatory first surface**; the warm pass reads its result. Wiring does not add the first surface — it adds the *warm read + conditional re-surfaces after it*.
- **F10 — termination is the RUNNER's to enforce (core; design §8, reference §3.2).** Four parts: **fixpoint** (warm MQ2 context-need unchanged from prior round, or verdict = no) · **round cap** (default **2 re-surfaces / ≤3 warm runs**, tunable) · **oscillation guard** (territory A→B→A → stop + flag downstream) · **material-change judgment** (moved vs merely-reworded — usually a check inside the warm MQ2 step). The rule is settled; the runner **enforces** it, does not redesign it.
- **F11 — re-surface is INCREMENTAL + ACCUMULATING (core; design §8/§10).** Each re-surface fetches only the newly-relevant material and skips what prior rounds surfaced; the workspace **accumulates** (surfaced material grows across rounds, earlier material not lost). So the runner must **grow** the surfaced workspace, not overwrite it.
- **F12 — the conflict-block keys on the SEVERE rung (core; reference §2.4, design §4).** Conflict-detection emits a `content-conflict` flag with a **severity**; only the **severe** rung (premise contradicted, unresolvable-by-re-anchor, pipeline-wasting) → HIGH-FLAG + a **formulated clarifying-question payload**. The other rungs (none → PROCEED, resolvable → re-anchor + MED-FLAG) do **not** block.
- **F13 — block-and-ask is OPERATOR-PRESENT-ONLY (core; reference §2.4).** On a severe conflict: operator present → the runner **may block + pose** the formulated question; **autonomy → flag-and-best-effort** (record the conflict, proceed with the best re-anchored framing). The degrade is the runner's policy, not a discipline halt.
- **F14 — the strict division: warm EMITS, runner ACTS (core; reference §3.3, design §6/§11).** Warm **never fetches** (re-surfacing is the runner's act, driven by the warm MQ2's committed context-need) and **never asks** (the runner poses the question). The loop and the ask live entirely on the runner side.
- **F15 — the re-surface is driven by the warm MQ2 (sub; design §10 step 2).** The runner reads the warm MQ2's committed context-need to formulate the corrected territory for the next `/surfacing` (purpose + territory + bias) — the same `context-need → runner → /surfacing` path the cold pass already uses, run again.

## The organizing insight (core)

**The warm pass is not "an 8th discipline in the linear sequence" — it is a loop-controller that lives in a NEW sub-loop between Su and S.** The current runner has no intra-iteration loop (F5); wiring the warm pass means introducing the runner's **first sub-loop**: `Su (mandatory first surface) → [ warm → material-change check → (re-surface incrementally + warm again)* ] → conflict-block gate → S`. Everything hard about the wiring flows from this one structural fact — the linear per-discipline protocol (F1) must host a bounded repeat, and the file/state/resume machinery (F3/F4/F8) must learn a position it currently can't represent (F4: "mid-loop").

## IN / OPEN manifest

**IN (surfaced, settled — the wiring must honor):** the per-discipline transition protocol (F1) · the unconditional-first-surface (F9) · the §8 termination rule (F10) · incremental-accumulating re-surface (F11) · the severe-rung block trigger (F12) · operator-present-only block + autonomy degrade (F13) · warm-emits/runner-acts (F14) · MQ2-drives-re-surface (F15) · Routelister-precedent for non-standard invocation (F7).

**OPEN (for Sensemaking → Critique):**
- **OQ1 — warm's slot:** its own Progress checkbox + Skill-table row, or a sub-step of a coupled "Surfacing↔Warm" block? (The loop couples Su and warm.)
- **OQ2 — how the loop is expressed:** an explicit numbered loop-block in EXECUTE PIPELINE, or a "warm discipline" whose transition protocol *contains* the loop, or a new dedicated section?
- **OQ3 — file handling across rounds:** surfacing.md accumulates (F11) — append/grow. Does each warm round overwrite `articulate_warm.md` or version it (`articulate_warm_r2.md`)? What does the structural check (F1.4) run against — the final settled warm output?
- **OQ4 — RESUME mid-loop:** F4 is file-existence-driven with no mid-loop position. If a session dies mid-warm-loop, how does RESUME detect + resume it? (Likely a loop-round marker in `_state.md`.)
- **OQ5 — the block-policy site + operator-presence detection:** where exactly the operator-present check + block sits (after the loop settles, before S), and **how the runner determines "operator present"** (F13 needs an operationalization — the runner spec has no current notion of operator-presence).
- **OQ6 — iteration reset:** on a non-answered outer loop (F5's reset of Su/S/D/I/C/R), does the warm loop reset with Su?
- **OQ7 — the checkpoint + telemetry:** what the warm loop reports at F1.1's checkpoint (rounds run, anchor moved?, conflict flag?).

## Perspective checks

- **Self-reference (harness-on-harness):** every IN fact is line-checkable in the three source artifacts; the wiring is validated against *what the runner is* and *what the warm docs commit to*, not against design taste. Clean.
- **Anti-bloat / anti-stub (both ways):** anti-bloat — don't invent runner machinery the warm docs don't require (the §8 rule is fixed; don't re-open it). Anti-stub — don't under-wire (the loop + the block-policy + the mid-loop resume are all genuinely required; a one-line "invoke warm between Su and S" is insufficient — F10-F14 demand real control structure).

**PROCEED to Sensemaking** — the runner structure is surfaced, the warm commitments are pinned, the organizing insight (a new sub-loop) is named, and seven open questions are staged.
