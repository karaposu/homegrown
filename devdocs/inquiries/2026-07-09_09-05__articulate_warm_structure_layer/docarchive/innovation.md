## User Input

devdocs/inquiries/2026-07-09_09-05__articulate_warm_structure_layer/_branch.md — (STRUCTURAL design dive: crystallize the stabilized structure into CONCRETE buildable artifacts. No Meaning/Process re-opening. Anti-sycophancy both ways on the recommendation. Full spec in the instruction: the crystallized structure · before/after placement diagram · 3-orthogonal-axes de-coupler · N=2 seam parameterization · mechanism ledger · assembly emergent · inversion · frame audit.)

---

# Innovation — the structure of articulate_warm, crystallized

Generative pass. Meaning + Process inherited; this pass makes the *structure* concrete and buildable. Grounded in the verified facts (no `articulate_warm/` dir · spec :184 detection-edge · cold-only pipeline · doc §8/§10/§12 · 23-46/08-00).

## (1) THE CRYSTALLIZED STRUCTURE — three created/wired things on three orthogonal axes

### Axis 1 — SPEC (behavior): a warm-mode section in the articulate_simple reference

Add to `cognitive_harness/articulate_simple/references/articulate_simple.md` (one discipline, two modes). Concrete section outline:

```
## Warm Re-invocation — the second (post-context) pass        [NEW SECTION]

- What it is: the warm mode of this discipline — a re-invocation after
  /surfacing has put project material in view. (Not a separate discipline.)
- Substrate: RECEIVES the runner's surfaced material; never fetches
  (the no-fetch boundary of the cold pass is preserved).
- Re-runs:  MQ2 (re-anchor — the load-bearing move) + Rephrase (concrete
            vocabulary), once the anchor settles.
- Carries through unchanged: Itemize · Deconstruct · MultiDepth.
- The loop it controls: re-anchor → re-surface → terminate.
            → SEE docs/how_articulate_warm_should_be.md §8 (termination)
              and §10 (how it runs). Do NOT restate the mechanism here.
- Self-verdict: same five-compound rubric as the cold pass.
- Cross-ref: the "Cold-vs-warm-context detection" LLM-judgment edge (:184)
  points here (detection = adapt-to-substrate; this = the deliberate 2nd pass).
```

The section **extends** the spec's existing warm-substrate seam (`:74` "Substrate (warm session context if present; cold otherwise)"; `:184` the detection edge) rather than bolting on — the spec already knows "warm substrate"; this adds the *deliberate second pass* it did not have.

### Axis 2 — CONTROL (loop): a cohesive block in the traverse runner

Add to `cognitive_harness/traverse/SKILL.md` — the warm segment, placed between Surfacing and Sensemaking. Runner-segment sketch (structure, not mechanism):

```
[after Surfacing, before Sensemaking]                    [NEW RUNNER SEGMENT]

  ── WARM ARTICULATION LOOP (runner-owned) ─────────────────────────
   invoke articulate_simple in WARM mode (task + cold bundle + surfaced material)
   → read the warm MQ2 anchor
   → enforce the termination loop  ── per how_articulate_warm_should_be.md §8:
        fixpoint (anchor unchanged / verdict=no)  |  round cap (2)  |  oscillation guard
      if anchor moved & cap not hit → re-invoke Surfacing on the corrected
        territory (surfacing.md accumulates) → re-invoke warm mode
   → on settle: proceed to Sensemaking with the warm bundle
  ───────────────────────────────────────────────────────────────────
```

The block is **cohesive** (one contiguous region of the runner, not scattered) and **references §8 for the STEPS** — it *places and enforces*, it does not re-derive the mechanism.

### Axis 3 — RUN-ARTIFACT (output): its own file, parallel to cold

- The warm pass writes `articulate_warm.md` (per-item bundle with MQ2 + Rephrase re-fired; the rest carried) — **parallel** to the cold `articulate_simple.md`, so both passes stay auditable.
- `surfacing.md` **accumulates** across re-surface rounds (doc §8 — earlier material kept, new territory added).
- `_branch.md` is **re-derived** from the warm bundle (it is derived from the articulation).

