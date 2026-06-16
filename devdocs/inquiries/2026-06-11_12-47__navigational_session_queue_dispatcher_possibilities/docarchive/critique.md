# Structural Critique — navigational_session_queue_dispatcher_possibilities

## User Input

devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/_branch.md

**Inputs consumed:** surfacing.md (10 regions), sensemaking.md (SV6 + 6 collapses + the re-tests), decomposition.md (5 pieces), innovation.md (5 ACTIONABLE + assembly + 3 kills + 3 special-attention items).

---

## Phase 0 — Dimension Construction

| # | Dimension | Weight | Source |
|---|---|---|---|
| D1 | **Enumeration fidelity** — a real possibility map (not one asserted answer), with the user's three corrections as hard bounds | CRITICAL | the explicit ask + MQ4 |
| D2 | **Architectural soundness** — judgment placement, single-writer ownership, the two loops actually compose | CRITICAL | the design's load-bearing claims |
| D3 | **Honesty / open hinges** — placeholders flagged; hinges observable (valve-rate etc.); the user's confusion respected | HIGH | C5 + the project's discipline |
| D4 | **Faithfulness to priors** — revision-under-a-shared-rule, nothing silently dropped | HIGH | the Synthesis Trigger |
| D5 | **Decision-usability** — choose-when clauses; observable triggers; the user can SEE and ACT | MED-HIGH | the WHY motives |
| D6 | **Unification integrity** — the selections file absorbs (turn-record/ledger/queue) without losing what each did | MED-HIGH | special-attention (b) |

**Frame-premise test (fired on the three special-attention premises):**
- **Premise (a): D2/D3 are one continuum with the valve-rate as the dial.** What-if-wrong: trace the saturation mechanically. In D3, valve-surfaced entries go to the *Selector* (the admission session). If the valve saturates, per-dispatch judgment lands ON THE SELECTOR — one session doing admission AND dispatch judgment, which is **D4-flavored** (the merged single seat), NOT D2 (a *separate light dispatcher session*, a third seat). So the continuum is real but its **degradation target is mis-identified**: saturated-D3 → D4-ish (judgment re-merges into the Selector), and D2 remains a genuinely distinct fork you'd take only on a SECOND observable — *the Selector overloading on dispatch-judgment volume* (too many escalations for its cadence). Two observables, two moves: high valve-rate → improve annotations or accept Selector-handled escalations; Selector overload → spin up D2's separate dispatch session. Sharper and still graceful. Routed to the map (K1).
- **Premise (b): the turn-record unification is complete.** What-if-wrong: check what the turn-record held that route-entries don't. The four validity conditions ARE delivered for **route-choices** (field-before-choice architectural; admission = choice+rationale; status trail + pointer = outcome; goal referenced). But the Selector also makes **non-route decisions** — stop-admitting/goal-done, widen the goal, trigger a Navigator run, an L4 compare verdict — which are *turns without a route-entry*. Unification is **route-complete but not decision-complete**. Fix: the selections file carries a small **decision-log section** for non-route choices (same file, same single-writer, same audit trail) — the residual turn-record lives as a section, not a separate artifact. Routed to the artifact (K3).
- **Premise (c): SUSTRALL's goal ENTAILS the cadence-split.** What-if-wrong: the lone-traversal goal's FIRST committed stage is sustained *sequential* operation (N≥20 loops, N=1 width). At N=1, the split's dispatcher-half is idle machinery; what sustained-sequential entails is the **QUEUE** (durable, revisable selections + grooming — i.e., D4). The full split (D3) is entailed by the *later* committed stages (Mode B parallelism; the L3 automated carrier). So the entailment is **staged**: the goal entails the PATH (D4 now; D3 when its committed stages arrive), not D3-immediately. This is cleaner AND matches the growth-path resolution exactly. Routed to the path (K4).

## Phase 1 — Fitness Landscape

- **Viable region:** the map with corrections-as-bounds; the staged entailment; the two-observable degradation story; the route-complete unification + decision-log; single-writer; sparse Navigator; structural grooming.
- **Dead region:** one asserted design (no map); priority-forced queue; navigational re-collapse; valve-less code dispatch; "the goal entails D3 today"; a unification that silently drops non-route decisions.
- **Boundary region:** the continuum's degradation target (Selector vs a third seat); the decision-log's residence; the entailment's staging.
- **Unexplored (named):** the queue schema (gated); the compare design (deferred); v1 values (K, N, valve-rate, overload threshold — set by practice).

