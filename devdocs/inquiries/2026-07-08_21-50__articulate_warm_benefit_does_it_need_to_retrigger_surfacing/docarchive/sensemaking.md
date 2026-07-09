## User Input

devdocs/inquiries/2026-07-08_21-50__articulate_warm_benefit_does_it_need_to_retrigger_surfacing/_branch.md — (DESIGN dive, Sensemaking = stabilize the design model: the DECOUPLING spine, articulate_warm's real job (surfacing-loop controller), the mechanism-is-reuse finding, the termination-criterion gap, HA both-ways, the canon-doc §4-vs-§7 resolution; non-sycophancy both ways; self-reference honesty. Full spec in _branch / the instruction.)

---

# Sensemaking — stabilizing the design model

## SV1 — Baseline
articulate_warm looks like it just re-does the rephrasing, which is marginal because the LLM already holds the surfaced material; so maybe it should re-trigger surfacing to be worth having.

## Phase 1 — Cognitive anchors

**Constraints**
- Surfacing **draws from a *given* territory** (§1.1) and its workspace is **session-local — lost at session-end** (§5.2). New material must be handed in and fetched; it does not appear by re-articulating.
- Surfacing is **re-invocable with a `refined-sub-purpose`** (§3.6) and **the runner owns cross-invocation re-invocation** (§3.7). The re-surface mechanism is present.

**Key insights**
- ★ **THE DECOUPLING (the spine).** articulate_warm has two products with *different dependencies*: **re-Rephrase** rides on material already in context (→ marginal); **re-anchor (MQ2)** is valuable when the cold pass fetched the wrong territory — but then only wrong-territory material is in context, so re-anchoring *names* the right territory yet **can't use it → inert without a re-surface.**
- ★ **THE REAL JOB.** Because the load-bearing product (re-anchor) is inert without re-surface, articulate_warm's real structural job is to **control the surfacing loop** (re-anchor → re-surface → iterate to a fixpoint), with the better rephrasing as the **terminal byproduct** — not "produce a better rephrasing."

**Structural points**
- **MQ2 is the context-need/anchor setter**; both passes emit it; its **verdict sub-axis (yes/no/uncertain)** is the natural convergence signal.
- The **loop-termination criterion is the GAP** — surfacing §3.7 assigns cross-invocation looping to the runner but no spec defines *when to stop*.

**Foundational principle**
- Every step earns its place (parsimony / load-bearing-only) — the user's operative value; the reframe must give the warm pass real load, not defend it out of status-quo bias.

**Meaning-node**
- **articulate_warm = a fixpoint iteration on the context-need** (re-anchor until MQ2 stabilizes), not a second rephrasing.

## SV2 — Anchor-informed
articulate_warm is not a re-phraser that happens to run warm; it is the **controller of a re-anchor→re-surface loop**. The rephrasing the user doubted is the loop's *terminal output*, emitted once the anchor stops moving — and the re-surface the user proposed is exactly what makes the loop's load-bearing half (re-anchor) actionable.

*(Meta-inspection H4/H5: concept name "surfacing-loop controller" is loop-coined — tested at Phase 3(b); motivating example is the design itself + the live self-reference datum, not a narrow sample.)*

## Phase 2 — Perspective checking

- **Technical/Logical:** the re-surface mechanism EXISTS (§3.6 refined-sub-purpose; §3.7 runner-owned) — "re-trigger surfacing" is reuse; the only missing piece is the termination criterion. Incremental re-surface is spec'd (§3.6 Trace-as-exclusion-filter).
- **Human/User:** the user's parsimony instinct is correct — a pure warm re-rephrase is thin. The reframe *answers* their doubt by relocating the value to loop-control, which they intuited ("unless it can re-trigger surfacing").
- **Risk/Failure:** an iterating loop risks non-termination / oscillation (anchor A→B→A). Guard: terminate on MQ2 verdict=no / context-need unchanged; **round cap** backstop; typical 0–1 re-surfaces (no drift → verdict=no immediately). Hand the oscillation case to Critique.
- **Definitional / internal-consistency:** the canon doc **contradicts itself** — §4/intro calls re-surface "[c] optional"; §7 calls the staged form "the general case." A definition in tension with itself has an internal gap; don't protect it. The press *resolves* the gap (toward §7).
- **Phase / Calibration-State (required — phase-dependent rule):** both the commit-value (HA) and the re-anchor need scale with **autonomy / session-fragmentation** (§5.2 workspace lost at session-end). In a warm expert-operated session the warm pass is least needed; cold/autonomous is where it bites. The rule is phase-dependent — the default should still install re-surface-as-core because the harness is trending toward autonomy.
- **★ Self-reference (H8 / failure-mode #6) — external grounding required:** this dive uses the harness to judge the harness. Grounding is external, not circular: (i) the **spec text** (§3.6/§3.7/§5.2, MQ2 verdict axis) — checkable facts, not framework-agreement; (ii) the **live datum** — this dive ran `articulate_simple` *cold* on the bare question while the operator held *warm* design-context; the bundle's own Edge-1 note flagged the warm substrate as "a datum," and the warm context did the re-anchoring the cold pass structurally could not. Direct evidence for the re-anchor value and its autonomy-scaling.

## SV3 — Multi-perspective
The reframe (loop-controller) survives all perspectives and is *strengthened* by the technical one (mechanism exists). Two real complications surface: an over-eager-loop risk (bounded by MQ2-stabilization + cap) and a phase-dependence (value autonomy-scaled). One internal contradiction in the canon doc (§4 vs §7) is exposed and is resolvable, not fatal. Self-reference is handled with external spec-grounding + a live datum.

## Phase 3 — Ambiguity collapse

### (a) Are the two products really separable? [THE DECOUPLING]
**Counter:** re-Rephrase is secretly load-bearing too — it produces the concrete seed-questions downstream consumes, so it's not marginal.
**Why it fails (structural):** the seed-question value rides on material **already in context** (§5.2 workspace in-session) — the cold rephrase + the surfaced material already yield it implicitly; the warm *re*-rephrase adds only an explicit pin (weak-in-session per (d)). Re-anchor, by contrast, needs **new** material (a different territory) that is *not* in context and cannot be re-phrased into existence — a categorically different dependency. Two different dependency structures = separable.
**Confidence:** HIGH. **Resolution:** separable; re-rephrase = rides-on-present-material (marginal), re-anchor = needs-new-material (requires re-surface). **Fixes:** the spine. **Excludes:** "the two products stand or fall together."

### (b) Is articulate_warm's job "re-phrase" or "control the surfacing loop"?
**Counter:** it's primarily a re-phraser — that's what the canon doc §4 foregrounds.
**Why it fails (structural):** §4's re-phrase is the *marginal* half (a); the half that carries the value (re-anchor) is only actionable through re-surface, so the value-bearing job is loop-control. This rests on the decoupling (structural), not on precedent. Citing §4 is precedent, not evidence — and §4 contradicts §7 anyway.
**Confidence:** HIGH. **Resolution:** loop-controller; rephrase is the terminal byproduct. **Fixes:** the real-job. **Excludes:** "warm pass = second rephrasing."

### (c) Is re-surface new machinery or reuse?
**Counter:** re-triggering surfacing needs new orchestration between articulate_warm and surfacing.
**Why it fails (structural):** surfacing §3.6 already defines re-invocation with `refined-sub-purpose`; §3.7 already assigns cross-invocation re-invocation to the runner; both passes already emit MQ2. The warm-MQ2→runner→surfacing path is the cold path reused. The *only* absent element is the loop-**termination** criterion.
**Confidence:** HIGH (direct spec text). **Resolution:** reuse + one new criterion. **Fixes:** mechanism-exists. **Excludes:** "this requires building a new surfacing-trigger."

### (d) Is the pure-rephrase commit worthless or weak-but-real?
**Counter:** worthless — the LLM already holds the material, so an explicit warm re-articulation adds nothing.
**Why it fails (structural):** §5.2 — the workspace is **session-local and lost at session-end**; cross-session / autonomous consumers get only the thin artifact (no item content). The explicit committed re-articulation is then the **only durable carrier** of the warm frame. So the commit is weak *within one warm session* (user's premise has real force) but real *across sessions / under autonomy*.
**Confidence:** HIGH. **Resolution:** weak-but-real, autonomy-scaled — not zero. **Fixes:** HA. **Excludes:** "cut the warm commit as pure redundancy."

### (e) Sizing the user's proposal [non-sycophancy both ways]
**Counter (caving direction):** the user said "not much help" — maybe just cut the warm pass if it isn't re-triggering surfacing.
**Why it fails (structural):** the re-anchor→re-surface loop *is* the warm pass's value and it is real (a,b,c); and even without re-surface the commit is weak-but-real (d). Cutting it drops a load-bearing function. **Counter (deflating direction):** "promote to core" overstates — maybe keep it optional. **Why that fails:** the decoupling shows re-surface is what makes the load-bearing half actionable, and the doc's own §7 already calls staged "the general case."
**Confidence:** HIGH. **Resolution:** RE-SIZE — promote re-surface to **core** (YES); "useless without re-surface" (NO, overshoots). The deliverable = reframe articulate_warm as a surfacing-loop controller + specify the termination criterion + resolve the doc's §4↔§7. **Excludes:** both "cut it" and "leave re-surface optional."

## SV4 — Clarified
articulate_warm is a **surfacing-loop controller**: re-anchor (warm MQ2) → if the anchor moved, re-surface (runner re-invokes surfacing with the refined context-need) → re-anchor → until MQ2 stabilizes → emit the terminal re-articulation. Re-surface is **core** (it makes the load-bearing re-anchor actionable) and is **reuse** of surfacing's existing re-invocation contract. The **only new spec content** is the loop-termination criterion (MQ2 stabilizes / verdict=no + round cap). The commit-value of the terminal rephrase is weak-in-session but real-under-autonomy.

## Phase 4 — Degrees-of-freedom reduction

- **Fixed:** the decoupling (a); articulate_warm = loop-controller (b); re-surface = reuse + reuse rides on §3.6/§3.7 (c); commit-value weak-but-real/autonomy-scaled (d); both-ways sizing (e); termination = MQ2-stabilizes + cap.
- **Eliminated:** "cut the warm pass"; "re-surface is new machinery"; "warm pass = pure re-phraser"; "re-surface stays optional"; "commit is worthless."
- **Viable path:** promote re-surface from optional-[c] to core; reframe the discipline as a fixpoint iteration on the context-need; specify the termination criterion; resolve the canon doc §4↔§7 toward §7.

## SV5 — Constrained
The solution space is now a single coherent design: **articulate_warm = fixpoint iteration on the context-need, riding on surfacing's existing re-invocation mechanism, terminated by MQ2-stabilization.** Open sub-questions handed forward: the exact termination rule + round cap + oscillation guard (Innovation to specify; Critique to prosecute the over-eager-loop risk and the "is re-anchor really inert without re-surface" claim).

## Phase 5 — Conceptual stabilization

**No accommodation trigger.** The model settled without repeated patching; each perspective either confirmed the spine or added a bounded complication (loop-risk, autonomy-scaling, doc-contradiction) that the model absorbed cleanly. Crucially the settling rests on **checkable spec text** (§3.6/§3.7/§5.2, MQ2 verdict axis) and a **live external datum** (this dive's cold-articulate + warm-operator), not on the elegance of the reframe — clearing the Clean-Resolution-Trap and Self-Reference-Blindness bars.

### SV6 — Stabilized model

> **articulate_warm is a fixpoint iteration on the task's context-need, not a second rephrasing.** Its load-bearing product is **re-anchoring** (warm MQ2 re-deriving what the task bears on, now that context is in view); re-anchoring is **inert without a re-surface**, because surfacing draws from a *given* territory and the wrong-territory material is what's in context. So the warm pass's real job is to **drive the re-anchor→re-surface loop to a fixpoint**: warm MQ2 → if the context-need changed, the runner re-invokes surfacing with the refined context-need (an **existing** capability — surfacing §3.6/§3.7) → re-anchor again → **terminate when MQ2's context-need stabilizes (verdict=no / unchanged), with a round cap** as backstop (typically 0–1 re-surfaces). The **better rephrasing is the terminal byproduct**, emitted once the anchor stops moving; its standalone value is **weak within one warm session but real across sessions / under autonomy** (the workspace is session-local, §5.2). **The user is right to promote re-surface from optional to core** — their insight, the decoupling spine, and the canon doc's own §7 ("the staged form is the general case") all agree — **but "articulate_warm is useless without re-surface" overshoots**: the explicit commit is weak-but-real, autonomy-scaled. **The only genuinely new spec content is the loop-termination criterion**; the re-surface mechanism itself is reuse.

**Delta from SV1:** SV1 saw a marginal re-rephraser that "maybe should" re-trigger surfacing. SV6 sees a **surfacing-loop controller** whose re-anchoring is the load-bearing half, for which re-surface is **necessary (core, not optional)** and **already-mechanised**, terminated by an existing MQ2 signal — with the rephrase demoted to byproduct and the user's proposal re-sized (right to promote; wrong to call the warm pass useless). Next: Decomposition.
