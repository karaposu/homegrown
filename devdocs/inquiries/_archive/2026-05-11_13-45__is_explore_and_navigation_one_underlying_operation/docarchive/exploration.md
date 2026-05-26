# Exploration: Is Explore-and-Navigation One Underlying Operation?

## Mode & Entry Point

**Mode: artifact** (territory is concrete: three specs, two SKILL.md files, the vision document, the prior finding). Some **possibility** for the unification-test candidate set.

**Entry: signal-first.** User provided three specific correction points + one overarching unification claim. Probe the artifacts against each correction; map the territory of unification candidates.

**Discipline applied:** Premature Evaluation in Possibility Mode guardrail. Confidence-mark candidates only; NO rejection-with-verdict-reasoning. (This is testing the just-designed failure-mode discipline in a high-stakes self-reference inquiry.)

---

## Cycle 1 — Coarse scan + verify user correction points against artifacts

| Region | What's here | Confidence |
|---|---|---|
| **R1 — Explore spec** | `homegrown/explore/SKILL.md` + `references/explore.md`: maps unknown territory; scan-signal-probe cycles; 2 modes (artifact + possibility); 6 components; 5 confidence levels; 7 failure modes; produces "confidence-tagged structural map." | Confirmed |
| **R2 — Existing /navigation spec** | `homegrown/navigation/SKILL.md` + `references/navigation.md`: **"Enumerates all possible next directions from a completed SIC cycle (or current project state)."** 16-type taxonomy; 12 route-card fields per route; "Navigation has ONE structural operation: Enumeration"; produces "navigation map" of typed routes. **Key spec text:** "If the input is raw text or project-level context: read whatever is provided and navigate from that — the map will be thinner (no critique verdicts) but still useful for strategic direction-setting." | Confirmed |
| **R3 — North-star navigation vision** | `devdocs/nav_north_star.md`: whole-codebase iterative for-loop mapping + directional local mapping; concept-nodes with status info ("how much considered; how much worked on; blocking other stuff"). Vision-not-implementation. | Confirmed |
| **R4 — Prior 13-30 diagnosis** | Dual diagnosis: R2 vs Explore = Candidate E (separate but mechanism-sharing); R3 vs Explore = Candidate F (specialization + composition). Hybrid recommendation. | Confirmed (read in full) |
| **R5 — User's three correction points** | (1) R2 can run without SIC output; (2) R2's route-cards structurally similar to R3's concept-nodes; (3) Explore and Navigation share underlying operation: concept mapping + content consumption. | Stated |
| **R6 — Verification of user correction #1** | navigation.md SKILL line 3 + spec text confirm: R2 explicitly runs on "completed SIC cycle (or current project state)." Per spec text further down: "If the input is raw text or project-level context: read whatever is provided and navigate from that — the map will be thinner..." **The OR clause is real; R2 is not strictly limited to post-SIC input. Prior 13-30 diagnosis under-weighted this.** | **Confirmed (artifact-verified)** |
| **R7 — Verification of user correction #2** | navigation.md fields: Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, WHY, Guidance mode, adaptive Guidance, Continuation note. Each route-card IS a concept-with-metadata structure. nav_north_star.md concept-nodes: directions of work with categorization + status info. **Field shape overlap is substantial — both are "concept-with-metadata" outputs.** Prior 13-30 diagnosis treated these as structurally different output types; the user's claim that they share underlying structure has support. | **Confirmed (artifact comparison)** |
| **R8 — Verification of user correction #3 (the unification claim)** | All three (Explore, R2, R3) produce concept-with-metadata outputs by consuming content. Explore consumes territory; R2 consumes SIC output OR project state; R3 consumes codebase. All produce typed/categorized concepts. The shared shape: **"enumeration-with-typing of items found by consuming content."** | Scanned (positive support; this cycle) |
| **R9 — The right level of abstraction question** | If "concept mapping + content consumption" is taken too generally, it applies to most disciplines (Sensemaking also processes content; Decomposition also enumerates pieces). The unification needs to be specific enough to distinguish Explore+Navigation from Sensemaking+Decomposition+Critique. **What specifically unifies E+N but not other disciplines?** Probe needed (Cycle 3). | Scanned (signal flagged) |
| **R10 — Candidate diagnoses** | A (full unification), B (partial unification — shared core + non-shared add-ons), C (prior diagnosis right; reframe wrong), D (unification at higher abstraction level only) + possibly E (NEW from Cycle 3). | Scanned this cycle |
| **R11 — Surround layer** | Project's discipline-design convention: each discipline has one umbrella mandate; multi-operation disciplines name their operations explicitly (Sensemaking just did this with Comprehending+Stabilizing). Unification of two disciplines is a different move from naming-operations-within-one-discipline. | Confirmed |

