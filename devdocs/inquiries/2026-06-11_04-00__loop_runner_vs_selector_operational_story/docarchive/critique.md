# Structural Critique — loop_runner_vs_selector_operational_story

## User Input

devdocs/inquiries/2026-06-11_04-00__loop_runner_vs_selector_operational_story/_branch.md

**Inputs consumed:** surfacing.md (10 regions), sensemaking.md (SV6 + 6 collapses + 5 Synthesis re-tests), decomposition.md (5 pieces), innovation.md (5 ACTIONABLE + assembly + 3 kills + 3 special-attention items).

---

## Phase 0 — Dimension Construction

| # | Dimension | Weight | Source |
|---|---|---|---|
| D1 | **Visualizability** — can the user READ it and SEE the operation? (the explicit deliverable) | CRITICAL | the user's "a story I can visualize" |
| D2 | **Non-semantic-Runner integrity** — the Runner never reads/judges; decision-authority stays single | CRITICAL | the stated boundary + blind-by-necessity |
| D3 | **Decision-procedure soundness** — the scheduler actually answers "what to run next" and doesn't stall/starve/explode | CRITICAL | the user's core open question |
| D4 | **Faithfulness to priors** — re-confirms (not silently overwrites) the Turn Architecture + Expedition findings | HIGH | the Synthesis Trigger |
| D5 | **Honest open-parts** — RANK v1, dedup, compare-phase, naming all flagged not faked | HIGH | the project's discipline |
| D6 | **Story-not-taxonomy** — a narrative arc, not just a component table | MED-HIGH | the deliverable shape |

**Frame-premise test (fired on three premises):**
- **Premise (special-attention a): the Runner is "blind by necessity" — reading results would make it a second decider.** What-if-wrong: a Runner could *read* results without *deciding* (e.g., copy a finding's summary into the completion record) and stay non-deciding — so blindness isn't strictly necessary, only judgment-abstention is. Resolution: the precise necessity is **the Runner must not JUDGE**, not that it must not TOUCH. But "don't read" is the clean, enforceable proxy that guarantees "don't judge" — the moment the Runner reads content, the temptation/possibility to branch on it appears, and authority blurs. So the honest claim is: *the Runner must not judge; "doesn't read results" is the bright-line rule that enforces it* (reading is permitted only to the extent of detecting completion, never content). Sharpened — blind-by-necessity → judgment-free-by-necessity, with no-read as the enforcing bright line. Routed to the cast (K1).
- **Premise (special-attention b): RANK v1 (Priority→Confidence→FIFO) is sufficient.** What-if-wrong: strict priority **starves** low-Priority routes that are nonetheless necessary (a low-Priority unblocking route that gates many others never runs because higher-Priority routes keep arriving). Resolution: real risk. v1 needs one guard: **aging / starvation-avoidance** — a route's effective priority rises the longer it waits, OR unblocking-routes (those that release GATED siblings) get a structural bump. This is a known scheduler fix (priority aging). So RANK v1 = Priority→Confidence→FIFO **+ a starvation guard (aging or an unblock-bump)**; without it, "dumb" becomes "starving." Routed to the scheduler (K2).
- **Premise (special-attention c): the worked numeric example is honest.** What-if-wrong: clean numbers (route Priorities 5/4/3…) hide that real routes don't arrive with crisp comparable priorities, masking the RANK openness. Resolution: keep the worked example (it's the biggest visualizability win) BUT annotate it as *illustrative* — "real Priorities are routelister's attributive HIGH/MED/LOW, coarser than these integers; the example uses numbers for legibility, and the RANK rule is v1." This keeps the example's clarity without letting it over-claim precision. Routed to the story (K5).

## Phase 1 — Fitness Landscape

- **Viable region:** judgment-free Runner enforced by no-read; the OS-scheduler/ATC model; RANK v1 with a starvation guard; dedup=individuation; the three filled gaps; an illustrative (flagged) worked example; 4 naming options.
- **Dead region:** a Runner that branches on content; pure strict-priority (starves); a worked example claiming precise priorities; unilateral "meta-loop" re-pointing; dropping the N-cap (explosion).
- **Boundary region:** read-to-detect-vs-read-content (the bright line); RANK-dumb-but-not-starving; the example's illustrative status.
- **Unexplored (named):** the compare-phase design (deferred); the real RANK formula (learned from runs); the dedup intent-signature's exact form.

## Phase 2 + 3 — Adversarial Evaluation + Verdicts

