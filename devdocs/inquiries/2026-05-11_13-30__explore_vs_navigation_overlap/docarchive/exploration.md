# Exploration: Explore vs Navigation — Why the Overlap?

## Mode & Entry Point

**Mode: hybrid (artifact + possibility).** Artifact: scan the actual specs (`homegrown/explore/SKILL.md` + `homegrown/explore/references/explore.md`; `homegrown/navigation/SKILL.md` + `homegrown/navigation/references/navigation.md`; `devdocs/nav_north_star.md`; the navigation-audit finding). Possibility: enumerate candidate diagnoses for the overlap relationship.

**Entry: signal-first.** The user provided a specific signal (overlap is real; want to know why) and a candidate hypothesis ("navigation = explore + assess?").

**Discipline applied:** the just-designed Premature Evaluation in Possibility Mode guardrail. I will mark candidate diagnoses with confidence levels (Confirmed / Scanned / Inferred / Unknown / Confirmed absent) only. **NO rejection-with-verdict-reasoning of candidates in this output.** Sensemaking will adjudicate.

---

## Cycle 1 — Coarse scan: territory regions

| Region | What's here | Confidence |
|---|---|---|
| **R1 — Explore spec** | `homegrown/explore/SKILL.md` + `references/explore.md` (333 lines): scan-signal-probe cycles; 2 modes (artifact + possibility); 6 components (Scan, Signal Detection, Probe, Resolution Management, Frontier Tracking, Confidence Mapping); 5 confidence levels; 7-step exploration cycle; 6 failure modes (+1 just added: Premature Evaluation in Possibility Mode). Map of unknown territory. | Confirmed |
| **R2 — Current Navigation spec (existing implementation)** | `homegrown/navigation/SKILL.md` + `references/navigation.md` (483 lines): post-SIC route enumeration; 16-type taxonomy (3 categories: content / process / context-directed); 12 route-card fields per route; 6-step process (Read → Assign Types → Allocate Guidance → Assess Priority/Confidence → Check Excluded → Format the Map); 6 failure modes; Freshness Preflight at Step 0; warming files. **Operates on a COMPLETED SIC cycle or current project state** — not on the codebase as territory. | Confirmed |
| **R3 — North-star Navigation vision** | `devdocs/nav_north_star.md` (the vision document just rephrased): whole-codebase iterative for-loop mapping (10 → 50-100 → 200 concept-nodes across rounds); directional local-artifact mapping (point at source files; produce local md files); future UI vision (click + intent → MVL loops do work + navigation maps as it goes). **Operates on the CODEBASE as territory** in the whole-codebase case. | Confirmed |
| **R4 — Navigation audit** | `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`: 16-type taxonomy CANONICAL (Category E); 12 route fields Tier-1 challenge candidate (D2); Category I warming CANONICAL precondition. These are all about the **existing** Navigation, not the north-star vision. | Confirmed |
| **R5 — Two navigations** | Existing /navigation (R2) and north-star navigation (R3) describe **different operations** on **different territories**. They share the name "navigation" but their actual work is structurally different. | Confirmed (this cycle) |
| **R6 — Candidate diagnoses** | A (redundancy), B (specialization), C (composition: Explore + Assess), D (schema-overlay), E (separate but mechanism-sharing), F (specialization + composition), plus possibly G (NEW — two navigations being conflated) and H (NEW — north-star vision is Explore-applied-to-codebase that the user happens to call navigation) | Scanned this cycle |
| **R7 — Surround layer (discipline-design conventions)** | Project disciplines (E, S, D, I, C) each have one clear mandate; overlap is structurally a concern (per the just-completed inquiry on Exploration overreach into Critique); naming conventions consistent across folders + skills + pipeline positions. | Confirmed |

**Critical observation in R5:** the user's `_branch.md` framed the overlap question as between "Explore" and "Navigation." But within "Navigation" itself there are TWO things — the existing /navigation discipline (R2; post-SIC route enumeration) and the north-star vision (R3; whole-codebase + directional mapping). The overlap with Explore differs sharply between these two:

- **Existing /navigation (R2) vs Explore (R1):** structurally different operations on structurally different inputs. Low overlap.
- **North-star navigation (R3) vs Explore (R1):** structurally similar operations on structurally similar territory (codebase as artifact). High overlap.

The user's puzzlement is most likely about R3 (north-star vision), not R2 (existing implementation). This is a load-bearing distinction the candidate set needs to handle.

---

## Cycle 2 — Signal detection

### Signal S1 — The two-navigations distinction (territory observation, not evaluation)

