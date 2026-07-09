## User Input

devdocs/inquiries/2026-07-08_23-46__fetch_loop_as_reusable_discipline_extract_and_generalize/_branch.md — (DESIGN dive, Surfacing = draw the raw material to settle whether the fetch-loop pattern should be extracted into a reusable fetch_loop discipline + whether the refactor is beneficial for the endgoals. MIXED territory; the empirical core = the reuse-surface survey; surface DISCONFIRMING hard; band RICH. Full spec in the instruction.)

---

# Surfacing — is fetch_loop a real reusable abstraction, and is extracting it beneficial?

**Case:** mixed (artifact reads — the endgoal/composition canon + the discipline specs; + possibility generation — the design threads). **Territory:** the harness's disciplines/runners + the endgoal canon + the articulate_warm fetch-loop definition. **Band:** RICH. **Signal-first below.**

## Signal (the load-bearing finds)

1. **The fetch-loop structure has three parts** (from the articulate_warm finding): **(a)** a step emits a NEED signal (MQ2's context-need), **(b)** an upstream FETCH is re-invocable on a refined target (surfacing §3.6/§3.7), **(c)** a CONVERGENCE criterion stops it (the need stabilizes / verdict=no). This triple is the anti-false-family test: a genuine fetch loop needs all three, not resemblance.

2. **★THE SURVEY RESULT — currently N=1 WIRED, but the abstraction is REAL.** Across the harness, exactly **one** discipline-pair has all three parts *wired* (articulate↔surfacing — the origin). **One more has the genuine structure but the re-fetch is LATENT/not-wired** (sensemaking↔surfacing, via the Accommodation trigger — the strongest second-site candidate). **One is a genuine future candidate but UNBUILT** (traversal-memory recall — zero instances exist). The rest (decompose, innovate, critique-backstop, paradigm_sweeper, routelister) are absent or need-signal-only. So the generalization is **real, not a false family** — but it is currently **N=1 instantiated**.

3. **★THE PROJECT'S OWN RULE decides the timing: "two instances justify a protocol; one is an observation."** Canon (`MVLFamily_as_Buildup_Steps_Toward_Traverse.md` §4 + its DEFERRED item) states the extract-when-earned principle explicitly and defers pattern-extraction to *"when a **second** loop-family instance appears (the project's 'N=2 justifies a protocol' rule)."* At N=1-wired, fetch_loop is an **observation (= the `fixpt-S1` seed)**, and extraction now is premature *by the project's own standard*.

4. **★"a fetch_loop skill like traverse" is a CATEGORY MISMATCH.** Traverse is a **strictly linear pipeline** — each discipline runs **once**, in a fixed nested sequence (A→Su→S→D→I→C→R). A fetch loop is a **convergence loop** — one pair re-invoked *until a signal stabilizes*. These are different compositions. The fetch loop is **runner-owned** (surfacing §3.7: "cross-invocation re-invocation is the runner's responsibility"), so its natural form is a **runner-owned CAPABILITY** (a callable "re-invoke-upstream-until-need-stabilizes" sub-routine), **not** a new composing-runner skill and **not** a new discipline.

5. **The "big refactor" fear largely DISSOLVES** once fetch_loop is seen as a small runner-capability rather than a skill/parameterized-engine. Canon explicitly warns against the engine reading (`MVLFamily` §3 / Reasoning: the parameterized-engine framing "risked being read as a directive to re-architect… work the user never asked for").

## Workspace (regions)

### R1 — The fetch-loop definition (the structure to generalize) [session context; the articulate_warm finding]
The just-concluded finding (`devdocs/inquiries/2026-07-08_21-50__articulate_warm_benefit_does_it_need_to_retrigger_surfacing/finding.md`) defines the loop: **re-anchor (warm MQ2) → if the anchor moved to a materially different territory, re-surface → re-anchor → until the context-need stabilizes (fixpoint) / round-cap-as-guarantee / oscillation guard / material-change judgment.** The three transferable parts: **(a) need-emit** (MQ2 context-need), **(b) re-invocable fetch** (surfacing §3.6 `refined-sub-purpose` + §3.7 runner-owned re-invocation), **(c) convergence** (need unchanged / verdict=no). `fixpt-S1` (in `devdocs/seeds/_seed.md`) already registered the generalization as NASCENT — this dive matures it.