**Two critical artifact-level verifications this cycle:**

- **User correction #1 confirmed (R6):** the prior 13-30 diagnosis's framing "R2 takes completed SIC output" was too narrow. R2 takes "completed SIC cycle (or current project state)" — the OR clause is in the spec; the prior diagnosis under-weighted it.

- **User correction #2 confirmed (R7):** R2's route-cards and R3's concept-nodes share the concept-with-metadata structure. The prior 13-30 diagnosis framed them as "different output types"; structurally they're variations of the same output type.

---

## Cycle 2 — Signal detection

### Signal S1 — The under-weighted "or current project state" clause

R2's input scope is broader than the prior 13-30 diagnosis acknowledged. R2 can run on:
- Completed SIC cycle output (the primary case prior diagnosis focused on)
- Current project state (raw text; project-level context; current-state brief; sync brief)

When R2 runs on "current project state" rather than completed SIC output, its operation looks much more like Explore's — it's reading content (project state) and producing a map (route-cards = concept-with-metadata).

**Confidence:** Confirmed (artifact-direct). The prior diagnosis's framing under-weighted this input flexibility.

### Signal S2 — Route-cards ARE concept-with-metadata

R2's 12 route-card fields aren't a fundamentally different output schema from R3's concept-nodes. Both are:
- Identification (Direction / concept-name)
- Categorization (Type / category)
- State (Status / "how much considered")
- Reasoning (WHY / per-concept reasoning)
- Relations (Unlocks; Blocked by / blocking other stuff)
- Guidance (Guidance mode / what-to-do-with-this-concept)

The shape is concept-with-metadata in both. The 16-type taxonomy in R2 is a SCHEMA for the metadata, but the underlying object is the same.

**Confidence:** Confirmed (artifact comparison).

### Signal S3 — Explore's output is also concept-with-metadata

Explore's "structural map" produces regions (concepts) with confidence levels (metadata). Signals are concepts with detection-metadata. Frontier markers are concepts with state-metadata.

So Explore, R2, and R3 ALL produce concept-with-metadata outputs.

**Confidence:** Confirmed (artifact comparison).

### Signal S4 — All three consume content

- Explore: consumes territory (codebase / literature / etc.) to build the map
- R2: consumes SIC output OR project state to build the route-cards
- R3: consumes codebase to build the concept-nodes

All three operate by reading content and producing structured representations.

**Confidence:** Confirmed.

### Signal S5 — The unification claim has structural support at the operation-shape level

"Concept mapping + content consumption" is a real operation shape that all three instantiate. The user's claim has direct artifact-verified support.

**Confidence:** Scanned with strong positive support.

### Signal S6 — Right-level-of-abstraction concern (R9)

If the unification operation is too general, it doesn't distinguish:
- "Produce structured representation by consuming content" — applies to Sensemaking (produces SV models by consuming input ambiguity); Decomposition (produces pieces by consuming complexity); Critique (produces verdicts by consuming candidates + sensemaking output)

To make the unification specific to Explore+Navigation (and not all disciplines), need to identify what they share that other disciplines don't.

**Probe (this signal):** what makes Explore+Navigation different from Sensemaking+Decomposition+Critique?

- **Explore + Navigation:** ENUMERATE without committing. Produce maps that REPRESENT the space without choosing within it.
- **Sensemaking:** COMMITS to a stabilized interpretation. Reduces ambiguity to one stable model.
- **Decomposition:** PARTITIONS into pieces. Produces a structured division, not enumeration of forward options.
- **Critique:** EVALUATES candidates. Produces verdicts (SURVIVE/REFINE/KILL), not enumerations.

So Explore + Navigation share: **enumeration without committing / mapping the space without selecting within it / breadth coverage of typed items.**

This is more specific than "concept mapping + content consumption." It distinguishes them from other disciplines.

**Confidence:** Confirmed (cross-discipline comparison).

### Signal S7 — R2's "Navigation is a BOUNDARY discipline" framing

The navigation.md spec explicitly says: "Navigation is a BOUNDARY discipline — it operates between cognitive cycles, not within them. It looks FORWARD: given what this cycle produced, what are all the possible next directions?"

