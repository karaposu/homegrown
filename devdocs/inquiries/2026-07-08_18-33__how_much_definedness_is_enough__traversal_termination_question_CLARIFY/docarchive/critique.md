## User Input

devdocs/inquiries/2026-07-08_18-33__how_much_definedness_is_enough__traversal_termination_question_CLARIFY/_branch.md — (CLARIFICATION dive, Critique = THE GATE (Q5) on the clarification deliverable: gate each cell/section on genuine-rephrasing / in-register / ★answer-leakage / sharp-non-redundant; adjudicate the 3 ⚠LEAK flags; run completeness + the backstop [test AUTHORITY + RESUMABILITY] + coverage; light seed adjudication. Clarify-not-answer; guard both ways. Full mandate in _state 18-51 / the branch.)

---

# Critique — THE GATE on the clarification

## Phase 0 — dimensions (the gate conditions)

| D | Condition | Weight |
|---|---|---|
| D1 | **genuine rephrasing** — rephrases THAT sub-question, not a drift/vacuity | critical |
| D2 | **in-register** — native to that register's vocabulary | critical |
| D3 | ★**no answer-leakage** — frames the question, never "stop when X" | critical (the load-bearing axis) |
| D4 | **sharp + non-redundant** — not muddy, not a silent duplicate | moderate |
| D5 | **completeness** — do the sub-questions cover the question (MECE-ish)? | critical (field-level) |
| D6 | **coverage** — does each register earn its place? | moderate (field-level) |

## Phase 1 — landscape
- **Viable:** cells that restate a sub-question vividly in-register without resolving it. Most of the 18.
- **Dead:** any cell that answers ("stop when …"). Target of the leak-audit.
- **Boundary:** the 3 ⚠LEAK cells (reframe vs answer) + the 2 weaker-register cells (valid vs padding).

## Phase 2/3 — verdicts

### The 18 matrix cells — mostly SURVIVE
All six SQ1/SQ4/SQ5 cells + the plain+traversal cells of SQ2/SQ3/SQ6: **SURVIVE** — each genuinely rephrases its sub-question in-register, none resolves. Spot-checks: SQ1 (all three restate enough-for-a-purpose without naming the purpose = question intact); SQ4 (should-continue as a marginal-value question, no threshold set); SQ5 (the asymmetry stated as "which dominates?" not "therefore over-define"); SQ6-plain (the undecidable/intractable/vague trichotomy is the sharpest single clarifying move in the matrix — pure framing). **Non-redundancy:** SQ1-traversal vs SQ1-spider both = purpose-relativity but in distinct registers (loop-end vs eat/cache) — distinct phrasings, not duplicates. No muddy cells.

### The 3 ⚠LEAK flags — ADJUDICATED (all recast-and-KEEP; none was an answer)
- **SQ3-spider-3 ("monitor residual resistance / measuring the wrong thing")** → **REPHRASING (KEEP, tighten).** It does NOT say "stop when resistance = 0"; it asks *"is the traverser measuring the wrong thing — definition-quantity — when the real signal is downstream (does anything still resist/contradict)?"* That names a *kind* of detection-signal as an open sub-question, which is legitimately inside SQ3. Tightened wording for CONCLUDE: pose as a question ("what is the traverser's analogue of 'the prey stopped struggling' — is it residual contradiction? and is that the right thing to watch?"), not a recommendation.
- **SQ6-spider ("re-wrap if it moves / only a monitored loop")** → **REPHRASING (KEEP, recast).** The "re-wrap if it moves" is the *spider's behavior offered as illustration* of "there may be no final 'enough,' only ongoing monitoring" — a decidability rephrasing (is 'enough' a decidable *state* or only a *monitored loop with no final verdict*?). Recast for CONCLUDE to foreground the question ("is there a true 'wrapped enough' to decide, or only a never-final monitoring loop?") and drop the imperative reading. NOTE: this cell also seeded the backstop's RESUMABILITY find (below) — good sign it was pointing at a real facet.
- **framing-(a) the negative reframe** → **REFRAME, KEEP (anti-deflation hold).** This is the case where the guard must NOT over-fire: posing the question negatively ("when is the shape no longer *visibly un-done*?") is a legitimate *reframing of the question*, and the note explicitly carries the residual (*absence-of-known ≠ done*), which is exactly what keeps it from being the answer "stop when no failure fires." Killing it would be anti-deflation over-correction. KEEP, with the residual mandatory in the render.

**Un-flagged-cell leak scan:** clean. SQ5-spider ("that asymmetry is why a spider rationally over-wraps") was checked — it explains the spider's *behavior* (why over-wrap is rational for a spider), not a prescription for the traverser; the traverser-facing clause stays a question ("does the traverser face the same asymmetry?"). No un-caught leaks.

