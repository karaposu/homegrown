# Branch: Surfacing — Output Correction (Traverse + Load vs Content-Bearing Inventory)

## Question

What is surfacing's actual output — given that the discipline's job is to **traverse + read relevant content so the LLM has that context in its working memory** (per the user's correction), and the prior finding's commitment to "a relevance-tagged inventory with full labeling content (identifier + functional one-line + surface form + optional adjacency facts)" as the output is **structurally wasteful and inefficient** because it asks the discipline to externalize content that the discipline has already read (and that the downstream LLM session already has in its workspace if continuity is preserved)?

Specifically: if surfacing's WORK is traversing + reading + LLM-loading, then what is the ARTIFACT (the saved-to-disk output) and what is the WORKSPACE (the in-memory context)? The two are distinct outputs and have different structural roles. The prior finding conflated them — committing the artifact to carry full labeling content. The user's correction reframes: the artifact is THIN (a record of HOW the traversal happened + the concept-names discovered during it); the workspace IS the loaded LLM context the discipline produces by reading.

## Goal

A MEANING-layer correction to the prior finding (`devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md` — Surfacing: Pure Discipline Clean Design) that re-specifies surfacing's output along two distinct dimensions:

1. **The WORKSPACE work-product** — what the LLM session holds in its working memory after surfacing fires. This is the substantive product (relevant content that has been READ INTO the in-mind context). Identify what this is operationally, how it persists across the inquiry's downstream disciplines, and what happens to it when the LLM session ends.

2. **The ARTIFACT work-product** — what surfacing writes to disk. This is the thin record. Identify what fields it contains (likely: a traversal-trace + concept-names-discovered + coverage-map-style metadata + confirmed-absent regions + frontier flags + the territory specification). Identify what it does NOT contain (the content of the items themselves — that lives in the workspace).

The user should be able to:

1. **Read the corrected output specification** as a finding-level artifact that supersedes Section 3 of the prior finding (Vocabulary + Output) on the specific point of what surfacing produces as a written artifact.

2. **Confirm the rest of the prior finding's commitments hold** — identity (Section 1), mechanism (Section 2), structural shape (Section 4), primitives (Section 5), failure framework (Section 6), calibration (Section 7), NOT-list (Section 8), compliance scope (Section 9). These are inherited and re-tested per CONCLUDE's enforcement.

3. **Understand the artifact-vs-workspace structural split** — what each is, where each lives, how each serves downstream disciplines, what happens to the workspace under session boundaries (LLM session-end loses the workspace; the thin artifact survives and can be used by a fresh session to re-construct what was relevant).

4. **Understand the operational consequences** for re-invocation (a fresh LLM session loading the thin artifact does NOT have the prior workspace; it needs to re-read the items if it needs the content again — or it operates on the thin trace alone if the trace is sufficient for the downstream task at hand).

5. **Understand the relevance-tag implication** — the 4-level relevance vocabulary (core/sub/side/umbrella) might still be applicable to the thin artifact's traversal-trace entries (e.g., "this concept name was discovered while the discipline judged X as core-relevant"), or it might not be needed at the artifact level (since the artifact is a trace, not a per-item assessment). This is a sub-question to adjudicate.

## Scope Check

**Question covers goal.** The 5 goal sub-asks all derive from the question's two dimensions (workspace work-product + artifact work-product) plus their downstream operational consequences (re-invocation, session boundaries, relevance-tag applicability).

**Specific-vs-pattern check.** The question is SPECIFIC to surfacing's output. The broader pattern — the artifact-vs-workspace distinction as a general design principle for cognitive disciplines whose work-product lives partly in the LLM session — is interesting but is surfaced as Open Question rather than primary focus.

**Scope NOT widened to:**

- A re-derivation of surfacing's identity from scratch (settled by the prior finding's Section 1; only the output sub-commitment is being refined here).
- A re-derivation of the relevance-attribution mechanism (settled by the prior finding's Section 2).
- A re-derivation of the structural shape (settled by the prior finding's Section 4; though the Assembly phase's role changes slightly since the output is thin — this is a refinement, not a redesign).
- A spec section organization for the new output schema (downstream STRUCTURAL inquiry).
- A migration path from current /explore's confidence-tagged-map output to surfacing's thin-trace output (downstream user-discretion).

## Layer Commitment

**Primary cognitive layer: MEANING.**

Justification: The user's correction questions what surfacing PRODUCES — its work-product. The prior finding's Section 3 committed a content-bearing inventory as the output; the user's correction says the work-product is dual (LLM workspace + thin artifact). This is a refinement of the discipline's identity at the output dimension — what surfacing IS in terms of what it makes.

Out-of-scope alternatives explicitly considered OUT OF SCOPE for THIS run:

- **STRUCTURAL** — the spec section organization for the new output schema (which fields go where; how the traversal-trace is formatted; whether the concept-names list is a flat list or a structured tree) is downstream. This inquiry produces the MEANING-layer commitment about what the artifact IS and what the workspace IS; the artifact's section structure is for a downstream STRUCTURAL inquiry.

- **PROCESS** — the operational mechanics of the workspace load (how the LLM holds the content; what counts as "in working memory"; cross-discipline workspace handoff) are downstream. This inquiry commits the MEANING of the workspace work-product; the runtime mechanics are downstream.

Sequential plan: THIS inquiry (MEANING refinement on output) → IF the STRUCTURAL inquiry from the prior finding's MUST is run, it incorporates THIS inquiry's output specification → IF a downstream PROCESS inquiry is run, it operationalizes the workspace handoff.

## Synthesis Trigger

**REQUIRED.** This inquiry refines a single prior inquiry's finding — `devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md`. The prior finding committed 16 structural decisions D1-D16 (per its Sensemaking phase) and produced a 9-section MEANING-layer characterization. This inquiry INHERITS most of those commitments without re-deriving them and refines specifically the output-related commitments (D3 vocabulary + D12 output schema in part; the relevance-tag-applicability question; the Assembly phase's product).