Per R5: there are two things called "navigation" in the project. The existing one (R2) and the vision (R3). The user's overlap concern is most naturally about R3 because:
- The /branch.md quoted the iterative for-loop staged structure (which is in nav_north_star.md, R3) — not the post-SIC route-card enumeration (which is in the existing spec, R2).
- The user's framing of "explore + assess" maps more naturally to R3's "whole-codebase concepts + status info" than to R2's "post-SIC route cards."

**Confidence on the two-navigations distinction:** Confirmed. (Direct artifact comparison.)

### Signal S2 — Existing /navigation's distinctive operations

Per R2, the existing /navigation has operations Explore doesn't have:
- Input: a completed SIC cycle output (or current project state) — not territory to be mapped
- Output: route-cards with 12 fields each (Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, Why this route exists, Guidance mode, adaptive Guidance, Continuation note)
- 16-type taxonomy (content-directed / process-directed / context-directed) — schema specific to "what to do next" from completed work
- Freshness Preflight (Step 0) — context-staleness check before treating input as authoritative

**These operations are NOT in Explore.** The existing /navigation is a specialized post-inquiry route-decision discipline.

**Confidence:** Confirmed. (Direct spec comparison.)

### Signal S3 — North-star navigation's overlap with Explore

Per R3, north-star navigation describes:
- Whole-codebase iterative for-loop mapping (10 → 50-100 → 200 concept nodes)
- Directional local mapping (point at source files; produce local artifacts)
- The iterative staging is structurally identical to Explore's scan-signal-probe at multiple resolutions.

**Compared to Explore's spec (R1):**
- Both iterate at multiple resolutions ✓
- Both produce maps with confidence levels (north-star uses categories like "status of concept; how much considered" which is confidence-like) ✓
- Both work on codebases (Explore: "codebases, solution spaces, business landscapes"; north-star: codebase explicitly) ✓
- Both enumerate concepts/directions ✓
- Both stage to manage LLM output limits ✓

**Confidence:** Confirmed (the overlap is structurally substantial).

### Signal S4 — What north-star navigation has that Explore doesn't (potential "add-on" candidates)

Per R3 directional case: north-star navigation produces local artifacts with:
- "Categorize the concepts"
- "Status of this concept, how much they were kind of considered, how much they've been working on. ...are they kind of blocked other stuff"
- "The 12 or 16 categories" reference (likely the existing /navigation schema)

These are ASSESS-like operations (status; blockage; consideration level) layered on top of the mapped concepts.

**Confidence:** Scanned. The "assess overlay" candidate (Candidate C from _branch.md) has artifact-level support in R3's directional case.

### Signal S5 — The schema overlay candidate

Per R4 (navigation audit): the 16-type taxonomy and 12 route fields are canonical for the existing /navigation. North-star navigation references "the 12 or 16 categories" — possibly inheriting the schema.

If the schema is what makes north-star navigation distinct from Explore (rather than the assess overlay), Candidate D (schema-overlay) gains support.

**Confidence:** Scanned. The schema is part of the existing /navigation; whether north-star inherits the schema or not is ambiguous in the vision document.

### Signal S6 — The specialization candidate

Per R1: Explore explicitly says it works on "codebases, solution spaces, business landscapes, research fields" — i.e., codebases are listed as one of multiple territory types. North-star navigation works specifically on the codebase-as-work-direction-territory.

If north-star navigation is Explore specialized to one specific territory type (codebases viewed through a work-direction lens), Candidate B (specialization) gains support.

**Confidence:** Scanned. The territory specialization is plausible but underdetermined without more analysis.

### Signal S7 — Pipeline position of each discipline

- Explore sits at pipeline position 1 in /MVL+ (E → S → D → I → C). Used "before sensemaking can begin."
- Existing /navigation sits POST-SIC (after critique). Used "when an inquiry has just completed and the user needs to decide what to do next."
- North-star navigation sits... where? Not clearly placed in the existing pipeline. Could be pre-inquiry (codebase survey to inform inquiry framing) or independent (whole-codebase mapping is its own work).

**Confidence:** Scanned. The pipeline-position question is open for north-star navigation.

### Signal S8 — Two-navigations conflation candidate (G)

This is a new candidate not in the _branch.md list. The structural observation:

The user's question framed "Navigation" as a single thing. But the territory contains two things (R2 + R3). The "overlap with Explore" concern applies mostly to R3 (the vision), not to R2 (the existing implementation). 

