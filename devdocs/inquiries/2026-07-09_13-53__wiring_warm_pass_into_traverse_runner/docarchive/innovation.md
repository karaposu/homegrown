## User Input

devdocs/inquiries/2026-07-09_13-53__wiring_warm_pass_into_traverse_runner/_branch.md — (Process: crystallize the stabilized model [SV5] into a CONCRETE, buildable EDIT MAP for `traverse/SKILL.md` — actual site→change text for all ~8 sites. No re-open. Anti-sycophancy both ways. Grounded in the runner spec's actual structure.)

---

# Innovation — the runner-wiring, crystallized into an edit map

Generative pass. The §8 termination rule + warm internals are fixed; this pass makes the runner-spec changes concrete and build-ready. Site references are to `.claude/skills/traverse/SKILL.md`.

## (1) THE EDIT MAP — site → change (buildable)

### Site A — the pipeline notation (P1; global, ~6 occurrences)
`A → Su → S → D → I → C → R` → **`A → Su → W → S → D → I → C → R`** (in the intro, Pipeline field, EXECUTE PIPELINE header, Rules #1, Cross-Session Resume, checkpoints). W sits between Su and S; a one-line gloss where first introduced: *"W = the warm re-anchor→re-surface loop; it re-invokes /surfacing internally."*

### Site B — the Progress checklist (P1; the `_state.md` template in step 7 + the ITERATION reset)
```
  - [x] Articulate-Simple
  - [ ] Surfacing
  - [ ] Warm            ← NEW (8 boxes)
  - [ ] Sensemaking
  ...
```

### Site C — the Skill-to-command mapping table (P1)
Add one row (between Surfacing and Sensemaking):
```
  | Warm (re-anchor loop) | `articulate_warm` | `articulate_warm.md` |
```

### Site D — the W special transition (P2 + P3 + P4 gate) — a NEW subsection in EXECUTE PIPELINE
> **Warm (W) — the re-anchor→re-surface loop (special transition).** Unlike the other disciplines, W does not run once — it controls a bounded loop that re-invokes `/surfacing`. Surfacing's first pass is the **mandatory first surface** (design §9) and has already written `surfacing.md`. Then:
>
> ```
> round = 0                       # record in _state.md's ## Warm Loop line
> loop:
>   a. Skill(articulate_warm, args: "[inquiry_path]/_branch.md + surfacing.md + articulate_simple.md")
>        → (over)writes articulate_warm.md (re-anchored MQ2, on-trigger re-runs, refreshed Rephrase, any content-conflict flag)
>   b. read the warm MQ2 committed context-need; apply the §8 termination check (ENFORCE, don't redesign):
>        FIXPOINT     context-need unchanged from prior round, or verdict = no   → EXIT
>        ROUND CAP    round == 2  (2 re-surfaces done / ≤3 warm runs)            → EXIT
>        OSCILLATION  context-need alternating A→B→A                             → EXIT + set oscillation flag
>        else (anchor moved to a materially different territory, round < 2):
>            Skill(surfacing, args: "<territory+purpose+bias formulated from the warm MQ2 context-need>;
>                                    APPEND to surfacing.md — incremental: fetch only newly-relevant, keep prior")
>            round += 1 ; goto a
>   c. EXIT → run the conflict-block gate (Site E) → structural-check articulate_warm.md
>             → update _state.md (check off Warm + loop telemetry) → proceed to Sensemaking
> ```
>
> **Files:** `surfacing.md` **accumulates** (append/grow); `articulate_warm.md` is **overwritten** each round (only the settled one persists); round history lives in `_state.md`, **not** per-round files. The re-invocations of `/surfacing` inside W do **not** get their own Surfacing checkbox — only the first (mandatory) surface does.

### Site E — the conflict-block gate (P4a) — inside Site D's subsection
> **The conflict-block gate (after the loop settles, before Sensemaking).** Read the settled `articulate_warm.md`'s `content-conflict` flag:
> - no flag, or a **non-severe** flag (none / resolvable-by-re-anchor, i.e. HIGH-PROCEED / MED-FLAG) → **proceed** to Sensemaking.
> - a **SEVERE** content-conflict (HIGH-FLAG + a formulated clarifying-question payload):
>   - **operator-present (default):** surface the flag and **pose the formulated question** to the user; **block** until they answer or redirect. (Warm formulated it; the runner poses it — the discipline never asks.)
>   - **autonomy (explicit signal):** **flag-and-best-effort** — record the conflict in `_state.md` and proceed with the best re-anchored framing.

### Site F — the operator-present mode (P4b) — a NEW short note (Rules, or a one-paragraph section)
> **Operator-present mode.** The runner has one runtime mode, two values: **operator-present** (default — an interactive `/traverse` with a user who can answer) and **autonomy** (set explicitly when `/traverse` runs headless / under cron / unattended). It governs exactly one decision: the conflict-block gate (Site E) on a **severe** content-conflict. Default is operator-present.

### Site G — the `_state.md` Warm Loop line (P5a) — the template + a new section
```
  ## Warm Loop
  round: 0/2 | last-anchor: — | status: not-started    # → looping | settled | oscillation-flagged
```

### Site H — RESUME (P5b)
Add to the "determine where the pipeline left off" logic:
> - `articulate_warm.md` exists **AND** Warm checked → past the loop; resume from the first incomplete discipline after W.
> - `surfacing.md` exists **AND** Warm **not** checked → **resume the warm loop**: read the `## Warm Loop` round counter and re-enter Site D from step (a) on the accumulated `surfacing.md`. The counter is **honored across the resume** (a resume does not reset it to 0), so the cap still holds.

### Site I — ITERATION reset (P5c) + checkpoint telemetry (P6)
- Reset list → **Su / W / S / D / I / C / R** (leave A checked); also clear the `## Warm Loop` line (round 0/2, not-started).
- W's checkpoint reports: **re-surface rounds (0/1/2) · anchor moved? · content-conflict (none/resolvable/SEVERE) · termination reason (fixpoint/cap/oscillation).**

## (a) MECHANISM LEDGER

| Mechanism | Produced |
|---|---|
| **Absence recognition** (gen) | the two runner gaps — F4's no-mid-loop-position → the Warm Loop state line (Sites G/H); F13's no-operator-notion → the operator mode (Site F). |
| **Domain transfer** (gen) | W's special transition transferred from the Routelister special-invocation precedent (F7). |
| **Combination** (gen) | the loop (Site D) composes the existing Skill-invocation mechanism + the §8 rule + incremental surfacing — no new primitive. |
| **Constraint manipulation** (framer) | holding "enforce §8, don't redesign it" → the loop is a *checker* around a fixed rule, not a new rule. |
| **Inversion** (framer) | minimal-extension-not-new-architecture (below). |

## (b) ASSEMBLY EMERGENT

Composing Sites C+D+G+H, a **reusable pattern** emerges: **to wire a bounded intra-pipeline loop into a linear discipline-runner — declare it as a discipline (checkbox + mapping row), put the loop in a special transition protocol, and add a one-line state marker for mid-loop resume.** Routelister was the first non-standard transition (a different invocation shape); the warm loop is the second (a *looping* transition). **★Sized honestly:** a nascent pattern at **N=2** (Routelister + warm) — "a discipline's transition protocol may be non-standard (special-shape or looping), and the runner absorbs it via a mapping row + a dedicated subsection." Real but young; not a validated law until a third non-standard transition appears. Modest.

## (c) THE REQUIRED INVERSION — minimal extension, not a new architecture

- **Reading 1 (heavier runner):** "a loop + a new concept (operator-mode) + resume machinery = the linear runner is becoming a complex control system."
- **The inversion:** the wiring keeps the runner's **existing grammar almost entirely intact.** W is *another* checkbox + mapping row + transition (P1 reuses F1-F4 wholesale). The loop rides the **same `Skill(...)` invocation** the runner already uses (F6) — no new invocation primitive. The state marker is **one line** (Site G). The operator-mode governs **exactly one** decision (Site E) and **defaults to the current behavior** (present). The only genuinely-new notion in the whole change is *operator-presence* — and even that is opt-in-degrade, not a behavior change for existing interactive runs. So the runner barely changes shape: the warm loop is expressed **almost entirely in the runner's own existing vocabulary**, with two minimal extensions (a state line, a mode) each forced by a specific gap (F4, F13).
- ★Anti-sycophancy — the honest core: this design is *cheap* precisely because the prior work did the hard part. The warm docs already put the loop rule (§8), the emit/act division (F14), and the degrade policy (F13) on the runner side; 11-32 already named the two touch-points. This dive **maps** those onto the runner's existing structure — it invents almost nothing. **Land: minimal-extension-of-the-existing-runner-grammar**, not a new control architecture; the cheapness is inherited, not engineered here.

## (d) INHERITED FRAME AUDIT — challenged? YES

- **Granularity** (W-as-own-discipline vs a coupled Su↔W block) → **Critique**.
- **The resume-hole** (does one state line cover a death *between* re-surface and the next warm run?) → **Critique**.
- **Block-default** (is operator-present-default safe, or a spurious-block risk?) → **Critique**.
- **Overwrite-audit** (does discarding intermediate warm rounds lose audit info?) → **Critique**.

Four live prosecutions.

## Tests

- **Novelty:** low-by-design (the wiring reuses the runner's grammar — a virtue here); the two genuinely-new bits (the Warm Loop state line, the operator mode) are the moderate-novelty pieces, each forced by a gap.
- **Actionability:** HIGH — the edit map is site→change text, directly applicable to `traverse/SKILL.md`.
- **Scrutiny survival:** the four most-attackable claims routed to the gate.
- **Mechanism-independence:** the loop (D), the state line (G/H), the operator mode (F), and the file rules (P3) are independently grounded (F7 / F4 / F13 / F11) — not one idea in four hats.

**Signal: PROCEED to Critique.** Crystallized: the 9-site edit map (A-I) covering declarations · the loop · the gate · the operator mode · state/resume/reset · telemetry; the minimal-extension inversion (cheapness inherited from prior work); four prosecutions to the gate.
