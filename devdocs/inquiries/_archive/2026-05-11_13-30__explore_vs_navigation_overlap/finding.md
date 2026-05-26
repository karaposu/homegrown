---
status: active
diagnoses: explore_vs_navigation_overlap
affects_spec: homegrown/explore/references/explore.md AND/OR homegrown/navigation/references/navigation.md AND/OR devdocs/nav_north_star.md (depending on user's chosen path)
---

# Finding: Explore vs Navigation — Why the Overlap?

## Question

From `_branch.md`: the user observed that `/explore` (mapping unknown territory through scan-signal-probe cycles) and `/navigation` (per `nav_north_star.md`: whole-codebase iterative for-loop mapping + directional local mapping) feel substantially overlapping. **Why does the overlap exist? Is navigation = "explore + assess"? Is it a specialization of explore? A schema-overlay? Or are they genuinely separate?** What's the operational consequence?

## Finding Summary

- **The answer is a dual diagnosis plus an umbrella explanation.** The term "Navigation" in the project actually covers TWO structurally different operations — call them **R2** (the existing `/navigation` discipline at `homegrown/navigation/`, which does post-SIC route enumeration with a 16-type taxonomy and 12 route fields) and **R3** (the north-star navigation vision at `devdocs/nav_north_star.md`, which describes whole-codebase iterative mapping + directional local mapping; not yet implemented). The overlap concern with `/explore` concentrates in R3, not R2.

- **R2 vs Explore = "separate but mechanism-sharing."** Both disciplines use iterative work, but on different inputs (R2 takes a completed SIC cycle output; Explore takes territory to map), for different purposes (R2: decide what next; Explore: map what exists), producing different outputs (R2: route-cards with 12 fields across 16 types; Explore: confidence-tagged structural map). R2 and Explore are genuinely separate disciplines that share only the iterative-staging mechanism.

- **R3 vs Explore = "specialization + composition."** R3 specializes Explore to codebase-as-work-direction-territory (Explore's spec already lists codebases as territory; R3 narrows to codebases viewed through a work-direction lens). R3 also adds an **assess overlay** — work-status fields like "how much considered," "how much worked on," "blocking other stuff" — that Explore doesn't formally produce. The user's intuition that "navigation = explore + assess" was correct for R3, refined with the specialization claim.

- **The umbrella explanation is two-navigations conflation.** The user was reading both R2 and R3 under one name and recognizing Explore's territory-mapping work in R3 (the vision). The puzzlement was real and explainable: the conflation hid the structural distinction between the two operations.

- **The diagnosis is implementation-path-independent.** The structural verdict (R2 = E; R3 = F; umbrella = G) holds regardless of where R3 gets implemented. The user's operational choice (below) doesn't change what R3 IS structurally.

- **Five operational paths are viable for R3** (R2 stays as-is in all options). Soft recommendation: **Hybrid** (technical home Explore + colloquial "navigation" naming preserved). See Section 4.

## Finding

The user has been working through a series of inquiries that audit the project's discipline structure. Recent inquiries have diagnosed Sensemaking's internal structure (two operations: Comprehending + Stabilizing) and Exploration's mandate boundary against Critique (a new failure mode adopted/pending). This inquiry continues that pattern — diagnosing the Explore-vs-Navigation overlap that the user noticed when reading the just-rephrased `nav_north_star.md` vision document. The user's specific framing — "maybe navigation is sth like explore + assess?" — points directly at a compositional structure; this finding refines that intuition with structural-grounds analysis.

### 1. Foundation — what R2 and R3 actually are

The territory contains two operations that share the name "Navigation." Distinguishing them is the load-bearing observation of this inquiry.

#### R2 — the existing `/navigation` discipline

**Source:** `homegrown/navigation/SKILL.md` and `homegrown/navigation/references/navigation.md`. Mature; in active use.

**Input:** a completed SIC cycle output (or current project state). The discipline runs AFTER an inquiry completes — it operates on the inquiry's results, not on the codebase.

**Output:** a navigation map of route-cards. Each route-card has 12 fields — Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, Why this route exists, Guidance mode, adaptive Guidance, Continuation note.

**Schema:** 16-type taxonomy organized in 3 categories — content-directed, process-directed, context-directed. Canonical per the navigation audit at `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` (Category E).

**Process:** 6-step — Read → Assign Types → Allocate Guidance → Assess Priority/Confidence → Check Excluded → Format the Map. Preceded by a Freshness Preflight at Step 0.

**Purpose:** decide what to do next given a completed inquiry. Enumerate all possible directions; tag them with type, priority, and status; produce a decision-supporting map.

#### R3 — the north-star navigation vision

**Source:** `devdocs/nav_north_star.md` (the vision document, just rephrased from the original `nav_should_be.md`). Vision-status — not implemented.

**Two ways R3 runs.** First, **whole-codebase mapping**: the user runs navigation on the entire codebase without specifying a direction. The output is a map of directions of work that exist in the codebase — what is being discovered, what is being explored, what is being chased. Nodes represent directions, not bounded concepts. The work is heavy (must enumerate the codebase) and uses an iterative staged for-loop structure: first run produces ~10 big concepts; second run expands each to 5-10 sub-concepts (50-100 total); third run goes one level deeper (~200 nodes). Manual user-triggered chaining is acceptable for v1.

Second, **directional local mapping**: the user points navigation at specific source files and runs a directional query. The output is a local artifact (markdown) containing concepts around the area, categorized, with status info per concept (how much considered; how much worked on; blocking other stuff; the 12-16 categories from R2's schema may be referenced).

**Purpose:** survey the codebase's work-direction structure; produce a navigable map of where work is happening or could happen.

#### Why the R2/R3 distinction is load-bearing

R2 and R3 are structurally different:

- **Different inputs:** R2 takes completed SIC output; R3 takes the codebase as territory.
- **Different outputs:** R2 produces route-cards (12 fields, 16 types); R3 produces concept-nodes as directions of work.
- **Different purposes:** R2 decides what to do next given a completed inquiry; R3 surveys the work-direction structure of a codebase.

The user's `_branch.md` quoted text from `nav_north_star.md` (R3) — the iterative for-loop structure — not from `navigation.md` (R2). The user's overlap concern with Explore concentrates in R3, not R2.

### 2. The dual diagnosis

#### R2 vs Explore — "separate but mechanism-sharing"

R2 and Explore (`homegrown/explore/`) both use iterative work but on structurally different territories for structurally different purposes:

| Aspect | R2 (existing /navigation) | Explore |
|---|---|---|
| Input | Completed SIC cycle output | Territory to map (codebase / solution space / literature / etc.) |
| Output | Route-cards (12 fields per route; 16-type schema) | Confidence-tagged structural map |
| Purpose | Decide what to do next | Map what exists |
| Mechanism shared | Iterative work / staging | Iterative work / staging |

The shared mechanism (iterative work) is incidental to their distinct purposes. They are genuinely separate disciplines. Low overlap.

#### R3 vs Explore — "specialization + composition"

R3 (the north-star navigation vision) is structurally close to Explore's codebase use case, with one specific add-on.

**Specialization sub-claim:** R3 specializes Explore to codebase-as-work-direction-territory. Explore's spec explicitly lists codebases as one of multiple territory types ("codebases, solution spaces, business landscapes, research fields"). R3 narrows to codebases viewed through the work-direction lens. The iterative for-loop staged structure in R3 IS Explore's resolution-progression (Coarse Scan → Targeted Probes → Fine Scan) applied at codebase scale.

**Composition sub-claim:** R3 adds an **assess overlay** that Explore doesn't formally produce. R3's directional case includes work-status fields: "status of this concept; how much they were kind of considered; how much they've been working on; are they kind of blocked other stuff." These are work-history / dependency fields — distinct from Explore's confidence levels (which are about scan-completeness, not work-progress).

Together = R3 is Explore's codebase use case with a work-status assess overlay. The user's intuition ("navigation = explore + assess") was correct for R3, refined with the specialization claim.

#### The umbrella explanation — two-navigations conflation

The term "Navigation" in the project covers TWO structurally different operations (R2 + R3) that have been read together under one name. The user's overlap concern with Explore concentrates in R3 vs Explore (high overlap; specialization + composition); R2 vs Explore is genuinely separate (low overlap; mechanism-sharing only). Once the conflation is named, the puzzlement becomes legible: the user was looking at R3 (the vision in `nav_north_star.md`) and recognizing Explore's territory-mapping work in it.

#### Why this diagnosis holds on structural grounds

- **Direct artifact comparison** of three texts (`explore.md`, `navigation.md`, `nav_north_star.md`) shows the operational differences between R2 and Explore and the operational similarities between R3 and Explore.
- **Domain transfer validation** from three independent fields supports the structural-distinction-with-explicit-naming pattern: biology (taxonomy splits species when structural difference exceeds intra-category variation); philosophy (ontology distinguishes concepts when one term covers two referents); software refactoring (separation of concerns extracts distinct responsibilities into separate modules).
- **The diagnosis is implementation-path-independent.** Whether R3 is folded into Explore, folded into `/navigation`, or built as a third discipline, the structural verdict stays the same — R3's operations have the shape of Explore-specialized + assess-overlay, regardless of where the implementation lives.

### 3. Why R3 is the source of the overlap concern

The user's `_branch.md` quoted the iterative for-loop staging structure — that text lives in `nav_north_star.md` (R3), not in `navigation.md` (R2). The user's intuition is structurally correct: R3 IS substantially overlapping with Explore, because R3 IS Explore's codebase use case with an assess overlay.

The user's puzzlement was not about hallucination; it was about a real structural similarity that the project's naming has been hiding. The conflation under the single term "Navigation" obscured the fact that R3 and R2 are different operations. Once that is named, both R3's overlap with Explore and R2's distinctness from Explore become legible.

### 4. Five operational paths for R3 (R2 stays as-is)

R3 is a vision — it hasn't been implemented yet. Once the dual diagnosis is settled, the user must choose where R3's implementation lives. Five paths are available.

#### Path (a) — Fold R3 into Explore

**What:** add a "codebase work-direction mode" to `homegrown/explore/references/explore.md`, alongside the existing artifact + possibility modes. Optionally, add an "assess sub-mode" that overlays work-status fields when the user invokes R3's directional case.

**Cost:** ~300-500 words of spec addition to `explore.md`. Spec edit. Reversal: revert the edit (one Edit operation; near-zero cost).

**Coherence:** matches project convention (one umbrella mandate per discipline). Explore's mandate is "map unknown territory"; codebase work-direction is a specialization of that mandate. `/navigation` stays scoped to its existing R2 role. Two clean disciplines.

**User-facing terminology:** technically `/explore`; the term "navigation" stays with R2.

**Why might be chosen:** preserves project convention; smallest spec change; cleanest at L2+ autonomy (the AI invokes `/explore` for codebase mapping; no two-mode-distinction needed for `/navigation`).

#### Path (b) — Fold R3 into `/navigation`

**What:** extend `homegrown/navigation/references/navigation.md` with whole-codebase mapping + directional local mapping sections. `/navigation` becomes a TWO-MODE discipline: existing R2 (post-SIC route enumeration; mode 1) and new R3 (codebase work-direction mapping; mode 2).

**Cost:** ~500-800 words of spec addition. Larger spec edit than path (a). Reversal: revert the edit.

**Coherence:** preserves the user's conceptual framing of "navigation" as the term for codebase mapping. **Violates project convention** of one-umbrella-mandate-per-discipline — `/navigation` would have two unrelated umbrella mandates (post-SIC route enumeration AND codebase work-direction mapping). The two modes share only the discipline name.

**User-facing terminology:** "navigation" technically and colloquially for both modes.

**Why might be chosen:** if the user's identity for "navigation" is non-negotiable and convention violation is an acceptable trade.

#### Path (c) — Build R3 as a third discipline

**What:** create `homegrown/<new-name>/` with its own SKILL.md, references file, and pipeline-position considerations. Names like `/survey`, `/map`, or `/codebase-navigation` could fit.

**Cost:** new folder + SKILL + references + pipeline-position decision. Largest infrastructure cost.

**Coherence:** cleanest scope. Each discipline has narrow, well-bounded mandate. No convention violation.

**User-facing terminology:** depends on the chosen name. The term "navigation" stays with R2.

**Why might be chosen:** if R3 will eventually develop operations Explore doesn't have (beyond the assess overlay) — e.g., something distinctively R3-shaped that doesn't fit Explore's mandate.

#### Path (d) — Split R3 across homes

**What:** R3 has two sub-cases (whole-codebase mapping; directional local mapping). Split them across the two existing disciplines. The whole-codebase mapping is fundamentally a territory-survey operation — fold it into `/explore` as a codebase work-direction mode. The directional local mapping is fundamentally a "point-at-something-and-elaborate" operation — fold it into `/navigation` as a complement to its existing R2 operations.

**Cost:** moderate. Two spec edits (one to `explore.md`; one to `navigation.md`). Reversal: revert both edits.

**Coherence:** preserves project convention (each sub-case goes to the discipline whose mandate it fits). Cost: the user must remember which sub-case lives where; this adds invocation complexity vs paths (a)-(c).

**User-facing terminology:** "navigation" stays with `/navigation` for directional cases; "explore" for whole-codebase. The single word "navigation" no longer covers both sub-cases.

**Why might be chosen:** if the user wants each sub-case in its structurally best home, accepting cross-discipline invocation cost.

#### Hybrid option — Path (a) + colloquial "navigation" naming preservation

**What:** technical home of R3 is Explore (path a). In user-facing documentation and conversational reference, the operation can be called "navigation" colloquially even though it technically invokes `/explore` with the codebase work-direction mode. The technical name in protocols and CLI is `/explore`; the conceptual name in vision documents and conversation can stay "navigation."

**Cost:** same as path (a) for spec; small additional documentation note clarifying the colloquial-vs-technical naming distinction.

**Coherence:** preserves project convention (technical home is Explore) AND preserves user-vision naming (colloquial use of "navigation" stays).

**Why might be chosen:** best of both worlds for users who care about both convention and naming. **Default soft recommendation if path (a) is chosen.**

#### Comparison

| Dimension | (a) Fold into Explore | (b) Fold into /navigation | (c) New discipline | (d) Split across homes | Hybrid (a + naming) |
|---|---|---|---|---|---|
| Project convention preservation | YES | NO | YES | YES | YES |
| User-vision naming preservation | NO (technical) | YES | NO | Mixed | YES (colloquial) |
| Spec-edit cost | Low | Medium-High | High (new folder) | Medium (two edits) | Low |
| L2+ autonomy clarity | High | Medium | High | Medium-High | High |
| Reversal cost | Near-zero | Near-zero | Low | Near-zero | Near-zero |
| Discipline count | 5 (unchanged) | 5 | 6 | 5 (unchanged) | 5 (unchanged) |

#### Soft recommendation

**Hybrid (path a + naming preservation).** It pairs path (a)'s coherence with naming preservation that addresses the user's conceptual framing. If the user prefers strict technical-naming, path (a) alone works. If the user's identity-of-navigation is non-negotiable, path (b) is defensible despite the convention violation. Path (c) is defensible if R3 will grow operations beyond Explore + assess. Path (d) is structurally specialized — each sub-case in its best home.

#### When the recommendation would shift

The Hybrid recommendation is soft, not absolute. It shifts under any of these observable conditions:

- **L2+ confusion observed:** post-adoption, if the technical-vs-conceptual naming gap creates real confusion at L2+ autonomy (the AI invokes `/explore` but the user/documentation calls it "navigation," and this mismatch causes errors), the recommendation shifts toward path (b).
- **User explicitly prefers path (b):** if the user's identity-of-navigation is non-negotiable, path (b) is correct for them.
- **R3 grows beyond Explore + assess:** if future R3 operations turn out to be genuinely new (not Explore-specialized; not /navigation-extended), path (c) becomes correct.
- **Cross-sub-case specialization desired:** if the user wants each R3 sub-case in its structurally best home, path (d) is correct.

User decides. The diagnosis itself is independent of this choice.

## Next Actions

### MUST

- **What:** decide the operational path for R3 from the five options in Section 4.
  - **Who:** the user.
  - **Gate:** observable — the user reads Section 4 and makes the call.
  - **Why:** the design is structurally complete; only the user's path choice remains.

### COULD

- **What:** if path (a) or Hybrid is chosen, draft the new "codebase work-direction mode" section for `explore.md` and the optional assess sub-mode. (~300-500 words.)
  - **Who:** loop-builder layer when the user has chosen.
  - **Gate:** condition-bound — once path (a) or Hybrid is selected.
  - **Why:** turns the diagnosis into a concrete spec edit.

- **What:** if path (b) is chosen, draft the new whole-codebase + directional mode sections for `navigation.md`. (~500-800 words.)
  - **Who:** loop-builder layer.
  - **Gate:** condition-bound — once path (b) is selected.
  - **Why:** similar; alternative.

- **What:** if path (c) is chosen, design the new discipline (name; SKILL.md; references file; pipeline position).
  - **Who:** loop-builder layer with a follow-up design inquiry.
  - **Gate:** condition-bound — once path (c) is selected.
  - **Why:** new discipline requires its own design pass.

- **What:** if path (d) is chosen, draft both spec edits (whole-codebase → `explore.md`; directional → `navigation.md`).
  - **Who:** loop-builder layer.
  - **Gate:** condition-bound — once path (d) is selected.
  - **Why:** the split implementation.

### DEFERRED

(No DEFERRED items in the strict Step-5 sense. The diagnosis itself is complete and immediately actionable as DOCUMENTATION; the spec-edit work is gated by the user's path choice but isn't behavior-changing without that choice.)

## Reasoning

This section shows the full field of what was considered.

### Why dual diagnosis rather than single

The user's `_branch.md` framed "Navigation" as a single thing to compare with Explore. Exploration discovered (R5 in the exploration map) that the project's "Navigation" actually contains two structurally different operations — R2 (existing /navigation) and R3 (north-star vision). Treating them as one would have led to an incorrect single diagnosis (e.g., "navigation = explore + assess overall"). The dual diagnosis is structurally cleaner: R2 vs Explore = E (different operations); R3 vs Explore = F (specialization + composition). The umbrella (G) explains why the user saw overlap — the conflation hid the structural distinction.

### Why "specialization + composition" rather than just "redundancy" or "schema-overlay"

Candidate A (genuine redundancy) was tested: if R3 and Explore are fully redundant, one could be merged into the other. But R3's assess overlay (work-status info) is real and not in Explore's spec; A would miss this. Subsumed by F.

Candidate D (schema-overlay) was tested: if R3 = Explore + the 16-type taxonomy + 12 route fields, that schema is the distinguishing feature. But R3's schema inheritance from R2 is ambiguous (`nav_north_star.md` says "the 12 or 16 categories" without commitment); the schema is primarily R2's. D applies to R2, not R3. Subsumed by E (R2) + F (R3).

Candidate H (Explore-applied-to-codebases) was tested: if R3 is just Explore for codebases, no specialization needed. But H misses the assess overlay; subsumed by F.

Candidate I (healthy organic overlap; no fix needed) was tested: if the overlap is benign, the user wouldn't be uncomfortable. But the user's discomfort is itself evidence of friction; ignoring it leaves the puzzlement unresolved.

The dual diagnosis (R2 = E; R3 = F; umbrella = G) survives all the counter-tests.

### Why Hybrid (recommendation) rather than path (a) alone or path (b)

Path (a) alone preserves convention but loses user-vision naming. Path (b) preserves naming but violates convention. The Hybrid pairs (a)'s technical home with naming preservation in documentation — best of both worlds. Honest about the trade: technical CLI invokes `/explore`; conceptual naming stays "navigation."

If the user finds the technical-vs-conceptual gap unacceptable in practice, path (b) is defensible despite the convention violation. The recommendation is soft.

### Why path (d) was added at Critique stage

Innovation's initial three paths (a/b/c) + Hybrid covered the main option space. Critique surfaced a 5th option not yet enumerated: **split R3's sub-cases across homes** — whole-codebase to Explore; directional to /navigation. This is structurally distinct from a/b/c because it specializes each sub-case to the discipline whose mandate fits best. Path (d) was added during compilation per Critique's REFINE.

### Why the diagnosis is implementation-path-independent

The structural verdict describes what R2 and R3 ARE relative to Explore. Where R3 gets implemented (Explore / /navigation / new discipline / split) doesn't change what R3 IS structurally. The diagnosis commits to structural truth; the path commits to implementation home. Different decision layers.

This independence matters: the user doesn't have to choose the path before accepting the diagnosis. The diagnosis stands on its own; the path is a separate operational decision.

### Self-reference handling

This inquiry diagnoses an overlap between two sister disciplines (Explore and Navigation) using a third sister discipline (Sensemaking) and a fourth (Critique). Multi-level self-reference within the project's discipline system.

Mitigations:
- **Exploration** cited direct artifact comparison (the three spec/vision documents). Applied the just-designed Premature Evaluation guardrail — no rejection-with-verdict-reasoning of candidate diagnoses.
- **Sensemaking** applied 8 perspectives + FEC meta-application with Verdict Rigor counter-tests on rejected candidates (A, D, H, I).
- **Innovation** applied 7 mechanisms with Domain Transfer from 3 external fields (biology, philosophy, software refactoring).
- **Critique** produced a concrete REFINE verdict (path d addition; recommendation falsifiability), evidencing non-collapsing adversarial structure.

Self-reference collapse was not observed.

### Critique survivors and refinements applied

The Critique phase ran 12 evaluation dimensions across the four pieces + assembly. Three pieces survived cleanly (C1, C2, C4); one received REFINE (C3 operational paths) with two specific refinements. Both refinements have been applied in this finding:
- **C3 REFINE #1:** path (d) — split R3 across homes — added to Section 4.
- **C3 REFINE #2:** "When the recommendation would shift" subsection added to Section 4 with four observable falsifiability conditions.

No KILLs. The verdict mix (4 SURVIVE + 1 REFINE with two applied refinements; 0 KILL) reflects honest evaluation under multi-level self-reference.

## Open Questions

### Monitoring

- The user's path choice and subsequent observable behavior at L2+ autonomy. If the technical-vs-conceptual gap (Hybrid recommendation) creates confusion, shift toward path (b).
- Whether R3 grows operations beyond Explore + assess after implementation. If yes, path (c) becomes correct.

### Blocked

(No blocking questions — the diagnosis is complete; the user's path choice is the only remaining step.)

### Research Frontiers

- **Broader pattern: other discipline-pair mandate-overlap.** Sensemaking vs Reflect; Innovate vs Critique; Decompose vs Sensemaking. Each may have similar diagnoses warranting its own /MVL+ run.
- **Pattern-emergence: this is the 3rd instance of discipline-mandate-boundary inquiry** (after 12-30 "is sensemaking one or multiple" and 13-00 "is exploration overreaching into critique"). Three instances within hours of each other suggests the project is in a discipline-architecture refinement phase. The pattern may merit project-level codification — perhaps a meta-protocol for "how to diagnose discipline-mandate questions" — once a fourth instance arrives.
- **The "deferred-spec-revival package" / "diagnosis package" 4-piece deliverable shape.** This is now the 4th instance (after 11-22 Part B, 09-20 design, 12-30 design, 13-00 failure-mode addition). Both this pattern and the discipline-mandate-boundary-inquiry pattern are accumulating.

### Refinement Triggers

The diagnosis re-opens under any of these observable conditions:

- **R3's implementation, once built, has operations not covered by the diagnosis** (i.e., it's neither Explore-specialized nor an assess overlay). Indicates R3's structural shape was misdiagnosed; revisit.
- **Future evidence shows R2 and R3 actually share an umbrella mandate** that the diagnosis missed. Indicates the "separate but mechanism-sharing" verdict for R2 was wrong; revisit.
- **The user's path choice exposes operational friction not anticipated by the comparison table.** Indicates the path analysis missed a dimension; revisit.
- **A fourth discipline-mandate-boundary inquiry surfaces a pattern this one didn't anticipate.** Indicates the pattern-emergence note in Research Frontier needs updating.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
explore def is like this                                                                                                       
                                                                                                                                 
  Maps unknown territory (codebases, solution spaces, business landscapes, research fields) through iterative scan-signal-probe  
  cycles, tracking the frontier between known and unknown and producing a confidence-tagged structural map. Use when the user    
  asks to "explore" or "map" something unfamiliar, when a problem space needs to be enumerated before sensemaking can begin,   
  when generating possibility candidates for a solution space, or when input territory is unknown and needs surveying


and i feel like it is really close to how navigation suppose to work in devdocs/nav_north_star.md 

A single whole-codebase navigation run is heavy — it has to enumerate the codebase. LLMs are not good at producing one huge accurate output. The solution is to stage the work into iterations, using a for-loop-like structure:

- **First run** produces the big concepts in the codebase. Say it surfaces 10 high-level directions.
- **Second run** takes each of those 10 big concepts and discovers the smaller concepts around it. For each big concept, second-run navigation might find 5-10 sub-concepts. Total after the second round: maybe 50-100 nodes at finer resolution.
- **Third run** does the same one resolution deeper. Total might grow to ~200 nodes.

This is heavy in absolute work but achievable because each individual navigation call is bounded. The structure is "loop over the prior round's nodes; run a new navigation on each one."

part. 

i am thinking there is a big overlap between navigation and explore...  and i would like to identify why...

maybe navigation is sth like explore + asses ? and this is the reason for overlap?

or some other way?
```

</details>
