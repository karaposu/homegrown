---
inquiry: articulate_warm — the structure layer of how it should be
date: 2026-07-09
model: claude-opus-4-8
effort: high
layer: STRUCTURAL (Meaning + Process inherited)
continues: devdocs/inquiries/2026-07-08_21-50__articulate_warm_benefit_does_it_need_to_retrigger_surfacing/finding.md
consumes:
  - docs/how_articulate_warm_should_be.md (the target design — Meaning + Process complete; structure-open)
  - devdocs/inquiries/2026-07-08_23-46__fetch_loop_as_reusable_discipline_extract_and_generalize/finding.md
  - devdocs/inquiries/2026-07-09_08-00__harness_stage_lens_and_fetch_loop_necessity_vs_substrate/finding.md
verdict: a structural design that STANDS (gate-clean, two amendments folded in)
---

# The structure of articulate_warm — how it should be built

## The one-line answer

> **articulate_warm's structure does not exist yet — so the design creates it in two artifacts and wires it into a third, along three orthogonal axes: a warm-mode *section* in the `articulate_simple` spec (behavior), a cohesive loop-*block* in the `traverse` runner placed between Surfacing and Sensemaking (control), and its own `articulate_warm.md` run-file (output). The load-bearing deliverable is the wiring — the runner is cold-only today.**

The Meaning (a re-anchor→re-surface fetch-loop controller) and the Process (the loop steps, doc §8/§10) were settled by prior dives; this dive adjudicates only the **spec/artifact structure** that houses them.

## The premise the whole design rests on — the structure is *absent*, not under-specified

Three verified facts converge:

1. **No `articulate_warm/` (or `articulate_via_context/`) directory exists** (`ls`). articulate_warm has no artifact of its own today — it lives only as the design doc `docs/how_articulate_warm_should_be.md`.
2. **The current traverse pipeline is cold-articulate-only** (`traverse/SKILL.md`): `Articulate-Simple → Surfacing → Sensemaking → …`. There is no warm pass and no re-anchor→re-surface loop wired in. (The "loop again with refined focus" clause is the *whole-pipeline* outer loop, not this one.)
3. **The `articulate_simple` spec has a cold-vs-warm *substrate-detection* edge** (`references/articulate_simple.md:184` — "Relevance present → warm; absence → cold") **but no warm *mode*** — no deliberate second pass, no loop.

So the dive designs what to **create** + how the warm segment **enters the runner** — it is not tidying an existing step. The doc's target (`cold → surface → warm → [re-surface → warm]* → downstream`) is unbuilt.

## The design — three orthogonal axes

```
   SPEC axis          CONTROL axis           RUN-ARTIFACT axis
   ─────────          ────────────           ─────────────────
   1 spec,      ⊥     runner cohesive   ⊥     2 files
   2 modes            block                   (articulate_simple.md
   (+ warm section)   (traverse)               + articulate_warm.md)
```

**Axis 1 — SPEC (behavior): a warm-mode section in `articulate_simple`'s reference.** One discipline, two modes — not a separate discipline. Grounded in: no dir exists; doc §10 ("a re-invocation of the `articulate_cold` machinery under a context-informed mode, **not a separate cognitive discipline**"); §12 (operations "canonically defined in `…/articulate_simple.md` … inherited **unchanged**"). The section extends the spec's existing warm-substrate seam (`:74`/`:184`) — the spec already knows "warm substrate"; this adds the *deliberate second pass* it lacked. Section outline: re-runs MQ2 + Rephrase; carries Itemize/Deconstruct/MultiDepth; receives-never-fetches; **points to doc §8/§10 for the loop steps** (does not restate them); reuses the five-compound self-verdict.

**Axis 2 — CONTROL (loop): a cohesive block in the `traverse` runner.** The loop-control lives in the runner (doc §6/§10 "re-surfacing is the runner's act"; 23-46 fixes runner-owned at N=1). Placed as a warm segment between Surfacing and Sensemaking; it invokes the warm pass and enforces the §8 termination loop. Kept **cohesive** (one contiguous region) so it is the clean **N=2 extraction seam**.