## (2) THE BEFORE/AFTER PLACEMENT DIAGRAM (the finding carries this)

```
CURRENT — cold-only (the GAP):
   A(cold) → Su → S → D → I → C → R
   articulate runs ONCE, cold; no warm pass; the only loop is the
   whole-pipeline outer loop (C → refined re-run), not this one.

TARGET — warm segment inserted:
   A(cold) → Su → ┌─ WARM LOOP ──────────────┐ → S → D → I → C → R
                  │  Aw ⇄ Su  (re-anchor↔re-  │
                  │  surface, §8-bounded)     │
                  └───────────────────────────┘
   Aw = articulate_simple in warm mode.  The loop is 0–1 rounds typical,
   cap 2 (§8).  This segment is what does not exist today.
```

## (3) THE THREE-ORTHOGONAL-AXES DE-COUPLER

```
   SPEC axis          CONTROL axis          RUN-ARTIFACT axis
   ─────────          ────────────          ─────────────────
   1 spec,      ⊥     runner cohesive  ⊥    2 files
   2 modes            block                 (cold + warm)
   (articulate_       (traverse)            (articulate_simple.md
    simple.md                                + articulate_warm.md)
    + warm section)
```

The three are **independent** — decided separately, disputable separately. This dissolves two false tensions:
- *"A mode can't write its own output file."* — It can. **Spec-form ⊥ run-artifact.** Exactly as `cognitive_harness/protocols/conclude.md` is **one** protocol spec while **every** inquiry writes its own `finding.md`: one spec, many run-artifacts. One discipline invoked twice (cold/warm) writes two run-files. No contradiction.
- *"Wiring the loop into the runner is Process-redesign."* — It isn't. **Control-location (where the loop lives) ⊥ Process (the loop's steps).** The runner segment *places and enforces*; the steps are inherited from §8/§10. Placement is structural.

## (4) THE N=2 SEAM PARAMETERIZATION (the 23-46 consumer, concrete)

The cohesive block, written parameterized-in-place so extraction is a move:

```
  fetch_loop(
    U               = /surfacing              # the upstream fetch
    D               = articulate_simple:warm-MQ2   # the downstream re-anchor
    need_signal     = warm-MQ2 verdict (moved? / verdict=no)
    material_change = the §8 material-change judgment
    round_cap       = 2
  )
```

- **Stays runner-side (never extracts):** the *placement* (where the segment sits in the pipeline — between Su and S) and the *invocation wiring* (which discipline, what inputs). Placement is pipeline-specific.
- **Extracts at N=2 (the move):** the *loop-control block* itself (the fixpoint/cap/oscillation enforcement) → `cognitive_harness/protocols/fetch_loop.md`, loaded by the runner and called with the params above at each site. When the 2nd site (sensemaking→surface) is wired, both callers load the one protocol.
- This makes the 23-46 "prepared-extraction sketch" concrete: the block is *already shaped* like the protocol's call-site, so extraction is lifting the block into a file and passing params — not a rewrite.

## (a) MECHANISM LEDGER

| Mechanism | Produced |
|---|---|
| **Absence recognition** (generator) | The GAP as the deliverable — the runner has no warm pass; the structure must be *created + placed*, not tidied. The whole dive's premise. |
| **Combination** (generator) | The three-axes crystallization — composing spec-form + control-location + run-artifact into one design while keeping them orthogonal. |
| **Domain transfer** (generator) | The `conclude.md`-one-spec-many-`finding.md`s analogy → the "mode can write its own file" de-coupler; the fetch_loop() parameter-signature borrowed from the 23-46 sketch. |
| **Extrapolation** (generator) | The N=2 seam — extrapolating the single wired instance to the shape the 2nd site will need. |
| **Constraint manipulation** (framer) | Holding "no separate discipline" (doc §12) + "runner owns the loop" (§6/§10) fixed → the mode-section + runner-block fall out as the only forms that satisfy both. |
| **Lens shifting** (framer) | Viewing "wiring" through the Structural/Process lens → placement+housing is structural; steps are Process. Dissolves the bleed. |
| **Inversion** (framer) | Absence-as-asset (below). |

