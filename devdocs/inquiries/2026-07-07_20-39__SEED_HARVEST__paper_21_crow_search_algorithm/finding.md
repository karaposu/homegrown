---
status: active
model: claude-fable-5
effort: unknown
---
# Finding: paper 21 (Crow Search Algorithm) — the seed harvest, first run under the seed_harvester protocol

## Question

"Let's run it on paper 21" — run the just-built **seed_harvester protocol** (`cognitive_harness/protocols/seed_harvester.md`) on paper 21: **Askarzadeh (2016), "A novel metaheuristic method for solving constrained engineering optimization problems: Crow search algorithm"** (`devdocs/paper_seed/21.md`). Dual readout: the harvest is primary (seeds + the standard ladder verdict); this being the protocol's **first end-to-end run**, acceptance observations are the secondary readout.

**Background for a fresh reader.** The paper-harvest studies sources one at a time and extracts **seeds** — short, gated, anchored "maybe our X could be Y" hypotheses recorded for later development. The protocol runs inside a `/traverse` dive: GENERATE (cross the source's claims with the project's anchors) → GATE (two doors + provenance) → TYPE → GRADE → RECORD (a `## Seeds` section + the global index). Paper 21 is fresh territory — a metaheuristic optimizer, after six psychology papers.

## Finding Summary

- **Seed-yield: ONE nascent seed (p21-S1).** *The stochastic selection lever:* maybe the harvest's judgment-driven selection choices (which source next; which recorded seed to develop next) should carry a small, capped random-jump component against judgment-lock. It survived the gate narrowly — graded NASCENT, with a two-condition maturation-trigger — full record in `## Seeds` below.
- **Ladder verdict: CONFIRMING-PLUS with a sharp mirror; no import.** The plus: CSA independently exhibits the exact two-part structure we committed hours earlier as design rules — an ungated divergent track (crows move even to worse positions, explicitly "to increase the diversity") plus a greedy keep-track (memory updates only on improvement) — our generate-then-gate with the gate-after-generation rule, arrived at inside an engineered optimizer. The mirror: crows hide excess food and retrieve it across seasons — the seed lifecycle ("harvested now, planted later"), down to following another crow to its cache ≈ consuming another dive's recorded seed. Vivid; graded a mirror (it names no new practice).
- **The gate demonstrably bit — the more important first-run result.** Three candidates killed (one as decorative speculation, one for having no decision-link, one as fold-to-owned), the survivor's grade capped by a prosecution that WON at the live bar, and one **source-support overstatement caught before recording** (the "adaptive" form: the paper's tuning heuristic is static per-problem; the online-adaptive version is our extrapolation — the record now says so). A first run whose filter visibly filters is worth more to the protocol's credibility than a fat yield.
- **Forecast calibration: region CORRECT, magnitude IN-BAND** (committed pre-grounding: fresh-territory confirming + mirror likely, no import; committed post-grounding: seeds 0–3 centered 1–2 nascent → landed 1 nascent). The fresh-territory and first-run-wants-a-yield pressures both held.
- **Protocol acceptance: the composition map held end-to-end** — the crossing ran as Innovation's deliberate pass, the gate as Critique, the record at CONCLUDE; the innovate discipline's own test-phase delegated cleanly to the gate. Two one-line protocol touch-ups suggested (Next Actions).

## Finding

### 1. What the paper is

CSA is a population optimizer modeled on crow behavior: N crows move in the search space; **each crow memorizes one thing — the best position it has found so far** (its cache, m_i); to move, a crow picks a **random** flock-mate and flies toward that crow's remembered best (never a global-best broadcast — "randomly one of the flock crows (it may be itself)"); with **awareness probability AP**, the followed crow notices and the follower is thrown to "a random position" (the diversification mechanism); **flight length fl** scales the step, and fl>1 deliberately overshoots *past* the target. Two tunable parameters total (vs PSO's 4, HS's 3, GA's 6). The paper's claims are modest and honest: competitive results on six engineering problems, the no-free-lunch theorem acknowledged, tuning "problem dependent… done by trial."

