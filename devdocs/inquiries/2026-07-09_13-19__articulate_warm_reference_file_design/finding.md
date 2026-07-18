---
inquiry: references/articulate_warm.md — how it should be, shouldn't be, what concepts it holds
date: 2026-07-09
model: claude-opus-4-8
effort: high
layer: STRUCTURAL (single-artifact design)
continues: devdocs/inquiries/2026-07-09_11-32__articulate_warm_holistic_structure_integration/finding.md
synthesizes:
  - devdocs/inquiries/2026-07-09_09-05__articulate_warm_structure_layer (thin-wrapper — premise updated)
  - devdocs/inquiries/2026-07-09_09-48__articulate_warm_operation_set_and_warm_only_mechanisms (Item A + Item B)
  - devdocs/inquiries/2026-07-09_11-32__articulate_warm_holistic_structure_integration (holistic structure)
consumes:
  - cognitive_harness/articulate_simple/references/articulate_simple.md (the template + the shared ops it points to)
  - cognitive_harness/surfacing/references/surfacing.md (template confirmation)
  - cognitive_harness/articulate_warm/SKILL.md (the wrapper that will slim) · docs/how_articulate_warm_should_be.md (rationale)
verdict: the blueprint STANDS — a template-matched 6-section reference organized by the operational/canonical split; gate-clean; nothing built (a design)
---

# `references/articulate_warm.md` — the blueprint

## The one-line answer

> **It should be a normal discipline reference — the same 6-section skeleton every discipline uses — scoped to warm's *delta* and organized by one principle: inline the operational shape, point for the canonical definition. Its whole reason to exist is conflict-detection (the one warm operation with no home in cold); everything shared is pointed, not copied; the rationale stays in the design doc. It shouldn't be a self-contained copy of cold (that drifts) and it shouldn't be a bare pointer-file (then conflict-detection is homeless). Adding it *reduces* scatter, not adds to it — the SKILL's steps move in and shrink, and conflict-detection gets one canonical home instead of two half-homes.**

## The concrete blueprint (buildable)

```
  references/articulate_warm.md   (a new file; ~180-260 lines, an estimate — smaller than cold's 462: it POINTS for the shared bulk)

  ## 1. Identity
     - what warm is (re-invocation + one context-enabled application; loop-controller + conflict-gate)
     - the context symmetry (cold's 3 limits → warm's 3 inversions)
     - ★ inheritance boundary (SHORT): "OWNS conflict-detection + the warm behaviors + the loop-rule;
       INHERITS [→ cold's reference] the 5 ops, 2-shape, verdicts, failure modes"
     - ★ status note: "canonical operational spec; warm is provisional-until-exercised (design-doc §13)"
     - NOT-list: inherited (never-ask/no-halt/don't-adjudicate → POINT cold) + warm (never-fetch · emit-not-ask)
     - vocabulary
  ## 2. Components
     - the 3 operation-classes: (a) carried · (b) re-run · (c) warm-only-new
     - ★ operational cheat-sheet — format: `op-name · warm-behavior · ≤3-word reminder · pointer`,
       labeled "warm behavior + a reminder, NOT the definition (that's at the pointer)"
     - the trigger-gated re-run principle (did-it-move; the §9 cost-guard)
     - ★ conflict-detection — FULL canonical spec (§3 below)
  ## 3. Process Model
     - the per-item warm sequence (re-fire MQ2 → trigger re-runs → conflict-detection → Rephrase → carry)
     - the re-anchor→re-surface loop + termination RULE (fixpoint / cap=2 / oscillation); why → POINT design-doc §8
     - substrate (receives-never-fetches)
  ## 4. Quality
     - inherited failure modes → POINT cold
     - ★ conflict-detection's own modes (3) + the trigger-gate's mode (1)  [below]
  ## 5. Output Contract
     - the warm bundle schema (re-anchored MQ2 · on-trigger re-runs · conflict-flag+payload · Rephrase · carried · verdict)
     - verdict + content-conflict flag-type → POINT cold
  ## 6. Execute the Warm Process
     - warm-own runnable steps (the loop/sequence); per-op execution details → POINT cold
```

## The organizing principle — the operational/canonical split

The file must be **operationally runnable without opening cold** *and* must **not duplicate** cold's definitions. Both are satisfied by one move, which recurs twice:

- **Operations:** the *cheat-sheet* (imperative "carry / re-run / trigger") is **IN**; the five *definitions* are **POINTED**.
- **The loop:** the *rule* (fixpoint / cap=2 / oscillation) is **IN**; the *rationale* (why cap=2, the decoupling argument) is **POINTED** (design doc).

The inlined shape carries **no canonical authority** — but that isn't automatic, it's *made* so: the cheat-sheet is explicitly labeled *"warm behavior + a reminder, not the definition,"* and the inherited gloss is kept to ≤3 words (format: `op-name · warm-behavior · ≤3-word reminder · pointer`). Honest claim: this gives a **drastically smaller drift surface**, explicitly marked non-authoritative — not literally zero drift.

## Conflict-detection — the full spec that lives here (the file's primary reason)