**Burden:** an architecture + a story (a design proposal, reversible); the bar is *soundness + visualizability + honesty*, not proof. Care on D2/D3 (the boundary and the procedure).

---

### The cast (K1)

**Prosecution:** the blind-by-necessity over-claim (frame-premise a) — a read-only-non-judging Runner is conceivable, so "blind" is stronger than needed.

**Defense:** adopted — the necessity is **judgment-freedom**; **no-read is the bright-line rule that enforces it** (the Runner may read only enough to detect completion — an exit code, a sentinel file — never the artifacts' content). This is actually *stronger* for the user's purpose: a bright line ("never open finding.md / `_route.md`") is enforceable where "don't judge" is a slippery intention. The completion-record-fills-the-outcome-slot link (one ledger from two ends) stands and grounds it in the Turn Architecture finding.

**Verdict: REFINE.** Judgment-free-by-necessity, with no-read-of-content as the enforcing bright line (read only to *detect* completion).

### The scheduler (K2)

**Prosecution:** RANK v1 starves low-Priority-but-necessary routes (frame-premise b); and does STOP-CHECK correctly distinguish "done" from "idle-but-running"?

**Defense:** (a) adopted — RANK v1 = Priority→Confidence→FIFO **+ a starvation guard**: either priority *aging* (waiting raises effective priority) or a structural *bump* for unblocking routes (a route that releases GATED siblings is worth more than its face Priority). Without the guard, dumb→starving; with it, dumb-but-fair. (b) the empty-but-running gap (already filled in K3) handles STOP-CHECK: halt only when nothing is dispatchable AND nothing is in flight; otherwise wait for the next completion. The OS-scheduler/ATC framing survives intact.

**Verdict: REFINE.** RANK v1 gains a starvation guard (aging or unblock-bump); STOP-CHECK halts only on idle-AND-empty.

### Parallel + async (K3)

**Prosecution:** dedup=individuation — is routelister's individuation actually available to the Selector at dispatch (it's a routelister-internal judgment)? And is "launched-routes of in-flight loops" a reliable dedup key?

**Defense:** the Selector knows exactly which route each in-flight loop was launched on (it dispatched them), so the dedup key (the launched route-identity) is reliable; matching a candidate against that set is the same same-concept-or-different judgment routelister makes — the Selector applies it, reusing the discipline's individuation criteria. The three filled gaps (failure/cold-start/empty-but-running) are real and correct. Compare stays deferred.

**Verdict: SURVIVE.** Dedup reuses individuation against the known launched-set; the filled gaps hold.

### Re-tests + naming (K4)

**Prosecution:** four naming options for "meta-loop" — is offering four (vs a recommendation) helpful or just punting?

**Defense:** the four are genuinely distinct (re-point→Runner / keep=cycle / retire / =Selector's-own-cycle), and the finding RECOMMENDS one (keep "meta-loop"=cycle, call the executor "the Runner") while leaving the veto open — that's guidance + respect for the user's seat, not punting. The 4th option (7F: "meta-loop" = the Selector's scheduling cycle) is apt enough to genuinely widen the choice. The re-tests hold on merits.

**Verdict: SURVIVE.** Four distinct options with a recommendation; the veto is the user's, per the prior finding.

### The story + diagram (K5)

**Prosecution:** the worked example's clean numbers hide the RANK openness (frame-premise c); and does the story have an arc or is it a snapshot?