Priors being refined:

- `devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md` — committed: discipline named "surfacing"; relevance-attribution mechanism + 8 structural distinctions; 4-level relevance vocabulary; 3-phase structural shape + optional Boundary-discovery sub-phase + 6 Traversal components; 8 load-bearing primitives; LAYER 1/LAYER 2 failure-mode framework; calibration trajectory; re-invocation as parameterized variation; Core taxonomy placement; 8-item intrinsic NOT-list; MEANING-layer compliance scope. **Specifically refined here: the output specification (Section 3 — the relevance-tagged inventory with full labeling content was the commitment; this inquiry refines it to artifact-vs-workspace split with the artifact being thin).**

Per CONCLUDE's enforcement: this finding's frontmatter will declare `refines:` of the prior finding, and the prior carries N≥3 inherited commitments. The `## Inherited Commitments Re-test` section will be required and will:

- List each inherited commitment from the prior finding
- For each commitment that the user's correction does NOT touch: flag as **INHERITED-WITHOUT-RE-TEST** with reason "out of scope; the user's correction targets the output specification only; this commitment survives unaffected"
- For each commitment that the user's correction DOES touch (output-related): mark **RE-TESTED** and either confirm the prior commitment stands modulo the output refinement, or refine the commitment

Plan the Sensemaking + Critique disciplines to actually do this re-testing — not just record the inheritance.

## Diagnostic Constraints

- **The user's correction is the central evidence.** The user said: "by no means we expect output to be fully relevant content. thats crazy and weird and inefficient" + "surfacing's job is to traverse relevant parts and read them, so llm will have that context in it's mind" + "output might be how this traverse happens and concept names that discovered during surfacing maybe?" — the inquiry's job is to operationalize this correction into a structural commitment.

- **The artifact-vs-workspace distinction is the load-bearing concept.** The prior finding's Section 3 conflated artifact and workspace — committing the artifact to carry full labeling content (which is workspace-territory). This inquiry must explicitly separate them.

- **The LLM session boundary is a real operational concern.** The workspace is session-local; the artifact is persistent. What happens when:
  - The discipline finishes its current invocation but the inquiry continues with other disciplines (in the SAME LLM session): the workspace persists; the artifact is the cross-discipline handoff record.
  - The session ends and a new session resumes the inquiry: the workspace is lost; the artifact must be sufficient for the new session to either operate without re-reading, or to know what to re-read.