### R2 — The endgoals (the benefit gate's scoring rubric) [docs/canon/project_north_star.md]
- **North Star:** *"A cognitive system that progressively builds its own consciousness layer… autonomous thinking through Baldwin cycles of self-directed spec evolution."* Human role **monotonically decreases**; the test is **capability, not phenomenology**.
- **★The composition philosophy (decisive):** the Wager names a three-tier compositional hierarchy — *"disciplines for the single operations, **loops for their composition**, traversal for the loops' composition."* A reusable convergence primitive IS a "loop for composition" — the architecture **endorses this tier in principle**.
- **Era-goal SUSTRALL** (the SUStained TRAversal Loop of Loops): worker-loop runners + a navigational session + an orchestrator holding traversal memory. **Autonomy** is the through-line; **traversal memory has zero instances today.**
- **Primary objective:** self-improvement rate. The relevant pull: does a fetch_loop capability let the system *notice-and-fix its own material gaps* (a self-regulation step)?

### R3 — The composition model + the extract-when-earned rule [docs/canon/MVLFamily_as_Buildup_Steps_Toward_Traverse.md]
- **Traverse = a linear build-up, each discipline ONCE.** "A worker loop runs a **fixed sequence** of thinking disciplines." The four ancestors are "**four snapshots of ONE loop under construction** — each… the loop with one more cognitive operation added." Pipelines are **strictly nested supersets**. → Traverse composes **linearly**, not cyclically. (Category evidence for R-signal #4.)
- **★The N=2 rule (verbatim):** the build-a-loop-one-op-at-a-time method "rests on a **single instance**… By the project's own standard (**'two instances justify a protocol; one is an observation'**), it is recorded here as an **observation/frontier**, not canonized." DEFERRED: "Elevate the… pattern into a reusable methodology entry. **Gate: revival trigger — when a second loop-family instance appears**."
- **★The anti-speculation rule:** the DEFERRED quick-mode: "**Until such a need is observed, building it would be speculative.**" And Reasoning: the parameterized-engine framing "risked being read as a directive to re-architect traverse into a parameterized engine — **work the user never asked for**… No such build is requested or implied."
- **Resist runner proliferation:** "maintain **exactly one** worker-loop runner — traverse. Future cognitive operations… **extend that one loop**; they do not spawn new affix-named runners." (A `fetch_loop` *skill* would be a new runner — cuts against this; a *capability* does not.)

### R4 — ★THE REUSE-SURFACE SURVEY (the empirical core) [discipline specs, in session context]

Scoring each candidate pair on the three parts — **(a)** need-emit · **(b)** re-invocable fetch wired · **(c)** convergence:

| Discipline-pair | (a) need-emit | (b) re-fetch wired | (c) convergence | Verdict |
|---|---|---|---|---|
| **articulate↔surfacing** (origin) | ✓ MQ2 context-need | ✓ surfacing §3.6/§3.7 | ✓ MQ2 verdict=no | **GENUINE + WIRED** (the 1 instance) |
| **sensemaking↔surfacing** | ✓ Accommodation trigger (destabilizing perspectives = "the model lacks the right anchors") | ✗ **LATENT** — currently re-extracts from *existing* material (Phase 2), not a re-surface of new material | ✓ model stabilizes (SV6) | **GENUINE STRUCTURE, re-fetch LATENT** — the strongest 2nd-site candidate; one wiring-change away |
| **traversal-memory recall** | ✓ (recall-need) *if built* | ✗ **UNBUILT** — zero instances exist (north star) | ✓ (recall stabilizes) *if built* | **GENUINE FUTURE candidate, UNBUILT** (cross-ref p25 memory-recall seeds) |
| **critique↔surfacing** (backstop) | ~ partial — the backstop ("what does the design miss?") can surface a gap | ✗ not wired — hands the gap to the finding/next iteration | ✗ one-shot, no loop | **PARTIAL (need-signal only)** |
| **decompose↔surfacing** | ~ weak — a piece could reveal an unsurfaced dependency | ✗ | ✗ (converges, but not via re-fetch) | **ABSENT as a fetch loop** |
| **innovate↔surfacing** | ✗ generates from what's given | ✗ | ✗ | **ABSENT** |
| **paradigm_sweeper / routelister** | ✗ one enumerating sweep | ✗ | ✗ | **ABSENT** |

**Tally:** GENUINE+WIRED = **1** · GENUINE-structure-but-latent = **1 strong (sensemaking)** + **1 unbuilt-future (memory)** · partial = 1 · absent = 4.
**Reading:** the abstraction is **REAL** (the three-part structure genuinely recurs at sensemaking — its Accommodation trigger is a bona-fide need-signal + convergence, missing only the re-surface wiring — and will at memory), so it is **NOT a false family**. But it is currently **N=1 instantiated**; the second genuine site is **latent, not built**.

### R5 — HFORM: skill vs pattern vs capability [survey + composition model]
- **SKILL (like traverse):** a standalone composing runner. **Rejected by the category mismatch** (R-signal #4): traverse composes disciplines *linearly, once each*; a fetch loop *re-invokes one pair until convergence*. Not the same shape.
- **PATTERN:** a documented shape each site re-implements. Weak — invites drift/duplication across sites.
- **★CAPABILITY (runner-owned):** a shared callable — *"re-invoke upstream discipline U from downstream discipline D until D's need-signal stabilizes, with a round-cap + oscillation guard"* — parameterized by (U, D, need-signal, material-change test). The articulate_warm loop is **already runner-owned** (§3.7), so this is the form the evidence points to: a small convergence primitive the runner calls at wired sites. **Not a discipline, not a runner-skill.**

### R6 — HVALID: is the generalization real? [survey]
**Real, but at N=1-wired.** The anti-false-family test passes (sensemaking has genuine (a)+(c), only (b) is unwired). So fetch_loop is a **legitimate abstraction** whose *second instance is one wiring-change away* — not a mirage, and not yet earned-by-instantiation.

### R7 — HCOST: the "big refactor" reframe [composition model]
The "big refactor" size comes from the **skill/engine** reading. As a **runner-owned capability**, the cost is small: define the convergence primitive once; wire it at the (currently 1, soon maybe 2) genuine sites. Canon warns the engine reading is unrequested over-build (`MVLFamily` Reasoning). So the honest cost is **small-when-scoped-as-a-capability, large-and-premature-when-scoped-as-a-skill/engine**.

### R8 — HENDGOAL: the benefit gate, both directions [north star + MVLFamily]
- **FOR:** the composition philosophy endorses "loops for composition"; a reusable convergence primitive advances **autonomy** (disciplines self-triggering a re-fetch when they detect insufficiency = the system noticing-and-fixing its own material gaps — a self-regulation increment toward the north star). Real endgoal payoff.
- **AGAINST (now):** the payoff is **future** — it lands when the 2nd site is *actually wired*. By the N=2 + anti-speculation rules, extracting at N=1 is **premature abstraction (YAGNI)**; the endgoal is *better* served by keeping it a seed and extracting when earned. Pre-building a capability with one caller risks a wrong abstraction (the 2nd site may reveal the interface should differ).
- **Net:** beneficial **in principle and in future**, premature **as a now-build**. The gate turns on timing, not on validity.

### R9 — HCAP: the capability-unlock (the load-bearing motive) [sensemaking spec]
Is there a real unmet need a fetch_loop would unlock? **Yes, latent:** sensemaking that destabilizes *because it lacks the right material* currently **cannot re-surface** — its Accommodation trigger only re-extracts from the (possibly-wrong) material already in view. A fetch_loop capability would unlock **"sensemaking re-surfaces when its model won't stabilize for lack of material."** That is a genuine capability gap — the strongest pro-motive — but it is **not yet pressing** (Accommodation works internally for now). Real unlock, latent demand → confirms *seed*, not *build*.

### R10 — PRIOR ART [MVLFamily + seeds]
- The **N=2 rule** + **anti-speculation** + **resist-runner-proliferation** + **don't-build-a-parameterized-engine-unprompted** are all standing canon — they converge on "keep it a seed until the 2nd site is real."
- `fixpt-S1` already IS the observation-form of this idea; this dive **matures its trigger** (from the vague "another discipline-pair examined" to the precise "the 2nd site — sensemaking's Accommodation made re-surface-capable, OR traversal-memory built with a recall loop — is actually wired").

### R11 — DISCONFIRMING evidence (surfaced hard, per the guard)
- **False-family risk → DEFEATED:** the survey shows genuine structure at sensemaking, so the generalization is real (this *supports* the user's instinct — anti-deflation).
- **Premature-abstraction risk → CONFIRMED:** N=1-wired + the project's explicit N=2 rule → extracting now is premature.
- **Category-error risk → CONFIRMED:** "a fetch_loop skill like traverse" mis-forms it (linear pipeline vs convergence loop; the natural form is a runner capability).
- **"Big refactor" → OVERSTATED:** small as a capability; only "big" if mis-scoped as a skill/engine (which canon warns against).

## Hypothesis map (for the pipeline; do NOT decide here)
- **RECOGNITION** ("it was a fetch loop all along, narrow scope") → **AFFIRMED** (R1; the three-part structure is real and was there).
- **HVALID** (generalization real?) → **REAL but N=1-wired** (R4/R6) — the anti-false-family test passes at sensemaking (latent).
- **HFORM** (skill/pattern/capability?) → **CAPABILITY, runner-owned** (R4/R5) — NOT a skill like traverse (category mismatch), NOT a discipline.
- **HCOST** (big refactor?) → **small as a capability; premature+large as a skill/engine** (R7).
- **HENDGOAL** (beneficial for endgoals?) → **YES in principle/future, PREMATURE now** (R8) — extract at N=2, per the project's own rule.
- **HCAP** (real capability-unlock?) → **REAL but LATENT** (R9) — sensemaking-can't-re-surface is the genuine gap; confirms seed-not-build.
- **THE LIKELY LANDING (for Sensemaking to stabilize, not decide here):** the user is RIGHT that it's a real fetch loop and a real generalization (don't deflate) — but the FORM (capability, not skill) and the TIMING (seed until the 2nd site is wired, per N=2) both correct the proposal; the "big refactor" dissolves. Guard both ways held.

## Thin artifact (relevance-tagged)
- **CRITICAL:** the survey (R4 — N=1-wired, real-not-false-family) · the N=2/anti-speculation rule (R3) · the category mismatch (R4/R5, traverse=linear vs fetch=loop) · the endgoal composition philosophy (R2, "loops for composition").
- **HIGH:** HFORM=capability-runner-owned (R5) · HENDGOAL=future-not-now (R8) · HCAP=latent-real (R9) · the fetch-loop three-part definition (R1).
- **MEDIUM:** the "big refactor" reframe (R7) · fixpt-S1 trigger-sharpening (R10) · the memory-recall future site (R4).
- **DISCONFIRMING (kept):** premature-abstraction CONFIRMED · category-error CONFIRMED · false-family DEFEATED (supports the user) · big-refactor OVERSTATED.

## Telemetry
- Territory swept: 7 discipline specs (survey) + 3 endgoal canon docs (north star, MVLFamily, kernel-bet) + the fetch-loop finding + the seed index. Convergence: reached (the survey saturated — no new genuine sites on a second pass; decompose/innovate/routelister confirmed absent).
- Verify-don't-assert honored: the traverse-composition (linear/nested) quoted from `MVLFamily` §1; the N=2 rule quoted verbatim; the endgoal composition philosophy quoted from north star; the survey scored against the actual specs (sensemaking Accommodation trigger, surfacing §3.6/§3.7), not asserted.
- Guard both ways: anti-deflation (the generalization is REAL — affirmed) + anti-caving (the form + timing corrected; premature-now).
- LAYER-1/2 surfacing modes checked: no over-collection (thin artifact is relevance-tagged), no false-territory (the survey is the actual specs), self-reference guarded (harness-on-harness; every load-bearing claim cites a spec/canon line). **Self-assessment: PROCEED** to Sensemaking (stabilize: real-but-N=1 · capability-not-skill · extract-at-N=2 · guard both ways).