**Axis 3 — RUN-ARTIFACT (output): its own `articulate_warm.md`.** Parallel to the cold `articulate_simple.md`, so both passes stay auditable; `surfacing.md` accumulates across re-surface rounds (§8); `_branch.md` re-derived from the warm bundle.

**Why the three axes are orthogonal (the coherence key).** They are decided separately and disputable separately. This dissolves two false tensions:
- *"A mode can't write its own output file."* — It can. Spec-form ⊥ run-artifact, exactly as `conclude.md` is **one** protocol spec while **every** inquiry writes its own `finding.md`. One discipline invoked twice (cold/warm) writes two run-files.
- *"Wiring the loop into the runner is Process-redesign."* — It isn't. Control-location (where the loop lives) ⊥ Process (the loop's steps). The runner segment *places and enforces*; the steps are inherited from §8/§10. **Placement is structural.**

## The GAP — the load-bearing deliverable

```
CURRENT — cold-only (the GAP):
   A(cold) → Su → S → D → I → C → R          ← no warm pass exists

TARGET — warm segment inserted:
   A(cold) → Su → ┌─ WARM LOOP ─────────┐ → S → D → I → C → R
                  │  Aw ⇄ Su  (§8-bounded,│
                  │  0–1 rounds, cap 2)  │
                  └──────────────────────┘
   Aw = articulate_simple in warm mode.
```

Because the runner is cold-only, the design's real weight is **placing the warm segment into the pipeline** — a *design* of the wiring, not the build, not the mechanism (§8/§10 inherited).

## The N=2 seam (the 23-46 consumer, made concrete)

```
  fetch_loop( U = /surfacing,  D = articulate_simple:warm-MQ2,
              need_signal = warm-MQ2 verdict,
              material_change = the §8 judgment,  round_cap = 2 )
```
- **Stays runner-side:** the placement (between Su and S) + invocation wiring.
- **Extracts at N=2:** the loop-control block → `cognitive_harness/protocols/fetch_loop.md`, when the 2nd site (sensemaking→surface, the 08-00 missing-material case) is wired. The block is shaped like the protocol's call-site now, so extraction is a **move, not a rewrite**.

## The two gate amendments (both from verify-don't-assert)

**Amendment 1 — the residual fork is REVISED, not a violation.** The standing "articulate2 = no spec change" decision was *verified* (memory `ordering-problem-articulate2`): it means **no new operations** (the warm pass reuses the cold operations; criterion 5 / `:184` already permits warm substrate). A warm-mode *section* documents which operations re-run + the loop — it leaves cold operations **unchanged**, so it **respects** "no spec change." Moreover the same source *mandates* documenting the MQ2-re-run (the existing Rephrase-only `:331` mode is flagged "too narrow"). So the "violation" reading is falsified. What genuinely remains is a **WHERE** choice — the corrected warm-mode doc as a section in the built reference (recommended) vs consolidated into the existing `devdocs/how_articulate_simple_*` docs.

**Amendment 2 — the design under-scoped the doc landscape (backstop, confirmed).** Warm/second-pass articulation is already described across **three** docs — `docs/how_articulate_warm_should_be.md` (the full target) + `devdocs/how_articulate_simple_should_be.md` (articulate2) + `devdocs/how_articulate_simple_process_should_be.md` (the too-narrow `:331` Rephrase-only mode). The warm-mode section must therefore be the **single operational home** that **supersedes the stale `:331` mode** and reconciles the scatter — a **consolidation requirement**. Separately, the **SKILL.md invocation contract** (a mode parameter `cold|warm` + the surfaced-material input) must be made explicit — it is how the runner selects the mode. *(Existence of the two devdocs siblings verified; their line-level content not read this dive — flagged for the build-time survey.)*

