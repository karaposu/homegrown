## User Input

devdocs/inquiries/2026-07-07_12-02__seed_generator_protocol_reframe_harvest_toward_seeds/_branch.md — Innovation step of the meta-inquiry (reframe the harvest toward seeds + define "seed" + design seed_generator). PROPORTIONATE design inquiry; real generative work (the seed-taxonomy + the design-sketch). MEANING LAYER ONLY. All 7 mechanisms; core-3× at Q2; Piece-Level Inversion at Q1 + Q2.

---

# Innovation — seed_generator / reframe-the-harvest-toward-seeds

**Seed (input to this discipline):** the 5-piece decomposition (Q1 reframe-adjudication / Q2 ★ the seed-definition / Q3 status+relation-map / Q4 design-sketch / Q5 onward+naming). **Intent:** (a) develop the seed-TAXONOMY, (b) firm the protocol design-SKETCH, (c) run both inversions, (d) probe for an emergent insight about the whole harvest.

**Non-sycophancy note:** this dive grades the USER'S OWN method-critique. The four guards apply to the proposal, not a paper: credit the true part fully (the goal was mis-set), don't rubber-stamp the overstatement (drop-the-gate), don't manufacture taxonomy for its own sake (anti-proliferation), don't deflate a real design opportunity.

---

## Core three-variation set — at Q2 (the seed definition; single center)

**V-generic (the plain definition):** a seed is an under-developed idea from a source that would help the harness if developed. → Too loose (no gate, no anchor) — this is exactly the "capture everything interesting" failure the gate exists to prevent. **REFINED, not kept as-is.**

**V-focused (the four-property definition):** a seed is an **OUTPUT germ**, **ANCHORED** to a harness concept, **GATED** (connects to something un-owned), with **DEFERRED** payoff. → Survives. This is the working definition. The four properties each do work: output (vs the two input-senses), anchored (= "relate to our concepts"), gated (= credibility), deferred (= vs import). **KEPT.**

**V-contrarian (the two-grade extension):** the four-property definition alone forces a binary (seed or not), which loses the "interesting but not-yet-decisive" middle the user explicitly wants. Add a MATURITY axis: **LIVE** (changes a future decision → act) vs **NASCENT** (interesting, anchored, might mature → watch). → Survives and improves the focused version — it captures the user's "interesting development and understanding" intent without loosening the gate (the gate moves from *capture* to *act*). **KEPT — this is the winning variation.**

**Core-3× result:** the definition is the four-property germ WITH the two-grade maturity axis. The generic (loose) version is what you get if you drop the gate; the two-grade version is what you get if you honor both the gate AND the user's breadth intent. The contrarian won.

---

## Generative work 1 — the SEED-TAXONOMY (Q2)