**Defense:** (a) adopted — the worked example is annotated *illustrative* (real Priorities are routelister's coarse HIGH/MED/LOW; integers are for legibility; RANK is v1-with-starvation-guard). It keeps its visualizability win without over-claiming. (b) the arc is present: cold-start → steady-state wake-cycles (the worked example) → the two failure poles (stagnation/explosion) → the autonomy-climb closer (Runner fixed, Selector graduates). That's a beginning/middle/end, not a snapshot.

**Verdict: REFINE.** Annotate the worked example as illustrative (coarse real priorities; v1 RANK); keep the arc.

### The assembly

**Prosecution:** post-refinement coherence — judgment-free-bright-line + starvation-guarded-RANK + illustrative-example: consistent and still visualizable? Checked: the bright line (never open the artifacts) is a single vivid rule; the starvation guard is one added sentence to RANK; the illustrative annotation is one parenthetical. None harms visualizability; all three increase honesty. Consistent.

**Verdict: SURVIVE.** Consolidation note: every refinement tightened a boundary the story rests on (judgment-free bright line; non-starving RANK; illustrative example) without dimming the picture — the story stays visualizable AND becomes operationally honest.

## Phase 3.5 — Assembly Check

No new emergent candidate. Innovation's five emergents survive, three refined (blind→judgment-free-bright-line; dumb-RANK→starvation-guarded; worked-example→illustrative-flagged); the two failure poles and the completion-fills-outcome-slot stand.

## Phase 4 — Coverage + Convergence

**Accumulator:**
- Evaluation log: 5 candidates + the assembly across D1–D6; all three special-attention items adjudicated (blind→judgment-free-bright-line; RANK→+starvation-guard; worked-example→illustrative).
- Kill record: none new; innovation's three stand (4th metaphor; drop-N-cap→explosion; clever-RANK-v1).
- Refinement record: **the Runner is judgment-free-by-necessity, enforced by a no-read-of-content bright line** (read only to detect completion) — the round's key sharpening (it makes the boundary enforceable, not aspirational); **RANK v1 gains a starvation guard** (aging or unblock-bump — without it, dumb starves); **STOP-CHECK halts only on idle-AND-empty**; **the worked example is flagged illustrative** (coarse real priorities; v1 RANK). All in-frame.
- Coverage map: viable fully adjudicated; boundary resolved (bright line; non-starving RANK; illustrative example); dead empty; unexplored named (compare design; real RANK formula; dedup signature).
- Convergence trend: stable.
- Mechanism-independence: validated — the cast rests on the judgment-free argument + the prior finding; the scheduler on the OS-pattern + the starvation fix; the parallel on individuation-reuse; the story on the worked example + the arc; the read-only-Runner and starvation adversaries cut against and were absorbed.

**Signal: TERMINATE — ranked survivors:**
1. **The story + diagram, refined** (the deliverable) — cast-list + the traced wake-cycle with an *illustrative* worked example (N=3) + why-not-a-for-loop + the two failure poles + the autonomy closer + a one-screen ATC/Beyblade diagram.
2. **The cast, refined** — Runner = judgment-free code (no-read bright line; the Beyblade-firer / the Selector's syscall) · Loop = the MVL work · Selector = the reasoning session; completion-record (5-field pointer) fills the turn's outcome-slot.
3. **The scheduler, refined** — WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP (OS-scheduler/ATC); RANK v1 = Priority→Confidence→FIFO + a starvation guard; STOP only on idle-AND-empty.
4. **Parallel + async** (SURVIVE) — dedup=individuation vs the launched-set; re-rank-each-wake (moving queue); N-cap; sync-handoff/async-execution; the filled failure/cold-start/empty gaps; compare-slot deferred.
5. **Re-tests + naming** (SURVIVE) — 4 confirmed re-tests; "meta-loop" → four options + a recommendation, the user's veto.

## Convergence Telemetry

- Dimension coverage: 6/6; all three critical dimensions per candidate
- Adversarial strength: **STRONG** — the read-only-Runner attack sharpened the boundary to an enforceable bright line; the starvation attack caught that pure strict-priority dumb-RANK would starve necessary routes (a real operational bug) and added the guard; the worked-example attack kept the visualizability win honest (illustrative-flagged)
- Landscape stability: STABLE
- Clean SURVIVE exists: YES (parallel+async; re-tests+naming; the assembly)
- Failure modes: none firing — Rubber-Stamping (the story's most appealing pieces — blind-by-necessity, dumb-RANK, the clean worked example — were each refined); Self-Reference Collapse (the system designing its own operating loop — countered by the starvation catch cutting against the design's own simplicity, the deferred compare, and the naming handed to the user); Nitpicking (each refinement guards a critical dimension — enforceability, non-starvation, honesty); Axis Absence (the starvation risk caught at the decision-procedure-soundness plane the user's core question lives on)

**Overall: PROCEED**

**Next step input (for ITERATION COMPLETE):** the user's ask is met — a visualizable STORY of three actors (Runner = judgment-free code, enforced by a no-read bright line; Loop = the MVL work; Selector = the reasoning session) operating as an OS-scheduler/ATC-style event loop over the moving `_route.md` ready-queue (WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP; RANK v1 = Priority→Confidence→FIFO + starvation guard; dedup=individuation; N-cap; sync-handoff/async-execution; the compare-slot deferred), faithful to the Turn Architecture finding (Runner=carrier, Selector=Selector) and Expedition Mode B, told as a traced wake-cycle with an illustrative worked example, a why-not-a-for-loop aside, two failure poles (stagnation/explosion), and an autonomy-climb closer — with the open parts (RANK formula, dedup signature, compare design) and the contested word "meta-loop" (four options + a recommendation) honestly handed to the user's seat.
