---
inquiry: R2d / THE GAP — how the warm pass should be wired into the /traverse runner
date: 2026-07-09
model: claude-opus-4-8
effort: high
layer: PROCESS (runner control-flow)
continues: devdocs/inquiries/2026-07-09_13-19__articulate_warm_reference_file_design/finding.md
synthesizes:
  - docs/how_articulate_warm_should_be.md §7-10 (the loop + termination + cost)
  - cognitive_harness/articulate_warm/references/articulate_warm.md §3 (the loop rule, receives-never-fetches)
  - devdocs/inquiries/2026-07-09_11-32__articulate_warm_holistic_structure_integration (the runner touch-points)
  - devdocs/inquiries/2026-07-09_09-48__articulate_warm_operation_set_and_warm_only_mechanisms (Item A + B)
consumes:
  - .claude/skills/traverse/SKILL.md (the runner spec — the edit target)
  - cognitive_harness/surfacing/SKILL.md (the invocation contract; the overwrite behavior)
verdict: the edit map STANDS — wire warm as a discipline W in a bounded re-surface sub-loop between Su and S; gate-clean with amendments; nothing built (a design)
---

# Wiring the warm pass into the /traverse runner — the edit map

## The one-line answer

> **The warm pass is not an 8th linear discipline — it is a loop-controller that lives in the runner's first intra-iteration sub-loop between Surfacing and Sensemaking. Wire it as a new discipline `W` with a special transition protocol: after the mandatory first surface, invoke warm → check §8 termination → re-surface incrementally and re-invoke warm until the anchor settles → run the conflict-block gate → proceed to Sensemaking. It reuses the runner's existing grammar (a checkbox, a mapping row, a transition, the `Skill()` call); the only genuinely-new notion is operator-presence. The one non-obvious mechanism: `/surfacing` overwrites its artifact, so the runner must compose accumulation via round-keyed sections — which also makes the loop crash-safe.**

## The edit map — site → change (`.claude/skills/traverse/SKILL.md`)

### Site A — pipeline notation (global, ~6 occurrences)
`A → Su → S → D → I → C → R` → **`A → Su → W → S → D → I → C → R`**. Gloss at first use: *"W = the warm re-anchor→re-surface loop; it re-invokes /surfacing internally."*

### Site B — Progress checklist (the `_state.md` template + the iteration reset)
Add `- [ ] Warm` after Surfacing (8 boxes: A / Su / **W** / S / D / I / C / R).

### Site C — Skill-to-command mapping table
Add row: `| Warm (re-anchor loop) | articulate_warm | articulate_warm.md |`.

