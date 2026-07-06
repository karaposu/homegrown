# Route-Map — What Is Done With Pulled Relevant Directions

## User Input

**territory:** this inquiry's own artifacts (`_branch.md` + the six discipline outputs).
**goal (from `_branch.md`):** an honest explanation-plus-verdict on what is done with surfaced directions / the true benefit / how it is memory. Landed: real under-specification (mechanism specified, choice legitimately punted, operational payoff unstated); what-is-done = an offer the warm session judges; benefit conditional+concentrated (cross-context real, re-derivable thin); READ ≠ MEMORY (the read spends, the writes constitute); the missing piece = the mark-done write-back; the index is under-built on two independent axes (delivery-read = push, state-write = mark-done).

*(`@`-gates are consumer-facing disposition annotations for the between-inquiry layer — not route-record fields, per routelister §1.3.)*

---

## Map Header

- **Identities enumerated:** 5 routes · 1 Excluded cluster (2 candidates)
- **High-priority:** 2 (R1, R2) · **Essential (`core`):** 2 (R1 mark-done write-back · R2 the offer step) · supporting 2 (R3, R4) · peripheral 1 (R5)
- **Grain:** single-grain (onward next-steps from an explanatory finding) · **run-mode:** project-space breadth · **entry:** fresh

## Route Index

| # | Direction | Engagement | Priority | Essentiality | ✓ |
|---|---|---|---|---|---|
| R1 | Spec the mark-done write-back (the missing state-write) | DEVELOP | HIGH | core | ☐ |
| R2 | Spec the downstream "offer" step (what a warm session does with a surfaced direction) | DEVELOP | HIGH | core | ☐ |
| R3 | Update the ODI doc — state the payoff + add mark-done as the second write | REFINE | MED | supporting | ☐ |
| R4 | Reconcile the two under-built axes (delivery-read + state-write) over the shared index | CONSOLIDATE | MED | supporting | ☐ |
| R5 | Observe whether stale already-done directions accumulate without mark-done | TEST | LOW | peripheral | ☐ |

---

## Per-Route Records

### R1 — Spec the mark-done write-back · @user-go
- **Route Identity:** Direction = *Spec the mark-done write-back — the missing state-write* · Goal = the index reflects done-vs-open state, not just a growing pile · engagement-type = **DEVELOP**
- **Move / Lands:** Move — specify the step: *when a pass addresses a surfaced or related open direction, record it done in the index* (who writes, when, what the entry records — taken-by / when). The field already exists (the routelister route record carries a `✓`/done column + Priority/Essentiality); the missing thing is the *habit/step*. **Lands** — the index becomes a stateful memory (canon's visited/selected/outcome) rather than a write-only inbox. **Touches** — the index (the ODI/routelister layer); the loop's end-of-pass step.
- **WHY:** this is the finding's identified actual missing piece — without it the index recreates the write-only failure one level up (surfaces stale already-done directions). **Goal rung:** it is what makes the "how is it memory" answer *true in the build*, not just in the explanation → `core`.
- **Priority:** HIGH · **Confidence:** HIGH · **Essentiality:** core
- **Guidance:** it is a *write to the index* → index/routelister housekeeping, NOT the steering layer's choice (the doc's punt covers the choice, not the recording); plain, minimal (reuse the existing done-field).

### R2 — Spec the downstream "offer" step · @if-picked
- **Route Identity:** Direction = *Spec what a warm session concretely does with a surfaced direction* · Goal = the pull payoff is operational, not implicit · engagement-type = **DEVELOP**
- **Move / Lands:** Move — specify the menu as an actual loop step: on Look-Up surfacing a direction, the session may **absorb-while-warm** / **inform-the-finding** / **mark-done-if-addressed** — an *offer* it declines when not cheap+relevant (no forced derail). **Lands** — the "what is done" the ODI doc leaves unstated becomes a named, bounded step. **Touches** — the Look-Up step; R1 (mark-done is one of the three options).
- **WHY:** the finding's Q1/Q2 — the doc specifies surfacing but leaves the operational payoff unstated; this fills exactly that gap. **Goal rung:** turns pull from "a reminder you may ignore" into a defined read-act(-record) step → `core`.
- **Priority:** HIGH · **Confidence:** MED · **Essentiality:** core
- **Guidance — `Meaning-gaps:`** the decline-default (surfacing must not force a derail — the offer is opt-in) `[high]`; the cross-context bias (the offer pays on directions the session wouldn't re-notice) `[mid]`. Composes with R1 (its third option is R1's write).

