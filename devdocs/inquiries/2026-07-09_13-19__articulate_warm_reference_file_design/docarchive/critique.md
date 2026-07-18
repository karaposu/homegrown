## User Input

devdocs/inquiries/2026-07-09_13-19__articulate_warm_reference_file_design/_branch.md — (Structural: THE GATE on the reference-file blueprint. Prosecute the 4 load-bearing claims [the split · the inheritance-declaration · the failure modes · the SKILL-slim] + self-reference + a 4-point backstop. Full prosecution spec in the instruction.)

---

# Critique — the gate on the reference-file blueprint

Harness-on-harness; claims re-checked against the template + the priors. Two claims genuinely corrected (the inheritance-declaration → short boundary; a mis-assigned failure mode), one refined (the split's authority-free property isn't automatic), one confirmed (the SKILL-slim scoping). Guard held both ways.

## (a) Dimensions (weights)

1. **Drift-resistance** (0.24) — does the design actually avoid the silent-staleness it exists to prevent?
2. **Non-ceremony** (0.20) — does each section earn its place, or is it documentation for its own sake?
3. **Correct assignment** (0.18) — is each claim filed under the right operation/owner?
4. **Non-sycophancy both ways** (0.20) — not bloated into a cold-duplicate AND not stubbed into a pointer-file?
5. **Scope integrity** (0.18) — does the design stay within "design the reference," naming (not doing) its consequences?

## (b) Fitness landscape

- **Viable:** the 6-section template-matched skeleton · the operational/canonical split (as a principle) · conflict-detection fully-IN · the division-of-labor · the §13 refinement. All survive.
- **Boundary (amend):** the cheat-sheet's "authority-free" property (must be *made* so) · the inheritance-declaration (exhaustive → short) · the failure-mode roster (one re-assigned).
- **Dead (correctly excluded):** duplicating the five operation definitions (the hard OUT) · re-opening Meaning/Process · a self-contained cold-copy.
- **Unexplored:** warm's provisional status (missing from the blueprint — backstop) · the exact size (a soft estimate).

## (c) Candidate verdicts

### Claim 1 — the operational/canonical split → **SURVIVES (refined: authority-free is not automatic)**
- *Prosecution:* any inlined line about an op is a claim that can drift; "authority-free" is a label, not a mechanism.
- *Collision:* the cheat-sheet is mostly warm's **treatment** of each op (carry / re-run / trigger) — that's warm-**owned**, single-source (this file), not a copy of cold's definition, so it can't drift *against* cold. The only shared surface is the minimal identifying **gloss** ("MQ2 = the anchor"). That gloss *can* go stale — but it's ~3 words, not a paragraph.
- *Refinement:* "authority-free" must be **made** so, not assumed: (a) explicitly **label** the cheat-sheet *"warm behavior + a reminder tag; the definition is at [pointer], not here"*; (b) keep the gloss **minimal** (op-name + ≤3 words). **Build-guard — the cheat-sheet format:** `op-name · warm-behavior · ≤3-word reminder · pointer` — so a builder can't drift it into a full copy. Honest claim: **drastically smaller drift surface + explicitly non-authoritative**, not "zero drift." Survives, sharpened.