The subtlest structure (the paper states it but never names it): **the position track is non-greedy** — "if a crow generates a new position which is not better than its current position, it will move to the new position. Non-greedy algorithms can increase the diversity of generated solutions" — while **the memory track is greedy** (memory changes only on improvement). The crow wanders freely; its memory keeps only the best.

### 2. What the harness already owns (and what it doesn't)

Most of CSA's content lands on owned ground, checked absorber by absorber: population + selection (the harness's improvement model is already evolutionary selection); divergence-then-convergence (the crossing's generate-then-gate); parsimony as a design value; the fl>1 overshoot (a numeric image of our *extrapolate* move); the tune-diversification-to-the-landscape heuristic (our weight-toward-un-harvested-territories lesson).

Two things stood out beyond family agreement. First, the **two-track structure is a rich confirmation, not a gap**: it is our generate-then-gate architecture — including the gate-positioned-after-generation rule committed in the seed-model work — exhibited independently by an engineered optimizer, with the diversity justification in the paper's own words. Second, one corner is genuinely **not owned anywhere: deliberate randomization.** The harness prompts divergence but never randomizes; every pipeline-level selection (which source next, which seed/route to develop) is judgment-driven. And the harvest's own record shows judgment-driven selection can lock: papers 5–14 ran ten consecutive dives absorbed by one frame until a deliberate human shift broke the streak. CSA's escape-from-local-optima is load-bearing on exactly the mechanism we lack.

### 3. The crossing and the gate — how the yield was produced

The deliberate crossing pass generated seven candidates (one-to-many, ungated, each carrying its source citation, project anchor, and move). The gate then did its work:

- **Killed:** randomize-the-crossing's-move-choice (the protocol's three-move sweep is already systematic — no lock to break; the decorative-speculation exclusion's first catch); give-killed-candidates'-anchors-a-walk-on (no identifiable decision at either bar; a strained mapping); split-memory-into-wander-log-plus-best-slots (**the strongest failed candidate** — sharp, source-supported, and failed only because the project already works that way: the memory files are greedy best-slots, the inquiry histories are the append-only wander record; its residue lands in the ladder as one more independent match to our architecture).
- **Corrected:** the surviving candidate's "adaptive" form initially leaned on the paper's tuning heuristic as if it claimed online adaptation. It doesn't — "for multimodal functions… larger values for AP" is *static, per-problem* tuning. The record now states which part the paper exhibits and which part is our extrapolation. This is the protocol's provenance condition (source-support) catching a real overstatement at the overstatement stage.
- **Survived, narrowly:** the merged germ — one lever, two sites (source choice; seed-development choice). The prosecution at the live bar WON: in today's human-steered mode, no decision clearly turns on it — the user is, in effect, the harness's awareness probability (the empty-yield case argued exactly this, and its argument capped the grade). The nascent bar — interesting, anchored, might mature, with a specific checkable trigger — passed comfortably. NASCENT is the accurate grade, not a consolation.

### 4. The acceptance readout (the protocol's first run)

The composition map held end-to-end: Surfacing carried both crossing-inputs (the claims verbatim; nine anchors tagged); Sensemaking adjudicated the ownership boundary; Innovation ran the crossing as its assigned generative pass; Critique ran the gate; this CONCLUDE records. One composition note worth making explicit in the protocol: the innovate discipline's own test-phase is *delegated to the gate* in a harvest dive — observed to compose cleanly (the gate's conditions stand where the 5-test cycle would). The label-hygiene rule (structure-from-source, label-from-us) earned its keep twice ("two-track" flagged as our coinage; the adaptive-form split). The two-stage forecast + band held on fresh territory. No friction requiring redesign.

## Seeds

*(Per the seed_harvester protocol §7–8. Yield: 1. Also appended to `devdocs/seeds/_seed.md`.)*

