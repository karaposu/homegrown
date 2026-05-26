---
status: active
refines: devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md
related: devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md
---
# Finding: explore — per-item content depth (the surfacing-mechanism question)

## Changes from Prior

**Prior path (refined):** `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md` (the iter-2 finding from the original /explore from-scratch inquiry).

**Related path (sibling):** `devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md` (the end-goal-aware design finding which added `resolution-level` to Step 0; this finding adds the complementary `depth-level` field).

**Revision trigger:** User concern. The user pointed out that iter-1's NOT-list ("/explore does not extract meaning" of items as concepts; mechanism; partition; novelty; route selection) created an operational gap: *if /explore strips meaning, sense-making has to re-discover what each surfaced item is at the identifying level*. The user explicitly asked: should /explore surface labeling content too — and if not, why isn't this a big concern?

**What's preserved:**

- The iter-2 verb-meaning: *to explore = purposive open-mode surfacing of a territory*.
- The 5-section discipline-spec structure (Identity / Components / Process / Quality / Output).
- The five-entry NOT-list against neighbor disciplines (sense-making, comprehend, decompose, innovate, navigation).
- The just-finished `resolution-level` Step 0 field (controls breadth).
- The just-finished staging-aware telemetry, staging-boundary regression failure mode, and Cross-Inquiry Merge Contract subsection.
- The `/staged-explore` runner artifact (proposed by the end-goal-aware inquiry).
- All iter-2 and end-goal-aware deferred items, plus the `/parallel-loops` research-frontier note.

**What's changed:**

- *The iter-2 NOT-list survives intact — with a clarification.* "Meaning" in "no meaning extraction" refers to **conceptual-structure meaning**: anchor extraction, relational claims among anchors, interpretive role assignment within a conceptual model. *Identifying-labeling content* at the inter-rater-agreement level (functional one-lines, surface forms, structural adjacency) is NOT meaning-extraction and IS acceptable in /explore output. The user's concern was real; the NOT-list's previous wording was load-bearing-but-ambiguous at the labeling layer.

**What's new:**