## Phase 2 + 3 — Adversarial Evaluation + Verdicts

**Burden:** a design-space map + a recommendation (reversible; meaning-level). Care on D1 (the map must stay a map) and D2 (the architecture must actually compose).

---

### The map (K1)

**Prosecution:** the continuum claim (frame-premise a) — saturated-D3 doesn't become D2; it lands judgment back on the Selector.

**Defense:** adopted — the map keeps the continuum (graceful degradation is real) but **names the degradation target correctly** (saturated-D3 → the Selector absorbs escalations, D4-flavored) and **restores D2 as a real fork** with its own observable (Selector overload on dispatch-judgment volume → spin up the separate light dispatch session). The choose-when clauses gain one line each. The map's enumeration shape (6 axes; D1–D5; D5 rejected) survives intact.

**Verdict: REFINE.** Two observables, two moves: valve-rate high → fix annotations / accept escalations; Selector overloaded → D2's third seat. The continuum stays; its endpoint is corrected.

### The design D3 (K2)

**Prosecution:** (a) the kanban board renders the FIELD as a backlog column — but the field is a different FILE (routelister-owned); folding it into the board blurs the ownership boundary the design depends on. (b) Does the needs-grooming inbox respect single-writer?

**Defense:** (a) adopted — one clarifying line: the backlog column is a **VIEW of `_route.md`**, not part of the selections file; the board is a visualization spanning two artifacts, the ownership boundary unmoved. (b) verified — the dispatcher only *appends* to its marked sections (pointers, failed, valve-surfaced) and flips status fields; the Selector remains the only author of admissions/removals/rationales. Holds.

**Verdict: REFINE.** The backlog-column-as-view note; ownership re-stated under the board.

### The selections file (K3)

**Prosecution:** the unification residue (frame-premise b) — non-route decisions (stop/widen/Navigator-trigger/compare verdicts) have no home; three artifacts were folded into one and something fell out.

**Defense:** adopted — the file gains a **decision-log section** (non-route choices, one line each: decision + rationale + what-it-rested-on), same single-writer, same audit trail. The unification claim is restated honestly: **route-complete by construction; decision-complete via the log section.** The triple (rationale / run-conditions / invalidate-if), the states, the archive note, and the GATED-on reuse all survive prosecution unchanged.

**Verdict: REFINE.** Add the decision-log section; restate the unification as route-complete + log-completed.

### The growth path (K4)

**Prosecution:** the entailment overclaim (frame-premise c) — sustained-SEQUENTIAL (the first committed stage) doesn't need the dispatcher; claiming "the goal entails D3" proves too much.

