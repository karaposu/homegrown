## User Input

devdocs/inquiries/2026-07-08_21-50__articulate_warm_benefit_does_it_need_to_retrigger_surfacing/_branch.md — (DESIGN dive, Innovation = design the concrete fixpoint loop + termination criterion + doc edits from SV6; the assembly emergent (fixpoint bootstrap); the HA sizing; anti-sycophancy both ways; required inversion. Full spec in the instruction.)

---

# Innovation — the fixpoint-loop design

**Methodology mode:** Standard-default. Generators: **Combination** (the two settled halves → a fixpoint loop), **Absence-recognition** (the missing termination criterion). Framers: **Inversion** (add-a-loop → reframe+minimal-add), **Lens-shift** (the loop's front as a fixpoint, not a line).

---

## (1) ★ THE LOOP SHAPE + TERMINATION CRITERION [P4 — the genuine new content]

### The fixpoint loop
```
  TASK STATEMENT
        │
        ▼
  articulate_cold ──emits MQ2 (context-need)──▶ surfacing-1
        │                                            │
        │                          surfaced material │
        ▼                                            ▼
  ┌───────────────────────  THE FIXPOINT  ───────────────────────┐
  │   articulate_warm: re-run MQ2 (re-anchor) on surfaced material │
  │                        │                                       │
  │        warm MQ2's context-need vs the prior round:             │
  │                        │                                       │
  │      ┌── CHANGED materially ──┐        ┌── UNCHANGED / verdict=no ──┐
  │      ▼                         │        ▼                            │
  │  runner re-invokes surfacing   │    FIXPOINT REACHED                 │
  │  with refined-sub-purpose      │    (the anchor stopped moving)      │
  │  (= the new context-need;      │        │                            │
  │   incremental — fetch just     │        ▼                            │
  │   the newly-relevant)          │    emit terminal re-articulation    │
  │      │                         │    (re-anchored frame + Rephrase)   │
  │      └──▶ back to articulate_warm         │                          │
  │          (subject to round cap)           │                          │
  └───────────────────────────────────────────┼──────────────────────────┘
                                               ▼
                                        downstream disciplines
```

### Termination (the fixpoint rule)
Stop when **warm MQ2's context-need is unchanged from the prior round, OR its verdict = no** (no further context needed). This is not a new field — MQ2 already carries a **verdict sub-axis (yes/no/uncertain)** (articulate_simple Mode 5). The loop is a fixpoint iteration on the context-need: iterate until the thing that drives surfacing stops changing.

### Backstops
- **Round cap:** default **2 re-surfaces max** (⇒ ≤3 `articulate_warm` runs). Tunable; the cap is a safety bound, not the expected path.
- **Oscillation guard:** if the context-need alternates (A→B→A), **stop and FLAG** rather than loop — hand the unstable frame to the downstream disciplines with the oscillation noted, don't spin.
- **Expected path:** **0 re-surfaces** (cold MQ2 was right → warm MQ2 verdict=no immediately) or **1** (anchor moved once → one re-surface → stable). The cap is rarely reached.

### Cost
Each re-surface is **incremental** — surfacing §3.6's Trace-as-exclusion-filter fetches only what the new sub-purpose newly makes relevant and skips the already-surfaced. So a round is cheap, and the loop is short *by construction* (it terminates on a signal that, in practice, stabilizes in 0–1 steps).

### ★ REUSE vs NEW (kept honest — the change is small)
- **Reuse (already in the specs):** surfacing's re-invocation with `refined-sub-purpose` (§3.6); the runner owning cross-invocation re-invocation (§3.7); MQ2's verdict axis as the stop-signal (articulate_simple Mode 5); both passes emitting MQ2.
- **NEW (all of it):** (i) the **runner rule** "if warm MQ2's context-need moved, re-invoke surfacing with it"; (ii) the **termination criterion** (fixpoint + round cap + oscillation guard). That is the entire new content. No new discipline, no new surfacing capability.

*Generators: Combination (two settled halves → the loop) + Absence-recognition (the missing termination). Grounded in surfacing §3.6/§3.7 + MQ2 verdict axis.*

## (2) ★ THE ASSEMBLY EMERGENT — the loop's front is a fixpoint bootstrap

Composing the pieces upgrades the picture of the loop's front. The prior ordering-problem finding framed it as a **linear two-phase bootstrap** (cold-aim → fetch → warm-frame). With re-surface as core, it becomes a **bootstrap that iterates to a fixpoint on the context-need**:

> **cold-aim → fetch → warm-frame → (re-fetch if the anchor moved) → … → stable frame.**

The warm-frame step can re-drive the fetch, so the front isn't a line — it's a **fixpoint iteration** that terminates when the context-need stops changing. articulate_warm is the loop's controller; surfacing is the fetch it drives; MQ2 is the convergence signal.

**★ Anti-inflation flag (explicit):** this is an elegant reframe and rests on the **same** evidence as the design (no new claim). It is a **lens on the loop's front**, and a design-hypothesis pending the build — it does not change what ships (the runner rule + termination criterion). It **extends** the prior finding's two-phase-bootstrap lens (line → fixpoint); it does not replace or re-derive it. Held at that size.

## (3) THE HA SIZING [P5 — honest both-ways; the anti-caving anchor]

The terminal rephrase's **standalone** commit-value (the part that does *not* need a re-surface):
- **Weak in one warm session** — the LLM already holds the surfaced material in the session-local workspace (surfacing §5.2), so writing down a "better rephrasing" adds only an explicit pin. The user's premise has real force here.
- **Real across sessions / under autonomy** — the workspace is **lost at session-end** (§5.2); cross-session and autonomous consumers get only the thin artifact (no item content). Then the explicit committed re-articulation is the **only durable carrier** of the warm frame.

**Therefore, both:** promote re-surface to **core** (it is the load-bearing half — it makes re-anchoring actionable) **AND** keep the terminal commit (weak-but-real, autonomy-scaled). **Reject "articulate_warm is useless without re-surface" as overshoot** — it has a real, if smaller, standalone value. This is the anti-caving line: the user's *core insight* (promote re-surface) is right and kept; their *strong claim* (useless otherwise) is resized down, not rubber-stamped.

**Self-reference datum (kept visible):** *this dive* ran `articulate_cold` on the bare question while the operator held warm design-context; the cold bundle's own Edge-1 note flagged the warm substrate as "a datum," and that warm context did the re-anchoring the cold pass structurally could not. Live evidence that the warm re-anchor is real — the promote-to-core rests on this fact, not on agreeing with the user.

## (4) THE CANON-DOC EDITS [P6 — concrete; application USER-GATED]

Recommended edits to `docs/how_articulate_via_context_should_be.md` (**do NOT apply here** — recommend; user-gated; naming pending articulate_cold/warm):

- **(a) Reframe §4** ("What the second pass re-runs"): keep MQ2 + Rephrase, but state the warm pass's **job** as *controlling the surfacing loop* — "the warm pass re-runs MQ2 (re-anchor); **when the re-anchor materially changes the context-need, the runner re-invokes surfacing with it**, and the warm pass runs again on the new material; the Rephrase is the **terminal byproduct** emitted once the anchor stabilizes."
- **(b) Resolve the §4↔§7 contradiction:** §4/intro currently lists re-surface as **"[c] optional staged re-surface"**; §7 calls the staged form **"the general case."** Resolve toward §7 — **re-surface is CORE**, not optional. Update the §4 intro list and the §7 wording to agree (re-surface is the mechanism that makes the load-bearing re-anchor actionable; the single-pass form is the *special case* where the cold anchor was already right).
- **(c) ADD a new section — "Termination / convergence":** the fixpoint rule (stop when warm MQ2's context-need is unchanged / verdict=no) + round cap (default 2 re-surfaces, tunable) + oscillation guard (alternating context-need → stop and flag) + the typical 0–1 re-surface expectation + the incremental-re-surface cost note. Cross-reference surfacing §3.6/§3.7 as the reused mechanism.
- **(d) §7 "ceiling":** keep the "first surfacing must reach broadly" point (it lowers how often a re-surface is needed) but reframe it as *reducing loop length*, not as the only safeguard — the re-surface loop is now the general safeguard.
- **(e) HA sizing note:** in §5/§8, keep the terminal commit's honest sizing (weak-in-session, real-under-autonomy) so the doc doesn't oversell the standalone rephrase.

## Mechanism ledger + required checks

**Mechanism ledger:** Combination (two settled halves → the fixpoint loop) · Absence-recognition (the missing termination criterion; the missing runner re-surface rule) · Lens-shift (the loop's front as a fixpoint, not a line) · Inversion (below) · Domain-transfer (fixpoint-iteration / convergence-to-a-stable-signal, a standard control pattern, applied to the context-need).

**★ Required INVERSION at the intervention-shape axis.** The design reads as **ADD-A-LOOP / promote re-surface to core** (sounds like new machinery + a status upgrade). **Invert to REFRAME + MINIMAL-ADD:** the re-surface mechanism **already exists** (surfacing §3.6/§3.7 — reuse); the convergence signal **already exists** (MQ2 verdict); so the change is **mostly recognition** (naming what the warm pass already structurally is — a loop controller) **plus one minimal add** (the termination criterion + the runner's "if MQ2 moved, re-surface" rule). **What follows if REFRAME+MINIMAL-ADD:** the doc edits are the main deliverable (recognition), not a build; risk is low; nothing new to author in the surfacing spec. **What follows if BIG-ADD:** would need new surfacing capability + orchestration — but the spec evidence refutes that. **Verdict: mostly REFRAME + minimal ADD** (anti-inflation — keeps the change honest and small).

**★ ASSEMBLY CHECK:** fired — item (2), the fixpoint-bootstrap reframe. The emergent whole (a front that iterates to a fixpoint) is more than the parts (a decoupling fact + a reuse fact + a termination rule): together they show the loop's front was *always* a latent fixpoint, currently truncated to one pass. Extends the prior finding's two-phase-bootstrap lens; flagged as a same-evidence design-hypothesis, not inflated.

**INHERITED FRAME AUDIT:** (a) "promote re-surface to core" — challenged? YES, twice: by the **inversion** (it's mostly reframe, not a big add) and by the **HA sizing** (the commit-value keeps a non-re-surface benefit, so re-surface is the *load-bearing* value but not the *only* value). (b) "the warm pass earns its place" — challenged by **weak-in-session** (its standalone value is thin warm; it earns its place via the loop-control + the autonomy-scaled commit, not via the in-session rephrase). Neither is un-challenged. (c) anti-sycophancy — the user's promote-to-core is kept (not deflated) *and* their "useless" is resized (not caved to); the self-reference datum grounds it in a fact.

**Telemetry:** 4 deliverables (the loop+termination · the assembly emergent · the HA sizing · the doc edits); generators 2/2 used, framers 3/3 (inversion + lens-shift + constraint via the round-cap/oscillation bounds); the required inversion ran and resolved to reframe+minimal-add; the assembly check fired. Failure modes checked: premature-evaluation (gate is Critique); early-frame-lock (the add-a-loop default was challenged by the inversion); innovation-without-grounding (every element cites surfacing §3.6/§3.7/§5.2 + MQ2 verdict); survival-bias (the elegant fixpoint emergent held at size; the commit-value not deflated to zero, the user's strong claim not rubber-stamped). **Overall: PROCEED** to Critique — prosecute: is re-anchor really inert without re-surface? is the mechanism really reuse? does the fixpoint actually terminate (oscillation)? is promote-to-core right vs conditional? anti-sycophancy both ways; self-reference; backstop.
