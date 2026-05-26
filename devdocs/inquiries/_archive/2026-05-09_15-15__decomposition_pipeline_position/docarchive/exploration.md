# Exploration: Decomposition Pipeline Position

## Mode + Entry Point

- **Mode:** Possibility (the candidate positions are conceptual; territory is the architectural-placement space) + Artifact (specs and the prior audit are concrete artifacts to inspect).
- **Entry:** Signal-first. The user's question explicitly named four candidate positions; scan started by probing each, then expanded to surround-layer + missing-position search.

---

## Territory Overview

The territory is the architectural-placement space for the Decomposition discipline within (and outside of) the cognitive loop. Five named positions + surfaced hybrids + a "what kind of operation IS decomposition" axis.

### Major regions identified

1. **Per-position territory** (the user's 4 explicit positions + 1 hybrid):
   - D-FIRST (decompose input query into sub-loops at the entry of the loop)
   - D-CURRENT (between S and I in MVL+; status quo)
   - D-AFTER-C (decompose the inquiry's outcome into sub-paths for next-run MVL)
   - D-REMOVED (D doesn't appear in the cognitive loop at all)
   - D-MULTIPLE (D at more than one position)

2. **Surround-layer territory** (the architectural frame within which the question sits):
   - Discipline taxonomy (`enes/discipline_taxonomy.md`) — D is currently classified as Core (pipeline-sequential).
   - Loop runners (`enes/loop_desing_ideas/loop_design_1.md`) — three runners exist (`/MVL`, `/MVL+`, `/inquiry`) with different choices on Pipeline Flexibility and Branch Parallelism dimensions.
   - Meta-loop architecture (`enes/loop_desing_ideas/meta_loop.md`) — there's a stabilized concept of "meta-loop = stateful traversal engine for thinking space" with `/navigation` as its eyes and MVL+ as its probe.
   - End-goal trajectory (`enes/what_is_meaningful_traversal.md`, `MEMORY.md`) — the project's end-goal is multi-head MVL+ loops in parallel; this is explicitly named as future architecture.

3. **Operation-shape territory** (what does "decomposition" actually NAME?):
   - Coupling-perception-and-partition (the spec's definition; `homegrown/decompose/references/decompose.md`).
   - Query-splitting (D-FIRST framing; the user's "decompose input query into pieces").
   - Sub-path-generation (D-AFTER-C framing; "decompose the outcome into sub-paths").

   These three operations may share a name but be different cognitive operations. Surface this explicitly.

---

## Inventory — Per-Candidate Position

For each candidate: loop architecture / what D operates on / what D produces / consumer / supporting evidence / opposing evidence / confidence.

### D-FIRST (decompose input query at entry; each piece gets its own loop)

- **Loop architecture:** Outer-D + N inner MVL+ loops (one per piece). Multi-head architecture.
- **D operates on:** Raw user input or a stabilized form of it (no Sensemaking yet; possibly Exploration-only).
- **D produces:** N sub-questions, each a candidate seed for an inner MVL+ loop.
- **Consumer:** Inner MVL+ loops; eventually a merge step that combines their findings.
- **Supporting evidence:**
  - **Cognitive analogues** — Polya's "How to Solve It" puts decomposition early; software divide-and-conquer; project management's WBS (Work Breakdown Structure) decomposes scope into tasks early. Many problem-solving traditions place D at entry.
  - **Project end-goal alignment** — The project's stated end-goal (`enes/what_is_meaningful_traversal.md` §"The intuition") is "many `/MVL+` loops in parallel and compares across them." D-FIRST is naturally how those parallel loops would be SEEDED.
  - **`/inquiry` runner** — already supports per-branch sub-pipelines (sequential), which is a cousin of D-FIRST. So the project has already partially explored this design.
  - **Audit corpus inquiries** — none of the 10 audited inquiries was a clear "multi-piece input query" that needed entry-decomposition; all 10 had single-piece questions. So D-FIRST didn't have an opportunity to demonstrate value in that corpus. *Absence of evidence is not evidence of absence.*
- **Opposing evidence:**
  - **Coupling perception requires a clarified whole** — `/decompose` spec says "Sensemaking must have clarified the whole before this step." D-FIRST violates this prerequisite.
  - **Multi-head meta-loop is explicitly DEFERRED** — `enes/loop_desing_ideas/meta_loop.md` says: "Multi-head meta-loop. Gate: After a sequential meta-loop can complete at least three useful chains with explicit stop/continue rationale." So D-FIRST is in the project's known-deferred region; not blocked but explicitly ordered behind a prerequisite (sequential meta-loop maturity).
  - **Coordination cost** — branches need merging; no runner currently supports parallel-branch coordination. Loop-design notes flag this as a gap, not solved.
- **Confidence:** **HIGH** that D-FIRST is structurally coherent as a position. **MEDIUM** that it would benefit THIS corpus (8/10 meta-design inquiries have single-piece queries). **HIGH** that it sits at the meta-loop layer, not inside the MVL+ pipeline — meaning if D-FIRST is the right move, the change is at the runner-architecture level, not inside MVL+'s pipeline rule.

### D-CURRENT (between S and I; status quo)

- **Loop architecture:** Single MVL+ loop, fixed E→S→D→I→C pipeline.
- **D operates on:** Sensemaking's stabilized model (SV6) plus the meaning-nodes / anchors / structural points S surfaced.
- **D produces:** Question-tree partition with verification criteria + interface map + dependency order.
- **Consumer:** Innovation generates proposals per piece; Critique evaluates per piece.
- **Supporting evidence:**
  - **Audit corpus** — the just-finished audit (`devdocs/inquiries/2026-05-09_11-54__decomposition_value_audit/finding.md`) found 0 NEGATIVE D outputs across 10 inquiries; D earns marginal value uniformly with 5 MEDIUM / 2 LOW-MEDIUM / 3 LOW. Never costs negative.
  - **Spec prerequisite** — `/decompose` spec explicitly requires Sensemaking as prerequisite. D-CURRENT is the only position that satisfies this.
  - **Discipline taxonomy** — D is currently classified as Core (pipeline-sequential). D-CURRENT is the canonical Core slot.
  - **Innovation-consumes-pieces evidence** — sampled inquiries show Innovation organizing proposals per D's pieces, even if the same proposals could have been generated without D's structuring. So D-CURRENT does shape downstream organization observably.
- **Opposing evidence:**
  - **Audit graded-MEDIUM verdict** — 0 HIGH; D's contribution is formalization-not-discovery; the partition is largely already implicit in S's SV6.
  - **Sample bias** — 8/10 audited inquiries are meta-design (i.e., shape that least benefits from D); the verdict's external generalization is deferred.
  - **Innovation could consume S directly** — the sampled corpus shows Innovation's output didn't visibly REQUIRE D's structuring; coherent proposals would have emerged from S directly.
- **Confidence:** **HIGH** that D-CURRENT is consistent with current architecture. **HIGH** that its value at this position is graded MEDIUM (not HIGH, not NEGATIVE). **MEDIUM** that D-CURRENT is the BEST position vs. alternatives — that question is the inquiry's open one.

### D-AFTER-C (after Critique; produce sub-paths for next-run MVL)

- **Loop architecture:** MVL+ pipeline runs E→S→I→C; then D runs as a "what next" partitioner.
- **D operates on:** Critique's verdicts (survivors, refinements, kill seeds) + frontier questions.
- **D produces:** Sub-path seeds for next-run MVL.
- **Consumer:** Next-run MVL/MVL+ instances (one per sub-path).
- **Supporting evidence:**
  - **`/navigation` discipline** (`/Users/ns/.claude/skills/navigation/references/navigation.md`) ALREADY DOES THIS. Navigation is a Boundary discipline that "operates between cognitive cycles," reads "C's verdicts (survivors, refinements, kill seeds), frontier questions, telemetry from S/I/C," and produces "the full enumeration of possible next directions." This is verbatim what D-AFTER-C describes.
  - **Meta-loop architecture** (`enes/loop_desing_ideas/meta_loop.md`) — Navigation is explicitly named as the meta-loop's "eyes," and the meta-loop's job is to use Navigation's enumeration to dispatch next MVL+ probes.
- **Opposing evidence:**
  - **Duplicate operation** — placing D at this position would compete with /navigation. Coupling-perception (D's mechanism) is not what's needed here; what's needed is direction-enumeration (Navigation's mechanism). They're DIFFERENT operations even if both look "decompose-the-outcome-into-pieces."
  - **Discipline taxonomy** — Boundary disciplines (R + N) are temporally complete at 2 (backward + forward). Adding D here would manufacture a third Boundary discipline without a new temporal direction. The taxonomy explicitly rejects this pattern in §"Rejected After Consideration #11 — Add third boundary discipline."
- **Confidence:** **HIGH** that D-AFTER-C is largely already covered by `/navigation`. **HIGH** that the operation D-AFTER-C names is direction-enumeration, not coupling-partition. **MEDIUM** that there's a residual case where D-AFTER-C might do something /navigation doesn't (e.g., partitioning the survivor space into independently-actionable bundles BEFORE enumerating directions). This residual is explored under D-MULTIPLE.

### D-REMOVED (D doesn't appear in the cognitive loop)

- **Loop architecture:** E → S → I → C (the classic `/MVL` pipeline, with E added).
- **D operates on:** N/A.
- **D produces:** N/A.
- **Consumer:** N/A. Innovation operates directly on S's SV6.
- **Supporting evidence:**
  - **Classic /MVL pipeline** already exists and runs S→I→C without D. So a D-less pipeline is empirically tested for simple questions.
  - **Audit corpus** — Innovation in sampled inquiries didn't visibly REQUIRE D's structuring; coherent proposals could have emerged from S directly. So removing D might cost less than feared.
  - **Discipline taxonomy admits Core members on observable grounds** — if D doesn't observably do work that other disciplines don't, Core membership is questionable.
- **Opposing evidence:**
  - **Spec is canonical** — `/decompose` spec is detailed and well-developed (303 lines); removing it would discard substantial documentation work.
  - **0 NEGATIVE D-outputs** in the audited corpus — D never costs negative, so the cost of keeping it is bounded.
  - **Discipline-conservation principle** — the discipline taxonomy's audit (per `enes/discipline_taxonomy.md`) determined the 5 Core disciplines are atom-level distinct. /decompose's Primitive Profile is unique (Working Memory + Attention-pointer + Simulation + Intuition-similarity, distinct from S's profile). Removal would break the conservation argument.
  - **Some inquiry shapes earned MEDIUM with qualitatively different value-shapes** (audit's LOOP_DIAGNOSE and application inquiries). These suggest D earns SOMETHING for non-meta-design inquiries; removing it loses the coverage for those shapes.
- **Confidence:** **HIGH** that D-REMOVED is structurally implementable (the /MVL classic pipeline already runs without D). **MEDIUM** that D-REMOVED would not lose value — the audit said 0 NEGATIVE but also 0 HIGH; removing something that's MEDIUM-typical isn't necessarily a loss. **LOW** that the project would adopt D-REMOVED — too much architectural inertia (spec investment, discipline taxonomy commitment, primitive profile distinctness).

### D-MULTIPLE (D at more than one position; possibly different operations)

- **Loop architecture:** Multiple D-instances at different positions, possibly with different operational forms.
- **D-FIRST + D-CURRENT:** Outer-D partitions input query into sub-seeds; inner MVL+ loops include D-CURRENT for actionable-space partitioning.
- **D-CURRENT + D-AFTER-C-as-N:** D-CURRENT in pipeline; "D-AFTER-C" is renamed to /navigation (no actual second D).
- **What's the operation at each position?**
  - D-FIRST: query-splitting / scope-partitioning / seed-generation. NOT coupling-perception (no coherent whole yet).
  - D-CURRENT: coupling-perception / partition. The canonical /decompose operation.
  - D-AFTER-C: direction-enumeration / outcome-routing. NOT coupling-perception. (And this is /navigation.)
- **Supporting evidence:**
  - **Different cognitive operations share the name "decomposition" in everyday language.** Polya's "decompose the problem" (D-FIRST-like) and "perceive coupling structure within a clarified whole" (D-CURRENT) are different operations.
  - **The project already separates these at the architectural level:** /decompose (Core) does coupling-partition; /navigation (Boundary) does direction-enumeration; /inquiry runner does scope-classification-into-sub-pipelines.
- **Opposing evidence:**
  - **Naming overload** — calling all three operations "decomposition" creates confusion; the project has already disambiguated by using different discipline names (/decompose, /navigation, /inquiry's classification).
- **Confidence:** **HIGH** that the operations at different positions are DIFFERENT, not the same operation in different slots. **HIGH** that the project's architecture already reflects this (the operations have different names and live in different categories). **MEDIUM** that there's residual confusion in the user's framing — the user's "decomposition" might mean "coupling-partition" (D-CURRENT) for inside-loop and "scope-partitioning" (a meta-loop operation) for D-FIRST.

---

## Cross-Position Comparison

| Dimension | D-FIRST | D-CURRENT | D-AFTER-C | D-REMOVED | D-MULTIPLE |
|---|---|---|---|---|---|
| **Operates on** | Raw query | S's SV6 | C's verdicts | (N/A) | varies per position |
| **Operation** | scope-split | coupling-partition | direction-enumeration | (N/A) | different per position |
| **Architectural layer** | meta-loop | MVL+ pipeline | meta-loop | (none) | mixed |
| **Already covered by** | (`/inquiry`'s classification, partial) | /decompose (current) | /navigation | (N/A) | N + the rest |
| **Spec prerequisite met?** | NO (no clarified whole) | YES | partial (operation differs) | (N/A) | varies |
| **Audit-corpus evidence** | inapplicable | 0H/5M/2LM/3L/0N | inapplicable | inapplicable | inapplicable |
| **Project-end-goal alignment** | YES (multi-head future) | YES (current) | duplicate of N | NO (architectural inertia) | partial |
| **Cost to ship** | HIGH (multi-head architecture) | ZERO (status quo) | duplicate-rename only | MEDIUM (remove discipline) | MEDIUM-HIGH |
| **Confidence as standalone position** | HIGH structurally / MEDIUM benefit | HIGH consistency / HIGH MEDIUM-value / MEDIUM "best?" | HIGH covered-by-N | HIGH implementable / MEDIUM not-loss / LOW adoption | HIGH "different operations" / HIGH already-architecturally-separated |

---

## Signal Log

| Signal | What was detected | Probed? | Result |
|---|---|---|---|
| Surround-layer presence | Discipline taxonomy + meta-loop architecture + /navigation discipline + /inquiry runner are all relevant context | YES | The user's question maps onto ALREADY-considered architectural dimensions; D-FIRST = multi-head meta-loop (deferred); D-AFTER-C ≈ /navigation (already exists). |
| Operation-name ambiguity | "Decomposition" might name different cognitive operations at different positions | YES | Confirmed — the project has already disambiguated via separate discipline/runner names; the user's framing collapses this. |
| Audit's deferred Q2 | The just-finished audit deferred this exact inquiry to "after audit-again confirms the pattern with diversity" | NOTED | The user is opening it now (their authority); the deferral was a recommendation, not a block. Note that the audit's evidence base is N=10, mostly meta-design — same caveats apply here. |
| Sample bias persists | This inquiry is also meta-design; the audit corpus is also meta-design. Combined evidence base is still meta-design-biased. | NOTED | Verdict scope must remain corpus-internal; do not generalize to "all inquiries." |
| Cognitive analogues converge on D-FIRST | Polya, divide-and-conquer, WBS, etc. all place D-like operations early | YES | Convergence is real but those analogues solve DIFFERENT problems (well-defined problems, not ambiguous explorations). The project's MVL+ is for the latter; analogues' "decompose first" doesn't directly transfer. |
| `/inquiry` runner already partially does D-FIRST | /inquiry has classification + per-branch sub-pipelines | YES | Confirmed. The architecture has already partially embraced D-FIRST-like patterns; the question is whether `/MVL+` should adopt them too. |
| `/navigation` covers D-AFTER-C | Navigation enumerates next directions from C's output + frontier questions | YES | Confirmed verbatim. D-AFTER-C as a NEW discipline would duplicate; D-AFTER-C as a re-route to existing N is the actual move. |
| Multi-head deferred per project plan | Meta-loop spec defers multi-head until sequential meta-loop runs 3 useful chains | YES | The deferral is explicit and conditional. D-FIRST as a near-term move conflicts with the deferral; as a long-term direction it aligns. |

---

## Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| D-CURRENT structural fit + audit-graded value | **CONFIRMED** | Just-finished audit + spec prerequisite + taxonomy classification all converge. |
| D-AFTER-C ≈ /navigation | **CONFIRMED** | Direct comparison of /navigation spec vs the user's framing shows verbatim overlap. |
| D-FIRST = multi-head meta-loop | **CONFIRMED** | Meta-loop architecture explicitly names this; project end-goal aligns. |
| D-REMOVED implementability | **CONFIRMED** | Classic /MVL already runs without D. |
| D-FIRST near-term feasibility | **SCANNED** | Deferred in current architecture; cost is in coordination machinery, not in concept. |
| D-REMOVED value-loss | **INFERRED** | No empirical run without D in MVL+'s context exists. The audit's 0-NEGATIVE finding is suggestive but doesn't directly test removal. |
| D-MULTIPLE coherence | **SCANNED** | Operations at different positions are observably different; project architecture already encodes this. |
| Cognitive analogues' transferability | **INFERRED** | Analogues exist but operate on different problem-shapes; literal transfer is not warranted. |
| Inquiry-shape variance from audit | **SCANNED** | Audit's N=2 non-meta-design inquiries showed qualitatively different D-value-shapes; suggestive only. |
| Effect of Q1.1-f / Q1.3-a (audit's recommendations) on D-CURRENT's value | **UNKNOWN** | Audit recommended refinements; if shipped, would they raise D-CURRENT's measured value? Not yet observed. |

---

## Frontier State

**Stable.** All five named candidate positions have been mapped at sufficient resolution. Cross-position comparison is complete. The frontier is not advancing — additional scanning would re-explore already-mapped regions. Discovery rate is declining.

### Jump scan — deliberate scan in a different direction

Scanned: "Is there a position the user did NOT name that's structurally coherent?"

- **D-INSIDE-S** (D as a sub-step of Sensemaking) — KILLED on category violation; S's job is meaning-construction; D's job is partition; collapsing them violates the discipline taxonomy's Core admission rule (each Core discipline has distinct primitive profile).
- **D-INSIDE-I** (D as a sub-step of Innovation) — KILLED similarly.
- **D-AS-CROSS-CUTTING** (D invocable at multiple loop points like /intuit) — INTERESTING. /intuit is Cross-cutting because it's "always-available infrastructure used routinely." Could D be similar? Audit found D ran 10/10 at the same fixed position; no evidence of multi-location use. But: the user's D-FIRST + D-CURRENT framing is precisely "D used at multiple locations." If D-FIRST and D-CURRENT are different operations, this isn't Cross-cutting; if they're the same operation, it MIGHT be. Convergence rests on the operation-shape question.
- **D-AS-SITUATIONAL** (D as on-demand, invoked when needed) — POSSIBLE. /comprehend, /elaborate, /wayfinding are Situational. If D-CURRENT is graded MEDIUM (often unnecessary) and 0 NEGATIVE (never harmful), reclassifying D as Situational (invokable when partition-need is detected, not auto-run) is structurally coherent. This is essentially the conditional-D framing the audit deferred.

The jump scan produced one new region (D-AS-SITUATIONAL / conditional-D) that's substantively different from the user's named positions. Add it to the inventory.

### Added: D-CONDITIONAL (situational D, invoked when partition-need is detected)

- **Loop architecture:** MVL+ runs E→S→{D?}→I→C, where D is conditionally executed based on a runtime signal (e.g., S surfaces multiple meaning-nodes that need partitioning; or actionable-space has cross-piece coupling).
- **D operates on:** Same as D-CURRENT (S's SV6).
- **D produces:** Same as D-CURRENT (question-tree partition).
- **Consumer:** Same as D-CURRENT (Innovation per piece).
- **Supporting evidence:**
  - Audit's 8/10 Layer-0-only finding suggests D was unnecessary for those 8.
  - Discipline taxonomy permits Situational classification ("admission is loose").
- **Opposing evidence:**
  - Currently breaks the always-pipeline rule (the audit's own hard constraint).
  - Requires a runtime signal (the partition-need detector) which doesn't exist yet.
  - Discipline taxonomy's Core admission requires "operate pipeline-sequentially"; reclassifying as Situational is a category change, not a position shift.
- **Confidence:** **HIGH** that D-CONDITIONAL is a coherent position. **MEDIUM** that the runtime detector is feasible (not impossible; not free). **LOW-MEDIUM** that this is the right move given conservation principles in the taxonomy.

---

## Gaps and Recommendations

### Bounded gaps

- **Effect of audit's recommended refinements on D-CURRENT's measured value** — UNKNOWN until those refinements ship and accumulate data. This gap is bounded (it's an empirical observation that will resolve over time), not unbounded.
- **D-FIRST cost in this corpus's inquiry-shape distribution** — UNKNOWN. The corpus is meta-design; D-FIRST's value depends on whether non-meta-design inquiries have multi-piece queries. Bounded by accumulating non-meta-design corpus.
- **D-CONDITIONAL detector feasibility** — UNKNOWN. Bounded by whether someone tries to specify the detector.

### What this exploration leaves to Sensemaking

The biggest ambiguities Sensemaking should collapse:

1. **Is "decomposition" one operation or several?** The user's framing treats it as one cognitive operation that could sit at different positions. The architecture's reality is that the operation differs at different positions (coupling-perception vs scope-partition vs direction-enumeration). If they're DIFFERENT operations, the user's question is partly mis-framed; if they're the SAME operation in different slots, the question is correctly framed.

2. **Is "place D somewhere else in MVL+" the right scope, or is the right scope "use D differently across the architecture (MVL+ + meta-loop + runners)"?** The exploration found D-FIRST sits at meta-loop layer, not inside MVL+. The user's framing collapses these layers; sensemaking should clarify.

3. **What's the relationship between this inquiry's verdict and the project end-goal trajectory?** Multi-head meta-loop (the D-FIRST direction) is explicitly DEFERRED until sequential meta-loop matures. Should this inquiry recommend an action that matches the deferral, or should it recommend opening multi-head sooner?

4. **Does the audit's "0 NEGATIVE" finding outweigh the audit's "0 HIGH" finding?** D-CURRENT never costs negative but never produces transformative value either. Sensemaking should resolve whether this graded result favors KEEP or favors RELOCATE/REMOVE.

5. **Is the always-E→S→D→I→C rule itself the load-bearing thing, or is the pipeline shape just one possible architecture?** The audit treated the always-rule as a hard constraint; this inquiry has explicit authority to question it. Sensemaking should resolve the meta-question.

### What Sensemaking should NOT redo

- Re-mapping the candidate positions (already done here).
- Re-grading D-CURRENT's value (the audit did this; this inquiry consumes it).
- Re-defining /navigation, /decompose, or /inquiry (those specs are canonical).

### Self-reference notes

- This exploration was produced inside an MVL+ pipeline where D-CURRENT is the next discipline. Pre-seeding bias: the exploration is being read by D, which has structural interest in the verdict. Mitigation: the exploration is honest about D-CURRENT's audit-graded MEDIUM rating and surfaces non-self-favoring options (D-REMOVED, D-CONDITIONAL).
- The corpus the audit drew from is mostly meta-design. This inquiry is also meta-design. Verdict scope remains corpus-internal.
- The project end-goal already aligns D-FIRST with multi-head architecture, which is deferred. The verdict should account for this deferral being part of the project's DESIGN, not an oversight.

### Recommendations for next disciplines

**For Sensemaking:** Collapse the operation-shape ambiguity (1 operation vs N operations sharing a name). Stabilize the architectural-layer model (MVL+ pipeline vs meta-loop vs runner). Reconcile the audit's graded-MEDIUM verdict with the architectural-position question. Acknowledge sample bias persists.

**For Decomposition:** Partition the actionable space such that the user can decide between: (a) maintain current architecture (D-CURRENT in MVL+; /navigation as eyes; multi-head deferred); (b) reclassify D in MVL+ (Core → Situational; D-CONDITIONAL); (c) bring multi-head meta-loop forward (D-FIRST at meta-loop layer); (d) some combination.

**For Innovation:** Generate proposals per partition piece. Cover: keep-as-is variants, reclassification variants, multi-head-bring-forward variants, hybrids. Include inversions.

**For Critique:** Evaluate against the project end-goal trajectory; phase-fit; feasibility; the always-pipeline rule's load-bearing-ness; sample-bias caveat persistence.

---

## Frontier-Stability Convergence Check

- **Frontier stability:** YES — all named positions mapped; jump scan added one (D-CONDITIONAL); no further regions surfacing.
- **Declining discovery rate:** YES — additional cycles would re-explore.
- **Bounded gaps:** YES — three named gaps, all bounded by future observation rather than uncharted void.

**Convergence: ACHIEVED.** Exploration complete; hand off to Sensemaking.