**Possible diagnosis G:** the overlap exists because **the term "Navigation" in the project covers two different operations** — the existing post-SIC route enumeration (R2) which doesn't overlap with Explore, and the north-star vision (R3) which heavily overlaps with Explore. The overlap question becomes: "should R3 even be called Navigation, or should it be Explore-applied-to-codebases-with-some-additions?"

**Confidence:** Scanned (new candidate; emerged from territory observation).

### Signal S9 — Pipeline-structural framing for north-star navigation

The north-star vision describes navigation as an OPERATION that happens potentially before, during, or after inquiry work. It doesn't fit neatly into the E→S→D→I→C pipeline shape. This is similar to how the existing /navigation runs POST-SIC.

**Possible new candidate H:** north-star navigation isn't a discipline in the E→S→D→I→C pipeline sense at all — it's a **codebase-survey operation** that can be invoked separately, and its overlap with Explore is because Explore's artifact-codebase use case IS this operation. The user's vision for navigation might be reimplementing Explore's codebase use case under a new name.

**Confidence:** Scanned (new candidate; jump-scan).

---

## Cycle 3 — Resolution decision

Zoom in on the candidate-diagnosis space (R6) with the new candidates G and H included. The other regions are confirmed; further probing of them would be re-exploration.

---

## Cycle 4 — Probe R6 (candidate diagnoses) with the two-navigations observation in mind

I will mark each candidate with confidence levels. **No rejection here.** Sensemaking adjudicates.

### Candidate A — Genuine redundancy between Navigation and Explore

The two disciplines do the same thing; one should be merged.

- *Evidence supporting:* north-star navigation's whole-codebase iterative for-loop structure (R3) is operationally close to Explore's iterative scan-signal-probe at multiple resolutions (R1).
- *Evidence against:* the existing /navigation (R2) does post-SIC route enumeration — operationally distinct from Explore. Calling them "redundant" requires choosing which Navigation we mean. R3 vs Explore has more overlap; R2 vs Explore has less.
- *Confidence:* **Scanned.** Applicability depends on R3 vs R2 distinction.

### Candidate B — Specialization: Navigation is a domain-specific mode of Explore (codebase work-direction territory)

- *Evidence supporting:* Explore's spec explicitly lists codebases as one of multiple territory types. North-star navigation specializes to codebases viewed through work-direction lens.
- *Evidence supporting (further):* the iterative-staging mechanism is shared.
- *Evidence not yet probed:* whether the project's discipline-design convention supports having specializations of a discipline as separate disciplines (vs as modes of one).
- *Confidence:* **Scanned with positive support.** Plausible diagnosis especially for R3.

### Candidate C — Composition: Navigation = Explore + Assess (work-status overlay)

- *Evidence supporting:* R3's directional case includes "status of concept; how much considered; how much worked on; blocking other stuff." These are assess-like operations Explore doesn't formally have.
- *Evidence supporting (R2):* existing /navigation includes "Priority, Status, Blocked by, Continuation note" — also assess-like fields.
- *Evidence neutral:* whether the assess overlay is the distinguishing feature, or whether it's incidental to a broader specialization.
- *Confidence:* **Scanned with positive support.** The assess overlay is real in both R2 and R3.

### Candidate D — Schema-overlay: Navigation = Explore + Project Schema (16-type taxonomy; 12 route fields)

- *Evidence supporting:* the existing /navigation has explicit 16-type taxonomy + 12 route fields per audit. North-star navigation references "the 12 or 16 categories" possibly inheriting the schema.
- *Evidence neutral:* the schema is specific to R2; whether R3 fully inherits it isn't clear in the vision document.
- *Confidence:* **Scanned.** Applies more strongly to R2 than to R3.

### Candidate E — Separate but mechanism-sharing

- *Evidence supporting:* iterative scan-probe-style mechanism is shared, but the disciplines could be conceptually separate (different purposes; different outputs).
- *Evidence against:* for R3, the purposes look quite similar to Explore's purposes.
- *Confidence:* **Scanned.** More plausible for R2 vs Explore than for R3 vs Explore.

### Candidate F — Specialization + Composition (combination of B + C, possibly + D)

- *Evidence supporting:* if both specialization (B) and assess overlay (C) hold, F captures both.
- *Confidence:* **Inferred from B + C.** Applies most strongly to R3.

### Candidate G — Two-navigations conflation (NEW)

The term "Navigation" in the project covers two structurally different operations (R2 and R3). The overlap with Explore concentrates in R3; R2 is genuinely distinct.

- *Evidence supporting:* direct artifact comparison (R5 observation).
- *Evidence:* the user's framing in _branch.md quoted the nav_north_star.md iterative staging text — pointing at R3, not R2.
- *Confidence:* **Confirmed.** Direct artifact observation; the two navigations exist; they have different operations.