```
seed:
  id:                p21-S1
  hypothesis:        "maybe the harvest's judgment-driven selection choices — which source/territory
                      next; which recorded seed to develop next — could carry a small, capped
                      random-jump component: a deliberate stochastic lever against judgment-lock,
                      ideally adaptive (raised when recent yields go same-frame stale, lowered when
                      varied), implemented first as a prompt-level nudge, never replacing the
                      priority/judgment pull"
  type:              inspiration   (action: add)
  kind:              mechanism
  anchor:            the harvest's selection layer — source/territory choice + devdocs/seeds/_seed.md
                     consumption (which-seed-next; the between-inquiry layer)
  source:            devdocs/paper_seed/21.md (Askarzadeh 2016, Crow Search Algorithm)
  source-support:    the paper exhibits: randomization as the load-bearing diversification mechanism
                     (Eq 2 "a random position otherwise" :166-171; "intensification and
                     diversification are mainly controlled by... awareness probability" :175-186);
                     guidance follows a RANDOM peer's remembered best, not a global best (:358-360);
                     diversification rate should match landscape multimodality (:1063-1066 — STATIC
                     per-problem tuning). The ONLINE-adaptive form (adjust by yield-staleness
                     mid-run) is OUR extrapolation from that static heuristic, not the paper's claim.
                     ABLATION EVIDENCE (enriched by the full-read pass, the 23-42 dive): with AP = 0
                     (randomization removed) CSA's performance collapses by orders of magnitude
                     (Table 18: sphere best 125.28 at AP = 0 vs 2.90e-16 at AP = 0.05 — exponents
                     reconstructed, the text extraction drops minus signs; "AP = 0 leads to weak
                     performance of CSA since the diversification ability of the algorithm has been
                     eliminated," :965-970 + :1056-1057) — the diversification mechanism is
                     demonstrated load-bearing, not just designed-in.
  door:              novelty
  grade:             NASCENT
  maturation-trigger: revive when (a) a same-frame absorption-streak reaches 4+ consecutive dives
                     again, OR (b) the pipeline gains autonomous multi-dive operation (per-dive
                     human steering drops) — whichever comes first
  move:              transfer (the lever, both sites) + extrapolate (the adaptive form)
  confidence:        med
```

**Gate telemetry:** candidates generated 7 · gated-in 1 · killed 3 (decorative-speculation 1; no-decision 1; fold-to-owned 1) + empty-yield candidate dispatched-credited + 1 source-support correction · doors: novelty 1 · types: inspiration 1 · grades: nascent 1 · moves: transfer+extrapolate. **Strongest-failed:** the two-track memory split (failed only on already-owned). Self-assessment: **PROCEED**.

## Next Actions

### COULD
- **What:** Two one-line protocol touch-ups: state in §6 that the innovate discipline's test-phase is delegated to the gate in a harvest dive; add this run's static-vs-online example to §3's source-support bullet.
  - **Who:** the user / a light protocol edit. **Gate:** before or at the next protocol run. **Why:** the protocol says what its first run learned; both are one-liners, not redesign.
- **What:** Run paper 22 under the protocol — the acceptance series' second data point.
  - **Who:** the next harvest dive. **Gate:** when the harvest resumes. **Why:** one clean run is an anecdote; two begin a pattern.

### DEFERRED
- **What:** Develop p21-S1 (the stochastic selection lever).
  - **Gate:** its maturation-trigger (streak-recurrence OR autonomy increase) — registered in the index.
  - **Why (if revived):** a judgment-independent protection against judgment-lock, designed on matured evidence.

## Reasoning

The dive's honesty rested on three pressures, all held: fresh territory (the two-stage forecast: region committed before reading deeply, magnitude as a band after — both landed in-band); the first run "wanting" a yield (the gate killed three of seven candidates, capped the survivor at nascent by crediting the prosecution that won at the live bar, and corrected a source-support overstatement — the filter visibly filtered); mirror-glamour (the cache-retrieve metaphor reflects our newest machinery almost perfectly, and stayed graded a mirror per the standing precedent that a mirror's vividness is not an import). The ladder verdict and the seed-yield were kept as separate readouts throughout — confirming-plus + mirror on one, 1 nascent on the other — which is the harvest reframe working as designed.

## Open Questions

### Monitoring
- p21-S1's maturation-trigger (streak-recurrence / autonomy) — re-scanned via `devdocs/seeds/_seed.md`.
- Provocation-population: still zero (this dive's confidence-door never fired — the yield was novelty-door + confirmations). The watch continues.
- Paper 22 (the protocol's second run): does the clean composition replicate?

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets run it on paper 21
```

</details>