**Defense:** adopted — the entailment is **staged**: sustained-sequential entails the QUEUE (D4: durable revisable selections + grooming — without it, a 20-loop expedition's selections live in no artifact and rot unexamined); the committed LATER stages (Mode B parallelism; the automated carrier) entail the SPLIT (D3). So the path isn't convenience-sequencing — each stage is entailed by the goal-stage it serves. The hats insight and the observable triggers survive; one trigger is re-grounded (split the Dispatcher at the first *committed* parallel run, which Mode B schedules anyway).

**Verdict: REFINE.** The staged entailment (D4 ← sequential-sustained; D3 ← parallel/automated stages); the path's triggers re-grounded in the goal's own stages.

### Re-tests + naming (K5)

**Prosecution:** is "meta-loop = the dispatcher's loop" stable given the continuum correction (if dispatch-judgment can flow back to the Selector, is the dispatcher's loop still THE meta-loop)? 

**Defense:** yes — the *loop* (watch slots → fire runnable → record) keeps running as code regardless of where escalations go; the valve changes what the loop *skips*, not whether it runs. The recommendation stands; the veto framing stands; the seven re-test verdicts were checked against the refinements (none disturbed — the shared-rule continuity is unaffected by the degradation-target fix).

**Verdict: SURVIVE.**

### The assembly

**Prosecution:** post-refinement coherence — the corrected continuum + the decision-log + the staged entailment: consistent? Checked: the two-observable story slots into the map's choose-when; the decision-log lives inside the same single-writer file; the staged entailment IS the growth path restated; the board's view-note touches nothing else. Consistent — and each refinement made a claim more *checkable* (degradation target traceable; unification auditable; entailment staged against named goal-stages).

**Verdict: SURVIVE.** Consolidation note: all three of innovation's boldest moves survived in corrected form — the inquiry's pattern (claims narrowed to their defensible core) holds for its own synthesis.

## Phase 3.5 — Assembly Check

No new emergent candidate. Innovation's five emergents survive, three corrected (continuum → two-observable degradation; unification → route-complete + decision-log; entailment → staged). The failure triad, the hats insight, and turn-validity-by-construction stand.

## Phase 4 — Coverage + Convergence

**Accumulator:**
- Evaluation log: 5 candidates + assembly across D1–D6; all three special-attention items adjudicated (a → degradation-target corrected, D2 restored as a real fork with its own observable; b → decision-log section added, unification restated honestly; c → entailment staged against the goal's own stages).
- Kill record: none new; innovation's three stand (CI/CD metaphor; drop-invalidate-if; drop-Navigator).
- Refinement record: **the two-observable degradation story** (valve-rate → annotations/escalations; Selector-overload → D2's third seat) — the round's sharpest catch (saturated-D3 lands on the Selector, not D2); **the decision-log section** (non-route choices keep their audit home — the unification is route-complete, log-completed); **the staged entailment** (D4 ← sustained-sequential; D3 ← the committed parallel/automated stages); **the backlog-column-as-view note** (ownership boundary preserved under the kanban visual). All in-frame.
- Coverage map: viable fully adjudicated; boundary resolved (degradation target; the log's residence; the staging); dead empty; unexplored named (schema gated; compare deferred; v1 values by practice).
- Convergence trend: stable.
- Mechanism-independence: validated — the map rests on the axes + corrected continuum; the design on artifact-ownership + the triad; the artifact on the (restated) unification + guards; the path on the staged entailment + observables; three frame-premises cut against and each was absorbed by narrowing.

**Signal: TERMINATE — ranked survivors:**
1. **The growth path, refined** — D1 (today) → **D4 now** (the selections file; entailed by sustained-sequential) → **D3** at the goal's own committed stages (parallelism/carrier); D2 restored as a real third-seat fork on Selector-overload; the hats insight; observable triggers.
2. **The selections file, refined** — ONE artifact, five states, the entry-triple, **plus the decision-log section** (route-complete + log-completed unification); single-writer; archive; GATED-on reuse; PARKED ≠ LOST.
3. **The design D3, refined** — Navigator (recurring, sparse, isolated) · Selector (admission + structural grooming + the inbox) · Dispatcher (code + valve, the Runner absorbed); the two loops; the kanban board (backlog = a view of the field); the failure triad (stagnation / explosion / rot).
4. **The map, refined** — 6 axes; D1–D5 with choose-when; D5 rejected; the corrected continuum (two observables, two moves).
5. **Re-tests + naming** (SURVIVE) — seven verdicts under judgment-gates-a-session-applied-finer; meta-loop = the dispatcher's loop (recommendation; veto open).

## Convergence Telemetry

- Dimension coverage: 6/6; both critical dimensions per candidate
- Adversarial strength: **STRONG** — the continuum's degradation target was mechanically traced and corrected (saturated-D3 → the Selector, not D2; D2 restored as a fork with its own observable); the unification's non-route residue was caught and homed (the decision-log); the entailment was staged against the goal's actual stages rather than asserted whole
- Landscape stability: STABLE
- Clean SURVIVE exists: YES (re-tests + naming; the assembly)
- Failure modes: none firing — Rubber-Stamping (innovation's three boldest claims each corrected); Self-Reference Collapse (the system revising its own day-old architecture — guarded by mechanical tracing of the continuum, the checkable unification, and the goal-stage grounding); Nitpicking (each refinement guards a critical dimension); Axis Absence (the degradation-target error was caught at the architecture plane where it lived)

**Overall: PROCEED**

**Next step input (for ITERATION COMPLETE):** the user's ask is met — a real possibility map (6 axes; D1–D5 with choose-when clauses; D5 shown-rejected) under their three corrections as hard bounds, converging on a staged recommendation (D4 now — the selections file; D3 at the goal's committed parallel/automated stages; D2 a real fork on Selector-overload), with the queue pinned (one file, five states, the entry-triple + decision-log; not priority-ordered), the Navigator earned on operation-difference grounds, the two loops replacing the prior scheduler, all three user instincts vindicated, the priors revised under the shared rule, and every open hinge observable.