## (b) ASSEMBLY EMERGENT (assembly check)

Composing the three axes, a pattern emerges: **[spec = mode-section] + [control = runner cohesive-block] + [own run-artifact]** is a **reusable STRUCTURAL TEMPLATE for any warm / second-pass re-invocation discipline.** The sensemaking→surface 2nd site (the 08-00 missing-material case), when built, would take the *same* three-axis shape: a warm-mode section in the sense-making spec + a cohesive loop-block in the runner + its own re-run artifact.

**★Sized honestly:** this is the **structural correlate of the 23-46 "prepared extraction,"** now written as a template — it is **grounded and useful, NOT a new thesis.** It adds no claim beyond "the second wired site will have the same structural shape, so design this one to be copyable." Flagged: **23-46-derived**; do not inflate into a "universal harness structural law." Its whole content is *reuse the shape you already found*.

## (c) THE REQUIRED INVERSION — absence-as-design-opportunity

- **Reading 1 (retreat / embarrassment):** "articulate_warm barely exists structurally — no dir, a cold-only runner, no warm mode. The doc describes a thing that isn't built. That's a gap we failed to close."
- **Reading 2 (the inversion):** the absence is an **asset**. Because **nothing is built**, the structure can be designed *right the first time* — a mode-section (not a duplicated discipline to later merge), a cohesive loop-block (not scattered logic to later gather), an own-file artifact (not a retrofit). **"Structure absent" is exactly what makes the clean N=2 seam cheap** — there is no existing mess to refactor around before the 2nd site arrives.
- **Landed: absence-as-design-opportunity.** ★Anti-sycophancy — sized honestly: the advantage is **real but MODEST**. "Nothing is built yet, so build it clean" is ordinary greenfield prudence, not a coup; the cost side (the warm pass genuinely doesn't work today — the ordering problem persists until it's wired) is equally real. The honest core: the dive **arrived at the right time** — before a messy build, when the design is still free — and that timing is owed to the **user's** "go back to articulate_warm / dive the structure layer," not to any cleverness in the analysis. The generative content here is small and I am not dressing it up.

## (d) INHERITED FRAME AUDIT — is the recommendation challenged? YES

- **warm-mode-section (Axis 1):** status-quo-convenient or evidence-driven? The no-dir fact could equally argue "so create the dir." → **Critique** prosecutes.
- **"placement is structural" (the GAP):** honest, or Process smuggled in? → **Critique** tests the boundary.
- **the 3-axis separation:** does it hold, or is "own-file for a mode" a real inconsistency? → **Critique** tests the de-coupler.
- **the residual fork:** does warm-mode-section violate the standing "articulate2 = no spec change" decision? → **Critique** adjudicates; the finding surfaces it for the user.

Not un-challenged. All four load-bearing structural claims carry a live prosecution into the gate.

## Tests (novelty / scrutiny / fertility / actionability / mechanism-independence)

- **Novelty:** low-moderate — the *design* is largely forced by the constraints (that's a virtue for a structure dive, not a weakness); the concrete artifacts (section outline, runner sketch, fetch_loop() signature, before/after diagram) are the new, usable material.
- **Scrutiny survival:** the de-coupler (conclude.md analogy) and the Structural/Process boundary are the two claims most likely to be attacked → routed to Critique.
- **Fertility:** the N=2 template feeds the sensemaking 2nd site + the eventual fetch_loop protocol.
- **Actionability:** high — the section outline + runner sketch are directly buildable (when the user chooses to build); the finding is a design, not the build (MQ4).
- **Mechanism-independence:** the three axes are independently grounded (spec = doc §12; control = §6/§10 + 23-46; artifact = audit-legibility + the conclude.md analogy) — not one assumption wearing three hats.

**Signal:** PROCEED to Critique (the gate). Crystallized: three orthogonal axes (mode-section · runner cohesive-block · own-file) + the GAP (place the warm segment between Su and S) + the N=2 seam parameterization + the absence-as-opportunity inversion (sized modest, user-credited). Four live prosecutions handed to the gate.