### Candidate H — North-star navigation is Explore-applied-to-codebases-with-additions (NEW, jump-scan)

R3 might be conceptually Explore for codebases, possibly with an assess overlay and/or schema, but fundamentally an Exploration use case rather than a separate discipline.

- *Evidence supporting:* the iterative for-loop structure in R3 reads as Explore's resolution-progression (Coarse Scan → Targeted Probes → Fine Scan) applied to codebases.
- *Evidence supporting:* Explore's spec already lists codebases as territory.
- *Evidence neutral:* whether the user thinks of the vision as "a navigation discipline" or as "what Explore should do for codebases" — different framings lead to different operational consequences.
- *Confidence:* **Scanned.** Plausible especially for the whole-codebase case in R3.

---

## Cycle 5 — Jump scan: any candidates the named eight miss?

**Jump-scan question:** is there a structural framing the candidates A-H don't capture?

**Probe:** what if the overlap isn't a problem to solve but a HEALTHY redundancy — two disciplines with deliberately overlapping reach (one general; one specialized) coexisting in the project's discipline system because that's how the disciplines were grown organically?

**Candidate I — Healthy organic overlap (NEW, jump-scan):** the overlap is a natural consequence of disciplines being developed independently; some redundancy is acceptable; no fix needed. The disciplines coexist with overlapping reach; users invoke whichever fits the moment.

- *Evidence supporting:* the project has multiple disciplines that share mechanism (Sensemaking and Innovation both do iterative work; Decomposition and Sensemaking both stabilize understanding); some overlap is precedent.
- *Evidence against:* the user is asking BECAUSE the overlap feels uncomfortable, which suggests at least some friction.
- *Confidence:* **Scanned.** Should be considered alongside the others; Sensemaking adjudicates.

**Another probe:** what if the answer depends on a question outside the candidate set — namely, **whether R3 (the north-star vision) is going to be implemented as a separate discipline or as an extension of /navigation or as a use case of /explore**? The user has a vision for what they want; the implementation path determines which overlap-diagnosis applies.

**Candidate J — Implementation-path-dependent (NEW):** the right diagnosis depends on an implementation choice the user hasn't made yet. If R3 is built into /navigation, the overlap with Explore deepens; if R3 is built into /explore as a codebase-mode, /navigation stays specialized to post-SIC routes; if R3 is built as a separate discipline, all three coexist.

- *Confidence:* **Scanned.** Surface this as an open question; Sensemaking should consider whether implementation choice is needed for the diagnosis.

---

## Cycle 6 — Convergence assessment

**Frontier stability:** the candidate set grew from 6 (A-F in _branch.md) to 10 (added G, H, I, J during exploration). Cycles 4 and 5 enumerated each with confidence levels. No further candidates emerged in Cycle 5's jump-scan beyond I and J.

**Discovery rate:** declining. The initial signal (overlap is real) is confirmed; the territory observation (two-navigations distinction) is confirmed; the candidate space is mapped.

**Bounded gaps:** the remaining unknowns are which candidate(s) Sensemaking should commit to, and whether the implementation-path question (Candidate J) needs to be answered first. These are bounded by the enumerated candidate set.

**Convergence: REACHED.**

---

## Final Deliverable — Structural Map

### Territory Overview

| Region | Resolution | Confidence | Major content |
|---|---|---|---|
| R1 — Explore spec | Fine | Confirmed | Map of unknown territory; 2 modes; 6 components; 5 confidence levels; 7 failure modes (including just-added Premature Evaluation in Possibility Mode) |
| R2 — Current /navigation (existing) | Fine | Confirmed | Post-SIC route enumeration; 16-type taxonomy; 12 route fields; 6-step process; Freshness Preflight; operates on completed SIC cycle |
| R3 — North-star navigation (vision) | Fine | Confirmed | Whole-codebase iterative mapping + directional local mapping + future UI; operates on codebase as territory |
| R4 — Navigation audit | Coarse | Confirmed | 16-type canonical; 12 fields T1; warming canonical — all about R2, not R3 |
| R5 — Two-navigations distinction | Fine | Confirmed | R2 and R3 describe different operations on different territories; user's overlap concern concentrates in R3 |
| R6 — Candidate diagnoses | Fine | Per-candidate (scanned/confirmed below) | A-F from _branch + new G, H, I, J |
| R7 — Surround layer | Coarse | Confirmed | Each project discipline has one clear mandate; overlap is a coherence concern |

### Inventory — Candidate diagnoses with confidence levels (no rejection)

