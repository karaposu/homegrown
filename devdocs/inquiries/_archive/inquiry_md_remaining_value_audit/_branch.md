# Branch: inquiry_md_remaining_value_audit

## Question
What unique value remains in `commands/inquiry.md` that hasn't been superseded by `/MVL`, `/MVL+`, the recently-extracted `homegrown/protocols/conclude.md`, the `/navigation` discipline, or the `/wayfinding` discipline — and specifically: is the wayfinding move taxonomy embedded in `inquiry.md` (NARROW / BROADEN / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER) covered elsewhere, or has it slipped through the cracks of the recent refactoring?

## Goal
Three concrete outputs the user can act on:
1. **Per-section verdict on `commands/inquiry.md`:** for each major section (CONFIGURE, RESUME, the wayfinding move taxonomy, SYNTHESIZE, the loop pattern diagram, the Rules section), classify as (a) superseded by an existing alive component → can be removed, (b) unique value, has a future home → extract before removing, or (c) unique value, no current home → either build the home or accept that inquiry.md keeps it.
2. **Wayfinding-taxonomy decision specifically:** is each of the 6 moves (NARROW, BROADEN, SHIFT, DIAGNOSE, TERMINATE, RECONSIDER) covered by `/navigation`'s 15-type taxonomy, by `/wayfinding`'s single-direction selection, by `/MVL`'s iteration-narrowing logic, or genuinely uncovered? If genuinely uncovered, flag which moves and what their canonical home should be.
3. **Punch list:** what to do with `inquiry.md` post-audit — keep / archive / refactor / extract specific parts.

## Scope Check
Question covers goal. The "what unique value remains" question, when answered carefully, covers (a) per-section verdict, (b) wayfinding-taxonomy specifics, and (c) the action implications. The wayfinding-taxonomy bullet is a special case of the general question — the user explicitly flagged it because they suspect it's the highest-risk uncovered piece.

## Context
- **Recent extractions:** `homegrown/protocols/conclude.md` was created from /MVL's iteration-complete-yes branch (~107 lines). /MVL.md and /MVL+.md were updated to load+execute CONCLUDE instead of inlining the procedure. CONCLUDE is now in protocols/desc.md as the alive-embedded protocol that produces `finding.md`.
- **The just-completed `synthesize_vs_finding_split` finding:** named two protocols — CONCLUDE (alive, extracted) and SYNTHESIZE (named-but-procedurally-underspecified, in Missing group). The inquiry.md SYNTHESIZE section is structurally inconsistent with the new architecture and is part of pending Configuration β work (Step 1 of synthesize_vs_finding_split's punch list).
- **`commands/inquiry.md` content as observed:** has CONFIGURE (problem-classification → pipeline selection), RESUME (state-driven continuation), the wayfinding move taxonomy embedded as the table at line ~189, SYNTHESIZE (now superseded by CONCLUDE for routine cases), the loop pattern diagram (`discipline → inquiry → discipline → ... → wayfinding → discipline → ...`), and a Rules section.
- **`commands/navigation.md`:** 491 lines. Implements `/navigation` — the 15-type taxonomy (content/process/context categories) for full enumeration of next directions. Confidence-tagged map output.
- **`commands/wayfinding.md`:** 381 lines. Implements `/wayfinding` — single-direction selection (the wayfinding moves). The user noted "/wayfinding is not used so much now" — empirical signal of low utilization.
- **The wayfinding move taxonomy in `inquiry.md` (the table the user quoted):** NARROW (refine survivor), BROADEN (try different angle), SHIFT (change focus), DIAGNOSE (problem understanding incomplete), TERMINATE (converged), RECONSIDER (kill condition invalidated). Six moves total. Each has a "Run: /sense-making on [...]" instruction.
- **Coverage hypothesis to test:**
  - NARROW → /MVL's iteration-narrowing logic (the NO branch's "Restate the question with a NARROWER focus" instruction).
  - BROADEN → /navigation's WIDEN (probably).
  - TERMINATE → /MVL's iteration-complete YES branch + CONCLUDE.
  - SHIFT, DIAGNOSE, RECONSIDER → uncertain; need to check navigation's 15-type taxonomy and /wayfinding's spec.
- **Connection to end-goal:** at autonomy-ladder Level 2-3+, the system needs to select between iteration moves autonomously when /MVL's iteration NO branch fires. If the move taxonomy is uncovered, the system has no formal vocabulary for "the question isn't answered AND we need to change what kind of next-iteration we run." This is potentially load-bearing for autonomy.
