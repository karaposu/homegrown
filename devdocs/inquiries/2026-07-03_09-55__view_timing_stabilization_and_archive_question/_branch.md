# Branch: View Timing, Stabilization, and the Archive Question

## Source Input

The user's raw request, preserved verbatim (also in `articulate_simple.md`'s `## User Input`):

```text
i think generating a view should be sth we do when we are done executing sequence of inquiries and have a final reach regarding what is the verdict and when the topic (there might be multiple entangled concepts/topics in one inquiry, but only one of them should be targeted for view maybe)
stabilizes, we can run generate view protocol with traverse and it will go read all past , create view document, and then put all past ones into archieve?

but would this cause us lose information we generated and lose some important details....

or maybe views shuold belong to another folder? we dont touch inquiries folder's stability and views are put in views folder. this way things dont get tangled up?
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-03_09-55__view_timing_stabilization_and_archive_question/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `I1` — the view-lifecycle deliberation (timing at stabilization · one-concept targeting · the inquiries' post-view fate: archive vs folder-separation)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none

## Question

**(I1, literal restatement):** *"Generating a view should be something we do when we're done executing a sequence of inquiries and have reached a final verdict — when the topic stabilizes (inquiries entangle multiple concepts, but maybe only one should be targeted per view). Then we run the generate-view protocol with traverse: it reads all the past, creates the view document — and then puts all the past ones into archive? But would that cause us to lose information and important details…? Or maybe views should belong to another folder — we don't touch the inquiries folder's stability, and views go in a views folder, so things don't get tangled up?"*

**What kinds of asks this carries (MQ1 verdict-axis — preserved as open):**
- **settle-the-timing** — stabilization as the canonical view-moment, and its relation to the concluded design's on-demand views;
- **settle-the-depth-at-stabilization** — "run with traverse" = the user picking the traverse handoff (synthesis-grade) as the stabilization view's form;
- **settle-the-targeting** — one concept per view, even from entangled multi-concept inquiries;
- **adjudicate-the-archive** — move past inquiries to an archive after the view? carried WITH the user's own counter-worry (information loss);
- **confirm-the-folder-separation** — views in their own folder, inquiries untouched (*the concluded design already commits `devdocs/views/` — may resolve to confirmation*).

**What action-endpoints are plausible (MQ3 intent-axis — preserved as open):**
- the timing doctrine written (as protocol additions, landing with the build);
- the one-concept targeting rule;
- the archive question ANSWERED with reasons (coupled vs decoupled vs leave-in-place);
- the folder-separation confirmed;
- possibly a stabilization-readiness checklist.

## Goal

**Deliverable shape (Deconstruct):** the view-lifecycle doctrine — WHEN (stabilization as the canonical moment; its traverse-grade form; on-demand views unchanged), TARGETING (one concept per view), and the POST-VIEW FATE of inquiries adjudicated (archive-coupled vs decoupled vs leave-in-place, with the info-loss worry answered and the folder-separation confirmed) — as additions to the concluded protocol design. **Kinds:** lifecycle-policy design + one adjudication. **Bounds:** no information loss (the user's own bound); inquiries-folder stability; the concluded commitments intact (constitution · home · ceiling · never-cite); no build this inquiry.

**Motivations (MultiDepth WHY-axis — preserved as open):**
- **closure** — topics should end with a ceremony and a durable summary;
- **tidiness** — the growing inquiries folder feels tangled;
- **loss-aversion** — details must not disappear (the user's own mid-thought counter-motivation);
- **navigability** — the goal under both: finding a topic's current truth without wading through history.

**Context the answer needs (MQ2 — preserved as open):**
- **verdict:** the concluded 09-13 design (home ALREADY `devdocs/views/`; SUBORDINATE — findings remain the truth, strained by archiving-the-truth; the assembly/traverse split — the stabilization view maps to the traverse path); the user's own prior law ("history should stay as history") — the archive proposal tensions with it, and their mid-sentence doubt suggests they feel the tension; the house archive precedent (`devdocs/inquiries/_archive/` exists — early chains live there; engage seriously, don't dismiss); **THE UNIT-MISMATCH** — archive units are INQUIRIES, view units are CONCEPTS, inquiries entangle several concepts (the user's own observation) — archiving an inquiry on one concept's stabilization could bury its still-live concepts; operational breakage checks (grep-discovery scope; the views' per-excerpt pointers); the stabilization-judge question (who declares stabilized).
- **kinds:** a lifecycle/timing doctrine ADDITION (not a redesign); the archive question = a repo-hygiene policy distinct from the view mechanism.
- **stance:** closure-seeking; tidiness-motivated; loss-averse.

**Negative spec (MQ4):**
- any answer that loses information or makes details unreachable;
- destabilizing the inquiries folder;
- *(standing)* violating the concluded protocol's commitments; editing history; building this inquiry.

## Considered Articulations

**Item I1 — the view-lifecycle deliberation:**
1. **Closure-ceremony reading:** the stabilization view is a topic's closing act — traverse-grade, the topic's "cover page"; inquiries stay; nothing moves.
2. **Archive-coupled reading:** view generation MOVES the constituent inquiries to `_archive/` (house precedent exists) — taken seriously, with the info-loss worry engaged head-on.
3. **Decoupled reading:** views and archiving are SEPARATE decisions — archiving, if ever, is a pure storage policy on its own triggers, never a side effect of views.
4. **Confirmation reading:** the folder-separation is already the concluded design — the ask resolves to confirmation + the timing doctrine.
5. **Tiered-lifecycle reading:** topics carry states (live → stabilizing → stabilized-with-view); the view MARKS the state; nothing moves, but the state is visible.

## Scope Check

Question covers goal. The asks (timing + targeting + archive-adjudication + folder-confirmation) map onto the deliverable's parts. No widening needed.

**Specific-vs-pattern check:** the deliberation is explicitly the PATTERN (the lifecycle doctrine for ALL topics/views), with no single topic scoped.

## Layer Commitment

*(Omitted — this refines an existing protocol design's lifecycle policy; it does not redefine a discipline/protocol from scratch. The doctrine additions land with the protocol's build, which carries its own layer framing from the 09-13 finding.)*

## Synthesis Trigger

This inquiry consumes prior outputs as direct inputs — the section is required.

- `devdocs/inquiries/2026-07-03_09-13__generate_concept_view_protocol/finding.md` — commits: the protocol (two modes; assembly-grade own act + the TRAVERSE HANDOFF for synthesis; the four-condition constitution with teeth; home = `devdocs/views/<slug>/view_<date>.md`; regenerate-never-edit; the build one word away). The timing/lifecycle doctrine must EXTEND these, not contradict them.
- `devdocs/inquiries/2026-07-03_00-53__four_unconsidered_memory_paradigms_assessed/finding.md` — commits: the read-half selection lineage; the honesty conditions' origins; "history should stay as history" carried from the user's reactions.

CONCLUDE will require an `## Inherited Commitments Re-test` section. The re-tests to actually perform: does stabilization-timing contradict on-demand generation (or layer over it); does archive-coupling survive the SUBORDINATE condition (the view must never become the truth's replacement — archiving the truth away would make the copy primary, the exact inversion the constitution forbids); does the unit-mismatch kill archive-coupling independently.