### The 2 weaker cells — SURVIVE (flagged weaker-register, NOT padding)
- **SQ2-spider** (wrap as scalar vs per-part profile) and **SQ6-spider** (monitoring-loop) — both are honestly weaker (the spider is less natural on metric-scale and on decidability). But each still says something the other registers don't (SQ2-spider: the per-limb profile is a vivid case for "definedness may be a map, not a number"; SQ6-spider: the no-final-verdict framing). SURVIVE as valid-but-secondary, explicitly marked so the render doesn't over-weight them. This is the anti-deflation call (keep honest-thin cells, labeled) paired with the anti-inflation label (don't present them as home-cells).

## Phase 3.5 — assembly + ★ the backstop

### COMPLETENESS — the six were NOT complete. The backstop earned its keep: +2 sub-questions.
**★ AUTHORITY / GOVERNANCE (add as SQ7).** "WHO or WHAT holds the stopping-decision — and can the judge be a *different agent* than the traverser?" Prosecution (fold-into-SQ3?): isn't this just detection (SQ3) + the same-judge hard core? Defense: the hard core *states* the same-judge property; SQ7 asks the *design question* whether it is *necessary* — can a separate agent judge "enough" (the spider IS its own authority; a SUSTRALL multi-head could split stopper from traverser; a human-in-the-loop is an external judge)? That is a distinct governance axis the six omit, and it is the one axis that could *architecturally dissolve* the hard core. **Verdict: genuinely-distinct-and-missing → ADD as SQ7, held as a QUESTION** ("who has stopping-authority, and can it be externalized?"), home registers = spider (self-authority) + traversal (a separate judging head). ⚠ Guard: the *answer* "use a separate head" is a research-frontier note, NOT part of the clarification.

**★ RESUMABILITY / FINALITY (add as SQ8).** "Is the stop TERMINAL or REVERSIBLE?" Prosecution (fold-into-SQ4-economics?): isn't "stop now" enough? Defense: SQ4 assumes stopping is a commitment; SQ8 *questions that assumption* — the spider re-wraps if the prey moves; anytime-algorithms resume; "enough for now, revisit if X" is a different stop than "done forever." And reversibility *neutralizes the SQ5 catastrophe-asymmetry* (if you can cheaply resume, stopping early stops being ruinous) and *softens the whole halting framing* (you're pausing, not halting). That is a distinct and high-value facet. **Verdict: genuinely-distinct-and-missing → ADD as SQ8, held as a QUESTION** ("is 'enough' a terminal halt or a revisable pause, and does reversibility dissolve the risk-asymmetry?"), home registers = spider (re-wrap on motion) + halting (anytime-algorithms).

So the clarified question is an **EIGHT-sub-question family** (the matrix extends to 8×3; the 6 were the first-pass decomposition, the gate's backstop found the missing 2). This is the gate biting substantively — it did not rubber-stamp "6 covers it."

### COVERAGE — complementarity CONFIRMED
Innovation's inversion holds under prosecution: each register is the sole vivid home of ≥1 sub-question (halting→SQ2/SQ3/SQ6/+SQ8; traversal→SQ1/SQ2/+neg-frame/+SQ7; spider→SQ1/SQ3/SQ4/SQ5/+SQ7/+SQ8). The spider is the only register supplying an *external* detection signal (SQ3) and the only one making the risk-asymmetry visceral (SQ5) — remove it and two sub-questions go abstract. No register is decorative. **Each register earns its place.**

### Assembly emergents CONFIRMED (both survive)
(1) the **negative-frame convergence** (SQ3-spider + SQ6-traversal + framing-(a) independently → pose-it-negatively) — real, held as a reframe. (2) the **external-signal gap** (SQ3-across-registers = the same-judge problem from the detection angle) — real, it IS the hard core at a different zoom. Both are genuine emergent structure, not artifacts.

## Phase 4 — seed adjudication + calibration close

### SEED — ONE nascent framing-seed
The clarified STRUCTURE (the 8-sub-question family + the two-part hard core + the negative reframe) is a **NASCENT inspiration/frame seed** for the un-written `devdocs/spec/meaningful_traversal.md` termination half: *maybe the spec's termination criterion should be BUILT AS this 8-sub-question decomposition* (answer each sub-question, rather than positing one global "done" test) — AND this **re-sizes `p29-S8`** (negative-space-closed) from "THE completion criterion" to **one candidate answer to two of the eight sub-questions (SQ2 measure + SQ6 decidability), not the whole termination criterion.** Anchor = the meaningful_traversal spec (+ p29-S8). Door = novelty (the spec has no termination structure yet; p29-S8 was a single-point proposal). Grade = NASCENT. Trigger = the meaningful_traversal spec's termination half is written. *(Not an answer: it structures HOW to answer, it answers nothing.)*
**Held OUT as research-frontier, NOT seeds** (clarify-not-answer + un-anchored/answer-adjacent): SQ7's "use a separate judging head to dissolve the same-judge problem"; SQ8's "make stops reversible to neutralize the risk-asymmetry." Both are *answers* to sub-questions — recorded as Research Frontiers, not banked as seeds.

### Calibration close
- **Cells:** 18 gated → 18 SURVIVE (3 recast-for-wording, 2 flagged weaker-register); 0 killed. **Is zero-kill rubber-stamping?** No — the gate's bite landed at the FIELD level (completeness), not the cell level: it added 2 missing sub-questions (6→8) and recast 3 leak-flagged cells. Cell-level kills were not warranted because Innovation self-flagged its own risky cells (the leak-flags) and the generation was disciplined; the gate's job here was leak-adjudication + completeness, and both bit.
- **The guard shown BOTH ways:** anti-inflation — the 3 leak-flags were genuinely adjudicated (not waved through as "rephrasings"), and the backstop ADDED real structure rather than padding; anti-deflation — the negative reframe was KEPT (not over-killed for looking answer-adjacent), and the 2 honest-thin cells were kept-but-labeled.
- **Completeness → 6 was incomplete → 8** (the substantive finding). **Coverage → complementarity confirmed.** **Self-reference:** the dive's own stop (Sensemaking Phase-5 no-accommodation) is acknowledged as an instance of the subject-question — consistent, flagged, not hidden.

**Signal: TERMINATE.** The clarification covers the question's structure (now 8 sub-questions × 3 registers + the two-part hard core + the negative reframe + the two faces + the self-reference), with the answer explicitly deferred. **Convergence Telemetry: PROCEED** — dimensions fit; adversarial STRONG (the backstop + leak-adjudications bit); landscape CHANGED (6→8); a clean deliverable exists; no failure mode un-checked (rubber-stamping refuted via the field-level bite; self-reference flagged). Next: Routelister.