| Candidate | What it says | Confidence | Applicability |
|---|---|---|---|
| **A — Genuine redundancy** | Navigation and Explore do the same thing; merge needed | Scanned | Depends on R3 vs R2 |
| **B — Specialization** | Navigation is domain-specific mode of Explore | Scanned (positive support) | Strong for R3 |
| **C — Composition (Explore + Assess)** | Navigation adds work-status overlay | Scanned (positive support) | Strong for both R2 and R3 |
| **D — Schema-overlay** | Navigation adds 16-type taxonomy + 12 fields | Scanned | Strong for R2; partial for R3 |
| **E — Separate but mechanism-sharing** | Two disciplines genuinely separate; share iterative mechanism | Scanned | Strong for R2 vs Explore; weaker for R3 vs Explore |
| **F — Specialization + Composition** | Combination of B and C | Inferred from B + C | Strong for R3 |
| **G — Two-navigations conflation (NEW)** | "Navigation" covers two structurally different operations (R2 + R3); overlap concentrates in R3 | **Confirmed** | The territory observation is direct |
| **H — North-star navigation is Explore-applied-to-codebases (NEW)** | R3 is structurally Explore's codebase use case, possibly with assess overlay | Scanned | Strong for R3's whole-codebase mode |
| **I — Healthy organic overlap (NEW, jump-scan)** | Overlap is natural project growth; no fix needed | Scanned | Possible at the project-pattern level |
| **J — Implementation-path-dependent (NEW)** | Right diagnosis depends on whether R3 is built into /navigation, /explore, or as separate discipline | Scanned | Meta-question that may need answering first |

### Signal Log

| Signal | Status |
|---|---|
| S1 — Two-navigations distinction (R5) | Confirmed |
| S2 — Existing /navigation's distinctive operations (R2 vs R1) | Confirmed |
| S3 — North-star navigation's overlap with Explore (R3 vs R1) | Confirmed |
| S4 — Assess overlay candidate (R3 directional case) | Scanned with positive support |
| S5 — Schema overlay candidate (R2 + possibly R3) | Scanned |
| S6 — Specialization candidate (R3 vs R1) | Scanned with positive support |
| S7 — Pipeline position varies across the three (R1 / R2 / R3) | Scanned |
| S8 — Two-navigations conflation (G) | Confirmed |
| S9 — North-star navigation as Explore-with-additions (H) | Scanned |
| Jump-scan I — Healthy organic overlap | Scanned |
| Jump-scan J — Implementation-path-dependent | Scanned |

### Confidence Map

- R1, R2, R3, R4: Confirmed.
- R5 (two-navigations): Confirmed — direct artifact observation.
- R6: per-candidate per the table above.
- R7: Confirmed.

### Frontier State

**Stable** at the resolution needed for Sensemaking. The candidate space is mapped; the territory observation (R5: two-navigations) is the load-bearing discovery to hand off.

### Gaps and Recommendations

**Remaining gaps (bounded):**

- **G1 — Which candidates Sensemaking should commit to.** The candidate set is broader than _branch.md anticipated; Sensemaking adjudicates with the R5 observation as a primary constraint.
- **G2 — Whether the two navigations (R2 and R3) should be analyzed separately.** R2 vs Explore has different overlap profile than R3 vs Explore.
- **G3 — Whether Candidate J's implementation-path question must be answered before diagnosis can commit.** Or whether the diagnosis can be implementation-path-agnostic.
- **G4 — The user's intent for what "navigation" should mean** — does the user think of /navigation as fundamentally the R2 thing (post-SIC route enumeration) extended with R3 features, OR as the R3 thing with the R2 features as a sub-mode, OR as two different things that happen to share a name?

**Recommendations for next discipline (Sensemaking):**

- Sensemaking should resolve the R2-vs-R3 distinction explicitly — the diagnosis differs depending on which Navigation we mean. The user's question is most naturally about R3 (the vision); the existing /navigation (R2) is a separate concern.
- Apply Frame-exit Completeness meta-application: do the candidate diagnoses A-J fully cover the territory? Is there a referent in the project that the frame is missing?
- Apply specific-vs-pattern: the user's specific concern is the explore-vs-navigation overlap; the broader pattern is "how disciplines with overlapping mandates should be structured" (similar to the prior is-sensemaking-one-or-multiple inquiry).
- Consider whether Candidate J (implementation-path-dependent) is the load-bearing meta-question — i.e., does the diagnosis need to know the user's implementation intent before committing?
- Stay within Sensemaking's mandate (ambiguity resolution; structural-grounds testing); don't apply Critique-style verdicts.