## Inherited Commitments Re-test

| Prior | Commitment | Re-test |
|---|---|---|
| 23-46 fetch_loop | runner-owned loop / protocol-at-N=2 / one wired instance | **HONORED** — Axis 2 is runner-owned-now with the cohesive-block seam for N=2 extraction. |
| 08-00 division-of-labor | explicit only where a judgment governs the re-fetch | **HONORED** — the warm segment enforces the re-anchor (a re-framing judgment); raw fetch stays the substrate's. |
| doc §6/§10/§12 | receives-never-fetches / not-a-separate-discipline | **HONORED** — Axis 1 is a mode-section (not a new discipline); Axis 2 rejects the in-discipline self-loop (the runner acts). |
| standing "no spec change" | articulate2 needs no spec change | **HONORED (verified)** — = no new operations; a documentation section respects it (Amendment 1). |
| 21-50 | articulate_warm = a surfacing-loop controller | **INHERITED** (Meaning, not re-opened). |

No conflict. The structure is a faithful housing of the settled Meaning + Process.

## Next actions (typed — nothing built this dive)

**Performed at CONCLUDE:**
- ✅ **R1** — `fixpt-S1`'s seam-definition enriched in `devdocs/seeds/_seed.md` (the N=2 seam now has its concrete runner-block/`fetch_loop(...)` home; still NASCENT).
- ✅ **R7** — this Inherited Commitments Re-test.

**User-gated (do not perform without go-ahead):**
- **R5 — DECIDE the WHERE-fork:** built-reference section [recommended] vs consolidate-into-existing-devdocs. Both respect "no spec change."
- **R2 — RECORD:** fold this structural design into `docs/how_articulate_warm_should_be.md` as a `## Structure / How it's built` section (canon edit). This finding carries it meanwhile.
- **R4 — CONSOLIDATE:** survey + reconcile the three warm-describing docs; supersede the `:331` mode. Precedes/accompanies R3.
- **R3 — BUILD (deferred):** wire the warm segment into `traverse` + the warm-mode section + the SKILL.md mode param + own-file. **Severity scales with autonomy** (DEFERRED→MUST under cold/autonomous operation). Depends on R5 + R4.
- **R6 — RENAME (deferred):** → a `cognitive_harness/articulate/` dir housing both modes; after Axis 1 lands.

**Monitor:**
- **R8** — the reusable structural template `[mode-section + runner-block + own-artifact]` (23-46-derived); apply when the sensemaking→surface 2nd site is built.

## Reasoning (the honest core)

The generative content here is **small by design** — a structure dive on a settled Meaning/Process is mostly *forced* by the constraints, and that is a virtue, not a weakness. The value is the concrete, buildable shape (the section outline, the runner sketch, the `fetch_loop(...)` signature, the before/after diagram) + the two things verify-don't-assert surfaced at the gate: the residual "violation" was **falsified** by checking the premise, and a real **doc-scatter** the design had missed was **confirmed**. The one framing worth stating plainly (**absence-as-opportunity**): because nothing is built, the structure can be designed clean the first time — but this is ordinary greenfield prudence, real but modest, and the cost side is equally real (the warm pass genuinely does not work today; the ordering problem persists until it is wired). The dive arrived at the right time — before a messy build — and that timing is owed to the user's "go back to articulate_warm / dive the structure layer," not to any cleverness in the analysis.

## Open questions

- The **WHERE-fork** (R5) — user's call.
- The **line-level content** of the two `devdocs/how_articulate_simple_*` siblings — unread this dive; the consolidation survey (R4) reads them and may surface more than the `:331` staleness.
- **When** the build's urgency flips (R3) — tied to when cold/autonomous operation is built.

## Source input

```
okay lets go back to articulate warm , reread docs/how_articulate_warm_should_be.md fully.
lets dive deep structure layer of how it should be
```