### Claim 2 — the inheritance-declaration → **REVISED (exhaustive manifest → short orienting boundary)**
- *Prosecution (bites):* an **exhaustive** INHERITED-vs-OWNED manifest is (a) redundant with the inline pointers every POINTED item already carries, and (b) a **new drift surface** — the manifest can say "X is pointed" while the body owns X, and they disagree. That's ceremony that manufactures the very drift the design fights.
- *Collision → correction:* what a reader actually needs is **orientation** — "before I dive in, what does this file own vs delegate?" — not a line-item duplicate of every pointer. **Revised:** a **short orienting boundary-statement** (a few lines: *OWNS conflict-detection + the warm behaviors + the loop-rule; INHERITS [→ cold's reference] the 5 ops, 2-shape, verdicts, failure modes*). Coarse-grained = low-drift + high orientation. **The exhaustive IN/POINTED/OUT manifest is a dive artifact for *building* the file — not a verbatim section *in* it.** The section survives as a boundary, not a ledger.

### Claim 3 — naming conflict-detection's failure modes → **SURVIVES (refined: one re-assigned)**
- *Prosecution:* is this inventing modes to fill a Quality section?
- *Test each:* false-positive-conflict (detection error — real, distinct ✓) · crying-wolf over-flag (severity error — a different axis from detection ✓) · adjudicate-instead-of-identify (the NOT-list violation / identity-erosion ✓ — the most important) · **ignore-the-trigger / re-run-everything → §9** — real, but it is a failure of the **trigger-gated re-run principle (Item A)**, **not** of conflict-detection (Item B). **Mis-assigned.**
- *Refinement:* **three** are conflict-detection's (false-positive · over-flag · adjudicate); **one** is the trigger-gate's (ignore-the-trigger). Quality §4.2 splits accordingly: *conflict-detection modes* + *trigger-gate mode*. The §13 refinement holds (fold-reopen satisfied — the modes postdate the "no new failure modes" blanket). Don't pad to a fifth. Survives, correctly filed.

### Claim 4 — the SKILL-slim → **SURVIVES (scoping confirmed)**
- *Prosecution:* the SKILL is a different file; touching it is leakage beyond "design the reference."
- *Collision:* you **cannot** design the reference's §6 Execute without deciding the fate of the SKILL's overlapping 9 steps (move, or duplicate?). So the slim is a **necessary consequence**, not gratuitous. Correctly scoped: **name** the consequence (in the design), **execute** it separately. + make explicit it's **two ordered build steps** — write the reference, *then* slim the SKILL to point at it. Survives as stated.

### Claim — guard both ways → **PASSES**
- *Anti-bloat:* P1 refined (cheat-sheet kept non-duplicating) + P2 cut (exhaustive manifest → short boundary) — the file is kept from becoming a cold-copy.
- *Anti-stub:* conflict-detection stays **fully IN** (the file's primary job); it's not a pointer-file. Honest middle held. Not rubber-stamped — three of four claims moved.

### Claim — self-reference honesty → **PASSES**
Every claim rests on an external anchor — the actual template (F1, grepped), the priors' commitments, the agreed guardrails. The assembly-lens stayed sized-modest (N=1 inheriting-discipline). Clean.

## (d) ★Backstop — what the blueprint MISSES

- **(i) The cheat-sheet format build-guard** (folded into Claim 1) — state `op-name · warm-behavior · ≤3-word reminder · pointer` so the file can't drift into full definitions.
- **(ii) ★A provisional-status note.** Cold's reference is a stable built spec; **warm itself is "provisional until exercised"** (design-doc §13). The reference should carry a short status line — *"canonical operational spec for warm; warm is provisional-until-exercised (design-doc §13)"* — so readers know it's the operational home *and* that the design is still settling. Missing from the blueprint; add it.
- **(iii) The size target** (~180-260 lines) is a **soft estimate**, not load-bearing — depends on how full conflict-detection's spec runs. Flag as estimate, don't enforce.
- **(iv) §6 Execute is warm-own** (the loop/sequence has no cold analog — cold is single-pass), **but per-op execution details point to cold** — consistent with the split; state it so §6 isn't accidentally written as a cold-copy either.

## (e) Coverage map

- Prosecuted: all four load-bearing claims + guard-both-ways + self-reference + a 4-point backstop.
- Moved the design: Claim 1 (authority-free-made-not-assumed + format guard) · Claim 2 (exhaustive → short boundary) · Claim 3 (one mode re-assigned) · +2 backstop additions (provisional-status note; §6 point-for-per-op).
- Structure held: the 6-section skeleton + the split + conflict-detection-IN + the division-of-labor all stand.

## Signal — **TERMINATE (the blueprint STANDS, amendments folded in)**

**Stands:** the 6-section template-matched reference, organized by the operational/canonical split, with conflict-detection fully IN and the shared bulk pointed.

**Amendments:** the cheat-sheet = warm-behavior + a labeled ≤3-word reminder + a format build-guard (not a definition) · the inheritance-declaration = a **short orienting boundary**, not an exhaustive manifest (the manifest is a build artifact) · the failure modes = **3 conflict-detection + 1 trigger-gate** (re-assigned) · **+ a provisional-status note** · §6 points-for-per-op · the SKILL-slim = **two ordered build steps**.

**Nothing built — a design.** The write is a clean follow-on (the outline + conflict-detection spec are directly applicable); flag design-vs-write at CONCLUDE.

## Convergence telemetry

- **Dimension coverage:** 5/5 (drift-resistance, non-ceremony, correct-assignment, non-sycophancy, scope).
- **Adversarial strength:** STRONG — two claims genuinely corrected (the inheritance-declaration was ceremony-as-designed; a failure mode was mis-filed), not token finds.
- **Landscape stability:** CHANGED — 1 revised + 1 re-assigned + 1 refined + 2 backstop additions; the core skeleton STABLE.
- **Clean SURVIVE exists:** YES (the 6-section split-organized reference), conditioned on the amendments.
- **Failure modes checked:** no rubber-stamping (3/4 moved) · no nitpicking (the manifest-drift + the mode-misassignment are build-load-bearing) · no self-reference collapse (external anchors) · no axis-absence (drift-resistance — the plane the whole design turns on — was the primary dimension).

**Output: PROCEED** (Routelister → CONCLUDE) — the blueprint stands with the amendments folded in.
