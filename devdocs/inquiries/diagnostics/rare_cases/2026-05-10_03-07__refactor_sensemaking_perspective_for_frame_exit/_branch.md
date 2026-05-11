# Branch: Refactor a Sensemaking perspective into 2 to catch frame-exit?

## Question

Given the prior drill-down finding (`devdocs/inquiries/2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/finding.md`) which identified that Sensemaking's 7 Phase-2 perspectives all operate WITHIN the inquiry's frame and that **frame-scope capture (Perspective Blindness on the frame-exit perspective)** is the primary causal mechanism behind the L0 Memory failure — and given the prior loop_diagnose proposed adding a NEW perspective (M7) but DEFERRED it per loop_diagnose Step 5 — **is one of the existing 7 Sensemaking Phase-2 perspectives doing two distinct cognitive jobs that could be refactored into 2 perspectives, where the split would (a) make frame-exit checking a first-class operation and (b) NOT hurt Sensemaking's generic capability across non-frame-bounded inquiries?** If yes, which perspective splits cleanest and what is the gating that keeps the new sub-perspective from spurious-firing on ordinary terms?

## Goal

A clear answer with three parts:

1. **Is there a real refactor candidate?** Identify whether one of the 7 existing perspectives is structurally overloaded (already doing multiple distinct cognitive moves bundled under one name). If yes, name the perspective and describe the bundled moves.

2. **Does the refactor close the frame-scope-capture gap without hurting generic capability?** Show explicitly that (a) one of the resulting sub-perspectives makes frame-exit checking a first-class operation, (b) the other sub-perspective preserves the existing capability, (c) the split's combined behavior on ORDINARY non-frame-bounded inquiries is the same as today (no spurious firing).

3. **Recommendation: refactor (DEFERRED), add (DEFERRED), or hold.** Whichever path is taken, respect `homegrown/protocols/loop_diagnose.md` Step 5 — N=1 evidence cannot ship a spec change immediately; the recommendation must be deferred with revival trigger.

The user must be able to decide: "do I revise the prior loop_diagnose's M7 from 'add a new perspective' to 'refactor an existing perspective into 2', or keep M7 as-is?"

## Scope Check

Question covers goal: YES. Question asks "is there a refactor candidate? does it close the gap without hurting capability?" — Goal asks for refactor analysis + gap-closure check + non-hurt-check + recommendation. Tight match.

Specific-vs-pattern check: this inquiry is about the SENSEMAKING SPEC's structure (a pattern claim). The prior frame-scope-capture is the trigger but the proposed answer is a spec-architecture question. Stay structural — don't scope-creep into Sensemaking-spec rewriting beyond the specific perspective in question.
