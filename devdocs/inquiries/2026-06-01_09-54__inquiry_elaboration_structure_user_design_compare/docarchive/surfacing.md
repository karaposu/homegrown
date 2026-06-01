## User Input

`devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/_branch.md` (controlling inputs: the user's proposal + the 01-37 design being corrected)

(Purpose: surface what bears on comparing the user's IE design vs the 01-37 design and reconciling them — self-containment, inputs, the user's output shape, and which 01-37 elements survive.)

---

# Surfacing Artifact — IE Structure Compare & Reconcile

**Mode:** possibility/comparison · **Entry point:** signal-first · **Territory:** explicit-bounded · **Stance:** inclusion-under-uncertainty.

## Traversal Trace

### Region A — The user's proposal (the comparison counterpart)

| # | Item | Relevance | Conf | Note |
|---|---|---|---|---|
| 1 | **Self-containment assertion** — "IE shouldn't know about other disciplines; it just elaborates with context + multilayered understanding" | **core** | HIGH | The correction; also re-asserts IE's *essence* as elaboration |
| 2 | **Inputs = project goal + original query** | **core** | HIGH | **project-goal is a first-class input** — absent in 01-37 (a real gap) |
| 3 | Output: **why the original query makes sense** (vs the project goal) = *why doing this inquiry makes sense* | **core** | HIGH | a justification output grounded in the goal |
| 4 | Output: **small-scope version + big-scope version** of the inquiry | **core** | HIGH | scope-framing as explicit dual versions |
| 5 | Output: **3 rephrasings** — simple / scope-highlighted / importance-highlighted | **core** | HIGH | the core deliverable shape |
| 6 | Output: **multi-request listing** + per-item **`how_connected_with_other_part`** | **core** | HIGH | richer than 01-37's bare parallel/sequential typing |

### Region B — The 01-37 design (being corrected)

| # | Item | Relevance | Conf | Note |
|---|---|---|---|---|
| 7 | the **"does not invoke the neighbor discipline"** Component phrasing | **core** | HIGH | the explicit flaw the user caught |
| 8 | the 01-37 **NOT-list attributed to neighbors** ("→ /sense-making", "→ /decompose", …) | **core** | HIGH | **the flaw is BROADER than #7** — naming neighbors anywhere violates self-containment (see Frontier H1) |
| 9 | 5-section sibling-template skeleton | **sub** | HIGH | survives (the section *shape* is fine; the *content* changes) |
| 10 | verify-fidelity phase (3 axes: transcription / scope-check / reference-authority) | **core** | MED | does it survive the user's "just elaborate" framing? reframe or cut (H2) |
| 11 | perceive-request-structure + request-structure verdict (single/parallel/sequential) | **sub** | HIGH | overlaps user's #6; user's "+how_connected" is richer |
| 12 | substantive-output + thin-verdict-header | **sub** | MED | the verdict-header named neighbors implicitly (spawn) — reframe |
| 13 | LAYER-2 "wrapper-fusion" guard | **sub** | MED | the guard itself referenced neighbors; re-express intrinsically |
| 14 | migration table | **side** | MED | mostly survives; verify-axes migration depends on #10's fate |

### Region C — The adjudicating principle + the fix-model

| # | Item | Relevance | Conf | Note |
|---|---|---|---|---|
| 15 | `feedback_disciplines_self_contained` (project memory) | **core** | HIGH | **the adjudicator** — "spec files must not contain outbound pointers… disciplines are individuals." The user's correction = this principle applied |
| 16 | `cognitive_harness/routelister/references/routelister.md` §1.3–1.4 NOT-list + self-containment | **core** | HIGH | **the FIX MODEL** — routelister's NOT-list grounds each exclusion in "an intrinsic feature of the operation," NEVER by naming a neighbor. This is how to re-express IE's NOT-list correctly |
| 17 | `2026-06-01_01-17` scope (object/mode; comprehend/perceive-structure/verify; upper bound) | **sub** | HIGH | the scope the structure serves; "upper bound" must now be stated intrinsically too |

### Region D — out of territory
- Process layer (pipeline placement, spawn mechanics, branch.md rewrite, gates) — confirmed-absent (next layer).
- Meaning re-litigation (is-it-a-discipline) — confirmed-absent (settled).

## State Summary

**Territory echo:** the user's proposal (A) + the 01-37 design (B) + the adjudicating self-containment principle & its fix-model (C).

**Purpose echo:** compare the two designs; reconcile into a corrected, self-contained, project-goal-aware structure.

**Coverage map:** A confirmed (6 elements). B confirmed (the flaw + what survives). C confirmed (adjudicator + fix-model #16 is the high-value find). D confirmed-absent.

**Concept-names list:**
- *intrinsic NOT-list* · coined · #16 · state exclusions by the operation's own character, never by naming a neighbor — the fix for #7/#8.
- *project-goal input* · vocabulary · #2 · a first-class IE input (new vs 01-37).
- *why-this-makes-sense* · vocabulary · #3 · justification output grounded in the goal.
- *small/big-scope versions* · vocabulary · #4.
- *three rephrasings* · vocabulary · #5 · simple / scope-highlighted / importance-highlighted.
- *how_connected_with_other_part* · vocabulary · #6 · per-sub-request connection note.
- *fidelity-as-intrinsic-quality* · coined · #10 · if verify survives, it's "the rephrasings stay faithful to original+goal," stated without naming any judging discipline.
- *elaborate-with-multilayered-understanding* · vocabulary · #1 · IE's essence per the user.

**Frontier flags (handed downstream):**
- **H1 (the big one)** — the self-containment violation is **broader than the Component phrasing (#7)**: the entire 01-37 **NOT-list names neighbors (#8)**, and the verdict-header/guard (#12/#13) lean on neighbor concepts. The fix is to re-express **all** of IE's boundaries **intrinsically** (routelister model #16): IE produces *rephrasings/framings*, not *answers/models/partitions/judgments* — said in IE's own terms, naming no one.
- **H2** — Does the verify-fidelity phase (#10) survive the user's "just elaborate" framing? Options: (a) keep as an intrinsic "faithfulness of the rephrasings to original+goal" quality; (b) demote to a quality-check, not a phase; (c) the user's model implies fidelity is *inherent in good rephrasing*, so no separate phase. Sensemaking to decide.
- **H3** — Where does the **project-goal input** enter the schema, and how does it ground the "why-makes-sense" + the scope versions?
- **H4** — Do the user's outputs (why / small-big / 3-rephrasings / connections) **map onto** the comprehend→perceive-structure phases, or **replace** the phase framing entirely with an output-shaped spec?
- **H5** — Reconcile #11 (my parallel/sequential typing) with #6 (user's list+how_connected): adopt the user's richer form; keep the parallel/sequential as an attribute on each listed request.

**Workspace-populated status:** `{populated: true, populated-at: 2026-06-01_09-54, extent: A/B/C full, D confirmed-absent}`.

## Telemetry
- Cycles: 1. Items: 17 (core 9 · sub 6 · side 1 · + 2 absent regions). Boundary-discovery: not fired.
- Failure modes checked: Missed-relevance (pulled #16 the fix-model + #8 the broader-flaw — both high-value); Over-coverage (Region D held absent); Recency-bias (n/a). 
- Self-assessment: **PROCEED with a FLAG** — the high-value find (H1: the flaw is broader than the user even said; the whole NOT-list names neighbors) should be sensemaking's first anchor. Routelister (#16) is the concrete fix-model.