- **The CONCLUDE artifact's relationship to surfacing's artifact.** A finding.md at the end of an inquiry is a different artifact than surfacing's output. Surfacing's output is per-invocation; the finding.md compiles across all disciplines. These should NOT be conflated. Surfacing's output is consumed by downstream disciplines + CONCLUDE; CONCLUDE may also read items from the workspace if the LLM session persists.

- **The relevance-tag's place under the artifact-vs-workspace split.** The 4-level vocabulary (core/sub/side/umbrella) might apply:
  - To traversal-trace entries in the artifact (e.g., "this concept was discovered while judging item X as core-relevant"), making the artifact carry tags
  - To workspace items only (the items in working memory have implicit relevance via being there at all; the artifact only records what was traversed)
  - To both, depending on operational need
  This inquiry must adjudicate.

- **The "concept-names discovered" idea from the user.** The user mentioned "concept names that discovered during surfacing maybe?" as the artifact's possible content. This is preliminary; the inquiry should operationalize what "concept-names" means here (load-bearing terms? new vocabulary the discipline encountered? structural references that downstream needs to know exist?) and whether it should be a flat list or have more structure.

- **The asymmetric-failure principle's interaction with the new output.** The prior finding committed lean-toward-inclusion under uncertainty (territory-bounded + uncertainty-includes). The new output's THIN nature might change the asymmetric-failure dynamics — if downstream operates on the workspace (loaded content) rather than the artifact (thin trace), then "missing-relevant" failure means the workspace is incomplete (not the artifact); "surfacing-irrelevant" means the workspace was loaded with irrelevant content (wasting LLM context budget). The failure modes still apply but at the workspace level, not the artifact level.

- **The calibration trajectory's interaction with the new output.** The prior finding committed primary-self-contained calibration signals (PS1-PS5). Some signals (e.g., PS5 — coverage of edge items via sub/side-to-core ratio) presupposed an inventory with relevance tags per item. Under the new output, the signal might need to operate on the workspace (LLM-introspected counts) rather than the artifact (which doesn't carry full per-item tags). This may require refinement of the calibration signals.

- **The re-invocation semantics' interaction with the new output.** The prior finding committed re-invocation as parameterized variation with optional prior-inventory + refined-sub-purpose input parameters. The prior-inventory input parameter referenced the full inventory. Under the new output, the prior-inventory either refers to (a) the thin artifact's traversal trace, or (b) the workspace state if the LLM session persists. This needs adjudication.

- **The Assembly phase's role under the new output.** The prior finding committed Assembly as the phase that compiles the inventory + confirmed-absent regions + coverage map + frontier flags. Under the new output, Assembly compiles the THIN artifact, not a content-rich inventory. The Assembly phase's role is preserved but its product is lighter.

- **Anti-coupling vigilance.** The prior finding's hard constraint was independence from current /explore's content. The user's correction refines surfacing's identity in a direction that further DIFFERENTIATES it from current /explore (current /explore commits a "confidence-tagged map" with surfaced-items-bearing-content; the new surfacing output is thinner). This anti-coupling is preserved by the refinement.

## Relationships

- **REFINES:** `devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md` — specifically the output-related commitments (the artifact specification). All other commitments are inherited and re-tested.

- **RELATED (orientation only):**
  - `docs/discipline_taxonomy.md` — taxonomy frame (Core placement preserved)
  - `docs/discipline_design_history/for_explore.md` — sibling concept; held APART
  - `docs/thinking_space_dynamics.md` — primitive set (Working Memory primitive is central to the workspace work-product concept)
  - `docs/runtime_environment/folder_based.md` — artifact conventions (the new thin artifact still saves to the inquiry folder)

- **POTENTIAL DOWNSTREAM:**
  - STRUCTURAL inquiry on the surfacing spec file (now informed by both prior finding + this refinement)
  - PROCESS inquiry on the workspace-handoff mechanics
  - User-discretion decision on rename / migration timeline (unchanged by this refinement)