The one operation with **no cold home** → canonical *here or nowhere*:
```
  input      the re-anchored premise + the surfaced material
  procedure  identify incompatibilities between what the request ASSUMES and what the project
             REALITY shows.  2-shape (list | explicit-empty).  grade SEVERITY.  DON'T adjudicate.
  ladder     none → HIGH-PROCEED
             resolvable-by-re-anchor → re-anchor + MED-FLAG (content-conflict)
             severe → HIGH-FLAG + content-conflict + a formulated clarifying-question payload
  division   discipline EMITS (flag + payload); RUNNER surfaces / asks / blocks
  autonomy   block-and-ask = operator-present-only; autonomy → flag-and-best-effort
  flag-type  content-conflict → POINT cold's Verdict Assignment (defined-shared, used-warm-only)
```

## Quality — the failure modes (Item B's + one of Item A's)

| Mode | Owner | What it is |
|---|---|---|
| False-positive conflict | conflict-detection | flagging a non-conflict (a *gap* mistaken for a *contradiction*) |
| Crying-wolf over-flag | conflict-detection | severity inflation → the runner stops trusting flags |
| Adjudicate-instead-of-identify | conflict-detection | deciding who's *right* — the NOT-list violation |
| Ignore-the-trigger | **the trigger-gate (Item A)** | re-running everything → breaks the §9 cost bound |

The first three are conflict-detection's; the fourth belongs to the trigger-gated re-run principle, not conflict-detection (the gate caught the mis-file). Cold's failure modes are **pointed**. This **refines** design-doc §13's "no new failure modes" — a blanket written before conflict-detection existed, updated exactly as "no new operations" → "no new operation-type" was.

## What it shouldn't be

- **Not a self-contained copy of cold** — the five operation definitions are the hard OUT (they'd drift silently; no sync mechanism).
- **Not a bare pointer-file** — conflict-detection has no other canonical home; it must be fully IN.
- **Not an exhaustive inherited-vs-owned manifest** — that's ceremony (redundant with the inline pointers) and a new drift surface; the file gets a *short* orienting boundary instead. (The full IN/POINTED/OUT manifest is a *build* worksheet, not a file section.)
- **Not the rationale** — the WHY stays in the design doc; the reference is the spec.
- **Not provisional-framed away** — it *is* the canonical operational tier; it just carries a one-line note that warm-the-design is still provisional.

## The division of labor

```
  SKILL.md          thin invocation wrapper — Step-0 pre-reads cold-reference + THIS reference;
                    ★ SLIMS: its 9 steps move into §6 Execute (a separate build step)
  references/
   articulate_warm  ★ canonical operational spec   ← the new file
  docs/how_..._be   rationale / provisional (the WHY)   ← pointed, kept
  articulate_simple/references/…   shared ops · 2-shape · verdicts · flag-type · failure modes  ← pointed
```

**Consolidate, don't scatter:** the SKILL's steps *move* in (not copy), conflict-detection gets *one* home. A fourth file with a consolidation discipline = **fewer** places the same fact lives, not more.

## Inherited Commitments Re-test

| Prior / guardrail | Commitment | Re-test |
|---|---|---|
| 09-05 (thin-wrapper) | warm has no `references/` of its own | **PREMISE UPDATED** — warm now has own-content (conflict-detection); the reference is the sanctioned exception 09-05 anticipated as the trigger. |
| 09-48 (Item A + B) | trigger-gated re-run; conflict-detection → gated escalation | **HOUSED** — Item A = the trigger principle (Components); Item B = conflict-detection (its canonical home is this file). |
| 11-32 (holistic structure) | the 3 operation-classes; the identity refinement; the shared flag-type | **HOUSED** — the taxonomy organizes Components; the flag-type is POINTED (per 11-32's shared-touch-point finding). |
| guardrail: inherit-not-duplicate | point for shared defs; don't copy | **STRUCTURALIZED** — the operational/canonical split + the hard OUT line. |
| guardrail: operationally-self-contained | runnable without opening cold | **STRUCTURALIZED** — the cheat-sheet IN (with the drift-guard). |
| guardrail: consolidate-not-scatter | fewer sources of truth | **STRUCTURALIZED** — the SKILL's steps move in; conflict-detection gets one home. |

**One correction, not a re-open:** design-doc §13's "no new failure modes" is refined (pre-conflict-detection wording), not overturned.

## Next actions — the design is complete; the write is ready (design-vs-write is your call)

★**Nothing is built. The write is a clean, low-risk pass** (a new file, no existing behavior touched):
1. **R2 — write `references/articulate_warm.md`** per the 6-section blueprint above (do first; a new file).
2. **R3 — slim `SKILL.md`** — the 9 steps canonicalize into the reference's §6; the SKILL becomes the thin wrapper. **Depends on R2** (write, *then* slim — two ordered steps).
3. **R4 — refine design-doc §13** — acknowledge the new failure modes (small; alongside R2).

**Monitor:** the inherit-and-extend reference template (skeleton + inheritance-boundary + operational/canonical split) — modest, N=1; revisit if a second inheriting discipline appears.

**★The design-vs-write decision is yours.** You're mid-build-mode (you did R2a-c last turn), so the natural move is to **write the file now** — the blueprint + the conflict-detection spec are directly applicable. Say the word and I'll write the reference (R2), then slim the SKILL (R3). Or hold at the design.

## Open questions

- **The size** (~180-260 lines) is a soft estimate — depends on how full conflict-detection's spec runs.
- **When to snapshot to full self-containment** — during churn, point; once warm graduates from "provisional" (design-doc §13), folding the shared definitions in for a standalone reference becomes reasonable (the drift argument evaporates when nothing drifts).

## Source input

```
lets dive deep into references/articulate_warm.md how it should be and it shouldnt be, it should include what concepts etc
```
