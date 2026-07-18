## User Input

devdocs/inquiries/2026-07-09_13-53__wiring_warm_pass_into_traverse_runner/_branch.md — (Process: THE GATE on the runner-wiring edit map. Prosecute the 4 load-bearing claims [granularity · resume-hole · block-default · overwrite-audit] + self-reference + a 5-point backstop. Full prosecution spec in the instruction.)

---

# Critique — the gate on the runner-wiring edit map

Harness-on-harness; the edit map re-checked against the runner spec's actual structure (F1-F7) + the warm docs' commitments (F9-F15). The gate did real work: a prosecution uncovered a genuine mechanism gap (the `/surfacing` SKILL overwrites its artifact) whose fix — round-keyed surface sections — also closes the resume-hole. Guard held both ways.

## (a) Dimensions (weights)

1. **Crash-safety / resumability** (0.24) — does a mid-loop death leave a recoverable state?
2. **Mechanism realism** (0.22) — do the steps work against the *actual* SKILLs (surfacing overwrites; the checker's modes), not an idealized append?
3. **Commitment-fidelity** (0.20) — does the wiring honor §8/§9/§11/F13/F14, not re-open them?
4. **Minimal-footprint** (0.18) — does it reuse the runner's grammar rather than add machinery?
5. **Auditability** (0.16) — is the loop's behavior reconstructable after the fact?

## (b) Fitness landscape

- **Viable:** the 9-site edit map spine (declarations · loop · gate · operator-mode · state/resume/reset · telemetry). All survive.
- **Boundary (amend):** the file-accumulation mechanism (blind-append → round-keyed sections) · the resume state (one line → + write-ahead status) · the granularity gloss (Surfacing ✓ semantics).
- **Dead (correctly excluded):** per-round warm files (overwrite + telemetry holds) · redesigning §8 · a new invocation primitive (the loop rides `Skill(...)`).
- **Unexplored (backstop):** the re-surface invocation asymmetry · the structural-check fallback · the empty-first-surface path · W-as-framing-not-answer.

## (c) Candidate verdicts

### Claim 1 — granularity (W as its own discipline) → **SURVIVES (refined; + a real mechanism catch)**
- *Prosecution:* W re-invokes `/surfacing`, so "Surfacing ✓" no longer means "surfacing ran once."
- *Collision:* separate-W is right — F7 (Routelister precedent), F4 (a checkbox is what RESUME keys on), F1-F4 (consistency). But two clarifications are owed: **(a)** the runner must state *"Surfacing ✓ = the mandatory first surface; the re-surfaces are W's internal actions (W's telemetry, no Surfacing checkbox)."*
- *★The real catch (mechanism realism):* the innovation's Site D says *"APPEND to surfacing.md"* — but the `/surfacing` SKILL **overwrites** its artifact by default (its instructions say "save the artifact," fresh each invocation). A blind append is **not a thing surfacing natively does.** So the runner must **manage the accumulation itself.** **Fix → round-keyed surface sections:** each re-surface round N writes a delimited `## Re-surface round N` section that the runner composes into `surfacing.md` (keeping prior rounds), rather than trusting the SKILL to append. Without this the edit map is subtly broken — round 2 would clobber round 1. **Survives, with the accumulation mechanism made real.**

### Claim 2 — the resume-hole → **SURVIVES (refined; the sharpest finding)**
- *Prosecution:* does one Warm Loop state line cover a mid-loop death?
- *Collision (death-position walk):*
  - die during **warm-run (a)** → `articulate_warm.md` absent/half; resume re-enters (a) on the accumulated `surfacing.md`; the counter increments only *after* a surface, so it's intact. **Fine.**
  - die **during a re-surface** → `surfacing.md` half-written **and** the counter not-yet-incremented; resume re-enters (a), warm may re-anchor on **corrupt** material and re-surface **again**, leaving partial material. **A real hole.**
- *Refinement:* **(a)** a **write-ahead status field** (`status = looping-warm | looping-surfacing`) so resume knows a surface was in-flight; **(b)** the **round-keyed sections from Claim 1** make a torn round-N section **detectable and re-runnable** — regenerate round N, don't append to a torn file. **The same round-keyed-sections fix serves both Claim 1 and Claim 2** — one amendment closes the mechanism gap and the crash hole together. Survives, hole closed.

### Claim 3 — block-default (operator-present) → **SURVIVES (confirmed)**
- *Prosecution:* does "default block on severe conflict" risk halting an interactive run spuriously?
- *Collision (asymmetric-failure):* only the **severe** rung blocks (F12 — narrow: premise-contradicted + unresolvable-by-re-anchor + pipeline-wasting). In an interactive session that is *exactly* when to stop and ask, before spending the pipeline. A spurious block costs the user one "proceed" (cheap, recoverable); a **missed** severe conflict runs the whole pipeline mis-framed (expensive). Default-present-block is the **safe direction**. *Add:* the block is **user-overridable** — pose + await; the user can say "proceed anyway." It's a confirm-gate, not a hard halt. Survives.

### Claim 4 — overwrite-audit → **SURVIVES (justified trade)**
- *Prosecution:* overwriting `articulate_warm.md` each round drops the intermediate bundles.
- *Collision:* the loop's audit-relevant **shape** — round count, anchor-moved, termination reason, conflict flag — is already preserved in `_state.md`'s Warm Loop telemetry. Only the full intermediate *content* is dropped, which normal audit doesn't need. Consolidate-not-scatter says don't spawn per-round warm files. *Flag:* a debug-mode that keeps intermediate rounds is a **future option** if deep round-level audit is ever needed. Not a blocker. Survives.

### Claim — guard both ways → **PASSES**
- *Anti-bloat:* no per-round *warm* files (overwrite + telemetry holds); the round-keyed *surface* sections are the **minimal** fix for a real hole, not gratuitous versioning.
- *Anti-stub:* the loop + gate + resume + mode are all genuinely required — and the surfacing-overwrite catch proves it: "invoke warm between Su and S" would have silently clobbered surfaced material. Not rubber-stamped — Claims 1 & 2 refined with a real mechanism catch.

### Claim — self-reference honesty → **PASSES**
Every site rests on a line-checkable anchor — the runner's actual structure (F1-F7) and the warm docs (F9-F15). The mechanism catch came *from* checking the actual surfacing SKILL, not from taste. Clean.

## (d) ★Backstop — what the wiring MISSES

- **(i) The surfacing-overwrites mechanism** — folded into Claims 1 & 2 (round-keyed sections). The key amendment.
- **(ii) The re-surface invocation asymmetry.** The first Su is invoked with `_branch.md` (cold-MQ2-driven, §9); the re-surfaces are invoked with a runner-**formulated** territory + purpose + bias from the **warm** MQ2 (design §1/§9/§10-step-2). Different arg shape — state it in Site D.
- **(iii) The structural-check fallback.** `structural_check.sh` likely has no `articulate_warm` mode (as it may lack routelister's). The runner must fall back to a **manual** structural check for `articulate_warm.md` (add it to the manual-check list, mirroring routelister). Check items: re-anchored MQ2 · the on-trigger re-runs · any content-conflict flag · the self-verdict.
- **(iv) The empty-first-surface path — confirmed, not a gap.** Cold verdict = no → surfacing returns empty (§9) → warm MQ2 re-confirms verdict = no → fixpoint immediately → 0 re-surfaces → proceed. The edit map's fixpoint-on-verdict-no handles it. Confirm in Site D.
- **(v) W is a framing file, not an answer file.** The ITERATION COMPLETE completion check includes `articulate_warm.md` as *produced* (so the pipeline knows W ran), but the **answeredness** judgment still keys off `critique.md` — `articulate_warm.md` is upstream framing like `articulate_simple.md`/`surfacing.md`, not part of the answer. State it so the gate doesn't treat W's output as a survivor.

## (e) Coverage map

- Prosecuted: all four load-bearing claims + guard-both-ways + self-reference + a 5-point backstop.
- Moved the design: Claim 1 (round-keyed sections — the mechanism catch) · Claim 2 (write-ahead status + round-keying — resume-hole closed) · Claim 3 (+user-overridable) · +3 backstop additions (invocation asymmetry, structural-check fallback, W-as-framing).
- Structure held: the 9-site edit map spine (declarations · loop · gate · operator-mode · state/resume/reset · telemetry) all stands.

## Signal — **TERMINATE (the edit map STANDS, amendments folded in)**

**Stands:** the 9-site A-I edit map wiring W as a discipline in a bounded re-surface sub-loop between Su and S, with the conflict-block gate + operator mode.

**Amendments:** **★round-keyed surface sections** (the runner composes `## Re-surface round N` sections — fixes the surfacing-overwrite gap *and* the resume-hole) · a **write-ahead status field** (`looping-warm | looping-surfacing`) · **"Surfacing ✓ = mandatory first surface"** · the **re-surface invocation asymmetry** (warm-MQ2-formulated territory) · an **`articulate_warm` manual structural-check fallback** · the **block is user-overridable** · **W = framing-not-answer** in the completion check.

**Nothing built — a design.** The edit map + amendments are directly applicable to `traverse/SKILL.md`; flag design-vs-write at CONCLUDE.

## Convergence telemetry

- **Dimension coverage:** 5/5 (crash-safety, mechanism-realism, commitment-fidelity, minimal-footprint, auditability).
- **Adversarial strength:** STRONG — a prosecution found a real mechanism gap (surfacing overwrites) that would have broken the wiring, and its fix closed a second finding (the resume-hole). Not token finds.
- **Landscape stability:** CHANGED — 2 refined (with one shared fix) + 3 backstop additions; the 9-site spine STABLE.
- **Clean SURVIVE exists:** YES (the edit map), conditioned on the amendments.
- **Failure modes checked:** no rubber-stamping (2/4 refined + a mechanism catch) · no nitpicking (the surfacing-overwrite + resume-hole are correctness-load-bearing) · no self-reference collapse (checked the actual SKILL) · no axis-absence (crash-safety + mechanism-realism — the planes a runner-loop actually fails on — led the dimensions).

**Output: PROCEED** (Routelister → CONCLUDE) — the edit map stands with the amendments folded in.