This is forward-mapping, which Explore also does (Explore maps unknown territory ahead). But the "between cognitive cycles" framing in R2 is specific — R2 is positioned in the workflow as a transition piece. Explore is positioned as upstream-of-sensemaking. Different workflow positions; same operational shape.

**Confidence:** Confirmed. The workflow positions differ; the operational shape (enumerate-typed-concepts-from-content) is shared.

### Signal S8 — The unified operation: tentative name and scope

A more-specific name for the unified operation: **"Typed Enumeration Mapping"** (TEM):
- TYPED — outputs include type/category metadata per item
- ENUMERATION — produces all items (breadth coverage), not a selection
- MAPPING — outputs are structured representations of a space, not commits within it

TEM is what Explore and Navigation share. TEM is not what Sensemaking, Decomposition, or Critique do (they have other operations).

**Confidence:** Scanned (newly-coined; needs Sensemaking to evaluate).

### Signal S9 — Prior 13-30's Candidate F was almost-right but framed wrong

Prior 13-30 diagnosis: R3 vs Explore = Candidate F (specialization + composition: Explore for codebase + assess overlay). This is close to the user's unification claim. The difference:
- Prior F: R3 is a SPECIALIZATION of Explore. Two separate things, one related to the other.
- User unification: R3 is an INSTANCE of the same underlying operation. Not specialization-of-Explore; co-instances of TEM.

The prior framing treated Explore as the "parent" and R3 as the "child" specialization. The user's framing treats them as siblings, both instantiating the same underlying operation. Different relationship.

**Confidence:** Confirmed (re-framing of the prior diagnosis).

### Signal S10 — Operational consequence space

If the unification holds, operational paths include:

- **U1 — Consolidate** Explore and Navigation into one discipline with multiple modes (Explore-mode for unknown territory; Navigation-mode for forward enumeration from current state). One discipline; multiple modes.
- **U2 — Recognize-in-spec** the shared TEM operation in BOTH spec files (`explore.md` and `navigation.md`), without consolidating files. Each discipline explicitly states it instantiates TEM with specific scope. Cross-references.
- **U3 — Lift TEM into a project-pattern document** without changing either discipline. The unification is documented at the meta-level; the implementations stay distinct.
- **U4 — Refactor** to extract a shared base discipline (TEM) that Explore and Navigation specialize. Most invasive; potentially clean structurally.

Each has trade-offs.

**Confidence:** Scanned (operational paths enumerated; Sensemaking adjudicates).

---

## Cycle 3 — Resolution decision

Zoom in on R10 (candidate diagnoses) with the new TEM observation (S8) in mind. Other regions are confirmed.

---

## Cycle 4 — Probe R10 (candidate diagnoses) with confidence levels

### Candidate A — Full unification (Explore = R2 = R3, all instances of one operation)

- *Evidence supporting:* all three produce concept-with-metadata by consuming content; all three are TEM-shape; user's unification claim is direct.
- *Evidence not fully supporting:* the prior 13-30 diagnosis identified real surface differences (different inputs; different schemas; different purposes-of-application). Full unification dismisses these as evolutionary noise; partial unification (B) treats them as meaningful add-ons. Whether they're noise or meaningful is the question.
- *Confidence:* **Scanned with strong positive support.** Sensemaking should adjudicate against B.

### Candidate B — Partial unification (shared TEM core + non-shared add-ons)

- *Evidence supporting:* shared TEM core verified (S5, S8). Non-shared add-ons:
  - Explore: artifact vs possibility modes; 5 confidence levels; 7 failure modes
  - R2: 16-type taxonomy; 12 route-card fields; Freshness Preflight; "BOUNDARY between cycles" framing
  - R3: whole-codebase + directional sub-cases; assess overlay (work-status)
  Each has add-ons the others don't have. These could be evolutionary noise (Candidate A view) or meaningful structural elaborations (Candidate B view).
- *Confidence:* **Scanned with positive support.** The add-ons exist; whether they're structural or evolutionary is the question for Sensemaking.

### Candidate C — Prior diagnosis right; user's reframe wrong

- *Evidence supporting:* the prior 13-30 diagnosis identified real structural differences.
- *Evidence undercutting:* the prior diagnosis under-weighted R2's "or current project state" input (user correction #1; verified at R6). The prior diagnosis treated route-cards and concept-nodes as different output types (user correction #2; not supported by artifact comparison at R7). The prior framing missed the shared TEM operation (S5, S8).
- *Confidence:* **Scanned with significant counter-evidence.** The prior diagnosis had real observations but framed them wrong. Sensemaking should re-evaluate.

