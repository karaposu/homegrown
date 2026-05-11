# Exploration: Why Sensemaking application missed Memory disambiguation

## 1. Mode and Entry Point

- **Mode:** Mixed — artifact (concrete sensemaking.md text from the prior MVL+ run, available at `devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/docarchive/sensemaking.md`) and possibility (causal-mechanism candidates a-f from `_branch.md` to be probed against the artifact).
- **Entry point:** Signal-first. The `_branch.md` named 6 candidate mechanisms; this exploration probes the artifact text to see which candidate(s) match.

---

## 2. Territory Overview

The territory has 4 regions:

- **R-A: The framing moment** — where "Memory" first enters the prior inquiry's mental model and how it's categorized.
- **R-B: The Ambiguity Collapse phase** — where the inquiry's explicit testing of Memory happened (Ambiguity #6) and what was tested.
- **R-C: The load-bearing concept test enumeration** — which concepts the prior inquiry's Phase 3 listed as "load-bearing concepts" for testing, and why Memory wasn't on the list.
- **R-D: The user's correction** — what the user did mentally that the loop didn't, providing comparative evidence.

---

## 3. Inventory (per region)

### R-A: The framing moment

The prior sensemaking output introduces Memory at three places, in this order:

1. **K1 (line ~37):** "Each role (Worker, Navigator, Selector, Runner, Evaluator) has its own autonomy axis. A 'Level' is a SUMMARY POINT in this multi-dimensional space."
2. **K2 (line 38):** "The meta-loop ladder composes over the Navigator-axis (and over Selector-axis, Runner-axis, Worker-axis, **Memory-axis**, Multi-head-axis)."
3. **K7 (line 43):** "**Memory is a hidden axis the user did NOT name.** `_meta_state.md` already exists conceptually; Reflect-feedback and Navigator-memory make memory load-bearing at L2+."

**Critical evidence:** at K2, Memory is introduced AS AN AXIS. At K7, the framing is doubled down — "Memory is a hidden axis." Within ~6 lines of Phase 1 anchor extraction, Memory has been categorized: it is an axis-name in the multi-axial frame.

The inquiry's `_branch.md` itself (which I authored) listed Memory as one of 8 axes in its Goal section. So Memory was pre-categorized AS AN AXIS at the FRAMING level — before Sensemaking ran. Sensemaking inherited this categorization.

**Finding:** Memory was placed into the "axis" category at the framing moment. The category-placement happened in the user's request (8 axes listed) AND in K2/K7 anchors. Once categorized, the rest of Sensemaking treated Memory as an axis-element, not as an independent concept.

### R-B: The Ambiguity Collapse phase — Ambiguity #6

The prior sensemaking ran exactly one Ambiguity-Collapse pair on Memory. From line 266:

> **Ambiguity #6: Is "Memory" a separate axis or is it implicit in Navigator-graduation?**
> **Strongest counter-interpretation:** The Navigator-axis already includes memory (Navigator L2 is "persistent" with `navigation_memory.md`). Adding Memory as a separate axis is redundant.
> **Why the counter fails:** Memory has uses BEYOND Navigator. Selector benefits from outcome-memory; Runner benefits from convergence-memory; Reflect-feedback writes to a memory channel.
> **Resolution:** Memory is an explicit 7th axis.

**Critical evidence:** the question Ambiguity #6 asks is *axis-scope* — "is Memory a separate axis or implicit?" It does NOT ask *what Memory means*. The counter-interpretation is structural-redundancy ("Navigator already includes it"), not concept-meaning.

The phrase "Memory has uses BEYOND Navigator" is interesting — it surfaces THREE different USES (Selector outcome-memory, Runner convergence-memory, Reflect-feedback memory). But each is described in terms of WHAT THE SYSTEM TRACKS WITHIN THE META-LOOP, not in terms of what artifacts the project has overall.

The Definitional/Consistency check (line 115) provides the closest moment to type-disambiguation:
> Tested: does the proposal's 'Memory as 7th axis' contradict `_meta_state.md` already being the project's memory artifact?
> Resolved: No — `_meta_state.md` is the artifact; the axis is whether the system READS/WRITES it autonomously vs. a human curating it.

**Critical evidence:** here the loop EQUATES "Memory" with `_meta_state.md` — the meta-loop-memory artifact. Per-inquiry md files (`_branch.md`/`_state.md`/`finding.md`) are NEVER mentioned. The frame's scope assumed Memory = meta-loop-memory; per-inquiry artifacts were outside the frame's reach.

**Finding:** Ambiguity #6 tested the AXIS DIMENSION of Memory (separate or implicit?), not the TYPE DIMENSION (per-inquiry vs cross-inquiry vs Navigator-memory). The frame's scope had already implicitly equated Memory with meta-loop-memory before the Ambiguity-Collapse pair ran.

### R-C: The load-bearing concept test enumeration

From the prior sensemaking.md (lines 286-323), the load-bearing concept tests explicitly enumerate these concepts:

1. "5 cognitive roles" (from 2026-05-10 prior finding) — tested with domain-property-vs-external-default.
2. "Autonomy ladder" itself — tested with proxy-vs-structural.
3. "Movement direction" terminology — tested with user-language alignment.
4. "Loop count" and "chaining" — tested with user-language alignment + discoverability.

**Critical observation:** Memory is NOT on this list. The proxy-vs-structural sub-test was applied to "Autonomy ladder" but not to "Memory."

What's the criterion the loop used to decide "what's a load-bearing concept worth testing"? Examining the 4 enumerated concepts, the implicit pattern is:

- "5 cognitive roles" — INHERITED FROM PRIOR FINDING (tested for fidelity to source)
- "Autonomy ladder" — THE INQUIRY'S CENTRAL ABSTRACTION (the new commitment being made)
- "Movement direction" — TERMINOLOGY COINED FOR THIS INQUIRY (a new term)
- "Loop count" + "chaining" — OPEN PARAMETERS BEING COMMITTED (per the goal's three open parameters)

These all share a property: **they are concepts being introduced, committed, or directly inherited as items requiring fidelity-check at this phase of this inquiry**. The list excludes terms that are constituent ELEMENTS of the inquiry's frame (the 8 axes, including Memory) because those are treated as the SCAFFOLD on which the inquiry rests, not as concepts being committed.

**Finding:** The load-bearing concept test's enumeration scoped "load-bearing concepts" to: (a) concepts being committed in this inquiry, (b) terms coined in this inquiry, (c) inherited concepts being explicitly fidelity-checked. The 8 axes (including Memory) were treated as the FRAMEWORK — the scaffold — not as concepts being committed. So they didn't make the enumeration. This is the procedural-scope mechanism.

### R-D: The user's correction

The user wrote: *"why u say memory is human? we have md files no?"*

The user's mental move: stepped OUT OF the meta-loop frame. The user's question references artifacts (md files) that exist REGARDLESS of the meta-loop. The user wasn't asking "what does Memory mean within the meta-loop ladder?"; they were asking "what does Memory mean PROJECT-WIDE, given what the project actually has?"

**Finding:** The user's correction succeeded by FRAME-EXIT. The frame the prior inquiry operated within (the meta-loop ladder) had implicitly scoped Memory to meta-loop-memory only. The user, not constrained by that frame's scope, brought in evidence (md files exist project-wide) the frame had excluded.

---

## 4. Signal Log

| ID | Signal | Source / type | Action |
|---|---|---|---|
| S1 | K2 + K7 categorize Memory as "an axis" within ~6 lines of Phase 1 | Density signal | **Probed** (R-A) — categorical pre-capture confirmed |
| S2 | Ambiguity #6 tests AXIS-SCOPE not TYPE | Direct evidence | **Probed** (R-B) — confirms test asked the wrong axis of ambiguity |
| S3 | Definitional/Consistency check equates Memory with `_meta_state.md` only | Direct evidence | **Probed** (R-B) — confirms frame's scope excluded per-inquiry artifacts |
| S4 | Load-bearing concept test enumeration excludes Memory | Absence signal | **Probed** (R-C) — confirms procedural-scope mechanism |
| S5 | The 4 enumerated concepts share "being committed/coined/fidelity-checked" property | Pattern in inventory | **Probed** (R-C) — names the scope criterion |
| S6 | User's correction stepped OUT of the meta-loop frame to bring in project-wide evidence | Comparative evidence | **Probed** (R-D) — names the frame-exit move that the loop didn't make |
| S7 | The 2026-05-10 prior finding listed Memory as one of the architectural axes — inherited vocabulary | Cross-inquiry signal | **Probed** — supports Status quo bias contribution |
| S8 | The multi-axial frame (K1, K2) appears VERY EARLY in Phase 1 and persists throughout | Density + relevance | **Probed** — supports Anchor Dominance contribution |
| S9 | Spec text "concepts whose use depends on runtime determination" is correct in abstract — Memory IS such a concept (system-vs-human varies per level) | Absence signal | **Probed** — the trigger language is sufficient; its firing depends on frame-independence |
| S10 | The user's mental model wasn't constrained by the meta-loop frame because they ARE the meta-loop at L0 (per their explicit anchor) — they have a project-wide view, not a frame-scoped view | Cross-domain signal | **Probed** — explains why the user caught what the loop missed |

---

## 5. Confidence Map

| Region | Status | Notes |
|---|---|---|
| R-A (Framing moment) | **Confirmed** | K2 + K7 + the inquiry's own _branch.md framing all categorize Memory as axis |
| R-B (Ambiguity Collapse #6) | **Confirmed** | Direct text shows axis-scope question, not type-meaning question |
| R-C (Load-bearing concept test enumeration) | **Confirmed** | Direct text lists 4 concepts; Memory absent; pattern in the 4 confirms procedural-scope criterion |
| R-D (User's correction) | **Confirmed** | User's question references project-wide artifacts outside the meta-loop frame |
| Whether candidate (a) categorical-capture is THE primary | **Scanned** | Refined to FRAME-SCOPE CAPTURE — Memory's meaning was scoped by the frame, not by inventory |
| Whether candidate (b) status-quo-bias contributes | **Scanned** | Yes, contributing — Memory was inherited as already-vetted axis-name |
| Whether candidate (c) anchor-dominance contributes | **Scanned** | Yes, contributing — multi-axis frame was the dominant anchor |
| Whether candidate (d) trigger-language abstractness contributes | **Scanned** | Partial — trigger language is correct; failure is downstream (frame-scoped meaning) |
| Whether candidate (e) procedural-scope misinterpretation contributes | **Scanned** | Yes, contributing AT APPLICATION LAYER — but it's a manifestation of frame-scope capture, not an independent cause |
| Whether candidate (f) some combination | **Confirmed** | Yes — primary + contributing |

---

## 6. Frontier State

**Stable.** Three exploration cycles converged:
- Cycle 1: identified the framing moment (R-A).
- Cycle 2: traced the Ambiguity Collapse + load-bearing concept test path (R-B + R-C).
- Cycle 3: compared with the user's frame-exit correction (R-D); refined candidate (a) into "frame-scope capture" — the meaning of Memory was determined by the frame's scope (meta-loop-only), not by inventory of all memory-bearing artifacts.

Discovery rate: declining. No new sub-regions surfaced after Cycle 2. Cycle 3 was a refinement.

Bounded gaps: the only unexplored region is whether this same frame-scope-capture mechanism applies to other terms in other inquiries. That's the recurrence question — addressed by the prior loop_diagnose finding's M4 audit candidate. Not in scope here.

Convergence: **achieved**.

---

## 7. Gaps and Recommendations

### Refined causal-mechanism map

The 6 candidates from `_branch.md` resolve as follows:

- **(a) Categorical pre-capture → REFINED to FRAME-SCOPE CAPTURE.** Memory was placed in the "axis" category at the framing moment. More precisely: the frame ("meta-loop ladder") implicitly scoped Memory's meaning to "what the meta-loop tracks across runs" — which excluded per-inquiry artifacts. **Primary mechanism candidate.**
- **(b) Status quo bias.** Memory came from prior findings as already-vetted vocabulary; the loop inherited it without re-introduction. **Contributing — increased the weight of the framing-moment categorization.**
- **(c) Anchor dominance.** The multi-axial frame was the dominant anchor (K1 + K2 appear in first 5 lines of Phase 1; persist through SV6). **Contributing — strengthened the frame's hold.**
- **(d) Trigger-language abstractness.** The spec's "concept whose use depends on runtime determination" is correct in abstract. Memory IS such a concept. The trigger language WOULD have fired if the loop had a frame-independent view. **Not a primary cause — the trigger is fine; the failure is upstream at the frame.**
- **(e) Procedural-scope misinterpretation.** The load-bearing concept test enumerated "concepts being committed/coined/fidelity-checked" — Memory was a frame-scaffold element, not a commitment. **Contributing AT THE APPLICATION LAYER — but it's a manifestation of frame-scope capture, not an independent cause.**
- **(f) Some combination.** YES — primary (frame-scope capture) + 3 contributing (status quo bias, anchor dominance, procedural-scope manifestation).

### Recommendations to next disciplines

- **Sensemaking should:**
  1. Stabilize "frame-scope capture" as the primary causal mechanism (refining candidate (a)).
  2. Test whether this mechanism is itself a load-bearing concept worth elevating to a project-level failure-mode candidate, OR whether it's sufficiently described by combining existing failure modes (Status Quo Bias + Anchor Dominance + a procedural footnote).
  3. Apply the proxy-vs-structural sub-test to the new term "frame-scope capture" itself (meta-application — does this term represent ONE structural distinction or several?).

- **Decomposition should:**
  1. Partition "frame-scope capture" from its contributing causes.
  2. Identify the EVALUATION question for M1 (the prior diagnostic's pre-CONCLUDE checklist): does M1 actually catch frame-scope-capture errors, or only catch downstream symptoms?

- **Innovation should:**
  1. Generate new maintenance candidates that target frame-scope capture specifically (if existing M1-M6 don't suffice).
  2. Apply Inversion mechanism: what would FRAME-INDEPENDENT term inventorying look like during Sensemaking?

- **Critique should:**
  1. Test whether "frame-scope capture" is genuinely primary or is an over-reading from N=1.
  2. Test whether elevating it to a named failure mode is justified, or whether the existing Status Quo Bias + Anchor Dominance failure modes already cover it.
  3. Apply self-reference resistance — this exploration is using sensemaking-derived terminology to diagnose a sensemaking failure. External anchoring required.

### What was NOT explored (deliberate scope cuts)

- Whether the same frame-scope-capture mechanism applies project-wide to other terms (out of scope per `_branch.md`'s specific-vs-pattern check; the M4 audit from prior loop_diagnose covers this).
- Whether the spec text of Sensemaking's load-bearing concept test should be REWRITTEN to address frame-scope capture (out of scope; would be a M2 spec edit, which is DEFERRED in the prior loop_diagnose).
- Whether the MVL+ runner has other frame-scope failures beyond Memory (research frontier).