- *A per-item content depth taxonomy* — five levels (D0–D4) describing what labeling content each surfaced item carries. D2 (identifier + surface form + functional one-line) is the default minimum. D5+ (conceptual-role gloss; relational meaning claims) remains excluded — that is sense-making's territory.
- *A new Step 0 declaration field* — `depth-level` (D1 / D2 default / D3 / D4) controls per-item content richness. Orthogonal to the existing `resolution-level` field (which controls breadth).
- *An operational heuristic for the labeling-vs-meaning boundary* — "inter-rater agreement among naive scanners," framed as a self-check thought-experiment. Domain knowledge is acceptable for labeling; conceptual-structure knowledge crossings are the test.
- *A terminology distinction* — "labeling" (per-item identifying content, observed) is distinct from "anchor" (sense-making's conceptual-structure unit, extracted).
- *A new failure mode in spirit (named in the Quality section)* — items surfaced at D0 (bare identifier) without sufficient labeling content force downstream re-discovery and defeat /explore's upstream-precondition relationship.

**Migration:** Three coordinated edits to /explore's existing two-file pair (`homegrown/explore/SKILL.md` + `homegrown/explore/references/explore.md`) plus inline calibration notes. Total adoption work is bounded — concrete content drafts are provided in this inquiry's `innovation.md` (now archived) and refined in `critique.md` with five specific refinements applied.

## Question

From `_branch.md`: *what level of description does each item surfaced by `/explore` carry — i.e., what is the per-item content depth of the surfacing mechanism — and where is the line between identifying-labeling (necessary for the surfaced item to be useful to downstream disciplines) and meaning-extraction (sense-making's territory that the iter-1+2 NOT-list explicitly excludes)?*

Operative concern: the user pointed out that iter-1's NOT-list's "no meaning extraction" claim, taken literally, would leave each surfaced item as a bare identifier — forcing sense-making to re-discover what every item is, defeating /explore's role as the upstream-precondition discipline.

## Finding Summary

- **The iter-2 NOT-list's "no meaning" clause survives intact, with a clarification.** "Meaning" here refers to *conceptual-structure meaning* — anchor extraction; relational claims; interpretive role assignment within a conceptual model. *Identifying-labeling content* at surface granularity — functional one-lines, surface forms (size, signature, exports), structural adjacency facts — is NOT meaning-extraction and IS what /explore should provide.

- **Each /explore-surfaced item carries content at one of five labeling levels (D0–D4).** D2 is the default minimum (identifier + surface form + functional one-line). D1 (identifier + surface form, no functional one-line) is permitted at coarse-resolution scans if explicitly declared. D0 (bare identifier) is NOT acceptable as final output — it would force downstream re-discovery, exactly the failure the user flagged. D5+ (conceptual-role gloss; relational meaning claims) is excluded — sense-making's territory.

- **The labeling-vs-meaning boundary is operationalized by a heuristic:** *inter-rater agreement among naive scanners* — would a scanner who reads the item but has NOT yet built a conceptual-structure model of the territory produce roughly the same description? Domain knowledge is OK (a compiler reader doesn't need type theory to label `lib/parser.c` as "implements the LR(1) parser, ~500 lines"). Conceptual-structure knowledge crossings are the test ("the parser embodies bottom-up shift-reduce paradigm" requires anchor knowledge).

- **A new Step 0 field — `depth-level`** — is added to /explore's SKILL.md, alongside the existing `cognitive-commitment-mode`, `territory-type-mode`, `entry-point`, and (from the related end-goal-aware inquiry) `resolution-level`. Depth-level and resolution-level are orthogonal: breadth and per-item richness are conceptually independent. A default coupling table (recommended, not enforced) captures the typical case.

- **The adoption package** is three coordinated edits + inline calibration notes to /explore's two-file pair, with concrete content drafts ready to copy-paste. **This is the cleanest convergence of the /explore inquiry chain — no critical-weight user-confirmation caveat carries forward.** User adoption is scope-only: apply / preserve / apply-with-variations.

## Finding

### Context: why this question, and what it adds to the prior /explore inquiries

The original /explore from-scratch inquiry (iter-1+iter-2) committed `/explore = purposive open-mode surfacing` and produced a 5-entry NOT-list excluding meaning, mechanism, partition, novelty, and route selection. The end-goal-aware inquiry then added four spec-level refinements + a new `/staged-explore` runner doc + a vocabulary reconciliation for `nav_north_star.md`.

This inquiry surfaces a gap that the prior two did not address. The user pointed at the iter-1 NOT-list and asked: if /explore strips out meaning, mechanism, partition, novelty, and route selection from each item, what's left? Just bare identifiers? If so, sense-making would have to re-discover what every surfaced item *is* before it can do its anchor extraction — which defeats /explore's role as the upstream-precondition discipline.

The concern is real. The prior inquiries did not name what *labeling content* each surfaced item carries beyond the unit being "an existence claim" or "surfaced item." The labeling level was implicit.

This inquiry closes the gap. It does NOT contradict the NOT-list; it clarifies what "meaning" means and adds the missing specification of per-item content depth.

### The NOT-list survives intact (with a clarification on "meaning")

The five NOT-list entries — *no meaning extraction* (sense-making); *no mechanism modeling* (comprehend); *no partition* (decompose); *no novelty assessment* (innovate); *no route selection* (navigation) — all hold. Each refers to the **conceptual-structure-level operation** of the named neighbor discipline. /explore does not extract anchors. /explore does not build predictive models of how items work. /explore does not partition items into independent pieces with interfaces. /explore does not assess items for novelty. /explore does not choose what to act on next.

What needed clarification was the word *"meaning"* in the first entry. Read maximally, "no meaning" could be taken to mean "no descriptive content at all" — which would leave each item as a bare identifier. Read at the conceptual-structure level (which was the intended reading), "no meaning" excludes anchor extraction, relational claims, and interpretive role assignment.

The clarification:

> "Meaning" in "no meaning extraction" refers to **conceptual-structure meaning**: anchor extraction, relational claims among anchors, interpretive role assignment within a conceptual model. *Identifying-labeling content* (functional one-lines, surface forms, structural adjacency facts) is NOT meaning-extraction. These are acceptable — indeed required — in /explore output at the surface-functional level.

This clarification preserves all five NOT-list entries operationally while addressing the labeling layer the user named.

### Five labeling levels (D0–D4)

Each surfaced item carries content at one of five labeling levels:

| Level | What's included | Codebase example |
|---|---|---|
| **D0** | bare identifier only | `src/auth.py` |
| **D1** | + surface form (observable facts: size, signature, exports) | `src/auth.py, ~200 lines, exports authenticate()` |
| **D2** | + functional one-line **(default minimum)** | `src/auth.py — handles user authentication; ~200 lines, exports authenticate()` |
| **D3** | + structural adjacency (co-location facts) | `src/auth.py — handles user authentication; called by src/views/login.py, imports bcrypt` |
| **D4** | + relevance verdict **(optional; forward-tied)** | `src/auth.py — ... ; relevance: confirmed-relevant-to-inquiry-purpose` |

**Default minimum: D2.** This is what closes the user's concern. With D2, sense-making receives surfaced items that already carry an identifier + observable surface form + a functional one-line. Sense-making operates ON labeled items, not in place of them. Re-discovery is no longer forced.

**D1 is permitted at coarse-resolution scans if explicitly declared** (via the `depth-level` Step 0 field, see below). For very broad surveys where context budget is tight, D1 may be acceptable.

**D0 is NOT acceptable as final output.** Items at this level force downstream re-discovery and defeat /explore's upstream-precondition relationship — exactly the failure the user flagged.

**D5+ remains excluded.** "Conceptual-role gloss" — e.g., "this is the access-control entry point of the system" — and "relational meaning claims" — e.g., "this grounds all downstream authorization decisions" — are interpretive moves about the item's role in a conceptual structure. These are sense-making's outputs, not /explore's.

**D4 (relevance verdict) is optional and forward-tied.** Its full specification awaits a planned follow-up inquiry on /explore's verification-probe behavior (the user surfaced this question during the prior conversation: should /explore actively probe candidates to confirm their irrelevance, not just passively surface positives?). Until that inquiry lands, users have three viable options for D4: (a) operate at D3 and let sense-making handle relevance; (b) manually tag items with relevance verdicts when useful; (c) skip the relevance tier entirely.

### The boundary heuristic: inter-rater agreement among naive scanners

When deciding whether a piece of content is acceptable labeling (D0–D4) or crosses into meaning-extraction (D5+), the scanner asks themselves a thought-experiment question:

> *"Would a scanner who reads the item but has NOT yet built a conceptual-structure model of the territory produce roughly the same description?"*

- **High agreement** (multiple naive scanners produce similar descriptions) → **labeling**. Acceptable.
- **Low agreement** (multiple defensible framings depending on the conceptual model assumed) → **meaning-extraction**. Sense-making's territory.

A "naive scanner" is one who has not done sense-making's anchor-extraction work on this territory. They can read individual items and report observable facts; they do not have a frame for what items *mean in relation to each other* yet.

The heuristic operates as a **self-check thought-experiment**, not as a claim about the LLM's actual epistemic state. The LLM running /explore has full inquiry context — it is never truly "naive." The check asks the LLM: "would another scanner WITHOUT a conceptual-structure model produce this description?" If yes, the description is labeling. If no, it's meaning-extraction.

**Self-reference is acknowledged.** The heuristic is itself a meta-cognitive move — using a labeling-vs-meaning check to enforce the no-meaning-extraction NOT-list. This operates at the meta-level (output-content selection), not the object-level (item-meaning extraction). The corrective is external grounding: the iter-2 NOT-list serves as the canonical reference; the heuristic implements its labeling-side. Same pattern underlies iter-2's mode-confusion failure mode (the LLM asks itself if it's drifting from open-mode without itself becoming closed-mode).

**Edge cases.** Domain jargon and contested terminology can produce high agreement *among experts* but require conceptual-structure knowledge to assess. Treat these as **labeling at low confidence**: the surfaced item's functional one-line should be conservative; deeper interpretation is sense-making's job.

**Domain knowledge is acceptable.** A compiler reader doesn't need type theory to label `lib/parser.c` as "implements the LR(1) parser, ~500 lines." They need it to interpret "the parser embodies bottom-up shift-reduce paradigm." The first is labeling (factual functional one-line); the second is meaning-extraction (interpretive role claim). The test is whether the description requires conceptual-structure knowledge specifically.

### Terminology: labeling vs anchor

The spec adds an explicit distinction:

- **Labeling** is /explore's per-item descriptive content at surface granularity — what each surfaced item IS at the inter-rater-agreement level. Labels are operationally useful for sense-making to anchor on, but they are NOT anchors themselves.
- **Anchor** is sense-making's conceptual-structure unit — extracted via sense-making's Phase 1 (see `homegrown/sense-making/references/sensemaking.md`). Anchors carry conceptual-structure meaning that labels do not.

The shorthand: **labels are observed; anchors are extracted.** /explore produces labels. Sense-making consumes labels to extract anchors. Both attach descriptive content to items, but at different cognitive layers.

### The new `depth-level` Step 0 field

/explore's SKILL.md gains a new Step 0 declaration field — `depth-level` — controlling per-item content richness. The full Step 0 declarations block (after this inquiry's adoption) is:

- `cognitive-commitment-mode: open` (from iter-2 — held throughout invocation)
- `territory-type-mode: artifact | possibility` (from iter-2)
- `entry-point: frontier-first | signal-first` (from iter-2)
- `expected: ~N items` or `~N items per parent` (from the end-goal-aware inquiry — *resolution-level*; controls **breadth**)
- `depth-level: D1 | D2 (default) | D3 | D4` (new — controls **per-item content richness**)

**Orthogonality.** `depth-level` and `expected` (resolution-level) are orthogonal dimensions of the input contract. Breadth (how many items per invocation) and per-item richness (how much labeling per item) are conceptually independent. Users can declare any combination.

**Default coupling.** In practice, breadth and depth are typically coupled by LLM context budget. The spec documents a recommended-but-not-enforced default:

| Resolution (`expected`) | Recommended `depth-level` |
|---|---|
| ~10 items (coarse) | D1–D2 |
| ~50 items (medium) | D2–D3 |
| ~200 items (fine) | D3–D4 |

Users can override (e.g., coarse-breadth with rich-depth when budget allows). The coupling captures the typical case; the recommendation is explicitly NOT enforced. This is calibration-state-dependent — empirical refinement is expected.

**Per-invocation uniformity.** The depth commitment is per-invocation; all surfaced items in one /explore call aim for the declared level. Items with low confidence may have partial content (some fields empty), but the level commitment is per-call, not per-item.

### What this changes (and doesn't change) for the adoption package

The total adoption work is three coordinated edits + inline calibration notes:

- `homegrown/explore/SKILL.md` — Step 0 declaration block gains the `depth-level` field.
- `homegrown/explore/references/explore.md` Components section — gains a "Per-item content depth" subsection with the D0–D4 table, the three rules, the uniformity statement, and the D4 forward-tie clarification.
- `homegrown/explore/references/explore.md` Quality section — gains the labeling-vs-meaning boundary heuristic, the naive-scanner definition with self-check framing, the edge-case note, the labeling-vs-anchor terminology distinction, and the NOT-list clarification.
- Three inline calibration notes — placed next to (1) the heuristic edge cases, (2) the default coupling, (3) the D4 forward-tie. Each has a refinement trigger.

What's **not** changed: the iter-2 verb-meaning, the 5-section skeleton, the NOT-list itself, the upstream-precondition relationship, the cognitive-commitment-mode ⊥ territory-type-mode orthogonality. The end-goal-aware inquiry's `resolution-level` field, staging telemetry, staging-boundary regression failure mode, and Merge Contract subsection are all preserved without modification. The `/staged-explore` runner artifact is preserved.

### Why this is the cleanest convergence in the inquiry chain

Across the three /explore inquiries (the original from-scratch in iter-1+iter-2, the end-goal-aware design, and this surfacing-mechanism question), this is the only one where critique's TERMINATE signal does NOT carry a critical-weight user-confirmation caveat.

- The original iter-2 carried the F-weak/F-strong confirmation question.
- The iter-2 of the original (after the user's correction) carried the "from scratch reunderstanding" confirmation question.
- The end-goal-aware inquiry carried the adoption-mode choice with shape-variation options.
- This inquiry's convergence has no equivalent caveat. The design is structurally complete; the drafts are adoption-ready with five concrete refinements applied; the user's adoption choice is purely scope-only (which variations to apply, if any).

The reason: this inquiry's question was narrower than the prior ones (per-item content level, not /explore's full meaning) and the convergence happened on operational criteria the prior inquiries had already established.

## Next Actions

### MUST

- *None.* The design is structurally complete; no user-confirmation gate before adoption.

### COULD

- **What:** apply the three coordinated edits + inline calibration notes to /explore's two-file pair.
  - **Who:** user (or maintainer authorized to edit `homegrown/`).
  - **Gate:** none (adoption-ready).
  - **Why:** ships the per-item content depth specification; closes the user's "would have to guess" concern; preserves all prior commitments; aligns /explore's output legibility with the project's end-goal trajectory.

- **What:** preserve this finding as design documentation; defer the edits.
  - **Who:** user.
  - **Gate:** none.
  - **Why:** allows further deliberation; iter-2 + end-goal-aware findings remain the active canonical state of /explore.

- **What:** apply with shape variations (e.g., α-RICH multi-domain examples; β-RICH override guidance; γ-RICH multi-domain edge-case examples; δ-COLLECTED notes at bottom).
  - **Who:** user (specifies which variations).
  - **Gate:** none.
  - **Why:** retains the structural commitments while honoring user-preference on stylistic axes.

### DEFERRED

- **What:** add multi-domain examples to the per-item content table (α-RICH).
  - **Gate:** /explore used across multiple domains in observed inquiries (codebase + research + problem-domain + ...).
  - **Why (if revived):** strengthens domain-agnostic claim with concrete cross-domain evidence.

- **What:** add override guidance to the Step 0 declarations (β-RICH).
  - **Gate:** override cases (e.g., coarse-breadth with rich-depth) observed empirically.
  - **Why (if revived):** captures non-typical cases the default coupling doesn't address.

- **What:** add multi-domain edge-case examples to the heuristic (γ-RICH).
  - **Gate:** heuristic edge cases observed empirically across multiple domains.
  - **Why (if revived):** strengthens the heuristic's operational utility with cross-domain examples.

- *All prior deferred items from iter-2 + end-goal-aware inquiry remain active* — typed Input Contract addition (excluding the resolution-level + depth-level fields which are now ACTIONABLE); typed Existence-Claim Schema; Drift-as-Escalation; Legend output section; Claim-Type Vocabulary; Discovery-vs-Revisit telemetry; SK-MODE-DECLARED frontmatter; SK-D paired-discipline; full-restructure variant; persistent-state variant; `/parallel-loops` runner.

- *One newly-forward-tied item:* **D4 (relevance verdict)** is optional in the per-item content table; its full specification is forward-tied to the planned **verification-probe inquiry** (the user surfaced this in the prior conversation: should /explore actively probe candidates to confirm irrelevance? This is a separate question deserving its own /MVL+ pass).

## Reasoning

The user's concern was structurally real: iter-1's NOT-list, taken at its strongest reading, would leave each surfaced item as a bare identifier. Sense-making would then have to re-discover every item's identifying content before doing its anchor extraction. This would defeat /explore's role as the upstream-precondition discipline.

The right answer is NOT to weaken the NOT-list — its five entries all hold at the conceptual-structure level. The right answer is to clarify what "meaning" means in "no meaning extraction" (conceptual-structure meaning, not labeling) and to add an explicit specification of what labeling content each surfaced item carries.

The five depth levels (D0–D4) emerged naturally from considering the spectrum of acceptable labeling content. D2 as default minimum closes the user's concern at the surface-functional level. D0 as not-acceptable codifies why bare identifiers fail. D5+ exclusion preserves the NOT-list's boundary against sense-making.

The inter-rater-agreement-among-naive-scanners heuristic emerged as the load-bearing operational test for the labeling-vs-meaning boundary. It survives stress-test by reframing as a self-check thought-experiment (the LLM running /explore asks itself a hypothetical, not a claim about its actual epistemic state). Self-reference is acknowledged and corrected via external grounding (the iter-2 NOT-list as canonical reference).

The new `depth-level` Step 0 field is structurally clean: orthogonal to the existing `resolution-level` field from the end-goal-aware inquiry; declarative (predictable for /intuit composability); per-invocation uniform (matches the discipline's idempotency); with a recommended default coupling that captures the typical case without enforcement.

**Killed candidates:**

- A visual progression diagram instead of a table (α-VISUAL) — departed from project's table convention without enough justification.
- Folding the heuristic into the table's footer (α+γ-MERGED) — kept the boundary heuristic and the content table cleaner as separate sections.
- Footnote-formatted calibration notes (δ-FOOTNOTES) — convention mismatch with the project's existing markdown style.
- A separate "depth observed at output" telemetry field paired with the Step 0 declaration (β-DECLARE-AND-REPORT separation) — folded into the existing Telemetry section instead.
- Free-form prose labeling (Level-3 inversion) — loses /intuit composability and predictability for downstream automation.

**Survival-bias re-check on the kills.** All five kills were on structural grounds (convention, separation cleanliness, composability), not on discomfort with the candidate. Verified.

## Open Questions

### Monitoring

- *Does the default depth-by-resolution coupling hold in practice?* The recommended table (D1-D2 for ~10 items; D2-D3 for ~50; D3-D4 for ~200) is operational reasoning, not empirically validated. After three or more /explore runs at different resolutions, check whether the actual depth-level used matched the recommendation. If consistent mismatch, refine the coupling.

- *Does the naive-scanner heuristic produce clear verdicts at edge cases?* Domain jargon and contested terminology are the predicted edge zones. After observed runs encounter such cases, check whether scanners successfully treated them as labeling-at-low-confidence rather than crossing into meaning-extraction.

### Refinement Triggers

- *Verification-probe inquiry produces its finding.* Activates the full specification of D4 (relevance verdict). Until then, users operate with D3 + manual D4 tagging + skip.

- *Override cases observed.* Activates β-RICH (override guidance subsection in Step 0 declarations).

- *Multi-domain use cases accumulate.* Activates α-RICH (multi-domain examples in the per-item content table) and γ-RICH (multi-domain edge-case examples in the heuristic).

- *All prior iter-2 + end-goal-aware revival triggers remain active.*

### Research Frontiers

- *The verification-probe behavior in /explore.* The user surfaced this in the prior conversation: should /explore actively probe candidates to confirm irrelevance (not just passively surface positives)? This is a separate question deserving its own inquiry; D4 (relevance verdict) in this finding's per-item content table is forward-tied to that future work.

- *All prior research frontiers carry forward.* Full restructure variant; persistent-state /explore; `/parallel-loops` runner; cognitive-operation taxonomy across all 7 disciplines.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+
in
devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding_iter1.md
u said


The third is the cross-discipline question — what aspects of items should the discipline not extract? Five aspects are explicitly excluded:

Meaning of items as concepts — that belongs to sense-making.
Mechanism of how items work — that belongs to comprehend.
Partition of items into independent pieces with interfaces — that belongs to decompose.
Novelty assessment of items — that belongs to innovate.
Choice of which item to act on next — that belongs to navigation.
This five-entry NOT-list is the discipline's boundary against its neighbors. It is enforced operationally through failure modes: if the discipline's output starts to extract meaning, model mechanism, partition items, claim novelty, or select moves, that is treated as a drift signal and either flagged as a failure or escalated to the appropriate neighbor discipline.



but still explore should surface these things or not ? if explore only exposes / surfaces without their meaning or hows etc, then sensemaking woudl have to guess no? so i think important part is we should also define the surfacing mechanism too.  or this is not a big concern if so why?
```

</details>