### Candidate D — Unification at higher abstraction level only (conceptual unification; implementations distinct)

- *Evidence supporting:* if the unified operation (TEM) is at a conceptual level, the implementations of Explore and Navigation can still differ in schemas, inputs, and outputs without violating the unification. This is a middle-ground position.
- *Evidence:* this is similar to Candidate B (partial unification) but emphasizes that the unification is conceptual, not implementation-level.
- *Confidence:* **Scanned.** Overlaps with B.

### Candidate E — NEW (from this cycle): unification + workflow-position-differentiation

A new candidate: maybe the unification holds at the OPERATION level (TEM) but the DIFFERENTIATION between Explore and Navigation is at the WORKFLOW POSITION level. Per R2's spec: "Navigation is a BOUNDARY discipline — it operates between cognitive cycles." Explore is positioned upstream of Sensemaking. They share TEM as their operation but apply it at different workflow positions for different purposes.

If true, this is closer to Candidate B (partial unification) but with the workflow-position differentiation being the structural separateness (rather than schemas or inputs).

- *Confidence:* **Scanned (new candidate; emerged from Signal S7).**

---

## Cycle 5 — Jump scan: any candidate I haven't enumerated?

**Jump-scan question:** is there a candidate where the unification claim COMPLETELY DISSOLVES the prior diagnosis — i.e., the entire 13-30 inquiry was wrong-headed and the right answer is "Explore and Navigation are one discipline, full stop"?