### R3 — Update the ODI doc · @if-wanted
- **Route Identity:** Direction = *Update the ODI doc to state the operational payoff + add mark-done as the second write* · Goal = the doc matches the honest answer · engagement-type = **REFINE**
- **Move / Lands:** Move — add to `docs/future-seed/open_directions_index.md`: (a) the operational payoff of *using* a surfaced direction (the offer), scoped honestly (conditional/cross-context); (b) mark-done as the index's second write alongside File. **Lands** — a doc that doesn't stop at "surfaces." **Touches** — the ODI doc; feeds the prior ODI-evaluation finding's "re-frame the doc around the index" recommendation.
- **WHY:** the finding found the doc under-specifies the payoff (a fair thing to miss) — closing that keeps the doc accurate. **Goal rung:** documentation accuracy, not a new capability → `supporting`.
- **Priority:** MED · **Confidence:** HIGH · **Essentiality:** supporting
- **Guidance:** fold into the prior finding's re-frame pass (don't do two separate ODI-doc edits); keep the honest bound visible (benefit conditional, not universal).

### R4 — Reconcile the two under-built axes over the shared index · @if-wanted
- **Route Identity:** Direction = *Reconcile the delivery-read (push) + the state-write (mark-done) over the shared index* · Goal = one coherent set of reads/writes over the index · engagement-type = **CONSOLIDATE**
- **Move / Lands:** Move — situate the index's operations on both axes the two recent inquiries surfaced: reads = Look-Up (pull) + push (uninvited delivery); writes = File (accumulate) + mark-done (state). **Lands** — a design where the index's reads and writes are named as a set, not discovered piecemeal. **Touches** — the prior ODI-evaluation finding (push); this finding (mark-done); the index design.
- **WHY:** the mechanism-independence check found the ODI under-built on two *independent* axes; reconciling them prevents piecemeal, possibly-conflicting additions. **Goal rung:** coherence of the index's operation-set → `supporting`.
- **Priority:** MED · **Confidence:** MED · **Essentiality:** supporting
- **Guidance:** depends on R1 + the prior finding's push route existing as specs; this is the assembly pass, not the piece specs.

### R5 — Observe stale-done accumulation · @when (index accrues volume)
- **Route Identity:** Direction = *Observe whether stale already-done directions accumulate without mark-done* · Goal = the never-pruned risk confirmed or dismissed with data · engagement-type = **TEST**
- **Move / Lands:** Move — over real traverses without mark-done, observe whether the index fills with directions that are actually done-but-still-listed (the read then surfacing stale items). **Lands** — the extrapolation risk (write-only failure returns as never-pruned) turned from predicted into observed.
- **WHY:** the finding predicts stale accumulation absent mark-done; observing it confirms R1's urgency. **Goal rung:** firms a predicted risk → `peripheral` (informative, not blocking).
- **Priority:** LOW · **Confidence:** MED · **Essentiality:** peripheral
- **Guidance:** needs the index populated + several passes without mark-done; a coarse first-pass observation is enough to signal R1-urgency.

---

## Excluded

- **Re-grade the whole ODI / re-open "is it a breakthrough"** — EXCLUDED. Settled by the prior ODI-evaluation inquiry; this inquiry explains pull's downstream use, it does not re-grade the design.
- **Re-open the matching mechanism or the naming/come-back-when correction** — EXCLUDED. The user accepted the matching mechanism; the naming and the 19-10 correction are settled. Out of scope.

---

## Telemetry

- **Routes:** 5 (2 core, 3 supporting/peripheral) · **Excluded:** 2 (both out-of-scope-settled)
- **Engagement spread:** DEVELOP 2 · REFINE 1 · CONSOLIDATE 1 · TEST 1
- **The two `core` routes are the build spine:** R1 (mark-done write-back — the missing state-write) + R2 (the offer step — the operational payoff); R1 is one of R2's three options, so they compose. R3/R4/R5 support.
- **Consumer note:** R1 is `@user-go` (the finding's top missing piece); R2 is `@if-picked` (makes the payoff operational); R3/R4 are `@if-wanted` (doc-accuracy / axis-reconciliation); R5 is `@when` (depends on volume). R3 should fold into the prior finding's ODI-doc re-frame; R4 depends on R1 + the prior finding's push route.
- **Verdict:** PROCEED.