### ★Site D — the W special transition (a new EXECUTE PIPELINE subsection)
> **Warm (W) — the re-anchor→re-surface loop (special transition).** Unlike the other disciplines, W controls a bounded loop that re-invokes `/surfacing`. Surfacing's first pass is the **mandatory first surface** (design §9) and has already written `surfacing.md`. Then:
> ```
> round = 0                              # record in _state.md ## Warm Loop
> loop:
>   a. status ← looping-warm
>      Skill(articulate_warm, args: "_branch.md + surfacing.md + articulate_simple.md")
>         → (over)writes articulate_warm.md  (re-anchored MQ2, on-trigger re-runs, refreshed Rephrase, any content-conflict flag)
>   b. read the warm MQ2 context-need; apply the §8 termination check (ENFORCE, don't redesign):
>        FIXPOINT     context-need unchanged from prior round, or verdict = no    → EXIT
>        ROUND CAP    round == 2  (2 re-surfaces / ≤3 warm runs)                  → EXIT
>        OSCILLATION  context-need alternating A→B→A                              → EXIT + oscillation flag
>        else (anchor moved to a materially different territory, round < 2):
>            status ← looping-surfacing                       # write-ahead: a surface is in-flight
>            Skill(surfacing, args: "<territory+purpose+bias FORMULATED from the warm MQ2 context-need>")
>               → the runner writes the result as a delimited "## Re-surface round N+1" SECTION appended to surfacing.md
>                 (round-keyed: /surfacing overwrites its own artifact, so the RUNNER composes the accumulation;
>                  a torn round section is detectable and re-runnable — regenerate it, don't blind-append)
>            round += 1 ; goto a
>   c. EXIT → run the conflict-block gate (Site E) → structural-check articulate_warm.md (Site I)
>             → update _state.md (check off Warm; status ← settled; record loop telemetry) → proceed to Sensemaking
> ```
> **Files:** `surfacing.md` **accumulates** (round-keyed sections composed by the runner); `articulate_warm.md` is **overwritten** each round (only the settled one persists; the loop's audit-relevant shape lives in `_state.md`, not per-round files). The re-invocations of `/surfacing` inside W get **no** Surfacing checkbox — **"Surfacing ✓" = the mandatory first surface only.** *Empty-first-surface fast path (§9):* cold verdict = no → surfacing returns empty → warm MQ2 re-confirms verdict = no → fixpoint at round 0 → 0 re-surfaces → proceed.

### Site E — the conflict-block gate (inside Site D, on EXIT)
> Read the settled `articulate_warm.md`'s `content-conflict` flag:
> - none, or **non-severe** (resolvable-by-re-anchor / HIGH-PROCEED / MED-FLAG) → **proceed** to Sensemaking.
> - **SEVERE** (HIGH-FLAG + a formulated clarifying-question payload):
>   - **operator-present (default):** surface the flag and **pose the formulated question**; **block** until the user answers or redirects. The block is a **confirm-gate, user-overridable** — the user may say "proceed anyway." (Warm formulated it; the runner poses it — the discipline never asks.)
>   - **autonomy:** **flag-and-best-effort** — record the conflict in `_state.md`, proceed with the best re-anchored framing.

### Site F — operator-present mode (a short note in Rules)
> **Operator-present mode.** The runner has one runtime mode, two values: **operator-present** (default — interactive `/traverse` with a user who can answer) and **autonomy** (set explicitly when headless / cron / unattended). It governs exactly one decision: the conflict-block gate (Site E) on a severe content-conflict. Default is operator-present.

### Site G — the `_state.md` Warm Loop line
```
## Warm Loop
round: 0/2 | last-anchor: — | status: not-started    # → looping-warm | looping-surfacing | settled | oscillation-flagged
```

### Site H — RESUME (mid-loop extension)
> - `articulate_warm.md` exists **AND** Warm checked → past the loop; resume from the first incomplete discipline after W.
> - `surfacing.md` exists **AND** Warm **not** checked → **resume the warm loop**: read `## Warm Loop` (round + status). `status = looping-surfacing` → the last re-surface was in-flight; regenerate that round's section, then re-enter step (a). Otherwise re-enter step (a) on the accumulated `surfacing.md`. The round counter is **honored across the resume** (not reset), so the cap holds.

### Site I — iteration reset · checkpoint · structural-check
- **Iteration reset** → **Su / W / S / D / I / C / R** (leave A checked); clear the `## Warm Loop` line.
- **Checkpoint (W):** re-surface rounds (0/1/2) · anchor moved? · content-conflict (none/resolvable/SEVERE) · termination reason (fixpoint/cap/oscillation).
- **Structural check:** `structural_check.sh` has no `articulate_warm` mode → **manual fallback** (mirroring routelister): check re-anchored MQ2 · the on-trigger re-runs · any content-conflict flag · the self-verdict.
- **Completion check:** the ITERATION COMPLETE "all files exist" gate includes `articulate_warm.md` as *produced*, but **answeredness keys off `critique.md`** — W is upstream framing (like `articulate_simple`/`surfacing`), **not** an answer file.

## Why this is a minimal extension, not a new architecture

W is *another* checkbox + mapping row + transition — it reuses the runner's per-discipline grammar (F1-F4) wholesale. The loop rides the **same `Skill(...)` call** the runner already makes (F6). The state marker is **one line**. The operator mode governs **one** decision and **defaults to current behavior** (present). The cheapness is **inherited**: the warm docs already put the loop rule (§8), the emit/act division (F14), and the degrade policy (F13) on the runner side, and 11-32 named the two touch-points — this dive *maps* them onto the runner's structure. The only genuinely-new notion is **operator-presence**, and it's opt-in-degrade.

## Inherited Commitments Re-test

| Commitment (source) | Re-test against the edit map |
|---|---|
| §9 — /surfacing runs unconditionally first | **HONORED** — Su stays a single unchanged call = the mandatory first surface; W adds the *warm read + conditional re-surfaces after* it. |
| §8 — termination (fixpoint/cap=2/oscillation/material-change) | **ENFORCED, not redesigned** — Site D reads the rule as given; the runner is the enforcement site §8 already names. |
| §11 — re-surface is incremental + accumulating | **HONORED** — round-keyed sections grow `surfacing.md`; each re-surface is corrected-territory only. |
| F14 — warm emits, runner acts (never fetches/asks) | **HONORED** — the loop *and* the ask (Site E) live entirely on the runner; warm only emits the flag + payload. |
| F13 — block-and-ask is operator-present-only | **HONORED** — Site E/F: default-present blocks (user-overridable); autonomy degrades to flag-and-best-effort. |

**One mechanism the design doc understated:** re-surface accumulation is **not free** — `/surfacing` overwrites its artifact, so the runner composes round-keyed sections. This is an implementation reality the wiring surfaces, not a re-opening of §11 (it *implements* §11).

## Next actions — the design is complete; applying it CLOSES THE GAP (design-vs-write is your call)

★**Nothing is built. Applying the edit map is the load-bearing act of the whole thread** — until the runner invokes warm, the entire `articulate_warm` build is inert:
1. **R2 — apply the edit map** (all 9 sites A-I + the amendments) to `.claude/skills/traverse/SKILL.md`. Higher-risk than the prior builds (it edits the live runner across ~8 sites) but fully specified + gate-clean.
2. **R3 — validate warm end-to-end** — the next real `/traverse` exercises the loop; check the §13 graduation criteria (re-anchoring works · re-surface pays off · termination holds · no over-determination · cost bounded). **Depends on R2.**

**Monitor:** the surfacing-append capability (R4 — a cleaner upstream fix than runner-composed round-keying) · the operator-present mode as a general concept (R5, N=1) · the non-standard-transition pattern (R6, N=2).

**★The design-vs-write decision is yours.** The whole thread has run design → "go ahead" → build, and this is the *last* load-bearing build. Say the word and I'll apply the edit map to `traverse/SKILL.md` (R2) — closing THE GAP. Or hold at the design. (This one edits the live runner spec, so it's the one most worth a deliberate go-ahead.)

## Open questions

- **The round cap (2) is tunable** — the design doc calls it a default; whether 2 is right in practice is a §13-validation question (R3), not a wiring question.
- **The surfacing-append capability (R4)** — runner-composed round-keying works now; a native surfacing append mode would be cleaner if re-surface accumulation ever gets heavy.

## Source input

```
One load-bearing thing remains: R2d / THE GAP — wiring the warm pass into the traverse runner (invoke it between Surfacing and Sensemaking; the re-anchor→re-surface fetch-loop; the block-on-severe-conflict runner policy). ... okay lets dive deep how it should be wired
```