**Probe:** if Explore and Navigation are truly one operation, then keeping them as two disciplines with two spec files is wasteful redundancy. The right move would be to consolidate (Candidate A's U1 operational path).

But: the project's discipline structure already accommodates multi-mode disciplines (Explore has artifact + possibility modes; Sensemaking now has Comprehending + Stabilizing operations). So consolidation isn't a foreign move.

**Candidate F — NEW (from jump scan): the disciplines are one TEM discipline that got grown twice under different names due to historical accident.** The right diagnosis is full unification + consolidation (Candidate A + U1 operational path).

- *Evidence supporting:* if shared TEM is real, two separate implementations is structurally inefficient.
- *Evidence against:* the disciplines have real schema differences (16-type taxonomy; 12 route fields; assess overlay) that may not collapse cleanly into one merged spec.
- *Confidence:* **Scanned.** Most aggressive unification candidate; Sensemaking adjudicates.

---

## Cycle 6 — Convergence assessment

**Frontier stability:** the candidate set grew from initial 4 (A, B, C, D) to 6 (added E and F during cycles). Other candidates would be variations.

**Discovery rate:** declining. The candidate space is mapped.

**Bounded gaps:** the remaining unknowns are which candidate Sensemaking commits to and what the operational consequence looks like.

**Convergence: REACHED.**

---

## Final Deliverable — Structural Map

### Territory Overview

| Region | Resolution | Confidence | Major content |
|---|---|---|---|
| R1 — Explore spec | Fine | Confirmed | Produces confidence-tagged structural map; 2 modes; 6 components; 7 failure modes |
| R2 — Existing /navigation spec | Fine | Confirmed | **Runs on completed SIC cycle OR current project state; produces concept-with-metadata route-cards; "one structural operation: Enumeration"; BOUNDARY discipline between cycles** |
| R3 — North-star navigation vision | Fine | Confirmed | Whole-codebase + directional mapping; concept-nodes with status info; vision-not-implementation |
| R4 — Prior 13-30 diagnosis | Confirmed | Confirmed | Dual diagnosis (R2 = E; R3 = F); Hybrid recommendation |
| R5 — User correction points | Stated | Stated | Three points + unification claim |
| R6 — Correction #1 verified | Fine | **Confirmed (artifact-verified)** | R2 explicitly takes "or current project state" — prior diagnosis under-weighted |
| R7 — Correction #2 verified | Fine | **Confirmed (artifact comparison)** | Route-cards and concept-nodes share concept-with-metadata structure |
| R8 — Correction #3 / unification claim | Fine | Scanned (strong positive) | All three produce concept-with-metadata by consuming content |
| R9 — Abstraction-level concern | Fine | Probed | TEM-specific abstraction distinguishes E+N from other disciplines |
| R10 — Candidate diagnoses | Fine | Per-candidate confidence | A, B, C, D, E, F enumerated |
| R11 — Surround layer | Coarse | Confirmed | Project convention; multi-mode disciplines are allowed |

### Inventory — Candidate diagnoses with confidence levels (no rejection)

| Candidate | What it says | Confidence | Notes |
|---|---|---|---|
| **A — Full unification** | Explore = R2 = R3 (all instances of one operation: TEM) | Scanned (strong positive) | User's claim |
| **B — Partial unification** | Shared TEM core + non-shared add-ons | Scanned (positive) | Middle ground |
| **C — Prior diagnosis right** | R2 vs Explore = E; R3 vs Explore = F | Scanned (significant counter-evidence) | Prior 13-30 conclusion |
| **D — Conceptual unification only** | Operation-level unified; implementation-level distinct | Scanned | Overlaps with B |
| **E — Unification + workflow-position differentiation (NEW)** | Shared TEM operation; differentiated by workflow position | Scanned | Suggests both unification AND meaningful structural differentiation |
| **F — Full unification + historical-accident-of-two-disciplines (NEW, jump-scan)** | Should consolidate; the two disciplines exist due to growth, not structure | Scanned | Most aggressive unification candidate |

### Signal Log

| Signal | Status |
|---|---|
| S1 — "or current project state" in R2's spec under-weighted by prior diagnosis | Confirmed |
| S2 — Route-cards = concept-with-metadata (same as R3's concept-nodes) | Confirmed |
| S3 — Explore's output is also concept-with-metadata | Confirmed |
| S4 — All three consume content | Confirmed |
| S5 — Unification has structural support at operation-shape level | Confirmed (strong positive) |
| S6 — Right-level-of-abstraction concern; TEM-specific scope distinguishes E+N from other disciplines | Confirmed |
| S7 — R2's "BOUNDARY discipline" framing positions it differently than Explore but operation-shape is shared | Confirmed |
| S8 — TEM as candidate name for the unified operation | Scanned (loop-coined) |
| S9 — Prior 13-30's Candidate F was almost-right but framed the relationship as specialization rather than co-instance | Confirmed |
| S10 — Operational paths if unification holds: U1 consolidate / U2 recognize-in-spec / U3 lift-to-project-pattern / U4 refactor-to-shared-base | Scanned |
| Jump-scan F — Full unification + consolidation as the maximally-unification path | Scanned |

### Confidence Map

- R1-R4: Confirmed.
- R5: Stated.
- R6, R7: **Confirmed (artifact-verified)** — the user's correction points #1 and #2 are directly supported.
- R8: Scanned with strong positive support (correction #3).
- R9-R11: Confirmed or Scanned per the per-region details above.
- R10 (candidates): per-candidate confidence; Sensemaking adjudicates.

### Frontier State

**Stable** at the resolution needed for Sensemaking. The candidate space is mapped; the user's correction points are artifact-verified; the prior 13-30 diagnosis is under significant counter-evidence (specifically: framing under-weighted R2's input flexibility and over-distinguished output types).

### Gaps and Recommendations

**Remaining gaps (bounded):**

- **G1 — Which candidate(s) Sensemaking should commit to.** The prior 13-30 diagnosis (Candidate C) has significant counter-evidence. The user's unification (A or B) has strong positive support. Sensemaking adjudicates between A (full unification), B (partial), and the new E (unification + workflow-position differentiation).
- **G2 — Is TEM the right name for the unified operation?** It's loop-coined; the user proposed "concept mapping + content consumption" which is more specific to the user's framing. Sensemaking should decide on naming.
- **G3 — Which operational path** (U1 consolidate; U2 recognize-in-spec; U3 lift-to-project-pattern; U4 refactor-to-shared-base) is preferred. Depends on Sensemaking's commitment to A vs B vs E.
- **G4 — Does the prior 13-30 finding need to be revised, superseded, or refined?** This inquiry's verdict will determine.

**Recommendations for next discipline (Sensemaking):**

- Adjudicate among A, B, E (the unification candidates) and C (prior diagnosis). The artifact verifications at R6, R7 should be load-bearing.
- Test TEM as the unified operation name; consider user-language alternatives.
- Apply FEC meta-application to test self-reference (this inquiry is re-examining a prior diagnosis using the same disciplines that produced it).
- Note that this inquiry honors user correction points but adjudicates structurally — the user's framing has support but the EXACT level of unification (full vs partial vs unified-with-workflow-differentiation) is a structural question Sensemaking decides.
- Stay within Sensemaking's mandate (ambiguity-resolution shape; no KILL-shape verdicts).
- Apply the Comprehending+Stabilizing two-operation naming explicitly: Phases 1-2 = Comprehending; Phases 3-5 = Stabilizing.
