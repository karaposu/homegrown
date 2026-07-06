# Branch: Next-Move Selection Belongs to Navigation, Not the Worker Loop

## Source Input

```text
in devdocs/inquiries/2026-07-05_00-21__open_directions_index_solution_quality_evaluation/finding.md u said 


- **Pull enriches a direction you've *already chosen*; it does not help you *choose*.** To use pull you must already have a topic to query with — so it can sharpen a heading you've picked, but it cannot answer "what should I work on next?" That harder job — actually steering the next move — belongs to push. The write-up's claim that the design "feeds the steering layer" is therefore broader than what pull actually does.

"what should I work on
  next?"

question is something isolated navigational session should worry, not traverse loop of worker session. Do you understand this ? dive deeper of why
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-05_05-13__next_move_selection_belongs_to_navigation_not_worker_loop/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** I1
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none

## Question

**Item I1 (literal):** "'What should I work on next?' is something the isolated navigational session should worry about, not the traverse loop of the worker session. Do you understand this? Dive deeper of why."

The user is correcting a claim in a prior finding (`devdocs/inquiries/2026-07-05_00-21__.../finding.md`) which said the "hard steering job" of choosing the next move "belongs to push." The user's point: choosing the next move is **not the worker traverse loop's concern at all** — it belongs to the isolated navigational session (and the orchestrator). The ask is to confirm this is understood and to explain *why* it holds architecturally.

**What kind of ask this carries (MQ1 verdict-axis):**
- confirm understanding of the layer point;
- explain WHY next-move-selection sits at the navigation/orchestrator layer, not the worker loop;
- correct the prior finding — the "push does the hard steering job" framing mislocated steering into a worker-loop read;
- adjudicate, not just agree — verify the user is right on the canon's structural grounds (this is a correction of my own prior output).

**Plausible action-endpoints (MQ3 intent-axis, WHAT):**
- establish the layer boundary (which layer owns next-move-selection);
- relocate pull and push in the architecture (pull = in-worker-loop enrichment; next-move-selection = navigation+orchestrator, over finished work);
- expose that pull's "can't choose the next move" is NOT a defect (choosing isn't the worker loop's job);
- re-evaluate whether "push" (as I framed it — a watcher surfacing directions) is even a worker-loop mechanism, or actually a navigation-layer enumeration feature.

## Goal

**Deliverable shape (Deconstruct):** an **explanation-plus-correction** — confirm and explain the layer separation, AND correct the prior finding's mislocation of steering. Kinds: architectural reasoning + a correction acknowledgment + a relocation of pull/push within the layer model. Bounds: the layer question — worker traverse loop vs the isolated navigational session + orchestrator — and where "what to work on next" lives.

**Why the user wants this (MultiDepth WHY-axis) — preserved as open:**
- architectural integrity — fix a conceptual error in the prior finding (the layers must not be conflated);
- comprehension-check — confirm the load-bearing separation is understood before more design;
- separation-of-concerns — a heads-down worker must not be asked to steer.

**Context the answer needs (MQ2 context-need axis):**
- the SUSTRALL canon (`docs/canon/sustained_traversal_loop_of_loops.md`) — worker loop-runners = the hands (control scope: per-cycle only, within one inquiry); the isolated navigational session = the eyes (enumerates the field; "sees, does not choose"); the orchestrator = the will (route selection + the seven loop-control moves + traversal memory);
- the prior finding being corrected (`devdocs/inquiries/2026-07-05_00-21__open_directions_index_solution_quality_evaluation/finding.md`, the "push does the hard steering job" claim);
- the sibling `devdocs/inquiries/2026-07-05_00-47__what_is_done_with_pulled_relevant_directions/finding.md` (pull/push as reads over the index);
- **kinds:** confirmation+explanation AND a correction of the prior finding — carry both;
- **stance:** the user is correcting me — adjudicate on the canon's structural grounds (is the user right?), and if the mislocation is real, acknowledge it plainly, not defensively.

**What would explicitly fail (MQ4 boundary-axis):**
- re-litigating the ODI grade (settled in 00-21);
- re-explaining the pull/match mechanics (settled in 00-47);
- the focus is strictly the LAYER question: whose job is "what should I work on next?"

## Considered Articulations

- **Item I1 — the layer ownership of next-move-selection:**
  1. Confirm the point and explain WHY next-move-selection belongs to the navigation/orchestrator layer — via the canon's structural grounds (whole-field visibility vs the worker's tunnel-vision; the worker's per-cycle-only control scope; "navigation sees, does not choose"; deliberate freshness/isolation; the dispatch-order fact that the worker's topic was already chosen one layer up).
  2. Correct the prior finding: the "push does the hard steering job" framing mislocated steering *into* a worker-loop read; steering isn't a worker-loop read's job at all.
  3. Relocate pull and push in the layer model: pull = in-worker-loop enrichment (correctly in-layer, modest, not a defect); the index's contribution to steering happens at the navigation+orchestrator layer over finished work — not by a read a running worker performs.
  4. Establish that pull's "cannot answer what-to-work-on-next" is not a limitation — choosing the next move is definitionally not the worker loop's job, so pull staying silent on it is correct-in-layer.
  5. Re-evaluate "push": whether the watcher-that-surfaces-aging-directions I attributed to steering is even a worker-loop mechanism, or actually belongs to the navigational session's enumeration over finished work (the eyes), with the orchestrator (the will) doing the actual selection.

## Scope Check

Question covers goal. The question (whose job is next-move-selection + why) matches the goal's deliverable (explanation-plus-correction over the layer boundary). IN-scope (the layer question; relocating pull/push) is bounded per Deconstruct; OUT-of-scope (the ODI grade; pull mechanics) is set by MQ4.

**Specific-vs-pattern check:** the trigger is one specific sentence in the 00-21 finding, but the correction is about a general architectural principle (which layer owns cross-inquiry selection). Address the broader principle (the layer separation) and apply it back to correct the specific sentence — not just the one sentence in isolation.