**Method:** Combination (fuse the two observed seeds) + Absence-recognition (what kinds are missing?) + the innovate INPUT-seed taxonomy (Gap/Dissatisfaction/Constraint/Question/Signal/Failure/Collision) as a *structural analogue* for deriving OUTPUT-seed kinds. **Organizing principle: type a seed by the DEVELOPMENT-ACTION it implies** (that is what the decision-vs-label test rewards — a kind is real only if it changes what you'd DO to develop the seed).

The two observed seeds: paper 17 = "measure the un-built quality-hunch's calibration as dissociable facets"; paper 19 = "compute the hunch from a cheap quantity-proxy." Both fill in HOW an already-named-but-un-built component works — a shared action-shape with two flavors.

**The taxonomy (5 kinds, each a distinct development-action):**

| Seed kind | Development-action | Anchor | Example |
|-----------|-------------------|--------|---------|
| **BUILD-seed** | add + spec a component/discipline not yet in the architecture | an architectural *absence* | (none observed yet — e.g. "a Diagnosis discipline should exist") |
| **MECHANISM-seed** | fill in HOW an already-named-but-un-built component works | an *un-built* component | **paper 17** (measure-flavor), **paper 19** (compute-flavor) |
| **FRAME-seed** | add a new lens/organizing-idea to an owned concept | a *canon frame* | a paper offering a new way to see an existing frame |
| **REFINE-seed** | sharpen the wording/structure of an existing built spec | an *existing spec* | a paper that tightens a discipline's failure-mode |
| **CONNECT-seed** | draw a link between two owned concepts not yet connected | *two* canon frames | a paper that shows concept A and B are the same mechanism |

**Anti-proliferation applied (decision-vs-label test on the taxonomy itself):**
- MEASURE and COMPUTE (17, 19) do NOT get separate top-level kinds — both are "fill in an un-built component's mechanism," the same action-shape. They are **sub-flavors of MECHANISM-seed** (like the paper-14 "stance-namer" sub-flavor move). Distinguishing them further only matters at the point of writing the spec.
- BUILD vs MECHANISM: kept separate — BUILD names a *new box* (architectural absence); MECHANISM fills in an *existing named box*. Different actions (add a component vs detail one). Real.
- FRAME vs REFINE: kept separate but boundary noted — FRAME *adds* a new organizing idea; REFINE *polishes* existing wording. Different actions (add a section vs edit text).
- CONNECT: kept (the lightest) — inherently relational (a link, not a lens or an edit).
- **Five top-level kinds, each a distinct development-action.** Any candidate 6th kind must name a development-action none of these five covers, or it collapses to a sub-flavor.

**Grade × kind:** each kind can be LIVE or NASCENT. Paper 17 = a LIVE MECHANISM-seed; paper 20's watch-note = a NASCENT FRAME-seed. The grade says *act-or-watch*; the kind says *what-development-action*.

---

## Generative work 2 — the DESIGN-SKETCH (Q4)

**Borrowed structural precedents from paradigm-sweeper (concrete):**
- **enumerate-never-select** → seed_generator ENUMERATES candidate seeds from a source; it never picks which to develop (the human / the between-inquiry layer picks). This keeps it a *discipline*, not a decision-maker — same firewall paradigm-sweeper and routelister hold.
- **the seed-block contract** → each seed is a CAPPED, divergence-pinning record (not an essay) — enough to develop from, not the development itself.
- **the anchoring guard** → every seed NAMES its harness anchor; a candidate that can't name one is DROPPED. This mechanizes the user's "relate to our concepts" constraint — it's not advice, it's a required field.
- **the persistent cross-run index** → a `_seed.md` index (sibling to routelister's `_route.md` and paradigm-sweeper's `_sweep.md`) that accumulates seeds across runs, stale-flags matured/dead ones, never deletes — so seeds don't get lost between dives.

**The seed-record schema (sketch):**
```
seed:
  id:           <short id>
  kind:         build | mechanism | frame | refine | connect
  anchor:       <the harness concept — canon frame / un-built component / open question>   [REQUIRED — the anchoring guard]
  grade:        live | nascent
  action:       <the development-action — what to DO to grow this seed>
  gate:         <import-test-descendant verdict — what un-owned thing it connects to>
  source:       <paper / concept / open-question it came from>
  confidence:   <low | med | high>
```

**The steps (in principle — a sketch, not the ratified Process spec):**
1. **Receive** a source (an academic paper / a concept / the harness's own open questions).
2. **Surface** candidate developments (the interesting content).
3. **Anchor** each to a harness concept — DROP anything that can't anchor (the anchoring guard).
4. **Gate** each — does it connect to something the harness doesn't already own? (the import-test-descendant; kills confirming/decorative).
5. **Grade** each — LIVE (changes a now-visible future decision) or NASCENT (interesting, anchored, might mature).
6. **Type** each — kind + development-action.
7. **Record** to the seed-record + the persistent `_seed.md` index; **enumerate, never select**.
- **Self-assessment:** the gate is the honesty-check; non-sycophancy both ways (don't manufacture seeds to look productive; don't wave off real ones).

Concrete enough to seed the sequenced full-spec dive. Explicitly NOT the ratified Structural+Process spec (Meaning-first scope holds).

---

## Piece-Level Inversions

### Q1 inversion — "DROP the gate: it's the obstacle to more yield; capture everything interesting"
**Re-defeated — but it improved the design.** The gate is what makes a seed CREDIBLE rather than manufactured; drop it and the harvest floods with pleasant-but-empty "seeds" — the exact sycophancy the whole method guards against (`non-sycophancy-both-ways.md`). The reframe changes the GOAL (what we optimize for: seed-yield) NOT the FILTER (what makes a candidate real). **BUT the inversion carries a true worry** — "don't lose interesting things that aren't yet decisive" — and the honest response is not to drop the gate but to add the **NASCENT grade**: interesting/anchored/might-mature seeds are CAPTURED and WATCHED, while the gate moves from *capture* to *ACT*. So the inversion's valid pressure is exactly what PRODUCED the two-grade design. **Land: gate KEPT; the two-grade definition is the inversion's honest yield.** (A clean case of an inversion sharpening a design rather than overturning it.)

### Q2 inversion — "COLLAPSE the concept: a harvest-seed is just an innovate-seed (Gap/Question) sourced from a paper"
**Re-defeated.** Three differences hold: **direction** (a harvest-seed is an output-yield; an innovate-seed is input-fuel), **testedness** (a harvest-seed has passed a gate; an innovate-seed can be a raw "maybe idea"), **anchoring** (a harvest-seed names its harness concept; an innovate-seed is a free-floating trigger). The family resemblance is real but explained by a **lifecycle-link**: a recorded harvest-seed, when someone later develops it, BECOMES the innovate-seed (the Gap/Question trigger) of that development run — the same object at a later lifecycle stage, exactly like paradigm-sweeper's block→innovate handoff. **Land: a distinct verdict-KIND, lifecycle-linked to the innovate-seed — not the same concept, not unrelated.**

---

## Mechanism Coverage Ledger (all 7 fire; generative dive — most produce KEPT output)

| # | Mechanism | Role | Output | Kept? |
|---|-----------|------|--------|-------|
| 1 | **Combination** | Generator | fused 17's measure-seed + 19's compute-seed → the MECHANISM-seed kind (two sub-flavors) | ✓ KEPT |
| 2 | **Absence-recognition** | Generator | "what development-actions aren't covered by the two observed?" → derived BUILD / FRAME / REFINE / CONNECT | ✓ KEPT (generated the taxonomy) |
| 3 | **Domain transfer** | Generator | borrowed paradigm-sweeper's structure (enumerate-never-select / seed-block / anchoring guard / persistent index) → the design-sketch | ✓ KEPT |
| 4 | **Extrapolation** | Generator | "the harvest produces seeds" → "the harvest IS a seed_generator, always was" → the emergent insight | ✓ KEPT (assembly) |
| 5 | **Lens-shifting** | Framer | shifted the harvest's scorecard-lens from "did it breakthrough?" to "what seed did it yield?" → the reframe's operational form | ✓ KEPT |
| 6 | **Constraint manipulation** | Framer | ADD: the anchoring constraint (every seed names its anchor) → mechanizes "relate to our concepts". REMOVE: the "must-change-a-decision-NOW" constraint → the NASCENT grade. (both directions, mandatory) | ✓ KEPT (both) |
| 7 | **Inversion** | Framer | Q1 (drop-gate → produced the two-grade design) + Q2 (collapse-concept → confirmed distinct-but-lifecycle-linked) | ✓ both re-defeated productively |

Coverage: 4 generators + 3 framers = full. This is a *generative* dive, so mechanisms mostly produced KEPT design-content (the taxonomy, the sketch, the two-grade axis), not just killed candidates.

---

## Assembly check — the emergent insight

**Candidate:** the harvest has been running seed_generator ALL ALONG — implicitly, through the "breakthrough SEED or not?" fork. The reframe makes tacit → explicit.

**Import-tested:** does it change a decision? **YES** — two decisions: (1) the success-criterion (from breakthrough-count, which read the recent run as failure, to seed-yield, which reads it as productive); (2) it justifies formalizing the protocol (you formalize a process you've discovered you're already running). So this is a genuine finding-level insight, not decoration.

**Held honestly (the valuable reframe for the user):** the recent "disappointing" NO-run was NOT the harvest failing — papers 17 and 19 planted LIVE seeds, paper 20 planted a NASCENT one, and every dive strengthened frames or sharpened mirrors. **The harvest was working; the scorecard was wrong.** The user's dissatisfaction ("breakthrough-search is not useful") correctly sensed a mismatch — but the mismatch was in the SCORECARD (measuring breakthroughs), not in the WORK (which was producing seeds). This is the deepest yield of the dive, and it answers the implicit worry behind the reframe: *we weren't failing to find breakthroughs; we were mis-scoring a working seed-harvest.*

---

## Innovation summary

- **The definition (Q2):** four-property (output / anchored / gated / deferred) + two-grade (live/nascent). The two-grade axis is the winning contrarian variation and the honest yield of the drop-the-gate inversion.
- **The taxonomy (Q2):** 5 kinds by development-action — BUILD / MECHANISM (measure+compute sub-flavors) / FRAME / REFINE / CONNECT. Anti-proliferation applied (measure+compute collapsed to sub-flavors; each top-level kind = a distinct action).
- **The design-sketch (Q4):** borrows paradigm-sweeper's four precedents; a seed-record schema (kind × anchor × grade × action × gate × source × confidence) + 7 steps + enumerate-never-select. Concrete, but a sketch (Meaning-first).
- **The status (Q3):** FORMALIZATION-WITH-A-REFRAME holds under the inversions.
- **The emergent:** the harvest was always a seed_generator; the scorecard (breakthrough-count) was the only thing broken — the work was sound. A genuinely valuable reframe for the user.
- **Both inversions re-defeated** (Q1 productively — it produced the two-grade design; Q2 cleanly — distinct-but-lifecycle-linked).
- **Naming (Q5, not decided here):** seed_generator collides with the input-senses; seed_harvester recommended (fits "harvest," and the emergent shows harvesting is literally what it does) — Innovation flags, Critique/user decides.

**For Critique:** verify (1) the taxonomy's 5 kinds each pass decision-vs-label (no label-only kinds); (2) the emergent ("harvest was always a seed_generator") is import-tested honestly, not inflated; (3) the two-grade definition genuinely resolves the interesting-development tension (not a hedge); (4) the design-sketch stays a sketch (didn't drift into the full spec); (5) non-sycophancy — the reframe's true part credited, the drop-the-gate overstatement resisted, both without over-correcting.
